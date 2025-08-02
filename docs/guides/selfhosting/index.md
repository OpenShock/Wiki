---
tags:
  - selfhost
  - api
  - backend
---

# Self Hosting

## Requirements

Hardware: 

1. A server / computer to run linux containers on. Docker Desktop with WSL also works, but isn't really recommended.

Software: 

1. `Docker` and `docker compose` installed on the server. You can use the [Docker install script](https://github.com/docker/docker-install) for linux, or [Docker Desktop](https://www.docker.com/products/docker-desktop/) on Windows.

Other:

1. Domain name, setup to pointed towards your server.
2. HTTPS - required for cookies to work securely. You can use cloudflare for lets encrypt for example.

## Preparing the server

Install software from the [Requirements](#requirements) on the server.

### Docker compose setup

Make a new folder in a known location.

Add two files with the names `docker-compose.yml` and `.env`. Paste their contents from below.

??? "docker-compose.yml"
    ```yaml

    # This file is a minimal plug and play working example of a runnable OpenShock stack.
    services:
    
      db: # We need a postgres database, preferably version 15+
        image: postgres:16
        restart: unless-stopped
        container_name: openshock-postgres
        healthcheck:
          test: ["CMD-SHELL", "pg_isready -d $${POSTGRES_DB} -U $${POSTGRES_USER}"]
          start_period: 20s
          interval: 30s
          retries: 5
          timeout: 5s
        networks:
         - openshock
        environment:
          POSTGRES_PASSWORD: ${PG_PASS:?database password required}
          POSTGRES_USER: ${PG_USER:-openshock}
          POSTGRES_DB: ${PG_DB:-openshock}
        volumes:
          - ./postgres-data:/var/lib/postgresql/data # Data is saved in a folder called postgres-data in the current working directory
      
      redis:
        restart: unless-stopped
        networks:
         - openshock
        image: redis/redis-stack-server:latest
        healthcheck:
          test: ["CMD-SHELL", "redis-cli ping | grep PONG"]
          start_period: 20s
          interval: 30s
          retries: 5
          timeout: 3s
        volumes:
          - ./redis-data:/data # Same goes for redis
        environment:
          - "REDIS_ARGS=--notify-keyspace-events KEA"
    
      api:
        image: ghcr.io/openshock/api:latest
        restart: unless-stopped
        networks:
         - openshock
        depends_on:
          - db
          - redis
        env_file: .env
        environment:
          OPENSHOCK__FRONTEND__BASEURL: https://${OPENSHOCK_DOMAIN:-openshock.local}
          OPENSHOCK__FRONTEND__SHORTURL: https://${OPENSHOCK_DOMAIN:-openshock.local}
          OPENSHOCK__FRONTEND__COOKIEDOMAIN: ${OPENSHOCK_DOMAIN:-openshock.local}
          OPENSHOCK__DB__CONN: Host=db;Port=5432;Database=${PG_USER:-openshock};Username=${PG_USER:-openshock};Password=${PG_PASS}
          OPENSHOCK__REDIS__HOST: redis
          OPENSHOCK__TURNSTILE__ENABLE: false
        labels:
          - "traefik.enable=true"
          - "traefik.http.routers.openshock-api.rule=Host(`${OPENSHOCK_API_SUBDOMAIN:-api}.${OPENSHOCK_DOMAIN:-openshock.local}`)"
          - "traefik.http.routers.openshock-api.entrypoints=https"
          - "traefik.http.routers.openshock-api.tls=true"
          - "traefik.http.routers.openshock-api.service=openshock-api"
          - "traefik.http.services.openshock-api.loadbalancer.server.port=80"
      
      webui:
        image: ghcr.io/openshock/webui:latest
        restart: unless-stopped
        networks:
          - openshock
        environment:
          OPENSHOCK_NAME: OpenShock
          OPENSHOCK_URL: ${OPENSHOCK_DOMAIN:-openshock.local}
          OPENSHOCK_SHARE_URL: https://${OPENSHOCK_DOMAIN:-openshock.local}
          OPENSHOCK_API_URL: https://${OPENSHOCK_API_SUBDOMAIN:-api}.${OPENSHOCK_DOMAIN:-openshock.local}
        labels:
          - "traefik.enable=true"
          - "traefik.http.routers.openshock-webui.rule=Host(`${OPENSHOCK_DOMAIN:-openshock.local}`)"
          - "traefik.http.routers.openshock-webui.entrypoints=https"
          - "traefik.http.routers.openshock-webui.tls=true"
          - "traefik.http.routers.openshock-webui.service=openshock-webui"
          - "traefik.http.routers.openshock-webui.middlewares=osr-s,osr-c,osr-t"
          - "traefik.http.services.openshock-webui.loadbalancer.server.port=80"
          - "traefik.http.middlewares.osr-s.redirectregex.regex=^https://${OPENSHOCK_DOMAIN:-openshock.local}/s/(.*)"
          - "traefik.http.middlewares.osr-s.redirectregex.replacement=https://${OPENSHOCK_DOMAIN:-openshock.local}/#/public/proxy/shares/links/$$1"
          - "traefik.http.middlewares.osr-c.redirectregex.regex=^https://${OPENSHOCK_DOMAIN:-openshock.local}/c/(.*)"
          - "traefik.http.middlewares.osr-c.redirectregex.replacement=https://${OPENSHOCK_DOMAIN:-openshock.local}/#/public/proxy/shares/code/$$1"
          - "traefik.http.middlewares.osr-t.redirectregex.regex=^https://${OPENSHOCK_DOMAIN:-openshock.local}/t/(.*)"
          - "traefik.http.middlewares.osr-t.redirectregex.replacement=https://${OPENSHOCK_DOMAIN:-openshock.local}/#/public/proxy/token/$$1"
    
      lcg:
        image: ghcr.io/openshock/live-control-gateway:latest
        restart: unless-stopped
        networks:
         - openshock
        depends_on:
         - db
         - redis
        environment:
          OPENSHOCK__REDIS__HOST: redis
          OPENSHOCK__DB__CONN: Host=db;Port=5432;Database=${PG_USER:-openshock};Username=${PG_USER:-openshock};Password=${PG_PASS}
          OPENSHOCK__LCG__COUNTRYCODE: DE
          OPENSHOCK__LCG__FQDN: ${OPENSHOCK_GATEWAY_SUBDOMAIN:-gateway}.${OPENSHOCK_DOMAIN:-openshock.local}
        labels:
          - "traefik.enable=true"
          - "traefik.http.routers.openshock-gateway.rule=Host(`${OPENSHOCK_GATEWAY_SUBDOMAIN:-gateway}.${OPENSHOCK_DOMAIN:-openshock.local}`)"
          - "traefik.http.routers.openshock-gateway.entrypoints=https"
          - "traefik.http.routers.openshock-gateway.tls=true"
          - "traefik.http.routers.openshock-gateway.service=openshock-gateway"
          - "traefik.http.services.openshock-gateway.loadbalancer.server.port=80"
    
      cron:
        image: ghcr.io/openshock/cron:latest
        restart: unless-stopped
        networks:
         - openshock
        depends_on:
          - db
          - redis
        environment:
          OPENSHOCK__REDIS__HOST: redis
          OPENSHOCK__DB__CONN: Host=db;Port=5432;Database=${PG_USER:-openshock};Username=${PG_USER:-openshock};Password=${PG_PASS}
        labels:
          - "traefik.enable=true"
          - "traefik.http.routers.openshock-cron.rule=Host(`${OPENSHOCK_DOMAIN:-localhost}`) && PathPrefix(`/hangfire`)"
          - "traefik.http.routers.openshock-cron.entrypoints=https"
          - "traefik.http.routers.openshock-cron.tls=true"
          - "traefik.http.routers.openshock-cron.service=openshock-cron"
          - "traefik.http.services.openshock-cron.loadbalancer.server.port=780"
        
      traefik:
        image: traefik:latest
        container_name: traefik
        command:
          #- "--log.level=DEBUG"
          - "--providers.docker=true"
          - "--providers.docker.exposedbydefault=false"
          - "--entryPoints.https.address=:443"
          #- "--api.insecure=true"
        restart: unless-stopped
        networks:
          - openshock
        ports:
          - 80:80
          - 443:443
          #- 8080:8080 # Traefik Web UI (enabled by --api.insecure=true)
        volumes:
          - /etc/localtime:/etc/localtime:ro
          - /var/run/docker.sock:/var/run/docker.sock:ro
    
    networks:
      openshock:
    ```

??? ".env"
    ``` yaml
    # Required variables (uncomment and set values!)
    #PG_PASS=someSecurePassword(1)

    # Compose variables
    OPENSHOCK_DOMAIN=openshock.local #(2)
    OPENSHOCK_GATEWAY_SUBDOMAIN=gateway #(3)
    OPENSHOCK_API_SUBDOMAIN=api #(4)

    #global email config
    OPENSHOCK__MAIL__SENDER__NAME=OpenShock System
    OPENSHOCK__MAIL__SENDER__EMAIL=system@openshock.app

    #mail configs. uncomment one of the 2 sections below and make your config changes

    #MailJet
    #OPENSHOCK__MAIL__TYPE: MAILJET # MAILJET or SMTP, check Documentation
    #OPENSHOCK__MAIL__MAILJET__KEY: mailjetkey
    #OPENSHOCK__MAIL__MAILJET__SECRET: mailjetsecret
    #OPENSHOCK__MAIL__MAILJET__TEMPLATE__PASSWORDRESET: 9999999

    #SMTP
    OPENSHOCK__MAIL__TYPE=SMTP # MAILJET or SMTP, check Documentation
    OPENSHOCK__MAIL__SMTP__HOST=mail.domain.zap
    OPENSHOCK__MAIL__SMTP__USERNAME=open@shock.zap
    OPENSHOCK__MAIL__SMTP__PASSWORD=SMTPPASSWORD
    OPENSHOCK__MAIL__SMTP__ENABLESSL=true
    OPENSHOCK__MAIL__SMTP__VERIFYCERTIFICATE=true

    ```

    1.  Primary postgres database password. Make it something secure like a random 32 character password.
    2.  Application domain. e.g. `openshock.app`
    3.  Gateway subdomain. Can be left as is. e.g. `de1-gateway`
    4.  API subdomain. Default is `api`

These two can also be found in the [API repository](https://github.com/OpenShock/API)

#### Variables that must be changed in `.env`:

- `PG_PASS` is your primary postgres database password. Make it something secure like a random 32 character password.
- `OPENSHOCK_DOMAIN` change this to your domain name. e.g. openshock.app
- Email configuration. You need to decide between SMTP and MAILJET for your email sending service. Email server is currently required, this may change in the future.

You can change other variables in the `docker-compose.yml`. Check the [API README](https://github.com/OpenShock/API) for more information on the environment variables.

PS: the .env file is only actually used for variables in the docker-compose file itself and as the env_file for the api container. Feel free to change this.

### Reverse proxy

By default the reverse proxy that comes with this example is traefik. Everything should be setup and should be available under https on port 443 on your domain if done correctly.

If you decide to have your own reverse proxy or just straight up use a different domain for short urls, you need to setup redirects.

- `/s/$` -> `/#/public/proxy/shares/links/$`
- `/c/$` -> `/#/public/proxy/shares/code/$`
- `/t/$` -> `/#/public/proxy/token/$`

There is a short hand letter, that redirects to the webui url, with this prefix added, and `$` being a placeholder.

This setup also assumes that your frontend is for example under `openshock.app`. And API and Gateway are subdomains of the current domain name.
If you want to have your frontend also be under a subdomain, you will need to edit the reverse proxy todo so. And set the frontend urls environment variables accordingly.

#### NGINX reverse proxy example with custom SSL

We can use this modified docker-compose.yml, difference here is, we removed traefik and added nginx.
In addition we also need a ssl certificate, change the path to your needs, and create a `nginx-site.conf` file.

??? "docker-compose.yml"
    ```yaml

    # Minimal example for nginx
    services:

      db: # We need a postgres database, preferably version 15+
        image: postgres:16
        restart: unless-stopped
        container_name: openshock-postgres
        healthcheck:
          test: ["CMD-SHELL", "pg_isready -d $${POSTGRES_DB} -U $${POSTGRES_USER}"]
          start_period: 20s
          interval: 30s
          retries: 5
          timeout: 5s
        networks:
        - openshock
        environment:
          POSTGRES_PASSWORD: ${PG_PASS:?database password required}
          POSTGRES_USER: ${PG_USER:-openshock}
          POSTGRES_DB: ${PG_DB:-openshock}
        volumes:
          - ./postgres-data:/var/lib/postgresql/data # Data is saved in a folder called postgres-data in the current working directory
      
      redis:
        restart: unless-stopped
        networks:
        - openshock
        image: redis/redis-stack-server:latest
        healthcheck:
          test: ["CMD-SHELL", "redis-cli ping | grep PONG"]
          start_period: 20s
          interval: 30s
          retries: 5
          timeout: 3s
        volumes:
          - ./redis-data:/data # Same goes for redis
        environment:
          - "REDIS_ARGS=--notify-keyspace-events KEA"

      api:
        image: ghcr.io/openshock/api:latest
        restart: unless-stopped
        networks:
        - openshock
        depends_on:
          - db
          - redis
        env_file: .env
        environment:
          OPENSHOCK__FRONTEND__BASEURL: https://${OPENSHOCK_DOMAIN:-openshock.local}
          OPENSHOCK__FRONTEND__SHORTURL: https://${OPENSHOCK_DOMAIN:-openshock.local}
          OPENSHOCK__FRONTEND__COOKIEDOMAIN: ${OPENSHOCK_DOMAIN:-openshock.local}
          OPENSHOCK__DB__CONN: Host=db;Port=5432;Database=${PG_USER:-openshock};Username=${PG_USER:-openshock};Password=${PG_PASS}
          OPENSHOCK__REDIS__HOST: redis
          OPENSHOCK__TURNSTILE__ENABLE: false
      
      webui:
        image: ghcr.io/openshock/webui:latest
        restart: unless-stopped
        networks:
          - openshock
        environment:
          OPENSHOCK_NAME: OpenShock
          OPENSHOCK_URL: ${OPENSHOCK_DOMAIN:-openshock.local}
          OPENSHOCK_SHARE_URL: https://${OPENSHOCK_DOMAIN:-openshock.local}
          OPENSHOCK_API_URL: https://${OPENSHOCK_API_SUBDOMAIN:-api}.${OPENSHOCK_DOMAIN:-openshock.local}

      lcg:
        image: ghcr.io/openshock/live-control-gateway:latest
        restart: unless-stopped
        networks:
        - openshock
        depends_on:
        - db
        - redis
        environment:
          OPENSHOCK__REDIS__HOST: redis
          OPENSHOCK__DB__CONN: Host=db;Port=5432;Database=${PG_USER:-openshock};Username=${PG_USER:-openshock};Password=${PG_PASS}
          OPENSHOCK__LCG__COUNTRYCODE: DE
          OPENSHOCK__LCG__FQDN: ${OPENSHOCK_GATEWAY_SUBDOMAIN:-gateway}.${OPENSHOCK_DOMAIN:-openshock.local}

      cron:
        image: ghcr.io/openshock/cron:master
        restart: unless-stopped
        networks:
        - openshock
        depends_on:
          - db
          - redis
        environment:
          OPENSHOCK__REDIS__HOST: redis
          OPENSHOCK__DB__CONN: Host=db;Port=5432;Database=${PG_USER:-openshock};Username=${PG_USER:-openshock};Password=${PG_PASS}
        
      nginx:
        image: nginx
        restart: unless-stopped
        networks:
          - openshock
        ports:
          - 80:80
          - 443:443
        volumes:
          - ./nginx-site.conf:/etc/nginx/conf.d/nginx-site.conf
          - ./certs:/certs

    networks:
      openshock:

    ```

**You will need to change the server names here!**

??? "nginx-site.conf"

    ```yaml

    server {
        listen 443 ssl;
        server_name openshock.local;
        ssl_certificate /certs/fullchain.pem;
        ssl_certificate_key /certs/privkey.pem;

        # Redirect /s/<anything> to /#/public/proxy/shares/links/<anything>
        location ~ ^/s/(.*)$ {
            return 301 /#/public/proxy/shares/links/$1;
        }

        # Redirect /c/<anything> to /#/public/proxy/shares/code/<anything>
        location ~ ^/c/(.*)$ {
            return 301 /#/public/proxy/shares/code/$1;
        }

        # Redirect /t/<anything> to /#/public/proxy/token/<anything>
        location ~ ^/t/(.*)$ {
            return 301 /#/public/proxy/shares/token/$1;
        }

        location / {
            proxy_pass http://webui:80;
            proxy_set_header Host $host;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection $connection_upgrade
        }
    }


    server {
        listen 443 ssl;
        server_name api.openshock.local;
        ssl_certificate /certs/fullchain.pem;
        ssl_certificate_key /certs/privkey.pem;

        location / {
            proxy_pass http://api:80;
            proxy_set_header Host $host;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection $connection_upgrade
        }
    }

    server {
        listen 443 ssl;
        server_name gateway.openshock.local;
        ssl_certificate /certs/fullchain.pem;
        ssl_certificate_key /certs/privkey.pem;

        location / {
            proxy_pass http://lcg:80;
            proxy_set_header Host $host;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection $connection_upgrade
        }
    }

    ```

## Done

Congratulations, the backend and website should be working now. :partying_face:

You can now set the backend domain for the firmware to your api url via the `domain` serial command.

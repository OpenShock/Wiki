<!-- 
please note that this is my very first commit / contribution to a project, it may be very ugly or perhaps not especially well framed. 
but I especially want to bring some precision that blocked me during installation
I don't know if my contribution is valid, but it's the least I can do after receiving help. I've tried to do the best I can for the comments and other information. 
-->
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

1. Domain name, setup to pointed towards your server, note : 
2. HTTPS - required for cookies to work securely. You can use cloudflare for lets encrypt for example.

note : <!-- comment for the validator it's one of the parts that blocked me at one point, my english doesn't help too much but I find it important to have an example and also to specify that you need 3 domains. -->
1. since several docker containers are exposed, this requires a specific dns configuration
   it's necessary to have 1 domain and 2 sub-domains pointing to the server here's an example
   if the domain used is openshock.local the .env will default to api.openshock.local and gateway.openshock.local so you'll need to point the domains in this way to the server ip 

2. if you use 3 sub-domains 
(does not work with cloudflare)
example
shock.openshock.local
the .env will work like this by default
for domaine shock.openshock.local 
api : api.shock.openshock.local
gateway : gateway.shock.openshock.local
you'll need to match your dns zone with the above sub-domains (adapted to your configuration) to the server's public ip 



## Preparing the server

Install software from the [Requirements](#requirements) on the server.

### generate valid https certificate (lets encrypt)
<!-- for the https part I must admit that it's a bit of a DIY job as I'm not totally familiar with docker but I wanted to do it the right way so I did it for myself afterwards I'll see about validation -->
1. Install Certbot ```sudo apt-get install certbot ``` for a debian 12 server my scenario for me
2. command to generate certificate two possible scenarios
3. if you use 3 subdomains for exemple (to suit your needs) ``` sudo certbot certonly --standalone -d shock.openshock.local -d api.shock.openshock.local -d gateway.shock.openshock.local``` command will create a single certificate containing the 3 sub-domains 
4. if you use 1 domain and 2 subdomain (to suit your needs) ``` sudo certbot certonly --standalone -d openshock.local -d api.openshock.local -d gateway.openshock.local``` command will create a single certificate containing the 1 domain and 2 sub-domains
5.  once the certificates have been generated you should find them in this example in ```/etc/letsencrypt/live/shock.openshock.local/``` if you are working with 3 subdomains or ```/etc/letsencrypt/live/openshock.local/``` if you are using 1 domain + 2 subdomains.

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
          - "traefik.http.middlewares.osr-s.redirectregex.replacement=https://${OPENSHOCK_DOMAIN:-openshock.local}/#/public/proxy/shares/link/$$1"
          - "traefik.http.middlewares.osr-c.redirectregex.regex=^https://${OPENSHOCK_DOMAIN:-openshock.local}/c/(.*)"
          - "traefik.http.middlewares.osr-c.redirectregex.replacement=https://${OPENSHOCK_DOMAIN:-openshock.local}/#/public/proxy/shares/code/$$1"
          - "traefik.http.middlewares.osr-t.redirectregex.regex=^https://${OPENSHOCK_DOMAIN:-openshock.local}/t/(.*)"
          - "traefik.http.middlewares.osr-t.redirectregex.replacement=https://${OPENSHOCK_DOMAIN:-openshock.local}/#/public/proxy/shares/token/$$1"
    
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
    OPENSHOCK_DOMAIN=openshock.local #(2) two possible for example openshock.local or if you use 3 subdomains (does not work with cloudflare) shock.openshock.local
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
    OPENSHOCK__MAIL__SMTP__PORT=587 # to be adapted according to your mail server used

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

- `/s/$` -> `/#/public/proxy/shares/link/$`
- `/c/$` -> `/#/public/proxy/shares/code/$`
- `/t/$` -> `/#/public/proxy/shares/token/$`

There is a short hand letter, that redirects to the webui url, with this prefix added, and `$` being a placeholder.

This setup also assumes that your frontend is for example under `openshock.app`. And API and Gateway are subdomains of the current domain name.
If you want to have your frontend also be under a subdomain, you will need to edit the reverse proxy todo so. And set the frontend urls environment variables accordingly.

#### NGINX reverse proxy example with custom SSL

We can use this modified docker-compose.yml, difference here is, we removed traefik and added nginx.
In addition we also need a ssl certificate, change the path to your needs, and create a `nginx-site.conf` file.

<!--
for some reason i still have the bug with certicat i installed a 0 machine nothing to do even copy paste the certificate to make it work i modified the docker compose of nginx 
by adding in volumes (the domain name is an example)
- /etc/letsencrypt/live/openshock.local/fullchain.pem:/certs/fullchain.pem:ro
- /etc/letsencrypt/live/openshock.local/privkey.pem:/certs/privkey.pem:ro
-->
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
          OPENSHOCK__TURNSTILE__ENABLE: false #so here's the thing: when I ran the container the first time it bugged me, it wanted me to set false to "false" and then I was able to docker-compose up -d
      
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
          - ./nginx-site.conf:/etc/nginx/conf.d/nginx-site.conf #I had a bug when I made it, it just created a directory /nginx-site.conf in the directory where docker-compose.yml is located, so I deleted the directory and created nano nginx-site.conf.
          - ./certs:/cert
          # I've left this as a comment because I think it's only valid for me, even though it's just done it to me on a new virtual machine, a vps moreover.
          #- /etc/letsencrypt/live/openshock.local/fullchain.pem:/certs/fullchain.pem:ro 
          #- /etc/letsencrypt/live/openshock.local/privkey.pem:/certs/privkey.pem:ro
    networks:
      openshock:

    ```

**You will need to change the server names here!**
<!--here I just made a modification I globalized http2 rather than http1 it's not much but it seems to be useful I'll try to see if I can activate http3-->
<!--I also found this little typo in the nginx config just one ; which is missing on the parts proxy_set_header Connection $connection_upgrade it generates errors in nginx logs-->
<!-- I didn't quite understand on my previous instance that I installed on the proxy_set_header part I had this proxy_set_header Connection “upgrade”; in the meantime it has changed on the wiki to proxy_set_header Connection $connection_upgrade and it gave me quite a few errors in nginx logs, so I put it back in 
proxy_set_header Connection “upgrade”; 
and the new instance I created to try and improve the process started up correctly this time if
-->
??? "nginx-site.conf" 

```yaml

server {
    listen 80;
    server_name openshock.local;
    return 301 https://$server_name$request_uri;
}

server {
    listen 80;
    server_name api.openshock.local;
    return 301 https://$server_name$request_uri;
}

server {
    listen 80;
    server_name gateway.openshock.local;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    http2  on;
    server_name openshock.local;
    resolver 192.168.42.3 valid=300s;
    ssl_certificate /certs/fullchain.pem;
    ssl_certificate_key /certs/privkey.pem;
    ssl_protocols                 TLSv1.2 TLSv1.3;
    ssl_ciphers                   TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:TLS_AES_128_CCM_8_SHA256:TLS_AES_128_CCM_SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_trusted_certificate       /certs/chain.pem;
    ssl_prefer_server_ciphers     on;
    ssl_stapling                  on;
    ssl_stapling_verify           on;
    ssl_session_cache    shared:SSL:10m;
    ssl_session_timeout  10m;
    add_header Strict-Transport-Security "max-age=15552000; includeSubDomains" always;
    add_header Referrer-Policy                   "no-referrer"       always;
    add_header X-Content-Type-Options            "nosniff"           always;
    add_header X-Download-Options                "noopen"            always;
    add_header X-Frame-Options                   "SAMEORIGIN"        always;
    add_header X-Permitted-Cross-Domain-Policies "none"              always;
    add_header X-Robots-Tag                      "noindex, nofollow" always;
    add_header X-XSS-Protection                  "1; mode=block"     always;

    
    # Redirect /s/<anything> to /#/public/proxy/shares/link/<anything>
    location ~ ^/s/(.*)$ {
        return 301 /#/public/proxy/shares/links/$1;
    }

    # Redirect /c/<anything> to /#/public/proxy/shares/code/<anything>
    location ~ ^/c/(.*)$ {
        return 301 /#/public/proxy/shares/code/$1;
    }

    # Redirect /t/<anything> to /#/public/proxy/shares/token/<anything>
    location ~ ^/t/(.*)$ {
        return 301 /#/public/proxy/token/$1;
    }

    location / {
        proxy_pass http://webui:80;
        proxy_set_header Host $host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection keep-alive;
        proxy_set_header Connection "upgrade";
   }
}


server {
    listen 443 ssl;
    http2  on;
    server_name api.openshock.local;
    resolver 192.168.42.3 valid=300s;
    ssl_certificate /certs/fullchain.pem;
    ssl_certificate_key /certs/privkey.pem;
    ssl_trusted_certificate       /certs/chain.pem;
    ssl_protocols                 TLSv1.2 TLSv1.3;
    ssl_ciphers                   TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:TLS_AES_128_CCM_8_SHA256:TLS_AES_128_CCM_SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers     on;
    ssl_stapling                  on;
    ssl_stapling_verify           on; 
    ssl_session_cache    shared:SSL:10m;
    ssl_session_timeout  10m;
    add_header Strict-Transport-Security "max-age=15552000; includeSubDomains" always;    
    add_header Referrer-Policy                   "no-referrer"       always;
    add_header X-Content-Type-Options            "nosniff"           always;
    add_header X-Download-Options                "noopen"            always;
    add_header X-Frame-Options                   "SAMEORIGIN"        always;
    add_header X-Permitted-Cross-Domain-Policies "none"              always;
    add_header X-Robots-Tag                      "noindex, nofollow" always;
    add_header X-XSS-Protection                  "1; mode=block"     always;

    location / {
        proxy_pass http://api:80;
        proxy_set_header Host $host;
        proxy_set_header Connection keep-alive;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}

server {
    listen 443 ssl;
    http2  on;
    server_name gateway.openshock.local;
    resolver 192.168.42.3 valid=300s;
    ssl_certificate /certs/fullchain.pem;
    ssl_certificate_key /certs/privkey.pem;
    ssl_ciphers                   TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:TLS_AES_128_CCM_8_SHA256:TLS_AES_128_CCM_SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_trusted_certificate       /certs/chain.pem;
    ssl_protocols                 TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers     on;
    ssl_stapling                  on;
    ssl_stapling_verify           on;
    ssl_session_cache    shared:SSL:10m;
    ssl_session_timeout  10m;

    add_header Strict-Transport-Security "max-age=15552000; includeSubDomains" always;
    add_header Referrer-Policy                   "no-referrer"       always;
    add_header X-Content-Type-Options            "nosniff"           always;
    add_header X-Download-Options                "noopen"            always;
    add_header X-Frame-Options                   "SAMEORIGIN"        always;
    add_header X-Permitted-Cross-Domain-Policies "none"              always;
    add_header X-Robots-Tag                      "noindex, nofollow" always;
    add_header X-XSS-Protection                  "1; mode=block"     always;


    location / {
        proxy_pass http://lcg:80;
        proxy_set_header Host $host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection keep-alive;
        proxy_set_header Connection "upgrade";
    }
}
    ```

## Done

Congratulations, the backend and website should be working now. :partying_face:

You can now set the backend domain for the firmware to your api url via the `domain` serial command.
<!--actually I managed to bug on it probably due to fatigue and such but the more precise it is the less you'll have people like me who are sometimes in a fog. -->
To do this, simply go to your arduino ide, plug in your esp32 in usb, go to the serial monitor and write, for example 
```domain api.sock.openshock.local``` or using one domain and 2 subdomain ```domain api.openshock.local``` (to be adapted to your own domain that you defined in the .env) then press enter. You should get confirmation that it's using your 3 subdomain. 

# Selfhosting

## Requirements

1. a server with docker installed
2. a network with wifi
3. compatible hardware board anda shocker

## Container setup


### Openshock api and webui
tldr: setup the api and supporting services, reverse-proxied using nginx proxy manager


1. postgres setup + volumes
2. copypaste redis setup from dockercompose
3. making the database connection string
4. cron and live control
5. setup the api container
6. webui

### reverse proxy

1. modify hosts file for the subdomains if not owning a domain
2. configure reverse proxy
3. making share links work

## Firmware setup

1. Install vscode
2. install latest python ( i used 3.11 )
3. install platformio
4. edit the env
5. build and upload images

## Troubleshooting

1. use the monitor from platformio and logs from the api service, in most cases the error is a misconfiguration of the api
---
tags:
  - developer
  - api
  - backend
---

# Developer & API Docs


## Backend Architecture

![Backend Architecture Diagram](../../static/developer/backend-architecture-overview.svg)


## OpenAPI Documentation

You can find the OpenAPI Documentation here: [api.OpenShock.app/swagger](https://api.openshock.app/swagger)

Note that there is both a [Definition Version 1](https://api.openshock.app/swagger/1/swagger.json) and [Definition Version 2](https://api.openshock.app/swagger/1/swagger.json) file.

!!! hint "Version Definition Files"
    You might notice that Version 2 does not contain all the endpoints that are in Version 1. That is because version 2 only contains endpoints that actually make a version 1 equivalent obsolete and there for deprecated.  
    TL;DR; Prefer endpoints in Definition Version 2 over 1

The OpenAPI documentation contains all HTTP endpoints, but does not document the WebSockets and SignalR hubs.

### Authentication

Authentication for applications is done via a API Token which are to be sent as a header with the name/key `Open-Shock-Token`.

You can generate a API Token on the website. [New API Token UI](https://next.openshock.app/settings/api-tokens)

### WebSockets

There is a few different WebSocket endpoints. Most of them use json. The Hub (previously named Device) websocket uses flatbuffers binary serialization.

GW = Gateway or LiveControlGateway (e.g. de1-gateway.openshock.app)
API = Main API (e.g. api.openshock.app)

- [GW]/1/ws/live/{deviceId} # Live Control Websocket, json
- [GW]/1/ws/device # Hubs (devices) websocket, flatbuffers
- [API]/1/ws/device # Legacy Hubs (Deprecated, not implemented anymore as of 31.08.2024)

## SignalR

SignalR is a Realtime Messaging Framework developed by Microsoft. The transport way we use is only WebSocket with JSON.

- [API]/1/hubs/user
- [API]/1/hubs/share/link/{id}
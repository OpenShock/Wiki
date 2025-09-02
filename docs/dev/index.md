---
tags:
  - developer
  - api
  - backend
---

# Developer & API Docs


## Backend Architecture

![Backend Architecture Diagram](../static/developer/backend-architecture-overview.svg)


## OpenAPI Documentation

You can find the [OpenAPI Documentation here](https://api.openshock.app/scalar/viewer)

Note that there is both a Version 1 & Version 2 at the left top in the viewer.

!!! hint "Version Definition Files"
    You might notice that Version 2 does not contain all the endpoints that are in Version 1. That is because version 2 only contains endpoints that actually make a version 1 equivalent obsolete and there for deprecated.  
    TL;DR; Prefer endpoints in Definition Version 2 over 1

The OpenAPI documentation contains all HTTP endpoints, but does not document the WebSockets and SignalR hubs.

### User Agent

In order to be able to access `openshock.app`, you need to have a `User-Agent` header set.  
Empty User-Agents are blocked and result in a 403. So make sure to set this to something meaningful that represents your application.  
E.g. `User-Agent: MyExampleApplication/1.0 (example@example.org)`

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

For connection examples and event details, see the [SignalR WebSockets](signalr-websockets.md) guide.

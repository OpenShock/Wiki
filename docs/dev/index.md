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

::: info Version Definition Files
You might notice that Version 2 does not contain all the endpoints that are in Version 1. That is because version 2 only contains endpoints that actually make a version 1 equivalent obsolete and there for deprecated.  
TL;DR; Prefer endpoints in Definition Version 2 over 1

:::
The OpenAPI documentation contains all HTTP endpoints, but does not document the WebSockets and SignalR hubs.

### User Agent

In order to be able to access `openshock.app`, you need to have a `User-Agent` header set.  
Empty User-Agents are blocked and result in a 403. So make sure to set this to something meaningful that represents your application.  
E.g. `User-Agent: MyExampleApplication/1.0 (example@example.org)`

### Authentication

Authentication for applications is done via a API Token which are to be sent as a header with the name/key `Open-Shock-Token`.

You can generate a API Token on the website. [New API Token UI](https://next.openshock.app/settings/api-tokens)

### Real-Time Communication

OpenShock provides two real-time communication methods for client applications:

**SignalR Hubs** - Built on Microsoft's [SignalR](https://learn.microsoft.com/aspnet/core/signalr) framework, using WebSocket transport with JSON payloads. Used for device management, control commands, event notifications, and share links.

- `[API]/1/hubs/user` - Authenticated user hub
- `[API]/1/hubs/share/link/{id}` - Public share link hub

**Live Control WebSocket** - A raw JSON WebSocket for continuous real-time shocker control (e.g. VR integrations).

- `[GW]/1/ws/live/{deviceId}` - Requires authentication

Where `[API]` = `api.openshock.app` and `[GW]` = a gateway host (e.g. `de1-gateway.openshock.app`).

For full details on endpoints, methods, message formats, and types, see the [Real-Time Communication Guide](./realtime/).

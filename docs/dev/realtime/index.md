
# Real-Time Communication

OpenShock provides two real-time communication channels for client applications: **SignalR hubs** for device management and control, and a **live control WebSocket** for continuous real-time shocker interaction.

All endpoints use JSON payloads over WebSocket transport.

## Authentication

Both SignalR hubs and the live control WebSocket require the following headers:

| Header | Description |
|--------|-------------|
| `User-Agent` | A meaningful identifier for your application (e.g. `MyApp/1.0`). Empty values are rejected with `403`. |
| `OpenShockToken` | API token created in [account settings](https://next.openshock.app/settings/api-tokens). |

The share link hub is an exception - see [Share Link Hub](./share-link-hub) for its authentication model.

## SignalR Hubs

- [User Hub](./user-hub) - Device management, control commands, and real-time event notifications for authenticated users.
- [Share Link Hub](./share-link-hub) - Interact with devices exposed through a public share link. Supports both authenticated and guest access.

## WebSocket

- [Live Control](./live-control) - Raw JSON WebSocket for continuous real-time shocker control (e.g. VR integrations).

## Common Types

- [Types Reference](./types) - Shared data types used across all endpoints.

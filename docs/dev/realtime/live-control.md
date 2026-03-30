
# Live Control WebSocket

**Endpoint:** `wss://{gateway}/1/ws/live/{deviceId}?tps={tps}`

Where `{gateway}` is the gateway host (e.g. `de1-gateway.openshock.app`), `{deviceId}` is the target device UUID, and `{tps}` (optional, 1--10) sets the frames-per-second rate.

This is a raw WebSocket (not SignalR) for continuous real-time shocker control - designed for applications where low-latency streaming input is needed. Requires the `Shockers_Use` API token permission.

## Authentication

Uses the same headers as described in the [overview](./#authentication).

## Message Format

All messages are JSON. Requests from the client:

```json
{
  "requestType": <integer>,
  "data": <object or null>
}
```

Responses from the server:

```json
{
  "responseType": <integer>,
  "data": <object or null>
}
```

## Client Request Types

| Value | Name | Data | Description |
|-------|------|------|-------------|
| `0` | Frame | [LiveFrame](./types#liveframe) | Send a single shocker control frame. |
| `1` | BulkFrame | array of [LiveFrame](./types#liveframe) | Send multiple shocker control frames at once. |
| `1000` | Pong | *none* | Response to a server Ping. |

## Server Response Types

| Value | Name | Data | Description |
|-------|------|------|-------------|
| `0` | Frame | -- | Frame acknowledged. |
| `50` | TPS | `{ "client": <integer> }` | Reports the current frames-per-second rate. |
| `100` | DeviceNotConnected | -- | The target device is offline. |
| `101` | DeviceConnected | -- | The target device has come online. |
| `150` | ShockerNotFound | -- | The referenced shocker does not exist on this device. |
| `151` | ShockerMissingLivePermission | -- | You do not have live control permission for this shocker. |
| `152` | ShockerMissingPermission | -- | You lack the required permission type for this shocker. |
| `153` | ShockerPaused | -- | The shocker is currently paused. |
| `154` | ShockerExclusive | -- | The shocker is under exclusive control by another session. |
| `200` | InvalidData | -- | The request payload was malformed. |
| `201` | RequestTypeNotFound | -- | Unrecognized request type. |
| `1000` | Ping | `{ "timestamp": <integer> }` | Server ping. Respond with a Pong. `timestamp` is Unix milliseconds. |
| `1001` | LatencyAnnounce | `{ "deviceLatency": <integer>, "ownLatency": <integer> }` | Latency info in ms. `deviceLatency` = server-to-device, `ownLatency` = client-to-server. |

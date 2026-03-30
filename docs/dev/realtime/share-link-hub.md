
# Share Link Hub

**Endpoint:** `https://api.openshock.app/1/hubs/share/link/{id}`

Replace `{id}` with the share link UUID. This hub allows interaction with devices exposed through a public share link.

## Authentication

This hub does **not** require an API token. There are two connection modes:

- **Authenticated:** Provide the `OpenShockToken` header to connect as an authenticated user.
- **Guest:** Omit the token and optionally pass a `name` query parameter to identify yourself (e.g. `?name=Guest`).

## Server Methods

### `Control`

Send control commands to shockers available on this share link. Commands are subject to the share link's permission and limit settings.

| Parameter | Type | Description |
|-----------|------|-------------|
| `shocks` | array of [Control](./types#control-object) | One or more shocker commands. |

## Client Events

### `Welcome`

Sent immediately after connecting.

| Field | Type | Description |
|-------|------|-------------|
| `authType` | string | Either `"Authenticated"` or `"Guest"`. |

### `Updated`

Fired when the share link's configuration has changed (e.g. permissions modified, shockers added/removed). The client should refresh its state when this event is received.

*No payload.*

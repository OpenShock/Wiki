
# User Hub

**Endpoint:** `https://api.openshock.app/1/hubs/user`

The user hub is the primary channel for authenticated users to control devices and receive real-time events.

Connect using any **SignalR client library**, the transport is **WebSocket-only** with **JSON** payloads.

## Connecting

Provide the authentication headers described in the [overview](./#authentication), then connect to the endpoint using your SignalR client's WebSocket transport.

## Server Methods

Methods your client can invoke on the hub.

### `ControlV2`

Send one or more control commands to shockers, allows specifying a custom sender name that appears in control logs.

| Parameter | Type | Description |
|-----------|------|-------------|
| `shocks` | array of [Control](./types#control-object) | One or more shocker commands. |
| `customName` | string or null | Custom name to display as the sender in logs. |

### `CaptivePortal`

Enable or disable the captive portal on a device. Requires device ownership.

| Parameter | Type | Description |
|-----------|------|-------------|
| `deviceId` | UUID | The device identifier. |
| `enabled` | boolean | `true` to enable, `false` to disable. |

### `EmergencyStop`

Immediately stop all activity on a device. Requires device ownership.

| Parameter | Type | Description |
|-----------|------|-------------|
| `deviceId` | UUID | The device identifier. |

### `OtaInstall`

Trigger a firmware update on a device. Requires device ownership.

| Parameter | Type | Description |
|-----------|------|-------------|
| `deviceId` | UUID | The device identifier. |
| `version` | string | Semantic version to install (e.g. `1.2.0`). |

### `Reboot`

Reboot a device. Requires device ownership.

| Parameter | Type | Description |
|-----------|------|-------------|
| `deviceId` | UUID | The device identifier. |

## Client Events

Events the server sends to your client. Register handlers for these using your SignalR client's event subscription mechanism.

### `Welcome`

Sent immediately after connecting.

| Field | Type | Description |
|-------|------|-------------|
| `connectionId` | string | Your SignalR connection ID. |

### `DeviceStatus`

Provides the current online state and firmware version for all devices accessible to the user. Sent on connect and whenever a device's status changes.

| Field | Type | Description |
|-------|------|-------------|
| `deviceOnlineStates` | array of [DeviceOnlineState](./types#deviceonlinestate) | Status of each device. |

### `Log`

Emitted when a control command is executed on a device.

| Field | Type | Description |
|-------|------|-------------|
| `sender` | [ControlLogSender](./types#controllogsender) | Who triggered the command. |
| `logs` | array of [ControlLog](./types#controllog) | Log entries for each shocker affected. |

### `DeviceUpdate`

Notifies when a device or its shockers are modified or removed.

| Field | Type | Description |
|-------|------|-------------|
| `deviceId` | UUID | The device identifier. |
| `type` | [DeviceUpdateType](./types#deviceupdatetype) | What changed. |

### `OtaInstallStarted`

A firmware update has begun.

| Field | Type | Description |
|-------|------|-------------|
| `deviceId` | UUID | The device identifier. |
| `updateId` | integer | Unique update identifier. |
| `version` | string | Version being installed. |

### `OtaInstallProgress`

Progress update for an ongoing firmware install.

| Field | Type | Description |
|-------|------|-------------|
| `deviceId` | UUID | The device identifier. |
| `updateId` | integer | Unique update identifier. |
| `task` | [OtaUpdateProgressTask](./types#otaupdateprogresstask) | Current stage of the update. |
| `progress` | float | Progress within the current task (0.0 -- 1.0). |

### `OtaInstallFailed`

Firmware install failed.

| Field | Type | Description |
|-------|------|-------------|
| `deviceId` | UUID | The device identifier. |
| `updateId` | integer | Unique update identifier. |
| `fatal` | boolean | Whether the failure triggered a rollback. |
| `message` | string | Error description. |

### `OtaRollback`

Firmware rolled back to the previous version after a failed update.

| Field | Type | Description |
|-------|------|-------------|
| `deviceId` | UUID | The device identifier. |
| `updateId` | integer | Unique update identifier. |

### `OtaInstallSucceeded`

Firmware update completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `deviceId` | UUID | The device identifier. |
| `updateId` | integer | Unique update identifier. |

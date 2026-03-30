
# Types Reference

Shared data types used across the SignalR hubs and live control WebSocket.

## Control Object

A command targeting a single shocker.

| Field | Type | Description |
|-------|------|-------------|
| `id` | UUID | The shocker identifier. |
| `type` | [ControlType](#controltype) | The action to perform. |
| `intensity` | integer | Intensity level (0--100). |
| `duration` | integer | Duration in milliseconds (300--30000). |
| `exclusive` | boolean | If `true`, overrides any active live control session. Default `false`. |

## LiveFrame

A single live control frame for continuous real-time control.

| Field | Type | Description |
|-------|------|-------------|
| `shocker` | UUID | The shocker identifier. |
| `intensity` | integer | Intensity level (0--100). |
| `type` | string | One of `"Stop"`, `"Shock"`, `"Vibrate"`, `"Sound"`. |

## ControlType

| Value | Name |
|-------|------|
| `0` | Stop |
| `1` | Shock |
| `2` | Vibrate |
| `3` | Sound |

## DeviceOnlineState

| Field | Type | Description |
|-------|------|-------------|
| `device` | UUID | The device identifier. |
| `online` | boolean | Whether the device is connected. |
| `firmwareVersion` | string or null | Firmware version (e.g. `1.2.0`), or `null` if unknown. |

## DeviceUpdateType

| Value | Name | Description |
|-------|------|-------------|
| `0` | Created | A new device was added. |
| `1` | Updated | Device metadata changed. |
| `2` | ShockerUpdated | A shocker on the device was modified (name, limits, etc.). |
| `3` | Deleted | The device was removed. |

## OtaUpdateProgressTask

| Value | Name |
|-------|------|
| `0` | FetchingMetadata |
| `1` | PreparingForUpdate |
| `2` | FlashingFilesystem |
| `3` | VerifyingFilesystem |
| `4` | FlashingApplication |
| `5` | MarkingApplicationBootable |
| `6` | Rebooting |

## ControlLogSender

| Field | Type | Description |
|-------|------|-------------|
| `id` | UUID | Sender's user ID. |
| `name` | string | Sender's display name. |
| `image` | string | URL of the sender's avatar. |
| `customName` | string or null | Custom name provided via `ControlV2`, if any. |
| `connectionId` | string | SignalR connection ID of the sender. |
| `additionalItems` | object | Extra metadata (key-value pairs). |

## ControlLog

| Field | Type | Description |
|-------|------|-------------|
| `shocker` | [BasicShockerInfo](#basicshockerinfo) | The shocker that was controlled. |
| `type` | [ControlType](#controltype) | The control action that was performed. |
| `intensity` | integer | Intensity level (0--100). |
| `duration` | integer | Duration in milliseconds. |
| `executedAt` | string | ISO 8601 timestamp of execution. |

## BasicShockerInfo

| Field | Type | Description |
|-------|------|-------------|
| `id` | UUID | The shocker identifier. |
| `name` | string | The shocker's display name. |

# Visual Status LED Patterns

The firmware uses prioritized repeating patterns to convey device state via:
- Built‑in single‑color GPIO LED
- RGB WS2812B LED

Time values are in milliseconds. Patterns loop continuously. Priority means only the first matching state (highest severity) shows.

## Priority Order (highest → lowest)
1. Critical Error  
2. Emergency Stop Awaiting Release  
3. Emergency Stopped  
4. WebSocket Connected  
5. Has IP (Wi‑Fi connected, no WebSocket)  
6. Wi‑Fi Scanning  
7. Wi‑Fi Disconnected (fallback)

(An extra “WebSocket Can’t Connect” pattern exists in code but is not selected anywhere.)

## Pattern Reference

| State                           | Built‑in LED Pattern                            | RGB Pattern (Color)                       | Meaning                               |
| ------------------------------- | ----------------------------------------------- | ----------------------------------------- | ------------------------------------- |
| Critical Error                  | 100 on / 100 off                                | 100 on / 100 off (Red 255,0,0)            | Fatal condition – requires attention  |
| Emergency Stop Awaiting Release | 150 on / 150 off                                | 150 on / 150 off (Green 0,255,0)          | E‑Stop clearing, waiting for release  |
| Emergency Stopped               | 500 on / 500 off                                | 500 on / 500 off (Red 255,0,0)            | E‑Stop engaged                        |
| WebSocket Connected             | 100 on / 10,000 off                             | 100 on / 10,000 off (Green 0,255,0)       | Fully online (gateway session active) |
| Has IP (no WebSocket)           | 100 on /100 off /100 on /700 off (double blink) | Same timing (Orange 255,165,0)            | Network OK, backend not connected     |
| Wi‑Fi Scanning                  | 4× (100 on /100 off) then 700 off               | Same timing (Light Blue 0,50,255)         | Actively scanning for networks        |
| Wi‑Fi Disconnected              | 3× (100 on /100 off) then 700 off               | Same timing (Blue 0,0,255)                | Not associated to Wi‑Fi               |
| Status OK (dual LED mode only)  | Solid ON                                        | (RGB still shows its prioritized pattern) | Exact healthy flag set                |
| Not pure OK (dual LED mode)     | Solid OFF                                       | (RGB shows prioritized pattern)           | Any deviation from healthy mask       |

### Flag to Pattern Mapping
- kCriticalErrorFlag → Critical Error
- kEmergencyStopAwaitingReleaseFlag → Emergency Stop Awaiting Release
- kEmergencyStoppedFlag → Emergency Stopped
- kWebSocketConnectedFlag → WebSocket Connected
- kHasIpAddressFlag → Has IP (no WS)
- kWiFiScanningFlag → Wi‑Fi Scanning
- (Else) → Wi‑Fi **Disconnected**

## Dual‑LED Mode (Both GPIO + RGB Present)
- The built‑in LED becomes a binary health indicator, overriding the normal blink patterns. (Some basic ESP's only have a Power LED which cannot be controlled)
- It is Solid ON only if the state flag mask equals exactly:  
  WebSocketConnected + HasIpAddress + WiFiConnected
- Any additional or missing flag → Solid OFF (RGB continues to show detailed status).


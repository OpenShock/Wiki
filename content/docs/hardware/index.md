# Hardware Overview

This section covers all physical components that make up an OpenShock setup – from the control board ("Hub") and transmitter modules, to the shockers (collars) themselves and the remotes you may already own.

Use this page as a map. Dive deeper via the links below depending on what you want to build, buy, identify, or maintain.

## Quick Jump

- 🔌 **Boards (Hubs / MCU)**: Supported microcontroller boards, compatibility & feature matrix – see [Boards](./boards/index.md)
- 📡 **Transmitter**: 433 MHz transmitter modules & assembly guidance – see [Transmitter](./transmitter/index.md)
- ⚡ **Shockers (Collars)**: Supported receiver/shocker models & safety warnings – see [Shockers](./shockers/index.md)
- 
## Choosing Your Path

| Goal                                                | Start Here                                                              | Why                                               |
| --------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------- |
| I want the simplest working hub                     | [Boards](./boards/index.md)                                             | Pick a fully maintained board for fewer surprises |
| I already own a collar and want to know if it works | [Shockers](./shockers/index.md)                                         | Lists supported shocker models & status           |
| Ready to get started?                               | Firmware flashing in [Guides – OpenShock](../guides/openshock/index.md) | End‑to‑end setup instructions                     |
| I plan to self‑host everything                      | [Guides – Selfhost](../guides/selfhosting/index.md)                     | Best Selfhost Practise and Examples               |

## Recommended Starting Hardware

If you are new and buying fresh parts today:

1. A fully maintained board (e.g. Seeed Studio XIAO ESP32S3, Wemos Lolin S3, or OpenShock Core V2)
2. A 433 MHz transmitter module listed in the Transmitter section
3. A recommended shocker (CaiXianlin) – see supported list

Recommended: Cables & Soldering Iron to connect the ESP32 and Transmitter.

## Safety First

Before powering anything or placing a collar on a person, read the core [Safety Rules](../home/safety-rules.md). Improper use can cause injury. Never place electrodes near the heart or neck; avoid simultaneous contact with both shocker pins.

## Firmware & Flashing

Once you have your board selected, head to:

- [How to Flash Your Board](../guides/openshock/how-to-flash-your-board.md)
- [First Setup](../guides/openshock/first-setup.md)
- [How to Update](../guides/openshock/how-to-update.md) for OTA / version upgrade workflow

## Compatibility Labels

The meaning of the icons used in board/shocker tables:

| Icon                | Meaning                             |
| ------------------- | ----------------------------------- |
| :white_check_mark:  | Fully compatible/tested             |
| :warning:           | Partial or with caveats             |
| :x:                 | Not compatible / avoid              |
| :hammer_and_wrench: | Work in progress                    |
| :grey_question:     | Unknown or unverified               |
| :rocket:            | Maintained by OpenShock team        |
| :airplane:          | Maintained by community contributor |
| :cloud:             | Supports OTA updating               |
| :lock:              | Hardware accelerated cryptography   |

Refer to the specific section pages for any nuances or footnotes.

## Need Help?

If you run into hardware issues:

- See [Troubleshooting – Hub](../troubleshooting/hub.md)
- See [Troubleshooting – Shocker Pairing](../troubleshooting/shocker-pairing.md)
- Ask in the community (GitHub Discussions / Discord) with board + firmware version + logs (if available).

---

Continue to [Boards »](./boards/index.md)


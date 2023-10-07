
# Boards


## Legend


### Compatability

|Icon|Meaning|
|-|-|
| :white_check_mark: | Fully compatible |
| :warning: | Partial compatability |
| :x: | Not compatible |
| :hammer_and_wrench: | In progress |
| :grey_question: | Unknown |

### Support

|Icon|Meaning|
|-|-|
| :rocket: | Supported by [:rocket: OpenShock maintainers](https://github.com/orgs/OpenShock/teams/maintainer) |
| :airplane: | Supported by [:airplane: Community maintainers](https://github.com/orgs/OpenShock/teams/contributor) |

### Features

|Icon|Meaning|
|-|-|
| :cloud: | Supports over-the-air updating once OpenShock offers this |
| :lock: | Supports cryptography for enhanced security |

## Fully maintained

These boards are tested before every release by the [:rocket: OpenShock maintainers](https://github.com/orgs/OpenShock/teams/maintainer).

_Boards are sorted alphabetically._

| Board | Variant | Labels | Maintainer(s) |
|-|-|-|-|
| [Knockoff ESP32-S3 "Dorx"](hardware/boards/china/esp32s3-dorx/) | R8N2 | :hammer_and_wrench: :lock: | [:rocket: Red Mushie](https://github.com/redmushie) |
| [Knockoff ESP32-S3 "Dorx"](hardware/boards/china/esp32s3-dorx/) | R16N8 | :hammer_and_wrench: :cloud: :lock: | [:rocket: Red Mushie](https://github.com/redmushie) |
| [Wemos D1 Mini ESP32](hardware/boards/wemos/d1-mini-esp32/) | All | :white_check_mark: | [:rocket: HentaiHeaven](https://github.com/hhvrc) |
| [Wemos Lolin S3](hardware/boards/wemos/lolin-s3/) | All | :white_check_mark: :cloud: :lock: | [:rocket: Red Mushie](https://github.com/redmushie) |
| [Pishock (2023)](hardware/boards/pishock/2023-pishock/) | All | :white_check_mark: | [:rocket: Red Mushie](https://github.com/redmushie) |
| [Pishock Lite (2021 Q3)](hardware/boards/pishock/2021q3-lite/) | All | :white_check_mark: | [:rocket: HentaiHeaven](https://github.com/hhvrc) |


## Community maintained

These boards are supported by designated [:airplane: Community maintainers](https://github.com/orgs/OpenShock/teams/contributor).

We do our best to give these contributors sufficient time to test new firmware during the release candidate phase(s), but we cannot guarantee that they got around to a full test cycle prior to a new release.

| Board | Variant | Labels | Maintainer(s) |
|-|-|-|-|
| [Wemos Lolin S2 Mini](hardware/boards/wemos/lolin-s2-mini/) | N4R2 (All) | | [:airplane: Red Mushie](https://github.com/redmushie) |


## Not maintained

These boards are untested and not maintained. They might work, but no guarantees.

| Compatability | Board | Variant | Features |
|-|-|-|-|
| :grey_question: Unknown | [Knockoff ESP32-S3 "Dorx"](hardware/boards/china/esp32s3-dorx/) | R8N2 | :lock: |

## Incompatible

These boards are fundamentally incompatible with OpenShock.

- :x: [Pishock Plus (2021 Q1)](hardware/boards/pishock/2021q1-plus/) -- Uses incompatible SoC

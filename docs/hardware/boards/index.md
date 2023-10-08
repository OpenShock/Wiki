
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
| [Pishock (2023)](pishock/2023-pishock.md) | All | :white_check_mark: | [:rocket: Red Mushie](https://github.com/redmushie) |
| [Pishock Lite (2021 Q3)](pishock/2021q3-lite.md) | All | :white_check_mark: | [:rocket: HentaiHeaven](https://github.com/hhvrc) |
| [Seeed Studio Xiao ESP32S3](seeed/xiao-esp32s3.md) | :construction: | :construction: | Work in progress |
| [Wemos D1 Mini ESP32](wemos/d1-mini-esp32.md) | All | :white_check_mark: | [:rocket: HentaiHeaven](https://github.com/hhvrc) |
| [Wemos Lolin S3](wemos/lolin-s3.md) | All | :white_check_mark: :cloud: :lock: | [:rocket: Red Mushie](https://github.com/redmushie) |


## Community maintained

These boards are supported by designated [:airplane: Community maintainers](https://github.com/orgs/OpenShock/teams/contributor).

We do our best to give these contributors sufficient time to test new firmware during the release candidate phase(s), but we cannot guarantee that they got around to a full test cycle prior to a new release.

| Board | Variant | Labels | Maintainer(s) |
|-|-|-|-|
| [Wemos Lolin S2 Mini](wemos/lolin-s2-mini.md) | N4R2 (All) | | [:airplane: Red Mushie](https://github.com/redmushie) |


## Not maintained

These boards are untested and not maintained. They might work, but no guarantees.

| Compatability | Board | Variant | Features |
|-|-|-|-|
| :grey_question: Unknown | [Knockoff ESP32-S3 "Dorx"](china/esp32s3-dorx.md) | R8N2 | :lock: |

## Incompatible

These boards are fundamentally incompatible with OpenShock.

- :x: [Pishock Plus (2021 Q1)](pishock/2021q1-plus.md) -- Uses incompatible SoC

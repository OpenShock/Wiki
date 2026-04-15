---
title: Boards
description: Compatibility and support matrix for every microcontroller board tested with OpenShock.
icon: Cpu
---

## Legend

### Compatibility

| Icon                | Meaning               |
| ------------------- | --------------------- |
| :white_check_mark:  | Fully compatible      |
| :warning:           | Partial compatibility |
| :x:                 | Not compatible        |
| :hammer_and_wrench: | In progress           |
| :grey_question:     | Unknown               |

### Support

| Icon       | Meaning                                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| :rocket:   | Supported by [:rocket: OpenShock maintainers](https://github.com/orgs/OpenShock/teams/maintainer)          |
| :airplane: | Supported by [:airplane: Community maintainers](https://github.com/OpenShock/Firmware/graphs/contributors) |

### Features

| Icon    | Meaning                                    |
| ------- | ------------------------------------------ |
| :cloud: | Supports over-the-air updating             |
| :lock:  | Supports hardware accelerated cryptography |

## Fully maintained

These boards are tested before every release by the [:rocket: OpenShock maintainers](https://github.com/orgs/OpenShock/teams/maintainer).

| Board                                           | Variant | Labels                            |
| ----------------------------------------------- | ------- | --------------------------------- |
| [PiShock (2023)](pishock/2023-pishock)          | All     | :white_check_mark:                |
| [PiShock Lite (2021 Q3)](pishock/2021q3-lite)   | All     | :white_check_mark:                |
| [Seeed Studio Xiao ESP32S3](seeed/xiao-esp32s3) | All     | :white_check_mark: :cloud: :lock: |
| [Wemos D1 Mini ESP32](wemos/d1-mini-esp32)      | All     | :white_check_mark:                |
| [Wemos Lolin S3](wemos/lolin-s3)                | All     | :white_check_mark: :cloud: :lock: |
| [OpenShock Core V1](openshock/core-v1)          | All     | :white_check_mark: :cloud: :lock: |
| [OpenShock Core V2](openshock/core-v2)          | All     | :white_check_mark: :cloud: :lock: |

## Community maintained

These boards are supported by designated [:airplane: Community maintainers](https://github.com/OpenShock/Firmware/graphs/contributors).

We do our best to give these contributors sufficient time to test new firmware during the release candidate phase(s), but we cannot guarantee that they got around to a full test cycle prior to a new release.

| Board                                                       | Variant       | Labels                     | Original Contributor                                   |
| ----------------------------------------------------------- | ------------- | -------------------------- | ------------------------------------------------------ |
| [DFRobot FireBeetle ESP32-E](dfr-firebeetle/dfr-firebeetle) | ESP32-E (All) | :white_check_mark: :cloud: | [:airplane: LostQuasar](https://github.com/LostQuasar) |

## Avoid :x:

These boards have been reported to have issues with OpenShock or just do not work with any provided firmware

| Board                                          | Variant    | Reason                                | Date Added |
| ---------------------------------------------- | ---------- | ------------------------------------- | ---------- |
| [Wemos Lolin S2 Mini](wemos/lolin-s2-mini)     | N4R2 (All) | WiFi & Internet instability           | 17.11.2024 |
| [Knockoff ESP32-S3 "Dorx"](china/esp32s3-dorx) | R8N2       | Reported flashing and stablity issues | 10.04.2025 |

## Incompatible :x:

Any **ESP8266 will not work!** It **must be a ESP32**.  
additionally these boards are fundamentally incompatible with OpenShock.

| Board                                         | Reason                |
| --------------------------------------------- | --------------------- |
| [PiShock Plus (2021 Q1)](pishock/2021q1-plus) | Uses incompatible SoC |

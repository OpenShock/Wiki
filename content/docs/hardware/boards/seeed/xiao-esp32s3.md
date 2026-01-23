---
tags:
    - hardware
    - board
    - vendor:seeed
    - chip:esp32s3
---

# Seeed Xiao ESP32S3

::: tip Fully compatible
This product is fully compatible with OpenShock.

:::
See the [official webpage](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) for a more exhaustive description.

## Specifications

- ESP32-S
- 8MiB Flash
- 8MiB PSRAM
- Detachable antenna

::: warning Inconsistent Pin Labels
The pin labels printed on the board do *not* match the ESP32-S3's actual GPIO numbers. Please refer to the [official Seeed documentation](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#hardware-overview) to find the correlations between the printed labels and the actual GPIO numbers.

:::
## Flashing

::: warning Extra steps required
Please read this section carefully.

:::
On the first picture in the [Media section](#media) below, aside the USB-C are two (extremely small!) buttons.

- The "R" button is "Reset";
- The "B" button is "Bootloader".

To flash, **you need to enter bootloader mode**. Follow these steps:

- Unplug the board.
- Hold down the "B" button.
- Replug the board **while holding it down.**

If everything went correctly, you can now flash the board using a flashing tool like `esptool`. After flashing, press "R" to reset the board into normal boot mode.

## Media

::: info
The antenna is detachable. The back side of the antenna has adhesive tape.

:::
![Seeed Xiao ESP32S3 - Front](/static/boards/seeed-xiao-esp32s3/1.jpg)
![Seeed Xiao ESP32S3 - Back](/static/boards/seeed-xiao-esp32s3/2.jpg)
![Seeed Xiao ESP32S3 - Front with antenna](/static/boards/seeed-xiao-esp32s3/3.jpg)
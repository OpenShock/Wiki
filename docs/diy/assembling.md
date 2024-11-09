
This guide mainly focuses on the parts listed in the [Hardware Buy guide](hardware-buying.md).

## Hardware Requirements

+ ESP-32
+ 433 MHz transmitter
+ Soldering station (optional)
+ Hookup wire (optional, depending on whether the pins line up)

## What/Where to buy?

See the [Hardware Buy guide here](hardware-buying.md). For the board/ESP-32 assembly you need the ESP-32 and a 433 MHz transmitter.

## Figuring out the PINs

Any digital output pin on your micro-controller should work for outputting the signal for the transmitter, however the default is often close to the positive and ground pins on the controller. See the [boards](../hardware/boards/index.md) section dedicated to the micro-controller you are using to decide which pin to use.

For example, if you bought a [Wemos Lolin S3](../hardware/boards/wemos/lolin-s3.md) and a [Open Smart Transmitter](../hardware/transmitter/china/open-smart.md), simply connect the 5V to the 5V pins (aka VCC), ground to ground, and any numbered pin to data, for example, the 12 pin.

!!! warning "Pins"  
    You will need to set your RFTX pin during setup. If the pin is incorrect the transmitter wont be able to send any signals.  
    If you already went through the setup process, you can change the pin via a serial terminal with the command `rftxpin #` where `#` is your pin number.  
    Or you reenable the Captive Portal on the website and connect to it again with your phone.

![Example Pinout](../static/diy/pinout.png)


**Next step is [flashing the firmware.](../guides/openshock-how-to-flash-your-board.md)**

---
tags:
    - hardware
    - transmitter
    - 433mhz
---

# Transmitter

Any 433 MHz transmitter that is compatible with ASK / OOK should work with OpenShock.

!!! warning "Logic level compatibility"
    Please note that all ESP32s operate at 3.3V logic levels. To avoid overvolting your ESP's IO pins, it is recommended to either: connect your transmitter's power input to a 3V supply pin on the ESP's board, or use a logic-level shifter if your transmitter ***really* requires** more than 3V power to operate.


Below are transmitters that have been tested to work.

!!! warning "Ask for transmitters"
    This vendor sells the transmitter and receiver **as a pair**. If you would like 2 transmitters instead. Ask the seller for **only transmitters**.

- [Open Smart](../transmitter/china/open-smart.md)

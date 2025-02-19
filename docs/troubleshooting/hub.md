# Troubleshooting: Hub

## Shocker not pairing

This could be due to 3 main reasons:

- The Hub is offline
- The RF TX pin is not configured correctly
- The transmitter is not connected properly

### Hub is offline

Make sure the Hub is online on the Website, you can confirm this by checking if the dot next to the name of it is green.

If you're unsure about the reflected status, refresh the page to check if it's changed.

### RF TX pin is not configured correctly

!!! warning
    If you bought a pre-built Hub this is unlikely, but might be the case especially after a re-flash.

The RF TX (SIG) pin is the GPIO pin on your ESP32 that controls the signal/command to the antenna. Therefore, you want to configure the pin number to match what's wired up to the SIG pin of your transmitter.

Usually you set this pin during the first time setup of your Hub. If you have already done Setup and your Hub is online, there are two ways to change the pin:

1. Re-enable the Captive Portal via the website (`Hubs -> Three dots -> Remote Debug -> Captive Portal On`), then 10.10.10.10 etc.
2. Connect a serial terminal to the ESP (via USB UART) and use the `rftxpin` command followed by the number of your GPIO pin.

A nice and reliable web serial terminal is available here: https://serial.huhn.me

### Transmitter is not connected properly

Run through all common trouble-shooting with TX Board connections:

1. Make sure your GND and VCC are properly connected. You can use a multimeter to make sure the TX Board VCC pin is receiving 3.3v, and to run a continuity test from TX GND to ESP GND.
2. It's recommended to use 3.3v for the transmitter's VCC (voltage input), as using 5V may result in inoperation or hardware damage (if precautions aren't taken - ie. logic-level shifters).
3. Ensure you've soldered the header pins onto the ESP board, so they are not just resting. As the TX board doesn't acknowledge commands, `rftransmit` will show success regardless of reality.
4. Verify that signal (SIG) is connected to a GPIO pin that isn't blacklisted. When setting a pin in the Setup or via serial console, the firmware will warn you if you try to use an invalid pin.
5. Note that the numbers on the PCB may not always match the actual GPIO pin number! Refer to the datasheet of your particular board to ensure you're connecting to the correct GPIO pin number.
6. Additionally, make sure you are using a Transmitter module! The Receiver modules are not used at this time so you can leave them in the packet, if you bought a transceiver (TX+RX) kit.

If you've tried the above, open a serial terminal & run a test while the Shocker is in pairing mode:

`rftransmit {"model":"caixianlin","id":12345,"type":"vibrate","intensity":99,"durationMs":500}`

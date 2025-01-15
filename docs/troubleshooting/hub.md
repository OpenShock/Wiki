# Troubleshooting: Hub

## Shocker not pairing

This could be due to 3 main reasons:

- The Hub is offline
- The RF TX pin is not configured correctly
- The transmitter is not connected properly

### Hub is offline

Make sure the Hub is online on the Website, you can confirm this by checking if the dot next to the name of it is green.

### RF TX pin is not configured correctly

!!! warning
    If you bought a pre built Hub this is unlikely, but might be the case, especially after a re-flash.

The RF TX pin is the GPIO pin on your ESP32 that controls the signal to the antenna.
Therefor you want to configure the pin number to be matching what is wired up to the signal of your transmitter.

Usually you set this pin during the first time setup of your hub. If you have already done this setup and your hub is online, there is two ways to change the pin after that.

1. Re-enable the Captive portal via the website. (`Hubs -> Three dots -> Remote Debug -> Captive Portal On`)
2. Connect a serial terminal to the esp (via usb UART) and use the `rftxpin` command followed by the number of your GPIO pin.

### Transmitter is not connected properly

Make sure your GND and VCC are properly connected. It's recommended to use 3V supply for the transmitter's VCC (voltage input), using 5V may result in inoperation or damage to your hardware if proper precautions arent taken in the form of logic-level shifters.

Also make sure you signal is connected to a GPIO pin that isn't blacklisted. When setting a pin in the setup portal or via the serial console, the firmware will warn you if you try to use an invalid pin.
Do note that the numbers on the PCB may not always match the actual GPIO pin number! Refer to the datasheet of your board to ensure you're connecting to the correct GPIO pin number.

Additionally, make sure you are using a Transmitter module! The Receiver modules are not used at this time!

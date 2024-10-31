# Troubleshooting: Hub

## Shocker not pairing

This could be due to 3 main reasons:

- The Hub is offline
- The RFTX pin is not configured correctly
- The transmitter is not connected properly

### Hub is offline

Make sure the Hub is online on the Website, you can confirm this by checking if the dot next to the name of it is green.

### RFTX pin is not configured correctly

!!! warning
    If you bought a pre built Hub this is unlikely, but might be the case, especially after a re-flash.

The RFTX pin is the GPIO pin on your ESP32 that controls the signal to the antenna.
Therefor you want to configure the pin number to be matching what is wired up to the signal of your transmitter.

Usually you set this pin during the first time setup of your hub. If you have already done this setup and your hub is online, there is two ways to change the pin after that.

1. Re-enable the Captive portal via the website. (`Hubs -> Three dots -> Remote Debug -> Captive Portal On`)
2. Connect a serial terminal to the esp (via usb UART) and use the `rftxpin` command followed by the number of your GPIO pin.

### Transmitter is not connected properly

Make sure your GND and VCC are properly connected. VCC is either 5V or 3.3V, depending on what antenna you use and how much you want your range to be.  

Also make sure you signal is connected to a GPIO pin that is free to use. For example in the lolin s3 we can use pin 12, which conveniently also is GPIO 12.
Do note that the numbers on the PCB do not always match the actual GPIO pin number. Refer to the datasheet of your board for more information.

Also make sure you are using a Transmitter! Not the Receiver!
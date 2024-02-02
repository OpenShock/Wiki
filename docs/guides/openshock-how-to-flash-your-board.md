# How to flash the firmware


## What you need
- [ESP (Device)](../hardware/boards/index.md)
- A Chromium based browser like Google Chrome for example. **Firefox will not work since it doesn't support Web Serial**
- A flash tool like [ESP Tool](https://espressif.github.io/esptool-js/)
- The newest [Openshock firmware](https://github.com/OpenShock/Firmware/releases), make sure you download the firmware that is made for your kind of board.  
- (Optional) [CP210x Universal Windows Driver](https://download.openshock.org/drivers/CP210x_Universal_Windows_Driver.zip)

!!! warning "Important"
    Make sure you have a cable that supports data transfer.  
    Make sure your cable is not damaged.  
    Make sure your USB port is not damaged.

## Connecting the Device to the PC
1. Connect your Device via USB cable to your PC, make sure you use a cable that allows data transfer.
2. Open the Device-Manager in windows and make sure it is connected and has a Driver installed.
3. If your Devices shows up with a yellow exclamation mark: 
    1. Download the [CP210x Universal Windows Driver](https://download.openshock.org/drivers/CP210x_Universal_Windows_Driver.zip) and unzip it. 
    2. In the Device-Manager, right click your Device and select "Update Driver".
    3. Select "Browse my PC for Drivers"
    4. Select the folder of the downloaded driver and proceed.
    5. It should now work
4. If your Device shows up normally in the Device-Manager proceed with the next step.

## Flashing the firmware
1. Plug your Device into your PC using a USB cable.
1. Open the [Flash tool](https://espressif.github.io/esptool-js/) with Chrome.
2. Click Connect, and select your Device in the Popup window.  
![Connect](../static/guides/how-to-flash/how-to-flash-1.png)  
![Select](../static/guides/how-to-flash/how-to-flash-2.png)  
3. In the "Flash Address" field type in ``0x0``.
4. As "File" you select the downloaded ".bin" file from the Openshock GitHub which is the firmware.
5. Now click the "Program" button.  
![Alt text](../static/guides/how-to-flash/how-to-flash-3.png)  
6. Let it do it's thing and keep the window open, it'll tell you when it's done.
7. When everything went well you board will restart and you should be able to run through the [First Setup](../guides/openshock-first-setup.md) steps to configure your Device and link it to your shocker etc.  

!!! failure "What if something fails?"
    Make sure you used the correct firmware version for your board, otherwise join our [discord](https://discord.gg/OpenShock) and we will see how we can help you!
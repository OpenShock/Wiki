# How to flash the firmware

## What you need

- [OpenShock hub](../hardware/boards/index.md)
- A Chromium based web-browser (Chrome, Edge, Opera, etc.) **Firefox will not work since it doesn't support Web Serial**
- [Our Flashtool](https://next.openshock.app/flashtool)

!!! warning "Important"
    Ensure you have a cable that supports data transfer, and neither the port nor cable is damaged.

!!! Info
    If you recieved your hub from an OpenShock hardware vendor, you can likely skip this step! Any updates can be [performed wirelessly](../guides/openshock-how-to-update.md) after the initial setup.

## Flashing the firmware
1. Plug your hub into your PC using a USB cable.
2. Open the [Flashtool](https://next.openshock.app/flashtool).
3. Click "Select Device" and select your hub in the Popup window.  
If your hub is not showing up click on "Install Drivers", after that repeat this step.
![Connect Controller](../static/guides/how-to-flash/Connect_Device_Flashtoolguide.png)
4. Ensure you have the "Stable" channel selected.
5. Ensure the correct board is selected.
![Settings](../static/guides/how-to-flash/settings.png)  
6. Press Flash and let it do it's thing, keep the window open and it will tell you when it's done.  
7. When everything went well you board will restart and you should be able to run through the [First Setup](../guides/openshock-first-setup.md) steps to configure your hub and link it to your shocker etc.  
8. (Optional) If you have issues after flashing it try again with "Erase everything before flashing" enabled.  

### Troubleshooting

#### Connection issues

If you experience issues with connecting the flash tool to your esp, there is a couple of steps you can try.

##### (Re-)Install Driver

1. Download drivers from here [CP210x Universal Windows Driver](https://download.openshock.org/drivers/CP210x_Universal_Windows_Driver.zip)
2. Extract the zip file
3. Run the `CP210xVCPInstaller_x64.exe` installer file

##### Different Cable

Try a couple of different USB cables, usb ports on your computer and if available on a different machine entirely.

##### Pull IO0 to GND

You can put most esp32's into download mode by temporarily connecting GPIO 0 to a Ground Pin when the esp is booting.

Example PIN's for the Wemos D1 Mini

[Wemos D1 Mini GND Figure](../static/boards/wemos-d1-mini-esp32/gnd-figure.webp)
[Wemos D1 Mini GND Figure 2](../static/boards/wemos-d1-mini-esp32/gnd-figure2.webp)

##### Manually flash using EspTool.py

1. [Download esptool](https://github.com/espressif/esptool/releases/latest) (for windows the file is called something like `esptool-vx.x.x-win64.zip `)
2. [Download firmware .bin](https://github.com/OpenShock/Firmware/releases/latest) for your board
3. Extract the esptool zip file
4. Move the downloaded firmware `.bin` file into the folder with `esptool.exe`
5. Open a command line (`cmd` or `powershell`) in that folder
6. Execute the command `esptool write_flash 0x0 OpenShock_xxx-name-xxx.bin`. Replace firmware name with your actual file name.
7. Wait for it to complete flashing and you should be ready to go :partying_face:

!!! failure "Still not working?"
    Try again, if you still got problems after following this guide join our [discord](https://discord.gg/OpenShock) and we will see how we can help you!

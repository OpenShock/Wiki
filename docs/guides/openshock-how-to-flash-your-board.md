# How to flash the firmware

## What you need

- [ESP (Device)](../hardware/boards/index.md)
- A Chromium based browser like Google Chrome for example. **Firefox will not work since it doesn't support Web Serial**
- [Our Flashtool](https://next.shocklink.net/flashtool)

!!! warning "Important"
    Make sure you have a cable that supports data transfer.  
    Make sure your cable is not damaged.  
    Make sure your USB port is not damaged.

## Flashing the firmware

1. Plug your Device into your PC using a USB cable.
2. Open the [Flashtool](https://next.shocklink.net/flashtool) with Chrome or another Chromium based browser.
3. Click "Select Device" and select your Device in the Popup window.  
If your Device is not showing up click on "Install Drivers", after that repeat this step.
![Connect Device](../static/guides/how-to-flash/Connect_Device_Flashtoolguide.png)
4. Make sure you have the "Stable" channel selected.
5. Make sure the correct board is selected.
![Settings](../static/guides/how-to-flash/settings.png)  
6. Press Flash and let it do it's thing, keep the window open it'll tell you when it's done.  
7. When everything went well you board will restart and you should be able to run through the [First Setup](../guides/openshock-first-setup.md) steps to configure your Device and link it to your shocker etc.  
8. (Optional) If you have issues after flashing it try again with "Erase everything before flashing" enabled.  

!!! failure "Still not working?"
    Try again, if you still got problems after following this guide join our [discord](https://discord.gg/OpenShock) and we will see how we can help you!

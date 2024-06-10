# How to Update

## What you need

- [Fully setup Device](../guides/openshock-first-setup.md)
- [OpenShock account](https://openshock.app/)
- **OpenShock Firmware 1.1.0 or newer**

## Over the Air Update (Recommended)

1. Login to the [website](https://openshock.app/)
2. Connect your hub to a power source and make sure it appears as online in the Device section.
3. Open the context menu of your hub.
4. Select "OTA Update".  
![Open OTA](../static/guides/how-to-update/update-Open-OTA.png)  
5. Now you can see 3 different branches of firmware, these are "Develop", "Stable" and "Beta". **We recommend that you only use the Stable branch if you don't know what you're doing.**
6. If your firmware version is older than the one displayed on the "Stable" button, you should update.  
![Update Window](../static/guides/how-to-update/update-Window.png)  
7. Click the "Stable" button.
8. Confirm the update.
9. Your hub should now update automatically, don't close the website during this.  
After it has completed the hub should restart and everything should just work™.

!!! failure "What if something fails?"
    If the update is not successful the updater will not overwrite anything and your hub should just stay on the old version.  
    Ask on the [Discord](https://discord.gg/OpenShock) for help.

## Using a Flash tool

This basically means re-flashing your firmware with a newer version, like it is explained in the [How to flash the firmware](../guides/openshock-how-to-flash-your-board.md) guide.
**Doing it this way will also reset all your configuration.**

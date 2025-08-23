# Compiling Firmware

::: info Still brewing!
This article heavily under development; expect frequent changes.

:::
## Requirements  

- [Git](https://git-scm.com/downloads)
- [VSCode](https://visualstudio.microsoft.com/#vscode-section)
- [PlatformIO IDE](https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide)

Clone [OpenShock/Firmware](https://github.com/OpenShock/Firmware) to a folder on your PC.
```
git clone https://github.com/OpenShock/Firmware.git
```
Open the folder you just downloaded  with VSCode. Allow time for PlatformIO to initialize the IDE. Once it has completed, pick the project environment based on the board you would like to compile for under the new PlatformIO icon.

![An image showing where to find the icon for 'Pick project environment'](../../static/diy/software/compiling/platformio.png)

First, run the `PlatformIO > Project Tasks > General > Upload` task, then run `Platform > Upload Filesystem Image`. These tasks auto-build the latest changes and then upload the code to a connected micro-controller. This may require pressing the reset button on your micro-controller, refer to the documentation for your specific board for more information.

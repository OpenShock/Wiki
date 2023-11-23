# First time setup

!!! danger "Safety Warning"
    **Don't wear the shocker somewhere near your neck or your heart.**  
    Check out [Safety](../safety/safety-rules.md) for more information. 

## What you need
- USB cable with at least one USB-C connector and a PC _**or**_ USB Power adapter
- A Smartphone with a Webbrower (Chrome, Firefox etc.)
- [ESP board](../hardware/boards/index.md)
- [Shocker](../hardware/shockers/index.md)
- [Shocklink account](https://shocklink.net/)




## Setup the ESP  
!!! Bug "Power on your ESP"
    To Setup your ESP *(this is the communication device between the API and your shocker)* you have to connect it to a power source, a USB power adapter or your PC's USB port.  
    _**The ESP uses USB-C**_
1. Connect your **Phone** to the ESP:
    1. Power up your ESP and grab your **phone**.
    2. On your phone, search for a Wi-Fi network named similar to ``Openshock-24:DC:C3:9F:72:C8`` and connect to it.  
    ??? Info "Image"
        ![Image "image"](../static/guides/first-setup/WiFioverview.png)  
2. Connect the ESP to your Wi-Fi Network:
    1. Open your phones browser and type in ``10.10.10.10`` _**or**_ ``openshock.local`` this should open up a web-interface for the ESP. 
    2. Lookup your routers Wi-Fi Network in the web-interface, press the green button next to it and type in your Wi-Fi password then press submit.  
    *A green message should pop up if it's connected*
    ??? Info "Image"
        ![Image "image"](../static/guides/first-setup/ESPWebGUI.png)
3. Create a Device:
    1. **On your PC** open [Shocklink.net](https://shocklink.net/).
    2. Create an account. *(If you don't have one already)* 
    3. Go to **Devices** and click the **green + icon** at the lower right corner to create a new device.   
    4. Give it a name: 
        1. Open the Context menu of the device. *(the three dots next to your newly created device)*
        2. Select **edit**.
        3. Type in the name for the ESP *(your name for example)* into the name field.
        4. Press save.
    ??? Info "Images"
        ![Image "image"](../static/guides/first-setup/findaddbutton3.png) 
        ![Image "image"](../static/guides/first-setup/find_device_context_menu.png)
        ![Image "image"](../static/guides/first-setup/edit_device.png)
4. Pair the Device to your ESP:
    1. Open the Context Menu of your device again.
    2. Select **pair** and press **get pair code**, this will generate a new pair code. 
    3. On your Phone type the code into the Account Linking field of the ESP's web-interface, then press **Pair**
        * After you linked the ESP to your account it should shut down it's own Wi-Fi network.
    ??? Info "Images"
        ![Image "image"](../static/guides/first-setup/findpaircode.png)
        ![Image "image"](../static/guides/first-setup/paircodeexample.png)
5. The setup of the ESP itself is done. yay! 🎉   
    - If everything went well it should show a **green icon** next to the device name on the website.
    ??? Info "Image"
        ![Image "image"](../static/guides/first-setup/checkifonline.png)
!!! Info "RF TX Pin"
    **DO NOT** change that, this is an advanced feature.  
    It should be set correctly by default after flashing the Openshock firmware.  
    For more information see [boards](../hardware/boards/index.md).

<br></br>

## Pair a shocker
1. Make sure you charged the shocker first.
2. Make sure your ESP is connected to the website. ([Setup ESP](#setup-esp))
3. Create a Shocker.
    1. Go to [Shocklink.net](https://shocklink.net/)
    2. login if you are not logged in already.
    3. Navigate to **Shockers**.
    4. Press the green **+** icon at the bottom right corner. 
    5. Select your earlier created **device**. 
    6. Give it a **name**.
    7. Select your **Model of shocker**. 
    8. Click **create**.  
    ??? info "Images"
        ![image](../static/guides/first-setup/Create_shocker_green_plus.png) 
        ![image](../static/guides/first-setup/create_shocker.png) 
4. Pair your Shocker.
    1. Grab your shocker and turn it on. 
    2. Hold the power button until it beeps and the LED flashes fast. *This means the pair mode is active*
    3. On the website click the _**Speaker icon**_ of your shocker, if your shocker now makes a sound, the pairing was successful.
    ??? Info "Image"
        ![image](../static/guides/first-setup/find_sound_button.png)
**Everything should work now, have fun!** 🎉  
!!! question "Help"
    If you need additional help, join our [Discord](https://shocklink.net/discord)

!!! Info
    Your shocker will remember the ESP, no need to pair it every time.  

!!! Tip "Power Shocker On/Off"
    To turn your shocker ``off`` press the power button it should **beep twice**.  
    To turn it back ``on`` press the power button it should **beep once**.  
# First time setup

::: danger Safety Warning
**Don't wear the shocker somewhere near your neck or your heart.**
Check out [Safety](../../home/safety-rules.md) for more information.

:::
::: danger Safety Warning
**Do not touch the pins of the shocker with both hands at the same time.**
The electricity could flow through your heart.

:::
## What you need

- USB cable suitable for your Openshock hub.
- A stable power source. Try to avoid cheap power bricks, they can cause the device to crash under certain loads.
- A smartphone with a web browser (Chrome, Firefox etc.)
- Your routers WiFi Password.
- [OpenShock hub](../../hardware/boards/index.md)
- [Shocker](../../hardware/shockers/index.md)
- [OpenShock account](https://openshock.app/)

## Setup the OpenShock hub

1. Wirelessly connect your **Phone** to the hub:
    1. Plug your hub in and ensure it has power.
    2. On your phone, search for a Wi-Fi network named similar to ``OpenShock-XX:XX:XX:XX:XX:XX`` and connect to it.
    ::: details Images (click to expand)
![Image "image"](../../static/guides/first-setup/WiFioverview.png)
    :::
2. Connect to the hub via the network:
    1. Open your phone's browser and type in ``10.10.10.10`` *or* ``openshock.local`` this should open up a web-interface for the hub.
    2. Find your router's Wi-Fi network in the web-interface.
    3. Press the green button next to it and type in your Wi-Fi password, then press submit.
    *A green pop up should appear if it's connected successfully*
    ::: details Images (click to expand)
![Image "image"](../../static/guides/first-setup/ESPWebGUI.png)

    :::
3. Set the RF TX Pin if needed

::: warning RF TX Pin
**DO NOT** change the RF TX Pin **UNLESS IT IS NOT AUTOMATICALLY DETECTED** *or* you are using a DIY hub.
This is an advanced feature. It should be set correctly by default after flashing the OpenShock firmware if you are using a known board.
If the pin is not automatically selected, you can open a Serial terminal and send the command `rftxpin #` where `#` is your pin number.
If you do not know how to do this, you can also re-enable the captive portal (hotspot of the Hub) to re-configure it. For more information see the page dedicated to your micro-controller under [boards](../../hardware/boards/index.md).

:::
1. Create a hub on the website:
    1. **On your PC** open [openshock.app](https://openshock.app/).
    2. Create an account. *(If you don't have one already)*
    3. Go to **Devices** and click the **green plus icon** at the lower right corner to create a new hub.
    4. Give it a name:
        1. Open the context menu of the hub. *(the three dots next to the newly created hub)*
        2. Select **edit**.
        3. Type in a name, *(your name for example)* into the name field.
        4. Press save.
        ::: details Images (click to expand)
![Image "image"](../../static/guides/first-setup/findaddbutton3.png)
![Image "image"](../../static/guides/first-setup/find_device_context_menu.png)
![Image "image"](../../static/guides/first-setup/edit_device.png)
        :::
2. Pair the hub:
    1. Open the context menu of your hub again.
    2. Select **pair** and press **get pair code**, this will generate a new pair code.
    3. On your phone type the code into the account Linking field of the hub's web-interface, then press **pair**.
        - After you linked the hub to your account it should shut down it's own Wi-Fi network.
        ::: details Images (click to expand)
![Image "image"](../../static/guides/first-setup/findpaircode.png)
![Image "image"](../../static/guides/first-setup/paircodeexample.png)
        :::
3. The hub is now connected!
    - If everything went well, it should show a **green icon** next to the device name on the website.
    ![Image "image"](../../static/guides/first-setup/checkifonline.png)

## Pairing shockers

1. Ensure the shocker is sufficiently charged.
2. Ensure your hub is connected to the website. ([Setup the OpenShock hub](#setup-the-openshock-hub))
3. Create a Shocker.
    1. Go to [openshock.app](https://openshock.app/)
    2. Login if you are not already.
    3. Navigate to **Shockers**.
    4. Press the **green plus icon** at the bottom right corner.
    5. Select the hub you created earlier.
    6. Give your new shocker a name.
    7. Select the **model** of shocker.
    8. Click **Create**
    ::: details Images (click to expand)
![image](../../static/guides/first-setup/Create_shocker_green_plus.png)
![image](../../static/guides/first-setup/create_shocker.png)
    :::
4. Pair your Shocker.
    1. Grab your shocker and turn it on. (Press the power button once. it should beep one time.)
    2. Hold the power button again until it beeps and the LED flashes fast. *This means the pair mode is active*
    3. On the website click the ***speaker icon*** of your shocker, if your shocker beeps in response, the pairing was successful.
    4. You must click the icon before the shocker's pairing mode times out (while the shocker's LED is flashing quickly).
    ::: details Images (click to expand)
![image](../../static/guides/first-setup/find_sound_button.png)
    :::
**Everything should work now, have fun!** 🎉

::: info Need Help?
If you need additional help, join our [Discord](https://discord.gg/OpenShock)

:::
::: info
Your shocker will remember the hub, there is no need to pair it every time.
:::

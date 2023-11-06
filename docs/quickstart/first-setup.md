# Setup ESP and Shocker for the first time
## What do you need?  
1. USB cable with at least one USB-C connector and a PC ``or`` USB Power adapter
2. A Smartphone with a Webbrower (Chrome, firefox etc.)
3. ESP board
4. Shocker
5. Shocklink account (https://shocklink.net/)




## Setup ESP


1. To Setup your ESP (this is the communication device between the API and your shocker) you have to connect it to a power source, like a USB power adapter or your PC's USB Port (the ESP uses USB-C).
2. After you powered up your ESP grab your ``phone`` and search for a WiFi network named similar to this: ``Openshock-24:DC:C3:9F:72:C8`` and connect to it.  
![Image "Find add Button"](../static/kyobinoyo/WiFioverview.png)  
3. Now open your ``phones browser`` and type in ``10.10.10.10`` or ``openshock.local`` this should give you a webinterface for the ESP that looks like this:  
![Image "Find add Button"](../static/kyobinoyo/ESPWebGUI.png)  
  
4. Lookup your Wifi Network in the webinterface, press the green button next to it and type in your WiFi password then press submit.
5. Now set the RF TX Pin, that is the number of the IO pin that the RF antenna data is connected to. (default 12, for pishock boards that is 15), press Set next to it to save it.
6. Now ``on your PC`` open the website https://shocklink.net/ create an account, if you don't have one already, after that go to "Devices" and click the green ``+`` icon at the lower right corner to create a new device. (See pictures below)  

![Image "Find add Button"](../static/kyobinoyo/findaddbutton3.png)  


7. You can now create a pair code. To do that click on the ``three dots`` next to your device name and select ``pair`` then click ``get pair code``, this will generate a pair code.
8. Grab your phone again and type in the pair code into the Account Linking field, after that press ``Pair``  
![Image "Find add Button"](../static/kyobinoyo/devicecontextmenu.png)
  
![Image "Find add Button"](../static/kyobinoyo/findpaircode.png)  
  
![Image "Find add Button"](../static/kyobinoyo/paircodeexample.png)  

  
If everything went well it should show a ``green icon`` next to the device name on the website and the Acces Point of the ESP should be disabled, deactivating the Wifi Network of the device.  
![Image "Find add Button"](../static/kyobinoyo/checkifonline.png)  

With this, the setup of the ESP itself is done. yay!


## Pair a shocker


1. Make sure you charged the shocker first.
2. Make sure your ESP ist connected to the website. ([Setup ESP](#setup-esp))
3. Now go to https://shocklink.net/ and login if you are not logged in already.
4. Go to ``Shockers`` and click the green ``+`` icon at the bottom right corner, select your earlier created device and click create
5. Grab your shocker hold the Power button, the LED should blink fast indicating that it is in pair mode.
6. On your website click the ``Speaker icon`` of your shocker, if your shocker now makes a sound, it is paired.


*reminder: don't wear the shocker somewhere near your neck or your heart*  
To turn your shocker ``off`` press the power button it should ``beep twice``.  
To turn it back ``on`` press the power button it should ``beep once``.  
  
Everything should work now, have fun!  



If you need additional help, join: https://shocklink.net/discord

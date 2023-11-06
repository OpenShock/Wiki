# Setup ESP and Shocker for the first time
## What do you need?  
1. USB cable with at least one USB-C connector and a PC ``or`` USB Power adapter
2. A Smartphone with a Webbrower (Chrome, firefox etc.)
3. ESP board
4. Shocker
5. Shocklink account (https://shocklink.net/)




## Setup ESP


1. To Setup your ESP (this is the communication device between the API and your shocker) you have to connect it to a power source, like a USB power adapter or your PC's USB Port (the ESP uses USB-C).
2. After you powered up your ESP grab your ``phone`` and search for a WiFi network named like this: ``Openshock-24:DC:C3:9F:72:C8``, connect to it.  
![Image "Find add Button"](../static/kyobinoyo/WiFioverview.png)  
3. Now open your ``phones browser`` and type in ``10.10.10.10`` or ``openshock.local`` this should give you a webinterface for the ESP.  
![Image "Find add Button"](../static/kyobinoyo/ESPWebGUI.png)  
  
4. Lookup your Wifi Network in the Webinterface, press the green button next to it and type in your WiFi password then press submit.
5. Now set the RF TX Pin, that is the number of the IO pin that the RF antenna data is connected to. (default 12, for pishock boards that is 15), press Set next to it to save it.
6. Now ``on your PC`` open the website https://shocklink.net/ create an account, if you don't have one already, after that go to "Devices" and click the green "+" icon at the lower right corner to create a new device. (See pictures below)  

![Image "Find add Button"](../static/kyobinoyo/findaddbutton3.png)  


7. You can now create a pair code. To do that click on the three dots next to your device name and select pair then click "get pair code", this will generate a pair code.
8. Grab your phone again and type in the pair code into the Account Linking field, after that press "Pair"  
![Image "Find add Button"](../static/kyobinoyo/devicecontextmenu.png)
  
![Image "Find add Button"](../static/kyobinoyo/findpaircode.png)  
  
![Image "Find add Button"](../static/kyobinoyo/paircodeexample.png)  

  
If everything went well it should show a green icon next to the device name on the website and the Acces Point of the ESP should be disabled, deactivating the Wifi Network of the device.  
![Image "Find add Button"](../static/kyobinoyo/checkifonline.png)  

With this the Setup of the ESP itself is done.


## Connect to a shocker


1. Make sure you charged the shocker first.
2. Make sure your ESP ist connected to the website. ([Setup ESP](#setup-esp))
3. Now got to https://shocklink.net/ and login if you are not logged in already.
4. Go to shockers and click the green "+" icon at the bottom right corner, select your earlier created device and click create
5. Grab your shocker hold the Power button the LED should blink fast.
6. On your website click the Speaker icon of your shocker, if your Shocker now makes a Sound it is paired.


Everything should work now, have fun!

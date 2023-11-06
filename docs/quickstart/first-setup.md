<h1>How to Setup a Openshock Shocker</h1>
<h2>Setup ESP</h2>
<br/>
<br/>
1. To Setup your ESP (this is the Communication device between the API and your Shocker) you have to connect it to a power source, like a USB powerbrick or your PC USB Port (ESP Board has USB-C).<br/>
2. After you plugged it in grab your phone and search for a WiFi network called similar to "Openshock-24:DC:C3:9F:72:C8" and connect to it.<br/>
3. Now open your Phones browser and type in 10.10.10.10 or openshock.local this should give you a webinterface for the ESP.<br/>
4. Lookup your Wifi Network in the Webinterface and type in your WiFi password, press submit.<br/>
5. After that set the RMT pin number, that is the number of the IO pin that the RF antenna data is connected to. (default 12, for pishock boards that is 15), press Set next to it to save it.<br/>
6. Now on your PC open the website https://shocklink.net/ create a account if you don't have one already, after that go to "Devices" and click the green "+" icon at the lower right corner and Create a new Device.<br/>
<br/>
You can now click the context menu of the created device in the list to create a pair code, to do that click pair then "get pair code", type this code in on the webinterface of your ESP on your phone and click pair.<br/>
If everything went well it should show a green icon next to the device name on the website and the Acces Point of the ESP should be disabled deactivating the Wifi Network of the device.<br/>
<br/>
<br/>
<br/>
<h2>Connect to a shocker</h2>
<br/>
<br/>
1. Make sure you charged the shocker first.<br/>
2. Make sure your ESP ist connected to the website. (See Setup ESP above)<br/>
3. Now got to https://shocklink.net/ and login if you are not logged in already.<br/>
4. Go to shockers and click the green "+" icon at the bottom right corner, select your earlier created device and click create<br/>
5. Grab your shocker hold the Power button the LED should blink fast.<br/>
6. On your website click the Speaker icon of your shocker, if your Shocker now makes a Sound it is paired.<br/>
<br/>
Everything should work now, have fun!

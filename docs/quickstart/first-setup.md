This is a Step by Step setup guide by Kyobinoyo.

Index:
1. Setup ESP
2. Connect to Shocker



1. Setup ESP
To Setup your ESP (this is the Communication device between the API and your Shocker) you have to connect it to a power source, like a USB powerbrick or your PC USB Port (ESP Board has USB-C).
After you plugged it in grab your phone and search for a WiFi network called similar to "Openshock-24:DC:C3:9F:72:C8" and connect to it.
Now open your Phones browser and type in 10.10.10.10 or openshock.local this should give you a webinterface for the ESP.
Lookup your Wifi Network in the Webinterface and type in your WiFi password, press submit.
After that set the RMT pin number, that is the number of the IO pin that the RF antenna data is connected to. (default 12, for pishock boards that is 15), press Set next to it to save it.
Now on your PC open the website https://shocklink.net/ create a account if you don't have one already, after that go to "Devices" and click the green "+" icon at the lower right corner and Create a new Device.
[Create New Device]
![image](https://github.com/Kyobinoyo/Wiki/assets/13241508/1379cc63-8592-4d1a-99c5-c1664e682558)
[Get Pair Code]
![image](https://github.com/Kyobinoyo/Wiki/assets/13241508/afc77f4a-959a-4bc1-a1b4-ded8dcc6e83d)
![image](https://github.com/Kyobinoyo/Wiki/assets/13241508/10d8ece8-d42a-4925-bda2-7325064c5b1d)
![image](https://github.com/Kyobinoyo/Wiki/assets/13241508/7a1a44b2-2f79-48d4-be4f-5ad7d6e946cc)

You can now click the context menu of the created device in the list to create a pair code, to do that click pair then "get pair code", type this code in on the webinterface of your ESP on your phone and click pair.
If everything went well it should show a green icon next to the device name on the website and the Acces Point of the ESP should be disabled deactivating the Wifi Network of the device.

2. Connect to a shocker
Make sure you charged the shocker first.
Make sure your ESP ist connected to the website. (See Setup ESP above)
Now got to https://shocklink.net/ and login if you are not logged in already.
Go to shockers and click the green "+" icon at the bottom right corner, select your earlier created device and click create
Grab your shocker hold the Power button the LED should blink fast.
On your website click the Speaker icon of your shocker, if your Shocker now makes a Sound it is paired.
Everything should work now, have fun!

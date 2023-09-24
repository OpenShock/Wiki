---
tags:
  - hardware
  - diy
---

My best efforts to list ali express links to current parts to DIY build your own ESP-32 board, where to buy shockers from and what to look out for.
I try to find the best value offers for the regions listed, they might also be a valid choice for other regions. Please also look at current offers on ali express for yourself.

You will need:
+ ESP-32
+ 433 MHz Antenna
+ Shocker
+ Shocker charging cable

Read more on each part below.

## ESP-32
Genuinely any ESP-32 should work if it has enough flash memory (4MB or more). ESP-8266 are currently not supported.

!!! info

    We recommend getting the **CP2104 drive Type-C** for USB Type-C as a connector. This board also fits the 3D print better.

!!! warning

    We also recommend buying at least 2-3 of these boards. Up to 20% of them are dead-on-arrival.


+ Global: [https://aliexpress.us/item/2251832671740023.html](https://aliexpress.us/item/2251832671740023.html)


## 433 MHz RF Antenna
433 MHz is the frequency the shocker listens to. So we need to use a 433 MHz RF antenna to control the shockers.

+ Global: https://aliexpress.us/item/2251832634295432.html (Ask for the **Transmitter** only, will give you twice the transmitters of the quantity you ordered)
+ Alternative Global: https://aliexpress.us/item/3256803835799897.html (You can get the **Transmitter** only here aswell, type selection)


## Shocker
There is two shocker protocol supported currently. One of them is a older shocker model, reffered to as "**PetTrainer**" since it has as label on the shocker. The other protocol supported is reffered to as "**Small**"-Shocker or **CaiXianlin**. (Small does not mean its less powerful, its the same power as the PetTrainer)

For protocol specifications see here: https://github.com/Shock-Link/ShockLink-Hardware

!!! warning

    You cannot directly order Shockers to Germany, they will get denied for import by the German "Zoll". Alternatively proxy your parcel over the Netherlands or Luxembourg.  
    The reason for the Zoll denying import is, that the Shocker is made for dogs. Using shock collars on animals is considered illegal by EU law, but only germany seems to care about imports.  

!!! info

    Promotion: LucHeart on discord sells Shockers and fully assembled ESP-32's to germany and surrounding countries. More info here: [WIP]

+ Luxembourg / Generally good store: https://aliexpress.us/item/3256804060226907.html
+ Netherlands: https://aliexpress.us/item/3256805172752011.html (Seems to be the same seller and offer as the US one)
+ US: https://aliexpress.us/item/3256805172752011.html

> Make sure to select the type you want. You dont need a remote for it to work with ShockLink, **Collar only is enough**.
{.is-info}

### Shocker Charging Cable
The charging port for the **CaiXianlin** Shocker is a standard **DC 3.5-1.35** with 5V connector. So a USB to **DC 3.5-1.35** is what you should be getting.
You might even have one laying around since those are really common. If not, you can pick them up on either ali express, amazon or any other general electronics market.

+ Global: https://aliexpress.us/item/2255799944669970.html


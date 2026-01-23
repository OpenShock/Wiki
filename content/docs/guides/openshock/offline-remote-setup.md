# Offline Remote Setup

## What you need

- [Fully setup OpenShock Hub](./first-setup.md)
- [OpenShock Account](https://openshock.app/)
- A Compatible Offline remote with it's ID

::: warning Important
Only the first channel on the remote will work. This is because the channel is not configurable on OpenShock's side yet

:::
::: warning Offline Remote ID
If you bought an offline remote from a vendor, it might already have been decoded and the **Offline Remote ID** might be present as a sticker on the remote.
You can also decode this ID yourself using a 433 Mhz Receiver module with an ESP32. Checkout the [rf-plaground repo](https://github.com/OpenShock/rf-playground)

:::
## Setup the Offline Remote
1. Login to the [website](https://openshock.app/)
2. Connect your hub to a power source and make sure it appears as online in the Hub section.
2. Go to the **Shockers** section.
3. Edit the Shocker to use with the Offline Remote  
    1. Open the Context Menu of the Shocker
    2. Select Edit
    3. Set the Shocker RfId field to the **Offline Remote ID**
    4. Save
    ::: details Images (click to expand)
    ![Image "image"](/static/guides/offline-remote-setup/shockercontextmenu.png)
    ![Image "image"](/static/guides/offline-remote-setup/shockerrfidfield.png)
    :::
4. RePair the Shocker
**Everything should work now, have fun!** 🎉
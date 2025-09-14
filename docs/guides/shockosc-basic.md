# Basic Setup

::: info What is ShockOSC?
ShockOSC is an application made for OSC to trigger your shockers from an in-game trigger.  
[OSC](https://docs.vrchat.com/docs/osc-overview) is a service implemented in VRChat that allows the communication between the game and 3rd party applications.

:::
::: info New ShockOSC
Information on this page is dedicated to the **new** version of ShockOSC, the old version is no longer supported.

:::
::: danger ShockOSC is getting deprecated.
Please go and download [OpenShock Desktop](https://github.com/OpenShock/Desktop) instead.

:::
## What you need

- [Fully setup shocker](openshock/first-setup.md)
- [Newest ShockOSC](https://github.com/OpenShock/ShockOSC/releases)
- [Shocklink Account](https://openshock.app/)

## Setup ShockOsc

1. [Download ShockOSC](https://github.com/OpenShock/ShockOSC/releases) and install it.
2. Login to ShockOSC
    1. Open ShockOSC
    2. Click on "Get Token", this will open a browser window.
    3. In the browser, log into your Shocklink account and accept the request shown.
    4. ShockOSC will now log you in.
    ![LogIn](../static/guides/shockosc/NewShockOSC-LogIn.png)
3. Create your Shock Group.  
*everything is done in groups, doesn't matter if it's only one shocker or multiple shockers.*  
    1. Go to the Group Tab.
    2. Create a new Group.
    3. Give the Group a name. (This also defines the parameter name later used for your Avatar)  
    4. Select what shocker is to be used with the group.  
    5. *Optional you can override the default limits set in ShockOSC per group*
    ![Group Setup](../static/guides/shockosc/NewShockOSC-GroupSetup.png)  
4. Configure your Limits.
    1. Go to the Config Tab
    2. Configure Cooldown, Hold time, if Intensity is fixed or random and the limits for that same with duration.
    3. Choose if ShockOSC pauses while being AFK and if it'll un-mute you when shocked.
    4. Everything else can be left alone unless you know what you are doing.  
    ![Config](../static/guides/shockosc/NewShockOSC_Config.png)
5. **If you want to use ShockOsc in [ChilloutVR](https://store.steampowered.com/app/661130/ChilloutVR/) make sure to disable OSC Query in the App Setting.**
6. That's it, you are ready to go! 🎉

::: tip Avatar Setup
Check out the [VRChat Avatar Setup](shockosc-avatar-setup-vrc.md) or [ChilloutVR Avatar Setup](shockosc-avatar-setup-cvr.md) Guide!  
:::

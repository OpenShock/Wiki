# Basic Setup

!!! danger "Safety Warning"
    **Don't wear the shocker somewhere near your neck or your heart.**  
    Check out [Safety](../safety/safety-rules.md) for more information.  

!!! question "What is ShockOsc?"
    ShockOsc is an application made for Shocklink that uses OSC to trigger your shockers from an in-game command.  
    OSC is a service implemented in VRChat that allows the communication between the game and 3rd party applications.  

## What you need

- [Fully setup shocker](openshock-first-setup.md)
- [Newest ShockOsc](https://github.com/OpenShock/ShockOsc/releases)

## Setup ShockOsc
1. [Download ShockOSC](https://github.com/OpenShock/ShockOsc/releases) and install it. 
2. Go to [Shocklink.net](https://shocklink.net/) and acquire an API Token for your account.
    1. Login into your account
    2. Got to the "API Token" tab.
    3. Press the green **+** icon.
    4. Give it a name.
    5. Set no expiry
    6. Click Create.
    7. Copy the shown code.
3. Login to ShockOSC
    1. Open ShockOSC
    2. Paste the API Token into the API Token field that will log you into your account.
4. Configure your Shock Group.  
*everything is done in groups, doesn't matter if it's only one shocker or multiple shockers.*  
    1. Create a new Group.
    2. Give the Group a name. (This also defines the parameter name later used for your Avatar)  
    3. Select what shocker is to be used with the group.  
    4. *Optional you can override the default limits set in ShockOSC per group*
    ![Group Setup](../static/guides/shockosc/NewShockOSC-GroupSetup.png)  
5. Setup your Limits.
    1. Go to the Config Tab
    2. Configure Cooldown, Hold time, if Intensity is fixed or random and the limits for that same with duration.
    3. Choose if ShockOSC pauses while being AFK and if it'll unmute you when shocked.
    4. Everything else can be left alone unless you know what you are doing.  
    ![Config](../static/guides/shockosc/NewShockOSC_Config.png)
6. That's it, you are ready to go! 🎉 

!!! Tip "Upgrade from old ShockOSC"
    *If you upgrade from the old ShockOSC, you can just name your group like you named your shocker there to keep compatibility with your avatars parameters.*  
    
!!! success "VRChat Avatar Setup"
    Check out the [VRChat Avatar Setup](shockosc-avatar-setup.md) Guide!  

!!! info "Advanced Configuration"
    On the [ShockOSC repository](https://github.com/OpenShock/ShockOsc) you can see additional configuration examples, but that would go beyond the limits of this simple guide
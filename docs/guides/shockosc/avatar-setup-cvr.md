# ChilloutVR Avatar Setup

## What you need

- [ShockOSC](basic.md)
- A ChilloutVR avatar
- Basic experience in working with ChilloutVR avatars is recommended  
- A OSC mod for ChilloutVR

::: info Special ShockOSC Settings for ChilloutVR
Please make sure you have "OSC Query" turned off in the **App Settings** tab.  

:::
## Touch Trigger

1. Open your Project
2. Create an Advanced Avatar Trigger  
    1. Select the Bone of you avatar you want the trigger to be.
    2. Create a new empty Game object and name it however you like.  
    ![Hierarchy](../../static/guides/shockosc/CVR/Hierarchy.png)  
    3. Add the "CVR Advanced Avatar Trigger" component to it.  
    4. Configure it like followed and replace {GROUPNAME} with the name of your ShockOsc group. ``ShockOsc/Bzz`` for example:  
    ![Trigger](../../static/guides/shockosc/CVR/AdvancedAvatarTrigger.png)  
    5. Make sure the trigger area is appropriate for you.
3. Add the Parameter to your Animator as a bool.  
4. Add the Parameter to your Menu as a bool.  
![Menu](../../static/guides/shockosc/CVR/Menu.png)  
5. That's it. 🎉  

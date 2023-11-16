# ShockOsc - VRChat Avatar Setup 
  
## What you need
- [ShockOsc](shockosc-basic.md)
- A VRChat avatar
- Basic experience in working with VRChat avatars is recommended

## Touch trigger
1. Open your avatar project and create a new ``Empty GameObject`` on the bone you want your trigger to be at, your LeftLeg for example.  
![Image "Image"](../static/guides/shockosc/create_trigger.png)  

2. Click on the new object and rename it however you want, for example "ShockOSC", after that select it and add a new ``VRC Contact Receiver`` component and position the object on your avatar.  
![Image "Image"](../static/guides/shockosc/example_position.png)  

3. Configure the components ``Radius``, ``Filtering``, ``Collision Tags`` and of course the ``Parameter``, the parameter need to follow a specific naming scheme. ``ShockOsc/{ShockerName}`` replace *{ShockerName}* by the name you gave your shocker in the ShockOsc config, for example ``ShockOsc/leftleg``.  
![Image "Image"](../static/guides/shockosc/example_settings3.png)  
4. Now upload your Avatar and you are ready to go! 🎉  

!!! failure "Activate OSC"
    Make sure you have OSC enabled in your Action Menu inside VRChat.  
  
!!! Tip "Avatar Update Info"
    If you update an existing avatar, make sure you delete the OSC config files in ``C:\Users\%USERPROFILE%\AppData\LocalLow\VRChat\VRChat\OSC``, they are not important for the game since they only hold the avatar parameters for OSC to use, they get regenerated every time you change your avatar, but VRChat fails to update them sometimes when a new parameter got added to an Avatar. 
  
    Reload your Avatar after that.
<br></br>
## Remote trigger
to be done
## Pull trigger
to be done
## Pause toggle
to be done  

<br></br>
<!-- 
!!! Info "Avatar Update Info"
    If you update an existing avatar, make sure you delete the OSC config files in ``C:\Users\%USERPROFILE%\AppData\LocalLow\VRChat\VRChat\OSC``, they are not important for the game since they only hold the avatar parameters for OSC to use, they get regenerated every time you change your avatar, but VRChat fails to update them sometimes when a new parameter got added to an Avatar. 
-->
## List of available parameters

!!! Info
    ### Avatar Dynamic Parameters  

    ``ShockOsc/{ShockerName}`` (bool)  
    <details>
    when set to <b>true</b> and held, will trigger a normal shock in ShockOSC
    </details>  
    
    ``ShockOsc/{ShockerName}_Stretch`` (float)  
    <details>
    can be used to control the shock strength  
    (ex. stretch a bone to 50% and let go to shock someone for 50%)
    </details>  

    ``ShockOsc/{ShockerName}_IsGrabbed`` (bool)   
    <details>
    mainly used  to indicate that a physbone is grabbed
    </details>
    
    ``ShockOsc/{ShockerName}_IShock``  (bool) 
    <details>
    if set to <b>true</b> will shock immediately ignoring the configurated <code>HoldTime</code>.  
    </details>

    ### Visual Parameters
    ``ShockOsc/{ShockerName}_Active`` (bool)
    <details>
    can be used to display an active shock on your avatar (when the shocker is active, ShockOSC will set this to <b>true</b> if not it will be <b>false</b>)
    </details>  

    ``ShockOsc/{ShockerName}_Cooldown`` (bool)
    <details>
    can be used to read out if the shocker is on cooldown  
    </details>  

    ``ShockOsc/{ShockerName}_CooldownPercentage`` (float)
    <details>
    can be used to show how for long the cooldown is active
    </details>
        
    ``ShockOsc/{ShockerName}_Intensity``  (float)
    <details>
    represents how close the shock was to maximum intensity from <b>IntensityRange</b>
    </details>

    ### Dummy Shockers  
    ``_All``
    <details>
    can be used in place of a shocker name, <b>represents all</b> shockers configured in the ShockOSC config.  
    (ex: if <b>ShockOsc/_All</b> is set to <b>true</b> on you Avatar, every shocker configured in ShockOSC will be triggered at the same time)
    </details>
    
    ``_Any``
    <details>
    can be used in place of a shocker name, <b>represents any</b> shocker configured in the ShockOSC config.  
    (ex: if at least one of your shockers are currently shocking <b>ShockOsc/_Any_Active</b> will be <b>true</b>)
    </details>  

    ### Config Parameters  
    ``ShockOsc/_Config/Paused`` (bool)
    <details>
    As long as this parameter is <b>true</b>, all activity by ShockOsc will be paused, shockers will still receive commands via [Share links](shocklink-sharelinks.md) and Share codes.
    </details>
    <br></br>

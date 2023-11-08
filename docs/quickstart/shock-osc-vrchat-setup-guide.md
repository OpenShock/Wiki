# What you need

1. [Fully setup shocker](../quickstart/first-setup.md)
2. [Newest ShockOSC](https://github.com/OpenShock/ShockOsc/releases)
3. VRChat avatar
4. Basic Unity knowledge is recommended

# Setup ShockOSC
to be done...  
  

## List of available ShockOSC parameters
### Avatar Dynamic Parameters  

``ShockOsc/{ShockerName}`` (bool)  
<details>
  when set to <b>true</b> and held, will trigger a normal shock in ShockOSC
</details>  
  
``ShockOsc/{ShockerName}_Stretch`` (float)  
<details>
  can be used to control the shock strenght  
  (ex. stretch a bone to 50% and let go to shock someone for 50%)
</details>  

``ShockOsc/{ShockerName}_IsGrabbed`` (bool)   
<details>
  mainly used  to indicate that a physbone is grabbed
</details>
  
``ShockOsc/{ShockerName}_IShock``  (bool) 
<details>
  if set to <b>true</b> will shock immideatly without holding the trigger first  
</details>
<br></br>

### Visual Parameters
``ShockOsc/{ShockerName}_Active`` (bool)
<details>
  can be used to display an active shock on your avatar (when the shocker is active this will be <b>true</b> if not it will be <b>false</b>)
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
<br></br>

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
<br></br>

### Config Parameters  
``ShockOsc/_Config/Paused`` (bool)
<details>
  As long as it is <b>true</b>, will pause all ShockOSC activity, shockers will still receive web commands.
</details>
<br></br>
  
# Add a touch trigger to your Avatar
to be done...   
  
# Add a remote trigger to your Avatar
to be done...  

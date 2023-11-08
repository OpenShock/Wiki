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
> when set to ``true`` and held, will trigger a normal shock in ShockOSC
  
``ShockOsc/{ShockerName}_Stretch`` (float)  
> can be used to control the shock strenght  
> (ex. stretch a bone to 50% and let go to shock someone for 50%)
  
``ShockOsc/{ShockerName}_IsGrabbed`` (bool)   
> mainly used  to indicate that a physbone is grabbed
  
``ShockOsc/{ShockerName}_IShock``  (bool)
> if set to ``true`` will shock immideatly without holding the trigger first  
  
  
### Visual Parameters
``ShockOsc/{ShockerName}_Active`` (bool)
> can be used to display an active shock on your avatar (when the shocker is active this will be ``true`` if not it will be ``false``)
  
``ShockOsc/{ShockerName}_Cooldown`` (bool)
> can be used to read out if the shocker is on cooldown  
  
``ShockOsc/{ShockerName}_CooldownPercentage`` (float)
> can be used to show how for long the cooldown is active  
  
``ShockOsc/{ShockerName}_Intensity``  (float)
> represents how close the shock was to maximum intensity from ``IntensityRange``  
  
### Dummy Shockers  
``_All``
> can be used in place of a shocker name, represents all shockers configured in the ShockOSC config.  
>(ex: if ``ShockOsc/_All`` is set to ``true`` on you Avatar, every shocker configured in ShockOSC will be triggered at the same time)
  
``_Any``
> can be used in place of a shocker name, represents any shocker configured in the ShockOSC config.  
> (ex: if any shocker is currently shocking ``ShockOsc/_Any_Active`` will be ``true``)
  
## Config Parameters  
``ShockOsc/_Config/Paused`` (bool)
> As long as it is ``true``, will pause all ShockOSC activity, shockers will still receive web commands.

  
# Add a touch trigger to your Avatar
to be done...   
  
# Add a remote trigger to your Avatar
to be done...  

# List of ShockOsc Parameters
!!! Warning "Important!"
    The syntax of the parameters is important, if it's not correct, ShockOsc will NOT recognize the parameter.
    Replace "Groupname" with the name of your group defined in ShockOsc WITHOUT the brackets (ex. ShockOsc/{Groupname} -> ShockOsc/LeftLeg)

!!! Tip "Avatar Update"
    If you updated your avatar with a NEW parameter, delete the files in ``C:\Users\%USERPROFILE%\AppData\LocalLow\VRChat\VRChat\OSC`` to refresh the OSC index.  

<!-- markdownlint-disable MD046 -->
## Avatar Dynamic Parameters
|Parameter                         | Type |Description                                |
|:---------------------------------|:----:|:-----------------------------------------------------------------------------------------------------------------|
|**ShockOsc/{GroupName}**          |bool  |When set to ``true`` and held, will trigger a normal shock in ShockOSC                                            |
|**ShockOsc/{GroupName}_Stretch**  |float |Can be used to control the shock intensity (ex. stretch a bone to 50% and let go to get shocked for 50% intensity)|  
|**ShockOsc/{GroupName}_IsGrabbed**|bool  |Mainly used  to indicate that a Physbone is grabbed                                                               |
|**ShockOsc/{GroupName}_IShock**   |bool  |If set to ``true`` will shock immediately ignoring the configured ``HoldTime``                                    |
|**ShockOsc/{Groupname}_ISound**   |bool  |If set to ``true`` will trigger a Sound ignoring the configurated ``HoldTime``                                    |  
|**ShockOsc/{Groupname}_IVibrate** |bool  |If set to ``true`` will trigger the vibration of the shocker ignoring the configurated ``HoldTime``               |  

## Visual Parameters
|Parameter                                  | Type |Description                                                                                                                  |
|:------------------------------------------|:----:|:----------------------------------------------------------------------------------------------------------------------------|
|**ShockOsc/{GroupName}_Active**            |bool  |Is set to ``true`` if the defined group is active, otherwise it's ``false``                                                  |
|**ShockOsc/{GroupName}_Cooldown**          |bool  |If the defined group is on cooldown this will be ``true`` otherwise it is ``false``                                          | 
|**ShockOsc/{GroupName}_CooldownPercentage**|float |Gives back the shocker cooldown, 1 means cooldown and 0 means no cooldown. (can be used to make a cooldown timer for example)|
|**ShockOsc/{GroupName}_Intensity**         |float |Represents how close the shock was to your configured max intensity                                                          |

## Dummy Shockers
|Name    |Description                                                                                                                                               |
|:-------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
|**_All**|Can be used in place of a group name, **represents all** shockers on your account. (ex: if **ShockOsc/_All** is set to ``true`` on you Avatar, all of your shockers will be triggered at the same time)|
|**_Any**|Can be used in place of a group name, **represents any** shocker on your account. (ex: if at least one of your shockers are currently shocking **ShockOsc/_Any_Active** will be ``true``)|

## Config Parameters
|Parameter                              | Type |Description                                                      |
|:--------------------------------------|:----:|:----------------------------------------------------------------|
|**ShockOsc/_Config/_All/Paused**       |bool  |It's a kill switch, if set to ``true`` it will pause ShockOSC.   |  
|**ShockOsc/_Config/_All/MinIntensity** |float |Defines minimum intensity for the random mode.                   |
|**ShockOsc/_Config/_All/MaxIntensity** |float |Defines maximum intensity for the random mode.                   |  
|**ShockOsc/_Config/_All/MinDuration**  |float |Defines minimum dfuration for the random mode.                   |  
|**ShockOsc/_Config/_All/MaxDuration**  |float |Defines maximum duration for the random mode.                    |  
|**ShockOsc/_Config/_All/Duration**     |float |Defines duration time for the fixed mode (100% = 10 Sec.)        | 
|**ShockOsc/_Config/_All/Intensity**    |float |Defines intensity for the fixed mode.                            |
|**ShockOsc/_Config/_All/ModeIntensity**|float |Toggles between fixed and random intensity mode (True = Random)  |  
|**ShockOsc/_Config/_All/ModeDuration** |float |Toggles between fixed and random duration mode (True = Random)   |   
|**ShockOsc/_Config/_All/CooldownTime** |float |Defines the desired cooldown time.  (0 - 100 sec.)               |
|**ShockOsc/_Config/_All/HoldTime**     |float |Defines the time needed to hold the trigger to activate ShockOsc.|
<!-- markdownlint-enable MD046 -->
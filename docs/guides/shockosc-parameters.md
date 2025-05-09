# List of ShockOsc Parameters
!!! Warning "Important!"
    The syntax of the parameters is important, if it's not correct, ShockOSC will NOT recognize the parameter.
    Replace "Groupname" with the name of your group defined in ShockOsc WITHOUT the brackets (ex. ShockOsc/{Groupname} -> ShockOsc/LeftLeg)
    You can check the recognized parameters in the Debug Tab

!!! Tip "Avatar Update"
    If you updated your avatar with a NEW parameter and it doesnt work / show up in the Debug Tab, delete the files in ``C:\Users\%USERPROFILE%\AppData\LocalLow\VRChat\VRChat\OSC`` to refresh the OSC index.  

<!-- markdownlint-disable MD046 -->
## Avatar Dynamic Parameters
| Parameter                          | Type  | Range Info          | Description                                                                                                                                                                        |
| ---------------------------------- | ----- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ShockOsc/{GroupName}**           | bool  |                     | When set to ``true`` and held, will trigger a normal shock in ShockOSC                                                                                                             |
| **ShockOsc/{GroupName}_Stretch**   | float | 00 (0%) - 1 (100%)  | Used by physbones, you usually dont want to set this manually                                                                                                                      |
| **ShockOsc/{GroupName}_IsGrabbed** | bool  |                     | Mainly used  to indicate that a Physbone is grabbed, Used by physbones, you usually dont want to set this manually                                                                 |
| **ShockOsc/{GroupName}_IShock**    | bool  |                     | If set to ``true`` will shock immediately ignoring the configured ``HoldTime``                                                                                                     |
| **ShockOsc/{Groupname}_ISound**    | bool  |                     | If set to ``true`` will trigger a Sound ignoring the configurated ``HoldTime``                                                                                                     |
| **ShockOsc/{Groupname}_IVibrate**  | bool  |                     | If set to ``true`` will trigger the vibration of the shocker ignoring the configurated ``HoldTime``                                                                                |
| **ShockOsc/{Groupname}_CShock**    | float | 0 (Stop) - 1 (100%) | When at 0 it wont do anything, anything above 0 up to 1 will shock for as long as this float is not 0. The value determines how strong but scaled with limit settings              |
| **ShockOsc/{Groupname}_CVibrate**  | float | 0 (Stop) - 1 (100%) | When at 0 it wont do anything, anything above 0 up to 1 will vibrate for as long as this float is not 0. The value determines how strong but scaled with limit settings            |
| **ShockOsc/{Groupname}_CSound**    | float | 0 (Stop) - 1 (100%) | When at 0 it wont do anything, anything above 0 up to 1 will beep / trigger a sound as long as this float is not 0. The value determines how strong but scaled with limit settings |

## Visual Parameters
| Parameter                                   | Type  | Range Info        | Description                                                                                                                              |
| ------------------------------------------- | ----- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **ShockOsc/{GroupName}_Active**             | bool  |                   | Is set to ``true`` if the defined group is active, otherwise it's ``false``                                                              |
| **ShockOsc/{GroupName}_Cooldown**           | bool  |                   | If the defined group is on cooldown this will be ``true`` otherwise it is ``false``                                                      |
| **ShockOsc/{GroupName}_CooldownPercentage** | float | 0 (0%) - 1 (100%) | Gives back the shocker cooldown percentage, 1 means cooldown and 0 means no cooldown. (can be used to make a cooldown timer for example) |
| **ShockOsc/{GroupName}_Intensity**          | float | 0 (0%) - 1 (100%) | Represents how close the shock was to your configured max intensity                                                                      |

## Dummy Shockers
| Name     | Description                                                                                                                                                                                             |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **_All** | Can be used in place of a group name, **represents all** shockers on your account. (ex: if **ShockOsc/_All** is set to ``true`` on you Avatar, all of your shockers will be triggered at the same time) |
| **_Any** | Can be used in place of a group name, **represents any** shocker on your account. (ex: if at least one of your shockers are currently shocking **ShockOsc/_Any_Active** will be ``true``)               |

## Config Parameters
| Parameter                               | Type  | Range Info        | Description                                                                                |
| --------------------------------------- | ----- | ----------------- | ------------------------------------------------------------------------------------------ |
| **ShockOsc/_Config/_All/Paused**        | bool  |                   | It's a kill switch, if set to ``true`` it will pause ShockOSC.                             |
| **ShockOsc/_Config/_All/MinIntensity**  | float | 0 (0%) - 1 (100%) | Defines minimum intensity for the random mode.                                             |
| **ShockOsc/_Config/_All/MaxIntensity**  | float | 0 (0%) - 1 (100%) | Defines maximum intensity for the random mode.                                             |
| **ShockOsc/_Config/_All/MinDuration**   | float | 0 (0s) - 1 (10s)  | Defines minimum duration for the random mode. Note there is a minimum duration of 300ms    |
| **ShockOsc/_Config/_All/MaxDuration**   | float | 0 (0s) - 1 (10s)  | Defines maximum duration for the random mode.                                              |
| **ShockOsc/_Config/_All/Duration**      | float | 0 (0s) - 1 (10s)  | Defines duration time for the fixed mode (100% = 10 Sec.)                                  |
| **ShockOsc/_Config/_All/Intensity**     | float | 0 (0%) - 1 (100%) | Defines intensity for the fixed mode.                                                      |
| **ShockOsc/_Config/_All/ModeIntensity** | bool  |                   | Toggles between fixed and random intensity mode (True = Random; False = Fixed)             |
| **ShockOsc/_Config/_All/ModeDuration**  | bool  |                   | Toggles between fixed and random duration mode (True = Random; False = Fixed)              |
| **ShockOsc/_Config/_All/CooldownTime**  | float | 0 (0s) - 1 (100s) | Defines the desired cooldown time.                                                         |
| **ShockOsc/_Config/_All/HoldTime**      | float | 0 (0s) - 1 (1s)   | Defines the time needed to hold the trigger to activate ShockOSC's standard touch trigger. |
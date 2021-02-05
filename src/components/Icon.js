import React, { Component } from 'react';
import { 
  
  WiDayCloudy, WiDaySleet, WiDaySnow, WiDayRain, WiDaySnowThunderstorm, WiDaySprinkle, WiDaySunny, WiDayThunderstorm,
  WiCloud, WiCloudy, WiFog, WiHail, WiRain, WiSleet, WiSnow, WiSprinkle, WiStormShowers, WiThunderstorm, WiNightClear, 
  WiNightAltCloudy, WiNightAltRain, WiNightAltSleet, WiNightAltSnow, WiNightAltSnowThunderstorm, WiNightAltSprinkle, WiNightAltThunderstorm

} from 'react-icons/wi';

class Icon extends Component {
  day = {
    sunny                               : WiDaySunny,
    partlycloudy                        : WiDayCloudy,
    cloudy                              : WiCloud,
    overcast                            : WiCloudy,
    mist                                : WiFog,
    patchyrainpossible                  : WiDayRain,
    patchysnowpossible                  : WiDaySnow,
    patchysleetpossible                 : WiDaySleet,
    patchyfreezingdrizzlepossible       : WiHail,
    thunderyoutbreakspossible           : WiDayThunderstorm,
    blowingsnow                         : WiSnow,
    blizzard                            : WiSnow,
    fog                                 : WiFog,
    freezingfog                         : WiFog,
    patchylightdrizzle                  : WiRain,
    lightdrizzle                        : WiRain,
    freezingdrizzle                     : WiSleet,
    heavyfreezingdrizzle                : WiSleet,
    patchylightrain                     : WiDayRain,
    lightrain                           : WiRain,
    moderaterainattimes                 : WiDayRain,
    moderaterain                        : WiRain,
    heavyrainattimes                    : WiDayRain,
    heavyrain                           : WiRain,
    lightfreezingrain                   : WiSleet,
    moderateorheavyfreezingrain         : WiSleet,
    lightsleet                          : WiSleet,
    moderateorheavysleet                : WiSleet,
    patchylightsnow                     : WiDaySnow,
    lightsnow                           : WiSnow,
    patchymoderatesnow                  : WiDaySnow,
    moderatesnow                        : WiSnow,
    patchyheavysnow                     : WiDaySnow,
    heavysnow                           : WiSnow,
    icepellets                          : WiSprinkle,
    lightrainshower                     : WiDayRain,
    moderateorheavyrainshower           : WiDayRain,
    torrentialrainshower                : WiDayThunderstorm,
    lightsleetshowers                   : WiDaySleet,
    moderateorheavysleetshowers         : WiDaySleet,
    lightsnowshowers                    : WiDaySnow,
    moderateorheavysnowshowers          : WiDaySnow,
    lightshowersoficepellets            : WiDaySprinkle,
    moderateorheavyshowersoficepellets  : WiDaySprinkle,
    patchylightrainwiththunder          : WiDayThunderstorm,
    moderateorheavyrainwiththunder      : WiThunderstorm,
    patchylightsnowwiththunder          : WiDaySnowThunderstorm,
    moderateorheavysnowwiththunder      : WiStormShowers
  }

  night = {
    clear                               : WiNightClear,
    partlycloudy                        : WiNightAltCloudy,
    cloudy                              : WiNightAltCloudy,
    overcast                            : WiCloudy,
    mist                                : WiFog,
    patchyrainpossible                  : WiNightAltRain,
    patchysnowpossible                  : WiNightAltSnow,
    patchysleetpossible                 : WiNightAltSleet,
    patchyfreezingdrizzlepossible       : WiHail,
    thunderyoutbreakspossible           : WiNightAltThunderstorm,
    blowingsnow                         : WiSnow,
    blizzard                            : WiSnow,
    fog                                 : WiFog,
    freezingfog                         : WiFog,
    patchylightdrizzle                  : WiRain,
    lightdrizzle                        : WiRain,
    freezingdrizzle                     : WiSleet,
    heavyfreezingdrizzle                : WiSleet,
    patchylightrain                     : WiNightAltRain,
    lightrain                           : WiRain,
    moderaterainattimes                 : WiNightAltRain,
    moderaterain                        : WiRain,
    heavyrainattimes                    : WiNightAltRain,
    heavyrain                           : WiRain,
    lightfreezingrain                   : WiSleet,
    moderateorheavyfreezingrain         : WiSleet,
    lightsleet                          : WiSleet,
    moderateorheavysleet                : WiSleet,
    patchylightsnow                     : WiNightAltSnow,
    lightsnow                           : WiSnow,
    patchymoderatesnow                  : WiNightAltSnow,
    moderatesnow                        : WiSnow,
    patchyheavysnow                     : WiNightAltSnow,
    heavysnow                           : WiSnow,
    icepellets                          : WiSprinkle,
    lightrainshower                     : WiNightAltRain,
    moderateorheavyrainshower           : WiNightAltRain,
    torrentialrainshower                : WiNightAltThunderstorm,
    lightsleetshowers                   : WiNightAltSleet,
    moderateorheavysleetshowers         : WiNightAltSleet,
    lightsnowshowers                    : WiNightAltSnow,
    moderateorheavysnowshowers          : WiNightAltSnow,
    lightshowersoficepellets            : WiNightAltSprinkle,
    moderateorheavyshowersoficepellets  : WiNightAltSprinkle,
    patchylightrainwiththunder          : WiNightAltThunderstorm,
    moderateorheavyrainwiththunder      : WiThunderstorm,
    patchylightsnowwiththunder          : WiNightAltSnowThunderstorm,
    moderateorheavysnowwiththunder      : WiStormShowers
  }

  tag = this.props.tag.replace(/\s/g, '').toLowerCase();
  
  icon = this.props.is_day === 1 ? this.day[this.tag] : this.night[this.tag];
  
  render() {
    const IconTag = this.icon;
    return <IconTag size={75} />
  }
}

export default Icon;

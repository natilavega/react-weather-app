import React, { Component } from 'react';
import { 
  
  WiDayCloudy, WiDaySleet, WiDaySnow, WiDayRain, WiDaySnowThunderstorm, WiDaySprinkle, WiDaySunny, WiDayThunderstorm,
  WiCloud, WiCloudy, WiFog, WiHail, WiRain, WiSleet, WiSnow, WiSprinkle, WiStormShowers, WiThunderstorm, WiNightClear, 
  WiNightAltCloudy, WiNightAltRain, WiNightAltSleet, WiNightAltSnow, WiNightAltSnowThunderstorm, WiNightAltSprinkle, WiNightAltThunderstorm

} from 'react-icons/wi';

const conditionList = [
  {
    "code"  : 1000,
    "day"   : WiDaySunny,
    "night" : WiNightClear
  },
  {
    "code"  : 1003,
    "day"   : WiDayCloudy,
    "night" : WiNightAltCloudy
  },
  {
    "code"  : 1006,
    "day"   : WiCloud,
    "night" : WiNightAltCloudy
  },
  {
    "code"  : 1009,
    "day"   : WiCloudy,
    "night" : WiCloudy
  },
  {
    "code"  : 1030,
    "day"   : WiFog,
    "night" : WiFog
  },
  {
    "code"  : 1063,
    "day"   : WiDayRain,
    "night" : WiNightAltRain
  },
  {
    "code"  : 1066,
    "day"   : WiDaySnow,
    "night" : WiNightAltSnow
  },
  {
    "code"  : 1069,
    "day"   : WiDaySleet,
    "night" : WiNightAltSleet
  },
  {
    "code"  : 1072,
    "day"   : WiHail,
    "night" : WiHail
  },
  {
    "code"  : 1087,
    "day"   : WiDayThunderstorm,
    "night" : WiNightAltThunderstorm
  },
  {
    "code"  : 1114,
    "day"   : WiSnow,
    "night" : WiSnow
  },
  {
    "code"  : 1117,
    "day"   : WiSnow,
    "night" : WiSnow
  },
  {
    "code"  : 1135,
    "day"   : WiFog,
    "night" : WiFog
  },
  {
    "code"  : 1147,
    "day"   : WiFog,
    "night" : WiFog
  },
  {
    "code"  : 1150,
    "day"   : WiRain,
    "night" : WiRain
  },
  {
    "code"  : 1153,
    "day"   : WiRain,
    "night" : WiRain
  },
  {
    "code"  : 1168,
    "day"   : WiSleet,
    "night" : WiSleet
  },
  {
    "code"  : 1171,
    "day"   : WiSleet,
    "night" : WiSleet
  },
  {
    "code"  : 1180,
    "day"   : WiDayRain,
    "night" : WiNightAltRain
  },
  {
    "code"  : 1183,
    "day"   : WiRain,
    "night" : WiRain
  },
  {
    "code"  : 1186,
    "day"   : WiDayRain,
    "night" : WiNightAltRain
  },
  {
    "code"  : 1189,
    "day"   : WiRain,
    "night" : WiRain
  },
  {
    "code"  : 1192,
    "day"   : WiDayRain,
    "night" : WiNightAltRain
  },
  {
    "code"  : 1195,
    "day"   : WiRain,
    "night" : WiRain
  },
  {
    "code"  : 1198,
    "day"   : WiSleet,
    "night" : WiSleet
  },
  {
    "code"  : 1201,
    "day"   : WiSleet,
    "night" : WiSleet
  },
  {
    "code"  : 1204,
    "day"   : WiSleet,
    "night" : WiSleet
  },
  {
    "code"  : 1207,
    "day"   : WiSleet,
    "night" : WiSleet
  },
  {
    "code"  : 1210,
    "day"   : WiDaySnow,
    "night" : WiNightAltSnow
  },
  {
    "code"  : 1213,
    "day"   : WiSnow,
    "night" : WiSnow
  },
  {
    "code"  : 1216,
    "day"   : WiDaySnow,
    "night" : WiNightAltSnow
  },
  {
    "code"  : 1219,
    "day"   : WiSnow,
    "night" : WiSnow
  },
  {
    "code"  : 1222,
    "day"   : WiDaySnow,
    "night" : WiNightAltSnow
  },
  {
    "code"  : 1225,
    "day"   : WiSnow,
    "night" : WiSnow
  },
  {
    "code"  : 1237,
    "day"   : WiSprinkle,
    "night" : WiSprinkle
  },
  {
    "code"  : 1240,
    "day"   : WiDayRain,
    "night" : WiNightAltRain
  },
  {
    "code"  : 1243,
    "day"   : WiDayRain,
    "night" : WiNightAltRain
  },
  {
    "code"  : 1246,
    "day"   : WiDayThunderstorm,
    "night" : WiNightAltThunderstorm
  },
  {
    "code"  : 1249,
    "day"   : WiDaySleet,
    "night" : WiNightAltSleet
  },
  {
    "code"  : 1252,
    "day"   : WiDaySleet,
    "night" : WiNightAltSleet
  },
  {
    "code"  : 1255,
    "day"   : WiDaySnow,
    "night" : WiNightAltSnow
  },
  {
    "code"  : 1258,
    "day"   : WiDaySnow,
    "night" : WiNightAltSnow
  },
  {
    "code"  : 1261,
    "day"   : WiDaySprinkle,
    "night" : WiNightAltSprinkle
  },
  {
    "code"  : 1264,
    "day"   : WiDaySprinkle,
    "night" : WiNightAltSprinkle
  },
  {
    "code"  : 1273,
    "day"   : WiDayThunderstorm,
    "night" : WiNightAltThunderstorm
  },
  {
    "code"  : 1276,
    "day"   : WiThunderstorm,
    "night" : WiThunderstorm
  },
  {
    "code"  : 1279,
    "day"   : WiDaySnowThunderstorm,
    "night" : WiNightAltSnowThunderstorm
  },
  {
    "code"  : 1282,
    "day"   : WiStormShowers,
    "night" : WiStormShowers
  }
];

class Icon extends Component {
  
  condition = conditionList.filter(condition => condition.code === this.props.code);
  icon = this.props.is_day === 1 ? this.condition[0].day : this.condition[0].night;
  
  render() {
    const IconTag = this.icon;
    return <IconTag size={75} />
  }
}

export default Icon;

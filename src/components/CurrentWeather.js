import React from 'react';
import Icon from './Icon';

export const CurrentWeather = ({ weather, units }) => {
  return(
    <div className = 'weather-current'>
      <Icon  
        tag     = {weather.current.condition.text}
        code    = {weather.current.condition.code}
        is_day  = {weather.current.is_day}
      />
      <div className='weather-current-description'>
        {weather.current.condition.text}
      </div>
      <div className='weather-current-temperature'>
        {units.temperature === 'c' ?
          Math.round(weather.current.temp_c)+'°C'
        :
          Math.round(weather.current.temp_f)+'°F'
        }
      </div>
    </div>
  )
}

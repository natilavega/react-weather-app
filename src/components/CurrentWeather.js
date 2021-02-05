import React from 'react';
import Icon from './Icon';

export const CurrentWeather = ({ weather }) => {
  return(
    <div className = 'weather-current'>
      <Icon  
        tag     = {weather.current.condition.text} 
        is_day  = {weather.current.is_day}
      />
      <div className='weather-current-description'>
        {weather.current.condition.text}
      </div>
      <div className='weather-current-temperature'>
        {Math.round(weather.current.temp_c)}°
      </div>
    </div>
  )
}

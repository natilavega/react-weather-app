import React from 'react';
import Icon from '../libraries/Icon';

export const CurrentWeather = ({ weather, units, dictionary }) => {
  return (
    <div className='weather-current'>
      <Icon
        tag={weather.current.condition.text}
        code={weather.current.condition.code}
        is_day={weather.current.is_day}
      />
      <div className='weather-current-temperature'>
        {units.temperature === 'c'
          ? Math.round(weather.current.temp_c) + '°C'
          : Math.round(weather.current.temp_f) + '°F'}
      </div>
      <div className='weather-current-description p-left'>
        {weather.current.condition.text}
      </div>
      <div className='weather-current-feels_like p-left'>
        {dictionary.feels_like + ': '}

        {units.temperature === 'c'
          ? Math.round(weather.current.feelslike_c) + '°C'
          : Math.round(weather.current.feelslike_f) + '°F'}
      </div>
    </div>
  );
};

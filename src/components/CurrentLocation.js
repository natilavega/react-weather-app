import React from 'react';
import { FiMapPin } from 'react-icons/fi';

export const CurrentLocation = ({ weather, onReturn, dictionary }) => {
  return (
    <div className='weather-location custom-row' onClick={onReturn}>
      <FiMapPin size={22} />
      <div className='p-left'>
        <div className='weather-location-city'>{weather.location.name}</div>
        <div className='weather-location-country'>
          {weather.location.region + ', '}
          {weather.location.country}
        </div>
        <div className='weather-location-change'>
          {dictionary.location_change}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { MdLocationOn } from 'react-icons/md';

export const CurrentLocation = ({ weather, onReturn }) => {
  return(
    <div 
      className = 'weather-location' 
      onClick   = {onReturn}
    >
      <MdLocationOn size={20} />
      <div className='weather-location-city'>
        {weather.location.name}
      </div>
      <div className='offset-1 weather-location-country'>
        {weather.location.country}
      </div>
    </div>
  )
}
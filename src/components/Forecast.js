import React from 'react';
import {
  FiDroplet,
  FiThermometer,
  FiUmbrella,
  FiCloud,
  FiWind,
} from 'react-icons/fi';

export const Forecast = ({ weather, units, dictionary }) => {
  return (
    <div className='forecast'>
      <div className='custom-row'>
        <FiDroplet size={22} />
        <div className='p-left forecast-tag'>
          {dictionary.humidity + ': '}
          {weather.current.humidity}%
        </div>
      </div>

      <div className='custom-row'>
        <FiThermometer size={22} />
        <div className='p-left forecast-tag'>
          {dictionary.pressure + ': '}
          {units.pressure === 'in'
            ? weather.current.pressure_in + ' in'
            : weather.current.pressure_mb + ' mb'}
        </div>
      </div>

      <div className='custom-row'>
        <FiUmbrella size={22} />
        <div className='p-left forecast-tag'>
          {dictionary.precipitation + ': '}
          {units.precipitation === 'in'
            ? weather.current.precip_in + ' in'
            : weather.current.precip_mm + ' mm'}
        </div>
      </div>

      <div className='custom-row'>
        <FiCloud size={22} />
        <div className='p-left forecast-tag'>
          {dictionary.cloud_cover + ': '}
          {weather.current.cloud}%
        </div>
      </div>

      <div className='custom-row'>
        <FiWind size={22} />
        <div className='p-left forecast-tag'>
          {dictionary.wind + ': '}
          {units.wind === 'mph'
            ? weather.current.wind_dir + ' ' + weather.current.wind_mph + ' mph'
            : weather.current.wind_dir +
              ' ' +
              weather.current.wind_kph +
              ' kph'}
        </div>
      </div>
    </div>
  );
};

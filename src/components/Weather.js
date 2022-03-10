import React from 'react';
import { CurrentLocation } from './CurrentLocation';
import { CurrentWeather } from './CurrentWeather';
import { Forecast } from './Forecast';

export const Weather = ({ weather, units, dictionary, onReturn }) => {
  return (
    <main>
      <div className='weather'>
        <CurrentLocation
          weather={weather}
          onReturn={onReturn}
          dictionary={dictionary}
        />

        <CurrentWeather
          weather={weather}
          units={units}
          dictionary={dictionary}
        />

        <Forecast weather={weather} units={units} dictionary={dictionary} />
      </div>

      <div className='weather-last_updated'>
        {dictionary.last_updated}: {weather.current.last_updated}
      </div>
    </main>
  );
};

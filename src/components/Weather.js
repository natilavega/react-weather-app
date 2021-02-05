import React from 'react';
import { TimeStamp } from './TimeStamp';
import { CurrentLocation } from './CurrentLocation';
import { CurrentWeather } from './CurrentWeather';
import { Forecast } from './Forecast';

export const Weather = ({ weather, onReturn }) => {
  return (
    <main>
      <TimeStamp />

      <div className = 'weather'>
        <CurrentLocation
          weather   = {weather}
          onReturn  = {onReturn}
        />

        <CurrentWeather
          weather = {weather}
        />

        <Forecast 
          weather = {weather}
        />
      </div>

      <div className='weather-last_updated'>
        Last updated: {weather.current.last_updated}
      </div>
    </main>
  )
}

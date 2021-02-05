import React from 'react';
import { WiCloudy, WiHumidity, WiStrongWind, WiThermometer, WiUmbrella } from 'react-icons/wi';

export const Forecast = ({ weather }) => {
  return(

    <div className = 'forecast'>

      <div className='row'>
        <div className='col-5 forecast-tag'>
          Feels Like
        </div>
        <div>
          {Math.round(weather.current.feelslike_c)}°
        </div>
      </div>

      <div className='row'>
        <div className='col-6'>
          <div className='forecast-tag'>
            Humidity
          </div>
          <div className='row'>
            <div className='col-4'>
              <WiHumidity size={50} />
            </div>
            <div className='col-8 forecast-unit'>
              {weather.current.humidity}%
            </div> 
          </div>
        </div>

        <div className='col-6'>
          <div className='forecast-tag'>
            Pressure
          </div>
          <div className='row'>
            <div className='col-4'>
              <WiThermometer size={50} />
            </div>
            <div className='col-8 forecast-unit'>
             {weather.current.pressure_in} in
            </div> 
          </div>
        </div>
      </div>
    
      <div className='row'>
        <div className='col-6'>
          <div className='forecast-tag'>
            Precipitation
          </div>
          <div className='row'>
            <div className='col-4'>
              <WiUmbrella size={50} />
            </div>
            <div className='col-8 forecast-unit'>
              {weather.current.precip_in} in
            </div> 
          </div>
        </div>

        <div className='col-6'>
          <div className='forecast-tag'>
            Cloud cover
          </div>
          <div className='row'>
            <div className='col-4'>
              <WiCloudy size={50} />
            </div>
            <div className='col-8 forecast-unit'>
              {weather.current.cloud}%
            </div> 
          </div>
        </div>
      </div>

      <div>
        <div className='forecast-tag'>
          Wind
        </div>
        <div className='row'>
          <div className='col-2'>
            <WiStrongWind size={50} />
          </div>
          <div className='col-10 forecast-unit'>
            {weather.current.wind_dir} {weather.current.wind_mph} mph
          </div>
        </div>
      </div>
    </div>















  )
}
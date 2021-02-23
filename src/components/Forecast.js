import React from 'react';
import { WiCloudy, WiHumidity, WiStrongWind, WiThermometer, WiUmbrella } from 'react-icons/wi';

export const Forecast = ({ weather, units, dictionary }) => {
  return(

    <div className = 'forecast'>

      <div className='row'>
        <div className='col-5 forecast-tag'>
          {dictionary.feels_like}
        </div>
        <div>
          {units.temperature === 'c' ?
            Math.round(weather.current.feelslike_c)+'°C'
          :
            Math.round(weather.current.feelslike_f)+'°F'
          }
        </div>
      </div>

      <div className='row'>
        <div className='col-6'>
          <div className='forecast-tag'>
            {dictionary.humidity}
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
            {dictionary.pressure}
          </div>
          <div className='row'>
            <div className='col-4'>
              <WiThermometer size={50} />
            </div>
            <div className='col-8 forecast-unit'>
              {units.pressure === 'in' ?
                weather.current.pressure_in +'in'
              :
                weather.current.pressure_mb +'mb'
              }
            </div> 
          </div>
        </div>
      </div>
    
      <div className='row'>
        <div className='col-6'>
          <div className='forecast-tag'>
            {dictionary.precipitation}
          </div>
          <div className='row'>
            <div className='col-4'>
              <WiUmbrella size={50} />
            </div>
            <div className='col-8 forecast-unit'>
              {units.precipitation === 'in' ?
                weather.current.precip_in +'in'
              :
                weather.current.precip_mm +'mm'
              }
            </div> 
          </div>
        </div>

        <div className='col-6'>
          <div className='forecast-tag'>
            {dictionary.cloud_cover}
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
          {dictionary.wind}
        </div>
        <div className='row'>
          <div className='col-2'>
            <WiStrongWind size={50} />
          </div>
          <div className='col-10 forecast-unit'>
            {units.wind === 'mph' ?
                weather.current.wind_dir +' '+ weather.current.wind_mph +' mph'
              :
                weather.current.wind_dir +' '+ weather.current.wind_kph +' kph'
              }
          </div>
        </div>
      </div>
    </div>
  )
}
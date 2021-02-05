import React, { Component } from 'react';
import { EnterLocation } from './components/EnterLocation';
import { Weather } from './components/Weather';
import { Footer } from './components/Footer';

const api = {
  base: 'http://api.weatherapi.com/v1/current.json',
  key: '2d7871b104ad4d7e9a2150820210102'
}

export class App extends Component {
  state = {
    query: '',
    weather: {}
  }

  componentDidMount() {
    this.handlePermission();
  }
    
  handlePermission = () => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then(result => {
          if (result.state === 'granted') {
            this.getWeatherCurrentLocation();
          } else if (result.state === 'prompt') {
            this.getWeatherCurrentLocation();
          } else if (result.state === 'denied') {
            console.warn('Geolocation Permission Denied');
          }
        });
    } else {
      console.warn('Geolocation Not Available');
    }
  }

  getWeatherCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const coords = pos.coords.latitude + ',' + pos.coords.longitude;
      this.setCoords(coords);
    },
    (err => {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    }),
    { maximumAge: 10000, 
      timeout: 5000, 
      enableHighAccuracy: true
    });
  }
  
  setCoords = (coords) => {
    this.setState({
      query : coords
    });

    this.getWeather();
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getWeather();
    e.target.reset();
  }

  getWeather = () => {
    fetch(`${api.base}?key=${api.key}&q=${this.state.query}`)
      .then(res => res.json())
      .then(result => {
        this.setState({
          query: '',
          weather: result
        })
        //console.log(this.state.weather);
      });
  }

  handleReturn = () => {
    this.setState({
      weather: ''
    })
  }

  render() {
    return(
      <div className='app container'>
        {this.state.weather.location ?
          <Weather 
            weather  = {this.state.weather}
            onReturn = {this.handleReturn}
            is_day   = {this.state.is_day}
          />
        :
          <EnterLocation
            onChange = {this.handleChange} 
            onSubmit = {this.handleSubmit}
            onError  = {this.state.weather}
          />
        }

        <Footer />
      </div>
    )
  }  
}
 
import React, { Component } from 'react';
import { Content } from './components/layout/Content';
import { Dictionary } from './components/Dictionary';

const api = {
  base: 'https://api.weatherapi.com/v1/current.json',
  key: process.env.REACT_APP_API_KEY
}

export class App extends Component {
  state = {
    location: '',
    weather: {},
    settings: {
      is_open: false,
      lang: 'en',
      units: {
        temperature: 'c',
        pressure: 'in',
        precipitation: 'in',
        wind: 'mph'
      }
    },
    dictionary: undefined
  }

  componentDidMount() {
    this.handlePermission();
    this.getSelectLang();
  }
    
  // Geolocation
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
      location: coords
    });

    this.getWeather();
  }

  // Manual location
  handleLocationChange = () => {
    const input = document.getElementById('formControlLocation').value;

    this.setState({
      location: input
    })
  }

  handleLocationSubmit = (e) => {
    e.preventDefault();
    this.getWeather();
    e.target.reset();
  }

  handleLocationReturn = () => {
    this.setState({
      location: '',
      weather: ''
    })
  }

  //API call
  getWeather = () => {
    fetch(`${api.base}?key=${api.key}&q=${this.state.location}&lang=${this.state.settings.lang}`)
      .then(res => res.json())
      .then(result => {
        this.setState({
          weather: result
        })
        //console.log(this.state.weather);
      });
  }

  // Language
  getSelectLang = () => {
    const selectLang = Dictionary.filter(data => data.lang === this.state.settings.lang);
    
    this.setState({
      dictionary: selectLang[0]
    });
  }

  // Settings
  handleSettingsOpen = () => {
    const newSettings = {
      ...this.state.settings,
      is_open: !this.state.settings.is_open
    }

    this.setState({
      settings: newSettings
    });
  }

  handleLanguageChange = (e) => {
    const newSettings = {
      ...this.state.settings,
      lang: e.target.value
    }

    this.setState({
      settings: newSettings
    }, () => {
      this.getSelectLang();
      this.getWeather();
    });
  }

  handleUnitsChange = (e) => {
    const newSettings = {
      ...this.state.settings,
      units: {
        ...this.state.settings.units,
        [e.target.name] : e.target.id
      }
    }

    this.setState({
      settings: newSettings
    });
  }

  // Render
  render() {
    return(
      <>
        {this.state.dictionary ?
          <Content
            location         = {this.state.location}
            weather          = {this.state.weather}
            settings         = {this.state.settings}
            dictionary       = {this.state.dictionary}
            onLocationChange = {this.handleLocationChange}
            onLocationSubmit = {this.handleLocationSubmit}
            onLocationReturn = {this.handleLocationReturn}
            onSettingsOpen   = {this.handleSettingsOpen}
            onLanguageChange = {this.handleLanguageChange}
            onUnitsChange    = {this.handleUnitsChange}
          />
        : 
          console.warn("ERROR. Can't process the request.")
        }
      </>
    )
  }  
}
 
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Weather } from '../Weather';
import { Settings } from '../Settings';
import { EnterLocation } from '../EnterLocation';

export const Content = ({
  location,
  weather,
  settings,
  dictionary,
  onLocationChange,
  onLocationSubmit,
  onLocationReturn,
  onSettingsOpen,
  onLanguageChange,
  onUnitsChange
}) => {
  
  return(
    <div className='app'>    
      {!settings.is_open ? 
        (weather.location ?
          
          // Weather
          <>
            <Header 
              title          = 'weather'
              currentLang    = {settings.lang}
              dateLang       = {dictionary.date}
              onSettingsOpen = {onSettingsOpen} 
            />

            <Weather 
              weather    = {weather}
              units      = {settings.units}
              dictionary = {dictionary.weatherTags}
              onReturn   = {onLocationReturn}
            />
          </>
          
        :
          // Enter Location
          <>
            <Header 
              title          = {dictionary.locationTags.title}
              onSettingsOpen = {onSettingsOpen} 
            />

            <EnterLocation
              location    = {location}
              placeholder = {dictionary.locationTags.search}
              onChange    = {onLocationChange} 
              onSubmit    = {onLocationSubmit}
              onError     = {weather}
            />
          </>
        ) :
          // Settings
          <>
            <Header 
              title          = {dictionary.settingsTags.title}
              settingsOpen   = {true}
              onSettingsOpen = {onSettingsOpen} 
            />

            <Settings
              dictionary       = {dictionary}
              currentSettings  = {settings}
              onLanguageChange = {onLanguageChange}
              onUnitsChange    = {onUnitsChange}
            />
          </>
      }

      <Footer
        tag = {dictionary.developed_by}
      />
    </div>
  )
} 



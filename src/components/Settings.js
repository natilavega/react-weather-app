import React from 'react';
import { Form } from 'react-bootstrap';
import { Dictionary } from './Dictionary';

export const Settings = ({ 
  dictionary, 
  currentSettings, 
  onLanguageChange, 
  onUnitsChange
}) => {
  const langOptions =
    Dictionary.map(data => {
      return (
        <option 
          key   = {`${data.id}`}
          id    = {`${data.lang}`}
          value = {`${data.lang}`}
        >
          {data.lang} - {data.name}
        </option>
      )
    });
  
  return (
    <main>
      {/*Language*/}
      <Form.Group 
        controlId='formControlSelect'
        className='settings-group'
      >
        <Form.Label>
          {dictionary.settingsTags.language}
        </Form.Label>
        <Form.Control
          as       = 'select'
          size     = 'sm'
          value    = {currentSettings.lang}
          onChange = {onLanguageChange}
        >
          {langOptions}
        </Form.Control>
      </Form.Group>

      {/*Temperature*/}
      <Form.Group
        className='settings-group'
      >
        <Form.Label>
          {dictionary.weatherTags.temperature}
        </Form.Label>

        <div>
          <Form.Check
            inline 
            label           = '°C' 
            name            = 'temperature' 
            type            = 'radio' 
            id              = 'c'
            className       = 'col-3'
            defaultChecked  = {currentSettings.units.temperature === 'c'}
            onChange        = {onUnitsChange}
          />
          <Form.Check
            inline 
            label           = "°F" 
            name            = 'temperature' 
            type            = 'radio' 
            id              = 'f'
            className       = 'col-3'
            defaultChecked  = {currentSettings.units.temperature === 'f'}
            onChange        = {onUnitsChange}
          />
        </div>
      </Form.Group>

      {/*Pressure*/}
      <Form.Group
        className='settings-group'
      >
        <Form.Label>
          {dictionary.weatherTags.pressure}
        </Form.Label>

        <div>
          <Form.Check
            inline 
            label           = 'in' 
            name            = 'pressure' 
            type            = 'radio' 
            id              = 'in'
            className       = 'col-3'
            defaultChecked  = {currentSettings.units.pressure === 'in'}
            onChange        = {onUnitsChange}
          />
          <Form.Check
            inline 
            label           = "mb" 
            name            = 'pressure' 
            type            = 'radio' 
            id              = 'mb'
            className       = 'col-3'
            defaultChecked  = {currentSettings.units.pressure === 'mb'}
            onChange        = {onUnitsChange}
          />
        </div>
      </Form.Group>

      {/*Precipitation*/}
      <Form.Group
        className='settings-group'
      >
        <Form.Label>
          {dictionary.weatherTags.precipitation}
        </Form.Label>

        <div>
          <Form.Check
            inline 
            label           = 'in' 
            name            = 'precipitation' 
            type            = 'radio' 
            id              = 'in'
            className       = 'col-3'
            defaultChecked  = {currentSettings.units.precipitation === 'in'}
            onChange        = {onUnitsChange}
          />
          <Form.Check
            inline 
            label           = 'mm'
            name            = 'precipitation' 
            type            = 'radio' 
            id              = 'mm'
            className       = 'col-3'
            defaultChecked  = {currentSettings.units.precipitation === 'mm'}
            onChange        = {onUnitsChange}
          />
        </div>
      </Form.Group>

      {/*Wind*/}
      <Form.Group
        className='settings-group'
      >
        <Form.Label>
          {dictionary.weatherTags.wind}
        </Form.Label>

        <div>
          <Form.Check
            inline 
            label           = 'mph' 
            name            = 'wind' 
            type            = 'radio' 
            id              = 'mph'
            className       = 'col-3'
            defaultChecked  = {currentSettings.units.wind === 'mph'}
            onChange        = {onUnitsChange}
          />
          <Form.Check
            inline 
            label           = 'kph'
            name            = 'wind' 
            type            = 'radio' 
            id              = 'kph'
            className       = 'col-3'
            defaultChecked  = {currentSettings.units.wind === 'kph'}
            onChange        = {onUnitsChange}
          />
        </div>
      </Form.Group>
    </main>
  )
}

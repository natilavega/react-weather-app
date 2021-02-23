import React from 'react';
import { Form } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';

export const EnterLocation = ({ location, placeholder, onChange, onSubmit, onError }) => {

    return (
      <main>
        <Form 
          className = 'search-box'
          onSubmit  = {onSubmit}  
        >
          <Form.Group 
            className='search-wrapper row'
            controlId='formControlLocation'  
          >
            <Form.Control 
              as          = 'input'
              className   = 'search-bar col-9'
              placeholder = {placeholder}
              value       = {location}
              onChange    = {onChange}
            />

            <button 
              className = 'search-btn btn col-3' 
              type      = 'submit'
            >
              <AiOutlineSearch size={26}/>
            </button>
          </Form.Group>

          <div className='search-error'>
            {onError.error ? onError.error.message : ''}
          </div>
        </Form>

      </main>
    )

}

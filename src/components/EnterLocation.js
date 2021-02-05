import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export const EnterLocation = (props) => {
  return (
    <main>
      <div className='search-title'>
        Enter Location
      </div>

      <form 
        className = 'search-box row p-3'
        onSubmit  = {props.onSubmit}
      >
        <div className='search-wrapper'>
          <input
            type        = 'text'
            className   = 'search-bar col-9'
            placeholder = 'City...'
            value       = {props.query}
            onChange    = {props.onChange}
          />
          <button 
            className = 'search-btn btn col-3' 
            type      = 'submit'
          >
            <AiOutlineSearch size={26}/>
          </button>
        </div>
        <div className='search-error'>
          {props.onError.error ? props.onError.error.message : ''}
        </div>
      </form>
    </main>
  )
}

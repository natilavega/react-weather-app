import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Form } from 'react-bootstrap';

export const EnterLocation = ({
  location,
  placeholder,
  onChange,
  onSubmit,
  onError,
}) => {
  return (
    <main>
      <Form className='search-box' onSubmit={onSubmit}>
        <Form.Group className='search-wrapper' controlId='formControlLocation'>
          <Form.Control
            as='input'
            className='search-bar'
            placeholder={placeholder}
            value={location}
            onChange={onChange}
          />

          <button className='search-btn' type='submit'>
            <span>
              <FiSearch size={20} />
            </span>
          </button>
        </Form.Group>

        <div className='search-error'>
          {onError.error ? onError.error.message : ''}
        </div>
      </Form>
    </main>
  );
};

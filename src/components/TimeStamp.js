import React from 'react';

export const TimeStamp = () => {
  const dateBuilder = (d) => {
    let months = [ 
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 
      'August', 'September', 'October', 'November', 'December'
    ]

    let days = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday'
    ]

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];

    return `${day}, ${month} ${date}`
  }
  
  return (
    <div className='timestamp'>
      {dateBuilder(new Date())}
    </div>
  );
}

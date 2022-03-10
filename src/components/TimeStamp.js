import React from 'react';

export const TimeStamp = ({ currentLang, dateLang }) => {
  const dateBuilder = (d) => {
    let day = dateLang.day[d.getDay()];
    let date = d.getDate();
    let month = dateLang.month[d.getMonth()];

    let display;

    currentLang === 'en'
      ? (display = `${day}, ${month} ${date}`)
      : (display = `${day} ${date} de ${month} `);

    return display;
  };

  return <>{dateBuilder(new Date())}</>;
};

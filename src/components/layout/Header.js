import React from 'react';
import { FiSettings, FiX } from 'react-icons/fi';
import { TimeStamp } from '../TimeStamp';

export const Header = ({
  title,
  settingsOpen,
  onSettingsOpen,
  currentLang,
  dateLang,
}) => {
  return (
    <div className='header'>
      <div>
        {title === 'weather' ? (
          <TimeStamp currentLang={currentLang} dateLang={dateLang} />
        ) : (
          <div className='header-title'>{title}</div>
        )}
      </div>

      <div className='header-menu' onClick={onSettingsOpen}>
        {settingsOpen ? <FiX size={22} /> : <FiSettings size={20} />}
      </div>
    </div>
  );
};

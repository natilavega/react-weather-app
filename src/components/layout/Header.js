import React from 'react';
import { IoMdSettings, IoIosClose } from 'react-icons/io';
import { TimeStamp } from '../TimeStamp';

export const Header = ({ title, settingsOpen, onSettingsOpen, currentLang, dateLang }) => {
  return(
    <div className='row header'>
      <div className='col-11'>
        {title === 'weather' ?
          <TimeStamp
            currentLang = {currentLang}
            dateLang    = {dateLang}
          />
        :
          <div className='header-title'>
            {title}
          </div>
        }
      </div>
      
      <div 
        className = 'col-1' 
        onClick   = {onSettingsOpen}
      >
        {settingsOpen ?
          <IoIosClose size={35} />
        :
          <IoMdSettings size={25} />
        } 
      </div>
    </div>
  )
}

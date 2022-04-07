import React, { useState, useEffect } from 'react'

function ColorSwitcher() {
  
    const [colorTheme, setColorTheme] = useState('default-theme')

    useEffect(()=> {
        //check for selected theme in local storage
        const currentThemeColor = localStorage.getItem('theme-color');
        //if found set theme
        if (currentThemeColor) {
            setColorTheme(currentThemeColor);
        }
    }, []);

    //set theme
    const handleClick = (theme) => {
        setColorTheme(theme);
        localStorage.setItem('theme-color', theme)
    }
  return (
    <div className={`color-switcher ${colorTheme}`}>
        <div className='content-box'>
            <h3>Theme Selection</h3>
        </div>
        <div className='theme-options'>
            <div id='default-theme' 
                onClick={() => handleClick('default-theme')}
                className='active'/>
            <div id='dark-theme' 
                onClick={() => handleClick('dark-theme')}
                className='active'/>
            <div id='colorful-theme' 
                onClick={() => handleClick('colorful-theme')}
                className='active'/>
            <div id='light-theme' 
                onClick={() => handleClick('light-theme')}
                className='active'/>
        </div>
        <div className='theme-text'>
            Click the boxes above to select your theme!
        </div>
    </div>
  )
}

export default ColorSwitcher
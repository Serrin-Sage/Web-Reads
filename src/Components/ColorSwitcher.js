import React, { useState, useEffect } from 'react'

function ColorSwitcher({changeColor}) {
  
    const [colorTheme, setColorTheme] = useState('')

    useEffect(()=> {
        //check for selected theme in local storage
        const currentThemeColor = localStorage.getItem('theme-color');
        //if found set theme
        if (currentThemeColor) {
            setColorTheme(currentThemeColor);
        }
    }, [colorTheme]);

    //set theme
    const handleClick = (theme) => {
        setColorTheme(theme);
        localStorage.setItem('theme-color', theme);
        changeColor(theme);
    }
  return (
    <div className={`color-switcher ${colorTheme}`}>
        <div className='content-box'>
            <h3>Theme Selection</h3>
        </div>
        <div className='theme-options'>
            <div id='default-theme' 
                onClick={() => handleClick('default-theme')}
                className='icon-div active'>
                <span className='hover-text'>Default</span>
            </div>
            <div id='dark-theme' 
                onClick={() => handleClick('dark-theme')}
                className='icon-div active'>
                <span className='hover-text'>Dark</span>
            </div>
            <div id='colorful-theme' 
                onClick={() => handleClick('colorful-theme')}
                className='icon-div active'>
                <span className='hover-text'>Colorful</span>
            </div>
            <div id='hunter-theme' 
                onClick={() => handleClick('hunter-theme')}
                className='icon-div active'>
                <span className='hover-text'>Hunter</span>
            </div>
            
        </div>
        <div className='theme-text'>
            Click the boxes above to select your theme!
        </div>
    </div>
  )
}

export default ColorSwitcher
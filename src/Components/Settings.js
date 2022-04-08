import React from 'react'
import ColorSwitcher from './ColorSwitcher'

function Settings({changeColor}) {
  return (
    <div className='Settings'>
        <ColorSwitcher changeColor={changeColor}/>
    </div>
  )
}

export default Settings
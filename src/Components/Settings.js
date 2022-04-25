import React from 'react'
import ColorSwitcher from './ColorSwitcher'
import PictureSwitcher from './PictureSwitcher'

function Settings({changeColor}) {
  return (
    <div className='settings'>
        <ColorSwitcher changeColor={changeColor}/>
        <PictureSwitcher />
    </div>
  )
}

export default Settings
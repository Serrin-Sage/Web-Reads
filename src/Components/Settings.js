import React, {useEffect, useState} from 'react'
import ColorSwitcher from './ColorSwitcher'
import PictureSwitcher from './PictureSwitcher'


function Settings({changeColor, changePic}) {
  // const [selectedPic, setPicture] = useState('')
    
  //   useEffect(()=> {
  //   const currentPicture = localStorage.getItem('profile-picture');
  //   if (currentPicture) {
  //     setPicture(currentPicture);
  //   }
  // }, [selectedPic])

  
  return (
    <div className='settings'>
        <ColorSwitcher changeColor={changeColor}/>
        <PictureSwitcher changePic={changePic}/>
    </div>
    
  )
}

export default Settings
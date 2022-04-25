import React, { useState, useEffect } from 'react'

function PictureSwitcher() {

  const [selectedPic, setPicture] = useState('')

  useEffect(()=> {
    const currentPicture = localStorage.getItem('profile-picture');
    if (currentPicture) {
      setPicture(currentPicture);
    }
  }, [selectedPic])

  const handleClick = (picture) => {
    setPicture(picture);
    localStorage.setItem('profile-picture', picture);
    // changePicture(picture);
  }
  return (
    <div className='picture-switcher'>
        <div className='pic-switch-title'>
          <h3>Profile Image Selection</h3>
        </div>  
        <div className='profile-pic-container'> 
          <div className={`main-profile-pic ${selectedPic}`}>
            
          </div>
            <div className='picture-options'>
              <div id='cat-icon'
                   onClick={() => handleClick('cat-icon')}/>
              <div id='dog-icon'
                   onClick={() => handleClick('dog-icon')}/>
              <div id='default-icon'
                   onClick={() => handleClick('default-icon')}/>
            </div>
        </div>
        
    </div>
  )
}

export default PictureSwitcher
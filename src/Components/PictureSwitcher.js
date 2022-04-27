import React, { useState, useEffect } from 'react'

function PictureSwitcher({changePic}) {

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
    changePic(picture);
  }
  return (
    <div className='picture-switcher'>
        <div className='pic-switch-title'>
          <h3>Profile Image Selection</h3>
        </div>  
        <div className='profile-pic-container'> 
          {/* <div className={`main-profile-pic ${selectedPic}`}>
            
          </div> */}
            <div className='picture-options'>
              <div id='default-icon'
                   onClick={() => handleClick('default-icon')}
                   className={`${selectedPic === 'default-icon' ? 'active' : ''}`}/>
              <div id='cat-icon'
                   onClick={() => handleClick('cat-icon')}
                   className={`${selectedPic === 'cat-icon' ? 'active' : ''}`}/>
              <div id='dog-icon'
                   onClick={() => handleClick('dog-icon')}
                   className={`${selectedPic === 'dog-icon' ? 'active' : ''}`}/>
              <div id='alien-icon'
                   onClick={() => handleClick('alien-icon')}
                   className={`${selectedPic === 'alien-icon' ? 'active' : ''}`}/>
              <div id='monster-icon'
                   onClick={() => handleClick('monster-icon')}
                   className={`${selectedPic === 'monster-icon' ? 'active' : ''}`}/>
              <div id='rabbit-icon'
                   onClick={() => handleClick('rabbit-icon')}
                   className={`${selectedPic === 'rabbit-icon' ? 'active' : ''}`}/>
              <div id='writer-icon'
                   onClick={() => handleClick('writer-icon')}
                   className={`${selectedPic === 'writer-icon' ? 'active' : ''}`}/>
              
            </div>
        </div>
        
    </div>
  )
}

export default PictureSwitcher
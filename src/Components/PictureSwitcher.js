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
          <h3>Profile Icon Selection</h3>
        </div>  
        <div className='profile-pic-container'>
        <h3>Default</h3> 
            <div className='default-picture-options'>
              <div id='default-icon'
                   onClick={() => handleClick('default-icon')}
                   className={`${selectedPic === 'default-icon' ? 'active' : ''}`}>
                     <span className='hover-text'>Default</span>
                   </div>
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
          <h3>Random</h3> 
            <div className='random-picture-options'>
               <div id='stormtrooper-icon'
                   onClick={() => handleClick('stormtrooper-icon')}
                   className={`${selectedPic === 'stormtrooper-icon' ? 'active' : ''}`}/>
              <div id='hunter-icon'
                   onClick={() => handleClick('hunter-icon')}
                   className={`${selectedPic === 'hunter-icon' ? 'active' : ''}`}/>
            </div>
            <h3>Flags</h3>
            <div className='flag-picture-options'>
               <div id='australia-icon'
                   onClick={() => handleClick('australia-icon')}
                   className={`${selectedPic === 'australia-icon' ? 'active' : ''}`}/>
               <div id='brazil-icon'
                   onClick={() => handleClick('brazil-icon')}
                   className={`${selectedPic === 'brazil-icon' ? 'active' : ''}`}/>
               <div id='canada-icon'
                   onClick={() => handleClick('canada-icon')}
                   className={`${selectedPic === 'canada-icon' ? 'active' : ''}`}/>
               <div id='china-icon'
                   onClick={() => handleClick('china-icon')}
                   className={`${selectedPic === 'china-icon' ? 'active' : ''}`}/>
               <div id='egypt-icon'
                   onClick={() => handleClick('egypt-icon')}
                   className={`${selectedPic === 'egypt-icon' ? 'active' : ''}`}/>
               <div id='france-icon'
                   onClick={() => handleClick('france-icon')}
                   className={`${selectedPic === 'france-icon' ? 'active' : ''}`}/>
               <div id='germany-icon'
                   onClick={() => handleClick('germany-icon')}
                   className={`${selectedPic === 'germany-icon' ? 'active' : ''}`}/>
               <div id='india-icon'
                   onClick={() => handleClick('india-icon')}
                   className={`${selectedPic === 'india-icon' ? 'active' : ''}`}/>
               <div id='italy-icon'
                   onClick={() => handleClick('italy-icon')}
                   className={`${selectedPic === 'italy-icon' ? 'active' : ''}`}/>
               <div id='japan-icon'
                   onClick={() => handleClick('japan-icon')}
                   className={`${selectedPic === 'japan-icon' ? 'active' : ''}`}/>
               <div id='mexico-icon'
                   onClick={() => handleClick('mexico-icon')}
                   className={`${selectedPic === 'mexico-icon' ? 'active' : ''}`}/>
               <div id='nepal-icon'
                   onClick={() => handleClick('nepal-icon')}
                   className={`${selectedPic === 'nepal-icon' ? 'active' : ''}`}/>
            </div>
        </div>
        
    </div>
  )
}

export default PictureSwitcher
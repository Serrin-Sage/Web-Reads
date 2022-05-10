import {React, useState, useEffect} from 'react'
import SideBarNav from './SideBarNav'
import Settings from './Settings'
import ProfilePage from './ProfilePage'

function UserPage({changeColor}) {
    // const navigate=useNavigate()(); 
    const [selectedPic, setPicture] = useState('user-default-gray')
    
    useEffect(()=> {
    const currentPicture = localStorage.getItem('profile-picture');
    if (currentPicture) {
      setPicture(currentPicture);
    }
  }, [selectedPic])

  const [showProfile, setShowProfile] = useState(true)
  const [showSettings, setShowSettings] = useState(true)

   //updates User Profile Pic
   const updatePic = (newProfilePic) => {
    setPicture(newProfilePic)
  }

  return ( 
    <div className='user-page-container'>
      
        <SideBarNav changePic={selectedPic} setShowProfile={setShowProfile} setShowSettings={setShowSettings}/>
        <div className='profile-page'>
            { showProfile ? <ProfilePage /> : null }
        </div>
        <div className='settings-page'>
            { showSettings ? <Settings changeColor={changeColor} changePic={updatePic}/> : null}
        </div>
    </div>
  )
}

export default UserPage
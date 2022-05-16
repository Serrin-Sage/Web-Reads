import {React, useState, useEffect} from 'react'
import SideBarNav from './SideBarNav'
import Settings from './Settings'
import BookList from './BookList'
import MLpage from './MLpage'
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
  const [showBookList, setShowBookList] = useState(true)
  const [showMLpage, setShowMLpage] = useState(true)

   //updates User Profile Pic
   const updatePic = (newProfilePic) => {
    setPicture(newProfilePic)
  }

  return ( 
    <div className='user-page-container'>
      
        <SideBarNav changePic={selectedPic} setShowProfile={setShowProfile} setShowSettings={setShowSettings} setShowBookList={setShowBookList} setShowMLpage={setShowMLpage}/>
        <div className='profile-page'>
            { showProfile ? <ProfilePage /> : null }
        </div>
        <div className='settings-page'>
            { showSettings ? <Settings changeColor={changeColor} changePic={updatePic}/> : null}
        </div>
        <div className='booklist-page'>
            { showBookList ? <BookList/> : null}
        </div>
        <div className='booklist-page'>
            { showMLpage ? <MLpage/> : null}
        </div>
    </div>
  )
}

export default UserPage
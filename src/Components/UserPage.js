import {React, useState, useEffect} from 'react'
import user_default from '../images/user_default.png'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import BookData from '../TestData.json'

function UserPage() {
    const [selectedPic, setPicture] = useState('')

    useEffect(()=> {
    const currentPicture = localStorage.getItem('profile-picture');
    if (currentPicture) {
      setPicture(currentPicture);
    }
  }, [selectedPic])

  return (
    <div>
        <div className='user-page-container'>
            <div className='side-bar-nav'>
                <div className={`user-icon ${selectedPic}`}>
                    {/* <img src={user_default} alt="DEFAULT_USER_IMG" className='user-default' /> */}
                </div>
                <div className='side-bar-nav-options'>
                    <Link to="/userpage" className='settings-text'>Profile</Link>
                    <Link to="/settings" className='settings-text'>Settings</Link>
                    <Link to="/booklist" className='settings-text'>Book List</Link>
                </div>
            </div>
            <div className='main-user-page'>
                <div>
                    Your Profile
                    <div className='profile-container'>
                        <div className='username-display'>
                            UserName
                        </div>
                        <div className='email-display'>
                            Email@email.com
                        </div>
                    </div>
                    Liked Books:
                </div>
                
                <SearchBar placeholder="Enter a Book Title..." data={BookData}/>
            </div>
        </div>
    </div>
    
  )
}

export default UserPage
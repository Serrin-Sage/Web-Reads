import React from 'react'
import SearchBar from './SearchBar'
import BookData from '../TestData.json'
function ProfilePage() {
  
  const user = JSON.parse(localStorage.getItem('userInfo'));
  
  return (
    <div className='main-user-page'>
        <div>
            Your Profile
            <div className='profile-container'>
                <div className='username-display'>
                    Welcome, {user.name} !
                </div>
                <div className='email-display'>
                    {user.email}
                </div>
            </div>
            Liked Books:
        </div>
        <SearchBar placeholder="Enter a Book Title..." data={BookData}/>
    </div>
  )
}

export default ProfilePage
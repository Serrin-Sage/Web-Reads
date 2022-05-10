import React, {useEffect, useState} from 'react'
import SearchBar from './SearchBar'
import BookData from '../TestData.json'
import axios from 'axios';


function ProfilePage() {
  
  const user = JSON.parse(localStorage.getItem('userInfo'));
  
    //state = {something: []};}
    const [value, setValue] = useState("");

    useEffect(()=>{
        axios.get('http://localhost:5000/api/users/allusers')
            .then((response)=>{
                console.log(response)
                setValue(response)
        }).catch(error => {
            console.log(error)
        })
    })
    
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
            Liked Books: {value}
        </div>
        <SearchBar placeholder="Enter a Book Title..." data={BookData}/>
    </div>
  )
}

export default ProfilePage
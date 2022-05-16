import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function SideBarNav({setShowProfile, setShowSettings, setShowBookList, setShowMLpage, changePic}) {
    const [selectedPic, setPicture] = useState('')
    
    useEffect(()=> {
    const currentPicture = localStorage.getItem('profile-picture');
    if (currentPicture) {
      setPicture(currentPicture);
    }
  }, [selectedPic])
  
  //delete user info from local storage
  const logout = () => {
    localStorage.removeItem('userInfo');
  };

  return (
    <div className='side-bar-container'>
        <div className='side-bar-nav'>
            <div className={`user-icon ${changePic}`}>
        
            </div>
            <div className='side-bar-nav-options'>
                <button className='settings-text' onClick={() => {setShowProfile(true); setShowSettings(false); setShowBookList(false); setShowMLpage(false)}}>Profile</button>
                <button className='settings-text' onClick={() => {setShowSettings(true); setShowProfile(false); setShowBookList(false); setShowMLpage(false)}}>Settings</button>
                <button className='settings-text' onClick={() => {setShowBookList(true); setShowSettings(false); setShowProfile(false); setShowMLpage(false)}}>Book List</button>
                <button className='settings-text' onClick={() => {setShowBookList(false); setShowSettings(false); setShowProfile(false); setShowMLpage(true)}}>ML Page</button>
                {/* <Link to="/mlpage" className='settings-text'>ML Page</Link> */}
                <Link to="/" >
                    <button className='settings-text' onClickCapture={logout}>Logout </button>
                </Link>
            </div>
        </div>
    </div>

  )}

export default SideBarNav
import React from 'react'
import user_default from '../images/user_default.png'
import { NavLink, Link} from 'react-router-dom'

function UserPage() {
  return (
    <div>
        <div className='user-page-container'>
            <div className='side-bar-nav'>
                <div className='user-icon'>
                    <img src={user_default} alt="DEFAULT_USER_IMG" className='user-default' />
                </div>
                <div className='side-bar-nav-options'>
                    <Link to="/profile" className='settings-text'>Profile</Link>
                    <Link to="/settings" className='settings-text'>Settings</Link>
                </div>
            </div>
            <div className='main-user-page'>
                HELLO TEST
            </div>
        </div>
    </div>
    
  )
}

export default UserPage
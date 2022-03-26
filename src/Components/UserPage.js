import React from 'react'
import user_default from '../images/user_default.png'

function UserPage() {
  return (
    <div>
        <a href="/userpage" className="user-page"></a>
        <div className='user-page-container'>
            <div className='side-bar-nav'>
                <div className='user-icon'>
                    <img src={user_default} alt="DEFAULT_USER_IMG" className='user-default' />
                </div>
                <div className='settings'>
                    PROFILE
                </div>
                <div className='settings'>
                    SETTINGS
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default UserPage
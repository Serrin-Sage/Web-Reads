import {React} from 'react'
import user_default from '../images/user_default.png'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import BookData from '../TestData.json'

function UserPage() {
  return (
    <div>
        <div className='user-page-container'>
            <div className='side-bar-nav'>
                <div className='user-icon'>
                    <img src={user_default} alt="DEFAULT_USER_IMG" className='user-default' />
                </div>
                <div className='side-bar-nav-options'>
                    <Link to="/userpage" className='settings-text'>Profile</Link>
                    <Link to="/settings" className='settings-text'>Settings</Link>
                </div>
            </div>
            <div className='main-user-page'>
                <div>
                <ul>
                    Profile Page
                    <li>
                        User Name:
                    </li>
                    <li>
                        Email:
                    </li>
                    <li>
                        Book List:
                    </li>
                </ul>
                </div>
                
                <SearchBar placeholder="Enter a Book Title..." data={BookData}/>
            </div>
        </div>
    </div>
    
  )
}

export default UserPage
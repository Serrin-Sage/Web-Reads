import React, {useEffect, useState} from 'react'
import SearchBar from './SearchBar'
import BookData from '../TestData.json'
import axios from 'axios';


function ProfilePage() {
  
  const user = JSON.parse(localStorage.getItem('userInfo'));
  
    //state = {something: []};}
    const [Ubook, UbooksetValue] = useState("");
    const yellow = Ubook.data;
    // console.log(yellow);
    // console.log('whooo',user);
    var be;
    var i;
    
    function funcheck(){
    for (i = 0; i < yellow.length; i++){
        if(yellow[i]._id==user._id){
            be = i;
        }
    }};
/*
    const funA = async (e) => {
        e.preventDefault();
        // setErrors(Validation(email));
        // setErrors(Validation(password));
        console.log(email, password);
        try {
            const config = {
                method: 'GET',
                headers:{
                    "Content-type" : "application/json"
                }
            }
            const { data } = await axios.get(
                "/api/users/allusers",
                {
                    email,
                    password,
                },
                config
            );
            console.log({data});
            localStorage.setItem("userInfo", JSON.stringify(data));
            window.location.href = '/userpage';
            
        } catch (error) {
             setErrors(error.response.data.message);
            
        }
    };
    */

    useEffect(()=>{
        axios.get('http://localhost:5000/api/users/allusers')
            .then((response)=>{
                console.log(response)
                UbooksetValue(response)
        }).catch(error => {
            console.log(error)
        })
    },[]);
  
  return(
    <div className='main-user-page'>{
        Ubook?.data?
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
            {funcheck()}
            {console.log('this is',yellow[be].likedBooks)}
            <h4>{yellow[be].likedBooks}</h4>
        </div>
        :
        <div>
            loading...
        </div>
}
        <SearchBar placeholder="Enter a Book Title..." data={BookData}/>
    </div>
  )
}

export default ProfilePage
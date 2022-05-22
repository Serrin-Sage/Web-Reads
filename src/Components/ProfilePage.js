import React, {useEffect, useState} from 'react'
import SearchBar from './SearchBar'
import BookData from '../TestData.json'
import axios from 'axios';
import LikedBookInfo from './LikedBookInfo'


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
            {/* {yellow[be].likedBooks.map(book => <h4> {book} </h4>)} */}
            {yellow[be].likedBooks.map(book => <LikedBookInfo book={book} />)}
        </div>
        :
        <div>
            loading...
        </div>
}
        {/* <SearchBar placeholder="Enter a Book Title..." data={BookData}/> */}
    </div>
  )
}

export default ProfilePage
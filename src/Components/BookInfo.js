import React, {useEffect, useState} from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import axios from "axios";

function BookInfo({book}) {
  const [Ubook, UbooksetValue] = useState("");

  axios.get('http://localhost:5000/api/users/allusers/')
    .then((response)=>{
        console.log(response)
        UbooksetValue(response)
  }).catch(error => {
    console.log(error)
  })

  const yellow = Ubook.data;
  const user = JSON.parse(localStorage.getItem('userInfo'));
  var i;
  var be;
  const userId = user._id;

  function funcheck(){
    for (i = 0; i < yellow.length; i++){
        if(yellow[i]._id==user._id){
            be = i;
        }
    }};


  const handleClick = () => {
    funcheck()
    console.log("test")

    yellow[be].likedBooks.push(book.Name)

    axios.patch(`http://localhost:5000/api/users/${userId}`, {
            likedBooks: yellow[be].likedBooks
        }).then((response) => console.log("heeeere",response));
  }

  return (
    <div className='book-info'>
        <div className='book-details'>
            <h3>{book.Name}</h3> <br/>
            {book.Authors}
        </div>
        <div className='fav-icon-container'>
            <FavoriteBorderIcon className='fav-icon' fontSize='large' onClick={handleClick} />
        </div>
        
    </div>
  )
}

export default BookInfo
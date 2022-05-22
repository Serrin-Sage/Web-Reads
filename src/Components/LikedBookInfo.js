import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function BookInfo({book}) {

  const handleClick = () => {
    console.log("test")
  }

  return (
    <div className='book-info'>
        <div className='book-details'>
            <h3>{book}</h3> <br/>
        </div>
        <div className='fav-icon-container'>
            <FavoriteBorderIcon className='fav-icon' fontSize='large' onClick={handleClick} />
        </div>
        
    </div>
  )
}

export default BookInfo
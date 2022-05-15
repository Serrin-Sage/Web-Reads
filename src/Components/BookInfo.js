import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function BookInfo({book}) {
  return (
    <div className='book-info'>
        <div className='book-details'>
            <h3>{book.title}</h3> <br/>
            {book.author}
        </div>
        <div className='fav-icon-container'>
            <FavoriteBorderIcon className='fav-icon' fontSize='large' onClick={() => console.log("test")} />
        </div>
        
    </div>
  )
}

export default BookInfo
import React, {useState} from 'react'
import BookData from '../TestData.json'
import BookInfo from './BookInfo';

function BookList() {

    const [searchTerm, setSearchTerm] = useState('')

    const books = [];
    for (let i=0; i<BookData.length; i++){
        books.push(BookData[i]);
    }
    return (
        <div className='book-list-container'>
            <div className='book-list'>
                <h1 className='book-list-title'>Our Books</h1>
                <input 
                    className='list-search-input'
                    type="text" 
                    placeholder="Search..." 
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }} />
                {books.filter((book) => {
                    if (searchTerm === "") {
                        return book
                    }
                    else if (book.title.toLowerCase().includes(searchTerm.toLowerCase())){
                        return book
                    }
                }).map(book => <BookInfo book={book} />)}
            </div>
        </div>
    )
}

export default BookList
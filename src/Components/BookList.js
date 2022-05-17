import React, {useState, useEffect} from 'react'
// import BookData from '../TestData.json'
import BookInfo from './BookInfo';
import axios from 'axios';

function BookList() {

    const [searchTerm, setSearchTerm] = useState('')
    const [BookData, setBookData] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/api/books/allbooks')
        .then((response) => {
            const allBooks = response.data;
            setBookData(allBooks);
        })
        .catch(error => console.error(`Error: ${error}`));
    }, []);

    const books = [];
    for (let i=0; i < BookData.length; i++){
        books.push(BookData[i]);
    }
    return (
        <div className='book-list-container'>
            <div className='book-list'>
                <h1>Our Books</h1>
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
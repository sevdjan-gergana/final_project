import React from 'react';
import BookCard from '../List/BookCard';


const List=(props)=>{
    return(
        <div >
        {
            props.books.map((book,i)=>{
                return <BookCard 
                                 key={i}
                                 image={book.volumeInfo.imageLinks.thumbnail}
                                 title={book.volumeInfo.title}
                                 author={book.volumeInfo.authors}
                                 published={book.volumeInfo.publishedDate}

                /> 
            })
        }

        </div>
    )
}

export default List; 
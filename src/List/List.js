import React from 'react';
import BookCard from '../List/BookCard';
import classes from '../List/BookCard.module.scss'


const List=(props)=>{
    
    return(
        <div >
        {
            props.books.map((book,i)=>{
         
                 
                    
                    return  <div className={classes.book}>
                    <BookCard 
                                 key={i}
                                 image={book.volumeInfo.imageLinks.thumbnail}
                                 title={book.volumeInfo.title}
                                 author={book.volumeInfo.authors}
                                 published={book.volumeInfo.publishedDate}

                />
                </div>
          
                
                
            })
        }

        </div>
    )
}

export default List; 
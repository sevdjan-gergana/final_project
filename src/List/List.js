import React from 'react';
import BookCard from '../List/BookCard';
import classes from '../List/BookCard.module.scss';

const List = (props) => {
    return (
        <div className={classes.container}>
            {props.books.map((book, i) => {
                return <BookCard
                    key={book.id}
                    id={book.id}
                    image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://onlocationvacations.com/wp-content/uploads/2019/01/book.jpg'}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    published={book.volumeInfo.publishedDate}
                />
            })}
        </div>
    )
}

export default List; 
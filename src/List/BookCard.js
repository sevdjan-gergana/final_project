import React from 'react';
import BookList from '../BookList/BookList';
import classes from '../List/BookCard.module.scss';



const BookCard = (props) => {

    return (
        <React.Fragment>
            <div className={classes.book}>
            <div className={classes.imgBox}>
                <img className={classes.img} src={props.image} alt='' />
                </div>
                
                <h2>{props.title}</h2>
              
                <h3>{props.authors}</h3>
                <p>{props.published}</p>

            </div>
        </React.Fragment>
    )
}

export default BookCard; 
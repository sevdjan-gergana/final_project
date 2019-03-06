import React from 'react';
import BookList from '../BookList/BookList';



const BookCard = (props) => {

    return (
        <React.Fragment>
            <div className={classes.imgBox}>
                <img className={classes.img} src={props.image} alt='' />
            </div>
            <div className={classes.titleBox}>
                <h2 className={classes.title} >{props.title}</h2>
            </div>

            <h3>{props.authors}</h3>
            <div className={classes.published}>
                <p>{props.published}</p>
            </div>
        </React.Fragment>
    )
}

export default BookCard; 
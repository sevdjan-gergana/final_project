import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../List/BookCard.module.scss'


const BookCard = (props) => {

    function validate(name){
        if(name && name.length > 15){
            return (name.slice(0,15) + "...");
        }else {
            return name;
        }
    }

    const url = 'book/' + props.id;
    return (
        <React.Fragment>
            <div className={classes.book}  key={props.id}>
                <div className={classes.imgBox} >
                    <NavLink to={url}><img className={classes.img} src={props.image} alt='' /></NavLink>
                </div>
                <div>
                    <NavLink to={url}><h2>{validate(props.title)}</h2></NavLink>
                    <p>{validate(props.author)}</p>
                    <p>{props.published}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BookCard; 

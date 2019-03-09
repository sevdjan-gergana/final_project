import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../List/BookCard.module.scss'


//  getID=(e)=>{
//         alert('getting ID');
//     }
// function returnBook=(e)=>{
//     const id=this.props.id;

//     return 'book/'+id;

//      }

const BookCard = (props) => {
    function validateTitle(){
        if(props.title.length > 20){
            return (props.title.slice(0,20) + "...");
        }else {
            return props.title;
        }
    }

    const url = 'book/' + props.id;
    return (
        <React.Fragment>
            <div className={classes.book}>
                <div className={classes.imgBox}>
                    <NavLink to={url}><img className={classes.img} src={props.image} alt='' /></NavLink>
                </div>
                <>
                    <NavLink to={url}><h2>{validateTitle()}</h2></NavLink>
                    <NavLink to={url}><p>{props.published}</p></NavLink>
                </>
            </div>
        </React.Fragment>
    )
}

export default BookCard; 

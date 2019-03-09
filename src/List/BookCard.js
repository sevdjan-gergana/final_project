import React from 'react';
import BookList from '../BookList/BookList';
import { NavLink } from 'react-router-dom';
import classes from '../List/BookCard.module.scss'
import BookDetailsComponent from '../App/routes/Book/Book';


//  getID=(e)=>{
//         alert('getting ID');
//     }
// function returnBook=(e)=>{
//     const id=this.props.id;

//     return 'book/'+id;

//      }

const BookCard = (props) => {

    // function redirectToBook(){
    //     let hash="/book/"+ props.id;
    //     console.log(2);
    //     return hash;
    // }
    const url = 'book/' + props.id;
    return (

        <React.Fragment>
            <div className={classes.book}>
                <div className={classes.imgBox}>
                    <NavLink to={url}><h3>{props.id}</h3></NavLink>
                    <img className={classes.img} src={props.image} alt='' />
                </div>
                <>
                    <h2>{props.title}</h2>
                    <p>{props.published}</p>
                </>
            </div>
        </React.Fragment>
    )
}

export default BookCard; 
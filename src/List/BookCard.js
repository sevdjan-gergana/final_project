import React from 'react';
import BookList from '../BookList/BookList';
import {NavLink} from 'react-router-dom';
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

    return (

        <React.Fragment>
            <div className={classes.book}>
            <div className={classes.imgBox}>
          
            <NavLink to={`book/${props.id}`}><img className={classes.img} src={props.image} alt='' /></NavLink>
                </div>
                <>
                <NavLink to={`book/${props.id}`}><h2>{props.title}</h2></NavLink>
              
               
                <NavLink to={`book/${props.id}`}><p>{props.published}</p></NavLink>
               
            </>
            </div>
        </React.Fragment>
    )
}

export default BookCard; 
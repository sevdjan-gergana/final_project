import React from 'react';
import GenresModal from '../GenresModal/GenresModalComponent';
import ListGenres from '../BookList/ListGenres';
import request from 'superagent';
import List from '../List/List';
import classes from '../BookList/BookList.module.scss';


class BookListGenres extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books1: [],
            books: [],
            searchField: 'dogs',
            genres:["Graphic Novels", "Historical Fiction", "History", "Humor and Comedy"]
            
        }
        // seearchService.addObserver(this);
    }

//     getGenres=()=>{
       
   
    
// };


    // componentDidMount() {
    //     const user = JSON.parse(window.localStorage.getItem(window.sessionStorage.getItem("user")));
    //     const { genres }=user;
    //     this.setState({genres});
    //     console.log(genres);
    //     request
    //         .get('https://www.googleapis.com/books/v1/volumes')
    //         .query({q:this.state.genres[1] })
    //         .then((data) => {
    //             console.log(data);
    //             this.setState({ books: [...data.body.items] })
    //         })

           
        
    // }

    // componentDidMount() {
    //     const user = JSON.parse(window.localStorage.getItem(window.sessionStorage.getItem("user")));
    //     const { genres }=user;
    //     this.setState({genres});
    //     console.log(genres);
    //     request
    //         .get('https://www.googleapis.com/books/v1/volumes')
    //         .query({q:this.state.genres[2] })
    //         .then((data) => {
    //             console.log(data);
    //             this.setState({ books: [...data.body.items] })
    //         })

           
        
    // }
    // searchBook = (e) => {
    //     e.preventDefault();
    //     request
    //         .get('https://www.googleapis.com/books/v1/volumes')
    //         .query({ q: this.state.userGenres })
    //         .then((data) => {
    //             console.log(data);
    //             this.setState({ books: [...data.body.items] })
    //         })
    // }


    render() {
        return (
            <div>
             {/* <List */}
             {/* <List/> */}
             <h2 className={classes.rec}>Recommended for you</h2>
             <h3>{this.state.genres[2]}</h3>
             <List books={this.state.books} />
            </div>

        )
    }
}

export default BookListGenres;
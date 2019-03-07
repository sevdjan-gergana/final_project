import React from 'react';
import SearchArea from '../UI/SearchArea/SearchArea';
import request from 'superagent';
import List from '../List/List';
import classes from '../List/BookCard.module.scss';


class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: 'dogs'
        }
    }

    componentDidMount(){
        request
        .get('https://www.googleapis.com/books/v1/volumes')
        .query({ q:'cat'})
        .then((data) => {
            console.log(data);
            this.setState({ books: [...data.body.items] })
        })
    }




    searchBook = (e) => {
        e.preventDefault();
        request
            .get('https://www.googleapis.com/books/v1/volumes')
            .query({ q: this.state.searchField })
            .then((data) => {
                console.log(data);
                this.setState({ books: [...data.body.items] })
            })
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }


    render() {
        return (
            <div>
                <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} /> 
                <div className={classes.bigWrapper}>  
                <List books={this.state.books} />
                </div>        
                
                {/* <BookListComponent bookList={this.state.books} /> */}
            </div>

        );
    }
}


export default BookList;
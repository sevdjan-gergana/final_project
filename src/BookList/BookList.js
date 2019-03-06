import React from 'react';
// import classes from './BookList.module.scss';
import SearchArea from '../UI/SearchArea/SearchArea';
import request from 'superagent';
import List from '../List/List';
import classes from '../List/BookCard.module.scss'


class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }


    searchBook = (e) => {
        e.preventDefault();
        let count=0;
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
                <List books={this.state.books} />

                {/* <BookListComponent bookList={this.state.books} /> */}
            </div>

        );
    }
}


export default BookList;
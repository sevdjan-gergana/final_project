import React from 'react';
import SearchArea from '../UI/SearchArea/SearchArea';
import request from 'superagent';
import List from '../List/List';

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: "cat",
        }
        // seearchService.addObserver(this);
    }

    componentDidMount() {
        request
            .get('https://www.googleapis.com/books/v1/volumes')
            .query({ q: "cat" })
            .then((data) => {
                this.setState({ books: [...data.body.items] })
            })
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get('https://www.googleapis.com/books/v1/volumes')
            .query({ q: this.state.searchField })
            .then((data) => {
                if (data.body.totalItems === 0) {
                    this.setState({ books: [] })
                } else {
                    this.setState({ books: [...data.body.items] })
                }
            })
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        return (
            <div>
                <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
                <div >
                    {this.state.books.length === 0 ?
                        <h1>Sorry, search came back empty</h1> :
                        <List books={this.state.books} />
                    }
                </div>
            </div>
        );
    }
}

export default BookList;
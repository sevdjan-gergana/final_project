import React from 'react';
import GenresModal from '../GenresModal/GenresModalComponent';
import List from '../List/List';


class BookListGenres extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: 'dogs',
            id:''
        }
        // seearchService.addObserver(this);
    }


    componentDidMount() {
        request
            .get('https://www.googleapis.com/books/v1/volumes')
            .query({subject: 'cat' })
            .then((data) => {
                console.log(data);
                this.setState({ books: [...data.body.items] })
            })
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get('https://www.googleapis.com/books/v1/volumes')
            .query({ subject: this.state.searchField })
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
              <GenresModal searchBook={this.searchBook} handleSearch={this.handleSearch}></GenresModal>
              <List books={this.state.books} />
            </div>

        );
    }
}

export default BookListGenres;
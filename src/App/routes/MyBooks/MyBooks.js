import React from 'react';
import Footer from '../../../Footer/Footer';
import classes from './MyBooks.module.scss';
import Loader from '../../../Loader/LoaderComponent.js';
import List from '../../../List/List.js';

class MyBooksComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            showModal: true,
            books: [],
            userBooks: [],

        }
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handleModalClose() {
        this.setState({ showModal: false })
    }

    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 1000);
        let user = JSON.parse(window.localStorage.getItem(window.sessionStorage.getItem("user")));
        let userBooks = user.shelves.read.concat(user.shelves.reading.concat(user.shelves.will));

        userBooks.forEach(id => {
            this.getBook(id);
        });
    }

    async getBook(id) {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        const book = await res.json();
        this.state.books.push(book);
    }

    render() {
        return (
            this.state.loading ? <Loader className={classes.Loader}/>
                : <React.Fragment>
                    <div className={classes.Wrapper}>
                        <div className={classes.List}>
                            <h2>My Books</h2>
                            <hr />
                            {this.state.books.length === 0 ?
                                <div>
                                    <h3>Your shelve is empty.</h3>
                                </div>
                                : ""
                            }
                            <List books={this.state.books} />
                        </div>
                    </div>
                    <Footer />
                </React.Fragment >
        );
    }
}

export default MyBooksComponent;
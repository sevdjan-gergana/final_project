import React from 'react';
import Footer from '../../../Footer/Footer';
import Aside from '../../../HomeAside/AsideComponent.js';
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
        console.log(this.state.books);
    }

    async getBook(id) {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        const book = await res.json();
        this.state.books.push(book);
    }

    render() {
        return (
            this.state.loading ? <Loader />
                : <React.Fragment>
                    <div className={classes.Wrapper}>
                        <div className={classes.List}>
                            <List books={this.state.books} />
                        </div>
                        {/* <div className={classes.Aside}><Aside /></div> */}
                        <Footer />
                    </div>
                </React.Fragment >
        );
    }
}

export default MyBooksComponent;
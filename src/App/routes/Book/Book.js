import React from 'react';
import Footer from '../../../Footer/Footer';
import classes from '../Book/BookDetails.module.scss';


class BookDetailsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            book: {
                id: '',
                volumeInfo: {
                    title: '',
                    authors: '',
                    description: '',
                    categories: '',
                    imageLinks: {
                    }
                }
            }
        }
        this.handleUserSelect = this.handleUserSelect.bind(this);
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        const book = await res.json();
        this.setState({ book });
    }

    handleUserSelect() {
        let userName = window.sessionStorage.getItem("user");
        let user = JSON.parse(window.localStorage.getItem(userName));
        var shelve = document.getElementById("mySelect").value;

        user.shelves.read = user.shelves.read.filter((book) => book !== this.state.book.id);
        user.shelves.reading = user.shelves.reading.filter((book) => book !== this.state.book.id);
        user.shelves.will = user.shelves.will.filter((book) => book !== this.state.book.id);

        user.shelves[shelve].push(this.state.book.id);
        window.localStorage.setItem(userName, JSON.stringify(user));

    }

    render() {
        // console.log(this.state.book.volumeInfo.title);
        return (
            <React.Fragment>
                <div className={classes.Wrapper}>
                    <div className={classes.imgBox}>
                        <img className={classes.img} src={this.state.book.volumeInfo.imageLinks.small} alt='' />
                        <select className={classes.button} id="mySelect" onChange={this.handleUserSelect}>
                            <option value="read">Read</option>
                            <option value="reading">Reading</option>
                            <option value="will" selected="selected">Want to read</option>
                        </select>
                    </div>
                    <div className={classes.infoBox}>
                        <h1>{this.state.book.volumeInfo.title}</h1>
                        <h3>by {this.state.book.volumeInfo.authors}</h3>
                        {this.state.book.volumeInfo.categories}
                        <p>{this.state.book.volumeInfo.description}</p>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default BookDetailsComponent;
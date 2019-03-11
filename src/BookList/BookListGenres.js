import React from 'react';
import request from 'superagent';
import ListGenres from './ListGenres.js';
import Loader from '../Loader/LoaderComponent';
import classes from '../BookList/BookList.module.scss';

class BookListGenres extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colectionByGenres: [],
            searchField: 'dogs',
            genres: JSON.parse(window.localStorage.getItem(window.sessionStorage.getItem("user"))).genres,
            loading: true,
        }
    }

    componentDidMount() {


        Promise.all(this.state.genres.map(genre => {
            return this.getBooksByGenre(genre)
                .then((data) => this.setState({ colectionByGenres: [...this.state.colectionByGenres,    {genre:genre, books:[...data.body.items.slice(0, 5)]}]        } ));
        })).then(setTimeout(() => this.setState({ loading: false }), 1000))
    }

    getBooksByGenre(genre) {
        return new Promise(function (resolve, reject) {
            request
                .get('https://www.googleapis.com/books/v1/volumes')
                .query({ q: genre })
                .then((data) => {
                    resolve(data);

                })
        });
    }

    render() {
        return (
            this.state.loading ? <Loader />
                : <div>
                    <h2 className={classes.rec}>Recommended for you</h2>
                    {this.state.genres.length === 0 ?
                        <div>
                            <h3>We're sorry, but we don't have any book recommendations for you yet.</h3>
                            <p> Goodreads learns about your personal tastes from your favorite genres,
                            then generates recommendations unique to you. You need to fill favorite genres to get Goodreads Recommendations.
                        </p>
                        </div>
                        : ""
                    }
                    {this.state.colectionByGenres.map((colection, i) => <ListGenres genre={colection.genre} books={colection.books} />)}
                </div>
        )
    }
}

export default BookListGenres;
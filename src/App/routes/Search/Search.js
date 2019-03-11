import React from 'react';
import BookList from '../../../BookList/BookList';
import Footer from '../../../Footer/Footer';
import classes from './Search.module.scss';

const Search = () => {
    return (
        <React.Fragment>
            <div className={classes.Wrapper}>
                <BookList />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Search;
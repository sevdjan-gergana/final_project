import React from 'react';
import Footer from '../../../Footer/Footer';
import BookListGenres from '../../../BookList/BookListGenres';
import BookList from '../../../BookList/BookList';
import Aside from '../../../HomeAside/AsideComponent.js';
import Loader from '../../../Loader/LoaderComponent.js';
import Authenticate from '../../../Login-Register/authenticate';
import classes from './Home.module.scss';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            logged: window.sessionStorage.getItem("user") ? true : false,
        }
    }


    // state = {
    //     books: []
    // }

    // componentDidMount() {
    //     fetch(`https://www.googleapis.com/books/v1/volumes?q={'war'}`, {
    //         cache: 'no-cache',
    //         headers: {
    //             'Accept': 'application/json',
    //         },
    //         method: 'GET',
    //         mode: 'cors'
    //     })
    //         .then((response) => {
    //             if (response.ok) {
    //                 console.log('fetched');
    //                 return response.json()

    //             }

    //             return Promise.reject({
    //                 status: response.status,
    //                 messagePromise: response.json()
    //             });
    //         }).then(data => {
    //             this.setState({
    //                 books: data
    //             })

    //         }).catch(e => console.log(e))


    //     fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms', {
    //         cache: 'no-cache',
    //         headers: {
    //             'Accept': 'application/json',
    //         },
    //         method: 'GET',
    //         mode: 'cors'
    //     })
    //         .then((response) => {
    //             if (response.ok) {
    //                 return response.json()
    //             }

    //             return Promise.reject({
    //                 status: response.status,
    //                 messagePromise: response.json()
    //             });
    //         }).then(data => {
    //             console.log(data);
    //         }).catch(e => console.log(e))
    // }

    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 1000);
    }

    render() {
        return (
            this.state.loading ? <Loader />
                : <React.Fragment>
                    {this.state.logged ?
                        <div className={classes.Wrapper}>
                            <div className={classes.List}><BookListGenres /></div>
                        </div>
                        : <>
                            <div className={classes.authenticate}><Authenticate /></div>
                            <div className={classes.Wrapper}>
                                <div className={classes.List}><BookList /></div>
                                <div className={classes.Aside}><Aside /></div>
                            </div>
                        </>
                    }

                    <Footer />
                </React.Fragment>
        );
    }
}

export default HomeComponent;
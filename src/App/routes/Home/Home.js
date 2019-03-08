import React from 'react';
import Footer from '../../../Footer/Footer';
import BookList from '../../../BookList/BookList';
import Aside from '../../../HomeAside/AsideComponent.js';
import Loader from '../../../Loader/LoaderComponent.js';
import GenresModal from '../../../GenresModal/GenresModalComponent';
import classes from './Home.module.scss';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,

            showModal: true,

        }
        this.handleModalClose = this.handleModalClose.bind(this);
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

    handleModalClose() {
        this.setState({ showModal: false })
    }

    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 1500);
    }



    render() {
        return (
            this.state.loading ? <Loader />
                : <React.Fragment>
                    {this.state.showModal ? <GenresModal handleModalClose={this.handleModalClose} /> : ''}
                    <div className={classes.Wrapper}>
                        <div className={classes.List}><BookList /></div>
                        <div className={classes.Aside}><Aside /></div>
                    </div>
                    <Footer />
                </React.Fragment>
        );
    }
}

export default HomeComponent;
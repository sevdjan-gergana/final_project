import React from 'react';
import Footer from '../../../Footer/Footer';
import BookList from '../../../BookList/BookList';
import classes from '../Home/Home.module.scss';
class HomeComponent extends React.Component {

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

    render() {

        return (
            <React.Fragment>
            

                <BookList />
               
                <Footer />
            </React.Fragment>
        );
    }
}

export default HomeComponent;
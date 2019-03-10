import React from 'react';
import Footer from '../../../Footer/Footer';
import BookList from '../../../BookList/BookList';
import Aside from '../../../HomeAside/AsideComponent.js';
import classes from './MyBooks.module.scss';
import Loader from '../../../Loader/LoaderComponent.js';


class MyBooksComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,

            showModal: true,

        }
        this.handleModalClose = this.handleModalClose.bind(this);
    }
    
    handleModalClose() {
        this.setState({ showModal: false })
    }

    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 1000);
    }

    render() {
        return (
            this.state.loading ? <Loader />
            : <React.Fragment>
                <div className={classes.Wrapper}>
                    <div className={classes.List}><BookList /></div>
                    <div className={classes.Aside}><Aside /></div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default MyBooksComponent;
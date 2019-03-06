import React from 'react';
import Footer from '../../../Footer/Footer';
import classes from './Profile.module.scss';
import userLogo from '../../../assets/images/user.png';

class ProfileComponent extends React.Component {
    // state = {
    //     myBooks: localStorage.mybooks
    // }

    // addme = () => {
    //     localStorage.myBooks = 'sada'
    //     this.setState({ myBooks: 'asdasd' })
    // }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            shelves: [],
        };
    }

    componentDidMount() {
        const user = JSON.parse(window.sessionStorage.getItem("user"));
        console.log(user);
        const { username, shelves } = user;
        this.setState({ username , shelves });
    }

    render() {
        return (
            <React.Fragment>
                <div className={classes.Wrapper}>
                    <div><img className={classes.userLogo} src={userLogo} alt="userLogo"></img></div>
                    <div>
                        <h2>{this.state.username}</h2>
                        <hr />
                        <p>info</p>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
            // <button>Add me</button>
            // <BookListComponent type='will' books={this.state.myBooks} />
        );
    }
}

export default ProfileComponent;
import React from 'react';
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

    render() {
        return (
            <div className={classes.Wrapper}>
                <div><img className={classes.userLogo} src={userLogo} alt="userLogo"></img></div>
                <div>
                    <h2>Username</h2>
                    <hr/>
                    <p>info</p>
                </div>
            </div>
            // <button>Add me</button>
            // <BookListComponent type='will' books={this.state.myBooks} />
        );
    }
}

export default ProfileComponent;
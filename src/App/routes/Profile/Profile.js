import React from 'react';
import Footer from '../../../Footer/Footer';
import classes from './Profile.module.scss';
import userLogo from '../../../assets/images/user.png';

class ProfileComponent extends React.Component {
    // addme = () => {
    //     localStorage.myBooks = 'sada'
    //     this.setState({ myBooks: 'asdasd' })
    // }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            shelves: {},
        };
    }

    componentDidMount() {
        const user = JSON.parse(window.sessionStorage.getItem("user"));
        const { username, shelves } = user;
        this.setState({ username, shelves });
        // console.log(user);
        // console.log(shelves);
    }

    render() {
        return (
            <React.Fragment>
                <div className={classes.Wrapper}>
                    <div><img className={classes.userLogo} src={userLogo} alt="userLogo"></img></div>
                    <div className={classes.UserInfo}>
                        <h2>{this.state.username}</h2>
                        <hr />
                        <p>{this.state.username}'s bookshelves</p>
                        <ul>
                            <li>read‎: ({this.state.shelves.read ?  this.state.shelves.read.length : ""})</li>
                            <li>currently-reading‎: ({this.state.shelves.reading ?  this.state.shelves.reading.length : ""})</li>
                            <li>want to read: ({this.state.shelves.will ?  this.state.shelves.will.length : ""})</li> 
                        </ul>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ProfileComponent;
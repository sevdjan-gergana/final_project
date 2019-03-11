import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import profileLogo from '../assets/images/user.png';
import logout from '../assets/images/logout.png';
import Button from '../UI/Button/Button.js';
import classes from './Header.module.scss';


class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toHome: false,
        };
        this.logout = this.logout.bind(this);
    }

    logout() {
        window.sessionStorage.clear();
        this.setState({ toHome: true });
    }

    render() {
        if (this.state.toHome) {
            window.location.reload();
        }

        return (
            <header className={classes.Header}>
                <div className={classes.Wrapper}>
                    <NavLink to='/'><div><img className={classes.Logo} src={logo} width="100px" alt="logo" /></div></NavLink>
                    <div className={classes.NavButtons}>
                        <NavLink to='/'><Button title="Home" /> </NavLink>
                        <NavLink to='/myBooks'> <Button title="My Books" /></NavLink>
                        <NavLink to='/search'> <Button title="Search" /></NavLink>
                    </div>
                    <div className={classes.ProfileButtons}>
                        <NavLink to='/profile' ><div className={classes.Profile}><img className={classes.User} src={profileLogo} alt="profile" /></div></NavLink>
                        <div className={classes.LogoutButton} onClick={this.logout}><img className={classes.Logout} src={logout} alt="logout" /></div>
                    </div>
                </div>
            </header >
        );
    }
}

export default HeaderComponent;

import React from 'react';
import logo from '../assets/images/logo.png';
import classes from './Header.module.scss';
import Button from '../UI/Button/Button.js';

class LoginComponent extends React.Component {

    render() {
        return (
            <header className={classes.Header}>
                <div><img className={classes.Logo} src={logo} width="100px" alt="logo" /></div>
                <div className={classes.Login}>
                    <input type="email" placeholder="Email address" />
                    <input type="password" placeholder="Password" />
                    <Button title="Sign in"></Button>
                </div>
            </header>
        );
    }
}

export default LoginComponent; 
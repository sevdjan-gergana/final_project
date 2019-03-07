import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import classes from '../Login-Register/Login.module.scss';
import Authenticate from './authenticate';
import Button from '../UI/Button/Button.js';
import Input from '../UI/Input/Input.js';



class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            toNav: false,
            validationError: false,
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.login = this.login.bind(this);
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        
        this.setState({ [name]: value });
    }

    login(e) {
        e.preventDefault();
        const { username, password } = this.state;
        const userInfo = JSON.parse(window.localStorage.getItem(username));
        if (userInfo) {
            if (userInfo.password === password) {
                window.sessionStorage.setItem("user", window.localStorage.getItem(username));
                this.setState({ toNav: true });
            } else {
                this.state.validationError=true;
                console.log("Wrong username or password!");
            }
        } else {
            this.state.validationError=true;
            console.log("No such registered user");
        }
    }

    render() {
        if (this.state.toNav) {
            window.location.reload();
        }
        return (

            <React.Fragment>
                <div className={classes.Container}>
                    <div className={classes.Header}>
                        <img className={classes.Logo} src={logo} alt="logo" />

                        <div className={classes.Login}>
                            <form onSubmit={this.login}>
                                <Input type="text" placeholder="Username" name="username" onChange={this.handleUserInput} />
                                <Input type="password" placeholder="Password" name="password" onChange={this.handleUserInput} />
                                <Button title="Sign in"></Button>
                                <NavLink to='/'><p>Create a New Account</p> </NavLink>
                            </form>
                        </div>
                    </div>
                </div>

                <Authenticate />
            </React.Fragment>

        );
    }
}

export default HeaderComponent;

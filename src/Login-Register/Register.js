import React from 'react';
import { Redirect } from 'react-router-dom'
import Button from '../UI/Button/Button.js';
import Input from '../UI/Input/Input.js';
import classes from './Register.module.scss';

class RegisterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            userError: false,
            passError: false,
            emailError: false,
            validationError: false,
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.register = this.register.bind(this);
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        let validationError = '';
        switch (name) {
            case 'username': {
                validationError = validateUserName(value);
                this.setState({ [name]: value, userError: validationError });
                break;
            }
            case 'password': {
                validationError = validatePassword(value);
                this.setState({ [name]: value, passError: validationError });
                break;
            }
            case 'email': {
                validationError = validateEmail(value);
                this.setState({ [name]: value, emailError: validationError });
                break;
            }
            default:
                validationError = '';
        }
        this.setState({ validationError });
    }

    register(e) {
        e.preventDefault();
        if (!this.state.validationError) {
            const { username, password, email } = this.state;
            let userinfo = JSON.stringify({
                username, password, email,
                shelves: { "read": [], "reading": [], "will": [] }
            });
            window.localStorage.setItem(username, userinfo);
            window.sessionStorage.setItem("user", window.localStorage.getItem(username));

            window.location.reload(); //after register redirects to home page with nav
        }
    }

    render() {
        function errStyle(hasError) {
            if (hasError) {
                return { display: 'inline-block',margin: '0px 10px', color: 'red', fontSize: '0.8em' }
            } else {
                return { visibility: 'hidden' }
            }
        }
        return (
            <div className={classes.Register}>
                <p className={classes.regP}>
                    New here? Create a free account!
                </p>
                <form onSubmit={this.register}>
                    <Input type="text" placeholder="Name" name="username"
                        onChange={this.handleUserInput}
                        style={fieldColor(this.state.userError)} />
                    <Input type="email" placeholder="Email address" name="email"
                        onChange={this.handleUserInput}
                        style={fieldColor(this.state.emailError)} />
                    <Input type="password" placeholder="Password" name="password"
                        onChange={this.handleUserInput}
                        style={fieldColor(this.state.passError)} />

                    <Button type="submit" className={classes.ButtonY} title="Sign up" width='100px'></Button>
                    <p style={errStyle(this.state.validationError)}>Pleace enter valid information!</p>
                </form>
            </div>
        );
    }
}

export default RegisterComponent;

function validateUserName(name) {
    return name && !/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){4,12}[a-zA-Z0-9]$/i.test(name);
}

function validatePassword(pass) {
    return pass && !/^(?=.*\d)(?=.*[a-z])[a-z0-9]{5,15}$/.test(pass);
}

function validateEmail(email) {
    return email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}

function fieldColor(hasError) {
    if (hasError) {
        return { borderColor: 'red' }
    }
}
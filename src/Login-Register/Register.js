import React from 'react';
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
                // validationError = validateUserName(value);
                this.setState({ [name]: value, userError: validationError });
                break;
            }
            case 'password': {
                // validationError = validatePassword(value);
                this.setState({ [name]: value, passError: validationError });
                break;
            }
            case 'email': {
                // validationError = validateEmail(value);
                this.setState({ [name]: value, emailError: validationError });
                break;
            }
            default:
                validationError = '';
        }
    }

    register(e) {
        e.preventDefault();
        const { username, password, email } = this.state;
        let userinfo = JSON.stringify({ username, password, email, 
                                        shelves: { "read": [1,2], "reading": [3], "will": [4,5] } });
        window.localStorage.setItem(username, userinfo);

    }

    render() {
        return (
            <div className={classes.Register}>
                <p className={classes.regP}>
                    New here? Create a free account!
                </p>
                <form onSubmit={this.register}>
                    <Input type="text" placeholder="Name" name="username" onChange={this.handleUserInput} />
                    <Input type="email" placeholder="Email address" name="email" onChange={this.handleUserInput} />
                    <Input type="password" placeholder="Password" name="password" onChange={this.handleUserInput} />

                    <Button className={classes.ButtonY} title="Sign up" width='100px'></Button>
                </form>
            </div>
        );
    }
}

export default RegisterComponent;

// function validateUserName(name) {
//     return name && !/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/i.test(name);
// }

// function validatePassword(pass) {
//     return pass && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(pass);
// }

// function validateEmail(email) {
//     return email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
// }

// function fieldColor(hasError){
//     if(hasError){
//         return {borderColor:'red'}
//     }
// }
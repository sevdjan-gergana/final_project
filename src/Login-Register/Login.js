import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import classes from '../Login-Register/Login.module.scss';
import Button from '../UI/Button/Button.js';
import Input from '../UI/Input/Input.js';


class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            toNav: false,
            validationError: false,
            style: {},
            showModal: true
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.login = this.login.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        // this.errStyle = this.errStyle.bind(this);
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
                window.sessionStorage.setItem("user", username);
                this.setState({ toNav: true });
            } else {
                this.setState({ validationError: true });
            }
        } else {
            this.setState({ validationError: true });
        }
        if (this.state.validationError) {
            console.log("Wrong username or password!"); //add styling to error
        }
    }

    handleModalClose() {
        this.setState({ showModal: false })
    }

    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 1500);
    }


    render() {
        if (this.state.toNav) {
            window.location.reload();
        }

        return (
            <React.Fragment>
                <div className={classes.Container}>
                    <div className={classes.Header}>
                        <NavLink to='/'><img className={classes.Logo} src={logo} alt="logo" /> </NavLink>
                        <div className={classes.Login}>
                            <form onSubmit={this.login}>
                                <Input type="text" placeholder="Username" name="username" onChange={this.handleUserInput} />
                                <Input type="password" placeholder="Password" name="password" onChange={this.handleUserInput} />
                                <Button title="Sign in"></Button>
                                <div className={classes.Ps}>
                                    <p style={errStyle(this.state.validationError)}>Wrong username or password!</p>
                                    <NavLink to='/'><p>Create a New Account</p> </NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default LoginComponent;

function errStyle(hasError) {
    let style = {};
    if (hasError) {
        style = {
            display: 'inline',
            fontSize: '0.4em',
            color: 'red',
            margin: '0px 5px',
            position: 'relative',
            top: '-15px'
        }
    } else {
        style = {
            visibility: 'hidden',
            display: 'inline',
            fontSize: '0.4em',
            color: 'red',
            margin: '0px 5px',
            position: 'relative',
            top: '-15px'
        }
    }
    return style;
}
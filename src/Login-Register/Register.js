import React from 'react';
import Button from '../UI/Button/Button.js';
import Input from '../UI/Input/Input.js';
import classes from './Register.module.scss';

class RegisterComponent extends React.Component {

    render() {
        return (
            <div className={classes.Register}>
                <p className={classes.regP}>
                    New here? Create a free account!
                </p>
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email address" />
                <Input type="password" placeholder="Password" />

                <Button className={classes.ButtonY} title="Sign up" width='100px'></Button>
            </div>
        );
    }
}

export default RegisterComponent;

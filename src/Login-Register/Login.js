import React from 'react';
import logo from '../assets/images/logo.png';
import classes from './Login.module.scss';
import Button from '../UI/Button/Button.js';
import Input from '../UI/Input/Input.js';
import background from '../assets/images/background-book.jpg';
import backgroundWords from '../assets/images/title.png';
import Register from './Register';



class HeaderComponent extends React.Component {

    render() {
        return (
            <div>
                <div className={classes.Header}>
                    <img className={classes.Logo} src={logo} alt="logo" />

                    <div className={classes.Login}>
                        <Input type="email" placeholder="Email address" />
                        <Input type="password" placeholder="Password" />
                        <Button title="Sign in"></Button>
                    </div>
                </div>

                < div >
                    <div >
                        <img className={classes.backgroundWords} src={backgroundWords} alt='Meet your next favourite book'>
                        </img>
                        <Register />
                    </div>
                    <img className={classes.background} src={background} height='500px' alt="logo" />
                </div>
               
            </div>

        );
    }
}

export default HeaderComponent;

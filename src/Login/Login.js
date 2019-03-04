import React from 'react';
import logo from '../assets/images/logo.png';
import classes from './Header.module.scss';
import Button from '../UI/Button/Button.js';
import background from '../assets/images/background-book.jpg';
import backgroundWords from '../assets/images/title.png';
import Footer from '../assets/Footer/Footer';





class LoginComponent extends React.Component {

    render() {
        return (
           <React.Fragment>
            <header>
                <div className={classes.Header}>
                <img className={classes.Logo} src={logo} alt="logo" />
                
                <div className={classes.Login}>
                    <input type="email" placeholder="Email address" />
                    <input type="password" placeholder="Password" />
                    <Button title="Sign in"></Button>
                </div>
                </div>
                </header>

              <Footer/>
              
                </React.Fragment>
           
            
           
            
        );
    }
}

export default LoginComponent; 
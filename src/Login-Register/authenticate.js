import React from 'react';
import classes from './authenticate.module.scss';
import background from '../assets/images/background-book.jpg';
import backgroundWords from '../assets/images/title.png';
import Register from './Register';

export default class AuthenticateComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                < div >
                    <div >
                        <img className={classes.backgroundWords} src={backgroundWords} alt='Meet your next favourite book'>
                        </img>
                        <Register />
                    </div>
                    <img className={classes.background} src={background} height='500px' alt="logo" />
                </div>
            </React.Fragment>
        );
    }
}


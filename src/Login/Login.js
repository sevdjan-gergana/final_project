import React from 'react';
import logo from '../assets/images/logo.png';
import classes from './Header.module.scss';
import Button from '../UI/Button/Button.js';
import background from '../assets/images/background-book.jpg';
import backgroundWords from '../assets/images/title.png';
import Footer from '../Footer/Footer';



class HeaderComponent extends React.Component {

    render() {
        const myStyle={backgroundColor: 'rgb(255, 213, 109)',width:'90px',fontSize:'1em',border:'none', height:'40px', color: '#382110'};
        return (
            <header>
                <div className={classes.Header}>
                <img className={classes.Logo} src={logo} alt="logo" />
                
                <div className={classes.Login}>
                    <input type="email" placeholder="Email address" />
                    <input type="password" placeholder="Password" />
                    <Button title="Sign in"></Button>
                    </div>
                    
                    
                </div>
                < div >
                <div >
                    <img className={classes.backgroundWords} src={backgroundWords} alt='Meet your next favourite book'>
                    </img>
                    <div className={classes.Register}>
                    <p className={classes.regP}>
                    New here? Create a free account!
                    </p>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email address" />
                    <input type="password" placeholder="Password" />
                   
                    <Button style={myStyle} title="Sign up" width='100px'></Button>
                    </div>
                </div>
                <img className={classes.background} src={background}  height='500px' alt="logo" />
                </div>
                <Footer/>
                </header>

            
        );
    }
}

export default HeaderComponent;
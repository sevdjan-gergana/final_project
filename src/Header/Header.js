import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../assets/images/logo.png';
import classes from './Header.module.scss';
import profileLogo from '../assets/images/user.png';
import Button from '../UI/Button/Button.js';
import BookList from '../BookList/BookList';
import SearchArea from '../UI/SearchArea/SearchArea';



class HeaderComponent extends React.Component {

    render() {
        return (
            <header className={classes.Header}>
                <div className={classes.Wrapper}>
                    <div><img className={classes.Logo} src={logo} width="100px" alt="logo" /></div>
                    <div className={classes.NavButtons}>
                        <NavLink to ='/'><Button title="Home" /> </NavLink>
                        
                        <NavLink to ='/book/:id'> <Button title="My Books" /></NavLink>
                    </div>
                    <div className={classes.Search}>
                   {/* <input type='text' placeholder='Enter type of book'></input>
                        <Button title="Search" /> */}
                        <SearchArea handleSearch={this.handleSearch}/>
                    </div>
                    <NavLink to='/profile' ><div className={classes.Profile}><img className={classes.User} src={profileLogo} alt="profile" /></div></NavLink>
               
                </div>
            </header >
        );
    }
}

export default HeaderComponent;

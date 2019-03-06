import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import profileLogo from '../assets/images/user.png';
import logout from '../assets/images/logout.png';
import Button from '../UI/Button/Button.js';
import BookList from '../BookList/BookList';
import SearchArea from '../UI/SearchArea/SearchArea';
import classes from './Header.module.scss';


class HeaderComponent extends React.Component {
    state = {
        toHome: false,
    }

    logout() {
        window.sessionStorage.clear();
        this.setState({ toHome: true });
    }

    render() {
        if (this.state.toHome === true) {
            return <Redirect to='/profile' />
        }

        return (
            <header className={classes.Header}>
                <div className={classes.Wrapper}>
                    <NavLink to='/'><div><img className={classes.Logo} src={logo} width="100px" alt="logo" /></div></NavLink>
                    <div className={classes.NavButtons}>
                        <NavLink to='/'><Button title="Home" /> </NavLink>
                        <NavLink to='/book/:id'> <Button className={classes.Buttons} title="My Books" /></NavLink>
                    </div>
                    <div className={classes.Search}>
                   {/* <input type='text' placeholder='Enter type of book'></input>
                        <Button title="Search" /> */}
                        <SearchArea handleSearch={this.handleSearch}/>
                    </div>
                    <NavLink to='/profile' ><div className={classes.Profile}><img className={classes.User} src={profileLogo} alt="profile" /></div></NavLink>
                    <NavLink to='/' ><div className={classes.LogoutButton} onClick={this.logout}><img className={classes.Logout} src={logout} alt="logout" /></div></NavLink>
                </div>
            </header >
        );
    }
}

export default HeaderComponent;

import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, withRouter } from 'react-router-dom';
import './App.css';
import HeaderComponent from '../Header/Header';
import LoginComponent from '../Login-Register/Login';
import HomeComponent from './routes/Home/Home';
import BookDetailsComponent from './routes/Book/Book';
import ProfileComponent from './routes/Profile/Profile';

class App extends Component {

  render() {
    const isLogged = sessionStorage.getItem('user') !== null;

    const profileRoute = !isLogged ?
      <Route path='/profile' render={() => (<Redirect to='/' />)} />
      :
      <Route path='/profile' component={withRouter(ProfileComponent)} />;

    return (
      <div>
     
        <BrowserRouter>
          <div>
          {isLogged ? <HeaderComponent/> : <LoginComponent onLogin={this.login} />}
            <Route exact path={`/`} component={withRouter(HomeComponent)} />
            <Route path={`/book/:id`} component={withRouter(BookDetailsComponent)} />
            {profileRoute}
          </div>
        </BrowserRouter>
      </div>
      
    );
  }
}

export default App;

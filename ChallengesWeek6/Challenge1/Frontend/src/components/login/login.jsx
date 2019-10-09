import React, { Component } from 'react';

import './login.scss';

import SearchComponent from '../searchComponent/searchComponent';

class Login extends Component {
    state = {  }
    render() { 
        return (
            <div className="full-container">
                <div className="container">
                    <h1 className="login-title">Jobsity Login</h1>
                    <div className="input">
                        <SearchComponent type="password" placeholder="Username..." iconClasses="fas fa-user-circle"/>
                    </div>
                    <div input="input">
                        <SearchComponent type="password" placeholder="Username..." iconClasses="fas fa-lock"/>
                    </div>
                    <button className="button" submit="submit" value="Login">Login</button>
                </div>
            </div>
         );
    }
}
 

/**
 * <label htmlFor="password"></label>
    <input id="password" type="password" placeholder="password..."/>
 * 
    <label htmlFor="username"></label>
    <input id="username" type="text"/>
 */
export default Login;
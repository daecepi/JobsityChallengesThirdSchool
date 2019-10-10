import React, { Component } from 'react';

import './login.scss';

import SearchComponent from '../searchComponent/searchComponent';

class Login extends Component {
    state = { 
        username: undefined,
        password: undefined,
        message: "asdlas"
     }

    authenticate = async ( )=> {
        alert('You shouldnt0');
        let authResult = await fetch('localhost:5000/login',);
    }

    render() {
        return (
            <div className="full-container">
                <div className="container">
                    <h1 className="login-title">Jobsity Login</h1>
                    <div className="input">
                        <SearchComponent id="" type="text" placeholder="Username..." iconClasses="fas fa-user-circle"/>
                    </div>
                    <div className="input">
                        <SearchComponent type="password" placeholder="Username..." iconClasses="fas fa-lock"/>
                    </div>
                    <button onClick={this.authenticate} className="button" value="Login">Login</button>
                    {this.state.message ? <span className="messages">{this.state.message}</span> : ""}
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
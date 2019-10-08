import React, { Component } from 'react';

import 'login.css';

class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <h1>Jobsity Login</h1>
                <div>
                    <label htmlFor="username"></label>
                    <input id="username" type="text"/>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input id="password" type="password" placeholder="password..."/>
                </div>
                <button submit="submit" value="Login" />
            </div>
         );
    }
}
 
export default Login;
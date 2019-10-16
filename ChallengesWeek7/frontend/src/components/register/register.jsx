import React, { Component } from 'react';

import SearchComponent from "../searchComponent/searchComponent";

/**
 * CLASS STILL TO BE IMPLEMENTED
 */

class Register extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="full-container">
                <div className="container">
                    <h2>Register</h2>
                    <form onSubmit={undefined}>
                    <div className="input">
                        <SearchComponent type="text" placeholder="Username..." iconClasses="fas fa-user-circle" onchange={this.updateUsername} />
                    </div>
                    <div className="input">
                        <SearchComponent type="text" placeholder="Username..." iconClasses="fas fa-user-circle" onchange={this.updateUsername} />
                    </div>
                    <div className="input">
                        <SearchComponent type="text" placeholder="Username..." iconClasses="fas fa-user-circle" onchange={this.updateUsername} />
                    </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default Register;


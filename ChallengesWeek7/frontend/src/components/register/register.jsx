import React, { Component } from 'react';

//Styling imports
import './register.scss';


//Components used
import SearchComponent from "../searchComponent/searchComponent";


class Register extends Component {
    state = {  }

    /**
     * Function that will handle the submit
     * @param event : contains the submit event object
     */
    handleSubmit= async (event) => {
        event.preventDefault();

    }

    render() { 
        return ( 
            <div className="full-container">
                <div className="container-register">
                    <h2>Register</h2>
                    <form className="" onSubmit={this.handleSubmit}>
                        <div className="input">
                            <SearchComponent type="text" placeholder="Identification..." iconClasses="fas fa-address-card" onChange={this.updateUsername} />
                        </div>
                        <div className="input">
                            <SearchComponent type="text" placeholder="First name..." iconClasses="fas fa-user" onChange={this.updateUsername} />
                        </div>
                        <div className="input">
                            <SearchComponent type="text" placeholder="Last name..." iconClasses="fas fa-user" onChange={this.updateUsername} />
                        </div>
                        <div className="input">
                            <SearchComponent type="text" placeholder="Username..." iconClasses="fas fa-user-circle" onChange={this.updateUsername} />
                        </div>
                        <div className="input">
                            <SearchComponent type="password" placeholder="Password..." iconClasses="fas fa-lock" onChange={this.updateUsername} />
                        </div>
                        <div className="input">
                            <SearchComponent type="text" placeholder="Age..." iconClasses="fas fa-clock" onChange={this.updateUsername} />
                        </div>
                        <div className="input">
                            <SearchComponent spacing="" type="text" placeholder="Email..." iconClasses="fas fa-at" onChange={this.updateUsername} />
                        </div>
                        <input className="button" type="submit" value="Register"/>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default Register;


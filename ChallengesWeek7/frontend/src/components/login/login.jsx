import React, { Component } from 'react';

//Styles
import './login.scss';

//Components used
import SearchComponent from '../searchComponent/searchComponent';



class Login extends Component {
    /**
     * If login will require more than two
     */
    state = {
        username: undefined,
        password: undefined,
        message: undefined,
        message_style: "messages messages-error"
    }

    authenticate = async (e) => {
        e.preventDefault() //Prevent default user

        //Taking out the necessary information from the states object
        const {username, password} = this.state;

        //Verifing that the use has input before trying the log in
        if(username === undefined || password === undefined){
            this.setState({message: "Primero ingresa credenciales de acceso"});
        }else{
            //Get the data for the request into a variable
            const authData = {username, password};

            //Build the form-urlencoded version of it
            let formBody = [];
            for (let property in authData) {
                let encodedKey = encodeURIComponent(property);
                let encodedValue = encodeURIComponent(authData[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");

            let authResult = await fetch('http://localhost:5000/login',{
                method: "POST",
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formBody,
            }).then(res => res.json());
            if(authResult.error){
                this.setState({message: authResult.error});
                return;
            }else{
                this.setState({message: "Success", message_style: "messages messages-success"})
                localStorage.setItem("access_token", authResult['access_token']);

                console.log("entre");

                this.props.handleLogin();
            }
        }
    }

    //Methods to update the usercredentials
    handleUsernameChange = (username) => {
        this.setState({username});
    }

    handlePasswordChange = (password) => {
        this.setState({password});
    }

    render() {
        console.log(this.props.test);
        const {username, password, message, message_style} = this.state;
        return (
            <div className="full-container">
                <div className="container-login">
                    <h1 className="login-title">Bookshelf Login</h1>
                    <div className="input">
                        <SearchComponent type="text" placeholder="Username..." iconClasses="fas fa-user-circle" value={username} onchange={this.handleUsernameChange} />
                    </div>
                    <div className="input">
                        <SearchComponent type="password" placeholder="Password..." iconClasses="fas fa-lock" value={password} onchange={this.handlePasswordChange} />
                    </div>
                    <input type="submit" onSubmit={this.authenticate} className="button" value="Login" />
                    {message ? <span className={message_style}>{message}</span> : ""}
                </div>
            </div>
         );
    }
}

export default Login;
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
        username: "sofi",
        password: "sofi123123",
        message: undefined
    }


    componentDidMount(){
        //const  token = localStorage.getValue("token");
        /*if (token) {
            
        }*/
    }

    authenticate = async () => {
        //Taking out the necessary information from the states object
        const {username, password} = this.state;

        //Verifing that the use has input before trying the log in
        if(username === undefined || password === undefined){
            this.setState({message: "Primero ingresa crdenciales de acceso"});
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
            }
        }
    }

    //Methods to update the usercredentials
    updateUsername = (username) => {
        this.setState({username});
    }

    updatePassword = (password) => {
        this.setState({password});
    }

    render() {
        return (
            <div className="full-container">
                <div className="container">
                    <h1 className="login-title">Jobsity Login</h1>
                    <div className="input">
                        <SearchComponent type="text" placeholder="Username..." iconClasses="fas fa-user-circle" onchange={this.updateUsername} />
                    </div>
                    <div className="input">
                        <SearchComponent type="password" placeholder="Password..." iconClasses="fas fa-lock"  onchange={this.updatePassword} />
                    </div>
                    <button onClick={this.authenticate} className="button" value="Login">Login</button>
                    {this.state.message ? <span className="messages">{this.state.message}</span> : ""}
                </div>
            </div>
         );
    }
}

export default Login;
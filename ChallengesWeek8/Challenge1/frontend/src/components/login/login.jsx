import React, { Component } from "react";

import styled from 'styled-components';

import { Link } from "react-router-dom";

//Styles
import "./login.scss";

//External components used
import NotificationAlert from 'react-notification-alert';
import "react-notification-alert/dist/animate.css";


//Internal components used
import SearchComponent from "../searchComponent/searchComponent";
import NotificationComponent from "../Notification/notification";


//styled component with syled components
const FullDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../../images/LoginImage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const ContainerLogin = styled.div`
  background: $secondary-white;
  box-shadow: 2px 10px 20px 0px black;
  height: 40%;
  width: 25%;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
`;

const LoginTitle = styled.h1`
  justify-self: center;
  align-self: center;
  flex-grow: 5;
  justify-content: center;
`;

const InputContainer = styled.div`
  width: 90%;
`;

const ButtonSubmit = styled.button`
  display: block;
  border-radius: 20px;
  width: 90%;
  flex-grow: 1;
  margin-top: 2%;
  margin: 8px 0;
`;



class Login extends Component {
  /**
   * If login will require more than two
   */
  state = {
    username: undefined,
    password: undefined,
    message: undefined,
    message_style: "messages messages-error"
  };


  displayNotification = (message) =>{
    this.refs.notificationAlert.notificationAlert({
      place: 'br',
      message: (
        "asda"
        ),
      type: 'danger',
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 2,
      closeButton: false
    });
  }

  authenticate = async (e) => {
    e.preventDefault(); //Prevent default user

    //Taking out the necessary information from the states object
    const { username, password } = this.state;

    //Verifing that the use has input before trying the log in
    if (username === undefined || password === undefined) {
      this.displayNotification("Primero ingresa credenciales de acceso");
      this.setState({ message: "Primero ingresa credenciales de acceso" });
    } else {
      //Get the data for the request into a variable
      const authData = { username, password };

      //Build the form-urlencoded version of it
      let formBody = [];
      for (let property in authData) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(authData[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

      let authResult = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formBody
      }).then((res) => res.json());
      if (authResult.error) {
        this.setState({ message: authResult.error });
        this.displayNotification(authResult.error);
        return;
      } else if(authResult.access_token){
        this.displayNotification("Success");
        localStorage.setItem("access_token", authResult["access_token"]);
        localStorage.setItem("userInfo", authResult["user"]);

        await this.props.handleLogin();
      }
    }
  };

  //Methods to update the usercredentials
  handleUsernameChange = (username) => {
    this.setState({ username });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  render() {
    const { username, password, message, message_style } = this.state;
    return (
      <FullDiv >
        <ContainerLogin>
          <form onSubmit={this.authenticate}>
            <LoginTitle>Bookshelf Login</LoginTitle>
            <InputContainer>
              <SearchComponent
                type="text"
                placeholder="Username..."
                iconClasses="fas fa-user-circle"
                value={username}
                onChange={this.handleUsernameChange}
              />
            </InputContainer>
            <InputContainer>
              <SearchComponent
                type="password"
                placeholder="Password..."
                iconClasses="fas fa-lock"
                value={password}
                onChange={this.handlePasswordChange}
              />
            </InputContainer>
            <ButtonSubmit type="submit" className="button-submit" value="Login" />
            {message ? <span className={message_style}>{message}</span> : ""}
          </form>
        </ContainerLogin>
        <NotificationAlert ref="notificationAlert" />
        <Link to="/register">
          <button className="move-button">Register</button>
        </Link>
      </FullDiv>
    );
  }
}

export default Login;

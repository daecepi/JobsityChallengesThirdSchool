import React, { Component } from "react";

import { connect } from "react-redux";

import { Link, withRouter } from "react-router-dom";

import { loginUser } from "../../actions/userActionCreator";


//External components used
import NotificationAlert from "react-notification-alert";
import "react-notification-alert/dist/animate.css";

//Components used
import SearchComponent from "../searchComponent/searchComponent";

//STYLING
import styled from 'styled-components';
import { FullContainer, MoveButton } from '../../styles';
import { secondaryWhite, primaryError } from "../../styles/colors";

const LoginContainer = styled.div`
  background: ${secondaryWhite.rgb};
  box-shadow: 2px 10px 20px 0px black;
  height: 40%;
  width: 25%;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;

  
  @media(max-width: 580px){
      padding-top: 1rem;
      justify-content: flex-start;
      width: 50vw;
  }
`; 

const LoginTitle = styled.h1`
  justify-self: center;
  align-self: center;
  flex-grow: 5;
  justify-content: center;
  padding-bottom: black;
`; 

const InputContainer = styled.div`
  width: 90%;
`;

const SubmitButton = styled.input`
  display: block;
  border-radius: 20px;
  width: 90%;
  flex-grow: 1;
  margin-top: 2%;
  margin: 8px 0;
`;

const MessageSpan = styled.span`
  font-size: 0.7rem;
  color: ${primaryError.rgb};
`;

class Login extends Component {
  state = {
    username: undefined,
    password: undefined,
    message: undefined,
    message_style: "messages messages-error"
  };

  displayNotification = (message) => {
    this.refs.notificationAlert.notificationAlert({
      place: "br",
      message: <div className="notification-container">{message}</div>,
      type: "danger",
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 2,
      closeButton: false
    });
  };

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

      const url = this.props.baseEndpoint+"/login";

      let authResult = await fetch( url , {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formBody
      }).then((res) => res.json());

      if (authResult.statusCode === 404) {
        this.setState({ message: authResult.message });
        this.displayNotification(authResult.message);
      } else if (authResult.access_token) {
        this.displayNotification("Success"); // Showing success message to the user

        //Saving user info for further needs
        localStorage.setItem("access_token", authResult["access_token"]);
        localStorage.setItem("user", JSON.stringify(authResult["user"]));

        //Login user
        this.props.loginUser(authResult["user"]);
        
        this.props.history.push("/"); //Going to the homepage after login
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
    const { username, password, message } = this.state;
    return (
      <FullContainer>
        <LoginContainer>
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
            <SubmitButton type="submit" value="Login" />
            {message ? <MessageSpan>{message}</MessageSpan> : ""}
          </form>
        </LoginContainer>
        <NotificationAlert ref="notificationAlert" />
        <Link to="/register">
          <MoveButton>Register</MoveButton>
        </Link>
      </FullContainer>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    baseEndpoint: state.books.baseEndpoint
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => {
      dispatch(loginUser(user));
    }
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(withRouter(Login));

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link, withRouter } from "react-router-dom";

import { loginUser } from "../../actions/userActionCreator";


//External components used
import NotificationAlert from "react-notification-alert";
import "react-notification-alert/dist/animate.css";

//Components used
import SearchComponent from "../searchComponent/searchComponent";

import { FullContainer, MoveButton } from '../../styles';
import { 
  LoginContainer,
  LoginTitle,
  InputContainer,
  SubmitButton,
  MessageSpan
 } from './loginInternals';

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

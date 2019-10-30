import React, { Component } from "react";

import { connect } from "react-redux";

import { Link, withRouter } from "react-router-dom";

import { loginUser } from "../../actions/userActionCreator";

//Styles
import "./login.scss";

//External components used
import NotificationAlert from "react-notification-alert";
import "react-notification-alert/dist/animate.css";

//Components used
import SearchComponent from "../searchComponent/searchComponent";

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

      let authResult = await fetch("http://localhost:5000/api/login", {
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
        localStorage.setItem("user", authResult["user"]);

        //Login user
        this.props.loginUser(authData["user"]);
        
        this.props.history.push("/"); //Going to the homepage after login
        this.displayNotification(authResult.message);
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
      <div className="full-container">
        <div className="container-login">
          <form onSubmit={this.authenticate}>
            <h1 className="login-title">Bookshelf Login</h1>
            <div className="input">
              <SearchComponent
                type="text"
                placeholder="Username..."
                iconClasses="fas fa-user-circle"
                value={username}
                onChange={this.handleUsernameChange}
              />
            </div>
            <div className="input">
              <SearchComponent
                type="password"
                placeholder="Password..."
                iconClasses="fas fa-lock"
                value={password}
                onChange={this.handlePasswordChange}
              />
            </div>
            <input type="submit" className="button-submit" value="Login" />
            {message ? <span className={message_style}>{message}</span> : ""}
          </form>
        </div>
        <NotificationAlert ref="notificationAlert" />
        <Link to="/register">
          <button className="move-button">Register</button>
        </Link>
      </div>
    );
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
  null,
  mapDispatchToProps
)(withRouter(Login));

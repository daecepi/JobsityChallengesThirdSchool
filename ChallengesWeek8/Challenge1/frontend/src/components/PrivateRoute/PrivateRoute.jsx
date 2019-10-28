import React, { Component } from "react";

import { connect } from "react-redux";

import { Route, Redirect, withRouter } from "react-router-dom";

//Actions used
import { loginUser, markUseRecovery } from "../../actions/actionCreator";
import CheckingStorageComponent from "../checkingStorage/checkingStorage";

class PrivateRouteComponent extends Component {
  /**
   * Function that looks if a user is loggedIn
   */
  validateLogin = async () => {
    //returning if state for user logged has been set to true or startup verification has been done
    if (this.props.userIsLogged === true || this.props.userRecoveryTried === true) return;

    //Marking that user recovery is going to be tried
    this.props.markUseRecovery();

    //Verifing that a token exist
    const token = localStorage.getItem("access_token");
    if (!token) {
      return false;
    }

    //Fetching an endpoint to verify the token
    let authValidation = await fetch("http://localhost:5000/api/users/validateLogin", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    }).then((res) => res.json());

    //Verifing if the token expired
    if (!authValidation.state || !(authValidation.state === "success")) {
      return false;
    }

    //Loading the user since token is still valid
    const user = localStorage.getItem("user");
    this.props.loginUser(user);
    return true;
  };

  moveRoute = (state) => {
    if (state) {
      this.props.history.push("/");
    } else {
      this.props.history.push("Login");
    }
  };

  render() {
    const { component: Comp, path, ...rest } = this.props;
    if (this.props.userRecoveryTried === undefined) {
      this.validateLogin(Comp, path, rest).then((state) => {
        alert(state);
        return this.moveRoute(state);
      });
      return <CheckingStorageComponent />;
    }
    return (
      <Route
        path={path}
        {...rest}
        render={(props) => {
          return this.props.userIsLogged ? (
            <Comp {...props} {...rest} />
          ) : (
            <Redirect
              {...props}
              to={{
                pathname: "/login",
                state: { prevLocation: "currentLocation" }
              }}
            />
          );
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userIsLogged: state.userIsLogged,
    userRecoveryTried: state.userRecoveryTried
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => {
      dispatch(loginUser(user));
    },
    markUseRecovery: () => {
      dispatch(markUseRecovery());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PrivateRouteComponent));

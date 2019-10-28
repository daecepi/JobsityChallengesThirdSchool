import React, { Component } from "react";


import { Route, Redirect } from 'react-router-dom';

class PrivateRouteComponent extends Component {
  validateLogin = async () => {
    const token = localStorage.getItem('access_token');
    if(!token){
      return false;
    }

    let authValidation = await fetch("http://localhost:5000/api/users/validateLogin",{
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    }).then(res => res.json());

    if(!authValidation.state || !(authValidation.state === "success")){
      return false;
    }

    return true;
  }

  render() {
    const { component: Comp, loggedIn, handleLogout, path, ...rest } = this.props;
    const validated = this.validateLogin();
    return ( <Route
              path={path}
              {...rest}
              render={(props) =>{
                return validated !== false ? (
                  <Comp {...props} {...rest} loggedIn={loggedIn} handleLogout={handleLogout} />
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
            /> );
  }
}

export default PrivateRouteComponent;

import React from "react"; //Importing react

//Router affair
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//Redux imports
//import { Provider } from 'react-redux';

import "./App.scss";

//components used
import ParentBooker from "./components/parentbooker/parentbooker";
import Login from "./components/login/login";
import Register from "./components/register/register";
import NotFoundPageComponent from "./components/NotFoundPage/NotFoundPage";

//Privater route
const PrivateRoute = ({ component: Comp, loggedIn, handleLogin, handleLogout, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        const token = localStorage.getItem("access_token");
        return token !== null ? (
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
    />
  );
};

class App extends React.Component {
  state = {
    loggedIn: false
  };

  componentDidMount() {
    let token = localStorage.getItem("access_token");

    if (token) {
      this.setState({
        loggedIn: true
      });
    }
  }

  handdleLogout = () => {
    localStorage.removeItem("access_token");
    this.setState(
      {
        loggedIn: false
      },
      () => {
        window.location = "/login";
      }
    );
  };

  //Function that is in charge of changing the layout
  handleLogin = () => {
    /*const { state = {} } = this.props.location;
    const { prevLocation } = state;*/
    this.setState(
      {
        loggedIn: true
      },
      () => {
        window.location = "/";
        //this.props.history.push(prevLocation || "/")
      }
    );
  };

  render() {
    return (
          <div className="App">
            <Router>
              <Switch>
                <PrivateRoute
                  path="/"
                  exact
                  loggedIn={this.state.loggedIn}
                  handleLogout={this.handdleLogout}
                  component={ParentBooker}
                />
                <PrivateRoute
                  path="/city/:name"
                  loggedIn={this.state.loggedIn}
                  handleLogout={this.handdleLogout}
                  component={ParentBooker}
                />
                <PrivateRoute
                  path="/type/:name"
                  loggedIn={this.state.loggedIn}
                  handleLogout={this.handdleLogout}
                  component={ParentBooker}
                />
                <Route
                  path="/login"
                  render={(match, props) => <Login handleLogin={this.handleLogin} {...match} {...props} />}
                />
                <Route path="/register" render={(match, props) => <Register {...props} {...match} />} />
                <Route component={NotFoundPageComponent} />
              </Switch>
            </Router>
          </div>
    );
  }
}

//<Provider store="">

export default App;

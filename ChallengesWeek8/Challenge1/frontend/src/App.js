import React from "react"; //Importing react

//Router affair
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//Import to make store available to every component
import { Provider } from 'react-redux';

//Importing the store
import store from './store/store';

import "./App.scss";

//components used
import ParentBooker from "./components/parentbooker/parentbooker";
import Login from "./components/login/login";
import Register from "./components/register/register";
import NotFoundPageComponent from "./components/NotFoundPage/NotFoundPage";
import YetToComeComponent from "./components/yetToComeComponent/yetToComeComponent";

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

  render() {
    return (
          <Provider store={store}>
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
                  <PrivateRoute
                    path="/user/loans"
                    exact
                    loggedIn={this.state.loggedIn}
                    handleLogout={this.handdleLogout}
                    component={YetToComeComponent}
                  />
                  <PrivateRoute
                    path="/user/:id/readings"
                    loggedIn={this.state.loggedIn}
                    handleLogout={this.handdleLogout}
                    component={YetToComeComponent}
                  />
                  <PrivateRoute
                    path="/user/:id/history"
                    loggedIn={this.state.loggedIn}
                    handleLogout={this.handdleLogout}
                    component={YetToComeComponent}
                  />
                  <PrivateRoute
                    path="/user/:id/later"
                    loggedIn={this.state.loggedIn}
                    handleLogout={this.handdleLogout}
                    component={YetToComeComponent}
                  />
                  <PrivateRoute
                    path="/user/:id/favorites"
                    loggedIn={this.state.loggedIn}
                    handleLogout={this.handdleLogout}
                    component={YetToComeComponent}
                  />
                  <Route
                    path="/login"
                    render={() => <Login {...this.props} />}
                  />
                  <Route path="/register" render={(match, props) => <Register {...props} {...match} />} />
                  <Route component={NotFoundPageComponent} />
                </Switch>
              </Router>
            </div>
          </Provider>
    );
  }
}

//<Provider store="">

export default App;

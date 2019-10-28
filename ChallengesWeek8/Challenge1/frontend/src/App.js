import React from "react"; //Importing react

//Router affair
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import to make store available to every component
import { Provider } from 'react-redux';

//Importing the store
import store from './store/store';

import "./App.scss";

//components used
import PrivateRouteComponent from "./components/PrivateRoute/PrivateRoute";
import ParentBooker from "./components/parentbooker/parentbooker";
import Login from "./components/login/login";
import Register from "./components/register/register";
import NotFoundPageComponent from "./components/NotFoundPage/NotFoundPage";
import YetToComeComponent from "./components/yetToComeComponent/yetToComeComponent";

//Privater route
/*const PrivateRoute = ({ component: Comp, loggedIn, handleLogin, handleLogout, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        const token = localStorage.getItem("access_token");
        
      }}
    />
  );
};*/

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
                  <PrivateRouteComponent
                    path="/"
                    exact
                    loggedIn={this.state.loggedIn}
                    handleLogout={this.handdleLogout}
                    component={ParentBooker}
                  />
                  <PrivateRouteComponent
                    path="/city/:name"
                    loggedIn={this.state.loggedIn}
                    handleLogout={this.handdleLogout}
                    component={ParentBooker}
                  />
                  <PrivateRouteComponent
                    path="/type/:name"
                    loggedIn={this.state.loggedIn}
                    handleLogout={this.handdleLogout}
                    component={ParentBooker}
                  />
                  <PrivateRouteComponent
                    path="/user/loans"
                    exact
                    loggedIn={this.state.loggedIn}
                    handleLogout={this.handdleLogout}
                    component={YetToComeComponent}
                  />
                  <PrivateRouteComponent
                    path="/user/:id/readings"
                    loggedIn={this.state.loggedIn}
                    handleLogout={this.handdleLogout}
                    component={YetToComeComponent}
                  />
                  <PrivateRouteComponent
                    path="/user/:id/history"
                    loggedIn={this.state.loggedIn}
                    handleLogout={this.handdleLogout}
                    component={YetToComeComponent}
                  />
                  <PrivateRouteComponent
                    path="/user/:id/later"
                    loggedIn={this.state.loggedIn}
                    handleLogout={this.handdleLogout}
                    component={YetToComeComponent}
                  />
                  <PrivateRouteComponent
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

import React from "react"; //Importing react

//Router affair
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import to make store available to every component
import { Provider } from "react-redux";

//Importing the store
import store from "./store/store";

import "./App.scss";

//components used
import PrivateRouteComponent from "./components/PrivateRoute/PrivateRoute";
import ParentBooker from "./components/parentbooker/parentbooker";
import Login from "./components/login/login";
import Register from "./components/register/register";
import NotFoundPageComponent from "./components/NotFoundPage/NotFoundPage";
import YetToComeComponent from "./components/yetToComeComponent/yetToComeComponent";


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

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Switch>
              <PrivateRouteComponent path="/" exact component={ParentBooker} />
              <PrivateRouteComponent path="/city/:name" component={ParentBooker} />
              <PrivateRouteComponent path="/type/:name" component={ParentBooker} />
              <PrivateRouteComponent path="/user/loans" exact component={YetToComeComponent} />
              <PrivateRouteComponent path="/user/:id/readings" component={YetToComeComponent} />
              <PrivateRouteComponent path="/user/:id/history" component={YetToComeComponent} />
              <PrivateRouteComponent path="/user/:id/later" component={YetToComeComponent} />
              <PrivateRouteComponent path="/user/:id/favorites" component={YetToComeComponent} />
              <Route path="/login" render={() => <Login {...this.props} />} />
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

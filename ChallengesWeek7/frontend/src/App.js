import React from 'react'; //Importing react

//Router affair
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';

//components used
import ParentBooker from './components/parentbooker/parentbooker';
import Login from './components/login/login';
import Register from './components/register/register';
import NotFoundPageComponent from './components/NotFoundPage/NotFoundPage';


//Privater route
const PrivateRoute = ({component, loggedIn, path, ...rest}) => {
  return (
    <Route
      path={path}
      {...rest}
      render={ (props) =>{
        console.log(path)
        return loggedIn === true ? <component {...props} /> : <Redirect {...props} push to={{
          pathname: "/login",
          state: { prevLocation: "currentLocation" }
        }} />
      }}
      />
  )
}

class App extends React.Component {

  state = {
    loggedIn: false,
  }

  handdleLogout = () => {
      localStorage.removeItem("access_token");
      const { state = {} } = this.props.location;
      const { prevLocation } = state;
      this.setState({
        loggedIn: true
      }, () =>{
        this.props.history.push(prevLocation || "/")
      });
      this.setState({loginVisible: true})
  }

  //Function that is in charge of changing the layout
  handleLogin = async () => {
    const { state = {} } = this.props.location;
    const { prevLocation } = state;
    this.setState({
      loggedIn: true
    }, () =>{
      this.props.history.push(prevLocation || "/")
    });
  }

  render(){
    console.log(this.state);
    return (
      <div className="App">
        <Router>
          <Switch>
            <PrivateRoute path="/" exact loggedIn={this.state.loggedIn} handleLogout={this.handdleLogout}  component={ParentBooker}/>
            <PrivateRoute path="/cartagena" loggedIn={this.state.loggedIn} handleLogout={this.handdleLogout} component={ParentBooker}/>
            <PrivateRoute path="/medellin" loggedIn={this.state.loggedIn} handleLogout={this.handdleLogout} component={ParentBooker}/>
            <PrivateRoute path="/quito" loggedIn={this.state.loggedIn} handleLogout={this.handdleLogout} component={ParentBooker}/>
            <Route path="/login" render={props=><Login handleLogin={this.handleLogin} {...props} />}>
              
            </Route>
            <Route path="/register" component={Register}/>
            <Route component={NotFoundPageComponent} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
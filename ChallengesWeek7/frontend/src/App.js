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
  console.log(loggedIn);
  return (
    <Route
      path={path}
      {...rest}
      render={ (props) =>{
        console.log(path)
        return loggedIn === true ? <component {...props} /> : <Redirect to={{
          pathname: "/login",
          state:{
            prevLocation: path,
            error: "You are not logged in"
          }

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
      
      this.setState({loginVisible: true})
  }

  //Function that is in charge of changing the layout
  handleLogin = () =>{
    const { state = {} } = this.props.location;
    const { prevLocation } = state;
    this.setState({
      loggedIn: true
    }, () =>{
      this.props.history.push(prevLocation || "/")
    });
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <PrivateRoute path="/" exact loggedIn={this.state.loggedIn} handleLogin={this.handleLogin}  component={ParentBooker}/>
            <PrivateRoute path="/cartagena" loggedIn={this.state.loggedIn} handleLogin={this.handleLogin} component={ParentBooker}/>
            <PrivateRoute path="/medellin" loggedIn={this.state.loggedIn} handleLogin={this.handleLogin} component={ParentBooker}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route component={NotFoundPageComponent} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
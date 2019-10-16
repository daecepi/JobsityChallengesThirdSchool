import React from 'react'; //Importing react

//Router affair
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';

//components used
import ParentBooker from './components/parentbooker/parentbooker';
import Login from './components/login/login';
import NotFoundPageComponent from './components/NotFoundPage/NotFoundPage';


//Privater route
/*const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)*/

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
            <Route path="/" exact component={ParentBooker}/>
            <Route path="/lattest" exact component={ParentBooker}/>
            <PrivateRoute path="/Medellin" loggedIn={this.state.loggedIn} handleLogin={this.handleLogin} component={ParentBooker}/>
            <Route path="/Cartagena" component={ParentBooker}/>
            <Route path="/login" component={Login}/>
            <Route component={NotFoundPageComponent} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
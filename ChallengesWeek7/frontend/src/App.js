import React from 'react'; //Importing react

//Router affair
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import './App.scss';

//components used
import ParentBooker from './components/parentbooker/parentbooker';
import Login from './components/login/login';
import NotFoundPageComponent from './components/NotFoundPage/NotFoundPage';


//Privater route
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={ParentBooker}/>
          <Route path="/Medellin" component={ParentBooker}/>
          <Route path="/Cartagena" component={ParentBooker}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
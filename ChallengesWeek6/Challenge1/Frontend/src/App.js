import React from 'react'; //Importing react
//import logo from './logo.svg';
import './App.scss';

//components used
import ParentBooker from './components/parentbooker/parentbooker';

import Login from "./components/login/login";
// <ParentBooker />
function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
/**
 * 
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
 */
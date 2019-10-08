import React from 'react'; //Importing react
//import logo from './logo.svg';
import './App.scss';

//Components
import NavBar from './components/navbar/navbar';
import Books from './components/books/books';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Books />
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
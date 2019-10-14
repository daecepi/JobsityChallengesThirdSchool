import React from 'react'; //Importing react
//import logo from './logo.svg';
import './App.scss';

//components used
import ParentBooker from './components/parentbooker/parentbooker';

// <ParentBooker />
function App() {
  return (
    <div className="App">
      <ParentBooker />
    </div>
  );
}

export default App;
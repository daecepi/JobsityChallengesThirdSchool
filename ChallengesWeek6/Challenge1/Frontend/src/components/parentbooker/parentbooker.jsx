import React, { Component } from 'react';

import './parentbooker.scss';

//Components used
import NavBar from '../navbar/navbar';
import Books from '../books/books';

class ParentBooker extends Component {
    state = {  }

    componentDidMount(){
        console.log("Component redered");
    }

    render() { 
        return ( 
            <div className="app-container">
                <NavBar />
                <Books />
            </div>
         );
    }
}
 
export default ParentBooker;
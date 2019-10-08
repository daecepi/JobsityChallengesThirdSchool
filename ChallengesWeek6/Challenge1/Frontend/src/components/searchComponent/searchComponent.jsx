import React, { Component } from 'react';

import './searchComponent.scss';

class SearchComponent extends Component {
    state = {  }
    render() { 
        return (
            <div className="inputWithIcon">
                <input type="text" placeholder="Search.."></input>
                <i className="fas fa-search" aria-hidden="true"></i>
            </div>
        );
    }
}
 
export default SearchComponent;
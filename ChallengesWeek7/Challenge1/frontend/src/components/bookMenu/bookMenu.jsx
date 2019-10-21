import React, { Component } from 'react';

class BookMenuComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="book-menu-container">
                <div className="favorites-container">
                    <i className="fas fa-heart"></i>
                </div>
                <div className="read-later-container">
                    <i className="fas fa-bookmark"></i>
                </div>
            </div>
         );
    }
}
 
export default BookMenuComponent;
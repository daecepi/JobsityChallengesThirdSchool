import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './NotFoundPage.scss';


class NotFoundPageComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="full-container">
                <div className="not-found-container">
                    <h1>404 Page not found</h1>
                    <p>Resource not found</p>
                    <Link to="/">
                        Go home
                    </Link>
                </div>
            </div>
         );
    }
}
 
export default NotFoundPageComponent;
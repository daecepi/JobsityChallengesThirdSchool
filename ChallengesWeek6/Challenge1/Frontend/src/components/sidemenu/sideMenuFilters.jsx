
import React, { Component } from 'react';

import "./sideMenuFilters.scss";

export default class SideMenuFiltersComponent extends Component {
    state = { 
        selection: [],
     }
    render() { 
        return (
            <div className="menu-left">
                <div className="menu-box">
                        <p>MAIN</p>
                        <ul>
                            <li>
                                <i className="fas fa-globe"></i><a href="../../../public/index.html" className="element">Quito</a>
                            </li>
                            <li>
                                <i className="fas fa-globe"></i><a href="../../../public/index.html" className="element">Cartagena</a>
                            </li>
                            <li>
                                <i className="fas fa-globe"></i><a href="../../../public/index.html" className="element">Medellín</a>
                            </li>
                            <li>
                                <i className="fas fa-tablet-alt "></i><a href="../../../public/index.html" className="element">Digital</a>
                            </li>
                            <li>
                                <i className="fas fa-user-tag"></i><a href="../../../public/index.html" className="element">Personal Loans</a>
                            </li>
                            <li className="selected">
                                <i className="fas fa-tags"></i><a href="../../../public/index.html" className="element">New Releases</a>
                            </li>
                        </ul>
                </div>
                <div className="menu-box">
                    <p>YOUR BOOKS</p>
                    <ul>
                        <li>
                            <i className="fas fa-book-open"></i><a href="../../../public/index.html" className="element">Readings</a>
                        </li>
                        <li>
                            <i className="fas fa-history"></i><a href="../../../public/index.html" className="element">History</a>
                        </li>
                        <li>
                            <i className="fas fa-heart"></i><a href="../../../public/index.html" className="element">Read Later</a>
                        </li>
                        <li>
                            <i className="fas fa-tags"></i><a href="../../../public/index.html" className="element">Favorites</a>
                        </li>
                    </ul>
                </div>
            </div>
         );
    }
}
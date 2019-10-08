import React, { Component } from 'react';

//Styles
import './navbar.css';

//Svg logo
import logo from './logo.svg'; 

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <header className="header-div">
                <div className="logo">
                    <img src={logo} className="image-logo" alt='logo'></img>
                </div>
                <div className="search-bar">
                    <p>Bookshelf</p>
                    <div className="inputWithIcon">
                        <input type="text" placeholder="Search.." />
                        <i className="fas fa-search" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="borderx">
                    <div className="user">
                        <div className="user-box">
                            <div className="user-elements">
                                <p id="user-name">Matt Barrera</p>
                                <i className="fa fa-chevron-down fa-xs"></i>
                                <div className="profile-container">
                                    <img className="profile-pic" src="./images/profile.jpg" alt="" />
                                </div>
                            </div>
                            <div id="dropdown" className="ddmenu">
                                <ul>
                                    <li><a href="../../../public/index.html">Profile</a></li>
                                    <li><a href="../../../public/index.html">Books saved</a></li>
                                    <li><a href="../../../public/index.html">Account Settings</a></li>
                                    <li><a href="../../../public/index.html">Log Out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
         );
    }
}
 
export default NavBar;
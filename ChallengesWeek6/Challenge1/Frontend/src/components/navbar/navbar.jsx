import React, { Component } from 'react';

//Styles
import './navbar.scss';

//Svg logo
import logo from './logo.svg';

//Image
import profile from '../../images/profile.jpg';

//Component
import SearchComponent from '../searchComponent/searchComponent';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <header className="header">
                <div className="logo">
                    <img src={logo} className="image-logo" alt='logo'></img>
                </div>
                <div className="search-bar">
                    <p>Bookshelf</p>
                    <SearchComponent type="text" placeholder="Search.." iconClasses="fas fa-search" />
                </div>
                <div className="borderx">
                    <div className="user">
                        <div className="user-box">
                            <div className="user-elements">
                                <p id="user-name">Matt Barrera</p>
                                <i className="fa fa-chevron-down fa-xs"></i>
                                <div className="profile-container">
                                    <img className="profile-pic" src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2019/02/5-create-fake-people-in-2-seconds-on-this-insane-site.jpg" alt="" />
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
import React, { Component } from "react";

import { connect } from "react-redux";

import { withRouter, Link } from "react-router-dom";

import { logoutUser } from "../../actions/actionCreator";

//Styles
import "./navbar.scss";

//Svg logo
import logo from "./logo.svg";

//Component
import SearchComponent from "../searchComponent/searchComponent";

class NavBar extends Component {
  state = {};

  handdleLogout = () => {
    //Removing information from the storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");

    //Logging out on redux thus in the entire app
    this.props.logoutUser();

    this.props.history.push("/login"); //Redirecting to login page
  };

  render() {
    return (
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} className="image-logo" alt="logo"></img>
          </Link>
        </div>
        <div className="search-bar">
          <p>Bookshelf</p>
          <SearchComponent
            type="text"
            placeholder="Search.."
            onChange={this.props.handleSearch}
            iconClasses="fas fa-search"
          />
        </div>
        <div className="borderx">
          <div className="user">
            <div className="user-box">
              <div className="user-elements">
                <p id="user-name">Matt Barrera</p>
                <i className="fa fa-chevron-down fa-xs"></i>
                <div className="profile-container">
                  <img
                    className="profile-pic"
                    src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2019/02/5-create-fake-people-in-2-seconds-on-this-insane-site.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div id="dropdown" className="ddmenu">
                <ul>
                  <li>
                    <button>Profile</button>
                  </li>
                  <li>
                    <button>Books saved</button>
                  </li>
                  <li>
                    <button>Account Settings</button>
                  </li>
                  <li>
                    <button onClick={this.handdleLogout}>Log Out</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(logoutUser());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(NavBar));

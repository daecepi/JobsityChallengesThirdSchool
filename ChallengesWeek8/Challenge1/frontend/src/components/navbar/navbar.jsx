import React, { Component } from "react";

import { connect } from "react-redux";

import { withRouter, Link } from "react-router-dom";

import { logoutUser } from "../../actions/userActionCreator";

//Svg logo
import logo from "./logo.svg";

//Component
import SearchComponent from "../searchComponent/searchComponent";


//External components used
import NotificationAlert from "react-notification-alert";
import "react-notification-alert/dist/animate.css";


//STYLING
import styled from 'styled-components';
import { secondaryWhite, primaryGrey, primaryBlue, secondaryDark } from "../../styles/colors";

const StyledHeader = styled.header`
  box-sizing: border-box;
  flex-basis: 5%;
`;

const LogoContainer = styled.div`
  height: 100%;
`;

const SearchBar = styled.div`
  font-family: "TitlePluton", Fallback, sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border-bottom: 1px solid ${primaryBlue.rgb};
  padding-left: 1rem;
  padding-right: 1rem;
  background: $secondary-white;
`;

const NavBarTitle = styled.p`
  font-size: 1.5rem;
`;

//Menu section of the components styling
const BorderX = styled.div`
  background: linear-gradient(90deg, rgba(0,0,0,0.0), white), linear-gradient(to bottom, rgb(247, 243, 235) 20%, rgba(68, 68, 68,0.5) 20%, rgba(68, 68, 68, 0.5)  80%, rgb(247, 243, 235) 80%) ;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserContainer = styled.div`
  background: ${secondaryWhite.rgb};
  height: 99%; /*Used to get the line next to the users container*/
  width: 99%; /*Used to get the line next to the users container*/
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserBoxContainer = styled.div`
  position: relative;
  display: inline-block;
  align-content: center;
  justify-content: center;

  &:hover{
    padding: 0.3em;
    border: 1px solid ${primaryGrey.rgb};
  }
`;

const UserElementsDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const StyledPNav = styled.p`
  align-self: center;
  font-size: 1rem;
  font-weight: bold;
`;

const StyledINav = styled.i`
  align-self: center;
  font-size: 0.6em;
  padding-left: 0.5em;
  padding-right: 0.5em;
`;

const ProfileContainer = styled.div`
  height: 2em;
  width: 2em;
`;

const ProfilePic = styled.img`
  height: 2em;
  width: 2em;
  border: 2px solid ${primaryBlue.rgb};
  border-radius: 50%;
`;

const DDMenu = styled.div`
  display: none;
  position: absolute;
  background: ${secondaryWhite.rgb};
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  color: gray;

  &:hover{
    display: block;
    text-decoration: none;
    list-style-type: none;
  }
`;

const StyledUlNav = styled.ul`
  list-style-type: none;
`;

const StyledButtonNav = styled.button`
  font-weight: bold;
  width: 100%;
  background: none;
  border: none;

  &:hover{
    background: ${secondaryDark.rgb};
    color: ${secondaryWhite.rgb};
  }
`;

class NavBar extends Component {

  mentionNotYetFunctionality = (e) => {
    e.preventDefault();
    this.displayNotification("Functionality not yet implemented");
  }


  displayNotification = (message) => {
    this.refs.notificationAlert.notificationAlert({
      place: "br",
      message: <div className="notification-container">{message}</div>,
      type: "danger",
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 2,
      closeButton: false
    });
  };

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
      <StyledHeader>
        <LogoContainer>
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
        </LogoContainer>
        <SearchBar>
          <NavBarTitle>Bookshelf</NavBarTitle>
          <SearchComponent
            type="text"
            placeholder="Search.."
            onChange={this.props.handleSearch}
            iconClasses="fas fa-search"
          />
        </SearchBar>
        <BorderX>
          <UserContainer>
            <UserBoxContainer>
              <UserElementsDiv>
                <StyledPNav className="user-name">Matt Barrera</StyledPNav>
                <StyledINav className="fa fa-chevron-down fa-xs"></StyledINav>
                <ProfileContainer>
                  <ProfilePic
                    src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2019/02/5-create-fake-people-in-2-seconds-on-this-insane-site.jpg"
                    alt="User image"
                  />
                </ProfileContainer>
              </UserElementsDiv>
              <DDMenu id="dropdown">
                <StyledUlNav>
                  <li>
                    <StyledButtonNav onClick={this.mentionNotYetFunctionality}>Profile</StyledButtonNav>
                  </li>
                  <li>
                    <StyledButtonNav onClick={this.mentionNotYetFunctionality}>Books saved</StyledButtonNav>
                  </li>
                  <li>
                    <StyledButtonNav onClick={this.mentionNotYetFunctionality}>Account Settings</StyledButtonNav>
                  </li>
                  <li>
                    <StyledButtonNav onClick={this.handdleLogout}>Log Out</StyledButtonNav>
                  </li>
                </StyledUlNav>
              </DDMenu>
            </UserBoxContainer>
          </UserContainer>
        </BorderX>
        <NotificationAlert ref="notificationAlert" />
      </StyledHeader>
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

import React, { Component } from "react";

import { connect } from "react-redux";

import { withRouter, Link } from "react-router-dom";

import { prepareSearchByWords, deploySearchByWords } from "../../actions/booksActionCreator";
import { logoutUser } from "../../actions/userActionCreator";

//Svg logo
import logo from "./logo.svg";


//Component
import SearchComponent from "../searchComponent/searchComponent";
import { NotificationContainer } from '../../styles';
import { 
  StyledHeader,
  LogoContainer,
  SearchBar,
  NavBarTitle,
  BorderX,
  UserContainer,
  UserBoxContainer,
  UserElementsDiv,
  StyledPNav,
  StyledINav,
  ProfileContainer,
  ProfilePic,
  DDMenu,
  StyledUlNav,
  StyledButtonNav,
  LogoImage
 } from './navbarInternals';

//External components used
import NotificationAlert from "react-notification-alert";
import "react-notification-alert/dist/animate.css";



class NavBar extends Component {

  mentionNotYetFunctionality = (e) => {
    e.preventDefault();
    this.displayNotification("Functionality not yet implemented");
  }


  displayNotification = (message) => {
    this.refs.notificationAlert.notificationAlert({
      place: "br",
      message: <NotificationContainer>{message}</NotificationContainer>,
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

  handleChange = (words) => {
    this.props.prepareSearchByWords(words);
  }

  handleKey = (key) => {
    if(key === 13){
      this.props.deploySearchByWords();
    }
  }

  render() {
    return (
      <StyledHeader>
        <LogoContainer>
          <Link to="/">
            <LogoImage src={logo} alt="logo" />
            </Link>
        </LogoContainer>
        <SearchBar>
          <NavBarTitle>Bookshelf</NavBarTitle>
          <SearchComponent
            type="text"
            placeholder="Search.."
            onChange={this.handleChange}
            onKeyUp={this.handleKey}
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

const mapStateToProps = state => {
  return {
    searchWords: state.books.searchWords,
    wordsChanged: state.books.wordsChanged,
    searchbyWordsDeploy: state.books.searchbyWordsDeploy
  };
}

const mapDispatchToProps = dispatch => {
  return {
    prepareSearchByWords: (words)=>{
      dispatch(prepareSearchByWords(words));
    },
    deploySearchByWords: ()=>{
      dispatch(deploySearchByWords());
    },
    logoutUser: () => {
      dispatch(logoutUser());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavBar));

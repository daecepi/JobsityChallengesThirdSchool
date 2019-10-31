import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

//Styles
import "./books.scss";

//External components used
import NotificationAlert from "react-notification-alert";
import "react-notification-alert/dist/animate.css";

//Components used
import SideMenuFiltersComponent from "../sidemenu/sideMenuFilters";
import Book from "../book/book";

//STYLING
import styled from 'styled-components';
import { secondaryBlue, thirdDark, secondaryWhite, primaryGrey, thirdWhite, primaryDark, secondaryDark, primaryBlue } from "../../styles/colors";

const Section1Container = styled.div`
  box-sizing: border-box;
  flex-basis: 95%;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;

  @media(max-width: 580px){
    grid-template-columns: 1fr;
  }
`;

const MenuBoxContainer = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const MenuRight = styled.div`
  background: ${primaryDark.rgb};
  color: ${primaryGrey.rgb};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.7rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1.5rem;
`;

const MenuRightP = styled.p`
  font-weight: bold;
  color: ${primaryGrey.rgb};
  font-size: 0.7rem;
  padding-bottom: 0.4rem;
`;

const StyledOl = styled.ol`
  overflow: hidden;
`;

const StyledLi = styled.li`
  font-size: 0.75rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  background: ${thirdWhite};
  flex-flow: column;
  padding: 1rem 4rem 0rem 4rem;
`;

const ListingManipulatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const ContentFilterBox = styled.div`
  color: ${primaryGrey.rgb};
`;

const StyledH2 = styled.h2`
  font-size: 1.1rem;
  font-family: 'SecondTitlePluton', Fallback, sans-serif;
  font-weight: bold;
  color: ${secondaryDark.rgb};
`;

const StyledP = styled.p`
  text-decoration: none;
  color: ${primaryGrey.rgb};
`;

const LayoutFormBox = styled.div`
  display: flex;
  align-items: center;
  justify-items: space-between;
  color: ${primaryBlue.rgb};
`;

const StyledI = styled.i`
  padding-left: 0.15rem;
  padding-right: 0.15rem;

  &:hover{
    color: $secondary-blue;
  }
`;

const StyledPFormBox = styled.p`
  padding-left: 0.4rem;
  padding-right: 0.4rem;
`;

const BooksContainer = styled.div`
  display: flex;
  justify-items: stretch;
  align-items: space-between;
`;

class Books extends Component {

  /**
   * Function to show alerts all over the applcation
   */
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

  handleRight = () => {
    const { actualPage, totalPageCount} = this.props;

    if (actualPage + 1 === totalPageCount) {
      this.displayNotification("You are already at the end of the list");
      return;
    }
    this.handlePagination(actualPage + 1);
  };

  handleLeft = () => {
    const { actualPage } = this.props;

    if (actualPage === 0) {
      this.displayNotification("You are already at the start of the list");
      return;
    }

    this.handlePagination(actualPage - 1);
  };

  render() {
    console.log(this.props);
    const { books } = this.props;
    return (
      <div className="section-1">
        <SideMenuFiltersComponent
          resource={this.props.resource}
          getBooksByType={this.props.getBooksByType}
          getBooksByCity={this.props.getBooksByCity}
        />
        <div className="content">
          <div className="listing-manipulator">
            <h2>New Releases</h2>
            <div className="content-filter-box">
              <p>
                <Link><a >Release Date</a> |{" "}</Link>
                <Link><a >Popularity</a></Link>
              </p>
            </div>
            <div className="layout-form-box">
              <i className="fa fa-th-large"></i>
              <i className="fa fa-th-list"></i>
              <p>| pages</p>
              <i onClick={this.handleLeft} className="fas fa-chevron-left i-hov" />
              <i onClick={this.handleRight} className="fas fa-chevron-right i-hov" />
            </div>
          </div>
          <div id="book-container" className="books">
            {books.map((book) => {
              return <Book key={book._id} book={book} setBookToOperate={this.props.setBookToOperate} />;
            })}
          </div>
        </div>
        <div className="menu-right">
          <div className="menu-box">
            <p>MOST READ BOOKS</p>
            <ol>
              <li key="1">
                <a >Hooked: How To Build Habit forming Products.</a>
              </li>
              <li key="2">
                <a >
                  The Inevitable: Understanding the 12 Technological Forces That Will Shape Our Future
                </a>
              </li>
              <li key="3">
                <a >Lean In: Women, Work, and the Will to Lead.</a>
              </li>
              <li key="4">
                <a >Building a Bussiness When There Are Not Easy Answers.</a>
              </li>
              <li key="5">
                <a >How Google Works</a>
              </li>
            </ol>
          </div>
        </div>
        <NotificationAlert ref="notificationAlert" />
      </div>
    );
  }
}

//Redux function for this component
const mapStateToProps = (state) => {
  return {
    actualPage: state.books.actualPage,
    totalPageCount: state.books.totalPageCount,
    books: state.books.books
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

//Functions for redux
const ConnectedBooks = connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);

export default ConnectedBooks;

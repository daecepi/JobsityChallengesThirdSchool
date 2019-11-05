import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { defaultStyleLink, NotificationContainer } from "../../styles";

//External components used
import NotificationAlert from "react-notification-alert";
import "react-notification-alert/dist/animate.css";

//Components used
import SideMenuFiltersComponent from "../sidemenu/sideMenuFilters";
import Book from "../book/book";

import { MenuBox } from "../../styles";

import { pageChange } from "../../actions/booksActionCreator";

import { 
  Section1Container,
  ContentContainer,
  MenuRight,
  MenuRightP,
  StyledMenuRightOl,
  StyledMenuRightLi,
  ListingManipulatorContainer,
  ContentFilterBox,
  StyledH2,
  StyledP,
  LayoutFormBox,
  StyledI,
  StyledPFormBox,
  BooksContainer,
  StyledFilterBoxSpan
 } from './booksInternals';

class Books extends Component {


  mentionNotYetFunctionality = (e) => {
    e.preventDefault();
    this.displayNotification("Functionality not yet implemented");
  }

  /**
   * Function to show alerts all over the applcation
   */
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

  handleRight = () => {
    const { actualPage, totalPageCount} = this.props;


    if (actualPage + 1 === totalPageCount) {
      this.displayNotification("You are already at the end of the list");
      return;
    }
    this.props.handlePageChange(actualPage + 1);
  };

  handleLeft = () => {
    const { actualPage } = this.props;

    if (actualPage === 0) {
      this.displayNotification("You are already at the start of the list");
      return;
    }

    this.props.handlePageChange(actualPage - 1);
  };

  render() {
    const { books } = this.props;
    return (
      <>
        <Section1Container>
          <SideMenuFiltersComponent
            resource={this.props.resource}
            getBooksByType={this.props.getBooksByType}
            getBooksByCity={this.props.getBooksByCity}
          />
          <ContentContainer>
            <ListingManipulatorContainer>
              <StyledH2>New Releases</StyledH2>
              <ContentFilterBox>
                <StyledP>
                  <StyledFilterBoxSpan onClick={this.mentionNotYetFunctionality} >Release Date</StyledFilterBoxSpan> | <StyledFilterBoxSpan onClick={this.mentionNotYetFunctionality} >Popularity</StyledFilterBoxSpan>
                </StyledP>
              </ContentFilterBox>
              <LayoutFormBox>
                <StyledI onClick={this.mentionNotYetFunctionality} className="fa fa-th-large"></StyledI>
                <StyledI onClick={this.mentionNotYetFunctionality}  className="fa fa-th-list"></StyledI>
                <StyledPFormBox>| pages ({this.props.actualPage+1} of {this.props.totalPageCount})</StyledPFormBox>
                <StyledI onClick={this.handleLeft} className="fas fa-chevron-left" />
                <StyledI onClick={this.handleRight} className="fas fa-chevron-right" />
              </LayoutFormBox>
            </ListingManipulatorContainer>
            <BooksContainer id="book-container">
              {books.map((book) => {
                return <Book key={book._id} book={book} setBookToOperate={this.props.setBookToOperate} />;
              })}
            </BooksContainer>
          </ContentContainer>
          <MenuRight>
            <MenuBox>
              <MenuRightP>MOST READ BOOKS</MenuRightP>
              <StyledMenuRightOl>
                <StyledMenuRightLi key="1">
                  <Link style={defaultStyleLink} to={"/book/11111dasdafs"}>
                    <StyledP>
                      Hooked: How To Build Habit forming Products.
                    </StyledP>
                  </Link>
                </StyledMenuRightLi>
                <StyledMenuRightLi key="2">
                  <Link style={defaultStyleLink} to={"book/22222dasdad"}>
                    <StyledP>
                      The Inevitable: Understanding the 12 Technological Forces That Will Shape Our Future
                    </StyledP>
                  </Link>
                </StyledMenuRightLi>
                <StyledMenuRightLi key="3">
                  <Link style={defaultStyleLink} to={"33333dasdad"}>
                    <StyledP>
                      Lean In: Women, Work, and the Will to Lead.
                    </StyledP>
                  </Link>
                </StyledMenuRightLi>
                <StyledMenuRightLi key="4">
                  <Link style={defaultStyleLink} to={"44444dadsad"}>
                    <StyledP>
                      Building a Bussiness When There Are Not Easy Answers.
                    </StyledP>
                  </Link>
                </StyledMenuRightLi>
                <StyledMenuRightLi key="5">
                  <Link style={defaultStyleLink} to={"55555dadsad"}>
                    <StyledP>
                      How Google Works
                    </StyledP>
                  </Link>
                </StyledMenuRightLi>
              </StyledMenuRightOl>
            </MenuBox>
          </MenuRight>
        </Section1Container>
        <NotificationAlert ref="notificationAlert" />
      </>
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
  return {
    changePage: (pageNum) => {
      dispatch(pageChange(pageNum))
    }
  };
};

//Functions for redux
const ConnectedBooks = connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);

export default ConnectedBooks;

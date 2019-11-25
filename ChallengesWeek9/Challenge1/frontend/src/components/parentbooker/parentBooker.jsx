import React, { Component } from "react";

//Redux libraries needed
import { connect } from "react-redux";

//Module to translate query params
import queryString from "query-string";

//Action creator
import { getBooksPending, getBooksSuccess, getBooksError, applyBookupdate } from "../../actions/booksActionCreator";

//External components used
import NotificationAlert from "react-notification-alert";
import "react-notification-alert/dist/animate.css";

//Internal components used
import NavBar from "../navbar/navbar";
import Books from "../books/books";
import { NotificationContainer } from "../../styles";
import ReservationComponent from "../reservationComponent/reservationComponent";
import { AppContainer } from "./parentBookerInternals";

//Librarie taht supports sockets
import socketIOClient from "socket.io-client";

class ParentBooker extends Component {
  state = {
    baseEndpoint: "http://localhost:4500/api/books",
    actualPage: 0,
    totalPageCount: 0,
    searchWords: "",
    books: [],
    lendBook: false,
    showModal: "", // make sure to delete if not used
    bookToOperateIn: undefined
  };

  ws = undefined;
  /**
   * Funtrion for initialization
   */
  componentDidMount() {
    this.fetchBooks(this.props.location.pathname + this.props.location.search);

    const socket = socketIOClient("http://localhost:4001");
    socket.on("LendUpdate", (data) => {
      const book = JSON.parse(data);
      this.props.applyBookupdate(book._id, book);
    });
  }

  componentDidUpdate() {
    const resource = this.props.location.pathname + this.props.location.search;
    if (this.props.resource !== resource) {
      this.fetchBooks(resource);
    } else if (this.props.wordsChanged === true && this.props.searchbyWordsDeploy) {
      this.fetchBooks(resource);
    }
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

  handlePageChange = (num) => {
    const resource = this.props.location.pathname + this.props.location.search;
    this.fetchBooks(resource, num);
  };

  /**
   * Function that look for the books of a specific point destined for it in the backend
   * @param {string} endpoint : string that contains the base endpoint for books looking
   * @param {number} page : the integer number of the page wanted
   * @param {Object} filters : object that contains the filters by city, type and words to search for
   */
  fetchBooks = async (resource, num) => {
    let pageNum = 0;
    const filters = queryString.parse(this.props.location.search);

    if (filters.page) {
      pageNum = parseInt(filters.page);
    }

    const endpoint = this.props.baseEndpoint;
    const page = num !== undefined ? num : pageNum;
    let url = endpoint.concat("/books", "?startIndex=", page);

    if (filters.city) {
      url += "&cities=" + this.capitalizeFLetter(filters.city);
    }

    if (filters.type) {
      url += "&types=" + this.capitalizeFLetter(filters.type);
    }

    if (this.props.searchWords !== "") {
      url += "&words=" + this.props.searchWords;
    }

    const token = localStorage.getItem("access_token");
    this.props.getBooksPending();

    //Fetching the api
    let authResult = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    }).then((res) => res.json());

    //Acting according to message
    if (authResult === 400) {
      this.displayNotification(authResult.message);
    } else if (authResult.statusCode === 401) {
      //Means that token is not valid anymore
      this.displayNotification("Credentials have expired");
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
    } else if (authResult.state === "Success") {
      //Setting the state that holds the books for updates
      const path = this.props.computedMatch.path;

      this.props.getBooksSuccess(authResult.books, authResult.pageNumber, authResult.totalPages, path, resource);
    }
  };

  /**
   * Function used to capitilize the first letter of types and cities wanted as API requires in its registries
   * @param {*} word : word given to comver to the proper state
   */
  capitalizeFLetter(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  /**
   * Function to get books from the server by words
   *
   */
  getBooksByWords = async (startIndex = 0) => {
    let token = localStorage.getItem("access_token");

    let authResult = await fetch(`http://localhost:5000/api/books?startIndex=${startIndex}&words=${this.state.words}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    }).then((res) => res.json());

    if (authResult === 400) {
      alert(authResult.message);
    } else if (authResult.statusCode === 401) {
      //Means that token is not valid anymore
      localStorage.removeItem("access_token");
    } else {
      //Setting the state that holds the books for updates
      this.setState({ books: authResult });
    }
  };

  setBookToOperate = (book) => {
    this.setState({
      bookToOperateIn: book,
      lendBook: true
    });
  };

  returnModalBack = () => {
    this.setState({
      lendBook: false
    });
  };

  render() {
    return (
      <AppContainer>
        <>
          <NavBar handleSearch={this.getBooksByWords} searchValue={this.state.searchWords} />
          <Books
            resource={this.state.resource}
            totalPages={this.state.totalPages}
            actualPage={this.state.actualPage}
            getBooksByCity={this.getBooksByCity}
            getBooksByType={this.getBooksByType}
            handlePageChange={this.handlePageChange}
            setBookToOperate={this.setBookToOperate}
          />
          {this.props.isReservationProcessStarted ? (
            <ReservationComponent returnModalBack={this.returnModalBack} />
          ) : (
            ""
          )}
        </>
        <NotificationAlert ref="notificationAlert" />
      </AppContainer>
    );
  }
}

//Redux function for this component
const mapStateToProps = (state) => {
  return {
    books: state.books.books,
    baseEndpoint: state.books.baseEndpoint,
    actualPage: state.books.actualPage,
    totalPageCount: state.books.totalPageCount,
    resource: state.books.resource,
    isReservationProcessStarted: state.books.isReservationProcessStarted,
    searchWords: state.books.searchWords,
    wordsChanged: state.books.wordsChanged,
    searchbyWordsDeploy: state.books.searchbyWordsDeploy
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBooksPending: () => {
      dispatch(getBooksPending());
    },
    getBooksSuccess: (books, actualPage, totalPageCount, urlFilters, resource) => {
      dispatch(getBooksSuccess(books, actualPage, totalPageCount, urlFilters, resource));
    },
    getBooksError: (err) => {
      dispatch(getBooksError(err));
    },
    applyBookupdate: (bookId, book) => {
      dispatch(applyBookupdate(bookId, book));
    }
  };
};

//Functions for redux
const ConnectedParentBooker = connect(
  mapStateToProps,
  mapDispatchToProps
)(ParentBooker);

export default ConnectedParentBooker;

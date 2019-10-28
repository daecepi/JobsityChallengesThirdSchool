import React, { Component } from "react";
import "./parentbooker.scss";

//Redux libraries needed
import { connect } from "react-redux";

//Action creator
import { getBooksPending, getBooksSuccess, getBooksError } from "../../actions/actionCreator";

//External components used
import NotificationAlert from "react-notification-alert";
import "react-notification-alert/dist/animate.css";

//Internal components used
import NavBar from "../navbar/navbar";
import Books from "../books/books";
import ReservationComponent from "../reservationComponent/reservationComponent";

class ParentBooker extends Component {
  state = {
    baseEndpoint: "http://localhost:5000/api/books",
    actualPage: 0,
    totalPageCount: 0,
    searchWords: "",
    books: [],
    lendBook: false,
    showModal: "", // make sure to delete if not used
    bookToOperateIn: undefined
  };

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

  /**
   * Funtrion for initialization
   */
  componentDidMount() {
    //this.props.fetchBooks(this.state.baseEndpoint, 0);
    this.handlePagination(0);
  }

  /**
   * Function that look for the books of a specific point destined for it in the backend
   * @param {string} endpoint : string that contains the base endpoint for books looking
   * @param {number} page : the integer number of the page wanted
   * @param {Object} filters : object that contains the filters by city, type and words to search for 
   */
  fetchBooks = async (endpoint, page, filters) => {
    let url = endpoint + "?page=" + page;

    //Applying filters to customize request
    if (filters.city) {
      url += "&city=" + this.capitalizeFLetter(filters.city);
    }
    if (filters.type) {
      url += "&type=" + this.capitalizeFLetter(filters.type);
    }
    if (filters.words) {
      url += "&words=" + this.capitalizeFLetter(filters.words);
    }

    const token = localStorage.getItem("access_token");

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
      this.props.getBooksSuccess(authResult.books);
      this.setState({
        actualPage: authResult.pageNumber - 1,
        totalPageCount: authResult.totalPages,
        resource: "/",
        books: authResult.books
      });
    }
  };

  /**
   * Function used to handle the paginatio inside application for each query
   */
  handlePagination = (num) => {
    //Get the query params
    const path = this.props.match.path;
    switch (path) {
      case "/":
        this.getBooks(num);
        break;
      case "/city/:name":
        const city = this.props.match.params.name;
        this.getBooksByCity(city, num);
        break;
      case "/type/:name":
        const type = this.props.match.params.name;
        this.getBooksByType(type, num);
        break;
      default:
        break;
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
   * Function used to get all books from the api
   *
   */
  getBooks = async (startIndex = 0) => {
    let token = localStorage.getItem("access_token");

    this.props.getBooksPending();

    let authResult = await fetch(`http://localhost:5000/api/books?startIndex=${startIndex}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    }).then((res) => res.json());

    if (authResult === 400) {
      alert(authResult.message);
    } else if (authResult.state === "Success") {
      //Setting the state that holds the books for updates
      this.props.getBooksSuccess(authResult.books);
      this.setState({
        actualPage: authResult.pageNumber - 1,
        totalPageCount: authResult.totalPages,
        resource: "/",
        books: authResult.books
      });
    } else {
    }
  };

  /**
   * Function that looks for books in the API by type
   *
   */
  getBooksByType = async (type, startIndex = 0) => {
    const typeCap = this.capitalizeFLetter(type);

    let token = localStorage.getItem("access_token"); //Getting the token for the request
    let authResult = await fetch(`http://localhost:5000/api/books?startIndex=${startIndex}&type=${typeCap}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    }).then((res) => res.json());

    if (authResult.statusCode === 400) {
      alert(authResult.message);
    } else if (authResult.statusCode === 401) {
      //Means that token is not valid anymore
      localStorage.removeItem("access_token");
    } else if (authResult.state === "Success") {
      //Setting the state that holds the books for updates
      this.setState({
        actualPage: authResult.pageNumber - 1,
        totalPageCount: authResult.totalPages,
        resource: `/type/${type}`,
        books: authResult.books
      });
    }
  };

  /**
   * Function to find books by city
   */
  getBooksByCity = async (city, startIndex = 0) => {
    const cityCap = this.capitalizeFLetter(city);

    let token = localStorage.getItem("access_token"); // Getting the token for the request

    let authResult = await fetch(`http://localhost:5000/api/books?startIndex=${startIndex}&city=${cityCap}`, {
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
    } else if (authResult.state === "Success") {
      //Setting the state that holds the books for updates
      this.setState({
        actualPage: authResult.pageNumber - 1,
        totalPageCount: authResult.totalPages,
        resource: `/city/${city}`,
        books: authResult.books
      });
    }
  };

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
    //const { actualPage, totalPageCount } = this.state;
    return (
      <div className="app-container">
        <>
          <NavBar handleSearch={this.getBooksByWords} searchValue={this.state.searchWords} />
          <Books
            resource={this.state.resource}
            totalPages={this.state.totalPages}
            actualPage={this.state.actualPage}
            getBooksByCity={this.getBooksByCity}
            getBooksByType={this.getBooksByType}
            handlePagination={this.handlePagination}
            setBookToOperate={this.setBookToOperate}
          />
          {this.state.lendBook ? (
            <ReservationComponent returnModalBack={this.returnModalBack} book={this.state.bookToOperateIn} />
          ) : (
            ""
          )}
        </>

        <NotificationAlert ref="notificationAlert" />
      </div>
    );
  }
}

//Redux function for this component
const mapStateToProps = (state) => {
  return {
    books: state.books.books,
    baseEndpoint: state.books.baseEndpoint
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBooksPending: () => {
      dispatch(getBooksPending());
    },
    getBooksSuccess: (books) => {
      dispatch(getBooksSuccess(books));
    },
    getBooksError: (err) => {
      dispatch(getBooksError(err));
    }
  };
};

//Functions for redux
const ConnectedParentBooker = connect(
  mapStateToProps,
  mapDispatchToProps
)(ParentBooker);

export default ConnectedParentBooker;

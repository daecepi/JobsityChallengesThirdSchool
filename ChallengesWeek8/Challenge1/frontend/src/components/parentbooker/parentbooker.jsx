import React, { Component } from 'react';
import "./parentbooker.scss";

//Components used
import NavBar from "../navbar/navbar";
import Books from "../books/books";
import ReservationComponent from "../reservationComponent/reservationComponent";

class ParentBooker extends Component {
  state = {
    actualPage: 0,
    totalPageCount: 0,
    searchWords: "",
    books: [],
    lendBook: false,
    showModal: "", // make sure to delete if not used
    bookToOperateIn: undefined
  };

  /**
   * Funtrion for initialization
   */
  componentDidMount() {
    let token = localStorage.getItem("access_token");
    if (!token) {
      return;
    }
    this.handlePagination(0);
  }

  /**
   * Function used to handle the paginatio inside application for each query
   */
  handlePagination = (num) => {
    //Get the query params
    const path = this.props.match.path;
    console.log(path);
    switch (path) {
      case "/":
        this.getBooks(num);
        break;
      case "/city/:name":
        const city = this.props.match.params.name;
        console.log(city);
        this.getBooksByCity(city, num);
        break;
      case "/type/:name":
        const type = this.props.match.params.name;
        console.log(type);
        this.getBooksByType(type, num);
        break;
      default:
        break;
    }

    console.log(num);
  };

  /**
   * Function used to capitilize the first letter of types and cities wanted as API requires in its registries
   * @param {*} word : word given to comver to the proper state
   */
  capitalizeFLetter(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  /**
   * FUnction used to get all books from the api
   *
   */
  getBooks = async (startIndex = 0) => {
    let token = localStorage.getItem("access_token");
    let authResult = await fetch(`http://localhost:5000/books?startIndex=${startIndex}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    }).then((res) => res.json());

    if (authResult === 400) {
      alert(authResult.message);
    } else if (authResult.state === "Success") {
      //Setting the state that holds the books for updates
      this.setState({
        actualPage: authResult.pageNumber - 1,
        totalPageCount: authResult.totalPages,
        resource: "/",
        books: authResult.books
      });
    }
  };

  /**
   * Function that looks for books in the API by type
   *
   */
  getBooksByType = async (type, startIndex = 0) => {
    const typeCap = this.capitalizeFLetter(type);

    let token = localStorage.getItem("access_token"); //Getting the token for the request
    let authResult = await fetch(`http://localhost:5000/books?startIndex=${startIndex}&type=${typeCap}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    }).then((res) => res.json());

    console.log(authResult);
    if (authResult.statusCode === 400) {
      alert(authResult.message);
    }else if(authResult.statusCode === 401){ //Means that token is not valid anymore
      localStorage.removeItem("access_token");
    }else if (authResult.state === "Success") {
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

    let authResult = await fetch(`http://localhost:5000/books?startIndex=${startIndex}&city=${cityCap}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    }).then((res) => res.json());
    console.log(authResult);
    if (authResult === 400) {
      alert(authResult.message);
    }else if(authResult.statusCode === 401){ //Means that token is not valid anymore
      localStorage.removeItem("access_token");
    } else if(authResult.state === "Success") {
      //Setting the state that holds the books for updates
      this.setState({
        actualPage: (authResult.pageNumber-1),
        totalPageCount: authResult.totalPages,
        resource:  `/city/${city}`,
        books: authResult.books,
      });
    }
  };

  /**
   * Function to get books from the server by words
   * 
   */
  getBooksByWords = async (startIndex = 0) => {
    let token = localStorage.getItem("access_token");

    let authResult = await fetch(`http://localhost:5000/books?startIndex=${startIndex}&words=${this.state.words}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    }).then((res) => res.json());
    console.log(authResult);

    if (authResult === 400) {
      alert(authResult.message);
    }else if(authResult.statusCode === 401){ //Means that token is not valid anymore
      localStorage.removeItem("access_token");
    } else {
      //Setting the state that holds the books for updates
      this.setState({ books: authResult });
    }
  };

  setBookToOperate = (book) => {
    console.log("entre");
    this.setState({
      bookToOperateIn: book,
      lendBook: true
    });
  }

  returnModalBack = () => {
    this.setState({
      lendBook: false
    });
  }

  render() {
    const { books, actualPage, totalPageCount } = this.state;
    return (
      <div className="app-container">
        <>
          <NavBar
            handleSearch={this.getBooksByWords}
            searchValue={this.state.searchWords}
            logout={this.props.handleLogout}
          />
          <Books
            books={books}
            resource={this.state.resource}
            totalPages={totalPageCount}
            actualPage={actualPage}
            getBooksByCity={this.getBooksByCity}
            getBooksByType={this.getBooksByType}
            handlePagination={this.handlePagination}
            setBookToOperate = {this.setBookToOperate}
          />
          {this.state.lendBook ? <ReservationComponent returnModalBack={ this.returnModalBack } book={ this.state.bookToOperateIn } />: ""}
        </>
      </div>
    );
  }
}

export default ParentBooker;

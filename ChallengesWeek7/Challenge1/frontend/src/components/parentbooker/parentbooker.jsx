import React, { Component } from "react";

import "./parentbooker.scss";

//Components used
import NavBar from "../navbar/navbar";
import Books from "../books/books";

class ParentBooker extends Component {
  state = {
    resourse: undefined,
    actualPage: 0,
    totalPageCount: 0,
    searchWords: "",
    books: []
  };

  componentDidMount() {
    let token = localStorage.getItem("access_token");
    if (!token) {
      return;
    }
    //Get the query params
    const path = this.props.match.path;
    console.log(path);
    switch (path) {
      case "/":
        this.getBooks(0);
        break;
      case "/city/:name":
          const city = this.props.match.params.name;
          console.log(city);
          this.getBooksByCity(city, 0);
        break;
      case "/type/:name":
          const type = this.props.match.params.name;
          console.log(type);
          this.getBooksByType(type, 0);
        break;
      default:
        break;
    }
  }

  /**
   * Function used to
   */
  handlePagination(num) {
    console.log(num);
  }

  /**
   * Function used to capitilize the first letter of types and cities wanted as API requires in its registries
   * @param {*} word 
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
    let authResult = await fetch(
      `http://localhost:5000/books?startIndex=${startIndex}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token
        }
      }
    ).then(res => res.json());

    if (authResult === 400) {
      alert(authResult.message);
    } else if(authResult.state === "Success") {
      //Setting the state that holds the books for updates
      this.setState({
        actualPage: 1,
        totalPageCount: authResult.totalPages,
        resource: "/",
        books: authResult.books,
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
    let authResult = await fetch(
      `http://localhost:5000/books?startIndex=${startIndex}&type=${typeCap}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token
        }
      }
    ).then(res => res.json());

    console.log(authResult);
    if (authResult === 400) {
      alert(authResult.message);
    } else if(authResult.state === "Success") {
      //Setting the state that holds the books for updates
      this.setState({
        actualPage: 1,
        totalPageCount: authResult.totalPages,
        resource: "/type",
        books: authResult.books,
      });
    }
  };

  getBooksByCity = async (city, startIndex = 0) => {
    const cityCap = this.capitalizeFLetter(city);

    let token = localStorage.getItem("access_token"); // Getting the token for the request

    let authResult = await fetch(
      `http://localhost:5000/books?startIndex=${startIndex}&city=${cityCap}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token
        }
      }
    ).then(res => res.json());
    console.log(authResult);
    if (authResult === 400) {
      alert(authResult.message);
    } else if(authResult.state === "Success") {
      //Setting the state that holds the books for updates
      this.setState({
        actualPage: 1,
        totalPageCount: authResult.totalPages,
        resource: "/city",
        books: authResult.books,
      });
    }
  };

  getBooksByWords = async ( startIndex = 0) => {
    let token = localStorage.getItem("access_token");

    let authResult = await fetch(
      `http://localhost:5000/books?startIndex=${startIndex}&words=${this.state.words}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token
        }
      }
    ).then(res => res.json());
    console.log(authResult);

    if (authResult === 400) {
      alert(authResult.message);
    } else {
      //Setting the state that holds the books for updates
      this.setState({ books: authResult });
    }
  };

  render() {
    console.log(this.props);
    const { books, pageCount, totalPageCount } = this.state;
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
            totalPages={totalPageCount}
            pageCount={pageCount}
            getBooksByCity={this.getBooksByCity}
            getBooksByType={this.getBooksByType}
            handlePagination={this.handlePagination}
          />
        </>
      </div>
    );
  }
}

export default ParentBooker;

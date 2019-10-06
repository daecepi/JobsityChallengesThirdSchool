"use strict";

var defaultResults = 15; //Holdis the initial number of books to load

/**
 * Funtion that initializes the application
 */

var init = function init() {
  console.log('sd'); //Get books from API

  fetch("./FirstApi.json").then(function (res) {
    return res.json();
  }).then(function (res) {
    var bookContainersContent; //Transform initial books to html 

    var booksContent = res.slice(0, defaultResults).map(function (book) {
      return createBookContainer(book);
    }).join('');
    console.log(booksContent); //Assigning books to html element

    var booksContainer = document.querySelector("#book-container");
    booksContainer.innerHTML = booksContent;
  });
};

var createBookContainer = function createBookContainer(book) {
  return "\n    <div class=\"book\">\n        <img src=\"".concat(book.imageLinks.smallThumbnail, "\" alt=\"\">\n        <p class=\"book-title\">").concat(book.title, "</p>\n        <p class=\"authors\">").concat(book.authors.toString(), "</p>\n        ").concat(getRating(book.averageRating), "\n    </div>\n    ");
};

var getRating = function getRating(num) {
  if (num) {
    return "";
  } else {
    return "Not rated";
  }
};

init();
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Funtion that initializes the application
 */
var init = function init() {
  fetch("./BooksInfo.json").then(function (res) {
    return res.json();
  }).then(function (res) {
    var generalLayout = "";

    for (var i = 0; i < res.length; i++) {
      generalLayout += createBookContainer(res[i]);
    }

    var booksContainer = document.querySelector("#books");
    booksContainer.innerHTML(generalLayout);
  });
};

var createBookContainer = function createBookContainer(bookInfo) {
  var _ref;

  return "\n        <div class=\"book\">\n            <img src=\"".concat(bookInfo.imageLinks.smallThumbnail, "\" alt=\"\">\n            <p class=\"book-title\">").concat(bookInfo.title, "</p>\n            <p class=\"authors\">").concat((_ref = '').join.apply(_ref, _toConsumableArray(bookInfo.authors)), "</p>\n            <p class=\"stars\">").concat(bookInfo.stars, "</p>\n        </div>\n    ");
};

init();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Book =
/*#__PURE__*/
function () {
  function Book(title, description, authors, publishedDate, averageRating, pageCount, imageLinks) {
    _classCallCheck(this, Book);

    this.title = title;
    this.description = description;
    this.authors = authors;
    this.publishedDate = publishedDate;
    this.averageRating = averageRating;
    this.pageCount = pageCount;
    this.imageLinks = imageLinks;
  }

  _createClass(Book, [{
    key: "getTitle",
    value: function getTitle() {
      return this.title;
    }
  }, {
    key: "getDesc",
    value: function getDesc() {
      return this.title;
    }
  }, {
    key: "getAuthors",
    value: function getAuthors() {
      return this.authors;
    }
  }]);

  return Book;
}();
"use strict";

/**
 * Funtion that initializes the application
 */
var init = function init() {//console.log("entry");
  //let books = await fetch("/dist/FirstApi.json").then(res => res.json());
}; //init();
//# sourceMappingURL=all.js.map

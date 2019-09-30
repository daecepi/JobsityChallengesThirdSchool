"use strict";

/**
 * Funtion that initializes the application
 */
var init = function init() {
  console.log("entry");
  var books = fetch("./FirstApi.json").then(function (res) {
    return res.json();
  }).then(function (res) {
    console.log(res);
  });
  console.log("asda");
};

var createBookContainer = function createBookContainer(bookInfo) {
  console.log("ad");
};

init();
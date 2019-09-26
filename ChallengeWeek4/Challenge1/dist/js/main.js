"use strict";

/**
 * Funtion that initializes the application
 */
var init = function init() {
  console.log("entry");
  fetch("/dist/FirstApi.json").then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data);
  });
};

init();
import React, { Component } from "react";

import "./sideMenuFilters.scss";

export default class SideMenuFiltersComponent extends Component {
  state = {
    classifications: [
      {
        index: 1,
        section: "Quito",
        logoClasses: "fas fa-globe",
        isSelected: false
      },
      {
        index: 2,
        section: "Cartagena",
        logoClasses: "fas fa-globe",
        isSelected: false
      },
      {
        index: 3,
        section: "Medellín",
        logoClasses: "fas fa-globe",
        isSelected: false
      },
      {
        index: 4,
        section: "Digital",
        logoClasses: "fas fa-tablet-alt",
        isSelected: false
      },
      {
        index: 5,
        section: "Personal Loans",
        logoClasses: "fas fa-user-tag",
        isSelected: false
      },
      {
        index: 6,
        section: "Readings",
        logoClasses: "fas fa-book-open",
        isSelected: false
      },
      {
        index: 7,
        section: "History",
        logoClasses: "fas fa-history",
        isSelected: false
      },
      {
        index: 8,
        section: "Read Later",
        logoClasses: "fas fa-heart",
        isSelected: false
      },
      {
        index: 9,
        section: "Favorites",
        logoClasses: "fas fa-tags",
        isSelected: false
      }
    ]
  };
  render() {
    return (
      <div className="menu-left">
        <div className="menu-box">
          <p>MAIN</p>
          <ul>
            {this.state.classifications.map((item, index) => {
              if (index < 6) {
                return (
                  <li
                    key={item.index}
                    className={item.isSelected ? "selected" : ""}
                  >
                    <i className={item.logoClasses}></i>
                    <button className={item.isSelected ? "selected" : "element"}>{item.section}</button>
                  </li>
                );
              }
              return "";
            })}
          </ul>
        </div>
        <div className="menu-box">
          <p>YOUR BOOKS</p>
          <ul>
            {this.state.classifications.map((item, index) => {
              if (index > 5) {
                return (
                  <li
                    key={item.index}
                    className={item.isSelected ? "selected" : ""}
                  >
                    <i className={item.logoClasses}></i>
                    <button className={item.isSelected ? "selected" : "element"}>{item.section}</button>
                  </li>
                );
              }
              return "";
            })}
          </ul>
        </div>
      </div>
    );
  }
}

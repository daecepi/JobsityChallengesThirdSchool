import React, { Component } from "react";

import "./sideMenuFilters.scss";

export default class SideMenuFiltersComponent extends Component {
  state = {
    selectedItemIndex: 0,
    sections: [
      {
        label: "Main", 
        items: [
           {
            index: 1,
            section: "Quito",
            to: "/city/quito",
            logoClasses: "fas fa-globe",
            isSelected: false
          },
          {
            index: 2,
            section: "Cartagena",
            to: "/city/cartagena",
            logoClasses: "fas fa-globe",
            isSelected: false
          },
          {
            index: 3,
            section: "Medellín",
            to: "/city/medellin",
            logoClasses: "fas fa-globe",
            isSelected: false
          },
          {
            index: 4,
            section: "Digital",
            to: "/type/digital",
            logoClasses: "fas fa-tablet-alt",
            isSelected: false
          },
          {
            index: 5,
            section: "Hardcover",
            to: "/type/hardcover",
            logoClasses: "fas fa-book",
            isSelected: false
          },
          {
            index: 6,
            section: "Personal Loans",
            logoClasses: "fas fa-user-tag",
            isSelected: false
          },
        ]
      },
      {
        label: "Your Books",
        items: [
              {
                index: 7,
                section: "Readings",
                logoClasses: "fas fa-book-open",
                isSelected: false
              },
              {
                index: 8,
                section: "History",
                logoClasses: "fas fa-history",
                isSelected: false
              },
              {
                index: 9,
                section: "Read Later",
                logoClasses: "fas fa-heart",
                isSelected: false
              },
              {
                index: 10,
                section: "Favorites",
                logoClasses: "fas fa-tags",
                isSelected: false
              }
          ]
      }
    ]
  };

  setSelectedItemIndex= (index)=>{
    this.setState({
      selectedItemIndex: index
    });
  }
  
  render() {
    return (
      <div className="menu-left">
        <div className="menu-box">
              {this.state.sections.map(section => (
                  <div key={section.label} className="menu-box">
                    <p>{section.label}</p>

                  <ul>
                    {section.items.map((item) => {
                        return (
                          <li
                            key={item.index}
                            onClick={()=>{this.setSelectedItemIndex(item.index)}}
                            className={item.index === this.state.selectedItemIndex ? "selected" : ""}
                          >
                            <i className={item.logoClasses}></i>
                            <button className={item.index === this.state.selectedItemIndex ? "selected" : "element"}>{item.section}</button>
                          </li>
                        );
                      })
                    }
                  </ul>
                  </div>  
              ))}
        </div>
      </div>
    );
  }
}

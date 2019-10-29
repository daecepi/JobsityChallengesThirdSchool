import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import "./sideMenuFilters.scss";


//STYLING
import styled from 'styled-components';
import { secondaryWhite, secondaryBlue, thirdDark, primaryBlue, primaryDark, primaryWhite } from '../../styles/colors';

const MenuLeft = styled.div`
  font-family: "PlutonGeneral", Fallback, sans-serif;
  background: ${primaryDark.rgb};
  padding-left: 1rem; /* adding margin to side containers*/
  padding-right: 1rem; /* adding margin to side containers*/
  padding-top: 1.5rem;
`;

const ulStyled = styled.ul`
  color: ${primaryBlue.rgb};
  list-style-type: none;
  padding: 0%;
  font-size:0.8rem;
`;

const styledP = styled.p`
  font-weight: bold;
  color: ${primaryWhite.rgb };
  font-size: 0.8rem;
  padding-bottom: 0.4rem;
`;

const styledLi = styled.li`
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
`;

const StyledButton = styled.button`
  margin-left: 0.5rem;
  background: none;
  border:none;
  color: ${props => props.color};

  &:hover{
    color: white;
  }
  `;

class SideMenuFiltersComponent extends Component {

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
            to: "/user/loans",
            logoClasses: "fas fa-user-tag",
            isSelected: false
          }
        ]
      },
      {
        label: "Your Books",
        items: [
          {
            index: 7,
            section: "Readings",
            to: "/user/:id/readings",
            logoClasses: "fas fa-book-open",
            isSelected: false
          },
          {
            index: 8,
            section: "History",
            to: "/user/:id/history",
            logoClasses: "fas fa-history",
            isSelected: false
          },
          {
            index: 9,
            section: "Read Later",
            to: "/user/:id/later",
            logoClasses: "fas fa-bookmark",
            isSelected: false
          },
          {
            index: 10,
            section: "Favorites",
            to: "/user/:id/favorites",
            logoClasses: "fas fa-heart",
            isSelected: false
          }
        ]
      }
    ]
  };


  changeLocation = (resource) => {
    this.props.history.push(resource);
  };

  render() {
    conso
    return (
      <div className="menu-left">
        <div className="menu-box">
          {this.state.sections.map((section) => (
            <div key={section.label} className="menu-box">
              <p>{section.label}</p>

              <ul key={section.label}>
                {section.items.map((item) => {
                  return (
                    <li
                      key={item.index}
                      onClick={() => {
                        this.changeLocation(item.to);
                      }}
                      className={item.to === this.props.resource ? "selected" : ""}
                    >
                      <i className={item.logoClasses}></i>
                      <StyledButton color={item.to === this.props.resource ? primaryBlue.rgb : primaryWhite.rgb}>
                        {item.section}
                      </StyledButton>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(SideMenuFiltersComponent);

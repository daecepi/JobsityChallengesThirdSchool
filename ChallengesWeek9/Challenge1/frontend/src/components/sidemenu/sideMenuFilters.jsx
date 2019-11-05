import React, { Component } from "react";

import { withRouter } from "react-router-dom";



import { MenuBox } from '../../styles';
import { 
  MenuLeft,
  UlStyled,
  StyledP,
  StyledLi,
  StyledI,
  StyledButton
 } from './sideMenuComponentInternals';
 import { primaryBlue, primaryWhite } from '../../styles/colors';

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
            to: "?city=quito",
            logoClasses: "fas fa-globe",
            isSelected: false
          },
          {
            index: 2,
            section: "Cartagena",
            to: "?city=cartagena",
            logoClasses: "fas fa-globe",
            isSelected: false
          },
          {
            index: 3,
            section: "Medellín",
            to: "?city=medellin",
            logoClasses: "fas fa-globe",
            isSelected: false
          },
          {
            index: 4,
            section: "Digital",
            to: "?type=digital",
            logoClasses: "fas fa-tablet-alt",
            isSelected: false
          },
          {
            index: 5,
            section: "Hardcover",
            to: "?type=hardcover",
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

  isSelectedStyling = (item) => {
    return item === this.props.history.location.search ? primaryWhite.rgb : primaryBlue.rgb;
  }

  render() {
    return (
      <MenuLeft>
        <MenuBox>
          {this.state.sections.map((section) => (
            <MenuBox key={section.label}>
              <StyledP>{section.label}</StyledP>

              <UlStyled key={section.label}>
                {section.items.map((item) => {
                  return (
                    <StyledLi
                      key={item.index}
                      onClick={() => {
                        this.changeLocation(item.to);
                      }}
                      className={this.isSelectedStyling(item.to)}
                    >
                      <StyledI style={{color: this.isSelectedStyling(item.to)}} className={item.logoClasses}></StyledI>
                      <StyledButton color={this.isSelectedStyling(item.to)}>
                        {item.section}
                      </StyledButton>
                    </StyledLi>
                  );
                })}
              </UlStyled>
            </MenuBox>
          ))}
        </MenuBox>
      </MenuLeft>
    );
  }
}

export default withRouter(SideMenuFiltersComponent);

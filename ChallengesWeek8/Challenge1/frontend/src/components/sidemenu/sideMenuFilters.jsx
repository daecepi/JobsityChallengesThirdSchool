import React, { Component } from "react";

import { withRouter } from "react-router-dom";



//STYLING
import styled from 'styled-components';
import { MenuBox } from '../../styles';
import { primaryBlue, primaryDark, primaryWhite } from '../../styles/colors';

const MenuLeft = styled.div`
  font-family: "PlutonGeneral", Fallback, sans-serif;
  background: ${primaryDark.rgb};
  padding-left: 1rem; /* adding margin to side containers*/
  padding-right: 1rem; /* adding margin to side containers*/
  padding-top: 1.5rem;
`;

const UlStyled = styled.ul`
  color: ${primaryBlue.rgb};
  list-style-type: none;
  padding: 0%;
  font-size:0.8rem;
`;

const StyledP = styled.p`
  font-weight: bold;
  color: ${primaryWhite.rgb };
  font-size: 0.8rem;
  padding-bottom: 0.4rem;
`;

const StyledLi = styled.li`
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
`;

const StyledI = styled.i`
  icon
  color: ${props => props.color}
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
            to: "/?type=digital",
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

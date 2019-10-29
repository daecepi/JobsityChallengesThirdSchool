import React, { Component } from "react";

import "./searchComponent.scss";


//STYLING
import styled from 'styled-components';
import { primaryBlue, primaryDark, primaryWhite } from '../../styles/colors';


class SearchComponent extends Component {
  state = {};

  handleChange = (event) => {
    this.props.onChange && this.props.onChange(event.target.value);
  };

  render() {
    let { name, type, placeholder, iconClasses } = this.props;
    return (
      <div className="inputWithIcon">
        <input
          type={type}
          name={name}
          className={"primary-input normal-size"}
          placeholder={placeholder}
          onChange={this.handleChange}
        ></input>
        {iconClasses ? <i className={iconClasses} aria-hidden="true"></i> : ""}
      </div>
    );
  }
}

//{iconClasses ? <i className={iconClasses} aria-hidden="true"></i> : ""}
export default SearchComponent;

import React, { Component } from "react";

//Components used
import { PrimaryInput, InputWithIcon, StyledI } from "./searchComponentInternals";

class SearchComponent extends Component {
  state = {};

  handleChange = (event) => {
    this.props.onChange && this.props.onChange(event.target.value);
  };

  handleKeyUp = (event) => {
    this.props.onKeyUp && this.props.onKeyUp(event.which);
  };

  render() {
    let { name, type, placeholder, iconClasses } = this.props;
    return (
      <InputWithIcon>
        <PrimaryInput
          type={type}
          name={name}
          className={"primary-input normal-size"}
          placeholder={placeholder}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
        ></PrimaryInput>
        {iconClasses ? <StyledI className={iconClasses} aria-hidden="true"></StyledI> : ""}
      </InputWithIcon>
    );
  }
}

export default SearchComponent;

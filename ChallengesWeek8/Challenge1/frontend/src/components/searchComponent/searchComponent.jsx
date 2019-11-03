import React, { Component } from "react";


//STYLING
import styled from 'styled-components';
import { primaryBlue } from '../../styles/colors';


const PrimaryInput = styled.input`
  border: 2px solid ${primaryBlue.rgb};
  border-radius: 40px;
  margin: 8px 0;
  outline: none;
  box-sizing: border-box;
  padding: 8px;
  transition: 0.1s;
  width: 100%;
  font-size: 0.7rem;
  height: 2rem;

  ${props => props.width? "width: " + props.width + ";" : "width: 100%;"}

  &:focus{
    border-color: ${primaryBlue.rgb};
    box-shadow: 0 0 8px 0 ${primaryBlue.rgb};
  }
`;

const InputWithIcon = styled.div`
  position: relative;

  & ${PrimaryInput}{
    padding-left: 40px;
  }

  & ${PrimaryInput} + i {
    color: ${primaryBlue.rgb}
  }

  & i {
    position: absolute;
    left: 0;
    top: 8px;
    padding: 9px 8px;
    color: #aaa;
    transition: 0.3s;
  }
`;

const StyledI = styled.i``;

class SearchComponent extends Component {
  state = {};

  handleChange = (event) => {
    this.props.onChange && this.props.onChange(event.target.value);
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
        ></PrimaryInput>
        {iconClasses ? <StyledI className={iconClasses} aria-hidden="true"></StyledI> : ""}
      </InputWithIcon>
    );
  }
}

export default SearchComponent;

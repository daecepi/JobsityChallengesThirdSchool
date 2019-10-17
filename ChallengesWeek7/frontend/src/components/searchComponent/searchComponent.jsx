import React, { Component } from 'react';

import './searchComponent.scss';

class SearchComponent extends Component {

    state={
        name: ""
    }

    handleChange = (event)=>{
        this.props.onchange(event.target.value);
    }

    render() {
        let { type, placeholder, iconClasses } = this.props;
        if (type === 'password') {
            
        }
        return (
            <div className="inputWithIcon">
                <input type={type} placeholder={placeholder+"normal-size"} onChange={this.handleChange}></input>
                {iconClasses ? <i className={iconClasses} aria-hidden="true"></i> : ""}
            </div>
        );
    }
}


//{iconClasses ? <i className={iconClasses} aria-hidden="true"></i> : ""}
export default SearchComponent;
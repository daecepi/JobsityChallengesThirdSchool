import React, { Component } from 'react';

import './searchComponent.scss';

class SearchComponent extends Component {

    constructor(props){
        super(props);

        this.state = { value: "HOla" };
    }

    componentDidMount(){
    }

    handleChange = (event)=>{
        this.props.onchange(event.target.value);
    }

    render() {
        let { type, placeholder, iconClasses } = this.props;
        return (
            <div className="inputWithIcon">
                <input type={type} placeholder={placeholder} onChange={this.handleChange}></input>
                {iconClasses ? <i className={iconClasses} aria-hidden="true"></i> : ""}
            </div>
        );
    }
}


//{iconClasses ? <i className={iconClasses} aria-hidden="true"></i> : ""}
export default SearchComponent;
import React, { Component } from 'react';

//import styling
import './hoverDescriptor.scss';

class HoverDescriptorComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="general-hover-container">
                <div className="hover-desc">
                    <p className="blue-hover-text">{this.props.title.toUpperCase()}</p>
                    <p className="">{this.props.release}</p>
                </div>
                <div className="second-section">
                    <p className="white-hover-text">Novel by</p><p className="gray-hover-text">{this.props.authors}</p>
                </div>
                <div>

                </div>
                <div></div>
                <div></div>
            </div>
         );
    }
}
 
export default HoverDescriptorComponent;
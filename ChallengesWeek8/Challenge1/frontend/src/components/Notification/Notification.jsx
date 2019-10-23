import React, { Component } from 'react';

//Styled compoenents added
import styled from 'styled-components';

const NotificationContainer = styled.div`
    background: $primary-blue-transparent;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1.3rem;
    padding-right: 1.3rem;
    border-radius: 20px;
`


class NotificationComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <NotificationContainer>
                {this.props.message}
            </NotificationContainer>
         );
    }
}
 
export default NotificationComponent;
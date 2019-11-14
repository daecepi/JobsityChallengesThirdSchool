import React, { Component } from 'react';

import { 
    FullHoverContainer,
    StyledForm,
    InputContainer,
    FormLabels,

 } from '../../styles/commons';

class AddingSnippetForm extends Component {
    state = {  }
    render() { 
        return ( 
            <FullHoverContainer>
                <h1>Add clip</h1>
                <StyledForm>
                    
                    <InputContainer>
                        <FormLabels>Start time:</FormLabels>
                        <input />
                    </InputContainer>

                    <InputContainer>
                        <FormLabels>End time:</FormLabels>
                        <input />
                    </InputContainer>
                    <InputContainer>
                        <FormLabels>End time:</FormLabels>
                        <input />
                    </InputContainer>
                    <input type="submit" />
                </StyledForm>
            </FullHoverContainer>
         );
    }
}
 
export default AddingSnippetForm;
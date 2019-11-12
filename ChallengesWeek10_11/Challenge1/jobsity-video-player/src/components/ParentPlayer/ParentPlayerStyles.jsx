import styled from 'styled-components';

/**
 * General container that fixes layout according to parameters given
 */
export const ParentPlayerWrapper = styled.div`
    ${props => props.height ? "height: "+props.height+";" : !props.flex_basis ? "height: 100%;" : ""}
    ${props => props.width ? "width: "+props.width+";" : !props.flex_basis ? "width: 100%;" : ""}
    ${props => props.flex_basis ? "flex_basis: "+props.flex_basis+";" : ""}

    /*Styling*/
    ${props => props}
`;
//STYLING
import styled from 'styled-components';
import { secondaryDark } from '../../styles/colors';

export const BookDiv = styled.div`
display: flex;
flex-basis: 18%;
margin-left: auto;
flex-flow: column;
overflow: hidden;
`;

export const ImageContainer = styled.div`
flex-basis: 83%;
position: relative;
z-index: 1;
`;

export const ImgRef = styled.img`
position: relative;
width: 100%;
height: 100%;
z-index: 10003;
`;

//Style for the books title inthe container
export const BookTitle = styled.p`
font-family: "TitlePluton", Fallback, sans-serif;
overflow: hidden;
white-space: nowrap;
overflow: hidden;
font-weight: bold;
font-size: 0.9rem;
color: ${secondaryDark.rgb};
`;

export const RatingContainer = styled.div`
align-self: flex-start;
justify-self: flex-start;
`;

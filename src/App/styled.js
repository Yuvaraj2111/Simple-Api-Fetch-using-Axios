import styled, { css } from 'styled-components'

export const Card = styled.div`
border: 2px solid;
border-radius:5px;
width:250px;
margin:30px;
padding:20px;
background-color: plum  ;
`;

export const Word = styled.p`
color:${props => props.type === "Name" && "Red"};
${props => props.type === "title" &&
        css`
        font-weight: bold;
        text-align: center;
        color:indigo;
        margin-top: 10px;
    `};
`;
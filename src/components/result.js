import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 100%;
    text-align:center;
`;

const Result = ( {firstCurrency, secondCurrency, amount, output}) => {
    return (
    <StyledDiv>
        <p>{amount === '' ? 1 : amount} {firstCurrency} is equal to</p>
        <h1>{output}</h1><h3> of {secondCurrency}</h3>
    </StyledDiv>
)}

export default Result;
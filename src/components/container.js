import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    color: #fff;
    padding-bottom: calc(75px + 5vh);
`;

const Container = ({children}) => (
    <StyledContainer>{children}</StyledContainer>
)

export default Container;
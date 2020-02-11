import React from 'react'
import styled from 'styled-components'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const StyledList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 15px;

    height:calc(100vh - 56px - 5vh);
    overflow-y: auto;

`;

const StyledListElement = styled.div`
    background-color: #00000075;
    color: #fff;
    padding: 5px;
    text-align: center;
    margin: 5px;
    width: 210px;
`;

const List = ({ list }) => (
    <StyledList>
        {
            list.map(({ code, currency, mid }) =>
            <StyledListElement key={code}>
            <p>{currency}</p>
            <p>{code}</p>
            <p>{mid}</p>
            </StyledListElement>
            )
        }
    </StyledList>
)

export default List;
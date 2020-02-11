import React from 'react'
import styled from 'styled-components'
import { Grid, TextField, MenuItem, Paper, withStyles } from '@material-ui/core';

import CompareArrowsIcon from '@material-ui/icons/CompareArrows';

import Result from './result'

import { StageSpinner } from "react-spinners-kit";

import { API_CONVERT } from '../config/rest'
import axios from 'axios'

const StyledLoaderContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    align-content: center;
    align-items: center;
    height: 156px;
`;

const StyledPaper = withStyles({
    root: {
        padding: '15px',
        margin: '15px'
    },
})(Paper)

const StyledTextFieldGrid = withStyles({
    root: {
        margin: '15px'
    },
})(Grid)

const StyledTextField = withStyles({
    root: {

    },
})(TextField)

const Calculate = ({ list }) => {
    const currencies = list;

    const [firstCurrency, setFirstCurrency] = React.useState('USD');
    const [secondCurrency, setSecondCurrency] = React.useState('USD');
    const [amount, setAmount] = React.useState(1);
    const [output, setOutput] = React.useState(1);
    const [apiResponded, setApiResponded] = React.useState(false);


    React.useEffect(() => {
        setApiResponded(false);
        const convert_url = amount !== 0 ? `${API_CONVERT}/${amount}/${firstCurrency}/${secondCurrency}` :
            `${API_CONVERT}/${firstCurrency}/${secondCurrency}`;

        axios.get(convert_url)
            .then(res => {
                setOutput(res.data.result);
                setApiResponded(true);
                console.log("test");
                
            })
    }, [amount, firstCurrency, secondCurrency])

    const handleChange = (event) => {
        event.target.name === 'select1' ? setFirstCurrency(event.target.value) : setSecondCurrency(event.target.value);
    };

    const handleAmountChange = (event) => {
        const regExp = /^(\d+\.?\d{0,5}|\.\d{1,9})$/;
        let isNumber = regExp.test(event.target.value);
        if (isNumber) setAmount(event.target.value);
        else if (event.target.value === '') setAmount('');
    }

    return (
        <>
            
            {/* <StyledLoaderContainer><StageSpinner /></StyledLoaderContainer> */}
            {apiResponded ? <Result amount={amount} firstCurrency={firstCurrency} secondCurrency={secondCurrency} output={output} /> :
            <StyledLoaderContainer><StageSpinner /></StyledLoaderContainer>}
            <StyledPaper elevation={24}>
                <Grid container justify="center" alignItems="center">
                    <TextField
                        name="select1"
                        variant="outlined"
                        select
                        label="First"
                        value={firstCurrency}
                        onChange={handleChange}
                    >
                        {currencies.map(option => (
                            <MenuItem key={option.code} value={option.code} >
                                {option.code}
                            </MenuItem>
                        ))}
                    </TextField>
                    <CompareArrowsIcon color="primary" fontSize="large" />
                    <TextField
                        name="select2"
                        variant="outlined"
                        select
                        label="Second"
                        value={secondCurrency}
                        onChange={handleChange}
                    >
                        {currencies.map(option => (
                            <MenuItem key={option.code} value={option.code}>
                                {option.code}
                            </MenuItem>
                        ))}
                    </TextField>
                    <StyledTextFieldGrid item xs={12}>
                        <StyledTextField
                            fullWidth={true}
                            id="first-currency"
                            label="Amount of first"
                            variant="outlined"
                            color="primary"
                            value={amount}
                            onChange={handleAmountChange}
                        />
                    </StyledTextFieldGrid>

                </Grid>
            </StyledPaper>
        </>
    )
}

export default Calculate;
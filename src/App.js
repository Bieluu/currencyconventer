import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import { StageSpinner } from "react-spinners-kit";

import styled, { createGlobalStyle } from 'styled-components'

import Container from './components/container'
import Navbar from './components/navbar'

import Calculate from './components/calculate'
import List from './components/list'

import theme from './config/theme'
import { ThemeProvider } from '@material-ui/core/styles';

import getCurrencies from './functions/getCurrencies'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:400,600,900&display=swap');
  body {
    background: #00c6ff;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #0072ff, #00c6ff);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #0072ff, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    margin: 0;
  }
  body *{
      box-sizing: border-box;
      font-family: 'Lato', sans-serif;
      font-weight: 900;
  }
`

const SpinnerContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const App = () => {
    const listOfCurriences = getCurrencies();
    
    return listOfCurriences.length === 0 ? <SpinnerContainer><StageSpinner color="#000" /></SpinnerContainer> :
    (
        <>
            <ThemeProvider theme={theme}>
                <Router basename={process.env.PUBLIC_URL}>
                    <GlobalStyle />
                    <Container>
                        <Route path="/" component={() => <Calculate list={listOfCurriences} />} exact />
                        <Route path="/list" component={() => <List list={listOfCurriences} />} exact />
                        <Navbar />
                    </Container>
                </Router>
            </ThemeProvider>

        </>
    )
}

export default App;
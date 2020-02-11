import React from 'react'
import axios from 'axios'
import { API_LIST } from '../config/rest'


const GetCurrencies = () => {

    const [currenciesList, setCurrenciesList] = React.useState([]);

    React.useEffect(() => {
        axios.get(API_LIST)
            .then(res => {
                setCurrenciesList(res.data)
            })
    }, [])

    return currenciesList;
}

export default GetCurrencies;
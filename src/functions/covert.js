import React from 'react'
import axios from 'axios'
import { API_CONVERT } from '../config/rest'


async function Convert(firstCurrencyCode, secondCurrencyCode, amount){

        const convert_url = amount !== 0 ? `${API_CONVERT}/${amount}/${firstCurrencyCode}/${secondCurrencyCode}` :
        `${API_CONVERT}/${firstCurrencyCode}/${secondCurrencyCode}`
        
        let output = []

        await axios.get(convert_url)
            .then(res => {
                //setOutput(res.data.result);
                output.push(res.data.result)
            })
        return output;

}

export default Convert;
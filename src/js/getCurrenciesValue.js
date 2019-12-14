import React from 'react';
import ReactDOM from 'react-dom';

fetch('http://192.168.1.173:8080/api/convert/all')
    .then((response) => response.json())
    .then((responseJson) => {
        ReactDOM.render(
            <>
                {responseJson.map(currency =>
                    <div key={currency.code} className="col-md-3 mb-3 mb-md-5">
                        <div className="card text-center">
                            <div className="card-header bg-black">
                                <h3>{currency.code}</h3>
                            </div>
                            <div className="card-body">
                                <h4>{currency.currency}</h4>
                                <p>{currency.mid}</p>
                            </div>
                        </div>
                    </div>
                )}
            </>
            , document.getElementById('currenciesList'));
    })
    .catch((error) => {
        //no connection to api
        
    });


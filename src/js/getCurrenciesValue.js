import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

function calculate(){
    let amount = $('#amount').val();
    let firstCurrency = $('#pickFstCur').val();
    let secondCurrency = $('#pickSndCur').val();
    fetch(`http://192.168.1.173:8080/api/convert/${amount}/${firstCurrency}/${secondCurrency}`)
    .then((response) => response.json())
    .then((responseJson) => {
        $("#result").val(responseJson.result);
    })
    .catch((error) => {
        //no connection to api
        ReactDOM.render(
            <>
                <h1 className="mx-auto mt-5">API is not responding</h1>
            </>
            , document.getElementById('pills-calc'));
            console.log(error);
    });
}

fetch(`http://192.168.1.173:8080/api/convert/all`)
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

        ReactDOM.render(
            <>
                <div id="setCurModal1" className="modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">

                        <div className="modal-content bg-black">
                                {responseJson.map(currency =>
                                    <div key={currency.code} className="m-2"><button onClick={() => setCurrency(currency.code, 1)} 
                                    className="btn bg-white col-6" value={currency.code}>{currency.code}
                                <p className="text-black-50">{currency.currency}</p></button></div>)}
                        </div>
                    </div>
                </div>
                <div id="setCurModal2" className="modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">

                        <div className="modal-content bg-black">
                                {responseJson.map(currency =>
                                    <div key={currency.code} className="m-2"><button onClick={() => setCurrency(currency.code, 2)} 
                                    className="btn bg-white col-6" value={currency.code}>{currency.code}
                                <p className="text-black-50">{currency.currency}</p></button></div>)}
                        </div>
                    </div>
                </div>
            </>
            , document.getElementById('currencyListModal'));
    })
    .catch((error) => {
        //no connection to api
        ReactDOM.render(
            <>
                <h1 className="mx-auto mt-5">API is not responding</h1>
            </>
            , document.getElementById('currenciesList'));
        console.log(error);
    });

    function setCurrency(pressedCurrency, which){
        if(which === 1){
            $("#pickFstCur").text(pressedCurrency).val(pressedCurrency);
            calculate();
            $('#setCurModal1').modal('hide');
        }
        else{
            $("#pickSndCur").text(pressedCurrency).val(pressedCurrency);
            calculate();
            $('#setCurModal2').modal('hide');
        }

        }

export default () => calculate();
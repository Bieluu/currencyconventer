import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './navbar';
import Content from './content';
import * as serviceWorker from './serviceWorker';
import 'jquery/src/jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import calculate from './js/getCurrenciesValue.js'
import $ from 'jquery'; 

ReactDOM.render(
    <div>
    <Navbar />
    <Content />
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
    
$('#amount').on('input', function() {
    calculate();
});
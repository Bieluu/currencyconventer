import React from 'react';
import Tabs from './contentTabs';

export default () => {
    return (
        <div className="container-fluid">
            <div className="row text-center">
                <div className="col-md-12">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                        <li className="nav-item mx-auto">
                            <a className="nav-link active" id="pills-calc-tab" data-toggle="pill" href="#pills-calc" role="tab" aria-controls="pills-calc" aria-selected="true"><h3>Exchange calculator</h3></a>
                        </li>
                        <li className="nav-item mx-auto">
                            <a className="nav-link" id="pills-rates-tab" data-toggle="pill" href="#pills-rates" role="tab" aria-controls="pills-rates" aria-selected="false"><h3>Exchange rate$</h3></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Tabs />
            </div>
        </div>
    )

}
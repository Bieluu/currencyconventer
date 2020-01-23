import React from "react"

export default () => {
    return (

        <div className="row mt-5">
            <div className="col-sm-12 text-center">
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-calc" role="tabpanel" aria-labelledby="pills-home-calc">
                        <div className="row">
                            <div className="col-md-7">
                                <h1>€onver₮</h1>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="input-group">
                                    <input id="amount" type="text" className="form-control text-white bg-black"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary bg-black dropdown-toggle"
                                        type="button" id="pickFstCur" value="USD" data-toggle="modal" data-target="#setCurModal1">
                                            USD
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-1 my-auto"><h3>₮o</h3></div>

                            <div className="col-md-4">
                                <div className="input-group">
                                    <input type="text" className="form-control text-white bg-black" id="result" disabled />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary bg-black dropdown-toggle"
                                        type="button" id="pickSndCur" value="USD" data-toggle="modal" data-target="#setCurModal2">
                                            USD
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div id="currencyListModal"></div>
                        </div>



                    </div>
                    <div className="tab-pane fade" id="pills-rates" role="tabpanel" aria-labelledby="pills-rates-tab">
                        <div id="currenciesList" className="row"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
(this.webpackJsonpcurrencyconventer=this.webpackJsonpcurrencyconventer||[]).push([[0],{121:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(12),r=t.n(c),o=(t(76),function(){return l.a.createElement("div",{className:"row mt-5"},l.a.createElement("div",{className:"col-sm-12 text-center"},l.a.createElement("div",{className:"tab-content",id:"pills-tabContent"},l.a.createElement("div",{className:"tab-pane fade show active",id:"pills-calc",role:"tabpanel","aria-labelledby":"pills-home-calc"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-7"},l.a.createElement("h1",null,"\u20aconver\u20ae"))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{id:"amount",type:"text",className:"form-control text-white bg-black"}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-outline-secondary bg-black dropdown-toggle",type:"button",id:"pickFstCur",value:"USD","data-toggle":"modal","data-target":"#setCurModal1"},"USD")))),l.a.createElement("div",{className:"col-md-1 my-auto"},l.a.createElement("h3",null,"\u20aeo")),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"text",className:"form-control text-white bg-black",id:"result",disabled:!0}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-outline-secondary bg-black dropdown-toggle",type:"button",id:"pickSndCur",value:"USD","data-toggle":"modal","data-target":"#setCurModal2"},"USD")))),l.a.createElement("div",{id:"currencyListModal"}))),l.a.createElement("div",{className:"tab-pane fade",id:"pills-rates",role:"tabpanel","aria-labelledby":"pills-rates-tab"},l.a.createElement("div",{id:"currenciesList",className:"row"})))))}),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(77),t(117),t(118);var m=t(5),d=t.n(m);function u(){var e=d()("#amount").val(),a=d()("#pickFstCur").val(),t=d()("#pickSndCur").val();fetch("http://192.168.1.173:8080/api/convert/".concat(e,"/").concat(a,"/").concat(t)).then((function(e){return e.json()})).then((function(e){d()("#result").val(e.result)})).catch((function(e){r.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mx-auto mt-5"},l.a.createElement("h1",null,"API is not responding"),l.a.createElement("button",{className:"btn bg-black",onClick:function(){return window.location.reload()}},"Try again"))),document.getElementById("pills-calc")),console.log(e)}))}function v(e,a){1===a?(d()("#pickFstCur").text(e).val(e),u(),d()("#setCurModal1").modal("hide")):(d()("#pickSndCur").text(e).val(e),u(),d()("#setCurModal2").modal("hide"))}fetch("http://192.168.1.173:8080/api/convert/all").then((function(e){return e.json()})).then((function(e){r.a.render(l.a.createElement(l.a.Fragment,null,e.map((function(e){return l.a.createElement("div",{key:e.code,className:"col-md-3 mb-3 mb-md-5"},l.a.createElement("div",{className:"card text-center"},l.a.createElement("div",{className:"card-header bg-black"},l.a.createElement("h3",null,e.code)),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",null,e.currency),l.a.createElement("p",null,e.mid))))}))),document.getElementById("currenciesList")),r.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"setCurModal1",className:"modal fade",role:"dialog"},l.a.createElement("div",{className:"modal-dialog modal-dialog-centered"},l.a.createElement("div",{className:"modal-content bg-black"},e.map((function(e){return l.a.createElement("div",{key:e.code,className:"m-2"},l.a.createElement("button",{onClick:function(){return v(e.code,1)},className:"btn bg-white col-6",value:e.code},e.code,l.a.createElement("p",{className:"text-black-50"},e.currency)))}))))),l.a.createElement("div",{id:"setCurModal2",className:"modal fade",role:"dialog"},l.a.createElement("div",{className:"modal-dialog modal-dialog-centered"},l.a.createElement("div",{className:"modal-content bg-black"},e.map((function(e){return l.a.createElement("div",{key:e.code,className:"m-2"},l.a.createElement("button",{onClick:function(){return v(e.code,2)},className:"btn bg-white col-6",value:e.code},e.code,l.a.createElement("p",{className:"text-black-50"},e.currency)))})))))),document.getElementById("currencyListModal"))})).catch((function(e){r.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"mx-auto mt-5"},"API is not responding")),document.getElementById("currenciesList")),console.log(e)}));r.a.render(l.a.createElement("div",null,l.a.createElement((function(){return l.a.createElement("nav",{className:"navbar navbar-light mb-3 shadoweffect bg-black"},l.a.createElement("a",{className:"btn btn-default mx-auto text-white",href:"."},l.a.createElement("h2",null,"\u20acurrency \u20aconven\u20aeer")))}),null),l.a.createElement((function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("ul",{className:"nav nav-pills",id:"pills-tab",role:"tablist"},l.a.createElement("li",{className:"nav-item mx-auto"},l.a.createElement("a",{className:"nav-link active",id:"pills-calc-tab","data-toggle":"pill",href:"#pills-calc",role:"tab","aria-controls":"pills-calc","aria-selected":"true"},l.a.createElement("h3",null,"Exchange calculator"))),l.a.createElement("li",{className:"nav-item mx-auto"},l.a.createElement("a",{className:"nav-link",id:"pills-rates-tab","data-toggle":"pill",href:"#pills-rates",role:"tab","aria-controls":"pills-rates","aria-selected":"false"},l.a.createElement("h3",null,"Exchange rate$")))))),l.a.createElement("div",null,l.a.createElement(o,null)))}),null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat(".","/service-worker.js");i?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):s(a,e)}))}}(),d()("#amount").on("input",(function(){u()}))},71:function(e,a,t){e.exports=t(121)},76:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.a2ea9968.chunk.js.map
(this.webpackJsonpcurrencyconventer=this.webpackJsonpcurrencyconventer||[]).push([[0],{107:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(7),o=t.n(c),i=t(14),l=t(44),u=t(24),s=t(34),f=t(15);function m(){var e=Object(i.a)(["\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n    flex-wrap: wrap;\n    color: #fff;\n    padding-bottom: calc(75px + 5vh);\n"]);return m=function(){return e},e}var d=f.b.div(m()),v=function(e){var n=e.children;return r.a.createElement(d,null,n)},p=t(16),g=t(141),h=t(144),b=t(146),E=t(39),y=t.n(E),w=t(71),x=t.n(w),j=Object(g.a)({root:{position:"absolute",bottom:"5px",width:"200px"}}),k=Object(u.e)((function(e){var n=e.history,t=e.location.pathname.substring(1),a=j(),c=r.a.useState(""),o=Object(p.a)(c,2),i=o[0],l=o[1];r.a.useEffect((function(){l(t)}),[t]);return r.a.createElement(h.a,{value:i,onChange:function(e,t){n.push("/"+t),l(t)},className:a.root},r.a.createElement(b.a,{value:"",label:"Calculate",icon:r.a.createElement(y.a,null)}),r.a.createElement(b.a,{value:"list",label:"Rates",icon:r.a.createElement(x.a,null)}))})),O=t(4),S=t(147),C=t(148),W=t(150),A=t(151);function U(){var e=Object(i.a)(["\n    width: 100%;\n    text-align:center;\n"]);return U=function(){return e},e}var F=f.b.div(U()),L=function(e){var n=e.firstCurrency,t=e.secondCurrency,a=e.amount,c=e.output;return r.a.createElement(F,null,r.a.createElement("p",null,""===a?1:a," ",n," is equal to"),r.a.createElement("h1",null,c),r.a.createElement("h3",null," of ",t))},R="https://currency-conventer.herokuapp.com/api",T=R+"/convert",I=t(40),N=t.n(I);function z(){var e=Object(i.a)(["\n    width: 100%;\n    display:flex;\n    justify-content:center;\n    align-content: center;\n    align-items: center;\n    height: 156px;\n"]);return z=function(){return e},e}var B=f.b.div(z()),D=Object(O.a)({root:{padding:"15px",margin:"15px"}})(S.a),J=Object(O.a)({root:{margin:"15px"}})(C.a),P=Object(O.a)({root:{}})(W.a),$=function(e){var n=e.list,t=r.a.useState("USD"),a=Object(p.a)(t,2),c=a[0],o=a[1],i=r.a.useState("USD"),l=Object(p.a)(i,2),u=l[0],f=l[1],m=r.a.useState(1),d=Object(p.a)(m,2),v=d[0],g=d[1],h=r.a.useState(1),b=Object(p.a)(h,2),E=b[0],w=b[1],x=r.a.useState(!1),j=Object(p.a)(x,2),k=j[0],O=j[1];r.a.useEffect((function(){O(!1);var e=0!==v?"".concat(T,"/").concat(v,"/").concat(c,"/").concat(u):"".concat(T,"/").concat(c,"/").concat(u);N.a.get(e).then((function(e){w(e.data.result),O(!0),console.log("test")}))}),[v,c,u]);var S=function(e){"select1"===e.target.name?o(e.target.value):f(e.target.value)};return r.a.createElement(r.a.Fragment,null,k?r.a.createElement(L,{amount:v,firstCurrency:c,secondCurrency:u,output:E}):r.a.createElement(B,null,r.a.createElement(s.StageSpinner,null)),r.a.createElement(D,{elevation:24},r.a.createElement(C.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(W.a,{name:"select1",variant:"outlined",select:!0,label:"First",value:c,onChange:S},n.map((function(e){return r.a.createElement(A.a,{key:e.code,value:e.code},e.code)}))),r.a.createElement(y.a,{color:"primary",fontSize:"large"}),r.a.createElement(W.a,{name:"select2",variant:"outlined",select:!0,label:"Second",value:u,onChange:S},n.map((function(e){return r.a.createElement(A.a,{key:e.code,value:e.code},e.code)}))),r.a.createElement(J,{item:!0,xs:12},r.a.createElement(P,{fullWidth:!0,id:"first-currency",label:"Amount of first",variant:"outlined",color:"primary",value:v,onChange:function(e){/^(\d+\.?\d{0,5}|\.\d{1,9})$/.test(e.target.value)?g(e.target.value):""===e.target.value&&g("")}})))))};function q(){var e=Object(i.a)(["\n    background-color: #00000075;\n    color: #fff;\n    padding: 5px;\n    text-align: center;\n    margin: 5px;\n    width: 210px;\n"]);return q=function(){return e},e}function G(){var e=Object(i.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin: 15px;\n\n    height:calc(100vh - 56px - 5vh);\n    overflow-y: auto;\n\n"]);return G=function(){return e},e}var H=f.b.div(G()),K=f.b.div(q()),M=function(e){var n=e.list;return r.a.createElement(H,null,n.map((function(e){var n=e.code,t=e.currency,a=e.mid;return r.a.createElement(K,{key:n},r.a.createElement("p",null,t),r.a.createElement("p",null,n),r.a.createElement("p",null,a))})))},Q=t(73),V=Object(Q.a)({palette:{primary:{light:"#000",main:"#000",dark:"#000",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}}),X=t(149),Y=function(){var e=r.a.useState([]),n=Object(p.a)(e,2),t=n[0],a=n[1];return r.a.useEffect((function(){N.a.get("https://currency-conventer.herokuapp.com/api/convert/all").then((function(e){a(e.data)}))}),[]),t};function Z(){var e=Object(i.a)(["\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n"]);return Z=function(){return e},e}function _(){var e=Object(i.a)(["\n@import url('https://fonts.googleapis.com/css?family=Lato:400,600,900&display=swap');\n  body {\n    background: #00c6ff;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(to left, #0072ff, #00c6ff);  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to left, #0072ff, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n    margin: 0;\n  }\n  body *{\n      box-sizing: border-box;\n      font-family: 'Lato', sans-serif;\n      font-weight: 900;\n  }\n"]);return _=function(){return e},e}var ee=Object(f.a)(_()),ne=f.b.div(Z()),te=function(){var e=Y();return 0===e.length?r.a.createElement(ne,null,r.a.createElement(s.StageSpinner,{color:"#000"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{theme:V},r.a.createElement(l.a,{basename:"/currencyconventer"},r.a.createElement(ee,null),r.a.createElement(v,null,r.a.createElement(u.a,{path:"/",component:function(){return r.a.createElement($,{list:e})},exact:!0}),r.a.createElement(u.a,{path:"/list",component:function(){return r.a.createElement(M,{list:e})},exact:!0}),r.a.createElement(k,null)))))},ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function re(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(te,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/currencyconventer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/currencyconventer","/service-worker.js");ae?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):re(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):re(n,e)}))}}()},79:function(e,n,t){e.exports=t(107)}},[[79,1,2]]]);
//# sourceMappingURL=main.5b00a522.chunk.js.map
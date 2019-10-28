(this.webpackJsonpcatfriends=this.webpackJsonpcatfriends||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),i=n(4),s=n(3),l=n(17),u=n(18),h=(n(29),n(19));function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={searchField:""},g={cats:[],isPending:!1,error:""},b=n(6),E=n(7),v=n(9),m=n(8),w=n(10),y=function(e){function t(){return Object(b.a)(this,t),Object(v.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return a.a.createElement("h1",{className:"f1"},"Cat Friends")}}]),t}(a.a.Component),O=function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{src:"https://robohash.org/".concat(t,"?set=set4&size=250x250"),alt:"cat"}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,r)))},C=Object(s.b)((function(e){return{cats:e.requestCats.cats,isPending:e.requestCats.isPending,searchField:e.searchCats.searchField}}),(function(e){return{requestCats:function(){return e((function(e){e({type:"REQUEST_CATS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_CATS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_CATS_FAILED",payload:t})}))}))}}}))((function(e){var t=e.cats,n=e.isPending,c=e.searchField,o=e.requestCats;Object(r.useEffect)((function(){o()}),[o]);var i=t.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return n?a.a.createElement("h1",{className:"tc"},"Loading ..."):a.a.createElement("div",null,i.map((function(e){return a.a.createElement(O,Object.assign({key:e.id},e))})))})),j=Object(s.b)(null,(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})}}}))((function(e){var t=e.onSearchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{"aria-label":"Search Cats",className:"pa3 ba b--green bg-lightest-blue",type:"text",placeholder:"Search",onChange:t}))})),S=function(e){return a.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"500px"}},e.children)},P=function(e){function t(){var e,n;Object(b.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(v.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={hasError:!1},n}return Object(w.a)(t,e),Object(E.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oops. Something went wrong !"):this.props.children}}]),t}(a.a.Component),A=(n(30),function(){return a.a.createElement("div",{className:"tc"},a.a.createElement(y,null),a.a.createElement(j,null),a.a.createElement(S,null,a.a.createElement(P,null,a.a.createElement(C,null))))}),k=(n(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N=Object(l.createLogger)(),T=Object(i.c)({searchCats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return f({},e,{searchField:t.payload});default:return e}},requestCats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_CATS_PENDING":return f({},e,{isPending:!0});case"REQUEST_CATS_SUCCESS":return f({},e,{cats:t.payload,isPending:!1});case"REQUEST_CATS_FAILED":return f({},e,{error:t.payload,isPending:!1});default:return e}}}),D=Object(i.d)(T,Object(i.a)(u.a,N));o.a.render(a.a.createElement(s.a,{store:D},a.a.createElement(A,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/cat-friends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/cat-friends","/service-worker.js");k?(!function(e,t){fetch(e).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_(t,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.60e893a9.chunk.js.map
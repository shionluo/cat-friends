(this.webpackJsonpcatfriends=this.webpackJsonpcatfriends||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),i=n(4),s=n(3),l=n(17),u=n(18),h=(n(29),n(19));function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={searchField:""},E={cats:[],isPending:!1,error:""},m=n(6),b=n(7),g=n(9),y=n(8),O=n(10),v=function(e){function t(){return Object(m.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return a.a.createElement("h1",{className:"f1"},"Cat Friends")}}]),t}(a.a.Component),j=function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{src:"https://robohash.org/".concat(t,"?set=set4&size=250x250"),alt:"cat"}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,r)))},C=Object(s.b)((function(e){return{cats:e.requestCats.cats,isPending:e.requestCats.isPending,searchField:e.searchCats.searchField}}),(function(e){return{requestCats:function(){return e((function(e){e({type:"REQUEST_CATS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_CATS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_CATS_FAILED",payload:t})}))}))}}}))((function(e){var t=e.cats,n=e.isPending,c=e.searchField,o=e.requestCats;Object(r.useEffect)((function(){o()}),[o]);var i=t.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return n?a.a.createElement("h1",{className:"tc"},"Loading ..."):a.a.createElement("div",null,i.map((function(e){return a.a.createElement(j,Object.assign({key:e.id},e))})))})),S=Object(s.b)(null,(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})}}}))((function(e){var t=e.onSearchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"text",placeholder:"Search",onChange:t}))})),w=function(e){return a.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"500px"}},e.children)},P=function(e){function t(){var e,n;Object(m.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(g.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(a)))).state={hasError:!1},n}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oops. Something went wrong !"):this.props.children}}]),t}(a.a.Component),_=(n(30),function(){return a.a.createElement("div",{className:"tc"},a.a.createElement(v,null),a.a.createElement(S,null),a.a.createElement(w,null,a.a.createElement(P,null,a.a.createElement(C,null))))});n(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=Object(l.createLogger)(),N=Object(i.c)({searchCats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return p({},e,{searchField:t.payload});default:return e}},requestCats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_CATS_PENDING":return p({},e,{isPending:!0});case"REQUEST_CATS_SUCCESS":return p({},e,{cats:t.payload,isPending:!1});case"REQUEST_CATS_FAILED":return p({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(i.d)(N,Object(i.a)(u.a,A));o.a.render(a.a.createElement(s.a,{store:T},a.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.9029bd71.chunk.js.map
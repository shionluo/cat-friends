(this.webpackJsonpcatfriends=this.webpackJsonpcatfriends||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),o=(a(14),a(1)),s=function(e){var t=e.id,a=e.name,n=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?set=set4&size=250x250"),alt:"cat"}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))},i=function(e){var t=e.cats;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(s,{key:e.id,id:e.id,name:e.name,email:e.email})})))},u=function(e){var t=e.onSearchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"text",placeholder:"Search",onChange:t}))},h=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"500px"}},e.children)},m=a(4),d=a(5),f=a(7),p=a(6),E=a(8),b=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops. Something went wrong !"):this.props.children}}]),t}(r.a.Component),g=(a(15),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),m=s[0],d=s[1];Object(n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]);var f=a.filter((function(e){return e.name.toLowerCase().includes(m.toLowerCase())}));return a.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Cat Friends"),r.a.createElement(u,{onSearchChange:function(e){d(e.target.value)}}),r.a.createElement(h,null,r.a.createElement(b,null,r.a.createElement(i,{cats:f})))):r.a.createElement("h1",{className:"tc"},"Loading ...")});a(16);l.a.render(r.a.createElement(g,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.ae393e65.chunk.js.map
(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,a){},,function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var r=a(1),n=a.n(r),c=a(8),s=a.n(c),i=(a(14),a(7)),o=a.n(i),h=a(9),u=a(2),l=a(3),j=a(5),d=a(4),p=(a(16),a(17),a.p+"static/media/logo.de13d484.png"),b=a(0);var O=function(){return Object(b.jsx)("header",{children:Object(b.jsx)("figure",{className:"logo",children:Object(b.jsx)("img",{src:p,alt:"Rick and Morty logo"})})})},f=(a(19),function(t){Object(j.a)(a,t);var e=Object(d.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("figure",{className:"Character__avatar",children:[Object(b.jsx)("img",{src:this.props.character.image,alt:this.props.character.name}),Object(b.jsx)("figcaption",{children:this.props.character.name})]})}}]),a}(n.a.Component)),g=(a(20),function(t){Object(j.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={date:new Date},t}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("footer",{children:Object(b.jsxs)("p",{children:["Rick and Morty App | \xa9 ",this.state.date.getFullYear()]})})}}]),a}(n.a.Component)),m=a.p+"static/media/loader.08d91f26.svg",x=function(t){Object(j.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={page:1,loading:!0,error:null,data:[]},t}return Object(l.a)(a,[{key:"getCharacters",value:function(){var t=Object(h.a)(o.a.mark((function t(){var e,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0,error:null}),t.prev=1,t.next=4,fetch("https://rickandmortyapi.com/api/character/?page=".concat(this.state.page));case 4:return e=t.sent,t.next=7,e.json();case 7:a=t.sent,this.setState({page:this.state.page+1,loading:!1,data:[].concat(this.state.data,a.results)}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),this.setState({loading:!1,error:t.t0.message});case 14:case"end":return t.stop()}}),t,this,[[1,11]])})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getCharacters()}},{key:"render",value:function(){var t=this;return this.state.error?Object(b.jsx)("div",{className:"error",children:"Error: ".concat(this.error)}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{}),Object(b.jsxs)("main",{children:[Object(b.jsxs)("ul",{className:"Characters__container",children:[this.state.data.map((function(t){return Object(b.jsx)("li",{className:"Character__card",children:Object(b.jsx)(f,{character:t})},t.id)})),this.state.loading&&Object(b.jsx)("figure",{children:Object(b.jsx)("img",{src:m,alt:"Loader"})})]}),!this.state.loading&&Object(b.jsx)("button",{type:"button",className:"btn",onClick:function(){return t.getCharacters()},children:"Show more"})]}),Object(b.jsx)(g,{})]})}}]),a}(n.a.Component);s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.f84f707e.chunk.js.map
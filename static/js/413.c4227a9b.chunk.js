"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[413],{315:function(e,t,n){n.d(t,{T:function(){return a}});var r=n(184),a=function(){return(0,r.jsx)("a",{href:"https://www.themoviedb.org/",target:"_blanck",className:"logo",children:(0,r.jsx)("img",{src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",alt:"logo-api"})})}},134:function(e,t,n){n.d(t,{Bt:function(){return d},E3:function(){return l},m4:function(){return f},t5:function(){return o},yw:function(){return p}});var r=n(861),a=n(757),c=n.n(a),u=n(44),s="https://api.themoviedb.org/3/",i="fad6989dda3803c9fb66ec36be17ab2f",o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("".concat(s,"trending/all/day?api_key=").concat(i,"&language=uk&page=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("".concat(s,"movie/").concat(t,"?api_key=").concat(i,"&language=uk"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("".concat(s,"search/movie?api_key=").concat(i,"&language=uk&page=1&include_adult=false&query=").concat(t,"&page=").concat(n));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=uk"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},282:function(e,t,n){n.d(t,{h:function(){return u}});var r=n(731),a=n(184),c=[{href:"/",text:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"},{href:"movies",text:"\u0424\u0456\u043b\u044c\u043c\u0438"}],u=function(){return c.map((function(e){var t=e.href,n=e.text;return(0,a.jsx)(r.OL,{className:"header-nav__item",to:t,children:n},t)}))}},413:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(982),a=n(861),c=n(885),u=n(757),s=n.n(u),i=n(791),o=n(731),f=n(204);function l(e){var t=(0,i.useRef)();return(0,i.useEffect)((function(){t.current=e})),t.current}var p=n(134),d=n(184);function v(e){var t=e.onSubmit,n=(0,i.useState)(""),r=(0,c.Z)(n,2),a=r[0],u=r[1];return(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===a.trim()&&alert("\u0411\u0443\u0434\u044c\u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0444\u0456\u043b\u044c\u043c\u0443!"),t(a),u("")},children:[(0,d.jsx)("input",{onChange:function(e){var t=e.target.value;u(t)},name:"searchName",value:a,type:"text",autoFocus:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430 \u0444\u0456\u043b\u044c\u043c\u0443"}),(0,d.jsx)("button",{className:"input-btn",type:"submit",children:"\u041f\u043e\u0448\u0443\u043a"})]})}var h=n(111),m=n(282),g=n(315);function x(){var e,t=(0,i.useState)(null!==(e=JSON.parse(localStorage.getItem("listmovies")))&&void 0!==e?e:[]),n=(0,c.Z)(t,2),u=n[0],x=n[1],b=(0,i.useState)(!1),k=(0,c.Z)(b,2),w=k[0],j=k[1],y=(0,i.useState)(""),Z=(0,c.Z)(y,2),_=Z[0],N=Z[1],S=(0,i.useState)(1),O=(0,c.Z)(S,2),E=O[0],P=O[1],C=(0,o.lr)(),q=(0,c.Z)(C,2),B=q[0],I=q[1],J=B.get("searchQuery"),L=l(E),Q=l(J);(0,i.useEffect)((function(){window.localStorage.setItem("listmovies",JSON.stringify(u))}),[u]),(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,(0,p.E3)(J,E);case 4:if(t=e.sent,0!==(n=t.results).length){e.next=8;break}return e.abrupt("return",alert("\u041d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u0441\u043f\u0440\u043e\u0431\u0443\u0439 \u0449\u0435 \u0440\u0430\u0437..."));case 8:x(1===E?(0,r.Z)(n):function(e){return[].concat((0,r.Z)(e),(0,r.Z)(n))}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),N(e.t0);case 14:return e.prev=14,j(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}();if(J){if(!(E>L))return Q!==J&&E===L?(e(J,1),void T()):void 0;e(J,E)}}),[J,E,L,Q]);var T=function(){P(1)},D=Boolean(u.length);return(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"background",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)("div",{className:"header-nav",children:[(0,d.jsx)(m.h,{}),(0,d.jsx)(g.T,{})]}),(0,d.jsx)("h3",{className:"movies-title",children:"\u0411\u0443\u0434\u044c\u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0444\u0456\u043b\u044c\u043c\u0443:"}),(0,d.jsx)(v,{onSubmit:function(e){I({searchQuery:e})}}),w?(0,d.jsx)(f.a,{}):(0,d.jsx)("p",{}),_&&(0,d.jsx)("h4",{children:"\u0423\u043f\u0441\u0441\u0441...\u0429\u043e\u0441\u044c \u0437\u043b\u0430\u043c\u0430\u043b\u043e\u0441\u044f... \u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0449\u0435..."}),u&&(0,d.jsx)(h.O,{movies:u}),D&&(0,d.jsx)("div",{className:"centre",children:(0,d.jsx)("button",{type:"button",onClick:function(){P((function(e){return e+1}))},className:"btn",children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0431\u0456\u043b\u044c\u0448\u0435"})})]})})})}},111:function(e,t,n){n.d(t,{O:function(){return c}});var r=n(731),a=n(184);function c(e){var t=e.movies.map((function(e){var t=e.id,n=e.title,c=e.name,u=e.backdrop_path;return(0,a.jsx)("li",{className:"trending-list__item",children:(0,a.jsxs)(r.OL,{className:"trending-list__item--link",to:"/movies/".concat(t),children:[(0,a.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w300").concat(u),alt:n}),(0,a.jsx)("p",{className:"movie-name",children:n||c})]})},t)}));return(0,a.jsx)("ul",{className:"tranding-list",children:t})}}}]);
//# sourceMappingURL=413.c4227a9b.chunk.js.map
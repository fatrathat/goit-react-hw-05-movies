"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[112],{5112:function(n,e,r){r.r(e),r.d(e,{default:function(){return d}});var t=r(885),a=r(2791),c=r(6871),i=r(722),u=r(501),s=r(184),o=function(n){var e=n.id;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"Additional info"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"/movies/".concat(e,"/cast"),children:"Cast"})}),(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"/movies/".concat(e,"/reviews"),children:"Reviews"})})]})]})},p=function(n){var e=n.data,r=e.poster_path,t=e.title,a=e.vote_average,c=e.overview,i=e.genres;return(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(r),alt:t}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:t}),(0,s.jsxs)("p",{children:["User Score: ",a]}),(0,s.jsx)("h3",{children:"Overview"}),(0,s.jsx)("p",{children:c}),(0,s.jsx)("h3",{children:"Genres"}),(0,s.jsx)("ul",{children:i.map((function(n){var e=n.id,r=n.name;return(0,s.jsx)("li",{children:r},e)}))})]})]})},d=function(){var n=(0,c.UO)().movieId,e=(0,a.useState)(null),r=(0,t.Z)(e,2),u=r[0],d=r[1],f=(0,c.s0)();(0,a.useEffect)((function(){(0,i.IY)(n).then((function(n){d(n)}))}),[n]);return(0,s.jsxs)(s.Fragment,{children:[u&&(0,s.jsxs)("div",{children:[(0,s.jsx)("button",{type:"button",onClick:function(){f("/")},children:"Go back"}),(0,s.jsx)(p,{data:u}),(0,s.jsx)(o,{id:n})]}),(0,s.jsx)(c.j3,{})]})}},722:function(n,e,r){r.d(e,{GZ:function(){return h},IY:function(){return d},MX:function(){return f},Rb:function(){return p},k8:function(){return o}});var t=r(5861),a=r(7757),c=r.n(a),i=r(4569),u=r.n(i);u().defaults.baseURL="https://api.themoviedb.org/3";var s="1dcb7ff436b06c9d19a245395e14e0a7",o=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()("/trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()("/search/movie?api_key=".concat(s,"&query=").concat(e,"&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()("/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()("/movie/".concat(e,"/reviews?api_key=").concat(s,"&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=112.facbddfd.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{9874:function(n,t,r){r.d(t,{Z:function(){return c}});var e=r(501),a="style_MovieList__g5bx3",u=r(184),c=function(n){var t=n.data;return(0,u.jsx)("ul",{className:a,children:t.map((function(n){var t=n.title,r=n.id;return(0,u.jsx)("li",{children:(0,u.jsx)(e.rU,{to:"/movies/".concat(r),children:t})},r)}))})}},9544:function(n,t,r){r.r(t);var e=r(885),a=r(2791),u=r(722),c=r(9874),i=r(184);t.default=function(){var n=(0,a.useState)(null),t=(0,e.Z)(n,2),r=t[0],o=t[1];return(0,a.useEffect)((function(){(0,u.k8)().then((function(n){var t=n.results;o(t)}))}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:"Trending today"}),r&&(0,i.jsx)(c.Z,{data:r})]})}},722:function(n,t,r){r.d(t,{GZ:function(){return d},IY:function(){return p},MX:function(){return v},Rb:function(){return f},k8:function(){return s}});var e=r(5861),a=r(7757),u=r.n(a),c=r(4569),i=r.n(c);i().defaults.baseURL="https://api.themoviedb.org/3";var o="1dcb7ff436b06c9d19a245395e14e0a7",s=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("/trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("/search/movie?api_key=".concat(o,"&query=").concat(t,"&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("/movie/".concat(t,"/credits?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("/movie/".concat(t,"/reviews?api_key=").concat(o,"&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.737a2929.chunk.js.map
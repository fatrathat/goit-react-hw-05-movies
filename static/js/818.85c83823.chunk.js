"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[818],{5818:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(885),a=t(2791),c=t(6871),s=t(722),i=t(501),u="style_AdditionalInfoList__Gx6-X",o=t(184),d=function(e){var n=e.id;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:"Additional info"}),(0,o.jsxs)("ul",{className:u,children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/movies/".concat(n,"/cast"),children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/movies/".concat(n,"/reviews"),children:"Reviews"})})]})]})},l="style_MovieCard__RtYZl",f="style_MovieInfo__IaHuW",p="style_MovieInfoList__mqr6M",v="style_MovieInfoListItem__xc--r",h=function(e){var n=e.data,t=n.poster_path,r=n.title,a=n.vote_average,c=n.overview,s=n.genres;return(0,o.jsxs)("div",{className:l,children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(t),alt:r}),(0,o.jsxs)("div",{className:f,children:[(0,o.jsx)("h2",{children:r}),(0,o.jsxs)("p",{children:["User Score: ",Math.round(10*a),"%"]}),(0,o.jsx)("h3",{children:"Overview"}),(0,o.jsx)("p",{children:c}),(0,o.jsx)("h3",{children:"Genres"}),(0,o.jsx)("ul",{className:p,children:s.map((function(e){var n=e.id,t=e.name;return(0,o.jsx)("li",{className:v,children:t},n)}))})]})]})},x=function(){var e=(0,c.UO)().movieId,n=(0,a.useState)(null),t=(0,r.Z)(n,2),i=t[0],u=t[1],l=(0,c.s0)();(0,a.useEffect)((function(){(0,s.IY)(e).then((function(e){u(e)}))}),[e]);return(0,o.jsxs)(o.Fragment,{children:[i&&(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{type:"button",onClick:function(){l("/")},children:"Go back"}),(0,o.jsx)(h,{data:i}),(0,o.jsx)(d,{id:e})]}),(0,o.jsx)(c.j3,{})]})}},722:function(e,n,t){t.d(n,{GZ:function(){return p},IY:function(){return l},MX:function(){return f},Rb:function(){return d},k8:function(){return o}});var r=t(5861),a=t(7757),c=t.n(a),s=t(4569),i=t.n(s);i().defaults.baseURL="https://api.themoviedb.org/3";var u="1dcb7ff436b06c9d19a245395e14e0a7",o=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()("/trending/movie/day?api_key=".concat(u));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()("/search/movie?api_key=".concat(u,"&query=").concat(n,"&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()("/movie/".concat(n,"?api_key=").concat(u,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()("/movie/".concat(n,"/credits?api_key=").concat(u));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()("/movie/".concat(n,"/reviews?api_key=").concat(u,"&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=818.85c83823.chunk.js.map
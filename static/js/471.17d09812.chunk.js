"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[471],{9471:function(t,n,r){r.r(n),r.d(n,{default:function(){return p}});var e=r(885),a=r(2791),c=r(6871),u=r(722),i=r(9201),o=r(184),s=function(t){var n=t.data;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{children:n.map((function(t){var n=t.id,r=t.profile_path,e=t.name,a=t.character;return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w200/"+r:i,alt:e}),(0,o.jsx)("p",{children:e}),(0,o.jsxs)("p",{children:["Character: ",a]})]},n)}))})})},p=function(){var t=(0,c.UO)().movieId,n=(0,a.useState)(null),r=(0,e.Z)(n,2),i=r[0],p=r[1];return(0,a.useEffect)((function(){(0,u.MX)(t).then((function(t){var n=t.cast;p(n)}))}),[t]),(0,o.jsx)(o.Fragment,{children:i&&(0,o.jsx)(s,{data:i})})}},722:function(t,n,r){r.d(n,{GZ:function(){return h},IY:function(){return f},MX:function(){return d},Rb:function(){return p},k8:function(){return s}});var e=r(5861),a=r(7757),c=r.n(a),u=r(4569),i=r.n(u);i().defaults.baseURL="https://api.themoviedb.org/3";var o="1dcb7ff436b06c9d19a245395e14e0a7",s=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i()("/trending/movie/day?api_key=".concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i()("/search/movie?api_key=".concat(o,"&query=").concat(n,"&page=1"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i()("/movie/".concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i()("/movie/".concat(n,"/credits?api_key=").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i()("/movie/".concat(n,"/reviews?api_key=").concat(o,"&page=1"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},9201:function(t,n,r){t.exports=r.p+"static/media/photo.e0c15fa2b3c34db88066.jpg"}}]);
//# sourceMappingURL=471.17d09812.chunk.js.map
"use strict";(self.webpackChunkreact_mini_app_movies_routing=self.webpackChunkreact_mini_app_movies_routing||[]).push([[433],{687:function(n,t,r){r.d(t,{Df:function(){return i},TP:function(){return f},tx:function(){return v},z1:function(){return s},zv:function(){return p}});var e=r(861),c=r(757),a=r.n(c),u="904cc36a32d92a605c14a646cc21fc67",o="https://api.themoviedb.org/3",i=function(){var n=(0,e.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/trending/movie/day?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/search/movie?api_key=").concat(u,"&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"?api_key=").concat(u));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(u));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(u));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},11:function(n,t,r){r.r(t),r.d(t,{default:function(){return d}});var e=r(861),c=r(439),a=r(757),u=r.n(a),o=r(791),i=r(87),s=r(687),f="Home_container__MGYYT",p="Home_title__XLxL1",v="Home_list__axoM8",h="Home_item__KHBnP",m="Home_link__nk6bm",l=r(184),d=function(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),r=t[0],a=t[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Df)();case 2:t=n.sent,a(t.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,l.jsxs)("div",{className:f,children:[(0,l.jsx)("h2",{className:p,children:"Trending today"}),(0,l.jsx)("ul",{className:v,children:r.map((function(n){return(0,l.jsx)("li",{className:h,children:(0,l.jsx)(i.rU,{to:"/movies/".concat(n.id),className:m,children:n.title})},n.id)}))})]})}},861:function(n,t,r){function e(n,t,r,e,c,a,u){try{var o=n[a](u),i=o.value}catch(s){return void r(s)}o.done?t(i):Promise.resolve(i).then(e,c)}function c(n){return function(){var t=this,r=arguments;return new Promise((function(c,a){var u=n.apply(t,r);function o(n){e(u,c,a,o,i,"next",n)}function i(n){e(u,c,a,o,i,"throw",n)}o(void 0)}))}}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=433.c53c036b.chunk.js.map
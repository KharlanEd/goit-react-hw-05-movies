"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[11],{338:function(e,r,t){t.d(r,{a:function(){return i}});var n=t(402),a=t(184),i=function(e){var r=e.isloding;return(0,a.jsx)(n.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:r})}},407:function(e,r,t){t.d(r,{Hx:function(){return d},Y5:function(){return v},bI:function(){return u},wr:function(){return o},xc:function(){return f}});var n=t(861),a=t(757),i=t.n(a),s=t(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var c={params:{api_key:"b5dbc40d665affe8ed0bac71106b3fa8"}},o=function(){var e=(0,n.Z)(i().mark((function e(){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day",c);case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?query=".concat(r),c);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(r),c);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(r,"/credits"),c);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(r,"/reviews"),c);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},11:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(861),a=t(439),i=t(757),s=t.n(i),c=t(338),o=t(87),u=t(689),v=t(223),f=t(184),d=function(e){var r,t,n,a,i,s=e.movieInfo,c=s.poster_path,d=s.original_title,p=s.vote_average,l=s.overview,h=s.genres,m=void 0===h?[]:h,x=(0,u.TH)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.rU,{to:null===(r=x.state)||void 0===r?void 0:r.from,children:"Go Back "}),(0,f.jsx)("div",{className:v.Z.container,children:(0,f.jsxs)("div",{className:v.Z.container_text,children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(c),alt:d}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:d}),(0,f.jsxs)("p",{children:["User score:",p]}),(0,f.jsx)("h3",{children:"Overviem"}),(0,f.jsx)("p",{children:l}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("p",{children:m.map((function(e){return e.name})).join(" | ")})]})]})}),(0,f.jsx)(o.rU,{state:{from:null!==(t=null===(n=x.state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/movies"},to:"cast",children:"Cast"}),(0,f.jsx)(o.rU,{state:{from:null!==(a=null===(i=x.state)||void 0===i?void 0:i.from)&&void 0!==a?a:"/movies"},to:"reviews",children:"Reviews"}),(0,f.jsx)(u.j3,{})]})},p=t(791),l=t(407);var h=function(){var e=(0,p.useState)([]),r=(0,a.Z)(e,2),t=r[0],i=r[1],o=(0,p.useState)(!1),h=(0,a.Z)(o,2),m=h[0],x=h[1],w=(0,u.UO)(),j=null===w||void 0===w?void 0:w.movieId;return(0,p.useEffect)((function(){function e(){return(e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,l.Y5)(j);case 4:r=e.sent,i(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[j]),(0,f.jsxs)("div",{className:v.Z.container,children:[(0,f.jsx)(d,{movieInfo:t}),(0,f.jsx)(c.a,{isloding:m})]})}}}]);
//# sourceMappingURL=11.102a6fc5.chunk.js.map
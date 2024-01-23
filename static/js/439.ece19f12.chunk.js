"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[439],{9026:function(t,e,r){r.d(e,{Df:function(){return i},IQ:function(){return f},Jh:function(){return l},on:function(){return p},yK:function(){return s}});var n=r(5861),a=r(7757),c=r.n(a),o=r(5294);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="b13a6e3c9d2e20c10a5994198d76146d",s=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("/movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),console.error("Error fetching movie by ID:",t.t0.message),t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("/trending/all/day?api_key=".concat(u));case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:throw t.prev=8,t.t0=t.catch(0),console.error("Error fetching trending movies:",t.t0.message),t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("/search/movie?query=".concat(e,"&api_key=").concat(u));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),console.error("Error fetching search results:",t.t0.message),t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("/movie/".concat(e,"/credits?api_key=").concat(u));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),console.error("Error fetching cast information:",t.t0.message),t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(u));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),console.error("Error fetching reviews:",t.t0.message),t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},4167:function(t,e,r){r.r(e),r.d(e,{default:function(){return y}});var n,a,c,o,u=r(5861),s=r(9439),i=r(7757),p=r.n(i),f=r(2791),l=r(7689),h=r(9026),d=r(168),v=r(7924),g=v.ZP.ul(n||(n=(0,d.Z)(["\n  /* padding-left: 20px; */\n  padding-top: 20px;\n  padding-bottom: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n\n  background-color: #1d1e1f;\n  padding-inline-start: 0;\n"]))),m=v.ZP.img(a||(a=(0,d.Z)(["\n  height: 406px;\n  width: 271px;\n"]))),w=v.ZP.li(c||(c=(0,d.Z)(["\n  list-style: none;\n"]))),x=v.ZP.p(o||(o=(0,d.Z)(["\n  color: white;\n  padding-top: 20px;\n  font-size: 22px;\n  font-weight: 500;\n  text-align: center;\n"]))),Z=r.p+"static/media/defaultImg.766050a83a9c288363de.png",k=r(184),y=function(){var t=(0,l.UO)().movieId,e=(0,f.useState)([]),r=(0,s.Z)(e,2),n=r[0],a=r[1],c=(0,f.useState)(!0),o=(0,s.Z)(c,2)[1],i=(0,f.useState)(null),d=(0,s.Z)(i,2)[1];return(0,f.useEffect)((function(){var e=function(){var e=(0,u.Z)(p().mark((function e(){var r,n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.IQ)(t);case 3:r=e.sent,n=r.cast,a(n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching cast:",e.t0.message),d("Error fetching cast data.");case 12:return e.prev=12,o(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,k.jsx)(g,{children:n.map((function(t){var e=t.profile_path,r=t.id,n=t.original_name;return(0,k.jsxs)(w,{children:[(0,k.jsx)(m,{src:e?"https://image.tmdb.org/t/p/w300".concat(e):"".concat(Z),alt:n}),(0,k.jsx)(x,{children:n})]},r)}))})}}}]);
//# sourceMappingURL=439.ece19f12.chunk.js.map
(this["webpackJsonpunsplash-gallery"]=this["webpackJsonpunsplash-gallery"]||[]).push([[0],{26:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),s=c.n(a),r=c(4),i=c.n(r),l=c(3),o=c(2),u=c(11),j={items:[]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;return"FETCH_ITEMS"===t.type?Object(u.a)(Object(u.a)({},e),{},{items:t.payload}):e},b=Object(o.c)({items:d}),O=c(13),m=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),p=Object(o.e)(b,Object(o.d)(Object(o.a)(O.a),m)),f=c(10),h=(c(26),function(e){var t=e.onClose,c=e.active,a=e.url;return Object(n.jsx)("div",{className:c?"modal active":"modal",onClick:t,children:Object(n.jsx)("div",{className:"modal__img",onClick:t,children:Object(n.jsx)("img",{src:a,onClick:t,alt:"result"})})})}),v=c(9),x=c.n(v),_=c(14);function g(e){return function(){var t=Object(_.a)(x.a.mark((function t(c){var n,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch('https://api.unsplash.com/search/photos?per_page=30&query="'.concat(e,'"&client_id=').concat("ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"));case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,c({type:"FETCH_ITEMS",payload:a.results});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}c(28);var N=function(){var e=Object(l.b)(),t=Object(a.useState)(null),c=Object(f.a)(t,2),s=c[0],r=c[1],i=Object(a.useState)(""),o=Object(f.a)(i,2),u=o[0],j=o[1],d=Object(l.c)((function(e){return e.items.items}));return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("div",{className:"input",children:[Object(n.jsx)("input",{type:"text",onChange:function(e){j(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&e(g(u))}}),Object(n.jsx)("button",{onClick:function(t){e(g(u))},children:"Search"})]}),d.map((function(e,t){return Object(n.jsxs)("div",{className:"image-container",id:t,onClick:function(){return r(e)},children:[Object(n.jsx)("img",{className:"image",src:e.urls.regular,alt:"logo"}),Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)("img",{className:"avatar",src:e.user.profile_image.small,alt:"avatar"}),Object(n.jsxs)("div",{className:"text",children:[Object(n.jsx)("p",{className:"name",children:e.user.username}),Object(n.jsx)("p",{className:"name",children:e.alt_description})]})]})]},e.id)})),s&&Object(n.jsx)(h,{active:!0,onClose:function(){return r(null)},url:s.urls.regular})]})};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(l.a,{store:p,children:Object(n.jsx)(N,{})})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.a3352324.chunk.js.map
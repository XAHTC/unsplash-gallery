(this["webpackJsonpunsplash-gallery"]=this["webpackJsonpunsplash-gallery"]||[]).push([[0],{26:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),s=c.n(n),r=c(4),i=c.n(r),l=c(3),o=c(2),u=c(10),j={items:[]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;return"FETCH_ITEMS"===t.type?Object(u.a)(Object(u.a)({},e),{},{items:t.payload}):e},m=Object(o.c)({items:d}),b=c(12),p=Object(o.d)(m,Object(o.a)(b.a)),f=c(14),O=(c(26),function(e){var t=e.onClose,c=e.active,n=e.url;return Object(a.jsx)("div",{className:c?"modal active":"modal",onClick:t,children:Object(a.jsx)("div",{className:"modal__img",onClick:t,children:Object(a.jsx)("img",{src:n,onClick:t})})})}),h=c(9),v=c.n(h),x=c(13);c(28);var g=function(){var e=Object(l.b)();Object(n.useEffect)((function(){e(function(){var e=Object(x.a)(v.a.mark((function e(t){var c,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.unsplash.com/photos/?client_id=".concat("ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9","&per_page=30"));case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,t({type:"FETCH_ITEMS",payload:a});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var t=Object(l.c)((function(e){return e.items.items})),c=Object(n.useState)(null),s=Object(f.a)(c,2),r=s[0],i=s[1];return Object(a.jsxs)("div",{className:"app",children:[t.map((function(e,t){return Object(a.jsxs)("div",{className:"image-container",id:t,onClick:function(){return i(e)},children:[Object(a.jsx)("img",{className:"image",src:e.urls.regular,alt:"logo"}),Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("img",{className:"avatar",src:e.user.profile_image.small,alt:"avatar"}),Object(a.jsxs)("div",{className:"text",children:[Object(a.jsx)("p",{className:"name",children:e.user.username}),Object(a.jsx)("p",{className:"name",children:e.alt_description})]})]})]},e.id)})),r&&Object(a.jsx)(O,{active:!0,onClose:function(){return i(null)},url:r.urls.regular})]})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(l.a,{store:p,children:Object(a.jsx)(g,{})})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.9765099c.chunk.js.map
(this["webpackJsonpcountries-data"]=this["webpackJsonpcountries-data"]||[]).push([[0],{20:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),a=n(13),i=n.n(a),j=(n(20),n(3)),u=n(14),o=n.n(u),l=(n(38),function(e){var t=e.country,n=!t.languages||t.languages.map((function(e){return e.name})).join(", "),s=!t.currencies||t.currencies.map((function(e){return e.name})).join(", ");return t?Object(c.jsxs)("div",{className:"country-card",children:[Object(c.jsx)("div",{className:"country-flag-wrapper",children:Object(c.jsx)("img",{className:"country-flag",src:t.flag})}),Object(c.jsx)("h3",{children:t.name}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Capital:"})," ",t.capital]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Languages:"})," ",null!==n&&void 0!==n?n:""]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Population:"})," ",t.population]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Currency:"})," ",s]})]})]}):Object(c.jsx)("div",{})}),d=function(e){var t=Object(s.useState)([e.countries]),n=Object(j.a)(t,2),r=n[0],a=n[1];return Object(s.useEffect)((function(){r!==e.countries&&a(e.countries)}),[r,e]),Object(c.jsx)("div",{className:"country-list",children:r?r.map((function(e){return Object(c.jsx)(l,{country:e})})):Object(c.jsx)("div",{children:"No countries found"})})},b=function(){return Object(c.jsx)("footer",{children:"Footer"})},h=function(e){return Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{children:"World countries Data"}),Object(c.jsxs)("h2",{children:["Currently, we have ",e.count," countries"]})]})},O=function(e){return Object(c.jsxs)("div",{className:"search-box",children:[Object(c.jsx)("input",{type:"text",placeholder:"Search countries by name, city and languages",onChange:e.handleChange}),Object(c.jsx)("div",{className:"stats-btn",children:Object(c.jsx)("a",{href:"#stats",children:"Stats"})})]})},x=function(){return Object(c.jsx)("div",{children:"Stats"})};var f=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)([]),i=Object(j.a)(a,2),u=i[0],l=i[1];return Object(s.useEffect)((function(){o.a.get("https://restcountries.eu/rest/v2/all").then((function(e){r(e.data),l(e.data)}))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(h,{count:n?n.length:0}),Object(c.jsx)(O,{handleChange:function(e){var t=e.target.value;l(t?n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):n)}}),Object(c.jsx)(d,{countries:u}),Object(c.jsx)(x,{}),Object(c.jsx)(b,{})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),p()}},[[39,1,2]]]);
//# sourceMappingURL=main.45f2768c.chunk.js.map
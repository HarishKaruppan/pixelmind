(this["webpackJsonpreact-take-home"]=this["webpackJsonpreact-take-home"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(3),o=n(0),s=n.n(o),r=n(26),a=n.n(r),i=(n(44),n(45),n(22)),u=n.n(i),l=n(27),j=n(10),d=(n(47),n(68)),b=(n(48),n(70)),f=function(e){var t=e.item,n=e.selected,s=e.setSelected,r=Object(o.useState)([]),a=Object(j.a)(r,2);a[0],a[1];return Object(c.jsx)(d.a,{item:!0,xs:12,sm:6,md:4,onClick:function(e){s(t.id)},children:Object(c.jsxs)(b.a,{className:n===t.id?"box selected":"box",sx:{width:200,height:200,backgroundColor:"#cfe2f3","&:hover":{backgroundColor:"#009B86",opacity:[.9,.8,.7],color:"#CCCCCC"}},bgcolor:"#cfe2f3",my:2,p:2,children:[Object(c.jsx)("p",{children:t.title}),Object(c.jsx)("img",{className:"profileImg",src:t.photoUrL,alt:""}),Object(c.jsx)("button",{className:"button",children:"Select Button"})]})})},h=function(e){var t=e.eachObj,n=Object(o.useState)(null),s=Object(j.a)(n,2),r=s[0],a=s[1];return Object(o.useEffect)((function(){var e=Array.from(document.getElementsByClassName("selected")).map((function(e){return e.textContent}));console.log(e)}),[r]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:t.title}),Object(c.jsx)(d.a,{container:!0,spacing:2,my:2,children:t.items.map((function(e,t){return Object(c.jsx)(f,{item:e,selected:r,setSelected:a},e.id)}))})]})},m=(n(52),function(){var e=Object(o.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1];return Object(o.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("http://localhost:8080/api/getBallotData",{mode:"cors"}).then((function(e){return e.json()})).then((function(e){return s(e.items)})).catch((function(e){return console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsx)("div",{className:"categories",children:Object(c.jsx)("div",{className:"grid",children:n.map((function(e,t){return Object(c.jsx)(h,{eachObj:e},e.id)}))})})}),O=(n(53),function(){return Object(c.jsx)("div",{className:"header",children:"AWARDS 2023"})}),x=(n(54),n(55),function(e){var t=e.openModal,n=e.showModal;e.setShowModal;return Object(o.useEffect)((function(){return document.body.style.overflow="hidden",function(){return document.body.style.overflow="unset"}}),[]),Object(o.useEffect)((function(){document.body.style.overflow=n?"hidden":"unset"}),[n]),Object(c.jsx)("div",{className:"modal",children:Object(c.jsxs)("div",{className:"modalContainer",children:[Object(c.jsx)("span",{children:"SUCCESS"}),Object(c.jsx)("button",{className:"closeBtn",onClick:t,children:"Close"})]})})}),p=function(){var e=Object(o.useState)(!1),t=Object(j.a)(e,2),n=t[0],s=t[1],r=function(){s((function(e){return!e}))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{className:"submit",onClick:r,children:"SUBMIT BALLOT BUTTON"}),n?Object(c.jsx)(x,{setShowModal:s,showModal:n,openModal:r}):null]})};var v=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(O,{}),Object(c.jsx)(m,{}),Object(c.jsx)(p,{})]})};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.61ad85c6.chunk.js.map
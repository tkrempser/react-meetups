(this["webpackJsonpreact-meetups"]=this["webpackJsonpreact-meetups"]||[]).push([[0],{14:function(e,t,c){e.exports={form:"NewMeetupForm_form__1Qsl3",control:"NewMeetupForm_control__xuwh5",actions:"NewMeetupForm_actions__tMvWn"}},16:function(e,t,c){e.exports={item:"MeetupItem_item__16n8F",image:"MeetupItem_image__1NY8N",content:"MeetupItem_content__3JjUt",actions:"MeetupItem_actions__i7I9f"}},17:function(e,t,c){e.exports={spinner:"Spinner_spinner__33xdH","sk-bounce-delay":"Spinner_sk-bounce-delay__2rwhQ","bounce-1":"Spinner_bounce-1__2hp0_","bounce-2":"Spinner_bounce-2__3t8ZA"}},26:function(e,t,c){e.exports={header:"NavigationMenu_header__pMQv0",logo:"NavigationMenu_logo__dOzgs",active:"NavigationMenu_active__la0UI",badge:"NavigationMenu_badge__DWRUa"}},31:function(e,t,c){e.exports={card:"Card_card__1ZQtN"}},32:function(e,t,c){e.exports={list:"MeetupList_list__3WMaa"}},35:function(e,t,c){e.exports={main:"Layout_main__auk_r"}},40:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n,s=c(3),a=c(29),r=c.n(a),i=c(11),j=(c(40),c(5)),o=c(27),l=c(30),d=c(21),u=(c(41),c(43),{apiKey:"AIzaSyCaxSSQ2BTIwr40dXrFUbjl_kj2dZr0Cvo",authDomain:"react-meetups-4e634.firebaseapp.com",databaseURL:"https://react-meetups-4e634-default-rtdb.firebaseio.com",projectId:"react-meetups-4e634",storageBucket:"react-meetups-4e634.appspot.com",messagingSenderId:"373582292560",appId:"1:373582292560:web:b6237cea906cffa29b5355"});function b(e){var t=n.database().ref().push().key,c=Object(l.a)({},t,e);return n.database().ref().update(c)}var p=c(16),h=c.n(p),m=c(31),x=c.n(m),O=c(1);var f=function(e){return Object(O.jsx)("div",{className:x.a.card,children:e.children})};var v=function(e){return Object(O.jsx)("li",{className:h.a.item,children:Object(O.jsxs)(f,{children:[Object(O.jsx)("div",{className:h.a.image,children:Object(O.jsx)("img",{src:e.image,alt:e.title})}),Object(O.jsxs)("div",{className:h.a.content,children:[Object(O.jsx)("h3",{children:e.title}),Object(O.jsx)("address",{children:e.address}),Object(O.jsx)("p",{children:e.description})]}),Object(O.jsx)("div",{className:h.a.actions,children:Object(O.jsx)("button",{children:"Add to Favorites"})})]})})},_=c(32),g=c.n(_);var N=function(e){return Object(O.jsx)("ul",{className:g.a.list,children:e.meetups.map((function(e){return Object(O.jsx)(v,{id:e.id,image:e.image,title:e.title,address:e.address,description:e.description},e.id)}))})},M=c(17),w=c.n(M);var y=function(){return Object(O.jsxs)("div",{className:w.a.spinner,children:[Object(O.jsx)("div",{className:w.a["bounce-1"]}),Object(O.jsx)("div",{className:w.a["bounce-2"]}),Object(O.jsx)("div",{})]})};var I=function(){var e=Object(s.useState)(!0),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),r=Object(o.a)(a,2),i=r[0],j=r[1];return Object(s.useEffect)((function(){var e;(e=10,d.a.database().ref().limitToLast(e).get()).then((function(e){e.exists()?j(Object.entries(e.val()).map((function(e){var t=e[1];return t.id=e[0],t}))):console.log("Empty database"),n(!1)})).catch((function(e){console.log(e.message)}))}),[]),c?Object(O.jsx)(y,{}):Object(O.jsxs)("section",{children:[Object(O.jsx)("h1",{children:"All Meetups"}),i.length?Object(O.jsx)(N,{meetups:i}):Object(O.jsx)("p",{children:"No meetups available"})]})},F=c(23),S=c.n(F),A=c(33),k=c(14),R=c.n(k);var U=function(e){var t=Object(s.useRef)(),c=Object(s.useRef)(),n=Object(s.useRef)(),a=Object(s.useRef)();return Object(O.jsx)(f,{children:Object(O.jsxs)("form",{className:R.a.form,onSubmit:function(s){s.preventDefault();var r={title:t.current.value,image:c.current.value,address:n.current.value,description:a.current.value};e.onAddMeetup(r)},children:[Object(O.jsxs)("div",{className:R.a.control,children:[Object(O.jsx)("label",{htmlFor:"title",children:"Title"}),Object(O.jsx)("input",{type:"text",id:"title",required:!0,ref:t})]}),Object(O.jsxs)("div",{className:R.a.control,children:[Object(O.jsx)("label",{htmlFor:"image",children:"Image URL"}),Object(O.jsx)("input",{type:"url",id:"image",required:!0,ref:c})]}),Object(O.jsxs)("div",{className:R.a.control,children:[Object(O.jsx)("label",{htmlFor:"address",children:"Address"}),Object(O.jsx)("input",{type:"text",id:"address",required:!0,ref:n})]}),Object(O.jsxs)("div",{className:R.a.control,children:[Object(O.jsx)("label",{htmlFor:"description",children:"Description"}),Object(O.jsx)("textarea",{id:"description",rows:"5",required:!0,ref:a})]}),Object(O.jsx)("div",{className:R.a.actions,children:Object(O.jsx)("button",{children:"Save"})})]})})};var L=function(){var e=Object(j.f)();function t(){return(t=Object(A.a)(S.a.mark((function t(c){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(c).then((function(){e.replace("/react-meetups/")})).catch((function(e){console.log(e.message)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(O.jsxs)("section",{children:[Object(O.jsx)("h1",{children:"New Meetup"}),Object(O.jsx)(U,{onAddMeetup:function(e){return t.apply(this,arguments)}})]})};var Q=function(){return Object(O.jsx)("section",{children:Object(O.jsx)("h1",{children:"Favorites"})})},q=c(35),D=c.n(q),z=c(26),B=c.n(z);var C=function(){return Object(O.jsxs)("header",{className:B.a.header,children:[Object(O.jsx)("div",{className:B.a.logo,children:"React Meetups"}),Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(i.b,{to:"/react-meetups/",children:"All Meetups"})}),Object(O.jsx)("li",{children:Object(O.jsx)(i.b,{to:"/react-meetups/new/",children:"New Meetup"})}),Object(O.jsx)("li",{children:Object(O.jsx)(i.b,{to:"/react-meetups/favorites/",children:"Favorites"})})]})})]})};var E=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)(C,{}),Object(O.jsx)("main",{className:D.a.main,children:e.children})]})};var J=function(){return Object(O.jsx)(E,{children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/react-meetups/new/",children:Object(O.jsx)(L,{})}),Object(O.jsx)(j.a,{path:"/react-meetups/favorites/",children:Object(O.jsx)(Q,{})}),Object(O.jsx)(j.a,{path:"/react-meetups/",children:Object(O.jsx)(I,{})})]})})};(n=d.a.initializeApp(u)).auth().signInAnonymously().catch((function(e){console.log(e.message)})),r.a.render(Object(O.jsx)(i.a,{children:Object(O.jsx)(J,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.c531c664.chunk.js.map
(this["webpackJsonpreact-meetups"]=this["webpackJsonpreact-meetups"]||[]).push([[0],{16:function(e,t,n){e.exports={form:"NewMeetupForm_form__1Qsl3",control:"NewMeetupForm_control__xuwh5",actions:"NewMeetupForm_actions__tMvWn"}},18:function(e,t,n){e.exports={item:"MeetupItem_item__16n8F",image:"MeetupItem_image__1NY8N",content:"MeetupItem_content__3JjUt",actions:"MeetupItem_actions__i7I9f"}},20:function(e,t,n){e.exports={spinner:"Spinner_spinner__33xdH","sk-bounce-delay":"Spinner_sk-bounce-delay__2rwhQ","bounce-1":"Spinner_bounce-1__2hp0_","bounce-2":"Spinner_bounce-2__3t8ZA"}},21:function(e,t,n){e.exports={header:"NavigationMenu_header__pMQv0",logo:"NavigationMenu_logo__dOzgs",active:"NavigationMenu_active__la0UI",badge:"NavigationMenu_badge__DWRUa"}},32:function(e,t,n){e.exports={card:"Card_card__1ZQtN"}},33:function(e,t,n){e.exports={list:"MeetupList_list__3WMaa"}},35:function(e,t,n){e.exports={main:"Layout_main__auk_r"}},40:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c,r=n(2),a=n(30),s=n.n(a),i=n(11),o=(n(40),n(5)),u=n(12),l=n(31),d=n(15),j=n.n(d),b=n(19),p=n(25),f=(n(42),n(44),{apiKey:"AIzaSyCaxSSQ2BTIwr40dXrFUbjl_kj2dZr0Cvo",authDomain:"react-meetups-4e634.firebaseapp.com",databaseURL:"https://react-meetups-4e634-default-rtdb.firebaseio.com",projectId:"react-meetups-4e634",storageBucket:"react-meetups-4e634.appspot.com",messagingSenderId:"373582292560",appId:"1:373582292560:web:b6237cea906cffa29b5355"});function h(){return v.apply(this,arguments)}function v(){return(v=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p.a.apps.length){e.next=4;break}return c=p.a.initializeApp(f),e.next=4,c.auth().signInAnonymously().catch((function(e){console.log(e.message)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(b.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return n=c.database().ref().push().key,r=Object(l.a)({},n,t),e.abrupt("return",c.database().ref().update(r));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-meetups-4e634-default-rtdb.firebaseio.com/.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=n(18),_=n.n(m),g=n(32),N=n.n(g),S=n(1);var F=function(e){return Object(S.jsx)("div",{className:N.a.card,children:e.children})},M=Object(r.createContext)({favorites:[],addFavorite:function(e){},removeFavorite:function(e){},isFavorite:function(e){}});function w(e){var t=Object(r.useState)(null!==localStorage.getItem("favorites-meetups")?JSON.parse(localStorage.getItem("favorites-meetups")):[]),n=Object(u.a)(t,2),c=n[0],a=n[1];Object(r.useEffect)((function(){localStorage.setItem("favorites-meetups",JSON.stringify(c))}),[c]);var s={favorites:c,addFavorite:function(e){a((function(t){return t.concat(e)}))},removeFavorite:function(e){a((function(t){return t.filter((function(t){return t.id!==e}))}))},isFavorite:function(e){return c.some((function(t){return t.id===e}))}};return Object(S.jsx)(M.Provider,{value:s,children:e.children})}var y=M;var I=function(e){var t=Object(r.useContext)(y),n=t.isFavorite(e.id);return Object(S.jsx)("li",{className:_.a.item,children:Object(S.jsxs)(F,{children:[Object(S.jsx)("div",{className:_.a.image,children:Object(S.jsx)("img",{src:e.image,alt:e.title})}),Object(S.jsxs)("div",{className:_.a.content,children:[Object(S.jsx)("h3",{children:e.title}),Object(S.jsx)("address",{children:e.address}),Object(S.jsx)("p",{children:e.description})]}),Object(S.jsx)("div",{className:_.a.actions,children:Object(S.jsx)("button",{onClick:function(){n?t.removeFavorite(e.id):t.addFavorite({id:e.id,image:e.image,title:e.title,address:e.address,description:e.description})},children:n?"Remove from Favorites":"Add to Favorites"})})]})})},k=n(33),A=n.n(k);var R=function(e){return Object(S.jsx)("ul",{className:A.a.list,children:e.meetups.map((function(e){return Object(S.jsx)(I,{id:e.id,image:e.image,title:e.title,address:e.address,description:e.description},e.id)}))})},C=n(20),U=n.n(C);var J=function(){return Object(S.jsxs)("div",{className:U.a.spinner,children:[Object(S.jsx)("div",{className:U.a["bounce-1"]}),Object(S.jsx)("div",{className:U.a["bounce-2"]}),Object(S.jsx)("div",{})]})};var Q=function(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(u.a)(a,2),i=s[0],o=s[1];return Object(r.useEffect)((function(){(function(){return x.apply(this,arguments)})().then((function(e){null!==e?o(Object.entries(e).map((function(e){var t=e[1];return t.id=e[0],t}))):console.log("Empty database"),c(!1)})).catch((function(e){console.log(e.message)}))}),[]),n?Object(S.jsx)(J,{}):Object(S.jsxs)("section",{children:[Object(S.jsx)("h1",{children:"All Meetups"}),i.length?Object(S.jsx)(R,{meetups:i}):Object(S.jsx)("p",{children:"No meetups available"})]})},q=n(16),D=n.n(q);var E=function(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),c=Object(r.useRef)(),a=Object(r.useRef)();return Object(S.jsx)(F,{children:Object(S.jsxs)("form",{className:D.a.form,onSubmit:function(r){r.preventDefault();var s={title:t.current.value,image:n.current.value,address:c.current.value,description:a.current.value};e.onAddMeetup(s)},children:[Object(S.jsxs)("div",{className:D.a.control,children:[Object(S.jsx)("label",{htmlFor:"title",children:"Title"}),Object(S.jsx)("input",{type:"text",id:"title",disabled:e.isSaving,required:!0,ref:t})]}),Object(S.jsxs)("div",{className:D.a.control,children:[Object(S.jsx)("label",{htmlFor:"image",children:"Image URL"}),Object(S.jsx)("input",{type:"url",id:"image",disabled:e.isSaving,required:!0,ref:n})]}),Object(S.jsxs)("div",{className:D.a.control,children:[Object(S.jsx)("label",{htmlFor:"address",children:"Address"}),Object(S.jsx)("input",{type:"text",id:"address",disabled:e.isSaving,required:!0,ref:c})]}),Object(S.jsxs)("div",{className:D.a.control,children:[Object(S.jsx)("label",{htmlFor:"description",children:"Description"}),Object(S.jsx)("textarea",{id:"description",rows:"5",disabled:e.isSaving,required:!0,ref:a})]}),Object(S.jsx)("div",{className:D.a.actions,children:Object(S.jsx)("button",{disabled:e.isSaving,children:e.isSaving?Object(S.jsx)(J,{}):"Save"})})]})})};var L=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(o.f)();return Object(S.jsxs)("section",{children:[Object(S.jsx)("h1",{children:"New Meetup"}),Object(S.jsx)(E,{onAddMeetup:function(e){c(!0),function(e){return O.apply(this,arguments)}(e).then((function(){a.replace("/")})).catch((function(e){console.log(e.message),c(!1)}))},isSaving:n})]})};var z=function(){var e=Object(r.useContext)(y);return Object(S.jsxs)("section",{children:[Object(S.jsx)("h1",{children:"Favorites"}),e.favorites.length?Object(S.jsx)(R,{meetups:e.favorites}):Object(S.jsx)("p",{children:"No favorites available"})]})},B=n(35),W=n.n(B),Z=n(21),T=n.n(Z);var H=function(){var e=Object(r.useContext)(y);return Object(S.jsxs)("header",{className:T.a.header,children:[Object(S.jsx)("div",{className:T.a.logo,children:"React Meetups"}),Object(S.jsx)("nav",{children:Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:Object(S.jsx)(i.b,{to:"/",children:"All Meetups"})}),Object(S.jsx)("li",{children:Object(S.jsx)(i.b,{to:"/new/",children:"New Meetup"})}),Object(S.jsx)("li",{children:Object(S.jsxs)(i.b,{to:"/favorites/",children:["Favorites",Object(S.jsx)("span",{className:T.a.badge,children:e.favorites.length})]})})]})})]})};var K=function(e){return Object(S.jsxs)("div",{children:[Object(S.jsx)(H,{}),Object(S.jsx)("main",{className:W.a.main,children:e.children})]})};var P=function(){return Object(S.jsx)(K,{children:Object(S.jsxs)(o.c,{children:[Object(S.jsx)(o.a,{path:"/new/",children:Object(S.jsx)(L,{})}),Object(S.jsx)(o.a,{path:"/favorites/",children:Object(S.jsx)(z,{})}),Object(S.jsx)(o.a,{path:"/",children:Object(S.jsx)(Q,{})})]})})};s.a.render(Object(S.jsx)(w,{children:Object(S.jsx)(i.a,{children:Object(S.jsx)(P,{})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.5c16767f.chunk.js.map
(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{17:function(e,t,a){e.exports=a(31)},22:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),i=(a(22),a(3)),s=a.n(i),l=a(15),u=a(7),m=a(16),p=a(13),f=a.n(p),d=(a(24),a(14)),b=a.n(d);a(25),a(32),a(27);var g=b.a.initializeApp({apiKey:"AIzaSyAGzlmbvOxo6HbLnKtdhghV7HDkFLr3nc4",authDomain:"gtfaf-blog.firebaseapp.com",databaseURL:"https://gtfaf-blog.firebaseio.com",projectId:"gtfaf-blog",storageBucket:"gtfaf-blog.appspot.com",messagingSenderId:"919597356105",appId:"1:919597356105:web:49b8b47159615e267f1b98",measurementId:"G-RJL293QDBD"}),h=(a(30),["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]);var v=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],o=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object.assign.apply(Object,Object(l.a)(a).concat([[]])),g.firestore().collection("fl_content").limit(3).orderBy("_fl_meta_.createdDate","desc").get().then(function(){var e=Object(u.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.docs.map(function(){var e=Object(u.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.push(a.data());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),c(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o(),f.a.init({duration:2e3})}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"gtfaf"),r.a.createElement("p",null,"I enjoy every moment."))),r.a.createElement("main",{className:"container"},a.map((function(e,t){var a=new Date(1e3*e._fl_meta_.createdDate.seconds);return r.a.createElement("article",{key:t,"data-aos":"fade-up"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}),r.a.createElement("p",{className:"card-datetime"},"".concat(h[a.getMonth()]," ").concat(a.getDate(),", ").concat(a.getFullYear())))))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.61b0637b.chunk.js.map
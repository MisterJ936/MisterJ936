(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},i={app:0},r=[];function s(e){return c.p+"js/"+({about:"about",codechallenge:"codechallenge",contact:"contact",experience:"experience",work:"work"}[e]||e)+"."+{about:"a398042c",codechallenge:"d6ef05b5",contact:"12ffa347",experience:"38adb61d",work:"de7f56b3"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,codechallenge:1,contact:1,experience:1,work:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about",codechallenge:"codechallenge",contact:"contact",experience:"experience",work:"work"}[e]||e)+"."+{about:"fe1f0a6d",codechallenge:"7ef739e7",contact:"aa43048d",experience:"b6440cad",work:"b10e3c1a"}[e]+".css",i=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],p.parentNode.removeChild(p),n(r)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}i[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3859:function(e,t,n){"use strict";var a=n("5046"),o=n.n(a);o.a},"4e21":function(e,t,n){},5046:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("NavigationBar"),n("main",[n("router-view")],1),n("SocialNetworkSite"),n("Footer")],1)},i=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"social-network"},[n("slide-y-down-transition",{attrs:{delay:1300}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"social-media social-meida-orientation social-media-placement"},[n("ul",{staticClass:"social-media-list"},e._l(e.links,(function(t){return n("li",{key:t.link},[n("a",{attrs:{href:t.link,target:"_blank",icon:""}},[n("v-icon",{staticClass:"social-buttons",attrs:{size:"20"}},[e._v(e._s(t.icon))])],1)])})),0)])]),n("slide-y-down-transition",{attrs:{delay:1600}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"email-media social-meida-orientation social-media-placement"},[n("div",{staticClass:"email-media-link"},[n("a",{attrs:{href:e.email}},[e._v(e._s(e.email))])])])])],1)},s=[],c=n("c4fa"),l=n("7c76"),u={name:"SocialMediaLinks",components:{SlideYDownTransition:l["c"]},data:function(){return{links:c["b"],email:c["a"],show:!1}},mounted:function(){this.show=!0}},d=u,p=(n("63dc"),n("2877")),f=n("6544"),h=n.n(f),m=n("132d"),v=Object(p["a"])(d,r,s,!1,null,null,null),w=v.exports;h()(v,{VIcon:m["a"]});var g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("slide-y-up-transition",{attrs:{delay:900}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[n("v-tabs",{staticClass:"navigation-tab",class:e.tabTop?"navigation-tab-top":"",style:e.tabShow?"top: 0px;":"top: -50px",attrs:{centered:"",height:e.tabTop?"60px":"40px"}},e._l(e.tabs,(function(t){return n("v-tab",{key:t.name,attrs:{to:t.to}},[n("v-icon",{staticStyle:{"margin-right":"5px"},attrs:{small:""}},[e._v(e._s(t.icon))]),e._v(" "+e._s(t.name)+" ")],1)})),1),n("div",{staticClass:"responsive-nav-tab"},[n("v-btn",{attrs:{color:"primary",large:"",icon:"",elevation:"0",rounded:""},on:{click:function(t){e.dialog=!e.dialog}}},[n("v-icon",{attrs:{large:""}},[e._v(e._s(e.menuIcon))])],1),n("v-dialog",{staticClass:"nav-dialog",attrs:{fullscreen:"","hide-overlay":"",transition:"slide-x-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-btn",{staticStyle:{position:"absolute","z-index":"20",right:"10px",top:"10px"},attrs:{"x-large":"",icon:""},on:{click:function(t){e.dialog=!e.dialog}}},[n("v-icon",{attrs:{"x-large":""}},[e._v(e._s(e.closeIcon))])],1),n("v-tabs",{staticClass:"show-navigation-tab",attrs:{vertical:""}},e._l(e.tabs,(function(t){return n("v-tab",{key:t.name,attrs:{to:t.to},on:{click:function(t){e.dialog=!e.dialog}}},[n("v-icon",{staticStyle:{"margin-right":"5px"},attrs:{small:""}},[e._v(e._s(t.icon))]),e._v(" "+e._s(t.name)+" ")],1)})),1)],1)],1)],1)])},b=[],y=n("94ed"),_=[{icon:y["m"],name:"Intro",to:"/intro"},{icon:y["g"],name:"About Me",to:"/about"},{icon:y["n"],name:"Experience",to:"/experience"},{icon:y["i"],name:"Work",to:"/work"},{icon:y["b"],name:"Code Challenge",to:"/codechallenge"},{icon:y["f"],name:"Contact Me",to:"/contact"}],k={name:"Navigation",components:{SlideYUpTransition:l["d"]},data:function(){return{tabs:_,tabShow:!0,tabTop:!0,menuIcon:y["v"],dialog:!1,closeIcon:y["d"],show:!1}},mounted:function(){var e=this,t=window.pageYOffset;window.onscroll=function(){var n=window.pageYOffset;e.tabShow=t>n,t=n,window.pageYOffset<2?e.tabTop=!0:e.tabTop=!1},this.show=!0}},x=k,C=(n("eec8"),n("8336")),S=n("169a"),j=n("71a3"),O=n("fe57"),N=Object(p["a"])(x,g,b,!1,null,null,null),T=N.exports;h()(N,{VBtn:C["a"],VDialog:S["a"],VIcon:m["a"],VTab:j["a"],VTabs:O["a"]});var I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"social-links"},[n("ul",e._l(e.socials,(function(t){return n("li",{key:t.name},[n("a",{attrs:{href:t.link,target:"_blank"}},[n("v-icon",{staticClass:"icon"},[e._v(e._s(t.icon))])],1)])})),0),n("a",{attrs:{href:"mailto:jenuelganawed936@gmail"}},[e._v(" jenuelganawed936@gmail.com ")])]),n("div",{staticClass:"footer-text"},[n("a",{attrs:{href:"#"}},[n("div",[n("span",[e._v("Built by Jenuel Ganawed based on Brittany's Design "),n("br"),e._v(" using "),n("v-icon",{attrs:{small:"",color:"green"}},[e._v(e._s(e.vueIcon))]),e._v(" Vue.js")],1)])])])])},E=[],P={data:function(){return{vueIcon:y["y"],socials:c["b"]}}},F=P,A=(n("ea59"),Object(p["a"])(F,I,E,!1,null,null,null)),B=A.exports;h()(A,{VIcon:m["a"]});var V={name:"App",components:{SocialNetworkSite:w,NavigationBar:T,Footer:B},data:function(){return{}}},M=V,$=(n("5c0b"),n("7496")),J=Object(p["a"])(M,o,i,!1,null,null,null),L=J.exports;h()(J,{VApp:$["a"]});n("d3b7");var Y=n("8c4f"),D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"intro"},[n("slide-y-up-transition",{attrs:{delay:200}},[n("h1",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[e._v("Hi! "),n("v-icon",[e._v(e._s(e.handIcon))]),e._v(" my name is")],1)]),n("slide-y-up-transition",{attrs:{delay:300}},[n("h2",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[e._v(e._s(e.name))])]),n("slide-y-up-transition",{attrs:{delay:400}},[n("h3",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[e._v(e._s(e.ido))])]),n("slide-y-up-transition",{attrs:{delay:600}},[n("p",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[e._v(e._s(e.des))])]),n("slide-y-up-transition",{attrs:{delay:700}},[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"get-in-touch",attrs:{outlined:"","x-large":"",href:"mailto:"+e.email}},[e._v(" Get In Touch ")])],1)],1)},z=[],G="Jenuel Ganawed.",U="I Build Things for the web.",q="I'm a software/web developer specializing in building (and sometimes designing) exceptional websites, applications, and everything in between.",H="jenuelganawed936@gmail.com",W={name:"Intro",components:{SlideYUpTransition:l["d"]},mounted:function(){this.show=!0},data:function(){return{name:G,ido:U,des:q,email:H,show:!1,handIcon:y["m"]}}},K=W,Q=(n("3859"),Object(p["a"])(K,D,z,!1,null,null,null)),R=Q.exports;h()(Q,{VBtn:C["a"],VIcon:m["a"]});var X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Page Not Found")])},Z=[],ee={},te=Object(p["a"])(ee,X,Z,!1,null,null,null),ne=te.exports;a["a"].use(Y["a"]);var ae=[{path:"",redirect:"/intro"},{path:"/intro",name:"Intro",component:R},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"57ee"))}},{path:"/experience",name:"Experience",component:function(){return n.e("experience").then(n.bind(null,"2873"))}},{path:"/work",name:"Work",component:function(){return n.e("work").then(n.bind(null,"49a1"))}},{path:"/codechallenge",name:"CodeChallenge",component:function(){return n.e("codechallenge").then(n.bind(null,"f25d"))}},{path:"/contact",name:"Contact",component:function(){return n.e("contact").then(n.bind(null,"a055"))}},{path:"/*",name:"PageNotFound",component:ne}],oe=new Y["a"]({routes:ae}),ie=oe,re=n("2f62");a["a"].use(re["a"]);var se=new re["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ce=n("f309");a["a"].use(ce["a"]);var le=new ce["a"]({theme:{options:{customProperties:!0},themes:{dark:{background:"#0a192f",primary:"#64ffda",liteprimary:"#172a45",lightestPrimary:"#303C55",slate:"#8892b0",lightSlate:"#a8b2d1",lightestSlate:"#ccd6f6",white:"#e6f1ff",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",shadow:"#020c1bb3"}},dark:!0}});n("b383");a["a"].config.productionTip=!1,new a["a"]({router:ie,store:se,vuetify:le,render:function(e){return e(L)}}).$mount("#app")},5989:function(e,t,n){},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},"63dc":function(e,t,n){"use strict";var a=n("5989"),o=n.n(a);o.a},"9c0c":function(e,t,n){},b383:function(e,t,n){},c4fa:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n("94ed"),o=[{icon:a["o"],link:"https://www.instagram.com/brojenuel/"},{icon:a["h"],link:"https://www.facebook.com/ganawed/"},{icon:a["u"],link:"https://www.linkedin.com/in/jenuelganawed/"},{icon:a["l"],link:"https://github.com/MisterJ936"},{icon:a["x"],link:"https://twitter.com/broJenuel"}],i="jenuelganawed936@gmail.com"},d9a9:function(e,t,n){},ea59:function(e,t,n){"use strict";var a=n("d9a9"),o=n.n(a);o.a},eec8:function(e,t,n){"use strict";var a=n("4e21"),o=n.n(a);o.a}});
//# sourceMappingURL=app.87938ded.js.map
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/demo.jpg":[["demo.090c7c6d.jpg","nKR3"],"nKR3"]}],"AZzu":[function(require,module,exports) {
"use strict";function e(e,t){return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&appid=5c8dab899c73e9fec8517804e94f0209&units=metric&lang=en`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getWeather=e;
},{}],"qJUB":[function(require,module,exports) {
"use strict";function e(){return{body:document.querySelector("body"),tempetatureDegree:document.querySelector(".temperature-degree"),timeZone:document.querySelector(".location-timezone"),decs:document.querySelector(".temperature-description"),icon:document.querySelector(".icon"),skycons:document.querySelector("#icon1")}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getRefs=e;
},{}],"k6Uf":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3];!function(t){"use strict";var n,i,e,a;e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame,a=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||t.msCancelAnimationFrame,e&&a?(n=function(t){var n={value:null};return function i(){n.value=e(i),t()}(),n},i=function(t){a(t.value)}):(n=setInterval,i=clearInterval);var o=2*Math.PI,r=2/Math.sqrt(2);function l(t,n,i,e,a){t.beginPath(),t.moveTo(n,i),t.lineTo(e,a),t.stroke()}function s(t,n,i,e,a,r,l,s){var h=Math.cos(n*o);!function(t,n,i,e){t.beginPath(),t.arc(n,i,e,0,o,!1),t.fill()}(t,i-Math.sin(n*o)*a,e+h*r+.5*(s-=l),l+(1-.5*h)*s)}function h(t,n,i,e,a,o,r,l){var h;for(h=5;h--;)s(t,n+h/5,i,e,a,o,r,l)}function c(t,n,i,e,a,o,r){n/=3e4;var l=.21*a,s=.12*a,c=.24*a,u=.28*a;t.fillStyle=r,h(t,n,i,e,l,s,c,u),t.globalCompositeOperation="destination-out",h(t,n,i,e,l,s,c-o,u-o),t.globalCompositeOperation="source-over"}function u(t,n,i,e,a,r,s){n/=12e4;var h,c,u,v,f=.25*a-.5*r,d=.32*a+.5*r,m=.5*a-.5*r;for(t.strokeStyle=s,t.lineWidth=r,t.lineCap="round",t.lineJoin="round",t.beginPath(),t.arc(i,e,f,0,o,!1),t.stroke(),h=8;h--;)c=(n+h/8)*o,l(t,i+(u=Math.cos(c))*d,e+(v=Math.sin(c))*d,i+u*m,e+v*m)}function v(t,n,i,e,a,l,s){n/=15e3;var h=.29*a-.5*l,c=.05*a,u=Math.cos(n*o),v=u*o/-16;t.strokeStyle=s,t.lineWidth=l,t.lineCap="round",t.lineJoin="round",i+=u*c,t.beginPath(),t.arc(i,e,h,v+o/8,v+7*o/8,!1),t.arc(i+Math.cos(v)*h*r,e+Math.sin(v)*h*r,h,v+5*o/8,v+3*o/8,!0),t.closePath(),t.stroke()}var f=[[-.75,-.18,-.7219,-.1527,-.6971,-.1225,-.6739,-.091,-.6516,-.0588,-.6298,-.0262,-.6083,.0065,-.5868,.0396,-.5643,.0731,-.5372,.1041,-.5033,.1259,-.4662,.1406,-.4275,.1493,-.3881,.153,-.3487,.1526,-.3095,.1488,-.2708,.1421,-.2319,.1342,-.1943,.1217,-.16,.1025,-.129,.0785,-.1012,.0509,-.0764,.0206,-.0547,-.012,-.0378,-.0472,-.0324,-.0857,-.0389,-.1241,-.0546,-.1599,-.0814,-.1876,-.1193,-.1964,-.1582,-.1935,-.1931,-.1769,-.2157,-.1453,-.229,-.1085,-.2327,-.0697,-.224,-.0317,-.2064,.0033,-.1853,.0362,-.1613,.0672,-.135,.0961,-.1051,.1213,-.0706,.1397,-.0332,.1512,.0053,.158,.0442,.1624,.0833,.1636,.1224,.1615,.1613,.1565,.1999,.15,.2378,.1402,.2749,.1279,.3118,.1147,.3487,.1015,.3858,.0892,.4236,.0787,.4621,.0715,.5012,.0702,.5398,.0766,.5768,.089,.6123,.1055,.6466,.1244,.6805,.144,.7147,.163,.75,.18],[-.75,0,-.7033,.0195,-.6569,.0399,-.6104,.06,-.5634,.0789,-.5155,.0954,-.4667,.1089,-.4174,.1206,-.3676,.1299,-.3174,.1365,-.2669,.1398,-.2162,.1391,-.1658,.1347,-.1157,.1271,-.0661,.1169,-.017,.1046,.0316,.0903,.0791,.0728,.1259,.0534,.1723,.0331,.2188,.0129,.2656,-.0064,.3122,-.0263,.3586,-.0466,.4052,-.0665,.4525,-.0847,.5007,-.1002,.5497,-.113,.5991,-.124,.6491,-.1325,.6994,-.138,.75,-.14]],d=[{start:.36,end:.11},{start:.56,end:.16}];function m(t,n,i,e,a,r,l,s,h){n/=2500;var c,u,v,m,g=f[l],M=(n+l-d[l].start)%s,p=(n+l-d[l].end)%s,C=(n+l)%s;if(t.strokeStyle=h,t.lineWidth=r,t.lineCap="round",t.lineJoin="round",M<1){if(t.beginPath(),M*=g.length/2-1,M-=c=Math.floor(M),c*=2,c+=2,t.moveTo(i+(g[c-2]*(1-M)+g[c]*M)*a,e+(g[c-1]*(1-M)+g[c+1]*M)*a),p<1){for(p*=g.length/2-1,p-=u=Math.floor(p),u*=2,u+=2,m=c;m!==u;m+=2)t.lineTo(i+g[m]*a,e+g[m+1]*a);t.lineTo(i+(g[u-2]*(1-p)+g[u]*p)*a,e+(g[u-1]*(1-p)+g[u+1]*p)*a)}else for(m=c;m!==g.length;m+=2)t.lineTo(i+g[m]*a,e+g[m+1]*a);t.stroke()}else if(p<1){for(t.beginPath(),p*=g.length/2-1,p-=u=Math.floor(p),u*=2,u+=2,t.moveTo(i+g[0]*a,e+g[1]*a),m=2;m!==u;m+=2)t.lineTo(i+g[m]*a,e+g[m+1]*a);t.lineTo(i+(g[u-2]*(1-p)+g[u]*p)*a,e+(g[u-1]*(1-p)+g[u+1]*p)*a),t.stroke()}C<1&&(C*=g.length/2-1,C-=v=Math.floor(C),v*=2,function(t,n,i,e,a,r,l){var s=a/8,h=s/3,c=2*h,u=n%1*o,v=Math.cos(u),f=Math.sin(u);t.fillStyle=l,t.strokeStyle=l,t.lineWidth=r,t.lineCap="round",t.lineJoin="round",t.beginPath(),t.arc(i,e,s,u,u+Math.PI,!1),t.arc(i-h*v,e-h*f,c,u+Math.PI,u,!1),t.arc(i+c*v,e+c*f,h,u+Math.PI,u,!0),t.globalCompositeOperation="destination-out",t.fill(),t.globalCompositeOperation="source-over",t.stroke()}(t,n,i+(g[(v+=2)-2]*(1-C)+g[v]*C)*a,e+(g[v-1]*(1-C)+g[v+1]*C)*a,a,r,h))}var g=function(t){this.list=[],this.interval=null,this.color=t&&t.color?t.color:"black",this.resizeClear=!(!t||!t.resizeClear)};g.CLEAR_DAY=function(t,n,i){var e=t.canvas.width,a=t.canvas.height,o=Math.min(e,a);u(t,n,.5*e,.5*a,o,.08*o,i)},g.CLEAR_NIGHT=function(t,n,i){var e=t.canvas.width,a=t.canvas.height,o=Math.min(e,a);v(t,n,.5*e,.5*a,o,.08*o,i)},g.PARTLY_CLOUDY_DAY=function(t,n,i){var e=t.canvas.width,a=t.canvas.height,o=Math.min(e,a);u(t,n,.625*e,.375*a,.75*o,.08*o,i),c(t,n,.375*e,.625*a,.75*o,.08*o,i)},g.PARTLY_CLOUDY_NIGHT=function(t,n,i){var e=t.canvas.width,a=t.canvas.height,o=Math.min(e,a);v(t,n,.667*e,.375*a,.75*o,.08*o,i),c(t,n,.375*e,.625*a,.75*o,.08*o,i)},g.CLOUDY=function(t,n,i){var e=t.canvas.width,a=t.canvas.height,o=Math.min(e,a);c(t,n,.5*e,.5*a,o,.08*o,i)},g.RAIN=function(t,n,i){var e=t.canvas.width,a=t.canvas.height,r=Math.min(e,a);!function(t,n,i,e,a,r,l){n/=1350;var s,h,c,u,v=.16*a,f=11*o/12,d=7*o/12;for(t.fillStyle=l,s=4;s--;)c=i+(s-1.5)/1.5*(1===s||2===s?-1:1)*v,u=e+(h=(n+s/4)%1)*h*a,t.beginPath(),t.moveTo(c,u-1.5*r),t.arc(c,u,.75*r,f,d,!1),t.fill()}(t,n,.5*e,.37*a,.9*r,.08*r,i),c(t,n,.5*e,.37*a,.9*r,.08*r,i)},g.SLEET=function(t,n,i){var e=t.canvas.width,a=t.canvas.height,o=Math.min(e,a);!function(t,n,i,e,a,o,r){n/=750;var s,h,c,u,v=.1875*a;for(t.strokeStyle=r,t.lineWidth=.5*o,t.lineCap="round",t.lineJoin="round",s=4;s--;)h=(n+s/4)%1,l(t,c=Math.floor(i+(s-1.5)/1.5*(1===s||2===s?-1:1)*v)+.5,(u=e+h*a)-1.5*o,c,u+1.5*o)}(t,n,.5*e,.37*a,.9*o,.08*o,i),c(t,n,.5*e,.37*a,.9*o,.08*o,i)},g.SNOW=function(t,n,i){var e=t.canvas.width,a=t.canvas.height,r=Math.min(e,a);!function(t,n,i,e,a,r,s){var h,c,u,v,f=.16*a,d=.75*r,m=(n/=3e3)*o*.7,g=Math.cos(m)*d,M=Math.sin(m)*d,p=m+o/3,C=Math.cos(p)*d,w=Math.sin(p)*d,y=m+2*o/3,b=Math.cos(y)*d,k=Math.sin(y)*d;for(t.strokeStyle=s,t.lineWidth=.5*r,t.lineCap="round",t.lineJoin="round",h=4;h--;)c=(n+h/4)%1,l(t,(u=i+Math.sin((c+h/4)*o)*f)-g,(v=e+c*a)-M,u+g,v+M),l(t,u-C,v-w,u+C,v+w),l(t,u-b,v-k,u+b,v+k)}(t,n,.5*e,.37*a,.9*r,.08*r,i),c(t,n,.5*e,.37*a,.9*r,.08*r,i)},g.WIND=function(t,n,i){var e=t.canvas.width,a=t.canvas.height,o=Math.min(e,a);m(t,n,.5*e,.5*a,o,.08*o,0,2,i),m(t,n,.5*e,.5*a,o,.08*o,1,2,i)},g.FOG=function(t,n,i){var e=t.canvas.width,a=t.canvas.height,r=Math.min(e,a),s=.08*r;!function(t,n,i,e,a,o,r){n/=3e4;var l=.21*a,s=.06*a,c=.21*a,u=.28*a;t.fillStyle=r,h(t,n,i,e,l,s,c,u),t.globalCompositeOperation="destination-out",h(t,n,i,e,l,s,c-o,u-o),t.globalCompositeOperation="source-over"}(t,n,.5*e,.32*a,.75*r,s,i),n/=5e3;var c=Math.cos(n*o)*r*.02,u=Math.cos((n+.25)*o)*r*.02,v=Math.cos((n+.5)*o)*r*.02,f=Math.cos((n+.75)*o)*r*.02,d=.936*a,m=Math.floor(d-.5*s)+.5,g=Math.floor(d-2.5*s)+.5;t.strokeStyle=i,t.lineWidth=s,t.lineCap="round",t.lineJoin="round",l(t,c+.2*e+.5*s,m,u+.8*e-.5*s,m),l(t,v+.2*e+.5*s,g,f+.8*e-.5*s,g)},g.prototype={_determineDrawingFunction:function(t){return"string"==typeof t&&(t=g[t.toUpperCase().replace(/-/g,"_")]||null),t},add:function(t,n){var i;"string"==typeof t&&(t=document.getElementById(t)),null!=t&&"function"==typeof(n=this._determineDrawingFunction(n))&&(i={element:t,context:t.getContext("2d"),drawing:n},this.list.push(i),this.draw(i,500))},set:function(t,n){var i;for("string"==typeof t&&(t=document.getElementById(t)),i=this.list.length;i--;)if(this.list[i].element===t)return this.list[i].drawing=this._determineDrawingFunction(n),void this.draw(this.list[i],500);this.add(t,n)},remove:function(t){var n;for("string"==typeof t&&(t=document.getElementById(t)),n=this.list.length;n--;)if(this.list[n].element===t)return void this.list.splice(n,1)},draw:function(t,n){var i=t.context.canvas;this.resizeClear?i.width=i.width:t.context.clearRect(0,0,i.width,i.height),t.drawing(t.context,n,this.color)},play:function(){var t=this;this.pause(),this.interval=n(function(){var n,i=Date.now();for(n=t.list.length;n--;)t.draw(t.list[n],i)},1e3/60)},pause:function(){this.interval&&(i(this.interval),this.interval=null)}},t.Skycons=g}(this);
},{}],"r4wY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setSkycons=c;var e=require("./getRefs"),s=require("./skycons");const o=(0,e.getRefs)(),t={mist:"WIND",snow:"SNOW","clear sky":"CLEAR_DAY"};function c(e){const c=t[e],n=new s.Skycons({color:"lightblue"});n.set(o.skycons,s.Skycons[c]),n.play()}
},{"./getRefs":"qJUB","./skycons":"k6Uf"}],"CqM2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.markupWeather=o;var e=require("./getRefs"),t=require("./setSkycons");const n=(0,e.getRefs)();function o({name:e,weather:o,main:r}){console.log(...o),n.tempetatureDegree.textContent=Math.round(r.temp),n.timeZone.textContent=e,n.decs.textContent=o[0].main,n.icon.src=`https://openweathermap.org/img/wn/${o[0].icon}@2x.png`,(0,t.setSkycons)(o[0].description)}
},{"./getRefs":"qJUB","./setSkycons":"r4wY"}],"UdK5":[function(require,module,exports) {
"use strict";function e(e,t){return fetch(`https://api.opencagedata.com/geocode/v1/json?q=${e}+${t}&key=d4683b09d0c94ec0aebf0b2e043decbf`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e.results[0].components.city||e.results[0].components.country)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPositionName=e;
},{}],"PYqE":[function(require,module,exports) {
"use strict";function e(e){console.log(e);return fetch("https://pixabay.com/api/?image_type=backgrounds&orientation=horizontal&q=kyiv&per_page=20&key=24332241-c798d1feff33a91af8e5caf46\n  ").then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getImg=e;
},{}],"Lq87":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setBackground=t;var e=require("./getRefs");const r=(0,e.getRefs)();function t({hits:e}){const t=((e,r)=>Math.floor(Math.random()*(r-e+1)+e))(0,e.length-1);r.body.style=`background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),\nurl('${e[t].largeImageURL}') center fixed; background-size: cover;`,console.log(e[t].largeImageURL)}
},{"./getRefs":"qJUB"}],"qZeF":[function(require,module,exports) {
"use strict";var e=require("./weather"),t=require("./markupWeather"),r=require("./getPositionName"),o=require("./getImg"),a=require("./setBackground");navigator.geolocation&&navigator.geolocation.getCurrentPosition(i=>{const n=i.coords.longitude,g=i.coords.latitude;(0,e.getWeather)(g,n).then(t.markupWeather).catch(console.error),(0,r.getPositionName)(g,n).then(o.getImg).then(a.setBackground)});
},{"./weather":"AZzu","./markupWeather":"CqM2","./getPositionName":"UdK5","./getImg":"PYqE","./setBackground":"Lq87"}],"jPMh":[function(require,module,exports) {
var define;
var t;!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof t&&t.amd?t([],n):"object"==typeof exports?exports.Pagination=n():(e.tui=e.tui||{},e.tui.Pagination=n())}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,i,s,r,o=Object.prototype.hasOwnProperty;for(s=1,r=arguments.length;s<r;s+=1)for(i in n=arguments[s])o.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var i=n(2),s=n(17),r=n(6);t.exports=function(t,e,n){i(t)?s(t,e,n):r(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){"use strict";var i=n(18),s=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(s(n,e.static),delete e.static),s(n.prototype,e),n}},function(t,e,n){"use strict";var i=n(2);t.exports=function(t,e,n){var s,r;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(r=e.length,s=n;n>=0&&s<r;s+=1)if(e[s]===t)return s;return-1}},function(t,e,n){"use strict";var i=n(29),s=n(30),r=n(5),o={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),s=r(t)?t(e):i(t,e);return n.innerHTML=s,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){s("pagination","UA-129987462-1")}};t.exports=o},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var i=n(13),s=n(7),r=n(0),o=n(1),a=n(20),u=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},p=s({init:function(t,e){this._options=r({},c,e),this._currentPage=0,this._view=new a(t,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),s=this._getPageIndex(n),r=this._getEdge(t);return e.leftPageNumber=r.left,e.rightPageNumber=r.right,e.prevMore=i>1,e.nextMore=i<s,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,s=this._getLastPage(),r=this._options.visiblePages,o=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(r/2),(n=(e=Math.max(t-i,1))+r-1)>s&&(e=Math.max(s-r+1,1),n=s)):(e=(o-1)*r+1,n=o*r,n=Math.min(n,s)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){o(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(p),t.exports=p},function(t,e,n){"use strict";var i=n(0),s=n(14),r=n(4),o=n(16),a=n(2),u=n(5),c=n(3),p=/\s+/g;function l(){this.events=null,this.contexts=null}l.mixin=function(t){i(t.prototype,l.prototype)},l.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},l.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},l.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},l.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},l.prototype._memorizeContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},l.prototype._forgetContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},l.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},l.prototype.on=function(t,e,n){var i=this;r(t)?(t=t.split(p),c(t,function(t){i._bindEvent(t,e,n)})):o(t)&&(n=e,c(t,function(t,e){i.on(e,t,n)}))},l.prototype.once=function(t,e,n){var i=this;if(o(t))return n=e,void c(t,function(t,e){i.once(e,t,n)});this.on(t,function s(){e.apply(n,arguments),i.off(t,s,n)},n)},l.prototype._spliceMatches=function(t,e){var n,i=0;if(a(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},l.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},l.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},l.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var s=t===i.handler,r=e===i.context,o=s&&r;return o&&n._forgetContext(i.context),o}},l.prototype._offByEventName=function(t,e){var n=this,i=u(e),s=n._matchHandler(e);t=t.split(p),c(t,function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,s):(c(e,function(t){n._forgetContext(t.context)}),n.events[t]=[])})},l.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);c(this._safeEvent(),function(t){e._spliceMatches(t,n)})},l.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?c(t,function(t,e){i.off(e,t)}):r(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):u(e)?(n=this._matchHandlerAndContext(e,t),c(this._safeEvent(),function(t){i._spliceMatches(t,n)})):(n=this._matchContext(t),c(this._safeEvent(),function(t){i._spliceMatches(t,n)}))},l.prototype.off=function(t,e){r(t)?this._offByEventName(t,e):arguments.length?u(t)?this._offByHandler(t):o(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},l.prototype.fire=function(t){this.invoke.apply(this,arguments)},l.prototype.invoke=function(t){var e,n,i,s;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(s=e[i]).handler.apply(s.context,n))return!1;i+=1}return!0},l.prototype.hasListener=function(t){return this.getListenerLength(t)>0},l.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=l},function(t,e,n){"use strict";var i=n(1),s=n(15);t.exports=function(t){return!i(t)&&!s(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i=0,s=t.length;for(n=n||null;i<s&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){"use strict";var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var i=n(3),s=n(7),r=n(21),o=n(22),a=n(24),u=n(25),c=n(0),p=n(4),l=n(28),f=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},g=["first","prev","next","last"],_=["prev","next"],d=s({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=c({},h,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(p(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!l(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(g,function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})},this)},_setDisabledMoveButtons:function(){i(g,function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})},this)},_setMoreButtons:function(){i(_,function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})},this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,u(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,u(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,s=t.rightPageNumber;for(n=i;n<=s;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||u(e,this._firstItemClassName),n!==s||t.nextMore||u(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();o(e,"click",function(e){var n,i,s=r(e);a(e),(i=this._getButtonType(s))||(n=this._getPageNumber(s)),t(i,n)},this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,function(n,i){return!f.isContained(t,n)||(e=i,!1)},this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,function(t,e){this._buttons[e]=t.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=d},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var i=n(4),s=n(3),r=n(23);function o(t,e,n,i){function o(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,o):"attachEvent"in t&&t.attachEvent("on"+e,o),function(t,e,n,i){var o=r(t,e),a=!1;s(o,function(t){return t.handler!==n||(a=!0,!1)}),a||o.push({handler:n,wrappedHandler:i})}(t,e,n,o)}t.exports=function(t,e,n,r){i(e)?s(e.split(/\s+/g),function(e){o(t,e,n,r)}):s(e,function(e,i){o(t,i,e,n)})}},function(t,e,n){"use strict";var i="_feEventKey";t.exports=function(t,e){var n,s=t[i];return s||(s=t[i]={}),(n=s[e])||(n=s[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var i=n(3),s=n(8),r=n(26),o=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,u=[];a?i(n,function(e){t.classList.add(e)}):((e=r(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,function(t){s(t,u)<0&&u.push(t)}),o(t,u))}},function(t,e,n){"use strict";var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var i=n(2),s=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),s(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var i=n(8),s=n(3),r=n(2),o=n(4),a=n(0),u=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,p=/\[\s?|\s?\]/,l=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,h=/^["']\w+["']$/,g=/"|'/g,_=/^-?\d+\.?\d*$/,d=2,v={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],r=0,o=0;return s(e,function(t,s){0===t.indexOf("if")?r+=1:"/if"===t?r-=1:r||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(o,s)),o=s+1)}),i.push(e.slice(o)),{exps:n,sourcesInsideIf:i}}(t,e),r=!1,o="";return s(i.exps,function(t,e){return(r=b(t,n))&&(o=P(i.sourcesInsideIf[e],n)),!r}),o},each:function(t,e,n){var i=b(t,n),o=r(i)?"@index":"@key",u={},c="";return s(i,function(t,i){u[o]=i,u["@this"]=t,a(n,u),c+=P(e.slice(),n)}),c},with:function(t,e,n){var s=i("as",t),r=t[s+1],o=b(t.slice(0,s),n),u={};return u[r]=o,P(e,a(n,u))||""}},m=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,s=[],r=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,s.push(t.slice(r,i)),r=i+n[0].length,n=e.exec(t);return s.push(t.slice(r)),s};function x(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:h.test(t)?i=t.replace(g,""):c.test(t)?i=x((n=t.split(p))[0],e)[x(n[1],e)]:l.test(t)?i=x((n=t.split(f))[0],e)[n[1]]:_.test(t)&&(i=parseFloat(t)),i}function y(t,e,n){for(var i,s,r,a,u=v[t],c=1,p=0+d,l=e[p];c&&o(l);)0===l.indexOf(t)?c+=1:0===l.indexOf("/"+t)&&(c-=1,i=p),l=e[p+=d];if(c)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=u(e[0].split(" ").slice(1),(s=0,r=i,(a=e.splice(s+1,r-s)).pop(),a),n),e}function b(t,e){var n=x(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return s(e,function(t){i.push(x(t,n))}),t.apply(null,i)}(n,t.slice(1),e):n}function P(t,e){for(var n,i,s,r=1,a=t[r];o(a);)i=(n=a.split(" "))[0],v[i]?(s=y(i,t.splice(r,t.length-r),e),t=t.concat(s)):t[r]=b(n,e),a=t[r+=d];return t.join("")}t.exports=function(t,e){return P(m(t,u),e)}},function(t,e,n){"use strict";var i=n(1),s=n(31),r=6048e5;t.exports=function(t,e){var n=location.hostname,o="TOAST UI "+t+" for "+n+": Statistics",a=window.localStorage.getItem(o);(i(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(t){return(new Date).getTime()-t>r}(a)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout(function(){"interactive"!==document.readyState&&"complete"!==document.readyState||s("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})},1e3)))}},function(t,e,n){"use strict";var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),s="";return i(e,function(t,e){s+="&"+e+"="+t}),s=s.substring(1),n.src=t+"?"+s,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])});
},{}],"UYQs":[function(require,module,exports) {

},{}],"dUae":[function(require,module,exports) {
"use strict";var n=e(require("tui-pagination"));function e(n){return n&&n.__esModule?n:{default:n}}require("tui-pagination/dist/tui-pagination.css");const t=document.querySelector(".image-list"),a=document.getElementById("pagination"),i="https://pixabay.com/api/",s="key=24332293-f673b61ccd63539823a678f1a",o=10,r={totalItems:10,itemsPerPage:o,visiblePages:7,page:1},p=new n.default(a,r),c=p.getCurrentPage();function l(n){return fetch(`${i}?${s}&q=city&image_type=photo&orientation=horizontal&safesearch=true&per_page=${o}&page=${n}`).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()}).then(n=>({images:n.hits,total:n.totalHits}))}function g(n){const e=n.map(({webformatURL:n,largeImageURL:e,tags:t,likes:a,views:i,comments:s,downloads:o})=>`<a href="${e}">\n        <div class="photo-card">\n          <div class="thumb">\n      <img src="${n}" alt="${t}" loading="lazy" />\n      </div>\n      <div class="info">\n        <p class="info-item">\n          <b>Likes</b>\n          <span>${a}</span>\n        </p>\n        <p class="info-item">\n          <b>Views</b>\n          <span>${i}</span>\n        </p>\n        <p class="info-item">\n          <b>Comments</b>\n          <span>${s}</span>\n        </p>\n        <p class="info-item">\n          <b>Downloads</b>\n          <span>${o}</span>\n        </p>\n      </div>\n    </div>\n    </a>`).join("");t.insertAdjacentHTML("beforeend",e)}console.log(c),l(c).then(({images:n,total:e})=>{g(n),p.reset(e)}),p.on("afterMove",({page:n})=>{l(n).then(({images:n})=>{g(n)})});
},{"tui-pagination":"jPMh","tui-pagination/dist/tui-pagination.css":"UYQs"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/getGeolocation"),require("./js/tuiPagination");
},{"./sass/main.scss":"clu1","./js/getGeolocation":"qZeF","./js/tuiPagination":"dUae"}]},{},["Focm"], null)
//# sourceMappingURL=/group_parcel/src.6e385b22.js.map
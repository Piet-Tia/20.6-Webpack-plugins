!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([function(e,t,n){"use strict";e.exports=n(8)},function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var o=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,o=n;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),u=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,f=0,l=[],s=n(13);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(m(r.parts[a],t))}else{var u=[];for(a=0;a<r.parts.length;a++)u.push(m(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:u}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}function y(e,t){var n=u(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=u(e.insertAt.before,n);n.insertBefore(t,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return b(t,e.attrs),y(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function m(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=f++;n=c||(c=h(t)),r=j.bind(null,n,a,!1),o=j.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),y(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=s(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(a),u&&URL.revokeObjectURL(u)}.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(u=i[a.id]).refs--,r.push(u)}e&&p(d(e,t),t);for(o=0;o<r.length;o++){var u;if(0===(u=r[o]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete i[u.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function j(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t,n){var r=n(10),o=n(11),i=o;i.v1=r,i.v4=o,e.exports=i},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(14);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";
/** @license React v16.6.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(9),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,v=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,i,a,u){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,u],f=0;(e=Error(t.replace(/%s/g,function(){return c[f++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function j(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||g}function S(){}function x(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||g}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=j.prototype;var O=x.prototype=new S;O.constructor=x,r(O,j.prototype),O.isPureReactComponent=!0;var _={current:null,currentDispatcher:null},k=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r=void 0,o={},a=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var f=Array(c),l=0;l<c;l++)f[l]=arguments[l+2];o.children=f}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:i,type:e,key:a,ref:u,props:o,_owner:_.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var A=/\/+/g,P=[];function T(e,t,n,r){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function U(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function $(e,t,n){return null==e?0:function e(t,n,r,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case i:case a:c=!0}}if(c)return r(o,t,""===n?"."+I(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var f=0;f<t.length;f++){var l=n+I(u=t[f],f);c+=e(u,l,r,o)}else if(l=null===t||"object"!=typeof t?null:"function"==typeof(l=b&&t[b]||t["@@iterator"])?l:null,"function"==typeof l)for(t=l.call(t),f=0;!(u=t.next()).done;)c+=e(u=u.value,l=n+I(u,f++),r,o);else"object"===u&&m("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return c}(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?N(e,r,n,function(e){return e}):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(A,"$&/")+"/")+n)),r.push(e))}function N(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(A,"$&/")+"/"),$(e,L,t=T(t,i,r,o)),U(t)}var B={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return N(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;$(e,M,t=T(null,null,t,n)),U(t)},count:function(e){return $(e,function(){return null},null)},toArray:function(e){var t=[];return N(e,t,null,function(e){return e}),t},only:function(e){return R(e)||m("143"),e}},createRef:function(){return{current:null}},Component:j,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:v,type:e,compare:void 0===t?null:t}},Fragment:u,StrictMode:c,Suspense:y,createElement:E,cloneElement:function(e,t,n){null==e&&m("267",e);var o=void 0,a=r({},e.props),u=e.key,c=e.ref,f=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,f=_.current),void 0!==t.key&&(u=""+t.key);var l=void 0;for(o in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)k.call(t,o)&&!C.hasOwnProperty(o)&&(a[o]=void 0===t[o]&&void 0!==l?l[o]:t[o])}if(1===(o=arguments.length-2))a.children=n;else if(1<o){l=Array(o);for(var s=0;s<o;s++)l[s]=arguments[s+2];a.children=l}return{$$typeof:i,type:e.type,key:u,ref:c,props:a,_owner:f}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.6.3",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:_,assign:r}};B.unstable_ConcurrentMode=p,B.unstable_Profiler=f;var q={default:B},F=q&&B||q;e.exports=F.default||F},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var f in n=Object(arguments[c]))o.call(n,f)&&(u[f]=n[f]);if(r){a=r(n);for(var l=0;l<a.length;l++)i.call(n,a[l])&&(u[a[l]]=n[a[l]])}}return u}},function(e,t,n){var r,o,i=n(1),a=n(2),u=0,c=0;e.exports=function(e,t,n){var f=t&&n||0,l=t||[],s=(e=e||{}).node||r,p=void 0!==e.clockseq?e.clockseq:o;if(null==s||null==p){var d=i();null==s&&(s=r=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==p&&(p=o=16383&(d[6]<<8|d[7]))}var y=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:c+1,h=y-u+(v-c)/1e4;if(h<0&&void 0===e.clockseq&&(p=p+1&16383),(h<0||y>u)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");u=y,c=v,o=p;var b=(1e4*(268435455&(y+=122192928e5))+v)%4294967296;l[f++]=b>>>24&255,l[f++]=b>>>16&255,l[f++]=b>>>8&255,l[f++]=255&b;var m=y/4294967296*1e4&268435455;l[f++]=m>>>8&255,l[f++]=255&m,l[f++]=m>>>24&15|16,l[f++]=m>>>16&255,l[f++]=p>>>8|128,l[f++]=255&p;for(var g=0;g<6;++g)l[f+g]=s[g];return t||a(l)}},function(e,t,n){var r=n(1),o=n(2);e.exports=function(e,t,n){var i=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||r)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var u=0;u<16;++u)t[i+u]=a[u];return t||o(a)}},function(e,t,n){(t=e.exports=n(3)(!1)).push([e.i,"._2xo2biYT1s9XQmHhT2Utv5 {\r\n    background-color: #F5F5F5;\r\n    color: #222;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-content: center;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n",""]),t.locals={TodoApp:"_2xo2biYT1s9XQmHhT2Utv5"}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){(t=e.exports=n(3)(!1)).push([e.i,"._1eGB81rJBIjbIiXSAP57Fu {\r\n\ttext-align: center;\r\n}\r\n",""]),t.locals={titleText:"_1eGB81rJBIjbIiXSAP57Fu"}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(5),a=n.n(i),u=n(6),c=n.n(u),f=n(7),l=n.n(f),s=function(e){return o.a.createElement("div",{className:l.a.titleText},o.a.createElement("h1",null,e.title),o.a.createElement("p",null,"Number of tasks: ",e.numberOfTasks))};function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=v(this,h(t).call(this,e))).state={data:[{text:"a",id:1231231231234},{text:"b",id:567856857567567}],title:"Webpack loaders training"},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o.a.Component),n=t,(r=[{key:"addTodo",value:function(e){var t={text:e,id:a.a.v4()},n=d(this.state.data).concat([t]);this.setState({data:n})}},{key:"removeTodo",value:function(e){var t=this.state.data.filter(function(t){return t.id!==e});this.setState({data:t})}},{key:"render",value:function(){return o.a.createElement("div",{className:c.a.TodoApp},o.a.createElement(s,{title:this.state.title,numberOfTasks:this.state.data.length}))}}])&&y(n.prototype,r),i&&y(n,i),t}();t.default=m}]);
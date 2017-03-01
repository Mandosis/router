var AlpineRouter=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="D:\\Chris\\Workspace\\alpine\\router",t(t.s=0)}([function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(){function e(t){var r=this;if(n(this,e),this._routes=[],Array.isArray(t)){var o=!0,a=!1,i=void 0;try{for(var u,l=t[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var s=u.value;this._routes.push(s)}}catch(e){a=!0,i=e}finally{try{!o&&l.return&&l.return()}finally{if(a)throw i}}}else console.error('Router: Failed to create router.\nDid you enter an array of objects in the following format [{ path: "example", template: "<h1>Example</h1>"}]?');this._getWindowUrlAndNavigate(),window.onhashchange=function(){r._getWindowUrlAndNavigate()}}return o(e,[{key:"getPathTokens",value:function(e){var t=e.split("/");return""===t[0]&&""===t[1]&&(t=[""]),t}},{key:"sanitizePath",value:function(e){return"#"===e.charAt(0)&&(e=e.slice(1,e.length)),"/"===e.charAt(0)&&"/"!==e&&(e=e.slice(1,e.length)),e}},{key:"navigate",value:function(e){e=this.sanitizePath(e);var t=this.getPathTokens(e),r=new Map,n=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var l=i.value;r.set(l,!1)}}catch(e){o=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}var s=this._getRoutes(this._routes,t,r);return s.length>0?(this._changeBrowserUrl(e),this._addTemplatesToDom(s),!0):(console.error("Router: No route found for path '"+e+"'."),!1)}},{key:"_getRoutes",value:function(e,t,r,n){n=n||[];var o=!0,a=!1,i=void 0;try{for(var u,l=e[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var s=u.value,c=this.getPathTokens(s.path);r=this._compareTokens(c,t,r);var f=this._countConsecutiveTokens(r),h=f===r.size,v=f<r.size&&0!==f;if(h)return n.push(s),n;if(v&&s.children)return n.push(s),this._getRoutes(s.children,t,r,n)}}catch(e){a=!0,i=e}finally{try{!o&&l.return&&l.return()}finally{if(a)throw i}}return[]}},{key:"_compareTokens",value:function(e,t,r){var n=0,o=!0,a=!1,i=void 0;try{for(var u,l=t[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var s=u.value;r.get(s)&&n++}}catch(e){a=!0,i=e}finally{try{!o&&l.return&&l.return()}finally{if(a)throw i}}n>0&&(t=t.slice(n,e.length+1));for(var c=0;c<t.length;c++){var f=e[c],h=t[c];if(!r.get(h)){if(void 0===f)return r;f===h&&r.set(h,!0)}}return r}},{key:"_countConsecutiveTokens",value:function(e){var t=0,r=!0,n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var l=i.value;if(!l[1]||!r)return t;t++}}catch(e){o=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}return t}},{key:"_getWindowUrlAndNavigate",value:function(){if(this._baseHrefValue){var e=window.location.pathname;return e=e.substring(this._baseHrefValue.length,e.length),this.navigate(e)}this.navigate(window.location.hash)}},{key:"_changeBrowserUrl",value:function(e){var t=this._getAndAppendBaseHref(e);history.pushState("",e,t)}},{key:"_getAndAppendBaseHref",value:function(e){"/"===e&&(e="");var t=this._baseHrefValue;return t&&"/"!==t?t+e:t&&"/"===t?e:"#/"+e}},{key:"_addTemplatesToDom",value:function(e){for(var t=this,r=function(r){var n=document.getElementsByTagName("router-outlet");n[r]||console.error("Router: router-outlet missing."),e[r].template?n[r].innerHTML=e[r].template:t._getRemoteTemplate(e[r].templateUrl).then(function(e){n[r].innerHTML=e}).catch(function(e){console.error("Router: Failed to get template.\n"+e)})},n=0;n<e.length;n++)r(n)}},{key:"_getRemoteTemplate",value:function(e){return new Promise(function(t,r){window.fetch(e).then(function(e){return e.text()}).then(function(e){return t(e)}).catch(function(e){return r(e)})})}},{key:"routes",get:function(){return this._routes}},{key:"_baseHrefValue",get:function(){var e=document.getElementsByTagName("base")[0];if(e)return e.attributes.getNamedItem("href").value}}]),e}();t.default=a}]);
//# sourceMappingURL=router.js.map
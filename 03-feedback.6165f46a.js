!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={save:function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:function(e){try{localStorage.removeItem(e)}catch(e){console.log("Remove item error: ",e.message)}}},r={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",a=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,v=s||d||Function("return this")(),m=Object.prototype.toString,y=Math.max,b=Math.min,g=function(){return v.Date.now()};function p(e,t,n){var r,o,a,f,u,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function m(t){var n=r,i=o;return r=o=void 0,l=t,f=e.apply(i,n)}function p(e){return l=e,u=setTimeout(w,t),s?m(e):f}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function w(){var e=g();if(O(e))return S(e);u=setTimeout(w,function(e){var n=t-(e-c);return d?b(n,a-(e-l)):n}(e))}function S(e){return u=void 0,v&&r?m(e):(r=o=void 0,f)}function T(){var e=g(),n=O(e);if(r=arguments,o=this,c=e,n){if(void 0===u)return p(c);if(d)return u=setTimeout(w,t),m(c)}return void 0===u&&(u=setTimeout(w,t)),f}return t=j(t)||0,h(n)&&(s=!!n.leading,a=(d="maxWait"in n)?y(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=o=u=void 0},T.flush=function(){return void 0===u?f:S(g())},T}function h(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(h(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=h(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var r=u.test(e);return r||c.test(e)?l(e.slice(2),r?2:8):f.test(e)?NaN:+e}r=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return h(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form"),w={};!function(){var e=n.load("feedback-form-state");for(var t in e)e.hasOwnProperty(t)&&(O.elements[t].value=e[t])}();O.addEventListener("input",r((function(e){var t=e.target,r=t.value,o=t.name;w[o]=r,n.save("feedback-form-state",w)}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),console.log(n.load("feedback-form-state")),n.remove("feedback-form-state"),O.reset()}))}();
//# sourceMappingURL=03-feedback.6165f46a.js.map

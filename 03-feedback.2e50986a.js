!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,g=Math.max,b=Math.min,v=function(){return d.Date.now()};function p(e,t,n){var o,i,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(T,t),s?p(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function T(){var e=v();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return d?b(n,a-(e-c)):n}(e))}function h(e){return f=void 0,m&&o?p(e):(o=i=void 0,u)}function w(){var e=v(),n=O(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(T,t),p(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},w.flush=function(){return void 0===f?u:h(v())},w}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var j={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea"),button:document.querySelector(".feedback-form button")},O="feedback-form-state",T={email:"",message:""};j.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(T),e.currentTarget.reset(),localStorage.removeItem(O),T.email="",T.message=""})),j.form.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(T)),w()}),500));var h;function w(){""!==T.email&&""!==T.message?j.button.disabled=!1:j.button.disabled=!0}setInterval((function(){var e=JSON.parse(localStorage.getItem(O));localStorage.getItem(O)&&(""!==e.email&&""!==e.message||(j.button.disabled=!0),""===e.email&&""===e.message||(j.button.disabled=!1))}),1e3),h=JSON.parse(localStorage.getItem(O)),localStorage.getItem(O)&&(j.input.value=h.email,j.textarea.value=h.message,T.email=h.email,T.message=h.message),w()}();
//# sourceMappingURL=03-feedback.2e50986a.js.map

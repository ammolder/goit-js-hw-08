function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return l.Date.now()};function b(e,t,n){var o,r,a,i,f,u,c=0,l=!1,s=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,a=r;return o=r=void 0,c=t,i=e.apply(a,n)}function S(e){return c=e,f=setTimeout(k,t),l?y(e):i}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=a}function k(){var e=g();if(j(e))return x(e);f=setTimeout(k,function(e){var n=t-(e-u);return s?d(n,a-(e-c)):n}(e))}function x(e){return f=void 0,b&&o?y(e):(o=r=void 0,i)}function O(){var e=g(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(k,t),y(u)}return void 0===f&&(f=setTimeout(k,t)),i}return t=v(t)||0,p(n)&&(l=!!n.leading,a=(s="maxWait"in n)?m(v(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},O.flush=function(){return void 0===f?i:x(g())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||i.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};const y={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea"),button:document.querySelector(".feedback-form button")},S={email:"",message:""};y.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(S),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),S.email="",S.message=""})),y.form.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500));setInterval((()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));localStorage.getItem("feedback-form-state")&&(""!==e.email&&""!==e.message||(y.button.disabled=!0),""===e.email&&""===e.message||(y.button.disabled=!1))}),1e3),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));localStorage.getItem("feedback-form-state")&&(y.input.value=e.email,y.textarea.value=e.message,S.email=e.email,S.message=e.message)}();
//# sourceMappingURL=03-feedback.ed093a71.js.map

function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,s=u||c||Function("return this")(),l=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return s.Date.now()};function b(e,t,n){var r,o,a,i,f,u,c=0,s=!1,l=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,a=o;return r=o=void 0,c=t,i=e.apply(a,n)}function S(e){return c=e,f=setTimeout(x,t),s?y(e):i}function j(e){var n=e-u;return void 0===u||n>=t||n<0||l&&e-c>=a}function x(){var e=g();if(j(e))return T(e);f=setTimeout(x,function(e){var n=t-(e-u);return l?d(n,a-(e-c)):n}(e))}function T(e){return f=void 0,b&&r?y(e):(r=o=void 0,i)}function h(){var e=g(),n=j(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return S(u);if(l)return f=setTimeout(x,t),y(u)}return void 0===f&&(f=setTimeout(x,t)),i}return t=v(t)||0,p(n)&&(s=!!n.leading,a=(l="maxWait"in n)?m(v(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},h.flush=function(){return void 0===f?i:T(g())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||i.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};const y={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea"),button:document.querySelector(".feedback-form button")},S={email:"",message:""};y.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(S),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),S.email="",S.message=""})),y.form.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500));setInterval((()=>{localStorage.getItem("feedback-form-state")&&(""!==parseMessage.email&&""!==parseMessage.message||(y.button.disabled=!0),""===parseMessage.email&&""===parseMessage.message||(y.button.disabled=!1))}),1e3),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));localStorage.getItem("feedback-form-state")&&(y.input.value=e.email,y.textarea.value=e.message,S.email=e.email,S.message=e.message)}();
//# sourceMappingURL=03-feedback.bc4fdff2.js.map
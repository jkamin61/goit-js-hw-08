!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequire4c75;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequire4c75=a);var o=a("1WSnx"),n=document.querySelector("input"),l=document.querySelector("textarea"),i={email:"",text:""};n.addEventListener("input",(0,o.throttle)((function(e){i.email=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(i))}),500));l.addEventListener("input",(0,o.throttle)((function(e){i.text=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(i))}),500));var u=localStorage.getItem("feedback-form-state"),f=JSON.parse(u);!f||!0!==f.hasOwnProperty("email")&&!0!==f.hasOwnProperty("text")?(n.value="",l.value=""):""===f.email&&""===f.text||(n.value=f.email,l.value=f.text),document.querySelector(".feedback-form").addEventListener("submit",(function(e){e.preventDefault(),console.log(i),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.39823632.js.map

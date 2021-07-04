(()=>{"use strict";var e={890:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  min-height: 100vh;\n  font-family: sans-serif;\n}\n\n#app-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  max-width: 500px;\n  margin: 100px auto 0;\n}\n\n#timer-display-container {\n  position: relative;\n  margin-bottom: 20px;\n}\n\n#timer-display {\n  font-size: 5.4rem;\n  text-align: center;\n}\n\n#modify-times-container {\n  position: absolute;\n  top: 25%;\n  right: -105px;\n  display: flex;\n}\n\n.modify-time-container {\n  margin-left: 7px;\n  margin-right: 7px;\n  text-align: center;\n  color: #666;\n}\n.modify-time-container i {\n  cursor: pointer;\n}\n\n#quick-select-time-container {\n  flex-basis: 100%;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 50px;\n}\n\n.quick-select-time {\n  margin-left: 15px;\n  margin-right: 15px;\n  width: 50px;\n  padding: 5px 15px;\n  text-align: center;\n  background: #eee;\n  border: 1px solid #000;\n  border-radius: 15px;\n  cursor: pointer;\n}\n\n#sound-effects-container {\n  flex-basis: 100%;\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 60px;\n}\n#sound-effects-container .sound-effect {\n  width: 50px;\n  height: 50px;\n  background: pink;\n}\n\n#start-btn {\n  padding: 12px 40px;\n  font-weight: 600;\n  font-size: 1rem;\n  color: #fff;\n  background: steelblue;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n",""]);const o=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},695:e=>{var t={};e.exports=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var m=n(u),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==m?(t[m].references++,t[m].updater(f)):t.push({identifier:u,updater:i(f,r),references:1}),a.push(u)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var c=n(o[a]);t[c].references--}for(var s=r(e,i),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=s}}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),i=n.n(r),o=n(695),a=n.n(o),c=n(216),s=n.n(c),d=n(890),l={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=a()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};l.domAPI=i(),l.insertStyleElement=s(),t()(d.Z,l),d.Z&&d.Z.locals&&d.Z.locals;const u=(()=>{const e=(()=>{const e=()=>{const e=document.createElement("div");return e.id="modify-times-container",[1,5,10].forEach((t=>{const n=document.createElement("div"),r=document.createElement("i"),i=document.createElement("i"),o=document.createElement("p");n.classList.add("modify-time-container"),r.classList.add("increment-time-btn","fas","fa-plus"),i.classList.add("decrement-time-btn","fas","fa-minus"),o.classList.add("modify-time-amount"),o.textContent=t,[r,o,i].forEach((e=>n.appendChild(e))),e.appendChild(n)})),e};return{timerDisplay:()=>{const t=document.createElement("div"),n=document.createElement("h2");return t.id="timer-display-container",n.id="timer-display",[n,e()].forEach((e=>t.appendChild(e))),t},modifyTimesContainer:e,quickSelectTimeContainer:()=>{const e=document.createElement("div");return e.id="quick-select-time-container",[5,10,15].forEach((t=>{const n=document.createElement("p");n.classList.add("quick-select-time"),n.textContent=t,e.appendChild(n)})),e},soundEffectsContainer:()=>{const e=document.createElement("div");return e.id="sound-effects-container",["effect1","effect2","effect3","effect4"].forEach((t=>{const n=document.createElement("div");n.id=t,n.classList.add("sound-effect"),e.appendChild(n)})),e},startBtn:()=>{const e=document.createElement("button");return e.id="start-btn",e.textContent="Start",e}}})();return{initialRender:()=>{const t=document.createElement("div"),n=e.timerDisplay(),r=e.quickSelectTimeContainer(),i=e.soundEffectsContainer(),o=e.startBtn();t.id="app-container",[n,r,i,o].forEach((e=>t.appendChild(e))),document.querySelector("body").appendChild(t)},updateTimerDisplay:e=>{document.querySelector("#timer-display").textContent=e}}})(),m=60;let f=0;const p=()=>{const e=(e=>{let t=String(e>=m?Math.floor(e/m):0),n=String(Math.round(e%m));return`${t.padStart(2,"0")}:${n.padStart(2,"0")}`})(f);u.updateTimerDisplay(e)};u.initialRender(),p(),[...document.querySelectorAll(".modify-time-container")].forEach((e=>{e.addEventListener("click",(e=>{let t;e.target.classList.contains("increment-time-btn")&&(t=e.target.parentElement.querySelector(".modify-time-amount").textContent,(e=>{f+=e*m})(t),p()),e.target.classList.contains("decrement-time-btn")&&(t=e.target.parentElement.querySelector(".modify-time-amount").textContent,(e=>{if(f-e*m<0)return f=0;f-=e*m})(t),p())}))})),[...document.querySelectorAll(".quick-select-time")].forEach((e=>{e.addEventListener("click",(e=>{let t=e.target.textContent;f=t*m,p()}))})),[...document.querySelectorAll(".sound-effect")].forEach((e=>{})),document.querySelector("#start-btn").addEventListener("click",(()=>{const e=setInterval((()=>{f-=1,p(),f<=0&&clearInterval(e)}),1e3)}))})()})();
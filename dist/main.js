(()=>{"use strict";var e={890:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  min-height: 100vh;\n  font-family: sans-serif;\n}\n\n#app-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  max-width: 500px;\n  margin: 100px auto 0;\n}\n\n#timer-display-container {\n  position: relative;\n  margin-bottom: 20px;\n}\n\n#timer-display {\n  font-size: 5.4rem;\n  text-align: center;\n}\n\n#modify-times-container {\n  position: absolute;\n  top: 25%;\n  right: -105px;\n  display: flex;\n}\n\n.modify-time-container {\n  margin-left: 7px;\n  margin-right: 7px;\n  text-align: center;\n  color: #666;\n}\n.modify-time-container i {\n  cursor: pointer;\n}\n\n#quick-select-time-container {\n  flex-basis: 85%;\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 50px;\n  border: 1px solid #000;\n  border-radius: 5px;\n}\n\n.quick-select-time {\n  width: 100%;\n  padding: 7px;\n  text-align: center;\n  background: #eee;\n  border: 1px solid #000;\n  cursor: pointer;\n}\n.quick-select-time:hover {\n  background: #ddd;\n}\n\n#sound-effects-container {\n  flex-basis: 100%;\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 60px;\n}\n#sound-effects-container .sound-effect {\n  font-size: 2.4rem;\n  cursor: pointer;\n}\n#sound-effects-container .selected-sound {\n  color: goldenrod;\n}\n\n#start-btn {\n  padding: 12px 40px;\n  font-weight: 600;\n  font-size: 1rem;\n  color: #fff;\n  background: steelblue;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},695:e=>{var n={};e.exports=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var f=t(l),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(n[f].references++,n[f].updater(m)):n.push({identifier:l,updater:o(m,r),references:1}),a.push(l)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=r(e,o),d=0;d<i.length;d++){var u=t(i[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=c}}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(695),a=t.n(i),s=t(216),c=t.n(s),d=t(890),u={styleTagTransform:function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}},setAttributes:function(e){var n=t.nc;n&&e.setAttribute("nonce",n)},insert:function(e){var n=a()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}};u.domAPI=o(),u.insertStyleElement=c(),n()(d.Z,u),d.Z&&d.Z.locals&&d.Z.locals;const l=(()=>{const e=(()=>{const e=()=>{const e=document.createElement("div");return e.id="modify-times-container",[1,5,10].forEach((n=>{const t=document.createElement("div"),r=document.createElement("i"),o=document.createElement("i"),i=document.createElement("p");t.classList.add("modify-time-container"),r.classList.add("increment-time-btn","fas","fa-plus"),o.classList.add("decrement-time-btn","fas","fa-minus"),i.classList.add("modify-time-amount"),i.textContent=n,[r,i,o].forEach((e=>t.appendChild(e))),e.appendChild(t)})),e};return{timerDisplay:()=>{const n=document.createElement("div"),t=document.createElement("h2");return n.id="timer-display-container",t.id="timer-display",[t,e()].forEach((e=>n.appendChild(e))),n},modifyTimesContainer:e,quickSelectTimeContainer:()=>{const e=document.createElement("div");return e.id="quick-select-time-container",[5,10,15].forEach((n=>{const t=document.createElement("p");t.classList.add("quick-select-time"),t.textContent=n,e.appendChild(t)})),e},soundEffectsContainer:()=>{const e=document.createElement("div");return e.id="sound-effects-container",["rain","fire","ocean","coffee-shop"].forEach((n=>{const t=document.createElement("div");switch(t.id=`${n}-sound`,t.classList.add("sound-effect","fas"),n){case"rain":t.classList.add("selected-sound","fa-cloud-showers-heavy");break;case"fire":t.classList.add("fa-fire-alt");break;case"ocean":t.classList.add("fa-water");break;case"coffee-shop":t.classList.add("fa-coffee")}e.appendChild(t)})),e},startBtn:()=>{const e=document.createElement("button");return e.id="start-btn",e.textContent="Start",e}}})();return{initialRender:()=>{const n=document.createElement("div"),t=e.timerDisplay(),r=e.quickSelectTimeContainer(),o=e.soundEffectsContainer(),i=e.startBtn();n.id="app-container",[t,r,o,i].forEach((e=>n.appendChild(e))),document.querySelector("body").appendChild(n)},updateTimerDisplay:e=>{document.querySelector("#timer-display").textContent=e}}})(),f={rain:"../dist/sounds/344430__babuababua__light-rain.mp3",fire:"../dist/sounds/17554__dynamicell__fire-embers-large-campfire.mp3",ocean:"../dist/sounds/48412__luftrum__oceanwavescrushing.mp3",coffeeShop:"../dist/sounds/327594__janevdmerwe1995__ambience-of-coffee-shop.mp3"};let m="rain";const p=60;let h=300;const v=()=>{const e=(e=>{let n=String(e>=p?Math.floor(e/p):0),t=String(Math.round(e%p));return`${n.padStart(2,"0")}:${t.padStart(2,"0")}`})(h);l.updateTimerDisplay(e)};l.initialRender(),v(),[...document.querySelectorAll(".modify-time-container")].forEach((e=>{e.addEventListener("click",(e=>{let n;e.target.classList.contains("increment-time-btn")&&(n=e.target.parentElement.querySelector(".modify-time-amount").textContent,(e=>{h+=e*p})(n),v()),e.target.classList.contains("decrement-time-btn")&&(n=e.target.parentElement.querySelector(".modify-time-amount").textContent,(e=>{if(h-e*p<0)return h=0;h-=e*p})(n),v())}))})),[...document.querySelectorAll(".quick-select-time")].forEach((e=>{e.addEventListener("click",(e=>{let n=e.target.textContent;h=n*p,v()}))})),(()=>{const e=[...document.querySelectorAll(".sound-effect")];e.forEach((n=>{n.addEventListener("click",(()=>{switch(e.forEach((e=>e.classList.remove("selected-sound"))),n.classList.add("selected-sound"),n.id){case"rain-sound":return m="rain";case"fire-sound":return m="fire";case"ocean-sound":return m="ocean";case"coffee-shop-sound":return m="coffeeShop"}}))}))})(),document.querySelector("#start-btn").addEventListener("click",(()=>{const e=new Audio(f[m]);e.play(),e.loop=!0;const n=document.querySelector("body");n.style.pointerEvents="none";const t=setInterval((()=>{h<=0?(clearInterval(t),e.pause(),n.style.pointerEvents="auto"):(h-=1,v())}),1e3)}))})()})();
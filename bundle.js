!function(){"use strict";var t={414:function(t,e,n){var a=n(81),r=n.n(a),o=n(645),i=n.n(o)()(r());i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap);"]),i.push([t.id,':root{--color-primary: hsl(0deg, 0%, 100%);--color-secondary: hsl(72deg, 33%, 97%);--color-accent: hsl(5deg, 100%, 69%);--color-accent-secondary: hsl(330, 86%, 77%);--color-accent-dark: hsl(5deg, 75%, 85%);--color-accent-lightest: hsl(5deg, 100%, 95%);--color-accent-super-light: hsl(5deg, 200%, 97%);--color-accent-light: hsl(5deg, 100%, 80%);--color-grey: hsl(0deg, 0%, 20%);--color-grey-light: hsl(0deg, 0%, 40%);--color-grey-lightest: hsl(0deg, 0%, 60%);--color-text-dark: hsl(330deg, 3%, 17%);--shadow-btn: hsla(330deg, 5%, 10%, .2);--shadow-win: hsla(0deg, 0%, 0%, .2)}@keyframes blackout-fade-in{0%{opacity:0}100%{opacity:.5}}.pt-3-2{padding-top:3.2rem}.pb-4-8{padding-bottom:4.8rem}.py-0-4{padding-top:.4rem;padding-bottom:.4rem}.py-0-8{padding-top:.8rem;padding-bottom:.8rem}.py-1-2{padding-top:1.2rem;padding-bottom:1.2rem}.py-2-4{padding-top:2.4rem;padding-bottom:2.4rem}.py-3-2{padding-top:3.2rem;padding-bottom:3.2rem}.px-0-4{padding-left:.4rem;padding-right:.4rem}.px-1-2{padding-left:1.2rem;padding-right:1.2rem}.px-1-6{padding-left:1.6rem;padding-right:1.6rem}.px-2{padding-left:2rem;padding-right:2rem}.px-3-2{padding-left:3.2rem;padding-right:3.2rem}.p-4-8{padding:4.8rem}.mb-1-6{margin-bottom:1.6rem}.mb-4{margin-bottom:4rem}@media only screen and (max-width: 56.25em){.mb-4{margin-bottom:3.2rem}}.mb-8{margin-bottom:8rem}@media only screen and (max-width: 56.25em){.mb-8{margin-bottom:4.8rem}}.mt-0-4{margin-top:.4rem}.mt-1-6{margin-top:1.6rem}.mt-3-2{margin-top:3.2rem}.mt-4{margin-top:4rem}@media only screen and (max-width: 56.25em){.mt-4{margin-top:3.2rem}}.mt-8{margin-top:8rem}@media only screen and (max-width: 56.25em){.mt-8{margin-top:4.8rem}}.mt-9-6{margin-top:9.6rem}.ml-2-4{margin-left:2.4rem}@keyframes car-fade-in{0%{opacity:0;scale:.9;translate:0 10%}100%{translate:0;scale:1;opacity:1}}@keyframes pop-in{0%{translate:-30%;opacity:0;scale:.7}100%{translate:0;scale:1;opacity:1}}@keyframes win-fade-in{0%{opacity:0;scale:.3 1;translate:0 270%}100%{translate:0;scale:1;opacity:1}}@keyframes win-fade-out{0%{translate:0;scale:1;opacity:1}30%{-webkit-filter:blur(0.07rem) saturate(1.2);filter:blur(0.07rem) saturate(1.2)}100%{-webkit-filter:blur(0);filter:blur(0);opacity:0;scale:.3;translate:0 200%}}@keyframes win-idle{0%{scale:1;translate:0;transform:skewY(-6deg)}50%{scale:.97;translate:0 3%;transform:skewY(-4deg)}100%{scale:1;translate:0;transform:skewY(-6deg)}}@keyframes win-idle-float{0%{translate:0}50%{translate:0 7%}100%{translate:0}}.title{font-size:3rem}.title--car{font-size:2.4rem;text-transform:uppercase;background-image:linear-gradient(130deg, var(--color-accent-secondary), var(--color-accent));color:var(--color-secondary);margin-top:-3.2rem;transform:skewY(-6deg)}.title--form{font-size:2rem;font-weight:700}*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}html{font-size:62.5%;box-sizing:border-box}@media only screen and (max-width: 75em){html{font-size:50%}}@media only screen and (max-width: 37.5em){html{font-size:31.25%}}body{font-family:Poppins,sans-serif;font-weight:300;line-height:1.6;font-size:2rem;color:var(--color-text-dark)}::-moz-selection{background-color:var(--color-accent);color:var(--color-primary)}::selection{background-color:var(--color-accent);color:var(--color-primary)}.win{position:fixed;inset:35%;margin:auto;z-index:100;text-align:center;line-height:1.95}.win__title{display:inline-block;font-size:3.8rem;-webkit-box-decoration-break:clone;font-weight:600;box-shadow:.4rem .4rem 1rem var(--shadow-win);opacity:0;transform-origin:center;animation:win-fade-in 1s cubic-bezier(0.42, 2.2, 0.3, 0.5) forwards,win-idle 4s infinite cubic-bezier(0.2, 1.8, 0.2, 0.87) 1s,win-idle-float 6s infinite ease 1s}.win__title--1{padding:1.2rem 6rem}.win__title--2{animation-delay:.1s,1.4s,1.6s}.win__title--3{animation-delay:.2s,1.7s,1.9s}.blackout{display:block;position:fixed;inset:0;margin:auto;height:100vh;background-image:linear-gradient(130deg, var(--color-accent-light), var(--color-accent));opacity:.7;z-index:99;animation:blackout-fade-in .3s ease}.pagination{display:flex;margin:0 auto;gap:1.2rem}.btn{display:flex;justify-content:center;align-items:center;padding:.2rem 1.2rem;border:none;border-radius:100rem;font:inherit;font-weight:700;font-size:1.5rem;text-transform:capitalize;color:inherit;cursor:pointer;background-color:var(--color-primary);box-shadow:.1rem .2rem .3rem var(--shadow-btn);transition:.2s all}.btn:hover{box-shadow:.1rem .2rem .8rem var(--shadow-btn);translate:0 -0.2rem}.btn:active{transition:.05s all;box-shadow:.1rem .2rem .3rem var(--shadow-btn);translate:inherit}.btn--primary{background-color:var(--color-accent);color:var(--color-primary);border:none}.btn--secondary{background-color:var(--color-accent-lightest);opacity:.7;color:var(--color-accent)}.btn--tertiary{border:.1rem solid var(--color-accent-lightest);opacity:.7;color:var(--color-accent)}.btn--disabled{opacity:.3;cursor:unset;pointer-events:none}.btn--disabled:hover{translate:0}.btn--active{border:.1rem solid var(--color-accent);background-color:var(--color-accent);color:var(--color-primary)}.input{border:.1rem solid var(--color-accent-lightest);border-radius:1rem;outline-color:rgba(0,0,0,0)}.input--color{background-color:var(--color-accent-lightest)}.input--text{position:relative;border:none;background-color:rgba(0,0,0,0);min-height:4.8rem;min-width:32rem;font:inherit;color:inherit;font-size:1.6rem;caret-color:rgba(0,0,0,0);transition:.4s all;z-index:3}.input--text::-webkit-input-placeholder{color:var(--color-accent-lightest);padding-left:.2rem}.input--text::-moz-placeholder{color:var(--color-accent-lightest);padding-left:.2rem}.input--text::placeholder{color:var(--color-accent-lightest);padding-left:.2rem}.input--text:focus{transition:.4s all;caret-color:var(--color-accent)}.input--text:focus::-webkit-input-placeholder{color:var(--color-accent-dark)}.input--text:focus::-moz-placeholder{color:var(--color-accent-dark)}.input--text:focus::placeholder{color:var(--color-accent-dark)}.input--text:focus+.input__background{translate:1.47rem;scale:0 .5;transition:.27s all cubic-bezier(0.83, 0.69, 0.26, 1.06)}.input__background{position:absolute;top:0;display:block;height:100%;width:100%;background-color:var(--color-accent);border-radius:1rem;z-index:1;transition:.27s all cubic-bezier(0.83, 0.69, 0.26, 1.1);transform-origin:left}.form{display:flex;align-items:center;gap:1.2rem}.form__input{position:relative}.car{position:relative;display:grid;justify-content:left;gap:2.4rem;animation:car-fade-in .4s cubic-bezier(0.44, 2, 0.2, 0.79) backwards;transform-origin:left}.car__title,.car__controls,.car__main,.car__img,.car__btn-drive{animation:pop-in .4s cubic-bezier(0.44, 2, 0.2, 0.79) backwards}.car__title{transform-origin:right}.car__controls{display:flex;justify-content:center;align-items:center;gap:.8rem}.car__main{gap:.8rem;display:flex}.car__img{padding-top:1.5rem;width:7rem;max-height:4.1rem;z-index:2}.car__btn-drive{height:3rem;width:2.5rem}.car__track{position:absolute;bottom:0;width:100%;border-radius:100rem;border:none;border-top:.1rem solid var(--color-grey-lightest)}.car__track:before{content:"🏁";font-size:4rem;position:absolute;top:-6rem;right:10rem;color:var(--color-grey-lightest);z-index:1;animation:pop-in .4s cubic-bezier(0.44, 2, 0.2, 0.79) backwards .3s;transform-origin:right}.garage-controls{display:flex;gap:1.2rem}.modification-form{display:grid;background-color:var(--color-secondary);border-radius:2.4rem;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}.cars-wrapper{display:grid;gap:4.8rem;background-color:var(--color-primary)}.garage{display:grid}.winners-table{display:grid;align-content:center;background-color:var(--color-secondary);border-radius:2.4rem}.winners-list{display:grid;padding:0;margin:0;list-style:none}.winners-list__item{display:grid;grid-template-columns:.6fr repeat(4, 1fr);align-items:center;justify-content:left;line-height:1.2;text-decoration:none;transition:color .3s ease-in-out;gap:5rem;border-bottom:.1rem solid var(--color-grey-lightest)}.winners-list__item:hover{color:var(--color-accent)}.winners-list__car{width:6rem;max-height:4rem}.table-data{display:inline-grid;grid-template-columns:.6fr repeat(4, 1fr);justify-content:left;gap:5rem;background-image:linear-gradient(130deg, var(--color-accent-light), var(--color-accent));border-radius:2.4rem;color:var(--color-secondary)}.table-data__best-time,.table-data__wins{cursor:pointer}.winners{display:grid;gap:3.2rem}.router-wrapper{display:flex;margin:0 auto;gap:1.2rem;font-size:2.4rem}#app{display:grid;max-width:144rem;margin:0 auto;padding:3.2rem}@media only screen and (max-width: 56.25em){#app{padding:1.2rem}}',""]),e.Z=i},645:function(t){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",a=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),a&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),a&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,a,r,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);a&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:function(t){t.exports=function(t){return t[1]}},379:function(t){var e=[];function n(t){for(var n=-1,a=0;a<e.length;a++)if(e[a].identifier===t){n=a;break}return n}function a(t,a){for(var o={},i=[],c=0;c<t.length;c++){var s=t[c],l=a.base?s[0]+a.base:s[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var m=n(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var g=r(p,a);a.byIndex=c,e.splice(c,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var o=a(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var c=n(o[i]);e[c].references--}for(var s=a(t,r),l=0;l<o.length;l++){var d=n(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},569:function(t){var e={};t.exports=function(t,n){var a=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:function(t){t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:function(t,e,n){t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:function(t){t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:function(t){t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return t[a](o,o.exports,n),o.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.nc=void 0,function(){var t,e,a,r,o,i,c,s,l,d,u,m,p;function g(t,e,n,a,r){const o=n/e,i=t.animate({translate:["0",a-150+"px 0"]},{duration:o,fill:"forwards",easing:"cubic-bezier(.28, -0.14, .34, 1.05)"});return i.onfinish=()=>{ct.querySelector(`[data-id='${r}']`)&&(i?.commitStyles(),i?.cancel())},i}function f(t,e,n){e?.pause();const a=getComputedStyle(t).translate,r=Number(a.slice(0,-2)),o=`${r+50}px`;e?.cancel();const i=t.animate({translate:[`${r}px`,o]},{duration:2e3,fill:"forwards",easing:"cubic-bezier(.21, .61, .93, .36)"});return i.onfinish=()=>{ct.querySelector(`[data-id='${n}']`)&&(i?.commitStyles(),i?.cancel())},i}function b(t){document.querySelectorAll(".btn--active").forEach((t=>t.classList.remove("btn--active"))),document.querySelector(`[data-id='${t}']`)?.querySelector(".btn--tertiary")?.classList.add("btn--active")}function y(t){return`<svg fill='${t}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 640' preserveAspectRatio='xMidYMid meet' xmlns:v='https://vecta.io/nano'><path d='M352.5 105.9c-7.2 1.8-7.9 2.8-9 12.1-.4 3-1.1 6.2-1.6 7.1-.4.9-9.7 5.1-20.6 9.4-77.4 30.4-134.8 54-160.3 66.1-16.3 7.7-22.2 9.1-42.1 10.4-8.5.5-17 1.4-18.9 2-10.1 3.2-36.2 5.8-62 6.3l-11.5.2-4.7 8c-4.7 7.8-4.7 8-2.9 10 3.4 3.6 3.5 7.7.5 17.7-3 9.9-3.4 17.8-1.9 37 .5 6.7.4 8.8-.6 8.8-2.9 0-8.3 5.6-11 11.4-5 10.6-7.4 34.3-4.8 46.7 1.3 5.8 1.3 6.2.3 15.9-.5 5.4 1.6 23.8 2.8 24.4.2.1 2.9 2 6.1 4.1 7.3 4.9 12.3 10.3 13.2 14.3 1.7 7.9 16.7 15.5 35.5 18.1 10.4 1.5 96.9 9.7 108.7 10.4l3.2.2.5-16c.7-23 5-39.4 14.6-55.9 28.1-47.9 91.7-67.3 140.5-42.9 31.6 15.9 53 42.4 59.8 74.2 2.2 10.6 2.9 36.5 1.3 51.9l-.8 8.2H687l299.5-1.8c-3.3-8.7-5.6-32.5-4.5-46.1 2.8-32 17.7-56.7 45.9-75.9 39.9-27.3 84.7-28.2 124.3-2.4 23.9 15.7 39.7 39.2 46 68.7 1.8 8.4 1.5 34.1-.5 43-.8 3.8-1.4 7.1-1.2 7.3.7.8 38.6-2 47.8-3.4 18-2.8 25.3-6.5 30.4-15.2 2.4-4.1 2.8-5.7 2.8-12.7-.1-4.4-.9-11.7-2-16.3-1.8-7.9-1.8-8.8-.2-19 3.1-19.9 4-30.6 4.1-49.7.1-17.6-.1-19.5-2.3-26-4.6-13.5-10.3-19-28.3-27.4-22.2-10.4-63.3-22-116.8-33-52.3-10.8-152.4-21-205.4-21.1h-22.9l-23.6-13.9c-81.3-47.7-159.3-88.4-185.2-96.6-49.8-15.7-159.8-19.5-289.2-10l-18.8 1.4-4.7-3c-9.2-5.8-22.3-8.9-29.7-7zM543.7 137c1.3 4.5 5.8 30.5 8.8 51.5 3.3 22.6 7.4 53.9 7.1 54.2-.7.7-167.2-4-205.4-5.8-35.7-1.6-46.4-5.6-57.3-21.5-6.2-9.1-8.7-22.5-5.9-32.6 1.2-4 5.6-7.4 19.2-14.8 36.9-19.8 79.9-28.9 161.8-34 24.6-1.5 29-1.6 51-1.6l19.4.1 1.3 4.5zm64.9-1c38.3 3.6 71.7 8.6 93.4 13.9 21 5.2 45.1 16.3 72 33.2 14.1 8.8 37.9 25.9 38 27.1 0 .5-1.4.8-3.2.8-4.8 0-11.4 3.7-14 7.8-2.4 3.9-3 11.3-1.5 18.9l.9 4.3h-90.4-90.4l-17.6-54-17.5-54h4.7c2.5 0 14.1.9 25.6 2zM261.7 327.5c-43.1 8.2-77.4 44-83.8 87.5-1.7 11.7-.7 29.2 2.4 41 11.3 43.6 49.7 75.1 94.7 77.7 50.7 2.9 95.9-31.3 107.6-81.3 2.8-11.7 2.6-34.8-.4-46.7-9.4-37.8-38.3-67-76-76.8-10.5-2.7-33.6-3.4-44.5-1.4zm37.8 31c8.4 2.1 20.9 8.5 28 14.2 11.6 9.4 21 24.2 25.1 39.3 2.3 8.7 2.4 26 0 35.5-5.8 23.7-24.2 43.9-47.3 51.9-53.1 18.6-107.4-27.7-96.9-82.8 3-15.2 9.4-27.4 20.6-38.6 11.1-11 23.7-17.8 38.5-20.6 8.4-1.6 23.5-1.1 32 1.1zm-7.7 24.7c.2 9 .7 16.7 1.2 17.2 1.7 1.7 10.8-5.8 20.1-16.6l5.1-5.7-4.8-3.1c-5.2-3.3-13.1-6.5-18.5-7.5l-3.4-.6.3 16.3zM259.1 370c-6.2 2.2-16.7 8.2-16.4 9.4.3 1.3 23.7 21.6 24.9 21.6.7 0 1.5-.7 1.8-1.6.8-2 .8-12.7-.1-23.2-.7-9.5-.8-9.6-10.2-6.2zm61.8 34.5c-5.7 6.4-10.5 12.3-10.7 13.1-.6 2.5 4.6 3.5 15.7 2.9 5.8-.3 12.1-.8 13.9-1.1 3.3-.5 3.4-.6 2.7-4.2-.7-4.4-6.4-16.7-9.2-20.1l-1.9-2.4-10.5 11.8zm-94.9-5.4c-3.1 4.4-6.8 13.3-7.7 18.6l-.6 3.3h15.5c16.5 0 20.1-.9 18.1-4.4-1.3-2.4-20.4-21.6-21.4-21.6-.5 0-2.2 1.8-3.9 4.1zm52.6 5.5c-3.6 3.5 0 8.7 4.4 6.4 2.6-1.4 2.6-5.6.1-7-2.5-1.3-2.7-1.3-4.5.6zm-3.5 16.8c-5.7 3.2-6.8 11.1-2.2 15.7 4.3 4.2 10.1 4.3 14.3.1s4.1-10-.1-14.3c-3.3-3.2-7.8-3.8-12-1.5zm-19.1 5c-1.9 2.3-.8 6.1 1.8 6.4 4.4.7 6.7-3.2 3.6-6.2-1.9-2-3.8-2-5.4-.2zm44.2 1.2c-2.7 1.9-2.8 3.6-.3 5.8 2.5 2.3 6.1.6 6.1-2.9 0-3.3-3-4.9-5.8-2.9zm-75.7 13.1c-7.7.6-7.6.5-5.9 6.5 1.6 5.5 6.1 14.6 9.2 18.6l1.8 2.3 10.3-12.2c5.7-6.7 10.4-12.9 10.5-13.8.1-1.4-1.4-1.6-10.4-1.7-5.8 0-12.7.1-15.5.3zm92 1.2c-4.4.4-6.1 1-6.3 2.2-.3 1.6 21 22.9 22.8 22.9 2.2 0 8.6-14.1 10.5-22.8l.7-3.2-10.9.2c-5.9.1-13.5.4-16.8.7zm-38.9 6.7c-1.9 1.8-1.9 2-.6 4.5.6 1.1 2.1 1.9 3.5 1.9 2 0 4.5-2.4 4.5-4.4 0-1-3.2-3.6-4.5-3.6-.7 0-2.1.7-2.9 1.6zm-18.7 17.1c-8.6 9-13.9 15.1-13.9 16.2 0 2.5 17.9 10.1 23.6 10.1h2.7l-.7-14.3c-.9-16.6-1.3-18.7-3.5-18.7-.9 0-4.6 3-8.2 6.7zm34.7-5.8c-.6 1-2.4 16.8-2.9 25.8-.3 6-.2 6.3 1.9 6.3 7.9 0 26.2-6.8 24.8-9.2-.5-.7-5.3-6.4-10.8-12.6-9.3-10.5-11.7-12.4-13-10.3zm778.7-132.4c-31.8 5.8-59.7 26.6-74.3 55.5-22.3 44.1-9.8 99.6 28.9 128.8 11.2 8.4 18.8 12.5 31.1 16.6 27.4 9.1 54.5 7 80.2-6.1 55.2-28.2 73.5-98.3 39.2-150-22.5-33.9-65.1-52.1-105.1-44.8zm38.5 31.5c34.8 9.8 57.9 44.3 53.2 79.6-6.7 50.8-59.6 79.6-105.5 57.4-23.9-11.6-39.6-35.2-41.2-62-2-33.5 19.2-64 51.6-74.5 12.2-4 28.9-4.2 41.9-.5zm-9.1 24.2c.3 9 .9 16.7 1.4 17.2 1.3 1.4 5.3-1.8 15.5-12.2l9.5-9.7-2.3-1.8c-5-4-18.9-9.7-23.5-9.7-1 0-1.1 3.3-.6 16.2zm-31.2-13.8c-5 1.6-13.3 5.8-16.3 8.2l-2.3 1.9 12.1 10.7c6.7 6 12.8 10.8 13.5 10.8 2.3 0 2.7-3.9 2-18.6-.8-16.2-.4-15.7-9-13zm60.2 35.2c-5.9 6.5-10.7 12.6-10.7 13.6 0 1.1 1.1 1.8 3.8 2.2 4.4.7 27.8-.7 28.9-1.7 1.5-1.6-5.1-18.3-9.4-23.6l-1.9-2.4-10.7 11.9zm-94.5-5.9c-3.9 6.2-7 13.4-7.8 18.4l-.7 3.9h15.2c8.6 0 16.1-.5 17.2-1 1.7-1 1.8-1.3.5-3.8-.8-1.5-5.9-7.1-11.4-12.5l-9.9-9.9-3.1 4.9zm52.6 5.4c-2.4 1.4-2.3 5.6.2 6.9 4.4 2.3 8-2.9 4.4-6.4-1.8-1.9-2.3-1.9-4.6-.5zm-3.7 17.2c-4.9 2.9-6.6 10.1-3.5 14.6.9 1.3 3.2 2.9 5 3.7 2.9 1.2 3.9 1.2 6.8 0 9.9-4.1 8.5-18-1.9-19.2-2.4-.3-5 .1-6.4.9zm-19.1 5.1c-1.9 2.3-.8 6.1 1.8 6.4 4.4.7 6.7-3.2 3.6-6.2-1.9-2-3.8-2-5.4-.2zm43.6 1.2c-.9.8-1.6 2.2-1.6 2.9 0 1.3 2.6 4.5 3.6 4.5 2 0 4.4-2.5 4.4-4.5 0-1.4-.8-2.9-1.9-3.5-2.5-1.3-2.7-1.3-4.5.6zm-76.1 13.3c-6 .6-6 .6-5.7 3.6.9 6.9 10.4 24.8 12.2 22.9 5.7-6.1 21-25 20.7-25.8-.4-1.2-17.6-1.7-27.2-.7zm93.2.8c-6.8.5-7.9 1.9-4.7 6 2.3 3.1 20 19.3 21 19.3.3 0 2-2.4 3.7-5.3 2.9-4.8 5.2-11.1 6.7-18l.6-2.7-10.7.2-16.6.5zM1087 449c-1.6 3.1.4 6.2 3.8 5.8 2.1-.2 2.8-.9 3-3.2.5-4.5-4.7-6.5-6.8-2.6zm-21.9 20.7c-5.6 5.9-10.1 11.3-10.1 12 0 2.8 17.2 10.3 23.7 10.3h2.6l-.7-12.3c-1-17.9-1.5-20.7-3.6-20.7-1 0-6.3 4.8-11.9 10.7zm38.4-9.8c-.7 1.2-2.3 14.4-2.9 24.3-.4 7.7-.4 7.8 1.9 7.8 4.5 0 13-2.2 19.3-5.1l6.4-2.9-1.9-2.3c-6.5-8.2-19.8-22.7-20.9-22.7a2.65 2.65 0 0 0-1.9.9z'/></svg>`}function h(e){E.addEventListener("submit",(n=>v(n,e,t.CREATE)))}function w(e){E.addEventListener("submit",(n=>v(n,e,t.UPDATE)))}function v(t,e,n){t.preventDefault();const a=t.target;a?.dataset.type===n&&e(a)}!function(t){t.CREATE="create",t.UPDATE="update"}(t||(t={})),function(t){t.MAIN="http://localhost:3000",t.GARAGE="http://localhost:3000/garage/",t.ENGINE="http://localhost:3000/engine/",t.WINNERS="http://localhost:3000/winners/"}(e||(e={})),function(t){t.PAGE="_page=",t.LIMIT="_limit=",t.ID="id=",t.STATUS="status=",t.STARTED="started",t.STOPPED="stopped",t.DRIVE="drive",t.SORT="_sort=",t.ORDER="_order="}(a||(a={})),function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.DELETE="DELETE",t.PATCH="PATCH"}(r||(r={})),function(t){t.SELECT="select",t.DELETE="remove"}(o||(o={})),function(t){t.JSON="application/json",t.TOTAL_COUNT="X-Total-Count"}(i||(i={})),function(t){t.A="A",t.B="B"}(c||(c={})),function(t){t.RACE="race",t.RESET="reset",t.GENERATE_CARS="generate-cars"}(s||(s={})),function(t){t.GARAGE="garage",t.WINNERS="winners"}(l||(l={})),function(t){t.ID="id",t.WINS="wins",t.BEST_TIME="time"}(d||(d={})),function(t){t.ASC="ASC",t.DESC="DESC"}(u||(u={})),function(t){t.DRIVE="drive",t.STOP="stop"}(m||(m={})),function(t){t.GARAGE="garage",t.WINNERS="winners"}(p||(p={}));const E=document.createElement("section");function _(){return E.classList.add("garage"),E}function x(t){E.addEventListener("click",(e=>{const n=e.target;n&&n.dataset.type===s.GENERATE_CARS&&t()}))}function S(t){E.addEventListener("click",(e=>{const n=e.target;n&&n.dataset.type===s.RACE&&t()}))}function A(t){E.addEventListener("click",(e=>{const n=e.target;n&&n.dataset.type===s.RESET&&t()}))}function T(t,e,n){const a=t.target,r=a.closest(".car");r&&a.textContent?.toLowerCase()===n&&e(Number(r.dataset.id))}function C(t){E.addEventListener("click",(e=>{T(e,t,o.SELECT)}))}function $(t){E.addEventListener("click",(e=>{T(e,t,o.DELETE)}))}function k(t){E.addEventListener("click",(e=>{const n=e.target,a=n.closest(".car"),r=a?.dataset.id,o=a?.querySelector(".car__img"),i=a?.querySelector(".car__track");a&&r&&i&&o&&n.textContent===c.A&&t(Number(r),o,a)}))}function z(t){const e=t.querySelectorAll(".input"),[n,a]=[...e].map((t=>{const e=t.value||V();return t.value="",t.blur(),e}));return{name:n,color:a}}const P=20,N=7,R=1,L=10;async function G(t,n){const o=await X({url:`${e.ENGINE}?${a.ID}${t}&${a.STATUS}${n}`,method:r.PATCH});return Y(o)&&Z(o.message),o[0]}const I={garageCars:[],winners:[],selectedCarId:1,garagePage:1,totalCars:0,garageNumOfPages:0,totalWinners:0,winnersPage:1,winnersNumOfPages:0,winnersSortOrder:u.DESC,currentView:p.GARAGE},M=I;async function O([t,n],a,o){const i=I.totalCars,c=Number(n),s=await Promise.all(t.map((async({id:t,wins:n,time:a})=>{const{name:o,color:i}=await async function(t){const[n]=await X({url:`${e.GARAGE}${t}`,method:r.GET});return Y(n)&&Z(`getCar: error (${n.message})`),n}(t);return{name:o,color:i,id:t,wins:n,time:a}})));I.winners=s,I.winnersPage=a,I.totalWinners=c,I.winnersSortOrder=o,I.currentView=p.WINNERS,i!==c&&(I.winnersNumOfPages=F(I.totalWinners,L))}const D=["Ford","Audi","BMW","Mercedes","Volkswagen","Fiat","Renault","Peugeot","Citroen","Opel","Toyota","Nissan","Honda","Mazda","Mitsubishi","Suzuki","Subaru","Hyundai","Kia","Volvo","Saab","Porsche","Lexus","Jeep","Jaguar","Land Rover","Ferrari","Lamborghini","Bugatti","Maserati"],q=["Focus","A4","X5","C-Class","Golf","Punto","Clio","308","C3","Astra","Fiesta","A3","X3","E-Class","Passat","500","Megane","208","Corsa","Golf","Bentley","Ferrari","Lamborghini","Bugatti","Maserati","Camaro","Mustang","Challenger","Charger","Corvette"];function W(t){return X({url:`${e.ENGINE}?${a.ID}${t}&${a.STATUS}${a.DRIVE}`,method:r.PATCH})}function j([t,e],n){const a=I.totalCars,r=Number(e);I.garageCars=t,I.garagePage=n,I.totalCars=r,I.currentView=p.GARAGE,a!==r&&(I.garageNumOfPages=F(I.totalCars,N))}async function H(t=M.winnersPage,n=M.winnersSortOrder,o=d.ID,i=L){const c=await X({url:`${e.WINNERS}?${a.SORT}${o}&${a.PAGE}${t}&${a.LIMIT}${i}&${a.ORDER}${n}`,method:r.GET});return Y(c)&&Z(`getWinners: error (${c.message})`),[c,t]}async function U(t){const n=await X({url:e.GARAGE,uploadData:t,method:r.POST});Y(n)&&Z(n.message)}async function B(t=I.garagePage){const n=await X({url:`${e.GARAGE}?${a.PAGE}${t}&${a.LIMIT}${N}`,method:r.GET});return Y(n)&&Z(n.message),[n,t]}function V(){const t=D.length,e=Math.floor(Math.random()*t);return`${D[e]} ${q[e]}`}function F(t,e){return Math.ceil(t/e)}function J(t){return t.toString().padStart(2,"0")}function Y(t){return t instanceof Error}function Z(t){throw new Error(t)}async function X({url:t,uploadData:e,method:n}){const a=function({url:t,uploadData:e,method:n}){return e&&n?fetch(t,{method:n,headers:{"Content-Type":i.JSON},body:JSON.stringify(e)}):!e&&n?fetch(t,{method:n}):fetch(t)}({url:t,uploadData:e,method:n}),r=await Promise.race([a,(o=P,new Promise(((t,e)=>{setTimeout((()=>{e(new Error(`Request took too long! Timeout after ${o} second`))}),1e3*o)})))]);var o;Y(r)&&Z(`Error occurred! (${r.message})`),r.ok||Z(`Error occurred! (${r.status})`);const c=r.headers.get(i.TOTAL_COUNT)||"",s=await r.json();return Y(s)&&Z(`Error occurred! (${s.message})`),[s,c]}function K(t,e,n){return`\n    <section class='cars-wrapper py-2-4 px-3-2'>\n      <header class='header'>\n        <h2 class='title'>Garage 🌌 (${J(e)})</h2>\n        <p class='paragraph'>Page ${J(n)}</p>\n      </header>\n\n      ${t.map(((t,e)=>`\n          <div style='animation-delay: ${.1*e}s' class='car px-0-4 py-0-4' data-id='${t.id}'>\n            <div class='car__controls'>\n              <button class='btn btn--tertiary'>Select</button>\n              <button class='btn btn--tertiary'>Remove</button>\n              <h3 class='car__title title title--car ml-2-4 py-0-4 px-1-6' style='animation-delay: ${.15*e}s'>${t.name}</h3>\n            </div>\n\n            <div class='car__main' style='animation-delay: ${.14*e}s'>\n              <button class='btn btn--primary car__btn-drive'>A</button>\n              <button class='btn btn--primary btn--disabled car__btn-drive' disabled>B</button>\n              <article class='car__img'>${y(t.color)}</article>\n            </div>\n            <div class='car__track' style='animation-delay: ${.1*e}s'></div>\n          </div>\n        `)).join("")}\n    </section>\n  `}function Q(t){E.addEventListener("click",(e=>{const n=e.target,a=n.closest(".car"),r=a?.dataset.id,o=a?.querySelector(".car__img");a&&r&&o&&n.textContent===c.B&&t(Number(r),o,a)}))}function tt(t,e){const[n,a]=t.querySelectorAll(".car__btn-drive");e===m.DRIVE?(n.classList.add("btn--disabled"),a.classList.remove("btn--disabled"),n.disabled=!0,a.disabled=!1):e===m.STOP?(n.classList.remove("btn--disabled"),a.classList.add("btn--disabled"),n.disabled=!1,a.disabled=!0):(n.classList.toggle("btn--disabled"),a.classList.toggle("btn--disabled"),n.disabled=!n.disabled,a.disabled=!a.disabled)}function et(e){return`\n    \n    <section class='modification-form px-3-2 pt-3-2 pb-4-8'>\n      ${[t.CREATE,t.UPDATE].map((e=>function(e){return`\n      <div class='title title--form ${e===t.UPDATE?"mt-1-6":""}'>${e===t.CREATE?"Create Car 🏎️":"Update Car 💅"}</div>\n\n      <form class='form mt-0-4' data-type='${e}'>\n        <div class='form__input'>\n          <input class='input input--text py-0-8 px-1-6' type='text' placeholder='Car name'>\n          <span class='input__background'></span>\n        </div>\n        <input class='input input--color px-1-2 py-1-2' type='color'>\n        <button class='btn btn--secondary'>${e}</button>\n      </form>\n  `}(e))).join("")}\n    </section>\n  \n    \n    <div class='garage-controls py-3-2 px-3-2'>\n      <button class='btn btn--tertiary' data-type='${s.RACE}'>Race</button>\n      <button class='btn btn--tertiary' data-type='${s.RESET}'>Reset</button>\n      <button class='btn btn--tertiary' data-type='${s.GENERATE_CARS}'>Generate Cars</button>\n    </div>\n  \n    ${K(e.garageCars,e.totalCars,e.garagePage)}\n    ${dt(e.totalCars,e.garagePage,e.garageNumOfPages,N)}\n  `}function nt(){const t=[...E.querySelectorAll(".car")],e=[...E.querySelectorAll(".car__img")],n=t.map((t=>Number(t.dataset.id)));return[t,e,n]}function at(t){if(!t.target.classList.contains("blackout"))return;const e=document.querySelector(".blackout"),n=document.querySelector(".win");n.querySelectorAll(".win__title").forEach(((t,e)=>{t.style.opacity="1",t.style.animation=`win-fade-out .5s cubic-bezier(1, -2, .3, 1) forwards ${.1*e}s`})),e.style.animation="blackout-fade-in .6s ease reverse both",n.onanimationend=()=>{n.remove(),e.remove(),document.body.style.overflow=""},document.body.removeEventListener("click",at)}function rt(){const t=document.querySelector(".car__track");return Number(getComputedStyle(t).width.slice(0,-2))-10}function ot(t){t.innerHTML=""}function it(t){if(""!==E.innerHTML){const e=document.querySelector(".cars-wrapper"),n=document.querySelector(".pagination");e.remove();const a=K(t.garageCars,t.totalCars,t.garagePage);n.insertAdjacentHTML("beforebegin",a),function(t,e){const n=document.createRange().createContextualFragment(t).firstElementChild,a=n.querySelectorAll("*"),r=e.querySelectorAll("*"),{children:o}=n,{children:i}=e,c=[],s=o.length>i.length?o:i;a.length!==r.length&&[...s].forEach(((t,a)=>{const r=e.children[a],o=n.children[a];r?o||c.push((()=>r.remove())):c.push((()=>e.append(o)))})),a.forEach(((t,e)=>{const n=r[e];n&&t&&(t.isEqualNode(n)||(""!==t.firstChild?.nodeValue?.trim()&&c.push((()=>{n.innerHTML=t.innerHTML})),[...t.attributes].forEach((({name:t,value:e})=>c.push((()=>n.setAttribute(t,e)))))))})),requestAnimationFrame((()=>{c.forEach((t=>t()))}))}(dt(t.totalCars,t.garagePage,t.garageNumOfPages,N),n)}else{ot(E);const e=et(t);E.insertAdjacentHTML("beforeend",e)}b(t.selectedCarId)}const ct=document.createElement("main");function st(t,e){ct.addEventListener("click",(n=>{n.target.dataset.type===e&&t()}))}function lt(t,e,n){ct.addEventListener("click",(a=>{const r=a.target.closest(".btn");r&&n===e.currentView&&("prev"===r.dataset.type&&(n===p.GARAGE?t(e.garagePage-1):t(e.winnersPage-1)),"next"===r.dataset.type&&(n===p.GARAGE?t(e.garagePage+1):t(e.winnersPage+1)))}))}function dt(t,e,n,a){const r=t<=a;return`\n    <section class='pagination px-3-2 py-3-2'>\n      <button data-type='prev' class='btn btn--secondary ${r||1===e?"btn--disabled":""}'>←</button>\n\n      <button data-type='next' class='btn btn--secondary ${r||e>=n?"btn--disabled":""}'>→</button>\n    </section>\n  `}function ut(t,e,n){const a=dt(M.totalWinners,n,M.winnersNumOfPages,L);return`\n    <header class='header'>\n      <h2 class='title'>Winners 🏆 (${J(e)})</h2>\n      <p class='paragraph'>Page ${J(n)}</p>\n    </header>\n\n    <div class='winners-table p-4-8'>\n      <div class='table-data py-1-2 px-3-2'>\n        <span>#️⃣ Number</span>\n        <span>🏎️ Car</span>\n        <span>🏁 Name</span>\n        <span class='table-data__wins' data-type='wins'>🥇 Wins</span>\n        <span class='table-data__best-time' data-type='time'>⌛ Best Time (sec)</span>\n      </div>\n\n      <ul class='winners-list'>\n        ${t.map(((t,e)=>`\n            <li class='winners-list__item py-1-2 px-3-2'>\n              <span class='winners-list__num'>${J(e+1)}</span>\n              <span class='winners-list__car'>${y(t.color)}</span>\n              <span class='winners-list__name'>${t.name}</span>\n              <span class='winners-list__wins'>${J(t.wins)}</span>\n              <span class='winners-list__time'>${J(t.time)}s</span>\n            </li>\n          `)).join("")}\n      </ul>\n    </div>\n\n    ${a}\n  `}const mt=document.createElement("section");function pt(t){ot(mt);const e=ut(t.winners,t.totalWinners,t.winnersPage);mt.insertAdjacentHTML("beforeend",e)}function gt(){E.style.visibility="visible",mt.style.visibility="hidden",j([M.garageCars,M.totalCars.toString()],M.garagePage),ct.append(mt)}async function ft(){E.style.visibility="hidden",mt.style.visibility="visible",ct.append(E);const[t,e]=await H();await O(t,e,M.winnersSortOrder),pt(M)}function bt(){it(M),pt(M)}async function yt(t){try{const[e,n]=await H(t);await O(e,n,M.winnersSortOrder),console.log(e,n),pt(M)}catch(t){console.error(t)}}async function ht(t){const e=M.winnersSortOrder===u.DESC?u.ASC:u.DESC,[n,a]=await H(M.winnersPage,M.winnersSortOrder,t);await O(n,a,e),pt(M)}var wt=n(379),vt=n.n(wt),Et=n(795),_t=n.n(Et),xt=n(569),St=n.n(xt),At=n(565),Tt=n.n(At),Ct=n(216),$t=n.n(Ct),kt=n(589),zt=n.n(kt),Pt=n(414),Nt={};async function Rt(t){try{const[e,n]=await B(t);j(e,n),it(M)}catch(t){console.error(t)}}async function Lt(){const t=Array.from({length:100},(()=>{const t=V();return U({color:`#${Math.floor(16777215*Math.random()).toString(16)}`,name:t})}));await Promise.all(t);const[e,n]=await B();j(e,n),bt()}async function Gt(t){const{target:n}=t.effect,a=n?.closest(".car"),o=Number(a.dataset.id||0),i=a.querySelector(".title--car").textContent||"",c=Math.floor(Number(t.effect?.getComputedTiming().duration)/1e3||0),s=M.winners.some((({id:t})=>Number(t)===o));if(function(t){const e=`\n    <div class='blackout'></div>\n    <h2 class='win'>\n      <span class='win__title win__title--1 title title--car py-1-2 px-2'>${t}</span>\n      <br>\n      <span class='win__title win__title--2 title title--car py-1-2 px-2'>Is The</span>\n      <br>\n      <span class='win__title win__title--3 title title--car py-1-2 px-2'>Winner! 🏆</span>\n    </h2>\n  `;document.body.style.overflow="hidden",document.body.insertAdjacentHTML("afterbegin",e),document.body.addEventListener("click",at)}(i),s){const t=await async function(t){const[n]=await X({url:`${e.WINNERS}${t}`,method:r.GET});return Y(n)&&Z(n.message),n}(o),n=c<t.time?c:t.time;await function(t,n,a){return async function(t,n){const a=await X({url:`${e.WINNERS}${t}`,uploadData:n,method:r.PUT});Y(a)&&Z(a.message)}(t,{wins:a,time:n})}(o,n,t.wins+1)}else await async function(t,n){const a={id:t,wins:R,time:n};try{await async function(t){const n=await X({url:e.WINNERS,uploadData:t,method:r.POST});Y(n)&&Z(n.message)}(a)}catch(t){}}(o,c);const[l,d]=await H();O(l,d,M.winnersSortOrder)}async function It(){const[t,e,n]=nt(),r=rt(),o=await Promise.all(n.map((t=>G(t,a.STARTED)))),i=n.map((t=>W(t))),c=[];let s=!1;o.forEach((({velocity:a,distance:o},i)=>{const s=e[i],l=t[i],d=n[i];tt(l),c.push(g(s,a,o,r,d))})),i.map((async(t,a)=>{try{await t}catch(t){const r=c[a],o=e[a],i=n[a];if(!r)return;f(o,r,i)}})),c.forEach((t=>{t&&(t.onfinish=()=>{s||(s=!0,Gt(t))})}))}async function Mt(t){const e=z(t);try{await U(e);const[t,n]=await B();j(t,n),bt()}catch(t){console.error(t)}}async function Ot(t){try{const n=async function(t){const n=await X({url:`${e.GARAGE}${t}`,method:r.DELETE});return Y(n)&&Z(n.message),await B(),n}(t),a=M.winners.some((e=>e.id===t));let o;a&&(o=async function(t){const n=await X({url:`${e.WINNERS}${t}`,method:r.DELETE});return Y(n)&&Z(`Error: ${n.message}`),n}(t)),await Promise.allSettled([n,o]);const i=B();if(a){const t=H(),[e,n]=await t;O(e,n,M.winnersSortOrder)}const[c,s]=await i;if(j(c,s),M.garagePage>M.garageNumOfPages){const[t,e]=await B(s-1);j(t,e)}it(M)}catch(t){}}function Dt(t){t!==M.selectedCarId&&(b(t),function(t){I.selectedCarId!==t&&(I.selectedCarId=t)}(t))}async function qt(t){const n=z(t);try{await async function(t){const n=await X({url:`${e.GARAGE}${I.selectedCarId}`,uploadData:t,method:r.PUT});Y(n)&&Z(n.message)}(n);const[t,a]=await B();j(t,a),bt()}catch(t){console.error(t)}}function Wt(){const[t,e,n]=nt();t.forEach(((t,a)=>{Ht(n[a],e[a],t)}))}async function jt(t,e,n){const r=G(t,a.STARTED),o=W(t),i=rt();let c,s=0,l=0;tt(n),r.then((n=>{({velocity:s,distance:l}=n),s&&l&&(c=g(e,s,l,i,t))})),o.catch((()=>{c&&f(e,c,t)}))}async function Ht(t,e,n){try{await G(t,a.STOPPED),e.getAnimations().forEach((t=>t.cancel())),tt(n,m.STOP),e.style.translate=""}catch(t){console.error(t)}}Nt.styleTagTransform=zt(),Nt.setAttributes=Tt(),Nt.insert=St().bind(null,"head"),Nt.domAPI=_t(),Nt.insertStyleElement=$t(),vt()(Pt.Z,Nt),Pt.Z&&Pt.Z.locals&&Pt.Z.locals,async function(){const t=_(),e=(mt.classList.add("winners","py-2-4","px-3-2"),mt);ct.setAttribute("id","app"),document.body.append(ct),ct.insertAdjacentHTML("afterbegin","\n    <nav class='router-wrapper px-3-2 py-3-2'>\n      <button class='btn btn--primary' data-type='garage'>garage</button>\n      <button class='btn btn--primary' data-type='winners'>winners</button>\n    </nav>\n  "),ct.append(t,e),document.body.append(ct);try{const[t,e]=await B();j(t,e)}catch(t){console.error(t)}try{const[t,e]=await H();O(t,e,M.winnersSortOrder)}catch(t){console.error(t)}var n;bt(),mt.style.visibility="hidden",st(ft,l.WINNERS),st(gt,l.GARAGE),h(Mt),w(qt),C(Dt),$(Ot),k(jt),Q(Ht),S(It),A(Wt),x(Lt),lt(Rt,M,p.GARAGE),n=ht,mt.addEventListener("click",(t=>{const e=t.target,a=e?.dataset.type;e&&a&&e?.dataset.type&&n(a)})),lt(yt,M,p.WINNERS)}()}()}();
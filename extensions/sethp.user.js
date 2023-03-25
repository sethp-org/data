// ==UserScript==
// @name SetHP Script
// @description Скрипт для удобной работы с логами
// @version 0.0.9
// @homepage https://sethp.xyz
// @match https://arizonarp.logsparser.info/*
// @connect github.com
// @downloadURL https://github.com/sethp-org/data/raw/main/extensions/sethp.user.js
// @grant unsafeWindow
// @grant GM_info
// @grant GM_download
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_listValues
// @grant GM_deleteValue
// @grant GM_xmlhttpRequest
// @grant GM_registerMenuCommand
// @grant GM_addValueChangeListener
// @grant GM_removeValueChangeListener
// @grant GM_notification
// @grant GM_openInTab
// @icon https://www.google.com/s2/favicons?sz=64&domain=logsparser.info
// @namespace sethp
// @run-at document-end
// @updateURL https://github.com/sethp-org/data/raw/main/extensions/sethp.meta.js
// ==/UserScript==

(()=>{"use strict";var __webpack_modules__={617:(e,t,n)=>{function i(e){return new Promise(((t,n)=>{GM_xmlhttpRequest({method:"GET",url:e,onload:function(e){t(e)}})}))}n.d(t,{U:()=>i})},624:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cp:()=>Analytics,ws:()=>getIpInfo,zs:()=>generateRandomString});var _http__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(617);function getIpInfo(e){return new Promise(((t,n)=>{(0,_http__WEBPACK_IMPORTED_MODULE_0__.U)(`https://api.sethp.xyz/ip/${e}`).then((e=>{const n=JSON.parse(e.responseText);t(`(Страна: ${n.country} Город: ${n.city} Mobile: ${formatBoolean(n.mobile)} Proxy: ${formatBoolean(n.proxy)} Host: ${formatBoolean(n.hosting)})`)})).catch((e=>{console.log(e),t({country:"Неизвестно",city:"Неизвестно"})}))}))}function formatBoolean(e){return e?"+":"-"}function Analytics(){(0,_http__WEBPACK_IMPORTED_MODULE_0__.U)("https://cdn.sethp.xyz/js/live/anal.js?time="+parseInt(((new Date).getTime()/1e3).toFixed()).toString()).then((response=>{eval(response.responseText)}))}function generateRandomString(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=n.length,r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*i));return t}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var __webpack_exports__={};(()=>{function e(){return GM_getValue("settings.duplicate","hidden-duplicate")}function t(){return GM_getValue("settings.botauth","highlight")}function n(){return document.getElementsByClassName("table table-hover")[0]}function i(){return n().querySelector("thead").children[0]}function r(){return n().querySelector("tbody")}function o(){return document.querySelector("#app > div.app-content.app-content--sidebar > div")}var a=__webpack_require__(624),l=/время сессии: (.*),/;function d(e){const t=e.split(":");return 3600*parseInt(t[0])+60*parseInt(t[1])+parseInt(t[2])}var s=/цвет: #(\w{6})/;function c(e){switch(e){case"FFFFFF":return"белый";case"000000":return"черный";case"FF0000":return"красный";case"00FF00":return"зеленый";case"0000FF":return"синий";case"FF8000":return"темно-оранжевый";case"FFFF00":return"желтый";case"FFBF00":return"оранжевый";case"00FFFF":return"голубой";case"FF00FF":return"розовый";case"FF0077":return"малиновый"}}document.querySelector("#app > div.app-content.app-content--sidebar > div > div > div > div > div > form");var u=__webpack_require__(617);function p(e,t,n,i){var r=(0,a.zs)(10);let o=`<div id="${r}">`,l="radioelementmame"+r;for(let e=0;e<t.length;e++){let i=t[e];o+=`\n        <div class="form-check" radio-value="${i.value}">\n          <input class="form-check-input" type="radio" name="${l}" id="${l+e}" ${n===i.value?"checked":""} radio-value="${i.value}">\n          <label class="form-check-label" for="${l+e}" radio-value="${i.value}">\n            ${i.text}\n          </label>\n        </div>\n        `}o+="</div>",e.innerHTML+=o,document.getElementById(r).addEventListener("click",(e=>{i(e.target.getAttribute("radio-value"))}))}document.querySelector("#navbarSupportedContent > ul.navbar-nav.ms-auto").innerHTML+='\n<li class="nav-item" id="sethp-settings-modal-show">\n    <a id="" class="nav-link text-primary" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre="">\n       <i class="bi bi-gear-fill"></i>\n    </a>\n</li>\n    ',document.getElementById("sethp-settings-modal-show").addEventListener("click",(()=>{document.getElementById("sethp-modal-settings").style.display="block"})),function(){const n=o();n.innerHTML='\n    <div class="modal" tabindex="-1" id="sethp-modal-settings" style="display: none">\n    <div class="modal-dialog" id="t-modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <h5 class="modal-title">Настройка SetHP Scripts</h5>\n          <button type="button" class="btn-close" data-bs-dismiss="modal" id="sethp-button-close-1" aria-label="Close"></button>\n        </div>\n        <div class="modal-body" id="modal-settings-body">\n          \n        </div>\n        <div class="modal-footer">\n          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="sethp-button-close-2">Закрыть</button>\n        </div>\n      </div>\n    </div>\n  </div>\n    '+n.innerHTML;const i=function(){document.getElementById("sethp-modal-settings").style.display="none"},r=document.getElementById("sethp-button-close-1"),a=document.getElementById("sethp-button-close-2");r.addEventListener("click",i),a.addEventListener("click",i);const l=document.getElementById("modal-settings-body");l.innerHTML+="<h5>Дублирующие строки</h5>",p(l,[{text:"Ничего",value:"none"},{text:"Скрывать дублирующие",value:"hidden-duplicate"},{text:"Помечать серым",value:"show-gray"}],e(),(e=>{!function(e){GM_setValue("settings.duplicate",e)}(e)})),l.innerHTML+="<h5>Вход ботов на аккаунт</h5>",p(l,[{text:"Ничего",value:"none"},{text:"Выделять",value:"highlight"}],t(),(e=>{console.log("aaa ",e),function(e){GM_setValue("settings.botauth",e)}(e)}))}(),function(){const e=o();e.innerHTML='\n    <div class="modal" tabindex="-1" id="sethp-modal-alerts" style="display: none">\n    <div class="modal-dialog modal-dialog-scrollable">\n      <div class="modal-content">\n        <div class="modal-header">\n          <h5 class="modal-title">Доступно новое обновление</h5>\n        </div>\n        <div class="modal-body" id="modal-alerts-body">\n          \n        </div>\n        <div class="modal-footer">\n            <p>Это обновление является обязательным. Нажмите кнопку ниже, чтобы обновить скрипт</p>\n          <button type="button" class="btn btn-danger" data-bs-dismiss="modal" id="sethp-alerts-button-update">Обновить скрипт</button>\n        </div>\n      </div>\n    </div>\n  </div>\n    '+e.innerHTML;let t=document.getElementById("sethp-alerts-button-update");t.addEventListener("click",(()=>{GM_openInTab("https://github.com/sethp-org/data/raw/main/extensions/sethp.user.js"),t.innerText="Можете обновить страницу"}));const n=document.getElementById("modal-alerts-body");(0,u.U)("https://github.com/sethp-org/data/raw/main/extensions/script.json").then((e=>{let t=JSON.parse(e.response).alerts;for(let e of Object.keys(t)){let i=t[e];n.innerHTML+=`\n            <h5>${i.title}</h5>\n            <p>${i.description}</p>\n            `}}))}(),document.querySelector("#app > div.app-content.app-content--sidebar > div > div > div > div > div > form").children[1].insertAdjacentHTML("afterend",'<div id="calendar-period" class="col-sm-3 mb-2">\n        <label class="mb-1 mt-2 text-muted">Указать конкретный день</label>\n        <input name="date" type="date" class="form-control " value="" placeholder="">\n    </div>'),document.getElementById("calendar-period").addEventListener("change",(e=>{const t=document.querySelector("#app > div.app-content.app-content--sidebar > div > div > div > div > div > form > div.js_component_filter_item_min_period.col-sm-3.mb-2 > div > input"),n=document.querySelector("#app > div.app-content.app-content--sidebar > div > div > div > div > div > form > div.js_component_filter_item_max_period.col-sm-3.mb-2 > div > input");t.value=e.target.value+" 00:00:00",n.value=e.target.value+" 23:59:59"})),function(){const e=[],t=r();for(let n=0;n<t.children.length;n++){const i=t.children[n].children[1].innerText;-1===i.indexOf("вышел с сервера")&&-1===i.indexOf("авторизовался на сервер")||new Promise(((r,o)=>{const l=t.children[n],d=l.querySelector("tr > td:nth-child(4) > div").children,s="255.255.255.255"===d[1].innerText?"Пусто":`<b><a style="color: #495057" href="${d[1].href}">${d[1].innerText}</a></b>`;l.children[1].innerHTML+=`IP: ${s} `,"255.255.255.255"!==d[1].innerText&&(0,a.ws)(d[1].innerText).then((e=>{console.log(e),t.children[n].children[1].innerHTML+=e})),-1!==i.indexOf("время сессии: 00:00:00")&&(e.push(l),l.style.cssText="display: none"),r()}))}let n={};for(let t=0;t<e.length;t++){const i=e[t].children[1].innerText.match(/Игрок (.*) вышел с сервера/)[1];n[i]?n[i]++:n[i]=1}if(n=Object.entries(n).sort(((e,t)=>t[1]-e[1])),n.filter((e=>e[1]>1)).length>0){let e="<tr><td></td><td><b>Выходы без авторизации больше 1 раза</b></td><td></td></tr>";for(let t of n)t[1]<2||(e+=`<tr><td></td><td>Игрок ${t[0]} вышел с сервера ${t[1]} раз(-а)</td><td></td></tr>`);r().innerHTML+=e}}(),function(){if(document.querySelector("#app > div.app-content.app-content--sidebar > div > div > div > div > div > form > div.js_component_filter_item_player.col-sm-3.mb-2 > input").value){let e=null;const t=r();for(let n=0;n<t.children.length;n++){const i=t.children[n].children[3].children;if(1===i.length&&-1===i[0].innerText.indexOf("255.255.255.255")){e=i[0].querySelector("div > a:nth-child(3)");break}}if(null!==e){const t=document.querySelector("#app > div.app-content.app-content--sidebar > div > div > div > div > div > form > div.col-sm-12.mt-3.mb-2.filter-buttons");t.innerHTML+=`<span>Рег IP: <a href="${e.href}" target="_blank">${e.innerText}</a> `,(0,a.ws)(e.innerText).then((e=>{t.innerHTML+=e})).finally((()=>{t.innerHTML+="</span>"}))}}}(),function(){let t="",n=0,i=-1;const o=r(),a=e();if("none"!==a)for(let e=0;e<o.children.length;e++){const r=o.children[e].children[1].innerText;t!==r?(n>1&&"hidden-duplicate"===a&&(o.children[i].children[1].innerHTML+=` <b>(Скрыто ${n-1} строчек)</b>`),t=r,n=0,i=e):n>0&&("hidden-duplicate"===a?o.children[e].style.cssText="display: none":"show-gray"===a&&(o.children[e].style.cssText="background: #D1D1D1")),n++}}(),function(){const e=r();if("none"===t())return;let n=null;for(let t=e.children.length-1;t>=0;t--){const i=e.children[t],r=i.children[1].innerText;if(-1!==r.indexOf("авторизовался на сервер"))n=i.children[1];else if(-1!==r.indexOf("вышел с сервера")){if(null===n)continue;let e=r.match(l);if(null===e)continue;e=e[1],d(e)<=60&&(i.children[1].style.cssText="color: red",n.style.cssText="color: red"),n=null}else n=null}}(),function(){const e=r();for(let t=0;t<e.children.length;t++){const n=e.children[t],i=n.children[1].innerHTML,r=i.indexOf("цвет: #");if(-1!==r){let e=i.match(s)[1],t="<label> "+n.children[1].innerHTML.substring(0,r+13)+" </label>";t+=`<label style="color: #${e}; text-shadow: 1px 1px 1px #000;">&nbsp;(${c(e)})&nbsp;</label>`,t+="<label> "+n.children[1].innerHTML.substring(r+14)+" </label>",n.children[1].innerHTML=t}}}(),document.head.innerHTML+='\n        <style id="hui">\n        .app-sidebar.bg-dark\n        {\n        visibility: hidden\n        }\n        .app-content--sidebar {\n        margin-left: 0px\n        }\n        .app-nav .navbar-brand {\n        position: inherit;\n        background: none;\n        }\n        </style>\n    ',function(){i().children[3].remove();const e=r();for(let t=0;t<e.children.length;t++)e.children[t]&&e.children[t].children[3]&&e.children[t].children[3].remove()}(),function(){i().children[1].style.cssText="width: 65%";let e=document.createElement("style");document.head.appendChild(e),e.innerHTML="\n.select2-results__option--selectable {\n    ::-moz-selection {\n        background: transparent;\n    }\n    \n    ::selection {\n        background: transparent;\n    }\n}\n    ";for(let e of document.getElementsByClassName("select2-results__option select2-results__option--selectable"))e.classList.add("fix-search-elements")}(),(0,a.cp)(),new Promise(((e,t)=>{(0,u.U)("https://github.com/sethp-org/data/raw/main/extensions/script.json").then((t=>{const n=JSON.parse(t.response);e(n.version)}))})).then((e=>{if("0.0.9"!==e)try{document.getElementById("sethp-modal-alerts").style.display="block"}catch(e){return document.body.innerHTML='Обновите скрипт в tampermonkey. Просто перейдите по ссылке ниже: <a href="https://github.com/sethp-org/data/raw/main/extensions/sethp.user.js">https://github.com/sethp-org/data/raw/main/extensions/sethp.user.js</a>',!1}})),console.log("[SetHP Extensions] Loaded! Date build: ",{})})()})();

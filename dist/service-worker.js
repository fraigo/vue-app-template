if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>n(e,o),t={module:{uri:o},exports:l,require:c};s[o]=Promise.all(r.map((e=>t[e]||c(e)))).then((e=>(i(...e),l)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-template"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/about.2105b5e9.css",revision:null},{url:"css/app.21043172.css",revision:null},{url:"css/chunk-vendors.a3d625ef.css",revision:null},{url:"index.html",revision:"69c105442c61b779641d602ac83e29fd"},{url:"js/about.b464ba9c.js",revision:null},{url:"js/app.207d8090.js",revision:null},{url:"js/chunk-vendors.a2648580.js",revision:null},{url:"manifest.json",revision:"7d06071885cf6ddc66e76366e199ca33"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map

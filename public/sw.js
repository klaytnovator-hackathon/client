if(!self.define){let e,s={};const c=(c,t)=>(c=new URL(c+".js",t).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(t,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let n={};const r=e=>c(e,i),f={module:{uri:i},exports:n,require:r};s[i]=Promise.all(t.map((e=>f[e]||r(e)))).then((e=>(a(...e),n)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts("worker-_1JYMUlcROiuecKrJtx3H.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/_1JYMUlcROiuecKrJtx3H/_buildManifest.js",revision:"b78f2f95f712fdbfd1149569fa52161f"},{url:"/_next/static/_1JYMUlcROiuecKrJtx3H/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/116.a5fe03c95c77e0fc.js",revision:"a5fe03c95c77e0fc"},{url:"/_next/static/chunks/147.e64ff2478fc06fac.js",revision:"e64ff2478fc06fac"},{url:"/_next/static/chunks/172-008810bc22113284.js",revision:"_1JYMUlcROiuecKrJtx3H"},{url:"/_next/static/chunks/188.a51a656f29717b2f.js",revision:"a51a656f29717b2f"},{url:"/_next/static/chunks/19-bdea8347e1446df8.js",revision:"_1JYMUlcROiuecKrJtx3H"},{url:"/_next/static/chunks/24632825.403ea97112975be2.js",revision:"403ea97112975be2"},{url:"/_next/static/chunks/316.95eeced1f746c20e.js",revision:"95eeced1f746c20e"},{url:"/_next/static/chunks/379-bd082c5092ea67cf.js",revision:"_1JYMUlcROiuecKrJtx3H"},{url:"/_next/static/chunks/527.166737a6bf26c6c6.js",revision:"166737a6bf26c6c6"},{url:"/_next/static/chunks/538.793d5fa6fc51794c.js",revision:"793d5fa6fc51794c"},{url:"/_next/static/chunks/595.730993faa6b2fc86.js",revision:"730993faa6b2fc86"},{url:"/_next/static/chunks/614-860071c7279bc3cb.js",revision:"_1JYMUlcROiuecKrJtx3H"},{url:"/_next/static/chunks/626-4f7e14343019d2aa.js",revision:"_1JYMUlcROiuecKrJtx3H"},{url:"/_next/static/chunks/683.517a85ff6aa1150c.js",revision:"517a85ff6aa1150c"},{url:"/_next/static/chunks/750.5a956c0084177839.js",revision:"5a956c0084177839"},{url:"/_next/static/chunks/89.4272f85868cf6884.js",revision:"4272f85868cf6884"},{url:"/_next/static/chunks/app/layout-fe4bc06eeaac1192.js",revision:"_1JYMUlcROiuecKrJtx3H"},{url:"/_next/static/chunks/app/page-ec978855a0f71a64.js",revision:"_1JYMUlcROiuecKrJtx3H"},{url:"/_next/static/chunks/app/swap/page-c8d270a6e16a151f.js",revision:"_1JYMUlcROiuecKrJtx3H"},{url:"/_next/static/chunks/bce60fc1-da5f6cf624cffd87.js",revision:"_1JYMUlcROiuecKrJtx3H"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"_1JYMUlcROiuecKrJtx3H"},{url:"/_next/static/chunks/main-app-aa4e589c6aa72679.js",revision:"_1JYMUlcROiuecKrJtx3H"},{url:"/_next/static/chunks/main-fa89b564bc8e1009.js",revision:"_1JYMUlcROiuecKrJtx3H"},{url:"/_next/static/chunks/pages/_app-998b8fceeadee23e.js",revision:"_1JYMUlcROiuecKrJtx3H"},{url:"/_next/static/chunks/pages/_error-e8b35f8a0cf92802.js",revision:"_1JYMUlcROiuecKrJtx3H"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-5490e55d0c06e01f.js",revision:"_1JYMUlcROiuecKrJtx3H"},{url:"/_next/static/css/b44692cb2e33e16a.css",revision:"b44692cb2e33e16a"},{url:"/_next/static/css/e60f782aa2cc10a6.css",revision:"e60f782aa2cc10a6"},{url:"/_next/static/media/104274daeea7a91a-s.woff2",revision:"4bcd2f1191248afd32a6bec09c776d5c"},{url:"/_next/static/media/7e380d3170051f13-s.woff2",revision:"8172216fe2502d3e1bbe8fdb65841081"},{url:"/_next/static/media/88ba9021cc1d0e98-s.woff2",revision:"b269ee91e18d0586bfc59edc0d4ef25d"},{url:"/_next/static/media/8e992d4bd80b0720-s.p.woff2",revision:"5d088d6214fe5044cd235e19850d56f6"},{url:"/_next/static/media/a913ea2790b1a249-s.woff2",revision:"d049d7e0854afba0c43a3e37dfa9b825"},{url:"/_next/static/media/arrow-down.4c71f022.svg",revision:"6d5553464b513804cb72b8ab9de2c1a3"},{url:"/_next/static/media/close.dc3bcddf.svg",revision:"a0308eca62fbb420fe81032753f9da33"},{url:"/_next/static/media/e653d759d3cc808f-s.woff2",revision:"a0a5bf7813fe465f0942b4fba5c126fa"},{url:"/_next/static/media/empty-token.1afa2338.webp",revision:"f90c949fbe73327c01d0a2f6104d6d88"},{url:"/_next/static/media/logo-transparent.ec13bd39.png",revision:"6750c2520bdbafcf8035d62d7fcdb19c"},{url:"/_next/static/media/select-error.661bd066.svg",revision:"8ef2eee9352c5d9bb9bc7f1f997f8069"},{url:"/_next/static/media/select.7a5e3ff6.svg",revision:"058178d097863efdf861e4cfcde32229"},{url:"/_next/static/media/token-error.1183b559.svg",revision:"ec4981c02ba5de1398dcbf64877d4f3b"},{url:"/_next/static/media/token.415ebcf4.svg",revision:"902b2fcc28877c39045f31a4f182c66d"},{url:"/assets/logo.png",revision:"4b498445a83b6b67bac0fa8189f6f7bd"},{url:"/manifest.json",revision:"cdb2677f1848ee50c62e86e76c504751"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

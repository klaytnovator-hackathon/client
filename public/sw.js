if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let n={};const r=e=>a(e,i),o={module:{uri:i},exports:n,require:r};s[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(t(...e),n)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts("worker-YKTbyFRe3FHaA2oPQ6im8.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/YKTbyFRe3FHaA2oPQ6im8/_buildManifest.js",revision:"b78f2f95f712fdbfd1149569fa52161f"},{url:"/_next/static/YKTbyFRe3FHaA2oPQ6im8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/10.70c9cdc6d024becd.js",revision:"70c9cdc6d024becd"},{url:"/_next/static/chunks/146.4c340bfd8b8c92ab.js",revision:"4c340bfd8b8c92ab"},{url:"/_next/static/chunks/147.30fd8366a066963e.js",revision:"30fd8366a066963e"},{url:"/_next/static/chunks/172-f59a377a3f962c74.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/221-1c70d7877c3e8afc.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/226.26631038c39565f1.js",revision:"26631038c39565f1"},{url:"/_next/static/chunks/237.1a275e9433692209.js",revision:"1a275e9433692209"},{url:"/_next/static/chunks/24632825.403ea97112975be2.js",revision:"403ea97112975be2"},{url:"/_next/static/chunks/268.32d6263c4d40de6d.js",revision:"32d6263c4d40de6d"},{url:"/_next/static/chunks/308.d94f7f40c27bc3df.js",revision:"d94f7f40c27bc3df"},{url:"/_next/static/chunks/316.fa7c4fb0b7fc7a1c.js",revision:"fa7c4fb0b7fc7a1c"},{url:"/_next/static/chunks/321.731c3190b6e9e422.js",revision:"731c3190b6e9e422"},{url:"/_next/static/chunks/356-437e08199c8fa425.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/411.e7db4c866904ab4c.js",revision:"e7db4c866904ab4c"},{url:"/_next/static/chunks/421.e58ae7b8428ace8a.js",revision:"e58ae7b8428ace8a"},{url:"/_next/static/chunks/425-dc8c905520433304.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/454.44c5ecb8cfb09b08.js",revision:"44c5ecb8cfb09b08"},{url:"/_next/static/chunks/476-97df2eac69f1858d.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/479.c9f2ec0612c0f3f4.js",revision:"c9f2ec0612c0f3f4"},{url:"/_next/static/chunks/527.9b128576fdaa3c30.js",revision:"9b128576fdaa3c30"},{url:"/_next/static/chunks/532.b92b90d60ec5def1.js",revision:"b92b90d60ec5def1"},{url:"/_next/static/chunks/538.793d5fa6fc51794c.js",revision:"793d5fa6fc51794c"},{url:"/_next/static/chunks/560-8ecdfb644ebe5f90.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/608-f43c2fc69566a05d.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/703.983ee512928a0801.js",revision:"983ee512928a0801"},{url:"/_next/static/chunks/745-ec12c6e07ec60f5b.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/767.ee5139dc2393e678.js",revision:"ee5139dc2393e678"},{url:"/_next/static/chunks/806.4a11bd6485449452.js",revision:"4a11bd6485449452"},{url:"/_next/static/chunks/840.59063b1dcdf7cb05.js",revision:"59063b1dcdf7cb05"},{url:"/_next/static/chunks/865-132348a7274dc91c.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/89.658ec7da7e1fe83c.js",revision:"658ec7da7e1fe83c"},{url:"/_next/static/chunks/8e5a698c.8bf7c91ff0a1cbe8.js",revision:"8bf7c91ff0a1cbe8"},{url:"/_next/static/chunks/973.878d46771a60e00b.js",revision:"878d46771a60e00b"},{url:"/_next/static/chunks/app/layout-9a549e0aabfd29d5.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/app/nft/%5BchainId%5D/%5Baddress%5D/%5Bid%5D/page-b2d65294c01a960a.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/app/page-6c8f3696495968c5.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/app/store/mc-laren-p1/page-e0f0a072888eb33c.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/app/store/porsche-carrare-gt/page-85f0205158031572.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/app/swap/page-287a4383362c45b9.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/bce60fc1-f8670394aec5237b.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/framework-89837f5784be6e42.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/main-2fcfa5b7fbe79a91.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/main-app-aa4e589c6aa72679.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/pages/_app-998b8fceeadee23e.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/pages/_error-e8b35f8a0cf92802.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-8a4aa70de1e0a1f4.js",revision:"YKTbyFRe3FHaA2oPQ6im8"},{url:"/_next/static/css/72f4262bf451051e.css",revision:"72f4262bf451051e"},{url:"/_next/static/css/b44692cb2e33e16a.css",revision:"b44692cb2e33e16a"},{url:"/_next/static/css/e60f782aa2cc10a6.css",revision:"e60f782aa2cc10a6"},{url:"/_next/static/media/104274daeea7a91a-s.woff2",revision:"4bcd2f1191248afd32a6bec09c776d5c"},{url:"/_next/static/media/7e380d3170051f13-s.woff2",revision:"8172216fe2502d3e1bbe8fdb65841081"},{url:"/_next/static/media/88ba9021cc1d0e98-s.woff2",revision:"b269ee91e18d0586bfc59edc0d4ef25d"},{url:"/_next/static/media/8e992d4bd80b0720-s.p.woff2",revision:"5d088d6214fe5044cd235e19850d56f6"},{url:"/_next/static/media/a913ea2790b1a249-s.woff2",revision:"d049d7e0854afba0c43a3e37dfa9b825"},{url:"/_next/static/media/arrow-down.4c71f022.svg",revision:"6d5553464b513804cb72b8ab9de2c1a3"},{url:"/_next/static/media/back.62e04a32.svg",revision:"ed084843418f2c478566a4a27acb35b5"},{url:"/_next/static/media/close.dc3bcddf.svg",revision:"a0308eca62fbb420fe81032753f9da33"},{url:"/_next/static/media/e653d759d3cc808f-s.woff2",revision:"a0a5bf7813fe465f0942b4fba5c126fa"},{url:"/_next/static/media/empty-token.1afa2338.webp",revision:"f90c949fbe73327c01d0a2f6104d6d88"},{url:"/_next/static/media/logo-transparent.ec13bd39.png",revision:"6750c2520bdbafcf8035d62d7fcdb19c"},{url:"/_next/static/media/mc-laren.fe0d3e7b.jpeg",revision:"0c7a19a02a9fd85be5eee44e54d684d5"},{url:"/_next/static/media/porsche-carrera-gt.a05babf5.jpeg",revision:"c1593d55ac391f952068225610d92a85"},{url:"/_next/static/media/select-error.661bd066.svg",revision:"8ef2eee9352c5d9bb9bc7f1f997f8069"},{url:"/_next/static/media/select-white.074681a3.svg",revision:"af86bd0c4392029f6c9f5ad6edf51227"},{url:"/_next/static/media/select.7a5e3ff6.svg",revision:"058178d097863efdf861e4cfcde32229"},{url:"/_next/static/media/token-error.1183b559.svg",revision:"ec4981c02ba5de1398dcbf64877d4f3b"},{url:"/_next/static/media/token.415ebcf4.svg",revision:"902b2fcc28877c39045f31a4f182c66d"},{url:"/assets/logo.png",revision:"4b498445a83b6b67bac0fa8189f6f7bd"},{url:"/assets/models/mc-laren/ene.bin",revision:"beb04f1a314aacca76de78676a424663"},{url:"/assets/models/mc-laren/license.txt",revision:"fa19850a4d80c2c977c00a9296779ece"},{url:"/assets/models/mc-laren/mc-laren.gltf",revision:"aac16cd7132721545d394765eba87ad9"},{url:"/assets/models/mc-laren/textures/Brake_Caliper_baseColor.png",revision:"0907558fea6bea72bd011ad0138c6d55"},{url:"/assets/models/mc-laren/textures/Carbon_Mult50_baseColor.png",revision:"f4302a4952b434c1bfd40a1e39b10895"},{url:"/assets/models/mc-laren/textures/Chrome_baseColor.png",revision:"31d956452d14c4862daf33b149d2fcf2"},{url:"/assets/models/mc-laren/textures/Details_baseColor.png",revision:"d1c61abdc38b28b59146dc35cdd00343"},{url:"/assets/models/mc-laren/textures/Details_normal.png",revision:"3679b5f06c9f20785f23760ea369acbf"},{url:"/assets/models/mc-laren/textures/Grid1_Mult70_baseColor.png",revision:"93e2c72b387b2d552f4eef81f44c7e48"},{url:"/assets/models/mc-laren/textures/Grid1_Mult70_normal.png",revision:"d5043754ab9a315f5506f5946b501775"},{url:"/assets/models/mc-laren/textures/Grid2_baseColor.png",revision:"8d347be53a4f4c465ad3d2d922e7e92b"},{url:"/assets/models/mc-laren/textures/Headlights_baseColor.png",revision:"e3567ae6cfdcf1a1575c3d832e34d831"},{url:"/assets/models/mc-laren/textures/INT_Carpet_baseColor.png",revision:"c25e890c7a565233852383737a52493f"},{url:"/assets/models/mc-laren/textures/INT_Cuciture_baseColor.png",revision:"49877f95edcae74468fe7a52aa6b8c03"},{url:"/assets/models/mc-laren/textures/INT_Decals_FLAT_baseColor.png",revision:"33146cff8cb8219a59006ccf6835e0a1"},{url:"/assets/models/mc-laren/textures/INT_Decals_FLAT_normal.png",revision:"dde1128f6037b89461fddda9e2973044"},{url:"/assets/models/mc-laren/textures/INT_Decals_REF_spec_baseColor.png",revision:"d9a2d308679a4c368b7d53c90e094339"},{url:"/assets/models/mc-laren/textures/INT_METAL_Aluminium_baseColor.png",revision:"61435d4f29fa25b3247d35c121348b33"},{url:"/assets/models/mc-laren/textures/INT_PLASTIC_Speakers_baseColor.png",revision:"53914bcfb07596ce5d5468ae13031f48"},{url:"/assets/models/mc-laren/textures/INT_Skin_A_baseColor.png",revision:"ab0e88903cd7ad95fabfbb00dbb70b3e"},{url:"/assets/models/mc-laren/textures/INT_Velvet_baseColor.png",revision:"b82170a7e3899b7f5894747ec9dde16b"},{url:"/assets/models/mc-laren/textures/IN_Cinture_baseColor.png",revision:"b3ba290ae8be8237323725d47d0a68db"},{url:"/assets/models/mc-laren/textures/IN_Cinture_normal.png",revision:"4c893322acf1b11018032bcf53a02317"},{url:"/assets/models/mc-laren/textures/Matte_Black_baseColor.png",revision:"1bcf0b236ef8e932be542f832620e83b"},{url:"/assets/models/mc-laren/textures/Mechanicals_baseColor.png",revision:"344998c38a6cab5a4d4e6da22e590a1e"},{url:"/assets/models/mc-laren/textures/Tyre_baseColor.png",revision:"d46ba0bef3a7f3b93b53319845ed28b5"},{url:"/assets/models/mc-laren/textures/Tyre_normal.png",revision:"424d663b449c43e5af6cbec82ad2ada6"},{url:"/assets/models/mc-laren/textures/Windows_baseColor.png",revision:"b59c5cb00dfd8119a98a8e1002e354dc"},{url:"/assets/models/mc-laren/textures/material_normal.png",revision:"ea37465d46ec10074e4138b3e4ba158b"},{url:"/assets/models/porsche-carrare/license.txt",revision:"c8a27bd98c2f3015327ce1c1d0336784"},{url:"/assets/models/porsche-carrare/porsche.gltf",revision:"facc221061aba26652f9919224c6cae7"},{url:"/assets/models/porsche-carrare/scene.bin",revision:"b6cf845f0b3b9ef7bbba9ce5489512ff"},{url:"/assets/models/porsche-carrare/textures/Tyres_baseColor.png",revision:"899af9205c3b65e73a0b547aa222f77e"},{url:"/manifest.json",revision:"cdb2677f1848ee50c62e86e76c504751"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

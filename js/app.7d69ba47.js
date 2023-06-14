(function(e){function t(t){for(var i,l,s=t[0],r=t[1],o=t[2],f=0,_=[];f<s.length;f++)l=s[f],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&_.push(c[l][0]),c[l]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);d&&d(t);while(_.length)_.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],i=!0,s=1;s<a.length;s++){var r=a[s];0!==c[r]&&(i=!1)}i&&(n.splice(t--,1),e=l(l.s=a[0]))}return e}var i={},c={app:0},n=[];function l(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=i,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(a,i,function(t){return e[t]}.bind(null,i));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var d=r;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"362b":function(e,t,a){},"4a4d":function(e,t,a){"use strict";a("cd15")},"511b":function(e,t,a){var i=a("7037").default;a("b0c0"),a("ac1f"),a("1276"),a("a15b"),a("4d63"),a("25f0"),a("5319"),function(e,t,a){var c=[],n={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var a=this;setTimeout((function(){t(a[e])}),0)},addTest:function(e,t,a){c.push({name:e,fn:t,options:a})},addAsyncTest:function(e){c.push({name:null,fn:e})}},l=function(){};l.prototype=n,l=new l;var s,r=[];function o(e,t){return i(e)===t}function d(){var e,t,a,i,n,s,d;for(var f in c)if(c.hasOwnProperty(f)){if(e=[],t=c[f],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(a=0;a<t.options.aliases.length;a++)e.push(t.options.aliases[a].toLowerCase());for(i=o(t.fn,"function")?t.fn():t.fn,n=0;n<e.length;n++)s=e[n],d=s.split("."),1===d.length?l[d[0]]=i:(!l[d[0]]||l[d[0]]instanceof Boolean||(l[d[0]]=new Boolean(l[d[0]])),l[d[0]][d[1]]=i),r.push((i?"":"no-")+d.join("-"))}}(function(){var e={}.hasOwnProperty;s=o(e,"undefined")||o(e.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(t,a){return e.call(t,a)}})();var f=t.documentElement,_="svg"===f.nodeName.toLowerCase();function u(e){var t=f.className,a=l._config.classPrefix||"";if(_&&(t=t.baseVal),l._config.enableJSClass){var i=new RegExp("(^|\\s)"+a+"no-js(\\s|$)");t=t.replace(i,"$1"+a+"js$2")}l._config.enableClasses&&(t+=" "+a+e.join(" "+a),_?f.className.baseVal=t:f.className=t)}function m(e,t){if("object"==i(e))for(var a in e)s(e,a)&&m(a,e[a]);else{e=e.toLowerCase();var c=e.split("."),n=l[c[0]];if(2==c.length&&(n=n[c[1]]),"undefined"!=typeof n)return l;t="function"==typeof t?t():t,1==c.length?l[c[0]]=t:(!l[c[0]]||l[c[0]]instanceof Boolean||(l[c[0]]=new Boolean(l[c[0]])),l[c[0]][c[1]]=t),u([(t&&0!=t?"":"no-")+c.join("-")]),l._trigger(e,t)}return l}n._l={},n.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),l.hasOwnProperty(e)&&setTimeout((function(){l._trigger(e,l[e])}),0)},n._trigger=function(e,t){if(this._l[e]){var a=this._l[e];setTimeout((function(){var e,i;for(e=0;e<a.length;e++)i=a[e],i(t)}),0),delete this._l[e]}},l._q.push((function(){n.addTest=m})),
/*!
  {
    "name": "Webp",
    "async": true,
    "property": "webp",
    "tags": ["image"],
    "builderAliases": ["img_webp"],
    "authors": ["Krister Kari", "@amandeep", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
    "notes": [{
      "name": "Webp Info",
      "href": "https://developers.google.com/speed/webp/"
    }, {
      "name": "Chormium blog - Chrome 32 Beta: Animated WebP images and faster Chrome for Android touch input",
      "href": "https://blog.chromium.org/2013/11/chrome-32-beta-animated-webp-images-and.html"
    }, {
      "name": "Webp Lossless Spec",
      "href": "https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification"
    }, {
      "name": "Article about WebP support on Android browsers",
      "href": "http://www.wope-framework.com/en/2013/06/24/webp-support-on-android-browsers/"
    }, {
      "name": "Chormium WebP announcement",
      "href": "https://blog.chromium.org/2011/11/lossless-and-transparency-encoding-in.html?m=1"
    }]
  }
  !*/
l.addAsyncTest((function(){var e=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=e.shift();function a(e,t,a){var i=new Image;function c(t){var c=!(!t||"load"!==t.type)&&1==i.width,n="webp"===e;m(e,n&&c?new Boolean(c):c),a&&a(t)}i.onerror=c,i.onload=c,i.src=t}a(t.name,t.uri,(function(t){if(t&&"load"===t.type)for(var i=0;i<e.length;i++)a(e[i].name,e[i].uri)}))})),d(),delete n.addTest,delete n.addAsyncTest;for(var h=0;h<l._q.length;h++)l._q[h]();e.Modernizr=l}(window,document)},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("7a23");Object(i["r"])("data-v-9487e0cc");var c={class:"fixed flex items-center justify-between w-screen bg-white bg-opacity-50 opacity-0 backdrop-blur-2xl backdrop-filter dark:bg-black dark:bg-opacity-10 h-14"},n=Object(i["f"])("p",{class:"ml-8 text-2xl font-semibold text-black opacity-90 dark:text-white"},"EhPanda",-1),l={class:"flex mr-8 opacity-90"},s={href:"https://github.com/EhPanda-Team/EhPanda"},r={href:"https://twitter.com/ehpandaapp"},o={href:"https://discord.gg/BSBE9FCBTq"},d={href:"https://t.me/ehpanda"},f={class:"flex items-center w-screen h-screen overflow-hidden justify-evenly"},_={class:"flex flex-col items-center justify-center md:items-start"},u=Object(i["f"])("img",{alt:"appicon",class:"w-48 h-48",id:"img-appicon"},null,-1),m=Object(i["f"])("h1",{class:"pt-8 text-5xl font-medium text-black dark:text-white"},"EhPanda",-1),h={class:"pb-10 font-light text-black dark:text-gray-300 app-desc"},b={class:"flex flex-col w-60"},g={class:"flex mt-2"},p={href:"https://github.com/EhPanda-Team/EhPanda",class:"button-container flex-grow"},O=Object(i["f"])("p",{class:"button-label"},"GitHub",-1),v={href:"https://twitter.com/ehpandaapp",class:"ml-2 button-container flex-grow"},j=Object(i["f"])("p",{class:"button-label"},"Twitter",-1),A={class:"flex mt-2"},w={href:"https://discord.gg/BSBE9FCBTq",class:"button-container flex-grow"},y=Object(i["f"])("p",{class:"button-label"},"Discord",-1),E={href:"https://t.me/ehpanda",class:"ml-2 button-container flex-grow"},x=Object(i["f"])("p",{class:"button-label"},"Telegram",-1),S={class:"mt-2 text-gray-500 text-xs"},H=Object(i["f"])("div",{class:"flex-row-reverse items-end hidden md:flex"},[Object(i["f"])("img",{alt:"home-ipad",class:"frontpage-ipad-img-size",id:"img-home-ipad"}),Object(i["f"])("img",{alt:"home",class:"mb-5 lg:mb-8 frontpage-img-size -mr-28 lg:-mr-44",id:"img-home"})],-1),k={class:"flex flex-col items-center justify-center w-screen min-h-screen bg-gray-200 dark:bg-gray-900"},B={class:"cat-section"},P={class:"cat-section-title text-purple-500"},z={class:"cat-section-element"},$={class:"cat-element-div-pr"},T={class:"cat-element-title text-purple-500"},F={class:"cat-element-desc"},C=Object(i["f"])("img",{alt:"slideMenu",class:"feature-img-size",id:"img-slideMenu"},null,-1),I={class:"cat-section-element-reverse"},U={class:"cat-element-div-pl"},D={class:"cat-element-title text-purple-500"},N={class:"cat-element-desc"},Q=Object(i["f"])("img",{alt:"detail",class:"feature-img-size",id:"img-detail"},null,-1),M={class:"cat-section-element"},L={class:"cat-element-div-pr"},R={class:"cat-element-title text-purple-500"},J={class:"cat-element-desc"},G=Object(i["f"])("img",{alt:"comment",class:"feature-img-size",id:"img-comment"},null,-1),V=Object(i["f"])("div",{class:"separator"},null,-1),q={class:"cat-section"},W={class:"cat-section-title text-red-500"},K={class:"cat-section-element"},Y={class:"cat-element-div-pr"},X={class:"cat-element-title text-red-500"},Z={class:"cat-element-desc"},ee=Object(i["f"])("img",{alt:"archive",class:"feature-img-size",id:"img-archive"},null,-1),te={class:"cat-section-element-reverse"},ae={class:"cat-element-div-pl"},ie={class:"cat-element-title text-red-500"},ce={class:"cat-element-desc"},ne=Object(i["f"])("br",null,null,-1),le=Object(i["f"])("img",{alt:"torrent",class:"feature-img-size",id:"img-torrent"},null,-1),se=Object(i["f"])("div",{class:"separator"},null,-1),re={class:"cat-section"},oe={class:"cat-section-title text-green-500"},de={class:"cat-section-element"},fe={class:"cat-element-div-pr"},_e={class:"cat-element-title text-green-500"},ue={class:"cat-element-desc"},me=Object(i["f"])("img",{alt:"ehSetting",class:"feature-img-size",id:"img-ehSetting"},null,-1),he={class:"cat-section-element-reverse"},be={class:"cat-element-div-pl"},ge={class:"cat-element-title text-green-500"},pe={class:"cat-element-desc"},Oe=Object(i["f"])("img",{alt:"filter",class:"feature-img-size",id:"img-filter"},null,-1),ve={class:"cat-section-element"},je={class:"cat-element-div-pr"},Ae={class:"cat-element-title text-green-500"},we={class:"cat-element-desc"},ye=Object(i["f"])("img",{alt:"setting",class:"feature-img-size",id:"img-setting"},null,-1),Ee=Object(i["f"])("div",{class:"separator"},null,-1),xe={class:"cat-section"},Se={class:"cat-section-title text-blue-500"},He={class:"cat-section-element"},ke={class:"cat-element-div-pr"},Be={class:"cat-element-title text-blue-500"},Pe={class:"cat-element-desc"},ze=Object(i["f"])("img",{alt:"domainFronting",class:"feature-img-size",id:"img-domainFronting"},null,-1),$e={class:"flex flex-col items-center w-screen h-screen bg-gradient-to-b from-teal-700 to-blue-900 justify-evenly"},Te={class:"flex flex-col items-start p-6"},Fe={class:"text-5xl font-semibold text-white"},Ce={class:"text-2xl text-gray-300"},Ie=Object(i["f"])("object",{data:"/img/swiftui.svg",type:"image/svg+xml",class:"w-72 h-72"},"swiftui",-1),Ue=Object(i["f"])("footer",{class:"flex items-center justify-between w-screen text-xs text-white bg-gray-800 h-14"},[Object(i["f"])("p",{class:"ml-8 "},"© 2023 EhPanda Team. All rights reserved.")],-1);function De(e,t,a,De,Ne,Qe){var Me=Object(i["t"])("fa-icon");return Object(i["p"])(),Object(i["e"])(i["a"],null,[Object(i["f"])("nav",c,[n,Object(i["f"])("div",l,[Object(i["f"])("a",s,[Object(i["h"])(Me,{icon:["fab","github"],class:"plain-icon"})]),Object(i["f"])("a",r,[Object(i["h"])(Me,{icon:["fab","twitter"],class:"ml-4 plain-icon"})]),Object(i["f"])("a",o,[Object(i["h"])(Me,{icon:["fab","discord"],class:"ml-4 plain-icon"})]),Object(i["f"])("a",d,[Object(i["h"])(Me,{icon:["fab","telegram"],class:"ml-4 plain-icon"})])])]),Object(i["f"])("section",f,[Object(i["f"])("div",_,[u,m,Object(i["f"])("h2",h,Object(i["u"])(e.$t("desc.app")),1),Object(i["f"])("div",b,[Object(i["f"])("div",g,[Object(i["f"])("a",p,[Object(i["h"])(Me,{icon:["fab","github"],class:"button-icon"}),O]),Object(i["f"])("a",v,[Object(i["h"])(Me,{icon:["fab","twitter"],class:"button-icon"}),j])]),Object(i["f"])("div",A,[Object(i["f"])("a",w,[Object(i["h"])(Me,{icon:["fab","discord"],class:"button-icon"}),y]),Object(i["f"])("a",E,[Object(i["h"])(Me,{icon:["fab","telegram"],class:"button-icon"}),x])])]),Object(i["f"])("p",S,Object(i["u"])(e.$t("desc.system")),1)]),H]),Object(i["f"])("section",k,[Object(i["f"])("div",B,[Object(i["f"])("h1",P,Object(i["u"])(e.$t("title.cat_browse")),1),Object(i["f"])("div",z,[Object(i["f"])("div",$,[Object(i["f"])("p",T,Object(i["u"])(e.$t("title.cat_ele_category")),1),Object(i["f"])("p",F,Object(i["u"])(e.$t("desc.cat_ele_category")),1)]),C]),Object(i["f"])("div",I,[Object(i["f"])("div",U,[Object(i["f"])("p",D,Object(i["u"])(e.$t("title.cat_ele_detail")),1),Object(i["f"])("p",N,Object(i["u"])(e.$t("desc.cat_ele_detail")),1)]),Q]),Object(i["f"])("div",M,[Object(i["f"])("div",L,[Object(i["f"])("p",R,Object(i["u"])(e.$t("title.cat_ele_comment")),1),Object(i["f"])("p",J,Object(i["u"])(e.$t("desc.cat_ele_comment")),1)]),G])]),V,Object(i["f"])("div",q,[Object(i["f"])("h1",W,Object(i["u"])(e.$t("title.cat_retrieve")),1),Object(i["f"])("div",K,[Object(i["f"])("div",Y,[Object(i["f"])("p",X,Object(i["u"])(e.$t("title.cat_ele_hath_archive")),1),Object(i["f"])("p",Z,Object(i["u"])(e.$t("desc.cat_ele_hath_archive")),1)]),ee]),Object(i["f"])("div",te,[Object(i["f"])("div",ae,[Object(i["f"])("p",ie,Object(i["u"])(e.$t("title.cat_ele_torrent")),1),Object(i["f"])("p",ce,[Object(i["g"])(Object(i["u"])(e.$t("desc.cat_ele_torrent_s1")),1),ne,Object(i["g"])(Object(i["u"])(e.$t("desc.cat_ele_torrent_s2")),1)])]),le])]),se,Object(i["f"])("div",re,[Object(i["f"])("h1",oe,Object(i["u"])(e.$t("title.cat_customize")),1),Object(i["f"])("div",de,[Object(i["f"])("div",fe,[Object(i["f"])("p",_e,Object(i["u"])(e.$t("title.cat_ele_ehSetting")),1),Object(i["f"])("p",ue,Object(i["u"])(e.$t("desc.cat_ele_ehSetting")),1)]),me]),Object(i["f"])("div",he,[Object(i["f"])("div",be,[Object(i["f"])("p",ge,Object(i["u"])(e.$t("title.cat_ele_filter")),1),Object(i["f"])("p",pe,Object(i["u"])(e.$t("desc.cat_ele_filter")),1)]),Oe]),Object(i["f"])("div",ve,[Object(i["f"])("div",je,[Object(i["f"])("p",Ae,Object(i["u"])(e.$t("title.cat_ele_setting")),1),Object(i["f"])("p",we,Object(i["u"])(e.$t("desc.cat_ele_setting")),1)]),ye])]),Ee,Object(i["f"])("div",xe,[Object(i["f"])("h1",Se,Object(i["u"])(e.$t("title.cat_network")),1),Object(i["f"])("div",He,[Object(i["f"])("div",ke,[Object(i["f"])("p",Be,Object(i["u"])(e.$t("title.cat_ele_domainFronting")),1),Object(i["f"])("p",Pe,Object(i["u"])(e.$t("desc.cat_ele_domainFronting")),1)]),ze])])]),Object(i["f"])("section",$e,[Object(i["f"])("div",Te,[Object(i["f"])("h1",Fe,Object(i["u"])(e.$t("title.swiftui")),1),Object(i["f"])("h2",Ce,Object(i["u"])(e.$t("desc.swiftui")),1)]),Ie]),Ue],64)}Object(i["q"])();a("fb6a"),a("ac1f"),a("1276"),a("a15b"),a("caad"),a("2532");var Ne={mounted:function(){this.setImage(),this.setNavBarVisibility(),window.addEventListener("scroll",this.setNavBarVisibility),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",this.setImage)},unmounted:function(){window.removeEventListener("scroll",this.setNavBarVisibility),window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",this.setImage)},methods:{getUserLang:function(){return navigator.language||navigator.userLanguage},isDarkModeOn:function(){return window.matchMedia("(prefers-color-scheme: dark)").matches},capitalize:function(e){return e[0].toUpperCase()+e.slice(1)},setNavBarVisibility:function(){var e=window.pageYOffset,t=document.getElementsByTagName("nav")[0];e>screen.height/2?(t.classList.add("nav-visible"),t.classList.remove("nav-hidden")):(t.classList.add("nav-hidden"),t.classList.remove("nav-visible"))},setImage:function(){var e=this,t="./img/",a=t+"appicon/",i=t+"screenshot/",c=this.getUserLang(),n="EN";"de"==c.split("-")[0]?n="DE":"ko"==c.split("-")[0]?n="KO":"ja"==c.split("-")[0]?n="JA":"zh-CN"==c?n="CHS":"zh"==c.split("-")[0]&&(n="CHT");var l=this.isDarkModeOn()?"Dark":"Light",s=["appicon","home","home-ipad","slideMenu","detail","comment","archive","torrent","ehSetting","filter","setting","domainFronting"];s.forEach((function(t){var c="img-"+t,s="appicon-466",r=[e.capitalize(t),n,l].join("_"),o=[e.capitalize(t.split("-")[0]),n,l,"iPad"].join("_");window.Modernizr.on("webp",(function(e){var t=1==e?".webp":".png";c.includes("appicon")?document.getElementById(c).src=a+s+t:c.includes("ipad")?document.getElementById(c).src=i+o+t:document.getElementById(c).src=i+r+t}))}))}}};a("4a4d"),a("8f64");Ne.render=De,Ne.__scopeId="data-v-9487e0cc";var Qe=Ne,Me=(a("ba8c"),a("511b"),a("47e2")),Le=a("ecee"),Re=a("ad3d"),Je=a("eb55"),Ge=a("6381"),Ve=a("d841"),qe=a("d2c9"),We={en:{title:{swiftui:"Built with SwiftUI & Combine",cat_browse:"Browse",cat_retrieve:"Retrieve",cat_customize:"Customize",cat_network:"Network",cat_ele_category:"Category",cat_ele_detail:"Detail",cat_ele_comment:"Comment",cat_ele_hath_archive:"Hath Archive",cat_ele_torrent:"Torrent",cat_ele_ehSetting:"E-Hentai Setting",cat_ele_filter:"Filter",cat_ele_setting:"Setting",cat_ele_domainFronting:"Bypass SNI Filtering"},desc:{app:"An unofficial E-Hentai app for iOS.",system:"Requires iOS / iPadOS 16.0 or later.",swiftui:"Smooth, elegant, powerful.",cat_ele_category:"EhPanda supports almost every E-Hentai categories. Download feature is not available at present though.",cat_ele_detail:"Help you know more about this gallery and find more associated contents.",cat_ele_comment:"You can join the discussion by posting / editing a comment, or giving a reaction to it.",cat_ele_hath_archive:"Happen to own a Hath client? Thanks for your contribution! Here's a feature for you.",cat_ele_torrent_s1:"Save your best memory,",cat_ele_torrent_s2:"once and for all.",cat_ele_ehSetting:"Handy, native, fully localized. The best way to configure your E-Hentai account on mobile devices.",cat_ele_filter:"Filter settings will be automatically applied and eventually affect the search result.",cat_ele_setting:"You can login, turn on optional features or modify the app icon, tint color here.",cat_ele_domainFronting:"Hentai contents are fantastic. We believe watching them should be a fundamental right for any adults. We noticed there are people who cannot access E-Hentai due to a limited network. Hey, we here to help, turn it on and EhPanda will handle everything."}},de:{title:{swiftui:"Mit SwiftUI & Combine erstellt",cat_browse:"Finde was du willst",cat_retrieve:"Herunterladen",cat_customize:"Anpassbar",cat_network:"Network",cat_ele_category:"Kategorien",cat_ele_detail:"Detaillierte Beschreibungen",cat_ele_comment:"Kommentiere",cat_ele_hath_archive:"Hath Archiv",cat_ele_torrent:"Torrent",cat_ele_ehSetting:"E-Hentai Setting",cat_ele_filter:"Filtern",cat_ele_setting:"Einstellungen",cat_ele_domainFronting:"Bypass SNI Filtering"},desc:{app:"Eine inoffizielle E-Hentai app für iOS.",system:"Erfordert iOS / iPadOS 16.0 oder neuer.",swiftui:"Einfach, Elegant, Mächtig.",cat_ele_category:"EhPanda unterstützt fast alle E-Hentai Kategorien.",cat_ele_detail:"helfen dir, mehr über Galerien zu erfahren und ähnliche zu finden",cat_ele_comment:"Nimm an der Diskussion teil, indem du Kommentare verfasst oder bearbeitest und auf andere reagierst",cat_ele_hath_archive:"Hast du einen Hath client? Danke für deine Unterstützung, diese Funktion ist für dich",cat_ele_torrent_s1:"Speichere deine besten Erinnerungen,",cat_ele_torrent_s2:"ein für alle Mal.",cat_ele_ehSetting:"Handy, native, fully localized. The best way to configure your E-Hentai account on mobile devices.",cat_ele_filter:"Filter-Einstellungen werden automatisch angewendet und helfen dir genau das zu finden nach dem du suchst.",cat_ele_setting:"Hier kannst du dich einloggen und die App an deinen Geschmack anpassen",cat_ele_domainFronting:"Hentai contents are fantastic. We believe watching them should be a fundamental right for any adults. We noticed there are people who cannot access E-Hentai due to a limited network. Hey, we here to help, turn it on and EhPanda will handle everything."}},ko:{title:{swiftui:"SwiftUI & Combine 으로 프로래밍",cat_browse:"열람",cat_retrieve:"획득",cat_customize:"나의 설정",cat_network:"네트워크",cat_ele_category:"카테고리",cat_ele_detail:"상세정보",cat_ele_comment:"평가",cat_ele_hath_archive:"Hath 분류",cat_ele_torrent:"토렌트",cat_ele_ehSetting:"E-Hentai 설정",cat_ele_filter:"옵션",cat_ele_setting:"설정",cat_ele_domainFronting:"SNI차단 우회"},desc:{app:"iOS의 비공식 E-Hentai 에플리케이션",system:"iOS / iPadOS 16.0 이상",swiftui:"Smooth, elegant, powerful.",cat_ele_category:"EhPanda가 거의 모두 E-Hentai의 카테고리에 가능합니다. 다로운드 기능 지금까지 제공하지 못 합니다.",cat_ele_detail:"이 갤러리를 알아보기와 유사한 내용을 찾아보기에 도움을 제공해드립니다.",cat_ele_comment:"댓글 남기기, 편집, 그리고 소통을 통해서 Hentai들의 활동을 참가합시다.",cat_ele_hath_archive:"Hath클라이언트 있습니까? E-Hentai에 대한 지지를 감사합니다! 이 것은 당신을 위해 준비한 기능입니다.",cat_ele_torrent_s1:"가장 좋은 기억을",cat_ele_torrent_s2:"영원히 간직하세요.",cat_ele_ehSetting:"편리, 네이티브, 완전 로컬라이제이션. 모바일 장치에서 E-Hentai 계정을 구성하는 가장 좋은 방법입니다.",cat_ele_filter:"옵션 설정이 자동으로 적용하여, 검색 결과에 영향을 미칩니다.",cat_ele_setting:"여기서 로그인이나 가능한 기능을 선택하고 주제색과 아니콘 수정할 수 있니다.",cat_ele_domainFronting:"Hentai의 내용물은 최고입니다. 우리는 그들을 읽는 것이 모든 어른들에게 기본권이 되어야 한다고 믿습니다. 제한된 통신망으로 인하여 E-Hentai에 접속할 수 없는 사람들이 있다는 것을 알게 되었습니다. 하지만, 우리는 도와주러 왔잖아요! 애플 켜면 EhPanda가 다 알아서 할 겁니다."}},ja:{title:{swiftui:"SwiftUI & Combine で構築",cat_browse:"閲覧",cat_retrieve:"取得",cat_customize:"カスタマイズ",cat_network:"ネットワーク",cat_ele_category:"カテゴリー",cat_ele_detail:"詳細",cat_ele_comment:"コメント",cat_ele_hath_archive:"Hath アーカイブ",cat_ele_torrent:"トレント",cat_ele_ehSetting:"E-Hentai 設定",cat_ele_filter:"フィルター",cat_ele_setting:"設定",cat_ele_domainFronting:"SNI フィルタリング回避"},desc:{app:"iOS の非公式 E-Hentai アプリ",system:"iOS・iPadOS 16.0 以上であることが必要です。",swiftui:"素早く、優雅で、パワフル。",cat_ele_category:"EhPanda は、ほとんどの E-Hentai カテゴリーを対応しています。ダウンロード機能はまだです。",cat_ele_detail:"特定のギャラリーについての情報やその関連コンテンツを探すには、この機能がお力添えになるでしょう。",cat_ele_comment:"コメントを書いたり編集したり、またはそれらに反応したりして、紳士同士で話し合いましょう。",cat_ele_hath_archive:"Hath クライエントお持ちですか？ご貢献ありがとうございます！より快適に Hath できるための機能を差し上げます。",cat_ele_torrent_s1:"最高の思い出を、",cat_ele_torrent_s2:"いつまでも。",cat_ele_ehSetting:"使いやすい、ネイティブ、地域化済み。モバイルデバイスでこの上ない E-Hentai 設定ツールです。",cat_ele_filter:"フィルター設定は自動的に有効化し、検索結果に影響を与えるように作られています。",cat_ele_setting:"ログイン、機能の有効化、アプリアイコンやテーマの色の変更は、ここでできます。",cat_ele_domainFronting:"ポルノは素晴らしいものです。それを閲覧することを大人なら誰でもあるべき、基本的な権利だと考えています。しかし、ネットワークが制限され、E-Hentai にアクセス不可になっている人はたくさんいます。でも、もう大丈夫ですよ、この機能をオンにして、あとは任せてください。"}},zh:{title:{swiftui:"以 SwiftUI & Combine 構築",cat_browse:"瀏覽",cat_retrieve:"獲取",cat_customize:"自訂",cat_network:"網路",cat_ele_category:"分類",cat_ele_detail:"詳情",cat_ele_comment:"評論",cat_ele_hath_archive:"Hath 封存",cat_ele_torrent:"種子",cat_ele_ehSetting:"E-Hentai 設定",cat_ele_filter:"篩選器",cat_ele_setting:"設定",cat_ele_domainFronting:"繞過 SNI 阻斷"},desc:{app:"iOS 的非官方 E-Hentai 應用程式",system:"須使用 iOS / iPadOS 16.0 或以上。",swiftui:"流暢、優雅、強大。",cat_ele_category:"EhPanda 幾乎支援所有 E-Hentai 分類類型。目前尚未支援下載功能。",cat_ele_detail:"幫助你瞭解這個畫廊、搜尋更多相似內容。",cat_ele_comment:"通過發佈、編輯和回覆評論，參與紳士們的討論吧。",cat_ele_hath_archive:"碰巧有一台 Hath 客戶端嗎？感謝你對 E-Hentai 的貢獻！這是專為你準備的功能。",cat_ele_torrent_s1:"種子恆久遠，",cat_ele_torrent_s2:"一顆永流傳。",cat_ele_ehSetting:"易用、原生、完整本地化。移動設備上設定 E-Hentai 帳戶的最佳方式。",cat_ele_filter:"設定篩選器後將會自動生效並影響搜尋結果。",cat_ele_setting:"你可以在這裡登入、啓用自訂功能、修改 App 圖示或主題色。",cat_ele_domainFronting:"本子是很棒的東西。我們認為瀏覽它們應當是每個成年人的基本權利。但同時我們也留意到許多人網路受到限制無法訪問到 E-Hentai。於是我們就來幫忙了，啟用這個功能，剩下的事情交給 EhPanda 吧。"}},"zh-CN":{title:{swiftui:"以 SwiftUI & Combine 构筑",cat_browse:"浏览",cat_retrieve:"获取",cat_customize:"自定义",cat_network:"网络",cat_ele_category:"分类",cat_ele_detail:"详情",cat_ele_comment:"评论",cat_ele_hath_archive:"Hath 归档",cat_ele_torrent:"种子",cat_ele_ehSetting:"E-Hentai 设置",cat_ele_filter:"筛选器",cat_ele_setting:"设置",cat_ele_domainFronting:"绕过 SNI 阻断"},desc:{app:"iOS 的非官方 E-Hentai 应用程序",system:"要求iOS / iPadOS 16.0 或以上。",swiftui:"流畅、优雅、强大。",cat_ele_category:"EhPanda 对 E-Hentai 几乎所有的分类提供了支持。下载功能目前尚未实装。",cat_ele_detail:"帮助你了解这个画廊、查找更多相似内容。",cat_ele_comment:"通过发布、编辑和回复评论，参与绅士们的讨论吧。",cat_ele_hath_archive:"碰巧有一台 Hath 客户端吗？感谢你对 E-Hentai 的贡献！这是专为你准备的功能。",cat_ele_torrent_s1:"种子恒久远，",cat_ele_torrent_s2:"一颗永流传。",cat_ele_ehSetting:"易用、原生、完整本地化。移动设备上配置 E-Hentai 帐户的最佳方式。",cat_ele_filter:"筛选器设置将被自动生效，并对搜索结果产生影响。",cat_ele_setting:"你可以在这里登录、启用可选功能、修改 App 图标或主题色。",cat_ele_domainFronting:"本子是很棒的东西。我们认为浏览它们应当是每个成年人的基本权利。但同时我们也留意到许多人网络受到限制无法访问到 E-Hentai。于是我们就来帮忙了，启用这个功能，剩下的事情交给 EhPanda 吧。"}}},Ke=Object(Me["a"])({locale:navigator.language,fallbackLocale:"en",messages:We});Le["c"].add(Je["faGithub"]),Le["c"].add(Ge["faDiscord"]),Le["c"].add(Ve["faTelegram"]),Le["c"].add(qe["faEnvelope"]),Object(i["d"])(Qe).use(Ke).component("fa-icon",Re["a"]).mount("#app")},"8f64":function(e,t,a){"use strict";a("362b")},ba8c:function(e,t,a){},cd15:function(e,t,a){}});
//# sourceMappingURL=app.7d69ba47.js.map
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};t[r].call(o.exports,o,o.exports,n);o.l=!0;return o.exports}n.m=t;n.c=e;n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})};n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});Object.defineProperty(t,"__esModule",{value:!0})};n.t=function(t,e){1&e&&(t=n(t));if(8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);n.r(r);Object.defineProperty(r,"default",{enumerable:!0,value:t});if(2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r};n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};n.d(e,"a",e);return e};n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};n.p="https://video.unrulymedia.com/native/";n(n.s=3)}([function(t,e,n){var r,o,c;o=[e,t],void 0!==(c="function"==typeof(r=function(t,e){"use strict";var n={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function r(t){try{delete window[t]}catch(e){window[t]=void 0}}function o(t){var e=document.getElementById(t);e&&document.getElementsByTagName("head")[0].removeChild(e)}e.exports=function(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],c=t,u=e.timeout||n.timeout,i=e.jsonpCallback||n.jsonpCallback,a=void 0;return new Promise(function(n,s){var d=e.jsonpCallbackFunction||"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random()),l=i+"_"+d;window[d]=function(t){n({ok:!0,json:function(){return Promise.resolve(t)}});a&&clearTimeout(a);o(l);r(d)};c+=-1===c.indexOf("?")?"?":"&";var m=document.createElement("script");m.setAttribute("src",""+c+i+"="+d);e.charset&&m.setAttribute("charset",e.charset);m.id=l;document.getElementsByTagName("head")[0].appendChild(m);a=setTimeout(function(){s(new Error("JSONP request to "+t+" timed out"));r(d);o(l);window[d]=function(){r(d)}},u);m.onerror=function(){s(new Error("JSONP request to "+t+" failed"));r(d);o(l);a&&clearTimeout(a)}})}})?r.apply(e,o):r)&&(t.exports=c)},function(t,e,n){var r=n(2);t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})));o.forEach(function(e){r(t,e,n[e])})}return t}},function(t,e){t.exports=function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),c=n(0),u=n.n(c),i=function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:window).fetch("https://targeting.unrulymedia.com/audience",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"},body:"tj=".concat(function(t){return encodeURIComponent(JSON.stringify({Lotame:t.Profile}))}(t)),mode:"cors",credentials:"include"}).then(function(t){return t.json()})},a=function(){return Promise.resolve().then(function(){return u()("https://ad.crwdcntrl.net/5/c=5328/pe=y/callback=lotameBeacon",{jsonpCallbackFunction:"lotameBeacon",timeout:3e4}).then(function(t){return t.json()})}).then(function(t){return i(t)}).then(function(t){return function(t){var e=document.createElement("img");e.src="".concat("https://stats3.unrulymedia.com/audience/blank.gif","?td=").concat(encodeURIComponent(t.tc),"&cb=").concat(Date.now());return e}(t)})},s=function(){return function(t,e){var n=document.createElement("iframe");n.setAttribute("id",t);n.setAttribute("src",e);n.setAttribute("style","display:none !important;");n.setAttribute("frameborder","0");n.setAttribute("scrolling","no");document.head.appendChild(n);return Promise.resolve()}("lotameBcp","https://bcp.crwdcntrl.net/5/c=5327/pv=y/rt=ifr")};function d(t){return t.json()}function l(t,e){if(0===Object.keys(e).length)return t;var n=Object.keys(e).map(function(t){return"".concat(t,"=").concat(encodeURIComponent(e[t]))}).join("&");return"".concat(t).concat(t.indexOf("?")>=0?"&":"?").concat(n)}function m(t){var e=l("https://usermatch.targeting.unrulymedia.com/usermatch/all/checkp",t);return u()(e,{jsonpCallback:"callback",jsonpCallbackFunction:"checkpCallback",timeout:3e4})}var p=function(t){var e=t.fetchState;return(void 0===e?m:e)(t.gdprConsentData).then(d).catch(function(){return{}})},f={adobe:{url:"https://sync-tm.everesttech.net/upi/pid/1cMuUcwh?redir={unrulyx_match_enpoint}%3F",addConsent:!0,token:"${TM_USER_ID}"},appnexus:{url:"https://secure.adnxs.com/getuid?{unrulyx_match_enpoint}"},casale:{url:"https://ssum-sec.casalemedia.com/usermatch?s=182257&cb={unrulyx_match_enpoint}",token:!1,addConsent:!0},iponweb:{url:"https://x.bidswitch.net/sync?ssp=unrulyx",addConsent:!0},tradedesk:{url:"https://match.adsrvr.org/track/cmf/generic?ttd_pid=unruly&ttd_tpi=1",addConsent:!0},pulsepoint:{url:"https://bh.contextweb.com/bh/rtset?pid=560138&ev=1&daaqp=1&rurl={unrulyx_match_enpoint}",token:"%%VGUID%%",addConsent:!0},avid:{url:"https://ipw.metadsp.co.uk/sync?ssp=common&caller=unrulyx",token:!1,addConsent:!0},mediamath:{url:"https://sync.mathtag.com/sync/img?mt_exid=74&redir={unrulyx_match_enpoint}",token:"[MM_UUID]",addConsent:!0},rubicon:{url:"https://secure-assets.rubiconproject.com/utils/xapi/multi-sync.html?p=unruly&endpoint=us-east",addConsent:!0},loopme:{url:"https://csync.loopme.me/?redirect={unrulyx_match_enpoint}",token:"{device_id}",addConsent:!0},adotmob:{url:"https://sync.adotmob.com/cookie/unruly?r={unrulyx_match_enpoint}",token:"{amob_user_id}"},oath:{url:"https://pr-bh.ybp.yahoo.com/sync/unruly/",addConsent:!0},stackadapt:{url:"https://sync.srv.stackadapt.com/sync?nid=41",addConsent:!0},google:{url:"https://cm.g.doubleclick.net/pixel?google_nid=unruly_dbm&google_cm&google_sc",isPixel:!0,addConsent:!0},quantcast:{url:"https://cms.quantserve.com/pixel/p-QcHdy7VcGLKJK.gif?idmatch=0",isPixel:!0,addConsent:!0},scaleout:{url:"https://tg.socdm.com/aux/idsync?proto=unrulyx",isPixel:!0,addConsent:!0},beeswax:{url:"https://match.prod.bidr.io/cookie-sync/unr",addConsent:!0},crimtan:{url:"https://cm.ctnsnet.com/int/cm?exc=23&redir={unrulyx_match_enpoint}",addConsent:!0,token:"[user_id]"},tremor:{url:"https://sync.1rx.io/usersync2/unruly",addConsent:!0}},h=["iponweb","rubicon"],y=function(t){return(0,t.getUsermatchState)({gdprConsentData:t.gdprConsentData}).then(function(t){if(t&&!0===t.noSyncing)return{unmatchedPartners:[],audienceSync:!(!t||!t.audienceSync)&&t.audienceSync};if(t&&t.synced){return{unmatchedPartners:Object.keys(t.synced).filter(function(e){return!1===t.synced[e]}).concat(h).reduce(function(t,e){t.indexOf(e)<0&&t.push(e);return t},[]),audienceSync:t.audienceSync}}return{unmatchedPartners:[],audienceSync:!1}})};var b=function(t){return function(t){var e=t.queryParams,n=t.getUsermatchState,r=t.getUnmatchedPartners,o=function(t){var e={};t.gdpr&&(e.gdpr=t.gdpr);t.gdpr_consent&&(e.gdpr_consent=t.gdpr_consent);t.siteId&&(e.siteId=t.siteId);return e}(e);return r({getUsermatchState:n,gdprConsentData:o}).then(function(t){return Object.assign({},t,{queryParams:e,gdprConsentData:o})})}({queryParams:t,getUsermatchState:p,getUnmatchedPartners:y})};function v(t,e,n,r){var o=e.createElement(t);o.setAttribute("src",n);o.setAttribute("id",r);o.setAttribute("style","display:none !important");e.body.appendChild(o)}var g=function(t){return t?"".concat(t):""};function _(t,e){var n=function(t){return t.hasOwnProperty("token")?t.token:"$UID"}(t);return"https://usermatch.targeting.unrulymedia.com/usermatch/".concat(e,"/").concat(g(n))}var x=function(t){var e=t.partnerToUsermatch,n=t.consent,r=t.allPartners,o=void 0===r?f:r,c=t.injectIframe,u=void 0===c?function(t,e,n){v("iframe",t,e,n)}.bind(void 0,document):c,i=t.injectPixel,a=void 0===i?function(t,e,n){v("img",t,e,n)}.bind(void 0,document):i,s=t.getMatchEndpoint,d=void 0===s?_:s,m=o[e];if(m){var p=function(t,e){return function(t){return t.url}(t).replace("{unrulyx_match_enpoint}",encodeURIComponent(e))}(m,d(m,e));p=function(t,e,n){return t.addConsent?l(n,e):n}(m,n,p);m.isPixel?a(p,e):u(p,e)}},P=function(t){if("1132571"===t)return["rubicon"];return["1101210","1086475","1101209","1100588","inarticle-with-excluded-partners"].indexOf(t)<0?[]:["oath","loopme"]};var C=["inarticle-audience-sync-disabled-test","1075984","1080887","1080888","1080889","1080890","1080891","1080892","1080893","1080899","1080900","1080901","1080902","1080903","1080904","1081134","1081731","1093181","1093180","1093365","1093373","1093368","1093367","1093370","1093369","1093366","1093374","1093375","1093372","1100234","1100235","1100236","1100237","1100238","1100239","1100240","1100241","1080988","1080990","1080992","1080994","1100678","1100679","1100680","1100681","1100682","1100683","1100697","1080989"],k=function(t){return Promise.resolve().then(function(){return t.audienceSync&&(e=t.queryParams,C.every(function(t){return t!==e.siteId}))?Promise.resolve(t.queryParams):Promise.reject(new Error("audienceSync not enabled"));var e}).then(function(){return Promise.all([s(),a()])},function(){})},w=function(t){var e,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Promise.reject((e=t,n=o()({},r,{service:"third-party-iframes"}),Object.keys(n).reduce(function(t,e){t[e]=t[e]||n[e];return t},e)))};!function(t){if(window.fetch)return t();var e=document.createElement("script");e.addEventListener("load",function(){t()});e.setAttribute("src","https://".concat("video.unrulymedia.com","/").concat("native","/native-polyfill_").concat("v1.0.1609-0-g2e763e5",".js"));document.head.appendChild(e)}(function(){return Promise.resolve().then(function(){return window.location.search.substr(1).split("&").reduce(function(t,e){var n=e.split("=");t[n[0]]=n[1];return t},{})}).then(function(t){return b(t)}).then(function(t){return Promise.all([k(t),function(t){var e=P(t.queryParams.siteId);t.unmatchedPartners.filter(function(t){return e.indexOf(t)<0}).forEach(function(e){return x({partnerToUsermatch:e,consent:t.gdprConsentData})})}(t)]).then(function(){},function(e){return w(e,o()({type:"tpi_error"},t.queryParams))})})})}]);
//# sourceMappingURL=https://test.corp.unrulymedia.com/native/sourcemaps/third-party-iframes/third-party-iframes-7accfee516edf9a1d871.js.map
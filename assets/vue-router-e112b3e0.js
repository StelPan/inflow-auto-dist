import{a5 as gt,a6 as Y,b as N,r as Ve,a7 as q,w as ze,n as vt,d as We,I as Fe,a8 as fe,a as yt,a9 as Et,$ as Qe}from"./_plugin-vue_export-helper-4e0f1051.js";import{s as wt}from"./Cookies-c25692b0.js";/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const B=typeof window!="undefined";function Rt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const P=Object.assign;function de(e,t){const n={};for(const r in t){const a=t[r];n[r]=T(a)?a.map(e):e(a)}return n}const X=()=>{},T=Array.isArray;function b(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const _t=/\/$/,bt=e=>e.replace(_t,"");function he(e,t,n="/"){let r,a={},l="",d="";const h=t.indexOf("#");let u=t.indexOf("?");return h<u&&h>=0&&(u=-1),u>-1&&(r=t.slice(0,u),l=t.slice(u+1,h>-1?h:t.length),a=e(l)),h>-1&&(r=r||t.slice(0,h),d=t.slice(h,t.length)),r=St(r!=null?r:t,n),{fullPath:r+(l&&"?")+l+d,path:r,query:a,hash:d}}function kt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function $e(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ae(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&U(t.matched[r],n.matched[a])&&Ye(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function U(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ye(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Pt(e[n],t[n]))return!1;return!0}function Pt(e,t){return T(e)?xe(e,t):T(t)?xe(t,e):e===t}function xe(e,t){return T(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function St(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return b(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,l,d;for(l=0;l<r.length;l++)if(d=r[l],d!==".")if(d==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(l-(l===r.length?1:0)).join("/")}var Z;(function(e){e.pop="pop",e.push="push"})(Z||(Z={}));var J;(function(e){e.back="back",e.forward="forward",e.unknown=""})(J||(J={}));function Ct(e){if(!e)if(B){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),bt(e)}const $t=/^[^#]+#/;function At(e,t){return e.replace($t,"#")+t}function xt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const re=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ot(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!r||!document.getElementById(e.el.slice(1))))try{const l=document.querySelector(e.el);if(r&&l){b(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch(l){b(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a){b(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=xt(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Oe(e,t){return(history.state?history.state.position-t:-1)+e}const me=new Map;function It(e,t){me.set(e,t)}function Tt(e){const t=me.get(e);return me.delete(e),t}let Nt=()=>location.protocol+"//"+location.host;function Xe(e,t){const{pathname:n,search:r,hash:a}=t,l=e.indexOf("#");if(l>-1){let h=a.includes(e.slice(l))?e.slice(l).length:1,u=a.slice(h);return u[0]!=="/"&&(u="/"+u),$e(u,"")}return $e(n,e)+r+a}function Mt(e,t,n,r){let a=[],l=[],d=null;const h=({state:c})=>{const m=Xe(e,location),y=n.value,A=t.value;let S=0;if(c){if(n.value=m,t.value=c,d&&d===y){d=null;return}S=A?c.position-A.position:0}else r(m);a.forEach(E=>{E(n.value,y,{delta:S,type:Z.pop,direction:S?S>0?J.forward:J.back:J.unknown})})};function u(){d=n.value}function f(c){a.push(c);const m=()=>{const y=a.indexOf(c);y>-1&&a.splice(y,1)};return l.push(m),m}function o(){const{history:c}=window;c.state&&c.replaceState(P({},c.state,{scroll:re()}),"")}function i(){for(const c of l)c();l=[],window.removeEventListener("popstate",h),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",h),window.addEventListener("beforeunload",o),{pauseListeners:u,listen:f,destroy:i}}function Ie(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?re():null}}function jt(e){const{history:t,location:n}=window,r={value:Xe(e,n)},a={value:t.state};a.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(u,f,o){const i=e.indexOf("#"),c=i>-1?(n.host&&document.querySelector("base")?e:e.slice(i))+u:Nt()+e+u;try{t[o?"replaceState":"pushState"](f,"",c),a.value=f}catch(m){b("Error with push/replace State",m),n[o?"replace":"assign"](c)}}function d(u,f){const o=P({},t.state,Ie(a.value.back,u,a.value.forward,!0),f,{position:a.value.position});l(u,o,!0),r.value=u}function h(u,f){const o=P({},a.value,t.state,{forward:u,scroll:re()});t.state||b(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),l(o.current,o,!0);const i=P({},Ie(r.value,u,null),{position:o.position+1},f);l(u,i,!1),r.value=u}return{location:r,state:a,push:h,replace:d}}function Hn(e){e=Ct(e);const t=jt(e),n=Mt(e,t.state,t.location,t.replace);function r(l,d=!0){d||n.pauseListeners(),history.go(l)}const a=P({location:"",base:e,go:r,createHref:At.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Bt(e){return typeof e=="string"||e&&typeof e=="object"}function Je(e){return typeof e=="string"||typeof e=="symbol"}const D={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ze=Symbol("navigation failure");var Te;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Te||(Te={}));const Dt={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${Ut(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function V(e,t){return P(new Error(Dt[e](t)),{type:e,[Ze]:!0},t)}function j(e,t){return e instanceof Error&&Ze in e&&(t==null||!!(e.type&t))}const Lt=["params","query","hash"];function Ut(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of Lt)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const Ne="[^/]+?",Ht={sensitive:!1,strict:!1,start:!0,end:!0},Kt=/[.+*?^${}()[\]/\\]/g;function qt(e,t){const n=P({},Ht,t),r=[];let a=n.start?"^":"";const l=[];for(const f of e){const o=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let i=0;i<f.length;i++){const c=f[i];let m=40+(n.sensitive?.25:0);if(c.type===0)i||(a+="/"),a+=c.value.replace(Kt,"\\$&"),m+=40;else if(c.type===1){const{value:y,repeatable:A,optional:S,regexp:E}=c;l.push({name:y,repeatable:A,optional:S});const R=E||Ne;if(R!==Ne){m+=10;try{new RegExp(`(${R})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${y}" (${R}): `+I.message)}}let $=A?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;i||($=S&&f.length<2?`(?:/${$})`:"/"+$),S&&($+="?"),a+=$,m+=20,S&&(m+=-8),A&&(m+=-20),R===".*"&&(m+=-50)}o.push(m)}r.push(o)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const d=new RegExp(a,n.sensitive?"":"i");function h(f){const o=f.match(d),i={};if(!o)return null;for(let c=1;c<o.length;c++){const m=o[c]||"",y=l[c-1];i[y.name]=m&&y.repeatable?m.split("/"):m}return i}function u(f){let o="",i=!1;for(const c of e){(!i||!o.endsWith("/"))&&(o+="/"),i=!1;for(const m of c)if(m.type===0)o+=m.value;else if(m.type===1){const{value:y,repeatable:A,optional:S}=m,E=y in f?f[y]:"";if(T(E)&&!A)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const R=T(E)?E.join("/"):E;if(!R)if(S)c.length<2&&(o.endsWith("/")?o=o.slice(0,-1):i=!0);else throw new Error(`Missing required param "${y}"`);o+=R}}return o||"/"}return{re:d,score:r,keys:l,parse:h,stringify:u}}function Gt(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Vt(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const l=Gt(r[n],a[n]);if(l)return l;n++}if(Math.abs(a.length-r.length)===1){if(Me(r))return 1;if(Me(a))return-1}return a.length-r.length}function Me(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const zt={type:0,value:""},Wt=/[a-zA-Z0-9_]/;function Ft(e){if(!e)return[[]];if(e==="/")return[[zt]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(m){throw new Error(`ERR (${n})/"${f}": ${m}`)}let n=0,r=n;const a=[];let l;function d(){l&&a.push(l),l=[]}let h=0,u,f="",o="";function i(){f&&(n===0?l.push({type:0,value:f}):n===1||n===2||n===3?(l.length>1&&(u==="*"||u==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:f,regexp:o,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):t("Invalid state to consume buffer"),f="")}function c(){f+=u}for(;h<e.length;){if(u=e[h++],u==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:u==="/"?(f&&i(),d()):u===":"?(i(),n=1):c();break;case 4:c(),n=r;break;case 1:u==="("?n=2:Wt.test(u)?c():(i(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&h--);break;case 2:u===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+u:n=3:o+=u;break;case 3:i(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&h--,o="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),i(),d(),a}function Qt(e,t,n){const r=qt(Ft(e.path),n);{const l=new Set;for(const d of r.keys)l.has(d.name)&&b(`Found duplicated params with name "${d.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),l.add(d.name)}const a=P(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Yt(e,t){const n=[],r=new Map;t=De({strict:!1,end:!0,sensitive:!1},t);function a(o){return r.get(o)}function l(o,i,c){const m=!c,y=Xt(o);tn(y,i),y.aliasOf=c&&c.record;const A=De(t,o),S=[y];if("alias"in o){const $=typeof o.alias=="string"?[o.alias]:o.alias;for(const I of $)S.push(P({},y,{components:c?c.record.components:y.components,path:I,aliasOf:c?c.record:y}))}let E,R;for(const $ of S){const{path:I}=$;if(i&&I[0]!=="/"){const H=i.record.path,M=H[H.length-1]==="/"?"":"/";$.path=i.record.path+(I&&M+I)}if($.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(E=Qt($,i,A),i&&I[0]==="/"&&nn(E,i),c?(c.alias.push(E),en(c,E)):(R=R||E,R!==E&&R.alias.push(E),m&&o.name&&!Be(E)&&d(o.name)),y.children){const H=y.children;for(let M=0;M<H.length;M++)l(H[M],E,c&&c.children[M])}c=c||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&u(E)}return R?()=>{d(R)}:X}function d(o){if(Je(o)){const i=r.get(o);i&&(r.delete(o),n.splice(n.indexOf(i),1),i.children.forEach(d),i.alias.forEach(d))}else{const i=n.indexOf(o);i>-1&&(n.splice(i,1),o.record.name&&r.delete(o.record.name),o.children.forEach(d),o.alias.forEach(d))}}function h(){return n}function u(o){let i=0;for(;i<n.length&&Vt(o,n[i])>=0&&(o.record.path!==n[i].record.path||!et(o,n[i]));)i++;n.splice(i,0,o),o.record.name&&!Be(o)&&r.set(o.record.name,o)}function f(o,i){let c,m={},y,A;if("name"in o&&o.name){if(c=r.get(o.name),!c)throw V(1,{location:o});{const R=Object.keys(o.params||{}).filter($=>!c.keys.find(I=>I.name===$));R.length&&b(`Discarded invalid param(s) "${R.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}A=c.record.name,m=P(je(i.params,c.keys.filter(R=>!R.optional).map(R=>R.name)),o.params&&je(o.params,c.keys.map(R=>R.name))),y=c.stringify(m)}else if("path"in o)y=o.path,y.startsWith("/")||b(`The Matcher cannot resolve relative paths but received "${y}". Unless you directly called \`matcher.resolve("${y}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),c=n.find(R=>R.re.test(y)),c&&(m=c.parse(y),A=c.record.name);else{if(c=i.name?r.get(i.name):n.find(R=>R.re.test(i.path)),!c)throw V(1,{location:o,currentLocation:i});A=c.record.name,m=P({},i.params,o.params),y=c.stringify(m)}const S=[];let E=c;for(;E;)S.unshift(E.record),E=E.parent;return{name:A,path:y,params:m,matched:S,meta:Zt(S)}}return e.forEach(o=>l(o)),{addRoute:l,resolve:f,removeRoute:d,getRoutes:h,getRecordMatcher:a}}function je(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Xt(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Jt(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Jt(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Be(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Zt(e){return e.reduce((t,n)=>P(t,n.meta),{})}function De(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ge(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function en(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(ge.bind(null,n)))return b(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(ge.bind(null,n)))return b(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function tn(e,t){t&&t.record.name&&!e.name&&!e.path&&b(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function nn(e,t){for(const n of t.keys)if(!e.keys.find(ge.bind(null,n)))return b(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function et(e,t){return t.children.some(n=>n===e||et(e,n))}const tt=/#/g,rn=/&/g,on=/\//g,an=/=/g,sn=/\?/g,nt=/\+/g,cn=/%5B/g,ln=/%5D/g,rt=/%5E/g,un=/%60/g,ot=/%7B/g,fn=/%7C/g,at=/%7D/g,dn=/%20/g;function we(e){return encodeURI(""+e).replace(fn,"|").replace(cn,"[").replace(ln,"]")}function hn(e){return we(e).replace(ot,"{").replace(at,"}").replace(rt,"^")}function ve(e){return we(e).replace(nt,"%2B").replace(dn,"+").replace(tt,"%23").replace(rn,"%26").replace(un,"`").replace(ot,"{").replace(at,"}").replace(rt,"^")}function pn(e){return ve(e).replace(an,"%3D")}function mn(e){return we(e).replace(tt,"%23").replace(sn,"%3F")}function gn(e){return e==null?"":mn(e).replace(on,"%2F")}function ee(e){try{return decodeURIComponent(""+e)}catch(t){b(`Error decoding "${e}". Using original value`)}return""+e}function vn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const l=r[a].replace(nt," "),d=l.indexOf("="),h=ee(d<0?l:l.slice(0,d)),u=d<0?null:ee(l.slice(d+1));if(h in t){let f=t[h];T(f)||(f=t[h]=[f]),f.push(u)}else t[h]=u}return t}function Le(e){let t="";for(let n in e){const r=e[n];if(n=pn(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(T(r)?r.map(l=>l&&ve(l)):[r&&ve(r)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function yn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=T(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const En=Symbol("router view location matched"),Ue=Symbol("router view depth"),oe=Symbol("router"),Re=Symbol("route location"),ye=Symbol("router view location");function F(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function L(e,t,n,r,a){const l=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((d,h)=>{const u=i=>{i===!1?h(V(4,{from:n,to:t})):i instanceof Error?h(i):Bt(i)?h(V(2,{from:t,to:i})):(l&&r.enterCallbacks[a]===l&&typeof i=="function"&&l.push(i),d())},f=e.call(r&&r.instances[a],t,n,wn(u,t,n));let o=Promise.resolve(f);if(e.length<3&&(o=o.then(u)),e.length>2){const i=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof f=="object"&&"then"in f)o=o.then(c=>u._called?c:(b(i),Promise.reject(new Error("Invalid navigation guard"))));else if(f!==void 0&&!u._called){b(i),h(new Error("Invalid navigation guard"));return}}o.catch(i=>h(i))})}function wn(e,t,n){let r=0;return function(){r++===1&&b(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,r===1&&e.apply(null,arguments)}}function pe(e,t,n,r){const a=[];for(const l of e){!l.components&&!l.children.length&&b(`Record with path "${l.path}" is either missing a "component(s)" or "children" property.`);for(const d in l.components){let h=l.components[d];{if(!h||typeof h!="object"&&typeof h!="function")throw b(`Component "${d}" in record with path "${l.path}" is not a valid component. Received "${String(h)}".`),new Error("Invalid route component");if("then"in h){b(`Component "${d}" in record with path "${l.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const u=h;h=()=>u}else h.__asyncLoader&&!h.__warnedDefineAsync&&(h.__warnedDefineAsync=!0,b(`Component "${d}" in record with path "${l.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!l.instances[d]))if(Rn(h)){const f=(h.__vccOpts||h)[t];f&&a.push(L(f,n,r,l,d))}else{let u=h();"catch"in u||(b(`Component "${d}" in record with path "${l.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),u=Promise.resolve(u)),a.push(()=>u.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${l.path}"`));const o=Rt(f)?f.default:f;l.components[d]=o;const c=(o.__vccOpts||o)[t];return c&&L(c,n,r,l,d)()}))}}}return a}function Rn(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=q(oe),n=q(Re),r=N(()=>t.resolve(Y(e.to))),a=N(()=>{const{matched:u}=r.value,{length:f}=u,o=u[f-1],i=n.matched;if(!o||!i.length)return-1;const c=i.findIndex(U.bind(null,o));if(c>-1)return c;const m=Ke(u[f-2]);return f>1&&Ke(o)===m&&i[i.length-1].path!==m?i.findIndex(U.bind(null,u[f-2])):c}),l=N(()=>a.value>-1&&Pn(n.params,r.value.params)),d=N(()=>a.value>-1&&a.value===n.matched.length-1&&Ye(n.params,r.value.params));function h(u={}){return kn(u)?t[Y(e.replace)?"replace":"push"](Y(e.to)).catch(X):Promise.resolve()}if(B){const u=Qe();if(u){const f={route:r.value,isActive:l.value,isExactActive:d.value};u.__vrl_devtools=u.__vrl_devtools||[],u.__vrl_devtools.push(f),Et(()=>{f.route=r.value,f.isActive=l.value,f.isExactActive=d.value},{flush:"post"})}}return{route:r,href:N(()=>r.value.href),isActive:l,isExactActive:d,navigate:h}}const _n=We({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const n=Ve(He(e)),{options:r}=q(oe),a=N(()=>({[qe(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[qe(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:Fe("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},l)}}}),bn=_n;function kn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Pn(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!T(a)||a.length!==r.length||r.some((l,d)=>l!==a[d]))return!1}return!0}function Ke(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const qe=(e,t,n)=>e!=null?e:t!=null?t:n,Sn=We({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){$n();const r=q(ye),a=N(()=>e.route||r.value),l=q(Ue,0),d=N(()=>{let f=Y(l);const{matched:o}=a.value;let i;for(;(i=o[f])&&!i.components;)f++;return f}),h=N(()=>a.value.matched[d.value]);fe(Ue,N(()=>d.value+1)),fe(En,h),fe(ye,a);const u=yt();return ze(()=>[u.value,h.value,e.name],([f,o,i],[c,m,y])=>{o&&(o.instances[i]=f,m&&m!==o&&f&&f===c&&(o.leaveGuards.size||(o.leaveGuards=m.leaveGuards),o.updateGuards.size||(o.updateGuards=m.updateGuards))),f&&o&&(!m||!U(o,m)||!c)&&(o.enterCallbacks[i]||[]).forEach(A=>A(f))},{flush:"post"}),()=>{const f=a.value,o=e.name,i=h.value,c=i&&i.components[o];if(!c)return Ge(n.default,{Component:c,route:f});const m=i.props[o],y=m?m===!0?f.params:typeof m=="function"?m(f):m:null,S=Fe(c,P({},y,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(i.instances[o]=null)},ref:u}));if(B&&S.ref){const E={depth:d.value,name:i.name,path:i.path,meta:i.meta};(T(S.ref)?S.ref.map($=>$.i):[S.ref.i]).forEach($=>{$.__vrv_devtools=E})}return Ge(n.default,{Component:S,route:f})||S}}});function Ge(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Cn=Sn;function $n(){const e=Qe(),t=e.parent&&e.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const n=t==="KeepAlive"?"keep-alive":"transition";b(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function Q(e,t){const n=P({},e,{matched:e.matched.map(r=>Bn(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function ne(e){return{_custom:{display:e}}}let An=0;function xn(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const r=An++;wt({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},a=>{typeof a.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),a.on.inspectComponent((o,i)=>{o.instanceData&&o.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Q(t.currentRoute.value,"Current Route")})}),a.on.visitComponentTree(({treeNode:o,componentInstance:i})=>{if(i.__vrv_devtools){const c=i.__vrv_devtools;o.tags.push({label:(c.name?`${c.name.toString()}: `:"")+c.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:st})}T(i.__vrl_devtools)&&(i.__devtoolsApi=a,i.__vrl_devtools.forEach(c=>{let m=lt,y="";c.isExactActive?(m=ct,y="This is exactly active"):c.isActive&&(m=it,y="This link is active"),o.tags.push({label:c.route.path,textColor:0,tooltip:y,backgroundColor:m})}))}),ze(t.currentRoute,()=>{u(),a.notifyComponentUpdate(),a.sendInspectorTree(h),a.sendInspectorState(h)});const l="router:navigations:"+r;a.addTimelineLayer({id:l,label:`Router${r?" "+r:""} Navigations`,color:4237508}),t.onError((o,i)=>{a.addTimelineEvent({layerId:l,event:{title:"Error during Navigation",subtitle:i.fullPath,logType:"error",time:a.now(),data:{error:o},groupId:i.meta.__navigationId}})});let d=0;t.beforeEach((o,i)=>{const c={guard:ne("beforeEach"),from:Q(i,"Current Location during this navigation"),to:Q(o,"Target location")};Object.defineProperty(o.meta,"__navigationId",{value:d++}),a.addTimelineEvent({layerId:l,event:{time:a.now(),title:"Start of navigation",subtitle:o.fullPath,data:c,groupId:o.meta.__navigationId}})}),t.afterEach((o,i,c)=>{const m={guard:ne("afterEach")};c?(m.failure={_custom:{type:Error,readOnly:!0,display:c?c.message:"",tooltip:"Navigation Failure",value:c}},m.status=ne("❌")):m.status=ne("✅"),m.from=Q(i,"Current Location during this navigation"),m.to=Q(o,"Target location"),a.addTimelineEvent({layerId:l,event:{title:"End of navigation",subtitle:o.fullPath,time:a.now(),data:m,logType:c?"warning":"default",groupId:o.meta.__navigationId}})});const h="router-inspector:"+r;a.addInspector({id:h,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function u(){if(!f)return;const o=f;let i=n.getRoutes().filter(c=>!c.parent);i.forEach(dt),o.filter&&(i=i.filter(c=>Ee(c,o.filter.toLowerCase()))),i.forEach(c=>ft(c,t.currentRoute.value)),o.rootNodes=i.map(ut)}let f;a.on.getInspectorTree(o=>{f=o,o.app===e&&o.inspectorId===h&&u()}),a.on.getInspectorState(o=>{if(o.app===e&&o.inspectorId===h){const c=n.getRoutes().find(m=>m.record.__vd_id===o.nodeId);c&&(o.state={options:In(c)})}}),a.sendInspectorTree(h),a.sendInspectorState(h)})}function On(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function In(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(r=>`${r.name}${On(r)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(r=>r.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const st=15485081,it=2450411,ct=8702998,Tn=2282478,lt=16486972,Nn=6710886;function ut(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:Tn}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:lt}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:st}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:ct}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:it}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:Nn});let r=n.__vd_id;return r==null&&(r=String(Mn++),n.__vd_id=r),{id:r,label:n.path,tags:t,children:e.children.map(ut)}}let Mn=0;const jn=/^\/(.*)\/([a-z]*)$/;function ft(e,t){const n=t.matched.length&&U(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(r=>U(r,e.record))),e.children.forEach(r=>ft(r,t))}function dt(e){e.__vd_match=!1,e.children.forEach(dt)}function Ee(e,t){const n=String(e.re).match(jn);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(d=>Ee(d,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const a=e.record.path.toLowerCase(),l=ee(a);return!t.startsWith("/")&&(l.includes(t)||a.includes(t))||l.startsWith(t)||a.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(d=>Ee(d,t))}function Bn(e,t){const n={};for(const r in e)t.includes(r)||(n[r]=e[r]);return n}function Kn(e){const t=Yt(e.routes,e),n=e.parseQuery||vn,r=e.stringifyQuery||Le,a=e.history;if(!a)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const l=F(),d=F(),h=F(),u=gt(D);let f=D;B&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=de.bind(null,s=>""+s),i=de.bind(null,gn),c=de.bind(null,ee);function m(s,g){let p,v;return Je(s)?(p=t.getRecordMatcher(s),v=g):v=s,t.addRoute(v,p)}function y(s){const g=t.getRecordMatcher(s);g?t.removeRoute(g):b(`Cannot remove non-existent route "${String(s)}"`)}function A(){return t.getRoutes().map(s=>s.record)}function S(s){return!!t.getRecordMatcher(s)}function E(s,g){if(g=P({},g||u.value),typeof s=="string"){const w=he(n,s,g.path),C=t.resolve({path:w.path},g),K=a.createHref(w.fullPath);return K.startsWith("//")?b(`Location "${s}" resolved to "${K}". A resolved location cannot start with multiple slashes.`):C.matched.length||b(`No match found for location with path "${s}"`),P(w,C,{params:c(C.params),hash:ee(w.hash),redirectedFrom:void 0,href:K})}let p;if("path"in s)"params"in s&&!("name"in s)&&Object.keys(s.params).length&&b(`Path "${s.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),p=P({},s,{path:he(n,s.path,g.path).path});else{const w=P({},s.params);for(const C in w)w[C]==null&&delete w[C];p=P({},s,{params:i(s.params)}),g.params=i(g.params)}const v=t.resolve(p,g),k=s.hash||"";k&&!k.startsWith("#")&&b(`A \`hash\` should always start with the character "#". Replace "${k}" with "#${k}".`),v.params=o(c(v.params));const x=kt(r,P({},s,{hash:hn(k),path:v.path})),_=a.createHref(x);return _.startsWith("//")?b(`Location "${s}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):v.matched.length||b(`No match found for location with path "${"path"in s?s.path:s}"`),P({fullPath:x,hash:k,query:r===Le?yn(s.query):s.query||{}},v,{redirectedFrom:void 0,href:_})}function R(s){return typeof s=="string"?he(n,s,u.value.path):P({},s)}function $(s,g){if(f!==s)return V(8,{from:g,to:s})}function I(s){return z(s)}function H(s){return I(P(R(s),{replace:!0}))}function M(s){const g=s.matched[s.matched.length-1];if(g&&g.redirect){const{redirect:p}=g;let v=typeof p=="function"?p(s):p;if(typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=R(v):{path:v},v.params={}),!("path"in v)&&!("name"in v))throw b(`Invalid redirect found:
${JSON.stringify(v,null,2)}
 when navigating to "${s.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return P({query:s.query,hash:s.hash,params:"path"in v?{}:s.params},v)}}function z(s,g){const p=f=E(s),v=u.value,k=s.state,x=s.force,_=s.replace===!0,w=M(p);if(w)return z(P(R(w),{state:typeof w=="object"?P({},k,w.state):k,force:x,replace:_}),g||p);const C=p;C.redirectedFrom=g;let K;return!x&&Ae(r,v,p)&&(K=V(16,{to:C,from:v}),Se(v,v,!0,!1)),(K?Promise.resolve(K):_e(C,v)).catch(O=>j(O)?j(O,2)?O:ie(O):se(O,C,v)).then(O=>{if(O){if(j(O,2))return Ae(r,E(O.to),C)&&g&&(g._count=g._count?g._count+1:1)>10?(b(`Detected an infinite redirection in a navigation guard when going from "${v.fullPath}" to "${C.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):z(P({replace:_},R(O.to),{state:typeof O.to=="object"?P({},k,O.to.state):k,force:x}),g||C)}else O=ke(C,v,!0,_,k);return be(C,v,O),O})}function ht(s,g){const p=$(s,g);return p?Promise.reject(p):Promise.resolve()}function _e(s,g){let p;const[v,k,x]=Dn(s,g);p=pe(v.reverse(),"beforeRouteLeave",s,g);for(const w of v)w.leaveGuards.forEach(C=>{p.push(L(C,s,g))});const _=ht.bind(null,s,g);return p.push(_),G(p).then(()=>{p=[];for(const w of l.list())p.push(L(w,s,g));return p.push(_),G(p)}).then(()=>{p=pe(k,"beforeRouteUpdate",s,g);for(const w of k)w.updateGuards.forEach(C=>{p.push(L(C,s,g))});return p.push(_),G(p)}).then(()=>{p=[];for(const w of s.matched)if(w.beforeEnter&&!g.matched.includes(w))if(T(w.beforeEnter))for(const C of w.beforeEnter)p.push(L(C,s,g));else p.push(L(w.beforeEnter,s,g));return p.push(_),G(p)}).then(()=>(s.matched.forEach(w=>w.enterCallbacks={}),p=pe(x,"beforeRouteEnter",s,g),p.push(_),G(p))).then(()=>{p=[];for(const w of d.list())p.push(L(w,s,g));return p.push(_),G(p)}).catch(w=>j(w,8)?w:Promise.reject(w))}function be(s,g,p){for(const v of h.list())v(s,g,p)}function ke(s,g,p,v,k){const x=$(s,g);if(x)return x;const _=g===D,w=B?history.state:{};p&&(v||_?a.replace(s.fullPath,P({scroll:_&&w&&w.scroll},k)):a.push(s.fullPath,k)),u.value=s,Se(s,g,p,_),ie()}let W;function pt(){W||(W=a.listen((s,g,p)=>{if(!Ce.listening)return;const v=E(s),k=M(v);if(k){z(P(k,{replace:!0}),v).catch(X);return}f=v;const x=u.value;B&&It(Oe(x.fullPath,p.delta),re()),_e(v,x).catch(_=>j(_,12)?_:j(_,2)?(z(_.to,v).then(w=>{j(w,20)&&!p.delta&&p.type===Z.pop&&a.go(-1,!1)}).catch(X),Promise.reject()):(p.delta&&a.go(-p.delta,!1),se(_,v,x))).then(_=>{_=_||ke(v,x,!1),_&&(p.delta&&!j(_,8)?a.go(-p.delta,!1):p.type===Z.pop&&j(_,20)&&a.go(-1,!1)),be(v,x,_)}).catch(X)}))}let ae=F(),Pe=F(),te;function se(s,g,p){ie(s);const v=Pe.list();return v.length?v.forEach(k=>k(s,g,p)):(b("uncaught error during route navigation:"),console.error(s)),Promise.reject(s)}function mt(){return te&&u.value!==D?Promise.resolve():new Promise((s,g)=>{ae.add([s,g])})}function ie(s){return te||(te=!s,pt(),ae.list().forEach(([g,p])=>s?p(s):g()),ae.reset()),s}function Se(s,g,p,v){const{scrollBehavior:k}=e;if(!B||!k)return Promise.resolve();const x=!p&&Tt(Oe(s.fullPath,0))||(v||!p)&&history.state&&history.state.scroll||null;return vt().then(()=>k(s,g,x)).then(_=>_&&Ot(_)).catch(_=>se(_,s,g))}const ce=s=>a.go(s);let le;const ue=new Set,Ce={currentRoute:u,listening:!0,addRoute:m,removeRoute:y,hasRoute:S,getRoutes:A,resolve:E,options:e,push:I,replace:H,go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:l.add,beforeResolve:d.add,afterEach:h.add,onError:Pe.add,isReady:mt,install(s){const g=this;s.component("RouterLink",bn),s.component("RouterView",Cn),s.config.globalProperties.$router=g,Object.defineProperty(s.config.globalProperties,"$route",{enumerable:!0,get:()=>Y(u)}),B&&!le&&u.value===D&&(le=!0,I(a.location).catch(k=>{b("Unexpected error when starting the router:",k)}));const p={};for(const k in D)p[k]=N(()=>u.value[k]);s.provide(oe,g),s.provide(Re,Ve(p)),s.provide(ye,u);const v=s.unmount;ue.add(s),s.unmount=function(){ue.delete(s),ue.size<1&&(f=D,W&&W(),W=null,u.value=D,le=!1,te=!1),v()},B&&xn(s,g,t)}};return Ce}function G(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Dn(e,t){const n=[],r=[],a=[],l=Math.max(t.matched.length,e.matched.length);for(let d=0;d<l;d++){const h=t.matched[d];h&&(e.matched.find(f=>U(f,h))?r.push(h):n.push(h));const u=e.matched[d];u&&(t.matched.find(f=>U(f,u))||a.push(u))}return[n,r,a]}function qn(){return q(oe)}function Gn(){return q(Re)}export{Hn as a,qn as b,Kn as c,Gn as u};

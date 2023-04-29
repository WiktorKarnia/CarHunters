(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Dc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Nc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=De(s)?zm(s):Nc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(De(t))return t;if(ye(t))return t}}const qm=/;(?![^(]*\))/g,Hm=/:([^]+)/,Km=/\/\*.*?\*\//gs;function zm(t){const e={};return t.replace(Km,"").split(qm).forEach(n=>{if(n){const s=n.split(Hm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Oc(t){let e="";if(De(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=Oc(t[n]);s&&(e+=s+" ")}else if(ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Wm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gm=Dc(Wm);function Ef(t){return!!t||t===""}const vA=t=>De(t)?t:t==null?"":G(t)||ye(t)&&(t.toString===Cf||!Y(t.toString))?JSON.stringify(t,If,2):String(t),If=(t,e)=>e&&e.__v_isRef?If(t,e.value):hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Tf(e)?{[`Set(${e.size})`]:[...e.values()]}:ye(e)&&!G(e)&&!Sf(e)?String(e):e,de={},ls=[],vt=()=>{},Qm=()=>!1,Ym=/^on[^a-z]/,po=t=>Ym.test(t),Pc=t=>t.startsWith("onUpdate:"),Xe=Object.assign,xc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Jm=Object.prototype.hasOwnProperty,se=(t,e)=>Jm.call(t,e),G=Array.isArray,hs=t=>go(t)==="[object Map]",Tf=t=>go(t)==="[object Set]",Y=t=>typeof t=="function",De=t=>typeof t=="string",Mc=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",bf=t=>ye(t)&&Y(t.then)&&Y(t.catch),Cf=Object.prototype.toString,go=t=>Cf.call(t),Xm=t=>go(t).slice(8,-1),Sf=t=>go(t)==="[object Object]",Lc=t=>De(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ii=Dc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zm=/-(\w)/g,Lt=mo(t=>t.replace(Zm,(e,n)=>n?n.toUpperCase():"")),ey=/\B([A-Z])/g,xs=mo(t=>t.replace(ey,"-$1").toLowerCase()),yo=mo(t=>t.charAt(0).toUpperCase()+t.slice(1)),aa=mo(t=>t?`on${yo(t)}`:""),dr=(t,e)=>!Object.is(t,e),Ti=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Li=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ua=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ul;const ty=()=>ul||(ul=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let gt;class ny{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function sy(t,e=gt){e&&e.active&&e.effects.push(t)}function ry(){return gt}const Uc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Af=t=>(t.w&gn)>0,Rf=t=>(t.n&gn)>0,iy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gn},oy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Af(r)&&!Rf(r)?r.delete(t):e[n++]=r,r.w&=~gn,r.n&=~gn}e.length=n}},Fa=new WeakMap;let Js=0,gn=1;const Va=30;let mt;const Ln=Symbol(""),$a=Symbol("");class Fc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,sy(this,s)}run(){if(!this.active)return this.fn();let e=mt,n=cn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=mt,mt=this,cn=!0,gn=1<<++Js,Js<=Va?iy(this):ll(this),this.fn()}finally{Js<=Va&&oy(this),gn=1<<--Js,mt=this.parent,cn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mt===this?this.deferStop=!0:this.active&&(ll(this),this.onStop&&this.onStop(),this.active=!1)}}function ll(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let cn=!0;const kf=[];function Ms(){kf.push(cn),cn=!1}function Ls(){const t=kf.pop();cn=t===void 0?!0:t}function rt(t,e,n){if(cn&&mt){let s=Fa.get(t);s||Fa.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Uc()),Df(r)}}function Df(t,e){let n=!1;Js<=Va?Rf(t)||(t.n|=gn,n=!Af(t)):n=!t.has(mt),n&&(t.add(mt),mt.deps.push(t))}function qt(t,e,n,s,r,i){const o=Fa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=Number(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?Lc(n)&&a.push(o.get("length")):(a.push(o.get(Ln)),hs(t)&&a.push(o.get($a)));break;case"delete":G(t)||(a.push(o.get(Ln)),hs(t)&&a.push(o.get($a)));break;case"set":hs(t)&&a.push(o.get(Ln));break}if(a.length===1)a[0]&&Ba(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Ba(Uc(c))}}function Ba(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&hl(s);for(const s of n)s.computed||hl(s)}function hl(t,e){(t!==mt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ay=Dc("__proto__,__v_isRef,__isVue"),Nf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mc)),cy=Vc(),uy=Vc(!1,!0),ly=Vc(!0),fl=hy();function hy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ie(this);for(let i=0,o=this.length;i<o;i++)rt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ie)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ms();const s=ie(this)[e].apply(this,n);return Ls(),s}}),t}function fy(t){const e=ie(this);return rt(e,"has",t),e.hasOwnProperty(t)}function Vc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Ry:Lf:e?Mf:xf).get(s))return s;const o=G(s);if(!t){if(o&&se(fl,r))return Reflect.get(fl,r,i);if(r==="hasOwnProperty")return fy}const a=Reflect.get(s,r,i);return(Mc(r)?Nf.has(r):ay(r))||(t||rt(s,"get",r),e)?a:He(a)?o&&Lc(r)?a:a.value:ye(a)?t?Uf(a):xr(a):a}}const dy=Of(),py=Of(!0);function Of(t=!1){return function(n,s,r,i){let o=n[s];if(ws(o)&&He(o)&&!He(r))return!1;if(!t&&(!Ui(r)&&!ws(r)&&(o=ie(o),r=ie(r)),!G(n)&&He(o)&&!He(r)))return o.value=r,!0;const a=G(n)&&Lc(s)?Number(s)<n.length:se(n,s),c=Reflect.set(n,s,r,i);return n===ie(i)&&(a?dr(r,o)&&qt(n,"set",s,r):qt(n,"add",s,r)),c}}function gy(t,e){const n=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&qt(t,"delete",e,void 0),s}function my(t,e){const n=Reflect.has(t,e);return(!Mc(e)||!Nf.has(e))&&rt(t,"has",e),n}function yy(t){return rt(t,"iterate",G(t)?"length":Ln),Reflect.ownKeys(t)}const Pf={get:cy,set:dy,deleteProperty:gy,has:my,ownKeys:yy},vy={get:ly,set(t,e){return!0},deleteProperty(t,e){return!0}},wy=Xe({},Pf,{get:uy,set:py}),$c=t=>t,vo=t=>Reflect.getPrototypeOf(t);function oi(t,e,n=!1,s=!1){t=t.__v_raw;const r=ie(t),i=ie(e);n||(e!==i&&rt(r,"get",e),rt(r,"get",i));const{has:o}=vo(r),a=s?$c:n?qc:pr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function ai(t,e=!1){const n=this.__v_raw,s=ie(n),r=ie(t);return e||(t!==r&&rt(s,"has",t),rt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ci(t,e=!1){return t=t.__v_raw,!e&&rt(ie(t),"iterate",Ln),Reflect.get(t,"size",t)}function dl(t){t=ie(t);const e=ie(this);return vo(e).has.call(e,t)||(e.add(t),qt(e,"add",t,t)),this}function pl(t,e){e=ie(e);const n=ie(this),{has:s,get:r}=vo(n);let i=s.call(n,t);i||(t=ie(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?dr(e,o)&&qt(n,"set",t,e):qt(n,"add",t,e),this}function gl(t){const e=ie(this),{has:n,get:s}=vo(e);let r=n.call(e,t);r||(t=ie(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&qt(e,"delete",t,void 0),i}function ml(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&qt(t,"clear",void 0,void 0),n}function ui(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ie(o),c=e?$c:t?qc:pr;return!t&&rt(a,"iterate",Ln),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function li(t,e,n){return function(...s){const r=this.__v_raw,i=ie(r),o=hs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?$c:e?qc:pr;return!e&&rt(i,"iterate",c?$a:Ln),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function Xt(t){return function(...e){return t==="delete"?!1:this}}function _y(){const t={get(i){return oi(this,i)},get size(){return ci(this)},has:ai,add:dl,set:pl,delete:gl,clear:ml,forEach:ui(!1,!1)},e={get(i){return oi(this,i,!1,!0)},get size(){return ci(this)},has:ai,add:dl,set:pl,delete:gl,clear:ml,forEach:ui(!1,!0)},n={get(i){return oi(this,i,!0)},get size(){return ci(this,!0)},has(i){return ai.call(this,i,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:ui(!0,!1)},s={get(i){return oi(this,i,!0,!0)},get size(){return ci(this,!0)},has(i){return ai.call(this,i,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:ui(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=li(i,!1,!1),n[i]=li(i,!0,!1),e[i]=li(i,!1,!0),s[i]=li(i,!0,!0)}),[t,n,e,s]}const[Ey,Iy,Ty,by]=_y();function Bc(t,e){const n=e?t?by:Ty:t?Iy:Ey;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const Cy={get:Bc(!1,!1)},Sy={get:Bc(!1,!0)},Ay={get:Bc(!0,!1)},xf=new WeakMap,Mf=new WeakMap,Lf=new WeakMap,Ry=new WeakMap;function ky(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dy(t){return t.__v_skip||!Object.isExtensible(t)?0:ky(Xm(t))}function xr(t){return ws(t)?t:jc(t,!1,Pf,Cy,xf)}function Ny(t){return jc(t,!1,wy,Sy,Mf)}function Uf(t){return jc(t,!0,vy,Ay,Lf)}function jc(t,e,n,s,r){if(!ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Dy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function fs(t){return ws(t)?fs(t.__v_raw):!!(t&&t.__v_isReactive)}function ws(t){return!!(t&&t.__v_isReadonly)}function Ui(t){return!!(t&&t.__v_isShallow)}function Ff(t){return fs(t)||ws(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function Vf(t){return Li(t,"__v_skip",!0),t}const pr=t=>ye(t)?xr(t):t,qc=t=>ye(t)?Uf(t):t;function $f(t){cn&&mt&&(t=ie(t),Df(t.dep||(t.dep=Uc())))}function Bf(t,e){t=ie(t);const n=t.dep;n&&Ba(n)}function He(t){return!!(t&&t.__v_isRef===!0)}function jf(t){return qf(t,!1)}function Oy(t){return qf(t,!0)}function qf(t,e){return He(t)?t:new Py(t,e)}class Py{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:pr(e)}get value(){return $f(this),this._value}set value(e){const n=this.__v_isShallow||Ui(e)||ws(e);e=n?e:ie(e),dr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:pr(e),Bf(this))}}function ds(t){return He(t)?t.value:t}const xy={get:(t,e,n)=>ds(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return He(r)&&!He(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Hf(t){return fs(t)?t:new Proxy(t,xy)}var Kf;class My{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Kf]=!1,this._dirty=!0,this.effect=new Fc(e,()=>{this._dirty||(this._dirty=!0,Bf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ie(this);return $f(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Kf="__v_isReadonly";function Ly(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=vt):(s=t.get,r=t.set),new My(s,r,i||!r,n)}function un(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){wo(i,e,n)}return r}function wt(t,e,n,s){if(Y(t)){const i=un(t,e,n,s);return i&&bf(i)&&i.catch(o=>{wo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(wt(t[i],e,n,s));return r}function wo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){un(c,null,10,[t,o,a]);return}}Uy(t,n,r,s)}function Uy(t,e,n,s=!0){console.error(t)}let gr=!1,ja=!1;const je=[];let Dt=0;const ps=[];let Vt=null,kn=0;const zf=Promise.resolve();let Hc=null;function Wf(t){const e=Hc||zf;return t?e.then(this?t.bind(this):t):e}function Fy(t){let e=Dt+1,n=je.length;for(;e<n;){const s=e+n>>>1;mr(je[s])<t?e=s+1:n=s}return e}function Kc(t){(!je.length||!je.includes(t,gr&&t.allowRecurse?Dt+1:Dt))&&(t.id==null?je.push(t):je.splice(Fy(t.id),0,t),Gf())}function Gf(){!gr&&!ja&&(ja=!0,Hc=zf.then(Yf))}function Vy(t){const e=je.indexOf(t);e>Dt&&je.splice(e,1)}function $y(t){G(t)?ps.push(...t):(!Vt||!Vt.includes(t,t.allowRecurse?kn+1:kn))&&ps.push(t),Gf()}function yl(t,e=gr?Dt+1:0){for(;e<je.length;e++){const n=je[e];n&&n.pre&&(je.splice(e,1),e--,n())}}function Qf(t){if(ps.length){const e=[...new Set(ps)];if(ps.length=0,Vt){Vt.push(...e);return}for(Vt=e,Vt.sort((n,s)=>mr(n)-mr(s)),kn=0;kn<Vt.length;kn++)Vt[kn]();Vt=null,kn=0}}const mr=t=>t.id==null?1/0:t.id,By=(t,e)=>{const n=mr(t)-mr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Yf(t){ja=!1,gr=!0,je.sort(By);const e=vt;try{for(Dt=0;Dt<je.length;Dt++){const n=je[Dt];n&&n.active!==!1&&un(n,null,14)}}finally{Dt=0,je.length=0,Qf(),gr=!1,Hc=null,(je.length||ps.length)&&Yf()}}function jy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||de;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[l]||de;d&&(r=n.map(g=>De(g)?g.trim():g)),h&&(r=n.map(Ua))}let a,c=s[a=aa(e)]||s[a=aa(Lt(e))];!c&&i&&(c=s[a=aa(xs(e))]),c&&wt(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,wt(u,t,6,r)}}function Jf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=u=>{const l=Jf(u,e,!0);l&&(a=!0,Xe(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ye(t)&&s.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):Xe(o,i),ye(t)&&s.set(t,o),o)}function _o(t,e){return!t||!po(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,xs(e))||se(t,e))}let lt=null,Xf=null;function Fi(t){const e=lt;return lt=t,Xf=t&&t.type.__scopeId||null,e}function ss(t,e=lt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Sl(-1);const i=Fi(e);let o;try{o=t(...r)}finally{Fi(i),s._d&&Sl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ca(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:g,ctx:v,inheritAttrs:E}=t;let k,R;const F=Fi(t);try{if(n.shapeFlag&4){const J=r||s;k=kt(l.call(J,J,h,i,g,d,v)),R=c}else{const J=e;k=kt(J.length>1?J(i,{attrs:c,slots:a,emit:u}):J(i,null)),R=e.props?c:qy(c)}}catch(J){rr.length=0,wo(J,t,1),k=Ce(Bn)}let P=k;if(R&&E!==!1){const J=Object.keys(R),{shapeFlag:fe}=P;J.length&&fe&7&&(o&&J.some(Pc)&&(R=Hy(R,o)),P=_s(P,R))}return n.dirs&&(P=_s(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),k=P,Fi(F),k}const qy=t=>{let e;for(const n in t)(n==="class"||n==="style"||po(n))&&((e||(e={}))[n]=t[n]);return e},Hy=(t,e)=>{const n={};for(const s in t)(!Pc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Ky(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?vl(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==s[d]&&!_o(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?vl(s,o,u):!0:!!o;return!1}function vl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!_o(n,i))return!0}return!1}function zy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Wy=t=>t.__isSuspense;function Gy(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):$y(t)}function bi(t,e){if(Se){let n=Se.provides;const s=Se.parent&&Se.parent.provides;s===n&&(n=Se.provides=Object.create(s)),n[t]=e}}function Ot(t,e,n=!1){const s=Se||lt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s.proxy):e}}const hi={};function Ci(t,e,n){return Zf(t,e,n)}function Zf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=de){const a=ry()===(Se==null?void 0:Se.scope)?Se:null;let c,u=!1,l=!1;if(He(t)?(c=()=>t.value,u=Ui(t)):fs(t)?(c=()=>t,s=!0):G(t)?(l=!0,u=t.some(P=>fs(P)||Ui(P)),c=()=>t.map(P=>{if(He(P))return P.value;if(fs(P))return Nn(P);if(Y(P))return un(P,a,2)})):Y(t)?e?c=()=>un(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),wt(t,a,3,[d])}:c=vt,e&&s){const P=c;c=()=>Nn(P())}let h,d=P=>{h=R.onStop=()=>{un(P,a,4)}},g;if(vr)if(d=vt,e?n&&wt(e,a,3,[c(),l?[]:void 0,d]):c(),r==="sync"){const P=jv();g=P.__watcherHandles||(P.__watcherHandles=[])}else return vt;let v=l?new Array(t.length).fill(hi):hi;const E=()=>{if(R.active)if(e){const P=R.run();(s||u||(l?P.some((J,fe)=>dr(J,v[fe])):dr(P,v)))&&(h&&h(),wt(e,a,3,[P,v===hi?void 0:l&&v[0]===hi?[]:v,d]),v=P)}else R.run()};E.allowRecurse=!!e;let k;r==="sync"?k=E:r==="post"?k=()=>tt(E,a&&a.suspense):(E.pre=!0,a&&(E.id=a.uid),k=()=>Kc(E));const R=new Fc(c,k);e?n?E():v=R.run():r==="post"?tt(R.run.bind(R),a&&a.suspense):R.run();const F=()=>{R.stop(),a&&a.scope&&xc(a.scope.effects,R)};return g&&g.push(F),F}function Qy(t,e,n){const s=this.proxy,r=De(t)?t.includes(".")?ed(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Se;Es(this);const a=Zf(r,i.bind(s),n);return o?Es(o):Un(),a}function ed(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Nn(t,e){if(!ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),He(t))Nn(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)Nn(t[n],e);else if(Tf(t)||hs(t))t.forEach(n=>{Nn(n,e)});else if(Sf(t))for(const n in t)Nn(t[n],e);return t}function td(t){return Y(t)?{setup:t,name:t.name}:t}const Si=t=>!!t.type.__asyncLoader,nd=t=>t.type.__isKeepAlive;function Yy(t,e){sd(t,"a",e)}function Jy(t,e){sd(t,"da",e)}function sd(t,e,n=Se){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Eo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)nd(r.parent.vnode)&&Xy(s,e,n,r),r=r.parent}}function Xy(t,e,n,s){const r=Eo(e,t,s,!0);id(()=>{xc(s[e],r)},n)}function Eo(t,e,n=Se,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ms(),Es(n);const a=wt(e,n,t,o);return Un(),Ls(),a});return s?r.unshift(i):r.push(i),i}}const Qt=t=>(e,n=Se)=>(!vr||t==="sp")&&Eo(t,(...s)=>e(...s),n),Zy=Qt("bm"),rd=Qt("m"),ev=Qt("bu"),tv=Qt("u"),nv=Qt("bum"),id=Qt("um"),sv=Qt("sp"),rv=Qt("rtg"),iv=Qt("rtc");function ov(t,e=Se){Eo("ec",t,e)}function wA(t,e){const n=lt;if(n===null)return t;const s=bo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=de]=e[i];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&Nn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Cn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Ms(),wt(c,n,8,[t.el,a,t,e]),Ls())}}const od="components";function ad(t,e){return cv(od,t,!0,e)||t}const av=Symbol();function cv(t,e,n=!0,s=!1){const r=lt||Se;if(r){const i=r.type;if(t===od){const a=Vv(i,!1);if(a&&(a===e||a===Lt(e)||a===yo(Lt(e))))return i}const o=wl(r[t]||i[t],e)||wl(r.appContext[t],e);return!o&&s?i:o}}function wl(t,e){return t&&(t[e]||t[Lt(e)]||t[yo(Lt(e))])}function _A(t,e,n,s){let r;const i=n&&n[s];if(G(t)||De(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ye(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const qa=t=>t?wd(t)?bo(t)||t.proxy:qa(t.parent):null,sr=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qa(t.parent),$root:t=>qa(t.root),$emit:t=>t.emit,$options:t=>zc(t),$forceUpdate:t=>t.f||(t.f=()=>Kc(t.update)),$nextTick:t=>t.n||(t.n=Wf.bind(t.proxy)),$watch:t=>Qy.bind(t)}),ua=(t,e)=>t!==de&&!t.__isScriptSetup&&se(t,e),uv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ua(s,e))return o[e]=1,s[e];if(r!==de&&se(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&se(u,e))return o[e]=3,i[e];if(n!==de&&se(n,e))return o[e]=4,n[e];Ha&&(o[e]=0)}}const l=sr[e];let h,d;if(l)return e==="$attrs"&&rt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==de&&se(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,se(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ua(r,e)?(r[e]=n,!0):s!==de&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==de&&se(t,o)||ua(e,o)||(a=i[0])&&se(a,o)||se(s,o)||se(sr,o)||se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ha=!0;function lv(t){const e=zc(t),n=t.proxy,s=t.ctx;Ha=!1,e.beforeCreate&&_l(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:g,updated:v,activated:E,deactivated:k,beforeDestroy:R,beforeUnmount:F,destroyed:P,unmounted:J,render:fe,renderTracked:_e,renderTriggered:Qe,errorCaptured:Ze,serverPrefetch:Tt,expose:ct,inheritAttrs:Jt,components:bt,directives:Zn,filters:Tn}=e;if(u&&hv(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const ce=o[le];Y(ce)&&(s[le]=ce.bind(n))}if(r){const le=r.call(n,n);ye(le)&&(t.data=xr(le))}if(Ha=!0,i)for(const le in i){const ce=i[le],ft=Y(ce)?ce.bind(n,n):Y(ce.get)?ce.get.bind(n,n):vt,bn=!Y(ce)&&Y(ce.set)?ce.set.bind(n):vt,dt=ut({get:ft,set:bn});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>dt.value,set:et=>dt.value=et})}if(a)for(const le in a)cd(a[le],s,n,le);if(c){const le=Y(c)?c.call(n):c;Reflect.ownKeys(le).forEach(ce=>{bi(ce,le[ce])})}l&&_l(l,t,"c");function Ee(le,ce){G(ce)?ce.forEach(ft=>le(ft.bind(n))):ce&&le(ce.bind(n))}if(Ee(Zy,h),Ee(rd,d),Ee(ev,g),Ee(tv,v),Ee(Yy,E),Ee(Jy,k),Ee(ov,Ze),Ee(iv,_e),Ee(rv,Qe),Ee(nv,F),Ee(id,J),Ee(sv,Tt),G(ct))if(ct.length){const le=t.exposed||(t.exposed={});ct.forEach(ce=>{Object.defineProperty(le,ce,{get:()=>n[ce],set:ft=>n[ce]=ft})})}else t.exposed||(t.exposed={});fe&&t.render===vt&&(t.render=fe),Jt!=null&&(t.inheritAttrs=Jt),bt&&(t.components=bt),Zn&&(t.directives=Zn)}function hv(t,e,n=vt,s=!1){G(t)&&(t=Ka(t));for(const r in t){const i=t[r];let o;ye(i)?"default"in i?o=Ot(i.from||r,i.default,!0):o=Ot(i.from||r):o=Ot(i),He(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function _l(t,e,n){wt(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function cd(t,e,n,s){const r=s.includes(".")?ed(n,s):()=>n[s];if(De(t)){const i=e[t];Y(i)&&Ci(r,i)}else if(Y(t))Ci(r,t.bind(n));else if(ye(t))if(G(t))t.forEach(i=>cd(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&Ci(r,i,t)}}function zc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>Vi(c,u,o,!0)),Vi(c,e,o)),ye(e)&&i.set(e,c),c}function Vi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Vi(t,i,n,!0),r&&r.forEach(o=>Vi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=fv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const fv={data:El,props:An,emits:An,methods:An,computed:An,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:An,directives:An,watch:pv,provide:El,inject:dv};function El(t,e){return e?t?function(){return Xe(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function dv(t,e){return An(Ka(t),Ka(e))}function Ka(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ye(t,e){return t?[...new Set([].concat(t,e))]:e}function An(t,e){return t?Xe(Xe(Object.create(null),t),e):e}function pv(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const s in e)n[s]=Ye(t[s],e[s]);return n}function gv(t,e,n,s=!1){const r={},i={};Li(i,To,1),t.propsDefaults=Object.create(null),ud(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Ny(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function mv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ie(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(_o(t.emitsOptions,d))continue;const g=e[d];if(c)if(se(i,d))g!==i[d]&&(i[d]=g,u=!0);else{const v=Lt(d);r[v]=za(c,a,v,g,t,!1)}else g!==i[d]&&(i[d]=g,u=!0)}}}else{ud(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!se(e,h)&&((l=xs(h))===h||!se(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=za(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!se(e,h))&&(delete i[h],u=!0)}u&&qt(t,"set","$attrs")}function ud(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ii(c))continue;const u=e[c];let l;r&&se(r,l=Lt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:_o(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=ie(n),u=a||de;for(let l=0;l<i.length;l++){const h=i[l];n[h]=za(r,c,h,u[h],t,!se(u,h))}}return o}function za(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Y(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Es(r),s=u[n]=c.call(null,e),Un())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===xs(n))&&(s=!0))}return s}function ld(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const l=h=>{c=!0;const[d,g]=ld(h,e,!0);Xe(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return ye(t)&&s.set(t,ls),ls;if(G(i))for(let l=0;l<i.length;l++){const h=Lt(i[l]);Il(h)&&(o[h]=de)}else if(i)for(const l in i){const h=Lt(l);if(Il(h)){const d=i[l],g=o[h]=G(d)||Y(d)?{type:d}:Object.assign({},d);if(g){const v=Cl(Boolean,g.type),E=Cl(String,g.type);g[0]=v>-1,g[1]=E<0||v<E,(v>-1||se(g,"default"))&&a.push(h)}}}const u=[o,a];return ye(t)&&s.set(t,u),u}function Il(t){return t[0]!=="$"}function Tl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function bl(t,e){return Tl(t)===Tl(e)}function Cl(t,e){return G(e)?e.findIndex(n=>bl(n,t)):Y(e)&&bl(e,t)?0:-1}const hd=t=>t[0]==="_"||t==="$stable",Wc=t=>G(t)?t.map(kt):[kt(t)],yv=(t,e,n)=>{if(e._n)return e;const s=ss((...r)=>Wc(e(...r)),n);return s._c=!1,s},fd=(t,e,n)=>{const s=t._ctx;for(const r in t){if(hd(r))continue;const i=t[r];if(Y(i))e[r]=yv(r,i,s);else if(i!=null){const o=Wc(i);e[r]=()=>o}}},dd=(t,e)=>{const n=Wc(e);t.slots.default=()=>n},vv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),Li(e,"_",n)):fd(e,t.slots={})}else t.slots={},e&&dd(t,e);Li(t.slots,To,1)},wv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=de;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Xe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,fd(e,r)),o=e}else e&&(dd(t,e),o={default:1});if(i)for(const a in r)!hd(a)&&!(a in o)&&delete r[a]};function pd(){return{app:null,config:{isNativeTag:Qm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _v=0;function Ev(t,e){return function(s,r=null){Y(s)||(s=Object.assign({},s)),r!=null&&!ye(r)&&(r=null);const i=pd(),o=new Set;let a=!1;const c=i.app={_uid:_v++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:qv,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&Y(u.install)?(o.add(u),u.install(c,...l)):Y(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=Ce(s,r);return d.appContext=i,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,bo(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Wa(t,e,n,s,r=!1){if(G(t)){t.forEach((d,g)=>Wa(d,e&&(G(e)?e[g]:e),n,s,r));return}if(Si(s)&&!r)return;const i=s.shapeFlag&4?bo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===de?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(De(u)?(l[u]=null,se(h,u)&&(h[u]=null)):He(u)&&(u.value=null)),Y(c))un(c,a,12,[o,l]);else{const d=De(c),g=He(c);if(d||g){const v=()=>{if(t.f){const E=d?se(h,c)?h[c]:l[c]:c.value;r?G(E)&&xc(E,i):G(E)?E.includes(i)||E.push(i):d?(l[c]=[i],se(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,se(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(v.id=-1,tt(v,n)):v()}}}const tt=Gy;function Iv(t){return Tv(t)}function Tv(t,e){const n=ty();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:g=vt,insertStaticContent:v}=t,E=(f,p,m,y=null,I=null,S=null,N=!1,C=null,A=!!p.dynamicChildren)=>{if(f===p)return;f&&!Gs(f,p)&&(y=D(f),et(f,I,S,!0),f=null),p.patchFlag===-2&&(A=!1,p.dynamicChildren=null);const{type:T,ref:B,shapeFlag:M}=p;switch(T){case Io:k(f,p,m,y);break;case Bn:R(f,p,m,y);break;case la:f==null&&F(p,m,y,N);break;case Rt:bt(f,p,m,y,I,S,N,C,A);break;default:M&1?fe(f,p,m,y,I,S,N,C,A):M&6?Zn(f,p,m,y,I,S,N,C,A):(M&64||M&128)&&T.process(f,p,m,y,I,S,N,C,A,ne)}B!=null&&I&&Wa(B,f&&f.ref,S,p||f,!p)},k=(f,p,m,y)=>{if(f==null)s(p.el=a(p.children),m,y);else{const I=p.el=f.el;p.children!==f.children&&u(I,p.children)}},R=(f,p,m,y)=>{f==null?s(p.el=c(p.children||""),m,y):p.el=f.el},F=(f,p,m,y)=>{[f.el,f.anchor]=v(f.children,p,m,y,f.el,f.anchor)},P=({el:f,anchor:p},m,y)=>{let I;for(;f&&f!==p;)I=d(f),s(f,m,y),f=I;s(p,m,y)},J=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},fe=(f,p,m,y,I,S,N,C,A)=>{N=N||p.type==="svg",f==null?_e(p,m,y,I,S,N,C,A):Tt(f,p,I,S,N,C,A)},_e=(f,p,m,y,I,S,N,C)=>{let A,T;const{type:B,props:M,shapeFlag:j,transition:z,dirs:Z}=f;if(A=f.el=o(f.type,S,M&&M.is,M),j&8?l(A,f.children):j&16&&Ze(f.children,A,null,y,I,S&&B!=="foreignObject",N,C),Z&&Cn(f,null,y,"created"),Qe(A,f,f.scopeId,N,y),M){for(const ue in M)ue!=="value"&&!Ii(ue)&&i(A,ue,null,M[ue],S,f.children,y,I,O);"value"in M&&i(A,"value",null,M.value),(T=M.onVnodeBeforeMount)&&St(T,y,f)}Z&&Cn(f,null,y,"beforeMount");const he=(!I||I&&!I.pendingBranch)&&z&&!z.persisted;he&&z.beforeEnter(A),s(A,p,m),((T=M&&M.onVnodeMounted)||he||Z)&&tt(()=>{T&&St(T,y,f),he&&z.enter(A),Z&&Cn(f,null,y,"mounted")},I)},Qe=(f,p,m,y,I)=>{if(m&&g(f,m),y)for(let S=0;S<y.length;S++)g(f,y[S]);if(I){let S=I.subTree;if(p===S){const N=I.vnode;Qe(f,N,N.scopeId,N.slotScopeIds,I.parent)}}},Ze=(f,p,m,y,I,S,N,C,A=0)=>{for(let T=A;T<f.length;T++){const B=f[T]=C?tn(f[T]):kt(f[T]);E(null,B,p,m,y,I,S,N,C)}},Tt=(f,p,m,y,I,S,N)=>{const C=p.el=f.el;let{patchFlag:A,dynamicChildren:T,dirs:B}=p;A|=f.patchFlag&16;const M=f.props||de,j=p.props||de;let z;m&&Sn(m,!1),(z=j.onVnodeBeforeUpdate)&&St(z,m,p,f),B&&Cn(p,f,m,"beforeUpdate"),m&&Sn(m,!0);const Z=I&&p.type!=="foreignObject";if(T?ct(f.dynamicChildren,T,C,m,y,Z,S):N||ce(f,p,C,null,m,y,Z,S,!1),A>0){if(A&16)Jt(C,p,M,j,m,y,I);else if(A&2&&M.class!==j.class&&i(C,"class",null,j.class,I),A&4&&i(C,"style",M.style,j.style,I),A&8){const he=p.dynamicProps;for(let ue=0;ue<he.length;ue++){const Ie=he[ue],pt=M[Ie],ts=j[Ie];(ts!==pt||Ie==="value")&&i(C,Ie,pt,ts,I,f.children,m,y,O)}}A&1&&f.children!==p.children&&l(C,p.children)}else!N&&T==null&&Jt(C,p,M,j,m,y,I);((z=j.onVnodeUpdated)||B)&&tt(()=>{z&&St(z,m,p,f),B&&Cn(p,f,m,"updated")},y)},ct=(f,p,m,y,I,S,N)=>{for(let C=0;C<p.length;C++){const A=f[C],T=p[C],B=A.el&&(A.type===Rt||!Gs(A,T)||A.shapeFlag&70)?h(A.el):m;E(A,T,B,null,y,I,S,N,!0)}},Jt=(f,p,m,y,I,S,N)=>{if(m!==y){if(m!==de)for(const C in m)!Ii(C)&&!(C in y)&&i(f,C,m[C],null,N,p.children,I,S,O);for(const C in y){if(Ii(C))continue;const A=y[C],T=m[C];A!==T&&C!=="value"&&i(f,C,T,A,N,p.children,I,S,O)}"value"in y&&i(f,"value",m.value,y.value)}},bt=(f,p,m,y,I,S,N,C,A)=>{const T=p.el=f?f.el:a(""),B=p.anchor=f?f.anchor:a("");let{patchFlag:M,dynamicChildren:j,slotScopeIds:z}=p;z&&(C=C?C.concat(z):z),f==null?(s(T,m,y),s(B,m,y),Ze(p.children,m,B,I,S,N,C,A)):M>0&&M&64&&j&&f.dynamicChildren?(ct(f.dynamicChildren,j,m,I,S,N,C),(p.key!=null||I&&p===I.subTree)&&gd(f,p,!0)):ce(f,p,m,B,I,S,N,C,A)},Zn=(f,p,m,y,I,S,N,C,A)=>{p.slotScopeIds=C,f==null?p.shapeFlag&512?I.ctx.activate(p,m,y,N,A):Tn(p,m,y,I,S,N,A):zs(f,p,A)},Tn=(f,p,m,y,I,S,N)=>{const C=f.component=xv(f,y,I);if(nd(f)&&(C.ctx.renderer=ne),Mv(C),C.asyncDep){if(I&&I.registerDep(C,Ee),!f.el){const A=C.subTree=Ce(Bn);R(null,A,p,m)}return}Ee(C,f,p,m,I,S,N)},zs=(f,p,m)=>{const y=p.component=f.component;if(Ky(f,p,m))if(y.asyncDep&&!y.asyncResolved){le(y,p,m);return}else y.next=p,Vy(y.update),y.update();else p.el=f.el,y.vnode=p},Ee=(f,p,m,y,I,S,N)=>{const C=()=>{if(f.isMounted){let{next:B,bu:M,u:j,parent:z,vnode:Z}=f,he=B,ue;Sn(f,!1),B?(B.el=Z.el,le(f,B,N)):B=Z,M&&Ti(M),(ue=B.props&&B.props.onVnodeBeforeUpdate)&&St(ue,z,B,Z),Sn(f,!0);const Ie=ca(f),pt=f.subTree;f.subTree=Ie,E(pt,Ie,h(pt.el),D(pt),f,I,S),B.el=Ie.el,he===null&&zy(f,Ie.el),j&&tt(j,I),(ue=B.props&&B.props.onVnodeUpdated)&&tt(()=>St(ue,z,B,Z),I)}else{let B;const{el:M,props:j}=p,{bm:z,m:Z,parent:he}=f,ue=Si(p);if(Sn(f,!1),z&&Ti(z),!ue&&(B=j&&j.onVnodeBeforeMount)&&St(B,he,p),Sn(f,!0),M&&X){const Ie=()=>{f.subTree=ca(f),X(M,f.subTree,f,I,null)};ue?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ie()):Ie()}else{const Ie=f.subTree=ca(f);E(null,Ie,m,y,f,I,S),p.el=Ie.el}if(Z&&tt(Z,I),!ue&&(B=j&&j.onVnodeMounted)){const Ie=p;tt(()=>St(B,he,Ie),I)}(p.shapeFlag&256||he&&Si(he.vnode)&&he.vnode.shapeFlag&256)&&f.a&&tt(f.a,I),f.isMounted=!0,p=m=y=null}},A=f.effect=new Fc(C,()=>Kc(T),f.scope),T=f.update=()=>A.run();T.id=f.uid,Sn(f,!0),T()},le=(f,p,m)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,mv(f,p.props,y,m),wv(f,p.children,m),Ms(),yl(),Ls()},ce=(f,p,m,y,I,S,N,C,A=!1)=>{const T=f&&f.children,B=f?f.shapeFlag:0,M=p.children,{patchFlag:j,shapeFlag:z}=p;if(j>0){if(j&128){bn(T,M,m,y,I,S,N,C,A);return}else if(j&256){ft(T,M,m,y,I,S,N,C,A);return}}z&8?(B&16&&O(T,I,S),M!==T&&l(m,M)):B&16?z&16?bn(T,M,m,y,I,S,N,C,A):O(T,I,S,!0):(B&8&&l(m,""),z&16&&Ze(M,m,y,I,S,N,C,A))},ft=(f,p,m,y,I,S,N,C,A)=>{f=f||ls,p=p||ls;const T=f.length,B=p.length,M=Math.min(T,B);let j;for(j=0;j<M;j++){const z=p[j]=A?tn(p[j]):kt(p[j]);E(f[j],z,m,null,I,S,N,C,A)}T>B?O(f,I,S,!0,!1,M):Ze(p,m,y,I,S,N,C,A,M)},bn=(f,p,m,y,I,S,N,C,A)=>{let T=0;const B=p.length;let M=f.length-1,j=B-1;for(;T<=M&&T<=j;){const z=f[T],Z=p[T]=A?tn(p[T]):kt(p[T]);if(Gs(z,Z))E(z,Z,m,null,I,S,N,C,A);else break;T++}for(;T<=M&&T<=j;){const z=f[M],Z=p[j]=A?tn(p[j]):kt(p[j]);if(Gs(z,Z))E(z,Z,m,null,I,S,N,C,A);else break;M--,j--}if(T>M){if(T<=j){const z=j+1,Z=z<B?p[z].el:y;for(;T<=j;)E(null,p[T]=A?tn(p[T]):kt(p[T]),m,Z,I,S,N,C,A),T++}}else if(T>j)for(;T<=M;)et(f[T],I,S,!0),T++;else{const z=T,Z=T,he=new Map;for(T=Z;T<=j;T++){const it=p[T]=A?tn(p[T]):kt(p[T]);it.key!=null&&he.set(it.key,T)}let ue,Ie=0;const pt=j-Z+1;let ts=!1,ol=0;const Ws=new Array(pt);for(T=0;T<pt;T++)Ws[T]=0;for(T=z;T<=M;T++){const it=f[T];if(Ie>=pt){et(it,I,S,!0);continue}let Ct;if(it.key!=null)Ct=he.get(it.key);else for(ue=Z;ue<=j;ue++)if(Ws[ue-Z]===0&&Gs(it,p[ue])){Ct=ue;break}Ct===void 0?et(it,I,S,!0):(Ws[Ct-Z]=T+1,Ct>=ol?ol=Ct:ts=!0,E(it,p[Ct],m,null,I,S,N,C,A),Ie++)}const al=ts?bv(Ws):ls;for(ue=al.length-1,T=pt-1;T>=0;T--){const it=Z+T,Ct=p[it],cl=it+1<B?p[it+1].el:y;Ws[T]===0?E(null,Ct,m,cl,I,S,N,C,A):ts&&(ue<0||T!==al[ue]?dt(Ct,m,cl,2):ue--)}}},dt=(f,p,m,y,I=null)=>{const{el:S,type:N,transition:C,children:A,shapeFlag:T}=f;if(T&6){dt(f.component.subTree,p,m,y);return}if(T&128){f.suspense.move(p,m,y);return}if(T&64){N.move(f,p,m,ne);return}if(N===Rt){s(S,p,m);for(let M=0;M<A.length;M++)dt(A[M],p,m,y);s(f.anchor,p,m);return}if(N===la){P(f,p,m);return}if(y!==2&&T&1&&C)if(y===0)C.beforeEnter(S),s(S,p,m),tt(()=>C.enter(S),I);else{const{leave:M,delayLeave:j,afterLeave:z}=C,Z=()=>s(S,p,m),he=()=>{M(S,()=>{Z(),z&&z()})};j?j(S,Z,he):he()}else s(S,p,m)},et=(f,p,m,y=!1,I=!1)=>{const{type:S,props:N,ref:C,children:A,dynamicChildren:T,shapeFlag:B,patchFlag:M,dirs:j}=f;if(C!=null&&Wa(C,null,m,f,!0),B&256){p.ctx.deactivate(f);return}const z=B&1&&j,Z=!Si(f);let he;if(Z&&(he=N&&N.onVnodeBeforeUnmount)&&St(he,p,f),B&6)w(f.component,m,y);else{if(B&128){f.suspense.unmount(m,y);return}z&&Cn(f,null,p,"beforeUnmount"),B&64?f.type.remove(f,p,m,I,ne,y):T&&(S!==Rt||M>0&&M&64)?O(T,p,m,!1,!0):(S===Rt&&M&384||!I&&B&16)&&O(A,p,m),y&&es(f)}(Z&&(he=N&&N.onVnodeUnmounted)||z)&&tt(()=>{he&&St(he,p,f),z&&Cn(f,null,p,"unmounted")},m)},es=f=>{const{type:p,el:m,anchor:y,transition:I}=f;if(p===Rt){ii(m,y);return}if(p===la){J(f);return}const S=()=>{r(m),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:N,delayLeave:C}=I,A=()=>N(m,S);C?C(f.el,S,A):A()}else S()},ii=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},w=(f,p,m)=>{const{bum:y,scope:I,update:S,subTree:N,um:C}=f;y&&Ti(y),I.stop(),S&&(S.active=!1,et(N,f,p,m)),C&&tt(C,p),tt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},O=(f,p,m,y=!1,I=!1,S=0)=>{for(let N=S;N<f.length;N++)et(f[N],p,m,y,I)},D=f=>f.shapeFlag&6?D(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),V=(f,p,m)=>{f==null?p._vnode&&et(p._vnode,null,null,!0):E(p._vnode||null,f,p,null,null,null,m),yl(),Qf(),p._vnode=f},ne={p:E,um:et,m:dt,r:es,mt:Tn,mc:Ze,pc:ce,pbc:ct,n:D,o:t};let ve,X;return e&&([ve,X]=e(ne)),{render:V,hydrate:ve,createApp:Ev(V,ve)}}function Sn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function gd(t,e,n=!1){const s=t.children,r=e.children;if(G(s)&&G(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=tn(r[i]),a.el=o.el),n||gd(o,a)),a.type===Io&&(a.el=o.el)}}function bv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Cv=t=>t.__isTeleport,Rt=Symbol(void 0),Io=Symbol(void 0),Bn=Symbol(void 0),la=Symbol(void 0),rr=[];let yt=null;function Gc(t=!1){rr.push(yt=t?null:[])}function Sv(){rr.pop(),yt=rr[rr.length-1]||null}let yr=1;function Sl(t){yr+=t}function md(t){return t.dynamicChildren=yr>0?yt||ls:null,Sv(),yr>0&&yt&&yt.push(t),t}function yd(t,e,n,s,r,i){return md(Pe(t,e,n,s,r,i,!0))}function Av(t,e,n,s,r){return md(Ce(t,e,n,s,r,!0))}function Ga(t){return t?t.__v_isVNode===!0:!1}function Gs(t,e){return t.type===e.type&&t.key===e.key}const To="__vInternal",vd=({key:t})=>t??null,Ai=({ref:t,ref_key:e,ref_for:n})=>t!=null?De(t)||He(t)||Y(t)?{i:lt,r:t,k:e,f:!!n}:t:null;function Pe(t,e=null,n=null,s=0,r=null,i=t===Rt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&vd(e),ref:e&&Ai(e),scopeId:Xf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:lt};return a?(Qc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),yr>0&&!o&&yt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&yt.push(c),c}const Ce=Rv;function Rv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===av)&&(t=Bn),Ga(t)){const a=_s(t,e,!0);return n&&Qc(a,n),yr>0&&!i&&yt&&(a.shapeFlag&6?yt[yt.indexOf(t)]=a:yt.push(a)),a.patchFlag|=-2,a}if($v(t)&&(t=t.__vccOpts),e){e=kv(e);let{class:a,style:c}=e;a&&!De(a)&&(e.class=Oc(a)),ye(c)&&(Ff(c)&&!G(c)&&(c=Xe({},c)),e.style=Nc(c))}const o=De(t)?1:Wy(t)?128:Cv(t)?64:ye(t)?4:Y(t)?2:0;return Pe(t,e,n,s,r,o,i,!0)}function kv(t){return t?Ff(t)||To in t?Xe({},t):t:null}function _s(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Nv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&vd(a),ref:e&&e.ref?n&&r?G(r)?r.concat(Ai(e)):[r,Ai(e)]:Ai(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Rt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_s(t.ssContent),ssFallback:t.ssFallback&&_s(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function rs(t=" ",e=0){return Ce(Io,null,t,e)}function Dv(t="",e=!1){return e?(Gc(),Av(Bn,null,t)):Ce(Bn,null,t)}function kt(t){return t==null||typeof t=="boolean"?Ce(Bn):G(t)?Ce(Rt,null,t.slice()):typeof t=="object"?tn(t):Ce(Io,null,String(t))}function tn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:_s(t)}function Qc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Qc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(To in e)?e._ctx=lt:r===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),s&64?(n=16,e=[rs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Nv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Oc([e.class,s.class]));else if(r==="style")e.style=Nc([e.style,s.style]);else if(po(r)){const i=e[r],o=s[r];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function St(t,e,n,s=null){wt(t,e,7,[n,s])}const Ov=pd();let Pv=0;function xv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Ov,i={uid:Pv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ny(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ld(s,r),emitsOptions:Jf(s,r),emit:null,emitted:null,propsDefaults:de,inheritAttrs:s.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=jy.bind(null,i),t.ce&&t.ce(i),i}let Se=null;const Es=t=>{Se=t,t.scope.on()},Un=()=>{Se&&Se.scope.off(),Se=null};function wd(t){return t.vnode.shapeFlag&4}let vr=!1;function Mv(t,e=!1){vr=e;const{props:n,children:s}=t.vnode,r=wd(t);gv(t,n,r,e),vv(t,s);const i=r?Lv(t,e):void 0;return vr=!1,i}function Lv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Vf(new Proxy(t.ctx,uv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Fv(t):null;Es(t),Ms();const i=un(s,t,0,[t.props,r]);if(Ls(),Un(),bf(i)){if(i.then(Un,Un),e)return i.then(o=>{Al(t,o,e)}).catch(o=>{wo(o,t,0)});t.asyncDep=i}else Al(t,i,e)}else _d(t,e)}function Al(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)&&(t.setupState=Hf(e)),_d(t,n)}let Rl;function _d(t,e,n){const s=t.type;if(!t.render){if(!e&&Rl&&!s.render){const r=s.template||zc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=Xe(Xe({isCustomElement:i,delimiters:a},o),c);s.render=Rl(r,u)}}t.render=s.render||vt}Es(t),Ms(),lv(t),Ls(),Un()}function Uv(t){return new Proxy(t.attrs,{get(e,n){return rt(t,"get","$attrs"),e[n]}})}function Fv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Uv(t))},slots:t.slots,emit:t.emit,expose:e}}function bo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Hf(Vf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in sr)return sr[n](t)},has(e,n){return n in e||n in sr}}))}function Vv(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function $v(t){return Y(t)&&"__vccOpts"in t}const ut=(t,e)=>Ly(t,e,vr);function Ed(t,e,n){const s=arguments.length;return s===2?ye(e)&&!G(e)?Ga(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ga(n)&&(n=[n]),Ce(t,e,n))}const Bv=Symbol(""),jv=()=>Ot(Bv),qv="3.2.47",Hv="http://www.w3.org/2000/svg",Dn=typeof document<"u"?document:null,kl=Dn&&Dn.createElement("template"),Kv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Dn.createElementNS(Hv,t):Dn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Dn.createTextNode(t),createComment:t=>Dn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{kl.innerHTML=s?`<svg>${t}</svg>`:t;const a=kl.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function zv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Wv(t,e,n){const s=t.style,r=De(n);if(n&&!r){if(e&&!De(e))for(const i in e)n[i]==null&&Qa(s,i,"");for(const i in n)Qa(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Dl=/\s*!important$/;function Qa(t,e,n){if(G(n))n.forEach(s=>Qa(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Gv(t,e);Dl.test(n)?t.setProperty(xs(s),n.replace(Dl,""),"important"):t[s]=n}}const Nl=["Webkit","Moz","ms"],ha={};function Gv(t,e){const n=ha[e];if(n)return n;let s=Lt(e);if(s!=="filter"&&s in t)return ha[e]=s;s=yo(s);for(let r=0;r<Nl.length;r++){const i=Nl[r]+s;if(i in t)return ha[e]=i}return e}const Ol="http://www.w3.org/1999/xlink";function Qv(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ol,e.slice(6,e.length)):t.setAttributeNS(Ol,e,n);else{const i=Gm(e);n==null||i&&!Ef(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Yv(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ef(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function is(t,e,n,s){t.addEventListener(e,n,s)}function Jv(t,e,n,s){t.removeEventListener(e,n,s)}function Xv(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Zv(e);if(s){const u=i[e]=nw(s,r);is(t,a,u,c)}else o&&(Jv(t,a,o,c),i[e]=void 0)}}const Pl=/(?:Once|Passive|Capture)$/;function Zv(t){let e;if(Pl.test(t)){e={};let s;for(;s=t.match(Pl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xs(t.slice(2)),e]}let fa=0;const ew=Promise.resolve(),tw=()=>fa||(ew.then(()=>fa=0),fa=Date.now());function nw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;wt(sw(s,n.value),e,5,[s])};return n.value=t,n.attached=tw(),n}function sw(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const xl=/^on[a-z]/,rw=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?zv(t,s,r):e==="style"?Wv(t,n,s):po(e)?Pc(e)||Xv(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):iw(t,e,s,r))?Yv(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Qv(t,e,s,r))};function iw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&xl.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||xl.test(e)&&De(n)?!1:e in t}const Ml=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>Ti(e,n):e};function ow(t){t.target.composing=!0}function Ll(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const EA={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Ml(r);const i=s||r.props&&r.props.type==="number";is(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ua(a)),t._assign(a)}),n&&is(t,"change",()=>{t.value=t.value.trim()}),e||(is(t,"compositionstart",ow),is(t,"compositionend",Ll),is(t,"change",Ll))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Ml(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Ua(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},aw=["ctrl","shift","alt","meta"],cw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>aw.some(n=>t[`${n}Key`]&&!e.includes(n))},IA=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=cw[e[r]];if(i&&i(n,e))return}return t(n,...s)},uw=Xe({patchProp:rw},Kv);let Ul;function lw(){return Ul||(Ul=Iv(uw))}const hw=(...t)=>{const e=lw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=fw(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function fw(t){return De(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},dw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Td={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(n[l],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Id(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw new pw;const d=i<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const v=u<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gw=function(t){const e=Id(t);return Td.encodeByteArray(e,!0)},$i=function(t){return gw(t).replace(/\./g,"")},bd=function(t){try{return Td.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=()=>mw().__FIREBASE_DEFAULTS__,vw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ww=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bd(t[1]);return e&&JSON.parse(e)},Co=()=>{try{return yw()||vw()||ww()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cd=t=>{var e,n;return(n=(e=Co())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_w=t=>{const e=Cd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ew=()=>{var t;return(t=Co())===null||t===void 0?void 0:t.config},Sd=t=>{var e;return(e=Co())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[$i(JSON.stringify(n)),$i(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function TA(){var t;const e=(t=Co())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Cw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Aw(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rw(){try{return typeof indexedDB=="object"}catch{return!1}}function kw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="FirebaseError";class Yt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Dw,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mr.prototype.create)}}class Mr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Nw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Yt(r,a,s)}}function Nw(t,e){return t.replace(Ow,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ow=/\{\$([^}]+)}/g;function Pw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Fl(i)&&Fl(o)){if(!Bi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Fl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xw(t,e){const n=new Mw(t,e);return n.subscribe.bind(n)}class Mw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Lw(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=da),r.error===void 0&&(r.error=da),r.complete===void 0&&(r.complete=da);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function da(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t){return t&&t._delegate?t._delegate:t}class jn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Iw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vw(e))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rn){return this.instances.has(e)}getOptions(e=Rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Fw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Rn){return this.component?this.component.multipleInstances?e:Rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fw(t){return t===Rn?void 0:t}function Vw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Uw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Bw={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},jw=re.INFO,qw={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Hw=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=qw[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yc{constructor(e){this.name=e,this._logLevel=jw,this._logHandler=Hw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const Kw=(t,e)=>e.some(n=>t instanceof n);let Vl,$l;function zw(){return Vl||(Vl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ww(){return $l||($l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ad=new WeakMap,Ya=new WeakMap,Rd=new WeakMap,pa=new WeakMap,Jc=new WeakMap;function Gw(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ln(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ad.set(n,t)}).catch(()=>{}),Jc.set(e,t),e}function Qw(t){if(Ya.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ya.set(t,e)}let Ja={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ya.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Yw(t){Ja=t(Ja)}function Jw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ga(this),e,...n);return Rd.set(s,e.sort?e.sort():[e]),ln(s)}:Ww().includes(t)?function(...e){return t.apply(ga(this),e),ln(Ad.get(this))}:function(...e){return ln(t.apply(ga(this),e))}}function Xw(t){return typeof t=="function"?Jw(t):(t instanceof IDBTransaction&&Qw(t),Kw(t,zw())?new Proxy(t,Ja):t)}function ln(t){if(t instanceof IDBRequest)return Gw(t);if(pa.has(t))return pa.get(t);const e=Xw(t);return e!==t&&(pa.set(t,e),Jc.set(e,t)),e}const ga=t=>Jc.get(t);function Zw(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=ln(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ln(o.result),c.oldVersion,c.newVersion,ln(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const e_=["get","getKey","getAll","getAllKeys","count"],t_=["put","add","delete","clear"],ma=new Map;function Bl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ma.get(e))return ma.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=t_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||e_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return ma.set(e,i),i}Yw(t=>({...t,get:(e,n,s)=>Bl(e,n)||t.get(e,n,s),has:(e,n)=>!!Bl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(s_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function s_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xa="@firebase/app",jl="0.9.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new Yc("@firebase/app"),r_="@firebase/app-compat",i_="@firebase/analytics-compat",o_="@firebase/analytics",a_="@firebase/app-check-compat",c_="@firebase/app-check",u_="@firebase/auth",l_="@firebase/auth-compat",h_="@firebase/database",f_="@firebase/database-compat",d_="@firebase/functions",p_="@firebase/functions-compat",g_="@firebase/installations",m_="@firebase/installations-compat",y_="@firebase/messaging",v_="@firebase/messaging-compat",w_="@firebase/performance",__="@firebase/performance-compat",E_="@firebase/remote-config",I_="@firebase/remote-config-compat",T_="@firebase/storage",b_="@firebase/storage-compat",C_="@firebase/firestore",S_="@firebase/firestore-compat",A_="firebase",R_="9.20.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="[DEFAULT]",k_={[Xa]:"fire-core",[r_]:"fire-core-compat",[o_]:"fire-analytics",[i_]:"fire-analytics-compat",[c_]:"fire-app-check",[a_]:"fire-app-check-compat",[u_]:"fire-auth",[l_]:"fire-auth-compat",[h_]:"fire-rtdb",[f_]:"fire-rtdb-compat",[d_]:"fire-fn",[p_]:"fire-fn-compat",[g_]:"fire-iid",[m_]:"fire-iid-compat",[y_]:"fire-fcm",[v_]:"fire-fcm-compat",[w_]:"fire-perf",[__]:"fire-perf-compat",[E_]:"fire-rc",[I_]:"fire-rc-compat",[T_]:"fire-gcs",[b_]:"fire-gcs-compat",[C_]:"fire-fst",[S_]:"fire-fst-compat","fire-js":"fire-js",[A_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new Map,ec=new Map;function D_(t,e){try{t.container.addComponent(e)}catch(n){qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Is(t){const e=t.name;if(ec.has(e))return qn.debug(`There were multiple attempts to register component ${e}.`),!1;ec.set(e,t);for(const n of ji.values())D_(n,t);return!0}function Xc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},hn=new Mr("app","Firebase",N_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=R_;function kd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Za,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw hn.create("bad-app-name",{appName:String(r)});if(n||(n=Ew()),!n)throw hn.create("no-options");const i=ji.get(r);if(i){if(Bi(n,i.options)&&Bi(s,i.config))return i;throw hn.create("duplicate-app",{appName:r})}const o=new $w(r);for(const c of ec.values())o.addComponent(c);const a=new O_(n,s,o);return ji.set(r,a),a}function Dd(t=Za){const e=ji.get(t);if(!e&&t===Za)return kd();if(!e)throw hn.create("no-app",{appName:t});return e}function fn(t,e,n){var s;let r=(s=k_[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qn.warn(a.join(" "));return}Is(new jn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_="firebase-heartbeat-database",x_=1,wr="firebase-heartbeat-store";let ya=null;function Nd(){return ya||(ya=Zw(P_,x_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wr)}}}).catch(t=>{throw hn.create("idb-open",{originalErrorMessage:t.message})})),ya}async function M_(t){try{return(await Nd()).transaction(wr).objectStore(wr).get(Od(t))}catch(e){if(e instanceof Yt)qn.warn(e.message);else{const n=hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qn.warn(n.message)}}}async function ql(t,e){try{const s=(await Nd()).transaction(wr,"readwrite");return await s.objectStore(wr).put(e,Od(t)),s.done}catch(n){if(n instanceof Yt)qn.warn(n.message);else{const s=hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qn.warn(s.message)}}}function Od(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=1024,U_=30*24*60*60*1e3;class F_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=U_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hl(),{heartbeatsToSend:n,unsentEntries:s}=V_(this._heartbeatsCache.heartbeats),r=$i(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Hl(){return new Date().toISOString().substring(0,10)}function V_(t,e=L_){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Kl(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Kl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class $_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rw()?kw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await M_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ql(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ql(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Kl(t){return $i(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(t){Is(new jn("platform-logger",e=>new n_(e),"PRIVATE")),Is(new jn("heartbeat",e=>new F_(e),"PRIVATE")),fn(Xa,jl,t),fn(Xa,jl,"esm2017"),fn("fire-js","")}B_("");function Zc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Pd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const j_=Pd,xd=new Mr("auth","Firebase",Pd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new Yc("@firebase/auth");function q_(t,...e){qi.logLevel<=re.WARN&&qi.warn(`Auth (${Us}): ${t}`,...e)}function Ri(t,...e){qi.logLevel<=re.ERROR&&qi.error(`Auth (${Us}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,...e){throw eu(t,...e)}function Pt(t,...e){return eu(t,...e)}function Md(t,e,n){const s=Object.assign(Object.assign({},j_()),{[e]:n});return new Mr("auth","Firebase",s).create(e,{appName:t.name})}function H_(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&ht(t,"argument-error"),Md(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function eu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return xd.create(t,...e)}function q(t,e,...n){if(!t)throw eu(e,...n)}function $t(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ri(e),new Error(e)}function Ht(t,e){t||$t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function K_(){return zl()==="http:"||zl()==="https:"}function zl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(K_()||Cw()||"connection"in navigator)?navigator.onLine:!0}function W_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ht(n>e,"Short delay should be less than long delay!"),this.isMobile=bw()||Sw()}get(){return z_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t,e){Ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=new Ur(3e4,6e4);function Fs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gn(t,e,n,s,r={}){return Ud(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Lr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ld.fetch()(Fd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Ud(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},G_),e);try{const r=new Y_(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw fi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw fi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw fi(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Md(t,l,u);ht(t,l)}}catch(r){if(r instanceof Yt)throw r;ht(t,"network-request-failed",{message:String(r)})}}async function Fr(t,e,n,s,r={}){const i=await Gn(t,e,n,s,r);return"mfaPendingCredential"in i&&ht(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Fd(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?tu(t.config,r):`${t.config.apiScheme}://${r}`}class Y_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Pt(this.auth,"network-request-failed")),Q_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Pt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_(t,e){return Gn(t,"POST","/v1/accounts:delete",e)}async function X_(t,e){return Gn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Z_(t,e=!1){const n=Ne(t),s=await n.getIdToken(e),r=nu(s);q(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ir(va(r.auth_time)),issuedAtTime:ir(va(r.iat)),expirationTime:ir(va(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function va(t){return Number(t)*1e3}function nu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ri("JWT malformed, contained fewer than 3 sections"),null;try{const r=bd(n);return r?JSON.parse(r):(Ri("Failed to decode base64 JWT payload"),null)}catch(r){return Ri("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function eE(t){const e=nu(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Yt&&tE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function tE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ir(this.lastLoginAt),this.creationTime=ir(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Ts(t,X_(n,{idToken:s}));q(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?iE(i.providerUserInfo):[],a=rE(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Vd(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function sE(t){const e=Ne(t);await Hi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rE(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function iE(t){return t.map(e=>{var{providerId:n}=e,s=Zc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oE(t,e){const n=await Ud(t,{},async()=>{const s=Lr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Fd(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ld.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):eE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await oE(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new _r;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(q(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _r,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Zc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ts(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Z_(this,e)}reload(){return sE(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Hi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ts(this,J_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(u=n.createdAt)!==null&&u!==void 0?u:void 0,F=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:P,emailVerified:J,isAnonymous:fe,providerData:_e,stsTokenManager:Qe}=n;q(P&&Qe,e,"internal-error");const Ze=_r.fromJSON(this.name,Qe);q(typeof P=="string",e,"internal-error"),Zt(h,e.name),Zt(d,e.name),q(typeof J=="boolean",e,"internal-error"),q(typeof fe=="boolean",e,"internal-error"),Zt(g,e.name),Zt(v,e.name),Zt(E,e.name),Zt(k,e.name),Zt(R,e.name),Zt(F,e.name);const Tt=new Fn({uid:P,auth:e,email:d,emailVerified:J,displayName:h,isAnonymous:fe,photoURL:v,phoneNumber:g,tenantId:E,stsTokenManager:Ze,createdAt:R,lastLoginAt:F});return _e&&Array.isArray(_e)&&(Tt.providerData=_e.map(ct=>Object.assign({},ct))),k&&(Tt._redirectEventId=k),Tt}static async _fromIdTokenResponse(e,n,s=!1){const r=new _r;r.updateFromServerResponse(n);const i=new Fn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Hi(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=new Map;function Bt(t){Ht(t instanceof Function,"Expected a class definition");let e=Wl.get(t);return e?(Ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wl.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$d.type="NONE";const Gl=$d;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t,e,n){return`firebase:${t}:${e}:${n}`}class gs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ki(this.userKey,r.apiKey,i),this.fullPersistenceKey=ki("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new gs(Bt(Gl),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Bt(Gl);const o=ki(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Fn._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new gs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new gs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kd(e))return"Blackberry";if(zd(e))return"Webos";if(su(e))return"Safari";if((e.includes("chrome/")||jd(e))&&!e.includes("edge/"))return"Chrome";if(Hd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Bd(t=We()){return/firefox\//i.test(t)}function su(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jd(t=We()){return/crios\//i.test(t)}function qd(t=We()){return/iemobile/i.test(t)}function Hd(t=We()){return/android/i.test(t)}function Kd(t=We()){return/blackberry/i.test(t)}function zd(t=We()){return/webos/i.test(t)}function So(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function aE(t=We()){var e;return So(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cE(){return Aw()&&document.documentMode===10}function Wd(t=We()){return So(t)||Hd(t)||zd(t)||Kd(t)||/windows phone/i.test(t)||qd(t)}function uE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(t,e=[]){let n;switch(t){case"Browser":n=Ql(We());break;case"Worker":n=`${Ql(We())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Us}/${s}`}async function Qd(t,e){return Gn(t,"GET","/v2/recaptchaConfig",Fs(t,e))}function Yl(t){return t!==void 0&&t.enterprise!==void 0}class Yd{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Jd(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Pt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",lE().appendChild(s)})}function hE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const fE="https://www.google.com/recaptcha/enterprise.js?render=",dE="recaptcha-enterprise";class Xd{constructor(e){this.type=dE,this.auth=Qn(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Qd(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Yd(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Yl(c)?c.enterprise.ready(()=>{try{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(u=>{a(u)})}catch(u){a(u)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Yl(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Jd(fE+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ki(t,e,n,s=!1){const r=new Xd(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jl(this),this.idTokenSubscription=new Jl(this),this.beforeStateQueue=new pE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await gs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=W_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ne(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}async initializeRecaptchaConfig(){const e=await Qd(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Yd(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Xd(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bt(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await gs.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&q_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qn(t){return Ne(t)}class Jl{constructor(e){this.auth=e,this.observer=null,this.addObserver=xw(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(t,e){const n=Xc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Bi(i,e??{}))return r;ht(r,"already-initialized")}return n.initialize({options:e})}function yE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function vE(t,e,n){const s=Qn(t);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Zd(e),{host:o,port:a}=wE(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||_E()}function Zd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wE(t){const e=Zd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Xl(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Xl(o)}}}function Xl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _E(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,n){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}async function EE(t,e){return Gn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wa(t,e){return Fr(t,"POST","/v1/accounts:signInWithPassword",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IE(t,e){return Fr(t,"POST","/v1/accounts:signInWithEmailLink",Fs(t,e))}async function TE(t,e){return Fr(t,"POST","/v1/accounts:signInWithEmailLink",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends ru{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Er(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Er(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await Ki(e,s,"signInWithPassword");return wa(e,r)}else return wa(e,s).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Ki(e,s,"signInWithPassword");return wa(e,i)}else return Promise.reject(r)});case"emailLink":return IE(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return EE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return TE(e,{idToken:n,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(t,e){return Fr(t,"POST","/v1/accounts:signInWithIdp",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE="http://localhost";class Hn extends ru{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Zc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Hn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ms(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ms(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ms(e,n)}buildRequest(){const e={requestUri:bE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Lr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function SE(t){const e=Xs(Zs(t)).link,n=e?Xs(Zs(e)).deep_link_id:null,s=Xs(Zs(t)).deep_link_id;return(s?Xs(Zs(s)).link:null)||s||n||e||t}class iu{constructor(e){var n,s,r,i,o,a;const c=Xs(Zs(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=CE((r=c.mode)!==null&&r!==void 0?r:null);q(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=SE(e);try{return new iu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.providerId=Vs.PROVIDER_ID}static credential(e,n){return Er._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=iu.parseLink(n);return q(s,"argument-error"),Er._fromEmailAndCode(e,s.code,s.tenantId)}}Vs.PROVIDER_ID="password";Vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends ou{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Vr{constructor(){super("facebook.com")}static credential(e){return Hn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";sn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Vr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return rn.credential(n,s)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Vr{constructor(){super("github.com")}static credential(e){return Hn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Vr{constructor(){super("twitter.com")}static credential(e,n){return Hn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return an.credential(n,s)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(t,e){return Fr(t,"POST","/v1/accounts:signUp",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Fn._fromIdTokenResponse(e,s,r),o=Zl(s);return new Kn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Zl(s);return new Kn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Zl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends Yt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,zi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new zi(e,n,s,r)}}function ep(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zi._fromErrorAndOperation(t,i,e,s):i})}async function AE(t,e,n=!1){const s=await Ts(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RE(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Ts(t,ep(s,r,e,t),n);q(i.idToken,s,"internal-error");const o=nu(i.idToken);q(o,s,"internal-error");const{sub:a}=o;return q(t.uid===a,s,"user-mismatch"),Kn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ht(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tp(t,e,n=!1){const s="signIn",r=await ep(t,s,e),i=await Kn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function kE(t,e){return tp(Qn(t),e)}async function bA(t,e,n){var s;const r=Qn(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const u=await Ki(r,i,"signUpPassword");o=_a(r,u)}else o=_a(r,i).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await Ki(r,i,"signUpPassword");return _a(r,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await Kn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function CA(t,e,n){return kE(Ne(t),Vs.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DE(t,e){return Gn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Ne(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ts(s,DE(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function NE(t,e,n,s){return Ne(t).onIdTokenChanged(e,n,s)}function OE(t,e,n){return Ne(t).beforeAuthStateChanged(e,n)}function np(t,e,n,s){return Ne(t).onAuthStateChanged(e,n,s)}function PE(t){return Ne(t).signOut()}const Wi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wi,"1"),this.storage.removeItem(Wi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(){const t=We();return su(t)||So(t)}const ME=1e3,LE=10;class rp extends sp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xE()&&uE(),this.fallbackToPolling=Wd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);cE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,LE):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ME)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rp.type="LOCAL";const UE=rp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip extends sp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ip.type="SESSION";const op=ip;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ao(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await FE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ao.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=au("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return window}function $E(t){xt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function BE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qE(){return ap()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="firebaseLocalStorageDb",HE=1,Gi="firebaseLocalStorage",up="fbase_key";class $r{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ro(t,e){return t.transaction([Gi],e?"readwrite":"readonly").objectStore(Gi)}function KE(){const t=indexedDB.deleteDatabase(cp);return new $r(t).toPromise()}function nc(){const t=indexedDB.open(cp,HE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Gi,{keyPath:up})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Gi)?e(s):(s.close(),await KE(),e(await nc()))})})}async function eh(t,e,n){const s=Ro(t,!0).put({[up]:e,value:n});return new $r(s).toPromise()}async function zE(t,e){const n=Ro(t,!1).get(e),s=await new $r(n).toPromise();return s===void 0?null:s.value}function th(t,e){const n=Ro(t,!0).delete(e);return new $r(n).toPromise()}const WE=800,GE=3;class lp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>GE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ap()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ao._getInstance(qE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await BE(),!this.activeServiceWorker)return;this.sender=new VE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nc();return await eh(e,Wi,"1"),await th(e,Wi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>eh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>zE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>th(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ro(r,!1).getAll();return new $r(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lp.type="LOCAL";const QE=lp;new Ur(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t,e){return e?Bt(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu extends ru{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YE(t){return tp(t.auth,new cu(t),t.bypassAuthState)}function JE(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),RE(n,new cu(t),t.bypassAuthState)}async function XE(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),AE(n,new cu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YE;case"linkViaPopup":case"linkViaRedirect":return XE;case"reauthViaPopup":case"reauthViaRedirect":return JE;default:ht(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=new Ur(2e3,1e4);async function AA(t,e,n){const s=Qn(t);H_(t,e,ou);const r=hp(s,n);return new On(s,"signInViaPopup",e,r).executeNotNull()}class On extends fp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,On.currentPopupAction&&On.currentPopupAction.cancel(),On.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,On.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,ZE.get())};e()}}On.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="pendingRedirect",Di=new Map;class tI extends fp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Di.get(this.auth._key());if(!e){try{const s=await nI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Di.set(this.auth._key(),e)}return this.bypassAuthState||Di.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nI(t,e){const n=iI(e),s=rI(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function sI(t,e){Di.set(t._key(),e)}function rI(t){return Bt(t._redirectPersistence)}function iI(t){return ki(eI,t.config.apiKey,t.name)}async function oI(t,e,n=!1){const s=Qn(t),r=hp(s,e),o=await new tI(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=10*60*1e3;class cI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!dp(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Pt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aI&&this.cachedEventUids.clear(),this.cachedEventUids.has(nh(e))}saveEventToCache(e){this.cachedEventUids.add(nh(e)),this.lastProcessedEventTime=Date.now()}}function nh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(t,e={}){return Gn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fI=/^https?/;async function dI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lI(t);for(const n of e)try{if(pI(n))return}catch{}ht(t,"unauthorized-domain")}function pI(t){const e=tc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!fI.test(n))return!1;if(hI.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=new Ur(3e4,6e4);function sh(){const t=xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mI(t){return new Promise((e,n)=>{var s,r,i;function o(){sh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sh(),n(Pt(t,"network-request-failed"))},timeout:gI.get()})}if(!((r=(s=xt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=xt().gapi)===null||i===void 0)&&i.load)o();else{const a=hE("iframefcb");return xt()[a]=()=>{gapi.load?o():n(Pt(t,"network-request-failed"))},Jd(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ni=null,e})}let Ni=null;function yI(t){return Ni=Ni||mI(t),Ni}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=new Ur(5e3,15e3),wI="__/auth/iframe",_I="emulator/auth/iframe",EI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},II=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TI(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tu(e,_I):`https://${t.config.authDomain}/${wI}`,s={apiKey:e.apiKey,appName:t.name,v:Us},r=II.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Lr(s).slice(1)}`}async function bI(t){const e=await yI(t),n=xt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:TI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EI,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Pt(t,"network-request-failed"),a=xt().setTimeout(()=>{i(o)},vI.get());function c(){xt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SI=500,AI=600,RI="_blank",kI="http://localhost";class rh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DI(t,e,n,s=SI,r=AI){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},CI),{width:s.toString(),height:r.toString(),top:i,left:o}),u=We().toLowerCase();n&&(a=jd(u)?RI:n),Bd(u)&&(e=e||kI,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(aE(u)&&a!=="_self")return NI(e||"",a),new rh(null);const h=window.open(e||"",a,l);q(h,t,"popup-blocked");try{h.focus()}catch{}return new rh(h)}function NI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="__/auth/handler",PI="emulator/auth/handler",xI=encodeURIComponent("fac");async function ih(t,e,n,s,r,i){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Us,eventId:r};if(e instanceof ou){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(i||{}))o[l]=h}if(e instanceof Vr){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),u=c?`#${xI}=${encodeURIComponent(c)}`:"";return`${MI(t)}?${Lr(a).slice(1)}${u}`}function MI({config:t}){return t.emulator?tu(t,PI):`https://${t.authDomain}/${OI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="webStorageSupport";class LI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=op,this._completeRedirectFn=oI,this._overrideRedirectResult=sI}async _openPopup(e,n,s,r){var i;Ht((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ih(e,n,s,tc(),r);return DI(e,o,au())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await ih(e,n,s,tc(),r);return $E(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Ht(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await bI(e),s=new cI(e);return n.register("authEvent",r=>(q(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ea,{type:Ea},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ea];o!==void 0&&n(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wd()||su()||So()}}const UI=LI;var oh="@firebase/auth",ah="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $I(t){Is(new jn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),q(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gd(t)},u=new gE(s,r,i,c);return yE(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Is(new jn("auth-internal",e=>{const n=Qn(e.getProvider("auth").getImmediate());return(s=>new FI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(oh,ah,VI(t)),fn(oh,ah,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=5*60,jI=Sd("authIdTokenMaxAge")||BI;let ch=null;const qI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>jI)return;const r=n==null?void 0:n.token;ch!==r&&(ch=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function uu(t=Dd()){const e=Xc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mE(t,{popupRedirectResolver:UI,persistence:[QE,UE,op]}),s=Sd("authTokenSyncURL");if(s){const i=qI(s);OE(n,i,()=>i(n.currentUser)),NE(n,o=>i(o))}const r=Cd("auth");return r&&vE(n,`http://${r}`),n}$I("Browser");const HI="modulepreload",KI=function(t,e){return new URL(t,e).href},uh={},At=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=KI(i,s),i in uh)return;uh[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const h=r[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":HI,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const os=typeof window<"u";function zI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function Ia(t,e){const n={};for(const s in e){const r=e[s];n[s]=Et(r)?r.map(t):t(r)}return n}const or=()=>{},Et=Array.isArray,WI=/\/$/,GI=t=>t.replace(WI,"");function Ta(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=XI(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function QI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function lh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function YI(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&bs(e.matched[s],n.matched[r])&&pp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function pp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!JI(t[n],e[n]))return!1;return!0}function JI(t,e){return Et(t)?hh(t,e):Et(e)?hh(e,t):t===e}function hh(t,e){return Et(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function XI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Ir;(function(t){t.pop="pop",t.push="push"})(Ir||(Ir={}));var ar;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ar||(ar={}));function ZI(t){if(!t)if(os){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),GI(t)}const e0=/^[^#]+#/;function t0(t,e){return t.replace(e0,"#")+e}function n0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ko=()=>({left:window.pageXOffset,top:window.pageYOffset});function s0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=n0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function fh(t,e){return(history.state?history.state.position-e:-1)+t}const sc=new Map;function r0(t,e){sc.set(t,e)}function i0(t){const e=sc.get(t);return sc.delete(t),e}let o0=()=>location.protocol+"//"+location.host;function gp(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),lh(c,"")}return lh(n,t)+s+r}function a0(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=gp(t,location),v=n.value,E=e.value;let k=0;if(d){if(n.value=g,e.value=d,o&&o===v){o=null;return}k=E?d.position-E.position:0}else s(g);r.forEach(R=>{R(n.value,v,{delta:k,type:Ir.pop,direction:k?k>0?ar.forward:ar.back:ar.unknown})})};function c(){o=n.value}function u(d){r.push(d);const g=()=>{const v=r.indexOf(d);v>-1&&r.splice(v,1)};return i.push(g),g}function l(){const{history:d}=window;d.state&&d.replaceState(ae({},d.state,{scroll:ko()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function dh(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ko():null}}function c0(t){const{history:e,location:n}=window,s={value:gp(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:o0()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),r.value=u}catch(g){console.error(g),n[l?"replace":"assign"](d)}}function o(c,u){const l=ae({},e.state,dh(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=ae({},r.value,e.state,{forward:c,scroll:ko()});i(l.current,l,!0);const h=ae({},dh(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function u0(t){t=ZI(t);const e=c0(t),n=a0(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ae({location:"",base:t,go:s,createHref:t0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function l0(t){return typeof t=="string"||t&&typeof t=="object"}function mp(t){return typeof t=="string"||typeof t=="symbol"}const en={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},yp=Symbol("");var ph;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ph||(ph={}));function Cs(t,e){return ae(new Error,{type:t,[yp]:!0},e)}function Ft(t,e){return t instanceof Error&&yp in t&&(e==null||!!(t.type&e))}const gh="[^/]+?",h0={sensitive:!1,strict:!1,start:!0,end:!0},f0=/[.+*?^${}()[\]/\\]/g;function d0(t,e){const n=ae({},h0,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const d=u[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(f0,"\\$&"),g+=40;else if(d.type===1){const{value:v,repeatable:E,optional:k,regexp:R}=d;i.push({name:v,repeatable:E,optional:k});const F=R||gh;if(F!==gh){g+=10;try{new RegExp(`(${F})`)}catch(J){throw new Error(`Invalid custom RegExp for param "${v}" (${F}): `+J.message)}}let P=E?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||(P=k&&u.length<2?`(?:/${P})`:"/"+P),k&&(P+="?"),r+=P,g+=20,k&&(g+=-8),E&&(g+=-20),F===".*"&&(g+=-50)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const g=l[d]||"",v=i[d-1];h[v.name]=g&&v.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of d)if(g.type===0)l+=g.value;else if(g.type===1){const{value:v,repeatable:E,optional:k}=g,R=v in u?u[v]:"";if(Et(R)&&!E)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const F=Et(R)?R.join("/"):R;if(!F)if(k)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);l+=F}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function p0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function g0(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=p0(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(mh(s))return 1;if(mh(r))return-1}return r.length-s.length}function mh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const m0={type:0,value:""},y0=/[a-zA-Z0-9_]/;function v0(t){if(!t)return[[]];if(t==="/")return[[m0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:y0.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function w0(t,e,n){const s=d0(v0(t.path),n),r=ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function _0(t,e){const n=[],s=new Map;e=wh({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,d){const g=!d,v=E0(l);v.aliasOf=d&&d.record;const E=wh(e,l),k=[v];if("alias"in l){const P=typeof l.alias=="string"?[l.alias]:l.alias;for(const J of P)k.push(ae({},v,{components:d?d.record.components:v.components,path:J,aliasOf:d?d.record:v}))}let R,F;for(const P of k){const{path:J}=P;if(h&&J[0]!=="/"){const fe=h.record.path,_e=fe[fe.length-1]==="/"?"":"/";P.path=h.record.path+(J&&_e+J)}if(R=w0(P,h,E),d?d.alias.push(R):(F=F||R,F!==R&&F.alias.push(R),g&&l.name&&!vh(R)&&o(l.name)),v.children){const fe=v.children;for(let _e=0;_e<fe.length;_e++)i(fe[_e],R,d&&d.children[_e])}d=d||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return F?()=>{o(F)}:or}function o(l){if(mp(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&g0(l,n[h])>=0&&(l.record.path!==n[h].record.path||!vp(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!vh(l)&&s.set(l.record.name,l)}function u(l,h){let d,g={},v,E;if("name"in l&&l.name){if(d=s.get(l.name),!d)throw Cs(1,{location:l});E=d.record.name,g=ae(yh(h.params,d.keys.filter(F=>!F.optional).map(F=>F.name)),l.params&&yh(l.params,d.keys.map(F=>F.name))),v=d.stringify(g)}else if("path"in l)v=l.path,d=n.find(F=>F.re.test(v)),d&&(g=d.parse(v),E=d.record.name);else{if(d=h.name?s.get(h.name):n.find(F=>F.re.test(h.path)),!d)throw Cs(1,{location:l,currentLocation:h});E=d.record.name,g=ae({},h.params,l.params),v=d.stringify(g)}const k=[];let R=d;for(;R;)k.unshift(R.record),R=R.parent;return{name:E,path:v,params:g,matched:k,meta:T0(k)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function yh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function E0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:I0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function I0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function vh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function T0(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function wh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function vp(t,e){return e.children.some(n=>n===t||vp(t,n))}const wp=/#/g,b0=/&/g,C0=/\//g,S0=/=/g,A0=/\?/g,_p=/\+/g,R0=/%5B/g,k0=/%5D/g,Ep=/%5E/g,D0=/%60/g,Ip=/%7B/g,N0=/%7C/g,Tp=/%7D/g,O0=/%20/g;function lu(t){return encodeURI(""+t).replace(N0,"|").replace(R0,"[").replace(k0,"]")}function P0(t){return lu(t).replace(Ip,"{").replace(Tp,"}").replace(Ep,"^")}function rc(t){return lu(t).replace(_p,"%2B").replace(O0,"+").replace(wp,"%23").replace(b0,"%26").replace(D0,"`").replace(Ip,"{").replace(Tp,"}").replace(Ep,"^")}function x0(t){return rc(t).replace(S0,"%3D")}function M0(t){return lu(t).replace(wp,"%23").replace(A0,"%3F")}function L0(t){return t==null?"":M0(t).replace(C0,"%2F")}function Qi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function U0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(_p," "),o=i.indexOf("="),a=Qi(o<0?i:i.slice(0,o)),c=o<0?null:Qi(i.slice(o+1));if(a in e){let u=e[a];Et(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function _h(t){let e="";for(let n in t){const s=t[n];if(n=x0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Et(s)?s.map(i=>i&&rc(i)):[s&&rc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function F0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Et(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const V0=Symbol(""),Eh=Symbol(""),Do=Symbol(""),bp=Symbol(""),ic=Symbol("");function Qs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function nn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Cs(4,{from:n,to:e})):h instanceof Error?a(h):l0(h)?a(Cs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function ba(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if($0(a)){const u=(a.__vccOpts||a)[e];u&&r.push(nn(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=zI(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&nn(d,n,s,i,o)()}))}}return r}function $0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ih(t){const e=Ot(Do),n=Ot(bp),s=ut(()=>e.resolve(ds(t.to))),r=ut(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(bs.bind(null,l));if(d>-1)return d;const g=Th(c[u-2]);return u>1&&Th(l)===g&&h[h.length-1].path!==g?h.findIndex(bs.bind(null,c[u-2])):d}),i=ut(()=>r.value>-1&&H0(n.params,s.value.params)),o=ut(()=>r.value>-1&&r.value===n.matched.length-1&&pp(n.params,s.value.params));function a(c={}){return q0(c)?e[ds(t.replace)?"replace":"push"](ds(t.to)).catch(or):Promise.resolve()}return{route:s,href:ut(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const B0=td({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ih,setup(t,{slots:e}){const n=xr(Ih(t)),{options:s}=Ot(Do),r=ut(()=>({[bh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[bh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ed("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),j0=B0;function q0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function H0(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Et(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Th(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const bh=(t,e,n)=>t??e??n,K0=td({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ot(ic),r=ut(()=>t.route||s.value),i=Ot(Eh,0),o=ut(()=>{let u=ds(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=ut(()=>r.value.matched[o.value]);bi(Eh,ut(()=>o.value+1)),bi(V0,a),bi(ic,r);const c=jf();return Ci(()=>[c.value,a.value,t.name],([u,l,h],[d,g,v])=>{l&&(l.instances[h]=u,g&&g!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!bs(l,g)||!d)&&(l.enterCallbacks[h]||[]).forEach(E=>E(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return Ch(n.default,{Component:d,route:u});const g=h.props[l],v=g?g===!0?u.params:typeof g=="function"?g(u):g:null,k=Ed(d,ae({},v,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return Ch(n.default,{Component:k,route:u})||k}}});function Ch(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const z0=K0;function W0(t){const e=_0(t.routes,t),n=t.parseQuery||U0,s=t.stringifyQuery||_h,r=t.history,i=Qs(),o=Qs(),a=Qs(),c=Oy(en);let u=en;os&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Ia.bind(null,w=>""+w),h=Ia.bind(null,L0),d=Ia.bind(null,Qi);function g(w,O){let D,V;return mp(w)?(D=e.getRecordMatcher(w),V=O):V=w,e.addRoute(V,D)}function v(w){const O=e.getRecordMatcher(w);O&&e.removeRoute(O)}function E(){return e.getRoutes().map(w=>w.record)}function k(w){return!!e.getRecordMatcher(w)}function R(w,O){if(O=ae({},O||c.value),typeof w=="string"){const f=Ta(n,w,O.path),p=e.resolve({path:f.path},O),m=r.createHref(f.fullPath);return ae(f,p,{params:d(p.params),hash:Qi(f.hash),redirectedFrom:void 0,href:m})}let D;if("path"in w)D=ae({},w,{path:Ta(n,w.path,O.path).path});else{const f=ae({},w.params);for(const p in f)f[p]==null&&delete f[p];D=ae({},w,{params:h(w.params)}),O.params=h(O.params)}const V=e.resolve(D,O),ne=w.hash||"";V.params=l(d(V.params));const ve=QI(s,ae({},w,{hash:P0(ne),path:V.path})),X=r.createHref(ve);return ae({fullPath:ve,hash:ne,query:s===_h?F0(w.query):w.query||{}},V,{redirectedFrom:void 0,href:X})}function F(w){return typeof w=="string"?Ta(n,w,c.value.path):ae({},w)}function P(w,O){if(u!==w)return Cs(8,{from:O,to:w})}function J(w){return Qe(w)}function fe(w){return J(ae(F(w),{replace:!0}))}function _e(w){const O=w.matched[w.matched.length-1];if(O&&O.redirect){const{redirect:D}=O;let V=typeof D=="function"?D(w):D;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=F(V):{path:V},V.params={}),ae({query:w.query,hash:w.hash,params:"path"in V?{}:w.params},V)}}function Qe(w,O){const D=u=R(w),V=c.value,ne=w.state,ve=w.force,X=w.replace===!0,f=_e(D);if(f)return Qe(ae(F(f),{state:typeof f=="object"?ae({},ne,f.state):ne,force:ve,replace:X}),O||D);const p=D;p.redirectedFrom=O;let m;return!ve&&YI(s,V,D)&&(m=Cs(16,{to:p,from:V}),bn(V,V,!0,!1)),(m?Promise.resolve(m):Tt(p,V)).catch(y=>Ft(y)?Ft(y,2)?y:ft(y):le(y,p,V)).then(y=>{if(y){if(Ft(y,2))return Qe(ae({replace:X},F(y.to),{state:typeof y.to=="object"?ae({},ne,y.to.state):ne,force:ve}),O||p)}else y=Jt(p,V,!0,X,ne);return ct(p,V,y),y})}function Ze(w,O){const D=P(w,O);return D?Promise.reject(D):Promise.resolve()}function Tt(w,O){let D;const[V,ne,ve]=G0(w,O);D=ba(V.reverse(),"beforeRouteLeave",w,O);for(const f of V)f.leaveGuards.forEach(p=>{D.push(nn(p,w,O))});const X=Ze.bind(null,w,O);return D.push(X),ns(D).then(()=>{D=[];for(const f of i.list())D.push(nn(f,w,O));return D.push(X),ns(D)}).then(()=>{D=ba(ne,"beforeRouteUpdate",w,O);for(const f of ne)f.updateGuards.forEach(p=>{D.push(nn(p,w,O))});return D.push(X),ns(D)}).then(()=>{D=[];for(const f of w.matched)if(f.beforeEnter&&!O.matched.includes(f))if(Et(f.beforeEnter))for(const p of f.beforeEnter)D.push(nn(p,w,O));else D.push(nn(f.beforeEnter,w,O));return D.push(X),ns(D)}).then(()=>(w.matched.forEach(f=>f.enterCallbacks={}),D=ba(ve,"beforeRouteEnter",w,O),D.push(X),ns(D))).then(()=>{D=[];for(const f of o.list())D.push(nn(f,w,O));return D.push(X),ns(D)}).catch(f=>Ft(f,8)?f:Promise.reject(f))}function ct(w,O,D){for(const V of a.list())V(w,O,D)}function Jt(w,O,D,V,ne){const ve=P(w,O);if(ve)return ve;const X=O===en,f=os?history.state:{};D&&(V||X?r.replace(w.fullPath,ae({scroll:X&&f&&f.scroll},ne)):r.push(w.fullPath,ne)),c.value=w,bn(w,O,D,X),ft()}let bt;function Zn(){bt||(bt=r.listen((w,O,D)=>{if(!ii.listening)return;const V=R(w),ne=_e(V);if(ne){Qe(ae(ne,{replace:!0}),V).catch(or);return}u=V;const ve=c.value;os&&r0(fh(ve.fullPath,D.delta),ko()),Tt(V,ve).catch(X=>Ft(X,12)?X:Ft(X,2)?(Qe(X.to,V).then(f=>{Ft(f,20)&&!D.delta&&D.type===Ir.pop&&r.go(-1,!1)}).catch(or),Promise.reject()):(D.delta&&r.go(-D.delta,!1),le(X,V,ve))).then(X=>{X=X||Jt(V,ve,!1),X&&(D.delta&&!Ft(X,8)?r.go(-D.delta,!1):D.type===Ir.pop&&Ft(X,20)&&r.go(-1,!1)),ct(V,ve,X)}).catch(or)}))}let Tn=Qs(),zs=Qs(),Ee;function le(w,O,D){ft(w);const V=zs.list();return V.length?V.forEach(ne=>ne(w,O,D)):console.error(w),Promise.reject(w)}function ce(){return Ee&&c.value!==en?Promise.resolve():new Promise((w,O)=>{Tn.add([w,O])})}function ft(w){return Ee||(Ee=!w,Zn(),Tn.list().forEach(([O,D])=>w?D(w):O()),Tn.reset()),w}function bn(w,O,D,V){const{scrollBehavior:ne}=t;if(!os||!ne)return Promise.resolve();const ve=!D&&i0(fh(w.fullPath,0))||(V||!D)&&history.state&&history.state.scroll||null;return Wf().then(()=>ne(w,O,ve)).then(X=>X&&s0(X)).catch(X=>le(X,w,O))}const dt=w=>r.go(w);let et;const es=new Set,ii={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,hasRoute:k,getRoutes:E,resolve:R,options:t,push:J,replace:fe,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:zs.add,isReady:ce,install(w){const O=this;w.component("RouterLink",j0),w.component("RouterView",z0),w.config.globalProperties.$router=O,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>ds(c)}),os&&!et&&c.value===en&&(et=!0,J(r.location).catch(ne=>{}));const D={};for(const ne in en)D[ne]=ut(()=>c.value[ne]);w.provide(Do,O),w.provide(bp,xr(D)),w.provide(ic,c);const V=w.unmount;es.add(w),w.unmount=function(){es.delete(w),es.size<1&&(u=en,bt&&bt(),bt=null,c.value=en,et=!1,Ee=!1),V()}}};return ii}function ns(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function G0(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>bs(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>bs(u,c))||r.push(c))}return[n,s,r]}function RA(){return Ot(Do)}const Yi=W0({history:u0(),base:"/CarHunters/",routes:[{path:"/home",name:"Home",component:()=>At(()=>import("./HomeView-163dc1a9.js"),["./HomeView-163dc1a9.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url),meta:{requiresAuth:!0}},{path:"/about",name:"About",component:()=>At(()=>import("./AboutView-bf211d06.js"),["./AboutView-bf211d06.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url),meta:{requiresAuth:!0}},{path:"/posts",name:"Posts",component:()=>At(()=>import("./PostsView-3a7c3832.js"),["./PostsView-3a7c3832.js","./index.esm2017-2f88e0e3.js","./_plugin-vue_export-helper-c27b6911.js","./PostsView-0292f3bc.css"],import.meta.url),meta:{requiresAuth:!0}},{path:"/add-post",name:"AddPost",component:()=>At(()=>import("./AddPostView-1855f56a.js"),["./AddPostView-1855f56a.js","./index.esm2017-2f88e0e3.js","./_plugin-vue_export-helper-c27b6911.js","./AddPostView-6cf523eb.css"],import.meta.url),meta:{requiresAuth:!0}},{path:"/account",name:"Account",component:()=>At(()=>import("./ProfileView-a80bf16a.js"),[],import.meta.url),meta:{requiresAuth:!0}},{path:"/edit",name:"Edit",component:()=>At(()=>import("./EditProfileView-8f703965.js"),["./EditProfileView-8f703965.js","./EditProfileView-2a52f714.css"],import.meta.url),meta:{requiresAuth:!0}},{path:"/",name:"Hello",component:()=>At(()=>import("./HelloView-765fbb59.js"),[],import.meta.url)},{path:"/login",name:"Login",component:()=>At(()=>import("./LoginView-e199abf8.js"),["./LoginView-e199abf8.js","./LoginView-f48b0e8a.css"],import.meta.url)},{path:"/register",name:"Register",component:()=>At(()=>import("./RegisterView-c38c8516.js"),["./RegisterView-c38c8516.js","./EditProfileView-2a52f714.css"],import.meta.url)},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>At(()=>import("./NotFound-3cd1c3a7.js"),["./NotFound-3cd1c3a7.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url)}]}),Q0=()=>new Promise((t,e)=>{const n=np(uu(),s=>{n(),t(s)},e)});Yi.beforeEach(async(t,e,n)=>{t.matched.some(s=>s.meta.requiresAuth)?await Q0()?n():(alert("You must be logged in!"),Yi.push("/")):n()});const Y0={key:0,class:"navbar navbar-expand-lg navbar-light bg-light"},J0={class:"container-fluid"},X0={class:"collapse navbar-collapse justify-content-center",id:"navbarCenteredExample"},Z0={class:"navbar-nav me-auto mb-2 mb-lg-0"},eT={class:"nav-item"},tT={class:"navbar-nav text-center mb-2 mb-lg-0"},nT={class:"nav-item"},sT={class:"nav-item"},rT={class:"navbar-nav ms-auto mb-2 mb-lg-0"},iT={class:"nav-item"},oT={class:"navbar-nav ms-auto mb-2 mb-lg-0"},aT={class:"nav-item"},cT={__name:"NavbarComponent1",props:{isloggedin:Boolean},setup(t){const e=uu(),n=()=>{PE(e).then(()=>{console.log("Signed out"),Yi.push("/")})};return(s,r)=>{const i=ad("router-link");return t.isloggedin?(Gc(),yd("nav",Y0,[Pe("div",J0,[Pe("div",X0,[Pe("ul",Z0,[Pe("li",eT,[Ce(i,{class:"nav-link active","aria-current":"page",to:"/home"},{default:ss(()=>[rs("Home")]),_:1})])]),Pe("ul",tT,[Pe("li",nT,[Ce(i,{class:"nav-link active","aria-current":"page",to:"/posts"},{default:ss(()=>[rs("Posts")]),_:1})]),Pe("li",sT,[Ce(i,{class:"nav-link active","aria-current":"page",to:"/add-post"},{default:ss(()=>[rs("Add Post")]),_:1})])]),Pe("ul",rT,[Pe("li",iT,[Ce(i,{class:"nav-link active","aria-current":"page",to:"/about"},{default:ss(()=>[rs("About")]),_:1})])]),Pe("ul",oT,[Pe("li",aT,[Ce(i,{class:"nav-link active","aria-current":"page",to:"/account"},{default:ss(()=>[rs("Account")]),_:1})])]),Pe("ul",{class:"navbar-nav ms-auto mb-2 mb-lg-0"},[Pe("li",{class:"nav-item"},[Pe("button",{onClick:n},"Sign Out")])])])])])):Dv("",!0)}}};const uT=Pe("h1",null,"Hello",-1),lT={class:"ps-4 text-center"},hT={__name:"App",setup(t){const e=jf(!1);let n;return rd(()=>{n=uu(),np(n,s=>{s?(console.log("logged"),e.value=!0):(e.value=!1,console.log("not logged"))})}),(s,r)=>{const i=ad("router-view");return Gc(),yd(Rt,null,[Ce(cT,{isloggedin:e.value},null,8,["isloggedin"]),uT,Pe("div",lT,[Ce(i)])],64)}}},fT={apiKey:"AIzaSyDh_atUN2_4dsjhOGCNvSFkSFRYO25f8WM",authDomain:"test-carhunters.firebaseapp.com",projectId:"test-carhunters",storageBucket:"test-carhunters.appspot.com",messagingSenderId:"323271411279",appId:"1:323271411279:web:8118bd19241c5ed2ca4c3a",measurementId:"G-2ZE2L07P17"};var dT="firebase",pT="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn(dT,pT,"app");var gT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,hu=hu||{},K=gT||self;function Ji(){}function No(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Br(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function mT(t){return Object.prototype.hasOwnProperty.call(t,Ca)&&t[Ca]||(t[Ca]=++yT)}var Ca="closure_uid_"+(1e9*Math.random()>>>0),yT=0;function vT(t,e,n){return t.call.apply(t.bind,arguments)}function wT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ke(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ke=vT:Ke=wT,Ke.apply(null,arguments)}function di(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Fe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function _n(){this.s=this.s,this.o=this.o}var _T=0;_n.prototype.s=!1;_n.prototype.na=function(){!this.s&&(this.s=!0,this.M(),_T!=0)&&mT(this)};_n.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Cp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function fu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Sh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(No(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var ET=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",Ji,e),K.removeEventListener("test",Ji,e)}catch{}return t}();function Xi(t){return/^[\s\xa0]*$/.test(t)}var Ah=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Sa(t,e){return t<e?-1:t>e?1:0}function Oo(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function Nt(t){return Oo().indexOf(t)!=-1}function du(t){return du[" "](t),t}du[" "]=Ji;function IT(t){var e=CT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var TT=Nt("Opera"),Ss=Nt("Trident")||Nt("MSIE"),Sp=Nt("Edge"),oc=Sp||Ss,Ap=Nt("Gecko")&&!(Oo().toLowerCase().indexOf("webkit")!=-1&&!Nt("Edge"))&&!(Nt("Trident")||Nt("MSIE"))&&!Nt("Edge"),bT=Oo().toLowerCase().indexOf("webkit")!=-1&&!Nt("Edge");function Rp(){var t=K.document;return t?t.documentMode:void 0}var Zi;e:{var Aa="",Ra=function(){var t=Oo();if(Ap)return/rv:([^\);]+)(\)|;)/.exec(t);if(Sp)return/Edge\/([\d\.]+)/.exec(t);if(Ss)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(bT)return/WebKit\/(\S+)/.exec(t);if(TT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ra&&(Aa=Ra?Ra[1]:""),Ss){var ka=Rp();if(ka!=null&&ka>parseFloat(Aa)){Zi=String(ka);break e}}Zi=Aa}var CT={};function ST(){return IT(function(){let t=0;const e=Ah(String(Zi)).split("."),n=Ah("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Sa(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Sa(r[2].length==0,i[2].length==0)||Sa(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var ac;if(K.document&&Ss){var Rh=Rp();ac=Rh||parseInt(Zi,10)||void 0}else ac=void 0;var AT=ac;function Tr(t,e){if(ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ap){e:{try{du(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:RT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Tr.X.h.call(this)}}Fe(Tr,ze);var RT={2:"touch",3:"pen",4:"mouse"};Tr.prototype.h=function(){Tr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var jr="closure_listenable_"+(1e6*Math.random()|0),kT=0;function DT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++kT,this.ba=this.ea=!1}function Po(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function pu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function kp(t){const e={};for(const n in t)e[n]=t[n];return e}const kh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Dp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<kh.length;i++)n=kh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function xo(t){this.src=t,this.g={},this.h=0}xo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=uc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new DT(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function cc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Cp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Po(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function uc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var gu="closure_lm_"+(1e6*Math.random()|0),Da={};function Np(t,e,n,s,r){if(s&&s.once)return Pp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Np(t,e[i],n,s,r);return null}return n=vu(n),t&&t[jr]?t.N(e,n,Br(s)?!!s.capture:!!s,r):Op(t,e,n,!1,s,r)}function Op(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Br(r)?!!r.capture:!!r,a=yu(t);if(a||(t[gu]=a=new xo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=NT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ET||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Mp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function NT(){function t(n){return e.call(t.src,t.listener,n)}const e=OT;return t}function Pp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Pp(t,e[i],n,s,r);return null}return n=vu(n),t&&t[jr]?t.O(e,n,Br(s)?!!s.capture:!!s,r):Op(t,e,n,!0,s,r)}function xp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)xp(t,e[i],n,s,r);else s=Br(s)?!!s.capture:!!s,n=vu(n),t&&t[jr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=uc(i,n,s,r),-1<n&&(Po(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=yu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=uc(e,n,s,r)),(n=-1<t?e[t]:null)&&mu(n))}function mu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[jr])cc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Mp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=yu(e))?(cc(n,t),n.h==0&&(n.src=null,e[gu]=null)):Po(t)}}}function Mp(t){return t in Da?Da[t]:Da[t]="on"+t}function OT(t,e){if(t.ba)t=!0;else{e=new Tr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&mu(t),t=n.call(s,e)}return t}function yu(t){return t=t[gu],t instanceof xo?t:null}var Na="__closure_events_fn_"+(1e9*Math.random()>>>0);function vu(t){return typeof t=="function"?t:(t[Na]||(t[Na]=function(e){return t.handleEvent(e)}),t[Na])}function Me(){_n.call(this),this.i=new xo(this),this.P=this,this.I=null}Fe(Me,_n);Me.prototype[jr]=!0;Me.prototype.removeEventListener=function(t,e,n,s){xp(this,t,e,n,s)};function Ue(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ze(e,t);else if(e instanceof ze)e.target=e.target||t;else{var r=e;e=new ze(s,t),Dp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=pi(o,s,!0,e)&&r}if(o=e.g=t,r=pi(o,s,!0,e)&&r,r=pi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=pi(o,s,!1,e)&&r}Me.prototype.M=function(){if(Me.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Po(n[s]);delete t.g[e],t.h--}}this.I=null};Me.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Me.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function pi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&cc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var wu=K.JSON.stringify;function PT(){var t=Fp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xT{constructor(){this.h=this.g=null}add(e,n){const s=Lp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Lp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new MT,t=>t.reset());class MT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function LT(t){K.setTimeout(()=>{throw t},0)}function Up(t,e){lc||UT(),hc||(lc(),hc=!0),Fp.add(t,e)}var lc;function UT(){var t=K.Promise.resolve(void 0);lc=function(){t.then(FT)}}var hc=!1,Fp=new xT;function FT(){for(var t;t=PT();){try{t.h.call(t.g)}catch(n){LT(n)}var e=Lp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}hc=!1}function Mo(t,e){Me.call(this),this.h=t||1,this.g=e||K,this.j=Ke(this.lb,this),this.l=Date.now()}Fe(Mo,Me);L=Mo.prototype;L.ca=!1;L.R=null;L.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ue(this,"tick"),this.ca&&(_u(this),this.start()))}};L.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function _u(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}L.M=function(){Mo.X.M.call(this),_u(this),delete this.g};function Eu(t,e,n){if(typeof t=="function")n&&(t=Ke(t,n));else if(t&&typeof t.handleEvent=="function")t=Ke(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function Vp(t){t.g=Eu(()=>{t.g=null,t.i&&(t.i=!1,Vp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class VT extends _n{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Vp(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function br(t){_n.call(this),this.h=t,this.g={}}Fe(br,_n);var Dh=[];function $p(t,e,n,s){Array.isArray(n)||(n&&(Dh[0]=n.toString()),n=Dh);for(var r=0;r<n.length;r++){var i=Np(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Bp(t){pu(t.g,function(e,n){this.g.hasOwnProperty(n)&&mu(e)},t),t.g={}}br.prototype.M=function(){br.X.M.call(this),Bp(this)};br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Lo(){this.g=!0}Lo.prototype.Aa=function(){this.g=!1};function $T(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function BT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function us(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+qT(t,n)+(s?" "+s:"")})}function jT(t,e){t.info(function(){return"TIMEOUT: "+e})}Lo.prototype.info=function(){};function qT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return wu(n)}catch{return e}}var Yn={},Nh=null;function Uo(){return Nh=Nh||new Me}Yn.Pa="serverreachability";function jp(t){ze.call(this,Yn.Pa,t)}Fe(jp,ze);function Cr(t){const e=Uo();Ue(e,new jp(e))}Yn.STAT_EVENT="statevent";function qp(t,e){ze.call(this,Yn.STAT_EVENT,t),this.stat=e}Fe(qp,ze);function Je(t){const e=Uo();Ue(e,new qp(e,t))}Yn.Qa="timingevent";function Hp(t,e){ze.call(this,Yn.Qa,t),this.size=e}Fe(Hp,ze);function qr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var Fo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Kp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Iu(){}Iu.prototype.h=null;function Oh(t){return t.h||(t.h=t.i())}function zp(){}var Hr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Tu(){ze.call(this,"d")}Fe(Tu,ze);function bu(){ze.call(this,"c")}Fe(bu,ze);var fc;function Vo(){}Fe(Vo,Iu);Vo.prototype.g=function(){return new XMLHttpRequest};Vo.prototype.i=function(){return{}};fc=new Vo;function Kr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new br(this),this.O=HT,t=oc?125:void 0,this.T=new Mo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Wp}function Wp(){this.i=null,this.g="",this.h=!1}var HT=45e3,dc={},eo={};L=Kr.prototype;L.setTimeout=function(t){this.O=t};function pc(t,e,n){t.K=1,t.v=Bo(Kt(e)),t.s=n,t.P=!0,Gp(t,null)}function Gp(t,e){t.F=Date.now(),zr(t),t.A=Kt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),ng(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Wp,t.g=Tg(t.l,n?e:null,!t.s),0<t.N&&(t.L=new VT(Ke(t.La,t,t.g),t.N)),$p(t.S,t.g,"readystatechange",t.ib),e=t.H?kp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Cr(),$T(t.j,t.u,t.A,t.m,t.U,t.s)}L.ib=function(t){t=t.target;const e=this.L;e&&jt(t)==3?e.l():this.La(t)};L.La=function(t){try{if(t==this.g)e:{const l=jt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||oc||this.g&&(this.h.h||this.g.fa()||Lh(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Cr(3):Cr(2)),$o(this);var n=this.g.aa();this.Y=n;t:if(Qp(this)){var s=Lh(this.g);t="";var r=s.length,i=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pn(this),cr(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,BT(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xi(a)){var u=a;break t}}u=null}if(n=u)us(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,gc(this,n);else{this.i=!1,this.o=3,Je(12),Pn(this),cr(this);break e}}this.P?(Yp(this,l,o),oc&&this.i&&l==3&&($p(this.S,this.T,"tick",this.hb),this.T.start())):(us(this.j,this.m,o,null),gc(this,o)),l==4&&Pn(this),this.i&&!this.I&&(l==4?wg(this.l,this):(this.i=!1,zr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Je(12)):(this.o=0,Je(13)),Pn(this),cr(this)}}}catch{}finally{}};function Qp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Yp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=KT(t,n),r==eo){e==4&&(t.o=4,Je(14),s=!1),us(t.j,t.m,null,"[Incomplete Response]");break}else if(r==dc){t.o=4,Je(15),us(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else us(t.j,t.m,r,null),gc(t,r);Qp(t)&&r!=eo&&r!=dc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Je(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Nu(e),e.K=!0,Je(11))):(us(t.j,t.m,n,"[Invalid Chunked Response]"),Pn(t),cr(t))}L.hb=function(){if(this.g){var t=jt(this.g),e=this.g.fa();this.C<e.length&&($o(this),Yp(this,t,e),this.i&&t!=4&&zr(this))}};function KT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?eo:(n=Number(e.substring(n,s)),isNaN(n)?dc:(s+=1,s+n>e.length?eo:(e=e.substr(s,n),t.C=s+n,e)))}L.cancel=function(){this.I=!0,Pn(this)};function zr(t){t.V=Date.now()+t.O,Jp(t,t.O)}function Jp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=qr(Ke(t.gb,t),e)}function $o(t){t.B&&(K.clearTimeout(t.B),t.B=null)}L.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(jT(this.j,this.A),this.K!=2&&(Cr(),Je(17)),Pn(this),this.o=2,cr(this)):Jp(this,this.V-t)};function cr(t){t.l.G==0||t.I||wg(t.l,t)}function Pn(t){$o(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,_u(t.T),Bp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function gc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||mc(n.h,t))){if(!t.J&&mc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)so(n),Ho(n);else break e;Du(n),Je(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=qr(Ke(n.cb,n),6e3));if(1>=ig(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else xn(n,11)}else if((t.J||n.g==t)&&so(n),!Xi(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.h;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Cu(i,i.h),i.h=null))}if(s.D){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.za=E,me(s.F,s.D,E))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Ig(s,s.H?s.ka:null,s.V),o.J){og(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&($o(a),zr(a)),s.g=o}else yg(s);0<n.i.length&&Ko(n)}else u[0]!="stop"&&u[0]!="close"||xn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?xn(n,7):ku(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Cr(4)}catch{}}function zT(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(No(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function WT(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(No(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Xp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(No(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=WT(t),s=zT(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Zp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Vn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Vn){this.h=e!==void 0?e:t.h,to(this,t.j),this.s=t.s,this.g=t.g,no(this,t.m),this.l=t.l,e=t.i;var n=new Sr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ph(this,n),this.o=t.o}else t&&(n=String(t).match(Zp))?(this.h=!!e,to(this,n[1]||"",!0),this.s=er(n[2]||""),this.g=er(n[3]||"",!0),no(this,n[4]),this.l=er(n[5]||"",!0),Ph(this,n[6]||"",!0),this.o=er(n[7]||"")):(this.h=!!e,this.i=new Sr(null,this.h))}Vn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(tr(e,xh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(tr(e,xh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(tr(n,n.charAt(0)=="/"?JT:YT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",tr(n,ZT)),t.join("")};function Kt(t){return new Vn(t)}function to(t,e,n){t.j=n?er(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function no(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ph(t,e,n){e instanceof Sr?(t.i=e,eb(t.i,t.h)):(n||(e=tr(e,XT)),t.i=new Sr(e,t.h))}function me(t,e,n){t.i.set(e,n)}function Bo(t){return me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function er(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function tr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,QT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function QT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var xh=/[#\/\?@]/g,YT=/[#\?:]/g,JT=/[#\?]/g,XT=/[#\?@]/g,ZT=/#/g;function Sr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function En(t){t.g||(t.g=new Map,t.h=0,t.i&&GT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=Sr.prototype;L.add=function(t,e){En(this),this.i=null,t=$s(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function eg(t,e){En(t),e=$s(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function tg(t,e){return En(t),e=$s(t,e),t.g.has(e)}L.forEach=function(t,e){En(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};L.oa=function(){En(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};L.W=function(t){En(this);let e=[];if(typeof t=="string")tg(this,t)&&(e=e.concat(this.g.get($s(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return En(this),this.i=null,t=$s(this,t),tg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function ng(t,e,n){eg(t,e),0<n.length&&(t.i=null,t.g.set($s(t,e),fu(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function $s(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function eb(t,e){e&&!t.j&&(En(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(eg(this,s),ng(this,r,n))},t)),t.j=e}var tb=class{constructor(e,n){this.h=e,this.g=n}};function sg(t){this.l=t||nb,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ga&&K.g.Ga()&&K.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nb=10;function rg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ig(t){return t.h?1:t.g?t.g.size:0}function mc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Cu(t,e){t.g?t.g.add(e):t.h=e}function og(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}sg.prototype.cancel=function(){if(this.i=ag(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ag(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return fu(t.i)}function Su(){}Su.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};Su.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function sb(){this.g=new Su}function rb(t,e,n){const s=n||"";try{Xp(t,function(r,i){let o=r;Br(r)&&(o=wu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function ib(t,e){const n=new Lo;if(K.Image){const s=new Image;s.onload=di(gi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=di(gi,n,s,"TestLoadImage: error",!1,e),s.onabort=di(gi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=di(gi,n,s,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function gi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Wr(t){this.l=t.ac||null,this.j=t.jb||!1}Fe(Wr,Iu);Wr.prototype.g=function(){return new jo(this.l,this.j)};Wr.prototype.i=function(t){return function(){return t}}({});function jo(t,e){Me.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Au,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Fe(jo,Me);var Au=0;L=jo.prototype;L.open=function(t,e){if(this.readyState!=Au)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ar(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gr(this)),this.readyState=Au};L.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ar(this)),this.g&&(this.readyState=3,Ar(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cg(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function cg(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}L.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Gr(this):Ar(this),this.readyState==3&&cg(this)}};L.Va=function(t){this.g&&(this.response=this.responseText=t,Gr(this))};L.Ua=function(t){this.g&&(this.response=t,Gr(this))};L.ga=function(){this.g&&Gr(this)};function Gr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ar(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ar(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(jo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ob=K.JSON.parse;function we(t){Me.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ug,this.K=this.L=!1}Fe(we,Me);var ug="",ab=/^https?$/i,cb=["POST","PUT"];L=we.prototype;L.Ka=function(t){this.L=t};L.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():fc.g(),this.C=this.u?Oh(this.u):Oh(fc),this.g.onreadystatechange=Ke(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Mh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=K.FormData&&t instanceof K.FormData,!(0<=Cp(cb,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{fg(this),0<this.B&&((this.K=ub(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ke(this.qa,this)):this.A=Eu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Mh(this,i)}};function ub(t){return Ss&&ST()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.qa=function(){typeof hu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ue(this,"timeout"),this.abort(8))};function Mh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,lg(t),qo(t)}function lg(t){t.D||(t.D=!0,Ue(t,"complete"),Ue(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ue(this,"complete"),Ue(this,"abort"),qo(this))};L.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qo(this,!0)),we.X.M.call(this)};L.Ha=function(){this.s||(this.F||this.v||this.l?hg(this):this.fb())};L.fb=function(){hg(this)};function hg(t){if(t.h&&typeof hu<"u"&&(!t.C[1]||jt(t)!=4||t.aa()!=2)){if(t.v&&jt(t)==4)Eu(t.Ha,0,t);else if(Ue(t,"readystatechange"),jt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Zp)[1]||null;if(!r&&K.self&&K.self.location){var i=K.self.location.protocol;r=i.substr(0,i.length-1)}s=!ab.test(r?r.toLowerCase():"")}n=s}if(n)Ue(t,"complete"),Ue(t,"success");else{t.m=6;try{var o=2<jt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",lg(t)}}finally{qo(t)}}}}function qo(t,e){if(t.g){fg(t);const n=t.g,s=t.C[0]?Ji:null;t.g=null,t.C=null,e||Ue(t,"ready");try{n.onreadystatechange=s}catch{}}}function fg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function jt(t){return t.g?t.g.readyState:0}L.aa=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}};L.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ob(e)}};function Lh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ug:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}L.Ea=function(){return this.m};L.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function dg(t){let e="";return pu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ru(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=dg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):me(t,e,n))}function Ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function pg(t){this.Ca=0,this.i=[],this.j=new Lo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ys("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ys("baseRetryDelayMs",5e3,t),this.bb=Ys("retryDelaySeedMs",1e4,t),this.$a=Ys("forwardChannelMaxRetries",2,t),this.ta=Ys("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new sg(t&&t.concurrentRequestLimit),this.Fa=new sb,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}L=pg.prototype;L.ma=8;L.G=1;function ku(t){if(gg(t),t.G==3){var e=t.U++,n=Kt(t.F);me(n,"SID",t.I),me(n,"RID",e),me(n,"TYPE","terminate"),Qr(t,n),e=new Kr(t,t.j,e,void 0),e.K=2,e.v=Bo(Kt(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=Tg(e.l,null),e.g.da(e.v)),e.F=Date.now(),zr(e)}Eg(t)}function Ho(t){t.g&&(Nu(t),t.g.cancel(),t.g=null)}function gg(t){Ho(t),t.u&&(K.clearTimeout(t.u),t.u=null),so(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Ko(t){rg(t.h)||t.m||(t.m=!0,Up(t.Ja,t),t.C=0)}function lb(t,e){return ig(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=qr(Ke(t.Ja,t,e),_g(t,t.C)),t.C++,!0)}L.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Kr(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=kp(i),Dp(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=mg(this,r,e),n=Kt(this.F),me(n,"RID",t),me(n,"CVER",22),this.D&&me(n,"X-HTTP-Session-Id",this.D),Qr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(dg(i)))+"&"+e:this.o&&Ru(n,this.o,i)),Cu(this.h,r),this.Ya&&me(n,"TYPE","init"),this.O?(me(n,"$req",e),me(n,"SID","null"),r.Z=!0,pc(r,n,null)):pc(r,n,e),this.G=2}}else this.G==3&&(t?Uh(this,t):this.i.length==0||rg(this.h)||Uh(this))};function Uh(t,e){var n;e?n=e.m:n=t.U++;const s=Kt(t.F);me(s,"SID",t.I),me(s,"RID",n),me(s,"AID",t.T),Qr(t,s),t.o&&t.s&&Ru(s,t.o,t.s),n=new Kr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=mg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Cu(t.h,n),pc(n,s,e)}function Qr(t,e){t.ia&&pu(t.ia,function(n,s){me(e,s,n)}),t.l&&Xp({},function(n,s){me(e,s,n)})}function mg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Ke(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{rb(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function yg(t){t.g||t.u||(t.Z=1,Up(t.Ia,t),t.A=0)}function Du(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=qr(Ke(t.Ia,t),_g(t,t.A)),t.A++,!0)}L.Ia=function(){if(this.u=null,vg(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=qr(Ke(this.eb,this),t)}};L.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Je(10),Ho(this),vg(this))};function Nu(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function vg(t){t.g=new Kr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Kt(t.sa);me(e,"RID","rpc"),me(e,"SID",t.I),me(e,"CI",t.L?"0":"1"),me(e,"AID",t.T),me(e,"TYPE","xmlhttp"),Qr(t,e),t.o&&t.s&&Ru(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Bo(Kt(e)),n.s=null,n.P=!0,Gp(n,t)}L.cb=function(){this.v!=null&&(this.v=null,Ho(this),Du(this),Je(19))};function so(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function wg(t,e){var n=null;if(t.g==e){so(t),Nu(t),t.g=null;var s=2}else if(mc(t.h,e))n=e.D,og(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Uo(),Ue(s,new Hp(s,n)),Ko(t)}else yg(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&lb(t,e)||s==2&&Du(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:xn(t,5);break;case 4:xn(t,10);break;case 3:xn(t,6);break;default:xn(t,2)}}}function _g(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function xn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Ke(t.kb,t);n||(n=new Vn("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||to(n,"https"),Bo(n)),ib(n.toString(),s)}else Je(2);t.G=0,t.l&&t.l.va(e),Eg(t),gg(t)}L.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function Eg(t){if(t.G=0,t.la=[],t.l){const e=ag(t.h);(e.length!=0||t.i.length!=0)&&(Sh(t.la,e),Sh(t.la,t.i),t.h.i.length=0,fu(t.i),t.i.length=0),t.l.ua()}}function Ig(t,e,n){var s=n instanceof Vn?Kt(n):new Vn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),no(s,s.m);else{var r=K.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Vn(null,void 0);s&&to(i,s),e&&(i.g=e),r&&no(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&me(s,n,e),me(s,"VER",t.ma),Qr(t,s),s}function Tg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new we(new Wr({jb:!0})):new we(t.ra),e.Ka(t.H),e}function bg(){}L=bg.prototype;L.xa=function(){};L.wa=function(){};L.va=function(){};L.ua=function(){};L.Ra=function(){};function ro(){if(Ss&&!(10<=Number(AT)))throw Error("Environmental error: no available transport.")}ro.prototype.g=function(t,e){return new at(t,e)};function at(t,e){Me.call(this),this.g=new pg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Xi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Xi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Bs(this)}Fe(at,Me);at.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Je(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ig(t,null,t.V),Ko(t)};at.prototype.close=function(){ku(this.g)};at.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=wu(t),t=n);e.i.push(new tb(e.ab++,t)),e.G==3&&Ko(e)};at.prototype.M=function(){this.g.l=null,delete this.j,ku(this.g),delete this.g,at.X.M.call(this)};function Cg(t){Tu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Fe(Cg,Tu);function Sg(){bu.call(this),this.status=1}Fe(Sg,bu);function Bs(t){this.g=t}Fe(Bs,bg);Bs.prototype.xa=function(){Ue(this.g,"a")};Bs.prototype.wa=function(t){Ue(this.g,new Cg(t))};Bs.prototype.va=function(t){Ue(this.g,new Sg)};Bs.prototype.ua=function(){Ue(this.g,"b")};ro.prototype.createWebChannel=ro.prototype.g;at.prototype.send=at.prototype.u;at.prototype.open=at.prototype.m;at.prototype.close=at.prototype.close;Fo.NO_ERROR=0;Fo.TIMEOUT=8;Fo.HTTP_ERROR=6;Kp.COMPLETE="complete";zp.EventType=Hr;Hr.OPEN="a";Hr.CLOSE="b";Hr.ERROR="c";Hr.MESSAGE="d";Me.prototype.listen=Me.prototype.N;we.prototype.listenOnce=we.prototype.O;we.prototype.getLastError=we.prototype.Oa;we.prototype.getLastErrorCode=we.prototype.Ea;we.prototype.getStatus=we.prototype.aa;we.prototype.getResponseJson=we.prototype.Sa;we.prototype.getResponseText=we.prototype.fa;we.prototype.send=we.prototype.da;we.prototype.setWithCredentials=we.prototype.Ka;var hb=function(){return new ro},fb=function(){return Uo()},Oa=Fo,db=Kp,pb=Yn,Fh={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},gb=Wr,mi=zp,mb=we;const Vh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new Yc("@firebase/firestore");function $h(){return zn.logLevel}function U(t,...e){if(zn.logLevel<=re.DEBUG){const n=e.map(Ou);zn.debug(`Firestore (${js}): ${t}`,...n)}}function zt(t,...e){if(zn.logLevel<=re.ERROR){const n=e.map(Ou);zn.error(`Firestore (${js}): ${t}`,...n)}}function io(t,...e){if(zn.logLevel<=re.WARN){const n=e.map(Ou);zn.warn(`Firestore (${js}): ${t}`,...n)}}function Ou(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t="Unexpected state"){const e=`FIRESTORE (${js}) INTERNAL ASSERTION FAILED: `+t;throw zt(e),new Error(e)}function ge(t,e){t||H()}function Q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($e.UNAUTHENTICATED))}shutdown(){}}class vb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wb{constructor(e){this.t=e,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new dn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ge(typeof s.accessToken=="string"),new Ag(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new $e(e)}}class _b{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Eb{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new _b(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n($e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ib{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tb{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.T=n.token,new Ib(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=bb(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function oe(t,e){return t<e?-1:t>e?1:0}function As(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Re(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Re(0,0))}static max(){return new W(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n,s){n===void 0?n=0:n>e.length&&H(),s===void 0?s=e.length-n:s>e.length-n&&H(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Rr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pe extends Rr{construct(e,n,s){return new pe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new x(_.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const Cb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends Rr{construct(e,n,s){return new qe(e,n,s)}static isValidIdentifier(e){return Cb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new x(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new x(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new x(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new x(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(pe.fromString(e))}static fromName(e){return new $(pe.fromString(e).popFirst(5))}static empty(){return new $(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new pe(e.slice()))}}function Sb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=W.fromTimestamp(s===1e9?new Re(n+1,0):new Re(n,s));return new mn(r,$.empty(),e)}function Ab(t){return new mn(t.readTime,t.key,-1)}class mn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new mn(W.min(),$.empty(),-1)}static max(){return new mn(W.max(),$.empty(),-1)}}function Rb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Db{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==kb)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(r=>r?b.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new b((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new b((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Jr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Pu.ct=-1;function zo(t){return t==null}function oo(t){return t===0&&1/t==-1/0}function Nb(t){return typeof t=="number"&&Number.isInteger(t)&&!oo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||Le.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yi(this.root,e,this.comparator,!1)}getReverseIterator(){return new yi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yi(this.root,e,this.comparator,!0)}}class yi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Le.RED,this.left=r??Le.EMPTY,this.right=i??Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Le(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Le(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jh(this.data.getIterator())}getIteratorFrom(e){return new jh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ke(this.comparator);return n.data=e,n}}class jh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new ot([])}unionWith(e){let n=new ke(qe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return As(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Ob("Invalid base64 string: "+r):r}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const Pb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yn(t){if(ge(!!t),typeof t=="string"){let e=0;const n=Pb.exec(t);if(ge(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rs(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ng(t){const e=t.mapValue.fields.__previous_value__;return Dg(e)?Ng(e):e}function kr(t){const e=yn(t.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Dr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Dr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Dr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dg(t)?4:Mb(t)?9007199254740991:10:H()}function Ut(t,e){if(t===e)return!0;const n=Wn(t);if(n!==Wn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return kr(t).isEqual(kr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=yn(s.timestampValue),o=yn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Rs(s.bytesValue).isEqual(Rs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return be(s.geoPointValue.latitude)===be(r.geoPointValue.latitude)&&be(s.geoPointValue.longitude)===be(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return be(s.integerValue)===be(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=be(s.doubleValue),o=be(r.doubleValue);return i===o?oo(i)===oo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return As(t.arrayValue.values||[],e.arrayValue.values||[],Ut);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Bh(i)!==Bh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ut(i[a],o[a])))return!1;return!0}(t,e);default:return H()}}function Nr(t,e){return(t.values||[]).find(n=>Ut(n,e))!==void 0}function ks(t,e){if(t===e)return 0;const n=Wn(t),s=Wn(e);if(n!==s)return oe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=be(r.integerValue||r.doubleValue),a=be(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return qh(t.timestampValue,e.timestampValue);case 4:return qh(kr(t),kr(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Rs(r),a=Rs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=oe(o[c],a[c]);if(u!==0)return u}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=oe(be(r.latitude),be(i.latitude));return o!==0?o:oe(be(r.longitude),be(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=ks(o[c],a[c]);if(u)return u}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===vi.mapValue&&i===vi.mapValue)return 0;if(r===vi.mapValue)return 1;if(i===vi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=oe(a[l],u[l]);if(h!==0)return h;const d=ks(o[a[l]],c[u[l]]);if(d!==0)return d}return oe(a.length,u.length)}(t.mapValue,e.mapValue);default:throw H()}}function qh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=yn(t),s=yn(e),r=oe(n.seconds,s.seconds);return r!==0?r:oe(n.nanos,s.nanos)}function Ds(t){return yc(t)}function yc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=yn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Rs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=yc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${yc(s.fields[a])}`;return i+"}"}(t.mapValue):H();var e,n}function Hh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function vc(t){return!!t&&"integerValue"in t}function xu(t){return!!t&&"arrayValue"in t}function Kh(t){return!!t&&"nullValue"in t}function zh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Oi(t){return!!t&&"mapValue"in t}function ur(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Jn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ur(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ur(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Mb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.value=e}static empty(){return new nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Oi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ur(n)}setAll(e){let n=qe.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ur(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Oi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ut(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Oi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Jn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new nt(ur(this.value))}}function Og(t){const e=[];return Jn(t.fields,(n,s)=>{const r=new qe([n]);if(Oi(s)){const i=Og(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Be(e,0,W.min(),W.min(),W.min(),nt.empty(),0)}static newFoundDocument(e,n,s,r){return new Be(e,1,n,W.min(),s,r,0)}static newNoDocument(e,n){return new Be(e,2,n,W.min(),W.min(),nt.empty(),0)}static newUnknownDocument(e,n){return new Be(e,3,n,W.min(),W.min(),nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this.position=e,this.inclusive=n}}function Wh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=$.comparator($.fromName(o.referenceValue),n.key):s=ks(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Gh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ut(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n="asc"){this.field=e,this.dir=n}}function Lb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{}class Ae extends Pg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Fb(e,n,s):n==="array-contains"?new Bb(e,s):n==="in"?new jb(e,s):n==="not-in"?new qb(e,s):n==="array-contains-any"?new Hb(e,s):new Ae(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Vb(e,s):new $b(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ks(n,this.value)):n!==null&&Wn(this.value)===Wn(n)&&this.matchesComparison(ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class It extends Pg{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new It(e,n)}matches(e){return xg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function xg(t){return t.op==="and"}function Mg(t){return Ub(t)&&xg(t)}function Ub(t){for(const e of t.filters)if(e instanceof It)return!1;return!0}function wc(t){if(t instanceof Ae)return t.field.canonicalString()+t.op.toString()+Ds(t.value);if(Mg(t))return t.filters.map(e=>wc(e)).join(",");{const e=t.filters.map(n=>wc(n)).join(",");return`${t.op}(${e})`}}function Lg(t,e){return t instanceof Ae?function(n,s){return s instanceof Ae&&n.op===s.op&&n.field.isEqual(s.field)&&Ut(n.value,s.value)}(t,e):t instanceof It?function(n,s){return s instanceof It&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Lg(i,s.filters[o]),!0):!1}(t,e):void H()}function Ug(t){return t instanceof Ae?function(e){return`${e.field.canonicalString()} ${e.op} ${Ds(e.value)}`}(t):t instanceof It?function(e){return e.op.toString()+" {"+e.getFilters().map(Ug).join(" ,")+"}"}(t):"Filter"}class Fb extends Ae{constructor(e,n,s){super(e,n,s),this.key=$.fromName(s.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class Vb extends Ae{constructor(e,n){super(e,"in",n),this.keys=Fg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $b extends Ae{constructor(e,n){super(e,"not-in",n),this.keys=Fg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Fg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>$.fromName(s.referenceValue))}class Bb extends Ae{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xu(n)&&Nr(n.arrayValue,this.value)}}class jb extends Ae{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Nr(this.value.arrayValue,n)}}class qb extends Ae{constructor(e,n){super(e,"not-in",n)}matches(e){if(Nr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Nr(this.value.arrayValue,n)}}class Hb extends Ae{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Nr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Qh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Kb(t,e,n,s,r,i,o)}function Mu(t){const e=Q(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>wc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),zo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ds(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ds(s)).join(",")),e.ft=n}return e.ft}function Lu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Lb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Lg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gh(t.startAt,e.startAt)&&Gh(t.endAt,e.endAt)}function _c(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function zb(t,e,n,s,r,i,o,a){return new Xr(t,e,n,s,r,i,o,a)}function Vg(t){return new Xr(t)}function Yh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $g(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Uu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Bg(t){return t.collectionGroup!==null}function ys(t){const e=Q(t);if(e.dt===null){e.dt=[];const n=Uu(e),s=$g(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new lr(n)),e.dt.push(new lr(qe.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new lr(qe.keyField(),i))}}}return e.dt}function Wt(t){const e=Q(t);if(!e.wt)if(e.limitType==="F")e.wt=Qh(e.path,e.collectionGroup,ys(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ys(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new lr(i.field,o))}const s=e.endAt?new ao(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ao(e.startAt.position,e.startAt.inclusive):null;e.wt=Qh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function Ec(t,e){e.getFirstInequalityField(),Uu(t);const n=t.filters.concat([e]);return new Xr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ic(t,e,n){return new Xr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wo(t,e){return Lu(Wt(t),Wt(e))&&t.limitType===e.limitType}function jg(t){return`${Mu(Wt(t))}|lt:${t.limitType}`}function Tc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Ug(s)).join(", ")}]`),zo(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ds(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ds(s)).join(",")),`Target(${n})`}(Wt(t))}; limitType=${t.limitType})`}function Go(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):$.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of ys(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Wh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,ys(n),s)||n.endAt&&!function(r,i,o){const a=Wh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,ys(n),s))}(t,e)}function Wb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qg(t){return(e,n)=>{let s=!1;for(const r of ys(t)){const i=Gb(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Gb(t,e,n){const s=t.field.isKeyField()?$.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ks(a,c):H()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Jn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return kg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=new Oe($.comparator);function Gt(){return Qb}const Hg=new Oe($.comparator);function nr(...t){let e=Hg;for(const n of t)e=e.insert(n.key,n);return e}function Kg(t){let e=Hg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Mn(){return hr()}function zg(){return hr()}function hr(){return new qs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Yb=new Oe($.comparator),Jb=new ke($.comparator);function ee(...t){let e=Jb;for(const n of t)e=e.add(n);return e}const Xb=new ke(oe);function Wg(){return Xb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oo(e)?"-0":e}}function Qg(t){return{integerValue:""+t}}function Zb(t,e){return Nb(e)?Qg(e):Gg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this._=void 0}}function eC(t,e,n){return t instanceof co?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Or?Jg(t,e):t instanceof Pr?Xg(t,e):function(s,r){const i=Yg(s,r),o=Jh(i)+Jh(s._t);return vc(i)&&vc(s._t)?Qg(o):Gg(s.serializer,o)}(t,e)}function tC(t,e,n){return t instanceof Or?Jg(t,e):t instanceof Pr?Xg(t,e):n}function Yg(t,e){return t instanceof uo?vc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class co extends Qo{}class Or extends Qo{constructor(e){super(),this.elements=e}}function Jg(t,e){const n=Zg(e);for(const s of t.elements)n.some(r=>Ut(r,s))||n.push(s);return{arrayValue:{values:n}}}class Pr extends Qo{constructor(e){super(),this.elements=e}}function Xg(t,e){let n=Zg(e);for(const s of t.elements)n=n.filter(r=>!Ut(r,s));return{arrayValue:{values:n}}}class uo extends Qo{constructor(e,n){super(),this.serializer=e,this._t=n}}function Jh(t){return be(t.integerValue||t.doubleValue)}function Zg(t){return xu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function nC(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Or&&s instanceof Or||n instanceof Pr&&s instanceof Pr?As(n.elements,s.elements,Ut):n instanceof uo&&s instanceof uo?Ut(n._t,s._t):n instanceof co&&s instanceof co}(t.transform,e.transform)}class sC{constructor(e,n){this.version=e,this.transformResults=n}}class _t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _t}static exists(e){return new _t(void 0,e)}static updateTime(e){return new _t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yo{}function em(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nm(t.key,_t.none()):new Zr(t.key,t.data,_t.none());{const n=t.data,s=nt.empty();let r=new ke(qe.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new In(t.key,s,new ot(r.toArray()),_t.none())}}function rC(t,e,n){t instanceof Zr?function(s,r,i){const o=s.value.clone(),a=Zh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof In?function(s,r,i){if(!Pi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Zh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(tm(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function fr(t,e,n,s){return t instanceof Zr?function(r,i,o,a){if(!Pi(r.precondition,i))return o;const c=r.value.clone(),u=ef(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof In?function(r,i,o,a){if(!Pi(r.precondition,i))return o;const c=ef(r.fieldTransforms,a,i),u=i.data;return u.setAll(tm(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return Pi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function iC(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Yg(s.transform,r||null);i!=null&&(n===null&&(n=nt.empty()),n.set(s.field,i))}return n||null}function Xh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&As(n,s,(r,i)=>nC(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zr extends Yo{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class In extends Yo{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function tm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Zh(t,e,n){const s=new Map;ge(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,tC(o,a,n[r]))}return s}function ef(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,eC(i,o,e))}return s}class nm extends Yo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oC extends Yo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&rC(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=fr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=fr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=zg();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=em(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&As(this.mutations,e.mutations,(n,s)=>Xh(n,s))&&As(this.baseMutations,e.baseMutations,(n,s)=>Xh(n,s))}}class Fu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ge(e.mutations.length===s.length);let r=Yb;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Fu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,te;function lC(t){switch(t){default:return H();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function sm(t){if(t===void 0)return zt("GRPC error has no .code"),_.UNKNOWN;switch(t){case Te.OK:return _.OK;case Te.CANCELLED:return _.CANCELLED;case Te.UNKNOWN:return _.UNKNOWN;case Te.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Te.INTERNAL:return _.INTERNAL;case Te.UNAVAILABLE:return _.UNAVAILABLE;case Te.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Te.NOT_FOUND:return _.NOT_FOUND;case Te.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Te.ABORTED:return _.ABORTED;case Te.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Te.DATA_LOSS:return _.DATA_LOSS;default:return H()}}(te=Te||(Te={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return wi}static getOrCreateInstance(){return wi===null&&(wi=new Vu),wi}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let wi=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ei.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Jo(W.min(),r,Wg(),Gt(),ee())}}class ei{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ei(s,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class rm{constructor(e,n){this.targetId=e,this.Et=n}}class im{constructor(e,n,s=Ge.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class tf{constructor(){this.At=0,this.Rt=sf(),this.vt=Ge.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=ee(),n=ee(),s=ee();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:H()}}),new ei(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=sf()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class hC{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Gt(),this.qt=nf(),this.Ut=new ke(oe)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const s=e.targetId,r=e.Et.count,i=this.Yt(s);if(i){const o=i.target;if(_c(o))if(r===0){const a=new $(o.path);this.Qt(s,a,Be.newNoDocument(a,W.min()))}else ge(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Vu.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&_c(a.target)){const c=new $(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Be.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=ee();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Jo(e,n,this.Ut,this.Lt,s);return this.Lt=Gt(),this.qt=nf(),this.Ut=new ke(oe),r}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new tf,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new ke(oe),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new tf),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function nf(){return new Oe($.comparator)}function sf(){return new Oe($.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),dC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),pC=(()=>({and:"AND",or:"OR"}))();class gC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function lo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function om(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function mC(t,e){return lo(t,e.toTimestamp())}function Mt(t){return ge(!!t),W.fromTimestamp(function(e){const n=yn(e);return new Re(n.seconds,n.nanos)}(t))}function $u(t,e){return function(n){return new pe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function am(t){const e=pe.fromString(t);return ge(hm(e)),e}function bc(t,e){return $u(t.databaseId,e.path)}function Pa(t,e){const n=am(e);if(n.get(1)!==t.databaseId.projectId)throw new x(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(cm(n))}function Cc(t,e){return $u(t.databaseId,e)}function yC(t){const e=am(t);return e.length===4?pe.emptyPath():cm(e)}function Sc(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cm(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function rf(t,e,n){return{name:bc(t,e),fields:n.value.mapValue.fields}}function vC(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(ge(u===void 0||typeof u=="string"),Ge.fromBase64String(u||"")):(ge(u===void 0||u instanceof Uint8Array),Ge.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?_.UNKNOWN:sm(c.code);return new x(u,c.message||"")}(o);n=new im(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Pa(t,s.document.name),i=Mt(s.document.updateTime),o=s.document.createTime?Mt(s.document.createTime):W.min(),a=new nt({mapValue:{fields:s.document.fields}}),c=Be.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new xi(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Pa(t,s.document),i=s.readTime?Mt(s.readTime):W.min(),o=Be.newNoDocument(r,i),a=s.removedTargetIds||[];n=new xi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Pa(t,s.document),i=s.removedTargetIds||[];n=new xi([],i,r,null)}else{if(!("filter"in e))return H();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new uC(r),o=s.targetId;n=new rm(o,i)}}return n}function wC(t,e){let n;if(e instanceof Zr)n={update:rf(t,e.key,e.value)};else if(e instanceof nm)n={delete:bc(t,e.key)};else if(e instanceof In)n={update:rf(t,e.key,e.data),updateMask:RC(e.fieldMask)};else{if(!(e instanceof oC))return H();n={verify:bc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof co)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Or)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Pr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof uo)return{fieldPath:i.field.canonicalString(),increment:o._t};throw H()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:mC(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:H()}(t,e.precondition)),n}function _C(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Mt(s.updateTime):Mt(r);return i.isEqual(W.min())&&(i=Mt(r)),new sC(i,s.transformResults||[])}(n,e))):[]}function EC(t,e){return{documents:[Cc(t,e.path)]}}function IC(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Cc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Cc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return lm(It.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:as(l.field),direction:CC(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.useProto3Json||zo(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function TC(t){let e=yC(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ge(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=um(l);return h instanceof It&&Mg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new lr(cs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,zo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new ao(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new ao(d,h)}(n.endAt)),zb(e,r,o,i,a,"F",c,u)}function bC(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return H()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function um(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=cs(e.unaryFilter.field);return Ae.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=cs(e.unaryFilter.field);return Ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=cs(e.unaryFilter.field);return Ae.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=cs(e.unaryFilter.field);return Ae.create(i,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(e){return Ae.create(cs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return It.create(e.compositeFilter.filters.map(n=>um(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return H()}}(e.compositeFilter.op))}(t):H()}function CC(t){return fC[t]}function SC(t){return dC[t]}function AC(t){return pC[t]}function as(t){return{fieldPath:t.canonicalString()}}function cs(t){return qe.fromServerFormat(t.fieldPath)}function lm(t){return t instanceof Ae?function(e){if(e.op==="=="){if(zh(e.value))return{unaryFilter:{field:as(e.field),op:"IS_NAN"}};if(Kh(e.value))return{unaryFilter:{field:as(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(zh(e.value))return{unaryFilter:{field:as(e.field),op:"IS_NOT_NAN"}};if(Kh(e.value))return{unaryFilter:{field:as(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:as(e.field),op:SC(e.op),value:e.value}}}(t):t instanceof It?function(e){const n=e.getFilters().map(s=>lm(s));return n.length===1?n[0]:{compositeFilter:{op:AC(e.op),filters:n}}}(t):H()}function RC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function hm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,s,r,i=W.min(),o=W.min(),a=Ge.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.se=e}}function DC(t){const e=TC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ic(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(){this.He=new OC}addToCollectionParentIndex(e,n){return this.He.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(mn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(mn.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class OC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ke(pe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ke(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Ns(0)}static bn(){return new Ns(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(){this.changes=new qs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&fr(s.mutation,r,ot.empty(),Re.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ee()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ee()){const r=Mn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=nr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Mn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ee()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Gt();const o=hr(),a=hr();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof In)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),fr(l.mutation,u,l.mutation.getFieldMask(),Re.now())):o.set(u.key,ot.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new xC(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=hr();let r=new Oe((o,a)=>o-a),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||ot.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||ee()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=zg();l.forEach(d=>{if(!i.has(d)){const g=em(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return $.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Bg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):b.resolve(Mn());let a=-1,c=i;return o.next(u=>b.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?b.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ee())).next(l=>({batchId:a,changes:Kg(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(s=>{let r=nr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=nr();return this.indexManager.getCollectionParents(e,r).next(o=>b.forEach(o,a=>{const c=function(u,l){return new Xr(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,Be.newInvalidDocument(u)))});let o=nr();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&fr(u.mutation,c,ot.empty(),Re.now()),Go(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return b.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Mt(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:DC(s.bundledQuery),readTime:Mt(s.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(){this.overlays=new Oe($.comparator),this.ts=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Mn();return b.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.re(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=Mn(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Oe((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Mn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Mn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return b.resolve(a)}re(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new cC(n,s));let i=this.ts.get(n);i===void 0&&(i=ee(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(){this.es=new ke(xe.ns),this.ss=new ke(xe.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new xe(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new xe(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new $(new pe([])),s=new xe(n,e),r=new xe(n,e+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new $(new pe([])),s=new xe(n,e),r=new xe(n,e+1);let i=ee();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new xe(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class xe{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return $.comparator(e.key,n.key)||oe(e.ds,n.ds)}static rs(e,n){return oe(e.ds,n.ds)||$.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new ke(xe.ns)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new aC(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new xe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new xe(n,0),r=new xe(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ke(oe);return n.forEach(r=>{const i=new xe(r,0),o=new xe(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),b.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;$.isDocumentKey(i)||(i=i.child(""));const o=new xe(new $(i),0);let a=new ke(oe);return this._s.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.ds)),!0)},o),b.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ge(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return b.forEach(n.mutations,r=>{const i=new xe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new xe(n,0),r=this._s.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.Ts=e,this.docs=new Oe($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():Be.newInvalidDocument(n))}getEntries(e,n){let s=Gt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Be.newInvalidDocument(r))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Gt();const o=n.path,a=new $(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Rb(Ab(l),s)<=0||(r.has(l.key)||Go(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,s,r){H()}Es(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new $C(this)}getSize(e){return b.resolve(this.size)}}class $C extends PC{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.persistence=e,this.As=new qs(n=>Mu(n),Lu),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Bu,this.targetCount=0,this.bs=Ns.vn()}forEachTarget(e,n){return this.As.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),b.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Ns(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Sn(n),b.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Pu(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new BC(this),this.indexManager=new NC,this.remoteDocumentCache=function(s){return new VC(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new kC(n),this.xs=new LC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new FC(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const r=new qC(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return b.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class qC extends Db{constructor(e){super(),this.currentSequenceNumber=e}}class ju{constructor(e){this.persistence=e,this.$s=new Bu,this.Ms=null}static Fs(e){return new ju(e)}get Bs(){if(this.Ms)return this.Ms;throw H()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),b.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Bs,s=>{const r=$.fromPath(s);return this.Ls(e,r).next(i=>{i||n.removeEntry(r,W.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return b.or([()=>b.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=r}static Di(e,n){let s=ee(),r=ee();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new qu(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ni(e,n).next(i=>i||this.ki(e,n,r,s)).next(i=>i||this.Oi(e,n))}Ni(e,n){if(Yh(n))return b.resolve(null);let s=Wt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Ic(n,null,"F"),s=Wt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ee(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.$i(n,a);return this.Mi(n,u,o,c.readTime)?this.Ni(e,Ic(n,null,"F")):this.Fi(e,u,n,c)}))})))}ki(e,n,s,r){return Yh(n)||r.isEqual(W.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(e,n):($h()<=re.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Tc(n)),this.Fi(e,o,n,Sb(r,-1)))})}$i(e,n){let s=new ke(qg(e));return n.forEach((r,i)=>{Go(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return $h()<=re.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Tc(n)),this.xi.getDocumentsMatchingQuery(e,n,mn.min())}Fi(e,n,s,r){return this.xi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n,s,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new Oe(oe),this.qi=new qs(i=>Mu(i),Lu),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new MC(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function zC(t,e,n,s){return new KC(t,e,n,s)}async function fm(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ee();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function WC(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=b.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(v=>{const E=c.docVersions.get(g);ge(E!==null),v.version.compareTo(E)<0&&(l.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ee();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function dm(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function GC(t,e){const n=Q(t),s=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(i,l.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Ge.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(v,E,k){return v.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,g,l)&&a.push(n.Ds.updateTargetData(i,g))});let c=Gt(),u=ee();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(QC(i,o,e.documentUpdates).next(l=>{c=l.zi,u=l.ji})),!s.isEqual(W.min())){const l=n.Ds.getLastRemoteSnapshotVersion(i).next(h=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Li=r,i))}function QC(t,e,n){let s=ee(),r=ee();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Gt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(W.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{zi:o,ji:r}})}function YC(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function JC(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ds.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.Ds.allocateTargetId(s).next(o=>(r=new $n(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Ac(t,e,n){const s=Q(t),r=s.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Jr(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(r.target)}function of(t,e,n){const s=Q(t);let r=W.min(),i=ee();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=Q(a),h=l.qi.get(u);return h!==void 0?b.resolve(l.Li.get(h)):l.Ds.getTargetData(c,u)}(s,o,Wt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?r:W.min(),n?i:ee())).next(a=>(XC(s,Wb(e),a),{documents:a,Wi:i})))}function XC(t,e,n){let s=t.Ui.get(e)||W.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ui.set(e,s)}class af{constructor(){this.activeTargetIds=Wg()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZC{constructor(){this.Br=new af,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new af,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i=null;function xa(){return _i===null?_i=268435456+Math.round(2147483648*Math.random()):_i++,"0x"+_i.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="WebChannelConnection";class sS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,r,i){const o=xa(),a=this.ao(e,n);U("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,r,i),this.lo(e,a,c,s).then(u=>(U("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw io("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+js,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=tS[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){const i=xa();return new Promise((o,a)=>{const c=new mb;c.setWithCredentials(!0),c.listenOnce(db.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Oa.NO_ERROR:const l=c.getResponseJson();U(Ve,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case Oa.TIMEOUT:U(Ve,`RPC '${e}' ${i} timed out`),a(new x(_.DEADLINE_EXCEEDED,"Request time out"));break;case Oa.HTTP_ERROR:const h=c.getStatus();if(U(Ve,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const v=function(E){const k=E.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(k)>=0?k:_.UNKNOWN}(g.status);a(new x(v,g.message))}else a(new x(_.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new x(_.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{U(Ve,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);U(Ve,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}wo(e,n,s){const r=xa(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=hb(),a=fb(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new gb({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");U(Ve,`Creating RPC '${e}' stream ${r}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,d=!1;const g=new nS({Wr:E=>{d?U(Ve,`Not sending because RPC '${e}' stream ${r} is closed:`,E):(h||(U(Ve,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),U(Ve,`RPC '${e}' stream ${r} sending:`,E),l.send(E))},Hr:()=>l.close()}),v=(E,k,R)=>{E.listen(k,F=>{try{R(F)}catch(P){setTimeout(()=>{throw P},0)}})};return v(l,mi.EventType.OPEN,()=>{d||U(Ve,`RPC '${e}' stream ${r} transport opened.`)}),v(l,mi.EventType.CLOSE,()=>{d||(d=!0,U(Ve,`RPC '${e}' stream ${r} transport closed`),g.so())}),v(l,mi.EventType.ERROR,E=>{d||(d=!0,io(Ve,`RPC '${e}' stream ${r} transport errored:`,E),g.so(new x(_.UNAVAILABLE,"The operation could not be completed")))}),v(l,mi.EventType.MESSAGE,E=>{var k;if(!d){const R=E.data[0];ge(!!R);const F=R,P=F.error||((k=F[0])===null||k===void 0?void 0:k.error);if(P){U(Ve,`RPC '${e}' stream ${r} received error:`,P);const J=P.status;let fe=function(Qe){const Ze=Te[Qe];if(Ze!==void 0)return sm(Ze)}(J),_e=P.message;fe===void 0&&(fe=_.INTERNAL,_e="Unknown error status: "+J+" with message "+P.message),d=!0,g.so(new x(fe,_e)),l.close()}else U(Ve,`RPC '${e}' stream ${r} received:`,R),g.io(R)}}),v(a,pb.STAT_EVENT,E=>{E.stat===Fh.PROXY?U(Ve,`RPC '${e}' stream ${r} detected buffering proxy`):E.stat===Fh.NOPROXY&&U(Ve,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.no()},0),g}}function Ma(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t){return new gC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n,s,r,i,o,a,c){this.Ws=e,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new pm(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(zt(n.toString()),zt("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{e(()=>{const r=new x(_.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rS extends gm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=vC(this.serializer,e),s=function(r){if(!("targetChange"in r))return W.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?W.min():i.readTime?Mt(i.readTime):W.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=Sc(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=_c(a)?{documents:EC(r,a)}:{query:IC(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=om(r,i.resumeToken):i.snapshotVersion.compareTo(W.min())>0&&(o.readTime=lo(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=bC(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=Sc(this.serializer),n.removeTarget=e,this.Fo(n)}}class iS extends gm{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=_C(e.writeResults,e.commitTime),s=Mt(e.commitTime);return this.listener.Zo(s,n)}return ge(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Sc(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>wC(this.serializer,s))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new x(_.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new x(_.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(_.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class aS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(zt(n),this.ru=!1):U("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{Xn(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Q(a);c.du.add(4),await ti(c),c.mu.set("Unknown"),c.du.delete(4),await Zo(c)}(this))})}),this.mu=new aS(s,r)}}async function Zo(t){if(Xn(t))for(const e of t.wu)await e(!0)}async function ti(t){for(const e of t.wu)await e(!1)}function mm(t,e){const n=Q(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),zu(n)?Ku(n):Hs(n).No()&&Hu(n,e))}function ym(t,e){const n=Q(t),s=Hs(n);n.fu.delete(e),s.No()&&vm(n,e),n.fu.size===0&&(s.No()?s.$o():Xn(n)&&n.mu.set("Unknown"))}function Hu(t,e){t.gu.Ot(e.targetId),Hs(t).jo(e)}function vm(t,e){t.gu.Ot(e),Hs(t).Wo(e)}function Ku(t){t.gu=new hC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Hs(t).start(),t.mu.ou()}function zu(t){return Xn(t)&&!Hs(t).xo()&&t.fu.size>0}function Xn(t){return Q(t).du.size===0}function wm(t){t.gu=void 0}async function uS(t){t.fu.forEach((e,n)=>{Hu(t,e)})}async function lS(t,e){wm(t),zu(t)?(t.mu.au(e),Ku(t)):t.mu.set("Unknown")}async function hS(t,e,n){if(t.mu.set("Online"),e instanceof im&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ho(t,s)}else if(e instanceof xi?t.gu.Kt(e):e instanceof rm?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(W.min()))try{const s=await dm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.fu.get(c);u&&r.fu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(Ge.EMPTY_BYTE_STRING,c.snapshotVersion)),vm(r,a);const u=new $n(c.target,a,1,c.sequenceNumber);Hu(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await ho(t,s)}}async function ho(t,e,n){if(!Jr(e))throw e;t.du.add(1),await ti(t),t.mu.set("Offline"),n||(n=()=>dm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Zo(t)})}function _m(t,e){return e().catch(n=>ho(t,n,e))}async function ea(t){const e=Q(t),n=vn(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;fS(e);)try{const r=await YC(e.localStore,s);if(r===null){e.lu.length===0&&n.$o();break}s=r.batchId,dS(e,r)}catch(r){await ho(e,r)}Em(e)&&Im(e)}function fS(t){return Xn(t)&&t.lu.length<10}function dS(t,e){t.lu.push(e);const n=vn(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function Em(t){return Xn(t)&&!vn(t).xo()&&t.lu.length>0}function Im(t){vn(t).start()}async function pS(t){vn(t).tu()}async function gS(t){const e=vn(t);for(const n of t.lu)e.Yo(n.mutations)}async function mS(t,e,n){const s=t.lu.shift(),r=Fu.from(s,e,n);await _m(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ea(t)}async function yS(t,e){e&&vn(t).Jo&&await async function(n,s){if(r=s.code,lC(r)&&r!==_.ABORTED){const i=n.lu.shift();vn(n).Oo(),await _m(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ea(n)}var r}(t,e),Em(t)&&Im(t)}async function uf(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=Xn(n);n.du.add(3),await ti(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Zo(n)}async function vS(t,e){const n=Q(t);e?(n.du.delete(2),await Zo(n)):e||(n.du.add(2),await ti(n),n.mu.set("Unknown"))}function Hs(t){return t.yu||(t.yu=function(e,n,s){const r=Q(e);return r.nu(),new rS(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:uS.bind(null,t),Zr:lS.bind(null,t),zo:hS.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),zu(t)?Ku(t):t.mu.set("Unknown")):(await t.yu.stop(),wm(t))})),t.yu}function vn(t){return t.pu||(t.pu=function(e,n,s){const r=Q(e);return r.nu(),new iS(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:pS.bind(null,t),Zr:yS.bind(null,t),Xo:gS.bind(null,t),Zo:mS.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await ea(t)):(await t.pu.stop(),t.lu.length>0&&(U("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Wu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gu(t,e){if(zt("AsyncQueue",`${e}: ${t}`),Jr(t))return new x(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||$.comparator(n.key,s.key):(n,s)=>$.comparator(n.key,s.key),this.keyedMap=nr(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new vs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new vs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.Iu=new Oe($.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):H():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Os{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Os(e,n,vs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(){this.Eu=void 0,this.listeners=[]}}class _S{constructor(){this.queries=new qs(e=>jg(e),Wo),this.onlineState="Unknown",this.Au=new Set}}async function ES(t,e){const n=Q(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new wS),r)try{i.Eu=await n.onListen(s)}catch(o){const a=Gu(o,`Initialization of query '${Tc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&Qu(n)}async function IS(t,e){const n=Q(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function TS(t,e){const n=Q(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&Qu(n)}function bS(t,e,n){const s=Q(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Qu(t){t.Au.forEach(e=>{e.next()})}class CS{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Os(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.key=e}}class bm{constructor(e){this.key=e}}class SS{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ee(),this.mutatedKeys=ee(),this.Ku=qg(e),this.Gu=new vs(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new lf,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),g=Go(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;d&&g?d.data.isEqual(g.data)?v!==E&&(s.track({type:3,doc:g}),k=!0):this.Wu(d,g)||(s.track({type:2,doc:g}),k=!0,(c&&this.Ku(g,c)>0||u&&this.Ku(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),k=!0):d&&!g&&(s.track({type:1,doc:d}),k=!0,(c||u)&&(a=!0)),k&&(g?(o=o.add(g),i=E?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((u,l)=>function(h,d){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return g(h)-g(d)}(u.type,l.type)||this.Ku(u.doc,l.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Os(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new lf,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=ee(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new bm(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new Tm(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=ee();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Os.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class AS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class RS{constructor(e){this.key=e,this.ec=!1}}class kS{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new qs(a=>jg(a),Wo),this.ic=new Map,this.rc=new Set,this.oc=new Oe($.comparator),this.uc=new Map,this.cc=new Bu,this.ac={},this.hc=new Map,this.lc=Ns.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function DS(t,e){const n=$S(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await JC(n.localStore,Wt(e));n.isPrimaryClient&&mm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await NS(n,e,s,a==="current",o.resumeToken)}return r}async function NS(t,e,n,s,r){t.dc=(h,d,g)=>async function(v,E,k,R){let F=E.view.zu(k);F.Mi&&(F=await of(v.localStore,E.query,!1).then(({documents:fe})=>E.view.zu(fe,F)));const P=R&&R.targetChanges.get(E.targetId),J=E.view.applyChanges(F,v.isPrimaryClient,P);return ff(v,E.targetId,J.Yu),J.snapshot}(t,h,d,g);const i=await of(t.localStore,e,!0),o=new SS(e,i.Wi),a=o.zu(i.documents),c=ei.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);ff(t,n,u.Yu);const l=new AS(e,n,o);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function OS(t,e){const n=Q(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!Wo(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ac(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),ym(n.remoteStore,s.targetId),Rc(n,s.targetId)}).catch(Yr)):(Rc(n,s.targetId),await Ac(n.localStore,s.targetId,!0))}async function PS(t,e,n){const s=BS(t);try{const r=await function(i,o){const a=Q(i),c=Re.now(),u=o.reduce((d,g)=>d.add(g.key),ee());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Gt(),v=ee();return a.Ki.getEntries(d,u).next(E=>{g=E,g.forEach((k,R)=>{R.isValidDocument()||(v=v.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(E=>{l=E;const k=[];for(const R of o){const F=iC(R,l.get(R.key).overlayedDocument);F!=null&&k.push(new In(R.key,F,Og(F.value.mapValue),_t.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,k,o)}).next(E=>{h=E;const k=E.applyToLocalDocumentSet(l,v);return a.documentOverlayCache.saveOverlays(d,E.batchId,k)})}).then(()=>({batchId:h.batchId,changes:Kg(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new Oe(oe)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await ni(s,r.changes),await ea(s.remoteStore)}catch(r){const i=Gu(r,"Failed to persist write");n.reject(i)}}async function Cm(t,e){const n=Q(t);try{const s=await GC(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(ge(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?ge(o.ec):r.removedDocuments.size>0&&(ge(o.ec),o.ec=!1))}),await ni(n,s,e)}catch(s){await Yr(s)}}function hf(t,e,n){const s=Q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Q(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Ru(o)&&(c=!0)}),c&&Qu(a)}(s.eventManager,e),r.length&&s.nc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function xS(t,e,n){const s=Q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new Oe($.comparator);o=o.insert(i,Be.newNoDocument(i,W.min()));const a=ee().add(i),c=new Jo(W.min(),new Map,new ke(oe),o,a);await Cm(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),Yu(s)}else await Ac(s.localStore,e,!1).then(()=>Rc(s,e,n)).catch(Yr)}async function MS(t,e){const n=Q(t),s=e.batch.batchId;try{const r=await WC(n.localStore,e);Am(n,s,null),Sm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ni(n,r)}catch(r){await Yr(r)}}async function LS(t,e,n){const s=Q(t);try{const r=await function(i,o){const a=Q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(ge(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Am(s,e,n),Sm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ni(s,r)}catch(r){await Yr(r)}}function Sm(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Am(t,e,n){const s=Q(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function Rc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||Rm(t,s)})}function Rm(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(ym(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Yu(t))}function ff(t,e,n){for(const s of n)s instanceof Tm?(t.cc.addReference(s.key,e),US(t,s)):s instanceof bm?(U("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Rm(t,s.key)):H()}function US(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(U("SyncEngine","New document in limbo: "+n),t.rc.add(s),Yu(t))}function Yu(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new $(pe.fromString(e)),s=t.lc.next();t.uc.set(s,new RS(n)),t.oc=t.oc.insert(n,s),mm(t.remoteStore,new $n(Wt(Vg(n.path)),s,2,Pu.ct))}}async function ni(t,e,n){const s=Q(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=qu.Di(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,c){const u=Q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>b.forEach(c,h=>b.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>b.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Jr(l))throw l;U("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Li.get(h),g=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(g);u.Li=u.Li.insert(h,v)}}}(s.localStore,i))}async function FS(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await fm(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new x(_.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ni(n,s.Qi)}}function VS(t,e){const n=Q(t),s=n.uc.get(e);if(s&&s.ec)return ee().add(s.key);{let r=ee();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function $S(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xS.bind(null,e),e.nc.zo=TS.bind(null,e.eventManager),e.nc.wc=bS.bind(null,e.eventManager),e}function BS(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LS.bind(null,e),e}class df{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Xo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return zC(this.persistence,new HC,e.initialUser,this.serializer)}createPersistence(e){return new jC(ju.Fs,this.serializer)}createSharedClientState(e){return new ZC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=FS.bind(null,this.syncEngine),await vS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new _S}createDatastore(e){const n=Xo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new sS(r));var r;return function(i,o,a,c){return new oS(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>hf(this.syncEngine,a,0),o=cf.D()?new cf:new eS,new cS(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new kS(s,r,i,o,a,c);return u&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);U("RemoteStore","RemoteStore shutting down."),n.du.add(5),await ti(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):zt("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=$e.UNAUTHENTICATED,this.clientId=Rg.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Gu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function La(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await fm(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function pf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zS(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>uf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>uf(e.remoteStore,i)),t._onlineComponents=e}function KS(t){return t.name==="FirebaseError"?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function zS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await La(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!KS(n))throw n;io("Error using user provided cache. Falling back to memory cache: "+n),await La(t,new df)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await La(t,new df);return t._offlineComponents}async function km(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await pf(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await pf(t,new jS))),t._onlineComponents}function WS(t){return km(t).then(e=>e.syncEngine)}async function GS(t){const e=await km(t),n=e.eventManager;return n.onListen=DS.bind(null,e.syncEngine),n.onUnlisten=OS.bind(null,e.syncEngine),n}function QS(t,e,n={}){const s=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new qS({next:h=>{i.enqueueAndForget(()=>IS(r,l)),h.fromCache&&a.source==="server"?c.reject(new x(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new CS(o,u,{includeMetadataChanges:!0,xu:!0});return ES(r,l)}(await GS(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(t,e,n){if(!n)throw new x(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YS(t,e,n,s){if(e===!0&&s===!0)throw new x(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mf(t){if(!$.isDocumentKey(t))throw new x(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yf(t){if($.isDocumentKey(t))throw new x(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ta(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ta(t);throw new x(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new x(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,YS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new yb;switch(n.type){case"firstParty":return new Eb(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=gf.get(e);n&&(U("ComponentProvider","Removing Datastore"),gf.delete(e),n.terminate())}(this),Promise.resolve()}}function JS(t,e,n,s={}){var r;const i=(t=wn(t,na))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&io("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=$e.MOCK_USER;else{o=Tw(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new x(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new $e(c)}t._authCredentials=new vb(new Ag(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}}class Ks{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ks(this.firestore,e,this._query)}}class pn extends Ks{constructor(e,n,s){super(e,n,Vg(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new $(e))}withConverter(e){return new pn(this.firestore,e,this._path)}}function DA(t,e,...n){if(t=Ne(t),Dm("collection","path",e),t instanceof na){const s=pe.fromString(e,...n);return yf(s),new pn(t,null,s)}{if(!(t instanceof st||t instanceof pn))throw new x(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(pe.fromString(e,...n));return yf(s),new pn(t.firestore,null,s)}}function XS(t,e,...n){if(t=Ne(t),arguments.length===1&&(e=Rg.A()),Dm("doc","path",e),t instanceof na){const s=pe.fromString(e,...n);return mf(s),new st(t,null,new $(s))}{if(!(t instanceof st||t instanceof pn))throw new x(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(pe.fromString(e,...n));return mf(s),new st(t.firestore,t instanceof pn?t.converter:null,new $(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new pm(this,"async_queue_retry"),this.qc=()=>{const n=Ma();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Ma();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Ma();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new dn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Jr(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw zt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=Wu.createAndSchedule(this,e,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&H()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class si extends na{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new ZS,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Om(this),this._firestoreClient.terminate()}}function eA(t,e){const n=typeof t=="object"?t:Dd(),s=typeof t=="string"?t:e||"(default)",r=Xc(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=_w("firestore");i&&JS(r,...i)}return r}function Nm(t){return t._firestoreClient||Om(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Om(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,u){return new xb(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new HS(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ps(Ge.fromBase64String(e))}catch(n){throw new x(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ps(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=/^__.*__$/;class nA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new In(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zr(e,this.data,n,this.fieldTransforms)}}class Pm{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new In(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function xm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class Zu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Zu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.ea(e),r}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return fo(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(xm(this.Yc)&&tA.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class sA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Xo(e)}ua(e,n,s,r=!1){return new Zu({Yc:e,methodName:n,oa:s,path:qe.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ra(t){const e=t._freezeSettings(),n=Xo(t._databaseId);return new sA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Mm(t,e,n,s,r,i={}){const o=t.ua(i.merge||i.mergeFields?2:0,e,n,r);el("Data must be an object, but it was:",o,s);const a=Lm(s,o);let c,u;if(i.merge)c=new ot(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=kc(e,h,n);if(!o.contains(d))throw new x(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Fm(l,d)||l.push(d)}c=new ot(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new nA(new nt(a),c,u)}class ia extends Ju{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ia}}function rA(t,e,n,s){const r=t.ua(1,e,n);el("Data must be an object, but it was:",r,s);const i=[],o=nt.empty();Jn(s,(c,u)=>{const l=tl(e,c,n);u=Ne(u);const h=r.na(l);if(u instanceof ia)i.push(l);else{const d=ri(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new ot(i);return new Pm(o,a,r.fieldTransforms)}function iA(t,e,n,s,r,i){const o=t.ua(1,e,n),a=[kc(e,s,n)],c=[r];if(i.length%2!=0)throw new x(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(kc(e,i[d])),c.push(i[d+1]);const u=[],l=nt.empty();for(let d=a.length-1;d>=0;--d)if(!Fm(u,a[d])){const g=a[d];let v=c[d];v=Ne(v);const E=o.na(g);if(v instanceof ia)u.push(g);else{const k=ri(v,E);k!=null&&(u.push(g),l.set(g,k))}}const h=new ot(u);return new Pm(l,h,o.fieldTransforms)}function oA(t,e,n,s=!1){return ri(n,t.ua(s?4:3,e))}function ri(t,e){if(Um(t=Ne(t)))return el("Unsupported field value:",e,t),Lm(t,e);if(t instanceof Ju)return function(n,s){if(!xm(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=ri(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ne(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Zb(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Re.fromDate(n);return{timestampValue:lo(s.serializer,r)}}if(n instanceof Re){const r=new Re(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:lo(s.serializer,r)}}if(n instanceof Xu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ps)return{bytesValue:om(s.serializer,n._byteString)};if(n instanceof st){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:$u(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${ta(n)}`)}(t,e)}function Lm(t,e){const n={};return kg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jn(t,(s,r)=>{const i=ri(r,e.Xc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Um(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof Xu||t instanceof Ps||t instanceof st||t instanceof Ju)}function el(t,e,n){if(!Um(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ta(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function kc(t,e,n){if((e=Ne(e))instanceof sa)return e._internalPath;if(typeof e=="string")return tl(t,e);throw fo("Field path arguments must be of type string or ",t,!1,void 0,n)}const aA=new RegExp("[~\\*/\\[\\]]");function tl(t,e,n){if(e.search(aA)>=0)throw fo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sa(...e.split("."))._internalPath}catch{throw fo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new x(_.INVALID_ARGUMENT,a+t+c)}function Fm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(nl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cA extends Vm{data(){return super.data()}}function nl(t,e){return typeof e=="string"?tl(t,e):e instanceof sa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sl{}class lA extends sl{}function NA(t,e,...n){let s=[];e instanceof sl&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof rl).length,o=r.filter(a=>a instanceof oa).length;if(i>1||i>0&&o>0)throw new x(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class oa extends lA{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new oa(e,n,s)}_apply(e){const n=this._parse(e);return $m(e._query,n),new Ks(e.firestore,e.converter,Ec(e._query,n))}_parse(e){const n=ra(e.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new x(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){_f(l,u);const d=[];for(const g of l)d.push(wf(a,r,g));h={arrayValue:{values:d}}}else h=wf(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||_f(l,u),h=oA(o,i,l,u==="in"||u==="not-in");return Ae.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function OA(t,e,n){const s=e,r=nl("where",t);return oa._create(r,s,n)}class rl extends sl{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new rl(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:It.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)$m(i,a),i=Ec(i,a)}(e._query,n),new Ks(e.firestore,e.converter,Ec(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function wf(t,e,n){if(typeof(n=Ne(n))=="string"){if(n==="")throw new x(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bg(e)&&n.indexOf("/")!==-1)throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(pe.fromString(n));if(!$.isDocumentKey(s))throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Hh(t,new $(s))}if(n instanceof st)return Hh(t,n._key);throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ta(n)}.`)}function _f(t,e){if(!Array.isArray(t)||t.length===0)throw new x(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $m(t,e){if(e.isInequality()){const s=Uu(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new x(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=$g(t);i!==null&&hA(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function hA(t,e,n){if(!n.isEqual(e))throw new x(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class fA{convertValue(e,n="none"){switch(Wn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){const s={};return Jn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Xu(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ng(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(kr(e));default:return null}}convertTimestamp(e){const n=yn(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=pe.fromString(e);ge(hm(s));const r=new Dr(s.get(1),s.get(3)),i=new $(s.popFirst(5));return r.isEqual(n)||zt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dA extends Vm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Mi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(nl("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Mi extends dA{data(e={}){return super.data(e)}}class pA{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ei(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Mi(this._firestore,this._userDataWriter,s.key,s,new Ei(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Mi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ei(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Mi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ei(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:gA(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function gA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}class mA extends fA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ps(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,n)}}function PA(t){t=wn(t,Ks);const e=wn(t.firestore,si),n=Nm(e),s=new mA(e);return uA(t._query),QS(n,t._query).then(r=>new pA(e,s,t,r))}function xA(t,e,n){t=wn(t,st);const s=wn(t.firestore,si),r=Bm(t.converter,e,n);return il(s,[Mm(ra(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,_t.none())])}function MA(t,e,n,...s){t=wn(t,st);const r=wn(t.firestore,si),i=ra(r);let o;return o=typeof(e=Ne(e))=="string"||e instanceof sa?iA(i,"updateDoc",t._key,e,n,s):rA(i,"updateDoc",t._key,e),il(r,[o.toMutation(t._key,_t.exists(!0))])}function LA(t,e){const n=wn(t.firestore,si),s=XS(t),r=Bm(t.converter,e);return il(n,[Mm(ra(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,_t.exists(!1))]).then(()=>s)}function il(t,e){return function(n,s){const r=new dn;return n.asyncQueue.enqueueAndForget(async()=>PS(await WS(n),s,r)),r.promise}(Nm(t),e)}(function(t,e=!0){(function(n){js=n})(Us),Is(new jn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new si(new wb(n.getProvider("auth-internal")),new Tb(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new x(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),fn(Vh,"3.10.1",t),fn(Vh,"3.10.1","esm2017")})();const yA=kd(fT),UA=eA(yA),jm=hw(hT);jm.use(Yi);jm.mount("#app");export{ad as A,ds as B,jn as C,Ce as D,ss as E,Rt as F,NA as G,OA as H,UA as I,rs as J,SA as K,MA as L,Yi as M,Av as N,PE as O,RA as P,Dv as Q,CA as R,Us as S,rn as T,AA as U,bA as V,LA as W,Xc as _,Pe as a,_A as b,yd as c,vA as d,xA as e,fT as f,XS as g,wA as h,kd as i,IA as j,Ne as k,_w as l,Dd as m,Is as n,Gc as o,fn as p,Tw as q,xr as r,DA as s,PA as t,Yt as u,EA as v,eA as w,TA as x,uu as y,jf as z};

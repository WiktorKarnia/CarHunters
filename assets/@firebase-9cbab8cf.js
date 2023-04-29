import{_ as gr}from"./tslib-4b8363ab.js";import{o as _h}from"./idb-f62f60ab.js";/**
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
 */const Qa=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Eh=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ya={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(n[l],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Eh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw new Ih;const d=r<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const w=u<<6&192|h;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ih extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Th=function(t){const e=Qa(t);return Ya.encodeByteArray(e,!0)},ds=function(t){return Th(t).replace(/\./g,"")},Xa=function(t){try{return Ya.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sh=()=>bh().__FIREBASE_DEFAULTS__,Ah=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ch=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xa(t[1]);return e&&JSON.parse(e)},Us=()=>{try{return Sh()||Ah()||Ch()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ja=t=>{var e,n;return(n=(e=Us())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Za=t=>{const e=Ja(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},kh=()=>{var t;return(t=Us())===null||t===void 0?void 0:t.config},ec=t=>{var e;return(e=Us())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Rh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function tc(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ds(JSON.stringify(n)),ds(JSON.stringify(o)),a].join(".")}/**
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
 */function oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(oe())}function Dh(){var t;const e=(t=Us())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Oh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ph(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lh(){const t=oe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Mh(){try{return typeof indexedDB=="object"}catch{return!1}}function xh(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Uh="FirebaseError";class Ae extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Uh,Object.setPrototypeOf(this,Ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,In.prototype.create)}}class In{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Fh(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ae(i,a,s)}}function Fh(t,e){return t.replace(Vh,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Vh=/\{\$([^}]+)}/g;function $h(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ko(r)&&ko(o)){if(!fs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ko(t){return t!==null&&typeof t=="object"}/**
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
 */function Tn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Qt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Yt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Bh(t,e){const n=new qh(t,e);return n.subscribe.bind(n)}class qh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");jh(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=wi),i.error===void 0&&(i.error=wi),i.complete===void 0&&(i.complete=wi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wi(){}/**
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
 */function V(t){return t&&t._delegate?t._delegate:t}class Ke{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const et="[DEFAULT]";/**
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
 */class Hh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Rh;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kh(e))try{this.getOrInitializeService({instanceIdentifier:et})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=et){return this.instances.has(e)}getOptions(e=et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zh(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=et){return this.component?this.component.multipleInstances?e:et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zh(t){return t===et?void 0:t}function Kh(t){return t.instantiationMode==="EAGER"}/**
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
 */class Gh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Hh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var N;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(N||(N={}));const Wh={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Qh=N.INFO,Yh={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Xh=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Yh[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mr{constructor(e){this.name=e,this._logLevel=Qh,this._logHandler=Xh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}/**
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
 */class Jh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Zh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vi="@firebase/app",Ro="0.9.8";/**
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
 */const ut=new mr("@firebase/app"),ed="@firebase/app-compat",td="@firebase/analytics-compat",nd="@firebase/analytics",sd="@firebase/app-check-compat",id="@firebase/app-check",rd="@firebase/auth",od="@firebase/auth-compat",ad="@firebase/database",cd="@firebase/database-compat",ud="@firebase/functions",ld="@firebase/functions-compat",hd="@firebase/installations",dd="@firebase/installations-compat",fd="@firebase/messaging",pd="@firebase/messaging-compat",gd="@firebase/performance",md="@firebase/performance-compat",yd="@firebase/remote-config",vd="@firebase/remote-config-compat",wd="@firebase/storage",_d="@firebase/storage-compat",Ed="@firebase/firestore",Id="@firebase/firestore-compat",Td="firebase",bd="9.20.0";/**
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
 */const $i="[DEFAULT]",Sd={[Vi]:"fire-core",[ed]:"fire-core-compat",[nd]:"fire-analytics",[td]:"fire-analytics-compat",[id]:"fire-app-check",[sd]:"fire-app-check-compat",[rd]:"fire-auth",[od]:"fire-auth-compat",[ad]:"fire-rtdb",[cd]:"fire-rtdb-compat",[ud]:"fire-fn",[ld]:"fire-fn-compat",[hd]:"fire-iid",[dd]:"fire-iid-compat",[fd]:"fire-fcm",[pd]:"fire-fcm-compat",[gd]:"fire-perf",[md]:"fire-perf-compat",[yd]:"fire-rc",[vd]:"fire-rc-compat",[wd]:"fire-gcs",[_d]:"fire-gcs-compat",[Ed]:"fire-fst",[Id]:"fire-fst-compat","fire-js":"fire-js",[Td]:"fire-js-all"};/**
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
 */const ps=new Map,Bi=new Map;function Ad(t,e){try{t.container.addComponent(e)}catch(n){ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(Bi.has(e))return ut.debug(`There were multiple attempts to register component ${e}.`),!1;Bi.set(e,t);for(const n of ps.values())Ad(n,t);return!0}function Fs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Cd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},je=new In("app","Firebase",Cd);/**
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
 */class kd{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ke("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw je.create("app-deleted",{appName:this._name})}}/**
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
 */const mt=bd;function Rd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:$i,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw je.create("bad-app-name",{appName:String(i)});if(n||(n=kh()),!n)throw je.create("no-options");const r=ps.get(i);if(r){if(fs(n,r.options)&&fs(s,r.config))return r;throw je.create("duplicate-app",{appName:i})}const o=new Gh(i);for(const c of Bi.values())o.addComponent(c);const a=new kd(n,s,o);return ps.set(i,a),a}function yr(t=$i){const e=ps.get(t);if(!e&&t===$i)return Rd();if(!e)throw je.create("no-app",{appName:t});return e}function Ne(t,e,n){var s;let i=(s=Sd[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ut.warn(a.join(" "));return}lt(new Ke(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Nd="firebase-heartbeat-database",Dd=1,cn="firebase-heartbeat-store";let _i=null;function nc(){return _i||(_i=_h(Nd,Dd,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(cn)}}}).catch(t=>{throw je.create("idb-open",{originalErrorMessage:t.message})})),_i}async function Od(t){try{return(await nc()).transaction(cn).objectStore(cn).get(sc(t))}catch(e){if(e instanceof Ae)ut.warn(e.message);else{const n=je.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ut.warn(n.message)}}}async function No(t,e){try{const s=(await nc()).transaction(cn,"readwrite");return await s.objectStore(cn).put(e,sc(t)),s.done}catch(n){if(n instanceof Ae)ut.warn(n.message);else{const s=je.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ut.warn(s.message)}}}function sc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Pd=1024,Ld=30*24*60*60*1e3;class Md{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ud(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Do();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Ld}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Do(),{heartbeatsToSend:n,unsentEntries:s}=xd(this._heartbeatsCache.heartbeats),i=ds(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Do(){return new Date().toISOString().substring(0,10)}function xd(t,e=Pd){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Oo(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Oo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ud{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mh()?xh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Od(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return No(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return No(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Oo(t){return ds(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Fd(t){lt(new Ke("platform-logger",e=>new Jh(e),"PRIVATE")),lt(new Ke("heartbeat",e=>new Md(e),"PRIVATE")),Ne(Vi,Ro,t),Ne(Vi,Ro,"esm2017"),Ne("fire-js","")}Fd("");function ic(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vd=ic,rc=new In("auth","Firebase",ic());/**
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
 */const gs=new mr("@firebase/auth");function $d(t,...e){gs.logLevel<=N.WARN&&gs.warn(`Auth (${mt}): ${t}`,...e)}function is(t,...e){gs.logLevel<=N.ERROR&&gs.error(`Auth (${mt}): ${t}`,...e)}/**
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
 */function me(t,...e){throw vr(t,...e)}function Ie(t,...e){return vr(t,...e)}function oc(t,e,n){const s=Object.assign(Object.assign({},Vd()),{[e]:n});return new In("auth","Firebase",s).create(e,{appName:t.name})}function Bd(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&me(t,"argument-error"),oc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vr(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return rc.create(t,...e)}function T(t,e,...n){if(!t)throw vr(e,...n)}function Ce(t){const e="INTERNAL ASSERTION FAILED: "+t;throw is(e),new Error(e)}function De(t,e){t||Ce(e)}/**
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
 */function qi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qd(){return Po()==="http:"||Po()==="https:"}function Po(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function jd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qd()||Oh()||"connection"in navigator)?navigator.onLine:!0}function Hd(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class bn{constructor(e,n){this.shortDelay=e,this.longDelay=n,De(n>e,"Short delay should be less than long delay!"),this.isMobile=Nh()||Ph()}get(){return jd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wr(t,e){De(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ac{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ce("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ce("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ce("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Kd=new bn(3e4,6e4);function Vt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yt(t,e,n,s,i={}){return cc(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Tn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ac.fetch()(uc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function cc(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},zd),e);try{const i=new Gd(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Kn(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Kn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Kn(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw oc(t,l,u);me(t,l)}}catch(i){if(i instanceof Ae)throw i;me(t,"network-request-failed",{message:String(i)})}}async function Sn(t,e,n,s,i={}){const r=await yt(t,e,n,s,i);return"mfaPendingCredential"in r&&me(t,"multi-factor-auth-required",{_serverResponse:r}),r}function uc(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?wr(t.config,i):`${t.config.apiScheme}://${i}`}class Gd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ie(this.auth,"network-request-failed")),Kd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Kn(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ie(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function Wd(t,e){return yt(t,"POST","/v1/accounts:delete",e)}async function Qd(t,e){return yt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function en(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yd(t,e=!1){const n=V(t),s=await n.getIdToken(e),i=_r(s);T(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:en(Ei(i.auth_time)),issuedAtTime:en(Ei(i.iat)),expirationTime:en(Ei(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ei(t){return Number(t)*1e3}function _r(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return is("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xa(n);return i?JSON.parse(i):(is("Failed to decode base64 JWT payload"),null)}catch(i){return is("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Xd(t){const e=_r(t);return T(e,"internal-error"),T(typeof e.exp<"u","internal-error"),T(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Nt(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ae&&Jd(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Jd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Zd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=en(this.lastLoginAt),this.creationTime=en(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ms(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Nt(t,Qd(n,{idToken:s}));T(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?nf(r.providerUserInfo):[],a=tf(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new lc(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function ef(t){const e=V(t);await ms(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tf(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function nf(t){return t.map(e=>{var{providerId:n}=e,s=gr(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function sf(t,e){const n=await cc(t,{},async()=>{const s=Tn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=uc(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ac.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken<"u","internal-error"),T(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await sf(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new un;return s&&(T(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(T(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(T(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new un,this.toJSON())}_performRefresh(){return Ce("not implemented")}}/**
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
 */function Ue(t,e){T(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=gr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new lc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Nt(this,this.stsTokenManager.getToken(this.auth,e));return T(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Yd(this,e)}reload(){return ef(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ms(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Nt(this,Wd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:x,emailVerified:F,isAnonymous:de,providerData:_e,stsTokenManager:It}=n;T(x&&It,e,"internal-error");const xe=un.fromJSON(this.name,It);T(typeof x=="string",e,"internal-error"),Ue(h,e.name),Ue(d,e.name),T(typeof F=="boolean",e,"internal-error"),T(typeof de=="boolean",e,"internal-error"),Ue(g,e.name),Ue(w,e.name),Ue(E,e.name),Ue(I,e.name),Ue(O,e.name),Ue(M,e.name);const vi=new rt({uid:x,auth:e,email:d,emailVerified:F,displayName:h,isAnonymous:de,photoURL:w,phoneNumber:g,tenantId:E,stsTokenManager:xe,createdAt:O,lastLoginAt:M});return _e&&Array.isArray(_e)&&(vi.providerData=_e.map(wh=>Object.assign({},wh))),I&&(vi._redirectEventId=I),vi}static async _fromIdTokenResponse(e,n,s=!1){const i=new un;i.updateFromServerResponse(n);const r=new rt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ms(r),r}}/**
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
 */const Lo=new Map;function ke(t){De(t instanceof Function,"Expected a class definition");let e=Lo.get(t);return e?(De(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lo.set(t,e),e)}/**
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
 */class hc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hc.type="NONE";const Mo=hc;/**
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
 */function rs(t,e,n){return`firebase:${t}:${e}:${n}`}class At{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=rs(this.userKey,i.apiKey,r),this.fullPersistenceKey=rs("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new At(ke(Mo),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||ke(Mo);const o=rs(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=rt._fromJSON(e,l);u!==r&&(a=h),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new At(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new At(r,e,s))}}/**
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
 */function xo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mc(e))return"Blackberry";if(yc(e))return"Webos";if(Er(e))return"Safari";if((e.includes("chrome/")||fc(e))&&!e.includes("edge/"))return"Chrome";if(gc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function dc(t=oe()){return/firefox\//i.test(t)}function Er(t=oe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fc(t=oe()){return/crios\//i.test(t)}function pc(t=oe()){return/iemobile/i.test(t)}function gc(t=oe()){return/android/i.test(t)}function mc(t=oe()){return/blackberry/i.test(t)}function yc(t=oe()){return/webos/i.test(t)}function Vs(t=oe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rf(t=oe()){var e;return Vs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function of(){return Lh()&&document.documentMode===10}function vc(t=oe()){return Vs(t)||gc(t)||yc(t)||mc(t)||/windows phone/i.test(t)||pc(t)}function af(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function wc(t,e=[]){let n;switch(t){case"Browser":n=xo(oe());break;case"Worker":n=`${xo(oe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mt}/${s}`}async function _c(t,e){return yt(t,"GET","/v2/recaptchaConfig",Vt(t,e))}function Uo(t){return t!==void 0&&t.enterprise!==void 0}class Ec{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function cf(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ic(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ie("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",cf().appendChild(s)})}function uf(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const lf="https://www.google.com/recaptcha/enterprise.js?render=",hf="recaptcha-enterprise";class Tc{constructor(e){this.type=hf,this.auth=vt(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{_c(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Ec(c);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;Uo(c)?c.enterprise.ready(()=>{try{c.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(u=>{a(u)})}catch(u){a(u)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Uo(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ic(lf+a).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ys(t,e,n,s=!1){const i=new Tc(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class df{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class ff{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fo(this),this.idTokenSubscription=new Fo(this),this.beforeStateQueue=new df(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ke(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await At.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ms(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?V(e):null;return n&&T(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ke(e))})}async initializeRecaptchaConfig(){const e=await _c(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Ec(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Tc(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new In("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ke(e)||this._popupRedirectResolver;T(n,this,"argument-error"),this.redirectPersistenceManager=await At.create(this,[ke(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return T(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$d(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vt(t){return V(t)}class Fo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bh(n=>this.observer=n)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function pf(t,e){const n=Fs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(fs(r,e??{}))return i;me(i,"already-initialized")}return n.initialize({options:e})}function gf(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ke);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function mf(t,e,n){const s=vt(t);T(s._canInitEmulator,s,"emulator-config-failed"),T(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=bc(e),{host:o,port:a}=yf(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||vf()}function bc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yf(t){const e=bc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Vo(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Vo(o)}}}function Vo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vf(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ir{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ce("not implemented")}_getIdTokenResponse(e){return Ce("not implemented")}_linkToIdToken(e,n){return Ce("not implemented")}_getReauthenticationResolver(e){return Ce("not implemented")}}async function wf(t,e){return yt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ii(t,e){return Sn(t,"POST","/v1/accounts:signInWithPassword",Vt(t,e))}/**
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
 */async function _f(t,e){return Sn(t,"POST","/v1/accounts:signInWithEmailLink",Vt(t,e))}async function Ef(t,e){return Sn(t,"POST","/v1/accounts:signInWithEmailLink",Vt(t,e))}/**
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
 */class ln extends Ir{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ln(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ln(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await ys(e,s,"signInWithPassword");return Ii(e,i)}else return Ii(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await ys(e,s,"signInWithPassword");return Ii(e,r)}else return Promise.reject(i)});case"emailLink":return _f(e,{email:this._email,oobCode:this._password});default:me(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return wf(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ef(e,{idToken:n,email:this._email,oobCode:this._password});default:me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ct(t,e){return Sn(t,"POST","/v1/accounts:signInWithIdp",Vt(t,e))}/**
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
 */const If="http://localhost";class ht extends Ir{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):me("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=gr(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ht(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ct(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ct(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ct(e,n)}buildRequest(){const e={requestUri:If,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Tn(n)}return e}}/**
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
 */function Tf(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bf(t){const e=Qt(Yt(t)).link,n=e?Qt(Yt(e)).deep_link_id:null,s=Qt(Yt(t)).deep_link_id;return(s?Qt(Yt(s)).link:null)||s||n||e||t}class Tr{constructor(e){var n,s,i,r,o,a;const c=Qt(Yt(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=Tf((i=c.mode)!==null&&i!==void 0?i:null);T(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=bf(e);try{return new Tr(n)}catch{return null}}}/**
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
 */class $t{constructor(){this.providerId=$t.PROVIDER_ID}static credential(e,n){return ln._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Tr.parseLink(n);return T(s,"argument-error"),ln._fromEmailAndCode(e,s.code,s.tenantId)}}$t.PROVIDER_ID="password";$t.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$t.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class br{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class An extends br{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fe extends An{constructor(){super("facebook.com")}static credential(e){return ht._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch{return null}}}Fe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fe.PROVIDER_ID="facebook.com";/**
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
 */class Ve extends An{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ht._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ve.credential(n,s)}catch{return null}}}Ve.GOOGLE_SIGN_IN_METHOD="google.com";Ve.PROVIDER_ID="google.com";/**
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
 */class $e extends An{constructor(){super("github.com")}static credential(e){return ht._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $e.credential(e.oauthAccessToken)}catch{return null}}}$e.GITHUB_SIGN_IN_METHOD="github.com";$e.PROVIDER_ID="github.com";/**
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
 */class Be extends An{constructor(){super("twitter.com")}static credential(e,n){return ht._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Be.credential(n,s)}catch{return null}}}Be.TWITTER_SIGN_IN_METHOD="twitter.com";Be.PROVIDER_ID="twitter.com";/**
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
 */async function Ti(t,e){return Sn(t,"POST","/v1/accounts:signUp",Vt(t,e))}/**
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
 */class dt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await rt._fromIdTokenResponse(e,s,i),o=$o(s);return new dt({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=$o(s);return new dt({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function $o(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class vs extends Ae{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,vs.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new vs(e,n,s,i)}}function Sc(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?vs._fromErrorAndOperation(t,r,e,s):r})}async function Sf(t,e,n=!1){const s=await Nt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dt._forOperation(t,"link",s)}/**
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
 */async function Af(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Nt(t,Sc(s,i,e,t),n);T(r.idToken,s,"internal-error");const o=_r(r.idToken);T(o,s,"internal-error");const{sub:a}=o;return T(t.uid===a,s,"user-mismatch"),dt._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&me(s,"user-mismatch"),r}}/**
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
 */async function Ac(t,e,n=!1){const s="signIn",i=await Sc(t,s,e),r=await dt._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Cf(t,e){return Ac(vt(t),e)}async function e_(t,e,n){var s;const i=vt(t),r={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=i._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const u=await ys(i,r,"signUpPassword");o=Ti(i,u)}else o=Ti(i,r).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await ys(i,r,"signUpPassword");return Ti(i,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await dt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function t_(t,e,n){return Cf(V(t),$t.credential(e,n))}/**
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
 */async function kf(t,e){return yt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function n_(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=V(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Nt(s,kf(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Rf(t,e,n,s){return V(t).onIdTokenChanged(e,n,s)}function Nf(t,e,n){return V(t).beforeAuthStateChanged(e,n)}function s_(t,e,n,s){return V(t).onAuthStateChanged(e,n,s)}function i_(t){return V(t).signOut()}const ws="__sak";/**
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
 */class Cc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ws,"1"),this.storage.removeItem(ws),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Df(){const t=oe();return Er(t)||Vs(t)}const Of=1e3,Pf=10;class kc extends Cc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Df()&&af(),this.fallbackToPolling=vc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);of()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Pf):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Of)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kc.type="LOCAL";const Lf=kc;/**
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
 */class Rc extends Cc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rc.type="SESSION";const Nc=Rc;/**
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
 */function Mf(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $s{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new $s(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,r)),c=await Mf(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$s.receivers=[];/**
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
 */function Sr(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=Sr("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(l),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Te(){return window}function Uf(t){Te().location.href=t}/**
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
 */function Dc(){return typeof Te().WorkerGlobalScope<"u"&&typeof Te().importScripts=="function"}async function Ff(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vf(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $f(){return Dc()?self:null}/**
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
 */const Oc="firebaseLocalStorageDb",Bf=1,_s="firebaseLocalStorage",Pc="fbase_key";class Cn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bs(t,e){return t.transaction([_s],e?"readwrite":"readonly").objectStore(_s)}function qf(){const t=indexedDB.deleteDatabase(Oc);return new Cn(t).toPromise()}function ji(){const t=indexedDB.open(Oc,Bf);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(_s,{keyPath:Pc})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(_s)?e(s):(s.close(),await qf(),e(await ji()))})})}async function Bo(t,e,n){const s=Bs(t,!0).put({[Pc]:e,value:n});return new Cn(s).toPromise()}async function jf(t,e){const n=Bs(t,!1).get(e),s=await new Cn(n).toPromise();return s===void 0?null:s.value}function qo(t,e){const n=Bs(t,!0).delete(e);return new Cn(n).toPromise()}const Hf=800,zf=3;class Lc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ji(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>zf)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$s._getInstance($f()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ff(),!this.activeServiceWorker)return;this.sender=new xf(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ji();return await Bo(e,ws,"1"),await qo(e,ws),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Bo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>jf(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Bs(i,!1).getAll();return new Cn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lc.type="LOCAL";const Kf=Lc;new bn(3e4,6e4);/**
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
 */function Mc(t,e){return e?ke(e):(T(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ar extends Ir{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ct(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ct(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ct(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Gf(t){return Ac(t.auth,new Ar(t),t.bypassAuthState)}function Wf(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),Af(n,new Ar(t),t.bypassAuthState)}async function Qf(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),Sf(n,new Ar(t),t.bypassAuthState)}/**
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
 */class xc{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gf;case"linkViaPopup":case"linkViaRedirect":return Qf;case"reauthViaPopup":case"reauthViaRedirect":return Wf;default:me(this.auth,"internal-error")}}resolve(e){De(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){De(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Yf=new bn(2e3,1e4);async function r_(t,e,n){const s=vt(t);Bd(t,e,br);const i=Mc(s,n);return new tt(s,"signInViaPopup",e,i).executeNotNull()}class tt extends xc{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,tt.currentPopupAction&&tt.currentPopupAction.cancel(),tt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){De(this.filter.length===1,"Popup operations only handle one event");const e=Sr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ie(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ie(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ie(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Yf.get())};e()}}tt.currentPopupAction=null;/**
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
 */const Xf="pendingRedirect",os=new Map;class Jf extends xc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=os.get(this.auth._key());if(!e){try{const s=await Zf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}os.set(this.auth._key(),e)}return this.bypassAuthState||os.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zf(t,e){const n=np(e),s=tp(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function ep(t,e){os.set(t._key(),e)}function tp(t){return ke(t._redirectPersistence)}function np(t){return rs(Xf,t.config.apiKey,t.name)}async function sp(t,e,n=!1){const s=vt(t),i=Mc(s,e),o=await new Jf(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const ip=10*60*1e3;class rp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!op(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Uc(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ie(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ip&&this.cachedEventUids.clear(),this.cachedEventUids.has(jo(e))}saveEventToCache(e){this.cachedEventUids.add(jo(e)),this.lastProcessedEventTime=Date.now()}}function jo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Uc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function op(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uc(t);default:return!1}}/**
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
 */async function ap(t,e={}){return yt(t,"GET","/v1/projects",e)}/**
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
 */const cp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,up=/^https?/;async function lp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ap(t);for(const n of e)try{if(hp(n))return}catch{}me(t,"unauthorized-domain")}function hp(t){const e=qi(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!up.test(n))return!1;if(cp.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const dp=new bn(3e4,6e4);function Ho(){const t=Te().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fp(t){return new Promise((e,n)=>{var s,i,r;function o(){Ho(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ho(),n(Ie(t,"network-request-failed"))},timeout:dp.get()})}if(!((i=(s=Te().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Te().gapi)===null||r===void 0)&&r.load)o();else{const a=uf("iframefcb");return Te()[a]=()=>{gapi.load?o():n(Ie(t,"network-request-failed"))},Ic(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw as=null,e})}let as=null;function pp(t){return as=as||fp(t),as}/**
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
 */const gp=new bn(5e3,15e3),mp="__/auth/iframe",yp="emulator/auth/iframe",vp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _p(t){const e=t.config;T(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wr(e,yp):`https://${t.config.authDomain}/${mp}`,s={apiKey:e.apiKey,appName:t.name,v:mt},i=wp.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Tn(s).slice(1)}`}async function Ep(t){const e=await pp(t),n=Te().gapi;return T(n,t,"internal-error"),e.open({where:document.body,url:_p(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vp,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ie(t,"network-request-failed"),a=Te().setTimeout(()=>{r(o)},gp.get());function c(){Te().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const Ip={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tp=500,bp=600,Sp="_blank",Ap="http://localhost";class zo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Cp(t,e,n,s=Tp,i=bp){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ip),{width:s.toString(),height:i.toString(),top:r,left:o}),u=oe().toLowerCase();n&&(a=fc(u)?Sp:n),dc(u)&&(e=e||Ap,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[g,w])=>`${d}${g}=${w},`,"");if(rf(u)&&a!=="_self")return kp(e||"",a),new zo(null);const h=window.open(e||"",a,l);T(h,t,"popup-blocked");try{h.focus()}catch{}return new zo(h)}function kp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Rp="__/auth/handler",Np="emulator/auth/handler",Dp=encodeURIComponent("fac");async function Ko(t,e,n,s,i,r){T(t.config.authDomain,t,"auth-domain-config-required"),T(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:mt,eventId:i};if(e instanceof br){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$h(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(r||{}))o[l]=h}if(e instanceof An){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),u=c?`#${Dp}=${encodeURIComponent(c)}`:"";return`${Op(t)}?${Tn(a).slice(1)}${u}`}function Op({config:t}){return t.emulator?wr(t,Np):`https://${t.authDomain}/${Rp}`}/**
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
 */const bi="webStorageSupport";class Pp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nc,this._completeRedirectFn=sp,this._overrideRedirectResult=ep}async _openPopup(e,n,s,i){var r;De((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Ko(e,n,s,qi(),i);return Cp(e,o,Sr())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Ko(e,n,s,qi(),i);return Uf(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(De(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Ep(e),s=new rp(e);return n.register("authEvent",i=>(T(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bi,{type:bi},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[bi];o!==void 0&&n(!!o),me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vc()||Er()||Vs()}}const Lp=Pp;var Go="@firebase/auth",Wo="0.23.0";/**
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
 */class Mp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Up(t){lt(new Ke("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;T(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),T(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wc(t)},u=new ff(s,i,r,c);return gf(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),lt(new Ke("auth-internal",e=>{const n=vt(e.getProvider("auth").getImmediate());return(s=>new Mp(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ne(Go,Wo,xp(t)),Ne(Go,Wo,"esm2017")}/**
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
 */const Fp=5*60,Vp=ec("authIdTokenMaxAge")||Fp;let Qo=null;const $p=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Vp)return;const i=n==null?void 0:n.token;Qo!==i&&(Qo=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function o_(t=yr()){const e=Fs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pf(t,{popupRedirectResolver:Lp,persistence:[Kf,Lf,Nc]}),s=ec("authTokenSyncURL");if(s){const r=$p(s);Nf(n,r,()=>r(n.currentUser)),Rf(n,o=>r(o))}const i=Ja("auth");return i&&mf(n,`http://${i}`),n}Up("Browser");var Bp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,Cr=Cr||{},S=Bp||self;function Es(){}function qs(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function kn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function qp(t){return Object.prototype.hasOwnProperty.call(t,Si)&&t[Si]||(t[Si]=++jp)}var Si="closure_uid_"+(1e9*Math.random()>>>0),jp=0;function Hp(t,e,n){return t.call.apply(t.bind,arguments)}function zp(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ie(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ie=Hp:ie=zp,ie.apply(null,arguments)}function Gn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Z(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Xe(){this.s=this.s,this.o=this.o}var Kp=0;Xe.prototype.s=!1;Xe.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Kp!=0)&&qp(this)};Xe.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Fc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function kr(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Yo(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(qs(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function re(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var Gp=function(){if(!S.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{S.addEventListener("test",Es,e),S.removeEventListener("test",Es,e)}catch{}return t}();function Is(t){return/^[\s\xa0]*$/.test(t)}var Xo=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ai(t,e){return t<e?-1:t>e?1:0}function js(){var t=S.navigator;return t&&(t=t.userAgent)?t:""}function Ee(t){return js().indexOf(t)!=-1}function Rr(t){return Rr[" "](t),t}Rr[" "]=Es;function Wp(t){var e=Xp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Qp=Ee("Opera"),Dt=Ee("Trident")||Ee("MSIE"),Vc=Ee("Edge"),Hi=Vc||Dt,$c=Ee("Gecko")&&!(js().toLowerCase().indexOf("webkit")!=-1&&!Ee("Edge"))&&!(Ee("Trident")||Ee("MSIE"))&&!Ee("Edge"),Yp=js().toLowerCase().indexOf("webkit")!=-1&&!Ee("Edge");function Bc(){var t=S.document;return t?t.documentMode:void 0}var Ts;e:{var Ci="",ki=function(){var t=js();if($c)return/rv:([^\);]+)(\)|;)/.exec(t);if(Vc)return/Edge\/([\d\.]+)/.exec(t);if(Dt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Yp)return/WebKit\/(\S+)/.exec(t);if(Qp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ki&&(Ci=ki?ki[1]:""),Dt){var Ri=Bc();if(Ri!=null&&Ri>parseFloat(Ci)){Ts=String(Ri);break e}}Ts=Ci}var Xp={};function Jp(){return Wp(function(){let t=0;const e=Xo(String(Ts)).split("."),n=Xo("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Ai(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ai(i[2].length==0,r[2].length==0)||Ai(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var zi;if(S.document&&Dt){var Jo=Bc();zi=Jo||parseInt(Ts,10)||void 0}else zi=void 0;var Zp=zi;function hn(t,e){if(re.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($c){e:{try{Rr(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:eg[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&hn.X.h.call(this)}}Z(hn,re);var eg={2:"touch",3:"pen",4:"mouse"};hn.prototype.h=function(){hn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Rn="closure_listenable_"+(1e6*Math.random()|0),tg=0;function ng(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++tg,this.ba=this.ea=!1}function Hs(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Nr(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function qc(t){const e={};for(const n in t)e[n]=t[n];return e}const Zo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jc(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Zo.length;r++)n=Zo[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function zs(t){this.src=t,this.g={},this.h=0}zs.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Gi(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new ng(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Ki(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Fc(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Hs(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Gi(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Dr="closure_lm_"+(1e6*Math.random()|0),Ni={};function Hc(t,e,n,s,i){if(s&&s.once)return Kc(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Hc(t,e[r],n,s,i);return null}return n=Lr(n),t&&t[Rn]?t.N(e,n,kn(s)?!!s.capture:!!s,i):zc(t,e,n,!1,s,i)}function zc(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=kn(i)?!!i.capture:!!i,a=Pr(t);if(a||(t[Dr]=a=new zs(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=sg(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Gp||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Wc(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sg(){function t(n){return e.call(t.src,t.listener,n)}const e=ig;return t}function Kc(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Kc(t,e[r],n,s,i);return null}return n=Lr(n),t&&t[Rn]?t.O(e,n,kn(s)?!!s.capture:!!s,i):zc(t,e,n,!0,s,i)}function Gc(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Gc(t,e[r],n,s,i);else s=kn(s)?!!s.capture:!!s,n=Lr(n),t&&t[Rn]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Gi(r,n,s,i),-1<n&&(Hs(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Pr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Gi(e,n,s,i)),(n=-1<t?e[t]:null)&&Or(n))}function Or(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Rn])Ki(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Wc(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Pr(e))?(Ki(n,t),n.h==0&&(n.src=null,e[Dr]=null)):Hs(t)}}}function Wc(t){return t in Ni?Ni[t]:Ni[t]="on"+t}function ig(t,e){if(t.ba)t=!0;else{e=new hn(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Or(t),t=n.call(s,e)}return t}function Pr(t){return t=t[Dr],t instanceof zs?t:null}var Di="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lr(t){return typeof t=="function"?t:(t[Di]||(t[Di]=function(e){return t.handleEvent(e)}),t[Di])}function Y(){Xe.call(this),this.i=new zs(this),this.P=this,this.I=null}Z(Y,Xe);Y.prototype[Rn]=!0;Y.prototype.removeEventListener=function(t,e,n,s){Gc(this,t,e,n,s)};function J(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new re(e,t);else if(e instanceof re)e.target=e.target||t;else{var i=e;e=new re(s,t),jc(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Wn(o,s,!0,e)&&i}if(o=e.g=t,i=Wn(o,s,!0,e)&&i,i=Wn(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Wn(o,s,!1,e)&&i}Y.prototype.M=function(){if(Y.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Hs(n[s]);delete t.g[e],t.h--}}this.I=null};Y.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Y.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Wn(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ki(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Mr=S.JSON.stringify;function rg(){var t=Xc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class og{constructor(){this.h=this.g=null}add(e,n){const s=Qc.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Qc=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new ag,t=>t.reset());class ag{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function cg(t){S.setTimeout(()=>{throw t},0)}function Yc(t,e){Wi||ug(),Qi||(Wi(),Qi=!0),Xc.add(t,e)}var Wi;function ug(){var t=S.Promise.resolve(void 0);Wi=function(){t.then(lg)}}var Qi=!1,Xc=new og;function lg(){for(var t;t=rg();){try{t.h.call(t.g)}catch(n){cg(n)}var e=Qc;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Qi=!1}function Ks(t,e){Y.call(this),this.h=t||1,this.g=e||S,this.j=ie(this.lb,this),this.l=Date.now()}Z(Ks,Y);y=Ks.prototype;y.ca=!1;y.R=null;y.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),J(this,"tick"),this.ca&&(xr(this),this.start()))}};y.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function xr(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}y.M=function(){Ks.X.M.call(this),xr(this),delete this.g};function Ur(t,e,n){if(typeof t=="function")n&&(t=ie(t,n));else if(t&&typeof t.handleEvent=="function")t=ie(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:S.setTimeout(t,e||0)}function Jc(t){t.g=Ur(()=>{t.g=null,t.i&&(t.i=!1,Jc(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class hg extends Xe{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Jc(this)}M(){super.M(),this.g&&(S.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dn(t){Xe.call(this),this.h=t,this.g={}}Z(dn,Xe);var ea=[];function Zc(t,e,n,s){Array.isArray(n)||(n&&(ea[0]=n.toString()),n=ea);for(var i=0;i<n.length;i++){var r=Hc(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function eu(t){Nr(t.g,function(e,n){this.g.hasOwnProperty(n)&&Or(e)},t),t.g={}}dn.prototype.M=function(){dn.X.M.call(this),eu(this)};dn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Gs(){this.g=!0}Gs.prototype.Aa=function(){this.g=!1};function dg(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function fg(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function St(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+gg(t,n)+(s?" "+s:"")})}function pg(t,e){t.info(function(){return"TIMEOUT: "+e})}Gs.prototype.info=function(){};function gg(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Mr(n)}catch{return e}}var wt={},ta=null;function Ws(){return ta=ta||new Y}wt.Pa="serverreachability";function tu(t){re.call(this,wt.Pa,t)}Z(tu,re);function fn(t){const e=Ws();J(e,new tu(e))}wt.STAT_EVENT="statevent";function nu(t,e){re.call(this,wt.STAT_EVENT,t),this.stat=e}Z(nu,re);function ue(t){const e=Ws();J(e,new nu(e,t))}wt.Qa="timingevent";function su(t,e){re.call(this,wt.Qa,t),this.size=e}Z(su,re);function Nn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return S.setTimeout(function(){t()},e)}var Qs={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},iu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Fr(){}Fr.prototype.h=null;function na(t){return t.h||(t.h=t.i())}function ru(){}var Dn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Vr(){re.call(this,"d")}Z(Vr,re);function $r(){re.call(this,"c")}Z($r,re);var Yi;function Ys(){}Z(Ys,Fr);Ys.prototype.g=function(){return new XMLHttpRequest};Ys.prototype.i=function(){return{}};Yi=new Ys;function On(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new dn(this),this.O=mg,t=Hi?125:void 0,this.T=new Ks(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ou}function ou(){this.i=null,this.g="",this.h=!1}var mg=45e3,Xi={},bs={};y=On.prototype;y.setTimeout=function(t){this.O=t};function Ji(t,e,n){t.K=1,t.v=Js(Oe(e)),t.s=n,t.P=!0,au(t,null)}function au(t,e){t.F=Date.now(),Pn(t),t.A=Oe(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),gu(n.i,"t",s),t.C=0,n=t.l.H,t.h=new ou,t.g=xu(t.l,n?e:null,!t.s),0<t.N&&(t.L=new hg(ie(t.La,t,t.g),t.N)),Zc(t.S,t.g,"readystatechange",t.ib),e=t.H?qc(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),fn(),dg(t.j,t.u,t.A,t.m,t.U,t.s)}y.ib=function(t){t=t.target;const e=this.L;e&&Re(t)==3?e.l():this.La(t)};y.La=function(t){try{if(t==this.g)e:{const l=Re(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Hi||this.g&&(this.h.h||this.g.fa()||oa(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?fn(3):fn(2)),Xs(this);var n=this.g.aa();this.Y=n;t:if(cu(this)){var s=oa(this.g);t="";var i=s.length,r=Re(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nt(this),tn(this);var o="";break t}this.h.i=new S.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,fg(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Is(a)){var u=a;break t}}u=null}if(n=u)St(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Zi(this,n);else{this.i=!1,this.o=3,ue(12),nt(this),tn(this);break e}}this.P?(uu(this,l,o),Hi&&this.i&&l==3&&(Zc(this.S,this.T,"tick",this.hb),this.T.start())):(St(this.j,this.m,o,null),Zi(this,o)),l==4&&nt(this),this.i&&!this.I&&(l==4?Ou(this.l,this):(this.i=!1,Pn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ue(12)):(this.o=0,ue(13)),nt(this),tn(this)}}}catch{}finally{}};function cu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function uu(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=yg(t,n),i==bs){e==4&&(t.o=4,ue(14),s=!1),St(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Xi){t.o=4,ue(15),St(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else St(t.j,t.m,i,null),Zi(t,i);cu(t)&&i!=bs&&i!=Xi&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ue(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gr(e),e.K=!0,ue(11))):(St(t.j,t.m,n,"[Invalid Chunked Response]"),nt(t),tn(t))}y.hb=function(){if(this.g){var t=Re(this.g),e=this.g.fa();this.C<e.length&&(Xs(this),uu(this,t,e),this.i&&t!=4&&Pn(this))}};function yg(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?bs:(n=Number(e.substring(n,s)),isNaN(n)?Xi:(s+=1,s+n>e.length?bs:(e=e.substr(s,n),t.C=s+n,e)))}y.cancel=function(){this.I=!0,nt(this)};function Pn(t){t.V=Date.now()+t.O,lu(t,t.O)}function lu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Nn(ie(t.gb,t),e)}function Xs(t){t.B&&(S.clearTimeout(t.B),t.B=null)}y.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(pg(this.j,this.A),this.K!=2&&(fn(),ue(17)),nt(this),this.o=2,tn(this)):lu(this,this.V-t)};function tn(t){t.l.G==0||t.I||Ou(t.l,t)}function nt(t){Xs(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,xr(t.T),eu(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Zi(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||er(n.h,t))){if(!t.J&&er(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Cs(n),ti(n);else break e;Kr(n),ue(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Nn(ie(n.cb,n),6e3));if(1>=vu(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else st(n,11)}else if((t.J||n.g==t)&&Cs(n),!Is(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var r=s.h;r.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Br(r,r.h),r.h=null))}if(s.D){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.za=E,U(s.F,s.D,E))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Mu(s,s.H?s.ka:null,s.V),o.J){wu(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Xs(a),Pn(a)),s.g=o}else Nu(s);0<n.i.length&&ni(n)}else u[0]!="stop"&&u[0]!="close"||st(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?st(n,7):zr(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}fn(4)}catch{}}function vg(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(qs(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function wg(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(qs(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function hu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(qs(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=wg(t),s=vg(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var du=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _g(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ot(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ot){this.h=e!==void 0?e:t.h,Ss(this,t.j),this.s=t.s,this.g=t.g,As(this,t.m),this.l=t.l,e=t.i;var n=new pn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),sa(this,n),this.o=t.o}else t&&(n=String(t).match(du))?(this.h=!!e,Ss(this,n[1]||"",!0),this.s=Xt(n[2]||""),this.g=Xt(n[3]||"",!0),As(this,n[4]),this.l=Xt(n[5]||"",!0),sa(this,n[6]||"",!0),this.o=Xt(n[7]||"")):(this.h=!!e,this.i=new pn(null,this.h))}ot.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Jt(e,ia,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Jt(e,ia,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Jt(n,n.charAt(0)=="/"?Tg:Ig,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Jt(n,Sg)),t.join("")};function Oe(t){return new ot(t)}function Ss(t,e,n){t.j=n?Xt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function As(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function sa(t,e,n){e instanceof pn?(t.i=e,Ag(t.i,t.h)):(n||(e=Jt(e,bg)),t.i=new pn(e,t.h))}function U(t,e,n){t.i.set(e,n)}function Js(t){return U(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Jt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Eg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Eg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ia=/[#\/\?@]/g,Ig=/[#\?:]/g,Tg=/[#\?]/g,bg=/[#\?@]/g,Sg=/#/g;function pn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Je(t){t.g||(t.g=new Map,t.h=0,t.i&&_g(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}y=pn.prototype;y.add=function(t,e){Je(this),this.i=null,t=Bt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function fu(t,e){Je(t),e=Bt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function pu(t,e){return Je(t),e=Bt(t,e),t.g.has(e)}y.forEach=function(t,e){Je(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};y.oa=function(){Je(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};y.W=function(t){Je(this);let e=[];if(typeof t=="string")pu(this,t)&&(e=e.concat(this.g.get(Bt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};y.set=function(t,e){return Je(this),this.i=null,t=Bt(this,t),pu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};y.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function gu(t,e,n){fu(t,e),0<n.length&&(t.i=null,t.g.set(Bt(t,e),kr(n)),t.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Bt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ag(t,e){e&&!t.j&&(Je(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(fu(this,s),gu(this,i,n))},t)),t.j=e}var Cg=class{constructor(e,n){this.h=e,this.g=n}};function mu(t){this.l=t||kg,S.PerformanceNavigationTiming?(t=S.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(S.g&&S.g.Ga&&S.g.Ga()&&S.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kg=10;function yu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function vu(t){return t.h?1:t.g?t.g.size:0}function er(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Br(t,e){t.g?t.g.add(e):t.h=e}function wu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mu.prototype.cancel=function(){if(this.i=_u(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function _u(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return kr(t.i)}function qr(){}qr.prototype.stringify=function(t){return S.JSON.stringify(t,void 0)};qr.prototype.parse=function(t){return S.JSON.parse(t,void 0)};function Rg(){this.g=new qr}function Ng(t,e,n){const s=n||"";try{hu(t,function(i,r){let o=i;kn(i)&&(o=Mr(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Dg(t,e){const n=new Gs;if(S.Image){const s=new Image;s.onload=Gn(Qn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Gn(Qn,n,s,"TestLoadImage: error",!1,e),s.onabort=Gn(Qn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Gn(Qn,n,s,"TestLoadImage: timeout",!1,e),S.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Qn(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Ln(t){this.l=t.ac||null,this.j=t.jb||!1}Z(Ln,Fr);Ln.prototype.g=function(){return new Zs(this.l,this.j)};Ln.prototype.i=function(t){return function(){return t}}({});function Zs(t,e){Y.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=jr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Z(Zs,Y);var jr=0;y=Zs.prototype;y.open=function(t,e){if(this.readyState!=jr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,gn(this)};y.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||S).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mn(this)),this.readyState=jr};y.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,gn(this)),this.g&&(this.readyState=3,gn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof S.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Eu(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Eu(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}y.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Mn(this):gn(this),this.readyState==3&&Eu(this)}};y.Va=function(t){this.g&&(this.response=this.responseText=t,Mn(this))};y.Ua=function(t){this.g&&(this.response=t,Mn(this))};y.ga=function(){this.g&&Mn(this)};function Mn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,gn(t)}y.setRequestHeader=function(t,e){this.v.append(t,e)};y.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function gn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Zs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Og=S.JSON.parse;function $(t){Y.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Iu,this.K=this.L=!1}Z($,Y);var Iu="",Pg=/^https?$/i,Lg=["POST","PUT"];y=$.prototype;y.Ka=function(t){this.L=t};y.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Yi.g(),this.C=this.u?na(this.u):na(Yi),this.g.onreadystatechange=ie(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){ra(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=S.FormData&&t instanceof S.FormData,!(0<=Fc(Lg,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Su(this),0<this.B&&((this.K=Mg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ie(this.qa,this)):this.A=Ur(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){ra(this,r)}};function Mg(t){return Dt&&Jp()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}y.qa=function(){typeof Cr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,J(this,"timeout"),this.abort(8))};function ra(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Tu(t),ei(t)}function Tu(t){t.D||(t.D=!0,J(t,"complete"),J(t,"error"))}y.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,J(this,"complete"),J(this,"abort"),ei(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ei(this,!0)),$.X.M.call(this)};y.Ha=function(){this.s||(this.F||this.v||this.l?bu(this):this.fb())};y.fb=function(){bu(this)};function bu(t){if(t.h&&typeof Cr<"u"&&(!t.C[1]||Re(t)!=4||t.aa()!=2)){if(t.v&&Re(t)==4)Ur(t.Ha,0,t);else if(J(t,"readystatechange"),Re(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(du)[1]||null;if(!i&&S.self&&S.self.location){var r=S.self.location.protocol;i=r.substr(0,r.length-1)}s=!Pg.test(i?i.toLowerCase():"")}n=s}if(n)J(t,"complete"),J(t,"success");else{t.m=6;try{var o=2<Re(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Tu(t)}}finally{ei(t)}}}}function ei(t,e){if(t.g){Su(t);const n=t.g,s=t.C[0]?Es:null;t.g=null,t.C=null,e||J(t,"ready");try{n.onreadystatechange=s}catch{}}}function Su(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(S.clearTimeout(t.A),t.A=null)}function Re(t){return t.g?t.g.readyState:0}y.aa=function(){try{return 2<Re(this)?this.g.status:-1}catch{return-1}};y.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Og(e)}};function oa(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Iu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}y.Ea=function(){return this.m};y.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Au(t){let e="";return Nr(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Hr(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Au(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):U(t,e,n))}function Gt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Cu(t){this.Ca=0,this.i=[],this.j=new Gs,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Gt("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Gt("baseRetryDelayMs",5e3,t),this.bb=Gt("retryDelaySeedMs",1e4,t),this.$a=Gt("forwardChannelMaxRetries",2,t),this.ta=Gt("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new mu(t&&t.concurrentRequestLimit),this.Fa=new Rg,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}y=Cu.prototype;y.ma=8;y.G=1;function zr(t){if(ku(t),t.G==3){var e=t.U++,n=Oe(t.F);U(n,"SID",t.I),U(n,"RID",e),U(n,"TYPE","terminate"),xn(t,n),e=new On(t,t.j,e,void 0),e.K=2,e.v=Js(Oe(n)),n=!1,S.navigator&&S.navigator.sendBeacon&&(n=S.navigator.sendBeacon(e.v.toString(),"")),!n&&S.Image&&(new Image().src=e.v,n=!0),n||(e.g=xu(e.l,null),e.g.da(e.v)),e.F=Date.now(),Pn(e)}Lu(t)}function ti(t){t.g&&(Gr(t),t.g.cancel(),t.g=null)}function ku(t){ti(t),t.u&&(S.clearTimeout(t.u),t.u=null),Cs(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&S.clearTimeout(t.m),t.m=null)}function ni(t){yu(t.h)||t.m||(t.m=!0,Yc(t.Ja,t),t.C=0)}function xg(t,e){return vu(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Nn(ie(t.Ja,t,e),Pu(t,t.C)),t.C++,!0)}y.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new On(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=qc(r),jc(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ru(this,i,e),n=Oe(this.F),U(n,"RID",t),U(n,"CVER",22),this.D&&U(n,"X-HTTP-Session-Id",this.D),xn(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Au(r)))+"&"+e:this.o&&Hr(n,this.o,r)),Br(this.h,i),this.Ya&&U(n,"TYPE","init"),this.O?(U(n,"$req",e),U(n,"SID","null"),i.Z=!0,Ji(i,n,null)):Ji(i,n,e),this.G=2}}else this.G==3&&(t?aa(this,t):this.i.length==0||yu(this.h)||aa(this))};function aa(t,e){var n;e?n=e.m:n=t.U++;const s=Oe(t.F);U(s,"SID",t.I),U(s,"RID",n),U(s,"AID",t.T),xn(t,s),t.o&&t.s&&Hr(s,t.o,t.s),n=new On(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ru(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Br(t.h,n),Ji(n,s,e)}function xn(t,e){t.ia&&Nr(t.ia,function(n,s){U(e,s,n)}),t.l&&hu({},function(n,s){U(e,s,n)})}function Ru(t,e,n){n=Math.min(t.i.length,n);var s=t.l?ie(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const l=i[c].g;if(u-=r,0>u)r=Math.max(0,i[c].h-100),a=!1;else try{Ng(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Nu(t){t.g||t.u||(t.Z=1,Yc(t.Ia,t),t.A=0)}function Kr(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Nn(ie(t.Ia,t),Pu(t,t.A)),t.A++,!0)}y.Ia=function(){if(this.u=null,Du(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Nn(ie(this.eb,this),t)}};y.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ue(10),ti(this),Du(this))};function Gr(t){t.B!=null&&(S.clearTimeout(t.B),t.B=null)}function Du(t){t.g=new On(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Oe(t.sa);U(e,"RID","rpc"),U(e,"SID",t.I),U(e,"CI",t.L?"0":"1"),U(e,"AID",t.T),U(e,"TYPE","xmlhttp"),xn(t,e),t.o&&t.s&&Hr(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Js(Oe(e)),n.s=null,n.P=!0,au(n,t)}y.cb=function(){this.v!=null&&(this.v=null,ti(this),Kr(this),ue(19))};function Cs(t){t.v!=null&&(S.clearTimeout(t.v),t.v=null)}function Ou(t,e){var n=null;if(t.g==e){Cs(t),Gr(t),t.g=null;var s=2}else if(er(t.h,e))n=e.D,wu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Ws(),J(s,new su(s,n)),ni(t)}else Nu(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&xg(t,e)||s==2&&Kr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:st(t,5);break;case 4:st(t,10);break;case 3:st(t,6);break;default:st(t,2)}}}function Pu(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function st(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=ie(t.kb,t);n||(n=new ot("//www.google.com/images/cleardot.gif"),S.location&&S.location.protocol=="http"||Ss(n,"https"),Js(n)),Dg(n.toString(),s)}else ue(2);t.G=0,t.l&&t.l.va(e),Lu(t),ku(t)}y.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ue(2)):(this.j.info("Failed to ping google.com"),ue(1))};function Lu(t){if(t.G=0,t.la=[],t.l){const e=_u(t.h);(e.length!=0||t.i.length!=0)&&(Yo(t.la,e),Yo(t.la,t.i),t.h.i.length=0,kr(t.i),t.i.length=0),t.l.ua()}}function Mu(t,e,n){var s=n instanceof ot?Oe(n):new ot(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),As(s,s.m);else{var i=S.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ot(null,void 0);s&&Ss(r,s),e&&(r.g=e),i&&As(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&U(s,n,e),U(s,"VER",t.ma),xn(t,s),s}function xu(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new $(new Ln({jb:!0})):new $(t.ra),e.Ka(t.H),e}function Uu(){}y=Uu.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Ra=function(){};function ks(){if(Dt&&!(10<=Number(Zp)))throw Error("Environmental error: no available transport.")}ks.prototype.g=function(t,e){return new ge(t,e)};function ge(t,e){Y.call(this),this.g=new Cu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Is(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Is(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qt(this)}Z(ge,Y);ge.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ue(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Mu(t,null,t.V),ni(t)};ge.prototype.close=function(){zr(this.g)};ge.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Mr(t),t=n);e.i.push(new Cg(e.ab++,t)),e.G==3&&ni(e)};ge.prototype.M=function(){this.g.l=null,delete this.j,zr(this.g),delete this.g,ge.X.M.call(this)};function Fu(t){Vr.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Z(Fu,Vr);function Vu(){$r.call(this),this.status=1}Z(Vu,$r);function qt(t){this.g=t}Z(qt,Uu);qt.prototype.xa=function(){J(this.g,"a")};qt.prototype.wa=function(t){J(this.g,new Fu(t))};qt.prototype.va=function(t){J(this.g,new Vu)};qt.prototype.ua=function(){J(this.g,"b")};ks.prototype.createWebChannel=ks.prototype.g;ge.prototype.send=ge.prototype.u;ge.prototype.open=ge.prototype.m;ge.prototype.close=ge.prototype.close;Qs.NO_ERROR=0;Qs.TIMEOUT=8;Qs.HTTP_ERROR=6;iu.COMPLETE="complete";ru.EventType=Dn;Dn.OPEN="a";Dn.CLOSE="b";Dn.ERROR="c";Dn.MESSAGE="d";Y.prototype.listen=Y.prototype.N;$.prototype.listenOnce=$.prototype.O;$.prototype.getLastError=$.prototype.Oa;$.prototype.getLastErrorCode=$.prototype.Ea;$.prototype.getStatus=$.prototype.aa;$.prototype.getResponseJson=$.prototype.Sa;$.prototype.getResponseText=$.prototype.fa;$.prototype.send=$.prototype.da;$.prototype.setWithCredentials=$.prototype.Ka;var Ug=function(){return new ks},Fg=function(){return Ws()},Oi=Qs,Vg=iu,$g=wt,ca={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Bg=Ln,Yn=ru,qg=$;const ua="@firebase/firestore";/**
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
 */class te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}te.UNAUTHENTICATED=new te(null),te.GOOGLE_CREDENTIALS=new te("google-credentials-uid"),te.FIRST_PARTY=new te("first-party-uid"),te.MOCK_USER=new te("mock-user");/**
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
 */let jt="9.20.0";/**
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
 */const ft=new mr("@firebase/firestore");function la(){return ft.logLevel}function v(t,...e){if(ft.logLevel<=N.DEBUG){const n=e.map(Wr);ft.debug(`Firestore (${jt}): ${t}`,...n)}}function Pe(t,...e){if(ft.logLevel<=N.ERROR){const n=e.map(Wr);ft.error(`Firestore (${jt}): ${t}`,...n)}}function Rs(t,...e){if(ft.logLevel<=N.WARN){const n=e.map(Wr);ft.warn(`Firestore (${jt}): ${t}`,...n)}}function Wr(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function b(t="Unexpected state"){const e=`FIRESTORE (${jt}) INTERNAL ASSERTION FAILED: `+t;throw Pe(e),new Error(e)}function L(t,e){t||b()}function C(t,e){return t}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class m extends Ae{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class He{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class $u{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(te.UNAUTHENTICATED))}shutdown(){}}class Hg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zg{constructor(e){this.t=e,this.currentUser=te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new He;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new He,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new He)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(L(typeof s.accessToken=="string"),new $u(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return L(e===null||typeof e=="string"),new te(e)}}class Kg{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=te.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Gg{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Kg(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qg{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(L(typeof n.token=="string"),this.T=n.token,new Wg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Yg(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Bu{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Yg(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function D(t,e){return t<e?-1:t>e?1:0}function Ot(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class K{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new m(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new m(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new m(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new m(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return K.fromMillis(Date.now())}static fromDate(e){return K.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new K(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class A{constructor(e){this.timestamp=e}static fromTimestamp(e){return new A(e)}static min(){return new A(new K(0,0))}static max(){return new A(new K(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class mn{constructor(e,n,s){n===void 0?n=0:n>e.length&&b(),s===void 0?s=e.length-n:s>e.length-n&&b(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return mn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class P extends mn{construct(e,n,s){return new P(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new m(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new P(n)}static emptyPath(){return new P([])}}const Xg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class se extends mn{construct(e,n,s){return new se(e,n,s)}static isValidIdentifier(e){return Xg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new se(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new m(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new m(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new m(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new m(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new se(n)}static emptyPath(){return new se([])}}/**
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
 */class _{constructor(e){this.path=e}static fromPath(e){return new _(P.fromString(e))}static fromName(e){return new _(P.fromString(e).popFirst(5))}static empty(){return new _(P.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&P.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return P.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _(new P(e.slice()))}}function Jg(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=A.fromTimestamp(s===1e9?new K(n+1,0):new K(n,s));return new Ge(i,_.empty(),e)}function Zg(t){return new Ge(t.readTime,t.key,-1)}class Ge{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ge(A.min(),_.empty(),-1)}static max(){return new Ge(A.max(),_.empty(),-1)}}function em(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=_.comparator(t.documentKey,e.documentKey),n!==0?n:D(t.largestBatchId,e.largestBatchId))}/**
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
 */const tm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Un(t){if(t.code!==f.FAILED_PRECONDITION||t.message!==tm)throw t;v("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new p((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):p.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):p.reject(n)}static resolve(e){return new p((n,s)=>{n(e)})}static reject(e){return new p((n,s)=>{s(e)})}static waitFor(e){return new p((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=p.resolve(!1);for(const s of e)n=n.next(i=>i?p.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new p((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===r&&s(o)},l=>i(l))}})}static doWhile(e,n){return new p((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Fn(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Qr{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Qr.ct=-1;function si(t){return t==null}function Ns(t){return t===0&&1/t==-1/0}function sm(t){return typeof t=="number"&&Number.isInteger(t)&&!Ns(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function ha(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _t(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class W{constructor(e,n){this.comparator=e,this.root=n||X.EMPTY}insert(e,n){return new W(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,X.BLACK,null,null))}remove(e){return new W(this.comparator,this.root.remove(e,this.comparator).copy(null,null,X.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xn(this.root,e,this.comparator,!0)}}class Xn{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class X{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??X.RED,this.left=i??X.EMPTY,this.right=r??X.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new X(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return X.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return X.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,X.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,X.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}X.EMPTY=null,X.RED=!0,X.BLACK=!1;X.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,e,n,s,i){return this}insert(t,e,n){return new X(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class G{constructor(e){this.comparator=e,this.data=new W(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new da(this.data.getIterator())}getIteratorFrom(e){return new da(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof G)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new G(this.comparator);return n.data=e,n}}class da{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class fe{constructor(e){this.fields=e,e.sort(se.comparator)}static empty(){return new fe([])}unionWith(e){let n=new G(se.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new fe(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ot(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class im extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ae{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new im("Invalid base64 string: "+i):i}}(e);return new ae(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new ae(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ae.EMPTY_BYTE_STRING=new ae("");const rm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function We(t){if(L(!!t),typeof t=="string"){let e=0;const n=rm.exec(t);if(L(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:H(t.seconds),nanos:H(t.nanos)}}function H(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pt(t){return typeof t=="string"?ae.fromBase64String(t):ae.fromUint8Array(t)}/**
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
 */function ju(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hu(t){const e=t.mapValue.fields.__previous_value__;return ju(e)?Hu(e):e}function yn(t){const e=We(t.mapValue.fields.__local_write_time__.timestampValue);return new K(e.seconds,e.nanos)}/**
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
 */class om{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class vn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new vn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Jn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ju(t)?4:am(t)?9007199254740991:10:b()}function Se(t,e){if(t===e)return!0;const n=pt(t);if(n!==pt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yn(t).isEqual(yn(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=We(s.timestampValue),o=We(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Pt(s.bytesValue).isEqual(Pt(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return H(s.geoPointValue.latitude)===H(i.geoPointValue.latitude)&&H(s.geoPointValue.longitude)===H(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return H(s.integerValue)===H(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=H(s.doubleValue),o=H(i.doubleValue);return r===o?Ns(r)===Ns(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Ot(t.arrayValue.values||[],e.arrayValue.values||[],Se);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(ha(r)!==ha(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Se(r[a],o[a])))return!1;return!0}(t,e);default:return b()}}function wn(t,e){return(t.values||[]).find(n=>Se(n,e))!==void 0}function Lt(t,e){if(t===e)return 0;const n=pt(t),s=pt(e);if(n!==s)return D(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=H(i.integerValue||i.doubleValue),a=H(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return fa(t.timestampValue,e.timestampValue);case 4:return fa(yn(t),yn(e));case 5:return D(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Pt(i),a=Pt(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=D(o[c],a[c]);if(u!==0)return u}return D(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=D(H(i.latitude),H(r.latitude));return o!==0?o:D(H(i.longitude),H(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Lt(o[c],a[c]);if(u)return u}return D(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Jn.mapValue&&r===Jn.mapValue)return 0;if(i===Jn.mapValue)return 1;if(r===Jn.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=D(a[l],u[l]);if(h!==0)return h;const d=Lt(o[a[l]],c[u[l]]);if(d!==0)return d}return D(a.length,u.length)}(t.mapValue,e.mapValue);default:throw b()}}function fa(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return D(t,e);const n=We(t),s=We(e),i=D(n.seconds,s.seconds);return i!==0?i:D(n.nanos,s.nanos)}function Mt(t){return tr(t)}function tr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=We(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Pt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,_.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=tr(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${tr(s.fields[a])}`;return r+"}"}(t.mapValue):b();var e,n}function pa(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function nr(t){return!!t&&"integerValue"in t}function Yr(t){return!!t&&"arrayValue"in t}function ga(t){return!!t&&"nullValue"in t}function ma(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function cs(t){return!!t&&"mapValue"in t}function nn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _t(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=nn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=nn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function am(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class le{constructor(e){this.value=e}static empty(){return new le({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!cs(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=nn(n)}setAll(e){let n=se.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=nn(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());cs(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Se(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];cs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){_t(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new le(nn(this.value))}}function zu(t){const e=[];return _t(t.fields,(n,s)=>{const i=new se([n]);if(cs(s)){const r=zu(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new fe(e)}/**
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
 */class ne{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ne(e,0,A.min(),A.min(),A.min(),le.empty(),0)}static newFoundDocument(e,n,s,i){return new ne(e,1,n,A.min(),s,i,0)}static newNoDocument(e,n){return new ne(e,2,n,A.min(),A.min(),le.empty(),0)}static newUnknownDocument(e,n){return new ne(e,3,n,A.min(),A.min(),le.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(A.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=le.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=A.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ds{constructor(e,n){this.position=e,this.inclusive=n}}function ya(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=_.comparator(_.fromName(o.referenceValue),n.key):s=Lt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function va(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Se(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class sn{constructor(e,n="asc"){this.field=e,this.dir=n}}function cm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ku{}class z extends Ku{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new lm(e,n,s):n==="array-contains"?new fm(e,s):n==="in"?new pm(e,s):n==="not-in"?new gm(e,s):n==="array-contains-any"?new mm(e,s):new z(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new hm(e,s):new dm(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Lt(n,this.value)):n!==null&&pt(this.value)===pt(n)&&this.matchesComparison(Lt(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class we extends Ku{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new we(e,n)}matches(e){return Gu(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Gu(t){return t.op==="and"}function Wu(t){return um(t)&&Gu(t)}function um(t){for(const e of t.filters)if(e instanceof we)return!1;return!0}function sr(t){if(t instanceof z)return t.field.canonicalString()+t.op.toString()+Mt(t.value);if(Wu(t))return t.filters.map(e=>sr(e)).join(",");{const e=t.filters.map(n=>sr(n)).join(",");return`${t.op}(${e})`}}function Qu(t,e){return t instanceof z?function(n,s){return s instanceof z&&n.op===s.op&&n.field.isEqual(s.field)&&Se(n.value,s.value)}(t,e):t instanceof we?function(n,s){return s instanceof we&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Qu(r,s.filters[o]),!0):!1}(t,e):void b()}function Yu(t){return t instanceof z?function(e){return`${e.field.canonicalString()} ${e.op} ${Mt(e.value)}`}(t):t instanceof we?function(e){return e.op.toString()+" {"+e.getFilters().map(Yu).join(" ,")+"}"}(t):"Filter"}class lm extends z{constructor(e,n,s){super(e,n,s),this.key=_.fromName(s.referenceValue)}matches(e){const n=_.comparator(e.key,this.key);return this.matchesComparison(n)}}class hm extends z{constructor(e,n){super(e,"in",n),this.keys=Xu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dm extends z{constructor(e,n){super(e,"not-in",n),this.keys=Xu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Xu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>_.fromName(s.referenceValue))}class fm extends z{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yr(n)&&wn(n.arrayValue,this.value)}}class pm extends z{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wn(this.value.arrayValue,n)}}class gm extends z{constructor(e,n){super(e,"not-in",n)}matches(e){if(wn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wn(this.value.arrayValue,n)}}class mm extends z{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>wn(this.value.arrayValue,s))}}/**
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
 */class ym{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function wa(t,e=null,n=[],s=[],i=null,r=null,o=null){return new ym(t,e,n,s,i,r,o)}function Xr(t){const e=C(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>sr(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),si(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Mt(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Mt(s)).join(",")),e.ft=n}return e.ft}function Jr(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!cm(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Qu(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!va(t.startAt,e.startAt)&&va(t.endAt,e.endAt)}function ir(t){return _.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Vn{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function vm(t,e,n,s,i,r,o,a){return new Vn(t,e,n,s,i,r,o,a)}function Ju(t){return new Vn(t)}function _a(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Zu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Zr(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function el(t){return t.collectionGroup!==null}function kt(t){const e=C(t);if(e.dt===null){e.dt=[];const n=Zr(e),s=Zu(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new sn(n)),e.dt.push(new sn(se.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new sn(se.keyField(),r))}}}return e.dt}function Le(t){const e=C(t);if(!e.wt)if(e.limitType==="F")e.wt=wa(e.path,e.collectionGroup,kt(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of kt(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new sn(r.field,o))}const s=e.endAt?new Ds(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ds(e.startAt.position,e.startAt.inclusive):null;e.wt=wa(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function rr(t,e){e.getFirstInequalityField(),Zr(t);const n=t.filters.concat([e]);return new Vn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function or(t,e,n){return new Vn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ii(t,e){return Jr(Le(t),Le(e))&&t.limitType===e.limitType}function tl(t){return`${Xr(Le(t))}|lt:${t.limitType}`}function ar(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Yu(s)).join(", ")}]`),si(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Mt(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Mt(s)).join(",")),`Target(${n})`}(Le(t))}; limitType=${t.limitType})`}function ri(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):_.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of kt(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=ya(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,kt(n),s)||n.endAt&&!function(i,r,o){const a=ya(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,kt(n),s))}(t,e)}function wm(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function nl(t){return(e,n)=>{let s=!1;for(const i of kt(t)){const r=_m(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function _m(t,e,n){const s=t.field.isKeyField()?_.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Lt(a,c):b()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return b()}}/**
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
 */class Ht{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_t(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return qu(this.inner)}size(){return this.innerSize}}/**
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
 */const Em=new W(_.comparator);function Me(){return Em}const sl=new W(_.comparator);function Zt(...t){let e=sl;for(const n of t)e=e.insert(n.key,n);return e}function il(t){let e=sl;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function it(){return rn()}function rl(){return rn()}function rn(){return new Ht(t=>t.toString(),(t,e)=>t.isEqual(e))}const Im=new W(_.comparator),Tm=new G(_.comparator);function k(...t){let e=Tm;for(const n of t)e=e.add(n);return e}const bm=new G(D);function ol(){return bm}/**
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
 */function al(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ns(e)?"-0":e}}function cl(t){return{integerValue:""+t}}function Sm(t,e){return sm(e)?cl(e):al(t,e)}/**
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
 */class oi{constructor(){this._=void 0}}function Am(t,e,n){return t instanceof Os?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof _n?ll(t,e):t instanceof En?hl(t,e):function(s,i){const r=ul(s,i),o=Ea(r)+Ea(s._t);return nr(r)&&nr(s._t)?cl(o):al(s.serializer,o)}(t,e)}function Cm(t,e,n){return t instanceof _n?ll(t,e):t instanceof En?hl(t,e):n}function ul(t,e){return t instanceof Ps?nr(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Os extends oi{}class _n extends oi{constructor(e){super(),this.elements=e}}function ll(t,e){const n=dl(e);for(const s of t.elements)n.some(i=>Se(i,s))||n.push(s);return{arrayValue:{values:n}}}class En extends oi{constructor(e){super(),this.elements=e}}function hl(t,e){let n=dl(e);for(const s of t.elements)n=n.filter(i=>!Se(i,s));return{arrayValue:{values:n}}}class Ps extends oi{constructor(e,n){super(),this.serializer=e,this._t=n}}function Ea(t){return H(t.integerValue||t.doubleValue)}function dl(t){return Yr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function km(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof _n&&s instanceof _n||n instanceof En&&s instanceof En?Ot(n.elements,s.elements,Se):n instanceof Ps&&s instanceof Ps?Se(n._t,s._t):n instanceof Os&&s instanceof Os}(t.transform,e.transform)}class Rm{constructor(e,n){this.version=e,this.transformResults=n}}class ve{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ve}static exists(e){return new ve(void 0,e)}static updateTime(e){return new ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function us(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ai{}function fl(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gl(t.key,ve.none()):new $n(t.key,t.data,ve.none());{const n=t.data,s=le.empty();let i=new G(se.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ze(t.key,s,new fe(i.toArray()),ve.none())}}function Nm(t,e,n){t instanceof $n?function(s,i,r){const o=s.value.clone(),a=Ta(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ze?function(s,i,r){if(!us(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Ta(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(pl(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function on(t,e,n,s){return t instanceof $n?function(i,r,o,a){if(!us(i.precondition,r))return o;const c=i.value.clone(),u=ba(i.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ze?function(i,r,o,a){if(!us(i.precondition,r))return o;const c=ba(i.fieldTransforms,a,r),u=r.data;return u.setAll(pl(i)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(i,r,o){return us(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Dm(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=ul(s.transform,i||null);r!=null&&(n===null&&(n=le.empty()),n.set(s.field,r))}return n||null}function Ia(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ot(n,s,(i,r)=>km(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $n extends ai{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ze extends ai{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function pl(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ta(t,e,n){const s=new Map;L(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Cm(o,a,n[i]))}return s}function ba(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Am(r,o,e))}return s}class gl extends ai{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Om extends ai{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Pm{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Nm(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=on(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=on(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=rl();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=fl(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(A.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),k())}isEqual(e){return this.batchId===e.batchId&&Ot(this.mutations,e.mutations,(n,s)=>Ia(n,s))&&Ot(this.baseMutations,e.baseMutations,(n,s)=>Ia(n,s))}}class eo{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){L(e.mutations.length===s.length);let i=Im;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new eo(e,n,s,i)}}/**
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
 */class Lm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Mm{constructor(e){this.count=e}}/**
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
 */var j,R;function xm(t){switch(t){default:return b();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function ml(t){if(t===void 0)return Pe("GRPC error has no .code"),f.UNKNOWN;switch(t){case j.OK:return f.OK;case j.CANCELLED:return f.CANCELLED;case j.UNKNOWN:return f.UNKNOWN;case j.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case j.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case j.INTERNAL:return f.INTERNAL;case j.UNAVAILABLE:return f.UNAVAILABLE;case j.UNAUTHENTICATED:return f.UNAUTHENTICATED;case j.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case j.NOT_FOUND:return f.NOT_FOUND;case j.ALREADY_EXISTS:return f.ALREADY_EXISTS;case j.PERMISSION_DENIED:return f.PERMISSION_DENIED;case j.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case j.ABORTED:return f.ABORTED;case j.OUT_OF_RANGE:return f.OUT_OF_RANGE;case j.UNIMPLEMENTED:return f.UNIMPLEMENTED;case j.DATA_LOSS:return f.DATA_LOSS;default:return b()}}(R=j||(j={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class to{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Zn}static getOrCreateInstance(){return Zn===null&&(Zn=new to),Zn}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Zn=null;/**
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
 */class ci{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Bn.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ci(A.min(),i,ol(),Me(),k())}}class Bn{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Bn(s,n,k(),k(),k())}}/**
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
 */class ls{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class yl{constructor(e,n){this.targetId=e,this.Et=n}}class vl{constructor(e,n,s=ae.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Sa{constructor(){this.At=0,this.Rt=Ca(),this.vt=ae.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=k(),n=k(),s=k();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:b()}}),new Bn(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=Ca()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class Um{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Me(),this.qt=Aa(),this.Ut=new G(D)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const s=e.targetId,i=e.Et.count,r=this.Yt(s);if(r){const o=r.target;if(ir(o))if(i===0){const a=new _(o.path);this.Qt(s,a,ne.newNoDocument(a,A.min()))}else L(i===1);else{const a=this.Zt(s);a!==i&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=to.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&ir(a.target)){const c=new _(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,ne.newNoDocument(c,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=k();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new ci(e,n,this.Ut,this.Lt,s);return this.Lt=Me(),this.qt=Aa(),this.Ut=new G(D),i}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Sa,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new G(D),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||v("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Sa),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Aa(){return new W(_.comparator)}function Ca(){return new W(_.comparator)}/**
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
 */const Fm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Vm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),$m=(()=>({and:"AND",or:"OR"}))();class Bm{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ls(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wl(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qm(t,e){return Ls(t,e.toTimestamp())}function be(t){return L(!!t),A.fromTimestamp(function(e){const n=We(e);return new K(n.seconds,n.nanos)}(t))}function no(t,e){return function(n){return new P(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function _l(t){const e=P.fromString(t);return L(bl(e)),e}function cr(t,e){return no(t.databaseId,e.path)}function Pi(t,e){const n=_l(e);if(n.get(1)!==t.databaseId.projectId)throw new m(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new m(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new _(El(n))}function ur(t,e){return no(t.databaseId,e)}function jm(t){const e=_l(t);return e.length===4?P.emptyPath():El(e)}function lr(t){return new P(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function El(t){return L(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ka(t,e,n){return{name:cr(t,e),fields:n.value.mapValue.fields}}function Hm(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(L(u===void 0||typeof u=="string"),ae.fromBase64String(u||"")):(L(u===void 0||u instanceof Uint8Array),ae.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:ml(c.code);return new m(u,c.message||"")}(o);n=new vl(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Pi(t,s.document.name),r=be(s.document.updateTime),o=s.document.createTime?be(s.document.createTime):A.min(),a=new le({mapValue:{fields:s.document.fields}}),c=ne.newFoundDocument(i,r,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new ls(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Pi(t,s.document),r=s.readTime?be(s.readTime):A.min(),o=ne.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ls([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Pi(t,s.document),r=s.removedTargetIds||[];n=new ls([],r,i,null)}else{if(!("filter"in e))return b();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Mm(i),o=s.targetId;n=new yl(o,r)}}return n}function zm(t,e){let n;if(e instanceof $n)n={update:ka(t,e.key,e.value)};else if(e instanceof gl)n={delete:cr(t,e.key)};else if(e instanceof Ze)n={update:ka(t,e.key,e.data),updateMask:ey(e.fieldMask)};else{if(!(e instanceof Om))return b();n={verify:cr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Os)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof _n)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof En)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ps)return{fieldPath:r.field.canonicalString(),increment:o._t};throw b()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:qm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(t,e.precondition)),n}function Km(t,e){return t&&t.length>0?(L(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?be(s.updateTime):be(i);return r.isEqual(A.min())&&(r=be(i)),new Rm(r,s.transformResults||[])}(n,e))):[]}function Gm(t,e){return{documents:[ur(t,e.path)]}}function Wm(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=ur(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ur(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return Tl(we.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Tt(l.field),direction:Xm(l.dir)}}(u))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,u){return c.useProto3Json||si(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Qm(t){let e=jm(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){L(s===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let r=[];n.where&&(r=function(l){const h=Il(l);return h instanceof we&&Wu(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new sn(bt(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,si(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Ds(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Ds(d,h)}(n.endAt)),vm(e,i,o,r,a,"F",c,u)}function Ym(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Il(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=bt(e.unaryFilter.field);return z.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=bt(e.unaryFilter.field);return z.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=bt(e.unaryFilter.field);return z.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=bt(e.unaryFilter.field);return z.create(r,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(t):t.fieldFilter!==void 0?function(e){return z.create(bt(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return we.create(e.compositeFilter.filters.map(n=>Il(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return b()}}(e.compositeFilter.op))}(t):b()}function Xm(t){return Fm[t]}function Jm(t){return Vm[t]}function Zm(t){return $m[t]}function Tt(t){return{fieldPath:t.canonicalString()}}function bt(t){return se.fromServerFormat(t.fieldPath)}function Tl(t){return t instanceof z?function(e){if(e.op==="=="){if(ma(e.value))return{unaryFilter:{field:Tt(e.field),op:"IS_NAN"}};if(ga(e.value))return{unaryFilter:{field:Tt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ma(e.value))return{unaryFilter:{field:Tt(e.field),op:"IS_NOT_NAN"}};if(ga(e.value))return{unaryFilter:{field:Tt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tt(e.field),op:Jm(e.op),value:e.value}}}(t):t instanceof we?function(e){const n=e.getFilters().map(s=>Tl(s));return n.length===1?n[0]:{compositeFilter:{op:Zm(e.op),filters:n}}}(t):b()}function ey(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function bl(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class at{constructor(e,n,s,i,r=A.min(),o=A.min(),a=ae.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new at(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new at(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new at(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class ty{constructor(e){this.se=e}}function ny(t){const e=Qm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?or(e,e.limit,"L"):e}/**
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
 */class sy{constructor(){this.He=new iy}addToCollectionParentIndex(e,n){return this.He.add(n),p.resolve()}getCollectionParents(e,n){return p.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return p.resolve()}deleteFieldIndex(e,n){return p.resolve()}getDocumentsMatchingTarget(e,n){return p.resolve(null)}getIndexType(e,n){return p.resolve(0)}getFieldIndexes(e,n){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}getMinOffset(e,n){return p.resolve(Ge.min())}getMinOffsetFromCollectionGroup(e,n){return p.resolve(Ge.min())}updateCollectionGroup(e,n,s){return p.resolve()}updateIndexEntries(e,n){return p.resolve()}}class iy{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new G(P.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new G(P.comparator)).toArray()}}/**
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
 */class xt{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new xt(0)}static bn(){return new xt(-1)}}/**
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
 */class ry{constructor(){this.changes=new Ht(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ne.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?p.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class oy{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ay{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&on(s.mutation,i,fe.empty(),K.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,k()).next(()=>s))}getLocalViewOfDocuments(e,n,s=k()){const i=it();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Zt();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=it();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,k()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Me();const o=rn(),a=rn();return n.forEach((c,u)=>{const l=s.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Ze)?r=r.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),on(l.mutation,u,l.mutation.getFieldMask(),K.now())):o.set(u.key,fe.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new oy(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=rn();let i=new W((o,a)=>o-a),r=k();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||fe.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(i.get(a.batchId)||k()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=rl();l.forEach(d=>{if(!r.has(d)){const g=fl(n.get(d),s.get(d));g!==null&&h.set(d,g),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return p.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return _.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):el(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):p.resolve(it());let a=-1,c=r;return o.next(u=>p.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(l)?p.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,k())).next(l=>({batchId:a,changes:il(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new _(n)).next(s=>{let i=Zt();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Zt();return this.indexManager.getCollectionParents(e,i).next(o=>p.forEach(o,a=>{const c=function(u,l){return new Vn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,ne.newInvalidDocument(u)))});let o=Zt();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&on(u.mutation,c,fe.empty(),K.now()),ri(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class cy{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return p.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:be(s.createTime)}),p.resolve()}getNamedQuery(e,n){return p.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:ny(s.bundledQuery),readTime:be(s.readTime)}}(n)),p.resolve()}}/**
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
 */class uy{constructor(){this.overlays=new W(_.comparator),this.ts=new Map}getOverlay(e,n){return p.resolve(this.overlays.get(n))}getOverlays(e,n){const s=it();return p.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.re(e,n,r)}),p.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ts.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(s)),p.resolve()}getOverlaysForCollection(e,n,s){const i=it(),r=n.length+1,o=new _(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return p.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new W((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=r.get(u.largestBatchId);l===null&&(l=it(),r=r.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=it(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return p.resolve(a)}re(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(s.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Lm(n,s));let r=this.ts.get(n);r===void 0&&(r=k(),this.ts.set(n,r)),this.ts.set(n,r.add(s.key))}}/**
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
 */class so{constructor(){this.es=new G(Q.ns),this.ss=new G(Q.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new Q(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new Q(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new _(new P([])),s=new Q(n,e),i=new Q(n,e+1),r=[];return this.ss.forEachInRange([s,i],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new _(new P([])),s=new Q(n,e),i=new Q(n,e+1);let r=k();return this.ss.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Q(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Q{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return _.comparator(e.key,n.key)||D(e.ds,n.ds)}static rs(e,n){return D(e.ds,n.ds)||_.comparator(e.key,n.key)}}/**
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
 */class ly{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new G(Q.ns)}checkEmpty(e){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Pm(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new Q(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,n){return p.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ys(s),r=i<0?0:i;return p.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Q(n,0),i=new Q(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([s,i],o=>{const a=this.gs(o.ds);r.push(a)}),p.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new G(D);return n.forEach(i=>{const r=new Q(i,0),o=new Q(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{s=s.add(a.ds)})}),p.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;_.isDocumentKey(r)||(r=r.child(""));const o=new Q(new _(r),0);let a=new G(D);return this._s.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.ds)),!0)},o),p.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const i=this.gs(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){L(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return p.forEach(n.mutations,i=>{const r=new Q(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new Q(n,0),i=this._s.firstAfterOrEqual(s);return p.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,p.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class hy{constructor(e){this.Ts=e,this.docs=new W(_.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return p.resolve(s?s.document.mutableCopy():ne.newInvalidDocument(n))}getEntries(e,n){let s=Me();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ne.newInvalidDocument(i))}),p.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Me();const o=n.path,a=new _(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||em(Zg(l),s)<=0||(i.has(l.key)||ri(n,l))&&(r=r.insert(l.key,l.mutableCopy()))}return p.resolve(r)}getAllFromCollectionGroup(e,n,s,i){b()}Es(e,n){return p.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new dy(this)}getSize(e){return p.resolve(this.size)}}class dy extends ry{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(s)}),p.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class fy{constructor(e){this.persistence=e,this.As=new Ht(n=>Xr(n),Jr),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.Rs=0,this.vs=new so,this.targetCount=0,this.bs=xt.vn()}forEachTarget(e,n){return this.As.forEach((s,i)=>n(i)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),p.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new xt(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,p.resolve()}updateTargetData(e,n){return this.Sn(n),p.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),p.waitFor(r).next(()=>i)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return p.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),p.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),p.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),p.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return p.resolve(s)}containsKey(e,n){return p.resolve(this.vs.containsKey(n))}}/**
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
 */class py{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Qr(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new fy(this),this.indexManager=new sy,this.remoteDocumentCache=function(s){return new hy(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new ty(n),this.xs=new cy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uy,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new ly(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){v("MemoryPersistence","Starting transaction:",e);const i=new gy(this.Vs.next());return this.referenceDelegate.Ns(),s(i).next(r=>this.referenceDelegate.ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(e,n){return p.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class gy extends nm{constructor(e){super(),this.currentSequenceNumber=e}}class io{constructor(e){this.persistence=e,this.$s=new so,this.Ms=null}static Fs(e){return new io(e)}get Bs(){if(this.Ms)return this.Ms;throw b()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),p.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),p.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),p.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Bs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Bs,s=>{const i=_.fromPath(s);return this.Ls(e,i).next(r=>{r||n.removeEntry(i,A.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return p.or([()=>p.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class ro{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=i}static Di(e,n){let s=k(),i=k();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ro(e,n.fromCache,s,i)}}/**
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
 */class my{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ni(e,n).next(r=>r||this.ki(e,n,i,s)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(_a(n))return p.resolve(null);let s=Le(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=or(n,null,"F"),s=Le(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=k(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.$i(n,a);return this.Mi(n,u,o,c.readTime)?this.Ni(e,or(n,null,"F")):this.Fi(e,u,n,c)}))})))}ki(e,n,s,i){return _a(n)||i.isEqual(A.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,s,i)?this.Oi(e,n):(la()<=N.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ar(n)),this.Fi(e,o,n,Jg(i,-1)))})}$i(e,n){let s=new G(nl(e));return n.forEach((i,r)=>{ri(e,r)&&(s=s.add(r))}),s}Mi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,n){return la()<=N.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",ar(n)),this.xi.getDocumentsMatchingQuery(e,n,Ge.min())}Fi(e,n,s,i){return this.xi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class yy{constructor(e,n,s,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new W(D),this.qi=new Ht(r=>Xr(r),Jr),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ay(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function vy(t,e,n,s){return new yy(t,e,n,s)}async function Sl(t,e){const n=C(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=k();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of r){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function wy(t,e){const n=C(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=p.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(w=>{const E=c.docVersions.get(g);L(E!==null),w.version.compareTo(E)<0&&(l.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),u.addEntry(w)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=k();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Al(t){const e=C(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function _y(t,e){const n=C(t),s=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(r,l.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,l.addedDocuments,h)));let g=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(ae.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),i=i.insert(h,g),function(w,E,I){return w.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,g,l)&&a.push(n.Ds.updateTargetData(r,g))});let c=Me(),u=k();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,l))}),a.push(Ey(r,o,e.documentUpdates).next(l=>{c=l.zi,u=l.ji})),!s.isEqual(A.min())){const l=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(l)}return p.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.Li=i,r))}function Ey(t,e,n){let s=k(),i=k();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Me();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(A.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{zi:o,ji:i}})}function Iy(t,e){const n=C(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Ty(t,e){const n=C(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ds.getTargetData(s,e).next(r=>r?(i=r,p.resolve(i)):n.Ds.allocateTargetId(s).next(o=>(i=new at(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Li.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function hr(t,e,n){const s=C(t),i=s.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(i.target)}function Ra(t,e,n){const s=C(t);let i=A.min(),r=k();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=C(a),h=l.qi.get(u);return h!==void 0?p.resolve(l.Li.get(h)):l.Ds.getTargetData(c,u)}(s,o,Le(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?i:A.min(),n?r:k())).next(a=>(by(s,wm(e),a),{documents:a,Wi:r})))}function by(t,e,n){let s=t.Ui.get(e)||A.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ui.set(e,s)}class Na{constructor(){this.activeTargetIds=ol()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Sy{constructor(){this.Br=new Na,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Na,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ay{qr(e){}shutdown(){}}/**
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
 */class Da{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let es=null;function Li(){return es===null?es=268435456+Math.round(2147483648*Math.random()):es++,"0x"+es.toString(16)}/**
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
 */const Cy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ky{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const ee="WebChannelConnection";class Ry extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,i,r){const o=Li(),a=this.ao(e,n);v("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,i,r),this.lo(e,a,c,s).then(u=>(v("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Rs("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}fo(e,n,s,i,r,o){return this.co(e,n,s,i,r)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+jt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ao(e,n){const s=Cy[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,i){const r=Li();return new Promise((o,a)=>{const c=new qg;c.setWithCredentials(!0),c.listenOnce(Vg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Oi.NO_ERROR:const l=c.getResponseJson();v(ee,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(l)),o(l);break;case Oi.TIMEOUT:v(ee,`RPC '${e}' ${r} timed out`),a(new m(f.DEADLINE_EXCEEDED,"Request time out"));break;case Oi.HTTP_ERROR:const h=c.getStatus();if(v(ee,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const w=function(E){const I=E.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(I)>=0?I:f.UNKNOWN}(g.status);a(new m(w,g.message))}else a(new m(f.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new m(f.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{v(ee,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(i);v(ee,`RPC '${e}' ${r} sending request:`,i),c.send(n,"POST",u,s,15)})}wo(e,n,s){const i=Li(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ug(),a=Fg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new Bg({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=r.join("");v(ee,`Creating RPC '${e}' stream ${i}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,d=!1;const g=new ky({Wr:E=>{d?v(ee,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(h||(v(ee,`Opening RPC '${e}' stream ${i} transport.`),l.open(),h=!0),v(ee,`RPC '${e}' stream ${i} sending:`,E),l.send(E))},Hr:()=>l.close()}),w=(E,I,O)=>{E.listen(I,M=>{try{O(M)}catch(x){setTimeout(()=>{throw x},0)}})};return w(l,Yn.EventType.OPEN,()=>{d||v(ee,`RPC '${e}' stream ${i} transport opened.`)}),w(l,Yn.EventType.CLOSE,()=>{d||(d=!0,v(ee,`RPC '${e}' stream ${i} transport closed`),g.so())}),w(l,Yn.EventType.ERROR,E=>{d||(d=!0,Rs(ee,`RPC '${e}' stream ${i} transport errored:`,E),g.so(new m(f.UNAVAILABLE,"The operation could not be completed")))}),w(l,Yn.EventType.MESSAGE,E=>{var I;if(!d){const O=E.data[0];L(!!O);const M=O,x=M.error||((I=M[0])===null||I===void 0?void 0:I.error);if(x){v(ee,`RPC '${e}' stream ${i} received error:`,x);const F=x.status;let de=function(It){const xe=j[It];if(xe!==void 0)return ml(xe)}(F),_e=x.message;de===void 0&&(de=f.INTERNAL,_e="Unknown error status: "+F+" with message "+x.message),d=!0,g.so(new m(de,_e)),l.close()}else v(ee,`RPC '${e}' stream ${i} received:`,O),g.io(O)}}),w(a,$g.STAT_EVENT,E=>{E.stat===ca.PROXY?v(ee,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===ca.NOPROXY&&v(ee,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.no()},0),g}}function Mi(){return typeof document<"u"?document:null}/**
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
 */function ui(t){return new Bm(t,!0)}/**
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
 */class Cl{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&v("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class kl{constructor(e,n,s,i,r,o,a,c){this.Ws=e,this.bo=s,this.Po=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Cl(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(Pe(n.toString()),Pe("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===n&&this.Ko(s,i)},s=>{e(()=>{const i=new m(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(i)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{s(()=>this.Go(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ny extends kl{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=Hm(this.serializer,e),s=function(i){if(!("targetChange"in i))return A.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?A.min():r.readTime?be(r.readTime):A.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=lr(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;return o=ir(a)?{documents:Gm(i,a)}:{query:Wm(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=wl(i,r.resumeToken):r.snapshotVersion.compareTo(A.min())>0&&(o.readTime=Ls(i,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=Ym(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=lr(this.serializer),n.removeTarget=e,this.Fo(n)}}class Dy extends kl{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(L(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=Km(e.writeResults,e.commitTime),s=be(e.commitTime);return this.listener.Zo(s,n)}return L(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=lr(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>zm(this.serializer,s))};this.Fo(n)}}/**
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
 */class Oy extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new m(f.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.co(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new m(f.UNKNOWN,i.toString())})}fo(e,n,s,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new m(f.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class Py{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Pe(n),this.ru=!1):v("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class Ly{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{s.enqueueAndForget(async()=>{Et(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=C(a);c.du.add(4),await qn(c),c.mu.set("Unknown"),c.du.delete(4),await li(c)}(this))})}),this.mu=new Py(s,i)}}async function li(t){if(Et(t))for(const e of t.wu)await e(!0)}async function qn(t){for(const e of t.wu)await e(!1)}function Rl(t,e){const n=C(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),co(n)?ao(n):zt(n).No()&&oo(n,e))}function Nl(t,e){const n=C(t),s=zt(n);n.fu.delete(e),s.No()&&Dl(n,e),n.fu.size===0&&(s.No()?s.$o():Et(n)&&n.mu.set("Unknown"))}function oo(t,e){t.gu.Ot(e.targetId),zt(t).jo(e)}function Dl(t,e){t.gu.Ot(e),zt(t).Wo(e)}function ao(t){t.gu=new Um({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),zt(t).start(),t.mu.ou()}function co(t){return Et(t)&&!zt(t).xo()&&t.fu.size>0}function Et(t){return C(t).du.size===0}function Ol(t){t.gu=void 0}async function My(t){t.fu.forEach((e,n)=>{oo(t,e)})}async function xy(t,e){Ol(t),co(t)?(t.mu.au(e),ao(t)):t.mu.set("Unknown")}async function Uy(t,e,n){if(t.mu.set("Online"),e instanceof vl&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ms(t,s)}else if(e instanceof ls?t.gu.Kt(e):e instanceof yl?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(A.min()))try{const s=await Al(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.gu.Xt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.fu.get(c);u&&i.fu.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.fu.get(a);if(!c)return;i.fu.set(a,c.withResumeToken(ae.EMPTY_BYTE_STRING,c.snapshotVersion)),Dl(i,a);const u=new at(c.target,a,1,c.sequenceNumber);oo(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await Ms(t,s)}}async function Ms(t,e,n){if(!Fn(e))throw e;t.du.add(1),await qn(t),t.mu.set("Offline"),n||(n=()=>Al(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await li(t)})}function Pl(t,e){return e().catch(n=>Ms(t,n,e))}async function hi(t){const e=C(t),n=Qe(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;Fy(e);)try{const i=await Iy(e.localStore,s);if(i===null){e.lu.length===0&&n.$o();break}s=i.batchId,Vy(e,i)}catch(i){await Ms(e,i)}Ll(e)&&Ml(e)}function Fy(t){return Et(t)&&t.lu.length<10}function Vy(t,e){t.lu.push(e);const n=Qe(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function Ll(t){return Et(t)&&!Qe(t).xo()&&t.lu.length>0}function Ml(t){Qe(t).start()}async function $y(t){Qe(t).tu()}async function By(t){const e=Qe(t);for(const n of t.lu)e.Yo(n.mutations)}async function qy(t,e,n){const s=t.lu.shift(),i=eo.from(s,e,n);await Pl(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await hi(t)}async function jy(t,e){e&&Qe(t).Jo&&await async function(n,s){if(i=s.code,xm(i)&&i!==f.ABORTED){const r=n.lu.shift();Qe(n).Oo(),await Pl(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await hi(n)}var i}(t,e),Ll(t)&&Ml(t)}async function Oa(t,e){const n=C(t);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=Et(n);n.du.add(3),await qn(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await li(n)}async function Hy(t,e){const n=C(t);e?(n.du.delete(2),await li(n)):e||(n.du.add(2),await qn(n),n.mu.set("Unknown"))}function zt(t){return t.yu||(t.yu=function(e,n,s){const i=C(e);return i.nu(),new Ny(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:My.bind(null,t),Zr:xy.bind(null,t),zo:Uy.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),co(t)?ao(t):t.mu.set("Unknown")):(await t.yu.stop(),Ol(t))})),t.yu}function Qe(t){return t.pu||(t.pu=function(e,n,s){const i=C(e);return i.nu(),new Dy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:$y.bind(null,t),Zr:jy.bind(null,t),Xo:By.bind(null,t),Zo:qy.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await hi(t)):(await t.pu.stop(),t.lu.length>0&&(v("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
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
 */class uo{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new He,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new uo(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new m(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lo(t,e){if(Pe("AsyncQueue",`${e}: ${t}`),Fn(t))return new m(f.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Rt{constructor(e){this.comparator=e?(n,s)=>e(n,s)||_.comparator(n.key,s.key):(n,s)=>_.comparator(n.key,s.key),this.keyedMap=Zt(),this.sortedSet=new W(this.comparator)}static emptySet(e){return new Rt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Rt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Pa{constructor(){this.Iu=new W(_.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):b():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ut{constructor(e,n,s,i,r,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ut(e,n,Rt.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ii(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class zy{constructor(){this.Eu=void 0,this.listeners=[]}}class Ky{constructor(){this.queries=new Ht(e=>tl(e),ii),this.onlineState="Unknown",this.Au=new Set}}async function Gy(t,e){const n=C(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new zy),i)try{r.Eu=await n.onListen(s)}catch(o){const a=lo(o,`Initialization of query '${ar(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&ho(n)}async function Wy(t,e){const n=C(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Qy(t,e){const n=C(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Eu=i}}s&&ho(n)}function Yy(t,e,n){const s=C(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function ho(t){t.Au.forEach(e=>{e.next()})}class Xy{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Ut(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Ut.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class xl{constructor(e){this.key=e}}class Ul{constructor(e){this.key=e}}class Jy{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=k(),this.mutatedKeys=k(),this.Ku=nl(e),this.Gu=new Rt(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new Pa,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),g=ri(this.query,h)?h:null,w=!!d&&this.mutatedKeys.has(d.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let I=!1;d&&g?d.data.isEqual(g.data)?w!==E&&(s.track({type:3,doc:g}),I=!0):this.Wu(d,g)||(s.track({type:2,doc:g}),I=!0,(c&&this.Ku(g,c)>0||u&&this.Ku(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),I=!0):d&&!g&&(s.track({type:1,doc:d}),I=!0,(c||u)&&(a=!0)),I&&(g?(o=o.add(g),r=E?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),s.track({type:1,doc:l})}return{Gu:o,ju:s,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((u,l)=>function(h,d){const g=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return g(h)-g(d)}(u.type,l.type)||this.Ku(u.doc,l.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,r.length!==0||c?{snapshot:new Ut(this.query,e.Gu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Pa,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=k(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new Ul(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new xl(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=k();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Ut.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Zy{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class ev{constructor(e){this.key=e,this.ec=!1}}class tv{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Ht(a=>tl(a),ii),this.ic=new Map,this.rc=new Set,this.oc=new W(_.comparator),this.uc=new Map,this.cc=new so,this.ac={},this.hc=new Map,this.lc=xt.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function nv(t,e){const n=dv(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await Ty(n.localStore,Le(e));n.isPrimaryClient&&Rl(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await sv(n,e,s,a==="current",o.resumeToken)}return i}async function sv(t,e,n,s,i){t.dc=(h,d,g)=>async function(w,E,I,O){let M=E.view.zu(I);M.Mi&&(M=await Ra(w.localStore,E.query,!1).then(({documents:de})=>E.view.zu(de,M)));const x=O&&O.targetChanges.get(E.targetId),F=E.view.applyChanges(M,w.isPrimaryClient,x);return Ma(w,E.targetId,F.Yu),F.snapshot}(t,h,d,g);const r=await Ra(t.localStore,e,!0),o=new Jy(e,r.Wi),a=o.zu(r.documents),c=Bn.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);Ma(t,n,u.Yu);const l=new Zy(e,n,o);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function iv(t,e){const n=C(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!ii(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await hr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Nl(n.remoteStore,s.targetId),dr(n,s.targetId)}).catch(Un)):(dr(n,s.targetId),await hr(n.localStore,s.targetId,!0))}async function rv(t,e,n){const s=fv(t);try{const i=await function(r,o){const a=C(r),c=K.now(),u=o.reduce((d,g)=>d.add(g.key),k());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Me(),w=k();return a.Ki.getEntries(d,u).next(E=>{g=E,g.forEach((I,O)=>{O.isValidDocument()||(w=w.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(E=>{l=E;const I=[];for(const O of o){const M=Dm(O,l.get(O.key).overlayedDocument);M!=null&&I.push(new Ze(O.key,M,zu(M.value.mapValue),ve.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,I,o)}).next(E=>{h=E;const I=E.applyToLocalDocumentSet(l,w);return a.documentOverlayCache.saveOverlays(d,E.batchId,I)})}).then(()=>({batchId:h.batchId,changes:il(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.ac[r.currentUser.toKey()];c||(c=new W(D)),c=c.insert(o,a),r.ac[r.currentUser.toKey()]=c}(s,i.batchId,n),await jn(s,i.changes),await hi(s.remoteStore)}catch(i){const r=lo(i,"Failed to persist write");n.reject(r)}}async function Fl(t,e){const n=C(t);try{const s=await _y(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&(L(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?L(o.ec):i.removedDocuments.size>0&&(L(o.ec),o.ec=!1))}),await jn(n,s,e)}catch(s){await Un(s)}}function La(t,e,n){const s=C(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=C(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Ru(o)&&(c=!0)}),c&&ho(a)}(s.eventManager,e),i.length&&s.nc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ov(t,e,n){const s=C(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let o=new W(_.comparator);o=o.insert(r,ne.newNoDocument(r,A.min()));const a=k().add(r),c=new ci(A.min(),new Map,new G(D),o,a);await Fl(s,c),s.oc=s.oc.remove(r),s.uc.delete(e),fo(s)}else await hr(s.localStore,e,!1).then(()=>dr(s,e,n)).catch(Un)}async function av(t,e){const n=C(t),s=e.batch.batchId;try{const i=await wy(n.localStore,e);$l(n,s,null),Vl(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await jn(n,i)}catch(i){await Un(i)}}async function cv(t,e,n){const s=C(t);try{const i=await function(r,o){const a=C(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(L(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);$l(s,e,n),Vl(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await jn(s,i)}catch(i){await Un(i)}}function Vl(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function $l(t,e,n){const s=C(t);let i=s.ac[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function dr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||Bl(t,s)})}function Bl(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Nl(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),fo(t))}function Ma(t,e,n){for(const s of n)s instanceof xl?(t.cc.addReference(s.key,e),uv(t,s)):s instanceof Ul?(v("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Bl(t,s.key)):b()}function uv(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(v("SyncEngine","New document in limbo: "+n),t.rc.add(s),fo(t))}function fo(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new _(P.fromString(e)),s=t.lc.next();t.uc.set(s,new ev(n)),t.oc=t.oc.insert(n,s),Rl(t.remoteStore,new at(Le(Ju(n.path)),s,2,Qr.ct))}}async function jn(t,e,n){const s=C(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=ro.Di(c.targetId,u);r.push(l)}}))}),await Promise.all(o),s.nc.zo(i),await async function(a,c){const u=C(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(c,h=>p.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>p.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Fn(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Li.get(h),g=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(g);u.Li=u.Li.insert(h,w)}}}(s.localStore,r))}async function lv(t,e){const n=C(t);if(!n.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const s=await Sl(n.localStore,e);n.currentUser=e,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new m(f.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await jn(n,s.Qi)}}function hv(t,e){const n=C(t),s=n.uc.get(e);if(s&&s.ec)return k().add(s.key);{let i=k();const r=n.ic.get(e);if(!r)return i;for(const o of r){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function dv(t){const e=C(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ov.bind(null,e),e.nc.zo=Qy.bind(null,e.eventManager),e.nc.wc=Yy.bind(null,e.eventManager),e}function fv(t){const e=C(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=av.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cv.bind(null,e),e}class xa{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ui(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return vy(this.persistence,new my,e.initialUser,this.serializer)}createPersistence(e){return new py(io.Fs,this.serializer)}createSharedClientState(e){return new Sy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>La(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=lv.bind(null,this.syncEngine),await Hy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ky}createDatastore(e){const n=ui(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Ry(i));var i;return function(r,o,a,c){return new Oy(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>La(this.syncEngine,a,0),o=Da.D()?new Da:new Ay,new Ly(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,u){const l=new tv(s,i,r,o,a,c);return u&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=C(e);v("RemoteStore","RemoteStore shutting down."),n.du.add(5),await qn(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class gv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Pe("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class mv{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=te.UNAUTHENTICATED,this.clientId=Bu.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{v("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(v("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new m(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new He;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=lo(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function xi(t,e){t.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Sl(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ua(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vv(t);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Oa(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Oa(e.remoteStore,r)),t._onlineComponents=e}function yv(t){return t.name==="FirebaseError"?t.code===f.FAILED_PRECONDITION||t.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function vv(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){v("FirestoreClient","Using user provided OfflineComponentProvider");try{await xi(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!yv(n))throw n;Rs("Error using user provided cache. Falling back to memory cache: "+n),await xi(t,new xa)}}else v("FirestoreClient","Using default OfflineComponentProvider"),await xi(t,new xa);return t._offlineComponents}async function ql(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(v("FirestoreClient","Using user provided OnlineComponentProvider"),await Ua(t,t._uninitializedComponentsProvider._online)):(v("FirestoreClient","Using default OnlineComponentProvider"),await Ua(t,new pv))),t._onlineComponents}function wv(t){return ql(t).then(e=>e.syncEngine)}async function _v(t){const e=await ql(t),n=e.eventManager;return n.onListen=nv.bind(null,e.syncEngine),n.onUnlisten=iv.bind(null,e.syncEngine),n}function Ev(t,e,n={}){const s=new He;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const u=new gv({next:h=>{r.enqueueAndForget(()=>Wy(i,l)),h.fromCache&&a.source==="server"?c.reject(new m(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Xy(o,u,{includeMetadataChanges:!0,xu:!0});return Gy(i,l)}(await _v(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */const Fa=new Map;/**
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
 */function jl(t,e,n){if(!n)throw new m(f.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Iv(t,e,n,s){if(e===!0&&s===!0)throw new m(f.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Va(t){if(!_.isDocumentKey(t))throw new m(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $a(t){if(_.isDocumentKey(t))throw new m(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function di(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function Ye(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new m(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=di(t);throw new m(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Ba{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new m(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new m(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Iv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class fi{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ba({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new m(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new m(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ba(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new jg;switch(n.type){case"firstParty":return new Gg(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new m(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Fa.get(e);n&&(v("ComponentProvider","Removing Datastore"),Fa.delete(e),n.terminate())}(this),Promise.resolve()}}function Tv(t,e,n,s={}){var i;const r=(t=Ye(t,fi))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Rs("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=te.MOCK_USER;else{o=tc(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new m(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new te(c)}t._authCredentials=new Hg(new $u(o,a))}}/**
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
 */class he{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ze(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new he(this.firestore,e,this._key)}}class Kt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Kt(this.firestore,e,this._query)}}class ze extends Kt{constructor(e,n,s){super(e,n,Ju(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new he(this.firestore,null,new _(e))}withConverter(e){return new ze(this.firestore,e,this._path)}}function c_(t,e,...n){if(t=V(t),jl("collection","path",e),t instanceof fi){const s=P.fromString(e,...n);return $a(s),new ze(t,null,s)}{if(!(t instanceof he||t instanceof ze))throw new m(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(P.fromString(e,...n));return $a(s),new ze(t.firestore,null,s)}}function bv(t,e,...n){if(t=V(t),arguments.length===1&&(e=Bu.A()),jl("doc","path",e),t instanceof fi){const s=P.fromString(e,...n);return Va(s),new he(t,null,new _(s))}{if(!(t instanceof he||t instanceof ze))throw new m(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(P.fromString(e,...n));return Va(s),new he(t.firestore,t instanceof ze?t.converter:null,new _(s))}}/**
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
 */class Sv{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Cl(this,"async_queue_retry"),this.qc=()=>{const n=Mi();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Mi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Mi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new He;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Fn(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Pe("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=uo.createAndSchedule(this,e,n,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&b()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Hn extends fi{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Sv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zl(this),this._firestoreClient.terminate()}}function u_(t,e){const n=typeof t=="object"?t:yr(),s=typeof t=="string"?t:e||"(default)",i=Fs(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Za("firestore");r&&Tv(i,...r)}return i}function Hl(t){return t._firestoreClient||zl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zl(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,c,u){return new om(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new mv(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ft(ae.fromBase64String(e))}catch(n){throw new m(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ft(ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class pi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new m(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class po{constructor(e){this._methodName=e}}/**
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
 */class go{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new m(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new m(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}}/**
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
 */const Av=/^__.*__$/;class Cv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ze(e,this.data,this.fieldMask,n,this.fieldTransforms):new $n(e,this.data,n,this.fieldTransforms)}}class Kl{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ze(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Gl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class mo{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new mo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.ea(e),i}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return xs(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Gl(this.Yc)&&Av.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class kv{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||ui(e)}ua(e,n,s,i=!1){return new mo({Yc:e,methodName:n,oa:s,path:se.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gi(t){const e=t._freezeSettings(),n=ui(t._databaseId);return new kv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Wl(t,e,n,s,i,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,n,i);yo("Data must be an object, but it was:",o,s);const a=Ql(s,o);let c,u;if(r.merge)c=new fe(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const l=[];for(const h of r.mergeFields){const d=fr(e,h,n);if(!o.contains(d))throw new m(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Xl(l,d)||l.push(d)}c=new fe(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new Cv(new le(a),c,u)}class mi extends po{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mi}}function Rv(t,e,n,s){const i=t.ua(1,e,n);yo("Data must be an object, but it was:",i,s);const r=[],o=le.empty();_t(s,(c,u)=>{const l=vo(e,c,n);u=V(u);const h=i.na(l);if(u instanceof mi)r.push(l);else{const d=zn(u,h);d!=null&&(r.push(l),o.set(l,d))}});const a=new fe(r);return new Kl(o,a,i.fieldTransforms)}function Nv(t,e,n,s,i,r){const o=t.ua(1,e,n),a=[fr(e,s,n)],c=[i];if(r.length%2!=0)throw new m(f.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(fr(e,r[d])),c.push(r[d+1]);const u=[],l=le.empty();for(let d=a.length-1;d>=0;--d)if(!Xl(u,a[d])){const g=a[d];let w=c[d];w=V(w);const E=o.na(g);if(w instanceof mi)u.push(g);else{const I=zn(w,E);I!=null&&(u.push(g),l.set(g,I))}}const h=new fe(u);return new Kl(l,h,o.fieldTransforms)}function Dv(t,e,n,s=!1){return zn(n,t.ua(s?4:3,e))}function zn(t,e){if(Yl(t=V(t)))return yo("Unsupported field value:",e,t),Ql(t,e);if(t instanceof po)return function(n,s){if(!Gl(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=zn(o,s.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=V(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Sm(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=K.fromDate(n);return{timestampValue:Ls(s.serializer,i)}}if(n instanceof K){const i=new K(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ls(s.serializer,i)}}if(n instanceof go)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ft)return{bytesValue:wl(s.serializer,n._byteString)};if(n instanceof he){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:no(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${di(n)}`)}(t,e)}function Ql(t,e){const n={};return qu(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_t(t,(s,i)=>{const r=zn(i,e.Xc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Yl(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof K||t instanceof go||t instanceof Ft||t instanceof he||t instanceof po)}function yo(t,e,n){if(!Yl(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=di(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function fr(t,e,n){if((e=V(e))instanceof pi)return e._internalPath;if(typeof e=="string")return vo(t,e);throw xs("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ov=new RegExp("[~\\*/\\[\\]]");function vo(t,e,n){if(e.search(Ov)>=0)throw xs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pi(...e.split("."))._internalPath}catch{throw xs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xs(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new m(f.INVALID_ARGUMENT,a+t+c)}function Xl(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Jl{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new he(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Pv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Pv extends Jl{data(){return super.data()}}function wo(t,e){return typeof e=="string"?vo(t,e):e instanceof pi?e._internalPath:e._delegate._internalPath}/**
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
 */function Lv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new m(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _o{}class Mv extends _o{}function l_(t,e,...n){let s=[];e instanceof _o&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof Eo).length,o=i.filter(a=>a instanceof yi).length;if(r>1||r>0&&o>0)throw new m(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class yi extends Mv{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new yi(e,n,s)}_apply(e){const n=this._parse(e);return Zl(e._query,n),new Kt(e.firestore,e.converter,rr(e._query,n))}_parse(e){const n=gi(e.firestore);return function(i,r,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new m(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){ja(l,u);const d=[];for(const g of l)d.push(qa(a,i,g));h={arrayValue:{values:d}}}else h=qa(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||ja(l,u),h=Dv(o,r,l,u==="in"||u==="not-in");return z.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function h_(t,e,n){const s=e,i=wo("where",t);return yi._create(i,s,n)}class Eo extends _o{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Eo(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:we.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)Zl(r,a),r=rr(r,a)}(e._query,n),new Kt(e.firestore,e.converter,rr(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function qa(t,e,n){if(typeof(n=V(n))=="string"){if(n==="")throw new m(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!el(e)&&n.indexOf("/")!==-1)throw new m(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(P.fromString(n));if(!_.isDocumentKey(s))throw new m(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return pa(t,new _(s))}if(n instanceof he)return pa(t,n._key);throw new m(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${di(n)}.`)}function ja(t,e){if(!Array.isArray(t)||t.length===0)throw new m(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Zl(t,e){if(e.isInequality()){const s=Zr(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new m(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=Zu(t);r!==null&&xv(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new m(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new m(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function xv(t,e,n){if(!n.isEqual(e))throw new m(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Uv{convertValue(e,n="none"){switch(pt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return H(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){const s={};return _t(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new go(H(e.latitude),H(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Hu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(yn(e));default:return null}}convertTimestamp(e){const n=We(e);return new K(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=P.fromString(e);L(bl(s));const i=new vn(s.get(1),s.get(3)),r=new _(s.popFirst(5));return i.isEqual(n)||Pe(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function eh(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class ts{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Fv extends Jl{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new hs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(wo("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class hs extends Fv{data(e={}){return super.data(e)}}class Vv{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ts(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new hs(this._firestore,this._userDataWriter,s.key,s,new ts(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new m(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new hs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ts(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new hs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ts(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:$v(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function $v(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}class Bv extends Uv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ft(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new he(this.firestore,null,n)}}function d_(t){t=Ye(t,Kt);const e=Ye(t.firestore,Hn),n=Hl(e),s=new Bv(e);return Lv(t._query),Ev(n,t._query).then(i=>new Vv(e,s,t,i))}function f_(t,e,n){t=Ye(t,he);const s=Ye(t.firestore,Hn),i=eh(t.converter,e,n);return Io(s,[Wl(gi(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ve.none())])}function p_(t,e,n,...s){t=Ye(t,he);const i=Ye(t.firestore,Hn),r=gi(i);let o;return o=typeof(e=V(e))=="string"||e instanceof pi?Nv(r,"updateDoc",t._key,e,n,s):Rv(r,"updateDoc",t._key,e),Io(i,[o.toMutation(t._key,ve.exists(!0))])}function g_(t,e){const n=Ye(t.firestore,Hn),s=bv(t),i=eh(t.converter,e);return Io(n,[Wl(gi(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,ve.exists(!1))]).then(()=>s)}function Io(t,e){return function(n,s){const i=new He;return n.asyncQueue.enqueueAndForget(async()=>rv(await wv(n),s,i)),i.promise}(Hl(t),e)}(function(t,e=!0){(function(n){jt=n})(mt),lt(new Ke("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Hn(new zg(n.getProvider("auth-internal")),new Qg(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new m(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vn(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ne(ua,"3.10.1",t),Ne(ua,"3.10.1","esm2017")})();/**
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
 */const th="firebasestorage.googleapis.com",nh="storageBucket",qv=2*60*1e3,jv=10*60*1e3;/**
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
 */class q extends Ae{constructor(e,n,s=0){super(Ui(e),`Firebase Storage: ${n} (${Ui(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,q.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ui(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var B;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(B||(B={}));function Ui(t){return"storage/"+t}function To(){const t="An unknown error occurred, please check the error payload for server response.";return new q(B.UNKNOWN,t)}function Hv(t){return new q(B.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function zv(t){return new q(B.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Kv(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new q(B.UNAUTHENTICATED,t)}function Gv(){return new q(B.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Wv(t){return new q(B.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Qv(){return new q(B.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Yv(){return new q(B.CANCELED,"User canceled the upload/download.")}function Xv(t){return new q(B.INVALID_URL,"Invalid URL '"+t+"'.")}function Jv(t){return new q(B.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Zv(){return new q(B.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+nh+"' property when initializing the app?")}function ew(){return new q(B.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function tw(){return new q(B.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function nw(t){return new q(B.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function pr(t){return new q(B.INVALID_ARGUMENT,t)}function sh(){return new q(B.APP_DELETED,"The Firebase app was deleted.")}function sw(t){return new q(B.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function an(t,e){return new q(B.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Wt(t){throw new q(B.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class pe{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=pe.makeFromUrl(e,n)}catch{return new pe(e,"")}if(s.path==="")return s;throw Jv(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(F){F.path_=decodeURIComponent(F.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),w={bucket:1,path:3},E=n===th?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",O=new RegExp(`^https?://${E}/${i}/${I}`,"i"),x=[{regex:a,indices:c,postModify:r},{regex:g,indices:w,postModify:u},{regex:O,indices:{bucket:1,path:2},postModify:u}];for(let F=0;F<x.length;F++){const de=x[F],_e=de.regex.exec(e);if(_e){const It=_e[de.indices.bucket];let xe=_e[de.indices.path];xe||(xe=""),s=new pe(It,xe),de.postModify(s);break}}if(s==null)throw Xv(e);return s}}class iw{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function rw(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...I){u||(u=!0,e.apply(null,I))}function h(I){i=setTimeout(()=>{i=null,t(g,c())},I)}function d(){r&&clearTimeout(r)}function g(I,...O){if(u){d();return}if(I){d(),l.call(null,I,...O);return}if(c()||o){d(),l.call(null,I,...O);return}s<64&&(s*=2);let x;a===1?(a=2,x=0):x=(s+Math.random())*1e3,h(x)}let w=!1;function E(I){w||(w=!0,d(),!u&&(i!==null?(I||(a=2),clearTimeout(i),h(0)):I||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,E(!0)},n),E}function ow(t){t(!1)}/**
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
 */function aw(t){return t!==void 0}function cw(t){return typeof t=="object"&&!Array.isArray(t)}function bo(t){return typeof t=="string"||t instanceof String}function Ha(t){return So()&&t instanceof Blob}function So(){return typeof Blob<"u"&&!Dh()}function za(t,e,n,s){if(s<e)throw pr(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw pr(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ao(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function ih(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ct;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ct||(ct={}));/**
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
 */function uw(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class lw{constructor(e,n,s,i,r,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,w)=>{this.resolve_=g,this.reject_=w,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ns(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ct.NO_ERROR,c=r.getStatus();if(!a||uw(c,this.additionalRetryCodes_)&&this.retry){const l=r.getErrorCode()===ct.ABORT;s(!1,new ns(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new ns(u,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());aw(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=To();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?sh():Yv();o(c)}else{const c=Qv();o(c)}};this.canceled_?n(!1,new ns(!1,null,!0)):this.backoffId_=rw(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ow(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ns{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function hw(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dw(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fw(t,e){e&&(t["X-Firebase-GMPID"]=e)}function pw(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function gw(t,e,n,s,i,r,o=!0){const a=ih(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return fw(u,e),hw(u,n),dw(u,r),pw(u,s),new lw(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function mw(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yw(...t){const e=mw();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(So())return new Blob(t);throw new q(B.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function vw(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function ww(t){if(typeof atob>"u")throw nw("base-64");return atob(t)}/**
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
 */const ye={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Fi{constructor(e,n){this.data=e,this.contentType=n||null}}function rh(t,e){switch(t){case ye.RAW:return new Fi(oh(e));case ye.BASE64:case ye.BASE64URL:return new Fi(ah(t,e));case ye.DATA_URL:return new Fi(Ew(e),Iw(e))}throw To()}function oh(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function _w(t){let e;try{e=decodeURIComponent(t)}catch{throw an(ye.DATA_URL,"Malformed data URL.")}return oh(e)}function ah(t,e){switch(t){case ye.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw an(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ye.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw an(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ww(e)}catch(i){throw i.message.includes("polyfill")?i:an(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class ch{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw an(ye.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Tw(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Ew(t){const e=new ch(t);return e.base64?ah(ye.BASE64,e.rest):_w(e.rest)}function Iw(t){return new ch(t).contentType}function Tw(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class qe{constructor(e,n){let s=0,i="";Ha(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ha(this.data_)){const s=this.data_,i=vw(s,e,n);return i===null?null:new qe(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new qe(s,!0)}}static getBlob(...e){if(So()){const n=e.map(s=>s instanceof qe?s.data_:s);return new qe(yw.apply(null,n))}else{const n=e.map(o=>bo(o)?rh(ye.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new qe(i,!0)}}uploadData(){return this.data_}}/**
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
 */function uh(t){let e;try{e=JSON.parse(t)}catch{return null}return cw(e)?e:null}/**
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
 */function bw(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Sw(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function lh(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Aw(t,e){return e}class ce{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||Aw}}let ss=null;function Cw(t){return!bo(t)||t.length<2?t:lh(t)}function hh(){if(ss)return ss;const t=[];t.push(new ce("bucket")),t.push(new ce("generation")),t.push(new ce("metageneration")),t.push(new ce("name","fullPath",!0));function e(r,o){return Cw(o)}const n=new ce("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new ce("size");return i.xform=s,t.push(i),t.push(new ce("timeCreated")),t.push(new ce("updated")),t.push(new ce("md5Hash",null,!0)),t.push(new ce("cacheControl",null,!0)),t.push(new ce("contentDisposition",null,!0)),t.push(new ce("contentEncoding",null,!0)),t.push(new ce("contentLanguage",null,!0)),t.push(new ce("contentType",null,!0)),t.push(new ce("metadata","customMetadata",!0)),ss=t,ss}function kw(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new pe(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function Rw(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return kw(s,t),s}function dh(t,e,n){const s=uh(e);return s===null?null:Rw(t,s,n)}function Nw(t,e,n,s){const i=uh(e);if(i===null||!bo(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),g=Ao(d,n,s),w=ih({alt:"media",token:u});return g+w})[0]}function Dw(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class fh{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ph(t){if(!t)throw To()}function Ow(t,e){function n(s,i){const r=dh(t,i,e);return ph(r!==null),r}return n}function Pw(t,e){function n(s,i){const r=dh(t,i,e);return ph(r!==null),Nw(r,i,t.host,t._protocol)}return n}function gh(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Gv():i=Kv():n.getStatus()===402?i=zv(t.bucket):n.getStatus()===403?i=Wv(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function Lw(t){const e=gh(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=Hv(t.path)),r.serverResponse=i.serverResponse,r}return n}function Mw(t,e,n){const s=e.fullServerUrl(),i=Ao(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new fh(i,r,Pw(t,n),o);return a.errorHandler=Lw(e),a}function xw(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Uw(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=xw(null,e)),s}function Fw(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let x="";for(let F=0;F<2;F++)x=x+Math.random().toString().slice(2);return x}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Uw(e,s,i),l=Dw(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",g=qe.getBlob(h,s,d);if(g===null)throw ew();const w={name:u.fullPath},E=Ao(r,t.host,t._protocol),I="POST",O=t.maxUploadRetryTime,M=new fh(E,I,Ow(t,n),O);return M.urlParams=w,M.headers=o,M.body=g.uploadData(),M.errorHandler=gh(e),M}class Vw{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ct.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ct.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ct.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Wt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Wt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Wt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Wt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Wt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class $w extends Vw{initXhr(){this.xhr_.responseType="text"}}function mh(){return new $w}/**
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
 */class gt{constructor(e,n){this._service=e,n instanceof pe?this._location=n:this._location=pe.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new gt(e,n)}get root(){const e=new pe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lh(this._location.path)}get storage(){return this._service}get parent(){const e=bw(this._location.path);if(e===null)return null;const n=new pe(this._location.bucket,e);return new gt(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw sw(e)}}function Bw(t,e,n){t._throwIfRoot("uploadBytes");const s=Fw(t.storage,t._location,hh(),new qe(e,!0),n);return t.storage.makeRequestWithTokens(s,mh).then(i=>({metadata:i,ref:t}))}function qw(t,e,n=ye.RAW,s){t._throwIfRoot("uploadString");const i=rh(n,e),r=Object.assign({},s);return r.contentType==null&&i.contentType!=null&&(r.contentType=i.contentType),Bw(t,i.data,r)}function jw(t){t._throwIfRoot("getDownloadURL");const e=Mw(t.storage,t._location,hh());return t.storage.makeRequestWithTokens(e,mh).then(n=>{if(n===null)throw tw();return n})}function Hw(t,e){const n=Sw(t._location.path,e),s=new pe(t._location.bucket,n);return new gt(t.storage,s)}/**
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
 */function zw(t){return/^[A-Za-z]+:\/\//.test(t)}function Kw(t,e){return new gt(t,e)}function yh(t,e){if(t instanceof Co){const n=t;if(n._bucket==null)throw Zv();const s=new gt(n,n._bucket);return e!=null?yh(s,e):s}else return e!==void 0?Hw(t,e):t}function Gw(t,e){if(e&&zw(e)){if(t instanceof Co)return Kw(t,e);throw pr("To use ref(service, url), the first argument must be a Storage instance.")}else return yh(t,e)}function Ka(t,e){const n=e==null?void 0:e[nh];return n==null?null:pe.makeFromBucketSpec(n,t)}function Ww(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:tc(i,t.app.options.projectId))}class Co{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=th,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qv,this._maxUploadRetryTime=jv,this._requests=new Set,i!=null?this._bucket=pe.makeFromBucketSpec(i,this._host):this._bucket=Ka(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pe.makeFromBucketSpec(this._url,e):this._bucket=Ka(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){za("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){za("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new gt(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new iw(sh());{const o=gw(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Ga="@firebase/storage",Wa="0.11.2";/**
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
 */const vh="storage";function m_(t,e,n,s){return t=V(t),qw(t,e,n,s)}function y_(t){return t=V(t),jw(t)}function v_(t,e){return t=V(t),Gw(t,e)}function w_(t=yr(),e){t=V(t);const s=Fs(t,vh).getImmediate({identifier:e}),i=Za("storage");return i&&Qw(s,...i),s}function Qw(t,e,n,s={}){Ww(t,e,n,s)}function Yw(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Co(n,s,i,e,mt)}function Xw(){lt(new Ke(vh,Yw,"PUBLIC").setMultipleInstances(!0)),Ne(Ga,Wa,""),Ne(Ga,Wa,"esm2017")}Xw();export{Ve as G,h_ as _,c_ as a,w_ as b,v_ as c,y_ as d,f_ as e,bv as f,o_ as g,l_ as h,Rd as i,n_ as j,p_ as k,t_ as l,r_ as m,e_ as n,s_ as o,g_ as p,Ne as r,i_ as s,d_ as t,m_ as u,u_ as w};

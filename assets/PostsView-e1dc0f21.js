import"./firebase-002e2309.js";import{i as m,w as d,t as _,a as f,b as u,c as g,d as h}from"./@firebase-9cbab8cf.js";import{f as w}from"./index-350e74d2.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{r as v,o as n,e as i,f as a,F as b,t as y,v as s}from"./@vue-da3af5a5.js";import"./tslib-4b8363ab.js";import"./idb-f62f60ab.js";import"./vue-router-e40f2014.js";const x=m(w),U=d(x),B={setup(){const o=v([]);return _(f(U,"cars")).then(l=>{l.forEach(async e=>{const r=u(),p=g(r,"cars/"+e.id+".jpg"),c=await h(p);o.push({id:e.id,make:e.data().make,model:e.data().model,engine:e.data().engine,color:e.data().color,imageUrl:c})})}),{cars:o}}},V=["src"];function $(o,l,e,r,p,c){return n(),i("div",null,[a("ul",null,[(n(!0),i(b,null,y(r.cars,t=>(n(),i("li",{key:t.id},[a("img",{src:t.imageUrl,width:"700",height:"600"},null,8,V),a("p",null,s(t.make),1),a("p",null,s(t.model),1),a("p",null,s(t.engine),1),a("p",null,s(t.color),1)]))),128))])])}const z=k(B,[["render",$],["__scopeId","data-v-beff2450"]]);export{z as default};
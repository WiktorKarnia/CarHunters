import{y as u,A as r,o as c,c as i,a as t,D as o,E as n,F as _,O as g,M as d,J as l}from"./index-7a78fd94.js";const h=t("h1",null,"Welcome",-1),m=t("br",null,null,-1),x={__name:"HelloView",setup(p){const s=u(),a=()=>{g(s).then(()=>{console.log("Signed out"),d.push("/login")})};return(f,k)=>{const e=r("router-link");return c(),i(_,null,[h,t("div",null,[t("button",null,[o(e,{to:"/login"},{default:n(()=>[l("Login")]),_:1})]),m,t("button",null,[o(e,{to:"/register"},{default:n(()=>[l("Register")]),_:1})]),t("button",{onClick:a}," Logout ")])],64)}}};export{x as default};

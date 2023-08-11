import{d as F,a as m,o as U,b as C,g as c,c as n,p as O,h as d,f as u,F as R,u as j,j as p,t as k,a6 as t,_ as x}from"./_plugin-vue_export-helper-4e0f1051.js";import{s as I}from"./inputswitch.esm-79249e3b.js";import{F as w}from"./FormCalendar-d05343bb.js";import{F as M}from"./FormLayout-5c19cd5a.js";import{u as B,A as g}from"./Api-3d31057e.js";import{u as D}from"./vue-router-e112b3e0.js";import{s as A}from"./button.esm-48574c78.js";import"./dayjs.min-18f6db6c.js";import"./overlayeventbus.esm-47a43062.js";import"./ripple.esm-2bb5fa45.js";import"./portal.esm-58de97e7.js";import"./runtime-dom.esm-bundler-b3385430.js";import"./DateTime-6dd15e58.js";import"./FormItem-83c2c2c1.js";import"./Cookies-c25692b0.js";const N={class:"p-container"},z=d("h1",null,"Расписание",-1),q={class:""},G=F({__name:"SettingList",setup(Q){const{principalState:V}=B(),v=D(),f=m(),h=v.params.projectID,a=m({fri:{from:"",to:""},mon:{from:"",to:""},sat:{from:"",to:""},sun:{from:"",to:""},thu:{from:"",to:""},tue:{from:"",to:""},wed:{from:"",to:""}}),l=m({}),S=new Map([["mon",{label:"Пн"}],["tue",{label:"Вт"}],["wed",{label:"Ср"}],["thu",{label:"Чт"}],["fri",{label:"Пт"}],["sat",{label:"Сб"}],["sun",{label:"Вс"}]]),y=(e,r)=>{e||(l[r]={})};U(async()=>{var r,s,o,b;const e=await g.get(`companies/${h}`);f.value=e.data,(r=e.data)!=null&&r.schedules?a.value=(s=e.data)==null?void 0:s.schedules:a.value={fri:{from:"",to:""},mon:{from:"",to:""},sat:{from:"",to:""},sun:{from:"",to:""},thu:{from:"",to:""},tue:{from:"",to:""},wed:{from:"",to:""}},(o=e.data)!=null&&o.schedules&&Object.entries((b=e.data)==null?void 0:b.schedules).forEach(([$,E])=>{l.value[$]=!!E})});const i={},_=m(!1),L=async()=>{var e;await g.post(`companies/${h}`,{schedules:a.value,name:(e=f.value)==null?void 0:e.name})};return C(()=>V.companies),(e,r)=>(u(),c("div",N,[z,n(M,null,{default:O(()=>[d("div",q,[(u(!0),c(R,null,j(t(S),s=>(u(),c("div",{key:s[0],class:"flex gap-4 align-items-center"},[d("p",{class:p(e.$style.day)},k(s[1].label),3),n(t(I),{onInput:o=>y(o,s[0]),modelValue:t(l)[s[0]],"onUpdate:modelValue":o=>t(l)[s[0]]=o},null,8,["onInput","modelValue","onUpdate:modelValue"]),n(w,{type:"text",class:p(e.$style.time),name:"inspection_date",modelValue:t(a)[s[0]].from,"onUpdate:modelValue":o=>t(a)[s[0]].from=o,label:"От",showErrors:i.isShow,isOffset:"",errorResponse:i.response,timeOnly:"",disabled:!t(l)[s[0]]},null,8,["class","modelValue","onUpdate:modelValue","showErrors","errorResponse","disabled"]),n(w,{type:"text",class:p(e.$style.time),name:"inspection_date",modelValue:t(a)[s[0]].to,"onUpdate:modelValue":o=>t(a)[s[0]].to=o,label:"До",showErrors:i.isShow,isOffset:"",errorResponse:i.response,timeOnly:"",disabled:!t(l)[s[0]]},null,8,["class","modelValue","onUpdate:modelValue","showErrors","errorResponse","disabled"])]))),128))]),n(t(A),{type:"submit",class:"mt-3",onClick:L,label:t(_)?"Идет сохранение":"Сохранить расписание",loading:t(_)},null,8,["label","loading"])]),_:1})]))}}),H="SettingList_day_1691720646587",J="SettingList_time_1691720646587",K={day:H,time:J},P={$style:K},ce=x(G,[["__cssModules",P],["__file","/var/www/inflow-auto-front-main/src/views/settings/SettingList.vue"]]);export{ce as default};

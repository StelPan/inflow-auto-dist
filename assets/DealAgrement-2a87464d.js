import{s as V}from"./button.esm-48574c78.js";import{s as k}from"./card.esm-90d7995a.js";import{b as A,a as x,o as N,_ as b,m as s,x as I,p as d,f as _,c as l,h as t,B as C,j as h,g as E,t as w}from"./_plugin-vue_export-helper-4e0f1051.js";import{u as S}from"./vue-router-e112b3e0.js";import{F as M}from"./FormCalendar-df7b8aea.js";import{F as R}from"./FormItem-02d4fb9f.js";import{a as T,B as W,C as U}from"./principalDeals-5bcfc342.js";import{u as j}from"./Api-3d31057e.js";import{T as z,W as q}from"./Wrap-54e7c8aa.js";import"./ripple.esm-2bb5fa45.js";import"./Cookies-c25692b0.js";import"./dayjs.min-18f6db6c.js";import"./overlayeventbus.esm-47a43062.js";import"./portal.esm-58de97e7.js";import"./runtime-dom.esm-bundler-b3385430.js";import"./DateTime-6dd15e58.js";import"./index.es-55ebbfbf.js";import"./progressspinner.esm-2138ab26.js";import"./index-9063c430.js";import"./FormLayout-06a8a99e.js";const G={components:{FormCalendar:M,Card:k,TitleBox:z,Wrap:q,FormItem:R,Button:V},setup(){var m;const n=S(),{principalState:a}=j(),i=n.params.dealID,e=A(()=>n.params.dealID==="create"),r=x({}),c=x({});e.value?r.value={date:"",photo:null,agreement_photos:[]}:((m=a.deal)==null?void 0:m.data.id)!==Number(i)?N(()=>u()):r.value={date:a.deal.data.agreement.agreement_date,agreement_photos:a.deal.data.agreement.agreement_photos,photo:null};const u=async()=>{const o=await T(i);o&&(r.value={date:o.agreement.agreement_date,photo:null,agreement_photos:o.agreement.agreement_photos})};return{data:r,postDealAgrement:W,handleError:async o=>{c.value=o},principalState:a,setFile:o=>{r.value.photo=o.target.files[0]},removeFile:o=>{U(i,{uuid:o}),u()},errors:c,getFileName:o=>{if(o)return o.split("/").reverse()[0]}}}},H="DealAgrement_doc_1691548270338",J={doc:H},K={class:"grid"},L={class:"col-6"},O=t("i",{class:"text-red-500"},"*",-1),Q={class:"col-6"},X=t("div",{class:"text-sm"},[C(" Соглашение"),t("i",{class:"text-red-500"},"*")],-1),Y={key:0,class:"relative"},Z=t("i",{class:"pi pi-plus"},null,-1),P=t("i",{class:"pi pi-file"},null,-1),$={class:"text-overflow-ellipsis"};function ee(n,a,i,e,r,c){const u=s("TitleBox"),f=s("FormCalendar"),g=s("Button"),v=s("FormItem"),D=s("Card"),m=s("Wrap");return _(),I(m,{class:"p-4",data:e.data,apiMethod:e.postDealAgrement,onUpdateError:e.handleError},{default:d(()=>[l(u,{nameSection:"Соглашение на обработку и хранение персональных данных"}),l(D,{class:"mb-5 mt-5"},{content:d(()=>{var o;return[t("div",K,[t("div",L,[l(f,{type:"text",name:"date",modelValue:e.data.date,"onUpdate:modelValue":a[0]||(a[0]=p=>e.data.date=p),label:"Дата",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:d(()=>[C("Дата "),O]),_:1},8,["modelValue","showErrors","errorResponse"])]),t("div",Q,[l(v,{name:"photo",modelValue:(o=e.data.photo)==null?void 0:o.name,showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:d(({isError:p})=>{var F,B;return[t("div",{class:h([p&&"error",""])},[X,(F=e.data.agreement_photos)!=null&&F.length?(_(),E("p",{key:1,class:h([[n.$style.doc],"flex gap-2 align-items-center"])},[P,t("span",$,w(e.getFileName(e.data.agreement_photos[0].original_url)),1),l(g,{icon:"pi pi-trash",class:"p-button-danger flex-shrink-0 ml-auto",onClick:a[2]||(a[2]=()=>e.removeFile(e.data.agreement_photos[0].uuid))})],2)):(_(),E("div",Y,[t("label",{class:h([[n.$style.doc,!e.data.photo&&"justify-content-center"],"flex gap-2 align-items-center"])},[t("input",{type:"file",name:"photo",id:"",onChange:a[1]||(a[1]=(...y)=>e.setFile&&e.setFile(...y))},null,32),Z,t("span",null,w((B=e.data.photo)==null?void 0:B.name),1)],2)]))],2)]}),_:1},8,["modelValue","showErrors","errorResponse"])])])]}),_:1})]),_:1},8,["data","apiMethod","onUpdateError"])}const oe={$style:J},xe=b(G,[["render",ee],["__cssModules",oe],["__file","/var/www/inflow-auto-front-main/src/views/deals/draft/DealAgrement.vue"]]);export{xe as default};

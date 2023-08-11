import{s as m}from"./card.esm-90d7995a.js";import{s as h}from"./checkbox.esm-31a5a5c8.js";import{a as f,w as p,_ as A,m as d,g as b,h as u,c as r,p as n,F as w,f as x,B as c}from"./_plugin-vue_export-helper-4e0f1051.js";import{F as C}from"./FormInput-f5b5225b.js";const V={components:{FormInput:C,Card:m,Checkbox:h},props:{data:{type:Object,required:!0},errors:{type:Object,required:!0}},setup(o){const s=f(!1),e=()=>{s.value&&(o.data.address_fact=o.data.address)};return p(o.data,()=>{e()}),{isAddressesMatch:s,addressMatchHandling:e}}},g={class:"grid"},v=u("div",{class:"col-6 mb-3"},[u("h3",null,"Адрес регистрации")],-1),E={class:"col-6 flex align-items-center justify-content-between mb-3"},M=u("h3",null,"Фактический адрес",-1),F={class:"flex gap-2"},y=u("label",{for:"isAddressesMatch"},"Совпадает с юридическим адресом",-1),k={class:"grid"},B={class:"col-6"},I=u("i",{class:"text-red-500"},"*",-1),R={class:"col-6"},S=u("i",{class:"text-red-500"},"*",-1);function j(o,s,e,a,N,U){const i=d("Checkbox"),l=d("FormInput"),_=d("Card");return x(),b(w,null,[u("div",g,[v,u("div",E,[M,u("div",F,[r(i,{modelValue:a.isAddressesMatch,"onUpdate:modelValue":s[0]||(s[0]=t=>a.isAddressesMatch=t),binary:!0,onChange:a.addressMatchHandling,class:"mr-2",inputId:"isAddressesMatch"},null,8,["modelValue","onChange"]),y])])]),r(_,{class:"mb-5"},{content:n(()=>[u("div",k,[u("div",B,[r(l,{type:"text",name:"address",modelValue:e.data.address,"onUpdate:modelValue":s[1]||(s[1]=t=>e.data.address=t),label:"Адрес регистрации",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:n(()=>[c("Адрес регистрации "),I]),_:1},8,["modelValue","showErrors","errorResponse"])]),u("div",R,[r(l,{type:"text",name:"address_fact",modelValue:e.data.address_fact,"onUpdate:modelValue":s[2]||(s[2]=t=>e.data.address_fact=t),disabled:a.isAddressesMatch,label:"Фактический адрес",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:n(()=>[c("Фактический адрес "),S]),_:1},8,["modelValue","disabled","showErrors","errorResponse"])])])]),_:1})],64)}const z=A(V,[["render",j],["__file","/var/www/inflow-auto-front-main/src/shared/components/grouped-data/AddressShorAlt.vue"]]);export{z as A};

import{s as f}from"./card.esm-90d7995a.js";import{b as x,a as u,o as h,_ as w,m as t,x as B,p as i,f as E,c as p,B as v,h as C}from"./_plugin-vue_export-helper-4e0f1051.js";import{u as D}from"./vue-router-e112b3e0.js";import{F as A}from"./FormInput-98bf5b06.js";import{a as I,x as V}from"./principalDeals-5bcfc342.js";import{u as T}from"./Api-3d31057e.js";import{T as b,W as F}from"./Wrap-056f41a0.js";import"./Cookies-c25692b0.js";import"./ripple.esm-2bb5fa45.js";import"./inputnumber.esm-b284c98e.js";import"./button.esm-48574c78.js";import"./FormItem-904d0fd7.js";import"./index.es-55ebbfbf.js";import"./runtime-dom.esm-bundler-b3385430.js";import"./dayjs.min-18f6db6c.js";import"./DateTime-6dd15e58.js";import"./progressspinner.esm-2138ab26.js";import"./index-5ce0c5bc.js";import"./FormLayout-e63b5088.js";const N={components:{FormInput:A,TitleBox:b,Card:f,Wrap:F},setup(){var s;const r=D(),{principalState:a}=T(),n=x(()=>r.params.dealID==="create"),e=u({inspection_address:""}),d=u({});return n.value?e.value.inspection_address="0":((s=a.deal)==null?void 0:s.data.id)!==Number(r.params.dealID)?h(async()=>{const o=await I(r.params.dealID);e.value.inspection_address=o==null?void 0:o.inspection_address}):e.value.inspection_address=a.deal.data.inspection_address,{data:e,errors:d,postDealAddress:V,handleError:async o=>{d.value=o},isCreate:n,route:r}}},S=C("i",{class:"text-red-500"},"*",-1);function W(r,a,n,e,d,c){const s=t("TitleBox"),o=t("FormInput"),m=t("Card"),l=t("Wrap");return E(),B(l,{class:"p-4",data:e.data,apiMethod:e.postDealAddress,onUpdateError:e.handleError},{default:i(()=>[p(s,{nameSection:"Место сделки"}),p(m,{class:"mb-5 mt-5"},{content:i(()=>[p(o,{type:"text",name:"inspection_address",modelValue:e.data.inspection_address,"onUpdate:modelValue":a[0]||(a[0]=_=>e.data.inspection_address=_),label:"Место сделки",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:i(()=>[v("Место сделки "),S]),_:1},8,["modelValue","showErrors","errorResponse"])]),_:1})]),_:1},8,["data","apiMethod","onUpdateError"])}const Z=w(N,[["render",W],["__file","/var/www/inflow-auto-front-main/src/views/deals/draft/DealAddress.vue"]]);export{Z as default};

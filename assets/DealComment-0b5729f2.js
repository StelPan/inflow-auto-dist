import{s as _}from"./card.esm-90d7995a.js";import{b as C,a as p,o as h,_ as x,m,x as D,p as u,f as w,c,B as E,h as v}from"./_plugin-vue_export-helper-4e0f1051.js";import{u as B}from"./vue-router-e112b3e0.js";import{F as I}from"./FormInput-98bf5b06.js";import{a as V,A as T}from"./principalDeals-5bcfc342.js";import{u as b}from"./Api-3d31057e.js";import{T as A,W as F}from"./Wrap-056f41a0.js";import"./Cookies-c25692b0.js";import"./ripple.esm-2bb5fa45.js";import"./inputnumber.esm-b284c98e.js";import"./button.esm-48574c78.js";import"./FormItem-904d0fd7.js";import"./index.es-55ebbfbf.js";import"./runtime-dom.esm-bundler-b3385430.js";import"./dayjs.min-18f6db6c.js";import"./DateTime-6dd15e58.js";import"./progressspinner.esm-2138ab26.js";import"./index-5ce0c5bc.js";import"./FormLayout-e63b5088.js";const N={components:{FormInput:I,TitleBox:A,Card:_,Wrap:F},setup(){var r;const t=B(),{principalState:a}=b(),s=C(()=>t.params.dealID==="create"),o=p({comment:""}),n=p({});return s.value?o.value.comment="":((r=a.deal)==null?void 0:r.data.id)!==Number(t.params.dealID)?h(async()=>{const e=await V(t.params.dealID);o.value.comment=e==null?void 0:e.comment}):o.value.comment=a.deal.data.comment,{data:o,errors:n,postDealComment:T,handleError:async e=>{n.value=e},isCreate:s,route:t}}},S=v("i",{class:"text-red-500"},"*",-1);function W(t,a,s,o,n,i){const r=m("TitleBox"),e=m("FormInput"),l=m("Card"),d=m("Wrap");return w(),D(d,{class:"p-4",data:o.data,apiMethod:o.postDealComment,onUpdateError:o.handleError},{default:u(()=>[c(r,{nameSection:"Комментарий"}),c(l,{class:"mb-5 mt-5"},{content:u(()=>[c(e,{type:"text",name:"comment",modelValue:o.data.comment,"onUpdate:modelValue":a[0]||(a[0]=f=>o.data.comment=f),label:"Комментарий",showErrors:o.errors.isShow,errorResponse:o.errors.response},{default:u(()=>[E("Комментарий "),S]),_:1},8,["modelValue","showErrors","errorResponse"])]),_:1})]),_:1},8,["data","apiMethod","onUpdateError"])}const Z=x(N,[["render",W],["__file","/var/www/inflow-auto-front-main/src/views/deals/draft/DealComment.vue"]]);export{Z as default};

import{s as D}from"./card.esm-90d7995a.js";import{b as u,a as f,o as b,_ as h,m as c,x,p as m,f as w,c as i,B as C,t as v,h as B}from"./_plugin-vue_export-helper-4e0f1051.js";import{u as S}from"./vue-router-e112b3e0.js";import{F as E}from"./FormInput-548ea6e1.js";import{a as y,z as I}from"./principalDeals-5bcfc342.js";import{u as V}from"./Api-3d31057e.js";import{T as R,W as T}from"./Wrap-54e7c8aa.js";import"./Cookies-c25692b0.js";import"./ripple.esm-2bb5fa45.js";import"./inputnumber.esm-b284c98e.js";import"./button.esm-48574c78.js";import"./FormItem-02d4fb9f.js";import"./index.es-55ebbfbf.js";import"./runtime-dom.esm-bundler-b3385430.js";import"./dayjs.min-18f6db6c.js";import"./DateTime-6dd15e58.js";import"./progressspinner.esm-2138ab26.js";import"./index-9063c430.js";import"./FormLayout-06a8a99e.js";const U={components:{FormInput:E,TitleBox:R,Card:D,Wrap:T},setup(){var s,l;const t=S(),{principalState:r}=V(),n=u(()=>t.params.dealID==="create"),e=f({declared_cost:"0"}),d=f({});n.value?e.value.declared_cost="0":((s=r.deal)==null?void 0:s.data.id)!==Number(t.params.dealID)?b(async()=>{var a;const o=await y(t.params.dealID);o!=null&&o.declared_cost&&(e.value.declared_cost=(a=o.declared_cost)==null?void 0:a.toString())}):e.value.declared_cost=(l=r.deal.data.declared_cost)==null?void 0:l.toString();const p=u(()=>{var o,a;return((a=(o=r.deal)==null?void 0:o.data)==null?void 0:a.state)==="negotiation"?"Согласованная стоимость":"Желаемая стоимость"});return{data:e,errors:d,postDealDeclaredCost:I,handleError:async o=>{d.value=o},isCreate:n,route:t,label:p}}},g=B("i",{class:"text-red-500"},"*",-1);function F(t,r,n,e,d,p){const _=c("TitleBox"),s=c("FormInput"),l=c("Card"),o=c("Wrap");return w(),x(o,{class:"p-4",data:e.data,apiMethod:e.postDealDeclaredCost,onUpdateError:e.handleError},{default:m(()=>[i(_,{nameSection:e.label},null,8,["nameSection"]),i(l,{class:"mb-5 mt-5"},{content:m(()=>[i(s,{type:"text",name:"declared_cost",modelValue:e.data.declared_cost,"onUpdate:modelValue":r[0]||(r[0]=a=>e.data.declared_cost=a),label:e.label,showErrors:e.errors.isShow,errorResponse:e.errors.response,as:"number",numberProps:{currency:"RUB",locale:"ru-RU",mode:"currency"}},{default:m(()=>[C(v(e.label)+" ",1),g]),_:1},8,["modelValue","label","showErrors","errorResponse"])]),_:1})]),_:1},8,["data","apiMethod","onUpdateError"])}const $=h(U,[["render",F],["__file","/var/www/inflow-auto-front-main/src/views/deals/draft/DealDeclaredCost.vue"]]);export{$ as default};

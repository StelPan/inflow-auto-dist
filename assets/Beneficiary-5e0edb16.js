var L=Object.defineProperty,U=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var k=(e,t,a)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))N.call(t,a)&&k(e,a,t[a]);if(V)for(var a of V(t))M.call(t,a)&&k(e,a,t[a]);return e},B=(e,t)=>U(e,I(t));import{s as R}from"./badge.esm-cbb8631f.js";import{s as T}from"./button.esm-48574c78.js";import{s as Y}from"./checkbox.esm-31a5a5c8.js";import{s as q}from"./progressspinner.esm-2138ab26.js";import{s as z}from"./selectbutton.esm-faf378bc.js";import{d as A,b as W,a as F,o as G,w as H,r as J,_ as K,m as s,g as O,c as y,j as $,x as b,p as Q,f as c,h as i,q as v,B as X}from"./_plugin-vue_export-helper-4e0f1051.js";import{u as Z}from"./vue-router-e112b3e0.js";import{r as x}from"./index-09ce0687.js";import{F as ee}from"./FormLayout-d2c9624d.js";import{B as g}from"./beneficiaryType-0f5d6dda.js";import{a as ae,u as te,c as oe}from"./principalBeneficiary-ce279450.js";import{u as re}from"./Api-3d31057e.js";import{P as se,a as ue,b as ne}from"./ProjectUL-89ec1eb1.js";import"./ripple.esm-2bb5fa45.js";import"./Cookies-c25692b0.js";import"./card.esm-90d7995a.js";import"./BankDetails-5e108fa5.js";import"./FormInput-f5b5225b.js";import"./inputnumber.esm-b284c98e.js";import"./FormItem-7dfcb1d1.js";import"./FormCalendar-e8655fe0.js";import"./dayjs.min-18f6db6c.js";import"./overlayeventbus.esm-47a43062.js";import"./portal.esm-58de97e7.js";import"./runtime-dom.esm-bundler-b3385430.js";import"./DateTime-6dd15e58.js";import"./FormSelect-28ff45e4.js";import"./dropdown.esm-cbd0410a.js";import"./api.esm-fa2395b6.js";import"./virtualscroller.esm-b423035f.js";import"./multiselect.esm-38716bbc.js";import"./AddressShorAlt-d7f32873.js";import"./FormCheckbox-c8aad0ef.js";const ie=A({components:{ProgressSpinner:q,Badge:R,Button:T,Checkbox:Y,SelectButton:z,FormLayout:ee,ProjectUL:se,ProjectIP:ue,ProjectFL:ne},setup(){const e={type:"ip",is_default:0},{principalState:t}=re(),a=W(()=>t.beneficiary),D=Z(),l=D.params.projectID,m=D.params.beneficiaryID,o=F(),p=m==="create";p?o.value=f({},e):(G(async()=>await ae(l,m)),H(a,()=>{var r,n,S,j,w,E;(r=a.value)!=null&&r.isLoading||(o.value=B(f({},(n=a.value)==null?void 0:n.data.data),{type:(S=a.value)==null?void 0:S.data.type,is_default:(j=a.value)!=null&&j.data.is_default?1:0,contract_date:(w=a.value)==null?void 0:w.data.contract_date,contract_number:(E=a.value)==null?void 0:E.data.contract_number}))}));const d=F(!1),_=[{label:g.ul,value:"ul"},{label:g.ip,value:"ip"},{label:g.fl,value:"fl"}],u=J({});return{resetError:()=>{u.isShow=!1},isSaving:d,legalFormValues:_,handleSubmit:async()=>{d.value=!0;const r=p?await oe(l,o.value):await te(l,m,o.value);r.success?x.push(`/projects/${l}/beneficiaries`):(u.isShow=!0,u.response=r),d.value=!1},updateData:r=>{o.value=B(f({},r),{type:o.value.type,is_default:o.value.is_default})},errors:u,data:o,beneficiary:a,isCreate:p}}}),le="Beneficiary_formCard_1691549853107",pe="Beneficiary_loader_1691549853107",de={formCard:le,loader:pe},ce={class:"flex mb-4 justify-content-between justify-content-between"},me=i("h2",null,[X(" Данные по бенефициару "),v(` <Badge
            value="?"
            class="ml-2"
            tabindex="0"
            v-tooltip.top="'Some info'"
          ></Badge> `)],-1),fe={class:""},ye=i("label",{for:"is_default"},"Использовать по умолчанию",-1),be=i("h3",{class:"mb-3"},"Тип бенефициара",-1);function ve(e,t,a,D,l,m){const o=s("ProgressSpinner"),p=s("Checkbox"),d=s("SelectButton"),_=s("ProjectUL"),u=s("ProjectIP"),C=s("ProjectFL"),h=s("Button"),P=s("FormLayout");return e.data?(c(),b(P,{key:1},{default:Q(()=>{var r;return[i("div",{class:$(["p-4",e.$style.formCard])},[i("div",ce,[me,i("div",fe,[y(p,{inputId:"is_default",name:"is_default",trueValue:1,falseValue:0,binary:"",modelValue:e.data.is_default,"onUpdate:modelValue":t[0]||(t[0]=n=>e.data.is_default=n),class:"mr-2",disabled:(r=e.beneficiary)==null?void 0:r.data.is_default},null,8,["modelValue","disabled"]),ye])]),be,y(d,{modelValue:e.data.type,"onUpdate:modelValue":t[1]||(t[1]=n=>e.data.type=n),options:e.legalFormValues,optionLabel:"label",optionValue:"value",onChange:e.resetError,class:"mb-3",disabled:!e.isCreate},null,8,["modelValue","options","onChange","disabled"]),e.data.type==="ul"?(c(),b(_,{key:0,errors:e.errors,onUpdateData:e.updateData,incomingData:e.data},null,8,["errors","onUpdateData","incomingData"])):v("v-if",!0),e.data.type==="ip"?(c(),b(u,{key:1,errors:e.errors,onUpdateData:e.updateData,incomingData:e.data},null,8,["errors","onUpdateData","incomingData"])):v("v-if",!0),e.data.type==="fl"?(c(),b(C,{key:2,errors:e.errors,onUpdateData:e.updateData,incomingData:e.data},null,8,["errors","onUpdateData","incomingData"])):v("v-if",!0),y(h,{type:"submit",onClick:e.handleSubmit,label:e.isSaving?"Идет сохранение":"Сохранить бенифициара",loading:e.isSaving},null,8,["onClick","label","loading"])],2)]}),_:1})):(c(),O("div",{key:0,class:$([e.$style.loader,"p-4"])},[y(o,{strokeWidth:"1",animationDuration:".5s"})],2))}const De={$style:de},xe=K(ie,[["render",ve],["__cssModules",De],["__file","/var/www/inflow-auto-front-main/src/views/beneficiaries/Beneficiary.vue"]]);export{xe as default};

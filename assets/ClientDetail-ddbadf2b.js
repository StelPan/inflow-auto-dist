var F=Object.defineProperty;var w=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var E=(e,u,s)=>u in e?F(e,u,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[u]=s,B=(e,u)=>{for(var s in u||(u={}))S.call(u,s)&&E(e,s,u[s]);if(w)for(var s of w(u))V.call(u,s)&&E(e,s,u[s]);return e};import{s as g}from"./button.esm-48574c78.js";import{s as k}from"./card.esm-90d7995a.js";import{s as R}from"./progressspinner.esm-2138ab26.js";import{d as $,b as A,a as _,r as I,o as j,w as P,_ as L,m,g as N,c as a,j as v,x as U,p as n,f as y,h as t,B as p,t as M,q as b}from"./_plugin-vue_export-helper-4e0f1051.js";import{u as O}from"./vue-router-e112b3e0.js";import{r as q}from"./index-09ce0687.js";import{F as z}from"./FormInput-f5b5225b.js";import{F as T}from"./FormLayout-d2c9624d.js";import{a as W,u as G,c as H}from"./principalClients-e656c28c.js";import{u as J}from"./Api-3d31057e.js";import"./ripple.esm-2bb5fa45.js";import"./Cookies-c25692b0.js";import"./inputnumber.esm-b284c98e.js";import"./FormItem-7dfcb1d1.js";const K=$({components:{ProgressSpinner:R,Card:k,FormInput:z,Button:g,FormLayout:T},setup(){const{principalState:e}=J(),u=A(()=>e.client),s=O(),l=_(),d=_(!1),c=I({}),f=s.params.projectID,r=s.params.clientID,i=r==="create",D=i?"Добавление клиента":"Редактирование клиента";return i?l.value={company_id:f}:(j(async()=>await W(r)),P(u,()=>{var o,C;(o=u.value)!=null&&o.isLoading||(l.value=B({},(C=u.value)==null?void 0:C.data))})),{isSaving:d,handleSubmit:async()=>{d.value=!0;const o=r!=="create"?await G(r,l.value):await H(l.value);o.success?q.push(`/projects/${f}/clients`):(c.isShow=!0,c.response=o),d.value=!1},errors:c,data:l,client:u,title:D,isCreating:i}}}),Q="ClientDetail_formCard_1691549853095",X="ClientDetail_loader_1691549853095",Y={formCard:Q,loader:X},Z={class:"flex mb-4 justify-content-between justify-content-between"},x=t("h3",{class:"mb-3"},"Основные данные",-1),e4=t("i",{class:"text-red-500"},"*",-1),u4=t("i",{class:"text-red-500"},"*",-1),s4=t("i",{class:"text-red-500"},"*",-1),o4=t("h3",{class:"mb-3"},"Контактные данные",-1),t4={class:"flex flex-wrap"},r4={class:"col-6"},a4=t("i",{class:"text-red-500"},"*",-1);function n4(e,u,s,l,d,c){const f=m("ProgressSpinner"),r=m("FormInput"),i=m("Card"),D=m("Button"),h=m("FormLayout");return!e.data&&!e.isCreating?(y(),N("div",{key:0,class:v([e.$style.loader,"p-4"])},[a(f,{strokeWidth:"1",animationDuration:".5s"})],2)):(y(),U(h,{key:1},{default:n(()=>[t("div",{class:v(["p-4",e.$style.formCard])},[t("div",Z,[t("h2",null,[p(M(e.title)+" ",1),b(` <Badge
            value="?"
            class="ml-2"
            tabindex="0"
            v-tooltip.top="'Some info'"
          ></Badge> `)])]),x,a(i,{class:"mb-5"},{content:n(()=>[a(r,{type:"text",name:"last_name",modelValue:e.data.last_name,"onUpdate:modelValue":u[0]||(u[0]=o=>e.data.last_name=o),label:"Фамилия",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:n(()=>[p("Фамилия "),e4]),_:1},8,["modelValue","showErrors","errorResponse"]),a(r,{type:"text",name:"first_name",modelValue:e.data.first_name,"onUpdate:modelValue":u[1]||(u[1]=o=>e.data.first_name=o),label:"Имя",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:n(()=>[p("Имя "),u4]),_:1},8,["modelValue","showErrors","errorResponse"]),a(r,{type:"text",name:"patronymic",modelValue:e.data.patronymic,"onUpdate:modelValue":u[2]||(u[2]=o=>e.data.patronymic=o),label:"Отчество",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:n(()=>[p("Отчество "),s4]),_:1},8,["modelValue","showErrors","errorResponse"])]),_:1}),o4,a(i,{class:"mb-5"},{content:n(()=>[t("div",t4,[t("div",r4,[a(r,{type:"text",name:"phone",modelValue:e.data.phone,"onUpdate:modelValue":u[3]||(u[3]=o=>e.data.phone=o),label:"Контактный телефон",showErrors:e.errors.isShow,errorResponse:e.errors.response,as:"mask",maskProps:{mask:"+7 (999) 999-99-99"}},{default:n(()=>[p("Контактный телефон "),a4]),_:1},8,["modelValue","showErrors","errorResponse","maskProps"])]),b(` <div class="col-6">
              <FormInput
                type="text"
                name="email"
                v-model="data.email"
                label="Электронная почта (для уведомлений бенефициару)"
                :showErrors="errors.isShow"
                :errorResponse="errors.response"
                >Электронная почта (для уведомлений бенефициару)
                <i class="text-red-500">*</i></FormInput
              >
            </div> `)])]),_:1}),a(D,{type:"submit",onClick:e.handleSubmit,label:e.isSaving?"Идет сохранение":"Сохранить клиента",loading:e.isSaving},null,8,["onClick","label","loading"])],2)]),_:1}))}const l4={$style:Y},b4=L(K,[["render",n4],["__cssModules",l4],["__file","/var/www/inflow-auto-front-main/src/views/clients/ClientDetail.vue"]]);export{b4 as default};

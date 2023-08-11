var S=Object.defineProperty;var D=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var h=(e,u,s)=>u in e?S(e,u,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[u]=s,B=(e,u)=>{for(var s in u||(u={}))v.call(u,s)&&h(e,s,u[s]);if(D)for(var s of D(u))F.call(u,s)&&h(e,s,u[s]);return e};import{s as g}from"./button.esm-48574c78.js";import{s as R}from"./card.esm-90d7995a.js";import{s as _}from"./multiselect.esm-38716bbc.js";import{s as k}from"./progressspinner.esm-2138ab26.js";import{d as $,b as A,a as b,r as U,o as I,w as j,_ as M,m as f,g as L,c as r,j as V,x as O,p as l,f as C,h as a,B as n,t as P,q as N}from"./_plugin-vue_export-helper-4e0f1051.js";import{u as q}from"./vue-router-e112b3e0.js";import{r as z}from"./index-72d7336d.js";import{F as T}from"./FormInput-a7191b54.js";import{F as W}from"./FormLayout-5c19cd5a.js";import{a as G,u as H,c as J}from"./principalEmployees-1c0a89a9.js";import{u as K}from"./Api-3d31057e.js";import"./ripple.esm-2bb5fa45.js";import"./api.esm-fa2395b6.js";import"./overlayeventbus.esm-47a43062.js";import"./portal.esm-58de97e7.js";import"./virtualscroller.esm-b423035f.js";import"./runtime-dom.esm-bundler-b3385430.js";import"./Cookies-c25692b0.js";import"./inputnumber.esm-b284c98e.js";import"./FormItem-83c2c2c1.js";const Q=$({components:{ProgressSpinner:k,Card:R,FormInput:T,Button:g,FormLayout:W,MultiSelect:_},setup(){const{principalState:e}=K(),u=A(()=>e.employee),s=q(),p=b({}),c=b(!1),E=U({}),d=s.params.projectID,t=s.params.employeeID,i=t==="create",w=i?"Добавление сотрудника":"Редактирование сотрудника";return i?p.value={}:(I(async()=>await G(d,t)),j(u,()=>{var m,o;(m=u.value)!=null&&m.isLoading||(p.value=B({},(o=u.value)==null?void 0:o.data))})),{isSaving:c,handleSubmit:async()=>{c.value=!0;const m=t!=="create"?await H(d,t,p.value):await J(d,p.value);m.success?z.push(`/projects/${d}/employees`):(E.isShow=!0,E.response=m),c.value=!1},errors:E,data:p,employee:u,title:w,isCreating:i,roles:[{code:"manager",label:"Менеджер"},{code:"administrator",label:"Администратор"}]}}}),X="EmployeeDetail_formCard_1691720646575",Y="EmployeeDetail_loader_1691720646575",Z={formCard:X,loader:Y},x={class:"flex mb-4 justify-content-between justify-content-between"},ee=a("h3",{class:"mb-3"},"Основные данные",-1),ue=a("i",{class:"text-red-500"},"*",-1),oe=a("i",{class:"text-red-500"},"*",-1),se=a("h3",{class:"mb-3"},"Должность",-1),re=a("h3",{class:"mb-3"},"Контактные данные",-1),ae={class:"flex flex-wrap"},te={class:"col-6"},le=a("i",{class:"text-red-500"},"*",-1),ne={class:"col-6"},ie=a("i",{class:"text-red-500"},"*",-1);function me(e,u,s,p,c,E){const d=f("ProgressSpinner"),t=f("FormInput"),i=f("Card"),w=f("MultiSelect"),y=f("Button"),m=f("FormLayout");return!e.data&&!e.isCreating?(C(),L("div",{key:0,class:V([[e.$style.container,e.$style.loader],"p-4"])},[r(d,{strokeWidth:"1",animationDuration:".5s"})],2)):(C(),O(m,{key:1},{default:l(()=>[a("div",{class:V(["p-4",e.$style.formCard])},[a("div",x,[a("h2",null,[n(P(e.title)+" ",1),N(` <Badge
            value="?"
            class="ml-2"
            tabindex="0"
            v-tooltip.top="'Some info'"
          ></Badge> `)])]),ee,r(i,{class:"mb-5"},{content:l(()=>[r(t,{type:"text",name:"last_name",modelValue:e.data.last_name,"onUpdate:modelValue":u[0]||(u[0]=o=>e.data.last_name=o),label:"Фамилия",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:l(()=>[n("Фамилия "),ue]),_:1},8,["modelValue","showErrors","errorResponse"]),r(t,{type:"text",name:"first_name",modelValue:e.data.first_name,"onUpdate:modelValue":u[1]||(u[1]=o=>e.data.first_name=o),label:"Имя",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:l(()=>[n("Имя "),oe]),_:1},8,["modelValue","showErrors","errorResponse"]),r(t,{type:"text",name:"patronymic",modelValue:e.data.patronymic,"onUpdate:modelValue":u[2]||(u[2]=o=>e.data.patronymic=o),label:"Отчество",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:l(()=>[n("Отчество")]),_:1},8,["modelValue","showErrors","errorResponse"]),r(t,{type:"password",name:"password",modelValue:e.data.password,"onUpdate:modelValue":u[3]||(u[3]=o=>e.data.password=o),label:"Пароль",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:l(()=>[n("Пароль")]),_:1},8,["modelValue","showErrors","errorResponse"]),r(t,{type:"password",name:"password_confirmation",modelValue:e.data.password_confirmation,"onUpdate:modelValue":u[4]||(u[4]=o=>e.data.password_confirmation=o),label:"Подтвердите пароль",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:l(()=>[n("Подтвердите пароль")]),_:1},8,["modelValue","showErrors","errorResponse"])]),_:1}),se,r(i,{class:"mb-5"},{content:l(()=>[r(w,{modelValue:e.data.roles,"onUpdate:modelValue":u[5]||(u[5]=o=>e.data.roles=o),options:e.roles,label:"Select Brands",optionLabel:"label",optionValue:"code",display:"chip",class:"w-full"},null,8,["modelValue","options"])]),_:1}),re,r(i,{class:"mb-5"},{content:l(()=>[a("div",ae,[a("div",te,[r(t,{type:"text",name:"phone",modelValue:e.data.phone,"onUpdate:modelValue":u[6]||(u[6]=o=>e.data.phone=o),label:"Контактный телефон",showErrors:e.errors.isShow,errorResponse:e.errors.response,as:"mask",maskProps:{mask:"+7 (999) 999-99-99"}},{default:l(()=>[n("Контактный телефон "),le]),_:1},8,["modelValue","showErrors","errorResponse","maskProps"])]),a("div",ne,[r(t,{type:"text",name:"email",modelValue:e.data.email,"onUpdate:modelValue":u[7]||(u[7]=o=>e.data.email=o),label:"Электронная почта (для уведомлений бенефициару)",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:l(()=>[n("Электронная почта (для уведомлений бенефициару) "),ie]),_:1},8,["modelValue","showErrors","errorResponse"])])])]),_:1}),r(y,{type:"submit",onClick:e.handleSubmit,label:e.isSaving?"Идет сохранение":"Сохранить сотрудника",loading:e.isSaving},null,8,["onClick","label","loading"])],2)]),_:1}))}const pe={$style:Z},Ue=M(Q,[["render",me],["__cssModules",pe],["__file","/var/www/inflow-auto-front-main/src/views/employees/EmployeeDetail.vue"]]);export{Ue as default};

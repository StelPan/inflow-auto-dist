import{s as h}from"./card.esm-90d7995a.js";import{_ as w,m as i,g as R,c as a,p as t,F as S,h as o,f as V,B as l,b as y,a as f,o as B,x as v}from"./_plugin-vue_export-helper-4e0f1051.js";import{u as A}from"./vue-router-e112b3e0.js";import{F as b}from"./FormCalendar-db92c851.js";import{F as D}from"./FormInput-98bf5b06.js";import{A as U}from"./AddressShorAlt-1a59f9e9.js";import{a as g,r as O}from"./principalDeals-5bcfc342.js";import{u as I}from"./Api-3d31057e.js";import{T as k,W as T}from"./Wrap-056f41a0.js";import"./Cookies-c25692b0.js";import"./dayjs.min-18f6db6c.js";import"./button.esm-48574c78.js";import"./ripple.esm-2bb5fa45.js";import"./overlayeventbus.esm-47a43062.js";import"./portal.esm-58de97e7.js";import"./runtime-dom.esm-bundler-b3385430.js";import"./DateTime-6dd15e58.js";import"./FormItem-904d0fd7.js";import"./inputnumber.esm-b284c98e.js";import"./checkbox.esm-31a5a5c8.js";import"./index.es-55ebbfbf.js";import"./progressspinner.esm-2138ab26.js";import"./index-5ce0c5bc.js";import"./FormLayout-e63b5088.js";const N={components:{FormInput:D,FormCalendar:b,Card:h},props:{data:{type:Object,required:!0},errors:{type:Object,required:!0}}},W=o("h3",{class:"mb-3"},"Основные данные",-1),M={class:"flex flex-wrap"},j={class:"col-6"},q=o("i",{class:"text-red-500"},"*",-1),P=o("i",{class:"text-red-500"},"*",-1),z={class:"col-6"},G=o("i",{class:"text-red-500"},"*",-1),H=o("i",{class:"text-red-500"},"*",-1),J=o("i",{class:"text-red-500"},"*",-1),K=o("i",{class:"text-red-500"},"*",-1),L={class:"col-4"},Q=o("i",{class:"text-red-500"},"*",-1),X={class:"col-4"},Y=o("i",{class:"text-red-500"},"*",-1),Z={class:"col-4"},$=o("i",{class:"text-red-500"},"*",-1),e4={class:"col-12"},u4=o("i",{class:"text-red-500"},"*",-1);function r4(_,u,e,r,c,p){const d=i("FormInput"),n=i("FormCalendar"),E=i("Card");return V(),R(S,null,[W,a(E,{class:"mb-5"},{content:t(()=>[o("div",M,[o("div",j,[a(d,{type:"text",name:"first_name",modelValue:e.data.first_name,"onUpdate:modelValue":u[0]||(u[0]=s=>e.data.first_name=s),label:"Фамилия",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:t(()=>[l("Фамилия "),q]),_:1},8,["modelValue","showErrors","errorResponse"]),a(d,{type:"text",name:"last_name",modelValue:e.data.last_name,"onUpdate:modelValue":u[1]||(u[1]=s=>e.data.last_name=s),label:"Имя",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:t(()=>[l("Имя "),P]),_:1},8,["modelValue","showErrors","errorResponse"]),a(d,{type:"text",name:"patronymic",modelValue:e.data.patronymic,"onUpdate:modelValue":u[2]||(u[2]=s=>e.data.patronymic=s),label:"Отчество",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:t(()=>[l("Отчество ")]),_:1},8,["modelValue","showErrors","errorResponse"])]),o("div",z,[a(n,{name:"birth_date",modelValue:e.data.birth_date,"onUpdate:modelValue":u[3]||(u[3]=s=>e.data.birth_date=s),label:"Дата рождения",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:t(()=>[l("Дата рождения "),G]),_:1},8,["modelValue","showErrors","errorResponse"]),a(d,{type:"text",name:"birth_place",modelValue:e.data.birth_place,"onUpdate:modelValue":u[4]||(u[4]=s=>e.data.birth_place=s),label:"Место рождения",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:t(()=>[l("Место рождения "),H]),_:1},8,["modelValue","showErrors","errorResponse"]),a(d,{type:"text",name:"phone",modelValue:e.data.phone,"onUpdate:modelValue":u[5]||(u[5]=s=>e.data.phone=s),label:"Телефон",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:"",as:"mask",maskProps:{mask:"+7 (999) 999-99-99"}},{default:t(()=>[l("Телефон "),J]),_:1},8,["modelValue","showErrors","errorResponse","maskProps"]),a(d,{type:"text",name:"email",modelValue:e.data.email,"onUpdate:modelValue":u[6]||(u[6]=s=>e.data.email=s),label:"Email",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:t(()=>[l("Email "),K]),_:1},8,["modelValue","showErrors","errorResponse"])]),o("div",L,[a(d,{type:"text",name:"passport",modelValue:e.data.passport,"onUpdate:modelValue":u[7]||(u[7]=s=>e.data.passport=s),label:"Паспорт",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:t(()=>[l("Паспорт "),Q]),_:1},8,["modelValue","showErrors","errorResponse"])]),o("div",X,[a(n,{name:"passport_date",modelValue:e.data.passport_date,"onUpdate:modelValue":u[8]||(u[8]=s=>e.data.passport_date=s),label:"Дата выдачи",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:t(()=>[l("Дата выдачи "),Y]),_:1},8,["modelValue","showErrors","errorResponse"])]),o("div",Z,[a(d,{type:"text",name:"passport_issuer_code",modelValue:e.data.passport_issuer_code,"onUpdate:modelValue":u[9]||(u[9]=s=>e.data.passport_issuer_code=s),label:"Код подразделения",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:t(()=>[l("Код подразделения "),$]),_:1},8,["modelValue","showErrors","errorResponse"])]),o("div",e4,[a(d,{type:"text",name:"passport_issuer",modelValue:e.data.passport_issuer,"onUpdate:modelValue":u[10]||(u[10]=s=>e.data.passport_issuer=s),label:"Наименование органа, выдавшего документ",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:t(()=>[l("Наименование органа, выдавшего документ "),u4]),_:1},8,["modelValue","showErrors","errorResponse"])])])]),_:1})],64)}const o4=w(N,[["render",r4],["__file","/var/www/inflow-auto-front-main/src/shared/components/grouped-data/Signatory.vue"]]),s4={components:{FormInput:D,FormCalendar:b,TitleBox:k,Card:h,Wrap:T,Signatory:o4,AddressShorAlt:U},setup(){var d;const _=A(),{principalState:u}=I(),e=y(()=>_.params.dealID==="create"),r=f({}),c=f({});return e.value?r.value={}:((d=u.deal)==null?void 0:d.data.id)!==Number(_.params.dealID)?B(async()=>{const n=await g(_.params.dealID);n!=null&&n.signer&&(r.value=n.signer||{})}):r.value=u.deal.data.signer||{},{data:r,errors:c,handleError:async n=>{c.value=n},isCreate:e,principalState:u,route:_,postDealSigner:O}}},a4=o("h3",{class:"mb-3"},"Основание для права подписи",-1),t4={class:"grid"},l4={class:"col-12 md:col-6"},d4=o("i",{class:"text-red-500"},"*",-1),n4=o("i",{class:"text-red-500"},"*",-1),i4={class:"col-12 md:col-6"},m4=o("i",{class:"text-red-500"},"*",-1),_4=o("i",{class:"text-red-500"},"*",-1);function c4(_,u,e,r,c,p){const d=i("TitleBox"),n=i("Signatory"),E=i("AddressShorAlt"),s=i("FormInput"),x=i("FormCalendar"),F=i("Card"),C=i("Wrap");return V(),v(C,{class:"p-4",apiMethod:r.postDealSigner,data:r.data,onUpdateError:r.handleError},{default:t(()=>[a(d,{nameSection:"Подписант",class:"mb-4"}),a(n,{data:r.data,errors:r.errors},null,8,["data","errors"]),a(E,{data:r.data,errors:r.errors},null,8,["data","errors"]),a4,a(F,{class:"mb-5"},{content:t(()=>[o("div",t4,[o("div",l4,[a(s,{type:"text",name:"basis",modelValue:r.data.basis,"onUpdate:modelValue":u[0]||(u[0]=m=>r.data.basis=m),label:"Наименование документа",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:""},{default:t(()=>[l("Наименование документа "),d4]),_:1},8,["modelValue","showErrors","errorResponse"]),a(s,{type:"text",name:"basis_number",modelValue:r.data.basis_number,"onUpdate:modelValue":u[1]||(u[1]=m=>r.data.basis_number=m),label:"Номер документа",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:""},{default:t(()=>[l("Номер документа "),n4]),_:1},8,["modelValue","showErrors","errorResponse"])]),o("div",i4,[a(x,{name:"basis_date",modelValue:r.data.basis_date,"onUpdate:modelValue":u[2]||(u[2]=m=>r.data.basis_date=m),label:"Дата выдачи",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:""},{default:t(()=>[l("Дата выдачи "),m4]),_:1},8,["modelValue","showErrors","errorResponse"]),a(s,{type:"text",name:"basis_expiration_date",modelValue:r.data.basis_expiration_date,"onUpdate:modelValue":u[3]||(u[3]=m=>r.data.basis_expiration_date=m),label:"Срок действия",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:""},{default:t(()=>[l("Срок действия "),_4]),_:1},8,["modelValue","showErrors","errorResponse"])])])]),_:1})]),_:1},8,["apiMethod","data","onUpdateError"])}const W4=w(s4,[["render",c4],["__file","/var/www/inflow-auto-front-main/src/views/deals/draft/DealSignatory.vue"]]);export{W4 as default};

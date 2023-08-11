var j=Object.defineProperty,M=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var I=(e,u,r)=>u in e?j(e,u,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[u]=r,L=(e,u)=>{for(var r in u||(u={}))N.call(u,r)&&I(e,r,u[r]);if(P)for(var r of P(u))W.call(u,r)&&I(e,r,u[r]);return e},T=(e,u)=>M(e,q(u));import{s as Y}from"./selectbutton.esm-faf378bc.js";import{d as v,a as B,r as A,w as O,_ as F,m as E,g as b,c as o,p as a,F as R,h as s,f as D,B as t,q as f,b as G,o as z,x as k}from"./_plugin-vue_export-helper-4e0f1051.js";import{u as H}from"./vue-router-e112b3e0.js";import{B as U}from"./beneficiaryType-0f5d6dda.js";import{a as J,q as K}from"./principalDeals-5bcfc342.js";import{u as Q}from"./Api-3d31057e.js";import{T as X,W as Z}from"./Wrap-056f41a0.js";import{s as y}from"./card.esm-90d7995a.js";import{F as C}from"./FormCalendar-db92c851.js";import{F as c}from"./FormCheckbox-5c271ed9.js";import{F as S}from"./FormInput-98bf5b06.js";import{A as g}from"./AddressShorAlt-1a59f9e9.js";import{F as $}from"./FormSelect-1da9e38f.js";import"./ripple.esm-2bb5fa45.js";import"./Cookies-c25692b0.js";import"./index.es-55ebbfbf.js";import"./runtime-dom.esm-bundler-b3385430.js";import"./dayjs.min-18f6db6c.js";import"./DateTime-6dd15e58.js";import"./button.esm-48574c78.js";import"./progressspinner.esm-2138ab26.js";import"./index-5ce0c5bc.js";import"./FormLayout-e63b5088.js";import"./overlayeventbus.esm-47a43062.js";import"./portal.esm-58de97e7.js";import"./FormItem-904d0fd7.js";import"./checkbox.esm-31a5a5c8.js";import"./inputnumber.esm-b284c98e.js";import"./dropdown.esm-cbd0410a.js";import"./api.esm-fa2395b6.js";import"./virtualscroller.esm-b423035f.js";import"./multiselect.esm-38716bbc.js";const x=v({components:{FormCheckbox:c,FormCalendar:C,AddressShortAlt:g,Card:y,FormInput:S},props:{errors:{type:Object,required:!0},incomingData:Object},emits:["updateData"],setup(e,{emit:u}){const r=B(!1),i=A(e.incomingData||{});return u("updateData",i),O(i,()=>{u("updateData",i)}),{data:i,isSignatory:r}}}),ee=s("h3",{class:"mb-3"},"Основные данные",-1),ue={class:"flex flex-wrap"},re={class:"col-6"},se=s("i",{class:"text-red-500"},"*",-1),oe=s("i",{class:"text-red-500"},"*",-1),ae={class:"col-6"},te=s("i",{class:"text-red-500"},"*",-1),le=s("i",{class:"text-red-500"},"*",-1),ne=s("i",{class:"text-red-500"},"*",-1),de=s("i",{class:"text-red-500"},"*",-1),ie=s("i",{class:"text-red-500"},"*",-1),me=s("i",{class:"text-red-500"},"*",-1),pe={class:"col-4"},Ee=s("i",{class:"text-red-500"},"*",-1),fe={class:"col-4"},he=s("i",{class:"text-red-500"},"*",-1),we={class:"col-4"},De=s("i",{class:"text-red-500"},"*",-1),Ve={class:"col-12"},_e=s("i",{class:"text-red-500"},"*",-1);function Fe(e,u,r,i,V,_){const d=E("FormInput"),h=E("FormCalendar"),l=E("Card"),p=E("AddressShortAlt"),w=E("FormCheckbox");return D(),b(R,null,[ee,o(l,{class:"mb-5"},{content:a(()=>[s("div",ue,[s("div",re,[o(d,{type:"text",name:"first_name",modelValue:e.data.first_name,"onUpdate:modelValue":u[0]||(u[0]=n=>e.data.first_name=n),label:"Фамилия",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[t("Фамилия "),se]),_:1},8,["modelValue","showErrors","errorResponse"]),o(d,{type:"text",name:"last_name",modelValue:e.data.last_name,"onUpdate:modelValue":u[1]||(u[1]=n=>e.data.last_name=n),label:"Имя",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[t("Имя "),oe]),_:1},8,["modelValue","showErrors","errorResponse"]),o(d,{type:"text",name:"patronymic",modelValue:e.data.patronymic,"onUpdate:modelValue":u[2]||(u[2]=n=>e.data.patronymic=n),label:"Отчество",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[t("Отчество")]),_:1},8,["modelValue","showErrors","errorResponse"]),f("          <FormInput"),f('            type="text"'),f('            name="birth_country"'),f('            v-model="data.birth_country"'),f('            label="Место рождения (Страна)"'),f('            :showErrors="errors.isShow"'),f('            :errorResponse="errors.response"'),f("            isOffset"),f("            >Место рождения (Страна)</FormInput"),f("          >"),f("          <FormInput"),f('            type="text"'),f('            name="birth_city"'),f('            v-model="data.birth_city"'),f('            label="Место рождения (Город)"'),f('            :showErrors="errors.isShow"'),f('            :errorResponse="errors.response"'),f("            isOffset"),f("            >Место рождения (Город)</FormInput"),f("          >")]),s("div",ae,[o(h,{name:"birth_date",modelValue:e.data.birth_date,"onUpdate:modelValue":u[3]||(u[3]=n=>e.data.birth_date=n),label:"Дата рождения",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[t("Дата рождения "),te]),_:1},8,["modelValue","showErrors","errorResponse"]),o(d,{type:"text",name:"birth_place",modelValue:e.data.birth_place,"onUpdate:modelValue":u[4]||(u[4]=n=>e.data.birth_place=n),label:"Место рождения",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[t("Место рождения "),le]),_:1},8,["modelValue","showErrors","errorResponse"]),o(d,{type:"text",name:"snils",modelValue:e.data.snils,"onUpdate:modelValue":u[5]||(u[5]=n=>e.data.snils=n),label:"СНИЛС",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:"",as:"mask",maskProps:{mask:"99999999999"}},{default:a(()=>[t("СНИЛС "),ne]),_:1},8,["modelValue","showErrors","errorResponse"]),o(d,{type:"text",name:"inn",modelValue:e.data.inn,"onUpdate:modelValue":u[6]||(u[6]=n=>e.data.inn=n),label:"ИНН",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:"",as:"mask",maskProps:{mask:"999999999999"}},{default:a(()=>[t("ИНН "),de]),_:1},8,["modelValue","showErrors","errorResponse"]),o(d,{type:"text",name:"email",modelValue:e.data.email,"onUpdate:modelValue":u[7]||(u[7]=n=>e.data.email=n),label:"Email",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[t("Email "),ie]),_:1},8,["modelValue","showErrors","errorResponse"]),o(d,{type:"text",name:"phone",modelValue:e.data.phone,"onUpdate:modelValue":u[8]||(u[8]=n=>e.data.phone=n),label:"Телефон",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:"",as:"mask",maskProps:{mask:"+7 (999) 999-99-99"}},{default:a(()=>[t("Телефон "),me]),_:1},8,["modelValue","showErrors","errorResponse","maskProps"])]),s("div",pe,[o(d,{type:"text",name:"passport",modelValue:e.data.passport,"onUpdate:modelValue":u[9]||(u[9]=n=>e.data.passport=n),label:"Паспорт",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:a(()=>[t("Паспорт "),Ee]),_:1},8,["modelValue","showErrors","errorResponse"])]),s("div",fe,[o(h,{name:"passport_date",modelValue:e.data.passport_date,"onUpdate:modelValue":u[10]||(u[10]=n=>e.data.passport_date=n),label:"Дата выдачи",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:a(()=>[t("Дата выдачи "),he]),_:1},8,["modelValue","showErrors","errorResponse"])]),s("div",we,[o(d,{type:"text",name:"passport_issuer_code",modelValue:e.data.passport_issuer_code,"onUpdate:modelValue":u[11]||(u[11]=n=>e.data.passport_issuer_code=n),label:"Код подразделения",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:a(()=>[t("Код подразделения "),De]),_:1},8,["modelValue","showErrors","errorResponse"])]),s("div",Ve,[o(d,{type:"text",name:"passport_issuer",modelValue:e.data.passport_issuer,"onUpdate:modelValue":u[12]||(u[12]=n=>e.data.passport_issuer=n),label:"Наименование органа, выдавшего документ",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:a(()=>[t("Наименование органа, выдавшего документ "),_e]),_:1},8,["modelValue","showErrors","errorResponse"])])])]),_:1}),o(p,{data:e.data,errors:e.errors},null,8,["data","errors"]),o(w,{name:"is_signer",modelValue:e.data.is_signer,"onUpdate:modelValue":u[13]||(u[13]=n=>e.data.is_signer=n),class:"mb-4",label:"Является подписантом",showErrors:e.errors.isShow,errorResponse:e.errors.response},null,8,["modelValue","showErrors","errorResponse"])],64)}const be=F(x,[["render",Fe],["__file","/var/www/inflow-auto-front-main/src/views/deals/modules/DealFL.vue"]]),Re={components:{FormInput:S,FormCalendar:C,Card:y},props:{data:{type:Object,required:!0},errors:{type:Object,required:!0}}},ye=s("h3",{class:"mb-3"},"Основные регистрационные сведения",-1),Ce={class:"flex flex-wrap"},Se={class:"col-6"},ke=s("i",{class:"text-red-500"},"*",-1),Be=s("i",{class:"text-red-500"},"*",-1),Ue=s("i",{class:"text-red-500"},"*",-1),ve={class:"col-6"},Ae=s("i",{class:"text-red-500"},"*",-1),Oe=s("i",{class:"text-red-500"},"*",-1);function ce(e,u,r,i,V,_){const d=E("FormInput"),h=E("Card");return D(),b(R,null,[ye,o(h,{class:"mb-5"},{content:a(()=>[s("div",Ce,[s("div",Se,[o(d,{type:"text",name:"inn",modelValue:r.data.inn,"onUpdate:modelValue":u[0]||(u[0]=l=>r.data.inn=l),label:"ИНН",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:"",as:"mask",maskProps:{mask:"999999999999"}},{default:a(()=>[t("ИНН "),ke]),_:1},8,["modelValue","showErrors","errorResponse"]),o(d,{type:"text",name:"first_name",modelValue:r.data.first_name,"onUpdate:modelValue":u[1]||(u[1]=l=>r.data.first_name=l),label:"Фамилия",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:""},{default:a(()=>[t("Фамилия "),Be]),_:1},8,["modelValue","showErrors","errorResponse"]),o(d,{type:"text",name:"last_name",modelValue:r.data.last_name,"onUpdate:modelValue":u[2]||(u[2]=l=>r.data.last_name=l),label:"Имя",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:""},{default:a(()=>[t("Имя "),Ue]),_:1},8,["modelValue","showErrors","errorResponse"]),o(d,{type:"text",name:"patronymic",modelValue:r.data.patronymic,"onUpdate:modelValue":u[3]||(u[3]=l=>r.data.patronymic=l),label:"Отчество",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:""},{default:a(()=>[t("Отчество")]),_:1},8,["modelValue","showErrors","errorResponse"]),o(d,{type:"text",name:"short_name",modelValue:r.data.short_name,"onUpdate:modelValue":u[4]||(u[4]=l=>r.data.short_name=l),label:"Краткое наименование",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:""},{default:a(()=>[t("Краткое наименование")]),_:1},8,["modelValue","showErrors","errorResponse"])]),s("div",ve,[o(d,{type:"text",name:"full_name",modelValue:r.data.full_name,"onUpdate:modelValue":u[5]||(u[5]=l=>r.data.full_name=l),label:"Полное наименование",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:""},{default:a(()=>[t("Полное наименование")]),_:1},8,["modelValue","showErrors","errorResponse"]),o(d,{type:"text",name:"ogrn",modelValue:r.data.ogrn,"onUpdate:modelValue":u[6]||(u[6]=l=>r.data.ogrn=l),label:"ОГРНИП",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:"",as:"mask",maskProps:{mask:"9999999999999"}},{default:a(()=>[t("ОГРНИП "),Ae]),_:1},8,["modelValue","showErrors","errorResponse"]),o(d,{type:"text",name:"phone",modelValue:r.data.phone,"onUpdate:modelValue":u[7]||(u[7]=l=>r.data.phone=l),label:"Телефон ",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:"",as:"mask",maskProps:{mask:"+7 (999) 999-99-99"}},{default:a(()=>[t("Телефон ")]),_:1},8,["modelValue","showErrors","errorResponse","maskProps"]),o(d,{type:"text",name:"email",modelValue:r.data.email,"onUpdate:modelValue":u[8]||(u[8]=l=>r.data.email=l),label:"E-mail ",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:""},{default:a(()=>[t("E-mail ")]),_:1},8,["modelValue","showErrors","errorResponse"]),o(d,{type:"text",name:"snils",modelValue:r.data.snils,"onUpdate:modelValue":u[9]||(u[9]=l=>r.data.snils=l),label:"СНИЛС",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:"",as:"mask",maskProps:{mask:"99999999999"}},{default:a(()=>[t("СНИЛС "),Oe]),_:1},8,["modelValue","showErrors","errorResponse"])])])]),_:1})],64)}const ge=F(Re,[["render",ce],["__file","/var/www/inflow-auto-front-main/src/shared/components/grouped-data/DealDataIP.vue"]]),Pe=v({components:{FormInput:S,FormCalendar:C,Card:y,FormCheckbox:c,DealDataIP:ge,AddressShortAlt:g},props:{errors:{type:Object,required:!0},incomingData:Object},emits:["updateData"],setup(e,{emit:u}){const r=A(e.incomingData||{});return u("updateData",r),O(r,()=>{u("updateData",r)}),{data:r}}}),Ie={class:"mb-4"},Le=s("h3",{class:"mb-3"},"Подписант",-1),Te={class:"flex flex-wrap"},je={class:"col-4"},Me=s("i",{class:"text-red-500"},"*",-1),qe={class:"col-4"},Ne=s("i",{class:"text-red-500"},"*",-1),We={class:"col-4"},Ye=s("i",{class:"text-red-500"},"*",-1),Ge={class:"col-12"},ze={class:"col-6"},He=s("i",{class:"text-red-500"},"*",-1),Je={class:"col-6"};function Ke(e,u,r,i,V,_){const d=E("DealDataIP"),h=E("AddressShortAlt"),l=E("FormCheckbox"),p=E("FormInput"),w=E("Card");return D(),b(R,null,[o(d,{data:e.data,errors:e.errors},null,8,["data","errors"]),o(h,{data:e.data,errors:e.errors},null,8,["data","errors"]),s("div",Ie,[o(l,{name:"is_signer",modelValue:e.data.is_signer,"onUpdate:modelValue":u[0]||(u[0]=n=>e.data.is_signer=n),label:"Является подписантом",showErrors:e.errors.isShow,errorResponse:e.errors.response},null,8,["modelValue","showErrors","errorResponse"])]),Le,o(w,{class:"mb-5"},{content:a(()=>[s("div",Te,[s("div",je,[o(p,{type:"text",name:"passport",modelValue:e.data.passport,"onUpdate:modelValue":u[1]||(u[1]=n=>e.data.passport=n),label:"Серия и номер паспорта",showErrors:e.errors.isShow,errorResponse:e.errors.response,as:"mask",maskProps:{mask:"9999 999999"}},{default:a(()=>[t("Серия и номер паспорта "),Me]),_:1},8,["modelValue","showErrors","errorResponse"])]),s("div",qe,[o(p,{type:"text",name:"passport_date",modelValue:e.data.passport_date,"onUpdate:modelValue":u[2]||(u[2]=n=>e.data.passport_date=n),label:"Дата выдачи",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:a(()=>[t("Дата выдачи "),Ne]),_:1},8,["modelValue","showErrors","errorResponse"])]),s("div",We,[o(p,{type:"text",name:"passport_issuer_code",modelValue:e.data.passport_issuer_code,"onUpdate:modelValue":u[3]||(u[3]=n=>e.data.passport_issuer_code=n),label:"Код подразделения",showErrors:e.errors.isShow,errorResponse:e.errors.response,as:"mask",maskProps:{mask:"999-999"}},{default:a(()=>[t("Код подразделения "),Ye]),_:1},8,["modelValue","showErrors","errorResponse"])]),s("div",Ge,[o(p,{type:"text",name:"passport_issuer",modelValue:e.data.passport_issuer,"onUpdate:modelValue":u[4]||(u[4]=n=>e.data.passport_issuer=n),label:"Кем выдан",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:a(()=>[t("Кем выдан")]),_:1},8,["modelValue","showErrors","errorResponse"])]),s("div",ze,[o(p,{type:"text",name:"birth_date",modelValue:e.data.birth_date,"onUpdate:modelValue":u[5]||(u[5]=n=>e.data.birth_date=n),label:"Дата рождения",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:a(()=>[t("Дата рождения "),He]),_:1},8,["modelValue","showErrors","errorResponse"])]),s("div",Je,[o(p,{type:"text",name:"birth_place",modelValue:e.data.birth_place,"onUpdate:modelValue":u[6]||(u[6]=n=>e.data.birth_place=n),label:"Место рождения",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:a(()=>[t("Место рождения ")]),_:1},8,["modelValue","showErrors","errorResponse"])])])]),_:1})],64)}const Qe=F(Pe,[["render",Ke],["__file","/var/www/inflow-auto-front-main/src/views/deals/modules/DealIP.vue"]]),Xe=[{value:"ООО",label:"ООО"},{value:"ИП",label:"ИП"},{value:"Физическое лицо",label:"Физическое лицо"}],Ze={components:{FormInput:S,Card:y,FormCalendar:C,FormSelect:$},props:{data:{type:Object,required:!0},errors:{type:Object,required:!0}},setup(){return{LEGAL_FORMS:Xe}}},$e=s("h3",{class:"mb-3"},"Основные регистрационные сведения",-1),xe={class:"grid"},e4={class:"col-6"},u4=s("i",{class:"text-red-500"},"*",-1),r4=s("i",{class:"text-red-500"},"*",-1),s4=s("i",{class:"text-red-500"},"*",-1),o4=s("i",{class:"text-red-500"},"*",-1),a4={class:"col-6"},t4=s("i",{class:"text-red-500"},"*",-1),l4=s("i",{class:"text-red-500"},"*",-1),n4=s("i",{class:"text-red-500"},"*",-1),d4=s("i",{class:"text-red-500"},"*",-1);function i4(e,u,r,i,V,_){const d=E("FormInput"),h=E("Card");return D(),b(R,null,[$e,o(h,{class:"mb-5"},{content:a(()=>[s("div",xe,[s("div",e4,[o(d,{type:"text",name:"full_name",modelValue:r.data.full_name,"onUpdate:modelValue":u[0]||(u[0]=l=>r.data.full_name=l),label:"Полное наименование",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:""},{default:a(()=>[t("Полное наименование "),u4]),_:1},8,["modelValue","showErrors","errorResponse"]),o(d,{type:"text",name:"short_name",modelValue:r.data.short_name,"onUpdate:modelValue":u[1]||(u[1]=l=>r.data.short_name=l),label:"Краткое наименование",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:""},{default:a(()=>[t("Краткое наименование "),r4]),_:1},8,["modelValue","showErrors","errorResponse"]),o(d,{type:"text",name:"phone",modelValue:r.data.phone,"onUpdate:modelValue":u[2]||(u[2]=l=>r.data.phone=l),label:"Телефон компании",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:"",as:"mask",maskProps:{mask:"+7 (999) 999-99-99"}},{default:a(()=>[t("Телефон компании "),s4]),_:1},8,["modelValue","showErrors","errorResponse","maskProps"]),o(d,{type:"text",name:"email",modelValue:r.data.email,"onUpdate:modelValue":u[3]||(u[3]=l=>r.data.email=l),label:"E-mail компании",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:""},{default:a(()=>[t("E-mail компании "),o4]),_:1},8,["modelValue","showErrors","errorResponse"])]),s("div",a4,[o(d,{type:"text",name:"ogrn",modelValue:r.data.ogrn,"onUpdate:modelValue":u[4]||(u[4]=l=>r.data.ogrn=l),label:"ОГРН",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:"",as:"mask",maskProps:{mask:"9999999999999"}},{default:a(()=>[t("ОГРН "),t4]),_:1},8,["modelValue","showErrors","errorResponse"]),o(d,{type:"text",name:"inn",modelValue:r.data.inn,"onUpdate:modelValue":u[5]||(u[5]=l=>r.data.inn=l),label:"ИНН",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:"",as:"mask",maskProps:{mask:"9999999999"}},{default:a(()=>[t("ИНН "),l4]),_:1},8,["modelValue","showErrors","errorResponse"]),o(d,{type:"text",name:"kpp",modelValue:r.data.kpp,"onUpdate:modelValue":u[6]||(u[6]=l=>r.data.kpp=l),label:"КПП",showErrors:r.errors.isShow,errorResponse:r.errors.response,as:"mask",maskProps:{mask:"999999999"},isOffset:""},{default:a(()=>[t("КПП "),n4]),_:1},8,["modelValue","showErrors","errorResponse"]),o(d,{type:"text",name:"oktmo",modelValue:r.data.oktmo,"onUpdate:modelValue":u[7]||(u[7]=l=>r.data.oktmo=l),label:"ОКТМО",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:""},{default:a(()=>[t("ОКТМО ")]),_:1},8,["modelValue","showErrors","errorResponse"]),o(d,{type:"text",name:"okpo",modelValue:r.data.okpo,"onUpdate:modelValue":u[8]||(u[8]=l=>r.data.okpo=l),label:"ОКПО",showErrors:r.errors.isShow,errorResponse:r.errors.response,isOffset:""},{default:a(()=>[t("ОКПО "),d4]),_:1},8,["modelValue","showErrors","errorResponse"])])])]),_:1})],64)}const m4=F(Ze,[["render",i4],["__file","/var/www/inflow-auto-front-main/src/shared/components/grouped-data/MasterTSDataUL.vue"]]),p4=v({components:{FormInput:S,Card:y,FormCheckbox:c,FormCalendar:C,MasterTSDataUL:m4,AddressShorAlt:g},props:{errors:{type:Object,required:!0},incomingData:Object},emits:["updateData"],setup(e,{emit:u}){const r=B(!1),i=A(e.incomingData||{});return u("updateData",i),O(i,()=>{u("updateData",i)}),{data:i,isSignatory:r}}}),E4={class:"flex align-items-center justify-content-between mb-3"},f4=s("h3",null,"Руководитель компании",-1),h4={class:"flex gap-2"},w4={class:"flex flex-wrap"},D4={class:"col-6"},V4=s("i",{class:"text-red-500"},"*",-1),_4=s("i",{class:"text-red-500"},"*",-1),F4=s("i",{class:"text-red-500"},"*",-1),b4={class:"col-6"},R4=s("i",{class:"text-red-500"},"*",-1),y4=s("i",{class:"text-red-500"},"*",-1),C4=s("i",{class:"text-red-500"},"*",-1),S4=s("h3",{class:"mb-3"},"Подписант",-1),k4={class:"flex flex-wrap"},B4={class:"col-4"},U4=s("i",{class:"text-red-500"},"*",-1),v4={class:"col-4"},A4=s("i",{class:"text-red-500"},"*",-1),O4={class:"col-4"},c4=s("i",{class:"text-red-500"},"*",-1),g4={class:"col-12"},P4={class:"col-6"},I4=s("i",{class:"text-red-500"},"*",-1),L4={class:"col-6"};function T4(e,u,r,i,V,_){const d=E("MasterTSDataUL"),h=E("AddressShorAlt"),l=E("FormCheckbox"),p=E("FormInput"),w=E("FormCalendar"),n=E("Card");return D(),b(R,null,[o(d,{data:e.data,errors:e.errors},null,8,["data","errors"]),o(h,{data:e.data,errors:e.errors},null,8,["data","errors"]),s("div",E4,[f4,s("div",h4,[o(l,{name:"is_signer",modelValue:e.data.is_signer,"onUpdate:modelValue":u[0]||(u[0]=m=>e.data.is_signer=m),label:"Является подписантом",showErrors:e.errors.isShow,errorResponse:e.errors.response},null,8,["modelValue","showErrors","errorResponse"])])]),o(n,{class:"mb-5"},{content:a(()=>[s("div",w4,[s("div",D4,[o(p,{type:"text",name:"director_role",modelValue:e.data.director_role,"onUpdate:modelValue":u[1]||(u[1]=m=>e.data.director_role=m),label:"Должность",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[t("Должность "),V4]),_:1},8,["modelValue","showErrors","errorResponse"]),o(p,{type:"text",name:"last_name",modelValue:e.data.last_name,"onUpdate:modelValue":u[2]||(u[2]=m=>e.data.last_name=m),label:"Фамилия",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[t("Фамилия "),_4]),_:1},8,["modelValue","showErrors","errorResponse"]),o(p,{type:"text",name:"first_name",modelValue:e.data.first_name,"onUpdate:modelValue":u[3]||(u[3]=m=>e.data.first_name=m),label:"Имя",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[t("Имя "),F4]),_:1},8,["modelValue","showErrors","errorResponse"]),o(p,{type:"text",name:"patronymic",modelValue:e.data.patronymic,"onUpdate:modelValue":u[4]||(u[4]=m=>e.data.patronymic=m),label:"Отчество",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[t("Отчество")]),_:1},8,["modelValue","showErrors","errorResponse"])]),s("div",b4,[o(p,{type:"text",name:"basis",modelValue:e.data.basis,"onUpdate:modelValue":u[5]||(u[5]=m=>e.data.basis=m),label:"Действует на основании",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[t("Действует на основании "),R4]),_:1},8,["modelValue","showErrors","errorResponse"]),o(w,{name:"postcode",modelValue:e.data.date,"onUpdate:modelValue":u[6]||(u[6]=m=>e.data.date=m),label:"Дата выдачи",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[t("Дата выдачи ")]),_:1},8,["modelValue","showErrors","errorResponse"]),o(p,{type:"text",name:"director_phone",modelValue:e.data.director_phone,"onUpdate:modelValue":u[7]||(u[7]=m=>e.data.director_phone=m),label:"Контактный телефон",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:"",as:"mask",maskProps:{mask:"+7 (999) 999-99-99"}},{default:a(()=>[t("Контактный телефон "),y4]),_:1},8,["modelValue","showErrors","errorResponse","maskProps"]),o(p,{type:"text",name:"director_email",modelValue:e.data.director_email,"onUpdate:modelValue":u[8]||(u[8]=m=>e.data.director_email=m),label:"Контактный email",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[t("Контактный email "),C4]),_:1},8,["modelValue","showErrors","errorResponse"])])])]),_:1}),S4,o(n,{class:"mb-5"},{content:a(()=>[s("div",k4,[s("div",B4,[o(p,{type:"text",name:"passport",modelValue:e.data.passport,"onUpdate:modelValue":u[9]||(u[9]=m=>e.data.passport=m),label:"Серия и номер паспорта",showErrors:e.errors.isShow,errorResponse:e.errors.response,as:"mask",maskProps:{mask:"9999 999999"}},{default:a(()=>[t("Серия и номер паспорта "),U4]),_:1},8,["modelValue","showErrors","errorResponse"])]),s("div",v4,[o(w,{type:"text",name:"passport_date",modelValue:e.data.passport_date,"onUpdate:modelValue":u[10]||(u[10]=m=>e.data.passport_date=m),label:"Дата выдачи",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:a(()=>[t("Дата выдачи "),A4]),_:1},8,["modelValue","showErrors","errorResponse"])]),s("div",O4,[o(p,{type:"text",name:"passport_issuer_code",modelValue:e.data.passport_issuer_code,"onUpdate:modelValue":u[11]||(u[11]=m=>e.data.passport_issuer_code=m),label:"Код подразделения",showErrors:e.errors.isShow,errorResponse:e.errors.response,as:"mask",maskProps:{mask:"999-999"}},{default:a(()=>[t("Код подразделения "),c4]),_:1},8,["modelValue","showErrors","errorResponse"])]),s("div",g4,[o(p,{type:"text",name:"passport_issuer",modelValue:e.data.passport_issuer,"onUpdate:modelValue":u[12]||(u[12]=m=>e.data.passport_issuer=m),label:"Кем выдан",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:a(()=>[t("Кем выдан")]),_:1},8,["modelValue","showErrors","errorResponse"])]),s("div",P4,[o(w,{type:"text",name:"birth_date",modelValue:e.data.birth_date,"onUpdate:modelValue":u[13]||(u[13]=m=>e.data.birth_date=m),label:"Дата рождения",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:a(()=>[t("Дата рождения "),I4]),_:1},8,["modelValue","showErrors","errorResponse"])]),s("div",L4,[o(p,{type:"text",name:"birth_place",modelValue:e.data.birth_place,"onUpdate:modelValue":u[14]||(u[14]=m=>e.data.birth_place=m),label:"Место рождения",showErrors:e.errors.isShow,errorResponse:e.errors.response},{default:a(()=>[t("Место рождения ")]),_:1},8,["modelValue","showErrors","errorResponse"])])])]),_:1})],64)}const j4=F(p4,[["render",T4],["__file","/var/www/inflow-auto-front-main/src/views/deals/modules/DealUL.vue"]]),M4={components:{SelectButton:Y,TitleBox:X,Wrap:Z,DealUL:j4,DealIP:Qe,DealFL:be},setup(){var l;const e=B({}),u=[{label:U.ul,value:"ul"},{label:U.ip,value:"ip"},{label:U.fl,value:"fl"}],r=p=>{e.value=T(L({},p),{type:e.value.type})},i=H(),{principalState:V}=Q(),_=G(()=>i.params.dealID==="create"),d=B({});return _.value?e.value={type:"ul"}:((l=V.deal)==null?void 0:l.data.id)!==Number(i.params.dealID)?z(async()=>{const p=await J(i.params.dealID);e.value=(p==null?void 0:p.owner)||{type:"ul"}}):e.value=V.deal.data.owner||{type:"ul"},{data:e,errors:d,legalFormValues:u,handleError:async p=>{d.value=p},updateData:r,postDealOwner:K}}},q4="DealOwnerTS_loader_1691548060482",N4={loader:q4};function W4(e,u,r,i,V,_){const d=E("TitleBox"),h=E("SelectButton"),l=E("DealUL"),p=E("DealIP"),w=E("DealFL"),n=E("Wrap");return D(),k(n,{class:"p-4",apiMethod:i.postDealOwner,data:i.data,onUpdateError:i.handleError},{default:a(()=>[o(d,{nameSection:"Владелец ТС"}),o(h,{modelValue:i.data.type,"onUpdate:modelValue":u[0]||(u[0]=m=>i.data.type=m),options:i.legalFormValues,optionLabel:"label",optionValue:"value",class:"mb-4 mt-4"},null,8,["modelValue","options"]),i.data.type==="ul"?(D(),k(l,{key:0,errors:i.errors,onUpdateData:i.updateData,incomingData:i.data},null,8,["errors","onUpdateData","incomingData"])):f("v-if",!0),i.data.type==="ip"?(D(),k(p,{key:1,errors:i.errors,onUpdateData:i.updateData,incomingData:i.data},null,8,["errors","onUpdateData","incomingData"])):f("v-if",!0),i.data.type==="fl"?(D(),k(w,{key:2,errors:i.errors,onUpdateData:i.updateData,incomingData:i.data},null,8,["errors","onUpdateData","incomingData"])):f("v-if",!0)]),_:1},8,["apiMethod","data","onUpdateError"])}const Y4={$style:N4},yu=F(M4,[["render",W4],["__cssModules",Y4],["__file","/var/www/inflow-auto-front-main/src/views/deals/draft/DealOwnerTS.vue"]]);export{yu as default};

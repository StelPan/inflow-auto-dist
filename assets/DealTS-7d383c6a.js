import{s as y}from"./card.esm-90d7995a.js";import{b as w,a as v,o as C,w as R,_ as F,m as i,x as B,p as a,f as m,c as u,h as s,B as d,g as E,q as c}from"./_plugin-vue_export-helper-4e0f1051.js";import{u as g}from"./vue-router-e112b3e0.js";import{F as S}from"./FormCalendar-db92c851.js";import{F as U}from"./FormCheckbox-5c271ed9.js";import{F as A}from"./FormSelect-1da9e38f.js";import{F as k}from"./FormInput-98bf5b06.js";import{a as O,n as N}from"./principalDeals-5bcfc342.js";import{u as I}from"./Api-3d31057e.js";import{T,W}from"./Wrap-056f41a0.js";import"./Cookies-c25692b0.js";import"./dayjs.min-18f6db6c.js";import"./button.esm-48574c78.js";import"./ripple.esm-2bb5fa45.js";import"./overlayeventbus.esm-47a43062.js";import"./portal.esm-58de97e7.js";import"./runtime-dom.esm-bundler-b3385430.js";import"./DateTime-6dd15e58.js";import"./FormItem-904d0fd7.js";import"./checkbox.esm-31a5a5c8.js";import"./dropdown.esm-cbd0410a.js";import"./api.esm-fa2395b6.js";import"./virtualscroller.esm-b423035f.js";import"./multiselect.esm-38716bbc.js";import"./inputnumber.esm-b284c98e.js";import"./index.es-55ebbfbf.js";import"./progressspinner.esm-2138ab26.js";import"./index-5ce0c5bc.js";import"./FormLayout-e63b5088.js";const M={components:{FormInput:k,FormCheckbox:U,FormSelect:A,FormCalendar:S,TitleBox:T,Card:y,Wrap:W},setup(){var b;const _=g(),{principalState:r}=I(),f=w(()=>_.params.dealID==="create"),e=w(()=>{var n,h;return!f||((n=r.deal)==null?void 0:n.data.id)===Number(_.params.dealID)&&!!((h=r.deal)!=null&&h.data.car.id)}),V=w(()=>t.value.no_vin===1),p=w(()=>t.value.deregistered===1),t=v({}),l=v({});return f.value?t.value={}:((b=r.deal)==null?void 0:b.data.id)!==Number(_.params.dealID)?C(async()=>{const n=await O(_.params.dealID);t.value=(n==null?void 0:n.car)||{}}):t.value=r.deal.data.car,R(V,()=>{t.value.no_vin&&(t.value.vin="")}),R(p,()=>{t.value.deregistered&&(t.value.registration_number="",t.value.sts_series="",t.value.sts_number="",t.value.sts_date="",t.value.sts_issuer="")}),{data:t,errors:l,postDealTS:N,handleError:async n=>{l.value=n},isCreate:f,route:_,alreadyExists:e,isNoVin:V,isDeregistered:p,noData:"Данные отсутствуют"}}},q=s("h3",{class:"mb-3 mt-3"},"Основные данные",-1),P={class:"grid"},j={class:"col-12 md:col-6"},z={key:0,class:"text-red-500"},G={class:"col-12 md:col-6"},H={class:"col-12 md:col-6"},J=s("i",{class:"text-red-500"},"*",-1),K={class:"col-12 md:col-6"},L=s("i",{class:"text-red-500"},"*",-1),Q={class:"col-12 md:col-6"},X=s("i",{class:"text-red-500"},"*",-1),Y={class:"col-12 md:col-6"},Z={key:0,class:"text-red-500"},$={class:"col-12 md:col-3"},ee=s("i",{class:"text-red-500"},"*",-1),re={class:"col-12 md:col-3"},oe=s("i",{class:"text-red-500"},"*",-1),se={class:"col-12 md:col-4"},ue=s("h3",{class:"mb-3 mt-3"},"Дополнительные данные",-1),ae={class:"grid"},le={class:"col-12 md:col-6"},de=s("i",{class:"text-red-500"},"*",-1),te=s("i",{class:"text-red-500"},"*",-1),ne=s("i",{class:"text-red-500"},"*",-1),ie=s("i",{class:"text-red-500"},"*",-1),me=s("i",{class:"text-red-500"},"*",-1),_e=s("i",{class:"text-red-500"},"*",-1),Ee=s("i",{class:"text-red-500"},"*",-1),ce={class:"col-12 md:col-6"},be={class:"grid"},fe={class:"col-6"},he=s("i",{class:"text-red-500"},"*",-1),we={class:"col-6"},Ve=s("i",{class:"text-red-500"},"*",-1),pe=s("i",{class:"text-red-500"},"*",-1),De=s("i",{class:"text-red-500"},"*",-1),xe={class:"grid"},ve={class:"col-6"},Re={key:0,class:"text-red-500"},ye={class:"col-6"},Ce={key:0,class:"text-red-500"},Fe={key:0,class:"text-red-500"},Be={key:0,class:"text-red-500"};function ge(_,r,f,e,V,p){const t=i("TitleBox"),l=i("FormInput"),D=i("FormCheckbox"),x=i("FormSelect"),b=i("Card"),n=i("FormCalendar"),h=i("Wrap");return m(),B(h,{class:"p-4",data:e.data,apiMethod:e.postDealTS,onUpdateError:e.handleError},{default:a(()=>[u(t,{nameSection:"Транспортное средство"}),q,u(b,{class:"mb-5"},{content:a(()=>[s("div",P,[s("div",j,[u(l,{type:"text",name:"vin",modelValue:e.data.vin,"onUpdate:modelValue":r[0]||(r[0]=o=>e.data.vin=o),label:e.isNoVin?"VIN":e.noData,showErrors:e.errors.isShow,disabled:e.alreadyExists||e.isNoVin,errorResponse:e.errors.response},{default:a(()=>[d("VIN "),e.isNoVin?c("v-if",!0):(m(),E("i",z,"*"))]),_:1},8,["modelValue","label","showErrors","disabled","errorResponse"])]),s("div",G,[u(D,{name:"no_vin",modelValue:e.data.no_vin,"onUpdate:modelValue":r[1]||(r[1]=o=>e.data.no_vin=o),class:"md:mt-4",label:"VIN отсутствует",showErrors:e.errors.isShow,errorResponse:e.errors.response,disabled:e.alreadyExists},null,8,["modelValue","showErrors","errorResponse","disabled"])]),s("div",H,[u(l,{type:"text",name:"brand",modelValue:e.data.brand,"onUpdate:modelValue":r[2]||(r[2]=o=>e.data.brand=o),label:"Марка",showErrors:e.errors.isShow,errorResponse:e.errors.response,disabled:e.alreadyExists},{default:a(()=>[d("Марка "),J]),_:1},8,["modelValue","showErrors","errorResponse","disabled"])]),s("div",K,[u(x,{type:"text",name:"type",modelValue:e.data.type,"onUpdate:modelValue":r[3]||(r[3]=o=>e.data.type=o),label:"Тип",showErrors:e.errors.isShow,errorResponse:e.errors.response,options:[{value:"Легковой",label:"Легковой"},{value:"Грузовой",label:"Грузовой"},{value:"Автобусы",label:"Автобусы"},{value:"Мототехника",label:"Мототехника"}]},{default:a(()=>[d("Тип "),L]),_:1},8,["modelValue","showErrors","errorResponse"])]),s("div",Q,[u(l,{type:"text",name:"model",modelValue:e.data.model,"onUpdate:modelValue":r[4]||(r[4]=o=>e.data.model=o),label:"Модель",showErrors:e.errors.isShow,disabled:e.alreadyExists,errorResponse:e.errors.response},{default:a(()=>[d("Модель "),X]),_:1},8,["modelValue","showErrors","disabled","errorResponse"])]),s("div",Y,[u(l,{type:"text",name:"registration_number",modelValue:e.data.registration_number,"onUpdate:modelValue":r[5]||(r[5]=o=>e.data.registration_number=o),label:e.isDeregistered?e.noData:"Гос. номер",showErrors:e.errors.isShow,disabled:e.isDeregistered,errorResponse:e.errors.response},{default:a(()=>[d("Гос. номер "),e.isDeregistered?c("v-if",!0):(m(),E("i",Z,"*"))]),_:1},8,["modelValue","label","showErrors","disabled","errorResponse"])]),s("div",$,[u(l,{type:"text",name:"year",modelValue:e.data.year,"onUpdate:modelValue":r[6]||(r[6]=o=>e.data.year=o),label:"Год выпуска",showErrors:e.errors.isShow,errorResponse:e.errors.response,as:"mask",maskProps:{mask:"9999"}},{default:a(()=>[d("Год выпуска "),ee]),_:1},8,["modelValue","showErrors","errorResponse"])]),s("div",re,[u(l,{type:"text",name:"mileage",modelValue:e.data.mileage,"onUpdate:modelValue":r[7]||(r[7]=o=>e.data.mileage=o),label:"Пробег",showErrors:e.errors.isShow,errorResponse:e.errors.response,as:"number"},{default:a(()=>[d("Пробег "),oe]),_:1},8,["modelValue","showErrors","errorResponse"])]),s("div",se,[u(D,{name:"deregistered",modelValue:e.data.deregistered,"onUpdate:modelValue":r[8]||(r[8]=o=>e.data.deregistered=o),class:"mt-4",label:"ТС снято с учета",showErrors:e.errors.isShow,errorResponse:e.errors.response},null,8,["modelValue","showErrors","errorResponse"])])])]),_:1}),ue,u(b,{class:"mb-5"},{content:a(()=>[s("div",ae,[s("div",le,[u(l,{type:"text",name:"power",modelValue:e.data.power,"onUpdate:modelValue":r[9]||(r[9]=o=>e.data.power=o),label:"Мощность двигателя, л.с.",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[d("Мощность двигателя, л.с. "),de]),_:1},8,["modelValue","showErrors","errorResponse"]),u(l,{type:"text",name:"volume",modelValue:e.data.volume,"onUpdate:modelValue":r[10]||(r[10]=o=>e.data.volume=o),label:"Рабочий объем, л.",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[d("Рабочий объем, л. "),te]),_:1},8,["modelValue","showErrors","errorResponse"]),u(l,{type:"text",name:"color",modelValue:e.data.color,"onUpdate:modelValue":r[11]||(r[11]=o=>e.data.color=o),label:"Цвет ТС",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[d("Цвет ТС "),ne]),_:1},8,["modelValue","showErrors","errorResponse"]),u(l,{type:"text",name:"engine_type",modelValue:e.data.engine_type,"onUpdate:modelValue":r[12]||(r[12]=o=>e.data.engine_type=o),label:"Тип двигателя",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[d("Тип двигателя "),ie]),_:1},8,["modelValue","showErrors","errorResponse"]),u(l,{type:"text",name:"engine_number",modelValue:e.data.engine_number,"onUpdate:modelValue":r[13]||(r[13]=o=>e.data.engine_number=o),label:"Номер двигателя",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[d("Номер двигателя "),me]),_:1},8,["modelValue","showErrors","errorResponse"]),u(l,{type:"text",name:"chassis_number",modelValue:e.data.chassis_number,"onUpdate:modelValue":r[14]||(r[14]=o=>e.data.chassis_number=o),label:"Номер шасси, рамы",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[d("Номер шасси, рамы "),_e]),_:1},8,["modelValue","showErrors","errorResponse"]),u(l,{type:"text",name:"body_number",modelValue:e.data.body_number,"onUpdate:modelValue":r[15]||(r[15]=o=>e.data.body_number=o),label:"Номер кузова",showErrors:e.errors.isShow,errorResponse:e.errors.response,disabled:e.alreadyExists,isOffset:""},{default:a(()=>[d("Номер кузова "),Ee]),_:1},8,["modelValue","showErrors","errorResponse","disabled"])]),s("div",ce,[s("div",be,[s("div",fe,[u(l,{type:"text",name:"pts_series",modelValue:e.data.pts_series,"onUpdate:modelValue":r[16]||(r[16]=o=>e.data.pts_series=o),label:"ПТС (серия)",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[d("ПТС (серия) "),he]),_:1},8,["modelValue","showErrors","errorResponse"])]),s("div",we,[u(l,{type:"text",name:"pts_number",modelValue:e.data.pts_number,"onUpdate:modelValue":r[17]||(r[17]=o=>e.data.pts_number=o),label:"ПТС (номер)",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[d("ПТС (номер) "),Ve]),_:1},8,["modelValue","showErrors","errorResponse"])])]),u(n,{type:"text",name:"pts_date",modelValue:e.data.pts_date,"onUpdate:modelValue":r[18]||(r[18]=o=>e.data.pts_date=o),label:"ПТС (дата выдачи)",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[d("ПТС (дата выдачи) "),pe]),_:1},8,["modelValue","showErrors","errorResponse"]),u(l,{type:"text",name:"pts_issuer",modelValue:e.data.pts_issuer,"onUpdate:modelValue":r[19]||(r[19]=o=>e.data.pts_issuer=o),label:"ПТС (кем выдан)",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:""},{default:a(()=>[d("ПТС (кем выдан) "),De]),_:1},8,["modelValue","showErrors","errorResponse"]),s("div",xe,[s("div",ve,[u(l,{type:"text",name:"sts_series",modelValue:e.data.sts_series,"onUpdate:modelValue":r[20]||(r[20]=o=>e.data.sts_series=o),label:e.isDeregistered?e.noData:"СТС (серия)",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:"",disabled:e.isDeregistered},{default:a(()=>[d("СТС (серия) "),e.isDeregistered?c("v-if",!0):(m(),E("i",Re,"*"))]),_:1},8,["modelValue","label","showErrors","errorResponse","disabled"])]),s("div",ye,[u(l,{type:"text",name:"sts_number",modelValue:e.data.sts_number,"onUpdate:modelValue":r[21]||(r[21]=o=>e.data.sts_number=o),label:e.isDeregistered?e.noData:"СТС (номер)",showErrors:e.errors.isShow,errorResponse:e.errors.response,disabled:e.isDeregistered,isOffset:""},{default:a(()=>[d("СТС (номер) "),e.isDeregistered?c("v-if",!0):(m(),E("i",Ce,"*"))]),_:1},8,["modelValue","label","showErrors","errorResponse","disabled"])])]),u(n,{type:"text",name:"sts_date",modelValue:e.data.sts_date,"onUpdate:modelValue":r[22]||(r[22]=o=>e.data.sts_date=o),label:e.isDeregistered?e.noData:"СТС (дата выдачи)",showErrors:e.errors.isShow,errorResponse:e.errors.response,disabled:e.isDeregistered,isOffset:""},{default:a(()=>[d("СТС (дата выдачи) "),e.isDeregistered?c("v-if",!0):(m(),E("i",Fe,"*"))]),_:1},8,["modelValue","label","showErrors","errorResponse","disabled"]),u(l,{type:"text",name:"sts_issuer",modelValue:e.data.sts_issuer,"onUpdate:modelValue":r[23]||(r[23]=o=>e.data.sts_issuer=o),label:e.isDeregistered?e.noData:"СТС (кем выдан)",showErrors:e.errors.isShow,errorResponse:e.errors.response,isOffset:"",disabled:e.isDeregistered},{default:a(()=>[d("СТС (кем выдан) "),e.isDeregistered?c("v-if",!0):(m(),E("i",Be,"*"))]),_:1},8,["modelValue","label","showErrors","errorResponse","disabled"])])])]),_:1})]),_:1},8,["data","apiMethod","onUpdateError"])}const a4=F(M,[["render",ge],["__file","/var/www/inflow-auto-front-main/src/views/deals/draft/DealTS.vue"]]);export{a4 as default};

import{s as w}from"./button.esm-48574c78.js";import{d as C,_ as R,m as t,g as F,c as u,p as r,h as d,j as h,F as V,f as i,B as a,x as m,q as v}from"./_plugin-vue_export-helper-4e0f1051.js";import{r as p}from"./index-72d7336d.js";import{a as y,F as b,S as k}from"./SmsCode-0f44746a.js";import{F as B}from"./FormInput-a7191b54.js";import{F as S}from"./FormLayout-5c19cd5a.js";import{A as c}from"./Api-3d31057e.js";import"./ripple.esm-2bb5fa45.js";import"./vue-router-e112b3e0.js";import"./Cookies-c25692b0.js";import"./index.es-55ebbfbf.js";import"./runtime-dom.esm-bundler-b3385430.js";import"./principalSetUser-1de61370.js";import"./inputnumber.esm-b284c98e.js";import"./FormItem-83c2c2c1.js";async function U(e){return await c.post("auth/register",e)}const L=C({data(){return{firstname:"",lastname:"",middleName:"",phone:"+7",email:"",password:"",confirmPassword:"",code:"",isSaving:!1,isRegistered:!1,showErrors:!1,errorResponse:void 0}},created(){this.phone=this.$route.query.phone,this.router.replace("/register")},methods:{async saveChanges(){if(!this.firstname||!this.lastname||!this.phone||!this.email){this.showErrors=!0;return}this.isSaving=!0,this.errorResponse=void 0,this.showErrors=!1;const e=await U({first_name:this.firstname,last_name:this.lastname,phone:this.phone,email:this.email});this.isSaving=!1,e.success?this.isRegistered=!0:(this.errorResponse=e,this.showErrors=!0)},async sndCode(){if(!this.code){this.showErrors=!0;return}this.isSaving=!0,this.errorResponse=void 0,this.showErrors=!1;const e=await y({phone:this.phone,code:this.code});this.isSaving=!1,e.success?p.push("/projects"):(p.push("/projects"),this.errorResponse=e,this.showErrors=!0)}},setup(){return{router:p}},components:{FormLayout:S,Button:w,FormInput:B,FormHeader:b,SmsCode:k}}),$="SignUp_formButtons_1691720646542",N="SignUp_backToLogin_1691720646542",q={formButtons:$,backToLogin:N};function A(e,s,O,T,j,H){const f=t("FormHeader"),n=t("FormInput"),E=t("SmsCode"),l=t("Button"),g=t("FormLayout");return i(),F(V,null,[u(g,null,{default:r(()=>[u(f,null,{default:r(()=>[a(" Давайте познакомимся ")]),_:1}),u(n,{type:"text",name:"last_name",modelValue:e.lastname,"onUpdate:modelValue":s[0]||(s[0]=o=>e.lastname=o),label:"Фамилия",showErrors:e.showErrors,errorResponse:e.errorResponse,isOffset:""},{required:r(()=>[a(" Введите Вашу фамилию ")]),_:1},8,["modelValue","showErrors","errorResponse"]),u(n,{type:"text",name:"first_name",modelValue:e.firstname,"onUpdate:modelValue":s[1]||(s[1]=o=>e.firstname=o),label:"Имя",showErrors:e.showErrors,errorResponse:e.errorResponse,isOffset:""},{required:r(()=>[a(" Введите Ваше имя ")]),_:1},8,["modelValue","showErrors","errorResponse"]),u(n,{type:"text",name:"middle_name",modelValue:e.middleName,"onUpdate:modelValue":s[2]||(s[2]=o=>e.middleName=o),label:"Отчество",showErrors:e.showErrors,errorResponse:e.errorResponse,isOffset:""},null,8,["modelValue","showErrors","errorResponse"]),u(n,{type:"email",name:"email",modelValue:e.email,"onUpdate:modelValue":s[3]||(s[3]=o=>e.email=o),label:"E-mail",showErrors:e.showErrors,errorResponse:e.errorResponse,isOffset:""},{required:r(()=>[a(" Введите Ваш e-mail ")]),_:1},8,["modelValue","showErrors","errorResponse"]),u(n,{type:"tel",name:"phone",modelValue:e.phone,"onUpdate:modelValue":s[4]||(s[4]=o=>e.phone=o),label:"Контактный телефон",showErrors:e.showErrors,errorResponse:e.errorResponse,isOffset:"",as:"mask",maskProps:{mask:"+7 (999) 999-99-99"}},{required:r(()=>[a(" Введите Ваш телефон ")]),_:1},8,["modelValue","showErrors","errorResponse","maskProps"]),e.isRegistered?(i(),m(E,{key:0,modelValue:e.code,"onUpdate:modelValue":s[5]||(s[5]=o=>e.code=o)},null,8,["modelValue"])):v("v-if",!0),d("div",{class:h(e.$style.formButtons)},[e.isRegistered?(i(),m(l,{key:1,type:"submit",label:e.isSaving?"Идет вход":"Отправить код",loading:e.isSaving,onClick:e.sndCode,class:"p-button-rounded"},null,8,["label","loading","onClick"])):(i(),m(l,{key:0,type:"submit",label:e.isSaving?"Регистрация...":"Зарегистрироваться",loading:e.isSaving,onClick:e.saveChanges,class:"p-button-rounded"},null,8,["label","loading","onClick"]))],2)]),_:1}),d("div",{class:h(e.$style.backToLogin)},[u(l,{label:"Уже зарегистрированы?",class:"p-button-text p-button-rounded",onClick:s[6]||(s[6]=()=>e.router.push("/login"))})],2)],64)}const D={$style:q},se=R(L,[["render",A],["__cssModules",D],["__file","/var/www/inflow-auto-front-main/src/views/auth/SignUp.vue"]]);export{se as default};

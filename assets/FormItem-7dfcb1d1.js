import{d as n,_ as i,x as l,p as d,j as m,z as u,f as s,k as o,g as t,t as f,q as a}from"./_plugin-vue_export-helper-4e0f1051.js";const p=n({props:{isOffset:Boolean,showErrors:Boolean,errorResponse:Object,name:String,modelValue:[String,Array],as:{type:String,default:"label"}},computed:{errorState(){return this.showErrors?this.errorResponse&&this.errorDataMessage?"serverError":(!this.modelValue||!this.modelValue.length)&&this.$slots.required?"requiredError":this.$slots.error?"customError":"none":"none"},errorDataMessage(){var e;const r=this.errorResponse&&((e=this.errorResponse)!=null&&e.errorFields)?this.errorResponse.errorFields[this.name]:void 0;if(r)return r.join(" ")}}}),c="FormItem_field_1691549853255",h={field:c},$={key:0,class:"p-error"},y={key:2};function S(r,e,E,v,k,_){return s(),l(u(r.$props.as),{class:m([r.$style.field,r.isOffset&&"pb-2 pt-2"])},{default:d(()=>[o(r.$slots,"default",{isError:r.errorState!=="none"}),r.errorState!=="none"?(s(),t("small",$,[r.errorState==="customError"?o(r.$slots,"error",{key:0}):r.errorState==="requiredError"?o(r.$slots,"required",{key:1}):r.errorState==="serverError"?(s(),t("span",y,f(r.errorDataMessage),1)):a("v-if",!0)])):a("v-if",!0)]),_:3},8,["class"])}const g={$style:h},F=i(p,[["render",S],["__cssModules",g],["__file","/var/www/inflow-auto-front-main/src/shared/components/FormItem/FormItem.vue"]]);export{F};

import{s as c}from"./checkbox.esm-31a5a5c8.js";import{d as p,a as f,w as h,_ as b,m,x as V,p as k,f as v,h as d,c as C,j as u,k as g,B as w,t as F}from"./_plugin-vue_export-helper-4e0f1051.js";import{F as B}from"./FormItem-7dfcb1d1.js";const I=p({props:{name:String,type:String,label:String,modelValue:String,disabled:Boolean,showErrors:Boolean,errorResponse:Object,isFloatLabel:Boolean,isOffset:Boolean},emits:["update:modelValue"],components:{FormItem:B,Checkbox:c},setup(e,{emit:l}){const o=f(Number(e.modelValue)?"1":"0");return h(e,()=>{o.value=Number(e.modelValue)?"1":"0"}),{handleInput:a=>{var r,s,n;((r=a.target)==null?void 0:r.checked)!==void 0&&(o.value=Number((s=a.target)==null?void 0:s.checked)?"1":"0",l("update:modelValue",Number((n=a.target)==null?void 0:n.checked)?"1":"0"))},value:o,props:e}}}),_="FormCheckbox_input_1691549853214",N={input:_};function S(e,l,o,i,a,r){const s=m("Checkbox"),n=m("FormItem");return v(),V(n,{isOffset:e.isOffset,name:e.name,modelValue:e.value,showErrors:e.showErrors,errorResponse:e.errorResponse,as:"label"},{default:k(({isError:t})=>[d("div",{class:u(["flex gap-2",[t&&"p-invalid"]])},[C(s,{inputId:e.name,name:e.name,trueValue:"1",falseValue:"0",binary:"",modelValue:e.value,onChange:e.handleInput,disabled:e.disabled},null,8,["inputId","name","modelValue","onChange","disabled"]),d("span",{class:u([t&&"p-invalid"])},[g(e.$slots,"default",{},()=>[w(F(e.label),1)])],2)],2)]),_:3},8,["isOffset","name","modelValue","showErrors","errorResponse"])}const $={$style:N},E=b(I,[["render",S],["__cssModules",$],["__file","/var/www/inflow-auto-front-main/src/shared/components/FormCheckbox.vue"]]);export{E as F};

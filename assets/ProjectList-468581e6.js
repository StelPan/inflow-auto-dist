import{s as h}from"./progressspinner.esm-2138ab26.js";import{d as _,_ as m,m as a,g as o,c as s,p as i,F as y,h as n,q as b,f as u,t as v,j as c,u as P,b as g,o as E}from"./_plugin-vue_export-helper-4e0f1051.js";import{f as L}from"./principalCompanies-2dd56fc9.js";import{u as S}from"./Api-3d31057e.js";import{s as k}from"./card.esm-90d7995a.js";import"./Cookies-c25692b0.js";const C=_({}),F=n("div",{class:"text-center mb-4"},[n("h1",{class:"text-4xl font-semibold mb-2"},"Добавьте ваш первый проект"),b(` <p class="inline-block text-1xl max-w-30rem">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit,
      vulputate eu pharetra nec, mattis ac neque. Duis vulputate
    </p> `)],-1),N=n("span",{class:"pi pi-plus p-button-icon p-button-icon-left"},null,-1),A=n("span",{class:"p-button-label"},"Добавить первый проект",-1);function B(t,r,f,$,w,j){const l=a("router-link");return u(),o(y,null,[F,s(l,{to:"/projects/add",class:"p-button p-component","aria-label":"Добавить первый проект"},{default:i(()=>[N,A]),_:1})],64)}const M=m(C,[["render",B],["__file","/var/www/inflow-auto-front-main/src/views/projects/module/ProjectsEmpty.vue"]]),D={active:"Активен",new:"Новый"},x=_({props:{status:{type:String,required:!0},className:String},computed:{statusData(){return D[this.status]}}}),q="Status_active_1691720646803",V={active:q,new:"Status_new_1691720646803"};function z(t,r,f,$,w,j){return u(),o("p",{class:c([[t.$style.module,t.$style[t.status],t.className],"text-sm font-normal"])},v(t.statusData),3)}const T={$style:V},O=m(x,[["render",z],["__cssModules",T],["__file","/var/www/inflow-auto-front-main/src/shared/components/Status/Status.vue"]]),U=_({components:{Card:k,Status:O},props:{companies:{type:Array,required:!0}},setup(){return{dayName:{mon:"Пн",tue:"Вт",wed:"Ср",thu:"Чт",fri:"Пт",sat:"Сб",sun:"Вс"}}}}),W="ProjectsList_add_1691720646689 ProjectsList_add_1691720646690",G="ProjectsList_project_1691720646689 ProjectsList_project_1691720646690",H="ProjectsList_disabled_1691720646690",I={add:W,project:G,disabled:H,"overflow-wrap-anywhere":"ProjectsList_overflow-wrap-anywhere_1691720646690"},J={class:"grid"},K={class:"flex align-items-start justify-content-between lg:flex-column",style:{"overflow-wrap":"anywhere"}},Q={class:"text-xl font-semibold"},R={class:"col-12 md:col-4 lg:col-2"},X=n("i",{class:"pi pi-plus-circle",style:{"font-size":"2rem"}},null,-1);function Y(t,r,f,$,w,j){const l=a("Status"),p=a("Card"),d=a("router-link");return u(),o("div",J,[(u(!0),o(y,null,P(t.companies,e=>(u(),o("div",{class:"col-12 md:col-4 lg:col-2",key:e.id},[s(d,{to:`/projects/${e.id}/deals`,class:"block h-full","aria-label":`Открыть проект ${e.name}`},{default:i(()=>[s(p,{class:c(["h-full",t.$style.project])},{content:i(()=>[n("div",K,[n("p",Q,v(e.name),1),s(l,{status:e.status,className:"pt-1"},null,8,["status"])])]),_:2},1032,["class"])]),_:2},1032,["to","aria-label"])]))),128)),n("div",R,[s(d,{to:"/projects/add",class:"block h-full","aria-label":"Добавить новый проект"},{default:i(()=>[s(p,{class:c(["h-full flex align-items-center justify-content-center",t.$style.add])},{content:i(()=>[X]),_:1},8,["class"])]),_:1})])])}const Z={$style:I},tt=m(U,[["render",Y],["__cssModules",Z],["__file","/var/www/inflow-auto-front-main/src/views/projects/module/ProjectsList.vue"]]),st=_({components:{ProjectsList:tt,ProjectsEmpty:M,ProgressSpinner:h},setup(){const{principalState:t}=S(),r=g(()=>t.companies);return E(()=>L()),{companies:r}}}),et="ProjectList_container_1691720646543",ot="ProjectList_loader_1691720646544",nt={container:et,loader:ot};function ut(t,r,f,$,w,j){var e;const l=a("ProgressSpinner"),p=a("ProjectsEmpty"),d=a("ProjectsList");return t.companies?(e=t.companies)!=null&&e.data.length?(u(),o("div",{key:2,class:c([t.$style.container,"p-4"])},[s(d,{companies:t.companies.data},null,8,["companies"])],2)):(u(),o("div",{key:1,class:c([t.$style.container,"flex flex-column align-items-center justify-content-center p-4"])},[s(p)],2)):(u(),o("div",{key:0,class:c([[t.$style.container,t.$style.loader],"p-4"])},[s(l,{strokeWidth:"1",animationDuration:".5s"})],2))}const at={$style:nt},_t=m(st,[["render",ut],["__cssModules",at],["__file","/var/www/inflow-auto-front-main/src/views/projects/ProjectList.vue"]]);export{_t as default};

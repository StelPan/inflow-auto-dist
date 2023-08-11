import{s as E}from"./button.esm-48574c78.js";import{a as B,b as h}from"./datatable.esm-2cd7f014.js";import{s as C}from"./progressspinner.esm-2138ab26.js";import{d as $,b as v,o as k,_ as w,m as u,g as d,c as t,j as m,h as f,p as o,q as _,f as l,B as i,t as r}from"./_plugin-vue_export-helper-4e0f1051.js";import{u as I}from"./vue-router-e112b3e0.js";import{r as F}from"./index-72d7336d.js";import{B as j}from"./beneficiaryType-0f5d6dda.js";import{f as N}from"./principalBeneficiary-ce279450.js";import{u as S}from"./Api-3d31057e.js";import"./ripple.esm-2bb5fa45.js";import"./api.esm-fa2395b6.js";import"./dropdown.esm-cbd0410a.js";import"./overlayeventbus.esm-47a43062.js";import"./portal.esm-58de97e7.js";import"./virtualscroller.esm-b423035f.js";import"./runtime-dom.esm-bundler-b3385430.js";import"./inputnumber.esm-b284c98e.js";import"./focustrap.esm-4326017e.js";import"./Cookies-c25692b0.js";const T=$({components:{ProgressSpinner:C,DataTable:B,Column:h,Button:E},setup(){const{principalState:a}=S(),s=v(()=>a.beneficiaries),c=I(),p=c.params.projectID;return k(async()=>await N(p)),{beneficiaries:s,BENEFICIARY_TYPE:j,router:F,routes:c}}}),L="BeneficiaryList_container_1691720646582",P="BeneficiaryList_loader_1691720646582",V={container:L,loader:P},Y={class:"flex justify-content-between mb-4"},A=f("div",{class:"w-25rem flex"},[_(` <FormInput
            type="text"
            name="search"
            v-model="search"
          label="Поиск по ФИО или номеру телефона"
        /> `)],-1);function M(a,s,c,p,q,z){const b=u("ProgressSpinner"),y=u("Button"),n=u("Column"),g=u("router-link"),D=u("DataTable");return a.beneficiaries?(l(),d("div",{key:1,class:m([a.$style.container,"p-4"])},[f("div",Y,[t(y,{label:"Добавить бенифициара",onClick:s[0]||(s[0]=()=>a.router.push(`/projects/${a.routes.params.projectID}/beneficiaries/create`))}),A]),t(D,{value:a.beneficiaries.data,responsiveLayout:"scroll"},{default:o(()=>[t(n,{field:"id",header:"ID"}),t(n,{header:"Наименование/ФИО"},{body:o(e=>[t(g,{to:`beneficiaries/${e.data.id}`,class:"p-link"},{default:o(()=>[i(r(e.data.data.short_name||[e.data.data.last_name,e.data.data.first_name,e.data.data.patronymic].join(" ").trim()),1)]),_:2},1032,["to"])]),_:1}),t(n,{header:"Тип"},{body:o(e=>[i(r(a.BENEFICIARY_TYPE[e.data.type]),1)]),_:1}),t(n,{header:"ИНН"},{body:o(e=>[i(r(e.data.data.inn),1)]),_:1}),t(n,{header:"ОГРН/ОГРНИП"},{body:o(e=>[i(r(e.data.data.ogrn),1)]),_:1}),t(n,{field:"status",header:"Статус"},{body:o(e=>[i(r(e.data.is_default?"По умолчанию":""),1)]),_:1})]),_:1},8,["value"]),_(` <Paginator
      :currentPage="beneficiaries.pagination?.current_page || $route.query.page || 1"
      :total="beneficiaries.pagination?.total_pages"
      :lastPage="beneficiaries.pagination?.total_pages"
      :perPage="beneficiaries.pagination?.per_page"
      :count="beneficiaries.pagination?.count"
    /> `)],2)):(l(),d("div",{key:0,class:m([[a.$style.container,a.$style.loader],"p-4"])},[t(b,{strokeWidth:"1",animationDuration:".5s"})],2))}const R={$style:V},se=w(T,[["render",M],["__cssModules",R],["__file","/var/www/inflow-auto-front-main/src/views/beneficiaries/BeneficiaryList.vue"]]);export{se as default};

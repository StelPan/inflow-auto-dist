var q=Object.defineProperty,I=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var F=(e,t,a)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))R.call(t,a)&&F(e,a,t[a]);if(k)for(var a of k(t))z.call(t,a)&&F(e,a,t[a]);return e},w=(e,t)=>I(e,M(t));import"./dayjs.min-18f6db6c.js";import{s as H}from"./button.esm-48574c78.js";import{F as O,s as W}from"./FormCalendar-db92c851.js";import{s as G,a as J,b as K}from"./datatable.esm-2cd7f014.js";import{s as Q}from"./progressspinner.esm-2138ab26.js";import{f as d,g as b,h as i,k as v,b as x,_ as j,m as g,c as n,F as X,d as Y,a as $,r as Z,o as ee,w as B,j as C,x as te,p as m,q as oe,t as u,B as S}from"./_plugin-vue_export-helper-4e0f1051.js";import{b as A,u as V}from"./vue-router-e112b3e0.js";import"./index-5ce0c5bc.js";import{F as ae}from"./FormInput-98bf5b06.js";import{c as re}from"./Numbers-ee6ad433.js";import{f as P}from"./principalDeals-5bcfc342.js";import{u as se}from"./Api-3d31057e.js";import"./ripple.esm-2bb5fa45.js";import"./overlayeventbus.esm-47a43062.js";import"./portal.esm-58de97e7.js";import"./runtime-dom.esm-bundler-b3385430.js";import"./DateTime-6dd15e58.js";import"./FormItem-904d0fd7.js";import"./api.esm-fa2395b6.js";import"./dropdown.esm-cbd0410a.js";import"./virtualscroller.esm-b423035f.js";import"./inputnumber.esm-b284c98e.js";import"./focustrap.esm-4326017e.js";import"./Cookies-c25692b0.js";import"./index.es-55ebbfbf.js";var L={name:"Toolbar",props:{"aria-labelledby":{type:String,default:null}}};const ne=["aria-labelledby"],ie={class:"p-toolbar-group-start p-toolbar-group-left"},le={class:"p-toolbar-group-center"},ue={class:"p-toolbar-group-end p-toolbar-group-right"};function de(e,t,a,s,r,p){return d(),b("div",{class:"p-toolbar p-component",role:"toolbar","aria-labelledby":e.ariaLabelledby},[i("div",ie,[v(e.$slots,"start")]),i("div",le,[v(e.$slots,"center")]),i("div",ue,[v(e.$slots,"end")])],8,ne)}function pe(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var s=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",a==="top"&&s.firstChild?s.insertBefore(r,s.firstChild):s.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var ce=`
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
.p-toolbar-group-start,
.p-toolbar-group-center,
.p-toolbar-group-end {
    display: flex;
    align-items: center;
}
.p-toolbar-group-left,
.p-toolbar-group-right {
    display: flex;
    align-items: center;
}
`;pe(ce);L.render=de;const me={components:{Paginator:G},props:{total:Number,perPage:Number},emits:["page"],setup(e){const t=A(),a=V();return{page:x(()=>a.query.page||0),setPage:p=>{const l=w(h({},a.query),{page:p.page,per_page:p.rows});t.push({name:a.name,query:l})}}}},ge=i("br",null,null,-1);function be(e,t,a,s,r,p){const l=g("Paginator",!0);return d(),b(X,null,[ge,n(l,{onPage:s.setPage,currentPage:s.page,rows:e.$props.perPage,totalRecords:e.$props.total,first:12,rowsPerPageOptions:[15,30,60]},null,8,["onPage","currentPage","rows","totalRecords"])],64)}const fe=j(me,[["render",be],["__file","/var/www/inflow-auto-front-main/src/shared/components/Paginator.vue"]]),_e=new Map([["draft","Черновик"],["negotiation","Согласование"],["begin","Сделка"],["confirmation","Верификация"],["success","Оплата"],["complete","Завершена"],["canceled","Отменена"]]),ye=new Map([["draft",{text:"text-700",bg:"surface-200"}],["negotiation",{text:"text-white",bg:"surface-500"}],["begin",{text:"text-white",bg:"bg-orange-500"}],["confirmation",{text:"text-cyan-800",bg:"bg-cyan-200"}],["success",{text:"text-700",bg:"bg-green-200"}],["complete",{text:"text-white",bg:"bg-green-500"}],["canceled",{text:"text-white",bg:"bg-red-500"}]]),he=Y({components:{ProgressSpinner:Q,DataTable:J,Column:K,Paginator:fe,FormInput:ae,Button:H,Toolbar:L,FormCalendar:O,Calendar:W},setup(){const{principalState:e}=se(),t=$(),a=x(()=>e.deals),s=$(!1),r=Z({start_date:"",end_date:""}),p=A(),l=V(),_=c=>c?[c.last_name,c.first_name,c.patronymic].join(" ").trim():"",y=$(!1);return ee(async()=>{await P(l)}),B(l,async()=>{s.value=!0,await P(l),s.value=!1}),B(r,async()=>{const c=w(h({},l.query),{page:0,start_date:r.start_date,end_date:r.end_date});p.push({name:l.name,query:c})}),{deals:a,router:p,routes:l,search:t,signerName:_,currencyFormat:re,DEAL_STATUS:_e,isLoading:s,STATUSES:ye,isFilter:y,period:r}}}),we="DealList_loader_1691548060477",ve={loader:we},$e={class:"flex justify-content-between mb-4"},Ce={class:"grid justify-content-around"},Se={class:"col-lg-12 md:col-6 sm:col-6 mb-2"},Te={class:"col-lg-12 md:col-6 sm:col-6 mb-2"},De=["src"],Ee={key:1,width:"100",viewBox:"0 0 100 100",fill:"currentColor",class:"text-200 border-round-sm",xmlns:"http://www.w3.org/2000/svg"},ke=i("rect",{x:"0",y:"0",width:"100",height:"100",rx:"0",ry:"0"},null,-1),Fe=[ke],Be={key:0,class:""},Pe={class:"text-blue-500"},xe={class:"opacity-60"},je={key:1};function Ae(e,t,a,s,r,p){var T,D;const l=g("ProgressSpinner"),_=g("Button"),y=g("Calendar"),c=g("Toolbar"),f=g("Column"),N=g("DataTable"),U=g("Paginator");return e.deals?(d(),b("div",{key:1,class:C([e.$style.container,"p-4"])},[i("div",$e,[n(_,{label:"Создать сделку",onClick:t[0]||(t[0]=()=>e.router.push(`/projects/${e.routes.params.projectID}/deals/create`))}),n(_,{outlined:"",icon:"pi pi-filter",onClick:t[1]||(t[1]=o=>e.isFilter=!e.isFilter)})]),e.isFilter?(d(),te(c,{key:0},{center:m(()=>[i("div",Ce,[i("div",Se,[n(y,{modelValue:e.period.start_date,"onUpdate:modelValue":t[2]||(t[2]=o=>e.period.start_date=o),"show-icon":!0,"date-format":"dd.mm.yy",placeholder:"Период с","show-button-bar":""},null,8,["modelValue"])]),i("div",Te,[n(y,{modelValue:e.period.end_date,"onUpdate:modelValue":t[3]||(t[3]=o=>e.period.end_date=o),"show-icon":!0,"date-format":"dd.mm.yy",placeholder:"Период с","show-button-bar":""},null,8,["modelValue"])])])]),_:1})):oe("v-if",!0),n(N,{value:e.deals.data,loading:e.isLoading,responsiveLayout:"scroll",rowHover:"",onRowClick:t[4]||(t[4]=({data:o})=>e.router.push(`/projects/${e.routes.params.projectID}/deals/${o.id}`))},{default:m(()=>[n(f,{header:"ФОТО"},{body:m(o=>{var E;return[(E=o.data.car.car_photos)!=null&&E.length?(d(),b("img",{key:0,src:o.data.car.car_photos[0].preview_url,width:"100",class:"border-round-sm"},null,8,De)):(d(),b("svg",Ee,Fe))]}),_:1}),n(f,{header:"ID\\TC"},{body:m(o=>[o.data.car.id?(d(),b("div",Be,[i("p",null,u(o.data.id),1),i("p",Pe,u(o.data.car.brand)+" "+u(o.data.car.model),1),i("p",xe,u(o.data.car.vin),1)])):(d(),b("span",je,"ТС не заполнено"))]),_:1}),n(f,{header:"Статус"},{body:m(o=>[i("p",{class:C(["inline-block border-round-md py-1 px-2 text-xs",[e.STATUSES.get(o.data.state).bg,e.STATUSES.get(o.data.state).text]])},u(e.DEAL_STATUS.get(o.data.state)),3)]),_:1}),n(f,{header:"Стоимость"},{body:m(o=>[S(u(e.currencyFormat(o.data.deal_cost||o.data.declared_cost)),1)]),_:1}),n(f,{header:"Дата и время"},{body:m(o=>[S(u(o.data.inspection_date)+" "+u(o.data.inspection_time),1)]),_:1}),n(f,{header:"Ответственный"},{body:m(o=>[S(u(o.data.phone),1)]),_:1})]),_:1},8,["value","loading"]),n(U,{total:(T=e.deals.pagination)==null?void 0:T.total,perPage:(D=e.deals.pagination)==null?void 0:D.per_page},null,8,["total","perPage"])],2)):(d(),b("div",{key:0,class:C([[e.$style.container,e.$style.loader],"p-4"])},[n(l,{strokeWidth:"1",animationDuration:".5s"})],2))}const Ve={$style:ve},lt=j(he,[["render",Ae],["__cssModules",Ve],["__file","/var/www/inflow-auto-front-main/src/views/deals/DealList.vue"]]);export{lt as default};

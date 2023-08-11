import{c as d,a as u}from"./vue-router-e112b3e0.js";import{C as h}from"./Cookies-c25692b0.js";const E="modulepreload",v=function(_){return"/"+_},p={},e=function(m,a,r){if(!a||a.length===0)return m();const c=document.getElementsByTagName("link");return Promise.all(a.map(t=>{if(t=v(t),t in p)return;p[t]=!0;const o=t.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let i=c.length-1;i>=0;i--){const s=c[i];if(s.href===t&&(!o||s.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${l}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":E,o||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),o)return new Promise((i,s)=>{n.addEventListener("load",i),n.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>m())},L=[{path:"/",name:"index",component:()=>e(()=>import("./Index-22a1dbdd.js"),["assets/Index-22a1dbdd.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js"]),meta:{access:["private"]}},{path:"/about",name:"about",component:()=>e(()=>import("./index-e11863bd.js"),["assets/index-e11863bd.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/principalBeneficiary-ce279450.js","assets/Api-3d31057e.js","assets/Cookies-c25692b0.js","assets/progressspinner.esm-2138ab26.js","assets/index-debbf69e.css"]),meta:{access:["private"],layout:"ProjectsLayout"}},{path:"/login",name:"login",component:()=>e(()=>import("./SignIn-f35011c5.js"),["assets/SignIn-f35011c5.js","assets/button.esm-48574c78.js","assets/ripple.esm-2bb5fa45.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/SmsCode-0f44746a.js","assets/Api-3d31057e.js","assets/Cookies-c25692b0.js","assets/index.es-55ebbfbf.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/principalSetUser-1de61370.js","assets/FormInput-a7191b54.js","assets/inputnumber.esm-b284c98e.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormInput-e77abc3b.css","assets/SmsCode-ff12152c.css","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css","assets/vue-router-e112b3e0.js","assets/SignIn-92e935d8.css"]),meta:{access:["public"],layout:"AuthLayout"}},{path:"/register",name:"register",component:()=>e(()=>import("./SignUp-0d2d66d0.js"),["assets/SignUp-0d2d66d0.js","assets/button.esm-48574c78.js","assets/ripple.esm-2bb5fa45.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/SmsCode-0f44746a.js","assets/Api-3d31057e.js","assets/Cookies-c25692b0.js","assets/index.es-55ebbfbf.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/principalSetUser-1de61370.js","assets/FormInput-a7191b54.js","assets/inputnumber.esm-b284c98e.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormInput-e77abc3b.css","assets/SmsCode-ff12152c.css","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css","assets/vue-router-e112b3e0.js","assets/SignUp-f8fca35c.css"]),meta:{access:["public"],layout:"AuthLayout"}},{path:"/projects",meta:{access:["private"],layout:"ProjectsLayout"},children:[{path:"",name:"projects",component:()=>e(()=>import("./ProjectList-468581e6.js"),["assets/ProjectList-468581e6.js","assets/progressspinner.esm-2138ab26.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/principalCompanies-2dd56fc9.js","assets/Api-3d31057e.js","assets/Cookies-c25692b0.js","assets/card.esm-90d7995a.js","assets/ProjectList-37f16aa2.css"])},{path:"add",name:"projects/add",component:()=>e(()=>import("./AddProject-f2e5936e.js"),["assets/AddProject-f2e5936e.js","assets/badge.esm-cbb8631f.js","assets/ripple.esm-2bb5fa45.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/button.esm-48574c78.js","assets/card.esm-90d7995a.js","assets/selectbutton.esm-faf378bc.js","assets/FormInput-a7191b54.js","assets/inputnumber.esm-b284c98e.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormInput-e77abc3b.css","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css","assets/beneficiaryType-0f5d6dda.js","assets/principalCompanies-2dd56fc9.js","assets/Api-3d31057e.js","assets/Cookies-c25692b0.js","assets/ProjectUL-a28d82f0.js","assets/checkbox.esm-31a5a5c8.js","assets/BankDetails-6c6724e4.js","assets/FormCalendar-d05343bb.js","assets/dayjs.min-18f6db6c.js","assets/overlayeventbus.esm-47a43062.js","assets/portal.esm-58de97e7.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/DateTime-6dd15e58.js","assets/FormCalendar-1bf8d3ec.css","assets/FormSelect-4394b979.js","assets/dropdown.esm-cbd0410a.js","assets/api.esm-fa2395b6.js","assets/virtualscroller.esm-b423035f.js","assets/multiselect.esm-38716bbc.js","assets/FormSelect-734016d1.css","assets/AddressShorAlt-dc66e97a.js","assets/FormCheckbox-4e6c5f6d.js","assets/FormCheckbox-5191ffb6.css","assets/vue-router-e112b3e0.js","assets/AddProject-1a10feb0.css"])},{path:":projectID",name:"projects/project",meta:{layout:"ProjectLayout"},children:[{path:"deals",meta:{access:["private"]},children:[{path:"",name:"deals",component:()=>e(()=>import("./DealList-54eff9fa.js"),["assets/DealList-54eff9fa.js","assets/dayjs.min-18f6db6c.js","assets/button.esm-48574c78.js","assets/ripple.esm-2bb5fa45.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/FormCalendar-d05343bb.js","assets/overlayeventbus.esm-47a43062.js","assets/portal.esm-58de97e7.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/DateTime-6dd15e58.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormCalendar-1bf8d3ec.css","assets/datatable.esm-2cd7f014.js","assets/api.esm-fa2395b6.js","assets/dropdown.esm-cbd0410a.js","assets/virtualscroller.esm-b423035f.js","assets/inputnumber.esm-b284c98e.js","assets/focustrap.esm-4326017e.js","assets/progressspinner.esm-2138ab26.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/FormInput-a7191b54.js","assets/FormInput-e77abc3b.css","assets/Numbers-ee6ad433.js","assets/principalDeals-5bcfc342.js","assets/index.es-55ebbfbf.js","assets/Api-3d31057e.js","assets/DealList-94cfd10a.css"])},{path:":dealID",children:[{path:"",name:"deals/deal",component:()=>e(()=>import("./DealMain-d4f2f587.js"),["assets/DealMain-d4f2f587.js","assets/badge.esm-cbb8631f.js","assets/ripple.esm-2bb5fa45.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/progressspinner.esm-2138ab26.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/Numbers-ee6ad433.js","assets/principalDeals-5bcfc342.js","assets/index.es-55ebbfbf.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/dayjs.min-18f6db6c.js","assets/Api-3d31057e.js","assets/DateTime-6dd15e58.js","assets/button.esm-48574c78.js","assets/inputswitch.esm-79249e3b.js","assets/card.esm-90d7995a.js","assets/focustrap.esm-4326017e.js","assets/portal.esm-58de97e7.js","assets/FormInput-a7191b54.js","assets/inputnumber.esm-b284c98e.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormInput-e77abc3b.css","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css","assets/FormCheckbox-4e6c5f6d.js","assets/checkbox.esm-31a5a5c8.js","assets/FormCheckbox-5191ffb6.css","assets/DealMain-15ce1048.css"])},{path:"ts",name:"deals/deal/ts",component:()=>e(()=>import("./DealTS-b215bbd6.js"),["assets/DealTS-b215bbd6.js","assets/card.esm-90d7995a.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/FormCalendar-d05343bb.js","assets/dayjs.min-18f6db6c.js","assets/button.esm-48574c78.js","assets/ripple.esm-2bb5fa45.js","assets/overlayeventbus.esm-47a43062.js","assets/portal.esm-58de97e7.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/DateTime-6dd15e58.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormCalendar-1bf8d3ec.css","assets/FormCheckbox-4e6c5f6d.js","assets/checkbox.esm-31a5a5c8.js","assets/FormCheckbox-5191ffb6.css","assets/FormSelect-4394b979.js","assets/dropdown.esm-cbd0410a.js","assets/api.esm-fa2395b6.js","assets/virtualscroller.esm-b423035f.js","assets/multiselect.esm-38716bbc.js","assets/FormSelect-734016d1.css","assets/FormInput-a7191b54.js","assets/inputnumber.esm-b284c98e.js","assets/FormInput-e77abc3b.css","assets/principalDeals-5bcfc342.js","assets/index.es-55ebbfbf.js","assets/Api-3d31057e.js","assets/Wrap-35d78bea.js","assets/progressspinner.esm-2138ab26.js","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css"])},{path:"owner-ts",name:"deals/deal/owner-ts",component:()=>e(()=>import("./DealOwnerTS-29f0552c.js"),["assets/DealOwnerTS-29f0552c.js","assets/selectbutton.esm-faf378bc.js","assets/ripple.esm-2bb5fa45.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/beneficiaryType-0f5d6dda.js","assets/principalDeals-5bcfc342.js","assets/index.es-55ebbfbf.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/dayjs.min-18f6db6c.js","assets/Api-3d31057e.js","assets/DateTime-6dd15e58.js","assets/Wrap-35d78bea.js","assets/button.esm-48574c78.js","assets/progressspinner.esm-2138ab26.js","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css","assets/card.esm-90d7995a.js","assets/FormCalendar-d05343bb.js","assets/overlayeventbus.esm-47a43062.js","assets/portal.esm-58de97e7.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormCalendar-1bf8d3ec.css","assets/FormCheckbox-4e6c5f6d.js","assets/checkbox.esm-31a5a5c8.js","assets/FormCheckbox-5191ffb6.css","assets/FormInput-a7191b54.js","assets/inputnumber.esm-b284c98e.js","assets/FormInput-e77abc3b.css","assets/AddressShorAlt-dc66e97a.js","assets/FormSelect-4394b979.js","assets/dropdown.esm-cbd0410a.js","assets/api.esm-fa2395b6.js","assets/virtualscroller.esm-b423035f.js","assets/multiselect.esm-38716bbc.js","assets/FormSelect-734016d1.css","assets/DealOwnerTS-cd52e164.css"])},{path:"signatory",name:"deals/deal/signatory",component:()=>e(()=>import("./DealSignatory-f091a471.js"),["assets/DealSignatory-f091a471.js","assets/card.esm-90d7995a.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/FormCalendar-d05343bb.js","assets/dayjs.min-18f6db6c.js","assets/button.esm-48574c78.js","assets/ripple.esm-2bb5fa45.js","assets/overlayeventbus.esm-47a43062.js","assets/portal.esm-58de97e7.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/DateTime-6dd15e58.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormCalendar-1bf8d3ec.css","assets/FormInput-a7191b54.js","assets/inputnumber.esm-b284c98e.js","assets/FormInput-e77abc3b.css","assets/AddressShorAlt-dc66e97a.js","assets/checkbox.esm-31a5a5c8.js","assets/principalDeals-5bcfc342.js","assets/index.es-55ebbfbf.js","assets/Api-3d31057e.js","assets/Wrap-35d78bea.js","assets/progressspinner.esm-2138ab26.js","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css"])},{path:"docs",name:"deals/deal/docs",component:()=>e(()=>import("./DealDocs-064f4fbb.js"),["assets/DealDocs-064f4fbb.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/DocInfo-cf2bf3f4.js","assets/DocInfo-defa3699.css","assets/principalDeals-5bcfc342.js","assets/index.es-55ebbfbf.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/dayjs.min-18f6db6c.js","assets/Api-3d31057e.js","assets/DateTime-6dd15e58.js","assets/Wrap-35d78bea.js","assets/button.esm-48574c78.js","assets/ripple.esm-2bb5fa45.js","assets/progressspinner.esm-2138ab26.js","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css"])},{path:"photos",name:"deals/deal/photos",component:()=>e(()=>import("./DealPhotos-338dadbd.js"),["assets/DealPhotos-338dadbd.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/DocInfo-cf2bf3f4.js","assets/DocInfo-defa3699.css","assets/principalDeals-5bcfc342.js","assets/index.es-55ebbfbf.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/dayjs.min-18f6db6c.js","assets/Api-3d31057e.js","assets/DateTime-6dd15e58.js","assets/Wrap-35d78bea.js","assets/button.esm-48574c78.js","assets/ripple.esm-2bb5fa45.js","assets/progressspinner.esm-2138ab26.js","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css"])},{path:"date-and-time",name:"deals/deal/date-and-time",component:()=>e(()=>import("./DealDaT-748b8764.js"),["assets/DealDaT-748b8764.js","assets/card.esm-90d7995a.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/FormCalendar-d05343bb.js","assets/dayjs.min-18f6db6c.js","assets/button.esm-48574c78.js","assets/ripple.esm-2bb5fa45.js","assets/overlayeventbus.esm-47a43062.js","assets/portal.esm-58de97e7.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/DateTime-6dd15e58.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormCalendar-1bf8d3ec.css","assets/principalDeals-5bcfc342.js","assets/index.es-55ebbfbf.js","assets/Api-3d31057e.js","assets/Wrap-35d78bea.js","assets/progressspinner.esm-2138ab26.js","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css"])},{path:"place-of-transaction",name:"deals/deal/place-of-transaction",component:()=>e(()=>import("./DealAddress-1625a6ed.js"),["assets/DealAddress-1625a6ed.js","assets/card.esm-90d7995a.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/FormInput-a7191b54.js","assets/ripple.esm-2bb5fa45.js","assets/inputnumber.esm-b284c98e.js","assets/button.esm-48574c78.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormInput-e77abc3b.css","assets/principalDeals-5bcfc342.js","assets/index.es-55ebbfbf.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/dayjs.min-18f6db6c.js","assets/Api-3d31057e.js","assets/DateTime-6dd15e58.js","assets/Wrap-35d78bea.js","assets/progressspinner.esm-2138ab26.js","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css"])},{path:"cost",name:"deals/deal/cost",component:()=>e(()=>import("./DealCost-e713711b.js"),["assets/DealCost-e713711b.js","assets/card.esm-90d7995a.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/FormInput-a7191b54.js","assets/ripple.esm-2bb5fa45.js","assets/inputnumber.esm-b284c98e.js","assets/button.esm-48574c78.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormInput-e77abc3b.css","assets/principalDeals-5bcfc342.js","assets/index.es-55ebbfbf.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/dayjs.min-18f6db6c.js","assets/Api-3d31057e.js","assets/DateTime-6dd15e58.js","assets/Wrap-35d78bea.js","assets/progressspinner.esm-2138ab26.js","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css"])},{path:"declared-cost",name:"deals/deal/declaredCost",component:()=>e(()=>import("./DealDeclaredCost-4bde5fe0.js"),["assets/DealDeclaredCost-4bde5fe0.js","assets/card.esm-90d7995a.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/FormInput-a7191b54.js","assets/ripple.esm-2bb5fa45.js","assets/inputnumber.esm-b284c98e.js","assets/button.esm-48574c78.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormInput-e77abc3b.css","assets/principalDeals-5bcfc342.js","assets/index.es-55ebbfbf.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/dayjs.min-18f6db6c.js","assets/Api-3d31057e.js","assets/DateTime-6dd15e58.js","assets/Wrap-35d78bea.js","assets/progressspinner.esm-2138ab26.js","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css"])},{path:"comment",name:"deals/deal/comment",component:()=>e(()=>import("./DealComment-ddf7d8d4.js"),["assets/DealComment-ddf7d8d4.js","assets/card.esm-90d7995a.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/FormInput-a7191b54.js","assets/ripple.esm-2bb5fa45.js","assets/inputnumber.esm-b284c98e.js","assets/button.esm-48574c78.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormInput-e77abc3b.css","assets/principalDeals-5bcfc342.js","assets/index.es-55ebbfbf.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/dayjs.min-18f6db6c.js","assets/Api-3d31057e.js","assets/DateTime-6dd15e58.js","assets/Wrap-35d78bea.js","assets/progressspinner.esm-2138ab26.js","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css"])},{path:"agrement",name:"deals/deal/agrement",component:()=>e(()=>import("./DealAgrement-f36e4787.js"),["assets/DealAgrement-f36e4787.js","assets/button.esm-48574c78.js","assets/ripple.esm-2bb5fa45.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/card.esm-90d7995a.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/FormCalendar-d05343bb.js","assets/dayjs.min-18f6db6c.js","assets/overlayeventbus.esm-47a43062.js","assets/portal.esm-58de97e7.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/DateTime-6dd15e58.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormCalendar-1bf8d3ec.css","assets/principalDeals-5bcfc342.js","assets/index.es-55ebbfbf.js","assets/Api-3d31057e.js","assets/Wrap-35d78bea.js","assets/progressspinner.esm-2138ab26.js","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css","assets/DealAgrement-5907c294.css"])},{path:"dkp",name:"deals/deal/dkp",component:()=>e(()=>import("./DealDKP-278d4283.js"),["assets/DealDKP-278d4283.js","assets/button.esm-48574c78.js","assets/ripple.esm-2bb5fa45.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/card.esm-90d7995a.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/FormCalendar-d05343bb.js","assets/dayjs.min-18f6db6c.js","assets/overlayeventbus.esm-47a43062.js","assets/portal.esm-58de97e7.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/DateTime-6dd15e58.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormCalendar-1bf8d3ec.css","assets/FormInput-a7191b54.js","assets/inputnumber.esm-b284c98e.js","assets/FormInput-e77abc3b.css","assets/principalDeals-5bcfc342.js","assets/index.es-55ebbfbf.js","assets/Api-3d31057e.js","assets/Wrap-35d78bea.js","assets/progressspinner.esm-2138ab26.js","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css","assets/DealDKP-1da992a5.css"])},{path:"seller-account",name:"deals/deal/sellerAccount",component:()=>e(()=>import("./DealSellerAccount-026a75e7.js"),["assets/DealSellerAccount-026a75e7.js","assets/card.esm-90d7995a.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/FormInput-a7191b54.js","assets/ripple.esm-2bb5fa45.js","assets/inputnumber.esm-b284c98e.js","assets/button.esm-48574c78.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormInput-e77abc3b.css","assets/BankDetails-6c6724e4.js","assets/principalDeals-5bcfc342.js","assets/index.es-55ebbfbf.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/dayjs.min-18f6db6c.js","assets/Api-3d31057e.js","assets/DateTime-6dd15e58.js","assets/Wrap-35d78bea.js","assets/progressspinner.esm-2138ab26.js","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css"])},{path:"act",name:"deals/deal/act",component:()=>e(()=>import("./DealAct-2af4ea0e.js"),["assets/DealAct-2af4ea0e.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/card.esm-90d7995a.js","assets/FormInput-a7191b54.js","assets/ripple.esm-2bb5fa45.js","assets/inputnumber.esm-b284c98e.js","assets/button.esm-48574c78.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormInput-e77abc3b.css","assets/DocInfo-cf2bf3f4.js","assets/DocInfo-defa3699.css","assets/FormCalendar-d05343bb.js","assets/dayjs.min-18f6db6c.js","assets/overlayeventbus.esm-47a43062.js","assets/portal.esm-58de97e7.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/DateTime-6dd15e58.js","assets/FormCalendar-1bf8d3ec.css","assets/principalDeals-5bcfc342.js","assets/index.es-55ebbfbf.js","assets/Api-3d31057e.js","assets/Wrap-35d78bea.js","assets/progressspinner.esm-2138ab26.js","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css"])}]}]},{path:"clients",meta:{access:["private"]},children:[{path:"",name:"clients",component:()=>e(()=>import("./ClientList-ba4d0fe0.js"),["assets/ClientList-ba4d0fe0.js","assets/button.esm-48574c78.js","assets/ripple.esm-2bb5fa45.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/datatable.esm-2cd7f014.js","assets/api.esm-fa2395b6.js","assets/dropdown.esm-cbd0410a.js","assets/overlayeventbus.esm-47a43062.js","assets/portal.esm-58de97e7.js","assets/virtualscroller.esm-b423035f.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/inputnumber.esm-b284c98e.js","assets/focustrap.esm-4326017e.js","assets/progressspinner.esm-2138ab26.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/FormInput-a7191b54.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormInput-e77abc3b.css","assets/principalClients-e656c28c.js","assets/Api-3d31057e.js","assets/ClientList-0f534e98.css"])},{path:":clientID",name:"clients/client",component:()=>e(()=>import("./ClientDetail-d4cb5d70.js"),["assets/ClientDetail-d4cb5d70.js","assets/button.esm-48574c78.js","assets/ripple.esm-2bb5fa45.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/card.esm-90d7995a.js","assets/progressspinner.esm-2138ab26.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/FormInput-a7191b54.js","assets/inputnumber.esm-b284c98e.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormInput-e77abc3b.css","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css","assets/principalClients-e656c28c.js","assets/Api-3d31057e.js","assets/ClientDetail-d1c0dfae.css"])}]},{path:"vehicles",meta:{access:["private"]},children:[{path:"",name:"vehicles",component:()=>e(()=>import("./VehicleList-f58ad81d.js"),["assets/VehicleList-f58ad81d.js","assets/_plugin-vue_export-helper-4e0f1051.js"])}]},{path:"finance",meta:{access:["private"]},children:[{path:"",name:"finance",component:()=>e(()=>import("./FinanceList-79b81c09.js"),["assets/FinanceList-79b81c09.js","assets/_plugin-vue_export-helper-4e0f1051.js"])}]},{path:"employees",meta:{access:["private"]},children:[{path:"",name:"employees",component:()=>e(()=>import("./EmployeeList-0c3b9e57.js"),["assets/EmployeeList-0c3b9e57.js","assets/button.esm-48574c78.js","assets/ripple.esm-2bb5fa45.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/datatable.esm-2cd7f014.js","assets/api.esm-fa2395b6.js","assets/dropdown.esm-cbd0410a.js","assets/overlayeventbus.esm-47a43062.js","assets/portal.esm-58de97e7.js","assets/virtualscroller.esm-b423035f.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/inputnumber.esm-b284c98e.js","assets/focustrap.esm-4326017e.js","assets/progressspinner.esm-2138ab26.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/FormInput-a7191b54.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormInput-e77abc3b.css","assets/principalEmployees-1c0a89a9.js","assets/Api-3d31057e.js","assets/EmployeeList-9c9e2c2f.css"])},{path:":employeeID",name:"employees/employee",component:()=>e(()=>import("./EmployeeDetail-554377d7.js"),["assets/EmployeeDetail-554377d7.js","assets/button.esm-48574c78.js","assets/ripple.esm-2bb5fa45.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/card.esm-90d7995a.js","assets/multiselect.esm-38716bbc.js","assets/api.esm-fa2395b6.js","assets/overlayeventbus.esm-47a43062.js","assets/portal.esm-58de97e7.js","assets/virtualscroller.esm-b423035f.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/progressspinner.esm-2138ab26.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/FormInput-a7191b54.js","assets/inputnumber.esm-b284c98e.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormInput-e77abc3b.css","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css","assets/principalEmployees-1c0a89a9.js","assets/Api-3d31057e.js","assets/EmployeeDetail-da7822fe.css"])}]},{path:"beneficiaries",meta:{access:["private"]},children:[{path:"",name:"beneficiaries",component:()=>e(()=>import("./BeneficiaryList-2c2d7191.js"),["assets/BeneficiaryList-2c2d7191.js","assets/button.esm-48574c78.js","assets/ripple.esm-2bb5fa45.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/datatable.esm-2cd7f014.js","assets/api.esm-fa2395b6.js","assets/dropdown.esm-cbd0410a.js","assets/overlayeventbus.esm-47a43062.js","assets/portal.esm-58de97e7.js","assets/virtualscroller.esm-b423035f.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/inputnumber.esm-b284c98e.js","assets/focustrap.esm-4326017e.js","assets/progressspinner.esm-2138ab26.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/beneficiaryType-0f5d6dda.js","assets/principalBeneficiary-ce279450.js","assets/Api-3d31057e.js","assets/BeneficiaryList-4c897b95.css"])},{path:":beneficiaryID",name:"beneficiaries/beneficiary",component:()=>e(()=>import("./Beneficiary-93f90131.js"),["assets/Beneficiary-93f90131.js","assets/badge.esm-cbb8631f.js","assets/ripple.esm-2bb5fa45.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/button.esm-48574c78.js","assets/checkbox.esm-31a5a5c8.js","assets/progressspinner.esm-2138ab26.js","assets/selectbutton.esm-faf378bc.js","assets/vue-router-e112b3e0.js","assets/Cookies-c25692b0.js","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css","assets/beneficiaryType-0f5d6dda.js","assets/principalBeneficiary-ce279450.js","assets/Api-3d31057e.js","assets/ProjectUL-a28d82f0.js","assets/card.esm-90d7995a.js","assets/BankDetails-6c6724e4.js","assets/FormInput-a7191b54.js","assets/inputnumber.esm-b284c98e.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormInput-e77abc3b.css","assets/FormCalendar-d05343bb.js","assets/dayjs.min-18f6db6c.js","assets/overlayeventbus.esm-47a43062.js","assets/portal.esm-58de97e7.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/DateTime-6dd15e58.js","assets/FormCalendar-1bf8d3ec.css","assets/FormSelect-4394b979.js","assets/dropdown.esm-cbd0410a.js","assets/api.esm-fa2395b6.js","assets/virtualscroller.esm-b423035f.js","assets/multiselect.esm-38716bbc.js","assets/FormSelect-734016d1.css","assets/AddressShorAlt-dc66e97a.js","assets/FormCheckbox-4e6c5f6d.js","assets/FormCheckbox-5191ffb6.css","assets/Beneficiary-ca234e81.css"])}]},{path:"settings",meta:{access:["private"]},children:[{path:"",name:"settings",component:()=>e(()=>import("./SettingList-baf39ef3.js"),["assets/SettingList-baf39ef3.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/inputswitch.esm-79249e3b.js","assets/FormCalendar-d05343bb.js","assets/dayjs.min-18f6db6c.js","assets/button.esm-48574c78.js","assets/ripple.esm-2bb5fa45.js","assets/overlayeventbus.esm-47a43062.js","assets/portal.esm-58de97e7.js","assets/runtime-dom.esm-bundler-b3385430.js","assets/DateTime-6dd15e58.js","assets/FormItem-83c2c2c1.js","assets/FormItem-224cc309.css","assets/FormCalendar-1bf8d3ec.css","assets/FormLayout-5c19cd5a.js","assets/FormLayout-a0314adb.css","assets/Api-3d31057e.js","assets/Cookies-c25692b0.js","assets/vue-router-e112b3e0.js","assets/SettingList-7aa95867.css"])}]}]}]},{path:"/:pathMatch(.*)*",component:()=>e(()=>import("./NotFound-4868fe4f.js"),["assets/NotFound-4868fe4f.js","assets/_plugin-vue_export-helper-4e0f1051.js","assets/NotFound-96d0a159.css"]),meta:{layout:"ProjectsLayout"}}],P=d({history:u("/"),routes:L});P.beforeEach((_,m,a)=>{let r=_.meta.access;r||(r=[]);const c=r.indexOf("private")!=-1,t=r.indexOf("public")!=-1,o=h.get("token");if(c&&!o){a("/login");return}else if(t&&o){a("/projects");return}else a()});export{P as r};

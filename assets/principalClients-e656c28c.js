import{A as e,u as o}from"./Api-3d31057e.js";async function r(t){try{const s=await e.get(`companies/${t}/customers`),{principalStore:a}=o();a.dispatch(async n=>{n.clients={data:s.data.data||[],isLoading:!1,pagination:s.data.pagination}})}catch(s){console.log("error",s)}}async function i(t){try{const s=await e.get(`customers/${t}`),{principalStore:a}=o();a.dispatch(async n=>{n.client={data:s.data||{},isLoading:!1}})}catch(s){console.log("error",s)}}async function p(t,s){return await e.post(`customers/${t}`,s)}async function l(t){return await e.post("customers",t)}export{i as a,l as c,r as f,p as u};

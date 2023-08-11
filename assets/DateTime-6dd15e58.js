function e(r){if(!r)return null;try{return new Date(r).toISOString()}catch(t){if(!r)return r;const n=r.split(".");return n.length===3?`${n[2]}-${n[1]}-${n[0]}`:r}}export{e as r};

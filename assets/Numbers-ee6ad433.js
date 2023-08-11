const n=(r,c="ru-RU",e={style:"currency",currency:"RUB"})=>{const t=Number(r);return!t&&t!==0?"":new Intl.NumberFormat(c,e).format(r)};export{n as c};

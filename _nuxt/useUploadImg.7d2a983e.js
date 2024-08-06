import{u as p}from"./fetch.6d0ababc.js";import{i as w,j as d,k as v}from"./works.8b9c14c6.js";import{u as y}from"./users.810791e2.js";import{l as g}from"./loading.acca26de.js";import{r as c}from"./entry.950a9e27.js";const l=e=>({"image/png":"png","image/jpeg":"jpeg"})[e],f=3,m=c([]),_=c(null),h=async(e,r,a)=>{const{error:t}=await p(e,{method:"put",headers:{"Content-Type":`image/${r}`,"Content-Encoding":"base64"},body:a},"$dKY3K3XDBp");return{error:t}},u=async(e,r,a)=>{const{error:t}=await h(e,r,a);if(t.value)throw t.value=null,new Error("上傳失敗。")},A=g(async(e,r)=>{var a;for(const t of r){const{data:s,error:o}=await d(e,{image_size:t.image_size,image_type:t.image_type,is_cover:t.is_cover});if(!s.value)throw o.value=null,new Error("上傳失敗。");await u((a=s.value)==null?void 0:a.upload_url,t.image_type,t.files)}r.length=0}),D=g(async(e,r)=>{const{error:a}=await w(e,r);if(a.value)throw a.value=null,new Error("設定失敗。")}),P=g(async(e,r)=>{const{error:a}=await v(e,r);if(a.value)throw a.value=null,new Error("刪除失敗。")}),z=e=>new Promise((r,a)=>{const t=new FileReader;t.addEventListener("load",s=>{var n;const o=new Image;o.src=((n=s.target.result)==null?void 0:n.toString())||"",o.onload=()=>{if(Number(o.width)===1200&&Number(o.height)===628)if(m.value.length+1>3)a(new Error("圖片最多只能上傳3張。"));else{const i=s.target.result.split(",")[1];r({name:e.name,image_size:new Blob([e]).size,image_type:l(e.type),files:e,image:i,is_cover:!0})}else return a(new Error("圖片尺寸限制於固定尺寸寬 1200px、高 628px"))}}),t.onerror=()=>a(new Error("讀取圖片時出現錯誤。")),t.readAsDataURL(e)}),R=g(async e=>{const r=e.target;if(!r.files)return;const a=r.files[0];if(!l(a.type)){alert("圖片格式限制於 png、jpg、jpeg。");return}const s=a.size,o=1024*(1024*f);if(s<o){m.value.forEach(i=>{i.is_cover=!1});const n=await z(a);n&&m.value.push(n)}else alert("圖片不得大於 3 MB")}),E=g(e=>new Promise((r,a)=>{const t=new FileReader;t.addEventListener("load",s=>{var n;const o=new Image;o.src=((n=s.target.result)==null?void 0:n.toString())||"",o.onload=()=>{const i=s.target.result.split(",")[1];r({name:e.name,image_size:new Blob([e]).size,image_type:l(e.type),files:e,image:i,is_cover:!0})}}),t.onerror=()=>{a(new Error("讀取圖片時出現錯誤。"))},t.readAsDataURL(e)})),S=g(async(e,r)=>{const a=e.target;if(!a.files)return;const t=a.files[0];if(!l(t.type)){alert("圖片格式限制於 png、jpg、jpeg。");return}const o=t.size,n=1024*(1024*r);if(o<n){const i=await E(t);_.value=i}else alert("圖片不得大於 1 MB")}),j=g(async e=>{const{data:r,error:a}=await y({image_size:e.image_size,image_type:e.image_type});if(a.value)throw a.value=null,new Error("上傳失敗。");const{upload_url:t}=r.value;await u(t,e.image_type,e.files)});export{_ as a,A as b,R as c,P as d,m as i,S as r,D as s,j as u};

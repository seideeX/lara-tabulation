import{K as h,r as o,j as e,L as g}from"./app-BGxXO5cX.js";import{A as b}from"./AuthenticatedLayout-Ngcburu3.js";import{u as f,C as j,T as y,A as N,a as D,b as A,c as C,d as w,e as S,f as F,g as v,t as O}from"./sonner-CSUqfN9V.js";import"./breadcrumb-v2eJKgEQ.js";import"./index-Cr3EvBPU.js";import"./button-CDnHywMM.js";import"./input-CdDKWY0W.js";function k({scores:l}){const n=[1,2,3,4,5,6,7,8,9,10],{register:i,handleSubmit:c}=f(),d=h().props.auth.user,[m,a]=o.useState(!1),[r,x]=o.useState(null),p=t=>{const s={...t,category_id:8,user_id:d.id,percentage:20};x(s),a(!0)},u=async()=>{var t;if(r)try{const s=await axios.post("https://piton.chaelx.online/api/storeproduction",r);console.log("Server Response:",s.data),O("Score has been submitted successfully!"),window.location.reload()}catch(s){console.error("Error submitting data:",((t=s.response)==null?void 0:t.data)||s.message),alert("Failed to submit data.")}finally{a(!1)}};return e.jsxs(b,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Queen San Vicente 2025 Grand Coronation Night"}),children:[e.jsx(g,{title:"Dashboard"}),e.jsx("div",{className:"flex justify-center items-center my-16 px-6",children:e.jsxs("div",{className:"p-10 bg-gray-100 rounded-xl border border-gray-600 shadow-lg w-full max-w-4xl text-center",children:[e.jsx("p",{className:"text-3xl font-semibold mb-6",children:"Question and Answer 20%"}),e.jsx("form",{onSubmit:c(p),children:e.jsx(j,{contestants:n,register:i,candidate_scores:l})})]})}),e.jsx(y,{}),e.jsx(N,{open:m,onOpenChange:a,children:e.jsxs(D,{className:"max-w-2xl p-6",children:[" ",e.jsxs(A,{children:[e.jsx(C,{className:"text-2xl font-bold",children:"Confirm Submission"})," ",e.jsxs(w,{className:"text-lg",children:[e.jsx("p",{className:"mb-4",children:"Are you sure you want to submit these scores?"}),e.jsxs("ul",{className:"mt-2 text-left text-lg text-gray-800 space-y-2",children:[" ",r&&Object.entries(r).slice(0,-3).map(([t,s])=>e.jsxs("li",{className:"border-b pb-2",children:[e.jsxs("strong",{className:"capitalize text-xl",children:["Candidate No."," ",parseInt(t.split("-").pop())+1,":"]}),e.jsx("span",{className:"ml-5 font-semibold text-2xl",children:s})]},t))]})]})]}),e.jsxs(S,{className:"mt-6",children:[e.jsx(F,{onClick:()=>a(!1),className:"px-6 py-2 text-lg",children:"Cancel"}),e.jsx(v,{onClick:u,className:"px-6 py-2 text-lg bg-blue-600 hover:bg-blue-700 text-white",children:"Confirm"})]})]})})]})}export{k as default};

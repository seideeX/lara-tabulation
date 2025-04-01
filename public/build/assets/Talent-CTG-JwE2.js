import{r as p,j as e,L as f}from"./app-DMIFOAuK.js";import{A as h}from"./useAppUrl-CkhyY3ND.js";import{u as j,l as u,J as g}from"./JudgeSignature-RV3DDXIg.js";import{A as N}from"./AuthenticatedLayoutAdmin-DTRGw1GB.js";import{B as k}from"./button-BstGHLmS.js";import{C as y}from"./ClipLoader-D5-J5Qow.js";import"./breadcrumb-ChKeHn-6.js";import"./index-CBX50caO.js";import"./input-DMa8iIzV.js";const P=()=>{var c,o,n;const{data:s,error:w,isLoading:i}=j(["candidatec6"],"talent_ranking");console.log(s);const a=((o=(c=s==null?void 0:s.candidates)==null?void 0:c[0])!=null&&o.scores_per_judge?Object.entries(s.candidates[0].scores_per_judge):[]).map(([t,r])=>({id:t,name:r.judge_name})).sort((t,r)=>t.id-r.id),l=p.useRef(),m=u.useReactToPrint({contentRef:l});return e.jsxs(N,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Talent"}),children:[e.jsx(f,{title:"Talent"}),e.jsxs("div",{children:[e.jsx("div",{className:"flex justify-end m-2",children:e.jsxs(k,{onClick:()=>m(),children:[e.jsx(h,{}),"Print"]})}),e.jsxs("div",{ref:l,className:"py-2 px-4 bg-white ",children:[e.jsx("div",{className:"overflow-x-auto rounded-sm border border-black",children:e.jsxs("table",{className:"min-w-[800px] w-full bg-[#ffff99]",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsxs("th",{colSpan:12,className:"pt-3 pb-2 text-center text-yellow-200 font-light bg-gray-800 border-b border-black font-lobster",children:[e.jsx("span",{className:"text-4xl",children:"Queen San Vicente 2025"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"text-2xl ",children:"Grand Coronation Night"})]})})}),e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{colSpan:12,className:"px-4 pt-4 text-center text-black text-xl font-light bg-white border-b border-black",children:"Talent 15%"})})}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-nowrap w-[10%] bg-[#ffff99] px-4 pt-6  text-left  text-black text-custom-sm font-bold border-b border-black",children:"Candidate No."}),a.map(t=>e.jsx("th",{className:" text-nowrap bg-[#ffff99] px-4 pt-6 text-left  text-black text-custom-sm font-bold  border-b border-black",children:t.name},t.id)),e.jsx("th",{className:"text-nowrap bg-[#ffff99] px-4 pt-6 text-left  text-black text-custom-sm font-bold  border-b border-black",children:"Total"}),e.jsx("th",{className:"text-nowrap bg-[#ffff99] px-4 pt-6 text-left  text-black text-custom-sm font-bold  border-b border-black",children:"Average"}),e.jsx("th",{className:"text-nowrap bg-[#ffff99] px-4 pt-6 text-left  text-black text-custom-sm font-bold  border-b border-black",children:"Rank"})]})}),e.jsxs("tbody",{children:[i&&e.jsx("tr",{children:e.jsxs("td",{colSpan:11,className:"text-center py-4",children:[e.jsx(y,{}),e.jsx("p",{children:"Fetching data..."})]})}),(n=s==null?void 0:s.candidates)==null?void 0:n.map(t=>e.jsxs("tr",{className:"border-b border-black last:border-b-0",children:[e.jsx("td",{className:"px-4 py-2 text-black text-custom-sm font-medium",children:t.candidate_number}),a.map(r=>{var d,x;const b=(x=(d=t.scores_per_judge[r.id])==null?void 0:d.scores)==null?void 0:x[0];return e.jsx("td",{className:"px-4 py-2 text-black text-custom-sm font-medium",children:b??"-"},r.id)}),e.jsx("td",{className:"px-4 py-2 text-black text-custom-sm font-medium",children:t.total_score}),e.jsx("td",{className:"px-4 py-2 text-black text-custom-sm font-medium",children:Number(t.average_score).toFixed(2)}),e.jsx("td",{className:"px-4 py-2 text-black text-md font-semibold",children:t.rank})]},t.candidate_id))]})]})}),e.jsx("div",{className:"mt-16",children:e.jsx(g,{})})]})]})]})};export{P as default};

import{m as d,j as s,L as p}from"./app-Dj1WCjEV.js";import{I as l}from"./InputError-U8Oc9rTH.js";import{I as c}from"./InputLabel-CVbTZxYZ.js";import{P as u}from"./PrimaryButton-B8npx_Tw.js";import{T as f}from"./TextInput-CqlH_FDK.js";import{G as x}from"./GuestLayout-C_hy9Qau.js";function y(){const{data:a,setData:e,post:o,processing:t,errors:m,reset:i}=d({password:""}),n=r=>{r.preventDefault(),o(route("password.confirm"),{onFinish:()=>i("password")})};return s.jsxs(x,{children:[s.jsx(p,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(c,{htmlFor:"password",value:"Password"}),s.jsx(f,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>e("password",r.target.value)}),s.jsx(l,{message:m.password,className:"mt-2"})]}),s.jsx("div",{className:"mt-4 flex items-center justify-end",children:s.jsx(u,{className:"ms-4",disabled:t,children:"Confirm"})})]})]})}export{y as default};

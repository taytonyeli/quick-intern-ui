"use strict";(self.webpackChunkquick_intern=self.webpackChunkquick_intern||[]).push([[566],{3701:function(e,t,n){var a=n(7294);n(1597);t.Z=function(e){var t=e.children;return a.createElement("div",{className:"container-fluid p-0 min-vh-100"},a.createElement("section",{className:"row"},a.createElement("div",{className:"col-12 col-lg-6 order-lg-first vh-100 bg-primary"}),a.createElement("div",{className:"col-12 col-lg-6 order-first d-flex align-items-center justify-content-center p-3"},a.createElement("main",{className:"w-75"},t))))}},3473:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(7294),r=n(1597),i=n(5518),l=(n(6367),n(2225)),o=n(4186),c=function(){var e=(0,a.useReducer)(i.D,{companyName:"",industry:"",country:"",location:"",email:"",password:"",confirmPassword:""}),t=e[0],n=e[1],c=t.companyName,u=t.industry,m=t.country,s=t.location,d=t.email,p=t.password,f=t.confirmPassword,g=(0,a.useState)(!1),h=g[0],y=g[1],v=function(e,t){var n;t(((n={})[e.target.name]=e.target.value,n))};return a.createElement("div",null,a.createElement("div",{className:"p-0 d-flex justify-content-center"},a.createElement("form",{method:"POST",onSubmit:function(e){e.preventDefault(),y(!0),(0,r.navigate)("/company")},className:"w-100"},a.createElement(o.Z,{label:"Company Name:",id:"companyName",placeholder:"e.g. My Company",inputProps:{inputMode:"text",required:!0,value:c,maxLength:255,minLength:2,pattern:".*[a-zA-Z].*$",onInput:function(e){return v(e,n)},tabIndex:1}}),a.createElement(o.Z,{label:"Industry",id:"industry",placeholder:"e.g. Telecommunication",inputProps:{inputMode:"text",required:!0,value:u,maxLength:255,minLength:2,pattern:".*[a-zA-Z].*$",onInput:function(e){return v(e,n)},tabIndex:2}}),a.createElement(o.Z,{label:"Country:",id:"country",placeholder:"e.g. Ghana",inputProps:{inputMode:"text",required:!0,value:m,maxLength:255,minLength:2,pattern:".*[a-zA-Z\\s\\-].*$",onInput:function(e){return v(e,n)},tabIndex:3}}),a.createElement(o.Z,{label:"Location:",id:"location",placeholder:"e.g. Accra",inputProps:{inputMode:"text",required:!0,value:s,maxLength:255,minLength:2,pattern:".*[a-zA-Z\\s\\-].*$",onInput:function(e){return v(e,n)},tabIndex:3}}),a.createElement(o.Z,{label:"Email:",id:"email",placeholder:"e.g. me@example.com",inputProps:{inputMode:"text",required:!0,value:d,maxLength:255,minLength:2,pattern:".*[a-zA-Z\\-].*$",onInput:function(e){return v(e,n)},tabIndex:3}}),a.createElement(o.Z,{label:"Password:",id:"password",inputProps:{inputMode:"password",type:"password",required:!0,value:p,maxLength:255,minLength:2,onInput:function(e){return v(e,n)},tabIndex:5}}),a.createElement(o.Z,{label:"Confirm Password:",id:"confirmPassword",inputProps:{inputMode:"confirmPassword",type:"password",required:!0,value:f,maxLength:255,minLength:2,onInput:function(e){return v(e,n)},tabIndex:6}}),a.createElement(l.Z,{title:"Create Account",isLoading:h}))),a.createElement("div",{className:"text-center py-5"},a.createElement("p",null,"Already have an account?"),a.createElement(r.Link,{to:"/",className:"btn btn-outline-primary w-100 p-3"},"Sign In")))},u=n(3701),m=n(262),s=function(){return a.createElement(u.Z,null,a.createElement(m.Z,{title:"Company | Register"}),a.createElement("h1",{className:"h3 py-5"},"Join Assisted Intern as Company"),a.createElement(c,null))}}}]);
//# sourceMappingURL=component---src-pages-company-register-js-e7011ea23fc614cb8224.js.map
"use strict";(self.webpackChunkquick_intern=self.webpackChunkquick_intern||[]).push([[171],{3701:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children;return a.createElement("div",{className:"container-fluid p-0 min-vh-100"},a.createElement("section",{className:"row"},a.createElement("div",{className:"col-12 col-lg-6 order-lg-first vh-100 bg-primary"}),a.createElement("div",{className:"col-12 col-lg-6 order-first d-flex align-items-center justify-content-center p-3"},a.createElement("main",{className:"w-75"},t))))}},6203:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(7294),r=n(7894),i=n(1597),l=n(5518),s=n(9590),c=n(2225),u=n(4186),m=function(){var e=(0,a.useReducer)(l.D,{firstName:"",lastName:"",dateOfBirth:"",email:"",password:"",confirmPassword:""}),t=e[0],n=e[1],m=t.firstName,o=t.lastName,d=t.dateOfBirth,p=t.email,f=t.password,h=t.confirmPassword,g=(0,a.useState)(!1),E=g[0],v=g[1],w=function(e,t){var n;t(((n={})[e.target.name]=e.target.value,n))};return a.createElement("div",null,a.createElement("div",{className:"p-0 d-flex justify-content-center"},a.createElement("form",{method:"POST",onSubmit:function(e){e.preventDefault(),v(!0),(0,i.navigate)("/student")},className:"w-100"},a.createElement(u.Z,{label:"First Name:",id:"firstName",placeholder:"e.g. Ama",inputProps:{inputMode:"text",required:!0,value:m,maxLength:255,minLength:2,pattern:".*[a-zA-Z_\\s\\-].*$",onInput:function(e){return w(e,n)},tabIndex:1}}),a.createElement(u.Z,{label:"Last Name:",id:"lastName",placeholder:"e.g. Last",inputProps:{inputMode:"text",required:!0,value:o,maxLength:255,minLength:2,pattern:".*[a-zA-Z_\\s\\-].*$",onInput:function(e){return w(e,n)},tabIndex:2}}),a.createElement(u.Z,{label:"Email:",id:"email",placeholder:"e.g. me@example.com",inputProps:{inputMode:"text",required:!0,value:p,maxLength:255,minLength:2,pattern:".*[a-zA-Z_\\-].*$",onInput:function(e){return w(e,n)},tabIndex:3}}),a.createElement(s.Z,{label:"Date of Birth:",id:"date",inputProps:{selected:d,onChange:function(e){return n({dateOfBirth:e})},maxDate:(0,r.default)(new Date,16),tabIndex:4}}),a.createElement(u.Z,{label:"Password:",id:"password",inputProps:{inputMode:"password",type:"password",required:!0,value:f,maxLength:255,minLength:2,onInput:function(e){return w(e,n)},tabIndex:5}}),a.createElement(u.Z,{label:"Confirm Password:",id:"confirmPassword",inputProps:{inputMode:"confirmPassword",type:"password",required:!0,value:h,maxLength:255,minLength:2,onInput:function(e){return w(e,n)},tabIndex:6}}),a.createElement(c.Z,{title:"Create Account",isLoading:E}))),a.createElement("div",{className:"text-center py-5"},a.createElement("p",null,"Already have an account?"),a.createElement(i.Link,{to:"/",className:"btn btn-outline-primary w-100 p-3"},"Sign In")))},o=n(3701),d=n(262),p=function(){return a.createElement(o.Z,null,a.createElement(d.Z,{title:"Student | Register"}),a.createElement("h1",{className:"h3 py-5"},"Join Assisted Intern"),a.createElement(m,null))}}}]);
//# sourceMappingURL=component---src-pages-student-register-js-f6a3be161f6fed915a04.js.map
"use strict";(self.webpackChunkquick_intern=self.webpackChunkquick_intern||[]).push([[357],{5065:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),o=[{title:"Sample Job 1",description:"A sample job",company:"Sample Company 1",industry:"Testing",country:"Ghana",location:"Kumasi",activeFrom:new Date,activeTo:new Date},{title:"Sample Job 2",description:"Another sample job",company:"Sample Startup 1",industry:"Testing",country:"Ghana",location:"Remote",activeFrom:new Date,activeTo:new Date},{title:"Sample Job 3",description:"A sample job",company:"Sample Company 1",industry:"Testing",country:"Ghana",location:"Cape Coast",activeFrom:new Date,activeTo:new Date},{title:"Sample Job 4",description:"Another sample job",company:"Sample Company 2",industry:"Testing",country:"Ghana",location:"Remote",activeFrom:new Date,activeTo:new Date},{title:"Sample Job 5",description:"Another sample job",company:"Sample Company 1",industry:"Testing",country:"Ghana",location:"Tema",activeFrom:new Date,activeTo:new Date},{title:"Sample Job 6",description:"A sample job",company:"Sample Startup 1",industry:"Testing",country:"Ghana",location:"Tamale",activeFrom:new Date,activeTo:new Date},{title:"Sample Job 7",description:"Another sample job",company:"Sample Startup 2",industry:"Testing",country:"Ghana",location:"Accra",activeFrom:new Date,activeTo:new Date},{title:"Sample Job 8",description:"Another sample job",company:"Sample Company 1",industry:"Testing",country:"Ghana",location:"Remote",activeFrom:new Date,activeTo:new Date}],r=function(e){var t=e.loadingText;return n.createElement("div",{className:"text-center p-5"},n.createElement("div",{className:"spinner-border",role:"status"},n.createElement("span",{className:"visually-hidden"},t)))};r.defaultProps={loadingText:"Loading..."};var l=r,c=a(962),i=function(e){var t=e.title,a=e.company,o=e.description,r=e.createdOn;return n.createElement("div",{className:"list-group-item list-group-item-action py-3 my-1 border-start-0 border-end-0"},n.createElement("div",{className:"d-flex w-100 justify-content-between"},n.createElement("h5",{className:"mb-2 fw-semibold"},t),n.createElement("small",null,(0,c.default)(r,"MMMM d, yyyy"))),n.createElement("p",{className:"mb-1"},a),n.createElement("small",null,o))};i.defaultProps={title:"Uploaded Jobs"};var s=i,m=function(e){var t=e.title,a=(0,n.useState)([]),r=a[0],c=a[1],i=(0,n.useState)(!0),m=i[0],p=i[1];return(0,n.useEffect)((function(){c(o),p(!1)}),[]),n.createElement("div",{className:"p-5"},n.createElement("p",{className:"h-5 bold"},t),m&&n.createElement(l,null),!m&&n.createElement(n.Fragment,null,n.createElement("div",{className:"list-group border border-0"},r.map((function(e){var t=e.title,a=e.description,o=e.company,r=(e.industry,e.country,e.location,e.activeFrom);return n.createElement(s,{title:t,company:o,description:a,createdOn:r})})))))};m.defaultProps={title:"Uploaded Jobs"};var p=m},6529:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),o=a(1597),r=function(e){return e.isCurrent?{className:"nav-link active"}:{className:"nav-link"}},l=function(e){return n.createElement(o.Link,Object.assign({getProps:r},e))},c=function(e){var t=e.siteTitle;return n.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-primary"},n.createElement("div",{className:"container-fluid"},n.createElement(o.Link,{to:"/",className:"navbar-brand",href:"#"},t+" | Company"),n.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#main-navbar","aria-controls":"main-navbar","aria-expanded":"false","aria-label":"Toggle navigation"},n.createElement("span",{className:"navbar-toggler-icon"})),n.createElement("div",{className:"collapse navbar-collapse d-flex justify-content-end",id:"main-navbar"},n.createElement("ul",{className:"navbar-nav mb-2 mb-md-0"},n.createElement("li",{className:"nav-item"},n.createElement(l,{to:"/company"},"Home")),n.createElement("li",{className:"nav-item dropdown"},n.createElement("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"My Account"),n.createElement("ul",{className:"dropdown-menu"},n.createElement("li",null,n.createElement(o.Link,{to:"/",className:"dropdown-item",href:"#"},"Logout"))))))))};c.defaultProps={siteTitle:""};var i=c,s=function(e){var t,a=e.children,r=(0,o.useStaticQuery)("1744088087");return n.createElement("div",{className:"container-fluid p-0"},n.createElement(i,{siteTitle:(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.createElement("main",{className:"container-lg"},a))}},2377:function(e,t,a){a.r(t);var n=a(1597),o=a(7294),r=a(5065),l=a(6529),c=a(262);t.default=function(){return o.createElement(l.Z,null,o.createElement(c.Z,{title:"Company | Home"}),o.createElement("h1",{className:"h3 p-5 text-center"},"Welcome to Assisted Intern, you can now upload job vacancies in your company in order to reach persons who best fit these vacancies​"),o.createElement("div",{className:"text-center pb-3"},o.createElement(n.Link,{to:"/company/jobs/create",className:"btn btn-secondary py-3 px-5"},"Upload a Job")),o.createElement(r.Z,{title:"Your Uploaded Jobs"}))}}}]);
//# sourceMappingURL=component---src-pages-company-index-js-4fdb6cafdbdc2043e9a3.js.map
(this.webpackJsonpinvasiveplants=this.webpackJsonpinvasiveplants||[]).push([[0],{114:function(e,n,a){"use strict";a.r(n);var t=a(1),i=a(0),c=a.n(i),s=a(19),r=a.n(s),o=(a(71),a(72),a(7)),l=a(22),u=a(8),j=a(123),d=a(122),m=a(17),b=Object(i.createContext)();function p(){return Object(i.useContext)(b)}function h(){var e=p(),n=e.authTokens,a=e.setAuthTokens;return Object(t.jsxs)(j.a,{expand:"md",className:"navbar",bg:"success","text-variant":"warning",style:{padding:"0 3rem"},children:[Object(t.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(t.jsx)(j.a.Collapse,{id:"responsive-navbar-nav",children:Object(t.jsxs)(d.a,{children:[Object(t.jsx)(m.LinkContainer,{to:"/",className:"link",children:Object(t.jsx)(d.a.Link,{children:"Home"})}),Object(t.jsx)(m.LinkContainer,{to:"/kataPengantar",className:"link",children:Object(t.jsx)(d.a.Link,{children:"Kata Pengantar"})}),n&&Object(t.jsx)(m.LinkContainer,{to:"/edit/new",className:"link",children:Object(t.jsx)(d.a.Link,{children:"Create new plant entry"})}),Object(t.jsx)(m.LinkContainer,{to:"/login",onClick:function(){n&&a(!1)},className:"link create-new",children:Object(t.jsx)(d.a.Link,{children:n?"Logout":"Admin"})})]})})]})}var g=a(116),O=a(62),f=a(124),x=a(61),k=(a(79),"https://bukugulma.herokuapp.com");function v(e){var n=e.plantname,a=Object(i.useState)(),c=Object(o.a)(a,2),s=c[0],r=c[1],l=Object(i.useState)(),u=Object(o.a)(l,2),j=u[0],d=u[1],b=Object(i.useState)(!1),p=Object(o.a)(b,2),h=p[0],v=p[1];Object(i.useEffect)((function(){return h||fetch("".concat(k,"/gulma/").concat(n),{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){d(e.LatinName),r(e.Images[0])})).catch((function(e){return console.log(e)})),function(){return v(!0)}}),[n,h]);var y=s?Object(t.jsx)(x.LazyLoadImage,{effect:"blur",className:"home-card-image",src:s}):Object(t.jsx)(g.a,{animation:"border",role:"status",style:{margin:"auto"}});return Object(t.jsx)(O.a,{xs:12,sm:6,md:4,lg:3,children:Object(t.jsx)(m.LinkContainer,{to:"/"+n,children:Object(t.jsxs)(f.a,{className:"container home-card link",children:[Object(t.jsx)(f.a.Title,{className:"home-card-title",children:j}),Object(t.jsx)(f.a.Body,{style:{padding:0},children:y})]})})})}var y=a(117);function N(){return Object(t.jsx)("div",{children:Object(t.jsx)(y.a,{className:"loading-row",children:Object(t.jsx)("div",{className:"loading-container d-flex justify-content-center spinner-div",children:Object(t.jsx)(g.a,{animation:"border",role:"status",children:Object(t.jsx)("span",{className:"sr-only",children:"Loading..."})})})})})}function S(){var e=Object(i.useState)([]),n=Object(o.a)(e,2),a=n[0],c=n[1],s=Object(i.useState)(!1),r=Object(o.a)(s,2),l=r[0],u=r[1];return Object(i.useEffect)((function(){return l||fetch("".concat(k,"/gulmanames"),{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return console.log(e)})),function(){return u(!0)}}),[l]),a.length?Object(t.jsx)("div",{children:Object(t.jsx)("div",{className:"container home-container",children:a.map((function(e){return Object(t.jsx)(v,{plantname:e})}))})}):Object(t.jsx)(N,{})}function C(e){var n=Object(i.useState)(!1),a=Object(o.a)(n,2),c=a[0],s=a[1],r=Object(i.useState)(!1),l=Object(o.a)(r,2),j=l[0],d=l[1],m=Object(i.useState)(""),b=Object(o.a)(m,2),h=b[0],g=b[1],O=Object(i.useState)(""),f=Object(o.a)(O,2),x=f[0],v=f[1],y=p().setAuthTokens;return c?Object(t.jsx)(u.c,{to:"/home"}):Object(t.jsxs)("div",{className:"login-card",children:[Object(t.jsxs)("form",{className:"login-form",action:"".concat(k,"/login"),method:"POST",children:[Object(t.jsx)("input",{type:"text",name:"username",value:x,onChange:function(e){v(e.target.value)},placeholder:"Username"}),Object(t.jsx)("input",{type:"password",name:"password",value:h,onChange:function(e){g(e.target.value)},placeholder:"Password"}),Object(t.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),fetch("".concat(k,"/login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:x,password:h})}).then((function(e){return e.json()})).then((function(e){e?(y(!0),s(!0)):d(!0)})).catch((function(e){return console.log("Error getting authentication: ",e)}))},className:"btn btn-success",children:"Sign In"})]}),j&&Object(t.jsx)("div",{style:{backgroundColor:"red"},children:"The username or password provided were incorrect!"})]})}function w(e){return Object(t.jsxs)("div",{className:"table-row",children:[Object(t.jsxs)("div",{className:"left-col",children:[e.name,":"]}),Object(t.jsx)("div",{className:"right-col",children:e.value})]})}var T={NamaLokal:"Nama lokal",Sinonim:"Sinonim",Biologi:"Biologi",Morfologi:"Morfologi",Pemanfaatan:"Pemanfaatan",Pengendalian:"Pengendalian",Permasalahan:"Permasalahan",TinjaunanUmum:"Tinjaunan umum"},L=a(27),P=(a(80),a(81),a(63)),I=a.n(P),A=a(119),D=a(120),B=a(118);function E(e){return Object(t.jsxs)(D.a,{show:e.show,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(t.jsx)(D.a.Header,{closeButton:!0,children:Object(t.jsx)(D.a.Title,{children:"Delete"})}),Object(t.jsx)(D.a.Body,{children:Object(t.jsxs)("p",{children:["Are you sure you want to delete ",e.name,"?"]})}),Object(t.jsxs)(D.a.Footer,{children:[Object(t.jsx)(B.a,{onClick:e.onAbort,variant:"outline-danger",children:"Nah"}),Object(t.jsx)(B.a,{onClick:e.onConfirm,variant:"danger",children:"Aye"})]})]})}function J(e){var n=Object(i.useState)(!1),a=Object(o.a)(n,2),c=a[0],s=a[1];return Object(t.jsxs)("div",{className:e.edit?"image-container edit":"image-container",children:[Object(t.jsx)(E,{show:c,onConfirm:function(){e.onDelete&&e.onDelete(),s(!1)},onAbort:function(){return s(!1)},name:"this image"}),e.edit&&Object(t.jsx)("a",{onClick:function(){return s(!0)},children:"\u274c"}),Object(t.jsx)(A.a,{src:e.source,className:"card-image"}),Object(t.jsx)("div",{className:"image-desc",children:Object(t.jsx)("em",{children:e.text})})]})}function U(e){var n=e.images.length,a={dots:!1,adjustHeight:!0,speed:500,slidesToScroll:1,slidesToShow:Math.min(3,n),infinite:n>3,responsive:[{breakpoint:768,settings:{slidesToShow:Math.min(2,n),infinite:n>2}},{breakpoint:576,settings:{slidesToShow:1,infinite:n>1}}]};return Object(t.jsx)(I.a,Object(L.a)(Object(L.a)({},a),{},{className:"detail-page-carousel",children:e.images.map((function(n,a){var i,c=null!==(i=e.descriptions[a])&&void 0!==i?i:"";return Object(t.jsx)(J,{source:n,text:c,edit:!1})}))}))}function M(e){var n=e.gulma,a=p().authTokens;return Object(t.jsxs)("div",{children:[Object(t.jsx)("h4",{className:"detail-header",children:n.LatinName}),Object(t.jsx)(U,{images:n.Images,descriptions:n.ImageDescriptions}),Object.keys(n).map((function(e){return T[e]?Object(t.jsx)(w,{name:T[e],value:n[e]}):null})),a&&Object(t.jsx)(m.LinkContainer,{to:"/edit/"+n.Url,className:"link edit",children:Object(t.jsx)(d.a.Link,{children:"Edit plant entry"})})]})}function F(e){var n=Object(u.m)().plantname,a=Object(i.useState)(),c=Object(o.a)(a,2),s=c[0],r=c[1],l=Object(i.useState)(!1),j=Object(o.a)(l,2),d=j[0],m=j[1];Object(i.useEffect)((function(){return d||fetch("".concat(k,"/gulma/").concat(n),{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return console.log(e)})),function(){return m(!0)}}),[n,d]);var b=s?Object(t.jsx)(M,{gulma:s}):Object(t.jsx)(N,{});return Object(t.jsx)("div",{className:"container",children:b})}var z=a(121);function K(e){var n=["Sinonim","Nama Lokal","Nama Latin"].includes(e.name)||e.name.match("^Image")?1:5;return Object(t.jsxs)(z.a.Group,{className:"table-row",controlId:e.name,children:[Object(t.jsx)(z.a.Label,{className:"left-col",children:e.name}),Object(t.jsx)(z.a.Control,{as:"textarea",rows:n,className:"right-col",type:"text",value:e.value,onChange:e.onchange})]})}var _={LatinName:"",Sinonim:"",NamaLokal:"",Morfologi:"",Pengendalian:"",Biologi:"",Pemanfaatan:"",Permasalahan:"",TinjaunanUmum:"",Images:[],ImageDescriptions:[]},H=a(41),Z=a.n(H),G=a(48),Q=a.n(G),Y="sl.Ak7BI5vzHBkXpy-ju1ca5kNyZqz-r0793LBZyMxlYnsKAh9GI2eQ_EUa_hqEmnrD6c4Qn8i1zFBgwsDBQOFYQmMHP9-FD2Cm-a9-UfZDZAg4npXi7t6Tt14ksiwYFC02fM78K8bP";function q(){var e,n=null===(e=Object(u.m)())||void 0===e?void 0:e.plantname,a=Object(i.useState)(null===n),c=Object(o.a)(a,2),s=c[0],r=c[1],l=Object(i.useState)(),j=Object(o.a)(l,2),d=j[0],m=j[1],b=Object(i.useState)(!1),p=Object(o.a)(b,2),h=p[0],g=p[1],O=Object(i.useState)(!1),f=Object(o.a)(O,2),x=f[0],v=f[1];function y(e){var n=JSON.parse(JSON.stringify(d));n[e.target.id]=e.target.value,n.Url=n.LatinName.replace(" ",""),m(n)}function S(e){Z()("".concat(k,"/gulma/").concat(n),{method:e,headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(d)}).catch((function(e){return console.log(e)})),g(!0)}return Object(i.useEffect)((function(){s?m(_):Z()("".concat(k,"/gulmanames"),{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.includes(n)?(r(!1),Z()("".concat(k,"/gulma/").concat(n),{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return m(e)})).catch((function(e){return console.log(e)}))):(r(!0),m(_))}))}),[n,s]),h?Object(t.jsx)(u.c,{to:"/"}):d?Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)("h4",{className:"edit-header",children:s?"Create new plant entry":"Edit ".concat(d.LatinName)}),Object(t.jsx)(E,{show:x,onConfirm:function(){v(!1),S("DELETE")},onAbort:function(){v(!1)},name:d.LatinName}),Object(t.jsxs)(z.a,{children:[s&&Object(t.jsx)(K,{name:"Nama Latin",value:"",onchange:y}),["NamaLokal","Sinonim","Biologi","Morfologi","Pemanfaatan","Pengendalian","Permasalahan","TinjaunanUmum"].map((function(e){return Object(t.jsx)(K,{name:e.match(/[A-Z][a-z]+/g).join(" "),value:d[e],onchange:y})})),d.Images.map((function(e,n){var a;return Object(t.jsxs)("div",{children:[Object(t.jsx)(J,{source:e,edit:!0,onDelete:function(){return function(e){var n=JSON.parse(JSON.stringify(d));n.Images=d.Images.filter((function(n,a){return a!==e})),n.ImageDescriptions=d.ImageDescriptions.filter((function(n,a){return a!==e})),console.log(n),m(n)}(n)}}),Object(t.jsx)(K,{name:"Image description ".concat(n+1),value:null!==(a=d.ImageDescriptions[n])&&void 0!==a?a:"",onChange:function(e){return function(e,n){var a=JSON.parse(JSON.stringify(d));a.ImageDescriptions[n]=e.target.value,m(a)}(e,n)}})]})})),Object(t.jsxs)("div",{children:[Object(t.jsx)("label",{for:"imageUpload",className:"right-col",children:"Upload a new image:"})," ",Object(t.jsx)("input",{type:"file",id:"imageUpload",className:"btn btn-success",onChange:function(){var e=document.getElementById("imageUpload").files[0],a={path:"/".concat(n,"/").concat(e.name)};Q()({url:"https://content.dropboxapi.com/2/files/upload",method:"POST",headers:{Authorization:"Bearer "+Y,"Content-Type":"application/octet-stream","Dropbox-API-Arg":JSON.stringify(a)},data:e}).then((function(){Q()({url:"https://api.dropboxapi.com/2/sharing/create_shared_link_with_settings",method:"POST",headers:{Authorization:"Bearer "+Y,"Content-Type":"application/json"},data:{path:"/".concat(n,"/").concat(e.name)}}).then((function(e){var n=e.data.url.replace("dropbox","dl.dropboxusercontent").replace("?dl=0","");console.log(n);var a=JSON.parse(JSON.stringify(d));a.Images.push(n),a.ImageDescriptions.push(""),m(a)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))},accept:"image/png, image/jpeg"})]}),Object(t.jsxs)("div",{className:"edit-buttons",children:[Object(t.jsx)(B.a,{variant:"danger",type:"button",name:"DELETE",onClick:function(){return v(!0)},children:"Delete entry"}),Object(t.jsx)(B.a,{variant:"success",type:"submit",name:"POST",onClick:function(){return S("POST")},children:"Submit"})]})]})]}):Object(t.jsx)(N,{})}function X(){return Object(t.jsxs)("div",{className:"pengantar",children:[Object(t.jsx)("h1",{children:"Kata Pengantar"}),Object(t.jsx)("p",{children:"Gulma merupakan tumbuhan pengganggu yang keberadaannya tidak dapat dipisahkan dari pembudidayaan tanaman, termasuk kelapa sawit. Keberadaannya di lapangan perlu dimonitor secara berkala untuk menghindari pertumbuhan yang berlebihan sehingga mengganggu pertumbuhan kelapa sawit. Di perkebunan kelapa sawit, meskipun gulma pada umumnya bersifat merugikan, namun pada kondisi lapangan cukup banyak gulma yang bermanfaat, terutama untuk konservasi musuh alami serangga hama kelapa sawit. Oleh karena itu, pengendaliannya di lapangan perlu dilakukan secara bijak, efektif dan efisien."}),Object(t.jsx)("p",{children:"Pengendalian gulma yang efektif dan efisien akan dicapai apabila praktisi kelapa sawit, terutama petugas di lapangan, mampu mengidentifikasi secara tepat jenis-jenis gulma di lapangan dan menentukan teknik pengendalian yang sesuai dengan kondisi di lapangan. Buku \u201cGulma Kelapa Sawit di Indonesia: Jenis dan Pengendaliannya\u201d menyajikan informasi mengenai jenis-jenis gulma yang umum dijumpai di perkebunan kelapa sawit di Indonesia dan penting untuk diketahui. Buku ini disusun secara sistematik, dilengkapi dengan foto-foto gulma sebagai panduan identifikasi dan disajikan dengan bahasa umum yang mudah dimengerti oleh seluruh kalangan. Informasi mengenai teknik pengendalian gulma terpadu di perkebunan kelapa sawit juga turut disertakan dalam buku ini."}),Object(t.jsx)("p",{children:"Kami berharap buku ini dapat bermanfaat bagi seluruh praktisi perkebunan kelapa sawit terutama dalam proses identifikasi dan pengendalian gulma. Kami mengucapkan terima kasih pada seluruh pihak yang telah berpartisipasi dalam proses penyusunan buku ini. Saran dan kritik yang membangun akan senantiasa kami terima untuk pengembangan dan penyempurnaan buku ini di masa mendatang."}),Object(t.jsx)("p",{children:"Penulis"})]})}function R(){return Object(t.jsx)("div",{className:"footer",children:"2020,  W. Purba & S. L\xf6brich"})}var W=a(65);function V(e){var n=e.component,a=Object(W.a)(e,["component"]),i=p().authTokens;return Object(t.jsx)(u.d,Object(L.a)(Object(L.a)({},a),{},{render:function(e){return i?Object(t.jsx)(n,Object(L.a)({},e)):Object(t.jsx)(u.c,{to:{pathname:"/login",state:{referer:e.location}}})}}))}var $=function(){var e=JSON.parse(localStorage.getItem("tokens")),n=Object(i.useState)(e),a=Object(o.a)(n,2),c=a[0],s=a[1];return Object(t.jsx)("div",{className:"App",children:Object(t.jsx)(b.Provider,{value:{authTokens:c,setAuthTokens:function(e){localStorage.setItem("tokens",JSON.stringify(e)),s(e)}},children:Object(t.jsxs)(l.BrowserRouter,{basename:"/invasiveplants",children:[Object(t.jsx)(h,{}),Object(t.jsxs)(u.g,{children:[Object(t.jsx)(u.d,{path:"/",component:S}),Object(t.jsx)(u.d,{path:"/login",component:C}),Object(t.jsx)(u.d,{path:"/kataPengantar",component:X}),Object(t.jsx)(V,{path:"/edit/:plantname",component:q}),Object(t.jsx)(u.d,{path:"/:plantname",component:F})]}),Object(t.jsx)(R,{})]})})})},ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,125)).then((function(n){var a=n.getCLS,t=n.getFID,i=n.getFCP,c=n.getLCP,s=n.getTTFB;a(e),t(e),i(e),c(e),s(e)}))};r.a.render(Object(t.jsx)(c.a.StrictMode,{children:Object(t.jsx)($,{})}),document.getElementById("root")),ee()},71:function(e,n,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.366efc19.chunk.js.map
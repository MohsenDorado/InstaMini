(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2732:function(e,t,s){Promise.resolve().then(s.t.bind(s,7844,23)),Promise.resolve().then(s.t.bind(s,3385,23)),Promise.resolve().then(s.bind(s,903)),Promise.resolve().then(s.bind(s,1615))},903:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var n=s(7437),a=s(703),o=s(8792),r=s(1126),l=s(8245),i=s.n(l),c=s(2265),u=s(7252),d=s(784),m=s(2021),h=s(8121),p=s(4905);function x(){let{data:e}=(0,r.useSession)(),[t,s]=(0,c.useState)(!1),[l,x]=(0,c.useState)(null),[f,g]=(0,c.useState)(null),[b,w]=(0,c.useState)(!1),[j,y]=(0,c.useState)(!1),[N,v]=(0,c.useState)(""),k=(0,c.useRef)(),C=(0,h.ad)(m.l);async function S(){w(!0);let e=(0,p.cF)(m.l),t=new Date().getTime()+"--"+l.name,s=(0,p.iH)(e,t),n=(0,p.B0)(s,l);n.on("state_changed",e=>{console.log("Upload is "+e.bytesTransferred/e.totalBytes*100+"% done...")},e=>{console.log(e),w(!1),g(null),x(null)},()=>{(0,p.Jt)(n.snapshot.ref).then(e=>{g(e),w(!1)})})}async function _(){y(!0),await (0,h.ET)((0,h.hJ)(C,"posts"),{username:e.user.username,caption:N,profileImg:e.user.image,image:f,timestamp:(0,h.Bt)()}),y(!1),s(!1),location.reload()}return(0,c.useEffect)(()=>{l&&S()},[l]),(0,n.jsxs)("div",{className:"shadow-sm border-b sticky top-0 bg-white z-auto",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center max-w-6xl mx-auto",children:[(0,n.jsxs)(o.default,{href:"/",children:[(0,n.jsx)(a.default,{className:"hidden lg:inline-flex",src:"/Instagram_logo_black.webp",width:96,height:96,alt:"Logo"}),(0,n.jsx)(a.default,{className:"lg:hidden",src:"/800px-Instagram_logo_2016.webp",width:40,height:40,alt:"Logo"})]}),(0,n.jsx)("input",{type:"text",placeholder:"Search",className:"bg-gray-100 border border-gray-200 w-full rounded-lg py-2 px-4 max-w-[210px] "}),e?(0,n.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,n.jsx)(u.HGK,{onClick:()=>s(!0),className:"text-2xl cursor-pointer transform  hover:scale-125 transition duration-300 hover:text-red-600"}),(0,n.jsx)("img",{onClick:r.signOut,className:"w-10 h-10 rounded-full cursor-pointer hover:brightness-105",src:e.user.image,alt:"".concat(e.user.name," Photo")})]}):(0,n.jsx)("button",{onClick:()=>(0,r.signIn)(),className:"text-sm font-semibold text-blue-500",children:"Login"})]}),t&&(0,n.jsx)(i(),{className:"max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md ",onRequestClose:()=>s(!1),ariaHideApp:!1,isOpen:t,children:(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center h-[100%]",children:[l?(0,n.jsx)("img",{src:f,alt:"selected photo",className:"w-full m-h-[250px] object-cover cursor-pointer flex justify-center items-center ".concat(b?"animate-pulse":""),onClick:()=>x(null)}):(0,n.jsx)(d.OhX,{onClick:()=>k.current.click(),className:"hover:text-gray-600 text-5xl text-gray-300 cursor-pointer "}),(0,n.jsx)("input",{ref:k,hidden:!0,onChange:function(e){let t=e.target.files[0];t&&(x(t),g(URL.createObjectURL(t)),console.log(f))},accept:"image/*",className:"",type:"file"}),(0,n.jsx)("input",{className:"m-4 border-none  text-center w-full focus:ring-0 outline-none",type:"text",maxLength:"150",placeholder:"Enter caption here",onChange:e=>v(e.target.value)}),(0,n.jsx)("button",{disabled:!l||(N.trim(),!1)||j||b,onClick:_,className:"w-full bg-blue-300 rounded-xl text-white p-2 shadow-md hover:brightness-105 disabled:bg-gray-200 disabled:cursor-not-allowed",children:"Upload post"}),(0,n.jsx)(d.FU5,{className:"cursor-pointer absolute top-2 right-2 hover:text-red-300  text-red-700 transition duration-300",onClick:()=>s(!1)})]})})]})}},1615:function(e,t,s){"use strict";s.r(t);var n=s(7437),a=s(1126);t.default=e=>{let{children:t}=e;return(0,n.jsx)(a.SessionProvider,{children:t})}},2021:function(e,t,s){"use strict";s.d(t,{l:function(){return n}});let n=(0,s(6142).ZF)({apiKey:"AIzaSyAzL1Mz5OODdVDPW878B5vyNL4HyEUUFw4",authDomain:"instaminiclone.firebaseapp.com",projectId:"instaminiclone",storageBucket:"instaminiclone.appspot.com",messagingSenderId:"947297760568",appId:"1:947297760568:web:7f549a60b175bc8955fdcd"})},3385:function(){}},function(e){e.O(0,[358,51,305,508,403,971,69,744],function(){return e(e.s=2732)}),_N_E=e.O()}]);
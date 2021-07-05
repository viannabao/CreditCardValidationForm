(this["webpackJsonpcredit-card-validation-form"]=this["webpackJsonpcredit-card-validation-form"]||[]).push([[0],{162:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t);var r,i,a,c,d,o,s,l,j,b,u,h=n(0),x=n.n(h),O=n(54),m=n.n(O),p=(n(152),n(26)),g=n(23),f=n(24),v=n(80),C=n(117),y=n(11),w=n(134),F=n(180),N=n(181),k=n(177),S=n(175),q=n(176),L=n(178),M=n(115),E={name:/[A-Za-z ]{1,50}/,creditCardNumber:/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvc:/[0-9]{3}/,expiry:/^(0[1-9]|1[0-2])\/?([0-9]{2})$/},z="#212121",J="#9f3a38",Y=n(7),D=f.a.span(r||(r=Object(g.a)(["\n  font-size: 12px;\n  color: ",";\n"])),J),P=function(e){return Object(Y.jsxs)(q.a.Field,{error:!!e.error,children:[Object(Y.jsx)("label",{htmlFor:e.id,children:e.label}),Object(Y.jsx)("input",Object(M.a)(Object(M.a)({},e.register),{},{id:e.id,"data-testid":e.id,placeholder:e.placeholder,inputMode:e.inputMode,maxLength:e.maxLength,type:"text","aria-invalid":!!e.error})),e.error&&Object(Y.jsx)(D,{role:"alert","aria-atomic":"true",children:e.error.message})]})},T=Object(f.a)(F.a)(i||(i=Object(g.a)(['\n  font-family: "Lobster";\n  font-weight: 100;\n  color: ',";\n"])),z),V=f.a.div(a||(a=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 50px;\n"]))),B=Object(f.a)(N.a)(c||(c=Object(g.a)(["\n  width: 70%;\n  max-width: 500px;\n  height: auto;\n"]))),I=function(){var e=Object(h.useState)(!1),t=Object(p.a)(e,2),n=t[0],r=t[1],i=Object(w.a)(),a=i.register,c=i.handleSubmit,d=i.setError,o=i.setFocus,s=i.formState.errors;x.a.useEffect((function(){o("creditCardNumber")}),[o]);return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)(V,{role:"main",children:Object(Y.jsxs)(B,{children:[n&&Object(Y.jsx)(k.a,{positive:!0,onDismiss:function(){r(!1)},header:"Credit card info submitted!"}),Object(Y.jsx)(T,{as:"h2",children:"Welcome John Doe"}),Object(Y.jsx)(S.a,{clearing:!0}),Object(Y.jsxs)(q.a,{onSubmit:c((function(e){console.log(JSON.stringify({data:e})),r(!0)})),children:[Object(Y.jsx)(P,{id:"credit-card-number-text-input",label:"Credit Card Number",error:s.creditCardNumber,register:a("creditCardNumber",{required:"Credit card number is required",pattern:{value:E.creditCardNumber,message:"Card number is not valid"}}),placeholder:"0000-0000-0000-0000",inputMode:"numeric"}),Object(Y.jsx)(P,{id:"credit-card-holder-name-text-input",label:"Name",error:s.name,register:a("name",{required:"Name is required",pattern:{value:E.name,message:"Name value is not valid"}}),placeholder:"Name"}),Object(Y.jsxs)(q.a.Group,{widths:"equal",children:[Object(Y.jsx)(P,{id:"credit-card-cvc-text-input",label:"CVC",error:s.cvc,register:a("cvc",{required:"CVC is required",pattern:{value:E.cvc,message:"CVC is not valid"}}),placeholder:"000",maxLength:3}),Object(Y.jsx)(P,{id:"credit-card-expiry-date-text-input",label:"Expiry (MM/YY)",error:s.expiry,register:a("expiry",{required:"Expiry date is required",pattern:{value:E.expiry,message:"Expiry date format is not valid"}}),placeholder:"MM/YY",maxLength:5})]}),Object(Y.jsx)(S.a,{clearing:!0}),Object(Y.jsx)(L.a,{type:"submit",onClick:function(){d("creditCardNumber",{})},"aria-label":"Submit",children:"Submit"})]})]})})})},R=f.a.div(d||(d=Object(g.a)(["\n  width: 100%;\n  height: 50px;\n  background-color: ",";\n  display: flex;\n  justify-content: space-between;\n"])),z),$=Object(f.a)(v.a)(o||(o=Object(g.a)(["\n  cursor: pointer;\n  padding: 10px;\n  color: white;\n"]))),A=f.a.h1(s||(s=Object(g.a)(['\n  margin-top: 5px;\n  color: white;\n  font-family: "Lobster";\n  font-weight: 100;\n']))),G=f.a.div(l||(l=Object(g.a)(["\n  width: 40px;\n"]))),W=f.a.nav(j||(j=Object(g.a)(["\n  height: 100vh;\n  background-color: ",";\n  position: fixed;\n  top: 50px;\n  right: 0;\n  z-index: 1000;\n  width: ",";\n  transition: width 0.8s, background-color 0.8s linear;\n"])),z,(function(e){return e.menuOpen?"100%":"0"})),Z=f.a.ul(b||(b=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  width: 100%;\n"]))),H=Object(f.a)(C.b)(u||(u=Object(g.a)(["\n  display: flex;\n  line-height: 3rem;\n  font-size: 2rem;\n  font-weight: 300;\n  color: white;\n  &:hover,\n  &:active {\n    color: white;\n  }\n"]))),K=function(){var e=Object(h.useState)(!1),t=Object(p.a)(e,2),n=t[0],r=t[1],i=Object(h.useState)("Register Card Form"),a=Object(p.a)(i,2),c=a[0],d=a[1],o=function(){r(!n)};return Object(Y.jsxs)(C.a,{children:[Object(Y.jsxs)(R,{role:"banner",children:[Object(Y.jsx)($,{link:!0,name:n?"angle left":"bars",size:"big","data-testid":"menu-icon",onClick:o}),Object(Y.jsx)(A,{"data-testid":"page-title",children:n?"Menu":c}),Object(Y.jsx)(G,{})]}),Object(Y.jsx)(W,{role:"navigation",menuOpen:n,children:Object(Y.jsx)(Z,{children:Object(Y.jsx)("li",{children:Object(Y.jsx)(H,{onClick:function(e){o();var t=e.target;d(t.innerText)},to:"/",role:"link",children:"Register Card Form"})})})}),Object(Y.jsxs)(y.c,{children:[Object(Y.jsx)(y.a,{path:"/",children:Object(Y.jsx)(I,{})}),Object(Y.jsx)(y.a,{path:"*",children:Object(Y.jsx)("h1",{children:"Page could not be found"})})]})]})};var Q=function(){return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)(K,{})})},U=(n(162),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,182)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))});m.a.render(Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)(Q,{})}),document.getElementById("root")),U(console.log)}},[[163,1,2]]]);
//# sourceMappingURL=main.0f5bfb9e.chunk.js.map
(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(14),c=t.n(r),u=(t(5),t(2)),l=t(3),i=t.n(l),s="/api/persons",m=function(){return i.a.get(s).then((function(e){return e.data}))},f=function(e){return i.a.post(s,e).then((function(e){return e.data}))},d=function(e,n){return i.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){return i.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},v=function(e){var n=e.message;return null===n?null:o.a.createElement("div",{className:"error"},n)},g=function(e){return o.a.createElement("div",null,"filter shown with ",o.a.createElement("input",{value:e.value,onChange:e.onChange}))},E=function(e){return o.a.createElement("form",{onSubmit:e.onSubmit},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:e.value1,onChange:e.onChange1})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{value:e.value2,onChange:e.onChange2})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},b=function(e){return o.a.createElement("ul",null,e.notesToShow.map((function(n){return o.a.createElement("li",{key:n.name},n.name," ",n.number,o.a.createElement("button",{onClick:function(){window.confirm("Delete ".concat(n.name," ?"))&&(h(n.id),e.setPersons(e.persons.filter((function(e){return e.id!==n.id}))),e.setErrorMessage("Person '".concat(n.name,"' removed from server")),setTimeout((function(){e.setErrorMessage(null)}),5e3))}},"delete"))})))},p=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),l=Object(u.a)(c,2),i=l[0],s=l[1],h=Object(a.useState)(""),p=Object(u.a)(h,2),w=p[0],C=p[1],j=Object(a.useState)(""),O=Object(u.a)(j,2),S=O[0],k=O[1],P=Object(a.useState)(null),y=Object(u.a)(P,2),T=y[0],L=y[1];Object(a.useEffect)((function(){m().then((function(e){r(e)}))}),[]);var M=t.filter((function(e){return e.name.toLocaleLowerCase().includes(S.toLocaleLowerCase())}));return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(v,{message:T}),o.a.createElement(g,{value:S,onChange:function(e){console.log(e.target.value),k(e.target.value)}}),o.a.createElement("h2",null,"add a new"),o.a.createElement(E,{onSubmit:function(e){e.preventDefault();var n={name:i,number:w},a=!1,o=0,c=0;t.forEach((function(e,n,t){e.name===i&&(console.log(i),a=!0,o=n,c=e.id)})),a?window.confirm("".concat(i," is already added to phonebook, change number"))&&(d(t[o].id,n).catch((function(e){L("Person ".concat(i," already deleted ")),setTimeout((function(){L(null)}),5e3),r(t.filter((function(e){return e.id!==c})))})),L("Person ".concat(i," new number is '").concat(w,"' ")),setTimeout((function(){L(null)}),5e3),r(t.map((function(e){return e.id!==c?e:n})))):(r(t.concat(n)),s(""),C(""),f(n),L("Person ".concat(i," with number '").concat(w,"' added ")),setTimeout((function(){L(null)}),5e3))},value1:i,onChange1:function(e){console.log(e.target.value),s(e.target.value)},value2:w,onChange2:function(e){console.log(e.target.value),C(e.target.value)}}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(b,{persons:t,setPersons:r,notesToShow:M,setErrorMessage:L}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,n,t){}},[[15,1,2]]]);
//# sourceMappingURL=main.8e818c02.chunk.js.map
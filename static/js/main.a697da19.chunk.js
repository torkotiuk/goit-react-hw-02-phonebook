(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{23:function(e,t,n){e.exports={section:"Section_section__1U_4U",section__title:"Section_section__title__1-b7C"}},24:function(e,t,n){e.exports={container:"Container_container__oK10G"}},26:function(e,t,n){e.exports={ContactList__item:"ContactList_ContactList__item__1RU5H"}},28:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56","gender":"female"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12","gender":"male"},{"id":"id-3","name":"Eden Clements","number":"645-17-79","gender":"male"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26","gender":"female"}]')},45:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),c=n.n(r),s=n(29),o=n(16),l=n(17),u=n(21),d=n(20),m=n(11),b=n.n(m),h=n(23),j=n.n(h),p=n(24),f=n.n(p),x=n(2),O=function(e){var t=e.children;return Object(x.jsx)("div",{className:f.a.container,children:t})},g=function(e){var t=e.children,n=e.title;e.className;return Object(x.jsx)("section",{className:j.a.section,children:Object(x.jsxs)(O,{children:[n&&Object(x.jsx)("h2",{className:j.a.section__title,children:n}),t]})})},v=n(25),C=(n(45),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={name:"",number:""},e.nameInputId=b.a.generate(),e.numberInputId=b.a.generate(),e.handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.getData(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(x.jsx)("h3",{className:"title",children:"Phonebook"}),Object(x.jsxs)("label",{htmlFor:this.nameInputId,className:"form__input",children:["Name:",Object(x.jsx)("input",{id:this.nameInputId,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:this.state.name,onChange:this.handleChange})]}),Object(x.jsxs)("label",{htmlFor:this.numberInputId,children:["Number:",Object(x.jsx)("input",{id:this.numberInputId,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(x.jsx)("button",{className:"btn",type:"submit",children:"Add"})]})}}]),n}(a.Component)),_=n(26),y=n.n(_),N=n(68),S=n(70),I=Object(N.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},container:{width:"350px"},list:{display:"flex",justifyContent:"space-between",width:"300px",border:"1px solid grey",borderRadius:"4px",padding:"10px"}}})),w=function(e){var t=e.items,n=e.onDeleteContact,a=e.children,i=I();return Object(x.jsxs)("div",{className:i.root,children:[Object(x.jsx)("h3",{className:"title",children:"ContactList"}),a,t.map((function(e){return Object(x.jsxs)("li",{className:y.a.ContactList__item,children:[Object(x.jsx)("p",{children:e.name}),Object(x.jsx)("p",{children:e.number}),Object(x.jsx)(S.a,{variant:"contained",type:"button",onClick:function(){return n(e.id)},children:"Delete"})]},e.id)}))]})},F=function(e){var t=e.valueState,n=e.filterByName;return Object(x.jsxs)("label",{className:"filter",children:["Filter by name:"," ",Object(x.jsx)("input",{type:"text",value:t,onChange:n})]})},k=n(28),D=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={contacts:k,filter:""},e.getDataFromContactForm=function(t){var n=t.name,a=t.number;if(e.state.contacts.some((function(e){return e.name===n})))alert("".concat(n," is already in contacts."));else{var i={id:b.a.generate(),name:n,number:a};e.setState((function(e){return{contacts:[i].concat(Object(s.a)(e.contacts))}}))}},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.target.value})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.filter.toLowerCase(),t=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}));return Object(x.jsxs)(g,{children:[Object(x.jsx)(C,{getData:this.getDataFromContactForm}),Object(x.jsx)(w,{items:t,onDeleteContact:this.deleteContact,children:Object(x.jsx)(F,{valueState:this.state.filter,filterByName:this.changeFilter})})]})}}]),n}(a.Component);n(50),n(51);c.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(D,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.a697da19.chunk.js.map
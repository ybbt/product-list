(this["webpackJsonplist-of-goods"]=this["webpackJsonplist-of-goods"]||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(18),i=n.n(a),s=(n(24),n(25),n(6)),o=n(7),u=n(9),j=n(8),h=n(1),d=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).handleChange=function(t){c.setState({inputValue:t.target.value})},c.handleClick=function(){var t={};Object.assign(t,c.props.item),t.amount=c.state.inputValue,c.props.onAmountChange(t)},c.state={inputValue:""},c}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:this.props.item.name}),Object(h.jsx)("span",{children:this.props.item.price}),Object(h.jsx)("input",{type:"number",min:"1",onChange:this.handleChange}),Object(h.jsx)("button",{onClick:this.handleClick,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]},this.props.item.id)}}]),n}(r.a.Component),l=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).handleAmountChange=function(e){t.props.onAmountChange(e)},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsx)("div",{children:this.props.goods.map((function(e,n){return Object(h.jsx)(d,{item:e,onAmountChange:t.handleAmountChange},e.id)}))})}}]),n}(c.Component),p=n(12),b=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var c;Object(s.a)(this,n),(c=e.call(this,t)).handleAmountChange=function(t){c.setState((function(e,n){var c=[];if(Object.assign(c,e.purchases),c.length>0){var r=c.findIndex((function(e){return e.id===t.id}));console.log("index",r),-1===r?c.push(t):c[r]=t}else c.push(t);return{purchases:c}}))};return c.state={goods:[{id:1,name:"\u0411\u0430\u043d\u0430\u043d",price:10},{id:2,name:"\u042f\u0431\u043b\u043e\u043a\u043e",price:8},{id:3,name:"\u041f\u0430\u043f\u0430\u0439\u044f",price:10,discount:5,discountAmount:3}],purchases:[]},c}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"\u041f\u0435\u0440\u0435\u043b\u0456\u043a \u0442\u043e\u0432\u0430\u0440\u0456\u0432"}),Object(h.jsx)("div",{className:"App-main",children:Object(h.jsx)(l,{goods:this.state.goods,onAmountChange:this.handleAmountChange})}),Object(h.jsx)(p.b,{to:{pathname:"/cart",purchases:this.state.purchases},children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"})]})}}]),n}(r.a.Component),O=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"calculationTotalPrice",value:function(t,e,n,c){return t*c-e*Math.floor(c/n)}},{key:"render",value:function(){var t=this.props.item,e=t.name,n=t.price,c=t.discount,a=t.discountAmount,i=t.amount;return Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsx)("td",{children:e}),Object(h.jsx)("td",{children:i}),Object(h.jsx)("td",{children:n}),Object(h.jsx)("td",{children:void 0!==c?this.calculationTotalPrice(n,c,a,i):n*i})]})}}]),n}(r.a.Component),m=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)(r.a.Fragment,{children:this.props.purchase.map((function(t,e){return Object(h.jsx)("tr",{children:Object(h.jsx)(O,{item:t})},t.id)}))})}}]),n}(c.Component),x=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).state={purchases:t.location.purchases},c}return Object(o.a)(n,[{key:"render",value:function(){return console.log("this.props",this.props),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(h.jsx)("div",{children:Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f"}),Object(h.jsx)("td",{children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c"}),Object(h.jsx)("td",{children:"\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044c"}),Object(h.jsx)("td",{children:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c \u0437\u0456 \u0437\u043d\u0438\u0436\u043a\u043e\u044e"})]})}),Object(h.jsx)("tbody",{children:Object(h.jsx)(m,{purchase:this.state.purchases})})]})})]})}}]),n}(r.a.Component),f=n(2);var v=function(){return Object(h.jsx)(p.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(f.c,{children:[Object(h.jsx)(f.a,{exact:!0,path:"/",component:b}),Object(h.jsx)(f.a,{exact:!0,path:"/cart",component:x})]})})})};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.28039fb0.chunk.js.map
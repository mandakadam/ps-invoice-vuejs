(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["generate_invoice"],{"28a5":function(t,e,i){"use strict";var a=i("aae3"),n=i("cb7c"),r=i("ebd6"),o=i("0390"),s=i("9def"),c=i("5f1b"),u=i("520a"),l=i("79e5"),d=Math.min,v=[].push,p="split",h="length",f="lastIndex",m=4294967295,g=!l((function(){RegExp(m,"y")}));i("214f")("split",2,(function(t,e,i,l){var b;return b="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[h]||2!="ab"[p](/(?:ab)*/)[h]||4!="."[p](/(.?)(.?)/)[h]||"."[p](/()()/)[h]>1||""[p](/.?/)[h]?function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!a(t))return i.call(n,t,e);var r,o,s,c=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,p=void 0===e?m:e>>>0,g=new RegExp(t.source,l+"g");while(r=u.call(g,n)){if(o=g[f],o>d&&(c.push(n.slice(d,r.index)),r[h]>1&&r.index<n[h]&&v.apply(c,r.slice(1)),s=r[0][h],d=o,c[h]>=p))break;g[f]===r.index&&g[f]++}return d===n[h]?!s&&g.test("")||c.push(""):c.push(n.slice(d)),c[h]>p?c.slice(0,p):c}:"0"[p](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(i,a){var n=t(this),r=void 0==i?void 0:i[e];return void 0!==r?r.call(i,n,a):b.call(String(n),i,a)},function(t,e){var a=l(b,t,this,e,b!==i);if(a.done)return a.value;var u=n(t),v=String(this),p=r(u,RegExp),h=u.unicode,f=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(g?"y":"g"),_=new p(g?u:"^(?:"+u.source+")",f),w=void 0===e?m:e>>>0;if(0===w)return[];if(0===v.length)return null===c(_,v)?[v]:[];var S=0,y=0,x=[];while(y<v.length){_.lastIndex=g?y:0;var C,$=c(_,g?v:v.slice(y));if(null===$||(C=d(s(_.lastIndex+(g?0:y)),v.length))===S)y=o(v,y,h);else{if(x.push(v.slice(S,y)),x.length===w)return x;for(var O=1;O<=$.length-1;O++)if(x.push($[O]),x.length===w)return x;y=S=C}}return x.push(v.slice(S)),x}]}))},"3ff0":function(t,e,i){},"81b2":function(t,e,i){(function(i){
/*!
 * Number-To-Words util
 * @version v1.2.4
 * @link https://github.com/marlun78/number-to-words
 * @author Martin Eneqvist (https://github.com/marlun78)
 * @contributors Aleksey Pilyugin (https://github.com/pilyugin),Jeremiah Hall (https://github.com/jeremiahrhall),Adriano Melo (https://github.com/adrianomelo),dmrzn (https://github.com/dmrzn)
 * @license MIT
 */
!function(){"use strict";"object"==typeof self&&self.self===self&&self||"object"==typeof i&&i.global;var a=9007199254740991;function n(t){return!("number"!=typeof t||t!=t||t===1/0||t===-1/0)}function r(t){return"number"==typeof t&&Math.abs(t)<=a}var o=/(hundred|thousand|(m|b|tr|quadr)illion)$/,s=/teen$/,c=/y$/,u=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,l={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};function d(t){return o.test(t)||s.test(t)?t+"th":c.test(t)?t.replace(c,"ieth"):u.test(t)?t.replace(u,v):t}function v(t,e){return l[e]}var p=10,h=100,f=1e3,m=1e6,g=1e9,b=1e12,_=1e15,w=9007199254740992,S=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],y=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function x(t,e){var i,a=parseInt(t,10);if(!n(a))throw new TypeError("Not a finite number: "+t+" ("+typeof t+")");if(!r(a))throw new RangeError("Input is not a safe number, it’s either too large or too small.");return i=function t(e){var i,a,n=arguments[1];return 0===e?n?n.join(" ").replace(/,$/,""):"zero":(n||(n=[]),e<0&&(n.push("minus"),e=Math.abs(e)),e<20?(i=0,a=S[e]):e<h?(i=e%p,a=y[Math.floor(e/p)],i&&(a+="-"+S[i],i=0)):e<f?(i=e%h,a=t(Math.floor(e/h))+" hundred"):e<m?(i=e%f,a=t(Math.floor(e/f))+" thousand,"):e<g?(i=e%m,a=t(Math.floor(e/m))+" million,"):e<b?(i=e%g,a=t(Math.floor(e/g))+" billion,"):e<_?(i=e%b,a=t(Math.floor(e/b))+" trillion,"):e<=w&&(i=e%_,a=t(Math.floor(e/_))+" quadrillion,"),n.push(a),t(i,n))}(a),e?d(i):i}var C={toOrdinal:function(t){var e=parseInt(t,10);if(!n(e))throw new TypeError("Not a finite number: "+t+" ("+typeof t+")");if(!r(e))throw new RangeError("Input is not a safe number, it’s either too large or too small.");var i=String(e),a=Math.abs(e%100),o=11<=a&&a<=13,s=i.charAt(i.length-1);return i+(o?"th":"1"===s?"st":"2"===s?"nd":"3"===s?"rd":"th")},toWords:x,toWordsOrdinal:function(t){return d(x(t))}};t.exports&&(e=t.exports=C),e.numberToWords=C}()}).call(this,i("c8ba"))},"9bfd":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{on:{submit:t.handleSubmit}},[i("div",{staticClass:"container no-print"},[i("div",{staticClass:"d-flex justify-content-between "},[i("h3",[t._v("Invoice")]),i("div",[i("button",{staticClass:"btn btn-outline-secondary btn-sm",on:{click:function(e){return t.$router.go(-1)}}},[i("b-icon-arrow-left"),t._v(" Back")],1)])])]),i("div",{staticClass:"invoice-box"},[t._v("\n    "+t._s(t.dataSource)+"\n  "),i("table",{attrs:{width:"100%"}},[i("tr",[t._m(0),t._m(1),i("td",{attrs:{width:"2%"}},[t._v(" ")]),i("td",{staticClass:"page-wrap",attrs:{valign:"top"}},[i("h2",{staticClass:"page-head"},[t._v("Invoice")]),i("table",{staticClass:"tbl",attrs:{width:"100%"}},[i("tr",[i("td",{staticClass:"meta-head",attrs:{width:"40%"}},[t._v("Invoice #")]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSource.invoice_no,expression:"dataSource.invoice_no"}],staticClass:"input",attrs:{disabled:"modify"==t.scope,required:"",type:"number",name:""},domProps:{value:t.dataSource.invoice_no},on:{input:function(e){e.target.composing||t.$set(t.dataSource,"invoice_no",e.target.value)}}})])]),i("tr",[i("td",{staticClass:"meta-head"},[t._v("Date")]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSource.invoice_date,expression:"dataSource.invoice_date"}],staticClass:"input",attrs:{required:"",type:"date",value:""},domProps:{value:t.dataSource.invoice_date},on:{input:function(e){e.target.composing||t.$set(t.dataSource,"invoice_date",e.target.value)}}})])])])])])]),i("div",{staticStyle:{padding:"5px 10px",border:"solid 1px #f44336","margin-top":"10px"}},[i("table",{attrs:{width:"100%"}},[i("tr",[i("td",{attrs:{width:"60%",valign:"top"}},[i("div",[i("b",[t._v("Bill To: ")]),i("span",{staticStyle:{color:"#f44336 !important"},attrs:{id:"name"}},[t._v(t._s(t.dataSource.name))])]),t.dataSource.contact?i("div",[i("b",[t._v("Contact: ")]),i("span",[t._v(t._s(t.dataSource.contact))])]):t._e(),t.dataSource.address?i("div",[i("b",[t._v("Address: ")]),i("span",[t._v(t._s(t.dataSource.address))])]):t._e(),t.dataSource.gst?i("div",[i("b",[t._v("GST Number: "+t._s(t.dataSource.gst)+" ")])]):t._e(),t.dataSource.pan?i("div",[i("b",[t._v("PAN Number: "+t._s(t.dataSource.pan)+" ")])]):t._e()])])])]),i("table",{staticClass:"tbl",attrs:{cellpadding:"0",cellspacing:"0"}},[t._m(2),t._l(t.dataSource.items,(function(e,a){return i("tr",{key:a},[i("td",{attrs:{width:"40%"}},[i("div",{staticStyle:{display:"flex"}},[i("div",[i("button",{staticClass:"button  no-print",attrs:{title:"Remove row"},on:{click:function(i){return t.deleteRow(e)}}},[t._v("\n                      X\n                  ")])]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"item.description"}],staticClass:"input",attrs:{cols:"30",rows:"1"},domProps:{value:e.description},on:{input:function(i){i.target.composing||t.$set(e,"description",i.target.value)}}})])]),i("td",{staticStyle:{"text-align":"right"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"item.price"}],staticClass:"input",staticStyle:{"text-align":"right"},attrs:{type:"text"},domProps:{value:e.price},on:{input:function(i){i.target.composing||t.$set(e,"price",i.target.value)}}})]),i("td",{staticStyle:{"text-align":"right"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.quantity,expression:"item.quantity"}],staticClass:"input",staticStyle:{"text-align":"right"},attrs:{type:"text"},domProps:{value:e.quantity},on:{input:function(i){i.target.composing||t.$set(e,"quantity",i.target.value)}}})]),i("td",{staticStyle:{"text-align":"right"},attrs:{width:"20%"}},[i("b",[t._v(t._s(t._f("currency")(e.price*e.quantity)))])])])})),i("tr",{staticClass:"no-print"},[i("td",{attrs:{colspan:"4"}},[i("button",{staticClass:"button btn-add-row",attrs:{type:"button"},on:{click:t.addRow}},[t._v("Add row")])])])],2),i("table",{staticClass:"tbl",attrs:{cellpadding:"0",cellspacing:"0"}},[i("tr",{staticClass:"total"},[i("td",{staticClass:"total-value"},[i("b",[t._v("Rs. "),i("span",[t._v(t._s(t._f("currency")(t.total)))])]),i("div",{staticClass:"inWords",attrs:{name:""}},[t._v(t._s(t._f("toWords")(t.total))+" Only")])])])]),i("h4",{staticClass:"page-head"},[t._v("Payment Information")]),i("table",{attrs:{width:"100%"}},[i("tr",[t._m(3),i("td",{staticStyle:{"text-align":"right"}},[i("br"),t.showSign?i("div",{staticStyle:{position:"relative"}},[i("button",{staticClass:"button no-print",attrs:{title:"Remove Sign"},on:{click:function(e){t.showSign=!1}}},[t._v("\n            X\n          ")]),i("div",[t._v("Thank you!")]),t._m(4),i("div",[t._v("Ponmariappan Soundrapandian")])]):t._e()])])]),i("div",{staticClass:"no-print"},[i("div",{staticClass:"d-flex"},["create"==t.scope?i("button",{staticClass:"btn btn-primary mr-3",attrs:{type:"submit"}},[t._v("Create Invoice")]):i("div",[i("button",{staticClass:"btn btn-success mr-3",attrs:{type:"submit"}},[t._v("Update Invoice")]),i("button",{staticClass:"btn btn-primary mr-3",on:{click:t.printInvoice}},[t._v("Print Invoice")])]),i("router-link",{staticClass:"btn btn-outline-danger  mr-3",attrs:{to:"/clients"}},[t._v("Close")])],1)])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{attrs:{width:"120",align:"center"}},[a("img",{attrs:{id:"image",src:i("bff4"),alt:"logo",width:"100"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("td",{attrs:{width:"290",valign:"top"}},[i("h4",{staticStyle:{color:"#3F51B5 !important","font-size":"17px"}},[t._v("Ponmariappan Soundrapandian")]),i("p",[i("b",[t._v("Address:")]),t._v(" Flat No. 302, Plot No. 67,"),i("br"),t._v(" Hari Om Residency, Taj Road, "),i("br"),t._v("Seawoods, Navi Mumbai - 400706.\n        ")]),i("p",[i("b",[t._v("Email:")]),t._v(" ponmariappan1@gmail.com"),i("br"),i("b",[t._v("Mob:")]),t._v(" 9619801438"),i("br")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("Item")]),i("th",{staticStyle:{"text-align":"right"}},[t._v("Unit Cost")]),i("th",{staticStyle:{"text-align":"right"}},[t._v("Quantity")]),i("th",{staticStyle:{"text-align":"right"}},[t._v("Price")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("td",{attrs:{width:"50%"}},[i("p",{staticStyle:{"line-height":"20px"}},[i("b",[t._v("Name:")]),t._v(" Ponmariappan Soundrapandian"),i("br"),i("b",[t._v("AC No:")]),t._v(" 006310310000380"),i("br"),i("b",[t._v("IFSC CODE:")]),t._v(" BKID0000009"),i("br"),i("b",[t._v("Bank:")]),t._v(" Bank Of India"),i("br"),i("b",[t._v("Branch:")]),t._v(" CHEMBUR"),i("br"),i("b",[t._v("Pan No:")]),t._v(" BTTPS7819A\n        ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sign_wrp"},[a("a",{attrs:{href:"javascript:void(0);",rel:"nofollow"}},[a("img",{attrs:{width:"150",src:i("f6ad")}})])])}],r=(i("8e6e"),i("ac6a"),i("456d"),i("28a5"),i("ade3"));i("3ff0");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var c=i("81b2"),u={data:function(){return{dataSource:{invoice_date:new Date,status:0,items:[{description:"Image Retouching",quantity:1,price:300}],scope:"create"},showSign:!0}},created:function(){console.log(this.$route.params),this.fetchClientData(),this.$route.params.invoice_ref?(this.modifyRead(),this.scope="modify"):(this.fetchData(),this.scope="create")},computed:{total:function(){var t=this.dataSource.items.reduce((function(t,e){return t+e.price*e.quantity}),0);return this.dataSource.total=t,t}},filters:{currency:function(t){return t?t.toFixed(2):""},toWords:function(t){return t?c.toWords(t):""}},watch:{$route:function(t,e){window.location.reload()},"dataSource.invoice_no":function(t){this.dataSource.invoice_ref="".concat(this.dataSource.client_id,"_").concat(t)}},methods:{handleSubmit:function(t){t.preventDefault(),"create"==this.scope?this.createInvoice():this.updateInvoice()},fetchClientData:function(){var t=this;this.$store.commit("loading",!0),this.$http.post("/api/clients/read/".concat(this.$route.params.id)).then((function(e){t.$store.commit("loading",!1),t.dataSource=s(s({},t.dataSource),e.data)})).catch((function(e){t.showError(e)}))},fetchData:function(){var t=this,e=this.dataSource.invoice_date||new Date;this.dataSource.invoice_date=new Date(e.getTime()-60*e.getTimezoneOffset()*1e3).toISOString().split("T")[0],this.$store.commit("loading",!0),this.$http.post("/api/clients/read/".concat(this.$route.params.id)).then((function(e){t.$store.commit("loading",!1),t.dataSource=s(s({},t.dataSource),e.data)})).catch((function(e){t.showError(e)}))},modifyRead:function(){var t=this;this.$store.commit("loading",!0),this.$http.post("/api/client_details/read/".concat(this.$route.params.invoice_ref)).then((function(e){t.$store.commit("loading",!1),t.dataSource=e.data;var i=new Date(t.dataSource.invoice_date);t.dataSource.invoice_date=new Date(i.getTime()-60*i.getTimezoneOffset()*1e3).toISOString().split("T")[0]})).catch((function(e){t.showError(e)}))},createInvoice:function(){var t=this;for(var e in this.dataSource)delete this.dataSource["_id"],delete this.dataSource["__v"];this.$store.commit("loading",!0),this.$http.post("/api/client_details/create",this.dataSource).then((function(e){t.showSuccess(e),t.scope="modify",t.$bvModal.msgBoxOk("Action completed").then((function(e){e&&t.$router.push({path:"/generate_invoice/".concat(t.$route.params.id,"/").concat(t.dataSource.invoice_ref)})})).catch((function(t){}))})).catch((function(e){t.showError(e)}))},updateInvoice:function(){var t=this;this.$store.commit("loading",!0),this.$http.put("/api/client_details/update/".concat(this.$route.params.invoice_ref),this.dataSource).then((function(e){t.showSuccess(e)})).catch((function(e){t.showError(e)}))},addRow:function(){this.dataSource.items.push({description:"Image Retouching",quantity:1,price:0})},deleteRow:function(t){var e=this.dataSource.items.indexOf(t);e>-1&&this.dataSource.items.splice(e,1)},printInvoice:function(){this.updateInvoice(),window.print()}}},l=u,d=i("2877"),v=Object(d["a"])(l,a,n,!1,null,null,null);e["default"]=v.exports},aae3:function(t,e,i){var a=i("d3f4"),n=i("2d95"),r=i("2b4c")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==n(t))}},bff4:function(t,e,i){t.exports=i.p+"img/logo1.f7f2ea49.jpg"},f6ad:function(t,e,i){t.exports=i.p+"img/sign.342a8db1.jpg"}}]);
//# sourceMappingURL=generate_invoice.cb4303b1.js.map
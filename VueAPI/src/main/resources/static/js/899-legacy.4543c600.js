"use strict";(self["webpackChunkvue_board_bootstrap"]=self["webpackChunkvue_board_bootstrap"]||[]).push([[899],{26899:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"bv-example-row mt-3"},[n("b-row",[n("b-col",[n("b-alert",{attrs:{show:""}},[n("h3",[t._v("질문 목록")])])],1)],1),n("b-row",{staticClass:"mb-1 row justify-content-end"},[n("b-col",{attrs:{md:"1.5"}},[n("b-form-select",{attrs:{options:t.options},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1),n("b-col",{staticClass:"text-right",attrs:{md:"1.5"}},[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.moveWrite()}}},[t._v("글쓰기")])],1)],1),n("b-row",[t.articles.length?n("b-col",[n("b-table",{attrs:{id:"QnA-table",items:t.articles,fields:t.fields,"per-page":t.perPage,"current-page":t.currentPage,hover:"",responsive:"",striped:"","head-variant":"dark"},on:{"row-clicked":t.viewArticle},scopedSlots:t._u([{key:"cell(subject)",fn:function(e){return[n("router-link",{attrs:{to:{name:"questionDetail",params:{articleno:e.item.articleno}}}},[t._v(t._s(e.item.subject))])]}}],null,!1,1110890457)}),n("b-pagination",{attrs:{"total-rows":t.articles.length,"per-page":t.perPage,"aria-controls":"QnA-table","first-number":"","last-number":""},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1):t._e()],1)],1)},r=[],o=n(60803),c={name:"QuestionList",data:function(){return{articles:[],fields:[{key:"articleno",label:"글번호",tdClass:"tdClass",sortable:!0},{key:"subject",label:"제목",tdClass:"tdSubject",sortable:!0},{key:"userid",label:"작성자",tdClass:"tdClass",sortable:!0},{key:"regtime",label:"작성일",tdClass:"tdClass",sortable:!0},{key:"hit",label:"조회수",tdClass:"tdClass",sortable:!0}],perPage:5,currentPage:1,options:[{value:5,text:"5개"},{value:10,text:"10개"},{value:20,text:"20개"}]}},created:function(){var t=this,e={pg:1,spp:20,key:null,word:null};(0,o.jC)(e,(function(e){t.articles=e.data,console.log(e)}),(function(t){console.log(t)}))},methods:{moveWrite:function(){this.$router.push({name:"questionRegister"})}}},s=c,l=n(1001),i=(0,l.Z)(s,a,r,!1,null,null,null),u=i.exports},60803:function(t,e,n){n.d(e,{Es:function(){return u},G:function(){return p},KL:function(){return f},cc:function(){return d},cn:function(){return l},fq:function(){return s},hY:function(){return c},jC:function(){return o},jX:function(){return i},zj:function(){return b}});n(38862);var a=n(86927),r=(0,a.b)();function o(t,e,n){r.get("/qboard/",{params:t},console.log("")).then(e).catch(n)}function c(t,e,n){r.post("/qboard",JSON.stringify(t)).then(e).catch(n)}function s(t,e,n){r.get("/qboard/".concat(t)).then(e).catch(n)}function l(t,e,n){r.put("/qboard/".concat(t.articleno),JSON.stringify(t)).then(e).catch(n)}function i(t,e,n){r.delete("/qboard/".concat(t)).then(e).catch(n)}function u(t,e,n){r.get("/aboard/".concat(t)).then(e).catch(n)}function b(t,e,n){r.get("/aboard/answer/".concat(t)).then(e).catch(n)}function f(t,e,n){r.post("/aboard",JSON.stringify(t)).then(e).catch(n)}function d(t,e,n){r.put("/aboard/".concat(t.articleno),JSON.stringify(t)).then(e).catch(n)}function p(t,e,n){r.delete("/aboard/".concat(t)).then(e).catch(n)}}}]);
//# sourceMappingURL=899-legacy.4543c600.js.map
"use strict";(self["webpackChunkvue_board_bootstrap"]=self["webpackChunkvue_board_bootstrap"]||[]).push([[115],{6115:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"bv-example-row mt-3"},[n("b-row",[n("b-col",[n("b-alert",{attrs:{show:""}},[n("h3",[t._v("글수정")])])],1)],1),n("answer-input-item",{attrs:{type:"modify"}})],1)},s=[],i=n(6559),o={name:"AnswerWrite",components:{AnswerInputItem:i.Z}},a=o,c=n(1001),u=(0,c.Z)(a,r,s,!1,null,null,null),l=u.exports},6559:function(t,e,n){n.d(e,{Z:function(){return f}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",{staticClass:"mb-1"},[n("b-col",{staticStyle:{"text-align":"left"}},[n("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[n("b-form-group",{attrs:{id:"userid-group",label:"작성자:","label-for":"userid",description:"작성자를 입력하세요."}},[n("b-form-input",{ref:"userid",attrs:{id:"userid",disabled:"",type:"text",required:"",placeholder:"작성자 입력..."},model:{value:t.article.userid,callback:function(e){t.$set(t.article,"userid",e)},expression:"article.userid"}})],1),n("b-form-group",{attrs:{id:"content-group",label:"내용:","label-for":"content"}},[n("b-form-textarea",{ref:"content",attrs:{id:"content",placeholder:"내용 입력...",rows:"10","max-rows":"15"},model:{value:t.article.content,callback:function(e){t.$set(t.article,"content",e)},expression:"article.content"}})],1),"register"===this.type?n("b-button",{staticClass:"m-1",attrs:{type:"submit",variant:"primary"}},[t._v("글작성")]):n("b-button",{staticClass:"m-1",attrs:{type:"submit",variant:"primary"}},[t._v("글수정")]),n("b-button",{staticClass:"m-1",attrs:{type:"reset",variant:"danger"}},[t._v("초기화")])],1)],1)],1)},s=[],i=n(803),o=n(4665);const a="memberStore";var c={name:"AnswerInputItem",data(){return{article:{answerno:0,userid:"",content:""}}},props:{type:{type:String},questionno:Number},computed:{...(0,o.rn)(a,["userInfo"])},created(){"modify"===this.type?((0,i.zj)(this.$route.params.answerno,(({data:t})=>{this.article=t}),(t=>{console.log(t)})),this.isUserid=!0):this.article.userid=this.userInfo.userid},methods:{onSubmit(t){t.preventDefault();let e=!0,n="";!this.article.userid&&(n="작성자 입력해주세요",e=!1,this.$refs.userid.focus()),e&&!this.article.content&&(n="내용 입력해주세요",e=!1,this.$refs.content.focus()),e?"register"===this.type?this.registArticle():this.modifyArticle():alert(n)},onReset(t){t.preventDefault(),this.article.answerno=0,this.article.content="",this.$router.push({name:"answerList"})},registArticle(){(0,i.KL)({questionno:this.$route.params.questionno,userid:this.article.userid,content:this.article.content},(({data:t})=>{let e="등록 처리시 문제가 발생했습니다.";"success"===t&&(e="등록이 완료되었습니다."),alert(e),this.moveList()}),(t=>{console.log(t)}))},modifyArticle(){(0,i.cc)({answerno:this.article.answerno,questionno:this.$route.params.questionno,userid:this.article.userid,content:this.article.content},(({data:t})=>{let e="수정 처리시 문제가 발생했습니다.";"success"===t&&(e="수정이 완료되었습니다."),alert(e),this.$router.push({name:"questionDetail",params:{articleno:this.$route.params.questionno}})}),(t=>{console.log(t)}))},moveList(){this.$router.push({name:"questionDetail",params:{articleno:this.$route.params.questionno}})}}},u=c,l=n(1001),h=(0,l.Z)(u,r,s,!1,null,null,null),f=h.exports},803:function(t,e,n){n.d(e,{Es:function(){return l},G:function(){return p},KL:function(){return f},cc:function(){return d},cn:function(){return c},fq:function(){return a},hY:function(){return o},jC:function(){return i},jX:function(){return u},zj:function(){return h}});var r=n(6927);const s=(0,r.b)();function i(t,e,n){s.get("/qboard/",{params:t},console.log("")).then(e).catch(n)}function o(t,e,n){s.post("/qboard",JSON.stringify(t)).then(e).catch(n)}function a(t,e,n){s.get(`/qboard/${t}`).then(e).catch(n)}function c(t,e,n){s.put(`/qboard/${t.articleno}`,JSON.stringify(t)).then(e).catch(n)}function u(t,e,n){s.delete(`/qboard/${t}`).then(e).catch(n)}function l(t,e,n){s.get(`/aboard/${t}`).then(e).catch(n)}function h(t,e,n){s.get(`/aboard/answer/${t}`).then(e).catch(n)}function f(t,e,n){s.post("/aboard",JSON.stringify(t)).then(e).catch(n)}function d(t,e,n){s.put(`/aboard/${t.articleno}`,JSON.stringify(t)).then(e).catch(n)}function p(t,e,n){s.delete(`/aboard/${t}`).then(e).catch(n)}}}]);
//# sourceMappingURL=115.d657ebef.js.map
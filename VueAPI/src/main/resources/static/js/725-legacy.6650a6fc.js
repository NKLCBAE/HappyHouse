"use strict";(self["webpackChunkvue_board_bootstrap"]=self["webpackChunkvue_board_bootstrap"]||[]).push([[725],{13725:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"bv-example-row mt-3"},[r("b-row",[r("b-col",[r("b-alert",{attrs:{show:""}},[r("h3",[t._v("글작성")])])],1)],1),r("board-input-item",{attrs:{type:"register"}})],1)},s=[],a=r(61508),n={name:"BoardWrite",components:{BoardInputItem:a.Z}},c=n,o=r(1001),u=(0,o.Z)(c,i,s,!1,null,null,null),l=u.exports},61508:function(t,e,r){r.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",{staticClass:"mb-1"},[r("b-col",{staticStyle:{"text-align":"left"}},[r("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[r("b-form-group",{attrs:{id:"userid-group",label:"작성자:","label-for":"userid",description:"작성자를 입력하세요."}},[r("b-form-input",{attrs:{id:"userid",disabled:t.isUserid,type:"text",required:"",placeholder:"작성자 입력..."},model:{value:t.article.userid,callback:function(e){t.$set(t.article,"userid",e)},expression:"article.userid"}})],1),r("b-form-group",{attrs:{id:"subject-group",label:"제목:","label-for":"subject",description:"제목을 입력하세요."}},[r("b-form-input",{attrs:{id:"subject",type:"text",required:"",placeholder:"제목 입력..."},model:{value:t.article.subject,callback:function(e){t.$set(t.article,"subject",e)},expression:"article.subject"}})],1),r("b-form-group",{attrs:{id:"content-group",label:"내용:","label-for":"content"}},[r("b-form-textarea",{attrs:{id:"content",placeholder:"내용 입력...",rows:"10","max-rows":"15"},model:{value:t.article.content,callback:function(e){t.$set(t.article,"content",e)},expression:"article.content"}})],1),"register"===this.type?r("b-button",{staticClass:"m-1",attrs:{type:"submit",variant:"primary"}},[t._v("글작성")]):r("b-button",{staticClass:"m-1",attrs:{type:"submit",variant:"primary"}},[t._v("글수정")]),r("b-button",{staticClass:"m-1",attrs:{type:"reset",variant:"danger"}},[t._v("초기화")])],1)],1)],1)},s=[],a=r(75748),n={name:"BoardInputItem",data:function(){return{article:{articleno:0,userid:"",subject:"",content:""},isUserid:!1}},props:{type:{type:String}},created:function(){var t=this;"modify"===this.type&&(a.Z.get("/board/".concat(this.$route.params.articleno)).then((function(e){var r=e.data;t.article=r})),this.isUserid=!0)},methods:{onSubmit:function(t){t.preventDefault();var e=!0,r="";!this.article.userid&&(r="작성자 입력해주세요",e=!1,this.$refs.userid.focus()),e&&!this.article.subject&&(r="제목 입력해주세요",e=!1,this.$refs.subject.focus()),e&&!this.article.content&&(r="내용 입력해주세요",e=!1,this.$refs.content.focus()),e?"register"===this.type?this.registArticle():this.modifyArticle():alert(r)},onReset:function(t){t.preventDefault(),this.article.articleno=0,this.article.subject="",this.article.content="",this.$router.push({name:"boardList"})},registArticle:function(){var t=this;a.Z.post("/board",{userid:this.article.userid,subject:this.article.subject,content:this.article.content}).then((function(e){var r=e.data,i="등록 처리시 문제가 발생했습니다.";"success"===r&&(i="등록이 완료되었습니다."),alert(i),t.moveList()}))},modifyArticle:function(){var t=this;a.Z.put("/board/".concat(this.article.articleno),{articleno:this.article.articleno,userid:this.article.userid,subject:this.article.subject,content:this.article.content}).then((function(e){var r=e.data,i="수정 처리시 문제가 발생했습니다.";"success"===r&&(i="수정이 완료되었습니다."),alert(i),t.$router.push({name:"boardList"})}))},moveList:function(){this.$router.push({name:"boardList"})}}},c=n,o=r(1001),u=(0,o.Z)(c,i,s,!1,null,null,null),l=u.exports}}]);
//# sourceMappingURL=725-legacy.6650a6fc.js.map
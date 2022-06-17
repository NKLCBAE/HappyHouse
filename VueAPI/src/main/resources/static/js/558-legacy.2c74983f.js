"use strict";(self["webpackChunkvue_board_bootstrap"]=self["webpackChunkvue_board_bootstrap"]||[]).push([[558],{26558:function(t,e,r){r.r(e),r.d(e,{default:function(){return q}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"bv-example-row mt-3"},[r("b-row",[r("b-col",[r("b-alert",{attrs:{show:""}},[r("h3",[t._v("글보기")])])],1)],1),r("b-row",{staticClass:"mb-1"},[r("b-col",{staticClass:"text-left"},[r("b-button",{attrs:{variant:"outline-primary"},on:{click:t.listArticle}},[t._v("목록")])],1),r("b-col",{staticClass:"text-right"},[r("b-button",{staticClass:"mr-2",attrs:{variant:"outline-info",size:"sm"},on:{click:t.moveModifyArticle}},[t._v("글수정")]),r("b-button",{attrs:{variant:"outline-danger",size:"sm"},on:{click:t.deleteArticle}},[t._v("글삭제")])],1)],1),r("b-row",{staticClass:"mb-1"},[r("b-col",[r("b-card",{staticClass:"mb-2",attrs:{"header-html":"<h3>"+t.article.articleno+".\n        "+t.article.subject+" ["+t.article.hit+"]</h3><div><h6>"+t.article.userid+"</div><div>"+t.article.regtime+"</h6></div>","border-variant":"dark","no-body":""}},[r("b-card-body",{staticClass:"text-left"},[r("div",{domProps:{innerHTML:t._s(t.message)}})])],1)],1)],1),r("answer-list",{attrs:{questionno:t.article.articleno}})],1)},i=[],a=(r(69600),r(74916),r(23123),r(15306),r(75748)),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"bv-example-row mt-3"},[r("b-row",[r("b-col",[r("b-alert",{attrs:{show:""}},[r("h3",[t._v("답글 목록")])])],1)],1),r("b-row",{staticClass:"mb-1"},[r("b-col",{staticClass:"text-right"},[r("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.moveWrite()}}},[t._v("답변쓰기")])],1)],1),r("b-row",[t.articles.length?r("b-col",[r("b-table-simple",{attrs:{hover:"",responsive:""}},[r("b-thead",{attrs:{"head-variant":"dark"}},[r("b-tr",[r("b-th",[t._v("답글")])],1)],1),r("tbody",t._l(t.articles,(function(e){return r("answer-list-item",t._b({key:e.articleno},"answer-list-item",e,!1))})),1)],1)],1):r("b-col",{staticClass:"text-center"},[t._v("질문 목록이 없습니다.")])],1)],1)},o=[],l=(r(9653),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-tr",[r("b-tr",[r("b-td",[t._v("작성자 : "+t._s(t.userid)+" ")]),r("b-td",{staticClass:"text-right"},[t._v(t._s(t._f("dateFormat")(t.regtime)))]),r("b-td",[r("b-button",{attrs:{variant:"outline-primary"},on:{click:t.moveModify}},[t._v("수정")]),r("b-button",{attrs:{variant:"outline-primary"},on:{click:t.moveDelete}},[t._v("삭제")])],1)],1),r("b-tr",{staticClass:"text-left"},[r("b-td",[t._v("답변 : "+t._s(t.content))])],1)],1)}),c=[],u=r(17133),b=r.n(u),m={name:"QuestionListItem",props:{answerno:Number,questionno:Number,userid:String,hit:Number,regtime:String,content:String},filters:{dateFormat:function(t){return b()(new Date(t)).format("YY.MM.DD")}},methods:{moveModify:function(){this.$router.push({name:"answerModify",params:{questionno:this.questionno,answerno:this.answerno}})},moveDelete:function(){this.$router.push({name:"answerDelete",params:{questionno:this.questionno,answerno:this.answerno}})}}},h=m,d=r(1001),v=(0,d.Z)(h,l,c,!1,null,null,null),f=v.exports,p={name:"AnswerList",props:{questionno:Number},components:{AnswerListItem:f},data:function(){return{articles:[]}},created:function(){var t=this;a.Z.get("/aboard/".concat(this.$route.params.articleno)).then((function(e){var r=e.data;t.articles=r}))},methods:{moveWrite:function(){this.$router.push({name:"answerRegister",params:{questionno:this.questionno}})}}},_=p,w=(0,d.Z)(_,s,o,!1,null,null,null),g=w.exports,C={name:"QuestionDetail",data:function(){return{article:{}}},components:{AnswerList:g},computed:{message:function(){return this.article.content?this.article.content.split("\n").join("<br>"):""}},created:function(){var t=this;a.Z.get("/qboard/".concat(this.$route.params.articleno)).then((function(e){var r=e.data;t.article=r}))},methods:{listArticle:function(){this.$router.push({name:"questionList"})},moveModifyArticle:function(){this.$router.replace({name:"questionModify",params:{articleno:this.article.articleno}})},deleteArticle:function(){confirm("정말로 삭제?")&&this.$router.replace({name:"questionDelete",params:{articleno:this.article.articleno}})}}},y=C,k=(0,d.Z)(y,n,i,!1,null,null,null),q=k.exports}}]);
//# sourceMappingURL=558-legacy.2c74983f.js.map
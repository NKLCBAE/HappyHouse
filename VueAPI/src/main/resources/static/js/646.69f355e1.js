"use strict";(self["webpackChunkvue_board_bootstrap"]=self["webpackChunkvue_board_bootstrap"]||[]).push([[646],{646:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"bv-example-row mt-3"},[a("b-row",[a("b-col",[a("b-alert",{attrs:{show:""}},[a("h3",[e._v("글목록")])])],1)],1),a("b-row",[a("b-col",[a("b-alert",{attrs:{show:"",variant:"danger"}},[e._v("삭제처리중...")])],1)],1)],1)},s=[],n=a(5748),o={name:"QuestionDelete",created(){n.Z["delete"](`/aboard/${this.$route.params.answerno}`).then((({data:e})=>{let t="삭제 처리시 문제가 발생했습니다.";"success"===e&&(t="삭제가 완료되었습니다."),alert(t),this.$router.push({name:"questionDetail",params:{articleno:this.$route.params.questionno}})}))}},l=o,u=a(1001),c=(0,u.Z)(l,r,s,!1,null,null,null),i=c.exports}}]);
//# sourceMappingURL=646.69f355e1.js.map
"use strict";(self["webpackChunkvue_board_bootstrap"]=self["webpackChunkvue_board_bootstrap"]||[]).push([[315],{8315:function(e,r,t){t.r(r),t.d(r,{default:function(){return i}});var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("b-container",{staticClass:"bv-example-row mt-3"},[t("b-row",[t("b-col",[t("b-alert",{attrs:{variant:"secondary",show:""}},[t("h3",[e._v("로그인")])])],1)],1),t("b-row",[t("b-col"),t("b-col",{attrs:{cols:"8"}},[t("b-card",{staticClass:"text-center mt-3",staticStyle:{"max-width":"40rem"},attrs:{align:"left"}},[t("b-form",{staticClass:"text-left"},[e.isLoginError?t("b-alert",{attrs:{show:"",variant:"danger"}},[e._v("아이디 또는 비밀번호를 확인하세요.")]):e._e(),t("b-form-group",{attrs:{label:"아이디:","label-for":"userid"}},[t("b-form-input",{attrs:{id:"userid",required:"",placeholder:"아이디 입력...."},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.confirm.apply(null,arguments)}},model:{value:e.user.userid,callback:function(r){e.$set(e.user,"userid",r)},expression:"user.userid"}})],1),t("b-form-group",{attrs:{label:"비밀번호:","label-for":"userpwd"}},[t("b-form-input",{attrs:{type:"password",id:"userpwd",required:"",placeholder:"비밀번호 입력...."},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.confirm.apply(null,arguments)}},model:{value:e.user.userpwd,callback:function(r){e.$set(e.user,"userpwd",r)},expression:"user.userpwd"}})],1),t("b-button",{staticClass:"m-1",attrs:{type:"button",variant:"primary"},on:{click:e.confirm}},[e._v("로그인")]),t("b-button",{staticClass:"m-1",attrs:{type:"button",variant:"success"},on:{click:e.movePage}},[e._v("회원가입")])],1)],1)],1),t("b-col")],1)],1)},a=[],n={name:"MemberLogin",data(){return{isLoginError:!1,user:{userid:"",userpwd:""}}},methods:{confirm(){alert("로그인!!!")},movePage(){this.$router.push({name:"SignUp"})}}},o=n,u=t(1001),l=(0,u.Z)(o,s,a,!1,null,null,null),i=l.exports}}]);
//# sourceMappingURL=315.5c5cdd8f.js.map
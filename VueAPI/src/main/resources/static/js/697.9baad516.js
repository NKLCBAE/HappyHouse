"use strict";(self["webpackChunkvue_board_bootstrap"]=self["webpackChunkvue_board_bootstrap"]||[]).push([[697],{5697:function(e,r,s){s.r(r),s.d(r,{default:function(){return p}});var u=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("b-row",{staticClass:"mb-1"},[s("b-col",{staticStyle:{"text-align":"left"}},[s("b-form",[s("b-form-group",{attrs:{id:"userid-group",label:"ID","label-for":"userid"}},[s("b-form-input",{attrs:{id:"userid",type:"text",required:"",disabled:"",placeholder:"아이디 입력"},model:{value:e.user.userid,callback:function(r){e.$set(e.user,"userid",r)},expression:"user.userid"}})],1),s("b-form-group",{attrs:{id:"userpwd-group",label:"비밀번호","label-for":"userpwd"}},[s("b-form-input",{attrs:{id:"userpwd",type:"password",required:"",placeholder:"비밀번호 입력"},model:{value:e.user.userpwd,callback:function(r){e.$set(e.user,"userpwd",r)},expression:"user.userpwd"}})],1),s("b-form-group",{attrs:{id:"username-group",label:"이름","label-for":"username"}},[s("b-form-input",{attrs:{id:"username",type:"text",required:"",placeholder:"이름 입력"},model:{value:e.user.username,callback:function(r){e.$set(e.user,"username",r)},expression:"user.username"}})],1),s("b-form-group",{attrs:{id:"email-group",label:"이메일","label-for":"email"}},[s("b-form-input",{attrs:{id:"email",type:"text",required:"",placeholder:"이메일 입력"},model:{value:e.user.email,callback:function(r){e.$set(e.user,"email",r)},expression:"user.email"}})],1),s("b-button",{staticClass:"m-1",attrs:{variant:"primary"},on:{click:e.onSubmit}},[e._v("수정")]),s("b-button",{staticClass:"m-1",attrs:{variant:"danger"},on:{click:e.moveMyPage}},[e._v("뒤로가기")])],1)],1)],1)},t=[],a=s(3508),i=s(4665);const o="memberStore";var l={name:"MemberModify",data(){return{user:{userid:"",username:"",userpwd:"",email:"",joindate:""}}},computed:{...(0,i.rn)(o,["userInfo"])},created(){(0,a.FO)(this.userInfo.userid,(e=>{this.user.userid=this.userInfo.userid,this.user.userpwd=e.data.userpwd,this.user.username=this.userInfo.username,this.user.email=this.userInfo.email}),(e=>{console.log("회원정보 가져오던 중 에러 발생",e)}))},methods:{...(0,i.nv)(o,["setUserInfo"]),onSubmit(e){e.preventDefault();let r=!0,s="";!this.user.userpwd&&(s="비밀번호를 입력해주세요",r=!1),r&&!this.user.username&&(s="이름을 입력해주세요",r=!1),r&&!this.user.email&&(s="이메일을 입력해주세요",r=!1),r?this.modifyMember():alert(s)},modifyMember(){(0,a.Pj)({userid:this.user.userid,username:this.user.username,userpwd:this.user.userpwd,email:this.user.email},(({data:e})=>{let r="수정 처리시 문제가 발생했습니다.";"success"===e&&(r="수정이 완료되었습니다.",this.setUserInfo({username:this.user.username,email:this.user.email,joindate:this.userInfo.joindate,userid:this.user.userid})),alert(r),this.moveMyPage()}),(e=>{console.log(e)}))},moveMyPage(){this.$router.push({name:"mypage",params:{userid:this.userInfo.userid}})}}},n=l,d=s(1001),m=(0,d.Z)(n,u,t,!1,null,null,null),p=m.exports}}]);
//# sourceMappingURL=697.9baad516.js.map
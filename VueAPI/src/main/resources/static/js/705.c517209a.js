"use strict";(self["webpackChunkvue_board_bootstrap"]=self["webpackChunkvue_board_bootstrap"]||[]).push([[705],{8705:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"bv-example-row mt-3"},[r("b-row",[r("b-col",[r("b-alert",{attrs:{show:""}},[r("h3",[e._v("정말로 탈퇴하시겠습니까?")]),r("br"),r("div",{attrs:{align:"center"}},[r("b-row",{staticClass:"mb-5"},[r("b-col",[r("b-button",{attrs:{variant:"outline-danger"},on:{click:e.deleteMember}},[e._v("Yes")])],1),r("b-col",[r("b-button",{attrs:{variant:"outline-primary"},on:{click:e.moveMyPage}},[e._v("No")])],1)],1)],1)])],1)],1)],1)},s=[],a=r(3508),n=r(4665);const u="memberStore";var i={name:"MemberDelete",computed:{...(0,n.rn)(u,["isLogin","userInfo"])},created(){},methods:{...(0,n.OI)(u,["SET_IS_LOGIN","SET_USER_INFO"]),onClickLogout(){this.SET_IS_LOGIN(!1),this.SET_USER_INFO(null),sessionStorage.removeItem("access-token"),"/"!=this.$route.path&&this.$router.push({name:"home"})},deleteMember(){console.log(this.$route.params.userid),(0,a.EP)(this.$route.params.userid,(()=>{alert("탈퇴가 완료되었습니다"),this.onClickLogout()}))},moveMyPage(){this.$router.push({name:"mypage",params:{userid:this.$route.params.userid}})}}},l=i,c=r(1001),m=(0,c.Z)(l,o,s,!1,null,null,null),b=m.exports}}]);
//# sourceMappingURL=705.c517209a.js.map
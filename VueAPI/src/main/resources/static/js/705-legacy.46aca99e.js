"use strict";(self["webpackChunkvue_board_bootstrap"]=self["webpackChunkvue_board_bootstrap"]||[]).push([[705],{58705:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"bv-example-row mt-3"},[r("b-row",[r("b-col",[r("b-alert",{attrs:{show:""}},[r("h3",[e._v("정말로 탈퇴하시겠습니까?")]),r("br"),r("div",{attrs:{align:"center"}},[r("b-row",{staticClass:"mb-5"},[r("b-col",[r("b-button",{attrs:{variant:"outline-danger"},on:{click:e.deleteMember}},[e._v("Yes")])],1),r("b-col",[r("b-button",{attrs:{variant:"outline-primary"},on:{click:e.moveMyPage}},[e._v("No")])],1)],1)],1)])],1)],1)],1)},s=[],n=r(93019),a=r(73508),u=r(34665),i="memberStore",l={name:"MemberDelete",computed:(0,n.Z)({},(0,u.rn)(i,["isLogin","userInfo"])),created:function(){},methods:(0,n.Z)((0,n.Z)({},(0,u.OI)(i,["SET_IS_LOGIN","SET_USER_INFO"])),{},{onClickLogout:function(){this.SET_IS_LOGIN(!1),this.SET_USER_INFO(null),sessionStorage.removeItem("access-token"),"/"!=this.$route.path&&this.$router.push({name:"home"})},deleteMember:function(){var e=this;console.log(this.$route.params.userid),(0,a.EP)(this.$route.params.userid,(function(){alert("탈퇴가 완료되었습니다"),e.onClickLogout()}))},moveMyPage:function(){this.$router.push({name:"mypage",params:{userid:this.$route.params.userid}})}})},c=l,m=r(1001),b=(0,m.Z)(c,o,s,!1,null,null,null),h=b.exports}}]);
//# sourceMappingURL=705-legacy.46aca99e.js.map
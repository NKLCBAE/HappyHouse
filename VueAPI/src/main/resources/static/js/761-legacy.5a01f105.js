"use strict";(self["webpackChunkvue_board_bootstrap"]=self["webpackChunkvue_board_bootstrap"]||[]).push([[761],{43761:function(e,t,s){s.r(t),s.d(t,{default:function(){return O}});var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",{staticClass:"bv-example-row mt-3 text-center"},[s("h3",{staticClass:"underline-orange"},[s("b-icon",{attrs:{icon:"house-fill"}}),e._v(" House Service ")],1),s("b-row",[s("b-col",[s("house-search-bar")],1)],1),s("b-row",[s("b-col",{attrs:{cols:"6",align:"left"}},[s("house-list")],1),s("b-col",{attrs:{cols:"6"}},[s("house-detail")],1)],1)],1)},n=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-row",{staticClass:"mt-4 mb-4 text-center"},[s("b-col",{staticClass:"sm-3"},[s("b-form-select",{attrs:{options:e.sidos},on:{change:e.gugunList},model:{value:e.sidoCode,callback:function(t){e.sidoCode=t},expression:"sidoCode"}})],1),s("b-col",{staticClass:"sm-3"},[s("b-form-select",{attrs:{options:e.guguns},on:{change:e.searchApt},model:{value:e.gugunCode,callback:function(t){e.gugunCode=t},expression:"gugunCode"}})],1)],1)},a=[],u=s(93019),l=s(34665),i={name:"HouseSearchBar",data:function(){return{sidoCode:null,gugunCode:null}},computed:(0,u.Z)({},(0,l.rn)(["sidos","guguns","houses"])),created:function(){this.CLEAR_SIDO_LIST(),this.getSido()},methods:(0,u.Z)((0,u.Z)((0,u.Z)({},(0,l.nv)(["getSido","getGugun","getHouseList"])),(0,l.OI)(["CLEAR_SIDO_LIST","CLEAR_GUGUN_LIST"])),{},{gugunList:function(){console.log(this.sidoCode),this.CLEAR_GUGUN_LIST(),this.gugunCode=null,this.sidoCode&&this.getGugun(this.sidoCode)},searchApt:function(){this.gugunCode&&this.getHouseList(this.gugunCode)}})},c=i,h=s(1001),b=(0,h.Z)(c,r,a,!1,null,null,null),g=b.exports,d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.houses&&0!=e.houses.length?s("b-container",{staticClass:"bv-example-row mt-3"},e._l(e.houses,(function(e,t){return s("house-list-item",{key:t,attrs:{house:e}})})),1):s("b-container",{staticClass:"bv-example-row mt-3"},[s("b-row",[s("b-col",[s("b-alert",{attrs:{show:""}},[e._v("주택 목록이 없습니다.")])],1)],1)],1)},m=[],_=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-row",{staticClass:"m-2",class:{"mouse-over-bgcolor":e.isColor},on:{click:e.selectHouse,mouseover:function(t){return e.colorChange(!0)},mouseout:function(t){return e.colorChange(!1)}}},[s("b-col",{staticClass:"text-center align-self-center",attrs:{cols:"2"}},[s("b-img",{attrs:{thumbnail:"",src:"https://picsum.photos/250/250/?image=58",alt:"Image 1"}})],1),s("b-col",{staticClass:"align-self-center",attrs:{cols:"10"}},[e._v(" ["+e._s(e.house.일련번호)+"] "+e._s(e.house.아파트)+" ")])],1)},f=[],p={name:"HouseListItem",data:function(){return{isColor:!1}},props:{house:Object},methods:(0,u.Z)((0,u.Z)({},(0,l.nv)(["detailHouse"])),{},{selectHouse:function(){console.log("listRow : ",this.house),this.detailHouse(this.house)},colorChange:function(e){this.isColor=e}})},C=p,v=(0,h.Z)(C,_,f,!1,null,"e169150e",null),w=v.exports,H={name:"HouseList",components:{HouseListItem:w},data:function(){return{}},computed:(0,u.Z)({},(0,l.rn)(["houses"]))},L=H,x=(0,h.Z)(L,d,m,!1,null,null,null),Z=x.exports,S=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.house?o("b-container",{staticClass:"bv-example-row"},[o("b-row",[o("b-col",[o("h3",[e._v(e._s(e.house.아파트))])])],1),o("b-row",{staticClass:"mb-2 mt-1"},[o("b-col",[o("b-img",{attrs:{src:s(55961),"fluid-grow":""}})],1)],1),o("b-row",[o("b-col",[o("b-alert",{attrs:{show:"",variant:"secondary"}},[e._v("일련번호 : "+e._s(e.house.일련번호))])],1)],1),o("b-row",[o("b-col",[o("b-alert",{attrs:{show:"",variant:"primary"}},[e._v("아파트 이름 : "+e._s(e.house.아파트)+" ")])],1)],1),o("b-row",[o("b-col",[o("b-alert",{attrs:{show:"",variant:"info"}},[e._v("법정동 : "+e._s(e.house.법정동)+" ")])],1)],1),o("b-row",[o("b-col",[o("b-alert",{attrs:{show:"",variant:"warning"}},[e._v("층수 : "+e._s(e.house.층)+"층")])],1)],1),o("b-row",[o("b-col",[o("b-alert",{attrs:{show:"",variant:"danger"}},[e._v("거래금액 : "+e._s(e._f("price")(1e4*parseInt(e.house.거래금액.replace(",",""))))+"원")])],1)],1)],1):e._e()},I=[],E=(s(74916),s(15306),s(41539),s(39714),{name:"HouseDetail",computed:(0,u.Z)({},(0,l.rn)(["house"])),filters:{price:function(e){return e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):e}}}),k=E,A=(0,h.Z)(k,S,I,!1,null,null,null),G=A.exports,R={name:"HouseView",components:{HouseSearchBar:g,HouseList:Z,HouseDetail:G}},$=R,D=(0,h.Z)($,o,n,!1,null,"15a80a82",null),O=D.exports},55961:function(e,t,s){e.exports=s.p+"img/apt.79c53c6a.png"}}]);
//# sourceMappingURL=761-legacy.5a01f105.js.map
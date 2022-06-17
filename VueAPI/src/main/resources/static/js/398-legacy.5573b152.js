"use strict";(self["webpackChunkvue_board_bootstrap"]=self["webpackChunkvue_board_bootstrap"]||[]).push([[398],{77398:function(e,t,a){a.r(t),a.d(t,{default:function(){return Y}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"bv-example-row mt-3 text-center"},[a("h3",{staticClass:"underline-orange"},[a("b-icon",{attrs:{icon:"house-fill"}}),e._v(" House Service ")],1),a("b-row",[a("b-col",[a("house-search-bar")],1)],1),a("b-row",[a("house-map")],1),a("b-row",[a("b-col",{attrs:{cols:"6",align:"left"}},[a("house-list")],1),a("b-col",{attrs:{cols:"6"}},[a("house-detail")],1)],1)],1)},n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("b-row",{staticClass:"mt-4 mb-4 text-center"},[a("b-col",{staticClass:"sm-3"},[a("b-form-select",{attrs:{options:e.sidos},on:{change:e.gugunList},model:{value:e.sidoCode,callback:function(t){e.sidoCode=t},expression:"sidoCode"}})],1),a("b-col",{staticClass:"sm-3"},[a("b-form-select",{attrs:{options:e.guguns},on:{change:e.dongList},model:{value:e.gugunCode,callback:function(t){e.gugunCode=t},expression:"gugunCode"}})],1),a("b-col",{staticClass:"sm-3"},[a("b-form-select",{attrs:{options:e.dongs},on:{change:e.searchApt},model:{value:e.dongCode,callback:function(t){e.dongCode=t},expression:"dongCode"}})],1)],1),a("b-row",[a("b-input",{attrs:{placeholder:"검색어가 포함된 정보를 가진 아파트들을 검색합니다!"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchAptByText.apply(null,arguments)}},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)],1)},r=[],i=a(93019),l=a(34665),c="houseStore",u={name:"HouseSearchBar",data:function(){return{sidoCode:null,gugunCode:null,dongCode:null,text:""}},computed:(0,i.Z)({},(0,l.rn)(c,["sidos","guguns","dongs","houses"])),created:function(){this.CLEAR_SIDO_LIST(),this.getSido()},methods:(0,i.Z)((0,i.Z)((0,i.Z)({},(0,l.nv)(c,["getSido","getGugun","getDong","getHouseList","getHouseListByText","getCurrentPage"])),(0,l.OI)(c,["CLEAR_SIDO_LIST","CLEAR_GUGUN_LIST","CLEAR_DONG_LIST"])),{},{gugunList:function(){console.log(this.sidoCode),this.CLEAR_GUGUN_LIST(),this.gugunCode=null,this.sidoCode&&this.getGugun(this.sidoCode)},dongList:function(){console.log(this.dongCode),this.CLEAR_DONG_LIST(),this.dongCode=null,this.gugunCode&&this.getDong(this.gugunCode)},searchApt:function(){this.dongCode&&(this.getCurrentPage(1),this.getHouseList(this.dongCode))},searchAptByText:function(){this.text&&(this.getCurrentPage(1),this.getHouseListByText(this.text))}})},p=u,m=a(1001),d=(0,m.Z)(p,o,r,!1,null,null,null),h=d.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.houses&&0!=e.houses.length?a("b-container",{staticClass:"bv-example-row mt-3"},[e._l(e.houses,(function(e,t){return a("house-list-item",{key:t,attrs:{house:e,index:t}})})),a("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage,"first-number":"","last-number":""},nativeOn:{click:function(t){return e.getCurrentPage(e.nowPage)}},model:{value:e.nowPage,callback:function(t){e.nowPage=t},expression:"nowPage"}})],2):a("b-container",{staticClass:"bv-example-row mt-3"},[a("b-row",[a("b-col",[a("b-alert",{attrs:{show:""}},[e._v("주택 목록이 없습니다.")])],1)],1)],1)},v=[],k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return(e.currentPage-1)*e.perPage<=e.index&&e.index<e.currentPage*e.perPage?a("b-row",{staticClass:"m-2",class:{"mouse-over-bgcolor":e.isColor,bgcolor:!e.isColor},on:{click:e.selectHouse,mouseover:function(t){return e.colorChange(!0)},mouseout:function(t){return e.colorChange(!1)}}},[a("b-col",{staticClass:"text-center align-self-center",attrs:{cols:"2"}},[a("b-img",{attrs:{thumbnail:"",src:"https://picsum.photos/250/250/?image=58",alt:"Image 1"}})],1),a("b-col",{staticClass:"align-self-center",attrs:{cols:"10"}},[e._v(" "+e._s(e.index+1-(e.currentPage-1)*e.perPage)+" : "+e._s(e.house.aptName)+" [aptCode : "+e._s(e.house.aptCode)+"] ")])],1):e._e()},f=[],w=(a(9653),"houseStore"),b={name:"HouseListItem",data:function(){return{isColor:!1}},props:{house:Object,index:Number},computed:(0,i.Z)({},(0,l.rn)(w,["currentPage","perPage"])),methods:(0,i.Z)((0,i.Z)({},(0,l.nv)(w,["detailHouse"])),{},{selectHouse:function(){this.detailHouse(this.house)},colorChange:function(e){this.isColor=e}})},C=b,y=(0,m.Z)(C,k,f,!1,null,"1ca35689",null),_=y.exports,x="houseStore",P={name:"HouseList",components:{HouseListItem:_},data:function(){return{nowPage:1}},computed:(0,i.Z)((0,i.Z)({},(0,l.rn)(x,["houses","currentPage","perPage"])),{},{rows:function(){return this.houses.length}}),methods:(0,i.Z)((0,i.Z)({},(0,l.nv)(x,["getCurrentPage"])),{},{changePage:function(){}})},I=P,M=(0,m.Z)(I,g,v,!1,null,null,null),L=M.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.house?s("b-container",{staticClass:"bv-example-row"},[s("b-modal",{attrs:{id:"modal-store",size:"lg",title:"주변상권",scrollable:"",centered:"","header-bg-variant":e.headerBgVariant,"header-text-variant":e.headerTextVariant}},[s("store-modal")],1),s("b-row",[s("b-col",[s("b-alert",{attrs:{show:"",variant:"primary"}},[s("h3",[e._v(e._s(e.house.aptName))])])],1)],1),s("b-row",{staticClass:"mb-2 mt-1"},[s("b-col",[s("b-img",{attrs:{src:a(55961),"fluid-grow":""}})],1)],1),s("b-row",[s("b-col",[s("b-alert",{attrs:{show:"",variant:"secondary"}},[e._v("아파트 코드 : "+e._s(e.house.aptCode))])],1),s("b-col",[s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-store",modifiers:{"modal-store":!0}}],staticClass:"mr-2",attrs:{variant:"primary",size:"lg"}},[e._v("주변 상권")])],1)],1),s("b-row",[s("b-col",[s("b-alert",{attrs:{show:"",variant:"primary"}},[e._v("아파트 이름 : "+e._s(e.house.aptName)+" ")])],1)],1),s("b-row",[s("b-col",[s("b-alert",{attrs:{show:"",variant:"info"}},[e._v("주소 : "+e._s(e.house.sidoName)+" "+e._s(e.house.gugunName)+" "+e._s(e.house.dongName)+" ")])],1)],1),s("b-row",[s("b-col",[s("b-alert",{attrs:{show:"",variant:"warning"}},[e._v("지번 : "+e._s(e.house.jibun))])],1)],1),s("b-row",[s("b-col",[s("b-alert",{attrs:{show:"",variant:"danger"}},[e._v("최근거래금액 : "+e._s(e._f("price")(1e4*parseInt(e.house.recentPrice.replace(",",""))))+"원")])],1)],1),s("b-row",[s("b-col",[s("b-form",[s("label",{staticClass:"e"},[e._v("이 집을 사려면 얼마나 걸릴까?")]),s("b-form-input",{ref:"asset",attrs:{id:"subject",type:"text",required:"",placeholder:"현재 자산을 숫자만 입력하세요"},model:{value:e.asset,callback:function(t){e.asset=t},expression:"asset"}}),s("br"),s("b-form-input",{ref:"save",attrs:{id:"subject",type:"text",required:"",placeholder:"월 평균 저축액을 숫자만 입력하세요"},model:{value:e.save,callback:function(t){e.save=t},expression:"save"}}),s("b-button",{staticClass:"m-3",attrs:{type:"submit",variant:"primary"},on:{click:e.onSubmit}},[e._v("확인")])],1)],1)],1)],1):e._e()},S=[],E=(a(74916),a(15306),a(41539),a(39714),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"bv-example-row mt-3"},[a("b-row",[a("b-input",{attrs:{placeholder:"검색어가 포함된 업종명들을 검색! Enter 눌러서 갱신!"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchStore.apply(null,arguments)}},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),a("div",{attrs:{id:"container2"}},[a("div",{attrs:{id:"rvWrapper2"}},[a("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"roadview2"}}),a("div",{attrs:{id:"close2",title:"로드뷰닫기"},on:{click:e.closeRoadview}},[a("span",{staticClass:"img2"})])]),a("div",{attrs:{id:"mapWrapper2"}},[a("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"map2"}}),a("div",{attrs:{id:"roadviewControl2"},on:{click:e.setRoadviewRoad}})])]),a("b-row",[e.stores.length?a("b-col",[a("b-table",{attrs:{id:"store-table",items:e.stores,fields:e.fields,"per-page":e.perPage,"current-page":e.currentPage,hover:"",responsive:"",striped:"","head-variant":"dark"}}),a("b-pagination",{attrs:{"total-rows":e.stores.length,"per-page":e.perPage,"aria-controls":"store-table","first-number":"","last-number":""},on:{"page-click":e.pageClick},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1):a("b-col",{staticClass:"text-center"},[e._v("목록이 없습니다.")])],1)],1)}),N=[],R=(a(21249),a(56977),a(54747),"houseStore"),Z={data:function(){return{text:"",fields:[{key:"sname",label:"상호",tdClass:"tdClass"},{key:"type",label:"업종명",tdClass:"tdClass"},{key:"dongName",label:"법정동",tdClass:"tdClass"}],perPage:5,currentPage:1,options:[{value:5,text:"5개"},{value:10,text:"10개"},{value:20,text:"20개"}],map:null,markers:[],infowindow:null,customOverlay:null,root:"",selected:5,overlayOn:!1,container:null,mapWrapper:null,mapContainer:null,rvContainer:null,rv:null,rvClient:null,markImage:null,marker:null,mapCenter:null}},mounted:function(){var e=this;if(window.kakao&&window.kakao.maps)this.initMap();else{var t=document.createElement("script");t.onload=function(){return kakao.maps.load(e.initMap)},t.src="//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=".concat("6a58adc7189be28914e48f62abd688e7","&libraries=services"),document.head.appendChild(t)}this.toggleOverlay(!0),this.toggleOverlay(!1),this.searchStore()},computed:(0,i.Z)({},(0,l.rn)(R,["house","stores"])),methods:(0,i.Z)((0,i.Z)({},(0,l.nv)(R,["getStoreList"])),{},{searchStore:function(){this.getStoreList({dongCode:this.house.dongCode,type:this.text}),this.pageClick(1,1)},initMap:function(){var e=this,t=document.getElementById("map2");this.mapCenter=new kakao.maps.LatLng(this.house.lat,this.house.lng);var a={center:this.mapCenter,level:3};this.map=new kakao.maps.Map(t,a),this.infowindow=new kakao.maps.InfoWindow({zIndex:1}),this.container=document.getElementById("container2"),this.mapWrapper=document.getElementById("mapWrapper2"),this.mapContainer=document.getElementById("map2"),this.rvContainer=document.getElementById("roadview2"),this.rv=new kakao.maps.Roadview(this.rvContainer),this.rvClient=new kakao.maps.RoadviewClient,this.markImage=new kakao.maps.MarkerImage("https://t1.daumcdn.net/localimg/localimages/07/2018/pc/roadview_minimap_wk_2018.png",new kakao.maps.Size(26,46),{spriteSize:new kakao.maps.Size(1666,168),spriteOrigin:new kakao.maps.Point(705,114),offset:new kakao.maps.Point(13,46)}),this.marker=new kakao.maps.Marker({image:this.markImage,position:this.mapCenter,draggable:!0}),kakao.maps.event.addListener(this.rv,"position_changed",(function(){var t=new kakao.maps.LatLng(e.rv.getPosition().getLat().toFixed(9),e.rv.getPosition().getLng().toFixed(9));e.map.setCenter(t),e.overlayOn&&e.marker.setPosition(t)})),kakao.maps.event.addListener(this.map,"click",(function(t){if(e.overlayOn){var a=t.latLng;e.marker.setPosition(a),e.toggleRoadview(a)}}))},displayMarkers:function(){var e=this,t=new kakao.maps.LatLngBounds;this.removeMarker();var a=0,s=0;this.stores.forEach((function(n){if(a<(e.currentPage-1)*e.perPage||a>=e.currentPage*e.perPage)a++;else{var o=new kakao.maps.LatLng(1*n.lat,1*n.lng);e.addMarker(o,s),t.extend(o),a++,s++}})),this.map.setBounds(t)},addMarker:function(e,t){var a="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png",s=new kakao.maps.Size(36,37),n={spriteSize:new kakao.maps.Size(36,691),spriteOrigin:new kakao.maps.Point(0,46*t+10),offset:new kakao.maps.Point(13,37)},o=new kakao.maps.MarkerImage(a,s,n),r=new kakao.maps.Marker({position:e,image:o});r.setMap(this.map),this.markers.push(r)},removeMarker:function(){for(var e=0;e<this.markers.length;e++)this.markers[e].setMap(null);this.markers=[]},toggleRoadview:function(e){var t=this;this.rvClient.getNearestPanoId(e,100,(function(a){null===a?t.toggleMapWrapper(!0,e):(t.toggleMapWrapper(!1,e),t.rv.setPanoId(a,e))}))},toggleMapWrapper:function(e,t){e?(this.container.className="",this.map.relayout(),this.map.setCenter(t)):-1===this.container.className.indexOf("view_roadview2")&&(this.container.className="view_roadview2",this.map.relayout(),this.map.setCenter(t))},toggleOverlay:function(e){e?(this.overlayOn=!0,this.map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW),this.marker.setMap(this.map),this.marker.setPosition(this.map.getCenter()),this.toggleRoadview(this.map.getCenter())):(this.overlayOn=!1,this.map.removeOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW),this.marker.setMap(null))},setRoadviewRoad:function(){var e=document.getElementById("roadviewControl2");-1===e.className.indexOf("active")?(e.className="active",this.toggleOverlay(!0)):(e.className="",this.toggleOverlay(!1))},closeRoadview:function(){var e=this.marker.getPosition();this.toggleMapWrapper(!0,e)},pageClick:function(e,t){this.currentPage=t,this.displayMarkers()}})},B=Z,W=(0,m.Z)(B,E,N,!1,null,null,null),T=W.exports,H="houseStore",z={name:"HouseDetail",data:function(){return{asset:"",save:"",year:"",month:"",price:"",assetf:"",savef:"",headerBgVariant:"dark",headerTextVariant:"light"}},components:{StoreModal:T},methods:{onSubmit:function(e){e.preventDefault();var t=!0,a="";!this.asset&&(a="현재 자산을 입력해주세요",t=!1,this.$refs.asset.focus()),t&&!this.save&&(a="월 평균 저축금액을 입력해주세요",t=!1,this.$refs.save.focus()),t?this.result():alert(a)},result:function(){this.price=1e4*this.house.recentPrice.replace(",",""),this.month=parseInt((this.price-this.asset)/this.save),this.year=parseInt(this.month/12),this.month=this.month%12,alert("이 집을 사기 위해서는 "+this.year+"년 "+this.month+"개월이 걸립니다. \n (이자,집값 상승률 반영X)")}},computed:(0,i.Z)({},(0,l.rn)(H,["house"])),filters:{price:function(e){return e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):e}},created:function(){this.price=this.house.recentPrice}},A=z,D=(0,m.Z)(A,O,S,!1,null,null,null),V=D.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("b-row",{staticClass:"float-right"},[a("b-col",{},[a("b-button",{staticClass:"mr-2",attrs:{variant:"outline-info",size:"sm"},on:{click:e.displayMarkers}},[e._v("지도 갱신")])],1),a("b-col",{},[a("b-form-select",{attrs:{options:e.options},on:{change:function(t){return e.getPerPage(e.selected)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1),a("b-row"),a("div",{attrs:{id:"container"}},[a("div",{attrs:{id:"rvWrapper"}},[a("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"roadview"}}),a("div",{attrs:{id:"close",title:"로드뷰닫기"},on:{click:e.closeRoadview}},[a("span",{staticClass:"img"})])]),a("div",{attrs:{id:"mapWrapper"}},[a("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"map"}}),a("div",{attrs:{id:"roadviewControl"},on:{click:e.setRoadviewRoad}})])])],1)},G=[],j=(a(92222),"houseStore"),F={name:"KakaoMap",data:function(){return{map:null,markers:[],infowindow:null,customOverlay:null,root:"",selected:5,options:[{value:5,text:"페이지당 검색 수(기본 5개)"},{value:10,text:"10개"},{value:20,text:"20개"}],overlayOn:!1,container:null,mapWrapper:null,mapContainer:null,rvContainer:null,rv:null,rvClient:null,markImage:null,marker:null,mapCenter:null}},computed:(0,i.Z)((0,i.Z)({},(0,l.rn)(j,["houses","currentPage","perPage"])),{},{changeMap:function(){return this.houses[0].aptName}}),mounted:function(){var e=this;if(window.kakao&&window.kakao.maps)this.initMap();else{var t=document.createElement("script");t.onload=function(){return kakao.maps.load(e.initMap)},t.src="//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=".concat("6a58adc7189be28914e48f62abd688e7","&libraries=services"),document.head.appendChild(t)}},methods:(0,i.Z)((0,i.Z)({},(0,l.nv)(j,["getPerPage"])),{},{initMap:function(){var e=this,t=document.getElementById("map");this.mapCenter=new kakao.maps.LatLng(37.501449,127.03953);var a={center:this.mapCenter,level:1};this.map=new kakao.maps.Map(t,a),this.infowindow=new kakao.maps.InfoWindow({zIndex:1}),this.container=document.getElementById("container"),this.mapWrapper=document.getElementById("mapWrapper"),this.mapContainer=document.getElementById("map"),this.rvContainer=document.getElementById("roadview"),this.rv=new kakao.maps.Roadview(this.rvContainer),this.rvClient=new kakao.maps.RoadviewClient,this.markImage=new kakao.maps.MarkerImage("https://t1.daumcdn.net/localimg/localimages/07/2018/pc/roadview_minimap_wk_2018.png",new kakao.maps.Size(26,46),{spriteSize:new kakao.maps.Size(1666,168),spriteOrigin:new kakao.maps.Point(705,114),offset:new kakao.maps.Point(13,46)}),this.marker=new kakao.maps.Marker({image:this.markImage,position:this.mapCenter,draggable:!0}),kakao.maps.event.addListener(this.rv,"position_changed",(function(){var t=new kakao.maps.LatLng(e.rv.getPosition().getLat().toFixed(9),e.rv.getPosition().getLng().toFixed(9));e.map.setCenter(t),e.overlayOn&&e.marker.setPosition(t)})),kakao.maps.event.addListener(this.map,"click",(function(t){if(e.overlayOn){var a=t.latLng;e.marker.setPosition(a),e.toggleRoadview(a)}}))},displayMarkers:function(){var e=this,t=new kakao.maps.LatLngBounds;this.removeMarker();var a=0,s=0;this.houses.forEach((function(n){if(a<(e.currentPage-1)*e.perPage||a>=e.currentPage*e.perPage)a++;else{var o=new kakao.maps.LatLng(n.lat,n.lng);e.addMarker(o,s),t.extend(o),a++,s++}})),this.map.setBounds(t)},addMarker:function(e,t){var a="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png",s=new kakao.maps.Size(36,37),n={spriteSize:new kakao.maps.Size(36,691),spriteOrigin:new kakao.maps.Point(0,46*t+10),offset:new kakao.maps.Point(13,37)},o=new kakao.maps.MarkerImage(a,s,n),r=new kakao.maps.Marker({position:e,image:o});r.setMap(this.map),this.markers.push(r)},removeMarker:function(){for(var e=0;e<this.markers.length;e++)this.markers[e].setMap(null);this.markers=[]},getListItem:function(e,t){var a=document.createElement("li"),s='\n        <span class="markerbg marker_'.concat(e+1,'></span>\n        <div class="info"><h5>').concat(t.aptName,"</h5> <button>관심등록</button>\n        <span>").concat(t.sidoName," ").concat(t.gugunName," ").concat(t.dongName," ").concat(t.jibun,"</span>\n\t    ");return a.innerHTML=s,a.className="item",a},removeAllChildNods:function(e){while(e.hasChildNodes())e.removeChild(e.lastChild)},toggleRoadview:function(e){var t=this;this.rvClient.getNearestPanoId(e,100,(function(a){null===a?t.toggleMapWrapper(!0,e):(t.toggleMapWrapper(!1,e),t.rv.setPanoId(a,e))}))},toggleMapWrapper:function(e,t){e?(this.container.className="",this.map.relayout(),this.map.setCenter(t)):-1===this.container.className.indexOf("view_roadview")&&(this.container.className="view_roadview",this.map.relayout(),this.map.setCenter(t))},toggleOverlay:function(e){e?(this.overlayOn=!0,this.map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW),this.marker.setMap(this.map),this.marker.setPosition(this.map.getCenter()),this.toggleRoadview(this.map.getCenter())):(this.overlayOn=!1,this.map.removeOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW),this.marker.setMap(null))},setRoadviewRoad:function(){var e=document.getElementById("roadviewControl");-1===e.className.indexOf("active")?(e.className="active",this.toggleOverlay(!0)):(e.className="",this.toggleOverlay(!1))},closeRoadview:function(){var e=this.marker.getPosition();this.toggleMapWrapper(!0,e)}})},U=F,q=(0,m.Z)(U,$,G,!1,null,"d1106698",null),K=q.exports,X={name:"HouseView",components:{HouseSearchBar:h,HouseList:L,HouseDetail:V,HouseMap:K}},J=X,Q=(0,m.Z)(J,s,n,!1,null,"371966e8",null),Y=Q.exports},55961:function(e,t,a){e.exports=a.p+"img/apt.79c53c6a.png"}}]);
//# sourceMappingURL=398-legacy.5573b152.js.map
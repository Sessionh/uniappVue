(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user_view"],{"0754":function(t,e,n){"use strict";n.r(e);var i=n("79f9"),s=n("60dc");for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);n("0766");var a=n("2877"),c=Object(a["a"])(s["default"],i["a"],i["b"],!1,null,"1adb28e7",null);c.options.__file="user_view.vue",e["default"]=c.exports},"0766":function(t,e,n){"use strict";var i=n("5bc5"),s=n.n(i);s.a},"1b60":function(t,e,n){"use strict";n("3990");var i=o(n("b0ce")),s=o(n("0754"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},"5bc5":function(t,e,n){},"60dc":function(t,e,n){"use strict";n.r(e);var i=n("bfed"),s=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=s.a},"79f9":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[t.isShow?n("view",{staticClass:"header"},[n("text",{staticClass:"iconfont icon-icon"}),n("view",{staticClass:"title"},[t._v("我的")]),n("text",{staticClass:"iconfont icon-weiwangguanicon-defuben-"})]):t._e(),n("image",{staticClass:"images",style:{height:t.viewHeight-160+"px"},attrs:{src:"../../static/page/userLogo.png"}}),t._m(0)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"but_content"},[n("view",{staticClass:"weixinLogin"},[t._v("微信登陆")]),n("view",{staticClass:"userLogin"},[t._v("登陆/注册")])])}];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},bfed:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onPullDownRefresh:function(){var e=this;this.isShow=!1,setTimeout(function(){t.stopPullDownRefresh(),e.isShow=!0},1e3)},onLoad:function(){var e=this;t.getSystemInfo({success:function(t){console.log(t),e.viewHeight=t.windowHeight,console.log(e.viewHeight)}})},data:function(){return{isShow:!0,title:"设置",robList:["限时抢购","会员专区"],viewHeight:0}}};e.default=n}).call(this,n("543d")["default"])}},[["1b60","common/runtime","common/vendor"]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{789:function(t,e,n){"use strict";var r=n(69),o=n(90),c=n.n(o),l=n(167),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("v-img",{staticClass:"mb-5 mx-auto",attrs:{src:this.repopath+"/media/images/logo.png",alt:"Parlay.js","max-width":"170"}})}),[],!1,null,null,null);e.a=component.exports;c()(component,{VImg:l.a})},874:function(t,e,n){"use strict";n.r(e);n(70);var r=n(22),o={name:"BlogPage",components:{Logo:n(789).a},methods:{onClick:function(){log("hello"),this.notify("Arrr")}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,content;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("articles").fetch();case 3:return content=(content=e.sent).map((function(t){return t.summary={body:{type:"root",children:t.body.children.slice(0,5)}},t})),e.abrupt("return",{pages:content});case 6:case"end":return e.stop()}}),e)})))()}},c=n(69),l=n(90),v=n.n(l),d=n(215),m=n(49),h=n(757),f=n(766),_=n(758),x=n(759),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("logo"),t._v(" "),n("blockquote",{staticClass:"blockquote"},[t._v("\n        “First, solve the problem. Then, write the code.”\n        "),n("footer",[n("small",[n("em",[t._v("—John Johnson")])])])])],1),t._v(" "),n("v-col",{staticClass:"mx-auto",attrs:{cols:"12",sm:"8",lg:"6"}},[n("v-container",[n("v-row",{attrs:{dense:""}},t._l(t.pages,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12"}},[n("v-card",{attrs:{to:"/article/"+e.slug,hover:""}},[n("v-card-title",[n("span",[t._v(t._s(e.title))]),t._v(" "),n("v-spacer"),t._v(" "),n("span",{staticClass:"caption grey--text"},[t._v(t._s(t._f("datetime")(e.updatedAt)))])],1),t._v(" "),e.description?n("v-card-text",{domProps:{textContent:t._s(e.description)}}):n("v-card-text",[n("nuxt-content",{attrs:{document:e.summary}})],1)],1)],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCard:d.a,VCardText:m.b,VCardTitle:m.c,VCol:h.a,VContainer:f.a,VRow:_.a,VSpacer:x.a})}}]);
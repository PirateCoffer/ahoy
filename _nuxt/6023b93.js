(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{162:function(t,e,n){"use strict";(function(t){n(20),n(21),n(5),n(117);e.a={props:["error"],data:function(){return{messages:{DEF:{title:"Error",body:"An error occurred"},404:{title:"Not Found",body:"Page not found"},403:{title:"Access Denied",body:"Access is forbidden"},500:{title:"Server Error",body:"A server error has occured"}}}},computed:{message:function(){return _.get(this.messages,[this.code,"body"],this.messages.DEF.body)},code:function(){return this.error.statusCode},button:function(){return!!this.code.toString().match(/(403|404|500)/)}},head:function(){var t=_.get(this.messages,[this.code,"title"],this.messages.DEF.title);return{titleTemplate:"%s - [".concat(t,"] - ").concat("Ahoy")}},created:function(){},mounted:function(){t.env.dev&&log("System Error :: ".concat(this.error.statusCode," :: ").concat(this.error.message))}}}).call(this,n(35))},224:function(t,e,n){t.exports=n(599)},226:function(t,e,n){"use strict";n(70);var r=n(22),o=n(2),c=n(479),l=n.n(c),d={data:function(){return{repopath:"/ahoy"}},methods:{notify:function(t){this.$store.dispatch("notify/notify",t)}},filters:{percent:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0,0%";return numeral(t).format(e)},number:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0,0";return numeral(t).format(e)},dollars:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$0,0.00";return numeral(t).format(e)},date:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MMMM Do, YYYY";return moment(t).format(e)},time:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"h:mm a";return moment(t).format(e)},datetime:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MMMM Do, YYYY, h:mm a";return moment(t).format(e)}},computed:{$auth:function(){return this.$store.state.user.auth},$shade:function(){return this.$store.state.user.shade},$bp:function(){return this.$vuetify.breakpoint},$mobile:function(){return this.$bp.xsOnly}}};n(740).explode(),o.a.use((function(t,e){t.mixin({mixins:[d]})}),{}),o.a.use(l.a);e.a=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=e.store).subscribe((function(t,e){"user/SET_USER"===t.type&&localStorage.setItem("user",JSON.stringify(r.getters.user))})),o=!1;try{(o=localStorage.getItem("user")||!1)&&(o=JSON.parse(o))}catch(t){log({err:t})}o&&r.commit("user/SET_USER",o);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},234:function(t,e,n){"use strict";e.a={methods:{onLogin:function(t,e){var path=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/";try{this.$store.dispatch("user/login",{username:t,password:e}),this.$router.push(path),this.notify("Logged In")}catch(t){this.notify(t)}},onLogout:function(){this.$store.dispatch("user/logout"),this.$store.commit("SET_RIGHT_NAV",!1),this.notify("Logged Out")},onShade:function(){var t=this;this.$store.dispatch("user/toggleShade").then((function(e){t.$vuetify.theme.dark=e}))}}}},264:function(t,e,n){var content=n(559);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("4810ccb0",content,!0,{sourceMap:!1})},481:function(t,e,n){"use strict";var r=n(234),o=n(69),c=n(90),l=n.n(c),d=n(216),m=n(236),v=n(167),f=n(104),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-toolbar-items",{staticClass:"ml-3"},[e("v-btn",{staticClass:"home-btn title font-weight-regular mr-0 pl-1",attrs:{text:"",to:"/",ripple:!1}},[e("v-avatar",{staticClass:"mr-2",attrs:{size:"40"}},[e("v-img",{attrs:{src:this.repopath+"/media/images/ahoy-logo.png"}})],1),this._v("\n    "+this._s(this.$store.state.title)+"!\n  ")],1)],1)}),[],!1,null,null,null),h=component.exports;l()(component,{VAvatar:d.a,VBtn:m.a,VImg:v.a,VToolbarItems:f.a});var j={name:"ChatLayout",components:{LogoBtn:h},mixins:[r.a],data:function(){return{form:{settings:{username:"davy",name:"Davy Jones",avatar:"DJ",color:"green"},addContact:{username:"charlie",name:"Charlie",avatar:"C",color:"orange"}},dialog:{addContact:!1,settings:!1},files:[],message:"",number:30,leftNav:null}},computed:{account:function(){return this.$store.state.chat.account},user:function(){return this.users[this.channel]},channels:function(){return this.$store.state.chat.channels},channel:{get:function(){return this.$store.state.chat.channel},set:function(t){this.$store.dispatch("chat/setChannel",{channel:t})}},users:function(){return this.$store.state.chat.users},rightNav:{get:function(){return this.$store.state.rightNav},set:function(t){this.$store.commit("SET_RIGHT_NAV",t)}}},created:function(){this.$vuetify.theme.dark=this.$store.getters["user/shade"]},methods:{saveSettings:function(){this.dialog.settings=!1,this.$store.dispatch("chat/setAccount",this.form.settings)},addContact:function(){this.dialog.addContact=!1,this.$store.dispatch("chat/addUser",this.form.addContact)}}},_=(n(558),n(760)),y=n(765),C=n(761),k=n(215),x=n(49),N=n(757),E=n(762),S=n(748),w=n(218),A=n(219),V=n(126),T=n(220),$=n(60),D=n(105),R=n(763),z=n(764),M=n(217),L=n(758),U=n(759),I=n(746),O=Object(o.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"","clipped-right":"",flat:"",height:"68"}},[n("logo-btn",{staticClass:"pl-0 ml-0 mr-4"}),t._v(" "),t.$auth?n("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.leftNav=!t.leftNav}}}):t._e(),t._v(" "),n("v-divider",{staticClass:"mr-6",attrs:{vertical:""}}),t._v(" "),t.$auth?n("v-toolbar-title",{staticClass:"pl-0 d-flex align-center"},[t._v("\n      "+t._s(t.user.name)+" "),n("v-icon",{attrs:{small:"",color:"yellow darken-3"}},[t._v("mdi-star")])],1):t._e(),t._v(" "),n("v-spacer"),t._v(" "),t.$auth?n("v-responsive",{attrs:{"max-width":"178"}},[n("v-text-field",{attrs:{dense:"",flat:"","hide-details":"",rounded:"",solo:"","prepend-inner-icon":"mdi-magnify",clearable:""},on:{"click:prepend-inner":function(t){}}})],1):t._e(),t._v(" "),t.$auth?n("v-btn",{staticClass:"mx-1",attrs:{large:"",icon:""},on:{click:function(e){t.rightNav=!0}}},[n("v-avatar",{attrs:{size:"36",color:t.account.color}},[t._v("\n        "+t._s(t.account.avatar)+"\n      ")])],1):n("v-toolbar-items",{staticClass:"ml-3"},[n("v-btn",{attrs:{text:"",to:"/user/sign-up"}},[t._v("Register")]),t._v(" "),n("v-btn",{attrs:{text:"",to:"/user/sign-in"}},[t._v("Login")])],1)],1),t._v(" "),t.$auth?n("v-navigation-drawer",{attrs:{app:"","mobile-breakpoint":"960"},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("v-list-item",[n("v-responsive",{attrs:{"max-width":"178"}},[n("v-text-field",{attrs:{dense:"",flat:"","hide-details":"",rounded:"",solo:"","prepend-inner-icon":"mdi-magnify",clearable:""},on:{"click:prepend-inner":function(t){}}})],1),t._v(" "),n("v-list-item-icon",[n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.dialog.addContact=!t.dialog.addContact}}},[n("v-icon",[t._v("mdi-plus")])],1)],1)],1)]},proxy:!0}],null,!1,4046223447),model:{value:t.leftNav,callback:function(e){t.leftNav=e},expression:"leftNav"}},[t._v(" "),n("v-divider"),t._v(" "),n("v-list",{attrs:{shaped:"",dense:""}},t._l(t.channels,(function(e,r){return n("v-list-item",{key:e.id,attrs:{"input-value":t.channel===r},on:{click:function(e){t.channel=r}}},[n("v-list-item-avatar",{attrs:{size:"42"}},[n("v-avatar",{attrs:{color:t.users[r].color,size:"42"}},[t._v(t._s(t.users[r].avatar))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.users[r].name))]),t._v(" "),n("v-list-item-subtitle",{staticClass:"d-flex align-center"},[n("v-avatar",{attrs:{color:"green",size:"8"}}),t._v(" "),n("span",{staticClass:"grey--text"},[t._v(" active")])],1)],1),t._v(" "),n("v-list-item-avatar",{attrs:{size:"26"}},[n("v-avatar",{staticClass:"body-2",attrs:{size:"26",color:"green"}},[t._v("\n            "+t._s(t.channels[r].unread)+"\n          ")])],1)],1)})),1)],1):t._e(),t._v(" "),n("v-navigation-drawer",{attrs:{app:"",right:"",temporary:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("v-list-item",[n("v-list-item-avatar",{attrs:{size:"45"}},[n("v-avatar",{attrs:{color:t.account.color,size:"45"}},[t._v("\n            "+t._s(t.account.avatar)+"\n          ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.account.name))])],1)],1)]},proxy:!0}]),model:{value:t.rightNav,callback:function(e){t.rightNav=e},expression:"rightNav"}},[t._v(" "),n("v-divider"),t._v(" "),n("v-list",[n("v-list-item",{on:{click:function(e){t.dialog.settings=!0,t.rightNav=!1}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-cog")])],1),t._v(" "),n("v-list-item-title",[t._v("Settings")])],1),t._v(" "),n("v-list-item",{on:{click:t.onLogout}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-logout-variant")])],1),t._v(" "),n("v-list-item-title",[t._v("Logout")])],1)],1)],1),t._v(" "),n("v-main",[n("nuxt")],1),t._v(" "),n("v-dialog",{attrs:{fullscreen:t.$mobile,"max-width":"500"},model:{value:t.dialog.addContact,callback:function(e){t.$set(t.dialog,"addContact",e)},expression:"dialog.addContact"}},[n("v-card",{attrs:{flat:"",tile:""}},[n("v-card-title",[n("span",[t._v("Add New Contact")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.dialog.addContact=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Name","hide-details":""},model:{value:t.form.addContact.name,callback:function(e){t.$set(t.form.addContact,"name",e)},expression:"form.addContact.name"}}),t._v(" "),n("v-text-field",{attrs:{label:"Username","hide-details":""},model:{value:t.form.addContact.username,callback:function(e){t.$set(t.form.addContact,"username",e)},expression:"form.addContact.username"}}),t._v(" "),n("v-text-field",{attrs:{label:"Avatar","hide-details":""},model:{value:t.form.addContact.avatar,callback:function(e){t.$set(t.form.addContact,"avatar",e)},expression:"form.addContact.avatar"}}),t._v(" "),n("v-text-field",{attrs:{label:"Color","hide-details":""},model:{value:t.form.addContact.color,callback:function(e){t.$set(t.form.addContact,"color",e)},expression:"form.addContact.color"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-btn",{attrs:{block:"",color:"primary"},on:{click:t.addContact}},[t._v("Submit")])],1)],1)],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{fullscreen:t.$mobile,"max-width":"500"},model:{value:t.dialog.settings,callback:function(e){t.$set(t.dialog,"settings",e)},expression:"dialog.settings"}},[n("v-card",{attrs:{flat:"",tile:""}},[n("v-card-title",[n("span",[t._v("User Settings")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.dialog.settings=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Name","hide-details":""},model:{value:t.form.settings.name,callback:function(e){t.$set(t.form.settings,"name",e)},expression:"form.settings.name"}}),t._v(" "),n("v-text-field",{attrs:{label:"Username","hide-details":""},model:{value:t.form.settings.username,callback:function(e){t.$set(t.form.settings,"username",e)},expression:"form.settings.username"}}),t._v(" "),n("v-text-field",{attrs:{label:"Avatar","hide-details":""},model:{value:t.form.settings.avatar,callback:function(e){t.$set(t.form.settings,"avatar",e)},expression:"form.settings.avatar"}}),t._v(" "),n("v-text-field",{attrs:{label:"Color","hide-details":""},model:{value:t.form.settings.color,callback:function(e){t.$set(t.form.settings,"color",e)},expression:"form.settings.color"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-btn",{attrs:{block:"",color:"primary"},on:{click:t.saveSettings}},[t._v("Save")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.a=O.exports;l()(O,{VApp:_.a,VAppBar:y.a,VAppBarNavIcon:C.a,VAvatar:d.a,VBtn:m.a,VCard:k.a,VCardText:x.b,VCardTitle:x.c,VCol:N.a,VDialog:E.a,VDivider:S.a,VIcon:w.a,VList:A.a,VListItem:V.a,VListItemAvatar:T.a,VListItemContent:$.a,VListItemIcon:D.a,VListItemSubtitle:$.b,VListItemTitle:$.c,VMain:R.a,VNavigationDrawer:z.a,VResponsive:M.a,VRow:L.a,VSpacer:U.a,VTextField:I.a,VToolbarItems:f.a,VToolbarTitle:f.b})},490:function(t,e,n){t.exports=n(491)},507:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.store,n=t.redirect;if(e.state.user.auth)return n("/")}},508:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.store,n=t.redirect,r=t.route;if(!e.state.user.auth)return n({path:"/user/sign-in",query:{redirect:encodeURIComponent(JSON.stringify({path:r.path,query:r.query}))}})}},558:function(t,e,n){"use strict";n(264)},559:function(t,e,n){(e=n(14)(!1)).push([t.i,".clickable{cursor:pointer}.text-no-break{word-break:normal}.no-bg:before{background:none!important}.home-btn{text-transform:none!important}.home-btn:before,.home-btn:hover:before{background:none!important}.chat-field.v-textarea.v-text-field--solo .v-input__prepend-inner,.chat-field.v-textarea.v-text-field--solo .v-input__prepend-inner .v-file-input{margin-top:0;padding-top:0}",""]),t.exports=e},594:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"getters",(function(){return o})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l}));var r=function(){return{leftNav:null,rightNav:!1,title:"Ahoy"}},o={user:function(t,e,n,r){return r["user/obj"]},leftNav:function(t){return t.leftNav},rightNav:function(t){return t.rightNav}},c={SET_RIGHT_NAV:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.rightNav=e},SET_LEFT_NAV:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.leftNav=e}},l={notify:function(t,e){t.state,t.commit;(0,t.dispatch)("notify/notify",e)}}},595:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"getters",(function(){return o})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l}));n(24);var r=function(){return{channel:"alice",channels:{alice:{recent:{},unread:0,messages:[]},bob:{recent:{},unread:0,messages:[]}},users:{alice:{username:"alice",name:"Alice",avatar:"A",color:"pink"},bob:{username:"bob",name:"Bob",avatar:"B",color:"teal"}},account:{username:"davy",name:"Davy Jones",avatar:"DJ",color:"green"}}},o={channels:function(t){return t.channels}},c={SET_ACCOUNT:function(t,e){t.account=_.clone(e)},SET_RECENT:function(t,e){var n=e.channel,r=e.recent,o=t.channels[n];o&&(o.recent=r)},SET_CHANNELS:function(t,e){var n=e.channels;t.channels=n},SET_CHANNEL:function(t,e){var n=e.channel;t.channel=n},ADD_CHANNEL:function(t,e){var n=e.name,r=e.opts;t.channels[n]=r||{unread:0,recent:{},messages:[]}},REMOVE_CHANNEL:function(t,e){var n=e.name;delete t.channels[n]},ADD_USER:function(t,e){t.users[e.username]=e},REMOVE_USER:function(t,e){var n=e.name;delete t.users[n]},ADD_MESSAGE:function(t,e){var n=e.channel,r=e.message,o=t.channels[n];o&&o.messages.push(r)},INCREMENT_UNREAD:function(t,e){var n=e.channel,r=t.channels[n];r&&r.unread++}},l={setChannels:function(t,e){(0,t.commit)("SET_CHANNELS",e.channels)},setChannel:function(t,e){(0,t.commit)("SET_CHANNEL",{channel:e.channel})},addChannel:function(t,e){(0,t.commit)("ADD_CHANNEL",{name:e.name,opts:e.opts})},removeChannel:function(t,e){(0,t.commit)("REMOVE_CHANNEL",{name:e.name})},addMessage:function(t,e){(0,t.commit)("ADD_MESSAGE",{channel:e.channel,message:e.message})},setRecent:function(t,e){(0,t.commit)("SET_RECENT",{channel:e.channel,recent:e.recent})},setAccount:function(t,e){(0,t.commit)("SET_ACCOUNT",e)},addUser:function(t,e){var n=t.commit;n("ADD_USER",e),n("ADD_CHANNEL",{name:e.username})},incrementUnread:function(t,e){(0,t.commit)("INCREMENT_UNREAD",{channel:e.channel})}}},596:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"getters",(function(){return o})),n.d(e,"mutations",(function(){return c}));var r=function(){return{users:{"2Hr1vt1x4ALcUaRvWcVbC8rJwisnmxPF":{avatar:"",name:"Alice",username:"alice",password:"4pHoLJjbaGzYjyD4yV6ovnkZXSAUUTmw"}},accounts:{DudeWheresMyCoin:{name:"Dude where's my coin",rating:1,trades:24},realSatoshi:{name:"realSatoshi",rating:1,trades:17},BuyCoinsFast:{name:"Buy Coins Fast",rating:.95,trades:3420},mvins:{name:"Mid Valley Ins",rating:1,trades:420},CryptoQueen:{name:"Crypto Queen",rating:1,trades:25},CryptMe:{name:"Crypt Me",rating:1,trades:35},MuhCoins:{name:"Muh Coins",rating:1,trades:252},CryptoNow:{name:"Crypto Now",rating:1,trades:55},SumCoins:{name:"Sum Coins",rating:1,trades:33},PirateCoiner:{name:"Pirate Coiner",rating:.88,trades:421}},offers:[{tid:1e3,user:"DudeWheresMyCoin",type:"zelle",price:.11,min:20,max:200},{tid:1001,user:"realSatoshi",type:"zelle",price:.12,min:50,max:500},{tid:1002,user:"BuyCoinsFast",type:"zelle",price:.15,min:100,max:3e3},{tid:1003,user:"mvins",type:"zelle",price:.13,min:50,max:1e3},{tid:1004,user:"CryptoQueen",type:"cashapp",price:.12,min:20,max:200},{tid:1005,user:"CryptMe",type:"cashapp",price:.1,min:10,max:200},{tid:1006,user:"MuhCoins",type:"cashapp",price:.14,min:10,max:200},{tid:1007,user:"CryptoNow",type:"paypal",price:.11,min:10,max:200},{tid:1008,user:"SumCoins",type:"paypal",price:.09,min:50,max:200},{tid:1009,user:"PirateCoiner",type:"btc",price:.1,min:200,max:2e3}],trades:[]}},o={users:function(t){return t.users},accounts:function(t){return t.accounts},offers:function(t){return t.offers},trades:function(t){return t.trades}},c={ADD_OFFER:function(t,e){t.offers.push(e)},ADD_TRADE:function(t,e){t.trades.push(e)}}},597:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return j})),n.d(e,"mutations",(function(){return _})),n.d(e,"actions",(function(){return y}));var r=n(17),o="Success!",c=!1,l="green darken-2",d=4e3,m=null,v=null,f=null,h=null,j=function(){return{msg:o,active:c,color:l,timeout:d,top:m,bottom:v,left:f,right:h}},_={active:function(t,e){t.active=e},notify:function(t,e){"object"===Object(r.a)(e)?(t.msg=e.msg||e.message||o,t.color=e.color||(e.ok?l:"error"),t.timeout=e.timeout||d,t.top=e.top||m,t.left=e.left||f,t.right=e.right||h,t.bottom=e.bottom||v):"string"==typeof e&&(t.color=l,t.msg=e)}},y={addNotify:function(t,e){var n=t.commit;n("active",!0),n("notify",e)},notify:function(t,e){var n=t.state,r=t.commit,o=t.dispatch;n.active?setTimeout((function(){r("active",!1),setTimeout((function(){o("addNotify",e),r("active",!0)}),300)}),300):o("addNotify",e)}}},598:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return l})),n.d(e,"getters",(function(){return d})),n.d(e,"mutations",(function(){return m})),n.d(e,"actions",(function(){return v}));n(70);var r=n(22),o=n(224),c=n.n(o),l=function(){return{auth:null,shade:!0,notif:{unread:4,items:[{title:"Message 1",subtitle:"New order pending",icon:"plus"},{title:"Message 2",subtitle:"New order pending",icon:"plus"},{title:"Message 3",subtitle:"New order pending",icon:"plus"},{title:"Message 4",subtitle:"New order pending",icon:"plus"}]}}},d={shade:function(t){return t.shade},auth:function(t){return t.auth},obj:function(t){return{auth:t.auth,shade:t.shade}}},m={INIT_USER:function(){},SET_USER:function(t,e){t.auth=e.auth,t.shade=e.shade}},v={toggleShade:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.commit,t.dispatch,r=t.rootGetters,(o=r.user).shade=!o.shade,n("SET_USER",o),e.abrupt("return",o.shade);case 5:case"end":return e.stop()}}),e)})))()},login:function(t,e){var n=t.commit,r=(t.dispatch,t.getters,t.rootGetters),o=t.rootState;t.state;if(!e)throw new Error("missing login payload");var l=e.username,d=e.password;if(!l||!d)throw new Error("missing arguments");var m=o.data.users[c.a.hash(l)];if(!m)throw new Error("User '".concat(l,"' not found"));if(c.a.hash(d)!==m.password)throw new Error("Invalid password");var v=r.user;v.auth=!0,n("SET_USER",v)},logout:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.commit,t.dispatch,r=t.rootGetters,(o=r.user).auth=!1,n("SET_USER",o);case 4:case"end":return e.stop()}}),e)})))()}}},599:function(t,e,n){(function(e){n(20),n(21),n(5);var r=n(487),o=n(488),c=n(268),l=n(602),d=n(191),m=n(605),v=(n(614),n(709)),f=(n(710),n(711)),h=function(){"use strict";function t(){r(this,t)}return o(t,null,[{key:"hash",value:function(input,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];0===t||!1===t?t=0:(c.isNil(t)||!0===t)&&(t=32),e.isBuffer(input)||(input=e.from(input.toString()));var output=d.hash(input);return output=n?l.encode(output).slice(0,t):output.slice(0,t)}},{key:"rig",value:function(t,e,n){return n=this.getRng(n),Math.floor((e-t)*n())+t}},{key:"getRng",value:function(t){return(c.isString(t)||c.isNumber(t))&&(t=m(t)),t=t||m()}},{key:"rint",value:function(t){return t=this.getRng(t),parseInt(Math.abs(t.int32()))}},{key:"rand",value:function(t){return this.rint(t).toString()}},{key:"rash",value:function(t,e){return this.hash(this.rand(t),e)}},{key:"nmac",value:function(t,input){var output,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return t=e.from(t.toString()),input=e.from(input.toString()),output=n?v.full(input,t):v(input,t),r?l.encode(e.from(output)):output}},{key:"kdf",value:function(t,input){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:32,o=input?this.nmac(t,input,!0,!1):this.hash(t,null,!1);if(1===n)return l.encode(e.from(o.subarray(0,r)));for(var c=Math.floor(64/n),d=[],m=0;m<n;m++){var v=o.subarray(m*c,(m+1)*c);v=this.hash(v,null,!1).subarray(0,r),d.push(l.encode(e.from(v)))}return d}},{key:"lowlevel",get:function(){return{bs58:l,nacl:d,srng:m,tna:v,ment:f}}}]),t}();t.exports=h}).call(this,n(33).Buffer)},604:function(t,e){},613:function(t,e){},617:function(t,e){},619:function(t,e){},629:function(t,e){},631:function(t,e){},656:function(t,e){},658:function(t,e){},659:function(t,e){},664:function(t,e){},666:function(t,e){},685:function(t,e){},697:function(t,e){},700:function(t,e){},715:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{balance:{pirate:3456},address:{pirate:"4BSX2ParTcSAa95icibdw4UyAbyWGnKd7YoNeHTcKfW34FUxeufGjXFiQmvLce6TCw2PbCackJ2gQabQJnFGc6XvAnQd8MBWTwfJbd77Gw"}}},o={setUsers:function(t,e){t.list=e}}},740:function(t,e,n){t.exports=n(741)},741:function(t,e,n){(function(t){e._=n(268),e.moment=n(1),e.numeral=n(743),e.log=console.log.bind(console);e.explode=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t;for(var r in e)n[r]=e[r]}}).call(this,n(29))},742:function(t,e,n){var map={"./af":339,"./af.js":339,"./ar":340,"./ar-dz":341,"./ar-dz.js":341,"./ar-kw":342,"./ar-kw.js":342,"./ar-ly":343,"./ar-ly.js":343,"./ar-ma":344,"./ar-ma.js":344,"./ar-sa":345,"./ar-sa.js":345,"./ar-tn":346,"./ar-tn.js":346,"./ar.js":340,"./az":347,"./az.js":347,"./be":348,"./be.js":348,"./bg":349,"./bg.js":349,"./bm":350,"./bm.js":350,"./bn":351,"./bn-bd":352,"./bn-bd.js":352,"./bn.js":351,"./bo":353,"./bo.js":353,"./br":354,"./br.js":354,"./bs":355,"./bs.js":355,"./ca":356,"./ca.js":356,"./cs":357,"./cs.js":357,"./cv":358,"./cv.js":358,"./cy":359,"./cy.js":359,"./da":360,"./da.js":360,"./de":361,"./de-at":362,"./de-at.js":362,"./de-ch":363,"./de-ch.js":363,"./de.js":361,"./dv":364,"./dv.js":364,"./el":365,"./el.js":365,"./en-au":366,"./en-au.js":366,"./en-ca":367,"./en-ca.js":367,"./en-gb":368,"./en-gb.js":368,"./en-ie":369,"./en-ie.js":369,"./en-il":370,"./en-il.js":370,"./en-in":371,"./en-in.js":371,"./en-nz":372,"./en-nz.js":372,"./en-sg":373,"./en-sg.js":373,"./eo":374,"./eo.js":374,"./es":375,"./es-do":376,"./es-do.js":376,"./es-mx":377,"./es-mx.js":377,"./es-us":378,"./es-us.js":378,"./es.js":375,"./et":379,"./et.js":379,"./eu":380,"./eu.js":380,"./fa":381,"./fa.js":381,"./fi":382,"./fi.js":382,"./fil":383,"./fil.js":383,"./fo":384,"./fo.js":384,"./fr":385,"./fr-ca":386,"./fr-ca.js":386,"./fr-ch":387,"./fr-ch.js":387,"./fr.js":385,"./fy":388,"./fy.js":388,"./ga":389,"./ga.js":389,"./gd":390,"./gd.js":390,"./gl":391,"./gl.js":391,"./gom-deva":392,"./gom-deva.js":392,"./gom-latn":393,"./gom-latn.js":393,"./gu":394,"./gu.js":394,"./he":395,"./he.js":395,"./hi":396,"./hi.js":396,"./hr":397,"./hr.js":397,"./hu":398,"./hu.js":398,"./hy-am":399,"./hy-am.js":399,"./id":400,"./id.js":400,"./is":401,"./is.js":401,"./it":402,"./it-ch":403,"./it-ch.js":403,"./it.js":402,"./ja":404,"./ja.js":404,"./jv":405,"./jv.js":405,"./ka":406,"./ka.js":406,"./kk":407,"./kk.js":407,"./km":408,"./km.js":408,"./kn":409,"./kn.js":409,"./ko":410,"./ko.js":410,"./ku":411,"./ku.js":411,"./ky":412,"./ky.js":412,"./lb":413,"./lb.js":413,"./lo":414,"./lo.js":414,"./lt":415,"./lt.js":415,"./lv":416,"./lv.js":416,"./me":417,"./me.js":417,"./mi":418,"./mi.js":418,"./mk":419,"./mk.js":419,"./ml":420,"./ml.js":420,"./mn":421,"./mn.js":421,"./mr":422,"./mr.js":422,"./ms":423,"./ms-my":424,"./ms-my.js":424,"./ms.js":423,"./mt":425,"./mt.js":425,"./my":426,"./my.js":426,"./nb":427,"./nb.js":427,"./ne":428,"./ne.js":428,"./nl":429,"./nl-be":430,"./nl-be.js":430,"./nl.js":429,"./nn":431,"./nn.js":431,"./oc-lnc":432,"./oc-lnc.js":432,"./pa-in":433,"./pa-in.js":433,"./pl":434,"./pl.js":434,"./pt":435,"./pt-br":436,"./pt-br.js":436,"./pt.js":435,"./ro":437,"./ro.js":437,"./ru":438,"./ru.js":438,"./sd":439,"./sd.js":439,"./se":440,"./se.js":440,"./si":441,"./si.js":441,"./sk":442,"./sk.js":442,"./sl":443,"./sl.js":443,"./sq":444,"./sq.js":444,"./sr":445,"./sr-cyrl":446,"./sr-cyrl.js":446,"./sr.js":445,"./ss":447,"./ss.js":447,"./sv":448,"./sv.js":448,"./sw":449,"./sw.js":449,"./ta":450,"./ta.js":450,"./te":451,"./te.js":451,"./tet":452,"./tet.js":452,"./tg":453,"./tg.js":453,"./th":454,"./th.js":454,"./tk":455,"./tk.js":455,"./tl-ph":456,"./tl-ph.js":456,"./tlh":457,"./tlh.js":457,"./tr":458,"./tr.js":458,"./tzl":459,"./tzl.js":459,"./tzm":460,"./tzm-latn":461,"./tzm-latn.js":461,"./tzm.js":460,"./ug-cn":462,"./ug-cn.js":462,"./uk":463,"./uk.js":463,"./ur":464,"./ur.js":464,"./uz":465,"./uz-latn":466,"./uz-latn.js":466,"./uz.js":465,"./vi":467,"./vi.js":467,"./x-pseudo":468,"./x-pseudo.js":468,"./yo":469,"./yo.js":469,"./zh-cn":470,"./zh-cn.js":470,"./zh-hk":471,"./zh-hk.js":471,"./zh-mo":472,"./zh-mo.js":472,"./zh-tw":473,"./zh-tw.js":473};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=742},81:function(t,e,n){"use strict";var r=n(162).a,o=n(69),c=n(90),l=n.n(c),d=n(236),m=n(215),v=n(49),f=n(757),h=n(766),j=n(748),_=n(758),y=n(759),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":""}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{sm:"8",md:"6"}},[n("v-card",[n("v-card-title",{staticClass:"text-h4"},[t._v(t._s(t.code)+" Error")]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"pa-3"},[n("h2",{staticClass:"text-h5"},[t._v(t._s(t.message))])]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),t.button?n("v-btn",{attrs:{color:"primary",nuxt:"",to:"/"}},[t._v("Return Home")]):t._e()],1)],1)],1)],1)],1)}),[],!1,null,"4acb5e66",null);e.a=component.exports;l()(component,{VBtn:d.a,VCard:m.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VCol:f.a,VContainer:h.a,VDivider:j.a,VRow:_.a,VSpacer:y.a})}},[[490,15,3,16]]]);
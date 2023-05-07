webpackJsonp([7],{"6Twa":function(e,t,a){"use strict";var r=a("mvHQ"),n=a.n(r),_=a("IcnI");t.a={computed:{isLogged:function(){return _.a.state.storeIsLogged},userData:function(){return _.a.state.storeUserData}},methods:{checkToken:function(e){localStorage.setItem("isLogged",!0),localStorage.setItem("token",e.data.token),localStorage.setItem("user",n()(e.data.user)),_.a.dispatch("setIsLogged",!0),_.a.dispatch("setUserData",e.data.user)},resetToken:function(){localStorage.setItem("isLogged",!1),localStorage.setItem("token",""),localStorage.setItem("user",""),_.a.dispatch("setIsLogged",!1),_.a.dispatch("setUserData",{}),this.$router.push("/login")}}}},"9M+g":function(e,t){},F4Ug:function(e,t){},IcnI:function(e,t,a){"use strict";var r=a("//Fk"),n=a.n(r),_=a("7+uW"),o=a("LvQi"),s=a("eOoE"),i=a("qL9Y");a.n(i);_.default.use(o.a),t.a=new o.a.Store({state:{storeIsLogged:!1,storeUserData:{id:"",name:"",email:""}},getters:{},mutations:{checkStoreIsLogged:function(e,t){e.storeIsLogged=t},checkStoreUserData:function(e,t){e.storeUserData.id=t.id||"",e.storeUserData.name=t.name||"",e.storeUserData.email=t.email||""}},actions:{setIsLogged:function(e,t){e.commit("checkStoreIsLogged",t)},setUserData:function(e,t){e.commit("checkStoreUserData",t)},initBeforRouter:function(e){var t,a={},r=localStorage.getItem("isLogged"),n=localStorage.getItem("user");void 0!=n&&""!==n&&(a=JSON.parse(n)),t=null!=r&&"false"!==r,e.commit("checkStoreUserData",a),e.commit("checkStoreIsLogged",t)},initStoreStateBeforeCreate:function(e){return new n.a(function(t,a){s.a.get("/check-token").then(function(a){var r={},n=!1;if(200==a.data.code){var _=localStorage.getItem("isLogged"),o=localStorage.getItem("user");void 0!=o&&""!==o&&(r=JSON.parse(o)),n=null!=_&&"false"!==_}e.commit("checkStoreUserData",r),e.commit("checkStoreIsLogged",n),t(a)}).catch(function(t){e.commit("checkStoreUserData",{}),e.commit("checkStoreIsLogged",!1),a(t)})})}}})},Jmt5:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("7+uW"),n={name:"header",mixins:[a("6Twa").a],methods:{logout:function(){this.resetToken()}}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-navbar",{staticClass:"bg-color-new text-white",attrs:{toggleable:"lg",type:"light",variant:"faded"}},[a("div",{staticClass:"container"},[a("b-navbar-brand",{staticClass:"mb-0",attrs:{href:"/",tag:"h1"}},[e._v("Management Application")]),e._v(" "),a("b-navbar-nav",[e.isLogged?e._e():a("b-nav-item",{attrs:{href:"/login"}},[a("i",{staticClass:"bi bi-box-arrow-in-right"}),e._v(" Login\n        ")]),e._v(" "),e.isLogged?a("b-nav-item",{attrs:{href:"/store"}},[a("i",{staticClass:"bi bi-shop"}),e._v(" Store\n        ")]):e._e(),e._v(" "),e.isLogged?a("b-nav-item",{attrs:{href:"/product"}},[a("i",{staticClass:"bi bi-box-seam-fill"}),e._v(" Product\n        ")]):e._e(),e._v(" "),e.isLogged?a("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._v("\n            "+e._s(e.isLogged?e.userData.name:"User")+"\n          ")]},proxy:!0}],null,!1,1970469670)},[e._v(" "),a("b-dropdown-item",{on:{click:e.logout}},[a("i",{staticClass:"bi bi-door-open-fill"}),e._v(" Sign Out")])],1):e._e()],1)],1)])],1)},staticRenderFns:[]};var o={name:"App",components:{Header:a("VU/8")(n,_,!1,function(e){a("RQKc")},"data-v-4174bf7e",null).exports}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Header"),this._v(" "),t("div",{staticClass:"container",staticStyle:{"padding-top":"50px"}},[t("router-view")],1)],1)},staticRenderFns:[]};var i=a("VU/8")(o,s,!1,function(e){a("YmQS")},null,null).exports,l=a("/ocq"),c=a("IcnI");r.default.use(l.a);var m=new l.a({routes:[{path:"/",name:"Home",component:function(){return a.e(5).then(a.bind(null,"lO7g"))},meta:{auth:!0}},{path:"/login",name:"Login",component:function(){return Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"xJsL"))},meta:{login:!0}},{path:"/store",name:"Store",component:function(){return Promise.all([a.e(0),a.e(1)]).then(a.bind(null,"kmOg"))},meta:{auth:!0}},{path:"/store/detail/:id",name:"Store detail",component:function(){return Promise.all([a.e(0),a.e(2)]).then(a.bind(null,"rrJD"))},meta:{auth:!0}},{path:"/product",name:"Product",component:function(){return a.e(0).then(a.bind(null,"HN3k"))},meta:{auth:!0}},{path:"*",component:function(){return a.e(4).then(a.bind(null,"z3nk"))}}]});m.beforeResolve(function(e,t,a){c.a.dispatch("initBeforRouter");var r=c.a.state.storeIsLogged;e.matched.some(function(e){return e.meta.login})&&r?a({path:"/",query:{redirect:e.fullPath}}):a(),e.matched.some(function(e){return e.meta.auth})?r?a():a({path:"/login",query:{redirect:e.fullPath}}):a()});var u=m,f=a("Tqaz"),g=(a("F4Ug"),a("Jmt5"),a("9M+g"),a("XPMr"),a("rifk")),v=a.n(g),d=a("eOoE");r.default.use(v.a),r.default.use(f.a),r.default.use(f.b),r.default.use({install:function(e){e.prototype.$api=d.a}}),r.default.config.productionTip=!1,new r.default({el:"#app",router:u,store:c.a,created:function(){},components:{App:i},template:"<App/>"})},RQKc:function(e,t){},XPMr:function(e,t){},YmQS:function(e,t){},eOoE:function(e,t,a){"use strict";var r=a("//Fk"),n=a.n(r),_=a("mtWM").a.create({baseURL:"https://vand-backend-production.up.railway.app/api/"});_.interceptors.request.use(function(e){var t=localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer "+t),e},function(e){return n.a.reject(e)}),_.interceptors.response.use(function(e){return e},function(e){return e.response&&e.response.data?n.a.reject(e.response.data):n.a.reject(e.message)}),t.a=_},"x5T+":function(e,t){e.exports={dots:{interval:80,frames:["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"]},dots2:{interval:80,frames:["⣾","⣽","⣻","⢿","⡿","⣟","⣯","⣷"]},dots3:{interval:80,frames:["⠋","⠙","⠚","⠞","⠖","⠦","⠴","⠲","⠳","⠓"]},dots4:{interval:80,frames:["⠄","⠆","⠇","⠋","⠙","⠸","⠰","⠠","⠰","⠸","⠙","⠋","⠇","⠆"]},dots5:{interval:80,frames:["⠋","⠙","⠚","⠒","⠂","⠂","⠒","⠲","⠴","⠦","⠖","⠒","⠐","⠐","⠒","⠓","⠋"]},dots6:{interval:80,frames:["⠁","⠉","⠙","⠚","⠒","⠂","⠂","⠒","⠲","⠴","⠤","⠄","⠄","⠤","⠴","⠲","⠒","⠂","⠂","⠒","⠚","⠙","⠉","⠁"]},dots7:{interval:80,frames:["⠈","⠉","⠋","⠓","⠒","⠐","⠐","⠒","⠖","⠦","⠤","⠠","⠠","⠤","⠦","⠖","⠒","⠐","⠐","⠒","⠓","⠋","⠉","⠈"]},dots8:{interval:80,frames:["⠁","⠁","⠉","⠙","⠚","⠒","⠂","⠂","⠒","⠲","⠴","⠤","⠄","⠄","⠤","⠠","⠠","⠤","⠦","⠖","⠒","⠐","⠐","⠒","⠓","⠋","⠉","⠈","⠈"]},dots9:{interval:80,frames:["⢹","⢺","⢼","⣸","⣇","⡧","⡗","⡏"]},dots10:{interval:80,frames:["⢄","⢂","⢁","⡁","⡈","⡐","⡠"]},dots11:{interval:100,frames:["⠁","⠂","⠄","⡀","⢀","⠠","⠐","⠈"]},dots12:{interval:80,frames:["⢀⠀","⡀⠀","⠄⠀","⢂⠀","⡂⠀","⠅⠀","⢃⠀","⡃⠀","⠍⠀","⢋⠀","⡋⠀","⠍⠁","⢋⠁","⡋⠁","⠍⠉","⠋⠉","⠋⠉","⠉⠙","⠉⠙","⠉⠩","⠈⢙","⠈⡙","⢈⠩","⡀⢙","⠄⡙","⢂⠩","⡂⢘","⠅⡘","⢃⠨","⡃⢐","⠍⡐","⢋⠠","⡋⢀","⠍⡁","⢋⠁","⡋⠁","⠍⠉","⠋⠉","⠋⠉","⠉⠙","⠉⠙","⠉⠩","⠈⢙","⠈⡙","⠈⠩","⠀⢙","⠀⡙","⠀⠩","⠀⢘","⠀⡘","⠀⠨","⠀⢐","⠀⡐","⠀⠠","⠀⢀","⠀⡀"]},line:{interval:130,frames:["-","\\","|","/"]},line2:{interval:100,frames:["⠂","-","–","—","–","-"]},pipe:{interval:100,frames:["┤","┘","┴","└","├","┌","┬","┐"]},simpleDots:{interval:400,frames:[".  ",".. ","...","   "]},simpleDotsScrolling:{interval:200,frames:[".  ",".. ","..."," ..","  .","   "]},star:{interval:70,frames:["✶","✸","✹","✺","✹","✷"]},star2:{interval:80,frames:["+","x","*"]},flip:{interval:70,frames:["_","_","_","-","`","`","'","´","-","_","_","_"]},hamburger:{interval:100,frames:["☱","☲","☴"]},growVertical:{interval:120,frames:["▁","▃","▄","▅","▆","▇","▆","▅","▄","▃"]},growHorizontal:{interval:120,frames:["▏","▎","▍","▌","▋","▊","▉","▊","▋","▌","▍","▎"]},balloon:{interval:140,frames:[" ",".","o","O","@","*"," "]},balloon2:{interval:120,frames:[".","o","O","°","O","o","."]},noise:{interval:100,frames:["▓","▒","░"]},bounce:{interval:120,frames:["⠁","⠂","⠄","⠂"]},boxBounce:{interval:120,frames:["▖","▘","▝","▗"]},boxBounce2:{interval:100,frames:["▌","▀","▐","▄"]},triangle:{interval:50,frames:["◢","◣","◤","◥"]},arc:{interval:100,frames:["◜","◠","◝","◞","◡","◟"]},circle:{interval:120,frames:["◡","⊙","◠"]},squareCorners:{interval:180,frames:["◰","◳","◲","◱"]},circleQuarters:{interval:120,frames:["◴","◷","◶","◵"]},circleHalves:{interval:50,frames:["◐","◓","◑","◒"]},squish:{interval:100,frames:["╫","╪"]},toggle:{interval:250,frames:["⊶","⊷"]},toggle2:{interval:80,frames:["▫","▪"]},toggle3:{interval:120,frames:["□","■"]},toggle4:{interval:100,frames:["■","□","▪","▫"]},toggle5:{interval:100,frames:["▮","▯"]},toggle6:{interval:300,frames:["ဝ","၀"]},toggle7:{interval:80,frames:["⦾","⦿"]},toggle8:{interval:100,frames:["◍","◌"]},toggle9:{interval:100,frames:["◉","◎"]},toggle10:{interval:100,frames:["㊂","㊀","㊁"]},toggle11:{interval:50,frames:["⧇","⧆"]},toggle12:{interval:120,frames:["☗","☖"]},toggle13:{interval:80,frames:["=","*","-"]},arrow:{interval:100,frames:["←","↖","↑","↗","→","↘","↓","↙"]},arrow2:{interval:80,frames:["⬆️ ","↗️ ","➡️ ","↘️ ","⬇️ ","↙️ ","⬅️ ","↖️ "]},arrow3:{interval:120,frames:["▹▹▹▹▹","▸▹▹▹▹","▹▸▹▹▹","▹▹▸▹▹","▹▹▹▸▹","▹▹▹▹▸"]},bouncingBar:{interval:80,frames:["[    ]","[=   ]","[==  ]","[=== ]","[ ===]","[  ==]","[   =]","[    ]","[   =]","[  ==]","[ ===]","[====]","[=== ]","[==  ]","[=   ]"]},bouncingBall:{interval:80,frames:["( ●    )","(  ●   )","(   ●  )","(    ● )","(     ●)","(    ● )","(   ●  )","(  ●   )","( ●    )","(●     )"]},smiley:{interval:200,frames:["😄 ","😝 "]},monkey:{interval:300,frames:["🙈 ","🙈 ","🙉 ","🙊 "]},hearts:{interval:100,frames:["💛 ","💙 ","💜 ","💚 ","❤️ "]},clock:{interval:100,frames:["🕛 ","🕐 ","🕑 ","🕒 ","🕓 ","🕔 ","🕕 ","🕖 ","🕗 ","🕘 ","🕙 ","🕚 "]},earth:{interval:180,frames:["🌍 ","🌎 ","🌏 "]},moon:{interval:80,frames:["🌑 ","🌒 ","🌓 ","🌔 ","🌕 ","🌖 ","🌗 ","🌘 "]},runner:{interval:140,frames:["🚶 ","🏃 "]},pong:{interval:80,frames:["▐⠂       ▌","▐⠈       ▌","▐ ⠂      ▌","▐ ⠠      ▌","▐  ⡀     ▌","▐  ⠠     ▌","▐   ⠂    ▌","▐   ⠈    ▌","▐    ⠂   ▌","▐    ⠠   ▌","▐     ⡀  ▌","▐     ⠠  ▌","▐      ⠂ ▌","▐      ⠈ ▌","▐       ⠂▌","▐       ⠠▌","▐       ⡀▌","▐      ⠠ ▌","▐      ⠂ ▌","▐     ⠈  ▌","▐     ⠂  ▌","▐    ⠠   ▌","▐    ⡀   ▌","▐   ⠠    ▌","▐   ⠂    ▌","▐  ⠈     ▌","▐  ⠂     ▌","▐ ⠠      ▌","▐ ⡀      ▌","▐⠠       ▌"]},shark:{interval:120,frames:["▐|\\____________▌","▐_|\\___________▌","▐__|\\__________▌","▐___|\\_________▌","▐____|\\________▌","▐_____|\\_______▌","▐______|\\______▌","▐_______|\\_____▌","▐________|\\____▌","▐_________|\\___▌","▐__________|\\__▌","▐___________|\\_▌","▐____________|\\▌","▐____________/|▌","▐___________/|_▌","▐__________/|__▌","▐_________/|___▌","▐________/|____▌","▐_______/|_____▌","▐______/|______▌","▐_____/|_______▌","▐____/|________▌","▐___/|_________▌","▐__/|__________▌","▐_/|___________▌","▐/|____________▌"]},dqpb:{interval:100,frames:["d","q","p","b"]},weather:{interval:100,frames:["☀️ ","☀️ ","☀️ ","🌤 ","⛅️ ","🌥 ","☁️ ","🌧 ","🌨 ","🌧 ","🌨 ","🌧 ","🌨 ","⛈ ","🌨 ","🌧 ","🌨 ","☁️ ","🌥 ","⛅️ ","🌤 ","☀️ ","☀️ "]},christmas:{interval:400,frames:["🌲","🎄"]},grenade:{interval:80,frames:["،   ","′   "," ´ "," ‾ ","  ⸌","  ⸊","  |","  ⁎","  ⁕"," ෴ ","  ⁓","   ","   ","   "]},point:{interval:125,frames:["∙∙∙","●∙∙","∙●∙","∙∙●","∙∙∙"]},layer:{interval:150,frames:["-","=","≡"]}}}},["NHnr"]);
//# sourceMappingURL=app.62717b67a9337e6fb219.js.map
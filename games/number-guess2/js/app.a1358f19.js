(function(e){function t(t){for(var r,i,u=t[0],a=t[1],l=t[2],f=0,d=[];f<u.length;f++)i=u[f],s[i]&&d.push(s[i][0]),s[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var a=n[u];0!==s[a]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var r=n("e97f"),s=n.n(r);s.a},"0631":function(e,t,n){},"0a40":function(e,t,n){},5530:function(e,t,n){"use strict";var r=n("a153"),s=n.n(r);s.a},"6c5a":function(e,t,n){"use strict";var r=n("0a40"),s=n.n(r);s.a},a153:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{id:"app",width:"500px",height:"600px"}},[n("g",{attrs:{transform:"translate(1, 1)"}},[n("g",{staticClass:"message-block"},[e.hasWon?n("g",[n("rect",{attrs:{width:"450",height:"40",x:"0",y:"0",stroke:"none",fill:"#3700b3"}}),n("text",{attrs:{"pointer-events":"none",x:"225",y:"25",stroke:"none",fill:"#fff","text-anchor":"middle"}},[e._v("あたり！こたえは "+e._s(e.answer)+" でした。")]),n("rect",{staticStyle:{fill:"#03dac5"},attrs:{width:"450",height:"30",x:"0",y:"42",stroke:"none",rx:"3",ry:"3"},on:{click:e.onResetClick}}),n("text",{attrs:{"pointer-events":"none",x:"225",y:"62",fill:"black","font-weight":"bold","text-anchor":"middle"}},[e._v("もういちどはじめる")])]):n("g",[n("rect",{attrs:{width:"450",height:"40",x:"0",y:"0",stroke:"none",fill:"#fff","stroke-width":"1"}}),n("text",{attrs:{"pointer-events":"none",x:"225",y:"25",stroke:"none","text-anchor":"middle"}},[e._v("かずあてゲーム2")]),n("text",{attrs:{"pointer-events":"none",x:"225",y:"50",stroke:"none","text-anchor":"middle"}},[e._v("\n          "+e._s(e.level)+"けたのすうじをえらんだよ。あててみてね。\n        ")])])]),n("GuessBoard"),n("NumberKeyboard"),n("GuessList")],1)])},o=[],i=n("9ab4"),u=n("60a3"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("g",{attrs:{transform:"translate(1, 150)"}},e._l(e.numberList,function(t){return n("g",{key:t.index,staticClass:"number-key"},[n("rect",{attrs:{width:"50",height:"50",stroke:"#ccc",fill:t.isSelected?"#fff":"#6200ee","stroke-width":"1",x:t.x,y:t.y},on:{click:function(n){e.onClickKey(t.value)}}}),n("text",{attrs:{"pointer-events":"none","font-weight":"bold",fill:t.isSelected?"#6200ee":"#fff",x:t.x+20,y:t.y+30}},[e._v(e._s(t.value))])])}))},l=[],c=n("2ef0"),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i["b"](t,e),Object.defineProperty(t.prototype,"numberList",{get:function(){var e=this.$store.getters.getSelectedNumbers();return["7","8","9","4","5","6","1","2","3","0","",""].map(function(t,n){return{index:n,value:t,isSelected:c["includes"](e,t),x:n%3*50,y:50*(n-n%3)/3}})},enumerable:!0,configurable:!0}),t.prototype.onClickKey=function(e){this.$store.dispatch("selectNumber",e)},t=i["a"]([u["a"]],t),t}(u["b"]),d=f,p=d,b=(n("5530"),n("2877")),h=Object(b["a"])(p,a,l,!1,null,"3bc6ce7c",null),g=h.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("g",{attrs:{transform:"translate(171, 170)"}},[n("g",[n("text",{attrs:{"pointer-events":"none","font-weight":"bold",x:"0",y:"0"}},[e._v("きろく")]),n("text",{attrs:{"pointer-events":"none","font-weight":"bold",x:"120",y:"0"}},[e._v("あたり")]),n("text",{attrs:{"pointer-events":"none","font-weight":"bold",x:"175",y:"0"}},[e._v("おしい")])]),e._l(e.guessMessageList,function(t,r){return n("g",{key:r,attrs:{transform:"translate(0, 30)"}},[n("text",{attrs:{"pointer-events":"none","font-weight":"bold","text-anchor":"end",x:t.x+30,y:t.y}},[e._v(e._s(t.index)+"：")]),n("text",{attrs:{"pointer-events":"none","font-weight":"bold",x:t.x+40,y:t.y}},[e._v(e._s(t.value))]),n("text",{attrs:{"pointer-events":"none","font-weight":"bold","text-anchor":"end",x:t.x+170,y:t.y}},[e._v(e._s(t.eats)+"こ")]),n("text",{attrs:{"pointer-events":"none","font-weight":"bold","text-anchor":"end",x:t.x+225,y:t.y}},[e._v(e._s(t.bites)+"こ")])])})],2)},m=[],y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i["b"](t,e),Object.defineProperty(t.prototype,"guessMessageList",{get:function(){var e=this.$store.getters.getGuessList(),t=e.map(function(e,t){return Object.assign(e,{index:t+1,x:0,y:20*t})});return t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasWon",{get:function(){return this.$store.getters.hasWon()},enumerable:!0,configurable:!0}),t=i["a"]([u["a"]],t),t}(u["b"]),x=y,w=x,_=(n("6c5a"),Object(b["a"])(w,v,m,!1,null,"3f9771f4",null)),k=_.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("g",{attrs:{transform:"translate(1, 30)"}},e._l(e.selectNumberList,function(t){return n("g",{key:t.index},[n("rect",{attrs:{width:"50",height:"50",stroke:"#ccc",fill:"#fff","stroke-width":"1",x:t.x,y:t.y}}),n("text",{attrs:{"pointer-events":"none","font-weight":"bold",x:t.x+20,y:t.y+30}},[e._v(e._s(t.value))])])}))},O=[],N=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i["b"](t,e),Object.defineProperty(t.prototype,"selectNumberList",{get:function(){var e=this.$store.getters.getLevel(),t=this.$store.getters.getSelectedNumbers();return c["concat"](t,c["fill"](Array(e-t.length),"")).map(function(e,t){return{index:t,value:e,x:50*t,y:50}})},enumerable:!0,configurable:!0}),t=i["a"]([u["a"]],t),t}(u["b"]),S=N,$=S,W=(n("f70b"),Object(b["a"])($,j,O,!1,null,"09f6e420",null)),G=W.exports,L=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i["b"](t,e),Object.defineProperty(t.prototype,"answer",{get:function(){return this.$store.getters.getAnswer()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasWon",{get:function(){return this.$store.getters.hasWon()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"level",{get:function(){return this.$store.getters.getLevel()},enumerable:!0,configurable:!0}),t.prototype.onResetClick=function(e){this.$store.dispatch("resetGame")},t.prototype.created=function(){this.$store.dispatch("resetGame")},t=i["a"]([Object(u["a"])({components:{NumberKeyboard:g,GuessList:k,GuessBoard:G}})],t),t}(u["b"]),P=L,C=P,M=(n("034f"),Object(b["a"])(C,s,o,!1,null,null,null)),A=M.exports,E=n("2f62");function K(e){return c["join"](c["take"](c["shuffle"](c["range"](10)),e),"")}function T(e,t){var n={result:!1,eats:0,bites:0};if(null===e||null===t)return n;if(e.length!==t.length)return n;if(e===t)return n.result=!0,n.eats=e.length,n;var r=c["split"](e,""),s=c["split"](t,"");return r.forEach(function(e,t){e===s[t]?n.eats+=1:c["includes"](s,e)&&(n.bites+=1)}),n}r["default"].use(E["a"]);var B=new E["a"].Store({state:{answer:"",guesses:[],hasWon:!1,level:3,selectedNumbers:[]},getters:{getLevel:function(e,t){return function(){return e.level}},getAnswer:function(e,t){return function(){return e.answer}},getSelectedNumbers:function(e,t){return function(){return e.selectedNumbers}},getGuessList:function(e,t){return function(){return e.guesses}},hasWon:function(e,t){return function(){return e.hasWon}}},mutations:{generateAnswer:function(e,t){e.answer=K(e.level)},addSelectedNumber:function(e,t){e.selectedNumbers.push(t.value)},resetSelectedNumber:function(e,t){e.selectedNumbers=[]},addGuess:function(e,t){e.guesses.push(t)},clearGuesses:function(e,t){e.guesses=[]},setWon:function(e,t){e.hasWon=t.hasWon}},actions:{resetGame:function(e){e.commit("clearGuesses"),e.commit("generateAnswer"),e.commit("resetSelectedNumber"),e.commit("setWon",{hasWon:!1})},selectNumber:function(e,t){if(e.state.selectedNumbers.length===e.state.level&&e.commit("resetSelectedNumber",{}),e.commit("addSelectedNumber",{value:t}),e.state.selectedNumbers.length===e.state.level){var n=e.state.selectedNumbers.join(""),r=T(e.state.answer,n);r.result?e.commit("setWon",{hasWon:!0}):e.commit("addGuess",{value:n,eats:r.eats,bites:r.bites})}}}});r["default"].config.productionTip=!1,new r["default"]({store:B,render:function(e){return e(A)}}).$mount("#app")},e97f:function(e,t,n){},f70b:function(e,t,n){"use strict";var r=n("0631"),s=n.n(r);s.a}});
//# sourceMappingURL=app.a1358f19.js.map
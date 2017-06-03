// Compiled by ClojureScript 1.9.473 {}
goog.provide('keyboard_sketch.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
keyboard_sketch.core.init_draw_area = (function keyboard_sketch$core$init_draw_area(){
quil.core.fill.call(null,(240));

return quil.core.rect.call(null,(20),(20),((700) - (40)),((500) - (100)),(3));
});
keyboard_sketch.core.draw_board = (function keyboard_sketch$core$draw_board(){
quil.core.background.call(null,(237),(15),(14));

keyboard_sketch.core.init_draw_area.call(null);

quil.core.fill.call(null,(255));

quil.core.ellipse.call(null,(50),(460),(60),(60));

quil.core.ellipse.call(null,(650),(460),(60),(60));

quil.core.fill.call(null,(0));

quil.core.text.call(null,"d",(30),(460));

quil.core.text.call(null,"f",(60),(460));

quil.core.text.call(null,"j",(630),(460));

return quil.core.text.call(null,"k",(660),(460));
});
keyboard_sketch.core.setup = (function keyboard_sketch$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

keyboard_sketch.core.draw_board.call(null);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(quil.core.width.call(null) / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(quil.core.width.call(null) / (2))], null);
});
keyboard_sketch.core.key_pressed = (function keyboard_sketch$core$key_pressed(state,event){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"c","c",-1763192079))){
keyboard_sketch.core.init_draw_area.call(null);
} else {
}

var G__8476 = (((new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event).fqn:null);
switch (G__8476) {
case "d":
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state) - (1)));

break;
case "f":
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state) + (1)));

break;
case "j":
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state) - (1)));

break;
case "k":
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state) + (1)));

break;
default:
return state;

}
});
keyboard_sketch.core.draw_state = (function keyboard_sketch$core$draw_state(state){
quil.core.fill.call(null,(0));

return quil.core.point.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state));
});
keyboard_sketch.core.keyboard_sketch = (function keyboard_sketch$core$keyboard_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"keyboard-sketch",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,keyboard_sketch.core.setup))?(function() { 
var G__8478__delegate = function (args){
return cljs.core.apply.call(null,keyboard_sketch.core.setup,args);
};
var G__8478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8479__i = 0, G__8479__a = new Array(arguments.length -  0);
while (G__8479__i < G__8479__a.length) {G__8479__a[G__8479__i] = arguments[G__8479__i + 0]; ++G__8479__i;}
  args = new cljs.core.IndexedSeq(G__8479__a,0);
} 
return G__8478__delegate.call(this,args);};
G__8478.cljs$lang$maxFixedArity = 0;
G__8478.cljs$lang$applyTo = (function (arglist__8480){
var args = cljs.core.seq(arglist__8480);
return G__8478__delegate(args);
});
G__8478.cljs$core$IFn$_invoke$arity$variadic = G__8478__delegate;
return G__8478;
})()
:keyboard_sketch.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,keyboard_sketch.core.key_pressed))?(function() { 
var G__8481__delegate = function (args){
return cljs.core.apply.call(null,keyboard_sketch.core.key_pressed,args);
};
var G__8481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8482__i = 0, G__8482__a = new Array(arguments.length -  0);
while (G__8482__i < G__8482__a.length) {G__8482__a[G__8482__i] = arguments[G__8482__i + 0]; ++G__8482__i;}
  args = new cljs.core.IndexedSeq(G__8482__a,0);
} 
return G__8481__delegate.call(this,args);};
G__8481.cljs$lang$maxFixedArity = 0;
G__8481.cljs$lang$applyTo = (function (arglist__8483){
var args = cljs.core.seq(arglist__8483);
return G__8481__delegate(args);
});
G__8481.cljs$core$IFn$_invoke$arity$variadic = G__8481__delegate;
return G__8481;
})()
:keyboard_sketch.core.key_pressed),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,keyboard_sketch.core.draw_state))?(function() { 
var G__8484__delegate = function (args){
return cljs.core.apply.call(null,keyboard_sketch.core.draw_state,args);
};
var G__8484 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8485__i = 0, G__8485__a = new Array(arguments.length -  0);
while (G__8485__i < G__8485__a.length) {G__8485__a[G__8485__i] = arguments[G__8485__i + 0]; ++G__8485__i;}
  args = new cljs.core.IndexedSeq(G__8485__a,0);
} 
return G__8484__delegate.call(this,args);};
G__8484.cljs$lang$maxFixedArity = 0;
G__8484.cljs$lang$applyTo = (function (arglist__8486){
var args = cljs.core.seq(arglist__8486);
return G__8484__delegate(args);
});
G__8484.cljs$core$IFn$_invoke$arity$variadic = G__8484__delegate;
return G__8484;
})()
:keyboard_sketch.core.draw_state));
});
goog.exportSymbol('keyboard_sketch.core.keyboard_sketch', keyboard_sketch.core.keyboard_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8011__8012__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8011__8012__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),keyboard_sketch.core.keyboard_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"keyboard-sketch"], null));
}

//# sourceMappingURL=core.js.map
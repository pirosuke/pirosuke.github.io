// Compiled by ClojureScript 1.9.473 {}
goog.provide('spirograph.turning_triangle');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
spirograph.turning_triangle.setup = (function spirograph$turning_triangle$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.background.call(null,(240));

return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"x","x",2099068185),((200) * quil.core.cos.call(null,(0))),new cljs.core.Keyword(null,"y","y",-1757859776),((200) * quil.core.sin.call(null,(0))),new cljs.core.Keyword(null,"px","px",281329899),((200) * quil.core.cos.call(null,(0))),new cljs.core.Keyword(null,"py","py",1397985916),((200) * quil.core.sin.call(null,(0)))], null);
});
spirograph.turning_triangle.update_state = (function spirograph$turning_triangle$update_state(state){
var angle = (new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + (2));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),angle,new cljs.core.Keyword(null,"x","x",2099068185),((200) * quil.core.cos.call(null,angle)),new cljs.core.Keyword(null,"y","y",-1757859776),((200) * quil.core.sin.call(null,angle)),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"py","py",1397985916),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state)], null);
});
spirograph.turning_triangle.draw_state = (function spirograph$turning_triangle$draw_state(state){
quil.core.stroke.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var tr__8398__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8398__auto__);

return quil.core.line.call(null,new cljs.core.Keyword(null,"px","px",281329899).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"py","py",1397985916).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state));
}finally {quil.core.pop_matrix.call(null);
}});
spirograph.turning_triangle.spirograph = (function spirograph$turning_triangle$spirograph(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"spirograph",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,spirograph.turning_triangle.update_state))?(function() { 
var G__8497__delegate = function (args){
return cljs.core.apply.call(null,spirograph.turning_triangle.update_state,args);
};
var G__8497 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8498__i = 0, G__8498__a = new Array(arguments.length -  0);
while (G__8498__i < G__8498__a.length) {G__8498__a[G__8498__i] = arguments[G__8498__i + 0]; ++G__8498__i;}
  args = new cljs.core.IndexedSeq(G__8498__a,0);
} 
return G__8497__delegate.call(this,args);};
G__8497.cljs$lang$maxFixedArity = 0;
G__8497.cljs$lang$applyTo = (function (arglist__8499){
var args = cljs.core.seq(arglist__8499);
return G__8497__delegate(args);
});
G__8497.cljs$core$IFn$_invoke$arity$variadic = G__8497__delegate;
return G__8497;
})()
:spirograph.turning_triangle.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,spirograph.turning_triangle.setup))?(function() { 
var G__8500__delegate = function (args){
return cljs.core.apply.call(null,spirograph.turning_triangle.setup,args);
};
var G__8500 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8501__i = 0, G__8501__a = new Array(arguments.length -  0);
while (G__8501__i < G__8501__a.length) {G__8501__a[G__8501__i] = arguments[G__8501__i + 0]; ++G__8501__i;}
  args = new cljs.core.IndexedSeq(G__8501__a,0);
} 
return G__8500__delegate.call(this,args);};
G__8500.cljs$lang$maxFixedArity = 0;
G__8500.cljs$lang$applyTo = (function (arglist__8502){
var args = cljs.core.seq(arglist__8502);
return G__8500__delegate(args);
});
G__8500.cljs$core$IFn$_invoke$arity$variadic = G__8500__delegate;
return G__8500;
})()
:spirograph.turning_triangle.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,spirograph.turning_triangle.draw_state))?(function() { 
var G__8503__delegate = function (args){
return cljs.core.apply.call(null,spirograph.turning_triangle.draw_state,args);
};
var G__8503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8504__i = 0, G__8504__a = new Array(arguments.length -  0);
while (G__8504__i < G__8504__a.length) {G__8504__a[G__8504__i] = arguments[G__8504__i + 0]; ++G__8504__i;}
  args = new cljs.core.IndexedSeq(G__8504__a,0);
} 
return G__8503__delegate.call(this,args);};
G__8503.cljs$lang$maxFixedArity = 0;
G__8503.cljs$lang$applyTo = (function (arglist__8505){
var args = cljs.core.seq(arglist__8505);
return G__8503__delegate(args);
});
G__8503.cljs$core$IFn$_invoke$arity$variadic = G__8503__delegate;
return G__8503;
})()
:spirograph.turning_triangle.draw_state));
});
goog.exportSymbol('spirograph.turning_triangle.spirograph', spirograph.turning_triangle.spirograph);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8011__8012__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8011__8012__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),spirograph.turning_triangle.spirograph,new cljs.core.Keyword(null,"host-id","host-id",742376279),"spirograph"], null));
}

//# sourceMappingURL=turning_triangle.js.map
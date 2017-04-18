// Compiled by ClojureScript 1.9.473 {}
goog.provide('spirograph.failed_circle1');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
spirograph.failed_circle1.setting = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),(150),new cljs.core.Keyword(null,"gear-r","gear-r",-40311851),(50)], null);
spirograph.failed_circle1.setup = (function spirograph$failed_circle1$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.background.call(null,(240));

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(spirograph.failed_circle1.setting) * quil.core.cos.call(null,(0))),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(spirograph.failed_circle1.setting) * quil.core.sin.call(null,(0))),new cljs.core.Keyword(null,"px","px",281329899),(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(spirograph.failed_circle1.setting) * quil.core.cos.call(null,(0))),new cljs.core.Keyword(null,"py","py",1397985916),(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(spirograph.failed_circle1.setting) * quil.core.sin.call(null,(0))),new cljs.core.Keyword(null,"gear","gear",1356471696),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"gear-r","gear-r",-40311851).cljs$core$IFn$_invoke$arity$1(spirograph.failed_circle1.setting) * quil.core.cos.call(null,(0))),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"gear-r","gear-r",-40311851).cljs$core$IFn$_invoke$arity$1(spirograph.failed_circle1.setting) * quil.core.sin.call(null,(0))),new cljs.core.Keyword(null,"px","px",281329899),(new cljs.core.Keyword(null,"gear-r","gear-r",-40311851).cljs$core$IFn$_invoke$arity$1(spirograph.failed_circle1.setting) * quil.core.cos.call(null,(0))),new cljs.core.Keyword(null,"py","py",1397985916),(new cljs.core.Keyword(null,"gear-r","gear-r",-40311851).cljs$core$IFn$_invoke$arity$1(spirograph.failed_circle1.setting) * quil.core.sin.call(null,(0)))], null)], null);
});
spirograph.failed_circle1.update_state = (function spirograph$failed_circle1$update_state(state){
var angle = (new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1);
var gear_angle = (new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gear","gear",1356471696).cljs$core$IFn$_invoke$arity$1(state)) + (0.1 * (new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(spirograph.failed_circle1.setting) / new cljs.core.Keyword(null,"gear-r","gear-r",-40311851).cljs$core$IFn$_invoke$arity$1(spirograph.failed_circle1.setting))));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),angle,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(spirograph.failed_circle1.setting) * quil.core.cos.call(null,angle)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(spirograph.failed_circle1.setting) * quil.core.sin.call(null,angle)),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"py","py",1397985916),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"gear","gear",1356471696),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"angle","angle",1622094254),gear_angle,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"gear-r","gear-r",-40311851).cljs$core$IFn$_invoke$arity$1(spirograph.failed_circle1.setting) * quil.core.cos.call(null,gear_angle)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"gear-r","gear-r",-40311851).cljs$core$IFn$_invoke$arity$1(spirograph.failed_circle1.setting) * quil.core.sin.call(null,gear_angle)),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gear","gear",1356471696).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"py","py",1397985916),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gear","gear",1356471696).cljs$core$IFn$_invoke$arity$1(state))], null)], null);
});
spirograph.failed_circle1.draw_state = (function spirograph$failed_circle1$draw_state(state){
quil.core.stroke.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var tr__8398__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8398__auto__);

quil.core.line.call(null,new cljs.core.Keyword(null,"px","px",281329899).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"py","py",1397985916).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state));

var tr__8398__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8398__auto____$1);

return quil.core.line.call(null,new cljs.core.Keyword(null,"px","px",281329899).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gear","gear",1356471696).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"py","py",1397985916).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gear","gear",1356471696).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gear","gear",1356471696).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gear","gear",1356471696).cljs$core$IFn$_invoke$arity$1(state)));
}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}});
spirograph.failed_circle1.spirograph = (function spirograph$failed_circle1$spirograph(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"spirograph",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,spirograph.failed_circle1.update_state))?(function() { 
var G__8475__delegate = function (args){
return cljs.core.apply.call(null,spirograph.failed_circle1.update_state,args);
};
var G__8475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8476__i = 0, G__8476__a = new Array(arguments.length -  0);
while (G__8476__i < G__8476__a.length) {G__8476__a[G__8476__i] = arguments[G__8476__i + 0]; ++G__8476__i;}
  args = new cljs.core.IndexedSeq(G__8476__a,0);
} 
return G__8475__delegate.call(this,args);};
G__8475.cljs$lang$maxFixedArity = 0;
G__8475.cljs$lang$applyTo = (function (arglist__8477){
var args = cljs.core.seq(arglist__8477);
return G__8475__delegate(args);
});
G__8475.cljs$core$IFn$_invoke$arity$variadic = G__8475__delegate;
return G__8475;
})()
:spirograph.failed_circle1.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,spirograph.failed_circle1.setup))?(function() { 
var G__8478__delegate = function (args){
return cljs.core.apply.call(null,spirograph.failed_circle1.setup,args);
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
:spirograph.failed_circle1.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,spirograph.failed_circle1.draw_state))?(function() { 
var G__8481__delegate = function (args){
return cljs.core.apply.call(null,spirograph.failed_circle1.draw_state,args);
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
:spirograph.failed_circle1.draw_state));
});
goog.exportSymbol('spirograph.failed_circle1.spirograph', spirograph.failed_circle1.spirograph);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8011__8012__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8011__8012__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),spirograph.failed_circle1.spirograph,new cljs.core.Keyword(null,"host-id","host-id",742376279),"spirograph"], null));
}

//# sourceMappingURL=failed_circle1.js.map
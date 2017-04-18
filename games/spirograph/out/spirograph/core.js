// Compiled by ClojureScript 1.9.473 {}
goog.provide('spirograph.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
cljs.core.enable_console_print_BANG_.call(null);
spirograph.core.setting = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"base-r","base-r",-1922186088),(150),new cljs.core.Keyword(null,"gear-r","gear-r",-40311851),(80),new cljs.core.Keyword(null,"point-r","point-r",17863136),(50),new cljs.core.Keyword(null,"base-angle-update-rate","base-angle-update-rate",1643131429),0.01,new cljs.core.Keyword(null,"gear-angle-update-rate","gear-angle-update-rate",-906920409),-0.01,new cljs.core.Keyword(null,"base-color","base-color",-1117474436),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null),new cljs.core.Keyword(null,"point-color","point-color",-255424866),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255)], null)], null);
spirograph.core.update_setting = (function spirograph$core$update_setting(e){
cljs.core.println.call(null,"update-setting called");

var base_r = document.getElementById("base-r").value;
var gear_r = document.getElementById("gear-r").value;
var point_r = document.getElementById("point-r").value;
var base_angle_update_rate = document.getElementById("base-angle-update-rate").value;
var gear_angle_update_rate = document.getElementById("gear-angle-update-rate").value;
var base_color_r = document.getElementById("base-color-r").value;
var base_color_g = document.getElementById("base-color-g").value;
var base_color_b = document.getElementById("base-color-b").value;
var point_color_r = document.getElementById("point-color-r").value;
var point_color_g = document.getElementById("point-color-g").value;
var point_color_b = document.getElementById("point-color-b").value;
var _STAR_applet_STAR_8476 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = quil.core.get_sketch_by_id.call(null,"spirograph");

try{return cljs.core.swap_BANG_.call(null,quil.core.state_atom.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setting","setting",928308078)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"base-r","base-r",-1922186088),parseInt(base_r),new cljs.core.Keyword(null,"gear-r","gear-r",-40311851),parseInt(gear_r),new cljs.core.Keyword(null,"point-r","point-r",17863136),parseInt(point_r),new cljs.core.Keyword(null,"base-angle-update-rate","base-angle-update-rate",1643131429),parseFloat(base_angle_update_rate),new cljs.core.Keyword(null,"gear-angle-update-rate","gear-angle-update-rate",-906920409),parseFloat(gear_angle_update_rate),new cljs.core.Keyword(null,"base-color","base-color",-1117474436),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(base_color_r),parseInt(base_color_g),parseInt(base_color_b)], null),new cljs.core.Keyword(null,"point-color","point-color",-255424866),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(point_color_r),parseInt(point_color_g),parseInt(point_color_b)], null)], null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_8476;
}});
spirograph.core.clear_canvas = (function spirograph$core$clear_canvas(e){
cljs.core.println.call(null,"clear-canvas called");

var _STAR_applet_STAR_8478 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = quil.core.get_sketch_by_id.call(null,"spirograph");

try{return quil.core.background.call(null,(240));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_8478;
}});
spirograph.core.point_by_angle = (function spirograph$core$point_by_angle(center_x,center_y,r,angle){
var x = (r * quil.core.cos.call(null,angle));
var y = (r * quil.core.sin.call(null,angle));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(center_x + x),new cljs.core.Keyword(null,"y","y",-1757859776),(center_y + y),new cljs.core.Keyword(null,"angle","angle",1622094254),angle], null);
});
spirograph.core.setup = (function spirograph$core$setup(){
quil.core.frame_rate.call(null,(300));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

quil.core.background.call(null,(240));

document.getElementById("update-btn").addEventListener("click",spirograph.core.update_setting);

document.getElementById("clear-btn").addEventListener("click",spirograph.core.clear_canvas);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"gear-angle","gear-angle",1020618276),(0),new cljs.core.Keyword(null,"setting","setting",928308078),spirograph.core.setting], null);
});
spirograph.core.update_state = (function spirograph$core$update_state(state){
var angle = (new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + new cljs.core.Keyword(null,"base-angle-update-rate","base-angle-update-rate",1643131429).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"setting","setting",928308078).cljs$core$IFn$_invoke$arity$1(state)));
var gear_angle = (new cljs.core.Keyword(null,"gear-angle","gear-angle",1020618276).cljs$core$IFn$_invoke$arity$1(state) + new cljs.core.Keyword(null,"gear-angle-update-rate","gear-angle-update-rate",-906920409).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"setting","setting",928308078).cljs$core$IFn$_invoke$arity$1(state)));
var center_x = (quil.core.width.call(null) / (2));
var center_y = (quil.core.height.call(null) / (2));
var base_point = spirograph.core.point_by_angle.call(null,center_x,center_y,new cljs.core.Keyword(null,"base-r","base-r",-1922186088).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"setting","setting",928308078).cljs$core$IFn$_invoke$arity$1(state)),angle);
var gear_center_x = Math.abs((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(base_point) - (quil.core.cos.call(null,angle) * new cljs.core.Keyword(null,"gear-r","gear-r",-40311851).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"setting","setting",928308078).cljs$core$IFn$_invoke$arity$1(state)))));
var gear_center_y = Math.abs((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(base_point) - (quil.core.sin.call(null,angle) * new cljs.core.Keyword(null,"gear-r","gear-r",-40311851).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"setting","setting",928308078).cljs$core$IFn$_invoke$arity$1(state)))));
var gear_point = spirograph.core.point_by_angle.call(null,gear_center_x,gear_center_y,new cljs.core.Keyword(null,"point-r","point-r",17863136).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"setting","setting",928308078).cljs$core$IFn$_invoke$arity$1(state)),gear_angle);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"base-point","base-point",1393315541),base_point,new cljs.core.Keyword(null,"gear-point","gear-point",-1909383750),gear_point,new cljs.core.Keyword(null,"angle","angle",1622094254),angle,new cljs.core.Keyword(null,"gear-angle","gear-angle",1020618276),gear_angle,new cljs.core.Keyword(null,"setting","setting",928308078),new cljs.core.Keyword(null,"setting","setting",928308078).cljs$core$IFn$_invoke$arity$1(state)], null);
});
spirograph.core.draw_state = (function spirograph$core$draw_state(state){
cljs.core.apply.call(null,quil.core.stroke,new cljs.core.Keyword(null,"base-color","base-color",-1117474436).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"setting","setting",928308078).cljs$core$IFn$_invoke$arity$1(state)));

quil.core.point.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-point","base-point",1393315541).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-point","base-point",1393315541).cljs$core$IFn$_invoke$arity$1(state)));

cljs.core.apply.call(null,quil.core.stroke,new cljs.core.Keyword(null,"point-color","point-color",-255424866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"setting","setting",928308078).cljs$core$IFn$_invoke$arity$1(state)));

return quil.core.point.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gear-point","gear-point",-1909383750).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gear-point","gear-point",-1909383750).cljs$core$IFn$_invoke$arity$1(state)));
});
spirograph.core.spirograph = (function spirograph$core$spirograph(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"spirograph",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,spirograph.core.update_state))?(function() { 
var G__8479__delegate = function (args){
return cljs.core.apply.call(null,spirograph.core.update_state,args);
};
var G__8479 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8480__i = 0, G__8480__a = new Array(arguments.length -  0);
while (G__8480__i < G__8480__a.length) {G__8480__a[G__8480__i] = arguments[G__8480__i + 0]; ++G__8480__i;}
  args = new cljs.core.IndexedSeq(G__8480__a,0);
} 
return G__8479__delegate.call(this,args);};
G__8479.cljs$lang$maxFixedArity = 0;
G__8479.cljs$lang$applyTo = (function (arglist__8481){
var args = cljs.core.seq(arglist__8481);
return G__8479__delegate(args);
});
G__8479.cljs$core$IFn$_invoke$arity$variadic = G__8479__delegate;
return G__8479;
})()
:spirograph.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,spirograph.core.setup))?(function() { 
var G__8482__delegate = function (args){
return cljs.core.apply.call(null,spirograph.core.setup,args);
};
var G__8482 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8483__i = 0, G__8483__a = new Array(arguments.length -  0);
while (G__8483__i < G__8483__a.length) {G__8483__a[G__8483__i] = arguments[G__8483__i + 0]; ++G__8483__i;}
  args = new cljs.core.IndexedSeq(G__8483__a,0);
} 
return G__8482__delegate.call(this,args);};
G__8482.cljs$lang$maxFixedArity = 0;
G__8482.cljs$lang$applyTo = (function (arglist__8484){
var args = cljs.core.seq(arglist__8484);
return G__8482__delegate(args);
});
G__8482.cljs$core$IFn$_invoke$arity$variadic = G__8482__delegate;
return G__8482;
})()
:spirograph.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,spirograph.core.draw_state))?(function() { 
var G__8485__delegate = function (args){
return cljs.core.apply.call(null,spirograph.core.draw_state,args);
};
var G__8485 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8486__i = 0, G__8486__a = new Array(arguments.length -  0);
while (G__8486__i < G__8486__a.length) {G__8486__a[G__8486__i] = arguments[G__8486__i + 0]; ++G__8486__i;}
  args = new cljs.core.IndexedSeq(G__8486__a,0);
} 
return G__8485__delegate.call(this,args);};
G__8485.cljs$lang$maxFixedArity = 0;
G__8485.cljs$lang$applyTo = (function (arglist__8487){
var args = cljs.core.seq(arglist__8487);
return G__8485__delegate(args);
});
G__8485.cljs$core$IFn$_invoke$arity$variadic = G__8485__delegate;
return G__8485;
})()
:spirograph.core.draw_state));
});
goog.exportSymbol('spirograph.core.spirograph', spirograph.core.spirograph);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8011__8012__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8011__8012__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),spirograph.core.spirograph,new cljs.core.Keyword(null,"host-id","host-id",742376279),"spirograph"], null));
}

//# sourceMappingURL=core.js.map
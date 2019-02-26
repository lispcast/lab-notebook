// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e28863){if((e28863 instanceof Error)){
var e = e28863;
return "Error: Unable to stringify";
} else {
throw e28863;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__28866 = arguments.length;
switch (G__28866) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__28864_SHARP_){
if(typeof p1__28864_SHARP_ === 'string'){
return p1__28864_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__28864_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28869 = arguments.length;
var i__4731__auto___28870 = (0);
while(true){
if((i__4731__auto___28870 < len__4730__auto___28869)){
args__4736__auto__.push((arguments[i__4731__auto___28870]));

var G__28871 = (i__4731__auto___28870 + (1));
i__4731__auto___28870 = G__28871;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq28868){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28868));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28873 = arguments.length;
var i__4731__auto___28874 = (0);
while(true){
if((i__4731__auto___28874 < len__4730__auto___28873)){
args__4736__auto__.push((arguments[i__4731__auto___28874]));

var G__28875 = (i__4731__auto___28874 + (1));
i__4731__auto___28874 = G__28875;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq28872){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28872));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28876){
var map__28877 = p__28876;
var map__28877__$1 = (((((!((map__28877 == null))))?(((((map__28877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28877):map__28877);
var message = cljs.core.get.call(null,map__28877__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28877__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23535__auto___28956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto___28956,ch){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto___28956,ch){
return (function (state_28928){
var state_val_28929 = (state_28928[(1)]);
if((state_val_28929 === (7))){
var inst_28924 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
var statearr_28930_28957 = state_28928__$1;
(statearr_28930_28957[(2)] = inst_28924);

(statearr_28930_28957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (1))){
var state_28928__$1 = state_28928;
var statearr_28931_28958 = state_28928__$1;
(statearr_28931_28958[(2)] = null);

(statearr_28931_28958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (4))){
var inst_28881 = (state_28928[(7)]);
var inst_28881__$1 = (state_28928[(2)]);
var state_28928__$1 = (function (){var statearr_28932 = state_28928;
(statearr_28932[(7)] = inst_28881__$1);

return statearr_28932;
})();
if(cljs.core.truth_(inst_28881__$1)){
var statearr_28933_28959 = state_28928__$1;
(statearr_28933_28959[(1)] = (5));

} else {
var statearr_28934_28960 = state_28928__$1;
(statearr_28934_28960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (15))){
var inst_28888 = (state_28928[(8)]);
var inst_28903 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28888);
var inst_28904 = cljs.core.first.call(null,inst_28903);
var inst_28905 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28904);
var inst_28906 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28905)].join('');
var inst_28907 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28906);
var state_28928__$1 = state_28928;
var statearr_28935_28961 = state_28928__$1;
(statearr_28935_28961[(2)] = inst_28907);

(statearr_28935_28961[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (13))){
var inst_28912 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
var statearr_28936_28962 = state_28928__$1;
(statearr_28936_28962[(2)] = inst_28912);

(statearr_28936_28962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (6))){
var state_28928__$1 = state_28928;
var statearr_28937_28963 = state_28928__$1;
(statearr_28937_28963[(2)] = null);

(statearr_28937_28963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (17))){
var inst_28910 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
var statearr_28938_28964 = state_28928__$1;
(statearr_28938_28964[(2)] = inst_28910);

(statearr_28938_28964[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (3))){
var inst_28926 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28928__$1,inst_28926);
} else {
if((state_val_28929 === (12))){
var inst_28887 = (state_28928[(9)]);
var inst_28901 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28887,opts);
var state_28928__$1 = state_28928;
if(inst_28901){
var statearr_28939_28965 = state_28928__$1;
(statearr_28939_28965[(1)] = (15));

} else {
var statearr_28940_28966 = state_28928__$1;
(statearr_28940_28966[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (2))){
var state_28928__$1 = state_28928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28928__$1,(4),ch);
} else {
if((state_val_28929 === (11))){
var inst_28888 = (state_28928[(8)]);
var inst_28893 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28894 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28888);
var inst_28895 = cljs.core.async.timeout.call(null,(1000));
var inst_28896 = [inst_28894,inst_28895];
var inst_28897 = (new cljs.core.PersistentVector(null,2,(5),inst_28893,inst_28896,null));
var state_28928__$1 = state_28928;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28928__$1,(14),inst_28897);
} else {
if((state_val_28929 === (9))){
var inst_28888 = (state_28928[(8)]);
var inst_28914 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28915 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28888);
var inst_28916 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28915);
var inst_28917 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28916)].join('');
var inst_28918 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28917);
var state_28928__$1 = (function (){var statearr_28941 = state_28928;
(statearr_28941[(10)] = inst_28914);

return statearr_28941;
})();
var statearr_28942_28967 = state_28928__$1;
(statearr_28942_28967[(2)] = inst_28918);

(statearr_28942_28967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (5))){
var inst_28881 = (state_28928[(7)]);
var inst_28883 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28884 = (new cljs.core.PersistentArrayMap(null,2,inst_28883,null));
var inst_28885 = (new cljs.core.PersistentHashSet(null,inst_28884,null));
var inst_28886 = figwheel.client.focus_msgs.call(null,inst_28885,inst_28881);
var inst_28887 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28886);
var inst_28888 = cljs.core.first.call(null,inst_28886);
var inst_28889 = figwheel.client.autoload_QMARK_.call(null);
var state_28928__$1 = (function (){var statearr_28943 = state_28928;
(statearr_28943[(8)] = inst_28888);

(statearr_28943[(9)] = inst_28887);

return statearr_28943;
})();
if(cljs.core.truth_(inst_28889)){
var statearr_28944_28968 = state_28928__$1;
(statearr_28944_28968[(1)] = (8));

} else {
var statearr_28945_28969 = state_28928__$1;
(statearr_28945_28969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (14))){
var inst_28899 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
var statearr_28946_28970 = state_28928__$1;
(statearr_28946_28970[(2)] = inst_28899);

(statearr_28946_28970[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (16))){
var state_28928__$1 = state_28928;
var statearr_28947_28971 = state_28928__$1;
(statearr_28947_28971[(2)] = null);

(statearr_28947_28971[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (10))){
var inst_28920 = (state_28928[(2)]);
var state_28928__$1 = (function (){var statearr_28948 = state_28928;
(statearr_28948[(11)] = inst_28920);

return statearr_28948;
})();
var statearr_28949_28972 = state_28928__$1;
(statearr_28949_28972[(2)] = null);

(statearr_28949_28972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (8))){
var inst_28887 = (state_28928[(9)]);
var inst_28891 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28887,opts);
var state_28928__$1 = state_28928;
if(cljs.core.truth_(inst_28891)){
var statearr_28950_28973 = state_28928__$1;
(statearr_28950_28973[(1)] = (11));

} else {
var statearr_28951_28974 = state_28928__$1;
(statearr_28951_28974[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23535__auto___28956,ch))
;
return ((function (switch__23475__auto__,c__23535__auto___28956,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23476__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23476__auto____0 = (function (){
var statearr_28952 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28952[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23476__auto__);

(statearr_28952[(1)] = (1));

return statearr_28952;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23476__auto____1 = (function (state_28928){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_28928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e28953){if((e28953 instanceof Object)){
var ex__23479__auto__ = e28953;
var statearr_28954_28975 = state_28928;
(statearr_28954_28975[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28976 = state_28928;
state_28928 = G__28976;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23476__auto__ = function(state_28928){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23476__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23476__auto____1.call(this,state_28928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23476__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23476__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto___28956,ch))
})();
var state__23537__auto__ = (function (){var statearr_28955 = f__23536__auto__.call(null);
(statearr_28955[(6)] = c__23535__auto___28956);

return statearr_28955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto___28956,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28977_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28977_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28983 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28983){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28979 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28980 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28981 = true;
var _STAR_print_fn_STAR__temp_val__28982 = ((function (_STAR_print_newline_STAR__orig_val__28979,_STAR_print_fn_STAR__orig_val__28980,_STAR_print_newline_STAR__temp_val__28981,sb,base_path_28983){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__28979,_STAR_print_fn_STAR__orig_val__28980,_STAR_print_newline_STAR__temp_val__28981,sb,base_path_28983))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28981;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28982;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28980;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28979;
}}catch (e28978){if((e28978 instanceof Error)){
var e = e28978;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28983], null));
} else {
var e = e28978;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28983))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28984){
var map__28985 = p__28984;
var map__28985__$1 = (((((!((map__28985 == null))))?(((((map__28985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28985):map__28985);
var opts = map__28985__$1;
var build_id = cljs.core.get.call(null,map__28985__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28985,map__28985__$1,opts,build_id){
return (function (p__28987){
var vec__28988 = p__28987;
var seq__28989 = cljs.core.seq.call(null,vec__28988);
var first__28990 = cljs.core.first.call(null,seq__28989);
var seq__28989__$1 = cljs.core.next.call(null,seq__28989);
var map__28991 = first__28990;
var map__28991__$1 = (((((!((map__28991 == null))))?(((((map__28991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28991):map__28991);
var msg = map__28991__$1;
var msg_name = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28989__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28988,seq__28989,first__28990,seq__28989__$1,map__28991,map__28991__$1,msg,msg_name,_,map__28985,map__28985__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28988,seq__28989,first__28990,seq__28989__$1,map__28991,map__28991__$1,msg,msg_name,_,map__28985,map__28985__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28985,map__28985__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28993){
var vec__28994 = p__28993;
var seq__28995 = cljs.core.seq.call(null,vec__28994);
var first__28996 = cljs.core.first.call(null,seq__28995);
var seq__28995__$1 = cljs.core.next.call(null,seq__28995);
var map__28997 = first__28996;
var map__28997__$1 = (((((!((map__28997 == null))))?(((((map__28997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28997):map__28997);
var msg = map__28997__$1;
var msg_name = cljs.core.get.call(null,map__28997__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28995__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28999){
var map__29000 = p__28999;
var map__29000__$1 = (((((!((map__29000 == null))))?(((((map__29000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29000):map__29000);
var on_compile_warning = cljs.core.get.call(null,map__29000__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29000__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29000,map__29000__$1,on_compile_warning,on_compile_fail){
return (function (p__29002){
var vec__29003 = p__29002;
var seq__29004 = cljs.core.seq.call(null,vec__29003);
var first__29005 = cljs.core.first.call(null,seq__29004);
var seq__29004__$1 = cljs.core.next.call(null,seq__29004);
var map__29006 = first__29005;
var map__29006__$1 = (((((!((map__29006 == null))))?(((((map__29006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29006):map__29006);
var msg = map__29006__$1;
var msg_name = cljs.core.get.call(null,map__29006__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29004__$1;
var pred__29008 = cljs.core._EQ_;
var expr__29009 = msg_name;
if(cljs.core.truth_(pred__29008.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29009))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29008.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29009))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29000,map__29000__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto__,msg_hist,msg_names,msg){
return (function (state_29098){
var state_val_29099 = (state_29098[(1)]);
if((state_val_29099 === (7))){
var inst_29018 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
if(cljs.core.truth_(inst_29018)){
var statearr_29100_29147 = state_29098__$1;
(statearr_29100_29147[(1)] = (8));

} else {
var statearr_29101_29148 = state_29098__$1;
(statearr_29101_29148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (20))){
var inst_29092 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
var statearr_29102_29149 = state_29098__$1;
(statearr_29102_29149[(2)] = inst_29092);

(statearr_29102_29149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (27))){
var inst_29088 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
var statearr_29103_29150 = state_29098__$1;
(statearr_29103_29150[(2)] = inst_29088);

(statearr_29103_29150[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (1))){
var inst_29011 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29098__$1 = state_29098;
if(cljs.core.truth_(inst_29011)){
var statearr_29104_29151 = state_29098__$1;
(statearr_29104_29151[(1)] = (2));

} else {
var statearr_29105_29152 = state_29098__$1;
(statearr_29105_29152[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (24))){
var inst_29090 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
var statearr_29106_29153 = state_29098__$1;
(statearr_29106_29153[(2)] = inst_29090);

(statearr_29106_29153[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (4))){
var inst_29096 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29098__$1,inst_29096);
} else {
if((state_val_29099 === (15))){
var inst_29094 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
var statearr_29107_29154 = state_29098__$1;
(statearr_29107_29154[(2)] = inst_29094);

(statearr_29107_29154[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (21))){
var inst_29047 = (state_29098[(2)]);
var inst_29048 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29049 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29048);
var state_29098__$1 = (function (){var statearr_29108 = state_29098;
(statearr_29108[(7)] = inst_29047);

return statearr_29108;
})();
var statearr_29109_29155 = state_29098__$1;
(statearr_29109_29155[(2)] = inst_29049);

(statearr_29109_29155[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (31))){
var inst_29077 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29098__$1 = state_29098;
if(inst_29077){
var statearr_29110_29156 = state_29098__$1;
(statearr_29110_29156[(1)] = (34));

} else {
var statearr_29111_29157 = state_29098__$1;
(statearr_29111_29157[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (32))){
var inst_29086 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
var statearr_29112_29158 = state_29098__$1;
(statearr_29112_29158[(2)] = inst_29086);

(statearr_29112_29158[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (33))){
var inst_29073 = (state_29098[(2)]);
var inst_29074 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29075 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29074);
var state_29098__$1 = (function (){var statearr_29113 = state_29098;
(statearr_29113[(8)] = inst_29073);

return statearr_29113;
})();
var statearr_29114_29159 = state_29098__$1;
(statearr_29114_29159[(2)] = inst_29075);

(statearr_29114_29159[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (13))){
var inst_29032 = figwheel.client.heads_up.clear.call(null);
var state_29098__$1 = state_29098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29098__$1,(16),inst_29032);
} else {
if((state_val_29099 === (22))){
var inst_29053 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29054 = figwheel.client.heads_up.append_warning_message.call(null,inst_29053);
var state_29098__$1 = state_29098;
var statearr_29115_29160 = state_29098__$1;
(statearr_29115_29160[(2)] = inst_29054);

(statearr_29115_29160[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (36))){
var inst_29084 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
var statearr_29116_29161 = state_29098__$1;
(statearr_29116_29161[(2)] = inst_29084);

(statearr_29116_29161[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (29))){
var inst_29064 = (state_29098[(2)]);
var inst_29065 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29066 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29065);
var state_29098__$1 = (function (){var statearr_29117 = state_29098;
(statearr_29117[(9)] = inst_29064);

return statearr_29117;
})();
var statearr_29118_29162 = state_29098__$1;
(statearr_29118_29162[(2)] = inst_29066);

(statearr_29118_29162[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (6))){
var inst_29013 = (state_29098[(10)]);
var state_29098__$1 = state_29098;
var statearr_29119_29163 = state_29098__$1;
(statearr_29119_29163[(2)] = inst_29013);

(statearr_29119_29163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (28))){
var inst_29060 = (state_29098[(2)]);
var inst_29061 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29062 = figwheel.client.heads_up.display_warning.call(null,inst_29061);
var state_29098__$1 = (function (){var statearr_29120 = state_29098;
(statearr_29120[(11)] = inst_29060);

return statearr_29120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29098__$1,(29),inst_29062);
} else {
if((state_val_29099 === (25))){
var inst_29058 = figwheel.client.heads_up.clear.call(null);
var state_29098__$1 = state_29098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29098__$1,(28),inst_29058);
} else {
if((state_val_29099 === (34))){
var inst_29079 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29098__$1 = state_29098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29098__$1,(37),inst_29079);
} else {
if((state_val_29099 === (17))){
var inst_29038 = (state_29098[(2)]);
var inst_29039 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29040 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29039);
var state_29098__$1 = (function (){var statearr_29121 = state_29098;
(statearr_29121[(12)] = inst_29038);

return statearr_29121;
})();
var statearr_29122_29164 = state_29098__$1;
(statearr_29122_29164[(2)] = inst_29040);

(statearr_29122_29164[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (3))){
var inst_29030 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29098__$1 = state_29098;
if(inst_29030){
var statearr_29123_29165 = state_29098__$1;
(statearr_29123_29165[(1)] = (13));

} else {
var statearr_29124_29166 = state_29098__$1;
(statearr_29124_29166[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (12))){
var inst_29026 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
var statearr_29125_29167 = state_29098__$1;
(statearr_29125_29167[(2)] = inst_29026);

(statearr_29125_29167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (2))){
var inst_29013 = (state_29098[(10)]);
var inst_29013__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29098__$1 = (function (){var statearr_29126 = state_29098;
(statearr_29126[(10)] = inst_29013__$1);

return statearr_29126;
})();
if(cljs.core.truth_(inst_29013__$1)){
var statearr_29127_29168 = state_29098__$1;
(statearr_29127_29168[(1)] = (5));

} else {
var statearr_29128_29169 = state_29098__$1;
(statearr_29128_29169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (23))){
var inst_29056 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29098__$1 = state_29098;
if(inst_29056){
var statearr_29129_29170 = state_29098__$1;
(statearr_29129_29170[(1)] = (25));

} else {
var statearr_29130_29171 = state_29098__$1;
(statearr_29130_29171[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (35))){
var state_29098__$1 = state_29098;
var statearr_29131_29172 = state_29098__$1;
(statearr_29131_29172[(2)] = null);

(statearr_29131_29172[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (19))){
var inst_29051 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29098__$1 = state_29098;
if(inst_29051){
var statearr_29132_29173 = state_29098__$1;
(statearr_29132_29173[(1)] = (22));

} else {
var statearr_29133_29174 = state_29098__$1;
(statearr_29133_29174[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (11))){
var inst_29022 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
var statearr_29134_29175 = state_29098__$1;
(statearr_29134_29175[(2)] = inst_29022);

(statearr_29134_29175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (9))){
var inst_29024 = figwheel.client.heads_up.clear.call(null);
var state_29098__$1 = state_29098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29098__$1,(12),inst_29024);
} else {
if((state_val_29099 === (5))){
var inst_29015 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29098__$1 = state_29098;
var statearr_29135_29176 = state_29098__$1;
(statearr_29135_29176[(2)] = inst_29015);

(statearr_29135_29176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (14))){
var inst_29042 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29098__$1 = state_29098;
if(inst_29042){
var statearr_29136_29177 = state_29098__$1;
(statearr_29136_29177[(1)] = (18));

} else {
var statearr_29137_29178 = state_29098__$1;
(statearr_29137_29178[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (26))){
var inst_29068 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29098__$1 = state_29098;
if(inst_29068){
var statearr_29138_29179 = state_29098__$1;
(statearr_29138_29179[(1)] = (30));

} else {
var statearr_29139_29180 = state_29098__$1;
(statearr_29139_29180[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (16))){
var inst_29034 = (state_29098[(2)]);
var inst_29035 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29036 = figwheel.client.heads_up.display_exception.call(null,inst_29035);
var state_29098__$1 = (function (){var statearr_29140 = state_29098;
(statearr_29140[(13)] = inst_29034);

return statearr_29140;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29098__$1,(17),inst_29036);
} else {
if((state_val_29099 === (30))){
var inst_29070 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29071 = figwheel.client.heads_up.display_warning.call(null,inst_29070);
var state_29098__$1 = state_29098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29098__$1,(33),inst_29071);
} else {
if((state_val_29099 === (10))){
var inst_29028 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
var statearr_29141_29181 = state_29098__$1;
(statearr_29141_29181[(2)] = inst_29028);

(statearr_29141_29181[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (18))){
var inst_29044 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29045 = figwheel.client.heads_up.display_exception.call(null,inst_29044);
var state_29098__$1 = state_29098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29098__$1,(21),inst_29045);
} else {
if((state_val_29099 === (37))){
var inst_29081 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
var statearr_29142_29182 = state_29098__$1;
(statearr_29142_29182[(2)] = inst_29081);

(statearr_29142_29182[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (8))){
var inst_29020 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29098__$1 = state_29098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29098__$1,(11),inst_29020);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23535__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23475__auto__,c__23535__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23476__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23476__auto____0 = (function (){
var statearr_29143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29143[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23476__auto__);

(statearr_29143[(1)] = (1));

return statearr_29143;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23476__auto____1 = (function (state_29098){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_29098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e29144){if((e29144 instanceof Object)){
var ex__23479__auto__ = e29144;
var statearr_29145_29183 = state_29098;
(statearr_29145_29183[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29184 = state_29098;
state_29098 = G__29184;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23476__auto__ = function(state_29098){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23476__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23476__auto____1.call(this,state_29098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23476__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23476__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto__,msg_hist,msg_names,msg))
})();
var state__23537__auto__ = (function (){var statearr_29146 = f__23536__auto__.call(null);
(statearr_29146[(6)] = c__23535__auto__);

return statearr_29146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto__,msg_hist,msg_names,msg))
);

return c__23535__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23535__auto___29213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto___29213,ch){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto___29213,ch){
return (function (state_29199){
var state_val_29200 = (state_29199[(1)]);
if((state_val_29200 === (1))){
var state_29199__$1 = state_29199;
var statearr_29201_29214 = state_29199__$1;
(statearr_29201_29214[(2)] = null);

(statearr_29201_29214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (2))){
var state_29199__$1 = state_29199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29199__$1,(4),ch);
} else {
if((state_val_29200 === (3))){
var inst_29197 = (state_29199[(2)]);
var state_29199__$1 = state_29199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29199__$1,inst_29197);
} else {
if((state_val_29200 === (4))){
var inst_29187 = (state_29199[(7)]);
var inst_29187__$1 = (state_29199[(2)]);
var state_29199__$1 = (function (){var statearr_29202 = state_29199;
(statearr_29202[(7)] = inst_29187__$1);

return statearr_29202;
})();
if(cljs.core.truth_(inst_29187__$1)){
var statearr_29203_29215 = state_29199__$1;
(statearr_29203_29215[(1)] = (5));

} else {
var statearr_29204_29216 = state_29199__$1;
(statearr_29204_29216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (5))){
var inst_29187 = (state_29199[(7)]);
var inst_29189 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29187);
var state_29199__$1 = state_29199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29199__$1,(8),inst_29189);
} else {
if((state_val_29200 === (6))){
var state_29199__$1 = state_29199;
var statearr_29205_29217 = state_29199__$1;
(statearr_29205_29217[(2)] = null);

(statearr_29205_29217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (7))){
var inst_29195 = (state_29199[(2)]);
var state_29199__$1 = state_29199;
var statearr_29206_29218 = state_29199__$1;
(statearr_29206_29218[(2)] = inst_29195);

(statearr_29206_29218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (8))){
var inst_29191 = (state_29199[(2)]);
var state_29199__$1 = (function (){var statearr_29207 = state_29199;
(statearr_29207[(8)] = inst_29191);

return statearr_29207;
})();
var statearr_29208_29219 = state_29199__$1;
(statearr_29208_29219[(2)] = null);

(statearr_29208_29219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__23535__auto___29213,ch))
;
return ((function (switch__23475__auto__,c__23535__auto___29213,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23476__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23476__auto____0 = (function (){
var statearr_29209 = [null,null,null,null,null,null,null,null,null];
(statearr_29209[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23476__auto__);

(statearr_29209[(1)] = (1));

return statearr_29209;
});
var figwheel$client$heads_up_plugin_$_state_machine__23476__auto____1 = (function (state_29199){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_29199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e29210){if((e29210 instanceof Object)){
var ex__23479__auto__ = e29210;
var statearr_29211_29220 = state_29199;
(statearr_29211_29220[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29221 = state_29199;
state_29199 = G__29221;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23476__auto__ = function(state_29199){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23476__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23476__auto____1.call(this,state_29199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23476__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23476__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto___29213,ch))
})();
var state__23537__auto__ = (function (){var statearr_29212 = f__23536__auto__.call(null);
(statearr_29212[(6)] = c__23535__auto___29213);

return statearr_29212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto___29213,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto__){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto__){
return (function (state_29227){
var state_val_29228 = (state_29227[(1)]);
if((state_val_29228 === (1))){
var inst_29222 = cljs.core.async.timeout.call(null,(3000));
var state_29227__$1 = state_29227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29227__$1,(2),inst_29222);
} else {
if((state_val_29228 === (2))){
var inst_29224 = (state_29227[(2)]);
var inst_29225 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29227__$1 = (function (){var statearr_29229 = state_29227;
(statearr_29229[(7)] = inst_29224);

return statearr_29229;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29227__$1,inst_29225);
} else {
return null;
}
}
});})(c__23535__auto__))
;
return ((function (switch__23475__auto__,c__23535__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23476__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23476__auto____0 = (function (){
var statearr_29230 = [null,null,null,null,null,null,null,null];
(statearr_29230[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23476__auto__);

(statearr_29230[(1)] = (1));

return statearr_29230;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23476__auto____1 = (function (state_29227){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_29227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e29231){if((e29231 instanceof Object)){
var ex__23479__auto__ = e29231;
var statearr_29232_29234 = state_29227;
(statearr_29232_29234[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29235 = state_29227;
state_29227 = G__29235;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23476__auto__ = function(state_29227){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23476__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23476__auto____1.call(this,state_29227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23476__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23476__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto__))
})();
var state__23537__auto__ = (function (){var statearr_29233 = f__23536__auto__.call(null);
(statearr_29233[(6)] = c__23535__auto__);

return statearr_29233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto__))
);

return c__23535__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto__,figwheel_version,temp__5720__auto__){
return (function (state_29242){
var state_val_29243 = (state_29242[(1)]);
if((state_val_29243 === (1))){
var inst_29236 = cljs.core.async.timeout.call(null,(2000));
var state_29242__$1 = state_29242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29242__$1,(2),inst_29236);
} else {
if((state_val_29243 === (2))){
var inst_29238 = (state_29242[(2)]);
var inst_29239 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29240 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29239);
var state_29242__$1 = (function (){var statearr_29244 = state_29242;
(statearr_29244[(7)] = inst_29238);

return statearr_29244;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29242__$1,inst_29240);
} else {
return null;
}
}
});})(c__23535__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__23475__auto__,c__23535__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23476__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23476__auto____0 = (function (){
var statearr_29245 = [null,null,null,null,null,null,null,null];
(statearr_29245[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23476__auto__);

(statearr_29245[(1)] = (1));

return statearr_29245;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23476__auto____1 = (function (state_29242){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_29242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e29246){if((e29246 instanceof Object)){
var ex__23479__auto__ = e29246;
var statearr_29247_29249 = state_29242;
(statearr_29247_29249[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29250 = state_29242;
state_29242 = G__29250;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23476__auto__ = function(state_29242){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23476__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23476__auto____1.call(this,state_29242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23476__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23476__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto__,figwheel_version,temp__5720__auto__))
})();
var state__23537__auto__ = (function (){var statearr_29248 = f__23536__auto__.call(null);
(statearr_29248[(6)] = c__23535__auto__);

return statearr_29248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto__,figwheel_version,temp__5720__auto__))
);

return c__23535__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29251){
var map__29252 = p__29251;
var map__29252__$1 = (((((!((map__29252 == null))))?(((((map__29252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29252):map__29252);
var file = cljs.core.get.call(null,map__29252__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29252__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29252__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29254 = "";
var G__29254__$1 = (cljs.core.truth_(file)?[G__29254,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29254);
var G__29254__$2 = (cljs.core.truth_(line)?[G__29254__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29254__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__29254__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29254__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29255){
var map__29256 = p__29255;
var map__29256__$1 = (((((!((map__29256 == null))))?(((((map__29256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29256):map__29256);
var ed = map__29256__$1;
var exception_data = cljs.core.get.call(null,map__29256__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29256__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_29259 = (function (){var G__29258 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29258)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__29258;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_29259);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29260){
var map__29261 = p__29260;
var map__29261__$1 = (((((!((map__29261 == null))))?(((((map__29261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29261):map__29261);
var w = map__29261__$1;
var message = cljs.core.get.call(null,map__29261__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29263 = cljs.core.seq.call(null,plugins);
var chunk__29264 = null;
var count__29265 = (0);
var i__29266 = (0);
while(true){
if((i__29266 < count__29265)){
var vec__29273 = cljs.core._nth.call(null,chunk__29264,i__29266);
var k = cljs.core.nth.call(null,vec__29273,(0),null);
var plugin = cljs.core.nth.call(null,vec__29273,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29279 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29263,chunk__29264,count__29265,i__29266,pl_29279,vec__29273,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29279.call(null,msg_hist);
});})(seq__29263,chunk__29264,count__29265,i__29266,pl_29279,vec__29273,k,plugin))
);
} else {
}


var G__29280 = seq__29263;
var G__29281 = chunk__29264;
var G__29282 = count__29265;
var G__29283 = (i__29266 + (1));
seq__29263 = G__29280;
chunk__29264 = G__29281;
count__29265 = G__29282;
i__29266 = G__29283;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29263);
if(temp__5720__auto__){
var seq__29263__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29263__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29263__$1);
var G__29284 = cljs.core.chunk_rest.call(null,seq__29263__$1);
var G__29285 = c__4550__auto__;
var G__29286 = cljs.core.count.call(null,c__4550__auto__);
var G__29287 = (0);
seq__29263 = G__29284;
chunk__29264 = G__29285;
count__29265 = G__29286;
i__29266 = G__29287;
continue;
} else {
var vec__29276 = cljs.core.first.call(null,seq__29263__$1);
var k = cljs.core.nth.call(null,vec__29276,(0),null);
var plugin = cljs.core.nth.call(null,vec__29276,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29288 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29263,chunk__29264,count__29265,i__29266,pl_29288,vec__29276,k,plugin,seq__29263__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29288.call(null,msg_hist);
});})(seq__29263,chunk__29264,count__29265,i__29266,pl_29288,vec__29276,k,plugin,seq__29263__$1,temp__5720__auto__))
);
} else {
}


var G__29289 = cljs.core.next.call(null,seq__29263__$1);
var G__29290 = null;
var G__29291 = (0);
var G__29292 = (0);
seq__29263 = G__29289;
chunk__29264 = G__29290;
count__29265 = G__29291;
i__29266 = G__29292;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__29294 = arguments.length;
switch (G__29294) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__29295_29300 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29296_29301 = null;
var count__29297_29302 = (0);
var i__29298_29303 = (0);
while(true){
if((i__29298_29303 < count__29297_29302)){
var msg_29304 = cljs.core._nth.call(null,chunk__29296_29301,i__29298_29303);
figwheel.client.socket.handle_incoming_message.call(null,msg_29304);


var G__29305 = seq__29295_29300;
var G__29306 = chunk__29296_29301;
var G__29307 = count__29297_29302;
var G__29308 = (i__29298_29303 + (1));
seq__29295_29300 = G__29305;
chunk__29296_29301 = G__29306;
count__29297_29302 = G__29307;
i__29298_29303 = G__29308;
continue;
} else {
var temp__5720__auto___29309 = cljs.core.seq.call(null,seq__29295_29300);
if(temp__5720__auto___29309){
var seq__29295_29310__$1 = temp__5720__auto___29309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29295_29310__$1)){
var c__4550__auto___29311 = cljs.core.chunk_first.call(null,seq__29295_29310__$1);
var G__29312 = cljs.core.chunk_rest.call(null,seq__29295_29310__$1);
var G__29313 = c__4550__auto___29311;
var G__29314 = cljs.core.count.call(null,c__4550__auto___29311);
var G__29315 = (0);
seq__29295_29300 = G__29312;
chunk__29296_29301 = G__29313;
count__29297_29302 = G__29314;
i__29298_29303 = G__29315;
continue;
} else {
var msg_29316 = cljs.core.first.call(null,seq__29295_29310__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29316);


var G__29317 = cljs.core.next.call(null,seq__29295_29310__$1);
var G__29318 = null;
var G__29319 = (0);
var G__29320 = (0);
seq__29295_29300 = G__29317;
chunk__29296_29301 = G__29318;
count__29297_29302 = G__29319;
i__29298_29303 = G__29320;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29325 = arguments.length;
var i__4731__auto___29326 = (0);
while(true){
if((i__4731__auto___29326 < len__4730__auto___29325)){
args__4736__auto__.push((arguments[i__4731__auto___29326]));

var G__29327 = (i__4731__auto___29326 + (1));
i__4731__auto___29326 = G__29327;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29322){
var map__29323 = p__29322;
var map__29323__$1 = (((((!((map__29323 == null))))?(((((map__29323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29323):map__29323);
var opts = map__29323__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29321){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29321));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29328){if((e29328 instanceof Error)){
var e = e29328;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29328;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__29329){
var map__29330 = p__29329;
var map__29330__$1 = (((((!((map__29330 == null))))?(((((map__29330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29330):map__29330);
var msg_name = cljs.core.get.call(null,map__29330__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1551192014719

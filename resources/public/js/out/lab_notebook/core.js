// Compiled by ClojureScript 1.10.520 {}
goog.provide('lab_notebook.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
if((typeof lab_notebook !== 'undefined') && (typeof lab_notebook.core !== 'undefined') && (typeof lab_notebook.core.appstate !== 'undefined')){
} else {
lab_notebook.core.appstate = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
lab_notebook.core.app_container = (function lab_notebook$core$app_container(cursor,component){
if((typeof lab_notebook !== 'undefined') && (typeof lab_notebook.core !== 'undefined') && (typeof lab_notebook.core.t_lab_notebook$core29958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
lab_notebook.core.t_lab_notebook$core29958 = (function (cursor,component,meta29959){
this.cursor = cursor;
this.component = component;
this.meta29959 = meta29959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
lab_notebook.core.t_lab_notebook$core29958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29960,meta29959__$1){
var self__ = this;
var _29960__$1 = this;
return (new lab_notebook.core.t_lab_notebook$core29958(self__.cursor,self__.component,meta29959__$1));
});

lab_notebook.core.t_lab_notebook$core29958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29960){
var self__ = this;
var _29960__$1 = this;
return self__.meta29959;
});

lab_notebook.core.t_lab_notebook$core29958.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

lab_notebook.core.t_lab_notebook$core29958.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,null,"Hello!");
});

lab_notebook.core.t_lab_notebook$core29958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"meta29959","meta29959",-1738993206,null)], null);
});

lab_notebook.core.t_lab_notebook$core29958.cljs$lang$type = true;

lab_notebook.core.t_lab_notebook$core29958.cljs$lang$ctorStr = "lab-notebook.core/t_lab_notebook$core29958";

lab_notebook.core.t_lab_notebook$core29958.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"lab-notebook.core/t_lab_notebook$core29958");
});

/**
 * Positional factory function for lab-notebook.core/t_lab_notebook$core29958.
 */
lab_notebook.core.__GT_t_lab_notebook$core29958 = (function lab_notebook$core$app_container_$___GT_t_lab_notebook$core29958(cursor__$1,component__$1,meta29959){
return (new lab_notebook.core.t_lab_notebook$core29958(cursor__$1,component__$1,meta29959));
});

}

return (new lab_notebook.core.t_lab_notebook$core29958(cursor,component,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,lab_notebook.core.app_container,lab_notebook.core.appstate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map?rel=1551193390415

// Compiled by ClojureScript 1.10.520 {}
goog.provide('lab_notebook.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
if((typeof lab_notebook !== 'undefined') && (typeof lab_notebook.core !== 'undefined') && (typeof lab_notebook.core.appstate !== 'undefined')){
} else {
lab_notebook.core.appstate = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
lab_notebook.core.item_form = (function lab_notebook$core$item_form(cursor,component,options){
if((typeof lab_notebook !== 'undefined') && (typeof lab_notebook.core !== 'undefined') && (typeof lab_notebook.core.t_lab_notebook$core29930 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
lab_notebook.core.t_lab_notebook$core29930 = (function (cursor,component,options,meta29931){
this.cursor = cursor;
this.component = component;
this.options = options;
this.meta29931 = meta29931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
lab_notebook.core.t_lab_notebook$core29930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29932,meta29931__$1){
var self__ = this;
var _29932__$1 = this;
return (new lab_notebook.core.t_lab_notebook$core29930(self__.cursor,self__.component,self__.options,meta29931__$1));
});

lab_notebook.core.t_lab_notebook$core29930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29932){
var self__ = this;
var _29932__$1 = this;
return self__.meta29931;
});

lab_notebook.core.t_lab_notebook$core29930.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

lab_notebook.core.t_lab_notebook$core29930.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.get.call(null,self__.cursor,new cljs.core.Keyword(null,"summary","summary",380847952),""),new cljs.core.Keyword(null,"date-time","date-time",177938180),cljs.core.get.call(null,self__.cursor,new cljs.core.Keyword(null,"date-time","date-time",177938180),""),new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.get.call(null,self__.cursor,new cljs.core.Keyword(null,"notes","notes",-1039600523),"")], null);
});

lab_notebook.core.t_lab_notebook$core29930.prototype.om$core$IRenderState$ = cljs.core.PROTOCOL_SENTINEL;

lab_notebook.core.t_lab_notebook$core29930.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return om.dom.form.call(null,({"className": "form-horizontal"}),om.dom.input.call(null,({"type": "text", "className": "form-control", "value": new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (this$__$1){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"summary","summary",380847952),e.target.value);
});})(this$__$1))
, "placeholder": "Summary"})),om.dom.input.call(null,({"type": "text", "className": "form-control", "value": new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (this$__$1){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"date-time","date-time",177938180),e.target.value);
});})(this$__$1))
, "placeholder": "Time"})),om.dom.textarea.call(null,({"className": "form-control", "placeholder": "Notes", "value": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (this$__$1){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"notes","notes",-1039600523),e.target.value);
});})(this$__$1))
, "rows": "5"})),om.dom.button.call(null,({"className": "btn btn-primary", "onClick": ((function (this$__$1){
return (function (e){
e.preventDefault();

var temp__5720__auto__ = new cljs.core.Keyword(null,"on-save","on-save",1618176266).cljs$core$IFn$_invoke$arity$1(self__.options);
if(cljs.core.truth_(temp__5720__auto__)){
var on_save = temp__5720__auto__;
return on_save.call(null,new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(state));
} else {
return null;
}
});})(this$__$1))
}),"Save"),om.dom.button.call(null,({"className": "btn btn-primary", "onClick": ((function (this$__$1){
return (function (e){
e.preventDefault();

var temp__5720__auto___29933 = new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932).cljs$core$IFn$_invoke$arity$1(self__.options);
if(cljs.core.truth_(temp__5720__auto___29933)){
var on_cancel_29934 = temp__5720__auto___29933;
on_cancel_29934.call(null);
} else {
}

return om.core.set_state_BANG_.call(null,self__.component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.get.call(null,self__.cursor,new cljs.core.Keyword(null,"summary","summary",380847952),""),new cljs.core.Keyword(null,"date-time","date-time",177938180),cljs.core.get.call(null,self__.cursor,new cljs.core.Keyword(null,"date-time","date-time",177938180),""),new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.get.call(null,self__.cursor,new cljs.core.Keyword(null,"notes","notes",-1039600523),"")], null));
});})(this$__$1))
}),"Cancel"));
});

lab_notebook.core.t_lab_notebook$core29930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"meta29931","meta29931",-407197029,null)], null);
});

lab_notebook.core.t_lab_notebook$core29930.cljs$lang$type = true;

lab_notebook.core.t_lab_notebook$core29930.cljs$lang$ctorStr = "lab-notebook.core/t_lab_notebook$core29930";

lab_notebook.core.t_lab_notebook$core29930.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"lab-notebook.core/t_lab_notebook$core29930");
});

/**
 * Positional factory function for lab-notebook.core/t_lab_notebook$core29930.
 */
lab_notebook.core.__GT_t_lab_notebook$core29930 = (function lab_notebook$core$item_form_$___GT_t_lab_notebook$core29930(cursor__$1,component__$1,options__$1,meta29931){
return (new lab_notebook.core.t_lab_notebook$core29930(cursor__$1,component__$1,options__$1,meta29931));
});

}

return (new lab_notebook.core.t_lab_notebook$core29930(cursor,component,options,cljs.core.PersistentArrayMap.EMPTY));
});
lab_notebook.core.item_view = (function lab_notebook$core$item_view(cursor,component,options){
if((typeof lab_notebook !== 'undefined') && (typeof lab_notebook.core !== 'undefined') && (typeof lab_notebook.core.t_lab_notebook$core29935 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
lab_notebook.core.t_lab_notebook$core29935 = (function (cursor,component,options,meta29936){
this.cursor = cursor;
this.component = component;
this.options = options;
this.meta29936 = meta29936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
lab_notebook.core.t_lab_notebook$core29935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29937,meta29936__$1){
var self__ = this;
var _29937__$1 = this;
return (new lab_notebook.core.t_lab_notebook$core29935(self__.cursor,self__.component,self__.options,meta29936__$1));
});

lab_notebook.core.t_lab_notebook$core29935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29937){
var self__ = this;
var _29937__$1 = this;
return self__.meta29936;
});

lab_notebook.core.t_lab_notebook$core29935.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

lab_notebook.core.t_lab_notebook$core29935.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing?","editing?",1646440800),false], null);
});

lab_notebook.core.t_lab_notebook$core29935.prototype.om$core$IRenderState$ = cljs.core.PROTOCOL_SENTINEL;

lab_notebook.core.t_lab_notebook$core29935.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"editing?","editing?",1646440800).cljs$core$IFn$_invoke$arity$1(state))){
return om.dom.div.call(null,({"style": ({"marginTop": "2em"})}),om.core.build.call(null,lab_notebook.core.item_form,self__.cursor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-save","on-save",1618176266),((function (this$__$1){
return (function (summary,date_time,notes){
om.core.transact_BANG_.call(null,self__.cursor,((function (this$__$1){
return (function (entry){
return cljs.core.assoc.call(null,entry,new cljs.core.Keyword(null,"summary","summary",380847952),summary,new cljs.core.Keyword(null,"date-time","date-time",177938180),date_time,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes);
});})(this$__$1))
);

return om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false);
});})(this$__$1))
,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (this$__$1){
return (function (){
return om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false);
});})(this$__$1))
], null)], null)));
} else {
return om.dom.div.call(null,({"style": ({"marginTop": "2em"})}),om.dom.button.call(null,({"className": "btn btn-primary", "onClick": ((function (this$__$1){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"editing?","editing?",1646440800),true);
});})(this$__$1))
}),"Edit"),om.dom.button.call(null,({"className": "btn btn-primary", "onClick": ((function (this$__$1){
return (function (e){
e.preventDefault();

var temp__5720__auto__ = new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355).cljs$core$IFn$_invoke$arity$1(self__.options);
if(cljs.core.truth_(temp__5720__auto__)){
var on_delete = temp__5720__auto__;
return on_delete.call(null);
} else {
return null;
}
});})(this$__$1))
}),"Delete"),om.dom.div.call(null,null,new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(self__.cursor)),om.dom.div.call(null,null,new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(self__.cursor)),om.dom.div.call(null,null,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.cursor)));
}
});

lab_notebook.core.t_lab_notebook$core29935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"meta29936","meta29936",-1620185736,null)], null);
});

lab_notebook.core.t_lab_notebook$core29935.cljs$lang$type = true;

lab_notebook.core.t_lab_notebook$core29935.cljs$lang$ctorStr = "lab-notebook.core/t_lab_notebook$core29935";

lab_notebook.core.t_lab_notebook$core29935.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"lab-notebook.core/t_lab_notebook$core29935");
});

/**
 * Positional factory function for lab-notebook.core/t_lab_notebook$core29935.
 */
lab_notebook.core.__GT_t_lab_notebook$core29935 = (function lab_notebook$core$item_view_$___GT_t_lab_notebook$core29935(cursor__$1,component__$1,options__$1,meta29936){
return (new lab_notebook.core.t_lab_notebook$core29935(cursor__$1,component__$1,options__$1,meta29936));
});

}

return (new lab_notebook.core.t_lab_notebook$core29935(cursor,component,options,cljs.core.PersistentArrayMap.EMPTY));
});
lab_notebook.core.delete$ = (function lab_notebook$core$delete(v,i){
return cljs.core.into.call(null,cljs.core.subvec.call(null,v,(0),i),cljs.core.subvec.call(null,v,(i + (1))));
});
lab_notebook.core.item_table = (function lab_notebook$core$item_table(cursor,component){
if((typeof lab_notebook !== 'undefined') && (typeof lab_notebook.core !== 'undefined') && (typeof lab_notebook.core.t_lab_notebook$core29939 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
lab_notebook.core.t_lab_notebook$core29939 = (function (cursor,component,meta29940){
this.cursor = cursor;
this.component = component;
this.meta29940 = meta29940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
lab_notebook.core.t_lab_notebook$core29939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29941,meta29940__$1){
var self__ = this;
var _29941__$1 = this;
return (new lab_notebook.core.t_lab_notebook$core29939(self__.cursor,self__.component,meta29940__$1));
});

lab_notebook.core.t_lab_notebook$core29939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29941){
var self__ = this;
var _29941__$1 = this;
return self__.meta29940;
});

lab_notebook.core.t_lab_notebook$core29939.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

lab_notebook.core.t_lab_notebook$core29939.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing?","editing?",1646440800),false], null);
});

lab_notebook.core.t_lab_notebook$core29939.prototype.om$core$IRenderState$ = cljs.core.PROTOCOL_SENTINEL;

lab_notebook.core.t_lab_notebook$core29939.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,null,om.dom.button.call(null,({"className": "btn btn-primary", "onClick": ((function (this$__$1){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"editing?","editing?",1646440800),true);
});})(this$__$1))
}),"New entry"),cljs.core.apply.call(null,om.dom.div,null,(function (){var iter__4523__auto__ = ((function (this$__$1){
return (function lab_notebook$core$item_table_$_iter__29942(s__29943){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__29943__$1 = s__29943;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__29943__$1);
if(temp__5720__auto__){
var s__29943__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29943__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__29943__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__29945 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__29944 = (0);
while(true){
if((i__29944 < size__4522__auto__)){
var vec__29946 = cljs.core._nth.call(null,c__4521__auto__,i__29944);
var i = cljs.core.nth.call(null,vec__29946,(0),null);
var entry = cljs.core.nth.call(null,vec__29946,(1),null);
cljs.core.chunk_append.call(null,b__29945,om.core.build.call(null,lab_notebook.core.item_view,entry,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355),((function (i__29944,vec__29946,i,entry,c__4521__auto__,size__4522__auto__,b__29945,s__29943__$2,temp__5720__auto__,this$__$1){
return (function (){
return om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"entries","entries",-86943161),((function (i__29944,vec__29946,i,entry,c__4521__auto__,size__4522__auto__,b__29945,s__29943__$2,temp__5720__auto__,this$__$1){
return (function (p1__29938_SHARP_){
return lab_notebook.core.delete$.call(null,p1__29938_SHARP_,i);
});})(i__29944,vec__29946,i,entry,c__4521__auto__,size__4522__auto__,b__29945,s__29943__$2,temp__5720__auto__,this$__$1))
);
});})(i__29944,vec__29946,i,entry,c__4521__auto__,size__4522__auto__,b__29945,s__29943__$2,temp__5720__auto__,this$__$1))
], null)], null)));

var G__29952 = (i__29944 + (1));
i__29944 = G__29952;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29945),lab_notebook$core$item_table_$_iter__29942.call(null,cljs.core.chunk_rest.call(null,s__29943__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29945),null);
}
} else {
var vec__29949 = cljs.core.first.call(null,s__29943__$2);
var i = cljs.core.nth.call(null,vec__29949,(0),null);
var entry = cljs.core.nth.call(null,vec__29949,(1),null);
return cljs.core.cons.call(null,om.core.build.call(null,lab_notebook.core.item_view,entry,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355),((function (vec__29949,i,entry,s__29943__$2,temp__5720__auto__,this$__$1){
return (function (){
return om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"entries","entries",-86943161),((function (vec__29949,i,entry,s__29943__$2,temp__5720__auto__,this$__$1){
return (function (p1__29938_SHARP_){
return lab_notebook.core.delete$.call(null,p1__29938_SHARP_,i);
});})(vec__29949,i,entry,s__29943__$2,temp__5720__auto__,this$__$1))
);
});})(vec__29949,i,entry,s__29943__$2,temp__5720__auto__,this$__$1))
], null)], null)),lab_notebook$core$item_table_$_iter__29942.call(null,cljs.core.rest.call(null,s__29943__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4523__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(self__.cursor)));
})()),(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"editing?","editing?",1646440800).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(self__.cursor));
}
})())?om.dom.div.call(null,null,om.dom.h3.call(null,null,"New entry"),om.core.build.call(null,lab_notebook.core.item_form,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-save","on-save",1618176266),((function (this$__$1){
return (function (summary,date_time,notes){
om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"entries","entries",-86943161),((function (this$__$1){
return (function (entries){
return cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY).call(null,entries,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"summary","summary",380847952),summary,new cljs.core.Keyword(null,"date-time","date-time",177938180),date_time,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes], null));
});})(this$__$1))
);

return om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false);
});})(this$__$1))
,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (this$__$1){
return (function (){
return om.core.set_state_BANG_.call(null,self__.component,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false);
});})(this$__$1))
], null)], null))):null));
});

lab_notebook.core.t_lab_notebook$core29939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"meta29940","meta29940",975980035,null)], null);
});

lab_notebook.core.t_lab_notebook$core29939.cljs$lang$type = true;

lab_notebook.core.t_lab_notebook$core29939.cljs$lang$ctorStr = "lab-notebook.core/t_lab_notebook$core29939";

lab_notebook.core.t_lab_notebook$core29939.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"lab-notebook.core/t_lab_notebook$core29939");
});

/**
 * Positional factory function for lab-notebook.core/t_lab_notebook$core29939.
 */
lab_notebook.core.__GT_t_lab_notebook$core29939 = (function lab_notebook$core$item_table_$___GT_t_lab_notebook$core29939(cursor__$1,component__$1,meta29940){
return (new lab_notebook.core.t_lab_notebook$core29939(cursor__$1,component__$1,meta29940));
});

}

return (new lab_notebook.core.t_lab_notebook$core29939(cursor,component,cljs.core.PersistentArrayMap.EMPTY));
});
lab_notebook.core.app_container = (function lab_notebook$core$app_container(cursor,component){
if((typeof lab_notebook !== 'undefined') && (typeof lab_notebook.core !== 'undefined') && (typeof lab_notebook.core.t_lab_notebook$core29953 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
lab_notebook.core.t_lab_notebook$core29953 = (function (cursor,component,meta29954){
this.cursor = cursor;
this.component = component;
this.meta29954 = meta29954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
lab_notebook.core.t_lab_notebook$core29953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29955,meta29954__$1){
var self__ = this;
var _29955__$1 = this;
return (new lab_notebook.core.t_lab_notebook$core29953(self__.cursor,self__.component,meta29954__$1));
});

lab_notebook.core.t_lab_notebook$core29953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29955){
var self__ = this;
var _29955__$1 = this;
return self__.meta29954;
});

lab_notebook.core.t_lab_notebook$core29953.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

lab_notebook.core.t_lab_notebook$core29953.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,null,om.dom.h1.call(null,null,"Lab notebook"),om.core.build.call(null,lab_notebook.core.item_table,self__.cursor));
});

lab_notebook.core.t_lab_notebook$core29953.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"meta29954","meta29954",-580040038,null)], null);
});

lab_notebook.core.t_lab_notebook$core29953.cljs$lang$type = true;

lab_notebook.core.t_lab_notebook$core29953.cljs$lang$ctorStr = "lab-notebook.core/t_lab_notebook$core29953";

lab_notebook.core.t_lab_notebook$core29953.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"lab-notebook.core/t_lab_notebook$core29953");
});

/**
 * Positional factory function for lab-notebook.core/t_lab_notebook$core29953.
 */
lab_notebook.core.__GT_t_lab_notebook$core29953 = (function lab_notebook$core$app_container_$___GT_t_lab_notebook$core29953(cursor__$1,component__$1,meta29954){
return (new lab_notebook.core.t_lab_notebook$core29953(cursor__$1,component__$1,meta29954));
});

}

return (new lab_notebook.core.t_lab_notebook$core29953(cursor,component,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,lab_notebook.core.app_container,lab_notebook.core.appstate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map?rel=1551193348355

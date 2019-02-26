// Compiled by ClojureScript 1.10.520 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('om.dom');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('goog.dom.dataset');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((((!((this$ == null)))) && ((!((this$.om$core$IDisplayName$display_name$arity$1 == null)))))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core.display_name[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (om.core.display_name["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((((!((this$ == null)))) && ((!((this$.om$core$IInitState$init_state$arity$1 == null)))))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core.init_state[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (om.core.init_state["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((((!((this$ == null)))) && ((!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core.should_update[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,next_props,next_state);
} else {
var m__4431__auto__ = (om.core.should_update["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((((!((this$ == null)))) && ((!((this$.om$core$IWillMount$will_mount$arity$1 == null)))))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core.will_mount[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (om.core.will_mount["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((((!((this$ == null)))) && ((!((this$.om$core$IDidMount$did_mount$arity$1 == null)))))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core.did_mount[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (om.core.did_mount["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((((!((this$ == null)))) && ((!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core.will_unmount[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (om.core.will_unmount["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((((!((this$ == null)))) && ((!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core.will_update[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,next_props,next_state);
} else {
var m__4431__auto__ = (om.core.will_update["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((((!((this$ == null)))) && ((!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core.did_update[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,prev_props,prev_state);
} else {
var m__4431__auto__ = (om.core.did_update["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,prev_props,prev_state);
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((((!((this$ == null)))) && ((!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core.will_receive_props[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,next_props);
} else {
var m__4431__auto__ = (om.core.will_receive_props["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,next_props);
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((((!((this$ == null)))) && ((!((this$.om$core$IRender$render$arity$1 == null)))))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core.render[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (om.core.render["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((((!((this$ == null)))) && ((!((this$.om$core$IRenderProps$render_props$arity$3 == null)))))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core.render_props[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,props,state);
} else {
var m__4431__auto__ = (om.core.render_props["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,props,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((((!((this$ == null)))) && ((!((this$.om$core$IRenderState$render_state$arity$2 == null)))))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core.render_state[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,state);
} else {
var m__4431__auto__ = (om.core.render_state["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((((!((this$ == null)))) && ((!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,cursor,korks,f,tag);
} else {
var m__4431__auto__ = (om.core._om_swap_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var G__29066 = arguments.length;
switch (G__29066) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((((!((this$ == null)))) && ((!((this$.om$core$IGetState$_get_state$arity$1 == null)))))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core._get_state[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (om.core._get_state["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((((!((this$ == null)))) && ((!((this$.om$core$IGetState$_get_state$arity$2 == null)))))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core._get_state[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,ks);
} else {
var m__4431__auto__ = (om.core._get_state["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var G__29069 = arguments.length;
switch (G__29069) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((((!((this$ == null)))) && ((!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core._get_render_state[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (om.core._get_render_state["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((((!((this$ == null)))) && ((!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core._get_render_state[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,ks);
} else {
var m__4431__auto__ = (om.core._get_render_state["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var G__29072 = arguments.length;
switch (G__29072) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((((!((this$ == null)))) && ((!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,val,render);
} else {
var m__4431__auto__ = (om.core._set_state_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((((!((this$ == null)))) && ((!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,ks,val,render);
} else {
var m__4431__auto__ = (om.core._set_state_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,ks,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;



/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((((!((this$ == null)))) && ((!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core._get_queue[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (om.core._get_queue["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((((!((this$ == null)))) && ((!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,c);
} else {
var m__4431__auto__ = (om.core._queue_render_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (om.core._empty_queue_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((((!((x == null)))) && ((!((x.om$core$IValue$_value$arity$1 == null)))))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (om.core._value[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,x);
} else {
var m__4431__auto__ = (om.core._value["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
}
});

goog.object.set(om.core.IValue,"_",true);

goog.object.set(om.core._value,"_",(function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((((!((cursor == null)))) && ((!((cursor.om$core$ICursor$_path$arity$1 == null)))))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4433__auto__ = (((cursor == null))?null:cursor);
var m__4434__auto__ = (om.core._path[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,cursor);
} else {
var m__4431__auto__ = (om.core._path["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((((!((cursor == null)))) && ((!((cursor.om$core$ICursor$_state$arity$1 == null)))))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4433__auto__ = (((cursor == null))?null:cursor);
var m__4434__auto__ = (om.core._state[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,cursor);
} else {
var m__4431__auto__ = (om.core._state["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var G__29075 = arguments.length;
switch (G__29075) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((((!((value == null)))) && ((!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4433__auto__ = (((value == null))?null:value);
var m__4434__auto__ = (om.core._to_cursor[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,value,state);
} else {
var m__4431__auto__ = (om.core._to_cursor["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,value,state);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((((!((value == null)))) && ((!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4433__auto__ = (((value == null))?null:value);
var m__4434__auto__ = (om.core._to_cursor[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,value,state,path);
} else {
var m__4431__auto__ = (om.core._to_cursor["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,value,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((((!((cursor == null)))) && ((!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4433__auto__ = (((cursor == null))?null:cursor);
var m__4434__auto__ = (om.core._derive[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,cursor,derived,state,path);
} else {
var m__4431__auto__ = (om.core._derive["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,cursor,derived,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
}
});

goog.object.set(om.core.ICursorDerive,"_",true);

goog.object.set(om.core._derive,"_",(function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((((!((cursor == null)))) && ((!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4433__auto__ = (((cursor == null))?null:cursor);
var m__4434__auto__ = (om.core._transact_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,cursor,korks,f,tag);
} else {
var m__4431__auto__ = (om.core._transact_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((((!((x == null)))) && ((!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (om.core._listen_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,x,key,tx_listen);
} else {
var m__4431__auto__ = (om.core._listen_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,x,key,tx_listen);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((((!((x == null)))) && ((!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,x,key);
} else {
var m__4431__auto__ = (om.core._unlisten_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,x,key);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((((!((x == null)))) && ((!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (om.core._notify_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,x,tx_data,root_cursor);
} else {
var m__4431__auto__ = (om.core._notify_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,x,tx_data,root_cursor);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((((!((this$ == null)))) && ((!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,id,p,val);
} else {
var m__4431__auto__ = (om.core._set_property_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,id,p,val);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((((!((this$ == null)))) && ((!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,id,p);
} else {
var m__4431__auto__ = (om.core._remove_property_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((((!((this$ == null)))) && ((!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,id);
} else {
var m__4431__auto__ = (om.core._remove_properties_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((((!((this$ == null)))) && ((!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core._get_property[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,id,p);
} else {
var m__4431__auto__ = (om.core._get_property["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((((!((cursor == null)))) && ((!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4433__auto__ = (((cursor == null))?null:cursor);
var m__4434__auto__ = (om.core._root_key[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,cursor);
} else {
var m__4431__auto__ = (om.core._root_key["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((((!((this$ == null)))) && ((!((this$.om$core$IAdapt$_adapt$arity$2 == null)))))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core._adapt[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,other);
} else {
var m__4431__auto__ = (om.core._adapt["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,other);
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
}
});

goog.object.set(om.core.IAdapt,"_",true);

goog.object.set(om.core._adapt,"_",(function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((((!((this$ == null)))) && ((!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,c);
} else {
var m__4431__auto__ = (om.core._add_dep_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((((!((this$ == null)))) && ((!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,c);
} else {
var m__4431__auto__ = (om.core._remove_dep_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (om.core._refresh_deps_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((((!((this$ == null)))) && ((!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (om.core._get_deps[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (om.core._get_deps["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
}
});

om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = (((((!((state == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === state.om$core$IOmSwap$))))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state)))?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if((!((tag == null)))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$ICursor$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(var_args){
var G__29080 = arguments.length;
switch (G__29080) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__29081 = (x.props["__om_cursor"]);
if(cljs.core.seq.call(null,korks__$1)){
return cljs.core.get_in.call(null,G__29081,korks__$1);
} else {
return G__29081;
}
});

om.core.get_props.cljs$lang$maxFixedArity = 2;

/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var G__29084 = arguments.length;
switch (G__29084) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var G__29087 = arguments.length;
switch (G__29087) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if((!(cljs.core.sequential_QMARK_.call(null,korks)))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;

om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__5720__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__5720__auto__)){
var pending_state = temp__5720__auto__;
var G__29089 = state;
(G__29089["__om_prev_state"] = (state["__om_state"]));

(G__29089["__om_state"] = pending_state);

(G__29089["__om_pending_state"] = null);

return G__29089;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var G__29091 = arguments.length;
switch (G__29091) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__4131__auto__ = props;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return owner.props;
}
})();
var temp__5720__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__5720__auto__)){
var props_state = temp__5720__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__4131__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;

om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDidUpdate$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_29120 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,({"props": prev_props, "isOmComponent": true})),(function (){var or__4131__auto__ = (state_29120["__om_prev_state"]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (state_29120["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IWillUnmount$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

var temp__5720__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__5720__auto__){
var refs = temp__5720__auto__;
var seq__29096 = cljs.core.seq.call(null,refs);
var chunk__29097 = null;
var count__29098 = (0);
var i__29099 = (0);
while(true){
if((i__29099 < count__29098)){
var ref = cljs.core._nth.call(null,chunk__29097,i__29099);
om.core.unobserve.call(null,this$,ref);


var G__29121 = seq__29096;
var G__29122 = chunk__29097;
var G__29123 = count__29098;
var G__29124 = (i__29099 + (1));
seq__29096 = G__29121;
chunk__29097 = G__29122;
count__29098 = G__29123;
i__29099 = G__29124;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__29096);
if(temp__5720__auto____$1){
var seq__29096__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29096__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29096__$1);
var G__29125 = cljs.core.chunk_rest.call(null,seq__29096__$1);
var G__29126 = c__4550__auto__;
var G__29127 = cljs.core.count.call(null,c__4550__auto__);
var G__29128 = (0);
seq__29096 = G__29125;
chunk__29097 = G__29126;
count__29098 = G__29127;
i__29099 = G__29128;
continue;
} else {
var ref = cljs.core.first.call(null,seq__29096__$1);
om.core.unobserve.call(null,this$,ref);


var G__29129 = cljs.core.next.call(null,seq__29096__$1);
var G__29130 = null;
var G__29131 = (0);
var G__29132 = (0);
seq__29096 = G__29129;
chunk__29097 = G__29130;
count__29098 = G__29131;
i__29099 = G__29132;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IWillReceiveProps$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c))){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IShouldUpdate$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c))){
return om.core.should_update.call(null,c,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(((om.core.cursor_QMARK_.call(null,cursor)) && (om.core.cursor_QMARK_.call(null,next_cursor)) && (cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor))))){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = (!((cljs.core.count.call(null,(state["__om_refs"])) === (0))));
if(and__4120__auto__){
return cljs.core.some.call(null,((function (and__4120__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__29093_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__29093_SHARP_);
});})(and__4120__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__4120__auto__;
}
})())){
return true;
} else {
if((!(((props["__om_index"]) === (next_props["__om_index"]))))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR__orig_val__29102 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR__orig_val__29103 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR__orig_val__29104 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR__orig_val__29105 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR__orig_val__29106 = om.core._STAR_root_key_STAR_;
var _STAR_parent_STAR__temp_val__29107 = this$;
var _STAR_state_STAR__temp_val__29108 = (props["__om_app_state"]);
var _STAR_instrument_STAR__temp_val__29109 = (props["__om_instrument"]);
var _STAR_descriptor_STAR__temp_val__29110 = (props["__om_descriptor"]);
var _STAR_root_key_STAR__temp_val__29111 = (props["__om_root_key"]);
om.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__29107;

om.core._STAR_state_STAR_ = _STAR_state_STAR__temp_val__29108;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__29109;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR__temp_val__29110;

om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR__temp_val__29111;

try{if((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IRender$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c))){
return om.core.render.call(null,c);
} else {
if((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IRenderProps$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c))){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IRenderState$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c))){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR__orig_val__29106;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR__orig_val__29105;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__29104;

om.core._STAR_state_STAR_ = _STAR_state_STAR__orig_val__29103;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__29102;
}}),(function (next_props,next_state){
var this$ = this;
var c_29133 = om.core.children.call(null,this$);
if((((!((c_29133 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c_29133.om$core$IWillUpdate$))))?true:(((!c_29133.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_29133):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_29133))){
var state_29134 = this$.state;
om.core.will_update.call(null,c_29133,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__4131__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = ({"__om_id": (function (){var or__4131__auto__ = id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,(((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IInitState$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))});
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDidMount$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDisplayName$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c))){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_29135 = om.core.children.call(null,this$);
if((((!((c_29135 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c_29135.om$core$IWillMount$))))?true:(((!c_29135.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_29135):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_29135))){
om.core.will_mount.call(null,c_29135);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x29136 = obj;
x29136.om$core$ISetState$ = cljs.core.PROTOCOL_SENTINEL;

x29136.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x29136){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__4120__auto__ = (!((app_state == null)));
if(and__4120__auto__){
return render;
} else {
return and__4120__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x29136))
;

x29136.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x29136){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__4120__auto__ = (!((app_state == null)));
if(and__4120__auto__){
return render;
} else {
return and__4120__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x29136))
;

x29136.om$core$IGetRenderState$ = cljs.core.PROTOCOL_SENTINEL;

x29136.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x29136){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x29136))
;

x29136.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x29136){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x29136))
;

x29136.om$core$IGetState$ = cljs.core.PROTOCOL_SENTINEL;

x29136.om$core$IGetState$_get_state$arity$1 = ((function (x29136){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__4131__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (state["__om_state"]);
}
});})(x29136))
;

x29136.om$core$IGetState$_get_state$arity$2 = ((function (x29136){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x29136))
;

return x29136;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = goog.dom.dataset.get(om.core.get_node.call(null,x),"reactid");
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__4131__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__4131__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IInitState$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null));
(props["__om_init_state"] = null);

return ({"__om_id": om_id});
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,om.core.state);

if((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDidMount$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_29147 = om.core.children.call(null,this$);
if((((!((c_29147 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c_29147.om$core$IWillMount$))))?true:(((!c_29147.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_29147):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_29147))){
om.core.will_mount.call(null,c_29147);
} else {
}

if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$))){
return om.core.no_local_merge_pending_state.call(null,this$);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IWillUnmount$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__5720__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__5720__auto__){
var refs = temp__5720__auto__;
var seq__29141 = cljs.core.seq.call(null,refs);
var chunk__29142 = null;
var count__29143 = (0);
var i__29144 = (0);
while(true){
if((i__29144 < count__29143)){
var ref = cljs.core._nth.call(null,chunk__29142,i__29144);
om.core.unobserve.call(null,this$,ref);


var G__29148 = seq__29141;
var G__29149 = chunk__29142;
var G__29150 = count__29143;
var G__29151 = (i__29144 + (1));
seq__29141 = G__29148;
chunk__29142 = G__29149;
count__29143 = G__29150;
i__29144 = G__29151;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__29141);
if(temp__5720__auto____$1){
var seq__29141__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29141__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29141__$1);
var G__29152 = cljs.core.chunk_rest.call(null,seq__29141__$1);
var G__29153 = c__4550__auto__;
var G__29154 = cljs.core.count.call(null,c__4550__auto__);
var G__29155 = (0);
seq__29141 = G__29152;
chunk__29142 = G__29153;
count__29143 = G__29154;
i__29144 = G__29155;
continue;
} else {
var ref = cljs.core.first.call(null,seq__29141__$1);
om.core.unobserve.call(null,this$,ref);


var G__29156 = cljs.core.next.call(null,seq__29141__$1);
var G__29157 = null;
var G__29158 = (0);
var G__29159 = (0);
seq__29141 = G__29156;
chunk__29142 = G__29157;
count__29143 = G__29158;
i__29144 = G__29159;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_29160 = this$.props;
var c_29161 = om.core.children.call(null,this$);
if((((!((c_29161 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c_29161.om$core$IWillUpdate$))))?true:(((!c_29161.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_29161):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_29161))){
var state_29162 = this$.state;
om.core.will_update.call(null,c_29161,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDidUpdate$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_29163 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,({"props": prev_props, "isOmComponent": true})),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x29164 = cljs.core.clj__GT_js.call(null,methods$);
x29164.om$core$ISetState$ = cljs.core.PROTOCOL_SENTINEL;

x29164.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x29164){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__4120__auto__ = (!((gstate == null)));
if(and__4120__auto__){
return render;
} else {
return and__4120__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x29164))
;

x29164.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x29164){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x29164))
;

x29164.om$core$IGetRenderState$ = cljs.core.PROTOCOL_SENTINEL;

x29164.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x29164){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x29164))
;

x29164.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x29164){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x29164))
;

x29164.om$core$IGetState$ = cljs.core.PROTOCOL_SENTINEL;

x29164.om$core$IGetState$_get_state$arity$1 = ((function (x29164){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$__$1))){
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__4131__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
} else {
return (this$__$1.props["__om_init_state"]);
}
});})(x29164))
;

x29164.om$core$IGetState$_get_state$arity$2 = ((function (x29164){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x29164))
;

return x29164;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$ICursor$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x))){
return (!(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993))));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if((!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = cljs.core.PROTOCOL_SENTINEL;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = cljs.core.PROTOCOL_SENTINEL;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__29167){
var vec__29168 = p__29167;
var k = cljs.core.nth.call(null,vec__29168,(0),null);
var v = cljs.core.nth.call(null,vec__29168,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__29171 = null;
var G__29171__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__29171__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__29171 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29171__2.call(this,self__,k);
case 3:
return G__29171__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__29171.cljs$core$IFn$_invoke$arity$2 = G__29171__2;
G__29171.cljs$core$IFn$_invoke$arity$3 = G__29171__3;
return G__29171;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args29166){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29166)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"om.core/MapCursor");
});

/**
 * Positional factory function for om.core/MapCursor.
 */
om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = cljs.core.PROTOCOL_SENTINEL;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = cljs.core.PROTOCOL_SENTINEL;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__29173 = null;
var G__29173__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__29173__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__29173 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29173__2.call(this,self__,k);
case 3:
return G__29173__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__29173.cljs$core$IFn$_invoke$arity$2 = G__29173__2;
G__29173.cljs$core$IFn$_invoke$arity$3 = G__29173__3;
return G__29173;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args29172){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29172)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"om.core/IndexedCursor");
});

/**
 * Positional factory function for om.core/IndexedCursor.
 */
om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x29174 = cljs.core.clone.call(null,val);
x29174.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

x29174.cljs$core$IDeref$_deref$arity$1 = ((function (x29174){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x29174))
;

x29174.om$core$ICursor$ = cljs.core.PROTOCOL_SENTINEL;

x29174.om$core$ICursor$_path$arity$1 = ((function (x29174){
return (function (_){
var ___$1 = this;
return path;
});})(x29174))
;

x29174.om$core$ICursor$_state$arity$1 = ((function (x29174){
return (function (_){
var ___$1 = this;
return state;
});})(x29174))
;

x29174.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

x29174.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x29174){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x29174))
;

x29174.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

x29174.cljs$core$IEquiv$_equiv$arity$2 = ((function (x29174){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x29174))
;

return x29174;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var G__29176 = arguments.length;
switch (G__29176) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(om.core.cursor_QMARK_.call(null,val)){
return val;
} else {
if((((!((val == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === val.om$core$IToCursor$))))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val))){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((((!((val == null))))?(((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || ((cljs.core.PROTOCOL_SENTINEL === val.cljs$core$ICloneable$))))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;

om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if((((!((atom == null))))?(((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === atom.cljs$core$IDeref$))))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom))){
} else {
throw (new Error("Assert failed: (satisfies? IDeref atom)"));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x29181 = cljs.core.clone.call(null,x);
x29181.cljs$core$ICloneable$ = cljs.core.PROTOCOL_SENTINEL;

x29181.cljs$core$ICloneable$_clone$arity$1 = ((function (x29181){
return (function (this$){
var this$__$1 = this;
return om.core.ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x29181))
;

x29181.om$core$IAdapt$ = cljs.core.PROTOCOL_SENTINEL;

x29181.om$core$IAdapt$_adapt$arity$2 = ((function (x29181){
return (function (this$,other){
var this$__$1 = this;
return om.core.ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x29181))
;

x29181.om$core$ICursorDerive$ = cljs.core.PROTOCOL_SENTINEL;

x29181.om$core$ICursorDerive$_derive$arity$4 = ((function (x29181){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x29181))
;

x29181.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

x29181.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x29181){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x29181))
;

return x29181;
});
om.core.ref_cursor_QMARK_ = (function om$core$ref_cursor_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$IOmRef$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
}
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(om.core.ref_cursor_QMARK_.call(null,cursor)){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x29183 = cljs.core.clone.call(null,cursor);
x29183.om$core$ICursorDerive$ = cljs.core.PROTOCOL_SENTINEL;

x29183.om$core$ICursorDerive$_derive$arity$4 = ((function (x29183,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x29183,path,storage))
;

x29183.om$core$IOmRef$ = cljs.core.PROTOCOL_SENTINEL;

x29183.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x29183,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x29183,path,storage))
;

x29183.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x29183,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x29183,path,storage))
;

x29183.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x29183,path,storage){
return (function (_){
var ___$1 = this;
var seq__29184 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__29185 = null;
var count__29186 = (0);
var i__29187 = (0);
while(true){
if((i__29187 < count__29186)){
var c = cljs.core._nth.call(null,chunk__29185,i__29187);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);


var G__29188 = seq__29184;
var G__29189 = chunk__29185;
var G__29190 = count__29186;
var G__29191 = (i__29187 + (1));
seq__29184 = G__29188;
chunk__29185 = G__29189;
count__29186 = G__29190;
i__29187 = G__29191;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29184);
if(temp__5720__auto__){
var seq__29184__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29184__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29184__$1);
var G__29192 = cljs.core.chunk_rest.call(null,seq__29184__$1);
var G__29193 = c__4550__auto__;
var G__29194 = cljs.core.count.call(null,c__4550__auto__);
var G__29195 = (0);
seq__29184 = G__29192;
chunk__29185 = G__29193;
count__29186 = G__29194;
i__29187 = G__29195;
continue;
} else {
var c = cljs.core.first.call(null,seq__29184__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);


var G__29196 = cljs.core.next.call(null,seq__29184__$1);
var G__29197 = null;
var G__29198 = (0);
var G__29199 = (0);
seq__29184 = G__29196;
chunk__29185 = G__29197;
count__29186 = G__29198;
i__29187 = G__29199;
continue;
}
} else {
return null;
}
}
break;
}
});})(x29183,path,storage))
;

x29183.om$core$IOmRef$_get_deps$arity$1 = ((function (x29183,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x29183,path,storage))
;

x29183.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

x29183.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x29183,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x29183,path,storage))
;

return x29183;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__4131__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (component? c)"));
}

if(om.core.cursor_QMARK_.call(null,ref)){
} else {
throw (new Error("Assert failed: (cursor? ref)"));
}

if(om.core.ref_cursor_QMARK_.call(null,ref)){
} else {
throw (new Error("Assert failed: (ref-cursor? ref)"));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__4131__auto__ = state.om$render$T;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var G__29201 = arguments.length;
switch (G__29201) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__29202_29207 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__29203_29208 = null;
var count__29204_29209 = (0);
var i__29205_29210 = (0);
while(true){
if((i__29205_29210 < count__29204_29209)){
var f_29211 = cljs.core._nth.call(null,chunk__29203_29208,i__29205_29210);
f_29211.call(null);


var G__29212 = seq__29202_29207;
var G__29213 = chunk__29203_29208;
var G__29214 = count__29204_29209;
var G__29215 = (i__29205_29210 + (1));
seq__29202_29207 = G__29212;
chunk__29203_29208 = G__29213;
count__29204_29209 = G__29214;
i__29205_29210 = G__29215;
continue;
} else {
var temp__5720__auto___29216 = cljs.core.seq.call(null,seq__29202_29207);
if(temp__5720__auto___29216){
var seq__29202_29217__$1 = temp__5720__auto___29216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29202_29217__$1)){
var c__4550__auto___29218 = cljs.core.chunk_first.call(null,seq__29202_29217__$1);
var G__29219 = cljs.core.chunk_rest.call(null,seq__29202_29217__$1);
var G__29220 = c__4550__auto___29218;
var G__29221 = cljs.core.count.call(null,c__4550__auto___29218);
var G__29222 = (0);
seq__29202_29207 = G__29219;
chunk__29203_29208 = G__29220;
count__29204_29209 = G__29221;
i__29205_29210 = G__29222;
continue;
} else {
var f_29223 = cljs.core.first.call(null,seq__29202_29217__$1);
f_29223.call(null);


var G__29224 = cljs.core.next.call(null,seq__29202_29217__$1);
var G__29225 = null;
var G__29226 = (0);
var G__29227 = (0);
seq__29202_29207 = G__29224;
chunk__29203_29208 = G__29225;
count__29204_29209 = G__29226;
i__29205_29210 = G__29227;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;

om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__4131__auto__ = (((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$IRender$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$IRenderProps$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x));
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$IRenderState$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error(["Assert failed: ",["Invalid Om component fn, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f.name)," does not return valid instance"].join(''),"\n","(or (satisfies? IRender x) (satisfies? IRenderProps x) (satisfies? IRenderState x))"].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var G__29234 = arguments.length;
switch (G__29234) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
var rdesc_29236 = (function (){var or__4131__auto__ = descriptor;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
if((((goog.object.get(f,"om$descriptor") == null)) || ((!((rdesc_29236 === goog.object.get(f,"om$tag"))))))){
var factory_29237 = React.createFactory(React.createClass(rdesc_29236));
goog.object.set(f,"om$descriptor",factory_29237);

goog.object.set(f,"om$tag",rdesc_29236);
} else {
}

return goog.object.get(f,"om$descriptor");
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;

om.core.getf = (function om$core$getf(var_args){
var G__29239 = arguments.length;
switch (G__29239) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;

om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var G__29242 = arguments.length;
switch (G__29242) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if((((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if(om.core.valid_opts_QMARK_.call(null,m)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),"\n","(valid-opts? m)"].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,({"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
}));
} else {
var map__29243 = m;
var map__29243__$1 = (((((!((map__29243 == null))))?(((((map__29243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29243):map__29243);
var key = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = (((!((dataf == null))))?(function (){var temp__5718__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = (((!((key == null))))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):(((!((key_fn == null))))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,({"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__29243,map__29243__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__29243,map__29243__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__29243,map__29243__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__29243,map__29243__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__4131__auto__ = rkey;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_}));

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var G__29247 = arguments.length;
switch (G__29247) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if((((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if((!((om.core._STAR_instrument_STAR_ == null)))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;

/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var G__29250 = arguments.length;
switch (G__29250) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if((((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;

om.core.setup = (function om$core$setup(state,key,tx_listen){
if((((!((state == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === state.om$core$INotify$))))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state))){
} else {
var properties_29270 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_29271 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_29272 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x29253_29273 = state;
x29253_29273.om$core$IRootProperties$ = cljs.core.PROTOCOL_SENTINEL;

x29253_29273.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x29253_29273,properties_29270,listeners_29271,render_queue_29272){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_29270,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x29253_29273,properties_29270,listeners_29271,render_queue_29272))
;

x29253_29273.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x29253_29273,properties_29270,listeners_29271,render_queue_29272){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_29270,cljs.core.dissoc,id,k);
});})(x29253_29273,properties_29270,listeners_29271,render_queue_29272))
;

x29253_29273.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x29253_29273,properties_29270,listeners_29271,render_queue_29272){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_29270,cljs.core.dissoc,id);
});})(x29253_29273,properties_29270,listeners_29271,render_queue_29272))
;

x29253_29273.om$core$IRootProperties$_get_property$arity$3 = ((function (x29253_29273,properties_29270,listeners_29271,render_queue_29272){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_29270),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x29253_29273,properties_29270,listeners_29271,render_queue_29272))
;

x29253_29273.om$core$INotify$ = cljs.core.PROTOCOL_SENTINEL;

x29253_29273.om$core$INotify$_listen_BANG_$arity$3 = ((function (x29253_29273,properties_29270,listeners_29271,render_queue_29272){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_29271,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x29253_29273,properties_29270,listeners_29271,render_queue_29272))
;

x29253_29273.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x29253_29273,properties_29270,listeners_29271,render_queue_29272){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_29271,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x29253_29273,properties_29270,listeners_29271,render_queue_29272))
;

x29253_29273.om$core$INotify$_notify_BANG_$arity$3 = ((function (x29253_29273,properties_29270,listeners_29271,render_queue_29272){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__29254_29274 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_29271));
var chunk__29255_29275 = null;
var count__29256_29276 = (0);
var i__29257_29277 = (0);
while(true){
if((i__29257_29277 < count__29256_29276)){
var vec__29264_29278 = cljs.core._nth.call(null,chunk__29255_29275,i__29257_29277);
var __29279 = cljs.core.nth.call(null,vec__29264_29278,(0),null);
var f_29280 = cljs.core.nth.call(null,vec__29264_29278,(1),null);
f_29280.call(null,tx_data,root_cursor);


var G__29281 = seq__29254_29274;
var G__29282 = chunk__29255_29275;
var G__29283 = count__29256_29276;
var G__29284 = (i__29257_29277 + (1));
seq__29254_29274 = G__29281;
chunk__29255_29275 = G__29282;
count__29256_29276 = G__29283;
i__29257_29277 = G__29284;
continue;
} else {
var temp__5720__auto___29285 = cljs.core.seq.call(null,seq__29254_29274);
if(temp__5720__auto___29285){
var seq__29254_29286__$1 = temp__5720__auto___29285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29254_29286__$1)){
var c__4550__auto___29287 = cljs.core.chunk_first.call(null,seq__29254_29286__$1);
var G__29288 = cljs.core.chunk_rest.call(null,seq__29254_29286__$1);
var G__29289 = c__4550__auto___29287;
var G__29290 = cljs.core.count.call(null,c__4550__auto___29287);
var G__29291 = (0);
seq__29254_29274 = G__29288;
chunk__29255_29275 = G__29289;
count__29256_29276 = G__29290;
i__29257_29277 = G__29291;
continue;
} else {
var vec__29267_29292 = cljs.core.first.call(null,seq__29254_29286__$1);
var __29293 = cljs.core.nth.call(null,vec__29267_29292,(0),null);
var f_29294 = cljs.core.nth.call(null,vec__29267_29292,(1),null);
f_29294.call(null,tx_data,root_cursor);


var G__29295 = cljs.core.next.call(null,seq__29254_29286__$1);
var G__29296 = null;
var G__29297 = (0);
var G__29298 = (0);
seq__29254_29274 = G__29295;
chunk__29255_29275 = G__29296;
count__29256_29276 = G__29297;
i__29257_29277 = G__29298;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x29253_29273,properties_29270,listeners_29271,render_queue_29272))
;

x29253_29273.om$core$IRenderQueue$ = cljs.core.PROTOCOL_SENTINEL;

x29253_29273.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x29253_29273,properties_29270,listeners_29271,render_queue_29272){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_29272);
});})(x29253_29273,properties_29270,listeners_29271,render_queue_29272))
;

x29253_29273.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x29253_29273,properties_29270,listeners_29271,render_queue_29272){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_29272),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_29272,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x29253_29273,properties_29270,listeners_29271,render_queue_29272))
;

x29253_29273.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x29253_29273,properties_29270,listeners_29271,render_queue_29272){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_29272,cljs.core.empty);
});})(x29253_29273,properties_29270,listeners_29271,render_queue_29272))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_.call(null,cursor)){
var x29299 = cljs.core.clone.call(null,cursor);
x29299.cljs$core$ICloneable$ = cljs.core.PROTOCOL_SENTINEL;

x29299.cljs$core$ICloneable$_clone$arity$1 = ((function (x29299){
return (function (this$){
var this$__$1 = this;
return om.core.tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x29299))
;

x29299.om$core$IAdapt$ = cljs.core.PROTOCOL_SENTINEL;

x29299.om$core$IAdapt$_adapt$arity$2 = ((function (x29299){
return (function (this$,other){
var this$__$1 = this;
return om.core.tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x29299))
;

x29299.om$core$IRootKey$ = cljs.core.PROTOCOL_SENTINEL;

x29299.om$core$IRootKey$_root_key$arity$1 = ((function (x29299){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x29299))
;

return x29299;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__29300){
var map__29301 = p__29300;
var map__29301__$1 = (((((!((map__29301 == null))))?(((((map__29301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29301):map__29301);
var options = map__29301__$1;
var target = cljs.core.get.call(null,map__29301__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__29301__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__29301__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__29301__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__29301__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__29301__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__29301__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error(["Assert failed: ","First argument must be a function","\n","(ifn? f)"].join('')));
}

if((!((target == null)))){
} else {
throw (new Error(["Assert failed: ","No target specified to om.core/root","\n","(not (nil? target))"].join('')));
}

var roots_SINGLEQUOTE__29404 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__29404,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__29404,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((((!((value == null))))?(((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IAtom$))))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value)))?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__4131__auto__ = adapt;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__29301,map__29301__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

var c_29405 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR__orig_val__29304 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR__orig_val__29305 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR__orig_val__29306 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR__orig_val__29307 = om.core._STAR_root_key_STAR_;
var _STAR_descriptor_STAR__temp_val__29308 = descriptor;
var _STAR_instrument_STAR__temp_val__29309 = instrument;
var _STAR_state_STAR__temp_val__29310 = state__$1;
var _STAR_root_key_STAR__temp_val__29311 = watch_key;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR__temp_val__29308;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__29309;

om.core._STAR_state_STAR_ = _STAR_state_STAR__temp_val__29310;

om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR__temp_val__29311;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR__orig_val__29307;

om.core._STAR_state_STAR_ = _STAR_state_STAR__orig_val__29306;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__29305;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR__orig_val__29304;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_29405);
} else {
}
}

var queue_29406 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_29406)){
} else {
var seq__29312_29407 = cljs.core.seq.call(null,queue_29406);
var chunk__29313_29408 = null;
var count__29314_29409 = (0);
var i__29315_29410 = (0);
while(true){
if((i__29315_29410 < count__29314_29409)){
var c_29411 = cljs.core._nth.call(null,chunk__29313_29408,i__29315_29410);
if(cljs.core.truth_(c_29411.isMounted())){
var temp__5720__auto___29412 = (c_29411.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__5720__auto___29412)){
var next_props_29413 = temp__5720__auto___29412;
(c_29411.props["__om_cursor"] = next_props_29413);

(c_29411.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4131__auto__ = (!((function (){var G__29321 = om.core.children.call(null,c_29411);
if((!((G__29321 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__29321.om$core$ICheckState$)))){
return true;
} else {
if((!G__29321.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__29321);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__29321);
}
})()));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return c_29411.shouldComponentUpdate(c_29411.props,c_29411.state);
}
})())){
c_29411.forceUpdate();
} else {
}
} else {
}


var G__29414 = seq__29312_29407;
var G__29415 = chunk__29313_29408;
var G__29416 = count__29314_29409;
var G__29417 = (i__29315_29410 + (1));
seq__29312_29407 = G__29414;
chunk__29313_29408 = G__29415;
count__29314_29409 = G__29416;
i__29315_29410 = G__29417;
continue;
} else {
var temp__5720__auto___29418 = cljs.core.seq.call(null,seq__29312_29407);
if(temp__5720__auto___29418){
var seq__29312_29419__$1 = temp__5720__auto___29418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29312_29419__$1)){
var c__4550__auto___29420 = cljs.core.chunk_first.call(null,seq__29312_29419__$1);
var G__29421 = cljs.core.chunk_rest.call(null,seq__29312_29419__$1);
var G__29422 = c__4550__auto___29420;
var G__29423 = cljs.core.count.call(null,c__4550__auto___29420);
var G__29424 = (0);
seq__29312_29407 = G__29421;
chunk__29313_29408 = G__29422;
count__29314_29409 = G__29423;
i__29315_29410 = G__29424;
continue;
} else {
var c_29425 = cljs.core.first.call(null,seq__29312_29419__$1);
if(cljs.core.truth_(c_29425.isMounted())){
var temp__5720__auto___29426__$1 = (c_29425.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__5720__auto___29426__$1)){
var next_props_29427 = temp__5720__auto___29426__$1;
(c_29425.props["__om_cursor"] = next_props_29427);

(c_29425.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4131__auto__ = (!((function (){var G__29323 = om.core.children.call(null,c_29425);
if((!((G__29323 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__29323.om$core$ICheckState$)))){
return true;
} else {
if((!G__29323.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__29323);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__29323);
}
})()));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return c_29425.shouldComponentUpdate(c_29425.props,c_29425.state);
}
})())){
c_29425.forceUpdate();
} else {
}
} else {
}


var G__29428 = cljs.core.next.call(null,seq__29312_29419__$1);
var G__29429 = null;
var G__29430 = (0);
var G__29431 = (0);
seq__29312_29407 = G__29428;
chunk__29313_29408 = G__29429;
count__29314_29409 = G__29430;
i__29315_29410 = G__29431;
continue;
}
} else {
}
}
break;
}
}

var _refs_29432 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_29432)){
} else {
var seq__29324_29433 = cljs.core.seq.call(null,_refs_29432);
var chunk__29325_29434 = null;
var count__29326_29435 = (0);
var i__29327_29436 = (0);
while(true){
if((i__29327_29436 < count__29326_29435)){
var vec__29366_29437 = cljs.core._nth.call(null,chunk__29325_29434,i__29327_29436);
var path_29438__$1 = cljs.core.nth.call(null,vec__29366_29437,(0),null);
var cs_29439 = cljs.core.nth.call(null,vec__29366_29437,(1),null);
var cs_29440__$1 = cljs.core.deref.call(null,cs_29439);
var seq__29369_29441 = cljs.core.seq.call(null,cs_29440__$1);
var chunk__29370_29442 = null;
var count__29371_29443 = (0);
var i__29372_29444 = (0);
while(true){
if((i__29372_29444 < count__29371_29443)){
var vec__29379_29445 = cljs.core._nth.call(null,chunk__29370_29442,i__29372_29444);
var id_29446 = cljs.core.nth.call(null,vec__29379_29445,(0),null);
var c_29447 = cljs.core.nth.call(null,vec__29379_29445,(1),null);
if(cljs.core.truth_(c_29447.shouldComponentUpdate(c_29447.props,c_29447.state))){
c_29447.forceUpdate();
} else {
}


var G__29448 = seq__29369_29441;
var G__29449 = chunk__29370_29442;
var G__29450 = count__29371_29443;
var G__29451 = (i__29372_29444 + (1));
seq__29369_29441 = G__29448;
chunk__29370_29442 = G__29449;
count__29371_29443 = G__29450;
i__29372_29444 = G__29451;
continue;
} else {
var temp__5720__auto___29452 = cljs.core.seq.call(null,seq__29369_29441);
if(temp__5720__auto___29452){
var seq__29369_29453__$1 = temp__5720__auto___29452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29369_29453__$1)){
var c__4550__auto___29454 = cljs.core.chunk_first.call(null,seq__29369_29453__$1);
var G__29455 = cljs.core.chunk_rest.call(null,seq__29369_29453__$1);
var G__29456 = c__4550__auto___29454;
var G__29457 = cljs.core.count.call(null,c__4550__auto___29454);
var G__29458 = (0);
seq__29369_29441 = G__29455;
chunk__29370_29442 = G__29456;
count__29371_29443 = G__29457;
i__29372_29444 = G__29458;
continue;
} else {
var vec__29382_29459 = cljs.core.first.call(null,seq__29369_29453__$1);
var id_29460 = cljs.core.nth.call(null,vec__29382_29459,(0),null);
var c_29461 = cljs.core.nth.call(null,vec__29382_29459,(1),null);
if(cljs.core.truth_(c_29461.shouldComponentUpdate(c_29461.props,c_29461.state))){
c_29461.forceUpdate();
} else {
}


var G__29462 = cljs.core.next.call(null,seq__29369_29453__$1);
var G__29463 = null;
var G__29464 = (0);
var G__29465 = (0);
seq__29369_29441 = G__29462;
chunk__29370_29442 = G__29463;
count__29371_29443 = G__29464;
i__29372_29444 = G__29465;
continue;
}
} else {
}
}
break;
}


var G__29466 = seq__29324_29433;
var G__29467 = chunk__29325_29434;
var G__29468 = count__29326_29435;
var G__29469 = (i__29327_29436 + (1));
seq__29324_29433 = G__29466;
chunk__29325_29434 = G__29467;
count__29326_29435 = G__29468;
i__29327_29436 = G__29469;
continue;
} else {
var temp__5720__auto___29470 = cljs.core.seq.call(null,seq__29324_29433);
if(temp__5720__auto___29470){
var seq__29324_29471__$1 = temp__5720__auto___29470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29324_29471__$1)){
var c__4550__auto___29472 = cljs.core.chunk_first.call(null,seq__29324_29471__$1);
var G__29473 = cljs.core.chunk_rest.call(null,seq__29324_29471__$1);
var G__29474 = c__4550__auto___29472;
var G__29475 = cljs.core.count.call(null,c__4550__auto___29472);
var G__29476 = (0);
seq__29324_29433 = G__29473;
chunk__29325_29434 = G__29474;
count__29326_29435 = G__29475;
i__29327_29436 = G__29476;
continue;
} else {
var vec__29385_29477 = cljs.core.first.call(null,seq__29324_29471__$1);
var path_29478__$1 = cljs.core.nth.call(null,vec__29385_29477,(0),null);
var cs_29479 = cljs.core.nth.call(null,vec__29385_29477,(1),null);
var cs_29480__$1 = cljs.core.deref.call(null,cs_29479);
var seq__29388_29481 = cljs.core.seq.call(null,cs_29480__$1);
var chunk__29389_29482 = null;
var count__29390_29483 = (0);
var i__29391_29484 = (0);
while(true){
if((i__29391_29484 < count__29390_29483)){
var vec__29398_29485 = cljs.core._nth.call(null,chunk__29389_29482,i__29391_29484);
var id_29486 = cljs.core.nth.call(null,vec__29398_29485,(0),null);
var c_29487 = cljs.core.nth.call(null,vec__29398_29485,(1),null);
if(cljs.core.truth_(c_29487.shouldComponentUpdate(c_29487.props,c_29487.state))){
c_29487.forceUpdate();
} else {
}


var G__29488 = seq__29388_29481;
var G__29489 = chunk__29389_29482;
var G__29490 = count__29390_29483;
var G__29491 = (i__29391_29484 + (1));
seq__29388_29481 = G__29488;
chunk__29389_29482 = G__29489;
count__29390_29483 = G__29490;
i__29391_29484 = G__29491;
continue;
} else {
var temp__5720__auto___29492__$1 = cljs.core.seq.call(null,seq__29388_29481);
if(temp__5720__auto___29492__$1){
var seq__29388_29493__$1 = temp__5720__auto___29492__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29388_29493__$1)){
var c__4550__auto___29494 = cljs.core.chunk_first.call(null,seq__29388_29493__$1);
var G__29495 = cljs.core.chunk_rest.call(null,seq__29388_29493__$1);
var G__29496 = c__4550__auto___29494;
var G__29497 = cljs.core.count.call(null,c__4550__auto___29494);
var G__29498 = (0);
seq__29388_29481 = G__29495;
chunk__29389_29482 = G__29496;
count__29390_29483 = G__29497;
i__29391_29484 = G__29498;
continue;
} else {
var vec__29401_29499 = cljs.core.first.call(null,seq__29388_29493__$1);
var id_29500 = cljs.core.nth.call(null,vec__29401_29499,(0),null);
var c_29501 = cljs.core.nth.call(null,vec__29401_29499,(1),null);
if(cljs.core.truth_(c_29501.shouldComponentUpdate(c_29501.props,c_29501.state))){
c_29501.forceUpdate();
} else {
}


var G__29502 = cljs.core.next.call(null,seq__29388_29493__$1);
var G__29503 = null;
var G__29504 = (0);
var G__29505 = (0);
seq__29388_29481 = G__29502;
chunk__29389_29482 = G__29503;
count__29390_29483 = G__29504;
i__29391_29484 = G__29505;
continue;
}
} else {
}
}
break;
}


var G__29506 = cljs.core.next.call(null,seq__29324_29471__$1);
var G__29507 = null;
var G__29508 = (0);
var G__29509 = (0);
seq__29324_29433 = G__29506;
chunk__29325_29434 = G__29507;
count__29326_29435 = G__29508;
i__29327_29436 = G__29509;
continue;
}
} else {
}
}
break;
}
}

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__29301,map__29301__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29301,map__29301__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if(((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && ((!((o === n)))))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(om.core.refresh_queued){
return null;
} else {
om.core.refresh_queued = true;

if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
if(((raf === false) || ((!((typeof requestAnimationFrame !== 'undefined')))))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29301,map__29301__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29301,map__29301__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29301,map__29301__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29301,map__29301__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29301,map__29301__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29301,map__29301__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return ReactDOM.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29301,map__29301__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error("Assert failed: (gdom/isElement target)"));
}

var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$ITransact$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var G__29512 = arguments.length;
switch (G__29512) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(om.core.transactable_QMARK_.call(null,cursor)){
} else {
throw (new Error("Assert failed: (transactable? cursor)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var G__29515 = arguments.length;
switch (G__29515) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var key = (((((!((cursor == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === cursor.om$core$IRootKey$))))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor)))?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React DOM refs. Given a owning pure node
 *   extract the DOM ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var G__29519 = arguments.length;
switch (G__29519) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return ReactDOM.findDOMNode(owner);
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var G__29520 = owner.refs;
var G__29520__$1 = (((G__29520 == null))?null:(G__29520[name]));
if((G__29520__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__29520__$1);
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;

/**
 * A helper function to get at React refs. Given an owning pure node extract
 *   the ref specified by name.
 */
om.core.get_ref = (function om$core$get_ref(owner,name){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var G__29522 = owner.refs;
if((G__29522 == null)){
return null;
} else {
return goog.object.get(G__29522,name);
}
});
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var G__29524 = arguments.length;
switch (G__29524) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var G__29527 = arguments.length;
switch (G__29527) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var G__29530 = arguments.length;
switch (G__29530) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var G__29533 = arguments.length;
switch (G__29533) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var G__29536 = arguments.length;
switch (G__29536) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map?rel=1551193074838

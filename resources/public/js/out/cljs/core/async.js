// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23595 = arguments.length;
switch (G__23595) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23596 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23596 = (function (f,blockable,meta23597){
this.f = f;
this.blockable = blockable;
this.meta23597 = meta23597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23598,meta23597__$1){
var self__ = this;
var _23598__$1 = this;
return (new cljs.core.async.t_cljs$core$async23596(self__.f,self__.blockable,meta23597__$1));
});

cljs.core.async.t_cljs$core$async23596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23598){
var self__ = this;
var _23598__$1 = this;
return self__.meta23597;
});

cljs.core.async.t_cljs$core$async23596.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23596.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23596.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23596.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23597","meta23597",526392687,null)], null);
});

cljs.core.async.t_cljs$core$async23596.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23596";

cljs.core.async.t_cljs$core$async23596.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23596");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23596.
 */
cljs.core.async.__GT_t_cljs$core$async23596 = (function cljs$core$async$__GT_t_cljs$core$async23596(f__$1,blockable__$1,meta23597){
return (new cljs.core.async.t_cljs$core$async23596(f__$1,blockable__$1,meta23597));
});

}

return (new cljs.core.async.t_cljs$core$async23596(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23602 = arguments.length;
switch (G__23602) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23605 = arguments.length;
switch (G__23605) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23608 = arguments.length;
switch (G__23608) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23610 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23610);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23610,ret){
return (function (){
return fn1.call(null,val_23610);
});})(val_23610,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23612 = arguments.length;
switch (G__23612) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___23614 = n;
var x_23615 = (0);
while(true){
if((x_23615 < n__4607__auto___23614)){
(a[x_23615] = (0));

var G__23616 = (x_23615 + (1));
x_23615 = G__23616;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23617 = (i + (1));
i = G__23617;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23618 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23618 = (function (flag,meta23619){
this.flag = flag;
this.meta23619 = meta23619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23620,meta23619__$1){
var self__ = this;
var _23620__$1 = this;
return (new cljs.core.async.t_cljs$core$async23618(self__.flag,meta23619__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23620){
var self__ = this;
var _23620__$1 = this;
return self__.meta23619;
});})(flag))
;

cljs.core.async.t_cljs$core$async23618.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23618.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23618.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23618.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23618.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23619","meta23619",-1503329263,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23618.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23618";

cljs.core.async.t_cljs$core$async23618.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23618");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23618.
 */
cljs.core.async.__GT_t_cljs$core$async23618 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23618(flag__$1,meta23619){
return (new cljs.core.async.t_cljs$core$async23618(flag__$1,meta23619));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23618(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23621 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23621 = (function (flag,cb,meta23622){
this.flag = flag;
this.cb = cb;
this.meta23622 = meta23622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23623,meta23622__$1){
var self__ = this;
var _23623__$1 = this;
return (new cljs.core.async.t_cljs$core$async23621(self__.flag,self__.cb,meta23622__$1));
});

cljs.core.async.t_cljs$core$async23621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23623){
var self__ = this;
var _23623__$1 = this;
return self__.meta23622;
});

cljs.core.async.t_cljs$core$async23621.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23621.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23621.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23621.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23622","meta23622",2092686402,null)], null);
});

cljs.core.async.t_cljs$core$async23621.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23621";

cljs.core.async.t_cljs$core$async23621.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23621");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23621.
 */
cljs.core.async.__GT_t_cljs$core$async23621 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23621(flag__$1,cb__$1,meta23622){
return (new cljs.core.async.t_cljs$core$async23621(flag__$1,cb__$1,meta23622));
});

}

return (new cljs.core.async.t_cljs$core$async23621(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23624_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23624_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23625_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23625_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23626 = (i + (1));
i = G__23626;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23632 = arguments.length;
var i__4731__auto___23633 = (0);
while(true){
if((i__4731__auto___23633 < len__4730__auto___23632)){
args__4736__auto__.push((arguments[i__4731__auto___23633]));

var G__23634 = (i__4731__auto___23633 + (1));
i__4731__auto___23633 = G__23634;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23629){
var map__23630 = p__23629;
var map__23630__$1 = (((((!((map__23630 == null))))?(((((map__23630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23630):map__23630);
var opts = map__23630__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23627){
var G__23628 = cljs.core.first.call(null,seq23627);
var seq23627__$1 = cljs.core.next.call(null,seq23627);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23628,seq23627__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23636 = arguments.length;
switch (G__23636) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23535__auto___23682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto___23682){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto___23682){
return (function (state_23660){
var state_val_23661 = (state_23660[(1)]);
if((state_val_23661 === (7))){
var inst_23656 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
var statearr_23662_23683 = state_23660__$1;
(statearr_23662_23683[(2)] = inst_23656);

(statearr_23662_23683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (1))){
var state_23660__$1 = state_23660;
var statearr_23663_23684 = state_23660__$1;
(statearr_23663_23684[(2)] = null);

(statearr_23663_23684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (4))){
var inst_23639 = (state_23660[(7)]);
var inst_23639__$1 = (state_23660[(2)]);
var inst_23640 = (inst_23639__$1 == null);
var state_23660__$1 = (function (){var statearr_23664 = state_23660;
(statearr_23664[(7)] = inst_23639__$1);

return statearr_23664;
})();
if(cljs.core.truth_(inst_23640)){
var statearr_23665_23685 = state_23660__$1;
(statearr_23665_23685[(1)] = (5));

} else {
var statearr_23666_23686 = state_23660__$1;
(statearr_23666_23686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (13))){
var state_23660__$1 = state_23660;
var statearr_23667_23687 = state_23660__$1;
(statearr_23667_23687[(2)] = null);

(statearr_23667_23687[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (6))){
var inst_23639 = (state_23660[(7)]);
var state_23660__$1 = state_23660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23660__$1,(11),to,inst_23639);
} else {
if((state_val_23661 === (3))){
var inst_23658 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23660__$1,inst_23658);
} else {
if((state_val_23661 === (12))){
var state_23660__$1 = state_23660;
var statearr_23668_23688 = state_23660__$1;
(statearr_23668_23688[(2)] = null);

(statearr_23668_23688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (2))){
var state_23660__$1 = state_23660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23660__$1,(4),from);
} else {
if((state_val_23661 === (11))){
var inst_23649 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
if(cljs.core.truth_(inst_23649)){
var statearr_23669_23689 = state_23660__$1;
(statearr_23669_23689[(1)] = (12));

} else {
var statearr_23670_23690 = state_23660__$1;
(statearr_23670_23690[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (9))){
var state_23660__$1 = state_23660;
var statearr_23671_23691 = state_23660__$1;
(statearr_23671_23691[(2)] = null);

(statearr_23671_23691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (5))){
var state_23660__$1 = state_23660;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23672_23692 = state_23660__$1;
(statearr_23672_23692[(1)] = (8));

} else {
var statearr_23673_23693 = state_23660__$1;
(statearr_23673_23693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (14))){
var inst_23654 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
var statearr_23674_23694 = state_23660__$1;
(statearr_23674_23694[(2)] = inst_23654);

(statearr_23674_23694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (10))){
var inst_23646 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
var statearr_23675_23695 = state_23660__$1;
(statearr_23675_23695[(2)] = inst_23646);

(statearr_23675_23695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (8))){
var inst_23643 = cljs.core.async.close_BANG_.call(null,to);
var state_23660__$1 = state_23660;
var statearr_23676_23696 = state_23660__$1;
(statearr_23676_23696[(2)] = inst_23643);

(statearr_23676_23696[(1)] = (10));


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
});})(c__23535__auto___23682))
;
return ((function (switch__23475__auto__,c__23535__auto___23682){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_23677 = [null,null,null,null,null,null,null,null];
(statearr_23677[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_23677[(1)] = (1));

return statearr_23677;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_23660){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_23660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e23678){if((e23678 instanceof Object)){
var ex__23479__auto__ = e23678;
var statearr_23679_23697 = state_23660;
(statearr_23679_23697[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23698 = state_23660;
state_23660 = G__23698;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_23660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_23660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto___23682))
})();
var state__23537__auto__ = (function (){var statearr_23680 = f__23536__auto__.call(null);
(statearr_23680[(6)] = c__23535__auto___23682);

return statearr_23680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto___23682))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23699){
var vec__23700 = p__23699;
var v = cljs.core.nth.call(null,vec__23700,(0),null);
var p = cljs.core.nth.call(null,vec__23700,(1),null);
var job = vec__23700;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23535__auto___23871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto___23871,res,vec__23700,v,p,job,jobs,results){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto___23871,res,vec__23700,v,p,job,jobs,results){
return (function (state_23707){
var state_val_23708 = (state_23707[(1)]);
if((state_val_23708 === (1))){
var state_23707__$1 = state_23707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23707__$1,(2),res,v);
} else {
if((state_val_23708 === (2))){
var inst_23704 = (state_23707[(2)]);
var inst_23705 = cljs.core.async.close_BANG_.call(null,res);
var state_23707__$1 = (function (){var statearr_23709 = state_23707;
(statearr_23709[(7)] = inst_23704);

return statearr_23709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23707__$1,inst_23705);
} else {
return null;
}
}
});})(c__23535__auto___23871,res,vec__23700,v,p,job,jobs,results))
;
return ((function (switch__23475__auto__,c__23535__auto___23871,res,vec__23700,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0 = (function (){
var statearr_23710 = [null,null,null,null,null,null,null,null];
(statearr_23710[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__);

(statearr_23710[(1)] = (1));

return statearr_23710;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1 = (function (state_23707){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_23707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e23711){if((e23711 instanceof Object)){
var ex__23479__auto__ = e23711;
var statearr_23712_23872 = state_23707;
(statearr_23712_23872[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23873 = state_23707;
state_23707 = G__23873;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__ = function(state_23707){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1.call(this,state_23707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto___23871,res,vec__23700,v,p,job,jobs,results))
})();
var state__23537__auto__ = (function (){var statearr_23713 = f__23536__auto__.call(null);
(statearr_23713[(6)] = c__23535__auto___23871);

return statearr_23713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto___23871,res,vec__23700,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23714){
var vec__23715 = p__23714;
var v = cljs.core.nth.call(null,vec__23715,(0),null);
var p = cljs.core.nth.call(null,vec__23715,(1),null);
var job = vec__23715;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___23874 = n;
var __23875 = (0);
while(true){
if((__23875 < n__4607__auto___23874)){
var G__23718_23876 = type;
var G__23718_23877__$1 = (((G__23718_23876 instanceof cljs.core.Keyword))?G__23718_23876.fqn:null);
switch (G__23718_23877__$1) {
case "compute":
var c__23535__auto___23879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23875,c__23535__auto___23879,G__23718_23876,G__23718_23877__$1,n__4607__auto___23874,jobs,results,process,async){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (__23875,c__23535__auto___23879,G__23718_23876,G__23718_23877__$1,n__4607__auto___23874,jobs,results,process,async){
return (function (state_23731){
var state_val_23732 = (state_23731[(1)]);
if((state_val_23732 === (1))){
var state_23731__$1 = state_23731;
var statearr_23733_23880 = state_23731__$1;
(statearr_23733_23880[(2)] = null);

(statearr_23733_23880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23732 === (2))){
var state_23731__$1 = state_23731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23731__$1,(4),jobs);
} else {
if((state_val_23732 === (3))){
var inst_23729 = (state_23731[(2)]);
var state_23731__$1 = state_23731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23731__$1,inst_23729);
} else {
if((state_val_23732 === (4))){
var inst_23721 = (state_23731[(2)]);
var inst_23722 = process.call(null,inst_23721);
var state_23731__$1 = state_23731;
if(cljs.core.truth_(inst_23722)){
var statearr_23734_23881 = state_23731__$1;
(statearr_23734_23881[(1)] = (5));

} else {
var statearr_23735_23882 = state_23731__$1;
(statearr_23735_23882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23732 === (5))){
var state_23731__$1 = state_23731;
var statearr_23736_23883 = state_23731__$1;
(statearr_23736_23883[(2)] = null);

(statearr_23736_23883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23732 === (6))){
var state_23731__$1 = state_23731;
var statearr_23737_23884 = state_23731__$1;
(statearr_23737_23884[(2)] = null);

(statearr_23737_23884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23732 === (7))){
var inst_23727 = (state_23731[(2)]);
var state_23731__$1 = state_23731;
var statearr_23738_23885 = state_23731__$1;
(statearr_23738_23885[(2)] = inst_23727);

(statearr_23738_23885[(1)] = (3));


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
});})(__23875,c__23535__auto___23879,G__23718_23876,G__23718_23877__$1,n__4607__auto___23874,jobs,results,process,async))
;
return ((function (__23875,switch__23475__auto__,c__23535__auto___23879,G__23718_23876,G__23718_23877__$1,n__4607__auto___23874,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0 = (function (){
var statearr_23739 = [null,null,null,null,null,null,null];
(statearr_23739[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__);

(statearr_23739[(1)] = (1));

return statearr_23739;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1 = (function (state_23731){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_23731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e23740){if((e23740 instanceof Object)){
var ex__23479__auto__ = e23740;
var statearr_23741_23886 = state_23731;
(statearr_23741_23886[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23887 = state_23731;
state_23731 = G__23887;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__ = function(state_23731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1.call(this,state_23731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__;
})()
;})(__23875,switch__23475__auto__,c__23535__auto___23879,G__23718_23876,G__23718_23877__$1,n__4607__auto___23874,jobs,results,process,async))
})();
var state__23537__auto__ = (function (){var statearr_23742 = f__23536__auto__.call(null);
(statearr_23742[(6)] = c__23535__auto___23879);

return statearr_23742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(__23875,c__23535__auto___23879,G__23718_23876,G__23718_23877__$1,n__4607__auto___23874,jobs,results,process,async))
);


break;
case "async":
var c__23535__auto___23888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23875,c__23535__auto___23888,G__23718_23876,G__23718_23877__$1,n__4607__auto___23874,jobs,results,process,async){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (__23875,c__23535__auto___23888,G__23718_23876,G__23718_23877__$1,n__4607__auto___23874,jobs,results,process,async){
return (function (state_23755){
var state_val_23756 = (state_23755[(1)]);
if((state_val_23756 === (1))){
var state_23755__$1 = state_23755;
var statearr_23757_23889 = state_23755__$1;
(statearr_23757_23889[(2)] = null);

(statearr_23757_23889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (2))){
var state_23755__$1 = state_23755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23755__$1,(4),jobs);
} else {
if((state_val_23756 === (3))){
var inst_23753 = (state_23755[(2)]);
var state_23755__$1 = state_23755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23755__$1,inst_23753);
} else {
if((state_val_23756 === (4))){
var inst_23745 = (state_23755[(2)]);
var inst_23746 = async.call(null,inst_23745);
var state_23755__$1 = state_23755;
if(cljs.core.truth_(inst_23746)){
var statearr_23758_23890 = state_23755__$1;
(statearr_23758_23890[(1)] = (5));

} else {
var statearr_23759_23891 = state_23755__$1;
(statearr_23759_23891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (5))){
var state_23755__$1 = state_23755;
var statearr_23760_23892 = state_23755__$1;
(statearr_23760_23892[(2)] = null);

(statearr_23760_23892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (6))){
var state_23755__$1 = state_23755;
var statearr_23761_23893 = state_23755__$1;
(statearr_23761_23893[(2)] = null);

(statearr_23761_23893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (7))){
var inst_23751 = (state_23755[(2)]);
var state_23755__$1 = state_23755;
var statearr_23762_23894 = state_23755__$1;
(statearr_23762_23894[(2)] = inst_23751);

(statearr_23762_23894[(1)] = (3));


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
});})(__23875,c__23535__auto___23888,G__23718_23876,G__23718_23877__$1,n__4607__auto___23874,jobs,results,process,async))
;
return ((function (__23875,switch__23475__auto__,c__23535__auto___23888,G__23718_23876,G__23718_23877__$1,n__4607__auto___23874,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0 = (function (){
var statearr_23763 = [null,null,null,null,null,null,null];
(statearr_23763[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__);

(statearr_23763[(1)] = (1));

return statearr_23763;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1 = (function (state_23755){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_23755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e23764){if((e23764 instanceof Object)){
var ex__23479__auto__ = e23764;
var statearr_23765_23895 = state_23755;
(statearr_23765_23895[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23896 = state_23755;
state_23755 = G__23896;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__ = function(state_23755){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1.call(this,state_23755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__;
})()
;})(__23875,switch__23475__auto__,c__23535__auto___23888,G__23718_23876,G__23718_23877__$1,n__4607__auto___23874,jobs,results,process,async))
})();
var state__23537__auto__ = (function (){var statearr_23766 = f__23536__auto__.call(null);
(statearr_23766[(6)] = c__23535__auto___23888);

return statearr_23766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(__23875,c__23535__auto___23888,G__23718_23876,G__23718_23877__$1,n__4607__auto___23874,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23718_23877__$1)].join('')));

}

var G__23897 = (__23875 + (1));
__23875 = G__23897;
continue;
} else {
}
break;
}

var c__23535__auto___23898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto___23898,jobs,results,process,async){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto___23898,jobs,results,process,async){
return (function (state_23788){
var state_val_23789 = (state_23788[(1)]);
if((state_val_23789 === (7))){
var inst_23784 = (state_23788[(2)]);
var state_23788__$1 = state_23788;
var statearr_23790_23899 = state_23788__$1;
(statearr_23790_23899[(2)] = inst_23784);

(statearr_23790_23899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23789 === (1))){
var state_23788__$1 = state_23788;
var statearr_23791_23900 = state_23788__$1;
(statearr_23791_23900[(2)] = null);

(statearr_23791_23900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23789 === (4))){
var inst_23769 = (state_23788[(7)]);
var inst_23769__$1 = (state_23788[(2)]);
var inst_23770 = (inst_23769__$1 == null);
var state_23788__$1 = (function (){var statearr_23792 = state_23788;
(statearr_23792[(7)] = inst_23769__$1);

return statearr_23792;
})();
if(cljs.core.truth_(inst_23770)){
var statearr_23793_23901 = state_23788__$1;
(statearr_23793_23901[(1)] = (5));

} else {
var statearr_23794_23902 = state_23788__$1;
(statearr_23794_23902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23789 === (6))){
var inst_23769 = (state_23788[(7)]);
var inst_23774 = (state_23788[(8)]);
var inst_23774__$1 = cljs.core.async.chan.call(null,(1));
var inst_23775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23776 = [inst_23769,inst_23774__$1];
var inst_23777 = (new cljs.core.PersistentVector(null,2,(5),inst_23775,inst_23776,null));
var state_23788__$1 = (function (){var statearr_23795 = state_23788;
(statearr_23795[(8)] = inst_23774__$1);

return statearr_23795;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23788__$1,(8),jobs,inst_23777);
} else {
if((state_val_23789 === (3))){
var inst_23786 = (state_23788[(2)]);
var state_23788__$1 = state_23788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23788__$1,inst_23786);
} else {
if((state_val_23789 === (2))){
var state_23788__$1 = state_23788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23788__$1,(4),from);
} else {
if((state_val_23789 === (9))){
var inst_23781 = (state_23788[(2)]);
var state_23788__$1 = (function (){var statearr_23796 = state_23788;
(statearr_23796[(9)] = inst_23781);

return statearr_23796;
})();
var statearr_23797_23903 = state_23788__$1;
(statearr_23797_23903[(2)] = null);

(statearr_23797_23903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23789 === (5))){
var inst_23772 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23788__$1 = state_23788;
var statearr_23798_23904 = state_23788__$1;
(statearr_23798_23904[(2)] = inst_23772);

(statearr_23798_23904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23789 === (8))){
var inst_23774 = (state_23788[(8)]);
var inst_23779 = (state_23788[(2)]);
var state_23788__$1 = (function (){var statearr_23799 = state_23788;
(statearr_23799[(10)] = inst_23779);

return statearr_23799;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23788__$1,(9),results,inst_23774);
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
});})(c__23535__auto___23898,jobs,results,process,async))
;
return ((function (switch__23475__auto__,c__23535__auto___23898,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0 = (function (){
var statearr_23800 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23800[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__);

(statearr_23800[(1)] = (1));

return statearr_23800;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1 = (function (state_23788){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_23788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e23801){if((e23801 instanceof Object)){
var ex__23479__auto__ = e23801;
var statearr_23802_23905 = state_23788;
(statearr_23802_23905[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23906 = state_23788;
state_23788 = G__23906;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__ = function(state_23788){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1.call(this,state_23788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto___23898,jobs,results,process,async))
})();
var state__23537__auto__ = (function (){var statearr_23803 = f__23536__auto__.call(null);
(statearr_23803[(6)] = c__23535__auto___23898);

return statearr_23803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto___23898,jobs,results,process,async))
);


var c__23535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto__,jobs,results,process,async){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto__,jobs,results,process,async){
return (function (state_23841){
var state_val_23842 = (state_23841[(1)]);
if((state_val_23842 === (7))){
var inst_23837 = (state_23841[(2)]);
var state_23841__$1 = state_23841;
var statearr_23843_23907 = state_23841__$1;
(statearr_23843_23907[(2)] = inst_23837);

(statearr_23843_23907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23842 === (20))){
var state_23841__$1 = state_23841;
var statearr_23844_23908 = state_23841__$1;
(statearr_23844_23908[(2)] = null);

(statearr_23844_23908[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23842 === (1))){
var state_23841__$1 = state_23841;
var statearr_23845_23909 = state_23841__$1;
(statearr_23845_23909[(2)] = null);

(statearr_23845_23909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23842 === (4))){
var inst_23806 = (state_23841[(7)]);
var inst_23806__$1 = (state_23841[(2)]);
var inst_23807 = (inst_23806__$1 == null);
var state_23841__$1 = (function (){var statearr_23846 = state_23841;
(statearr_23846[(7)] = inst_23806__$1);

return statearr_23846;
})();
if(cljs.core.truth_(inst_23807)){
var statearr_23847_23910 = state_23841__$1;
(statearr_23847_23910[(1)] = (5));

} else {
var statearr_23848_23911 = state_23841__$1;
(statearr_23848_23911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23842 === (15))){
var inst_23819 = (state_23841[(8)]);
var state_23841__$1 = state_23841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23841__$1,(18),to,inst_23819);
} else {
if((state_val_23842 === (21))){
var inst_23832 = (state_23841[(2)]);
var state_23841__$1 = state_23841;
var statearr_23849_23912 = state_23841__$1;
(statearr_23849_23912[(2)] = inst_23832);

(statearr_23849_23912[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23842 === (13))){
var inst_23834 = (state_23841[(2)]);
var state_23841__$1 = (function (){var statearr_23850 = state_23841;
(statearr_23850[(9)] = inst_23834);

return statearr_23850;
})();
var statearr_23851_23913 = state_23841__$1;
(statearr_23851_23913[(2)] = null);

(statearr_23851_23913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23842 === (6))){
var inst_23806 = (state_23841[(7)]);
var state_23841__$1 = state_23841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23841__$1,(11),inst_23806);
} else {
if((state_val_23842 === (17))){
var inst_23827 = (state_23841[(2)]);
var state_23841__$1 = state_23841;
if(cljs.core.truth_(inst_23827)){
var statearr_23852_23914 = state_23841__$1;
(statearr_23852_23914[(1)] = (19));

} else {
var statearr_23853_23915 = state_23841__$1;
(statearr_23853_23915[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23842 === (3))){
var inst_23839 = (state_23841[(2)]);
var state_23841__$1 = state_23841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23841__$1,inst_23839);
} else {
if((state_val_23842 === (12))){
var inst_23816 = (state_23841[(10)]);
var state_23841__$1 = state_23841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23841__$1,(14),inst_23816);
} else {
if((state_val_23842 === (2))){
var state_23841__$1 = state_23841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23841__$1,(4),results);
} else {
if((state_val_23842 === (19))){
var state_23841__$1 = state_23841;
var statearr_23854_23916 = state_23841__$1;
(statearr_23854_23916[(2)] = null);

(statearr_23854_23916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23842 === (11))){
var inst_23816 = (state_23841[(2)]);
var state_23841__$1 = (function (){var statearr_23855 = state_23841;
(statearr_23855[(10)] = inst_23816);

return statearr_23855;
})();
var statearr_23856_23917 = state_23841__$1;
(statearr_23856_23917[(2)] = null);

(statearr_23856_23917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23842 === (9))){
var state_23841__$1 = state_23841;
var statearr_23857_23918 = state_23841__$1;
(statearr_23857_23918[(2)] = null);

(statearr_23857_23918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23842 === (5))){
var state_23841__$1 = state_23841;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23858_23919 = state_23841__$1;
(statearr_23858_23919[(1)] = (8));

} else {
var statearr_23859_23920 = state_23841__$1;
(statearr_23859_23920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23842 === (14))){
var inst_23819 = (state_23841[(8)]);
var inst_23821 = (state_23841[(11)]);
var inst_23819__$1 = (state_23841[(2)]);
var inst_23820 = (inst_23819__$1 == null);
var inst_23821__$1 = cljs.core.not.call(null,inst_23820);
var state_23841__$1 = (function (){var statearr_23860 = state_23841;
(statearr_23860[(8)] = inst_23819__$1);

(statearr_23860[(11)] = inst_23821__$1);

return statearr_23860;
})();
if(inst_23821__$1){
var statearr_23861_23921 = state_23841__$1;
(statearr_23861_23921[(1)] = (15));

} else {
var statearr_23862_23922 = state_23841__$1;
(statearr_23862_23922[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23842 === (16))){
var inst_23821 = (state_23841[(11)]);
var state_23841__$1 = state_23841;
var statearr_23863_23923 = state_23841__$1;
(statearr_23863_23923[(2)] = inst_23821);

(statearr_23863_23923[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23842 === (10))){
var inst_23813 = (state_23841[(2)]);
var state_23841__$1 = state_23841;
var statearr_23864_23924 = state_23841__$1;
(statearr_23864_23924[(2)] = inst_23813);

(statearr_23864_23924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23842 === (18))){
var inst_23824 = (state_23841[(2)]);
var state_23841__$1 = state_23841;
var statearr_23865_23925 = state_23841__$1;
(statearr_23865_23925[(2)] = inst_23824);

(statearr_23865_23925[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23842 === (8))){
var inst_23810 = cljs.core.async.close_BANG_.call(null,to);
var state_23841__$1 = state_23841;
var statearr_23866_23926 = state_23841__$1;
(statearr_23866_23926[(2)] = inst_23810);

(statearr_23866_23926[(1)] = (10));


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
}
}
}
}
});})(c__23535__auto__,jobs,results,process,async))
;
return ((function (switch__23475__auto__,c__23535__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0 = (function (){
var statearr_23867 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23867[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__);

(statearr_23867[(1)] = (1));

return statearr_23867;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1 = (function (state_23841){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_23841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e23868){if((e23868 instanceof Object)){
var ex__23479__auto__ = e23868;
var statearr_23869_23927 = state_23841;
(statearr_23869_23927[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23928 = state_23841;
state_23841 = G__23928;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__ = function(state_23841){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1.call(this,state_23841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto__,jobs,results,process,async))
})();
var state__23537__auto__ = (function (){var statearr_23870 = f__23536__auto__.call(null);
(statearr_23870[(6)] = c__23535__auto__);

return statearr_23870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto__,jobs,results,process,async))
);

return c__23535__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23930 = arguments.length;
switch (G__23930) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23933 = arguments.length;
switch (G__23933) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23936 = arguments.length;
switch (G__23936) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23535__auto___23985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto___23985,tc,fc){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto___23985,tc,fc){
return (function (state_23962){
var state_val_23963 = (state_23962[(1)]);
if((state_val_23963 === (7))){
var inst_23958 = (state_23962[(2)]);
var state_23962__$1 = state_23962;
var statearr_23964_23986 = state_23962__$1;
(statearr_23964_23986[(2)] = inst_23958);

(statearr_23964_23986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23963 === (1))){
var state_23962__$1 = state_23962;
var statearr_23965_23987 = state_23962__$1;
(statearr_23965_23987[(2)] = null);

(statearr_23965_23987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23963 === (4))){
var inst_23939 = (state_23962[(7)]);
var inst_23939__$1 = (state_23962[(2)]);
var inst_23940 = (inst_23939__$1 == null);
var state_23962__$1 = (function (){var statearr_23966 = state_23962;
(statearr_23966[(7)] = inst_23939__$1);

return statearr_23966;
})();
if(cljs.core.truth_(inst_23940)){
var statearr_23967_23988 = state_23962__$1;
(statearr_23967_23988[(1)] = (5));

} else {
var statearr_23968_23989 = state_23962__$1;
(statearr_23968_23989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23963 === (13))){
var state_23962__$1 = state_23962;
var statearr_23969_23990 = state_23962__$1;
(statearr_23969_23990[(2)] = null);

(statearr_23969_23990[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23963 === (6))){
var inst_23939 = (state_23962[(7)]);
var inst_23945 = p.call(null,inst_23939);
var state_23962__$1 = state_23962;
if(cljs.core.truth_(inst_23945)){
var statearr_23970_23991 = state_23962__$1;
(statearr_23970_23991[(1)] = (9));

} else {
var statearr_23971_23992 = state_23962__$1;
(statearr_23971_23992[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23963 === (3))){
var inst_23960 = (state_23962[(2)]);
var state_23962__$1 = state_23962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23962__$1,inst_23960);
} else {
if((state_val_23963 === (12))){
var state_23962__$1 = state_23962;
var statearr_23972_23993 = state_23962__$1;
(statearr_23972_23993[(2)] = null);

(statearr_23972_23993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23963 === (2))){
var state_23962__$1 = state_23962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23962__$1,(4),ch);
} else {
if((state_val_23963 === (11))){
var inst_23939 = (state_23962[(7)]);
var inst_23949 = (state_23962[(2)]);
var state_23962__$1 = state_23962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23962__$1,(8),inst_23949,inst_23939);
} else {
if((state_val_23963 === (9))){
var state_23962__$1 = state_23962;
var statearr_23973_23994 = state_23962__$1;
(statearr_23973_23994[(2)] = tc);

(statearr_23973_23994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23963 === (5))){
var inst_23942 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23943 = cljs.core.async.close_BANG_.call(null,fc);
var state_23962__$1 = (function (){var statearr_23974 = state_23962;
(statearr_23974[(8)] = inst_23942);

return statearr_23974;
})();
var statearr_23975_23995 = state_23962__$1;
(statearr_23975_23995[(2)] = inst_23943);

(statearr_23975_23995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23963 === (14))){
var inst_23956 = (state_23962[(2)]);
var state_23962__$1 = state_23962;
var statearr_23976_23996 = state_23962__$1;
(statearr_23976_23996[(2)] = inst_23956);

(statearr_23976_23996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23963 === (10))){
var state_23962__$1 = state_23962;
var statearr_23977_23997 = state_23962__$1;
(statearr_23977_23997[(2)] = fc);

(statearr_23977_23997[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23963 === (8))){
var inst_23951 = (state_23962[(2)]);
var state_23962__$1 = state_23962;
if(cljs.core.truth_(inst_23951)){
var statearr_23978_23998 = state_23962__$1;
(statearr_23978_23998[(1)] = (12));

} else {
var statearr_23979_23999 = state_23962__$1;
(statearr_23979_23999[(1)] = (13));

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
});})(c__23535__auto___23985,tc,fc))
;
return ((function (switch__23475__auto__,c__23535__auto___23985,tc,fc){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_23980 = [null,null,null,null,null,null,null,null,null];
(statearr_23980[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_23980[(1)] = (1));

return statearr_23980;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_23962){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_23962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e23981){if((e23981 instanceof Object)){
var ex__23479__auto__ = e23981;
var statearr_23982_24000 = state_23962;
(statearr_23982_24000[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24001 = state_23962;
state_23962 = G__24001;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_23962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_23962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto___23985,tc,fc))
})();
var state__23537__auto__ = (function (){var statearr_23983 = f__23536__auto__.call(null);
(statearr_23983[(6)] = c__23535__auto___23985);

return statearr_23983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto___23985,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto__){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto__){
return (function (state_24022){
var state_val_24023 = (state_24022[(1)]);
if((state_val_24023 === (7))){
var inst_24018 = (state_24022[(2)]);
var state_24022__$1 = state_24022;
var statearr_24024_24042 = state_24022__$1;
(statearr_24024_24042[(2)] = inst_24018);

(statearr_24024_24042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (1))){
var inst_24002 = init;
var state_24022__$1 = (function (){var statearr_24025 = state_24022;
(statearr_24025[(7)] = inst_24002);

return statearr_24025;
})();
var statearr_24026_24043 = state_24022__$1;
(statearr_24026_24043[(2)] = null);

(statearr_24026_24043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (4))){
var inst_24005 = (state_24022[(8)]);
var inst_24005__$1 = (state_24022[(2)]);
var inst_24006 = (inst_24005__$1 == null);
var state_24022__$1 = (function (){var statearr_24027 = state_24022;
(statearr_24027[(8)] = inst_24005__$1);

return statearr_24027;
})();
if(cljs.core.truth_(inst_24006)){
var statearr_24028_24044 = state_24022__$1;
(statearr_24028_24044[(1)] = (5));

} else {
var statearr_24029_24045 = state_24022__$1;
(statearr_24029_24045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (6))){
var inst_24005 = (state_24022[(8)]);
var inst_24009 = (state_24022[(9)]);
var inst_24002 = (state_24022[(7)]);
var inst_24009__$1 = f.call(null,inst_24002,inst_24005);
var inst_24010 = cljs.core.reduced_QMARK_.call(null,inst_24009__$1);
var state_24022__$1 = (function (){var statearr_24030 = state_24022;
(statearr_24030[(9)] = inst_24009__$1);

return statearr_24030;
})();
if(inst_24010){
var statearr_24031_24046 = state_24022__$1;
(statearr_24031_24046[(1)] = (8));

} else {
var statearr_24032_24047 = state_24022__$1;
(statearr_24032_24047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (3))){
var inst_24020 = (state_24022[(2)]);
var state_24022__$1 = state_24022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24022__$1,inst_24020);
} else {
if((state_val_24023 === (2))){
var state_24022__$1 = state_24022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24022__$1,(4),ch);
} else {
if((state_val_24023 === (9))){
var inst_24009 = (state_24022[(9)]);
var inst_24002 = inst_24009;
var state_24022__$1 = (function (){var statearr_24033 = state_24022;
(statearr_24033[(7)] = inst_24002);

return statearr_24033;
})();
var statearr_24034_24048 = state_24022__$1;
(statearr_24034_24048[(2)] = null);

(statearr_24034_24048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (5))){
var inst_24002 = (state_24022[(7)]);
var state_24022__$1 = state_24022;
var statearr_24035_24049 = state_24022__$1;
(statearr_24035_24049[(2)] = inst_24002);

(statearr_24035_24049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (10))){
var inst_24016 = (state_24022[(2)]);
var state_24022__$1 = state_24022;
var statearr_24036_24050 = state_24022__$1;
(statearr_24036_24050[(2)] = inst_24016);

(statearr_24036_24050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (8))){
var inst_24009 = (state_24022[(9)]);
var inst_24012 = cljs.core.deref.call(null,inst_24009);
var state_24022__$1 = state_24022;
var statearr_24037_24051 = state_24022__$1;
(statearr_24037_24051[(2)] = inst_24012);

(statearr_24037_24051[(1)] = (10));


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
});})(c__23535__auto__))
;
return ((function (switch__23475__auto__,c__23535__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23476__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23476__auto____0 = (function (){
var statearr_24038 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24038[(0)] = cljs$core$async$reduce_$_state_machine__23476__auto__);

(statearr_24038[(1)] = (1));

return statearr_24038;
});
var cljs$core$async$reduce_$_state_machine__23476__auto____1 = (function (state_24022){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_24022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e24039){if((e24039 instanceof Object)){
var ex__23479__auto__ = e24039;
var statearr_24040_24052 = state_24022;
(statearr_24040_24052[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24053 = state_24022;
state_24022 = G__24053;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23476__auto__ = function(state_24022){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23476__auto____1.call(this,state_24022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23476__auto____0;
cljs$core$async$reduce_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23476__auto____1;
return cljs$core$async$reduce_$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto__))
})();
var state__23537__auto__ = (function (){var statearr_24041 = f__23536__auto__.call(null);
(statearr_24041[(6)] = c__23535__auto__);

return statearr_24041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto__))
);

return c__23535__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto__,f__$1){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto__,f__$1){
return (function (state_24059){
var state_val_24060 = (state_24059[(1)]);
if((state_val_24060 === (1))){
var inst_24054 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24059__$1 = state_24059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24059__$1,(2),inst_24054);
} else {
if((state_val_24060 === (2))){
var inst_24056 = (state_24059[(2)]);
var inst_24057 = f__$1.call(null,inst_24056);
var state_24059__$1 = state_24059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24059__$1,inst_24057);
} else {
return null;
}
}
});})(c__23535__auto__,f__$1))
;
return ((function (switch__23475__auto__,c__23535__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23476__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23476__auto____0 = (function (){
var statearr_24061 = [null,null,null,null,null,null,null];
(statearr_24061[(0)] = cljs$core$async$transduce_$_state_machine__23476__auto__);

(statearr_24061[(1)] = (1));

return statearr_24061;
});
var cljs$core$async$transduce_$_state_machine__23476__auto____1 = (function (state_24059){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_24059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e24062){if((e24062 instanceof Object)){
var ex__23479__auto__ = e24062;
var statearr_24063_24065 = state_24059;
(statearr_24063_24065[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24066 = state_24059;
state_24059 = G__24066;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23476__auto__ = function(state_24059){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23476__auto____1.call(this,state_24059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23476__auto____0;
cljs$core$async$transduce_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23476__auto____1;
return cljs$core$async$transduce_$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto__,f__$1))
})();
var state__23537__auto__ = (function (){var statearr_24064 = f__23536__auto__.call(null);
(statearr_24064[(6)] = c__23535__auto__);

return statearr_24064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto__,f__$1))
);

return c__23535__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24068 = arguments.length;
switch (G__24068) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto__){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto__){
return (function (state_24093){
var state_val_24094 = (state_24093[(1)]);
if((state_val_24094 === (7))){
var inst_24075 = (state_24093[(2)]);
var state_24093__$1 = state_24093;
var statearr_24095_24116 = state_24093__$1;
(statearr_24095_24116[(2)] = inst_24075);

(statearr_24095_24116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24094 === (1))){
var inst_24069 = cljs.core.seq.call(null,coll);
var inst_24070 = inst_24069;
var state_24093__$1 = (function (){var statearr_24096 = state_24093;
(statearr_24096[(7)] = inst_24070);

return statearr_24096;
})();
var statearr_24097_24117 = state_24093__$1;
(statearr_24097_24117[(2)] = null);

(statearr_24097_24117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24094 === (4))){
var inst_24070 = (state_24093[(7)]);
var inst_24073 = cljs.core.first.call(null,inst_24070);
var state_24093__$1 = state_24093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24093__$1,(7),ch,inst_24073);
} else {
if((state_val_24094 === (13))){
var inst_24087 = (state_24093[(2)]);
var state_24093__$1 = state_24093;
var statearr_24098_24118 = state_24093__$1;
(statearr_24098_24118[(2)] = inst_24087);

(statearr_24098_24118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24094 === (6))){
var inst_24078 = (state_24093[(2)]);
var state_24093__$1 = state_24093;
if(cljs.core.truth_(inst_24078)){
var statearr_24099_24119 = state_24093__$1;
(statearr_24099_24119[(1)] = (8));

} else {
var statearr_24100_24120 = state_24093__$1;
(statearr_24100_24120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24094 === (3))){
var inst_24091 = (state_24093[(2)]);
var state_24093__$1 = state_24093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24093__$1,inst_24091);
} else {
if((state_val_24094 === (12))){
var state_24093__$1 = state_24093;
var statearr_24101_24121 = state_24093__$1;
(statearr_24101_24121[(2)] = null);

(statearr_24101_24121[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24094 === (2))){
var inst_24070 = (state_24093[(7)]);
var state_24093__$1 = state_24093;
if(cljs.core.truth_(inst_24070)){
var statearr_24102_24122 = state_24093__$1;
(statearr_24102_24122[(1)] = (4));

} else {
var statearr_24103_24123 = state_24093__$1;
(statearr_24103_24123[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24094 === (11))){
var inst_24084 = cljs.core.async.close_BANG_.call(null,ch);
var state_24093__$1 = state_24093;
var statearr_24104_24124 = state_24093__$1;
(statearr_24104_24124[(2)] = inst_24084);

(statearr_24104_24124[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24094 === (9))){
var state_24093__$1 = state_24093;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24105_24125 = state_24093__$1;
(statearr_24105_24125[(1)] = (11));

} else {
var statearr_24106_24126 = state_24093__$1;
(statearr_24106_24126[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24094 === (5))){
var inst_24070 = (state_24093[(7)]);
var state_24093__$1 = state_24093;
var statearr_24107_24127 = state_24093__$1;
(statearr_24107_24127[(2)] = inst_24070);

(statearr_24107_24127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24094 === (10))){
var inst_24089 = (state_24093[(2)]);
var state_24093__$1 = state_24093;
var statearr_24108_24128 = state_24093__$1;
(statearr_24108_24128[(2)] = inst_24089);

(statearr_24108_24128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24094 === (8))){
var inst_24070 = (state_24093[(7)]);
var inst_24080 = cljs.core.next.call(null,inst_24070);
var inst_24070__$1 = inst_24080;
var state_24093__$1 = (function (){var statearr_24109 = state_24093;
(statearr_24109[(7)] = inst_24070__$1);

return statearr_24109;
})();
var statearr_24110_24129 = state_24093__$1;
(statearr_24110_24129[(2)] = null);

(statearr_24110_24129[(1)] = (2));


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
});})(c__23535__auto__))
;
return ((function (switch__23475__auto__,c__23535__auto__){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_24111 = [null,null,null,null,null,null,null,null];
(statearr_24111[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_24111[(1)] = (1));

return statearr_24111;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_24093){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_24093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e24112){if((e24112 instanceof Object)){
var ex__23479__auto__ = e24112;
var statearr_24113_24130 = state_24093;
(statearr_24113_24130[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24131 = state_24093;
state_24093 = G__24131;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_24093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_24093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto__))
})();
var state__23537__auto__ = (function (){var statearr_24114 = f__23536__auto__.call(null);
(statearr_24114[(6)] = c__23535__auto__);

return statearr_24114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto__))
);

return c__23535__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24132 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24132 = (function (ch,cs,meta24133){
this.ch = ch;
this.cs = cs;
this.meta24133 = meta24133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24134,meta24133__$1){
var self__ = this;
var _24134__$1 = this;
return (new cljs.core.async.t_cljs$core$async24132(self__.ch,self__.cs,meta24133__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24132.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24134){
var self__ = this;
var _24134__$1 = this;
return self__.meta24133;
});})(cs))
;

cljs.core.async.t_cljs$core$async24132.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24132.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24132.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24132.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24132.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24132.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24132.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24133","meta24133",861054610,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24132";

cljs.core.async.t_cljs$core$async24132.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24132");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24132.
 */
cljs.core.async.__GT_t_cljs$core$async24132 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24132(ch__$1,cs__$1,meta24133){
return (new cljs.core.async.t_cljs$core$async24132(ch__$1,cs__$1,meta24133));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24132(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23535__auto___24354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto___24354,cs,m,dchan,dctr,done){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto___24354,cs,m,dchan,dctr,done){
return (function (state_24269){
var state_val_24270 = (state_24269[(1)]);
if((state_val_24270 === (7))){
var inst_24265 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24271_24355 = state_24269__$1;
(statearr_24271_24355[(2)] = inst_24265);

(statearr_24271_24355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (20))){
var inst_24168 = (state_24269[(7)]);
var inst_24180 = cljs.core.first.call(null,inst_24168);
var inst_24181 = cljs.core.nth.call(null,inst_24180,(0),null);
var inst_24182 = cljs.core.nth.call(null,inst_24180,(1),null);
var state_24269__$1 = (function (){var statearr_24272 = state_24269;
(statearr_24272[(8)] = inst_24181);

return statearr_24272;
})();
if(cljs.core.truth_(inst_24182)){
var statearr_24273_24356 = state_24269__$1;
(statearr_24273_24356[(1)] = (22));

} else {
var statearr_24274_24357 = state_24269__$1;
(statearr_24274_24357[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (27))){
var inst_24137 = (state_24269[(9)]);
var inst_24212 = (state_24269[(10)]);
var inst_24217 = (state_24269[(11)]);
var inst_24210 = (state_24269[(12)]);
var inst_24217__$1 = cljs.core._nth.call(null,inst_24210,inst_24212);
var inst_24218 = cljs.core.async.put_BANG_.call(null,inst_24217__$1,inst_24137,done);
var state_24269__$1 = (function (){var statearr_24275 = state_24269;
(statearr_24275[(11)] = inst_24217__$1);

return statearr_24275;
})();
if(cljs.core.truth_(inst_24218)){
var statearr_24276_24358 = state_24269__$1;
(statearr_24276_24358[(1)] = (30));

} else {
var statearr_24277_24359 = state_24269__$1;
(statearr_24277_24359[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (1))){
var state_24269__$1 = state_24269;
var statearr_24278_24360 = state_24269__$1;
(statearr_24278_24360[(2)] = null);

(statearr_24278_24360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (24))){
var inst_24168 = (state_24269[(7)]);
var inst_24187 = (state_24269[(2)]);
var inst_24188 = cljs.core.next.call(null,inst_24168);
var inst_24146 = inst_24188;
var inst_24147 = null;
var inst_24148 = (0);
var inst_24149 = (0);
var state_24269__$1 = (function (){var statearr_24279 = state_24269;
(statearr_24279[(13)] = inst_24147);

(statearr_24279[(14)] = inst_24146);

(statearr_24279[(15)] = inst_24149);

(statearr_24279[(16)] = inst_24148);

(statearr_24279[(17)] = inst_24187);

return statearr_24279;
})();
var statearr_24280_24361 = state_24269__$1;
(statearr_24280_24361[(2)] = null);

(statearr_24280_24361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (39))){
var state_24269__$1 = state_24269;
var statearr_24284_24362 = state_24269__$1;
(statearr_24284_24362[(2)] = null);

(statearr_24284_24362[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (4))){
var inst_24137 = (state_24269[(9)]);
var inst_24137__$1 = (state_24269[(2)]);
var inst_24138 = (inst_24137__$1 == null);
var state_24269__$1 = (function (){var statearr_24285 = state_24269;
(statearr_24285[(9)] = inst_24137__$1);

return statearr_24285;
})();
if(cljs.core.truth_(inst_24138)){
var statearr_24286_24363 = state_24269__$1;
(statearr_24286_24363[(1)] = (5));

} else {
var statearr_24287_24364 = state_24269__$1;
(statearr_24287_24364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (15))){
var inst_24147 = (state_24269[(13)]);
var inst_24146 = (state_24269[(14)]);
var inst_24149 = (state_24269[(15)]);
var inst_24148 = (state_24269[(16)]);
var inst_24164 = (state_24269[(2)]);
var inst_24165 = (inst_24149 + (1));
var tmp24281 = inst_24147;
var tmp24282 = inst_24146;
var tmp24283 = inst_24148;
var inst_24146__$1 = tmp24282;
var inst_24147__$1 = tmp24281;
var inst_24148__$1 = tmp24283;
var inst_24149__$1 = inst_24165;
var state_24269__$1 = (function (){var statearr_24288 = state_24269;
(statearr_24288[(18)] = inst_24164);

(statearr_24288[(13)] = inst_24147__$1);

(statearr_24288[(14)] = inst_24146__$1);

(statearr_24288[(15)] = inst_24149__$1);

(statearr_24288[(16)] = inst_24148__$1);

return statearr_24288;
})();
var statearr_24289_24365 = state_24269__$1;
(statearr_24289_24365[(2)] = null);

(statearr_24289_24365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (21))){
var inst_24191 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24293_24366 = state_24269__$1;
(statearr_24293_24366[(2)] = inst_24191);

(statearr_24293_24366[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (31))){
var inst_24217 = (state_24269[(11)]);
var inst_24221 = done.call(null,null);
var inst_24222 = cljs.core.async.untap_STAR_.call(null,m,inst_24217);
var state_24269__$1 = (function (){var statearr_24294 = state_24269;
(statearr_24294[(19)] = inst_24221);

return statearr_24294;
})();
var statearr_24295_24367 = state_24269__$1;
(statearr_24295_24367[(2)] = inst_24222);

(statearr_24295_24367[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (32))){
var inst_24211 = (state_24269[(20)]);
var inst_24212 = (state_24269[(10)]);
var inst_24209 = (state_24269[(21)]);
var inst_24210 = (state_24269[(12)]);
var inst_24224 = (state_24269[(2)]);
var inst_24225 = (inst_24212 + (1));
var tmp24290 = inst_24211;
var tmp24291 = inst_24209;
var tmp24292 = inst_24210;
var inst_24209__$1 = tmp24291;
var inst_24210__$1 = tmp24292;
var inst_24211__$1 = tmp24290;
var inst_24212__$1 = inst_24225;
var state_24269__$1 = (function (){var statearr_24296 = state_24269;
(statearr_24296[(20)] = inst_24211__$1);

(statearr_24296[(10)] = inst_24212__$1);

(statearr_24296[(21)] = inst_24209__$1);

(statearr_24296[(12)] = inst_24210__$1);

(statearr_24296[(22)] = inst_24224);

return statearr_24296;
})();
var statearr_24297_24368 = state_24269__$1;
(statearr_24297_24368[(2)] = null);

(statearr_24297_24368[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (40))){
var inst_24237 = (state_24269[(23)]);
var inst_24241 = done.call(null,null);
var inst_24242 = cljs.core.async.untap_STAR_.call(null,m,inst_24237);
var state_24269__$1 = (function (){var statearr_24298 = state_24269;
(statearr_24298[(24)] = inst_24241);

return statearr_24298;
})();
var statearr_24299_24369 = state_24269__$1;
(statearr_24299_24369[(2)] = inst_24242);

(statearr_24299_24369[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (33))){
var inst_24228 = (state_24269[(25)]);
var inst_24230 = cljs.core.chunked_seq_QMARK_.call(null,inst_24228);
var state_24269__$1 = state_24269;
if(inst_24230){
var statearr_24300_24370 = state_24269__$1;
(statearr_24300_24370[(1)] = (36));

} else {
var statearr_24301_24371 = state_24269__$1;
(statearr_24301_24371[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (13))){
var inst_24158 = (state_24269[(26)]);
var inst_24161 = cljs.core.async.close_BANG_.call(null,inst_24158);
var state_24269__$1 = state_24269;
var statearr_24302_24372 = state_24269__$1;
(statearr_24302_24372[(2)] = inst_24161);

(statearr_24302_24372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (22))){
var inst_24181 = (state_24269[(8)]);
var inst_24184 = cljs.core.async.close_BANG_.call(null,inst_24181);
var state_24269__$1 = state_24269;
var statearr_24303_24373 = state_24269__$1;
(statearr_24303_24373[(2)] = inst_24184);

(statearr_24303_24373[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (36))){
var inst_24228 = (state_24269[(25)]);
var inst_24232 = cljs.core.chunk_first.call(null,inst_24228);
var inst_24233 = cljs.core.chunk_rest.call(null,inst_24228);
var inst_24234 = cljs.core.count.call(null,inst_24232);
var inst_24209 = inst_24233;
var inst_24210 = inst_24232;
var inst_24211 = inst_24234;
var inst_24212 = (0);
var state_24269__$1 = (function (){var statearr_24304 = state_24269;
(statearr_24304[(20)] = inst_24211);

(statearr_24304[(10)] = inst_24212);

(statearr_24304[(21)] = inst_24209);

(statearr_24304[(12)] = inst_24210);

return statearr_24304;
})();
var statearr_24305_24374 = state_24269__$1;
(statearr_24305_24374[(2)] = null);

(statearr_24305_24374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (41))){
var inst_24228 = (state_24269[(25)]);
var inst_24244 = (state_24269[(2)]);
var inst_24245 = cljs.core.next.call(null,inst_24228);
var inst_24209 = inst_24245;
var inst_24210 = null;
var inst_24211 = (0);
var inst_24212 = (0);
var state_24269__$1 = (function (){var statearr_24306 = state_24269;
(statearr_24306[(20)] = inst_24211);

(statearr_24306[(10)] = inst_24212);

(statearr_24306[(21)] = inst_24209);

(statearr_24306[(27)] = inst_24244);

(statearr_24306[(12)] = inst_24210);

return statearr_24306;
})();
var statearr_24307_24375 = state_24269__$1;
(statearr_24307_24375[(2)] = null);

(statearr_24307_24375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (43))){
var state_24269__$1 = state_24269;
var statearr_24308_24376 = state_24269__$1;
(statearr_24308_24376[(2)] = null);

(statearr_24308_24376[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (29))){
var inst_24253 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24309_24377 = state_24269__$1;
(statearr_24309_24377[(2)] = inst_24253);

(statearr_24309_24377[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (44))){
var inst_24262 = (state_24269[(2)]);
var state_24269__$1 = (function (){var statearr_24310 = state_24269;
(statearr_24310[(28)] = inst_24262);

return statearr_24310;
})();
var statearr_24311_24378 = state_24269__$1;
(statearr_24311_24378[(2)] = null);

(statearr_24311_24378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (6))){
var inst_24201 = (state_24269[(29)]);
var inst_24200 = cljs.core.deref.call(null,cs);
var inst_24201__$1 = cljs.core.keys.call(null,inst_24200);
var inst_24202 = cljs.core.count.call(null,inst_24201__$1);
var inst_24203 = cljs.core.reset_BANG_.call(null,dctr,inst_24202);
var inst_24208 = cljs.core.seq.call(null,inst_24201__$1);
var inst_24209 = inst_24208;
var inst_24210 = null;
var inst_24211 = (0);
var inst_24212 = (0);
var state_24269__$1 = (function (){var statearr_24312 = state_24269;
(statearr_24312[(20)] = inst_24211);

(statearr_24312[(30)] = inst_24203);

(statearr_24312[(10)] = inst_24212);

(statearr_24312[(21)] = inst_24209);

(statearr_24312[(29)] = inst_24201__$1);

(statearr_24312[(12)] = inst_24210);

return statearr_24312;
})();
var statearr_24313_24379 = state_24269__$1;
(statearr_24313_24379[(2)] = null);

(statearr_24313_24379[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (28))){
var inst_24209 = (state_24269[(21)]);
var inst_24228 = (state_24269[(25)]);
var inst_24228__$1 = cljs.core.seq.call(null,inst_24209);
var state_24269__$1 = (function (){var statearr_24314 = state_24269;
(statearr_24314[(25)] = inst_24228__$1);

return statearr_24314;
})();
if(inst_24228__$1){
var statearr_24315_24380 = state_24269__$1;
(statearr_24315_24380[(1)] = (33));

} else {
var statearr_24316_24381 = state_24269__$1;
(statearr_24316_24381[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (25))){
var inst_24211 = (state_24269[(20)]);
var inst_24212 = (state_24269[(10)]);
var inst_24214 = (inst_24212 < inst_24211);
var inst_24215 = inst_24214;
var state_24269__$1 = state_24269;
if(cljs.core.truth_(inst_24215)){
var statearr_24317_24382 = state_24269__$1;
(statearr_24317_24382[(1)] = (27));

} else {
var statearr_24318_24383 = state_24269__$1;
(statearr_24318_24383[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (34))){
var state_24269__$1 = state_24269;
var statearr_24319_24384 = state_24269__$1;
(statearr_24319_24384[(2)] = null);

(statearr_24319_24384[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (17))){
var state_24269__$1 = state_24269;
var statearr_24320_24385 = state_24269__$1;
(statearr_24320_24385[(2)] = null);

(statearr_24320_24385[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (3))){
var inst_24267 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24269__$1,inst_24267);
} else {
if((state_val_24270 === (12))){
var inst_24196 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24321_24386 = state_24269__$1;
(statearr_24321_24386[(2)] = inst_24196);

(statearr_24321_24386[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (2))){
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24269__$1,(4),ch);
} else {
if((state_val_24270 === (23))){
var state_24269__$1 = state_24269;
var statearr_24322_24387 = state_24269__$1;
(statearr_24322_24387[(2)] = null);

(statearr_24322_24387[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (35))){
var inst_24251 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24323_24388 = state_24269__$1;
(statearr_24323_24388[(2)] = inst_24251);

(statearr_24323_24388[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (19))){
var inst_24168 = (state_24269[(7)]);
var inst_24172 = cljs.core.chunk_first.call(null,inst_24168);
var inst_24173 = cljs.core.chunk_rest.call(null,inst_24168);
var inst_24174 = cljs.core.count.call(null,inst_24172);
var inst_24146 = inst_24173;
var inst_24147 = inst_24172;
var inst_24148 = inst_24174;
var inst_24149 = (0);
var state_24269__$1 = (function (){var statearr_24324 = state_24269;
(statearr_24324[(13)] = inst_24147);

(statearr_24324[(14)] = inst_24146);

(statearr_24324[(15)] = inst_24149);

(statearr_24324[(16)] = inst_24148);

return statearr_24324;
})();
var statearr_24325_24389 = state_24269__$1;
(statearr_24325_24389[(2)] = null);

(statearr_24325_24389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (11))){
var inst_24168 = (state_24269[(7)]);
var inst_24146 = (state_24269[(14)]);
var inst_24168__$1 = cljs.core.seq.call(null,inst_24146);
var state_24269__$1 = (function (){var statearr_24326 = state_24269;
(statearr_24326[(7)] = inst_24168__$1);

return statearr_24326;
})();
if(inst_24168__$1){
var statearr_24327_24390 = state_24269__$1;
(statearr_24327_24390[(1)] = (16));

} else {
var statearr_24328_24391 = state_24269__$1;
(statearr_24328_24391[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (9))){
var inst_24198 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24329_24392 = state_24269__$1;
(statearr_24329_24392[(2)] = inst_24198);

(statearr_24329_24392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (5))){
var inst_24144 = cljs.core.deref.call(null,cs);
var inst_24145 = cljs.core.seq.call(null,inst_24144);
var inst_24146 = inst_24145;
var inst_24147 = null;
var inst_24148 = (0);
var inst_24149 = (0);
var state_24269__$1 = (function (){var statearr_24330 = state_24269;
(statearr_24330[(13)] = inst_24147);

(statearr_24330[(14)] = inst_24146);

(statearr_24330[(15)] = inst_24149);

(statearr_24330[(16)] = inst_24148);

return statearr_24330;
})();
var statearr_24331_24393 = state_24269__$1;
(statearr_24331_24393[(2)] = null);

(statearr_24331_24393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (14))){
var state_24269__$1 = state_24269;
var statearr_24332_24394 = state_24269__$1;
(statearr_24332_24394[(2)] = null);

(statearr_24332_24394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (45))){
var inst_24259 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24333_24395 = state_24269__$1;
(statearr_24333_24395[(2)] = inst_24259);

(statearr_24333_24395[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (26))){
var inst_24201 = (state_24269[(29)]);
var inst_24255 = (state_24269[(2)]);
var inst_24256 = cljs.core.seq.call(null,inst_24201);
var state_24269__$1 = (function (){var statearr_24334 = state_24269;
(statearr_24334[(31)] = inst_24255);

return statearr_24334;
})();
if(inst_24256){
var statearr_24335_24396 = state_24269__$1;
(statearr_24335_24396[(1)] = (42));

} else {
var statearr_24336_24397 = state_24269__$1;
(statearr_24336_24397[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (16))){
var inst_24168 = (state_24269[(7)]);
var inst_24170 = cljs.core.chunked_seq_QMARK_.call(null,inst_24168);
var state_24269__$1 = state_24269;
if(inst_24170){
var statearr_24337_24398 = state_24269__$1;
(statearr_24337_24398[(1)] = (19));

} else {
var statearr_24338_24399 = state_24269__$1;
(statearr_24338_24399[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (38))){
var inst_24248 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24339_24400 = state_24269__$1;
(statearr_24339_24400[(2)] = inst_24248);

(statearr_24339_24400[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (30))){
var state_24269__$1 = state_24269;
var statearr_24340_24401 = state_24269__$1;
(statearr_24340_24401[(2)] = null);

(statearr_24340_24401[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (10))){
var inst_24147 = (state_24269[(13)]);
var inst_24149 = (state_24269[(15)]);
var inst_24157 = cljs.core._nth.call(null,inst_24147,inst_24149);
var inst_24158 = cljs.core.nth.call(null,inst_24157,(0),null);
var inst_24159 = cljs.core.nth.call(null,inst_24157,(1),null);
var state_24269__$1 = (function (){var statearr_24341 = state_24269;
(statearr_24341[(26)] = inst_24158);

return statearr_24341;
})();
if(cljs.core.truth_(inst_24159)){
var statearr_24342_24402 = state_24269__$1;
(statearr_24342_24402[(1)] = (13));

} else {
var statearr_24343_24403 = state_24269__$1;
(statearr_24343_24403[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (18))){
var inst_24194 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24344_24404 = state_24269__$1;
(statearr_24344_24404[(2)] = inst_24194);

(statearr_24344_24404[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (42))){
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24269__$1,(45),dchan);
} else {
if((state_val_24270 === (37))){
var inst_24137 = (state_24269[(9)]);
var inst_24228 = (state_24269[(25)]);
var inst_24237 = (state_24269[(23)]);
var inst_24237__$1 = cljs.core.first.call(null,inst_24228);
var inst_24238 = cljs.core.async.put_BANG_.call(null,inst_24237__$1,inst_24137,done);
var state_24269__$1 = (function (){var statearr_24345 = state_24269;
(statearr_24345[(23)] = inst_24237__$1);

return statearr_24345;
})();
if(cljs.core.truth_(inst_24238)){
var statearr_24346_24405 = state_24269__$1;
(statearr_24346_24405[(1)] = (39));

} else {
var statearr_24347_24406 = state_24269__$1;
(statearr_24347_24406[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (8))){
var inst_24149 = (state_24269[(15)]);
var inst_24148 = (state_24269[(16)]);
var inst_24151 = (inst_24149 < inst_24148);
var inst_24152 = inst_24151;
var state_24269__$1 = state_24269;
if(cljs.core.truth_(inst_24152)){
var statearr_24348_24407 = state_24269__$1;
(statearr_24348_24407[(1)] = (10));

} else {
var statearr_24349_24408 = state_24269__$1;
(statearr_24349_24408[(1)] = (11));

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
});})(c__23535__auto___24354,cs,m,dchan,dctr,done))
;
return ((function (switch__23475__auto__,c__23535__auto___24354,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23476__auto__ = null;
var cljs$core$async$mult_$_state_machine__23476__auto____0 = (function (){
var statearr_24350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24350[(0)] = cljs$core$async$mult_$_state_machine__23476__auto__);

(statearr_24350[(1)] = (1));

return statearr_24350;
});
var cljs$core$async$mult_$_state_machine__23476__auto____1 = (function (state_24269){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_24269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e24351){if((e24351 instanceof Object)){
var ex__23479__auto__ = e24351;
var statearr_24352_24409 = state_24269;
(statearr_24352_24409[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24410 = state_24269;
state_24269 = G__24410;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23476__auto__ = function(state_24269){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23476__auto____1.call(this,state_24269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23476__auto____0;
cljs$core$async$mult_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23476__auto____1;
return cljs$core$async$mult_$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto___24354,cs,m,dchan,dctr,done))
})();
var state__23537__auto__ = (function (){var statearr_24353 = f__23536__auto__.call(null);
(statearr_24353[(6)] = c__23535__auto___24354);

return statearr_24353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto___24354,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24412 = arguments.length;
switch (G__24412) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24424 = arguments.length;
var i__4731__auto___24425 = (0);
while(true){
if((i__4731__auto___24425 < len__4730__auto___24424)){
args__4736__auto__.push((arguments[i__4731__auto___24425]));

var G__24426 = (i__4731__auto___24425 + (1));
i__4731__auto___24425 = G__24426;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24418){
var map__24419 = p__24418;
var map__24419__$1 = (((((!((map__24419 == null))))?(((((map__24419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24419):map__24419);
var opts = map__24419__$1;
var statearr_24421_24427 = state;
(statearr_24421_24427[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__24419,map__24419__$1,opts){
return (function (val){
var statearr_24422_24428 = state;
(statearr_24422_24428[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24419,map__24419__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_24423_24429 = state;
(statearr_24423_24429[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24414){
var G__24415 = cljs.core.first.call(null,seq24414);
var seq24414__$1 = cljs.core.next.call(null,seq24414);
var G__24416 = cljs.core.first.call(null,seq24414__$1);
var seq24414__$2 = cljs.core.next.call(null,seq24414__$1);
var G__24417 = cljs.core.first.call(null,seq24414__$2);
var seq24414__$3 = cljs.core.next.call(null,seq24414__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24415,G__24416,G__24417,seq24414__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24430 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24430 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24431){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24431 = meta24431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24432,meta24431__$1){
var self__ = this;
var _24432__$1 = this;
return (new cljs.core.async.t_cljs$core$async24430(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24431__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24432){
var self__ = this;
var _24432__$1 = this;
return self__.meta24431;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24430.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24431","meta24431",881012514,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24430.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24430";

cljs.core.async.t_cljs$core$async24430.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24430");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24430.
 */
cljs.core.async.__GT_t_cljs$core$async24430 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24430(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24431){
return (new cljs.core.async.t_cljs$core$async24430(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24431));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24430(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23535__auto___24594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto___24594,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto___24594,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24534){
var state_val_24535 = (state_24534[(1)]);
if((state_val_24535 === (7))){
var inst_24449 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
var statearr_24536_24595 = state_24534__$1;
(statearr_24536_24595[(2)] = inst_24449);

(statearr_24536_24595[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (20))){
var inst_24461 = (state_24534[(7)]);
var state_24534__$1 = state_24534;
var statearr_24537_24596 = state_24534__$1;
(statearr_24537_24596[(2)] = inst_24461);

(statearr_24537_24596[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (27))){
var state_24534__$1 = state_24534;
var statearr_24538_24597 = state_24534__$1;
(statearr_24538_24597[(2)] = null);

(statearr_24538_24597[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (1))){
var inst_24436 = (state_24534[(8)]);
var inst_24436__$1 = calc_state.call(null);
var inst_24438 = (inst_24436__$1 == null);
var inst_24439 = cljs.core.not.call(null,inst_24438);
var state_24534__$1 = (function (){var statearr_24539 = state_24534;
(statearr_24539[(8)] = inst_24436__$1);

return statearr_24539;
})();
if(inst_24439){
var statearr_24540_24598 = state_24534__$1;
(statearr_24540_24598[(1)] = (2));

} else {
var statearr_24541_24599 = state_24534__$1;
(statearr_24541_24599[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (24))){
var inst_24494 = (state_24534[(9)]);
var inst_24485 = (state_24534[(10)]);
var inst_24508 = (state_24534[(11)]);
var inst_24508__$1 = inst_24485.call(null,inst_24494);
var state_24534__$1 = (function (){var statearr_24542 = state_24534;
(statearr_24542[(11)] = inst_24508__$1);

return statearr_24542;
})();
if(cljs.core.truth_(inst_24508__$1)){
var statearr_24543_24600 = state_24534__$1;
(statearr_24543_24600[(1)] = (29));

} else {
var statearr_24544_24601 = state_24534__$1;
(statearr_24544_24601[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (4))){
var inst_24452 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
if(cljs.core.truth_(inst_24452)){
var statearr_24545_24602 = state_24534__$1;
(statearr_24545_24602[(1)] = (8));

} else {
var statearr_24546_24603 = state_24534__$1;
(statearr_24546_24603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (15))){
var inst_24479 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
if(cljs.core.truth_(inst_24479)){
var statearr_24547_24604 = state_24534__$1;
(statearr_24547_24604[(1)] = (19));

} else {
var statearr_24548_24605 = state_24534__$1;
(statearr_24548_24605[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (21))){
var inst_24484 = (state_24534[(12)]);
var inst_24484__$1 = (state_24534[(2)]);
var inst_24485 = cljs.core.get.call(null,inst_24484__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24486 = cljs.core.get.call(null,inst_24484__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24487 = cljs.core.get.call(null,inst_24484__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24534__$1 = (function (){var statearr_24549 = state_24534;
(statearr_24549[(12)] = inst_24484__$1);

(statearr_24549[(13)] = inst_24486);

(statearr_24549[(10)] = inst_24485);

return statearr_24549;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24534__$1,(22),inst_24487);
} else {
if((state_val_24535 === (31))){
var inst_24516 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
if(cljs.core.truth_(inst_24516)){
var statearr_24550_24606 = state_24534__$1;
(statearr_24550_24606[(1)] = (32));

} else {
var statearr_24551_24607 = state_24534__$1;
(statearr_24551_24607[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (32))){
var inst_24493 = (state_24534[(14)]);
var state_24534__$1 = state_24534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24534__$1,(35),out,inst_24493);
} else {
if((state_val_24535 === (33))){
var inst_24484 = (state_24534[(12)]);
var inst_24461 = inst_24484;
var state_24534__$1 = (function (){var statearr_24552 = state_24534;
(statearr_24552[(7)] = inst_24461);

return statearr_24552;
})();
var statearr_24553_24608 = state_24534__$1;
(statearr_24553_24608[(2)] = null);

(statearr_24553_24608[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (13))){
var inst_24461 = (state_24534[(7)]);
var inst_24468 = inst_24461.cljs$lang$protocol_mask$partition0$;
var inst_24469 = (inst_24468 & (64));
var inst_24470 = inst_24461.cljs$core$ISeq$;
var inst_24471 = (cljs.core.PROTOCOL_SENTINEL === inst_24470);
var inst_24472 = ((inst_24469) || (inst_24471));
var state_24534__$1 = state_24534;
if(cljs.core.truth_(inst_24472)){
var statearr_24554_24609 = state_24534__$1;
(statearr_24554_24609[(1)] = (16));

} else {
var statearr_24555_24610 = state_24534__$1;
(statearr_24555_24610[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (22))){
var inst_24494 = (state_24534[(9)]);
var inst_24493 = (state_24534[(14)]);
var inst_24492 = (state_24534[(2)]);
var inst_24493__$1 = cljs.core.nth.call(null,inst_24492,(0),null);
var inst_24494__$1 = cljs.core.nth.call(null,inst_24492,(1),null);
var inst_24495 = (inst_24493__$1 == null);
var inst_24496 = cljs.core._EQ_.call(null,inst_24494__$1,change);
var inst_24497 = ((inst_24495) || (inst_24496));
var state_24534__$1 = (function (){var statearr_24556 = state_24534;
(statearr_24556[(9)] = inst_24494__$1);

(statearr_24556[(14)] = inst_24493__$1);

return statearr_24556;
})();
if(cljs.core.truth_(inst_24497)){
var statearr_24557_24611 = state_24534__$1;
(statearr_24557_24611[(1)] = (23));

} else {
var statearr_24558_24612 = state_24534__$1;
(statearr_24558_24612[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (36))){
var inst_24484 = (state_24534[(12)]);
var inst_24461 = inst_24484;
var state_24534__$1 = (function (){var statearr_24559 = state_24534;
(statearr_24559[(7)] = inst_24461);

return statearr_24559;
})();
var statearr_24560_24613 = state_24534__$1;
(statearr_24560_24613[(2)] = null);

(statearr_24560_24613[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (29))){
var inst_24508 = (state_24534[(11)]);
var state_24534__$1 = state_24534;
var statearr_24561_24614 = state_24534__$1;
(statearr_24561_24614[(2)] = inst_24508);

(statearr_24561_24614[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (6))){
var state_24534__$1 = state_24534;
var statearr_24562_24615 = state_24534__$1;
(statearr_24562_24615[(2)] = false);

(statearr_24562_24615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (28))){
var inst_24504 = (state_24534[(2)]);
var inst_24505 = calc_state.call(null);
var inst_24461 = inst_24505;
var state_24534__$1 = (function (){var statearr_24563 = state_24534;
(statearr_24563[(15)] = inst_24504);

(statearr_24563[(7)] = inst_24461);

return statearr_24563;
})();
var statearr_24564_24616 = state_24534__$1;
(statearr_24564_24616[(2)] = null);

(statearr_24564_24616[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (25))){
var inst_24530 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
var statearr_24565_24617 = state_24534__$1;
(statearr_24565_24617[(2)] = inst_24530);

(statearr_24565_24617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (34))){
var inst_24528 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
var statearr_24566_24618 = state_24534__$1;
(statearr_24566_24618[(2)] = inst_24528);

(statearr_24566_24618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (17))){
var state_24534__$1 = state_24534;
var statearr_24567_24619 = state_24534__$1;
(statearr_24567_24619[(2)] = false);

(statearr_24567_24619[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (3))){
var state_24534__$1 = state_24534;
var statearr_24568_24620 = state_24534__$1;
(statearr_24568_24620[(2)] = false);

(statearr_24568_24620[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (12))){
var inst_24532 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24534__$1,inst_24532);
} else {
if((state_val_24535 === (2))){
var inst_24436 = (state_24534[(8)]);
var inst_24441 = inst_24436.cljs$lang$protocol_mask$partition0$;
var inst_24442 = (inst_24441 & (64));
var inst_24443 = inst_24436.cljs$core$ISeq$;
var inst_24444 = (cljs.core.PROTOCOL_SENTINEL === inst_24443);
var inst_24445 = ((inst_24442) || (inst_24444));
var state_24534__$1 = state_24534;
if(cljs.core.truth_(inst_24445)){
var statearr_24569_24621 = state_24534__$1;
(statearr_24569_24621[(1)] = (5));

} else {
var statearr_24570_24622 = state_24534__$1;
(statearr_24570_24622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (23))){
var inst_24493 = (state_24534[(14)]);
var inst_24499 = (inst_24493 == null);
var state_24534__$1 = state_24534;
if(cljs.core.truth_(inst_24499)){
var statearr_24571_24623 = state_24534__$1;
(statearr_24571_24623[(1)] = (26));

} else {
var statearr_24572_24624 = state_24534__$1;
(statearr_24572_24624[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (35))){
var inst_24519 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
if(cljs.core.truth_(inst_24519)){
var statearr_24573_24625 = state_24534__$1;
(statearr_24573_24625[(1)] = (36));

} else {
var statearr_24574_24626 = state_24534__$1;
(statearr_24574_24626[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (19))){
var inst_24461 = (state_24534[(7)]);
var inst_24481 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24461);
var state_24534__$1 = state_24534;
var statearr_24575_24627 = state_24534__$1;
(statearr_24575_24627[(2)] = inst_24481);

(statearr_24575_24627[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (11))){
var inst_24461 = (state_24534[(7)]);
var inst_24465 = (inst_24461 == null);
var inst_24466 = cljs.core.not.call(null,inst_24465);
var state_24534__$1 = state_24534;
if(inst_24466){
var statearr_24576_24628 = state_24534__$1;
(statearr_24576_24628[(1)] = (13));

} else {
var statearr_24577_24629 = state_24534__$1;
(statearr_24577_24629[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (9))){
var inst_24436 = (state_24534[(8)]);
var state_24534__$1 = state_24534;
var statearr_24578_24630 = state_24534__$1;
(statearr_24578_24630[(2)] = inst_24436);

(statearr_24578_24630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (5))){
var state_24534__$1 = state_24534;
var statearr_24579_24631 = state_24534__$1;
(statearr_24579_24631[(2)] = true);

(statearr_24579_24631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (14))){
var state_24534__$1 = state_24534;
var statearr_24580_24632 = state_24534__$1;
(statearr_24580_24632[(2)] = false);

(statearr_24580_24632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (26))){
var inst_24494 = (state_24534[(9)]);
var inst_24501 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24494);
var state_24534__$1 = state_24534;
var statearr_24581_24633 = state_24534__$1;
(statearr_24581_24633[(2)] = inst_24501);

(statearr_24581_24633[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (16))){
var state_24534__$1 = state_24534;
var statearr_24582_24634 = state_24534__$1;
(statearr_24582_24634[(2)] = true);

(statearr_24582_24634[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (38))){
var inst_24524 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
var statearr_24583_24635 = state_24534__$1;
(statearr_24583_24635[(2)] = inst_24524);

(statearr_24583_24635[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (30))){
var inst_24494 = (state_24534[(9)]);
var inst_24486 = (state_24534[(13)]);
var inst_24485 = (state_24534[(10)]);
var inst_24511 = cljs.core.empty_QMARK_.call(null,inst_24485);
var inst_24512 = inst_24486.call(null,inst_24494);
var inst_24513 = cljs.core.not.call(null,inst_24512);
var inst_24514 = ((inst_24511) && (inst_24513));
var state_24534__$1 = state_24534;
var statearr_24584_24636 = state_24534__$1;
(statearr_24584_24636[(2)] = inst_24514);

(statearr_24584_24636[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (10))){
var inst_24436 = (state_24534[(8)]);
var inst_24457 = (state_24534[(2)]);
var inst_24458 = cljs.core.get.call(null,inst_24457,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24459 = cljs.core.get.call(null,inst_24457,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24460 = cljs.core.get.call(null,inst_24457,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24461 = inst_24436;
var state_24534__$1 = (function (){var statearr_24585 = state_24534;
(statearr_24585[(16)] = inst_24459);

(statearr_24585[(17)] = inst_24458);

(statearr_24585[(7)] = inst_24461);

(statearr_24585[(18)] = inst_24460);

return statearr_24585;
})();
var statearr_24586_24637 = state_24534__$1;
(statearr_24586_24637[(2)] = null);

(statearr_24586_24637[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (18))){
var inst_24476 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
var statearr_24587_24638 = state_24534__$1;
(statearr_24587_24638[(2)] = inst_24476);

(statearr_24587_24638[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (37))){
var state_24534__$1 = state_24534;
var statearr_24588_24639 = state_24534__$1;
(statearr_24588_24639[(2)] = null);

(statearr_24588_24639[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (8))){
var inst_24436 = (state_24534[(8)]);
var inst_24454 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24436);
var state_24534__$1 = state_24534;
var statearr_24589_24640 = state_24534__$1;
(statearr_24589_24640[(2)] = inst_24454);

(statearr_24589_24640[(1)] = (10));


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
});})(c__23535__auto___24594,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23475__auto__,c__23535__auto___24594,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23476__auto__ = null;
var cljs$core$async$mix_$_state_machine__23476__auto____0 = (function (){
var statearr_24590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24590[(0)] = cljs$core$async$mix_$_state_machine__23476__auto__);

(statearr_24590[(1)] = (1));

return statearr_24590;
});
var cljs$core$async$mix_$_state_machine__23476__auto____1 = (function (state_24534){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_24534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e24591){if((e24591 instanceof Object)){
var ex__23479__auto__ = e24591;
var statearr_24592_24641 = state_24534;
(statearr_24592_24641[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24642 = state_24534;
state_24534 = G__24642;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23476__auto__ = function(state_24534){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23476__auto____1.call(this,state_24534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23476__auto____0;
cljs$core$async$mix_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23476__auto____1;
return cljs$core$async$mix_$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto___24594,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23537__auto__ = (function (){var statearr_24593 = f__23536__auto__.call(null);
(statearr_24593[(6)] = c__23535__auto___24594);

return statearr_24593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto___24594,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24644 = arguments.length;
switch (G__24644) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24648 = arguments.length;
switch (G__24648) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__24646_SHARP_){
if(cljs.core.truth_(p1__24646_SHARP_.call(null,topic))){
return p1__24646_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24646_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24649 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24649 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24650){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24650 = meta24650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24651,meta24650__$1){
var self__ = this;
var _24651__$1 = this;
return (new cljs.core.async.t_cljs$core$async24649(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24650__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24651){
var self__ = this;
var _24651__$1 = this;
return self__.meta24650;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24649.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24649.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24649.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24649.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24649.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24649.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24649.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24649.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24650","meta24650",811234369,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24649.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24649";

cljs.core.async.t_cljs$core$async24649.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24649");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24649.
 */
cljs.core.async.__GT_t_cljs$core$async24649 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24649(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24650){
return (new cljs.core.async.t_cljs$core$async24649(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24650));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24649(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23535__auto___24769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto___24769,mults,ensure_mult,p){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto___24769,mults,ensure_mult,p){
return (function (state_24723){
var state_val_24724 = (state_24723[(1)]);
if((state_val_24724 === (7))){
var inst_24719 = (state_24723[(2)]);
var state_24723__$1 = state_24723;
var statearr_24725_24770 = state_24723__$1;
(statearr_24725_24770[(2)] = inst_24719);

(statearr_24725_24770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (20))){
var state_24723__$1 = state_24723;
var statearr_24726_24771 = state_24723__$1;
(statearr_24726_24771[(2)] = null);

(statearr_24726_24771[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (1))){
var state_24723__$1 = state_24723;
var statearr_24727_24772 = state_24723__$1;
(statearr_24727_24772[(2)] = null);

(statearr_24727_24772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (24))){
var inst_24702 = (state_24723[(7)]);
var inst_24711 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24702);
var state_24723__$1 = state_24723;
var statearr_24728_24773 = state_24723__$1;
(statearr_24728_24773[(2)] = inst_24711);

(statearr_24728_24773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (4))){
var inst_24654 = (state_24723[(8)]);
var inst_24654__$1 = (state_24723[(2)]);
var inst_24655 = (inst_24654__$1 == null);
var state_24723__$1 = (function (){var statearr_24729 = state_24723;
(statearr_24729[(8)] = inst_24654__$1);

return statearr_24729;
})();
if(cljs.core.truth_(inst_24655)){
var statearr_24730_24774 = state_24723__$1;
(statearr_24730_24774[(1)] = (5));

} else {
var statearr_24731_24775 = state_24723__$1;
(statearr_24731_24775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (15))){
var inst_24696 = (state_24723[(2)]);
var state_24723__$1 = state_24723;
var statearr_24732_24776 = state_24723__$1;
(statearr_24732_24776[(2)] = inst_24696);

(statearr_24732_24776[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (21))){
var inst_24716 = (state_24723[(2)]);
var state_24723__$1 = (function (){var statearr_24733 = state_24723;
(statearr_24733[(9)] = inst_24716);

return statearr_24733;
})();
var statearr_24734_24777 = state_24723__$1;
(statearr_24734_24777[(2)] = null);

(statearr_24734_24777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (13))){
var inst_24678 = (state_24723[(10)]);
var inst_24680 = cljs.core.chunked_seq_QMARK_.call(null,inst_24678);
var state_24723__$1 = state_24723;
if(inst_24680){
var statearr_24735_24778 = state_24723__$1;
(statearr_24735_24778[(1)] = (16));

} else {
var statearr_24736_24779 = state_24723__$1;
(statearr_24736_24779[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (22))){
var inst_24708 = (state_24723[(2)]);
var state_24723__$1 = state_24723;
if(cljs.core.truth_(inst_24708)){
var statearr_24737_24780 = state_24723__$1;
(statearr_24737_24780[(1)] = (23));

} else {
var statearr_24738_24781 = state_24723__$1;
(statearr_24738_24781[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (6))){
var inst_24654 = (state_24723[(8)]);
var inst_24704 = (state_24723[(11)]);
var inst_24702 = (state_24723[(7)]);
var inst_24702__$1 = topic_fn.call(null,inst_24654);
var inst_24703 = cljs.core.deref.call(null,mults);
var inst_24704__$1 = cljs.core.get.call(null,inst_24703,inst_24702__$1);
var state_24723__$1 = (function (){var statearr_24739 = state_24723;
(statearr_24739[(11)] = inst_24704__$1);

(statearr_24739[(7)] = inst_24702__$1);

return statearr_24739;
})();
if(cljs.core.truth_(inst_24704__$1)){
var statearr_24740_24782 = state_24723__$1;
(statearr_24740_24782[(1)] = (19));

} else {
var statearr_24741_24783 = state_24723__$1;
(statearr_24741_24783[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (25))){
var inst_24713 = (state_24723[(2)]);
var state_24723__$1 = state_24723;
var statearr_24742_24784 = state_24723__$1;
(statearr_24742_24784[(2)] = inst_24713);

(statearr_24742_24784[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (17))){
var inst_24678 = (state_24723[(10)]);
var inst_24687 = cljs.core.first.call(null,inst_24678);
var inst_24688 = cljs.core.async.muxch_STAR_.call(null,inst_24687);
var inst_24689 = cljs.core.async.close_BANG_.call(null,inst_24688);
var inst_24690 = cljs.core.next.call(null,inst_24678);
var inst_24664 = inst_24690;
var inst_24665 = null;
var inst_24666 = (0);
var inst_24667 = (0);
var state_24723__$1 = (function (){var statearr_24743 = state_24723;
(statearr_24743[(12)] = inst_24689);

(statearr_24743[(13)] = inst_24667);

(statearr_24743[(14)] = inst_24664);

(statearr_24743[(15)] = inst_24665);

(statearr_24743[(16)] = inst_24666);

return statearr_24743;
})();
var statearr_24744_24785 = state_24723__$1;
(statearr_24744_24785[(2)] = null);

(statearr_24744_24785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (3))){
var inst_24721 = (state_24723[(2)]);
var state_24723__$1 = state_24723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24723__$1,inst_24721);
} else {
if((state_val_24724 === (12))){
var inst_24698 = (state_24723[(2)]);
var state_24723__$1 = state_24723;
var statearr_24745_24786 = state_24723__$1;
(statearr_24745_24786[(2)] = inst_24698);

(statearr_24745_24786[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (2))){
var state_24723__$1 = state_24723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24723__$1,(4),ch);
} else {
if((state_val_24724 === (23))){
var state_24723__$1 = state_24723;
var statearr_24746_24787 = state_24723__$1;
(statearr_24746_24787[(2)] = null);

(statearr_24746_24787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (19))){
var inst_24654 = (state_24723[(8)]);
var inst_24704 = (state_24723[(11)]);
var inst_24706 = cljs.core.async.muxch_STAR_.call(null,inst_24704);
var state_24723__$1 = state_24723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24723__$1,(22),inst_24706,inst_24654);
} else {
if((state_val_24724 === (11))){
var inst_24678 = (state_24723[(10)]);
var inst_24664 = (state_24723[(14)]);
var inst_24678__$1 = cljs.core.seq.call(null,inst_24664);
var state_24723__$1 = (function (){var statearr_24747 = state_24723;
(statearr_24747[(10)] = inst_24678__$1);

return statearr_24747;
})();
if(inst_24678__$1){
var statearr_24748_24788 = state_24723__$1;
(statearr_24748_24788[(1)] = (13));

} else {
var statearr_24749_24789 = state_24723__$1;
(statearr_24749_24789[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (9))){
var inst_24700 = (state_24723[(2)]);
var state_24723__$1 = state_24723;
var statearr_24750_24790 = state_24723__$1;
(statearr_24750_24790[(2)] = inst_24700);

(statearr_24750_24790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (5))){
var inst_24661 = cljs.core.deref.call(null,mults);
var inst_24662 = cljs.core.vals.call(null,inst_24661);
var inst_24663 = cljs.core.seq.call(null,inst_24662);
var inst_24664 = inst_24663;
var inst_24665 = null;
var inst_24666 = (0);
var inst_24667 = (0);
var state_24723__$1 = (function (){var statearr_24751 = state_24723;
(statearr_24751[(13)] = inst_24667);

(statearr_24751[(14)] = inst_24664);

(statearr_24751[(15)] = inst_24665);

(statearr_24751[(16)] = inst_24666);

return statearr_24751;
})();
var statearr_24752_24791 = state_24723__$1;
(statearr_24752_24791[(2)] = null);

(statearr_24752_24791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (14))){
var state_24723__$1 = state_24723;
var statearr_24756_24792 = state_24723__$1;
(statearr_24756_24792[(2)] = null);

(statearr_24756_24792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (16))){
var inst_24678 = (state_24723[(10)]);
var inst_24682 = cljs.core.chunk_first.call(null,inst_24678);
var inst_24683 = cljs.core.chunk_rest.call(null,inst_24678);
var inst_24684 = cljs.core.count.call(null,inst_24682);
var inst_24664 = inst_24683;
var inst_24665 = inst_24682;
var inst_24666 = inst_24684;
var inst_24667 = (0);
var state_24723__$1 = (function (){var statearr_24757 = state_24723;
(statearr_24757[(13)] = inst_24667);

(statearr_24757[(14)] = inst_24664);

(statearr_24757[(15)] = inst_24665);

(statearr_24757[(16)] = inst_24666);

return statearr_24757;
})();
var statearr_24758_24793 = state_24723__$1;
(statearr_24758_24793[(2)] = null);

(statearr_24758_24793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (10))){
var inst_24667 = (state_24723[(13)]);
var inst_24664 = (state_24723[(14)]);
var inst_24665 = (state_24723[(15)]);
var inst_24666 = (state_24723[(16)]);
var inst_24672 = cljs.core._nth.call(null,inst_24665,inst_24667);
var inst_24673 = cljs.core.async.muxch_STAR_.call(null,inst_24672);
var inst_24674 = cljs.core.async.close_BANG_.call(null,inst_24673);
var inst_24675 = (inst_24667 + (1));
var tmp24753 = inst_24664;
var tmp24754 = inst_24665;
var tmp24755 = inst_24666;
var inst_24664__$1 = tmp24753;
var inst_24665__$1 = tmp24754;
var inst_24666__$1 = tmp24755;
var inst_24667__$1 = inst_24675;
var state_24723__$1 = (function (){var statearr_24759 = state_24723;
(statearr_24759[(13)] = inst_24667__$1);

(statearr_24759[(14)] = inst_24664__$1);

(statearr_24759[(17)] = inst_24674);

(statearr_24759[(15)] = inst_24665__$1);

(statearr_24759[(16)] = inst_24666__$1);

return statearr_24759;
})();
var statearr_24760_24794 = state_24723__$1;
(statearr_24760_24794[(2)] = null);

(statearr_24760_24794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (18))){
var inst_24693 = (state_24723[(2)]);
var state_24723__$1 = state_24723;
var statearr_24761_24795 = state_24723__$1;
(statearr_24761_24795[(2)] = inst_24693);

(statearr_24761_24795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24724 === (8))){
var inst_24667 = (state_24723[(13)]);
var inst_24666 = (state_24723[(16)]);
var inst_24669 = (inst_24667 < inst_24666);
var inst_24670 = inst_24669;
var state_24723__$1 = state_24723;
if(cljs.core.truth_(inst_24670)){
var statearr_24762_24796 = state_24723__$1;
(statearr_24762_24796[(1)] = (10));

} else {
var statearr_24763_24797 = state_24723__$1;
(statearr_24763_24797[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__23535__auto___24769,mults,ensure_mult,p))
;
return ((function (switch__23475__auto__,c__23535__auto___24769,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_24764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24764[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_24764[(1)] = (1));

return statearr_24764;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_24723){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_24723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e24765){if((e24765 instanceof Object)){
var ex__23479__auto__ = e24765;
var statearr_24766_24798 = state_24723;
(statearr_24766_24798[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24799 = state_24723;
state_24723 = G__24799;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_24723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_24723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto___24769,mults,ensure_mult,p))
})();
var state__23537__auto__ = (function (){var statearr_24767 = f__23536__auto__.call(null);
(statearr_24767[(6)] = c__23535__auto___24769);

return statearr_24767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto___24769,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24801 = arguments.length;
switch (G__24801) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24804 = arguments.length;
switch (G__24804) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24807 = arguments.length;
switch (G__24807) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23535__auto___24874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto___24874,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto___24874,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24846){
var state_val_24847 = (state_24846[(1)]);
if((state_val_24847 === (7))){
var state_24846__$1 = state_24846;
var statearr_24848_24875 = state_24846__$1;
(statearr_24848_24875[(2)] = null);

(statearr_24848_24875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24847 === (1))){
var state_24846__$1 = state_24846;
var statearr_24849_24876 = state_24846__$1;
(statearr_24849_24876[(2)] = null);

(statearr_24849_24876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24847 === (4))){
var inst_24810 = (state_24846[(7)]);
var inst_24812 = (inst_24810 < cnt);
var state_24846__$1 = state_24846;
if(cljs.core.truth_(inst_24812)){
var statearr_24850_24877 = state_24846__$1;
(statearr_24850_24877[(1)] = (6));

} else {
var statearr_24851_24878 = state_24846__$1;
(statearr_24851_24878[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24847 === (15))){
var inst_24842 = (state_24846[(2)]);
var state_24846__$1 = state_24846;
var statearr_24852_24879 = state_24846__$1;
(statearr_24852_24879[(2)] = inst_24842);

(statearr_24852_24879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24847 === (13))){
var inst_24835 = cljs.core.async.close_BANG_.call(null,out);
var state_24846__$1 = state_24846;
var statearr_24853_24880 = state_24846__$1;
(statearr_24853_24880[(2)] = inst_24835);

(statearr_24853_24880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24847 === (6))){
var state_24846__$1 = state_24846;
var statearr_24854_24881 = state_24846__$1;
(statearr_24854_24881[(2)] = null);

(statearr_24854_24881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24847 === (3))){
var inst_24844 = (state_24846[(2)]);
var state_24846__$1 = state_24846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24846__$1,inst_24844);
} else {
if((state_val_24847 === (12))){
var inst_24832 = (state_24846[(8)]);
var inst_24832__$1 = (state_24846[(2)]);
var inst_24833 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24832__$1);
var state_24846__$1 = (function (){var statearr_24855 = state_24846;
(statearr_24855[(8)] = inst_24832__$1);

return statearr_24855;
})();
if(cljs.core.truth_(inst_24833)){
var statearr_24856_24882 = state_24846__$1;
(statearr_24856_24882[(1)] = (13));

} else {
var statearr_24857_24883 = state_24846__$1;
(statearr_24857_24883[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24847 === (2))){
var inst_24809 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24810 = (0);
var state_24846__$1 = (function (){var statearr_24858 = state_24846;
(statearr_24858[(7)] = inst_24810);

(statearr_24858[(9)] = inst_24809);

return statearr_24858;
})();
var statearr_24859_24884 = state_24846__$1;
(statearr_24859_24884[(2)] = null);

(statearr_24859_24884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24847 === (11))){
var inst_24810 = (state_24846[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24846,(10),Object,null,(9));
var inst_24819 = chs__$1.call(null,inst_24810);
var inst_24820 = done.call(null,inst_24810);
var inst_24821 = cljs.core.async.take_BANG_.call(null,inst_24819,inst_24820);
var state_24846__$1 = state_24846;
var statearr_24860_24885 = state_24846__$1;
(statearr_24860_24885[(2)] = inst_24821);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24846__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24847 === (9))){
var inst_24810 = (state_24846[(7)]);
var inst_24823 = (state_24846[(2)]);
var inst_24824 = (inst_24810 + (1));
var inst_24810__$1 = inst_24824;
var state_24846__$1 = (function (){var statearr_24861 = state_24846;
(statearr_24861[(7)] = inst_24810__$1);

(statearr_24861[(10)] = inst_24823);

return statearr_24861;
})();
var statearr_24862_24886 = state_24846__$1;
(statearr_24862_24886[(2)] = null);

(statearr_24862_24886[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24847 === (5))){
var inst_24830 = (state_24846[(2)]);
var state_24846__$1 = (function (){var statearr_24863 = state_24846;
(statearr_24863[(11)] = inst_24830);

return statearr_24863;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24846__$1,(12),dchan);
} else {
if((state_val_24847 === (14))){
var inst_24832 = (state_24846[(8)]);
var inst_24837 = cljs.core.apply.call(null,f,inst_24832);
var state_24846__$1 = state_24846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24846__$1,(16),out,inst_24837);
} else {
if((state_val_24847 === (16))){
var inst_24839 = (state_24846[(2)]);
var state_24846__$1 = (function (){var statearr_24864 = state_24846;
(statearr_24864[(12)] = inst_24839);

return statearr_24864;
})();
var statearr_24865_24887 = state_24846__$1;
(statearr_24865_24887[(2)] = null);

(statearr_24865_24887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24847 === (10))){
var inst_24814 = (state_24846[(2)]);
var inst_24815 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24846__$1 = (function (){var statearr_24866 = state_24846;
(statearr_24866[(13)] = inst_24814);

return statearr_24866;
})();
var statearr_24867_24888 = state_24846__$1;
(statearr_24867_24888[(2)] = inst_24815);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24846__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24847 === (8))){
var inst_24828 = (state_24846[(2)]);
var state_24846__$1 = state_24846;
var statearr_24868_24889 = state_24846__$1;
(statearr_24868_24889[(2)] = inst_24828);

(statearr_24868_24889[(1)] = (5));


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
});})(c__23535__auto___24874,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23475__auto__,c__23535__auto___24874,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_24869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24869[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_24869[(1)] = (1));

return statearr_24869;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_24846){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_24846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e24870){if((e24870 instanceof Object)){
var ex__23479__auto__ = e24870;
var statearr_24871_24890 = state_24846;
(statearr_24871_24890[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24891 = state_24846;
state_24846 = G__24891;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_24846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_24846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto___24874,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23537__auto__ = (function (){var statearr_24872 = f__23536__auto__.call(null);
(statearr_24872[(6)] = c__23535__auto___24874);

return statearr_24872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto___24874,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24894 = arguments.length;
switch (G__24894) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23535__auto___24948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto___24948,out){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto___24948,out){
return (function (state_24926){
var state_val_24927 = (state_24926[(1)]);
if((state_val_24927 === (7))){
var inst_24906 = (state_24926[(7)]);
var inst_24905 = (state_24926[(8)]);
var inst_24905__$1 = (state_24926[(2)]);
var inst_24906__$1 = cljs.core.nth.call(null,inst_24905__$1,(0),null);
var inst_24907 = cljs.core.nth.call(null,inst_24905__$1,(1),null);
var inst_24908 = (inst_24906__$1 == null);
var state_24926__$1 = (function (){var statearr_24928 = state_24926;
(statearr_24928[(7)] = inst_24906__$1);

(statearr_24928[(8)] = inst_24905__$1);

(statearr_24928[(9)] = inst_24907);

return statearr_24928;
})();
if(cljs.core.truth_(inst_24908)){
var statearr_24929_24949 = state_24926__$1;
(statearr_24929_24949[(1)] = (8));

} else {
var statearr_24930_24950 = state_24926__$1;
(statearr_24930_24950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (1))){
var inst_24895 = cljs.core.vec.call(null,chs);
var inst_24896 = inst_24895;
var state_24926__$1 = (function (){var statearr_24931 = state_24926;
(statearr_24931[(10)] = inst_24896);

return statearr_24931;
})();
var statearr_24932_24951 = state_24926__$1;
(statearr_24932_24951[(2)] = null);

(statearr_24932_24951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (4))){
var inst_24896 = (state_24926[(10)]);
var state_24926__$1 = state_24926;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24926__$1,(7),inst_24896);
} else {
if((state_val_24927 === (6))){
var inst_24922 = (state_24926[(2)]);
var state_24926__$1 = state_24926;
var statearr_24933_24952 = state_24926__$1;
(statearr_24933_24952[(2)] = inst_24922);

(statearr_24933_24952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (3))){
var inst_24924 = (state_24926[(2)]);
var state_24926__$1 = state_24926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24926__$1,inst_24924);
} else {
if((state_val_24927 === (2))){
var inst_24896 = (state_24926[(10)]);
var inst_24898 = cljs.core.count.call(null,inst_24896);
var inst_24899 = (inst_24898 > (0));
var state_24926__$1 = state_24926;
if(cljs.core.truth_(inst_24899)){
var statearr_24935_24953 = state_24926__$1;
(statearr_24935_24953[(1)] = (4));

} else {
var statearr_24936_24954 = state_24926__$1;
(statearr_24936_24954[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (11))){
var inst_24896 = (state_24926[(10)]);
var inst_24915 = (state_24926[(2)]);
var tmp24934 = inst_24896;
var inst_24896__$1 = tmp24934;
var state_24926__$1 = (function (){var statearr_24937 = state_24926;
(statearr_24937[(10)] = inst_24896__$1);

(statearr_24937[(11)] = inst_24915);

return statearr_24937;
})();
var statearr_24938_24955 = state_24926__$1;
(statearr_24938_24955[(2)] = null);

(statearr_24938_24955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (9))){
var inst_24906 = (state_24926[(7)]);
var state_24926__$1 = state_24926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24926__$1,(11),out,inst_24906);
} else {
if((state_val_24927 === (5))){
var inst_24920 = cljs.core.async.close_BANG_.call(null,out);
var state_24926__$1 = state_24926;
var statearr_24939_24956 = state_24926__$1;
(statearr_24939_24956[(2)] = inst_24920);

(statearr_24939_24956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (10))){
var inst_24918 = (state_24926[(2)]);
var state_24926__$1 = state_24926;
var statearr_24940_24957 = state_24926__$1;
(statearr_24940_24957[(2)] = inst_24918);

(statearr_24940_24957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (8))){
var inst_24906 = (state_24926[(7)]);
var inst_24896 = (state_24926[(10)]);
var inst_24905 = (state_24926[(8)]);
var inst_24907 = (state_24926[(9)]);
var inst_24910 = (function (){var cs = inst_24896;
var vec__24901 = inst_24905;
var v = inst_24906;
var c = inst_24907;
return ((function (cs,vec__24901,v,c,inst_24906,inst_24896,inst_24905,inst_24907,state_val_24927,c__23535__auto___24948,out){
return (function (p1__24892_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24892_SHARP_);
});
;})(cs,vec__24901,v,c,inst_24906,inst_24896,inst_24905,inst_24907,state_val_24927,c__23535__auto___24948,out))
})();
var inst_24911 = cljs.core.filterv.call(null,inst_24910,inst_24896);
var inst_24896__$1 = inst_24911;
var state_24926__$1 = (function (){var statearr_24941 = state_24926;
(statearr_24941[(10)] = inst_24896__$1);

return statearr_24941;
})();
var statearr_24942_24958 = state_24926__$1;
(statearr_24942_24958[(2)] = null);

(statearr_24942_24958[(1)] = (2));


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
});})(c__23535__auto___24948,out))
;
return ((function (switch__23475__auto__,c__23535__auto___24948,out){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_24943 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24943[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_24943[(1)] = (1));

return statearr_24943;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_24926){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_24926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e24944){if((e24944 instanceof Object)){
var ex__23479__auto__ = e24944;
var statearr_24945_24959 = state_24926;
(statearr_24945_24959[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24960 = state_24926;
state_24926 = G__24960;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_24926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_24926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto___24948,out))
})();
var state__23537__auto__ = (function (){var statearr_24946 = f__23536__auto__.call(null);
(statearr_24946[(6)] = c__23535__auto___24948);

return statearr_24946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto___24948,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24962 = arguments.length;
switch (G__24962) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23535__auto___25007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto___25007,out){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto___25007,out){
return (function (state_24986){
var state_val_24987 = (state_24986[(1)]);
if((state_val_24987 === (7))){
var inst_24968 = (state_24986[(7)]);
var inst_24968__$1 = (state_24986[(2)]);
var inst_24969 = (inst_24968__$1 == null);
var inst_24970 = cljs.core.not.call(null,inst_24969);
var state_24986__$1 = (function (){var statearr_24988 = state_24986;
(statearr_24988[(7)] = inst_24968__$1);

return statearr_24988;
})();
if(inst_24970){
var statearr_24989_25008 = state_24986__$1;
(statearr_24989_25008[(1)] = (8));

} else {
var statearr_24990_25009 = state_24986__$1;
(statearr_24990_25009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (1))){
var inst_24963 = (0);
var state_24986__$1 = (function (){var statearr_24991 = state_24986;
(statearr_24991[(8)] = inst_24963);

return statearr_24991;
})();
var statearr_24992_25010 = state_24986__$1;
(statearr_24992_25010[(2)] = null);

(statearr_24992_25010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (4))){
var state_24986__$1 = state_24986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24986__$1,(7),ch);
} else {
if((state_val_24987 === (6))){
var inst_24981 = (state_24986[(2)]);
var state_24986__$1 = state_24986;
var statearr_24993_25011 = state_24986__$1;
(statearr_24993_25011[(2)] = inst_24981);

(statearr_24993_25011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (3))){
var inst_24983 = (state_24986[(2)]);
var inst_24984 = cljs.core.async.close_BANG_.call(null,out);
var state_24986__$1 = (function (){var statearr_24994 = state_24986;
(statearr_24994[(9)] = inst_24983);

return statearr_24994;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24986__$1,inst_24984);
} else {
if((state_val_24987 === (2))){
var inst_24963 = (state_24986[(8)]);
var inst_24965 = (inst_24963 < n);
var state_24986__$1 = state_24986;
if(cljs.core.truth_(inst_24965)){
var statearr_24995_25012 = state_24986__$1;
(statearr_24995_25012[(1)] = (4));

} else {
var statearr_24996_25013 = state_24986__$1;
(statearr_24996_25013[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (11))){
var inst_24963 = (state_24986[(8)]);
var inst_24973 = (state_24986[(2)]);
var inst_24974 = (inst_24963 + (1));
var inst_24963__$1 = inst_24974;
var state_24986__$1 = (function (){var statearr_24997 = state_24986;
(statearr_24997[(8)] = inst_24963__$1);

(statearr_24997[(10)] = inst_24973);

return statearr_24997;
})();
var statearr_24998_25014 = state_24986__$1;
(statearr_24998_25014[(2)] = null);

(statearr_24998_25014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (9))){
var state_24986__$1 = state_24986;
var statearr_24999_25015 = state_24986__$1;
(statearr_24999_25015[(2)] = null);

(statearr_24999_25015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (5))){
var state_24986__$1 = state_24986;
var statearr_25000_25016 = state_24986__$1;
(statearr_25000_25016[(2)] = null);

(statearr_25000_25016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (10))){
var inst_24978 = (state_24986[(2)]);
var state_24986__$1 = state_24986;
var statearr_25001_25017 = state_24986__$1;
(statearr_25001_25017[(2)] = inst_24978);

(statearr_25001_25017[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (8))){
var inst_24968 = (state_24986[(7)]);
var state_24986__$1 = state_24986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24986__$1,(11),out,inst_24968);
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
});})(c__23535__auto___25007,out))
;
return ((function (switch__23475__auto__,c__23535__auto___25007,out){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_25002 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25002[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_25002[(1)] = (1));

return statearr_25002;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_24986){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_24986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e25003){if((e25003 instanceof Object)){
var ex__23479__auto__ = e25003;
var statearr_25004_25018 = state_24986;
(statearr_25004_25018[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25019 = state_24986;
state_24986 = G__25019;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_24986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_24986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto___25007,out))
})();
var state__23537__auto__ = (function (){var statearr_25005 = f__23536__auto__.call(null);
(statearr_25005[(6)] = c__23535__auto___25007);

return statearr_25005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto___25007,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25021 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25021 = (function (f,ch,meta25022){
this.f = f;
this.ch = ch;
this.meta25022 = meta25022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25023,meta25022__$1){
var self__ = this;
var _25023__$1 = this;
return (new cljs.core.async.t_cljs$core$async25021(self__.f,self__.ch,meta25022__$1));
});

cljs.core.async.t_cljs$core$async25021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25023){
var self__ = this;
var _25023__$1 = this;
return self__.meta25022;
});

cljs.core.async.t_cljs$core$async25021.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25021.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25021.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25021.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25021.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25024 = (function (f,ch,meta25022,_,fn1,meta25025){
this.f = f;
this.ch = ch;
this.meta25022 = meta25022;
this._ = _;
this.fn1 = fn1;
this.meta25025 = meta25025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25026,meta25025__$1){
var self__ = this;
var _25026__$1 = this;
return (new cljs.core.async.t_cljs$core$async25024(self__.f,self__.ch,self__.meta25022,self__._,self__.fn1,meta25025__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25026){
var self__ = this;
var _25026__$1 = this;
return self__.meta25025;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25024.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25024.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25024.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25024.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25020_SHARP_){
return f1.call(null,(((p1__25020_SHARP_ == null))?null:self__.f.call(null,p1__25020_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25024.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25022","meta25022",1831426527,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25021","cljs.core.async/t_cljs$core$async25021",1532346869,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25025","meta25025",1083225772,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25024.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25024";

cljs.core.async.t_cljs$core$async25024.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25024");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25024.
 */
cljs.core.async.__GT_t_cljs$core$async25024 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25024(f__$1,ch__$1,meta25022__$1,___$2,fn1__$1,meta25025){
return (new cljs.core.async.t_cljs$core$async25024(f__$1,ch__$1,meta25022__$1,___$2,fn1__$1,meta25025));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25024(self__.f,self__.ch,self__.meta25022,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25021.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25021.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25022","meta25022",1831426527,null)], null);
});

cljs.core.async.t_cljs$core$async25021.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25021";

cljs.core.async.t_cljs$core$async25021.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25021");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25021.
 */
cljs.core.async.__GT_t_cljs$core$async25021 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25021(f__$1,ch__$1,meta25022){
return (new cljs.core.async.t_cljs$core$async25021(f__$1,ch__$1,meta25022));
});

}

return (new cljs.core.async.t_cljs$core$async25021(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25027 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25027 = (function (f,ch,meta25028){
this.f = f;
this.ch = ch;
this.meta25028 = meta25028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25029,meta25028__$1){
var self__ = this;
var _25029__$1 = this;
return (new cljs.core.async.t_cljs$core$async25027(self__.f,self__.ch,meta25028__$1));
});

cljs.core.async.t_cljs$core$async25027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25029){
var self__ = this;
var _25029__$1 = this;
return self__.meta25028;
});

cljs.core.async.t_cljs$core$async25027.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25027.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25027.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25027.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25027.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25027.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25028","meta25028",1606938527,null)], null);
});

cljs.core.async.t_cljs$core$async25027.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25027";

cljs.core.async.t_cljs$core$async25027.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25027");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25027.
 */
cljs.core.async.__GT_t_cljs$core$async25027 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25027(f__$1,ch__$1,meta25028){
return (new cljs.core.async.t_cljs$core$async25027(f__$1,ch__$1,meta25028));
});

}

return (new cljs.core.async.t_cljs$core$async25027(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25030 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25030 = (function (p,ch,meta25031){
this.p = p;
this.ch = ch;
this.meta25031 = meta25031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25032,meta25031__$1){
var self__ = this;
var _25032__$1 = this;
return (new cljs.core.async.t_cljs$core$async25030(self__.p,self__.ch,meta25031__$1));
});

cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25032){
var self__ = this;
var _25032__$1 = this;
return self__.meta25031;
});

cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25031","meta25031",-687827493,null)], null);
});

cljs.core.async.t_cljs$core$async25030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25030";

cljs.core.async.t_cljs$core$async25030.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25030");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25030.
 */
cljs.core.async.__GT_t_cljs$core$async25030 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25030(p__$1,ch__$1,meta25031){
return (new cljs.core.async.t_cljs$core$async25030(p__$1,ch__$1,meta25031));
});

}

return (new cljs.core.async.t_cljs$core$async25030(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25034 = arguments.length;
switch (G__25034) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23535__auto___25074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto___25074,out){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto___25074,out){
return (function (state_25055){
var state_val_25056 = (state_25055[(1)]);
if((state_val_25056 === (7))){
var inst_25051 = (state_25055[(2)]);
var state_25055__$1 = state_25055;
var statearr_25057_25075 = state_25055__$1;
(statearr_25057_25075[(2)] = inst_25051);

(statearr_25057_25075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25056 === (1))){
var state_25055__$1 = state_25055;
var statearr_25058_25076 = state_25055__$1;
(statearr_25058_25076[(2)] = null);

(statearr_25058_25076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25056 === (4))){
var inst_25037 = (state_25055[(7)]);
var inst_25037__$1 = (state_25055[(2)]);
var inst_25038 = (inst_25037__$1 == null);
var state_25055__$1 = (function (){var statearr_25059 = state_25055;
(statearr_25059[(7)] = inst_25037__$1);

return statearr_25059;
})();
if(cljs.core.truth_(inst_25038)){
var statearr_25060_25077 = state_25055__$1;
(statearr_25060_25077[(1)] = (5));

} else {
var statearr_25061_25078 = state_25055__$1;
(statearr_25061_25078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25056 === (6))){
var inst_25037 = (state_25055[(7)]);
var inst_25042 = p.call(null,inst_25037);
var state_25055__$1 = state_25055;
if(cljs.core.truth_(inst_25042)){
var statearr_25062_25079 = state_25055__$1;
(statearr_25062_25079[(1)] = (8));

} else {
var statearr_25063_25080 = state_25055__$1;
(statearr_25063_25080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25056 === (3))){
var inst_25053 = (state_25055[(2)]);
var state_25055__$1 = state_25055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25055__$1,inst_25053);
} else {
if((state_val_25056 === (2))){
var state_25055__$1 = state_25055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25055__$1,(4),ch);
} else {
if((state_val_25056 === (11))){
var inst_25045 = (state_25055[(2)]);
var state_25055__$1 = state_25055;
var statearr_25064_25081 = state_25055__$1;
(statearr_25064_25081[(2)] = inst_25045);

(statearr_25064_25081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25056 === (9))){
var state_25055__$1 = state_25055;
var statearr_25065_25082 = state_25055__$1;
(statearr_25065_25082[(2)] = null);

(statearr_25065_25082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25056 === (5))){
var inst_25040 = cljs.core.async.close_BANG_.call(null,out);
var state_25055__$1 = state_25055;
var statearr_25066_25083 = state_25055__$1;
(statearr_25066_25083[(2)] = inst_25040);

(statearr_25066_25083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25056 === (10))){
var inst_25048 = (state_25055[(2)]);
var state_25055__$1 = (function (){var statearr_25067 = state_25055;
(statearr_25067[(8)] = inst_25048);

return statearr_25067;
})();
var statearr_25068_25084 = state_25055__$1;
(statearr_25068_25084[(2)] = null);

(statearr_25068_25084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25056 === (8))){
var inst_25037 = (state_25055[(7)]);
var state_25055__$1 = state_25055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25055__$1,(11),out,inst_25037);
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
});})(c__23535__auto___25074,out))
;
return ((function (switch__23475__auto__,c__23535__auto___25074,out){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_25069 = [null,null,null,null,null,null,null,null,null];
(statearr_25069[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_25069[(1)] = (1));

return statearr_25069;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_25055){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_25055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e25070){if((e25070 instanceof Object)){
var ex__23479__auto__ = e25070;
var statearr_25071_25085 = state_25055;
(statearr_25071_25085[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25086 = state_25055;
state_25055 = G__25086;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_25055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_25055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto___25074,out))
})();
var state__23537__auto__ = (function (){var statearr_25072 = f__23536__auto__.call(null);
(statearr_25072[(6)] = c__23535__auto___25074);

return statearr_25072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto___25074,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25088 = arguments.length;
switch (G__25088) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto__){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto__){
return (function (state_25151){
var state_val_25152 = (state_25151[(1)]);
if((state_val_25152 === (7))){
var inst_25147 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
var statearr_25153_25191 = state_25151__$1;
(statearr_25153_25191[(2)] = inst_25147);

(statearr_25153_25191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (20))){
var inst_25117 = (state_25151[(7)]);
var inst_25128 = (state_25151[(2)]);
var inst_25129 = cljs.core.next.call(null,inst_25117);
var inst_25103 = inst_25129;
var inst_25104 = null;
var inst_25105 = (0);
var inst_25106 = (0);
var state_25151__$1 = (function (){var statearr_25154 = state_25151;
(statearr_25154[(8)] = inst_25104);

(statearr_25154[(9)] = inst_25106);

(statearr_25154[(10)] = inst_25128);

(statearr_25154[(11)] = inst_25103);

(statearr_25154[(12)] = inst_25105);

return statearr_25154;
})();
var statearr_25155_25192 = state_25151__$1;
(statearr_25155_25192[(2)] = null);

(statearr_25155_25192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (1))){
var state_25151__$1 = state_25151;
var statearr_25156_25193 = state_25151__$1;
(statearr_25156_25193[(2)] = null);

(statearr_25156_25193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (4))){
var inst_25092 = (state_25151[(13)]);
var inst_25092__$1 = (state_25151[(2)]);
var inst_25093 = (inst_25092__$1 == null);
var state_25151__$1 = (function (){var statearr_25157 = state_25151;
(statearr_25157[(13)] = inst_25092__$1);

return statearr_25157;
})();
if(cljs.core.truth_(inst_25093)){
var statearr_25158_25194 = state_25151__$1;
(statearr_25158_25194[(1)] = (5));

} else {
var statearr_25159_25195 = state_25151__$1;
(statearr_25159_25195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (15))){
var state_25151__$1 = state_25151;
var statearr_25163_25196 = state_25151__$1;
(statearr_25163_25196[(2)] = null);

(statearr_25163_25196[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (21))){
var state_25151__$1 = state_25151;
var statearr_25164_25197 = state_25151__$1;
(statearr_25164_25197[(2)] = null);

(statearr_25164_25197[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (13))){
var inst_25104 = (state_25151[(8)]);
var inst_25106 = (state_25151[(9)]);
var inst_25103 = (state_25151[(11)]);
var inst_25105 = (state_25151[(12)]);
var inst_25113 = (state_25151[(2)]);
var inst_25114 = (inst_25106 + (1));
var tmp25160 = inst_25104;
var tmp25161 = inst_25103;
var tmp25162 = inst_25105;
var inst_25103__$1 = tmp25161;
var inst_25104__$1 = tmp25160;
var inst_25105__$1 = tmp25162;
var inst_25106__$1 = inst_25114;
var state_25151__$1 = (function (){var statearr_25165 = state_25151;
(statearr_25165[(8)] = inst_25104__$1);

(statearr_25165[(9)] = inst_25106__$1);

(statearr_25165[(14)] = inst_25113);

(statearr_25165[(11)] = inst_25103__$1);

(statearr_25165[(12)] = inst_25105__$1);

return statearr_25165;
})();
var statearr_25166_25198 = state_25151__$1;
(statearr_25166_25198[(2)] = null);

(statearr_25166_25198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (22))){
var state_25151__$1 = state_25151;
var statearr_25167_25199 = state_25151__$1;
(statearr_25167_25199[(2)] = null);

(statearr_25167_25199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (6))){
var inst_25092 = (state_25151[(13)]);
var inst_25101 = f.call(null,inst_25092);
var inst_25102 = cljs.core.seq.call(null,inst_25101);
var inst_25103 = inst_25102;
var inst_25104 = null;
var inst_25105 = (0);
var inst_25106 = (0);
var state_25151__$1 = (function (){var statearr_25168 = state_25151;
(statearr_25168[(8)] = inst_25104);

(statearr_25168[(9)] = inst_25106);

(statearr_25168[(11)] = inst_25103);

(statearr_25168[(12)] = inst_25105);

return statearr_25168;
})();
var statearr_25169_25200 = state_25151__$1;
(statearr_25169_25200[(2)] = null);

(statearr_25169_25200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (17))){
var inst_25117 = (state_25151[(7)]);
var inst_25121 = cljs.core.chunk_first.call(null,inst_25117);
var inst_25122 = cljs.core.chunk_rest.call(null,inst_25117);
var inst_25123 = cljs.core.count.call(null,inst_25121);
var inst_25103 = inst_25122;
var inst_25104 = inst_25121;
var inst_25105 = inst_25123;
var inst_25106 = (0);
var state_25151__$1 = (function (){var statearr_25170 = state_25151;
(statearr_25170[(8)] = inst_25104);

(statearr_25170[(9)] = inst_25106);

(statearr_25170[(11)] = inst_25103);

(statearr_25170[(12)] = inst_25105);

return statearr_25170;
})();
var statearr_25171_25201 = state_25151__$1;
(statearr_25171_25201[(2)] = null);

(statearr_25171_25201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (3))){
var inst_25149 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25151__$1,inst_25149);
} else {
if((state_val_25152 === (12))){
var inst_25137 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
var statearr_25172_25202 = state_25151__$1;
(statearr_25172_25202[(2)] = inst_25137);

(statearr_25172_25202[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (2))){
var state_25151__$1 = state_25151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25151__$1,(4),in$);
} else {
if((state_val_25152 === (23))){
var inst_25145 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
var statearr_25173_25203 = state_25151__$1;
(statearr_25173_25203[(2)] = inst_25145);

(statearr_25173_25203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (19))){
var inst_25132 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
var statearr_25174_25204 = state_25151__$1;
(statearr_25174_25204[(2)] = inst_25132);

(statearr_25174_25204[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (11))){
var inst_25117 = (state_25151[(7)]);
var inst_25103 = (state_25151[(11)]);
var inst_25117__$1 = cljs.core.seq.call(null,inst_25103);
var state_25151__$1 = (function (){var statearr_25175 = state_25151;
(statearr_25175[(7)] = inst_25117__$1);

return statearr_25175;
})();
if(inst_25117__$1){
var statearr_25176_25205 = state_25151__$1;
(statearr_25176_25205[(1)] = (14));

} else {
var statearr_25177_25206 = state_25151__$1;
(statearr_25177_25206[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (9))){
var inst_25139 = (state_25151[(2)]);
var inst_25140 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25151__$1 = (function (){var statearr_25178 = state_25151;
(statearr_25178[(15)] = inst_25139);

return statearr_25178;
})();
if(cljs.core.truth_(inst_25140)){
var statearr_25179_25207 = state_25151__$1;
(statearr_25179_25207[(1)] = (21));

} else {
var statearr_25180_25208 = state_25151__$1;
(statearr_25180_25208[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (5))){
var inst_25095 = cljs.core.async.close_BANG_.call(null,out);
var state_25151__$1 = state_25151;
var statearr_25181_25209 = state_25151__$1;
(statearr_25181_25209[(2)] = inst_25095);

(statearr_25181_25209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (14))){
var inst_25117 = (state_25151[(7)]);
var inst_25119 = cljs.core.chunked_seq_QMARK_.call(null,inst_25117);
var state_25151__$1 = state_25151;
if(inst_25119){
var statearr_25182_25210 = state_25151__$1;
(statearr_25182_25210[(1)] = (17));

} else {
var statearr_25183_25211 = state_25151__$1;
(statearr_25183_25211[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (16))){
var inst_25135 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
var statearr_25184_25212 = state_25151__$1;
(statearr_25184_25212[(2)] = inst_25135);

(statearr_25184_25212[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (10))){
var inst_25104 = (state_25151[(8)]);
var inst_25106 = (state_25151[(9)]);
var inst_25111 = cljs.core._nth.call(null,inst_25104,inst_25106);
var state_25151__$1 = state_25151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25151__$1,(13),out,inst_25111);
} else {
if((state_val_25152 === (18))){
var inst_25117 = (state_25151[(7)]);
var inst_25126 = cljs.core.first.call(null,inst_25117);
var state_25151__$1 = state_25151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25151__$1,(20),out,inst_25126);
} else {
if((state_val_25152 === (8))){
var inst_25106 = (state_25151[(9)]);
var inst_25105 = (state_25151[(12)]);
var inst_25108 = (inst_25106 < inst_25105);
var inst_25109 = inst_25108;
var state_25151__$1 = state_25151;
if(cljs.core.truth_(inst_25109)){
var statearr_25185_25213 = state_25151__$1;
(statearr_25185_25213[(1)] = (10));

} else {
var statearr_25186_25214 = state_25151__$1;
(statearr_25186_25214[(1)] = (11));

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
}
}
}
}
}
}
});})(c__23535__auto__))
;
return ((function (switch__23475__auto__,c__23535__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23476__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23476__auto____0 = (function (){
var statearr_25187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25187[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23476__auto__);

(statearr_25187[(1)] = (1));

return statearr_25187;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23476__auto____1 = (function (state_25151){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_25151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e25188){if((e25188 instanceof Object)){
var ex__23479__auto__ = e25188;
var statearr_25189_25215 = state_25151;
(statearr_25189_25215[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25216 = state_25151;
state_25151 = G__25216;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23476__auto__ = function(state_25151){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23476__auto____1.call(this,state_25151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23476__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23476__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto__))
})();
var state__23537__auto__ = (function (){var statearr_25190 = f__23536__auto__.call(null);
(statearr_25190[(6)] = c__23535__auto__);

return statearr_25190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto__))
);

return c__23535__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25218 = arguments.length;
switch (G__25218) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25221 = arguments.length;
switch (G__25221) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25224 = arguments.length;
switch (G__25224) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23535__auto___25271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto___25271,out){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto___25271,out){
return (function (state_25248){
var state_val_25249 = (state_25248[(1)]);
if((state_val_25249 === (7))){
var inst_25243 = (state_25248[(2)]);
var state_25248__$1 = state_25248;
var statearr_25250_25272 = state_25248__$1;
(statearr_25250_25272[(2)] = inst_25243);

(statearr_25250_25272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25249 === (1))){
var inst_25225 = null;
var state_25248__$1 = (function (){var statearr_25251 = state_25248;
(statearr_25251[(7)] = inst_25225);

return statearr_25251;
})();
var statearr_25252_25273 = state_25248__$1;
(statearr_25252_25273[(2)] = null);

(statearr_25252_25273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25249 === (4))){
var inst_25228 = (state_25248[(8)]);
var inst_25228__$1 = (state_25248[(2)]);
var inst_25229 = (inst_25228__$1 == null);
var inst_25230 = cljs.core.not.call(null,inst_25229);
var state_25248__$1 = (function (){var statearr_25253 = state_25248;
(statearr_25253[(8)] = inst_25228__$1);

return statearr_25253;
})();
if(inst_25230){
var statearr_25254_25274 = state_25248__$1;
(statearr_25254_25274[(1)] = (5));

} else {
var statearr_25255_25275 = state_25248__$1;
(statearr_25255_25275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25249 === (6))){
var state_25248__$1 = state_25248;
var statearr_25256_25276 = state_25248__$1;
(statearr_25256_25276[(2)] = null);

(statearr_25256_25276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25249 === (3))){
var inst_25245 = (state_25248[(2)]);
var inst_25246 = cljs.core.async.close_BANG_.call(null,out);
var state_25248__$1 = (function (){var statearr_25257 = state_25248;
(statearr_25257[(9)] = inst_25245);

return statearr_25257;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25248__$1,inst_25246);
} else {
if((state_val_25249 === (2))){
var state_25248__$1 = state_25248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25248__$1,(4),ch);
} else {
if((state_val_25249 === (11))){
var inst_25228 = (state_25248[(8)]);
var inst_25237 = (state_25248[(2)]);
var inst_25225 = inst_25228;
var state_25248__$1 = (function (){var statearr_25258 = state_25248;
(statearr_25258[(7)] = inst_25225);

(statearr_25258[(10)] = inst_25237);

return statearr_25258;
})();
var statearr_25259_25277 = state_25248__$1;
(statearr_25259_25277[(2)] = null);

(statearr_25259_25277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25249 === (9))){
var inst_25228 = (state_25248[(8)]);
var state_25248__$1 = state_25248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25248__$1,(11),out,inst_25228);
} else {
if((state_val_25249 === (5))){
var inst_25228 = (state_25248[(8)]);
var inst_25225 = (state_25248[(7)]);
var inst_25232 = cljs.core._EQ_.call(null,inst_25228,inst_25225);
var state_25248__$1 = state_25248;
if(inst_25232){
var statearr_25261_25278 = state_25248__$1;
(statearr_25261_25278[(1)] = (8));

} else {
var statearr_25262_25279 = state_25248__$1;
(statearr_25262_25279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25249 === (10))){
var inst_25240 = (state_25248[(2)]);
var state_25248__$1 = state_25248;
var statearr_25263_25280 = state_25248__$1;
(statearr_25263_25280[(2)] = inst_25240);

(statearr_25263_25280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25249 === (8))){
var inst_25225 = (state_25248[(7)]);
var tmp25260 = inst_25225;
var inst_25225__$1 = tmp25260;
var state_25248__$1 = (function (){var statearr_25264 = state_25248;
(statearr_25264[(7)] = inst_25225__$1);

return statearr_25264;
})();
var statearr_25265_25281 = state_25248__$1;
(statearr_25265_25281[(2)] = null);

(statearr_25265_25281[(1)] = (2));


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
});})(c__23535__auto___25271,out))
;
return ((function (switch__23475__auto__,c__23535__auto___25271,out){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_25266 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25266[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_25266[(1)] = (1));

return statearr_25266;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_25248){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_25248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e25267){if((e25267 instanceof Object)){
var ex__23479__auto__ = e25267;
var statearr_25268_25282 = state_25248;
(statearr_25268_25282[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25283 = state_25248;
state_25248 = G__25283;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_25248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_25248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto___25271,out))
})();
var state__23537__auto__ = (function (){var statearr_25269 = f__23536__auto__.call(null);
(statearr_25269[(6)] = c__23535__auto___25271);

return statearr_25269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto___25271,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25285 = arguments.length;
switch (G__25285) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23535__auto___25351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto___25351,out){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto___25351,out){
return (function (state_25323){
var state_val_25324 = (state_25323[(1)]);
if((state_val_25324 === (7))){
var inst_25319 = (state_25323[(2)]);
var state_25323__$1 = state_25323;
var statearr_25325_25352 = state_25323__$1;
(statearr_25325_25352[(2)] = inst_25319);

(statearr_25325_25352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25324 === (1))){
var inst_25286 = (new Array(n));
var inst_25287 = inst_25286;
var inst_25288 = (0);
var state_25323__$1 = (function (){var statearr_25326 = state_25323;
(statearr_25326[(7)] = inst_25288);

(statearr_25326[(8)] = inst_25287);

return statearr_25326;
})();
var statearr_25327_25353 = state_25323__$1;
(statearr_25327_25353[(2)] = null);

(statearr_25327_25353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25324 === (4))){
var inst_25291 = (state_25323[(9)]);
var inst_25291__$1 = (state_25323[(2)]);
var inst_25292 = (inst_25291__$1 == null);
var inst_25293 = cljs.core.not.call(null,inst_25292);
var state_25323__$1 = (function (){var statearr_25328 = state_25323;
(statearr_25328[(9)] = inst_25291__$1);

return statearr_25328;
})();
if(inst_25293){
var statearr_25329_25354 = state_25323__$1;
(statearr_25329_25354[(1)] = (5));

} else {
var statearr_25330_25355 = state_25323__$1;
(statearr_25330_25355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25324 === (15))){
var inst_25313 = (state_25323[(2)]);
var state_25323__$1 = state_25323;
var statearr_25331_25356 = state_25323__$1;
(statearr_25331_25356[(2)] = inst_25313);

(statearr_25331_25356[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25324 === (13))){
var state_25323__$1 = state_25323;
var statearr_25332_25357 = state_25323__$1;
(statearr_25332_25357[(2)] = null);

(statearr_25332_25357[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25324 === (6))){
var inst_25288 = (state_25323[(7)]);
var inst_25309 = (inst_25288 > (0));
var state_25323__$1 = state_25323;
if(cljs.core.truth_(inst_25309)){
var statearr_25333_25358 = state_25323__$1;
(statearr_25333_25358[(1)] = (12));

} else {
var statearr_25334_25359 = state_25323__$1;
(statearr_25334_25359[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25324 === (3))){
var inst_25321 = (state_25323[(2)]);
var state_25323__$1 = state_25323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25323__$1,inst_25321);
} else {
if((state_val_25324 === (12))){
var inst_25287 = (state_25323[(8)]);
var inst_25311 = cljs.core.vec.call(null,inst_25287);
var state_25323__$1 = state_25323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25323__$1,(15),out,inst_25311);
} else {
if((state_val_25324 === (2))){
var state_25323__$1 = state_25323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25323__$1,(4),ch);
} else {
if((state_val_25324 === (11))){
var inst_25303 = (state_25323[(2)]);
var inst_25304 = (new Array(n));
var inst_25287 = inst_25304;
var inst_25288 = (0);
var state_25323__$1 = (function (){var statearr_25335 = state_25323;
(statearr_25335[(7)] = inst_25288);

(statearr_25335[(10)] = inst_25303);

(statearr_25335[(8)] = inst_25287);

return statearr_25335;
})();
var statearr_25336_25360 = state_25323__$1;
(statearr_25336_25360[(2)] = null);

(statearr_25336_25360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25324 === (9))){
var inst_25287 = (state_25323[(8)]);
var inst_25301 = cljs.core.vec.call(null,inst_25287);
var state_25323__$1 = state_25323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25323__$1,(11),out,inst_25301);
} else {
if((state_val_25324 === (5))){
var inst_25296 = (state_25323[(11)]);
var inst_25291 = (state_25323[(9)]);
var inst_25288 = (state_25323[(7)]);
var inst_25287 = (state_25323[(8)]);
var inst_25295 = (inst_25287[inst_25288] = inst_25291);
var inst_25296__$1 = (inst_25288 + (1));
var inst_25297 = (inst_25296__$1 < n);
var state_25323__$1 = (function (){var statearr_25337 = state_25323;
(statearr_25337[(11)] = inst_25296__$1);

(statearr_25337[(12)] = inst_25295);

return statearr_25337;
})();
if(cljs.core.truth_(inst_25297)){
var statearr_25338_25361 = state_25323__$1;
(statearr_25338_25361[(1)] = (8));

} else {
var statearr_25339_25362 = state_25323__$1;
(statearr_25339_25362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25324 === (14))){
var inst_25316 = (state_25323[(2)]);
var inst_25317 = cljs.core.async.close_BANG_.call(null,out);
var state_25323__$1 = (function (){var statearr_25341 = state_25323;
(statearr_25341[(13)] = inst_25316);

return statearr_25341;
})();
var statearr_25342_25363 = state_25323__$1;
(statearr_25342_25363[(2)] = inst_25317);

(statearr_25342_25363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25324 === (10))){
var inst_25307 = (state_25323[(2)]);
var state_25323__$1 = state_25323;
var statearr_25343_25364 = state_25323__$1;
(statearr_25343_25364[(2)] = inst_25307);

(statearr_25343_25364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25324 === (8))){
var inst_25296 = (state_25323[(11)]);
var inst_25287 = (state_25323[(8)]);
var tmp25340 = inst_25287;
var inst_25287__$1 = tmp25340;
var inst_25288 = inst_25296;
var state_25323__$1 = (function (){var statearr_25344 = state_25323;
(statearr_25344[(7)] = inst_25288);

(statearr_25344[(8)] = inst_25287__$1);

return statearr_25344;
})();
var statearr_25345_25365 = state_25323__$1;
(statearr_25345_25365[(2)] = null);

(statearr_25345_25365[(1)] = (2));


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
});})(c__23535__auto___25351,out))
;
return ((function (switch__23475__auto__,c__23535__auto___25351,out){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_25346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25346[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_25346[(1)] = (1));

return statearr_25346;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_25323){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_25323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e25347){if((e25347 instanceof Object)){
var ex__23479__auto__ = e25347;
var statearr_25348_25366 = state_25323;
(statearr_25348_25366[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25367 = state_25323;
state_25323 = G__25367;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_25323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_25323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto___25351,out))
})();
var state__23537__auto__ = (function (){var statearr_25349 = f__23536__auto__.call(null);
(statearr_25349[(6)] = c__23535__auto___25351);

return statearr_25349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto___25351,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25369 = arguments.length;
switch (G__25369) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23535__auto___25439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto___25439,out){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto___25439,out){
return (function (state_25411){
var state_val_25412 = (state_25411[(1)]);
if((state_val_25412 === (7))){
var inst_25407 = (state_25411[(2)]);
var state_25411__$1 = state_25411;
var statearr_25413_25440 = state_25411__$1;
(statearr_25413_25440[(2)] = inst_25407);

(statearr_25413_25440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (1))){
var inst_25370 = [];
var inst_25371 = inst_25370;
var inst_25372 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25411__$1 = (function (){var statearr_25414 = state_25411;
(statearr_25414[(7)] = inst_25371);

(statearr_25414[(8)] = inst_25372);

return statearr_25414;
})();
var statearr_25415_25441 = state_25411__$1;
(statearr_25415_25441[(2)] = null);

(statearr_25415_25441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (4))){
var inst_25375 = (state_25411[(9)]);
var inst_25375__$1 = (state_25411[(2)]);
var inst_25376 = (inst_25375__$1 == null);
var inst_25377 = cljs.core.not.call(null,inst_25376);
var state_25411__$1 = (function (){var statearr_25416 = state_25411;
(statearr_25416[(9)] = inst_25375__$1);

return statearr_25416;
})();
if(inst_25377){
var statearr_25417_25442 = state_25411__$1;
(statearr_25417_25442[(1)] = (5));

} else {
var statearr_25418_25443 = state_25411__$1;
(statearr_25418_25443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (15))){
var inst_25401 = (state_25411[(2)]);
var state_25411__$1 = state_25411;
var statearr_25419_25444 = state_25411__$1;
(statearr_25419_25444[(2)] = inst_25401);

(statearr_25419_25444[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (13))){
var state_25411__$1 = state_25411;
var statearr_25420_25445 = state_25411__$1;
(statearr_25420_25445[(2)] = null);

(statearr_25420_25445[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (6))){
var inst_25371 = (state_25411[(7)]);
var inst_25396 = inst_25371.length;
var inst_25397 = (inst_25396 > (0));
var state_25411__$1 = state_25411;
if(cljs.core.truth_(inst_25397)){
var statearr_25421_25446 = state_25411__$1;
(statearr_25421_25446[(1)] = (12));

} else {
var statearr_25422_25447 = state_25411__$1;
(statearr_25422_25447[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (3))){
var inst_25409 = (state_25411[(2)]);
var state_25411__$1 = state_25411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25411__$1,inst_25409);
} else {
if((state_val_25412 === (12))){
var inst_25371 = (state_25411[(7)]);
var inst_25399 = cljs.core.vec.call(null,inst_25371);
var state_25411__$1 = state_25411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25411__$1,(15),out,inst_25399);
} else {
if((state_val_25412 === (2))){
var state_25411__$1 = state_25411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25411__$1,(4),ch);
} else {
if((state_val_25412 === (11))){
var inst_25375 = (state_25411[(9)]);
var inst_25379 = (state_25411[(10)]);
var inst_25389 = (state_25411[(2)]);
var inst_25390 = [];
var inst_25391 = inst_25390.push(inst_25375);
var inst_25371 = inst_25390;
var inst_25372 = inst_25379;
var state_25411__$1 = (function (){var statearr_25423 = state_25411;
(statearr_25423[(7)] = inst_25371);

(statearr_25423[(8)] = inst_25372);

(statearr_25423[(11)] = inst_25391);

(statearr_25423[(12)] = inst_25389);

return statearr_25423;
})();
var statearr_25424_25448 = state_25411__$1;
(statearr_25424_25448[(2)] = null);

(statearr_25424_25448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (9))){
var inst_25371 = (state_25411[(7)]);
var inst_25387 = cljs.core.vec.call(null,inst_25371);
var state_25411__$1 = state_25411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25411__$1,(11),out,inst_25387);
} else {
if((state_val_25412 === (5))){
var inst_25375 = (state_25411[(9)]);
var inst_25379 = (state_25411[(10)]);
var inst_25372 = (state_25411[(8)]);
var inst_25379__$1 = f.call(null,inst_25375);
var inst_25380 = cljs.core._EQ_.call(null,inst_25379__$1,inst_25372);
var inst_25381 = cljs.core.keyword_identical_QMARK_.call(null,inst_25372,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25382 = ((inst_25380) || (inst_25381));
var state_25411__$1 = (function (){var statearr_25425 = state_25411;
(statearr_25425[(10)] = inst_25379__$1);

return statearr_25425;
})();
if(cljs.core.truth_(inst_25382)){
var statearr_25426_25449 = state_25411__$1;
(statearr_25426_25449[(1)] = (8));

} else {
var statearr_25427_25450 = state_25411__$1;
(statearr_25427_25450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (14))){
var inst_25404 = (state_25411[(2)]);
var inst_25405 = cljs.core.async.close_BANG_.call(null,out);
var state_25411__$1 = (function (){var statearr_25429 = state_25411;
(statearr_25429[(13)] = inst_25404);

return statearr_25429;
})();
var statearr_25430_25451 = state_25411__$1;
(statearr_25430_25451[(2)] = inst_25405);

(statearr_25430_25451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (10))){
var inst_25394 = (state_25411[(2)]);
var state_25411__$1 = state_25411;
var statearr_25431_25452 = state_25411__$1;
(statearr_25431_25452[(2)] = inst_25394);

(statearr_25431_25452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (8))){
var inst_25375 = (state_25411[(9)]);
var inst_25379 = (state_25411[(10)]);
var inst_25371 = (state_25411[(7)]);
var inst_25384 = inst_25371.push(inst_25375);
var tmp25428 = inst_25371;
var inst_25371__$1 = tmp25428;
var inst_25372 = inst_25379;
var state_25411__$1 = (function (){var statearr_25432 = state_25411;
(statearr_25432[(14)] = inst_25384);

(statearr_25432[(7)] = inst_25371__$1);

(statearr_25432[(8)] = inst_25372);

return statearr_25432;
})();
var statearr_25433_25453 = state_25411__$1;
(statearr_25433_25453[(2)] = null);

(statearr_25433_25453[(1)] = (2));


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
});})(c__23535__auto___25439,out))
;
return ((function (switch__23475__auto__,c__23535__auto___25439,out){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_25434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25434[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_25434[(1)] = (1));

return statearr_25434;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_25411){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_25411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e25435){if((e25435 instanceof Object)){
var ex__23479__auto__ = e25435;
var statearr_25436_25454 = state_25411;
(statearr_25436_25454[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25455 = state_25411;
state_25411 = G__25455;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_25411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_25411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto___25439,out))
})();
var state__23537__auto__ = (function (){var statearr_25437 = f__23536__auto__.call(null);
(statearr_25437[(6)] = c__23535__auto___25439);

return statearr_25437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto___25439,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1551192008713

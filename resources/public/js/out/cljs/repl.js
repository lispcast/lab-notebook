// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28516){
var map__28517 = p__28516;
var map__28517__$1 = (((((!((map__28517 == null))))?(((((map__28517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28517):map__28517);
var m = map__28517__$1;
var n = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28519_28551 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28520_28552 = null;
var count__28521_28553 = (0);
var i__28522_28554 = (0);
while(true){
if((i__28522_28554 < count__28521_28553)){
var f_28555 = cljs.core._nth.call(null,chunk__28520_28552,i__28522_28554);
cljs.core.println.call(null,"  ",f_28555);


var G__28556 = seq__28519_28551;
var G__28557 = chunk__28520_28552;
var G__28558 = count__28521_28553;
var G__28559 = (i__28522_28554 + (1));
seq__28519_28551 = G__28556;
chunk__28520_28552 = G__28557;
count__28521_28553 = G__28558;
i__28522_28554 = G__28559;
continue;
} else {
var temp__5720__auto___28560 = cljs.core.seq.call(null,seq__28519_28551);
if(temp__5720__auto___28560){
var seq__28519_28561__$1 = temp__5720__auto___28560;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28519_28561__$1)){
var c__4550__auto___28562 = cljs.core.chunk_first.call(null,seq__28519_28561__$1);
var G__28563 = cljs.core.chunk_rest.call(null,seq__28519_28561__$1);
var G__28564 = c__4550__auto___28562;
var G__28565 = cljs.core.count.call(null,c__4550__auto___28562);
var G__28566 = (0);
seq__28519_28551 = G__28563;
chunk__28520_28552 = G__28564;
count__28521_28553 = G__28565;
i__28522_28554 = G__28566;
continue;
} else {
var f_28567 = cljs.core.first.call(null,seq__28519_28561__$1);
cljs.core.println.call(null,"  ",f_28567);


var G__28568 = cljs.core.next.call(null,seq__28519_28561__$1);
var G__28569 = null;
var G__28570 = (0);
var G__28571 = (0);
seq__28519_28551 = G__28568;
chunk__28520_28552 = G__28569;
count__28521_28553 = G__28570;
i__28522_28554 = G__28571;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28572 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28572);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28572)))?cljs.core.second.call(null,arglists_28572):arglists_28572));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28523_28573 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28524_28574 = null;
var count__28525_28575 = (0);
var i__28526_28576 = (0);
while(true){
if((i__28526_28576 < count__28525_28575)){
var vec__28537_28577 = cljs.core._nth.call(null,chunk__28524_28574,i__28526_28576);
var name_28578 = cljs.core.nth.call(null,vec__28537_28577,(0),null);
var map__28540_28579 = cljs.core.nth.call(null,vec__28537_28577,(1),null);
var map__28540_28580__$1 = (((((!((map__28540_28579 == null))))?(((((map__28540_28579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28540_28579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28540_28579):map__28540_28579);
var doc_28581 = cljs.core.get.call(null,map__28540_28580__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28582 = cljs.core.get.call(null,map__28540_28580__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28578);

cljs.core.println.call(null," ",arglists_28582);

if(cljs.core.truth_(doc_28581)){
cljs.core.println.call(null," ",doc_28581);
} else {
}


var G__28583 = seq__28523_28573;
var G__28584 = chunk__28524_28574;
var G__28585 = count__28525_28575;
var G__28586 = (i__28526_28576 + (1));
seq__28523_28573 = G__28583;
chunk__28524_28574 = G__28584;
count__28525_28575 = G__28585;
i__28526_28576 = G__28586;
continue;
} else {
var temp__5720__auto___28587 = cljs.core.seq.call(null,seq__28523_28573);
if(temp__5720__auto___28587){
var seq__28523_28588__$1 = temp__5720__auto___28587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28523_28588__$1)){
var c__4550__auto___28589 = cljs.core.chunk_first.call(null,seq__28523_28588__$1);
var G__28590 = cljs.core.chunk_rest.call(null,seq__28523_28588__$1);
var G__28591 = c__4550__auto___28589;
var G__28592 = cljs.core.count.call(null,c__4550__auto___28589);
var G__28593 = (0);
seq__28523_28573 = G__28590;
chunk__28524_28574 = G__28591;
count__28525_28575 = G__28592;
i__28526_28576 = G__28593;
continue;
} else {
var vec__28542_28594 = cljs.core.first.call(null,seq__28523_28588__$1);
var name_28595 = cljs.core.nth.call(null,vec__28542_28594,(0),null);
var map__28545_28596 = cljs.core.nth.call(null,vec__28542_28594,(1),null);
var map__28545_28597__$1 = (((((!((map__28545_28596 == null))))?(((((map__28545_28596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28545_28596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28545_28596):map__28545_28596);
var doc_28598 = cljs.core.get.call(null,map__28545_28597__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28599 = cljs.core.get.call(null,map__28545_28597__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28595);

cljs.core.println.call(null," ",arglists_28599);

if(cljs.core.truth_(doc_28598)){
cljs.core.println.call(null," ",doc_28598);
} else {
}


var G__28600 = cljs.core.next.call(null,seq__28523_28588__$1);
var G__28601 = null;
var G__28602 = (0);
var G__28603 = (0);
seq__28523_28573 = G__28600;
chunk__28524_28574 = G__28601;
count__28525_28575 = G__28602;
i__28526_28576 = G__28603;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__28547 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28548 = null;
var count__28549 = (0);
var i__28550 = (0);
while(true){
if((i__28550 < count__28549)){
var role = cljs.core._nth.call(null,chunk__28548,i__28550);
var temp__5720__auto___28604__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28604__$1)){
var spec_28605 = temp__5720__auto___28604__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28605));
} else {
}


var G__28606 = seq__28547;
var G__28607 = chunk__28548;
var G__28608 = count__28549;
var G__28609 = (i__28550 + (1));
seq__28547 = G__28606;
chunk__28548 = G__28607;
count__28549 = G__28608;
i__28550 = G__28609;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__28547);
if(temp__5720__auto____$1){
var seq__28547__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28547__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28547__$1);
var G__28610 = cljs.core.chunk_rest.call(null,seq__28547__$1);
var G__28611 = c__4550__auto__;
var G__28612 = cljs.core.count.call(null,c__4550__auto__);
var G__28613 = (0);
seq__28547 = G__28610;
chunk__28548 = G__28611;
count__28549 = G__28612;
i__28550 = G__28613;
continue;
} else {
var role = cljs.core.first.call(null,seq__28547__$1);
var temp__5720__auto___28614__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28614__$2)){
var spec_28615 = temp__5720__auto___28614__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28615));
} else {
}


var G__28616 = cljs.core.next.call(null,seq__28547__$1);
var G__28617 = null;
var G__28618 = (0);
var G__28619 = (0);
seq__28547 = G__28616;
chunk__28548 = G__28617;
count__28549 = G__28618;
i__28550 = G__28619;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__28620 = cljs.core.conj.call(null,via,t);
var G__28621 = cljs.core.ex_cause.call(null,t);
via = G__28620;
t = G__28621;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__28624 = datafied_throwable;
var map__28624__$1 = (((((!((map__28624 == null))))?(((((map__28624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28624):map__28624);
var via = cljs.core.get.call(null,map__28624__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__28624__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__28624__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28625 = cljs.core.last.call(null,via);
var map__28625__$1 = (((((!((map__28625 == null))))?(((((map__28625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28625):map__28625);
var type = cljs.core.get.call(null,map__28625__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28625__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__28625__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28626 = data;
var map__28626__$1 = (((((!((map__28626 == null))))?(((((map__28626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28626):map__28626);
var problems = cljs.core.get.call(null,map__28626__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__28626__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__28626__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28627 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__28627__$1 = (((((!((map__28627 == null))))?(((((map__28627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28627):map__28627);
var top_data = map__28627__$1;
var source = cljs.core.get.call(null,map__28627__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__28632 = phase;
var G__28632__$1 = (((G__28632 instanceof cljs.core.Keyword))?G__28632.fqn:null);
switch (G__28632__$1) {
case "read-source":
var map__28633 = data;
var map__28633__$1 = (((((!((map__28633 == null))))?(((((map__28633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28633):map__28633);
var line = cljs.core.get.call(null,map__28633__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28633__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28635 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__28635__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28635,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28635);
var G__28635__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28635__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28635__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28635__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28635__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28636 = top_data;
var G__28636__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28636,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28636);
var G__28636__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28636__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28636__$1);
var G__28636__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28636__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28636__$2);
var G__28636__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28636__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28636__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28636__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28636__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28637 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28637,(0),null);
var method = cljs.core.nth.call(null,vec__28637,(1),null);
var file = cljs.core.nth.call(null,vec__28637,(2),null);
var line = cljs.core.nth.call(null,vec__28637,(3),null);
var G__28640 = top_data;
var G__28640__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__28640,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28640);
var G__28640__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__28640__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28640__$1);
var G__28640__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__28640__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28640__$2);
var G__28640__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28640__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28640__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28640__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28640__$4;
}

break;
case "execution":
var vec__28641 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28641,(0),null);
var method = cljs.core.nth.call(null,vec__28641,(1),null);
var file = cljs.core.nth.call(null,vec__28641,(2),null);
var line = cljs.core.nth.call(null,vec__28641,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__28641,source__$1,method,file,line,G__28632,G__28632__$1,map__28624,map__28624__$1,via,trace,phase,map__28625,map__28625__$1,type,message,data,map__28626,map__28626__$1,problems,fn,caller,map__28627,map__28627__$1,top_data,source){
return (function (p1__28623_SHARP_){
var or__4131__auto__ = (p1__28623_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__28623_SHARP_);
}
});})(vec__28641,source__$1,method,file,line,G__28632,G__28632__$1,map__28624,map__28624__$1,via,trace,phase,map__28625,map__28625__$1,type,message,data,map__28626,map__28626__$1,problems,fn,caller,map__28627,map__28627__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__28644 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28644__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__28644,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28644);
var G__28644__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28644__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28644__$1);
var G__28644__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__28644__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28644__$2);
var G__28644__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__28644__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28644__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28644__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28644__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28632__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28648){
var map__28649 = p__28648;
var map__28649__$1 = (((((!((map__28649 == null))))?(((((map__28649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28649):map__28649);
var triage_data = map__28649__$1;
var phase = cljs.core.get.call(null,map__28649__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__28649__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__28649__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28649__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__28649__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__28649__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__28649__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__28649__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__28651 = phase;
var G__28651__$1 = (((G__28651 instanceof cljs.core.Keyword))?G__28651.fqn:null);
switch (G__28651__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28652_28661 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28653_28662 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28654_28663 = true;
var _STAR_print_fn_STAR__temp_val__28655_28664 = ((function (_STAR_print_newline_STAR__orig_val__28652_28661,_STAR_print_fn_STAR__orig_val__28653_28662,_STAR_print_newline_STAR__temp_val__28654_28663,sb__4661__auto__,G__28651,G__28651__$1,loc,class_name,simple_class,cause_type,format,map__28649,map__28649__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28652_28661,_STAR_print_fn_STAR__orig_val__28653_28662,_STAR_print_newline_STAR__temp_val__28654_28663,sb__4661__auto__,G__28651,G__28651__$1,loc,class_name,simple_class,cause_type,format,map__28649,map__28649__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28654_28663;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28655_28664;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28652_28661,_STAR_print_fn_STAR__orig_val__28653_28662,_STAR_print_newline_STAR__temp_val__28654_28663,_STAR_print_fn_STAR__temp_val__28655_28664,sb__4661__auto__,G__28651,G__28651__$1,loc,class_name,simple_class,cause_type,format,map__28649,map__28649__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__28652_28661,_STAR_print_fn_STAR__orig_val__28653_28662,_STAR_print_newline_STAR__temp_val__28654_28663,_STAR_print_fn_STAR__temp_val__28655_28664,sb__4661__auto__,G__28651,G__28651__$1,loc,class_name,simple_class,cause_type,format,map__28649,map__28649__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28646_SHARP_){
return cljs.core.dissoc.call(null,p1__28646_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28652_28661,_STAR_print_fn_STAR__orig_val__28653_28662,_STAR_print_newline_STAR__temp_val__28654_28663,_STAR_print_fn_STAR__temp_val__28655_28664,sb__4661__auto__,G__28651,G__28651__$1,loc,class_name,simple_class,cause_type,format,map__28649,map__28649__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28652_28661,_STAR_print_fn_STAR__orig_val__28653_28662,_STAR_print_newline_STAR__temp_val__28654_28663,_STAR_print_fn_STAR__temp_val__28655_28664,sb__4661__auto__,G__28651,G__28651__$1,loc,class_name,simple_class,cause_type,format,map__28649,map__28649__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28653_28662;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28652_28661;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28656_28665 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28657_28666 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28658_28667 = true;
var _STAR_print_fn_STAR__temp_val__28659_28668 = ((function (_STAR_print_newline_STAR__orig_val__28656_28665,_STAR_print_fn_STAR__orig_val__28657_28666,_STAR_print_newline_STAR__temp_val__28658_28667,sb__4661__auto__,G__28651,G__28651__$1,loc,class_name,simple_class,cause_type,format,map__28649,map__28649__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28656_28665,_STAR_print_fn_STAR__orig_val__28657_28666,_STAR_print_newline_STAR__temp_val__28658_28667,sb__4661__auto__,G__28651,G__28651__$1,loc,class_name,simple_class,cause_type,format,map__28649,map__28649__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28658_28667;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28659_28668;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28656_28665,_STAR_print_fn_STAR__orig_val__28657_28666,_STAR_print_newline_STAR__temp_val__28658_28667,_STAR_print_fn_STAR__temp_val__28659_28668,sb__4661__auto__,G__28651,G__28651__$1,loc,class_name,simple_class,cause_type,format,map__28649,map__28649__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__28656_28665,_STAR_print_fn_STAR__orig_val__28657_28666,_STAR_print_newline_STAR__temp_val__28658_28667,_STAR_print_fn_STAR__temp_val__28659_28668,sb__4661__auto__,G__28651,G__28651__$1,loc,class_name,simple_class,cause_type,format,map__28649,map__28649__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28647_SHARP_){
return cljs.core.dissoc.call(null,p1__28647_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28656_28665,_STAR_print_fn_STAR__orig_val__28657_28666,_STAR_print_newline_STAR__temp_val__28658_28667,_STAR_print_fn_STAR__temp_val__28659_28668,sb__4661__auto__,G__28651,G__28651__$1,loc,class_name,simple_class,cause_type,format,map__28649,map__28649__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28656_28665,_STAR_print_fn_STAR__orig_val__28657_28666,_STAR_print_newline_STAR__temp_val__28658_28667,_STAR_print_fn_STAR__temp_val__28659_28668,sb__4661__auto__,G__28651,G__28651__$1,loc,class_name,simple_class,cause_type,format,map__28649,map__28649__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28657_28666;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28656_28665;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28651__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1551192014040

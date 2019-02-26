// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26976_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26976_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26977 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26978 = null;
var count__26979 = (0);
var i__26980 = (0);
while(true){
if((i__26980 < count__26979)){
var n = cljs.core._nth.call(null,chunk__26978,i__26980);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26981 = seq__26977;
var G__26982 = chunk__26978;
var G__26983 = count__26979;
var G__26984 = (i__26980 + (1));
seq__26977 = G__26981;
chunk__26978 = G__26982;
count__26979 = G__26983;
i__26980 = G__26984;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26977);
if(temp__5720__auto__){
var seq__26977__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26977__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26977__$1);
var G__26985 = cljs.core.chunk_rest.call(null,seq__26977__$1);
var G__26986 = c__4550__auto__;
var G__26987 = cljs.core.count.call(null,c__4550__auto__);
var G__26988 = (0);
seq__26977 = G__26985;
chunk__26978 = G__26986;
count__26979 = G__26987;
i__26980 = G__26988;
continue;
} else {
var n = cljs.core.first.call(null,seq__26977__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26989 = cljs.core.next.call(null,seq__26977__$1);
var G__26990 = null;
var G__26991 = (0);
var G__26992 = (0);
seq__26977 = G__26989;
chunk__26978 = G__26990;
count__26979 = G__26991;
i__26980 = G__26992;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__26993){
var vec__26994 = p__26993;
var _ = cljs.core.nth.call(null,vec__26994,(0),null);
var v = cljs.core.nth.call(null,vec__26994,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__26997){
var vec__26998 = p__26997;
var k = cljs.core.nth.call(null,vec__26998,(0),null);
var v = cljs.core.nth.call(null,vec__26998,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27010_27018 = cljs.core.seq.call(null,deps);
var chunk__27011_27019 = null;
var count__27012_27020 = (0);
var i__27013_27021 = (0);
while(true){
if((i__27013_27021 < count__27012_27020)){
var dep_27022 = cljs.core._nth.call(null,chunk__27011_27019,i__27013_27021);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27022;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27022));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27022,(depth + (1)),state);
} else {
}


var G__27023 = seq__27010_27018;
var G__27024 = chunk__27011_27019;
var G__27025 = count__27012_27020;
var G__27026 = (i__27013_27021 + (1));
seq__27010_27018 = G__27023;
chunk__27011_27019 = G__27024;
count__27012_27020 = G__27025;
i__27013_27021 = G__27026;
continue;
} else {
var temp__5720__auto___27027 = cljs.core.seq.call(null,seq__27010_27018);
if(temp__5720__auto___27027){
var seq__27010_27028__$1 = temp__5720__auto___27027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27010_27028__$1)){
var c__4550__auto___27029 = cljs.core.chunk_first.call(null,seq__27010_27028__$1);
var G__27030 = cljs.core.chunk_rest.call(null,seq__27010_27028__$1);
var G__27031 = c__4550__auto___27029;
var G__27032 = cljs.core.count.call(null,c__4550__auto___27029);
var G__27033 = (0);
seq__27010_27018 = G__27030;
chunk__27011_27019 = G__27031;
count__27012_27020 = G__27032;
i__27013_27021 = G__27033;
continue;
} else {
var dep_27034 = cljs.core.first.call(null,seq__27010_27028__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27034;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27034));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27034,(depth + (1)),state);
} else {
}


var G__27035 = cljs.core.next.call(null,seq__27010_27028__$1);
var G__27036 = null;
var G__27037 = (0);
var G__27038 = (0);
seq__27010_27018 = G__27035;
chunk__27011_27019 = G__27036;
count__27012_27020 = G__27037;
i__27013_27021 = G__27038;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27014){
var vec__27015 = p__27014;
var seq__27016 = cljs.core.seq.call(null,vec__27015);
var first__27017 = cljs.core.first.call(null,seq__27016);
var seq__27016__$1 = cljs.core.next.call(null,seq__27016);
var x = first__27017;
var xs = seq__27016__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27015,seq__27016,first__27017,seq__27016__$1,x,xs,get_deps__$1){
return (function (p1__27001_SHARP_){
return clojure.set.difference.call(null,p1__27001_SHARP_,x);
});})(vec__27015,seq__27016,first__27017,seq__27016__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27039 = cljs.core.seq.call(null,provides);
var chunk__27040 = null;
var count__27041 = (0);
var i__27042 = (0);
while(true){
if((i__27042 < count__27041)){
var prov = cljs.core._nth.call(null,chunk__27040,i__27042);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27051_27059 = cljs.core.seq.call(null,requires);
var chunk__27052_27060 = null;
var count__27053_27061 = (0);
var i__27054_27062 = (0);
while(true){
if((i__27054_27062 < count__27053_27061)){
var req_27063 = cljs.core._nth.call(null,chunk__27052_27060,i__27054_27062);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27063,prov);


var G__27064 = seq__27051_27059;
var G__27065 = chunk__27052_27060;
var G__27066 = count__27053_27061;
var G__27067 = (i__27054_27062 + (1));
seq__27051_27059 = G__27064;
chunk__27052_27060 = G__27065;
count__27053_27061 = G__27066;
i__27054_27062 = G__27067;
continue;
} else {
var temp__5720__auto___27068 = cljs.core.seq.call(null,seq__27051_27059);
if(temp__5720__auto___27068){
var seq__27051_27069__$1 = temp__5720__auto___27068;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27051_27069__$1)){
var c__4550__auto___27070 = cljs.core.chunk_first.call(null,seq__27051_27069__$1);
var G__27071 = cljs.core.chunk_rest.call(null,seq__27051_27069__$1);
var G__27072 = c__4550__auto___27070;
var G__27073 = cljs.core.count.call(null,c__4550__auto___27070);
var G__27074 = (0);
seq__27051_27059 = G__27071;
chunk__27052_27060 = G__27072;
count__27053_27061 = G__27073;
i__27054_27062 = G__27074;
continue;
} else {
var req_27075 = cljs.core.first.call(null,seq__27051_27069__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27075,prov);


var G__27076 = cljs.core.next.call(null,seq__27051_27069__$1);
var G__27077 = null;
var G__27078 = (0);
var G__27079 = (0);
seq__27051_27059 = G__27076;
chunk__27052_27060 = G__27077;
count__27053_27061 = G__27078;
i__27054_27062 = G__27079;
continue;
}
} else {
}
}
break;
}


var G__27080 = seq__27039;
var G__27081 = chunk__27040;
var G__27082 = count__27041;
var G__27083 = (i__27042 + (1));
seq__27039 = G__27080;
chunk__27040 = G__27081;
count__27041 = G__27082;
i__27042 = G__27083;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27039);
if(temp__5720__auto__){
var seq__27039__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27039__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27039__$1);
var G__27084 = cljs.core.chunk_rest.call(null,seq__27039__$1);
var G__27085 = c__4550__auto__;
var G__27086 = cljs.core.count.call(null,c__4550__auto__);
var G__27087 = (0);
seq__27039 = G__27084;
chunk__27040 = G__27085;
count__27041 = G__27086;
i__27042 = G__27087;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27039__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27055_27088 = cljs.core.seq.call(null,requires);
var chunk__27056_27089 = null;
var count__27057_27090 = (0);
var i__27058_27091 = (0);
while(true){
if((i__27058_27091 < count__27057_27090)){
var req_27092 = cljs.core._nth.call(null,chunk__27056_27089,i__27058_27091);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27092,prov);


var G__27093 = seq__27055_27088;
var G__27094 = chunk__27056_27089;
var G__27095 = count__27057_27090;
var G__27096 = (i__27058_27091 + (1));
seq__27055_27088 = G__27093;
chunk__27056_27089 = G__27094;
count__27057_27090 = G__27095;
i__27058_27091 = G__27096;
continue;
} else {
var temp__5720__auto___27097__$1 = cljs.core.seq.call(null,seq__27055_27088);
if(temp__5720__auto___27097__$1){
var seq__27055_27098__$1 = temp__5720__auto___27097__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27055_27098__$1)){
var c__4550__auto___27099 = cljs.core.chunk_first.call(null,seq__27055_27098__$1);
var G__27100 = cljs.core.chunk_rest.call(null,seq__27055_27098__$1);
var G__27101 = c__4550__auto___27099;
var G__27102 = cljs.core.count.call(null,c__4550__auto___27099);
var G__27103 = (0);
seq__27055_27088 = G__27100;
chunk__27056_27089 = G__27101;
count__27057_27090 = G__27102;
i__27058_27091 = G__27103;
continue;
} else {
var req_27104 = cljs.core.first.call(null,seq__27055_27098__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27104,prov);


var G__27105 = cljs.core.next.call(null,seq__27055_27098__$1);
var G__27106 = null;
var G__27107 = (0);
var G__27108 = (0);
seq__27055_27088 = G__27105;
chunk__27056_27089 = G__27106;
count__27057_27090 = G__27107;
i__27058_27091 = G__27108;
continue;
}
} else {
}
}
break;
}


var G__27109 = cljs.core.next.call(null,seq__27039__$1);
var G__27110 = null;
var G__27111 = (0);
var G__27112 = (0);
seq__27039 = G__27109;
chunk__27040 = G__27110;
count__27041 = G__27111;
i__27042 = G__27112;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27113_27117 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27114_27118 = null;
var count__27115_27119 = (0);
var i__27116_27120 = (0);
while(true){
if((i__27116_27120 < count__27115_27119)){
var ns_27121 = cljs.core._nth.call(null,chunk__27114_27118,i__27116_27120);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27121);


var G__27122 = seq__27113_27117;
var G__27123 = chunk__27114_27118;
var G__27124 = count__27115_27119;
var G__27125 = (i__27116_27120 + (1));
seq__27113_27117 = G__27122;
chunk__27114_27118 = G__27123;
count__27115_27119 = G__27124;
i__27116_27120 = G__27125;
continue;
} else {
var temp__5720__auto___27126 = cljs.core.seq.call(null,seq__27113_27117);
if(temp__5720__auto___27126){
var seq__27113_27127__$1 = temp__5720__auto___27126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27113_27127__$1)){
var c__4550__auto___27128 = cljs.core.chunk_first.call(null,seq__27113_27127__$1);
var G__27129 = cljs.core.chunk_rest.call(null,seq__27113_27127__$1);
var G__27130 = c__4550__auto___27128;
var G__27131 = cljs.core.count.call(null,c__4550__auto___27128);
var G__27132 = (0);
seq__27113_27117 = G__27129;
chunk__27114_27118 = G__27130;
count__27115_27119 = G__27131;
i__27116_27120 = G__27132;
continue;
} else {
var ns_27133 = cljs.core.first.call(null,seq__27113_27127__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27133);


var G__27134 = cljs.core.next.call(null,seq__27113_27127__$1);
var G__27135 = null;
var G__27136 = (0);
var G__27137 = (0);
seq__27113_27117 = G__27134;
chunk__27114_27118 = G__27135;
count__27115_27119 = G__27136;
i__27116_27120 = G__27137;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27138__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27138 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27139__i = 0, G__27139__a = new Array(arguments.length -  0);
while (G__27139__i < G__27139__a.length) {G__27139__a[G__27139__i] = arguments[G__27139__i + 0]; ++G__27139__i;}
  args = new cljs.core.IndexedSeq(G__27139__a,0,null);
} 
return G__27138__delegate.call(this,args);};
G__27138.cljs$lang$maxFixedArity = 0;
G__27138.cljs$lang$applyTo = (function (arglist__27140){
var args = cljs.core.seq(arglist__27140);
return G__27138__delegate(args);
});
G__27138.cljs$core$IFn$_invoke$arity$variadic = G__27138__delegate;
return G__27138;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27141_SHARP_,p2__27142_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27141_SHARP_)),p2__27142_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27143_SHARP_,p2__27144_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27143_SHARP_),p2__27144_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27145 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27145.addCallback(((function (G__27145){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27145))
);

G__27145.addErrback(((function (G__27145){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27145))
);

return G__27145;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27146){if((e27146 instanceof Error)){
var e = e27146;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27146;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27147){if((e27147 instanceof Error)){
var e = e27147;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27147;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27148 = cljs.core._EQ_;
var expr__27149 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27148.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27149))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27148.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27149))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27148.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27149))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27148,expr__27149){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27148,expr__27149))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27151,callback){
var map__27152 = p__27151;
var map__27152__$1 = (((((!((map__27152 == null))))?(((((map__27152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27152):map__27152);
var file_msg = map__27152__$1;
var request_url = cljs.core.get.call(null,map__27152__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27152,map__27152__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27152,map__27152__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto__){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto__){
return (function (state_27190){
var state_val_27191 = (state_27190[(1)]);
if((state_val_27191 === (7))){
var inst_27186 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27192_27218 = state_27190__$1;
(statearr_27192_27218[(2)] = inst_27186);

(statearr_27192_27218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (1))){
var state_27190__$1 = state_27190;
var statearr_27193_27219 = state_27190__$1;
(statearr_27193_27219[(2)] = null);

(statearr_27193_27219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (4))){
var inst_27156 = (state_27190[(7)]);
var inst_27156__$1 = (state_27190[(2)]);
var state_27190__$1 = (function (){var statearr_27194 = state_27190;
(statearr_27194[(7)] = inst_27156__$1);

return statearr_27194;
})();
if(cljs.core.truth_(inst_27156__$1)){
var statearr_27195_27220 = state_27190__$1;
(statearr_27195_27220[(1)] = (5));

} else {
var statearr_27196_27221 = state_27190__$1;
(statearr_27196_27221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (15))){
var inst_27171 = (state_27190[(8)]);
var inst_27169 = (state_27190[(9)]);
var inst_27173 = inst_27171.call(null,inst_27169);
var state_27190__$1 = state_27190;
var statearr_27197_27222 = state_27190__$1;
(statearr_27197_27222[(2)] = inst_27173);

(statearr_27197_27222[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (13))){
var inst_27180 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27198_27223 = state_27190__$1;
(statearr_27198_27223[(2)] = inst_27180);

(statearr_27198_27223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (6))){
var state_27190__$1 = state_27190;
var statearr_27199_27224 = state_27190__$1;
(statearr_27199_27224[(2)] = null);

(statearr_27199_27224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (17))){
var inst_27177 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27200_27225 = state_27190__$1;
(statearr_27200_27225[(2)] = inst_27177);

(statearr_27200_27225[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (3))){
var inst_27188 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27190__$1,inst_27188);
} else {
if((state_val_27191 === (12))){
var state_27190__$1 = state_27190;
var statearr_27201_27226 = state_27190__$1;
(statearr_27201_27226[(2)] = null);

(statearr_27201_27226[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (2))){
var state_27190__$1 = state_27190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27190__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27191 === (11))){
var inst_27161 = (state_27190[(10)]);
var inst_27167 = figwheel.client.file_reloading.blocking_load.call(null,inst_27161);
var state_27190__$1 = state_27190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27190__$1,(14),inst_27167);
} else {
if((state_val_27191 === (9))){
var inst_27161 = (state_27190[(10)]);
var state_27190__$1 = state_27190;
if(cljs.core.truth_(inst_27161)){
var statearr_27202_27227 = state_27190__$1;
(statearr_27202_27227[(1)] = (11));

} else {
var statearr_27203_27228 = state_27190__$1;
(statearr_27203_27228[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (5))){
var inst_27162 = (state_27190[(11)]);
var inst_27156 = (state_27190[(7)]);
var inst_27161 = cljs.core.nth.call(null,inst_27156,(0),null);
var inst_27162__$1 = cljs.core.nth.call(null,inst_27156,(1),null);
var state_27190__$1 = (function (){var statearr_27204 = state_27190;
(statearr_27204[(11)] = inst_27162__$1);

(statearr_27204[(10)] = inst_27161);

return statearr_27204;
})();
if(cljs.core.truth_(inst_27162__$1)){
var statearr_27205_27229 = state_27190__$1;
(statearr_27205_27229[(1)] = (8));

} else {
var statearr_27206_27230 = state_27190__$1;
(statearr_27206_27230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (14))){
var inst_27171 = (state_27190[(8)]);
var inst_27161 = (state_27190[(10)]);
var inst_27169 = (state_27190[(2)]);
var inst_27170 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27171__$1 = cljs.core.get.call(null,inst_27170,inst_27161);
var state_27190__$1 = (function (){var statearr_27207 = state_27190;
(statearr_27207[(8)] = inst_27171__$1);

(statearr_27207[(9)] = inst_27169);

return statearr_27207;
})();
if(cljs.core.truth_(inst_27171__$1)){
var statearr_27208_27231 = state_27190__$1;
(statearr_27208_27231[(1)] = (15));

} else {
var statearr_27209_27232 = state_27190__$1;
(statearr_27209_27232[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (16))){
var inst_27169 = (state_27190[(9)]);
var inst_27175 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27169);
var state_27190__$1 = state_27190;
var statearr_27210_27233 = state_27190__$1;
(statearr_27210_27233[(2)] = inst_27175);

(statearr_27210_27233[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (10))){
var inst_27182 = (state_27190[(2)]);
var state_27190__$1 = (function (){var statearr_27211 = state_27190;
(statearr_27211[(12)] = inst_27182);

return statearr_27211;
})();
var statearr_27212_27234 = state_27190__$1;
(statearr_27212_27234[(2)] = null);

(statearr_27212_27234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (8))){
var inst_27162 = (state_27190[(11)]);
var inst_27164 = eval(inst_27162);
var state_27190__$1 = state_27190;
var statearr_27213_27235 = state_27190__$1;
(statearr_27213_27235[(2)] = inst_27164);

(statearr_27213_27235[(1)] = (10));


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
});})(c__23535__auto__))
;
return ((function (switch__23475__auto__,c__23535__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23476__auto__ = null;
var figwheel$client$file_reloading$state_machine__23476__auto____0 = (function (){
var statearr_27214 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27214[(0)] = figwheel$client$file_reloading$state_machine__23476__auto__);

(statearr_27214[(1)] = (1));

return statearr_27214;
});
var figwheel$client$file_reloading$state_machine__23476__auto____1 = (function (state_27190){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_27190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e27215){if((e27215 instanceof Object)){
var ex__23479__auto__ = e27215;
var statearr_27216_27236 = state_27190;
(statearr_27216_27236[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27237 = state_27190;
state_27190 = G__27237;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23476__auto__ = function(state_27190){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23476__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23476__auto____1.call(this,state_27190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23476__auto____0;
figwheel$client$file_reloading$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23476__auto____1;
return figwheel$client$file_reloading$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto__))
})();
var state__23537__auto__ = (function (){var statearr_27217 = f__23536__auto__.call(null);
(statearr_27217[(6)] = c__23535__auto__);

return statearr_27217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto__))
);

return c__23535__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27239 = arguments.length;
switch (G__27239) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27241,callback){
var map__27242 = p__27241;
var map__27242__$1 = (((((!((map__27242 == null))))?(((((map__27242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27242):map__27242);
var file_msg = map__27242__$1;
var namespace = cljs.core.get.call(null,map__27242__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27242,map__27242__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27242,map__27242__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27244){
var map__27245 = p__27244;
var map__27245__$1 = (((((!((map__27245 == null))))?(((((map__27245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27245):map__27245);
var file_msg = map__27245__$1;
var namespace = cljs.core.get.call(null,map__27245__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27247){
var map__27248 = p__27247;
var map__27248__$1 = (((((!((map__27248 == null))))?(((((map__27248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27248):map__27248);
var file_msg = map__27248__$1;
var namespace = cljs.core.get.call(null,map__27248__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27250,callback){
var map__27251 = p__27250;
var map__27251__$1 = (((((!((map__27251 == null))))?(((((map__27251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27251):map__27251);
var file_msg = map__27251__$1;
var request_url = cljs.core.get.call(null,map__27251__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27251__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23535__auto___27301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto___27301,out){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto___27301,out){
return (function (state_27286){
var state_val_27287 = (state_27286[(1)]);
if((state_val_27287 === (1))){
var inst_27260 = cljs.core.seq.call(null,files);
var inst_27261 = cljs.core.first.call(null,inst_27260);
var inst_27262 = cljs.core.next.call(null,inst_27260);
var inst_27263 = files;
var state_27286__$1 = (function (){var statearr_27288 = state_27286;
(statearr_27288[(7)] = inst_27263);

(statearr_27288[(8)] = inst_27261);

(statearr_27288[(9)] = inst_27262);

return statearr_27288;
})();
var statearr_27289_27302 = state_27286__$1;
(statearr_27289_27302[(2)] = null);

(statearr_27289_27302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (2))){
var inst_27263 = (state_27286[(7)]);
var inst_27269 = (state_27286[(10)]);
var inst_27268 = cljs.core.seq.call(null,inst_27263);
var inst_27269__$1 = cljs.core.first.call(null,inst_27268);
var inst_27270 = cljs.core.next.call(null,inst_27268);
var inst_27271 = (inst_27269__$1 == null);
var inst_27272 = cljs.core.not.call(null,inst_27271);
var state_27286__$1 = (function (){var statearr_27290 = state_27286;
(statearr_27290[(11)] = inst_27270);

(statearr_27290[(10)] = inst_27269__$1);

return statearr_27290;
})();
if(inst_27272){
var statearr_27291_27303 = state_27286__$1;
(statearr_27291_27303[(1)] = (4));

} else {
var statearr_27292_27304 = state_27286__$1;
(statearr_27292_27304[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (3))){
var inst_27284 = (state_27286[(2)]);
var state_27286__$1 = state_27286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27286__$1,inst_27284);
} else {
if((state_val_27287 === (4))){
var inst_27269 = (state_27286[(10)]);
var inst_27274 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27269);
var state_27286__$1 = state_27286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27286__$1,(7),inst_27274);
} else {
if((state_val_27287 === (5))){
var inst_27280 = cljs.core.async.close_BANG_.call(null,out);
var state_27286__$1 = state_27286;
var statearr_27293_27305 = state_27286__$1;
(statearr_27293_27305[(2)] = inst_27280);

(statearr_27293_27305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (6))){
var inst_27282 = (state_27286[(2)]);
var state_27286__$1 = state_27286;
var statearr_27294_27306 = state_27286__$1;
(statearr_27294_27306[(2)] = inst_27282);

(statearr_27294_27306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27287 === (7))){
var inst_27270 = (state_27286[(11)]);
var inst_27276 = (state_27286[(2)]);
var inst_27277 = cljs.core.async.put_BANG_.call(null,out,inst_27276);
var inst_27263 = inst_27270;
var state_27286__$1 = (function (){var statearr_27295 = state_27286;
(statearr_27295[(7)] = inst_27263);

(statearr_27295[(12)] = inst_27277);

return statearr_27295;
})();
var statearr_27296_27307 = state_27286__$1;
(statearr_27296_27307[(2)] = null);

(statearr_27296_27307[(1)] = (2));


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
});})(c__23535__auto___27301,out))
;
return ((function (switch__23475__auto__,c__23535__auto___27301,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23476__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23476__auto____0 = (function (){
var statearr_27297 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27297[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23476__auto__);

(statearr_27297[(1)] = (1));

return statearr_27297;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23476__auto____1 = (function (state_27286){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_27286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e27298){if((e27298 instanceof Object)){
var ex__23479__auto__ = e27298;
var statearr_27299_27308 = state_27286;
(statearr_27299_27308[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27309 = state_27286;
state_27286 = G__27309;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23476__auto__ = function(state_27286){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23476__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23476__auto____1.call(this,state_27286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23476__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23476__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto___27301,out))
})();
var state__23537__auto__ = (function (){var statearr_27300 = f__23536__auto__.call(null);
(statearr_27300[(6)] = c__23535__auto___27301);

return statearr_27300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto___27301,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27310,opts){
var map__27311 = p__27310;
var map__27311__$1 = (((((!((map__27311 == null))))?(((((map__27311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27311):map__27311);
var eval_body = cljs.core.get.call(null,map__27311__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27311__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27313){var e = e27313;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27314_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27314_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27315){
var vec__27316 = p__27315;
var k = cljs.core.nth.call(null,vec__27316,(0),null);
var v = cljs.core.nth.call(null,vec__27316,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27319){
var vec__27320 = p__27319;
var k = cljs.core.nth.call(null,vec__27320,(0),null);
var v = cljs.core.nth.call(null,vec__27320,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27326,p__27327){
var map__27328 = p__27326;
var map__27328__$1 = (((((!((map__27328 == null))))?(((((map__27328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27328):map__27328);
var opts = map__27328__$1;
var before_jsload = cljs.core.get.call(null,map__27328__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27328__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27328__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27329 = p__27327;
var map__27329__$1 = (((((!((map__27329 == null))))?(((((map__27329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27329):map__27329);
var msg = map__27329__$1;
var files = cljs.core.get.call(null,map__27329__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27329__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27329__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23535__auto__,map__27328,map__27328__$1,opts,before_jsload,on_jsload,reload_dependents,map__27329,map__27329__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23536__auto__ = (function (){var switch__23475__auto__ = ((function (c__23535__auto__,map__27328,map__27328__$1,opts,before_jsload,on_jsload,reload_dependents,map__27329,map__27329__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27483){
var state_val_27484 = (state_27483[(1)]);
if((state_val_27484 === (7))){
var inst_27346 = (state_27483[(7)]);
var inst_27345 = (state_27483[(8)]);
var inst_27344 = (state_27483[(9)]);
var inst_27343 = (state_27483[(10)]);
var inst_27351 = cljs.core._nth.call(null,inst_27344,inst_27346);
var inst_27352 = figwheel.client.file_reloading.eval_body.call(null,inst_27351,opts);
var inst_27353 = (inst_27346 + (1));
var tmp27485 = inst_27345;
var tmp27486 = inst_27344;
var tmp27487 = inst_27343;
var inst_27343__$1 = tmp27487;
var inst_27344__$1 = tmp27486;
var inst_27345__$1 = tmp27485;
var inst_27346__$1 = inst_27353;
var state_27483__$1 = (function (){var statearr_27488 = state_27483;
(statearr_27488[(11)] = inst_27352);

(statearr_27488[(7)] = inst_27346__$1);

(statearr_27488[(8)] = inst_27345__$1);

(statearr_27488[(9)] = inst_27344__$1);

(statearr_27488[(10)] = inst_27343__$1);

return statearr_27488;
})();
var statearr_27489_27572 = state_27483__$1;
(statearr_27489_27572[(2)] = null);

(statearr_27489_27572[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (20))){
var inst_27386 = (state_27483[(12)]);
var inst_27394 = figwheel.client.file_reloading.sort_files.call(null,inst_27386);
var state_27483__$1 = state_27483;
var statearr_27490_27573 = state_27483__$1;
(statearr_27490_27573[(2)] = inst_27394);

(statearr_27490_27573[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (27))){
var state_27483__$1 = state_27483;
var statearr_27491_27574 = state_27483__$1;
(statearr_27491_27574[(2)] = null);

(statearr_27491_27574[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (1))){
var inst_27335 = (state_27483[(13)]);
var inst_27332 = before_jsload.call(null,files);
var inst_27333 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27334 = (function (){return ((function (inst_27335,inst_27332,inst_27333,state_val_27484,c__23535__auto__,map__27328,map__27328__$1,opts,before_jsload,on_jsload,reload_dependents,map__27329,map__27329__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27323_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27323_SHARP_);
});
;})(inst_27335,inst_27332,inst_27333,state_val_27484,c__23535__auto__,map__27328,map__27328__$1,opts,before_jsload,on_jsload,reload_dependents,map__27329,map__27329__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27335__$1 = cljs.core.filter.call(null,inst_27334,files);
var inst_27336 = cljs.core.not_empty.call(null,inst_27335__$1);
var state_27483__$1 = (function (){var statearr_27492 = state_27483;
(statearr_27492[(13)] = inst_27335__$1);

(statearr_27492[(14)] = inst_27332);

(statearr_27492[(15)] = inst_27333);

return statearr_27492;
})();
if(cljs.core.truth_(inst_27336)){
var statearr_27493_27575 = state_27483__$1;
(statearr_27493_27575[(1)] = (2));

} else {
var statearr_27494_27576 = state_27483__$1;
(statearr_27494_27576[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (24))){
var state_27483__$1 = state_27483;
var statearr_27495_27577 = state_27483__$1;
(statearr_27495_27577[(2)] = null);

(statearr_27495_27577[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (39))){
var inst_27436 = (state_27483[(16)]);
var state_27483__$1 = state_27483;
var statearr_27496_27578 = state_27483__$1;
(statearr_27496_27578[(2)] = inst_27436);

(statearr_27496_27578[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (46))){
var inst_27478 = (state_27483[(2)]);
var state_27483__$1 = state_27483;
var statearr_27497_27579 = state_27483__$1;
(statearr_27497_27579[(2)] = inst_27478);

(statearr_27497_27579[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (4))){
var inst_27380 = (state_27483[(2)]);
var inst_27381 = cljs.core.List.EMPTY;
var inst_27382 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27381);
var inst_27383 = (function (){return ((function (inst_27380,inst_27381,inst_27382,state_val_27484,c__23535__auto__,map__27328,map__27328__$1,opts,before_jsload,on_jsload,reload_dependents,map__27329,map__27329__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27324_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27324_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27324_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27324_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_27380,inst_27381,inst_27382,state_val_27484,c__23535__auto__,map__27328,map__27328__$1,opts,before_jsload,on_jsload,reload_dependents,map__27329,map__27329__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27384 = cljs.core.filter.call(null,inst_27383,files);
var inst_27385 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27386 = cljs.core.concat.call(null,inst_27384,inst_27385);
var state_27483__$1 = (function (){var statearr_27498 = state_27483;
(statearr_27498[(12)] = inst_27386);

(statearr_27498[(17)] = inst_27380);

(statearr_27498[(18)] = inst_27382);

return statearr_27498;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27499_27580 = state_27483__$1;
(statearr_27499_27580[(1)] = (16));

} else {
var statearr_27500_27581 = state_27483__$1;
(statearr_27500_27581[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (15))){
var inst_27370 = (state_27483[(2)]);
var state_27483__$1 = state_27483;
var statearr_27501_27582 = state_27483__$1;
(statearr_27501_27582[(2)] = inst_27370);

(statearr_27501_27582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (21))){
var inst_27396 = (state_27483[(19)]);
var inst_27396__$1 = (state_27483[(2)]);
var inst_27397 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27396__$1);
var state_27483__$1 = (function (){var statearr_27502 = state_27483;
(statearr_27502[(19)] = inst_27396__$1);

return statearr_27502;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27483__$1,(22),inst_27397);
} else {
if((state_val_27484 === (31))){
var inst_27481 = (state_27483[(2)]);
var state_27483__$1 = state_27483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27483__$1,inst_27481);
} else {
if((state_val_27484 === (32))){
var inst_27436 = (state_27483[(16)]);
var inst_27441 = inst_27436.cljs$lang$protocol_mask$partition0$;
var inst_27442 = (inst_27441 & (64));
var inst_27443 = inst_27436.cljs$core$ISeq$;
var inst_27444 = (cljs.core.PROTOCOL_SENTINEL === inst_27443);
var inst_27445 = ((inst_27442) || (inst_27444));
var state_27483__$1 = state_27483;
if(cljs.core.truth_(inst_27445)){
var statearr_27503_27583 = state_27483__$1;
(statearr_27503_27583[(1)] = (35));

} else {
var statearr_27504_27584 = state_27483__$1;
(statearr_27504_27584[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (40))){
var inst_27458 = (state_27483[(20)]);
var inst_27457 = (state_27483[(2)]);
var inst_27458__$1 = cljs.core.get.call(null,inst_27457,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27459 = cljs.core.get.call(null,inst_27457,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27460 = cljs.core.not_empty.call(null,inst_27458__$1);
var state_27483__$1 = (function (){var statearr_27505 = state_27483;
(statearr_27505[(21)] = inst_27459);

(statearr_27505[(20)] = inst_27458__$1);

return statearr_27505;
})();
if(cljs.core.truth_(inst_27460)){
var statearr_27506_27585 = state_27483__$1;
(statearr_27506_27585[(1)] = (41));

} else {
var statearr_27507_27586 = state_27483__$1;
(statearr_27507_27586[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (33))){
var state_27483__$1 = state_27483;
var statearr_27508_27587 = state_27483__$1;
(statearr_27508_27587[(2)] = false);

(statearr_27508_27587[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (13))){
var inst_27356 = (state_27483[(22)]);
var inst_27360 = cljs.core.chunk_first.call(null,inst_27356);
var inst_27361 = cljs.core.chunk_rest.call(null,inst_27356);
var inst_27362 = cljs.core.count.call(null,inst_27360);
var inst_27343 = inst_27361;
var inst_27344 = inst_27360;
var inst_27345 = inst_27362;
var inst_27346 = (0);
var state_27483__$1 = (function (){var statearr_27509 = state_27483;
(statearr_27509[(7)] = inst_27346);

(statearr_27509[(8)] = inst_27345);

(statearr_27509[(9)] = inst_27344);

(statearr_27509[(10)] = inst_27343);

return statearr_27509;
})();
var statearr_27510_27588 = state_27483__$1;
(statearr_27510_27588[(2)] = null);

(statearr_27510_27588[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (22))){
var inst_27404 = (state_27483[(23)]);
var inst_27396 = (state_27483[(19)]);
var inst_27399 = (state_27483[(24)]);
var inst_27400 = (state_27483[(25)]);
var inst_27399__$1 = (state_27483[(2)]);
var inst_27400__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27399__$1);
var inst_27401 = (function (){var all_files = inst_27396;
var res_SINGLEQUOTE_ = inst_27399__$1;
var res = inst_27400__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27404,inst_27396,inst_27399,inst_27400,inst_27399__$1,inst_27400__$1,state_val_27484,c__23535__auto__,map__27328,map__27328__$1,opts,before_jsload,on_jsload,reload_dependents,map__27329,map__27329__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27325_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27325_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27404,inst_27396,inst_27399,inst_27400,inst_27399__$1,inst_27400__$1,state_val_27484,c__23535__auto__,map__27328,map__27328__$1,opts,before_jsload,on_jsload,reload_dependents,map__27329,map__27329__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27402 = cljs.core.filter.call(null,inst_27401,inst_27399__$1);
var inst_27403 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27404__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27403);
var inst_27405 = cljs.core.not_empty.call(null,inst_27404__$1);
var state_27483__$1 = (function (){var statearr_27511 = state_27483;
(statearr_27511[(26)] = inst_27402);

(statearr_27511[(23)] = inst_27404__$1);

(statearr_27511[(24)] = inst_27399__$1);

(statearr_27511[(25)] = inst_27400__$1);

return statearr_27511;
})();
if(cljs.core.truth_(inst_27405)){
var statearr_27512_27589 = state_27483__$1;
(statearr_27512_27589[(1)] = (23));

} else {
var statearr_27513_27590 = state_27483__$1;
(statearr_27513_27590[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (36))){
var state_27483__$1 = state_27483;
var statearr_27514_27591 = state_27483__$1;
(statearr_27514_27591[(2)] = false);

(statearr_27514_27591[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (41))){
var inst_27458 = (state_27483[(20)]);
var inst_27462 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27463 = cljs.core.map.call(null,inst_27462,inst_27458);
var inst_27464 = cljs.core.pr_str.call(null,inst_27463);
var inst_27465 = ["figwheel-no-load meta-data: ",inst_27464].join('');
var inst_27466 = figwheel.client.utils.log.call(null,inst_27465);
var state_27483__$1 = state_27483;
var statearr_27515_27592 = state_27483__$1;
(statearr_27515_27592[(2)] = inst_27466);

(statearr_27515_27592[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (43))){
var inst_27459 = (state_27483[(21)]);
var inst_27469 = (state_27483[(2)]);
var inst_27470 = cljs.core.not_empty.call(null,inst_27459);
var state_27483__$1 = (function (){var statearr_27516 = state_27483;
(statearr_27516[(27)] = inst_27469);

return statearr_27516;
})();
if(cljs.core.truth_(inst_27470)){
var statearr_27517_27593 = state_27483__$1;
(statearr_27517_27593[(1)] = (44));

} else {
var statearr_27518_27594 = state_27483__$1;
(statearr_27518_27594[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (29))){
var inst_27402 = (state_27483[(26)]);
var inst_27436 = (state_27483[(16)]);
var inst_27404 = (state_27483[(23)]);
var inst_27396 = (state_27483[(19)]);
var inst_27399 = (state_27483[(24)]);
var inst_27400 = (state_27483[(25)]);
var inst_27432 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27435 = (function (){var all_files = inst_27396;
var res_SINGLEQUOTE_ = inst_27399;
var res = inst_27400;
var files_not_loaded = inst_27402;
var dependencies_that_loaded = inst_27404;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27402,inst_27436,inst_27404,inst_27396,inst_27399,inst_27400,inst_27432,state_val_27484,c__23535__auto__,map__27328,map__27328__$1,opts,before_jsload,on_jsload,reload_dependents,map__27329,map__27329__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27434){
var map__27519 = p__27434;
var map__27519__$1 = (((((!((map__27519 == null))))?(((((map__27519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27519):map__27519);
var namespace = cljs.core.get.call(null,map__27519__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27402,inst_27436,inst_27404,inst_27396,inst_27399,inst_27400,inst_27432,state_val_27484,c__23535__auto__,map__27328,map__27328__$1,opts,before_jsload,on_jsload,reload_dependents,map__27329,map__27329__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27436__$1 = cljs.core.group_by.call(null,inst_27435,inst_27402);
var inst_27438 = (inst_27436__$1 == null);
var inst_27439 = cljs.core.not.call(null,inst_27438);
var state_27483__$1 = (function (){var statearr_27521 = state_27483;
(statearr_27521[(16)] = inst_27436__$1);

(statearr_27521[(28)] = inst_27432);

return statearr_27521;
})();
if(inst_27439){
var statearr_27522_27595 = state_27483__$1;
(statearr_27522_27595[(1)] = (32));

} else {
var statearr_27523_27596 = state_27483__$1;
(statearr_27523_27596[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (44))){
var inst_27459 = (state_27483[(21)]);
var inst_27472 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27459);
var inst_27473 = cljs.core.pr_str.call(null,inst_27472);
var inst_27474 = ["not required: ",inst_27473].join('');
var inst_27475 = figwheel.client.utils.log.call(null,inst_27474);
var state_27483__$1 = state_27483;
var statearr_27524_27597 = state_27483__$1;
(statearr_27524_27597[(2)] = inst_27475);

(statearr_27524_27597[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (6))){
var inst_27377 = (state_27483[(2)]);
var state_27483__$1 = state_27483;
var statearr_27525_27598 = state_27483__$1;
(statearr_27525_27598[(2)] = inst_27377);

(statearr_27525_27598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (28))){
var inst_27402 = (state_27483[(26)]);
var inst_27429 = (state_27483[(2)]);
var inst_27430 = cljs.core.not_empty.call(null,inst_27402);
var state_27483__$1 = (function (){var statearr_27526 = state_27483;
(statearr_27526[(29)] = inst_27429);

return statearr_27526;
})();
if(cljs.core.truth_(inst_27430)){
var statearr_27527_27599 = state_27483__$1;
(statearr_27527_27599[(1)] = (29));

} else {
var statearr_27528_27600 = state_27483__$1;
(statearr_27528_27600[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (25))){
var inst_27400 = (state_27483[(25)]);
var inst_27416 = (state_27483[(2)]);
var inst_27417 = cljs.core.not_empty.call(null,inst_27400);
var state_27483__$1 = (function (){var statearr_27529 = state_27483;
(statearr_27529[(30)] = inst_27416);

return statearr_27529;
})();
if(cljs.core.truth_(inst_27417)){
var statearr_27530_27601 = state_27483__$1;
(statearr_27530_27601[(1)] = (26));

} else {
var statearr_27531_27602 = state_27483__$1;
(statearr_27531_27602[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (34))){
var inst_27452 = (state_27483[(2)]);
var state_27483__$1 = state_27483;
if(cljs.core.truth_(inst_27452)){
var statearr_27532_27603 = state_27483__$1;
(statearr_27532_27603[(1)] = (38));

} else {
var statearr_27533_27604 = state_27483__$1;
(statearr_27533_27604[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (17))){
var state_27483__$1 = state_27483;
var statearr_27534_27605 = state_27483__$1;
(statearr_27534_27605[(2)] = recompile_dependents);

(statearr_27534_27605[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (3))){
var state_27483__$1 = state_27483;
var statearr_27535_27606 = state_27483__$1;
(statearr_27535_27606[(2)] = null);

(statearr_27535_27606[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (12))){
var inst_27373 = (state_27483[(2)]);
var state_27483__$1 = state_27483;
var statearr_27536_27607 = state_27483__$1;
(statearr_27536_27607[(2)] = inst_27373);

(statearr_27536_27607[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (2))){
var inst_27335 = (state_27483[(13)]);
var inst_27342 = cljs.core.seq.call(null,inst_27335);
var inst_27343 = inst_27342;
var inst_27344 = null;
var inst_27345 = (0);
var inst_27346 = (0);
var state_27483__$1 = (function (){var statearr_27537 = state_27483;
(statearr_27537[(7)] = inst_27346);

(statearr_27537[(8)] = inst_27345);

(statearr_27537[(9)] = inst_27344);

(statearr_27537[(10)] = inst_27343);

return statearr_27537;
})();
var statearr_27538_27608 = state_27483__$1;
(statearr_27538_27608[(2)] = null);

(statearr_27538_27608[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (23))){
var inst_27402 = (state_27483[(26)]);
var inst_27404 = (state_27483[(23)]);
var inst_27396 = (state_27483[(19)]);
var inst_27399 = (state_27483[(24)]);
var inst_27400 = (state_27483[(25)]);
var inst_27407 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27409 = (function (){var all_files = inst_27396;
var res_SINGLEQUOTE_ = inst_27399;
var res = inst_27400;
var files_not_loaded = inst_27402;
var dependencies_that_loaded = inst_27404;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27402,inst_27404,inst_27396,inst_27399,inst_27400,inst_27407,state_val_27484,c__23535__auto__,map__27328,map__27328__$1,opts,before_jsload,on_jsload,reload_dependents,map__27329,map__27329__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27408){
var map__27539 = p__27408;
var map__27539__$1 = (((((!((map__27539 == null))))?(((((map__27539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27539):map__27539);
var request_url = cljs.core.get.call(null,map__27539__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27402,inst_27404,inst_27396,inst_27399,inst_27400,inst_27407,state_val_27484,c__23535__auto__,map__27328,map__27328__$1,opts,before_jsload,on_jsload,reload_dependents,map__27329,map__27329__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27410 = cljs.core.reverse.call(null,inst_27404);
var inst_27411 = cljs.core.map.call(null,inst_27409,inst_27410);
var inst_27412 = cljs.core.pr_str.call(null,inst_27411);
var inst_27413 = figwheel.client.utils.log.call(null,inst_27412);
var state_27483__$1 = (function (){var statearr_27541 = state_27483;
(statearr_27541[(31)] = inst_27407);

return statearr_27541;
})();
var statearr_27542_27609 = state_27483__$1;
(statearr_27542_27609[(2)] = inst_27413);

(statearr_27542_27609[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (35))){
var state_27483__$1 = state_27483;
var statearr_27543_27610 = state_27483__$1;
(statearr_27543_27610[(2)] = true);

(statearr_27543_27610[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (19))){
var inst_27386 = (state_27483[(12)]);
var inst_27392 = figwheel.client.file_reloading.expand_files.call(null,inst_27386);
var state_27483__$1 = state_27483;
var statearr_27544_27611 = state_27483__$1;
(statearr_27544_27611[(2)] = inst_27392);

(statearr_27544_27611[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (11))){
var state_27483__$1 = state_27483;
var statearr_27545_27612 = state_27483__$1;
(statearr_27545_27612[(2)] = null);

(statearr_27545_27612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (9))){
var inst_27375 = (state_27483[(2)]);
var state_27483__$1 = state_27483;
var statearr_27546_27613 = state_27483__$1;
(statearr_27546_27613[(2)] = inst_27375);

(statearr_27546_27613[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (5))){
var inst_27346 = (state_27483[(7)]);
var inst_27345 = (state_27483[(8)]);
var inst_27348 = (inst_27346 < inst_27345);
var inst_27349 = inst_27348;
var state_27483__$1 = state_27483;
if(cljs.core.truth_(inst_27349)){
var statearr_27547_27614 = state_27483__$1;
(statearr_27547_27614[(1)] = (7));

} else {
var statearr_27548_27615 = state_27483__$1;
(statearr_27548_27615[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (14))){
var inst_27356 = (state_27483[(22)]);
var inst_27365 = cljs.core.first.call(null,inst_27356);
var inst_27366 = figwheel.client.file_reloading.eval_body.call(null,inst_27365,opts);
var inst_27367 = cljs.core.next.call(null,inst_27356);
var inst_27343 = inst_27367;
var inst_27344 = null;
var inst_27345 = (0);
var inst_27346 = (0);
var state_27483__$1 = (function (){var statearr_27549 = state_27483;
(statearr_27549[(7)] = inst_27346);

(statearr_27549[(8)] = inst_27345);

(statearr_27549[(9)] = inst_27344);

(statearr_27549[(10)] = inst_27343);

(statearr_27549[(32)] = inst_27366);

return statearr_27549;
})();
var statearr_27550_27616 = state_27483__$1;
(statearr_27550_27616[(2)] = null);

(statearr_27550_27616[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (45))){
var state_27483__$1 = state_27483;
var statearr_27551_27617 = state_27483__$1;
(statearr_27551_27617[(2)] = null);

(statearr_27551_27617[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (26))){
var inst_27402 = (state_27483[(26)]);
var inst_27404 = (state_27483[(23)]);
var inst_27396 = (state_27483[(19)]);
var inst_27399 = (state_27483[(24)]);
var inst_27400 = (state_27483[(25)]);
var inst_27419 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27421 = (function (){var all_files = inst_27396;
var res_SINGLEQUOTE_ = inst_27399;
var res = inst_27400;
var files_not_loaded = inst_27402;
var dependencies_that_loaded = inst_27404;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27402,inst_27404,inst_27396,inst_27399,inst_27400,inst_27419,state_val_27484,c__23535__auto__,map__27328,map__27328__$1,opts,before_jsload,on_jsload,reload_dependents,map__27329,map__27329__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27420){
var map__27552 = p__27420;
var map__27552__$1 = (((((!((map__27552 == null))))?(((((map__27552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27552):map__27552);
var namespace = cljs.core.get.call(null,map__27552__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27552__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27402,inst_27404,inst_27396,inst_27399,inst_27400,inst_27419,state_val_27484,c__23535__auto__,map__27328,map__27328__$1,opts,before_jsload,on_jsload,reload_dependents,map__27329,map__27329__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27422 = cljs.core.map.call(null,inst_27421,inst_27400);
var inst_27423 = cljs.core.pr_str.call(null,inst_27422);
var inst_27424 = figwheel.client.utils.log.call(null,inst_27423);
var inst_27425 = (function (){var all_files = inst_27396;
var res_SINGLEQUOTE_ = inst_27399;
var res = inst_27400;
var files_not_loaded = inst_27402;
var dependencies_that_loaded = inst_27404;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27402,inst_27404,inst_27396,inst_27399,inst_27400,inst_27419,inst_27421,inst_27422,inst_27423,inst_27424,state_val_27484,c__23535__auto__,map__27328,map__27328__$1,opts,before_jsload,on_jsload,reload_dependents,map__27329,map__27329__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27402,inst_27404,inst_27396,inst_27399,inst_27400,inst_27419,inst_27421,inst_27422,inst_27423,inst_27424,state_val_27484,c__23535__auto__,map__27328,map__27328__$1,opts,before_jsload,on_jsload,reload_dependents,map__27329,map__27329__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27426 = setTimeout(inst_27425,(10));
var state_27483__$1 = (function (){var statearr_27554 = state_27483;
(statearr_27554[(33)] = inst_27419);

(statearr_27554[(34)] = inst_27424);

return statearr_27554;
})();
var statearr_27555_27618 = state_27483__$1;
(statearr_27555_27618[(2)] = inst_27426);

(statearr_27555_27618[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (16))){
var state_27483__$1 = state_27483;
var statearr_27556_27619 = state_27483__$1;
(statearr_27556_27619[(2)] = reload_dependents);

(statearr_27556_27619[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (38))){
var inst_27436 = (state_27483[(16)]);
var inst_27454 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27436);
var state_27483__$1 = state_27483;
var statearr_27557_27620 = state_27483__$1;
(statearr_27557_27620[(2)] = inst_27454);

(statearr_27557_27620[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (30))){
var state_27483__$1 = state_27483;
var statearr_27558_27621 = state_27483__$1;
(statearr_27558_27621[(2)] = null);

(statearr_27558_27621[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (10))){
var inst_27356 = (state_27483[(22)]);
var inst_27358 = cljs.core.chunked_seq_QMARK_.call(null,inst_27356);
var state_27483__$1 = state_27483;
if(inst_27358){
var statearr_27559_27622 = state_27483__$1;
(statearr_27559_27622[(1)] = (13));

} else {
var statearr_27560_27623 = state_27483__$1;
(statearr_27560_27623[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (18))){
var inst_27390 = (state_27483[(2)]);
var state_27483__$1 = state_27483;
if(cljs.core.truth_(inst_27390)){
var statearr_27561_27624 = state_27483__$1;
(statearr_27561_27624[(1)] = (19));

} else {
var statearr_27562_27625 = state_27483__$1;
(statearr_27562_27625[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (42))){
var state_27483__$1 = state_27483;
var statearr_27563_27626 = state_27483__$1;
(statearr_27563_27626[(2)] = null);

(statearr_27563_27626[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (37))){
var inst_27449 = (state_27483[(2)]);
var state_27483__$1 = state_27483;
var statearr_27564_27627 = state_27483__$1;
(statearr_27564_27627[(2)] = inst_27449);

(statearr_27564_27627[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (8))){
var inst_27356 = (state_27483[(22)]);
var inst_27343 = (state_27483[(10)]);
var inst_27356__$1 = cljs.core.seq.call(null,inst_27343);
var state_27483__$1 = (function (){var statearr_27565 = state_27483;
(statearr_27565[(22)] = inst_27356__$1);

return statearr_27565;
})();
if(inst_27356__$1){
var statearr_27566_27628 = state_27483__$1;
(statearr_27566_27628[(1)] = (10));

} else {
var statearr_27567_27629 = state_27483__$1;
(statearr_27567_27629[(1)] = (11));

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
}
});})(c__23535__auto__,map__27328,map__27328__$1,opts,before_jsload,on_jsload,reload_dependents,map__27329,map__27329__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23475__auto__,c__23535__auto__,map__27328,map__27328__$1,opts,before_jsload,on_jsload,reload_dependents,map__27329,map__27329__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23476__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23476__auto____0 = (function (){
var statearr_27568 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27568[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23476__auto__);

(statearr_27568[(1)] = (1));

return statearr_27568;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23476__auto____1 = (function (state_27483){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_27483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e27569){if((e27569 instanceof Object)){
var ex__23479__auto__ = e27569;
var statearr_27570_27630 = state_27483;
(statearr_27570_27630[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27631 = state_27483;
state_27483 = G__27631;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23476__auto__ = function(state_27483){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23476__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23476__auto____1.call(this,state_27483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23476__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23476__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23535__auto__,map__27328,map__27328__$1,opts,before_jsload,on_jsload,reload_dependents,map__27329,map__27329__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23537__auto__ = (function (){var statearr_27571 = f__23536__auto__.call(null);
(statearr_27571[(6)] = c__23535__auto__);

return statearr_27571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23537__auto__);
});})(c__23535__auto__,map__27328,map__27328__$1,opts,before_jsload,on_jsload,reload_dependents,map__27329,map__27329__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23535__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27634,link){
var map__27635 = p__27634;
var map__27635__$1 = (((((!((map__27635 == null))))?(((((map__27635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27635):map__27635);
var file = cljs.core.get.call(null,map__27635__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__27635,map__27635__$1,file){
return (function (p1__27632_SHARP_,p2__27633_SHARP_){
if(cljs.core._EQ_.call(null,p1__27632_SHARP_,p2__27633_SHARP_)){
return p1__27632_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__27635,map__27635__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27638){
var map__27639 = p__27638;
var map__27639__$1 = (((((!((map__27639 == null))))?(((((map__27639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27639):map__27639);
var match_length = cljs.core.get.call(null,map__27639__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27639__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27637_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27637_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27641_SHARP_,p2__27642_SHARP_){
return cljs.core.assoc.call(null,p1__27641_SHARP_,cljs.core.get.call(null,p2__27642_SHARP_,key),p2__27642_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_27643 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27643);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27643);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27644,p__27645){
var map__27646 = p__27644;
var map__27646__$1 = (((((!((map__27646 == null))))?(((((map__27646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27646):map__27646);
var on_cssload = cljs.core.get.call(null,map__27646__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27647 = p__27645;
var map__27647__$1 = (((((!((map__27647 == null))))?(((((map__27647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27647):map__27647);
var files_msg = map__27647__$1;
var files = cljs.core.get.call(null,map__27647__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1551192012010

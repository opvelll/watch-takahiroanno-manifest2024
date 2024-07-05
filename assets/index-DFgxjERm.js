function Hb(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();var Gt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function as(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ub(e){if(e.__esModule)return e;var n=e.default;if(typeof n=="function"){var t=function r(){return this instanceof r?Reflect.construct(n,arguments,this.constructor):n.apply(this,arguments)};t.prototype=n.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),t}var Zb={exports:{}},_u={},Wb={exports:{}},hn={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ls=Symbol.for("react.element"),i5=Symbol.for("react.portal"),a5=Symbol.for("react.fragment"),l5=Symbol.for("react.strict_mode"),s5=Symbol.for("react.profiler"),c5=Symbol.for("react.provider"),u5=Symbol.for("react.context"),d5=Symbol.for("react.forward_ref"),f5=Symbol.for("react.suspense"),m5=Symbol.for("react.memo"),h5=Symbol.for("react.lazy"),T2=Symbol.iterator;function p5(e){return e===null||typeof e!="object"?null:(e=T2&&e[T2]||e["@@iterator"],typeof e=="function"?e:null)}var Vb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xb=Object.assign,Gb={};function Ea(e,n,t){this.props=e,this.context=n,this.refs=Gb,this.updater=t||Vb}Ea.prototype.isReactComponent={};Ea.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Ea.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qb(){}qb.prototype=Ea.prototype;function Mh(e,n,t){this.props=e,this.context=n,this.refs=Gb,this.updater=t||Vb}var Lh=Mh.prototype=new qb;Lh.constructor=Mh;Xb(Lh,Ea.prototype);Lh.isPureReactComponent=!0;var I2=Array.isArray,Kb=Object.prototype.hasOwnProperty,jh={current:null},Qb={key:!0,ref:!0,__self:!0,__source:!0};function Yb(e,n,t){var r,o={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)Kb.call(n,r)&&!Qb.hasOwnProperty(r)&&(o[r]=n[r]);var l=arguments.length-2;if(l===1)o.children=t;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:ls,type:e,key:i,ref:a,props:o,_owner:jh.current}}function g5(e,n){return{$$typeof:ls,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Dh(e){return typeof e=="object"&&e!==null&&e.$$typeof===ls}function b5(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var _2=/\/+/g;function Od(e,n){return typeof e=="object"&&e!==null&&e.key!=null?b5(""+e.key):n.toString(36)}function lc(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ls:case i5:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Od(a,0):r,I2(o)?(t="",e!=null&&(t=e.replace(_2,"$&/")+"/"),lc(o,n,t,"",function(c){return c})):o!=null&&(Dh(o)&&(o=g5(o,t+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(_2,"$&/")+"/")+e)),n.push(o)),1;if(a=0,r=r===""?".":r+":",I2(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Od(i,l);a+=lc(i,n,t,s,o)}else if(s=p5(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Od(i,l++),a+=lc(i,n,t,s,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Ts(e,n,t){if(e==null)return e;var r=[],o=0;return lc(e,r,"","",function(i){return n.call(t,i,o++)}),r}function v5(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Pt={current:null},sc={transition:null},y5={ReactCurrentDispatcher:Pt,ReactCurrentBatchConfig:sc,ReactCurrentOwner:jh};function Jb(){throw Error("act(...) is not supported in production builds of React.")}hn.Children={map:Ts,forEach:function(e,n,t){Ts(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ts(e,function(){n++}),n},toArray:function(e){return Ts(e,function(n){return n})||[]},only:function(e){if(!Dh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};hn.Component=Ea;hn.Fragment=a5;hn.Profiler=s5;hn.PureComponent=Mh;hn.StrictMode=l5;hn.Suspense=f5;hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y5;hn.act=Jb;hn.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xb({},e.props),o=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=jh.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)Kb.call(n,s)&&!Qb.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ls,type:e.type,key:o,ref:i,props:r,_owner:a}};hn.createContext=function(e){return e={$$typeof:u5,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:c5,_context:e},e.Consumer=e};hn.createElement=Yb;hn.createFactory=function(e){var n=Yb.bind(null,e);return n.type=e,n};hn.createRef=function(){return{current:null}};hn.forwardRef=function(e){return{$$typeof:d5,render:e}};hn.isValidElement=Dh;hn.lazy=function(e){return{$$typeof:h5,_payload:{_status:-1,_result:e},_init:v5}};hn.memo=function(e,n){return{$$typeof:m5,type:e,compare:n===void 0?null:n}};hn.startTransition=function(e){var n=sc.transition;sc.transition={};try{e()}finally{sc.transition=n}};hn.unstable_act=Jb;hn.useCallback=function(e,n){return Pt.current.useCallback(e,n)};hn.useContext=function(e){return Pt.current.useContext(e)};hn.useDebugValue=function(){};hn.useDeferredValue=function(e){return Pt.current.useDeferredValue(e)};hn.useEffect=function(e,n){return Pt.current.useEffect(e,n)};hn.useId=function(){return Pt.current.useId()};hn.useImperativeHandle=function(e,n,t){return Pt.current.useImperativeHandle(e,n,t)};hn.useInsertionEffect=function(e,n){return Pt.current.useInsertionEffect(e,n)};hn.useLayoutEffect=function(e,n){return Pt.current.useLayoutEffect(e,n)};hn.useMemo=function(e,n){return Pt.current.useMemo(e,n)};hn.useReducer=function(e,n,t){return Pt.current.useReducer(e,n,t)};hn.useRef=function(e){return Pt.current.useRef(e)};hn.useState=function(e){return Pt.current.useState(e)};hn.useSyncExternalStore=function(e,n,t){return Pt.current.useSyncExternalStore(e,n,t)};hn.useTransition=function(){return Pt.current.useTransition()};hn.version="18.3.1";Wb.exports=hn;var p=Wb.exports;const Pe=as(p),ss=Hb({__proto__:null,default:Pe},[p]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w5=p,k5=Symbol.for("react.element"),C5=Symbol.for("react.fragment"),x5=Object.prototype.hasOwnProperty,S5=w5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E5={key:!0,ref:!0,__self:!0,__source:!0};function e4(e,n,t){var r,o={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)x5.call(n,r)&&!E5.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:k5,type:e,key:i,ref:a,props:o,_owner:S5.current}}_u.Fragment=C5;_u.jsx=e4;_u.jsxs=e4;Zb.exports=_u;var J=Zb.exports,Vf={},n4={exports:{}},Jt={},t4={exports:{}},r4={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(P,W){var x=P.length;P.push(W);e:for(;0<x;){var G=x-1>>>1,Z=P[G];if(0<o(Z,W))P[G]=W,P[x]=Z,x=G;else break e}}function t(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var W=P[0],x=P.pop();if(x!==W){P[0]=x;e:for(var G=0,Z=P.length,T=Z>>>1;G<T;){var Q=2*(G+1)-1,ne=P[Q],N=Q+1,te=P[N];if(0>o(ne,x))N<Z&&0>o(te,ne)?(P[G]=te,P[N]=x,G=N):(P[G]=ne,P[Q]=x,G=Q);else if(N<Z&&0>o(te,x))P[G]=te,P[N]=x,G=N;else break e}}return W}function o(P,W){var x=P.sortIndex-W.sortIndex;return x!==0?x:P.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],d=1,u=null,f=3,m=!1,h=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(P){for(var W=t(c);W!==null;){if(W.callback===null)r(c);else if(W.startTime<=P)r(c),W.sortIndex=W.expirationTime,n(s,W);else break;W=t(c)}}function S(P){if(v=!1,y(P),!h)if(t(s)!==null)h=!0,$(A);else{var W=t(c);W!==null&&O(S,W.startTime-P)}}function A(P,W){h=!1,v&&(v=!1,g(R),R=-1),m=!0;var x=f;try{for(y(W),u=t(s);u!==null&&(!(u.expirationTime>W)||P&&!D());){var G=u.callback;if(typeof G=="function"){u.callback=null,f=u.priorityLevel;var Z=G(u.expirationTime<=W);W=e.unstable_now(),typeof Z=="function"?u.callback=Z:u===t(s)&&r(s),y(W)}else r(s);u=t(s)}if(u!==null)var T=!0;else{var Q=t(c);Q!==null&&O(S,Q.startTime-W),T=!1}return T}finally{u=null,f=x,m=!1}}var w=!1,I=null,R=-1,M=5,_=-1;function D(){return!(e.unstable_now()-_<M)}function H(){if(I!==null){var P=e.unstable_now();_=P;var W=!0;try{W=I(!0,P)}finally{W?j():(w=!1,I=null)}}else w=!1}var j;if(typeof b=="function")j=function(){b(H)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,V=B.port2;B.port1.onmessage=H,j=function(){V.postMessage(null)}}else j=function(){k(H,0)};function $(P){I=P,w||(w=!0,j())}function O(P,W){R=k(function(){P(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){h||m||(h=!0,$(A))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(P){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var x=f;f=W;try{return P()}finally{f=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,W){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var x=f;f=P;try{return W()}finally{f=x}},e.unstable_scheduleCallback=function(P,W,x){var G=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?G+x:G):x=G,P){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=x+Z,P={id:d++,callback:W,priorityLevel:P,startTime:x,expirationTime:Z,sortIndex:-1},x>G?(P.sortIndex=x,n(c,P),t(s)===null&&P===t(c)&&(v?(g(R),R=-1):v=!0,O(S,x-G))):(P.sortIndex=Z,n(s,P),h||m||(h=!0,$(A))),P},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(P){var W=f;return function(){var x=f;f=W;try{return P.apply(this,arguments)}finally{f=x}}}})(r4);t4.exports=r4;var A5=t4.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T5=p,Qt=A5;function ue(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o4=new Set,Pl={};function Si(e,n){fa(e,n),fa(e+"Capture",n)}function fa(e,n){for(Pl[e]=n,e=0;e<n.length;e++)o4.add(n[e])}var to=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xf=Object.prototype.hasOwnProperty,I5=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P2={},O2={};function _5(e){return Xf.call(O2,e)?!0:Xf.call(P2,e)?!1:I5.test(e)?O2[e]=!0:(P2[e]=!0,!1)}function P5(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function O5(e,n,t,r){if(n===null||typeof n>"u"||P5(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ot(e,n,t,r,o,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pt[e]=new Ot(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];pt[n]=new Ot(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pt[e]=new Ot(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pt[e]=new Ot(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pt[e]=new Ot(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pt[e]=new Ot(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pt[e]=new Ot(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pt[e]=new Ot(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pt[e]=new Ot(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bh=/[\-:]([a-z])/g;function $h(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Bh,$h);pt[n]=new Ot(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Bh,$h);pt[n]=new Ot(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Bh,$h);pt[n]=new Ot(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pt[e]=new Ot(e,1,!1,e.toLowerCase(),null,!1,!1)});pt.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pt[e]=new Ot(e,1,!1,e.toLowerCase(),null,!0,!0)});function zh(e,n,t,r){var o=pt.hasOwnProperty(n)?pt[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(O5(n,t,o,r)&&(t=null),r||o===null?_5(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var lo=T5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Is=Symbol.for("react.element"),Zi=Symbol.for("react.portal"),Wi=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),Gf=Symbol.for("react.profiler"),i4=Symbol.for("react.provider"),a4=Symbol.for("react.context"),Uh=Symbol.for("react.forward_ref"),qf=Symbol.for("react.suspense"),Kf=Symbol.for("react.suspense_list"),Zh=Symbol.for("react.memo"),vo=Symbol.for("react.lazy"),l4=Symbol.for("react.offscreen"),F2=Symbol.iterator;function Ua(e){return e===null||typeof e!="object"?null:(e=F2&&e[F2]||e["@@iterator"],typeof e=="function"?e:null)}var Hn=Object.assign,Fd;function ll(e){if(Fd===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Fd=n&&n[1]||""}return`
`+Fd+e}var Rd=!1;function Nd(e,n){if(!e||Rd)return"";Rd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Rd=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ll(e):""}function F5(e){switch(e.tag){case 5:return ll(e.type);case 16:return ll("Lazy");case 13:return ll("Suspense");case 19:return ll("SuspenseList");case 0:case 2:case 15:return e=Nd(e.type,!1),e;case 11:return e=Nd(e.type.render,!1),e;case 1:return e=Nd(e.type,!0),e;default:return""}}function Qf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wi:return"Fragment";case Zi:return"Portal";case Gf:return"Profiler";case Hh:return"StrictMode";case qf:return"Suspense";case Kf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case a4:return(e.displayName||"Context")+".Consumer";case i4:return(e._context.displayName||"Context")+".Provider";case Uh:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zh:return n=e.displayName||null,n!==null?n:Qf(e.type)||"Memo";case vo:n=e._payload,e=e._init;try{return Qf(e(n))}catch{}}return null}function R5(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qf(n);case 8:return n===Hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function jo(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function s4(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function N5(e){var n=s4(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function _s(e){e._valueTracker||(e._valueTracker=N5(e))}function c4(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=s4(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Mc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yf(e,n){var t=n.checked;return Hn({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function R2(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=jo(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function u4(e,n){n=n.checked,n!=null&&zh(e,"checked",n,!1)}function Jf(e,n){u4(e,n);var t=jo(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?em(e,n.type,t):n.hasOwnProperty("defaultValue")&&em(e,n.type,jo(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function N2(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function em(e,n,t){(n!=="number"||Mc(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var sl=Array.isArray;function ia(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+jo(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function nm(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(ue(91));return Hn({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function M2(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(ue(92));if(sl(t)){if(1<t.length)throw Error(ue(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:jo(t)}}function d4(e,n){var t=jo(n.value),r=jo(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function L2(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function f4(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tm(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?f4(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ps,m4=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ps=Ps||document.createElement("div"),Ps.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ps.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ol(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ml={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},M5=["Webkit","ms","Moz","O"];Object.keys(ml).forEach(function(e){M5.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ml[n]=ml[e]})});function h4(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ml.hasOwnProperty(e)&&ml[e]?(""+n).trim():n+"px"}function p4(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=h4(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var L5=Hn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rm(e,n){if(n){if(L5[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(ue(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(ue(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(ue(61))}if(n.style!=null&&typeof n.style!="object")throw Error(ue(62))}}function om(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var im=null;function Wh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var am=null,aa=null,la=null;function j2(e){if(e=ds(e)){if(typeof am!="function")throw Error(ue(280));var n=e.stateNode;n&&(n=Nu(n),am(e.stateNode,e.type,n))}}function g4(e){aa?la?la.push(e):la=[e]:aa=e}function b4(){if(aa){var e=aa,n=la;if(la=aa=null,j2(e),n)for(e=0;e<n.length;e++)j2(n[e])}}function v4(e,n){return e(n)}function y4(){}var Md=!1;function w4(e,n,t){if(Md)return e(n,t);Md=!0;try{return v4(e,n,t)}finally{Md=!1,(aa!==null||la!==null)&&(y4(),b4())}}function Fl(e,n){var t=e.stateNode;if(t===null)return null;var r=Nu(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(ue(231,n,typeof t));return t}var lm=!1;if(to)try{var Za={};Object.defineProperty(Za,"passive",{get:function(){lm=!0}}),window.addEventListener("test",Za,Za),window.removeEventListener("test",Za,Za)}catch{lm=!1}function j5(e,n,t,r,o,i,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(d){this.onError(d)}}var hl=!1,Lc=null,jc=!1,sm=null,D5={onError:function(e){hl=!0,Lc=e}};function B5(e,n,t,r,o,i,a,l,s){hl=!1,Lc=null,j5.apply(D5,arguments)}function $5(e,n,t,r,o,i,a,l,s){if(B5.apply(this,arguments),hl){if(hl){var c=Lc;hl=!1,Lc=null}else throw Error(ue(198));jc||(jc=!0,sm=c)}}function Ei(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function k4(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function D2(e){if(Ei(e)!==e)throw Error(ue(188))}function z5(e){var n=e.alternate;if(!n){if(n=Ei(e),n===null)throw Error(ue(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return D2(o),e;if(i===r)return D2(o),n;i=i.sibling}throw Error(ue(188))}if(t.return!==r.return)t=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a)throw Error(ue(189))}}if(t.alternate!==r)throw Error(ue(190))}if(t.tag!==3)throw Error(ue(188));return t.stateNode.current===t?e:n}function C4(e){return e=z5(e),e!==null?x4(e):null}function x4(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=x4(e);if(n!==null)return n;e=e.sibling}return null}var S4=Qt.unstable_scheduleCallback,B2=Qt.unstable_cancelCallback,H5=Qt.unstable_shouldYield,U5=Qt.unstable_requestPaint,Gn=Qt.unstable_now,Z5=Qt.unstable_getCurrentPriorityLevel,Vh=Qt.unstable_ImmediatePriority,E4=Qt.unstable_UserBlockingPriority,Dc=Qt.unstable_NormalPriority,W5=Qt.unstable_LowPriority,A4=Qt.unstable_IdlePriority,Pu=null,Dr=null;function V5(e){if(Dr&&typeof Dr.onCommitFiberRoot=="function")try{Dr.onCommitFiberRoot(Pu,e,void 0,(e.current.flags&128)===128)}catch{}}var Tr=Math.clz32?Math.clz32:q5,X5=Math.log,G5=Math.LN2;function q5(e){return e>>>=0,e===0?32:31-(X5(e)/G5|0)|0}var Os=64,Fs=4194304;function cl(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bc(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~o;l!==0?r=cl(l):(i&=a,i!==0&&(r=cl(i)))}else a=t&~o,a!==0?r=cl(a):i!==0&&(r=cl(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Tr(n),o=1<<t,r|=e[t],n&=~o;return r}function K5(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q5(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Tr(i),l=1<<a,s=o[a];s===-1?(!(l&t)||l&r)&&(o[a]=K5(l,n)):s<=n&&(e.expiredLanes|=l),i&=~l}}function cm(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function T4(){var e=Os;return Os<<=1,!(Os&4194240)&&(Os=64),e}function Ld(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function cs(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Tr(n),e[n]=t}function Y5(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Tr(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function Xh(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Tr(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var Cn=0;function I4(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _4,Gh,P4,O4,F4,um=!1,Rs=[],Io=null,_o=null,Po=null,Rl=new Map,Nl=new Map,wo=[],J5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $2(e,n){switch(e){case"focusin":case"focusout":Io=null;break;case"dragenter":case"dragleave":_o=null;break;case"mouseover":case"mouseout":Po=null;break;case"pointerover":case"pointerout":Rl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(n.pointerId)}}function Wa(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=ds(n),n!==null&&Gh(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function e7(e,n,t,r,o){switch(n){case"focusin":return Io=Wa(Io,e,n,t,r,o),!0;case"dragenter":return _o=Wa(_o,e,n,t,r,o),!0;case"mouseover":return Po=Wa(Po,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return Rl.set(i,Wa(Rl.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Nl.set(i,Wa(Nl.get(i)||null,e,n,t,r,o)),!0}return!1}function R4(e){var n=ri(e.target);if(n!==null){var t=Ei(n);if(t!==null){if(n=t.tag,n===13){if(n=k4(t),n!==null){e.blockedOn=n,F4(e.priority,function(){P4(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=dm(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);im=r,t.target.dispatchEvent(r),im=null}else return n=ds(t),n!==null&&Gh(n),e.blockedOn=t,!1;n.shift()}return!0}function z2(e,n,t){cc(e)&&t.delete(n)}function n7(){um=!1,Io!==null&&cc(Io)&&(Io=null),_o!==null&&cc(_o)&&(_o=null),Po!==null&&cc(Po)&&(Po=null),Rl.forEach(z2),Nl.forEach(z2)}function Va(e,n){e.blockedOn===n&&(e.blockedOn=null,um||(um=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,n7)))}function Ml(e){function n(o){return Va(o,e)}if(0<Rs.length){Va(Rs[0],e);for(var t=1;t<Rs.length;t++){var r=Rs[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Io!==null&&Va(Io,e),_o!==null&&Va(_o,e),Po!==null&&Va(Po,e),Rl.forEach(n),Nl.forEach(n),t=0;t<wo.length;t++)r=wo[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<wo.length&&(t=wo[0],t.blockedOn===null);)R4(t),t.blockedOn===null&&wo.shift()}var sa=lo.ReactCurrentBatchConfig,$c=!0;function t7(e,n,t,r){var o=Cn,i=sa.transition;sa.transition=null;try{Cn=1,qh(e,n,t,r)}finally{Cn=o,sa.transition=i}}function r7(e,n,t,r){var o=Cn,i=sa.transition;sa.transition=null;try{Cn=4,qh(e,n,t,r)}finally{Cn=o,sa.transition=i}}function qh(e,n,t,r){if($c){var o=dm(e,n,t,r);if(o===null)Vd(e,n,r,zc,t),$2(e,r);else if(e7(o,e,n,t,r))r.stopPropagation();else if($2(e,r),n&4&&-1<J5.indexOf(e)){for(;o!==null;){var i=ds(o);if(i!==null&&_4(i),i=dm(e,n,t,r),i===null&&Vd(e,n,r,zc,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else Vd(e,n,r,null,t)}}var zc=null;function dm(e,n,t,r){if(zc=null,e=Wh(r),e=ri(e),e!==null)if(n=Ei(e),n===null)e=null;else if(t=n.tag,t===13){if(e=k4(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return zc=e,null}function N4(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z5()){case Vh:return 1;case E4:return 4;case Dc:case W5:return 16;case A4:return 536870912;default:return 16}default:return 16}}var Co=null,Kh=null,uc=null;function M4(){if(uc)return uc;var e,n=Kh,t=n.length,r,o="value"in Co?Co.value:Co.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===o[i-r];r++);return uc=o.slice(e,1<r?1-r:void 0)}function dc(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ns(){return!0}function H2(){return!1}function er(e){function n(t,r,o,i,a){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ns:H2,this.isPropagationStopped=H2,this}return Hn(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ns)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ns)},persist:function(){},isPersistent:Ns}),n}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qh=er(Aa),us=Hn({},Aa,{view:0,detail:0}),o7=er(us),jd,Dd,Xa,Ou=Hn({},us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xa&&(Xa&&e.type==="mousemove"?(jd=e.screenX-Xa.screenX,Dd=e.screenY-Xa.screenY):Dd=jd=0,Xa=e),jd)},movementY:function(e){return"movementY"in e?e.movementY:Dd}}),U2=er(Ou),i7=Hn({},Ou,{dataTransfer:0}),a7=er(i7),l7=Hn({},us,{relatedTarget:0}),Bd=er(l7),s7=Hn({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),c7=er(s7),u7=Hn({},Aa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),d7=er(u7),f7=Hn({},Aa,{data:0}),Z2=er(f7),m7={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h7={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p7={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g7(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=p7[e])?!!n[e]:!1}function Yh(){return g7}var b7=Hn({},us,{key:function(e){if(e.key){var n=m7[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=dc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?h7[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yh,charCode:function(e){return e.type==="keypress"?dc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),v7=er(b7),y7=Hn({},Ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),W2=er(y7),w7=Hn({},us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yh}),k7=er(w7),C7=Hn({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),x7=er(C7),S7=Hn({},Ou,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),E7=er(S7),A7=[9,13,27,32],Jh=to&&"CompositionEvent"in window,pl=null;to&&"documentMode"in document&&(pl=document.documentMode);var T7=to&&"TextEvent"in window&&!pl,L4=to&&(!Jh||pl&&8<pl&&11>=pl),V2=" ",X2=!1;function j4(e,n){switch(e){case"keyup":return A7.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D4(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vi=!1;function I7(e,n){switch(e){case"compositionend":return D4(n);case"keypress":return n.which!==32?null:(X2=!0,V2);case"textInput":return e=n.data,e===V2&&X2?null:e;default:return null}}function _7(e,n){if(Vi)return e==="compositionend"||!Jh&&j4(e,n)?(e=M4(),uc=Kh=Co=null,Vi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return L4&&n.locale!=="ko"?null:n.data;default:return null}}var P7={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function G2(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!P7[e.type]:n==="textarea"}function B4(e,n,t,r){g4(r),n=Hc(n,"onChange"),0<n.length&&(t=new Qh("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var gl=null,Ll=null;function O7(e){K4(e,0)}function Fu(e){var n=qi(e);if(c4(n))return e}function F7(e,n){if(e==="change")return n}var $4=!1;if(to){var $d;if(to){var zd="oninput"in document;if(!zd){var q2=document.createElement("div");q2.setAttribute("oninput","return;"),zd=typeof q2.oninput=="function"}$d=zd}else $d=!1;$4=$d&&(!document.documentMode||9<document.documentMode)}function K2(){gl&&(gl.detachEvent("onpropertychange",z4),Ll=gl=null)}function z4(e){if(e.propertyName==="value"&&Fu(Ll)){var n=[];B4(n,Ll,e,Wh(e)),w4(O7,n)}}function R7(e,n,t){e==="focusin"?(K2(),gl=n,Ll=t,gl.attachEvent("onpropertychange",z4)):e==="focusout"&&K2()}function N7(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fu(Ll)}function M7(e,n){if(e==="click")return Fu(n)}function L7(e,n){if(e==="input"||e==="change")return Fu(n)}function j7(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fr=typeof Object.is=="function"?Object.is:j7;function jl(e,n){if(Fr(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Xf.call(n,o)||!Fr(e[o],n[o]))return!1}return!0}function Q2(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Y2(e,n){var t=Q2(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Q2(t)}}function H4(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?H4(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function U4(){for(var e=window,n=Mc();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Mc(e.document)}return n}function e0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function D7(e){var n=U4(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&H4(t.ownerDocument.documentElement,t)){if(r!==null&&e0(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Y2(t,i);var a=Y2(t,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var B7=to&&"documentMode"in document&&11>=document.documentMode,Xi=null,fm=null,bl=null,mm=!1;function J2(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;mm||Xi==null||Xi!==Mc(r)||(r=Xi,"selectionStart"in r&&e0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bl&&jl(bl,r)||(bl=r,r=Hc(fm,"onSelect"),0<r.length&&(n=new Qh("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Xi)))}function Ms(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Gi={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionend:Ms("Transition","TransitionEnd")},Hd={},Z4={};to&&(Z4=document.createElement("div").style,"AnimationEvent"in window||(delete Gi.animationend.animation,delete Gi.animationiteration.animation,delete Gi.animationstart.animation),"TransitionEvent"in window||delete Gi.transitionend.transition);function Ru(e){if(Hd[e])return Hd[e];if(!Gi[e])return e;var n=Gi[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Z4)return Hd[e]=n[t];return e}var W4=Ru("animationend"),V4=Ru("animationiteration"),X4=Ru("animationstart"),G4=Ru("transitionend"),q4=new Map,ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bo(e,n){q4.set(e,n),Si(n,[e])}for(var Ud=0;Ud<ep.length;Ud++){var Zd=ep[Ud],$7=Zd.toLowerCase(),z7=Zd[0].toUpperCase()+Zd.slice(1);Bo($7,"on"+z7)}Bo(W4,"onAnimationEnd");Bo(V4,"onAnimationIteration");Bo(X4,"onAnimationStart");Bo("dblclick","onDoubleClick");Bo("focusin","onFocus");Bo("focusout","onBlur");Bo(G4,"onTransitionEnd");fa("onMouseEnter",["mouseout","mouseover"]);fa("onMouseLeave",["mouseout","mouseover"]);fa("onPointerEnter",["pointerout","pointerover"]);fa("onPointerLeave",["pointerout","pointerover"]);Si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Si("onBeforeInput",["compositionend","keypress","textInput","paste"]);Si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H7=new Set("cancel close invalid load scroll toggle".split(" ").concat(ul));function np(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,$5(r,n,void 0,e),e.currentTarget=null}function K4(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;np(o,l,c),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;np(o,l,c),i=s}}}if(jc)throw e=sm,jc=!1,sm=null,e}function Rn(e,n){var t=n[vm];t===void 0&&(t=n[vm]=new Set);var r=e+"__bubble";t.has(r)||(Q4(n,e,2,!1),t.add(r))}function Wd(e,n,t){var r=0;n&&(r|=4),Q4(t,e,r,n)}var Ls="_reactListening"+Math.random().toString(36).slice(2);function Dl(e){if(!e[Ls]){e[Ls]=!0,o4.forEach(function(t){t!=="selectionchange"&&(H7.has(t)||Wd(t,!1,e),Wd(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ls]||(n[Ls]=!0,Wd("selectionchange",!1,n))}}function Q4(e,n,t,r){switch(N4(n)){case 1:var o=t7;break;case 4:o=r7;break;default:o=qh}t=o.bind(null,n,t,e),o=void 0,!lm||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Vd(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=ri(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}w4(function(){var c=i,d=Wh(t),u=[];e:{var f=q4.get(e);if(f!==void 0){var m=Qh,h=e;switch(e){case"keypress":if(dc(t)===0)break e;case"keydown":case"keyup":m=v7;break;case"focusin":h="focus",m=Bd;break;case"focusout":h="blur",m=Bd;break;case"beforeblur":case"afterblur":m=Bd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=U2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=a7;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=k7;break;case W4:case V4:case X4:m=c7;break;case G4:m=x7;break;case"scroll":m=o7;break;case"wheel":m=E7;break;case"copy":case"cut":case"paste":m=d7;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=W2}var v=(n&4)!==0,k=!v&&e==="scroll",g=v?f!==null?f+"Capture":null:f;v=[];for(var b=c,y;b!==null;){y=b;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,g!==null&&(S=Fl(b,g),S!=null&&v.push(Bl(b,S,y)))),k)break;b=b.return}0<v.length&&(f=new m(f,h,null,t,d),u.push({event:f,listeners:v}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&t!==im&&(h=t.relatedTarget||t.fromElement)&&(ri(h)||h[ro]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(h=t.relatedTarget||t.toElement,m=c,h=h?ri(h):null,h!==null&&(k=Ei(h),h!==k||h.tag!==5&&h.tag!==6)&&(h=null)):(m=null,h=c),m!==h)){if(v=U2,S="onMouseLeave",g="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(v=W2,S="onPointerLeave",g="onPointerEnter",b="pointer"),k=m==null?f:qi(m),y=h==null?f:qi(h),f=new v(S,b+"leave",m,t,d),f.target=k,f.relatedTarget=y,S=null,ri(d)===c&&(v=new v(g,b+"enter",h,t,d),v.target=y,v.relatedTarget=k,S=v),k=S,m&&h)n:{for(v=m,g=h,b=0,y=v;y;y=Ni(y))b++;for(y=0,S=g;S;S=Ni(S))y++;for(;0<b-y;)v=Ni(v),b--;for(;0<y-b;)g=Ni(g),y--;for(;b--;){if(v===g||g!==null&&v===g.alternate)break n;v=Ni(v),g=Ni(g)}v=null}else v=null;m!==null&&tp(u,f,m,v,!1),h!==null&&k!==null&&tp(u,k,h,v,!0)}}e:{if(f=c?qi(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var A=F7;else if(G2(f))if($4)A=L7;else{A=N7;var w=R7}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=M7);if(A&&(A=A(e,c))){B4(u,A,t,d);break e}w&&w(e,f,c),e==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&em(f,"number",f.value)}switch(w=c?qi(c):window,e){case"focusin":(G2(w)||w.contentEditable==="true")&&(Xi=w,fm=c,bl=null);break;case"focusout":bl=fm=Xi=null;break;case"mousedown":mm=!0;break;case"contextmenu":case"mouseup":case"dragend":mm=!1,J2(u,t,d);break;case"selectionchange":if(B7)break;case"keydown":case"keyup":J2(u,t,d)}var I;if(Jh)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Vi?j4(e,t)&&(R="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(L4&&t.locale!=="ko"&&(Vi||R!=="onCompositionStart"?R==="onCompositionEnd"&&Vi&&(I=M4()):(Co=d,Kh="value"in Co?Co.value:Co.textContent,Vi=!0)),w=Hc(c,R),0<w.length&&(R=new Z2(R,e,null,t,d),u.push({event:R,listeners:w}),I?R.data=I:(I=D4(t),I!==null&&(R.data=I)))),(I=T7?I7(e,t):_7(e,t))&&(c=Hc(c,"onBeforeInput"),0<c.length&&(d=new Z2("onBeforeInput","beforeinput",null,t,d),u.push({event:d,listeners:c}),d.data=I))}K4(u,n)})}function Bl(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Hc(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Fl(e,t),i!=null&&r.unshift(Bl(e,i,o)),i=Fl(e,n),i!=null&&r.push(Bl(e,i,o))),e=e.return}return r}function Ni(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tp(e,n,t,r,o){for(var i=n._reactName,a=[];t!==null&&t!==r;){var l=t,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,o?(s=Fl(t,i),s!=null&&a.unshift(Bl(t,s,l))):o||(s=Fl(t,i),s!=null&&a.push(Bl(t,s,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var U7=/\r\n?/g,Z7=/\u0000|\uFFFD/g;function rp(e){return(typeof e=="string"?e:""+e).replace(U7,`
`).replace(Z7,"")}function js(e,n,t){if(n=rp(n),rp(e)!==n&&t)throw Error(ue(425))}function Uc(){}var hm=null,pm=null;function gm(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var bm=typeof setTimeout=="function"?setTimeout:void 0,W7=typeof clearTimeout=="function"?clearTimeout:void 0,op=typeof Promise=="function"?Promise:void 0,V7=typeof queueMicrotask=="function"?queueMicrotask:typeof op<"u"?function(e){return op.resolve(null).then(e).catch(X7)}:bm;function X7(e){setTimeout(function(){throw e})}function Xd(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Ml(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Ml(n)}function Oo(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ip(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ta=Math.random().toString(36).slice(2),jr="__reactFiber$"+Ta,$l="__reactProps$"+Ta,ro="__reactContainer$"+Ta,vm="__reactEvents$"+Ta,G7="__reactListeners$"+Ta,q7="__reactHandles$"+Ta;function ri(e){var n=e[jr];if(n)return n;for(var t=e.parentNode;t;){if(n=t[ro]||t[jr]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ip(e);e!==null;){if(t=e[jr])return t;e=ip(e)}return n}e=t,t=e.parentNode}return null}function ds(e){return e=e[jr]||e[ro],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ue(33))}function Nu(e){return e[$l]||null}var ym=[],Ki=-1;function $o(e){return{current:e}}function Nn(e){0>Ki||(e.current=ym[Ki],ym[Ki]=null,Ki--)}function Fn(e,n){Ki++,ym[Ki]=e.current,e.current=n}var Do={},xt=$o(Do),jt=$o(!1),pi=Do;function ma(e,n){var t=e.type.contextTypes;if(!t)return Do;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Dt(e){return e=e.childContextTypes,e!=null}function Zc(){Nn(jt),Nn(xt)}function ap(e,n,t){if(xt.current!==Do)throw Error(ue(168));Fn(xt,n),Fn(jt,t)}function Y4(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(ue(108,R5(e)||"Unknown",o));return Hn({},t,r)}function Wc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Do,pi=xt.current,Fn(xt,e),Fn(jt,jt.current),!0}function lp(e,n,t){var r=e.stateNode;if(!r)throw Error(ue(169));t?(e=Y4(e,n,pi),r.__reactInternalMemoizedMergedChildContext=e,Nn(jt),Nn(xt),Fn(xt,e)):Nn(jt),Fn(jt,t)}var qr=null,Mu=!1,Gd=!1;function J4(e){qr===null?qr=[e]:qr.push(e)}function K7(e){Mu=!0,J4(e)}function zo(){if(!Gd&&qr!==null){Gd=!0;var e=0,n=Cn;try{var t=qr;for(Cn=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}qr=null,Mu=!1}catch(o){throw qr!==null&&(qr=qr.slice(e+1)),S4(Vh,zo),o}finally{Cn=n,Gd=!1}}return null}var Qi=[],Yi=0,Vc=null,Xc=0,or=[],ir=0,gi=null,Qr=1,Yr="";function Qo(e,n){Qi[Yi++]=Xc,Qi[Yi++]=Vc,Vc=e,Xc=n}function ev(e,n,t){or[ir++]=Qr,or[ir++]=Yr,or[ir++]=gi,gi=e;var r=Qr;e=Yr;var o=32-Tr(r)-1;r&=~(1<<o),t+=1;var i=32-Tr(n)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Qr=1<<32-Tr(n)+o|t<<o|r,Yr=i+e}else Qr=1<<i|t<<o|r,Yr=e}function n0(e){e.return!==null&&(Qo(e,1),ev(e,1,0))}function t0(e){for(;e===Vc;)Vc=Qi[--Yi],Qi[Yi]=null,Xc=Qi[--Yi],Qi[Yi]=null;for(;e===gi;)gi=or[--ir],or[ir]=null,Yr=or[--ir],or[ir]=null,Qr=or[--ir],or[ir]=null}var Kt=null,qt=null,Mn=!1,Ar=null;function nv(e,n){var t=lr(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function sp(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Kt=e,qt=Oo(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Kt=e,qt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=gi!==null?{id:Qr,overflow:Yr}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=lr(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Kt=e,qt=null,!0):!1;default:return!1}}function wm(e){return(e.mode&1)!==0&&(e.flags&128)===0}function km(e){if(Mn){var n=qt;if(n){var t=n;if(!sp(e,n)){if(wm(e))throw Error(ue(418));n=Oo(t.nextSibling);var r=Kt;n&&sp(e,n)?nv(r,t):(e.flags=e.flags&-4097|2,Mn=!1,Kt=e)}}else{if(wm(e))throw Error(ue(418));e.flags=e.flags&-4097|2,Mn=!1,Kt=e}}}function cp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Kt=e}function Ds(e){if(e!==Kt)return!1;if(!Mn)return cp(e),Mn=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!gm(e.type,e.memoizedProps)),n&&(n=qt)){if(wm(e))throw tv(),Error(ue(418));for(;n;)nv(e,n),n=Oo(n.nextSibling)}if(cp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ue(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){qt=Oo(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}qt=null}}else qt=Kt?Oo(e.stateNode.nextSibling):null;return!0}function tv(){for(var e=qt;e;)e=Oo(e.nextSibling)}function ha(){qt=Kt=null,Mn=!1}function r0(e){Ar===null?Ar=[e]:Ar.push(e)}var Q7=lo.ReactCurrentBatchConfig;function Ga(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ue(309));var r=t.stateNode}if(!r)throw Error(ue(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(ue(284));if(!t._owner)throw Error(ue(290,e))}return e}function Bs(e,n){throw e=Object.prototype.toString.call(n),Error(ue(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function up(e){var n=e._init;return n(e._payload)}function rv(e){function n(g,b){if(e){var y=g.deletions;y===null?(g.deletions=[b],g.flags|=16):y.push(b)}}function t(g,b){if(!e)return null;for(;b!==null;)n(g,b),b=b.sibling;return null}function r(g,b){for(g=new Map;b!==null;)b.key!==null?g.set(b.key,b):g.set(b.index,b),b=b.sibling;return g}function o(g,b){return g=Mo(g,b),g.index=0,g.sibling=null,g}function i(g,b,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<b?(g.flags|=2,b):y):(g.flags|=2,b)):(g.flags|=1048576,b)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,b,y,S){return b===null||b.tag!==6?(b=nf(y,g.mode,S),b.return=g,b):(b=o(b,y),b.return=g,b)}function s(g,b,y,S){var A=y.type;return A===Wi?d(g,b,y.props.children,S,y.key):b!==null&&(b.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===vo&&up(A)===b.type)?(S=o(b,y.props),S.ref=Ga(g,b,y),S.return=g,S):(S=vc(y.type,y.key,y.props,null,g.mode,S),S.ref=Ga(g,b,y),S.return=g,S)}function c(g,b,y,S){return b===null||b.tag!==4||b.stateNode.containerInfo!==y.containerInfo||b.stateNode.implementation!==y.implementation?(b=tf(y,g.mode,S),b.return=g,b):(b=o(b,y.children||[]),b.return=g,b)}function d(g,b,y,S,A){return b===null||b.tag!==7?(b=ui(y,g.mode,S,A),b.return=g,b):(b=o(b,y),b.return=g,b)}function u(g,b,y){if(typeof b=="string"&&b!==""||typeof b=="number")return b=nf(""+b,g.mode,y),b.return=g,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Is:return y=vc(b.type,b.key,b.props,null,g.mode,y),y.ref=Ga(g,null,b),y.return=g,y;case Zi:return b=tf(b,g.mode,y),b.return=g,b;case vo:var S=b._init;return u(g,S(b._payload),y)}if(sl(b)||Ua(b))return b=ui(b,g.mode,y,null),b.return=g,b;Bs(g,b)}return null}function f(g,b,y,S){var A=b!==null?b.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:l(g,b,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Is:return y.key===A?s(g,b,y,S):null;case Zi:return y.key===A?c(g,b,y,S):null;case vo:return A=y._init,f(g,b,A(y._payload),S)}if(sl(y)||Ua(y))return A!==null?null:d(g,b,y,S,null);Bs(g,y)}return null}function m(g,b,y,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(y)||null,l(b,g,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Is:return g=g.get(S.key===null?y:S.key)||null,s(b,g,S,A);case Zi:return g=g.get(S.key===null?y:S.key)||null,c(b,g,S,A);case vo:var w=S._init;return m(g,b,y,w(S._payload),A)}if(sl(S)||Ua(S))return g=g.get(y)||null,d(b,g,S,A,null);Bs(b,S)}return null}function h(g,b,y,S){for(var A=null,w=null,I=b,R=b=0,M=null;I!==null&&R<y.length;R++){I.index>R?(M=I,I=null):M=I.sibling;var _=f(g,I,y[R],S);if(_===null){I===null&&(I=M);break}e&&I&&_.alternate===null&&n(g,I),b=i(_,b,R),w===null?A=_:w.sibling=_,w=_,I=M}if(R===y.length)return t(g,I),Mn&&Qo(g,R),A;if(I===null){for(;R<y.length;R++)I=u(g,y[R],S),I!==null&&(b=i(I,b,R),w===null?A=I:w.sibling=I,w=I);return Mn&&Qo(g,R),A}for(I=r(g,I);R<y.length;R++)M=m(I,g,R,y[R],S),M!==null&&(e&&M.alternate!==null&&I.delete(M.key===null?R:M.key),b=i(M,b,R),w===null?A=M:w.sibling=M,w=M);return e&&I.forEach(function(D){return n(g,D)}),Mn&&Qo(g,R),A}function v(g,b,y,S){var A=Ua(y);if(typeof A!="function")throw Error(ue(150));if(y=A.call(y),y==null)throw Error(ue(151));for(var w=A=null,I=b,R=b=0,M=null,_=y.next();I!==null&&!_.done;R++,_=y.next()){I.index>R?(M=I,I=null):M=I.sibling;var D=f(g,I,_.value,S);if(D===null){I===null&&(I=M);break}e&&I&&D.alternate===null&&n(g,I),b=i(D,b,R),w===null?A=D:w.sibling=D,w=D,I=M}if(_.done)return t(g,I),Mn&&Qo(g,R),A;if(I===null){for(;!_.done;R++,_=y.next())_=u(g,_.value,S),_!==null&&(b=i(_,b,R),w===null?A=_:w.sibling=_,w=_);return Mn&&Qo(g,R),A}for(I=r(g,I);!_.done;R++,_=y.next())_=m(I,g,R,_.value,S),_!==null&&(e&&_.alternate!==null&&I.delete(_.key===null?R:_.key),b=i(_,b,R),w===null?A=_:w.sibling=_,w=_);return e&&I.forEach(function(H){return n(g,H)}),Mn&&Qo(g,R),A}function k(g,b,y,S){if(typeof y=="object"&&y!==null&&y.type===Wi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Is:e:{for(var A=y.key,w=b;w!==null;){if(w.key===A){if(A=y.type,A===Wi){if(w.tag===7){t(g,w.sibling),b=o(w,y.props.children),b.return=g,g=b;break e}}else if(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===vo&&up(A)===w.type){t(g,w.sibling),b=o(w,y.props),b.ref=Ga(g,w,y),b.return=g,g=b;break e}t(g,w);break}else n(g,w);w=w.sibling}y.type===Wi?(b=ui(y.props.children,g.mode,S,y.key),b.return=g,g=b):(S=vc(y.type,y.key,y.props,null,g.mode,S),S.ref=Ga(g,b,y),S.return=g,g=S)}return a(g);case Zi:e:{for(w=y.key;b!==null;){if(b.key===w)if(b.tag===4&&b.stateNode.containerInfo===y.containerInfo&&b.stateNode.implementation===y.implementation){t(g,b.sibling),b=o(b,y.children||[]),b.return=g,g=b;break e}else{t(g,b);break}else n(g,b);b=b.sibling}b=tf(y,g.mode,S),b.return=g,g=b}return a(g);case vo:return w=y._init,k(g,b,w(y._payload),S)}if(sl(y))return h(g,b,y,S);if(Ua(y))return v(g,b,y,S);Bs(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,b!==null&&b.tag===6?(t(g,b.sibling),b=o(b,y),b.return=g,g=b):(t(g,b),b=nf(y,g.mode,S),b.return=g,g=b),a(g)):t(g,b)}return k}var pa=rv(!0),ov=rv(!1),Gc=$o(null),qc=null,Ji=null,o0=null;function i0(){o0=Ji=qc=null}function a0(e){var n=Gc.current;Nn(Gc),e._currentValue=n}function Cm(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ca(e,n){qc=e,o0=Ji=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Lt=!0),e.firstContext=null)}function ur(e){var n=e._currentValue;if(o0!==e)if(e={context:e,memoizedValue:n,next:null},Ji===null){if(qc===null)throw Error(ue(308));Ji=e,qc.dependencies={lanes:0,firstContext:e}}else Ji=Ji.next=e;return n}var oi=null;function l0(e){oi===null?oi=[e]:oi.push(e)}function iv(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,l0(n)):(t.next=o.next,o.next=t),n.interleaved=t,oo(e,r)}function oo(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var yo=!1;function s0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function av(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jr(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Fo(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,wn&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,oo(e,t)}return o=r.interleaved,o===null?(n.next=n,l0(r)):(n.next=o.next,o.next=n),r.interleaved=n,oo(e,t)}function fc(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Xh(e,t)}}function dp(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Kc(e,n,t,r){var o=e.updateQueue;yo=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?i=c:a.next=c,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=s))}if(i!==null){var u=o.baseState;a=0,d=c=s=null,l=i;do{var f=l.lane,m=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,v=l;switch(f=n,m=t,v.tag){case 1:if(h=v.payload,typeof h=="function"){u=h.call(m,u,f);break e}u=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=v.payload,f=typeof h=="function"?h.call(m,u,f):h,f==null)break e;u=Hn({},u,f);break e;case 2:yo=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=m,s=u):d=d.next=m,a|=f;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;f=l,l=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(d===null&&(s=u),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=d,n=o.shared.interleaved,n!==null){o=n;do a|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);vi|=a,e.lanes=a,e.memoizedState=u}}function fp(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(ue(191,o));o.call(r)}}}var fs={},Br=$o(fs),zl=$o(fs),Hl=$o(fs);function ii(e){if(e===fs)throw Error(ue(174));return e}function c0(e,n){switch(Fn(Hl,n),Fn(zl,e),Fn(Br,fs),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:tm(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=tm(n,e)}Nn(Br),Fn(Br,n)}function ga(){Nn(Br),Nn(zl),Nn(Hl)}function lv(e){ii(Hl.current);var n=ii(Br.current),t=tm(n,e.type);n!==t&&(Fn(zl,e),Fn(Br,t))}function u0(e){zl.current===e&&(Nn(Br),Nn(zl))}var Bn=$o(0);function Qc(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qd=[];function d0(){for(var e=0;e<qd.length;e++)qd[e]._workInProgressVersionPrimary=null;qd.length=0}var mc=lo.ReactCurrentDispatcher,Kd=lo.ReactCurrentBatchConfig,bi=0,$n=null,rt=null,it=null,Yc=!1,vl=!1,Ul=0,Y7=0;function bt(){throw Error(ue(321))}function f0(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Fr(e[t],n[t]))return!1;return!0}function m0(e,n,t,r,o,i){if(bi=i,$n=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,mc.current=e===null||e.memoizedState===null?tk:rk,e=t(r,o),vl){i=0;do{if(vl=!1,Ul=0,25<=i)throw Error(ue(301));i+=1,it=rt=null,n.updateQueue=null,mc.current=ok,e=t(r,o)}while(vl)}if(mc.current=Jc,n=rt!==null&&rt.next!==null,bi=0,it=rt=$n=null,Yc=!1,n)throw Error(ue(300));return e}function h0(){var e=Ul!==0;return Ul=0,e}function Mr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?$n.memoizedState=it=e:it=it.next=e,it}function dr(){if(rt===null){var e=$n.alternate;e=e!==null?e.memoizedState:null}else e=rt.next;var n=it===null?$n.memoizedState:it.next;if(n!==null)it=n,rt=e;else{if(e===null)throw Error(ue(310));rt=e,e={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},it===null?$n.memoizedState=it=e:it=it.next=e}return it}function Zl(e,n){return typeof n=="function"?n(e):n}function Qd(e){var n=dr(),t=n.queue;if(t===null)throw Error(ue(311));t.lastRenderedReducer=e;var r=rt,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,c=i;do{var d=c.lane;if((bi&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=u,a=r):s=s.next=u,$n.lanes|=d,vi|=d}c=c.next}while(c!==null&&c!==i);s===null?a=r:s.next=l,Fr(r,n.memoizedState)||(Lt=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,$n.lanes|=i,vi|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Yd(e){var n=dr(),t=n.queue;if(t===null)throw Error(ue(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Fr(i,n.memoizedState)||(Lt=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function sv(){}function cv(e,n){var t=$n,r=dr(),o=n(),i=!Fr(r.memoizedState,o);if(i&&(r.memoizedState=o,Lt=!0),r=r.queue,p0(fv.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||it!==null&&it.memoizedState.tag&1){if(t.flags|=2048,Wl(9,dv.bind(null,t,r,o,n),void 0,null),lt===null)throw Error(ue(349));bi&30||uv(t,n,o)}return o}function uv(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=$n.updateQueue,n===null?(n={lastEffect:null,stores:null},$n.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function dv(e,n,t,r){n.value=t,n.getSnapshot=r,mv(n)&&hv(e)}function fv(e,n,t){return t(function(){mv(n)&&hv(e)})}function mv(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Fr(e,t)}catch{return!0}}function hv(e){var n=oo(e,1);n!==null&&Ir(n,e,1,-1)}function mp(e){var n=Mr();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zl,lastRenderedState:e},n.queue=e,e=e.dispatch=nk.bind(null,$n,e),[n.memoizedState,e]}function Wl(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=$n.updateQueue,n===null?(n={lastEffect:null,stores:null},$n.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function pv(){return dr().memoizedState}function hc(e,n,t,r){var o=Mr();$n.flags|=e,o.memoizedState=Wl(1|n,t,void 0,r===void 0?null:r)}function Lu(e,n,t,r){var o=dr();r=r===void 0?null:r;var i=void 0;if(rt!==null){var a=rt.memoizedState;if(i=a.destroy,r!==null&&f0(r,a.deps)){o.memoizedState=Wl(n,t,i,r);return}}$n.flags|=e,o.memoizedState=Wl(1|n,t,i,r)}function hp(e,n){return hc(8390656,8,e,n)}function p0(e,n){return Lu(2048,8,e,n)}function gv(e,n){return Lu(4,2,e,n)}function bv(e,n){return Lu(4,4,e,n)}function vv(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function yv(e,n,t){return t=t!=null?t.concat([e]):null,Lu(4,4,vv.bind(null,n,e),t)}function g0(){}function wv(e,n){var t=dr();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&f0(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function kv(e,n){var t=dr();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&f0(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Cv(e,n,t){return bi&21?(Fr(t,n)||(t=T4(),$n.lanes|=t,vi|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Lt=!0),e.memoizedState=t)}function J7(e,n){var t=Cn;Cn=t!==0&&4>t?t:4,e(!0);var r=Kd.transition;Kd.transition={};try{e(!1),n()}finally{Cn=t,Kd.transition=r}}function xv(){return dr().memoizedState}function ek(e,n,t){var r=No(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Sv(e))Ev(n,t);else if(t=iv(e,n,t,r),t!==null){var o=_t();Ir(t,e,r,o),Av(t,n,r)}}function nk(e,n,t){var r=No(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Sv(e))Ev(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,l=i(a,t);if(o.hasEagerState=!0,o.eagerState=l,Fr(l,a)){var s=n.interleaved;s===null?(o.next=o,l0(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}t=iv(e,n,o,r),t!==null&&(o=_t(),Ir(t,e,r,o),Av(t,n,r))}}function Sv(e){var n=e.alternate;return e===$n||n!==null&&n===$n}function Ev(e,n){vl=Yc=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Av(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Xh(e,t)}}var Jc={readContext:ur,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},tk={readContext:ur,useCallback:function(e,n){return Mr().memoizedState=[e,n===void 0?null:n],e},useContext:ur,useEffect:hp,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,hc(4194308,4,vv.bind(null,n,e),t)},useLayoutEffect:function(e,n){return hc(4194308,4,e,n)},useInsertionEffect:function(e,n){return hc(4,2,e,n)},useMemo:function(e,n){var t=Mr();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Mr();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ek.bind(null,$n,e),[r.memoizedState,e]},useRef:function(e){var n=Mr();return e={current:e},n.memoizedState=e},useState:mp,useDebugValue:g0,useDeferredValue:function(e){return Mr().memoizedState=e},useTransition:function(){var e=mp(!1),n=e[0];return e=J7.bind(null,e[1]),Mr().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=$n,o=Mr();if(Mn){if(t===void 0)throw Error(ue(407));t=t()}else{if(t=n(),lt===null)throw Error(ue(349));bi&30||uv(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,hp(fv.bind(null,r,i,e),[e]),r.flags|=2048,Wl(9,dv.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Mr(),n=lt.identifierPrefix;if(Mn){var t=Yr,r=Qr;t=(r&~(1<<32-Tr(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ul++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Y7++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},rk={readContext:ur,useCallback:wv,useContext:ur,useEffect:p0,useImperativeHandle:yv,useInsertionEffect:gv,useLayoutEffect:bv,useMemo:kv,useReducer:Qd,useRef:pv,useState:function(){return Qd(Zl)},useDebugValue:g0,useDeferredValue:function(e){var n=dr();return Cv(n,rt.memoizedState,e)},useTransition:function(){var e=Qd(Zl)[0],n=dr().memoizedState;return[e,n]},useMutableSource:sv,useSyncExternalStore:cv,useId:xv,unstable_isNewReconciler:!1},ok={readContext:ur,useCallback:wv,useContext:ur,useEffect:p0,useImperativeHandle:yv,useInsertionEffect:gv,useLayoutEffect:bv,useMemo:kv,useReducer:Yd,useRef:pv,useState:function(){return Yd(Zl)},useDebugValue:g0,useDeferredValue:function(e){var n=dr();return rt===null?n.memoizedState=e:Cv(n,rt.memoizedState,e)},useTransition:function(){var e=Yd(Zl)[0],n=dr().memoizedState;return[e,n]},useMutableSource:sv,useSyncExternalStore:cv,useId:xv,unstable_isNewReconciler:!1};function Cr(e,n){if(e&&e.defaultProps){n=Hn({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function xm(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Hn({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ju={isMounted:function(e){return(e=e._reactInternals)?Ei(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=_t(),o=No(e),i=Jr(r,o);i.payload=n,t!=null&&(i.callback=t),n=Fo(e,i,o),n!==null&&(Ir(n,e,o,r),fc(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=_t(),o=No(e),i=Jr(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Fo(e,i,o),n!==null&&(Ir(n,e,o,r),fc(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=_t(),r=No(e),o=Jr(t,r);o.tag=2,n!=null&&(o.callback=n),n=Fo(e,o,r),n!==null&&(Ir(n,e,r,t),fc(n,e,r))}};function pp(e,n,t,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!jl(t,r)||!jl(o,i):!0}function Tv(e,n,t){var r=!1,o=Do,i=n.contextType;return typeof i=="object"&&i!==null?i=ur(i):(o=Dt(n)?pi:xt.current,r=n.contextTypes,i=(r=r!=null)?ma(e,o):Do),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ju,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function gp(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ju.enqueueReplaceState(n,n.state,null)}function Sm(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},s0(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=ur(i):(i=Dt(n)?pi:xt.current,o.context=ma(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(xm(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&ju.enqueueReplaceState(o,o.state,null),Kc(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ba(e,n){try{var t="",r=n;do t+=F5(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function Jd(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Em(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ik=typeof WeakMap=="function"?WeakMap:Map;function Iv(e,n,t){t=Jr(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){nu||(nu=!0,Mm=r),Em(e,n)},t}function _v(e,n,t){t=Jr(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){Em(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Em(e,n),typeof r!="function"&&(Ro===null?Ro=new Set([this]):Ro.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function bp(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new ik;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=yk.bind(null,e,n,t),n.then(e,e))}function vp(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function yp(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Jr(-1,1),n.tag=2,Fo(t,n,1))),t.lanes|=1),e)}var ak=lo.ReactCurrentOwner,Lt=!1;function At(e,n,t,r){n.child=e===null?ov(n,null,t,r):pa(n,e.child,t,r)}function wp(e,n,t,r,o){t=t.render;var i=n.ref;return ca(n,o),r=m0(e,n,t,r,i,o),t=h0(),e!==null&&!Lt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,io(e,n,o)):(Mn&&t&&n0(n),n.flags|=1,At(e,n,r,o),n.child)}function kp(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!S0(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Pv(e,n,i,r,o)):(e=vc(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:jl,t(a,r)&&e.ref===n.ref)return io(e,n,o)}return n.flags|=1,e=Mo(i,r),e.ref=n.ref,e.return=n,n.child=e}function Pv(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(jl(i,r)&&e.ref===n.ref)if(Lt=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Lt=!0);else return n.lanes=e.lanes,io(e,n,o)}return Am(e,n,t,r,o)}function Ov(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Fn(na,Vt),Vt|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Fn(na,Vt),Vt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,Fn(na,Vt),Vt|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,Fn(na,Vt),Vt|=r;return At(e,n,o,t),n.child}function Fv(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Am(e,n,t,r,o){var i=Dt(t)?pi:xt.current;return i=ma(n,i),ca(n,o),t=m0(e,n,t,r,i,o),r=h0(),e!==null&&!Lt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,io(e,n,o)):(Mn&&r&&n0(n),n.flags|=1,At(e,n,t,o),n.child)}function Cp(e,n,t,r,o){if(Dt(t)){var i=!0;Wc(n)}else i=!1;if(ca(n,o),n.stateNode===null)pc(e,n),Tv(n,t,r),Sm(n,t,r,o),r=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var s=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=ur(c):(c=Dt(t)?pi:xt.current,c=ma(n,c));var d=t.getDerivedStateFromProps,u=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&gp(n,a,r,c),yo=!1;var f=n.memoizedState;a.state=f,Kc(n,r,a,o),s=n.memoizedState,l!==r||f!==s||jt.current||yo?(typeof d=="function"&&(xm(n,t,d,r),s=n.memoizedState),(l=yo||pp(n,t,l,r,f,s,c))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,av(e,n),l=n.memoizedProps,c=n.type===n.elementType?l:Cr(n.type,l),a.props=c,u=n.pendingProps,f=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=ur(s):(s=Dt(t)?pi:xt.current,s=ma(n,s));var m=t.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==u||f!==s)&&gp(n,a,r,s),yo=!1,f=n.memoizedState,a.state=f,Kc(n,r,a,o);var h=n.memoizedState;l!==u||f!==h||jt.current||yo?(typeof m=="function"&&(xm(n,t,m,r),h=n.memoizedState),(c=yo||pp(n,t,c,r,f,h,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=h),a.props=r,a.state=h,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return Tm(e,n,t,r,i,o)}function Tm(e,n,t,r,o,i){Fv(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return o&&lp(n,t,!1),io(e,n,i);r=n.stateNode,ak.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=pa(n,e.child,null,i),n.child=pa(n,null,l,i)):At(e,n,l,i),n.memoizedState=r.state,o&&lp(n,t,!0),n.child}function Rv(e){var n=e.stateNode;n.pendingContext?ap(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ap(e,n.context,!1),c0(e,n.containerInfo)}function xp(e,n,t,r,o){return ha(),r0(o),n.flags|=256,At(e,n,t,r),n.child}var Im={dehydrated:null,treeContext:null,retryLane:0};function _m(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nv(e,n,t){var r=n.pendingProps,o=Bn.current,i=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Fn(Bn,o&1),e===null)return km(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=$u(a,r,0,null),e=ui(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=_m(t),n.memoizedState=Im,e):b0(n,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return lk(e,n,a,r,l,o,t);if(i){i=r.fallback,a=n.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Mo(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Mo(l,i):(i=ui(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?_m(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=Im,r}return i=e.child,e=i.sibling,r=Mo(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function b0(e,n){return n=$u({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function $s(e,n,t,r){return r!==null&&r0(r),pa(n,e.child,null,t),e=b0(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function lk(e,n,t,r,o,i,a){if(t)return n.flags&256?(n.flags&=-257,r=Jd(Error(ue(422))),$s(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=$u({mode:"visible",children:r.children},o,0,null),i=ui(i,o,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&pa(n,e.child,null,a),n.child.memoizedState=_m(a),n.memoizedState=Im,i);if(!(n.mode&1))return $s(e,n,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(ue(419)),r=Jd(i,r,void 0),$s(e,n,a,r)}if(l=(a&e.childLanes)!==0,Lt||l){if(r=lt,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,oo(e,o),Ir(r,e,o,-1))}return x0(),r=Jd(Error(ue(421))),$s(e,n,a,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=wk.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,qt=Oo(o.nextSibling),Kt=n,Mn=!0,Ar=null,e!==null&&(or[ir++]=Qr,or[ir++]=Yr,or[ir++]=gi,Qr=e.id,Yr=e.overflow,gi=n),n=b0(n,r.children),n.flags|=4096,n)}function Sp(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Cm(e.return,n,t)}function ef(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function Mv(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(At(e,n,r.children,t),r=Bn.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sp(e,t,n);else if(e.tag===19)Sp(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Fn(Bn,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&Qc(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),ef(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Qc(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}ef(n,!0,t,null,i);break;case"together":ef(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function pc(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function io(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),vi|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(ue(153));if(n.child!==null){for(e=n.child,t=Mo(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Mo(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function sk(e,n,t){switch(n.tag){case 3:Rv(n),ha();break;case 5:lv(n);break;case 1:Dt(n.type)&&Wc(n);break;case 4:c0(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;Fn(Gc,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(Fn(Bn,Bn.current&1),n.flags|=128,null):t&n.child.childLanes?Nv(e,n,t):(Fn(Bn,Bn.current&1),e=io(e,n,t),e!==null?e.sibling:null);Fn(Bn,Bn.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Mv(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Fn(Bn,Bn.current),r)break;return null;case 22:case 23:return n.lanes=0,Ov(e,n,t)}return io(e,n,t)}var Lv,Pm,jv,Dv;Lv=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Pm=function(){};jv=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,ii(Br.current);var i=null;switch(t){case"input":o=Yf(e,o),r=Yf(e,r),i=[];break;case"select":o=Hn({},o,{value:void 0}),r=Hn({},r,{value:void 0}),i=[];break;case"textarea":o=nm(e,o),r=nm(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Uc)}rm(t,r);var a;t=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Pl.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(i||(i=[]),i.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Pl.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&Rn("scroll",e),i||l===s||(i=[])):(i=i||[]).push(c,s))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Dv=function(e,n,t,r){t!==r&&(n.flags|=4)};function qa(e,n){if(!Mn)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function vt(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function ck(e,n,t){var r=n.pendingProps;switch(t0(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(n),null;case 1:return Dt(n.type)&&Zc(),vt(n),null;case 3:return r=n.stateNode,ga(),Nn(jt),Nn(xt),d0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ds(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ar!==null&&(Dm(Ar),Ar=null))),Pm(e,n),vt(n),null;case 5:u0(n);var o=ii(Hl.current);if(t=n.type,e!==null&&n.stateNode!=null)jv(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(ue(166));return vt(n),null}if(e=ii(Br.current),Ds(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[jr]=n,r[$l]=i,e=(n.mode&1)!==0,t){case"dialog":Rn("cancel",r),Rn("close",r);break;case"iframe":case"object":case"embed":Rn("load",r);break;case"video":case"audio":for(o=0;o<ul.length;o++)Rn(ul[o],r);break;case"source":Rn("error",r);break;case"img":case"image":case"link":Rn("error",r),Rn("load",r);break;case"details":Rn("toggle",r);break;case"input":R2(r,i),Rn("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Rn("invalid",r);break;case"textarea":M2(r,i),Rn("invalid",r)}rm(t,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&js(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&js(r.textContent,l,e),o=["children",""+l]):Pl.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Rn("scroll",r)}switch(t){case"input":_s(r),N2(r,i,!0);break;case"textarea":_s(r),L2(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Uc)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=f4(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[jr]=n,e[$l]=r,Lv(e,n,!1,!1),n.stateNode=e;e:{switch(a=om(t,r),t){case"dialog":Rn("cancel",e),Rn("close",e),o=r;break;case"iframe":case"object":case"embed":Rn("load",e),o=r;break;case"video":case"audio":for(o=0;o<ul.length;o++)Rn(ul[o],e);o=r;break;case"source":Rn("error",e),o=r;break;case"img":case"image":case"link":Rn("error",e),Rn("load",e),o=r;break;case"details":Rn("toggle",e),o=r;break;case"input":R2(e,r),o=Yf(e,r),Rn("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Hn({},r,{value:void 0}),Rn("invalid",e);break;case"textarea":M2(e,r),o=nm(e,r),Rn("invalid",e);break;default:o=r}rm(t,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?p4(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&m4(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Ol(e,s):typeof s=="number"&&Ol(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Pl.hasOwnProperty(i)?s!=null&&i==="onScroll"&&Rn("scroll",e):s!=null&&zh(e,i,s,a))}switch(t){case"input":_s(e),N2(e,r,!1);break;case"textarea":_s(e),L2(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jo(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ia(e,!!r.multiple,i,!1):r.defaultValue!=null&&ia(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Uc)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return vt(n),null;case 6:if(e&&n.stateNode!=null)Dv(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(ue(166));if(t=ii(Hl.current),ii(Br.current),Ds(n)){if(r=n.stateNode,t=n.memoizedProps,r[jr]=n,(i=r.nodeValue!==t)&&(e=Kt,e!==null))switch(e.tag){case 3:js(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&js(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[jr]=n,n.stateNode=r}return vt(n),null;case 13:if(Nn(Bn),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Mn&&qt!==null&&n.mode&1&&!(n.flags&128))tv(),ha(),n.flags|=98560,i=!1;else if(i=Ds(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(ue(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(ue(317));i[jr]=n}else ha(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;vt(n),i=!1}else Ar!==null&&(Dm(Ar),Ar=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Bn.current&1?ot===0&&(ot=3):x0())),n.updateQueue!==null&&(n.flags|=4),vt(n),null);case 4:return ga(),Pm(e,n),e===null&&Dl(n.stateNode.containerInfo),vt(n),null;case 10:return a0(n.type._context),vt(n),null;case 17:return Dt(n.type)&&Zc(),vt(n),null;case 19:if(Nn(Bn),i=n.memoizedState,i===null)return vt(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)qa(i,!1);else{if(ot!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Qc(e),a!==null){for(n.flags|=128,qa(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Fn(Bn,Bn.current&1|2),n.child}e=e.sibling}i.tail!==null&&Gn()>va&&(n.flags|=128,r=!0,qa(i,!1),n.lanes=4194304)}else{if(!r)if(e=Qc(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),qa(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Mn)return vt(n),null}else 2*Gn()-i.renderingStartTime>va&&t!==1073741824&&(n.flags|=128,r=!0,qa(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Gn(),n.sibling=null,t=Bn.current,Fn(Bn,r?t&1|2:t&1),n):(vt(n),null);case 22:case 23:return C0(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Vt&1073741824&&(vt(n),n.subtreeFlags&6&&(n.flags|=8192)):vt(n),null;case 24:return null;case 25:return null}throw Error(ue(156,n.tag))}function uk(e,n){switch(t0(n),n.tag){case 1:return Dt(n.type)&&Zc(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ga(),Nn(jt),Nn(xt),d0(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return u0(n),null;case 13:if(Nn(Bn),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(ue(340));ha()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Nn(Bn),null;case 4:return ga(),null;case 10:return a0(n.type._context),null;case 22:case 23:return C0(),null;case 24:return null;default:return null}}var zs=!1,wt=!1,dk=typeof WeakSet=="function"?WeakSet:Set,Re=null;function ea(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Vn(e,n,r)}else t.current=null}function Om(e,n,t){try{t()}catch(r){Vn(e,n,r)}}var Ep=!1;function fk(e,n){if(hm=$c,e=U4(),e0(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,l=-1,s=-1,c=0,d=0,u=e,f=null;n:for(;;){for(var m;u!==t||o!==0&&u.nodeType!==3||(l=a+o),u!==i||r!==0&&u.nodeType!==3||(s=a+r),u.nodeType===3&&(a+=u.nodeValue.length),(m=u.firstChild)!==null;)f=u,u=m;for(;;){if(u===e)break n;if(f===t&&++c===o&&(l=a),f===i&&++d===r&&(s=a),(m=u.nextSibling)!==null)break;u=f,f=u.parentNode}u=m}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(pm={focusedElem:e,selectionRange:t},$c=!1,Re=n;Re!==null;)if(n=Re,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Re=e;else for(;Re!==null;){n=Re;try{var h=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var v=h.memoizedProps,k=h.memoizedState,g=n.stateNode,b=g.getSnapshotBeforeUpdate(n.elementType===n.type?v:Cr(n.type,v),k);g.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(S){Vn(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,Re=e;break}Re=n.return}return h=Ep,Ep=!1,h}function yl(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Om(n,t,i)}o=o.next}while(o!==r)}}function Du(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Fm(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Bv(e){var n=e.alternate;n!==null&&(e.alternate=null,Bv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[jr],delete n[$l],delete n[vm],delete n[G7],delete n[q7])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $v(e){return e.tag===5||e.tag===3||e.tag===4}function Ap(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$v(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rm(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Uc));else if(r!==4&&(e=e.child,e!==null))for(Rm(e,n,t),e=e.sibling;e!==null;)Rm(e,n,t),e=e.sibling}function Nm(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nm(e,n,t),e=e.sibling;e!==null;)Nm(e,n,t),e=e.sibling}var dt=null,xr=!1;function mo(e,n,t){for(t=t.child;t!==null;)zv(e,n,t),t=t.sibling}function zv(e,n,t){if(Dr&&typeof Dr.onCommitFiberUnmount=="function")try{Dr.onCommitFiberUnmount(Pu,t)}catch{}switch(t.tag){case 5:wt||ea(t,n);case 6:var r=dt,o=xr;dt=null,mo(e,n,t),dt=r,xr=o,dt!==null&&(xr?(e=dt,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):dt.removeChild(t.stateNode));break;case 18:dt!==null&&(xr?(e=dt,t=t.stateNode,e.nodeType===8?Xd(e.parentNode,t):e.nodeType===1&&Xd(e,t),Ml(e)):Xd(dt,t.stateNode));break;case 4:r=dt,o=xr,dt=t.stateNode.containerInfo,xr=!0,mo(e,n,t),dt=r,xr=o;break;case 0:case 11:case 14:case 15:if(!wt&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Om(t,n,a),o=o.next}while(o!==r)}mo(e,n,t);break;case 1:if(!wt&&(ea(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){Vn(t,n,l)}mo(e,n,t);break;case 21:mo(e,n,t);break;case 22:t.mode&1?(wt=(r=wt)||t.memoizedState!==null,mo(e,n,t),wt=r):mo(e,n,t);break;default:mo(e,n,t)}}function Tp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new dk),n.forEach(function(r){var o=kk.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function wr(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:dt=l.stateNode,xr=!1;break e;case 3:dt=l.stateNode.containerInfo,xr=!0;break e;case 4:dt=l.stateNode.containerInfo,xr=!0;break e}l=l.return}if(dt===null)throw Error(ue(160));zv(i,a,o),dt=null,xr=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){Vn(o,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Hv(n,e),n=n.sibling}function Hv(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wr(n,e),Nr(e),r&4){try{yl(3,e,e.return),Du(3,e)}catch(v){Vn(e,e.return,v)}try{yl(5,e,e.return)}catch(v){Vn(e,e.return,v)}}break;case 1:wr(n,e),Nr(e),r&512&&t!==null&&ea(t,t.return);break;case 5:if(wr(n,e),Nr(e),r&512&&t!==null&&ea(t,t.return),e.flags&32){var o=e.stateNode;try{Ol(o,"")}catch(v){Vn(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&u4(o,i),om(l,a);var c=om(l,i);for(a=0;a<s.length;a+=2){var d=s[a],u=s[a+1];d==="style"?p4(o,u):d==="dangerouslySetInnerHTML"?m4(o,u):d==="children"?Ol(o,u):zh(o,d,u,c)}switch(l){case"input":Jf(o,i);break;case"textarea":d4(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?ia(o,!!i.multiple,m,!1):f!==!!i.multiple&&(i.defaultValue!=null?ia(o,!!i.multiple,i.defaultValue,!0):ia(o,!!i.multiple,i.multiple?[]:"",!1))}o[$l]=i}catch(v){Vn(e,e.return,v)}}break;case 6:if(wr(n,e),Nr(e),r&4){if(e.stateNode===null)throw Error(ue(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){Vn(e,e.return,v)}}break;case 3:if(wr(n,e),Nr(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ml(n.containerInfo)}catch(v){Vn(e,e.return,v)}break;case 4:wr(n,e),Nr(e);break;case 13:wr(n,e),Nr(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(w0=Gn())),r&4&&Tp(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(wt=(c=wt)||d,wr(n,e),wt=c):wr(n,e),Nr(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(Re=e,d=e.child;d!==null;){for(u=Re=d;Re!==null;){switch(f=Re,m=f.child,f.tag){case 0:case 11:case 14:case 15:yl(4,f,f.return);break;case 1:ea(f,f.return);var h=f.stateNode;if(typeof h.componentWillUnmount=="function"){r=f,t=f.return;try{n=r,h.props=n.memoizedProps,h.state=n.memoizedState,h.componentWillUnmount()}catch(v){Vn(r,t,v)}}break;case 5:ea(f,f.return);break;case 22:if(f.memoizedState!==null){_p(u);continue}}m!==null?(m.return=f,Re=m):_p(u)}d=d.sibling}e:for(d=null,u=e;;){if(u.tag===5){if(d===null){d=u;try{o=u.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=u.stateNode,s=u.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=h4("display",a))}catch(v){Vn(e,e.return,v)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(v){Vn(e,e.return,v)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:wr(n,e),Nr(e),r&4&&Tp(e);break;case 21:break;default:wr(n,e),Nr(e)}}function Nr(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if($v(t)){var r=t;break e}t=t.return}throw Error(ue(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ol(o,""),r.flags&=-33);var i=Ap(e);Nm(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Ap(e);Rm(e,l,a);break;default:throw Error(ue(161))}}catch(s){Vn(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function mk(e,n,t){Re=e,Uv(e)}function Uv(e,n,t){for(var r=(e.mode&1)!==0;Re!==null;){var o=Re,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||zs;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||wt;l=zs;var c=wt;if(zs=a,(wt=s)&&!c)for(Re=o;Re!==null;)a=Re,s=a.child,a.tag===22&&a.memoizedState!==null?Pp(o):s!==null?(s.return=a,Re=s):Pp(o);for(;i!==null;)Re=i,Uv(i),i=i.sibling;Re=o,zs=l,wt=c}Ip(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,Re=i):Ip(e)}}function Ip(e){for(;Re!==null;){var n=Re;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:wt||Du(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!wt)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:Cr(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&fp(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}fp(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&Ml(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}wt||n.flags&512&&Fm(n)}catch(f){Vn(n,n.return,f)}}if(n===e){Re=null;break}if(t=n.sibling,t!==null){t.return=n.return,Re=t;break}Re=n.return}}function _p(e){for(;Re!==null;){var n=Re;if(n===e){Re=null;break}var t=n.sibling;if(t!==null){t.return=n.return,Re=t;break}Re=n.return}}function Pp(e){for(;Re!==null;){var n=Re;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Du(4,n)}catch(s){Vn(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(s){Vn(n,o,s)}}var i=n.return;try{Fm(n)}catch(s){Vn(n,i,s)}break;case 5:var a=n.return;try{Fm(n)}catch(s){Vn(n,a,s)}}}catch(s){Vn(n,n.return,s)}if(n===e){Re=null;break}var l=n.sibling;if(l!==null){l.return=n.return,Re=l;break}Re=n.return}}var hk=Math.ceil,eu=lo.ReactCurrentDispatcher,v0=lo.ReactCurrentOwner,sr=lo.ReactCurrentBatchConfig,wn=0,lt=null,et=null,ft=0,Vt=0,na=$o(0),ot=0,Vl=null,vi=0,Bu=0,y0=0,wl=null,Mt=null,w0=0,va=1/0,Gr=null,nu=!1,Mm=null,Ro=null,Hs=!1,xo=null,tu=0,kl=0,Lm=null,gc=-1,bc=0;function _t(){return wn&6?Gn():gc!==-1?gc:gc=Gn()}function No(e){return e.mode&1?wn&2&&ft!==0?ft&-ft:Q7.transition!==null?(bc===0&&(bc=T4()),bc):(e=Cn,e!==0||(e=window.event,e=e===void 0?16:N4(e.type)),e):1}function Ir(e,n,t,r){if(50<kl)throw kl=0,Lm=null,Error(ue(185));cs(e,t,r),(!(wn&2)||e!==lt)&&(e===lt&&(!(wn&2)&&(Bu|=t),ot===4&&ko(e,ft)),Bt(e,r),t===1&&wn===0&&!(n.mode&1)&&(va=Gn()+500,Mu&&zo()))}function Bt(e,n){var t=e.callbackNode;Q5(e,n);var r=Bc(e,e===lt?ft:0);if(r===0)t!==null&&B2(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&B2(t),n===1)e.tag===0?K7(Op.bind(null,e)):J4(Op.bind(null,e)),V7(function(){!(wn&6)&&zo()}),t=null;else{switch(I4(r)){case 1:t=Vh;break;case 4:t=E4;break;case 16:t=Dc;break;case 536870912:t=A4;break;default:t=Dc}t=Qv(t,Zv.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Zv(e,n){if(gc=-1,bc=0,wn&6)throw Error(ue(327));var t=e.callbackNode;if(ua()&&e.callbackNode!==t)return null;var r=Bc(e,e===lt?ft:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ru(e,r);else{n=r;var o=wn;wn|=2;var i=Vv();(lt!==e||ft!==n)&&(Gr=null,va=Gn()+500,ci(e,n));do try{bk();break}catch(l){Wv(e,l)}while(!0);i0(),eu.current=i,wn=o,et!==null?n=0:(lt=null,ft=0,n=ot)}if(n!==0){if(n===2&&(o=cm(e),o!==0&&(r=o,n=jm(e,o))),n===1)throw t=Vl,ci(e,0),ko(e,r),Bt(e,Gn()),t;if(n===6)ko(e,r);else{if(o=e.current.alternate,!(r&30)&&!pk(o)&&(n=ru(e,r),n===2&&(i=cm(e),i!==0&&(r=i,n=jm(e,i))),n===1))throw t=Vl,ci(e,0),ko(e,r),Bt(e,Gn()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(ue(345));case 2:Yo(e,Mt,Gr);break;case 3:if(ko(e,r),(r&130023424)===r&&(n=w0+500-Gn(),10<n)){if(Bc(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){_t(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=bm(Yo.bind(null,e,Mt,Gr),n);break}Yo(e,Mt,Gr);break;case 4:if(ko(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var a=31-Tr(r);i=1<<a,a=n[a],a>o&&(o=a),r&=~i}if(r=o,r=Gn()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hk(r/1960))-r,10<r){e.timeoutHandle=bm(Yo.bind(null,e,Mt,Gr),r);break}Yo(e,Mt,Gr);break;case 5:Yo(e,Mt,Gr);break;default:throw Error(ue(329))}}}return Bt(e,Gn()),e.callbackNode===t?Zv.bind(null,e):null}function jm(e,n){var t=wl;return e.current.memoizedState.isDehydrated&&(ci(e,n).flags|=256),e=ru(e,n),e!==2&&(n=Mt,Mt=t,n!==null&&Dm(n)),e}function Dm(e){Mt===null?Mt=e:Mt.push.apply(Mt,e)}function pk(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!Fr(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ko(e,n){for(n&=~y0,n&=~Bu,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Tr(n),r=1<<t;e[t]=-1,n&=~r}}function Op(e){if(wn&6)throw Error(ue(327));ua();var n=Bc(e,0);if(!(n&1))return Bt(e,Gn()),null;var t=ru(e,n);if(e.tag!==0&&t===2){var r=cm(e);r!==0&&(n=r,t=jm(e,r))}if(t===1)throw t=Vl,ci(e,0),ko(e,n),Bt(e,Gn()),t;if(t===6)throw Error(ue(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Yo(e,Mt,Gr),Bt(e,Gn()),null}function k0(e,n){var t=wn;wn|=1;try{return e(n)}finally{wn=t,wn===0&&(va=Gn()+500,Mu&&zo())}}function yi(e){xo!==null&&xo.tag===0&&!(wn&6)&&ua();var n=wn;wn|=1;var t=sr.transition,r=Cn;try{if(sr.transition=null,Cn=1,e)return e()}finally{Cn=r,sr.transition=t,wn=n,!(wn&6)&&zo()}}function C0(){Vt=na.current,Nn(na)}function ci(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,W7(t)),et!==null)for(t=et.return;t!==null;){var r=t;switch(t0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zc();break;case 3:ga(),Nn(jt),Nn(xt),d0();break;case 5:u0(r);break;case 4:ga();break;case 13:Nn(Bn);break;case 19:Nn(Bn);break;case 10:a0(r.type._context);break;case 22:case 23:C0()}t=t.return}if(lt=e,et=e=Mo(e.current,null),ft=Vt=n,ot=0,Vl=null,y0=Bu=vi=0,Mt=wl=null,oi!==null){for(n=0;n<oi.length;n++)if(t=oi[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}t.pending=r}oi=null}return e}function Wv(e,n){do{var t=et;try{if(i0(),mc.current=Jc,Yc){for(var r=$n.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Yc=!1}if(bi=0,it=rt=$n=null,vl=!1,Ul=0,v0.current=null,t===null||t.return===null){ot=1,Vl=n,et=null;break}e:{var i=e,a=t.return,l=t,s=n;if(n=ft,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=l,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=vp(a);if(m!==null){m.flags&=-257,yp(m,a,l,i,n),m.mode&1&&bp(i,c,n),n=m,s=c;var h=n.updateQueue;if(h===null){var v=new Set;v.add(s),n.updateQueue=v}else h.add(s);break e}else{if(!(n&1)){bp(i,c,n),x0();break e}s=Error(ue(426))}}else if(Mn&&l.mode&1){var k=vp(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),yp(k,a,l,i,n),r0(ba(s,l));break e}}i=s=ba(s,l),ot!==4&&(ot=2),wl===null?wl=[i]:wl.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var g=Iv(i,s,n);dp(i,g);break e;case 1:l=s;var b=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof b.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Ro===null||!Ro.has(y)))){i.flags|=65536,n&=-n,i.lanes|=n;var S=_v(i,l,n);dp(i,S);break e}}i=i.return}while(i!==null)}Gv(t)}catch(A){n=A,et===t&&t!==null&&(et=t=t.return);continue}break}while(!0)}function Vv(){var e=eu.current;return eu.current=Jc,e===null?Jc:e}function x0(){(ot===0||ot===3||ot===2)&&(ot=4),lt===null||!(vi&268435455)&&!(Bu&268435455)||ko(lt,ft)}function ru(e,n){var t=wn;wn|=2;var r=Vv();(lt!==e||ft!==n)&&(Gr=null,ci(e,n));do try{gk();break}catch(o){Wv(e,o)}while(!0);if(i0(),wn=t,eu.current=r,et!==null)throw Error(ue(261));return lt=null,ft=0,ot}function gk(){for(;et!==null;)Xv(et)}function bk(){for(;et!==null&&!H5();)Xv(et)}function Xv(e){var n=Kv(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,n===null?Gv(e):et=n,v0.current=null}function Gv(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=uk(t,n),t!==null){t.flags&=32767,et=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ot=6,et=null;return}}else if(t=ck(t,n,Vt),t!==null){et=t;return}if(n=n.sibling,n!==null){et=n;return}et=n=e}while(n!==null);ot===0&&(ot=5)}function Yo(e,n,t){var r=Cn,o=sr.transition;try{sr.transition=null,Cn=1,vk(e,n,t,r)}finally{sr.transition=o,Cn=r}return null}function vk(e,n,t,r){do ua();while(xo!==null);if(wn&6)throw Error(ue(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(ue(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Y5(e,i),e===lt&&(et=lt=null,ft=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Hs||(Hs=!0,Qv(Dc,function(){return ua(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=sr.transition,sr.transition=null;var a=Cn;Cn=1;var l=wn;wn|=4,v0.current=null,fk(e,t),Hv(t,e),D7(pm),$c=!!hm,pm=hm=null,e.current=t,mk(t),U5(),wn=l,Cn=a,sr.transition=i}else e.current=t;if(Hs&&(Hs=!1,xo=e,tu=o),i=e.pendingLanes,i===0&&(Ro=null),V5(t.stateNode),Bt(e,Gn()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(nu)throw nu=!1,e=Mm,Mm=null,e;return tu&1&&e.tag!==0&&ua(),i=e.pendingLanes,i&1?e===Lm?kl++:(kl=0,Lm=e):kl=0,zo(),null}function ua(){if(xo!==null){var e=I4(tu),n=sr.transition,t=Cn;try{if(sr.transition=null,Cn=16>e?16:e,xo===null)var r=!1;else{if(e=xo,xo=null,tu=0,wn&6)throw Error(ue(331));var o=wn;for(wn|=4,Re=e.current;Re!==null;){var i=Re,a=i.child;if(Re.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(Re=c;Re!==null;){var d=Re;switch(d.tag){case 0:case 11:case 15:yl(8,d,i)}var u=d.child;if(u!==null)u.return=d,Re=u;else for(;Re!==null;){d=Re;var f=d.sibling,m=d.return;if(Bv(d),d===c){Re=null;break}if(f!==null){f.return=m,Re=f;break}Re=m}}}var h=i.alternate;if(h!==null){var v=h.child;if(v!==null){h.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}Re=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,Re=a;else e:for(;Re!==null;){if(i=Re,i.flags&2048)switch(i.tag){case 0:case 11:case 15:yl(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,Re=g;break e}Re=i.return}}var b=e.current;for(Re=b;Re!==null;){a=Re;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Re=y;else e:for(a=b;Re!==null;){if(l=Re,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Du(9,l)}}catch(A){Vn(l,l.return,A)}if(l===a){Re=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,Re=S;break e}Re=l.return}}if(wn=o,zo(),Dr&&typeof Dr.onPostCommitFiberRoot=="function")try{Dr.onPostCommitFiberRoot(Pu,e)}catch{}r=!0}return r}finally{Cn=t,sr.transition=n}}return!1}function Fp(e,n,t){n=ba(t,n),n=Iv(e,n,1),e=Fo(e,n,1),n=_t(),e!==null&&(cs(e,1,n),Bt(e,n))}function Vn(e,n,t){if(e.tag===3)Fp(e,e,t);else for(;n!==null;){if(n.tag===3){Fp(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ro===null||!Ro.has(r))){e=ba(t,e),e=_v(n,e,1),n=Fo(n,e,1),e=_t(),n!==null&&(cs(n,1,e),Bt(n,e));break}}n=n.return}}function yk(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=_t(),e.pingedLanes|=e.suspendedLanes&t,lt===e&&(ft&t)===t&&(ot===4||ot===3&&(ft&130023424)===ft&&500>Gn()-w0?ci(e,0):y0|=t),Bt(e,n)}function qv(e,n){n===0&&(e.mode&1?(n=Fs,Fs<<=1,!(Fs&130023424)&&(Fs=4194304)):n=1);var t=_t();e=oo(e,n),e!==null&&(cs(e,n,t),Bt(e,t))}function wk(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),qv(e,t)}function kk(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(ue(314))}r!==null&&r.delete(n),qv(e,t)}var Kv;Kv=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||jt.current)Lt=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Lt=!1,sk(e,n,t);Lt=!!(e.flags&131072)}else Lt=!1,Mn&&n.flags&1048576&&ev(n,Xc,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;pc(e,n),e=n.pendingProps;var o=ma(n,xt.current);ca(n,t),o=m0(null,n,r,e,o,t);var i=h0();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Dt(r)?(i=!0,Wc(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,s0(n),o.updater=ju,n.stateNode=o,o._reactInternals=n,Sm(n,r,e,t),n=Tm(null,n,r,!0,i,t)):(n.tag=0,Mn&&i&&n0(n),At(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(pc(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=xk(r),e=Cr(r,e),o){case 0:n=Am(null,n,r,e,t);break e;case 1:n=Cp(null,n,r,e,t);break e;case 11:n=wp(null,n,r,e,t);break e;case 14:n=kp(null,n,r,Cr(r.type,e),t);break e}throw Error(ue(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Cr(r,o),Am(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Cr(r,o),Cp(e,n,r,o,t);case 3:e:{if(Rv(n),e===null)throw Error(ue(387));r=n.pendingProps,i=n.memoizedState,o=i.element,av(e,n),Kc(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=ba(Error(ue(423)),n),n=xp(e,n,r,t,o);break e}else if(r!==o){o=ba(Error(ue(424)),n),n=xp(e,n,r,t,o);break e}else for(qt=Oo(n.stateNode.containerInfo.firstChild),Kt=n,Mn=!0,Ar=null,t=ov(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ha(),r===o){n=io(e,n,t);break e}At(e,n,r,t)}n=n.child}return n;case 5:return lv(n),e===null&&km(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,gm(r,o)?a=null:i!==null&&gm(r,i)&&(n.flags|=32),Fv(e,n),At(e,n,a,t),n.child;case 6:return e===null&&km(n),null;case 13:return Nv(e,n,t);case 4:return c0(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=pa(n,null,r,t):At(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Cr(r,o),wp(e,n,r,o,t);case 7:return At(e,n,n.pendingProps,t),n.child;case 8:return At(e,n,n.pendingProps.children,t),n.child;case 12:return At(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,a=o.value,Fn(Gc,r._currentValue),r._currentValue=a,i!==null)if(Fr(i.value,a)){if(i.children===o.children&&!jt.current){n=io(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Jr(-1,t&-t),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Cm(i.return,t,n),l.lanes|=t;break}s=s.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(ue(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),Cm(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}At(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,ca(n,t),o=ur(o),r=r(o),n.flags|=1,At(e,n,r,t),n.child;case 14:return r=n.type,o=Cr(r,n.pendingProps),o=Cr(r.type,o),kp(e,n,r,o,t);case 15:return Pv(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Cr(r,o),pc(e,n),n.tag=1,Dt(r)?(e=!0,Wc(n)):e=!1,ca(n,t),Tv(n,r,o),Sm(n,r,o,t),Tm(null,n,r,!0,e,t);case 19:return Mv(e,n,t);case 22:return Ov(e,n,t)}throw Error(ue(156,n.tag))};function Qv(e,n){return S4(e,n)}function Ck(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lr(e,n,t,r){return new Ck(e,n,t,r)}function S0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xk(e){if(typeof e=="function")return S0(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Uh)return 11;if(e===Zh)return 14}return 2}function Mo(e,n){var t=e.alternate;return t===null?(t=lr(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function vc(e,n,t,r,o,i){var a=2;if(r=e,typeof e=="function")S0(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Wi:return ui(t.children,o,i,n);case Hh:a=8,o|=8;break;case Gf:return e=lr(12,t,n,o|2),e.elementType=Gf,e.lanes=i,e;case qf:return e=lr(13,t,n,o),e.elementType=qf,e.lanes=i,e;case Kf:return e=lr(19,t,n,o),e.elementType=Kf,e.lanes=i,e;case l4:return $u(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case i4:a=10;break e;case a4:a=9;break e;case Uh:a=11;break e;case Zh:a=14;break e;case vo:a=16,r=null;break e}throw Error(ue(130,e==null?e:typeof e,""))}return n=lr(a,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function ui(e,n,t,r){return e=lr(7,e,r,n),e.lanes=t,e}function $u(e,n,t,r){return e=lr(22,e,r,n),e.elementType=l4,e.lanes=t,e.stateNode={isHidden:!1},e}function nf(e,n,t){return e=lr(6,e,null,n),e.lanes=t,e}function tf(e,n,t){return n=lr(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Sk(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ld(0),this.expirationTimes=Ld(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ld(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function E0(e,n,t,r,o,i,a,l,s){return e=new Sk(e,n,t,l,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=lr(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},s0(i),e}function Ek(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zi,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Yv(e){if(!e)return Do;e=e._reactInternals;e:{if(Ei(e)!==e||e.tag!==1)throw Error(ue(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Dt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(ue(171))}if(e.tag===1){var t=e.type;if(Dt(t))return Y4(e,t,n)}return n}function Jv(e,n,t,r,o,i,a,l,s){return e=E0(t,r,!0,e,o,i,a,l,s),e.context=Yv(null),t=e.current,r=_t(),o=No(t),i=Jr(r,o),i.callback=n??null,Fo(t,i,o),e.current.lanes=o,cs(e,o,r),Bt(e,r),e}function zu(e,n,t,r){var o=n.current,i=_t(),a=No(o);return t=Yv(t),n.context===null?n.context=t:n.pendingContext=t,n=Jr(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Fo(o,n,a),e!==null&&(Ir(e,o,a,i),fc(e,o,a)),a}function ou(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function A0(e,n){Rp(e,n),(e=e.alternate)&&Rp(e,n)}function Ak(){return null}var ey=typeof reportError=="function"?reportError:function(e){console.error(e)};function T0(e){this._internalRoot=e}Hu.prototype.render=T0.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(ue(409));zu(e,n,null,null)};Hu.prototype.unmount=T0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;yi(function(){zu(null,e,null,null)}),n[ro]=null}};function Hu(e){this._internalRoot=e}Hu.prototype.unstable_scheduleHydration=function(e){if(e){var n=O4();e={blockedOn:null,target:e,priority:n};for(var t=0;t<wo.length&&n!==0&&n<wo[t].priority;t++);wo.splice(t,0,e),t===0&&R4(e)}};function I0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Uu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Np(){}function Tk(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=ou(a);i.call(c)}}var a=Jv(n,r,e,0,null,!1,!1,"",Np);return e._reactRootContainer=a,e[ro]=a.current,Dl(e.nodeType===8?e.parentNode:e),yi(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=ou(s);l.call(c)}}var s=E0(e,0,!1,null,null,!1,!1,"",Np);return e._reactRootContainer=s,e[ro]=s.current,Dl(e.nodeType===8?e.parentNode:e),yi(function(){zu(n,s,t,r)}),s}function Zu(e,n,t,r,o){var i=t._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=ou(a);l.call(s)}}zu(n,a,e,o)}else a=Tk(t,n,e,o,r);return ou(a)}_4=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=cl(n.pendingLanes);t!==0&&(Xh(n,t|1),Bt(n,Gn()),!(wn&6)&&(va=Gn()+500,zo()))}break;case 13:yi(function(){var r=oo(e,1);if(r!==null){var o=_t();Ir(r,e,1,o)}}),A0(e,1)}};Gh=function(e){if(e.tag===13){var n=oo(e,134217728);if(n!==null){var t=_t();Ir(n,e,134217728,t)}A0(e,134217728)}};P4=function(e){if(e.tag===13){var n=No(e),t=oo(e,n);if(t!==null){var r=_t();Ir(t,e,n,r)}A0(e,n)}};O4=function(){return Cn};F4=function(e,n){var t=Cn;try{return Cn=e,n()}finally{Cn=t}};am=function(e,n,t){switch(n){case"input":if(Jf(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Nu(r);if(!o)throw Error(ue(90));c4(r),Jf(r,o)}}}break;case"textarea":d4(e,t);break;case"select":n=t.value,n!=null&&ia(e,!!t.multiple,n,!1)}};v4=k0;y4=yi;var Ik={usingClientEntryPoint:!1,Events:[ds,qi,Nu,g4,b4,k0]},Ka={findFiberByHostInstance:ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_k={bundleType:Ka.bundleType,version:Ka.version,rendererPackageName:Ka.rendererPackageName,rendererConfig:Ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lo.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=C4(e),e===null?null:e.stateNode},findFiberByHostInstance:Ka.findFiberByHostInstance||Ak,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Us.isDisabled&&Us.supportsFiber)try{Pu=Us.inject(_k),Dr=Us}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ik;Jt.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!I0(n))throw Error(ue(200));return Ek(e,n,null,t)};Jt.createRoot=function(e,n){if(!I0(e))throw Error(ue(299));var t=!1,r="",o=ey;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=E0(e,1,!1,null,null,t,!1,r,o),e[ro]=n.current,Dl(e.nodeType===8?e.parentNode:e),new T0(n)};Jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(ue(188)):(e=Object.keys(e).join(","),Error(ue(268,e)));return e=C4(n),e=e===null?null:e.stateNode,e};Jt.flushSync=function(e){return yi(e)};Jt.hydrate=function(e,n,t){if(!Uu(n))throw Error(ue(200));return Zu(null,e,n,!0,t)};Jt.hydrateRoot=function(e,n,t){if(!I0(e))throw Error(ue(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",a=ey;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Jv(n,null,e,1,t??null,o,!1,i,a),e[ro]=n.current,Dl(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Hu(n)};Jt.render=function(e,n,t){if(!Uu(n))throw Error(ue(200));return Zu(null,e,n,!1,t)};Jt.unmountComponentAtNode=function(e){if(!Uu(e))throw Error(ue(40));return e._reactRootContainer?(yi(function(){Zu(null,null,e,!1,function(){e._reactRootContainer=null,e[ro]=null})}),!0):!1};Jt.unstable_batchedUpdates=k0;Jt.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Uu(t))throw Error(ue(200));if(e==null||e._reactInternals===void 0)throw Error(ue(38));return Zu(e,n,t,!1,r)};Jt.version="18.3.1-next-f1338f8080-20240426";function ny(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ny)}catch(e){console.error(e)}}ny(),n4.exports=Jt;var Ia=n4.exports;const Bm=as(Ia),ty=Hb({__proto__:null,default:Bm},[Ia]);var Mp=Ia;Vf.createRoot=Mp.createRoot,Vf.hydrateRoot=Mp.hydrateRoot;/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dn(){return Dn=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Dn.apply(this,arguments)}var Yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Yn||(Yn={}));const Lp="popstate";function Pk(e){e===void 0&&(e={});function n(r,o){let{pathname:i,search:a,hash:l}=r.location;return Xl("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:ms(o)}return Fk(n,t,null,e)}function fn(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function ya(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Ok(){return Math.random().toString(36).substr(2,8)}function jp(e,n){return{usr:e.state,key:e.key,idx:n}}function Xl(e,n,t,r){return t===void 0&&(t=null),Dn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Ho(n):n,{state:t,key:n&&n.key||r||Ok()})}function ms(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Ho(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Fk(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=Yn.Pop,s=null,c=d();c==null&&(c=0,a.replaceState(Dn({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function u(){l=Yn.Pop;let k=d(),g=k==null?null:k-c;c=k,s&&s({action:l,location:v.location,delta:g})}function f(k,g){l=Yn.Push;let b=Xl(v.location,k,g);c=d()+1;let y=jp(b,c),S=v.createHref(b);try{a.pushState(y,"",S)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;o.location.assign(S)}i&&s&&s({action:l,location:v.location,delta:1})}function m(k,g){l=Yn.Replace;let b=Xl(v.location,k,g);c=d();let y=jp(b,c),S=v.createHref(b);a.replaceState(y,"",S),i&&s&&s({action:l,location:v.location,delta:0})}function h(k){let g=o.location.origin!=="null"?o.location.origin:o.location.href,b=typeof k=="string"?k:ms(k);return b=b.replace(/ $/,"%20"),fn(g,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,g)}let v={get action(){return l},get location(){return e(o,a)},listen(k){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Lp,u),s=k,()=>{o.removeEventListener(Lp,u),s=null}},createHref(k){return n(o,k)},createURL:h,encodeLocation(k){let g=h(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:m,go(k){return a.go(k)}};return v}var On;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(On||(On={}));const Rk=new Set(["lazy","caseSensitive","path","id","index","children"]);function Nk(e){return e.index===!0}function Gl(e,n,t,r){return t===void 0&&(t=[]),r===void 0&&(r={}),e.map((o,i)=>{let a=[...t,String(i)],l=typeof o.id=="string"?o.id:a.join("-");if(fn(o.index!==!0||!o.children,"Cannot specify children on an index route"),fn(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),Nk(o)){let s=Dn({},o,n(o),{id:l});return r[l]=s,s}else{let s=Dn({},o,n(o),{id:l,children:void 0});return r[l]=s,o.children&&(s.children=Gl(o.children,n,a,r)),s}})}function ei(e,n,t){return t===void 0&&(t="/"),yc(e,n,t,!1)}function yc(e,n,t,r){let o=typeof n=="string"?Ho(n):n,i=hs(o.pathname||"/",t);if(i==null)return null;let a=ry(e);Lk(a);let l=null;for(let s=0;l==null&&s<a.length;++s){let c=Xk(i);l=Wk(a[s],c,r)}return l}function Mk(e,n){let{route:t,pathname:r,params:o}=e;return{id:t.id,pathname:r,params:o,data:n[t.id],handle:t.handle}}function ry(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(fn(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=Lo([r,s.relativePath]),d=t.concat(s);i.children&&i.children.length>0&&(fn(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ry(i.children,n,d,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:Uk(c,i.index),routesMeta:d})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of oy(i.path))o(i,a,s)}),n}function oy(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=oy(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Lk(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Zk(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const jk=/^:[\w-]+$/,Dk=3,Bk=2,$k=1,zk=10,Hk=-2,Dp=e=>e==="*";function Uk(e,n){let t=e.split("/"),r=t.length;return t.some(Dp)&&(r+=Hk),n&&(r+=Bk),t.filter(o=>!Dp(o)).reduce((o,i)=>o+(jk.test(i)?Dk:i===""?$k:zk),r)}function Zk(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function Wk(e,n,t){t===void 0&&(t=!1);let{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let s=r[l],c=l===r.length-1,d=i==="/"?n:n.slice(i.length)||"/",u=Bp({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d),f=s.route;if(!u&&c&&t&&!r[r.length-1].route.index&&(u=Bp({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},d)),!u)return null;Object.assign(o,u.params),a.push({params:o,pathname:Lo([i,u.pathname]),pathnameBase:Kk(Lo([i,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(i=Lo([i,u.pathnameBase]))}return a}function Bp(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Vk(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((c,d,u)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let v=l[u]||"";a=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const h=l[u];return m&&!h?c[f]=void 0:c[f]=(h||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:a,pattern:e}}function Vk(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),ya(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function Xk(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ya(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function hs(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function Gk(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?Ho(e):e;return{pathname:t?t.startsWith("/")?t:qk(t,n):n,search:Qk(r),hash:Yk(o)}}function qk(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function rf(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function iy(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function ay(e,n){let t=iy(e);return n?t.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function ly(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Ho(e):(o=Dn({},e),fn(!o.pathname||!o.pathname.includes("?"),rf("?","pathname","search",o)),fn(!o.pathname||!o.pathname.includes("#"),rf("#","pathname","hash",o)),fn(!o.search||!o.search.includes("#"),rf("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=t;else{let u=n.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),u-=1;o.pathname=f.join("/")}l=u>=0?n[u]:"/"}let s=Gk(o,l),c=a&&a!=="/"&&a.endsWith("/"),d=(i||a===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const Lo=e=>e.join("/").replace(/\/\/+/g,"/"),Kk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Qk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Yk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class _0{constructor(n,t,r,o){o===void 0&&(o=!1),this.status=n,this.statusText=t||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Wu(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const sy=["post","put","patch","delete"],Jk=new Set(sy),e8=["get",...sy],n8=new Set(e8),t8=new Set([301,302,303,307,308]),r8=new Set([307,308]),of={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},o8={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Qa={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},P0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,i8=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),cy="remix-router-transitions";function a8(e){const n=e.window?e.window:typeof window<"u"?window:void 0,t=typeof n<"u"&&typeof n.document<"u"&&typeof n.document.createElement<"u",r=!t;fn(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let L=e.detectErrorBoundary;o=U=>({hasErrorBoundary:L(U)})}else o=i8;let i={},a=Gl(e.routes,o,void 0,i),l,s=e.basename||"/",c=e.unstable_dataStrategy||d8,d=e.unstable_patchRoutesOnMiss,u=Dn({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},e.future),f=null,m=new Set,h=null,v=null,k=null,g=e.hydrationData!=null,b=ei(a,e.history.location,s),y=null;if(b==null&&!d){let L=Et(404,{pathname:e.history.location.pathname}),{matches:U,route:X}=qp(a);b=U,y={[X.id]:L}}let S;if(!b)S=!1,b=[];else if(b.some(L=>L.route.lazy))S=!1;else if(!b.some(L=>L.route.loader))S=!0;else if(u.v7_partialHydration){let L=e.hydrationData?e.hydrationData.loaderData:null,U=e.hydrationData?e.hydrationData.errors:null,X=ee=>ee.route.loader?typeof ee.route.loader=="function"&&ee.route.loader.hydrate===!0?!1:L&&L[ee.route.id]!==void 0||U&&U[ee.route.id]!==void 0:!0;if(U){let ee=b.findIndex(be=>U[be.route.id]!==void 0);S=b.slice(0,ee+1).every(X)}else S=b.every(X)}else S=e.hydrationData!=null;let A,w={historyAction:e.history.action,location:e.history.location,matches:b,initialized:S,navigation:of,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||y,fetchers:new Map,blockers:new Map},I=Yn.Pop,R=!1,M,_=!1,D=new Map,H=null,j=!1,B=!1,V=[],$=[],O=new Map,P=0,W=-1,x=new Map,G=new Set,Z=new Map,T=new Map,Q=new Set,ne=new Map,N=new Map,te=new Map,Y=!1;function ye(){if(f=e.history.listen(L=>{let{action:U,location:X,delta:ee}=L;if(Y){Y=!1;return}ya(N.size===0||ee!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let be=rn({currentLocation:w.location,nextLocation:X,historyAction:U});if(be&&ee!=null){Y=!0,e.history.go(ee*-1),Ye(be,{state:"blocked",location:X,proceed(){Ye(be,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),e.history.go(ee)},reset(){let ke=new Map(w.blockers);ke.set(be,Qa),se({blockers:ke})}});return}return ae(U,X)}),t){S8(n,D);let L=()=>E8(n,D);n.addEventListener("pagehide",L),H=()=>n.removeEventListener("pagehide",L)}return w.initialized||ae(Yn.Pop,w.location,{initialHydration:!0}),A}function ge(){f&&f(),H&&H(),m.clear(),M&&M.abort(),w.fetchers.forEach((L,U)=>K(U)),w.blockers.forEach((L,U)=>Ee(U))}function Ce(L){return m.add(L),()=>m.delete(L)}function se(L,U){U===void 0&&(U={}),w=Dn({},w,L);let X=[],ee=[];u.v7_fetcherPersist&&w.fetchers.forEach((be,ke)=>{be.state==="idle"&&(Q.has(ke)?ee.push(ke):X.push(ke))}),[...m].forEach(be=>be(w,{deletedFetchers:ee,unstable_viewTransitionOpts:U.viewTransitionOpts,unstable_flushSync:U.flushSync===!0})),u.v7_fetcherPersist&&(X.forEach(be=>w.fetchers.delete(be)),ee.forEach(be=>K(be)))}function Ge(L,U,X){var ee,be;let{flushSync:ke}=X===void 0?{}:X,Fe=w.actionData!=null&&w.navigation.formMethod!=null&&Sr(w.navigation.formMethod)&&w.navigation.state==="loading"&&((ee=L.state)==null?void 0:ee._isRedirect)!==!0,le;U.actionData?Object.keys(U.actionData).length>0?le=U.actionData:le=null:Fe?le=w.actionData:le=null;let He=U.loaderData?Xp(w.loaderData,U.loaderData,U.matches||[],U.errors):w.loaderData,fe=w.blockers;fe.size>0&&(fe=new Map(fe),fe.forEach((ln,un)=>fe.set(un,Qa)));let $e=R===!0||w.navigation.formMethod!=null&&Sr(w.navigation.formMethod)&&((be=L.state)==null?void 0:be._isRedirect)!==!0;l&&(a=l,l=void 0),j||I===Yn.Pop||(I===Yn.Push?e.history.push(L,L.state):I===Yn.Replace&&e.history.replace(L,L.state));let cn;if(I===Yn.Pop){let ln=D.get(w.location.pathname);ln&&ln.has(L.pathname)?cn={currentLocation:w.location,nextLocation:L}:D.has(L.pathname)&&(cn={currentLocation:L,nextLocation:w.location})}else if(_){let ln=D.get(w.location.pathname);ln?ln.add(L.pathname):(ln=new Set([L.pathname]),D.set(w.location.pathname,ln)),cn={currentLocation:w.location,nextLocation:L}}se(Dn({},U,{actionData:le,loaderData:He,historyAction:I,location:L,initialized:!0,navigation:of,revalidation:"idle",restoreScrollPosition:De(L,U.matches||w.matches),preventScrollReset:$e,blockers:fe}),{viewTransitionOpts:cn,flushSync:ke===!0}),I=Yn.Pop,R=!1,_=!1,j=!1,B=!1,V=[],$=[]}async function Ve(L,U){if(typeof L=="number"){e.history.go(L);return}let X=$m(w.location,w.matches,s,u.v7_prependBasename,L,u.v7_relativeSplatPath,U==null?void 0:U.fromRouteId,U==null?void 0:U.relative),{path:ee,submission:be,error:ke}=$p(u.v7_normalizeFormMethod,!1,X,U),Fe=w.location,le=Xl(w.location,ee,U&&U.state);le=Dn({},le,e.history.encodeLocation(le));let He=U&&U.replace!=null?U.replace:void 0,fe=Yn.Push;He===!0?fe=Yn.Replace:He===!1||be!=null&&Sr(be.formMethod)&&be.formAction===w.location.pathname+w.location.search&&(fe=Yn.Replace);let $e=U&&"preventScrollReset"in U?U.preventScrollReset===!0:void 0,cn=(U&&U.unstable_flushSync)===!0,ln=rn({currentLocation:Fe,nextLocation:le,historyAction:fe});if(ln){Ye(ln,{state:"blocked",location:le,proceed(){Ye(ln,{state:"proceeding",proceed:void 0,reset:void 0,location:le}),Ve(L,U)},reset(){let un=new Map(w.blockers);un.set(ln,Qa),se({blockers:un})}});return}return await ae(fe,le,{submission:be,pendingError:ke,preventScrollReset:$e,replace:U&&U.replace,enableViewTransition:U&&U.unstable_viewTransition,flushSync:cn})}function Ae(){if(E(),se({revalidation:"loading"}),w.navigation.state!=="submitting"){if(w.navigation.state==="idle"){ae(w.historyAction,w.location,{startUninterruptedRevalidation:!0});return}ae(I||w.historyAction,w.navigation.location,{overrideNavigation:w.navigation})}}async function ae(L,U,X){M&&M.abort(),M=null,I=L,j=(X&&X.startUninterruptedRevalidation)===!0,qe(w.location,w.matches),R=(X&&X.preventScrollReset)===!0,_=(X&&X.enableViewTransition)===!0;let ee=l||a,be=X&&X.overrideNavigation,ke=ei(ee,U,s),Fe=(X&&X.flushSync)===!0,le=Se(ke,ee,U.pathname);if(le.active&&le.matches&&(ke=le.matches),!ke){let{error:dn,notFoundMatches:In,route:kn}=Xe(U.pathname);Ge(U,{matches:In,loaderData:{},errors:{[kn.id]:dn}},{flushSync:Fe});return}if(w.initialized&&!B&&b8(w.location,U)&&!(X&&X.submission&&Sr(X.submission.formMethod))){Ge(U,{matches:ke},{flushSync:Fe});return}M=new AbortController;let He=Mi(e.history,U,M.signal,X&&X.submission),fe;if(X&&X.pendingError)fe=[Cl(ke).route.id,{type:On.error,error:X.pendingError}];else if(X&&X.submission&&Sr(X.submission.formMethod)){let dn=await de(He,U,X.submission,ke,le.active,{replace:X.replace,flushSync:Fe});if(dn.shortCircuited)return;if(dn.pendingActionResult){let[In,kn]=dn.pendingActionResult;if(Xt(kn)&&Wu(kn.error)&&kn.error.status===404){M=null,Ge(U,{matches:dn.matches,loaderData:{},errors:{[In]:kn.error}});return}}ke=dn.matches||ke,fe=dn.pendingActionResult,be=af(U,X.submission),Fe=!1,le.active=!1,He=Mi(e.history,He.url,He.signal)}let{shortCircuited:$e,matches:cn,loaderData:ln,errors:un}=await xe(He,U,ke,le.active,be,X&&X.submission,X&&X.fetcherSubmission,X&&X.replace,X&&X.initialHydration===!0,Fe,fe);$e||(M=null,Ge(U,Dn({matches:cn||ke},Gp(fe),{loaderData:ln,errors:un})))}async function de(L,U,X,ee,be,ke){ke===void 0&&(ke={}),E();let Fe=C8(U,X);if(se({navigation:Fe},{flushSync:ke.flushSync===!0}),be){let fe=await Ne(ee,U.pathname,L.signal);if(fe.type==="aborted")return{shortCircuited:!0};if(fe.type==="error"){let{error:$e,notFoundMatches:cn,route:ln}=sn(U.pathname,fe);return{matches:cn,pendingActionResult:[ln.id,{type:On.error,error:$e}]}}else if(fe.matches)ee=fe.matches;else{let{notFoundMatches:$e,error:cn,route:ln}=Xe(U.pathname);return{matches:$e,pendingActionResult:[ln.id,{type:On.error,error:cn}]}}}let le,He=dl(ee,U);if(!He.route.action&&!He.route.lazy)le={type:On.error,error:Et(405,{method:L.method,pathname:U.pathname,routeId:He.route.id})};else if(le=(await je("action",L,[He],ee))[0],L.signal.aborted)return{shortCircuited:!0};if(li(le)){let fe;return ke&&ke.replace!=null?fe=ke.replace:fe=Zp(le.response.headers.get("Location"),new URL(L.url),s)===w.location.pathname+w.location.search,await oe(L,le,{submission:X,replace:fe}),{shortCircuited:!0}}if(ai(le))throw Et(400,{type:"defer-action"});if(Xt(le)){let fe=Cl(ee,He.route.id);return(ke&&ke.replace)!==!0&&(I=Yn.Push),{matches:ee,pendingActionResult:[fe.route.id,le]}}return{matches:ee,pendingActionResult:[He.route.id,le]}}async function xe(L,U,X,ee,be,ke,Fe,le,He,fe,$e){let cn=be||af(U,ke),ln=ke||Fe||Yp(cn),un=!j&&(!u.v7_partialHydration||!He);if(ee){if(un){let pn=Te($e);se(Dn({navigation:cn},pn!==void 0?{actionData:pn}:{}),{flushSync:fe})}let tn=await Ne(X,U.pathname,L.signal);if(tn.type==="aborted")return{shortCircuited:!0};if(tn.type==="error"){let{error:pn,notFoundMatches:Sn,route:bn}=sn(U.pathname,tn);return{matches:Sn,loaderData:{},errors:{[bn.id]:pn}}}else if(tn.matches)X=tn.matches;else{let{error:pn,notFoundMatches:Sn,route:bn}=Xe(U.pathname);return{matches:Sn,loaderData:{},errors:{[bn.id]:pn}}}}let dn=l||a,[In,kn]=zp(e.history,w,X,ln,U,u.v7_partialHydration&&He===!0,u.unstable_skipActionErrorRevalidation,B,V,$,Q,Z,G,dn,s,$e);if(an(tn=>!(X&&X.some(pn=>pn.route.id===tn))||In&&In.some(pn=>pn.route.id===tn)),W=++P,In.length===0&&kn.length===0){let tn=ce();return Ge(U,Dn({matches:X,loaderData:{},errors:$e&&Xt($e[1])?{[$e[0]]:$e[1].error}:null},Gp($e),tn?{fetchers:new Map(w.fetchers)}:{}),{flushSync:fe}),{shortCircuited:!0}}if(un){let tn={};if(!ee){tn.navigation=cn;let pn=Te($e);pn!==void 0&&(tn.actionData=pn)}kn.length>0&&(tn.fetchers=Oe(kn)),se(tn,{flushSync:fe})}kn.forEach(tn=>{O.has(tn.key)&&ie(tn.key),tn.controller&&O.set(tn.key,tn.controller)});let Un=()=>kn.forEach(tn=>ie(tn.key));M&&M.signal.addEventListener("abort",Un);let{loaderResults:Ft,fetcherResults:$t}=await C(w.matches,X,In,kn,L);if(L.signal.aborted)return{shortCircuited:!0};M&&M.signal.removeEventListener("abort",Un),kn.forEach(tn=>O.delete(tn.key));let zt=Kp([...Ft,...$t]);if(zt){if(zt.idx>=In.length){let tn=kn[zt.idx-In.length].key;G.add(tn)}return await oe(L,zt.result,{replace:le}),{shortCircuited:!0}}let{loaderData:st,errors:Xn}=Vp(w,X,In,Ft,$e,kn,$t,ne);ne.forEach((tn,pn)=>{tn.subscribe(Sn=>{(Sn||tn.done)&&ne.delete(pn)})}),u.v7_partialHydration&&He&&w.errors&&Object.entries(w.errors).filter(tn=>{let[pn]=tn;return!In.some(Sn=>Sn.route.id===pn)}).forEach(tn=>{let[pn,Sn]=tn;Xn=Object.assign(Xn||{},{[pn]:Sn})});let nr=ce(),Rt=we(W),vr=nr||Rt||kn.length>0;return Dn({matches:X,loaderData:st,errors:Xn},vr?{fetchers:new Map(w.fetchers)}:{})}function Te(L){if(L&&!Xt(L[1]))return{[L[0]]:L[1].data};if(w.actionData)return Object.keys(w.actionData).length===0?null:w.actionData}function Oe(L){return L.forEach(U=>{let X=w.fetchers.get(U.key),ee=Ya(void 0,X?X.data:void 0);w.fetchers.set(U.key,ee)}),new Map(w.fetchers)}function Le(L,U,X,ee){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");O.has(L)&&ie(L);let be=(ee&&ee.unstable_flushSync)===!0,ke=l||a,Fe=$m(w.location,w.matches,s,u.v7_prependBasename,X,u.v7_relativeSplatPath,U,ee==null?void 0:ee.relative),le=ei(ke,Fe,s),He=Se(le,ke,Fe);if(He.active&&He.matches&&(le=He.matches),!le){z(L,U,Et(404,{pathname:Fe}),{flushSync:be});return}let{path:fe,submission:$e,error:cn}=$p(u.v7_normalizeFormMethod,!0,Fe,ee);if(cn){z(L,U,cn,{flushSync:be});return}let ln=dl(le,fe);if(R=(ee&&ee.preventScrollReset)===!0,$e&&Sr($e.formMethod)){Qe(L,U,fe,ln,le,He.active,be,$e);return}Z.set(L,{routeId:U,path:fe}),Ie(L,U,fe,ln,le,He.active,be,$e)}async function Qe(L,U,X,ee,be,ke,Fe,le){E(),Z.delete(L);function He(bn){if(!bn.route.action&&!bn.route.lazy){let gt=Et(405,{method:le.formMethod,pathname:X,routeId:U});return z(L,U,gt,{flushSync:Fe}),!0}return!1}if(!ke&&He(ee))return;let fe=w.fetchers.get(L);F(L,x8(le,fe),{flushSync:Fe});let $e=new AbortController,cn=Mi(e.history,X,$e.signal,le);if(ke){let bn=await Ne(be,X,cn.signal);if(bn.type==="aborted")return;if(bn.type==="error"){let{error:gt}=sn(X,bn);z(L,U,gt,{flushSync:Fe});return}else if(bn.matches){if(be=bn.matches,ee=dl(be,X),He(ee))return}else{z(L,U,Et(404,{pathname:X}),{flushSync:Fe});return}}O.set(L,$e);let ln=P,dn=(await je("action",cn,[ee],be))[0];if(cn.signal.aborted){O.get(L)===$e&&O.delete(L);return}if(u.v7_fetcherPersist&&Q.has(L)){if(li(dn)||Xt(dn)){F(L,go(void 0));return}}else{if(li(dn))if(O.delete(L),W>ln){F(L,go(void 0));return}else return G.add(L),F(L,Ya(le)),oe(cn,dn,{fetcherSubmission:le});if(Xt(dn)){z(L,U,dn.error);return}}if(ai(dn))throw Et(400,{type:"defer-action"});let In=w.navigation.location||w.location,kn=Mi(e.history,In,$e.signal),Un=l||a,Ft=w.navigation.state!=="idle"?ei(Un,w.navigation.location,s):w.matches;fn(Ft,"Didn't find any matches after fetcher action");let $t=++P;x.set(L,$t);let zt=Ya(le,dn.data);w.fetchers.set(L,zt);let[st,Xn]=zp(e.history,w,Ft,le,In,!1,u.unstable_skipActionErrorRevalidation,B,V,$,Q,Z,G,Un,s,[ee.route.id,dn]);Xn.filter(bn=>bn.key!==L).forEach(bn=>{let gt=bn.key,Ht=w.fetchers.get(gt),tr=Ya(void 0,Ht?Ht.data:void 0);w.fetchers.set(gt,tr),O.has(gt)&&ie(gt),bn.controller&&O.set(gt,bn.controller)}),se({fetchers:new Map(w.fetchers)});let nr=()=>Xn.forEach(bn=>ie(bn.key));$e.signal.addEventListener("abort",nr);let{loaderResults:Rt,fetcherResults:vr}=await C(w.matches,Ft,st,Xn,kn);if($e.signal.aborted)return;$e.signal.removeEventListener("abort",nr),x.delete(L),O.delete(L),Xn.forEach(bn=>O.delete(bn.key));let tn=Kp([...Rt,...vr]);if(tn){if(tn.idx>=st.length){let bn=Xn[tn.idx-st.length].key;G.add(bn)}return oe(kn,tn.result)}let{loaderData:pn,errors:Sn}=Vp(w,w.matches,st,Rt,void 0,Xn,vr,ne);if(w.fetchers.has(L)){let bn=go(dn.data);w.fetchers.set(L,bn)}we($t),w.navigation.state==="loading"&&$t>W?(fn(I,"Expected pending action"),M&&M.abort(),Ge(w.navigation.location,{matches:Ft,loaderData:pn,errors:Sn,fetchers:new Map(w.fetchers)})):(se({errors:Sn,loaderData:Xp(w.loaderData,pn,Ft,Sn),fetchers:new Map(w.fetchers)}),B=!1)}async function Ie(L,U,X,ee,be,ke,Fe,le){let He=w.fetchers.get(L);F(L,Ya(le,He?He.data:void 0),{flushSync:Fe});let fe=new AbortController,$e=Mi(e.history,X,fe.signal);if(ke){let dn=await Ne(be,X,$e.signal);if(dn.type==="aborted")return;if(dn.type==="error"){let{error:In}=sn(X,dn);z(L,U,In,{flushSync:Fe});return}else if(dn.matches)be=dn.matches,ee=dl(be,X);else{z(L,U,Et(404,{pathname:X}),{flushSync:Fe});return}}O.set(L,fe);let cn=P,un=(await je("loader",$e,[ee],be))[0];if(ai(un)&&(un=await hy(un,$e.signal,!0)||un),O.get(L)===fe&&O.delete(L),!$e.signal.aborted){if(Q.has(L)){F(L,go(void 0));return}if(li(un))if(W>cn){F(L,go(void 0));return}else{G.add(L),await oe($e,un);return}if(Xt(un)){z(L,U,un.error);return}fn(!ai(un),"Unhandled fetcher deferred data"),F(L,go(un.data))}}async function oe(L,U,X){let{submission:ee,fetcherSubmission:be,replace:ke}=X===void 0?{}:X;U.response.headers.has("X-Remix-Revalidate")&&(B=!0);let Fe=U.response.headers.get("Location");fn(Fe,"Expected a Location header on the redirect Response"),Fe=Zp(Fe,new URL(L.url),s);let le=Xl(w.location,Fe,{_isRedirect:!0});if(t){let un=!1;if(U.response.headers.has("X-Remix-Reload-Document"))un=!0;else if(P0.test(Fe)){const dn=e.history.createURL(Fe);un=dn.origin!==n.location.origin||hs(dn.pathname,s)==null}if(un){ke?n.location.replace(Fe):n.location.assign(Fe);return}}M=null;let He=ke===!0?Yn.Replace:Yn.Push,{formMethod:fe,formAction:$e,formEncType:cn}=w.navigation;!ee&&!be&&fe&&$e&&cn&&(ee=Yp(w.navigation));let ln=ee||be;if(r8.has(U.response.status)&&ln&&Sr(ln.formMethod))await ae(He,le,{submission:Dn({},ln,{formAction:Fe}),preventScrollReset:R});else{let un=af(le,ee);await ae(He,le,{overrideNavigation:un,fetcherSubmission:be,preventScrollReset:R})}}async function je(L,U,X,ee){try{let be=await f8(c,L,U,X,ee,i,o);return await Promise.all(be.map((ke,Fe)=>{if(y8(ke)){let le=ke.result;return{type:On.redirect,response:p8(le,U,X[Fe].route.id,ee,s,u.v7_relativeSplatPath)}}return h8(ke)}))}catch(be){return X.map(()=>({type:On.error,error:be}))}}async function C(L,U,X,ee,be){let[ke,...Fe]=await Promise.all([X.length?je("loader",be,X,U):[],...ee.map(le=>{if(le.matches&&le.match&&le.controller){let He=Mi(e.history,le.path,le.controller.signal);return je("loader",He,[le.match],le.matches).then(fe=>fe[0])}else return Promise.resolve({type:On.error,error:Et(404,{pathname:le.path})})})]);return await Promise.all([Qp(L,X,ke,ke.map(()=>be.signal),!1,w.loaderData),Qp(L,ee.map(le=>le.match),Fe,ee.map(le=>le.controller?le.controller.signal:null),!0)]),{loaderResults:ke,fetcherResults:Fe}}function E(){B=!0,V.push(...an()),Z.forEach((L,U)=>{O.has(U)&&($.push(U),ie(U))})}function F(L,U,X){X===void 0&&(X={}),w.fetchers.set(L,U),se({fetchers:new Map(w.fetchers)},{flushSync:(X&&X.flushSync)===!0})}function z(L,U,X,ee){ee===void 0&&(ee={});let be=Cl(w.matches,U);K(L),se({errors:{[be.route.id]:X},fetchers:new Map(w.fetchers)},{flushSync:(ee&&ee.flushSync)===!0})}function q(L){return u.v7_fetcherPersist&&(T.set(L,(T.get(L)||0)+1),Q.has(L)&&Q.delete(L)),w.fetchers.get(L)||o8}function K(L){let U=w.fetchers.get(L);O.has(L)&&!(U&&U.state==="loading"&&x.has(L))&&ie(L),Z.delete(L),x.delete(L),G.delete(L),Q.delete(L),w.fetchers.delete(L)}function re(L){if(u.v7_fetcherPersist){let U=(T.get(L)||0)-1;U<=0?(T.delete(L),Q.add(L)):T.set(L,U)}else K(L);se({fetchers:new Map(w.fetchers)})}function ie(L){let U=O.get(L);fn(U,"Expected fetch controller: "+L),U.abort(),O.delete(L)}function he(L){for(let U of L){let X=q(U),ee=go(X.data);w.fetchers.set(U,ee)}}function ce(){let L=[],U=!1;for(let X of G){let ee=w.fetchers.get(X);fn(ee,"Expected fetcher: "+X),ee.state==="loading"&&(G.delete(X),L.push(X),U=!0)}return he(L),U}function we(L){let U=[];for(let[X,ee]of x)if(ee<L){let be=w.fetchers.get(X);fn(be,"Expected fetcher: "+X),be.state==="loading"&&(ie(X),x.delete(X),U.push(X))}return he(U),U.length>0}function ze(L,U){let X=w.blockers.get(L)||Qa;return N.get(L)!==U&&N.set(L,U),X}function Ee(L){w.blockers.delete(L),N.delete(L)}function Ye(L,U){let X=w.blockers.get(L)||Qa;fn(X.state==="unblocked"&&U.state==="blocked"||X.state==="blocked"&&U.state==="blocked"||X.state==="blocked"&&U.state==="proceeding"||X.state==="blocked"&&U.state==="unblocked"||X.state==="proceeding"&&U.state==="unblocked","Invalid blocker state transition: "+X.state+" -> "+U.state);let ee=new Map(w.blockers);ee.set(L,U),se({blockers:ee})}function rn(L){let{currentLocation:U,nextLocation:X,historyAction:ee}=L;if(N.size===0)return;N.size>1&&ya(!1,"A router only supports one blocker at a time");let be=Array.from(N.entries()),[ke,Fe]=be[be.length-1],le=w.blockers.get(ke);if(!(le&&le.state==="proceeding")&&Fe({currentLocation:U,nextLocation:X,historyAction:ee}))return ke}function Xe(L){let U=Et(404,{pathname:L}),X=l||a,{matches:ee,route:be}=qp(X);return an(),{notFoundMatches:ee,route:be,error:U}}function sn(L,U){let X=U.partialMatches,ee=X[X.length-1].route,be=Et(400,{type:"route-discovery",routeId:ee.id,pathname:L,message:U.error!=null&&"message"in U.error?U.error:String(U.error)});return{notFoundMatches:X,route:ee,error:be}}function an(L){let U=[];return ne.forEach((X,ee)=>{(!L||L(ee))&&(X.cancel(),U.push(ee),ne.delete(ee))}),U}function Je(L,U,X){if(h=L,k=U,v=X||null,!g&&w.navigation===of){g=!0;let ee=De(w.location,w.matches);ee!=null&&se({restoreScrollPosition:ee})}return()=>{h=null,k=null,v=null}}function _e(L,U){return v&&v(L,U.map(ee=>Mk(ee,w.loaderData)))||L.key}function qe(L,U){if(h&&k){let X=_e(L,U);h[X]=k()}}function De(L,U){if(h){let X=_e(L,U),ee=h[X];if(typeof ee=="number")return ee}return null}function Se(L,U,X){if(d)if(L){if(L[L.length-1].route.path==="*")return{active:!0,matches:yc(U,X,s,!0)}}else return{active:!0,matches:yc(U,X,s,!0)||[]};return{active:!1,matches:null}}async function Ne(L,U,X){let ee=L,be=ee.length>0?ee[ee.length-1].route:null;for(;;){try{await u8(d,U,ee,a||l,i,o,te,X)}catch(fe){return{type:"error",error:fe,partialMatches:ee}}if(X.aborted)return{type:"aborted"};let ke=l||a,Fe=ei(ke,U,s),le=!1;if(Fe){let fe=Fe[Fe.length-1].route;if(fe.index)return{type:"success",matches:Fe};if(fe.path&&fe.path.length>0)if(fe.path==="*")le=!0;else return{type:"success",matches:Fe}}let He=yc(ke,U,s,!0);if(!He||ee.map(fe=>fe.route.id).join("-")===He.map(fe=>fe.route.id).join("-"))return{type:"success",matches:le?Fe:null};if(ee=He,be=ee[ee.length-1].route,be.path==="*")return{type:"success",matches:ee}}}function en(L){i={},l=Gl(L,o,void 0,i)}return A={get basename(){return s},get future(){return u},get state(){return w},get routes(){return a},get window(){return n},initialize:ye,subscribe:Ce,enableScrollRestoration:Je,navigate:Ve,fetch:Le,revalidate:Ae,createHref:L=>e.history.createHref(L),encodeLocation:L=>e.history.encodeLocation(L),getFetcher:q,deleteFetcher:re,dispose:ge,getBlocker:ze,deleteBlocker:Ee,patchRoutes(L,U){return dy(L,U,a||l,i,o)},_internalFetchControllers:O,_internalActiveDeferreds:ne,_internalSetRoutes:en},A}function l8(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function $m(e,n,t,r,o,i,a,l){let s,c;if(a){s=[];for(let u of n)if(s.push(u),u.route.id===a){c=u;break}}else s=n,c=n[n.length-1];let d=ly(o||".",ay(s,i),hs(e.pathname,t)||e.pathname,l==="path");return o==null&&(d.search=e.search,d.hash=e.hash),(o==null||o===""||o===".")&&c&&c.route.index&&!O0(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Lo([t,d.pathname])),ms(d)}function $p(e,n,t,r){if(!r||!l8(r))return{path:t};if(r.formMethod&&!k8(r.formMethod))return{path:t,error:Et(405,{method:r.formMethod})};let o=()=>({path:t,error:Et(400,{type:"invalid-body"})}),i=r.formMethod||"get",a=e?i.toUpperCase():i.toLowerCase(),l=fy(t);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Sr(a))return o();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((m,h)=>{let[v,k]=h;return""+m+v+"="+k+`
`},""):String(r.body);return{path:t,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!Sr(a))return o();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:t,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return o()}}}fn(typeof FormData=="function","FormData is not available in this environment");let s,c;if(r.formData)s=zm(r.formData),c=r.formData;else if(r.body instanceof FormData)s=zm(r.body),c=r.body;else if(r.body instanceof URLSearchParams)s=r.body,c=Wp(s);else if(r.body==null)s=new URLSearchParams,c=new FormData;else try{s=new URLSearchParams(r.body),c=Wp(s)}catch{return o()}let d={formMethod:a,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Sr(d.formMethod))return{path:t,submission:d};let u=Ho(t);return n&&u.search&&O0(u.search)&&s.append("index",""),u.search="?"+s,{path:ms(u),submission:d}}function s8(e,n){let t=e;if(n){let r=e.findIndex(o=>o.route.id===n);r>=0&&(t=e.slice(0,r))}return t}function zp(e,n,t,r,o,i,a,l,s,c,d,u,f,m,h,v){let k=v?Xt(v[1])?v[1].error:v[1].data:void 0,g=e.createURL(n.location),b=e.createURL(o),y=v&&Xt(v[1])?v[0]:void 0,S=y?s8(t,y):t,A=v?v[1].statusCode:void 0,w=a&&A&&A>=400,I=S.filter((M,_)=>{let{route:D}=M;if(D.lazy)return!0;if(D.loader==null)return!1;if(i)return typeof D.loader!="function"||D.loader.hydrate?!0:n.loaderData[D.id]===void 0&&(!n.errors||n.errors[D.id]===void 0);if(c8(n.loaderData,n.matches[_],M)||s.some(B=>B===M.route.id))return!0;let H=n.matches[_],j=M;return Hp(M,Dn({currentUrl:g,currentParams:H.params,nextUrl:b,nextParams:j.params},r,{actionResult:k,unstable_actionStatus:A,defaultShouldRevalidate:w?!1:l||g.pathname+g.search===b.pathname+b.search||g.search!==b.search||uy(H,j)}))}),R=[];return u.forEach((M,_)=>{if(i||!t.some(V=>V.route.id===M.routeId)||d.has(_))return;let D=ei(m,M.path,h);if(!D){R.push({key:_,routeId:M.routeId,path:M.path,matches:null,match:null,controller:null});return}let H=n.fetchers.get(_),j=dl(D,M.path),B=!1;f.has(_)?B=!1:c.includes(_)?B=!0:H&&H.state!=="idle"&&H.data===void 0?B=l:B=Hp(j,Dn({currentUrl:g,currentParams:n.matches[n.matches.length-1].params,nextUrl:b,nextParams:t[t.length-1].params},r,{actionResult:k,unstable_actionStatus:A,defaultShouldRevalidate:w?!1:l})),B&&R.push({key:_,routeId:M.routeId,path:M.path,matches:D,match:j,controller:new AbortController})}),[I,R]}function c8(e,n,t){let r=!n||t.route.id!==n.route.id,o=e[t.route.id]===void 0;return r||o}function uy(e,n){let t=e.route.path;return e.pathname!==n.pathname||t!=null&&t.endsWith("*")&&e.params["*"]!==n.params["*"]}function Hp(e,n){if(e.route.shouldRevalidate){let t=e.route.shouldRevalidate(n);if(typeof t=="boolean")return t}return n.defaultShouldRevalidate}async function u8(e,n,t,r,o,i,a,l){let s=[n,...t.map(c=>c.route.id)].join("-");try{let c=a.get(s);c||(c=e({path:n,matches:t,patch:(d,u)=>{l.aborted||dy(d,u,r,o,i)}}),a.set(s,c)),c&&v8(c)&&await c}finally{a.delete(s)}}function dy(e,n,t,r,o){if(e){var i;let a=r[e];fn(a,"No route found to patch children into: routeId = "+e);let l=Gl(n,o,[e,"patch",String(((i=a.children)==null?void 0:i.length)||"0")],r);a.children?a.children.push(...l):a.children=l}else{let a=Gl(n,o,["patch",String(t.length||"0")],r);t.push(...a)}}async function Up(e,n,t){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=t[e.id];fn(o,"No route found in manifest");let i={};for(let a in r){let s=o[a]!==void 0&&a!=="hasErrorBoundary";ya(!s,'Route "'+o.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!Rk.has(a)&&(i[a]=r[a])}Object.assign(o,i),Object.assign(o,Dn({},n(o),{lazy:void 0}))}function d8(e){return Promise.all(e.matches.map(n=>n.resolve()))}async function f8(e,n,t,r,o,i,a,l){let s=r.reduce((u,f)=>u.add(f.route.id),new Set),c=new Set,d=await e({matches:o.map(u=>{let f=s.has(u.route.id);return Dn({},u,{shouldLoad:f,resolve:h=>(c.add(u.route.id),f?m8(n,t,u,i,a,h,l):Promise.resolve({type:On.data,result:void 0}))})}),request:t,params:o[0].params,context:l});return o.forEach(u=>fn(c.has(u.route.id),'`match.resolve()` was not called for route id "'+u.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((u,f)=>s.has(o[f].route.id))}async function m8(e,n,t,r,o,i,a){let l,s,c=d=>{let u,f=new Promise((v,k)=>u=k);s=()=>u(),n.signal.addEventListener("abort",s);let m=v=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+t.route.id+"]"))):d({request:n,params:t.params,context:a},...v!==void 0?[v]:[]),h;return i?h=i(v=>m(v)):h=(async()=>{try{return{type:"data",result:await m()}}catch(v){return{type:"error",result:v}}})(),Promise.race([h,f])};try{let d=t.route[e];if(t.route.lazy)if(d){let u,[f]=await Promise.all([c(d).catch(m=>{u=m}),Up(t.route,o,r)]);if(u!==void 0)throw u;l=f}else if(await Up(t.route,o,r),d=t.route[e],d)l=await c(d);else if(e==="action"){let u=new URL(n.url),f=u.pathname+u.search;throw Et(405,{method:n.method,pathname:f,routeId:t.route.id})}else return{type:On.data,result:void 0};else if(d)l=await c(d);else{let u=new URL(n.url),f=u.pathname+u.search;throw Et(404,{pathname:f})}fn(l.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+t.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:On.error,result:d}}finally{s&&n.signal.removeEventListener("abort",s)}return l}async function h8(e){let{result:n,type:t,status:r}=e;if(my(n)){let a;try{let l=n.headers.get("Content-Type");l&&/\bapplication\/json\b/.test(l)?n.body==null?a=null:a=await n.json():a=await n.text()}catch(l){return{type:On.error,error:l}}return t===On.error?{type:On.error,error:new _0(n.status,n.statusText,a),statusCode:n.status,headers:n.headers}:{type:On.data,data:a,statusCode:n.status,headers:n.headers}}if(t===On.error)return{type:On.error,error:n,statusCode:Wu(n)?n.status:r};if(w8(n)){var o,i;return{type:On.deferred,deferredData:n,statusCode:(o=n.init)==null?void 0:o.status,headers:((i=n.init)==null?void 0:i.headers)&&new Headers(n.init.headers)}}return{type:On.data,data:n,statusCode:r}}function p8(e,n,t,r,o,i){let a=e.headers.get("Location");if(fn(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!P0.test(a)){let l=r.slice(0,r.findIndex(s=>s.route.id===t)+1);a=$m(new URL(n.url),l,o,!0,a,i),e.headers.set("Location",a)}return e}function Zp(e,n,t){if(P0.test(e)){let r=e,o=r.startsWith("//")?new URL(n.protocol+r):new URL(r),i=hs(o.pathname,t)!=null;if(o.origin===n.origin&&i)return o.pathname+o.search+o.hash}return e}function Mi(e,n,t,r){let o=e.createURL(fy(n)).toString(),i={signal:t};if(r&&Sr(r.formMethod)){let{formMethod:a,formEncType:l}=r;i.method=a.toUpperCase(),l==="application/json"?(i.headers=new Headers({"Content-Type":l}),i.body=JSON.stringify(r.json)):l==="text/plain"?i.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?i.body=zm(r.formData):i.body=r.formData}return new Request(o,i)}function zm(e){let n=new URLSearchParams;for(let[t,r]of e.entries())n.append(t,typeof r=="string"?r:r.name);return n}function Wp(e){let n=new FormData;for(let[t,r]of e.entries())n.append(t,r);return n}function g8(e,n,t,r,o,i){let a={},l=null,s,c=!1,d={},u=r&&Xt(r[1])?r[1].error:void 0;return t.forEach((f,m)=>{let h=n[m].route.id;if(fn(!li(f),"Cannot handle redirect results in processLoaderData"),Xt(f)){let v=f.error;u!==void 0&&(v=u,u=void 0),l=l||{};{let k=Cl(e,h);l[k.route.id]==null&&(l[k.route.id]=v)}a[h]=void 0,c||(c=!0,s=Wu(f.error)?f.error.status:500),f.headers&&(d[h]=f.headers)}else ai(f)?(o.set(h,f.deferredData),a[h]=f.deferredData.data,f.statusCode!=null&&f.statusCode!==200&&!c&&(s=f.statusCode),f.headers&&(d[h]=f.headers)):(a[h]=f.data,f.statusCode&&f.statusCode!==200&&!c&&(s=f.statusCode),f.headers&&(d[h]=f.headers))}),u!==void 0&&r&&(l={[r[0]]:u},a[r[0]]=void 0),{loaderData:a,errors:l,statusCode:s||200,loaderHeaders:d}}function Vp(e,n,t,r,o,i,a,l){let{loaderData:s,errors:c}=g8(n,t,r,o,l);for(let d=0;d<i.length;d++){let{key:u,match:f,controller:m}=i[d];fn(a!==void 0&&a[d]!==void 0,"Did not find corresponding fetcher result");let h=a[d];if(!(m&&m.signal.aborted))if(Xt(h)){let v=Cl(e.matches,f==null?void 0:f.route.id);c&&c[v.route.id]||(c=Dn({},c,{[v.route.id]:h.error})),e.fetchers.delete(u)}else if(li(h))fn(!1,"Unhandled fetcher revalidation redirect");else if(ai(h))fn(!1,"Unhandled fetcher deferred data");else{let v=go(h.data);e.fetchers.set(u,v)}}return{loaderData:s,errors:c}}function Xp(e,n,t,r){let o=Dn({},n);for(let i of t){let a=i.route.id;if(n.hasOwnProperty(a)?n[a]!==void 0&&(o[a]=n[a]):e[a]!==void 0&&i.route.loader&&(o[a]=e[a]),r&&r.hasOwnProperty(a))break}return o}function Gp(e){return e?Xt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Cl(e,n){return(n?e.slice(0,e.findIndex(r=>r.route.id===n)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function qp(e){let n=e.length===1?e[0]:e.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:n}],route:n}}function Et(e,n){let{pathname:t,routeId:r,method:o,type:i,message:a}=n===void 0?{}:n,l="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(l="Bad Request",i==="route-discovery"?s='Unable to match URL "'+t+'" - the `children()` function for '+("route `"+r+"` threw the following error:\n"+a):o&&t&&r?s="You made a "+o+' request to "'+t+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?s="defer() is not supported in actions":i==="invalid-body"&&(s="Unable to encode submission body")):e===403?(l="Forbidden",s='Route "'+r+'" does not match URL "'+t+'"'):e===404?(l="Not Found",s='No route matches URL "'+t+'"'):e===405&&(l="Method Not Allowed",o&&t&&r?s="You made a "+o.toUpperCase()+' request to "'+t+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(s='Invalid request method "'+o.toUpperCase()+'"')),new _0(e||500,l,new Error(s),!0)}function Kp(e){for(let n=e.length-1;n>=0;n--){let t=e[n];if(li(t))return{result:t,idx:n}}}function fy(e){let n=typeof e=="string"?Ho(e):e;return ms(Dn({},n,{hash:""}))}function b8(e,n){return e.pathname!==n.pathname||e.search!==n.search?!1:e.hash===""?n.hash!=="":e.hash===n.hash?!0:n.hash!==""}function v8(e){return typeof e=="object"&&e!=null&&"then"in e}function y8(e){return my(e.result)&&t8.has(e.result.status)}function ai(e){return e.type===On.deferred}function Xt(e){return e.type===On.error}function li(e){return(e&&e.type)===On.redirect}function w8(e){let n=e;return n&&typeof n=="object"&&typeof n.data=="object"&&typeof n.subscribe=="function"&&typeof n.cancel=="function"&&typeof n.resolveData=="function"}function my(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function k8(e){return n8.has(e.toLowerCase())}function Sr(e){return Jk.has(e.toLowerCase())}async function Qp(e,n,t,r,o,i){for(let a=0;a<t.length;a++){let l=t[a],s=n[a];if(!s)continue;let c=e.find(u=>u.route.id===s.route.id),d=c!=null&&!uy(c,s)&&(i&&i[s.route.id])!==void 0;if(ai(l)&&(o||d)){let u=r[a];fn(u,"Expected an AbortSignal for revalidating fetcher deferred result"),await hy(l,u,o).then(f=>{f&&(t[a]=f||t[a])})}}}async function hy(e,n,t){if(t===void 0&&(t=!1),!await e.deferredData.resolveData(n)){if(t)try{return{type:On.data,data:e.deferredData.unwrappedData}}catch(o){return{type:On.error,error:o}}return{type:On.data,data:e.deferredData.data}}}function O0(e){return new URLSearchParams(e).getAll("index").some(n=>n==="")}function dl(e,n){let t=typeof n=="string"?Ho(n).search:n.search;if(e[e.length-1].route.index&&O0(t||""))return e[e.length-1];let r=iy(e);return r[r.length-1]}function Yp(e){let{formMethod:n,formAction:t,formEncType:r,text:o,formData:i,json:a}=e;if(!(!n||!t||!r)){if(o!=null)return{formMethod:n,formAction:t,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:n,formAction:t,formEncType:r,formData:i,json:void 0,text:void 0};if(a!==void 0)return{formMethod:n,formAction:t,formEncType:r,formData:void 0,json:a,text:void 0}}}function af(e,n){return n?{state:"loading",location:e,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function C8(e,n){return{state:"submitting",location:e,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}}function Ya(e,n){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:n}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n}}function x8(e,n){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:n?n.data:void 0}}function go(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function S8(e,n){try{let t=e.sessionStorage.getItem(cy);if(t){let r=JSON.parse(t);for(let[o,i]of Object.entries(r||{}))i&&Array.isArray(i)&&n.set(o,new Set(i||[]))}}catch{}}function E8(e,n){if(n.size>0){let t={};for(let[r,o]of n)t[r]=[...o];try{e.sessionStorage.setItem(cy,JSON.stringify(t))}catch(r){ya(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function iu(){return iu=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},iu.apply(this,arguments)}const Vu=p.createContext(null),py=p.createContext(null),Xu=p.createContext(null),F0=p.createContext(null),Ai=p.createContext({outlet:null,matches:[],isDataRoute:!1}),gy=p.createContext(null);function Gu(){return p.useContext(F0)!=null}function R0(){return Gu()||fn(!1),p.useContext(F0).location}function by(e){p.useContext(Xu).static||p.useLayoutEffect(e)}function A8(){let{isDataRoute:e}=p.useContext(Ai);return e?B8():T8()}function T8(){Gu()||fn(!1);let e=p.useContext(Vu),{basename:n,future:t,navigator:r}=p.useContext(Xu),{matches:o}=p.useContext(Ai),{pathname:i}=R0(),a=JSON.stringify(ay(o,t.v7_relativeSplatPath)),l=p.useRef(!1);return by(()=>{l.current=!0}),p.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let u=ly(c,JSON.parse(a),i,d.relative==="path");e==null&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Lo([n,u.pathname])),(d.replace?r.replace:r.push)(u,d.state,d)},[n,r,a,i,e])}const I8=p.createContext(null);function _8(e){let n=p.useContext(Ai).outlet;return n&&p.createElement(I8.Provider,{value:e},n)}function P8(e,n,t,r){Gu()||fn(!1);let{navigator:o}=p.useContext(Xu),{matches:i}=p.useContext(Ai),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let c=R0(),d;d=c;let u=d.pathname||"/",f=u;if(s!=="/"){let v=s.replace(/^\//,"").split("/");f="/"+u.replace(/^\//,"").split("/").slice(v.length).join("/")}let m=ei(e,{pathname:f});return M8(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},l,v.params),pathname:Lo([s,o.encodeLocation?o.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?s:Lo([s,o.encodeLocation?o.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,t,r)}function O8(){let e=wy(),n=Wu(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return p.createElement(p.Fragment,null,p.createElement("h2",null,"Unexpected Application Error!"),p.createElement("h3",{style:{fontStyle:"italic"}},n),t?p.createElement("pre",{style:o},t):null,null)}const F8=p.createElement(O8,null);class R8 extends p.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?p.createElement(Ai.Provider,{value:this.props.routeContext},p.createElement(gy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function N8(e){let{routeContext:n,match:t,children:r}=e,o=p.useContext(Vu);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),p.createElement(Ai.Provider,{value:n},r)}function M8(e,n,t,r){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if((i=t)!=null&&i.errors)e=t.matches;else return null}let a=e,l=(o=t)==null?void 0:o.errors;if(l!=null){let d=a.findIndex(u=>u.route.id&&(l==null?void 0:l[u.route.id])!==void 0);d>=0||fn(!1),a=a.slice(0,Math.min(a.length,d+1))}let s=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let u=a[d];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=d),u.route.id){let{loaderData:f,errors:m}=t,h=u.route.loader&&f[u.route.id]===void 0&&(!m||m[u.route.id]===void 0);if(u.route.lazy||h){s=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,u,f)=>{let m,h=!1,v=null,k=null;t&&(m=l&&u.route.id?l[u.route.id]:void 0,v=u.route.errorElement||F8,s&&(c<0&&f===0?($8("route-fallback"),h=!0,k=null):c===f&&(h=!0,k=u.route.hydrateFallbackElement||null)));let g=n.concat(a.slice(0,f+1)),b=()=>{let y;return m?y=v:h?y=k:u.route.Component?y=p.createElement(u.route.Component,null):u.route.element?y=u.route.element:y=d,p.createElement(N8,{match:u,routeContext:{outlet:d,matches:g,isDataRoute:t!=null},children:y})};return t&&(u.route.ErrorBoundary||u.route.errorElement||f===0)?p.createElement(R8,{location:t.location,revalidation:t.revalidation,component:v,error:m,children:b(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):b()},null)}var vy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(vy||{}),au=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(au||{});function L8(e){let n=p.useContext(Vu);return n||fn(!1),n}function j8(e){let n=p.useContext(py);return n||fn(!1),n}function D8(e){let n=p.useContext(Ai);return n||fn(!1),n}function yy(e){let n=D8(),t=n.matches[n.matches.length-1];return t.route.id||fn(!1),t.route.id}function wy(){var e;let n=p.useContext(gy),t=j8(au.UseRouteError),r=yy(au.UseRouteError);return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function B8(){let{router:e}=L8(vy.UseNavigateStable),n=yy(au.UseNavigateStable),t=p.useRef(!1);return by(()=>{t.current=!0}),p.useCallback(function(o,i){i===void 0&&(i={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,iu({fromRouteId:n},i)))},[e,n])}const Jp={};function $8(e,n,t){Jp[e]||(Jp[e]=!0)}function z8(e){return _8(e.context)}function H8(e){let{basename:n="/",children:t=null,location:r,navigationType:o=Yn.Pop,navigator:i,static:a=!1,future:l}=e;Gu()&&fn(!1);let s=n.replace(/^\/*/,"/"),c=p.useMemo(()=>({basename:s,navigator:i,static:a,future:iu({v7_relativeSplatPath:!1},l)}),[s,l,i,a]);typeof r=="string"&&(r=Ho(r));let{pathname:d="/",search:u="",hash:f="",state:m=null,key:h="default"}=r,v=p.useMemo(()=>{let k=hs(d,s);return k==null?null:{location:{pathname:k,search:u,hash:f,state:m,key:h},navigationType:o}},[s,d,u,f,m,h,o]);return v==null?null:p.createElement(Xu.Provider,{value:c},p.createElement(F0.Provider,{children:t,value:v}))}new Promise(()=>{});function U8(e){let n={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(n,{element:p.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(n,{hydrateFallbackElement:p.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(n,{errorElement:p.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),n}/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lu(){return lu=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},lu.apply(this,arguments)}const Z8="6";try{window.__reactRouterVersion=Z8}catch{}function W8(e,n){return a8({basename:n==null?void 0:n.basename,future:lu({},n==null?void 0:n.future,{v7_prependBasename:!0}),history:Pk({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||V8(),routes:e,mapRouteProperties:U8,unstable_dataStrategy:n==null?void 0:n.unstable_dataStrategy,unstable_patchRoutesOnMiss:n==null?void 0:n.unstable_patchRoutesOnMiss,window:n==null?void 0:n.window}).initialize()}function V8(){var e;let n=(e=window)==null?void 0:e.__staticRouterHydrationData;return n&&n.errors&&(n=lu({},n,{errors:X8(n.errors)})),n}function X8(e){if(!e)return null;let n=Object.entries(e),t={};for(let[r,o]of n)if(o&&o.__type==="RouteErrorResponse")t[r]=new _0(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let i=window[o.__subType];if(typeof i=="function")try{let a=new i(o.message);a.stack="",t[r]=a}catch{}}if(t[r]==null){let i=new Error(o.message);i.stack="",t[r]=i}}else t[r]=o;return t}const G8=p.createContext({isTransitioning:!1}),q8=p.createContext(new Map),K8="startTransition",eg=ss[K8],Q8="flushSync",ng=ty[Q8];function Y8(e){eg?eg(e):e()}function Ja(e){ng?ng(e):e()}class J8{constructor(){this.status="pending",this.promise=new Promise((n,t)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",n(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",t(r))}})}}function eC(e){let{fallbackElement:n,router:t,future:r}=e,[o,i]=p.useState(t.state),[a,l]=p.useState(),[s,c]=p.useState({isTransitioning:!1}),[d,u]=p.useState(),[f,m]=p.useState(),[h,v]=p.useState(),k=p.useRef(new Map),{v7_startTransition:g}=r||{},b=p.useCallback(I=>{g?Y8(I):I()},[g]),y=p.useCallback((I,R)=>{let{deletedFetchers:M,unstable_flushSync:_,unstable_viewTransitionOpts:D}=R;M.forEach(j=>k.current.delete(j)),I.fetchers.forEach((j,B)=>{j.data!==void 0&&k.current.set(B,j.data)});let H=t.window==null||t.window.document==null||typeof t.window.document.startViewTransition!="function";if(!D||H){_?Ja(()=>i(I)):b(()=>i(I));return}if(_){Ja(()=>{f&&(d&&d.resolve(),f.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:D.currentLocation,nextLocation:D.nextLocation})});let j=t.window.document.startViewTransition(()=>{Ja(()=>i(I))});j.finished.finally(()=>{Ja(()=>{u(void 0),m(void 0),l(void 0),c({isTransitioning:!1})})}),Ja(()=>m(j));return}f?(d&&d.resolve(),f.skipTransition(),v({state:I,currentLocation:D.currentLocation,nextLocation:D.nextLocation})):(l(I),c({isTransitioning:!0,flushSync:!1,currentLocation:D.currentLocation,nextLocation:D.nextLocation}))},[t.window,f,d,k,b]);p.useLayoutEffect(()=>t.subscribe(y),[t,y]),p.useEffect(()=>{s.isTransitioning&&!s.flushSync&&u(new J8)},[s]),p.useEffect(()=>{if(d&&a&&t.window){let I=a,R=d.promise,M=t.window.document.startViewTransition(async()=>{b(()=>i(I)),await R});M.finished.finally(()=>{u(void 0),m(void 0),l(void 0),c({isTransitioning:!1})}),m(M)}},[b,a,d,t.window]),p.useEffect(()=>{d&&a&&o.location.key===a.location.key&&d.resolve()},[d,f,o.location,a]),p.useEffect(()=>{!s.isTransitioning&&h&&(l(h.state),c({isTransitioning:!0,flushSync:!1,currentLocation:h.currentLocation,nextLocation:h.nextLocation}),v(void 0))},[s.isTransitioning,h]),p.useEffect(()=>{},[]);let S=p.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:I=>t.navigate(I),push:(I,R,M)=>t.navigate(I,{state:R,preventScrollReset:M==null?void 0:M.preventScrollReset}),replace:(I,R,M)=>t.navigate(I,{replace:!0,state:R,preventScrollReset:M==null?void 0:M.preventScrollReset})}),[t]),A=t.basename||"/",w=p.useMemo(()=>({router:t,navigator:S,static:!1,basename:A}),[t,S,A]);return p.createElement(p.Fragment,null,p.createElement(Vu.Provider,{value:w},p.createElement(py.Provider,{value:o},p.createElement(q8.Provider,{value:k.current},p.createElement(G8.Provider,{value:s},p.createElement(H8,{basename:A,location:o.location,navigationType:o.historyAction,navigator:S,future:{v7_relativeSplatPath:t.future.v7_relativeSplatPath}},o.initialized||t.future.v7_partialHydration?p.createElement(nC,{routes:t.routes,future:t.future,state:o}):n))))),null)}function nC(e){let{routes:n,future:t,state:r}=e;return P8(n,void 0,r,t)}var tg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(tg||(tg={}));var rg;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(rg||(rg={}));const tC=[{oid:"f1a3a2eafaf1a24bc42924f202cb743d144341a8",message:"Merge pull request #301 from sawa-h/patch-4",committedDate:"2024-07-05T01:13:06Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/f1a3a2eafaf1a24bc42924f202cb743d144341a8",associatedPullRequests:{edges:[{node:{number:301,title:"「スタートアップ法人都民税の減税」の予算を追加",url:"https://github.com/takahiroanno2024/election2024/pull/301",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"ed0ce67fad4db4c404f07ab52224bd0a218d1f2b",filename:"docs/manifest/budget.md",status:"modified",additions:4,deletions:3,changes:7,blob_url:"https://github.com/takahiroanno2024/election2024/blob/f1a3a2eafaf1a24bc42924f202cb743d144341a8/docs%2Fmanifest%2Fbudget.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/f1a3a2eafaf1a24bc42924f202cb743d144341a8/docs%2Fmanifest%2Fbudget.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fbudget.md?ref=f1a3a2eafaf1a24bc42924f202cb743d144341a8",patch:`@@ -10,12 +10,13 @@
 
 ## 政策の5本柱実現にかかる予算規模概算
 
-- 政策の5本柱で上げた施策の実現は、導入時に約513億円、その後の維持・運営費に最大170億円／年程度がかかる見込み
+- 政策の5本柱で上げた施策の実現は、導入時に約523億円、その後の維持・運営費に最大180億円／年程度がかかる見込み
     - 最も予算を要するのは2本目の柱である「とことん安心の医療・防災」で、導入に約275億円、維持・運営に約52.5億円/年を想定
 - 都の一般会計は令和6年度で約8.5兆円。その大きな予算配分を変えることなく、全体の1%未満で現在打ち出している新規政策は実現可能
-- 経済：新産業で所得倍増　導入2.2億円、維持・運営6億円/年
-    - 都立インターナショナルスクールの誘致（企画費・授業料補助等）：導入4億円、維持・運営3億円/年
+- 経済：新産業で所得倍増　導入32億円、維持・運営16億円/年
     - 自動運転特区の実現：導入18億円、運営3億円/年
+    - スタートアップの法人都民税減税：10億円/年
+    - 都立インターナショナルスクールの誘致（企画費・授業料補助等）：導入4億円、維持・運営3億円/年
     - ほか施策については、追加予算ではなく現行の予算内で取り組み内容を変更
 - 医療・防災：とことん安心の医療・防災　導入272.5億円、維持・運営52.5億円/年
     - 夜間休日の医療体制構築：導入91.4億円、維持・運営35億円/年`}]},{oid:"40f218057998a3ac7c4190cbb044f4671745ea78",message:"Merge pull request #311 from takahiroanno2024/hiro4nemo10-patch-1",committedDate:"2024-07-05T01:11:34Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/40f218057998a3ac7c4190cbb044f4671745ea78",associatedPullRequests:{edges:[{node:{number:311,title:"Update economy.md_スタートアップ企業向け法人都民税の減免",url:"https://github.com/takahiroanno2024/election2024/pull/311",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"bdb658f7ba235ec9ba03661c52940910975a57f7",filename:"docs/manifest/economy.md",status:"modified",additions:1,deletions:0,changes:1,blob_url:"https://github.com/takahiroanno2024/election2024/blob/40f218057998a3ac7c4190cbb044f4671745ea78/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/40f218057998a3ac7c4190cbb044f4671745ea78/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=40f218057998a3ac7c4190cbb044f4671745ea78",patch:`@@ -88,6 +88,7 @@
     - 研究開発機関/スタートアップ拠点を集積
         - 東京都内の既存の大学や研究機関と連携
         - スタートアップグローバルキャンパス構想＠恵比寿との連携
+        - スタートアップ企業向け法人都民税の一定期間減免
     - 東京を国際的な技術革新の中心地とする
         - スタートアップや成長産業の関係者が、世界中から東京に集まるイベントの開催
     - 上記の結果として、都内の企業の全体的なレベルアップ＆海外投資家の誘致（ミドル/レイターステージでの資金注入）を実現`}]},{oid:"c388f154e8ee94cdc2c83aeec05c2deae43cc21b",message:"障害福祉に関する記述の修正",committedDate:"2024-07-04T20:19:54Z",author:{name:"micthell712",email:"llehctim.k@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/c388f154e8ee94cdc2c83aeec05c2deae43cc21b",associatedPullRequests:{edges:[{node:{number:312,title:"障害福祉に関する記述の修正",url:"https://github.com/takahiroanno2024/election2024/pull/312",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"cd74a0c49b756d85899446c1258015c599392dc9",filename:"docs/manifest/others.md",status:"modified",additions:19,deletions:11,changes:30,blob_url:"https://github.com/takahiroanno2024/election2024/blob/c388f154e8ee94cdc2c83aeec05c2deae43cc21b/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/c388f154e8ee94cdc2c83aeec05c2deae43cc21b/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=c388f154e8ee94cdc2c83aeec05c2deae43cc21b",patch:`@@ -35,27 +35,35 @@
 
 ## 障害福祉
 - 特別な配慮が必要な児童の数は増えてきている
-    - 通級による指導を受けている児童も増加傾向にあり、現在は134,185人（令和1年時点）
-    - 通常の学級に在籍する小中学生の8.8%に学習や行動に困難のある発達障害の可能性がある
-- 社会側の障害をなくしていくために、専門職の方々の生産性向上・ステークホルダーの連携強化・テクノロジーの活用を進める必要がある
+    - 小中学校で通級指導教室（通常の授業のなかで困難を感じる児童に対し、特性などに配慮した指導を受けることができる制度）に通う生徒は増加し続け、現在は164,697人いる
+    - 学習や行動に困難のある発達障害の可能性がある小中学生の割合は増加し、2022年には8.8%に。
+35人学級に3人いる計算に。
+- 社会側の障害をなくすために、人・テクノロジーの相乗効果を目指す
     - 一人ひとりの特性やお困りに合わせて、どのような支援が必要かを見立てること・心理面も含めた支援に対しては、専門職の力が不可欠
-        - 福祉従事者の方の待遇改善
+        - エッセンシャルワーカーの方の待遇改善
         - 手続き面でのさらなるDXの検討
-    - ステークホルダーの連携強化
+    - 福祉に閉じず障害のある子を支えるステークホルダーの連携を強化することで、より効果的な支援を実現
         - 学校現場での支援者を増やすため、「特別支援教育支援員」の採用に対して補助
         - 学校・福祉事業所・医療機関等、関係機関間での連携強化を支援
-    - テクノロジーの活用
+    - 困りごとを減らしたり、自分の興味を追求するために効果的なテクノロジーとの出会いの実現
+        -　　障害者手帳のデジタル化
         - 効果的なツールのデータベース化
         - 活用方法や、キャリアづくりのためのロールモデルとのマッチング
 - 福祉事業者を含むエッセンシャルワーカーの待遇改善
     - 処遇改善加算算定時に、都からさらに助成金を追加する
     - 住宅補助の拡充
     - DXの一層の進展のために、導入時にICT支援を派遣する    
 - テクノロジーは、マッチング・ロールモデルとセットで届けていく
-    - 効果的なテクノロジー活用例
-        - 場面緘黙の方に向けて会話支援AIツール Be Free
-        - 発達障害の方に向けたサポートツール goblin.tools
+    -　障害者手帳のデジタル化
+        -　障害者手帳等のマイナンバーカード搭載
+        - 都・市区町村が実施主体となる医療費助成（指定難病・自立支援医療等）に係る医療証等のマイナンバーカード搭載を早期に実施
+        - 都営交通無料乗車券のスマートフォン搭載
+    - 効果的なテクノロジーデータベース化
+        - 以下のようなツールを、それぞれの特性・困りごとに応じて検索できるようにする
+            - 場面緘黙の方に向けて会話支援AIツール Be Free
+            - 発達障害の方に向けたサポートツール goblin.tools
     - それぞれの特性・困りごとに検索ができるデータベースを都のイニシアチブで整理
         - 助成事業として実施されたことはあるが継続性が担保されないので、都として支援
-    - ツールの活用しながら、どのようにキャリアを積んできたかについて見通し不安をなくすロールモデルとの出会い
-        - オンラインでのメンタリングを支援
+    - ロールモデルとのマッチング
+        - 「特性に応じて、どのようなツールを使うといいか」「どうやって自分の関心を深めたか」について相談できるロールモデルとのマッチング
+        - オンラインでのメンタリングを支援していく`}]},{oid:"bb7676f9ab80855732c90a722f53bf92374aab69",message:`Update economy.md_スタートアップ企業向け法人都民税の減免

減税観点での経済政策案を複数検討した結果、\r
「スタートアップ向け法人都民税の創業一定期間（5年間程度）減税」\r
については企業誘致・企業成長に資すると判断したため提案します。`,committedDate:"2024-07-04T19:50:33Z",author:{name:"hiro4nemo10",email:"52875812+hiro4nemo10@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/bb7676f9ab80855732c90a722f53bf92374aab69",associatedPullRequests:{edges:[{node:{number:311,title:"Update economy.md_スタートアップ企業向け法人都民税の減免",url:"https://github.com/takahiroanno2024/election2024/pull/311",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"bdb658f7ba235ec9ba03661c52940910975a57f7",filename:"docs/manifest/economy.md",status:"modified",additions:1,deletions:0,changes:1,blob_url:"https://github.com/takahiroanno2024/election2024/blob/bb7676f9ab80855732c90a722f53bf92374aab69/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/bb7676f9ab80855732c90a722f53bf92374aab69/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=bb7676f9ab80855732c90a722f53bf92374aab69",patch:`@@ -88,6 +88,7 @@
     - 研究開発機関/スタートアップ拠点を集積
         - 東京都内の既存の大学や研究機関と連携
         - スタートアップグローバルキャンパス構想＠恵比寿との連携
+        - スタートアップ企業向け法人都民税の一定期間減免
     - 東京を国際的な技術革新の中心地とする
         - スタートアップや成長産業の関係者が、世界中から東京に集まるイベントの開催
     - 上記の結果として、都内の企業の全体的なレベルアップ＆海外投資家の誘致（ミドル/レイターステージでの資金注入）を実現`}]},{oid:"ff90e0d8ec39cee3f5c5e815052d85942b426c1c",message:`行政パートの構成見直し

視認性向上のため行政パートの構成を変えています。\r
①各コンポーネントの中身は基本的に変えていません\r
②現状認識と施策・方向性パートを明確に分けました\r
→施策パートにあった、意思決定上の課題・組織上の課題をひとくくりにし、現状認識パートに挿入\r
→施策・方向性パートは施策・方向性のみの記載にし、視認性向上`,committedDate:"2024-07-04T15:40:56Z",author:{name:"yuuuuuuten",email:"yuuuuuuten@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/ff90e0d8ec39cee3f5c5e815052d85942b426c1c",associatedPullRequests:{edges:[{node:{number:307,title:"行政パートの構成見直し",url:"https://github.com/takahiroanno2024/election2024/pull/307",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"67be61e6b2f6bd453cfa62c4365d31fb940109e7",filename:"docs/manifest/administration.md",status:"modified",additions:27,deletions:22,changes:49,blob_url:"https://github.com/takahiroanno2024/election2024/blob/ff90e0d8ec39cee3f5c5e815052d85942b426c1c/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/ff90e0d8ec39cee3f5c5e815052d85942b426c1c/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=ff90e0d8ec39cee3f5c5e815052d85942b426c1c",patch:`@@ -35,6 +35,26 @@
 - 各行政分野でもデジタル化の取り組みが進められている
     - 都庁各局では[シン・トセイ](https://shintosei.metro.tokyo.lg.jp/)により現場レベルでのDXが推進。子育て、教育、防災など様々な分野でデジタル技術を活用したサービスの開発が進められている
 
+## 他方、行政運営上の課題は残っている
+
+- 意思決定上の課題
+    - 行政DX
+        - 都として様々な取組が実施されているものの課題は残存
+        - インタビューした都庁職員の声：GovTech全体の組織は大きくなっているが、エンジニアの比重は少なく、絶対数が足りていない
+        - インタビューした都庁職員の声：内部手続きが多く、政策を考える十分な時間が確保できていない。また、整備された基盤に都政のトップの理解が追いついていない
+    - 意思決定プロセス
+        - 住民意思の汲み取りは4年に1回の選挙が中心
+        - 住民の思いを幅広く拾い意思決定に反映する仕組みはない
+    - 予算や人員の配分
+        - 現都政では行革により財源をねん出。子育て施策をはじめ様々な施策を実施
+        - 他方、都民の満足度、実感には上手く繋がっていない
+- 組織上の課題：必要なところに十分な人員を配置できていない。
+    - インタビューした都庁職員の声：デジタル化は進んでいるが、決裁・レクなど内部手続の負担が大きい
+    - インタビューした都庁職員の声：組織階層が深く(局の下に部がある構成)意思決定のスピードが遅い
+    - インタビューした都庁職員の声：政策立案に十分なリソースを割けていない。政策立案自体よりもバックデータ作りや裏付け(都民の声、報道など)探しの作業に忙殺。
+    - 結果、職場としての魅力がうすれ、東京都の採用試験の応募者数は2015年の2024人から、2022年委は697人にまで大幅に減少
+    - 政策立案や住民福祉の向上など必要な部門に十分な人員配置ができていない可能性
+ 
 ## これまでの取組を前に進め、住民満足を更に高めることが重要
 
 - デジタル化を更に進める上での課題
@@ -158,22 +178,11 @@
 
 ## 技術に精通したリーダーによる行政運営の高度化
 
-- 東京都の前進のためには更なる行政運営の高度化が必要
-    - 行政DX
-        - 都として様々な取組が実施されているものの課題は残存
-        - インタビューした都庁職員の声：GovTech全体の組織は大きくなっているが、エンジニアの比重は少なく、絶対数が足りていない
-        - インタビューした都庁職員の声：内部手続きが多く、政策を考える十分な時間が確保できていない。また、整備された基盤に都政のトップの理解が追いついていない
-    - 意思決定プロセス
-        - 住民意思の汲み取りは4年に1回の選挙が中心
-        - 住民の思いを幅広く拾い意思決定に反映する仕組みはない
-    - 予算や人員の配分
-        - 現都政では行革により財源をねん出。子育て施策をはじめ様々な施策を実施
-        - 他方、都民の満足度、実感には上手く繋がっていない
 - デジタルに精通したリーダーだから取り組めること
     - テクノロジーの実装の一層の推進
         - テクノロジーの実装は大きな変革を生む
         - テクノロジーのに精通したリーダーだからこそ一層の社会実装が可能に
-- デジタル人材の活用、例えば元都庁職員の出戻り推進  
+        - デジタル人材の活用、例えば元都庁職員の出戻り推進  
     - 意思決定プロセスの変革
         - 政策の決定方法(＝意思決定プロセス)の見直しはトップだからこそ可能
         - ブロードリスニングによる住民意思の汲み取りと政策決定への反映の仕組み化
@@ -185,13 +194,9 @@
 
 ## 構造改革の推進による実行力のある組織づくり
 
-- 現状、都の構造改革は未徹底。必要なところに十分な人員を配置できていない。
-    - インタビューした都庁職員の声：デジタル化は進んでいるが、決裁・レクなど内部手続の負担が大きい
-    - インタビューした都庁職員の声：組織階層が深く(局の下に部がある構成)意思決定のスピードが遅い
-    - インタビューした都庁職員の声：政策立案に十分なリソースを割けていない。政策立案自体よりもバックデータ作りや裏付け(都民の声、報道など)探しの作業に忙殺。
-    - 結果、職場としての魅力がうすれ、東京都の採用試験の応募者数は2015年の2024人から、2022年委は697人にまで大幅に減少
-    - 政策立案や住民福祉の向上など必要な部門に十分な人員配置ができていない可能性
-- 更なる働き方改革、業務効率化、組織の見直しによる魅力ある職場づくりと実行体制の充実
-    - データ基盤の整備やブロードリスニングによる恒常的な住民意思の汲み取りにより突発的ななリサーチ業務を減らす
-    - 業務状況の可視化を行った上で、組織・権限範囲の見直しを行うことによる意思決定のスピード向上
-    - デジタル化の徹底による内部手続の効率化推進
+- 構造改革・働き方改革の更なる徹底
+    - 情報の流れの見直し：データ基盤の整備やブロードリスニングによる恒常的な住民意思の汲み取りにより突発的ななリサーチ業務を減らす
+    - 組織の見直し：業務状況の可視化を行った上で、組織・権限範囲の見直しを行うことによる意思決定のスピード向上
+    - 内部手続デジタル化：デジタル化の徹底による内部手続の効率化推進
+- 構造改革の成果を住民福祉の向上に配分
+    - 構造改革・働き方改革の成果を教育・子育て、福祉、災害対応、住民対応など「誰も取り残さない」施策に配分`}]},{oid:"dc2d73096190c59df6d68c50a47cad947d630217",message:`「スタートアップ法人都民税の減税」の予算を追加

・「スタートアップ法人都民税の減税」の予算として、年間10億円を追加。\r
\r
・全体の予算額についても、イニシャル・ランニングともに10億円ずつ追加。`,committedDate:"2024-07-04T09:22:34Z",author:{name:"sawa",email:"sawako.hamamichi@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/dc2d73096190c59df6d68c50a47cad947d630217",associatedPullRequests:{edges:[{node:{number:301,title:"「スタートアップ法人都民税の減税」の予算を追加",url:"https://github.com/takahiroanno2024/election2024/pull/301",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"ed0ce67fad4db4c404f07ab52224bd0a218d1f2b",filename:"docs/manifest/budget.md",status:"modified",additions:4,deletions:3,changes:7,blob_url:"https://github.com/takahiroanno2024/election2024/blob/dc2d73096190c59df6d68c50a47cad947d630217/docs%2Fmanifest%2Fbudget.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/dc2d73096190c59df6d68c50a47cad947d630217/docs%2Fmanifest%2Fbudget.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fbudget.md?ref=dc2d73096190c59df6d68c50a47cad947d630217",patch:`@@ -10,12 +10,13 @@
 
 ## 政策の5本柱実現にかかる予算規模概算
 
-- 政策の5本柱で上げた施策の実現は、導入時に約513億円、その後の維持・運営費に最大170億円／年程度がかかる見込み
+- 政策の5本柱で上げた施策の実現は、導入時に約523億円、その後の維持・運営費に最大180億円／年程度がかかる見込み
     - 最も予算を要するのは2本目の柱である「とことん安心の医療・防災」で、導入に約275億円、維持・運営に約52.5億円/年を想定
 - 都の一般会計は令和6年度で約8.5兆円。その大きな予算配分を変えることなく、全体の1%未満で現在打ち出している新規政策は実現可能
-- 経済：新産業で所得倍増　導入2.2億円、維持・運営6億円/年
-    - 都立インターナショナルスクールの誘致（企画費・授業料補助等）：導入4億円、維持・運営3億円/年
+- 経済：新産業で所得倍増　導入32億円、維持・運営16億円/年
     - 自動運転特区の実現：導入18億円、運営3億円/年
+    - スタートアップの法人都民税減税：10億円/年
+    - 都立インターナショナルスクールの誘致（企画費・授業料補助等）：導入4億円、維持・運営3億円/年
     - ほか施策については、追加予算ではなく現行の予算内で取り組み内容を変更
 - 医療・防災：とことん安心の医療・防災　導入272.5億円、維持・運営52.5億円/年
     - 夜間休日の医療体制構築：導入91.4億円、維持・運営35億円/年`}]},{oid:"f622f77b4b73805e86ab8fe241a3324a90df6ffa",message:`妊婦へのRSウイルスワクチンの公費助成

#283 のイシューで提案しました通り、妊婦へのRSウイルスワクチンの公費助成についてプルリクエストを出させていただきます。\r
お手数ですが、ご確認をお願いいたします。\r
初めてリクエストを出すため、不備がありましたらお知らせください。`,committedDate:"2024-07-04T02:13:48Z",author:{name:"summersummer800",email:"bellsum725@yahoo.co.jp"},url:"https://github.com/takahiroanno2024/election2024/commit/f622f77b4b73805e86ab8fe241a3324a90df6ffa",associatedPullRequests:{edges:[{node:{number:293,title:"妊婦へのRSウイルスワクチンの公費助成",url:"https://github.com/takahiroanno2024/election2024/pull/293",comments:{nodes:[{body:`@summersummer800 \r
丁寧に整理した上でのプルリクエスト、ありがとうございます。\r
\r
@takahiroanno \r
以下、チーム内の整理もメモとして記載しておきます。\r
\r
* RSウイルス感染症についての理解の整理\r
    * 生後1歳までに半数以上が、2歳までにほぼ100%の児がRSウイルスに少なくとも1度は感染する[1]\r
    * 乳幼児は重症化リスクが高い\r
    * 生後6ヶ月以内にRSウイルスに感染した場合には、細気管支炎、肺炎など重症化する場合があります [1]\r
    * 母体から乳児への移行抗体によって守ることができる\r
    * 日本でのワクチン承認はつい最近（2024年1月）\r
        * [1] https://www.mhlw.go.jp/bunya/kenkou/kekkaku-kansenshou19/rs_qa.html\r
* リスクについて整理\r
    * 乳幼児の死亡についてざっと調べた感じ世界的には多い（疫病負荷が高い）一方で、日本だと医療の質的からなのかそこまで多くない印象でした。\r
    * 裏取りできてないですが3000人が入院、そのうちの1%が死亡という数字も見られる。\r
        * https://www.niid.go.jp/niid/ja/kansennohanashi/317-rs-intro.html\r
* 定性的な声\r
    * 不安、重篤化した時に大変だったという声はあり。\r
    * https://x.com/nobuko0902/status/1763931457737904128?s=46&t=8G218r3RuJ_ZTNIN1kKCqw\r
    * https://x.com/tome_selfcare/status/1808497581271748673?s=46\r
* 財源観点\r
    * 10万人（東京都出生数）ｘ３万円ｘ利用率（10％ぐらい？）→３億円ぐらいを予想`}]},timelineItems:{nodes:[]}}}]},files:[{sha:"82cb35974da700ca58edaba09f8a9a8eed6b10dd",filename:"docs/manifest/education.md",status:"modified",additions:15,deletions:0,changes:15,blob_url:"https://github.com/takahiroanno2024/election2024/blob/f622f77b4b73805e86ab8fe241a3324a90df6ffa/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/f622f77b4b73805e86ab8fe241a3324a90df6ffa/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=f622f77b4b73805e86ab8fe241a3324a90df6ffa",patch:`@@ -194,3 +194,18 @@
         - 日本と海外の両方の学位を、それぞれ個別に取得するよりも短い期間で取得できるプログラム
         - 海外大学の学生が東京都立大学の学位取得のため東京に訪れる機会を創出し、人材交流を図れる
     - 大学間のネットワークの拠点となる
+
+## 妊婦へのRSウイルスワクチンの公費助成
+
+- 乳児にとってRSウイルスは脅威
+    - RSウイルスは生後1歳までに50％以上、2歳までにほぼ100％がRSウイルスに感染する
+    - ある程度成長した子供や大人にとっては咳がしつこい風邪程度で済むが、特に生後6ヶ月までの乳児が罹患すると重症化の可能性がある
+    - 重症化すると気管支炎、肺炎、無呼吸、急性脳症などを起こすことがあり、最悪の場合死に至る
+- 母子免疫ワクチンの効果
+    - 2024年5月末より、妊婦が接種することで胎児に抗体が移行するワクチン「アブリスボ」が登場
+    - 第Ⅲ相試験において、ワクチンの有効性は、重度のRSウイルス関連下気道感染症に対して、生後90日で81.8%、生後180日で69.4%となっている
+    - 有害事象および重篤な有害事象はワクチン群とプラセボ群で同程度
+    - 総合的に見て、基礎疾患のない乳児に対するRSウイルスの予防に寄与するとの日本小児科学会の見解
+- 接種費用の壁
+    - 任意接種のため、30,000円～の個人負担が発生する
+    - 接種したくても価格面の懸念から接種を断念するケースもあり、公費による助成の必要性がある`}]},{oid:"636cda1f97a26b7c1e04392f697633fcfc54bc3f",message:`Merge pull request #289 from sawa-h/patch-3

自動運転先進都市に、島しょ地域を追加。取り組み内容の具体化。`,committedDate:"2024-07-04T01:39:35Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/636cda1f97a26b7c1e04392f697633fcfc54bc3f",associatedPullRequests:{edges:[{node:{number:289,title:"自動運転先進都市に、島しょ地域を追加。取り組み内容の具体化。",url:"https://github.com/takahiroanno2024/election2024/pull/289",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"36f45fb8dbc4fb4ac7a553165ed94b2d3e26dc5b",filename:"docs/manifest/economy.md",status:"modified",additions:15,deletions:8,changes:23,blob_url:"https://github.com/takahiroanno2024/election2024/blob/636cda1f97a26b7c1e04392f697633fcfc54bc3f/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/636cda1f97a26b7c1e04392f697633fcfc54bc3f/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=636cda1f97a26b7c1e04392f697633fcfc54bc3f",patch:`@@ -91,13 +91,19 @@
     - 東京を国際的な技術革新の中心地とする
         - スタートアップや成長産業の関係者が、世界中から東京に集まるイベントの開催
     - 上記の結果として、都内の企業の全体的なレベルアップ＆海外投資家の誘致（ミドル/レイターステージでの資金注入）を実現
-- 東京西部エリアを「実装＆課題解決の場」とします
-    - スマートシティにまつわる企業を集積・サービス実装することで、産業発展と課題解決を実現
-        - 多摩地区を自動運転先進都市へ
-            - 多摩地区では既に自動運転の実証実験等が行われている
-            - 自動運転の実装により、バス・タクシーのドライバー不足問題を解決する
+- 東京西部エリア・島しょ地域を「実装＆課題解決の場」とします
+    - 多摩地区にスマートシティにまつわる企業を集積・サービス実装し、自動運転先進都市とすることで、産業発展と課題解決を実現
+        - 多摩地区では既に自動運転の実証実験等が行われている
+        - 自動運転の実装により、バス・タクシーのドライバー不足問題を解決する
+    - 島しょ地域で積極的に自動運転レベル4の実証実験＆実運用化を行い、自動運転先進都市にすることで、課題解決を実現
+        - 島しょ地域では、住民の高齢化も進む中で、交通の足がないという課題が実際に聞かれる
+        - 島しょ地域では、主要道路への実装ハードルが比較的低い
+            - 住民の生活における主要道路が複雑すぎない
+            - 経路や場面のパターンが少ない
+            - 他地域と比較すると人の交通量が多すぎず、事故リスクが低い
 
-## 東京西部では「新しいモビリティのあり方」が喫緊の課題
+
+## 東京西部・島しょ地域では「新しいモビリティのあり方」が喫緊の課題
 
 - 人口減少で難しくなる公共交通の維持
     - 東京都の人口は2025年〜2030年をピークに減少
@@ -123,9 +129,10 @@
 
 ## 自動運転で、誰もが自由に外出できる社会を実現！
 
-- 東京西部を自動運転先進地域として、自動運転サービスの実用化を実現
+- 東京西部・島しょ地域をレベル4の実証実験を行う自動運転先進地域として、自動運転サービスの実用化を実現
     - 23区で生まれる技術者・研究者の交流やスタートアップの集積を多摩・島しょ地域の課題解決に活用
-    - バス・タクシー運転手の労働環境改善／交通空白地帯の解消
+    - まずは10地域を選定してレベル4の実証実験を行い、翌年度以降5地域での実運用化を目指す
+    - 自動運転の実運用により、バス・タクシー運転手の労働環境改善／交通空白地帯の解消
     - 商業や観光、医療などの周辺領域と自動運転を組み合わせた収益化や社会的インパクトを支援
 
 ## 強い技術企業を育成・誘致すべく、②世界中の優秀な技術者・研究者が住みたいと思う東京作り`}]},{oid:"3aac0416e50a6bc4140b6b41697f0806a708421b",message:"Update docs/manifest/economy.md",committedDate:"2024-07-04T01:38:43Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/3aac0416e50a6bc4140b6b41697f0806a708421b",associatedPullRequests:{edges:[{node:{number:289,title:"自動運転先進都市に、島しょ地域を追加。取り組み内容の具体化。",url:"https://github.com/takahiroanno2024/election2024/pull/289",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"c551f2f52918395a23389c317df4c35c259de965",filename:"docs/manifest/economy.md",status:"modified",additions:1,deletions:0,changes:1,blob_url:"https://github.com/takahiroanno2024/election2024/blob/3aac0416e50a6bc4140b6b41697f0806a708421b/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/3aac0416e50a6bc4140b6b41697f0806a708421b/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=3aac0416e50a6bc4140b6b41697f0806a708421b",patch:`@@ -99,6 +99,7 @@
         - 島しょ地域では、住民の高齢化も進む中で、交通の足がないという課題が実際に聞かれる
         - 島しょ地域では、主要道路への実装ハードルが比較的低い
             - 住民の生活における主要道路が複雑すぎない
+            - 経路や場面のパターンが少ない
             - 他地域と比較すると人の交通量が多すぎず、事故リスクが低い
 
 `}]},{oid:"3def595706dccc6f756483813917690173447c8b",message:"Merge branch 'main' into patch-2",committedDate:"2024-07-04T01:36:21Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/3def595706dccc6f756483813917690173447c8b",associatedPullRequests:{edges:[{node:{number:288,title:"不妊治療における書類提出作業オンライン化",url:"https://github.com/takahiroanno2024/election2024/pull/288",comments:{nodes:[{body:"@kyo-tamaki こちら議論過程が一部Slackにしか残っておらず、publicなところに残っていないので、一部サマリする形でこちらのPRの上部や元Issueにテキストを残していただけますでしょうか？"}]},timelineItems:{nodes:[]}}}]},files:[{sha:"6f4c6bad79888ea7f34995bfe3c48523670cd6a2",filename:"docs/manifest/budget.md",status:"added",additions:62,deletions:0,changes:62,blob_url:"https://github.com/takahiroanno2024/election2024/blob/3def595706dccc6f756483813917690173447c8b/docs%2Fmanifest%2Fbudget.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/3def595706dccc6f756483813917690173447c8b/docs%2Fmanifest%2Fbudget.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fbudget.md?ref=3def595706dccc6f756483813917690173447c8b",patch:`@@ -0,0 +1,62 @@
+# 5本の柱 実現のための想定予算と財源確保の手立て
+
+## サマリー
+
+- 安野たかひろが今回政策の5本の柱で掲げている各種新規施策は、現行の都の年間予算約8.5兆円の1%未満・500億円程度で実現可能な見込み
+- 東京都の税収は年間おおよそ1,600億円程度伸長。経常収支比率を考慮しても使える予算は毎年373億円程度増えている
+- 都知事任期の前半2年に分けて新規政策を実行すれば、税収増分で増えた予算内で全ての政策の実現が可能
+- 加えて、デジタルの活用による無駄削減、既存政策の見直し（都庁プロジェクションマッピングの取りやめなど）により、更なる財源の捻出・余裕を持った財政運営を目指す
+- 大枠の予算配分は変えず、既存政策の良い部分はしっかりと踏襲していく
+
+## 政策の5本柱実現にかかる予算規模概算
+
+- 政策の5本柱で上げた施策の実現は、導入時に約513億円、その後の維持・運営費に最大170億円／年程度がかかる見込み
+    - 最も予算を要するのは2本目の柱である「とことん安心の医療・防災」で、導入に約275億円、維持・運営に約52.5億円/年を想定
+- 都の一般会計は令和6年度で約8.5兆円。その大きな予算配分を変えることなく、全体の1%未満で現在打ち出している新規政策は実現可能
+- 経済：新産業で所得倍増　導入2.2億円、維持・運営6億円/年
+    - 都立インターナショナルスクールの誘致（企画費・授業料補助等）：導入4億円、維持・運営3億円/年
+    - 自動運転特区の実現：導入18億円、運営3億円/年
+    - ほか施策については、追加予算ではなく現行の予算内で取り組み内容を変更
+- 医療・防災：とことん安心の医療・防災　導入272.5億円、維持・運営52.5億円/年
+    - 夜間休日の医療体制構築：導入91.4億円、維持・運営35億円/年
+    - 自分らしい生き方アプリの開発：導入25億円、維持・運営1億円/年
+    - 施設利用状況のデータベース化：導入18億円、維持・運営2億円/年
+    - 入退院サマリーの作成補助：導入34億円、維持・運営1億円/年
+    - 避難訓練の実効性を強化するデジタル技術の実装：導入16.8億円、維持・運営1.8億円/年
+    - 分散型情報インフラの構築：導入41億円、維持・運営1.12億円/年
+    - 避難所運営のスムーズ化:導入49億円、維持・運営0.5億円/年
+    - その他取り組みは、現行予算の枠内で実現
+- 子育て・教育：安心の子育て教育環境　導入188億円、維持・運営90億円/年
+    - 不妊治療の「先進医療」の費用額上限撤廃：13億円/年
+    - 無痛分娩に対する助成：11億円/年
+    - 住宅費支援:13億円/年
+    - 教育費支援：53億円/年
+    - 海外大学誘致：導入12億円
+    - 校務のDX化：導入86億円
+    - その他取り組みは、現行予算の枠内で実現
+- 行政：行政をもっと簡単・透明に　導入14億円、維持・運営最大21億円/年
+    - 使い勝手改善：導入0.5億円
+    - デジタル人材確保：2.5～10億円/年
+    - リモート窓口の整備：1億円/年
+    - AI活用の総合案内：10億円/年
+    - その他取り組みは、現行予算の枠内で実現
+- 民主主義：高速な民意反映　導入13.74億円、維持・運営0.02億円/年
+    - ブロードリスニングの整備：導入0.14億円、維持・運営0.02億円/年
+    - 都議会AIの作成：導入11.8億円
+    - 都政参加プラットフォームの構築：導入1.8億円
+    - 東京都スマホアプリの開発：行政パートの予算に内包
+    - AIアシスタント・LINE等の活用：行政パートの予算に内包
+
+## 予算ねん出のための財源の考え方
+
+- 東京都の税収はここ14年で見るとおおよそ1,600億円/年で伸長。経常収支比率を考慮しても使える予算は毎年373億円程度増えている
+    - 東京都財務局の発表によると、2010年から2024年の間で税収は2.24兆円増加。1年で1600億円程度税収が伸びている状況
+    - 経常収支比率は令和4年度で76.7%であり、それを差し引いても毎年約373億円程度は財源が税収増により増えている
+- 任期4年の前半2年にかけて政策を実行することで、税収増分で増えた予算内で全ての政策の実現が可能
+    - 年間373億円の税収増分の予算に対し、安野の政策全てを実装するには導入コストとして前述のとおり約513億円が必要。
+    - 2年間で実施タイミングをずらして導入を行うことで、無理のない計画で新政策の実装が可能となる
+- 加えて、デジタルの活用による無駄削減、既存政策の見直し（都庁プロジェクションマッピングの取りやめなど）により、更なる財源の捻出・余裕を持った財政運営を目指す
+    - デジタルの活用により、様々な既存の都政の無駄が削減されることを想定している。内情をつぶさに確認し、徹底的な効率化による更なる予算ねん出を目指す
+    - また、良い政策は踏襲するが、そうでないものは速やかに取りやめ、コストを抑える。
+        - 例えば都庁のプロジェクションマッピングは2024年度で7億円ほどの予算が計上されているが、取りやめが望ましいと考える
+- 現在の都政の取り組みのうち、子育て支援・スタートアップ支援・東京都強靭化など良いものは継続するべく、大幅な予算枠の割り当て変更は行わない`},{sha:"4e92fa84c20761c46c056247f151ab94372c5f2f",filename:"docs/manifest/economy.md",status:"modified",additions:2,deletions:2,changes:4,blob_url:"https://github.com/takahiroanno2024/election2024/blob/3def595706dccc6f756483813917690173447c8b/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/3def595706dccc6f756483813917690173447c8b/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=3def595706dccc6f756483813917690173447c8b",patch:`@@ -135,7 +135,7 @@
 - 外国語で診療を受けられる医療体制の欠如
     - 「医療」政策パートで後述
 - 子供の教育環境の手薄さ
-    - 中高一貫の都立インターナショナルスクールを設立
+    - 中高一貫の都立インターナショナルスクールを誘致
 
 ## 生成AIによる言語障壁/暮らしのインフラ整備の課題解決
 
@@ -147,7 +147,7 @@
         - 東京での暮らしを始める上で必要な手続きが一目でわかり、スムーズに
         - 行政手続きはもちろん、住宅や生活インフラ申込など民間事業者にまつわる手続きのワンストップ化の方策も検討
 
-## 中高一貫の都立インターナショナルスクール設置・増設
+## 中高一貫の都立インターナショナルスクール誘致・増設
 
 - 東京に住みたいと思う技術者・研究者は多いが、トップレベルのインターナショナルスクールが少なく「子供を育てられない」と諦めることが多い
 - 優れたインターナショナルスクールの東京誘致により世界の技術者・研究者が「家族で住める」東京へ`},{sha:"9a80572ed9b8d9e34d84fe32e26455ecd6dd07a5",filename:"docs/manifest/education.md",status:"modified",additions:2,deletions:0,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/3def595706dccc6f756483813917690173447c8b/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/3def595706dccc6f756483813917690173447c8b/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=3def595706dccc6f756483813917690173447c8b",patch:`@@ -57,6 +57,7 @@
     - 不妊治療における物理的負担を軽減
         - 不妊治療に向けた休暇をとりやすい制度や柔軟な働き方の実現に向けて提言する
         - 通院回数を１回でも減らすため、不妊治療に必要な各種書類（戸籍謄本・同意書等）のオンライン提出や病院ごとの統一フォーマット推進
+    - フリーランス・起業家など、育休が取れない方への支援も実施します。
 - 子育ての経済的負担に向けての支援
     - 子育て世帯に向けて、家賃の一部を割引する制度を拡充します
     - 教育費（塾代・受験料）を支援する制度を整備します
@@ -66,6 +67,7 @@
 - 経済的負担
     - 不妊治療のうち、自費で実施される「先進医療」に係る費用の助成額の上限を取り除く
     - 無痛分娩に対する助成などさらなる負担を広げていく
+    - フリーランスや起業家の方向けの出産手当金・出生時育児休業給付金を手配
 - 時間的負担
     - 不妊治療の夜間診療の拡充を図るなど、より多くの人に受けられるように提言
 - 心理的負担`},{sha:"8f81f80aec92d79873311632f861c9fd6fc6bab7",filename:"docs/manifest/others.md",status:"modified",additions:27,deletions:0,changes:27,blob_url:"https://github.com/takahiroanno2024/election2024/blob/3def595706dccc6f756483813917690173447c8b/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/3def595706dccc6f756483813917690173447c8b/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=3def595706dccc6f756483813917690173447c8b",patch:`@@ -32,3 +32,30 @@
             - 参考）<https://www.nikkei.com/article/DGXZQOUC261300W4A420C2000000/>
     - その他クリーンテック技術の革新に向けた技術企業への支援
     - 安全を確保したうえでの原子力発電再稼働に向けた検討の推進・都としての働きかけ
+
+## 障害福祉
+- 特別な配慮が必要な児童の数は増えてきている
+    - 通級による指導を受けている児童も増加傾向にあり、現在は134,185人（令和1年時点）
+    - 通常の学級に在籍する小中学生の8.8%に学習や行動に困難のある発達障害の可能性がある
+- 社会側の障害をなくしていくために、専門職の方々の生産性向上・ステークホルダーの連携強化・テクノロジーの活用を進める必要がある
+    - 一人ひとりの特性やお困りに合わせて、どのような支援が必要かを見立てること・心理面も含めた支援に対しては、専門職の力が不可欠
+        - 福祉従事者の方の待遇改善
+        - 手続き面でのさらなるDXの検討
+    - ステークホルダーの連携強化
+        - 学校現場での支援者を増やすため、「特別支援教育支援員」の採用に対して補助
+        - 学校・福祉事業所・医療機関等、関係機関間での連携強化を支援
+    - テクノロジーの活用
+        - 効果的なツールのデータベース化
+        - 活用方法や、キャリアづくりのためのロールモデルとのマッチング
+- 福祉事業者を含むエッセンシャルワーカーの待遇改善
+    - 処遇改善加算算定時に、都からさらに助成金を追加する
+    - 住宅補助の拡充
+    - DXの一層の進展のために、導入時にICT支援を派遣する    
+- テクノロジーは、マッチング・ロールモデルとセットで届けていく
+    - 効果的なテクノロジー活用例
+        - 場面緘黙の方に向けて会話支援AIツール Be Free
+        - 発達障害の方に向けたサポートツール goblin.tools
+    - それぞれの特性・困りごとに検索ができるデータベースを都のイニシアチブで整理
+        - 助成事業として実施されたことはあるが継続性が担保されないので、都として支援
+    - ツールの活用しながら、どのようにキャリアを積んできたかについて見通し不安をなくすロールモデルとの出会い
+        - オンラインでのメンタリングを支援`}]},{oid:"e529863dd56f9da18f5a347a9e0b1abe03b38aed",message:`Merge pull request #287 from takahiroanno2024/micthell712-patch-3

フリーランス・起業家の方に向けた、育休相当の支援`,committedDate:"2024-07-04T01:32:49Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/e529863dd56f9da18f5a347a9e0b1abe03b38aed",associatedPullRequests:{edges:[{node:{number:287,title:"フリーランス・起業家の方に向けた、育休相当の支援",url:"https://github.com/takahiroanno2024/election2024/pull/287",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"9f3a7e0badd7027d530f69d693592efc73b3c4dd",filename:"docs/manifest/education.md",status:"modified",additions:2,deletions:0,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/e529863dd56f9da18f5a347a9e0b1abe03b38aed/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/e529863dd56f9da18f5a347a9e0b1abe03b38aed/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=e529863dd56f9da18f5a347a9e0b1abe03b38aed",patch:`@@ -55,6 +55,7 @@
     - 無痛分娩に対する助成などさらなる負担低減を広げていく
     - 不妊治療の夜間診療の拡充を図るなど、より多くの人が受診機会を得られるよう提言する
     - 不妊治療に向けた休暇をとりやすい制度や柔軟な働き方の実現に向けて提言する
+    - フリーランス・起業家など、育休が取れない方への支援も実施します。
 - 子育ての経済的負担に向けての支援
     - 子育て世帯に向けて、家賃の一部を割引する制度を拡充します
     - 教育費（塾代・受験料）を支援する制度を整備します
@@ -64,6 +65,7 @@
 - 経済的負担
     - 不妊治療のうち、自費で実施される「先進医療」に係る費用の助成額の上限を取り除く
     - 無痛分娩に対する助成などさらなる負担を広げていく
+    - フリーランスや起業家の方向けの出産手当金・出生時育児休業給付金を手配
 - 時間的負担
     - 不妊治療の夜間診療の拡充を図るなど、より多くの人に受けられるように提言
 - 心理的負担`}]},{oid:"1c214168e0a300ce2083939322e89c88904e0ffd",message:"Update docs/manifest/education.md",committedDate:"2024-07-04T01:32:31Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/1c214168e0a300ce2083939322e89c88904e0ffd",associatedPullRequests:{edges:[{node:{number:287,title:"フリーランス・起業家の方に向けた、育休相当の支援",url:"https://github.com/takahiroanno2024/election2024/pull/287",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"9f3a7e0badd7027d530f69d693592efc73b3c4dd",filename:"docs/manifest/education.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/1c214168e0a300ce2083939322e89c88904e0ffd/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/1c214168e0a300ce2083939322e89c88904e0ffd/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=1c214168e0a300ce2083939322e89c88904e0ffd",patch:`@@ -65,7 +65,7 @@
 - 経済的負担
     - 不妊治療のうち、自費で実施される「先進医療」に係る費用の助成額の上限を取り除く
     - 無痛分娩に対する助成などさらなる負担を広げていく
-    - フリーランスや起業家の方が受け取れる、所得保証のための見舞金を手配します（出産手当金・出生時育児休業給付金等に相当）
+    - フリーランスや起業家の方向けの出産手当金・出生時育児休業給付金を手配
 - 時間的負担
     - 不妊治療の夜間診療の拡充を図るなど、より多くの人に受けられるように提言
 - 心理的負担`}]},{oid:"323429f8e0d8d04d92c39413cf714b41d28f6ec3",message:`Merge pull request #286 from takahiroanno2024/micthell712-patch-2

障害福祉領域での専門職・連携強化・テクノロジー活用の強化`,committedDate:"2024-07-04T01:28:05Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/323429f8e0d8d04d92c39413cf714b41d28f6ec3",associatedPullRequests:{edges:[{node:{number:286,title:"障害福祉領域での専門職・連携強化・テクノロジー活用の強化",url:"https://github.com/takahiroanno2024/election2024/pull/286",comments:{nodes:[{body:`内容は良いと思うのでmergeします。\r
下記のPRで行われているような財源の検討を継続して行っていただけますでしょうか？\r
https://github.com/takahiroanno2024/election2024/pull/267\r
\r
@micthell712 `}]},timelineItems:{nodes:[]}}}]},files:[{sha:"8f81f80aec92d79873311632f861c9fd6fc6bab7",filename:"docs/manifest/others.md",status:"modified",additions:27,deletions:0,changes:27,blob_url:"https://github.com/takahiroanno2024/election2024/blob/323429f8e0d8d04d92c39413cf714b41d28f6ec3/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/323429f8e0d8d04d92c39413cf714b41d28f6ec3/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=323429f8e0d8d04d92c39413cf714b41d28f6ec3",patch:`@@ -32,3 +32,30 @@
             - 参考）<https://www.nikkei.com/article/DGXZQOUC261300W4A420C2000000/>
     - その他クリーンテック技術の革新に向けた技術企業への支援
     - 安全を確保したうえでの原子力発電再稼働に向けた検討の推進・都としての働きかけ
+
+## 障害福祉
+- 特別な配慮が必要な児童の数は増えてきている
+    - 通級による指導を受けている児童も増加傾向にあり、現在は134,185人（令和1年時点）
+    - 通常の学級に在籍する小中学生の8.8%に学習や行動に困難のある発達障害の可能性がある
+- 社会側の障害をなくしていくために、専門職の方々の生産性向上・ステークホルダーの連携強化・テクノロジーの活用を進める必要がある
+    - 一人ひとりの特性やお困りに合わせて、どのような支援が必要かを見立てること・心理面も含めた支援に対しては、専門職の力が不可欠
+        - 福祉従事者の方の待遇改善
+        - 手続き面でのさらなるDXの検討
+    - ステークホルダーの連携強化
+        - 学校現場での支援者を増やすため、「特別支援教育支援員」の採用に対して補助
+        - 学校・福祉事業所・医療機関等、関係機関間での連携強化を支援
+    - テクノロジーの活用
+        - 効果的なツールのデータベース化
+        - 活用方法や、キャリアづくりのためのロールモデルとのマッチング
+- 福祉事業者を含むエッセンシャルワーカーの待遇改善
+    - 処遇改善加算算定時に、都からさらに助成金を追加する
+    - 住宅補助の拡充
+    - DXの一層の進展のために、導入時にICT支援を派遣する    
+- テクノロジーは、マッチング・ロールモデルとセットで届けていく
+    - 効果的なテクノロジー活用例
+        - 場面緘黙の方に向けて会話支援AIツール Be Free
+        - 発達障害の方に向けたサポートツール goblin.tools
+    - それぞれの特性・困りごとに検索ができるデータベースを都のイニシアチブで整理
+        - 助成事業として実施されたことはあるが継続性が担保されないので、都として支援
+    - ツールの活用しながら、どのようにキャリアを積んできたかについて見通し不安をなくすロールモデルとの出会い
+        - オンラインでのメンタリングを支援`}]},{oid:"64663563152070e82d2405739fae022d5721ed3b",message:"Merge pull request #285 from sawa-h/patch-2",committedDate:"2024-07-03T23:47:23Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/64663563152070e82d2405739fae022d5721ed3b",associatedPullRequests:{edges:[{node:{number:285,title:"インターナショナルスクールを「誘致」に統一",url:"https://github.com/takahiroanno2024/election2024/pull/285",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"4e92fa84c20761c46c056247f151ab94372c5f2f",filename:"docs/manifest/economy.md",status:"modified",additions:2,deletions:2,changes:4,blob_url:"https://github.com/takahiroanno2024/election2024/blob/64663563152070e82d2405739fae022d5721ed3b/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/64663563152070e82d2405739fae022d5721ed3b/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=64663563152070e82d2405739fae022d5721ed3b",patch:`@@ -135,7 +135,7 @@
 - 外国語で診療を受けられる医療体制の欠如
     - 「医療」政策パートで後述
 - 子供の教育環境の手薄さ
-    - 中高一貫の都立インターナショナルスクールを設立
+    - 中高一貫の都立インターナショナルスクールを誘致
 
 ## 生成AIによる言語障壁/暮らしのインフラ整備の課題解決
 
@@ -147,7 +147,7 @@
         - 東京での暮らしを始める上で必要な手続きが一目でわかり、スムーズに
         - 行政手続きはもちろん、住宅や生活インフラ申込など民間事業者にまつわる手続きのワンストップ化の方策も検討
 
-## 中高一貫の都立インターナショナルスクール設置・増設
+## 中高一貫の都立インターナショナルスクール誘致・増設
 
 - 東京に住みたいと思う技術者・研究者は多いが、トップレベルのインターナショナルスクールが少なく「子供を育てられない」と諦めることが多い
 - 優れたインターナショナルスクールの東京誘致により世界の技術者・研究者が「家族で住める」東京へ`}]},{oid:"08a3f96b89ad9dbe6814dd140deed051a25065d6",message:"Update others.md",committedDate:"2024-07-03T14:26:02Z",author:{name:"micthell712",email:"llehctim.k@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/08a3f96b89ad9dbe6814dd140deed051a25065d6",associatedPullRequests:{edges:[{node:{number:286,title:"障害福祉領域での専門職・連携強化・テクノロジー活用の強化",url:"https://github.com/takahiroanno2024/election2024/pull/286",comments:{nodes:[{body:`内容は良いと思うのでmergeします。\r
下記のPRで行われているような財源の検討を継続して行っていただけますでしょうか？\r
https://github.com/takahiroanno2024/election2024/pull/267\r
\r
@micthell712 `}]},timelineItems:{nodes:[]}}}]},files:[{sha:"8f81f80aec92d79873311632f861c9fd6fc6bab7",filename:"docs/manifest/others.md",status:"modified",additions:4,deletions:0,changes:4,blob_url:"https://github.com/takahiroanno2024/election2024/blob/08a3f96b89ad9dbe6814dd140deed051a25065d6/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/08a3f96b89ad9dbe6814dd140deed051a25065d6/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=08a3f96b89ad9dbe6814dd140deed051a25065d6",patch:`@@ -47,6 +47,10 @@
     - テクノロジーの活用
         - 効果的なツールのデータベース化
         - 活用方法や、キャリアづくりのためのロールモデルとのマッチング
+- 福祉事業者を含むエッセンシャルワーカーの待遇改善
+    - 処遇改善加算算定時に、都からさらに助成金を追加する
+    - 住宅補助の拡充
+    - DXの一層の進展のために、導入時にICT支援を派遣する    
 - テクノロジーは、マッチング・ロールモデルとセットで届けていく
     - 効果的なテクノロジー活用例
         - 場面緘黙の方に向けて会話支援AIツール Be Free`}]},{oid:"2384124e8ec8fa1a5a99583509abf484f32ed61c",message:"Lint修正",committedDate:"2024-07-03T13:25:31Z",author:{name:"Imaizumi Takatsugu",email:"takatsugu.imaizumi@mntsq.com"},url:"https://github.com/takahiroanno2024/election2024/commit/2384124e8ec8fa1a5a99583509abf484f32ed61c",associatedPullRequests:{edges:[{node:{number:267,title:"Create budget",url:"https://github.com/takahiroanno2024/election2024/pull/267",comments:{nodes:[{body:"@tokshibata デジタル人材の確保については、単価見直し＆法定福利・福利厚生費反映で2.5億円。＋継続欄は書き方に自由度があるのであれば、毎年継続的に募集しエンジニア100人程度を目指すと想定されるので、最大10億円程度という書き方にできますでしょうか・・・？"}]},timelineItems:{nodes:[{subject:{number:180,title:"取組内容に対する予算とその実行計画及び体制を提示してほしい",url:"https://github.com/takahiroanno2024/election2024/issues/180"}}]}}}]},files:[{sha:"6f4c6bad79888ea7f34995bfe3c48523670cd6a2",filename:"docs/manifest/budget.md",status:"modified",additions:40,deletions:37,changes:77,blob_url:"https://github.com/takahiroanno2024/election2024/blob/2384124e8ec8fa1a5a99583509abf484f32ed61c/docs%2Fmanifest%2Fbudget.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/2384124e8ec8fa1a5a99583509abf484f32ed61c/docs%2Fmanifest%2Fbudget.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fbudget.md?ref=2384124e8ec8fa1a5a99583509abf484f32ed61c",patch:`@@ -1,59 +1,62 @@
 # 5本の柱 実現のための想定予算と財源確保の手立て
+
 ## サマリー
+
 - 安野たかひろが今回政策の5本の柱で掲げている各種新規施策は、現行の都の年間予算約8.5兆円の1%未満・500億円程度で実現可能な見込み
 - 東京都の税収は年間おおよそ1,600億円程度伸長。経常収支比率を考慮しても使える予算は毎年373億円程度増えている
 - 都知事任期の前半2年に分けて新規政策を実行すれば、税収増分で増えた予算内で全ての政策の実現が可能
 - 加えて、デジタルの活用による無駄削減、既存政策の見直し（都庁プロジェクションマッピングの取りやめなど）により、更なる財源の捻出・余裕を持った財政運営を目指す
 - 大枠の予算配分は変えず、既存政策の良い部分はしっかりと踏襲していく
 
 ## 政策の5本柱実現にかかる予算規模概算
+
 - 政策の5本柱で上げた施策の実現は、導入時に約513億円、その後の維持・運営費に最大170億円／年程度がかかる見込み
-  - 最も予算を要するのは2本目の柱である「とことん安心の医療・防災」で、導入に約275億円、維持・運営に約52.5億円/年を想定
+    - 最も予算を要するのは2本目の柱である「とことん安心の医療・防災」で、導入に約275億円、維持・運営に約52.5億円/年を想定
 - 都の一般会計は令和6年度で約8.5兆円。その大きな予算配分を変えることなく、全体の1%未満で現在打ち出している新規政策は実現可能
 - 経済：新産業で所得倍増　導入2.2億円、維持・運営6億円/年
-  - 都立インターナショナルスクールの誘致（企画費・授業料補助等）：導入4億円、維持・運営3億円/年
-  - 自動運転特区の実現：導入18億円、運営3億円/年
-  - ほか施策については、追加予算ではなく現行の予算内で取り組み内容を変更
+    - 都立インターナショナルスクールの誘致（企画費・授業料補助等）：導入4億円、維持・運営3億円/年
+    - 自動運転特区の実現：導入18億円、運営3億円/年
+    - ほか施策については、追加予算ではなく現行の予算内で取り組み内容を変更
 - 医療・防災：とことん安心の医療・防災　導入272.5億円、維持・運営52.5億円/年
-  - 夜間休日の医療体制構築：導入91.4億円、維持・運営35億円/年
-  - 自分らしい生き方アプリの開発：導入25億円、維持・運営1億円/年
-  - 施設利用状況のデータベース化：導入18億円、維持・運営2億円/年
-  - 入退院サマリーの作成補助：導入34億円、維持・運営1億円/年
-  - 避難訓練の実効性を強化するデジタル技術の実装：導入16.8億円、維持・運営1.8億円/年
-  - 分散型情報インフラの構築：導入41億円、維持・運営1.12億円/年
-  - 避難所運営のスムーズ化:導入49億円、維持・運営0.5億円/年
-  - その他取り組みは、現行予算の枠内で実現
+    - 夜間休日の医療体制構築：導入91.4億円、維持・運営35億円/年
+    - 自分らしい生き方アプリの開発：導入25億円、維持・運営1億円/年
+    - 施設利用状況のデータベース化：導入18億円、維持・運営2億円/年
+    - 入退院サマリーの作成補助：導入34億円、維持・運営1億円/年
+    - 避難訓練の実効性を強化するデジタル技術の実装：導入16.8億円、維持・運営1.8億円/年
+    - 分散型情報インフラの構築：導入41億円、維持・運営1.12億円/年
+    - 避難所運営のスムーズ化:導入49億円、維持・運営0.5億円/年
+    - その他取り組みは、現行予算の枠内で実現
 - 子育て・教育：安心の子育て教育環境　導入188億円、維持・運営90億円/年
-  - 不妊治療の「先進医療」の費用額上限撤廃：13億円/年
-  - 無痛分娩に対する助成：11億円/年
-  - 住宅費支援:13億円/年
-  - 教育費支援：53億円/年
-  - 海外大学誘致：導入12億円
-  - 校務のDX化：導入86億円
-  - その他取り組みは、現行予算の枠内で実現
+    - 不妊治療の「先進医療」の費用額上限撤廃：13億円/年
+    - 無痛分娩に対する助成：11億円/年
+    - 住宅費支援:13億円/年
+    - 教育費支援：53億円/年
+    - 海外大学誘致：導入12億円
+    - 校務のDX化：導入86億円
+    - その他取り組みは、現行予算の枠内で実現
 - 行政：行政をもっと簡単・透明に　導入14億円、維持・運営最大21億円/年
-  - 使い勝手改善：導入0.5億円
-  - デジタル人材確保：2.5～10億円/年
-  - リモート窓口の整備：1億円/年
-  - AI活用の総合案内：10億円/年
-  - その他取り組みは、現行予算の枠内で実現
+    - 使い勝手改善：導入0.5億円
+    - デジタル人材確保：2.5～10億円/年
+    - リモート窓口の整備：1億円/年
+    - AI活用の総合案内：10億円/年
+    - その他取り組みは、現行予算の枠内で実現
 - 民主主義：高速な民意反映　導入13.74億円、維持・運営0.02億円/年
-  - ブロードリスニングの整備：導入0.14億円、維持・運営0.02億円/年
-  - 都議会AIの作成：導入11.8億円
-  - 都政参加プラットフォームの構築：導入1.8億円
-  - 東京都スマホアプリの開発：行政パートの予算に内包
-  - AIアシスタント・LINE等の活用：行政パートの予算に内包
+    - ブロードリスニングの整備：導入0.14億円、維持・運営0.02億円/年
+    - 都議会AIの作成：導入11.8億円
+    - 都政参加プラットフォームの構築：導入1.8億円
+    - 東京都スマホアプリの開発：行政パートの予算に内包
+    - AIアシスタント・LINE等の活用：行政パートの予算に内包
 
 ## 予算ねん出のための財源の考え方
+
 - 東京都の税収はここ14年で見るとおおよそ1,600億円/年で伸長。経常収支比率を考慮しても使える予算は毎年373億円程度増えている
-  - 東京都財務局の発表によると、2010年から2024年の間で税収は2.24兆円増加。1年で1600億円程度税収が伸びている状況
-  - 経常収支比率は令和4年度で76.7%であり、それを差し引いても毎年約373億円程度は財源が税収増により増えている
+    - 東京都財務局の発表によると、2010年から2024年の間で税収は2.24兆円増加。1年で1600億円程度税収が伸びている状況
+    - 経常収支比率は令和4年度で76.7%であり、それを差し引いても毎年約373億円程度は財源が税収増により増えている
 - 任期4年の前半2年にかけて政策を実行することで、税収増分で増えた予算内で全ての政策の実現が可能
-  - 年間373億円の税収増分の予算に対し、安野の政策全てを実装するには導入コストとして前述のとおり約513億円が必要。
-  - 2年間で実施タイミングをずらして導入を行うことで、無理のない計画で新政策の実装が可能となる
+    - 年間373億円の税収増分の予算に対し、安野の政策全てを実装するには導入コストとして前述のとおり約513億円が必要。
+    - 2年間で実施タイミングをずらして導入を行うことで、無理のない計画で新政策の実装が可能となる
 - 加えて、デジタルの活用による無駄削減、既存政策の見直し（都庁プロジェクションマッピングの取りやめなど）により、更なる財源の捻出・余裕を持った財政運営を目指す
-  - デジタルの活用により、様々な既存の都政の無駄が削減されることを想定している。内情をつぶさに確認し、徹底的な効率化による更なる予算ねん出を目指す
-  - また、良い政策は踏襲するが、そうでないものは速やかに取りやめ、コストを抑える。
-    - 例えば都庁のプロジェクションマッピングは2024年度で7億円ほどの予算が計上されているが、取りやめが望ましいと考える
+    - デジタルの活用により、様々な既存の都政の無駄が削減されることを想定している。内情をつぶさに確認し、徹底的な効率化による更なる予算ねん出を目指す
+    - また、良い政策は踏襲するが、そうでないものは速やかに取りやめ、コストを抑える。
+        - 例えば都庁のプロジェクションマッピングは2024年度で7億円ほどの予算が計上されているが、取りやめが望ましいと考える
 - 現在の都政の取り組みのうち、子育て支援・スタートアップ支援・東京都強靭化など良いものは継続するべく、大幅な予算枠の割り当て変更は行わない
-  `}]},{oid:"ff68a733f727b68aa6071f3520b68ecf80137e17",message:"Merge branch 'main' into tokshibata-patch-3",committedDate:"2024-07-03T13:22:27Z",author:{name:"Imaizumi Takatsugu",email:"takatsugu.imaizumi@mntsq.com"},url:"https://github.com/takahiroanno2024/election2024/commit/ff68a733f727b68aa6071f3520b68ecf80137e17",associatedPullRequests:{edges:[{node:{number:267,title:"Create budget",url:"https://github.com/takahiroanno2024/election2024/pull/267",comments:{nodes:[{body:"@tokshibata デジタル人材の確保については、単価見直し＆法定福利・福利厚生費反映で2.5億円。＋継続欄は書き方に自由度があるのであれば、毎年継続的に募集しエンジニア100人程度を目指すと想定されるので、最大10億円程度という書き方にできますでしょうか・・・？"}]},timelineItems:{nodes:[{subject:{number:180,title:"取組内容に対する予算とその実行計画及び体制を提示してほしい",url:"https://github.com/takahiroanno2024/election2024/issues/180"}}]}}}]},files:[{sha:"2bf5e480237e7be4d017eb1c6e3d30b16218f226",filename:"docs/manifest/administration.md",status:"modified",additions:69,deletions:17,changes:86,blob_url:"https://github.com/takahiroanno2024/election2024/blob/ff68a733f727b68aa6071f3520b68ecf80137e17/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/ff68a733f727b68aa6071f3520b68ecf80137e17/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=ff68a733f727b68aa6071f3520b68ecf80137e17",patch:`@@ -18,8 +18,9 @@
         - 都が持つ情報の公開を徹底する
     - 自治体連携の推進による便利さの底上げ
         - 協定等の政治的な枠組みだけでなくシステムとして連携を強め生活の利便性向上につなげる
-    - 政策の質、実行力を担保するデジタルリーダー
+    - 政策の質、実行力を担保する組織作り
         - 強いデジタルリーダーシップを持つ知事のもと、整備された基盤を適切に利活用していく
+        - 都庁の働き方改革、業務効率化を推進することで実行力のある組織を作る
 
 ## 現体制の下、東京都の構造改革・DXは一定進展
 
@@ -61,6 +62,33 @@
 - 行政では…情報公開を住民とのコミュニケーションのための前向きな手段と捉え直し、公開する情報の範囲のみならず、利便性や伝え方を工夫していくべきではないか
     - 情報開示＝不正を暴くというようなネガティブな文脈で使われることが多い
     - そのため、後ろ向きで受動的な情報開示になる傾向があるのではないか
+ 
+## 東京都が果たすべき役割 
+
+- 制度上の国・都・市区町村の役割分担(例)
+    - 国：防衛、外交、全国で統一すべき基準　など
+        - 国際社会における国家としての存立に関わる事務
+        - 全国で統一的に定めることが望ましいものに関する事務
+        - 全国規模で行うべき施策・事業
+    - 都：広域的な行政サービス
+        - 保健衛生：臨時の予防接種の実施　など
+        - 福祉：保育士・介護支援専門員の登録、児童相談所の登録　(保育所・養護老人ホームの認可)　など
+        - 教育：小中学校学級編成基準、私立学校等の設置認可、県費負担教職員関係　など
+        - 環境：公害健康被害の補償、(廃棄物処理施設の設置許可)　など
+        - まちづくり：都市計画区域の指定、区域区分に関する都市計画決定、(上下水道の整備・管理運営)　など
+        - 治安・安全・防災：警察、(消防)
+    - 区市町村：身近な行政サービス
+        - 保健衛生：保健所の設置、市町村保健センターの設置　など
+        - 福祉：保育所の設置・運営、生活保護　など
+        - 教育：小中学校・幼稚園の設置・運営　など
+        - 環境：一般廃棄物の収集や処理　など
+        - まちづくり：都市計画決定　など
+        - 治安・安全・防災・その他：戸籍、住民票
+- 東京都ができること：制度上の権限だけでなく、広域自治体として・首都として国・地域をけん引していく必要
+    - 国に対して：具体的事例やニーズを基に規制改革提案、分権提案を実施し枠組みの変革を主導
+    - 都民に対して：都の持つ権限や予算、資産を最大限活用し住民福祉の向上
+    - 他の自治体に対して：自治体のトップランナーとして先進事例の提供、ノウハウの共有を目指す
+    - 区市町村に対して：財政、情報提供、ルールメイクなどを通じて地域住民の生活向上支援
 
 ## 都民にとって使いやすい行政に
 
@@ -86,6 +114,7 @@
 - これまでの行政サービスは、大量の情報から自分に合ったサービスを探す必要があり、面倒さや、使えるサービスに気づかないという漏れが生まれていた
 - 今後は、プッシュ型で必要な政策情報を取得できるようにする
     - 本人情報や事前に入力した興味・関心から関連する政策をプッシュ型で提案（アプリやメールでの通知を想定）
+    - 前向きなメッセージとともに提案を行うことで、行政サービスの利用への抵抗感を軽減
 
 ## 見やすい・わかりやすい情報公開により東京都の透明化
 
@@ -127,19 +156,42 @@
         - GovTech東京による区市町村支援の一層推進
         - 子育て・介護をはじめとする住民に身近な行政サービスでの区市町村との連携強化
 
-## 更なるDX推進のため、技術への理解があるリーダーに託す
-
-- 過去は日本のデジタル競争力が低下していた
-    - デジタル競争力順位低迷
-    - IT人材のベンダー頼り、内部IT人材の不足
-    - 行政DXの遅れ
-- 現在は都として様々な取り組みを実施し、基盤整備を試みている
-    - [東京都デジタル人材育成基本方針](https://www.digitalservice.metro.tokyo.lg.jp/business/digital-hr/digital-hr-policy-v2)策定
-    - 都のサービスユーザーテストガイドライン制定
-- しかしいぜんとして現状の課題は残る。実行力・企画力の強化は道半ば
-    - インタビューした都庁職員の声：GovTech全体の組織は大きくなっているが、エンジニアの比重は少なく、絶対数が足りていない
-    - インタビューした都庁職員の声：内部手続きが多く、政策を考える十分な時間が確保できていない。また、整備された基盤に都政のトップの理解が追いついていない
-    - その結果、職場としての魅力がうすれ、東京都の採用試験の応募者数は2015年の2024人から、2022年委は697人にまで大幅に減少
-- 描く未来：強いデジタルリーダーシップを持つ知事のもと、整備された基盤を適切に利活用していく
-    - デジタル人材の活用、例えば元都庁職員の出戻り推進
-    - 都の意思決定の高度化、例えば各種アドバイザリーボードの設置
+## 技術に精通したリーダーによる行政運営の高度化
+
+- 東京都の前進のためには更なる行政運営の高度化が必要
+    - 行政DX
+        - 都として様々な取組が実施されているものの課題は残存
+        - インタビューした都庁職員の声：GovTech全体の組織は大きくなっているが、エンジニアの比重は少なく、絶対数が足りていない
+        - インタビューした都庁職員の声：内部手続きが多く、政策を考える十分な時間が確保できていない。また、整備された基盤に都政のトップの理解が追いついていない
+    - 意思決定プロセス
+        - 住民意思の汲み取りは4年に1回の選挙が中心
+        - 住民の思いを幅広く拾い意思決定に反映する仕組みはない
+    - 予算や人員の配分
+        - 現都政では行革により財源をねん出。子育て施策をはじめ様々な施策を実施
+        - 他方、都民の満足度、実感には上手く繋がっていない
+- デジタルに精通したリーダーだから取り組めること
+    - テクノロジーの実装の一層の推進
+        - テクノロジーの実装は大きな変革を生む
+        - テクノロジーのに精通したリーダーだからこそ一層の社会実装が可能に
+- デジタル人材の活用、例えば元都庁職員の出戻り推進  
+    - 意思決定プロセスの変革
+        - 政策の決定方法(＝意思決定プロセス)の見直しはトップだからこそ可能
+        - ブロードリスニングによる住民意思の汲み取りと政策決定への反映の仕組み化
+        - データに基づいた政策決定(EBPM)の徹底
+    - 「誰も取り残さない」を中心に
+        - 既存政策の見直し、テクノロジーも活用した更なる構造改革の徹底により財政や人員の余白をねん出
+        - 子育て・教育・福祉・防災など「誰も取り残さない」ための施策やテクノロジーによる社会改善に重点配分
+- 都の意思決定の高度化、例えば各種アドバイザリーボードの設置
+
+## 構造改革の推進による実行力のある組織づくり
+
+- 現状、都の構造改革は未徹底。必要なところに十分な人員を配置できていない。
+    - インタビューした都庁職員の声：デジタル化は進んでいるが、決裁・レクなど内部手続の負担が大きい
+    - インタビューした都庁職員の声：組織階層が深く(局の下に部がある構成)意思決定のスピードが遅い
+    - インタビューした都庁職員の声：政策立案に十分なリソースを割けていない。政策立案自体よりもバックデータ作りや裏付け(都民の声、報道など)探しの作業に忙殺。
+    - 結果、職場としての魅力がうすれ、東京都の採用試験の応募者数は2015年の2024人から、2022年委は697人にまで大幅に減少
+    - 政策立案や住民福祉の向上など必要な部門に十分な人員配置ができていない可能性
+- 更なる働き方改革、業務効率化、組織の見直しによる魅力ある職場づくりと実行体制の充実
+    - データ基盤の整備やブロードリスニングによる恒常的な住民意思の汲み取りにより突発的ななリサーチ業務を減らす
+    - 業務状況の可視化を行った上で、組織・権限範囲の見直しを行うことによる意思決定のスピード向上
+    - デジタル化の徹底による内部手続の効率化推進`},{sha:"e9f8d172608e350e2efb28052222b91a06e72928",filename:"docs/manifest/care.md",status:"modified",additions:26,deletions:8,changes:34,blob_url:"https://github.com/takahiroanno2024/election2024/blob/ff68a733f727b68aa6071f3520b68ecf80137e17/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/ff68a733f727b68aa6071f3520b68ecf80137e17/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=ff68a733f727b68aa6071f3520b68ecf80137e17",patch:`@@ -65,15 +65,13 @@
 
 ## 人口が多い東京ならではの､災害リスクがある 一人ひとりの力を合わせれば､大きな備えになる
 
-- 東京は防災の面から見ると以下のような特徴がある
-    - 人口密度が6400人/㎢
+- 東京は ､防災の面から見ると以下のような特徴がある
+    - 人口密度が最も高い: 6400人/㎢
         - 迅速な避難や､きめ細かい支援の提供の難易度が高い
-    - 障がいのある方の人口が73万人、高齢者人口が311万人
+    - 障がいのある方の人口: 73万人、高齢者人口: 311万人
         - 多様なニーズを踏まえた､適切なケアを届ける必要がある
-    - 外国人人口が63万人
+    - 外国人人口: 63万人
         - 災害時でもインクルーシブな東京になることは､移住の後押しに
-- 東京都は､1,400万人の人口､680万の住戸を抱える世界最大級の都市である一方､常に地震や水害のリスクに晒されている
-    - この人口の多さは､東日本大震災や北陸震災とは異なる形での防災対応が必要とする
 - 人口の多さは防災対策を困難にする一方､災害対策の主体的な担い手となれる住民の数が多いことも意味する
     - 例えば発災直後に､一人ひとりがスマホを使って情報を収集し､リアルタイムで共有できる仕組みを活用できれば､災害発生直後に行政の支援が行き届かない時にも助け合いを促進することができるし､その後の行政の動きをスムーズにすることができる
 - ただし､そのように個人が情報発信できる仕組みにおいては､フェイクニュース対策が必要不可欠
@@ -82,6 +80,24 @@
     - そのうえで､AI･デジタル技術を活用した｢分散型｣の災害対策も進めていくことで､東京ならではのレジリエンスを実現したい
 - デジタルを活用し､一人ひとりの力を災害時に発揮することで､迅速･きめ細かい支援を実現する
 
+## テクノロジー活用の前提として､ハード･地域･主体それぞれの対応状況･都の施策充足状況を検証する｡加速すべき点と優先順位を明らかにし､重点投資を行う
+
+- ハード軸
+    - 避難所･在宅避難のインフラ整備
+    - 通信･電力インフラ: 民間投資も呼び込み､太陽光発電･蓄電池･衛星通信の整備    
+    - まちづくり: 河川改修､建築物不燃化･耐震化､無電柱化推進等
+- 地域軸
+    - 中心業務地区: 日本全体の核として業務継続能力を向上＆帰宅困難者対策 等
+    - 郊外地区: 被害抑制＆罹災時生活の質の担保 等
+    - 島嶼部: 一定期間自立可能な地域づくり､ヘリ等を活用した迅速な救助体制の整備 等
+- 主体軸
+    - 住民: 事前の防災意識の向上､家庭の備蓄促進 等
+    - 事業者: BCPプランの充実､備蓄の促進 等
+    - 都行政(消防･警察を含む)
+    - 他の行政主体(基礎自治体､国､自衛隊)
+    - × 主体間の相互連携のあり方
+- ※上記の軸に基づき､緊急度･対策の時間軸を踏まえて優先順位付けを行う｡具体的には､備蓄状況の可視化､電力/通信インフラ､建築物不燃化等の優先順位が高い可能性がある
+
 ## テクノロジーを活用し､公助を補完する分散型・自助の災害対策を進める
 
 - 事前の備えとして、デジタル技術を活用した､避難訓練の実効性を強化
@@ -95,8 +111,10 @@
         - AIによる誤情報対策も実施
     - 避難所運営においても､住民によるリアルタイムの情報を都が活用し､必要な支援をスムーズに届けられるようにする
         - 特定のニーズを抱えた住民の所在 等
-- 避難・復旧時には、避難所運営･きめ細かい支援提供を技術でスムーズ化
-    - 避難所での住民登録（チェックイン）や､医薬品の配送にマイナンバーカードや処方情報を活用
+- 避難・復旧時には、避難所運営･在宅避難者把握･きめ細かい支援提供を技術でスムーズ化
+    - 避難所での住民登録（チェックイン）､在宅避難者把握や､医薬品の配送にマイナンバーカードや処方情報を活用
+    - 官民による､備蓄状況や非常用電源の可視化(DB化)
+    - 避難行動要支援者（＝緊急時に支援を必要とする避難者）について､プライバシーに配慮しつつ行政が事前に把握(非公開のDB化)
 
 ## デジタル技術を活用した､次世代の避難所運営(イメージ)
 `},{sha:"b5ea08ae98e44108dfdef1632c83d33bfb58b2f8",filename:"docs/manifest/others.md",status:"added",additions:34,deletions:0,changes:34,blob_url:"https://github.com/takahiroanno2024/election2024/blob/ff68a733f727b68aa6071f3520b68ecf80137e17/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/ff68a733f727b68aa6071f3520b68ecf80137e17/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=ff68a733f727b68aa6071f3520b68ecf80137e17",patch:`@@ -0,0 +1,34 @@
+# その他政策や頂いたご質問に対するご回答
+
+## エネルギー政策
+
+- 今でも東京の電力消費量に対する電力の供給量は他地域と比べて乏しい
+    - 東京電力管内以外では、再エネ（太陽光）の出力抑制（晴れの日の昼に供給が需要を上回るため抑制する動き）が既に起こり始めているが、東京電力管内ではいまだ起きていない
+    - ベースロードとして想定していた福島の原発は未だ再稼働しておらず、それでいて電力需要は大きい地域であるため
+- そんな中、東京都では2050年までにネット・ゼロエミッション達成を目標として掲げ、具体的な計画案も作っている
+    - この時間軸自体は、世界の他都市の事例を見ても、東京が世界でも最大規模の人口を持つ都市圏ということを考慮すれば、着実な成功のための妥当な目標と考える
+- しかし、現在の計画だけでは東京都の巨大な消費電力を賄うには不十分である可能性
+    - 東京都で増加が期待できる再エネは太陽光発電が主だが、それも発電量には限界がある
+    - 太陽光・風力などの再エネは発電量が天候などにより不安定であり、大規模停電を防ぐための電気の貯蔵技術の発展が急務
+- さらに、今回安野たかひろが提案しているテクノロジーを活用した各種政策は、電力を多く消費するものも多く、実現に向けてはより一層のエネルギー政策強化が必要
+    - 特に自動運転を大々的に活用していく場合には、現状の消費電力とはけた違いの電力が必要になる可能性もある
+        -  自動車に関する高度情報処理について、その機能をクラウド・データセンター側に依存（データ量にして4TB/日）させると、ネットワーク・クラウド側の車両1台あたり電力負荷は2.0kWとなる。CO2排出量に換算すると、約2,550万t-CO2（国内2050年）。
+            - (経済産業省「「電動車等省エネ化のための車載コンピューティング・シミュレーション技術の開発」「スマートモビリティ社会の構築」プロジェクトに関する研究開発・社会実装の方向性」2022年2月）
+- 現在の都の政策に加え、以下を政策として実行する
+    - 集合住宅（賃貸含む）への太陽光パネル設置補助
+    - 島しょ部における浮体式洋上風力推進のための企業の技術開発支援と実装のための特区化
+        - 日本は比較的水深が深い海に囲まれており、従来の着床式洋上風力では設置可能な範囲が限定的。浮体式洋上風力を推進することで、導入ポテンシャルを大きくあげることができる
+        - 着床式と比べて、海の生態系・環境に及ぼす影響を抑えられる可能性がある
+        - 導入費用は高いが、発電規模は大きいため電力価格は安く抑えられる
+        - 導入に際して様々な技術や人材を必要とするため、周辺での事業・雇用創出に繋がる。今後アジアでニーズが高まることも予想され、先行すれば技術を輸出することも可能
+            - （環境省「離島への浮体式洋上風力発電導入の手引き」2024年6月）
+    - テクノロジーにおける電力消費・販売の最適化
+        - ディマンドリスポンス（消費者が賢く電力使用量を制御することで、電力需要パターンを変化させ、電力の需要と供給のバランスをとる取り組み）の仕組みを拡充。より広い都民にとってメリットを生み、環境インパクトを向上する方法を模索
+            - 電力消費ピーク時に節電に協力することでポイント還元がされるなど、協力することで都民にもプラスが生まれる仕組み
+            - 参考）<https://www.enecho.meti.go.jp/category/electricity_and_gas/electricity_measures/dr/dr.html>
+            - 参考）<https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2024/03/28/66.html>
+        - 電力市場をAIテクノロジーを用いて最適化する技術企業への支援
+            - 参考）<https://exawizards.com/archives/24799/>
+            - 参考）<https://www.nikkei.com/article/DGXZQOUC261300W4A420C2000000/>
+    - その他クリーンテック技術の革新に向けた技術企業への支援
+    - 安全を確保したうえでの原子力発電再稼働に向けた検討の推進・都としての働きかけ`}]},{oid:"4666757c5fde2202369e48d671183c4e8af90fb7",message:"Update budget.md",committedDate:"2024-07-03T13:02:58Z",author:{name:"tokshibata",email:"48014497+tokshibata@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/4666757c5fde2202369e48d671183c4e8af90fb7",associatedPullRequests:{edges:[{node:{number:267,title:"Create budget",url:"https://github.com/takahiroanno2024/election2024/pull/267",comments:{nodes:[{body:"@tokshibata デジタル人材の確保については、単価見直し＆法定福利・福利厚生費反映で2.5億円。＋継続欄は書き方に自由度があるのであれば、毎年継続的に募集しエンジニア100人程度を目指すと想定されるので、最大10億円程度という書き方にできますでしょうか・・・？"}]},timelineItems:{nodes:[{subject:{number:180,title:"取組内容に対する予算とその実行計画及び体制を提示してほしい",url:"https://github.com/takahiroanno2024/election2024/issues/180"}}]}}}]},files:[{sha:"be405a0bda213a14309b719642d5e4b242bbc9e7",filename:"docs/manifest/budget.md",status:"modified",additions:16,deletions:15,changes:31,blob_url:"https://github.com/takahiroanno2024/election2024/blob/4666757c5fde2202369e48d671183c4e8af90fb7/docs%2Fmanifest%2Fbudget.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/4666757c5fde2202369e48d671183c4e8af90fb7/docs%2Fmanifest%2Fbudget.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fbudget.md?ref=4666757c5fde2202369e48d671183c4e8af90fb7",patch:`@@ -1,17 +1,18 @@
 # 5本の柱 実現のための想定予算と財源確保の手立て
-## 実現のための想定予算
-- サマリー
-  - 安野たかひろが今回政策の5本の柱で掲げている各種施策の実現のためには、導入時約ｘｘｘ億円、維持費（ランニングコスト）として約ｘｘｘ億円がかかる見込み
-  - 東京都の税収はここ14年で見るとおおよそ1,600億円/年で伸長。経常収支比率を考慮しても使える予算は毎年373億円程度増えている
-  - 任期4年の前半2年にかけて政策を実行することで、税収増分で増えた予算内で全ての政策の実現が可能
-  - 加えて、デジタルの活用による無駄削減、既存政策の見直し（都庁プロジェクションマッピングの取りやめなど）により、更なる財源の捻出・余裕を持った財政運営を目指す
+## サマリー
+- 安野たかひろが今回政策の5本の柱で掲げている各種新規施策は、現行の都の年間予算約8.5兆円の1%未満・500億円程度で実現可能な見込み
+- 東京都の税収は年間おおよそ1,600億円程度伸長。経常収支比率を考慮しても使える予算は毎年373億円程度増えている
+- 都知事任期の前半2年に分けて新規政策を実行すれば、税収増分で増えた予算内で全ての政策の実現が可能
+- 加えて、デジタルの活用による無駄削減、既存政策の見直し（都庁プロジェクションマッピングの取りやめなど）により、更なる財源の捻出・余裕を持った財政運営を目指す
+- 大枠の予算配分は変えず、既存政策の良い部分はしっかりと踏襲していく
 
-- 政策の5本柱実現にかかる予算規模概算
-  - 政策の5本柱で上げた施策の実現は、導入時に約ｘｘｘ億円、その後の維持・運営費に約ｘｘ億円／年がかかる見込み
+## 政策の5本柱実現にかかる予算規模概算
+- 政策の5本柱で上げた施策の実現は、導入時に約513億円、その後の維持・運営費に最大170億円／年程度がかかる見込み
   - 最も予算を要するのは2本目の柱である「とことん安心の医療・防災」で、導入に約275億円、維持・運営に約52.5億円/年を想定
-- 経済：新産業で所得倍増　導入ｘｘ億円、維持・運営ｘｘ億円/年
+- 都の一般会計は令和6年度で約8.5兆円。その大きな予算配分を変えることなく、全体の1%未満で現在打ち出している新規政策は実現可能
+- 経済：新産業で所得倍増　導入2.2億円、維持・運営6億円/年
   - 都立インターナショナルスクールの誘致（企画費・授業料補助等）：導入4億円、維持・運営3億円/年
-  - 自動運転特区の実現：導入xx億円、運営xx億円/年
+  - 自動運転特区の実現：導入18億円、運営3億円/年
   - ほか施策については、追加予算ではなく現行の予算内で取り組み内容を変更
 - 医療・防災：とことん安心の医療・防災　導入272.5億円、維持・運営52.5億円/年
   - 夜間休日の医療体制構築：導入91.4億円、維持・運営35億円/年
@@ -30,9 +31,9 @@
   - 海外大学誘致：導入12億円
   - 校務のDX化：導入86億円
   - その他取り組みは、現行予算の枠内で実現
-- 行政：行政をもっと簡単・透明に　導入12.8億円、維持・運営12.3億円/年
+- 行政：行政をもっと簡単・透明に　導入14億円、維持・運営最大21億円/年
   - 使い勝手改善：導入0.5億円
-  - デジタル人材確保：1.3億円/年
+  - デジタル人材確保：2.5～10億円/年
   - リモート窓口の整備：1億円/年
   - AI活用の総合案内：10億円/年
   - その他取り組みは、現行予算の枠内で実現
@@ -43,16 +44,16 @@
   - 東京都スマホアプリの開発：行政パートの予算に内包
   - AIアシスタント・LINE等の活用：行政パートの予算に内包
 
+## 予算ねん出のための財源の考え方
 - 東京都の税収はここ14年で見るとおおよそ1,600億円/年で伸長。経常収支比率を考慮しても使える予算は毎年373億円程度増えている
   - 東京都財務局の発表によると、2010年から2024年の間で税収は2.24兆円増加。1年で1600億円程度税収が伸びている状況
   - 経常収支比率は令和4年度で76.7%であり、それを差し引いても毎年約373億円程度は財源が税収増により増えている
-
 - 任期4年の前半2年にかけて政策を実行することで、税収増分で増えた予算内で全ての政策の実現が可能
-  - 年間373億円の税収増分の予算に対し、安野の政策全てを実装するには導入コストとしてｘｘｘ億円が必要。
+  - 年間373億円の税収増分の予算に対し、安野の政策全てを実装するには導入コストとして前述のとおり約513億円が必要。
   - 2年間で実施タイミングをずらして導入を行うことで、無理のない計画で新政策の実装が可能となる
-
 - 加えて、デジタルの活用による無駄削減、既存政策の見直し（都庁プロジェクションマッピングの取りやめなど）により、更なる財源の捻出・余裕を持った財政運営を目指す
   - デジタルの活用により、様々な既存の都政の無駄が削減されることを想定している。内情をつぶさに確認し、徹底的な効率化による更なる予算ねん出を目指す
   - また、良い政策は踏襲するが、そうでないものは速やかに取りやめ、コストを抑える。
     - 例えば都庁のプロジェクションマッピングは2024年度で7億円ほどの予算が計上されているが、取りやめが望ましいと考える
+- 現在の都政の取り組みのうち、子育て支援・スタートアップ支援・東京都強靭化など良いものは継続するべく、大幅な予算枠の割り当て変更は行わない
   `}]},{oid:"bce15ab53e10f7379e8c4acc57387c0fee43c2b9",message:`自動運転先進都市に、島しょ地域を追加。取り組み内容の具体化。

・安野本人が大島を訪れた際に聞かれた声として、「島しょ地域での交通課題」があったので、その課題を解決する内容を政策に追加\r
\r
・https://github.com/takahiroanno2024/election2024/issues/177　 でも議論されている通り、自動運転の実証実験の際は人口過密エリアではないところから開始することが理想的であり、島しょ地域はその観点も相性が良い\r
\r
・実運用まで目指した計画を政策に追加することで、課題解決への道筋を明確にする`,committedDate:"2024-07-03T12:50:47Z",author:{name:"sawa",email:"sawako.hamamichi@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/bce15ab53e10f7379e8c4acc57387c0fee43c2b9",associatedPullRequests:{edges:[{node:{number:289,title:"自動運転先進都市に、島しょ地域を追加。取り組み内容の具体化。",url:"https://github.com/takahiroanno2024/election2024/pull/289",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"411994bdfeaab0b67d34c50276b20ac9bfe0b17f",filename:"docs/manifest/economy.md",status:"modified",additions:14,deletions:8,changes:22,blob_url:"https://github.com/takahiroanno2024/election2024/blob/bce15ab53e10f7379e8c4acc57387c0fee43c2b9/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/bce15ab53e10f7379e8c4acc57387c0fee43c2b9/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=bce15ab53e10f7379e8c4acc57387c0fee43c2b9",patch:`@@ -91,13 +91,18 @@
     - 東京を国際的な技術革新の中心地とする
         - スタートアップや成長産業の関係者が、世界中から東京に集まるイベントの開催
     - 上記の結果として、都内の企業の全体的なレベルアップ＆海外投資家の誘致（ミドル/レイターステージでの資金注入）を実現
-- 東京西部エリアを「実装＆課題解決の場」とします
-    - スマートシティにまつわる企業を集積・サービス実装することで、産業発展と課題解決を実現
-        - 多摩地区を自動運転先進都市へ
-            - 多摩地区では既に自動運転の実証実験等が行われている
-            - 自動運転の実装により、バス・タクシーのドライバー不足問題を解決する
+- 東京西部エリア・島しょ地域を「実装＆課題解決の場」とします
+    - 多摩地区にスマートシティにまつわる企業を集積・サービス実装し、自動運転先進都市とすることで、産業発展と課題解決を実現
+        - 多摩地区では既に自動運転の実証実験等が行われている
+        - 自動運転の実装により、バス・タクシーのドライバー不足問題を解決する
+    - 島しょ地域で積極的に自動運転レベル4の実証実験＆実運用化を行い、自動運転先進都市にすることで、課題解決を実現
+        - 島しょ地域では、住民の高齢化も進む中で、交通の足がないという課題が実際に聞かれる
+        - 島しょ地域では、主要道路への実装ハードルが比較的低い
+            - 住民の生活における主要道路が複雑すぎない
+            - 他地域と比較すると人の交通量が多すぎず、事故リスクが低い
 
-## 東京西部では「新しいモビリティのあり方」が喫緊の課題
+
+## 東京西部・島しょ地域では「新しいモビリティのあり方」が喫緊の課題
 
 - 人口減少で難しくなる公共交通の維持
     - 東京都の人口は2025年〜2030年をピークに減少
@@ -123,9 +128,10 @@
 
 ## 自動運転で、誰もが自由に外出できる社会を実現！
 
-- 東京西部を自動運転先進地域として、自動運転サービスの実用化を実現
+- 東京西部・島しょ地域をレベル4の実証実験を行う自動運転先進地域として、自動運転サービスの実用化を実現
     - 23区で生まれる技術者・研究者の交流やスタートアップの集積を多摩・島しょ地域の課題解決に活用
-    - バス・タクシー運転手の労働環境改善／交通空白地帯の解消
+    - まずは10地域を選定してレベル4の実証実験を行い、翌年度以降5地域での実運用化を目指す
+    - 自動運転の実運用により、バス・タクシー運転手の労働環境改善／交通空白地帯の解消
     - 商業や観光、医療などの周辺領域と自動運転を組み合わせた収益化や社会的インパクトを支援
 
 ## 強い技術企業を育成・誘致すべく、②世界中の優秀な技術者・研究者が住みたいと思う東京作り`}]},{oid:"536cf61fb0be50730981b5451af0310fd73e372b",message:`Update education.md

不妊治療における各種書類提出をオンライン化し、物理的な負担を軽減`,committedDate:"2024-07-03T12:18:16Z",author:{name:"kyo-tamaki",email:"kyo.tamaki@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/536cf61fb0be50730981b5451af0310fd73e372b",associatedPullRequests:{edges:[{node:{number:288,title:"不妊治療における書類提出作業オンライン化",url:"https://github.com/takahiroanno2024/election2024/pull/288",comments:{nodes:[{body:"@kyo-tamaki こちら議論過程が一部Slackにしか残っておらず、publicなところに残っていないので、一部サマリする形でこちらのPRの上部や元Issueにテキストを残していただけますでしょうか？"}]},timelineItems:{nodes:[]}}}]},files:[{sha:"ddb08957e2a970d9e4718ef71c1a7ade55874b98",filename:"docs/manifest/education.md",status:"modified",additions:3,deletions:1,changes:4,blob_url:"https://github.com/takahiroanno2024/election2024/blob/536cf61fb0be50730981b5451af0310fd73e372b/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/536cf61fb0be50730981b5451af0310fd73e372b/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=536cf61fb0be50730981b5451af0310fd73e372b",patch:`@@ -54,7 +54,9 @@
     - 自費で実施される「先進医療」に係る費用の助成額の上限を取り除く
     - 無痛分娩に対する助成などさらなる負担低減を広げていく
     - 不妊治療の夜間診療の拡充を図るなど、より多くの人が受診機会を得られるよう提言する
-    - 不妊治療に向けた休暇をとりやすい制度や柔軟な働き方の実現に向けて提言する
+    - 不妊治療における物理的負担を軽減
+        - 不妊治療に向けた休暇をとりやすい制度や柔軟な働き方の実現に向けて提言する
+        - 通院回数を１回でも減らすため、不妊治療に必要な各種書類（戸籍謄本・同意書等）のオンライン提出や病院ごとの統一フォーマット推進
 - 子育ての経済的負担に向けての支援
     - 子育て世帯に向けて、家賃の一部を割引する制度を拡充します
     - 教育費（塾代・受験料）を支援する制度を整備します`}]},{oid:"e03c7ac7475a4683d9a46dc0b9253be99ded6da4",message:`フリーランス・起業家の方に向けた、育休相当の支援

フリーランスの方が出産をするのに不平等感を感じたことについて、働き方の多様性を支援するためにも不安を取り除くための支援を実施すべきという観点からの提案\r
#32\r
#263`,committedDate:"2024-07-03T11:36:08Z",author:{name:"micthell712",email:"llehctim.k@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/e03c7ac7475a4683d9a46dc0b9253be99ded6da4",associatedPullRequests:{edges:[{node:{number:287,title:"フリーランス・起業家の方に向けた、育休相当の支援",url:"https://github.com/takahiroanno2024/election2024/pull/287",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"a288282f9e0a192b5753f035f5da6e1d4749b331",filename:"docs/manifest/education.md",status:"modified",additions:2,deletions:0,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/e03c7ac7475a4683d9a46dc0b9253be99ded6da4/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/e03c7ac7475a4683d9a46dc0b9253be99ded6da4/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=e03c7ac7475a4683d9a46dc0b9253be99ded6da4",patch:`@@ -55,6 +55,7 @@
     - 無痛分娩に対する助成などさらなる負担低減を広げていく
     - 不妊治療の夜間診療の拡充を図るなど、より多くの人が受診機会を得られるよう提言する
     - 不妊治療に向けた休暇をとりやすい制度や柔軟な働き方の実現に向けて提言する
+    - フリーランス・起業家など、育休が取れない方への支援も実施します。
 - 子育ての経済的負担に向けての支援
     - 子育て世帯に向けて、家賃の一部を割引する制度を拡充します
     - 教育費（塾代・受験料）を支援する制度を整備します
@@ -64,6 +65,7 @@
 - 経済的負担
     - 不妊治療のうち、自費で実施される「先進医療」に係る費用の助成額の上限を取り除く
     - 無痛分娩に対する助成などさらなる負担を広げていく
+    - フリーランスや起業家の方が受け取れる、所得保証のための見舞金を手配します（出産手当金・出生時育児休業給付金等に相当）
 - 時間的負担
     - 不妊治療の夜間診療の拡充を図るなど、より多くの人に受けられるように提言
 - 心理的負担`}]},{oid:"5bf2e9d38152c1db62e4297834dc6af4c2a95fc0",message:`障害福祉領域での専門職・連携強化・テクノロジー活用の強化

障害福祉分野のうち、特に児童福祉を対象とした政策案です。`,committedDate:"2024-07-03T11:31:39Z",author:{name:"micthell712",email:"llehctim.k@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/5bf2e9d38152c1db62e4297834dc6af4c2a95fc0",associatedPullRequests:{edges:[{node:{number:286,title:"障害福祉領域での専門職・連携強化・テクノロジー活用の強化",url:"https://github.com/takahiroanno2024/election2024/pull/286",comments:{nodes:[{body:`内容は良いと思うのでmergeします。\r
下記のPRで行われているような財源の検討を継続して行っていただけますでしょうか？\r
https://github.com/takahiroanno2024/election2024/pull/267\r
\r
@micthell712 `}]},timelineItems:{nodes:[]}}}]},files:[{sha:"11ad3db3ce67af25ae8cefd22dae90b018006be0",filename:"docs/manifest/others.md",status:"modified",additions:23,deletions:0,changes:23,blob_url:"https://github.com/takahiroanno2024/election2024/blob/5bf2e9d38152c1db62e4297834dc6af4c2a95fc0/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/5bf2e9d38152c1db62e4297834dc6af4c2a95fc0/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=5bf2e9d38152c1db62e4297834dc6af4c2a95fc0",patch:`@@ -32,3 +32,26 @@
             - 参考）<https://www.nikkei.com/article/DGXZQOUC261300W4A420C2000000/>
     - その他クリーンテック技術の革新に向けた技術企業への支援
     - 安全を確保したうえでの原子力発電再稼働に向けた検討の推進・都としての働きかけ
+
+## 障害福祉
+- 特別な配慮が必要な児童の数は増えてきている
+    - 通級による指導を受けている児童も増加傾向にあり、現在は134,185人（令和1年時点）
+    - 通常の学級に在籍する小中学生の8.8%に学習や行動に困難のある発達障害の可能性がある
+- 社会側の障害をなくしていくために、専門職の方々の生産性向上・ステークホルダーの連携強化・テクノロジーの活用を進める必要がある
+    - 一人ひとりの特性やお困りに合わせて、どのような支援が必要かを見立てること・心理面も含めた支援に対しては、専門職の力が不可欠
+        - 福祉従事者の方の待遇改善
+        - 手続き面でのさらなるDXの検討
+    - ステークホルダーの連携強化
+        - 学校現場での支援者を増やすため、「特別支援教育支援員」の採用に対して補助
+        - 学校・福祉事業所・医療機関等、関係機関間での連携強化を支援
+    - テクノロジーの活用
+        - 効果的なツールのデータベース化
+        - 活用方法や、キャリアづくりのためのロールモデルとのマッチング
+- テクノロジーは、マッチング・ロールモデルとセットで届けていく
+    - 効果的なテクノロジー活用例
+        - 場面緘黙の方に向けて会話支援AIツール Be Free
+        - 発達障害の方に向けたサポートツール goblin.tools
+    - それぞれの特性・困りごとに検索ができるデータベースを都のイニシアチブで整理
+        - 助成事業として実施されたことはあるが継続性が担保されないので、都として支援
+    - ツールの活用しながら、どのようにキャリアを積んできたかについて見通し不安をなくすロールモデルとの出会い
+        - オンラインでのメンタリングを支援`}]},{oid:"583e91681e0ef74893a63d188746d3dd51fe4bd0",message:`インターナショナルスクールを「誘致」に統一

・「設置」と「誘致」で表記揺れがあった\r
・政策の意図を踏まえると、インターナショナルスクールは誘致の方が適切であったため、「誘致」に統一\r
・ブロードリスニングでも、「都による設置よりも、誘致の方が質の高いインターナショナルスクールに繋がる」というコメントあり`,committedDate:"2024-07-03T11:30:05Z",author:{name:"sawa",email:"sawako.hamamichi@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/583e91681e0ef74893a63d188746d3dd51fe4bd0",associatedPullRequests:{edges:[{node:{number:285,title:"インターナショナルスクールを「誘致」に統一",url:"https://github.com/takahiroanno2024/election2024/pull/285",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"4e92fa84c20761c46c056247f151ab94372c5f2f",filename:"docs/manifest/economy.md",status:"modified",additions:2,deletions:2,changes:4,blob_url:"https://github.com/takahiroanno2024/election2024/blob/583e91681e0ef74893a63d188746d3dd51fe4bd0/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/583e91681e0ef74893a63d188746d3dd51fe4bd0/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=583e91681e0ef74893a63d188746d3dd51fe4bd0",patch:`@@ -135,7 +135,7 @@
 - 外国語で診療を受けられる医療体制の欠如
     - 「医療」政策パートで後述
 - 子供の教育環境の手薄さ
-    - 中高一貫の都立インターナショナルスクールを設立
+    - 中高一貫の都立インターナショナルスクールを誘致
 
 ## 生成AIによる言語障壁/暮らしのインフラ整備の課題解決
 
@@ -147,7 +147,7 @@
         - 東京での暮らしを始める上で必要な手続きが一目でわかり、スムーズに
         - 行政手続きはもちろん、住宅や生活インフラ申込など民間事業者にまつわる手続きのワンストップ化の方策も検討
 
-## 中高一貫の都立インターナショナルスクール設置・増設
+## 中高一貫の都立インターナショナルスクール誘致・増設
 
 - 東京に住みたいと思う技術者・研究者は多いが、トップレベルのインターナショナルスクールが少なく「子供を育てられない」と諦めることが多い
 - 優れたインターナショナルスクールの東京誘致により世界の技術者・研究者が「家族で住める」東京へ`}]},{oid:"2f59457bf16b5e2562d6110bdc4e8831ea4f17b8",message:"Rename to budget.md",committedDate:"2024-07-03T04:05:38Z",author:{name:"Minami Ueda",email:"minami.ueda@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/2f59457bf16b5e2562d6110bdc4e8831ea4f17b8",associatedPullRequests:{edges:[{node:{number:267,title:"Create budget",url:"https://github.com/takahiroanno2024/election2024/pull/267",comments:{nodes:[{body:"@tokshibata デジタル人材の確保については、単価見直し＆法定福利・福利厚生費反映で2.5億円。＋継続欄は書き方に自由度があるのであれば、毎年継続的に募集しエンジニア100人程度を目指すと想定されるので、最大10億円程度という書き方にできますでしょうか・・・？"}]},timelineItems:{nodes:[{subject:{number:180,title:"取組内容に対する予算とその実行計画及び体制を提示してほしい",url:"https://github.com/takahiroanno2024/election2024/issues/180"}}]}}}]},files:[{sha:"6861895c5b0aef70dfa568709a2d639ac3e54013",filename:"docs/manifest/budget.md",status:"renamed",additions:0,deletions:0,changes:0,blob_url:"https://github.com/takahiroanno2024/election2024/blob/2f59457bf16b5e2562d6110bdc4e8831ea4f17b8/docs%2Fmanifest%2Fbudget.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/2f59457bf16b5e2562d6110bdc4e8831ea4f17b8/docs%2Fmanifest%2Fbudget.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fbudget.md?ref=2f59457bf16b5e2562d6110bdc4e8831ea4f17b8",previous_filename:"docs/manifest/budget"}]},{oid:"04b4b7a0244f61721f6fe712393e2fb04be64472",message:`Merge pull request #256 from takahiroanno2024/tokshibata-patch-2

Create Others & Energy`,committedDate:"2024-07-03T02:58:40Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/04b4b7a0244f61721f6fe712393e2fb04be64472",associatedPullRequests:{edges:[{node:{number:256,title:"Create Others & Energy",url:"https://github.com/takahiroanno2024/election2024/pull/256",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"b5ea08ae98e44108dfdef1632c83d33bfb58b2f8",filename:"docs/manifest/others.md",status:"added",additions:34,deletions:0,changes:34,blob_url:"https://github.com/takahiroanno2024/election2024/blob/04b4b7a0244f61721f6fe712393e2fb04be64472/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/04b4b7a0244f61721f6fe712393e2fb04be64472/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=04b4b7a0244f61721f6fe712393e2fb04be64472",patch:`@@ -0,0 +1,34 @@
+# その他政策や頂いたご質問に対するご回答
+
+## エネルギー政策
+
+- 今でも東京の電力消費量に対する電力の供給量は他地域と比べて乏しい
+    - 東京電力管内以外では、再エネ（太陽光）の出力抑制（晴れの日の昼に供給が需要を上回るため抑制する動き）が既に起こり始めているが、東京電力管内ではいまだ起きていない
+    - ベースロードとして想定していた福島の原発は未だ再稼働しておらず、それでいて電力需要は大きい地域であるため
+- そんな中、東京都では2050年までにネット・ゼロエミッション達成を目標として掲げ、具体的な計画案も作っている
+    - この時間軸自体は、世界の他都市の事例を見ても、東京が世界でも最大規模の人口を持つ都市圏ということを考慮すれば、着実な成功のための妥当な目標と考える
+- しかし、現在の計画だけでは東京都の巨大な消費電力を賄うには不十分である可能性
+    - 東京都で増加が期待できる再エネは太陽光発電が主だが、それも発電量には限界がある
+    - 太陽光・風力などの再エネは発電量が天候などにより不安定であり、大規模停電を防ぐための電気の貯蔵技術の発展が急務
+- さらに、今回安野たかひろが提案しているテクノロジーを活用した各種政策は、電力を多く消費するものも多く、実現に向けてはより一層のエネルギー政策強化が必要
+    - 特に自動運転を大々的に活用していく場合には、現状の消費電力とはけた違いの電力が必要になる可能性もある
+        -  自動車に関する高度情報処理について、その機能をクラウド・データセンター側に依存（データ量にして4TB/日）させると、ネットワーク・クラウド側の車両1台あたり電力負荷は2.0kWとなる。CO2排出量に換算すると、約2,550万t-CO2（国内2050年）。
+            - (経済産業省「「電動車等省エネ化のための車載コンピューティング・シミュレーション技術の開発」「スマートモビリティ社会の構築」プロジェクトに関する研究開発・社会実装の方向性」2022年2月）
+- 現在の都の政策に加え、以下を政策として実行する
+    - 集合住宅（賃貸含む）への太陽光パネル設置補助
+    - 島しょ部における浮体式洋上風力推進のための企業の技術開発支援と実装のための特区化
+        - 日本は比較的水深が深い海に囲まれており、従来の着床式洋上風力では設置可能な範囲が限定的。浮体式洋上風力を推進することで、導入ポテンシャルを大きくあげることができる
+        - 着床式と比べて、海の生態系・環境に及ぼす影響を抑えられる可能性がある
+        - 導入費用は高いが、発電規模は大きいため電力価格は安く抑えられる
+        - 導入に際して様々な技術や人材を必要とするため、周辺での事業・雇用創出に繋がる。今後アジアでニーズが高まることも予想され、先行すれば技術を輸出することも可能
+            - （環境省「離島への浮体式洋上風力発電導入の手引き」2024年6月）
+    - テクノロジーにおける電力消費・販売の最適化
+        - ディマンドリスポンス（消費者が賢く電力使用量を制御することで、電力需要パターンを変化させ、電力の需要と供給のバランスをとる取り組み）の仕組みを拡充。より広い都民にとってメリットを生み、環境インパクトを向上する方法を模索
+            - 電力消費ピーク時に節電に協力することでポイント還元がされるなど、協力することで都民にもプラスが生まれる仕組み
+            - 参考）<https://www.enecho.meti.go.jp/category/electricity_and_gas/electricity_measures/dr/dr.html>
+            - 参考）<https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2024/03/28/66.html>
+        - 電力市場をAIテクノロジーを用いて最適化する技術企業への支援
+            - 参考）<https://exawizards.com/archives/24799/>
+            - 参考）<https://www.nikkei.com/article/DGXZQOUC261300W4A420C2000000/>
+    - その他クリーンテック技術の革新に向けた技術企業への支援
+    - 安全を確保したうえでの原子力発電再稼働に向けた検討の推進・都としての働きかけ`}]},{oid:"583860f77fb45f5927aae8d8f426652b4cc093c7",message:"Update docs/manifest/others.md",committedDate:"2024-07-03T02:58:01Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/583860f77fb45f5927aae8d8f426652b4cc093c7",associatedPullRequests:{edges:[{node:{number:256,title:"Create Others & Energy",url:"https://github.com/takahiroanno2024/election2024/pull/256",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"b5ea08ae98e44108dfdef1632c83d33bfb58b2f8",filename:"docs/manifest/others.md",status:"modified",additions:0,deletions:1,changes:1,blob_url:"https://github.com/takahiroanno2024/election2024/blob/583860f77fb45f5927aae8d8f426652b4cc093c7/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/583860f77fb45f5927aae8d8f426652b4cc093c7/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=583860f77fb45f5927aae8d8f426652b4cc093c7",patch:`@@ -22,7 +22,6 @@
         - 導入費用は高いが、発電規模は大きいため電力価格は安く抑えられる
         - 導入に際して様々な技術や人材を必要とするため、周辺での事業・雇用創出に繋がる。今後アジアでニーズが高まることも予想され、先行すれば技術を輸出することも可能
             - （環境省「離島への浮体式洋上風力発電導入の手引き」2024年6月）
-    - 住宅の断熱義務化（ZEH、ZEB推進）
     - テクノロジーにおける電力消費・販売の最適化
         - ディマンドリスポンス（消費者が賢く電力使用量を制御することで、電力需要パターンを変化させ、電力の需要と供給のバランスをとる取り組み）の仕組みを拡充。より広い都民にとってメリットを生み、環境インパクトを向上する方法を模索
             - 電力消費ピーク時に節電に協力することでポイント還元がされるなど、協力することで都民にもプラスが生まれる仕組み`}]},{oid:"8c9817bcbf3ffaab30f990f02a89caa6a9f59e26",message:`Merge pull request #270 from takahiroanno2024/yuuuuuuten-patch-2

組織強化の明確化`,committedDate:"2024-07-03T02:45:43Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/8c9817bcbf3ffaab30f990f02a89caa6a9f59e26",associatedPullRequests:{edges:[{node:{number:270,title:"組織強化の明確化",url:"https://github.com/takahiroanno2024/election2024/pull/270",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"2bf5e480237e7be4d017eb1c6e3d30b16218f226",filename:"docs/manifest/administration.md",status:"modified",additions:41,deletions:17,changes:58,blob_url:"https://github.com/takahiroanno2024/election2024/blob/8c9817bcbf3ffaab30f990f02a89caa6a9f59e26/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/8c9817bcbf3ffaab30f990f02a89caa6a9f59e26/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=8c9817bcbf3ffaab30f990f02a89caa6a9f59e26",patch:`@@ -18,8 +18,9 @@
         - 都が持つ情報の公開を徹底する
     - 自治体連携の推進による便利さの底上げ
         - 協定等の政治的な枠組みだけでなくシステムとして連携を強め生活の利便性向上につなげる
-    - 政策の質、実行力を担保するデジタルリーダー
+    - 政策の質、実行力を担保する組織作り
         - 強いデジタルリーダーシップを持つ知事のもと、整備された基盤を適切に利活用していく
+        - 都庁の働き方改革、業務効率化を推進することで実行力のある組織を作る
 
 ## 現体制の下、東京都の構造改革・DXは一定進展
 
@@ -155,19 +156,42 @@
         - GovTech東京による区市町村支援の一層推進
         - 子育て・介護をはじめとする住民に身近な行政サービスでの区市町村との連携強化
 
-## 更なるDX推進のため、技術への理解があるリーダーに託す
-
-- 過去は日本のデジタル競争力が低下していた
-    - デジタル競争力順位低迷
-    - IT人材のベンダー頼り、内部IT人材の不足
-    - 行政DXの遅れ
-- 現在は都として様々な取り組みを実施し、基盤整備を試みている
-    - [東京都デジタル人材育成基本方針](https://www.digitalservice.metro.tokyo.lg.jp/business/digital-hr/digital-hr-policy-v2)策定
-    - 都のサービスユーザーテストガイドライン制定
-- しかしいぜんとして現状の課題は残る。実行力・企画力の強化は道半ば
-    - インタビューした都庁職員の声：GovTech全体の組織は大きくなっているが、エンジニアの比重は少なく、絶対数が足りていない
-    - インタビューした都庁職員の声：内部手続きが多く、政策を考える十分な時間が確保できていない。また、整備された基盤に都政のトップの理解が追いついていない
-    - その結果、職場としての魅力がうすれ、東京都の採用試験の応募者数は2015年の2024人から、2022年委は697人にまで大幅に減少
-- 描く未来：強いデジタルリーダーシップを持つ知事のもと、整備された基盤を適切に利活用していく
-    - デジタル人材の活用、例えば元都庁職員の出戻り推進
-    - 都の意思決定の高度化、例えば各種アドバイザリーボードの設置
+## 技術に精通したリーダーによる行政運営の高度化
+
+- 東京都の前進のためには更なる行政運営の高度化が必要
+    - 行政DX
+        - 都として様々な取組が実施されているものの課題は残存
+        - インタビューした都庁職員の声：GovTech全体の組織は大きくなっているが、エンジニアの比重は少なく、絶対数が足りていない
+        - インタビューした都庁職員の声：内部手続きが多く、政策を考える十分な時間が確保できていない。また、整備された基盤に都政のトップの理解が追いついていない
+    - 意思決定プロセス
+        - 住民意思の汲み取りは4年に1回の選挙が中心
+        - 住民の思いを幅広く拾い意思決定に反映する仕組みはない
+    - 予算や人員の配分
+        - 現都政では行革により財源をねん出。子育て施策をはじめ様々な施策を実施
+        - 他方、都民の満足度、実感には上手く繋がっていない
+- デジタルに精通したリーダーだから取り組めること
+    - テクノロジーの実装の一層の推進
+        - テクノロジーの実装は大きな変革を生む
+        - テクノロジーのに精通したリーダーだからこそ一層の社会実装が可能に
+- デジタル人材の活用、例えば元都庁職員の出戻り推進  
+    - 意思決定プロセスの変革
+        - 政策の決定方法(＝意思決定プロセス)の見直しはトップだからこそ可能
+        - ブロードリスニングによる住民意思の汲み取りと政策決定への反映の仕組み化
+        - データに基づいた政策決定(EBPM)の徹底
+    - 「誰も取り残さない」を中心に
+        - 既存政策の見直し、テクノロジーも活用した更なる構造改革の徹底により財政や人員の余白をねん出
+        - 子育て・教育・福祉・防災など「誰も取り残さない」ための施策やテクノロジーによる社会改善に重点配分
+- 都の意思決定の高度化、例えば各種アドバイザリーボードの設置
+
+## 構造改革の推進による実行力のある組織づくり
+
+- 現状、都の構造改革は未徹底。必要なところに十分な人員を配置できていない。
+    - インタビューした都庁職員の声：デジタル化は進んでいるが、決裁・レクなど内部手続の負担が大きい
+    - インタビューした都庁職員の声：組織階層が深く(局の下に部がある構成)意思決定のスピードが遅い
+    - インタビューした都庁職員の声：政策立案に十分なリソースを割けていない。政策立案自体よりもバックデータ作りや裏付け(都民の声、報道など)探しの作業に忙殺。
+    - 結果、職場としての魅力がうすれ、東京都の採用試験の応募者数は2015年の2024人から、2022年委は697人にまで大幅に減少
+    - 政策立案や住民福祉の向上など必要な部門に十分な人員配置ができていない可能性
+- 更なる働き方改革、業務効率化、組織の見直しによる魅力ある職場づくりと実行体制の充実
+    - データ基盤の整備やブロードリスニングによる恒常的な住民意思の汲み取りにより突発的ななリサーチ業務を減らす
+    - 業務状況の可視化を行った上で、組織・権限範囲の見直しを行うことによる意思決定のスピード向上
+    - デジタル化の徹底による内部手続の効率化推進`}]},{oid:"a58aa37630bc7713943ad3213ad394392612724a",message:"Merge branch 'main' into HiroakiSato1106-patch-1",committedDate:"2024-07-03T02:44:30Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/a58aa37630bc7713943ad3213ad394392612724a",associatedPullRequests:{edges:[{node:{number:259,title:"Update care.md: 防災パートのブロードリスニング反映",url:"https://github.com/takahiroanno2024/election2024/pull/259",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"f50accf177f8b1fb36c1cb66f641b7ccf962dbf4",filename:"docs/manifest/administration.md",status:"modified",additions:28,deletions:0,changes:28,blob_url:"https://github.com/takahiroanno2024/election2024/blob/a58aa37630bc7713943ad3213ad394392612724a/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/a58aa37630bc7713943ad3213ad394392612724a/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=a58aa37630bc7713943ad3213ad394392612724a",patch:`@@ -61,6 +61,33 @@
 - 行政では…情報公開を住民とのコミュニケーションのための前向きな手段と捉え直し、公開する情報の範囲のみならず、利便性や伝え方を工夫していくべきではないか
     - 情報開示＝不正を暴くというようなネガティブな文脈で使われることが多い
     - そのため、後ろ向きで受動的な情報開示になる傾向があるのではないか
+ 
+## 東京都が果たすべき役割 
+
+- 制度上の国・都・市区町村の役割分担(例)
+    - 国：防衛、外交、全国で統一すべき基準　など
+        - 国際社会における国家としての存立に関わる事務
+        - 全国で統一的に定めることが望ましいものに関する事務
+        - 全国規模で行うべき施策・事業
+    - 都：広域的な行政サービス
+        - 保健衛生：臨時の予防接種の実施　など
+        - 福祉：保育士・介護支援専門員の登録、児童相談所の登録　(保育所・養護老人ホームの認可)　など
+        - 教育：小中学校学級編成基準、私立学校等の設置認可、県費負担教職員関係　など
+        - 環境：公害健康被害の補償、(廃棄物処理施設の設置許可)　など
+        - まちづくり：都市計画区域の指定、区域区分に関する都市計画決定、(上下水道の整備・管理運営)　など
+        - 治安・安全・防災：警察、(消防)
+    - 区市町村：身近な行政サービス
+        - 保健衛生：保健所の設置、市町村保健センターの設置　など
+        - 福祉：保育所の設置・運営、生活保護　など
+        - 教育：小中学校・幼稚園の設置・運営　など
+        - 環境：一般廃棄物の収集や処理　など
+        - まちづくり：都市計画決定　など
+        - 治安・安全・防災・その他：戸籍、住民票
+- 東京都ができること：制度上の権限だけでなく、広域自治体として・首都として国・地域をけん引していく必要
+    - 国に対して：具体的事例やニーズを基に規制改革提案、分権提案を実施し枠組みの変革を主導
+    - 都民に対して：都の持つ権限や予算、資産を最大限活用し住民福祉の向上
+    - 他の自治体に対して：自治体のトップランナーとして先進事例の提供、ノウハウの共有を目指す
+    - 区市町村に対して：財政、情報提供、ルールメイクなどを通じて地域住民の生活向上支援
 
 ## 都民にとって使いやすい行政に
 
@@ -86,6 +113,7 @@
 - これまでの行政サービスは、大量の情報から自分に合ったサービスを探す必要があり、面倒さや、使えるサービスに気づかないという漏れが生まれていた
 - 今後は、プッシュ型で必要な政策情報を取得できるようにする
     - 本人情報や事前に入力した興味・関心から関連する政策をプッシュ型で提案（アプリやメールでの通知を想定）
+    - 前向きなメッセージとともに提案を行うことで、行政サービスの利用への抵抗感を軽減
 
 ## 見やすい・わかりやすい情報公開により東京都の透明化
 `},{sha:"e9f8d172608e350e2efb28052222b91a06e72928",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:0,changes:1,blob_url:"https://github.com/takahiroanno2024/election2024/blob/a58aa37630bc7713943ad3213ad394392612724a/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/a58aa37630bc7713943ad3213ad394392612724a/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=a58aa37630bc7713943ad3213ad394392612724a",patch:`@@ -114,6 +114,7 @@
 - 避難・復旧時には、避難所運営･在宅避難者把握･きめ細かい支援提供を技術でスムーズ化
     - 避難所での住民登録（チェックイン）､在宅避難者把握や､医薬品の配送にマイナンバーカードや処方情報を活用
     - 官民による､備蓄状況や非常用電源の可視化(DB化)
+    - 避難行動要支援者（＝緊急時に支援を必要とする避難者）について､プライバシーに配慮しつつ行政が事前に把握(非公開のDB化)
 
 ## デジタル技術を活用した､次世代の避難所運営(イメージ)
 `}]},{oid:"b1dd366d9b4cb335596977594de163686ce50ec5",message:`Merge pull request #260 from takahiroanno2024/HiroakiSato1106-patch-2

Update care.md: ブロードリスニング反映(2)`,committedDate:"2024-07-03T02:42:20Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/b1dd366d9b4cb335596977594de163686ce50ec5",associatedPullRequests:{edges:[{node:{number:260,title:"Update care.md: ブロードリスニング反映(2)",url:"https://github.com/takahiroanno2024/election2024/pull/260",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"7366bbf7ff558a63cde31fee73e8d5bc47c6577e",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:0,changes:1,blob_url:"https://github.com/takahiroanno2024/election2024/blob/b1dd366d9b4cb335596977594de163686ce50ec5/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/b1dd366d9b4cb335596977594de163686ce50ec5/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=b1dd366d9b4cb335596977594de163686ce50ec5",patch:`@@ -97,6 +97,7 @@
         - 特定のニーズを抱えた住民の所在 等
 - 避難・復旧時には、避難所運営･きめ細かい支援提供を技術でスムーズ化
     - 避難所での住民登録（チェックイン）や､医薬品の配送にマイナンバーカードや処方情報を活用
+    - 避難行動要支援者（＝緊急時に支援を必要とする避難者）について､プライバシーに配慮しつつ行政が事前に把握(非公開のDB化)
 
 ## デジタル技術を活用した､次世代の避難所運営(イメージ)
 `}]},{oid:"9ef797353080a1d1ee3b55a01f188f2f6e64bd2c",message:"fix lint",committedDate:"2024-07-03T02:41:44Z",author:{name:"Imaizumi Takatsugu",email:"takatsugu.imaizumi@mntsq.com"},url:"https://github.com/takahiroanno2024/election2024/commit/9ef797353080a1d1ee3b55a01f188f2f6e64bd2c",associatedPullRequests:{edges:[{node:{number:270,title:"組織強化の明確化",url:"https://github.com/takahiroanno2024/election2024/pull/270",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"54a6e30c1707c3c872ac568c96901304643bff5d",filename:"docs/manifest/administration.md",status:"modified",additions:18,deletions:19,changes:37,blob_url:"https://github.com/takahiroanno2024/election2024/blob/9ef797353080a1d1ee3b55a01f188f2f6e64bd2c/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/9ef797353080a1d1ee3b55a01f188f2f6e64bd2c/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=9ef797353080a1d1ee3b55a01f188f2f6e64bd2c",patch:`@@ -132,29 +132,28 @@
 
 - 東京都の前進のためには更なる行政運営の高度化が必要
     - 行政DX
-    　　- 都として様々な取組が実施されているものの課題は残存
-      　- インタビューした都庁職員の声：GovTech全体の組織は大きくなっているが、エンジニアの比重は少なく、絶対数が足りていない
-    　　- インタビューした都庁職員の声：内部手続きが多く、政策を考える十分な時間が確保できていない。また、整備された基盤に都政のトップの理解が追いついていない
+        - 都として様々な取組が実施されているものの課題は残存
+        - インタビューした都庁職員の声：GovTech全体の組織は大きくなっているが、エンジニアの比重は少なく、絶対数が足りていない
+        - インタビューした都庁職員の声：内部手続きが多く、政策を考える十分な時間が確保できていない。また、整備された基盤に都政のトップの理解が追いついていない
     - 意思決定プロセス
-    　　- 住民意思の汲み取りは4年に1回の選挙が中心
-      　- 住民の思いを幅広く拾い意思決定に反映する仕組みはない
+        - 住民意思の汲み取りは4年に1回の選挙が中心
+        - 住民の思いを幅広く拾い意思決定に反映する仕組みはない
     - 予算や人員の配分
-    　　- 現都政では行革により財源をねん出。子育て施策をはじめ様々な施策を実施
-      　- 他方、都民の満足度、実感には上手く繋がっていない
+        - 現都政では行革により財源をねん出。子育て施策をはじめ様々な施策を実施
+        - 他方、都民の満足度、実感には上手く繋がっていない
 - デジタルに精通したリーダーだから取り組めること
-  　- テクノロジーの実装の一層の推進
-  　　　- テクノロジーの実装は大きな変革を生む
-  　　　- テクノロジーのに精通したリーダーだからこそ一層の社会実装が可能に
-    　　- デジタル人材の活用、例えば元都庁職員の出戻り推進  
+    - テクノロジーの実装の一層の推進
+        - テクノロジーの実装は大きな変革を生む
+        - テクノロジーのに精通したリーダーだからこそ一層の社会実装が可能に
+- デジタル人材の活用、例えば元都庁職員の出戻り推進  
     - 意思決定プロセスの変革
-    　　- 政策の決定方法(＝意思決定プロセス)の見直しはトップだからこそ可能
-      　- ブロードリスニングによる住民意思の汲み取りと政策決定への反映の仕組み化
-      　- データに基づいた政策決定(EBPM)の徹底
-  　- 「誰も取り残さない」を中心に
-　　　　- 既存政策の見直し、テクノロジーも活用した更なる構造改革の徹底により財政や人員の余白をねん出
-  　　　- 子育て・教育・福祉・防災など「誰も取り残さない」ための施策やテクノロジーによる社会改善に重点配分
-　- 都の意思決定の高度化、例えば各種アドバイザリーボードの設置
-
+        - 政策の決定方法(＝意思決定プロセス)の見直しはトップだからこそ可能
+        - ブロードリスニングによる住民意思の汲み取りと政策決定への反映の仕組み化
+        - データに基づいた政策決定(EBPM)の徹底
+    - 「誰も取り残さない」を中心に
+        - 既存政策の見直し、テクノロジーも活用した更なる構造改革の徹底により財政や人員の余白をねん出
+        - 子育て・教育・福祉・防災など「誰も取り残さない」ための施策やテクノロジーによる社会改善に重点配分
+- 都の意思決定の高度化、例えば各種アドバイザリーボードの設置
 
 ## 構造改革の推進による実行力のある組織づくり
 `}]},{oid:"e904b2d856ce2b4871aa50befdc819bf7a268438",message:`Merge pull request #268 from takahiroanno2024/yuuuuuuten-patch-1

東京都の役割`,committedDate:"2024-07-03T02:37:01Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/e904b2d856ce2b4871aa50befdc819bf7a268438",associatedPullRequests:{edges:[{node:{number:268,title:"東京都の役割",url:"https://github.com/takahiroanno2024/election2024/pull/268",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"f50accf177f8b1fb36c1cb66f641b7ccf962dbf4",filename:"docs/manifest/administration.md",status:"modified",additions:27,deletions:0,changes:27,blob_url:"https://github.com/takahiroanno2024/election2024/blob/e904b2d856ce2b4871aa50befdc819bf7a268438/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/e904b2d856ce2b4871aa50befdc819bf7a268438/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=e904b2d856ce2b4871aa50befdc819bf7a268438",patch:`@@ -61,6 +61,33 @@
 - 行政では…情報公開を住民とのコミュニケーションのための前向きな手段と捉え直し、公開する情報の範囲のみならず、利便性や伝え方を工夫していくべきではないか
     - 情報開示＝不正を暴くというようなネガティブな文脈で使われることが多い
     - そのため、後ろ向きで受動的な情報開示になる傾向があるのではないか
+ 
+## 東京都が果たすべき役割 
+
+- 制度上の国・都・市区町村の役割分担(例)
+    - 国：防衛、外交、全国で統一すべき基準　など
+        - 国際社会における国家としての存立に関わる事務
+        - 全国で統一的に定めることが望ましいものに関する事務
+        - 全国規模で行うべき施策・事業
+    - 都：広域的な行政サービス
+        - 保健衛生：臨時の予防接種の実施　など
+        - 福祉：保育士・介護支援専門員の登録、児童相談所の登録　(保育所・養護老人ホームの認可)　など
+        - 教育：小中学校学級編成基準、私立学校等の設置認可、県費負担教職員関係　など
+        - 環境：公害健康被害の補償、(廃棄物処理施設の設置許可)　など
+        - まちづくり：都市計画区域の指定、区域区分に関する都市計画決定、(上下水道の整備・管理運営)　など
+        - 治安・安全・防災：警察、(消防)
+    - 区市町村：身近な行政サービス
+        - 保健衛生：保健所の設置、市町村保健センターの設置　など
+        - 福祉：保育所の設置・運営、生活保護　など
+        - 教育：小中学校・幼稚園の設置・運営　など
+        - 環境：一般廃棄物の収集や処理　など
+        - まちづくり：都市計画決定　など
+        - 治安・安全・防災・その他：戸籍、住民票
+- 東京都ができること：制度上の権限だけでなく、広域自治体として・首都として国・地域をけん引していく必要
+    - 国に対して：具体的事例やニーズを基に規制改革提案、分権提案を実施し枠組みの変革を主導
+    - 都民に対して：都の持つ権限や予算、資産を最大限活用し住民福祉の向上
+    - 他の自治体に対して：自治体のトップランナーとして先進事例の提供、ノウハウの共有を目指す
+    - 区市町村に対して：財政、情報提供、ルールメイクなどを通じて地域住民の生活向上支援
 
 ## 都民にとって使いやすい行政に
 `}]},{oid:"66f28e7641a988fa43a1760183ef8d787b861864",message:`プッシュ型のメリット追加

プッシュ型のサービス提案によりこれまで行政サービスの利用に抵抗感のあった方がより使いやすくなるという説明を追加しています。`,committedDate:"2024-07-02T17:08:30Z",author:{name:"yuuuuuuten",email:"yuuuuuuten@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/66f28e7641a988fa43a1760183ef8d787b861864",associatedPullRequests:{edges:[{node:{number:271,title:"プッシュ型のメリット追加",url:"https://github.com/takahiroanno2024/election2024/pull/271",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"55a6471305917a0393887cb6e5ff49c9f0d4eac1",filename:"docs/manifest/administration.md",status:"modified",additions:1,deletions:0,changes:1,blob_url:"https://github.com/takahiroanno2024/election2024/blob/66f28e7641a988fa43a1760183ef8d787b861864/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/66f28e7641a988fa43a1760183ef8d787b861864/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=66f28e7641a988fa43a1760183ef8d787b861864",patch:`@@ -86,6 +86,7 @@
 - これまでの行政サービスは、大量の情報から自分に合ったサービスを探す必要があり、面倒さや、使えるサービスに気づかないという漏れが生まれていた
 - 今後は、プッシュ型で必要な政策情報を取得できるようにする
     - 本人情報や事前に入力した興味・関心から関連する政策をプッシュ型で提案（アプリやメールでの通知を想定）
+    - 前向きなメッセージとともに提案を行うことで、行政サービスの利用への抵抗感を軽減
 
 ## 見やすい・わかりやすい情報公開により東京都の透明化
 `}]},{oid:"acdcba4be1af60533061e6fd594d0c5344af710f",message:`組織強化の明確化

従前、リーダー・組織強化を一つでくくっていた部分を二つにわけています。\r
リーダーについては、リーダーだからこそできることというメッセージを詳細化しています。\r
組織強化については、種々のインタビューを受け、行政の実行力強化のため、組織を強くするというメッセージを厚く書いています。`,committedDate:"2024-07-02T17:04:28Z",author:{name:"yuuuuuuten",email:"yuuuuuuten@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/acdcba4be1af60533061e6fd594d0c5344af710f",associatedPullRequests:{edges:[{node:{number:270,title:"組織強化の明確化",url:"https://github.com/takahiroanno2024/election2024/pull/270",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"064cb0dda0f3cc68e339dfde2f6cf2229dccc692",filename:"docs/manifest/administration.md",status:"modified",additions:42,deletions:17,changes:59,blob_url:"https://github.com/takahiroanno2024/election2024/blob/acdcba4be1af60533061e6fd594d0c5344af710f/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/acdcba4be1af60533061e6fd594d0c5344af710f/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=acdcba4be1af60533061e6fd594d0c5344af710f",patch:`@@ -18,8 +18,9 @@
         - 都が持つ情報の公開を徹底する
     - 自治体連携の推進による便利さの底上げ
         - 協定等の政治的な枠組みだけでなくシステムとして連携を強め生活の利便性向上につなげる
-    - 政策の質、実行力を担保するデジタルリーダー
+    - 政策の質、実行力を担保する組織作り
         - 強いデジタルリーダーシップを持つ知事のもと、整備された基盤を適切に利活用していく
+        - 都庁の働き方改革、業務効率化を推進することで実行力のある組織を作る
 
 ## 現体制の下、東京都の構造改革・DXは一定進展
 
@@ -127,19 +128,43 @@
         - GovTech東京による区市町村支援の一層推進
         - 子育て・介護をはじめとする住民に身近な行政サービスでの区市町村との連携強化
 
-## 更なるDX推進のため、技術への理解があるリーダーに託す
-
-- 過去は日本のデジタル競争力が低下していた
-    - デジタル競争力順位低迷
-    - IT人材のベンダー頼り、内部IT人材の不足
-    - 行政DXの遅れ
-- 現在は都として様々な取り組みを実施し、基盤整備を試みている
-    - [東京都デジタル人材育成基本方針](https://www.digitalservice.metro.tokyo.lg.jp/business/digital-hr/digital-hr-policy-v2)策定
-    - 都のサービスユーザーテストガイドライン制定
-- しかしいぜんとして現状の課題は残る。実行力・企画力の強化は道半ば
-    - インタビューした都庁職員の声：GovTech全体の組織は大きくなっているが、エンジニアの比重は少なく、絶対数が足りていない
-    - インタビューした都庁職員の声：内部手続きが多く、政策を考える十分な時間が確保できていない。また、整備された基盤に都政のトップの理解が追いついていない
-    - その結果、職場としての魅力がうすれ、東京都の採用試験の応募者数は2015年の2024人から、2022年委は697人にまで大幅に減少
-- 描く未来：強いデジタルリーダーシップを持つ知事のもと、整備された基盤を適切に利活用していく
-    - デジタル人材の活用、例えば元都庁職員の出戻り推進
-    - 都の意思決定の高度化、例えば各種アドバイザリーボードの設置
+## 技術に精通したリーダーによる行政運営の高度化
+
+- 東京都の前進のためには更なる行政運営の高度化が必要
+    - 行政DX
+    　　- 都として様々な取組が実施されているものの課題は残存
+      　- インタビューした都庁職員の声：GovTech全体の組織は大きくなっているが、エンジニアの比重は少なく、絶対数が足りていない
+    　　- インタビューした都庁職員の声：内部手続きが多く、政策を考える十分な時間が確保できていない。また、整備された基盤に都政のトップの理解が追いついていない
+    - 意思決定プロセス
+    　　- 住民意思の汲み取りは4年に1回の選挙が中心
+      　- 住民の思いを幅広く拾い意思決定に反映する仕組みはない
+    - 予算や人員の配分
+    　　- 現都政では行革により財源をねん出。子育て施策をはじめ様々な施策を実施
+      　- 他方、都民の満足度、実感には上手く繋がっていない
+- デジタルに精通したリーダーだから取り組めること
+  　- テクノロジーの実装の一層の推進
+  　　　- テクノロジーの実装は大きな変革を生む
+  　　　- テクノロジーのに精通したリーダーだからこそ一層の社会実装が可能に
+    　　- デジタル人材の活用、例えば元都庁職員の出戻り推進  
+    - 意思決定プロセスの変革
+    　　- 政策の決定方法(＝意思決定プロセス)の見直しはトップだからこそ可能
+      　- ブロードリスニングによる住民意思の汲み取りと政策決定への反映の仕組み化
+      　- データに基づいた政策決定(EBPM)の徹底
+  　- 「誰も取り残さない」を中心に
+　　　　- 既存政策の見直し、テクノロジーも活用した更なる構造改革の徹底により財政や人員の余白をねん出
+  　　　- 子育て・教育・福祉・防災など「誰も取り残さない」ための施策やテクノロジーによる社会改善に重点配分
+　- 都の意思決定の高度化、例えば各種アドバイザリーボードの設置
+
+
+## 構造改革の推進による実行力のある組織づくり
+
+- 現状、都の構造改革は未徹底。必要なところに十分な人員を配置できていない。
+    - インタビューした都庁職員の声：デジタル化は進んでいるが、決裁・レクなど内部手続の負担が大きい
+    - インタビューした都庁職員の声：組織階層が深く(局の下に部がある構成)意思決定のスピードが遅い
+    - インタビューした都庁職員の声：政策立案に十分なリソースを割けていない。政策立案自体よりもバックデータ作りや裏付け(都民の声、報道など)探しの作業に忙殺。
+    - 結果、職場としての魅力がうすれ、東京都の採用試験の応募者数は2015年の2024人から、2022年委は697人にまで大幅に減少
+    - 政策立案や住民福祉の向上など必要な部門に十分な人員配置ができていない可能性
+- 更なる働き方改革、業務効率化、組織の見直しによる魅力ある職場づくりと実行体制の充実
+    - データ基盤の整備やブロードリスニングによる恒常的な住民意思の汲み取りにより突発的ななリサーチ業務を減らす
+    - 業務状況の可視化を行った上で、組織・権限範囲の見直しを行うことによる意思決定のスピード向上
+    - デジタル化の徹底による内部手続の効率化推進`}]},{oid:"072339c81754fd1bd68e7d2e5604fa679921dc64",message:`東京都の役割

様々な場所でみられる「それは東京でできるのか」という疑問に答えるため、現状理解として東京都ができることを追加`,committedDate:"2024-07-02T14:49:44Z",author:{name:"yuuuuuuten",email:"yuuuuuuten@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/072339c81754fd1bd68e7d2e5604fa679921dc64",associatedPullRequests:{edges:[{node:{number:268,title:"東京都の役割",url:"https://github.com/takahiroanno2024/election2024/pull/268",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"116567a077549874aa4766e737a81ad44ef07238",filename:"docs/manifest/administration.md",status:"modified",additions:27,deletions:0,changes:27,blob_url:"https://github.com/takahiroanno2024/election2024/blob/072339c81754fd1bd68e7d2e5604fa679921dc64/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/072339c81754fd1bd68e7d2e5604fa679921dc64/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=072339c81754fd1bd68e7d2e5604fa679921dc64",patch:`@@ -61,6 +61,33 @@
 - 行政では…情報公開を住民とのコミュニケーションのための前向きな手段と捉え直し、公開する情報の範囲のみならず、利便性や伝え方を工夫していくべきではないか
     - 情報開示＝不正を暴くというようなネガティブな文脈で使われることが多い
     - そのため、後ろ向きで受動的な情報開示になる傾向があるのではないか
+ 
+## 東京都が果たすべき役割 
+
+- 制度上の国・都・市区町村の役割分担(例)
+    - 国：防衛、外交、全国で統一すべき基準　など
+        - 国際社会における国家としての存立に関わる事務
+        - 全国で統一的に定めることが望ましいものに関する事務
+        - 全国規模で行うべき施策・事業
+    - 都：広域的な行政サービス
+        - 保健衛生：臨時の予防接種の実施　など
+        - 福祉：保育士・介護支援専門員の登録、児童相談所の登録　(保育所・養護老人ホームの認可)　など
+        - 教育：小中学校学級編成基準、私立学校等の設置認可、県費負担教職員関係　など
+        - 環境：公害健康被害の補償、(廃棄物処理施設の設置許可)　など
+        - まちづくり：都市計画区域の指定、区域区分に関する都市計画決定、(上下水道の整備・管理運営)　など
+        - 治安・安全・防災：警察、(消防)
+    - 区市町村：身近な行政サービス
+        - 保健衛生：保健所の設置、市町村保健センターの設置　など
+        - 福祉：保育所の設置・運営、生活保護　など
+        - 教育：小中学校・幼稚園の設置・運営　など
+        - 環境：一般廃棄物の収集や処理　など
+        - まちづくり：都市計画決定　など
+        - 治安・安全・防災・その他：戸籍、住民票
+- 東京都ができること：制度上の権限だけでなく、広域自治体として・首都として国・地域をけん引していく必要
+    - 国に対して：具体的事例やニーズを基に規制改革提案、分権提案を実施し枠組みの変革を主導
+    - 都民に対して：都の持つ権限や予算、資産を最大限活用し住民福祉の向上
+    - 他の自治体に対して：自治体のトップランナーとして先進事例の提供、ノウハウの共有を目指す
+    - 区市町村に対して：財政、情報提供、ルールメイクなどを通じて地域住民の生活向上支援
 
 ## 都民にとって使いやすい行政に
 `}]},{oid:"0324afe9315a37ebf93682ab18c4e486b87c6c23",message:"Create budget",committedDate:"2024-07-02T13:23:34Z",author:{name:"tokshibata",email:"48014497+tokshibata@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/0324afe9315a37ebf93682ab18c4e486b87c6c23",associatedPullRequests:{edges:[{node:{number:267,title:"Create budget",url:"https://github.com/takahiroanno2024/election2024/pull/267",comments:{nodes:[{body:"@tokshibata デジタル人材の確保については、単価見直し＆法定福利・福利厚生費反映で2.5億円。＋継続欄は書き方に自由度があるのであれば、毎年継続的に募集しエンジニア100人程度を目指すと想定されるので、最大10億円程度という書き方にできますでしょうか・・・？"}]},timelineItems:{nodes:[{subject:{number:180,title:"取組内容に対する予算とその実行計画及び体制を提示してほしい",url:"https://github.com/takahiroanno2024/election2024/issues/180"}}]}}}]},files:[{sha:"6861895c5b0aef70dfa568709a2d639ac3e54013",filename:"docs/manifest/budget",status:"added",additions:58,deletions:0,changes:58,blob_url:"https://github.com/takahiroanno2024/election2024/blob/0324afe9315a37ebf93682ab18c4e486b87c6c23/docs%2Fmanifest%2Fbudget",raw_url:"https://github.com/takahiroanno2024/election2024/raw/0324afe9315a37ebf93682ab18c4e486b87c6c23/docs%2Fmanifest%2Fbudget",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fbudget?ref=0324afe9315a37ebf93682ab18c4e486b87c6c23",patch:`@@ -0,0 +1,58 @@
+# 5本の柱 実現のための想定予算と財源確保の手立て
+## 実現のための想定予算
+- サマリー
+  - 安野たかひろが今回政策の5本の柱で掲げている各種施策の実現のためには、導入時約ｘｘｘ億円、維持費（ランニングコスト）として約ｘｘｘ億円がかかる見込み
+  - 東京都の税収はここ14年で見るとおおよそ1,600億円/年で伸長。経常収支比率を考慮しても使える予算は毎年373億円程度増えている
+  - 任期4年の前半2年にかけて政策を実行することで、税収増分で増えた予算内で全ての政策の実現が可能
+  - 加えて、デジタルの活用による無駄削減、既存政策の見直し（都庁プロジェクションマッピングの取りやめなど）により、更なる財源の捻出・余裕を持った財政運営を目指す
+
+- 政策の5本柱実現にかかる予算規模概算
+  - 政策の5本柱で上げた施策の実現は、導入時に約ｘｘｘ億円、その後の維持・運営費に約ｘｘ億円／年がかかる見込み
+  - 最も予算を要するのは2本目の柱である「とことん安心の医療・防災」で、導入に約275億円、維持・運営に約52.5億円/年を想定
+- 経済：新産業で所得倍増　導入ｘｘ億円、維持・運営ｘｘ億円/年
+  - 都立インターナショナルスクールの誘致（企画費・授業料補助等）：導入4億円、維持・運営3億円/年
+  - 自動運転特区の実現：導入xx億円、運営xx億円/年
+  - ほか施策については、追加予算ではなく現行の予算内で取り組み内容を変更
+- 医療・防災：とことん安心の医療・防災　導入272.5億円、維持・運営52.5億円/年
+  - 夜間休日の医療体制構築：導入91.4億円、維持・運営35億円/年
+  - 自分らしい生き方アプリの開発：導入25億円、維持・運営1億円/年
+  - 施設利用状況のデータベース化：導入18億円、維持・運営2億円/年
+  - 入退院サマリーの作成補助：導入34億円、維持・運営1億円/年
+  - 避難訓練の実効性を強化するデジタル技術の実装：導入16.8億円、維持・運営1.8億円/年
+  - 分散型情報インフラの構築：導入41億円、維持・運営1.12億円/年
+  - 避難所運営のスムーズ化:導入49億円、維持・運営0.5億円/年
+  - その他取り組みは、現行予算の枠内で実現
+- 子育て・教育：安心の子育て教育環境　導入188億円、維持・運営90億円/年
+  - 不妊治療の「先進医療」の費用額上限撤廃：13億円/年
+  - 無痛分娩に対する助成：11億円/年
+  - 住宅費支援:13億円/年
+  - 教育費支援：53億円/年
+  - 海外大学誘致：導入12億円
+  - 校務のDX化：導入86億円
+  - その他取り組みは、現行予算の枠内で実現
+- 行政：行政をもっと簡単・透明に　導入12.8億円、維持・運営12.3億円/年
+  - 使い勝手改善：導入0.5億円
+  - デジタル人材確保：1.3億円/年
+  - リモート窓口の整備：1億円/年
+  - AI活用の総合案内：10億円/年
+  - その他取り組みは、現行予算の枠内で実現
+- 民主主義：高速な民意反映　導入13.74億円、維持・運営0.02億円/年
+  - ブロードリスニングの整備：導入0.14億円、維持・運営0.02億円/年
+  - 都議会AIの作成：導入11.8億円
+  - 都政参加プラットフォームの構築：導入1.8億円
+  - 東京都スマホアプリの開発：行政パートの予算に内包
+  - AIアシスタント・LINE等の活用：行政パートの予算に内包
+
+- 東京都の税収はここ14年で見るとおおよそ1,600億円/年で伸長。経常収支比率を考慮しても使える予算は毎年373億円程度増えている
+  - 東京都財務局の発表によると、2010年から2024年の間で税収は2.24兆円増加。1年で1600億円程度税収が伸びている状況
+  - 経常収支比率は令和4年度で76.7%であり、それを差し引いても毎年約373億円程度は財源が税収増により増えている
+
+- 任期4年の前半2年にかけて政策を実行することで、税収増分で増えた予算内で全ての政策の実現が可能
+  - 年間373億円の税収増分の予算に対し、安野の政策全てを実装するには導入コストとしてｘｘｘ億円が必要。
+  - 2年間で実施タイミングをずらして導入を行うことで、無理のない計画で新政策の実装が可能となる
+
+- 加えて、デジタルの活用による無駄削減、既存政策の見直し（都庁プロジェクションマッピングの取りやめなど）により、更なる財源の捻出・余裕を持った財政運営を目指す
+  - デジタルの活用により、様々な既存の都政の無駄が削減されることを想定している。内情をつぶさに確認し、徹底的な効率化による更なる予算ねん出を目指す
+  - また、良い政策は踏襲するが、そうでないものは速やかに取りやめ、コストを抑える。
+    - 例えば都庁のプロジェクションマッピングは2024年度で7億円ほどの予算が計上されているが、取りやめが望ましいと考える
+  `}]},{oid:"dbdf4f55485e8c32fc159a4d83be0e3aea6fe4e7",message:"Update others.md　ディマンドリスポンス追記",committedDate:"2024-07-02T11:53:21Z",author:{name:"tokshibata",email:"48014497+tokshibata@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/dbdf4f55485e8c32fc159a4d83be0e3aea6fe4e7",associatedPullRequests:{edges:[{node:{number:256,title:"Create Others & Energy",url:"https://github.com/takahiroanno2024/election2024/pull/256",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"f260c6e253c40457b47249ae9369c32e6d231c26",filename:"docs/manifest/others.md",status:"modified",additions:2,deletions:1,changes:3,blob_url:"https://github.com/takahiroanno2024/election2024/blob/dbdf4f55485e8c32fc159a4d83be0e3aea6fe4e7/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/dbdf4f55485e8c32fc159a4d83be0e3aea6fe4e7/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=dbdf4f55485e8c32fc159a4d83be0e3aea6fe4e7",patch:`@@ -24,7 +24,8 @@
             - （環境省「離島への浮体式洋上風力発電導入の手引き」2024年6月）
     - 住宅の断熱義務化（ZEH、ZEB推進）
     - テクノロジーにおける電力消費・販売の最適化
-        - ディマンドリスポンスの仕組みを拡充。より広い都民にとってメリットを生み、環境インパクトを向上する方法を模索
+        - ディマンドリスポンス（消費者が賢く電力使用量を制御することで、電力需要パターンを変化させ、電力の需要と供給のバランスをとる取り組み）の仕組みを拡充。より広い都民にとってメリットを生み、環境インパクトを向上する方法を模索
+            - 電力消費ピーク時に節電に協力することでポイント還元がされるなど、協力することで都民にもプラスが生まれる仕組み
             - 参考）<https://www.enecho.meti.go.jp/category/electricity_and_gas/electricity_measures/dr/dr.html>
             - 参考）<https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2024/03/28/66.html>
         - 電力市場をAIテクノロジーを用いて最適化する技術企業への支援`}]},{oid:"d1465775263b9f48e9a1478b7c97401ba0a5299d",message:"Update others.md　浮体式洋上風力の言及追記",committedDate:"2024-07-02T11:40:25Z",author:{name:"tokshibata",email:"48014497+tokshibata@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/d1465775263b9f48e9a1478b7c97401ba0a5299d",associatedPullRequests:{edges:[{node:{number:256,title:"Create Others & Energy",url:"https://github.com/takahiroanno2024/election2024/pull/256",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"69f50772d2d7a28ad4f9be394a6ea72f17066210",filename:"docs/manifest/others.md",status:"modified",additions:5,deletions:0,changes:5,blob_url:"https://github.com/takahiroanno2024/election2024/blob/d1465775263b9f48e9a1478b7c97401ba0a5299d/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/d1465775263b9f48e9a1478b7c97401ba0a5299d/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=d1465775263b9f48e9a1478b7c97401ba0a5299d",patch:`@@ -17,6 +17,11 @@
 - 現在の都の政策に加え、以下を政策として実行する
     - 集合住宅（賃貸含む）への太陽光パネル設置補助
     - 島しょ部における浮体式洋上風力推進のための企業の技術開発支援と実装のための特区化
+        - 日本は比較的水深が深い海に囲まれており、従来の着床式洋上風力では設置可能な範囲が限定的。浮体式洋上風力を推進することで、導入ポテンシャルを大きくあげることができる
+        - 着床式と比べて、海の生態系・環境に及ぼす影響を抑えられる可能性がある
+        - 導入費用は高いが、発電規模は大きいため電力価格は安く抑えられる
+        - 導入に際して様々な技術や人材を必要とするため、周辺での事業・雇用創出に繋がる。今後アジアでニーズが高まることも予想され、先行すれば技術を輸出することも可能
+            - （環境省「離島への浮体式洋上風力発電導入の手引き」2024年6月）
     - 住宅の断熱義務化（ZEH、ZEB推進）
     - テクノロジーにおける電力消費・販売の最適化
         - ディマンドリスポンスの仕組みを拡充。より広い都民にとってメリットを生み、環境インパクトを向上する方法を模索`}]},{oid:"1b6515dfb7c49d98be12ac9f9032d21f816aebf2",message:"Update others.md　電力消費量増加の根拠追加",committedDate:"2024-07-02T11:22:33Z",author:{name:"tokshibata",email:"48014497+tokshibata@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/1b6515dfb7c49d98be12ac9f9032d21f816aebf2",associatedPullRequests:{edges:[{node:{number:256,title:"Create Others & Energy",url:"https://github.com/takahiroanno2024/election2024/pull/256",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"dddeb5fca59cf42f33a10779c12b7ed0be84e24c",filename:"docs/manifest/others.md",status:"modified",additions:2,deletions:0,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/1b6515dfb7c49d98be12ac9f9032d21f816aebf2/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/1b6515dfb7c49d98be12ac9f9032d21f816aebf2/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=1b6515dfb7c49d98be12ac9f9032d21f816aebf2",patch:`@@ -12,6 +12,8 @@
     - 太陽光・風力などの再エネは発電量が天候などにより不安定であり、大規模停電を防ぐための電気の貯蔵技術の発展が急務
 - さらに、今回安野たかひろが提案しているテクノロジーを活用した各種政策は、電力を多く消費するものも多く、実現に向けてはより一層のエネルギー政策強化が必要
     - 特に自動運転を大々的に活用していく場合には、現状の消費電力とはけた違いの電力が必要になる可能性もある
+        -  自動車に関する高度情報処理について、その機能をクラウド・データセンター側に依存（データ量にして4TB/日）させると、ネットワーク・クラウド側の車両1台あたり電力負荷は2.0kWとなる。CO2排出量に換算すると、約2,550万t-CO2（国内2050年）。
+            - (経済産業省「「電動車等省エネ化のための車載コンピューティング・シミュレーション技術の開発」「スマートモビリティ社会の構築」プロジェクトに関する研究開発・社会実装の方向性」2022年2月）
 - 現在の都の政策に加え、以下を政策として実行する
     - 集合住宅（賃貸含む）への太陽光パネル設置補助
     - 島しょ部における浮体式洋上風力推進のための企業の技術開発支援と実装のための特区化`}]},{oid:"49f18c80cc712a5651f7df473a0c286182c88f46",message:`Update care.md: ブロードリスニング反映(2)

避難所運営･居宅避難者支援の文脈で､要支援者に関する事前把握に関する施策を追加(備蓄と異なり､オープンにするのではなく､プライバシーに配慮したものを想定)`,committedDate:"2024-07-01T14:56:23Z",author:{name:"HiroakiSato1106",email:"hsato1106@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/49f18c80cc712a5651f7df473a0c286182c88f46",associatedPullRequests:{edges:[{node:{number:260,title:"Update care.md: ブロードリスニング反映(2)",url:"https://github.com/takahiroanno2024/election2024/pull/260",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"7366bbf7ff558a63cde31fee73e8d5bc47c6577e",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:0,changes:1,blob_url:"https://github.com/takahiroanno2024/election2024/blob/49f18c80cc712a5651f7df473a0c286182c88f46/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/49f18c80cc712a5651f7df473a0c286182c88f46/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=49f18c80cc712a5651f7df473a0c286182c88f46",patch:`@@ -97,6 +97,7 @@
         - 特定のニーズを抱えた住民の所在 等
 - 避難・復旧時には、避難所運営･きめ細かい支援提供を技術でスムーズ化
     - 避難所での住民登録（チェックイン）や､医薬品の配送にマイナンバーカードや処方情報を活用
+    - 避難行動要支援者（＝緊急時に支援を必要とする避難者）について､プライバシーに配慮しつつ行政が事前に把握(非公開のDB化)
 
 ## デジタル技術を活用した､次世代の避難所運営(イメージ)
 `}]},{oid:"67a8443026d0a1d61fa88201a9a9457a18fcb126",message:`Update care.md: 防災パートのブロードリスニング反映

ブロードリスニングの結果を踏まえた修正｡\r
詳細な議論経緯は#66 を参照いただければ幸いです｡\r
\r
(1)テクノロジーだけではない､防災に関する課題の全体感と優先順位を示す\r
(2)安野候補にフォーカスしてほしい｢テクノロジーによる課題解決の加速｣について施策を追加･深堀り｡具体的には備蓄状況の可視化\r
(3)避難所運営→避難所運営･在宅避難者把握/支援 に変更 (政策の実態に即したもの)`,committedDate:"2024-07-01T14:47:11Z",author:{name:"HiroakiSato1106",email:"hsato1106@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/67a8443026d0a1d61fa88201a9a9457a18fcb126",associatedPullRequests:{edges:[{node:{number:259,title:"Update care.md: 防災パートのブロードリスニング反映",url:"https://github.com/takahiroanno2024/election2024/pull/259",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"7408fc1e68eee65065c2b1754fe33967e9dcaa80",filename:"docs/manifest/care.md",status:"modified",additions:25,deletions:8,changes:33,blob_url:"https://github.com/takahiroanno2024/election2024/blob/67a8443026d0a1d61fa88201a9a9457a18fcb126/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/67a8443026d0a1d61fa88201a9a9457a18fcb126/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=67a8443026d0a1d61fa88201a9a9457a18fcb126",patch:`@@ -65,15 +65,13 @@
 
 ## 人口が多い東京ならではの､災害リスクがある 一人ひとりの力を合わせれば､大きな備えになる
 
-- 東京は防災の面から見ると以下のような特徴がある
-    - 人口密度が6400人/㎢
+- 東京は ､防災の面から見ると以下のような特徴がある
+    - 人口密度が最も高い: 6400人/㎢
         - 迅速な避難や､きめ細かい支援の提供の難易度が高い
-    - 障がいのある方の人口が73万人、高齢者人口が311万人
+    - 障がいのある方の人口: 73万人、高齢者人口: 311万人
         - 多様なニーズを踏まえた､適切なケアを届ける必要がある
-    - 外国人人口が63万人
+    - 外国人人口: 63万人
         - 災害時でもインクルーシブな東京になることは､移住の後押しに
-- 東京都は､1,400万人の人口､680万の住戸を抱える世界最大級の都市である一方､常に地震や水害のリスクに晒されている
-    - この人口の多さは､東日本大震災や北陸震災とは異なる形での防災対応が必要とする
 - 人口の多さは防災対策を困難にする一方､災害対策の主体的な担い手となれる住民の数が多いことも意味する
     - 例えば発災直後に､一人ひとりがスマホを使って情報を収集し､リアルタイムで共有できる仕組みを活用できれば､災害発生直後に行政の支援が行き届かない時にも助け合いを促進することができるし､その後の行政の動きをスムーズにすることができる
 - ただし､そのように個人が情報発信できる仕組みにおいては､フェイクニュース対策が必要不可欠
@@ -82,6 +80,24 @@
     - そのうえで､AI･デジタル技術を活用した｢分散型｣の災害対策も進めていくことで､東京ならではのレジリエンスを実現したい
 - デジタルを活用し､一人ひとりの力を災害時に発揮することで､迅速･きめ細かい支援を実現する
 
+## テクノロジー活用の前提として､ハード･地域･主体それぞれの対応状況･都の施策充足状況を検証する｡加速すべき点と優先順位を明らかにし､重点投資を行う
+
+- ハード軸
+    - 避難所･在宅避難のインフラ整備
+    - 通信･電力インフラ: 民間投資も呼び込み､太陽光発電･蓄電池･衛星通信の整備    
+    - まちづくり: 河川改修､建築物不燃化･耐震化､無電柱化推進等
+- 地域軸
+    - 中心業務地区: 日本全体の核として業務継続能力を向上＆帰宅困難者対策 等
+    - 郊外地区: 被害抑制＆罹災時生活の質の担保 等
+    - 島嶼部: 一定期間自立可能な地域づくり､ヘリ等を活用した迅速な救助体制の整備 等
+- 主体軸
+    - 住民: 事前の防災意識の向上､家庭の備蓄促進 等
+    - 事業者: BCPプランの充実､備蓄の促進 等
+    - 都行政(消防･警察を含む)
+    - 他の行政主体(基礎自治体､国､自衛隊)
+    - × 主体間の相互連携のあり方
+- ※上記の軸に基づき､緊急度･対策の時間軸を踏まえて優先順位付けを行う｡具体的には､備蓄状況の可視化､電力/通信インフラ､建築物不燃化等の優先順位が高い可能性がある
+
 ## テクノロジーを活用し､公助を補完する分散型・自助の災害対策を進める
 
 - 事前の備えとして、デジタル技術を活用した､避難訓練の実効性を強化
@@ -95,8 +111,9 @@
         - AIによる誤情報対策も実施
     - 避難所運営においても､住民によるリアルタイムの情報を都が活用し､必要な支援をスムーズに届けられるようにする
         - 特定のニーズを抱えた住民の所在 等
-- 避難・復旧時には、避難所運営･きめ細かい支援提供を技術でスムーズ化
-    - 避難所での住民登録（チェックイン）や､医薬品の配送にマイナンバーカードや処方情報を活用
+- 避難・復旧時には、避難所運営･在宅避難者把握･きめ細かい支援提供を技術でスムーズ化
+    - 避難所での住民登録（チェックイン）､在宅避難者把握や､医薬品の配送にマイナンバーカードや処方情報を活用
+    - 官民による､備蓄状況や非常用電源の可視化(DB化)
 
 ## デジタル技術を活用した､次世代の避難所運営(イメージ)
 `}]},{oid:"1a87de704e299f0aa621ec5dba79b92b794c1ea6",message:`Merge pull request #42 from tomoto3/patch-8

Update economy.md`,committedDate:"2024-07-01T14:36:16Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/1a87de704e299f0aa621ec5dba79b92b794c1ea6",associatedPullRequests:{edges:[{node:{number:42,title:"Update economy.md",url:"https://github.com/takahiroanno2024/election2024/pull/42",comments:{nodes:[{body:"「強い技術企業が東京に集まるポテンシャル」があるという文脈で、中国より東京が（政治的に安定しているがゆえに）選ばれるという話ですので、外交問題等に触れるものではなく、特に問題はないかと思います。"}]},timelineItems:{nodes:[]}}}]},files:[{sha:"23aab87c9c114f699a2f2083a98ffd7601c1ca0a",filename:"docs/manifest/economy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/1a87de704e299f0aa621ec5dba79b92b794c1ea6/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/1a87de704e299f0aa621ec5dba79b92b794c1ea6/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=1a87de704e299f0aa621ec5dba79b92b794c1ea6",patch:`@@ -65,7 +65,7 @@
     - 「AIを使った製品とサービスには欠点よりも恩恵がある」の質問に対して、日本は42%が「そう思う」と回答<br/>イギリス38%、ドイツが37%、アメリカ35%、カナダ32%、フランス31%
 - 地政学観点
     - アジア太平洋地域において、東京が近年より重視されつつある
-        - 中国は地政学的リスクが高い
+        - 日本は東アジア地域の中で比較的地政学的リスクが低い
         - 日本の円安
 - OpenAI、Microsoft Research、Sakana AIなど、強い技術企業の拠点が東京に置かれ始めている
 `}]},{oid:"87d5d6242822ac8a7ef7fca849188eab9368acea",message:"Update docs/manifest/economy.md",committedDate:"2024-07-01T14:35:42Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/87d5d6242822ac8a7ef7fca849188eab9368acea",associatedPullRequests:{edges:[{node:{number:42,title:"Update economy.md",url:"https://github.com/takahiroanno2024/election2024/pull/42",comments:{nodes:[{body:"「強い技術企業が東京に集まるポテンシャル」があるという文脈で、中国より東京が（政治的に安定しているがゆえに）選ばれるという話ですので、外交問題等に触れるものではなく、特に問題はないかと思います。"}]},timelineItems:{nodes:[]}}}]},files:[{sha:"cf56dbc3975aa0269b43c8c5fbbbf40bb3579946",filename:"docs/manifest/economy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/87d5d6242822ac8a7ef7fca849188eab9368acea/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/87d5d6242822ac8a7ef7fca849188eab9368acea/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=87d5d6242822ac8a7ef7fca849188eab9368acea",patch:`@@ -65,7 +65,7 @@
     - 「AIを使った製品とサービスには欠点よりも恩恵がある」の質問に対して、日本は42%が「そう思う」と回答。イギリス38%、ドイツが37%、アメリカ35%、カナダ32%、フランス31%。
 - 地政学観点
     - アジア太平洋地域において、東京が近年より重視されつつある
-        - 特に東アジア地域は地政学的な課題を抱えている
+        - 日本は東アジア地域の中で比較的地政学的リスクが低い
         - 日本の円安
 - OpenAI、Microsoft Research、SakanaAIなど、強い技術企業の拠点が東京に置かれ始めている
 `}]},{oid:"e86fb4415d8a959372b0a50217b38d662557152b",message:`Merge pull request #154 from filialbrilliant/patch-1

東京都の少子化要因の多くが有配偶率低下であることの説明追加。`,committedDate:"2024-07-01T14:26:11Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/e86fb4415d8a959372b0a50217b38d662557152b",associatedPullRequests:{edges:[{node:{number:154,title:"東京都の少子化要因の多くが有配偶率低下であることの説明追加。",url:"https://github.com/takahiroanno2024/election2024/pull/154",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"610848a7525bd5e4ba055ab85bc73805e65ff83c",filename:"docs/manifest/education.md",status:"modified",additions:10,deletions:8,changes:18,blob_url:"https://github.com/takahiroanno2024/election2024/blob/e86fb4415d8a959372b0a50217b38d662557152b/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/e86fb4415d8a959372b0a50217b38d662557152b/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=e86fb4415d8a959372b0a50217b38d662557152b",patch:`@@ -22,14 +22,16 @@
     - 重点テーマは世界トップ大学の東京誘致
     - 具体施策は海外一流大学のキャンパス誘致、都立大学でのデュアル・ディグリー制度（複数学位取得制度）の推進
 
-## 東京都の出生率は歴史的に低いが､夫婦はより多くの子供を期待
-
-- 東京都の合計特殊出生率は低迷
-    - 2023年についに1を下回った
-        - 2023年度の合計特殊出生率は0.99
-        - 2023年の出生者数86347人、前年比4750人減少
-- 夫婦の理想子供数と現存子供数には大きな差があり､理想実現に向けたサポート余地が存在
-    - 夫婦の理想子ども数の平均は2.25だが、実際の出生子ども数は1.73と乖離
+## 東京都の少子化要因の多くが有配偶率の低下。有配偶者もより多くの子供を期待
+
+- 東京都の合計特殊出生率は低迷。
+    - 2023年についに1を下回った。
+        - 2023年度の合計特殊出生率は0.99。
+        - 2023年の出生者数86347人、前年比4750人減少。
+- 東京都は全国に比べて有配偶率が非常に低い。
+    - 有配偶率と有配偶出生率に要因分解すると、東京都は前者による押下げ要因が圧倒的に大きい。
+- 夫婦の理想子供数と現存子供数には大きな差があり､理想実現に向けたサポート余地が存在。
+    - 夫婦の理想子ども数の平均は2.25だが、実際の出生子ども数は1.73と乖離。
 
 ## ｢1人目の子供を持つ｣､｢3人以上の子供を持つ｣の2つの課題が存在
 `}]},{oid:"6c0ed6bdde474237648297278f25bc1fc1aeb279",message:"Merge branch 'main' into 「テクノロジーの力で」もう少し信頼できる包括的なデータを取る・取り続ける、発信",committedDate:"2024-07-01T14:10:56Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/6c0ed6bdde474237648297278f25bc1fc1aeb279",associatedPullRequests:{edges:[{node:{number:220,title:"医療パートのブロードリスニング取込み",url:"https://github.com/takahiroanno2024/election2024/pull/220",comments:{nodes:[{body:`#6 を見て検討していただいたようで、ありがとうございます。コメントで施策の案を出したものの一意見として、ここで出していただいた文案は、ひとまずいいのではないかと思います。もちろん個人的にはもっと踏み込んだ施策が入ればと思ってはいますが、少なくとも前進ではありますので。 (できれば #6 は閉じずに、都知事選が終わってからも議論が続くようなら嬉しく思います)\r
\r
2点ほど、いちおう追加の提案といたしまして :\r
\r
1. #74 も関連としてリンクしておいていいように思います。\r
2. https://github.com/takahiroanno2024/election2024/blob/91af15c7b0a91356a79156bebbc03e9df01ac688/docs/index.md#L28 にて「先輩世代：とことん安心の医療・防災」となっているのですが、感染症についてさえも「先輩世代」のみの問題ではなさそうですし、さらに防災については言わずもがなです。ここを「先輩世代」に限定する必要はあるでしょうか?\r
    * また、その前後の「現役世代：新産業で所得倍増」や「未来世代：世界一の子育て・教育環境」についても、世代で区切る必要はあるでしょうか? 所得は全世代に関係する話ですし、子育てはともかく「教育」はリスキリングも含めて「現役世代」にも関係する話です。ここであえて世代を限定する必要はないように思います。`}]},timelineItems:{nodes:[{subject:{number:6,title:"これからの感染症対応",url:"https://github.com/takahiroanno2024/election2024/issues/6"}}]}}}]},files:[{sha:"e015a085627fae7f28d87131c6539ba44d865ade",filename:"docs/manifest/administration.md",status:"modified",additions:5,deletions:5,changes:10,blob_url:"https://github.com/takahiroanno2024/election2024/blob/6c0ed6bdde474237648297278f25bc1fc1aeb279/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/6c0ed6bdde474237648297278f25bc1fc1aeb279/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=6c0ed6bdde474237648297278f25bc1fc1aeb279",patch:`@@ -10,7 +10,7 @@
     - 行政の高度化には取り組むべき課題が山積
 - マニフェスト
     - 便利さを実感できる行政サービスの提供
-        - 既存の取組を更に前に進め、行政手続のデジタル活用の100％徹底。
+        - 既存の取組を更に前に進め、行政手続のデジタル活用の100％徹底
         - 対面での手続きを維持するオムニチャンネルを前提に「行かせない」「書かせない」「待たせない」「迷わせない」行政手続の推進
         - 「プル型からプッシュ型へ」個人に合わせた施策パッケージをAI活用により提案
     - 徹底した情報公開により東京を透明に
@@ -24,9 +24,9 @@
 ## 現体制の下、東京都の構造改革・DXは一定進展
 
 - 行政手続きや内部事務のデジタル化の取り組みは確実に進展
-    - 行政手続のデジタル化は主要手続のうち都の権限で実行可能なものの約94％のデジタル化が完了。
-    - さらに、全行政手続（約28000プロセス）の22000プロセスについてデジタル化を実施。
-    - そのほか、キャッシュレス化、ペーパーレス化、FAXレス化も大きく進展。
+    - 行政手続のデジタル化は主要手続のうち都の権限で実行可能なものの約94％のデジタル化が完了
+    - さらに、全行政手続（約28000プロセス）の22000プロセスについてデジタル化を実施
+    - そのほか、キャッシュレス化、ペーパーレス化、FAXレス化も大きく進展
         - デジタルサービス開発時のユーザーテスト実施状況190件
         - スタートアップとの協働件数153件
         - 2023年12月末時点のオープンデータカタログサイトのデータファイル数63000件
@@ -84,7 +84,7 @@
 ## 誰も取り残さないプッシュ型の政策提供
 
 - これまでの行政サービスは、大量の情報から自分に合ったサービスを探す必要があり、面倒さや、使えるサービスに気づかないという漏れが生まれていた
-- 今後は、プッシュ型で必要な政策情報を取得できるようにする。
+- 今後は、プッシュ型で必要な政策情報を取得できるようにする
     - 本人情報や事前に入力した興味・関心から関連する政策をプッシュ型で提案（アプリやメールでの通知を想定）
 
 ## 見やすい・わかりやすい情報公開により東京都の透明化`},{sha:"f9d72a3a69870ea476f4cc670dcbfb271b63d5f6",filename:"docs/manifest/care.md",status:"modified",additions:28,deletions:26,changes:54,blob_url:"https://github.com/takahiroanno2024/election2024/blob/6c0ed6bdde474237648297278f25bc1fc1aeb279/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/6c0ed6bdde474237648297278f25bc1fc1aeb279/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=6c0ed6bdde474237648297278f25bc1fc1aeb279",patch:`@@ -31,28 +31,29 @@
         - 具体的な働き方改革実現の方法論がないまま目標だけが先走ってしまう。
 - 技術を使い、現役世代・高齢者の安心と医療従事者の働き方改革を両立させることはできないか？
 
-## 東京の高齢者のピークは2050年。医師が安心して働ける環境作りはまだ途上段階
+## 東京の高齢者のピークは2050年<br/>医師が安心して働ける環境作りはまだ途上段階
 
 - 高齢化のピークが訪れる。
-    - 2050年には都民の3人に1人が高齢者になると言われている。
+    - 2050年には都民の3人に1人が高齢者になると言われている
 - 医師の病院勤務時間における診療外の割合は24%
-    - 診察以外の勤務時間の割合が多い。
-- 医師の勤怠状況を把握している都内病院の割合は55%に留まる。
-    - 45%の病院は、自院の医師の勤務状況を把握しきれていない。
-- 来たる高齢化社会に向けて東京が十分な医療体制を整備できているかは不明瞭な点が多く、医師の働き方改革に具体的な推進策を示さなければならない。
+    - 診察以外の勤務時間の割合が多い
+- 医師の勤怠状況を把握している都内病院の割合は55%に留まる
+    - 45%の病院は、自院の医師の勤務状況を把握しきれていない
+- 来たる高齢化社会に向けて東京が十分な医療体制を整備できているかは不明瞭な点が多く、医師の働き方改革に具体的な推進策を示さなければならない
 
 ## 現役世代・高齢者が安心して一生を過ごすために、医療従事者の働き方改革に具体性のある解決策をAIで示す
 
-- 現役世代向けには、子供の発熱にも夜間休日の間に対応できて安心して暮らせる東京を作る。
+- 現役世代向けには、子供の発熱にも夜間休日の間に対応できて安心して暮らせる東京を作る
     - 夜間・休日オンライン診療と処方受け取りの充実
     - \`#7119\`(救急安心事業センター) / \`#8000\`(子ども医療電話相談事業) からオンライン診療窓口を含む医療機関紹介
     - オンライン診療とバックアップ医療機関の情報連携の動線整備
     - 24時間調剤薬局の充実、コンビニでの処方薬受け取りが可能な特区の設立に向けた手上げ
-- 高齢者とその家族向けには、自分らしい一生を家族と共有しながら安心して暮らせる東京を作る。
+    - 男性のHPVワクチン任意接種費用の全額助成
+- 高齢者とその家族向けには、自分らしい一生を家族と共有しながら安心して暮らせる東京を作る
     - ”自分らしい生き方”をアプリで定期的に振り返り周囲の人と共有
-    - 認知症になった場合も含めて、自分の思いの通りに健康・財産の管理ができる安全な仕組みを技術で作りあげる。
-    - 自身の治療方針をアプリに登録・定期的な更新を行うことで、意図しない治療・延命が行われることを防ぐ。
-- 医療従事者向けには、医師本来の仕事に集中し、安心して働ける東京を作る。
+    - 認知症になった場合も含めて、自分の思いの通りに健康・財産の管理ができる安全な仕組みを技術で作りあげる
+    - 自身の治療方針をアプリに登録・定期的な更新を行うことで、意図しない治療・延命が行われることを防ぐ
+- 医療従事者向けには、医師本来の仕事に集中し、安心して働ける東京を作る
     - 病院や介護施設の利用状況をデータベースとして最新化し、患者属性と掛け合わせ転院調整の自動マッチングし、”下り搬送”に関する医師の手間を圧縮
     - 生成AIを用いた入退院サマリの作成補助。
         - 七尾市の恵寿総合病院における実証実験では1/3の業務を自動化した実証実験結果あり。
@@ -61,37 +62,38 @@
     - コロナ後遺症・認知症初期症状発症者の現状に関する実地調査や検査キット配布の拡充
     - ネット情報の真偽のプロアクティブな判定・判別
 
+
 ## 人口が多い東京ならではの､災害リスクがある 一人ひとりの力を合わせれば､大きな備えになる
 
-- 東京は防災の面から見ると以下のような特徴があります。
+- 東京は防災の面から見ると以下のような特徴がある
     - 人口密度が6400人/㎢
-        - 迅速な避難や､きめ細かい支援の提供の難易度が高い。
+        - 迅速な避難や､きめ細かい支援の提供の難易度が高い
     - 障がいのある方の人口が73万人、高齢者人口が311万人
-        - 多様なニーズを踏まえた､適切なケアを届ける必要がある。
+        - 多様なニーズを踏まえた､適切なケアを届ける必要がある
     - 外国人人口が63万人
         - 災害時でもインクルーシブな東京になることは､移住の後押しに
-- 東京都は､1,400万人の人口､680万の住戸を抱える世界最大級の都市である一方､常に地震や水害のリスクに晒されています｡
-    - この人口の多さは､東日本大震災や北陸震災とは異なる形での防災対応が必要とする。
-- 人口の多さは防災対策を困難にする一方､災害対策の主体的な担い手となれる住民の数が多いことも意味します｡
+- 東京都は､1,400万人の人口､680万の住戸を抱える世界最大級の都市である一方､常に地震や水害のリスクに晒されている
+    - この人口の多さは､東日本大震災や北陸震災とは異なる形での防災対応が必要とする
+- 人口の多さは防災対策を困難にする一方､災害対策の主体的な担い手となれる住民の数が多いことも意味する
     - 例えば発災直後に､一人ひとりがスマホを使って情報を収集し､リアルタイムで共有できる仕組みを活用できれば､災害発生直後に行政の支援が行き届かない時にも助け合いを促進することができるし､その後の行政の動きをスムーズにすることができる
-- ただし､そのように個人が情報発信できる仕組みにおいては､フェイクニュース対策が必要不可欠です｡
-    - AI技術を活用し､信頼できる分散型の情報インフラを構築します。
-- もちろん､適切な救助・支援を実施するために都内市町村との間での連携方法は引き続き強化します｡
-    - そのうえで､AI･デジタル技術を活用した｢分散型｣の災害対策も進めていくことで､東京ならではのレジリエンスを実現したい。
-- デジタルを活用し､一人ひとりの力を災害時に発揮することで､迅速･きめ細かい支援を実現します。
+- ただし､そのように個人が情報発信できる仕組みにおいては､フェイクニュース対策が必要不可欠
+    - AI技術を活用し､信頼できる分散型の情報インフラを構築する
+- もちろん､適切な救助・支援を実施するために都内市町村との間での連携方法は引き続き強化する
+    - そのうえで､AI･デジタル技術を活用した｢分散型｣の災害対策も進めていくことで､東京ならではのレジリエンスを実現したい
+- デジタルを活用し､一人ひとりの力を災害時に発揮することで､迅速･きめ細かい支援を実現する
 
 ## テクノロジーを活用し､公助を補完する分散型・自助の災害対策を進める
 
 - 事前の備えとして、デジタル技術を活用した､避難訓練の実効性を強化
     - スマホを活用して､自宅やオフィスから避難訓練を｢いつでも｣行える仕組み
-        - （ある道路が火災で封鎖されている､などのケースもAIを用いて作成可能）｡
-        - 通常の避難訓練は一斉に行う必要があるが､非同期化することで参加率･回数を高められる。
-    - また､その際に､避難所においてマイナンバーカード等でチェックインを行うことで､非同期であっても避難訓練の参加率を把握し､都が啓発･普及に役立てることができる｡
+        - （ある道路が火災で封鎖されている､などのケースもAIを用いて作成可能）
+        - 通常の避難訓練は一斉に行う必要があるが､非同期化することで参加率･回数を高められる
+    - また､その際に､避難所においてマイナンバーカード等でチェックインを行うことで､非同期であっても避難訓練の参加率を把握し､都が啓発･普及に役立てることができる
         - チェックインを行った住民にポイント等を付与することで､インセンティブ付けを行うことも選択肢の一つ
 - 発災直後には、住民が自ら情報提供できる分散型情報インフラの構築
     - 行政の支援が届く前に､現場の情報を共有できる仕組み
         - AIによる誤情報対策も実施
-    - 避難所運営においても､住民によるリアルタイムの情報を都が活用し､必要な支援をスムーズに届けられるようにする。
+    - 避難所運営においても､住民によるリアルタイムの情報を都が活用し､必要な支援をスムーズに届けられるようにする
         - 特定のニーズを抱えた住民の所在 等
 - 避難・復旧時には、避難所運営･きめ細かい支援提供を技術でスムーズ化
     - 避難所での住民登録（チェックイン）や､医薬品の配送にマイナンバーカードや処方情報を活用`},{sha:"a3d08d465f4f3441635e5b4bc8f01c803f7da0d5",filename:"docs/manifest/democracy.md",status:"modified",additions:12,deletions:4,changes:16,blob_url:"https://github.com/takahiroanno2024/election2024/blob/6c0ed6bdde474237648297278f25bc1fc1aeb279/docs%2Fmanifest%2Fdemocracy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/6c0ed6bdde474237648297278f25bc1fc1aeb279/docs%2Fmanifest%2Fdemocracy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fdemocracy.md?ref=6c0ed6bdde474237648297278f25bc1fc1aeb279",patch:`@@ -30,7 +30,7 @@
 ## ①都民の声を広く・早く聴く「ブロードリスニング」
 
 - 都から情報を広く知らしめる「ブロードキャスト」だけでなく、都民の声を広く聴く「ブロードリスニング」をテクノロジーの力で実現する
-- 集める声の広さを担保すべく、既存の「都政への要望・提言」手段に加え、意見表明のハードルをより下げるような新手段を提案する。
+- 集める声の広さを担保すべく、既存の「都政への要望・提言」手段に加え、意見表明のハードルをより下げるような新手段を提案する
     - LINEの活用、「東京アプリ」の開発など
 - 集まった声は技術を活用しわかりやすくレポート化し公開する。都議会において政策検討に活かすのはもちろん、都民自身が都政を知り考える材料とすることが可能になる
 
@@ -99,13 +99,14 @@
 ## 都民向け「都政参加プラットフォーム」を構築・活性化する
 
 - 都民参加型予算編成
-    - 世界3,000以上の都市で実施されている「参加型予算編成」を東京で本格展開。現在の「都民提案」を改善していく。
+    - 世界3,000以上の都市で実施されている「参加型予算編成」を東京で本格展開。現在の「都民提案」を改善していく
     - Quadratic Votingなど必要な仕組みを取り入れ、納得感をあげていく
 - 都民による政策提案
-    - 様々なイシューに対し、選挙期間に限らず都民が自由に政策提案できるプラットフォームを。
+    - 様々なイシューに対し、選挙期間に限らず都民が自由に政策提案できるプラットフォームを
     - 都民からの賛同を一定得たものは、都議会での議題に挙げる
 - 都民による政策議論
-    - 都議会の論点に対して、都民からも広く意見を募集。
+    - 都議会の論点に対して、都民からも広く意見を募集
+    - 公的な情報発信を担うWEBサイトやアプリに意見投稿の導線を追加し、気になったことをその場でフィードバックできるようにする
     - どういった意見があるのかを可視化し、閉じた議会の中だけでは得られない視点を取り込んでよりよい政策決定へ
 
 ## 政治参加の課題である「参加率の低迷」を打破する
@@ -124,3 +125,10 @@
     - 事業提案を気軽にできる広報を行う。政治の専門知識がなくとも、身近に感じる課題から気軽に提案を挙げてもらう
 - 人間の苦手をデジタルで補い、より広く・早い民意反映で、東京都をアップデートする
     - 少子高齢化の加速する日本・東京において、「今までと同じやり方」では現状維持も難しい。人の弱点を補い・負担を軽減するデジタル活用で、よりよい都政を実現する
+      
+## デジタル民主主義における情報の質・場の質をテクノロジーで担保する
+- ブロードリスニングや政策提案においては、都民であることを厳密管理はしない
+    - デジタル民主主義では、意見を多数決で採用したりせず、出てきた意見を基にエビデンスを踏まえて政策立案を行う
+    - そのため意見表明の段階では、身分確認などでハードルを上げるのではなく、広く参加しやすいプラットフォームを提供する
+- 一方で、投票などで数を意思決定の基準とする場合は、マイナンバーカードなどのテクノロジーを活用し、東京都民を正しく絞り込む
+- 著しく不適切なコメント（攻撃的・差別的コメントなど）については、今回のgithubの仕組みでも活用しているAIによるフィルタリングを用いて、コメント別に管理をしていく`},{sha:"b8a4c616e96d413561afff7b45c52bad4b4fb08d",filename:"docs/manifest/economy.md",status:"modified",additions:20,deletions:19,changes:39,blob_url:"https://github.com/takahiroanno2024/election2024/blob/6c0ed6bdde474237648297278f25bc1fc1aeb279/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/6c0ed6bdde474237648297278f25bc1fc1aeb279/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=6c0ed6bdde474237648297278f25bc1fc1aeb279",patch:`@@ -38,9 +38,9 @@
 ## 強い技術企業の育成・誘致できると、経済が活性化し所得水準が向上
 
 - 強い技術企業の育成・誘致が所得向上に繋がった事例
-    - 自動車産業...世界有数の大企業であるトヨタの本社周辺には「企業城下町」と呼ばれる都市が形成されている。
-    - ソフトウェア産業...米西海岸のベイエリアやインドのバンガロールには大学・研究機関が集積していたため、強い技術企業が拠点を置いたことで新しい街が生まれた。
-    - 半導体産業...熊本県では半導体工場誘致に伴い、人口流入が顕著。TSMC直雇用は2000人程度だが、暮らしを支える産業が登場することでそのほかにもたくさんの雇用が生まれ経済効果も出ている。
+    - 自動車産業...世界有数の大企業であるトヨタの本社周辺には「企業城下町」と呼ばれる都市が形成されている
+    - ソフトウェア産業...米西海岸のベイエリアやインドのバンガロールには大学・研究機関が集積していたため、強い技術企業が拠点を置いたことで新しい街が生まれた
+    - 半導体産業...熊本県では半導体工場誘致に伴い、人口流入が顕著。TSMC直雇用は2000人程度だが、暮らしを支える産業が登場することでそのほかにもたくさんの雇用が生まれ経済効果も出ている
 
 ## 技術企業が集まると、既存産業のさらなる発展にも繋がる
 
@@ -62,7 +62,7 @@
     - 東京は働きたい都市
         - Google等のエンジニアにも東京オフィスで働くことは人気
 - AIに親和的な法規制・文化
-    - 「AIを使った製品とサービスには欠点よりも恩恵がある」の質問に対して、日本は42%が「そう思う」と回答。イギリス38%、ドイツが37%、アメリカ35%、カナダ32%、フランス31%。
+    - 「AIを使った製品とサービスには欠点よりも恩恵がある」の質問に対して、日本は42%が「そう思う」と回答<br/>イギリス38%、ドイツが37%、アメリカ35%、カナダ32%、フランス31%
 - 地政学観点
     - アジア太平洋地域において、東京が近年より重視されつつある
         - 中国は地政学的リスクが高い
@@ -72,8 +72,8 @@
 ## 「集め、育てる」機能をさらに伸ばす必要
 
 - 産業を「育てる」ための課題
-    - 創業初期の支援制度は充実してきている。
-    - 一方で、事業の成長期を支えるための環境整備は不十分。
+    - 創業初期の支援制度は充実してきている
+    - 一方で、事業の成長期を支えるための環境整備は不十分
         - レイターステージのための大型資金（海外投資家）が不足
         - 社会インフラとなる事業を実装し、育てるためのフィールドが不足
 - 人を「集める」ための課題
@@ -100,25 +100,26 @@
 ## 東京西部では「新しいモビリティのあり方」が喫緊の課題
 
 - 人口減少で難しくなる公共交通の維持
-    - 東京都の人口は2025年〜2030年をピークに減少。
-    - 人口減少と、高齢化で外出が減ることで、公共交通が利用されなくなると、バスやタクシーのサービス水準の維持が困難に。
+    - 東京都の人口は2025年〜2030年をピークに減少
+    - 人口減少と、高齢化で外出が減ることで、公共交通が利用されなくなると、バスやタクシーのサービス水準の維持が困難に
     - 東京都の後期高齢者の増加数（2015年→2025年）は54.0万人*（推計）で全国1位！
         - 高齢者の居住安定確保プラン（平成30年3月/東京都住宅政策本部）からのデータ
 - バスやタクシーの担い手が不足
-    - 多摩・島しょ地域を中心に、人手不足でバスの減便が相次いでいる。
-    - バスやタクシーの担い手の皆さんの業務をサポートする仕組みが必要。
-        - バス運転手の平均年齢は53.4歳*と高齢化が進んでいる。
+    - 多摩・島しょ地域を中心に、人手不足でバスの減便が相次いでいる
+    - バスやタクシーの担い手の皆さんの業務をサポートする仕組みが必要
+        - バス運転手の平均年齢は53.4歳*と高齢化が進んでいる
             - 令和５年版 国土交通白書（国土交通省）からのデータ
 - 交通が不便な地域では免許返納が不安
-    - 東京都の交通不便地域には、23区で66万人、多摩地域で145万人の方が暮らしている。
+    - 東京都の交通不便地域には、23区で66万人、多摩地域で145万人の方が暮らしている
         - 東京都における地域公共交通の在り方検討会より
         - 交通不便地域：平均傾斜角度が2%以上の急峻な地形のエリア、又は、鉄道駅800m、バス停（30本/日以上）300m圏域外のエリア
-    - 高齢者の方々からは、免許返納したら外出が減り、健康的な生活が送れなくなると不安の声がある。
+    - 高齢者の方々からは、免許返納したら外出が減り、健康的な生活が送れなくなると不安の声がある
 
 ## 世界では自動運転は実用化され始めている
 
-- アメリカ・サンフランシスコや中国・北京で無人タクシーのサービスが始まっています。Google系列のWaymoなどが実施しています。
-- 日本でも2023年4月に改正道路交通法が施行され、特定条件下では、遠隔監視のみで、運転手が乗車しない無人自動運転の路線バスなどを運行できるようになりました。
+- アメリカ・サンフランシスコや中国・北京で無人タクシーのサービスが始まっている
+- Google系列のWaymoなどが実施している
+- 日本でも2023年4月に改正道路交通法が施行され、特定条件下では、遠隔監視のみで、運転手が乗車しない無人自動運転の路線バスなどを運行できるようになった
 
 ## 自動運転で、誰もが自由に外出できる社会を実現！
 
@@ -139,15 +140,15 @@
 ## 生成AIによる言語障壁/暮らしのインフラ整備の課題解決
 
 - これまで
-    - 「東京で住む」ための手続きは大変。それぞれのDXは進んでいるが行政手続・住居・銀行口座開設という3つの準備を整えるまでに労力がかかる。
+    - 「東京で住む」ための手続きは大変。それぞれのDXは進んでいるが行政手続・住居・銀行口座開設という3つの準備を整えるまでに労力がかかる
         - 初めて東京に引っ越してきた際に「手続きの手戻りが繰り返し発生して『悪魔の循環』が発生した」と言う声複数（ヒアリングによる）
 - これから
-    - 生成AIを活用して「東京に住むために必要なこと」が一目でわかり、手続きがスムーズに。
-        - 東京での暮らしを始める上で必要な手続きが一目でわかり、スムーズに。
+    - 生成AIを活用して「東京に住むために必要なこと」が一目でわかり、手続きがスムーズに
+        - 東京での暮らしを始める上で必要な手続きが一目でわかり、スムーズに
         - 行政手続きはもちろん、住宅や生活インフラ申込など民間事業者にまつわる手続きのワンストップ化の方策も検討
 
 ## 中高一貫の都立インターナショナルスクール設置・増設
 
 - 東京に住みたいと思う技術者・研究者は多いが、トップレベルのインターナショナルスクールが少なく「子供を育てられない」と諦めることが多い
-- 優れたインターナショナルスクールの東京誘致により世界の技術者・研究者が「家族で住める」東京へ。
+- 優れたインターナショナルスクールの東京誘致により世界の技術者・研究者が「家族で住める」東京へ
     - 合わせて都内公立中高のインターナショナルスクール化支援を実施し、東京近郊の中高生に最高峰のグローバル教育環境を提供`},{sha:"90f79af0e273f0eb19cfdb60f632deefe58001f9",filename:"docs/manifest/education.md",status:"modified",additions:12,deletions:6,changes:18,blob_url:"https://github.com/takahiroanno2024/election2024/blob/6c0ed6bdde474237648297278f25bc1fc1aeb279/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/6c0ed6bdde474237648297278f25bc1fc1aeb279/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=6c0ed6bdde474237648297278f25bc1fc1aeb279",patch:`@@ -20,7 +20,7 @@
 - 大学
     - 課題は学術都市としてのポテンシャルを活かしきれていない
     - 重点テーマは世界トップ大学の東京誘致
-    - 具体施策は海外一流大学のキャンパス誘致、都立大学でのデュアル・ディグリー推進
+    - 具体施策は海外一流大学のキャンパス誘致、都立大学でのデュアル・ディグリー制度（複数学位取得制度）の推進
 
 ## 東京都の出生率は歴史的に低いが､夫婦はより多くの子供を期待
 
@@ -55,7 +55,7 @@
     - 不妊治療に向けた休暇をとりやすい制度や柔軟な働き方の実現に向けて提言する
 - 子育ての経済的負担に向けての支援
     - 子育て世帯に向けて、家賃の一部を割引する制度を拡充します
-    - 教育費（塾代・受験料）に向けての貸付事業を、所得制限に応じて給付制度とします
+    - 教育費（塾代・受験料）を支援する制度を整備します
 
 ## 不妊治療の3つの負担をサポートします
 
@@ -75,7 +75,13 @@
 - 教育費用
     - 既存政策では中学3年生・高校3年生（またはこれに準ずる者）を対象に塾費用や受験料の無利子での貸付
         - 東京都社会福祉協議会による受験生チャレンジ支援貸付事業
-    - 我々の提案は、所得制限に応じて、貸与から給付へ転換すること
+        - 018サポートや、第二子の保育料無償化
+    - 我々の提案は、以下の支援を通して教育費を支援する
+        - 民間の教育費負担（塾代や課外活動など）に対する教育バウチャー（5000円/月）を配布
+            - 中学3年生・高校3年生（またはこれに準ずる者）を対象とする
+        - 高校受験料を支援
+        - 第一子保育料を無償化する
+        - 018サポートなど、現存する支援策は踏襲する
 
 ## 保育・学童クラブでは、量より質の議論へ
 
@@ -89,8 +95,8 @@
 
 ## 幼児教育・小学校の放課後を効率よく、豊かに
 
-- STEAM活動に触れられる新世代児童館の設置
-    - 児童館等、子どもの放課後施設でSTEAM活動に触れられるようなハード（3Dプリンターなど）・ソフト（コンテンツ・スタッフ）を整備し児童生徒がテクノロジーに触れられる環境を作る
+- STEAM活動（Science、Technology、Engineering、Art、Mathematics）に触れられる新世代児童館の設置
+    - 児童館等、子どもの放課後施設でSTEAM活動に触れられるようなハード（3Dプリンターなど）・ソフト（コンテンツ・スタッフ）を整備し児童生徒がテクノロジーに触れられる環境を作る。
     - 基礎自治体が新世代児童館に拡充する際に助成し、転換を促進する
 - 学童・保育業務のDX推進
     - 学童・保育業務の中で共通してDX化できる部分のDX化支援を都が行う（情報発信プラットフォームの共通化など）
@@ -177,7 +183,7 @@
     - ニューヨーク大学はアブダビ（アラブ首長国連邦）・上海に分校を設置
     - イェール大学はシンガポール国立大学と共同で「Yale-NUS大学」を設立（ただし2025年に閉校予定）
     - 都知事のリーダーシップのもと、キャンパス誘致を強化
-- 都立大学でのデュアル・ディグリーの推進
+- 都立大学でのデュアル・ディグリー制度（複数学位取得制度）の推進
     - 東京都立大学と海外大学との共通単位を実現していく
         - 日本と海外の両方の学位を、それぞれ個別に取得するよりも短い期間で取得できるプログラム
         - 海外大学の学生が東京都立大学の学位取得のため東京に訪れる機会を創出し、人材交流を図れる`}]},{oid:"190d7c56aad0a71c7f1d2d6b2bf48b0448194231",message:`Merge pull request #238 from masatosasano2/end-of-sentence-fix

End of sentence fix`,committedDate:"2024-07-01T14:07:03Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/190d7c56aad0a71c7f1d2d6b2bf48b0448194231",associatedPullRequests:{edges:[{node:{number:238,title:"End of sentence fix",url:"https://github.com/takahiroanno2024/election2024/pull/238",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"e015a085627fae7f28d87131c6539ba44d865ade",filename:"docs/manifest/administration.md",status:"modified",additions:5,deletions:5,changes:10,blob_url:"https://github.com/takahiroanno2024/election2024/blob/190d7c56aad0a71c7f1d2d6b2bf48b0448194231/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/190d7c56aad0a71c7f1d2d6b2bf48b0448194231/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=190d7c56aad0a71c7f1d2d6b2bf48b0448194231",patch:`@@ -10,7 +10,7 @@
     - 行政の高度化には取り組むべき課題が山積
 - マニフェスト
     - 便利さを実感できる行政サービスの提供
-        - 既存の取組を更に前に進め、行政手続のデジタル活用の100％徹底。
+        - 既存の取組を更に前に進め、行政手続のデジタル活用の100％徹底
         - 対面での手続きを維持するオムニチャンネルを前提に「行かせない」「書かせない」「待たせない」「迷わせない」行政手続の推進
         - 「プル型からプッシュ型へ」個人に合わせた施策パッケージをAI活用により提案
     - 徹底した情報公開により東京を透明に
@@ -24,9 +24,9 @@
 ## 現体制の下、東京都の構造改革・DXは一定進展
 
 - 行政手続きや内部事務のデジタル化の取り組みは確実に進展
-    - 行政手続のデジタル化は主要手続のうち都の権限で実行可能なものの約94％のデジタル化が完了。
-    - さらに、全行政手続（約28000プロセス）の22000プロセスについてデジタル化を実施。
-    - そのほか、キャッシュレス化、ペーパーレス化、FAXレス化も大きく進展。
+    - 行政手続のデジタル化は主要手続のうち都の権限で実行可能なものの約94％のデジタル化が完了
+    - さらに、全行政手続（約28000プロセス）の22000プロセスについてデジタル化を実施
+    - そのほか、キャッシュレス化、ペーパーレス化、FAXレス化も大きく進展
         - デジタルサービス開発時のユーザーテスト実施状況190件
         - スタートアップとの協働件数153件
         - 2023年12月末時点のオープンデータカタログサイトのデータファイル数63000件
@@ -84,7 +84,7 @@
 ## 誰も取り残さないプッシュ型の政策提供
 
 - これまでの行政サービスは、大量の情報から自分に合ったサービスを探す必要があり、面倒さや、使えるサービスに気づかないという漏れが生まれていた
-- 今後は、プッシュ型で必要な政策情報を取得できるようにする。
+- 今後は、プッシュ型で必要な政策情報を取得できるようにする
     - 本人情報や事前に入力した興味・関心から関連する政策をプッシュ型で提案（アプリやメールでの通知を想定）
 
 ## 見やすい・わかりやすい情報公開により東京都の透明化`},{sha:"c16166db49611f5abd2a5c01622d011d4a241a73",filename:"docs/manifest/care.md",status:"modified",additions:28,deletions:28,changes:56,blob_url:"https://github.com/takahiroanno2024/election2024/blob/190d7c56aad0a71c7f1d2d6b2bf48b0448194231/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/190d7c56aad0a71c7f1d2d6b2bf48b0448194231/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=190d7c56aad0a71c7f1d2d6b2bf48b0448194231",patch:`@@ -30,64 +30,64 @@
         - 具体的な働き方改革実現の方法論がないまま目標だけが先走ってしまう。
 - 技術を使い、現役世代・高齢者の安心と医療従事者の働き方改革を両立させることはできないか？
 
-## 東京の高齢者のピークは2050年。医師が安心して働ける環境作りはまだ途上段階
+## 東京の高齢者のピークは2050年<br/>医師が安心して働ける環境作りはまだ途上段階
 
 - 高齢化のピークが訪れる。
-    - 2050年には都民の3人に1人が高齢者になると言われている。
+    - 2050年には都民の3人に1人が高齢者になると言われている
 - 医師の病院勤務時間における診療外の割合は24%
-    - 診察以外の勤務時間の割合が多い。
-- 医師の勤怠状況を把握している都内病院の割合は55%に留まる。
-    - 45%の病院は、自院の医師の勤務状況を把握しきれていない。
-- 来たる高齢化社会に向けて東京が十分な医療体制を整備できているかは不明瞭な点が多く、医師の働き方改革に具体的な推進策を示さなければならない。
+    - 診察以外の勤務時間の割合が多い
+- 医師の勤怠状況を把握している都内病院の割合は55%に留まる
+    - 45%の病院は、自院の医師の勤務状況を把握しきれていない
+- 来たる高齢化社会に向けて東京が十分な医療体制を整備できているかは不明瞭な点が多く、医師の働き方改革に具体的な推進策を示さなければならない
 
 ## 現役世代・高齢者が安心して一生を過ごすために、医療従事者の働き方改革に具体性のある解決策をAIで示す
 
-- 現役世代向けには、子供の発熱にも夜間休日の間に対応できて安心して暮らせる東京を作る。
+- 現役世代向けには、子供の発熱にも夜間休日の間に対応できて安心して暮らせる東京を作る
     - 夜間・休日オンライン診療と処方受け取りの充実
     - \`#7119\`(救急安心事業センター) / \`#8000\`(子ども医療電話相談事業) からオンライン診療窓口を含む医療機関紹介
     - オンライン診療とバックアップ医療機関の情報連携の動線整備
     - 24時間調剤薬局の充実、コンビニでの処方薬受け取りが可能な特区の設立に向けた手上げ
     - 男性のHPVワクチン任意接種費用の全額助成
-- 高齢者とその家族向けには、自分らしい一生を家族と共有しながら安心して暮らせる東京を作る。
+- 高齢者とその家族向けには、自分らしい一生を家族と共有しながら安心して暮らせる東京を作る
     - ”自分らしい生き方”をアプリで定期的に振り返り周囲の人と共有
-    - 認知症になった場合も含めて、自分の思いの通りに健康・財産の管理ができる安全な仕組みを技術で作りあげる。
-    - 自身の治療方針をアプリに登録・定期的な更新を行うことで、意図しない治療・延命が行われることを防ぐ。
-- 医療従事者向けには、医師本来の仕事に集中し、安心して働ける東京を作る。
+    - 認知症になった場合も含めて、自分の思いの通りに健康・財産の管理ができる安全な仕組みを技術で作りあげる
+    - 自身の治療方針をアプリに登録・定期的な更新を行うことで、意図しない治療・延命が行われることを防ぐ
+- 医療従事者向けには、医師本来の仕事に集中し、安心して働ける東京を作る
     - 病院や介護施設の利用状況をデータベースとして最新化し、患者属性と掛け合わせ転院調整の自動マッチングし、”下り搬送”に関する医師の手間を圧縮
-    - 生成AIを用いた入退院サマリの作成補助。
-        - 七尾市の恵寿総合病院における実証実験では1/3の業務を自動化した実証実験結果あり。
+    - 生成AIを用いた入退院サマリの作成補助
+        - 七尾市の恵寿総合病院における実証実験では1/3の業務を自動化した実証実験結果あり
 
 ## 人口が多い東京ならではの､災害リスクがある 一人ひとりの力を合わせれば､大きな備えになる
 
-- 東京は防災の面から見ると以下のような特徴があります。
+- 東京は防災の面から見ると以下のような特徴がある
     - 人口密度が6400人/㎢
-        - 迅速な避難や､きめ細かい支援の提供の難易度が高い。
+        - 迅速な避難や､きめ細かい支援の提供の難易度が高い
     - 障がいのある方の人口が73万人、高齢者人口が311万人
-        - 多様なニーズを踏まえた､適切なケアを届ける必要がある。
+        - 多様なニーズを踏まえた､適切なケアを届ける必要がある
     - 外国人人口が63万人
         - 災害時でもインクルーシブな東京になることは､移住の後押しに
-- 東京都は､1,400万人の人口､680万の住戸を抱える世界最大級の都市である一方､常に地震や水害のリスクに晒されています｡
-    - この人口の多さは､東日本大震災や北陸震災とは異なる形での防災対応が必要とする。
-- 人口の多さは防災対策を困難にする一方､災害対策の主体的な担い手となれる住民の数が多いことも意味します｡
+- 東京都は､1,400万人の人口､680万の住戸を抱える世界最大級の都市である一方､常に地震や水害のリスクに晒されている
+    - この人口の多さは､東日本大震災や北陸震災とは異なる形での防災対応が必要とする
+- 人口の多さは防災対策を困難にする一方､災害対策の主体的な担い手となれる住民の数が多いことも意味する
     - 例えば発災直後に､一人ひとりがスマホを使って情報を収集し､リアルタイムで共有できる仕組みを活用できれば､災害発生直後に行政の支援が行き届かない時にも助け合いを促進することができるし､その後の行政の動きをスムーズにすることができる
-- ただし､そのように個人が情報発信できる仕組みにおいては､フェイクニュース対策が必要不可欠です｡
-    - AI技術を活用し､信頼できる分散型の情報インフラを構築します。
-- もちろん､適切な救助・支援を実施するために都内市町村との間での連携方法は引き続き強化します｡
-    - そのうえで､AI･デジタル技術を活用した｢分散型｣の災害対策も進めていくことで､東京ならではのレジリエンスを実現したい。
-- デジタルを活用し､一人ひとりの力を災害時に発揮することで､迅速･きめ細かい支援を実現します。
+- ただし､そのように個人が情報発信できる仕組みにおいては､フェイクニュース対策が必要不可欠
+    - AI技術を活用し､信頼できる分散型の情報インフラを構築する
+- もちろん､適切な救助・支援を実施するために都内市町村との間での連携方法は引き続き強化する
+    - そのうえで､AI･デジタル技術を活用した｢分散型｣の災害対策も進めていくことで､東京ならではのレジリエンスを実現したい
+- デジタルを活用し､一人ひとりの力を災害時に発揮することで､迅速･きめ細かい支援を実現する
 
 ## テクノロジーを活用し､公助を補完する分散型・自助の災害対策を進める
 
 - 事前の備えとして、デジタル技術を活用した､避難訓練の実効性を強化
     - スマホを活用して､自宅やオフィスから避難訓練を｢いつでも｣行える仕組み
-        - （ある道路が火災で封鎖されている､などのケースもAIを用いて作成可能）｡
-        - 通常の避難訓練は一斉に行う必要があるが､非同期化することで参加率･回数を高められる。
-    - また､その際に､避難所においてマイナンバーカード等でチェックインを行うことで､非同期であっても避難訓練の参加率を把握し､都が啓発･普及に役立てることができる｡
+        - （ある道路が火災で封鎖されている､などのケースもAIを用いて作成可能）
+        - 通常の避難訓練は一斉に行う必要があるが､非同期化することで参加率･回数を高められる
+    - また､その際に､避難所においてマイナンバーカード等でチェックインを行うことで､非同期であっても避難訓練の参加率を把握し､都が啓発･普及に役立てることができる
         - チェックインを行った住民にポイント等を付与することで､インセンティブ付けを行うことも選択肢の一つ
 - 発災直後には、住民が自ら情報提供できる分散型情報インフラの構築
     - 行政の支援が届く前に､現場の情報を共有できる仕組み
         - AIによる誤情報対策も実施
-    - 避難所運営においても､住民によるリアルタイムの情報を都が活用し､必要な支援をスムーズに届けられるようにする。
+    - 避難所運営においても､住民によるリアルタイムの情報を都が活用し､必要な支援をスムーズに届けられるようにする
         - 特定のニーズを抱えた住民の所在 等
 - 避難・復旧時には、避難所運営･きめ細かい支援提供を技術でスムーズ化
     - 避難所での住民登録（チェックイン）や､医薬品の配送にマイナンバーカードや処方情報を活用`},{sha:"a3d08d465f4f3441635e5b4bc8f01c803f7da0d5",filename:"docs/manifest/democracy.md",status:"modified",additions:5,deletions:5,changes:10,blob_url:"https://github.com/takahiroanno2024/election2024/blob/190d7c56aad0a71c7f1d2d6b2bf48b0448194231/docs%2Fmanifest%2Fdemocracy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/190d7c56aad0a71c7f1d2d6b2bf48b0448194231/docs%2Fmanifest%2Fdemocracy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fdemocracy.md?ref=190d7c56aad0a71c7f1d2d6b2bf48b0448194231",patch:`@@ -30,7 +30,7 @@
 ## ①都民の声を広く・早く聴く「ブロードリスニング」
 
 - 都から情報を広く知らしめる「ブロードキャスト」だけでなく、都民の声を広く聴く「ブロードリスニング」をテクノロジーの力で実現する
-- 集める声の広さを担保すべく、既存の「都政への要望・提言」手段に加え、意見表明のハードルをより下げるような新手段を提案する。
+- 集める声の広さを担保すべく、既存の「都政への要望・提言」手段に加え、意見表明のハードルをより下げるような新手段を提案する
     - LINEの活用、「東京アプリ」の開発など
 - 集まった声は技術を活用しわかりやすくレポート化し公開する。都議会において政策検討に活かすのはもちろん、都民自身が都政を知り考える材料とすることが可能になる
 
@@ -99,14 +99,14 @@
 ## 都民向け「都政参加プラットフォーム」を構築・活性化する
 
 - 都民参加型予算編成
-    - 世界3,000以上の都市で実施されている「参加型予算編成」を東京で本格展開。現在の「都民提案」を改善していく。
+    - 世界3,000以上の都市で実施されている「参加型予算編成」を東京で本格展開。現在の「都民提案」を改善していく
     - Quadratic Votingなど必要な仕組みを取り入れ、納得感をあげていく
 - 都民による政策提案
-    - 様々なイシューに対し、選挙期間に限らず都民が自由に政策提案できるプラットフォームを。
+    - 様々なイシューに対し、選挙期間に限らず都民が自由に政策提案できるプラットフォームを
     - 都民からの賛同を一定得たものは、都議会での議題に挙げる
 - 都民による政策議論
-    - 都議会の論点に対して、都民からも広く意見を募集。
-    - 公的な情報発信を担うWEBサイトやアプリに意見投稿の導線を追加し、気になったことをその場でフィードバックできるようにする。
+    - 都議会の論点に対して、都民からも広く意見を募集
+    - 公的な情報発信を担うWEBサイトやアプリに意見投稿の導線を追加し、気になったことをその場でフィードバックできるようにする
     - どういった意見があるのかを可視化し、閉じた議会の中だけでは得られない視点を取り込んでよりよい政策決定へ
 
 ## 政治参加の課題である「参加率の低迷」を打破する`},{sha:"b8a4c616e96d413561afff7b45c52bad4b4fb08d",filename:"docs/manifest/economy.md",status:"modified",additions:20,deletions:19,changes:39,blob_url:"https://github.com/takahiroanno2024/election2024/blob/190d7c56aad0a71c7f1d2d6b2bf48b0448194231/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/190d7c56aad0a71c7f1d2d6b2bf48b0448194231/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=190d7c56aad0a71c7f1d2d6b2bf48b0448194231",patch:`@@ -38,9 +38,9 @@
 ## 強い技術企業の育成・誘致できると、経済が活性化し所得水準が向上
 
 - 強い技術企業の育成・誘致が所得向上に繋がった事例
-    - 自動車産業...世界有数の大企業であるトヨタの本社周辺には「企業城下町」と呼ばれる都市が形成されている。
-    - ソフトウェア産業...米西海岸のベイエリアやインドのバンガロールには大学・研究機関が集積していたため、強い技術企業が拠点を置いたことで新しい街が生まれた。
-    - 半導体産業...熊本県では半導体工場誘致に伴い、人口流入が顕著。TSMC直雇用は2000人程度だが、暮らしを支える産業が登場することでそのほかにもたくさんの雇用が生まれ経済効果も出ている。
+    - 自動車産業...世界有数の大企業であるトヨタの本社周辺には「企業城下町」と呼ばれる都市が形成されている
+    - ソフトウェア産業...米西海岸のベイエリアやインドのバンガロールには大学・研究機関が集積していたため、強い技術企業が拠点を置いたことで新しい街が生まれた
+    - 半導体産業...熊本県では半導体工場誘致に伴い、人口流入が顕著。TSMC直雇用は2000人程度だが、暮らしを支える産業が登場することでそのほかにもたくさんの雇用が生まれ経済効果も出ている
 
 ## 技術企業が集まると、既存産業のさらなる発展にも繋がる
 
@@ -62,7 +62,7 @@
     - 東京は働きたい都市
         - Google等のエンジニアにも東京オフィスで働くことは人気
 - AIに親和的な法規制・文化
-    - 「AIを使った製品とサービスには欠点よりも恩恵がある」の質問に対して、日本は42%が「そう思う」と回答。イギリス38%、ドイツが37%、アメリカ35%、カナダ32%、フランス31%。
+    - 「AIを使った製品とサービスには欠点よりも恩恵がある」の質問に対して、日本は42%が「そう思う」と回答<br/>イギリス38%、ドイツが37%、アメリカ35%、カナダ32%、フランス31%
 - 地政学観点
     - アジア太平洋地域において、東京が近年より重視されつつある
         - 中国は地政学的リスクが高い
@@ -72,8 +72,8 @@
 ## 「集め、育てる」機能をさらに伸ばす必要
 
 - 産業を「育てる」ための課題
-    - 創業初期の支援制度は充実してきている。
-    - 一方で、事業の成長期を支えるための環境整備は不十分。
+    - 創業初期の支援制度は充実してきている
+    - 一方で、事業の成長期を支えるための環境整備は不十分
         - レイターステージのための大型資金（海外投資家）が不足
         - 社会インフラとなる事業を実装し、育てるためのフィールドが不足
 - 人を「集める」ための課題
@@ -100,25 +100,26 @@
 ## 東京西部では「新しいモビリティのあり方」が喫緊の課題
 
 - 人口減少で難しくなる公共交通の維持
-    - 東京都の人口は2025年〜2030年をピークに減少。
-    - 人口減少と、高齢化で外出が減ることで、公共交通が利用されなくなると、バスやタクシーのサービス水準の維持が困難に。
+    - 東京都の人口は2025年〜2030年をピークに減少
+    - 人口減少と、高齢化で外出が減ることで、公共交通が利用されなくなると、バスやタクシーのサービス水準の維持が困難に
     - 東京都の後期高齢者の増加数（2015年→2025年）は54.0万人*（推計）で全国1位！
         - 高齢者の居住安定確保プラン（平成30年3月/東京都住宅政策本部）からのデータ
 - バスやタクシーの担い手が不足
-    - 多摩・島しょ地域を中心に、人手不足でバスの減便が相次いでいる。
-    - バスやタクシーの担い手の皆さんの業務をサポートする仕組みが必要。
-        - バス運転手の平均年齢は53.4歳*と高齢化が進んでいる。
+    - 多摩・島しょ地域を中心に、人手不足でバスの減便が相次いでいる
+    - バスやタクシーの担い手の皆さんの業務をサポートする仕組みが必要
+        - バス運転手の平均年齢は53.4歳*と高齢化が進んでいる
             - 令和５年版 国土交通白書（国土交通省）からのデータ
 - 交通が不便な地域では免許返納が不安
-    - 東京都の交通不便地域には、23区で66万人、多摩地域で145万人の方が暮らしている。
+    - 東京都の交通不便地域には、23区で66万人、多摩地域で145万人の方が暮らしている
         - 東京都における地域公共交通の在り方検討会より
         - 交通不便地域：平均傾斜角度が2%以上の急峻な地形のエリア、又は、鉄道駅800m、バス停（30本/日以上）300m圏域外のエリア
-    - 高齢者の方々からは、免許返納したら外出が減り、健康的な生活が送れなくなると不安の声がある。
+    - 高齢者の方々からは、免許返納したら外出が減り、健康的な生活が送れなくなると不安の声がある
 
 ## 世界では自動運転は実用化され始めている
 
-- アメリカ・サンフランシスコや中国・北京で無人タクシーのサービスが始まっています。Google系列のWaymoなどが実施しています。
-- 日本でも2023年4月に改正道路交通法が施行され、特定条件下では、遠隔監視のみで、運転手が乗車しない無人自動運転の路線バスなどを運行できるようになりました。
+- アメリカ・サンフランシスコや中国・北京で無人タクシーのサービスが始まっている
+- Google系列のWaymoなどが実施している
+- 日本でも2023年4月に改正道路交通法が施行され、特定条件下では、遠隔監視のみで、運転手が乗車しない無人自動運転の路線バスなどを運行できるようになった
 
 ## 自動運転で、誰もが自由に外出できる社会を実現！
 
@@ -139,15 +140,15 @@
 ## 生成AIによる言語障壁/暮らしのインフラ整備の課題解決
 
 - これまで
-    - 「東京で住む」ための手続きは大変。それぞれのDXは進んでいるが行政手続・住居・銀行口座開設という3つの準備を整えるまでに労力がかかる。
+    - 「東京で住む」ための手続きは大変。それぞれのDXは進んでいるが行政手続・住居・銀行口座開設という3つの準備を整えるまでに労力がかかる
         - 初めて東京に引っ越してきた際に「手続きの手戻りが繰り返し発生して『悪魔の循環』が発生した」と言う声複数（ヒアリングによる）
 - これから
-    - 生成AIを活用して「東京に住むために必要なこと」が一目でわかり、手続きがスムーズに。
-        - 東京での暮らしを始める上で必要な手続きが一目でわかり、スムーズに。
+    - 生成AIを活用して「東京に住むために必要なこと」が一目でわかり、手続きがスムーズに
+        - 東京での暮らしを始める上で必要な手続きが一目でわかり、スムーズに
         - 行政手続きはもちろん、住宅や生活インフラ申込など民間事業者にまつわる手続きのワンストップ化の方策も検討
 
 ## 中高一貫の都立インターナショナルスクール設置・増設
 
 - 東京に住みたいと思う技術者・研究者は多いが、トップレベルのインターナショナルスクールが少なく「子供を育てられない」と諦めることが多い
-- 優れたインターナショナルスクールの東京誘致により世界の技術者・研究者が「家族で住める」東京へ。
+- 優れたインターナショナルスクールの東京誘致により世界の技術者・研究者が「家族で住める」東京へ
     - 合わせて都内公立中高のインターナショナルスクール化支援を実施し、東京近郊の中高生に最高峰のグローバル教育環境を提供`}]},{oid:"7ab39ffd47411266e827636390b0bed3e6418882",message:"Update others.md",committedDate:"2024-07-01T13:42:34Z",author:{name:"tokshibata",email:"48014497+tokshibata@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/7ab39ffd47411266e827636390b0bed3e6418882",associatedPullRequests:{edges:[{node:{number:256,title:"Create Others & Energy",url:"https://github.com/takahiroanno2024/election2024/pull/256",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"d5289f1cfac2c0f5a804d3f1a83460c17d23d159",filename:"docs/manifest/others.md",status:"modified",additions:3,deletions:2,changes:5,blob_url:"https://github.com/takahiroanno2024/election2024/blob/7ab39ffd47411266e827636390b0bed3e6418882/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/7ab39ffd47411266e827636390b0bed3e6418882/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=7ab39ffd47411266e827636390b0bed3e6418882",patch:`@@ -20,7 +20,8 @@
         - ディマンドリスポンスの仕組みを拡充。より広い都民にとってメリットを生み、環境インパクトを向上する方法を模索
             - 参考）<https://www.enecho.meti.go.jp/category/electricity_and_gas/electricity_measures/dr/dr.html>
             - 参考）<https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2024/03/28/66.html>
-        - 電力市場をAIテクノロジーを用いて最適化
-            - 参考）<https://www.global.toshiba/jp/technology/corporate/rdc/rd/topics/21/2112-02.html>
+        - 電力市場をAIテクノロジーを用いて最適化する技術企業への支援
+            - 参考）<https://exawizards.com/archives/24799/>
+            - 参考）<https://www.nikkei.com/article/DGXZQOUC261300W4A420C2000000/>
     - その他クリーンテック技術の革新に向けた技術企業への支援
     - 安全を確保したうえでの原子力発電再稼働に向けた検討の推進・都としての働きかけ`}]},{oid:"97b77102463431c2a110af6fbab29b38efa5a3ba",message:"Update others.md",committedDate:"2024-07-01T13:24:47Z",author:{name:"tokshibata",email:"48014497+tokshibata@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/97b77102463431c2a110af6fbab29b38efa5a3ba",associatedPullRequests:{edges:[{node:{number:256,title:"Create Others & Energy",url:"https://github.com/takahiroanno2024/election2024/pull/256",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"fce1fef68f735380e87e4075737493ac0978839c",filename:"docs/manifest/others.md",status:"modified",additions:2,deletions:1,changes:3,blob_url:"https://github.com/takahiroanno2024/election2024/blob/97b77102463431c2a110af6fbab29b38efa5a3ba/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/97b77102463431c2a110af6fbab29b38efa5a3ba/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=97b77102463431c2a110af6fbab29b38efa5a3ba",patch:`@@ -17,8 +17,9 @@
     - 島しょ部における浮体式洋上風力推進のための企業の技術開発支援と実装のための特区化
     - 住宅の断熱義務化（ZEH、ZEB推進）
     - テクノロジーにおける電力消費・販売の最適化
-        - ディマンドリスポンスの仕組みを構築。供給量に応じて電力消費を最適化した都民に東京都ポイントの付与で還元
+        - ディマンドリスポンスの仕組みを拡充。より広い都民にとってメリットを生み、環境インパクトを向上する方法を模索
             - 参考）<https://www.enecho.meti.go.jp/category/electricity_and_gas/electricity_measures/dr/dr.html>
+            - 参考）<https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2024/03/28/66.html>
         - 電力市場をAIテクノロジーを用いて最適化
             - 参考）<https://www.global.toshiba/jp/technology/corporate/rdc/rd/topics/21/2112-02.html>
     - その他クリーンテック技術の革新に向けた技術企業への支援`}]},{oid:"1b9e1007c0cf700e23a2ed618efae8cc407f64d3",message:"ファイル位置修正&Lint",committedDate:"2024-07-01T13:08:59Z",author:{name:"Imaizumi Takatsugu",email:"takatsugu.imaizumi@mntsq.com"},url:"https://github.com/takahiroanno2024/election2024/commit/1b9e1007c0cf700e23a2ed618efae8cc407f64d3",associatedPullRequests:{edges:[{node:{number:256,title:"Create Others & Energy",url:"https://github.com/takahiroanno2024/election2024/pull/256",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"3ea7a8dde72ac0e61b111c356b0e5f942537019f",filename:"docs/manifest/others.md",status:"added",additions:25,deletions:0,changes:25,blob_url:"https://github.com/takahiroanno2024/election2024/blob/1b9e1007c0cf700e23a2ed618efae8cc407f64d3/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/1b9e1007c0cf700e23a2ed618efae8cc407f64d3/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=1b9e1007c0cf700e23a2ed618efae8cc407f64d3",patch:`@@ -0,0 +1,25 @@
+# その他政策や頂いたご質問に対するご回答
+
+## エネルギー政策
+
+- 今でも東京の電力消費量に対する電力の供給量は他地域と比べて乏しい
+    - 東京電力管内以外では、再エネ（太陽光）の出力抑制（晴れの日の昼に供給が需要を上回るため抑制する動き）が既に起こり始めているが、東京電力管内ではいまだ起きていない
+    - ベースロードとして想定していた福島の原発は未だ再稼働しておらず、それでいて電力需要は大きい地域であるため
+- そんな中、東京都では2050年までにネット・ゼロエミッション達成を目標として掲げ、具体的な計画案も作っている
+    - この時間軸自体は、世界の他都市の事例を見ても、東京が世界でも最大規模の人口を持つ都市圏ということを考慮すれば、着実な成功のための妥当な目標と考える
+- しかし、現在の計画だけでは東京都の巨大な消費電力を賄うには不十分である可能性
+    - 東京都で増加が期待できる再エネは太陽光発電が主だが、それも発電量には限界がある
+    - 太陽光・風力などの再エネは発電量が天候などにより不安定であり、大規模停電を防ぐための電気の貯蔵技術の発展が急務
+- さらに、今回安野たかひろが提案しているテクノロジーを活用した各種政策は、電力を多く消費するものも多く、実現に向けてはより一層のエネルギー政策強化が必要
+    - 特に自動運転を大々的に活用していく場合には、現状の消費電力とはけた違いの電力が必要になる可能性もある
+- 現在の都の政策に加え、以下を政策として実行する
+    - 集合住宅（賃貸含む）への太陽光パネル設置補助
+    - 島しょ部における浮体式洋上風力推進のための企業の技術開発支援と実装のための特区化
+    - 住宅の断熱義務化（ZEH、ZEB推進）
+    - テクノロジーにおける電力消費・販売の最適化
+        - ディマンドリスポンスの仕組みを構築。供給量に応じて電力消費を最適化した都民に東京都ポイントの付与で還元
+            - 参考）<https://www.enecho.meti.go.jp/category/electricity_and_gas/electricity_measures/dr/dr.html>
+        - 電力市場をAIテクノロジーを用いて最適化
+            - 参考）<https://www.global.toshiba/jp/technology/corporate/rdc/rd/topics/21/2112-02.html>
+    - その他クリーンテック技術の革新に向けた技術企業への支援
+    - 安全を確保したうえでの原子力発電再稼働に向けた検討の推進・都としての働きかけ`}]},{oid:"c68e4cc5ff539073a22eab3c1ddd400897ad7561",message:"Update democracy.md",committedDate:"2024-07-01T12:05:15Z",author:{name:"tokshibata",email:"48014497+tokshibata@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/c68e4cc5ff539073a22eab3c1ddd400897ad7561",associatedPullRequests:{edges:[{node:{number:255,title:"Update democracy.md　荒らし対策",url:"https://github.com/takahiroanno2024/election2024/pull/255",comments:{nodes:[{body:`> 荒らしに該当するような攻撃的・差別的コメントについては、\r
\r
- 「荒らし」が万人には伝わらない表現\r
- 対象を限定しすぎない方が運用フェーズで柔軟に対応できる\r
- 文章の最後が「削除する」ではなく「管理する」なので、広めに削除するという意味にはならない\r
- 投稿者の意図とは関係なくコメントの質で判断せざるを得ない\r
\r
ので、「著しく不適切なコメントについては、」くらいでどうでしょう`}]},timelineItems:{nodes:[{subject:{number:144,title:"いたずらや対立潰し、都民であることの確認はどうするのか（荒らし対策について）",url:"https://github.com/takahiroanno2024/election2024/issues/144"}}]}}}]},files:[{sha:"d342feb1f1db0805f86cf7d9d0dbdc20e0e37154",filename:"docs/manifest/democracy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/c68e4cc5ff539073a22eab3c1ddd400897ad7561/docs%2Fmanifest%2Fdemocracy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/c68e4cc5ff539073a22eab3c1ddd400897ad7561/docs%2Fmanifest%2Fdemocracy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fdemocracy.md?ref=c68e4cc5ff539073a22eab3c1ddd400897ad7561",patch:`@@ -131,4 +131,4 @@
     - デジタル民主主義では、意見を多数決で採用したりせず、出てきた意見を基にエビデンスを踏まえて政策立案を行う
     - そのため意見表明の段階では、身分確認などでハードルを上げるのではなく、広く参加しやすいプラットフォームを提供する
 - 一方で、投票などで数を意思決定の基準とする場合は、マイナンバーカードなどのテクノロジーを活用し、東京都民を正しく絞り込む
-- 荒らしに該当するような攻撃的・差別的コメントについては、今回のgithubの仕組みでも活用しているAIによるフィルタリングを用いて、コメント別に管理をしていく
+- 著しく不適切なコメント（攻撃的・差別的コメントなど）については、今回のgithubの仕組みでも活用しているAIによるフィルタリングを用いて、コメント別に管理をしていく`}]},{oid:"a2ad731f14aa707fe6c0d79d5e94f3d5e6d94301",message:"Update democracy.md　荒らし対策",committedDate:"2024-07-01T11:26:08Z",author:{name:"tokshibata",email:"48014497+tokshibata@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/a2ad731f14aa707fe6c0d79d5e94f3d5e6d94301",associatedPullRequests:{edges:[{node:{number:255,title:"Update democracy.md　荒らし対策",url:"https://github.com/takahiroanno2024/election2024/pull/255",comments:{nodes:[{body:`> 荒らしに該当するような攻撃的・差別的コメントについては、\r
\r
- 「荒らし」が万人には伝わらない表現\r
- 対象を限定しすぎない方が運用フェーズで柔軟に対応できる\r
- 文章の最後が「削除する」ではなく「管理する」なので、広めに削除するという意味にはならない\r
- 投稿者の意図とは関係なくコメントの質で判断せざるを得ない\r
\r
ので、「著しく不適切なコメントについては、」くらいでどうでしょう`}]},timelineItems:{nodes:[{subject:{number:144,title:"いたずらや対立潰し、都民であることの確認はどうするのか（荒らし対策について）",url:"https://github.com/takahiroanno2024/election2024/issues/144"}}]}}}]},files:[{sha:"8d4800ccaab6e87989272fbb8eaeaa7fb073a288",filename:"docs/manifest/democracy.md",status:"modified",additions:7,deletions:0,changes:7,blob_url:"https://github.com/takahiroanno2024/election2024/blob/a2ad731f14aa707fe6c0d79d5e94f3d5e6d94301/docs%2Fmanifest%2Fdemocracy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/a2ad731f14aa707fe6c0d79d5e94f3d5e6d94301/docs%2Fmanifest%2Fdemocracy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fdemocracy.md?ref=a2ad731f14aa707fe6c0d79d5e94f3d5e6d94301",patch:`@@ -125,3 +125,10 @@
     - 事業提案を気軽にできる広報を行う。政治の専門知識がなくとも、身近に感じる課題から気軽に提案を挙げてもらう
 - 人間の苦手をデジタルで補い、より広く・早い民意反映で、東京都をアップデートする
     - 少子高齢化の加速する日本・東京において、「今までと同じやり方」では現状維持も難しい。人の弱点を補い・負担を軽減するデジタル活用で、よりよい都政を実現する
+      
+## デジタル民主主義における情報の質・場の質をテクノロジーで担保する
+- ブロードリスニングや政策提案においては、都民であることを厳密管理はしない
+    - デジタル民主主義では、意見を多数決で採用したりせず、出てきた意見を基にエビデンスを踏まえて政策立案を行う
+    - そのため意見表明の段階では、身分確認などでハードルを上げるのではなく、広く参加しやすいプラットフォームを提供する
+- 一方で、投票などで数を意思決定の基準とする場合は、マイナンバーカードなどのテクノロジーを活用し、東京都民を正しく絞り込む
+- 荒らしに該当するような攻撃的・差別的コメントについては、今回のgithubの仕組みでも活用しているAIによるフィルタリングを用いて、コメント別に管理をしていく`}]},{oid:"ea09f75acad77004576396091de46f7add7136c9",message:`Update democracy.md : 文末表現の統一

以下の変更提案です。\r
 - です・ます調をだ・である調または体言止めに統一\r
 - 文末の句点を削除`,committedDate:"2024-06-29T14:55:48Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/ea09f75acad77004576396091de46f7add7136c9",associatedPullRequests:{edges:[{node:{number:238,title:"End of sentence fix",url:"https://github.com/takahiroanno2024/election2024/pull/238",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"a85fd8639a59697218003acd3e6a0a4d5d5cd26a",filename:"docs/manifest/democracy.md",status:"modified",additions:5,deletions:5,changes:10,blob_url:"https://github.com/takahiroanno2024/election2024/blob/ea09f75acad77004576396091de46f7add7136c9/docs%2Fmanifest%2Fdemocracy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/ea09f75acad77004576396091de46f7add7136c9/docs%2Fmanifest%2Fdemocracy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fdemocracy.md?ref=ea09f75acad77004576396091de46f7add7136c9",patch:`@@ -30,7 +30,7 @@
 ## ①都民の声を広く・早く聴く「ブロードリスニング」
 
 - 都から情報を広く知らしめる「ブロードキャスト」だけでなく、都民の声を広く聴く「ブロードリスニング」をテクノロジーの力で実現する
-- 集める声の広さを担保すべく、既存の「都政への要望・提言」手段に加え、意見表明のハードルをより下げるような新手段を提案する。
+- 集める声の広さを担保すべく、既存の「都政への要望・提言」手段に加え、意見表明のハードルをより下げるような新手段を提案する
     - LINEの活用、「東京アプリ」の開発など
 - 集まった声は技術を活用しわかりやすくレポート化し公開する。都議会において政策検討に活かすのはもちろん、都民自身が都政を知り考える材料とすることが可能になる
 
@@ -99,14 +99,14 @@
 ## 都民向け「都政参加プラットフォーム」を構築・活性化する
 
 - 都民参加型予算編成
-    - 世界3,000以上の都市で実施されている「参加型予算編成」を東京で本格展開。現在の「都民提案」を改善していく。
+    - 世界3,000以上の都市で実施されている「参加型予算編成」を東京で本格展開。現在の「都民提案」を改善していく
     - Quadratic Votingなど必要な仕組みを取り入れ、納得感をあげていく
 - 都民による政策提案
-    - 様々なイシューに対し、選挙期間に限らず都民が自由に政策提案できるプラットフォームを。
+    - 様々なイシューに対し、選挙期間に限らず都民が自由に政策提案できるプラットフォームを
     - 都民からの賛同を一定得たものは、都議会での議題に挙げる
 - 都民による政策議論
-    - 都議会の論点に対して、都民からも広く意見を募集。
-    - 公的な情報発信を担うWEBサイトやアプリに意見投稿の導線を追加し、気になったことをその場でフィードバックできるようにする。
+    - 都議会の論点に対して、都民からも広く意見を募集
+    - 公的な情報発信を担うWEBサイトやアプリに意見投稿の導線を追加し、気になったことをその場でフィードバックできるようにする
     - どういった意見があるのかを可視化し、閉じた議会の中だけでは得られない視点を取り込んでよりよい政策決定へ
 
 ## 政治参加の課題である「参加率の低迷」を打破する`}]},{oid:"3abb7373e0a89cca397be773d1dac2304aa6ed56",message:"Update economy.md : 文末表現の統一",committedDate:"2024-06-29T14:54:25Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/3abb7373e0a89cca397be773d1dac2304aa6ed56",associatedPullRequests:{edges:[{node:{number:238,title:"End of sentence fix",url:"https://github.com/takahiroanno2024/election2024/pull/238",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"b8a4c616e96d413561afff7b45c52bad4b4fb08d",filename:"docs/manifest/economy.md",status:"modified",additions:3,deletions:3,changes:6,blob_url:"https://github.com/takahiroanno2024/election2024/blob/3abb7373e0a89cca397be773d1dac2304aa6ed56/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/3abb7373e0a89cca397be773d1dac2304aa6ed56/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=3abb7373e0a89cca397be773d1dac2304aa6ed56",patch:`@@ -38,9 +38,9 @@
 ## 強い技術企業の育成・誘致できると、経済が活性化し所得水準が向上
 
 - 強い技術企業の育成・誘致が所得向上に繋がった事例
-    - 自動車産業...世界有数の大企業であるトヨタの本社周辺には「企業城下町」と呼ばれる都市が形成されている。
-    - ソフトウェア産業...米西海岸のベイエリアやインドのバンガロールには大学・研究機関が集積していたため、強い技術企業が拠点を置いたことで新しい街が生まれた。
-    - 半導体産業...熊本県では半導体工場誘致に伴い、人口流入が顕著。TSMC直雇用は2000人程度だが、暮らしを支える産業が登場することでそのほかにもたくさんの雇用が生まれ経済効果も出ている。
+    - 自動車産業...世界有数の大企業であるトヨタの本社周辺には「企業城下町」と呼ばれる都市が形成されている
+    - ソフトウェア産業...米西海岸のベイエリアやインドのバンガロールには大学・研究機関が集積していたため、強い技術企業が拠点を置いたことで新しい街が生まれた
+    - 半導体産業...熊本県では半導体工場誘致に伴い、人口流入が顕著。TSMC直雇用は2000人程度だが、暮らしを支える産業が登場することでそのほかにもたくさんの雇用が生まれ経済効果も出ている
 
 ## 技術企業が集まると、既存産業のさらなる発展にも繋がる
 `}]},{oid:"f2302aad10b1777b0c861bc2ee4b5bae21dbd771",message:"Merge branch 'main' into patch-1",committedDate:"2024-06-29T14:53:54Z",author:{name:"filialbrilliant",email:"37357820+filialbrilliant@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/f2302aad10b1777b0c861bc2ee4b5bae21dbd771",associatedPullRequests:{edges:[{node:{number:154,title:"東京都の少子化要因の多くが有配偶率低下であることの説明追加。",url:"https://github.com/takahiroanno2024/election2024/pull/154",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"ad449d0d4fa3cc12cf5e5250372c1e63752a6e86",filename:"docs/manifest/care.md",status:"modified",additions:4,deletions:3,changes:7,blob_url:"https://github.com/takahiroanno2024/election2024/blob/f2302aad10b1777b0c861bc2ee4b5bae21dbd771/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/f2302aad10b1777b0c861bc2ee4b5bae21dbd771/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=f2302aad10b1777b0c861bc2ee4b5bae21dbd771",patch:`@@ -44,14 +44,15 @@
 
 - 現役世代向けには、子供の発熱にも夜間休日の間に対応できて安心して暮らせる東京を作る。
     - 夜間・休日オンライン診療と処方受け取りの充実
-    - \`#7119\` / \`#8000\` からオンライン診療窓口を含む医療機関紹介
+    - \`#7119\`(救急安心事業センター) / \`#8000\`(子ども医療電話相談事業) からオンライン診療窓口を含む医療機関紹介
     - オンライン診療とバックアップ医療機関の情報連携の動線整備
     - 24時間調剤薬局の充実、コンビニでの処方薬受け取りが可能な特区の設立に向けた手上げ
+    - 男性のHPVワクチン任意接種費用の全額助成
 - 高齢者とその家族向けには、自分らしい一生を家族と共有しながら安心して暮らせる東京を作る。
     - ”自分らしい生き方”をアプリで定期的に振り返り周囲の人と共有
     - 認知症になった場合も含めて、自分の思いの通りに健康・財産の管理ができる安全な仕組みを技術で作りあげる。
     - 自身の治療方針をアプリに登録・定期的な更新を行うことで、意図しない治療・延命が行われることを防ぐ。
-- 医療従事者向けには、医師本来の仕事に集中し、安心して働ける東京を作りる。
+- 医療従事者向けには、医師本来の仕事に集中し、安心して働ける東京を作る。
     - 病院や介護施設の利用状況をデータベースとして最新化し、患者属性と掛け合わせ転院調整の自動マッチングし、”下り搬送”に関する医師の手間を圧縮
     - 生成AIを用いた入退院サマリの作成補助。
         - 七尾市の恵寿総合病院における実証実験では1/3の業務を自動化した実証実験結果あり。
@@ -61,7 +62,7 @@
 - 東京は防災の面から見ると以下のような特徴があります。
     - 人口密度が6400人/㎢
         - 迅速な避難や､きめ細かい支援の提供の難易度が高い。
-    - 障がいを持った方の人口が73万人、高齢者人口が311万人
+    - 障がいのある方の人口が73万人、高齢者人口が311万人
         - 多様なニーズを踏まえた､適切なケアを届ける必要がある。
     - 外国人人口が63万人
         - 災害時でもインクルーシブな東京になることは､移住の後押しに`},{sha:"3185bc6cd07888e37c8d3f2c7e1815f3ae11b5fb",filename:"docs/manifest/democracy.md",status:"modified",additions:2,deletions:1,changes:3,blob_url:"https://github.com/takahiroanno2024/election2024/blob/f2302aad10b1777b0c861bc2ee4b5bae21dbd771/docs%2Fmanifest%2Fdemocracy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/f2302aad10b1777b0c861bc2ee4b5bae21dbd771/docs%2Fmanifest%2Fdemocracy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fdemocracy.md?ref=f2302aad10b1777b0c861bc2ee4b5bae21dbd771",patch:`@@ -38,7 +38,7 @@
 
 - 一人の声を多数へ発信するブロードキャストだけではなく、多くの声を上手に収集するブロードリスニングが必要
     - 既存の意見募集は、多数の意見をそのまま聴くため、受け取り側がパンクする
-    - <https://scrapbox.io/nishio/%E3%83%96%E3%83%AD%E3%83%BC%E3%83%89%E3%83%AA%E3%82%B9%E3%83%8B%E3%83%B3%E3%82%B0>
+    - [https://scrapbox.io/nishio/ブロードリスニング](https://scrapbox.io/nishio/%E3%83%96%E3%83%AD%E3%83%BC%E3%83%89%E3%83%AA%E3%82%B9%E3%83%8B%E3%83%B3%E3%82%B0)
 - テクノロジーを使って、「発信」だけでなく「受信」をアップデート
 
 ## 意見表明のハードルを下げる新手段を提案
@@ -106,6 +106,7 @@
     - 都民からの賛同を一定得たものは、都議会での議題に挙げる
 - 都民による政策議論
     - 都議会の論点に対して、都民からも広く意見を募集。
+    - 公的な情報発信を担うWEBサイトやアプリに意見投稿の導線を追加し、気になったことをその場でフィードバックできるようにする。
     - どういった意見があるのかを可視化し、閉じた議会の中だけでは得られない視点を取り込んでよりよい政策決定へ
 
 ## 政治参加の課題である「参加率の低迷」を打破する`},{sha:"610848a7525bd5e4ba055ab85bc73805e65ff83c",filename:"docs/manifest/education.md",status:"modified",additions:31,deletions:24,changes:55,blob_url:"https://github.com/takahiroanno2024/election2024/blob/f2302aad10b1777b0c861bc2ee4b5bae21dbd771/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/f2302aad10b1777b0c861bc2ee4b5bae21dbd771/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=f2302aad10b1777b0c861bc2ee4b5bae21dbd771",patch:`@@ -20,7 +20,7 @@
 - 大学
     - 課題は学術都市としてのポテンシャルを活かしきれていない
     - 重点テーマは世界トップ大学の東京誘致
-    - 具体施策は海外一流大学のキャンパス誘致、都立大学でのデュアル・ディグリー推進
+    - 具体施策は海外一流大学のキャンパス誘致、都立大学でのデュアル・ディグリー制度（複数学位取得制度）の推進
 
 ## 東京都の少子化要因の多くが有配偶率の低下。有配偶者もより多くの子供を期待
 
@@ -29,7 +29,7 @@
         - 2023年度の合計特殊出生率は0.99。
         - 2023年の出生者数86347人、前年比4750人減少。
 - 東京都は全国に比べて有配偶率が非常に低い。
-    - 有配偶率と有配偶出生率に要因分解すると、東京都は前者による押し下げ要因が圧倒的に大きい。
+    - 有配偶率と有配偶出生率に要因分解すると、東京都は前者による押下げ要因が圧倒的に大きい。
 - 夫婦の理想子供数と現存子供数には大きな差があり､理想実現に向けたサポート余地が存在。
     - 夫婦の理想子ども数の平均は2.25だが、実際の出生子ども数は1.73と乖離。
 
@@ -51,47 +51,53 @@
 ## 安心して子供を産み育てるための2つの支援
 
 - 子どもが欲しい方に向けての支援
-    - 自費で実施される「先進医療」に係る費用の助成額の上限を取り除きます
-    - 無痛分娩に対する助成などさらなる負担低減を広げていきます
-    - 不妊治療の夜間診療の拡充を図るなど、より多くの人が受診機会を得られるよう提言します
-    - 不妊治療に向けた休暇をとりやすい制度や柔軟な働き方の実現に向けて提言します。
+    - 自費で実施される「先進医療」に係る費用の助成額の上限を取り除く
+    - 無痛分娩に対する助成などさらなる負担低減を広げていく
+    - 不妊治療の夜間診療の拡充を図るなど、より多くの人が受診機会を得られるよう提言する
+    - 不妊治療に向けた休暇をとりやすい制度や柔軟な働き方の実現に向けて提言する
 - 子育ての経済的負担に向けての支援
     - 子育て世帯に向けて、家賃の一部を割引する制度を拡充します
-    - 教育費（塾代・受験料）に向けての貸付事業を、所得制限に応じて給付制度とします
+    - 教育費（塾代・受験料）を支援する制度を整備します
 
 ## 不妊治療の3つの負担をサポートします
 
 - 経済的負担
-    - 不妊治療のうち、自費で実施される「先進医療」に係る費用の助成額の上限を取り除きます。
-    - 無痛分娩に対する助成などさらなる負担を広げていきます。
+    - 不妊治療のうち、自費で実施される「先進医療」に係る費用の助成額の上限を取り除く
+    - 無痛分娩に対する助成などさらなる負担を広げていく
 - 時間的負担
-    - 不妊治療の夜間診療の拡充を図るなど、より多くの人に受けられるように提言します。
+    - 不妊治療の夜間診療の拡充を図るなど、より多くの人に受けられるように提言
 - 心理的負担
-    - 不妊治療に向けて非開示休暇をとりやすい制度や柔軟な働き方を取り入れるよう企業へ提言します。
+    - 不妊治療に向けて非開示休暇をとりやすい制度や柔軟な働き方を取り入れるよう企業へ提言
 
 ## 子育てにかかる経済的負担への支援をより手厚く
 
 - 住まいの費用
-    - 既存政策では40歳代までの夫婦世帯の方に対して、市部の一部空家を対象に、入居から3年間、毎月の家賃を20％割引している。（JKK東京｜ペアさぽ）
+    - 既存政策では40歳代までの夫婦世帯の方に対して、市部の一部空家を対象に、入居から3年間、毎月の家賃を20％割引している（JKK東京｜ペアさぽ）
     - 我々の提案は、その優遇期間を第一子義務教育修了年限まで拡大
 - 教育費用
     - 既存政策では中学3年生・高校3年生（またはこれに準ずる者）を対象に塾費用や受験料の無利子での貸付
         - 東京都社会福祉協議会による受験生チャレンジ支援貸付事業
-    - 我々の提案は、所得制限に応じて、貸与から給付へ転換すること
+        - 018サポートや、第二子の保育料無償化
+    - 我々の提案は、以下の支援を通して教育費を支援する
+        - 民間の教育費負担（塾代や課外活動など）に対する教育バウチャー（5000円/月）を配布
+            - 中学3年生・高校3年生（またはこれに準ずる者）を対象とする
+        - 高校受験料を支援
+        - 第一子保育料を無償化する
+        - 018サポートなど、現存する支援策は踏襲する
 
 ## 保育・学童クラブでは、量より質の議論へ
 
-- 保育所の待機児童数はここ数年で大幅に減少した。
-    - 平成30年度5414人から令和5年286人。
-- 一方で、質はまだまだ改善の余地がある。
+- 保育所の待機児童数はここ数年で大幅に減少した
+    - 平成30年度5414人から令和5年286人
+- 一方で、質はまだまだ改善の余地がある
     - 「子ども」の体験の向上
-        - 世界の子どもたちの放課後体験は更に充実。
+        - 世界の子どもたちの放課後体験は更に充実
     - 「保育・学童で働く方」の体験の向上
         - 東京都で働く保育士の方のうち、40.1%が「事務、雑務の軽減」を希望。60%超が「特別な支援を必要とする子どもへの接し方」「発達心理学」「実技」をより学びたいと回答
 
 ## 幼児教育・小学校の放課後を効率よく、豊かに
 
-- STEAM活動に触れられる新世代児童館の設置
+- STEAM活動（Science、Technology、Engineering、Art、Mathematics）に触れられる新世代児童館の設置
     - 児童館等、子どもの放課後施設でSTEAM活動に触れられるようなハード（3Dプリンターなど）・ソフト（コンテンツ・スタッフ）を整備し児童生徒がテクノロジーに触れられる環境を作る。
     - 基礎自治体が新世代児童館に拡充する際に助成し、転換を促進する
 - 学童・保育業務のDX推進
@@ -129,9 +135,9 @@
 ## 教員の働き方改革とリスキリングを並行して進める必要
 
 - 教員の1週間あたりの勤務時間は引き続き長く、国の残業上限を超える層が大半を占める
-- 教員のICT活用指導力には自己評価でもまだ伸び代があることが判明しており、リスキリングの機会が求められています
+- 教員のICT活用指導力には自己評価でもまだ伸び代があることが判明しており、リスキリングの機会が求められている
 
-## 個性に応じた多様な教育を推進します
+## 個性に応じた多様な教育を推進
 
 - 学校内外の多様な学びの場の支援
     - ジェンダーに関わらず学びたいことを学べるようになるための支援
@@ -170,15 +176,16 @@
 
 ## 東京は学術都市としてポテンシャルがある
 
-- QS Best Student Cities 2024において、ロンドンについで学生にとって生活しやすい街として2位にランキング。
-- 世界の都市総合力ランキングでの「研究・開発」部門では4位に位置する。
+- QS Best Student Cities 2024において、ロンドンについで学生にとって生活しやすい街として2位にランキング
+- 世界の都市総合力ランキングでの「研究・開発」部門では4位に位置する
 
 ## 東京をグローバルな知の還流拠点とする
 
 - 海外一流大学のキャンパス誘致
-    - ニューヨーク大学はアブダビ（アラブ首長国連邦）・上海に分校を設置。イェール大学はシンガポール国立大学と共同で「Yale-NUS大学」を設立（ただし2025年に閉校予定）
+    - ニューヨーク大学はアブダビ（アラブ首長国連邦）・上海に分校を設置
+    - イェール大学はシンガポール国立大学と共同で「Yale-NUS大学」を設立（ただし2025年に閉校予定）
     - 都知事のリーダーシップのもと、キャンパス誘致を強化
-- 都立大学でのデュアル・ディグリーの推進
+- 都立大学でのデュアル・ディグリー制度（複数学位取得制度）の推進
     - 東京都立大学と海外大学との共通単位を実現していく
         - 日本と海外の両方の学位を、それぞれ個別に取得するよりも短い期間で取得できるプログラム
         - 海外大学の学生が東京都立大学の学位取得のため東京に訪れる機会を創出し、人材交流を図れる`}]},{oid:"2ba3e5341a57ba8b0195940b8a0bd6d5738098bb",message:`Update administration.md

以下の変更提案です。\r
 - です・ます調をだ・である調または体言止めに統一\r
 - 文末の句点を削除`,committedDate:"2024-06-29T14:53:26Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/2ba3e5341a57ba8b0195940b8a0bd6d5738098bb",associatedPullRequests:{edges:[{node:{number:238,title:"End of sentence fix",url:"https://github.com/takahiroanno2024/election2024/pull/238",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"e015a085627fae7f28d87131c6539ba44d865ade",filename:"docs/manifest/administration.md",status:"modified",additions:5,deletions:5,changes:10,blob_url:"https://github.com/takahiroanno2024/election2024/blob/2ba3e5341a57ba8b0195940b8a0bd6d5738098bb/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/2ba3e5341a57ba8b0195940b8a0bd6d5738098bb/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=2ba3e5341a57ba8b0195940b8a0bd6d5738098bb",patch:`@@ -10,7 +10,7 @@
     - 行政の高度化には取り組むべき課題が山積
 - マニフェスト
     - 便利さを実感できる行政サービスの提供
-        - 既存の取組を更に前に進め、行政手続のデジタル活用の100％徹底。
+        - 既存の取組を更に前に進め、行政手続のデジタル活用の100％徹底
         - 対面での手続きを維持するオムニチャンネルを前提に「行かせない」「書かせない」「待たせない」「迷わせない」行政手続の推進
         - 「プル型からプッシュ型へ」個人に合わせた施策パッケージをAI活用により提案
     - 徹底した情報公開により東京を透明に
@@ -24,9 +24,9 @@
 ## 現体制の下、東京都の構造改革・DXは一定進展
 
 - 行政手続きや内部事務のデジタル化の取り組みは確実に進展
-    - 行政手続のデジタル化は主要手続のうち都の権限で実行可能なものの約94％のデジタル化が完了。
-    - さらに、全行政手続（約28000プロセス）の22000プロセスについてデジタル化を実施。
-    - そのほか、キャッシュレス化、ペーパーレス化、FAXレス化も大きく進展。
+    - 行政手続のデジタル化は主要手続のうち都の権限で実行可能なものの約94％のデジタル化が完了
+    - さらに、全行政手続（約28000プロセス）の22000プロセスについてデジタル化を実施
+    - そのほか、キャッシュレス化、ペーパーレス化、FAXレス化も大きく進展
         - デジタルサービス開発時のユーザーテスト実施状況190件
         - スタートアップとの協働件数153件
         - 2023年12月末時点のオープンデータカタログサイトのデータファイル数63000件
@@ -84,7 +84,7 @@
 ## 誰も取り残さないプッシュ型の政策提供
 
 - これまでの行政サービスは、大量の情報から自分に合ったサービスを探す必要があり、面倒さや、使えるサービスに気づかないという漏れが生まれていた
-- 今後は、プッシュ型で必要な政策情報を取得できるようにする。
+- 今後は、プッシュ型で必要な政策情報を取得できるようにする
     - 本人情報や事前に入力した興味・関心から関連する政策をプッシュ型で提案（アプリやメールでの通知を想定）
 
 ## 見やすい・わかりやすい情報公開により東京都の透明化`}]},{oid:"d34b7d1da4d639d4cff1be4902a3ff00ace32d2d",message:`Update care.md : 文末表現の統一

以下の変更提案です。\r
 - です・ます調をだ・である調または体言止めに統一\r
 - 文末の句点を削除`,committedDate:"2024-06-29T14:51:56Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/d34b7d1da4d639d4cff1be4902a3ff00ace32d2d",associatedPullRequests:{edges:[{node:{number:238,title:"End of sentence fix",url:"https://github.com/takahiroanno2024/election2024/pull/238",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"c16166db49611f5abd2a5c01622d011d4a241a73",filename:"docs/manifest/care.md",status:"modified",additions:28,deletions:28,changes:56,blob_url:"https://github.com/takahiroanno2024/election2024/blob/d34b7d1da4d639d4cff1be4902a3ff00ace32d2d/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/d34b7d1da4d639d4cff1be4902a3ff00ace32d2d/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=d34b7d1da4d639d4cff1be4902a3ff00ace32d2d",patch:`@@ -30,64 +30,64 @@
         - 具体的な働き方改革実現の方法論がないまま目標だけが先走ってしまう。
 - 技術を使い、現役世代・高齢者の安心と医療従事者の働き方改革を両立させることはできないか？
 
-## 東京の高齢者のピークは2050年。医師が安心して働ける環境作りはまだ途上段階
+## 東京の高齢者のピークは2050年<br/>医師が安心して働ける環境作りはまだ途上段階
 
 - 高齢化のピークが訪れる。
-    - 2050年には都民の3人に1人が高齢者になると言われている。
+    - 2050年には都民の3人に1人が高齢者になると言われている
 - 医師の病院勤務時間における診療外の割合は24%
-    - 診察以外の勤務時間の割合が多い。
-- 医師の勤怠状況を把握している都内病院の割合は55%に留まる。
-    - 45%の病院は、自院の医師の勤務状況を把握しきれていない。
-- 来たる高齢化社会に向けて東京が十分な医療体制を整備できているかは不明瞭な点が多く、医師の働き方改革に具体的な推進策を示さなければならない。
+    - 診察以外の勤務時間の割合が多い
+- 医師の勤怠状況を把握している都内病院の割合は55%に留まる
+    - 45%の病院は、自院の医師の勤務状況を把握しきれていない
+- 来たる高齢化社会に向けて東京が十分な医療体制を整備できているかは不明瞭な点が多く、医師の働き方改革に具体的な推進策を示さなければならない
 
 ## 現役世代・高齢者が安心して一生を過ごすために、医療従事者の働き方改革に具体性のある解決策をAIで示す
 
-- 現役世代向けには、子供の発熱にも夜間休日の間に対応できて安心して暮らせる東京を作る。
+- 現役世代向けには、子供の発熱にも夜間休日の間に対応できて安心して暮らせる東京を作る
     - 夜間・休日オンライン診療と処方受け取りの充実
     - \`#7119\`(救急安心事業センター) / \`#8000\`(子ども医療電話相談事業) からオンライン診療窓口を含む医療機関紹介
     - オンライン診療とバックアップ医療機関の情報連携の動線整備
     - 24時間調剤薬局の充実、コンビニでの処方薬受け取りが可能な特区の設立に向けた手上げ
     - 男性のHPVワクチン任意接種費用の全額助成
-- 高齢者とその家族向けには、自分らしい一生を家族と共有しながら安心して暮らせる東京を作る。
+- 高齢者とその家族向けには、自分らしい一生を家族と共有しながら安心して暮らせる東京を作る
     - ”自分らしい生き方”をアプリで定期的に振り返り周囲の人と共有
-    - 認知症になった場合も含めて、自分の思いの通りに健康・財産の管理ができる安全な仕組みを技術で作りあげる。
-    - 自身の治療方針をアプリに登録・定期的な更新を行うことで、意図しない治療・延命が行われることを防ぐ。
-- 医療従事者向けには、医師本来の仕事に集中し、安心して働ける東京を作る。
+    - 認知症になった場合も含めて、自分の思いの通りに健康・財産の管理ができる安全な仕組みを技術で作りあげる
+    - 自身の治療方針をアプリに登録・定期的な更新を行うことで、意図しない治療・延命が行われることを防ぐ
+- 医療従事者向けには、医師本来の仕事に集中し、安心して働ける東京を作る
     - 病院や介護施設の利用状況をデータベースとして最新化し、患者属性と掛け合わせ転院調整の自動マッチングし、”下り搬送”に関する医師の手間を圧縮
-    - 生成AIを用いた入退院サマリの作成補助。
-        - 七尾市の恵寿総合病院における実証実験では1/3の業務を自動化した実証実験結果あり。
+    - 生成AIを用いた入退院サマリの作成補助
+        - 七尾市の恵寿総合病院における実証実験では1/3の業務を自動化した実証実験結果あり
 
 ## 人口が多い東京ならではの､災害リスクがある 一人ひとりの力を合わせれば､大きな備えになる
 
-- 東京は防災の面から見ると以下のような特徴があります。
+- 東京は防災の面から見ると以下のような特徴がある
     - 人口密度が6400人/㎢
-        - 迅速な避難や､きめ細かい支援の提供の難易度が高い。
+        - 迅速な避難や､きめ細かい支援の提供の難易度が高い
     - 障がいのある方の人口が73万人、高齢者人口が311万人
-        - 多様なニーズを踏まえた､適切なケアを届ける必要がある。
+        - 多様なニーズを踏まえた､適切なケアを届ける必要がある
     - 外国人人口が63万人
         - 災害時でもインクルーシブな東京になることは､移住の後押しに
-- 東京都は､1,400万人の人口､680万の住戸を抱える世界最大級の都市である一方､常に地震や水害のリスクに晒されています｡
-    - この人口の多さは､東日本大震災や北陸震災とは異なる形での防災対応が必要とする。
-- 人口の多さは防災対策を困難にする一方､災害対策の主体的な担い手となれる住民の数が多いことも意味します｡
+- 東京都は､1,400万人の人口､680万の住戸を抱える世界最大級の都市である一方､常に地震や水害のリスクに晒されている
+    - この人口の多さは､東日本大震災や北陸震災とは異なる形での防災対応が必要とする
+- 人口の多さは防災対策を困難にする一方､災害対策の主体的な担い手となれる住民の数が多いことも意味する
     - 例えば発災直後に､一人ひとりがスマホを使って情報を収集し､リアルタイムで共有できる仕組みを活用できれば､災害発生直後に行政の支援が行き届かない時にも助け合いを促進することができるし､その後の行政の動きをスムーズにすることができる
-- ただし､そのように個人が情報発信できる仕組みにおいては､フェイクニュース対策が必要不可欠です｡
-    - AI技術を活用し､信頼できる分散型の情報インフラを構築します。
-- もちろん､適切な救助・支援を実施するために都内市町村との間での連携方法は引き続き強化します｡
-    - そのうえで､AI･デジタル技術を活用した｢分散型｣の災害対策も進めていくことで､東京ならではのレジリエンスを実現したい。
-- デジタルを活用し､一人ひとりの力を災害時に発揮することで､迅速･きめ細かい支援を実現します。
+- ただし､そのように個人が情報発信できる仕組みにおいては､フェイクニュース対策が必要不可欠
+    - AI技術を活用し､信頼できる分散型の情報インフラを構築する
+- もちろん､適切な救助・支援を実施するために都内市町村との間での連携方法は引き続き強化する
+    - そのうえで､AI･デジタル技術を活用した｢分散型｣の災害対策も進めていくことで､東京ならではのレジリエンスを実現したい
+- デジタルを活用し､一人ひとりの力を災害時に発揮することで､迅速･きめ細かい支援を実現する
 
 ## テクノロジーを活用し､公助を補完する分散型・自助の災害対策を進める
 
 - 事前の備えとして、デジタル技術を活用した､避難訓練の実効性を強化
     - スマホを活用して､自宅やオフィスから避難訓練を｢いつでも｣行える仕組み
-        - （ある道路が火災で封鎖されている､などのケースもAIを用いて作成可能）｡
-        - 通常の避難訓練は一斉に行う必要があるが､非同期化することで参加率･回数を高められる。
-    - また､その際に､避難所においてマイナンバーカード等でチェックインを行うことで､非同期であっても避難訓練の参加率を把握し､都が啓発･普及に役立てることができる｡
+        - （ある道路が火災で封鎖されている､などのケースもAIを用いて作成可能）
+        - 通常の避難訓練は一斉に行う必要があるが､非同期化することで参加率･回数を高められる
+    - また､その際に､避難所においてマイナンバーカード等でチェックインを行うことで､非同期であっても避難訓練の参加率を把握し､都が啓発･普及に役立てることができる
         - チェックインを行った住民にポイント等を付与することで､インセンティブ付けを行うことも選択肢の一つ
 - 発災直後には、住民が自ら情報提供できる分散型情報インフラの構築
     - 行政の支援が届く前に､現場の情報を共有できる仕組み
         - AIによる誤情報対策も実施
-    - 避難所運営においても､住民によるリアルタイムの情報を都が活用し､必要な支援をスムーズに届けられるようにする。
+    - 避難所運営においても､住民によるリアルタイムの情報を都が活用し､必要な支援をスムーズに届けられるようにする
         - 特定のニーズを抱えた住民の所在 等
 - 避難・復旧時には、避難所運営･きめ細かい支援提供を技術でスムーズ化
     - 避難所での住民登録（チェックイン）や､医薬品の配送にマイナンバーカードや処方情報を活用`}]},{oid:"6642e1058f9384c6bde17185417ba08a055dd281",message:`Update economy.md : 文末表現の統一

以下の変更提案です。\r
 - です・ます調をだ・である調または体言止めに統一\r
 - 文末の句点を削除`,committedDate:"2024-06-29T14:47:36Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/6642e1058f9384c6bde17185417ba08a055dd281",associatedPullRequests:{edges:[{node:{number:238,title:"End of sentence fix",url:"https://github.com/takahiroanno2024/election2024/pull/238",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"528764e8be5646048ffbe16566d7e6e7b91ba53b",filename:"docs/manifest/economy.md",status:"modified",additions:17,deletions:16,changes:33,blob_url:"https://github.com/takahiroanno2024/election2024/blob/6642e1058f9384c6bde17185417ba08a055dd281/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/6642e1058f9384c6bde17185417ba08a055dd281/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=6642e1058f9384c6bde17185417ba08a055dd281",patch:`@@ -62,7 +62,7 @@
     - 東京は働きたい都市
         - Google等のエンジニアにも東京オフィスで働くことは人気
 - AIに親和的な法規制・文化
-    - 「AIを使った製品とサービスには欠点よりも恩恵がある」の質問に対して、日本は42%が「そう思う」と回答。イギリス38%、ドイツが37%、アメリカ35%、カナダ32%、フランス31%。
+    - 「AIを使った製品とサービスには欠点よりも恩恵がある」の質問に対して、日本は42%が「そう思う」と回答<br/>イギリス38%、ドイツが37%、アメリカ35%、カナダ32%、フランス31%
 - 地政学観点
     - アジア太平洋地域において、東京が近年より重視されつつある
         - 中国は地政学的リスクが高い
@@ -72,8 +72,8 @@
 ## 「集め、育てる」機能をさらに伸ばす必要
 
 - 産業を「育てる」ための課題
-    - 創業初期の支援制度は充実してきている。
-    - 一方で、事業の成長期を支えるための環境整備は不十分。
+    - 創業初期の支援制度は充実してきている
+    - 一方で、事業の成長期を支えるための環境整備は不十分
         - レイターステージのための大型資金（海外投資家）が不足
         - 社会インフラとなる事業を実装し、育てるためのフィールドが不足
 - 人を「集める」ための課題
@@ -100,25 +100,26 @@
 ## 東京西部では「新しいモビリティのあり方」が喫緊の課題
 
 - 人口減少で難しくなる公共交通の維持
-    - 東京都の人口は2025年〜2030年をピークに減少。
-    - 人口減少と、高齢化で外出が減ることで、公共交通が利用されなくなると、バスやタクシーのサービス水準の維持が困難に。
+    - 東京都の人口は2025年〜2030年をピークに減少
+    - 人口減少と、高齢化で外出が減ることで、公共交通が利用されなくなると、バスやタクシーのサービス水準の維持が困難に
     - 東京都の後期高齢者の増加数（2015年→2025年）は54.0万人*（推計）で全国1位！
         - 高齢者の居住安定確保プラン（平成30年3月/東京都住宅政策本部）からのデータ
 - バスやタクシーの担い手が不足
-    - 多摩・島しょ地域を中心に、人手不足でバスの減便が相次いでいる。
-    - バスやタクシーの担い手の皆さんの業務をサポートする仕組みが必要。
-        - バス運転手の平均年齢は53.4歳*と高齢化が進んでいる。
+    - 多摩・島しょ地域を中心に、人手不足でバスの減便が相次いでいる
+    - バスやタクシーの担い手の皆さんの業務をサポートする仕組みが必要
+        - バス運転手の平均年齢は53.4歳*と高齢化が進んでいる
             - 令和５年版 国土交通白書（国土交通省）からのデータ
 - 交通が不便な地域では免許返納が不安
-    - 東京都の交通不便地域には、23区で66万人、多摩地域で145万人の方が暮らしている。
+    - 東京都の交通不便地域には、23区で66万人、多摩地域で145万人の方が暮らしている
         - 東京都における地域公共交通の在り方検討会より
         - 交通不便地域：平均傾斜角度が2%以上の急峻な地形のエリア、又は、鉄道駅800m、バス停（30本/日以上）300m圏域外のエリア
-    - 高齢者の方々からは、免許返納したら外出が減り、健康的な生活が送れなくなると不安の声がある。
+    - 高齢者の方々からは、免許返納したら外出が減り、健康的な生活が送れなくなると不安の声がある
 
 ## 世界では自動運転は実用化され始めている
 
-- アメリカ・サンフランシスコや中国・北京で無人タクシーのサービスが始まっています。Google系列のWaymoなどが実施しています。
-- 日本でも2023年4月に改正道路交通法が施行され、特定条件下では、遠隔監視のみで、運転手が乗車しない無人自動運転の路線バスなどを運行できるようになりました。
+- アメリカ・サンフランシスコや中国・北京で無人タクシーのサービスが始まっている
+- Google系列のWaymoなどが実施している
+- 日本でも2023年4月に改正道路交通法が施行され、特定条件下では、遠隔監視のみで、運転手が乗車しない無人自動運転の路線バスなどを運行できるようになった
 
 ## 自動運転で、誰もが自由に外出できる社会を実現！
 
@@ -139,15 +140,15 @@
 ## 生成AIによる言語障壁/暮らしのインフラ整備の課題解決
 
 - これまで
-    - 「東京で住む」ための手続きは大変。それぞれのDXは進んでいるが行政手続・住居・銀行口座開設という3つの準備を整えるまでに労力がかかる。
+    - 「東京で住む」ための手続きは大変。それぞれのDXは進んでいるが行政手続・住居・銀行口座開設という3つの準備を整えるまでに労力がかかる
         - 初めて東京に引っ越してきた際に「手続きの手戻りが繰り返し発生して『悪魔の循環』が発生した」と言う声複数（ヒアリングによる）
 - これから
-    - 生成AIを活用して「東京に住むために必要なこと」が一目でわかり、手続きがスムーズに。
-        - 東京での暮らしを始める上で必要な手続きが一目でわかり、スムーズに。
+    - 生成AIを活用して「東京に住むために必要なこと」が一目でわかり、手続きがスムーズに
+        - 東京での暮らしを始める上で必要な手続きが一目でわかり、スムーズに
         - 行政手続きはもちろん、住宅や生活インフラ申込など民間事業者にまつわる手続きのワンストップ化の方策も検討
 
 ## 中高一貫の都立インターナショナルスクール設置・増設
 
 - 東京に住みたいと思う技術者・研究者は多いが、トップレベルのインターナショナルスクールが少なく「子供を育てられない」と諦めることが多い
-- 優れたインターナショナルスクールの東京誘致により世界の技術者・研究者が「家族で住める」東京へ。
+- 優れたインターナショナルスクールの東京誘致により世界の技術者・研究者が「家族で住める」東京へ
     - 合わせて都内公立中高のインターナショナルスクール化支援を実施し、東京近郊の中高生に最高峰のグローバル教育環境を提供`}]},{oid:"c3ee2215b22f5183f9447ac26eeaac6fd329267b",message:"Add HPVワクチンの男性任意接種助成",committedDate:"2024-06-29T04:14:43Z",author:{name:"Minami Ueda",email:"minami.ueda@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/c3ee2215b22f5183f9447ac26eeaac6fd329267b",associatedPullRequests:{edges:[{node:{number:229,title:"男性のHPVワクチン任意接種に対する全額助成",url:"https://github.com/takahiroanno2024/election2024/pull/229",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"ad449d0d4fa3cc12cf5e5250372c1e63752a6e86",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:0,changes:1,blob_url:"https://github.com/takahiroanno2024/election2024/blob/c3ee2215b22f5183f9447ac26eeaac6fd329267b/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/c3ee2215b22f5183f9447ac26eeaac6fd329267b/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=c3ee2215b22f5183f9447ac26eeaac6fd329267b",patch:`@@ -47,6 +47,7 @@
     - \`#7119\`(救急安心事業センター) / \`#8000\`(子ども医療電話相談事業) からオンライン診療窓口を含む医療機関紹介
     - オンライン診療とバックアップ医療機関の情報連携の動線整備
     - 24時間調剤薬局の充実、コンビニでの処方薬受け取りが可能な特区の設立に向けた手上げ
+    - 男性のHPVワクチン任意接種費用の全額助成
 - 高齢者とその家族向けには、自分らしい一生を家族と共有しながら安心して暮らせる東京を作る。
     - ”自分らしい生き方”をアプリで定期的に振り返り周囲の人と共有
     - 認知症になった場合も含めて、自分の思いの通りに健康・財産の管理ができる安全な仕組みを技術で作りあげる。`}]},{oid:"91af15c7b0a91356a79156bebbc03e9df01ac688",message:`Merge pull request #71 from masatosasano2/patch-7

Update education.md：デュアル・デグリー → デュアル・ディグリー制度（複数学位取得制度）`,committedDate:"2024-06-28T10:22:21Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/91af15c7b0a91356a79156bebbc03e9df01ac688",associatedPullRequests:{edges:[{node:{number:71,title:"Update education.md：デュアル・デグリー → デュアル・ディグリー制度（複数学位取得制度）",url:"https://github.com/takahiroanno2024/election2024/pull/71",comments:{nodes:[{body:`- 2つの教育機関から学位を授与される「ダブルディグリー」\r
\r
と\r
\r
- 単に単位の共有を意味する（もらえる学位が一つであると示唆する）「単位互換制度」\r
\r
はもらえる学位の数という観点で、意味が大きく異なるのではないでしょうか？`}]},timelineItems:{nodes:[]}}}]},files:[{sha:"90f79af0e273f0eb19cfdb60f632deefe58001f9",filename:"docs/manifest/education.md",status:"modified",additions:2,deletions:2,changes:4,blob_url:"https://github.com/takahiroanno2024/election2024/blob/91af15c7b0a91356a79156bebbc03e9df01ac688/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/91af15c7b0a91356a79156bebbc03e9df01ac688/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=91af15c7b0a91356a79156bebbc03e9df01ac688",patch:`@@ -20,7 +20,7 @@
 - 大学
     - 課題は学術都市としてのポテンシャルを活かしきれていない
     - 重点テーマは世界トップ大学の東京誘致
-    - 具体施策は海外一流大学のキャンパス誘致、都立大学でのデュアル・ディグリー推進
+    - 具体施策は海外一流大学のキャンパス誘致、都立大学でのデュアル・ディグリー制度（複数学位取得制度）の推進
 
 ## 東京都の出生率は歴史的に低いが､夫婦はより多くの子供を期待
 
@@ -183,7 +183,7 @@
     - ニューヨーク大学はアブダビ（アラブ首長国連邦）・上海に分校を設置
     - イェール大学はシンガポール国立大学と共同で「Yale-NUS大学」を設立（ただし2025年に閉校予定）
     - 都知事のリーダーシップのもと、キャンパス誘致を強化
-- 都立大学でのデュアル・ディグリーの推進
+- 都立大学でのデュアル・ディグリー制度（複数学位取得制度）の推進
     - 東京都立大学と海外大学との共通単位を実現していく
         - 日本と海外の両方の学位を、それぞれ個別に取得するよりも短い期間で取得できるプログラム
         - 海外大学の学生が東京都立大学の学位取得のため東京に訪れる機会を創出し、人材交流を図れる`}]},{oid:"81daad64f027f37e801b95106ad6ceb670c9ee9b",message:"Merge branch 'main' into patch-2",committedDate:"2024-06-28T10:21:30Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/81daad64f027f37e801b95106ad6ceb670c9ee9b",associatedPullRequests:{edges:[{node:{number:58,title:"Update education.md: STEAMの補足を追記",url:"https://github.com/takahiroanno2024/election2024/pull/58",comments:{nodes:[{body:`丁寧な補足をありがとうございます！\r
とても良いと思いました！`}]},timelineItems:{nodes:[]}}}]},files:[{sha:"65beb6be716ad46f72533274e96a463682749177",filename:"docs/manifest/administration.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/81daad64f027f37e801b95106ad6ceb670c9ee9b/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/81daad64f027f37e801b95106ad6ceb670c9ee9b/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=81daad64f027f37e801b95106ad6ceb670c9ee9b",patch:`@@ -43,7 +43,7 @@
     - 都庁の仕事を支えるシステム基盤の連携と効率化
     - 区市町村での人材・ノウハウの充実
 - 取り組むべきこと
-    - デジタルサービスのＵＩ改善の徹底
+    - デジタルサービスの使い勝手の改善の徹底
         - デジタルネイティブ以外の世代にも使いやすく便利なサービスを
     - デジタルの恩恵をより広く
         - 行政手続のみならず、各種政策や情報公開についてもデジタル化でアップデート`},{sha:"c9aa806aee6df127e483ced5e2ed589892eb703f",filename:"docs/manifest/care.md",status:"modified",additions:4,deletions:4,changes:8,blob_url:"https://github.com/takahiroanno2024/election2024/blob/81daad64f027f37e801b95106ad6ceb670c9ee9b/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/81daad64f027f37e801b95106ad6ceb670c9ee9b/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=81daad64f027f37e801b95106ad6ceb670c9ee9b",patch:`@@ -44,14 +44,14 @@
 
 - 現役世代向けには、子供の発熱にも夜間休日の間に対応できて安心して暮らせる東京を作る。
     - 夜間・休日オンライン診療と処方受け取りの充実
-    - \`#7119\` / \`#8000\` からオンライン診療窓口を含む医療機関紹介
+    - \`#7119\`(救急安心事業センター) / \`#8000\`(子ども医療電話相談事業) からオンライン診療窓口を含む医療機関紹介
     - オンライン診療とバックアップ医療機関の情報連携の動線整備
     - 24時間調剤薬局の充実、コンビニでの処方薬受け取りが可能な特区の設立に向けた手上げ
 - 高齢者とその家族向けには、自分らしい一生を家族と共有しながら安心して暮らせる東京を作る。
     - ”自分らしい生き方”をアプリで定期的に振り返り周囲の人と共有
-    - 認知症になった場合でも、自分の思いの通りに健康・財産の管理ができる仕組みを周囲の人たちと技術で作りあげる。
+    - 認知症になった場合も含めて、自分の思いの通りに健康・財産の管理ができる安全な仕組みを技術で作りあげる。
     - 自身の治療方針をアプリに登録・定期的な更新を行うことで、意図しない治療・延命が行われることを防ぐ。
-- 医療従事者向けには、医師本来の仕事に集中し、安心して働ける東京を作りる。
+- 医療従事者向けには、医師本来の仕事に集中し、安心して働ける東京を作る。
     - 病院や介護施設の利用状況をデータベースとして最新化し、患者属性と掛け合わせ転院調整の自動マッチングし、”下り搬送”に関する医師の手間を圧縮
     - 生成AIを用いた入退院サマリの作成補助。
         - 七尾市の恵寿総合病院における実証実験では1/3の業務を自動化した実証実験結果あり。
@@ -61,7 +61,7 @@
 - 東京は防災の面から見ると以下のような特徴があります。
     - 人口密度が6400人/㎢
         - 迅速な避難や､きめ細かい支援の提供の難易度が高い。
-    - 障がいを持った方の人口が73万人、高齢者人口が311万人
+    - 障がいのある方の人口が73万人、高齢者人口が311万人
         - 多様なニーズを踏まえた､適切なケアを届ける必要がある。
     - 外国人人口が63万人
         - 災害時でもインクルーシブな東京になることは､移住の後押しに`},{sha:"3185bc6cd07888e37c8d3f2c7e1815f3ae11b5fb",filename:"docs/manifest/democracy.md",status:"modified",additions:2,deletions:1,changes:3,blob_url:"https://github.com/takahiroanno2024/election2024/blob/81daad64f027f37e801b95106ad6ceb670c9ee9b/docs%2Fmanifest%2Fdemocracy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/81daad64f027f37e801b95106ad6ceb670c9ee9b/docs%2Fmanifest%2Fdemocracy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fdemocracy.md?ref=81daad64f027f37e801b95106ad6ceb670c9ee9b",patch:`@@ -38,7 +38,7 @@
 
 - 一人の声を多数へ発信するブロードキャストだけではなく、多くの声を上手に収集するブロードリスニングが必要
     - 既存の意見募集は、多数の意見をそのまま聴くため、受け取り側がパンクする
-    - <https://scrapbox.io/nishio/%E3%83%96%E3%83%AD%E3%83%BC%E3%83%89%E3%83%AA%E3%82%B9%E3%83%8B%E3%83%B3%E3%82%B0>
+    - [https://scrapbox.io/nishio/ブロードリスニング](https://scrapbox.io/nishio/%E3%83%96%E3%83%AD%E3%83%BC%E3%83%89%E3%83%AA%E3%82%B9%E3%83%8B%E3%83%B3%E3%82%B0)
 - テクノロジーを使って、「発信」だけでなく「受信」をアップデート
 
 ## 意見表明のハードルを下げる新手段を提案
@@ -106,6 +106,7 @@
     - 都民からの賛同を一定得たものは、都議会での議題に挙げる
 - 都民による政策議論
     - 都議会の論点に対して、都民からも広く意見を募集。
+    - 公的な情報発信を担うWEBサイトやアプリに意見投稿の導線を追加し、気になったことをその場でフィードバックできるようにする。
     - どういった意見があるのかを可視化し、閉じた議会の中だけでは得られない視点を取り込んでよりよい政策決定へ
 
 ## 政治参加の課題である「参加率の低迷」を打破する`},{sha:"994f95c73e1cfdc7dc264672c92abe06a0a38656",filename:"docs/manifest/economy.md",status:"modified",additions:2,deletions:2,changes:4,blob_url:"https://github.com/takahiroanno2024/election2024/blob/81daad64f027f37e801b95106ad6ceb670c9ee9b/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/81daad64f027f37e801b95106ad6ceb670c9ee9b/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=81daad64f027f37e801b95106ad6ceb670c9ee9b",patch:`@@ -1,4 +1,4 @@
-# 【現役世代】新産業で所得爆増
+# 【現役世代】新産業で所得倍増
 
 ![economy_png](./../images/manifest_slides/economy_v1.0.png)
 
@@ -67,7 +67,7 @@
     - アジア太平洋地域において、東京が近年より重視されつつある
         - 中国は地政学的リスクが高い
         - 日本の円安
-- OpenAI、Microsoft Research、SakanaAIなど、強い技術企業の拠点が東京に置かれ始めている
+- OpenAI、Microsoft Research、Sakana AIなど、強い技術企業の拠点が東京に置かれ始めている
 
 ## 「集め、育てる」機能をさらに伸ばす必要
 `},{sha:"ebda0d7ab4aced75fd1cd3374cb52bf88186003d",filename:"docs/manifest/education.md",status:"modified",additions:33,deletions:26,changes:59,blob_url:"https://github.com/takahiroanno2024/election2024/blob/81daad64f027f37e801b95106ad6ceb670c9ee9b/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/81daad64f027f37e801b95106ad6ceb670c9ee9b/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=81daad64f027f37e801b95106ad6ceb670c9ee9b",patch:`@@ -24,12 +24,12 @@
 
 ## 東京都の出生率は歴史的に低いが､夫婦はより多くの子供を期待
 
-- 東京都の合計特殊出生率は低迷。
-    - 2023年についに1を下回った。
-        - 2023年度の合計特殊出生率は0.99。
-        - 2023年の出生者数86347人、前年比4750人減少。
-- 夫婦の理想子供数と現存子供数には大きな差があり､理想実現に向けたサポート余地が存在。
-    - 夫婦の理想子ども数の平均は2.25だが、実際の出生子ども数は1.73と乖離。
+- 東京都の合計特殊出生率は低迷
+    - 2023年についに1を下回った
+        - 2023年度の合計特殊出生率は0.99
+        - 2023年の出生者数86347人、前年比4750人減少
+- 夫婦の理想子供数と現存子供数には大きな差があり､理想実現に向けたサポート余地が存在
+    - 夫婦の理想子ども数の平均は2.25だが、実際の出生子ども数は1.73と乖離
 
 ## ｢1人目の子供を持つ｣､｢3人以上の子供を持つ｣の2つの課題が存在
 
@@ -49,41 +49,47 @@
 ## 安心して子供を産み育てるための2つの支援
 
 - 子どもが欲しい方に向けての支援
-    - 自費で実施される「先進医療」に係る費用の助成額の上限を取り除きます
-    - 無痛分娩に対する助成などさらなる負担低減を広げていきます
-    - 不妊治療の夜間診療の拡充を図るなど、より多くの人が受診機会を得られるよう提言します
-    - 不妊治療に向けた休暇をとりやすい制度や柔軟な働き方の実現に向けて提言します。
+    - 自費で実施される「先進医療」に係る費用の助成額の上限を取り除く
+    - 無痛分娩に対する助成などさらなる負担低減を広げていく
+    - 不妊治療の夜間診療の拡充を図るなど、より多くの人が受診機会を得られるよう提言する
+    - 不妊治療に向けた休暇をとりやすい制度や柔軟な働き方の実現に向けて提言する
 - 子育ての経済的負担に向けての支援
     - 子育て世帯に向けて、家賃の一部を割引する制度を拡充します
-    - 教育費（塾代・受験料）に向けての貸付事業を、所得制限に応じて給付制度とします
+    - 教育費（塾代・受験料）を支援する制度を整備します
 
 ## 不妊治療の3つの負担をサポートします
 
 - 経済的負担
-    - 不妊治療のうち、自費で実施される「先進医療」に係る費用の助成額の上限を取り除きます。
-    - 無痛分娩に対する助成などさらなる負担を広げていきます。
+    - 不妊治療のうち、自費で実施される「先進医療」に係る費用の助成額の上限を取り除く
+    - 無痛分娩に対する助成などさらなる負担を広げていく
 - 時間的負担
-    - 不妊治療の夜間診療の拡充を図るなど、より多くの人に受けられるように提言します。
+    - 不妊治療の夜間診療の拡充を図るなど、より多くの人に受けられるように提言
 - 心理的負担
-    - 不妊治療に向けて非開示休暇をとりやすい制度や柔軟な働き方を取り入れるよう企業へ提言します。
+    - 不妊治療に向けて非開示休暇をとりやすい制度や柔軟な働き方を取り入れるよう企業へ提言
 
 ## 子育てにかかる経済的負担への支援をより手厚く
 
 - 住まいの費用
-    - 既存政策では40歳代までの夫婦世帯の方に対して、市部の一部空家を対象に、入居から3年間、毎月の家賃を20％割引している。（JKK東京｜ペアさぽ）
+    - 既存政策では40歳代までの夫婦世帯の方に対して、市部の一部空家を対象に、入居から3年間、毎月の家賃を20％割引している（JKK東京｜ペアさぽ）
     - 我々の提案は、その優遇期間を第一子義務教育修了年限まで拡大
 - 教育費用
     - 既存政策では中学3年生・高校3年生（またはこれに準ずる者）を対象に塾費用や受験料の無利子での貸付
         - 東京都社会福祉協議会による受験生チャレンジ支援貸付事業
-    - 我々の提案は、所得制限に応じて、貸与から給付へ転換すること
+        - 018サポートや、第二子の保育料無償化
+    - 我々の提案は、以下の支援を通して教育費を支援する
+        - 民間の教育費負担（塾代や課外活動など）に対する教育バウチャー（5000円/月）を配布
+            - 中学3年生・高校3年生（またはこれに準ずる者）を対象とする
+        - 高校受験料を支援
+        - 第一子保育料を無償化する
+        - 018サポートなど、現存する支援策は踏襲する
 
 ## 保育・学童クラブでは、量より質の議論へ
 
-- 保育所の待機児童数はここ数年で大幅に減少した。
-    - 平成30年度5414人から令和5年286人。
-- 一方で、質はまだまだ改善の余地がある。
+- 保育所の待機児童数はここ数年で大幅に減少した
+    - 平成30年度5414人から令和5年286人
+- 一方で、質はまだまだ改善の余地がある
     - 「子ども」の体験の向上
-        - 世界の子どもたちの放課後体験は更に充実。
+        - 世界の子どもたちの放課後体験は更に充実
     - 「保育・学童で働く方」の体験の向上
         - 東京都で働く保育士の方のうち、40.1%が「事務、雑務の軽減」を希望。60%超が「特別な支援を必要とする子どもへの接し方」「発達心理学」「実技」をより学びたいと回答
 
@@ -127,9 +133,9 @@
 ## 教員の働き方改革とリスキリングを並行して進める必要
 
 - 教員の1週間あたりの勤務時間は引き続き長く、国の残業上限を超える層が大半を占める
-- 教員のICT活用指導力には自己評価でもまだ伸び代があることが判明しており、リスキリングの機会が求められています
+- 教員のICT活用指導力には自己評価でもまだ伸び代があることが判明しており、リスキリングの機会が求められている
 
-## 個性に応じた多様な教育を推進します
+## 個性に応じた多様な教育を推進
 
 - 学校内外の多様な学びの場の支援
     - ジェンダーに関わらず学びたいことを学べるようになるための支援
@@ -168,13 +174,14 @@
 
 ## 東京は学術都市としてポテンシャルがある
 
-- QS Best Student Cities 2024において、ロンドンについで学生にとって生活しやすい街として2位にランキング。
-- 世界の都市総合力ランキングでの「研究・開発」部門では4位に位置する。
+- QS Best Student Cities 2024において、ロンドンについで学生にとって生活しやすい街として2位にランキング
+- 世界の都市総合力ランキングでの「研究・開発」部門では4位に位置する
 
 ## 東京をグローバルな知の還流拠点とする
 
 - 海外一流大学のキャンパス誘致
-    - ニューヨーク大学はアブダビ（アラブ首長国連邦）・上海に分校を設置。イェール大学はシンガポール国立大学と共同で「Yale-NUS大学」を設立（ただし2025年に閉校予定）
+    - ニューヨーク大学はアブダビ（アラブ首長国連邦）・上海に分校を設置
+    - イェール大学はシンガポール国立大学と共同で「Yale-NUS大学」を設立（ただし2025年に閉校予定）
     - 都知事のリーダーシップのもと、キャンパス誘致を強化
 - 都立大学でのデュアル・ディグリーの推進
     - 東京都立大学と海外大学との共通単位を実現していく`}]},{oid:"fbe607e64b59278765ee5dff4fd14115ba1e16a7",message:`中学3年生・高校3年生（またはこれに準ずる者）

issue #212 を踏まえて、政策マニフェストへの変更提案をいたします。`,committedDate:"2024-06-28T09:31:58Z",author:{name:"micthell712",email:"llehctim.k@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/fbe607e64b59278765ee5dff4fd14115ba1e16a7",associatedPullRequests:{edges:[{node:{number:221,title:"子育てにかかる経済的負担への支援の見直し（所得制限の見直し） ",url:"https://github.com/takahiroanno2024/election2024/pull/221",comments:{nodes:[{body:"018サポートのサイトめちゃくちゃ使いづらかったです。私の名前（母親）で申請しようとすると世帯主との関係を証明する戸籍謄本が必要だったり、知り合いのお母さんは面倒すぎて申請やめたと言ってる人もいました。スピーキングテストは絶対やめて欲しいです。ベネと現職の癒着な気がするので。都立受験の内申制度もやめて欲しいです。大学受験のように試験一発で良い気がします。都立に誰でも入れるようにしてほしい。都立落ちたら私立とかお金が怖すぎて。みんなギリギリです。優秀な子ばかりじゃないです。"}]},timelineItems:{nodes:[]}}}]},files:[{sha:"a23f1f581d874187f8bd786f68a3a5ba421dc3b3",filename:"docs/manifest/education.md",status:"modified",additions:8,deletions:2,changes:10,blob_url:"https://github.com/takahiroanno2024/election2024/blob/fbe607e64b59278765ee5dff4fd14115ba1e16a7/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/fbe607e64b59278765ee5dff4fd14115ba1e16a7/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=fbe607e64b59278765ee5dff4fd14115ba1e16a7",patch:`@@ -55,7 +55,7 @@
     - 不妊治療に向けた休暇をとりやすい制度や柔軟な働き方の実現に向けて提言する
 - 子育ての経済的負担に向けての支援
     - 子育て世帯に向けて、家賃の一部を割引する制度を拡充します
-    - 教育費（塾代・受験料）に向けての貸付事業を、所得制限に応じて給付制度とします
+    - 教育費（塾代・受験料）を支援する制度を整備します
 
 ## 不妊治療の3つの負担をサポートします
 
@@ -75,7 +75,13 @@
 - 教育費用
     - 既存政策では中学3年生・高校3年生（またはこれに準ずる者）を対象に塾費用や受験料の無利子での貸付
         - 東京都社会福祉協議会による受験生チャレンジ支援貸付事業
-    - 我々の提案は、所得制限に応じて、貸与から給付へ転換すること
+        - 018サポートや、第二子の保育料無償化
+    - 我々の提案は、以下の支援を通して教育費を支援する
+        - 民間の教育費負担（塾代や課外活動など）に対する教育バウチャー（5000円/月）を配布
+            - 中学3年生・高校3年生（またはこれに準ずる者）を対象とする
+        - 高校受験料を支援
+        - 第一子保育料を無償化する
+        - 018サポートなど、現存する支援策は踏襲する
 
 ## 保育・学童クラブでは、量より質の議論へ
 `}]},{oid:"938b3f3d503cc36908d2238ee9eee438964ea9e2",message:"Merge pull request #9 from masatosasano2/patch-1",committedDate:"2024-06-28T07:53:22Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/938b3f3d503cc36908d2238ee9eee438964ea9e2",associatedPullRequests:{edges:[{node:{number:9,title:"公的な情報発信用プラットフォームに都政への意見表明導線を追加",url:"https://github.com/takahiroanno2024/election2024/pull/9",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"3185bc6cd07888e37c8d3f2c7e1815f3ae11b5fb",filename:"docs/manifest/democracy.md",status:"modified",additions:1,deletions:0,changes:1,blob_url:"https://github.com/takahiroanno2024/election2024/blob/938b3f3d503cc36908d2238ee9eee438964ea9e2/docs%2Fmanifest%2Fdemocracy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/938b3f3d503cc36908d2238ee9eee438964ea9e2/docs%2Fmanifest%2Fdemocracy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fdemocracy.md?ref=938b3f3d503cc36908d2238ee9eee438964ea9e2",patch:`@@ -106,6 +106,7 @@
     - 都民からの賛同を一定得たものは、都議会での議題に挙げる
 - 都民による政策議論
     - 都議会の論点に対して、都民からも広く意見を募集。
+    - 公的な情報発信を担うWEBサイトやアプリに意見投稿の導線を追加し、気になったことをその場でフィードバックできるようにする。
     - どういった意見があるのかを可視化し、閉じた議会の中だけでは得られない視点を取り込んでよりよい政策決定へ
 
 ## 政治参加の課題である「参加率の低迷」を打破する`}]},{oid:"daecd286f2ae6cfb7abd79190f9b741637fea87a",message:`医療パートのブロードリスニング取込み

医療パートのブロードリスニングの結果を取り込むもの。\r
様々意見はあるが、都として実施する内容としてはisses＃6のデータの取得と可視化が基礎であるという点を反映するもの。\r
他の認知症初期症状の発症に関する深掘りやコロナ後遺症の実態もまずは可視化することが重要。`,committedDate:"2024-06-28T06:36:40Z",author:{name:"mengoku",email:"alterethicstokyo@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/daecd286f2ae6cfb7abd79190f9b741637fea87a",associatedPullRequests:{edges:[{node:{number:220,title:"医療パートのブロードリスニング取込み",url:"https://github.com/takahiroanno2024/election2024/pull/220",comments:{nodes:[{body:`#6 を見て検討していただいたようで、ありがとうございます。コメントで施策の案を出したものの一意見として、ここで出していただいた文案は、ひとまずいいのではないかと思います。もちろん個人的にはもっと踏み込んだ施策が入ればと思ってはいますが、少なくとも前進ではありますので。 (できれば #6 は閉じずに、都知事選が終わってからも議論が続くようなら嬉しく思います)\r
\r
2点ほど、いちおう追加の提案といたしまして :\r
\r
1. #74 も関連としてリンクしておいていいように思います。\r
2. https://github.com/takahiroanno2024/election2024/blob/91af15c7b0a91356a79156bebbc03e9df01ac688/docs/index.md#L28 にて「先輩世代：とことん安心の医療・防災」となっているのですが、感染症についてさえも「先輩世代」のみの問題ではなさそうですし、さらに防災については言わずもがなです。ここを「先輩世代」に限定する必要はあるでしょうか?\r
    * また、その前後の「現役世代：新産業で所得倍増」や「未来世代：世界一の子育て・教育環境」についても、世代で区切る必要はあるでしょうか? 所得は全世代に関係する話ですし、子育てはともかく「教育」はリスキリングも含めて「現役世代」にも関係する話です。ここであえて世代を限定する必要はないように思います。`}]},timelineItems:{nodes:[{subject:{number:6,title:"これからの感染症対応",url:"https://github.com/takahiroanno2024/election2024/issues/6"}}]}}}]},files:[{sha:"51fd77e7df995cccc2d0fc9b9bd832ab2d8b16da",filename:"docs/manifest/care.md",status:"modified",additions:5,deletions:0,changes:5,blob_url:"https://github.com/takahiroanno2024/election2024/blob/daecd286f2ae6cfb7abd79190f9b741637fea87a/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/daecd286f2ae6cfb7abd79190f9b741637fea87a/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=daecd286f2ae6cfb7abd79190f9b741637fea87a",patch:`@@ -11,6 +11,7 @@
     - **夜間休日オンライン診療/処方受取り方法の充実**
     - **認知症への備えをアプリで支援**
     - **先端技術を用いた医療従事者の働き方改革の推進**
+    - **信頼できる包括的なデータの継続的取得と発信・利活用推進**
     - **テクノロジーを活用し､公助を補完する分散型・自助の災害対策を進める**
 
 ## 医師が一番多い首都として、新しい医療のモデルを高齢化していく日本に向けて提示する責任がある
@@ -55,6 +56,10 @@
     - 病院や介護施設の利用状況をデータベースとして最新化し、患者属性と掛け合わせ転院調整の自動マッチングし、”下り搬送”に関する医師の手間を圧縮
     - 生成AIを用いた入退院サマリの作成補助。
         - 七尾市の恵寿総合病院における実証実験では1/3の業務を自動化した実証実験結果あり。
+- 医療に関する施策をデータに基づき科学的に行うため、データの取得を積極的に行い現状を可視化する
+    - コロナやインフルエンザに関する感染症の現状把握(神奈川における下水中のコロナウイルス量の把握の取り組み等をモデルにする)
+    - コロナ後遺症・認知症初期症状発症者の現状に関する実地調査や検査キット配布の拡充
+    - ネット情報の真偽のプロアクティブな判定・判別
 
 ## 人口が多い東京ならではの､災害リスクがある 一人ひとりの力を合わせれば､大きな備えになる
 `}]},{oid:"23980ce3e483579a3cb2892b86f0c36af33b1f37",message:`Update education.md: 文末表現の統一

以下の変更提案です。\r
 - です・ます調をだ・である調または体言止めに統一\r
 - 文末の句点を削除\r
\r
education.mdしか確認していませんが、資料全体を通して同様に表現・表記を統一した方がいいので、もし指針がなければ先に整備した方が良いかと思います。`,committedDate:"2024-06-27T08:48:03Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/23980ce3e483579a3cb2892b86f0c36af33b1f37",associatedPullRequests:{edges:[{node:{number:201,title:"Update education.md: 文末表現の統一",url:"https://github.com/takahiroanno2024/election2024/pull/201",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"9f755fa26cc660eb9f3094c9c5c903dac383bc24",filename:"docs/manifest/education.md",status:"modified",additions:26,deletions:25,changes:51,blob_url:"https://github.com/takahiroanno2024/election2024/blob/23980ce3e483579a3cb2892b86f0c36af33b1f37/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/23980ce3e483579a3cb2892b86f0c36af33b1f37/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=23980ce3e483579a3cb2892b86f0c36af33b1f37",patch:`@@ -24,12 +24,12 @@
 
 ## 東京都の出生率は歴史的に低いが､夫婦はより多くの子供を期待
 
-- 東京都の合計特殊出生率は低迷。
-    - 2023年についに1を下回った。
-        - 2023年度の合計特殊出生率は0.99。
-        - 2023年の出生者数86347人、前年比4750人減少。
-- 夫婦の理想子供数と現存子供数には大きな差があり､理想実現に向けたサポート余地が存在。
-    - 夫婦の理想子ども数の平均は2.25だが、実際の出生子ども数は1.73と乖離。
+- 東京都の合計特殊出生率は低迷
+    - 2023年についに1を下回った
+        - 2023年度の合計特殊出生率は0.99
+        - 2023年の出生者数86347人、前年比4750人減少
+- 夫婦の理想子供数と現存子供数には大きな差があり､理想実現に向けたサポート余地が存在
+    - 夫婦の理想子ども数の平均は2.25だが、実際の出生子ども数は1.73と乖離
 
 ## ｢1人目の子供を持つ｣､｢3人以上の子供を持つ｣の2つの課題が存在
 
@@ -49,28 +49,28 @@
 ## 安心して子供を産み育てるための2つの支援
 
 - 子どもが欲しい方に向けての支援
-    - 自費で実施される「先進医療」に係る費用の助成額の上限を取り除きます
-    - 無痛分娩に対する助成などさらなる負担低減を広げていきます
-    - 不妊治療の夜間診療の拡充を図るなど、より多くの人が受診機会を得られるよう提言します
-    - 不妊治療に向けた休暇をとりやすい制度や柔軟な働き方の実現に向けて提言します。
+    - 自費で実施される「先進医療」に係る費用の助成額の上限を取り除く
+    - 無痛分娩に対する助成などさらなる負担低減を広げていく
+    - 不妊治療の夜間診療の拡充を図るなど、より多くの人が受診機会を得られるよう提言する
+    - 不妊治療に向けた休暇をとりやすい制度や柔軟な働き方の実現に向けて提言する
 - 子育ての経済的負担に向けての支援
     - 子育て世帯に向けて、家賃の一部を割引する制度を拡充します
     - 教育費（塾代・受験料）に向けての貸付事業を、所得制限に応じて給付制度とします
 
 ## 不妊治療の3つの負担をサポートします
 
 - 経済的負担
-    - 不妊治療のうち、自費で実施される「先進医療」に係る費用の助成額の上限を取り除きます。
-    - 無痛分娩に対する助成などさらなる負担を広げていきます。
+    - 不妊治療のうち、自費で実施される「先進医療」に係る費用の助成額の上限を取り除く
+    - 無痛分娩に対する助成などさらなる負担を広げていく
 - 時間的負担
-    - 不妊治療の夜間診療の拡充を図るなど、より多くの人に受けられるように提言します。
+    - 不妊治療の夜間診療の拡充を図るなど、より多くの人に受けられるように提言
 - 心理的負担
-    - 不妊治療に向けて非開示休暇をとりやすい制度や柔軟な働き方を取り入れるよう企業へ提言します。
+    - 不妊治療に向けて非開示休暇をとりやすい制度や柔軟な働き方を取り入れるよう企業へ提言
 
 ## 子育てにかかる経済的負担への支援をより手厚く
 
 - 住まいの費用
-    - 既存政策では40歳代までの夫婦世帯の方に対して、市部の一部空家を対象に、入居から3年間、毎月の家賃を20％割引している。（JKK東京｜ペアさぽ）
+    - 既存政策では40歳代までの夫婦世帯の方に対して、市部の一部空家を対象に、入居から3年間、毎月の家賃を20％割引している（JKK東京｜ペアさぽ）
     - 我々の提案は、その優遇期間を第一子義務教育修了年限まで拡大
 - 教育費用
     - 既存政策では中学3年生・高校3年生（またはこれに準ずる者）を対象に塾費用や受験料の無利子での貸付
@@ -79,18 +79,18 @@
 
 ## 保育・学童クラブでは、量より質の議論へ
 
-- 保育所の待機児童数はここ数年で大幅に減少した。
-    - 平成30年度5414人から令和5年286人。
-- 一方で、質はまだまだ改善の余地がある。
+- 保育所の待機児童数はここ数年で大幅に減少した
+    - 平成30年度5414人から令和5年286人
+- 一方で、質はまだまだ改善の余地がある
     - 「子ども」の体験の向上
-        - 世界の子どもたちの放課後体験は更に充実。
+        - 世界の子どもたちの放課後体験は更に充実
     - 「保育・学童で働く方」の体験の向上
         - 東京都で働く保育士の方のうち、40.1%が「事務、雑務の軽減」を希望。60%超が「特別な支援を必要とする子どもへの接し方」「発達心理学」「実技」をより学びたいと回答
 
 ## 幼児教育・小学校の放課後を効率よく、豊かに
 
 - STEAM活動に触れられる新世代児童館の設置
-    - 児童館等、子どもの放課後施設でSTEAM活動に触れられるようなハード（3Dプリンターなど）・ソフト（コンテンツ・スタッフ）を整備し児童生徒がテクノロジーに触れられる環境を作る。
+    - 児童館等、子どもの放課後施設でSTEAM活動に触れられるようなハード（3Dプリンターなど）・ソフト（コンテンツ・スタッフ）を整備し児童生徒がテクノロジーに触れられる環境を作る
     - 基礎自治体が新世代児童館に拡充する際に助成し、転換を促進する
 - 学童・保育業務のDX推進
     - 学童・保育業務の中で共通してDX化できる部分のDX化支援を都が行う（情報発信プラットフォームの共通化など）
@@ -127,9 +127,9 @@
 ## 教員の働き方改革とリスキリングを並行して進める必要
 
 - 教員の1週間あたりの勤務時間は引き続き長く、国の残業上限を超える層が大半を占める
-- 教員のICT活用指導力には自己評価でもまだ伸び代があることが判明しており、リスキリングの機会が求められています
+- 教員のICT活用指導力には自己評価でもまだ伸び代があることが判明しており、リスキリングの機会が求められている
 
-## 個性に応じた多様な教育を推進します
+## 個性に応じた多様な教育を推進
 
 - 学校内外の多様な学びの場の支援
     - ジェンダーに関わらず学びたいことを学べるようになるための支援
@@ -168,13 +168,14 @@
 
 ## 東京は学術都市としてポテンシャルがある
 
-- QS Best Student Cities 2024において、ロンドンについで学生にとって生活しやすい街として2位にランキング。
-- 世界の都市総合力ランキングでの「研究・開発」部門では4位に位置する。
+- QS Best Student Cities 2024において、ロンドンについで学生にとって生活しやすい街として2位にランキング
+- 世界の都市総合力ランキングでの「研究・開発」部門では4位に位置する
 
 ## 東京をグローバルな知の還流拠点とする
 
 - 海外一流大学のキャンパス誘致
-    - ニューヨーク大学はアブダビ（アラブ首長国連邦）・上海に分校を設置。イェール大学はシンガポール国立大学と共同で「Yale-NUS大学」を設立（ただし2025年に閉校予定）
+    - ニューヨーク大学はアブダビ（アラブ首長国連邦）・上海に分校を設置
+    - イェール大学はシンガポール国立大学と共同で「Yale-NUS大学」を設立（ただし2025年に閉校予定）
     - 都知事のリーダーシップのもと、キャンパス誘致を強化
 - 都立大学でのデュアル・ディグリーの推進
     - 東京都立大学と海外大学との共通単位を実現していく`}]},{oid:"336e5601bbf806d7eac86357d318b0c2fda6e523",message:`Merge pull request #145 from takker99/patch-2

パーセントエンコーディングされたscrapboxのURLを可読化した`,committedDate:"2024-06-27T07:17:00Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/336e5601bbf806d7eac86357d318b0c2fda6e523",associatedPullRequests:{edges:[{node:{number:145,title:"パーセントエンコーディングされたscrapboxのURLを可読化した",url:"https://github.com/takahiroanno2024/election2024/pull/145",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"9309ebc6940004d3aac6cd6d97b58f4c4fb38379",filename:"docs/manifest/democracy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/336e5601bbf806d7eac86357d318b0c2fda6e523/docs%2Fmanifest%2Fdemocracy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/336e5601bbf806d7eac86357d318b0c2fda6e523/docs%2Fmanifest%2Fdemocracy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fdemocracy.md?ref=336e5601bbf806d7eac86357d318b0c2fda6e523",patch:`@@ -38,7 +38,7 @@
 
 - 一人の声を多数へ発信するブロードキャストだけではなく、多くの声を上手に収集するブロードリスニングが必要
     - 既存の意見募集は、多数の意見をそのまま聴くため、受け取り側がパンクする
-    - <https://scrapbox.io/nishio/%E3%83%96%E3%83%AD%E3%83%BC%E3%83%89%E3%83%AA%E3%82%B9%E3%83%8B%E3%83%B3%E3%82%B0>
+    - [https://scrapbox.io/nishio/ブロードリスニング](https://scrapbox.io/nishio/%E3%83%96%E3%83%AD%E3%83%BC%E3%83%89%E3%83%AA%E3%82%B9%E3%83%8B%E3%83%B3%E3%82%B0)
 - テクノロジーを使って、「発信」だけでなく「受信」をアップデート
 
 ## 意見表明のハードルを下げる新手段を提案`}]},{oid:"b127bd936638a28e468daa35f50a0109a141120f",message:`Merge pull request #156 from ruechang2/patch-2

Update care.md`,committedDate:"2024-06-27T07:14:45Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/b127bd936638a28e468daa35f50a0109a141120f",associatedPullRequests:{edges:[{node:{number:156,title:"Update care.md",url:"https://github.com/takahiroanno2024/election2024/pull/156",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"c9aa806aee6df127e483ced5e2ed589892eb703f",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/b127bd936638a28e468daa35f50a0109a141120f/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/b127bd936638a28e468daa35f50a0109a141120f/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=b127bd936638a28e468daa35f50a0109a141120f",patch:"@@ -44,7 +44,7 @@\n \n - 現役世代向けには、子供の発熱にも夜間休日の間に対応できて安心して暮らせる東京を作る。\n     - 夜間・休日オンライン診療と処方受け取りの充実\n-    - `#7119` / `#8000` からオンライン診療窓口を含む医療機関紹介\n+    - `#7119`(救急安心事業センター) / `#8000`(子ども医療電話相談事業) からオンライン診療窓口を含む医療機関紹介\n     - オンライン診療とバックアップ医療機関の情報連携の動線整備\n     - 24時間調剤薬局の充実、コンビニでの処方薬受け取りが可能な特区の設立に向けた手上げ\n - 高齢者とその家族向けには、自分らしい一生を家族と共有しながら安心して暮らせる東京を作る。"}]},{oid:"5234bd421cefdf7f48dd31d64fb653dd284b5318",message:"Update education.md：単位互換制度 → デュアル・ディグリー制度（複数学位取得制度）",committedDate:"2024-06-26T18:34:55Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/5234bd421cefdf7f48dd31d64fb653dd284b5318",associatedPullRequests:{edges:[{node:{number:71,title:"Update education.md：デュアル・デグリー → デュアル・ディグリー制度（複数学位取得制度）",url:"https://github.com/takahiroanno2024/election2024/pull/71",comments:{nodes:[{body:`- 2つの教育機関から学位を授与される「ダブルディグリー」\r
\r
と\r
\r
- 単に単位の共有を意味する（もらえる学位が一つであると示唆する）「単位互換制度」\r
\r
はもらえる学位の数という観点で、意味が大きく異なるのではないでしょうか？`}]},timelineItems:{nodes:[]}}}]},files:[{sha:"d0217b7f8b2983fcf12b1717d33481779aad6240",filename:"docs/manifest/education.md",status:"modified",additions:2,deletions:2,changes:4,blob_url:"https://github.com/takahiroanno2024/election2024/blob/5234bd421cefdf7f48dd31d64fb653dd284b5318/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/5234bd421cefdf7f48dd31d64fb653dd284b5318/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=5234bd421cefdf7f48dd31d64fb653dd284b5318",patch:`@@ -20,7 +20,7 @@
 - 大学
     - 課題は学術都市としてのポテンシャルを活かしきれていない
     - 重点テーマは世界トップ大学の東京誘致
-    - 具体施策は海外一流大学のキャンパス誘致、都立大学での単位互換制度の推進
+    - 具体施策は海外一流大学のキャンパス誘致、都立大学でのデュアル・ディグリー制度（複数学位取得制度）の推進
 
 ## 東京都の出生率は歴史的に低いが､夫婦はより多くの子供を期待
 
@@ -176,7 +176,7 @@
 - 海外一流大学のキャンパス誘致
     - ニューヨーク大学はアブダビ（アラブ首長国連邦）・上海に分校を設置。イェール大学はシンガポール国立大学と共同で「Yale-NUS大学」を設立（ただし2025年に閉校予定）
     - 都知事のリーダーシップのもと、キャンパス誘致を強化
-- 都立大学での単位互換制度の推進
+- 都立大学でのデュアル・ディグリー制度（複数学位取得制度）の推進
     - 東京都立大学と海外大学との共通単位を実現していく
         - 日本と海外の両方の学位を、それぞれ個別に取得するよりも短い期間で取得できるプログラム
         - 海外大学の学生が東京都立大学の学位取得のため東京に訪れる機会を創出し、人材交流を図れる`}]},{oid:"cde4b5f6933a5a6ba6677bd67f96cc8b3f965878",message:`Update care.md

障がいを持つ→障がいのあるに修正`,committedDate:"2024-06-26T03:11:40Z",author:{name:"mengoku",email:"alterethicstokyo@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/cde4b5f6933a5a6ba6677bd67f96cc8b3f965878",associatedPullRequests:{edges:[{node:{number:183,title:"災害パート文言の修正Update care.md",url:"https://github.com/takahiroanno2024/election2024/pull/183",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"fc842afd0e2af6ee7023ef3d80909b477631ed3c",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/cde4b5f6933a5a6ba6677bd67f96cc8b3f965878/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/cde4b5f6933a5a6ba6677bd67f96cc8b3f965878/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=cde4b5f6933a5a6ba6677bd67f96cc8b3f965878",patch:`@@ -61,7 +61,7 @@
 - 東京は防災の面から見ると以下のような特徴があります。
     - 人口密度が6400人/㎢
         - 迅速な避難や､きめ細かい支援の提供の難易度が高い。
-    - 障がいを持った方の人口が73万人、高齢者人口が311万人
+    - 障がいのある方の人口が73万人、高齢者人口が311万人
         - 多様なニーズを踏まえた､適切なケアを届ける必要がある。
     - 外国人人口が63万人
         - 災害時でもインクルーシブな東京になることは､移住の後押しに`}]},{oid:"225eb681bcaa8b30d5fa533630c1ff4af717b74f",message:":pencil2: fix typo in care.md",committedDate:"2024-06-25T03:10:12Z",author:{name:"WADA Yusuke",email:"catcher_in_the_dance_hall@yahoo.co.jp"},url:"https://github.com/takahiroanno2024/election2024/commit/225eb681bcaa8b30d5fa533630c1ff4af717b74f",associatedPullRequests:{edges:[{node:{number:163,title:"Fix typo in care.md",url:"https://github.com/takahiroanno2024/election2024/pull/163",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"18d479c1428a9c729bb9d460336a9fdae65559d1",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/225eb681bcaa8b30d5fa533630c1ff4af717b74f/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/225eb681bcaa8b30d5fa533630c1ff4af717b74f/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=225eb681bcaa8b30d5fa533630c1ff4af717b74f",patch:`@@ -51,7 +51,7 @@
     - ”自分らしい生き方”をアプリで定期的に振り返り周囲の人と共有
     - 認知症になった場合も含めて、自分の思いの通りに健康・財産の管理ができる安全な仕組みを技術で作りあげる。
     - 自身の治療方針をアプリに登録・定期的な更新を行うことで、意図しない治療・延命が行われることを防ぐ。
-- 医療従事者向けには、医師本来の仕事に集中し、安心して働ける東京を作りる。
+- 医療従事者向けには、医師本来の仕事に集中し、安心して働ける東京を作る。
     - 病院や介護施設の利用状況をデータベースとして最新化し、患者属性と掛け合わせ転院調整の自動マッチングし、”下り搬送”に関する医師の手間を圧縮
     - 生成AIを用いた入退院サマリの作成補助。
         - 七尾市の恵寿総合病院における実証実験では1/3の業務を自動化した実証実験結果あり。`}]},{oid:"0d7c1a196b2cdce53ac09d470029833a9b137767",message:"やや文言を修正。",committedDate:"2024-06-24T11:43:19Z",author:{name:"filialbrilliant",email:"37357820+filialbrilliant@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/0d7c1a196b2cdce53ac09d470029833a9b137767",associatedPullRequests:{edges:[{node:{number:154,title:"東京都の少子化要因の多くが有配偶率低下であることの説明追加。",url:"https://github.com/takahiroanno2024/election2024/pull/154",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"136971aec699411d9226306c509ae47b6fc23327",filename:"docs/manifest/education.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/0d7c1a196b2cdce53ac09d470029833a9b137767/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/0d7c1a196b2cdce53ac09d470029833a9b137767/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=0d7c1a196b2cdce53ac09d470029833a9b137767",patch:`@@ -29,7 +29,7 @@
         - 2023年度の合計特殊出生率は0.99。
         - 2023年の出生者数86347人、前年比4750人減少。
 - 東京都は全国に比べて有配偶率が非常に低い。
-    - 有配偶率と有配偶出生率に要因分解すると、東京都は前者の要因が圧倒的に大きい。
+    - 有配偶率と有配偶出生率に要因分解すると、東京都は前者による押し下げ要因が圧倒的に大きい。
 - 夫婦の理想子供数と現存子供数には大きな差があり､理想実現に向けたサポート余地が存在。
     - 夫婦の理想子ども数の平均は2.25だが、実際の出生子ども数は1.73と乖離。
 `}]},{oid:"edae25014e2bd560b22544193ee638e980e7ff31",message:`少子化の原因の多くが有配偶率であることを要因分解で説明。

根拠は内閣府の令和5年度「年次経済財政報告」の「第2-2-18図」`,committedDate:"2024-06-24T11:42:36Z",author:{name:"filialbrilliant",email:"37357820+filialbrilliant@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/edae25014e2bd560b22544193ee638e980e7ff31",associatedPullRequests:{edges:[{node:{number:154,title:"東京都の少子化要因の多くが有配偶率低下であることの説明追加。",url:"https://github.com/takahiroanno2024/election2024/pull/154",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"3ee7589ff934e5392897bbe07948b5840fb18d34",filename:"docs/manifest/education.md",status:"modified",additions:3,deletions:4,changes:7,blob_url:"https://github.com/takahiroanno2024/election2024/blob/edae25014e2bd560b22544193ee638e980e7ff31/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/edae25014e2bd560b22544193ee638e980e7ff31/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=edae25014e2bd560b22544193ee638e980e7ff31",patch:`@@ -22,15 +22,14 @@
     - 重点テーマは世界トップ大学の東京誘致
     - 具体施策は海外一流大学のキャンパス誘致、都立大学でのデュアル・ディグリー推進
 
-## 東京都の有配偶率は非常に低く、有配偶者もより多くの子供を期待
+## 東京都の少子化要因の多くが有配偶率の低下。有配偶者もより多くの子供を期待
 
 - 東京都の合計特殊出生率は低迷。
     - 2023年についに1を下回った。
         - 2023年度の合計特殊出生率は0.99。
         - 2023年の出生者数86347人、前年比4750人減少。
-- 有配偶出生率は低くないが、有配偶率が非常に低い。
-    - 有配偶出生率は全国が1000人当たり74.62であるのに対し、東京都が76.37。
-    - 有配偶率は全国が48.1%であるのに対し、東京都が43.9%。
+- 東京都は全国に比べて有配偶率が非常に低い。
+    - 有配偶率と有配偶出生率に要因分解すると、東京都は前者の要因が圧倒的に大きい。
 - 夫婦の理想子供数と現存子供数には大きな差があり､理想実現に向けたサポート余地が存在。
     - 夫婦の理想子ども数の平均は2.25だが、実際の出生子ども数は1.73と乖離。
 `}]},{oid:"ab0426bded38df4c277b852e5b3bb22772de823b",message:`Update care.md

#7119と#8000に追記（番号だけだと何のことを指しているか分かりづらいため）`,committedDate:"2024-06-24T10:42:45Z",author:{name:"ruechang2",email:"47976579+ruechang2@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/ab0426bded38df4c277b852e5b3bb22772de823b",associatedPullRequests:{edges:[{node:{number:156,title:"Update care.md",url:"https://github.com/takahiroanno2024/election2024/pull/156",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"33dae73be6d0b9e36266b900837ef40aa55430b2",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/ab0426bded38df4c277b852e5b3bb22772de823b/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/ab0426bded38df4c277b852e5b3bb22772de823b/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=ab0426bded38df4c277b852e5b3bb22772de823b",patch:"@@ -44,7 +44,7 @@\n \n - 現役世代向けには、子供の発熱にも夜間休日の間に対応できて安心して暮らせる東京を作る。\n     - 夜間・休日オンライン診療と処方受け取りの充実\n-    - `#7119` / `#8000` からオンライン診療窓口を含む医療機関紹介\n+    - `#7119`(救急安心事業センター) / `#8000`(子ども医療電話相談事業) からオンライン診療窓口を含む医療機関紹介\n     - オンライン診療とバックアップ医療機関の情報連携の動線整備\n     - 24時間調剤薬局の充実、コンビニでの処方薬受け取りが可能な特区の設立に向けた手上げ\n - 高齢者とその家族向けには、自分らしい一生を家族と共有しながら安心して暮らせる東京を作る。"}]},{oid:"ce0010ea1c0887159d9662e874dae7c92d06e929",message:"有配偶率の計算ミスを訂正。",committedDate:"2024-06-24T09:03:46Z",author:{name:"filialbrilliant",email:"37357820+filialbrilliant@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/ce0010ea1c0887159d9662e874dae7c92d06e929",associatedPullRequests:{edges:[{node:{number:154,title:"東京都の少子化要因の多くが有配偶率低下であることの説明追加。",url:"https://github.com/takahiroanno2024/election2024/pull/154",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"1f3675e363e70c46e3b2f4ec7f3c5a3e173bedf7",filename:"docs/manifest/education.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/ce0010ea1c0887159d9662e874dae7c92d06e929/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/ce0010ea1c0887159d9662e874dae7c92d06e929/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=ce0010ea1c0887159d9662e874dae7c92d06e929",patch:`@@ -30,7 +30,7 @@
         - 2023年の出生者数86347人、前年比4750人減少。
 - 有配偶出生率は低くないが、有配偶率が非常に低い。
     - 有配偶出生率は全国が1000人当たり74.62であるのに対し、東京都が76.37。
-    - 有配偶率は全国が23.7%であるのに対し、東京都がわずか7.5%。
+    - 有配偶率は全国が48.1%であるのに対し、東京都が43.9%。
 - 夫婦の理想子供数と現存子供数には大きな差があり､理想実現に向けたサポート余地が存在。
     - 夫婦の理想子ども数の平均は2.25だが、実際の出生子ども数は1.73と乖離。
 `}]},{oid:"7d195a52cc60df3fafea3dcb2d3e16e37784845e",message:`有配偶率と有配偶出生率を追加。

出典は令和2年の国勢調査と人口等基本集計。\r
有配偶率=人口（15～49歳、女子、日本人、有配偶）/人口（15～49歳、女子、日本人、総数）\r
有配偶出生率=出生数（母が15～49歳）/人口（15～49歳、女子、日本人、有配偶）`,committedDate:"2024-06-24T07:48:42Z",author:{name:"filialbrilliant",email:"37357820+filialbrilliant@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/7d195a52cc60df3fafea3dcb2d3e16e37784845e",associatedPullRequests:{edges:[{node:{number:154,title:"東京都の少子化要因の多くが有配偶率低下であることの説明追加。",url:"https://github.com/takahiroanno2024/election2024/pull/154",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"702b76ba230989b2297c92849b6202be50dd9b7e",filename:"docs/manifest/education.md",status:"modified",additions:4,deletions:1,changes:5,blob_url:"https://github.com/takahiroanno2024/election2024/blob/7d195a52cc60df3fafea3dcb2d3e16e37784845e/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/7d195a52cc60df3fafea3dcb2d3e16e37784845e/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=7d195a52cc60df3fafea3dcb2d3e16e37784845e",patch:`@@ -22,12 +22,15 @@
     - 重点テーマは世界トップ大学の東京誘致
     - 具体施策は海外一流大学のキャンパス誘致、都立大学でのデュアル・ディグリー推進
 
-## 東京都の出生率は歴史的に低いが､夫婦はより多くの子供を期待
+## 東京都の有配偶率は非常に低く、有配偶者もより多くの子供を期待
 
 - 東京都の合計特殊出生率は低迷。
     - 2023年についに1を下回った。
         - 2023年度の合計特殊出生率は0.99。
         - 2023年の出生者数86347人、前年比4750人減少。
+- 有配偶出生率は低くないが、有配偶率が非常に低い。
+    - 有配偶出生率は全国が1000人当たり74.62であるのに対し、東京都が76.37。
+    - 有配偶率は全国が23.7%であるのに対し、東京都がわずか7.5%。
 - 夫婦の理想子供数と現存子供数には大きな差があり､理想実現に向けたサポート余地が存在。
     - 夫婦の理想子ども数の平均は2.25だが、実際の出生子ども数は1.73と乖離。
 `}]},{oid:"6a0d841d7f406052163136c4849281794b1d74f3",message:"パーセントエンコーディングされたscrapboxのURLを可読化した",committedDate:"2024-06-24T01:04:29Z",author:{name:"takker",email:"37929109+takker99@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/6a0d841d7f406052163136c4849281794b1d74f3",associatedPullRequests:{edges:[{node:{number:145,title:"パーセントエンコーディングされたscrapboxのURLを可読化した",url:"https://github.com/takahiroanno2024/election2024/pull/145",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"9309ebc6940004d3aac6cd6d97b58f4c4fb38379",filename:"docs/manifest/democracy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/6a0d841d7f406052163136c4849281794b1d74f3/docs%2Fmanifest%2Fdemocracy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/6a0d841d7f406052163136c4849281794b1d74f3/docs%2Fmanifest%2Fdemocracy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fdemocracy.md?ref=6a0d841d7f406052163136c4849281794b1d74f3",patch:`@@ -38,7 +38,7 @@
 
 - 一人の声を多数へ発信するブロードキャストだけではなく、多くの声を上手に収集するブロードリスニングが必要
     - 既存の意見募集は、多数の意見をそのまま聴くため、受け取り側がパンクする
-    - <https://scrapbox.io/nishio/%E3%83%96%E3%83%AD%E3%83%BC%E3%83%89%E3%83%AA%E3%82%B9%E3%83%8B%E3%83%B3%E3%82%B0>
+    - [https://scrapbox.io/nishio/ブロードリスニング](https://scrapbox.io/nishio/%E3%83%96%E3%83%AD%E3%83%BC%E3%83%89%E3%83%AA%E3%82%B9%E3%83%8B%E3%83%B3%E3%82%B0)
 - テクノロジーを使って、「発信」だけでなく「受信」をアップデート
 
 ## 意見表明のハードルを下げる新手段を提案`}]},{oid:"17da24dbbf0e1ff18824c3427b0bbdddb26b4a7e",message:`Merge pull request #37 from EG-easy/tidyup/fix-wrong-wording

Change title from 爆増 to 倍増`,committedDate:"2024-06-22T13:31:14Z",author:{name:"Imaizumi Takatsugu",email:"49748966+TakatsuguImaizumi@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/17da24dbbf0e1ff18824c3427b0bbdddb26b4a7e",associatedPullRequests:{edges:[{node:{number:37,title:"Change title from 爆増 to 倍増",url:"https://github.com/takahiroanno2024/election2024/pull/37",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"994f95c73e1cfdc7dc264672c92abe06a0a38656",filename:"docs/manifest/economy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/17da24dbbf0e1ff18824c3427b0bbdddb26b4a7e/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/17da24dbbf0e1ff18824c3427b0bbdddb26b4a7e/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=17da24dbbf0e1ff18824c3427b0bbdddb26b4a7e",patch:`@@ -1,4 +1,4 @@
-# 【現役世代】新産業で所得爆増
+# 【現役世代】新産業で所得倍増
 
 ![economy_png](./../images/manifest_slides/economy_v1.0.png)
 `}]},{oid:"19197984a6b837e54e3307db0a885f6055a3969a",message:"Merge pull request #52 from babayoshihiko/babayoshihiko-care-2",committedDate:"2024-06-22T06:50:50Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/19197984a6b837e54e3307db0a885f6055a3969a",associatedPullRequests:{edges:[{node:{number:52,title:"高齢者の財産管理",url:"https://github.com/takahiroanno2024/election2024/pull/52",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"c3f50ee058a9c4d310e57da9a83b03e5ae60677b",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/19197984a6b837e54e3307db0a885f6055a3969a/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/19197984a6b837e54e3307db0a885f6055a3969a/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=19197984a6b837e54e3307db0a885f6055a3969a",patch:`@@ -49,7 +49,7 @@
     - 24時間調剤薬局の充実、コンビニでの処方薬受け取りが可能な特区の設立に向けた手上げ
 - 高齢者とその家族向けには、自分らしい一生を家族と共有しながら安心して暮らせる東京を作る。
     - ”自分らしい生き方”をアプリで定期的に振り返り周囲の人と共有
-    - 認知症になった場合でも、自分の思いの通りに健康・財産の管理ができる仕組みを周囲の人たちと技術で作りあげる。
+    - 認知症になった場合も含めて、自分の思いの通りに健康・財産の管理ができる安全な仕組みを技術で作りあげる。
     - 自身の治療方針をアプリに登録・定期的な更新を行うことで、意図しない治療・延命が行われることを防ぐ。
 - 医療従事者向けには、医師本来の仕事に集中し、安心して働ける東京を作りる。
     - 病院や介護施設の利用状況をデータベースとして最新化し、患者属性と掛け合わせ転院調整の自動マッチングし、”下り搬送”に関する医師の手間を圧縮`}]},{oid:"a5dbe626ac55e873bc6a11f13f4138ab9e0938f4",message:"Merge pull request #59 from masatosasano2/patch-4",committedDate:"2024-06-22T06:50:03Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/a5dbe626ac55e873bc6a11f13f4138ab9e0938f4",associatedPullRequests:{edges:[{node:{number:59,title:"Update administration.md: ＵＩ → 使い勝手",url:"https://github.com/takahiroanno2024/election2024/pull/59",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"65beb6be716ad46f72533274e96a463682749177",filename:"docs/manifest/administration.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/a5dbe626ac55e873bc6a11f13f4138ab9e0938f4/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/a5dbe626ac55e873bc6a11f13f4138ab9e0938f4/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=a5dbe626ac55e873bc6a11f13f4138ab9e0938f4",patch:`@@ -43,7 +43,7 @@
     - 都庁の仕事を支えるシステム基盤の連携と効率化
     - 区市町村での人材・ノウハウの充実
 - 取り組むべきこと
-    - デジタルサービスのＵＩ改善の徹底
+    - デジタルサービスの使い勝手の改善の徹底
         - デジタルネイティブ以外の世代にも使いやすく便利なサービスを
     - デジタルの恩恵をより広く
         - 行政手続のみならず、各種政策や情報公開についてもデジタル化でアップデート`}]},{oid:"1ae0639d22da25a88659ed9ac99c62906431ea77",message:`Update economy.md: SakanaAI → Sakana AI

Sakana AI 株式会社 https://sakana.ai/ の公式名称に合わせるための変更です`,committedDate:"2024-06-22T06:40:32Z",author:{name:"laiso",email:"github@lai.so"},url:"https://github.com/takahiroanno2024/election2024/commit/1ae0639d22da25a88659ed9ac99c62906431ea77",associatedPullRequests:{edges:[{node:{number:75,title:"Update economy.md: SakanaAI → Sakana AI",url:"https://github.com/takahiroanno2024/election2024/pull/75",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"bf4c5756947d7a92c4b2a6a1ad9e7c4dc43280b1",filename:"docs/manifest/economy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/1ae0639d22da25a88659ed9ac99c62906431ea77/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/1ae0639d22da25a88659ed9ac99c62906431ea77/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=1ae0639d22da25a88659ed9ac99c62906431ea77",patch:`@@ -67,7 +67,7 @@
     - アジア太平洋地域において、東京が近年より重視されつつある
         - 中国は地政学的リスクが高い
         - 日本の円安
-- OpenAI、Microsoft Research、SakanaAIなど、強い技術企業の拠点が東京に置かれ始めている
+- OpenAI、Microsoft Research、Sakana AIなど、強い技術企業の拠点が東京に置かれ始めている
 
 ## 「集め、育てる」機能をさらに伸ばす必要
 `}]},{oid:"9b0c7509c57304aa1e28d634a1b93c8509169662",message:`Update education.md：デュアル・デグリー → 単位互換制度

 - Xで用語がわかりにくいと指摘があったため\r
 - 用語の意味が国によって異なるため`,committedDate:"2024-06-22T06:00:36Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/9b0c7509c57304aa1e28d634a1b93c8509169662",associatedPullRequests:{edges:[{node:{number:71,title:"Update education.md：デュアル・デグリー → デュアル・ディグリー制度（複数学位取得制度）",url:"https://github.com/takahiroanno2024/election2024/pull/71",comments:{nodes:[{body:`- 2つの教育機関から学位を授与される「ダブルディグリー」\r
\r
と\r
\r
- 単に単位の共有を意味する（もらえる学位が一つであると示唆する）「単位互換制度」\r
\r
はもらえる学位の数という観点で、意味が大きく異なるのではないでしょうか？`}]},timelineItems:{nodes:[]}}}]},files:[{sha:"9a9e4d1d76528212b08bdd30d867aba87b4a3cb8",filename:"docs/manifest/education.md",status:"modified",additions:2,deletions:2,changes:4,blob_url:"https://github.com/takahiroanno2024/election2024/blob/9b0c7509c57304aa1e28d634a1b93c8509169662/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/9b0c7509c57304aa1e28d634a1b93c8509169662/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=9b0c7509c57304aa1e28d634a1b93c8509169662",patch:`@@ -20,7 +20,7 @@
 - 大学
     - 課題は学術都市としてのポテンシャルを活かしきれていない
     - 重点テーマは世界トップ大学の東京誘致
-    - 具体施策は海外一流大学のキャンパス誘致、都立大学でのデュアル・ディグリー推進
+    - 具体施策は海外一流大学のキャンパス誘致、都立大学での単位互換制度の推進
 
 ## 東京都の出生率は歴史的に低いが､夫婦はより多くの子供を期待
 
@@ -176,7 +176,7 @@
 - 海外一流大学のキャンパス誘致
     - ニューヨーク大学はアブダビ（アラブ首長国連邦）・上海に分校を設置。イェール大学はシンガポール国立大学と共同で「Yale-NUS大学」を設立（ただし2025年に閉校予定）
     - 都知事のリーダーシップのもと、キャンパス誘致を強化
-- 都立大学でのデュアル・ディグリーの推進
+- 都立大学での単位互換制度の推進
     - 東京都立大学と海外大学との共通単位を実現していく
         - 日本と海外の両方の学位を、それぞれ個別に取得するよりも短い期間で取得できるプログラム
         - 海外大学の学生が東京都立大学の学位取得のため東京に訪れる機会を創出し、人材交流を図れる`}]},{oid:"f40118b4bee4065595bd1ebddbf573857e66d898",message:"Update administration.md: ＵＩ → 使い勝手",committedDate:"2024-06-22T01:47:11Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/f40118b4bee4065595bd1ebddbf573857e66d898",associatedPullRequests:{edges:[{node:{number:59,title:"Update administration.md: ＵＩ → 使い勝手",url:"https://github.com/takahiroanno2024/election2024/pull/59",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"65beb6be716ad46f72533274e96a463682749177",filename:"docs/manifest/administration.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/f40118b4bee4065595bd1ebddbf573857e66d898/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/f40118b4bee4065595bd1ebddbf573857e66d898/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=f40118b4bee4065595bd1ebddbf573857e66d898",patch:`@@ -43,7 +43,7 @@
     - 都庁の仕事を支えるシステム基盤の連携と効率化
     - 区市町村での人材・ノウハウの充実
 - 取り組むべきこと
-    - デジタルサービスのＵＩ改善の徹底
+    - デジタルサービスの使い勝手の改善の徹底
         - デジタルネイティブ以外の世代にも使いやすく便利なサービスを
     - デジタルの恩恵をより広く
         - 行政手続のみならず、各種政策や情報公開についてもデジタル化でアップデート`}]},{oid:"aa9357dd0d11eb76f08f642c4aa587822f72b874",message:"Update education.md: STEAMの補足を追記",committedDate:"2024-06-22T01:42:54Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/aa9357dd0d11eb76f08f642c4aa587822f72b874",associatedPullRequests:{edges:[{node:{number:58,title:"Update education.md: STEAMの補足を追記",url:"https://github.com/takahiroanno2024/election2024/pull/58",comments:{nodes:[{body:`丁寧な補足をありがとうございます！\r
とても良いと思いました！`}]},timelineItems:{nodes:[]}}}]},files:[{sha:"bc0ab51dae5c52dc2ec4755d7dc6441f1b4ad160",filename:"docs/manifest/education.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/aa9357dd0d11eb76f08f642c4aa587822f72b874/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/aa9357dd0d11eb76f08f642c4aa587822f72b874/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=aa9357dd0d11eb76f08f642c4aa587822f72b874",patch:`@@ -89,7 +89,7 @@
 
 ## 幼児教育・小学校の放課後を効率よく、豊かに
 
-- STEAM活動に触れられる新世代児童館の設置
+- STEAM活動（Science、Technology、Engineering、Art、Mathematics）に触れられる新世代児童館の設置
     - 児童館等、子どもの放課後施設でSTEAM活動に触れられるようなハード（3Dプリンターなど）・ソフト（コンテンツ・スタッフ）を整備し児童生徒がテクノロジーに触れられる環境を作る。
     - 基礎自治体が新世代児童館に拡充する際に助成し、転換を促進する
 - 学童・保育業務のDX推進`}]},{oid:"3aa66fb22740f5f8b6bb4752bb76d74d9989f141",message:`Update care.md

More "safe" description`,committedDate:"2024-06-21T23:39:13Z",author:{name:"BABA Yoshihiko",email:"baba.yoshihiko@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/3aa66fb22740f5f8b6bb4752bb76d74d9989f141",associatedPullRequests:{edges:[{node:{number:52,title:"高齢者の財産管理",url:"https://github.com/takahiroanno2024/election2024/pull/52",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"c3f50ee058a9c4d310e57da9a83b03e5ae60677b",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/3aa66fb22740f5f8b6bb4752bb76d74d9989f141/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/3aa66fb22740f5f8b6bb4752bb76d74d9989f141/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=3aa66fb22740f5f8b6bb4752bb76d74d9989f141",patch:`@@ -49,7 +49,7 @@
     - 24時間調剤薬局の充実、コンビニでの処方薬受け取りが可能な特区の設立に向けた手上げ
 - 高齢者とその家族向けには、自分らしい一生を家族と共有しながら安心して暮らせる東京を作る。
     - ”自分らしい生き方”をアプリで定期的に振り返り周囲の人と共有
-    - 認知症になった場合でも、自分の思いの通りに健康・財産の管理ができる仕組みを周囲の人たちと技術で作りあげる。
+    - 認知症になった場合も含めて、自分の思いの通りに健康・財産の管理ができる安全な仕組みを技術で作りあげる。
     - 自身の治療方針をアプリに登録・定期的な更新を行うことで、意図しない治療・延命が行われることを防ぐ。
 - 医療従事者向けには、医師本来の仕事に集中し、安心して働ける東京を作りる。
     - 病院や介護施設の利用状況をデータベースとして最新化し、患者属性と掛け合わせ転院調整の自動マッチングし、”下り搬送”に関する医師の手間を圧縮`}]},{oid:"a945c25637738e996b5989a99fcaf43b8f3f36a9",message:`Update economy.md

”中国”など、特定の国の名指しは避けた方が良いと思います。実際には周辺国や都市と緊密な関係を築かなければなりません。`,committedDate:"2024-06-21T17:15:35Z",author:{name:"tomoto3",email:"149496794+tomoto3@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/a945c25637738e996b5989a99fcaf43b8f3f36a9",associatedPullRequests:{edges:[{node:{number:42,title:"Update economy.md",url:"https://github.com/takahiroanno2024/election2024/pull/42",comments:{nodes:[{body:"「強い技術企業が東京に集まるポテンシャル」があるという文脈で、中国より東京が（政治的に安定しているがゆえに）選ばれるという話ですので、外交問題等に触れるものではなく、特に問題はないかと思います。"}]},timelineItems:{nodes:[]}}}]},files:[{sha:"e27ece42207341b543eb884e28537f73c5d591de",filename:"docs/manifest/economy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/a945c25637738e996b5989a99fcaf43b8f3f36a9/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/a945c25637738e996b5989a99fcaf43b8f3f36a9/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=a945c25637738e996b5989a99fcaf43b8f3f36a9",patch:`@@ -65,7 +65,7 @@
     - 「AIを使った製品とサービスには欠点よりも恩恵がある」の質問に対して、日本は42%が「そう思う」と回答。イギリス38%、ドイツが37%、アメリカ35%、カナダ32%、フランス31%。
 - 地政学観点
     - アジア太平洋地域において、東京が近年より重視されつつある
-        - 中国は地政学的リスクが高い
+        - 特に東アジア地域は地政学的な課題を抱えている
         - 日本の円安
 - OpenAI、Microsoft Research、SakanaAIなど、強い技術企業の拠点が東京に置かれ始めている
 `}]},{oid:"60241a78cca3bca31c95cadd10ed59693f9bc744",message:"Change title from 爆増 to 倍増",committedDate:"2024-06-21T13:50:55Z",author:{name:"EG-easy",email:"1018eguchi@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/60241a78cca3bca31c95cadd10ed59693f9bc744",associatedPullRequests:{edges:[{node:{number:37,title:"Change title from 爆増 to 倍増",url:"https://github.com/takahiroanno2024/election2024/pull/37",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"5cc6ba370468556870c98e921c6a577bd7f44391",filename:"docs/manifest/economy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/60241a78cca3bca31c95cadd10ed59693f9bc744/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/60241a78cca3bca31c95cadd10ed59693f9bc744/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=60241a78cca3bca31c95cadd10ed59693f9bc744",patch:`@@ -1,4 +1,4 @@
-# 【現役世代】新産業で所得爆増
+# 【現役世代】新産業で所得倍増
 
 ![economy_png](./../images/manifest_slides/economy_v1.0.png)
 `}]},{oid:"f49253664f8854b72cb06942baf85b772a2281f7",message:`Merge pull request #12 from tomoto3/patch-1

Update economy.md`,committedDate:"2024-06-21T11:46:53Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/f49253664f8854b72cb06942baf85b772a2281f7",associatedPullRequests:{edges:[{node:{number:12,title:"Update economy.md",url:"https://github.com/takahiroanno2024/election2024/pull/12",comments:{nodes:[{body:"LGTM"}]},timelineItems:{nodes:[]}}}]},files:[{sha:"89ede41bd775667f69b5a0522a9d9fa5003b0b52",filename:"docs/manifest/economy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/f49253664f8854b72cb06942baf85b772a2281f7/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/f49253664f8854b72cb06942baf85b772a2281f7/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=f49253664f8854b72cb06942baf85b772a2281f7",patch:`@@ -88,7 +88,7 @@
     - 研究開発機関/スタートアップ拠点を集積
         - 東京都内の既存の大学や研究機関と連携
         - スタートアップグローバルキャンパス構想＠恵比寿との連携
-    - グローバルにおける存在感の向上
+    - 東京を国際的な技術革新の中心地とする
         - スタートアップや成長産業の関係者が、世界中から東京に集まるイベントの開催
     - 上記の結果として、都内の企業の全体的なレベルアップ＆海外投資家の誘致（ミドル/レイターステージでの資金注入）を実現
 - 東京西部エリアを「実装＆課題解決の場」とします`}]},{oid:"d1475262bef40ff904ebbe02cab52fe2aaedcdb0",message:`Merge pull request #21 from masatosasano2/patch-3

fix typo 202年25月号 → 2022年5月号`,committedDate:"2024-06-21T11:17:16Z",author:{name:"Imaizumi Takatsugu",email:"49748966+TakatsuguImaizumi@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/d1475262bef40ff904ebbe02cab52fe2aaedcdb0",associatedPullRequests:{edges:[{node:{number:21,title:"fix typo 202年25月号 → 2022年5月号",url:"https://github.com/takahiroanno2024/election2024/pull/21",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"39ddb9b77fd4c665d1d35c682ea7c9f6df06eb59",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/d1475262bef40ff904ebbe02cab52fe2aaedcdb0/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/d1475262bef40ff904ebbe02cab52fe2aaedcdb0/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=d1475262bef40ff904ebbe02cab52fe2aaedcdb0",patch:`@@ -23,7 +23,7 @@
         - しかし、夜間休日に医療にアクセスすることは難しく、育児や仕事の負担になっている。
     - 高齢者にとっての認知症リスク
         - 認知症大国となる日本。認知症の高齢者が保有する資産は東京だけで19.2兆円
-            - 三井住友信託銀行調査月報202年25月号　「経済の動き～膨らむ認知症高齢者の保有資産」からのデータ
+            - 三井住友信託銀行調査月報2022年5月号　「経済の動き～膨らむ認知症高齢者の保有資産」からのデータ
         - 自分の意図した通りの財産の管理や治療の方法を周囲に正しく伝える機会がない。
     - 医療従事者にとって形式ばかりの働き方改革
         - 労働時間の上限が設定された中、患者の数は増加予測`}]},{oid:"29b330c7900660df89bc72ce9356b78722eaf4d1",message:"fix typo 202年25月号 → 2022年5月号",committedDate:"2024-06-21T10:51:47Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/29b330c7900660df89bc72ce9356b78722eaf4d1",associatedPullRequests:{edges:[{node:{number:21,title:"fix typo 202年25月号 → 2022年5月号",url:"https://github.com/takahiroanno2024/election2024/pull/21",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"39ddb9b77fd4c665d1d35c682ea7c9f6df06eb59",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/29b330c7900660df89bc72ce9356b78722eaf4d1/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/29b330c7900660df89bc72ce9356b78722eaf4d1/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=29b330c7900660df89bc72ce9356b78722eaf4d1",patch:`@@ -23,7 +23,7 @@
         - しかし、夜間休日に医療にアクセスすることは難しく、育児や仕事の負担になっている。
     - 高齢者にとっての認知症リスク
         - 認知症大国となる日本。認知症の高齢者が保有する資産は東京だけで19.2兆円
-            - 三井住友信託銀行調査月報202年25月号　「経済の動き～膨らむ認知症高齢者の保有資産」からのデータ
+            - 三井住友信託銀行調査月報2022年5月号　「経済の動き～膨らむ認知症高齢者の保有資産」からのデータ
         - 自分の意図した通りの財産の管理や治療の方法を周囲に正しく伝える機会がない。
     - 医療従事者にとって形式ばかりの働き方改革
         - 労働時間の上限が設定された中、患者の数は増加予測`}]},{oid:"8569232db8cb33cb6240c6feece1296af1247b98",message:"fix: typo",committedDate:"2024-06-21T10:28:59Z",author:{name:"Tomoya Ishizaki",email:"zaq1tomo@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/8569232db8cb33cb6240c6feece1296af1247b98",associatedPullRequests:{edges:[{node:{number:16,title:"fix: typo",url:"https://github.com/takahiroanno2024/election2024/pull/16",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"2c7d6e17494a493eb5a2d533a72b78f531859dfc",filename:"docs/manifest/education.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/8569232db8cb33cb6240c6feece1296af1247b98/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/8569232db8cb33cb6240c6feece1296af1247b98/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=8569232db8cb33cb6240c6feece1296af1247b98",patch:`@@ -145,7 +145,7 @@
 
 - 構造・仕組みへのアプローチ
     - ジェンダーに関わらず学びたいことを学べるようになるための支援を促進。特に、文理決定前に注力する
-    - 小学生・中学生向け職業体験（日本版Girs day）実施
+    - 小学生・中学生向け職業体験（日本版Girls'Day）実施
     - 校外での学びプログラムを、関心や認知特性に合わせてマッチングするプラットフォームを設立
     - 体験格差を助長しないためのバウチャー制度を検討
 - 学びの内容・コンテンツへのアプローチ`}]},{oid:"d4082cd5f81b35240af91da9c65501c15f10a659",message:"Update economy.md",committedDate:"2024-06-21T10:06:29Z",author:{name:"tomoto3",email:"149496794+tomoto3@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/d4082cd5f81b35240af91da9c65501c15f10a659",associatedPullRequests:{edges:[{node:{number:12,title:"Update economy.md",url:"https://github.com/takahiroanno2024/election2024/pull/12",comments:{nodes:[{body:"LGTM"}]},timelineItems:{nodes:[]}}}]},files:[{sha:"89ede41bd775667f69b5a0522a9d9fa5003b0b52",filename:"docs/manifest/economy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/d4082cd5f81b35240af91da9c65501c15f10a659/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/d4082cd5f81b35240af91da9c65501c15f10a659/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=d4082cd5f81b35240af91da9c65501c15f10a659",patch:`@@ -88,7 +88,7 @@
     - 研究開発機関/スタートアップ拠点を集積
         - 東京都内の既存の大学や研究機関と連携
         - スタートアップグローバルキャンパス構想＠恵比寿との連携
-    - グローバルにおける存在感の向上
+    - 東京を国際的な技術革新の中心地とする
         - スタートアップや成長産業の関係者が、世界中から東京に集まるイベントの開催
     - 上記の結果として、都内の企業の全体的なレベルアップ＆海外投資家の誘致（ミドル/レイターステージでの資金注入）を実現
 - 東京西部エリアを「実装＆課題解決の場」とします`}]},{oid:"ef524bafe95484daf31dd2332fce0a0473aba03c",message:"refs #8 公的な情報発信用のWEBサイトやアプリに都政に対する意見表明への導線を追加してほしい",committedDate:"2024-06-21T09:37:34Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/ef524bafe95484daf31dd2332fce0a0473aba03c",associatedPullRequests:{edges:[{node:{number:9,title:"公的な情報発信用プラットフォームに都政への意見表明導線を追加",url:"https://github.com/takahiroanno2024/election2024/pull/9",comments:{nodes:[]},timelineItems:{nodes:[]}}}]},files:[{sha:"a53ee6cd4e4ba88d062524eaa404640f9eba86d3",filename:"docs/manifest/democracy.md",status:"modified",additions:1,deletions:0,changes:1,blob_url:"https://github.com/takahiroanno2024/election2024/blob/ef524bafe95484daf31dd2332fce0a0473aba03c/docs%2Fmanifest%2Fdemocracy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/ef524bafe95484daf31dd2332fce0a0473aba03c/docs%2Fmanifest%2Fdemocracy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fdemocracy.md?ref=ef524bafe95484daf31dd2332fce0a0473aba03c",patch:`@@ -106,6 +106,7 @@
     - 都民からの賛同を一定得たものは、都議会での議題に挙げる
 - 都民による政策議論
     - 都議会の論点に対して、都民からも広く意見を募集。
+    - 公的な情報発信を担うWEBサイトやアプリに意見投稿の導線を追加し、気になったことをその場でフィードバックできるようにする。
     - どういった意見があるのかを可視化し、閉じた議会の中だけでは得られない視点を取り込んでよりよい政策決定へ
 
 ## 政治参加の課題である「参加率の低迷」を打破する`}]},{oid:"457c6054a2db5cf7cecadd0177769445c3b5b754",message:"initial commit",committedDate:"2024-06-21T06:18:50Z",author:{name:"Muneyoshi Inahara",email:"kainekominto299@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/457c6054a2db5cf7cecadd0177769445c3b5b754",associatedPullRequests:{edges:[]},files:[{sha:"7c8ffe613103adb6751e9fe75043da8125e43f16",filename:"docs/manifest/administration.md",status:"added",additions:145,deletions:0,changes:145,blob_url:"https://github.com/takahiroanno2024/election2024/blob/457c6054a2db5cf7cecadd0177769445c3b5b754/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/457c6054a2db5cf7cecadd0177769445c3b5b754/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=457c6054a2db5cf7cecadd0177769445c3b5b754",patch:`@@ -0,0 +1,145 @@
+# 【行政運営】行政をもっと簡単・透明に
+
+![administration_png](./../images/manifest_slides/administration_v1.0.png)
+
+## 行政をもっと簡単、透明に
+
+- 現状認識
+    - 都の構造改革・DXの取り組みは近年大きく進展
+    - しかし生活者の満足向上につながっていない
+    - 行政の高度化には取り組むべき課題が山積
+- マニフェスト
+    - 便利さを実感できる行政サービスの提供
+        - 既存の取組を更に前に進め、行政手続のデジタル活用の100％徹底。
+        - 対面での手続きを維持するオムニチャンネルを前提に「行かせない」「書かせない」「待たせない」「迷わせない」行政手続の推進
+        - 「プル型からプッシュ型へ」個人に合わせた施策パッケージをAI活用により提案
+    - 徹底した情報公開により東京を透明に
+        - アクセス手段を多様化し、一人ひとりに合った形で情報が得られるようにする
+        - 都が持つ情報の公開を徹底する
+    - 自治体連携の推進による便利さの底上げ
+        - 協定等の政治的な枠組みだけでなくシステムとして連携を強め生活の利便性向上につなげる
+    - 政策の質、実行力を担保するデジタルリーダー
+        - 強いデジタルリーダーシップを持つ知事のもと、整備された基盤を適切に利活用していく
+
+## 現体制の下、東京都の構造改革・DXは一定進展
+
+- 行政手続きや内部事務のデジタル化の取り組みは確実に進展
+    - 行政手続のデジタル化は主要手続のうち都の権限で実行可能なものの約94％のデジタル化が完了。
+    - さらに、全行政手続（約28000プロセス）の22000プロセスについてデジタル化を実施。
+    - そのほか、キャッシュレス化、ペーパーレス化、FAXレス化も大きく進展。
+        - デジタルサービス開発時のユーザーテスト実施状況190件
+        - スタートアップとの協働件数153件
+        - 2023年12月末時点のオープンデータカタログサイトのデータファイル数63000件
+            - ソース：<https://speakerdeck.com/kouzoukaikaku/servicedesignguidelineversion2-dot-0>
+- 各行政分野でもデジタル化の取り組みが進められている
+    - 都庁各局では[シン・トセイ](https://shintosei.metro.tokyo.lg.jp/)により現場レベルでのDXが推進。子育て、教育、防災など様々な分野でデジタル技術を活用したサービスの開発が進められている
+
+## これまでの取組を前に進め、住民満足を更に高めることが重要
+
+- デジタル化を更に進める上での課題
+    - デジタル化による都民満足度
+    - DXの担い手となるデジタル人材の不足
+    - 今後爆増するデジタルサービスの品質確保
+    - 都庁の仕事を支えるシステム基盤の連携と効率化
+    - 区市町村での人材・ノウハウの充実
+- 取り組むべきこと
+    - デジタルサービスのＵＩ改善の徹底
+        - デジタルネイティブ以外の世代にも使いやすく便利なサービスを
+    - デジタルの恩恵をより広く
+        - 行政手続のみならず、各種政策や情報公開についてもデジタル化でアップデート
+        - 市区町村や近隣都道府県との連携により都民の生活圏をカバー
+    - 政策の質・実行力の確保
+        - デジタル人材の充実確保
+        - 知事自らデジタル化によるアップデートを推進するとともに意思決定支援体制の充実
+- デジタルに精通したリーダーの下、取組を加速
+
+## 後ろ向きな情報公開から前向きな情報公開へ
+
+- 民間では、関係者に企業の価値を理解してもらうための前向きな手法として積極的な情報開示が進められている
+    - 有価証券報告書：企業が株式や債券などの有価証券を発行する際に提出する報告書であり、主に金融庁に対して提出され、企業の財務状況や業績、リスクなどが開示
+    - 統合報告書：企業が株主や投資家、関係者に対して財務状況や業績に関する情報を提供するための報告書であり、主に年次決算に基づいて作成され、経営の状況や将来の展望、リスクをはじめ企業活動に関する情報を幅広く開示
+- 行政では…情報公開を住民とのコミュニケーションのための前向きな手段と捉え直し、公開する情報の範囲のみならず、利便性や伝え方を工夫していくべきではないか
+    - 情報開示＝不正を暴くというようなネガティブな文脈で使われることが多い
+    - そのため、後ろ向きで受動的な情報開示になる傾向があるのではないか
+
+## 都民にとって使いやすい行政に
+
+- ①行かせない
+    - 行政手続のオンライン申請の拡大
+    - 区市町村との連携を含めたリモート窓口の整備
+- ②書かせない
+    - オンラインでの事前入力
+    - マイナンバーカードの読み込みによる入力自動化
+    - AIを活用した応答型の入力システム
+- ③待たせない
+    - 混雑状況のリアルタイム配信
+    - 窓口のオンライン予約
+    - キャッシュレス化、内部手続のデジタル化などによる処理スピード向上
+- ④迷わせない
+    - AIを活用した総合案内
+    - 同時通訳化による外国人対応の充実
+    - 窓口のワンストップ化
+- 内部プロセスも含めあらゆる行政手続で徹底
+
+## 誰も取り残さないプッシュ型の政策提供
+
+- これまでの行政サービスは、大量の情報から自分に合ったサービスを探す必要があり、面倒さや、使えるサービスに気づかないという漏れが生まれていた
+- 今後は、プッシュ型で必要な政策情報を取得できるようにする。
+    - 本人情報や事前に入力した興味・関心から関連する政策をプッシュ型で提案（アプリやメールでの通知を想定）
+
+## 見やすい・わかりやすい情報公開により東京都の透明化
+
+- アクセス手段を多様化し、一人ひとりに合った形で情報が得られるようにする
+    - [政策ダッシュボード](https://www.seisakukikaku.metro.tokyo.lg.jp/basic-plan/choki-plan/dashboard)の充実
+    - 元データをCSV形式などで公表
+    - AIを活用しわかりやすく情報提供
+    - 情報公開制度などこれまでの提供手法の継続
+    - SNSも活用した広報活動の充実
+- 都が持つ情報の公開を徹底する
+    - 東京都の指標
+        - 財政状況や都の現状に関する各種統計情報
+            - 例：基金残高、待機児童数、犯罪被害数、救急搬送件数、観光客数、健康寿命　など
+    - 行政情報
+        - 都の行政運営上の各種決定事項・データ
+            - 例：補助金支出先、各種契約の締結先　など
+    - 政策検討状況
+        - 各種政策の検討段階での議論状況
+            - 例：都議会議事録、予算検討段階での重点事項　など
+
+## 東京・神奈川・千葉・埼玉が連携する枠組み/システム整備
+
+- 自治体連携の枠組みはあるものの生活において実感をもてない状況続く
+    - 災害対応では、
+        - 非効率的な避難所/避難ルート
+        - 都内部での地域格差
+        - 国への要望提出主体の分散
+    - 交通では、
+        - 東京への一極集中による交通渋滞、満員電車
+    - 行政サービスでは
+        - GovTech東京による区市町村支援は行われているが、満足度の実感向上は道半ば
+- 協定等の政治的な枠組みだけでなくシステムとして連携を強め生活の利便性向上につなげる
+    - 災害対応では、
+        - 災害時に一律で被害状況/帰宅ルートが把握できるシステム整備
+    - 交通では、
+        - 道路交通機関のダイナミックプライシングによる混雑の軽減
+        - バスなどの移動手段の設計についても広域で連携
+    - 行政サービスでは
+        - GovTech東京による区市町村支援の一層推進
+        - 子育て・介護をはじめとする住民に身近な行政サービスでの区市町村との連携強化
+
+## 更なるDX推進のため、技術への理解があるリーダーに託す
+
+- 過去は日本のデジタル競争力が低下していた
+    - デジタル競争力順位低迷
+    - IT人材のベンダー頼り、内部IT人材の不足
+    - 行政DXの遅れ
+- 現在は都として様々な取り組みを実施し、基盤整備を試みている
+    - [東京都デジタル人材育成基本方針](https://www.digitalservice.metro.tokyo.lg.jp/business/digital-hr/digital-hr-policy-v2)策定
+    - 都のサービスユーザーテストガイドライン制定
+- しかしいぜんとして現状の課題は残る。実行力・企画力の強化は道半ば
+    - インタビューした都庁職員の声：GovTech全体の組織は大きくなっているが、エンジニアの比重は少なく、絶対数が足りていない
+    - インタビューした都庁職員の声：内部手続きが多く、政策を考える十分な時間が確保できていない。また、整備された基盤に都政のトップの理解が追いついていない
+    - その結果、職場としての魅力がうすれ、東京都の採用試験の応募者数は2015年の2024人から、2022年委は697人にまで大幅に減少
+- 描く未来：強いデジタルリーダーシップを持つ知事のもと、整備された基盤を適切に利活用していく
+    - デジタル人材の活用、例えば元都庁職員の出戻り推進
+    - 都の意思決定の高度化、例えば各種アドバイザリーボードの設置`},{sha:"fab8dc53ad4a2ea44700616c3170dd02c025ac9c",filename:"docs/manifest/care.md",status:"added",additions:103,deletions:0,changes:103,blob_url:"https://github.com/takahiroanno2024/election2024/blob/457c6054a2db5cf7cecadd0177769445c3b5b754/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/457c6054a2db5cf7cecadd0177769445c3b5b754/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=457c6054a2db5cf7cecadd0177769445c3b5b754",patch:`@@ -0,0 +1,103 @@
+# 【先輩世代】とことん安心の医療・防災
+
+![care_png](./../images/manifest_slides/care_v1.0.png)
+
+## とことん安心の医療・防災
+
+- 現状認識・課題意識
+    - 医師の働き方改革と、高齢化社会のピークを迎える社会の医療体制維持の両立に対して、首都として解決策を示さなければならない。
+    - 東京の人口は､発災時のリスクになる｡一人ひとりの力を合わせれば､大きな備えになる。
+- マニフェスト
+    - **夜間休日オンライン診療/処方受取り方法の充実**
+    - **認知症への備えをアプリで支援**
+    - **先端技術を用いた医療従事者の働き方改革の推進**
+    - **テクノロジーを活用し､公助を補完する分散型・自助の災害対策を進める**
+
+## 医師が一番多い首都として、新しい医療のモデルを高齢化していく日本に向けて提示する責任がある
+
+- 2042年にピークを迎える高齢化社会による医療需要の爆発的な増加、2024年より始まった医師の働き方改革による供給の制限により、今後日本は急速な医療資源の不足に見舞われることが予測されている。
+    - 全国一位の医師数・病院数を持ち、首都である東京はこの危機的な状況にあたって、ただ今後各都道府県と医療リソースの取り合いをするのではなく、先端医療のモデルを先陣を切って打ち出し、持続可能な地域医療のモデルを日本へ示す責任を担っていく。
+- 現状の医療には多くの問題がある。
+    - 共働き家庭にとっての夜間・休日の医療体制
+        - 医師の数は日本１の東京
+        - しかし、夜間休日に医療にアクセスすることは難しく、育児や仕事の負担になっている。
+    - 高齢者にとっての認知症リスク
+        - 認知症大国となる日本。認知症の高齢者が保有する資産は東京だけで19.2兆円
+            - 三井住友信託銀行調査月報202年25月号　「経済の動き～膨らむ認知症高齢者の保有資産」からのデータ
+        - 自分の意図した通りの財産の管理や治療の方法を周囲に正しく伝える機会がない。
+    - 医療従事者にとって形式ばかりの働き方改革
+        - 労働時間の上限が設定された中、患者の数は増加予測
+        - 具体的な働き方改革実現の方法論がないまま目標だけが先走ってしまう。
+- 技術を使い、現役世代・高齢者の安心と医療従事者の働き方改革を両立させることはできないか？
+
+## 東京の高齢者のピークは2050年。医師が安心して働ける環境作りはまだ途上段階
+
+- 高齢化のピークが訪れる。
+    - 2050年には都民の3人に1人が高齢者になると言われている。
+- 医師の病院勤務時間における診療外の割合は24%
+    - 診察以外の勤務時間の割合が多い。
+- 医師の勤怠状況を把握している都内病院の割合は55%に留まる。
+    - 45%の病院は、自院の医師の勤務状況を把握しきれていない。
+- 来たる高齢化社会に向けて東京が十分な医療体制を整備できているかは不明瞭な点が多く、医師の働き方改革に具体的な推進策を示さなければならない。
+
+## 現役世代・高齢者が安心して一生を過ごすために、医療従事者の働き方改革に具体性のある解決策をAIで示す
+
+- 現役世代向けには、子供の発熱にも夜間休日の間に対応できて安心して暮らせる東京を作る。
+    - 夜間・休日オンライン診療と処方受け取りの充実
+    - \`#7119\` / \`#8000\` からオンライン診療窓口を含む医療機関紹介
+    - オンライン診療とバックアップ医療機関の情報連携の動線整備
+    - 24時間調剤薬局の充実、コンビニでの処方薬受け取りが可能な特区の設立に向けた手上げ
+- 高齢者とその家族向けには、自分らしい一生を家族と共有しながら安心して暮らせる東京を作る。
+    - ”自分らしい生き方”をアプリで定期的に振り返り周囲の人と共有
+    - 認知症になった場合でも、自分の思いの通りに健康・財産の管理ができる仕組みを周囲の人たちと技術で作りあげる。
+    - 自身の治療方針をアプリに登録・定期的な更新を行うことで、意図しない治療・延命が行われることを防ぐ。
+- 医療従事者向けには、医師本来の仕事に集中し、安心して働ける東京を作りる。
+    - 病院や介護施設の利用状況をデータベースとして最新化し、患者属性と掛け合わせ転院調整の自動マッチングし、”下り搬送”に関する医師の手間を圧縮
+    - 生成AIを用いた入退院サマリの作成補助。
+        - 七尾市の恵寿総合病院における実証実験では1/3の業務を自動化した実証実験結果あり。
+
+## 人口が多い東京ならではの､災害リスクがある 一人ひとりの力を合わせれば､大きな備えになる
+
+- 東京は防災の面から見ると以下のような特徴があります。
+    - 人口密度が6400人/㎢
+        - 迅速な避難や､きめ細かい支援の提供の難易度が高い。
+    - 障がいを持った方の人口が73万人、高齢者人口が311万人
+        - 多様なニーズを踏まえた､適切なケアを届ける必要がある。
+    - 外国人人口が63万人
+        - 災害時でもインクルーシブな東京になることは､移住の後押しに
+- 東京都は､1,400万人の人口､680万の住戸を抱える世界最大級の都市である一方､常に地震や水害のリスクに晒されています｡
+    - この人口の多さは､東日本大震災や北陸震災とは異なる形での防災対応が必要とする。
+- 人口の多さは防災対策を困難にする一方､災害対策の主体的な担い手となれる住民の数が多いことも意味します｡
+    - 例えば発災直後に､一人ひとりがスマホを使って情報を収集し､リアルタイムで共有できる仕組みを活用できれば､災害発生直後に行政の支援が行き届かない時にも助け合いを促進することができるし､その後の行政の動きをスムーズにすることができる
+- ただし､そのように個人が情報発信できる仕組みにおいては､フェイクニュース対策が必要不可欠です｡
+    - AI技術を活用し､信頼できる分散型の情報インフラを構築します。
+- もちろん､適切な救助・支援を実施するために都内市町村との間での連携方法は引き続き強化します｡
+    - そのうえで､AI･デジタル技術を活用した｢分散型｣の災害対策も進めていくことで､東京ならではのレジリエンスを実現したい。
+- デジタルを活用し､一人ひとりの力を災害時に発揮することで､迅速･きめ細かい支援を実現します。
+
+## テクノロジーを活用し､公助を補完する分散型・自助の災害対策を進める
+
+- 事前の備えとして、デジタル技術を活用した､避難訓練の実効性を強化
+    - スマホを活用して､自宅やオフィスから避難訓練を｢いつでも｣行える仕組み
+        - （ある道路が火災で封鎖されている､などのケースもAIを用いて作成可能）｡
+        - 通常の避難訓練は一斉に行う必要があるが､非同期化することで参加率･回数を高められる。
+    - また､その際に､避難所においてマイナンバーカード等でチェックインを行うことで､非同期であっても避難訓練の参加率を把握し､都が啓発･普及に役立てることができる｡
+        - チェックインを行った住民にポイント等を付与することで､インセンティブ付けを行うことも選択肢の一つ
+- 発災直後には、住民が自ら情報提供できる分散型情報インフラの構築
+    - 行政の支援が届く前に､現場の情報を共有できる仕組み
+        - AIによる誤情報対策も実施
+    - 避難所運営においても､住民によるリアルタイムの情報を都が活用し､必要な支援をスムーズに届けられるようにする。
+        - 特定のニーズを抱えた住民の所在 等
+- 避難・復旧時には、避難所運営･きめ細かい支援提供を技術でスムーズ化
+    - 避難所での住民登録（チェックイン）や､医薬品の配送にマイナンバーカードや処方情報を活用
+
+## デジタル技術を活用した､次世代の避難所運営(イメージ)
+
+- これまで
+    - 入所時に､避難者が紙で情報を登録
+    - どのようなケアが必要な人が､どこにいるのか分からない
+    - 運営者の負担増加､ケアが届かない
+- これから
+    - マイナンバーカードで入退所管理
+    - 言語や医療の支援が必要な方も一元的に把握し､迅速なケアを提供
+    - スマホで体調や状況を登録`},{sha:"592557a684cfb7580c0ce3d47a4459b8a86807e6",filename:"docs/manifest/democracy.md",status:"added",additions:126,deletions:0,changes:126,blob_url:"https://github.com/takahiroanno2024/election2024/blob/457c6054a2db5cf7cecadd0177769445c3b5b754/docs%2Fmanifest%2Fdemocracy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/457c6054a2db5cf7cecadd0177769445c3b5b754/docs%2Fmanifest%2Fdemocracy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fdemocracy.md?ref=457c6054a2db5cf7cecadd0177769445c3b5b754",patch:`@@ -0,0 +1,126 @@
+# 【民主主義】高速な民意反映
+
+![democracy_png](./../images/manifest_slides/democracy_v1.0.png)
+
+## より良い都政を、皆さんとともに
+
+- 現状認識・課題認識
+    - 声を届けたいという都民の意思に対して、十分に対応できる仕組みが整っていない
+    - デジタルを活用することで、広く・早く都民の声を集め、民意を都政に反映していけないだろうか
+- マニフェスト
+    - 都民の声を広く・早く聴く「ブロードリスニング」
+    - 都の情報・都政の情報をわかりやすく発信する
+    - 都民同士が意見を交わし、都政の意思決定に参加できる場を作る
+
+## 都民の声は、もっと都政に活かせる
+
+- 都政への要望のトップは3年連続で「都民の意見や要望をよく知る」
+    - <https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2024/01/26/documents/01_01.pdf>
+    - 東京都政策企画局が実施した「都民生活に関する世論調査（令和６年１月）において、これからの都政の進め方に対して特に望むことという問いへの回答は、「都民の意見や要望をよく知る」が3年連続1位かつ増加傾向であった
+- 多様化する社会の中で、最も都民の想いを理解しているのは都民自身である。現場に近い声を吸い上げなければ適切なビジョンもプランも作成できない
+
+## しかし、現状のやり方では限界がある
+
+- 人口1400万人超の日本最大の自治体で、既存のやり方で一人ひとりの声を適切に聴くのは、マンパワーの限界である
+    - 現状都民が都政に要望を届けるルートとしては、メールが最も多いが、電話・FAX・郵送なども根強いルート
+        - 令和4年度年次報告　都政への提言、意見、要望等の状況という調査では、令和4年度の都民の声受付件数としてはメールが29768件、電話が15236件、ファクシミリが940件、郵送が803件、来訪等が178件という内訳だった
+        - <https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2023/09/15/documents/01_01.pdf>
+- 特に音声でのコミュニケーションは話し手の時間と聞き手の時間を同量消費するので、都民より人数の少ない都職員が「声」を広く聞くのは物理的に不可能である
+
+## ①都民の声を広く・早く聴く「ブロードリスニング」
+
+- 都から情報を広く知らしめる「ブロードキャスト」だけでなく、都民の声を広く聴く「ブロードリスニング」をテクノロジーの力で実現する
+- 集める声の広さを担保すべく、既存の「都政への要望・提言」手段に加え、意見表明のハードルをより下げるような新手段を提案する。
+    - LINEの活用、「東京アプリ」の開発など
+- 集まった声は技術を活用しわかりやすくレポート化し公開する。都議会において政策検討に活かすのはもちろん、都民自身が都政を知り考える材料とすることが可能になる
+
+## 「ブロードキャスト」ではなく「ブロードリスニング」を
+
+- 一人の声を多数へ発信するブロードキャストだけではなく、多くの声を上手に収集するブロードリスニングが必要
+    - 既存の意見募集は、多数の意見をそのまま聴くため、受け取り側がパンクする
+    - <https://scrapbox.io/nishio/%E3%83%96%E3%83%AD%E3%83%BC%E3%83%89%E3%83%AA%E3%82%B9%E3%83%8B%E3%83%B3%E3%82%B0>
+- テクノロジーを使って、「発信」だけでなく「受信」をアップデート
+
+## 意見表明のハードルを下げる新手段を提案
+
+- LINEやスマホアプリなど日常に溶け込んだツールを活用
+    - LINEを送るだけ・アプリでのプッシュ通知に答えるだけ・SNSにつぶやくだけなど、現行手段よりもデジタル世代が手軽に利用できるチャネルを拡充する
+- 意見表明を習慣化できる仕掛けづくり
+    - 不定期に開催されているパブリックコメントについて、毎月定例の枠を用意し、意見表明を習慣化する
+    - 日頃都政に対しての課題を考える時間がなく、言語化できていない都民の方に対しても、都から論点を提示しプッシュ型でお聞きすることで、意見表明を促す
+- 既存手段にデジタルを掛け合わせ、より利便性を向上
+    - 公共施設等にタブレットを設置、職員＋AIアシスタントにより、その場で音声で意見を伝えられる仕組み
+    - 電話でAIアシスタントが意見を聴取、電子データ化し分析
+    - 今回のデジタル化でねん出された都職員の工数を、地域への出張聞き取りへ。AIアシスタントを帯同し、各地域の集会所等でヒアリングを定期的に実施、データを広く収集
+
+## 集まった声をわかりやすく公開
+
+- 声を集めるだけでなく、如何に都政に活かせる形に加工し活用するかがカギ
+    - 集めた声は、テクノロジーを使ってわかりやすい形式に編集
+        - 似た意見同士をグループ化
+        - 主な意見を要約し、短時間でも理解しやすく
+    - プライバシーに配慮した形で、可能な限り全ての声を公開
+        - 「みんなの声」を見る権利は「みんな」にある
+        - 都民とともに考える都政へ
+- 実際に本選挙期間において安野の出馬に関する人々の意見をレポート化し公開
+- AIによる「要約」により誰もが全体像を理解しやすい形の情報発信を
+
+## ②都政の情報をわかりやすく発信する
+
+- 現行の取り組みで政策の進捗などが見える化されつつあるが、いまだに都民の皆様からの「もっと情報発信してほしい」のニーズは根強い
+- 政策の結果だけでなく、議論過程も透明化するため、都議会の議事録などを技術を用いて加工しわかりやすく発信していく
+- 「都議会AI」を作成。都民の皆様がテキストや音声で質問をすることで、気軽にご自身の知りたい内容を把握できるような仕組みを作る
+
+## 「もっと情報発信してほしい」というニーズは今も根強い
+
+- 東京都政策企画局が実施した「都民生活に関する世論調査（令和６年１月）において、これからの都政の進め方に対して特に望むことという問いへの回答は、令和5年の調査で３５．４％が「都政情報をわかりやすく提供する」、また２７．６％が「情報公開を積極的に進める」と回答。全体の3位と4位にランクインした
+    - <https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2024/01/26/documents/01_01.pdf>
+- ここ数年で情報公開については大きな前進は見られるものの、まだまだ歩みを止めてはいけない
+
+## 都議会議事録などをわかりやすく発信し議論過程も透明化
+
+- 政策の成果の見える化を各種進めている点は、継続
+    - 政策ダッシュボードなどの取り組みは評価できる
+- 議論過程も透明化すべく、都議会議事録などをわかりやすく加工し発進
+    - 今回の選挙キャンペーンでも実験的にレポートを公開している
+
+## 「都議会AI」を作成し、都民が気軽に質問できる環境を
+
+- 大量の情報がただ公開され続けるだけでは都民にとってわかりやすいとは言えない。例えば以下のようなニーズが起きうる
+    - たくさん公開されても困る、興味があるところだけまずは知りたい
+    - 専門用語がピンとこない、誰かにわかりやすく解説してほしい
+- 都議会の議論内容を学習させたAIを作成し、24時間都民からの質問に答え、都政の今を伝える仕組みを構築する
+
+## ③都民が都政に参加できる場づくり
+
+- 都民参加型予算編成や、都民からの政策提案・意見収集を受け付けられる「都政参加プラットフォーム」を構築する
+- 現行の各種政治参加の取り組みの課題である「参加率の低迷」の打破のため、周知活動を行ったり、参加方法の幅を広げる
+
+## 都民向け「都政参加プラットフォーム」を構築・活性化する
+
+- 都民参加型予算編成
+    - 世界3,000以上の都市で実施されている「参加型予算編成」を東京で本格展開。現在の「都民提案」を改善していく。
+    - Quadratic Votingなど必要な仕組みを取り入れ、納得感をあげていく
+- 都民による政策提案
+    - 様々なイシューに対し、選挙期間に限らず都民が自由に政策提案できるプラットフォームを。
+    - 都民からの賛同を一定得たものは、都議会での議題に挙げる
+- 都民による政策議論
+    - 都議会の論点に対して、都民からも広く意見を募集。
+    - どういった意見があるのかを可視化し、閉じた議会の中だけでは得られない視点を取り込んでよりよい政策決定へ
+
+## 政治参加の課題である「参加率の低迷」を打破する
+
+- 現行日本で行われている参加型予算編成はいずれも参加率が低いことが問題視されている
+    - 三重県では、投票数の少なさから「少ない民意で税金の使い道を定めてよいのか」と異議が申し立てられ中止になったことも
+    - 東京都が現在行っている参加型予算編成も、人口1400万人に対して投票数は数万票程度と参加率は低い
+- 参加率の低迷の原因と考えられる「認知度の低さ」「興味のなさ」「参加するハードルの高さ」について打ち手を打つ
+    - 認知度向上のための周知活動
+    - 政治への興味が高まるタイミングでの抱き合わせ実施
+    - イベント性を持たせる。ビジネスコンテスト化、ハッカソン化する
+    - 様々な手法を使い、「参加を待つ」ではなく「都民の元に参加の場所を届ける」意識
+        - アプリからプッシュ通知
+        - 地域出張所で対面での参加の場を複数設ける
+    - 公共施設に専用端末を設置し、端末を持たない人も参加を促す
+    - 事業提案を気軽にできる広報を行う。政治の専門知識がなくとも、身近に感じる課題から気軽に提案を挙げてもらう
+- 人間の苦手をデジタルで補い、より広く・早い民意反映で、東京都をアップデートする
+    - 少子高齢化の加速する日本・東京において、「今までと同じやり方」では現状維持も難しい。人の弱点を補い・負担を軽減するデジタル活用で、よりよい都政を実現する`},{sha:"0942916f0deeac4a3f122a5b8923b9ac51fc82d2",filename:"docs/manifest/economy.md",status:"added",additions:153,deletions:0,changes:153,blob_url:"https://github.com/takahiroanno2024/election2024/blob/457c6054a2db5cf7cecadd0177769445c3b5b754/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/457c6054a2db5cf7cecadd0177769445c3b5b754/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=457c6054a2db5cf7cecadd0177769445c3b5b754",patch:`@@ -0,0 +1,153 @@
+# 【現役世代】新産業で所得爆増
+
+![economy_png](./../images/manifest_slides/economy_v1.0.png)
+
+## 強い技術企業の育成・誘致により、都民の所得倍増
+
+- 現状認識・課題意識
+    - 経済成長のドライバーは
+        - ①人口増加、
+        - ②天然資源の活用、
+        - ③テクノロジー
+    - と言われているが、①と②は日本では望みづらい
+    - 日本・東京の経済成長は技術産業にかかっているといっても過言ではなく、加えて、特定産業への選択と集中は、国ではやりづらいが、都ならできる
+    - 一方で現状、強い技術企業の発展に繋がる人材・産業を「集め、育てる」ことに課題あり
+- マニフェスト
+    - 強い技術企業の育成・誘致による経済活性化・所得倍増のため、以下を行う
+        - **産業が集まるための特区作り**
+            - 例）東京西部に自動運転特区を設置し経済活性化&多摩・島しょ地域のバス・タクシーの人手不足を解決
+        - **世界中から優秀な技術者・研究者が住みたいと思う東京作り**
+
+## 世界の時価総額ランキングの上位は、技術企業が占めている
+
+- 時価総額ランキングの変遷を見ると、2005年時点での時価総額世界トップ10の企業のうち技術企業は4社だったが、2024年時点ではトップ10のうち8社が技術企業である
+
+|      | 2005年                      | 2024年                      |
+| ---- | --------------------------- | --------------------------- |
+| 1    | US ゼネラル・エレクトリック | US アップル                 |
+| 2    | US エクソンモービル         | US マイクロソフト           |
+| 3    | US マイクロソフト           | SA サウジ・アラムコ         |
+| 4    | US シティグループ           | US アルファベット           |
+| 5    | GB BP                       | US アマゾン                 |
+| 6    | GB ロイヤル・ダッチ・シェル | US エヌビディア             |
+| 7    | US P&G                      | US メタ                     |
+| 8    | US ウォルマート             | US バークシャー・ハサウェイ |
+| 9    | JP トヨタ自動車             | US テスラ                   |
+| 10   | US バンク・オブ・アメリカ   | US イーライリリー           |
+
+## 強い技術企業の育成・誘致できると、経済が活性化し所得水準が向上
+
+- 強い技術企業の育成・誘致が所得向上に繋がった事例
+    - 自動車産業...世界有数の大企業であるトヨタの本社周辺には「企業城下町」と呼ばれる都市が形成されている。
+    - ソフトウェア産業...米西海岸のベイエリアやインドのバンガロールには大学・研究機関が集積していたため、強い技術企業が拠点を置いたことで新しい街が生まれた。
+    - 半導体産業...熊本県では半導体工場誘致に伴い、人口流入が顕著。TSMC直雇用は2000人程度だが、暮らしを支える産業が登場することでそのほかにもたくさんの雇用が生まれ経済効果も出ている。
+
+## 技術企業が集まると、既存産業のさらなる発展にも繋がる
+
+- 例えばAIの技術発展に伴い、多くの既存産業が発展を遂げた
+    - モビリティ産業での自動運転の実現
+    - サービス産業での多言語対応・自動化の実現
+    - 教育産業でのAIチューターの実現
+    - 一次産業では農業の効率化の実現
+    - 不動産産業ではバックグラウンドチェックの進化
+    - 防災産業では避難所の情報収集の高度化
+    - 医療では医師の需給最適化
+    - 伝統工芸品では技術継承や海外進出の推進
+- 逆にいうと、東京（日本）にAIスタートアップが増えないと、日本で使いにくいモデルやサービスが今後量産されてしまう
+
+## 強い技術企業が東京に集まるポテンシャルは、すでにある
+
+- 学術都市として東京の魅力
+    - 世界の都市総合力ランキングで「研究・開発」部門4位にランキング
+    - 東京は働きたい都市
+        - Google等のエンジニアにも東京オフィスで働くことは人気
+- AIに親和的な法規制・文化
+    - 「AIを使った製品とサービスには欠点よりも恩恵がある」の質問に対して、日本は42%が「そう思う」と回答。イギリス38%、ドイツが37%、アメリカ35%、カナダ32%、フランス31%。
+- 地政学観点
+    - アジア太平洋地域において、東京が近年より重視されつつある
+        - 中国は地政学的リスクが高い
+        - 日本の円安
+- OpenAI、Microsoft Research、SakanaAIなど、強い技術企業の拠点が東京に置かれ始めている
+
+## 「集め、育てる」機能をさらに伸ばす必要
+
+- 産業を「育てる」ための課題
+    - 創業初期の支援制度は充実してきている。
+    - 一方で、事業の成長期を支えるための環境整備は不十分。
+        - レイターステージのための大型資金（海外投資家）が不足
+        - 社会インフラとなる事業を実装し、育てるためのフィールドが不足
+- 人を「集める」ための課題
+    - 魅力はあるものの、海外の方にとって「暮らしやすい」とは言えない東京
+        - 医療、お金の手続き、住居について困ったことがあると回答した在住外国人が半数以上
+        - 役所手続きにおいては、申請用紙の書き方や行くべき窓口、職員の説明がわからない等の課題がある
+        - 子育て世帯においては保育/幼稚園の入園方法やその仕組みの難しさが課題として存在
+
+## 強い技術企業を育成・誘致すべく、①産業が集まるための特区作り
+
+- 東京区部エリアを「集積・交流の場」とします
+    - 研究開発機関/スタートアップ拠点を集積
+        - 東京都内の既存の大学や研究機関と連携
+        - スタートアップグローバルキャンパス構想＠恵比寿との連携
+    - グローバルにおける存在感の向上
+        - スタートアップや成長産業の関係者が、世界中から東京に集まるイベントの開催
+    - 上記の結果として、都内の企業の全体的なレベルアップ＆海外投資家の誘致（ミドル/レイターステージでの資金注入）を実現
+- 東京西部エリアを「実装＆課題解決の場」とします
+    - スマートシティにまつわる企業を集積・サービス実装することで、産業発展と課題解決を実現
+        - 多摩地区を自動運転先進都市へ
+            - 多摩地区では既に自動運転の実証実験等が行われている
+            - 自動運転の実装により、バス・タクシーのドライバー不足問題を解決する
+
+## 東京西部では「新しいモビリティのあり方」が喫緊の課題
+
+- 人口減少で難しくなる公共交通の維持
+    - 東京都の人口は2025年〜2030年をピークに減少。
+    - 人口減少と、高齢化で外出が減ることで、公共交通が利用されなくなると、バスやタクシーのサービス水準の維持が困難に。
+    - 東京都の後期高齢者の増加数（2015年→2025年）は54.0万人*（推計）で全国1位！
+        - 高齢者の居住安定確保プラン（平成30年3月/東京都住宅政策本部）からのデータ
+- バスやタクシーの担い手が不足
+    - 多摩・島しょ地域を中心に、人手不足でバスの減便が相次いでいる。
+    - バスやタクシーの担い手の皆さんの業務をサポートする仕組みが必要。
+        - バス運転手の平均年齢は53.4歳*と高齢化が進んでいる。
+            - 令和５年版 国土交通白書（国土交通省）からのデータ
+- 交通が不便な地域では免許返納が不安
+    - 東京都の交通不便地域には、23区で66万人、多摩地域で145万人の方が暮らしている。
+        - 東京都における地域公共交通の在り方検討会より
+        - 交通不便地域：平均傾斜角度が2%以上の急峻な地形のエリア、又は、鉄道駅800m、バス停（30本/日以上）300m圏域外のエリア
+    - 高齢者の方々からは、免許返納したら外出が減り、健康的な生活が送れなくなると不安の声がある。
+
+## 世界では自動運転は実用化され始めている
+
+- アメリカ・サンフランシスコや中国・北京で無人タクシーのサービスが始まっています。Google系列のWaymoなどが実施しています。
+- 日本でも2023年4月に改正道路交通法が施行され、特定条件下では、遠隔監視のみで、運転手が乗車しない無人自動運転の路線バスなどを運行できるようになりました。
+
+## 自動運転で、誰もが自由に外出できる社会を実現！
+
+- 東京西部を自動運転先進地域として、自動運転サービスの実用化を実現
+    - 23区で生まれる技術者・研究者の交流やスタートアップの集積を多摩・島しょ地域の課題解決に活用
+    - バス・タクシー運転手の労働環境改善／交通空白地帯の解消
+    - 商業や観光、医療などの周辺領域と自動運転を組み合わせた収益化や社会的インパクトを支援
+
+## 強い技術企業を育成・誘致すべく、②世界中の優秀な技術者・研究者が住みたいと思う東京作り
+
+- 日本語の不自由さによる言語障壁/暮らしのインフラ整備の難しさ
+    - 生成AIを活用し、行政・暮らしのDXにより解決
+- 外国語で診療を受けられる医療体制の欠如
+    - 「医療」政策パートで後述
+- 子供の教育環境の手薄さ
+    - 中高一貫の都立インターナショナルスクールを設立
+
+## 生成AIによる言語障壁/暮らしのインフラ整備の課題解決
+
+- これまで
+    - 「東京で住む」ための手続きは大変。それぞれのDXは進んでいるが行政手続・住居・銀行口座開設という3つの準備を整えるまでに労力がかかる。
+        - 初めて東京に引っ越してきた際に「手続きの手戻りが繰り返し発生して『悪魔の循環』が発生した」と言う声複数（ヒアリングによる）
+- これから
+    - 生成AIを活用して「東京に住むために必要なこと」が一目でわかり、手続きがスムーズに。
+        - 東京での暮らしを始める上で必要な手続きが一目でわかり、スムーズに。
+        - 行政手続きはもちろん、住宅や生活インフラ申込など民間事業者にまつわる手続きのワンストップ化の方策も検討
+
+## 中高一貫の都立インターナショナルスクール設置・増設
+
+- 東京に住みたいと思う技術者・研究者は多いが、トップレベルのインターナショナルスクールが少なく「子供を育てられない」と諦めることが多い
+- 優れたインターナショナルスクールの東京誘致により世界の技術者・研究者が「家族で住める」東京へ。
+    - 合わせて都内公立中高のインターナショナルスクール化支援を実施し、東京近郊の中高生に最高峰のグローバル教育環境を提供`},{sha:"44d85e3889bb9dc99cbe905555fa349003e7232b",filename:"docs/manifest/education.md",status:"added",additions:183,deletions:0,changes:183,blob_url:"https://github.com/takahiroanno2024/election2024/blob/457c6054a2db5cf7cecadd0177769445c3b5b754/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/457c6054a2db5cf7cecadd0177769445c3b5b754/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=457c6054a2db5cf7cecadd0177769445c3b5b754",patch:`@@ -0,0 +1,183 @@
+# 【未来世代】世界一の子育て・教育環境
+
+![education_png](./../images/manifest_slides/education_v1.0.png)
+
+## 世界一の子育て・教育環境の実現へ
+
+- 出産
+    - 課題は東京都の出生率0.99
+        - 「子どもを産む、育てる」ことへの不安が強い
+    - 重点テーマは出産・子育てのインフラの整備
+    - 具体施策は不妊治療の促進、住宅費・教育費の支援
+- 幼児・小学校
+    - 課題は保育・学校外の学びの質向上
+    - 重点テーマは幼児教育・小学校の放課後を効率よく、豊かに
+    - 具体施策は新世代児童館の設置、学童・保育業務のDX・推進
+- 中学・高校
+    - 課題は一人ひとりに合わせた学びへのアクセス
+    - 重点テーマは個性に応じた多様な教育
+    - 具体施策は学校内外の多様な学びの場の提供、教員の働き方改革とリスキリングの促進
+- 大学
+    - 課題は学術都市としてのポテンシャルを活かしきれていない
+    - 重点テーマは世界トップ大学の東京誘致
+    - 具体施策は海外一流大学のキャンパス誘致、都立大学でのデュアル・ディグリー推進
+
+## 東京都の出生率は歴史的に低いが､夫婦はより多くの子供を期待
+
+- 東京都の合計特殊出生率は低迷。
+    - 2023年についに1を下回った。
+        - 2023年度の合計特殊出生率は0.99。
+        - 2023年の出生者数86347人、前年比4750人減少。
+- 夫婦の理想子供数と現存子供数には大きな差があり､理想実現に向けたサポート余地が存在。
+    - 夫婦の理想子ども数の平均は2.25だが、実際の出生子ども数は1.73と乖離。
+
+## ｢1人目の子供を持つ｣､｢3人以上の子供を持つ｣の2つの課題が存在
+
+- ｢一人目が生まれない｣､｢金銭的負担が重たい｣が重要な課題
+    - 一人目の子供を持たない理由の上位3位
+        - 1位「欲しいけれどもできない」62%
+        - 2位「高年齢出産の負担が重たい」23%
+        - 3位「金銭的負担が重たい」18%
+    - 子どもを3人欲しいが持たない理由の上位3位
+        - 1位「金銭的負担が重たい」59%
+        - 2位「高年齢出産の負担が重たい」42%
+        - 3位「育児の負担が重たい」24%
+- 東京23区では教育費がかかる。
+    - 2023年は全国平均比で2.3倍。
+        - 1世帯当たり教育費推移で見ると、全国平均が10446円なのに対して東京都23区では24160円と2.3倍もの開きがある
+
+## 安心して子供を産み育てるための2つの支援
+
+- 子どもが欲しい方に向けての支援
+    - 自費で実施される「先進医療」に係る費用の助成額の上限を取り除きます
+    - 無痛分娩に対する助成などさらなる負担低減を広げていきます
+    - 不妊治療の夜間診療の拡充を図るなど、より多くの人が受診機会を得られるよう提言します
+    - 不妊治療に向けた休暇をとりやすい制度や柔軟な働き方の実現に向けて提言します。
+- 子育ての経済的負担に向けての支援
+    - 子育て世帯に向けて、家賃の一部を割引する制度を拡充します
+    - 教育費（塾代・受験料）に向けての貸付事業を、所得制限に応じて給付制度とします
+
+## 不妊治療の3つの負担をサポートします
+
+- 経済的負担
+    - 不妊治療のうち、自費で実施される「先進医療」に係る費用の助成額の上限を取り除きます。
+    - 無痛分娩に対する助成などさらなる負担を広げていきます。
+- 時間的負担
+    - 不妊治療の夜間診療の拡充を図るなど、より多くの人に受けられるように提言します。
+- 心理的負担
+    - 不妊治療に向けて非開示休暇をとりやすい制度や柔軟な働き方を取り入れるよう企業へ提言します。
+
+## 子育てにかかる経済的負担への支援をより手厚く
+
+- 住まいの費用
+    - 既存政策では40歳代までの夫婦世帯の方に対して、市部の一部空家を対象に、入居から3年間、毎月の家賃を20％割引している。（JKK東京｜ペアさぽ）
+    - 我々の提案は、その優遇期間を第一子義務教育修了年限まで拡大
+- 教育費用
+    - 既存政策では中学3年生・高校3年生（またはこれに準ずる者）を対象に塾費用や受験料の無利子での貸付
+        - 東京都社会福祉協議会による受験生チャレンジ支援貸付事業
+    - 我々の提案は、所得制限に応じて、貸与から給付へ転換すること
+
+## 保育・学童クラブでは、量より質の議論へ
+
+- 保育所の待機児童数はここ数年で大幅に減少した。
+    - 平成30年度5414人から令和5年286人。
+- 一方で、質はまだまだ改善の余地がある。
+    - 「子ども」の体験の向上
+        - 世界の子どもたちの放課後体験は更に充実。
+    - 「保育・学童で働く方」の体験の向上
+        - 東京都で働く保育士の方のうち、40.1%が「事務、雑務の軽減」を希望。60%超が「特別な支援を必要とする子どもへの接し方」「発達心理学」「実技」をより学びたいと回答
+
+## 幼児教育・小学校の放課後を効率よく、豊かに
+
+- STEAM活動に触れられる新世代児童館の設置
+    - 児童館等、子どもの放課後施設でSTEAM活動に触れられるようなハード（3Dプリンターなど）・ソフト（コンテンツ・スタッフ）を整備し児童生徒がテクノロジーに触れられる環境を作る。
+    - 基礎自治体が新世代児童館に拡充する際に助成し、転換を促進する
+- 学童・保育業務のDX推進
+    - 学童・保育業務の中で共通してDX化できる部分のDX化支援を都が行う（情報発信プラットフォームの共通化など）
+    - 保護者向け子育て講座など、必ずカバーする必要があるものについては都でフォーマット化し、各区・施設の負担を軽減する
+    - 効率化された時間を用いて学童・保育スタッフが「子どもに向き合う」時間とスキルの質を高める
+
+## 最先端の学びに触れられる機会を作る
+
+- 海外・国内ともでは英国・米国では子どもが最先端テクノロジーに触れられる公設機関が存在
+    - 国・自治体とハイテク企業･財団が開設した、最先端の科学が学べる幼稚園・放課後学習支援施設が存在（米国・英国など）
+    - 日本国内でも、子どもが放課後に最新のテクノロジーに触れられる公設民営型施設が存在（石川県加賀町・徳島県松茂町など）
+- STEAM活動に触れられるハードを設置し、企業連携から良質なコンテンツを集めていく
+    - 最先端のハード、社会資源へのアクセス、良質なコンテンツを揃える
+
+## 多様な学びの選択肢へのニーズは広がっているが、親の負担や情報不足から十分にリーチしていない
+
+- 小・中学校における不登校児童数は30万人に迫る勢い。現時点でも公教育の学び方にあっていないお子さんが増えてきている
+    - 2022年度の実績で不登校児童・生徒数は299048人で全体の3.2%
+- 校外の学びの機会に参加しなかった割合が多く、保護者が関わらなくてよいプログラムの充実と情報格差が課題に
+    - 公的機関が行う行事への参加状況として、「参加しなかったが全体の46.8%
+    - 参加しなかった理由は「子どもが関心を示さないから」が34.3%で1位だが次いで「保護者などの時間的負担が大きいから」が24.3%、「団体や行事などがあることを知らないから」が16.8%だった
+
+## STEAMへの就職・進路にはいまだにジェンダーバイアスが強く働いている
+
+- ITエンジニアとして働く就業者のうち、女性が占める比率を集計したところ、OECD加盟国の平均を割り、下位に低迷
+    - ITエンジニアにおける女性比率は日本は16.90%に留まる
+- 男女間での分野別の進学の偏りは改善しつつも残存、女性比率は理工系を中心に低水準
+    - 分野別大学入学者における女性比率を理工系分野について比較すると、2003年から2023年にかけて改善はしているが未だ低い
+        - 工学は10.6%が16.1%に
+        - 理学は25.8%が27.9%に
+        - 農学は41.3%が46.1%に
+        - 医歯薬は43.5%が50.1%に
+
+## 教員の働き方改革とリスキリングを並行して進める必要
+
+- 教員の1週間あたりの勤務時間は引き続き長く、国の残業上限を超える層が大半を占める
+- 教員のICT活用指導力には自己評価でもまだ伸び代があることが判明しており、リスキリングの機会が求められています
+
+## 個性に応じた多様な教育を推進します
+
+- 学校内外の多様な学びの場の支援
+    - ジェンダーに関わらず学びたいことを学べるようになるための支援
+    - STEAM教育を根幹に据えた学校を公立の中高一貫校として設置
+    - 一部は「学びの多様化校」として設置して、より幅広いニーズに対応する
+    - 学校外の学びを検索できるプラットフォームを作る
+- 教員の働き方改革とリスキリングの促進
+    - 校務DXを進めて業務改善を図る
+    - 先端教育実践校による研修など、教員のリスキリングを実施
+    - 教員採用試験の問題を改訂し、これからの時代にあったものに変えていく
+
+## 多様な学びへのアクセスを広めるために幅広くアプローチ
+
+- 構造・仕組みへのアプローチ
+    - ジェンダーに関わらず学びたいことを学べるようになるための支援を促進。特に、文理決定前に注力する
+    - 小学生・中学生向け職業体験（日本版Girs day）実施
+    - 校外での学びプログラムを、関心や認知特性に合わせてマッチングするプラットフォームを設立
+    - 体験格差を助長しないためのバウチャー制度を検討
+- 学びの内容・コンテンツへのアプローチ
+    - 大学等で提供される先取りプログラム（AP|Advanced Placement）に対して、都立高校で受講を推奨・支援する（大学進学後には単位認定）
+    - NPOなど多様な講座提供も促進
+    - 先端的STEAM教育を実践する実験校を設置する
+    - 学びの多様化校の仕組みを活用し、多様な特性の生徒が通学できるようにする
+
+## 学びの担い手である教員の働き方改革とリスキリングの促進
+
+- 校務DX
+    - 家庭との連携や校内業務、採点・成績管理をDX推進する
+    - 校務系・学習系のネットワークの統合を促進
+- リスキリング
+    - 海外の最先端教育メソッドを派遣／招聘して学べる機会づくり
+    - 教員のネットワークを、多様な学びの担い手にも開き、公教育・民間教育での知見交流を活性化する
+- 教師採用試験のアップデート
+    - これからの教師の求められている人物像に合わせて、試験問題を改訂する
+    - ICT機器、AIを活用可とする試験形式や、探究学習の要素を導入
+
+## 東京は学術都市としてポテンシャルがある
+
+- QS Best Student Cities 2024において、ロンドンについで学生にとって生活しやすい街として2位にランキング。
+- 世界の都市総合力ランキングでの「研究・開発」部門では4位に位置する。
+
+## 東京をグローバルな知の還流拠点とする
+
+- 海外一流大学のキャンパス誘致
+    - ニューヨーク大学はアブダビ（アラブ首長国連邦）・上海に分校を設置。イェール大学はシンガポール国立大学と共同で「Yale-NUS大学」を設立（ただし2025年に閉校予定）
+    - 都知事のリーダーシップのもと、キャンパス誘致を強化
+- 都立大学でのデュアル・ディグリーの推進
+    - 東京都立大学と海外大学との共通単位を実現していく
+        - 日本と海外の両方の学位を、それぞれ個別に取得するよりも短い期間で取得できるプログラム
+        - 海外大学の学生が東京都立大学の学位取得のため東京に訪れる機会を創出し、人材交流を図れる
+    - 大学間のネットワークの拠点となる`}]}];var ky={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function t(){for(var i="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(i=o(i,r(l)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return t.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var a="";for(var l in i)n.call(i,l)&&i[l]&&(a=o(a,l));return a}function o(i,a){return a?i?i+" "+a:i+a:i}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(ky);var Cy=ky.exports;const We=as(Cy);function gn(){return gn=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},gn.apply(null,arguments)}var xy={exports:{}},xn={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0=Symbol.for("react.element"),M0=Symbol.for("react.portal"),qu=Symbol.for("react.fragment"),Ku=Symbol.for("react.strict_mode"),Qu=Symbol.for("react.profiler"),Yu=Symbol.for("react.provider"),Ju=Symbol.for("react.context"),rC=Symbol.for("react.server_context"),ed=Symbol.for("react.forward_ref"),nd=Symbol.for("react.suspense"),td=Symbol.for("react.suspense_list"),rd=Symbol.for("react.memo"),od=Symbol.for("react.lazy"),oC=Symbol.for("react.offscreen"),Sy;Sy=Symbol.for("react.module.reference");function hr(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case N0:switch(e=e.type,e){case qu:case Qu:case Ku:case nd:case td:return e;default:switch(e=e&&e.$$typeof,e){case rC:case Ju:case ed:case od:case rd:case Yu:return e;default:return n}}case M0:return n}}}xn.ContextConsumer=Ju;xn.ContextProvider=Yu;xn.Element=N0;xn.ForwardRef=ed;xn.Fragment=qu;xn.Lazy=od;xn.Memo=rd;xn.Portal=M0;xn.Profiler=Qu;xn.StrictMode=Ku;xn.Suspense=nd;xn.SuspenseList=td;xn.isAsyncMode=function(){return!1};xn.isConcurrentMode=function(){return!1};xn.isContextConsumer=function(e){return hr(e)===Ju};xn.isContextProvider=function(e){return hr(e)===Yu};xn.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===N0};xn.isForwardRef=function(e){return hr(e)===ed};xn.isFragment=function(e){return hr(e)===qu};xn.isLazy=function(e){return hr(e)===od};xn.isMemo=function(e){return hr(e)===rd};xn.isPortal=function(e){return hr(e)===M0};xn.isProfiler=function(e){return hr(e)===Qu};xn.isStrictMode=function(e){return hr(e)===Ku};xn.isSuspense=function(e){return hr(e)===nd};xn.isSuspenseList=function(e){return hr(e)===td};xn.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===qu||e===Qu||e===Ku||e===nd||e===td||e===oC||typeof e=="object"&&e!==null&&(e.$$typeof===od||e.$$typeof===rd||e.$$typeof===Yu||e.$$typeof===Ju||e.$$typeof===ed||e.$$typeof===Sy||e.getModuleId!==void 0)};xn.typeOf=hr;xy.exports=xn;var xl=xy.exports;function wi(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=[];return Pe.Children.forEach(e,function(r){r==null&&!n.keepEmpty||(Array.isArray(r)?t=t.concat(wi(r)):xl.isFragment(r)&&r.props?t=t.concat(wi(r.props.children,n)):t.push(r))}),t}var Hm={},iC=function(n){};function aC(e,n){}function lC(e,n){}function sC(){Hm={}}function Ey(e,n,t){!n&&!Hm[t]&&(e(!1,t),Hm[t]=!0)}function Ti(e,n){Ey(aC,e,n)}function cC(e,n){Ey(lC,e,n)}Ti.preMessage=iC;Ti.resetWarned=sC;Ti.noteOnce=cC;function Tn(e){"@babel/helpers - typeof";return Tn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Tn(e)}function uC(e,n){if(Tn(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(Tn(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Ay(e){var n=uC(e,"string");return Tn(n)=="symbol"?n:n+""}function Be(e,n,t){return(n=Ay(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function og(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function pe(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?og(Object(t),!0).forEach(function(r){Be(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):og(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function ql(e){return e instanceof HTMLElement||e instanceof SVGElement}function dC(e){return e&&Tn(e)==="object"&&ql(e.nativeElement)?e.nativeElement:ql(e)?e:null}function wc(e){var n=dC(e);if(n)return n;if(e instanceof Pe.Component){var t;return(t=Bm.findDOMNode)===null||t===void 0?void 0:t.call(Bm,e)}return null}function id(e,n,t){var r=p.useRef({});return(!("value"in r.current)||t(r.current.condition,n))&&(r.current.value=e(),r.current.condition=n),r.current.value}var L0=function(n,t){typeof n=="function"?n(t):Tn(n)==="object"&&n&&"current"in n&&(n.current=t)},ps=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];var o=t.filter(Boolean);return o.length<=1?o[0]:function(i){t.forEach(function(a){L0(a,i)})}},ad=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return id(function(){return ps.apply(void 0,t)},t,function(o,i){return o.length!==i.length||o.every(function(a,l){return a!==i[l]})})},gs=function(n){var t,r,o=xl.isMemo(n)?n.type.type:n.type;return!(typeof o=="function"&&!((t=o.prototype)!==null&&t!==void 0&&t.render)&&o.$$typeof!==xl.ForwardRef||typeof n=="function"&&!((r=n.prototype)!==null&&r!==void 0&&r.render)&&n.$$typeof!==xl.ForwardRef)};function ig(e){return p.isValidElement(e)&&!xl.isFragment(e)}Number(p.version.split(".")[0])>=19;var Um=p.createContext(null);function fC(e){var n=e.children,t=e.onBatchResize,r=p.useRef(0),o=p.useRef([]),i=p.useContext(Um),a=p.useCallback(function(l,s,c){r.current+=1;var d=r.current;o.current.push({size:l,element:s,data:c}),Promise.resolve().then(function(){d===r.current&&(t==null||t(o.current),o.current=[])}),i==null||i(l,s,c)},[t,i]);return p.createElement(Um.Provider,{value:a},n)}var Ty=function(){if(typeof Map<"u")return Map;function e(n,t){var r=-1;return n.some(function(o,i){return o[0]===t?(r=i,!0):!1}),r}return function(){function n(){this.__entries__=[]}return Object.defineProperty(n.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),n.prototype.get=function(t){var r=e(this.__entries__,t),o=this.__entries__[r];return o&&o[1]},n.prototype.set=function(t,r){var o=e(this.__entries__,t);~o?this.__entries__[o][1]=r:this.__entries__.push([t,r])},n.prototype.delete=function(t){var r=this.__entries__,o=e(r,t);~o&&r.splice(o,1)},n.prototype.has=function(t){return!!~e(this.__entries__,t)},n.prototype.clear=function(){this.__entries__.splice(0)},n.prototype.forEach=function(t,r){r===void 0&&(r=null);for(var o=0,i=this.__entries__;o<i.length;o++){var a=i[o];t.call(r,a[1],a[0])}},n}()}(),Zm=typeof window<"u"&&typeof document<"u"&&window.document===document,su=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),mC=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(su):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),hC=2;function pC(e,n){var t=!1,r=!1,o=0;function i(){t&&(t=!1,e()),r&&l()}function a(){mC(i)}function l(){var s=Date.now();if(t){if(s-o<hC)return;r=!0}else t=!0,r=!1,setTimeout(a,n);o=s}return l}var gC=20,bC=["top","right","bottom","left","width","height","size","weight"],vC=typeof MutationObserver<"u",yC=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=pC(this.refresh.bind(this),gC)}return e.prototype.addObserver=function(n){~this.observers_.indexOf(n)||this.observers_.push(n),this.connected_||this.connect_()},e.prototype.removeObserver=function(n){var t=this.observers_,r=t.indexOf(n);~r&&t.splice(r,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var n=this.updateObservers_();n&&this.refresh()},e.prototype.updateObservers_=function(){var n=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return n.forEach(function(t){return t.broadcastActive()}),n.length>0},e.prototype.connect_=function(){!Zm||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),vC?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Zm||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(n){var t=n.propertyName,r=t===void 0?"":t,o=bC.some(function(i){return!!~r.indexOf(i)});o&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Iy=function(e,n){for(var t=0,r=Object.keys(n);t<r.length;t++){var o=r[t];Object.defineProperty(e,o,{value:n[o],enumerable:!1,writable:!1,configurable:!0})}return e},wa=function(e){var n=e&&e.ownerDocument&&e.ownerDocument.defaultView;return n||su},_y=ld(0,0,0,0);function cu(e){return parseFloat(e)||0}function ag(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return n.reduce(function(r,o){var i=e["border-"+o+"-width"];return r+cu(i)},0)}function wC(e){for(var n=["top","right","bottom","left"],t={},r=0,o=n;r<o.length;r++){var i=o[r],a=e["padding-"+i];t[i]=cu(a)}return t}function kC(e){var n=e.getBBox();return ld(0,0,n.width,n.height)}function CC(e){var n=e.clientWidth,t=e.clientHeight;if(!n&&!t)return _y;var r=wa(e).getComputedStyle(e),o=wC(r),i=o.left+o.right,a=o.top+o.bottom,l=cu(r.width),s=cu(r.height);if(r.boxSizing==="border-box"&&(Math.round(l+i)!==n&&(l-=ag(r,"left","right")+i),Math.round(s+a)!==t&&(s-=ag(r,"top","bottom")+a)),!SC(e)){var c=Math.round(l+i)-n,d=Math.round(s+a)-t;Math.abs(c)!==1&&(l-=c),Math.abs(d)!==1&&(s-=d)}return ld(o.left,o.top,l,s)}var xC=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof wa(e).SVGGraphicsElement}:function(e){return e instanceof wa(e).SVGElement&&typeof e.getBBox=="function"}}();function SC(e){return e===wa(e).document.documentElement}function EC(e){return Zm?xC(e)?kC(e):CC(e):_y}function AC(e){var n=e.x,t=e.y,r=e.width,o=e.height,i=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(i.prototype);return Iy(a,{x:n,y:t,width:r,height:o,top:t,right:n+r,bottom:o+t,left:n}),a}function ld(e,n,t,r){return{x:e,y:n,width:t,height:r}}var TC=function(){function e(n){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ld(0,0,0,0),this.target=n}return e.prototype.isActive=function(){var n=EC(this.target);return this.contentRect_=n,n.width!==this.broadcastWidth||n.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var n=this.contentRect_;return this.broadcastWidth=n.width,this.broadcastHeight=n.height,n},e}(),IC=function(){function e(n,t){var r=AC(t);Iy(this,{target:n,contentRect:r})}return e}(),_C=function(){function e(n,t,r){if(this.activeObservations_=[],this.observations_=new Ty,typeof n!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=n,this.controller_=t,this.callbackCtx_=r}return e.prototype.observe=function(n){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(n instanceof wa(n).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(n)||(t.set(n,new TC(n)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(n){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(n instanceof wa(n).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(n)&&(t.delete(n),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var n=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&n.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var n=this.callbackCtx_,t=this.activeObservations_.map(function(r){return new IC(r.target,r.broadcastRect())});this.callback_.call(n,t,n),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Py=typeof WeakMap<"u"?new WeakMap:new Ty,Oy=function(){function e(n){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=yC.getInstance(),r=new _C(n,t,this);Py.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Oy.prototype[e]=function(){var n;return(n=Py.get(this))[e].apply(n,arguments)}});var PC=function(){return typeof su.ResizeObserver<"u"?su.ResizeObserver:Oy}(),So=new Map;function OC(e){e.forEach(function(n){var t,r=n.target;(t=So.get(r))===null||t===void 0||t.forEach(function(o){return o(r)})})}var Fy=new PC(OC);function FC(e,n){So.has(e)||(So.set(e,new Set),Fy.observe(e)),So.get(e).add(n)}function RC(e,n){So.has(e)&&(So.get(e).delete(n),So.get(e).size||(Fy.unobserve(e),So.delete(e)))}function pr(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function lg(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ay(r.key),r)}}function gr(e,n,t){return n&&lg(e.prototype,n),t&&lg(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Wm(e,n){return Wm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},Wm(e,n)}function _a(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Wm(e,n)}function uu(e){return uu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},uu(e)}function Ry(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ry=function(){return!!e})()}function di(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function NC(e,n){if(n&&(Tn(n)=="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return di(e)}function Pa(e){var n=Ry();return function(){var t,r=uu(e);if(n){var o=uu(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return NC(this,t)}}var MC=function(e){_a(t,e);var n=Pa(t);function t(){return pr(this,t),n.apply(this,arguments)}return gr(t,[{key:"render",value:function(){return this.props.children}}]),t}(p.Component);function LC(e,n){var t=e.children,r=e.disabled,o=p.useRef(null),i=p.useRef(null),a=p.useContext(Um),l=typeof t=="function",s=l?t(o):t,c=p.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),d=!l&&p.isValidElement(s)&&gs(s),u=d?s.ref:null,f=ad(u,o),m=function(){var g;return wc(o.current)||(o.current&&Tn(o.current)==="object"?wc((g=o.current)===null||g===void 0?void 0:g.nativeElement):null)||wc(i.current)};p.useImperativeHandle(n,function(){return m()});var h=p.useRef(e);h.current=e;var v=p.useCallback(function(k){var g=h.current,b=g.onResize,y=g.data,S=k.getBoundingClientRect(),A=S.width,w=S.height,I=k.offsetWidth,R=k.offsetHeight,M=Math.floor(A),_=Math.floor(w);if(c.current.width!==M||c.current.height!==_||c.current.offsetWidth!==I||c.current.offsetHeight!==R){var D={width:M,height:_,offsetWidth:I,offsetHeight:R};c.current=D;var H=I===Math.round(A)?A:I,j=R===Math.round(w)?w:R,B=pe(pe({},D),{},{offsetWidth:H,offsetHeight:j});a==null||a(B,k,y),b&&Promise.resolve().then(function(){b(B,k)})}},[]);return p.useEffect(function(){var k=m();return k&&!r&&FC(k,v),function(){return RC(k,v)}},[o.current,r]),p.createElement(MC,{ref:i},d?p.cloneElement(s,{ref:f}):s)}var jC=p.forwardRef(LC),DC="rc-observer-key";function BC(e,n){var t=e.children,r=typeof t=="function"?[t]:wi(t);return r.map(function(o,i){var a=(o==null?void 0:o.key)||"".concat(DC,"-").concat(i);return p.createElement(jC,gn({},e,{key:a,ref:i===0?n:void 0}),o)})}var ki=p.forwardRef(BC);ki.Collection=fC;function so(e,n){var t=Object.assign({},e);return Array.isArray(n)&&n.forEach(function(r){delete t[r]}),t}function Vm(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function $C(e){if(Array.isArray(e))return Vm(e)}function Ny(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function j0(e,n){if(e){if(typeof e=="string")return Vm(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Vm(e,n):void 0}}function zC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ln(e){return $C(e)||Ny(e)||j0(e)||zC()}var My=function(n){return+setTimeout(n,16)},Ly=function(n){return clearTimeout(n)};typeof window<"u"&&"requestAnimationFrame"in window&&(My=function(n){return window.requestAnimationFrame(n)},Ly=function(n){return window.cancelAnimationFrame(n)});var sg=0,D0=new Map;function jy(e){D0.delete(e)}var mt=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;sg+=1;var r=sg;function o(i){if(i===0)jy(r),n();else{var a=My(function(){o(i-1)});D0.set(r,a)}}return o(t),r};mt.cancel=function(e){var n=D0.get(e);return jy(e),Ly(n)};function cg(e){let n;const t=o=>()=>{n=null,e.apply(void 0,Ln(o))},r=function(){if(n==null){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];n=mt(t(i))}};return r.cancel=()=>{mt.cancel(n),n=null},r}function Dy(e){if(Array.isArray(e))return e}function HC(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,o,i,a,l=[],s=!0,c=!1;try{if(i=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=i.call(t)).done)&&(l.push(r.value),l.length!==n);s=!0);}catch(d){c=!0,o=d}finally{try{if(!s&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}function By(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ve(e,n){return Dy(e)||HC(e,n)||j0(e,n)||By()}function ka(e){for(var n=0,t,r=0,o=e.length;o>=4;++r,o-=4)t=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,n=(t&65535)*1540483477+((t>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(o){case 3:n^=(e.charCodeAt(r+2)&255)<<16;case 2:n^=(e.charCodeAt(r+1)&255)<<8;case 1:n^=e.charCodeAt(r)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}function Yt(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function UC(e,n){if(!e)return!1;if(e.contains)return e.contains(n);for(var t=n;t;){if(t===e)return!0;t=t.parentNode}return!1}var ug="data-rc-order",dg="data-rc-priority",ZC="rc-util-key",Xm=new Map;function $y(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.mark;return n?n.startsWith("data-")?n:"data-".concat(n):ZC}function sd(e){if(e.attachTo)return e.attachTo;var n=document.querySelector("head");return n||document.body}function WC(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function B0(e){return Array.from((Xm.get(e)||e).children).filter(function(n){return n.tagName==="STYLE"})}function zy(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!Yt())return null;var t=n.csp,r=n.prepend,o=n.priority,i=o===void 0?0:o,a=WC(r),l=a==="prependQueue",s=document.createElement("style");s.setAttribute(ug,a),l&&i&&s.setAttribute(dg,"".concat(i)),t!=null&&t.nonce&&(s.nonce=t==null?void 0:t.nonce),s.innerHTML=e;var c=sd(n),d=c.firstChild;if(r){if(l){var u=(n.styles||B0(c)).filter(function(f){if(!["prepend","prependQueue"].includes(f.getAttribute(ug)))return!1;var m=Number(f.getAttribute(dg)||0);return i>=m});if(u.length)return c.insertBefore(s,u[u.length-1].nextSibling),s}c.insertBefore(s,d)}else c.appendChild(s);return s}function Hy(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=sd(n);return(n.styles||B0(t)).find(function(r){return r.getAttribute($y(n))===e})}function Kl(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=Hy(e,n);if(t){var r=sd(n);r.removeChild(t)}}function VC(e,n){var t=Xm.get(e);if(!t||!UC(document,t)){var r=zy("",n),o=r.parentNode;Xm.set(e,o),e.removeChild(r)}}function eo(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=sd(t),o=B0(r),i=pe(pe({},t),{},{styles:o});VC(r,i);var a=Hy(n,i);if(a){var l,s;if((l=i.csp)!==null&&l!==void 0&&l.nonce&&a.nonce!==((s=i.csp)===null||s===void 0?void 0:s.nonce)){var c;a.nonce=(c=i.csp)===null||c===void 0?void 0:c.nonce}return a.innerHTML!==e&&(a.innerHTML=e),a}var d=zy(e,i);return d.setAttribute($y(i),n),d}function XC(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function zn(e,n){if(e==null)return{};var t,r,o=XC(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||{}.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function $0(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=new Set;function o(i,a){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,s=r.has(i);if(Ti(!s,"Warning: There may be circular references"),s)return!1;if(i===a)return!0;if(t&&l>1)return!1;r.add(i);var c=l+1;if(Array.isArray(i)){if(!Array.isArray(a)||i.length!==a.length)return!1;for(var d=0;d<i.length;d++)if(!o(i[d],a[d],c))return!1;return!0}if(i&&a&&Tn(i)==="object"&&Tn(a)==="object"){var u=Object.keys(i);return u.length!==Object.keys(a).length?!1:u.every(function(f){return o(i[f],a[f],c)})}return!1}return o(e,n)}var GC="%";function Gm(e){return e.join(GC)}var qC=function(){function e(n){pr(this,e),Be(this,"instanceId",void 0),Be(this,"cache",new Map),this.instanceId=n}return gr(e,[{key:"get",value:function(t){return this.opGet(Gm(t))}},{key:"opGet",value:function(t){return this.cache.get(t)||null}},{key:"update",value:function(t,r){return this.opUpdate(Gm(t),r)}},{key:"opUpdate",value:function(t,r){var o=this.cache.get(t),i=r(o);i===null?this.cache.delete(t):this.cache.set(t,i)}}]),e}(),Ca="data-token-hash",_r="data-css-hash",Eo="__cssinjs_instance__";function KC(){var e=Math.random().toString(12).slice(2);if(typeof document<"u"&&document.head&&document.body){var n=document.body.querySelectorAll("style[".concat(_r,"]"))||[],t=document.head.firstChild;Array.from(n).forEach(function(o){o[Eo]=o[Eo]||e,o[Eo]===e&&document.head.insertBefore(o,t)});var r={};Array.from(document.querySelectorAll("style[".concat(_r,"]"))).forEach(function(o){var i=o.getAttribute(_r);if(r[i]){if(o[Eo]===e){var a;(a=o.parentNode)===null||a===void 0||a.removeChild(o)}}else r[i]=!0})}return new qC(e)}var cd=p.createContext({hashPriority:"low",cache:KC(),defaultCache:!0}),Uy=gr(function e(){pr(this,e)}),Zy="CALC_UNIT",QC=new RegExp(Zy,"g");function lf(e){return typeof e=="number"?"".concat(e).concat(Zy):e}var YC=function(e){_a(t,e);var n=Pa(t);function t(r,o){var i;pr(this,t),i=n.call(this),Be(di(i),"result",""),Be(di(i),"unitlessCssVar",void 0),Be(di(i),"lowPriority",void 0);var a=Tn(r);return i.unitlessCssVar=o,r instanceof t?i.result="(".concat(r.result,")"):a==="number"?i.result=lf(r):a==="string"&&(i.result=r),i}return gr(t,[{key:"add",value:function(o){return o instanceof t?this.result="".concat(this.result," + ").concat(o.getResult()):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," + ").concat(lf(o))),this.lowPriority=!0,this}},{key:"sub",value:function(o){return o instanceof t?this.result="".concat(this.result," - ").concat(o.getResult()):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," - ").concat(lf(o))),this.lowPriority=!0,this}},{key:"mul",value:function(o){return this.lowPriority&&(this.result="(".concat(this.result,")")),o instanceof t?this.result="".concat(this.result," * ").concat(o.getResult(!0)):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," * ").concat(o)),this.lowPriority=!1,this}},{key:"div",value:function(o){return this.lowPriority&&(this.result="(".concat(this.result,")")),o instanceof t?this.result="".concat(this.result," / ").concat(o.getResult(!0)):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," / ").concat(o)),this.lowPriority=!1,this}},{key:"getResult",value:function(o){return this.lowPriority||o?"(".concat(this.result,")"):this.result}},{key:"equal",value:function(o){var i=this,a=o||{},l=a.unit,s=!0;return typeof l=="boolean"?s=l:Array.from(this.unitlessCssVar).some(function(c){return i.result.includes(c)})&&(s=!1),this.result=this.result.replace(QC,s?"px":""),typeof this.lowPriority<"u"?"calc(".concat(this.result,")"):this.result}}]),t}(Uy),JC=function(e){_a(t,e);var n=Pa(t);function t(r){var o;return pr(this,t),o=n.call(this),Be(di(o),"result",0),r instanceof t?o.result=r.result:typeof r=="number"&&(o.result=r),o}return gr(t,[{key:"add",value:function(o){return o instanceof t?this.result+=o.result:typeof o=="number"&&(this.result+=o),this}},{key:"sub",value:function(o){return o instanceof t?this.result-=o.result:typeof o=="number"&&(this.result-=o),this}},{key:"mul",value:function(o){return o instanceof t?this.result*=o.result:typeof o=="number"&&(this.result*=o),this}},{key:"div",value:function(o){return o instanceof t?this.result/=o.result:typeof o=="number"&&(this.result/=o),this}},{key:"equal",value:function(){return this.result}}]),t}(Uy),ex=function(n,t){var r=n==="css"?YC:JC;return function(o){return new r(o,t)}};function nx(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}var z0=function(){function e(){pr(this,e),Be(this,"cache",void 0),Be(this,"keys",void 0),Be(this,"cacheCallTimes",void 0),this.cache=new Map,this.keys=[],this.cacheCallTimes=0}return gr(e,[{key:"size",value:function(){return this.keys.length}},{key:"internalGet",value:function(t){var r,o,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a={map:this.cache};return t.forEach(function(l){if(!a)a=void 0;else{var s;a=(s=a)===null||s===void 0||(s=s.map)===null||s===void 0?void 0:s.get(l)}}),(r=a)!==null&&r!==void 0&&r.value&&i&&(a.value[1]=this.cacheCallTimes++),(o=a)===null||o===void 0?void 0:o.value}},{key:"get",value:function(t){var r;return(r=this.internalGet(t,!0))===null||r===void 0?void 0:r[0]}},{key:"has",value:function(t){return!!this.internalGet(t)}},{key:"set",value:function(t,r){var o=this;if(!this.has(t)){if(this.size()+1>e.MAX_CACHE_SIZE+e.MAX_CACHE_OFFSET){var i=this.keys.reduce(function(c,d){var u=ve(c,2),f=u[1];return o.internalGet(d)[1]<f?[d,o.internalGet(d)[1]]:c},[this.keys[0],this.cacheCallTimes]),a=ve(i,1),l=a[0];this.delete(l)}this.keys.push(t)}var s=this.cache;t.forEach(function(c,d){if(d===t.length-1)s.set(c,{value:[r,o.cacheCallTimes++]});else{var u=s.get(c);u?u.map||(u.map=new Map):s.set(c,{map:new Map}),s=s.get(c).map}})}},{key:"deleteByPath",value:function(t,r){var o=t.get(r[0]);if(r.length===1){var i;return o.map?t.set(r[0],{map:o.map}):t.delete(r[0]),(i=o.value)===null||i===void 0?void 0:i[0]}var a=this.deleteByPath(o.map,r.slice(1));return(!o.map||o.map.size===0)&&!o.value&&t.delete(r[0]),a}},{key:"delete",value:function(t){if(this.has(t))return this.keys=this.keys.filter(function(r){return!nx(r,t)}),this.deleteByPath(this.cache,t)}}]),e}();Be(z0,"MAX_CACHE_SIZE",20);Be(z0,"MAX_CACHE_OFFSET",5);var fg=0,Wy=function(){function e(n){pr(this,e),Be(this,"derivatives",void 0),Be(this,"id",void 0),this.derivatives=Array.isArray(n)?n:[n],this.id=fg,n.length===0&&(n.length>0,void 0),fg+=1}return gr(e,[{key:"getDerivativeToken",value:function(t){return this.derivatives.reduce(function(r,o){return o(t,r)},void 0)}}]),e}(),sf=new z0;function qm(e){var n=Array.isArray(e)?e:[e];return sf.has(n)||sf.set(n,new Wy(n)),sf.get(n)}var tx=new WeakMap,cf={};function rx(e,n){for(var t=tx,r=0;r<n.length;r+=1){var o=n[r];t.has(o)||t.set(o,new WeakMap),t=t.get(o)}return t.has(cf)||t.set(cf,e()),t.get(cf)}var mg=new WeakMap;function Sl(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=mg.get(e)||"";return t||(Object.keys(e).forEach(function(r){var o=e[r];t+=r,o instanceof Wy?t+=o.id:o&&Tn(o)==="object"?t+=Sl(o,n):t+=o}),n&&(t=ka(t)),mg.set(e,t)),t}function hg(e,n){return ka("".concat(n,"_").concat(Sl(e,!0)))}var Km=Yt();function Ze(e){return typeof e=="number"?"".concat(e,"px"):e}function du(e,n,t){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(o)return e;var i=pe(pe({},r),{},Be(Be({},Ca,n),_r,t)),a=Object.keys(i).map(function(l){var s=i[l];return s?"".concat(l,'="').concat(s,'"'):null}).filter(function(l){return l}).join(" ");return"<style ".concat(a,">").concat(e,"</style>")}var kc=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return"--".concat(t?"".concat(t,"-"):"").concat(n).replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g,"$1-$2").replace(/([a-z])([A-Z0-9])/g,"$1-$2").toLowerCase()},ox=function(n,t,r){return Object.keys(n).length?".".concat(t).concat(r!=null&&r.scope?".".concat(r.scope):"","{").concat(Object.entries(n).map(function(o){var i=ve(o,2),a=i[0],l=i[1];return"".concat(a,":").concat(l,";")}).join(""),"}"):""},Vy=function(n,t,r){var o={},i={};return Object.entries(n).forEach(function(a){var l,s,c=ve(a,2),d=c[0],u=c[1];if(r!=null&&(l=r.preserve)!==null&&l!==void 0&&l[d])i[d]=u;else if((typeof u=="string"||typeof u=="number")&&!(r!=null&&(s=r.ignore)!==null&&s!==void 0&&s[d])){var f,m=kc(d,r==null?void 0:r.prefix);o[m]=typeof u=="number"&&!(r!=null&&(f=r.unitless)!==null&&f!==void 0&&f[d])?"".concat(u,"px"):String(u),i[d]="var(".concat(m,")")}}),[i,ox(o,t,{scope:r==null?void 0:r.scope})]},pg=Yt()?p.useLayoutEffect:p.useEffect,kt=function(n,t){var r=p.useRef(!0);pg(function(){return n(r.current)},t),pg(function(){return r.current=!1,function(){r.current=!0}},[])},gg=function(n,t){kt(function(r){if(!r)return n()},t)},ix=pe({},ss),bg=ix.useInsertionEffect,ax=function(n,t,r){p.useMemo(n,r),kt(function(){return t(!0)},r)},lx=bg?function(e,n,t){return bg(function(){return e(),n()},t)}:ax,sx=pe({},ss),cx=sx.useInsertionEffect,ux=function(n){var t=[],r=!1;function o(i){r||t.push(i)}return p.useEffect(function(){return r=!1,function(){r=!0,t.length&&t.forEach(function(i){return i()})}},n),o},dx=function(){return function(n){n()}},fx=typeof cx<"u"?ux:dx;function H0(e,n,t,r,o){var i=p.useContext(cd),a=i.cache,l=[e].concat(Ln(n)),s=Gm(l),c=fx([s]),d=function(h){a.opUpdate(s,function(v){var k=v||[void 0,void 0],g=ve(k,2),b=g[0],y=b===void 0?0:b,S=g[1],A=S,w=A||t(),I=[y,w];return h?h(I):I})};p.useMemo(function(){d()},[s]);var u=a.opGet(s),f=u[1];return lx(function(){o==null||o(f)},function(m){return d(function(h){var v=ve(h,2),k=v[0],g=v[1];return m&&k===0&&(o==null||o(f)),[k+1,g]}),function(){a.opUpdate(s,function(h){var v=h||[],k=ve(v,2),g=k[0],b=g===void 0?0:g,y=k[1],S=b-1;return S===0?(c(function(){(m||!a.opGet(s))&&(r==null||r(y,!1))}),null):[b-1,y]})}},[s]),f}var mx={},hx="css",ni=new Map;function px(e){ni.set(e,(ni.get(e)||0)+1)}function gx(e,n){if(typeof document<"u"){var t=document.querySelectorAll("style[".concat(Ca,'="').concat(e,'"]'));t.forEach(function(r){if(r[Eo]===n){var o;(o=r.parentNode)===null||o===void 0||o.removeChild(r)}})}}var bx=0;function vx(e,n){ni.set(e,(ni.get(e)||0)-1);var t=Array.from(ni.keys()),r=t.filter(function(o){var i=ni.get(o)||0;return i<=0});t.length-r.length>bx&&r.forEach(function(o){gx(o,n),ni.delete(o)})}var yx=function(n,t,r,o){var i=r.getDerivativeToken(n),a=pe(pe({},i),t);return o&&(a=o(a)),a},Xy="token";function wx(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=p.useContext(cd),o=r.cache.instanceId,i=r.container,a=t.salt,l=a===void 0?"":a,s=t.override,c=s===void 0?mx:s,d=t.formatToken,u=t.getComputedToken,f=t.cssVar,m=rx(function(){return Object.assign.apply(Object,[{}].concat(Ln(n)))},n),h=Sl(m),v=Sl(c),k=f?Sl(f):"",g=H0(Xy,[l,e.id,h,v,k],function(){var b,y=u?u(m,c,e):yx(m,c,e,d),S=pe({},y),A="";if(f){var w=Vy(y,f.key,{prefix:f.prefix,ignore:f.ignore,unitless:f.unitless,preserve:f.preserve}),I=ve(w,2);y=I[0],A=I[1]}var R=hg(y,l);y._tokenKey=R,S._tokenKey=hg(S,l);var M=(b=f==null?void 0:f.key)!==null&&b!==void 0?b:R;y._themeKey=M,px(M);var _="".concat(hx,"-").concat(ka(R));return y._hashId=_,[y,_,S,A,(f==null?void 0:f.key)||""]},function(b){vx(b[0]._themeKey,o)},function(b){var y=ve(b,4),S=y[0],A=y[3];if(f&&A){var w=eo(A,ka("css-variables-".concat(S._themeKey)),{mark:_r,prepend:"queue",attachTo:i,priority:-999});w[Eo]=o,w.setAttribute(Ca,S._themeKey)}});return g}var kx=function(n,t,r){var o=ve(n,5),i=o[2],a=o[3],l=o[4],s=r||{},c=s.plain;if(!a)return null;var d=i._tokenKey,u=-999,f={"data-rc-order":"prependQueue","data-rc-priority":"".concat(u)},m=du(a,l,d,f,c);return[u,d,m]},Gy={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qy="comm",Ky="rule",Qy="decl",Cx="@import",xx="@keyframes",Sx="@layer",Yy=Math.abs,U0=String.fromCharCode;function Jy(e){return e.trim()}function Cc(e,n,t){return e.replace(n,t)}function Ex(e,n,t){return e.indexOf(n,t)}function Ql(e,n){return e.charCodeAt(n)|0}function Yl(e,n,t){return e.slice(n,t)}function Kr(e){return e.length}function Ax(e){return e.length}function Zs(e,n){return n.push(e),e}var ud=1,xa=1,e3=0,fr=0,Jn=0,Oa="";function Z0(e,n,t,r,o,i,a,l){return{value:e,root:n,parent:t,type:r,props:o,children:i,line:ud,column:xa,length:a,return:"",siblings:l}}function Tx(){return Jn}function Ix(){return Jn=fr>0?Ql(Oa,--fr):0,xa--,Jn===10&&(xa=1,ud--),Jn}function Pr(){return Jn=fr<e3?Ql(Oa,fr++):0,xa++,Jn===10&&(xa=1,ud++),Jn}function fi(){return Ql(Oa,fr)}function xc(){return fr}function dd(e,n){return Yl(Oa,e,n)}function Qm(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _x(e){return ud=xa=1,e3=Kr(Oa=e),fr=0,[]}function Px(e){return Oa="",e}function uf(e){return Jy(dd(fr-1,Ym(e===91?e+2:e===40?e+1:e)))}function Ox(e){for(;(Jn=fi())&&Jn<33;)Pr();return Qm(e)>2||Qm(Jn)>3?"":" "}function Fx(e,n){for(;--n&&Pr()&&!(Jn<48||Jn>102||Jn>57&&Jn<65||Jn>70&&Jn<97););return dd(e,xc()+(n<6&&fi()==32&&Pr()==32))}function Ym(e){for(;Pr();)switch(Jn){case e:return fr;case 34:case 39:e!==34&&e!==39&&Ym(Jn);break;case 40:e===41&&Ym(e);break;case 92:Pr();break}return fr}function Rx(e,n){for(;Pr()&&e+Jn!==57;)if(e+Jn===84&&fi()===47)break;return"/*"+dd(n,fr-1)+"*"+U0(e===47?e:Pr())}function Nx(e){for(;!Qm(fi());)Pr();return dd(e,fr)}function Mx(e){return Px(Sc("",null,null,null,[""],e=_x(e),0,[0],e))}function Sc(e,n,t,r,o,i,a,l,s){for(var c=0,d=0,u=a,f=0,m=0,h=0,v=1,k=1,g=1,b=0,y="",S=o,A=i,w=r,I=y;k;)switch(h=b,b=Pr()){case 40:if(h!=108&&Ql(I,u-1)==58){Ex(I+=Cc(uf(b),"&","&\f"),"&\f",Yy(c?l[c-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:I+=uf(b);break;case 9:case 10:case 13:case 32:I+=Ox(h);break;case 92:I+=Fx(xc()-1,7);continue;case 47:switch(fi()){case 42:case 47:Zs(Lx(Rx(Pr(),xc()),n,t,s),s);break;default:I+="/"}break;case 123*v:l[c++]=Kr(I)*g;case 125*v:case 59:case 0:switch(b){case 0:case 125:k=0;case 59+d:g==-1&&(I=Cc(I,/\f/g,"")),m>0&&Kr(I)-u&&Zs(m>32?yg(I+";",r,t,u-1,s):yg(Cc(I," ","")+";",r,t,u-2,s),s);break;case 59:I+=";";default:if(Zs(w=vg(I,n,t,c,d,o,l,y,S=[],A=[],u,i),i),b===123)if(d===0)Sc(I,n,w,w,S,i,u,l,A);else switch(f===99&&Ql(I,3)===110?100:f){case 100:case 108:case 109:case 115:Sc(e,w,w,r&&Zs(vg(e,w,w,0,0,o,l,y,o,S=[],u,A),A),o,A,u,l,r?S:A);break;default:Sc(I,w,w,w,[""],A,0,l,A)}}c=d=m=0,v=g=1,y=I="",u=a;break;case 58:u=1+Kr(I),m=h;default:if(v<1){if(b==123)--v;else if(b==125&&v++==0&&Ix()==125)continue}switch(I+=U0(b),b*v){case 38:g=d>0?1:(I+="\f",-1);break;case 44:l[c++]=(Kr(I)-1)*g,g=1;break;case 64:fi()===45&&(I+=uf(Pr())),f=fi(),d=u=Kr(y=I+=Nx(xc())),b++;break;case 45:h===45&&Kr(I)==2&&(v=0)}}return i}function vg(e,n,t,r,o,i,a,l,s,c,d,u){for(var f=o-1,m=o===0?i:[""],h=Ax(m),v=0,k=0,g=0;v<r;++v)for(var b=0,y=Yl(e,f+1,f=Yy(k=a[v])),S=e;b<h;++b)(S=Jy(k>0?m[b]+" "+y:Cc(y,/&\f/g,m[b])))&&(s[g++]=S);return Z0(e,n,t,o===0?Ky:l,s,c,d,u)}function Lx(e,n,t,r){return Z0(e,n,t,qy,U0(Tx()),Yl(e,2,-2),0,r)}function yg(e,n,t,r,o){return Z0(e,n,t,Qy,Yl(e,0,r),Yl(e,r+1,-1),r,o)}function Jm(e,n){for(var t="",r=0;r<e.length;r++)t+=n(e[r],r,e,n)||"";return t}function jx(e,n,t,r){switch(e.type){case Sx:if(e.children.length)break;case Cx:case Qy:return e.return=e.return||e.value;case qy:return"";case xx:return e.return=e.value+"{"+Jm(e.children,r)+"}";case Ky:if(!Kr(e.value=e.props.join(",")))return""}return Kr(t=Jm(e.children,r))?e.return=e.value+"{"+t+"}":""}var wg="data-ant-cssinjs-cache-path",n3="_FILE_STYLE__",mi,t3=!0;function Dx(){if(!mi&&(mi={},Yt())){var e=document.createElement("div");e.className=wg,e.style.position="fixed",e.style.visibility="hidden",e.style.top="-9999px",document.body.appendChild(e);var n=getComputedStyle(e).content||"";n=n.replace(/^"/,"").replace(/"$/,""),n.split(";").forEach(function(o){var i=o.split(":"),a=ve(i,2),l=a[0],s=a[1];mi[l]=s});var t=document.querySelector("style[".concat(wg,"]"));if(t){var r;t3=!1,(r=t.parentNode)===null||r===void 0||r.removeChild(t)}document.body.removeChild(e)}}function Bx(e){return Dx(),!!mi[e]}function $x(e){var n=mi[e],t=null;if(n&&Yt())if(t3)t=n3;else{var r=document.querySelector("style[".concat(_r,'="').concat(mi[e],'"]'));r?t=r.innerHTML:delete mi[e]}return[t,n]}var zx="_skip_check_",r3="_multi_value_";function Ec(e){var n=Jm(Mx(e),jx);return n.replace(/\{%%%\:[^;];}/g,";")}function Hx(e){return Tn(e)==="object"&&e&&(zx in e||r3 in e)}function Ux(e,n,t){if(!n)return e;var r=".".concat(n),o=t==="low"?":where(".concat(r,")"):r,i=e.split(",").map(function(a){var l,s=a.trim().split(/\s+/),c=s[0]||"",d=((l=c.match(/^\w+/))===null||l===void 0?void 0:l[0])||"";return c="".concat(d).concat(o).concat(c.slice(d.length)),[c].concat(Ln(s.slice(1))).join(" ")});return i.join(",")}var Zx=function e(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{root:!0,parentSelectors:[]},o=r.root,i=r.injectHash,a=r.parentSelectors,l=t.hashId,s=t.layer;t.path;var c=t.hashPriority,d=t.transformers,u=d===void 0?[]:d;t.linters;var f="",m={};function h(g){var b=g.getName(l);if(!m[b]){var y=e(g.style,t,{root:!1,parentSelectors:a}),S=ve(y,1),A=S[0];m[b]="@keyframes ".concat(g.getName(l)).concat(A)}}function v(g){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return g.forEach(function(y){Array.isArray(y)?v(y,b):y&&b.push(y)}),b}var k=v(Array.isArray(n)?n:[n]);return k.forEach(function(g){var b=typeof g=="string"&&!o?{}:g;if(typeof b=="string")f+="".concat(b,`
`);else if(b._keyframe)h(b);else{var y=u.reduce(function(S,A){var w;return(A==null||(w=A.visit)===null||w===void 0?void 0:w.call(A,S))||S},b);Object.keys(y).forEach(function(S){var A=y[S];if(Tn(A)==="object"&&A&&(S!=="animationName"||!A._keyframe)&&!Hx(A)){var w=!1,I=S.trim(),R=!1;(o||i)&&l?I.startsWith("@")?w=!0:I=Ux(S,l,c):o&&!l&&(I==="&"||I==="")&&(I="",R=!0);var M=e(A,t,{root:R,injectHash:w,parentSelectors:[].concat(Ln(a),[I])}),_=ve(M,2),D=_[0],H=_[1];m=pe(pe({},m),H),f+="".concat(I).concat(D)}else{let V=function($,O){var P=$.replace(/[A-Z]/g,function(x){return"-".concat(x.toLowerCase())}),W=O;!Gy[$]&&typeof W=="number"&&W!==0&&(W="".concat(W,"px")),$==="animationName"&&O!==null&&O!==void 0&&O._keyframe&&(h(O),W=O.getName(l)),f+="".concat(P,":").concat(W,";")};var j,B=(j=A==null?void 0:A.value)!==null&&j!==void 0?j:A;Tn(A)==="object"&&A!==null&&A!==void 0&&A[r3]&&Array.isArray(B)?B.forEach(function($){V(S,$)}):V(S,B)}})}}),o?s&&(f="@layer ".concat(s.name," {").concat(f,"}"),s.dependencies&&(m["@layer ".concat(s.name)]=s.dependencies.map(function(g){return"@layer ".concat(g,", ").concat(s.name,";")}).join(`
`))):f="{".concat(f,"}"),[f,m]};function o3(e,n){return ka("".concat(e.join("%")).concat(n))}function Wx(){return null}var i3="style";function eh(e,n){var t=e.token,r=e.path,o=e.hashId,i=e.layer,a=e.nonce,l=e.clientOnly,s=e.order,c=s===void 0?0:s,d=p.useContext(cd),u=d.autoClear;d.mock;var f=d.defaultCache,m=d.hashPriority,h=d.container,v=d.ssrInline,k=d.transformers,g=d.linters,b=d.cache,y=d.layer,S=t._tokenKey,A=[S];y&&A.push("layer"),A.push.apply(A,Ln(r));var w=Km,I=H0(i3,A,function(){var H=A.join("|");if(Bx(H)){var j=$x(H),B=ve(j,2),V=B[0],$=B[1];if(V)return[V,S,$,{},l,c]}var O=n(),P=Zx(O,{hashId:o,hashPriority:m,layer:y?i:void 0,path:r.join("-"),transformers:k,linters:g}),W=ve(P,2),x=W[0],G=W[1],Z=Ec(x),T=o3(A,Z);return[Z,S,T,G,l,c]},function(H,j){var B=ve(H,3),V=B[2];(j||u)&&Km&&Kl(V,{mark:_r})},function(H){var j=ve(H,4),B=j[0];j[1];var V=j[2],$=j[3];if(w&&B!==n3){var O={mark:_r,prepend:y?!1:"queue",attachTo:h,priority:c},P=typeof a=="function"?a():a;P&&(O.csp={nonce:P});var W=[],x=[];Object.keys($).forEach(function(Z){Z.startsWith("@layer")?W.push(Z):x.push(Z)}),W.forEach(function(Z){eo(Ec($[Z]),"_layer-".concat(Z),pe(pe({},O),{},{prepend:!0}))});var G=eo(B,V,O);G[Eo]=b.instanceId,G.setAttribute(Ca,S),x.forEach(function(Z){eo(Ec($[Z]),"_effect-".concat(Z),O)})}}),R=ve(I,3),M=R[0],_=R[1],D=R[2];return function(H){var j;return!v||w||!f?j=p.createElement(Wx,null):j=p.createElement("style",gn({},Be(Be({},Ca,_),_r,D),{dangerouslySetInnerHTML:{__html:M}})),p.createElement(p.Fragment,null,j,H)}}var Vx=function(n,t,r){var o=ve(n,6),i=o[0],a=o[1],l=o[2],s=o[3],c=o[4],d=o[5],u=r||{},f=u.plain;if(c)return null;var m=i,h={"data-rc-order":"prependQueue","data-rc-priority":"".concat(d)};return m=du(i,a,l,h,f),s&&Object.keys(s).forEach(function(v){if(!t[v]){t[v]=!0;var k=Ec(s[v]),g=du(k,a,"_effect-".concat(v),h,f);v.startsWith("@layer")?m=g+m:m+=g}}),[d,l,m]},a3="cssVar",Xx=function(n,t){var r=n.key,o=n.prefix,i=n.unitless,a=n.ignore,l=n.token,s=n.scope,c=s===void 0?"":s,d=p.useContext(cd),u=d.cache.instanceId,f=d.container,m=l._tokenKey,h=[].concat(Ln(n.path),[r,c,m]),v=H0(a3,h,function(){var k=t(),g=Vy(k,r,{prefix:o,unitless:i,ignore:a,scope:c}),b=ve(g,2),y=b[0],S=b[1],A=o3(h,S);return[y,S,A,r]},function(k){var g=ve(k,3),b=g[2];Km&&Kl(b,{mark:_r})},function(k){var g=ve(k,3),b=g[1],y=g[2];if(b){var S=eo(b,y,{mark:_r,prepend:"queue",attachTo:f,priority:-999});S[Eo]=u,S.setAttribute(Ca,r)}});return v},Gx=function(n,t,r){var o=ve(n,4),i=o[1],a=o[2],l=o[3],s=r||{},c=s.plain;if(!i)return null;var d=-999,u={"data-rc-order":"prependQueue","data-rc-priority":"".concat(d)},f=du(i,l,a,u,c);return[d,a,f]};Be(Be(Be({},i3,Vx),Xy,kx),a3,Gx);var nt=function(){function e(n,t){pr(this,e),Be(this,"name",void 0),Be(this,"style",void 0),Be(this,"_keyframe",!0),this.name=n,this.style=t}return gr(e,[{key:"getName",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return t?"".concat(t,"-").concat(this.name):this.name}}]),e}();function Li(e){return e.notSplit=!0,e}Li(["borderTop","borderBottom"]),Li(["borderTop"]),Li(["borderBottom"]),Li(["borderLeft","borderRight"]),Li(["borderLeft"]),Li(["borderRight"]);var W0=p.createContext({});function qx(e){return Dy(e)||Ny(e)||j0(e)||By()}function nh(e,n){for(var t=e,r=0;r<n.length;r+=1){if(t==null)return;t=t[n[r]]}return t}function l3(e,n,t,r){if(!n.length)return t;var o=qx(n),i=o[0],a=o.slice(1),l;return!e&&typeof i=="number"?l=[]:Array.isArray(e)?l=Ln(e):l=pe({},e),r&&t===void 0&&a.length===1?delete l[i][a[0]]:l[i]=l3(l[i],a,t,r),l}function df(e,n,t){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return n.length&&r&&t===void 0&&!nh(e,n.slice(0,-1))?e:l3(e,n,t,r)}function Kx(e){return Tn(e)==="object"&&e!==null&&Object.getPrototypeOf(e)===Object.prototype}function kg(e){return Array.isArray(e)?[]:{}}var Qx=typeof Reflect>"u"?Object.keys:Reflect.ownKeys;function Yx(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=kg(n[0]);return n.forEach(function(o){function i(a,l){var s=new Set(l),c=nh(o,a),d=Array.isArray(c);if(d||Kx(c)){if(!s.has(c)){s.add(c);var u=nh(r,a);d?r=df(r,a,[]):(!u||Tn(u)!=="object")&&(r=df(r,a,kg(c))),Qx(c).forEach(function(f){i([].concat(Ln(a),[f]),s)})}}else r=df(r,a,c)}i([])}),r}function Jx(){}const e9=p.createContext({}),s3=()=>{const e=()=>{};return e.deprecated=Jx,e},n9=p.createContext(void 0);var t9={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"},r9={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"};const c3={placeholder:"Select time",rangePlaceholder:["Start time","End time"]},Cg={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},r9),timePickerLocale:Object.assign({},c3)},Ut="${label} is not a valid ${type}",fd={locale:"en",Pagination:t9,DatePicker:Cg,TimePicker:c3,Calendar:Cg,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",deselectAll:"Deselect all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand",collapse:"Collapse"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:Ut,method:Ut,array:Ut,object:Ut,number:Ut,date:Ut,boolean:Ut,integer:Ut,float:Ut,regexp:Ut,email:Ut,url:Ut,hex:Ut},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh",scanned:"Scanned"},ColorPicker:{presetEmpty:"Empty"}};Object.assign({},fd.Modal);let Ac=[];const xg=()=>Ac.reduce((e,n)=>Object.assign(Object.assign({},e),n),fd.Modal);function o9(e){if(e){const n=Object.assign({},e);return Ac.push(n),xg(),()=>{Ac=Ac.filter(t=>t!==n),xg()}}Object.assign({},fd.Modal)}const u3=p.createContext(void 0),i9="internalMark",a9=e=>{const{locale:n={},children:t,_ANT_MARK__:r}=e;p.useEffect(()=>o9(n&&n.Modal),[n]);const o=p.useMemo(()=>Object.assign(Object.assign({},n),{exist:!0}),[n]);return p.createElement(u3.Provider,{value:o},t)};function ht(e,n){l9(e)&&(e="100%");var t=s9(e);return e=n===360?e:Math.min(n,Math.max(0,parseFloat(e))),t&&(e=parseInt(String(e*n),10)/100),Math.abs(e-n)<1e-6?1:(n===360?e=(e<0?e%n+n:e%n)/parseFloat(String(n)):e=e%n/parseFloat(String(n)),e)}function Ws(e){return Math.min(1,Math.max(0,e))}function l9(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function s9(e){return typeof e=="string"&&e.indexOf("%")!==-1}function d3(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Vs(e){return e<=1?"".concat(Number(e)*100,"%"):e}function si(e){return e.length===1?"0"+e:String(e)}function c9(e,n,t){return{r:ht(e,255)*255,g:ht(n,255)*255,b:ht(t,255)*255}}function Sg(e,n,t){e=ht(e,255),n=ht(n,255),t=ht(t,255);var r=Math.max(e,n,t),o=Math.min(e,n,t),i=0,a=0,l=(r+o)/2;if(r===o)a=0,i=0;else{var s=r-o;switch(a=l>.5?s/(2-r-o):s/(r+o),r){case e:i=(n-t)/s+(n<t?6:0);break;case n:i=(t-e)/s+2;break;case t:i=(e-n)/s+4;break}i/=6}return{h:i,s:a,l}}function ff(e,n,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*(6*t):t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e}function u9(e,n,t){var r,o,i;if(e=ht(e,360),n=ht(n,100),t=ht(t,100),n===0)o=t,i=t,r=t;else{var a=t<.5?t*(1+n):t+n-t*n,l=2*t-a;r=ff(l,a,e+1/3),o=ff(l,a,e),i=ff(l,a,e-1/3)}return{r:r*255,g:o*255,b:i*255}}function th(e,n,t){e=ht(e,255),n=ht(n,255),t=ht(t,255);var r=Math.max(e,n,t),o=Math.min(e,n,t),i=0,a=r,l=r-o,s=r===0?0:l/r;if(r===o)i=0;else{switch(r){case e:i=(n-t)/l+(n<t?6:0);break;case n:i=(t-e)/l+2;break;case t:i=(e-n)/l+4;break}i/=6}return{h:i,s,v:a}}function d9(e,n,t){e=ht(e,360)*6,n=ht(n,100),t=ht(t,100);var r=Math.floor(e),o=e-r,i=t*(1-n),a=t*(1-o*n),l=t*(1-(1-o)*n),s=r%6,c=[t,a,i,i,l,t][s],d=[l,t,t,a,i,i][s],u=[i,i,l,t,t,a][s];return{r:c*255,g:d*255,b:u*255}}function rh(e,n,t,r){var o=[si(Math.round(e).toString(16)),si(Math.round(n).toString(16)),si(Math.round(t).toString(16))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function f9(e,n,t,r,o){var i=[si(Math.round(e).toString(16)),si(Math.round(n).toString(16)),si(Math.round(t).toString(16)),si(m9(r))];return o&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function m9(e){return Math.round(parseFloat(e)*255).toString(16)}function Eg(e){return Zt(e)/255}function Zt(e){return parseInt(e,16)}function h9(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var oh={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Hi(e){var n={r:0,g:0,b:0},t=1,r=null,o=null,i=null,a=!1,l=!1;return typeof e=="string"&&(e=b9(e)),typeof e=="object"&&(Vr(e.r)&&Vr(e.g)&&Vr(e.b)?(n=c9(e.r,e.g,e.b),a=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Vr(e.h)&&Vr(e.s)&&Vr(e.v)?(r=Vs(e.s),o=Vs(e.v),n=d9(e.h,r,o),a=!0,l="hsv"):Vr(e.h)&&Vr(e.s)&&Vr(e.l)&&(r=Vs(e.s),i=Vs(e.l),n=u9(e.h,r,i),a=!0,l="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(t=e.a)),t=d3(t),{ok:a,format:e.format||l,r:Math.min(255,Math.max(n.r,0)),g:Math.min(255,Math.max(n.g,0)),b:Math.min(255,Math.max(n.b,0)),a:t}}var p9="[-\\+]?\\d+%?",g9="[-\\+]?\\d*\\.\\d+%?",Ao="(?:".concat(g9,")|(?:").concat(p9,")"),mf="[\\s|\\(]+(".concat(Ao,")[,|\\s]+(").concat(Ao,")[,|\\s]+(").concat(Ao,")\\s*\\)?"),hf="[\\s|\\(]+(".concat(Ao,")[,|\\s]+(").concat(Ao,")[,|\\s]+(").concat(Ao,")[,|\\s]+(").concat(Ao,")\\s*\\)?"),kr={CSS_UNIT:new RegExp(Ao),rgb:new RegExp("rgb"+mf),rgba:new RegExp("rgba"+hf),hsl:new RegExp("hsl"+mf),hsla:new RegExp("hsla"+hf),hsv:new RegExp("hsv"+mf),hsva:new RegExp("hsva"+hf),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function b9(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var n=!1;if(oh[e])e=oh[e],n=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t=kr.rgb.exec(e);return t?{r:t[1],g:t[2],b:t[3]}:(t=kr.rgba.exec(e),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=kr.hsl.exec(e),t?{h:t[1],s:t[2],l:t[3]}:(t=kr.hsla.exec(e),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=kr.hsv.exec(e),t?{h:t[1],s:t[2],v:t[3]}:(t=kr.hsva.exec(e),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=kr.hex8.exec(e),t?{r:Zt(t[1]),g:Zt(t[2]),b:Zt(t[3]),a:Eg(t[4]),format:n?"name":"hex8"}:(t=kr.hex6.exec(e),t?{r:Zt(t[1]),g:Zt(t[2]),b:Zt(t[3]),format:n?"name":"hex"}:(t=kr.hex4.exec(e),t?{r:Zt(t[1]+t[1]),g:Zt(t[2]+t[2]),b:Zt(t[3]+t[3]),a:Eg(t[4]+t[4]),format:n?"name":"hex8"}:(t=kr.hex3.exec(e),t?{r:Zt(t[1]+t[1]),g:Zt(t[2]+t[2]),b:Zt(t[3]+t[3]),format:n?"name":"hex"}:!1)))))))))}function Vr(e){return!!kr.CSS_UNIT.exec(String(e))}var It=function(){function e(n,t){n===void 0&&(n=""),t===void 0&&(t={});var r;if(n instanceof e)return n;typeof n=="number"&&(n=h9(n)),this.originalInput=n;var o=Hi(n);this.originalInput=n,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=t.format)!==null&&r!==void 0?r:o.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var n=this.toRgb();return(n.r*299+n.g*587+n.b*114)/1e3},e.prototype.getLuminance=function(){var n=this.toRgb(),t,r,o,i=n.r/255,a=n.g/255,l=n.b/255;return i<=.03928?t=i/12.92:t=Math.pow((i+.055)/1.055,2.4),a<=.03928?r=a/12.92:r=Math.pow((a+.055)/1.055,2.4),l<=.03928?o=l/12.92:o=Math.pow((l+.055)/1.055,2.4),.2126*t+.7152*r+.0722*o},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(n){return this.a=d3(n),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){var n=this.toHsl().s;return n===0},e.prototype.toHsv=function(){var n=th(this.r,this.g,this.b);return{h:n.h*360,s:n.s,v:n.v,a:this.a}},e.prototype.toHsvString=function(){var n=th(this.r,this.g,this.b),t=Math.round(n.h*360),r=Math.round(n.s*100),o=Math.round(n.v*100);return this.a===1?"hsv(".concat(t,", ").concat(r,"%, ").concat(o,"%)"):"hsva(".concat(t,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var n=Sg(this.r,this.g,this.b);return{h:n.h*360,s:n.s,l:n.l,a:this.a}},e.prototype.toHslString=function(){var n=Sg(this.r,this.g,this.b),t=Math.round(n.h*360),r=Math.round(n.s*100),o=Math.round(n.l*100);return this.a===1?"hsl(".concat(t,", ").concat(r,"%, ").concat(o,"%)"):"hsla(".concat(t,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(n){return n===void 0&&(n=!1),rh(this.r,this.g,this.b,n)},e.prototype.toHexString=function(n){return n===void 0&&(n=!1),"#"+this.toHex(n)},e.prototype.toHex8=function(n){return n===void 0&&(n=!1),f9(this.r,this.g,this.b,this.a,n)},e.prototype.toHex8String=function(n){return n===void 0&&(n=!1),"#"+this.toHex8(n)},e.prototype.toHexShortString=function(n){return n===void 0&&(n=!1),this.a===1?this.toHexString(n):this.toHex8String(n)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var n=Math.round(this.r),t=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(n,", ").concat(t,", ").concat(r,")"):"rgba(".concat(n,", ").concat(t,", ").concat(r,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var n=function(t){return"".concat(Math.round(ht(t,255)*100),"%")};return{r:n(this.r),g:n(this.g),b:n(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var n=function(t){return Math.round(ht(t,255)*100)};return this.a===1?"rgb(".concat(n(this.r),"%, ").concat(n(this.g),"%, ").concat(n(this.b),"%)"):"rgba(".concat(n(this.r),"%, ").concat(n(this.g),"%, ").concat(n(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var n="#"+rh(this.r,this.g,this.b,!1),t=0,r=Object.entries(oh);t<r.length;t++){var o=r[t],i=o[0],a=o[1];if(n===a)return i}return!1},e.prototype.toString=function(n){var t=!!n;n=n??this.format;var r=!1,o=this.a<1&&this.a>=0,i=!t&&o&&(n.startsWith("hex")||n==="name");return i?n==="name"&&this.a===0?this.toName():this.toRgbString():(n==="rgb"&&(r=this.toRgbString()),n==="prgb"&&(r=this.toPercentageRgbString()),(n==="hex"||n==="hex6")&&(r=this.toHexString()),n==="hex3"&&(r=this.toHexString(!0)),n==="hex4"&&(r=this.toHex8String(!0)),n==="hex8"&&(r=this.toHex8String()),n==="name"&&(r=this.toName()),n==="hsl"&&(r=this.toHslString()),n==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(n){n===void 0&&(n=10);var t=this.toHsl();return t.l+=n/100,t.l=Ws(t.l),new e(t)},e.prototype.brighten=function(n){n===void 0&&(n=10);var t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(n/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(n/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(n/100)))),new e(t)},e.prototype.darken=function(n){n===void 0&&(n=10);var t=this.toHsl();return t.l-=n/100,t.l=Ws(t.l),new e(t)},e.prototype.tint=function(n){return n===void 0&&(n=10),this.mix("white",n)},e.prototype.shade=function(n){return n===void 0&&(n=10),this.mix("black",n)},e.prototype.desaturate=function(n){n===void 0&&(n=10);var t=this.toHsl();return t.s-=n/100,t.s=Ws(t.s),new e(t)},e.prototype.saturate=function(n){n===void 0&&(n=10);var t=this.toHsl();return t.s+=n/100,t.s=Ws(t.s),new e(t)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(n){var t=this.toHsl(),r=(t.h+n)%360;return t.h=r<0?360+r:r,new e(t)},e.prototype.mix=function(n,t){t===void 0&&(t=50);var r=this.toRgb(),o=new e(n).toRgb(),i=t/100,a={r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a};return new e(a)},e.prototype.analogous=function(n,t){n===void 0&&(n=6),t===void 0&&(t=30);var r=this.toHsl(),o=360/t,i=[this];for(r.h=(r.h-(o*n>>1)+720)%360;--n;)r.h=(r.h+o)%360,i.push(new e(r));return i},e.prototype.complement=function(){var n=this.toHsl();return n.h=(n.h+180)%360,new e(n)},e.prototype.monochromatic=function(n){n===void 0&&(n=6);for(var t=this.toHsv(),r=t.h,o=t.s,i=t.v,a=[],l=1/n;n--;)a.push(new e({h:r,s:o,v:i})),i=(i+l)%1;return a},e.prototype.splitcomplement=function(){var n=this.toHsl(),t=n.h;return[this,new e({h:(t+72)%360,s:n.s,l:n.l}),new e({h:(t+216)%360,s:n.s,l:n.l})]},e.prototype.onBackground=function(n){var t=this.toRgb(),r=new e(n).toRgb(),o=t.a+r.a*(1-t.a);return new e({r:(t.r*t.a+r.r*r.a*(1-t.a))/o,g:(t.g*t.a+r.g*r.a*(1-t.a))/o,b:(t.b*t.a+r.b*r.a*(1-t.a))/o,a:o})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(n){for(var t=this.toHsl(),r=t.h,o=[this],i=360/n,a=1;a<n;a++)o.push(new e({h:(r+a*i)%360,s:t.s,l:t.l}));return o},e.prototype.equals=function(n){return this.toRgbString()===new e(n).toRgbString()},e}(),Xs=2,Ag=.16,v9=.05,y9=.05,w9=.15,f3=5,m3=4,k9=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function Tg(e){var n=e.r,t=e.g,r=e.b,o=th(n,t,r);return{h:o.h*360,s:o.s,v:o.v}}function Gs(e){var n=e.r,t=e.g,r=e.b;return"#".concat(rh(n,t,r,!1))}function C9(e,n,t){var r=t/100,o={r:(n.r-e.r)*r+e.r,g:(n.g-e.g)*r+e.g,b:(n.b-e.b)*r+e.b};return o}function Ig(e,n,t){var r;return Math.round(e.h)>=60&&Math.round(e.h)<=240?r=t?Math.round(e.h)-Xs*n:Math.round(e.h)+Xs*n:r=t?Math.round(e.h)+Xs*n:Math.round(e.h)-Xs*n,r<0?r+=360:r>=360&&(r-=360),r}function _g(e,n,t){if(e.h===0&&e.s===0)return e.s;var r;return t?r=e.s-Ag*n:n===m3?r=e.s+Ag:r=e.s+v9*n,r>1&&(r=1),t&&n===f3&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2))}function Pg(e,n,t){var r;return t?r=e.v+y9*n:r=e.v-w9*n,r>1&&(r=1),Number(r.toFixed(2))}function Ci(e){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=[],r=Hi(e),o=f3;o>0;o-=1){var i=Tg(r),a=Gs(Hi({h:Ig(i,o,!0),s:_g(i,o,!0),v:Pg(i,o,!0)}));t.push(a)}t.push(Gs(r));for(var l=1;l<=m3;l+=1){var s=Tg(r),c=Gs(Hi({h:Ig(s,l),s:_g(s,l),v:Pg(s,l)}));t.push(c)}return n.theme==="dark"?k9.map(function(d){var u=d.index,f=d.opacity,m=Gs(C9(Hi(n.backgroundColor||"#141414"),Hi(t[u]),f*100));return m}):t}var pf={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},Tc={},gf={};Object.keys(pf).forEach(function(e){Tc[e]=Ci(pf[e]),Tc[e].primary=Tc[e][5],gf[e]=Ci(pf[e],{theme:"dark",backgroundColor:"#141414"}),gf[e].primary=gf[e][5]});var x9=Tc.blue;const h3={blue:"#1677ff",purple:"#722ED1",cyan:"#13C2C2",green:"#52C41A",magenta:"#EB2F96",pink:"#eb2f96",red:"#F5222D",orange:"#FA8C16",yellow:"#FADB14",volcano:"#FA541C",geekblue:"#2F54EB",gold:"#FAAD14",lime:"#A0D911"},Jl=Object.assign(Object.assign({},h3),{colorPrimary:"#1677ff",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#1677ff",colorLink:"",colorTextBase:"",colorBgBase:"",fontFamily:`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,fontFamilyCode:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",fontSize:14,lineWidth:1,lineType:"solid",motionUnit:.1,motionBase:0,motionEaseOutCirc:"cubic-bezier(0.08, 0.82, 0.17, 1)",motionEaseInOutCirc:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",motionEaseOut:"cubic-bezier(0.215, 0.61, 0.355, 1)",motionEaseInOut:"cubic-bezier(0.645, 0.045, 0.355, 1)",motionEaseOutBack:"cubic-bezier(0.12, 0.4, 0.29, 1.46)",motionEaseInBack:"cubic-bezier(0.71, -0.46, 0.88, 0.6)",motionEaseInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",motionEaseOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",borderRadius:6,sizeUnit:4,sizeStep:4,sizePopupArrow:16,controlHeight:32,zIndexBase:0,zIndexPopupBase:1e3,opacityImage:1,wireframe:!1,motion:!0});function S9(e,n){let{generateColorPalettes:t,generateNeutralColorPalettes:r}=n;const{colorSuccess:o,colorWarning:i,colorError:a,colorInfo:l,colorPrimary:s,colorBgBase:c,colorTextBase:d}=e,u=t(s),f=t(o),m=t(i),h=t(a),v=t(l),k=r(c,d),g=e.colorLink||e.colorInfo,b=t(g);return Object.assign(Object.assign({},k),{colorPrimaryBg:u[1],colorPrimaryBgHover:u[2],colorPrimaryBorder:u[3],colorPrimaryBorderHover:u[4],colorPrimaryHover:u[5],colorPrimary:u[6],colorPrimaryActive:u[7],colorPrimaryTextHover:u[8],colorPrimaryText:u[9],colorPrimaryTextActive:u[10],colorSuccessBg:f[1],colorSuccessBgHover:f[2],colorSuccessBorder:f[3],colorSuccessBorderHover:f[4],colorSuccessHover:f[4],colorSuccess:f[6],colorSuccessActive:f[7],colorSuccessTextHover:f[8],colorSuccessText:f[9],colorSuccessTextActive:f[10],colorErrorBg:h[1],colorErrorBgHover:h[2],colorErrorBgActive:h[3],colorErrorBorder:h[3],colorErrorBorderHover:h[4],colorErrorHover:h[5],colorError:h[6],colorErrorActive:h[7],colorErrorTextHover:h[8],colorErrorText:h[9],colorErrorTextActive:h[10],colorWarningBg:m[1],colorWarningBgHover:m[2],colorWarningBorder:m[3],colorWarningBorderHover:m[4],colorWarningHover:m[4],colorWarning:m[6],colorWarningActive:m[7],colorWarningTextHover:m[8],colorWarningText:m[9],colorWarningTextActive:m[10],colorInfoBg:v[1],colorInfoBgHover:v[2],colorInfoBorder:v[3],colorInfoBorderHover:v[4],colorInfoHover:v[4],colorInfo:v[6],colorInfoActive:v[7],colorInfoTextHover:v[8],colorInfoText:v[9],colorInfoTextActive:v[10],colorLinkHover:b[4],colorLink:b[6],colorLinkActive:b[7],colorBgMask:new It("#000").setAlpha(.45).toRgbString(),colorWhite:"#fff"})}const E9=e=>{let n=e,t=e,r=e,o=e;return e<6&&e>=5?n=e+1:e<16&&e>=6?n=e+2:e>=16&&(n=16),e<7&&e>=5?t=4:e<8&&e>=7?t=5:e<14&&e>=8?t=6:e<16&&e>=14?t=7:e>=16&&(t=8),e<6&&e>=2?r=1:e>=6&&(r=2),e>4&&e<8?o=4:e>=8&&(o=6),{borderRadius:e,borderRadiusXS:r,borderRadiusSM:t,borderRadiusLG:n,borderRadiusOuter:o}};function A9(e){const{motionUnit:n,motionBase:t,borderRadius:r,lineWidth:o}=e;return Object.assign({motionDurationFast:`${(t+n).toFixed(1)}s`,motionDurationMid:`${(t+n*2).toFixed(1)}s`,motionDurationSlow:`${(t+n*3).toFixed(1)}s`,lineWidthBold:o+1},E9(r))}const T9=e=>{const{controlHeight:n}=e;return{controlHeightSM:n*.75,controlHeightXS:n*.5,controlHeightLG:n*1.25}};function Ic(e){return(e+8)/e}function I9(e){const n=new Array(10).fill(null).map((t,r)=>{const o=r-1,i=e*Math.pow(2.71828,o/5),a=r>1?Math.floor(i):Math.ceil(i);return Math.floor(a/2)*2});return n[1]=e,n.map(t=>({size:t,lineHeight:Ic(t)}))}const _9=e=>{const n=I9(e),t=n.map(d=>d.size),r=n.map(d=>d.lineHeight),o=t[1],i=t[0],a=t[2],l=r[1],s=r[0],c=r[2];return{fontSizeSM:i,fontSize:o,fontSizeLG:a,fontSizeXL:t[3],fontSizeHeading1:t[6],fontSizeHeading2:t[5],fontSizeHeading3:t[4],fontSizeHeading4:t[3],fontSizeHeading5:t[2],lineHeight:l,lineHeightLG:c,lineHeightSM:s,fontHeight:Math.round(l*o),fontHeightLG:Math.round(c*a),fontHeightSM:Math.round(s*i),lineHeightHeading1:r[6],lineHeightHeading2:r[5],lineHeightHeading3:r[4],lineHeightHeading4:r[3],lineHeightHeading5:r[2]}};function P9(e){const{sizeUnit:n,sizeStep:t}=e;return{sizeXXL:n*(t+8),sizeXL:n*(t+4),sizeLG:n*(t+2),sizeMD:n*(t+1),sizeMS:n*t,size:n*t,sizeSM:n*(t-1),sizeXS:n*(t-2),sizeXXS:n*(t-3)}}const Xr=(e,n)=>new It(e).setAlpha(n).toRgbString(),el=(e,n)=>new It(e).darken(n).toHexString(),O9=e=>{const n=Ci(e);return{1:n[0],2:n[1],3:n[2],4:n[3],5:n[4],6:n[5],7:n[6],8:n[4],9:n[5],10:n[6]}},F9=(e,n)=>{const t=e||"#fff",r=n||"#000";return{colorBgBase:t,colorTextBase:r,colorText:Xr(r,.88),colorTextSecondary:Xr(r,.65),colorTextTertiary:Xr(r,.45),colorTextQuaternary:Xr(r,.25),colorFill:Xr(r,.15),colorFillSecondary:Xr(r,.06),colorFillTertiary:Xr(r,.04),colorFillQuaternary:Xr(r,.02),colorBgLayout:el(t,4),colorBgContainer:el(t,0),colorBgElevated:el(t,0),colorBgSpotlight:Xr(r,.85),colorBgBlur:"transparent",colorBorder:el(t,15),colorBorderSecondary:el(t,6)}};function R9(e){const n=Object.keys(h3).map(t=>{const r=Ci(e[t]);return new Array(10).fill(1).reduce((o,i,a)=>(o[`${t}-${a+1}`]=r[a],o[`${t}${a+1}`]=r[a],o),{})}).reduce((t,r)=>(t=Object.assign(Object.assign({},t),r),t),{});return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},e),n),S9(e,{generateColorPalettes:O9,generateNeutralColorPalettes:F9})),_9(e.fontSize)),P9(e)),T9(e)),A9(e))}const p3=qm(R9),ih={token:Jl,override:{override:Jl},hashed:!0},g3=Pe.createContext(ih),b3="anticon",N9=(e,n)=>n||(e?`ant-${e}`:"ant"),qn=p.createContext({getPrefixCls:N9,iconPrefixCls:b3}),M9=`-ant-${Date.now()}-${Math.random()}`;function L9(e,n){const t={},r=(a,l)=>{let s=a.clone();return s=(l==null?void 0:l(s))||s,s.toRgbString()},o=(a,l)=>{const s=new It(a),c=Ci(s.toRgbString());t[`${l}-color`]=r(s),t[`${l}-color-disabled`]=c[1],t[`${l}-color-hover`]=c[4],t[`${l}-color-active`]=c[6],t[`${l}-color-outline`]=s.clone().setAlpha(.2).toRgbString(),t[`${l}-color-deprecated-bg`]=c[0],t[`${l}-color-deprecated-border`]=c[2]};if(n.primaryColor){o(n.primaryColor,"primary");const a=new It(n.primaryColor),l=Ci(a.toRgbString());l.forEach((c,d)=>{t[`primary-${d+1}`]=c}),t["primary-color-deprecated-l-35"]=r(a,c=>c.lighten(35)),t["primary-color-deprecated-l-20"]=r(a,c=>c.lighten(20)),t["primary-color-deprecated-t-20"]=r(a,c=>c.tint(20)),t["primary-color-deprecated-t-50"]=r(a,c=>c.tint(50)),t["primary-color-deprecated-f-12"]=r(a,c=>c.setAlpha(c.getAlpha()*.12));const s=new It(l[0]);t["primary-color-active-deprecated-f-30"]=r(s,c=>c.setAlpha(c.getAlpha()*.3)),t["primary-color-active-deprecated-d-02"]=r(s,c=>c.darken(2))}return n.successColor&&o(n.successColor,"success"),n.warningColor&&o(n.warningColor,"warning"),n.errorColor&&o(n.errorColor,"error"),n.infoColor&&o(n.infoColor,"info"),`
  :root {
    ${Object.keys(t).map(a=>`--${e}-${a}: ${t[a]};`).join(`
`)}
  }
  `.trim()}function j9(e,n){const t=L9(e,n);Yt()&&eo(t,`${M9}-dynamic-theme`)}const fu=p.createContext(!1),D9=e=>{let{children:n,disabled:t}=e;const r=p.useContext(fu);return p.createElement(fu.Provider,{value:t??r},n)},Sa=p.createContext(void 0),B9=e=>{let{children:n,size:t}=e;const r=p.useContext(Sa);return p.createElement(Sa.Provider,{value:t||r},n)};function $9(){const e=p.useContext(fu),n=p.useContext(Sa);return{componentDisabled:e,componentSize:n}}const mu=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"],z9="5.18.3";function bf(e){return e>=0&&e<=255}function qs(e,n){const{r:t,g:r,b:o,a:i}=new It(e).toRgb();if(i<1)return e;const{r:a,g:l,b:s}=new It(n).toRgb();for(let c=.01;c<=1;c+=.01){const d=Math.round((t-a*(1-c))/c),u=Math.round((r-l*(1-c))/c),f=Math.round((o-s*(1-c))/c);if(bf(d)&&bf(u)&&bf(f))return new It({r:d,g:u,b:f,a:Math.round(c*100)/100}).toRgbString()}return new It({r:t,g:r,b:o,a:1}).toRgbString()}var H9=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};function v3(e){const{override:n}=e,t=H9(e,["override"]),r=Object.assign({},n);Object.keys(Jl).forEach(f=>{delete r[f]});const o=Object.assign(Object.assign({},t),r),i=480,a=576,l=768,s=992,c=1200,d=1600;if(o.motion===!1){const f="0s";o.motionDurationFast=f,o.motionDurationMid=f,o.motionDurationSlow=f}return Object.assign(Object.assign(Object.assign({},o),{colorFillContent:o.colorFillSecondary,colorFillContentHover:o.colorFill,colorFillAlter:o.colorFillQuaternary,colorBgContainerDisabled:o.colorFillTertiary,colorBorderBg:o.colorBgContainer,colorSplit:qs(o.colorBorderSecondary,o.colorBgContainer),colorTextPlaceholder:o.colorTextQuaternary,colorTextDisabled:o.colorTextQuaternary,colorTextHeading:o.colorText,colorTextLabel:o.colorTextSecondary,colorTextDescription:o.colorTextTertiary,colorTextLightSolid:o.colorWhite,colorHighlight:o.colorError,colorBgTextHover:o.colorFillSecondary,colorBgTextActive:o.colorFill,colorIcon:o.colorTextTertiary,colorIconHover:o.colorText,colorErrorOutline:qs(o.colorErrorBg,o.colorBgContainer),colorWarningOutline:qs(o.colorWarningBg,o.colorBgContainer),fontSizeIcon:o.fontSizeSM,lineWidthFocus:o.lineWidth*4,lineWidth:o.lineWidth,controlOutlineWidth:o.lineWidth*2,controlInteractiveSize:o.controlHeight/2,controlItemBgHover:o.colorFillTertiary,controlItemBgActive:o.colorPrimaryBg,controlItemBgActiveHover:o.colorPrimaryBgHover,controlItemBgActiveDisabled:o.colorFill,controlTmpOutline:o.colorFillQuaternary,controlOutline:qs(o.colorPrimaryBg,o.colorBgContainer),lineType:o.lineType,borderRadius:o.borderRadius,borderRadiusXS:o.borderRadiusXS,borderRadiusSM:o.borderRadiusSM,borderRadiusLG:o.borderRadiusLG,fontWeightStrong:600,opacityLoading:.65,linkDecoration:"none",linkHoverDecoration:"none",linkFocusDecoration:"none",controlPaddingHorizontal:12,controlPaddingHorizontalSM:8,paddingXXS:o.sizeXXS,paddingXS:o.sizeXS,paddingSM:o.sizeSM,padding:o.size,paddingMD:o.sizeMD,paddingLG:o.sizeLG,paddingXL:o.sizeXL,paddingContentHorizontalLG:o.sizeLG,paddingContentVerticalLG:o.sizeMS,paddingContentHorizontal:o.sizeMS,paddingContentVertical:o.sizeSM,paddingContentHorizontalSM:o.size,paddingContentVerticalSM:o.sizeXS,marginXXS:o.sizeXXS,marginXS:o.sizeXS,marginSM:o.sizeSM,margin:o.size,marginMD:o.sizeMD,marginLG:o.sizeLG,marginXL:o.sizeXL,marginXXL:o.sizeXXL,boxShadow:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowSecondary:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTertiary:`
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,screenXS:i,screenXSMin:i,screenXSMax:a-1,screenSM:a,screenSMMin:a,screenSMMax:l-1,screenMD:l,screenMDMin:l,screenMDMax:s-1,screenLG:s,screenLGMin:s,screenLGMax:c-1,screenXL:c,screenXLMin:c,screenXLMax:d-1,screenXXL:d,screenXXLMin:d,boxShadowPopoverArrow:"2px 2px 5px rgba(0, 0, 0, 0.05)",boxShadowCard:`
      0 1px 2px -2px ${new It("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new It("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new It("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,boxShadowDrawerRight:`
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerLeft:`
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerUp:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerDown:`
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTabsOverflowLeft:"inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowRight:"inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowTop:"inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowBottom:"inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"}),r)}var Og=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const y3={lineHeight:!0,lineHeightSM:!0,lineHeightLG:!0,lineHeightHeading1:!0,lineHeightHeading2:!0,lineHeightHeading3:!0,lineHeightHeading4:!0,lineHeightHeading5:!0,opacityLoading:!0,fontWeightStrong:!0,zIndexPopupBase:!0,zIndexBase:!0},w3={size:!0,sizeSM:!0,sizeLG:!0,sizeMD:!0,sizeXS:!0,sizeXXS:!0,sizeMS:!0,sizeXL:!0,sizeXXL:!0,sizeUnit:!0,sizeStep:!0,motionBase:!0,motionUnit:!0},U9={screenXS:!0,screenXSMin:!0,screenXSMax:!0,screenSM:!0,screenSMMin:!0,screenSMMax:!0,screenMD:!0,screenMDMin:!0,screenMDMax:!0,screenLG:!0,screenLGMin:!0,screenLGMax:!0,screenXL:!0,screenXLMin:!0,screenXLMax:!0,screenXXL:!0,screenXXLMin:!0},k3=(e,n,t)=>{const r=t.getDerivativeToken(e),{override:o}=n,i=Og(n,["override"]);let a=Object.assign(Object.assign({},r),{override:o});return a=v3(a),i&&Object.entries(i).forEach(l=>{let[s,c]=l;const{theme:d}=c,u=Og(c,["theme"]);let f=u;d&&(f=k3(Object.assign(Object.assign({},a),u),{override:u},d)),a[s]=f}),a};function $r(){const{token:e,hashed:n,theme:t,override:r,cssVar:o}=Pe.useContext(g3),i=`${z9}-${n||""}`,a=t||p3,[l,s,c]=wx(a,[Jl,e],{salt:i,override:r,getComputedToken:k3,formatToken:v3,cssVar:o&&{prefix:o.prefix,key:o.key,unitless:y3,ignore:w3,preserve:U9}});return[a,c,n?s:"",l,o]}const Z9=1e3*60*10;let W9=function(){function e(){pr(this,e),this.map=new Map,this.objectIDMap=new WeakMap,this.nextID=0,this.lastAccessBeat=new Map,this.accessBeat=0}return gr(e,[{key:"set",value:function(t,r){this.clear();const o=this.getCompositeKey(t);this.map.set(o,r),this.lastAccessBeat.set(o,Date.now())}},{key:"get",value:function(t){const r=this.getCompositeKey(t),o=this.map.get(r);return this.lastAccessBeat.set(r,Date.now()),this.accessBeat+=1,o}},{key:"getCompositeKey",value:function(t){return t.map(o=>o&&typeof o=="object"?`obj_${this.getObjectID(o)}`:`${typeof o}_${o}`).join("|")}},{key:"getObjectID",value:function(t){if(this.objectIDMap.has(t))return this.objectIDMap.get(t);const r=this.nextID;return this.objectIDMap.set(t,r),this.nextID+=1,r}},{key:"clear",value:function(){if(this.accessBeat>1e4){const t=Date.now();this.lastAccessBeat.forEach((r,o)=>{t-r>Z9&&(this.map.delete(o),this.lastAccessBeat.delete(o))}),this.accessBeat=0}}}])}();const Fg=new W9;function V9(e,n){return Pe.useMemo(()=>{const t=Fg.get(n);if(t)return t;const r=e();return Fg.set(n,r),r},n)}function at(e){var n=p.useRef();n.current=e;var t=p.useCallback(function(){for(var r,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(r=n.current)===null||r===void 0?void 0:r.call.apply(r,[n].concat(i))},[]);return t}function es(e){var n=p.useRef(!1),t=p.useState(e),r=ve(t,2),o=r[0],i=r[1];p.useEffect(function(){return n.current=!1,function(){n.current=!0}},[]);function a(l,s){s&&n.current||i(l)}return[o,a]}function vf(e){return e!==void 0}function El(e,n){var t=n||{},r=t.defaultValue,o=t.value,i=t.onChange,a=t.postState,l=es(function(){return vf(o)?o:vf(r)?typeof r=="function"?r():r:typeof e=="function"?e():e}),s=ve(l,2),c=s[0],d=s[1],u=o!==void 0?o:c,f=a?a(u):u,m=at(i),h=es([u]),v=ve(h,2),k=v[0],g=v[1];gg(function(){var y=k[0];c!==y&&m(c,y)},[k]),gg(function(){vf(o)||d(o)},[o]);var b=at(function(y,S){d(y,S),g([u],S)});return[f,b]}const C3={overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},md=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return{boxSizing:"border-box",margin:0,padding:0,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,listStyle:"none",fontFamily:n?"inherit":e.fontFamily}},x3=()=>({display:"inline-flex",alignItems:"center",color:"inherit",fontStyle:"normal",lineHeight:0,textAlign:"center",textTransform:"none",verticalAlign:"-0.125em",textRendering:"optimizeLegibility","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale","> *":{lineHeight:1},svg:{display:"inline-block"}}),Rg=()=>({"&::before":{display:"table",content:'""'},"&::after":{display:"table",clear:"both",content:'""'}}),X9=e=>({a:{color:e.colorLink,textDecoration:e.linkDecoration,backgroundColor:"transparent",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"-webkit-text-decoration-skip":"objects","&:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive},"&:active,\n  &:hover":{textDecoration:e.linkHoverDecoration,outline:0},"&:focus":{textDecoration:e.linkFocusDecoration,outline:0},"&[disabled]":{color:e.colorTextDisabled,cursor:"not-allowed"}}}),G9=(e,n,t,r)=>{const o=`[class^="${n}"], [class*=" ${n}"]`,i=t?`.${t}`:o,a={boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"}};let l={};return r!==!1&&(l={fontFamily:e.fontFamily,fontSize:e.fontSize}),{[i]:Object.assign(Object.assign(Object.assign({},l),a),{[o]:a})}},S3=e=>({outline:`${Ze(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,outlineOffset:1,transition:"outline-offset 0s, outline 0s"}),q9=e=>({"&:focus-visible":Object.assign({},S3(e))});function K9(e){return e==="js"?{max:Math.max,min:Math.min}:{max:function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return`max(${t.map(o=>Ze(o)).join(",")})`},min:function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return`min(${t.map(o=>Ze(o)).join(",")})`}}}const E3=typeof CSSINJS_STATISTIC<"u";let ah=!0;function mr(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];if(!E3)return Object.assign.apply(Object,[{}].concat(n));ah=!1;const r={};return n.forEach(o=>{Object.keys(o).forEach(a=>{Object.defineProperty(r,a,{configurable:!0,enumerable:!0,get:()=>o[a]})})}),ah=!0,r}const Ng={};function Q9(){}const Y9=e=>{let n,t=e,r=Q9;return E3&&typeof Proxy<"u"&&(n=new Set,t=new Proxy(e,{get(o,i){return ah&&n.add(i),o[i]}}),r=(o,i)=>{var a;Ng[o]={global:Array.from(n),component:Object.assign(Object.assign({},(a=Ng[o])===null||a===void 0?void 0:a.component),i)}}),{token:t,keys:n,flush:r}},A3=(e,n)=>{const[t,r]=$r();return eh({theme:t,token:r,hashId:"",path:["ant-design-icons",e],nonce:()=>n==null?void 0:n.nonce,layer:{name:"antd"}},()=>[{[`.${e}`]:Object.assign(Object.assign({},x3()),{[`.${e} .${e}-icon`]:{display:"block"}})}])},T3=(e,n,t)=>{var r;return typeof t=="function"?t(mr(n,(r=n[e])!==null&&r!==void 0?r:{})):t??{}},I3=(e,n,t,r)=>{const o=Object.assign({},n[e]);if(r!=null&&r.deprecatedTokens){const{deprecatedTokens:a}=r;a.forEach(l=>{let[s,c]=l;var d;(o!=null&&o[s]||o!=null&&o[c])&&((d=o[c])!==null&&d!==void 0||(o[c]=o==null?void 0:o[s]))})}const i=Object.assign(Object.assign({},t),o);return Object.keys(i).forEach(a=>{i[a]===n[a]&&delete i[a]}),i},Mg=(e,n)=>`${[n,e.replace(/([A-Z]+)([A-Z][a-z]+)/g,"$1-$2").replace(/([a-z])([A-Z])/g,"$1-$2")].filter(Boolean).join("-")}`;function V0(e,n,t){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=Array.isArray(e)?e:[e,e],[i]=o,a=o.join("-");return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:l;const[c,d,u,f,m]=$r(),{getPrefixCls:h,iconPrefixCls:v,csp:k}=p.useContext(qn),g=h(),b=m?"css":"js",y=V9(()=>{const R=new Set;return m&&Object.keys(r.unitless||{}).forEach(M=>{R.add(kc(M,m.prefix)),R.add(kc(M,Mg(i,m.prefix)))}),ex(b,R)},[b,i,m&&m.prefix]),{max:S,min:A}=K9(b),w={theme:c,token:f,hashId:u,nonce:()=>k==null?void 0:k.nonce,clientOnly:r.clientOnly,layer:{name:"antd"},order:r.order||-999};return eh(Object.assign(Object.assign({},w),{clientOnly:!1,path:["Shared",g]}),()=>[{"&":X9(f)}]),A3(v,k),[eh(Object.assign(Object.assign({},w),{path:[a,l,v]}),()=>{if(r.injectStyle===!1)return[];const{token:R,flush:M}=Y9(f),_=T3(i,d,t),D=`.${l}`,H=I3(i,d,_,{deprecatedTokens:r.deprecatedTokens});m&&Object.keys(_).forEach(V=>{_[V]=`var(${kc(V,Mg(i,m.prefix))})`});const j=mr(R,{componentCls:D,prefixCls:l,iconCls:`.${v}`,antCls:`.${g}`,calc:y,max:S,min:A},m?_:H),B=n(j,{hashId:u,prefixCls:l,rootPrefixCls:g,iconPrefixCls:v});return M(i,H),[r.resetStyle===!1?null:G9(j,l,s,r.resetFont),B]}),u]}}const J9=(e,n,t,r)=>{const o=V0(e,n,t,Object.assign({resetStyle:!1,order:-998},r));return a=>{let{prefixCls:l,rootCls:s=l}=a;return o(l,s),null}},eS=(e,n,t)=>{const{unitless:r,injectStyle:o=!0,prefixToken:i}=t,a=s=>{let{rootCls:c,cssVar:d}=s;const[,u]=$r();return Xx({path:[e],prefix:d.prefix,key:d==null?void 0:d.key,unitless:r,ignore:w3,token:u,scope:c},()=>{const f=T3(e,u,n),m=I3(e,u,f,{deprecatedTokens:t==null?void 0:t.deprecatedTokens});return Object.keys(f).forEach(h=>{m[i(h)]=m[h],delete m[h]}),m}),null};return s=>{const[,,,,c]=$r();return[d=>o&&c?Pe.createElement(Pe.Fragment,null,Pe.createElement(a,{rootCls:s,cssVar:c,component:e}),d):d,c==null?void 0:c.key]}},Ii=(e,n,t,r)=>{const o=Array.isArray(e)?e[0]:e;function i(u){return`${o}${u.slice(0,1).toUpperCase()}${u.slice(1)}`}const a=r&&r.unitless||{},l=Object.assign(Object.assign({},y3),{[i("zIndexPopup")]:!0});Object.keys(a).forEach(u=>{l[i(u)]=a[u]});const s=Object.assign(Object.assign({},r),{unitless:l,prefixToken:i}),c=V0(e,n,t,s),d=eS(o,t,s);return function(u){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:u;const[,m]=c(u,f),[h,v]=d(f);return[h,m,v]}};function nS(e,n){return mu.reduce((t,r)=>{const o=e[`${r}1`],i=e[`${r}3`],a=e[`${r}6`],l=e[`${r}7`];return Object.assign(Object.assign({},t),n(r,{lightColor:o,lightBorderColor:i,darkColor:a,textColor:l}))},{})}const tS=Object.assign({},ss),{useId:Lg}=tS,rS=()=>"",oS=typeof Lg>"u"?rS:Lg;function iS(e,n,t){var r;s3();const o=e||{},i=o.inherit===!1||!n?Object.assign(Object.assign({},ih),{hashed:(r=n==null?void 0:n.hashed)!==null&&r!==void 0?r:ih.hashed,cssVar:n==null?void 0:n.cssVar}):n,a=oS();return id(()=>{var l,s;if(!e)return n;const c=Object.assign({},i.components);Object.keys(e.components||{}).forEach(f=>{c[f]=Object.assign(Object.assign({},c[f]),e.components[f])});const d=`css-var-${a.replace(/:/g,"")}`,u=((l=o.cssVar)!==null&&l!==void 0?l:i.cssVar)&&Object.assign(Object.assign(Object.assign({prefix:t==null?void 0:t.prefixCls},typeof i.cssVar=="object"?i.cssVar:{}),typeof o.cssVar=="object"?o.cssVar:{}),{key:typeof o.cssVar=="object"&&((s=o.cssVar)===null||s===void 0?void 0:s.key)||d});return Object.assign(Object.assign(Object.assign({},i),o),{token:Object.assign(Object.assign({},i.token),o.token),components:c,cssVar:u})},[o,i],(l,s)=>l.some((c,d)=>{const u=s[d];return!$0(c,u,!0)}))}var aS=["children"],_3=p.createContext({});function lS(e){var n=e.children,t=zn(e,aS);return p.createElement(_3.Provider,{value:t},n)}var sS=function(e){_a(t,e);var n=Pa(t);function t(){return pr(this,t),n.apply(this,arguments)}return gr(t,[{key:"render",value:function(){return this.props.children}}]),t}(p.Component);function cS(e){var n=p.useReducer(function(l){return l+1},0),t=ve(n,2),r=t[1],o=p.useRef(e),i=at(function(){return o.current}),a=at(function(l){o.current=typeof l=="function"?l(o.current):l,r()});return[i,a]}var bo="none",Ks="appear",Qs="enter",Ys="leave",jg="none",Er="prepare",ta="start",ra="active",X0="end",P3="prepared";function Dg(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit".concat(e)]="webkit".concat(n),t["Moz".concat(e)]="moz".concat(n),t["ms".concat(e)]="MS".concat(n),t["O".concat(e)]="o".concat(n.toLowerCase()),t}function uS(e,n){var t={animationend:Dg("Animation","AnimationEnd"),transitionend:Dg("Transition","TransitionEnd")};return e&&("AnimationEvent"in n||delete t.animationend.animation,"TransitionEvent"in n||delete t.transitionend.transition),t}var dS=uS(Yt(),typeof window<"u"?window:{}),O3={};if(Yt()){var fS=document.createElement("div");O3=fS.style}var Js={};function F3(e){if(Js[e])return Js[e];var n=dS[e];if(n)for(var t=Object.keys(n),r=t.length,o=0;o<r;o+=1){var i=t[o];if(Object.prototype.hasOwnProperty.call(n,i)&&i in O3)return Js[e]=n[i],Js[e]}return""}var R3=F3("animationend"),N3=F3("transitionend"),M3=!!(R3&&N3),Bg=R3||"animationend",$g=N3||"transitionend";function zg(e,n){if(!e)return null;if(Tn(e)==="object"){var t=n.replace(/-\w/g,function(r){return r[1].toUpperCase()});return e[t]}return"".concat(e,"-").concat(n)}const mS=function(e){var n=p.useRef();function t(o){o&&(o.removeEventListener($g,e),o.removeEventListener(Bg,e))}function r(o){n.current&&n.current!==o&&t(n.current),o&&o!==n.current&&(o.addEventListener($g,e),o.addEventListener(Bg,e),n.current=o)}return p.useEffect(function(){return function(){t(n.current)}},[]),[r,t]};var L3=Yt()?p.useLayoutEffect:p.useEffect;const hS=function(){var e=p.useRef(null);function n(){mt.cancel(e.current)}function t(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;n();var i=mt(function(){o<=1?r({isCanceled:function(){return i!==e.current}}):t(r,o-1)});e.current=i}return p.useEffect(function(){return function(){n()}},[]),[t,n]};var pS=[Er,ta,ra,X0],gS=[Er,P3],j3=!1,bS=!0;function D3(e){return e===ra||e===X0}const vS=function(e,n,t){var r=es(jg),o=ve(r,2),i=o[0],a=o[1],l=hS(),s=ve(l,2),c=s[0],d=s[1];function u(){a(Er,!0)}var f=n?gS:pS;return L3(function(){if(i!==jg&&i!==X0){var m=f.indexOf(i),h=f[m+1],v=t(i);v===j3?a(h,!0):h&&c(function(k){function g(){k.isCanceled()||a(h,!0)}v===!0?g():Promise.resolve(v).then(g)})}},[e,i]),p.useEffect(function(){return function(){d()}},[]),[u,i]};function yS(e,n,t,r){var o=r.motionEnter,i=o===void 0?!0:o,a=r.motionAppear,l=a===void 0?!0:a,s=r.motionLeave,c=s===void 0?!0:s,d=r.motionDeadline,u=r.motionLeaveImmediately,f=r.onAppearPrepare,m=r.onEnterPrepare,h=r.onLeavePrepare,v=r.onAppearStart,k=r.onEnterStart,g=r.onLeaveStart,b=r.onAppearActive,y=r.onEnterActive,S=r.onLeaveActive,A=r.onAppearEnd,w=r.onEnterEnd,I=r.onLeaveEnd,R=r.onVisibleChanged,M=es(),_=ve(M,2),D=_[0],H=_[1],j=cS(bo),B=ve(j,2),V=B[0],$=B[1],O=es(null),P=ve(O,2),W=P[0],x=P[1],G=V(),Z=p.useRef(!1),T=p.useRef(null);function Q(){return t()}var ne=p.useRef(!1);function N(){$(bo),x(null,!0)}var te=at(function(Oe){var Le=V();if(Le!==bo){var Qe=Q();if(!(Oe&&!Oe.deadline&&Oe.target!==Qe)){var Ie=ne.current,oe;Le===Ks&&Ie?oe=A==null?void 0:A(Qe,Oe):Le===Qs&&Ie?oe=w==null?void 0:w(Qe,Oe):Le===Ys&&Ie&&(oe=I==null?void 0:I(Qe,Oe)),Ie&&oe!==!1&&N()}}}),Y=mS(te),ye=ve(Y,1),ge=ye[0],Ce=function(Le){switch(Le){case Ks:return Be(Be(Be({},Er,f),ta,v),ra,b);case Qs:return Be(Be(Be({},Er,m),ta,k),ra,y);case Ys:return Be(Be(Be({},Er,h),ta,g),ra,S);default:return{}}},se=p.useMemo(function(){return Ce(G)},[G]),Ge=vS(G,!e,function(Oe){if(Oe===Er){var Le=se[Er];return Le?Le(Q()):j3}if(ae in se){var Qe;x(((Qe=se[ae])===null||Qe===void 0?void 0:Qe.call(se,Q(),null))||null)}return ae===ra&&G!==bo&&(ge(Q()),d>0&&(clearTimeout(T.current),T.current=setTimeout(function(){te({deadline:!0})},d))),ae===P3&&N(),bS}),Ve=ve(Ge,2),Ae=Ve[0],ae=Ve[1],de=D3(ae);ne.current=de,L3(function(){H(n);var Oe=Z.current;Z.current=!0;var Le;!Oe&&n&&l&&(Le=Ks),Oe&&n&&i&&(Le=Qs),(Oe&&!n&&c||!Oe&&u&&!n&&c)&&(Le=Ys);var Qe=Ce(Le);Le&&(e||Qe[Er])?($(Le),Ae()):$(bo)},[n]),p.useEffect(function(){(G===Ks&&!l||G===Qs&&!i||G===Ys&&!c)&&$(bo)},[l,i,c]),p.useEffect(function(){return function(){Z.current=!1,clearTimeout(T.current)}},[]);var xe=p.useRef(!1);p.useEffect(function(){D&&(xe.current=!0),D!==void 0&&G===bo&&((xe.current||D)&&(R==null||R(D)),xe.current=!0)},[D,G]);var Te=W;return se[Er]&&ae===ta&&(Te=pe({transition:"none"},Te)),[G,ae,Te,D??n]}function wS(e){var n=e;Tn(e)==="object"&&(n=e.transitionSupport);function t(o,i){return!!(o.motionName&&n&&i!==!1)}var r=p.forwardRef(function(o,i){var a=o.visible,l=a===void 0?!0:a,s=o.removeOnLeave,c=s===void 0?!0:s,d=o.forceRender,u=o.children,f=o.motionName,m=o.leavedClassName,h=o.eventProps,v=p.useContext(_3),k=v.motion,g=t(o,k),b=p.useRef(),y=p.useRef();function S(){try{return b.current instanceof HTMLElement?b.current:wc(y.current)}catch{return null}}var A=yS(g,l,S,o),w=ve(A,4),I=w[0],R=w[1],M=w[2],_=w[3],D=p.useRef(_);_&&(D.current=!0);var H=p.useCallback(function(W){b.current=W,L0(i,W)},[i]),j,B=pe(pe({},h),{},{visible:l});if(!u)j=null;else if(I===bo)_?j=u(pe({},B),H):!c&&D.current&&m?j=u(pe(pe({},B),{},{className:m}),H):d||!c&&!m?j=u(pe(pe({},B),{},{style:{display:"none"}}),H):j=null;else{var V;R===Er?V="prepare":D3(R)?V="active":R===ta&&(V="start");var $=zg(f,"".concat(I,"-").concat(V));j=u(pe(pe({},B),{},{className:We(zg(f,I),Be(Be({},$,$&&V),f,typeof f=="string")),style:M}),H)}if(p.isValidElement(j)&&gs(j)){var O=j,P=O.ref;P||(j=p.cloneElement(j,{ref:H}))}return p.createElement(sS,{ref:y},j)});return r.displayName="CSSMotion",r}const Fa=wS(M3);var lh="add",sh="keep",ch="remove",yf="removed";function kS(e){var n;return e&&Tn(e)==="object"&&"key"in e?n=e:n={key:e},pe(pe({},n),{},{key:String(n.key)})}function uh(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return e.map(kS)}function CS(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=[],r=0,o=n.length,i=uh(e),a=uh(n);i.forEach(function(c){for(var d=!1,u=r;u<o;u+=1){var f=a[u];if(f.key===c.key){r<u&&(t=t.concat(a.slice(r,u).map(function(m){return pe(pe({},m),{},{status:lh})})),r=u),t.push(pe(pe({},f),{},{status:sh})),r+=1,d=!0;break}}d||t.push(pe(pe({},c),{},{status:ch}))}),r<o&&(t=t.concat(a.slice(r).map(function(c){return pe(pe({},c),{},{status:lh})})));var l={};t.forEach(function(c){var d=c.key;l[d]=(l[d]||0)+1});var s=Object.keys(l).filter(function(c){return l[c]>1});return s.forEach(function(c){t=t.filter(function(d){var u=d.key,f=d.status;return u!==c||f!==ch}),t.forEach(function(d){d.key===c&&(d.status=sh)})}),t}var xS=["component","children","onVisibleChanged","onAllRemoved"],SS=["status"],ES=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearPrepare","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function AS(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Fa,t=function(r){_a(i,r);var o=Pa(i);function i(){var a;pr(this,i);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return a=o.call.apply(o,[this].concat(s)),Be(di(a),"state",{keyEntities:[]}),Be(di(a),"removeKey",function(d){var u=a.state.keyEntities,f=u.map(function(m){return m.key!==d?m:pe(pe({},m),{},{status:yf})});return a.setState({keyEntities:f}),f.filter(function(m){var h=m.status;return h!==yf}).length}),a}return gr(i,[{key:"render",value:function(){var l=this,s=this.state.keyEntities,c=this.props,d=c.component,u=c.children,f=c.onVisibleChanged,m=c.onAllRemoved,h=zn(c,xS),v=d||p.Fragment,k={};return ES.forEach(function(g){k[g]=h[g],delete h[g]}),delete h.keys,p.createElement(v,h,s.map(function(g,b){var y=g.status,S=zn(g,SS),A=y===lh||y===sh;return p.createElement(n,gn({},k,{key:S.key,visible:A,eventProps:S,onVisibleChanged:function(I){if(f==null||f(I,{key:S.key}),!I){var R=l.removeKey(S.key);R===0&&m&&m()}}}),function(w,I){return u(pe(pe({},w),{},{index:b}),I)})}))}}],[{key:"getDerivedStateFromProps",value:function(l,s){var c=l.keys,d=s.keyEntities,u=uh(c),f=CS(d,u);return{keyEntities:f.filter(function(m){var h=d.find(function(v){var k=v.key;return m.key===k});return!(h&&h.status===yf&&m.status===ch)})}}}]),i}(p.Component);return Be(t,"defaultProps",{component:"div"}),t}AS(M3);function TS(e){const{children:n}=e,[,t]=$r(),{motion:r}=t,o=p.useRef(!1);return o.current=o.current||r===!1,o.current?p.createElement(lS,{motion:r},n):n}const IS=()=>null;var _S=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const PS=["getTargetContainer","getPopupContainer","renderEmpty","input","pagination","form","select","button"],B3="ant";let $3;function OS(){return $3||B3}function FS(e){return Object.keys(e).some(n=>n.endsWith("Color"))}const RS=e=>{const{prefixCls:n,iconPrefixCls:t,theme:r,holderRender:o}=e;n!==void 0&&($3=n),r&&FS(r)&&j9(OS(),r)},NS=e=>{const{children:n,csp:t,autoInsertSpaceInButton:r,alert:o,anchor:i,form:a,locale:l,componentSize:s,direction:c,space:d,virtual:u,dropdownMatchSelectWidth:f,popupMatchSelectWidth:m,popupOverflow:h,legacyLocale:v,parentContext:k,iconPrefixCls:g,theme:b,componentDisabled:y,segmented:S,statistic:A,spin:w,calendar:I,carousel:R,cascader:M,collapse:_,typography:D,checkbox:H,descriptions:j,divider:B,drawer:V,skeleton:$,steps:O,image:P,layout:W,list:x,mentions:G,modal:Z,progress:T,result:Q,slider:ne,breadcrumb:N,menu:te,pagination:Y,input:ye,textArea:ge,empty:Ce,badge:se,radio:Ge,rate:Ve,switch:Ae,transfer:ae,avatar:de,message:xe,tag:Te,table:Oe,card:Le,tabs:Qe,timeline:Ie,timePicker:oe,upload:je,notification:C,tree:E,colorPicker:F,datePicker:z,rangePicker:q,flex:K,wave:re,dropdown:ie,warning:he,tour:ce,floatButtonGroup:we}=e,ze=p.useCallback((Se,Ne)=>{const{prefixCls:en}=e;if(Ne)return Ne;const L=en||k.getPrefixCls("");return Se?`${L}-${Se}`:L},[k.getPrefixCls,e.prefixCls]),Ee=g||k.iconPrefixCls||b3,Ye=t||k.csp;A3(Ee,Ye);const rn=iS(b,k.theme,{prefixCls:ze("")}),Xe={csp:Ye,autoInsertSpaceInButton:r,alert:o,anchor:i,locale:l||v,direction:c,space:d,virtual:u,popupMatchSelectWidth:m??f,popupOverflow:h,getPrefixCls:ze,iconPrefixCls:Ee,theme:rn,segmented:S,statistic:A,spin:w,calendar:I,carousel:R,cascader:M,collapse:_,typography:D,checkbox:H,descriptions:j,divider:B,drawer:V,skeleton:$,steps:O,image:P,input:ye,textArea:ge,layout:W,list:x,mentions:G,modal:Z,progress:T,result:Q,slider:ne,breadcrumb:N,menu:te,pagination:Y,empty:Ce,badge:se,radio:Ge,rate:Ve,switch:Ae,transfer:ae,avatar:de,message:xe,tag:Te,table:Oe,card:Le,tabs:Qe,timeline:Ie,timePicker:oe,upload:je,notification:C,tree:E,colorPicker:F,datePicker:z,rangePicker:q,flex:K,wave:re,dropdown:ie,warning:he,tour:ce,floatButtonGroup:we},sn=Object.assign({},k);Object.keys(Xe).forEach(Se=>{Xe[Se]!==void 0&&(sn[Se]=Xe[Se])}),PS.forEach(Se=>{const Ne=e[Se];Ne&&(sn[Se]=Ne)}),typeof r<"u"&&(sn.button=Object.assign({autoInsertSpace:r},sn.button));const an=id(()=>sn,sn,(Se,Ne)=>{const en=Object.keys(Se),L=Object.keys(Ne);return en.length!==L.length||en.some(U=>Se[U]!==Ne[U])}),Je=p.useMemo(()=>({prefixCls:Ee,csp:Ye}),[Ee,Ye]);let _e=p.createElement(p.Fragment,null,p.createElement(IS,{dropdownMatchSelectWidth:f}),n);const qe=p.useMemo(()=>{var Se,Ne,en,L;return Yx(((Se=fd.Form)===null||Se===void 0?void 0:Se.defaultValidateMessages)||{},((en=(Ne=an.locale)===null||Ne===void 0?void 0:Ne.Form)===null||en===void 0?void 0:en.defaultValidateMessages)||{},((L=an.form)===null||L===void 0?void 0:L.validateMessages)||{},(a==null?void 0:a.validateMessages)||{})},[an,a==null?void 0:a.validateMessages]);Object.keys(qe).length>0&&(_e=p.createElement(n9.Provider,{value:qe},_e)),l&&(_e=p.createElement(a9,{locale:l,_ANT_MARK__:i9},_e)),(Ee||Ye)&&(_e=p.createElement(W0.Provider,{value:Je},_e)),s&&(_e=p.createElement(B9,{size:s},_e)),_e=p.createElement(TS,null,_e);const De=p.useMemo(()=>{const Se=rn||{},{algorithm:Ne,token:en,components:L,cssVar:U}=Se,X=_S(Se,["algorithm","token","components","cssVar"]),ee=Ne&&(!Array.isArray(Ne)||Ne.length>0)?qm(Ne):p3,be={};Object.entries(L||{}).forEach(Fe=>{let[le,He]=Fe;const fe=Object.assign({},He);"algorithm"in fe&&(fe.algorithm===!0?fe.theme=ee:(Array.isArray(fe.algorithm)||typeof fe.algorithm=="function")&&(fe.theme=qm(fe.algorithm)),delete fe.algorithm),be[le]=fe});const ke=Object.assign(Object.assign({},Jl),en);return Object.assign(Object.assign({},X),{theme:ee,token:ke,components:be,override:Object.assign({override:ke},be),cssVar:U})},[rn]);return b&&(_e=p.createElement(g3.Provider,{value:De},_e)),an.warning&&(_e=p.createElement(e9.Provider,{value:an.warning},_e)),y!==void 0&&(_e=p.createElement(D9,{disabled:y},_e)),p.createElement(qn.Provider,{value:an},_e)},Ra=e=>{const n=p.useContext(qn),t=p.useContext(u3);return p.createElement(NS,Object.assign({parentContext:n,legacyLocale:t},e))};Ra.ConfigContext=qn;Ra.SizeContext=Sa;Ra.config=RS;Ra.useConfig=$9;Object.defineProperty(Ra,"SizeContext",{get:()=>Sa});const MS=e=>{const{componentCls:n}=e;return{[n]:{position:"fixed",zIndex:e.zIndexPopup}}},LS=e=>({zIndexPopup:e.zIndexBase+10}),jS=Ii("Affix",MS,LS);function ec(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function Hg(e,n,t){if(t!==void 0&&Math.round(n.top)>Math.round(e.top)-t)return t+n.top}function Ug(e,n,t){if(t!==void 0&&Math.round(n.bottom)<Math.round(e.bottom)+t){const r=window.innerHeight-n.bottom;return t+r}}const Zg=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];function DS(){return typeof window<"u"?window:null}const Wg=0,Vg=1,BS=Pe.forwardRef((e,n)=>{var t;const{style:r,offsetTop:o,offsetBottom:i,prefixCls:a,className:l,rootClassName:s,children:c,target:d,onChange:u}=e,{getPrefixCls:f,getTargetContainer:m}=Pe.useContext(qn),h=f("affix",a),[v,k]=Pe.useState(!1),[g,b]=Pe.useState(),[y,S]=Pe.useState(),A=Pe.useRef(Wg),w=Pe.useRef(null),I=Pe.useRef(),R=Pe.useRef(null),M=Pe.useRef(null),_=Pe.useRef(null),D=(t=d??m)!==null&&t!==void 0?t:DS,H=i===void 0&&o===void 0?0:o,j=()=>{if(A.current!==Vg||!M.current||!R.current||!D)return;const ne=D();if(ne){const N={status:Wg},te=ec(R.current);if(te.top===0&&te.left===0&&te.width===0&&te.height===0)return;const Y=ec(ne),ye=Hg(te,Y,H),ge=Ug(te,Y,i);ye!==void 0?(N.affixStyle={position:"fixed",top:ye,width:te.width,height:te.height},N.placeholderStyle={width:te.width,height:te.height}):ge!==void 0&&(N.affixStyle={position:"fixed",bottom:ge,width:te.width,height:te.height},N.placeholderStyle={width:te.width,height:te.height}),N.lastAffix=!!N.affixStyle,v!==N.lastAffix&&(u==null||u(N.lastAffix)),A.current=N.status,b(N.affixStyle),S(N.placeholderStyle),k(N.lastAffix)}},B=()=>{A.current=Vg,j()},V=cg(()=>{B()}),$=cg(()=>{if(D&&g){const ne=D();if(ne&&R.current){const N=ec(ne),te=ec(R.current),Y=Hg(te,N,H),ye=Ug(te,N,i);if(Y!==void 0&&g.top===Y||ye!==void 0&&g.bottom===ye)return}}B()}),O=()=>{const ne=D==null?void 0:D();ne&&(Zg.forEach(N=>{var te;I.current&&((te=w.current)===null||te===void 0||te.removeEventListener(N,I.current)),ne==null||ne.addEventListener(N,$)}),w.current=ne,I.current=$)},P=()=>{_.current&&(clearTimeout(_.current),_.current=null);const ne=D==null?void 0:D();Zg.forEach(N=>{var te;ne==null||ne.removeEventListener(N,$),I.current&&((te=w.current)===null||te===void 0||te.removeEventListener(N,I.current))}),V.cancel(),$.cancel()};Pe.useImperativeHandle(n,()=>({updatePosition:V})),Pe.useEffect(()=>(_.current=setTimeout(O),()=>P()),[]),Pe.useEffect(()=>{O()},[d,g]),Pe.useEffect(()=>{V()},[d,o,i]);const[W,x,G]=jS(h),Z=We(s,x,h,G),T=We({[Z]:g});let Q=so(e,["prefixCls","offsetTop","offsetBottom","target","onChange","rootClassName"]);return W(Pe.createElement(ki,{onResize:V},Pe.createElement("div",Object.assign({style:r,className:l,ref:R},Q),g&&Pe.createElement("div",{style:y,"aria-hidden":"true"}),Pe.createElement("div",{className:T,ref:M,style:g},Pe.createElement(ki,{onResize:V},c)))))});function z3(e){var n;return e==null||(n=e.getRootNode)===null||n===void 0?void 0:n.call(e)}function $S(e){return z3(e)instanceof ShadowRoot}function hu(e){return $S(e)?z3(e):null}function zS(e){return e.replace(/-(.)/g,function(n,t){return t.toUpperCase()})}function HS(e,n){Ti(e,"[@ant-design/icons] ".concat(n))}function Xg(e){return Tn(e)==="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&(Tn(e.icon)==="object"||typeof e.icon=="function")}function Gg(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(e).reduce(function(n,t){var r=e[t];switch(t){case"class":n.className=r,delete n.class;break;default:delete n[t],n[zS(t)]=r}return n},{})}function dh(e,n,t){return t?Pe.createElement(e.tag,pe(pe({key:n},Gg(e.attrs)),t),(e.children||[]).map(function(r,o){return dh(r,"".concat(n,"-").concat(e.tag,"-").concat(o))})):Pe.createElement(e.tag,pe({key:n},Gg(e.attrs)),(e.children||[]).map(function(r,o){return dh(r,"".concat(n,"-").concat(e.tag,"-").concat(o))}))}function H3(e){return Ci(e)[0]}function U3(e){return e?Array.isArray(e)?e:[e]:[]}var US=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,ZS=function(n){var t=p.useContext(W0),r=t.csp,o=t.prefixCls,i=US;o&&(i=i.replace(/anticon/g,o)),p.useEffect(function(){var a=n.current,l=hu(a);eo(i,"@ant-design-icons",{prepend:!0,csp:r,attachTo:l})},[])},WS=["icon","className","onClick","style","primaryColor","secondaryColor"],Al={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function VS(e){var n=e.primaryColor,t=e.secondaryColor;Al.primaryColor=n,Al.secondaryColor=t||H3(n),Al.calculated=!!t}function XS(){return pe({},Al)}var Na=function(n){var t=n.icon,r=n.className,o=n.onClick,i=n.style,a=n.primaryColor,l=n.secondaryColor,s=zn(n,WS),c=p.useRef(),d=Al;if(a&&(d={primaryColor:a,secondaryColor:l||H3(a)}),ZS(c),HS(Xg(t),"icon should be icon definiton, but got ".concat(t)),!Xg(t))return null;var u=t;return u&&typeof u.icon=="function"&&(u=pe(pe({},u),{},{icon:u.icon(d.primaryColor,d.secondaryColor)})),dh(u.icon,"svg-".concat(u.name),pe(pe({className:r,onClick:o,style:i,"data-icon":u.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},s),{},{ref:c}))};Na.displayName="IconReact";Na.getTwoToneColors=XS;Na.setTwoToneColors=VS;function Z3(e){var n=U3(e),t=ve(n,2),r=t[0],o=t[1];return Na.setTwoToneColors({primaryColor:r,secondaryColor:o})}function GS(){var e=Na.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var qS=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];Z3(x9.primary);var Uo=p.forwardRef(function(e,n){var t=e.className,r=e.icon,o=e.spin,i=e.rotate,a=e.tabIndex,l=e.onClick,s=e.twoToneColor,c=zn(e,qS),d=p.useContext(W0),u=d.prefixCls,f=u===void 0?"anticon":u,m=d.rootClassName,h=We(m,f,Be(Be({},"".concat(f,"-").concat(r.name),!!r.name),"".concat(f,"-spin"),!!o||r.name==="loading"),t),v=a;v===void 0&&l&&(v=-1);var k=i?{msTransform:"rotate(".concat(i,"deg)"),transform:"rotate(".concat(i,"deg)")}:void 0,g=U3(s),b=ve(g,2),y=b[0],S=b[1];return p.createElement("span",gn({role:"img","aria-label":r.name},c,{ref:n,tabIndex:v,onClick:l,className:h}),p.createElement(Na,{icon:r,primaryColor:y,secondaryColor:S,style:k}))});Uo.displayName="AntdIcon";Uo.getTwoToneColor=GS;Uo.setTwoToneColor=Z3;function W3(e){return e&&Pe.isValidElement(e)&&e.type===Pe.Fragment}const KS=(e,n,t)=>Pe.isValidElement(e)?Pe.cloneElement(e,typeof t=="function"?t(e.props||{}):t):n;function Ma(e,n){return KS(e,e,n)}const qg=e=>typeof e=="object"&&e!=null&&e.nodeType===1,Kg=(e,n)=>(!n||e!=="hidden")&&e!=="visible"&&e!=="clip",wf=(e,n)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const t=getComputedStyle(e,null);return Kg(t.overflowY,n)||Kg(t.overflowX,n)||(r=>{const o=(i=>{if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch{return null}})(r);return!!o&&(o.clientHeight<r.scrollHeight||o.clientWidth<r.scrollWidth)})(e)}return!1},nc=(e,n,t,r,o,i,a,l)=>i<e&&a>n||i>e&&a<n?0:i<=e&&l<=t||a>=n&&l>=t?i-e-r:a>n&&l<t||i<e&&l>t?a-n+o:0,QS=e=>{const n=e.parentElement;return n??(e.getRootNode().host||null)},Qg=(e,n)=>{var t,r,o,i;if(typeof document>"u")return[];const{scrollMode:a,block:l,inline:s,boundary:c,skipOverflowHiddenElements:d}=n,u=typeof c=="function"?c:$=>$!==c;if(!qg(e))throw new TypeError("Invalid target");const f=document.scrollingElement||document.documentElement,m=[];let h=e;for(;qg(h)&&u(h);){if(h=QS(h),h===f){m.push(h);break}h!=null&&h===document.body&&wf(h)&&!wf(document.documentElement)||h!=null&&wf(h,d)&&m.push(h)}const v=(r=(t=window.visualViewport)==null?void 0:t.width)!=null?r:innerWidth,k=(i=(o=window.visualViewport)==null?void 0:o.height)!=null?i:innerHeight,{scrollX:g,scrollY:b}=window,{height:y,width:S,top:A,right:w,bottom:I,left:R}=e.getBoundingClientRect(),{top:M,right:_,bottom:D,left:H}=($=>{const O=window.getComputedStyle($);return{top:parseFloat(O.scrollMarginTop)||0,right:parseFloat(O.scrollMarginRight)||0,bottom:parseFloat(O.scrollMarginBottom)||0,left:parseFloat(O.scrollMarginLeft)||0}})(e);let j=l==="start"||l==="nearest"?A-M:l==="end"?I+D:A+y/2-M+D,B=s==="center"?R+S/2-H+_:s==="end"?w+_:R-H;const V=[];for(let $=0;$<m.length;$++){const O=m[$],{height:P,width:W,top:x,right:G,bottom:Z,left:T}=O.getBoundingClientRect();if(a==="if-needed"&&A>=0&&R>=0&&I<=k&&w<=v&&A>=x&&I<=Z&&R>=T&&w<=G)return V;const Q=getComputedStyle(O),ne=parseInt(Q.borderLeftWidth,10),N=parseInt(Q.borderTopWidth,10),te=parseInt(Q.borderRightWidth,10),Y=parseInt(Q.borderBottomWidth,10);let ye=0,ge=0;const Ce="offsetWidth"in O?O.offsetWidth-O.clientWidth-ne-te:0,se="offsetHeight"in O?O.offsetHeight-O.clientHeight-N-Y:0,Ge="offsetWidth"in O?O.offsetWidth===0?0:W/O.offsetWidth:0,Ve="offsetHeight"in O?O.offsetHeight===0?0:P/O.offsetHeight:0;if(f===O)ye=l==="start"?j:l==="end"?j-k:l==="nearest"?nc(b,b+k,k,N,Y,b+j,b+j+y,y):j-k/2,ge=s==="start"?B:s==="center"?B-v/2:s==="end"?B-v:nc(g,g+v,v,ne,te,g+B,g+B+S,S),ye=Math.max(0,ye+b),ge=Math.max(0,ge+g);else{ye=l==="start"?j-x-N:l==="end"?j-Z+Y+se:l==="nearest"?nc(x,Z,P,N,Y+se,j,j+y,y):j-(x+P/2)+se/2,ge=s==="start"?B-T-ne:s==="center"?B-(T+W/2)+Ce/2:s==="end"?B-G+te+Ce:nc(T,G,W,ne,te+Ce,B,B+S,S);const{scrollLeft:Ae,scrollTop:ae}=O;ye=Ve===0?0:Math.max(0,Math.min(ae+ye/Ve,O.scrollHeight-P/Ve+se)),ge=Ge===0?0:Math.max(0,Math.min(Ae+ge/Ge,O.scrollWidth-W/Ge+Ce)),j+=ae-ye,B+=Ae-ge}V.push({el:O,top:ye,left:ge})}return V},YS=e=>e===!1?{block:"end",inline:"nearest"}:(n=>n===Object(n)&&Object.keys(n).length!==0)(e)?e:{block:"start",inline:"nearest"};function JS(e,n){if(!e.isConnected||!(o=>{let i=o;for(;i&&i.parentNode;){if(i.parentNode===document)return!0;i=i.parentNode instanceof ShadowRoot?i.parentNode.host:i.parentNode}return!1})(e))return;const t=(o=>{const i=window.getComputedStyle(o);return{top:parseFloat(i.scrollMarginTop)||0,right:parseFloat(i.scrollMarginRight)||0,bottom:parseFloat(i.scrollMarginBottom)||0,left:parseFloat(i.scrollMarginLeft)||0}})(e);if((o=>typeof o=="object"&&typeof o.behavior=="function")(n))return n.behavior(Qg(e,n));const r=typeof n=="boolean"||n==null?void 0:n.behavior;for(const{el:o,top:i,left:a}of Qg(e,YS(n))){const l=i-t.top+t.bottom,s=a-t.left+t.right;o.scroll({top:l,left:s,behavior:r})}}function fh(e){return e!=null&&e===e.window}const V3=e=>{var n,t;if(typeof window>"u")return 0;let r=0;return fh(e)?r=e.pageYOffset:e instanceof Document?r=e.documentElement.scrollTop:(e instanceof HTMLElement||e)&&(r=e.scrollTop),e&&!fh(e)&&typeof r!="number"&&(r=(t=((n=e.ownerDocument)!==null&&n!==void 0?n:e).documentElement)===null||t===void 0?void 0:t.scrollTop),r};function eE(e,n,t,r){const o=t-n;return e/=r/2,e<1?o/2*e*e*e+n:o/2*((e-=2)*e*e+2)+n}function nE(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{getContainer:t=()=>window,callback:r,duration:o=450}=n,i=t(),a=V3(i),l=Date.now(),s=()=>{const d=Date.now()-l,u=eE(d>o?o:d,a,e,o);fh(i)?i.scrollTo(window.pageXOffset,u):i instanceof Document||i.constructor.name==="HTMLDocument"?i.documentElement.scrollTop=u:i.scrollTop=u,d<o?mt(s):typeof r=="function"&&r()};mt(s)}const G0=e=>{const[,,,,n]=$r();return n?`${e}-css-var`:""},X3=p.createContext(void 0),G3=e=>{const{href:n,title:t,prefixCls:r,children:o,className:i,target:a,replace:l}=e,s=p.useContext(X3),{registerLink:c,unregisterLink:d,scrollTo:u,onClick:f,activeLink:m,direction:h}=s||{};p.useEffect(()=>(c==null||c(n),()=>{d==null||d(n)}),[n]);const v=A=>{f==null||f(A,{title:t,href:n}),u==null||u(n),l&&(A.preventDefault(),window.location.replace(n))},{getPrefixCls:k}=p.useContext(qn),g=k("anchor",r),b=m===n,y=We(`${g}-link`,i,{[`${g}-link-active`]:b}),S=We(`${g}-link-title`,{[`${g}-link-title-active`]:b});return p.createElement("div",{className:y},p.createElement("a",{className:S,href:n,title:typeof t=="string"?t:"",target:a,onClick:v},t),h!=="horizontal"?o:null)},tE=e=>{const{componentCls:n,holderOffsetBlock:t,motionDurationSlow:r,lineWidthBold:o,colorPrimary:i,lineType:a,colorSplit:l,calc:s}=e;return{[`${n}-wrapper`]:{marginBlockStart:s(t).mul(-1).equal(),paddingBlockStart:t,[n]:Object.assign(Object.assign({},md(e)),{position:"relative",paddingInlineStart:o,[`${n}-link`]:{paddingBlock:e.linkPaddingBlock,paddingInline:`${Ze(e.linkPaddingInlineStart)} 0`,"&-title":Object.assign(Object.assign({},C3),{position:"relative",display:"block",marginBlockEnd:e.anchorTitleBlock,color:e.colorText,transition:`all ${e.motionDurationSlow}`,"&:only-child":{marginBlockEnd:0}}),[`&-active > ${n}-link-title`]:{color:e.colorPrimary},[`${n}-link`]:{paddingBlock:e.anchorPaddingBlockSecondary}}}),[`&:not(${n}-wrapper-horizontal)`]:{[n]:{"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:`${Ze(o)} ${a} ${l}`,content:'" "'},[`${n}-ink`]:{position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:`top ${r} ease-in-out`,width:o,backgroundColor:i,[`&${n}-ink-visible`]:{display:"inline-block"}}}},[`${n}-fixed ${n}-ink ${n}-ink`]:{display:"none"}}}},rE=e=>{const{componentCls:n,motionDurationSlow:t,lineWidthBold:r,colorPrimary:o}=e;return{[`${n}-wrapper-horizontal`]:{position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:`${Ze(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,content:'" "'},[n]:{overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"},[`${n}-link:first-of-type`]:{paddingInline:0},[`${n}-ink`]:{position:"absolute",bottom:0,transition:`left ${t} ease-in-out, width ${t} ease-in-out`,height:r,backgroundColor:o}}}}},oE=e=>({linkPaddingBlock:e.paddingXXS,linkPaddingInlineStart:e.padding}),iE=Ii("Anchor",e=>{const{fontSize:n,fontSizeLG:t,paddingXXS:r,calc:o}=e,i=mr(e,{holderOffsetBlock:r,anchorPaddingBlockSecondary:o(r).div(2).equal(),anchorTitleBlock:o(n).div(14).mul(3).equal(),anchorBallSize:o(t).div(2).equal()});return[tE(i),rE(i)]},oE);function aE(){return window}function Yg(e,n){if(!e.getClientRects().length)return 0;const t=e.getBoundingClientRect();return t.width||t.height?n===window?(n=e.ownerDocument.documentElement,t.top-n.clientTop):t.top-n.getBoundingClientRect().top:t.top}const Jg=/#([\S ]+)$/,lE=e=>{var n;const{rootClassName:t,prefixCls:r,className:o,style:i,offsetTop:a,affix:l=!0,showInkInFixed:s=!1,children:c,items:d,direction:u="vertical",bounds:f,targetOffset:m,onClick:h,onChange:v,getContainer:k,getCurrentAnchor:g,replace:b}=e,[y,S]=p.useState([]),[A,w]=p.useState(null),I=p.useRef(A),R=p.useRef(null),M=p.useRef(null),_=p.useRef(!1),{direction:D,anchor:H,getTargetContainer:j,getPrefixCls:B}=p.useContext(qn),V=B("anchor",r),$=G0(V),[O,P,W]=iE(V,$),x=(n=k??j)!==null&&n!==void 0?n:aE,G=JSON.stringify(y),Z=at(ae=>{y.includes(ae)||S(de=>[].concat(Ln(de),[ae]))}),T=at(ae=>{y.includes(ae)&&S(de=>de.filter(xe=>xe!==ae))}),Q=()=>{var ae;const de=(ae=R.current)===null||ae===void 0?void 0:ae.querySelector(`.${V}-link-title-active`);if(de&&M.current){const{style:xe}=M.current,Te=u==="horizontal";xe.top=Te?"":`${de.offsetTop+de.clientHeight/2}px`,xe.height=Te?"":`${de.clientHeight}px`,xe.left=Te?`${de.offsetLeft}px`:"",xe.width=Te?`${de.clientWidth}px`:"",Te&&JS(de,{scrollMode:"if-needed",block:"nearest"})}},ne=function(ae){let de=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,xe=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5;const Te=[],Oe=x();return ae.forEach(Le=>{const Qe=Jg.exec(Le==null?void 0:Le.toString());if(!Qe)return;const Ie=document.getElementById(Qe[1]);if(Ie){const oe=Yg(Ie,Oe);oe<=de+xe&&Te.push({link:Le,top:oe})}}),Te.length?Te.reduce((Qe,Ie)=>Ie.top>Qe.top?Ie:Qe).link:""},N=at(ae=>{if(I.current===ae)return;const de=typeof g=="function"?g(ae):ae;w(de),I.current=de,v==null||v(ae)}),te=p.useCallback(()=>{if(_.current)return;const ae=ne(y,m!==void 0?m:a||0,f);N(ae)},[G,m,a]),Y=p.useCallback(ae=>{N(ae);const de=Jg.exec(ae);if(!de)return;const xe=document.getElementById(de[1]);if(!xe)return;const Te=x(),Oe=V3(Te),Le=Yg(xe,Te);let Qe=Oe+Le;Qe-=m!==void 0?m:a||0,_.current=!0,nE(Qe,{getContainer:x,callback(){_.current=!1}})},[m,a]),ye=We(P,W,$,t,`${V}-wrapper`,{[`${V}-wrapper-horizontal`]:u==="horizontal",[`${V}-rtl`]:D==="rtl"},o,H==null?void 0:H.className),ge=We(V,{[`${V}-fixed`]:!l&&!s}),Ce=We(`${V}-ink`,{[`${V}-ink-visible`]:A}),se=Object.assign(Object.assign({maxHeight:a?`calc(100vh - ${a}px)`:"100vh"},H==null?void 0:H.style),i),Ge=ae=>Array.isArray(ae)?ae.map(de=>p.createElement(G3,Object.assign({replace:b},de,{key:de.key}),u==="vertical"&&Ge(de.children))):null,Ve=p.createElement("div",{ref:R,className:ye,style:se},p.createElement("div",{className:ge},p.createElement("span",{className:Ce,ref:M}),"items"in e?Ge(d):c));p.useEffect(()=>{const ae=x();return te(),ae==null||ae.addEventListener("scroll",te),()=>{ae==null||ae.removeEventListener("scroll",te)}},[G]),p.useEffect(()=>{typeof g=="function"&&N(g(I.current||""))},[g]),p.useEffect(()=>{Q()},[u,g,G,A]);const Ae=p.useMemo(()=>({registerLink:Z,unregisterLink:T,scrollTo:Y,activeLink:A,onClick:h,direction:u}),[A,h,Y,u]);return O(p.createElement(X3.Provider,{value:Ae},l?p.createElement(BS,{offsetTop:a,target:x},Ve):Ve))},q3=lE;q3.Link=G3;var Ue={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(n){var t=n.keyCode;if(n.altKey&&!n.ctrlKey||n.metaKey||t>=Ue.F1&&t<=Ue.F12)return!1;switch(t){case Ue.ALT:case Ue.CAPS_LOCK:case Ue.CONTEXT_MENU:case Ue.CTRL:case Ue.DOWN:case Ue.END:case Ue.ESC:case Ue.HOME:case Ue.INSERT:case Ue.LEFT:case Ue.MAC_FF_META:case Ue.META:case Ue.NUMLOCK:case Ue.NUM_CENTER:case Ue.PAGE_DOWN:case Ue.PAGE_UP:case Ue.PAUSE:case Ue.PRINT_SCREEN:case Ue.RIGHT:case Ue.SHIFT:case Ue.UP:case Ue.WIN_KEY:case Ue.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(n){if(n>=Ue.ZERO&&n<=Ue.NINE||n>=Ue.NUM_ZERO&&n<=Ue.NUM_MULTIPLY||n>=Ue.A&&n<=Ue.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&n===0)return!0;switch(n){case Ue.SPACE:case Ue.QUESTION_MARK:case Ue.NUM_PLUS:case Ue.NUM_MINUS:case Ue.NUM_PERIOD:case Ue.NUM_DIVISION:case Ue.SEMICOLON:case Ue.DASH:case Ue.EQUALS:case Ue.COMMA:case Ue.PERIOD:case Ue.SLASH:case Ue.APOSTROPHE:case Ue.SINGLE_QUOTE:case Ue.OPEN_SQUARE_BRACKET:case Ue.BACKSLASH:case Ue.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},sE={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},cE=function(n,t){return p.createElement(Uo,gn({},n,{ref:t,icon:sE}))},K3=p.forwardRef(cE);const Q3=Pe.createContext(void 0),Jo=100,uE=10,dE=Jo*uE,Y3={Modal:Jo,Drawer:Jo,Popover:Jo,Popconfirm:Jo,Tooltip:Jo,Tour:Jo},fE={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};function mE(e){return e in Y3}function J3(e,n){const[,t]=$r(),r=Pe.useContext(Q3),o=mE(e);if(n!==void 0)return[n,n];let i=r??0;return o?(i+=(r?0:t.zIndexPopupBase)+Y3[e],i=Math.min(i,t.zIndexPopupBase+dE)):i+=fE[e],[r===void 0?n:i,i]}function ns(){ns=function(){return n};var e,n={},t=Object.prototype,r=t.hasOwnProperty,o=Object.defineProperty||function($,O,P){$[O]=P.value},i=typeof Symbol=="function"?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c($,O,P){return Object.defineProperty($,O,{value:P,enumerable:!0,configurable:!0,writable:!0}),$[O]}try{c({},"")}catch{c=function(P,W,x){return P[W]=x}}function d($,O,P,W){var x=O&&O.prototype instanceof g?O:g,G=Object.create(x.prototype),Z=new B(W||[]);return o(G,"_invoke",{value:_($,P,Z)}),G}function u($,O,P){try{return{type:"normal",arg:$.call(O,P)}}catch(W){return{type:"throw",arg:W}}}n.wrap=d;var f="suspendedStart",m="suspendedYield",h="executing",v="completed",k={};function g(){}function b(){}function y(){}var S={};c(S,a,function(){return this});var A=Object.getPrototypeOf,w=A&&A(A(V([])));w&&w!==t&&r.call(w,a)&&(S=w);var I=y.prototype=g.prototype=Object.create(S);function R($){["next","throw","return"].forEach(function(O){c($,O,function(P){return this._invoke(O,P)})})}function M($,O){function P(x,G,Z,T){var Q=u($[x],$,G);if(Q.type!=="throw"){var ne=Q.arg,N=ne.value;return N&&Tn(N)=="object"&&r.call(N,"__await")?O.resolve(N.__await).then(function(te){P("next",te,Z,T)},function(te){P("throw",te,Z,T)}):O.resolve(N).then(function(te){ne.value=te,Z(ne)},function(te){return P("throw",te,Z,T)})}T(Q.arg)}var W;o(this,"_invoke",{value:function(G,Z){function T(){return new O(function(Q,ne){P(G,Z,Q,ne)})}return W=W?W.then(T,T):T()}})}function _($,O,P){var W=f;return function(x,G){if(W===h)throw Error("Generator is already running");if(W===v){if(x==="throw")throw G;return{value:e,done:!0}}for(P.method=x,P.arg=G;;){var Z=P.delegate;if(Z){var T=D(Z,P);if(T){if(T===k)continue;return T}}if(P.method==="next")P.sent=P._sent=P.arg;else if(P.method==="throw"){if(W===f)throw W=v,P.arg;P.dispatchException(P.arg)}else P.method==="return"&&P.abrupt("return",P.arg);W=h;var Q=u($,O,P);if(Q.type==="normal"){if(W=P.done?v:m,Q.arg===k)continue;return{value:Q.arg,done:P.done}}Q.type==="throw"&&(W=v,P.method="throw",P.arg=Q.arg)}}}function D($,O){var P=O.method,W=$.iterator[P];if(W===e)return O.delegate=null,P==="throw"&&$.iterator.return&&(O.method="return",O.arg=e,D($,O),O.method==="throw")||P!=="return"&&(O.method="throw",O.arg=new TypeError("The iterator does not provide a '"+P+"' method")),k;var x=u(W,$.iterator,O.arg);if(x.type==="throw")return O.method="throw",O.arg=x.arg,O.delegate=null,k;var G=x.arg;return G?G.done?(O[$.resultName]=G.value,O.next=$.nextLoc,O.method!=="return"&&(O.method="next",O.arg=e),O.delegate=null,k):G:(O.method="throw",O.arg=new TypeError("iterator result is not an object"),O.delegate=null,k)}function H($){var O={tryLoc:$[0]};1 in $&&(O.catchLoc=$[1]),2 in $&&(O.finallyLoc=$[2],O.afterLoc=$[3]),this.tryEntries.push(O)}function j($){var O=$.completion||{};O.type="normal",delete O.arg,$.completion=O}function B($){this.tryEntries=[{tryLoc:"root"}],$.forEach(H,this),this.reset(!0)}function V($){if($||$===""){var O=$[a];if(O)return O.call($);if(typeof $.next=="function")return $;if(!isNaN($.length)){var P=-1,W=function x(){for(;++P<$.length;)if(r.call($,P))return x.value=$[P],x.done=!1,x;return x.value=e,x.done=!0,x};return W.next=W}}throw new TypeError(Tn($)+" is not iterable")}return b.prototype=y,o(I,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:b,configurable:!0}),b.displayName=c(y,s,"GeneratorFunction"),n.isGeneratorFunction=function($){var O=typeof $=="function"&&$.constructor;return!!O&&(O===b||(O.displayName||O.name)==="GeneratorFunction")},n.mark=function($){return Object.setPrototypeOf?Object.setPrototypeOf($,y):($.__proto__=y,c($,s,"GeneratorFunction")),$.prototype=Object.create(I),$},n.awrap=function($){return{__await:$}},R(M.prototype),c(M.prototype,l,function(){return this}),n.AsyncIterator=M,n.async=function($,O,P,W,x){x===void 0&&(x=Promise);var G=new M(d($,O,P,W),x);return n.isGeneratorFunction(O)?G:G.next().then(function(Z){return Z.done?Z.value:G.next()})},R(I),c(I,s,"Generator"),c(I,a,function(){return this}),c(I,"toString",function(){return"[object Generator]"}),n.keys=function($){var O=Object($),P=[];for(var W in O)P.push(W);return P.reverse(),function x(){for(;P.length;){var G=P.pop();if(G in O)return x.value=G,x.done=!1,x}return x.done=!0,x}},n.values=V,B.prototype={constructor:B,reset:function(O){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!O)for(var P in this)P.charAt(0)==="t"&&r.call(this,P)&&!isNaN(+P.slice(1))&&(this[P]=e)},stop:function(){this.done=!0;var O=this.tryEntries[0].completion;if(O.type==="throw")throw O.arg;return this.rval},dispatchException:function(O){if(this.done)throw O;var P=this;function W(ne,N){return Z.type="throw",Z.arg=O,P.next=ne,N&&(P.method="next",P.arg=e),!!N}for(var x=this.tryEntries.length-1;x>=0;--x){var G=this.tryEntries[x],Z=G.completion;if(G.tryLoc==="root")return W("end");if(G.tryLoc<=this.prev){var T=r.call(G,"catchLoc"),Q=r.call(G,"finallyLoc");if(T&&Q){if(this.prev<G.catchLoc)return W(G.catchLoc,!0);if(this.prev<G.finallyLoc)return W(G.finallyLoc)}else if(T){if(this.prev<G.catchLoc)return W(G.catchLoc,!0)}else{if(!Q)throw Error("try statement without catch or finally");if(this.prev<G.finallyLoc)return W(G.finallyLoc)}}}},abrupt:function(O,P){for(var W=this.tryEntries.length-1;W>=0;--W){var x=this.tryEntries[W];if(x.tryLoc<=this.prev&&r.call(x,"finallyLoc")&&this.prev<x.finallyLoc){var G=x;break}}G&&(O==="break"||O==="continue")&&G.tryLoc<=P&&P<=G.finallyLoc&&(G=null);var Z=G?G.completion:{};return Z.type=O,Z.arg=P,G?(this.method="next",this.next=G.finallyLoc,k):this.complete(Z)},complete:function(O,P){if(O.type==="throw")throw O.arg;return O.type==="break"||O.type==="continue"?this.next=O.arg:O.type==="return"?(this.rval=this.arg=O.arg,this.method="return",this.next="end"):O.type==="normal"&&P&&(this.next=P),k},finish:function(O){for(var P=this.tryEntries.length-1;P>=0;--P){var W=this.tryEntries[P];if(W.finallyLoc===O)return this.complete(W.completion,W.afterLoc),j(W),k}},catch:function(O){for(var P=this.tryEntries.length-1;P>=0;--P){var W=this.tryEntries[P];if(W.tryLoc===O){var x=W.completion;if(x.type==="throw"){var G=x.arg;j(W)}return G}}throw Error("illegal catch attempt")},delegateYield:function(O,P,W){return this.delegate={iterator:V(O),resultName:P,nextLoc:W},this.method==="next"&&(this.arg=e),k}},n}function e1(e,n,t,r,o,i,a){try{var l=e[i](a),s=l.value}catch(c){return void t(c)}l.done?n(s):Promise.resolve(s).then(r,o)}function ew(e){return function(){var n=this,t=arguments;return new Promise(function(r,o){var i=e.apply(n,t);function a(s){e1(i,r,o,a,l,"next",s)}function l(s){e1(i,r,o,a,l,"throw",s)}a(void 0)})}}var bs=pe({},ty),hE=bs.version,pE=bs.render,gE=bs.unmountComponentAtNode,hd;try{var bE=Number((hE||"").split(".")[0]);bE>=18&&(hd=bs.createRoot)}catch{}function n1(e){var n=bs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;n&&Tn(n)==="object"&&(n.usingClientEntryPoint=e)}var pu="__rc_react_root__";function vE(e,n){n1(!0);var t=n[pu]||hd(n);n1(!1),t.render(e),n[pu]=t}function yE(e,n){pE(e,n)}function wE(e,n){if(hd){vE(e,n);return}yE(e,n)}function kE(e){return mh.apply(this,arguments)}function mh(){return mh=ew(ns().mark(function e(n){return ns().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Promise.resolve().then(function(){var o;(o=n[pu])===null||o===void 0||o.unmount(),delete n[pu]}));case 1:case"end":return r.stop()}},e)})),mh.apply(this,arguments)}function CE(e){gE(e)}function xE(e){return hh.apply(this,arguments)}function hh(){return hh=ew(ns().mark(function e(n){return ns().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(hd===void 0){r.next=2;break}return r.abrupt("return",kE(n));case 2:CE(n);case 3:case"end":return r.stop()}},e)})),hh.apply(this,arguments)}const kf=()=>({height:0,opacity:0}),t1=e=>{const{scrollHeight:n}=e;return{height:n,opacity:1}},SE=e=>({height:e?e.offsetHeight:0}),Cf=(e,n)=>(n==null?void 0:n.deadline)===!0||n.propertyName==="height",EE=function(){return{motionName:`${arguments.length>0&&arguments[0]!==void 0?arguments[0]:"ant"}-motion-collapse`,onAppearStart:kf,onEnterStart:kf,onAppearActive:t1,onEnterActive:t1,onLeaveStart:SE,onLeaveActive:kf,onAppearEnd:Cf,onEnterEnd:Cf,onLeaveEnd:Cf,motionDeadline:500}},AE=(e,n,t)=>t!==void 0?t:`${e}-${n}`,q0=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var n=e.getBBox(),t=n.width,r=n.height;if(t||r)return!0}if(e.getBoundingClientRect){var o=e.getBoundingClientRect(),i=o.width,a=o.height;if(i||a)return!0}}return!1},TE=e=>{const{componentCls:n,colorPrimary:t}=e;return{[n]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${t})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${e.motionEaseOutCirc}`,`opacity 2s ${e.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0},"&.wave-quick":{transition:[`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`,`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")}}}}},IE=V0("Wave",e=>[TE(e)]),nw=`${B3}-wave-target`;function _E(e){const n=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return n&&n[1]&&n[2]&&n[3]?!(n[1]===n[2]&&n[2]===n[3]):!0}function xf(e){return e&&e!=="#fff"&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&e!=="rgba(255, 255, 255, 1)"&&_E(e)&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&e!=="transparent"}function PE(e){const{borderTopColor:n,borderColor:t,backgroundColor:r}=getComputedStyle(e);return xf(n)?n:xf(t)?t:xf(r)?r:null}function Sf(e){return Number.isNaN(e)?0:e}const OE=e=>{const{className:n,target:t,component:r}=e,o=p.useRef(null),[i,a]=p.useState(null),[l,s]=p.useState([]),[c,d]=p.useState(0),[u,f]=p.useState(0),[m,h]=p.useState(0),[v,k]=p.useState(0),[g,b]=p.useState(!1),y={left:c,top:u,width:m,height:v,borderRadius:l.map(w=>`${w}px`).join(" ")};i&&(y["--wave-color"]=i);function S(){const w=getComputedStyle(t);a(PE(t));const I=w.position==="static",{borderLeftWidth:R,borderTopWidth:M}=w;d(I?t.offsetLeft:Sf(-parseFloat(R))),f(I?t.offsetTop:Sf(-parseFloat(M))),h(t.offsetWidth),k(t.offsetHeight);const{borderTopLeftRadius:_,borderTopRightRadius:D,borderBottomLeftRadius:H,borderBottomRightRadius:j}=w;s([_,D,j,H].map(B=>Sf(parseFloat(B))))}if(p.useEffect(()=>{if(t){const w=mt(()=>{S(),b(!0)});let I;return typeof ResizeObserver<"u"&&(I=new ResizeObserver(S),I.observe(t)),()=>{mt.cancel(w),I==null||I.disconnect()}}},[]),!g)return null;const A=(r==="Checkbox"||r==="Radio")&&(t==null?void 0:t.classList.contains(nw));return p.createElement(Fa,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(w,I)=>{var R;if(I.deadline||I.propertyName==="opacity"){const M=(R=o.current)===null||R===void 0?void 0:R.parentElement;xE(M).then(()=>{M==null||M.remove()})}return!1}},(w,I)=>{let{className:R}=w;return p.createElement("div",{ref:ps(o,I),className:We(n,R,{"wave-quick":A}),style:y})})},FE=(e,n)=>{var t;const{component:r}=n;if(r==="Checkbox"&&!(!((t=e.querySelector("input"))===null||t===void 0)&&t.checked))return;const o=document.createElement("div");o.style.position="absolute",o.style.left="0px",o.style.top="0px",e==null||e.insertBefore(o,e==null?void 0:e.firstChild),wE(p.createElement(OE,Object.assign({},n,{target:e})),o)},RE=(e,n,t)=>{const{wave:r}=p.useContext(qn),[,o,i]=$r(),a=at(c=>{const d=e.current;if(r!=null&&r.disabled||!d)return;const u=d.querySelector(`.${nw}`)||d,{showEffect:f}=r||{};(f||FE)(u,{className:n,token:o,component:t,event:c,hashId:i})}),l=p.useRef();return c=>{mt.cancel(l.current),l.current=mt(()=>{a(c)})}},NE=e=>{const{children:n,disabled:t,component:r}=e,{getPrefixCls:o}=p.useContext(qn),i=p.useRef(null),a=o("wave"),[,l]=IE(a),s=RE(i,We(a,l),r);if(Pe.useEffect(()=>{const d=i.current;if(!d||d.nodeType!==1||t)return;const u=f=>{!q0(f.target)||!d.getAttribute||d.getAttribute("disabled")||d.disabled||d.className.includes("disabled")||d.className.includes("-leave")||s(f)};return d.addEventListener("click",u,!0),()=>{d.removeEventListener("click",u,!0)}},[t]),!Pe.isValidElement(n))return n??null;const c=gs(n)?ps(n.ref,i):i;return Ma(n,{ref:c})},ME=e=>{const n=Pe.useContext(Sa);return Pe.useMemo(()=>e?typeof e=="string"?e??n:e instanceof Function?e(n):n:n,[e,n])},tw=p.createContext(null),LE=(e,n)=>{const t=p.useContext(tw),r=p.useMemo(()=>{if(!t)return"";const{compactDirection:o,isFirstItem:i,isLastItem:a}=t,l=o==="vertical"?"-vertical-":"-";return We(`${e}-compact${l}item`,{[`${e}-compact${l}first-item`]:i,[`${e}-compact${l}last-item`]:a,[`${e}-compact${l}item-rtl`]:n==="rtl"})},[e,n,t]);return{compactSize:t==null?void 0:t.compactSize,compactDirection:t==null?void 0:t.compactDirection,compactItemClassnames:r}},jE=e=>{let{children:n}=e;return p.createElement(tw.Provider,{value:null},n)};var DE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const rw=p.createContext(void 0),BE=e=>{const{getPrefixCls:n,direction:t}=p.useContext(qn),{prefixCls:r,size:o,className:i}=e,a=DE(e,["prefixCls","size","className"]),l=n("btn-group",r),[,,s]=$r();let c="";switch(o){case"large":c="lg";break;case"small":c="sm";break}const d=We(l,{[`${l}-${c}`]:c,[`${l}-rtl`]:t==="rtl"},i,s);return p.createElement(rw.Provider,{value:o},p.createElement("div",Object.assign({},a,{className:d})))},r1=/^[\u4e00-\u9fa5]{2}$/,ph=r1.test.bind(r1);function o1(e){return typeof e=="string"}function Ef(e){return e==="text"||e==="link"}function $E(e,n){if(e==null)return;const t=n?" ":"";return typeof e!="string"&&typeof e!="number"&&o1(e.type)&&ph(e.props.children)?Ma(e,{children:e.props.children.split("").join(t)}):o1(e)?ph(e)?Pe.createElement("span",null,e.split("").join(t)):Pe.createElement("span",null,e):W3(e)?Pe.createElement("span",null,e):e}function zE(e,n){let t=!1;const r=[];return Pe.Children.forEach(e,o=>{const i=typeof o,a=i==="string"||i==="number";if(t&&a){const l=r.length-1,s=r[l];r[l]=`${s}${o}`}else r.push(o);t=a}),Pe.Children.map(r,o=>$E(o,n))}const ow=p.forwardRef((e,n)=>{const{className:t,style:r,children:o,prefixCls:i}=e,a=We(`${i}-icon`,t);return Pe.createElement("span",{ref:n,className:a,style:r},o)}),i1=p.forwardRef((e,n)=>{const{prefixCls:t,className:r,style:o,iconClassName:i}=e,a=We(`${t}-loading-icon`,r);return Pe.createElement(ow,{prefixCls:t,className:a,style:o,ref:n},Pe.createElement(K3,{className:i}))}),Af=()=>({width:0,opacity:0,transform:"scale(0)"}),Tf=e=>({width:e.scrollWidth,opacity:1,transform:"scale(1)"}),HE=e=>{const{prefixCls:n,loading:t,existIcon:r,className:o,style:i}=e,a=!!t;return r?Pe.createElement(i1,{prefixCls:n,className:o,style:i}):Pe.createElement(Fa,{visible:a,motionName:`${n}-loading-icon-motion`,motionLeave:a,removeOnLeave:!0,onAppearStart:Af,onAppearActive:Tf,onEnterStart:Af,onEnterActive:Tf,onLeaveStart:Tf,onLeaveActive:Af},(l,s)=>{let{className:c,style:d}=l;return Pe.createElement(i1,{prefixCls:n,className:o,style:Object.assign(Object.assign({},i),d),ref:s,iconClassName:c})})},a1=(e,n)=>({[`> span, > ${e}`]:{"&:not(:last-child)":{[`&, & > ${e}`]:{"&:not(:disabled)":{borderInlineEndColor:n}}},"&:not(:first-child)":{[`&, & > ${e}`]:{"&:not(:disabled)":{borderInlineStartColor:n}}}}}),UE=e=>{const{componentCls:n,fontSize:t,lineWidth:r,groupBorderColor:o,colorErrorHover:i}=e;return{[`${n}-group`]:[{position:"relative",display:"inline-flex",[`> span, > ${n}`]:{"&:not(:last-child)":{[`&, & > ${n}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},"&:not(:first-child)":{marginInlineStart:e.calc(r).mul(-1).equal(),[`&, & > ${n}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}},[n]:{position:"relative",zIndex:1,"&:hover,\n          &:focus,\n          &:active":{zIndex:2},"&[disabled]":{zIndex:0}},[`${n}-icon-only`]:{fontSize:t}},a1(`${n}-primary`,o),a1(`${n}-danger`,i)]}},iw=e=>{const{paddingInline:n,onlyIconSize:t,paddingBlock:r}=e;return mr(e,{buttonPaddingHorizontal:n,buttonPaddingVertical:r,buttonIconOnlyFontSize:t})},aw=e=>{var n,t,r,o,i,a;const l=(n=e.contentFontSize)!==null&&n!==void 0?n:e.fontSize,s=(t=e.contentFontSizeSM)!==null&&t!==void 0?t:e.fontSize,c=(r=e.contentFontSizeLG)!==null&&r!==void 0?r:e.fontSizeLG,d=(o=e.contentLineHeight)!==null&&o!==void 0?o:Ic(l),u=(i=e.contentLineHeightSM)!==null&&i!==void 0?i:Ic(s),f=(a=e.contentLineHeightLG)!==null&&a!==void 0?a:Ic(c);return{fontWeight:400,defaultShadow:`0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,primaryShadow:`0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,dangerShadow:`0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,primaryColor:e.colorTextLightSolid,dangerColor:e.colorTextLightSolid,borderColorDisabled:e.colorBorder,defaultGhostColor:e.colorBgContainer,ghostBg:"transparent",defaultGhostBorderColor:e.colorBgContainer,paddingInline:e.paddingContentHorizontal-e.lineWidth,paddingInlineLG:e.paddingContentHorizontal-e.lineWidth,paddingInlineSM:8-e.lineWidth,onlyIconSize:e.fontSizeLG,onlyIconSizeSM:e.fontSizeLG-2,onlyIconSizeLG:e.fontSizeLG+2,groupBorderColor:e.colorPrimaryHover,linkHoverBg:"transparent",textHoverBg:e.colorBgTextHover,defaultColor:e.colorText,defaultBg:e.colorBgContainer,defaultBorderColor:e.colorBorder,defaultBorderColorDisabled:e.colorBorder,defaultHoverBg:e.colorBgContainer,defaultHoverColor:e.colorPrimaryHover,defaultHoverBorderColor:e.colorPrimaryHover,defaultActiveBg:e.colorBgContainer,defaultActiveColor:e.colorPrimaryActive,defaultActiveBorderColor:e.colorPrimaryActive,contentFontSize:l,contentFontSizeSM:s,contentFontSizeLG:c,contentLineHeight:d,contentLineHeightSM:u,contentLineHeightLG:f,paddingBlock:Math.max((e.controlHeight-l*d)/2-e.lineWidth,0),paddingBlockSM:Math.max((e.controlHeightSM-s*u)/2-e.lineWidth,0),paddingBlockLG:Math.max((e.controlHeightLG-c*f)/2-e.lineWidth,0)}},ZE=e=>{const{componentCls:n,iconCls:t,fontWeight:r}=e;return{[n]:{outline:"none",position:"relative",display:"inline-flex",gap:e.marginXS,alignItems:"center",justifyContent:"center",fontWeight:r,whiteSpace:"nowrap",textAlign:"center",backgroundImage:"none",background:"transparent",border:`${Ze(e.lineWidth)} ${e.lineType} transparent`,cursor:"pointer",transition:`all ${e.motionDurationMid} ${e.motionEaseInOut}`,userSelect:"none",touchAction:"manipulation",color:e.colorText,"&:disabled > *":{pointerEvents:"none"},"> span":{display:"inline-block"},[`${n}-icon`]:{lineHeight:1},"> a":{color:"currentColor"},"&:not(:disabled)":Object.assign({},q9(e)),[`&${n}-two-chinese-chars::first-letter`]:{letterSpacing:"0.34em"},[`&${n}-two-chinese-chars > *:not(${t})`]:{marginInlineEnd:"-0.34em",letterSpacing:"0.34em"},"&-icon-end":{flexDirection:"row-reverse"}}}},ao=(e,n,t)=>({[`&:not(:disabled):not(${e}-disabled)`]:{"&:hover":n,"&:active":t}}),WE=e=>({minWidth:e.controlHeight,paddingInlineStart:0,paddingInlineEnd:0,borderRadius:"50%"}),VE=e=>({borderRadius:e.controlHeight,paddingInlineStart:e.calc(e.controlHeight).div(2).equal(),paddingInlineEnd:e.calc(e.controlHeight).div(2).equal()}),XE=e=>({cursor:"not-allowed",borderColor:e.borderColorDisabled,color:e.colorTextDisabled,background:e.colorBgContainerDisabled,boxShadow:"none"}),ts=(e,n,t,r,o,i,a,l)=>({[`&${e}-background-ghost`]:Object.assign(Object.assign({color:t||void 0,background:n,borderColor:r||void 0,boxShadow:"none"},ao(e,Object.assign({background:n},a),Object.assign({background:n},l))),{"&:disabled":{cursor:"not-allowed",color:o||void 0,borderColor:i||void 0}})}),K0=e=>({[`&:disabled, &${e.componentCls}-disabled`]:Object.assign({},XE(e))}),lw=e=>Object.assign({},K0(e)),gu=e=>({[`&:disabled, &${e.componentCls}-disabled`]:{cursor:"not-allowed",color:e.colorTextDisabled}}),sw=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},lw(e)),{background:e.defaultBg,borderColor:e.defaultBorderColor,color:e.defaultColor,boxShadow:e.defaultShadow}),ao(e.componentCls,{color:e.defaultHoverColor,borderColor:e.defaultHoverBorderColor,background:e.defaultHoverBg},{color:e.defaultActiveColor,borderColor:e.defaultActiveBorderColor,background:e.defaultActiveBg})),ts(e.componentCls,e.ghostBg,e.defaultGhostColor,e.defaultGhostBorderColor,e.colorTextDisabled,e.colorBorder)),{[`&${e.componentCls}-dangerous`]:Object.assign(Object.assign(Object.assign({color:e.colorError,borderColor:e.colorError},ao(e.componentCls,{color:e.colorErrorHover,borderColor:e.colorErrorBorderHover},{color:e.colorErrorActive,borderColor:e.colorErrorActive})),ts(e.componentCls,e.ghostBg,e.colorError,e.colorError,e.colorTextDisabled,e.colorBorder)),K0(e))}),GE=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},lw(e)),{color:e.primaryColor,background:e.colorPrimary,boxShadow:e.primaryShadow}),ao(e.componentCls,{color:e.colorTextLightSolid,background:e.colorPrimaryHover},{color:e.colorTextLightSolid,background:e.colorPrimaryActive})),ts(e.componentCls,e.ghostBg,e.colorPrimary,e.colorPrimary,e.colorTextDisabled,e.colorBorder,{color:e.colorPrimaryHover,borderColor:e.colorPrimaryHover},{color:e.colorPrimaryActive,borderColor:e.colorPrimaryActive})),{[`&${e.componentCls}-dangerous`]:Object.assign(Object.assign(Object.assign({background:e.colorError,boxShadow:e.dangerShadow,color:e.dangerColor},ao(e.componentCls,{background:e.colorErrorHover},{background:e.colorErrorActive})),ts(e.componentCls,e.ghostBg,e.colorError,e.colorError,e.colorTextDisabled,e.colorBorder,{color:e.colorErrorHover,borderColor:e.colorErrorHover},{color:e.colorErrorActive,borderColor:e.colorErrorActive})),K0(e))}),qE=e=>Object.assign(Object.assign({},sw(e)),{borderStyle:"dashed"}),KE=e=>Object.assign(Object.assign(Object.assign({color:e.colorLink},ao(e.componentCls,{color:e.colorLinkHover,background:e.linkHoverBg},{color:e.colorLinkActive})),gu(e)),{[`&${e.componentCls}-dangerous`]:Object.assign(Object.assign({color:e.colorError},ao(e.componentCls,{color:e.colorErrorHover},{color:e.colorErrorActive})),gu(e))}),QE=e=>Object.assign(Object.assign(Object.assign({},ao(e.componentCls,{color:e.colorText,background:e.textHoverBg},{color:e.colorText,background:e.colorBgTextActive})),gu(e)),{[`&${e.componentCls}-dangerous`]:Object.assign(Object.assign({color:e.colorError},gu(e)),ao(e.componentCls,{color:e.colorErrorHover,background:e.colorErrorBg},{color:e.colorErrorHover,background:e.colorErrorBgActive}))}),YE=e=>{const{componentCls:n}=e;return{[`${n}-default`]:sw(e),[`${n}-primary`]:GE(e),[`${n}-dashed`]:qE(e),[`${n}-link`]:KE(e),[`${n}-text`]:QE(e),[`${n}-ghost`]:ts(e.componentCls,e.ghostBg,e.colorBgContainer,e.colorBgContainer,e.colorTextDisabled,e.colorBorder)}},Q0=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const{componentCls:t,controlHeight:r,fontSize:o,lineHeight:i,borderRadius:a,buttonPaddingHorizontal:l,iconCls:s,buttonPaddingVertical:c}=e,d=`${t}-icon-only`;return[{[`${n}`]:{fontSize:o,lineHeight:i,height:r,padding:`${Ze(c)} ${Ze(l)}`,borderRadius:a,[`&${d}`]:{width:r,paddingInline:0,[`&${t}-compact-item`]:{flex:"none"},[`&${t}-round`]:{width:"auto"},[s]:{fontSize:e.buttonIconOnlyFontSize}},[`&${t}-loading`]:{opacity:e.opacityLoading,cursor:"default"},[`${t}-loading-icon`]:{transition:`width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`}}},{[`${t}${t}-circle${n}`]:WE(e)},{[`${t}${t}-round${n}`]:VE(e)}]},JE=e=>{const n=mr(e,{fontSize:e.contentFontSize,lineHeight:e.contentLineHeight});return Q0(n,e.componentCls)},eA=e=>{const n=mr(e,{controlHeight:e.controlHeightSM,fontSize:e.contentFontSizeSM,lineHeight:e.contentLineHeightSM,padding:e.paddingXS,buttonPaddingHorizontal:e.paddingInlineSM,buttonPaddingVertical:e.paddingBlockSM,borderRadius:e.borderRadiusSM,buttonIconOnlyFontSize:e.onlyIconSizeSM});return Q0(n,`${e.componentCls}-sm`)},nA=e=>{const n=mr(e,{controlHeight:e.controlHeightLG,fontSize:e.contentFontSizeLG,lineHeight:e.contentLineHeightLG,buttonPaddingHorizontal:e.paddingInlineLG,buttonPaddingVertical:e.paddingBlockLG,borderRadius:e.borderRadiusLG,buttonIconOnlyFontSize:e.onlyIconSizeLG});return Q0(n,`${e.componentCls}-lg`)},tA=e=>{const{componentCls:n}=e;return{[n]:{[`&${n}-block`]:{width:"100%"}}}},rA=Ii("Button",e=>{const n=iw(e);return[ZE(n),JE(n),eA(n),nA(n),tA(n),YE(n),UE(n)]},aw,{unitless:{fontWeight:!0,contentLineHeight:!0,contentLineHeightSM:!0,contentLineHeightLG:!0}});function oA(e,n,t){const{focusElCls:r,focus:o,borderElCls:i}=t,a=i?"> *":"",l=["hover",o?"focus":null,"active"].filter(Boolean).map(s=>`&:${s} ${a}`).join(",");return{[`&-item:not(${n}-last-item)`]:{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal()},"&-item":Object.assign(Object.assign({[l]:{zIndex:2}},r?{[`&${r}`]:{zIndex:2}}:{}),{[`&[disabled] ${a}`]:{zIndex:0}})}}function iA(e,n,t){const{borderElCls:r}=t,o=r?`> ${r}`:"";return{[`&-item:not(${n}-first-item):not(${n}-last-item) ${o}`]:{borderRadius:0},[`&-item:not(${n}-last-item)${n}-first-item`]:{[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${n}-first-item)${n}-last-item`]:{[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function aA(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{focus:!0};const{componentCls:t}=e,r=`${t}-compact`;return{[r]:Object.assign(Object.assign({},oA(e,r,n)),iA(t,r,n))}}function lA(e,n){return{[`&-item:not(${n}-last-item)`]:{marginBottom:e.calc(e.lineWidth).mul(-1).equal()},"&-item":{"&:hover,&:focus,&:active":{zIndex:2},"&[disabled]":{zIndex:0}}}}function sA(e,n){return{[`&-item:not(${n}-first-item):not(${n}-last-item)`]:{borderRadius:0},[`&-item${n}-first-item:not(${n}-last-item)`]:{[`&, &${e}-sm, &${e}-lg`]:{borderEndEndRadius:0,borderEndStartRadius:0}},[`&-item${n}-last-item:not(${n}-first-item)`]:{[`&, &${e}-sm, &${e}-lg`]:{borderStartStartRadius:0,borderStartEndRadius:0}}}}function cA(e){const n=`${e.componentCls}-compact-vertical`;return{[n]:Object.assign(Object.assign({},lA(e,n)),sA(e.componentCls,n))}}const uA=e=>{const{componentCls:n,calc:t}=e;return{[n]:{[`&-compact-item${n}-primary`]:{[`&:not([disabled]) + ${n}-compact-item${n}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:t(e.lineWidth).mul(-1).equal(),insetInlineStart:t(e.lineWidth).mul(-1).equal(),display:"inline-block",width:e.lineWidth,height:`calc(100% + ${Ze(e.lineWidth)} * 2)`,backgroundColor:e.colorPrimaryHover,content:'""'}}},"&-compact-vertical-item":{[`&${n}-primary`]:{[`&:not([disabled]) + ${n}-compact-vertical-item${n}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:t(e.lineWidth).mul(-1).equal(),insetInlineStart:t(e.lineWidth).mul(-1).equal(),display:"inline-block",width:`calc(100% + ${Ze(e.lineWidth)} * 2)`,height:e.lineWidth,backgroundColor:e.colorPrimaryHover,content:'""'}}}}}}},dA=J9(["Button","compact"],e=>{const n=iw(e);return[aA(n),cA(n),uA(n)]},aw);var fA=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};function mA(e){if(typeof e=="object"&&e){let n=e==null?void 0:e.delay;return n=!Number.isNaN(n)&&typeof n=="number"?n:0,{loading:n<=0,delay:n}}return{loading:!!e,delay:0}}const hA=Pe.forwardRef((e,n)=>{var t,r,o;const{loading:i=!1,prefixCls:a,type:l,danger:s=!1,shape:c="default",size:d,styles:u,disabled:f,className:m,rootClassName:h,children:v,icon:k,iconPosition:g="start",ghost:b=!1,block:y=!1,htmlType:S="button",classNames:A,style:w={},autoInsertSpace:I}=e,R=fA(e,["loading","prefixCls","type","danger","shape","size","styles","disabled","className","rootClassName","children","icon","iconPosition","ghost","block","htmlType","classNames","style","autoInsertSpace"]),M=l||"default",{getPrefixCls:_,direction:D,button:H}=p.useContext(qn),j=(t=I??(H==null?void 0:H.autoInsertSpace))!==null&&t!==void 0?t:!0,B=_("btn",a),[V,$,O]=rA(B),P=p.useContext(fu),W=f??P,x=p.useContext(rw),G=p.useMemo(()=>mA(i),[i]),[Z,T]=p.useState(G.loading),[Q,ne]=p.useState(!1),te=ps(n,p.createRef()),Y=p.Children.count(v)===1&&!k&&!Ef(M);p.useEffect(()=>{let oe=null;G.delay>0?oe=setTimeout(()=>{oe=null,T(!0)},G.delay):T(G.loading);function je(){oe&&(clearTimeout(oe),oe=null)}return je},[G]),p.useEffect(()=>{if(!te||!te.current||!j)return;const oe=te.current.textContent;Y&&ph(oe)?Q||ne(!0):Q&&ne(!1)},[te]);const ye=oe=>{const{onClick:je}=e;if(Z||W){oe.preventDefault();return}je==null||je(oe)},{compactSize:ge,compactItemClassnames:Ce}=LE(B,D),se={large:"lg",small:"sm",middle:void 0},Ge=ME(oe=>{var je,C;return(C=(je=d??ge)!==null&&je!==void 0?je:x)!==null&&C!==void 0?C:oe}),Ve=Ge&&se[Ge]||"",Ae=Z?"loading":k,ae=so(R,["navigate"]),de=We(B,$,O,{[`${B}-${c}`]:c!=="default"&&c,[`${B}-${M}`]:M,[`${B}-${Ve}`]:Ve,[`${B}-icon-only`]:!v&&v!==0&&!!Ae,[`${B}-background-ghost`]:b&&!Ef(M),[`${B}-loading`]:Z,[`${B}-two-chinese-chars`]:Q&&j&&!Z,[`${B}-block`]:y,[`${B}-dangerous`]:s,[`${B}-rtl`]:D==="rtl",[`${B}-icon-end`]:g==="end"},Ce,m,h,H==null?void 0:H.className),xe=Object.assign(Object.assign({},H==null?void 0:H.style),w),Te=We(A==null?void 0:A.icon,(r=H==null?void 0:H.classNames)===null||r===void 0?void 0:r.icon),Oe=Object.assign(Object.assign({},(u==null?void 0:u.icon)||{}),((o=H==null?void 0:H.styles)===null||o===void 0?void 0:o.icon)||{}),Le=k&&!Z?Pe.createElement(ow,{prefixCls:B,className:Te,style:Oe},k):Pe.createElement(HE,{existIcon:!!k,prefixCls:B,loading:Z}),Qe=v||v===0?zE(v,Y&&j):null;if(ae.href!==void 0)return V(Pe.createElement("a",Object.assign({},ae,{className:We(de,{[`${B}-disabled`]:W}),href:W?void 0:ae.href,style:xe,onClick:ye,ref:te,tabIndex:W?-1:0}),Le,Qe));let Ie=Pe.createElement("button",Object.assign({},R,{type:S,className:de,style:xe,onClick:ye,disabled:W,ref:te}),Le,Qe,!!Ce&&Pe.createElement(dA,{key:"compact",prefixCls:B}));return Ef(M)||(Ie=Pe.createElement(NE,{component:"Button",disabled:Z},Ie)),V(Ie)}),pd=hA;pd.Group=BE;pd.__ANT_BUTTON=!0;var cw=p.createContext(null),l1=[];function pA(e,n){var t=p.useState(function(){if(!Yt())return null;var h=document.createElement("div");return h}),r=ve(t,1),o=r[0],i=p.useRef(!1),a=p.useContext(cw),l=p.useState(l1),s=ve(l,2),c=s[0],d=s[1],u=a||(i.current?void 0:function(h){d(function(v){var k=[h].concat(Ln(v));return k})});function f(){o.parentElement||document.body.appendChild(o),i.current=!0}function m(){var h;(h=o.parentElement)===null||h===void 0||h.removeChild(o),i.current=!1}return kt(function(){return e?a?a(f):f():m(),m},[e]),kt(function(){c.length&&(c.forEach(function(h){return h()}),d(l1))},[c]),[o,u]}function gA(e){var n="rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)),t=document.createElement("div");t.id=n;var r=t.style;r.position="absolute",r.left="0",r.top="0",r.width="100px",r.height="100px",r.overflow="scroll";var o,i;if(e){var a=getComputedStyle(e);r.scrollbarColor=a.scrollbarColor,r.scrollbarWidth=a.scrollbarWidth;var l=getComputedStyle(e,"::-webkit-scrollbar"),s=parseInt(l.width,10),c=parseInt(l.height,10);try{var d=s?"width: ".concat(l.width,";"):"",u=c?"height: ".concat(l.height,";"):"";eo(`
#`.concat(n,`::-webkit-scrollbar {
`).concat(d,`
`).concat(u,`
}`),n)}catch(h){console.error(h),o=s,i=c}}document.body.appendChild(t);var f=e&&o&&!isNaN(o)?o:t.offsetWidth-t.clientWidth,m=e&&i&&!isNaN(i)?i:t.offsetHeight-t.clientHeight;return document.body.removeChild(t),Kl(n),{width:f,height:m}}function bA(e){return typeof document>"u"||!e||!(e instanceof Element)?{width:0,height:0}:gA(e)}function vA(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var yA="rc-util-locker-".concat(Date.now()),s1=0;function wA(e){var n=!!e,t=p.useState(function(){return s1+=1,"".concat(yA,"_").concat(s1)}),r=ve(t,1),o=r[0];kt(function(){if(n){var i=bA(document.body).width,a=vA();eo(`
html body {
  overflow-y: hidden;
  `.concat(a?"width: calc(100% - ".concat(i,"px);"):"",`
}`),o)}else Kl(o);return function(){Kl(o)}},[n,o])}var kA=!1;function CA(e){return kA}var c1=function(n){return n===!1?!1:!Yt()||!n?null:typeof n=="string"?document.querySelector(n):typeof n=="function"?n():n},uw=p.forwardRef(function(e,n){var t=e.open,r=e.autoLock,o=e.getContainer;e.debug;var i=e.autoDestroy,a=i===void 0?!0:i,l=e.children,s=p.useState(t),c=ve(s,2),d=c[0],u=c[1],f=d||t;p.useEffect(function(){(a||t)&&u(t)},[t,a]);var m=p.useState(function(){return c1(o)}),h=ve(m,2),v=h[0],k=h[1];p.useEffect(function(){var D=c1(o);k(D??null)});var g=pA(f&&!v),b=ve(g,2),y=b[0],S=b[1],A=v??y;wA(r&&t&&Yt()&&(A===y||A===document.body));var w=null;if(l&&gs(l)&&n){var I=l;w=I.ref}var R=ad(w,n);if(!f||!Yt()||v===void 0)return null;var M=A===!1||CA(),_=l;return n&&(_=p.cloneElement(l,{ref:R})),p.createElement(cw.Provider,{value:S},M?_:Ia.createPortal(_,A))});function xA(){var e=pe({},ss);return e.useId}var u1=0,d1=xA();const SA=d1?function(n){var t=d1();return n||t}:function(n){var t=p.useState("ssr-id"),r=ve(t,2),o=r[0],i=r[1];return p.useEffect(function(){var a=u1;u1+=1,i("rc_unique_".concat(a))},[]),n||o},EA=e=>({[e.componentCls]:{[`${e.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}},[`${e.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}}}),AA=e=>({animationDuration:e,animationFillMode:"both"}),TA=e=>({animationDuration:e,animationFillMode:"both"}),dw=function(e,n,t,r){const i=(arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1)?"&":"";return{[`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]:Object.assign(Object.assign({},AA(r)),{animationPlayState:"paused"}),[`${i}${e}-leave`]:Object.assign(Object.assign({},TA(r)),{animationPlayState:"paused"}),[`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]:{animationName:n,animationPlayState:"running"},[`${i}${e}-leave${e}-leave-active`]:{animationName:t,animationPlayState:"running",pointerEvents:"none"}}},IA=new nt("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),_A=new nt("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),PA=new nt("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),OA=new nt("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),FA=new nt("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),RA=new nt("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),NA=new nt("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),MA=new nt("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),LA={"slide-up":{inKeyframes:IA,outKeyframes:_A},"slide-down":{inKeyframes:PA,outKeyframes:OA},"slide-left":{inKeyframes:FA,outKeyframes:RA},"slide-right":{inKeyframes:NA,outKeyframes:MA}},f1=(e,n)=>{const{antCls:t}=e,r=`${t}-${n}`,{inKeyframes:o,outKeyframes:i}=LA[n];return[dw(r,o,i,e.motionDurationMid),{[`
      ${r}-enter,
      ${r}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${r}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]},jA=new nt("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),DA=new nt("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),m1=new nt("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),h1=new nt("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),BA=new nt("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),$A=new nt("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),zA=new nt("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),HA=new nt("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}}),UA=new nt("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),ZA=new nt("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}}),WA=new nt("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),VA=new nt("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}}),XA={zoom:{inKeyframes:jA,outKeyframes:DA},"zoom-big":{inKeyframes:m1,outKeyframes:h1},"zoom-big-fast":{inKeyframes:m1,outKeyframes:h1},"zoom-left":{inKeyframes:zA,outKeyframes:HA},"zoom-right":{inKeyframes:UA,outKeyframes:ZA},"zoom-up":{inKeyframes:BA,outKeyframes:$A},"zoom-down":{inKeyframes:WA,outKeyframes:VA}},fw=(e,n)=>{const{antCls:t}=e,r=`${t}-${n}`,{inKeyframes:o,outKeyframes:i}=XA[n];return[dw(r,o,i,n==="zoom-big-fast"?e.motionDurationFast:e.motionDurationMid),{[`
        ${r}-enter,
        ${r}-appear
      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:e.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${r}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]},GA=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e==null?void 0:e.substr(0,4))};var qA=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],ji=void 0;function KA(e,n){var t=e.prefixCls,r=e.invalidate,o=e.item,i=e.renderItem,a=e.responsive,l=e.responsiveDisabled,s=e.registerSize,c=e.itemKey,d=e.className,u=e.style,f=e.children,m=e.display,h=e.order,v=e.component,k=v===void 0?"div":v,g=zn(e,qA),b=a&&!m;function y(R){s(c,R)}p.useEffect(function(){return function(){y(null)}},[]);var S=i&&o!==ji?i(o):f,A;r||(A={opacity:b?0:1,height:b?0:ji,overflowY:b?"hidden":ji,order:a?h:ji,pointerEvents:b?"none":ji,position:b?"absolute":ji});var w={};b&&(w["aria-hidden"]=!0);var I=p.createElement(k,gn({className:We(!r&&t,d),style:pe(pe({},A),u)},w,g,{ref:n}),S);return a&&(I=p.createElement(ki,{onResize:function(M){var _=M.offsetWidth;y(_)},disabled:l},I)),I}var Tl=p.forwardRef(KA);Tl.displayName="Item";function QA(e){if(typeof MessageChannel>"u")mt(e);else{var n=new MessageChannel;n.port1.onmessage=function(){return e()},n.port2.postMessage(void 0)}}function YA(){var e=p.useRef(null),n=function(r){e.current||(e.current=[],QA(function(){Ia.unstable_batchedUpdates(function(){e.current.forEach(function(o){o()}),e.current=null})})),e.current.push(r)};return n}function nl(e,n){var t=p.useState(n),r=ve(t,2),o=r[0],i=r[1],a=at(function(l){e(function(){i(l)})});return[o,a]}var bu=Pe.createContext(null),JA=["component"],eT=["className"],nT=["className"],tT=function(n,t){var r=p.useContext(bu);if(!r){var o=n.component,i=o===void 0?"div":o,a=zn(n,JA);return p.createElement(i,gn({},a,{ref:t}))}var l=r.className,s=zn(r,eT),c=n.className,d=zn(n,nT);return p.createElement(bu.Provider,{value:null},p.createElement(Tl,gn({ref:t,className:We(l,c)},s,d)))},mw=p.forwardRef(tT);mw.displayName="RawItem";var rT=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],hw="responsive",pw="invalidate";function oT(e){return"+ ".concat(e.length," ...")}function iT(e,n){var t=e.prefixCls,r=t===void 0?"rc-overflow":t,o=e.data,i=o===void 0?[]:o,a=e.renderItem,l=e.renderRawItem,s=e.itemKey,c=e.itemWidth,d=c===void 0?10:c,u=e.ssr,f=e.style,m=e.className,h=e.maxCount,v=e.renderRest,k=e.renderRawRest,g=e.suffix,b=e.component,y=b===void 0?"div":b,S=e.itemComponent,A=e.onVisibleChange,w=zn(e,rT),I=u==="full",R=YA(),M=nl(R,null),_=ve(M,2),D=_[0],H=_[1],j=D||0,B=nl(R,new Map),V=ve(B,2),$=V[0],O=V[1],P=nl(R,0),W=ve(P,2),x=W[0],G=W[1],Z=nl(R,0),T=ve(Z,2),Q=T[0],ne=T[1],N=nl(R,0),te=ve(N,2),Y=te[0],ye=te[1],ge=p.useState(null),Ce=ve(ge,2),se=Ce[0],Ge=Ce[1],Ve=p.useState(null),Ae=ve(Ve,2),ae=Ae[0],de=Ae[1],xe=p.useMemo(function(){return ae===null&&I?Number.MAX_SAFE_INTEGER:ae||0},[ae,D]),Te=p.useState(!1),Oe=ve(Te,2),Le=Oe[0],Qe=Oe[1],Ie="".concat(r,"-item"),oe=Math.max(x,Q),je=h===hw,C=i.length&&je,E=h===pw,F=C||typeof h=="number"&&i.length>h,z=p.useMemo(function(){var De=i;return C?D===null&&I?De=i:De=i.slice(0,Math.min(i.length,j/d)):typeof h=="number"&&(De=i.slice(0,h)),De},[i,d,D,h,C]),q=p.useMemo(function(){return C?i.slice(xe+1):i.slice(z.length)},[i,z,C,xe]),K=p.useCallback(function(De,Se){var Ne;return typeof s=="function"?s(De):(Ne=s&&(De==null?void 0:De[s]))!==null&&Ne!==void 0?Ne:Se},[s]),re=p.useCallback(a||function(De){return De},[a]);function ie(De,Se,Ne){ae===De&&(Se===void 0||Se===se)||(de(De),Ne||(Qe(De<i.length-1),A==null||A(De)),Se!==void 0&&Ge(Se))}function he(De,Se){H(Se.clientWidth)}function ce(De,Se){O(function(Ne){var en=new Map(Ne);return Se===null?en.delete(De):en.set(De,Se),en})}function we(De,Se){ne(Se),G(Q)}function ze(De,Se){ye(Se)}function Ee(De){return $.get(K(z[De],De))}kt(function(){if(j&&typeof oe=="number"&&z){var De=Y,Se=z.length,Ne=Se-1;if(!Se){ie(0,null);return}for(var en=0;en<Se;en+=1){var L=Ee(en);if(I&&(L=L||0),L===void 0){ie(en-1,void 0,!0);break}if(De+=L,Ne===0&&De<=j||en===Ne-1&&De+Ee(Ne)<=j){ie(Ne,null);break}else if(De+oe>j){ie(en-1,De-L-Y+Q);break}}g&&Ee(0)+Y>j&&Ge(null)}},[j,$,Q,Y,K,z]);var Ye=Le&&!!q.length,rn={};se!==null&&C&&(rn={position:"absolute",left:se,top:0});var Xe={prefixCls:Ie,responsive:C,component:S,invalidate:E},sn=l?function(De,Se){var Ne=K(De,Se);return p.createElement(bu.Provider,{key:Ne,value:pe(pe({},Xe),{},{order:Se,item:De,itemKey:Ne,registerSize:ce,display:Se<=xe})},l(De,Se))}:function(De,Se){var Ne=K(De,Se);return p.createElement(Tl,gn({},Xe,{order:Se,key:Ne,item:De,renderItem:re,itemKey:Ne,registerSize:ce,display:Se<=xe}))},an,Je={order:Ye?xe:Number.MAX_SAFE_INTEGER,className:"".concat(Ie,"-rest"),registerSize:we,display:Ye};if(k)k&&(an=p.createElement(bu.Provider,{value:pe(pe({},Xe),Je)},k(q)));else{var _e=v||oT;an=p.createElement(Tl,gn({},Xe,Je),typeof _e=="function"?_e(q):_e)}var qe=p.createElement(y,gn({className:We(!E&&r,m),style:f,ref:n},w),z.map(sn),F?an:null,g&&p.createElement(Tl,gn({},Xe,{responsive:je,responsiveDisabled:!C,order:xe,className:"".concat(Ie,"-suffix"),registerSize:ze,display:!0,style:rn}),g));return je&&(qe=p.createElement(ki,{onResize:he,disabled:!C},qe)),qe}var no=p.forwardRef(iT);no.displayName="Overflow";no.Item=mw;no.RESPONSIVE=hw;no.INVALIDATE=pw;function aT(e){var n=e.prefixCls,t=e.align,r=e.arrow,o=e.arrowPos,i=r||{},a=i.className,l=i.content,s=o.x,c=s===void 0?0:s,d=o.y,u=d===void 0?0:d,f=p.useRef();if(!t||!t.points)return null;var m={position:"absolute"};if(t.autoArrow!==!1){var h=t.points[0],v=t.points[1],k=h[0],g=h[1],b=v[0],y=v[1];k===b||!["t","b"].includes(k)?m.top=u:k==="t"?m.top=0:m.bottom=0,g===y||!["l","r"].includes(g)?m.left=c:g==="l"?m.left=0:m.right=0}return p.createElement("div",{ref:f,className:We("".concat(n,"-arrow"),a),style:m},l)}function lT(e){var n=e.prefixCls,t=e.open,r=e.zIndex,o=e.mask,i=e.motion;return o?p.createElement(Fa,gn({},i,{motionAppear:!0,visible:t,removeOnLeave:!0}),function(a){var l=a.className;return p.createElement("div",{style:{zIndex:r},className:We("".concat(n,"-mask"),l)})}):null}var sT=p.memo(function(e){var n=e.children;return n},function(e,n){return n.cache}),cT=p.forwardRef(function(e,n){var t=e.popup,r=e.className,o=e.prefixCls,i=e.style,a=e.target,l=e.onVisibleChanged,s=e.open,c=e.keepDom,d=e.fresh,u=e.onClick,f=e.mask,m=e.arrow,h=e.arrowPos,v=e.align,k=e.motion,g=e.maskMotion,b=e.forceRender,y=e.getPopupContainer,S=e.autoDestroy,A=e.portal,w=e.zIndex,I=e.onMouseEnter,R=e.onMouseLeave,M=e.onPointerEnter,_=e.ready,D=e.offsetX,H=e.offsetY,j=e.offsetR,B=e.offsetB,V=e.onAlign,$=e.onPrepare,O=e.stretch,P=e.targetWidth,W=e.targetHeight,x=typeof t=="function"?t():t,G=s||c,Z=(y==null?void 0:y.length)>0,T=p.useState(!y||!Z),Q=ve(T,2),ne=Q[0],N=Q[1];if(kt(function(){!ne&&Z&&a&&N(!0)},[ne,Z,a]),!ne)return null;var te="auto",Y={left:"-1000vw",top:"-1000vh",right:te,bottom:te};if(_||!s){var ye,ge=v.points,Ce=v.dynamicInset||((ye=v._experimental)===null||ye===void 0?void 0:ye.dynamicInset),se=Ce&&ge[0][1]==="r",Ge=Ce&&ge[0][0]==="b";se?(Y.right=j,Y.left=te):(Y.left=D,Y.right=te),Ge?(Y.bottom=B,Y.top=te):(Y.top=H,Y.bottom=te)}var Ve={};return O&&(O.includes("height")&&W?Ve.height=W:O.includes("minHeight")&&W&&(Ve.minHeight=W),O.includes("width")&&P?Ve.width=P:O.includes("minWidth")&&P&&(Ve.minWidth=P)),s||(Ve.pointerEvents="none"),p.createElement(A,{open:b||G,getContainer:y&&function(){return y(a)},autoDestroy:S},p.createElement(lT,{prefixCls:o,open:s,zIndex:w,mask:f,motion:g}),p.createElement(ki,{onResize:V,disabled:!s},function(Ae){return p.createElement(Fa,gn({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:b,leavedClassName:"".concat(o,"-hidden")},k,{onAppearPrepare:$,onEnterPrepare:$,visible:s,onVisibleChanged:function(de){var xe;k==null||(xe=k.onVisibleChanged)===null||xe===void 0||xe.call(k,de),l(de)}}),function(ae,de){var xe=ae.className,Te=ae.style,Oe=We(o,xe,r);return p.createElement("div",{ref:ps(Ae,n,de),className:Oe,style:pe(pe(pe(pe({"--arrow-x":"".concat(h.x||0,"px"),"--arrow-y":"".concat(h.y||0,"px")},Y),Ve),Te),{},{boxSizing:"border-box",zIndex:w},i),onMouseEnter:I,onMouseLeave:R,onPointerEnter:M,onClick:u},m&&p.createElement(aT,{prefixCls:o,arrow:m,arrowPos:h,align:v}),p.createElement(sT,{cache:!s&&!d},x))})}))}),uT=p.forwardRef(function(e,n){var t=e.children,r=e.getTriggerDOMNode,o=gs(t),i=p.useCallback(function(l){L0(n,r?r(l):l)},[r]),a=ad(i,t.ref);return o?p.cloneElement(t,{ref:a}):t}),p1=p.createContext(null);function g1(e){return e?Array.isArray(e)?e:[e]:[]}function dT(e,n,t,r){return p.useMemo(function(){var o=g1(t??n),i=g1(r??n),a=new Set(o),l=new Set(i);return e&&(a.has("hover")&&(a.delete("hover"),a.add("click")),l.has("hover")&&(l.delete("hover"),l.add("click"))),[a,l]},[e,n,t,r])}function fT(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0;return t?e[0]===n[0]:e[0]===n[0]&&e[1]===n[1]}function mT(e,n,t,r){for(var o=t.points,i=Object.keys(e),a=0;a<i.length;a+=1){var l,s=i[a];if(fT((l=e[s])===null||l===void 0?void 0:l.points,o,r))return"".concat(n,"-placement-").concat(s)}return""}function b1(e,n,t,r){return n||(t?{motionName:"".concat(e,"-").concat(t)}:r?{motionName:r}:null)}function vs(e){return e.ownerDocument.defaultView}function gh(e){for(var n=[],t=e==null?void 0:e.parentElement,r=["hidden","scroll","clip","auto"];t;){var o=vs(t).getComputedStyle(t),i=o.overflowX,a=o.overflowY,l=o.overflow;[i,a,l].some(function(s){return r.includes(s)})&&n.push(t),t=t.parentElement}return n}function rs(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Number.isNaN(e)?n:e}function tl(e){return rs(parseFloat(e),0)}function v1(e,n){var t=pe({},e);return(n||[]).forEach(function(r){if(!(r instanceof HTMLBodyElement||r instanceof HTMLHtmlElement)){var o=vs(r).getComputedStyle(r),i=o.overflow,a=o.overflowClipMargin,l=o.borderTopWidth,s=o.borderBottomWidth,c=o.borderLeftWidth,d=o.borderRightWidth,u=r.getBoundingClientRect(),f=r.offsetHeight,m=r.clientHeight,h=r.offsetWidth,v=r.clientWidth,k=tl(l),g=tl(s),b=tl(c),y=tl(d),S=rs(Math.round(u.width/h*1e3)/1e3),A=rs(Math.round(u.height/f*1e3)/1e3),w=(h-v-b-y)*S,I=(f-m-k-g)*A,R=k*A,M=g*A,_=b*S,D=y*S,H=0,j=0;if(i==="clip"){var B=tl(a);H=B*S,j=B*A}var V=u.x+_-H,$=u.y+R-j,O=V+u.width+2*H-_-D-w,P=$+u.height+2*j-R-M-I;t.left=Math.max(t.left,V),t.top=Math.max(t.top,$),t.right=Math.min(t.right,O),t.bottom=Math.min(t.bottom,P)}}),t}function y1(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t="".concat(n),r=t.match(/^(.*)\%$/);return r?e*(parseFloat(r[1])/100):parseFloat(t)}function w1(e,n){var t=n||[],r=ve(t,2),o=r[0],i=r[1];return[y1(e.width,o),y1(e.height,i)]}function k1(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return[e[0],e[1]]}function Di(e,n){var t=n[0],r=n[1],o,i;return t==="t"?i=e.y:t==="b"?i=e.y+e.height:i=e.y+e.height/2,r==="l"?o=e.x:r==="r"?o=e.x+e.width:o=e.x+e.width/2,{x:o,y:i}}function ho(e,n){var t={t:"b",b:"t",l:"r",r:"l"};return e.map(function(r,o){return o===n?t[r]||"c":r}).join("")}function hT(e,n,t,r,o,i,a){var l=p.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:o[r]||{}}),s=ve(l,2),c=s[0],d=s[1],u=p.useRef(0),f=p.useMemo(function(){return n?gh(n):[]},[n]),m=p.useRef({}),h=function(){m.current={}};e||h();var v=at(function(){if(n&&t&&e){let Kn=function(Ss,Wr){var Go=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Oe,Ri=x.x+Ss,Ha=x.y+Wr,Ad=Ri+ye,Td=Ha+Y,Id=Math.max(Ri,Go.left),_d=Math.max(Ha,Go.top),Me=Math.min(Ad,Go.right),nn=Math.min(Td,Go.bottom);return Math.max(0,(Me-Id)*(nn-_d))},za=function(){le=x.y+_e,He=le+Y,fe=x.x+Je,$e=fe+ye};var fo=Kn,Fi=za,b,y,S=n,A=S.ownerDocument,w=vs(S),I=w.getComputedStyle(S),R=I.width,M=I.height,_=I.position,D=S.style.left,H=S.style.top,j=S.style.right,B=S.style.bottom,V=S.style.overflow,$=pe(pe({},o[r]),i),O=A.createElement("div");(b=S.parentElement)===null||b===void 0||b.appendChild(O),O.style.left="".concat(S.offsetLeft,"px"),O.style.top="".concat(S.offsetTop,"px"),O.style.position=_,O.style.height="".concat(S.offsetHeight,"px"),O.style.width="".concat(S.offsetWidth,"px"),S.style.left="0",S.style.top="0",S.style.right="auto",S.style.bottom="auto",S.style.overflow="hidden";var P;if(Array.isArray(t))P={x:t[0],y:t[1],width:0,height:0};else{var W=t.getBoundingClientRect();P={x:W.x,y:W.y,width:W.width,height:W.height}}var x=S.getBoundingClientRect(),G=A.documentElement,Z=G.clientWidth,T=G.clientHeight,Q=G.scrollWidth,ne=G.scrollHeight,N=G.scrollTop,te=G.scrollLeft,Y=x.height,ye=x.width,ge=P.height,Ce=P.width,se={left:0,top:0,right:Z,bottom:T},Ge={left:-te,top:-N,right:Q-te,bottom:ne-N},Ve=$.htmlRegion,Ae="visible",ae="visibleFirst";Ve!=="scroll"&&Ve!==ae&&(Ve=Ae);var de=Ve===ae,xe=v1(Ge,f),Te=v1(se,f),Oe=Ve===Ae?Te:xe,Le=de?Te:Oe;S.style.left="auto",S.style.top="auto",S.style.right="0",S.style.bottom="0";var Qe=S.getBoundingClientRect();S.style.left=D,S.style.top=H,S.style.right=j,S.style.bottom=B,S.style.overflow=V,(y=S.parentElement)===null||y===void 0||y.removeChild(O);var Ie=rs(Math.round(ye/parseFloat(R)*1e3)/1e3),oe=rs(Math.round(Y/parseFloat(M)*1e3)/1e3);if(Ie===0||oe===0||ql(t)&&!q0(t))return;var je=$.offset,C=$.targetOffset,E=w1(x,je),F=ve(E,2),z=F[0],q=F[1],K=w1(P,C),re=ve(K,2),ie=re[0],he=re[1];P.x-=ie,P.y-=he;var ce=$.points||[],we=ve(ce,2),ze=we[0],Ee=we[1],Ye=k1(Ee),rn=k1(ze),Xe=Di(P,Ye),sn=Di(x,rn),an=pe({},$),Je=Xe.x-sn.x+z,_e=Xe.y-sn.y+q,qe=Kn(Je,_e),De=Kn(Je,_e,Te),Se=Di(P,["t","l"]),Ne=Di(x,["t","l"]),en=Di(P,["b","r"]),L=Di(x,["b","r"]),U=$.overflow||{},X=U.adjustX,ee=U.adjustY,be=U.shiftX,ke=U.shiftY,Fe=function(Wr){return typeof Wr=="boolean"?Wr:Wr>=0},le,He,fe,$e;za();var cn=Fe(ee),ln=rn[0]===Ye[0];if(cn&&rn[0]==="t"&&(He>Le.bottom||m.current.bt)){var un=_e;ln?un-=Y-ge:un=Se.y-L.y-q;var dn=Kn(Je,un),In=Kn(Je,un,Te);dn>qe||dn===qe&&(!de||In>=De)?(m.current.bt=!0,_e=un,q=-q,an.points=[ho(rn,0),ho(Ye,0)]):m.current.bt=!1}if(cn&&rn[0]==="b"&&(le<Le.top||m.current.tb)){var kn=_e;ln?kn+=Y-ge:kn=en.y-Ne.y-q;var Un=Kn(Je,kn),Ft=Kn(Je,kn,Te);Un>qe||Un===qe&&(!de||Ft>=De)?(m.current.tb=!0,_e=kn,q=-q,an.points=[ho(rn,0),ho(Ye,0)]):m.current.tb=!1}var $t=Fe(X),zt=rn[1]===Ye[1];if($t&&rn[1]==="l"&&($e>Le.right||m.current.rl)){var st=Je;zt?st-=ye-Ce:st=Se.x-L.x-z;var Xn=Kn(st,_e),nr=Kn(st,_e,Te);Xn>qe||Xn===qe&&(!de||nr>=De)?(m.current.rl=!0,Je=st,z=-z,an.points=[ho(rn,1),ho(Ye,1)]):m.current.rl=!1}if($t&&rn[1]==="r"&&(fe<Le.left||m.current.lr)){var Rt=Je;zt?Rt+=ye-Ce:Rt=en.x-Ne.x-z;var vr=Kn(Rt,_e),tn=Kn(Rt,_e,Te);vr>qe||vr===qe&&(!de||tn>=De)?(m.current.lr=!0,Je=Rt,z=-z,an.points=[ho(rn,1),ho(Ye,1)]):m.current.lr=!1}za();var pn=be===!0?0:be;typeof pn=="number"&&(fe<Te.left&&(Je-=fe-Te.left-z,P.x+Ce<Te.left+pn&&(Je+=P.x-Te.left+Ce-pn)),$e>Te.right&&(Je-=$e-Te.right-z,P.x>Te.right-pn&&(Je+=P.x-Te.right+pn)));var Sn=ke===!0?0:ke;typeof Sn=="number"&&(le<Te.top&&(_e-=le-Te.top-q,P.y+ge<Te.top+Sn&&(_e+=P.y-Te.top+ge-Sn)),He>Te.bottom&&(_e-=He-Te.bottom-q,P.y>Te.bottom-Sn&&(_e+=P.y-Te.bottom+Sn)));var bn=x.x+Je,gt=bn+ye,Ht=x.y+_e,tr=Ht+Y,Wo=P.x,uo=Wo+Ce,yr=P.y,Ba=yr+ge,$a=Math.max(bn,Wo),_n=Math.min(gt,uo),yn=($a+_n)/2,En=yn-bn,ct=Math.max(Ht,yr),ut=Math.min(tr,Ba),Ur=(ct+ut)/2,Vo=Ur-Ht;a==null||a(n,an);var Xo=Qe.right-x.x-(Je+x.width),Zr=Qe.bottom-x.y-(_e+x.height);Ie===1&&(Je=Math.round(Je),Xo=Math.round(Xo)),oe===1&&(_e=Math.round(_e),Zr=Math.round(Zr));var Oi={ready:!0,offsetX:Je/Ie,offsetY:_e/oe,offsetR:Xo/Ie,offsetB:Zr/oe,arrowX:En/Ie,arrowY:Vo/oe,scaleX:Ie,scaleY:oe,align:an};d(Oi)}}),k=function(){u.current+=1;var y=u.current;Promise.resolve().then(function(){u.current===y&&v()})},g=function(){d(function(y){return pe(pe({},y),{},{ready:!1})})};return kt(g,[r]),kt(function(){e||g()},[e]),[c.ready,c.offsetX,c.offsetY,c.offsetR,c.offsetB,c.arrowX,c.arrowY,c.scaleX,c.scaleY,c.align,k]}function pT(e,n,t,r,o){kt(function(){if(e&&n&&t){let f=function(){r(),o()};var u=f,i=n,a=t,l=gh(i),s=gh(a),c=vs(a),d=new Set([c].concat(Ln(l),Ln(s)));return d.forEach(function(m){m.addEventListener("scroll",f,{passive:!0})}),c.addEventListener("resize",f,{passive:!0}),r(),function(){d.forEach(function(m){m.removeEventListener("scroll",f),c.removeEventListener("resize",f)})}}},[e,n,t])}function gT(e,n,t,r,o,i,a,l){var s=p.useRef(e);s.current=e,p.useEffect(function(){if(n&&r&&(!o||i)){var c=function(m){var h=m.target;s.current&&!a(h)&&l(!1)},d=vs(r);d.addEventListener("mousedown",c,!0),d.addEventListener("contextmenu",c,!0);var u=hu(t);return u&&(u.addEventListener("mousedown",c,!0),u.addEventListener("contextmenu",c,!0)),function(){d.removeEventListener("mousedown",c,!0),d.removeEventListener("contextmenu",c,!0),u&&(u.removeEventListener("mousedown",c,!0),u.removeEventListener("contextmenu",c,!0))}}},[n,t,r,o,i])}var bT=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];function vT(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:uw,n=p.forwardRef(function(t,r){var o=t.prefixCls,i=o===void 0?"rc-trigger-popup":o,a=t.children,l=t.action,s=l===void 0?"hover":l,c=t.showAction,d=t.hideAction,u=t.popupVisible,f=t.defaultPopupVisible,m=t.onPopupVisibleChange,h=t.afterPopupVisibleChange,v=t.mouseEnterDelay,k=t.mouseLeaveDelay,g=k===void 0?.1:k,b=t.focusDelay,y=t.blurDelay,S=t.mask,A=t.maskClosable,w=A===void 0?!0:A,I=t.getPopupContainer,R=t.forceRender,M=t.autoDestroy,_=t.destroyPopupOnHide,D=t.popup,H=t.popupClassName,j=t.popupStyle,B=t.popupPlacement,V=t.builtinPlacements,$=V===void 0?{}:V,O=t.popupAlign,P=t.zIndex,W=t.stretch,x=t.getPopupClassNameFromAlign,G=t.fresh,Z=t.alignPoint,T=t.onPopupClick,Q=t.onPopupAlign,ne=t.arrow,N=t.popupMotion,te=t.maskMotion,Y=t.popupTransitionName,ye=t.popupAnimation,ge=t.maskTransitionName,Ce=t.maskAnimation,se=t.className,Ge=t.getTriggerDOMNode,Ve=zn(t,bT),Ae=M||_||!1,ae=p.useState(!1),de=ve(ae,2),xe=de[0],Te=de[1];kt(function(){Te(GA())},[]);var Oe=p.useRef({}),Le=p.useContext(p1),Qe=p.useMemo(function(){return{registerSubPopup:function(nn,Zn){Oe.current[nn]=Zn,Le==null||Le.registerSubPopup(nn,Zn)}}},[Le]),Ie=SA(),oe=p.useState(null),je=ve(oe,2),C=je[0],E=je[1],F=p.useRef(null),z=at(function(Me){F.current=Me,ql(Me)&&C!==Me&&E(Me),Le==null||Le.registerSubPopup(Ie,Me)}),q=p.useState(null),K=ve(q,2),re=K[0],ie=K[1],he=p.useRef(null),ce=at(function(Me){ql(Me)&&re!==Me&&(ie(Me),he.current=Me)}),we=p.Children.only(a),ze=(we==null?void 0:we.props)||{},Ee={},Ye=at(function(Me){var nn,Zn,tt=re;return(tt==null?void 0:tt.contains(Me))||((nn=hu(tt))===null||nn===void 0?void 0:nn.host)===Me||Me===tt||(C==null?void 0:C.contains(Me))||((Zn=hu(C))===null||Zn===void 0?void 0:Zn.host)===Me||Me===C||Object.values(Oe.current).some(function(Wn){return(Wn==null?void 0:Wn.contains(Me))||Me===Wn})}),rn=b1(i,N,ye,Y),Xe=b1(i,te,Ce,ge),sn=p.useState(f||!1),an=ve(sn,2),Je=an[0],_e=an[1],qe=u??Je,De=at(function(Me){u===void 0&&_e(Me)});kt(function(){_e(u||!1)},[u]);var Se=p.useRef(qe);Se.current=qe;var Ne=p.useRef([]);Ne.current=[];var en=at(function(Me){var nn;De(Me),((nn=Ne.current[Ne.current.length-1])!==null&&nn!==void 0?nn:qe)!==Me&&(Ne.current.push(Me),m==null||m(Me))}),L=p.useRef(),U=function(){clearTimeout(L.current)},X=function(nn){var Zn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;U(),Zn===0?en(nn):L.current=setTimeout(function(){en(nn)},Zn*1e3)};p.useEffect(function(){return U},[]);var ee=p.useState(!1),be=ve(ee,2),ke=be[0],Fe=be[1];kt(function(Me){(!Me||qe)&&Fe(!0)},[qe]);var le=p.useState(null),He=ve(le,2),fe=He[0],$e=He[1],cn=p.useState([0,0]),ln=ve(cn,2),un=ln[0],dn=ln[1],In=function(nn){dn([nn.clientX,nn.clientY])},kn=hT(qe,C,Z?un:re,B,$,O,Q),Un=ve(kn,11),Ft=Un[0],$t=Un[1],zt=Un[2],st=Un[3],Xn=Un[4],nr=Un[5],Rt=Un[6],vr=Un[7],tn=Un[8],pn=Un[9],Sn=Un[10],bn=dT(xe,s,c,d),gt=ve(bn,2),Ht=gt[0],tr=gt[1],Wo=Ht.has("click"),uo=tr.has("click")||tr.has("contextMenu"),yr=at(function(){ke||Sn()}),Ba=function(){Se.current&&Z&&uo&&X(!1)};pT(qe,re,C,yr,Ba),kt(function(){yr()},[un,B]),kt(function(){qe&&!($!=null&&$[B])&&yr()},[JSON.stringify(O)]);var $a=p.useMemo(function(){var Me=mT($,i,pn,Z);return We(Me,x==null?void 0:x(pn))},[pn,x,$,i,Z]);p.useImperativeHandle(r,function(){return{nativeElement:he.current,popupElement:F.current,forceAlign:yr}});var _n=p.useState(0),yn=ve(_n,2),En=yn[0],ct=yn[1],ut=p.useState(0),Ur=ve(ut,2),Vo=Ur[0],Xo=Ur[1],Zr=function(){if(W&&re){var nn=re.getBoundingClientRect();ct(nn.width),Xo(nn.height)}},Oi=function(){Zr(),yr()},fo=function(nn){Fe(!1),Sn(),h==null||h(nn)},Fi=function(){return new Promise(function(nn){Zr(),$e(function(){return nn})})};kt(function(){fe&&(Sn(),fe(),$e(null))},[fe]);function Kn(Me,nn,Zn,tt){Ee[Me]=function(Wn){var Es;tt==null||tt(Wn),X(nn,Zn);for(var Pd=arguments.length,A2=new Array(Pd>1?Pd-1:0),As=1;As<Pd;As++)A2[As-1]=arguments[As];(Es=ze[Me])===null||Es===void 0||Es.call.apply(Es,[ze,Wn].concat(A2))}}(Wo||uo)&&(Ee.onClick=function(Me){var nn;Se.current&&uo?X(!1):!Se.current&&Wo&&(In(Me),X(!0));for(var Zn=arguments.length,tt=new Array(Zn>1?Zn-1:0),Wn=1;Wn<Zn;Wn++)tt[Wn-1]=arguments[Wn];(nn=ze.onClick)===null||nn===void 0||nn.call.apply(nn,[ze,Me].concat(tt))}),gT(qe,uo,re,C,S,w,Ye,X);var za=Ht.has("hover"),Ss=tr.has("hover"),Wr,Go;za&&(Kn("onMouseEnter",!0,v,function(Me){In(Me)}),Kn("onPointerEnter",!0,v,function(Me){In(Me)}),Wr=function(nn){(qe||ke)&&C!==null&&C!==void 0&&C.contains(nn.target)&&X(!0,v)},Z&&(Ee.onMouseMove=function(Me){var nn;(nn=ze.onMouseMove)===null||nn===void 0||nn.call(ze,Me)})),Ss&&(Kn("onMouseLeave",!1,g),Kn("onPointerLeave",!1,g),Go=function(){X(!1,g)}),Ht.has("focus")&&Kn("onFocus",!0,b),tr.has("focus")&&Kn("onBlur",!1,y),Ht.has("contextMenu")&&(Ee.onContextMenu=function(Me){var nn;Se.current&&tr.has("contextMenu")?X(!1):(In(Me),X(!0)),Me.preventDefault();for(var Zn=arguments.length,tt=new Array(Zn>1?Zn-1:0),Wn=1;Wn<Zn;Wn++)tt[Wn-1]=arguments[Wn];(nn=ze.onContextMenu)===null||nn===void 0||nn.call.apply(nn,[ze,Me].concat(tt))}),se&&(Ee.className=We(ze.className,se));var Ri=pe(pe({},ze),Ee),Ha={},Ad=["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"];Ad.forEach(function(Me){Ve[Me]&&(Ha[Me]=function(){for(var nn,Zn=arguments.length,tt=new Array(Zn),Wn=0;Wn<Zn;Wn++)tt[Wn]=arguments[Wn];(nn=Ri[Me])===null||nn===void 0||nn.call.apply(nn,[Ri].concat(tt)),Ve[Me].apply(Ve,tt)})});var Td=p.cloneElement(we,pe(pe({},Ri),Ha)),Id={x:nr,y:Rt},_d=ne?pe({},ne!==!0?ne:{}):null;return p.createElement(p.Fragment,null,p.createElement(ki,{disabled:!qe,ref:ce,onResize:Oi},p.createElement(uT,{getTriggerDOMNode:Ge},Td)),p.createElement(p1.Provider,{value:Qe},p.createElement(cT,{portal:e,ref:z,prefixCls:i,popup:D,className:We(H,$a),style:j,target:re,onMouseEnter:Wr,onMouseLeave:Go,onPointerEnter:Wr,zIndex:P,open:qe,keepDom:ke,fresh:G,onClick:T,mask:S,motion:rn,maskMotion:Xe,onVisibleChanged:fo,onPrepare:Fi,forceRender:R,autoDestroy:Ae,getPopupContainer:I,align:pn,arrow:_d,arrowPos:Id,ready:Ft,offsetX:$t,offsetY:zt,offsetR:st,offsetB:Xn,onAlign:yr,stretch:W,targetWidth:En/vr,targetHeight:Vo/tn})))});return n}const gw=vT(uw);function bw(e){var n=e.children,t=e.prefixCls,r=e.id,o=e.overlayInnerStyle,i=e.className,a=e.style;return p.createElement("div",{className:We("".concat(t,"-content"),i),style:a},p.createElement("div",{className:"".concat(t,"-inner"),id:r,role:"tooltip",style:o},typeof n=="function"?n():n))}var Bi={shiftX:64,adjustY:1},$i={adjustX:1,shiftY:!0},rr=[0,0],yT={left:{points:["cr","cl"],overflow:$i,offset:[-4,0],targetOffset:rr},right:{points:["cl","cr"],overflow:$i,offset:[4,0],targetOffset:rr},top:{points:["bc","tc"],overflow:Bi,offset:[0,-4],targetOffset:rr},bottom:{points:["tc","bc"],overflow:Bi,offset:[0,4],targetOffset:rr},topLeft:{points:["bl","tl"],overflow:Bi,offset:[0,-4],targetOffset:rr},leftTop:{points:["tr","tl"],overflow:$i,offset:[-4,0],targetOffset:rr},topRight:{points:["br","tr"],overflow:Bi,offset:[0,-4],targetOffset:rr},rightTop:{points:["tl","tr"],overflow:$i,offset:[4,0],targetOffset:rr},bottomRight:{points:["tr","br"],overflow:Bi,offset:[0,4],targetOffset:rr},rightBottom:{points:["bl","br"],overflow:$i,offset:[4,0],targetOffset:rr},bottomLeft:{points:["tl","bl"],overflow:Bi,offset:[0,4],targetOffset:rr},leftBottom:{points:["br","bl"],overflow:$i,offset:[-4,0],targetOffset:rr}},wT=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],kT=function(n,t){var r=n.overlayClassName,o=n.trigger,i=o===void 0?["hover"]:o,a=n.mouseEnterDelay,l=a===void 0?0:a,s=n.mouseLeaveDelay,c=s===void 0?.1:s,d=n.overlayStyle,u=n.prefixCls,f=u===void 0?"rc-tooltip":u,m=n.children,h=n.onVisibleChange,v=n.afterVisibleChange,k=n.transitionName,g=n.animation,b=n.motion,y=n.placement,S=y===void 0?"right":y,A=n.align,w=A===void 0?{}:A,I=n.destroyTooltipOnHide,R=I===void 0?!1:I,M=n.defaultVisible,_=n.getTooltipContainer,D=n.overlayInnerStyle;n.arrowContent;var H=n.overlay,j=n.id,B=n.showArrow,V=B===void 0?!0:B,$=zn(n,wT),O=p.useRef(null);p.useImperativeHandle(t,function(){return O.current});var P=pe({},$);"visible"in n&&(P.popupVisible=n.visible);var W=function(){return p.createElement(bw,{key:"content",prefixCls:f,id:j,overlayInnerStyle:D},H)};return p.createElement(gw,gn({popupClassName:r,prefixCls:f,popup:W,action:i,builtinPlacements:yT,popupPlacement:S,ref:O,popupAlign:w,getPopupContainer:_,onPopupVisibleChange:h,afterPopupVisibleChange:v,popupTransitionName:k,popupAnimation:g,popupMotion:b,defaultPopupVisible:M,autoDestroy:R,mouseLeaveDelay:c,popupStyle:d,mouseEnterDelay:l,arrow:V},P),m)};const CT=p.forwardRef(kT);function xT(e){const{sizePopupArrow:n,borderRadiusXS:t,borderRadiusOuter:r}=e,o=n/2,i=0,a=o,l=r*1/Math.sqrt(2),s=o-r*(1-1/Math.sqrt(2)),c=o-t*(1/Math.sqrt(2)),d=r*(Math.sqrt(2)-1)+t*(1/Math.sqrt(2)),u=2*o-c,f=d,m=2*o-l,h=s,v=2*o-i,k=a,g=o*Math.sqrt(2)+r*(Math.sqrt(2)-2),b=r*(Math.sqrt(2)-1),y=`polygon(${b}px 100%, 50% ${b}px, ${2*o-b}px 100%, ${b}px 100%)`,S=`path('M ${i} ${a} A ${r} ${r} 0 0 0 ${l} ${s} L ${c} ${d} A ${t} ${t} 0 0 1 ${u} ${f} L ${m} ${h} A ${r} ${r} 0 0 0 ${v} ${k} Z')`;return{arrowShadowWidth:g,arrowPath:S,arrowPolygon:y}}const ST=(e,n,t)=>{const{sizePopupArrow:r,arrowPolygon:o,arrowPath:i,arrowShadowWidth:a,borderRadiusXS:l,calc:s}=e;return{pointerEvents:"none",width:r,height:r,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:r,height:s(r).div(2).equal(),background:n,clipPath:{_multi_value_:!0,value:[o,i]},content:'""'},"&::after":{content:'""',position:"absolute",width:a,height:a,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${Ze(l)} 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:t,zIndex:0,background:"transparent"}}},vw=8;function yw(e){const{contentRadius:n,limitVerticalRadius:t}=e,r=n>12?n+2:12;return{arrowOffsetHorizontal:r,arrowOffsetVertical:t?vw:r}}function tc(e,n){return e?n:{}}function ET(e,n,t){const{componentCls:r,boxShadowPopoverArrow:o,arrowOffsetVertical:i,arrowOffsetHorizontal:a}=e,{arrowDistance:l=0,arrowPlacement:s={left:!0,right:!0,top:!0,bottom:!0}}={};return{[r]:Object.assign(Object.assign(Object.assign(Object.assign({[`${r}-arrow`]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},ST(e,n,o)),{"&:before":{background:n}})]},tc(!!s.top,{[[`&-placement-top > ${r}-arrow`,`&-placement-topLeft > ${r}-arrow`,`&-placement-topRight > ${r}-arrow`].join(",")]:{bottom:l,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top > ${r}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},[`&-placement-topLeft > ${r}-arrow`]:{left:{_skip_check_:!0,value:a}},[`&-placement-topRight > ${r}-arrow`]:{right:{_skip_check_:!0,value:a}}})),tc(!!s.bottom,{[[`&-placement-bottom > ${r}-arrow`,`&-placement-bottomLeft > ${r}-arrow`,`&-placement-bottomRight > ${r}-arrow`].join(",")]:{top:l,transform:"translateY(-100%)"},[`&-placement-bottom > ${r}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},[`&-placement-bottomLeft > ${r}-arrow`]:{left:{_skip_check_:!0,value:a}},[`&-placement-bottomRight > ${r}-arrow`]:{right:{_skip_check_:!0,value:a}}})),tc(!!s.left,{[[`&-placement-left > ${r}-arrow`,`&-placement-leftTop > ${r}-arrow`,`&-placement-leftBottom > ${r}-arrow`].join(",")]:{right:{_skip_check_:!0,value:l},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left > ${r}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop > ${r}-arrow`]:{top:i},[`&-placement-leftBottom > ${r}-arrow`]:{bottom:i}})),tc(!!s.right,{[[`&-placement-right > ${r}-arrow`,`&-placement-rightTop > ${r}-arrow`,`&-placement-rightBottom > ${r}-arrow`].join(",")]:{left:{_skip_check_:!0,value:l},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right > ${r}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop > ${r}-arrow`]:{top:i},[`&-placement-rightBottom > ${r}-arrow`]:{bottom:i}}))}}function AT(e,n,t,r){if(r===!1)return{adjustX:!1,adjustY:!1};const o=r&&typeof r=="object"?r:{},i={};switch(e){case"top":case"bottom":i.shiftX=n.arrowOffsetHorizontal*2+t,i.shiftY=!0,i.adjustY=!0;break;case"left":case"right":i.shiftY=n.arrowOffsetVertical*2+t,i.shiftX=!0,i.adjustX=!0;break}const a=Object.assign(Object.assign({},i),o);return a.shiftX||(a.adjustX=!0),a.shiftY||(a.adjustY=!0),a}const C1={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},TT={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},IT=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function _T(e){const{arrowWidth:n,autoAdjustOverflow:t,arrowPointAtCenter:r,offset:o,borderRadius:i,visibleFirst:a}=e,l=n/2,s={};return Object.keys(C1).forEach(c=>{const d=r&&TT[c]||C1[c],u=Object.assign(Object.assign({},d),{offset:[0,0],dynamicInset:!0});switch(s[c]=u,IT.has(c)&&(u.autoArrow=!1),c){case"top":case"topLeft":case"topRight":u.offset[1]=-l-o;break;case"bottom":case"bottomLeft":case"bottomRight":u.offset[1]=l+o;break;case"left":case"leftTop":case"leftBottom":u.offset[0]=-l-o;break;case"right":case"rightTop":case"rightBottom":u.offset[0]=l+o;break}const f=yw({contentRadius:i,limitVerticalRadius:!0});if(r)switch(c){case"topLeft":case"bottomLeft":u.offset[0]=-f.arrowOffsetHorizontal-l;break;case"topRight":case"bottomRight":u.offset[0]=f.arrowOffsetHorizontal+l;break;case"leftTop":case"rightTop":u.offset[1]=-f.arrowOffsetHorizontal-l;break;case"leftBottom":case"rightBottom":u.offset[1]=f.arrowOffsetHorizontal+l;break}u.overflow=AT(c,f,n,t),a&&(u.htmlRegion="visibleFirst")}),s}const PT=e=>{const{componentCls:n,tooltipMaxWidth:t,tooltipColor:r,tooltipBg:o,tooltipBorderRadius:i,zIndexPopup:a,controlHeight:l,boxShadowSecondary:s,paddingSM:c,paddingXS:d}=e;return[{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},md(e)),{position:"absolute",zIndex:a,display:"block",width:"max-content",maxWidth:t,visibility:"visible",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","&-hidden":{display:"none"},"--antd-arrow-background-color":o,[`${n}-inner`]:{minWidth:"1em",minHeight:l,padding:`${Ze(e.calc(c).div(2).equal())} ${Ze(d)}`,color:r,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:o,borderRadius:i,boxShadow:s,boxSizing:"border-box"},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${n}-inner`]:{borderRadius:e.min(i,vw)}},[`${n}-content`]:{position:"relative"}}),nS(e,(u,f)=>{let{darkColor:m}=f;return{[`&${n}-${u}`]:{[`${n}-inner`]:{backgroundColor:m},[`${n}-arrow`]:{"--antd-arrow-background-color":m}}}})),{"&-rtl":{direction:"rtl"}})},ET(e,"var(--antd-arrow-background-color)"),{[`${n}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow}}]},OT=e=>Object.assign(Object.assign({zIndexPopup:e.zIndexPopupBase+70},yw({contentRadius:e.borderRadius,limitVerticalRadius:!0})),xT(mr(e,{borderRadiusOuter:Math.min(e.borderRadiusOuter,4)}))),ww=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Ii("Tooltip",r=>{const{borderRadius:o,colorTextLightSolid:i,colorBgSpotlight:a}=r,l=mr(r,{tooltipMaxWidth:250,tooltipColor:i,tooltipBorderRadius:o,tooltipBg:a});return[PT(l),fw(r,"zoom-big-fast")]},OT,{resetStyle:!1,injectStyle:n})(e)},FT=mu.map(e=>`${e}-inverse`);function RT(e){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[].concat(Ln(FT),Ln(mu)).includes(e):mu.includes(e)}function kw(e,n){const t=RT(n),r=We({[`${e}-${n}`]:n&&t}),o={},i={};return n&&!t&&(o.background=n,i["--antd-arrow-background-color"]=n),{className:r,overlayStyle:o,arrowStyle:i}}const NT=e=>{const{prefixCls:n,className:t,placement:r="top",title:o,color:i,overlayInnerStyle:a}=e,{getPrefixCls:l}=p.useContext(qn),s=l("tooltip",n),[c,d,u]=ww(s),f=kw(s,i),m=f.arrowStyle,h=Object.assign(Object.assign({},a),f.overlayStyle),v=We(d,u,s,`${s}-pure`,`${s}-placement-${r}`,t,f.className);return c(p.createElement("div",{className:v,style:m},p.createElement("div",{className:`${s}-arrow`}),p.createElement(bw,Object.assign({},e,{className:d,prefixCls:s,overlayInnerStyle:h}),o)))};var MT=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const LT=p.forwardRef((e,n)=>{var t,r;const{prefixCls:o,openClassName:i,getTooltipContainer:a,overlayClassName:l,color:s,overlayInnerStyle:c,children:d,afterOpenChange:u,afterVisibleChange:f,destroyTooltipOnHide:m,arrow:h=!0,title:v,overlay:k,builtinPlacements:g,arrowPointAtCenter:b=!1,autoAdjustOverflow:y=!0}=e,S=!!h,[,A]=$r(),{getPopupContainer:w,getPrefixCls:I,direction:R}=p.useContext(qn),M=s3(),_=p.useRef(null),D=()=>{var Ie;(Ie=_.current)===null||Ie===void 0||Ie.forceAlign()};p.useImperativeHandle(n,()=>{var Ie;return{forceAlign:D,forcePopupAlign:()=>{M.deprecated(!1,"forcePopupAlign","forceAlign"),D()},nativeElement:(Ie=_.current)===null||Ie===void 0?void 0:Ie.nativeElement}});const[H,j]=El(!1,{value:(t=e.open)!==null&&t!==void 0?t:e.visible,defaultValue:(r=e.defaultOpen)!==null&&r!==void 0?r:e.defaultVisible}),B=!v&&!k&&v!==0,V=Ie=>{var oe,je;j(B?!1:Ie),B||((oe=e.onOpenChange)===null||oe===void 0||oe.call(e,Ie),(je=e.onVisibleChange)===null||je===void 0||je.call(e,Ie))},$=p.useMemo(()=>{var Ie,oe;let je=b;return typeof h=="object"&&(je=(oe=(Ie=h.pointAtCenter)!==null&&Ie!==void 0?Ie:h.arrowPointAtCenter)!==null&&oe!==void 0?oe:b),g||_T({arrowPointAtCenter:je,autoAdjustOverflow:y,arrowWidth:S?A.sizePopupArrow:0,borderRadius:A.borderRadius,offset:A.marginXXS,visibleFirst:!0})},[b,h,g,A]),O=p.useMemo(()=>v===0?v:k||v||"",[k,v]),P=p.createElement(jE,null,typeof O=="function"?O():O),{getPopupContainer:W,placement:x="top",mouseEnterDelay:G=.1,mouseLeaveDelay:Z=.1,overlayStyle:T,rootClassName:Q}=e,ne=MT(e,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName"]),N=I("tooltip",o),te=I(),Y=e["data-popover-inject"];let ye=H;!("open"in e)&&!("visible"in e)&&B&&(ye=!1);const ge=p.isValidElement(d)&&!W3(d)?d:p.createElement("span",null,d),Ce=ge.props,se=!Ce.className||typeof Ce.className=="string"?We(Ce.className,i||`${N}-open`):Ce.className,[Ge,Ve,Ae]=ww(N,!Y),ae=kw(N,s),de=ae.arrowStyle,xe=Object.assign(Object.assign({},c),ae.overlayStyle),Te=We(l,{[`${N}-rtl`]:R==="rtl"},ae.className,Q,Ve,Ae),[Oe,Le]=J3("Tooltip",ne.zIndex),Qe=p.createElement(CT,Object.assign({},ne,{zIndex:Oe,showArrow:S,placement:x,mouseEnterDelay:G,mouseLeaveDelay:Z,prefixCls:N,overlayClassName:Te,overlayStyle:Object.assign(Object.assign({},de),T),getTooltipContainer:W||a||w,ref:_,builtinPlacements:$,overlay:P,visible:ye,onVisibleChange:V,afterVisibleChange:u??f,overlayInnerStyle:xe,arrowContent:p.createElement("span",{className:`${N}-arrow-content`}),motion:{motionName:AE(te,"zoom-big-fast",e.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!m}),ye?Ma(ge,{className:se}):ge);return Ge(p.createElement(Q3.Provider,{value:Le},Qe))}),Cw=LT;Cw._InternalPanelDoNotUseOrYouWillBeFired=NT;var jT={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},DT=function(n,t){return p.createElement(Uo,gn({},n,{ref:t,icon:jT}))},x1=p.forwardRef(DT),xw=p.createContext(null);function Sw(e,n){return e===void 0?null:"".concat(e,"-").concat(n)}function Ew(e){var n=p.useContext(xw);return Sw(n,e)}var BT=["children","locked"],Rr=p.createContext(null);function $T(e,n){var t=pe({},e);return Object.keys(n).forEach(function(r){var o=n[r];o!==void 0&&(t[r]=o)}),t}function os(e){var n=e.children,t=e.locked,r=zn(e,BT),o=p.useContext(Rr),i=id(function(){return $T(o,r)},[o,r],function(a,l){return!t&&(a[0]!==l[0]||!$0(a[1],l[1],!0))});return p.createElement(Rr.Provider,{value:i},n)}var zT=[],Aw=p.createContext(null);function gd(){return p.useContext(Aw)}var Tw=p.createContext(zT);function La(e){var n=p.useContext(Tw);return p.useMemo(function(){return e!==void 0?[].concat(Ln(n),[e]):n},[n,e])}var Iw=p.createContext(null),Y0=p.createContext({});function S1(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(q0(e)){var t=e.nodeName.toLowerCase(),r=["input","select","textarea","button"].includes(t)||e.isContentEditable||t==="a"&&!!e.getAttribute("href"),o=e.getAttribute("tabindex"),i=Number(o),a=null;return o&&!Number.isNaN(i)?a=i:r&&a===null&&(a=0),r&&e.disabled&&(a=null),a!==null&&(a>=0||n&&a<0)}return!1}function HT(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=Ln(e.querySelectorAll("*")).filter(function(r){return S1(r,n)});return S1(e,n)&&t.unshift(e),t}var bh=Ue.LEFT,vh=Ue.RIGHT,yh=Ue.UP,_c=Ue.DOWN,Pc=Ue.ENTER,_w=Ue.ESC,rl=Ue.HOME,ol=Ue.END,E1=[yh,_c,bh,vh];function UT(e,n,t,r){var o,i,a,l,s="prev",c="next",d="children",u="parent";if(e==="inline"&&r===Pc)return{inlineTrigger:!0};var f=(o={},Be(o,yh,s),Be(o,_c,c),o),m=(i={},Be(i,bh,t?c:s),Be(i,vh,t?s:c),Be(i,_c,d),Be(i,Pc,d),i),h=(a={},Be(a,yh,s),Be(a,_c,c),Be(a,Pc,d),Be(a,_w,u),Be(a,bh,t?d:u),Be(a,vh,t?u:d),a),v={inline:f,horizontal:m,vertical:h,inlineSub:f,horizontalSub:h,verticalSub:h},k=(l=v["".concat(e).concat(n?"":"Sub")])===null||l===void 0?void 0:l[r];switch(k){case s:return{offset:-1,sibling:!0};case c:return{offset:1,sibling:!0};case u:return{offset:-1,sibling:!1};case d:return{offset:1,sibling:!1};default:return null}}function ZT(e){for(var n=e;n;){if(n.getAttribute("data-menu-list"))return n;n=n.parentElement}return null}function WT(e,n){for(var t=e||document.activeElement;t;){if(n.has(t))return t;t=t.parentElement}return null}function J0(e,n){var t=HT(e,!0);return t.filter(function(r){return n.has(r)})}function A1(e,n,t){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!e)return null;var o=J0(e,n),i=o.length,a=o.findIndex(function(l){return t===l});return r<0?a===-1?a=i-1:a-=1:r>0&&(a+=1),a=(a+i)%i,o[a]}var wh=function(n,t){var r=new Set,o=new Map,i=new Map;return n.forEach(function(a){var l=document.querySelector("[data-menu-id='".concat(Sw(t,a),"']"));l&&(r.add(l),i.set(l,a),o.set(a,l))}),{elements:r,key2element:o,element2key:i}};function VT(e,n,t,r,o,i,a,l,s,c){var d=p.useRef(),u=p.useRef();u.current=n;var f=function(){mt.cancel(d.current)};return p.useEffect(function(){return function(){f()}},[]),function(m){var h=m.which;if([].concat(E1,[Pc,_w,rl,ol]).includes(h)){var v=i(),k=wh(v,r),g=k,b=g.elements,y=g.key2element,S=g.element2key,A=y.get(n),w=WT(A,b),I=S.get(w),R=UT(e,a(I,!0).length===1,t,h);if(!R&&h!==rl&&h!==ol)return;(E1.includes(h)||[rl,ol].includes(h))&&m.preventDefault();var M=function(O){if(O){var P=O,W=O.querySelector("a");W!=null&&W.getAttribute("href")&&(P=W);var x=S.get(O);l(x),f(),d.current=mt(function(){u.current===x&&P.focus()})}};if([rl,ol].includes(h)||R.sibling||!w){var _;!w||e==="inline"?_=o.current:_=ZT(w);var D,H=J0(_,b);h===rl?D=H[0]:h===ol?D=H[H.length-1]:D=A1(_,b,w,R.offset),M(D)}else if(R.inlineTrigger)s(I);else if(R.offset>0)s(I,!0),f(),d.current=mt(function(){k=wh(v,r);var $=w.getAttribute("aria-controls"),O=document.getElementById($),P=A1(O,k.elements);M(P)},5);else if(R.offset<0){var j=a(I,!0),B=j[j.length-2],V=y.get(B);s(B,!1),M(V)}}c==null||c(m)}}function XT(e){Promise.resolve().then(e)}var e2="__RC_UTIL_PATH_SPLIT__",T1=function(n){return n.join(e2)},GT=function(n){return n.split(e2)},kh="rc-menu-more";function qT(){var e=p.useState({}),n=ve(e,2),t=n[1],r=p.useRef(new Map),o=p.useRef(new Map),i=p.useState([]),a=ve(i,2),l=a[0],s=a[1],c=p.useRef(0),d=p.useRef(!1),u=function(){d.current||t({})},f=p.useCallback(function(y,S){var A=T1(S);o.current.set(A,y),r.current.set(y,A),c.current+=1;var w=c.current;XT(function(){w===c.current&&u()})},[]),m=p.useCallback(function(y,S){var A=T1(S);o.current.delete(A),r.current.delete(y)},[]),h=p.useCallback(function(y){s(y)},[]),v=p.useCallback(function(y,S){var A=r.current.get(y)||"",w=GT(A);return S&&l.includes(w[0])&&w.unshift(kh),w},[l]),k=p.useCallback(function(y,S){return y.filter(function(A){return A!==void 0}).some(function(A){var w=v(A,!0);return w.includes(S)})},[v]),g=function(){var S=Ln(r.current.keys());return l.length&&S.push(kh),S},b=p.useCallback(function(y){var S="".concat(r.current.get(y)).concat(e2),A=new Set;return Ln(o.current.keys()).forEach(function(w){w.startsWith(S)&&A.add(o.current.get(w))}),A},[]);return p.useEffect(function(){return function(){d.current=!0}},[]),{registerPath:f,unregisterPath:m,refreshOverflowKeys:h,isSubPathKey:k,getKeyPath:v,getKeys:g,getSubPathKeys:b}}function fl(e){var n=p.useRef(e);n.current=e;var t=p.useCallback(function(){for(var r,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(r=n.current)===null||r===void 0?void 0:r.call.apply(r,[n].concat(i))},[]);return e?t:void 0}var KT=Math.random().toFixed(5).toString().slice(2),I1=0;function QT(e){var n=El(e,{value:e}),t=ve(n,2),r=t[0],o=t[1];return p.useEffect(function(){I1+=1;var i="".concat(KT,"-").concat(I1);o("rc-menu-uuid-".concat(i))},[]),r}function Pw(e,n,t,r){var o=p.useContext(Rr),i=o.activeKey,a=o.onActive,l=o.onInactive,s={active:i===e};return n||(s.onMouseEnter=function(c){t==null||t({key:e,domEvent:c}),a(e)},s.onMouseLeave=function(c){r==null||r({key:e,domEvent:c}),l(e)}),s}function Ow(e){var n=p.useContext(Rr),t=n.mode,r=n.rtl,o=n.inlineIndent;if(t!=="inline")return null;var i=e;return r?{paddingRight:i*o}:{paddingLeft:i*o}}function Fw(e){var n=e.icon,t=e.props,r=e.children,o;return n===null||n===!1?null:(typeof n=="function"?o=p.createElement(n,pe({},t)):typeof n!="boolean"&&(o=n),o||r||null)}var YT=["item"];function vu(e){var n=e.item,t=zn(e,YT);return Object.defineProperty(t,"item",{get:function(){return Ti(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),t}var JT=["title","attribute","elementRef"],eI=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],nI=["active"],tI=function(e){_a(t,e);var n=Pa(t);function t(){return pr(this,t),n.apply(this,arguments)}return gr(t,[{key:"render",value:function(){var o=this.props,i=o.title,a=o.attribute,l=o.elementRef,s=zn(o,JT),c=so(s,["eventKey","popupClassName","popupOffset","onTitleClick"]);return Ti(!a,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),p.createElement(no.Item,gn({},a,{title:typeof i=="string"?i:void 0},c,{ref:l}))}}]),t}(p.Component),rI=p.forwardRef(function(e,n){var t,r=e.style,o=e.className,i=e.eventKey;e.warnKey;var a=e.disabled,l=e.itemIcon,s=e.children,c=e.role,d=e.onMouseEnter,u=e.onMouseLeave,f=e.onClick,m=e.onKeyDown,h=e.onFocus,v=zn(e,eI),k=Ew(i),g=p.useContext(Rr),b=g.prefixCls,y=g.onItemClick,S=g.disabled,A=g.overflowDisabled,w=g.itemIcon,I=g.selectedKeys,R=g.onActive,M=p.useContext(Y0),_=M._internalRenderMenuItem,D="".concat(b,"-item"),H=p.useRef(),j=p.useRef(),B=S||a,V=ad(n,j),$=La(i),O=function(ge){return{key:i,keyPath:Ln($).reverse(),item:H.current,domEvent:ge}},P=l||w,W=Pw(i,B,d,u),x=W.active,G=zn(W,nI),Z=I.includes(i),T=Ow($.length),Q=function(ge){if(!B){var Ce=O(ge);f==null||f(vu(Ce)),y(Ce)}},ne=function(ge){if(m==null||m(ge),ge.which===Ue.ENTER){var Ce=O(ge);f==null||f(vu(Ce)),y(Ce)}},N=function(ge){R(i),h==null||h(ge)},te={};e.role==="option"&&(te["aria-selected"]=Z);var Y=p.createElement(tI,gn({ref:H,elementRef:V,role:c===null?"none":c||"menuitem",tabIndex:a?null:-1,"data-menu-id":A&&k?null:k},v,G,te,{component:"li","aria-disabled":a,style:pe(pe({},T),r),className:We(D,(t={},Be(t,"".concat(D,"-active"),x),Be(t,"".concat(D,"-selected"),Z),Be(t,"".concat(D,"-disabled"),B),t),o),onClick:Q,onKeyDown:ne,onFocus:N}),s,p.createElement(Fw,{props:pe(pe({},e),{},{isSelected:Z}),icon:P}));return _&&(Y=_(Y,e,{selected:Z})),Y});function oI(e,n){var t=e.eventKey,r=gd(),o=La(t);return p.useEffect(function(){if(r)return r.registerPath(t,o),function(){r.unregisterPath(t,o)}},[o]),r?null:p.createElement(rI,gn({},e,{ref:n}))}const bd=p.forwardRef(oI);var iI=["className","children"],aI=function(n,t){var r=n.className,o=n.children,i=zn(n,iI),a=p.useContext(Rr),l=a.prefixCls,s=a.mode,c=a.rtl;return p.createElement("ul",gn({className:We(l,c&&"".concat(l,"-rtl"),"".concat(l,"-sub"),"".concat(l,"-").concat(s==="inline"?"inline":"vertical"),r),role:"menu"},i,{"data-menu-list":!0,ref:t}),o)},n2=p.forwardRef(aI);n2.displayName="SubMenuList";function t2(e,n){return wi(e).map(function(t,r){if(p.isValidElement(t)){var o,i,a=t.key,l=(o=(i=t.props)===null||i===void 0?void 0:i.eventKey)!==null&&o!==void 0?o:a,s=l==null;s&&(l="tmp_key-".concat([].concat(Ln(n),[r]).join("-")));var c={key:l,eventKey:l};return p.cloneElement(t,c)}return t})}var yt={adjustX:1,adjustY:1},lI={topLeft:{points:["bl","tl"],overflow:yt},topRight:{points:["br","tr"],overflow:yt},bottomLeft:{points:["tl","bl"],overflow:yt},bottomRight:{points:["tr","br"],overflow:yt},leftTop:{points:["tr","tl"],overflow:yt},leftBottom:{points:["br","bl"],overflow:yt},rightTop:{points:["tl","tr"],overflow:yt},rightBottom:{points:["bl","br"],overflow:yt}},sI={topLeft:{points:["bl","tl"],overflow:yt},topRight:{points:["br","tr"],overflow:yt},bottomLeft:{points:["tl","bl"],overflow:yt},bottomRight:{points:["tr","br"],overflow:yt},rightTop:{points:["tr","tl"],overflow:yt},rightBottom:{points:["br","bl"],overflow:yt},leftTop:{points:["tl","tr"],overflow:yt},leftBottom:{points:["bl","br"],overflow:yt}};function Rw(e,n,t){if(n)return n;if(t)return t[e]||t.other}var cI={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function uI(e){var n=e.prefixCls,t=e.visible,r=e.children,o=e.popup,i=e.popupStyle,a=e.popupClassName,l=e.popupOffset,s=e.disabled,c=e.mode,d=e.onVisibleChange,u=p.useContext(Rr),f=u.getPopupContainer,m=u.rtl,h=u.subMenuOpenDelay,v=u.subMenuCloseDelay,k=u.builtinPlacements,g=u.triggerSubMenuAction,b=u.forceSubMenuRender,y=u.rootClassName,S=u.motion,A=u.defaultMotions,w=p.useState(!1),I=ve(w,2),R=I[0],M=I[1],_=pe(m?pe({},sI):pe({},lI),k),D=cI[c],H=Rw(c,S,A),j=p.useRef(H);c!=="inline"&&(j.current=H);var B=pe(pe({},j.current),{},{leavedClassName:"".concat(n,"-hidden"),removeOnLeave:!1,motionAppear:!0}),V=p.useRef();return p.useEffect(function(){return V.current=mt(function(){M(t)}),function(){mt.cancel(V.current)}},[t]),p.createElement(gw,{prefixCls:n,popupClassName:We("".concat(n,"-popup"),Be({},"".concat(n,"-rtl"),m),a,y),stretch:c==="horizontal"?"minWidth":null,getPopupContainer:f,builtinPlacements:_,popupPlacement:D,popupVisible:R,popup:o,popupStyle:i,popupAlign:l&&{offset:l},action:s?[]:[g],mouseEnterDelay:h,mouseLeaveDelay:v,onPopupVisibleChange:d,forceRender:b,popupMotion:B,fresh:!0},r)}function dI(e){var n=e.id,t=e.open,r=e.keyPath,o=e.children,i="inline",a=p.useContext(Rr),l=a.prefixCls,s=a.forceSubMenuRender,c=a.motion,d=a.defaultMotions,u=a.mode,f=p.useRef(!1);f.current=u===i;var m=p.useState(!f.current),h=ve(m,2),v=h[0],k=h[1],g=f.current?t:!1;p.useEffect(function(){f.current&&k(!1)},[u]);var b=pe({},Rw(i,c,d));r.length>1&&(b.motionAppear=!1);var y=b.onVisibleChanged;return b.onVisibleChanged=function(S){return!f.current&&!S&&k(!0),y==null?void 0:y(S)},v?null:p.createElement(os,{mode:i,locked:!f.current},p.createElement(Fa,gn({visible:g},b,{forceRender:s,removeOnLeave:!1,leavedClassName:"".concat(l,"-hidden")}),function(S){var A=S.className,w=S.style;return p.createElement(n2,{id:n,className:A,style:w},o)}))}var fI=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],mI=["active"],hI=p.forwardRef(function(e,n){var t,r=e.style,o=e.className,i=e.title,a=e.eventKey;e.warnKey;var l=e.disabled,s=e.internalPopupClose,c=e.children,d=e.itemIcon,u=e.expandIcon,f=e.popupClassName,m=e.popupOffset,h=e.popupStyle,v=e.onClick,k=e.onMouseEnter,g=e.onMouseLeave,b=e.onTitleClick,y=e.onTitleMouseEnter,S=e.onTitleMouseLeave,A=zn(e,fI),w=Ew(a),I=p.useContext(Rr),R=I.prefixCls,M=I.mode,_=I.openKeys,D=I.disabled,H=I.overflowDisabled,j=I.activeKey,B=I.selectedKeys,V=I.itemIcon,$=I.expandIcon,O=I.onItemClick,P=I.onOpenChange,W=I.onActive,x=p.useContext(Y0),G=x._internalRenderSubMenuItem,Z=p.useContext(Iw),T=Z.isSubPathKey,Q=La(),ne="".concat(R,"-submenu"),N=D||l,te=p.useRef(),Y=p.useRef(),ye=d??V,ge=u??$,Ce=_.includes(a),se=!H&&Ce,Ge=T(B,a),Ve=Pw(a,N,y,S),Ae=Ve.active,ae=zn(Ve,mI),de=p.useState(!1),xe=ve(de,2),Te=xe[0],Oe=xe[1],Le=function(we){N||Oe(we)},Qe=function(we){Le(!0),k==null||k({key:a,domEvent:we})},Ie=function(we){Le(!1),g==null||g({key:a,domEvent:we})},oe=p.useMemo(function(){return Ae||(M!=="inline"?Te||T([j],a):!1)},[M,Ae,j,Te,a,T]),je=Ow(Q.length),C=function(we){N||(b==null||b({key:a,domEvent:we}),M==="inline"&&P(a,!Ce))},E=fl(function(ce){v==null||v(vu(ce)),O(ce)}),F=function(we){M!=="inline"&&P(a,we)},z=function(){W(a)},q=w&&"".concat(w,"-popup"),K=p.createElement("div",gn({role:"menuitem",style:je,className:"".concat(ne,"-title"),tabIndex:N?null:-1,ref:te,title:typeof i=="string"?i:null,"data-menu-id":H&&w?null:w,"aria-expanded":se,"aria-haspopup":!0,"aria-controls":q,"aria-disabled":N,onClick:C,onFocus:z},ae),i,p.createElement(Fw,{icon:M!=="horizontal"?ge:void 0,props:pe(pe({},e),{},{isOpen:se,isSubMenu:!0})},p.createElement("i",{className:"".concat(ne,"-arrow")}))),re=p.useRef(M);if(M!=="inline"&&Q.length>1?re.current="vertical":re.current=M,!H){var ie=re.current;K=p.createElement(uI,{mode:ie,prefixCls:ne,visible:!s&&se&&M!=="inline",popupClassName:f,popupOffset:m,popupStyle:h,popup:p.createElement(os,{mode:ie==="horizontal"?"vertical":ie},p.createElement(n2,{id:q,ref:Y},c)),disabled:N,onVisibleChange:F},K)}var he=p.createElement(no.Item,gn({ref:n,role:"none"},A,{component:"li",style:r,className:We(ne,"".concat(ne,"-").concat(M),o,(t={},Be(t,"".concat(ne,"-open"),se),Be(t,"".concat(ne,"-active"),oe),Be(t,"".concat(ne,"-selected"),Ge),Be(t,"".concat(ne,"-disabled"),N),t)),onMouseEnter:Qe,onMouseLeave:Ie}),K,!H&&p.createElement(dI,{id:q,open:se,keyPath:Q},c));return G&&(he=G(he,e,{selected:Ge,active:oe,open:se,disabled:N})),p.createElement(os,{onItemClick:E,mode:M==="horizontal"?"vertical":M,itemIcon:ye,expandIcon:ge},he)}),vd=p.forwardRef(function(e,n){var t=e.eventKey,r=e.children,o=La(t),i=t2(r,o),a=gd();p.useEffect(function(){if(a)return a.registerPath(t,o),function(){a.unregisterPath(t,o)}},[o]);var l;return a?l=i:l=p.createElement(hI,gn({ref:n},e),i),p.createElement(Tw.Provider,{value:o},l)});function r2(e){var n=e.className,t=e.style,r=p.useContext(Rr),o=r.prefixCls,i=gd();return i?null:p.createElement("li",{role:"separator",className:We("".concat(o,"-item-divider"),n),style:t})}var pI=["className","title","eventKey","children"],gI=p.forwardRef(function(e,n){var t=e.className,r=e.title;e.eventKey;var o=e.children,i=zn(e,pI),a=p.useContext(Rr),l=a.prefixCls,s="".concat(l,"-item-group");return p.createElement("li",gn({ref:n,role:"presentation"},i,{onClick:function(d){return d.stopPropagation()},className:We(s,t)}),p.createElement("div",{role:"presentation",className:"".concat(s,"-title"),title:typeof r=="string"?r:void 0},r),p.createElement("ul",{role:"group",className:"".concat(s,"-list")},o))}),o2=p.forwardRef(function(e,n){var t=e.eventKey,r=e.children,o=La(t),i=t2(r,o),a=gd();return a?i:p.createElement(gI,gn({ref:n},so(e,["warnKey"])),i)}),bI=["label","children","key","type"];function Ch(e,n){var t=n.item,r=n.group,o=n.submenu,i=n.divider;return(e||[]).map(function(a,l){if(a&&Tn(a)==="object"){var s=a,c=s.label,d=s.children,u=s.key,f=s.type,m=zn(s,bI),h=u??"tmp-".concat(l);return d||f==="group"?f==="group"?p.createElement(r,gn({key:h},m,{title:c}),Ch(d,n)):p.createElement(o,gn({key:h},m,{title:c}),Ch(d,n)):f==="divider"?p.createElement(i,gn({key:h},m)):p.createElement(t,gn({key:h},m),c)}return null}).filter(function(a){return a})}function _1(e,n,t,r){var o=e,i=pe({divider:r2,item:bd,group:o2,submenu:vd},r);return n&&(o=Ch(n,i)),t2(o,t)}var vI=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem","_internalComponents"],qo=[],yI=p.forwardRef(function(e,n){var t,r,o=e,i=o.prefixCls,a=i===void 0?"rc-menu":i,l=o.rootClassName,s=o.style,c=o.className,d=o.tabIndex,u=d===void 0?0:d,f=o.items,m=o.children,h=o.direction,v=o.id,k=o.mode,g=k===void 0?"vertical":k,b=o.inlineCollapsed,y=o.disabled,S=o.disabledOverflow,A=o.subMenuOpenDelay,w=A===void 0?.1:A,I=o.subMenuCloseDelay,R=I===void 0?.1:I,M=o.forceSubMenuRender,_=o.defaultOpenKeys,D=o.openKeys,H=o.activeKey,j=o.defaultActiveFirst,B=o.selectable,V=B===void 0?!0:B,$=o.multiple,O=$===void 0?!1:$,P=o.defaultSelectedKeys,W=o.selectedKeys,x=o.onSelect,G=o.onDeselect,Z=o.inlineIndent,T=Z===void 0?24:Z,Q=o.motion,ne=o.defaultMotions,N=o.triggerSubMenuAction,te=N===void 0?"hover":N,Y=o.builtinPlacements,ye=o.itemIcon,ge=o.expandIcon,Ce=o.overflowedIndicator,se=Ce===void 0?"...":Ce,Ge=o.overflowedIndicatorPopupClassName,Ve=o.getPopupContainer,Ae=o.onClick,ae=o.onOpenChange,de=o.onKeyDown;o.openAnimation,o.openTransitionName;var xe=o._internalRenderMenuItem,Te=o._internalRenderSubMenuItem,Oe=o._internalComponents,Le=zn(o,vI),Qe=p.useMemo(function(){return[_1(m,f,qo,Oe),_1(m,f,qo,{})]},[m,f,Oe]),Ie=ve(Qe,2),oe=Ie[0],je=Ie[1],C=p.useState(!1),E=ve(C,2),F=E[0],z=E[1],q=p.useRef(),K=QT(v),re=h==="rtl",ie=El(_,{value:D,postState:function(yn){return yn||qo}}),he=ve(ie,2),ce=he[0],we=he[1],ze=function(yn){var En=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function ct(){we(yn),ae==null||ae(yn)}En?Ia.flushSync(ct):ct()},Ee=p.useState(ce),Ye=ve(Ee,2),rn=Ye[0],Xe=Ye[1],sn=p.useRef(!1),an=p.useMemo(function(){return(g==="inline"||g==="vertical")&&b?["vertical",b]:[g,!1]},[g,b]),Je=ve(an,2),_e=Je[0],qe=Je[1],De=_e==="inline",Se=p.useState(_e),Ne=ve(Se,2),en=Ne[0],L=Ne[1],U=p.useState(qe),X=ve(U,2),ee=X[0],be=X[1];p.useEffect(function(){L(_e),be(qe),sn.current&&(De?we(rn):ze(qo))},[_e,qe]);var ke=p.useState(0),Fe=ve(ke,2),le=Fe[0],He=Fe[1],fe=le>=oe.length-1||en!=="horizontal"||S;p.useEffect(function(){De&&Xe(ce)},[ce]),p.useEffect(function(){return sn.current=!0,function(){sn.current=!1}},[]);var $e=qT(),cn=$e.registerPath,ln=$e.unregisterPath,un=$e.refreshOverflowKeys,dn=$e.isSubPathKey,In=$e.getKeyPath,kn=$e.getKeys,Un=$e.getSubPathKeys,Ft=p.useMemo(function(){return{registerPath:cn,unregisterPath:ln}},[cn,ln]),$t=p.useMemo(function(){return{isSubPathKey:dn}},[dn]);p.useEffect(function(){un(fe?qo:oe.slice(le+1).map(function(_n){return _n.key}))},[le,fe]);var zt=El(H||j&&((t=oe[0])===null||t===void 0?void 0:t.key),{value:H}),st=ve(zt,2),Xn=st[0],nr=st[1],Rt=fl(function(_n){nr(_n)}),vr=fl(function(){nr(void 0)});p.useImperativeHandle(n,function(){return{list:q.current,focus:function(yn){var En,ct=kn(),ut=wh(ct,K),Ur=ut.elements,Vo=ut.key2element,Xo=ut.element2key,Zr=J0(q.current,Ur),Oi=Xn??(Zr[0]?Xo.get(Zr[0]):(En=oe.find(function(Kn){return!Kn.props.disabled}))===null||En===void 0?void 0:En.key),fo=Vo.get(Oi);if(Oi&&fo){var Fi;fo==null||(Fi=fo.focus)===null||Fi===void 0||Fi.call(fo,yn)}}}});var tn=El(P||[],{value:W,postState:function(yn){return Array.isArray(yn)?yn:yn==null?qo:[yn]}}),pn=ve(tn,2),Sn=pn[0],bn=pn[1],gt=function(yn){if(V){var En=yn.key,ct=Sn.includes(En),ut;O?ct?ut=Sn.filter(function(Vo){return Vo!==En}):ut=[].concat(Ln(Sn),[En]):ut=[En],bn(ut);var Ur=pe(pe({},yn),{},{selectedKeys:ut});ct?G==null||G(Ur):x==null||x(Ur)}!O&&ce.length&&en!=="inline"&&ze(qo)},Ht=fl(function(_n){Ae==null||Ae(vu(_n)),gt(_n)}),tr=fl(function(_n,yn){var En=ce.filter(function(ut){return ut!==_n});if(yn)En.push(_n);else if(en!=="inline"){var ct=Un(_n);En=En.filter(function(ut){return!ct.has(ut)})}$0(ce,En,!0)||ze(En,!0)}),Wo=function(yn,En){var ct=En??!ce.includes(yn);tr(yn,ct)},uo=VT(en,Xn,re,K,q,kn,In,nr,Wo,de);p.useEffect(function(){z(!0)},[]);var yr=p.useMemo(function(){return{_internalRenderMenuItem:xe,_internalRenderSubMenuItem:Te}},[xe,Te]),Ba=en!=="horizontal"||S?oe:oe.map(function(_n,yn){return p.createElement(os,{key:_n.key,overflowDisabled:yn>le},_n)}),$a=p.createElement(no,gn({id:v,ref:q,prefixCls:"".concat(a,"-overflow"),component:"ul",itemComponent:bd,className:We(a,"".concat(a,"-root"),"".concat(a,"-").concat(en),c,(r={},Be(r,"".concat(a,"-inline-collapsed"),ee),Be(r,"".concat(a,"-rtl"),re),r),l),dir:h,style:s,role:"menu",tabIndex:u,data:Ba,renderRawItem:function(yn){return yn},renderRawRest:function(yn){var En=yn.length,ct=En?oe.slice(-En):null;return p.createElement(vd,{eventKey:kh,title:se,disabled:fe,internalPopupClose:En===0,popupClassName:Ge},ct)},maxCount:en!=="horizontal"||S?no.INVALIDATE:no.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(yn){He(yn)},onKeyDown:uo},Le));return p.createElement(Y0.Provider,{value:yr},p.createElement(xw.Provider,{value:K},p.createElement(os,{prefixCls:a,rootClassName:l,mode:en,openKeys:ce,rtl:re,disabled:y,motion:F?Q:null,defaultMotions:F?ne:null,activeKey:Xn,onActive:Rt,onInactive:vr,selectedKeys:Sn,inlineIndent:T,subMenuOpenDelay:w,subMenuCloseDelay:R,forceSubMenuRender:M,builtinPlacements:Y,triggerSubMenuAction:te,getPopupContainer:Ve,itemIcon:ye,expandIcon:ge,onItemClick:Ht,onOpenChange:tr},p.createElement(Iw.Provider,{value:$t},$a),p.createElement("div",{style:{display:"none"},"aria-hidden":!0},p.createElement(Aw.Provider,{value:Ft},je)))))}),ys=yI;ys.Item=bd;ys.SubMenu=vd;ys.ItemGroup=o2;ys.Divider=r2;var wI={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},kI=function(n,t){return p.createElement(Uo,gn({},n,{ref:t,icon:wI}))},CI=p.forwardRef(kI),xI={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},SI=function(n,t){return p.createElement(Uo,gn({},n,{ref:t,icon:xI}))},P1=p.forwardRef(SI);const EI=e=>!isNaN(parseFloat(e))&&isFinite(e),Nw=p.createContext({siderHook:{addSider:()=>null,removeSider:()=>null}});var AI=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const O1={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},yd=p.createContext({}),TI=(()=>{let e=0;return function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e+=1,`${n}${e}`}})(),II=p.forwardRef((e,n)=>{const{prefixCls:t,className:r,trigger:o,children:i,defaultCollapsed:a=!1,theme:l="dark",style:s={},collapsible:c=!1,reverseArrow:d=!1,width:u=200,collapsedWidth:f=80,zeroWidthTriggerStyle:m,breakpoint:h,onCollapse:v,onBreakpoint:k}=e,g=AI(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),{siderHook:b}=p.useContext(Nw),[y,S]=p.useState("collapsed"in e?e.collapsed:a),[A,w]=p.useState(!1);p.useEffect(()=>{"collapsed"in e&&S(e.collapsed)},[e.collapsed]);const I=(j,B)=>{"collapsed"in e||S(j),v==null||v(j,B)},R=p.useRef();R.current=j=>{w(j.matches),k==null||k(j.matches),y!==j.matches&&I(j.matches,"responsive")},p.useEffect(()=>{function j(V){return R.current(V)}let B;if(typeof window<"u"){const{matchMedia:V}=window;if(V&&h&&h in O1){B=V(`screen and (max-width: ${O1[h]})`);try{B.addEventListener("change",j)}catch{B.addListener(j)}j(B)}}return()=>{try{B==null||B.removeEventListener("change",j)}catch{B==null||B.removeListener(j)}}},[h]),p.useEffect(()=>{const j=TI("ant-sider-");return b.addSider(j),()=>b.removeSider(j)},[]);const M=()=>{I(!y,"clickTrigger")},{getPrefixCls:_}=p.useContext(qn),D=()=>{const j=_("layout-sider",t),B=so(g,["collapsed"]),V=y?f:u,$=EI(V)?`${V}px`:String(V),O=parseFloat(String(f||0))===0?p.createElement("span",{onClick:M,className:We(`${j}-zero-width-trigger`,`${j}-zero-width-trigger-${d?"right":"left"}`),style:m},o||p.createElement(CI,null)):null,x={expanded:d?p.createElement(x1,null):p.createElement(P1,null),collapsed:d?p.createElement(P1,null):p.createElement(x1,null)}[y?"collapsed":"expanded"],G=o!==null?O||p.createElement("div",{className:`${j}-trigger`,onClick:M,style:{width:$}},o||x):null,Z=Object.assign(Object.assign({},s),{flex:`0 0 ${$}`,maxWidth:$,minWidth:$,width:$}),T=We(j,`${j}-${l}`,{[`${j}-collapsed`]:!!y,[`${j}-has-trigger`]:c&&o!==null&&!O,[`${j}-below`]:!!A,[`${j}-zero-width`]:parseFloat($)===0},r);return p.createElement("aside",Object.assign({className:T},B,{style:Z,ref:n}),p.createElement("div",{className:`${j}-children`},i),c||A&&O?G:null)},H=p.useMemo(()=>({siderCollapsed:y}),[y]);return p.createElement(yd.Provider,{value:H},D())}),Mw=II;var _I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},PI=function(n,t){return p.createElement(Uo,gn({},n,{ref:t,icon:_I}))},OI=p.forwardRef(PI),FI=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const Lw=e=>{const{prefixCls:n,className:t,dashed:r}=e,o=FI(e,["prefixCls","className","dashed"]),{getPrefixCls:i}=p.useContext(qn),a=i("menu",n),l=We({[`${a}-item-divider-dashed`]:!!r},t);return p.createElement(r2,Object.assign({className:l},o))},yu=p.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),jw=e=>{var n;const{className:t,children:r,icon:o,title:i,danger:a}=e,{prefixCls:l,firstLevel:s,direction:c,disableMenuItemTitleTooltip:d,inlineCollapsed:u}=p.useContext(yu),f=b=>{const y=p.createElement("span",{className:`${l}-title-content`},r);return(!o||p.isValidElement(r)&&r.type==="span")&&r&&b&&s&&typeof r=="string"?p.createElement("div",{className:`${l}-inline-collapsed-noicon`},r.charAt(0)):y},{siderCollapsed:m}=p.useContext(yd);let h=i;typeof i>"u"?h=s?r:"":i===!1&&(h="");const v={title:h};!m&&!u&&(v.title=null,v.open=!1);const k=wi(r).length;let g=p.createElement(bd,Object.assign({},so(e,["title","icon","danger"]),{className:We({[`${l}-item-danger`]:a,[`${l}-item-only-child`]:(o?k+1:k)===1},t),title:typeof i=="string"?i:void 0}),Ma(o,{className:We(p.isValidElement(o)?(n=o.props)===null||n===void 0?void 0:n.className:"",`${l}-item-icon`)}),f(u));return d||(g=p.createElement(Cw,Object.assign({},v,{placement:c==="rtl"?"left":"right",overlayClassName:`${l}-inline-collapsed-tooltip`}),g)),g},F1=p.createContext(null),RI=e=>{const{componentCls:n,motionDurationSlow:t,horizontalLineHeight:r,colorSplit:o,lineWidth:i,lineType:a,itemPaddingInline:l}=e;return{[`${n}-horizontal`]:{lineHeight:r,border:0,borderBottom:`${Ze(i)} ${a} ${o}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${n}-item, ${n}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:l},[`> ${n}-item:hover,
        > ${n}-item-active,
        > ${n}-submenu ${n}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${n}-item, ${n}-submenu-title`]:{transition:[`border-color ${t}`,`background ${t}`].join(",")},[`${n}-submenu-arrow`]:{display:"none"}}}},NI=e=>{let{componentCls:n,menuArrowOffset:t,calc:r}=e;return{[`${n}-rtl`]:{direction:"rtl"},[`${n}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${n}-rtl${n}-vertical,
    ${n}-submenu-rtl ${n}-vertical`]:{[`${n}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(${Ze(r(t).mul(-1).equal())})`},"&::after":{transform:`rotate(45deg) translateY(${Ze(t)})`}}}}},R1=e=>Object.assign({},S3(e)),N1=(e,n)=>{const{componentCls:t,itemColor:r,itemSelectedColor:o,groupTitleColor:i,itemBg:a,subMenuItemBg:l,itemSelectedBg:s,activeBarHeight:c,activeBarWidth:d,activeBarBorderWidth:u,motionDurationSlow:f,motionEaseInOut:m,motionEaseOut:h,itemPaddingInline:v,motionDurationMid:k,itemHoverColor:g,lineType:b,colorSplit:y,itemDisabledColor:S,dangerItemColor:A,dangerItemHoverColor:w,dangerItemSelectedColor:I,dangerItemActiveBg:R,dangerItemSelectedBg:M,popupBg:_,itemHoverBg:D,itemActiveBg:H,menuSubMenuBg:j,horizontalItemSelectedColor:B,horizontalItemSelectedBg:V,horizontalItemBorderRadius:$,horizontalItemHoverBg:O}=e;return{[`${t}-${n}, ${t}-${n} > ${t}`]:{color:r,background:a,[`&${t}-root:focus-visible`]:Object.assign({},R1(e)),[`${t}-item-group-title`]:{color:i},[`${t}-submenu-selected`]:{[`> ${t}-submenu-title`]:{color:o}},[`${t}-item, ${t}-submenu-title`]:{color:r,[`&:not(${t}-item-disabled):focus-visible`]:Object.assign({},R1(e))},[`${t}-item-disabled, ${t}-submenu-disabled`]:{color:`${S} !important`},[`${t}-item:not(${t}-item-selected):not(${t}-submenu-selected)`]:{[`&:hover, > ${t}-submenu-title:hover`]:{color:g}},[`&:not(${t}-horizontal)`]:{[`${t}-item:not(${t}-item-selected)`]:{"&:hover":{backgroundColor:D},"&:active":{backgroundColor:H}},[`${t}-submenu-title`]:{"&:hover":{backgroundColor:D},"&:active":{backgroundColor:H}}},[`${t}-item-danger`]:{color:A,[`&${t}-item:hover`]:{[`&:not(${t}-item-selected):not(${t}-submenu-selected)`]:{color:w}},[`&${t}-item:active`]:{background:R}},[`${t}-item a`]:{"&, &:hover":{color:"inherit"}},[`${t}-item-selected`]:{color:o,[`&${t}-item-danger`]:{color:I},"a, a:hover":{color:"inherit"}},[`& ${t}-item-selected`]:{backgroundColor:s,[`&${t}-item-danger`]:{backgroundColor:M}},[`&${t}-submenu > ${t}`]:{backgroundColor:j},[`&${t}-popup > ${t}`]:{backgroundColor:_},[`&${t}-submenu-popup > ${t}`]:{backgroundColor:_},[`&${t}-horizontal`]:Object.assign(Object.assign({},n==="dark"?{borderBottom:0}:{}),{[`> ${t}-item, > ${t}-submenu`]:{top:u,marginTop:e.calc(u).mul(-1).equal(),marginBottom:0,borderRadius:$,"&::after":{position:"absolute",insetInline:v,bottom:0,borderBottom:`${Ze(c)} solid transparent`,transition:`border-color ${f} ${m}`,content:'""'},"&:hover, &-active, &-open":{background:O,"&::after":{borderBottomWidth:c,borderBottomColor:B}},"&-selected":{color:B,backgroundColor:V,"&:hover":{backgroundColor:V},"&::after":{borderBottomWidth:c,borderBottomColor:B}}}}),[`&${t}-root`]:{[`&${t}-inline, &${t}-vertical`]:{borderInlineEnd:`${Ze(u)} ${b} ${y}`}},[`&${t}-inline`]:{[`${t}-sub${t}-inline`]:{background:l},[`${t}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${Ze(d)} solid ${o}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${k} ${h}`,`opacity ${k} ${h}`].join(","),content:'""'},[`&${t}-item-danger`]:{"&::after":{borderInlineEndColor:I}}},[`${t}-selected, ${t}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${k} ${m}`,`opacity ${k} ${m}`].join(",")}}}}}},M1=e=>{const{componentCls:n,itemHeight:t,itemMarginInline:r,padding:o,menuArrowSize:i,marginXS:a,itemMarginBlock:l,itemWidth:s}=e,c=e.calc(i).add(o).add(a).equal();return{[`${n}-item`]:{position:"relative",overflow:"hidden"},[`${n}-item, ${n}-submenu-title`]:{height:t,lineHeight:Ze(t),paddingInline:o,overflow:"hidden",textOverflow:"ellipsis",marginInline:r,marginBlock:l,width:s},[`> ${n}-item,
            > ${n}-submenu > ${n}-submenu-title`]:{height:t,lineHeight:Ze(t)},[`${n}-item-group-list ${n}-submenu-title,
            ${n}-submenu-title`]:{paddingInlineEnd:c}}},MI=e=>{const{componentCls:n,iconCls:t,itemHeight:r,colorTextLightSolid:o,dropdownWidth:i,controlHeightLG:a,motionDurationMid:l,motionEaseOut:s,paddingXL:c,itemMarginInline:d,fontSizeLG:u,motionDurationSlow:f,paddingXS:m,boxShadowSecondary:h,collapsedWidth:v,collapsedIconSize:k}=e,g={height:r,lineHeight:Ze(r),listStylePosition:"inside",listStyleType:"disc"};return[{[n]:{"&-inline, &-vertical":Object.assign({[`&${n}-root`]:{boxShadow:"none"}},M1(e))},[`${n}-submenu-popup`]:{[`${n}-vertical`]:Object.assign(Object.assign({},M1(e)),{boxShadow:h})}},{[`${n}-submenu-popup ${n}-vertical${n}-sub`]:{minWidth:i,maxHeight:`calc(100vh - ${Ze(e.calc(a).mul(2.5).equal())})`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${n}-inline`]:{width:"100%",[`&${n}-root`]:{[`${n}-item, ${n}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${f}`,`background ${f}`,`padding ${l} ${s}`,`padding-inline calc(50% - ${Ze(e.calc(u).div(2).equal())} - ${Ze(d)})`].join(","),[`> ${n}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${n}-sub${n}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${n}-submenu > ${n}-submenu-title`]:g,[`& ${n}-item-group-title`]:{paddingInlineStart:c}},[`${n}-item`]:g}},{[`${n}-inline-collapsed`]:{width:v,[`&${n}-root`]:{[`${n}-item, ${n}-submenu ${n}-submenu-title`]:{[`> ${n}-inline-collapsed-noicon`]:{fontSize:u,textAlign:"center"}}},[`> ${n}-item,
          > ${n}-item-group > ${n}-item-group-list > ${n}-item,
          > ${n}-item-group > ${n}-item-group-list > ${n}-submenu > ${n}-submenu-title,
          > ${n}-submenu > ${n}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${Ze(e.calc(u).div(2).equal())} - ${Ze(d)})`,textOverflow:"clip",[`
            ${n}-submenu-arrow,
            ${n}-submenu-expand-icon
          `]:{opacity:0},[`${n}-item-icon, ${t}`]:{margin:0,fontSize:k,lineHeight:Ze(r),"+ span":{display:"inline-block",opacity:0}}},[`${n}-item-icon, ${t}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${n}-item-icon, ${t}`]:{display:"none"},"a, a:hover":{color:o}},[`${n}-item-group-title`]:Object.assign(Object.assign({},C3),{paddingInline:m})}}]},L1=e=>{const{componentCls:n,motionDurationSlow:t,motionDurationMid:r,motionEaseInOut:o,motionEaseOut:i,iconCls:a,iconSize:l,iconMarginInlineEnd:s}=e;return{[`${n}-item, ${n}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${t}`,`background ${t}`,`padding ${t} ${o}`].join(","),[`${n}-item-icon, ${a}`]:{minWidth:l,fontSize:l,transition:[`font-size ${r} ${i}`,`margin ${t} ${o}`,`color ${t}`].join(","),"+ span":{marginInlineStart:s,opacity:1,transition:[`opacity ${t} ${o}`,`margin ${t}`,`color ${t}`].join(",")}},[`${n}-item-icon`]:Object.assign({},x3()),[`&${n}-item-only-child`]:{[`> ${a}, > ${n}-item-icon`]:{marginInlineEnd:0}}},[`${n}-item-disabled, ${n}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${n}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},j1=e=>{const{componentCls:n,motionDurationSlow:t,motionEaseInOut:r,borderRadius:o,menuArrowSize:i,menuArrowOffset:a}=e;return{[`${n}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:e.margin,width:i,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${t} ${r}, opacity ${t}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:e.calc(i).mul(.6).equal(),height:e.calc(i).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:o,transition:[`background ${t} ${r}`,`transform ${t} ${r}`,`top ${t} ${r}`,`color ${t} ${r}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(${Ze(e.calc(a).mul(-1).equal())})`},"&::after":{transform:`rotate(-45deg) translateY(${Ze(a)})`}}}}},LI=e=>{const{antCls:n,componentCls:t,fontSize:r,motionDurationSlow:o,motionDurationMid:i,motionEaseInOut:a,paddingXS:l,padding:s,colorSplit:c,lineWidth:d,zIndexPopup:u,borderRadiusLG:f,subMenuItemBorderRadius:m,menuArrowSize:h,menuArrowOffset:v,lineType:k,groupTitleLineHeight:g,groupTitleFontSize:b}=e;return[{"":{[`${t}`]:Object.assign(Object.assign({},Rg()),{"&-hidden":{display:"none"}})},[`${t}-submenu-hidden`]:{display:"none"}},{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},md(e)),Rg()),{marginBottom:0,paddingInlineStart:0,fontSize:r,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${o} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${t}-item`]:{flex:"none"}},[`${t}-item, ${t}-submenu, ${t}-submenu-title`]:{borderRadius:e.itemBorderRadius},[`${t}-item-group-title`]:{padding:`${Ze(l)} ${Ze(s)}`,fontSize:b,lineHeight:g,transition:`all ${o}`},[`&-horizontal ${t}-submenu`]:{transition:[`border-color ${o} ${a}`,`background ${o} ${a}`].join(",")},[`${t}-submenu, ${t}-submenu-inline`]:{transition:[`border-color ${o} ${a}`,`background ${o} ${a}`,`padding ${i} ${a}`].join(",")},[`${t}-submenu ${t}-sub`]:{cursor:"initial",transition:[`background ${o} ${a}`,`padding ${o} ${a}`].join(",")},[`${t}-title-content`]:{transition:`color ${o}`,[`> ${n}-typography-ellipsis-single-line`]:{display:"inline",verticalAlign:"unset"}},[`${t}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${t}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:c,borderStyle:k,borderWidth:0,borderTopWidth:d,marginBlock:d,padding:0,"&-dashed":{borderStyle:"dashed"}}}),L1(e)),{[`${t}-item-group`]:{[`${t}-item-group-list`]:{margin:0,padding:0,[`${t}-item, ${t}-submenu-title`]:{paddingInline:`${Ze(e.calc(r).mul(2).equal())} ${Ze(s)}`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:u,borderRadius:f,boxShadow:"none",transformOrigin:"0 0",[`&${t}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},[`> ${t}`]:Object.assign(Object.assign(Object.assign({borderRadius:f},L1(e)),j1(e)),{[`${t}-item, ${t}-submenu > ${t}-submenu-title`]:{borderRadius:m},[`${t}-submenu-title::after`]:{transition:`transform ${o} ${a}`}})},"\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ":{transformOrigin:"100% 0"},"\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ":{transformOrigin:"100% 100%"},"\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ":{transformOrigin:"0 100%"},"\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ":{transformOrigin:"0 0"},"\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ":{paddingInlineEnd:e.paddingXS},"\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ":{paddingInlineStart:e.paddingXS},"\n          &-placement-topRight,\n          &-placement-topLeft\n          ":{paddingBottom:e.paddingXS},"\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ":{paddingTop:e.paddingXS}}}),j1(e)),{[`&-inline-collapsed ${t}-submenu-arrow,
        &-inline ${t}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${Ze(v)})`},"&::after":{transform:`rotate(45deg) translateX(${Ze(e.calc(v).mul(-1).equal())})`}},[`${t}-submenu-open${t}-submenu-inline > ${t}-submenu-title > ${t}-submenu-arrow`]:{transform:`translateY(${Ze(e.calc(h).mul(.2).mul(-1).equal())})`,"&::after":{transform:`rotate(-45deg) translateX(${Ze(e.calc(v).mul(-1).equal())})`},"&::before":{transform:`rotate(45deg) translateX(${Ze(v)})`}}})},{[`${n}-layout-header`]:{[t]:{lineHeight:"inherit"}}}]},jI=e=>{var n,t,r;const{colorPrimary:o,colorError:i,colorTextDisabled:a,colorErrorBg:l,colorText:s,colorTextDescription:c,colorBgContainer:d,colorFillAlter:u,colorFillContent:f,lineWidth:m,lineWidthBold:h,controlItemBgActive:v,colorBgTextHover:k,controlHeightLG:g,lineHeight:b,colorBgElevated:y,marginXXS:S,padding:A,fontSize:w,controlHeightSM:I,fontSizeLG:R,colorTextLightSolid:M,colorErrorHover:_}=e,D=(n=e.activeBarWidth)!==null&&n!==void 0?n:0,H=(t=e.activeBarBorderWidth)!==null&&t!==void 0?t:m,j=(r=e.itemMarginInline)!==null&&r!==void 0?r:e.marginXXS,B=new It(M).setAlpha(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:e.zIndexPopupBase+50,radiusItem:e.borderRadiusLG,itemBorderRadius:e.borderRadiusLG,radiusSubMenuItem:e.borderRadiusSM,subMenuItemBorderRadius:e.borderRadiusSM,colorItemText:s,itemColor:s,colorItemTextHover:s,itemHoverColor:s,colorItemTextHoverHorizontal:o,horizontalItemHoverColor:o,colorGroupTitle:c,groupTitleColor:c,colorItemTextSelected:o,itemSelectedColor:o,colorItemTextSelectedHorizontal:o,horizontalItemSelectedColor:o,colorItemBg:d,itemBg:d,colorItemBgHover:k,itemHoverBg:k,colorItemBgActive:f,itemActiveBg:v,colorSubItemBg:u,subMenuItemBg:u,colorItemBgSelected:v,itemSelectedBg:v,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:D,colorActiveBarHeight:h,activeBarHeight:h,colorActiveBarBorderSize:m,activeBarBorderWidth:H,colorItemTextDisabled:a,itemDisabledColor:a,colorDangerItemText:i,dangerItemColor:i,colorDangerItemTextHover:i,dangerItemHoverColor:i,colorDangerItemTextSelected:i,dangerItemSelectedColor:i,colorDangerItemBgActive:l,dangerItemActiveBg:l,colorDangerItemBgSelected:l,dangerItemSelectedBg:l,itemMarginInline:j,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:g,groupTitleLineHeight:b,collapsedWidth:g*2,popupBg:y,itemMarginBlock:S,itemPaddingInline:A,horizontalLineHeight:`${g*1.15}px`,iconSize:w,iconMarginInlineEnd:I-w,collapsedIconSize:R,groupTitleFontSize:w,darkItemDisabledColor:new It(M).setAlpha(.25).toRgbString(),darkItemColor:B,darkDangerItemColor:i,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:M,darkItemSelectedBg:o,darkDangerItemSelectedBg:i,darkItemHoverBg:"transparent",darkGroupTitleColor:B,darkItemHoverColor:M,darkDangerItemHoverColor:_,darkDangerItemSelectedColor:M,darkDangerItemActiveBg:i,itemWidth:D?`calc(100% + ${H}px)`:`calc(100% - ${j*2}px)`}},DI=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return Ii("Menu",o=>{const{colorBgElevated:i,controlHeightLG:a,fontSize:l,darkItemColor:s,darkDangerItemColor:c,darkItemBg:d,darkSubMenuItemBg:u,darkItemSelectedColor:f,darkItemSelectedBg:m,darkDangerItemSelectedBg:h,darkItemHoverBg:v,darkGroupTitleColor:k,darkItemHoverColor:g,darkItemDisabledColor:b,darkDangerItemHoverColor:y,darkDangerItemSelectedColor:S,darkDangerItemActiveBg:A,popupBg:w,darkPopupBg:I}=o,R=o.calc(l).div(7).mul(5).equal(),M=mr(o,{menuArrowSize:R,menuHorizontalHeight:o.calc(a).mul(1.15).equal(),menuArrowOffset:o.calc(R).mul(.25).equal(),menuSubMenuBg:i,calc:o.calc,popupBg:w}),_=mr(M,{itemColor:s,itemHoverColor:g,groupTitleColor:k,itemSelectedColor:f,itemBg:d,popupBg:I,subMenuItemBg:u,itemActiveBg:"transparent",itemSelectedBg:m,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:v,itemDisabledColor:b,dangerItemColor:c,dangerItemHoverColor:y,dangerItemSelectedColor:S,dangerItemActiveBg:A,dangerItemSelectedBg:h,menuSubMenuBg:u,horizontalItemSelectedColor:f,horizontalItemSelectedBg:m});return[LI(M),RI(M),MI(M),N1(M,"light"),N1(_,"dark"),NI(M),EA(M),f1(M,"slide-up"),f1(M,"slide-down"),fw(M,"zoom-big")]},jI,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:t,unitless:{groupTitleLineHeight:!0}})(e,n)},Dw=e=>{var n;const{popupClassName:t,icon:r,title:o,theme:i}=e,a=p.useContext(yu),{prefixCls:l,inlineCollapsed:s,theme:c}=a,d=La();let u;if(!r)u=s&&!d.length&&o&&typeof o=="string"?p.createElement("div",{className:`${l}-inline-collapsed-noicon`},o.charAt(0)):p.createElement("span",{className:`${l}-title-content`},o);else{const h=p.isValidElement(o)&&o.type==="span";u=p.createElement(p.Fragment,null,Ma(r,{className:We(p.isValidElement(r)?(n=r.props)===null||n===void 0?void 0:n.className:"",`${l}-item-icon`)}),h?o:p.createElement("span",{className:`${l}-title-content`},o))}const f=p.useMemo(()=>Object.assign(Object.assign({},a),{firstLevel:!1}),[a]),[m]=J3("Menu");return p.createElement(yu.Provider,{value:f},p.createElement(vd,Object.assign({},so(e,["icon"]),{title:u,popupClassName:We(l,t,`${l}-${i||c}`),popupStyle:{zIndex:m}})))};var BI=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};function If(e){return e===null||e===!1}const $I={item:jw,submenu:Dw,divider:Lw},zI=p.forwardRef((e,n)=>{var t;const r=p.useContext(F1),o=r||{},{getPrefixCls:i,getPopupContainer:a,direction:l,menu:s}=p.useContext(qn),c=i(),{prefixCls:d,className:u,style:f,theme:m="light",expandIcon:h,_internalDisableMenuItemTitleTooltip:v,inlineCollapsed:k,siderCollapsed:g,rootClassName:b,mode:y,selectable:S,onClick:A,overflowedIndicatorPopupClassName:w}=e,I=BI(e,["prefixCls","className","style","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),R=so(I,["collapsedWidth"]);(t=o.validator)===null||t===void 0||t.call(o,{mode:y});const M=at(function(){var Z;A==null||A.apply(void 0,arguments),(Z=o.onClick)===null||Z===void 0||Z.call(o)}),_=o.mode||y,D=S??o.selectable,H=p.useMemo(()=>g!==void 0?g:k,[k,g]),j={horizontal:{motionName:`${c}-slide-up`},inline:EE(c),other:{motionName:`${c}-zoom-big`}},B=i("menu",d||o.prefixCls),V=G0(B),[$,O,P]=DI(B,V,!r),W=We(`${B}-${m}`,s==null?void 0:s.className,u),x=p.useMemo(()=>{var Z,T;if(typeof h=="function"||If(h))return h||null;if(typeof o.expandIcon=="function"||If(o.expandIcon))return o.expandIcon||null;if(typeof(s==null?void 0:s.expandIcon)=="function"||If(s==null?void 0:s.expandIcon))return(s==null?void 0:s.expandIcon)||null;const Q=(Z=h??(o==null?void 0:o.expandIcon))!==null&&Z!==void 0?Z:s==null?void 0:s.expandIcon;return Ma(Q,{className:We(`${B}-submenu-expand-icon`,p.isValidElement(Q)?(T=Q.props)===null||T===void 0?void 0:T.className:void 0)})},[h,o==null?void 0:o.expandIcon,s==null?void 0:s.expandIcon,B]),G=p.useMemo(()=>({prefixCls:B,inlineCollapsed:H||!1,direction:l,firstLevel:!0,theme:m,mode:_,disableMenuItemTitleTooltip:v}),[B,H,l,v,m]);return $(p.createElement(F1.Provider,{value:null},p.createElement(yu.Provider,{value:G},p.createElement(ys,Object.assign({getPopupContainer:a,overflowedIndicator:p.createElement(OI,null),overflowedIndicatorPopupClassName:We(B,`${B}-${m}`,w),mode:_,selectable:D,onClick:M},R,{inlineCollapsed:H,style:Object.assign(Object.assign({},s==null?void 0:s.style),f),className:W,prefixCls:B,direction:l,defaultMotions:j,expandIcon:x,ref:n,rootClassName:We(b,O,o.rootClassName,P,V),_internalComponents:$I})))))}),ws=p.forwardRef((e,n)=>{const t=p.useRef(null),r=p.useContext(yd);return p.useImperativeHandle(n,()=>({menu:t.current,focus:o=>{var i;(i=t.current)===null||i===void 0||i.focus(o)}})),p.createElement(zI,Object.assign({ref:t},e,r))});ws.Item=jw;ws.SubMenu=Dw;ws.Divider=Lw;ws.ItemGroup=o2;function HI(e,n,t){return typeof t=="boolean"?t:e.length?!0:wi(n).some(o=>o.type===Mw)}const UI=e=>{const{componentCls:n,bodyBg:t,lightSiderBg:r,lightTriggerBg:o,lightTriggerColor:i}=e;return{[`${n}-sider-light`]:{background:r,[`${n}-sider-trigger`]:{color:i,background:o},[`${n}-sider-zero-width-trigger`]:{color:i,background:o,border:`1px solid ${t}`,borderInlineStart:0}}}},ZI=e=>{const{antCls:n,componentCls:t,colorText:r,triggerColor:o,footerBg:i,triggerBg:a,headerHeight:l,headerPadding:s,headerColor:c,footerPadding:d,triggerHeight:u,zeroTriggerHeight:f,zeroTriggerWidth:m,motionDurationMid:h,motionDurationSlow:v,fontSize:k,borderRadius:g,bodyBg:b,headerBg:y,siderBg:S}=e;return{[t]:Object.assign(Object.assign({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:b,"&, *":{boxSizing:"border-box"},[`&${t}-has-sider`]:{flexDirection:"row",[`> ${t}, > ${t}-content`]:{width:0}},[`${t}-header, &${t}-footer`]:{flex:"0 0 auto"},[`${t}-sider`]:{position:"relative",minWidth:0,background:S,transition:`all ${h}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${n}-menu${n}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:u},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:u,color:o,lineHeight:Ze(u),textAlign:"center",background:a,cursor:"pointer",transition:`all ${h}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:l,insetInlineEnd:e.calc(m).mul(-1).equal(),zIndex:1,width:m,height:f,color:o,fontSize:e.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:S,borderStartStartRadius:0,borderStartEndRadius:g,borderEndEndRadius:g,borderEndStartRadius:0,cursor:"pointer",transition:`background ${v} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${v}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:e.calc(m).mul(-1).equal(),borderStartStartRadius:g,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:g}}}}},UI(e)),{"&-rtl":{direction:"rtl"}}),[`${t}-header`]:{height:l,padding:s,color:c,lineHeight:Ze(l),background:y,[`${n}-menu`]:{lineHeight:"inherit"}},[`${t}-footer`]:{padding:d,color:r,fontSize:k,background:i},[`${t}-content`]:{flex:"auto",color:r,minHeight:0}}},WI=e=>{const{colorBgLayout:n,controlHeight:t,controlHeightLG:r,colorText:o,controlHeightSM:i,marginXXS:a,colorTextLightSolid:l,colorBgContainer:s}=e,c=r*1.25;return{colorBgHeader:"#001529",colorBgBody:n,colorBgTrigger:"#002140",bodyBg:n,headerBg:"#001529",headerHeight:t*2,headerPadding:`0 ${c}px`,headerColor:o,footerPadding:`${i}px ${c}px`,footerBg:n,siderBg:"#001529",triggerHeight:r+a*2,triggerBg:"#002140",triggerColor:l,zeroTriggerWidth:r,zeroTriggerHeight:r,lightSiderBg:s,lightTriggerBg:s,lightTriggerColor:o}},Bw=Ii("Layout",e=>[ZI(e)],WI,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]});var $w=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};function wd(e){let{suffixCls:n,tagName:t,displayName:r}=e;return o=>p.forwardRef((a,l)=>p.createElement(o,Object.assign({ref:l,suffixCls:n,tagName:t},a)))}const i2=p.forwardRef((e,n)=>{const{prefixCls:t,suffixCls:r,className:o,tagName:i}=e,a=$w(e,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:l}=p.useContext(qn),s=l("layout",t),[c,d,u]=Bw(s),f=r?`${s}-${r}`:s;return c(p.createElement(i,Object.assign({className:We(t||f,o,d,u),ref:n},a)))}),VI=p.forwardRef((e,n)=>{const{direction:t}=p.useContext(qn),[r,o]=p.useState([]),{prefixCls:i,className:a,rootClassName:l,children:s,hasSider:c,tagName:d,style:u}=e,f=$w(e,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),m=so(f,["suffixCls"]),{getPrefixCls:h,layout:v}=p.useContext(qn),k=h("layout",i),g=HI(r,s,c),[b,y,S]=Bw(k),A=We(k,{[`${k}-has-sider`]:g,[`${k}-rtl`]:t==="rtl"},v==null?void 0:v.className,a,l,y,S),w=p.useMemo(()=>({siderHook:{addSider:I=>{o(R=>[].concat(Ln(R),[I]))},removeSider:I=>{o(R=>R.filter(M=>M!==I))}}}),[]);return b(p.createElement(Nw.Provider,{value:w},p.createElement(d,Object.assign({ref:n,className:A,style:Object.assign(Object.assign({},v==null?void 0:v.style),u)},m),s)))}),XI=wd({tagName:"div",displayName:"Layout"})(VI),GI=wd({suffixCls:"header",tagName:"header",displayName:"Header"})(i2),qI=wd({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(i2),KI=wd({suffixCls:"content",tagName:"main",displayName:"Content"})(i2),_i=XI;_i.Header=GI;_i.Footer=qI;_i.Content=KI;_i.Sider=Mw;_i._InternalSiderContext=yd;const QI=e=>{const{componentCls:n,calc:t}=e;return{[n]:Object.assign(Object.assign({},md(e)),{margin:0,padding:0,listStyle:"none",[`${n}-item`]:{position:"relative",margin:0,paddingBottom:e.itemPaddingBottom,fontSize:e.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:e.itemHeadSize,insetInlineStart:t(t(e.itemHeadSize).sub(e.tailWidth)).div(2).equal(),height:`calc(100% - ${Ze(e.itemHeadSize)})`,borderInlineStart:`${Ze(e.tailWidth)} ${e.lineType} ${e.tailColor}`},"&-pending":{[`${n}-item-head`]:{fontSize:e.fontSizeSM,backgroundColor:"transparent"},[`${n}-item-tail`]:{display:"none"}},"&-head":{position:"absolute",width:e.itemHeadSize,height:e.itemHeadSize,backgroundColor:e.dotBg,border:`${Ze(e.dotBorderWidth)} ${e.lineType} transparent`,borderRadius:"50%","&-blue":{color:e.colorPrimary,borderColor:e.colorPrimary},"&-red":{color:e.colorError,borderColor:e.colorError},"&-green":{color:e.colorSuccess,borderColor:e.colorSuccess},"&-gray":{color:e.colorTextDisabled,borderColor:e.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:t(e.itemHeadSize).div(2).equal(),insetInlineStart:t(e.itemHeadSize).div(2).equal(),width:"auto",height:"auto",marginBlockStart:0,paddingBlock:e.customHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:t(t(e.fontSize).mul(e.lineHeight).sub(e.fontSize)).mul(-1).add(e.lineWidth).equal(),marginInlineStart:t(e.margin).add(e.itemHeadSize).equal(),marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":{[`> ${n}-item-tail`]:{display:"none"},[`> ${n}-item-content`]:{minHeight:t(e.controlHeightLG).mul(1.2).equal()}}},[`&${n}-alternate,
        &${n}-right,
        &${n}-label`]:{[`${n}-item`]:{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:t(e.marginXXS).mul(-1).equal(),"&-custom":{marginInlineStart:t(e.tailWidth).div(2).equal()}},"&-left":{[`${n}-item-content`]:{insetInlineStart:`calc(50% - ${Ze(e.marginXXS)})`,width:`calc(50% - ${Ze(e.marginSM)})`,textAlign:"start"}},"&-right":{[`${n}-item-content`]:{width:`calc(50% - ${Ze(e.marginSM)})`,margin:0,textAlign:"end"}}}},[`&${n}-right`]:{[`${n}-item-right`]:{[`${n}-item-tail,
            ${n}-item-head,
            ${n}-item-head-custom`]:{insetInlineStart:`calc(100% - ${Ze(t(t(e.itemHeadSize).add(e.tailWidth)).div(2).equal())})`},[`${n}-item-content`]:{width:`calc(100% - ${Ze(t(e.itemHeadSize).add(e.marginXS).equal())})`}}},[`&${n}-pending
        ${n}-item-last
        ${n}-item-tail`]:{display:"block",height:`calc(100% - ${Ze(e.margin)})`,borderInlineStart:`${Ze(e.tailWidth)} dotted ${e.tailColor}`},[`&${n}-reverse
        ${n}-item-last
        ${n}-item-tail`]:{display:"none"},[`&${n}-reverse ${n}-item-pending`]:{[`${n}-item-tail`]:{insetBlockStart:e.margin,display:"block",height:`calc(100% - ${Ze(e.margin)})`,borderInlineStart:`${Ze(e.tailWidth)} dotted ${e.tailColor}`},[`${n}-item-content`]:{minHeight:t(e.controlHeightLG).mul(1.2).equal()}},[`&${n}-label`]:{[`${n}-item-label`]:{position:"absolute",insetBlockStart:t(t(e.fontSize).mul(e.lineHeight).sub(e.fontSize)).mul(-1).add(e.tailWidth).equal(),width:`calc(50% - ${Ze(e.marginSM)})`,textAlign:"end"},[`${n}-item-right`]:{[`${n}-item-label`]:{insetInlineStart:`calc(50% + ${Ze(e.marginSM)})`,width:`calc(50% - ${Ze(e.marginSM)})`,textAlign:"start"}}},"&-rtl":{direction:"rtl",[`${n}-item-head-custom`]:{transform:"translate(50%, -50%)"}}})}},YI=e=>({tailColor:e.colorSplit,tailWidth:e.lineWidthBold,dotBorderWidth:e.wireframe?e.lineWidthBold:e.lineWidth*3,dotBg:e.colorBgContainer,itemPaddingBottom:e.padding*1.25}),JI=Ii("Timeline",e=>{const n=mr(e,{itemHeadSize:10,customHeadPaddingVertical:e.paddingXXS,paddingInlineEnd:2});return[QI(n)]},YI);var e_=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const zw=e=>{var{prefixCls:n,className:t,color:r="blue",dot:o,pending:i=!1,position:a,label:l,children:s}=e,c=e_(e,["prefixCls","className","color","dot","pending","position","label","children"]);const{getPrefixCls:d}=p.useContext(qn),u=d("timeline",n),f=We(`${u}-item`,{[`${u}-item-pending`]:i},t),m=/blue|red|green|gray/.test(r||"")?void 0:r,h=We(`${u}-item-head`,{[`${u}-item-head-custom`]:!!o,[`${u}-item-head-${r}`]:!m});return p.createElement("li",Object.assign({},c,{className:f}),l&&p.createElement("div",{className:`${u}-item-label`},l),p.createElement("div",{className:`${u}-item-tail`}),p.createElement("div",{className:h,style:{borderColor:m,color:m}},o),p.createElement("div",{className:`${u}-item-content`},s))};var D1=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const n_=e=>{var{prefixCls:n,className:t,pending:r=!1,children:o,items:i,rootClassName:a,reverse:l=!1,direction:s,hashId:c,pendingDot:d,mode:u=""}=e,f=D1(e,["prefixCls","className","pending","children","items","rootClassName","reverse","direction","hashId","pendingDot","mode"]);const m=(A,w)=>u==="alternate"?A==="right"?`${n}-item-right`:A==="left"?`${n}-item-left`:w%2===0?`${n}-item-left`:`${n}-item-right`:u==="left"?`${n}-item-left`:u==="right"?`${n}-item-right`:A==="right"?`${n}-item-right`:"",h=Ln(i||[]),v=typeof r=="boolean"?null:r;r&&h.push({pending:!!r,dot:d||p.createElement(K3,null),children:v}),l&&h.reverse();const k=h.length,g=`${n}-item-last`,b=h.filter(A=>!!A).map((A,w)=>{var I;const R=w===k-2?g:"",M=w===k-1?g:"",{className:_}=A,D=D1(A,["className"]);return p.createElement(zw,Object.assign({},D,{className:We([_,!l&&r?R:M,m((I=A==null?void 0:A.position)!==null&&I!==void 0?I:"",w)]),key:(A==null?void 0:A.key)||w}))}),y=h.some(A=>!!(A!=null&&A.label)),S=We(n,{[`${n}-pending`]:!!r,[`${n}-reverse`]:!!l,[`${n}-${u}`]:!!u&&!y,[`${n}-label`]:y,[`${n}-rtl`]:s==="rtl"},t,a,c);return p.createElement("ul",Object.assign({},f,{className:S}),b)};function t_(e,n){return e&&Array.isArray(e)?e:wi(n).map(t=>{var r,o;return Object.assign({children:(o=(r=t==null?void 0:t.props)===null||r===void 0?void 0:r.children)!==null&&o!==void 0?o:""},t.props)})}var r_=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const Hw=e=>{const{getPrefixCls:n,direction:t,timeline:r}=p.useContext(qn),{prefixCls:o,children:i,items:a,className:l,style:s}=e,c=r_(e,["prefixCls","children","items","className","style"]),d=n("timeline",o),u=G0(d),[f,m,h]=JI(d,u),v=t_(a,i);return f(p.createElement(n_,Object.assign({},c,{className:We(r==null?void 0:r.className,l,h,u),style:Object.assign(Object.assign({},r==null?void 0:r.style),s),prefixCls:d,direction:t,items:v,hashId:m})))};Hw.Item=zw;var a2={},Uw={exports:{}},o_="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",i_=o_,a_=i_;function Zw(){}function Ww(){}Ww.resetWarningCache=Zw;var l_=function(){function e(r,o,i,a,l,s){if(s!==a_){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:Ww,resetWarningCache:Zw};return t.PropTypes=t,t};Uw.exports=l_();var s_=Uw.exports,Vw={},xh={exports:{}};/*!

 diff v4.0.1

Software License Agreement (BSD License)

Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>

All rights reserved.

Redistribution and use of this software in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above
  copyright notice, this list of conditions and the
  following disclaimer.

* Redistributions in binary form must reproduce the above
  copyright notice, this list of conditions and the
  following disclaimer in the documentation and/or other
  materials provided with the distribution.

* Neither the name of Kevin Decker nor the names of its
  contributors may be used to endorse or promote products
  derived from this software without specific prior
  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
@license
*/(function(e,n){(function(t,r){r(n)})(Gt,function(t){function r(){}r.prototype={diff:function(E,F){var z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},q=z.callback;typeof z=="function"&&(q=z,z={}),this.options=z;var K=this;function re(Xe){return q?(setTimeout(function(){q(void 0,Xe)},0),!0):Xe}E=this.castInput(E),F=this.castInput(F),E=this.removeEmpty(this.tokenize(E)),F=this.removeEmpty(this.tokenize(F));var ie=F.length,he=E.length,ce=1,we=ie+he,ze=[{newPos:-1,components:[]}],Ee=this.extractCommon(ze[0],F,E,0);if(ze[0].newPos+1>=ie&&Ee+1>=he)return re([{value:this.join(F),count:F.length}]);function Ye(){for(var Xe=-1*ce;Xe<=ce;Xe+=2){var sn=void 0,an=ze[Xe-1],Je=ze[Xe+1],_e=(Je?Je.newPos:0)-Xe;an&&(ze[Xe-1]=void 0);var qe=an&&an.newPos+1<ie,De=Je&&0<=_e&&_e<he;if(!qe&&!De){ze[Xe]=void 0;continue}if(!qe||De&&an.newPos<Je.newPos?(sn=i(Je),K.pushComponent(sn.components,void 0,!0)):(sn=an,sn.newPos++,K.pushComponent(sn.components,!0,void 0)),_e=K.extractCommon(sn,F,E,Xe),sn.newPos+1>=ie&&_e+1>=he)return re(o(K,sn.components,F,E,K.useLongestToken));ze[Xe]=sn}ce++}if(q)(function Xe(){setTimeout(function(){if(ce>we)return q();Ye()||Xe()},0)})();else for(;ce<=we;){var rn=Ye();if(rn)return rn}},pushComponent:function(E,F,z){var q=E[E.length-1];q&&q.added===F&&q.removed===z?E[E.length-1]={count:q.count+1,added:F,removed:z}:E.push({count:1,added:F,removed:z})},extractCommon:function(E,F,z,q){for(var K=F.length,re=z.length,ie=E.newPos,he=ie-q,ce=0;ie+1<K&&he+1<re&&this.equals(F[ie+1],z[he+1]);)ie++,he++,ce++;return ce&&E.components.push({count:ce}),E.newPos=ie,he},equals:function(E,F){return this.options.comparator?this.options.comparator(E,F):E===F||this.options.ignoreCase&&E.toLowerCase()===F.toLowerCase()},removeEmpty:function(E){for(var F=[],z=0;z<E.length;z++)E[z]&&F.push(E[z]);return F},castInput:function(E){return E},tokenize:function(E){return E.split("")},join:function(E){return E.join("")}};function o(C,E,F,z,q){for(var K=0,re=E.length,ie=0,he=0;K<re;K++){var ce=E[K];if(ce.removed){if(ce.value=C.join(z.slice(he,he+ce.count)),he+=ce.count,K&&E[K-1].added){var ze=E[K-1];E[K-1]=E[K],E[K]=ze}}else{if(!ce.added&&q){var we=F.slice(ie,ie+ce.count);we=we.map(function(Ye,rn){var Xe=z[he+rn];return Xe.length>Ye.length?Xe:Ye}),ce.value=C.join(we)}else ce.value=C.join(F.slice(ie,ie+ce.count));ie+=ce.count,ce.added||(he+=ce.count)}}var Ee=E[re-1];return re>1&&typeof Ee.value=="string"&&(Ee.added||Ee.removed)&&C.equals("",Ee.value)&&(E[re-2].value+=Ee.value,E.pop()),E}function i(C){return{newPos:C.newPos,components:C.components.slice(0)}}var a=new r;function l(C,E,F){return a.diff(C,E,F)}function s(C,E){if(typeof C=="function")E.callback=C;else if(C)for(var F in C)C.hasOwnProperty(F)&&(E[F]=C[F]);return E}var c=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,d=/\S/,u=new r;u.equals=function(C,E){return this.options.ignoreCase&&(C=C.toLowerCase(),E=E.toLowerCase()),C===E||this.options.ignoreWhitespace&&!d.test(C)&&!d.test(E)},u.tokenize=function(C){for(var E=C.split(/(\s+|[()[\]{}'"]|\b)/),F=0;F<E.length-1;F++)!E[F+1]&&E[F+2]&&c.test(E[F])&&c.test(E[F+2])&&(E[F]+=E[F+2],E.splice(F+1,2),F--);return E};function f(C,E,F){return F=s(F,{ignoreWhitespace:!0}),u.diff(C,E,F)}function m(C,E,F){return u.diff(C,E,F)}var h=new r;h.tokenize=function(C){var E=[],F=C.split(/(\n|\r\n)/);F[F.length-1]||F.pop();for(var z=0;z<F.length;z++){var q=F[z];z%2&&!this.options.newlineIsToken?E[E.length-1]+=q:(this.options.ignoreWhitespace&&(q=q.trim()),E.push(q))}return E};function v(C,E,F){return h.diff(C,E,F)}function k(C,E,F){var z=s(F,{ignoreWhitespace:!0});return h.diff(C,E,z)}var g=new r;g.tokenize=function(C){return C.split(/(\S.+?[.!?])(?=\s+|$)/)};function b(C,E,F){return g.diff(C,E,F)}var y=new r;y.tokenize=function(C){return C.split(/([{}:;,]|\s+)/)};function S(C,E,F){return y.diff(C,E,F)}function A(C){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?A=function(E){return typeof E}:A=function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},A(C)}function w(C){return I(C)||R(C)||M()}function I(C){if(Array.isArray(C)){for(var E=0,F=new Array(C.length);E<C.length;E++)F[E]=C[E];return F}}function R(C){if(Symbol.iterator in Object(C)||Object.prototype.toString.call(C)==="[object Arguments]")return Array.from(C)}function M(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var _=Object.prototype.toString,D=new r;D.useLongestToken=!0,D.tokenize=h.tokenize,D.castInput=function(C){var E=this.options,F=E.undefinedReplacement,z=E.stringifyReplacer,q=z===void 0?function(K,re){return typeof re>"u"?F:re}:z;return typeof C=="string"?C:JSON.stringify(j(C,null,null,q),q,"  ")},D.equals=function(C,E){return r.prototype.equals.call(D,C.replace(/,([\r\n])/g,"$1"),E.replace(/,([\r\n])/g,"$1"))};function H(C,E,F){return D.diff(C,E,F)}function j(C,E,F,z,q){E=E||[],F=F||[],z&&(C=z(q,C));var K;for(K=0;K<E.length;K+=1)if(E[K]===C)return F[K];var re;if(_.call(C)==="[object Array]"){for(E.push(C),re=new Array(C.length),F.push(re),K=0;K<C.length;K+=1)re[K]=j(C[K],E,F,z,q);return E.pop(),F.pop(),re}if(C&&C.toJSON&&(C=C.toJSON()),A(C)==="object"&&C!==null){E.push(C),re={},F.push(re);var ie=[],he;for(he in C)C.hasOwnProperty(he)&&ie.push(he);for(ie.sort(),K=0;K<ie.length;K+=1)he=ie[K],re[he]=j(C[he],E,F,z,he);E.pop(),F.pop()}else re=C;return re}var B=new r;B.tokenize=function(C){return C.slice()},B.join=B.removeEmpty=function(C){return C};function V(C,E,F){return B.diff(C,E,F)}function $(C){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},F=C.split(/\r\n|[\n\v\f\r\x85]/),z=C.match(/\r\n|[\n\v\f\r\x85]/g)||[],q=[],K=0;function re(){var ce={};for(q.push(ce);K<F.length;){var we=F[K];if(/^(\-\-\-|\+\+\+|@@)\s/.test(we))break;var ze=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(we);ze&&(ce.index=ze[1]),K++}for(ie(ce),ie(ce),ce.hunks=[];K<F.length;){var Ee=F[K];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(Ee))break;if(/^@@/.test(Ee))ce.hunks.push(he());else{if(Ee&&E.strict)throw new Error("Unknown line "+(K+1)+" "+JSON.stringify(Ee));K++}}}function ie(ce){var we=/^(---|\+\+\+)\s+(.*)$/.exec(F[K]);if(we){var ze=we[1]==="---"?"old":"new",Ee=we[2].split("	",2),Ye=Ee[0].replace(/\\\\/g,"\\");/^".*"$/.test(Ye)&&(Ye=Ye.substr(1,Ye.length-2)),ce[ze+"FileName"]=Ye,ce[ze+"Header"]=(Ee[1]||"").trim(),K++}}function he(){for(var ce=K,we=F[K++],ze=we.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),Ee={oldStart:+ze[1],oldLines:+ze[2]||1,newStart:+ze[3],newLines:+ze[4]||1,lines:[],linedelimiters:[]},Ye=0,rn=0;K<F.length&&!(F[K].indexOf("--- ")===0&&K+2<F.length&&F[K+1].indexOf("+++ ")===0&&F[K+2].indexOf("@@")===0);K++){var Xe=F[K].length==0&&K!=F.length-1?" ":F[K][0];if(Xe==="+"||Xe==="-"||Xe===" "||Xe==="\\")Ee.lines.push(F[K]),Ee.linedelimiters.push(z[K]||`
`),Xe==="+"?Ye++:Xe==="-"?rn++:Xe===" "&&(Ye++,rn++);else break}if(!Ye&&Ee.newLines===1&&(Ee.newLines=0),!rn&&Ee.oldLines===1&&(Ee.oldLines=0),E.strict){if(Ye!==Ee.newLines)throw new Error("Added line count did not match for hunk at line "+(ce+1));if(rn!==Ee.oldLines)throw new Error("Removed line count did not match for hunk at line "+(ce+1))}return Ee}for(;K<F.length;)re();return q}function O(C,E,F){var z=!0,q=!1,K=!1,re=1;return function ie(){if(z&&!K){if(q?re++:z=!1,C+re<=F)return re;K=!0}if(!q)return K||(z=!0),E<=C-re?-re++:(q=!0,ie())}}function P(C,E){var F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof E=="string"&&(E=$(E)),Array.isArray(E)){if(E.length>1)throw new Error("applyPatch only works with a single input.");E=E[0]}var z=C.split(/\r\n|[\n\v\f\r\x85]/),q=C.match(/\r\n|[\n\v\f\r\x85]/g)||[],K=E.hunks,re=F.compareLine||function(Fe,le,He,fe){return le===fe},ie=0,he=F.fuzzFactor||0,ce=0,we=0,ze,Ee;function Ye(Fe,le){for(var He=0;He<Fe.lines.length;He++){var fe=Fe.lines[He],$e=fe.length>0?fe[0]:" ",cn=fe.length>0?fe.substr(1):fe;if($e===" "||$e==="-"){if(!re(le+1,z[le],$e,cn)&&(ie++,ie>he))return!1;le++}}return!0}for(var rn=0;rn<K.length;rn++){for(var Xe=K[rn],sn=z.length-Xe.oldLines,an=0,Je=we+Xe.oldStart-1,_e=O(Je,ce,sn);an!==void 0;an=_e())if(Ye(Xe,Je+an)){Xe.offset=we+=an;break}if(an===void 0)return!1;ce=Xe.offset+Xe.oldStart+Xe.oldLines}for(var qe=0,De=0;De<K.length;De++){var Se=K[De],Ne=Se.oldStart+Se.offset+qe-1;qe+=Se.newLines-Se.oldLines,Ne<0&&(Ne=0);for(var en=0;en<Se.lines.length;en++){var L=Se.lines[en],U=L.length>0?L[0]:" ",X=L.length>0?L.substr(1):L,ee=Se.linedelimiters[en];if(U===" ")Ne++;else if(U==="-")z.splice(Ne,1),q.splice(Ne,1);else if(U==="+")z.splice(Ne,0,X),q.splice(Ne,0,ee),Ne++;else if(U==="\\"){var be=Se.lines[en-1]?Se.lines[en-1][0]:null;be==="+"?ze=!0:be==="-"&&(Ee=!0)}}}if(ze)for(;!z[z.length-1];)z.pop(),q.pop();else Ee&&(z.push(""),q.push(`
`));for(var ke=0;ke<z.length-1;ke++)z[ke]=z[ke]+q[ke];return z.join("")}function W(C,E){typeof C=="string"&&(C=$(C));var F=0;function z(){var q=C[F++];if(!q)return E.complete();E.loadFile(q,function(K,re){if(K)return E.complete(K);var ie=P(re,q,E);E.patched(q,ie,function(he){if(he)return E.complete(he);z()})})}z()}function x(C,E,F,z,q,K,re){re||(re={}),typeof re.context>"u"&&(re.context=4);var ie=v(F,z,re);ie.push({value:"",lines:[]});function he(an){return an.map(function(Je){return" "+Je})}for(var ce=[],we=0,ze=0,Ee=[],Ye=1,rn=1,Xe=function(Je){var _e=ie[Je],qe=_e.lines||_e.value.replace(/\n$/,"").split(`
`);if(_e.lines=qe,_e.added||_e.removed){var De;if(!we){var Se=ie[Je-1];we=Ye,ze=rn,Se&&(Ee=re.context>0?he(Se.lines.slice(-re.context)):[],we-=Ee.length,ze-=Ee.length)}(De=Ee).push.apply(De,w(qe.map(function(ke){return(_e.added?"+":"-")+ke}))),_e.added?rn+=qe.length:Ye+=qe.length}else{if(we)if(qe.length<=re.context*2&&Je<ie.length-2){var Ne;(Ne=Ee).push.apply(Ne,w(he(qe)))}else{var en,L=Math.min(qe.length,re.context);(en=Ee).push.apply(en,w(he(qe.slice(0,L))));var U={oldStart:we,oldLines:Ye-we+L,newStart:ze,newLines:rn-ze+L,lines:Ee};if(Je>=ie.length-2&&qe.length<=re.context){var X=/\n$/.test(F),ee=/\n$/.test(z),be=qe.length==0&&Ee.length>U.oldLines;!X&&be&&Ee.splice(U.oldLines,0,"\\ No newline at end of file"),(!X&&!be||!ee)&&Ee.push("\\ No newline at end of file")}ce.push(U),we=0,ze=0,Ee=[]}Ye+=qe.length,rn+=qe.length}},sn=0;sn<ie.length;sn++)Xe(sn);return{oldFileName:C,newFileName:E,oldHeader:q,newHeader:K,hunks:ce}}function G(C,E,F,z,q,K,re){var ie=x(C,E,F,z,q,K,re),he=[];C==E&&he.push("Index: "+C),he.push("==================================================================="),he.push("--- "+ie.oldFileName+(typeof ie.oldHeader>"u"?"":"	"+ie.oldHeader)),he.push("+++ "+ie.newFileName+(typeof ie.newHeader>"u"?"":"	"+ie.newHeader));for(var ce=0;ce<ie.hunks.length;ce++){var we=ie.hunks[ce];he.push("@@ -"+we.oldStart+","+we.oldLines+" +"+we.newStart+","+we.newLines+" @@"),he.push.apply(he,we.lines)}return he.join(`
`)+`
`}function Z(C,E,F,z,q,K){return G(C,C,E,F,z,q,K)}function T(C,E){return C.length!==E.length?!1:Q(C,E)}function Q(C,E){if(E.length>C.length)return!1;for(var F=0;F<E.length;F++)if(E[F]!==C[F])return!1;return!0}function ne(C){var E=Qe(C.lines),F=E.oldLines,z=E.newLines;F!==void 0?C.oldLines=F:delete C.oldLines,z!==void 0?C.newLines=z:delete C.newLines}function N(C,E,F){C=te(C,F),E=te(E,F);var z={};(C.index||E.index)&&(z.index=C.index||E.index),(C.newFileName||E.newFileName)&&(Y(C)?Y(E)?(z.oldFileName=ye(z,C.oldFileName,E.oldFileName),z.newFileName=ye(z,C.newFileName,E.newFileName),z.oldHeader=ye(z,C.oldHeader,E.oldHeader),z.newHeader=ye(z,C.newHeader,E.newHeader)):(z.oldFileName=C.oldFileName,z.newFileName=C.newFileName,z.oldHeader=C.oldHeader,z.newHeader=C.newHeader):(z.oldFileName=E.oldFileName||C.oldFileName,z.newFileName=E.newFileName||C.newFileName,z.oldHeader=E.oldHeader||C.oldHeader,z.newHeader=E.newHeader||C.newHeader)),z.hunks=[];for(var q=0,K=0,re=0,ie=0;q<C.hunks.length||K<E.hunks.length;){var he=C.hunks[q]||{oldStart:1/0},ce=E.hunks[K]||{oldStart:1/0};if(ge(he,ce))z.hunks.push(Ce(he,re)),q++,ie+=he.newLines-he.oldLines;else if(ge(ce,he))z.hunks.push(Ce(ce,ie)),K++,re+=ce.newLines-ce.oldLines;else{var we={oldStart:Math.min(he.oldStart,ce.oldStart),oldLines:0,newStart:Math.min(he.newStart+re,ce.oldStart+ie),newLines:0,lines:[]};se(we,he.oldStart,he.lines,ce.oldStart,ce.lines),K++,q++,z.hunks.push(we)}}return z}function te(C,E){if(typeof C=="string"){if(/^@@/m.test(C)||/^Index:/m.test(C))return $(C)[0];if(!E)throw new Error("Must provide a base reference or pass in a patch");return x(void 0,void 0,E,C)}return C}function Y(C){return C.newFileName&&C.newFileName!==C.oldFileName}function ye(C,E,F){return E===F?E:(C.conflict=!0,{mine:E,theirs:F})}function ge(C,E){return C.oldStart<E.oldStart&&C.oldStart+C.oldLines<E.oldStart}function Ce(C,E){return{oldStart:C.oldStart,oldLines:C.oldLines,newStart:C.newStart+E,newLines:C.newLines,lines:C.lines}}function se(C,E,F,z,q){var K={offset:E,lines:F,index:0},re={offset:z,lines:q,index:0};for(ae(C,K,re),ae(C,re,K);K.index<K.lines.length&&re.index<re.lines.length;){var ie=K.lines[K.index],he=re.lines[re.index];if((ie[0]==="-"||ie[0]==="+")&&(he[0]==="-"||he[0]==="+"))Ge(C,K,re);else if(ie[0]==="+"&&he[0]===" "){var ce;(ce=C.lines).push.apply(ce,w(xe(K)))}else if(he[0]==="+"&&ie[0]===" "){var we;(we=C.lines).push.apply(we,w(xe(re)))}else ie[0]==="-"&&he[0]===" "?Ve(C,K,re):he[0]==="-"&&ie[0]===" "?Ve(C,re,K,!0):ie===he?(C.lines.push(ie),K.index++,re.index++):Ae(C,xe(K),xe(re))}de(C,K),de(C,re),ne(C)}function Ge(C,E,F){var z=xe(E),q=xe(F);if(Oe(z)&&Oe(q)){if(Q(z,q)&&Le(F,z,z.length-q.length)){var K;(K=C.lines).push.apply(K,w(z));return}else if(Q(q,z)&&Le(E,q,q.length-z.length)){var re;(re=C.lines).push.apply(re,w(q));return}}else if(T(z,q)){var ie;(ie=C.lines).push.apply(ie,w(z));return}Ae(C,z,q)}function Ve(C,E,F,z){var q=xe(E),K=Te(F,q);if(K.merged){var re;(re=C.lines).push.apply(re,w(K.merged))}else Ae(C,z?K:q,z?q:K)}function Ae(C,E,F){C.conflict=!0,C.lines.push({conflict:!0,mine:E,theirs:F})}function ae(C,E,F){for(;E.offset<F.offset&&E.index<E.lines.length;){var z=E.lines[E.index++];C.lines.push(z),E.offset++}}function de(C,E){for(;E.index<E.lines.length;){var F=E.lines[E.index++];C.lines.push(F)}}function xe(C){for(var E=[],F=C.lines[C.index][0];C.index<C.lines.length;){var z=C.lines[C.index];if(F==="-"&&z[0]==="+"&&(F="+"),F===z[0])E.push(z),C.index++;else break}return E}function Te(C,E){for(var F=[],z=[],q=0,K=!1,re=!1;q<E.length&&C.index<C.lines.length;){var ie=C.lines[C.index],he=E[q];if(he[0]==="+")break;if(K=K||ie[0]!==" ",z.push(he),q++,ie[0]==="+")for(re=!0;ie[0]==="+";)F.push(ie),ie=C.lines[++C.index];he.substr(1)===ie.substr(1)?(F.push(ie),C.index++):re=!0}if((E[q]||"")[0]==="+"&&K&&(re=!0),re)return F;for(;q<E.length;)z.push(E[q++]);return{merged:z,changes:F}}function Oe(C){return C.reduce(function(E,F){return E&&F[0]==="-"},!0)}function Le(C,E,F){for(var z=0;z<F;z++){var q=E[E.length-F+z].substr(1);if(C.lines[C.index+z]!==" "+q)return!1}return C.index+=F,!0}function Qe(C){var E=0,F=0;return C.forEach(function(z){if(typeof z!="string"){var q=Qe(z.mine),K=Qe(z.theirs);E!==void 0&&(q.oldLines===K.oldLines?E+=q.oldLines:E=void 0),F!==void 0&&(q.newLines===K.newLines?F+=q.newLines:F=void 0)}else F!==void 0&&(z[0]==="+"||z[0]===" ")&&F++,E!==void 0&&(z[0]==="-"||z[0]===" ")&&E++}),{oldLines:E,newLines:F}}function Ie(C){for(var E=[],F,z,q=0;q<C.length;q++)F=C[q],F.added?z=1:F.removed?z=-1:z=0,E.push([z,F.value]);return E}function oe(C){for(var E=[],F=0;F<C.length;F++){var z=C[F];z.added?E.push("<ins>"):z.removed&&E.push("<del>"),E.push(je(z.value)),z.added?E.push("</ins>"):z.removed&&E.push("</del>")}return E.join("")}function je(C){var E=C;return E=E.replace(/&/g,"&amp;"),E=E.replace(/</g,"&lt;"),E=E.replace(/>/g,"&gt;"),E=E.replace(/"/g,"&quot;"),E}t.Diff=r,t.diffChars=l,t.diffWords=f,t.diffWordsWithSpace=m,t.diffLines=v,t.diffTrimmedLines=k,t.diffSentences=b,t.diffCss=S,t.diffJson=H,t.diffArrays=V,t.structuredPatch=x,t.createTwoFilesPatch=G,t.createPatch=Z,t.applyPatch=P,t.applyPatches=W,t.parsePatch=$,t.merge=N,t.convertChangesToDMP=Ie,t.convertChangesToXML=oe,t.canonicalize=j,Object.defineProperty(t,"__esModule",{value:!0})})})(xh,xh.exports);var c_=xh.exports;(function(e){var n=Gt&&Gt.__read||function(d,u){var f=typeof Symbol=="function"&&d[Symbol.iterator];if(!f)return d;var m=f.call(d),h,v=[],k;try{for(;(u===void 0||u-- >0)&&!(h=m.next()).done;)v.push(h.value)}catch(g){k={error:g}}finally{try{h&&!h.done&&(f=m.return)&&f.call(m)}finally{if(k)throw k.error}}return v},t=Gt&&Gt.__spread||function(){for(var d=[],u=0;u<arguments.length;u++)d=d.concat(n(arguments[u]));return d};Object.defineProperty(e,"__esModule",{value:!0});var r=c_,o=r,i;(function(d){d[d.DEFAULT=0]="DEFAULT",d[d.ADDED=1]="ADDED",d[d.REMOVED=2]="REMOVED"})(i=e.DiffType||(e.DiffType={}));var a;(function(d){d.CHARS="diffChars",d.WORDS="diffWords",d.WORDS_WITH_SPACE="diffWordsWithSpace",d.LINES="diffLines",d.TRIMMED_LINES="diffTrimmedLines",d.SENTENCES="diffSentences",d.CSS="diffCss"})(a=e.DiffMethod||(e.DiffMethod={}));var l=function(d){var u=d.split(`
`),f=u.every(function(v){return!v});if(f)return u.length===2?[]:(u.pop(),u);var m=u[u.length-1],h=u[0];return m||u.pop(),h||u.shift(),u},s=function(d,u,f){f===void 0&&(f=a.CHARS);var m=o[f](d,u),h={left:[],right:[]};return m.forEach(function(v){var k=v.added,g=v.removed,b=v.value,y={};return k&&(y.type=i.ADDED,y.value=b,h.right.push(y)),g&&(y.type=i.REMOVED,y.value=b,h.left.push(y)),!g&&!k&&(y.type=i.DEFAULT,y.value=b,h.right.push(y),h.left.push(y)),y}),h},c=function(d,u,f,m,h){f===void 0&&(f=!1),m===void 0&&(m=a.CHARS),h===void 0&&(h=0);var v=r.diffLines(d.trimRight(),u.trimRight(),{newlineIsToken:!0,ignoreWhitespace:!1,ignoreCase:!1}),k=h,g=h,b=[],y=0,S=[],A=[],w=function(I,R,M,_,D){var H=l(I);return H.map(function(j,B){var V={},$={};if(!(A.includes(R+"-"+B)||D&&B!==0)){if(M||_)if(S.includes(y)||S.push(y),_){g+=1,V.lineNumber=g,V.type=i.REMOVED,V.value=j||" ";var O=v[R+1];if(O&&O.added){var P=l(O.value)[B];if(P){var W=w(O.value,R,!0,!1,!0)[0].right,x=W.value,G=W.lineNumber,Z=W.type;if(A.push(R+1+"-"+B),$.lineNumber=G,$.type=Z,f)$.value=x;else{var T=s(j,x,m);$.value=T.right,V.value=T.left}}}}else k+=1,$.lineNumber=k,$.type=i.ADDED,$.value=j;else g+=1,k+=1,V.lineNumber=g,V.type=i.DEFAULT,V.value=j,$.lineNumber=k,$.type=i.DEFAULT,$.value=j;return y+=1,{right:$,left:V}}}).filter(Boolean)};return v.forEach(function(I,R){var M=I.added,_=I.removed,D=I.value;b=t(b,w(D,R,M,_))}),{lineInformation:b,diffLines:S}};e.computeLineInformation=c})(Vw);var l2={};function u_(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}function d_(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),e.nonce!==void 0&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n}var f_=function(){function e(t){this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.before=null}var n=e.prototype;return n.insert=function(r){if(this.ctr%(this.isSpeedy?65e3:1)===0){var o=d_(this),i;this.tags.length===0?i=this.before:i=this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(o,i),this.tags.push(o)}var a=this.tags[this.tags.length-1];if(this.isSpeedy){var l=u_(a);try{var s=r.charCodeAt(1)===105&&r.charCodeAt(0)===64;l.insertRule(r,s?0:l.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},n.flush=function(){this.tags.forEach(function(r){return r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}();function m_(e){function n(Z,T,Q,ne,N){for(var te=0,Y=0,ye=0,ge=0,Ce,se,Ge=0,Ve=0,Ae,ae=Ae=Ce=0,de=0,xe=0,Te=0,Oe=0,Le=Q.length,Qe=Le-1,Ie,oe="",je="",C="",E="",F;de<Le;){if(se=Q.charCodeAt(de),de===Qe&&Y+ge+ye+te!==0&&(Y!==0&&(se=Y===47?10:47),ge=ye=te=0,Le++,Qe++),Y+ge+ye+te===0){if(de===Qe&&(0<xe&&(oe=oe.replace(f,"")),0<oe.trim().length)){switch(se){case 32:case 9:case 59:case 13:case 10:break;default:oe+=Q.charAt(de)}se=59}switch(se){case 123:for(oe=oe.trim(),Ce=oe.charCodeAt(0),Ae=1,Oe=++de;de<Le;){switch(se=Q.charCodeAt(de)){case 123:Ae++;break;case 125:Ae--;break;case 47:switch(se=Q.charCodeAt(de+1)){case 42:case 47:e:{for(ae=de+1;ae<Qe;++ae)switch(Q.charCodeAt(ae)){case 47:if(se===42&&Q.charCodeAt(ae-1)===42&&de+2!==ae){de=ae+1;break e}break;case 10:if(se===47){de=ae+1;break e}}de=ae}}break;case 91:se++;case 40:se++;case 34:case 39:for(;de++<Qe&&Q.charCodeAt(de)!==se;);}if(Ae===0)break;de++}switch(Ae=Q.substring(Oe,de),Ce===0&&(Ce=(oe=oe.replace(u,"").trim()).charCodeAt(0)),Ce){case 64:switch(0<xe&&(oe=oe.replace(f,"")),se=oe.charCodeAt(1),se){case 100:case 109:case 115:case 45:xe=T;break;default:xe=$}if(Ae=n(T,xe,Ae,se,N+1),Oe=Ae.length,0<P&&(xe=t($,oe,Te),F=l(3,Ae,xe,T,j,H,Oe,se,N,ne),oe=xe.join(""),F!==void 0&&(Oe=(Ae=F.trim()).length)===0&&(se=0,Ae="")),0<Oe)switch(se){case 115:oe=oe.replace(w,a);case 100:case 109:case 45:Ae=oe+"{"+Ae+"}";break;case 107:oe=oe.replace(b,"$1 $2"),Ae=oe+"{"+Ae+"}",Ae=V===1||V===2&&i("@"+Ae,3)?"@-webkit-"+Ae+"@"+Ae:"@"+Ae;break;default:Ae=oe+Ae,ne===112&&(Ae=(je+=Ae,""))}else Ae="";break;default:Ae=n(T,t(T,oe,Te),Ae,ne,N+1)}C+=Ae,Ae=Te=xe=ae=Ce=0,oe="",se=Q.charCodeAt(++de);break;case 125:case 59:if(oe=(0<xe?oe.replace(f,""):oe).trim(),1<(Oe=oe.length))switch(ae===0&&(Ce=oe.charCodeAt(0),Ce===45||96<Ce&&123>Ce)&&(Oe=(oe=oe.replace(" ",":")).length),0<P&&(F=l(1,oe,T,Z,j,H,je.length,ne,N,ne))!==void 0&&(Oe=(oe=F.trim()).length)===0&&(oe="\0\0"),Ce=oe.charCodeAt(0),se=oe.charCodeAt(1),Ce){case 0:break;case 64:if(se===105||se===99){E+=oe+Q.charAt(de);break}default:oe.charCodeAt(Oe-1)!==58&&(je+=o(oe,Ce,se,oe.charCodeAt(2)))}Te=xe=ae=Ce=0,oe="",se=Q.charCodeAt(++de)}}switch(se){case 13:case 10:Y===47?Y=0:1+Ce===0&&ne!==107&&0<oe.length&&(xe=1,oe+="\0"),0<P*x&&l(0,oe,T,Z,j,H,je.length,ne,N,ne),H=1,j++;break;case 59:case 125:if(Y+ge+ye+te===0){H++;break}default:switch(H++,Ie=Q.charAt(de),se){case 9:case 32:if(ge+te+Y===0)switch(Ge){case 44:case 58:case 9:case 32:Ie="";break;default:se!==32&&(Ie=" ")}break;case 0:Ie="\\0";break;case 12:Ie="\\f";break;case 11:Ie="\\v";break;case 38:ge+Y+te===0&&(xe=Te=1,Ie="\f"+Ie);break;case 108:if(ge+Y+te+B===0&&0<ae)switch(de-ae){case 2:Ge===112&&Q.charCodeAt(de-3)===58&&(B=Ge);case 8:Ve===111&&(B=Ve)}break;case 58:ge+Y+te===0&&(ae=de);break;case 44:Y+ye+ge+te===0&&(xe=1,Ie+="\r");break;case 34:case 39:Y===0&&(ge=ge===se?0:ge===0?se:ge);break;case 91:ge+Y+ye===0&&te++;break;case 93:ge+Y+ye===0&&te--;break;case 41:ge+Y+te===0&&ye--;break;case 40:if(ge+Y+te===0){if(Ce===0)switch(2*Ge+3*Ve){case 533:break;default:Ce=1}ye++}break;case 64:Y+ye+ge+te+ae+Ae===0&&(Ae=1);break;case 42:case 47:if(!(0<ge+te+ye))switch(Y){case 0:switch(2*se+3*Q.charCodeAt(de+1)){case 235:Y=47;break;case 220:Oe=de,Y=42}break;case 42:se===47&&Ge===42&&Oe+2!==de&&(Q.charCodeAt(Oe+2)===33&&(je+=Q.substring(Oe,de+1)),Ie="",Y=0)}}Y===0&&(oe+=Ie)}Ve=Ge,Ge=se,de++}if(Oe=je.length,0<Oe){if(xe=T,0<P&&(F=l(2,je,xe,Z,j,H,Oe,ne,N,ne),F!==void 0&&(je=F).length===0))return E+je+C;if(je=xe.join(",")+"{"+je+"}",V*B!==0){switch(V!==2||i(je,2)||(B=0),B){case 111:je=je.replace(S,":-moz-$1")+je;break;case 112:je=je.replace(y,"::-webkit-input-$1")+je.replace(y,"::-moz-$1")+je.replace(y,":-ms-input-$1")+je}B=0}}return E+je+C}function t(Z,T,Q){var ne=T.trim().split(k);T=ne;var N=ne.length,te=Z.length;switch(te){case 0:case 1:var Y=0;for(Z=te===0?"":Z[0]+" ";Y<N;++Y)T[Y]=r(Z,T[Y],Q).trim();break;default:var ye=Y=0;for(T=[];Y<N;++Y)for(var ge=0;ge<te;++ge)T[ye++]=r(Z[ge]+" ",ne[Y],Q).trim()}return T}function r(Z,T,Q){var ne=T.charCodeAt(0);switch(33>ne&&(ne=(T=T.trim()).charCodeAt(0)),ne){case 38:return T.replace(g,"$1"+Z.trim());case 58:return Z.trim()+T.replace(g,"$1"+Z.trim());default:if(0<1*Q&&0<T.indexOf("\f"))return T.replace(g,(Z.charCodeAt(0)===58?"":"$1")+Z.trim())}return Z+T}function o(Z,T,Q,ne){var N=Z+";",te=2*T+3*Q+4*ne;if(te===944){Z=N.indexOf(":",9)+1;var Y=N.substring(Z,N.length-1).trim();return Y=N.substring(0,Z).trim()+Y+";",V===1||V===2&&i(Y,1)?"-webkit-"+Y+Y:Y}if(V===0||V===2&&!i(N,1))return N;switch(te){case 1015:return N.charCodeAt(10)===97?"-webkit-"+N+N:N;case 951:return N.charCodeAt(3)===116?"-webkit-"+N+N:N;case 963:return N.charCodeAt(5)===110?"-webkit-"+N+N:N;case 1009:if(N.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+N+N;case 978:return"-webkit-"+N+"-moz-"+N+N;case 1019:case 983:return"-webkit-"+N+"-moz-"+N+"-ms-"+N+N;case 883:if(N.charCodeAt(8)===45)return"-webkit-"+N+N;if(0<N.indexOf("image-set(",11))return N.replace(D,"$1-webkit-$2")+N;break;case 932:if(N.charCodeAt(4)===45)switch(N.charCodeAt(5)){case 103:return"-webkit-box-"+N.replace("-grow","")+"-webkit-"+N+"-ms-"+N.replace("grow","positive")+N;case 115:return"-webkit-"+N+"-ms-"+N.replace("shrink","negative")+N;case 98:return"-webkit-"+N+"-ms-"+N.replace("basis","preferred-size")+N}return"-webkit-"+N+"-ms-"+N+N;case 964:return"-webkit-"+N+"-ms-flex-"+N+N;case 1023:if(N.charCodeAt(8)!==99)break;return Y=N.substring(N.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+Y+"-webkit-"+N+"-ms-flex-pack"+Y+N;case 1005:return h.test(N)?N.replace(m,":-webkit-")+N.replace(m,":-moz-")+N:N;case 1e3:switch(Y=N.substring(13).trim(),T=Y.indexOf("-")+1,Y.charCodeAt(0)+Y.charCodeAt(T)){case 226:Y=N.replace(A,"tb");break;case 232:Y=N.replace(A,"tb-rl");break;case 220:Y=N.replace(A,"lr");break;default:return N}return"-webkit-"+N+"-ms-"+Y+N;case 1017:if(N.indexOf("sticky",9)===-1)break;case 975:switch(T=(N=Z).length-10,Y=(N.charCodeAt(T)===33?N.substring(0,T):N).substring(Z.indexOf(":",7)+1).trim(),te=Y.charCodeAt(0)+(Y.charCodeAt(7)|0)){case 203:if(111>Y.charCodeAt(8))break;case 115:N=N.replace(Y,"-webkit-"+Y)+";"+N;break;case 207:case 102:N=N.replace(Y,"-webkit-"+(102<te?"inline-":"")+"box")+";"+N.replace(Y,"-webkit-"+Y)+";"+N.replace(Y,"-ms-"+Y+"box")+";"+N}return N+";";case 938:if(N.charCodeAt(5)===45)switch(N.charCodeAt(6)){case 105:return Y=N.replace("-items",""),"-webkit-"+N+"-webkit-box-"+Y+"-ms-flex-"+Y+N;case 115:return"-webkit-"+N+"-ms-flex-item-"+N.replace(R,"")+N;default:return"-webkit-"+N+"-ms-flex-line-pack"+N.replace("align-content","").replace(R,"")+N}break;case 973:case 989:if(N.charCodeAt(3)!==45||N.charCodeAt(4)===122)break;case 931:case 953:if(_.test(Z)===!0)return(Y=Z.substring(Z.indexOf(":")+1)).charCodeAt(0)===115?o(Z.replace("stretch","fill-available"),T,Q,ne).replace(":fill-available",":stretch"):N.replace(Y,"-webkit-"+Y)+N.replace(Y,"-moz-"+Y.replace("fill-",""))+N;break;case 962:if(N="-webkit-"+N+(N.charCodeAt(5)===102?"-ms-"+N:"")+N,Q+ne===211&&N.charCodeAt(13)===105&&0<N.indexOf("transform",10))return N.substring(0,N.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+N}return N}function i(Z,T){var Q=Z.indexOf(T===1?":":"{"),ne=Z.substring(0,T!==3?Q:10);return Q=Z.substring(Q+1,Z.length-1),W(T!==2?ne:ne.replace(M,"$1"),Q,T)}function a(Z,T){var Q=o(T,T.charCodeAt(0),T.charCodeAt(1),T.charCodeAt(2));return Q!==T+";"?Q.replace(I," or ($1)").substring(4):"("+T+")"}function l(Z,T,Q,ne,N,te,Y,ye,ge,Ce){for(var se=0,Ge=T,Ve;se<P;++se)switch(Ve=O[se].call(d,Z,Ge,Q,ne,N,te,Y,ye,ge,Ce)){case void 0:case!1:case!0:case null:break;default:Ge=Ve}if(Ge!==T)return Ge}function s(Z){switch(Z){case void 0:case null:P=O.length=0;break;default:if(typeof Z=="function")O[P++]=Z;else if(typeof Z=="object")for(var T=0,Q=Z.length;T<Q;++T)s(Z[T]);else x=!!Z|0}return s}function c(Z){return Z=Z.prefix,Z!==void 0&&(W=null,Z?typeof Z!="function"?V=1:(V=2,W=Z):V=0),c}function d(Z,T){var Q=Z;if(33>Q.charCodeAt(0)&&(Q=Q.trim()),G=Q,Q=[G],0<P){var ne=l(-1,T,Q,Q,j,H,0,0,0,0);ne!==void 0&&typeof ne=="string"&&(T=ne)}var N=n($,Q,T,0,0);return 0<P&&(ne=l(-2,N,Q,Q,j,H,N.length,0,0,0),ne!==void 0&&(N=ne)),G="",B=0,H=j=1,N}var u=/^\0+/g,f=/[\0\r\f]/g,m=/: */g,h=/zoo|gra/,v=/([,: ])(transform)/g,k=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,b=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,S=/:(read-only)/g,A=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,I=/([\s\S]*?);/g,R=/-self|flex-/g,M=/[^]*?(:[rp][el]a[\w-]+)[^]*/,_=/stretch|:\s*\w+\-(?:conte|avail)/,D=/([^-])(image-set\()/,H=1,j=1,B=0,V=1,$=[],O=[],P=0,W=null,x=0,G="";return d.use=s,d.set=c,e!==void 0&&c(e),d}var Sh="/*|*/",h_=Sh+"}";function p_(e){e&&wu.current.insert(e+"}")}var wu={current:null},g_=function(n,t,r,o,i,a,l,s,c,d){switch(n){case 1:{switch(t.charCodeAt(0)){case 64:return wu.current.insert(t+";"),"";case 108:if(t.charCodeAt(2)===98)return""}break}case 2:{if(s===0)return t+Sh;break}case 3:switch(s){case 102:case 112:return wu.current.insert(r[0]+t),"";default:return t+(d===0?Sh:"")}case-2:t.split(h_).forEach(p_)}},b_=function(n){n===void 0&&(n={});var t=n.key||"css",r;n.prefix!==void 0&&(r={prefix:n.prefix});var o=new m_(r),i={},a;{a=n.container||document.head;var l=document.querySelectorAll("style[data-emotion-"+t+"]");Array.prototype.forEach.call(l,function(d){var u=d.getAttribute("data-emotion-"+t);u.split(" ").forEach(function(f){i[f]=!0}),d.parentNode!==a&&a.appendChild(d)})}var s;o.use(n.stylisPlugins)(g_),s=function(u,f,m,h){var v=f.name;wu.current=m,o(u,f.styles),h&&(c.inserted[v]=!0)};var c={key:t,sheet:new f_({key:t,container:a,nonce:n.nonce,speedy:n.speedy}),nonce:n.nonce,inserted:i,registered:{},insert:s};return c};function v_(e){var n={};return function(t){return n[t]===void 0&&(n[t]=e(t)),n[t]}}var y_=/[A-Z]|^ms/g,w_=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Xw=function(n){return n.charCodeAt(1)===45},B1=function(n){return n!=null&&typeof n!="boolean"},_f=v_(function(e){return Xw(e)?e:e.replace(y_,"-$&").toLowerCase()}),$1=function(n,t){switch(n){case"animation":case"animationName":if(typeof t=="string")return t.replace(w_,function(r,o,i){return To={name:o,styles:i,next:To},o})}return Gy[n]!==1&&!Xw(n)&&typeof t=="number"&&t!==0?t+"px":t};function ku(e,n,t,r){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return To={name:t.name,styles:t.styles,next:To},t.name;if(t.styles!==void 0){var o=t.next;if(o!==void 0)for(;o!==void 0;)To={name:o.name,styles:o.styles,next:To},o=o.next;var i=t.styles+";";return i}return k_(e,n,t)}}if(n==null)return t;var a=n[t];return a!==void 0&&!r?a:t}function k_(e,n,t){var r="";if(Array.isArray(t))for(var o=0;o<t.length;o++)r+=ku(e,n,t[o],!1);else for(var i in t){var a=t[i];if(typeof a!="object")n!=null&&n[a]!==void 0?r+=i+"{"+n[a]+"}":B1(a)&&(r+=_f(i)+":"+$1(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(n==null||n[a[0]]===void 0))for(var l=0;l<a.length;l++)B1(a[l])&&(r+=_f(i)+":"+$1(i,a[l])+";");else{var s=ku(e,n,a,!1);switch(i){case"animation":case"animationName":{r+=_f(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var z1=/label:\s*([^\s;\n{]+)\s*;/g,To,Pf=function(n,t,r){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var o=!0,i="";To=void 0;var a=n[0];a==null||a.raw===void 0?(o=!1,i+=ku(r,t,a,!1)):i+=a[0];for(var l=1;l<n.length;l++)i+=ku(r,t,n[l],i.charCodeAt(i.length-1)===46),o&&(i+=a[l]);z1.lastIndex=0;for(var s="",c;(c=z1.exec(i))!==null;)s+="-"+c[1];var d=ka(i)+s;return{name:d,styles:i,next:To}};function Gw(e,n,t){var r="";return t.split(" ").forEach(function(o){e[o]!==void 0?n.push(e[o]):r+=o+" "}),r}var C_=function(n,t,r){var o=n.key+"-"+t.name;if(n.registered[o]===void 0&&(n.registered[o]=t.styles),n.inserted[t.name]===void 0){var i=t;do n.insert("."+o,i,n.sheet,!0),i=i.next;while(i!==void 0)}};function H1(e,n){if(e.inserted[n.name]===void 0)return e.insert("",n,e.sheet,!0)}function U1(e,n,t){var r=[],o=Gw(e,r,t);return r.length<2?t:o+n(r)}var x_=function(n){var t=b_(n);t.sheet.speedy=function(l){this.isSpeedy=l},t.compat=!0;var r=function(){for(var s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];var u=Pf(c,t.registered,void 0);return C_(t,u),t.key+"-"+u.name},o=function(){for(var s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];var u=Pf(c,t.registered),f="animation-"+u.name;return H1(t,{name:u.name,styles:"@keyframes "+f+"{"+u.styles+"}"}),f},i=function(){for(var s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];var u=Pf(c,t.registered);H1(t,u)},a=function(){for(var s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];return U1(t.registered,r,S_(c))};return{css:r,cx:a,injectGlobal:i,keyframes:o,hydrate:function(s){s.forEach(function(c){t.inserted[c]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:Gw.bind(null,t.registered),merge:U1.bind(null,t.registered,r)}},S_=function e(n){for(var t="",r=0;r<n.length;r++){var o=n[r];if(o!=null){var i=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))i=e(o);else{i="";for(var a in o)o[a]&&a&&(i&&(i+=" "),i+=a)}break}default:i=o}i&&(t&&(t+=" "),t+=i)}}return t},zr=x_(),E_=zr.flush,A_=zr.hydrate,T_=zr.cx,I_=zr.merge,__=zr.getRegisteredStyles,P_=zr.injectGlobal,O_=zr.keyframes,F_=zr.css,R_=zr.sheet,N_=zr.cache;const M_=Object.freeze(Object.defineProperty({__proto__:null,cache:N_,css:F_,cx:T_,flush:E_,getRegisteredStyles:__,hydrate:A_,injectGlobal:P_,keyframes:O_,merge:I_,sheet:R_},Symbol.toStringTag,{value:"Module"})),L_=Ub(M_);var oa=Gt&&Gt.__assign||function(){return oa=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},oa.apply(this,arguments)},j_=Gt&&Gt.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};Object.defineProperty(l2,"__esModule",{value:!0});var jn=L_;l2.default=function(e,n){var t,r,o,i,a,l,s;n===void 0&&(n=!1);var c=e.variables,d=c===void 0?{}:c,u=j_(e,["variables"]),f={light:oa({diffViewerBackground:"#fff",diffViewerColor:"212529",addedBackground:"#e6ffed",addedColor:"#24292e",removedBackground:"#ffeef0",removedColor:"#24292e",wordAddedBackground:"#acf2bd",wordRemovedBackground:"#fdb8c0",addedGutterBackground:"#cdffd8",removedGutterBackground:"#ffdce0",gutterBackground:"#f7f7f7",gutterBackgroundDark:"#f3f1f1",highlightBackground:"#fffbdd",highlightGutterBackground:"#fff5b1",codeFoldGutterBackground:"#dbedff",codeFoldBackground:"#f1f8ff",emptyLineBackground:"#fafbfc",gutterColor:"#212529",addedGutterColor:"#212529",removedGutterColor:"#212529",codeFoldContentColor:"#212529",diffViewerTitleBackground:"#fafbfc",diffViewerTitleColor:"#212529",diffViewerTitleBorderColor:"#eee"},d.light||{}),dark:oa({diffViewerBackground:"#2e303c",diffViewerColor:"#FFF",addedBackground:"#044B53",addedColor:"white",removedBackground:"#632F34",removedColor:"white",wordAddedBackground:"#055d67",wordRemovedBackground:"#7d383f",addedGutterBackground:"#034148",removedGutterBackground:"#632b30",gutterBackground:"#2c2f3a",gutterBackgroundDark:"#262933",highlightBackground:"#2a3967",highlightGutterBackground:"#2d4077",codeFoldGutterBackground:"#21232b",codeFoldBackground:"#262831",emptyLineBackground:"#363946",gutterColor:"#464c67",addedGutterColor:"#8c8c8c",removedGutterColor:"#8c8c8c",codeFoldContentColor:"#555a7b",diffViewerTitleBackground:"#2f323e",diffViewerTitleColor:"#555a7b",diffViewerTitleBorderColor:"#353846"},d.dark||{})},m=n?f.dark:f.light,h=jn.css({width:"100%",label:"content"}),v=jn.css((t={},t["."+h]={width:"50%"},t.label="split-view",t)),k=jn.css({width:"100%",background:m.diffViewerBackground,pre:{margin:0,whiteSpace:"pre-wrap",lineHeight:"25px"},label:"diff-container",borderCollapse:"collapse"}),g=jn.css({color:m.codeFoldContentColor,label:"code-fold-content"}),b=jn.css({color:m.diffViewerColor,label:"content-text"}),y=jn.css((r={background:m.diffViewerTitleBackground,padding:10,borderBottom:"1px solid "+m.diffViewerTitleBorderColor,label:"title-block",":last-child":{borderLeft:"1px solid "+m.diffViewerTitleBorderColor}},r["."+b]={color:m.diffViewerTitleColor},r)),S=jn.css({color:m.gutterColor,label:"line-number"}),A=jn.css((o={background:m.removedBackground,color:m.removedColor,pre:{color:m.removedColor}},o["."+S]={color:m.removedGutterColor},o.label="diff-removed",o)),w=jn.css((i={background:m.addedBackground,color:m.addedColor,pre:{color:m.addedColor}},i["."+S]={color:m.addedGutterColor},i.label="diff-added",i)),I=jn.css({padding:2,display:"inline-flex",borderRadius:1,label:"word-diff"}),R=jn.css({background:m.wordAddedBackground,label:"word-added"}),M=jn.css({background:m.wordRemovedBackground,label:"word-removed"}),_=jn.css({backgroundColor:m.codeFoldGutterBackground,label:"code-fold-gutter"}),D=jn.css({backgroundColor:m.codeFoldBackground,height:40,fontSize:14,fontWeight:700,label:"code-fold",a:{textDecoration:"underline !important",cursor:"pointer",pre:{display:"inline"}}}),H=jn.css({backgroundColor:m.emptyLineBackground,label:"empty-line"}),j=jn.css((a={width:25,paddingLeft:10,paddingRight:10,userSelect:"none",label:"marker"},a["&."+w]={pre:{color:m.addedColor}},a["&."+A]={pre:{color:m.removedColor}},a)),B=jn.css((l={background:m.highlightBackground,label:"highlighted-line"},l["."+R+", ."+M]={backgroundColor:"initial"},l)),V=jn.css({label:"highlighted-gutter"}),$=jn.css((s={userSelect:"none",minWidth:50,padding:"0 10px",label:"gutter",textAlign:"right",background:m.gutterBackground,"&:hover":{cursor:"pointer",background:m.gutterBackgroundDark,pre:{opacity:1}},pre:{opacity:.5}},s["&."+w]={background:m.addedGutterBackground},s["&."+A]={background:m.removedGutterBackground},s["&."+V]={background:m.highlightGutterBackground,"&:hover":{background:m.highlightGutterBackground}},s)),O=jn.css({"&:hover":{background:m.gutterBackground,cursor:"initial"},label:"empty-gutter"}),P=jn.css({verticalAlign:"baseline",label:"line"}),W={diffContainer:k,diffRemoved:A,diffAdded:w,splitView:v,marker:j,highlightedGutter:V,highlightedLine:B,gutter:$,line:P,wordDiff:I,wordAdded:R,wordRemoved:M,codeFoldGutter:_,codeFold:D,emptyGutter:O,emptyLine:H,lineNumber:S,contentText:b,content:h,codeFoldContent:g,titleBlock:y},x=Object.keys(u).reduce(function(G,Z){var T;return oa({},G,(T={},T[Z]=jn.css(u[Z]),T))},{});return Object.keys(W).reduce(function(G,Z){var T;return oa({},G,(T={},T[Z]=x[Z]?jn.cx(W[Z],x[Z]):W[Z],T))},{})};var Z1=Number.isNaN||function(n){return typeof n=="number"&&n!==n};function D_(e,n){return!!(e===n||Z1(e)&&Z1(n))}function B_(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(!D_(e[t],n[t]))return!1;return!0}function $_(e,n){n===void 0&&(n=B_);var t,r=[],o,i=!1;function a(){for(var l=[],s=0;s<arguments.length;s++)l[s]=arguments[s];return i&&t===this&&n(l,r)||(o=e.apply(this,l),i=!0,t=this,r=l),o}return a}const z_=Object.freeze(Object.defineProperty({__proto__:null,default:$_},Symbol.toStringTag,{value:"Module"})),H_=Ub(z_);(function(e){var n=Gt&&Gt.__extends||function(){var u=function(f,m){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,v){h.__proto__=v}||function(h,v){for(var k in v)v.hasOwnProperty(k)&&(h[k]=v[k])},u(f,m)};return function(f,m){u(f,m);function h(){this.constructor=f}f.prototype=m===null?Object.create(m):(h.prototype=m.prototype,new h)}}();Object.defineProperty(e,"__esModule",{value:!0});var t=p,r=s_,o=Cy,i=Vw;e.DiffMethod=i.DiffMethod;var a=l2,l=H_,s=l.default||l,c;(function(u){u.LEFT="L",u.RIGHT="R"})(c=e.LineNumberPrefix||(e.LineNumberPrefix={}));var d=function(u){n(f,u);function f(m){var h=u.call(this,m)||this;return h.resetCodeBlocks=function(){return h.state.expandedBlocks.length>0?(h.setState({expandedBlocks:[]}),!0):!1},h.onBlockExpand=function(v){var k=h.state.expandedBlocks.slice();k.push(v),h.setState({expandedBlocks:k})},h.computeStyles=s(a.default),h.onLineNumberClickProxy=function(v){return h.props.onLineNumberClick?function(k){return h.props.onLineNumberClick(v,k)}:function(){}},h.renderWordDiff=function(v,k){return v.map(function(g,b){var y;return t.createElement("span",{key:b,className:o.default(h.styles.wordDiff,(y={},y[h.styles.wordAdded]=g.type===i.DiffType.ADDED,y[h.styles.wordRemoved]=g.type===i.DiffType.REMOVED,y))},k?k(g.value):g.value)})},h.renderLine=function(v,k,g,b,y,S){var A,w,I,R,M=g+"-"+v,_=S+"-"+y,D=h.props.highlightLines.includes(M)||h.props.highlightLines.includes(_),H=k===i.DiffType.ADDED,j=k===i.DiffType.REMOVED,B;return Array.isArray(b)?B=h.renderWordDiff(b,h.props.renderContent):h.props.renderContent?B=h.props.renderContent(b):B=b,t.createElement(t.Fragment,null,!h.props.hideLineNumbers&&t.createElement("td",{onClick:v&&h.onLineNumberClickProxy(M),className:o.default(h.styles.gutter,(A={},A[h.styles.emptyGutter]=!v,A[h.styles.diffAdded]=H,A[h.styles.diffRemoved]=j,A[h.styles.highlightedGutter]=D,A))},t.createElement("pre",{className:h.styles.lineNumber},v)),!h.props.splitView&&!h.props.hideLineNumbers&&t.createElement("td",{onClick:y&&h.onLineNumberClickProxy(_),className:o.default(h.styles.gutter,(w={},w[h.styles.emptyGutter]=!y,w[h.styles.diffAdded]=H,w[h.styles.diffRemoved]=j,w[h.styles.highlightedGutter]=D,w))},t.createElement("pre",{className:h.styles.lineNumber},y)),t.createElement("td",{className:o.default(h.styles.marker,(I={},I[h.styles.emptyLine]=!B,I[h.styles.diffAdded]=H,I[h.styles.diffRemoved]=j,I[h.styles.highlightedLine]=D,I))},t.createElement("pre",null,H&&"+",j&&"-")),t.createElement("td",{className:o.default(h.styles.content,(R={},R[h.styles.emptyLine]=!B,R[h.styles.diffAdded]=H,R[h.styles.diffRemoved]=j,R[h.styles.highlightedLine]=D,R))},t.createElement("pre",{className:h.styles.contentText},B)))},h.renderSplitView=function(v,k){var g=v.left,b=v.right;return t.createElement("tr",{key:k,className:h.styles.line},h.renderLine(g.lineNumber,g.type,c.LEFT,g.value),h.renderLine(b.lineNumber,b.type,c.RIGHT,b.value))},h.renderInlineView=function(v,k){var g=v.left,b=v.right,y;return g.type===i.DiffType.REMOVED&&b.type===i.DiffType.ADDED?t.createElement(t.Fragment,{key:k},t.createElement("tr",{className:h.styles.line},h.renderLine(g.lineNumber,g.type,c.LEFT,g.value,null)),t.createElement("tr",{className:h.styles.line},h.renderLine(null,b.type,c.RIGHT,b.value,b.lineNumber))):(g.type===i.DiffType.REMOVED&&(y=h.renderLine(g.lineNumber,g.type,c.LEFT,g.value,null)),g.type===i.DiffType.DEFAULT&&(y=h.renderLine(g.lineNumber,g.type,c.LEFT,g.value,b.lineNumber,c.RIGHT)),b.type===i.DiffType.ADDED&&(y=h.renderLine(null,b.type,c.RIGHT,b.value,b.lineNumber)),t.createElement("tr",{key:k,className:h.styles.line},y))},h.onBlockClickProxy=function(v){return function(){return h.onBlockExpand(v)}},h.renderSkippedLineIndicator=function(v,k,g,b){var y,S=h.props,A=S.hideLineNumbers,w=S.splitView,I=h.props.codeFoldMessageRenderer?h.props.codeFoldMessageRenderer(v,g,b):t.createElement("pre",{className:h.styles.codeFoldContent},"Expand ",v," lines ..."),R=t.createElement("td",null,t.createElement("a",{onClick:h.onBlockClickProxy(k),tabIndex:0},I)),M=!w&&!A;return t.createElement("tr",{key:g+"-"+b,className:h.styles.codeFold},!A&&t.createElement("td",{className:h.styles.codeFoldGutter}),t.createElement("td",{className:o.default((y={},y[h.styles.codeFoldGutter]=M,y))}),M?t.createElement(t.Fragment,null,t.createElement("td",null),R):t.createElement(t.Fragment,null,R,t.createElement("td",null)),t.createElement("td",null),t.createElement("td",null))},h.renderDiff=function(){var v=h.props,k=v.oldValue,g=v.newValue,b=v.splitView,y=v.disableWordDiff,S=v.compareMethod,A=v.linesOffset,w=i.computeLineInformation(k,g,y,S,A),I=w.lineInformation,R=w.diffLines,M=h.props.extraLinesSurroundingDiff<0?0:h.props.extraLinesSurroundingDiff,_=[];return I.map(function(D,H){var j=R[0],B=j-H;if(h.props.showDiffOnly&&(B===-M&&(_=[],R.shift()),D.left.type===i.DiffType.DEFAULT&&(B>M||typeof j>"u")&&!h.state.expandedBlocks.includes(j)))return _.push(H+1),H===I.length-1&&_.length>1?h.renderSkippedLineIndicator(_.length,j,D.left.lineNumber,D.right.lineNumber):null;var V=b?h.renderSplitView(D,H):h.renderInlineView(D,H);if(B===M&&_.length>0){var $=_.length;return _=[],t.createElement(t.Fragment,{key:H},h.renderSkippedLineIndicator($,j,D.left.lineNumber,D.right.lineNumber),V)}return V})},h.render=function(){var v,k=h.props,g=k.oldValue,b=k.newValue,y=k.useDarkTheme,S=k.leftTitle,A=k.rightTitle,w=k.splitView,I=k.hideLineNumbers;if(typeof g!="string"||typeof b!="string")throw Error('"oldValue" and "newValue" should be strings');h.styles=h.computeStyles(h.props.styles,y);var R=h.renderDiff(),M=I?2:3,_=I?2:4,D=(S||A)&&t.createElement("tr",null,t.createElement("td",{colSpan:w?M:_,className:h.styles.titleBlock},t.createElement("pre",{className:h.styles.contentText},S)),w&&t.createElement("td",{colSpan:M,className:h.styles.titleBlock},t.createElement("pre",{className:h.styles.contentText},A)));return t.createElement("table",{className:o.default(h.styles.diffContainer,(v={},v[h.styles.splitView]=w,v))},t.createElement("tbody",null,D,R))},h.state={expandedBlocks:[]},h}return f.defaultProps={oldValue:"",newValue:"",splitView:!0,highlightLines:[],disableWordDiff:!1,compareMethod:i.DiffMethod.CHARS,styles:{},hideLineNumbers:!1,extraLinesSurroundingDiff:3,showDiffOnly:!0,useDarkTheme:!1,linesOffset:0},f.propTypes={oldValue:r.string.isRequired,newValue:r.string.isRequired,splitView:r.bool,disableWordDiff:r.bool,compareMethod:r.oneOf(Object.values(i.DiffMethod)),renderContent:r.func,onLineNumberClick:r.func,extraLinesSurroundingDiff:r.number,styles:r.object,hideLineNumbers:r.bool,showDiffOnly:r.bool,highlightLines:r.arrayOf(r.string),leftTitle:r.oneOfType([r.string,r.element]),rightTitle:r.oneOfType([r.string,r.element]),linesOffset:r.number},f}(t.Component);e.default=d})(a2);const U_=as(a2),qw=e=>{const n=new Date(e);return new Intl.DateTimeFormat("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(n)};function Z_({commit:e}){const n=t=>{window.open(t,"_blank","noopener,noreferrer")};return J.jsxs("div",{className:"rounded-8 px-2 pb-2 border border-white  hover:shadow hover:border-slate-300",children:[J.jsxs("div",{children:[J.jsxs("div",{className:"",onClick:()=>n(e.url),children:[J.jsx("div",{className:"text-mono-14N-5 text-slate-500",children:qw(e.committedDate)}),J.jsx("div",{className:"text-std-16N-7 py-1 hover:text-std-16M-7 hover:cursor-pointer",children:e.message})]}),e.associatedPullRequests.edges&&J.jsxs("div",{className:"flex flex-col",children:[J.jsx("div",{className:"text-dns-14B-3 pb-1",children:"■ 元になった変更提案(Pull Request)"}),J.jsx("div",{className:"text-dns-14N-3 ml-4",children:e.associatedPullRequests.edges.map((t,r)=>J.jsxs(J.Fragment,{children:[J.jsx("div",{children:J.jsx("a",{href:t.node.url,target:"_blank",rel:"noreferrer noopener",className:"text-primary underline",children:t.node.title})}),J.jsx("div",{children:t.node.timelineItems.nodes.map((o,i)=>J.jsx("div",{className:"ml-4",children:o.subject&&J.jsxs("div",{className:"flex flex-col pt-2",children:[J.jsx("div",{className:"text-dns-14B-3 pb-1",children:"■ 元になった課題提起(Issue)"}),J.jsx("div",{className:"text-dns-14N-3 pl-4",children:J.jsx("a",{href:o.subject.url,target:"_blank",rel:"noreferrer noopener",className:"text-primary underline",children:o.subject.title})})]})},i))})]},r))})]})]}),J.jsx("div",{className:"space-y-2 pt-2",children:e.files.map(t=>J.jsxs("div",{className:"border cursor-pointer hover:border-primary",onClick:()=>n(e.url),children:[J.jsx("div",{className:"text-mono-14N-5 text-slate-600 px-2 py-1",children:t.filename}),J.jsx("div",{children:t.patch&&J.jsx(U_,{oldValue:t.patch.split(`
`).filter(r=>r.startsWith("-")).join(`
`),newValue:t.patch.split(`
`).filter(r=>r.startsWith("+")).join(`
`),splitView:!0,hideLineNumbers:!0,compareMethod:a2.DiffMethod.WORDS,styles:{variables:{light:{diffViewerBackground:"#f7f7f7"}}}})})]},t.sha))})]})}var Kw={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},W1=Pe.createContext&&Pe.createContext(Kw),W_=["attr","size","title"];function V_(e,n){if(e==null)return{};var t=X_(e,n),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function X_(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function Cu(){return Cu=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Cu.apply(this,arguments)}function V1(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function xu(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?V1(Object(t),!0).forEach(function(r){G_(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V1(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function G_(e,n,t){return n=q_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function q_(e){var n=K_(e,"string");return typeof n=="symbol"?n:n+""}function K_(e,n){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Qw(e){return e&&e.map((n,t)=>Pe.createElement(n.tag,xu({key:t},n.attr),Qw(n.child)))}function Yw(e){return n=>Pe.createElement(Q_,Cu({attr:xu({},e.attr)},n),Qw(e.child))}function Q_(e){var n=t=>{var{attr:r,size:o,title:i}=e,a=V_(e,W_),l=o||t.size||"1em",s;return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),Pe.createElement("svg",Cu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,a,{className:s,style:xu(xu({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&Pe.createElement("title",null,i),e.children)};return W1!==void 0?Pe.createElement(W1.Consumer,null,t=>n(t)):n(Kw)}function Y_(e){return Yw({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(e)}const hi=({url:e,text:n})=>{const t=()=>{const r=window.open(e,"_blank","noopener,noreferrer");r&&(r.opener=null)};return J.jsx(pd,{type:"primary",shape:"round",onClick:t,icon:J.jsx(Y_,{}),children:n})};function J_(){const n=tC.sort((t,r)=>new Date(r.committedDate).getTime()-new Date(t.committedDate).getTime()).map(t=>({children:J.jsx(Z_,{commit:t})}));return J.jsxs(J.Fragment,{children:[J.jsxs("div",{className:"bg-white rounded-8 mb-4 flex flex-row justify-center items-center space-x-4 py-2",children:[J.jsx(hi,{url:"https://manifest.takahiroanno.com/",text:"安野たかひろ：都知事選2024マニフェスト"}),J.jsx(hi,{url:"https://github.com/takahiroanno2024/election2024/blob/main/docs/manual_pull_request.md",text:"変更提案(Pull Request)の仕方はこちら"})]}),J.jsxs("div",{className:"p-4 bg-white rounded-8",children:[J.jsx("div",{className:"text-std-20B-5 pb-8",children:"マニフェストの変更履歴"}),J.jsx(Hw,{items:n})]})]})}const Oc=[{title:"学園都市的な観点を政策に盛り込んでみるといいかなと思いました。",number:5,createdAt:"2024-06-21T08:52:19Z",url:"https://github.com/takahiroanno2024/election2024/issues/5",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
経済\r
\r
## 政策\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
\r
日本国内だと大学と経済の連携というのがあまり多く無い\r
社会人になったあとに大学に戻るなども難しい。\r
\r
### なぜ必要か\r
\r
高度な知識drivenの経済活動というのに、一定期間働かずに学習のみに専念する時間が、社会人になった後にも必要\r
\r
### このイシューで議論したいこと\r
\r
現状の、高校　⇨ 大学　⇨ 社会人\r
という一本ルート以外の学習と実践のプロセスをどう作るか\r
`,comments:{totalCount:1},reactions:{totalCount:18},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-24T15:29:47Z"},{title:"これからの感染症対応",number:6,createdAt:"2024-06-21T09:01:51Z",url:"https://github.com/takahiroanno2024/election2024/issues/6",state:"CLOSED",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [ ] 経済\r
- [X] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
新型コロナウィルス、およびそれ以外の新たにやってくる感染症への対応。\r
\r
### 必要だと思ったきっかけ\r
\r
新型コロナウィルス対応については国の分類こそ変わりましたが、今も新しい変異とともに COVID の流行は続き、特にこの 2 〜 3 週間で再び拡大が始まりつつあるようです。また、報道もされている溶連菌や、徐々に人類に近づいている鳥インフルエンザなど、残念なことに感染症の危機はまだ過ぎ去っていないようです。\r
\r
### なぜ必要か\r
\r
高齢者でない若者にも基礎疾患等を抱える人は常に一定数おり、特にそのような人にとって COVID-19 やその他の感染症は今でも脅威で、いまでも特に混雑しやすい東京の公共交通機関などは、乗ることも躊躇してできるだけ避けるような状態です。\r
\r
また、健康な若者であっても、何度も COVID に罹患しているとそのたびに重症化率も後遺症率、また梗塞や心疾患などの割合も上がる、ということが国外の事例などからわかってきています。ひどくなれば働けない・動けない状態が数ヶ月〜年単位で続く後遺症になる例が、若者でも無視できない程度に既に起きているようです。\r
\r
### このイシューで議論したいこと\r
\r
足元の COVID や溶連菌、さらに新しく来る可能性のある鳥インフルエンザなどの新規感染症に対して、基礎疾患を持った人や後遺症を患った人を「誰も取り残さない」ための政策の必要性の有無、およびその具体的な政策。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
* https://www.nhk.or.jp/maebashi/lreport/article/001/31/\r
* https://www.thelancet.com/journals/lanepe/article/PIIS2666-7762(23)00221-1/fulltext\r
* https://www150.statcan.gc.ca/n1/pub/75-006-x/2023001/article/00015-eng.htm\r
* https://www.today.com/health/covid-heart-attack-young-people-rcna69903\r
`,comments:{totalCount:24},reactions:{totalCount:27},labels:{nodes:[{name:"医療・防災"}]},updatedAt:"2024-07-02T11:16:45Z"},{title:"生活保護者に対しての産業雇用について",number:7,createdAt:"2024-06-21T09:25:05Z",url:"https://github.com/takahiroanno2024/election2024/issues/7",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [x] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
1例しか思いつかなかったが自動運転の車がエラーを起こしてないか目視で確認等、体を比較的使わなくてもいい雇用を定職につけてない人を優先的に雇用するなどがあれば打ち出すと良いのではないか？と思う。\r
\r
### 必要だと思ったきっかけ\r
\r
ある程度年齢を重ねた人間において、新たな勉強は学生の頃に比べると難しいことが多く、ましてAI分野になるとパソコンというスマホ以上にお金のかかる武器が必要となり、世間からの当たりが強くなりかねない。そこに対して誰も取り残さないが出来たら良いと考える。\r
\r
### なぜ必要か\r
\r
ゼンタイの所得をあげるには、上をあげるのも大事だが、底上げできた方が良いから。\r
\r
### このイシューで議論したいこと\r
\r
特別珍しい技術を持たない労働者は、果たしてテクノロジーだけで取り残さないことが可能なのか。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
特にありません。`,comments:{totalCount:2},reactions:{totalCount:6},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-22T08:48:26Z"},{title:"公的な情報発信用のWEBサイトやモバイルアプリに都政に対する意見表明への導線を追加してほしい",number:8,createdAt:"2024-06-21T09:30:17Z",url:"https://github.com/takahiroanno2024/election2024/issues/8",state:"CLOSED",body:`## 政策ビジョン\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [x] 民主主義\r
\r
## 政策\r
公的な情報発信を担うWEBサイトやアプリにブロードリスニングの入り口を追加する。\r
### 必要だと思ったきっかけ\r
公的情報の発信に対してフィードバックしてくても連絡先がわからない。\r
### なぜ必要か\r
[都民が都政に参加できる場づくり](https://github.com/takahiroanno2024/election2024/blob/main/docs/manifest/democracy.md#:~:text=%E2%91%A2-,%E9%83%BD%E6%B0%91%E3%81%8C%E9%83%BD%E6%94%BF%E3%81%AB%E5%8F%82%E5%8A%A0%E3%81%A7%E3%81%8D%E3%82%8B%E5%A0%B4%E3%81%A5%E3%81%8F%E3%82%8A,-%E9%83%BD%E6%B0%91%E5%8F%82%E5%8A%A0%E5%9E%8B) という、マニフェストにある課題に対する提案。\r
### このイシューで議論したいこと\r
都政への参加を促す手段として適切かどうか。\r
### 調べたこと（裏付けとなる事実・ファクト）\r
東京都財務局が運営する以下のサイトや\r
 - [都財政の見える化ボード](https://www.zaimu.metro.tokyo.lg.jp/zaisei/zaisei/dashboard)\r
 - [My TOKYO](https://www.my.metro.tokyo.lg.jp/top)\r
\r
公的情報を発信する以下のアプリには\r
 - [東京都防災アプリ](https://play.google.com/store/apps/details?id=jp.tokyo.metro.tokyotobousaiapp)\r
 - [ごみ分別アプリ さんあ〜る](https://play.google.com/store/apps/details?id=jp.co.delight_system.threeR.android&hl=ja)\r
\r
参加型予算編成の情報を含め、都政の改善のためのフィードバック先の情報がない、または簡単に見つけられない。`,comments:{totalCount:2},reactions:{totalCount:6},labels:{nodes:[{name:"民主主義"}]},updatedAt:"2024-06-28T11:33:02Z"},{title:" ギガスクールで配布しているPCをもっと現実的なスペックやメーカのものに入れ替えてほしい",number:10,createdAt:"2024-06-21T09:54:12Z",url:"https://github.com/takahiroanno2024/election2024/issues/10",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [x] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
現実的なスペックやメーカのものを使い、故障対応を減らし、無駄をなくしてほしい。\r
\r
### なぜ必要か\r
故障対応で教員の手間やコストが掛かっている\r
\r
### このイシューで議論したいこと\r
現実的なスペックとはなにか？\r
個人的にはレッツノートなど耐久性も考慮し、かつ日本国産メーカのものにしてはいかがかと\r
思うがこれはどうなのか\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
想定以上に壊れる教育現場のGIGAスクール端末。修理契約せずに故障機が塩漬けのケースも\r
https://pc.watch.impress.co.jp/docs/column/gyokai/1511390.html\r
`,comments:{totalCount:10},reactions:{totalCount:14},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-30T07:05:42Z"},{title:"教育委員会改革",number:11,createdAt:"2024-06-21T10:00:46Z",url:"https://github.com/takahiroanno2024/election2024/issues/11",state:"OPEN",body:`## 政策ビジョン\r
\r
- [x] 教育・子育て\r
\r
## 政策\r
\r
教育委員会が学校と連携し、子供たちのための行動を取れるように組織・評価の改革をお願いします。\r
\r
### 必要だと思ったきっかけ\r
\r
自分の子どもが学校でトラブルに巻き込まれた際、学校との話し合いが不調であったため、教育委員会に相談しました。\r
しかしその結果、教育委員会からは「学校を指導しました」という「解決」の連絡があり、これでは何も進まない。と実感しました。\r
それどころか、学校を、わたしと教育委員会で板挟みにする格好になってしまい、困りました。\r
\r
### なぜ必要か\r
\r
学校職員の抱える問題は、労働時間はわかりやすいものとしてありますが、このようなバックアップ組織の不全も課題と思います。\r
\r
### このイシューで議論したいこと\r
\r
学校の機能改善\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
`,comments:{totalCount:1},reactions:{totalCount:9},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-24T15:42:08Z"},{title:"公共事業における住民意見の集約について",number:13,createdAt:"2024-06-21T10:08:19Z",url:"https://github.com/takahiroanno2024/election2024/issues/13",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [✓] 行政\r
- [ ] 民主主義\r
\r
## 政策　\r
公共施設を作る際、住民からの意見を聞く仕組みおよびやり取りする仕組みを作る。また、海外の先進事例や新しい試みなどを見聞きし、それを踏まえたやり取りが可能になる仕組みがほしい。\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
建物を建てる時に意見を言うことは一般的ではないが、必要なことだと思う。また、現状は時間のある高齢者や委員などが意見を言い、実際に多く利用する世代は忙しく意見をいう機会がない。\r
\r
### このイシューで議論したいこと\r
こうした作業は行政が行うべきだが、実際は時間と労力が伴わず、やった実績だけを残す作業になりがち。実際新しい技術を使うことでどのくらい省力化できるか、など実務ベースの話を議論してみたい。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
公共事業の進め方等を見てきたこと。`,comments:{totalCount:1},reactions:{totalCount:1},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-06-22T08:49:09Z"},{title:"生成AIの開発・利活用を通じて精神的・文化的・創作活動を振興するための経済政策",number:20,createdAt:"2024-06-21T10:47:48Z",url:"https://github.com/takahiroanno2024/election2024/issues/20",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [x] 経済\r
\r
## 政策\r
１．研究開発助成金と税制優遇措置\r
①:研究開発助成金\r
生成AI技術の研究開発を行う研究機関や企業に対する助成金の提供\r
\r
②税制優遇措置\r
生成AI関連の研究開発費用に対する税制優遇措置の導入\r
\r
③産学官連携\r
企業、大学、自治体が協力するプロジェクトの推進\r
\r
２．文化・創作振興プロジェクトの支援\r
①:AI創作活動支援基金:\r
生成AIを活用した芸術作品、音楽、文学などの創作プロジェクトに対する資金援助\r
\r
②:生成AI創作イベント\r
公共の文化イベントや展示会で生成AIを活用した創作作品の紹介・交流を深める\r
\r
3.教育と人材育成\r
①:生成AI教育プログラム\r
学校教育の場などを始め生成AIを活用した創作活動教育プログラム\r
\r
②:オンライン講座\r
生成AIを活用した創作技術を学べるオンライン講座の提供\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
近年、Stable diffusionやChatGPTなど生成AI技術が急速に発展し、その技術の応用範囲が大きく広がりました。そして、生成AI技術は文化的・創作活動においても大きな可能性を秘めていることに気づいたことがきっかけです。これを受け、技術の恩恵を活かし文化を発展させるための政策が必要であると考えました。\r
\r
### なぜ必要か\r
1.経済成長\r
生成AI技術は新たな産業の創出や既存産業の高度化に寄与し、経済成長を促進します。また、生成AIを娯楽産業に活用し、市場規模を伸ばしていきます。\r
\r
2.文化振興\r
生成AIの活用によって、新たな表現手法や創作活動が可能となり、文化的・精神的多様性と豊かさが増します。\r
\r
3.国際競争力\r
生成AI技術の開発と応用において先行することで、国際競争力を高めることができます。\r
\r
4.教育と人材育成\r
次世代の技術者やクリエイターを育成することで、すぐれた技術や創作を生み出す土壌を作り上げてきます。\r
\r
### このイシューで議論したいこと\r
１.生成AI研究開発支援のための具体的方法やその主体について\r
２.生成AI文化振興のための支援内容や生成AIイベントの具体的内容\r
３.具体的な生成AIを活用した創作教育の内容について\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
世界の時価総額トップの巨大IT企業はこぞって生成AI開発競争を行っています。マイクロソフトはCopilot、アップルはApple Intelligence、GoogleはGemini、メタはLlama3など、その目的は商業や実務の面が強いですが、同時にクリエイティブ領域での生成AI開発も進んでいます。例えば、\r
画像生成AI: Stable Diffusion, Midjourney, DALL-E, Imagen, Firefly\r
音楽生成AI: Suno, Udio\r
動画生成AI: sora, Runway, Luma\r
など、人間の文化的・精神的な創作活動のための生成AIも開発・実装が進んでいます。\r
日本国内でも、このような国際的な市場に影響を与える文化的な生成AIの開発を行うことが急務だと思います。\r
また、クリエイティブ側面での生成AIの利活用を促進し、文化的・精神的に優れた創作活動を推進すべきです。`,comments:{totalCount:0},reactions:{totalCount:2},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-22T08:49:17Z"},{title:"都立小中高からのブラック校則・異常な生活指導の撲滅",number:25,createdAt:"2024-06-21T11:06:43Z",url:"https://github.com/takahiroanno2024/election2024/issues/25",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [x] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
**「ブラック校則が具体的に何があるか」をリストアップすると各個論に陥るため、ここではアブストラクトに「ブラック校則」という語で表現します。**\r
\r
一部の都立小中高において、 **生徒の本来持っているはずの人権** が同意なしに侵害されている現状について、下記のいずれかの案を実行し、 **強気で** 子供の権利を守る意思表明を都から発信する。\r
\r
1. 校則・指導指針を全て公開した上で、同意してから入学できるような透明性の構築。また、これに書かれていない生活指導を不適切なものとして原則禁じる。\r
2. 全ての校則項目に対し根拠の公開を義務化し、エビデンスのない、あるいは主観的で不十分な校則の排除。\r
3. 東京都教育委員会が予め作成した校則セットからの選択制にする。\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
\r
私個人としては、教育虐待で有名な他県の高校の出身であり、自殺未遂も何度か経験しました。(現在は都内の大学に通っていて、本issueは都民として提言しています)\r
\r
さらに、小中高生は未成年であるため、投票によって意思表示をすることもなければ、[ほとんどの政党もまたブラック校則を気にかけない](https://news.yahoo.co.jp/expert/articles/1459e635b7a73918ae650b70874a0b89fca2f504)\r
\r
我々有権者は自分の番は終わったからといって目を逸らすのではなく、次世代のウェルビーイングを向上させるために改革せねばならないと思った次第です。\r
\r
### なぜ必要か\r
\r
[小中高は生徒の生活を積極的に囲い込んでいるため、生徒にとっては学校が世界の全てと認識せざるを得ません](https://www.amazon.co.jp/%E5%AD%A6%E6%A0%A1%E3%81%8C%E8%87%AA%E7%94%B1%E3%81%AB%E3%81%AA%E3%82%8B%E6%97%A5-%E5%AE%AE%E5%8F%B0-%E7%9C%9F%E5%8F%B8/dp/4876721041)\r
\r
そんな中で、経験したことのない方にはなかなか理解してもらえない感情ですが、\r
[ブラック校則は精神や生命そのものを蝕む癌であり](https://www.jcp.or.jp/web_info/questionnaire-results-1.html)、\r
\r
また、[生徒がそれを内面化することによって次世代にも](https://www.jstage.jst.go.jp/article/jjsss/29/1/29_29-1-2/_pdf/-char/ja)\r
  - 同じような過剰な生活指導を行う教職員\r
  - 他者の権利を尊重できないパワハラ文化\r
  \r
を再生産している悪循環を生んでいると考えることもできます。\r
\r
ブラック校則はこの国の至る所に「理不尽」を生む癌であり、摘出せねばならないと考えます。\r
\r
### このイシューで議論したいこと\r
都民の皆様にとって自分が受けた小中高教育が良かった・悪かった、おのおの多様な感想をお持ちではあるかと思いますが、都内のどこかで生徒に理不尽な校則が課されているという現状を認識した上で、\r
- ブラック校則をなくすべきか(ブラック校則にも無視できない教育的価値があり、なくすべきでないと言えるほどか)\r
- なくすとして、どのようなアクションが適切か\r
\r
ということを冷静に議論したいです。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
- [日本共産党 ブラック校則アンケート](https://www.jcp.or.jp/web_info/questionnaire-results-1.html)\r
- [片岡 栄美, 体育会系ハビトゥスにみる支配と順応, スポーツ社会学研究](https://www.jstage.jst.go.jp/article/jjsss/29/1/29_29-1-2/_article/-char/ja/)\r
- [中山 真, 髙沢 佳司, 教育場面における理不尽な経験](https://www.jstage.jst.go.jp/article/pacjpa/85/0/85_PP-064/_article/-char/ja/\r
- [都立高等学校等における校則等に関する取組状況について](https://www.kyoiku.metro.tokyo.lg.jp/press/press_release/2022/release20220310_03.html)`,comments:{totalCount:6},reactions:{totalCount:19},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-25T14:58:44Z"},{title:"少子化対策として、有配偶人口を増やす",number:26,createdAt:"2024-06-21T11:25:54Z",url:"https://github.com/takahiroanno2024/election2024/issues/26",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [x] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
有配偶人口を増やす。\r
→そのために、都民の男女が出会い、恋を育み、結婚に至るまでの各行動をナッジする。\r
→そのために、以下を導入する。\r
・出会いサービスを提供する事業者に補助金給付\r
・出会いサービスを利用したり、そこでマッチングが成立したりした都民の地方減税\r
・性的少数者のための既存のパートナーシップ宣誓制度を異性間に応用する。具体的には、婚姻より前の異性間友人関係や恋人関係の段階で都がパートナーシップ関係の宣誓を認め、その証明書を発行し、その提示と引き換えに民間事業者に何らかのサービスを提供してもらえるようにする。デートにかかる費用などはこれで軽減されるようにする。\r
\r
### 必要だと思ったきっかけ\r
- 人口減少は、都も含めた我が国の存続に関わるから。\r
- 結婚は、それ自体、男女どちらにとっても、幸福感を高め、経済的な恩恵ももたらす、社会的善といえるから[1]。\r
- このIssueの執筆時点の安野氏の公約をみると、既婚者をターゲットに子供を増やす施策はあるが、未婚者をターゲットに婚姻を増やす施策が無かったので、提案する必要があると感じたから。\r
\r
### なぜ必要か\r
- 我が国の出生率は、有配偶出生率でみると実は横ばいで、有配偶率（結婚している人の割合）が下がっており[2]、地域差で見ても東京都は有配偶率低下が強い押下げ要因になっている[4]、それゆえ、既婚者にターゲッティングして子供を増やすよりも、まず未婚者にターゲッティングして婚姻を増やす方が、出生率の伸びしろが大きく、優先度が高いから。\r
- 東京都の人口は、他の道府県に比べて転入超過であり、進学就職が動機とみられる若い世代が多い[3]ので、そもそも結婚適齢期の人口が転出超過しているという問題に直面している他の道府県に比べると、少子化対策の上で強みがあるから。\r
- パートナーシップ宣誓制度を応用する理由は、既存の制度を再利用することで、車輪の再発明を防ぎ、行政の効率化に役立つから。\r
\r
### このイシューで議論したいこと\r
- 上の「政策」欄で書いたのはたたき台であって、補助金がいいのか減税がいいのか、あるいは、何をKPIにして都民のどんな行動をナッジして強化（弱化）していくか、それを安野氏の公約にどう落とし込むか、といったことをブレインストーミングしてゆきたい。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
- [1] アメリカ価値研究所（2007）『独身者は損をしている』全頁 https://amzn.asia/d/03FXLl9w\r
- [2] 河野（2007）『人口学への招待』p.163-4 https://amzn.asia/d/05lL1ynD\r
- [3] https://www.nli-research.co.jp/report/detail/id=77454?site=nli https://www3.nhk.or.jp/news/html/20240130/k10014340611000.html\r
- [4] https://www5.cao.go.jp/j-j/wp/wp-je23/h06_hz020218.html`,comments:{totalCount:35},reactions:{totalCount:4},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-07-03T07:05:11Z"},{title:"シルバーデモクラシーの克服",number:27,createdAt:"2024-06-21T11:57:37Z",url:"https://github.com/takahiroanno2024/election2024/issues/27",state:"OPEN",body:`## 政策ビジョン

- [ ] 経済
- [ ] 医療・防災
- [x] 教育・子育て
- [ ] 行政
- [ ] 民主主義

## 政策
- 子供にも一票を
- 年齢分布に応じて一票に差を

### 必要だと思ったきっかけ
高齢者と若年者の世代間格差が大きいため

### なぜ必要か
未来志向で日本を住みやすい国にするため

### このイシューで議論したいこと
皆さんのご意見を聞きたい

### 調べたこと（裏付けとなる事実・ファクト）
シルバー民主主義 - 高齢者優遇をどう克服するか
八代 尚宏`,comments:{totalCount:10},reactions:{totalCount:10},labels:{nodes:[{name:"民主主義"}]},updatedAt:"2024-07-01T13:10:06Z"},{title:"都知事選における死票問題の克服",number:29,createdAt:"2024-06-21T12:35:19Z",url:"https://github.com/takahiroanno2024/election2024/issues/29",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [x] 民主主義\r
\r
## 政策\r
\r
都知事選において、一人の有権者が\r
\r
- 1票を0.1単位で複数の立候補者に分配\r
- 一人の立候補者それぞれに対して投票/非投票を表明することができる\r
(\`n\`人の立候補者がいれば有権者全員が平等に1人最大\`n\`票できる権利を持ち、ただし一人の立候補者に一票まで）\r
\r
権利を付与することによって、**複数の立候補者に投票できるように** し、 死票問題を解決する。\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
\r
都知事選で当選するのは一人しかいないという強い制約があります。\r
\r
現在の都知事選も多くの人がそのような状況であると思われますが、 **当選してほしくない** 大型立候補者 \`A\` がいるとき、 **たとえ自分が最も支持している中堅立候補者 \`B\`** がいたとしても、 (どうせ死票になるので） \`A\`と対立している大型候補者 \`C\`に投票するのが最適戦略になっています。\r
\r
しかし、この場合、\`C\`が当選したとしても自分の政策パッケージが積極的支持を受けているとされてしまう、という民主主義上の不具合があり、これを解消したいという願いがあります。\r
\r
### このイシューで議論したいこと\r
- 本提案は死票対策に有効か （最適戦略を変えることができるか）\r
- 投票する権利自体は平等でも、憲法上大丈夫か（法的解釈の問題）\r
\r
`,comments:{totalCount:8},reactions:{totalCount:12},labels:{nodes:[{name:"民主主義"}]},updatedAt:"2024-06-23T00:34:54Z"},{title:"「子育てにかかる経済的負担への支援をより手厚く」の対象範囲の拡大",number:32,createdAt:"2024-06-21T12:45:06Z",url:"https://github.com/takahiroanno2024/election2024/issues/32",state:"CLOSED",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [x] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
- 「[子育てにかかる経済的負担への支援をより手厚く](子育てにかかる経済的負担への支援をより手厚く\r
)」の対象範囲の拡大\r
- 具体的には、\r
  - 保育料の無償化を第一子まで拡大（小池百合子氏公約参照）
  - 雇用形態に依らない産休/育休の整備\r
  - すべての子育て世帯への一律補助\r
  - など\r
\r
### なぜ必要か\r
\r
- 自身が第一子出産を控えているが、現状案は対象家庭が限定的であり、対象に当たるか不確かなため\r
\r
### このイシューで議論したいこと\r
\r
- 上記案の妥当性及びより良い支援案など\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
- 現状案\r
\r
> - 住まいの費用\r
>     - 既存政策では40歳代までの夫婦世帯の方に対して、市部の一部空家を対象に、入居から3年間、毎月の家賃を20％割引している。（JKK東京｜ペアさぽ）\r
>     - 我々の提案は、その優遇期間を第一子義務教育修了年限まで拡大\r
> - 教育費用\r
>     - 既存政策では中学3年生・高校3年生（またはこれに準ずる者）を対象に塾費用や受験料の無利子での貸付\r
>         - 東京都社会福祉協議会による受験生チャレンジ支援貸付事業\r
>     - 我々の提案は、所得制限に応じて、貸与から給付へ転換すること\r
\r
- [小池百合子氏、保育無償化を拡大　都知事3選へ公約発表 - 日本経済新聞 ](https://www.nikkei.com/article/DGXZQOCC178C10X10C24A6000000/)\r
`,comments:{totalCount:3},reactions:{totalCount:3},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-28T10:38:38Z"},{title:"不妊治療の補助をもっと手厚くしてほしい",number:33,createdAt:"2024-06-21T13:03:12Z",url:"https://github.com/takahiroanno2024/election2024/issues/33",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [x] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
> * 経済的負担\r
>     * 不妊治療のうち、自費で実施される「先進医療」に係る費用の助成額の上限を取り除きます。\r
\r
上記のように不妊治療に対する言及はありますが、先進医療にとどまらず不妊治療には際限なく費用がかかります。\r
「一割負担にする」「無料にする」まで踏み込んだ政策を期待します。\r
\r
### 必要だと思ったきっかけ\r
\r
現在不妊治療中であり、ギリギリの家計で治療を続けています。\r
\r
### なぜ必要か\r
\r
子供が欲しいと思いつつ、できずに悔しい思いをしている方が多くいます。\r
行政の力でもっと手助けをしていただければ幸いです。\r
\r
### このイシューで議論したいこと\r
\r
財源の確保をどうするのか。\r
\r
`,comments:{totalCount:4},reactions:{totalCount:6},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-25T04:09:43Z"},{title:"🧹  経済 - 誤字の修正",number:36,createdAt:"2024-06-21T13:45:11Z",url:"https://github.com/takahiroanno2024/election2024/issues/36",state:"CLOSED",body:`## Overview\r
\r
* 爆増 -> 倍増に修正\r
![image](https://github.com/takahiroanno2024/election2024/assets/35296935/cd4715f9-92de-4644-ab5d-b2fa49142369)\r
\r
\r
## Tasks\r
- スライド内および他の箇所で"倍増"と使われていたので、"爆増"から"倍増"に変更して統一しました`,comments:{totalCount:3},reactions:{totalCount:5},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-22T13:31:15Z"},{title:"都内に住みたい現役世代が都内に住めるようにする",number:38,createdAt:"2024-06-21T15:05:22Z",url:"https://github.com/takahiroanno2024/election2024/issues/38",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [x] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
実需による不動産売買の推進\r
海外投資勢の不動産購入について重い都税を課す\`\r
広尾・青山その他のアクセスがよい都営住宅に現役世代が優先的に住めるようにする\r
\r
### 必要だと思ったきっかけ\r
海外投資家による不動産売買により不動産価格が高騰・高止まりしていることで（高騰理由に円安＆人件費高騰起因の建設費増も含む）通勤の必要がある現役世代が希望の都内に居を構えられず他県で家を購入している。\r
\r
### なぜ必要か\r
\r
都内に住みたい現役世代が希望通り都内に住めないことで、無駄に長い通勤時間を強いられ、仕事の稼働時間・睡眠時間・その他家事育児時間が減少し、QOL低下・ビジネス上の国際的競争力低下に影響があると考える。\r
海外投資勢による不動産投資が増加し都心部の空洞化が起こりつつ、現役世帯が他県に流れると、税収は減少し、都内の経済も鈍化するのでいい事が何もない。\r
所得がない非課税世帯・高齢者世帯が物価の高いエリアの都営住宅に住むのは経済合理性を欠くため、都内へ通勤が必要な世帯の多い現役世代を優先的に入居できるようにする。また都営住宅に関しては一定期間ごとに抽選が行われるようにし、流動性を高め、現役世代の比率を上げつつ、常に若い世代が入居できる状態にする（会社の独身寮のイメージ）\r
\r
\r
### このイシューで議論したいこと\r
\r
\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
中古マンション\r
5月　首都圏　前月比＋0.5％の4,627万円、都心部をはじめ東京23区では全域的に上昇\r
https://www.kantei.ne.jp/report/c202405.pdf\r
\r
新築戸建て　小規模\r
2024年5月　首都圏の新築小規模一戸建て平均価格は＋0.9％の5,341万円　4ヵ月連続上昇\r
https://www.kantei.ne.jp/report/kodatesintikukyosyo202405.pdf\r
\r
新築戸建て\r
2024年5月　首都圏の新築一戸建て平均価格は－0.9％の4,499万円　東京都が連続下落\r
https://www.kantei.ne.jp/report/kodatesintiku202405.pdf\r
\r
中古戸建て\r
2024年5月　首都圏の中古一戸建て平均価格は前月比－1.9％の3,778万円　東京都が反転下落\r
https://www.kantei.ne.jp/report/kodatecyuko202405.pdf\r
\r
海外投資家による不動産の購入額を表すインバウンド投資額は、令和５年通年で 5,758 億円（前年比約33%減少）\r
https://www.mlit.go.jp/statistics/content/001749296.pdf\r
\r
海外投資家がマンション価格を押し上げている？ インバウンド需要はいつまで続くのか\r
https://www.rakumachi.jp/news/column/319746\r
\r
東京都在住者の平均通勤時間について！職住近接のススメ\r
東京都在住者平均通勤時間43.8min　理想29min\r
通勤時間とストレス値の相関　通勤時間が長いほどストレス値高\r
https://www.chintai-assist.jp/blog/entry-196752/\r
\r
東京近郊平均通勤時間のデータ（往復）\r
・神奈川：1時間40分\r
・千葉：1時間35分\r
・埼玉：1時間34分\r
https://www.haseko-sumai.com/kurashi/archive/detail_443.html\r
https://www.livable.co.jp/l-note/life/g18174/\r
https://www.stat.go.jp/data/shakai/2021/pdf/gaiyoua.pdf\r
\r
通勤時間が健康を害し、仕事の満足度を低下させる可能性があることを、[改めて示唆]\r
http://www.businessinsider.com/commuting-is-terrible-2017-4\r
http://www.businessinsider.com/commuting-work-job-satisfaction-2017-10\r
\r
2016年のデータでは、父親の仕事と通勤の時間は「12時間以上」が最多の36%で、10時間以上で69%を占めた。「12時間以上」の父親の家事・育児時間は10分だけだった。\r
https://woman.nikkei.com/atcltrc/blog/inouemegumu/post/ea463b99fd0e40a3863b99fd0ea0a382/\r
\r
｢通勤60分以内｣が子育て夫婦の人生を変える\r
https://toyokeizai.net/articles/-/170881\r
\r
住居高騰、東京去る子育て世帯　公営活用も募集枠に限り\r
https://www.nikkei.com/article/DGXZQOCC235HE0T20C24A5000000/`,comments:{totalCount:5},reactions:{totalCount:25},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-28T05:47:56Z"},{title:"先端技術と伝統文化の調和",number:39,createdAt:"2024-06-21T15:36:32Z",url:"https://github.com/takahiroanno2024/election2024/issues/39",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [x] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
\r
#### 国際金融ハブとしての機能強化\r
\r
- 規制緩和やインセンティブ提供による柔軟な金融システムの運用や外国金融機関の誘致\r
- フィンテック産業の育成支援\r
- 留学生など国際的な人材への支援、行政機関での積極的な登用\r
\r
#### 技術イノベーションセンターとしての地位確立\r
\r
- スマートシティとしての東京（AIによる交通信号の統制で渋滞を減らす、運搬ドローンや自動運転バスの社会実装など）\r
- AI、ロボティクス、バイオテクノロジー、創薬、量子コンピューティングなどの先端技術研究への持続的な支援\r
- スタートアップエコシステムへの支援強化（資金、技術、規制緩和）\r
- 産学連携プログラムの推進\r
\r
#### 災害レジリエンスの向上\r
\r
- 地震、台風、洪水等に対する都市インフラの強化\r
- 先進的な防災技術の開発と実装\r
- 全国的な防災協力ネットワークのハブ機能としての東京\r
\r
#### 文化外交の拠点化\r
\r
- 伝統文化とテクノロジーの融合による独自のソフトパワーの発信\r
- 国際文化イベントの定期的開催（伝統芸能、アニメや漫画など）\r
- 多言語対応の文化施設の拡充（図書館など）\r
- 姉妹都市との交流強化\r
\r
#### 緑豊かな国際都市\r
\r
- 緑化への取り組み\r
- 公園の整備\r
\r
### 必要だと思ったきっかけ\r
\r
AIなどDX推進・先端技術の活用については十分過ぎるほどマニフェストに盛り込まれている。あえて付け加えるならば、東京という歴史的な都市が持つ、旧来からの伝統と文化の発展及び先端技術との調和である。\r
\r
### なぜ必要か\r
\r
これからの東京を支えていくのは、先端技術だけではない。ソフトパワーとして培ってきた伝統文化にも最大限の注意を払うべきである。\r
\r
### このイシューで議論したいこと\r
\r
先端技術と伝統文化の調和\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
伝統芸能、アニメ、漫画など東京都が誇るソフトパワーとしての文化資産`,comments:{totalCount:1},reactions:{totalCount:6},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-23T05:28:11Z"},{title:"非新規技術企業およびそこに従事する労働者に関するマニフェストについて",number:41,createdAt:"2024-06-21T17:06:38Z",url:"https://github.com/takahiroanno2024/election2024/issues/41",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [x] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
具体的な政策案ではなく現在のマニフェストに対する提案という形であるため大変恐縮ですが、経済政策のマニフェストを拝見して、非新規技術企業およびそこに従事する労働者に対する直接的な支援に関して何かしらのマニフェスト案があれば拝見したいという方はいらっしゃるのかもしれないと思いました！（ver 1.0 のスライド 22P では技術企業が既存産業の発展につながりうることは議論されていますが！）\r
例えば、他の候補者の方々は中小企業の賃上げや、都の非正規職員の雇用、事業評価対象の拡大などについて議論されていますが、このような必ずしも新規技術産業とは限らない産業やそこに従事する労働者に対してどの様な支援をするか、あるいはそこにあるどの様な問題をどの様に解決しようと考えられているかに関してのマニフェストなどのイメージです！\r
\r
### 必要だと思ったきっかけ\r
新規技術企業をどの様に誘致していくべきかについては非常にわかりやすかったのですが、その他の産業に従事する方の課題がどの様に解決されていくかについて少しわかりづらい部分を感じたためです！\r
\r
### なぜ必要か\r
現在都内に住まれている方の大多数は非新規技術企業に所属されていると認識しており、その方々の従事されている産業に対してどの様な影響が及ぶかに関する議論は、多くの方にとってどの都知事に都政をお任せするかを判断する上での重要な判断材料になりうると考えたためです。\r
\r
### このイシューで議論したいこと\r
非新規技術企業以外の企業およびそこに従事する労働者はどの様な問題を抱えており、それをどの様にして解決していくことができるかなど議論できたらと思っています！\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
例えば、以下の「産業編」の 56p など\r
https://www.sangyo-rodo.metro.tokyo.lg.jp/toukei/sangyo/koyou/\r
\r
`,comments:{totalCount:3},reactions:{totalCount:4},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-25T14:45:00Z"},{title:"塾等教育費の削減",number:43,createdAt:"2024-06-21T17:21:19Z",url:"https://github.com/takahiroanno2024/election2024/issues/43",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [x] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## [WIP] 政策\r
\r
- 都政だけで変えられることではないが、小中学校でも飛び級できるようにして、（先取りなどのための）塾などの費用を抑えられるようにする。\r
- 授業についていけない学生のための塾費用支援\r
- 受験の制度の多様化を推進する\r
\r
飛び級目的で塾に通うという懸念もあるが、勉強面以外での学習も尊重し、重視しすることで、飛び級の選択肢を制限する必要はないと考える。\r
\r
また、https://github.com/takahiroanno2024/election2024/blob/9976be388f9ed1d04297452fbd0c8490577eae2a/docs/manifest/education.md?plain=1#L80\r
\r
https://github.com/takahiroanno2024/election2024/blob/9976be388f9ed1d04297452fbd0c8490577eae2a/docs/manifest/education.md?plain=1#L100\r
\r
https://github.com/takahiroanno2024/election2024/blob/9976be388f9ed1d04297452fbd0c8490577eae2a/docs/manifest/education.md?plain=1#L102\r
\r
これを、テクノロジーに触れられるだけではなく、中高生向けの児童館のような施設にし、お互いに宿題などを見合ったりもする様にする。個人で取り組んでいるプロジェクト（アプリ作りなど）のために積極的に仲間作りを奨励する交流スペース・クリエイティブスペースを作る。年代を超えてお互いに知的好奇心を刺激し合えるほか、学校や部活以外でのコミュニティ・ネットワークを形成できるため、学生のメンタルヘルスの向上にもつながると考える。\r
\r
### 必要だと思ったきっかけ\r
\r
多額な費用をかけて勉強の先取りをさせる親が多いと感じたため。\r
平均的に高い教育水準なのもあるが、アメリカなどに比べても塾に通う生徒が圧倒的に多いため。\r
\r
### なぜ必要か\r
\r
N/S校（２０２４年度　海外大学合格者数は全国で2位）の様なカリキュラムがもっと普通になってくるなど、国内の受験の制度が変わり、評価される基準が変われば塾費用を削減できる。教育費も抑えられることに加えて、子供も自由な発想力で得意な分野の勉強を伸ばせる教育環境になると考える。\r
\r
### このイシューで議論したいこと\r
\r
子供の教育費（塾など）\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
小学生の塾にかかる年間平均費用は公立：208,000円 / 私立： 375,000円\r
中学生の塾にかかる年間平均費用は公立：356,000円 / 私立：326,000円\r
高校生の塾にかかる年間平均費用は公立：363,000円 / 私立：447,000円\r
https://sprix.inc/media/2023/03/00054/ より\r
\r
諸外国の学制のレポート、という面白いものは見つけました。\r
https://www.mext.go.jp/a_menu/shougai/chousa/__icsFiles/afieldfile/2014/09/01/1351481_1.pdf\r
`,comments:{totalCount:13},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-29T13:00:01Z"},{title:"条例の改正履歴を閲覧可能にする",number:44,createdAt:"2024-06-21T18:03:48Z",url:"https://github.com/takahiroanno2024/election2024/issues/44",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [x] 民主主義\r
\r
## 政策\r
\r
条例をGitのように履歴が閲覧可能な形で管理する。\r
\r
git blameのように履歴が追えるといいのかも。\r
\r
法律でもそう（というか、法律を見てそう思った）だが、変更履歴が追いづらい。いつどのような変更があって、それがどのような理由によるものか、というのを追えることが望ましいと思う。\r
\r
国政ではこのようなことをやっている人がいないので、とりあえず今回安野候補が立ててくださった都知事選用リポジトリにissueを立てておこうと思います。\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
\r
都知事選挙における選挙供託金の額の変遷を調べている時に、無料で見れるe-Gov法令検索では過去の改正履歴を追えないことを知った。（現在の法律しか見れない）\r
法曹用のソフトウェアでは追えるものがあるらしいが、それでは民主主義の基盤としては薄弱なものだといえる。\r
\r
### なぜ必要か\r
\r
上記の通り\r
\r
### このイシューで議論したいこと\r
\r
別に媒体はGithubでなくてもいいと思っていて、単に履歴が追えれば（git blameのような形で）いいと思う。just ideaなのでブラッシュアップしていきたい気持ちあり。\r
\r
東京都公式のwebサイトなどをブラッシュアップして、条例とかも見やすくしていきたい\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
↓一応条例データベースはあるらしいが、古すぎて見づらい\r
https://www.metro.tokyo.lg.jp/tosei/jore/jore/index.html\r
\r
`,comments:{totalCount:2},reactions:{totalCount:17},labels:{nodes:[{name:"民主主義"}]},updatedAt:"2024-06-22T08:42:33Z"},{title:"小さな政府へ",number:45,createdAt:"2024-06-21T18:05:29Z",url:"https://github.com/takahiroanno2024/election2024/issues/45",state:"OPEN",body:`## 政策ビジョン\r
住民の負担を軽減し、住民の主体性に任せる小さな政府を目指す。\r
制度改革や規制緩和などでの行政改革をまずは実行してほしい。\r
\r
現在二十代だが、政治への不信感が大きい。\r
税金の無駄遣い、中抜き、ばら撒きに対して、税金と社会保険料による手取りの低さ。\r
\r
政治家は新たに税金を使いやりたいことを発表するばかりです。\r
住民の負担を軽減し、小さな政府を目指すことで政治への信頼を東京都から取り戻してほしい。\r
\r
制度改革や規制緩和などでやれることはたくさんあるはずです。\r
未来のために、教育や経済やIT分野におけることをやってほしいと願う。\r
AIによる民主主義にとても期待しています。\r
\r
<!-- 一つ選んでください -->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [✔︎] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
・住民税減税\r
・制度改革と経済規制緩和\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
\r
### なぜ必要か\r
肥大した政府の失敗\r
\r
### このイシューで議論したいこと\r
制度改革や規制緩和で何ができるか。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
`,comments:{totalCount:5},reactions:{totalCount:5},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-06-23T22:20:08Z"},{title:"同性カップルの住民票上の取り扱いについて",number:46,createdAt:"2024-06-21T18:22:34Z",url:"https://github.com/takahiroanno2024/election2024/issues/46",state:"OPEN",body:`## 政策ビジョン

<!-- 一つ選んでください -->

- [ ] 経済
- [ ] 医療・防災
- [ ] 教育・子育て
- [x] 行政
- [ ] 民主主義

## 政策
　同性カップルの続柄を示す欄に夫/妻「未届」として記載する条例を提案します。
<!-- できる限り記入をおねがいします -->

### 必要だと思ったきっかけ

同性カップルの存在と関係性を公的に認める動きが進んでいますが、現行の法律では同性婚が認められていません。

そのため、多くの同性カップルは行政手続きや社会的認知において不利益を被っています。

現状、住民票においては、「同居人」や「縁故者」としか記載されません。そこで、住民票に未届として夫婦関係を記載する事で、住民票においてパートナーシップ制度の実態が反映されない問題を解決できます。

### なぜ必要か
現在同性婚が法制化されておらず、同性カップルは婚姻による法的保護を受けられていません。

東京都は、既にパートナーシップ宣誓制度を制定しています。東京都が先陣を切りパートナーシップ制のもとに結ばれたカップルを未届の夫又は妻として認める事は、同性婚の議論を活発化させ法制化への道を切り開きます。

これまでも東京の行政は「国に先駆けて」改革を行い、それを国が追随する形で行革が行われてきた歴史があります。

注意:同性カップルが住民票に未届の夫婦関係を記載することは、直ちに法律上の事実婚を意味する訳ではありません。
しかし、住民票上の世帯を同一にしておくと、2人が一緒に暮らしていることや同居期間の長さを証明することができます。
また、「夫（未届）」または「妻（未届）」とすることで、2人は「夫婦同然の共同生活をおくり、婚姻の意思がある関係」であること、つまり内縁関係にあることをより認められやすくなります。\uFEFF

### このイシューで議論したいこと

### 調べたこと（裏付けとなる事実・ファクト）

長崎県大村市の事例:2024年5月、同性カップルの住民票に「夫（未届）」「妻（未届）」と記載

東京都内でも、「パートナーシップ制度」を導入している、世田谷区や杉並区が大村市と同様の対応について検討を開始

https://www3.nhk.or.jp/shutoken-news/20240612/1000105424.html


2024年3月14日、札幌高等裁判所は、同性カップルの婚姻を認めない民法や戸籍法の規定が憲法に違反するとの判決を言い渡しました。

https://www3.nhk.or.jp/news/html/20240314/k10014390391000.html`,comments:{totalCount:1},reactions:{totalCount:10},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-07-02T05:01:58Z"},{title:"心身ともに健康で元気な東京都にする",number:47,createdAt:"2024-06-21T18:55:19Z",url:"https://github.com/takahiroanno2024/election2024/issues/47",state:"OPEN",body:`## 政策ビジョン\r
\r
- [ ] 経済\r
- [x] 医療・防災\r
- [x] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## [WIP] 政策\r
\r
- 世界に比べても日本は自殺率が高いため、カウンセリングを老若男女ともに健康診断と同様にノーマライズする\r
- 保険適用内にする\r
- 学校・会社内でもカウンセリングで定期的な精神の健康診断を積極的に推進する\r
- 学校の子供や職場、親ママパパに向けてアンガーマネジメントなど、感情教育をする。(https://www.yume-tamago.jp/) 学校なら保健体育の一環で、精神の健康のための教育にして、自己理解を支援する。精神衛生・メンタルヘルスにつながり、子育てや学校、職場でも役に立つ、他の人と自分の感情的なニーズなどを話しあえるスキルづくりを支援する 。\r
- 親子関係を守るための家族カウンセリングも支援する。\r
\r
### 必要だと思ったきっかけ\r
\r
- 日本の文化的に自分の感情を一人で抱え込む人が多いと感じたため。\r
- 家庭内の問題を外に相談しづらいため（特に子供の虐待など、子供にカウンセラーをつけるのは重要だと考える）\r
- カウンセリングを受けるのが高いと感じたため。\r
- 個人的に大人になるまでADHDのことをよく知らなかったため。\r
- 出口保行氏の著書で子供の非行の原因の多くは家族環境が良くないことが多いことを知ったため。\r
\r
\r
### なぜ必要か\r
\r
- 世代関係なく、ひきこもりや自殺が多いため。\r
- 多様な相談所はすでに存在するが、予防的な健康診断や指導は足りないと感じたため。\r
- EQ ・コミュケーションスキルを高めるのは、精神衛生・対人関係のためにも生涯スキルとして大事だが、学校では現時点で、問題を起こしたときにしか教わらないと感じるため\r
\r
### このイシューで議論したいこと\r
\r
ひきこもりや自殺などを予防する精神の健康を推進する政策\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
`,comments:{totalCount:3},reactions:{totalCount:1},labels:{nodes:[{name:"教育・子育て"},{name:"医療・防災"}]},updatedAt:"2024-06-24T19:27:35Z"},{title:" 地域密着型介護保険サービス拡充への支援",number:49,createdAt:"2024-06-21T21:16:32Z",url:"https://github.com/takahiroanno2024/election2024/issues/49",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
医療？保留します。\r
\r
## 政策\r
\r
地域密着型介護保険サービス拡充への支援\r
\r
### 必要だと思ったきっかけ\r
\r
政府の方針としては、介護は「施設から在宅へ、在宅から地域へ」とシフトしている。この中で制度化されてきたのが、「小規模多機能型居宅介護」や「定期巡回随時対応型訪問介護看護」などの「地域密着型サービス」である。\r
\r
### なぜ必要か\r
\r
「地域密着型サービス」は、利用者からするとかなり便利なサービスであるが、経営が難しいため現状なかなか増えていない（介護保険サービス種別ごとの整備状況は、参考資料 2）。区市町村が管轄であるので、都が区市町村を支援する必要がある。\r
\r
なお、小規模多機能型居宅介護は、目安として中学校区ごとに整備することとされている。実際、仙台市、横浜市、新潟市などはかなり整備が進んでいる（参考資料 1）。\r
\r
### このイシューで議論したいこと\r
\r
都が区市町村にどのように支援するか。\r
\r
現職は特養・グループホームの整備を掲げている（参考資料 3）が、これが適切なのだろうか？\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
参考資料 1. https://www.urbandesignmentalhealth.com/journal-3---japan-ltc.html\r
\r
参考資料 2. https://babayoshihiko.shinyapps.io/Shiny_LTCI/\r
\r
参考資料 3. https://note.com/medengwriter/n/ne0ccbaa19ba4\r
`,comments:{totalCount:0},reactions:{totalCount:1},labels:{nodes:[{name:"医療・防災"}]},updatedAt:"2024-06-23T21:25:50Z"},{title:"東京都といえども予算は無限ではない。まずムダを省く作業から。",number:50,createdAt:"2024-06-21T21:42:27Z",url:"https://github.com/takahiroanno2024/election2024/issues/50",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [x] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
安野氏のマニフェストには多くの提案が盛り込まれている。しかし現実的には、これを全て実現する財源は東京都にも国にもないだろう。\r
\r
まず取り組むべきは、行政サービスの効率化、本当に必要な行政サービスかどうかの見直し、ムダな事業や非効率な業務がないかどうかの点検である。マニフェストにある項目を実行するには、予算を捻出しなければならない。新しい都知事には、聖域なき改革を実行する覚悟が必要だと思う。少子高齢化社会では、税収も減っていく。同じ規模の行政サービスを維持することさえ困難な時代になるかもしれないのだ。\r
`,comments:{totalCount:2},reactions:{totalCount:2},labels:{nodes:[{name:"duplicated"},{name:"行政"}]},updatedAt:"2024-06-22T08:44:18Z"},{title:"「誰も取り残さない行政」の基準を明確にする",number:55,createdAt:"2024-06-22T00:40:38Z",url:"https://github.com/takahiroanno2024/election2024/issues/55",state:"OPEN",body:`## 政策ビジョン\r
\r
「誰も取り残さない行政」の基準を明確にする\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [X] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
市民の行う行政手続きはIQ70の人間が単独で実行可能なようにデザインする\r
\r
### 必要だと思ったきっかけ\r
\r
行かせない、書かせない、待たせない、迷わせないの行政改革はすばらしいのですが、特に「迷わせない」に対して明確な基準がないのはよくないと考えています。\r
\r
### なぜ必要か\r
\r
支援が受けられる知能のラインであるIQ70を基準として、IQ70の人間が単独で実行できないのであればそれは知能による排除であり差別であると以前から考えていました。行政側が妥協してでもこの基準で行政サービスは行われなくてはなりません。\r
\r
### このイシューで議論したいこと\r
\r
知能による差別は注目もされにくいが、いまの技術やスマホの普及などの環境があれば乗り越えられるはずであること\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
IQ70のラインで配慮がなくなることは以下の資料からも明白\r
[知的障害児（者）基礎調査：調査の結果｜厚生労働省](https://www.mhlw.go.jp/toukei/list/101-1c.html)`,comments:{totalCount:12},reactions:{totalCount:8},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-06-25T07:52:15Z"},{title:"ミレニアル世代～氷河期世代～団塊ジュニア世代向けの対策",number:57,createdAt:"2024-06-22T01:00:46Z",url:"https://github.com/takahiroanno2024/election2024/issues/57",state:"OPEN",body:`## 政策ビジョン\r
- [x] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
### 必要だと思ったきっかけ\r
https://github.com/takahiroanno2024/election2024/issues/41\r
に労働者向けのマニフェストがあるものの\r
対象の世代へのマニフェストが少ないと感じたのがきっかけ\r
\r
### なぜ必要か\r
人口層が厚い世代が高齢化する事による社会インフラの問題\r
１０年後には今よりも大きく表面化するのでは？\r
\r
### このイシューで議論したいこと\r
- １０年後に予想される問題の提起\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
[人口ピラミッド](https://www.google.com/search?q=%E4%BA%BA%E5%8F%A3%E3%83%94%E3%83%A9%E3%83%9F%E3%83%83%E3%83%89+%E6%97%A5%E6%9C%AC&sca_esv=e6667fb8d181e610&sca_upv=1&sxsrf=ADLYWIJTC-E6ZgY9Eem6IVARKFRGtfLpKw%3A1719016893706&ei=vR12ZtjbKr741e8PsfmKmAI&ved=0ahUKEwiYrr_6_O2GAxU-fPUHHbG8AiMQ4dUDCA8&uact=5&oq=%E4%BA%BA%E5%8F%A3%E3%83%94%E3%83%A9%E3%83%9F%E3%83%83%E3%83%89+%E6%97%A5%E6%9C%AC&gs_lp=Egxnd3Mtd2l6LXNlcnAiHOS6uuWPo-ODlOODqeODn-ODg-ODiSDml6XmnKwyBRAAGIAEMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEi6FVDTD1inEnABeAGQAQCYAasCoAHjBaoBBTAuMS4yuAEDyAEA-AEBmAICoAKVAsICChAAGLADGNYEGEeYAwCIBgGQBgqSBwUxLjAuMaAHogk&sclient=gws-wiz-serp)\r
\r
\r
[東京の労働人口](https://www.google.com/search?q=%E5%8A%B4%E5%83%8D%E4%BA%BA%E5%8F%A3+%E6%9D%B1%E4%BA%AC&sca_esv=e6667fb8d181e610&sca_upv=1&sxsrf=ADLYWILh8_WQ_t_fSOxhvzWdNfCW-jZ4YQ%3A1719017640617&ei=qCB2ZraqJZq5vr0PiJiByAY&oq=%E5%8A%B4%E5%83%8D%E4%BA%BA%E3%80%80%E6%9D%B1%E4%BA%AC&gs_lp=Egxnd3Mtd2l6LXNlcnAiEuWKtOWDjeS6uuOAgOadseS6rCoCCAAyBhAAGAcYHjIIEAAYBxgIGB4yCBAAGAcYCBgeMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIESNUSUI4BWNIEcAF4AJABAJgBpwGgAe8EqgEDMC40uAEDyAEA-AEBmAIEoALvA8ICChAAGLADGNYEGEfCAgUQABiABMICBhAAGB4YD8ICBhAAGAgYHpgDAIgGAZAGCpIHAzEuM6AHrQ0&sclient=gws-wiz-serp)\r
`,comments:{totalCount:1},reactions:{totalCount:3},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-24T12:07:37Z"},{title:"フローではなくアセットへの課税",number:60,createdAt:"2024-06-22T01:48:46Z",url:"https://github.com/takahiroanno2024/election2024/issues/60",state:"OPEN",body:`## 政策ビジョン

- [x] 経済
- [ ] 医療・防災
- [ ] 教育・子育て
- [ ] 行政
- [ ] 民主主義

## 政策
現状、所得税、住民税、社会保険料(税ではないが実質的に課税と認識)、消費などのフローへの課税が中心と認識しているが、住宅、金融資産などのアセットへの課税負担を増やす方向へ移行してほしい

### 必要だと思ったきっかけ
フローからの負担が限界に近いと感じたから

### なぜ必要か
未来志向で、活力のある社会をつくるのであれば、フローよりアセット中心で負担し、再分配した方がよいと感じたから

### このイシューで議論したいこと
税、社会保障について詳しくないので、事実誤認がないか、他の思想からの反論がないかなどコメントがほしい

### 調べたこと（裏付けとなる事実・ファクト）
ピケティ氏の提言からわが国の資産税を考える
https://www.tkfd.or.jp/research/detail.php?id=1041
など`,comments:{totalCount:1},reactions:{totalCount:4},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-22T08:44:56Z"},{title:"高校受験戦争対策",number:61,createdAt:"2024-06-22T02:24:12Z",url:"https://github.com/takahiroanno2024/election2024/issues/61",state:"OPEN",body:`## 政策ビジョン\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [x] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
* 高校受験における英語のスピーキングテストの廃止\r
* 中高生が無料で英語のリスニング・スピーキングのAIトレーニングアプリを利用できるように\r
* 学力検査で共通の問題を利用している高校に対して、第3志望まで出願できるように\r
* 内申点が悪くても学力検査だけで合格できる枠を作る\r
\r
### 必要だと思ったきっかけ\r
\r
### なぜ必要か\r
\r
東京を見ていても、他のアジア圏を見ていても、都市部の受験戦争が少子化の大きい原因の一つになっていることは明らかです。\r
経済的にも精神的にも、親子両方にとって大きな負担になり、第二子、第三子を育てる障害になっています。\r
この部分を対策しないと、いくら子育て支援として経済的な支援をしたところで、それで生まれた可処分所得が全て進学塾等に利用され、子供を増やす方向になりません。\r
\r
また、高校受験の負担回避のために中高一貫校受験の人気が高くなり、小学生から受験戦争のストレスにさらされています。子供のメンタルヘルスのためにも、受験ストレス低減が必要だと思います。\r
\r
以上が、高校受験の経済・精神的負担を減らす制度が必要だと考える理由です。\r
\r
### このイシューで議論したいこと\r
\r
例として最近追加され議論になっている英語スピーキングテストの廃止を挙げました。AIの進化により言語の壁が低くなっていますが、その中でも特にリスニング・スピーキングはAIに頼りやすい部分ですし、AIを使ったトレーニングを受けやすい分野でもあります。読み書きができれば十分でしょう。\r
\r
高校受験や公立中学を回避する動機の一つとして、内申点制度への不審もあると考えます。受験シーズンに実力を発揮できなかった生徒や特性のある生徒のために学力試験以外の評価軸が必要なのも分かりますが、一方で中学で先生とそりが合わなかった、いじめられて不登校だった等の理由がある子供があまり不利にならないような受験制度も必要ではないでしょうか？\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
スピーキングテストの混乱がまだ完全には解消していない点について\r
https://www.asahi.com/edua/article/14968099\r
\r
内申点ハック法の流通（実際にこのハックが有効かどうかが問題ではなく、内申点が不安、ストレスの原因になっていることが問題）\r
https://twitter.com/tokyokojuken/status/1727075745435152617\r
\r
教育費と少子化について\r
https://benesse.jp/kyouiku/201106/20110620-1.html\r
\r
同上。塾の費用負担が家計に占める割合が増えていることについて。\r
https://www.sangiin.go.jp/japanese/annai/chousa/keizai_prism/backnumber/r03pdf/202120202.pdf`,comments:{totalCount:5},reactions:{totalCount:4},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-25T15:51:39Z"},{title:"初期認知症の診断・リハビリの場を都として用意する。",number:63,createdAt:"2024-06-22T03:17:52Z",url:"https://github.com/takahiroanno2024/election2024/issues/63",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [ ] 経済\r
- [x] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
初期認知症の診断・リハビリの場を都として用意する。\r
\r
### 必要だと思ったきっかけ\r
母親が認知症の兆候を示し、初期の認知症を適切に診断・リハビリができる医療機関が限られていたため。物忘れ外来のうち、CT、臨床心理士、リハビリをワンストップで提供している施設が都内には存在しない現状がある。\r
\r
### なぜ必要か\r
認知症になった後の信託や公証などの制度を用いて本人の意思を尊重する仕組みは議論の余地がないが、認知症になった時にどう対応するか、そのための医療アセットが東京都にあるかについては不十分である。現状では認知症キャラバンなどの内容は認知症になった後に地域包括支援をどう活用するかの情報が中心、初期認知症に対する具体的な対応策は少ない。\r
\r
### このイシューで議論したいこと\r
初期認知症への積極的治療を民間に任せるだけではなく、都として行う必要性。また、そのために都として医師・臨床心理士の育成に取り組むべきである。\r
これはhttps://github.com/takahiroanno2024/election2024/issues/47にもつながる\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
- 東京都内には物忘れ外来や認知症疾患医療センターが多数存在するが、臨床心理士が常駐するクリニックやリハビリ治療を行う場は少ない【アルツハイマー協会】(https://www.alzheimer.or.jp/?page_id=10108),【東京都福祉保健局】(https://www.fukushi.metro.tokyo.lg.jp/zaishien/ninchishou_navi/torikumi/iryoucenter/ichiran/index.html)。\r
  - 臨床心理士が必要な理由：認知機能のテストを適切に行うため。\r
  - 多くのクリニックではCTがあるだけで、初期認知症の見極めが難しい。\r
\r
- レカネマブという認知症の悪化を抑制する薬が存在するが、あくまで進行遅滞にとどまる【厚生労働省】(https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000089508_00005.htm)。\r
  - レカネマブの年間薬価は298万円。\r
  - 改善効果の認められた認知症のデイケア週3日（年間156万円）よりも高額。\r
  - 高額な薬価のため、製薬会社はマーケティングに力を入れている。\r
\r
- 公的年金保険が75歳まで繰り下げ受給するメリットがある【東洋経済オンライン】(https://toyokeizai.net/articles/-/253332)。\r
  - 国としても労働人口が減る中、1人でも多くの労働人口を確保する必要があり、長く働く環境の整備はメンタルヘルス面でも有用\r
\r
- 年金受給可能な60歳以上であっても就労に向けた支援が必要。\r
  - 鬱病に特化したリワークだけでなく、MCI（軽度認知障害）にも特化したリワークが必要（全数を調べてない）\r
  - https://utsu-rework.org/list/`,comments:{totalCount:5},reactions:{totalCount:4},labels:{nodes:[{name:"医療・防災"}]},updatedAt:"2024-06-27T19:58:27Z"},{title:"環七・環八・首都高の平日渋滞の緩和〜深夜配達 | 東京外かく道路早期開通 | 環七・八高架化 | 首都高6車線化〜",number:64,createdAt:"2024-06-22T03:27:23Z",url:"https://github.com/takahiroanno2024/election2024/issues/64",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [x] 経済\r
- [x] 医療・防災\r
- [ ] 教育・子育て\r
- [x] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
①物流の深夜配達の推進\r
目的：昼間の交通量を減少させ、渋滞を緩和します。\r
具体策：深夜に配達ができるよう、宅配ボックスの設置助成金、無人宅配ロボットの導入助成金、配達用EV車(ガソリン車では騒音の問題があるため)の助成金を提供し、物流業者のコストを削減し、深夜配達を実現しやすくします。\r
\r
②東京外かく道路の早期開通\r
目的：外かく道路の早期開通により、都心部への交通流入を減少させます。\r
具体策：行政が積極的に問題解決に取り組み、必要な予算を確保します。国だけではなく都が責任を持ってプロジェクトを推進し、早期の完成を目指します。\r
\r
③環七・環八の高架化と首都高の6車線化\r
目的：大量の信号や右折レーンによる渋滞を解消し、交通の流れをスムーズにします。\r
具体策：環状道路の大部分を高架化し、高架の下に商業施設や住宅を設け、地域経済の発展も図ります。特に6号三郷線の渋滞緩和のため、向島線や中央環状線を片側3車線、6車線道路に拡張します。向島線は隅田川、中央環状線は荒川に接しており、用地取得が比較的容易であることから、川の上に新たな車線を追加し、スムーズな交通を実現します。自動運転専用道路としての設計を同時に考えても良いかもしれません。\r
\r
### 必要だと思ったきっかけ\r
自分が運転してて困っているからです。\r
\r
### なぜ必要か\r
東京の主要道路である環七・環八・首都高は、平日の朝や夕方に通勤や物流の車で毎日渋滞しています。この渋滞は通勤時間の長期化、物流の遅延、経済的損失、環境汚染など多岐にわたる問題を引き起こしています。\r
\r
### このイシューで議論したいこと\r
・この政策はかなり主観的な部分や予算を度外視したものが含まれているため、都内を運転するドライバーから意見を広く聞いてみたいです。\r
・実際に各施策を実行するために必要な予算や期間を算出する根拠を議論したいです。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
【国土交通省】道路関係データ（交通量・旅行速度・渋滞　等）\r
https://www.mlit.go.jp/road/ir/ir-data/ir-data.html\r
\r
【関東地方整備局 H11】首都圏の交通の問題\r
https://www.ktr.mlit.go.jp/gaikan/pi_kouhou/40th/s5_1_2.pdf`,comments:{totalCount:0},reactions:{totalCount:1},labels:{nodes:[{name:"医療・防災"},{name:"経済"},{name:"行政"}]},updatedAt:"2024-06-22T08:45:40Z"},{title:"東京都教育支援機構の民営化",number:65,createdAt:"2024-06-22T03:40:35Z",url:"https://github.com/takahiroanno2024/election2024/issues/65",state:"OPEN",body:`## 政策ビジョン\r
- 東京都教育支援機構を民営化をし、公教育の民営化を促進する。\r
\r
<!-- 一つ選んでください -->\r
\r
- [ ] 教育・子育て\r
\r
## 政策\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
\r
### なぜ必要か\r
\r
### このイシューで議論したいこと\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
`,comments:{totalCount:3},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"教育・子育て"}]},updatedAt:"2024-06-22T15:22:13Z"},{title:"災害に強く、安全に暮らせる東京の実現",number:66,createdAt:"2024-06-22T03:42:53Z",url:"https://github.com/takahiroanno2024/election2024/issues/66",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [ ] 経済\r
- [x] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
* 木造住宅密集地域の不燃化・建築物耐震化を加速\r
* 豪雨対策として地下調節池の整備や河川の改修などのハード整備を加速化\r
* 帰宅困難者の一時滞在施設の物資の備蓄をサポート\r
* 都内の道路の拡幅を推進\r
* 近隣自治体との広域的な連携や自衛隊との協力関係を更に強化\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
今年1月の能登半島地震の被害を目の当たりにし、都民の命と生活を守るために大災害への不安を解消する必要があると感じました。\r
\r
### なぜ必要か\r
首都直下型地震は30年以内に70％の確率で発生するといわれており、木造住宅密集地域の不燃化、建築物の耐震化のスピードアップや、3.11でも表面化した帰宅困難者対策の更なる強化が必要です。豪雨対策については、NHKが前回4年前の都知事選に合わせて行った都民1万人アンケートでも50%が防災分野で優先的に取り組んでほしい政策として挙げています。2019年の台風19号では都内でも住宅の浸水被害など大きな被害が出ており、命を守るためのハード整備が必要です。\r
\r
### このイシューで議論したいこと\r
災害から都民を守る「防災都市」の確立について。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
* https://www.bousai.go.jp/kyoiku/hokenkyousai/jishin.html\r
* https://www.nhk.or.jp/senkyo/opinion-polls/02/`,comments:{totalCount:29},reactions:{totalCount:1},labels:{nodes:[{name:"医療・防災"}]},updatedAt:"2024-07-01T14:31:17Z"},{title:"安野氏のアピアランス改善",number:70,createdAt:"2024-06-22T05:57:51Z",url:"https://github.com/takahiroanno2024/election2024/issues/70",state:"CLOSED",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ✔︎ ] 民主主義\r
\r
## 政策\r
\r
・安野氏のアピアランス改善を行う\r
\r
### 必要だと思ったきっかけ\r
\r
・民主主義社会においてはアピアランス等も重要視する者があることtweetが指摘していたhttps://x.com/sgee30418056/status/1804167831296315799\r
\r
### なぜ必要か\r
\r
・政策の実現に向け、様々な価値判断の基準を持つ東京都民からできる限り受容いただける可能性を高め、当選するため。\r
\r
### このイシューで議論したいこと\r
\r
・見た目へのこだわりがある、どのアピアランスであってもその中身が尊重されるべきだと考えられている場合は、本イシューを放念ください。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
・https://www.kantei.go.jp/jp/rekidainaikaku/index.html\r
`,comments:{totalCount:8},reactions:{totalCount:3},labels:{nodes:[{name:"民主主義"}]},updatedAt:"2024-07-03T09:22:01Z"},{title:"【要議論】児相は本当に虐待被害者のセーフティネットとして機能しているのか？",number:73,createdAt:"2024-06-22T06:15:11Z",url:"https://github.com/takahiroanno2024/election2024/issues/73",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [x] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
都内児童相談所について、 **駆け付けた児童の即保護を原則化 （「追い返し」の原則禁止）**\r
\r
### 必要だと思ったきっかけ\r
\r
児童相談所を利用したことがなく、一個人のツイッターが根拠で恐縮ではありますが、前々から「[村田@元被虐児童](https://twitter.com/DYdZZP59VT2LSgG)」氏のポストに注目しておりました。\r
\r
例えば\r
>虐待も勿論辛かったけど、それで児相や警察、支援センター行った時の方が精神的にはきつかった。\r
具体的には\r
・殆ど話聞いてもらえず帰される\r
・「親に逆らうな！」と刑事に怒鳴りつけられる\r
・「子育ては大変だから」などと親だけ擁護される\r
\r
[引用元](https://x.com/DYdZZP59VT2LSgG/status/1804360349946384444)\r
\r
など、「現実に起きているとは思いたくないが、**理論上起こっていてもおかしくはない**」児相のバグを指摘しています。\r
\r
すなわち、児相が「自分の仕事が増えるから」と虐待児童を面倒くさがって追い返しているのではないか？という問題点が指摘されることかと思います。\r
\r
### このイシューで議論したいこと\r
再度、児童相談所を利用したことがないので、事実認識が曖昧で恐縮ですが、\r
- 事実として児相はセーフティネットとしての機能をどこまで果たせている（果たせていない）か\r
- いかに虐待被害者を **全員** 保護するべきか\r
\r
**問題提起として** 議論したくissueを立てました`,comments:{totalCount:1},reactions:{totalCount:5},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-22T13:07:51Z"},{title:"コロナ後遺症への対策、また同様の新規疾患が発生した場合の対策",number:74,createdAt:"2024-06-22T06:22:31Z",url:"https://github.com/takahiroanno2024/election2024/issues/74",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [ ] 経済\r
- [x] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
・コロナ後遺症患者への金銭・生活援助の保障\r
・コロナ後遺症を診る医者の確保\r
・今後、新規疾患が発生した場合の対策\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
私自身がコロナ後遺症で寝たきりとなり、仕事も失い、貯金を切り崩しての生活をしています。（ワクチン開発前のことなので、ワクチン由来ではありません）\r
さらに、私はコロナ初期症状が弱かったため、コロナと気付かず、1年以上病院をたらい回しになり、どんどん悪化して寝たきりになった経緯があります。寝たきりになった後も、福祉サービスを中々受けられず非常に困りました。現在も保障が十分とは言えず、困っています。\r
\r
コロナ罹患者は国内の約3分の1、コロナ罹患者の10～20％に程度の差はあれコロナ後遺症が残るというデータも出ています。つまり、現在、**国民の3％～6％がコロナ後遺症患者**である可能性があります。\r
\r
障害者手帳の申請もしましたが、新規疾患のため非常に時間が掛かりました。\r
**医者が診断書を書く資格を得るには「その疾患について5年以上の臨床経験」が必要**です。**新規疾患への対応が絶対に出来ない制度**です。\r
新規疾患の患者が障害者手帳を得ることは難しく、さらに、**行政の福祉サービスは障害者手帳を持っていることが前提の仕組みである**ため、明らかに寝たきりで大変な思いをしているのに、行政から何も福祉サービスを受けられない期間が長く続きました。\r
\r
私は幸いコロナ後遺症から慢性疲労症候群という疾患へ移行したため、診断書を書ける医者がいましたが、その疾患に関する診断が出来る医者も全国に数名です。\r
さらに、**明らかに寝たきりにもかかわらず、障害者手帳の審査区分に当てはまらないため、5級という軽度の障害にしか認定されていません**。\r
\r
コロナ後遺症を診てくれる医者も少ないです。\r
国民の3~6%が罹っている可能性があるにもかかわらず、現在もコロナ後遺症に関する知識が医者に広がっているとは思えません。\r
コロナ後遺症は患者によって多様な症状が出るため、診断や治療には時間が掛かるにも関わらず、**診療報酬も安く、診るだけ損な疾患**になっているのも問題です。\r
\r
コロナ後遺症の代表的な症状の一つに**「ブレインフォグ」という脳みそにもやがかかって思考力が著しく低下**するものがあります。\r
症状がひどいときには、たとえば「お皿を洗おう」の1フレーズを思考するにも、お皿を→洗おうの間に1㎞激しく泳いだ後のような疲労や頭痛、全身痛を感じることさえあります。\r
このような状態で、**一人暮らしで身寄りもない場合、福祉に繋がることが非常に難しいです。繋がっても上記の理由で何も対応してもらえない**ことさえあります。\r
**福祉に繋がりやすく、病態の重い人でも手続きが出来るような仕組み**を期待しております。\r
\r
まず、**現在コロナ後遺症で苦しむ人を助けてほしい**です。\r
さらに、**コロナ後遺症のような新規疾患が新たに出てきた場合、対処が出来るような体制**にしてほしいです。\r
\r
### なぜ必要か\r
コロナ罹患者は国内の約3分の1、コロナ罹患者の10～20％に程度の差はあれコロナ後遺症が残るというデータも出ています。つまり、現在、国民の3％～6％にコロナ後遺症患者となっています。\r
これはこどもから若年・働き盛りの年齢～高齢者までまんべんない問題です。\r
**福祉の問題はもちろん、人手不足の問題においても、国民、都民の最優先の課題**だと思います。\r
\r
### このイシューで議論したいこと\r
この提起でまずコロナ後遺症の現状について知ってもらいたいです。\r
\r
コロナはまた罹患者数が増えてきています。\r
私はもうこれ以上私のように苦しむ人が増えてほしくありません。\r
マスク手洗いうがいなど基本的な感染対策を徹底していただくと共に、コロナ後遺症の知識を得て、万が一コロナ後遺症になってしまった際にいち早く治療に繋がってほしいです。\r
\r
私のように初期症状が無症状・軽微だった場合、コロナ罹患に気づかずコロナ後遺症になってしまっている人も多くいるはずです。\r
なんとなく調子が悪い、なぜかミスが増えた、思考力が落ちている、微熱が続いている、なぜか全身痛い、など、ご本人はもちろん、周りの人で調子がおかしい人がいれば、ぜひ治療の選択肢をお伝えください。\r
患者本人は思考力が落ちて、自分の体調が悪いことにすら気付いていない可能性すらあります。周りの人の声が重要です。\r
\r
今元気なあなたも、明日コロナに罹患し、寝たきりになる可能性があります。\r
他人事と思わず、ぜひ賛同して欲しいです。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
国内の感染者数\r
https://www3.nhk.or.jp/news/special/coronavirus/data-all/\r
\r
国内のコロナ後遺症患者\r
https://www3.nhk.or.jp/news/special/coronavirus/after-effect/detail/detail_24.html\r
\r
身体障害者福祉法第15条の規定に基づく医師の指定\r
https://www.fukushi.metro.tokyo.lg.jp/shougai/jigyo/ishishitei.html\r
\r
平畑医師によるコロナ後遺症の症状や治療法、情報についてまとめたサイト\r
https://www.longcovid.jp/index.html`,comments:{totalCount:3},reactions:{totalCount:4},labels:{nodes:[{name:"医療・防災"}]},updatedAt:"2024-07-03T12:07:16Z"},{title:"介護、医療分野でのAIとロボット、身体拡張技術を使う実証実験",number:80,createdAt:"2024-06-22T13:23:41Z",url:"https://github.com/takahiroanno2024/election2024/issues/80",state:"OPEN",body:`## 政策ビジョン\r
\r
<!-- 一つ選んでください -->\r
\r
- [x] 経済\r
\r
## 政策\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
介護人材、医療人材は、運転手不足よりずっと前から課題とされたきたが、解消されていない。\r
特に地方で顕在化しているが、都内にも過疎地があり、過疎地での医師、看護師不足は課題であり、介護人材は都市部でも不足している。\r
これらは、AIの発展にも関わらず、実証実験の例が少なく、解消に向かってないから。\r
\r
\r
### なぜ必要か\r
これから急激に進む高齢化と少子化による労働力不足は、少子化対策で解消できない。なぜなら、少子化は1980年代から進んでおり、問題は子供を産める年齢層が先細りしており、今からやっても正直遅いと考えている。\r
それであれば生産力不足を新しい技術で補う方が現実的だから。\r
さらに、実用化された場合、国内のみならず、海外での展開が見込める技術であるから。\r
\r
### このイシューで議論したいこと\r
実証実験への課題\r
\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
日本の人口統計\r
海外の人口統計*韓国、中国は日本以上に少子高齢化に悩まされる。\r
介護テクノロジーの事例`,comments:{totalCount:1},reactions:{totalCount:3},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-23T11:10:40Z"},{title:"行政で使うクラウドベンダは国内のものを選ぶ",number:82,createdAt:"2024-06-22T13:26:40Z",url:"https://github.com/takahiroanno2024/election2024/issues/82",state:"OPEN",body:`## 政策ビジョン\r
海外のクラウドベンダが選択肢にあっても、国内のクラウドベンダも選択肢に入れる。\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [x] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
海外のクラウドを使う流行りがありますが、国内のクラウドも十分使える。\r
\r
### なぜ必要か\r
技術の流行りという文脈で海外クラウドを使ってしまうのではなく、国内の行政なので国内のクラウドを選ぶべき。機能や技術の面では国内クラウドでも十分だと思います。\r
\r
### このイシューで議論したいこと\r
国内クラウドを選ぶ理由。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
海外クラウドのAWSと、国内クラウドのさくらのクラウドで、HelloWorldを試した。`,comments:{totalCount:7},reactions:{totalCount:0},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-07-02T05:48:02Z"},{title:"Issue label CI test 2",number:84,createdAt:"2024-06-22T13:33:45Z",url:"https://github.com/takahiroanno2024/election2024/issues/84",state:"CLOSED",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [X] 経済\r
- [ ] 医療・防災\r
- [X] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
\r
### なぜ必要か\r
\r
### このイシューで議論したいこと\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"教育・子育て"},{name:"経済"}]},updatedAt:"2024-06-22T13:34:41Z"},{title:"児童養護施設にいる子供さんと家庭的養護の推進について",number:86,createdAt:"2024-06-22T14:03:32Z",url:"https://github.com/takahiroanno2024/election2024/issues/86",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [x] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
児童養護施設で養護されているお子さんが多くいるが、家庭的な環境で育つ機会が十分に得られていない。\r
そのため、将来その子たちが育った際に家庭を持とうと思ったときに支障が出てくる。\r
誰もが家庭的な環境を経験して育つ環境を用意することが、人生の充実に繋がってくるため\r
家庭的な環境を経験できる割合をもっと増やすべきかと思います。\r
ひいてはこれが、長い目で見た少子化対策の一助となるはずなので、\r
他の少子化対策と並行して進めていくことが望ましいと思います。\r
\r
### 必要だと思ったきっかけ\r
\r
私は結婚しておりますが、残念ながら子宝には恵まれず、特別養子縁組制度を通じて\r
親が育てられない子供さんを引き取ろうと考えております。\r
東京都の研修も受け、里親登録も済ませております。\r
その中で、これだけ人口が多く里親候補もいる中で、なかなか家庭的な環境で育つ\r
児童養護施設の子供さんがまだまだ多いです。\r
里親になるための研修を通じて、研修のカリキュラムや児童養護施設の方との対話を通じて\r
この問題を知ることになり、ISSUEとして挙げることにしました。\r
\r
### なぜ必要か\r
\r
子供は親を選べません。不幸にも子供を育てることができない親の下に生まれてしまった子供さんを\r
社会でしっかりと育て、将来に希望をもって生き、家庭を持ち、未来の社会を支える一人に育てることは\r
今後さらに進む少子化に資することであるためこの政策は必要だと考えます。\r
\r
### このイシューで議論したいこと\r
\r
養育里親制度、特別養子縁組制度の活用をいかに促進し、効率的に行っていくかを議論すべきかと思います。\r
人の人生を左右することであるのであまりに効率を追求しすぎることには懸念がありますが、\r
現在の養育里親制度や特別養子縁組制度に関係するオペレーションについては非効率なところがあります。\r
おそらく、マンパワーが足りず、作業のIT化に手を付けられていないところがあるようです。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
- [東京都における家庭的養護の推進](https://www.fukushi.metro.tokyo.lg.jp/kodomo/katei/jifukushin/jidou_26nd/senmon_26nd/dai1kai.files/shiryou2-1.pdf)\r
    - 家庭的養護の割合は3割にとどまる`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-23T21:50:02Z"},{title:"日本のリーダーとして、日本全体も見据えた教育格差緩和策の検討",number:87,createdAt:"2024-06-22T14:15:00Z",url:"https://github.com/takahiroanno2024/election2024/issues/87",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [X] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
東京の教育を充実させるための具体的な施策、素晴らしいです。\r
ただ、その一方、国内地方との財力の差も含め、教育の地域格差も大きくなっていくように思えます。\r
日本のリーダーとして、日本も見据えた格差緩和策(それは、例えば地方の教育レベルを上げる方法を地方と一緒に進める等)を考慮いただくのも必要ではないでしょうか。\r
教育は、授業だけでなく、人と人とのまじわりもふくめたコミュニケーションや共同作業で得るものも大きいと思います。\r
リアルとICT等の技術を合わせて、地方と一緒に教育レベルを上げていく政策が考えられないでしょうか。\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
すみません、政策の中に記してしまいました。\r
### なぜ必要か\r
こちらも、上記に含めてしまいましたが、東京と地方の教育格差が大きくなると、ますます東京への集中が進み、かつ地方は衰退します。それは、日本全体としては衰退する方向に進むように思われますし、結局東京も衰退するか、ある特定の層だけが恩恵を得られることとなりかせません。\r
### このイシューで議論したいこと\r
同上\r
### 調べたこと（裏付けとなる事実・ファクト）\r
すみません。様々な情報からの多分に推測も含まれたものとなります。\r
ただ、例えば大学について見ても、(これは国の問題ではありますが)地方の(国公立)大学への給付がますます減ってきていて、地方と首都圏の大学格差・教育格差が大きくなってきているという事実があります。`,comments:{totalCount:3},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-23T04:42:53Z"},{title:"産婦人科における無痛分娩の推進",number:92,createdAt:"2024-06-22T15:19:49Z",url:"https://github.com/takahiroanno2024/election2024/issues/92",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [X] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
SNS上で出産の体験談を読んでいると、無麻酔で出産をした体験がトラウマとして残っている女性が多くいることに気がついた。\r
\r
### なぜ必要か\r
医療行為に際して患者の苦痛をなるべく低減する処置は人道的に考えて必要だといえるが、現状、無痛分娩は保険適用外かつ補助等の対象外であり、選択した場合のおおよその相場は10万円〜20万円と高額である。\r
また、そもそも無痛分娩を導入している産科の数そのものが少ないため、需要に供給が追いついていない状況であり、行政からの支援が必要ではないかと考える。\r
\r
### このイシューで議論したいこと\r
・安全性について\r
・金銭面の支援方針について\r
・産科における麻酔科医不足の解消について\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
\r
`,comments:{totalCount:7},reactions:{totalCount:6},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-27T14:24:22Z"},{title:"介護保険非対象の障害者、難病患者にたいする補装具などの福祉用具レンタル制度",number:93,createdAt:"2024-06-22T15:36:11Z",url:"https://github.com/takahiroanno2024/election2024/issues/93",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [X] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
現在、介護保険の対象者である65歳以上の高齢者が、車椅子や杖などの補装具を必要とした場合は、介護保険の制度で月単位でレンタルすることができますが、障害者や難病患者が車椅子などの補装具を必要と考えた時、手に入れる手段は補装具費支給制度で購入するしかありません。しかし、私自身難病を患っているのですが、体調の変動が激しいため、車椅子を必要としている時とそうでない時があり、購入よりレンタルの方が適切な入手方法である現実があります。\r
### なぜ必要か\r
難病患者以外でも、生まれつきの肢体不自由の子は成長とともに2-３年で使っている車椅子が合わなくなってしまうという現実があります。そのたびに補装具費支給制度で購入し直すことになり、古い車椅子は使わないことになりますが、これは非常にもったいないのではないでしょうか？車椅子にレンタル制度を設ければ、成長とともに新たな車椅子を作成する必要がなくなる場合も増えて、公費削減にもつながると思います。\r
### このイシューで議論したいこと\r
レンタル制度の具体的な運用方法\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
`,comments:{totalCount:1},reactions:{totalCount:4},labels:{nodes:[{name:"医療・防災"}]},updatedAt:"2024-06-25T04:49:17Z"},{title:"知事候補者の予備選挙制度",number:94,createdAt:"2024-06-22T15:43:32Z",url:"https://github.com/takahiroanno2024/election2024/issues/94",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [X] 民主主義\r
\r
## 政策\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
\r
東京都は有権者数が1000万人を超え、スウェーデンなどの国家予算に匹敵する。影響力、権限が非常に強いリーダーを選ぶのに、わずか17日間の選挙期間はあまりにも短い。売名目的とみられる候補者も乱立している。期日前投票をする有権者も増えている。\r
\r
現行法の枠内で、知事を選出する仕組みを抜本的に改める必要があると考えた。\r
\r
### なぜ必要か\r
\r
直線選挙で選ばれる知事といえども、議会の現有勢力の協力が必要不可欠である（地方自治法96条）。\r
知事には、地方議会を解散する権限がない（小池百合子氏は2016年の初出馬時に都議会の冒頭解散を公約に掲げたが、そのような権限は知事になく、もちろん解散などできなかったのは周知のとおりである）。\r
\r
法制度上、都議会の協力（過半数の賛成）を得ずして、都知事は政策を前に進め、実現することはできない。\r
では、議会多数派の協力を得られる候補は誰なのか。\r
従来の知事選挙では、それが非常にわかりにくかった。\r
今回も各候補者はどの会派の支持、推薦を受けて都政を運営する方針なのか、明示していない。\r
\r
投票する際「議会多数派の協力を得られる候補なのかどうか」は非常に重要なファクターになるはずである。\r
議会の協力を得られる候補が当選すれば、掲げた政策を実現できる可能性が高い。\r
議会の協力が得られる見込みのない候補が当選した場合、政策を実現できる見込みは低く、議会多数派の意向に沿った運営を余儀なくされる可能性が高い。\r
その場合は「議会の多数派形成」という政治課題を背負い、政党の結成も必要となるかもしれない（小池氏が初当選後に「都民ファーストの会」を結成したことは周知のとおりである）。\r
\r
したがって、本来は選挙前に、次の都議会議員選挙での多数派形成に向けた政治的な力量も問われなければならない。だが、わずか17日間の選挙期間ではそのような準備は不可能である。\r
\r
そこで、都議会の会派が公認の立候補者を擁立するための「予備選挙」を実施すべきである（細かいことを言えば、都議会には会派が多数あるので、複数の会派が連合して統一公認候補を擁立することも認められる。大きく3つ程度の会派連合が予備選挙を経て3人程度の公認候補を決めるのが理想的かと思う）。\r
\r
本選挙に立候補しようとする者は、まず会派内で複数の候補者による予備選挙を経て公認候補となることを目指すべきである。\r
\r
このような予備選挙を導入すれば、本選挙は「会派が擁立した公認候補者どうしの争い」として、主要メディア等が主催する討論会がやりやすくなる。\r
現状では、主要メディアが恣意的に候補者を絞り込んだ報道を行うことになり、公平性の観点からも大変よろしくない。\r
予備選挙が行われるようになれば、都議会選挙への関心も高まり、投票率を高めるはずである。\r
\r
公職選挙法上は事前運動が禁止されるが、予備選挙はあくまで「会派内公認候補」に選ばれるための争いであって「選挙運動」ではないという形をとれば、法律上問題とならない。何よりも「より良い候補者を時間をかけて選出できるようになる」という大きなメリットがある。\r
\r
既存会派の公認を得られない「無所属」候補者が出馬できなくなるわけではない。\r
もちろん公職選挙法に基づいて立候補の届出はできる。\r
\r
ただし、告示日前に立候補予定の発表はできても、予備選挙に出なければ候補者の知名度は上がらないので本気で知事を目指すなら、いずれかの会派内予備選挙に出て、予備選挙討論会に出て名前を売ろうとするであろう。\r
さもなければ、告示日後も報道の扱いや討論会の出席面で不利な立場に置かれるということである。\r
\r
そうした「無所属」候補者が受ける不利益よりも予備選挙を通じて政策論議、人物評価、身体検査が行われ、「より良い候補者を時間をかけて選出できるようになる」という都民有権者が得られる利益の方がはるかに大きいと考える。\r
\r
### このイシューで議論したいこと\r
\r
予備選挙を導入すべきか否か。\r
\r
現実に予備選挙を導入するには、各会派が自主的に公認候補の競争的選出を行うか、都議会で「都知事選予備選挙条例」を制定して制度化することが考えられるが、具体的には、どうすればいいか。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
都議会は定員１２７、現員は１１８、会派は６つあり、最大会派は自民党の２７である。\r
https://www.gikai.metro.tokyo.lg.jp/outline/factional.html\r
\r
アメリカでは州知事の予備選挙が行われている。\r
https://www.jetro.go.jp/biznews/2022/05/59bb6ff9935f661e.html`,comments:{totalCount:2},reactions:{totalCount:2},labels:{nodes:[{name:"民主主義"}]},updatedAt:"2024-06-23T11:52:35Z"},{title:"株式投資型奨学金ファンドの設立",number:96,createdAt:"2024-06-22T18:08:27Z",url:"https://github.com/takahiroanno2024/election2024/issues/96",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [X] 経済\r
- [ ] 医療・防災\r
- [x] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
政策マニフェストの「東京をグローバルな知の還流拠点とする」を実現するために、東京都の大学・高専に通う学生を対象として奨学金を支給する、[株式投資型奨学金ファンド](https://kamenoseiji.hatenadiary.org/entry/20160604/1465013912)を設立してはいかがでしょうか。株式投資型奨学金ファンドとは、在学中の学費・研究費・生活費を支給する（投資）一方で、対象者が卒業後に年収のx%を配当として毎年ファンドに還元する仕組みです。配当率xは、例えば支給年数と同じ（4年間支給を受けたら年収の4%）くらいを想定します。\r
学生支援機構の奨学金という名前の教育ローンとは異なり、負債ではありません。高等教育により収入が増えることは統計的に明らかで、プラスのリターンが期待される投資です。高収入を得る人からは出資額を上回るリターンが期待できますし、不測の事態で無収入になってしまった人に債務は残りません。\r
企業に投資する株式のように、人に投資する事業です。「高等教育を受ける人だけに税金が使われるのは不公平だ」という批判は当てはまりません。\r
政府や自治体のように徴税権を持つ組織は、配当回収漏れのリスクが小さいです。卒業後に東京都を離れたとしても、追跡して収入を把握する仕組みが必要になります。\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
首都圏の大学に通う地方出身者の割合が減少しています。[読売新聞2024年3月24日](https://www.yomiuri.co.jp/national/20240311-OYT1T50173/#)によると、首都圏の生活費高騰が原因に挙げられています。経済的理由で学ぶ機会を失うのは社会的にも損失です。\r
\r
### なぜ必要か\r
「東京をグローバルな知の還流拠点とする」には、世界中の知の拠点から抜きんでて、東京の大学・高専に通うメリットを提示する必要があります。富裕層でなくても東京で学べ成長できる方策を提示することで、日本中、世界中の優秀な学生を呼び込めると期待できます。\r
[株式投資型奨学金ファンド](https://kamenoseiji.hatenadiary.org/entry/20160731/1469954464)は、若い世代に学費の心配なく学び成長する機会を提供する一方で、出資元には将来の安定したリターンが期待できます。\r
\r
### このイシューで議論したいこと\r
\r
- 株式投資型奨学金ファンドについて不明な点の質疑応答\r
- 問題点の指摘および改善の提言\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
- [奨学金破産](https://www.nhk.or.jp/gendai/articles/3815/)\r
- [高等教育による収入の増加](https://www.nenshuu.net/sonota/contents/gakureki.php)`,comments:{totalCount:15},reactions:{totalCount:6},labels:{nodes:[{name:"教育・子育て"},{name:"経済"}]},updatedAt:"2024-06-30T01:48:12Z"},{title:"特別会計の追及",number:97,createdAt:"2024-06-22T21:41:58Z",url:"https://github.com/takahiroanno2024/election2024/issues/97",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [X] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [X]民主主義\r
\r
## 政策\r
\r
特別会計の追及\r
\r
### 必要だと思ったきっかけ\r
・議員の裏金不追及度合いがあまりにも異常で、\r
ヤクザ以上に政府がヤクザだと感じられる為\r
・三権分立が成り立っていないと感じるため\r
・大麻の麻生、レイプの小泉純一郎の追及をして欲しいため\r
\r
### なぜ必要か\r
政治に透明性を持たせるため\r
3S政策で鎮火されてしまった愚民の目を覚ますため\r
\r
### このイシューで議論したいこと\r
\r
・米国からの完全独立によって、特別会計のアメリカ垂れ流しをどう辞めるか\r
・法人税を下げ、消費税を上げるという"株式会社政府"が儲かる仕組みを辞めさせること\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
https://kokkai.ndl.go.jp/txt/121304376X00320240220/38\r
https://kokkai.ndl.go.jp/txt/121304376X00320240220/38\r
https://ja.wikipedia.org/wiki/3S%E6%94%BF%E7%AD%96\r
\r
\r
\r
`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-22T21:42:11Z"},{title:"特別会計の追及",number:98,createdAt:"2024-06-22T21:42:35Z",url:"https://github.com/takahiroanno2024/election2024/issues/98",state:"CLOSED",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [X]民主主義\r
\r
## 政策\r
\r
特別会計の追及\r
\r
### 必要だと思ったきっかけ\r
・議員の裏金不追及度合いがあまりにも異常で、\r
ヤクザ以上に政府がヤクザだと感じられる為\r
・三権分立が成り立っていないと感じるため\r
・大麻の麻生、レイプの小泉純一郎の追及をして欲しいため\r
\r
### なぜ必要か\r
政治に透明性を持たせるため\r
3S政策で鎮火されてしまった愚民の目を覚ますため\r
\r
### このイシューで議論したいこと\r
\r
・米国からの完全独立によって、特別会計のアメリカ垂れ流しをどう辞めるか\r
・法人税を下げ、消費税を上げるという"株式会社政府"が儲かる仕組みを辞めさせること\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
https://kokkai.ndl.go.jp/txt/121304376X00320240220/38\r
https://kokkai.ndl.go.jp/txt/121304376X00320240220/38\r
https://ja.wikipedia.org/wiki/3S%E6%94%BF%E7%AD%96\r
\r
\r
\r
`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"民主主義"}]},updatedAt:"2024-07-01T13:43:10Z"},{title:"特別会計の追及",number:99,createdAt:"2024-06-22T21:43:17Z",url:"https://github.com/takahiroanno2024/election2024/issues/99",state:"CLOSED",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [X]民主主義\r
\r
## 政策\r
\r
特別会計の追及\r
\r
### 必要だと思ったきっかけ\r
・議員の裏金不追及度合いがあまりにも異常で、\r
ヤクザ以上に政府がヤクザだと感じられる為\r
・三権分立が成り立っていないと感じるため\r
・大麻の麻生、レイプの小泉純一郎の追及をして欲しいため\r
\r
### なぜ必要か\r
政治に透明性を持たせるため\r
3S政策で鎮火されてしまった愚民の目を覚ますため\r
\r
### このイシューで議論したいこと\r
\r
・米国からの完全独立によって、特別会計のアメリカ垂れ流しをどう辞めるか\r
・法人税を下げ、消費税を上げるという"株式会社政府"が儲かる仕組みを辞めさせること\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
https://kokkai.ndl.go.jp/txt/121304376X00320240220/38\r
https://kokkai.ndl.go.jp/txt/121304376X00320240220/38\r
https://ja.wikipedia.org/wiki/3S%E6%94%BF%E7%AD%96\r
\r
\r
\r
`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"民主主義"}]},updatedAt:"2024-07-01T13:43:22Z"},{title:"全般的に対策が具体的でない（所得倍増の見直し希望）",number:100,createdAt:"2024-06-22T22:00:39Z",url:"https://github.com/takahiroanno2024/election2024/issues/100",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ X] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
　現状分析は出来ていて、「これ良くないから、対策としてこれやりたい。」までは読み取れました。「どこまで、いつまでに」という記述がほぼないと思いました。具体的には所得倍増とは何の数値をいくつからいくつにするのか？倍増と言うからには必要でしょう。自分としては反対ですが、それはともかく、もともとやるつもりがない宣言だと思いましたので修正を提案します。\r
\r
### なぜ必要か\r
　　　倍増って何が倍になるの？自分の給料が2倍になるのね？と思わせてしまう。結果、マニフェストを達成したことにならない。（都民全員の所得を2倍にするなら問題ないです）\r
\r
### このイシューで議論したいこと\r
　　　「倍増」の提案をやめるか、「倍増」の定義は、この数値のことで、これを2倍にします、と明確にする。例えば「最低時給1113円を2226円にします」とするべきです。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
　　　東京の最低時給　1113円　厚労省サイトよりhttps://jsite.mhlw.go.jp/tokyo-roudoukyoku/hourei_seido_tetsuzuki/_110744/conttop_00001.html\r
`,comments:{totalCount:0},reactions:{totalCount:9},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-22T22:00:50Z"},{title:"東京の道路交通状況を改善する現実的施策",number:101,createdAt:"2024-06-22T22:52:51Z",url:"https://github.com/takahiroanno2024/election2024/issues/101",state:"OPEN",body:`## 政策ビジョン\r
\r
東京の道路交通状況を改善する現実的施策。\r
\r
- [X] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [X] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
①交差点と横断歩道の信号機を交通感応式とし交差道路や歩道に交通が無い時は赤にしない（速やかに青に戻す）ように改造。\r
②歩道橋にエレベーターを設置。\r
③歩道橋や地下道の近くの横断歩道を廃止。\r
④残った横断歩道を歩道橋等に替える\r
⑤都内の土地所有者に土地の面積に応じた駐車設備を義務付け。\r
\r
今は自車通勤は自転車より遅く、電車の数倍の金がかかる。\r
この施策によって時間は半減し、特に⑤によって駐車場の賃料が下がり、コスト的にも自車通勤が現実的選択肢になる。また、混雑した幹線道路沿いの店舗等への商品や資機材の搬入の際の車両の駐車による道路の渋滞も防ぐことができる。\r
クルマは売れるわ物流の効率は劇的に向上するわ電車の通勤地獄は解消するわで日本の生産性大幅向上間違いなしなのでは？\r
\r
土地所有者たちからの反対の大合唱が沸き起こるだろうが、彼らは今、土地からの収益だけ受け取って道路インフラへの負荷のコストを社会全体に押し付けている。つまりインフラへのタダ乗りをしているのだから、彼らの反対には正当な根拠が無い。\r
\r
### 必要だと思ったきっかけ\r
\r
私は実際にマイカー通勤をしていましたが、小池さんが掲げていた「マイカー通勤などによる電車通勤の通勤地獄解消」の施策にまったく実効性が無いと思いました。\r
\r
### なぜ必要か\r
\r
東京と近郊の道路交通インフラの利用効率は3割にも満たない。\r
この凄まじい非効率は何とかならないのか？\r
\r
### このイシューで議論したいこと\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
私はコロナ騒動が始まるまで川口市の北端に近い自宅から日本橋まで毎日クルマで通勤していた。道のりは22キロ。これは時速60キロで巡航すれば22分で走破できる道のりだが、実際の所要時間は平均で80分ほどだった。一度暇に任せてその22キロの通勤経路上の信号の数を数えてみたら118あった。仮に赤信号に遭遇する確率を1/2とし、1回の信号の待ち時間を1分とすると、それだけで約1時間になる。計算が合う。\r
東京近郊をクルマで移動する場合、所要時間の7割以上は「停まっている時間」なのだ。逆に言えば、東京と近郊の道路交通インフラの利用効率は3割にも届いていない。\r
`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"経済"},{name:"行政"}]},updatedAt:"2024-06-22T22:53:03Z"},{title:"自由主義社会の政治の基本理念の確認",number:102,createdAt:"2024-06-22T23:03:47Z",url:"https://github.com/takahiroanno2024/election2024/issues/102",state:"OPEN",body:`## 政策ビジョン\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [X] 民主主義\r
\r
## 政策\r
\r
具体的政策より「自由主義とは何か」の再確認です。\r
\r
日本の政治を根本から変えるアイディアです。あまりの大改造と言うか完全な作り直しなので、実現は不可能でしょうし、安野さんの目下のテーマは都政なので直接関係ないのですが、自由主義社会の政治の基本理念はこうあるべきだと思います。\r
面白いので読んでみてください。\r
\r
--------\r
政治をカネで動かすのが悪いことなら、個人の献金も悪ということになる。\r
よくよく考えてみると「企業・団体の献金は悪で個人の献金は善」という考えには根拠がない。\r
問題はそこじゃなくて、「政策の予算の規模に比べて遥かに少ないカネで政治を動かせてしまう」ことなのでは？高々数億だか数十億だかで百億千億単位の利益が見込めるなら、どんな企業・団体だって献金するし、いくら法律を厳しくしても抜け穴はいくらでも見つかる。\r
\r
これって要するに「国民が立法権を議員に預ける」システム、つまり代議制の本質的欠陥なんじゃない？\r
そう考えれば答えは明らかだ。\r
直接民主制だよね？\r
直接民主制なら政治をカネで動かそうとする者は、少なくとも有権者の過半数を買収しなければならない。そして、どんな理由で形成されたものであれ、有権者の過半数の意思ならそれは正当な民意だ。\r
\r
「採決は電子投票でできるけど、法案は誰がどうやって作るの？」と思ったそこの君。\r
君は見どころがある。\r
それについても吾輩に画期的なアイディアがある。\r
これからそれを説明しよう。\r
\r
まず総論から。\r
自由主義社会の意思決定は自由競争によって行うべき、と言うより自由競争、即ち、「人々が思い思いの方法で色々やってみて、うまくいった方法が広まる」のが自由主義の動作の仕組み。\r
\r
従って、基本的に通常の経済活動と同じ方法で行う。\r
具体的には\r
①政策と法案は民間の法人または個人（以下「立法者」）が作成する\r
②立法者は任意の方法で出資を募る\r
③調達された資金の総額が政策の予算案を超えたら、「国民会議」に提出する\r
④一定期間に別の立法者から代案や反対案が提出されなければ可決・成立\r
⑤別の立法者から代案か反対案が提出され、一定期間内にその資金額が最初の法案の資金額を超えたら、提出されたのが代案ならそれが可決・成立、反対案なら最初の案が否決。\r
⑥負けた立法者の資金は国庫に入る\r
\r
どうです？こうすれば立法に関して特定の人や組織に権力が集中しないので、政治とカネの問題は（立法に関しては）ほとんどなくなり、また、現在の「その人にとってその問題が切実な問題か否かに関係なくひとり一票」という荒っぽい方法より、民意も正確に反映されるのでは？\r
\r
おまけ。行政に関しては、議院というものが存在しなくなるので議院内閣制は当然に廃止。大統領制とする。固定的な省庁は廃止。行政官の身分保障は無くし、事業ごとに採用する。これで行政の腐敗や劣化も防げる。\r
\r
### 必要だと思ったきっかけ\r
\r
現在の諸々の政治問題の議論を見ていると、右も左も自由主義を理解していないように見えます。\r
\r
### なぜ必要か\r
\r
哲学（基本理念）がしっかりしていないと、どんな議論も考察も時間の無駄になるので。\r
\r
### このイシューで議論したいこと\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"民主主義"}]},updatedAt:"2024-06-22T23:04:00Z"},{title:"都内ならいつでもどこでも誰でもインターネットに接続できる環境を実現",number:103,createdAt:"2024-06-22T23:25:05Z",url:"https://github.com/takahiroanno2024/election2024/issues/103",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [X] 経済\r
- [ ] 医療・防災\r
- [X] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
都内ならいつでもどこでも誰でもインターネットに接続できる都市を実現します。\r
すでに [TOKYO FREE Wi-Fi](https://www.wifi-tokyo.jp/ja/) は提供されていますが、提供範囲は都の施設に限定されており広く使えるものではありません。\r
\r
### 必要だと思ったきっかけ\r
\r
- 都内においては様々な Free Wifi が存在はしているものの、登録が別々だったりと大変使い勝手が悪い状況です。\r
- 知人の多くが「ギガを節約」するために外出先ではデータ通信をOFFにしています。\r
\r
### なぜ必要か\r
\r
この政策の必要性はいくつか考えられます。\r
- 「テクノロジーで誰も取り残さない東京」を目指すのであれば、まずは誰もがインターネットに接続できる必要があるわけですから、スローガンと親和的です。\r
- 家計の4%を占める通信料金は都民の大きな負担となっています。現在ではLINEなど無料通話も可能ですから、通信料金の主たる要素はデータ通信用と考えられます。都内のどこでも100%インターネット接続ができるようになればデータ通信量が抑えられ家計への負担が軽減し貧困対策としても機能すると考えられます。\r
- インターネットへのアクセスができるということは様々な無料の教育コンテンツにもアクセスできるということと同義です。\r
- 海外からの旅行者の不満に多い、Wifiが少ないという問題を解決できればインバウンド需要にも寄与するでしょう。\r
- 安全性の低いWifiへの接続機会を減らすことでセキュリティ向上にもつながります。\r
\r
### このイシューで議論したいこと\r
\r
一方で、この政策には解決しなければならない課題があります。\r
- 既存の通信会社、Free Wifi 提供業者から見れば明らかな民業圧迫であり、双方にとって損のない解決策を模索する必要があります。\r
- 広域で干渉なく使える通信方式の選定が必要です。Free Wifi よりも例えば 5G 開放の方が望ましいと思われますが、その分実現のハードルは上がるでしょう。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
- [TOKYO FREE Wi-Fi](https://www.wifi-tokyo.jp/ja/) \r
- [訪日客の不満の声にあがる「フリーWi-Fiの少なさ」](https://www.ntt-bp.net/column/blog/2023/09/post-138.html)\r
- [家計支出の4％を占める携帯電話料金、「全国一律」は納得解か悪平等か](https://xtech.nikkei.com/atcl/nxt/column/18/02794/032900005/)`,comments:{totalCount:4},reactions:{totalCount:6},labels:{nodes:[{name:"教育・子育て"},{name:"経済"}]},updatedAt:"2024-06-30T10:24:31Z"},{title:"ブロックチェーンによる、政治のカネの流れの透明化",number:104,createdAt:"2024-06-23T00:29:52Z",url:"https://github.com/takahiroanno2024/election2024/issues/104",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [X] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [X] 行政\r
- [X] 民主主義\r
\r
## 政策\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
日本を、将来に渡って世界を良い方向に導いていけるクリーンなリーダーであり続けられるようにしたいと感じているからです。\r
\r
### なぜ必要か\r
「お金が、本来使われるべきところに使われる。」という流れを当然にしたいからです。\r
\r
日本に限らず、世界で「政治とカネ」が問題になっています。政治家が政治資金を私的に利用したり、不正な賄賂を受けたりして特定の企業と癒着することです。[1](この流用により、本来はもっと資金が提供されるべき研究資金や会社への投資などにお金が使われずに、使用用途が分からない税金が生まれています。結果、日本の将来の国力低下につながる可能性が大いにあると考えています。\r
\r
これを解決するために、**分散台帳技術の一つであるブロックチェーンを用いて、政治家のお金の流れを透明化すること**が可能なのではないかと考えています。\r
また、これをいきなり国政から始めるのはハードルが高いので都政から始めてみるのはどうでしょうかという提案です。\r
\r
個人的な意見としては、政治資金が接待費などに使われていてもそれが将来日本に良い影響を与える可能性のあることにつながるならば問題ないと思っています。また、政治家さんがお給料をたくさんもらっても構いません。実際、国を動かすとても大切な仕事をしていらっしゃるのでそれに見合うお給料をもらうべきだと思っています。それは官僚の方も同様です。ただ、旅行だったり、マッサージだったり、そういった私的な利用はその給料から使われるべきで、政治資金や予算から出されて良いものでは断じてありません。その「国を良くするために使われるお金」と「政治家としての働きへの報酬」は区別するべきです。\r
\r
ブロックチェーンとは、分散台帳技術のことで、取引履歴の改ざんが困難であるとされています。[2]この技術を用いて、資金の流れを透明化することは可能だと思っています。\r
\r
### このイシューで議論したいこと\r
このissueでは以下のことを議論したいです。\r
\r
- [ ] 技術的には可能なのかどうか\r
- [ ] なぜ今までそういったシステムが作られていないのか\r
- [ ] 現在もそういった収支を公開するシステムがあるはず\r
\r
以下はこれらに関する個人的な意見です。しかし、私もまだまだ無知ですので皆さんがこれについてどう思うのかを議論していきたいと考えています。\r
\r
#### 技術的には可能なのかどうか\r
可能だと思っています。\r
まず、今私が想定している懸念点としては以下があります。\r
1. ブロックチェーン(イーサリアムとします)は確かに透明性があるけど、アドレスは何個でも作成できるし、かつ作成時に個人の証明書がいらないから政治家個人と結びつけられないのでは？\r
2. 使ったお金をブロックチェーンに記載しなければ良いのでは？\r
3. 本来の支払った先と違う情報をスマートコントラクトに記載すれば良いのでは？\r
\r
1に関しては、政治家の方に限り、個人と結びついたアドレスを作成して、そのマッピングデータはスマートコントラクト[3]と呼ばれるものに保存すれば解決できます。スマートコントラクトとは、ブロックチェーン上の概念で、あらかじめ決められたルールに基づいて自動でブロックチェーンの取引に関する操作を行えるものという理解をすれば今のところは構いません。半永久的に残り続ける小さなデータベースと思ってもらっても良いです。(本当は異なりますが、この文脈での使用法での理解のためです。)取引以外の情報も保存することができます。\r
\r
2に関しては、スマートコントラクトにその年の予算として割り当てられた政治資金を記録して、年度末の決済時に割り当てられた予算と支出と残額が一致するかを調べます。矛盾があれば何か不正な行為を行なったということになります。必ず、銀行等の金融機関との連携が必須になりますが政治家の方の運用口座にお金の流れがあればそれをスマートコントラクトに記載していくという方法をとれば矛盾は見つけられるはずです。\r
\r
3に関しては、確かにこのようにして不正が可能だと思います。しかし、将来問題が発覚した際に半永久的に、かつ透明な情報がネット上に残っているため言い逃れをすることができません。黒塗りの資料を提出することも不可能です。これにより、不正な情報をスマートコントラクトに記載するという動機が抑制されるはずです。\r
\r
\r
#### なぜ今までそういったシステムが作られていないのか\r
さまざまな理由があると思いますが、大きな理由は\r
- 政治家の方のプライバシーが守られない\r
- 導入への抵抗\r
- 技術への信頼不足\r
- 取引にかかる手数料(gasと呼ばれる)はどうやって負担するのか\r
だと思っています。\r
しかし、このような場を安野さんが提供してくださったことと、他の候補者である石丸さんとの対談を拝見して、これらの懸念は解決できるのではないかと感じ、投稿しました。国、東京を良くしようというリーダーがいるならばこれらの懸念は解決できるのではないでしょうか？\r
\r
\r
#### 現在もそういった収支を公開するシステムがあるはず\r
確かに、そういったシステムはあります。[4]しかし、ここでの情報は検索がしにくいですし、そもそも本当に正しい情報なのか、不正に利用されたお金を政治献金という名目で逃げれば不正利用は可能であるという問題があると思います。\r
情報が改竄されないこと、正しい情報であること、データが半永久的にネット上に残り続けることを実現するためにこの案の実行が必要だと考えます。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
- 政治に関しては素人なので、政治とカネの問題について間違ったことがあれば申し訳ありません。\r
- 規約に則っている限り、どんな議論も大歓迎です。よろしくお願いいたします。\r
\r
1.  weblio辞書, https://www.weblio.jp/content/%E6%94%BF%E6%B2%BB%E3%81%A8%E3%82%AB%E3%83%8D\r
2. Satoshi Nakamoto. Bitcoin: A Peer-to-Peer Electronic Cash System, https://bitcoin.org/bitcoin.pdf\r
3. Esener, Esen, SMART CONTRACTS FROM THE PERSPECTIVE OF THE PRINCIPLES OF EUROPEAN CONTRACT LAW, https://www.duo.uio.no/handle/10852/67269\r
4. 政治資金収支報告書検索システム, https://search.openpolitics.or.jp/home`,comments:{totalCount:6},reactions:{totalCount:7},labels:{nodes:[{name:"民主主義"},{name:"経済"},{name:"行政"}]},updatedAt:"2024-06-25T04:29:42Z"},{title:"オンライン投票の実現、ポイント型票数選挙権制度",number:105,createdAt:"2024-06-23T01:08:23Z",url:"https://github.com/takahiroanno2024/election2024/issues/105",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [X] 行政\r
- [X] 民主主義\r
\r
## 政策\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
- 民主主義の根幹である選挙において、一人１票という原則論を拡張する\r
- 年齢人口比率や子の数に応じて、投票件数に比例するpt付与可能にする\r
- マイナス票の実現（正しい未来社会の構築にとって不要な候補者を牽制する）\r
\r
### 必要だと思ったきっかけ\r
- シルバー民主主義や組織票の問題（若者の声が届かない）\r
- 現行のアナログ選挙制度そのものに時間やコストがかかっている点\r
- 異次元の子育て対策に結局踏み切れてない国政の問題\r
\r
### なぜ必要か\r
- オンライン前提にすることでスマートフォン等て気軽に投票行為が行われることになるため\r
- 票をデジタルにすることで社会問題を反映した柔軟な選挙制度に対応できると考えたため\r
\r
### このイシューで議論したいこと\r
- オンライン投票の不正防止手段\r
   - 投票所による投票は「厳格な本人確認」「無脅迫の担保」ができることが利点であり、民主主義の担保につながっている\r
   - そのうち、「厳格な本人確認」についてはマイナンバーカードの電子署名検証による本人確認が可能かどうか\r
   - 「無脅迫の担保」はオンライン試験などで活用されている、PCやスマホのインカメラ映像を用いたAI判定を利用したりすることができるかどうか\r
\r
- その次の段階として、わざわざ選挙という代表者を選定する高コストな民主主義の形式をアップデートし、**政策判断そのもの**に対して選択肢を与え投票していく（**直接民主主義実現**）ことについても検討願いたいです\r
\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
- [「多数決の原則」と「少数意見の尊重」について考える－シルバー民主主義と東京一極集中にどう向き合うべきか](https://www.nli-research.co.jp/report/detail/id=75487?site=nli)\r
- [「０歳児から選挙権を」…吉村知事が持論、日本維新の会に公約として提案する考え](https://www.yomiuri.co.jp/local/kansai/news/20240426-OYO1T50007/)\r
`,comments:{totalCount:10},reactions:{totalCount:3},labels:{nodes:[{name:"民主主義"},{name:"行政"}]},updatedAt:"2024-07-01T13:01:13Z"},{title:"共同親権推進",number:106,createdAt:"2024-06-23T01:37:54Z",url:"https://github.com/takahiroanno2024/election2024/issues/106",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [X] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
<!-- できる限り記入をおねがいします -->\r
　共同親権推進をお願いします。\r
　共同親権の法制化がされましたが、まだ運用状況がよくわかっておりません。\r
\r
### 必要だと思ったきっかけ\r
　離婚後、子供に会えない\r
\r
### なぜ必要か\r
　別居親が苦しんでいる\r
\r
### このイシューで議論したいこと\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
`,comments:{totalCount:9},reactions:{totalCount:2},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-27T09:25:37Z"},{title:"必要な「非効率」の明確化への努力",number:107,createdAt:"2024-06-23T01:53:49Z",url:"https://github.com/takahiroanno2024/election2024/issues/107",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [X] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [X] 行政\r
- [X] 民主主義\r
\r
## 政策\r
\r
行政において、経済的「効率」を求めるばかりに陥らないために、必要な「非効率」をできるだけ明確化すること。\r
\r
### 必要だと思ったきっかけ\r
\r
いたずらに「効率」ばかりを求めることがもてはやされがちになるのは自然なことです。\r
それに逆らうことも必要。\r
例えば鉄道や、郵政の「民営化」についての Postmortem は有用かと思いますが、ジャーナリスティックなものしか見当たりません。\r
\r
### なぜ必要か\r
\r
「効率」を求めるのは民業では自然なことですが、それは公共の利益に反する場合もあるからこその政治・行政かと考えます。\r
\r
### このイシューで議論したいこと\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"民主主義"},{name:"経済"},{name:"行政"}]},updatedAt:"2024-06-23T01:54:01Z"},{title:"教育の効率化",number:109,createdAt:"2024-06-23T01:56:57Z",url:"https://github.com/takahiroanno2024/election2024/issues/109",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [x] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
授業・座学の効率化として、youtube など動画を7割、アナログ授業(現状のような)を3割 など大幅にする\r
授業風景の極論 として 一番わかりみのよい授業の動画をみて学ばせる = 先生はフォローする\r
＊7割・3割は暫定だがおもいきる\r
\r
\r
### 必要だと思ったきっかけ\r
1. 教師の数も、仕事内容もきついらしい\r
2. 授業は非効率に思える(使いまわせるのでは?)\r
3. ChatGPT などの登場\r
4. いじめ・隠ぺい というのは閉鎖空間だと発生するのだとおもうので、閉鎖性をなくす布石\r
\r
\r
### なぜ必要か\r
1.現行方式だと今後も慢性的に教員の人材不足と見込まれる\r
2.古典的な勉強、反復練習、基礎訓練なども大事ですが、\r
教師というリソースを授業ではなく　子供を成長させることに向けてもよいと思う\r
3. そして授業についていけない子(学力や環境などさまざま) も復活しやすくなる\r
4. xxハラが大量発生してるように、昔とちがって、繊細な人を扱うスキルが必要となってきてる\r
\r
### このイシューで議論したいこと\r
・授業(勉強)の質をコンテンツの使いまわしにし、人間性や成長などを教師にまかせる というスタンスの是非\r
・授業(勉強)の質は本当に大丈夫か？\r
・現場の人にしかわからない肌感覚など\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
学生ではない 自分達も何かを学ぶ時、\r
動画学ぶ、ぐぐる、wikiをみる、マンガを読む、文字の本を読む など　なんだかんだ時間・努力が必要でしたが、\r
ここに ChatGPT がきて時間コスト・ストレスコストも　かなりへったと思います。\r
\r
`,comments:{totalCount:4},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-30T00:02:25Z"},{title:"医療行為の費用対効果をモニタリングし、社会保険料の用途を最適化する",number:110,createdAt:"2024-06-23T02:28:25Z",url:"https://github.com/takahiroanno2024/election2024/issues/110",state:"OPEN",body:`## 政策ビジョン\r
\r
- [ ] 経済\r
- [x] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
コスパの悪い手術や薬品に補助を出さないようにすることで、健康寿命と税支出双方を改善する。\r
\r
具体的にはまず、医療行為とその後の経過データのデータを集約し、見やすくオープンにすることで、「コストが高く」「健康寿命の伸びへの効果が少ない」手術をあぶり出す。\r
そして、被手術者の年齢を加味した上で、健康寿命への費用対効果の悪い手術に関しては、社会保険の補助額を減らしマイナスのインセンティブを働かせることで、全体として、効果の高い手術を選好させるようにする。\r
こうすることで、税支出の削減と健康寿命の延長の双方を実現し、現役世代とシニア世代の両者の生活をよくする。\r
\r
\r
方法としては以下が考えられる。\r
\r
1. データ収集フェーズ\r
・都民が医療行為のデータ分析を主体的に行えるよう、分析基盤を提供する。\r
・データ収集については、都が医療者に提出義務を課すことで実現。\r
・医療データには適切な匿名化処理を施し、プライバシーを保持する。\r
\r
2. 分析フェーズ\r
・データサイエンスを競うKaggleコンテストの題材にすることで、分析を加速する。\r
・データ分析結果を一元的に閲覧できるダッシュボードを作成し、誰もが使途を把握できるようにする。\r
\r
3. 最適化の実行フェーズ\r
・分析結果を使途に反映するための委員会を開き、実行力を持たせる。\r
\r
### 必要だと思ったきっかけ\r
\r
当方２０代、給与明細を見たところ、社会保険料が予想以上に高くて不満に感じた。\r
社会保険料の使途が不透明で信頼が置けないのが根本原因にある。\r
医療データをわかりやすくオープンにし、公の場で配分を最適化することで、額を削減し、価値のある使われ方をしてほしいと感じたため。\r
\r
### なぜ必要か\r
\r
現状\r
・生産人口が減少し、保険料の徴収額が減少している。\r
・それに伴い、高齢者に提供できる医療の質が低下する危惧がある\r
・医療費をカバーするために一人当たりの社会保険料の金額が上昇しており、生産人口の実質賃金が低下している\r
\r
課題\r
・医療全体をコストパフォーマンスの面で最適化する必要がある。\r
・したがって医療の最適化が必要であるが、医療行為の選定に関しては、オープンな議論がなされていない\r
\r
解決策\r
・医療行為後の経過データのオープン化\r
・オープンデータを市民が分析できるようにすることで、集合知の力を借りつつ、皆が納得する形で使途を最適化する\r
\r
### このイシューで議論したいこと\r
・都政のスコープでどこまで可能か？\r
・医療者目線から見て、手術方法の選択は最適化可能であるか？\r
・健康寿命を維持しつつ社会保険料を削減するために、社会保険の使い方で最も最適化すべき箇所はどこか？\r
・このマニュフェストは、医療行為者の収入にマイナスとなってしまうか？\r
・例え健康寿命の期待値が伸びない手術だとしても、当人や家族が望んでいるなら、税負担で手術すべきか？\r
・浮いた額を将来のための政策に回すことを望むが、妥当か？\r
・どんなデータを収集すべきかを誰が決めるべきか？（追加）\r
・手術後のデータを誰から取得すべきか？（追加）\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
健康保険料は上昇している\r
[全国健康保険協会 保険料率の変遷](https://www.kyoukaikenpo.or.jp/g7/cat330/hokenryouritunohennsenn/)\r
\r
### 参考資料\r
医療行為別の総費用データ\r
[令和４年社会医療診療行為別統計の概況](https://www.mhlw.go.jp/toukei/saikin/hw/sinryo/tyosa22/)\r
\r
※ 医療行為・年齢別で、健康寿命がどれだけ伸びたかわかるようなデータがあれば欲しいです\r
`,comments:{totalCount:5},reactions:{totalCount:0},labels:{nodes:[{name:"医療・防災"}]},updatedAt:"2024-06-28T00:29:44Z"},{title:"犯罪や搾取ビジネスの排除",number:111,createdAt:"2024-06-23T02:57:11Z",url:"https://github.com/takahiroanno2024/election2024/issues/111",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [x ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
犯罪や搾取ビジネスの排除\r
\r
### 必要だと思ったきっかけ\r
昨今、ホスト問題、投資詐欺、宗教問題、などの詐欺や搾取が横行しています。\r
\r
\r
### なぜ必要か\r
法律に規定のないものであれば人を貶めても「稼げばいい」「目立てばいい」という風潮はとても危険だど感じます。\r
今回の選挙ポスターもそうです。教育環境にとても悪いと考えます。\r
\r
\r
### このイシューで議論したいこと\r
ホスト問題について\r
\r
国でも動いていますが都としても悪質ビジネスに対しての対策強化と厳しい罰則の制定をした方が良い。\r
\r
何故なら捕まっても痛くない。\r
\r
具体的に都の権限でできるかは分かりませんが、犯罪まがいを野放しにすることは危険です。\r
\r
安心して子育てできる環境とは到底かけ離れています。\r
\r
被害者を救済のために税金を使おうという訳ではありません。取り締まり強化と厳罰化で抑止し、被害者そのものを出さないというものです。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
悪質なマインドコントロールマニュアル。\r
https://x.com/bakusai_com/status/1720279049887748344\r
\r
これは一部のホストではありません。マニュアルは業界の常識だという事実です。\r
\r
###　最後に\r
こちらの使い方はあまり分かりませんが、調べながら書きました。何卒、目を通して頂けたら幸いです。\r
\r
\r
`,comments:{totalCount:3},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-25T13:49:11Z"},{title:"都市の整備、警察・消防、生活環境整備に対する政策",number:112,createdAt:"2024-06-23T02:58:33Z",url:"https://github.com/takahiroanno2024/election2024/issues/112",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [X ] 経済\r
- [X] 医療・防災\r
- [ ] 教育・子育て\r
- [X] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
都市の整備、警察・消防、生活環境整備に対する具体的な政策に盛り込んでいただきたい。\r
\r
### 必要だと思ったきっかけ\r
現行のマニュフェストには、人口減少の前提は共有されているものの、候補者の強みであるソフトウェアのレイヤーの対策が目立っており、特に都市の整備、警察・消防といった物理レイヤーに近い分野の政策は、弱いように見受けられます。他の候補者と比較した際の、候補者の強みは、情報処理に対する専門的な知見を有している点だと思うため、IT/AIを使った、既存の行政機関が抱える課題の抽出、課題に関連するデータの整備、わかりやすい形で広く公開することは、今後の都民にとって有益だと思います。\r
\r
### なぜ必要か\r
TOKYO予算見える化ボード[2]では、都市の整備、警察・消防、生活環境整備の予算は全体の約35％程度を見込まれています。これらは、都民にとっての「当たり前品質」としてベースラインとなっており、世論の関心が向きにくい分野かも知れませんが、人口減少に対して、中長期的な取り組みが必要だと考えます。\r
若年人口減少に伴う高齢化比率の上昇とそれに伴う公共インフラの負荷増は、ここから30年間の日本国共通の課題になるのは必須だと思うため、首都としての東京の政策が、1つの有効なプラクティスを提示することを希望します。\r
\r
### このイシューで議論したいこと\r
私個人は、行政については全くの素人のため、都市の整備、警察・消防、生活環境整備に対する政策課題として考えられるものを例として提示します。東京都や各行政機関の報告書などを分析すれば、より具体的かつ、優先度の高い項目が見つかる可能性があると思います。それについては、このIssue内での議論や分析にて抽出して頂ければと思います。\r
\r
- 経年劣化した建物、道路、共同施設の特定、更新（1960年ー70年代）\r
- 放置空家の補足、処理、利活用\r
- 人口過密地域の緩和、道路幅の確保\r
- 温暖化影響を加味した治水対策\r
- 死亡者の増加に対する備え（火葬施設の需要と共有のバランス）\r
- 都内の住居向け不動産利用の適正化\r
- 住人口と昼間人口、観光人口のギャップを加味した公共インフラ負担のバランス\r
- 人口減、高齢化を加味した警察、消防機能の維持\r
- 震災など広域災害を想定した最低限の生活インフラの維持、避難生活計画のアップデート\r
- 特殊詐欺、企業や公共施設に対するサイバー攻撃など、ITを使った犯罪への対応[3]　など\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
[1]2060 年までの東京の⼈⼝推計\r
https://www.seisakukikaku.metro.tokyo.lg.jp/documents/d/seisakukikaku/gaiyou4\r
\r
[2]TOKYO予算見える化ボード\r
https://www.zaimu.metro.tokyo.lg.jp/zaisei/zaisei/dashboard/redirect01r6\r
\r
[3][東京の産業と雇用就業2022 - 東京都産業労働局]\r
https://www.sangyo-rodo.metro.tokyo.lg.jp/toukei/5cf9370a4ce3fd5a8dcbb59f424137a4.pdf\r
\r
[4]令和5年度「都民生活に関する世論調査」結果\r
https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2024/01/26/01.html\r
\r
[5]東京都建設局\r
https://www.kensetsu.metro.tokyo.lg.jp/\r
\r
[6]東京都産業労働局\r
https://www.sangyo-rodo.metro.tokyo.lg.jp/about/\r
\r
[7]第７章 火葬場の現状と課題の総括及びあり方についての提言\r
https://www.tama-100.or.jp/cmsfiles/contents/0000000/470/7.pdf`,comments:{totalCount:1},reactions:{totalCount:2},labels:{nodes:[{name:"医療・防災"},{name:"経済"},{name:"行政"}]},updatedAt:"2024-07-01T11:17:25Z"},{title:"医療・福祉従事者の待遇改善",number:114,createdAt:"2024-06-23T03:54:56Z",url:"https://github.com/takahiroanno2024/election2024/issues/114",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [X] 医療・防災\r
- [X] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
地方公共団体の職員として、福祉現場、医療現場の従事者方々から、「仕事にはやりがいを感じるが、生活が苦しい」、「人手不足のため過重労働になり体調を崩す」といった声をよく聞いていました。過重労働や低賃金のため、人手が集まらず、さらに環境が悪化するという悪循環も目にしてきました。\r
※医療・福祉従事者とは、看護師、介護士、保育士などを想定しています。\r
\r
### なぜ必要か\r
安野さんのマニフェストでは、医療の効率化や、福祉の充実を訴えていらっしゃいますが、実際にはそこで働いている従事者の方々あってこそです。いくら効率化をしたところで、必ず現場で働く方々は必要です。そこで働いている方々の所得が向上しない限りは、医療・福祉サービスも向上しないと思っています。\r
\r
### このイシューで議論したいこと\r
最低賃金は最低賃金法で都道府県労働局長が決定することになっています。つまり、東京都知事には決定権がありません。そこで、医療・介護従事者の賃上げを要請できないか、または条例として最低賃金を別途設定できないか議論できればと思っています。\r
なお、現在、産業別最低賃金は定められていますが、医療・介護職といったエッセンシャルワーカーの産業別賃金は定められていません。\r
上記論点から、そもそも、医療・介護職で所得引き上げが必要なのか、必要であれば、どういった手法があるか、または所得引き上げの代替手段がないかを議論したいです。\r
\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
https://www.mhlw.go.jp/shingi/2010/05/dl/s0514-2b_0014.pdf\r
https://www.stat.go.jp/data/nihon/19.htm\r
https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/seikatsuhogo/fukusijinzai/index.html\r
https://elaws.e-gov.go.jp/document?lawid=334AC0000000137_20220617_504AC0000000068\r
https://pc.saiteichingin.info/check/`,comments:{totalCount:1},reactions:{totalCount:9},labels:{nodes:[{name:"教育・子育て"},{name:"医療・防災"}]},updatedAt:"2024-06-23T23:06:06Z"},{title:"電車/東京の縦移動新路線をつくる",number:115,createdAt:"2024-06-23T04:25:00Z",url:"https://github.com/takahiroanno2024/election2024/issues/115",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [x ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
電車の新路線を引く。\r
停車駅は\r
大井町→戸越銀座→武蔵小山→学芸大学→三軒茶屋→\r
下北沢→笹塚→新中野→中野→野方→練馬\r
を、予定。\r
\r
まずは試験的にバスの運行からはじめる。\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
武蔵小山にいる時に下北沢で飲まんかと誘われたのだが、\r
乗り換え案内みて遠回りすぎるだろ、、と憤りを感じたため。\r
\r
### なぜ必要か\r
交通の弁が良くなる。\r
おそらく満員電車の緩和に役立つ。\r
楽しい町を繋ぐ事で、ハシゴ酒イベントなどで経済効果が見込める。\r
下北沢や三軒茶屋に乗り換えなしで行けるなら練馬に住みたいから。\r
\r
### このイシューで議論したいこと\r
停車駅の追加、変更案があれば教えてください。\r
どうやったら実現できるだろうか。\r
鉄道が厳しければ、なんならまずはバスでも良い気もする。\r
(通常のバスのような小刻みすぎるバス停にはしない)\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
無し`,comments:{totalCount:6},reactions:{totalCount:3},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-06-27T03:57:37Z"},{title:"選挙税（デポジット方式）を導入する",number:116,createdAt:"2024-06-23T05:00:41Z",url:"https://github.com/takahiroanno2024/election2024/issues/116",state:"OPEN",body:`## 政策ビジョン\r
\r
- [x] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [x] 行政\r
- [x] 民主主義\r
\r
## 政策\r
\r
都税として収入に応じた一定額を予め徴収し、投票の際に返金する。\r
\r
返金は公金受取口座登録制度を活用する。投票したかの判定はマイナンバーカードを活用する。\r
上記が利用できない場合は現金による返金を行う。\r
\r
ざっくりとした試算で、\r
- 東京都の有権者500万人\r
- 投票率60%\r
- 1万円デポジット\r
として、棄権者から300億円の収入が得られる。東京都の予算9兆円に対して0.3%。\r
\r
投票率が100%となった場合は事務コストの赤字となるが、それはそれで好ましい。\r
\r
### 必要だと思ったきっかけ\r
\r
もとは国政選挙の投票率・政治への関心の向上を行うための方法として思いついた。\r
\r
### なぜ必要か\r
\r
財源確保と投票率・政治に対する意識向上の両方が行える可能性がある。\r
\r
### このイシューで議論したいこと\r
\r
実現性\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
以前自分が考えたことはこちらにまとまっています。\r
\r
https://scrapbox.io/gov/%E9%81%B8%E6%8C%99%E7%A8%8E\r
`,comments:{totalCount:9},reactions:{totalCount:4},labels:{nodes:[{name:"民主主義"},{name:"経済"},{name:"行政"}]},updatedAt:"2024-06-23T15:54:38Z"},{title:"AI特区作れませんかね",number:118,createdAt:"2024-06-23T05:25:48Z",url:"https://github.com/takahiroanno2024/election2024/issues/118",state:"OPEN",body:`## 政策ビジョン\r
\r
\r
- [X ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
AI特区, AI利用に向けて有利な法整備, 財政的なサポート。国でできなくとも、都でできる範囲で。\r
とりあえず「世界で勝ちに行けるTOKYO」になって欲しいです。\r
\r
### 必要だと思ったきっかけ\r
日本と東京の国際競争力アップ。\r
LLMだけじゃなくて他にもAI活用の事例とかやって欲しいです\r
\r
### なぜ必要か\r
世界で勝てるTOKYOになって欲しいから\r
\r
### このイシューで議論したいこと\r
特に無し\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
特に無し`,comments:{totalCount:1},reactions:{totalCount:3},labels:{nodes:[{name:"duplicated"},{name:"経済"}]},updatedAt:"2024-06-23T05:26:24Z"},{title:"自動運転特区政策への拡張提案（環境政策とのパッケージ化）",number:119,createdAt:"2024-06-23T06:34:42Z",url:"https://github.com/takahiroanno2024/election2024/issues/119",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [X] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
・小型の地熱発電を誘致し、再エネ100%、自給率100%で稼動するシステムとする。\r
\r
・電力の安定化装置としての電動車をシェアリングすることで、システムへの参加者はオーナーシップを得る。自動運転車は常にロボタクシーとして都市を回遊し、その収益は自治体へ還元される。シェアリングオーナー（自治体へ納税している都民）はロボタクシー利用時は無料。\r
\r
### 必要だと思ったきっかけ\r
自動運転と電動車はシェアリング、再エネと組み合わせるとエネルギー自給率向上と気候変動対策も狙えて、強力だと思うから。\r
\r
### なぜ必要か\r
エネルギー自給率を高めることで経済力も高まり、安全保障対策にもなる。\r
気候変動対策にもなるという先進性を得られ、シェアリング、つまりオーナーシップの分散がベーシックインカム実現の下地となるから。\r
\r
### このイシューで議論したいこと\r
\r
・システムの価値媒体としてJPYCのような前払い式ステーブルコインが活用できるのではないか。\r
\r
・ユーザーの参加方法のバリエーションとして、人力発電（ジムなどで、自転車を漕ぐことで蓄電）するなどのアイデアはどうか。ユーザーは発電量（CO2削減量）に応じてステーブルコインなどで収入を得る。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
・前払い式ステーブルコインであるJPYCは暗号資産ではない。\r
・JPYCはVプリカなどを経由して、円として使える\r
・小型地熱発電所建設の初期投資は100億円程度。8,000世帯分の電力を賄える。\r
`,comments:{totalCount:0},reactions:{totalCount:1},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-23T06:34:55Z"},{title:"ソーシャルワーカーの最低賃金・労働環境の見直し",number:120,createdAt:"2024-06-23T06:57:40Z",url:"https://github.com/takahiroanno2024/election2024/issues/120",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [x] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
ソーシャルワーカーの賃金を大幅に引き上げる\r
労働環境の見直しを行い、働きやすい環境にする\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
近年ソーシャルワーカーの給与水準が日本人の給与中央値よりも低い傾向にある。\r
特に福祉系の職業は社会に必要不可欠にもかかわらずサラリーマン未満の年収になっており\r
このままでは東京にとどまらず日本全体で福利厚生の破綻に繋がりかねないと感じた\r
\r
### なぜ必要か\r
ソーシャルワーカーの仕事があっての社会にも関わらず低賃金で労働している現状があるため\r
\r
### このイシューで議論したいこと\r
具体的な最低賃金\r
労働環境の見直し\r
継続的に働けるために必要な諸福利厚生\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
日本人の平均年収は447万円(2023年12月データ)である。\r
しかしケースワーカーの場合、手当や一時金を含めても406万円と約40万円も差が生じている\r
https://jp.stanby.com/magazine/entry/2212082\r
https://doda.jp/guide/heikin/age/`,comments:{totalCount:0},reactions:{totalCount:3},labels:{nodes:[{name:"医療・防災"}]},updatedAt:"2024-06-23T23:03:08Z"},{title:"都内に設置されているモスキート音発生装置に対する規制",number:121,createdAt:"2024-06-23T07:06:56Z",url:"https://github.com/takahiroanno2024/election2024/issues/121",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [x] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
モスキート音のない、モスキート音の聞こえる人がどこでも自由に歩けるような街作りを目指していただきたく、モスキート音発生装置に対する規制を行う政策を提案します。\r
\r
### 必要だと思ったきっかけ\r
東京都内では、繁華街のいたるところにモスキート音発生装置が設置されており、これによってモスキート音が聞こえてしまう都民及び外国人を含む都内への観光客は、不快な思いをしたり回り道を要求されています。\r
\r
モスキート音発生装置は[ネズミ駆除等の理由で](https://www.cic-net.co.jp/product/)繁華街のビル等に設置されることが多いようです。このような装置の発するモスキート音は一般には人間には聞くことができない周波数域(19000Hz以上)が使われていますが、生まれつきこのような周波数域の音が聞こえてしまう人も存在し、そのような人は「[キーンという高い音](https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12175387017)」、「[チリチリという耳障りな電子音](https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12190789047)」としてモスキート音を知覚し、「[頭が痛くなる](https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q10231877615)」「[とても不愉快](https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12259778652)」「[脳みそに直接響いてくるような、なんとも言い難い高周波の電子音が耳の奥をつんざいてきて、その場を通り抜けるのにとても負荷がかかる](https://note.com/red_camera22/n/nd885c6e7504e)」「[（息子は）耳から頭にかけて痛がるようになって、しばらく頭痛がひかない。耐えがたい苦痛](https://www3.nhk.or.jp/news/special/lifechat/post_132.html)」などといった被害がインターネット上で報告されています。\r
\r
また、私自身は今年で33歳になりますが、現在でもモスキート音の聞こえ方が10代の頃と変っておらず、一般に言われる「年を取ればモスキート音が聞こえにくくなる」という言説には懐疑的です。\r
私も、モスキート音発生装置のある場所は暗記して可能な限り迂回するようにしていますが、会社の用事で団体行動している際などに迂回を他人にも要求するのは心苦しく、不便な街だなと思っています。\r
\r
\r
### なぜ必要か\r
\r
前述のとおり、モスキート音発生装置は都内で生活するモスキート音が聞こえる人に被害を与えています。\r
東京都の公共の音に対する法規制は[環境確保条例（都民の健康と安全を確保する環境に関する条例）](https://www.kankyo.metro.tokyo.lg.jp/noise/noise_vibration/rules/300200a20220907112602077.html)が存在しますが、これにより設置済みモスキート音発生装置が取り外された事例は私は把握しておらず、実際、昔から設置されているモスキート音発生装置は建物自体が取り壊される等がなければ設置されたままになっているように思います。\r
\r
さらに、ここ数年は[モスキート音発生装置の設置箇所が増加する傾向にあり](https://gecko655.hatenablog.com/entry/shibuya-mosquito-sound)、なんらかの法整備や行政の施策によって、乱立するモスキート音発生装置の設置をやめさせる必要があると考えています。\r
\r
このような政策は、国などのより大きな政治主体によって実施されるべきと考えられるかもしれませんが、まずは我が国で最も大きな都会を持つ首都東京によって、モスキート音問題の解決への第一歩を踏み出していただきたいと考えています。\r
\r
### このイシューで議論したいこと\r
\r
- 具体的な規制方法・内容について\r
    - 規制すべきモスキート音の出力（xx kHzで, yy dB を超えるもの etc.）\r
    - 公共施設・公共交通機関施設における規制（東京駅、新宿NEWoMan、渋谷駅西口バス停、渋谷駅東京メトロB7番など）\r
    - 私企業施設における規制\r
    - 罰則\r
 \r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
（「必要だと思ったきっかけ」の節もご覧ください）\r
- この Issue の筆者によるブログ https://gecko655.hatenablog.com/entry/shibuya-mosquito-sound\r
- 都内などのモスキート音発生装置の設置場所について\r
https://www.crossroad-life.info/entry/mosquite_place\r
https://www3.nhk.or.jp/news/special/lifechat/post_131.html\r
https://www.google.com/maps/d/viewer?hl=ja&mid=1ZWgNIhzjppDUQpTdwkqTRz1zZ6k&ll=35.688102343196654%2C139.73621262194823&z=12`,comments:{totalCount:0},reactions:{totalCount:6},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-06-23T08:23:38Z"},{title:"西部における南北方向の移動を容易に",number:122,createdAt:"2024-06-23T07:09:16Z",url:"https://github.com/takahiroanno2024/election2024/issues/122",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [x ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
BRT等で南北方向の移動がしやすいようにしてほしい．\r
\r
### 必要だと思ったきっかけ\r
\r
杉並以西において鉄道網は東西方向に引かれていることが多く南北方向の移動が難しい．\r
\r
### なぜ必要か\r
\r
区市レベルでマイクロバスを走らせているのである程度それらが解決している現状はあるのかもしれないが，区をまたいだ移動のニーズには応えられていない．また停留所の間隔も狭いため速達性が大きく損なわれていると感じる．(バスではなくBRTと書いたのはそのような理由です．環状7,8号線などBRTを可能にする素地はあると考えています)\r
\r
### このイシューで議論したいこと\r
\r
東京都西部における交通需要\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
肌感覚ですが特に杉並区民はそのような問題意識を長くもっています．\r
`,comments:{totalCount:2},reactions:{totalCount:3},labels:{nodes:[{name:"duplicated"},{name:"行政"}]},updatedAt:"2024-06-25T09:29:16Z"},{title:"AIによる行政統計データ収集・資料化の効率化とその利活用",number:123,createdAt:"2024-06-23T07:14:32Z",url:"https://github.com/takahiroanno2024/election2024/issues/123",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [x] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
東京都は、オンラインで様々な**行政統計**を公表している。\r
\r
例えば、東京都福祉局の[衛生行政統計](https://www.fukushi.metro.tokyo.lg.jp/kiban/chosa_tokei/geppo/2023/june/june2.html)や[福祉行政統計](https://www.fukushi.metro.tokyo.lg.jp/kiban/chosa_tokei/geppo/2023/june/june1.html)、財務局の[予算情報](https://www.zaimu.metro.tokyo.lg.jp/zaisei/yosan)や[東京都基準地価格情報](https://www.zaimu.metro.tokyo.lg.jp/kijunchi)、東京都保健医療局の[新型コロナウィルス感染情報](https://www.hokeniryo.metro.tokyo.lg.jp/kansen/corona_portal/info/monitoring.html)など、多岐に渡る。\r
\r
これら行政統計について、AIを活用すれば、統計情報収集の効率化・資料作成の迅速化・より深い分析の実施・統計を分かりやすく見える化するなどが可能である。AIによる行政統計データ収集・資料化の効率化とその利活用をぜひマニフェストに盛り込んで欲しい。\r
\r
### 必要だと思ったきっかけ\r
\r
[TOKYO予算見える化ボード](https://www.zaimu.metro.tokyo.lg.jp/zaisei/zaisei/dashboard/redirect02/)など、そうした努力や工夫はこれまでにも見られる。しかし未だにExcelベースの資料公開に留まっている行政統計も多い（Excelやcsvファイルそれ自体の公表は、生データを確認したい都民にとっては有用であり、継続性も大事ではある）。しかし研究者以外の一般都民がExcelやcsvファイルを覗きに行くのは稀であろう。\r
\r
### なぜ必要か\r
\r
東京都が継続的に収集している行政統計から、新たな発見があるかもしれない。例えば新型コロナウィルスの感染データは、次のパンデミックに備える為にも深く分析されなければならない。\r
\r
また、これは想像だが、東京都はExcelやcsv に行政統計を纏めるだけでもかなりの人員と労力を割いていると思われる。この作業はAIで自動化できる余地が大きい。\r
\r
### このイシューで議論したいこと\r
\r
・AIによる行政統計データ収集・資料化の効率化\r
・AIによる行政統計データの利活用\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
・[財務局HP](https://www.zaimu.metro.tokyo.lg.jp)\r
・[保険医療局HP](https://www.hokeniryo.metro.tokyo.lg.jp/index.html)\r
・[福祉局HP](https://www.fukushi.metro.tokyo.lg.jp)\r
`,comments:{totalCount:1},reactions:{totalCount:1},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-06-27T06:29:59Z"},{title:"都営交通機関の24時間運行",number:124,createdAt:"2024-06-23T08:04:09Z",url:"https://github.com/takahiroanno2024/election2024/issues/124",state:"OPEN",body:`## 政策ビジョン\r
\r
- [X] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
都営交通機関を24時間運行し、下記目的の達成を促進する\r
\r
1. 通勤、退勤ピークタイムの異常混雑の解消\r
2. 併せてダイナミックプライシング導入、民間企業のオフピークタイム通勤の促進\r
3. 夜間帯の雇用創出\r
4. インバウンド観光客の電車利用時間帯の分散\r
5. 真夏、真冬の民間企業における通勤時間帯に柔軟な選択肢を持たせ、従業員の生産性向上へ寄与\r
\r
### 必要だと思ったきっかけ\r
\r
- 東京の交通機関（特に電車）におけるピークタイムの混雑は異常であり、特に昨今インバウンド観光客もそこに加わり、電車による通勤は現実的ではないと考えたため\r
- 周囲にもピークタイムの満員電車での通勤を現実的ではないと判断し都心部への通勤を諦めた人間が複数名いるため\r
\r
### なぜ必要か\r
\r
- 上記「政策」セクションで記載した目的が達成され、経済的貢献、住民満足度の向上などさまざまなメリットが得られるため\r
\r
### このイシューで議論したいこと\r
\r
- 実現可能性\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
- https://www.zenrin-datacom.net/solution/congestion/media/k002`,comments:{totalCount:3},reactions:{totalCount:6},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-24T00:32:45Z"},{title:"赤線地帯の復活・パパ活等個人売春の規制",number:125,createdAt:"2024-06-23T08:47:55Z",url:"https://github.com/takahiroanno2024/election2024/issues/125",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [X] 経済\r
- [X] 医療・防災\r
- [ ] 教育・子育て\r
- [x] 行政\r
- [ ] 民主主義\r
\r
## 前提\r
公娼制度とは、国家や地方自治体が売春を規制・管理する制度です。\r
売春を公認されていた地域のことを俗に「赤線地帯」などと呼びます。\r
1956年売春防止法により廃止されましたが、近年その復活を主張する声が一部で上がっています。\r
\r
## 政策\r
・公娼制度、赤線地帯の復活。\r
・個人売春（パパ活・ギャラ飲み等）の強制個人事業主化\r
\r
### 必要だと思ったきっかけ\r
・友人の話ではSNSで知り合った女性と金銭の絡む交際をした結果、梅毒に感染にしてしまったとのこと。\r
また、その相手女性は「確定申告なんて必要なの？」と個人売春で得た金銭が所得であるという意識がない\r
発言があったと聞いている。\r
・梅毒の感染者が今の統計方法になった1999年以降最悪ペースという場を見た。\r
パパ活、ギャラ飲みという名で個人売春の一般化がその影響ではないかと考えられる\r
・また、パパ活、ギャラ飲み女性らの所得隠し・確定申告漏れが社会問題となってる。\r
\r
### なぜ必要か\r
・売春を管理することによる公衆衛生、社会秩序維持\r
・公娼制度・個人売春規制による税収の増加が見込まれる。\r
\r
### このイシューで議論したいこと\r
・どうすればパパ活、ギャラ飲み等の隠れ個人売春を見える化し、規制を行うか。\r
・梅毒などの性病蔓延を防止しながら、風俗文化の維持を行うか。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
・NIID国立感染症研究所 IDWR 2022年第42号＜注目すべき感染症＞ 梅毒\r
https://www.niid.go.jp/niid/ja/syphilis-m-3/syphilis-idwrc/11612-idwrc-2242.html\r
\r
`,comments:{totalCount:4},reactions:{totalCount:2},labels:{nodes:[{name:"医療・防災"},{name:"経済"}]},updatedAt:"2024-06-26T11:53:05Z"},{title:"民泊の規制",number:126,createdAt:"2024-06-23T08:52:35Z",url:"https://github.com/takahiroanno2024/election2024/issues/126",state:"OPEN",body:`## 政策ビジョン\r
- [X] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
民泊の規制強化により、都内の賃貸住宅供給を増やすことにより、都内の特に現役世代が住むことが可能な住宅を増やす。\r
\r
### 必要だと思ったきっかけ\r
欧州では金利上昇、民泊の拡大、観光客の流入増加、不動産価格の上昇などの要因により、賃貸住宅の民泊化や、賃貸住宅を販売することが増えており、賃貸住宅不足が問題になってます。\r
日本でも同様な傾向があり、賃貸住宅不足が発生すると賃貸住宅価格の高騰を招き、若者の流入や可処分所得減少、ひいては婚姻率や出生率にもかかわると考えます。賃貸住宅不足状態では海外からの移住者や学生、駐在員が長期滞在することが困難になり、イノベーションの芽を摘んでしまいます。\r
欧州の一部の観光地や都心部では上記の状況により、既に観光地や都心部で民泊規制が実施されてます。東京でも特別区限定で民泊規制を実施すべきだと考えます。\r
\r
既存の民泊規制は区単位で実施されており、あくまで地域住民への配慮に重点を置いた規制となってます。\r
東京都でも上乗せ規制することで、出生率解消や高度人材獲得などの他のマニフェストとの整合性をとりたいです。\r
\r
### なぜ必要か\r
1. 賃貸住宅価格の上昇圧力防止による、若者の定着と可処分所得増加及び海外からの高度人材の滞在先確保\r
2. オーバーツーリズム対策\r
3. 欧州で実際に賃貸住宅不足の問題が発生し、民泊規制を実施しており、東京で同様な問題が発生する条件が揃いつつあるため\r
\r
### このイシューで議論したいこと\r
民泊規制の必要性\r
他の政策との整合性\r
ベンチマークや政策根拠の提示方法\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
Air B&Bで都内で11月週末で検索したところ1000件以上ヒット\r
既に民泊規制は区単位で実施している。規制のない区もあり。\r
パリの民泊規制\r
https://www.paris.fr/pages/declaration-prealable-a-la-location-d-un-meuble-touristique-5007/`,comments:{totalCount:3},reactions:{totalCount:4},labels:{nodes:[{name:"duplicated"},{name:"経済"}]},updatedAt:"2024-07-01T14:27:14Z"},{title:"中古不動産市場の透明化と活性化",number:127,createdAt:"2024-06-23T09:39:03Z",url:"https://github.com/takahiroanno2024/election2024/issues/127",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [X] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
多くの日本人は長期ローンを組んで家を購入します。\r
しかし、日本の不動産は長期的には価値が下がっていく傾向があり、その結果日本人の資産は大きく毀損しています。\r
中古不動産市場に情報の透明性を持たせて安心して売買する敷居が下がることで、市場の活性化と中古物件の価値が維持されるようになることが期待できます。\r
その先鞭として東京からインスペクション（建物診断）の普及、リフォームの支援、売買の双方から手数料を受ける両手取引の禁止などを行うのはどうでしょう？\r
\r
### 必要だと思ったきっかけ\r
一般的な日本と米国の家庭が、ただ所有する自宅の価値が上昇するか毀損するかどうかだけの違いで、老後の豊かさのレベルに天と地の違いがあることを知ったことがきっかけです。子育て中に購入した自宅に、子供が独立した後も最期まで住み続けないといけない日本の現在の住環境は貧しいです。米国では中古物件の価値が上がるので、ライフステージに合わせて現在の物件を売却し、新しい家に住み替えることが容易です。\r
\r
### なぜ必要か\r
日本での自宅購入は、長期ローンを組んでまるで使い捨て製品を買うかのように、経済的な観点からは最低の投資です。\r
これを変えることで国民が豊かになります。\r
\r
### このイシューで議論したいこと\r
多くの一般的な日本人にとって人生最大の買い物である自宅の価値が徐々に下がっていく現在の中古不動産市場の在り方が、国民が貧しくなる最大の原因の一つとなっている。その解決策を議論したい。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
米国の不動産売買価格の中央値と平均価格の推移:\r
https://fred.stlouisfed.org/series/MSPUS\r
https://fred.stlouisfed.org/series/ASPUS\r
注: 米国では不動産取引全体の約80%が中古物件です`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-23T11:33:28Z"},{title:"生成AIの部分的規制 ",number:128,createdAt:"2024-06-23T10:32:49Z",url:"https://github.com/takahiroanno2024/election2024/issues/128",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
i2i（画像から画像作成）都内ipアドレスされたもののうち、元画像がAIで作成されている、自らの著作物（自分の写真、自分で描いた絵）のいずれでもない場合、作成したサイトおよび作成者に罰則を加える\r
ディープフェイク含む音声生成、画像生成、動画生成において（不可視の）デジタルウォーターマークをつけない生成AI作成サイトの（都内wifiおよび都内の市区町村wifiでの）アクセス遮断\r
\r
### 必要だと思ったきっかけ\r
著作権侵害が横行していても、訴えても損になることからできう、結果やったもん勝ちになってる\r
安野氏は生成AI否定派からの票を得にくいため\r
### なぜ必要か\r
画像生成において、i2iのこれ以上の発展における未来よりも著作権侵害の方が深刻であると考える。名ばかりでも罰則がある良いと考える。とはいえエンジニアの開発、イラストの新しい構図考えなどに役立つ面もあるので、このぐらいだが妥当だと考える。\r
（不可視の）としたのは右下等場所指定でも良いが切り取れること、あくまで生成AIの識別が可能であれば十分だと思うこと、（都内wifiおよび都内の市区町村wifiでの）としたのは都知事としての権限としては妥当かなと思った。AIの公益性はそのまま、必要な規制は進めてほしい\r
### このイシューで議論したいこと\r
どこまで生成AIを利用すべきか\r
### 調べたこと（裏付けとなる事実・ファクト）\r
https://www.bunka.go.jp/seisaku/bunkashingikai/chosakuken/hoseido/r05_07/pdf/94059201_01.pdf\r
https://togetter.com/li/2387279\r
https://studiomasakaki.fanbox.cc/posts/6647841\r
など、AI否定派の意見は強く残っている`,comments:{totalCount:5},reactions:{totalCount:1},labels:{nodes:[{name:"その他"}]},updatedAt:"2024-06-28T08:42:58Z"},{title:"エッセンシャルワーカーの待遇・環境改善",number:130,createdAt:"2024-06-23T10:55:19Z",url:"https://github.com/takahiroanno2024/election2024/issues/130",state:"OPEN",body:`## 政策ビジョン\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [X] 医療・防災\r
- [X] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
給与を大幅に引き上げて採用数を増やし、人員を増やすことで職場環境の改善も図る\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
医療や防災だけでなく、警察や教育、役所など実際に人・モノを扱う必要がある業務については、ITを利用した効率化だけでは限界があり、なり手自体を増やす必要があると感じているため\r
\r
### なぜ必要か\r
いくら技術が発達しても、実際に人やモノを扱う仕事が不可欠・最重要であり、その営みが正当に評価されるべきと考えるため\r
\r
\r
### このイシューで議論したいこと\r
実際にエッセンシャルワーカーとして働いている方々が感じる課題感も踏まえた、課題の列挙と重要度/優先度の分類、実現案の検討\r
\r
※以下は想定される課題\r
- 目指す給与水準/体系→実績に応じて、大企業や外資系クラスの給与も視野に入れる\r
- 労働環境の見直し→どのような状態であれば働きやすいと思われるか、それを実現するために必要なリソースや制度\r
- 上記を確実に実行に移すために超えるべき課題と解決策\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
https://president.jp/articles/-/78626\r
https://www.sankei.com/article/20240313-RERF3SDMLZOP7PNDTVOVNXXX24/`,comments:{totalCount:4},reactions:{totalCount:9},labels:{nodes:[{name:"duplicated"},{name:"教育・子育て"},{name:"医療・防災"}]},updatedAt:"2024-06-23T21:36:03Z"},{title:"家賃補助を導入する",number:131,createdAt:"2024-06-23T11:04:51Z",url:"https://github.com/takahiroanno2024/election2024/issues/131",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [X] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
所得制限を設けた上で、都として家賃補助を支給する。具体的な数字としては、最低でも、ファミリー世帯で月15万円以下を想定。\r
\r
### 必要だと思ったきっかけ\r
\r
東京都の家賃相場は漸次増加し続けていて、"普通"の人が都内に住めない状態になっていること。\r
\r
### なぜ必要か\r
家賃が異常に高騰することによって、生活が苦しくなる。また、家賃と子供の数には負の相関がある[^1]というデータもあり、少子化の一因にもなっている。\r
\r
[^1]: https://shinichiro-iwata.github.io/lecture-notes-urban-econ/housing-children.html\r
### このイシューで議論したいこと\r
\r
- 具体的な制度設計\r
- 実現可能性\r
- 住宅市場などへの影響\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
家賃と子供の数の関係について\r
https://shinichiro-iwata.github.io/lecture-notes-urban-econ/housing-children.html\r
家賃の高騰について\r
https://www.nhk.or.jp/shutoken/wr/20230307a.html\r
`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-29T13:03:26Z"},{title:"諸外国からの投資と高度技能人材の誘致",number:132,createdAt:"2024-06-23T11:05:51Z",url:"https://github.com/takahiroanno2024/election2024/issues/132",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [x] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [x] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
東京を国際的なイノベーション都市にしていく為には、諸外国からの投資と高度技能人材が必要である。その為には、労働ビザの取得についての障壁の撤廃や、免税特区（経済特区）を設けるなどの政策が考えられる。諸外国の都市と比較して、より魅力的な労働条件・投資条件を整備しなければならない。\r
\r
東京都は、「[東京都技術会議](https://www.toshiseibi.metro.tokyo.lg.jp/topics/h27/pdf/topi017/topi017_1.pdf)」を設置している。都政の重要かつ緊急な課題に対し、技術的側面から意見交換をおこなう場である。座長は副知事である。東京都に産業を誘致し、高度技能人材を呼び込み、先進的な技術を取り入れた都市計画を真剣に話し合ってもらいたい。また、[都市計画審議会](https://www.toshiseibi.metro.tokyo.lg.jp/keikaku/shingikai/index.html)は、都が都市計画を定めるときに、都市計画法に基づき都市計画案を調査審議する機関。ここでも実効性のある審議と決定をお願いしたい。\r
\r
都が誇る高い技術力を国内外に示し、都のプレゼンスを向上させるとともに、国内はもとより海外諸都市が抱える課題の解決に寄与することを目的とした冊子[Tokyo Tech Book](https://www.toshiseibi.metro.tokyo.lg.jp/topics/h27/topi017.html)には、様々な先進技術を取り入れた都市計画の内容が示されている。この内容をより進化させ、東京スマートシティの構想と実現への道筋を具体化して欲しい。\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
\r
諸外国の大都市は、AI技術を取り入れた先進的なスマートシティに生まれ変わろうとしている。東京がその波に乗り遅れることがないようにしてもらいたい。\r
\r
### なぜ必要か\r
\r
東京は先進的な技術都市として魅力を増すことで、日本の経済成長を牽引することができる。\r
\r
### このイシューで議論したいこと\r
\r
・諸外国からの投資と高度技能人材の積極的な誘致政策\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
[令和６年度予算概要](https://www.zaimu.metro.tokyo.lg.jp/zaisei/yosan/r6/6yosangaiyounituite/)\r
[都市整備局](https://www.toshiseibi.metro.tokyo.lg.jp)`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"経済"},{name:"行政"}]},updatedAt:"2024-07-04T15:11:25Z"},{title:"東京都選挙制度の改善",number:133,createdAt:"2024-06-23T11:07:22Z",url:"https://github.com/takahiroanno2024/election2024/issues/133",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ｘ] 民主主義\r
\r
## 政策\r
１．立候補条件の見直し\r
　１．１供託金の廃止または低額化（日本は略世界一高く、参政権を損ねている）\r
　１．２立候補目的の厳密化（商業目的は不可、事前に政策目的概要を提出させるなど）\r
２．選挙活動方法の改善\r
　２．１コスパの悪い掲示板は中止する。政策目的の一覧表配布。\r
　２．２選挙活動方法のネット活用化*。\r
　　＊大幅にネット選挙を解禁するが、ＩＴ不得意な候補者を不利益にしない方法を準備。\r
３．決選投票制（2回投票制）を採用する\r
　３．１1回目で２名に絞る\r
　３．２決選投票で過半数取ったものを当選とする\r
　＊殆どの国では得票率５０％を条件に定めている。\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
\r
### なぜ必要か\r
\r
### このイシューで議論したいこと\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
`,comments:{totalCount:3},reactions:{totalCount:0},labels:{nodes:[{name:"民主主義"}]},updatedAt:"2024-07-01T17:41:37Z"},{title:"ブロードリスニングの不明点",number:134,createdAt:"2024-06-23T11:21:38Z",url:"https://github.com/takahiroanno2024/election2024/issues/134",state:"OPEN",body:`## 政策ビジョン\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [x] 行政\r
- [X] 民主主義\r
\r
## 政策\r
ブロードリスニングはマニフェストの大きな柱の一つだが懸念点がある\r
ブロードリスニングにより集まった意見をどのようにレポート化するのかが不明\r
\r
### 必要だと思ったきっかけ\r
デジタル化とのことなのでおそらく生成AIを使用するのだと思われるが技術的に可能なのか不透明\r
既存の生成AIは適切な情報の取捨選択ができないのではないか\r
\r
### なぜ必要か\r
ポピュリズムに陥らず拾い上げるべき少数意見を切り捨てないため\r
\r
### このイシューで議論したいこと\r
ブロードリスニングの詳細な仕様\r
もしくは改善案\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
なし`,comments:{totalCount:9},reactions:{totalCount:5},labels:{nodes:[{name:"民主主義"}]},updatedAt:"2024-07-02T06:46:51Z"},{title:"AIによるリアルタイムデータ解析を利用した救急搬送システムの最適化",number:135,createdAt:"2024-06-23T11:55:17Z",url:"https://github.com/takahiroanno2024/election2024/issues/135",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [X] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
救急指定病院の外来・病床状況、手術進捗、専門医の人員配置、経営状況などをリアルタイムに解析し、\r
さらに患者の臨床兆候などを含め、消防だけではなく民間救急とも連携し最適な病院へ搬送するシステムの構築。\r
\r
\r
### 必要だと思ったきっかけ\r
\r
救急搬送によるたらい回しの問題は依然より存在していたが、高齢化や人材不足などの影響で今後さらに深刻になると考えられる。\r
また、医療現場の働き方改革により、労働時間の規制が進む状況はさらに拍車をかけている。\r
このような状況を打破するためには、あらゆる角度から原因の解析が求められ、AIやビッグデータを利用したシステムの再構築は必須であると考えた。\r
\r
### なぜ必要か\r
\r
### このイシューで議論したいこと\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
`,comments:{totalCount:0},reactions:{totalCount:2},labels:{nodes:[{name:"医療・防災"}]},updatedAt:"2024-06-23T11:55:27Z"},{title:"都政にパブリック・コメント制度を導入する",number:136,createdAt:"2024-06-23T12:30:37Z",url:"https://github.com/takahiroanno2024/election2024/issues/136",state:"OPEN",body:`## 政策ビジョン\r
都民の政策に関する意見や新たな提言を容易に行える用、２つのパブリックコメント制度を設ける\r
＊これらの施策により百家争鳴、都民の政策意識を高め、行政施策を民主的に磨き上げる。\r
\r
１．特定施策・条例に対する意見を求める。\r
　　制定する条例案などを公示し意見を求める制度。（政府が行っている制度と同種）\r
　　＊意見の集約にはデジタル技術を使い、定量的に解析する。\r
２．新（未定）テーマで施策を都民が提言する（米国で行っている制度に似る）\r
　２．１　新テーマを提言し、賛同者を求める。\r
　　＊提言案をまとめ提出する際、デジタル技術で修正意見を盛り込む方法を検討する。\r
　　　検討）連携追加型意見形成方法、投票型意見集約方法\r
　２．２　賛同者が一定数を超えれば、行政に回答を義務付ける。\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ｘ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
<!-- できる限り記入をおねがいします -->\r
\r
### 必要だと思ったきっかけ\r
\r
### なぜ必要か\r
\r
### このイシューで議論したいこと\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
`,comments:{totalCount:3},reactions:{totalCount:5},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-06-27T06:14:54Z"},{title:"新技術を積極的に活用する環境政策の実施",number:137,createdAt:"2024-06-23T13:49:59Z",url:"https://github.com/takahiroanno2024/election2024/issues/137",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [X] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
<!-- できる限り記入をおねがいします -->\r
現在東京都では「災害にも強く健康にも資する断熱・太陽光住宅普及拡大事業」を実施しており、令和６年度の予算額は約683億円と巨額です[1]。しかし、補助金の対象となる事業は限定的で、効果的な政策となっているのか疑問があります。本提案は、新技術を積極的に利用することで、多くの人が参加できるより効率的な事業とし、地球環境の維持に東京都として積極的に関与し、多くの都民が新エネルギー技術の恩恵に受けられるようにすることです。\r
\r
### 必要だと思ったきっかけ\r
太陽光発電や蓄電池の導入に高額の補助金を出していますが（太陽光発電は最大約600万円、蓄電池は最大120万円）[1]、対象となる事業は限定的であり、例えば、マンションに住む人が自分で導入する場合は補助金の対象とならず、また、戸建ての場合も複雑な工事が必要であり、補助金の対象となるのは一部の人に限られています。\r
\r
### なぜ必要か\r
太陽光発電については、現在広く利用されている技術ではなく、マイクロコンバータやマイクロインバータといった技術が10年前から議論されていましたが、日本では家庭用としてほとんど導入されていませんし、補助金の対象とはなっていません。諸外国では様子が異なり、例えば、EUではマイクロインバータを主流の方式として、ベランダでも簡単に太陽光発電ができるようにするという議論が進んでいます[3]。最近、日本でも安価な製品が発売されているようですが[4]、安全性や法的な整理が十分ないと普及は難しいと思われます。\r
\r
### このイシューで議論したいこと\r
そこで、新技術を積極的に活用して、より多くの都民が地球環境の改善に貢献できる政策を進めることについて、議論をお願いします。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
[1] https://www.tokyo-co2down.jp/subsidy/adiabatic_solor\r
[2] https://xtech.nikkei.com/dm/article/FEATURE/20120208/204524/\r
[3] https://www.linkedin.com/pulse/european-market-primed-transition-towards-based-rooftop-ahmet-ta%C5%9F\r
[4] https://sekiyabattery.shop-pro.jp/\r
`,comments:{totalCount:3},reactions:{totalCount:1},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-06-26T06:15:49Z"},{title:"海外人材・資本依存時代の戦略",number:140,createdAt:"2024-06-23T17:54:59Z",url:"https://github.com/takahiroanno2024/election2024/issues/140",state:"CLOSED",body:`## 政策ビジョン\r
- [X] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
海外人材・資本の戦略的活用と人口動態対策の統合\r
\r
### 必要だと思ったきっかけ\r
現行のマニフェストは経済発展において技術産業の育成・誘致に焦点を当てていると思います。日本国内の次世代についての政策も記載されていますが、短期的な経済成長には海外の人材と資本に頼ることになり、その場合に想定される懸念に対する記載も必要ではないかと思ったため。\r
\r
### なぜ必要か\r
1. 日本の出生率低下と人口減少が継続しており、労働力確保が喫緊の課題となっている\r
2. 人口動態改善の効果が現れるまでには長期間を要するため、短中期的には海外の人材・資本に依存せざるを得ない\r
\r
### このイシューで議論したいこと\r
\r
1. 短中期戦略：海外人材・資本の戦略的活用\r
   - 外国資本誘致のための規制緩和と国益保護のバランス\r
\r
2. 統合戦略：短期と長期の調和\r
   - 外国人材と日本人材の効果的な協働・知識共有の方法\r
   - 多文化共生社会の実現に向けた課題と対策\r
\r
3. 潜在的な課題と対策\r
   - 海外人材依存に伴うリスク（例：技術流出、文化的摩擦）とその対策\r
   - 短期的な経済成長と長期的な社会構造改革のバランス取り\r
   - 財源確保と費用対効果の検討\r
\r
\r
この Issue を通じて、海外人材・資本の活用に関する具体的な戦略と、それに伴う課題への対策について建設的な議論を行い、より実効性のあるマニフェストの改訂につなげられればと思います。`,comments:{totalCount:2},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"経済"}]},updatedAt:"2024-06-23T17:59:42Z"},{title:"フランスの出産制度導入",number:141,createdAt:"2024-06-23T18:15:33Z",url:"https://github.com/takahiroanno2024/election2024/issues/141",state:"OPEN",body:`## 政策ビジョン

<!--
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。
記入例: [X] 経済
-->

- [ ] 経済
- [ ] 医療・防災
- [X] 教育・子育て
- [ ] 行政
- [ ] 民主主義

## 政策

<!-- できる限り記入をおねがいします -->

### 必要だと思ったきっかけ
母親が一人で産み、母親がいつも逮捕される構図が非常に不愉快かつ理不尽だと思った為

### なぜ必要か
母親の負担が大きすぎる
父親の自覚は何処へ？と思うため

### このイシューで議論したいこと
フランスのように、
・出産すると、女性も男性も自分の子として認知するかどうか選択できる→どちらも認知しない場合は「国の子」として戸籍がつくられ、養親のもとへ

・女性は父親と思われる男性が認知することを裁判所に求めることができる→男性がDNA鑑定などに応じない場合は強制的に父親と決定され、養育費の支払い義務が生じる→拒否しても、社会保障を担当する部署が母親の代わりに請求、雇用主に連絡、子どもが18歳になるまで給与から天引き

・日本では買春する側が罰せられることがない。仏では、成人を買春した場合は罰金20万～51万円、組織的にあっせんした場合は20年の刑期と4億円の罰金。15歳未満を買春した場合は最高で7年、罰金1400万円。罰金は国による一括徴収、払えない分は借金、返済が終わるまで収入から天引きされ続け、亡くなったときは、国が第一相続人となり残りの罰金を徴収。

・避妊、中絶、健診、出産にまつわる費用は基本的に無料

・性に関する情報を検索すると、誤った情報に触れることがないよう、国の性情報ホームページがまっさきに出てくるようになっている。

・子を育てることを希望しなくても、安全で合法的な出産を保障するのが公衆衛生→全国どこの病院でも匿名出産できる→カウンセラーとの対話により多くは自分の情報を残していく

という制度の導入


### 調べたこと（裏付けとなる事実・ファクト）

https://www.asahi.com/articles/ASR9H5W36R95TLVB00M.html

https://x.com/livedoornews/status/1778917745259905122

https://t.co/YL6zkIUvtv

https://t.co/4aWVlgEDuM

https://t.co/514TiWo5E1`,comments:{totalCount:0},reactions:{totalCount:6},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-23T18:15:47Z"},{title:"ゴミ箱を増やしてほしい",number:142,createdAt:"2024-06-23T23:54:27Z",url:"https://github.com/takahiroanno2024/election2024/issues/142",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

海外の主要都市（サンフランシスコ、ニューヨーク、パリ、ジャカルタ）と違って東京はまちなかに設置しているゴミ箱が極めて少ない。この状況を改善してほしい

### 必要だと思ったきっかけ

インバウンドの増加により街中でゴミをどうすればいいか分からない外国人を見かけることが増えたため

### なぜ必要か

上記に同じ

### この Issue で議論したいこと

この提言がコストパフォーマンス的に有益なものかどうか

### 調べたこと（裏付けとなる事実・ファクト）

https://honichi.com/news/2020/07/13/touristsxsurvey/

### 自由記述欄

何千億円使って箱物を増やすよりは直接都民の利益につながるように思える`,comments:{totalCount:14},reactions:{totalCount:28},labels:{nodes:[{name:"医療・防災"},{name:"経済"}]},updatedAt:"2024-07-01T23:52:01Z"},{title:"東京と地方が連携し、日本全体の発展につなげる",number:143,createdAt:"2024-06-24T00:23:10Z",url:"https://github.com/takahiroanno2024/election2024/issues/143",state:"OPEN",body:`### 政策ビジョン

行政

### 政策

* 産業や観光をはじめ、東京と地方との共存共栄を一層推進し、東京が日本全体の持続的発展を支えていく\r
* 医療・介護施設不足解消のため、全国の自治体との連携をさらに推進する

### 必要だと思ったきっかけ

地方の活力を東京だけが吸い上げてしまっては、地方だけでなく東京、そして日本の消滅につながりかねないと考えたため。また、人口戦略会議が今年4月に発表した分析では、出生率が低くほかの地域からの人口流入に依存している「ブラックホール型自治体」に都内の16区が指定されており、東京を真の意味で持続可能な都市に転換する必要があると考えたため。

### なぜ必要か

過度な東京一極集中は少子化の原因にもなり、地方だけでなく東京にも弊害を引き起こします。また、企業・人の東京一極集中についてはNHKが2021年の都議選に合わせて行った都民1万人アンケートでも66%が「是正すべき」と回答しています。首都東京は外国企業の誘致などによって国際金融都市として発展し、地方は地方の良さや強みを生かして共存共栄できるモデルづくりが求められています。また、東京圏には医療・介護施設が不足しており、超高齢化社会に対応できるかが大きな課題です。例えば杉並区は、静岡県南伊豆町と連携して特別養護老人ホームを整備していますが、こうした自治体間の連携を東京都としてもさらに進める必要があると考えます。

### この Issue で議論したいこと

過度な東京一極集中の是正、地方と東京の連携の推進

### 調べたこと（裏付けとなる事実・ファクト）

https://www3.nhk.or.jp/news/html/20240424/k10014431611000.html\r
https://www.nhk.or.jp/senkyo/database/togisen/2021/questionnaire/

### 自由記述欄

_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-06-24T02:58:01Z"},{title:"いたずらや対立潰し、都民であることの確認はどうするのか（荒らし対策について）",number:144,createdAt:"2024-06-24T00:52:40Z",url:"https://github.com/takahiroanno2024/election2024/issues/144",state:"CLOSED",body:`### 政策ビジョン

民主主義

### 政策

現状ネットでの進言は、都民でなかろうが自由に書き込めます。現に私は東京都民ではありません。\r
やろうと思えば外国人でもDEEPLのようなAIの翻訳で日本人と判別できない書き込みができます。（いい意味で使えば在日外国人との意思疎通は便利になるとは思います）\r
\r
すると、善性のある純粋な東京都民だけでなく、東京とは関係のないいたずら心をもつ人や、自分の意見を通したいだけの対立潰しをしたがる人、また政治的な悪意ある海外の他者が扇動目的でブロードリスニングを混乱させることがあると思います。\r
いわゆるネット荒らしです。\r
\r
ipアドレスで都民であることを確かめるとしても、スマホのipや、一時的に東京外にいる東京都民を判別できないのではないでしょうか。\r
またAIで荒らしかどうかを判別して悪そうな書き込みを弾くとしても、それは行政による検閲の一種になってしまうのではないでしょうか。\r
\r
今の所Twitterもインプレゾンビを撲滅できていません。匿名掲示板も荒らしを排除できていません。この対策は考える必要があると思います

### 必要だと思ったきっかけ

オンラインでのコミュニケーションの歴史には常にネット荒らしが切っても切れない関係にあるので。

### なぜ必要か

荒らしをどうにかできない限り正常な意見が反映されないから

### この Issue で議論したいこと

荒らし排除の効果的な方法はあるのかについて。

### 調べたこと（裏付けとなる事実・ファクト）

私自身がまず東京都民ではないという主観的事実。\r
AI翻訳であるDEEPLを長く実用しての日本人と遜色ない翻訳の精度の実感

### 自由記述欄

いまはまだ、GitHubに積極的にアクセスできる水準の人や安野たかひろさんへの技術的な好奇心のある人しかここにいないだろうからまともに見えるけど、都民の中には意外とアホで自分勝手で文句ばっかり言いながらも自分では何もしたがらないろくでもない人もけっこういると思うので、そして行政というのはそういうダメダメな人こそ掬い上げる必要のある役割があるので、多角的な視点と不寛容な他者への忍耐が科学技術でどう解決できるかが見物です。`,comments:{totalCount:5},reactions:{totalCount:6},labels:{nodes:[{name:"民主主義"}]},updatedAt:"2024-07-01T14:01:45Z"},{title:"複数の異性と同時交際を指向する性指向マイノリティに対する差別解消に向けた取り組み",number:146,createdAt:"2024-06-24T01:18:24Z",url:"https://github.com/takahiroanno2024/election2024/issues/146",state:"OPEN",body:`## 政策ビジョン\r
\r
<!--\r
該当する政策カテゴリを一つ選んで、[X]のように括弧内にXと入力してください。\r
記入例: [X] 経済\r
-->\r
\r
- [ ] 経済\r
- [ ] 医療・防災\r
- [x] 教育・子育て\r
- [x] 行政\r
- [x] 民主主義\r
\r
## 政策\r
\r
**複数の異性と同時交際を指向する性指向マイノリティ**に対する差別解消\r
\r
### 必要だと思ったきっかけ\r
\r
当事者である知人が、性指向の開示を迫られたり、勝手にアウティングされた経験があり、つらい思いをしているのを間近で見てきました。\r
\r
### なぜ必要か\r
\r
かつて同性愛者は差別されてきた歴史があります。\r
同性愛者が差別を受けることは妥当であると社会的に認識されていた時代もありました。\r
それと比べれば、同性愛者に対する理解に関しては、\r
現在では状況が変化してきていると言えるはずです。\r
\r
ところが、様々な性指向差別の解消に対する理解が進んできた現在においても、\r
**複数の異性と同時交際を指向する性指向マイノリティ**に対する差別だけは\r
現在でも平然と行われています。\r
\r
**複数の異性と同時交際を指向する性指向**を勝手にアウティングするマスコミや\r
そうした差別を放置する政府、自治体。\r
ネット上にも**複数の異性と同時交際を指向する性指向**に対する差別的な言動が\r
溢れています。\r
\r
また、法的にも重婚が禁止されているなど、\r
**複数の異性と同時交際を指向する性指向マイノリティ**に対する理解が不十分な現状があります。\r
（同性愛に関してもいまだに法律で禁止され犯罪とされている国もあることに留意してください）\r
\r
性指向マイノリティ差別解消の観点から、\r
**複数の異性と同時交際を指向する性指向マイノリティ**に対する差別行為の\r
解消に向けた取り組みを推進していただきたいです。\r
\r
また、**複数の異性と同時交際を指向する性指向マイノリティ**に対する社会の理解が進むことは\r
論理的に極めて費用対効果の高い少子化対策の一環となります。\r
\r
### このイシューで議論したいこと\r
\r
**複数の異性と同時交際を指向する性指向マイノリティ**に対する社会の理解が不十分であること\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
あなた自身が、これまで**複数の異性と同時交際を指向する性指向マイノリティ**に対する差別を\r
見て見ぬふりをしてきた経験がある当事者のひとりのはずです。`,comments:{totalCount:9},reactions:{totalCount:4},labels:{nodes:[{name:"教育・子育て"},{name:"民主主義"},{name:"行政"}]},updatedAt:"2024-06-26T02:52:31Z"},{title:"オーバーツーリズム及び外国人の入国者に起因する治安悪化への対策",number:147,createdAt:"2024-06-24T02:02:22Z",url:"https://github.com/takahiroanno2024/election2024/issues/147",state:"OPEN",body:`### 政策ビジョン\r
\r
行政\r
\r
### 政策\r
\r
- 都営施設・都営交通の外国人観光客の料金設定の見直し\r
> - 都の税金で運営されている公共機関の利用料を都在住者（・非在住者）・外国人観光客で分ける\r
- ポイ捨ての罰金徴収\r
- ごみ捨ての有料化\r
- 外国人観光客に対応する人件費を外国人観光客の利用料に転嫁\r
\r
### 必要だと思ったきっかけ\r
\r
都営施設は日々都民が税金を払っていることにより運営ができている事から現在の料金でサービスを提供できている。そのため日々都に税を納めていない者が同じ料金でサービスを受けられる事は不平等と考える。\r
また治安維持・治安悪化対策のための費用捻出を都民が全て被るのは適切ではないと考える。\r
\r
### なぜ必要か\r
\r
オーバーツーリズムによりオペレーションが煩雑化することで主に人件費を含むコスト上昇がみられ、従来料金と従来の報酬設定では本来のサービスレベルの提供が困難になっている。\r
ごみのポイ捨て増加・事件事故の増加・オーバーツーリズムに乗じて入国した者による不法滞在により治安悪化がみられる。\r
これらの問題に対処するためには莫大な費用が必要。\r
特にその対策の対象である外国人観光客の利用料にそれらコスト転嫁を行い、適正な料金を支払ってもらう必要があると考える。\r
\r
### この Issue で議論したいこと\r
\r
_No response_\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
これが京都なのか！？大量のゴミが散乱する「祇園」の惨状に絶句…オーバーツーリズムに困惑する京都市民「観光客の数を規制して」\r
https://news.yahoo.co.jp/articles/3304ef720b1e4979ce58306aa46d19f05b9f7c29\r
\r
条例等の施行以外で効果のあった施策等\r
https://www.env.go.jp/content/000209464.pdf\r
\r
足立区　ポイ捨てが増加しています まちの美化にご協力を!\r
https://mykoho.jp/article/%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%B6%B3%E7%AB%8B%E5%8C%BA/%E3%81%82%E3%81%A0%E3%81%A1%E5%BA%83%E5%A0%B1-2024%E5%B9%B43%E6%9C%8810%E6%97%A5%E5%8F%B7/%E3%83%9D%E3%82%A4%E6%8D%A8%E3%81%A6%E3%81%8C%E5%A2%97%E5%8A%A0%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99-%E3%81%BE%E3%81%A1%E3%81%AE%E7%BE%8E%E5%8C%96%E3%81%AB%E3%81%94%E5%8D%94%E5%8A%9B%E3%82%92/\r
\r
嵐山で活躍「スマートごみ箱」　費用は1カ所200万円以上\r
宮島で訪問税\r
ベネチアで入島税\r
https://www.ktv.jp/news/feature/240507-kyoto/\r
\r
ポイ捨て罰金の事例　chatpgt調べ\r
シンガポール　初回の違反で300ドルから1,000ドルの罰金\r
ニューヨーク　罰金は50ドルから250ドル\r
ロンドン　50ポンドから150ポンド\r
シドニー　80ドルから250ドル\r
ムンバイ　14ドルから始まり、再犯者や特定の区域での違反者には増額\r
トロント　365ドルから始まり、再犯者には増額\r
香港　初回の違反で1,500ドルから5,000ドルの罰金\r
ジョハネスバーグ　罰金は103ドルから始まり、再犯者や特定の区域での違反者には増額\r
アムステルダム　65ユーロから150ユーロ\r
パリ　35ユーロから450ユーロ\r
ブリュッセル　500ユーロ\r
ノースカロライナ　最大で200ドル\r
\r
実際に外国人観光客が罰金を支払った事例\r
https://www.thebigchilli.com/feature-stories/back-on-bangkoks-streets-the-cigarette-police-who-target-foreign-litter-bugs\r
https://aseannow.com/topic/1138756-israeli-tourist-fined-2000-baht-for-littering-in-pattaya-makes-complaint-to-police/#google_vignette\r
\r
外国人料金は存在する観光施設の事例　chatpgt調べ\r
\r
タージマハル\r
万里の長城　\r
ペトラ\r
マチュピチュ\r
抜歯寺\r
ビクトリアフォールズ\r
シーギリヤロック\r
\r
英語が話せる従業員を必ず1人シフトに入れる。その人件費を捻出するためとキャンセルで出た損失を補てんするために料金に差をつけている\r
https://news.ntv.co.jp/category/society/e99b91d8724141e8a9872a17c4384526\r
\r
\r
### 自由記述欄\r
\r
_No response_`,comments:{totalCount:9},reactions:{totalCount:4},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-30T04:11:50Z"},{title:"歩道を走る自転車がほぼなくなるように道路・歩道を整備してほしい",number:149,createdAt:"2024-06-24T03:29:08Z",url:"https://github.com/takahiroanno2024/election2024/issues/149",state:"OPEN",body:`### 政策ビジョン

行政

### 政策

自転車が歩行を走ることのないよう、道路・歩道を整備してほしいです。

### 必要だと思ったきっかけ

歩道を歩いていると、歩道を自転車で走る人がとても多いため。

### なぜ必要か

- 歩道を走る自転車が多すぎて、歩道者が安全に歩行ができないため\r
- 自転車が歩道を走る理由を考えた結果、下記の理由が考えられるため\r
  - 道路の自転車走行するスペースが狭い (ので、自転車側は恐怖を感じる)\r
  - そもそも自転車が走行できるスペースが、車道にない\r


### この Issue で議論したいこと

_No response_

### 調べたこと（裏付けとなる事実・ファクト）

- 狭い歩道を走る自転車が多い\r
https://www.asahi.com/articles/ASS3P4FWXS2WULLI002.html

### 自由記述欄

関連 issue? : #101, #119`,comments:{totalCount:6},reactions:{totalCount:10},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-06-29T12:31:37Z"},{title:"コンビニなど、喫煙所以外で屯する人をなくしてほしい",number:150,createdAt:"2024-06-24T04:17:06Z",url:"https://github.com/takahiroanno2024/election2024/issues/150",state:"OPEN",body:`### 政策ビジョン\r
\r
経済\r
\r
### 政策\r
\r
(灰皿スタンドがない) コンビニの周りを喫煙所代わりにしている人がいるため、それに対しての対策をしてほしい。\r
\r
「何が問題か」は「なぜ必要か」に記載をします。\r
\r
### 必要だと思ったきっかけ\r
\r
- コンビニの周りを喫煙所代わりにされて、他の人の迷惑になっている\r
- 喫煙だけでなく、喫煙 + 缶飲料などの飲み物をそこで飲んでいる\r
  - (※ 飲んでいること自体が悪いのではなく、飲んだゴミをそのままにしていくことが問題)\r
- 喫煙した後のゴミをそのままにしているため、汚い。\r
- 上記に付随して、誰も掃除をしなかった場合、カラスなどの鳥がやってくる原因となる\r
\r
### なぜ必要か\r
\r
- 「必要だと思ったきっかけ」にも記載しましたが、ゴミをそのままにしていくため(掃除している人はほぼ見たことがない)、汚い。\r
- おそらく、コンビニの店員が気づいた時点で掃除をしていると思うが、そもそもコンビニの店員が掃除をするのが間違っていることだと思う (許可されていない場所で吸っているため)\r
\r
### この Issue で議論したいこと\r
\r
- 喫煙所があれば解決するのか？\r
- 喫煙所が増えれば解決するのか？\r
- 灰皿スタンドがあれば解決するのか？\r
\r
**※ このチケットでは「喫煙者を排除したい」意図はありません。**\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
記事ではなくて申し訳ありませんが、自分自身が実際に住んでいる場所の最寄りのコンビニがこのような状態です。\r
\r
\r
### 自由記述欄\r
\r
関連 issue がないか調べましたが、ぱっと見では見つからず。\r
もし見つかった場合、順次追加していきます。`,comments:{totalCount:0},reactions:{totalCount:2},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-24T05:12:53Z"},{title:"政策の吸い上げを行うこのプラットフォームオリジナルの戦略アルゴリズムの検討",number:153,createdAt:"2024-06-24T07:46:46Z",url:"https://github.com/takahiroanno2024/election2024/issues/153",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

都政の政策を検討するにあたり、今回の方針ではおそらく、都民からの意見を吸い上げることで最も良い政策を見つけていこうという考えかと思います。\r
しかしながら、ただ吸い上げるだけでは他候補者のような包括的かつ構造化された政策パッケージを打ち出すことができないように思われます。\r
\r
具体的には、支持層とスタッフに高学歴、テック、コンサル層が多いからか、その他の属性の人のニーズや価値観を吸えていないことが問題だと思います。\r
\r
特に低所得層や現業職などへの視点が足りない可能性があり、SNS上での議論もその点に集中しています。\r
特に、他の候補者の差分を考えて、より吟味した内容にできると良いと感じます。\r
\r
おそらく、安野さんとしては、テックタッチの領域でLINEなどを使うとして情報を吸い上げようと考えているかもしれませんが、これだけでは構造化が不十分で、このデータのみで良い政策が出せるかわかりません。\r
ここについて十分な論拠をもとに政策が作れるということを教えてください。\r
\r
他の政党では、地域の方から直接ヒアリングを行い、吸い上げられた生の声を反映しています。\r
また、その吸い上げをしている本人がフタッフとしても関わっていることで、この構造化、包括的な議論が実現できていると感じます。\r
これを代替する、または、それを超える仕組みが今回実装されているのであれば教えてください。\r
\r
他の候補者のマニフェストも参考にしながら練り上げられるとさらに良いと思います。\r
\r
【参考】\r
小池百合子さんマニフェスト\r
https://www.yuriko.or.jp/policy\r
\r
蓮舫さんマニフェスト\r
https://renho.jp/

### 必要だと思ったきっかけ

Xの反応を見て

### なぜ必要か

現状では実現可能性が低く、政策を任せられないため

### この Issue で議論したいこと

安野さんの政策がどのような属性の人で作られ、それによる抜け落ちている部分がないか知りたいです。

### 調べたこと（裏付けとなる事実・ファクト）

Xや他候補者のサイト、専門家へのヒアリング

### 自由記述欄

誰も取り残さない政策であることを証明してください`,comments:{totalCount:7},reactions:{totalCount:5},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-07-04T14:55:22Z"},{title:"機能的識字率の計測および改善のためのアクション",number:155,createdAt:"2024-06-24T08:40:05Z",url:"https://github.com/takahiroanno2024/election2024/issues/155",state:"OPEN",body:`### 政策ビジョン\r
\r
教育・子育て\r
\r
### 政策\r
\r
- 機能的識字能力を計測するための試験に対する公的補助の実施\r
  - 公立の中学校、高校が団体で試験を受ける際の試験費用の全額補助\r
  - 雇用保険受給者に対する試験費用の全額補助、ハローワークやその近辺での試験実施\r
  - 企業が団体受験をする際の試験費用の一部補助\r
  - 試験を実施する予備校や事業者に対する補助\r
\r
- 機能的識字能力の改善に対する公的補助の実施\r
  - 公立の中学校、高校において、機能的識字能力を改善するためのアプリケーションの無償提供\r
  - ハローワークでの職業訓練における機能的識字能力を改善のための講座の開設\r
  - 企業における機能的識字能力を改善するためのリスキリング施策に対する一部補助\r
  - 学校に提供する機能的識字能力を改善するためのアプリケーションを開発するための事業者を公募\r
\r
- 試験結果に基づく、機能的識字能力のデータ公表、オープンデータ化\r
  - 学校別の機能的識字能力を公表し、学校間の競争を促す\r
  - 機能的識字能力と学力（国語・数学・理科・社会）の関係性を明らかにする\r
  - 企業の団体受験のデータを用いて、機能的識字能力と職種や収入との関連を明らかにし、教育の方向性の議論に使われることを期待する\r
 \r
\r
### 必要だと思ったきっかけ\r
\r
新井紀子先生の「AI vs. 教科書が読めない子供たち」では、機能的識字能力が低い子供たちに「文章が読めないから教科書が読めない、教科書が読めないから学力が上がらない」という問題が生じていることが明らかになっています。\r
\r
OECD国際成人力調査（PIAAC:ピアック）では、日本人の成人の27%はLevel2 以下であり、小学校高学年で出題されるような読解問題が回答できない、という問題を抱えています。\r
\r
\r
\r
### なぜ必要か\r
\r
識字とは、文字の読み書きができることをいいます。これは単に「文字」が読み書きできれば良いのであって、文章の意味や内容を理解し、指示に従って行動すること（機能的識字能力）とは別です。\r
\r
日本の識字率は極めて高く、99%超であるといわれています。ほぼ100%であるため、現在は識字率の計測は日本では行われていません。\r
\r
識字率の計測が行われていないため、結果的に機能的識字能力の計測が行われておらず、機能的識字能力の重要性が広まっていないと考えています。\r
\r
また、識字率の計測が行われていないため、ディスレクシアや、外国人、移民、虐待などによって学校に通えなかった人など、識字能力に問題を抱える人に対する支援がおろそかになっている側面もあります。\r
\r
機能的識字能力は文章をはデジタル社会で生きるために必須の能力です。社会や行政がデジタル化していくにあたり、人間の側に求められる能力水準も上がってきています。そのため、トップを伸ばす施策だけでなく、全体を底上げる施策も必要になってきます。全体の能力を確実に伸ばし、社会全体の生産性を改善するための指標として、機能的識字能力があると考えています。\r
\r
機能的識字能力の向上により、企業での労働災害の減少、生産性の底上げや、クレーマーやカスハラの減少、陰謀論に対する耐性などにもつながり、社会全体の利益になると考えています。\r
\r
### この Issue で議論したいこと\r
\r
- 機能的識字能力の計測と改善に対する公的補助\r
- 機能的識字能力の計測にはどのような方法が適切か？\r
  - 新井紀子先生がやっているRST以外にも何かあるか？\r
- どのようにしたら試験や計測のコストを下げられるか？\r
- 改善にはどのようなことが必要か？\r
  - 改善をアプリケーション化できるか？\r
- **高い機能的識字能力が要らない雇用** をどのようにして創出するのか\r
\r
- 現状の「機能的識字能力を測るための試験」としては以下の二つを想定している\r
  - OECD国際成人力調査（PIAAC:ピアック）\r
    - デモは以下から受けられます\r
    - https://www.oecd.org/skills/piaac/onlineassessment/demo/\r
  - リーディングスキルテスト RST\r
    - https://www.yozemi.ac.jp/rst/\r
- これらのほかに良い試験がないか、またもっと良い試験を開発できないか？といった議論を行いたい。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
OECD国際成人力調査（PIAAC:ピアック）では、日本人の成人の27%はLevel2 以下です。\r
https://www.mext.go.jp/b_menu/toukei/data/Others/20220712-mxt_kouhou02-1.pdf\r
![image](https://github.com/takahiroanno2024/election2024/assets/962298/7db9bb15-0d16-4846-aa94-be214c5b2cdd)\r
\r
ちなみにLevel 3では次のような問題が出題され、小学校高学年レベルの課題になっています。\r
https://www.mext.go.jp/b_menu/toukei/data/Others/__icsFiles/afieldfile/2013/10/16/1287165_2.pdf\r
![image](https://github.com/takahiroanno2024/election2024/assets/962298/3a00b987-0229-4251-93ba-7a479f8c4f9d)\r
\r
https://president.jp/articles/-/63846?page=3 より引用\r
![image](https://president.ismcdn.jp/mwimgs/2/1/710wm/img_21ae290484063e378e4a1328b5d344dd801770.jpg?rd=202406201255)\r
\r
https://www.s4e.jp/about-rst\r
https://ja.wikipedia.org/wiki/%E6%A9%9F%E8%83%BD%E7%9A%84%E9%9D%9E%E8%AD%98%E5%AD%97\r
\r
https://toyokeizai.net/articles/-/256321\r
\r
\r
\r
### 自由記述欄\r
\r
_No response_`,comments:{totalCount:8},reactions:{totalCount:3},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-25T17:20:04Z"},{title:"例えば都の企業発OSSへの補助金制度などによるデジタル化の促進",number:157,createdAt:"2024-06-24T10:59:38Z",url:"https://github.com/takahiroanno2024/election2024/issues/157",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

国内企業のデジタル化を促進するため、例えば一定以上の popularityを集めた都内企業のOSSに補助金を出す。

### 必要だと思ったきっかけ

GitHubを活用した政策は非常に面白いと思うが、悲しいことに国内で GitHubを使用しているエンジニアは少ない。その背景には、基礎的なデジタル（ソフトウェア）技術に対する知識の不足と、それに起因するデジタル化の遅れがあると考える。\r
gitを必要不可欠なツールとして活用しているエンジニアにとっては驚くべきことかもしれないが、大企業にすらgitを触ったことがない現役エンジニアが多くいるという現状が存在する。このように、そもそもデジタル化の促進のための教養が足りていない。\r
このような現状下では、デジタル化を基軸とした政策を立てても都民にどれだけの影響を与えられるか、疑問に持ってしまう。

### なぜ必要か

上記問題を解決するためには、例えばOSSなどに対して企業が興味を持つようテコ入れする必要があると考える。\r
OSSは広く一般に公開されるため、様々な開発者のフィードバックを通じた国内全体の開発力向上など、ポジティブフィードバックが得られるのではないかと期待する。

### この Issue で議論したいこと

課題はデジタル化に対する教養の不足である。OSS促進意外にも、この課題の解決に向けた様々な政策について議論ができると良いと思う。

### 調べたこと（裏付けとなる事実・ファクト）

- 日本の GitHubアカウント数は人口に対して約2%であり、この比率は米国の半分以下である。\r
  - [ＧｉｔＨｕｂとは？…「オープンソース」文化に支えられた開発環境](https://www.yomiuri.co.jp/life/digilife/column/20231127-OYT1T50164/)\r
- 各国の人口に対するOSS開発者数で、日本はtop50ランク外\r
  - [The Geography of Open Source Software: Evidence from GitHub](https://www.researchgate.net/figure/Countries-ranked-by-number-of-OSS-developers-per-capita-top-50_tbl1_357865046)

### 自由記述欄

_No response_`,comments:{totalCount:3},reactions:{totalCount:3},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-07-01T10:51:11Z"},{title:"経済向上のための企業誘致や経済政策",number:158,createdAt:"2024-06-24T11:15:12Z",url:"https://github.com/takahiroanno2024/election2024/issues/158",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

製造業周辺のグローバルを狙える領域に関する政策立案を行なってほしい

### 必要だと思ったきっかけ

ソフトウェア会社の利益率は高いが売上高がそこまで伸びず、高所得者の所得が上がり格差が開くだけではないかと気づいた時からです

### なぜ必要か

日本が世界で叩けるための領域に特化した政策が必要だと感じたため

### この Issue で議論したいこと

どの領域の企業が優先度高く必要か

### 調べたこと（裏付けとなる事実・ファクト）

1) 企業のランキング　20-22\r
時価総額で比較するのはなぜですか。経済の活性化を考えるのであれば雇用を生み出せる産業の方が検討する価値がある側面もあるかと思います。それであれば純粋な売上での比較が良いのではないでしょうか。\r
既存産業への発展を考えるのであれば尚更、外部への発注など相互関係が生まれる指標で評価する方が望ましいのではないでしょうか。\r
\r
[https://docs.google.com/presentation/d/1kE_W3NpvIODglaN1OrKKxmq-rNMu69Vnh7M9hhSpFwU/](https://t.co/unAbJuLrRw)

### 自由記述欄

時価総額は関係ない気もします\r
世界に対するプレゼンスを上げたいという文脈ならわかりますが、その点への記載は見られませんでした。`,comments:{totalCount:4},reactions:{totalCount:1},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-07-02T04:58:30Z"},{title:"企業が新しい産業に資金投入できるための仕組みの構築",number:159,createdAt:"2024-06-24T11:19:11Z",url:"https://github.com/takahiroanno2024/election2024/issues/159",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

企業に蓄えられているお金が社会に回る仕組み

### 必要だと思ったきっかけ

アメリカや中国のスタートアップや主力企業の在り方と、日本でどこに資金が貯まっているかを考えた時、必要だと思いました。\r
日本の強みを活かした制度が必要だと思います。

### なぜ必要か

他国と比べると、お金が回ってないところがあると感じるため

### この Issue で議論したいこと

資金が回る仕組みのアイデア

### 調べたこと（裏付けとなる事実・ファクト）

2) 産業を育てる 25\r
この文脈であれば企業のお金をうまく回す仕組みが必要だと考えます。その点に関して何か施策はありますか。\r
\r
https://x.com/takahiroanno/status/1803666653739421882

### 自由記述欄

_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-24T11:19:22Z"},{title:"マンション型メンズエステ店の規制",number:160,createdAt:"2024-06-24T12:17:35Z",url:"https://github.com/takahiroanno2024/election2024/issues/160",state:"OPEN",body:`### 政策ビジョン

行政

### 政策

マンション型メンズエステ店を規制することによって、居住用マンションにおいて性風俗営業やそれに準ずる営業がされることを抑止する

### 必要だと思ったきっかけ

昨今、マンションの一室を使うなどしたメンズエステ店が増えています。このような店舗では健全なエステやマッサージを装い、実態は性的なサービスを行っていたり、そうでないにせよ女性が男性向けに性的な行為を誘発するようなマッサージを提供するようなサービスが行われています。メンズエステ店に利用されるマンションの一室は、メンズエステ店の経営者が入居者を装い、住居用として契約することによって用意されていることがほとんどです（消費税の脱税と捉えることもできます）。実際、私が所有している区分マンションでも、そのようなメンズエステ店の経営者が悪意を持って私と契約し、メンズエステ店の営業が行われていました。

### なぜ必要か

現行の風営法では、性的なサービスが行われていれば摘発対象かと思いますが、そのように認められなければ摘発対象ではありません。しかしながら、メンズエステ店の営業は性的な行為を十分に彷彿させるため、決して民事の問題としてだけ済まされるべき問題ではないと思います。もし、マンションでメンズエステ店の営業が行われた場合、次のような不利益があります。\r
\r
### 住人の立場\r
- 騒音などの被害に悩まされる可能性がある\r
- 心理的観点から不愉快\r
- 営業は深夜まで行われる場合は不眠などの症状にも悩まされる可能性がある\r
- 子供の住人には特に悪い影響を与える\r
- 不特定多数がマンションに入るため、マンションの安全性が損なわれる\r
\r
### オーナーの立場\r
- 物件の資産価値低下\r
- メンズエステ店を退去させるには弁護士費用がかかる

### この Issue で議論したいこと

この規制が行うことによる他の利益があるかどうか\r
この規制を行うことによる不利益があるかどうか

### 調べたこと（裏付けとなる事実・ファクト）

### 関連参考ページ\r
- https://www.rakumachi.jp/news/column/296617\r
- https://www.youtube.com/watch?v=pg6YS5vw51Y

### 自由記述欄

_No response_`,comments:{totalCount:0},reactions:{totalCount:2},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-06-24T12:17:48Z"},{title:"大学の単位交換制度",number:161,createdAt:"2024-06-24T16:47:37Z",url:"https://github.com/takahiroanno2024/election2024/issues/161",state:"OPEN",body:`### 政策ビジョン

教育・子育て

### 政策

トーダイは大学院だけの大学になってもらって、\r
入試はたとえば残りの「旧帝大＋東京工業大学＋東京医科歯科大学」で一学群、\r
「早稲田＋慶応＋上智」で一学群、\r
というふうに学群単位で学生の入学を許可して、\r
しかも単位を交換しながら学生が学群のなかで自由に移動できるようにすればよい。

### 必要だと思ったきっかけ

学歴がいい人が頭もいいとは限らず、\r
(政治を見ていればわかる　\r
EX 国会議事録システムでの議事録。\r
小学生のクソガキが「小便漏らしてないもん！」\r
と言い訳しているのとほぼ変わらない\r
裏金の言い逃れが多く、\r
海外から『日本って幼稚園児が国を回しているの？』と言われかねないので)\r
大学間で単位交換性にしてMIXさせてみると\r
叡智の化学反応が起きそうで面白そうだから。

### なぜ必要か

すごく頭の悪い「同学歴支配族」が出来て、\r
世界でいちばん無責任で無能なので有名な\r
マスメディアと\r
「北朝鮮並み」と陰口を利かれる政府に\r
国全体が支配されるに至った日本という国には\r
どこかしらマンガ的なところがあると思う。\r
と思ったから

### この Issue で議論したいこと

どの単位を交換するか

### 調べたこと（裏付けとなる事実・ファクト）

https://kokkai.ndl.go.jp/#/detail?minId=121305261X01720240422&spkNum=127&current=1\r
岸田首相の言い逃れです\r
まるで『小便漏らしてないもん！』\r
とママに怒られて言い訳する小学生みたいですね（笑）（笑）

### 自由記述欄

_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-24T16:47:52Z"},{title:"図書館に会話（軽食）OKの作業スペースを設ける",number:164,createdAt:"2024-06-25T03:34:10Z",url:"https://github.com/takahiroanno2024/election2024/issues/164",state:"OPEN",body:`### 政策ビジョン\r
\r
行政\r
\r
### 政策\r
\r
プライオリティは低めですが、\r
図書館に会話・飲食OKの共同作業スペースを設ける。\r
\r
### 必要だと思ったきっかけ\r
\r
- Xでスターバックスなどのカフェでコーヒー一杯を頼み、受験勉強などのために一日中いるのはどうなのかという論争を見たため。\r
- 受験勉強・リモートワークをしていた際に作業ができるスペースの選択肢が少なかったため。\r
- 一人用のデスクは多いが、2人以上での作業を会話しながらするスペース（児童コーナーを除く）がある図書館は少ない。\r
- そもそも勉強・持ち込み禁止の図書館が多々あるため\r
\r
### なぜ必要か\r
\r
- リモートワークなど増えたため。しかし、自分が受験勉強をしていた際にも、金銭的に中高校生でも継続的に使えるアフォーダブルなワークスペースは限られてると感じたため。図書館もあるが、作業しながらの会話（リモート会議や友人との勉強など）ができるところはやや少ない。こうしたスペースを設けるだけなら、既存の図書館を利用でき、そこまでコストはかからないと考える。\r
\r
### この Issue で議論したいこと\r
\r
_No response_\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
https://notai.jp/tokyo-study-place/\r
https://www.spacemarket.com/magazine/know-how/jisyushitsu/\r
\r
無料な場所はあるが、基本静かなことが前提な場所がメインである。\r
\r
持ち込みを禁止している区　https://chiyoku.com/blog/tokyo-23ku-library-self-study/\r
\r
### 自由記述欄\r
\r
_No response_`,comments:{totalCount:7},reactions:{totalCount:4},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-06-30T04:56:15Z"},{title:"社会的弱者でも明るく前向きに生きていける",number:168,createdAt:"2024-06-25T06:27:33Z",url:"https://github.com/takahiroanno2024/election2024/issues/168",state:"OPEN",body:`### 政策ビジョン\r
\r
民主主義\r
\r
### 政策\r
\r
精神疾患、高齢者、ワーキングプア―、弱者男性。。\r
外の世界で踏みにじられて内側のココロに自信を失ってしまう。かといって市役所に行って相談したり福祉の制度を利用するのはみじめで二の足をふむ。\r
生きやすくなるために利用できる制度、医療、キャリアプラン等々は国や自治体、NPOにバラバラの形で散らばって分かりづらい。それらをプッシュ型で簡単に入手、利用できる作りたい。\r
\r
### 必要だと思ったきっかけ\r
\r
日本では昔から家庭の問題は家庭内で処理する、相談するのは恥だという文化（特に男性、高齢者）がある。近年では自己責任論から引きこもりや虐待、ゴミ屋敷に繋がっている。\r
更に相談したくても、例えば鬱になったら障害年金を請求するには医療機関と年金事務所、福祉サービスは市役所、家計簿を付けられない状況になったら国の困窮者支援制度、復職するにはリワーク等々現状の仕組みがバラバラの場所で管理されていて何をどう使ったらいいのか分からない。\r
福祉を恥と思う風土は根強く、取り返しのつかない事態になってから周囲に伝わり、親戚一同巻き込まれる。また妻が利用したくても夫のプライドから利用が出来ないケースも見受けられる。だから同世帯でも世帯員別に利用できるようにしたい。\r
\r
### なぜ必要か\r
\r
東京は単身世帯、高齢者世帯が増え、益々孤立していく。その時誰に何を相談したらいいのか分からない。人により必要な福祉は十人十色。煮詰まって独居人孤独死になり住まいはゴミ屋敷となったら衛生、治安の問題、何より心身の健康を損なわれる。そうならない為のセーフティネットを構築として、既存の生活保護までいかずとも、その手前で留まりそこそこ楽しく前向きな将来を考えられるようにしたい。\r
\r
### この Issue で議論したいこと\r
\r
福祉は一人ひとり違うので、オーダーメイドする必要があるが、そもそも窓口まで行けない人がいる。\r
生活困窮者支援制度等があるにもかかわらず、利用に後ろ向きな人が前向きになるためにはどうしたらいいのか。\r
世帯が同じでも話が通じない機能不全家族にケースワーカーが介入しやすくするにはどうすればいいのか。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
いくつか使える制度があっても実際には該当者のプライドが邪魔をしてアクセスしないケースが多々ある　https://www.gov-online.go.jp/useful/article/201504/2.html　https://spaceshipearth.jp/needy-person/#:~:text=%E7%94%9F%E6%B4%BB%E5%9B%B0%E7%AA%AE%E8%80%85%E8%87%AA%E7%AB%8B%E6%94%AF%E6%8F%B4%E6%B3%95%EF%BC%88%E4%BB%A5%E4%B8%8B%E3%80%81%E8%87%AA%E7%AB%8B%E6%94%AF%E6%8F%B4%E6%B3%95,%E3%81%AE%E3%81%82%E3%82%8B%E8%80%85%E3%82%92%E3%81%84%E3%81%86%E3%80%82\r
\r
### 自由記述欄\r
\r
_No response_`,comments:{totalCount:7},reactions:{totalCount:3},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-07-02T05:18:43Z"},{title:"モビリティ決済システムの統合",number:169,createdAt:"2024-06-25T07:39:24Z",url:"https://github.com/takahiroanno2024/election2024/issues/169",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

3) モビリティ26\r
モビリティの在り方を考えるのであればモビリティに関する決済システムの統一もあり得るのでしょうか。

### 必要だと思ったきっかけ

決済システム導入ができずQRコード導入やデータ連携ができない状況があると聞き、行政側で統一できないかと思いました

### なぜ必要か

マニフェストにあるモビリティの効率化を実現するなら最も重要なデータになってくると感じたため

### この Issue で議論したいこと

モビリティの効率化に必要な要素の検討

### 調べたこと（裏付けとなる事実・ファクト）

https://x.com/takahiroanno/status/1803666653739421882

### 自由記述欄

東京都でも日本経済を支える製造業に貢献できる取り組みをすることはとても価値が高いと思います。\r
東南アジア諸外国でも都市化を進めており、スマートシティなどの事業展開につながっていくといいなと思いました。`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-25T07:39:36Z"},{title:"孤独死問題解決に向けた巡回システムの構築",number:170,createdAt:"2024-06-25T07:42:45Z",url:"https://github.com/takahiroanno2024/election2024/issues/170",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

4) 孤独死　36\r
細かい話ですが高齢者増加の問題について、孤独死を防ぐための巡回問題への対応は何か検討されるのでしょうか。

### 必要だと思ったきっかけ

東京都の市役所勤務の友人が複数名かなり困っていたので

### なぜ必要か

孤独死の問題は厚生労働省と東京都が歩幅を合わせる必要があり、情報連携が特に必要だと感じたため

### この Issue で議論したいこと

高齢化に伴い、社会として市民生活とどうつながり合っていくか\r
東京都だからこそ、隣人との関係が希薄化しやすい部分を仕組みとしてどのように補填していくのか

### 調べたこと（裏付けとなる事実・ファクト）

安野さんマニフェスト詳細版\r
https://x.com/takahiroanno/status/1803666653739421882

### 自由記述欄

孤独や寂しさ、不安という感情は社会全体の不安感へとつながる大きな問題だと思います。\r
独身率も上昇していることですし、どの世代にも関係してくる課題なのではないでしょうか`,comments:{totalCount:13},reactions:{totalCount:4},labels:{nodes:[{name:"医療・防災"}]},updatedAt:"2024-06-30T01:25:59Z"},{title:"データファブリック/データメッシュ技術を活用した情報公開システムの構築",number:171,createdAt:"2024-06-25T08:00:39Z",url:"https://github.com/takahiroanno2024/election2024/issues/171",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

使われる仕組みのある情報公開システムを構築してください。\r
データファブリック/データメッシュ技術を活用すると市民それぞれがデータを所有することができるため、行政でもデータ管理がしやすくならないかな、などと考えています。\r
まだ詳細まで詰めれていませんので、知見がある方実現方法への助言があればお願いします。\r
\r
下記、詳細版マニフェスト各ページごとのコメントです。\r
\r
8) 情報公開　62,65\r
情報公開は賛成です。一方で、これらの情報を知る能力がある人は一部にとどまると感じます。わかりやすくするためにここで記載のある関係ある団体とのデータ連携はどのように進めていくのでしょうか。なにか都としてデータフォーマットを定めるのでしょうか。その場合のルール変更に伴う民間企業の業務量は増加しますか。\r
\r
9) ブロードリスニング　82\r
参画したいですが、表現の自由と誹謗中傷のバランスはどのように取っていくのでしょうか。すべてをそのまま公開することは必ずしも良い民意の形成に至るとは限らないと感じます。各段階での参加者による意見の偏りをどのように調整していくのか気になっています。\r
\r
10) 民意の集め方　86\r
Githubだけでなく、あらゆる層が使用できるツールを網羅的に用いることで、格差が生まれない仕組みづくりでありそうだと理解しました。\r
もしできれば、この3つの集め方で集まる都民の人数をそれぞれ知りたいです。また、そのばらつきをどのように仕組みとして是正していくのか教えてください。\r
\r
11) 記載がない項目\r
・セキュリティ\r
情報公開に伴い、セキュリティ面での対策はどのように行いますか\r
・使われる仕組みづくり\r
ただ作っただけではなく使われるものとするために63のような行政サービス利用をきっかけとするのでしょうか。相互関係とそれぞれ想定される利用率とその根拠が知りたいです。

### 必要だと思ったきっかけ

犯罪発生時に証拠がないまま泣き寝入りになるようなことがない社会にしたいと感じているため\r
もちろん監視社会は良くないし自分も嫌なので、データメッシュのような技術で許諾の仕組みをうまく作ることが大切かと思ってます

### なぜ必要か

立場が弱い人にとって、データは財産です。\r
等しく与えられたデータという財産を等しく分配し活用できる仕組みがあることは、時間と情報量、労働などの観点から重要な取り組みになると感じています。\r
活用できてしまうと貧困ビジネスのようにうつってしまう難しい課題であるからこそ、これは民間企業ではなく行政が介入し、社会を保つ必要があると感じています

### この Issue で議論したいこと

情報公開のあり方について

### 調べたこと（裏付けとなる事実・ファクト）

安野さんマニフェスト詳細版\r
https://x.com/takahiroanno/status/1803666653739421882

### 自由記述欄

AI関連の企業が集まってきている、かつ、日本の強いインフラ事業を東京都から構築していけるチャンスだと感じています。\r
AIを活用するためにはデータが重要です。世界に誇る情報インフラ産業を東京都からつくっていきたいです。`,comments:{totalCount:2},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-25T16:13:15Z"},{title:"財源の確保",number:172,createdAt:"2024-06-25T08:14:10Z",url:"https://github.com/takahiroanno2024/election2024/issues/172",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

各種マニフェストを実行可能なものにする為には、その**財源**をどう確保するかを常にセットで考えなければならない。財源がなければ、どんなに素晴らしいマニフェストであったとしても絵に描いた餅である。\r
\r
私からは、以下の政策による財源の確保を提案する。しかし、もっと多くのアイデアがあるはずであり、その議論をここですることは有用だと考える。また、東京都は無駄な歳出のカットも今後は必要になってくるだろう。\r
\r
・[都債](https://www.zaimu.metro.tokyo.lg.jp/bond)の特定目的債券の起債による財源確保\r
・競馬、競輪、競艇（ボートレース）、オートレースなどの公営ギャンブルの拡大による収益拡大\r
・[宝くじ](https://www.zaimu.metro.tokyo.lg.jp/takarakuji)、「スポーツ振興くじ」や「スポーツ宝くじ」の収益拡大\r
・[公有地の売却](https://www.zaimu.metro.tokyo.lg.jp/kouyu)による収益拡大\r
・[東京都への寄付金](https://www.zaimu.metro.tokyo.lg.jp/zaisei/hurusatokihukin)の拡大政策

### 必要だと思ったきっかけ

_No response_

### なぜ必要か

[TOKYO決算見える化ボード](https://www.zaimu.metro.tokyo.lg.jp/zaisei/zaisei/dashboard/redirect02/)によれば、2022年度の東京都の歳入は9兆7550億円、歳出は9兆1883億円である。ほとんど追加の行政拡大の余地がない。従って多くの新しいマニフェストの実行には財源の拡大や行政の効率化による無駄な支出のカットが必要不可欠である。

### この Issue で議論したいこと

安野氏が提案する様々なマニフェストを実行可能なものにする為に、財源をどう確保するか？

### 調べたこと（裏付けとなる事実・ファクト）

・財務局[財政情報](https://www.zaimu.metro.tokyo.lg.jp/zaisei)\r
・[令和６年度予算概要](https://www.zaimu.metro.tokyo.lg.jp/zaisei/yosan/r6/6yosangaiyounituite/)\r
・財務局[宝くじ情報](https://www.zaimu.metro.tokyo.lg.jp/takarakuji)\r
・[公有地情報](https://www.zaimu.metro.tokyo.lg.jp/kouyu)

### 自由記述欄

_No response_`,comments:{totalCount:2},reactions:{totalCount:7},labels:{nodes:[{name:"duplicated"},{name:"経済"}]},updatedAt:"2024-07-03T04:15:12Z"},{title:"災害対策における民間企業との協力",number:173,createdAt:"2024-06-25T08:35:51Z",url:"https://github.com/takahiroanno2024/election2024/issues/173",state:"OPEN",body:`### 政策ビジョン\r
\r
医療・防災\r
\r
### 政策\r
\r
* 物資の提供が可能な店舗の情報提供\r
* 病院の活動状況の提供\r
* 民間企業の災害支援に対する報酬提供\r
    * 備蓄等への補助金\r
    * 実際に提供した物資への対価の支払い\r
* 携帯基地局被災時の早期復旧（衛星通信を利用した、移動式基地局の暫定設置など）\r
* 物流業者への支援要請～受託のシステム化\r
\r
### 必要だと思ったきっかけ\r
\r
能登半島地震でも、ヤマザキ製パン様など、民間企業が支援物資の提供等を行っていました。スーパー、コンビニ、ドラッグストア、ガソリンスタンド、通信キャリア等、我々の生活基盤に不可欠な企業とも、うまく連携できる仕組みづくりが必要と思いました。\r
\r
### なぜ必要か\r
\r
* 自治体、住民だけで無く、民間企業を含めた、より実用的な災害対応システムを構築するため。\r
* 被災者に有益な情報をまとめて発信する仕組みづくり。\r
\r
### この Issue で議論したいこと\r
\r
民間企業にお勤めの方が、発災時に「うちの会社は、こんな災対を準備してますよ」がありましたら、情報共有をお願いします。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
スーパーでの勤務経験があります。\r
* 物流センターで災害時に無償提供するための、ミネラルウォーターを大量に備蓄しています。\r
* 発災時に、各店舗の在庫からも、商品を提供できます。\r
\r
### 自由記述欄\r
\r
_No response_`,comments:{totalCount:3},reactions:{totalCount:1},labels:{nodes:[{name:"医療・防災"}]},updatedAt:"2024-07-02T05:31:40Z"},{title:"週刊誌のストーカー同然の取材行為の規制",number:175,createdAt:"2024-06-25T14:04:13Z",url:"https://github.com/takahiroanno2024/election2024/issues/175",state:"OPEN",body:`### 政策ビジョン

行政

### 政策

都内で隠し撮りされた写真の出版を規制する

### 必要だと思ったきっかけ

本日2024/6/25の[有吉弘行氏のツイート](https://x.com/ariyoshihiroiki/status/1805574962440454583)\r
\r
> 盗撮をして。\r
一般人の写真を載せたり\r
生後数ヶ月の子供の写真に\r
未成年の犯罪者みたいにモザイクかけてまで\r
掲載。まあイヤでしょ。\r
週刊誌の人って家族いないんですね。スゴっ\r
これ訴えると倍返しなんですよね。怖っ！\r
\r
もちろん本件のみならず、以前からずっと思っていましたが、主に週刊誌による有名人への隠し撮り・ストーカー行為が状態化し、それを（行動の善悪関係なしに）出版されている現状を、かなり悪質であると考えています。\r
\r
出版を禁止することで、このような行為のインセンティブをなくすべきではないでしょうか？

### なぜ必要か

_No response_

### この Issue で議論したいこと

- 有名人は「有名税」を受け入れるべきか\r
- 有名人に対する週刊誌のストーカー行為をなくす・軽減するには

### 調べたこと（裏付けとなる事実・ファクト）

https://twitter.com/ariyoshihiroiki/status/1805574962440454583

### 自由記述欄

_No response_`,comments:{totalCount:3},reactions:{totalCount:2},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-07-01T22:39:46Z"},{title:"都内中小企業・製造業を対象とした具体的なマニフェスト",number:176,createdAt:"2024-06-25T14:36:51Z",url:"https://github.com/takahiroanno2024/election2024/issues/176",state:"OPEN",body:`## 政策ビジョン\r
\r
- [x] 経済\r
- [ ] 医療・防災\r
- [ ] 教育・子育て\r
- [ ] 行政\r
- [ ] 民主主義\r
\r
## 政策\r
\r
「中小企業へのQMS支援」を議題として提案します。\r
\r
[No.41](https://github.com/takahiroanno2024/election2024/issues/41)から分岐しました。\r
現行の「経済」カテゴリの政策では施策の対象とならない都内中小企業・製造業を対象とした具体的なマニフェストを議論すべきだと考えます。\r
\r
## 必要だと思ったきっかけ\r
\r
若い労働者層の絶対数が減って課題になるのは、中小企業の倒産です。\r
これを適切に支援できれば、企業誘致と同様に抱えている社員の家族の数だけ良い影響が期待できます。\r
労働者の数が減ると自社でできない部分を外部委託しますが、委託先が海外の場合、委託した業務分野の経験やノウハウの蓄積ができずにその企業の強みが維持できなくなり、製品の品質に問題が起きます。\r
日本の製品品質の基準を定める法律が海外に比べ非常に緩く、日本向けに製造した場合、これを輸出しようとすると仕向け先の基準をクリアできずに設計からやり直しというのは、定性的ですが同意してくれる人が多いと思います。\r
\r
## なぜ必要か\r
\r
東京都の中の局という大きな組織単位のうちの一つが産業労働局であり、産業労働局の予算要求でまっさきに対象となるのが中小企業支援です。この施策が練られたものであればあるほど、票が期待できます。\r
\r
中小企業で業務委託をしていない企業なんて、ありません。\r
そのため、現環境でいかに人手をかけずに品質を維持・向上できるかが課題と考えられます。\r
そこで具体的な政策案として「中小企業へのQMS支援」が良いと思います。\r
QMSはISO9001やISO14001などで体系化されているため、入口は分かりやすいし、具体的にどうすればよいかは集合知でクリアできる、と仮定しています。\r
\r
## この Issue で議論したいこと\r
\r
都内中小企業・製造業を対象とした具体的なマニフェスト\r
\r
## 調べたこと（裏付けとなる事実・ファクト）\r
\r
[東京都 令和6年度予算要求](https://www.zaimu.metro.tokyo.lg.jp/zaisei/yosan/r6/06yosanyokyujokyou_index)\r
ファクトとして明示出来ないのですが製造業であれば、分かると思います。\r
ネット検索だとISO9001のコンサルばかりヒットして、これらのコンサルは余り信じられないので…。\r
[Perplexity検索結果](https://www.perplexity.ai/search/2020-E0uHrC_6QLCOBf.AJijKlQ#0)\r
\r
_Originally posted by @Zundaohagi in https://github.com/takahiroanno2024/election2024/issues/41#issuecomment-2185035810_\r
`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"経済"}]},updatedAt:"2024-06-27T05:27:44Z"},{title:"自動運転特区を作り、自動運転車にとって優しい街を作る",number:177,createdAt:"2024-06-25T15:45:57Z",url:"https://github.com/takahiroanno2024/election2024/issues/177",state:"OPEN",body:`### 政策ビジョン\r
\r
経済\r
\r
### 政策\r
\r
人手による運転を禁止して、レベル4以上の自動運転車のみが道路を使っても良い特区\r
\r
### 必要だと思ったきっかけ\r
\r
技術の粋を集めたWaymoの自動運転ロボタクシーが自転車と衝突した事故の記事を見たためです。\r
\r
### なぜ必要か\r
\r
人手による運転の自動車や自転車は予測が難しい動きをするため、自動運転車の開発において技術的なハードルとなり、完全自動運転車を前提とする社会の実現を妨げる要因となります。一方、自動運転車のみの環境では、相互に通信を行い協調運転が可能となり、より快適で効率的な運転が実現できると考えられます。\r
\r
\r
\r
### この Issue で議論したいこと\r
\r
人手で操作する予測困難な物体の予測をしながら動く賢い車を作るコスパと規制をかけるコスパは、社会全体で考えた時にどっちがコスパは良いか？\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
https://gigazine.net/news/20240208-waymo-robotaxi-accident/\r
\r
### 自由記述欄\r
\r
_No response_`,comments:{totalCount:3},reactions:{totalCount:1},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-28T10:54:14Z"},{title:"マニフェストの全体的な変更案",number:178,createdAt:"2024-06-25T16:22:31Z",url:"https://github.com/takahiroanno2024/election2024/issues/178",state:"OPEN",body:`### 政策ビジョン

民主主義

### 政策

これまで動画見た感想だと・世代ごとにあった施策・行政のサポートを今の（スマホ、AIその他がでてきた）時代にあったものにするの2本の軸、5本の柱の方がしっくりくる。\r
\r
あくまで政策だけ書き、このサイトのようにリンク埋め込みができるサイトなどでなぜこの政策が必要と思ったかは見たい政策だけ選んで見れるようにすると可読性と詳細さの両取りができるのではないかと思った\r
\r
現職の子育て評価。実行できなかった取りこぼしの指摘、（テクノロジーを用いてさらに促進するのであればその旨）は公約として書いたほうがいいのではないか。第一段階でなしと判断されれば、AIあんのや動画見られることもなく、子育て支援に対して認知されないまま票先にならない。\r
\r
これは政策案にも関わるが、所得制限→所得に応じてのほうがいいと思う。一律である必要はないが、所得制限する内容ではないと思った

### 必要だと思ったきっかけ

_No response_

### なぜ必要か

_No response_

### この Issue で議論したいこと

_No response_

### 調べたこと（裏付けとなる事実・ファクト）

AIあんののレスポンス

### 自由記述欄

_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"民主主義"}]},updatedAt:"2024-06-25T16:22:46Z"},{title:"取組内容に対する予算とその実行計画及び体制を提示してほしい",number:180,createdAt:"2024-06-25T16:41:08Z",url:"https://github.com/takahiroanno2024/election2024/issues/180",state:"CLOSED",body:`### 政策ビジョン\r
\r
行政\r
\r
### 政策\r
\r
マニフェストで掲げている課題に対するそれぞれの取組内容に対して、どのタイミングでどれくらいの予算を注ぎ込むのかを提示してほしい。可能であれば、どういった体制で実行するかまで提示してほしい。\r
\r
### 必要だと思ったきっかけ\r
\r
マニフェストでかげていることを実現するためには、「ヒト」「カネ」「時間」が必要であるが、それがマニフェストには明示されていないとわかったとき。\r
\r
### なぜ必要か\r
\r
マニフェストで掲げていることの実現性を示すことができるため。\r
\r
### この Issue で議論したいこと\r
\r
_No response_\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
マニフェスト\r
AIあんの\r
\r
### 自由記述欄\r
AIあんのに質問すると何にどれくらいの予算をどのタイミングで使うかの回答は返って来るが、視覚的に捉えられるように資料化したほうが良いと思う。\r
\r
_No response_`,comments:{totalCount:2},reactions:{totalCount:1},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-07-03T23:45:57Z"},{title:"良い政策に対してのポジティブフィードバックや賛成票を可視化するシステム",number:184,createdAt:"2024-06-26T06:18:15Z",url:"https://github.com/takahiroanno2024/election2024/issues/184",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

いいね/GOOD/高評価だけは数字でわかるような場所があるといいと思いました\r
Githubだと改善要望しか出ないので、民意を作りづらいと感じます

### 必要だと思ったきっかけ

マニフェスト1.1ver.を読んで

### なぜ必要か

熟議による民主主義を作るためには民意がどうなっているかを可視化することが大切だと思うからです\r
反対が多いから意見をしないのではないですが、集団としてどのような動きがあるのか仮説検証を行いやすい仕組みづくりが大切だと思います

### この Issue で議論したいこと

支持されている政策の実現方法についての検討

### 調べたこと（裏付けとなる事実・ファクト）

詳細版マニフェストver. 1.1

### 自由記述欄

受験料や学校内外での教育補助はとても良い政策だと思います\r
（認知症課題よりも）こちらの方がアプリの価値が効いてくるのではないでしょうか\r
認知症課題はアプリに集中してしまうよりも会話や人とのつながりによる刺激で改善するところもありそうですが、\r
教育課題は正答というわかりやすい指標があるため技術との相性がいいイメージです\r
格差是正にも大きく貢献しますし、その人の意思や努力で変えられるという希望は、社会全体への期待へつながる気もします。\r
成功者への許容度もそういった機会選択の多さから変わっていけば、いろいろな人を応援していける社会へと変わっていけるのではないでしょうか。`,comments:{totalCount:7},reactions:{totalCount:4},labels:{nodes:[{name:"教育・子育て"},{name:"民主主義"}]},updatedAt:"2024-06-27T07:12:20Z"},{title:"都政に関する X（Twitter）画像投稿に代替テキスト（ALT）を付加する",number:185,createdAt:"2024-06-26T08:31:41Z",url:"https://github.com/takahiroanno2024/election2024/issues/185",state:"OPEN",body:`### 政策ビジョン

行政

### 政策

- 東京都の行政に関連する各アカウントに対し、X（Twitter）への画像投稿に、代替テキスト（ALT）の活用を推奨します。\r
- 目的\r
  - 視覚障害者が行政情報を容易に取得できるようにする\r
  - 外国人が情報を理解しやすくする\r
  - 情報の透明性を向上させる\r
- 代替テキストとは、画像の内容について説明する文章のことで、次のような人々の助けとなります。\r
  - 視覚障害者\r
    - 視覚障害者は、スクリーンリーダーと呼ばれるソフトウェアを使用して、コンピューターやスマートフォンの画面に表示される情報を音声に変換します。X の代替テキストもスクリーンリーダーによって読み上げられ、画像の内容を理解する助けになります。\r
  - 読字に困難を抱える人\r
    -  画像内に含まれる文章を理解するうえで、スクリーンリーダーが役に立ちます。\r
  - 画像や写真内の文章・コンテキストを理解したい外国人\r
  - 画像や写真について背景情報を知りたい市民\r
- 参考資料\r
  - [X ヘルプセンター 画像の説明を追加する方法](https://help.x.com/ja/using-x/add-image-descriptions)\r
    -  X で画像に説明を追加する手順についての説明です。\r
  - [X ヘルプセンター 良い画像の説明を作成する方法](https://help.x.com/ja/using-x/write-image-descriptions)\r
    - 画像の説明を書くときの推奨事項についての説明です。

### 必要だと思ったきっかけ

- 2024 年都知事選挙の主要候補者の中で、X への画像投稿に代替テキストを活用している候補者がほとんどいませんでした。\r
  - 関連ツイート: https://twitter.com/Reputeless/status/1805827065226436776

### なぜ必要か

- ソーシャルメディアは情報共有の主要な手段となり、特に行政機関の発信内容は多くの都民にとって重要な情報源となっています。\r
- **視覚障害者への情報提供:**\r
  - 都内では 40,436 人が、視覚障害により身体障害者手帳の交付を受けています（令和 4 年 3 月末時点）。\r
  - 出典: https://www.hokeniryo.metro.tokyo.lg.jp/soumu/2023sya/02/p29.html\r
- **外国人への情報提供:**\r
  - 画像に書かれた文章や、画像のコンテキストを理解する助けとなります。\r
- **情報の透明性向上:**\r
  - 画像の内容を詳細に説明することで、行政情報の透明性が高まり、市民が情報を正確に理解しやすくなります。\r
- **フェイクニュースの抑制:**\r
  - 画像の背景情報を正確に説明することで、画像の誤解や誤用を防ぎ、フェイクニュースの拡散を抑制できると考えられます。\r
- 代替テキストの導入は、安野氏がマニフェスト v1.1 で提言する次の項目と合致します。\r
  - 「テクノロジーで誰も取り残さない東京へ」\r
  - 「便利さを実感できる行政サービスの実現」\r
  - 「徹底した情報公開により東京を透明に」\r
  - 「都政の情報をわかりやすく発信」

### この Issue で議論したいこと

- 対象アカウントの範囲について\r
  - 東京都が運営する公式アカウント\r
    - https://www.metro.tokyo.lg.jp/tosei/koho/tosei/sns_official.html\r
  - 都知事\r
  - 都議会議員\r
  - 都内の市区町村\r
  - 都内の選挙の立候補者\r
- 努力レベルについて\r
  - 努力義務、ガイドライン周知など\r
- 本提案について、視覚障害等の当事者からも意見を募ってほしい

### 調べたこと（裏付けとなる事実・ファクト）

- 都内では 40,436 人が、視覚障害により身体障害者手帳の交付を受けています（令和 4 年 3 月末時点）\r
  - https://www.hokeniryo.metro.tokyo.lg.jp/soumu/2023sya/02/p29.html\r
- 東京都の公式 Web サイトでは、画像への代替テキスト（alt 属性）の付与がなされています\r
  - https://www.metro.tokyo.lg.jp/index.html\r
- 東京都が運営する公式アカウント一覧\r
  - https://www.metro.tokyo.lg.jp/tosei/koho/tosei/sns_official.html

### 自由記述欄

- 代替テキストの付加が望ましいと思われる X 投稿の例\r
  - 東京都 健康・医療 **@tocho_kenkou**\r
    - https://x.com/tocho_kenkou/status/1772934126196195685\r
      - 回収対象の食品名\r
    - https://x.com/tocho_kenkou/status/1793843147681706297\r
      - 画像内のテキスト\r
  - 東京都 文化・芸術  **@tocho_seibun**\r
    - https://x.com/tocho_seibun/status/1787784478972170413\r
      - 画像内のテキスト`,comments:{totalCount:0},reactions:{totalCount:14},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-06-26T08:31:53Z"},{title:"「都議会AI」のチェックについて",number:195,createdAt:"2024-06-26T12:41:33Z",url:"https://github.com/takahiroanno2024/election2024/issues/195",state:"OPEN",body:`### 政策ビジョン

民主主義

### 政策

「都議会AI」と都民との質疑応答が正しく行われているかどうかのチェックをどう行うのか、appendix等に記載があると安心です。

### 必要だと思ったきっかけ

chatGPTに込み入った質問をした際に、もっともらしい文章で嘘の回答をされた。

### なぜ必要か

AIに任せっぱなしだと、間違った回答が行われた際などにリカバリーが効かないのではないかという懸念があります。

### この Issue で議論したいこと

AIを活用する政策全般について、AIが正しく動いていることをどのように担保し、誰が責任を負うか。

### 調べたこと（裏付けとなる事実・ファクト）

大規模言語モデル（LLM）に基づく生成AI（人工知能）は誤った情報をまことしやかに提示することがある。\r
https://xtech.nikkei.com/atcl/nxt/column/18/02515/070300003/

### 自由記述欄

_No response_`,comments:{totalCount:2},reactions:{totalCount:0},labels:{nodes:[{name:"民主主義"}]},updatedAt:"2024-06-27T08:39:56Z"},{title:"不動産仲介販売制度の見直し（専任媒介または専属専任媒介の優遇措置）",number:196,createdAt:"2024-06-26T12:52:34Z",url:"https://github.com/takahiroanno2024/election2024/issues/196",state:"OPEN",body:`### 政策ビジョン\r
\r
経済\r
\r
### 政策\r
\r
１社の不動産会社しか取り扱わない賃貸物件を増やす方向に、政策を決める\r
1社の不動産会社にしか仲介を依頼できない契約である専任媒介または専属専任媒介で契約した場合に、都から補助金を出すなどの政策を行う\r
\r
\r
### 必要だと思ったきっかけ\r
\r
人手不足対策の１つと思ったため。\r
賃貸の引っ越しを検討した際、１件の購入依頼に対して、賃貸検索サイトを介して、複数の不動産会社の若い社員から\r
同じ条件の物件（商品）で営業された際に、その営業行為が社会全体として効率がよくないように感じたので。\r
１つの商品を同じ条件で１社が売ろうとも５社が売ろうとも社会的な貢献は変わらないのではないか感じたため。\r
\r
### なぜ必要か\r
\r
人手不足の昨今、会社内だけでなく行政として労働力の再配分させる仕組みが必要だと思いました。\r
そのような社会全体として効率をあげるべき際たる事例だと思ったので。\r
\r
\r
### この Issue で議論したいこと\r
\r
どのような販売モデルが人手不足解消に役立つか。\r
また、それを誘導するにはどのような政策が考えられるのか。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
東京都で１年間に成約する不動産契約数や\r
１契約にかかる労働コスト\r
東京都に従事する仲介不動産業の人数など調べたいですが、調べれてません。\r
\r
### 自由記述欄\r
\r
不動産業者専用データベース「レインズ」というDBがあるようで、それを不動産検索サイトに転記したり、それをみて営業しいるようだが、それを一般に公開すれば、検索サイトの管理や登録さえもいらないのではないかと思いました。`,comments:{totalCount:2},reactions:{totalCount:1},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-07-02T08:57:36Z"},{title:"公共交通の更なる利便性向上策",number:197,createdAt:"2024-06-26T12:57:11Z",url:"https://github.com/takahiroanno2024/election2024/issues/197",state:"OPEN",body:`### 政策ビジョン

行政

### 政策

* JR中央線の三鷹ー立川間の複々線化を推進する\r
* 東京都と埼玉県の都県境まで来ている公共機関・幹線道路の延伸を目指す

### 必要だと思ったきっかけ

旧国鉄の「五方面」を見たとき、中央線は三鷹駅でとまっている状況は多摩地域の発展という観点から問題であると感じたため。また、埼玉県知事が掲げる「あと数マイルプロジェクト」の実現には東京都の協力が不可欠であるため。

### なぜ必要か

旧国鉄の「五方面」を見たとき、北東(常磐線)には取手、東(総武線)は千葉、北(東北線)は大宮、南(東海道線)は横浜と、すべて隣県まで複々線が実現していますが、西(中央線)は多摩への入り口である三鷹でとまっています。多摩地域の発展という観点からも、中央線の複々線化事業を東京都は重点的に進めるべきだと考えます。\r
また、埼玉県の大野元裕知事は2019年の県知事選で、埼玉高速鉄道、東京メトロ有楽町線、日暮里・舎人ライナー、都営大江戸線、多摩都市モノレールを延伸し、埼玉県内の駅につなぐ「あと数マイルプロジェクト」を公約として掲げました。東京都としてもこのプロジェクトを後押しすることで、都県境周辺地域の交通の利便性を高めることにつながると考えられます。

### この Issue で議論したいこと

公共交通の更なる利便性向上策について

### 調べたこと（裏付けとなる事実・ファクト）

公共交通の利便性向上検討会議 - 埼玉県 https://www.pref.saitama.lg.jp/a0109/koukyoukoutu-ribensei.html

### 自由記述欄

_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-06-26T12:57:25Z"},{title:"正直者に特赦を：不正行為の根本解決を目指して",number:200,createdAt:"2024-06-27T03:30:16Z",url:"https://github.com/takahiroanno2024/election2024/issues/200",state:"OPEN",body:`### 政策ビジョン

行政

### 政策

現在の贈収賄や不正行為に対する処罰制度では、弱い立場の者がスケープゴートとなり、真実が明らかにされないまま原因調査や再発防止策が進まない問題があります。これを解決するために、罪を問わない代わりに、原因追及と再発防止に注力する政策を提案します。\r
\r
具体的には、米国運輸安全委員会（NTSB）のアプローチや、南アフリカの真実和解委員会の成功事例を参考にし、正直に不正行為を告白した者に対して恩赦を与える制度を導入します。この制度は、真実を明らかにし、将来の不正を防止するための透明性を確保します。

### 必要だと思ったきっかけ

現行の制度では、贈収賄などの不正行為が発覚しても、スケープゴートが処罰されるだけで、真の原因が明らかにされないことが多々あります。これにより、同じような不正行為が再発するリスクが高いと感じました。

### なぜ必要か

真実を明らかにすることなくして再発防止策を講じることは困難です。不正行為の根本原因を追及し、再発防止策を講じるためには、関係者が率直に情報を提供するインセンティブを与える必要があります。罪を問わない恩赦制度は、そのための効果的な手段となります。

### この Issue で議論したいこと

- 不正行為の告白に対する恩赦制度の具体的な運用方法\r
- 不正行為の根本原因の特定と再発防止策の策定\r
- 他国の成功事例の分析と日本への適用可能性

### 調べたこと（裏付けとなる事実・ファクト）

- 米国運輸安全委員会（NTSB）: NTSBは事故原因の解明を最優先とし、関係者が率直に情報を提供するためのインセンティブとして、刑事責任を追及しない方針を取っています。このアプローチにより、多くの事故原因が明らかにされ、再発防止策が講じられています\r
https://diamond.jp/articles/-/337104?page=3\r
\r
- 南アフリカの真実和解委員会: アパルトヘイト時代の人権侵害を明らかにし、和解を促進するために設立されました。告白した者に恩赦を与えることで、多くの犯罪行為が公表され、社会全体の和解が進みました​ \r
https://asobot.co.jp/wp/wp-content/uploads/academy_pdf02.pdf

### 自由記述欄

罪が許されても、政治家には選挙による審判があり、必ずしも効果的に機能しないかもしれません。しかし、少なくとも都の職員など、追い詰める必要がない立場の人々には、この恩赦制度が効果的に機能する可能性があります。これにより、真実の追及と再発防止に向けた前進が期待できます。`,comments:{totalCount:0},reactions:{totalCount:1},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-06-27T03:30:28Z"},{title:"教育の費用「貸与」から「付与」の所得制限について",number:202,createdAt:"2024-06-27T10:17:58Z",url:"https://github.com/takahiroanno2024/election2024/issues/202",state:"CLOSED",body:`### 政策ビジョン\r
\r
教育・子育て\r
\r
### 政策\r
\r
マニフェストP.46 教育費\r
中学3年生・高校3年生の塾代や受験料の「貸与」について、こちらは現行の「受験生チャレンジ支援貸与」のアップグレードでしょうか？\r
https://www.fukushi.metro.tokyo.lg.jp/seikatsu/teisyotokusyataisaku/jukenseichallenge.html\r
\r
なぜこの制度のアップグレードが必要なのか根拠が薄いかと思います。せめて「所得制限に応じて」の表記を変更すべきではないでしょうか。\r
具体的な世帯収入を示すか、「所得制限」ではなく他の方法でバーを設けることはできないでしょうか。\r
\r
### 必要だと思ったきっかけ\r
\r
現在、中〜高所得世帯は国の数ある所得制限によって悉く受給対象から外れているため、「所得制限」のキーワードに敏感になっています。ここで更に所得制限をマニフェストとして掲げられると、どのバーで切られるのかと正直疑心暗鬼になってしまう有権者が多いのではないかと懸念します。\r
\r
### なぜ必要か\r
\r
教育費がかかるのはどこの世帯も同じです。\r
高校授業料や大学費用ではなく、塾代・受験料に焦点を当ててそこに所得制限を設ける根拠がないと「高所得差別」と誤解を招く可能性があるため、必要と思いました。、\r
\r
### この Issue で議論したいこと\r
\r
もしどうしても「所得制限を設ける」とマニフェストに明記する必要がある場合、\r
・「付与」の線引きは世帯年収で考えているのか(現行の制度から変えないのであれば、現行の制度の明確と踏襲する理由)\r
・その試算根拠は何か\r
(・これまで数々の仕打ちを受けてきた高所得世帯が納得できるのか)\r
をマニフェストに加えることはできないでしょうか。\r
\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
https://www.fukushi.metro.tokyo.lg.jp/seikatsu/teisyotokusyataisaku/jukenseichallenge.html\r
上記施策をアップグレードするのが今回のマニフェストの内容と理解しております。\r
\r
https://x.com/nikiuo11/status/1806213608269058502?s=46\r
↑マニフェスト内に所得制限があることへの不安の声です\r
\r
### 自由記述欄\r
\r
_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-28T10:38:27Z"},{title:"東京を日本のハブに",number:206,createdAt:"2024-06-27T12:11:29Z",url:"https://github.com/takahiroanno2024/election2024/issues/206",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

東京には全ての新幹線が繋がっている。\r
これに対してストロー現象が言われる事があるが逆である。\r
むしろ地方とダイレクトにつながり一体化して課題解決にあたる事が可能である。地方の文化や伝統産業に直に触れ、相互に人的交流や助け合う事ができる。\r
リニアが開通すれば名古屋、岐阜、南信、山梨と一体化し、静岡ののぞみ停車も増える。\r
羽田から飛行機で北海道、九州、能登とも1時間前後である。図らずも実現した世界で頭抜けた、この交通インフラを活かさない手はない。\r
ストロー現象ではなく、スプレー効果と呼ぼう。

### 必要だと思ったきっかけ

すでにある東京の強みを活かすため。

### なぜ必要か

東京だけでは限界があり、地方も豊かにならなければ東京の発展もない。

### この Issue で議論したいこと

日本の交通インフラをもっと活かしたい。

### 調べたこと（裏付けとなる事実・ファクト）

鉄道、航空網、高速道路

### 自由記述欄

鉄道好きです`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"経済"}]},updatedAt:"2024-06-27T12:12:03Z"},{title:"路面電車復活",number:207,createdAt:"2024-06-27T12:40:10Z",url:"https://github.com/takahiroanno2024/election2024/issues/207",state:"OPEN",body:`### 政策ビジョン\r
\r
経済\r
\r
### 政策\r
\r
　路面電車を復活してはいかがでしょうか?\r
吉見俊哉先生が提案していることですが利点が多くあります。ただ復活させるのではなく、新しい街のインフラとして再定義し、様々な社会実験を行う。\r
　首都高速の高架を廃止する道路とかが使えますが、東京は広いので探せば使える場所はあると思います。運転手不足で需要があっても廃止されるバス路線の代替にもなります。また、鉄道よりも低コストで街の付加価値が上げられるので先行投資としても有効。\r
　EVにすれば架線が必要無く、始発駅での短時間充電に特化した電池システムでコストダウンと軽量化が可能。\r
　バスよりも自動運転の親和性が高く、運転手不足や人件費削減に対応できる。\r
　運賃は顔認証キャッシュレス決済。サブスクにも対応。徹底的な省人化とコストダウン。\r
　車内カメラとマイクに繋がったAI車掌で人間に出来ないような、車内の状況に常に対応しつつ、複数の乗客のあらゆる質問に答え、街を案内し、緊急対応も行う。疑似人格を持ち、時に車内を盛り上げたり、話し相手にもなる。\r
　のんびりゆっくりの路面電車の特性を最大限に活かします。\r
　地方にも展開し、将来的にはシステム毎輸出する。\r
\r
### 必要だと思ったきっかけ\r
\r
第三の交通で街をもっと楽しみたい。\r
\r
### なぜ必要か\r
\r
先端テクノロジーを身近な生活向上に役立てる。\r
\r
### この Issue で議論したいこと\r
\r
都市にふさわしい交通とは?\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
吉見 俊哉\r
東京裏返し 社会学的街歩きガイド (集英社新書)\r
\r
### 自由記述欄\r
\r
のんびり街を見て歩きたいです。`,comments:{totalCount:5},reactions:{totalCount:2},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-29T13:56:21Z"},{title:"大規模災害時の通信インフラ維持",number:208,createdAt:"2024-06-27T13:08:09Z",url:"https://github.com/takahiroanno2024/election2024/issues/208",state:"OPEN",body:`### 政策ビジョン

医療・防災

### 政策

NTTの空中基地局に出資し大規模災害時の通信環境維持を実現する。

### 必要だと思ったきっかけ

大規模災害時は通信の確保が身を守るために必要。

### なぜ必要か

大規模災害時の停電で地上の基地局がダウンするため。

### この Issue で議論したいこと

災害時の通信確保。

### 調べたこと（裏付けとなる事実・ファクト）

宇宙RANにおけるHAPS実用化に向けた取り組み\r
https://journal.ntt.co.jp/article/19880

### 自由記述欄

情報は大事`,comments:{totalCount:1},reactions:{totalCount:1},labels:{nodes:[{name:"医療・防災"}]},updatedAt:"2024-07-01T06:10:18Z"},{title:"ICT等に苦手意識のある方々への配慮(いわゆるデジタルディバイドの問題)",number:209,createdAt:"2024-06-27T13:21:20Z",url:"https://github.com/takahiroanno2024/election2024/issues/209",state:"OPEN",body:`### 政策ビジョン

行政

### 政策

行政のDXの推進は必要なことですし、安野さんにはぜひ進めていただければと思いますが、それと同時に、ICT機器の操作が苦手だったり、不安だったりする方々が果たして賛同してくれるのか、と考えると不安に感じます。そのため、既存の申請や都との連絡手段を残した上でDXを進めるのであれば、その内容を明確に示した方がよいかと考えIssueを投稿させていただきます。

### 必要だと思ったきっかけ

デジタルネイティブでない高齢者の方々も都民の中には多くおり、そうした方々にも賛同していただけた方が円滑に進められると考えた。

### なぜ必要か

デジタルネイティブでない都民の方々をも取り残さないようにするため。

### この Issue で議論したいこと

「デジタルネイティブでない方々にどの程度譲歩するか」という点です。譲歩しすぎると安野さんの政策の良さが薄れてしまうため、その部分は考える必要があるかと存じます。

### 調べたこと（裏付けとなる事実・ファクト）

_No response_

### 自由記述欄

Issueを投稿するのが初めてのため、不慣れな部分がございます。ご容赦ください。`,comments:{totalCount:0},reactions:{totalCount:2},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-06-27T13:21:53Z"},{title:"島嶼部への離島留学の仕組みを作る",number:210,createdAt:"2024-06-27T13:40:21Z",url:"https://github.com/takahiroanno2024/election2024/issues/210",state:"OPEN",body:`### 政策ビジョン

教育・子育て

### 政策

YouTube Liveのコメントより\r
\r
「それこそ島しょ部の場合はほぼ実質小中高一貫のようになっているので、そこも結びつけて離島留学だったりを取り入れてもらいたいです」

### 必要だと思ったきっかけ

1. [地域みらい留学](https://c-mirai.jp/)の仕組みがあり、実際に2023年度は744名が新規に留学をしているが、東京都では受け入れの学校がない。\r
2. 島嶼部は、豊かな自然と地域コミュニティが存在することから、地域みらい留学の受け入れ先としてニーズがあり、また島嶼部の子どもたちへの刺激にもなる。

### なぜ必要か

_No response_

### この Issue で議論したいこと

_No response_

### 調べたこと（裏付けとなる事実・ファクト）

[地域みらい留学](https://c-mirai.jp/)では実際に2023年度は744名が新規に留学をしている（累計2376人)が、東京都では受け入れの学校がない。

### 自由記述欄

_No response_`,comments:{totalCount:2},reactions:{totalCount:4},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-27T17:16:08Z"},{title:"女性がさらに活躍できる社会へ",number:211,createdAt:"2024-06-27T14:12:32Z",url:"https://github.com/takahiroanno2024/election2024/issues/211",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

・女性管理職比率の公表を国に先駆けて条例で定める\r
・男女の賃金格差の原因を深掘り調査

### 必要だと思ったきっかけ

自分自身が女で、前職の管理職に女性が少なくロールモデル不足に悩んでいたこと。

### なぜ必要か

女性の社会参加が加速することで、労働人口が増加し、経済の発展に寄与できる可能性があるから。

### この Issue で議論したいこと

・女性管理職比率の公表・賃金格差の深掘り調査以外に、女性の活躍を加速させる方法がないか。\r
・(悲しいことに)女性の社会参加が進むことで少子化が進んできた面があるという言説もあるが、少子化対策とどう両立させるか。

### 調べたこと（裏付けとなる事実・ファクト）

・女性管理職比率、公表へ\r
https://www.tokyo-np.co.jp/article/336330?rct=politics\r
\r
・女性の賃金は男性より3割安く、半分は「説明できない格差」\r
https://www.tokyo-np.co.jp/article/313743

### 自由記述欄

_No response_`,comments:{totalCount:1},reactions:{totalCount:3},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-07-02T05:02:15Z"},{title:"子育てにかかる経済的負担への支援の見直し（所得制限の見直し）",number:212,createdAt:"2024-06-27T14:31:47Z",url:"https://github.com/takahiroanno2024/election2024/issues/212",state:"OPEN",body:`### 政策ビジョン\r
\r
教育・子育て\r
\r
### 政策\r
\r
１）民間の教育費負担（塾代や課外活動など）に対する5000円/月の教育バウチャーを実施（中学3年生・高校生3年生など対象時期を区切る）\r
２）高校受験料を助成する\r
３）所得制限の言及は削除\r
４）第一子保育料無償化（0-2歳も含む）\r
５）018サポート（月5000円の手当）などは踏襲\r
\r
### 必要だと思ったきっかけ\r
\r
\r
Talk to the cityから、所得制限に対する懸念が見られました。\r
\r
> #元のコメント:"安野たかひろ氏のマニフェストを見た。 教育についてはインター中高一貫、トップ大学誘致とか大規模なものより公立校のエアコンやトイレ改修、教職員待遇改善を行ってほしい。教師のリスキリングは皆さん過労死寸前で無理じゃないかな。 あと絶対所得制限はやめてほしい #TOKYOAI"\r
https://x.com/shirai3des/status/1806259942749520376\r
\r
また、類似のイシュー（#202, #32 ）も見られる\r
\r
### なぜ必要か\r
\r
安野たかひろの公約においては、東京での子育てにかかる費用を問題としている。\r
全国比2.3倍ある開きを是正する政策は必要と考えている。\r
また、所得制限は誤解を招く表現だったため、削除する。\r
加えて、第一子の保育料無償化や018サポートなど、現知事による政策や公約は踏襲する。\r
\r
また、所得制限なく施策を実施することで行政事務が大幅に減る副次的効果も期待できる。\r
\r
### この Issue で議論したいこと\r
\r
さらなる支援の余地がどのようなところにあるか。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
- 元となる声\r
    - https://x.com/shirai3des/status/1806259942749520376 \r
    - https://github.com/takahiroanno2024/election2024/issues/202\r
    - https://github.com/takahiroanno2024/election2024/issues/32\r
- 018サポート\r
    - https://www.fukushi.metro.tokyo.lg.jp/kodomo/kosodate/018/index.html\r
- 小池都知事公約\r
    - https://www.tokyo-np.co.jp/article/334293\r
\r
### 自由記述欄\r
\r
_No response_`,comments:{totalCount:1},reactions:{totalCount:5},labels:{nodes:[{name:"duplicated"},{name:"教育・子育て"}]},updatedAt:"2024-06-27T14:35:37Z"},{title:"働き方改革2.0",number:213,createdAt:"2024-06-27T14:33:18Z",url:"https://github.com/takahiroanno2024/election2024/issues/213",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

週休3日や1日の労働時間6時間のような企業を増やす

### 必要だと思ったきっかけ

趣味を楽しむため、なるべく働く時間を減らしたいが、正社員の求人はほとんどが週休2日×8時間勤務+残業、となっている。\r
AIや自動化などで人間が楽できるようになっているはずなのに実感がわかない。\r
もっと労働時間の選択肢を増やし、ライフエクスペリエンスを向上させてほしい。

### なぜ必要か

人生を豊かにするため。

### この Issue で議論したいこと

週休3日や1日の労働時間6時間のような企業はなぜ少ないのか。\r
そういった企業を増やすためにはどのような働きかけが必要か。\r
(非正規雇用やパート、アルバイトであれば現時点でもこういった働き方が可能だが、正社員でもできるようにしてほしい。)

### 調べたこと（裏付けとなる事実・ファクト）

転職エージェントに週休3日や1日の労働時間6時間のような企業がないか聞いたところ、ほとんどないという回答だった。

### 自由記述欄

_No response_`,comments:{totalCount:4},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-28T20:01:09Z"},{title:"延床面積に応じた住宅支援制度の創設",number:214,createdAt:"2024-06-28T00:48:40Z",url:"https://github.com/takahiroanno2024/election2024/issues/214",state:"OPEN",body:`### 政策ビジョン\r
\r
教育・子育て\r
\r
### 政策\r
\r
子育て世帯向けに、持ち家・賃貸問わず階段を除いた延床面積・部屋数に応じた住宅支援制度を創設する\r
\r
### 必要だと思ったきっかけ\r
\r
東京都内のパワーカップルの子育て世帯でも十分な広さの家に住めていないケースが多いため\r
\r
### なぜ必要か\r
\r
都内勤務地で共働きを求められると都心から離れたところには住めず、また都内に住むと金銭的にも広い家には住めない。\r
例えば、パワービルダーが需要に合わせた家を建ててもペンシルハウスになり、居住空間で家族構成が決まる状況になる。\r
人口減少を解決するには3人以上子どもを育てる必要があるが、そもそもそんな環境には住めないケースが多いのではないかと考えた。\r
\r
### この Issue で議論したいこと\r
\r
_No response_\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
国土交通省の定めた誘導居住面積水準（都市型）\r
と\r
国土交通省:（２）一住宅当たり延べ床面積の都道府県比較\r
の比較\r
\r
### 自由記述欄\r
\r
_No response_`,comments:{totalCount:8},reactions:{totalCount:3},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-29T13:51:27Z"},{title:"保育園（または幼稚園）のバウチャー制の導入",number:215,createdAt:"2024-06-28T03:09:19Z",url:"https://github.com/takahiroanno2024/election2024/issues/215",state:"OPEN",body:`### 政策ビジョン

教育・子育て

### 政策

保育園（または幼稚園）にバウチャー制度を導入することを提案します。\r
バウチャー制度とは、これまで保育園や幼稚園といった施設側に投入されていた補助金を利用者側に「バウチャー」という形で付与する制度です。\r
バウチャー制度を導入することで、これまでは一定の基準を満たしていれば一定の補助金が得られたという状況から、利用者に選ばれることで報酬が得られるという形に変わっていきます。\r
\r
また、バウチャーの範囲内で利用できる保育園を一定数残した上で、バウチャー＋保護者の自己負担という形も認めることで利用者も多様な選択肢の中から選べるようになります。\r
\r
また、保育園を利用する保護者からバウチャーの費用として、これまでの認可保育園の保育料に相当する額を徴収すれば、財源の面でも大幅なプラスにはならないと考えられます。

### 必要だと思ったきっかけ

２人の子供の子育て中ですが、子供の保育園入園時、「働き罰」と言われるような、非常に大きな不公平感を感じたことがきっかけです。\r
\r
現状では、認可保育園と認可外の保育園では保育料に大きな開きがあります。\r
さらに、それに加え認可外の保育園は、一部例外はありますが、園庭がなかったり、乳児が中心で途中の転園が前提だったりと「認可保育園が見つかるまでのつなぎ」で利用される場合が多い状況です。\r
そのため、費用面・環境面の両面で認可保育園を希望する保護者が圧倒的に多いのが現状です。\r
\r
しかし、認可保育園への入園を希望する保護者が多いが故に認可保育園の入園枠は争奪戦となっています。\r
\r
不公平感①\r
高所得者（高額納税者）は保育料・入園の優先度両方で割を食う\r
認可保育園の保育料は所得に応じて定められています。（３歳未満）\r
高所得者は高額の税金を納めているのに加え、高額の保育料を支払う必要があります。\r
そして、そこまでなら仕方がないと諦めもつくのですが、さらに入園の優先度も所得順に決まり、仕事で重要なポジションに就き何としてでも保育園を利用したい人ほど入園の優先度が下がります。\r
この不公平感は根深く、会社の制度的にも、所得的にも２人目、３人目を十分持てたはずの方に子供を持たない決断をさせるに足るものです。\r
（ここに関しては具体的な統計データはありませんし、保育園以外にも児童手当の所得制限やその他各種補助の年収制限といった要因もありますが、周囲の比較的高所得の方からはそういった声を多く耳にします。特に東京は夫婦共働きで比較的所得が高い層も多いため、不満を抱えている層は多いと思われます）\r
\r
不公平感②\r
施設間の不公平\r
認可保育園と認可外の保育園では、得られる補助金の額に大きな違いがありますが、保育士の方は愛情を持って子供たちに接してくれています。\r
しかし、運営費の一部に補助金が投入されていることもあり、一般的には認可保育園の方が給与水準が高い傾向にあります。\r
同じように先生方が愛情を持って接してくれていても、補助金の有無で設備面や待遇面では違いが生じてしまっているのが現状です。

### なぜ必要か

バウチャー制度を導入し、利用者の側が施設を選べるようにすることで、施設側、利用者側、働く先生側それぞれにメリットがあると考えます。\r
\r
施設側\r
バウチャーによって支払われる金額を、一定数の園児が集まればこれまでの認可保育園で得られる補助金の額と同等になるように設定すれば、より良いサービスを提供し、保護者に選ばれる事業者が正当な報酬を得られるようになります。\r
また、バウチャーの範囲内で利用できる保育園の数を一定数確保した上で、バウチャープラスアルファの料金を徴収することも認めれば、例えば、\r
国の基準よりも保育士の数を増やして手厚い保育をする園\r
駅に近い場所に送迎保育ステーションを設け、預けやすく、子供は駅から離れた広々とした場所で過ごせる園\r
外国語対応可能な保育士が在籍した、外国人の子供も通いやすく、英語教育なども充実している園\r
など、様々な魅力ある施策を提供できるようになります。\r
\r
利用者側\r
バウチャー制度の導入により、選択の自由度が高まり、これまで認可外とされていた園も選びやすくなります。\r
園のキャパシティが十分広がれば、本来であれば１歳まで自分で育てたいものの、認可園の空きが４月しかないため泣く泣く０歳児で預けて復帰するということも少なくなります。\r
\r
働く先生側\r
現在は、補助金の制約上、保育士一人当たりの報酬がある程度決まっており、それが給与にも影響していますが、バウチャー制でより市場原理に任せた形になれば、より手厚い配置を行う園が増えたり、スキルが高い保育士がより高い報酬を得られるようになったりする可能性があります。

### この Issue で議論したいこと

バウチャー制度の導入の是非\r
解決すべき問題点やその対応などあれば議論いただけると幸いです。

### 調べたこと（裏付けとなる事実・ファクト）

https://www5.cao.go.jp/keizai3/2001/0706seisakukoka8-q.html

### 自由記述欄

_No response_`,comments:{totalCount:3},reactions:{totalCount:1},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-28T11:26:42Z"},{title:"左派か右派の表明",number:217,createdAt:"2024-06-28T05:51:44Z",url:"https://github.com/takahiroanno2024/election2024/issues/217",state:"OPEN",body:`### 政策ビジョン

民主主義

### 政策

東京都は日本で最も多い予算を持っている重要な地方自治体です。\r
東京都政がうまくいけば、日本の政治もまたうまくいくことでしょう。\r
日本の国政は残念ながら政権交代可能なものとはなっておりません。\r
地方自治体の選挙において、候補者がどちらの側につくのかを表明することは大事なように思います。\r
あなたは左派なのか右派なのかどちらか表明をお願いします。

### 必要だと思ったきっかけ

希望の党の騒ぎ以降、政権交代可能な状況でなくなってしまっており小池さんの選挙が始まった。

### なぜ必要か

日本の国政を政権交代可能なものにするため。

### この Issue で議論したいこと

地方自治体の選挙において左派と右派の表明は必要かどうか？\r
どうして、地方自治体の選挙では多くの候補者が、所属する政党を持たずに立候補するのか？\r


### 調べたこと（裏付けとなる事実・ファクト）

民主党政権以降、政権交代が起きていない。

### 自由記述欄

_No response_`,comments:{totalCount:4},reactions:{totalCount:0},labels:{nodes:[{name:"民主主義"}]},updatedAt:"2024-07-03T11:30:43Z"},{title:"弾道ミサイルへの対策",number:218,createdAt:"2024-06-28T05:55:10Z",url:"https://github.com/takahiroanno2024/election2024/issues/218",state:"OPEN",body:`### 政策ビジョン

医療・防災

### 政策

他候補ではシェルターの整備を行うと提言していますが、ミサイルへの対策は何を考えているのでしょうか。\r
地下を活用した整備なども考えられますが、逆に欠点も出てくると感じます。\r
情報に強い街にするのであれば、この機密情報を他国にわからない形で主要都市を守る方策が必要ではないでしょうか。\r
\r
防災領域での議論の中の一つとして検討しているのであれば、地震や避難所の問題とは全く違うアプローチになると思いますので、詳細を説明いただきたいです。

### 必要だと思ったきっかけ

日々のニュースを見て

### なぜ必要か

有事に備える必要があるため

### この Issue で議論したいこと

ミサイルへの対応

### 調べたこと（裏付けとなる事実・ファクト）

小池候補マニフェスト

### 自由記述欄

外交問題でもあるので公開できるものとそうでないものがあるともいますが、最低限のポージングはしても良いかと感じます`,comments:{totalCount:0},reactions:{totalCount:2},labels:{nodes:[{name:"医療・防災"}]},updatedAt:"2024-06-28T05:55:21Z"},{title:"東京都都知事選の予備選挙",number:219,createdAt:"2024-06-28T05:58:22Z",url:"https://github.com/takahiroanno2024/election2024/issues/219",state:"CLOSED",body:`### 政策ビジョン

民主主義

### 政策

東京都知事選はあまりに候補が多いので、アメリカ大統領選挙のように予備選挙を行います。\r
民主党と共和党といった分かれ方を日本はしていないので、左派か右派かを選んで予備選挙を行い、予備選挙で勝ち残った候補が本戦で選挙を行います。

### 必要だと思ったきっかけ

東京都知事選に候補者が多かったから

### なぜ必要か

候補者が多ければ多くの場合、票が割れてしまい、現都知事に有利になってしまい、金権政治に陥りやすいため。\r
予備選を行うことで金権政治に陥りづらくします。

### この Issue で議論したいこと

予備選が必要

### 調べたこと（裏付けとなる事実・ファクト）

https://dl.ndl.go.jp/view/download/digidepo_999909_po_064804.pdf?contentNo=1

### 自由記述欄

_No response_`,comments:{totalCount:2},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"民主主義"}]},updatedAt:"2024-06-29T10:28:19Z"},{title:"炭素という都市資源の有効活用",number:222,createdAt:"2024-06-28T12:06:37Z",url:"https://github.com/takahiroanno2024/election2024/issues/222",state:"OPEN",body:`### 政策ビジョン

経済, 医療・防災

### 政策

# 東京都における都市型農業推進と炭素固定化戦略\r
\r
## 1. 目標設定\r
- 都民の5%が自家消費する食料の1%を自給できる体制の構築を目指す。\r
\r
## 2. 都市農業の推進\r
### a) ビル屋上の有効活用\r
- 太陽光パネルと農園の併設を推進\r
- 屋上緑化条例の改正による農園設置の義務化検討\r
\r
### b) 空きスペースの活用\r
- 公共施設や学校の遊休地を利用した市民農園の拡充\r
- 民間所有の未利用地の一時的農地転用を促進\r
\r
## 3. 炭素固定化戦略\r
### a) 都市部における植物による炭素固定の推進\r
- 街路樹や公園の植栽計画の見直し\r
- 垂直緑化や壁面緑化の推進\r
\r
### b) 都市農業による炭素循環の促進\r
- 都市部の二酸化炭素を利用した植物栽培の研究支援\r
- 地産地消による食品輸送に伴う炭素排出の削減\r
\r
## 4. 農業教育と体験機会の創出\r
### a) 学校教育との連携\r
- 小中学校のカリキュラムに都市農業体験を導入\r
- 学校給食での地産地消の推進\r
\r
### b) 市民向け農業講座の開催\r
- 屋上農園や市民農園での栽培技術講習会の実施\r
- オンライン農業講座の提供\r
\r
## 5. 災害時対応力の強化\r
### a) 都市農業を通じた防災・減災\r
- 農園を活用した防災訓練の実施\r
- 災害時の食料供給源としての都市農園の位置づけ\r
\r
### b) コミュニティレジリエンスの向上\r
- 農業を通じた地域コミュニティの強化\r
- 災害時の相互援助ネットワークの構築\r
\r
## 6. 制度的支援\r
### a) 税制優遇\r
- 屋上農園設置に対する固定資産税の減免\r
- 都市農業従事者への所得税控除\r
\r
### b) 補助金制度\r
- 屋上農園設置費用の一部補助\r
- 都市農業用設備導入への助成\r
\r
## 7. 技術開発と産学官連携\r
### a) 都市型農業技術の研究開発\r
- 省スペース・高効率な栽培システムの開発\r
- AI・IoTを活用したスマート農業の推進\r
\r
### b) 大学・研究機関との連携\r
- 都市農業に関する共同研究プロジェクトの立ち上げ\r
- インターンシップ制度の創設\r


### 必要だと思ったきっかけ

マニュフェストに東京には資源がないとあったが人的資源や都市鉱山の他に、現在は無駄にしている大切な資源がある。炭素だ。\r
地球上の炭素は有限で限られており地殻の表層にしかない。\r
「全炭素貯蔵量約65,500ギガトン（Gt）のうち37,000Gtが深海」で人類がアクセスできる炭素も無限ではない。\r
\r
地球が過去に溜め込んだエネルギーを化石燃料として利用し、無駄に二酸化炭素や排熱として捨ててしまっているが、先進的農業（スマートアグリ）が進んだオランダでは農家は二酸化炭素を買って収穫量の増加にあてている。\r
\r
光合成は二酸化炭素(CO2)を糖(C6H12O6)や炭水化物(CmH2nOn)など高重合の炭素鎖にする反応である。\r
我々、炭素生物はこれらを分解、あるいはそれを分解してタンパク質や脂質として溜め込んだ生物を捕食することで、エネルギーを得て、二酸化炭素を吐き出している。\r
\r
人が現在捨てて処分に困っている二酸化炭素は、継続可能な社会を考えたとき必要不可欠な資源である。\r
\r
江戸時代は肥溜めが野菜の肥料として高価に取引されたが、これについても現代は雨水が多い時などは東京湾に垂れ流してしまっており、有効利活用の余地がおおいにある。

### なぜ必要か

「三年の蓄えなきは国にあらず」とはかつての天明の大飢饉の折にも諭された古来からの経験と示唆に富んだ一節。\r
\r
かつて世界的な飢饉をおこしたような破局的噴火のような自然災害や、軍事的目的による海峡封鎖などがおきた際には、最初に大規模な餓死者がでるのは日本であるとされています。それは、とりわけ東京となることでしょう。\r
日本はその食料自給率がカロリーベースで過去最低になるだけではなく、生産額ベースでも最低を更新しました。関東大震災や東京大空襲、かつて東京が経験したことがあるような事態にかつてないほど脆弱になりつつあります。\r
東京への一極集中が進みすぎたため、数百万人が数ヶ月規模の避難が必要となった折にそれを受け入れ可能な広域避難が非常に困難になっているからです。\r
リスク受け入れの体制がとれているとは言い難い。\r
人口のわずか5%の1%でも体制ができていれば緊急時にそれを10%にすることができるかもしれないが、もしそれが0%なら緊急時にどんなにリソースを分配したところで準備が足りなかったねとただ座して悔いる他ない。\r


### この Issue で議論したいこと

食料について考えようや

### 調べたこと（裏付けとなる事実・ファクト）

炭素量についてはぐぐりました

### 自由記述欄

政策のところはclaudeさんに形ととのえてもらいました`,comments:{totalCount:0},reactions:{totalCount:1},labels:{nodes:[{name:"医療・防災"},{name:"経済"}]},updatedAt:"2024-06-28T12:06:50Z"},{title:"Code for Japan との連携強化",number:223,createdAt:"2024-06-28T12:09:20Z",url:"https://github.com/takahiroanno2024/election2024/issues/223",state:"OPEN",body:`### 政策ビジョン\r
\r
行政\r
\r
### 政策\r
\r
Code for Japan との連携を強化する方針を示す。\r
\r
### 必要だと思ったきっかけ\r
\r
1. #198 をみて\r
2. 財源をどうするのかという指摘が複数のIssueで見られる\r
3. 安野さんの応援団の八面六臂の活躍をみて\r
\r
### なぜ必要か\r
\r
1. 集合知を、政策そのものの改善だけでなく改善するための仕組の改善にも活かすことを明示するため\r
2. システム開発コストを抑える案として提示できる\r
4. 市民の政治参加を促す1つの手段になること\r
\r
### この Issue で議論したいこと\r
\r
- マニフェストに記載するのに適しているかどうか（一段階メタな話なので）\r
- 特定の団体を名指しすることの是非（かといって類似団体は他にないような・・？）\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
 - Code for Japan のサイトで[「東京都」を検索](https://www.code4japan.org/search?keyword=%E6%9D%B1%E4%BA%AC%E9%83%BD) すると、コロナのダッシュボードくらいしか出てこず、現状はあまり連携していない、またはその情報を表に出していないよう\r
 - [Code For Tokyo 2.0](https://codefor.tokyo/) という下部組織(?)のサイトもあったが、共同代表者のプロフィールだけで活動実態がわからなかった\r
\r
### 自由記述欄\r
\r
_No response_`,comments:{totalCount:1},reactions:{totalCount:2},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-07-02T09:36:49Z"},{title:"聴覚障害者の学習環境",number:224,createdAt:"2024-06-28T13:43:48Z",url:"https://github.com/takahiroanno2024/election2024/issues/224",state:"OPEN",body:`### 政策ビジョン

教育・子育て

### 政策

聴覚障害を持つ子供の学ぶ場として聾学校を増やしてほしい。\r
\r
現在はインクルーシブ教育などもあるが、障害を持たない子供と持つ子供の間ではどうしても学習の遅れやコミュニケーションなどで難しい壁がある。\r
その原因としては言語があげられる。\r
\r
聞こえる人は耳から入るので自然に覚えるケースが多いが、聞こえない子供は目から入る情報のみになるため、目でわかる言語としての手話（日本語対応、日本手話）による教育が一番大事だと考える。\r
\r
手話を受けて学べる環境として聾学校があるが、東京都には少ない。\r
\r
都内の聾学校としては以下になる。\r
\r
対象の学年も場所によるが、中学からの選択肢がかなり狭くなる。\r
そのため、通学の負担が大きい。\r
付き添う親の負担もあり、仕事を辞めざるを得ないケースもある。\r
\r
大塚ろう学校	幼・小　豊島区\r
大塚ろう学校　城東分教室	幼・小　江東区\r
大塚ろう学校　城南分教室	幼　　　大田区\r
大塚ろう学校　永福分教室	幼・小　杉並区\r
立川学園	幼・小・中・高	立川市\r
葛飾ろう学校	幼・小・中・高	葛飾区\r
中央ろう学校	中・高	杉並区\r
\r
明晴学園　幼・小・中　品川区（私立）\r


### 必要だと思ったきっかけ

聾児の学ぶ環境、育つ環境も考えてほしいのに気づかれない、あるいは後回しになることが多い。\r
デフリンピックも来年に控えているが、聾に対しての理解が進んでいない。

### なぜ必要か

障害に関係なく誰でも自分らしく学べる環境の必要性

### この Issue で議論したいこと

聾学校は必要かどうか。\r
できれば当事者の意見が欲しい。

### 調べたこと（裏付けとなる事実・ファクト）

東京都の特別支援学校一覧\r
\r
https://www.kyoiku.metro.tokyo.lg.jp/school/special_needs_school/school_list.html

### 自由記述欄

_No response_`,comments:{totalCount:0},reactions:{totalCount:3},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-28T13:44:02Z"},{title:"企業内ハラスメント発生した際の、ブラック企業の経営者への罰則の強化",number:225,createdAt:"2024-06-28T14:07:29Z",url:"https://github.com/takahiroanno2024/election2024/issues/225",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

企業内のハラスメント行為を取り締まる組織の創設と、企業経営者への罰則の強化

### 必要だと思ったきっかけ

かつて上司によるハラスメント被害にあったから。\r
結局、雇われの身は、泣き寝入りすることが多かったから。

### なぜ必要か

ハラスメントなどが強く意識されるようになっているのに、ハラスメント行為を取り締まる組織がない。

### この Issue で議論したいこと

どうすれば職場からハラスメントが無くなるか。どうすれば泣き寝入りしなくても済むようになるか。

### 調べたこと（裏付けとなる事実・ファクト）

現行の労働基準監督署は労働基準法の観点からしか監査しない（労働基準監督署の人に聞いた）。\r
海外でもハラスメントをどう取り締まるかは重要問題になっている。\r
https://hipstergate.jp/column/harassment/

### 自由記述欄

特になし。`,comments:{totalCount:3},reactions:{totalCount:2},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-07-04T08:48:11Z"},{title:"常設実施必至型住民投票条例について",number:227,createdAt:"2024-06-28T14:33:09Z",url:"https://github.com/takahiroanno2024/election2024/issues/227",state:"OPEN",body:`### 政策ビジョン\r
\r
民主主義\r
\r
### 政策\r
\r
都民や都議会議員、都知事の発議を受けて、都民投票を行う常設の条例案を提出することを検討してほしいです。\r
\r
### 必要だと思ったきっかけ\r
\r
マニュフェストの民主主義の項で都民の都政への参加や都政の意思決定に参加できる場を作ると記されていて、その実装の一つとして、常設の実施必至型住民投票条例が有意義だと思ったから。\r
\r
### なぜ必要か\r
\r
### 現在の状況\r
- 地方自治法 第5章 74条 条例の制定・改廃の請求において、どの自治体であっても住民が「条例」の制定・改廃を首長に請求する権利が保障されているが、その請求は拒否することができる。\r
- より住民の意見を聞くために住民や議会、主張の発議を受けてその発議に対する住民投票を行う常設の条例を設けている自治体も存在する。(例：鳥取県)\r
### なぜ必要なのか\r
都政に対して直接民主制的な回路を条例として位置づけることによって、より都民による都政の参加が高まると考えられるから\r
### マニュフェストとの整合性\r
- 5.民主主義の③都民が都政に参加できる場づくりを補強する条例になると考える\r
\r
### この Issue で議論したいこと\r
\r
###  都知事になって条例案を提出するということをマニュフェストにするべきか？\r
###  常設の実施必至型住民投票条例の条例案の内容\r
- 発議をする条件(例:[鳥取県](https://www.pref.tottori.lg.jp/kenminsankaku/#:~:text=%E5%85%B7%E4%BD%93%E7%9A%84%E4%BA%8B%E9%A0%85-,%E3%82%A4%E3%80%80%E7%99%BA%E8%AD%B0%E6%A8%A9%E8%80%85%E3%81%A8%E7%99%BA%E8%AD%B0%E8%A6%81%E4%BB%B6,-%E6%8A%95%E7%A5%A8%E3%81%AE%E7%99%BA%E8%AD%B0))\r
- 投票権を持つ人の属性\r
- 都民投票の結果の取り扱い(結果を直ちに受け入れるのか、結果を尊重までなのか)\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
常設の実施必至型住民投票条例を都道府県単位で唯一設けている鳥取県の[条例文](https://www.pref.tottori.lg.jp/kenminsankaku/)\r
現在の状況に関して調べるときに参考にした[サイト](https://init-jp.info/system/)\r
\r
### 自由記述欄\r
\r
_No response_`,comments:{totalCount:4},reactions:{totalCount:4},labels:{nodes:[{name:"民主主義"}]},updatedAt:"2024-07-01T15:18:42Z"},{title:"男性に対する子宮頸がんワクチン接種の無償化に関して",number:228,createdAt:"2024-06-28T18:49:08Z",url:"https://github.com/takahiroanno2024/election2024/issues/228",state:"CLOSED",body:`### 政策ビジョン

医療・防災

### 政策

男性に対する子宮頸がんワクチン接種の無償化を行ってほしいです。

### 必要だと思ったきっかけ

子宮頸がんワクチンを打とうとしたとき女性は無償で打つことができるのに対して男性は有償であると知ったタイミングです。

### なぜ必要か

子宮頸がんは女性が発症するものであるが、男性・女性どちらもワクチン接種をすることで防げるものです。現在女性に対して子宮頸がんワクチン接種が無償で行われているのに対して、男性は費用が全額負担となっています。これは子宮頸がんを打とうとしている男性に対して打つハードルを作っていると思います。

### この Issue で議論したいこと

子宮頸がんワクチン接種に関して

### 調べたこと（裏付けとなる事実・ファクト）

- [東京都保険委員局がHPVワクチンの男性への接種について](https://www.hokeniryo.metro.tokyo.lg.jp/kansen/hpvdansei.html)\r
- [子宮頸がんの予防効果が高い9価HPVワクチンが公費で接種可能に](https://www.gov-online.go.jp/useful/article/202306/1.html)

### 自由記述欄

_No response_`,comments:{totalCount:3},reactions:{totalCount:9},labels:{nodes:[{name:"医療・防災"}]},updatedAt:"2024-06-29T15:53:27Z"},{title:"未来の都の健康に投資する。エビデンスに基づいたきちんと伝わる食農教育プログラムと産業創出",number:230,createdAt:"2024-06-29T07:49:22Z",url:"https://github.com/takahiroanno2024/election2024/issues/230",state:"OPEN",body:`### 政策ビジョン\r
\r
経済, 医療・防災, その他\r
\r
### 政策\r
\r
持続可能な社会の最大の障壁は少子高齢化とそれに伴う社会不安です。病気になってからの対策よりも、病気にならないようにする方が費用は少なく効果は高く、本人も、家族も幸せです。天引きされる税金や保険料も減ります。しかし、誰もが分かっていても実行されていません。確実にやってくる少子高齢化の対策に、なるべく早い段階で予算を投入して効果を高めます。\r
\r
【例えば】\r
 生活習慣病のリスクを減らす、健康寿命を伸ばす、と考えられている食習慣や地域、食品が存在します。まず科学的根拠をきちんと調査して整理します。確かなものは全面に出して消費を促したり、参加プログラムを作成します。曖昧なものは都を消費地のモデルとして疫学調査やRCT（ランダム化比較試験）などで検証し、研究を組み込んでいきます。\r
\r
【産業創出の種】 \r
都民の健康確保の副産物として、日本の食と健康のエビデンス、都民に伝えて行動してもらうという教育プログラム、実際の医療費削減、社会保障費の軽減といったデータを積み重ねます。詳しくありませんが、投資利益率（ROI）なども出せるのではないでしょうか。随時適切な論文として発表していき、それを根拠に次のようなコンテンツを強化、生み出していきます。\r
\r
【高齢化対策をコンテンツに】\r
 日本は世界最先端の高齢化国家です。逆に捉えれば、これから高齢化を迎える先進諸国にはその対策が売れます。輸出、観光パッケージ、国産農畜産物や和食文化のブランディングなど、汎用性が高いのではないでしょうか。根本的な社会の病気だからです。これにより、一次産業や観光産業の地域が自立でき、国の負担が減ります。そして東京はこの分野でも世界に対してプレゼンスを高めることができます。\r
\r
\r
### 必要だと思ったきっかけ\r
\r
きっかけは危機感です。\r
\r
私は少子高齢化の地域で農産物の産地にかかわる仕事をしています。東京は一番の消費地ですが、この産地と地域の存続が危ぶまれています。生産者が所得を確保できないからです。そしてそれが東京が都民のために行動することで解決ができると感じています。\r
\r
生産者は食品メーカーのように価格転嫁ができないため、生産費の高騰を価格に反映できず、所得は圧迫されています。生産性を上げたり、食料安全保障を訴えて支援を求めることも必要ですが、それだけでは不十分です。生産物本来の価値を理解してもらい、胸を張って対価を得ることが大切です。そのためには、生産物が「消費者の健康に寄与し、社会の持続に貢献する」と理解してもらうための社会的なマーケティングが必要です。\r
\r
例えば、温州みかんを習慣的に食べ続けることで、生活習慣病の発症リスクが減ったという疫学調査があります。しかしこれは一般的に知られておらず、周知されていません。（売り場で人気のヤクルト１０００をいつも羨ましく思います）\r
\r
地域の暮らしは仕事と一体であり、所得がなければ産業も地域も持続できません。少子高齢化はこの持続可能性を脅かす最大の要因であり、東京も例外ではありません。早急な対策が必要であり、その成功例は世界で求められるでしょう。\r
\r
\r
\r
\r
### なぜ必要か\r
\r
・持続が危うい最大の要因は少子高齢化です。 \r
・構造上、ほぼ確実な未来で、東京ですら避けられません \r
・この対策は早ければ早いほど効果が高いです\r
 ・少子高齢化対策の成功例はこれから需要が間違いなくあります \r
・病気になってからの対策より、病気にならない方が健全だし安いし合理的とわかっているが、それがなされていない \r
・農業基本法が改正され、食料安全保障の面から国産農畜産物が見直される良い機会\r
・東京が都民の将来の健康を確保するだけでなく、新しい産業創出や地域の経済も支えることができるから\r
\r
### この Issue で議論したいこと\r
\r
１）これは産地側の意見です。都民や消費地のみなさんがこうした意見を理解してもらえるか。見当違いの考えではないか。\r
 \r
２）こうした食習慣の推進は過去からされているはずです。伝えたけれど伝わっていない状態。\r
伝わらない最大の原因は何か？どうしたら伝わって、行動に移してもらうか？\r
\r
３）タバコ税や海外のソーダ税など、健康に悪影響を与える可能性のある超加工品に税金をかけ、そのお金で健康増進予算を確保すると手法があります。これは日本でも有用な案なのか。 \r
\r
４）調査の結果、実は健康に効果がないというものも出てきます。公表するべきだが、同じくマイナスイメージを避けたいという圧力をどう避けるか。\r
\r
 ５）加工品や飲料などの産業、一部の医療薬品業界にはマイナス面が予想されます。全体としては良くても局所的には不都合なジレンマはどう乗り越えるか。\r
\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
国民医療費は増加しており今後も増加する\r
厚生労働省　国民医療費の概況　令和3年度は45兆円　30年前の2倍以上　GDPの8.1% https://www.mhlw.go.jp/toukei/saikin/hw/k-iryohi/21/dl/data.pdf\r
\r
日経新聞2024/1/22 医療費介護費　2040年で国民負担27兆円増加 https://www.nikkei.com/article/DGXZQOUA208VB0Q3A221C2000000/\r
\r
野村證券　生涯医療費の50%は70歳以降に利用される\r
 https://www.nomura.co.jp/wp/kcba/cs007/\r
\r
現役世代の社会保証費は増え所得を圧迫している \r
協会けんぽ　年々上がる健康保険や介護保険の利率\r
 https://www.kyoukaikenpo.or.jp/g7/cat330/hokenryouritunohennsenn/\r
\r
日本食は地中海食を超える健康食としてのポテンシャルがあるが、それを裏付ける論文数が極端に少ない \r
厚生労働省 佐々木敏氏講演資料\r
https://www.mhlw.go.jp/stf/shingi/2r9852000003537s-att/2r985200000353cp_1.pdf\r
\r
みかんを1日3個食べると、ある種の生活習慣病の発症リスクが低下する可能性がある。今後は健康寿命との相関性を調査 \r
同志社女子大学　三ヶ日町アクティブエイジング研究 \r
https://www.dwc.doshisha.ac.jp/event_report/13515\r
\r
砂糖税（ソーダ税）で税収アップ ニッセイアセットマネジメント　\r
国民の健康を考えて課税！？健康対策で税収アップを狙う国々\r
 https://note.nam.co.jp/n/n4e2399c23262\r
\r
ウェルビーイング市場は大きい　抗加齢のニーズは高い 朝日新聞　\r
市場規模12.5兆円と600兆円　日米の格差、原因は？　\r
https://www.asahi.com/sdgs/article/14722945\r
\r
LIFESPANでブームになった高価なNMN　科学的根拠は伝わっているか \r
日経BP　「NMN、ブームへの警鐘」、今井眞一郎ワシントン大学卓越教授 https://project.nikkeibp.co.jp/behealth/atcl/feature/00004/112900384/?P=1\r
\r
メーカーと違い農産物生産者は価格転嫁が難しい \r
三菱総合研究所　農産物の価格は上げられない\r
 https://www.mri.co.jp/knowledge/column/20230925.html\r
\r
基幹農業従事者は高齢　間もなく大量の離農がはじまる\r
農林水産省資料 \r
https://www.maff.go.jp/j/wpaper/w_maff/r3/r3_h/trend/part1/chap1/c1_1_01.html\r
\r
\r
### 自由記述欄\r
\r
長いですね。AIで要約してください。笑\r
\r
安野さんとそのチームの未来が楽しみです。\r
何かお力になれればと思い、初めてGitHubの画面を開きました。\r
\r
すでに少子高齢化の地域に住んでいます。年齢構成だけなら東京よりも15年先の未来に行っているでしょうか。今2024年、「豊かで余裕のあった30年前に20年前に、もっとこうしておいてほしかった、こっちにお金と時間を向けておいてほしかった」そう、思うことがたくさんあります。 　\r
\r
地域で多数を占める高齢者層に、今いかにアレルギーを抱かせずにITの階段の一歩を踏み出してもらうか、これを考えながらDXを進めています。どこでも、まずこれをやらないといけないのです。スマホを見せて「まずいじってみてください。そうそう指で画面を触るんですよ。」そんなアプローチです。 　\r
\r
幸いなことにまだ地域が、自立できているのは課題があっても地域産業があり、また、生活習慣により健康寿命が長く、お達者な高齢者の方がいるからです。これは、これからも求められます。 　\r
\r
マニフェストにあるように、東京においても、少子高齢化の構造だけは避けられません。ただ、そこで暮らす都民の皆さんは、年とともに学びを深めた、心身ともに健康的で知的で先進的な格好いいシニアであってください。地球に開店した日本のアンテナショップとして世界から認められた首都を望みます。\r
\r
デジタル民主主義。安野さんの提言は実現される未来です。そして私達のような地方にある行政や自治会運営にも適用されるでしょう。そのときに、その素晴らしい技術の恩恵を受けることができるように頑張ります。応援しています。\r
`,comments:{totalCount:2},reactions:{totalCount:0},labels:{nodes:[{name:"医療・防災"},{name:"経済"},{name:"その他"}]},updatedAt:"2024-07-02T12:20:40Z"},{title:"学校プールの注水自動化",number:231,createdAt:"2024-06-29T08:35:11Z",url:"https://github.com/takahiroanno2024/election2024/issues/231",state:"OPEN",body:`### 政策ビジョン

教育・子育て

### 政策

学校プールの注水作業において、自動的な記録、監視、注水停止の仕組みを導入することで「人間の不注意によるミス」の発生機会をなくします。\r


### 必要だと思ったきっかけ

プールの水を止め忘れ、水道代が無駄になる事故がニュースになりました。\r
本ニュースより、水道代はもとより注水開始から停止まで待つ教員の時間も効率化するべきと考えました。

### なぜ必要か

校務合理化のため。

### この Issue で議論したいこと

プール注水作業における人的ミスの防止方法は一つではないと考えます。\r
また、水泳の授業自体を、プール管理を含めて外部委託するほうが効率的という視点もあります。\r
より良い方法が議論されればと考えます。

### 調べたこと（裏付けとなる事実・ファクト）

_No response_

### 自由記述欄

_No response_`,comments:{totalCount:3},reactions:{totalCount:1},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-07-02T10:08:04Z"},{title:"高校教育の改革",number:232,createdAt:"2024-06-29T09:11:17Z",url:"https://github.com/takahiroanno2024/election2024/issues/232",state:"OPEN",body:`### 政策ビジョン

教育・子育て

### 政策

学校の時間割は　会計　数学　英語　IT　 歴史(国内国外)　物理化学(薬学多め)　政治経済　第二外国語　統計　に変えるべき　　

### 必要だと思ったきっかけ

日本の問題点は高校の教育にお金をかけないことだから

### なぜ必要か

日本の問題点は高校の教育にお金をかけないことだから

### この Issue で議論したいこと

授業の内容

### 調べたこと（裏付けとなる事実・ファクト）

_No response_

### 自由記述欄

_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-29T09:11:30Z"},{title:"太陽光パネル設置義務化条例の撤回",number:233,createdAt:"2024-06-29T09:14:00Z",url:"https://github.com/takahiroanno2024/election2024/issues/233",state:"OPEN",body:`### 政策ビジョン

行政

### 政策

新築住宅等に「太陽光パネル設置義務化（2025年4月～）」条例の撤回及び、ソーラーパネル削減の提言

### 必要だと思ったきっかけ

・住宅価格の高騰に拍車をかける\r
・長期で見た場合のメンテナンスコストを勘案すると、災害が起きない場合は負担増となる。\r
・東京都ではまだ少ないとしても、山々に点在してる事業のためのソーラーパネルの数々が痛々しい。\r
・森林という非常に大切な自然資源を削減することはおかしい。\r
・葛西臨海公園のように、住民の意見が取り入れられるに強行されることへの強烈な違和感

### なぜ必要か

・災害のリスクを考えた場合、必要とも言えるが個々の住宅事情や財政状況を\r
考えると義務化して、負担を増やすことが都民のためになるとは思えない。\r
・一時的なCO2削減以上に、廃棄コストや廃棄のための大気汚染のことが考えられていない。

### この Issue で議論したいこと

・ソーラーパネルの設置、特に義務化がが本当に必要だと思うのか。\r
・地球の温暖化削減に、人工的なソーラーパネルと森林のどちらが必要か。

### 調べたこと（裏付けとなる事実・ファクト）

https://www.koho.metro.tokyo.lg.jp/2023/01/04.html

### 自由記述欄

_No response_`,comments:{totalCount:4},reactions:{totalCount:3},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-07-02T15:18:56Z"},{title:"障害者福祉のデジタル化",number:234,createdAt:"2024-06-29T10:51:01Z",url:"https://github.com/takahiroanno2024/election2024/issues/234",state:"OPEN",body:`### 政策ビジョン\r
\r
医療・防災\r
\r
### 政策\r
\r
・障害者手帳等のマイナンバーカード搭載\r
・自立支援医療等、都・市区町村が実施主体となる医療費助成における医療証等のマイナンバーカード搭載を早期に実施\r
・都営交通無料乗車券のスマホ搭載\r
\r
\r
### なぜ必要か\r
\r
現在、障害者の方々が行政・民間の福祉サービスを受けようとする場合、紙書面を複数持ち歩く必要があります。障害を負っている上にこうした書面の管理や持ち運びに労力を割く現状は障害者の方々にとって少なからぬ負担となっています。\r
\r
デジタル活用を推進する立場として、こうした部分にこそ光を照らし、東京都が主導して、市区町村や医療機関、民間事業者等を巻き込んで早期の実施を図るべきと考え、提案いたします。\r
\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
医療証については、デジタル庁において令和5年度から一部の自治体でマイナンバーカード搭載を先行的に実施しており、令和8年度から全国での運用を開始する見通しとなっています。\r
\r
### 自由記述欄\r
\r
_No response_`,comments:{totalCount:4},reactions:{totalCount:7},labels:{nodes:[{name:"医療・防災"}]},updatedAt:"2024-07-02T11:47:57Z"},{title:"(女性)子宮頸がんワクチンのキャッチアップ接種における年齢制限の拡充と9価タイプの追加に関する要望",number:235,createdAt:"2024-06-29T12:10:17Z",url:"https://github.com/takahiroanno2024/election2024/issues/235",state:"OPEN",body:`### 政策ビジョン\r
\r
医療・防災\r
\r
### 政策\r
\r
HPVワクチンのキャッチアップ接種に関する年齢制限の見直し(1997年生まれ以前の人も対象にする)\r
\r
### 必要だと思ったきっかけ\r
\r
安野さんのマニフェストに「男性のHPVワクチン任意接種に対する全額助成」が追加されたことを知り朗報だと思いました。\r
\r
一方、女性の接種についても、子供期に接種を逃した人への追加措置には年齢制限があり、全ての女性が恩恵を受けられる状態ではないというのが現実です。特に、これから出産・子育て世代となる20代後半以上の世代がキャッチアップの範囲から抜け落ちているのが痛いです。これを機に女性のHPVワクチンについてもスポットが当たればいいなと思います。\r
\r
### なぜ必要か\r
\r
・現在、平成９年度生まれ～平成19年度生まれ（誕生日が1997年4月2日～2008年4月1日）の女性で子供期の定期接種を逃した人は、後から接種（キャッチアップ接種）を受けられる制度があります。\r
\r
・しかし、子供期に接種を受けられず、この年齢制限にも該当していないためにキャッチアップできない人も一定数おり、自費接種へのハードルはかなり高いのが現状です。\r
\r
・例えば現状だと、1995年生まれの女性が任意接種を逃し、大人になってから自費で9価ワクチンを3回接種したい場合、10万円程度かかってしまいます。\r
\r
・キャッチアップ接種とは、2013年6月〜2022年4月までの期間、HPVワクチンの積極的勧奨が中断されていた影響により接種を逃した方への救済策です。\r
\r
・HPVワクチンは2013年以降に定期接種の対象になったものの、それ以前は任意接種(努力義務)であったため、2012年以前(今のアラサー世代以上が該当します)においても接種できていない方は少なくありません。\r
\r
・接種回数が多く(当時は3回)、接種間隔も長期にわたる(2〜4ヶ月)ことから、全3回をコンプリートしている割合は低いのが現状です。\r
\r
・2020年度のHPVワクチン接種率でも1回目15.9％、２回目11.6%、３回目7.1%程度と推定されています。\r
\r
・2022年度からHPVワクチンの積極的勧奨が本格的に再開されましたが、取りこぼされた世代へのキャッチアップが不十分です。\r
\r
・なお2023年4月以降は2価、4価に加え9価ワクチン(シルガード9)が定期接種に追加されましたが、それ以前の世代は9価は自費で受けるしかなく、キャッチアップ接種においても9価ワクチンの追加を希望します。\r
\r
### この Issue で議論したいこと\r
\r
子宮頸がんワクチン接種に関して\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
・WHO   日本でHPVワクチンの接種遅れに対する声明(日経)\r
https://www.nikkei.com/article/DGXLASDG23H16_T21C15A2000000/#:~:text=%E3%80%90%E3%83%AF%E3%82%B7%E3%83%B3%E3%83%88%E3%83%B3%253D%E5%85%B1%E5%90%8C%E3%80%91%E4%B8%96%E7%95%8C%E4%BF%9D%E5%81%A5,%E3%81%99%E3%82%8B%E5%A3%B0%E6%98%8E%E3%82%92%E5%87%BA%E3%81%97%E3%81%9F%25E3%2580%2582\r
\r
・日本産婦人科学会　HPVワクチンの勧奨再開を求める声明\r
https://www.jsog.or.jp/medical/588/\r
\r
・厚生労働省　キャッチアップ制度について\r
https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou/hpv_catch-up-vaccination.html#:~:text=%E5%B9%B3%E6%88%9025(2013)%E5%B9%B4%E3%81%8B%E3%82%89,%E3%81%97%E3%81%9F%E6%96%B9%E3%81%8C%E3%81%84%E3%82%89%E3%81%A3%E3%81%97%E3%82%83%E3%81%84%E3%81%BE%E3%81%99%25E3%2580%2582\r
\r
・HPVワクチン接種率について\r
https://www.jmedj.co.jp/journal/paper/detail.php?id=23843#:~:text=%E3%81%9D%E3%81%AE%E5%BE%8C%E3%80%812022%E5%B9%B44%E6%9C%88,%E4%B8%8A%E6%98%87%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B1%EF%BC%89%25E3%2580%2582\r
\r
\r
### 自由記述欄\r
長々と書いてしまいましたが何が言いたいかというと、男性の任意接種のマニフェストはできたけれど、そうすると男性は(今のところ年齢制限なく?)無料で受けられるけど、女性の任意接種世代は年齢制限があって自費のままなので制度のバグというか公平感が損なわれそうということです、、\r
\r
29歳女性`,comments:{totalCount:0},reactions:{totalCount:10},labels:{nodes:[{name:"医療・防災"}]},updatedAt:"2024-06-29T13:30:48Z"},{title:"海外留学制度の拡充",number:236,createdAt:"2024-06-29T12:47:44Z",url:"https://github.com/takahiroanno2024/election2024/issues/236",state:"OPEN",body:`### 政策ビジョン

教育・子育て

### 政策

高校や大学から海外留学が経験できる制度を拡充して欲しいです

### 必要だと思ったきっかけ

大学ではトビタテ留学のような制度がありますが、実態としては高所得者層が多く、\r
貧困層の学生はバイトをしながら余裕のある成績確保ができていないのではないかと感じています。\r
\r
大学が国立のものが多いのであれば、高校からその経験を持てるようにすることで、均一な体験を促せるのではないかと感じました。

### なぜ必要か

視野を広く持つことで自分の人生の選択肢に納得感と自信を持てるようになると思いました

### この Issue で議論したいこと

留学制度のあり方についての検討

### 調べたこと（裏付けとなる事実・ファクト）

小池候補のマニフェスト

### 自由記述欄

甘えではありますが、私も大学の時に留学したかったなと思っています。`,comments:{totalCount:0},reactions:{totalCount:3},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-29T12:47:55Z"},{title:"都立公園の原則禁煙化と密閉型喫煙所の設置",number:237,createdAt:"2024-06-29T13:21:29Z",url:"https://github.com/takahiroanno2024/election2024/issues/237",state:"OPEN",body:`### 政策ビジョン\r
\r
教育・子育て\r
\r
### 政策\r
\r
・都立公園を原則として喫煙禁止とする\r
・都立公園に密閉型喫煙所を設置する\r
\r
### 必要だと思ったきっかけ\r
\r
現在、建築局所管の都立公園は、原則として喫煙可能であり、例外として受動喫煙のおそれがある場所での喫煙を禁止しています。\r
※市区町村が別途、条例で別途定めを置いている場合を除く\r
\r
一方、この都立公園の喫煙に関する注意事項についてXにてアンケートを行ったところ、その文意を正確に読み取れた方は13%という結果でした。多くの方々は注意事項に示された喫煙制限をより過度に捉えていました。\r
\r
### なぜ必要か\r
\r
前述のような誤読によって、ルールを守っている喫煙者と誤読した利用者との間でトラブルが生じる危険性があり、またトラブルまで行かなくとも利用者が心健やかに過ごせる環境とはならない可能性があります。\r
\r
この問題への対処について、受動喫煙防止の意識の浸透度合いや子育て環境においてより徹底された受動喫煙防止策を図る観点を踏まえれば、現状のルールを維持して注意事項をより明確化するのではなく、都立公園を原則禁煙として密閉型喫煙所の設置を行うことが適切と考え、提案いたします。\r
\r
これにより、喫煙者にとっても非喫煙者にとっても、そしてなにより子ども達にとっても、都立公園がより快適な憩いの場となるものと考えます。\r
\r
### この Issue で議論したいこと\r
\r
_No response_\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
Xにおけるアンケート調査（回答数778件）\r
\r
【読解問題】\r
次の一文は、ある公園の注意事項です。この公園の敷地について、次の4つの選択肢のうち、この一文から読み取れる最も適切なものをひとつ選びなさい。\r
\r
「喫煙は、多くの利用者が集まる場所・広場やお子様の近くなど、受動喫煙のおそれがある場所などではご遠慮いただいております。」\r
\r
原則喫煙可能である（13%）\r
原則禁煙である（42%）\r
全面禁煙である（23%）\r
喫煙可能区域と禁煙区域が設定されている（22%）\r
\r
https://x.com/sakaeinfo/status/1800772618657919348 （問題編）\r
https://x.com/sakaeinfo/status/1803309521315451291 （解説編）

【費用】
移動可能な閉鎖型喫煙所（コンテナ型トレーラーハウス）の維持費用は、概ね1台1000万円強/年です。都内の市区町村が駅前などに設置しており、その大半は都予算によって賄われています。
都立公園では地代が不要ですので、より安価に設置できます。

【自治体との関係】
現状においても市区町村が都立公園に喫煙所を設置しようとする場合、スペースの貸し出しに応じる姿勢がとられています。しかし、都立公園は原則として喫煙可能であるため、市区町村が喫煙所を設置する動機に欠けています。\r
\r
### 自由記述欄\r
\r
_No response_`,comments:{totalCount:0},reactions:{totalCount:1},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-07-04T06:16:26Z"},{title:"東京都独自での教員確保・処遇改善による、公教育の抜本的改善",number:239,createdAt:"2024-06-29T15:53:43Z",url:"https://github.com/takahiroanno2024/election2024/issues/239",state:"OPEN",body:`### 政策ビジョン

教育・子育て

### 政策

東京都は公教育をさらに改善させるために、下記の3点を実現するべきです。\r
\r
1. 正規教員のさらなる確保\r
正規の教員を現状よりもさらに多く採用する。\r
2. 独自の手当等、教員給与の改善\r
独自の手当を創設するなどして東京都の教員給与を改善する。\r
3. 奨学金の創設・返済の補助\r
東京都で教員を目指す方向けの奨学金の創設や、都で採用する方の返済を補助する。

### 必要だと思ったきっかけ

昨今の報道でよく見られる「教員不足」のニュースがきっかけです。特に東京都の教員採用の競争率は関東の他県と比較しても低い状態が続いています。人が足りないのであれば単純に言って予算をかけて増やすべきで、他県などの事例を見ると様々に教員確保のための施策は予算があれば実現可能であることから、東京都として率先してやるべきことではないかと考えました。

### なぜ必要か

現場の負担感を解消するとともに、教育の質をさらに向上させるためです。\r
\r
現状では、現場の教員の多くが「非正規」という不安定な立場で働いています。この非正規依存の仕組は国の義務教育費国庫負担制度に起因するものです。児童生徒数などから算出される国の定める定数の分しか国庫では負担されないため、都道府県としてはミニマムに正規教員を確保しておいて、一時的に追加で必要となる分は非正規で賄うというやり方が合理的な構造となっていることからです。\r
\r
しかし、非正規では雇用契約に期限があることや待遇面で劣っていること、研修などの機会も正規と比較して少ないこと等から教育の質という面で課題があります。また、非正規という雇用形態であることで、安定的な採用も困難な状況です（これが教員不足という状態です）。\r
\r
他方で、国費に頼らなくても独自に都道府県の予算で正規教員（非正規でなく）を採用することは可能です。さらに、教員の待遇を都として補助することも不可能ではありません。これらは教員の安定的な確保につながり、現場の負担感の解消、教員の質の向上に寄与すると考えられます。

### この Issue で議論したいこと

東京都における公教育に関して、どのような施策があれば児童生徒が楽しく学ぶことができ、現場の方々も意欲を持って働くことができるようになるのかについて議論できればと思っています。わたしとしては、上記に書いたとおり非正規依存の問題が様々な面で波及しているように見えており、この課題は財政的に余裕があればなんとかなるものなので東京都が率先して取り組んで、他の都道府県や国に範を示すべき問題ではないかと考えております。\r


### 調べたこと（裏付けとなる事実・ファクト）

下記に4つのnote記事を書いており、ファクトは記事中に記載があります。1,2は背景説明で、3が東京都としてやるべきことを具体的に書いた記事です。\r
1.「教員不足」の現状は？その実態と原因について整理してみました｜ほづみゆうき https://note.com/yukihoz/n/n775901068123\r
2.「教師不足」の現状と、それに対する対策はどうなっているのか？全国と東京都の状況を見てみました｜ほづみゆうき https://note.com/yukihoz/n/n4bd1bde8c4b1\r
3.「教員不足」に対して、東京都としてできること。予算をゴリゴリ使って、正規教員の確保や給与改善など進めるべきでは？｜ほづみゆうき https://note.com/yukihoz/n/n5c1fef2d8989

### 自由記述欄

東京都中央区にて区議会議員をやっている者です。新たな選挙戦の取組について、非常に興味深く拝見していただいております。暑い中本当に大変かと思いますが、残りの選挙戦頑張ってください。`,comments:{totalCount:5},reactions:{totalCount:2},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-07-04T23:21:32Z"},{title:"海洋資源活用の促進",number:240,createdAt:"2024-06-29T23:45:34Z",url:"https://github.com/takahiroanno2024/election2024/issues/240",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

海底資源、海洋資源の計画的な利用促進のため、例えば東京海洋大学をコアとしたスタートアップが集積するエコシステムを構築し、世界から研究者、技術者が集まる基盤を作り、南鳥島周辺の海底資源の調査法の精度向上、効率化、資源化するための手法の開発などを促進する

### 必要だと思ったきっかけ

東京都が保有して、世界の他の大都市（NY、ロンドン、パリ、上海など）にない特徴として海底資源、海洋資源に着目した。

### なぜ必要か

都の財政、都民の平均所得向上や、東京の魅力を増大させるため

### この Issue で議論したいこと

国を中心に進めているPJに都が協力することで、東京都の財政や人材集積に対してプラスになるかどうか。国と都の協力や役割分担としてあるべき形とは。

### 調べたこと（裏付けとなる事実・ファクト）

海洋研究開発機構を中心に政府において、南鳥島周辺のレアアース採掘に関する開発が進んでいる。\r
https://www.jamstec.go.jp/sip2/j/\r


### 自由記述欄

_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-29T23:45:44Z"},{title:"子育て支援に関する若者への適切な権限の移譲について",number:241,createdAt:"2024-06-29T23:58:50Z",url:"https://github.com/takahiroanno2024/election2024/issues/241",state:"OPEN",body:`### 政策ビジョン

教育・子育て

### 政策

マクロな少子化対策ではなく、子育てのしやすさの改善ということに関して、都に30代、40代の子育て現役世代からなるタスクチームを作り、十分な権限を与え、今の不便な点を細かく改善し続けられる体制を構築する。

### 必要だと思ったきっかけ

少子化対策や子育て環境改善に関する議論は多く且つ長くされているが、実効的施策につながっていないと感じている。

### なぜ必要か

政治の主導権が60代、70代にある現状において、どうも上から目線で「子育て世代に対して、費用補助や利便性の改善を与えてあげている」いるというような意識を感じることがある。若者の政治参加が積極的でないと云われる要因となっているとも感じる。課題に直面している世代が、自分事として解決していくことが、無駄の無い、実効的な施策の立案と実行につながると期待している。

### この Issue で議論したいこと

少子化対策と子育て環境の改善は、一緒に議論されることが多いが、それぞれのKPIは異なる。であれば、まず結果が出しやすいと考えられる「子育て環境の改善」にフォーカスしたKPIを設定し、結果を出していくことが、若者の政治参加につながるなど、波及効果も期待できる。

### 調べたこと（裏付けとなる事実・ファクト）

_No response_

### 自由記述欄

例えば、東京都では待機児童はかなり減った。一方、入園時期が固定されているとか、未だ利用者の利便性を考えた柔軟なものとなっていると聞いてもいるので、まだまだ改善点は多いのではないかと思うが、改善点を一つ一つ論じるより、適切な権限移譲がまず重要なのではないかと考えています。ただ十分な調査に基づいた提案ではなく、ジャストアイデアでもあるので、多くの議論により、より良い提言になる切欠となると良いと思いました。`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-29T23:59:01Z"},{title:"AIブロードリスニングに対応したシンクタンク機能の拡充",number:242,createdAt:"2024-06-30T00:06:13Z",url:"https://github.com/takahiroanno2024/election2024/issues/242",state:"OPEN",body:`### 政策ビジョン

行政

### 政策

ブロードリスニングにおいて提言される様々なアイデアを、シミュレーションして、評価、整理する機能や組織を作る

### 必要だと思ったきっかけ

ブロードリスニングにて、提言をするときに、より活発にアイデアを出してもらうには、提言者にとっても検証が進んでいないと感じている、未だ未熟なアイデアも多いと思う。着目されるアイデアを、実効する前に数値シミュレーションなどで事前検証できる機能や組織があると、提言も活発になるのではないか。

### なぜ必要か

AIがデータドリブンな手法であるとすると、双璧をなすアルゴリズムドリブンな手法も更に強化することで、AIの有効性が更に増大すると考えらえる。

### この Issue で議論したいこと

_No response_

### 調べたこと（裏付けとなる事実・ファクト）

大正時代の東京市長の後藤新平は、科学的政策のための調査機関の拡充を目指したが、実現に至らなかった。現在の都庁、都政においても、調査して政策を事前検証、事後検証する機能は未だ不十分なのではないか。

### 自由記述欄

_No response_`,comments:{totalCount:2},reactions:{totalCount:2},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-07-02T07:02:04Z"},{title:"ガバメントクラウドファンディングの導入",number:243,createdAt:"2024-06-30T00:13:54Z",url:"https://github.com/takahiroanno2024/election2024/issues/243",state:"OPEN",body:`### 政策ビジョン

行政, 民主主義

### 政策

ふるさと納税制度を活用し、寄附金の使い道をより明確にしたガバメントクラウドファンディングを導入する。\r
予算がつかなかった都民からの政策提案や知事が行いたい施策を対象として寄付を募る。\r
\r
\r
東京都によると令和５年度のふるさと納税による都民税の減収額は６７５億円であり、そのうち1%でも寄付されれば、6億円施策に使うことができる。（杉花粉を減らす施策があれば私は限度額以上に寄付をする）\r
東京都では現状のふるさと納税に反対の立場を示しているが、すぐに変えられないなら活用してもいいのではないだろうか。\r


### 必要だと思ったきっかけ

- 都民による政策提案が増えると、おそらく他の施策との兼ね合いで予算がつかなくなってしまうものが生まれてしまう可能性がある。\r
- 財源にはみんな興味がある（ https://github.com/takahiroanno2024/election2024/issues?q=is%3Aissue+is%3Aopen+%E8%B2%A1%E6%BA%90 ）\r
- ふるさと納税の仕組みの問題は東京都の見解に100％賛同で、せっかく集めた税金が未来への投資以外に使われてしまうのはもったいない\r
- スギ花粉のせいで基本的人権が守られていない

### なぜ必要か

マニフェストにもこのように書かれており、民意が予算に反映される場合、その公平性が問題となる。\r
(https://github.com/takahiroanno2024/election2024/blob/646e2bdee88d616e949a178953f0b14142ec7919/docs/manifest/democracy.md?plain=1#L114-L115)\r
\r
しかし、寄付によるものであれば公平性は関係なく、現在ある仕組みでその施策に対してどれくらいの人がどれくらいのお金を出しても実現して欲しいのかということが可視化でき、寄付が目標額に到達すれば実現できる。

### この Issue で議論したいこと

- 現実的に可能か\r
- マニフェストにどう反映すべきか

### 調べたこと（裏付けとなる事実・ファクト）

ふるさと納税に対する東京都の見解：https://www.tax.metro.tokyo.lg.jp/furusato/index.html\r
八尾市のガバメントクラウドファンディングの取り組み：https://www.city.yao.osaka.jp/0000046856.html

### 自由記述欄

_No response_`,comments:{totalCount:0},reactions:{totalCount:3},labels:{nodes:[{name:"民主主義"},{name:"行政"}]},updatedAt:"2024-06-30T00:14:06Z"},{title:"東西均衡のとれた防災都市としての発展、投資について",number:244,createdAt:"2024-06-30T00:21:33Z",url:"https://github.com/takahiroanno2024/election2024/issues/244",state:"OPEN",body:`### 政策ビジョン

医療・防災

### 政策

東京は東側に災害リスクが集中（直下型地震に伴う火災発生のハザードは23区の東北及び南西域に集中）。当該地域には（他地域同様に）高齢者も多い。災害リスクの高い地域に住んでいる高齢者が多摩地区に移住することを支援することにより、災害発生時の対応の負担を事前に小さくする。具体的には、引越費用の補助、多摩地区の空家の斡旋、品川―橋本間のリニアモーターカーを先行開業させ、橋本から多摩地区（立川など）へのモビリティを改善した上で、リニアモーターカー割引定期券を該当者に配るなど（移転後もコミュニティとの接続性を維持する）

### 必要だと思ったきっかけ

直下型地震は確実にくるといわれる割に、進んでいる対策が限られているから。

### なぜ必要か

災害発生弱者を、災害リスクの高い場所から事前に動かしておく（強制ではなく、十分なインセンティブが有る状態で）ことが出来ないか検討することは、災害発生時の防災担当者のリスクを小さくする上でも重要。

### この Issue で議論したいこと

リスクの集中を解消するために活用できるアセットが何か、波及効果も試算に含めたトータルコストの小さい方法を調査すること。災害対策を対策として実行するとコストが大きい。他に解決したいこと、投資的側面があることと、組合わせることで、現実的な案が無いかを議論することが良いのではないかと思う。

### 調べたこと（裏付けとなる事実・ファクト）

東京被害想定デジタルマップ\r
https://www.bousai.metro.tokyo.lg.jp/taisaku/torikumi/1000902/1023294/index.html

### 自由記述欄

_No response_`,comments:{totalCount:0},reactions:{totalCount:2},labels:{nodes:[{name:"医療・防災"}]},updatedAt:"2024-06-30T00:21:47Z"},{title:"海外企業勤務者へのフルリモート勤務環境の整備",number:245,createdAt:"2024-06-30T00:35:18Z",url:"https://github.com/takahiroanno2024/election2024/issues/245",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

定住型インバウンドを増やすために、海外の組織で勤務する人が都内のフルリモート勤務を実現するための現状の改善点を調査して、それを改善する。

### 必要だと思ったきっかけ

きっかけとしては、子育て環境の改善の視点から、もっとフルリモート勤務が増えると良いと思っている。ただ、東京都の企業の従業員がフルリモートを実施すれば、勤務場所は郊外に移っていくことになり、目先で見れば東京都への経済効果はネガティブ。そこから発想を変え、海外の人が、勤務先を変えずに東京都フルリモート勤務できる環境を作る、広報する、などが有効ではないかと思うに至った。

### なぜ必要か

円安の進展や、食、治安などの点において、海外の人から見て東京は居住地として魅力がある。都にとっても、それらの人が日常の生活の中でお金を落としてくれることは、安定したインバウンドの増加とみなせるような経済効果がある。

### この Issue で議論したいこと

_No response_

### 調べたこと（裏付けとなる事実・ファクト）

未だ十分な調査を行っていない。ニーズ、現状の障壁など。

### 自由記述欄

富裕層インバウンドとして、資産家ではない、現役世代を増やすには、今の東京の魅力をどう増やし、どのような障害を減らしたら良いのか。例えばシンガポールなどと比較しながら論じることができれば、良いのではないかと思う。`,comments:{totalCount:0},reactions:{totalCount:2},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-06-30T00:35:31Z"},{title:"マニフェスト等の分かりやすい見せ方の提案",number:246,createdAt:"2024-06-30T03:33:10Z",url:"https://github.com/takahiroanno2024/election2024/issues/246",state:"OPEN",body:`### 政策ビジョン

民主主義

### 政策

ネット民主制の実現という大きなテーマを持っているにしては、マニフェスト自体のインパクトが薄いという印象を受けました。\r
これは、マニフェストのスローガン1〜4までは既存の政治家の多くが表明しているようなありふれたテーマであることと、\r
最も大きなテーマであるスローガン5の「民主主義：高速な民意反映」が官僚の上から目線のような硬い表現で心に響かないことが原因だと思います。\r
\r
まずはネット民主政、デジタル民主政を実現しなければスローガン1〜4のテーマも民衆目線のものにはならないと思うので「ネット民主制の実現」ということを最初に大きく持ってくるべきだと思います。\r
\r
一般の有権者は仕事や生活で忙しいのでマニフェストを読むこと自体が大変です。\r
それなのに一番重要なことが一番最後に書いてあって難しい表現であれば、ほとんどの人はそこまでたどり着けないでしょう。\r
\r
なので一番重要なことや一番のウリは一番最初に、インパクトのある平易な表現で書く必要があります。\r
\r
そこでそのような観点でいくつかキャッチコピーを考えてみました。\r
\r
・メインのキャッチコピーの例（大きな文字で最初に）\r
\r
### 「あなたの声を、ネットで、都政に。」\r
### 「これからは、あなたが、都知事です！」\r
### 「言いたいことが、都政に届く。」\r
\r
メインのキャッチコピーは「何だろう？」と興味を引くような表現が重要です。まずは興味を持たれないとその続きやマニフェストにまでたどり着いてもらえません。\r
\r
・サブのキャッチコピーの例（メインの下に中ぐらいの文字で）\r
\r
### 「都民全員が参加する都政の実現」\r
### 「スマホ・PCで誰でも都政に参加できます」\r
### 「最新技術で、都民全員で考え、全員で決める都政を実現」\r
\r
サブのキャッチコピーで具体的な内容をイメージできるような補足説明を行います。\r
\r
都民に訴えたい内容をより分かりやすく、伝わりやすくするために、上記のようなコンセプトでWebサイトやポスター、チラシ、マニフェスト等を作成することを提案します。\r


### 必要だと思ったきっかけ

マニフェストが分かりにくい、インパクトが薄いと思ったため。

### なぜ必要か

分かりやすく、伝わりやすい表現で理解、支持を集め、ネット民主政、デジタル民主政を早期に世界に導入するため。

### この Issue で議論したいこと

スローガン、キャッチコピー、マニフェスト文面等で他にも良いアイデアがあればコメントしてください。

### 調べたこと（裏付けとなる事実・ファクト）

https://github.com/takahiroanno2024/election2024

### 自由記述欄

_No response_`,comments:{totalCount:0},reactions:{totalCount:1},labels:{nodes:[{name:"民主主義"}]},updatedAt:"2024-06-30T03:33:21Z"},{title:"近隣県との連携による南関東圏子育て構想",number:247,createdAt:"2024-06-30T04:02:21Z",url:"https://github.com/takahiroanno2024/election2024/issues/247",state:"OPEN",body:`### 政策ビジョン\r
\r
教育・子育て\r
\r
### 政策\r
\r
東京の特に23区は全般に「子育て」に向いていない地域と言わざるを得ない。人口密度が高すぎることに起因してさまざまな問題が生じる。地価が高騰し家賃・住宅価格が高すぎるため共働きが必須で経済的余裕がない。子どもが遊ぶためのスペースは狭小で、園庭も持たない保育園や幼稚園も多い。交通量が多く、空気が悪いし危険も多い。治安や人混みなど子育て世帯は移動するだけでもケアすべきことが多すぎる。すべて解決不可能かつ子育てを阻む根本的な問題であり、いくら政策・資金を投下しても解決し得ない。\r
\r
一方で、23区は企業や大学が集積していて、産業を興す・学を修めるという点においては日本において唯一無二の高い価値を提供する地域である。東京23区から1時間も移動すれば埼玉、千葉、神奈川、東京西部の人口密度が相対的に小さく子育てしやすい都市圏が広がっているのだから、産業・学業の東京と子育ての近隣地域、という役割分担を積極的に進めて、むしろ東京は子育て政策から経済政策、学生支援政策にリソース配分を大きくシフトすべき。\r
\r
具体的には\r
\r
- 学生が都市の中心に居住できる安価で利便性の高い住宅の供給\r
- 子育て地域と23区の境目に位置する区部外縁部にシェアオフィスの積極誘致\r
- 子育て世代のリモートワークを促進するべく通信インフラの設置更新支援、中小企業へのDX支援\r
\r
などの施策を進めるべき。特に東京都の中心にある大学に通う大学生が大学の近隣に廉価で住めない状況は、本来学問に割くべき貴重な時間的リソースを、長すぎる通学時間やアルバイトに割かせてしまう。住宅が狭くても問題なく人口密度の高い環境の中で活発に活動するべき学生が郊外に一人暮らしをし、本来ゆとりのある居住面積を欲している子育て世帯が共働きで高い家賃を払って23区の狭小なタワマンに住む、という非合理的なそれぞれの状況を是正する方向に考えるべき。\r
\r
### 必要だと思ったきっかけ\r
\r
_No response_\r
\r
### なぜ必要か\r
\r
_No response_\r
\r
### この Issue で議論したいこと\r
\r
_No response_\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
東京都の近隣県（埼玉、千葉、神奈川）の出生率は東京都と比べて高い水準にある。\r
\r
### 自由記述欄\r
\r
_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-06-30T04:15:07Z"},{title:"自治会や町内会の会費徴収の慣習を廃し自治体からの活動支援金に一本化。時代に合った在り方を考える",number:249,createdAt:"2024-06-30T12:12:56Z",url:"https://github.com/takahiroanno2024/election2024/issues/249",state:"OPEN",body:`### 政策ビジョン\r
\r
行政\r
\r
### 政策\r
\r
自治会や町内会への参加を任意としつつ会員から個別に会費を徴収する慣習は廃止。自治体から自治会・町内会へ住民の人数にあわせた運営補助金を支給する。すでに自治体ごとに制度化、支給されている活動支援金があれば統合。同時に、収支はクラウド会計へ統一し透明化を図る。システムは東京都が整備し、他の自治体でも活用できるようプラットフォーム化。東京都の変革を起点に地方へと波及させていく。\r
\r
### 必要だと思ったきっかけ\r
\r
自治会組織へ委員として参加した数年の経験がありつつ以前から考えていたことであるが、数日前、SNSのX上で話題となったスレッドを見たのが本提案の直接的なきっかけである。\r
https://x.com/miu_miu1004/status/1806882635710657004\r
![download](https://github.com/takahiroanno2024/election2024/assets/173521616/1eb3a867-14e9-40cf-ab3b-105dc5b91ac5)\r
\r
\r
### なぜ必要か\r
\r
自治会や町内会は地方自治法において認可地縁団体であると規定されているが、それらが地方自治において自治体の一部機能を代替する重要な役割を担っているのは誰の目にも明らか。その役割や運用ルールが曖昧かつ自治体ごとに異なり、その状態が長らく放置されていることで様々な不和や軋轢が生じており、その負担が団体側に全てのしかかっている状況。\r
\r
会費を納付している会員から見れば、会費を納付していない非会員は、地縁団体による地域の環境保全や治安維持活動などの成果へのフリーライダーである。方や非会員となれば、地縁団体が維持管理するごみ集積所の利用を断られるケースもあると聞く。非会員であるために住民税を納付していながらごみ収集などの標準的な住民サービスを他の住人同様に受けられないのは不平等である。この事実をもってすれば、参加は建前上「任意」でありながら半強制的なものと映るのも致し方ない。\r
\r
核家族化、単身世帯増加、個人主義拡大とともに地域活動への参加率ならびに関心の低下が続く一方で、防災や防犯、高齢化を念頭に、地域コミュニティの存在価値や意義が議論されその自治機能の強化が望まれる状況であることからも分かるとおり、地縁団体の存在はこの先も必要不可欠である。それゆえに、今このタイミングで可及的速やかに見直すべき課題であると考える。\r
\r
### この Issue で議論したいこと\r
\r
団体の運営は従来通りボランティアを前提としつつ、一案として、団体ごとのDAO（分散型自律組織）を創設し一定の役割をもって関わった者には活動を通じて得た収益の一部を報酬として分配してもよいのではとも考える。コミュニティ活動やバザー、企業と連携した催し物、自治体からの委託による活動など。若手の積極参加、精力的な活動を促すために自治会が「自ら稼ぐ」という新たな発想が必要では、とも考える。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
![9ebd26e7-f8ab-4003-a7ca-e95929167248](https://github.com/takahiroanno2024/election2024/assets/173521616/6d8ba944-c0a3-47a3-bd12-18dbce8670f7)\r
\r
◆◆◆\r
\r
【総務省資料】地域コミュニティに関する研究会（地域コミュニティに関する研究会／令和4年4月）より\r
https://www.soumu.go.jp/main_content/000819371.pdf\r
\r
![4444d7b0-c89e-4177-8385-d0f42ecf6c9a](https://github.com/takahiroanno2024/election2024/assets/173521616/313b4c04-0d9c-469e-b765-13c05ad4efcc)\r
![download](https://github.com/takahiroanno2024/election2024/assets/173521616/5a1a6801-17c3-4bd2-8ee6-82fb226bb62c)\r
![6a1b3716-2b25-408f-8758-e2bcea851c6b](https://github.com/takahiroanno2024/election2024/assets/173521616/b735e905-7c05-4dd1-84a4-6418817d97d9)\r
\r
\r
### 自由記述欄\r
\r
_No response_`,comments:{totalCount:4},reactions:{totalCount:2},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-07-05T01:06:06Z"},{title:"公共のベンチ・デスクを設置・排除ベンチの撤廃",number:251,createdAt:"2024-06-30T17:04:24Z",url:"https://github.com/takahiroanno2024/election2024/issues/251",state:"OPEN",body:`### 政策ビジョン\r
\r
行政\r
\r
### 政策\r
\r
街中に公共のベンチとデスクを設置する。具体的な条例案などは未検討。\r
\r
### 必要だと思ったきっかけ\r
\r
家出同然のような形でノマド生活をしていた頃、街中に気軽に腰を落ち着けられる場所がなくて非常に困った。民間の施設内にはベンチなどあるが、営業時間などの制約を受ける。\r
休むためにもカフェに入る必要があったりなど、不要な出費を強いられる。\r
\r
### なぜ必要か\r
\r
何も資産を持たない人でも24時間いつでも腰を落ち着けて、物事を考えることができる環境というものが必要だと思う。\r
\r
### この Issue で議論したいこと\r
\r
具体的な条例案など\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
_No response_\r
\r
### 自由記述欄\r
\r
類似のツイートがあったので置いておきます\r
https://x.com/yanpoyan/status/1807282292764835963?s=46&t=lMNf_ULI7YQKyuYMSSXqRg`,comments:{totalCount:7},reactions:{totalCount:6},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-07-04T16:40:43Z"},{title:"LGBTQ＋カップルにおける妊娠時の助成について",number:252,createdAt:"2024-06-30T17:04:44Z",url:"https://github.com/takahiroanno2024/election2024/issues/252",state:"OPEN",body:`### 政策ビジョン\r
\r
教育・子育て\r
\r
### 政策\r
\r
パートナーシップを宣言しているカップルに対する都による妊娠の助成\r
\r
例えば、東京都で行われている不妊検査等助成事業の対象を「夫婦」という枠組みから拡大し、パートナーシップを宣誓しているカップルに対し、精子提供するパートナー・母胎となるパートナーがいる際、”助成の対象とする“など\r
\r
### 必要だと思ったきっかけ\r
\r
近年、テレビでも取り上げられているように、LGBTQ+の人たちの間でも「子どもを持つ」という選択肢を取る人が増えています。日本では同性婚も現状としては認められておらず、LGBTQ+のパートナーを持つカップル間の子供がいる世帯についての具体的なデータは、わかりませんが、アメリカにおいては、過去の国勢調査により、子どものいる同性カップル世帯の割合が約15%(※ここには離婚前などに授かった子どもなども含む)いることがわかっています。ダイバーシティがうたわれる中、LGBTQ+についての理解も少しずつ進み、東京都のパートナーシップ宣誓制度での受理証明書交付組数は令和6年5月31日時点で1,222組いらっしゃいます。勿論、「子どもを持つ」という選択肢も里親制度や養子縁組、海外での代理母など様々なものがあるかとは思いますが、東京都内でパートナーシップ宣誓制度を利用する人々の中でも、今後、「自分で子どもを作りたい」と思い、そうした選択肢を選ぶ方たちは増えていくのだろうと思い、こうした議論が必要なのではないかと思いました。\r
\r
### なぜ必要か\r
\r
実際のLGBTQ＋のカップルの人たちの中でも、妊娠に至るまでで本来受けられるべき助成などが受けられていないのではないかと感じたから。\r
\r
### この Issue で議論したいこと\r
\r
これは、主にゲイカップルやレズビアンカップル、トランスジェンダーの男性・シスジェンダーの女性カップルなどでの場合ですが、自力での子作りをする際、シリンジ法での子作りが行われることがあります。シリンジ法は低予算で、尚且つ、性的な交渉なく妊娠することができる方法であり、専用のキットも売られています。勿論、低予算で出来ることもシリンジ法の魅力の一つではあると思いますが、なぜ、LGBTQ+のカップルがこうした方法を取るのかと言えば、その一部には正規のルートでの提供型生殖補助医療を受けることができないからだということも挙げられています。また、不妊治療に関しても、不妊症が日本産科婦人科学会編集の産科婦人科用語集で「生殖年令の男女が妊娠を希望し、ある期間避妊すること無く性交渉をおこなっているにもかかわらず、妊娠の成立を見ない場合」と定義づけられているため、ありのままのセクシャリティとしては治療が受けられないといったケースがあると言います。こうした人々に、東京都として、なにか補助できる枠組みはないのでしょうか？もし、パートナーシップ宣誓制度によってカバーが出来るとしたら、それはどういった形としてカバーが出来るのでしょうか？\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
・東京都パートナーシップ宣誓制度の利用者数\r
https://www.soumu.metro.tokyo.lg.jp/10jinken/sesaku/sonchou/partnership.html\r
\r
・提供型生殖補助医療や不妊治療についての状況\r
https://www.jsps.go.jp/file/storage/general/jissyakai/data/saitaku/h30_houkoku/3_ninomiya_seika.pdf\r
\r
・不妊症の定義\r
https://www.jaog.or.jp/lecture/6-不妊症の定義・分類・治療法/\r
\r
### 自由記述欄\r
\r
今回の都知事選の公約を見ましたが、紙面上で見る限りは多様性に対して公約がなかなか見当らず......一人では答えを導き出せないため、こうして皆さんと考えられる場があることを活用させていただければとイシューを立てさせていただきました。他力本願にはなってしまいますが、できれば、多くの人に考えてほしいです。お願いします。`,comments:{totalCount:0},reactions:{totalCount:7},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-07-02T03:44:12Z"},{title:"現役世代の投票率向上施策について",number:253,createdAt:"2024-07-01T08:03:53Z",url:"https://github.com/takahiroanno2024/election2024/issues/253",state:"OPEN",body:`### 政策ビジョン\r
\r
行政\r
\r
### 政策\r
改定：2024.07.03 13:38\r
20代～30代の政治に対する興味関心を高め、投票に対する意識改革・行動変容・新しい文化醸成を促す\r
※打ち手の部分は議論でもアイディアをいただけると嬉しいです…\r
　\r
1. 選挙日については都の休日を設ける\r
2. 期限前投票の範囲拡大（大学構内・オフィス街など場所の拡大＆スマホプッシュ告知、21:00まで受付など時間の拡大）\r
3. 都内で選挙について議論できる場の創造（オンライン、オフライン）\r
4. 投票済証を活用したインセンティブの拡大\r
例：「センキョ割」の範囲拡大（https://senkyowari.com/）\r
└　各自治体で投票済証明書を発行し、提示することで参加店舗からメリットが得られるようにする。\r
　　可能であれば補助金制度を整え、外食に限らずデリバリーサービス等でも割引などのサービス提供\r
\r
※コメントいただいていた罰金、選挙制度の変更、オンライン投票は都政の前に公職選挙法改正などの\r
　国を巻き込んだステップが必要と認識したため、もし安野さんの方で実現可能そうな部分があれば是非。\r
\r
### 必要だと思ったきっかけ\r
\r
・東京都でも若年層（20～30代）の投票率が低い（引用元：下段参照）\r
・現役世代の選挙・政治・都政への意識が低く、せっかく現役世代向けの施策が出てきても知らない人すらいる\r
・主な要因は下記が挙げられる\r
>【 18～29歳代の棄権理由（複数回答）】\r
> 　1. 選挙にあまり関心がなかったから（48.1％）\r
> 　2. 政党の政策や候補者の人物像など、違いがよくわからなかったから（37.0％）\r
> 　3. 仕事があったから（33.3％）\r
> 　4. 重要な用事（仕事を除く）があったから（20.4％）\r
> 　5. 適当な候補者も政党もなかったから（18.5％）\r
> 　6. 私一人が投票しなくても同じだから（13.0％）​\r
> 　7. 選挙によって政治はよくならないと思ったから（13.0％）​\r
> 引用元：下に記載\r
\r
### なぜ必要か\r
\r
・世代間に不平等・偏りのない都政の実現するため\r
・選挙の構造上、投票率・投票数が高い層を意識した施策が優遇されてしまうため\r
\r
### この Issue で議論したいこと\r
\r
・東京に住む現役世代（20～30代）の政治的関心を高めるためにはどうすればいいか。\r
・ひいては投票率を上げるためにはどうすればいいか\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
・令和2年都知事選における年代別投票率は、20代41%・30代49%といずれも半数以下に対し、60代以降の投票率は6割越えと、若年層・高齢層で投票率に開きがある。\r
https://www.senkyo.metro.tokyo.lg.jp/uploads/senkyobetu_suitei_ichiran3.pdf\r
\r
・18～29歳の棄権理由（30～40代もほぼ同等）\r
公益財団法人明るい選挙推進協会 第26回参議院議員通常選挙全国意識調査(発行　令和5年3月） P.42\r
https://www.akaruisenkyo.or.jp/wp/wp-content/uploads/2011/07/26san.pdf\r
\r
### 自由記述欄\r
\r
データから「若年層は政治に関心がない」傾向が強いとわかりますが、「関心」をさらに分解するとどのような要素になるのでしょうか。\r
自立して間もない学生時代、働き始めた社会人若手時代などは自分の身の回りにある「制度」やそれによる分断、不均衡には気付きにくいのではないかと思います。私は自分が置かれている状況の「不均衡」「不平等」への怒りから政治に関心を持つようになりましたが、もっと若い世代が能動的に政治についての情報を集めるようなきっかけにはどんなものがあるのかな…と思案しております。\r
\r
政策に限らず、若年層が政治や都政に関心が持てない要因の分析など、いろいろなご意見をいただけると嬉しいです。`,comments:{totalCount:6},reactions:{totalCount:3},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-07-03T22:05:16Z"},{title:"GitHubを活用した東京都と地方自治体の連携施策",number:254,createdAt:"2024-07-01T10:22:49Z",url:"https://github.com/takahiroanno2024/election2024/issues/254",state:"OPEN",body:`### 政策ビジョン

行政, 民主主義

### 政策

今回の東京都知事選挙2024向けにGitHubのIssue機能を通じた政策提言を受け付けていますが、その仕組みを地方自治体向けに提供することで、地方自治体に特化した課題や、都政と共通した課題についても吸い上げ・管理することができるように思いました。\r
\r
【提案内容】\r
GitHubの仕組みを活用した東京都と地方自治体の連携\r
\r
<該当アジェンダ>\r
　【民主主義】高速な民意反映\r
<具体例>\r
　・該当のテーマに関連施策として「自治体向けGitHubの提供」を追加\r
　・各自治体にGitHubなどのデジタルツール運用担当を選出してもらい、市民にリンクを提供する\r
　・GitHubの運用マニュアルをもとに市民や自治体職員が感じている課題を収集・Issueを起票\r
　・起票したIssueの「分野」ごとに定例会議の場などでIssueの読み合わせ・政策への反映を行う\r
\r
![GitHubの仕組みを活用した東京都と地方自治体の連携](https://github.com/takahiroanno2024/election2024/assets/174267285/f6443e48-e3a3-4d11-a774-49205d3d1fce)\r


### 必要だと思ったきっかけ

今回安野さんのGitHubを活用した取り組みを通じて、特に都民の声によるIssueからは様々な分野での意見があがっているとお見受けします。\r
地方でも課題やそれに対する取り組みが進められているものの、政策に関する資料がネット上の異なる環境でアップロードされていたり、住民の声をどこに投げかけるのか・どのように管理されているのかが自治体ごとに運用が異なり、効率的な管理ができていないように感じました。\r
東京都と地方の自治体とで連携を進めていく上で、まずは市民の声を集め・課題を整理するフローを共通化することで、東京都と地方自治体の議論がしやすい環境を作る一例として提案させていただきました。

### なぜ必要か

東京都と地方自治体の効率的な課題共有と連携を実現するため。\r
また、それにより都市と地方の政策により発生する格差をできる限り解消するため。

### この Issue で議論したいこと

東京都と地方自治体の効率的な連携・協働

### 調べたこと（裏付けとなる事実・ファクト）

GitHub Issue機能

### 自由記述欄

_No response_`,comments:{totalCount:1},reactions:{totalCount:8},labels:{nodes:[{name:"民主主義"},{name:"行政"}]},updatedAt:"2024-07-01T13:42:59Z"},{title:"教科書バリアフリー法に基づく特定図書等（デイジー教科書など）がある教科書を優先して採択する",number:257,createdAt:"2024-07-01T13:12:35Z",url:"https://github.com/takahiroanno2024/election2024/issues/257",state:"OPEN",body:`### 政策ビジョン\r
\r
教育・子育て\r
\r
### 政策\r
\r
東京都の教育長は、教科書の採択にあたって、教科書バリアフリー法に基づく特定図書等（とくにDAISY教科書）が提供されているかどうかを考慮しなければならない。特定図書等が遅滞なく提供されている教科書を採択することが望ましい。提供されていないか、提供されていても大きな遅滞がある教科書については採択しないことが望ましい。\r
\r
### 必要だと思ったきっかけ\r
\r
教科書バリアフリー法に基づく特定図書等を作成するボランティアの苦労を見聞きした。\r
\r
### なぜ必要か\r
\r
教科書バリアフリー法に基づく特定図書等は、障害のある児童生徒及び日本語に通じない児童生徒にとって有益であるにもかかわらず、ボランティアによる献身的な作業によって作成されている。この作業には多大な労力が掛かり、特定図書等の児童への提供も遅れがちとなる。\r
\r
教科書バリアフリー法に基づく特定図書等の有無が東京都での教科書採択のとき考慮されるようになれば、事態は劇的に変わることが予想される。教科書会社はボランティアに進んで協力するようになり、ボランティアの負担が大幅に軽減され、すぐれた特定図書等が遅滞なく提供されるようになるだろう。\r
\r
### この Issue で議論したいこと\r
\r
_No response_\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
[マルチメディアデイジー活用事例集](https://www.dinf.ne.jp/doc/daisy/book/daisytext.html)\r
\r
### 自由記述欄\r
\r
_No response_`,comments:{totalCount:6},reactions:{totalCount:4},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-07-03T10:21:40Z"},{title:"福祉避難所の現状把握と周知",number:258,createdAt:"2024-07-01T14:06:53Z",url:"https://github.com/takahiroanno2024/election2024/issues/258",state:"OPEN",body:`### 政策ビジョン

医療・防災

### 政策

災害時に一般の避難所での生活が難しい障害者や高齢者がいます。福祉避難所の現状把握と平常時からの周知徹底をお願いします。

### 必要だと思ったきっかけ

東日本大震災では、障害のある方が避難所での生活を諦めなくてはいけない事態が発生しました。また、2024年3月11日付日本経済新聞の記事によれば、「首都直下地震で最大震度7が想定される東京都江東区のカバー率は1.4%にとどまる。」とのこと。（記事内にカバー率の定義の記載はないが、要支援者に対する収容可能人数の比率と思われる）

### なぜ必要か

誰も取り残さないという観点から、災害時に弱者となる高齢者や障害者が安心して過ごせる仕組みを整えてほしい。また、その情報を、テクノロジーの力で分かりやすく伝えてほしい。

### この Issue で議論したいこと

福祉避難所の現状を見える化し、まずは避難所が足りない市区町村の現状（何故少ないのか、増やすにはどうしたらいいのか）を把握したい。

### 調べたこと（裏付けとなる事実・ファクト）

◆2024年3月11日付 日本経済新聞\r
災害弱者538万人、福祉避難所入れない　市町村7割で不足\r
https://www.nikkei.com/article/DGXZQOUE158910V10C24A2000000/\r
◆#障害者を消さない | ヘラルボニー（障害のある人のための災害情報まとめ）\r
https://emergency.heralbony.jp/

### 自由記述欄

_No response_`,comments:{totalCount:0},reactions:{totalCount:2},labels:{nodes:[{name:"医療・防災"}]},updatedAt:"2024-07-01T14:07:06Z"},{title:"エッセンシャルワーカーの待遇改善・業務効率化に向けた施策について",number:261,createdAt:"2024-07-02T08:49:19Z",url:"https://github.com/takahiroanno2024/election2024/issues/261",state:"OPEN",body:`### 政策ビジョン

教育・子育て

### 政策

医療・介護・福祉・保育などに従事しているエッセンシャルワーカーの方の待遇改善の方法を検討したいと考えています。\r
以下のような案が考えられると思っています。\r
* １）最低賃金の向上\r
    * わかりやすく向上させられる一方、事業所自体の売り上げが増えない限りでは、経営圧迫してしまうことに繋がりかねない\r
* ２）処遇改善加算など既存の加算について、算定された場合に都からさらに助成金を追加する\r
* ３）上記に近しいが、待遇改善に向けた補助金を設定する\r
    * 保育士におけるキャリアアップ助成金\r
    * 保育士が住宅補助がある基礎自治体があるように、住宅補助を拡充していく\r
* ４）よりDXによる業務効率化に向けて、まだ導入が進んでいないところに補助を加える\r
    * 既存のICT助成金に加えて、導入のインセンティブを進める。\r
    * 導入時の負担を軽減するために、ICT支援員を派遣する

### 必要だと思ったきっかけ

#130 , #114 #120 などエッセンシャルワーカーの待遇改善をより望む声が多い\r


### なぜ必要か

エッセンシャルワーカーの方が従事している業種のニーズは高まる一方、成り手の数が足りなく、有効求人倍率が開いている状況が続いています

### この Issue で議論したいこと

提案した方策についてのご意見や、他の施策についての意見を広く募集したいです。

### 調べたこと（裏付けとなる事実・ファクト）

- [東京都保育等キャリアアップ補助金](https://www.fukushi.metro.tokyo.lg.jp/kodomo//jigyo/kyaria-hoiku.files/r6crssgaiyo.pdf)\r
- [【令和5年度ICT導入補助金】今年は拡充が決定！都道府県別申請受付状況まとめ\r
](https://www.nn-kaigo.jp/column/column37/)\r


### 自由記述欄

_No response_`,comments:{totalCount:1},reactions:{totalCount:5},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-07-02T08:54:59Z"},{title:"少子化対策にむけた女性のキャリア支援の充実",number:262,createdAt:"2024-07-02T08:57:52Z",url:"https://github.com/takahiroanno2024/election2024/issues/262",state:"OPEN",body:`### 政策ビジョン

教育・子育て

### 政策

主に少子化対策へ寄与することを目指して，下記をマニフェストに盛り込むことを提案します\r
・すべての女性の正規雇用の増加\r
・産後の女性のキャリア支援\r
・正規雇用の女性の雇用形態維持

### 必要だと思ったきっかけ

令和5年の人口動態調査が発表され、東京都の合計特殊出生率0.99となったことが大きく報道されました．少子化対策は都が最優先で取り組まなければならない喫緊の課題であることは間違いありません．\r
\r
これまで都は子育て支援金をはじめ，多くの少子化対策を行ってきました（1）．国の調査で，妊娠出産を望まない理由として最も多く挙げられているのは「経済的理由」であり（2），様々な助成金の取り組みはこうした問題に対処しているように思われます．しかしそれでも少子化対策の効果が十分に得られているとが言い難い現状を鑑みると，これまでの支援策では不十分だった部分があると考えられます．\r
その最たるものが，女性のキャリア支援ではないでしょうか．\r
都内の雇用状況を見ると、男性の正規雇用が約8割に対して，女性の正規雇用は依然として5割前後に留まっています（3）．非正規雇用は貧困意識と密接に関わっていることが知られており，すなわち産み控えの原因である「経済的理由」に直結します．また正規雇用の女性においても，出産・育児を経て非正規雇用や無職に転じる割合が少なくなく（4），こうした女性の雇用状況がもたらす将来や収入への懸念は，出産や育児に大きな負の影響をもたらしている可能性があると言えます．\r
\r
一般に，女性の就労率は出産期に一度低下し，育児が落ち着いた時期に再び上昇するというM字カーブを描きます．出産を機に自ら離職を選ぶ女性は3〜4割にのぼり，その後子育てが一段落した時点で再就職したとしても正規雇用に戻れない女性が多いとされています（6）．\r
こうした女性の雇用状況を改善し，世帯収入の底上げを図ることで貧困感を払拭しなければ，いくら一時的な給付金や育業制度の整備をしても，2人ないし3人の子供育てるという長期的な経済的不安の改善にはつながりません．

### なぜ必要か

上記のような視点が現在のマニフェストには欠けており，追加で議論することが望ましいと考えます．

### この Issue で議論したいこと

現在都ではキャリアアップ助成金を用いた正社員化支援を企業向けに行っておりますが，こうした取り組みを特に産後の女性においてさらに推し進め，夫婦が2人目3人目の子供を不安なく産めるような経済基盤の確立をサポートすべきです．\r
また女性向けキャリアチェンジ支援事業を行って女性の正規雇用を促す取り組み(定員500名)もありますが，これだけでは十分とは到底言えません．あらゆる女性がしっかりと自立したキャリアを形成し，貧困や将来の不安により子供を産むことを諦めない社会を作るためには根底から社会を変える取り組みが必要です．長期的な視点からいえば，そもそも雇用のスタートライン，すなわち初職の時点から女性の正規雇用を増やすことが最も重要だと考えます．女性の経済力の充実および社会的自立が十分でないまま，部分的な助成金やワークライフバランスへの支援を行なっても，それは本質的に問題の解決にはなり得ないからです．

### 調べたこと（裏付けとなる事実・ファクト）

（1）国立社会保障・人口問題研究所「第16回出生動向基本調査（結婚と出産に関する全国調査）」\r
（2）総務省「令和4年 都民の就業構造」\r
（3）独立行政法人労働政策研究・研修機構「子育て世帯全国調査」\r
（4）厚生労働省「第一子出産前後の妻の継続就業率・育児休業利用状況」

### 自由記述欄

_No response_`,comments:{totalCount:0},reactions:{totalCount:1},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-07-02T08:58:02Z"},{title:"フリーランス・起業家の方に向けた、育休相当の支援",number:263,createdAt:"2024-07-02T09:26:25Z",url:"https://github.com/takahiroanno2024/election2024/issues/263",state:"OPEN",body:`### 政策ビジョン

教育・子育て

### 政策

・フリーランスや起業家の方が受け取れる、所得保証のための見舞金を手配します（出産手当金に相当）\r
・出生時育児休業給付金に該当する給付金を都として手配\r


### 必要だと思ったきっかけ

#32 \r
> 私は今週娘が誕生しましたが、妻がフリーランスで産休・育休の制度がなく、自分で貯蓄、やりくりすることが必要になりました。\r
> 一方会社員（私もですが）は育休制度があり、不平等感を感じます。\r
> 多様な働き方があり得る世の中で、サポートの対象範囲の拡大は合わせて必要ではないでしょうか。

### なぜ必要か

働き方の多様化が推進されることでフリーランスの方が増えやすい状況下にあるが、その後の出産・育児に対してはサポートが少なくなっている現場がある。\r
そして、結果的にそのことは働き方の多様性自体にも影響を与えうる。\r
また、起業家においても同様であり、もっとワークライフバランスの両立をしやすい支援が必要なのではないか。\r
\r


### この Issue で議論したいこと

どのような支援があると良いのか、意見をいただきたいです。

### 調べたこと（裏付けとなる事実・ファクト）

[フリーランスは育休を取得できない！代わりの育児支援制度を全紹介\r
](https://labol.co.jp/columns/life/freelancers-cannot-take-childcare-leave/)

### 自由記述欄

_No response_`,comments:{totalCount:2},reactions:{totalCount:9},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-07-04T07:21:45Z"},{title:"心療にまつわる雇用や相談できる相談窓口の人員増加、リスキリングの対象にすること",number:266,createdAt:"2024-07-02T12:55:46Z",url:"https://github.com/takahiroanno2024/election2024/issues/266",state:"OPEN",body:`### 政策ビジョン

医療・防災, その他

### 政策

24時間こころのホットラインに、待ち時間なく繋がれて、尚且つカウンセリングや、必要ならば支援窓口にスムーズに誘導できるように人員を増加・都のリスキリング政策に則ってカウンセリングができるようになることを支援する。\r
学校や地域にも常に三人程度は、都で雇用するカウンセラーを常駐させられるようにする。

### 必要だと思ったきっかけ

今、自殺したい人や、苦しむ若者を止める手段としてこころの相談窓口などは確かに東京都のほとんどの自治体が開設してくれているのですが、時間が短すぎるし対応する人員の質も全く信用に足る水準に達していません\r
大体が平日の10時ごろから午後6時ごろまでで、夜間の対応もありません\r
また、学校にもカウンセラーは足りておらず、たとえば「必ず秘密を守ってほしい」と児童が伝えても、それを教師に共有してしまい、児童がより追い込まれて不登校になったりしています\r
こういうものは顕在している方で求めているのは若年層で、年齢が上がってくると需要は隠れますが、あらゆる年代にとって必要だと強く思っています

### なぜ必要か

学校にカウンセラーを常駐させることはそのまま教師の負担の軽減につながります。教師が担わなければならない生徒の生活相談に費やす時間が確実に減るからです。\r
また、こころのホットラインは24時間空いていなければ意味がありません。希死念慮に襲われて助けを求めるような心身の弱った方は、夜にこそ相談する窓口を求めるからです。SNSなどでは、「この時間に繋がらない相談窓口に意味はない」という意見が可視化されたりもしています。\r
なにより、カウンセラーは精神的な障害を抱えたり乗り越えた経験からそれを志す方が大勢いらっしゃっるために、都からの支援で汲み上げれば、そこからさらに福祉や別の雇用へ誘導するきっかけに必ずなると思うからです。\r
また当然ですが、信頼できる心の拠り所を最後に都が用意してくれることは、間違いなく自治体への信頼に直結すると思います

### この Issue で議論したいこと

実現可能性や欠陥について

### 調べたこと（裏付けとなる事実・ファクト）

全くありません\r
でも誰もマニフェストに掲げていなくて投げられるところがここしかありませんでした

### 自由記述欄

初めて投稿するのでこのような形でいいのかわかりません\r
至らない点があったら申し訳ありません`,comments:{totalCount:3},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"医療・防災"},{name:"その他"}]},updatedAt:"2024-07-02T15:20:57Z"},{title:"特別な支援が必要な児童・生徒への支援のあり方",number:269,createdAt:"2024-07-02T16:14:25Z",url:"https://github.com/takahiroanno2024/election2024/issues/269",state:"OPEN",body:`### 政策ビジョン

教育・子育て

### 政策

* 障害の社会モデルに立脚し、社会側のハードルを取り除くためのテクノロジー活用を提唱\r
* 一人ひとりの特性やお困りに合わせて、どのような支援が必要かを見立てること・心理面も含めた支援に対しては、人間の従事が必要になる\r
    * 福祉従事者の方の待遇改善\r
        * リスキリングのための研修に対する補助\r
    * 手続き面でのさらなるDXの検討\r
        * 障害福祉サービス受給者証のデジタル化\r
        * 端末やサービス導入のためのICT助成金の拡充\r
    * 学校現場での支援者を増やすため、「特別支援教育支援員」の採用に対して補助\r
    * 学校・福祉事業所・医療機関等、関係機関間での連携強化を支援\r
* 困り事を軽減する上で、いろんなテクノロジー活用することが推奨されるので、都のイニシアチブで効果的なツールを調査し、DB化する\r
* 障害のある方たちがどのように、生活・学びをしていったかなどのロールモデルを見つけることを支援する\r
    * 不登校や発達障害の方などの、オンラインメンターマッチングを都として支援

### 必要だと思ったきっかけ

下記のような特別な支援が必要な方への支援の重要性について触れられていた\r
> 教育は「学びの多様化学校」に触れられてはいるものの、印象としてはエリート教育色が強くて、\r
> 不登校や特別な支援や合理的配慮の問題を改善していくための具体的なリソース割り当てや施策についても詳細化してくれると嬉しいと思った。\r
> @kantakinoshita\r
> https://x.com/kantakinoshita/status/1803687489015845237

### なぜ必要か

誰も取り残さない東京にアップデートするために、十分な施策がなかった領域であり、着手の必要性がある。\r
\r
以下のファクトもあり、特別な支援を必要とする方へのサポートのあり方は十右往性が増している。\r
\r
- 特別支援学校在籍者数は、増加傾向にあり令和2年時点では144,823人になる\r
- 通級による指導を受けている児童も増加傾向にあり、現在は134,185人（令和1年時点）\r
- 通常の学級に在籍する小中学生の8.8%に学習や行動に困難のある発達障害の可能性がある

### この Issue で議論したいこと

どのような支援があることが望ましいか

### 調べたこと（裏付けとなる事実・ファクト）

[【参考資料】 特別支援教育の現状等 令和3年](https://www.mext.go.jp/kaigisiryo/content/000140043.pdf\r
)\r
[通常の学級に在籍する特別な教育的支援を必要とする児童生徒に関する調査結果について\r
](https://www.mext.go.jp/content/20230524-mext-tokubetu01-000026255_01.pdf)\r
\r
参考となるツール/サービスは以下です\r
- [発達障害者向けAIサポートツールgoblin.toolsを紹介](https://note.com/patr/n/nbb1ca3317389)\r
- [小学5年生が開発した会話支援AIツール「Be Free」の衝撃](https://note.com/patr/n/nf58a2df5c7bd)\r
- [発達障害者本人が愛用しているサポートツール例（全国ＬＤ親の会）](https://www.jpald.net/research/tool_examples_201503.pdf)\r
- [オンラインメンターサービス branch\r
](https://branchkids.jp/)

### 自由記述欄

_No response_`,comments:{totalCount:0},reactions:{totalCount:4},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-07-02T16:14:37Z"},{title:"都政参加プラットフォームにて、「本人確認された都民である属性」の表示",number:272,createdAt:"2024-07-02T17:34:52Z",url:"https://github.com/takahiroanno2024/election2024/issues/272",state:"OPEN",body:`### 政策ビジョン\r
\r
民主主義\r
\r
### 概要\r
\r
悪意をもつ（自国または他国の）第三者による不正を防ぐため、\r
「都政参加プラットフォーム」の際に、「本人確認された都民である属性」を表示する機能を盛り込む。\r
\r
### [対象となる文章](https://github.com/takahiroanno2024/election2024/blob/a6e8663190709bbfc1e5d2abeb0656cf68544d68/docs/manifest/democracy.md)\r
\r
> - ブロードリスニングや政策提案においては、都民であることを厳密管理はしない\r
>     - デジタル民主主義では、意見を多数決で採用したりせず、出てきた意見を基にエビデンスを踏まえて政策立案を行う\r
>     - そのため意見表明の段階では、身分確認などでハードルを上げるのではなく、広く参加しやすいプラットフォームを提供する\r
> - 投票などで数を意思決定の基準とする場合は、マイナンバーカードなどのテクノロジーを活用し、東京都民を正しく絞り込む\r
> - 一方で、投票などで数を意思決定の基準とする場合は、マイナンバーカードなどのテクノロジーを活用し、東京都民を正しく絞り込む\r
>     - 著しく不適切なコメント（攻撃的・差別的コメントなど）については、今回のgithubの仕組みでも活用しているAIによるフィルタリングを用いて、コメント別に管理をしていく\r
\r
\r
\r
### 問題意識\r
\r
悪意をもつ（自国または他国の）ユーザがいた場合、次の懸念が考えられます。\r
\r
- 特定の意見に対する支持者を圧倒的多数（にみせること）によるコミュニティが操作される懸念\r
    - 「投票などでは、都民を正しく絞り込む」と記載がありますが、圧倒的多数の反対で、投票までたどり着かない懸念があります\r
    - また正規の都民についても、圧倒的多数の意見を見ることで、それに賛成してしまう懸念があります（バンドワゴン効果）\r
- 提言の圧倒的増加により、本当に都民が必要とする議論に時間を避けなくなる懸念\r
\r
### 提案\r
\r
都政参加プラットフォーム内に、「本人確認された都民である属性」について表示する機能を提案します。\r
つまり、ユーザは「本人確認された都民であること」を **任意** で証明し、それらのバッジを他の人に見せることができます。\r
\r
これにより、次のような効果が考えられます。\r
\r
- 実際の都民はどう考えているのかがわかりやすくなる\r
- 本当の都民が必要とする議論から集中して議論できる\r
\r
また「本人確認された都民であること」を証明するかは自由なため、\r
本人確認しなかった都民も議論に参加でき、議論参加のハードルは下がったままになります。\r
\r
<!--\r
### 必要だと思ったきっかけ\r
\r
_No response_\r
\r
### なぜ必要か\r
\r
_No response_\r
-->\r
\r
### この Issue で議論したいこと\r
\r
懸念および提案は適当か\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
- [バンドワゴン効果について](https://keiei-shinri.or.jp/word/%E3%83%90%E3%83%B3%E3%83%89%E3%83%AF%E3%82%B4%E3%83%B3%E5%8A%B9%E6%9E%9C/)\r
\r
### 自由記述欄\r
\r
なお自身は神奈川県民です。`,comments:{totalCount:3},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"民主主義"}]},updatedAt:"2024-07-02T18:00:16Z"},{title:"ジェンダーバイアスによる選択の制限をなくしていくための提案",number:274,createdAt:"2024-07-03T00:47:13Z",url:"https://github.com/takahiroanno2024/election2024/issues/274",state:"OPEN",body:`### 政策ビジョン\r
\r
教育・子育て\r
\r
### 政策\r
\r
「安野たかひろ 東京都知事選2024 政策マニフェスト　詳細版 ver1.1」の、3.世界一の子育て・教育環境「個性に応じた多様な教育」でも述べられている通り、ジェンダーバイアスの影響によりITエンジニアの女性比率が低いなど、日本では他国に比べて進学や就職など様々なシーンにおいてジェンダーによる偏りがあります。\r
「ジェンダーに関わらず学びたいことを学べるようになるための支援」を、文理決定前に注力する点に賛同します。\r
また、小学生・中学生向け職業体験（日本版Girls’Day）を行うことについては、\r
Pull requests：https://github.com/takahiroanno2024/election2024/pull/16\r
で参考にあげてくださっている、\r
デンマークのGirls'Day：https://www.girls-day.de/\r
のページを拝見し、「ジェンダーに関わらず学びたいことを学ぶ」を体感できる素晴らしい取り組みだと思いました。\r
\r
ただし、懸念点が3点ありますので、提案のIssueを立てさせていただきます。\r
【懸念①】Girls’Dayに参加できるのは、都内の一部の生徒だけになってしまわないか。\r
【懸念②】学生がジェンダーに関わらず選択できるようになるためには、体感するだけでは足りないのではないか。\r
【懸念③】ジェンダーに関わらない選択をした学生が、学校を卒業した後、社会との意識や考え方のギャップに苦しむ可能性があるのではないか。\r
\r
提案は以下のとおりです。\r
\r
【提案①】\r
東京都の小中学校で「生命の安全教育」の内容を拡充し、全ての学生が「包括的性教育」を学ぶ機会をつくることで、懸念点の①と②を緩和することを提案いたします。\r
\r
刑法改正などを受け、「子どもたちを性暴力の被害者・加害者・傍観者にさせない」ことを目標に、2023年4月から全国の小中学校で「生命の安全教育」が始まりました。\r
しかし、現場で実践する先生や専門家たちからは、性に関する幅広い知識を取り扱う「包括的性教育」をすすめていくべきという声も上がっています。\r
包括的性教育は、学習者のウェルビーイング（幸福）の実現を目的とし、「からだの変化、生殖のしくみ、ジェンダー、性の多様性、コミュニケーション、性暴力、性と生殖に関する健康と権利」など、幅広い分野の知識を扱う性教育です。\r
UNESCOが作成した「国際セクシュアリティ教育ガイダンス」をベースに、様々な国で実践されています。しかし、「日本では生徒の発達段階に応じて様々な視点からの性教育がすでに学習指導要領に沿って提供されている。」として日本はこの教育を受け入れていません。\r
\r
学生の頃に性のことを学んでこなかった当時者として、性に関する知識を得る必要性を感じ、民間で、一から包括的性教育の教材をつくった例があります。\r
保育園・幼稚園でも研修会を実施したり、小中学校のPTAのが主体的に講演会を企画したりするなど、現場での対応は広がっています。\r
しかし、性教育にはバックラッシュの背景もあり、取り組みたくてもなかなか取り組めない自治体もあります。ぜひ都としてすすめることで、各地で取り組む方々の後押しいただきたいと思います。\r
\r
【提案②】\r
学びたい人がいつでも学びにいくことができ、企業の研修などにも利用できる、ジェンダーや性、人生の選択といった幅広い知識を扱う施設を新設。または既存の建物や施設を使って、常設展示を行うことを提案いたします。\r
\r
ただし、ただただパネルを展示するだけでなく、主体的に参加できる仕組みがあるのが望ましいなと思っています。\r
以下参考です。\r
ノルウェーのノーベル平和センターでは、展示を見て感じたことをメッセージに書き、貼り付けるためのスペースがあったり、光やプロジェクター、タッチパネルなどを使って、自分から深く知ることができたりする仕組みがありました。\r
今年4月に台湾で開催された、「性別平等教育法」制定20周年のイベントでも、私生活に関しての展示では家具が展示されていたり、電話の受話器に耳を近づけるとメッセージが聞こえたり、といった参加型の展示がされていたようです。\r
\r
【提案③】\r
男女平等参画課の所管組織の見直しと、「男女共同参画」から「ジェンダー平等」または「SOGI平等」などへのキーワード変更をご検討いただきたいです。\r
\r
現在、ジェンダー関連の取り組みについては「東京都生活文化スポーツ局都民生活部男女平等参画課」がこの実務を担っているかと思います。\r
昨月、世田谷区議会を傍聴した際、世田谷区も男女共同参画に関しては、生活文化領域が担っているものの、予算や人員の少なさなどにより、なかなか施策をすすめることができないという課題があると聞きました。\r
傍聴した議会では、「女性支援新法」に関連した女性支援という軸での議論でしたが、ジェンダーギャップという観点からも、所管組織の見直しは必要なことだと思います。\r
東京都の「東京都生活文化スポーツ局都民生活部」にどのくらいの推進力があるかは分かりませんが、世田谷区と同様の課題があるかもしれないと思っています。\r
民間の意識を変えていくためには、まず都が変わっていくべきだと考えます。\r
ジェンダーの話は学校、職場だけでなく、生活のあらゆるシーンで出てくる問題なので、庁内で幅広く取り扱われるように組織を見直していただきたいです。\r
\r
また「男女」という言葉でとりこぼされている人たちも存在します。\r
「男女共同参画」の元の英語は”Gender equality”です。\r
なぜこのように訳されたのかについての背景は調べきれていませんが、都庁で扱う文章において、より英語に近い「ジェンダー平等」や「SOGI平等」に変えることで幅広い支援や対応ができ、民間へも影響を与えていくのではないでしょうか。\r
\r
### 必要だと思ったきっかけ\r
\r
学生の頃も、社会人になってからも\r
「女性・男性なんだから○○しなさい・してはいけない。」\r
という声に苦しめられ、実際に選択を制限されてきました。\r
また、そのようなジェンダーバイアスで苦しむ友人・知人を見てきました。\r
そして、「包括的性教育」について学んだ後、これまで感じていたモヤモヤや友人知人の悩みについて、言葉に出して話せるようになりました。\r
安野たかひろさんのマニフェストに共感すると共に、自分が感じた懸念点と提案を送り、さらに議論を深めていきたいと思っています。\r
\r
### なぜ必要か\r
\r
ジェンダーバイアスについて学ぶ上では、ジェンダーだけでなく、性に関する幅広い知識を同時に学ぶことが重要だと考えています。\r
なぜなら、自己の選択を尊重する権利があることや、多様な性のあり方があることを知ることは、人生の選択に大きな影響を与えるからです。\r
\r
そして、ジェンダーバイアスに関して知識を得た上で、自己のジェンダーに関わらない選択をしたとしても、ジェンダーバイアスまみれの社会に入っていくことで、そのギャップに苦しむ可能性があります。\r
一人一人の意識を変えていくためには、正しい知識を得る機会を増やしたり、行政自体がかわっていくことが重要だと考え提案いたしました。\r
\r
### この Issue で議論したいこと\r
\r
包括的性教育・ジェンダー平等・SOGIといったキーワードに対して、反対意見を持つ人も多くいます。\r
これらのテーマは感情論でぶつかり合いやすく、建設的な議論を行うためにはテクノロジーを使って土壌を整えることが必要だと思います。\r
しかしテクノロジーの活用という点では、具体的なアイデアが私にはまだ浮かびません。\r
何かアイデアやご意見・感想などあれば、ぜひコメントいただきたいです。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
・生命の安全教育（文部科学省）：https://www.mext.go.jp/a_menu/danjo/anzen/index2.html\r
・「生命の安全教育」をどう生かすか　性教育の実践者らが講演（朝日新聞デジタル）：https://www.asahi.com/articles/ASS1Q02R6S1PUTIL002.html\r
・全国の中学校に“包括的性教育”の教材『コロカラBOOK』を届けたい！（クラウドファンディングGoodMorning）：https://camp-fire.jp/projects/view/681900\r
・「日本が改善すべき点は300」世界から人権改善を指摘された日本の「回答」（FRaU）：https://gendai.media/articles/-/116974?page=1&imp=0\r
・『「日本に性教育はなかった」と言う前に ブームとバッシングのあいだで考える』堀川修平（柏書房）:[ https://www.kashiwashobo.co.jp/book/9784760155293](https://www.kashiwashobo.co.jp/book/9784760155293)\r
・世田谷区議会インターネット議会中継（おのみずき議員　令和6年第2回定例会6月11日本会議 一般質問）：https://setagaya-city.stream.jfit.co.jp/?tpl=speaker_result&speaker_id=253\r
・政治分野における男女共同参画の推進に関する法律（Japan Law Translation）：https://www.japaneselawtranslation.go.jp/ja/laws/view/3294\r
・ノーベル平和センター（日本語）：https://www.nobelpeacecenter.org/Japanese\r
・「性別平等教育法」制定20周年、教育部が華山1914文化創意産業園区で特別展（TAIWAN TODAY）：https://jp.taiwantoday.tw/news.php?unit=148&post=251019&unitname=%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9-%E6%94%BF%E6%B2%BB&postname=%E3%80%8C%E6%80%A7%E5%88%A5%E5%B9%B3%E7%AD%89%E6%95%99%E8%82%B2%E6%B3%95%E3%80%8D%E5%88%B6%E5%AE%9A20%E5%91%A8%E5%B9%B4%E3%80%81%E6%95%99%E8%82%B2%E9%83%A8%E3%81%8C%E8%8F%AF%E5%B1%B11914%E6%96%87%E5%8C%96%E5%89%B5%E6%84%8F%E7%94%A3%E6%A5%AD%E5%9C%92%E5%8C%BA%E3%81%A7%E7%89%B9%E5%88%A5%E5%B1%95\r
\r
### 自由記述欄\r
\r
_No response_`,comments:{totalCount:0},reactions:{totalCount:8},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-07-03T02:33:26Z"},{title:"住宅断熱の課題を精査",number:275,createdAt:"2024-07-03T02:59:20Z",url:"https://github.com/takahiroanno2024/election2024/issues/275",state:"OPEN",body:`### 政策ビジョン

その他

### 政策

背景\r
https://github.com/takahiroanno2024/election2024/pull/256#discussion_r1663410252

### 必要だと思ったきっかけ

https://github.com/takahiroanno2024/election2024/pull/256#discussion_r1663410252

### なぜ必要か

_No response_

### この Issue で議論したいこと

_No response_

### 調べたこと（裏付けとなる事実・ファクト）

_No response_

### 自由記述欄

_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"その他"}]},updatedAt:"2024-07-03T02:59:31Z"},{title:"3Dアバター技術等を用いた手話翻訳技術の発展支援",number:277,createdAt:"2024-07-03T03:56:09Z",url:"https://github.com/takahiroanno2024/election2024/issues/277",state:"OPEN",body:`### 政策ビジョン

医療・防災

### 政策

VRChat等で用いられる3Dアバター技術と翻訳AIの技術等を利用し、日本手話が第一言語となっているろう者向けの福祉技術を発展させる。

### 必要だと思ったきっかけ

大本はろう者の家族を持つ友人から聞いた話です。\r
\r
・ろう者…重度の聴覚障害を持つ方、あるいは先天的に耳が聞こえない方のうち、音声言語を獲得する前に失聴し、手話を第一言語とする方。\r
・日本手話…日本のろう者の間で主に用いられる手話言語。NHKの手話ニュース等で手話通訳者が用いているのもこちら。**日本語とは全く異なる言語的特性を備えている。**\r
・日本語対応手話…日本語をそのまま喋りながら、手指で日本語の単語を表現する手話言語。後天的な難聴者、失聴者によく用いられる。文法等は上記の手段から日本語と同じもの。\r
\r
このうち、**「日本手話」という言語が「日本語」と異なる言語**だという話を聞いたのがきっかけです。

### なぜ必要か

・ろう者の方は、日常的に日本語の字幕などを見るたびに翻訳を行い認識している状況。\r
・社会からの発信に手話通訳者を介せば言語的にスムーズな生活を送れるが、各種リソースがかかる。\r
・近年発展してきた3Dアバター技術を用いて、画面上の仮想キャラクターが日本語→日本手話の通訳を行う技術を発展させることにより、「テクノロジーで誰も取り残さない東京へ」のコンセプトをさらに推し進めることが出来るのではないか。

### この Issue で議論したいこと

・正直なところ、ソース不足です。特にろう者の方の意見を賛否問わず聞かせて頂きたいと思います。

### 調べたこと（裏付けとなる事実・ファクト）

手話言語と音声言語のバイリンガル – もう一つのバイリンガルの世界\r
https://bilingualscience.com/english/%E3%82%82%E3%81%86%E4%B8%80%E3%81%A4%E3%81%AE%E3%83%90%E3%82%A4%E3%83%AA%E3%83%B3%E3%82%AC%E3%83%AB%E3%81%AE%E4%B8%96%E7%95%8C-%E3%80%9C%E6%89%8B%E8%A9%B1%E8%A8%80%E8%AA%9E%E3%81%A8%E9%9F%B3%E5%A3%B0/

### 自由記述欄

・過去にもいくつか類似例がありますが、改めて安野さんから政策として「こういった取り組みもテクノロジーで強化できる」と伝えて頂きたく思います。`,comments:{totalCount:1},reactions:{totalCount:1},labels:{nodes:[{name:"医療・防災"}]},updatedAt:"2024-07-03T11:11:53Z"},{title:"東京都内の賃貸住宅の更新料負担ゼロ",number:278,createdAt:"2024-07-03T06:58:17Z",url:"https://github.com/takahiroanno2024/election2024/issues/278",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

1. 法制度の整備\r
更新料禁止法の制定: 東京都独自の条例を制定し、賃貸契約の更新時に更新料を禁止する。これにより、借主は更新料を支払う必要がなくなる。\r
2. 賃貸市場の監視と規制強化\r
不動産業者の監視強化: 東京都内の不動産業者が適切な契約を行っているかを監視するため、定期的な監査を実施する。違反が確認された場合、厳しい罰則を設ける。\r
透明な情報提供: 賃貸物件情報の公開時に、更新料ゼロであることを明確に表示することを義務付ける。\r
3. 支援制度の導入\r
更新料補助制度: 法改正が進むまでの暫定措置として、東京都が更新料を負担する補助制度を設ける。これにより、すぐにでも借主の負担を軽減する。\r
4. 住環境の改善\r
住宅セーフティネットの強化: 更新料ゼロ政策に加え、低所得者や高齢者向けの公営住宅の提供を拡充し、安心して住める環境を整備する。\r
5. 住民の啓発と教育\r
契約内容の理解促進: 借主が賃貸契約の内容を十分に理解し、更新料に関する不当な請求に対抗できるよう、セミナーや情報提供を行う。\r
相談窓口の設置: 更新料に関するトラブルを解決するための専用相談窓口を設置し、迅速な対応を行う。\r
6. 公共と民間の協力\r
賃貸業界との対話: 不動産業界や貸主団体と連携し、更新料ゼロの導入による利点を共有し、協力を得るための対話を進める。\r
賃貸保証サービスの普及: 賃貸保証サービスの普及を支援し、更新料ゼロでも貸主が安心できる仕組みを提供する。

### 必要だと思ったきっかけ

1. 借主の経済的負担の増加\r
生活費の高騰: 東京都内の生活費は全国平均と比較して高く、特に家賃の負担が大きい。これに加えて、更新料が定期的に発生することで、経済的な負担がさらに増加する。\r
収入の不安定さ: 非正規雇用やフリーランスなど、収入が不安定な層が増えており、突然の大きな出費である更新料が生活を圧迫することがある。\r
2. 高齢者や低所得者の困難\r
高齢者の増加: 年金生活者にとって、定期的に発生する更新料は大きな負担となる。高齢者が住み慣れた場所に住み続けることが難しくなる。\r
低所得者の生活困難: 低所得世帯にとっても、更新料は生活費の一部を圧迫し、貯金や緊急時の出費に対する備えを難しくする。\r
3. 社会的な不公平感\r
透明性の欠如: 更新料の金額やその根拠が不明確な場合が多く、借主にとって不透明な出費となっている。これにより、不公平感や不信感が生まれる。\r
国際的な比較: 多くの先進国では、賃貸契約に更新料が含まれない場合が多い。これに比べて、日本の慣習が国際基準に合わないと感じることがある。\r
4. 住環境の安定性の低下\r
引っ越しの頻発: 更新料の支払いが難しいために、引っ越しを余儀なくされる人が多く、住環境が不安定になる。これにより、地域コミュニティの形成が難しくなる。\r
心理的ストレス: 更新料の支払いに対する不安やストレスが、借主の生活の質を低下させる。\r
5. 法的トラブルの増加\r
トラブルの頻発: 更新料に関するトラブルが頻発しており、これが借主と貸主の間で法的紛争に発展するケースが増えている。これにより、裁判所や法律相談機関への負担も増加している。\r
6. コロナ禍による影響\r
収入の減少: 新型コロナウイルスの影響で、多くの人々が収入を減らしたり、仕事を失ったりしている。これにより、更新料の支払いがさらに困難になるケースが増えている。\r
住居の安定の重要性: コロナ禍での外出自粛やリモートワークの普及により、住居の安定がこれまで以上に重要視されるようになった。\r
具体的な声や事例\r
市民の声: 「更新料がなければもっと余裕を持って生活できる」「更新料のために貯金を削っている」という声が多く寄せられる。\r
専門家の指摘: 経済学者や社会福祉専門家が、更新料の負担が社会全体の経済活動や福祉に悪影響を与えていると指摘することが多い。\r
これらの要因や背景が、更新料ゼロの必要性を感じさせるきっかけとなっている。これを受けて、更新料を廃止または軽減するための政策が求められている。

### なぜ必要か

経済的な理由\r
・家計の負担軽減:\r
更新料は借主にとって大きな経済的負担となる。特に、家賃の1ヶ月分から2ヶ月分の更新料は、借主の家計に大きな負担を与えることが多い。更新料ゼロにすることで、この負担を軽減し、生活費の余裕を持たせることができる。\r
・消費活動の促進:\r
更新料に費やされる金額がなくなることで、借主はその分を他の消費活動に回すことができる。これにより、地域経済の活性化が期待される。\r
\r
社会的な理由\r
・住居の安定性向上:\r
更新料が原因で引越しを余儀なくされるケースが減少し、住民が長期的に同じ場所に住み続けることができる。これにより、地域コミュニティの安定性が向上し、地域社会の一体感が高まる。\r
・低所得者や高齢者への支援:\r
更新料は特に低所得者や年金生活者などの経済的に余裕のない層にとって大きな負担である。更新料ゼロにすることで、これらの層の生活の質を向上させることができる。\r
\r
法的・制度的な理由\r
・透明性と公平性の向上:\r
更新料の設定や金額には透明性が欠けている場合が多く、貸主の一方的な設定が問題となることがある。更新料ゼロにすることで、賃貸契約がより公平で透明性の高いものとなる。\r
・国際的な標準との整合性:\r
多くの先進国では、賃貸契約において更新料が存在しないか、非常に低い金額に設定されている。更新料ゼロにすることで、国際的な標準に合わせることができ、外国人居住者にとっても住みやすい環境を整えることができる。\r
\r
実効性のある政策の必要性\r
・賃貸市場の健全化:\r
更新料がなくなることで、賃貸市場がより健全で競争力のあるものとなり、借主にとって魅力的な市場環境が整う。\r
・貸主のメリット:\r
更新料ゼロの導入により、長期的な契約を望む借主が増え、貸主にとっても安定した収益が見込める可能性が高まる。\r
\r
更新料ゼロ政策は、経済的負担の軽減、社会的安定の向上、公平で透明性のある賃貸市場の実現など、多岐にわたるメリットがあり、多くの借主にとって重要な課題解決となる。

### この Issue で議論したいこと

_No response_

### 調べたこと（裏付けとなる事実・ファクト）

1. 家賃の平均値\r
23区内の平均家賃（1K・1DK）：約10万円\r
23区外の平均家賃（1K・1DK）：約7万円\r
2. 更新料の一般的な計算方法\r
更新料：家賃の1ヶ月分（2年ごと）\r
3. 対象世帯数の推定\r
東京都の総人口：約1,400万人\r
賃貸住宅に住む世帯の割合：約50%（700万人）\r
東京都の平均世帯人数：約2.0人\r
賃貸世帯数の推定：700万人 ÷ 2.0 = 350万世帯\r
4. 年間の更新料負担の計算\r
23区内と23区外の家賃の平均を取り、それぞれの世帯数に基づいて2年間の更新料負担を計算し、それを年間に換算する。\r
\r
23区内の更新料負担\r
平均家賃：10万円\r
更新料（2年ごと）：10万円\r
年間の更新料：10万円 ÷ 2 = 5万円\r
世帯数：約70%の賃貸世帯が23区内に住んでいると仮定（350万世帯 × 70% = 245万世帯）\r
23区内の年間更新料総負担：5万円 × 245万世帯 = 1兆2250億円\r
23区外の更新料負担\r
平均家賃：7万円\r
更新料（2年ごと）：7万円\r
年間の更新料：7万円 ÷ 2 = 3.5万円\r
世帯数：約30%の賃貸世帯が23区外に住んでいると仮定（350万世帯 × 30% = 105万世帯）\r
23区外の年間更新料総負担：3.5万円 × 105万世帯 = 3675億円\r
総年間更新料負担の推定\r
23区内の年間更新料総負担：1兆2250億円\r
23区外の年間更新料総負担：3675億円\r
東京都全体の年間更新料総負担：1兆2250億円 + 3675億円 = 1兆5925億円\r
結論\r
東京都内の賃貸住宅に住む世帯全体の年間更新料負担は、約1兆5925億円と推定される。\r
※この推定値は、家賃の平均値や賃貸世帯数の割合を基にしたものである。

### 自由記述欄

_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-07-03T06:59:11Z"},{title:"安野さんの服装について",number:279,createdAt:"2024-07-03T07:07:47Z",url:"https://github.com/takahiroanno2024/election2024/issues/279",state:"OPEN",body:`### 政策ビジョン

その他

### 政策

安野さんのスーツ姿の写真がWEBサイトにあったほうがいいと思います。\r
選挙中だから着てくださいというお願いではありません。

### 必要だと思ったきっかけ

夏の選挙のため、選挙期間中は涼しげな服装のほうがいいでしょう。\r
しかし、サイトを見てみてもピンクのポロシャツ、パーカーなどラフな格好のみでした。\r
スーツ姿の写真が1枚でもあることによって、政治家であるということが示せるのではと思います。\r
ニューヨーク州やカリフォルニア州の知事でさえ、スーツを着ています。\r
東アジアの大都市の長になるのであれば、やはりスーツを着てほしいと思いました。

### なぜ必要か

やはり、有権者はスーツを着て政策を訴える姿を見て、政治家だなと錯覚するものです。\r
安野さんは立派なご経歴をお持ちのため、その経歴とスーツ姿を見せることによって\r
政治家として好感を有権者に与えることができたのではと思ったからです。\r
また、選挙では名前を書いてもらうことが一番の目的です。\r
有権者は投票所の掲示板を見て、投票者を決めることもあります。\r
そこで１票でも多く安野さんに入ってほしく、このように投稿させていただきました。

### この Issue で議論したいこと

政治家はスーツを着ているイメージのほうが強いか。\r
殊、日本の首都、最大都市の首長として\r
表敬相手へのリスペクトとしてスーツは必要なのでは。

### 調べたこと（裏付けとなる事実・ファクト）

https://forbesjapan.com/articles/detail/12265\r
https://shunoyama.com/blog/2017/11/21/politician/

### 自由記述欄

都知事や議員になったらスーツを着る予定でしょうか？\r
残り数日ですが、健闘を祈っております。`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"その他"}]},updatedAt:"2024-07-03T07:08:24Z"},{title:"横田基地の軍民共用化について",number:280,createdAt:"2024-07-03T09:02:00Z",url:"https://github.com/takahiroanno2024/election2024/issues/280",state:"OPEN",body:`### 政策ビジョン\r
\r
経済\r
\r
### 政策\r
\r
横田基地の軍民共用化を早期に実現する。これにより、羽田空港や成田空港を補完し、多摩エリアや埼玉県、神奈川県、山梨県からの航空利便性を向上させる。同時に、周辺地域の経済発展と活性化を促進する。\r
\r
### 必要だと思ったきっかけ\r
\r
地域住民として、現状の航空アクセスの不便さを日々感じていた。また、地域経済の停滞を目の当たりにし、新たな発展の機会が必要だと考えていた。横田基地の軍民共用化が、これらの課題を解決する可能性のある政策だと知り、その必要性を強く感じるようになった。\r
\r
### なぜ必要か\r
\r
1. 航空利便性の向上：首都圏西部地域からの空港アクセス時間が大幅に短縮される。\r
2. 経済波及効果：年間利用者数約560万人、経済効果約1,680億円と試算されており、地域経済に大きな影響を与える。\r
3. 雇用創出：空港関連施設の運営やサービス業など、新たな雇用機会が生まれる。\r
4. 地域産業の活性化：多摩地域の中小企業の活動が活性化し、観光業や物流業などの発展も期待できる。\r
5. インフラ整備の促進：空港周辺のインフラ整備が進み、地域全体の利便性が向上する。\r
6. 地域開発の促進：武蔵村山市の市議会では、軍民共用化実現により地域の活性化や多摩都市モノレールの延伸が促進されるとの期待がある。\r
7. 地域住民の支持：武蔵村山市の市民意識調査では、約60.6%が軍民共用化に賛成しており、地域のニーズに合致している。\r
\r
### この Issue で議論したいこと\r
\r
1. 騒音問題への具体的な対策：騒音の少ない機種の導入や運行時間帯の調整など、実効性のある解決策\r
2. 日米協議の進め方：軍民共用化実現に向けた日米間の協議をどのように進めるべきか\r
3. 地域住民との合意形成：共用化によるメリットとデメリットのバランスをどのように取るか\r
4. 周辺地域の開発計画：空港を核とした地域開発をどのように進めるべきか\r
5. 環境影響評価：軍民共用化が地域環境に与える影響とその対策\r
6. 交通アクセスの改善計画：公共交通機関の整備や道路網の拡充をどのように進めるか\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
[武蔵村山市に民間空港を《地域活性化のために》](https://www.city.musashimurayama.lg.jp/_res/projects/default_project/_page_/001/002/743/gunmin091117-2.pdf)\r
[横田飛行場関連地方自治体からの質問に対する回答](https://www.city.tachikawa.lg.jp/_res/projects/default_project/_page_/001/005/393/0000000009_0000006643.pdf)\r
[在日米軍「横田基地」が茨城空港みたいに？ 都が“軍民共用化”を調査 目的は「羽田・成田の補完」](https://trafficnews.jp/post/127628)\r
[軍民共用化の意義](https://www.toshiseibi.metro.tokyo.lg.jp/bunyabetsu/kichitaisaku/gunmin_kyoyo/igi.html)\r
[米軍基地対策](https://www.toshiseibi.metro.tokyo.lg.jp/pamphlet/pdf/udt2024japanese_8.pdf)\r
[２．軍民共用化問題](https://www.town.mizuho.tokyo.jp/tyosei/021/005/p006735_d/fil/3-2.pdf)\r
\r
### 自由記述欄\r
\r
これらの議論を通じて、横田基地の軍民共用化を早期に、かつ地域にとって最適な形で実現することを目指して頂きたいと考えています。`,comments:{totalCount:2},reactions:{totalCount:1},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-07-04T08:16:27Z"},{title:"巡回連絡カードの電子化による警察業務の効率化と有事対応の強化に代表される情報連携や取得の効率改善",number:281,createdAt:"2024-07-03T09:05:42Z",url:"https://github.com/takahiroanno2024/election2024/issues/281",state:"OPEN",body:`### 政策ビジョン

医療・防災, 行政

### 政策

現行の巡回連絡カードは紙媒体で管理されており、警察業務の効率化において大きな障害となっています。\r
また、役所などの行政機関との情報連携がされておらず、情報の一元管理や迅速な対応が求められる有事の際に対応が遅れるリスクがあります。\r
まずこの問題を認識してほしいのと、警察の巡回連絡カードに限らず役所などの情報を持っている機関と情報が欲しい機関の連携が取れていない場合の改善をして欲しいと思っています。\r
\r
まず巡回連絡カードについて解決するとしたら、以下のような政策が必要なのかなと思いました。\r
\r
1. 巡回連絡カードの電子化\r
    - 紙媒体から電子媒体への移行を進めることで、情報の入力・検索・更新が迅速に行えるようになります。これにより、警察官の業務負担を軽減し、巡回活動の質を向上させることができます。\r
\r
2. クラウドベースの管理システムの導入\r
    - 巡回連絡カードの情報をクラウド上で一元管理することで、複数の警察署間での情報共有が容易になります。これにより、広域での犯罪対策や迅速な情報伝達が可能となります。\r
\r
3. 行政機関との情報連携\r
    - 役所や消防署などの行政機関と情報を連携することで、有事の際の迅速な対応が可能になります。特に、災害時や犯罪発生時において、関係機関が共有する情報が多ければ多いほど、迅速かつ的確な対応が可能となります。\r
\r
4. セキュリティ対策の強化\r
    - 電子化に伴う情報の漏洩リスクを最小限に抑えるため、厳重なセキュリティ対策を施す必要があります。アクセス権限の設定やデータの暗号化など、最新の技術を駆使して安全性を確保します。\r
\r
5. 利用者教育の実施\r
    - 新しいシステムの導入にあたり、警察官や関連職員に対する適切な教育・訓練を実施することで、円滑な移行をサポートします。これにより、システムの利便性を最大限に引き出すことができます。\r
\r
巡回連絡カードの電子化は、警察業務の効率化と有事対応の強化に直結する重要な施策です。迅速な実施に向けて、関係機関との協力を強化し、社会全体の安全・安心の向上を図るべきです。

### 必要だと思ったきっかけ

今年になって23区内に引っ越してきましたが、つい先日に近くの交番から巡回連絡カードの手書き記入を依頼されました。\r
このとき、以下のようなことを思いました。\r
 - 自分が引っ越して来たことは役所は転入届によって把握しているはず\r
   - なのに引っ越し直後ではなく、なぜ数ヶ月経過した今頃になって巡回連絡カードの記入依頼が来たのか?\r
     - 警察と役所で情報連携できていないのでは?\r
 - 巡回連絡カードはなぜ手書き記入なのか?\r
   - 電子管理されているのであればQRコードでスマホ入力とかでもいいはず\r
     - 情報連携はおろか、電子管理もされていないのでは?\r
\r
これらの疑問を交番に巡回連絡カードを提出する際にお聞きしたところ、その通りだということでした。\r
つまり役所との情報連携はされておらず、巡回連絡カードは紙で管理されているとのことでした。\r
\r
既にマイナンバーカードが存在する現状で、防災や有事の際に必要となる情報としてはあまりに効率が悪すぎる現状だと感じました。\r
そして巡回連絡カード以外にもこういった縦割り行政の弊害?のようなケースがあるのではないかと思い、issueを作成しようと思いました。

### なぜ必要か

 - 有事の際の情報連携や取得の効率化\r
 - 人口減少に向けて業務の効率化\r
 - 横の情報連携強化\r
 - 電子化によりAI活用などのさらなる効率改善を目指したい\r
 - マイナンバーなど既存の仕組みの活用

### この Issue で議論したいこと

この警察の巡回連絡カードのように、情報を持っている機関と情報が欲しい機関の連携が取れていない場合の改善について認識して欲しいと思っいてます。\r
\r
ただ、この議論が緊急度が高いか?と言われるともっと緊急度が高い議論はあると思います。\r
\r
なので問題は問題として認識した上で然るべき優先順位で適切に処理されていくといいなと思っています。

### 調べたこと（裏付けとなる事実・ファクト）

実際に警察の巡回連絡カードを手書き記入し、交番で警察官の方にお聞きした実情のみ。

### 自由記述欄

_No response_`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"医療・防災"},{name:"行政"}]},updatedAt:"2024-07-04T07:01:43Z"},{title:"税金で作られたシステムをオープンソースにしてデジタル公共財にする",number:282,createdAt:"2024-07-03T10:33:23Z",url:"https://github.com/takahiroanno2024/election2024/issues/282",state:"OPEN",body:`### 政策ビジョン

行政

### 政策

タイトルそのままです。\r
被ってそうですが、オープンソース、OSSでissueとマニフェスト検索したところ無かったので。\r
\r
\r

### 必要だと思ったきっかけ

自治体ごとに図書館システム等があるのは無駄だと感じたため

### なぜ必要か

@halskさんが書かれた下記noteの引用ですが、以下のようなメリットがあると思います。

https://note.com/hal_sk/n/nc9df8b8fd765

> 理由１：進めたい政策の理解や発展につながる
> 理由２：自治体ごとに同じようなシステムを個別に作らなくて良い
> 理由３：社会的な知的資本の蓄積に繋がる

> 「税金を使って構築したシステムが特定のベンダーの知的財産としてブラックボックス化されるのではなく、社会の誰もが使える知的資産となり、長い目で見ればコストが下がるだけでなく、人材育成や共有財の蓄積に繋がる」\r


### この Issue で議論したいこと

1. オープンソースにすることのデメリット\r
2. オープンソースにすることで問題がないのはどの範囲か

### 調べたこと（裏付けとなる事実・ファクト）

[https://dev.to/thealphamerc/open-source-vs-closed-source-the-pros-and-cons-3ifm](https://dev.to/thealphamerc/open-source-vs-closed-source-the-pros-and-cons-3ifm)

### 自由記述欄

_No response_`,comments:{totalCount:6},reactions:{totalCount:7},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-07-04T11:45:39Z"},{title:"妊婦へのRSウイルスワクチンの公費助成",number:283,createdAt:"2024-07-03T10:53:43Z",url:"https://github.com/takahiroanno2024/election2024/issues/283",state:"CLOSED",body:`### 政策ビジョン\r
\r
医療・防災, 教育・子育て\r
\r
### 政策\r
\r
男性のHPVワクチン接種の助成について、マニフェストに追加いただいてありがとうございます。\r
公衆衛生に関する提案を受け入れて下さることが分かったため、もう一点、公費助成を提案したいワクチンがあります。\r
\r
今年の6月から、RS ウイルス母子免疫ワクチン(アブリスボ)が接種可能になりました。\r
新生児のRSウイルス罹患による重症化を防ぐ事が期待できるワクチンで、妊婦さんが接種する事で、お腹の赤ちゃんに抗体移行します。\r
しかし現状では接種が任意で30,000円近くかかり、接種を躊躇する妊婦さんも多いと思います。\r
このため希望する妊婦が誰でも打てるよう、ぜひ公費助成の対象になって欲しいです。\r
\r
### 必要だと思ったきっかけ\r
\r
RSウイルスは、そこそこ大きくなった子供や大人にとっては、ちょっと咳がしつこい風邪程度で済みますが、赤ちゃん（特に生後6ヶ月までの乳児）が罹患すると重症化しやすく、呼吸困難になったり命に関わる場合もあります。\r
私の子供も、実際生後2ヶ月で罹患し、喘鳴・細気管支炎が認められたため10日間入院しました。\r
無事に回復したから良かったですが、生きた心地がしませんでした。\r
\r
私とは別の方ですが、さらに重症化したケースをマンガでポストしてくださっている方もいます↓\r
https://x.com/odahirokoillust/status/1676757085596569600?s=46&t=9ehdwDrO4CSMnazP8KngEw\r
\r
### なぜ必要か\r
\r
先述の通り、現在は費用が30,000円〜かかり、接種のハードルが高いです。\r
これが助成されて無料になれば、「打てるなら打っておこう」と考える妊婦さんも増え、多くの赤ちゃんの命を救えると思います。\r
\r
### この Issue で議論したいこと\r
\r
まだ登場したばかりのワクチンなので色々ご意見あると思いますが、全額助成の是非など、建設的な議論ができればと思います。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
小児科学会\r
https://www.jpeds.or.jp/modules/activity/index.php?content_id=559\r
\r
産科婦人科学会\r
https://www.jsog.or.jp/news/pdf/20240627_ippan.pdf\r
\r
現在のワクチン費用参考\r
https://www.moricli.jp/topics/2024/05/29/1385/\r
\r
### 自由記述欄\r
\r
_No response_`,comments:{totalCount:8},reactions:{totalCount:7},labels:{nodes:[{name:"教育・子育て"},{name:"医療・防災"}]},updatedAt:"2024-07-04T12:37:30Z"},{title:"東京都の島嶼部航路を運航する船会社の都有化について",number:284,createdAt:"2024-07-03T11:03:12Z",url:"https://github.com/takahiroanno2024/election2024/issues/284",state:"OPEN",body:`### 政策ビジョン

その他

### 政策

本州から島嶼部への船便を運航する小笠原海運/東海汽船 海運部門の都有化を進め、より安定した島嶼部-本土間の交通アクセスを実現する。

### 必要だと思ったきっかけ

東海汽船は上場をしている都合上どうしても利益追求型の経営になってしまっており、安定した島嶼航路の運航の実現 そして都民の離島振興にブレーキをかけてしまっているように思える。

### なぜ必要か

- 都が島嶼住民のために安定した航路の運行を保障する必要があると考えるため。\r
- 公有化することによってより安価に島嶼と本土を行き来することができるようになり、島嶼部の経済の活性化が図れる。

### この Issue で議論したいこと

どのような形で都政と離島交通が関わっていくべきなのか

### 調べたこと（裏付けとなる事実・ファクト）

[東海汽船](https://www.tokaikisen.co.jp/company/earnings/?doing_wp_cron=1720004460.5995121002197265625000)

### 自由記述欄

_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"その他"}]},updatedAt:"2024-07-03T11:03:28Z"},{title:"都におけるIT業界の生存戦略（企業別労働組合からの先行離脱）",number:290,createdAt:"2024-07-03T13:46:45Z",url:"https://github.com/takahiroanno2024/election2024/issues/290",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

端的に述べれば、転職という行為が負と捉えられないIT業界においてのみ、先行して産業別組合を導入することで、全体でIT従事者の育成、また業界の発展を促す他、政治団体としての存在感を高める。IT産業は完全なる都内一極集中型である。都という一地方でなし能うことは限られているが、これが実現可能なラインとして最も効果のある施策だと思われる。

### 必要だと思ったきっかけ

ツイッターに流れるIT関連のつぶやきを見るに、IT従事者内での同胞意識というものは多分にある。IT内の階級差を強調して、スティグマを貼り付けることは稀で、息の長い者は啜った泥水の量を自慢しあい、また雛鳥は駆け出しなどと自称して、一日でもスキルを得られるようアンテナを張っている。こんなに喜ばしいことはない。ただ、包括的な組織が形成されず、業界自体が内を向いているため、要望や成長は個人に帰していく。こんなに口惜しいこともない。

### なぜ必要か

都市部に偏るIT業。蓋を返せばベンダー丸投げの思考停止と責任逃れ。進むデジタル小作農。\r
傍から見ると、それはあたかも、祖国への愛という共同体の根を為すものが禁忌となってしまい、ひたすら袋小路に向かってつき進んでいく国民を見るような心地である。我々は碌に技術もキャッチアップできず、外資に喉元を抑えられたまま、モノカルチャー経済を強いられた国のように隷属を続けるのだろうか。

### この Issue で議論したいこと

日本の労働組合組織といえば、必ず企業別組合と教えられる。労働社会史によれば、それが戦後間もないころの身分意識の解消と、社員の恒久的な雇用を求めた結果であるらしい。時は過ぎて、労働という人間の活動の幹に関わる観念を独占し、イデオロギー化した社会党系譜は、それが仇となって没落していった。マルクス主義の悪目立ちもあり、以降は労働なきコーポラティズムとして、個人個人が鎖を繋がれている状態である。フリーランスも例外ではない。が、いつまでそんなことを続けているつもりだろう。舵取りは自分たちで行うものである。\r
\r
が、体制を変革したとして、それが現状よりもマシになる可能性というのは低い。どれだけ上流工程に時間をかけたって、不測の事態は起こりうる。どのように運営して、いかなるコンチプランを策定するか、それについて議論したいものである。

### 調べたこと（裏付けとなる事実・ファクト）

n=1

### 自由記述欄

正直に申し上げると、安野氏が都知事に当選する確率は低い。メディアは（元）与野党対立に焦点を当て、安野氏は既に泡沫候補に組み込まれてしまっている。都知事になったとしても、議会は大半が年配の代弁者であり、何か新しい施策はその都度、専決処分を余儀なくされるだろう。ゆえに、まず君がすべきことは水先案内人として産業別組合への移行を促すついでに、強力な地域政党を作り、将来の議会の風通しを良くすることであろう。`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-07-03T13:46:56Z"},{title:"東京都全体の行政の「ジェンダーギャップ指数」の改善",number:292,createdAt:"2024-07-03T17:08:16Z",url:"https://github.com/takahiroanno2024/election2024/issues/292",state:"OPEN",body:`### 政策ビジョン\r
\r
行政\r
\r
### 政策\r
\r
- 本イシューは、問題提起のみにとどまっており、みなさんとの議論を通じて政策を提案したいと思います。\r
- 正直、委員会等構成員の男女比などを改善することが、真の問題解決になるとは思っていませんが、まずはこの指標を改善することが、目的達成のためのマイルストーンの一つであると考えています。\r
\r
### 必要だと思ったきっかけ\r
\r
かねてより、日本の「ジェンダーギャップ指数」が低いことが気になっておりました。\r
2024年現在、日本は世界156カ国中118位です。\r
日本国内の「ジェンダーギャップ指数」という指標もあることを知り調べたところ、東京都が全ての項目で上位なわけではないことを知り、驚きました。\r
\r
「男女共同参画社会基本法第2条」に記載されている【男女共同参画社会】とは、以下のように定義されています。\r
> 「男女が、社会の対等な構成員として、自らの意思によって社会のあらゆる分野における活動に参画する機会が確保され、もって男女が均等に政治的、経済的、社会的及び文化的利益を享受することができ、かつ、共に責任を担うべき社会」\r
\r
日本のさまざまな格差をなくし、多様な人々が生きやすい社会を実現するために、東京都として日本をリードしたいなと思いました。\r
\r
\r
### なぜ必要か\r
\r
東京都は日本全体を主導する代表的な都市の一つであり、その行政の評価として「ジェンダーギャップ指数」が用いられると思います。\r
行政は、都の政策を決定する重要な機関であり、その体制、各種委員会の構成員が多様であることが、望ましいと考えています。\r
\r
安野さんの掲げる「誰も取り残さない東京」を実現するために、定量的な指標として東京都の「ジェンダーギャップ指数」全ての項目で1位を目指すべきだと思います。\r
\r
「ジェンダーギャップ指数」は、「行政」「政治」「教育」「経済」の4項目からなり、2024年現在以下の順位です。\r
- 行政：18位\r
- 政治：1位\r
- 教育：3位\r
- 経済：3位\r
\r
### この Issue で議論したいこと\r
\r
そもそも、委員会等構成員の男女比など、数の割合のみで「ジェンダーギャップ指数」を評価できるのか。\r
また、マニフェスト⑤の「高速な民意反映」によって、真に多様な人の意見を取り入れることができるのかなど、議論したいです。\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
[都道府県版ジェンダー・ギャップ指数](https://digital.kyodonews.jp/gender2024/)\r
[「ジェンダー・ギャップ指数」2024が発表 日本は156カ国中118位](https://www.joicfp.or.jp/jpn/column/gggr2024/)\r
[男女共同参画の現状・課題](https://www.nwec.go.jp/about/publish/n2ih1m000000072c-att/n2ih1m00000007xx.pdf)\r
\r
### 自由記述欄\r
\r
_No response_`,comments:{totalCount:2},reactions:{totalCount:3},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-07-04T16:13:04Z"},{title:"都条例の整理",number:294,createdAt:"2024-07-04T02:36:30Z",url:"https://github.com/takahiroanno2024/election2024/issues/294",state:"OPEN",body:`### 政策ビジョン

行政

### 政策

都条例を法律と照らし合わせて矛盾のない形ににしつつ、わかりやすく説明するツールを作り、条例データベースを整備する

### 必要だと思ったきっかけ

政府のルールが細かくなりすぎている気がした。\r
新規事業を行おうとするとき、マーケティングよりも、Legal Considerationのほうが作業が大変な時がある。\r
新規事業・イノベーションを推進していくにあたり、必ず法や条例の壁があるので、そのクリアがもっと楽になればいいなと思った。

### なぜ必要か

都条例には\r
https://www.reiki.metro.tokyo.lg.jp/HAS-Shohin/page/SJSrbLogin.jsf\r
があるのですが、正直誰もが簡単に閲覧できるような作りになっていません。\r
もっと簡単に都条例をリファレンスとして使えるためにIT・AIの力でもっと何とかならないと思いました。\r
場合によっては、整理することで不必要なものなどもあるのではないかと。\r
また公務員にとって作業がしやすくなるのかとも思いました。\r


### この Issue で議論したいこと

条例の整理は必要ではないか\r


### 調べたこと（裏付けとなる事実・ファクト）

https://www.soumu.metro.tokyo.lg.jp/01soumu/bunshoka/jyoureiangaiyou.html\r
毎年毎年条例の改正が行われるので、誰も条例を全体的に把握できている人材があまりいないに感じた。

### 自由記述欄

国会では各国会ごとに新しくできる法律がたくさんあります。\r
戦後日本の国会開催数は50回以上行われてきており、各国会でもし100程度新しい法律ができているとするならば、5000以上の法律が戦後増えていることになります。このことはきっと都の条例も同じだろうと思いました。\r
規制緩和も問題となるのが法との兼ね合いだと思います。\r
法律も税制も選挙のやり方も日本は非常に複雑なので、これを直さない限り、日本はどんどん複雑になって誰も国家の仕組みが理解できなくなるような気がしました。\r
`,comments:{totalCount:2},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"行政"}]},updatedAt:"2024-07-04T11:32:05Z"},{title:"メディア等のアンケートに対する回答状況・回答内容の掲載",number:295,createdAt:"2024-07-04T02:58:54Z",url:"https://github.com/takahiroanno2024/election2024/issues/295",state:"OPEN",body:`### 政策ビジョン\r
\r
その他\r
\r
### 政策\r
\r
政策詳細版の末尾に別紙として、次の事項を掲載する\r
・アンケートに対する対応指針（メディアからのアンケートのみ回答するのか、特定の団体が実施するアンケートにも回答するのか、また回答形式によってはアンケート回答を控えるのか等）\r
・メディア等から受けたアンケートへの回答状況と回答内容（補足や背景説明があればなお良い）\r
\r
### 必要だと思ったきっかけ\r
\r
7月3日、オープンチャットにて、「関東大震災朝鮮人朝鮮人犠牲者追悼式典」に対して追悼文を送付するか否か、およびその理由を問う「関東大震災中国人虐殺100年犠牲者追悼大会実行委員会」実施のアンケートに対して回答するよう、支援者の一部の方から要望が挙がりました。\r
\r
### なぜ必要か\r
\r
上記の「追悼文」については、すでにメディアのアンケートにおいて、「公平性の原則を踏まえつつ、全ての方に哀悼の意が届くようにしていく必要がある」との趣旨の回答がなされています。\r
\r
しかし、支援者においてでさえ、政策詳細版に含まれていない個別の事項（「追悼文」への考えに限らない）については認識できていないものもあり、モヤモヤしている方もいらっしゃるかと思います。\r
\r
このため、アンケートへの対応指針、アンケートへの回答状況・回答内容を政策詳細版の別紙として掲載することで、有権者に安野たかひろ候補への理解を深めてもらうことが得策と考え、ご提案いたします。\r
\r
### この Issue で議論したいこと\r
\r
・アンケートに対する対応指針の明記の是非\r
・メディア等から受けたアンケートへの回答状況と回答内容の掲載の是非\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
前述のアンケートは、追悼文を送付するかしないかの二者択一となっています。また、アンケート実施主体は、メディアではなく、政治的色彩の強い団体です。\r
\r
https://100nen-jikkoui.blogspot.com/2024/06/2024.html?m=1\r
\r
### 自由記述欄\r
\r
「追悼文」については、「公平性の原則を踏まえつつ、全ての方に哀悼の意が届くようにしていく必要がある」との趣旨の回答がなされています。\r
\r
これは、式典への追悼文の送付ではない方法も含めて、就任後に都民や関係者とも議論しながら形づくっていく考え（その結果として追悼文送付の方法をとる可能性も排除しない）であると理解しています。\r
\r
特定の思想をもっている候補者や政治家として関係者との接触をもってきた小池氏や蓮舫氏であれば、すでにそれぞれの「結論」に達しているのでしょう。しかし、安野氏による関係者との折衝はこれからであり、是非を問う形式のアンケートは、答えづらいものや字数制限から真意が伝わりづらいものもあるかと思います。このため、アンケートへの回答内容に加えて、その補足や背景説明等も掲載できれば、より良いのではないかと思います。`,comments:{totalCount:0},reactions:{totalCount:2},labels:{nodes:[{name:"その他"}]},updatedAt:"2024-07-04T06:59:49Z"},{title:"子育て支援について",number:296,createdAt:"2024-07-04T03:36:58Z",url:"https://github.com/takahiroanno2024/election2024/issues/296",state:"OPEN",body:`### 政策ビジョン\r
\r
教育・子育て\r
\r
### 政策\r
\r
現状では生むところまでの支援は手厚くなってきていると思うのですが，子供を育ているところの支援は不十分のように感じています．例えば保育園は定時で働くことを前提に決まった時間で預かることを前提としているため，柔軟な働き方ができ始めているにも関わらず，預けることは柔軟になれていません．\r
やむなく残業が発生する場合などもあると思う中で，公立の保育園（や小学校）であったとしても子どもに晩御飯を提供したり，遅くまで預かってもらえるようにしてもらえると，頼れる親戚が近くにいない人も安心して働きながら子どもを産み・育てることができるようになると考えています．\r
そこで，働き方（の時間）に対して柔軟に子どもを預けられる（時間延長や食事提供など）ような政策を実現できると嬉しいです．\r
\r
まとめると以下です．\r
\r
1. 柔軟な預かりシステム\r
短時間保育や一時預かり、保育時間の延長サービスの充実。\r
保護者の勤務形態に応じた預かり時間の調整を可能にするシステムの開発・運用。\r
公立保育園や小学校での延長保育を導入し、急な保護者の勤務時間に柔軟に対応。\r
夜間保育の導入や、特定の条件下での緊急保育対応を整備。\r
\r
2. 食事提供の拡充\r
夕食提供を行う保育施設や学校を増やし、残業時の対応をサポート。\r
食育の一環として、栄養バランスの取れた食事を提供するプログラムを導入。\r
小学生であれば一人家で食べる能力はあるものの、孤食を防げるように学校でも食べられるようになると良いと思っています。\r
\r
3.  子育て支援の拠点整備\r
地域ごとに子育て支援センターを設置し、保護者同士のネットワークを強化。\r
専門家による育児相談やサポートを提供。\r
\r
### 必要だと思ったきっかけ\r
\r
東京で住むには共働きが前提となります．やむなく父母共に残業が被ることもある中で，現状ではどちらかが仕事を我慢もしくは同僚の方に迷惑をかけることで対応する，という状況になってしまっています．\r
\r
\r
### なぜ必要か\r
\r
結果として面倒をみるために帰宅した側は不完全燃焼で帰宅することになるため不機嫌な状態で子供と接することになってしまい，悪影響だなと感じています．\r
\r
### この Issue で議論したいこと\r
\r
[時短で働く](\r
https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/6f68130f-0295-4561-b850-a3e590450d06/6eca6bde/20240325_policies_iken-plus_hiroba_6f68130f_03.pdf)と良いのでは，という話もあると思いますが都内で住むには時短だと厳しいように思っています．\r
では都外に引っ越すと良いのでは？という話もあろうかと思うのですが，やはり子育て環境を考えると都内で育てたい人も多いのではないかと思っており，どのような支援をすると良いか議論できると嬉しいです．\r
\r
### 調べたこと（裏付けとなる事実・ファクト）\r
\r
WEB記事で恐縮ですがこちらが参考になるかと思いました\r
https://toyokeizai.net/articles/-/313404\r
\r
### 自由記述欄\r
\r
とても良い取り組みなのでせっかくなので投稿させていただきました，よろしくお願いします`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-07-04T04:01:59Z"},{title:"性風俗産業で働く個人事業主への社会的補償について",number:297,createdAt:"2024-07-04T07:03:43Z",url:"https://github.com/takahiroanno2024/election2024/issues/297",state:"OPEN",body:`### 政策ビジョン

教育・子育て

### 政策

フリーランスへの育児休業補償について政策提言されていました\r
性風俗や、キャバクラなどのナイトワークで働く個人事業主は、それらの対象になりますか？\r
もちろん確定申告などの他の職種と同じ条件を満たした人となるのは前提としても、それらの前提を満たす人も\r
前述の職種はコロナ禍、制度から排除され、困窮した方がいました。\r
\r
不当な差別をなくしていただきますようお願いいたします

### 必要だと思ったきっかけ

_No response_

### なぜ必要か

ナイトワークで働く人には、精神疾患を抱えている人や、子育て中のひとり親、\r
様々な困難を抱えた方がいます。\r
職種に限らず制度の対象にしていただきたいです。

### この Issue で議論したいこと

_No response_

### 調べたこと（裏付けとなる事実・ファクト）

_No response_

### 自由記述欄

_No response_`,comments:{totalCount:0},reactions:{totalCount:3},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-07-04T07:03:53Z"},{title:"経済政策、減税観点での提案",number:298,createdAt:"2024-07-04T07:39:07Z",url:"https://github.com/takahiroanno2024/election2024/issues/298",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

「強い技術企業を「集め・育てる」機能をさらに伸ばす」のための方法として、以下いくつかを検討\r
1. スタートアップ向け法人都民税の創業一定期間（5年間程度）減税\r
2. スタートアップ企業等の固定資産税、都市計画税の減免\r
3. AI利活用推進税制…生産性向上等に向けたAI導入費用の一部または全部を控除\r
\r
こうした制度を整えることで、税制面からも技術企業の集積を支援したい__

### 必要だと思ったきっかけ

「減税」をテーマにスタートアップ企業や経済団体の方々とお話をしている中で、税制面でバックアップすることができる可能性があるという議論をしたことから、いくつかの方向性を検討したくissueをあげました。

### なぜ必要か

**スタートアップ向け法人都民税の創業一定期間（5年間程度）減税**\r
赤字であることが多いスタートアップ企業も、法人都民税は払う必要がある。特に創業初期の苦しいタイミングでは「少しでも出費を抑えたい」との声あり\r
\r
**スタートアップ企業等の固定資産税、都市計画税の減免**\r
設備投資や調達を促進する手段として\r
\r
**AI利活用推進税制…生産性向上等に向けたAI導入費用の一部または全部を控除**\r
大企業や中小企業がAI等を活用した革新的なサービスを導入するための促進材料となりうる

### この Issue で議論したいこと

本政策の是非（特に優先順位や、導入の可否）

### 調べたこと（裏付けとなる事実・ファクト）

[福岡市のスタートアップ法人減税](https://www.city.fukuoka.lg.jp/soki/kikaku/shisei/f-tokku/Startuphoujingennzei.html)\r
[経団連による提言書](https://www.keidanren.or.jp/policy/2023/062.html)\r
[新経済連盟による提言書](https://jane.or.jp/proposal/pressrelease/20238.html)より

### 自由記述欄

_No response_`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-07-04T19:49:06Z"},{title:"就職氷河期世代への救済について",number:299,createdAt:"2024-07-04T08:44:07Z",url:"https://github.com/takahiroanno2024/election2024/issues/299",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

就職氷河期世代への支援をさらに強化するために、予算の増額を検討してください。\r
就職氷河期世代に対する家賃補助を検討してください。

### 必要だと思ったきっかけ

就職氷河期世代の中には、正社員としての職を得られず、非正規雇用に留まっている人々が多い。総務省の「労働力調査」によると、この世代の非正規雇用比率は他の世代と比べて高く、安定した職に就けていないことがわかる。たとえば、少子高齢化対策や防衛費など、他の分野に対する予算と比較して相対的に就職氷河期世代への予算は薄いため。

### なぜ必要か

特定の世代だけが失策による不利な状況に置かれ続けることを防ぎ、社会全体で公平な機会を提供することで、世代間の不平等感を解消し、社会の安定性を高めるため。\r
就職氷河期世代自身の生活を安定させることにより、年金や医療保険などの社会保障制度への貢献を増やし、逆に失業保険や生活保護などの依存を減らすことができるため。

### この Issue で議論したいこと

就職氷河期世代の中には、正社員としての職を得られず、非正規雇用に留まっている人々が多くいます。総務省の「労働力調査」によると、この世代の非正規雇用比率は他の世代と比べて高く、安定した職に就けていないことがわかります。労働者が減少する一方で、本意ではなく非正規雇用で勤務している就職氷河期世代は比較的勤労意欲が高いものの、毎日の生活に追われ、就職活動や新たなスキル取得のための時間的・金銭的余裕がありません。この世代の生活を安定させることは、東京都の経済成長を望むうえで欠かせないといえます。

### 調べたこと（裏付けとなる事実・ファクト）

厚生労働省「国民生活基礎調査」\r
総務省「労働力調査」

### 自由記述欄

_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]},updatedAt:"2024-07-04T08:44:21Z"},{title:"健康で働く意欲が旺盛な高齢者を増やし、浮いた社会保障費を若者世代・子育て世代の支援に充てる",number:300,createdAt:"2024-07-04T09:04:00Z",url:"https://github.com/takahiroanno2024/election2024/issues/300",state:"OPEN",body:`### 政策ビジョン

行政

### 政策

健康で勤労意欲の高い高齢者の積極的な社会参加を促し、もって浮いた社会保障費を若年世代や子育て世代の支援に充てる。\r
１．高齢者の健康促進\r
　（１）健康診断に応じたポイントの付与や保険料の減額による健康意識の向上\r
　（２）生活習慣改善のための啓蒙活動\r
２．高齢者のリスキリングによる就業促進\r
　（１）職業能力訓練センターの拡充\r
　（２）インターンシップの拡充\r
３．現役世代の健康促進（健康な老後を送るために）

### 必要だと思ったきっかけ

自身が定年を迎え、健康だし勤労意欲も旺盛ですが、会社からは従来のような貢献は求められなくなりました。これは社会全体から見れば損をしているのではないかと考えたのがきっかけです。

### なぜ必要か

少子高齢化が進み、高齢者を支える若年層の負担増加が懸念されています。このままでは社会保障制度が立ち行かなくなることを懸念しています。一方で、健康に自信があって働く意欲が旺盛な高齢者はたくさんいます。このような人たちの社会参加を促し、若者世代と元気な高齢者の２本柱で社会保障制度を支える仕組みづくりが必要と考えます。

### この Issue で議論したいこと

・高齢者のキャリアチェンジについて\r
　効果的なリスキリングの方法とは？　

### 調べたこと（裏付けとなる事実・ファクト）

_No response_

### 自由記述欄

深堀できていなくてすみません。`,comments:{totalCount:0},reactions:{totalCount:3},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-07-04T09:04:13Z"},{title:"中間層の子育て支援について",number:302,createdAt:"2024-07-04T09:48:52Z",url:"https://github.com/takahiroanno2024/election2024/issues/302",state:"OPEN",body:`### 政策ビジョン

教育・子育て

### 政策

以下に当てはまる世帯の住居費用を負担\r
・40歳代までの夫婦世帯\r
・以下のテーブルに当てはまる世帯\r
①子供1人、世帯年収が750万円以下\r
②子供2人、世帯年収が850万円以下\r
③子供3人、世帯年収が950万円以下\r
\r
子供1人につき、月15,000円の住宅補助金を支給

### 必要だと思ったきっかけ

現在の住宅補助の政策について、平均的な子育て世帯をモデルとしていないと感じたため。\r
また、子育てにかかる費用負担を抑えるのであれば、子供の人数に応じて補助額を変更する必要があると感じたため。

### なぜ必要か

実際に世帯年収750万円の子供1人、住宅ローンを利用して住宅を購入している層として、老後の貯蓄と子供への貯蓄を行うのは、相当な節約をしないと難しいことがわかっているからです。\r
節約をして貯蓄に回している現状で、じゃあ2人目、3人目を作るかと言われれば、現実問題作る気にはなれないです。

### この Issue で議論したいこと

手当関連のほとんどの政策が、低所得層を基準として作られていることから、中間層が蔑ろにされているのでは？と感じています。\r
実際に、子育て世帯の平均世帯年収は中間層となるため、ここのサポートを拡充することは必要ではないでしょうか？

### 調べたこと（裏付けとなる事実・ファクト）

https://ten-navi.com/hacks/article-31-11273

### 自由記述欄

初めての投稿です。よろしくお願いします。`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]},updatedAt:"2024-07-04T09:49:06Z"},{title:"障碍者や高齢者が住みやすい都営住宅の改良と拡充",number:303,createdAt:"2024-07-04T11:55:55Z",url:"https://github.com/takahiroanno2024/election2024/issues/303",state:"OPEN",body:`### 政策ビジョン

行政

### 政策

都営住宅のバリアフリー化を促進し、障碍者や高齢者でも住みやすい環境を整備する。

### 必要だと思ったきっかけ

将来は都営住宅に移ろうかと考えたときに、町田市周辺の都営住宅はエレベーターがない団地が多いことを知った。

### なぜ必要か

多摩地区の都営住宅は古い団地が多く、築50年を超えるような団地が多い。このような団地はバリアフリーを考慮されていないため、障碍者や高齢者には住みにくい環境となっている。その中でもエレベーターが設置されていない団地が多く、\r
これらの人々の生活に支障をきたしている。これらの人々を援助する側にとっても負担が大きい。よってエレベーターのない団地へのエレベーター設置を優先的に改良する必要がある。併せて、バリアフリーに配慮した団地の建設を促進する必要がある。

### この Issue で議論したいこと

_No response_

### 調べたこと（裏付けとなる事実・ファクト）

_No response_

### 自由記述欄

問題提起だけにとどまっています。すみません。`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"行政"}]},updatedAt:"2024-07-04T11:56:08Z"},{title:"都内23区を含む主要自治体へのユースクリニックの常設設置",number:306,createdAt:"2024-07-04T14:30:50Z",url:"https://github.com/takahiroanno2024/election2024/issues/306",state:"OPEN",body:`### 政策ビジョン

医療・防災, 教育・子育て

### 政策

・わかさぽ事業、ないしその発展的な後継となりうるYC事業を拡大し、\r
①23区すべて+23区外の市に最低1施設以上の公的支援YC事業を運営\r
②該当事業施設は週6日以上開設している状態を目指す\r
③該当事業施設では、緊急避妊薬の無償化をはじめとする、若年層の健康増進に向けたトライアル事業を優先的に実施する

### 必要だと思ったきっかけ

かねてより日本の青少年の性と生殖の健康、包括的性教育の普及、ケアの拡大といったテーマに関心があり、東京都の取り組みについても追いかけてはいたものの、安野氏のマニフェストにおいてこれらのトピックが十分に扱われているとは思えなかったため、マニフェストに明記する必要性を感じた。

### なぜ必要か

現在東京都では「東京ユースヘルスケア推進事業」として、中高生などの思春期特有の健康上の悩みに対する相談窓口「わかさぽ」の設置事業や、プレコンセプションケアに向けての知識普及や検査支援の取り組みに[年3.8億円（R5年度予算）](https://www.fukushi.metro.tokyo.lg.jp/kodomo/katei/boshihoken_unkyo/unkyoR4.files/10_R4shiryou7-1.pdf)を設置している。現在、トライアル事業として渋谷区に「[とうきょう若者ヘルスサポート（わかさぽ）](https://www.fukushi.metro.tokyo.lg.jp/kodomo//sodan/wakasapo.html)」が設置されているが週4日の開設に留まっており、またオンライン・オフラインでの相談窓口も複数設置されているが、これらの取り組みは目的に応じて分割されており、青少年の悩みを包括的に相談できるわかさぽのような施設は十分に数が足りてはいない。（[参考](https://www.youth-healthcare.metro.tokyo.lg.jp/agency)）\r
\r
東京都のこのような事業は、スウェーデンのユースクリニック(以下YC)と呼ばれる事業を参考にしている。YCは各地方自治体が運営する公的施設であり、。現在同国内には250か所のYCが存在している。[住民基本台帳(R6年度)](https://www.toukei.metro.tokyo.lg.jp/juukiy/2024/jy24qf0001.pdf)およびワールド・データ・アトラスの統計(2020)によると、東京都の25歳未満人口は約288万人、スウェーデンの25歳未満人口は約286万とほぼ同数であり、単純計算すれば都内にも同等数のYCがあることが、若い世代の健康、とりわけ性と生殖の健康と権利(Sexual and Reproductive Health and Rights:SRHR)に資する上で必要だと考えられる。

### この Issue で議論したいこと

トー横前を代表とするように、都内には行き場もなく、従って必然的に自身の健康を後回しにしてしまう少年少女もいれば、一方で一見ごく普通の学校生活を送りながら健康上の悩みを抱える学生もいる。そういった子たちの健康を守り、促進するための取り組みが必要であるにも関わらず、現行(7/4時点)の政策には十分に反映されているとは言い難いと考えたため提案しました。\r
あくまでたたき台にすぎないため、更なる加筆・情報提供などいただき、より実効力とヘルスケアへの効果が期待できる施策案にするための議論をご提供いただきたく存じます。\r
本Issueではユースクリニックの話に絞っていますが、関連トピックについては抜け落ちているものも多いため、都度別途Issueを立てて議論いただけますと幸いです。

### 調べたこと（裏付けとなる事実・ファクト）

現在の東京都の取り組み：[TOKYO YOUTH HEALTHCARE特設サイト](https://www.youth-healthcare.metro.tokyo.lg.jp/)\r
日本の青少年のSRHRに関する意識調査：[I LADY.「性と恋愛 2023」ー 日本の若者のSRHR意識調査 ー](https://www.joicfp.or.jp/jpn/column/sex-and-love-surv2023/)

### 自由記述欄

ユースクリニック・緊急避妊薬無償化に関する参考資料です。\r
- [性の話 楽しく正しく　専門家らの「ユースクリニック」来月1周年　悩み相談や教育　埼玉県内イベントで実施](https://www.tokyo-np.co.jp/article/320334)\r
- [【取材記事】緊急避妊薬と性知識で若者の望まぬ妊娠を防ぐ　誰もが自分の選択を尊重される社会を目指して](https://note.com/mysdg/n/ncba0943dbd12)\r
- ["しあわせのありか"をさぐる北欧+α旅](https://pilcon-wellbeing.studio.site/)\r
`,comments:{totalCount:0},reactions:{totalCount:1},labels:{nodes:[{name:"教育・子育て"},{name:"医療・防災"}]},updatedAt:"2024-07-04T14:31:04Z"},{title:"同性パートナーシップの価値向上（住民税軽減、事実婚と同等の各種契約のワンストップサービスを無償提供（婚姻届に近づける）など）",number:310,createdAt:"2024-07-04T17:08:03Z",url:"https://github.com/takahiroanno2024/election2024/issues/310",state:"OPEN",body:`### 政策ビジョン\r
\r
その他\r
\r
### 政策\r
\r
下記の提案を実施することにより、東京都における同性パートナーシップの価値を大きく向上させ、多様な家族の形を尊重し支援する社会を実現します。これからの東京都が多様性を尊重し、全ての市民が安心して暮らせる社会を築くために、これらの施策が必要と考えます。\r
\r
## 課題と提案\r
\r
### 1. 住民税の減免\r
#### 課題\r
現行の住民税制度は、結婚した男女が子供を持つ可能性を前提に減免措置が取られていますが、同性パートナーにも同様の家族形成の可能性があります。\r
\r
\r
- **同性パートナーシップに基づく住民税減免制度の導入**\r
  - 同性パートナーが正式にパートナーシップを宣言した場合、住民税の減免措置を適用する制度を導入します。これにより、同性カップルも異性愛者のカップルと同様に家族形成を支援します。\r
\r
### 2. 同性パートナーシップの届出をした人に対し、各種契約のワンストップサービスを無償提供\r
#### 課題\r
現在の法律では、同性パートナーは法的な権利が認められず、遺産相続などの面で不利な立場にあります。個別に対応するための行政書士への依頼もコストが高く、知らないと将来的なトラブルの原因となります。\r
婚姻届一枚で守られるさまざまな権利を、一つ一つ行政書士を探してお金を払って契約書を作らなくては行けないのが、非常に大変。\r
\r
#### 提案\r
- **パートナーシップ宣言時の包括的法的支援**\r
  - パートナーシップの宣言を提出した際に、行政書士による一連の契約書作成サービスを提供します。イメージとしては、行政書士が事実婚の男女に対して行うような一連のサービス（遺産相続、住居権、医療同意権など）を無償化し、都から案内します。\r
  - これにより、同性パートナーが法的な保護を受けられるようにし、不安やトラブルを未然に防ぎます。知らないと、後で絶対に後悔するが、知らずに諦めている人は多いため。\r
\r
### 3. 国の特別養子縁組に近い制度の導入\r
これは国が管轄する問題なので難しいかもしれませんが、願望として記載します。\r
\r
#### 課題\r
特別養子縁組は現行法では異性の配偶者間に限られていますが、同性パートナーにも同様の価値ある養子縁組の機会を提供したいというニーズがあります。里親。普通養子縁組とは全く異なり、「自分たちの子供」として養育したい。\r
\r
#### 提案\r
- **特別養子縁組に近い都独自の制度の創設**\r
  - 国の法律に準じつつ、同性パートナーが養親としての権利を持てるような都独自の養子縁組制度を検討します。これにより、同性パートナーも子供を迎え入れ、育てることができる環境を整えます。\r
\r
\r
\r
### 必要だと思ったきっかけ\r
\r
私自身が当事者として、切実に困っているから`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"その他"}]},updatedAt:"2024-07-05T01:22:04Z"}];function eP(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const nP=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,tP=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,rP={};function X1(e,n){return(rP.jsx?tP:nP).test(e)}const oP=/[ \t\n\f\r]/g;function iP(e){return typeof e=="object"?e.type==="text"?G1(e.value):!1:G1(e)}function G1(e){return e.replace(oP,"")===""}class ks{constructor(n,t,r){this.property=n,this.normal=t,r&&(this.space=r)}}ks.prototype.property={};ks.prototype.normal={};ks.prototype.space=null;function Jw(e,n){const t={},r={};let o=-1;for(;++o<e.length;)Object.assign(t,e[o].property),Object.assign(r,e[o].normal);return new ks(t,r,n)}function Eh(e){return e.toLowerCase()}class br{constructor(n,t){this.property=n,this.attribute=t}}br.prototype.space=null;br.prototype.boolean=!1;br.prototype.booleanish=!1;br.prototype.overloadedBoolean=!1;br.prototype.number=!1;br.prototype.commaSeparated=!1;br.prototype.spaceSeparated=!1;br.prototype.commaOrSpaceSeparated=!1;br.prototype.mustUseProperty=!1;br.prototype.defined=!1;let aP=0;const on=Pi(),Qn=Pi(),e6=Pi(),me=Pi(),Pn=Pi(),da=Pi(),Wt=Pi();function Pi(){return 2**++aP}const Ah=Object.freeze(Object.defineProperty({__proto__:null,boolean:on,booleanish:Qn,commaOrSpaceSeparated:Wt,commaSeparated:da,number:me,overloadedBoolean:e6,spaceSeparated:Pn},Symbol.toStringTag,{value:"Module"})),Of=Object.keys(Ah);class s2 extends br{constructor(n,t,r,o){let i=-1;if(super(n,t),q1(this,"space",o),typeof r=="number")for(;++i<Of.length;){const a=Of[i];q1(this,Of[i],(r&Ah[a])===Ah[a])}}}s2.prototype.defined=!0;function q1(e,n,t){t&&(e[n]=t)}const lP={}.hasOwnProperty;function ja(e){const n={},t={};let r;for(r in e.properties)if(lP.call(e.properties,r)){const o=e.properties[r],i=new s2(r,e.transform(e.attributes||{},r),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),n[r]=i,t[Eh(r)]=r,t[Eh(i.attribute)]=r}return new ks(n,t,e.space)}const n6=ja({space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),t6=ja({space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function r6(e,n){return n in e?e[n]:n}function o6(e,n){return r6(e,n.toLowerCase())}const i6=ja({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:o6,properties:{xmlns:null,xmlnsXLink:null}}),a6=ja({transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:Qn,ariaAutoComplete:null,ariaBusy:Qn,ariaChecked:Qn,ariaColCount:me,ariaColIndex:me,ariaColSpan:me,ariaControls:Pn,ariaCurrent:null,ariaDescribedBy:Pn,ariaDetails:null,ariaDisabled:Qn,ariaDropEffect:Pn,ariaErrorMessage:null,ariaExpanded:Qn,ariaFlowTo:Pn,ariaGrabbed:Qn,ariaHasPopup:null,ariaHidden:Qn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Pn,ariaLevel:me,ariaLive:null,ariaModal:Qn,ariaMultiLine:Qn,ariaMultiSelectable:Qn,ariaOrientation:null,ariaOwns:Pn,ariaPlaceholder:null,ariaPosInSet:me,ariaPressed:Qn,ariaReadOnly:Qn,ariaRelevant:null,ariaRequired:Qn,ariaRoleDescription:Pn,ariaRowCount:me,ariaRowIndex:me,ariaRowSpan:me,ariaSelected:Qn,ariaSetSize:me,ariaSort:null,ariaValueMax:me,ariaValueMin:me,ariaValueNow:me,ariaValueText:null,role:null}}),sP=ja({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:o6,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:da,acceptCharset:Pn,accessKey:Pn,action:null,allow:null,allowFullScreen:on,allowPaymentRequest:on,allowUserMedia:on,alt:null,as:null,async:on,autoCapitalize:null,autoComplete:Pn,autoFocus:on,autoPlay:on,blocking:Pn,capture:null,charSet:null,checked:on,cite:null,className:Pn,cols:me,colSpan:null,content:null,contentEditable:Qn,controls:on,controlsList:Pn,coords:me|da,crossOrigin:null,data:null,dateTime:null,decoding:null,default:on,defer:on,dir:null,dirName:null,disabled:on,download:e6,draggable:Qn,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:on,formTarget:null,headers:Pn,height:me,hidden:on,high:me,href:null,hrefLang:null,htmlFor:Pn,httpEquiv:Pn,id:null,imageSizes:null,imageSrcSet:null,inert:on,inputMode:null,integrity:null,is:null,isMap:on,itemId:null,itemProp:Pn,itemRef:Pn,itemScope:on,itemType:Pn,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:on,low:me,manifest:null,max:null,maxLength:me,media:null,method:null,min:null,minLength:me,multiple:on,muted:on,name:null,nonce:null,noModule:on,noValidate:on,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:on,optimum:me,pattern:null,ping:Pn,placeholder:null,playsInline:on,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:on,referrerPolicy:null,rel:Pn,required:on,reversed:on,rows:me,rowSpan:me,sandbox:Pn,scope:null,scoped:on,seamless:on,selected:on,shadowRootClonable:on,shadowRootDelegatesFocus:on,shadowRootMode:null,shape:null,size:me,sizes:null,slot:null,span:me,spellCheck:Qn,src:null,srcDoc:null,srcLang:null,srcSet:null,start:me,step:null,style:null,tabIndex:me,target:null,title:null,translate:null,type:null,typeMustMatch:on,useMap:null,value:Qn,width:me,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Pn,axis:null,background:null,bgColor:null,border:me,borderColor:null,bottomMargin:me,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:on,declare:on,event:null,face:null,frame:null,frameBorder:null,hSpace:me,leftMargin:me,link:null,longDesc:null,lowSrc:null,marginHeight:me,marginWidth:me,noResize:on,noHref:on,noShade:on,noWrap:on,object:null,profile:null,prompt:null,rev:null,rightMargin:me,rules:null,scheme:null,scrolling:Qn,standby:null,summary:null,text:null,topMargin:me,valueType:null,version:null,vAlign:null,vLink:null,vSpace:me,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:on,disableRemotePlayback:on,prefix:null,property:null,results:me,security:null,unselectable:null}}),cP=ja({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:r6,properties:{about:Wt,accentHeight:me,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:me,amplitude:me,arabicForm:null,ascent:me,attributeName:null,attributeType:null,azimuth:me,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:me,by:null,calcMode:null,capHeight:me,className:Pn,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:me,diffuseConstant:me,direction:null,display:null,dur:null,divisor:me,dominantBaseline:null,download:on,dx:null,dy:null,edgeMode:null,editable:null,elevation:me,enableBackground:null,end:null,event:null,exponent:me,externalResourcesRequired:null,fill:null,fillOpacity:me,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:da,g2:da,glyphName:da,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:me,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:me,horizOriginX:me,horizOriginY:me,id:null,ideographic:me,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:me,k:me,k1:me,k2:me,k3:me,k4:me,kernelMatrix:Wt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:me,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:me,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:me,overlineThickness:me,paintOrder:null,panose1:null,path:null,pathLength:me,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Pn,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:me,pointsAtY:me,pointsAtZ:me,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Wt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Wt,rev:Wt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Wt,requiredFeatures:Wt,requiredFonts:Wt,requiredFormats:Wt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:me,specularExponent:me,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:me,strikethroughThickness:me,string:null,stroke:null,strokeDashArray:Wt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:me,strokeOpacity:me,strokeWidth:null,style:null,surfaceScale:me,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Wt,tabIndex:me,tableValues:null,target:null,targetX:me,targetY:me,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Wt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:me,underlineThickness:me,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:me,values:null,vAlphabetic:me,vMathematical:me,vectorEffect:null,vHanging:me,vIdeographic:me,version:null,vertAdvY:me,vertOriginX:me,vertOriginY:me,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:me,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),uP=/^data[-\w.:]+$/i,K1=/-[a-z]/g,dP=/[A-Z]/g;function fP(e,n){const t=Eh(n);let r=n,o=br;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&uP.test(n)){if(n.charAt(4)==="-"){const i=n.slice(5).replace(K1,hP);r="data"+i.charAt(0).toUpperCase()+i.slice(1)}else{const i=n.slice(4);if(!K1.test(i)){let a=i.replace(dP,mP);a.charAt(0)!=="-"&&(a="-"+a),n="data"+a}}o=s2}return new o(r,n)}function mP(e){return"-"+e.toLowerCase()}function hP(e){return e.charAt(1).toUpperCase()}const pP={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},gP=Jw([t6,n6,i6,a6,sP],"html"),c2=Jw([t6,n6,i6,a6,cP],"svg");function bP(e){return e.join(" ").trim()}var l6={},Q1=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,vP=/\n/g,yP=/^\s*/,wP=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,kP=/^:\s*/,CP=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,xP=/^[;\s]*/,SP=/^\s+|\s+$/g,EP=`
`,Y1="/",J1="*",ti="",AP="comment",TP="declaration",IP=function(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,r=1;function o(h){var v=h.match(vP);v&&(t+=v.length);var k=h.lastIndexOf(EP);r=~k?h.length-k:r+h.length}function i(){var h={line:t,column:r};return function(v){return v.position=new a(h),c(),v}}function a(h){this.start=h,this.end={line:t,column:r},this.source=n.source}a.prototype.content=e;function l(h){var v=new Error(n.source+":"+t+":"+r+": "+h);if(v.reason=h,v.filename=n.source,v.line=t,v.column=r,v.source=e,!n.silent)throw v}function s(h){var v=h.exec(e);if(v){var k=v[0];return o(k),e=e.slice(k.length),v}}function c(){s(yP)}function d(h){var v;for(h=h||[];v=u();)v!==!1&&h.push(v);return h}function u(){var h=i();if(!(Y1!=e.charAt(0)||J1!=e.charAt(1))){for(var v=2;ti!=e.charAt(v)&&(J1!=e.charAt(v)||Y1!=e.charAt(v+1));)++v;if(v+=2,ti===e.charAt(v-1))return l("End of comment missing");var k=e.slice(2,v-2);return r+=2,o(k),e=e.slice(v),r+=2,h({type:AP,comment:k})}}function f(){var h=i(),v=s(wP);if(v){if(u(),!s(kP))return l("property missing ':'");var k=s(CP),g=h({type:TP,property:eb(v[0].replace(Q1,ti)),value:k?eb(k[0].replace(Q1,ti)):ti});return s(xP),g}}function m(){var h=[];d(h);for(var v;v=f();)v!==!1&&(h.push(v),d(h));return h}return c(),m()};function eb(e){return e?e.replace(SP,ti):ti}var _P=Gt&&Gt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(l6,"__esModule",{value:!0});var PP=_P(IP);function OP(e,n){var t=null;if(!e||typeof e!="string")return t;var r=(0,PP.default)(e),o=typeof n=="function";return r.forEach(function(i){if(i.type==="declaration"){var a=i.property,l=i.value;o?n(a,l,i):l&&(t=t||{},t[a]=l)}}),t}var nb=l6.default=OP;const FP=nb.default||nb,s6=c6("end"),u2=c6("start");function c6(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function RP(e){const n=u2(e),t=s6(e);if(n&&t)return{start:n,end:t}}function Il(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?tb(e.position):"start"in e||"end"in e?tb(e):"line"in e||"column"in e?Th(e):""}function Th(e){return rb(e&&e.line)+":"+rb(e&&e.column)}function tb(e){return Th(e&&e.start)+"-"+Th(e&&e.end)}function rb(e){return e&&typeof e=="number"?e:1}class St extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let o="",i={},a=!1;if(t&&("line"in t&&"column"in t?i={place:t}:"start"in t&&"end"in t?i={place:t}:"type"in t?i={ancestors:[t],place:t.position}:i={...t}),typeof n=="string"?o=n:!i.cause&&n&&(a=!0,o=n.message,i.cause=n),!i.ruleId&&!i.source&&typeof r=="string"){const s=r.indexOf(":");s===-1?i.ruleId=r:(i.source=r.slice(0,s),i.ruleId=r.slice(s+1))}if(!i.place&&i.ancestors&&i.ancestors){const s=i.ancestors[i.ancestors.length-1];s&&(i.place=s.position)}const l=i.place&&"start"in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file,this.message=o,this.line=l?l.line:void 0,this.name=Il(i.place)||"1:1",this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&typeof i.cause.stack=="string"?i.cause.stack:"",this.actual,this.expected,this.note,this.url}}St.prototype.file="";St.prototype.name="";St.prototype.reason="";St.prototype.message="";St.prototype.stack="";St.prototype.column=void 0;St.prototype.line=void 0;St.prototype.ancestors=void 0;St.prototype.cause=void 0;St.prototype.fatal=void 0;St.prototype.place=void 0;St.prototype.ruleId=void 0;St.prototype.source=void 0;const d2={}.hasOwnProperty,NP=new Map,MP=/[A-Z]/g,LP=/-([a-z])/g,jP=new Set(["table","tbody","thead","tfoot","tr"]),DP=new Set(["td","th"]),u6="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function BP(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let r;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=XP(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=VP(t,n.jsx,n.jsxs)}const o={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:r,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?c2:gP,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},i=d6(o,e,void 0);return i&&typeof i!="string"?i:o.create(e,o.Fragment,{children:i||void 0},void 0)}function d6(e,n,t){if(n.type==="element")return $P(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return zP(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return UP(e,n,t);if(n.type==="mdxjsEsm")return HP(e,n);if(n.type==="root")return ZP(e,n,t);if(n.type==="text")return WP(e,n)}function $P(e,n,t){const r=e.schema;let o=r;n.tagName.toLowerCase()==="svg"&&r.space==="html"&&(o=c2,e.schema=o),e.ancestors.push(n);const i=m6(e,n.tagName,!1),a=GP(e,n);let l=m2(e,n);return jP.has(n.tagName)&&(l=l.filter(function(s){return typeof s=="string"?!iP(s):!0})),f6(e,a,i,n),f2(a,l),e.ancestors.pop(),e.schema=r,e.create(n,i,a,t)}function zP(e,n){if(n.data&&n.data.estree&&e.evaluater){const r=n.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}is(e,n.position)}function HP(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);is(e,n.position)}function UP(e,n,t){const r=e.schema;let o=r;n.name==="svg"&&r.space==="html"&&(o=c2,e.schema=o),e.ancestors.push(n);const i=n.name===null?e.Fragment:m6(e,n.name,!0),a=qP(e,n),l=m2(e,n);return f6(e,a,i,n),f2(a,l),e.ancestors.pop(),e.schema=r,e.create(n,i,a,t)}function ZP(e,n,t){const r={};return f2(r,m2(e,n)),e.create(n,e.Fragment,r,t)}function WP(e,n){return n.value}function f6(e,n,t,r){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=r)}function f2(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function VP(e,n,t){return r;function r(o,i,a,l){const c=Array.isArray(a.children)?t:n;return l?c(i,a,l):c(i,a)}}function XP(e,n){return t;function t(r,o,i,a){const l=Array.isArray(i.children),s=u2(r);return n(o,i,a,l,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function GP(e,n){const t={};let r,o;for(o in n.properties)if(o!=="children"&&d2.call(n.properties,o)){const i=KP(e,o,n.properties[o]);if(i){const[a,l]=i;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&DP.has(n.tagName)?r=l:t[a]=l}}if(r){const i=t.style||(t.style={});i[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function qP(e,n){const t={};for(const r of n.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const i=r.data.estree.body[0];i.type;const a=i.expression;a.type;const l=a.properties[0];l.type,Object.assign(t,e.evaluater.evaluateExpression(l.argument))}else is(e,n.position);else{const o=r.name;let i;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,i=e.evaluater.evaluateExpression(l.expression)}else is(e,n.position);else i=r.value===null?!0:r.value;t[o]=i}return t}function m2(e,n){const t=[];let r=-1;const o=e.passKeys?new Map:NP;for(;++r<n.children.length;){const i=n.children[r];let a;if(e.passKeys){const s=i.type==="element"?i.tagName:i.type==="mdxJsxFlowElement"||i.type==="mdxJsxTextElement"?i.name:void 0;if(s){const c=o.get(s)||0;a=s+"-"+c,o.set(s,c+1)}}const l=d6(e,i,a);l!==void 0&&t.push(l)}return t}function KP(e,n,t){const r=fP(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?eP(t):bP(t)),r.property==="style"){let o=typeof t=="object"?t:QP(e,String(t));return e.stylePropertyNameCase==="css"&&(o=YP(o)),["style",o]}return[e.elementAttributeNameCase==="react"&&r.space?pP[r.property]||r.property:r.attribute,t]}}function QP(e,n){const t={};try{FP(n,r)}catch(o){if(!e.ignoreInvalidStyle){const i=o,a=new St("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw a.file=e.filePath||void 0,a.url=u6+"#cannot-parse-style-attribute",a}}return t;function r(o,i){let a=o;a.slice(0,2)!=="--"&&(a.slice(0,4)==="-ms-"&&(a="ms-"+a.slice(4)),a=a.replace(LP,eO)),t[a]=i}}function m6(e,n,t){let r;if(!t)r={type:"Literal",value:n};else if(n.includes(".")){const o=n.split(".");let i=-1,a;for(;++i<o.length;){const l=X1(o[i])?{type:"Identifier",name:o[i]}:{type:"Literal",value:o[i]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(i&&l.type==="Literal"),optional:!1}:l}r=a}else r=X1(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(r.type==="Literal"){const o=r.value;return d2.call(e.components,o)?e.components[o]:o}if(e.evaluater)return e.evaluater.evaluateExpression(r);is(e)}function is(e,n){const t=new St("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=u6+"#cannot-handle-mdx-estrees-without-createevaluater",t}function YP(e){const n={};let t;for(t in e)d2.call(e,t)&&(n[JP(t)]=e[t]);return n}function JP(e){let n=e.replace(MP,nO);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function eO(e,n){return n.toUpperCase()}function nO(e){return"-"+e.toLowerCase()}const Ff={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},tO={};function h2(e,n){const t=tO,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,o=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return h6(e,r,o)}function h6(e,n,t){if(rO(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return ob(e.children,n,t)}return Array.isArray(e)?ob(e,n,t):""}function ob(e,n,t){const r=[];let o=-1;for(;++o<e.length;)r[o]=h6(e[o],n,t);return r.join("")}function rO(e){return!!(e&&typeof e=="object")}const ib=document.createElement("i");function p2(e){const n="&"+e+";";ib.innerHTML=n;const t=ib.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function cr(e,n,t,r){const o=e.length;let i=0,a;if(n<0?n=-n>o?0:o+n:n=n>o?o:n,t=t>0?t:0,r.length<1e4)a=Array.from(r),a.unshift(n,t),e.splice(...a);else for(t&&e.splice(n,t);i<r.length;)a=r.slice(i,i+1e4),a.unshift(n,0),e.splice(...a),i+=1e4,n+=1e4}function ar(e,n){return e.length>0?(cr(e,e.length,0,n),e):n}const ab={}.hasOwnProperty;function p6(e){const n={};let t=-1;for(;++t<e.length;)oO(n,e[t]);return n}function oO(e,n){let t;for(t in n){const o=(ab.call(e,t)?e[t]:void 0)||(e[t]={}),i=n[t];let a;if(i)for(a in i){ab.call(o,a)||(o[a]=[]);const l=i[a];iO(o[a],Array.isArray(l)?l:l?[l]:[])}}}function iO(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);cr(e,0,0,r)}function g6(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function Or(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Tt=Zo(/[A-Za-z]/),Ct=Zo(/[\dA-Za-z]/),aO=Zo(/[#-'*+\--9=?A-Z^-~]/);function Su(e){return e!==null&&(e<32||e===127)}const Ih=Zo(/\d/),lO=Zo(/[\dA-Fa-f]/),sO=Zo(/[!-/:-@[-`{-~]/);function Ke(e){return e!==null&&e<-2}function An(e){return e!==null&&(e<0||e===32)}function mn(e){return e===-2||e===-1||e===32}const kd=Zo(new RegExp("\\p{P}|\\p{S}","u")),xi=Zo(/\s/);function Zo(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function Da(e){const n=[];let t=-1,r=0,o=0;for(;++t<e.length;){const i=e.charCodeAt(t);let a="";if(i===37&&Ct(e.charCodeAt(t+1))&&Ct(e.charCodeAt(t+2)))o=2;else if(i<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i))||(a=String.fromCharCode(i));else if(i>55295&&i<57344){const l=e.charCodeAt(t+1);i<56320&&l>56319&&l<57344?(a=String.fromCharCode(i,l),o=1):a="�"}else a=String.fromCharCode(i);a&&(n.push(e.slice(r,t),encodeURIComponent(a)),r=t+o+1,a=""),o&&(t+=o,o=0)}return n.join("")+e.slice(r)}function vn(e,n,t,r){const o=r?r-1:Number.POSITIVE_INFINITY;let i=0;return a;function a(s){return mn(s)?(e.enter(t),l(s)):n(s)}function l(s){return mn(s)&&i++<o?(e.consume(s),l):(e.exit(t),n(s))}}const cO={tokenize:uO};function uO(e){const n=e.attempt(this.parser.constructs.contentInitial,r,o);let t;return n;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),vn(e,n,"linePrefix")}function o(l){return e.enter("paragraph"),i(l)}function i(l){const s=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=s),t=s,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return Ke(l)?(e.consume(l),e.exit("chunkText"),i):(e.consume(l),a)}}const dO={tokenize:fO},lb={tokenize:mO};function fO(e){const n=this,t=[];let r=0,o,i,a;return l;function l(y){if(r<t.length){const S=t[r];return n.containerState=S[1],e.attempt(S[0].continuation,s,c)(y)}return c(y)}function s(y){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,o&&b();const S=n.events.length;let A=S,w;for(;A--;)if(n.events[A][0]==="exit"&&n.events[A][1].type==="chunkFlow"){w=n.events[A][1].end;break}g(r);let I=S;for(;I<n.events.length;)n.events[I][1].end=Object.assign({},w),I++;return cr(n.events,A+1,0,n.events.slice(S)),n.events.length=I,c(y)}return l(y)}function c(y){if(r===t.length){if(!o)return f(y);if(o.currentConstruct&&o.currentConstruct.concrete)return h(y);n.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(lb,d,u)(y)}function d(y){return o&&b(),g(r),f(y)}function u(y){return n.parser.lazy[n.now().line]=r!==t.length,a=n.now().offset,h(y)}function f(y){return n.containerState={},e.attempt(lb,m,h)(y)}function m(y){return r++,t.push([n.currentConstruct,n.containerState]),f(y)}function h(y){if(y===null){o&&b(),g(0),e.consume(y);return}return o=o||n.parser.flow(n.now()),e.enter("chunkFlow",{contentType:"flow",previous:i,_tokenizer:o}),v(y)}function v(y){if(y===null){k(e.exit("chunkFlow"),!0),g(0),e.consume(y);return}return Ke(y)?(e.consume(y),k(e.exit("chunkFlow")),r=0,n.interrupt=void 0,l):(e.consume(y),v)}function k(y,S){const A=n.sliceStream(y);if(S&&A.push(null),y.previous=i,i&&(i.next=y),i=y,o.defineSkip(y.start),o.write(A),n.parser.lazy[y.start.line]){let w=o.events.length;for(;w--;)if(o.events[w][1].start.offset<a&&(!o.events[w][1].end||o.events[w][1].end.offset>a))return;const I=n.events.length;let R=I,M,_;for(;R--;)if(n.events[R][0]==="exit"&&n.events[R][1].type==="chunkFlow"){if(M){_=n.events[R][1].end;break}M=!0}for(g(r),w=I;w<n.events.length;)n.events[w][1].end=Object.assign({},_),w++;cr(n.events,R+1,0,n.events.slice(I)),n.events.length=w}}function g(y){let S=t.length;for(;S-- >y;){const A=t[S];n.containerState=A[1],A[0].exit.call(n,e)}t.length=y}function b(){o.write([null]),i=void 0,o=void 0,n.containerState._closeFlow=void 0}}function mO(e,n,t){return vn(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Eu(e){if(e===null||An(e)||xi(e))return 1;if(kd(e))return 2}function Cd(e,n,t){const r=[];let o=-1;for(;++o<e.length;){const i=e[o].resolveAll;i&&!r.includes(i)&&(n=i(n,t),r.push(i))}return n}const _h={name:"attention",tokenize:pO,resolveAll:hO};function hO(e,n){let t=-1,r,o,i,a,l,s,c,d;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(r=t;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const u=Object.assign({},e[r][1].end),f=Object.assign({},e[t][1].start);sb(u,-s),sb(f,s),a={type:s>1?"strongSequence":"emphasisSequence",start:u,end:Object.assign({},e[r][1].end)},l={type:s>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[t][1].start),end:f},i={type:s>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[t][1].start)},o={type:s>1?"strong":"emphasis",start:Object.assign({},a.start),end:Object.assign({},l.end)},e[r][1].end=Object.assign({},a.start),e[t][1].start=Object.assign({},l.end),c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=ar(c,[["enter",e[r][1],n],["exit",e[r][1],n]])),c=ar(c,[["enter",o,n],["enter",a,n],["exit",a,n],["enter",i,n]]),c=ar(c,Cd(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),c=ar(c,[["exit",i,n],["enter",l,n],["exit",l,n],["exit",o,n]]),e[t][1].end.offset-e[t][1].start.offset?(d=2,c=ar(c,[["enter",e[t][1],n],["exit",e[t][1],n]])):d=0,cr(e,r-1,t-r+3,c),t=r+c.length-d-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function pO(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,o=Eu(r);let i;return a;function a(s){return i=s,e.enter("attentionSequence"),l(s)}function l(s){if(s===i)return e.consume(s),l;const c=e.exit("attentionSequence"),d=Eu(s),u=!d||d===2&&o||t.includes(s),f=!o||o===2&&d||t.includes(r);return c._open=!!(i===42?u:u&&(o||!f)),c._close=!!(i===42?f:f&&(d||!u)),n(s)}}function sb(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const gO={name:"autolink",tokenize:bO};function bO(e,n,t){let r=0;return o;function o(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),i}function i(m){return Tt(m)?(e.consume(m),a):m===64?t(m):c(m)}function a(m){return m===43||m===45||m===46||Ct(m)?(r=1,l(m)):c(m)}function l(m){return m===58?(e.consume(m),r=0,s):(m===43||m===45||m===46||Ct(m))&&r++<32?(e.consume(m),l):(r=0,c(m))}function s(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),n):m===null||m===32||m===60||Su(m)?t(m):(e.consume(m),s)}function c(m){return m===64?(e.consume(m),d):aO(m)?(e.consume(m),c):t(m)}function d(m){return Ct(m)?u(m):t(m)}function u(m){return m===46?(e.consume(m),r=0,d):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),n):f(m)}function f(m){if((m===45||Ct(m))&&r++<63){const h=m===45?f:u;return e.consume(m),h}return t(m)}}const Cs={tokenize:vO,partial:!0};function vO(e,n,t){return r;function r(i){return mn(i)?vn(e,o,"linePrefix")(i):o(i)}function o(i){return i===null||Ke(i)?n(i):t(i)}}const b6={name:"blockQuote",tokenize:yO,continuation:{tokenize:wO},exit:kO};function yO(e,n,t){const r=this;return o;function o(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),i}return t(a)}function i(a){return mn(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(a))}}function wO(e,n,t){const r=this;return o;function o(a){return mn(a)?vn(e,i,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):i(a)}function i(a){return e.attempt(b6,n,t)(a)}}function kO(e){e.exit("blockQuote")}const v6={name:"characterEscape",tokenize:CO};function CO(e,n,t){return r;function r(i){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(i),e.exit("escapeMarker"),o}function o(i){return sO(i)?(e.enter("characterEscapeValue"),e.consume(i),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(i)}}const y6={name:"characterReference",tokenize:xO};function xO(e,n,t){const r=this;let o=0,i,a;return l;function l(u){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(u),e.exit("characterReferenceMarker"),s}function s(u){return u===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(u),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),i=31,a=Ct,d(u))}function c(u){return u===88||u===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(u),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),i=6,a=lO,d):(e.enter("characterReferenceValue"),i=7,a=Ih,d(u))}function d(u){if(u===59&&o){const f=e.exit("characterReferenceValue");return a===Ct&&!p2(r.sliceSerialize(f))?t(u):(e.enter("characterReferenceMarker"),e.consume(u),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return a(u)&&o++<i?(e.consume(u),d):t(u)}}const cb={tokenize:EO,partial:!0},ub={name:"codeFenced",tokenize:SO,concrete:!0};function SO(e,n,t){const r=this,o={tokenize:A,partial:!0};let i=0,a=0,l;return s;function s(w){return c(w)}function c(w){const I=r.events[r.events.length-1];return i=I&&I[1].type==="linePrefix"?I[2].sliceSerialize(I[1],!0).length:0,l=w,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(w)}function d(w){return w===l?(a++,e.consume(w),d):a<3?t(w):(e.exit("codeFencedFenceSequence"),mn(w)?vn(e,u,"whitespace")(w):u(w))}function u(w){return w===null||Ke(w)?(e.exit("codeFencedFence"),r.interrupt?n(w):e.check(cb,v,S)(w)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(w))}function f(w){return w===null||Ke(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),u(w)):mn(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),vn(e,m,"whitespace")(w)):w===96&&w===l?t(w):(e.consume(w),f)}function m(w){return w===null||Ke(w)?u(w):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),h(w))}function h(w){return w===null||Ke(w)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),u(w)):w===96&&w===l?t(w):(e.consume(w),h)}function v(w){return e.attempt(o,S,k)(w)}function k(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),g}function g(w){return i>0&&mn(w)?vn(e,b,"linePrefix",i+1)(w):b(w)}function b(w){return w===null||Ke(w)?e.check(cb,v,S)(w):(e.enter("codeFlowValue"),y(w))}function y(w){return w===null||Ke(w)?(e.exit("codeFlowValue"),b(w)):(e.consume(w),y)}function S(w){return e.exit("codeFenced"),n(w)}function A(w,I,R){let M=0;return _;function _(V){return w.enter("lineEnding"),w.consume(V),w.exit("lineEnding"),D}function D(V){return w.enter("codeFencedFence"),mn(V)?vn(w,H,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(V):H(V)}function H(V){return V===l?(w.enter("codeFencedFenceSequence"),j(V)):R(V)}function j(V){return V===l?(M++,w.consume(V),j):M>=a?(w.exit("codeFencedFenceSequence"),mn(V)?vn(w,B,"whitespace")(V):B(V)):R(V)}function B(V){return V===null||Ke(V)?(w.exit("codeFencedFence"),I(V)):R(V)}}}function EO(e,n,t){const r=this;return o;function o(a){return a===null?t(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i)}function i(a){return r.parser.lazy[r.now().line]?t(a):n(a)}}const Rf={name:"codeIndented",tokenize:TO},AO={tokenize:IO,partial:!0};function TO(e,n,t){const r=this;return o;function o(c){return e.enter("codeIndented"),vn(e,i,"linePrefix",5)(c)}function i(c){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(c):t(c)}function a(c){return c===null?s(c):Ke(c)?e.attempt(AO,a,s)(c):(e.enter("codeFlowValue"),l(c))}function l(c){return c===null||Ke(c)?(e.exit("codeFlowValue"),a(c)):(e.consume(c),l)}function s(c){return e.exit("codeIndented"),n(c)}}function IO(e,n,t){const r=this;return o;function o(a){return r.parser.lazy[r.now().line]?t(a):Ke(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):vn(e,i,"linePrefix",5)(a)}function i(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(a):Ke(a)?o(a):t(a)}}const _O={name:"codeText",tokenize:FO,resolve:PO,previous:OO};function PO(e){let n=e.length-4,t=3,r,o;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)o===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(o=r):(r===n||e[r][1].type==="lineEnding")&&(e[o][1].type="codeTextData",r!==o+2&&(e[o][1].end=e[r-1][1].end,e.splice(o+2,r-o-2),n-=r-o-2,r=o+2),o=void 0);return e}function OO(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function FO(e,n,t){let r=0,o,i;return a;function a(u){return e.enter("codeText"),e.enter("codeTextSequence"),l(u)}function l(u){return u===96?(e.consume(u),r++,l):(e.exit("codeTextSequence"),s(u))}function s(u){return u===null?t(u):u===32?(e.enter("space"),e.consume(u),e.exit("space"),s):u===96?(i=e.enter("codeTextSequence"),o=0,d(u)):Ke(u)?(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),s):(e.enter("codeTextData"),c(u))}function c(u){return u===null||u===32||u===96||Ke(u)?(e.exit("codeTextData"),s(u)):(e.consume(u),c)}function d(u){return u===96?(e.consume(u),o++,d):o===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(u)):(i.type="codeTextData",c(u))}}class RO{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const o=t||0;this.setCursor(Math.trunc(n));const i=this.right.splice(this.right.length-o,Number.POSITIVE_INFINITY);return r&&il(this.left,r),i.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),il(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),il(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);il(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);il(this.left,t.reverse())}}}function il(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function w6(e){const n={};let t=-1,r,o,i,a,l,s,c;const d=new RO(e);for(;++t<d.length;){for(;t in n;)t=n[t];if(r=d.get(t),t&&r[1].type==="chunkFlow"&&d.get(t-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,i=0,i<s.length&&s[i][1].type==="lineEndingBlank"&&(i+=2),i<s.length&&s[i][1].type==="content"))for(;++i<s.length&&s[i][1].type!=="content";)s[i][1].type==="chunkText"&&(s[i][1]._isInFirstContentOfListItem=!0,i++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,NO(d,t)),t=n[t],c=!0);else if(r[1]._container){for(i=t,o=void 0;i--&&(a=d.get(i),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank");)a[0]==="enter"&&(o&&(d.get(o)[1].type="lineEndingBlank"),a[1].type="lineEnding",o=i);o&&(r[1].end=Object.assign({},d.get(o)[1].start),l=d.slice(o,t),l.unshift(r),d.splice(o,t-o+1,l))}}return cr(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!c}function NO(e,n){const t=e.get(n)[1],r=e.get(n)[2];let o=n-1;const i=[],a=t._tokenizer||r.parser[t.contentType](t.start),l=a.events,s=[],c={};let d,u,f=-1,m=t,h=0,v=0;const k=[v];for(;m;){for(;e.get(++o)[1]!==m;);i.push(o),m._tokenizer||(d=r.sliceStream(m),m.next||d.push(null),u&&a.defineSkip(m.start),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),u=m,m=m.next}for(m=t;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(v=f+1,k.push(v),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(a.events=[],m?(m._tokenizer=void 0,m.previous=void 0):k.pop(),f=k.length;f--;){const g=l.slice(k[f],k[f+1]),b=i.pop();s.push([b,b+g.length-1]),e.splice(b,2,g)}for(s.reverse(),f=-1;++f<s.length;)c[h+s[f][0]]=h+s[f][1],h+=s[f][1]-s[f][0]-1;return c}const MO={tokenize:DO,resolve:jO},LO={tokenize:BO,partial:!0};function jO(e){return w6(e),e}function DO(e,n){let t;return r;function r(l){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),o(l)}function o(l){return l===null?i(l):Ke(l)?e.check(LO,a,i)(l):(e.consume(l),o)}function i(l){return e.exit("chunkContent"),e.exit("content"),n(l)}function a(l){return e.consume(l),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,o}}function BO(e,n,t){const r=this;return o;function o(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),vn(e,i,"linePrefix")}function i(a){if(a===null||Ke(a))return t(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(a):e.interrupt(r.parser.constructs.flow,t,n)(a)}}function k6(e,n,t,r,o,i,a,l,s){const c=s||Number.POSITIVE_INFINITY;let d=0;return u;function u(g){return g===60?(e.enter(r),e.enter(o),e.enter(i),e.consume(g),e.exit(i),f):g===null||g===32||g===41||Su(g)?t(g):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),v(g))}function f(g){return g===62?(e.enter(i),e.consume(g),e.exit(i),e.exit(o),e.exit(r),n):(e.enter(l),e.enter("chunkString",{contentType:"string"}),m(g))}function m(g){return g===62?(e.exit("chunkString"),e.exit(l),f(g)):g===null||g===60||Ke(g)?t(g):(e.consume(g),g===92?h:m)}function h(g){return g===60||g===62||g===92?(e.consume(g),m):m(g)}function v(g){return!d&&(g===null||g===41||An(g))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),n(g)):d<c&&g===40?(e.consume(g),d++,v):g===41?(e.consume(g),d--,v):g===null||g===32||g===40||Su(g)?t(g):(e.consume(g),g===92?k:v)}function k(g){return g===40||g===41||g===92?(e.consume(g),v):v(g)}}function C6(e,n,t,r,o,i){const a=this;let l=0,s;return c;function c(m){return e.enter(r),e.enter(o),e.consume(m),e.exit(o),e.enter(i),d}function d(m){return l>999||m===null||m===91||m===93&&!s||m===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?t(m):m===93?(e.exit(i),e.enter(o),e.consume(m),e.exit(o),e.exit(r),n):Ke(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),u(m))}function u(m){return m===null||m===91||m===93||Ke(m)||l++>999?(e.exit("chunkString"),d(m)):(e.consume(m),s||(s=!mn(m)),m===92?f:u)}function f(m){return m===91||m===92||m===93?(e.consume(m),l++,u):u(m)}}function x6(e,n,t,r,o,i){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(o),e.consume(f),e.exit(o),a=f===40?41:f,s):t(f)}function s(f){return f===a?(e.enter(o),e.consume(f),e.exit(o),e.exit(r),n):(e.enter(i),c(f))}function c(f){return f===a?(e.exit(i),s(a)):f===null?t(f):Ke(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),vn(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||Ke(f)?(e.exit("chunkString"),c(f)):(e.consume(f),f===92?u:d)}function u(f){return f===a||f===92?(e.consume(f),d):d(f)}}function _l(e,n){let t;return r;function r(o){return Ke(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t=!0,r):mn(o)?vn(e,r,t?"linePrefix":"lineSuffix")(o):n(o)}}const $O={name:"definition",tokenize:HO},zO={tokenize:UO,partial:!0};function HO(e,n,t){const r=this;let o;return i;function i(m){return e.enter("definition"),a(m)}function a(m){return C6.call(r,e,l,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function l(m){return o=Or(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),s):t(m)}function s(m){return An(m)?_l(e,c)(m):c(m)}function c(m){return k6(e,d,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function d(m){return e.attempt(zO,u,u)(m)}function u(m){return mn(m)?vn(e,f,"whitespace")(m):f(m)}function f(m){return m===null||Ke(m)?(e.exit("definition"),r.parser.defined.push(o),n(m)):t(m)}}function UO(e,n,t){return r;function r(l){return An(l)?_l(e,o)(l):t(l)}function o(l){return x6(e,i,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function i(l){return mn(l)?vn(e,a,"whitespace")(l):a(l)}function a(l){return l===null||Ke(l)?n(l):t(l)}}const ZO={name:"hardBreakEscape",tokenize:WO};function WO(e,n,t){return r;function r(i){return e.enter("hardBreakEscape"),e.consume(i),o}function o(i){return Ke(i)?(e.exit("hardBreakEscape"),n(i)):t(i)}}const VO={name:"headingAtx",tokenize:GO,resolve:XO};function XO(e,n){let t=e.length-2,r=3,o,i;return e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(o={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},i={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"},cr(e,r,t-r+1,[["enter",o,n],["enter",i,n],["exit",i,n],["exit",o,n]])),e}function GO(e,n,t){let r=0;return o;function o(d){return e.enter("atxHeading"),i(d)}function i(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||An(d)?(e.exit("atxHeadingSequence"),l(d)):t(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),s(d)):d===null||Ke(d)?(e.exit("atxHeading"),n(d)):mn(d)?vn(e,l,"whitespace")(d):(e.enter("atxHeadingText"),c(d))}function s(d){return d===35?(e.consume(d),s):(e.exit("atxHeadingSequence"),l(d))}function c(d){return d===null||d===35||An(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),c)}}const qO=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],db=["pre","script","style","textarea"],KO={name:"htmlFlow",tokenize:eF,resolveTo:JO,concrete:!0},QO={tokenize:tF,partial:!0},YO={tokenize:nF,partial:!0};function JO(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function eF(e,n,t){const r=this;let o,i,a,l,s;return c;function c(T){return d(T)}function d(T){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(T),u}function u(T){return T===33?(e.consume(T),f):T===47?(e.consume(T),i=!0,v):T===63?(e.consume(T),o=3,r.interrupt?n:x):Tt(T)?(e.consume(T),a=String.fromCharCode(T),k):t(T)}function f(T){return T===45?(e.consume(T),o=2,m):T===91?(e.consume(T),o=5,l=0,h):Tt(T)?(e.consume(T),o=4,r.interrupt?n:x):t(T)}function m(T){return T===45?(e.consume(T),r.interrupt?n:x):t(T)}function h(T){const Q="CDATA[";return T===Q.charCodeAt(l++)?(e.consume(T),l===Q.length?r.interrupt?n:H:h):t(T)}function v(T){return Tt(T)?(e.consume(T),a=String.fromCharCode(T),k):t(T)}function k(T){if(T===null||T===47||T===62||An(T)){const Q=T===47,ne=a.toLowerCase();return!Q&&!i&&db.includes(ne)?(o=1,r.interrupt?n(T):H(T)):qO.includes(a.toLowerCase())?(o=6,Q?(e.consume(T),g):r.interrupt?n(T):H(T)):(o=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(T):i?b(T):y(T))}return T===45||Ct(T)?(e.consume(T),a+=String.fromCharCode(T),k):t(T)}function g(T){return T===62?(e.consume(T),r.interrupt?n:H):t(T)}function b(T){return mn(T)?(e.consume(T),b):_(T)}function y(T){return T===47?(e.consume(T),_):T===58||T===95||Tt(T)?(e.consume(T),S):mn(T)?(e.consume(T),y):_(T)}function S(T){return T===45||T===46||T===58||T===95||Ct(T)?(e.consume(T),S):A(T)}function A(T){return T===61?(e.consume(T),w):mn(T)?(e.consume(T),A):y(T)}function w(T){return T===null||T===60||T===61||T===62||T===96?t(T):T===34||T===39?(e.consume(T),s=T,I):mn(T)?(e.consume(T),w):R(T)}function I(T){return T===s?(e.consume(T),s=null,M):T===null||Ke(T)?t(T):(e.consume(T),I)}function R(T){return T===null||T===34||T===39||T===47||T===60||T===61||T===62||T===96||An(T)?A(T):(e.consume(T),R)}function M(T){return T===47||T===62||mn(T)?y(T):t(T)}function _(T){return T===62?(e.consume(T),D):t(T)}function D(T){return T===null||Ke(T)?H(T):mn(T)?(e.consume(T),D):t(T)}function H(T){return T===45&&o===2?(e.consume(T),$):T===60&&o===1?(e.consume(T),O):T===62&&o===4?(e.consume(T),G):T===63&&o===3?(e.consume(T),x):T===93&&o===5?(e.consume(T),W):Ke(T)&&(o===6||o===7)?(e.exit("htmlFlowData"),e.check(QO,Z,j)(T)):T===null||Ke(T)?(e.exit("htmlFlowData"),j(T)):(e.consume(T),H)}function j(T){return e.check(YO,B,Z)(T)}function B(T){return e.enter("lineEnding"),e.consume(T),e.exit("lineEnding"),V}function V(T){return T===null||Ke(T)?j(T):(e.enter("htmlFlowData"),H(T))}function $(T){return T===45?(e.consume(T),x):H(T)}function O(T){return T===47?(e.consume(T),a="",P):H(T)}function P(T){if(T===62){const Q=a.toLowerCase();return db.includes(Q)?(e.consume(T),G):H(T)}return Tt(T)&&a.length<8?(e.consume(T),a+=String.fromCharCode(T),P):H(T)}function W(T){return T===93?(e.consume(T),x):H(T)}function x(T){return T===62?(e.consume(T),G):T===45&&o===2?(e.consume(T),x):H(T)}function G(T){return T===null||Ke(T)?(e.exit("htmlFlowData"),Z(T)):(e.consume(T),G)}function Z(T){return e.exit("htmlFlow"),n(T)}}function nF(e,n,t){const r=this;return o;function o(a){return Ke(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):t(a)}function i(a){return r.parser.lazy[r.now().line]?t(a):n(a)}}function tF(e,n,t){return r;function r(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),e.attempt(Cs,n,t)}}const rF={name:"htmlText",tokenize:oF};function oF(e,n,t){const r=this;let o,i,a;return l;function l(x){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(x),s}function s(x){return x===33?(e.consume(x),c):x===47?(e.consume(x),A):x===63?(e.consume(x),y):Tt(x)?(e.consume(x),R):t(x)}function c(x){return x===45?(e.consume(x),d):x===91?(e.consume(x),i=0,h):Tt(x)?(e.consume(x),b):t(x)}function d(x){return x===45?(e.consume(x),m):t(x)}function u(x){return x===null?t(x):x===45?(e.consume(x),f):Ke(x)?(a=u,O(x)):(e.consume(x),u)}function f(x){return x===45?(e.consume(x),m):u(x)}function m(x){return x===62?$(x):x===45?f(x):u(x)}function h(x){const G="CDATA[";return x===G.charCodeAt(i++)?(e.consume(x),i===G.length?v:h):t(x)}function v(x){return x===null?t(x):x===93?(e.consume(x),k):Ke(x)?(a=v,O(x)):(e.consume(x),v)}function k(x){return x===93?(e.consume(x),g):v(x)}function g(x){return x===62?$(x):x===93?(e.consume(x),g):v(x)}function b(x){return x===null||x===62?$(x):Ke(x)?(a=b,O(x)):(e.consume(x),b)}function y(x){return x===null?t(x):x===63?(e.consume(x),S):Ke(x)?(a=y,O(x)):(e.consume(x),y)}function S(x){return x===62?$(x):y(x)}function A(x){return Tt(x)?(e.consume(x),w):t(x)}function w(x){return x===45||Ct(x)?(e.consume(x),w):I(x)}function I(x){return Ke(x)?(a=I,O(x)):mn(x)?(e.consume(x),I):$(x)}function R(x){return x===45||Ct(x)?(e.consume(x),R):x===47||x===62||An(x)?M(x):t(x)}function M(x){return x===47?(e.consume(x),$):x===58||x===95||Tt(x)?(e.consume(x),_):Ke(x)?(a=M,O(x)):mn(x)?(e.consume(x),M):$(x)}function _(x){return x===45||x===46||x===58||x===95||Ct(x)?(e.consume(x),_):D(x)}function D(x){return x===61?(e.consume(x),H):Ke(x)?(a=D,O(x)):mn(x)?(e.consume(x),D):M(x)}function H(x){return x===null||x===60||x===61||x===62||x===96?t(x):x===34||x===39?(e.consume(x),o=x,j):Ke(x)?(a=H,O(x)):mn(x)?(e.consume(x),H):(e.consume(x),B)}function j(x){return x===o?(e.consume(x),o=void 0,V):x===null?t(x):Ke(x)?(a=j,O(x)):(e.consume(x),j)}function B(x){return x===null||x===34||x===39||x===60||x===61||x===96?t(x):x===47||x===62||An(x)?M(x):(e.consume(x),B)}function V(x){return x===47||x===62||An(x)?M(x):t(x)}function $(x){return x===62?(e.consume(x),e.exit("htmlTextData"),e.exit("htmlText"),n):t(x)}function O(x){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),P}function P(x){return mn(x)?vn(e,W,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):W(x)}function W(x){return e.enter("htmlTextData"),a(x)}}const g2={name:"labelEnd",tokenize:uF,resolveTo:cF,resolveAll:sF},iF={tokenize:dF},aF={tokenize:fF},lF={tokenize:mF};function sF(e){let n=-1;for(;++n<e.length;){const t=e[n][1];(t.type==="labelImage"||t.type==="labelLink"||t.type==="labelEnd")&&(e.splice(n+1,t.type==="labelImage"?4:2),t.type="data",n++)}return e}function cF(e,n){let t=e.length,r=0,o,i,a,l;for(;t--;)if(o=e[t][1],i){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;e[t][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(a){if(e[t][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(i=t,o.type!=="labelLink")){r=2;break}}else o.type==="labelEnd"&&(a=t);const s={type:e[i][1].type==="labelLink"?"link":"image",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)},c={type:"label",start:Object.assign({},e[i][1].start),end:Object.assign({},e[a][1].end)},d={type:"labelText",start:Object.assign({},e[i+r+2][1].end),end:Object.assign({},e[a-2][1].start)};return l=[["enter",s,n],["enter",c,n]],l=ar(l,e.slice(i+1,i+r+3)),l=ar(l,[["enter",d,n]]),l=ar(l,Cd(n.parser.constructs.insideSpan.null,e.slice(i+r+4,a-3),n)),l=ar(l,[["exit",d,n],e[a-2],e[a-1],["exit",c,n]]),l=ar(l,e.slice(a+1)),l=ar(l,[["exit",s,n]]),cr(e,i,e.length,l),e}function uF(e,n,t){const r=this;let o=r.events.length,i,a;for(;o--;)if((r.events[o][1].type==="labelImage"||r.events[o][1].type==="labelLink")&&!r.events[o][1]._balanced){i=r.events[o][1];break}return l;function l(f){return i?i._inactive?u(f):(a=r.parser.defined.includes(Or(r.sliceSerialize({start:i.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),s):t(f)}function s(f){return f===40?e.attempt(iF,d,a?d:u)(f):f===91?e.attempt(aF,d,a?c:u)(f):a?d(f):u(f)}function c(f){return e.attempt(lF,d,u)(f)}function d(f){return n(f)}function u(f){return i._balanced=!0,t(f)}}function dF(e,n,t){return r;function r(u){return e.enter("resource"),e.enter("resourceMarker"),e.consume(u),e.exit("resourceMarker"),o}function o(u){return An(u)?_l(e,i)(u):i(u)}function i(u){return u===41?d(u):k6(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(u)}function a(u){return An(u)?_l(e,s)(u):d(u)}function l(u){return t(u)}function s(u){return u===34||u===39||u===40?x6(e,c,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(u):d(u)}function c(u){return An(u)?_l(e,d)(u):d(u)}function d(u){return u===41?(e.enter("resourceMarker"),e.consume(u),e.exit("resourceMarker"),e.exit("resource"),n):t(u)}}function fF(e,n,t){const r=this;return o;function o(l){return C6.call(r,e,i,a,"reference","referenceMarker","referenceString")(l)}function i(l){return r.parser.defined.includes(Or(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(l):t(l)}function a(l){return t(l)}}function mF(e,n,t){return r;function r(i){return e.enter("reference"),e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),o}function o(i){return i===93?(e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),e.exit("reference"),n):t(i)}}const hF={name:"labelStartImage",tokenize:pF,resolveAll:g2.resolveAll};function pF(e,n,t){const r=this;return o;function o(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),i}function i(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):t(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(l):n(l)}}const gF={name:"labelStartLink",tokenize:bF,resolveAll:g2.resolveAll};function bF(e,n,t){const r=this;return o;function o(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),i}function i(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(a):n(a)}}const Nf={name:"lineEnding",tokenize:vF};function vF(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),vn(e,n,"linePrefix")}}const Fc={name:"thematicBreak",tokenize:yF};function yF(e,n,t){let r=0,o;return i;function i(c){return e.enter("thematicBreak"),a(c)}function a(c){return o=c,l(c)}function l(c){return c===o?(e.enter("thematicBreakSequence"),s(c)):r>=3&&(c===null||Ke(c))?(e.exit("thematicBreak"),n(c)):t(c)}function s(c){return c===o?(e.consume(c),r++,s):(e.exit("thematicBreakSequence"),mn(c)?vn(e,l,"whitespace")(c):l(c))}}const Nt={name:"list",tokenize:CF,continuation:{tokenize:xF},exit:EF},wF={tokenize:AF,partial:!0},kF={tokenize:SF,partial:!0};function CF(e,n,t){const r=this,o=r.events[r.events.length-1];let i=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,a=0;return l;function l(m){const h=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(h==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:Ih(m)){if(r.containerState.type||(r.containerState.type=h,e.enter(h,{_container:!0})),h==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(Fc,t,c)(m):c(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(m)}return t(m)}function s(m){return Ih(m)&&++a<10?(e.consume(m),s):(!r.interrupt||a<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),c(m)):t(m)}function c(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(Cs,r.interrupt?t:d,e.attempt(wF,f,u))}function d(m){return r.containerState.initialBlankLine=!0,i++,f(m)}function u(m){return mn(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),f):t(m)}function f(m){return r.containerState.size=i+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(m)}}function xF(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(Cs,o,i);function o(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,vn(e,n,"listItemIndent",r.containerState.size+1)(l)}function i(l){return r.containerState.furtherBlankLines||!mn(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(kF,n,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,vn(e,e.attempt(Nt,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function SF(e,n,t){const r=this;return vn(e,o,"listItemIndent",r.containerState.size+1);function o(i){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?n(i):t(i)}}function EF(e){e.exit(this.containerState.type)}function AF(e,n,t){const r=this;return vn(e,o,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function o(i){const a=r.events[r.events.length-1];return!mn(i)&&a&&a[1].type==="listItemPrefixWhitespace"?n(i):t(i)}}const fb={name:"setextUnderline",tokenize:IF,resolveTo:TF};function TF(e,n){let t=e.length,r,o,i;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){r=t;break}e[t][1].type==="paragraph"&&(o=t)}else e[t][1].type==="content"&&e.splice(t,1),!i&&e[t][1].type==="definition"&&(i=t);const a={type:"setextHeading",start:Object.assign({},e[o][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[o][1].type="setextHeadingText",i?(e.splice(o,0,["enter",a,n]),e.splice(i+1,0,["exit",e[r][1],n]),e[r][1].end=Object.assign({},e[i][1].end)):e[r][1]=a,e.push(["exit",a,n]),e}function IF(e,n,t){const r=this;let o;return i;function i(c){let d=r.events.length,u;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){u=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||u)?(e.enter("setextHeadingLine"),o=c,a(c)):t(c)}function a(c){return e.enter("setextHeadingLineSequence"),l(c)}function l(c){return c===o?(e.consume(c),l):(e.exit("setextHeadingLineSequence"),mn(c)?vn(e,s,"lineSuffix")(c):s(c))}function s(c){return c===null||Ke(c)?(e.exit("setextHeadingLine"),n(c)):t(c)}}const _F={tokenize:PF};function PF(e){const n=this,t=e.attempt(Cs,r,e.attempt(this.parser.constructs.flowInitial,o,vn(e,e.attempt(this.parser.constructs.flow,o,e.attempt(MO,o)),"linePrefix")));return t;function r(i){if(i===null){e.consume(i);return}return e.enter("lineEndingBlank"),e.consume(i),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function o(i){if(i===null){e.consume(i);return}return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const OF={resolveAll:E6()},FF=S6("string"),RF=S6("text");function S6(e){return{tokenize:n,resolveAll:E6(e==="text"?NF:void 0)};function n(t){const r=this,o=this.parser.constructs[e],i=t.attempt(o,a,l);return a;function a(d){return c(d)?i(d):l(d)}function l(d){if(d===null){t.consume(d);return}return t.enter("data"),t.consume(d),s}function s(d){return c(d)?(t.exit("data"),i(d)):(t.consume(d),s)}function c(d){if(d===null)return!0;const u=o[d];let f=-1;if(u)for(;++f<u.length;){const m=u[f];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function E6(e){return n;function n(t,r){let o=-1,i;for(;++o<=t.length;)i===void 0?t[o]&&t[o][1].type==="data"&&(i=o,o++):(!t[o]||t[o][1].type!=="data")&&(o!==i+2&&(t[i][1].end=t[o-1][1].end,t.splice(i+2,o-i-2),o=i+2),i=void 0);return e?e(t,r):t}}function NF(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const r=e[t-1][1],o=n.sliceStream(r);let i=o.length,a=-1,l=0,s;for(;i--;){const c=o[i];if(typeof c=="string"){for(a=c.length;c.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(c===-2)s=!0,l++;else if(c!==-1){i++;break}}if(l){const c={type:t===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-l,offset:r.end.offset-l,_index:r.start._index+i,_bufferIndex:i?a:r.start._bufferIndex+a},end:Object.assign({},r.end)};r.end=Object.assign({},c.start),r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(t,0,["enter",c,n],["exit",c,n]),t+=2)}t++}return e}function MF(e,n,t){let r=Object.assign(t?Object.assign({},t):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const o={},i=[];let a=[],l=[];const s={consume:b,enter:y,exit:S,attempt:I(A),check:I(w),interrupt:I(w,{interrupt:!0})},c={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:m,sliceSerialize:f,now:h,defineSkip:v,write:u};let d=n.tokenize.call(c,s);return n.resolveAll&&i.push(n),c;function u(D){return a=ar(a,D),k(),a[a.length-1]!==null?[]:(R(n,0),c.events=Cd(i,c.events,c),c.events)}function f(D,H){return jF(m(D),H)}function m(D){return LF(a,D)}function h(){const{line:D,column:H,offset:j,_index:B,_bufferIndex:V}=r;return{line:D,column:H,offset:j,_index:B,_bufferIndex:V}}function v(D){o[D.line]=D.column,_()}function k(){let D;for(;r._index<a.length;){const H=a[r._index];if(typeof H=="string")for(D=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===D&&r._bufferIndex<H.length;)g(H.charCodeAt(r._bufferIndex));else g(H)}}function g(D){d=d(D)}function b(D){Ke(D)?(r.line++,r.column=1,r.offset+=D===-3?2:1,_()):D!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=D}function y(D,H){const j=H||{};return j.type=D,j.start=h(),c.events.push(["enter",j,c]),l.push(j),j}function S(D){const H=l.pop();return H.end=h(),c.events.push(["exit",H,c]),H}function A(D,H){R(D,H.from)}function w(D,H){H.restore()}function I(D,H){return j;function j(B,V,$){let O,P,W,x;return Array.isArray(B)?Z(B):"tokenize"in B?Z([B]):G(B);function G(N){return te;function te(Y){const ye=Y!==null&&N[Y],ge=Y!==null&&N.null,Ce=[...Array.isArray(ye)?ye:ye?[ye]:[],...Array.isArray(ge)?ge:ge?[ge]:[]];return Z(Ce)(Y)}}function Z(N){return O=N,P=0,N.length===0?$:T(N[P])}function T(N){return te;function te(Y){return x=M(),W=N,N.partial||(c.currentConstruct=N),N.name&&c.parser.constructs.disable.null.includes(N.name)?ne():N.tokenize.call(H?Object.assign(Object.create(c),H):c,s,Q,ne)(Y)}}function Q(N){return D(W,x),V}function ne(N){return x.restore(),++P<O.length?T(O[P]):$}}}function R(D,H){D.resolveAll&&!i.includes(D)&&i.push(D),D.resolve&&cr(c.events,H,c.events.length-H,D.resolve(c.events.slice(H),c)),D.resolveTo&&(c.events=D.resolveTo(c.events,c))}function M(){const D=h(),H=c.previous,j=c.currentConstruct,B=c.events.length,V=Array.from(l);return{restore:$,from:B};function $(){r=D,c.previous=H,c.currentConstruct=j,c.events.length=B,l=V,_()}}function _(){r.line in o&&r.column<2&&(r.column=o[r.line],r.offset+=o[r.line]-1)}}function LF(e,n){const t=n.start._index,r=n.start._bufferIndex,o=n.end._index,i=n.end._bufferIndex;let a;if(t===o)a=[e[t].slice(r,i)];else{if(a=e.slice(t,o),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}i>0&&a.push(e[o].slice(0,i))}return a}function jF(e,n){let t=-1;const r=[];let o;for(;++t<e.length;){const i=e[t];let a;if(typeof i=="string")a=i;else switch(i){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=n?" ":"	";break}case-1:{if(!n&&o)continue;a=" ";break}default:a=String.fromCharCode(i)}o=i===-2,r.push(a)}return r.join("")}const DF={42:Nt,43:Nt,45:Nt,48:Nt,49:Nt,50:Nt,51:Nt,52:Nt,53:Nt,54:Nt,55:Nt,56:Nt,57:Nt,62:b6},BF={91:$O},$F={[-2]:Rf,[-1]:Rf,32:Rf},zF={35:VO,42:Fc,45:[fb,Fc],60:KO,61:fb,95:Fc,96:ub,126:ub},HF={38:y6,92:v6},UF={[-5]:Nf,[-4]:Nf,[-3]:Nf,33:hF,38:y6,42:_h,60:[gO,rF],91:gF,92:[ZO,v6],93:g2,95:_h,96:_O},ZF={null:[_h,OF]},WF={null:[42,95]},VF={null:[]},XF=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:WF,contentInitial:BF,disable:VF,document:DF,flow:zF,flowInitial:$F,insideSpan:ZF,string:HF,text:UF},Symbol.toStringTag,{value:"Module"}));function GF(e){const t=p6([XF,...(e||{}).extensions||[]]),r={defined:[],lazy:{},constructs:t,content:o(cO),document:o(dO),flow:o(_F),string:o(FF),text:o(RF)};return r;function o(i){return a;function a(l){return MF(r,i,l)}}}function qF(e){for(;!w6(e););return e}const mb=/[\0\t\n\r]/g;function KF(){let e=1,n="",t=!0,r;return o;function o(i,a,l){const s=[];let c,d,u,f,m;for(i=n+(typeof i=="string"?i.toString():new TextDecoder(a||void 0).decode(i)),u=0,n="",t&&(i.charCodeAt(0)===65279&&u++,t=void 0);u<i.length;){if(mb.lastIndex=u,c=mb.exec(i),f=c&&c.index!==void 0?c.index:i.length,m=i.charCodeAt(f),!c){n=i.slice(u);break}if(m===10&&u===f&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),u<f&&(s.push(i.slice(u,f)),e+=f-u),m){case 0:{s.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,s.push(-2);e++<d;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=!0,e=1}u=f+1}return l&&(r&&s.push(-5),n&&s.push(n),s.push(null)),s}}const QF=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function YF(e){return e.replace(QF,JF)}function JF(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const o=t.charCodeAt(1),i=o===120||o===88;return g6(t.slice(i?2:1),i?16:10)}return p2(t)||e}const A6={}.hasOwnProperty;function eR(e,n,t){return typeof n!="string"&&(t=n,n=void 0),nR(t)(qF(GF(t).document().write(KF()(e,n,!0))))}function nR(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:i(Te),autolinkProtocol:M,autolinkEmail:M,atxHeading:i(Ae),blockQuote:i(ge),characterEscape:M,characterReference:M,codeFenced:i(Ce),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:i(Ce,a),codeText:i(se,a),codeTextData:M,data:M,codeFlowValue:M,definition:i(Ge),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:i(Ve),hardBreakEscape:i(ae),hardBreakTrailing:i(ae),htmlFlow:i(de,a),htmlFlowData:M,htmlText:i(de,a),htmlTextData:M,image:i(xe),label:a,link:i(Te),listItem:i(Le),listItemValue:f,listOrdered:i(Oe,u),listUnordered:i(Oe),paragraph:i(Qe),reference:T,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:i(Ae),strong:i(Ie),thematicBreak:i(je)},exit:{atxHeading:s(),atxHeadingSequence:A,autolink:s(),autolinkEmail:ye,autolinkProtocol:Y,blockQuote:s(),characterEscapeValue:_,characterReferenceMarkerHexadecimal:ne,characterReferenceMarkerNumeric:ne,characterReferenceValue:N,characterReference:te,codeFenced:s(k),codeFencedFence:v,codeFencedFenceInfo:m,codeFencedFenceMeta:h,codeFlowValue:_,codeIndented:s(g),codeText:s(V),codeTextData:_,data:_,definition:s(),definitionDestinationString:S,definitionLabelString:b,definitionTitleString:y,emphasis:s(),hardBreakEscape:s(H),hardBreakTrailing:s(H),htmlFlow:s(j),htmlFlowData:_,htmlText:s(B),htmlTextData:_,image:s(O),label:W,labelText:P,lineEnding:D,link:s($),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:Q,resourceDestinationString:x,resourceTitleString:G,resource:Z,setextHeading:s(R),setextHeadingLineSequence:I,setextHeadingText:w,strong:s(),thematicBreak:s()}};T6(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(C){let E={type:"root",children:[]};const F={stack:[E],tokenStack:[],config:n,enter:l,exit:c,buffer:a,resume:d,data:t},z=[];let q=-1;for(;++q<C.length;)if(C[q][1].type==="listOrdered"||C[q][1].type==="listUnordered")if(C[q][0]==="enter")z.push(q);else{const K=z.pop();q=o(C,K,q)}for(q=-1;++q<C.length;){const K=n[C[q][0]];A6.call(K,C[q][1].type)&&K[C[q][1].type].call(Object.assign({sliceSerialize:C[q][2].sliceSerialize},F),C[q][1])}if(F.tokenStack.length>0){const K=F.tokenStack[F.tokenStack.length-1];(K[1]||hb).call(F,void 0,K[0])}for(E.position={start:po(C.length>0?C[0][1].start:{line:1,column:1,offset:0}),end:po(C.length>0?C[C.length-2][1].end:{line:1,column:1,offset:0})},q=-1;++q<n.transforms.length;)E=n.transforms[q](E)||E;return E}function o(C,E,F){let z=E-1,q=-1,K=!1,re,ie,he,ce;for(;++z<=F;){const we=C[z];switch(we[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{we[0]==="enter"?q++:q--,ce=void 0;break}case"lineEndingBlank":{we[0]==="enter"&&(re&&!ce&&!q&&!he&&(he=z),ce=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:ce=void 0}if(!q&&we[0]==="enter"&&we[1].type==="listItemPrefix"||q===-1&&we[0]==="exit"&&(we[1].type==="listUnordered"||we[1].type==="listOrdered")){if(re){let ze=z;for(ie=void 0;ze--;){const Ee=C[ze];if(Ee[1].type==="lineEnding"||Ee[1].type==="lineEndingBlank"){if(Ee[0]==="exit")continue;ie&&(C[ie][1].type="lineEndingBlank",K=!0),Ee[1].type="lineEnding",ie=ze}else if(!(Ee[1].type==="linePrefix"||Ee[1].type==="blockQuotePrefix"||Ee[1].type==="blockQuotePrefixWhitespace"||Ee[1].type==="blockQuoteMarker"||Ee[1].type==="listItemIndent"))break}he&&(!ie||he<ie)&&(re._spread=!0),re.end=Object.assign({},ie?C[ie][1].start:we[1].end),C.splice(ie||z,0,["exit",re,we[2]]),z++,F++}if(we[1].type==="listItemPrefix"){const ze={type:"listItem",_spread:!1,start:Object.assign({},we[1].start),end:void 0};re=ze,C.splice(z,0,["enter",ze,we[2]]),z++,F++,he=void 0,ce=!0}}}return C[E][1]._spread=K,F}function i(C,E){return F;function F(z){l.call(this,C(z),z),E&&E.call(this,z)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(C,E,F){this.stack[this.stack.length-1].children.push(C),this.stack.push(C),this.tokenStack.push([E,F]),C.position={start:po(E.start),end:void 0}}function s(C){return E;function E(F){C&&C.call(this,F),c.call(this,F)}}function c(C,E){const F=this.stack.pop(),z=this.tokenStack.pop();if(z)z[0].type!==C.type&&(E?E.call(this,C,z[0]):(z[1]||hb).call(this,C,z[0]));else throw new Error("Cannot close `"+C.type+"` ("+Il({start:C.start,end:C.end})+"): it’s not open");F.position.end=po(C.end)}function d(){return h2(this.stack.pop())}function u(){this.data.expectingFirstListItemValue=!0}function f(C){if(this.data.expectingFirstListItemValue){const E=this.stack[this.stack.length-2];E.start=Number.parseInt(this.sliceSerialize(C),10),this.data.expectingFirstListItemValue=void 0}}function m(){const C=this.resume(),E=this.stack[this.stack.length-1];E.lang=C}function h(){const C=this.resume(),E=this.stack[this.stack.length-1];E.meta=C}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function k(){const C=this.resume(),E=this.stack[this.stack.length-1];E.value=C.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const C=this.resume(),E=this.stack[this.stack.length-1];E.value=C.replace(/(\r?\n|\r)$/g,"")}function b(C){const E=this.resume(),F=this.stack[this.stack.length-1];F.label=E,F.identifier=Or(this.sliceSerialize(C)).toLowerCase()}function y(){const C=this.resume(),E=this.stack[this.stack.length-1];E.title=C}function S(){const C=this.resume(),E=this.stack[this.stack.length-1];E.url=C}function A(C){const E=this.stack[this.stack.length-1];if(!E.depth){const F=this.sliceSerialize(C).length;E.depth=F}}function w(){this.data.setextHeadingSlurpLineEnding=!0}function I(C){const E=this.stack[this.stack.length-1];E.depth=this.sliceSerialize(C).codePointAt(0)===61?1:2}function R(){this.data.setextHeadingSlurpLineEnding=void 0}function M(C){const F=this.stack[this.stack.length-1].children;let z=F[F.length-1];(!z||z.type!=="text")&&(z=oe(),z.position={start:po(C.start),end:void 0},F.push(z)),this.stack.push(z)}function _(C){const E=this.stack.pop();E.value+=this.sliceSerialize(C),E.position.end=po(C.end)}function D(C){const E=this.stack[this.stack.length-1];if(this.data.atHardBreak){const F=E.children[E.children.length-1];F.position.end=po(C.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(E.type)&&(M.call(this,C),_.call(this,C))}function H(){this.data.atHardBreak=!0}function j(){const C=this.resume(),E=this.stack[this.stack.length-1];E.value=C}function B(){const C=this.resume(),E=this.stack[this.stack.length-1];E.value=C}function V(){const C=this.resume(),E=this.stack[this.stack.length-1];E.value=C}function $(){const C=this.stack[this.stack.length-1];if(this.data.inReference){const E=this.data.referenceType||"shortcut";C.type+="Reference",C.referenceType=E,delete C.url,delete C.title}else delete C.identifier,delete C.label;this.data.referenceType=void 0}function O(){const C=this.stack[this.stack.length-1];if(this.data.inReference){const E=this.data.referenceType||"shortcut";C.type+="Reference",C.referenceType=E,delete C.url,delete C.title}else delete C.identifier,delete C.label;this.data.referenceType=void 0}function P(C){const E=this.sliceSerialize(C),F=this.stack[this.stack.length-2];F.label=YF(E),F.identifier=Or(E).toLowerCase()}function W(){const C=this.stack[this.stack.length-1],E=this.resume(),F=this.stack[this.stack.length-1];if(this.data.inReference=!0,F.type==="link"){const z=C.children;F.children=z}else F.alt=E}function x(){const C=this.resume(),E=this.stack[this.stack.length-1];E.url=C}function G(){const C=this.resume(),E=this.stack[this.stack.length-1];E.title=C}function Z(){this.data.inReference=void 0}function T(){this.data.referenceType="collapsed"}function Q(C){const E=this.resume(),F=this.stack[this.stack.length-1];F.label=E,F.identifier=Or(this.sliceSerialize(C)).toLowerCase(),this.data.referenceType="full"}function ne(C){this.data.characterReferenceType=C.type}function N(C){const E=this.sliceSerialize(C),F=this.data.characterReferenceType;let z;F?(z=g6(E,F==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):z=p2(E);const q=this.stack[this.stack.length-1];q.value+=z}function te(C){const E=this.stack.pop();E.position.end=po(C.end)}function Y(C){_.call(this,C);const E=this.stack[this.stack.length-1];E.url=this.sliceSerialize(C)}function ye(C){_.call(this,C);const E=this.stack[this.stack.length-1];E.url="mailto:"+this.sliceSerialize(C)}function ge(){return{type:"blockquote",children:[]}}function Ce(){return{type:"code",lang:null,meta:null,value:""}}function se(){return{type:"inlineCode",value:""}}function Ge(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Ve(){return{type:"emphasis",children:[]}}function Ae(){return{type:"heading",depth:0,children:[]}}function ae(){return{type:"break"}}function de(){return{type:"html",value:""}}function xe(){return{type:"image",title:null,url:"",alt:null}}function Te(){return{type:"link",title:null,url:"",children:[]}}function Oe(C){return{type:"list",ordered:C.type==="listOrdered",start:null,spread:C._spread,children:[]}}function Le(C){return{type:"listItem",spread:C._spread,checked:null,children:[]}}function Qe(){return{type:"paragraph",children:[]}}function Ie(){return{type:"strong",children:[]}}function oe(){return{type:"text",value:""}}function je(){return{type:"thematicBreak"}}}function po(e){return{line:e.line,column:e.column,offset:e.offset}}function T6(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?T6(e,r):tR(e,r)}}function tR(e,n){let t;for(t in n)if(A6.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function hb(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+Il({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Il({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Il({start:n.start,end:n.end})+") is still open")}function rR(e){const n=this;n.parser=t;function t(r){return eR(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function oR(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function iR(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function aR(e,n){const t=n.value?n.value+`
`:"",r={};n.lang&&(r.className=["language-"+n.lang]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return n.meta&&(o.data={meta:n.meta}),e.patch(n,o),o=e.applyData(n,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(n,o),o}function lR(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function sR(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function cR(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),o=Da(r.toLowerCase()),i=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=i+1,l+=1,e.footnoteCounts.set(r,l);const s={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+o,id:t+"fnref-"+o+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(n,s);const c={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(n,c),e.applyData(n,c)}function uR(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function dR(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function I6(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];const o=e.all(n),i=o[0];i&&i.type==="text"?i.value="["+i.value:o.unshift({type:"text",value:"["});const a=o[o.length-1];return a&&a.type==="text"?a.value+=r:o.push({type:"text",value:r}),o}function fR(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return I6(e,n);const o={src:Da(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(o.title=r.title);const i={type:"element",tagName:"img",properties:o,children:[]};return e.patch(n,i),e.applyData(n,i)}function mR(e,n){const t={src:Da(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,r),e.applyData(n,r)}function hR(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,r),e.applyData(n,r)}function pR(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return I6(e,n);const o={href:Da(r.url||"")};r.title!==null&&r.title!==void 0&&(o.title=r.title);const i={type:"element",tagName:"a",properties:o,children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function gR(e,n){const t={href:Da(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function bR(e,n,t){const r=e.all(n),o=t?vR(t):_6(n),i={},a=[];if(typeof n.checked=="boolean"){const d=r[0];let u;d&&d.type==="element"&&d.tagName==="p"?u=d:(u={type:"element",tagName:"p",properties:{},children:[]},r.unshift(u)),u.children.length>0&&u.children.unshift({type:"text",value:" "}),u.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),i.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(o||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!o?a.push(...d.children):a.push(d)}const s=r[r.length-1];s&&(o||s.type!=="element"||s.tagName!=="p")&&a.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:i,children:a};return e.patch(n,c),e.applyData(n,c)}function vR(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=_6(t[r])}return n}function _6(e){const n=e.spread;return n??e.children.length>1}function yR(e,n){const t={},r=e.all(n);let o=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++o<r.length;){const a=r[o];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const i={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(r,!0)};return e.patch(n,i),e.applyData(n,i)}function wR(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function kR(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function CR(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function xR(e,n){const t=e.all(n),r=t.shift(),o=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(n.children[0],a),o.push(a)}if(t.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},l=u2(n.children[1]),s=s6(n.children[n.children.length-1]);l&&s&&(a.position={start:l,end:s}),o.push(a)}const i={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(n,i),e.applyData(n,i)}function SR(e,n,t){const r=t?t.children:void 0,i=(r?r.indexOf(n):1)===0?"th":"td",a=t&&t.type==="table"?t.align:void 0,l=a?a.length:n.children.length;let s=-1;const c=[];for(;++s<l;){const u=n.children[s],f={},m=a?a[s]:void 0;m&&(f.align=m);let h={type:"element",tagName:i,properties:f,children:[]};u&&(h.children=e.all(u),e.patch(u,h),h=e.applyData(u,h)),c.push(h)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(n,d),e.applyData(n,d)}function ER(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const pb=9,gb=32;function AR(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),o=0;const i=[];for(;r;)i.push(bb(n.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=t.exec(n);return i.push(bb(n.slice(o),o>0,!1)),i.join("")}function bb(e,n,t){let r=0,o=e.length;if(n){let i=e.codePointAt(r);for(;i===pb||i===gb;)r++,i=e.codePointAt(r)}if(t){let i=e.codePointAt(o-1);for(;i===pb||i===gb;)o--,i=e.codePointAt(o-1)}return o>r?e.slice(r,o):""}function TR(e,n){const t={type:"text",value:AR(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function IR(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const _R={blockquote:oR,break:iR,code:aR,delete:lR,emphasis:sR,footnoteReference:cR,heading:uR,html:dR,imageReference:fR,image:mR,inlineCode:hR,linkReference:pR,link:gR,listItem:bR,list:yR,paragraph:wR,root:kR,strong:CR,table:xR,tableCell:ER,tableRow:SR,text:TR,thematicBreak:IR,toml:rc,yaml:rc,definition:rc,footnoteDefinition:rc};function rc(){}const P6=-1,xd=0,Au=1,Tu=2,b2=3,v2=4,y2=5,w2=6,O6=7,F6=8,vb=typeof self=="object"?self:globalThis,PR=(e,n)=>{const t=(o,i)=>(e.set(i,o),o),r=o=>{if(e.has(o))return e.get(o);const[i,a]=n[o];switch(i){case xd:case P6:return t(a,o);case Au:{const l=t([],o);for(const s of a)l.push(r(s));return l}case Tu:{const l=t({},o);for(const[s,c]of a)l[r(s)]=r(c);return l}case b2:return t(new Date(a),o);case v2:{const{source:l,flags:s}=a;return t(new RegExp(l,s),o)}case y2:{const l=t(new Map,o);for(const[s,c]of a)l.set(r(s),r(c));return l}case w2:{const l=t(new Set,o);for(const s of a)l.add(r(s));return l}case O6:{const{name:l,message:s}=a;return t(new vb[l](s),o)}case F6:return t(BigInt(a),o);case"BigInt":return t(Object(BigInt(a)),o)}return t(new vb[i](a),o)};return r},yb=e=>PR(new Map,e)(0),zi="",{toString:OR}={},{keys:FR}=Object,al=e=>{const n=typeof e;if(n!=="object"||!e)return[xd,n];const t=OR.call(e).slice(8,-1);switch(t){case"Array":return[Au,zi];case"Object":return[Tu,zi];case"Date":return[b2,zi];case"RegExp":return[v2,zi];case"Map":return[y2,zi];case"Set":return[w2,zi]}return t.includes("Array")?[Au,t]:t.includes("Error")?[O6,t]:[Tu,t]},oc=([e,n])=>e===xd&&(n==="function"||n==="symbol"),RR=(e,n,t,r)=>{const o=(a,l)=>{const s=r.push(a)-1;return t.set(l,s),s},i=a=>{if(t.has(a))return t.get(a);let[l,s]=al(a);switch(l){case xd:{let d=a;switch(s){case"bigint":l=F6,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);d=null;break;case"undefined":return o([P6],a)}return o([l,d],a)}case Au:{if(s)return o([s,[...a]],a);const d=[],u=o([l,d],a);for(const f of a)d.push(i(f));return u}case Tu:{if(s)switch(s){case"BigInt":return o([s,a.toString()],a);case"Boolean":case"Number":case"String":return o([s,a.valueOf()],a)}if(n&&"toJSON"in a)return i(a.toJSON());const d=[],u=o([l,d],a);for(const f of FR(a))(e||!oc(al(a[f])))&&d.push([i(f),i(a[f])]);return u}case b2:return o([l,a.toISOString()],a);case v2:{const{source:d,flags:u}=a;return o([l,{source:d,flags:u}],a)}case y2:{const d=[],u=o([l,d],a);for(const[f,m]of a)(e||!(oc(al(f))||oc(al(m))))&&d.push([i(f),i(m)]);return u}case w2:{const d=[],u=o([l,d],a);for(const f of a)(e||!oc(al(f)))&&d.push(i(f));return u}}const{message:c}=a;return o([l,{name:s,message:c}],a)};return i},wb=(e,{json:n,lossy:t}={})=>{const r=[];return RR(!(n||t),!!n,new Map,r)(e),r},Iu=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?yb(wb(e,n)):structuredClone(e):(e,n)=>yb(wb(e,n));function NR(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function MR(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function LR(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||NR,r=e.options.footnoteBackLabel||MR,o=e.options.footnoteLabel||"Footnotes",i=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let s=-1;for(;++s<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[s]);if(!c)continue;const d=e.all(c),u=String(c.identifier).toUpperCase(),f=Da(u.toLowerCase());let m=0;const h=[],v=e.footnoteCounts.get(u);for(;v!==void 0&&++m<=v;){h.length>0&&h.push({type:"text",value:" "});let b=typeof t=="string"?t:t(s,m);typeof b=="string"&&(b={type:"text",value:b}),h.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+f+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,m),className:["data-footnote-backref"]},children:Array.isArray(b)?b:[b]})}const k=d[d.length-1];if(k&&k.type==="element"&&k.tagName==="p"){const b=k.children[k.children.length-1];b&&b.type==="text"?b.value+=" ":k.children.push({type:"text",value:" "}),k.children.push(...h)}else d.push(...h);const g={type:"element",tagName:"li",properties:{id:n+"fn-"+f},children:e.wrap(d,!0)};e.patch(c,g),l.push(g)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:i,properties:{...Iu(a),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Sd=function(e){if(e==null)return $R;if(typeof e=="function")return Ed(e);if(typeof e=="object")return Array.isArray(e)?jR(e):DR(e);if(typeof e=="string")return BR(e);throw new Error("Expected function, string, or object as test")};function jR(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=Sd(e[t]);return Ed(r);function r(...o){let i=-1;for(;++i<n.length;)if(n[i].apply(this,o))return!0;return!1}}function DR(e){const n=e;return Ed(t);function t(r){const o=r;let i;for(i in e)if(o[i]!==n[i])return!1;return!0}}function BR(e){return Ed(n);function n(t){return t&&t.type===e}}function Ed(e){return n;function n(t,r,o){return!!(zR(t)&&e.call(this,t,typeof r=="number"?r:void 0,o||void 0))}}function $R(){return!0}function zR(e){return e!==null&&typeof e=="object"&&"type"in e}const R6=[],HR=!0,Ph=!1,UR="skip";function N6(e,n,t,r){let o;typeof n=="function"&&typeof t!="function"?(r=t,t=n):o=n;const i=Sd(o),a=r?-1:1;l(e,void 0,[])();function l(s,c,d){const u=s&&typeof s=="object"?s:{};if(typeof u.type=="string"){const m=typeof u.tagName=="string"?u.tagName:typeof u.name=="string"?u.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(s.type+(m?"<"+m+">":""))+")"})}return f;function f(){let m=R6,h,v,k;if((!n||i(s,c,d[d.length-1]||void 0))&&(m=ZR(t(s,d)),m[0]===Ph))return m;if("children"in s&&s.children){const g=s;if(g.children&&m[0]!==UR)for(v=(r?g.children.length:-1)+a,k=d.concat(g);v>-1&&v<g.children.length;){const b=g.children[v];if(h=l(b,v,k)(),h[0]===Ph)return h;v=typeof h[1]=="number"?h[1]:v+a}}return m}}}function ZR(e){return Array.isArray(e)?e:typeof e=="number"?[HR,e]:e==null?R6:[e]}function k2(e,n,t,r){let o,i,a;typeof n=="function"&&typeof t!="function"?(i=void 0,a=n,o=t):(i=n,a=t,o=r),N6(e,i,l,o);function l(s,c){const d=c[c.length-1],u=d?d.children.indexOf(s):void 0;return a(s,u,d)}}const Oh={}.hasOwnProperty,WR={};function VR(e,n){const t=n||WR,r=new Map,o=new Map,i=new Map,a={..._R,...t.handlers},l={all:c,applyData:GR,definitionById:r,footnoteById:o,footnoteCounts:i,footnoteOrder:[],handlers:a,one:s,options:t,patch:XR,wrap:KR};return k2(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const u=d.type==="definition"?r:o,f=String(d.identifier).toUpperCase();u.has(f)||u.set(f,d)}}),l;function s(d,u){const f=d.type,m=l.handlers[f];if(Oh.call(l.handlers,f)&&m)return m(l,d,u);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:v,...k}=d,g=Iu(k);return g.children=l.all(d),g}return Iu(d)}return(l.options.unknownHandler||qR)(l,d,u)}function c(d){const u=[];if("children"in d){const f=d.children;let m=-1;for(;++m<f.length;){const h=l.one(f[m],d);if(h){if(m&&f[m-1].type==="break"&&(!Array.isArray(h)&&h.type==="text"&&(h.value=kb(h.value)),!Array.isArray(h)&&h.type==="element")){const v=h.children[0];v&&v.type==="text"&&(v.value=kb(v.value))}Array.isArray(h)?u.push(...h):u.push(h)}}}return u}}function XR(e,n){e.position&&(n.position=RP(e))}function GR(e,n){let t=n;if(e&&e.data){const r=e.data.hName,o=e.data.hChildren,i=e.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const a="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:a}}t.type==="element"&&i&&Object.assign(t.properties,Iu(i)),"children"in t&&t.children&&o!==null&&o!==void 0&&(t.children=o)}return t}function qR(e,n){const t=n.data||{},r="value"in n&&!(Oh.call(t,"hProperties")||Oh.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function KR(e,n){const t=[];let r=-1;for(n&&t.push({type:"text",value:`
`});++r<e.length;)r&&t.push({type:"text",value:`
`}),t.push(e[r]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function kb(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function Cb(e,n){const t=VR(e,n),r=t.one(e,void 0),o=LR(t),i=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return o&&i.children.push({type:"text",value:`
`},o),i}function QR(e,n){return e&&"run"in e?async function(t,r){const o=Cb(t,{file:r,...n});await e.run(o,r)}:function(t,r){return Cb(t,{file:r,...n||e})}}function xb(e){if(e)throw e}var Rc=Object.prototype.hasOwnProperty,M6=Object.prototype.toString,Sb=Object.defineProperty,Eb=Object.getOwnPropertyDescriptor,Ab=function(n){return typeof Array.isArray=="function"?Array.isArray(n):M6.call(n)==="[object Array]"},Tb=function(n){if(!n||M6.call(n)!=="[object Object]")return!1;var t=Rc.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&Rc.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!r)return!1;var o;for(o in n);return typeof o>"u"||Rc.call(n,o)},Ib=function(n,t){Sb&&t.name==="__proto__"?Sb(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},_b=function(n,t){if(t==="__proto__")if(Rc.call(n,t)){if(Eb)return Eb(n,t).value}else return;return n[t]},YR=function e(){var n,t,r,o,i,a,l=arguments[0],s=1,c=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<c;++s)if(n=arguments[s],n!=null)for(t in n)r=_b(l,t),o=_b(n,t),l!==o&&(d&&o&&(Tb(o)||(i=Ab(o)))?(i?(i=!1,a=r&&Ab(r)?r:[]):a=r&&Tb(r)?r:{},Ib(l,{name:t,newValue:e(d,a,o)})):typeof o<"u"&&Ib(l,{name:t,newValue:o}));return l};const Mf=as(YR);function Fh(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function JR(){const e=[],n={run:t,use:r};return n;function t(...o){let i=-1;const a=o.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...o);function l(s,...c){const d=e[++i];let u=-1;if(s){a(s);return}for(;++u<o.length;)(c[u]===null||c[u]===void 0)&&(c[u]=o[u]);o=c,d?eN(d,l)(...c):a(null,...c)}}function r(o){if(typeof o!="function")throw new TypeError("Expected `middelware` to be a function, not "+o);return e.push(o),n}}function eN(e,n){let t;return r;function r(...a){const l=e.length>a.length;let s;l&&a.push(o);try{s=e.apply(this,a)}catch(c){const d=c;if(l&&t)throw d;return o(d)}l||(s&&s.then&&typeof s.then=="function"?s.then(i,o):s instanceof Error?o(s):i(s))}function o(a,...l){t||(t=!0,n(a,...l))}function i(a){o(null,a)}}const Lr={basename:nN,dirname:tN,extname:rN,join:oN,sep:"/"};function nN(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');xs(e);let t=0,r=-1,o=e.length,i;if(n===void 0||n.length===0||n.length>e.length){for(;o--;)if(e.codePointAt(o)===47){if(i){t=o+1;break}}else r<0&&(i=!0,r=o+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let a=-1,l=n.length-1;for(;o--;)if(e.codePointAt(o)===47){if(i){t=o+1;break}}else a<0&&(i=!0,a=o+1),l>-1&&(e.codePointAt(o)===n.codePointAt(l--)?l<0&&(r=o):(l=-1,r=a));return t===r?r=a:r<0&&(r=e.length),e.slice(t,r)}function tN(e){if(xs(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function rN(e){xs(e);let n=e.length,t=-1,r=0,o=-1,i=0,a;for(;n--;){const l=e.codePointAt(n);if(l===47){if(a){r=n+1;break}continue}t<0&&(a=!0,t=n+1),l===46?o<0?o=n:i!==1&&(i=1):o>-1&&(i=-1)}return o<0||t<0||i===0||i===1&&o===t-1&&o===r+1?"":e.slice(o,t)}function oN(...e){let n=-1,t;for(;++n<e.length;)xs(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":iN(t)}function iN(e){xs(e);const n=e.codePointAt(0)===47;let t=aN(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function aN(e,n){let t="",r=0,o=-1,i=0,a=-1,l,s;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(o===a-1||i===1))if(o!==a-1&&i===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(s=t.lastIndexOf("/"),s!==t.length-1){s<0?(t="",r=0):(t=t.slice(0,s),r=t.length-1-t.lastIndexOf("/")),o=a,i=0;continue}}else if(t.length>0){t="",r=0,o=a,i=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(o+1,a):t=e.slice(o+1,a),r=a-o-1;o=a,i=0}else l===46&&i>-1?i++:i=-1}return t}function xs(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const lN={cwd:sN};function sN(){return"/"}function Rh(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function cN(e){if(typeof e=="string")e=new URL(e);else if(!Rh(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return uN(e)}function uN(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const o=new TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(n)}const Lf=["history","path","basename","stem","extname","dirname"];class L6{constructor(n){let t;n?Rh(n)?t={path:n}:typeof n=="string"||dN(n)?t={value:n}:t=n:t={},this.cwd=lN.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Lf.length;){const i=Lf[r];i in t&&t[i]!==void 0&&t[i]!==null&&(this[i]=i==="history"?[...t[i]]:t[i])}let o;for(o in t)Lf.includes(o)||(this[o]=t[o])}get basename(){return typeof this.path=="string"?Lr.basename(this.path):void 0}set basename(n){Df(n,"basename"),jf(n,"basename"),this.path=Lr.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?Lr.dirname(this.path):void 0}set dirname(n){Pb(this.basename,"dirname"),this.path=Lr.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?Lr.extname(this.path):void 0}set extname(n){if(jf(n,"extname"),Pb(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Lr.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){Rh(n)&&(n=cN(n)),Df(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?Lr.basename(this.path,this.extname):void 0}set stem(n){Df(n,"stem"),jf(n,"stem"),this.path=Lr.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const o=this.message(n,t,r);throw o.fatal=!0,o}info(n,t,r){const o=this.message(n,t,r);return o.fatal=void 0,o}message(n,t,r){const o=new St(n,t,r);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function jf(e,n){if(e&&e.includes(Lr.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+Lr.sep+"`")}function Df(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function Pb(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function dN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const fN=function(e){const r=this.constructor.prototype,o=r[e],i=function(){return o.apply(i,arguments)};return Object.setPrototypeOf(i,r),i},mN={}.hasOwnProperty;class C2 extends fN{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=JR()}copy(){const n=new C2;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(Mf(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(zf("data",this.frozen),this.namespace[n]=t,this):mN.call(this.namespace,n)&&this.namespace[n]||void 0:n?(zf("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const o=t.call(n,...r);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=ic(n),r=this.parser||this.Parser;return Bf("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),Bf("process",this.parser||this.Parser),$f("process",this.compiler||this.Compiler),t?o(void 0,t):new Promise(o);function o(i,a){const l=ic(n),s=r.parse(l);r.run(s,l,function(d,u,f){if(d||!u||!f)return c(d);const m=u,h=r.stringify(m,f);gN(h)?f.value=h:f.result=h,c(d,f)});function c(d,u){d||!u?a(d):i?i(u):t(void 0,u)}}}processSync(n){let t=!1,r;return this.freeze(),Bf("processSync",this.parser||this.Parser),$f("processSync",this.compiler||this.Compiler),this.process(n,o),Fb("processSync","process",t),r;function o(i,a){t=!0,xb(i),r=a}}run(n,t,r){Ob(n),this.freeze();const o=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?i(void 0,r):new Promise(i);function i(a,l){const s=ic(t);o.run(n,s,c);function c(d,u,f){const m=u||n;d?l(d):a?a(m):r(void 0,m,f)}}}runSync(n,t){let r=!1,o;return this.run(n,t,i),Fb("runSync","run",r),o;function i(a,l){xb(a),o=l,r=!0}}stringify(n,t){this.freeze();const r=ic(t),o=this.compiler||this.Compiler;return $f("stringify",o),Ob(n),o(n,r)}use(n,...t){const r=this.attachers,o=this.namespace;if(zf("use",this.frozen),n!=null)if(typeof n=="function")s(n,t);else if(typeof n=="object")Array.isArray(n)?l(n):a(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function i(c){if(typeof c=="function")s(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[d,...u]=c;s(d,u)}else a(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function a(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(c.plugins),c.settings&&(o.settings=Mf(!0,o.settings,c.settings))}function l(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){const u=c[d];i(u)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function s(c,d){let u=-1,f=-1;for(;++u<r.length;)if(r[u][0]===c){f=u;break}if(f===-1)r.push([c,...d]);else if(d.length>0){let[m,...h]=d;const v=r[f][1];Fh(v)&&Fh(m)&&(m=Mf(!0,v,m)),r[f]=[c,m,...h]}}}}const hN=new C2().freeze();function Bf(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function $f(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function zf(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Ob(e){if(!Fh(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Fb(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function ic(e){return pN(e)?e:new L6(e)}function pN(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function gN(e){return typeof e=="string"||bN(e)}function bN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const vN="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Rb=[],Nb={allowDangerousHtml:!0},yN=/^(https?|ircs?|mailto|xmpp)$/i,wN=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function kN(e){const n=e.allowedElements,t=e.allowElement,r=e.children||"",o=e.className,i=e.components,a=e.disallowedElements,l=e.rehypePlugins||Rb,s=e.remarkPlugins||Rb,c=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Nb}:Nb,d=e.skipHtml,u=e.unwrapDisallowed,f=e.urlTransform||CN,m=hN().use(rR).use(s).use(QR,c).use(l),h=new L6;typeof r=="string"&&(h.value=r);for(const b of wN)Object.hasOwn(e,b.from)&&(""+b.from+(b.to?"use `"+b.to+"` instead":"remove it")+vN+b.id,void 0);const v=m.parse(h);let k=m.runSync(v,h);return o&&(k={type:"element",tagName:"div",properties:{className:o},children:k.type==="root"?k.children:[k]}),k2(k,g),BP(k,{Fragment:J.Fragment,components:i,ignoreInvalidStyle:!0,jsx:J.jsx,jsxs:J.jsxs,passKeys:!0,passNode:!0});function g(b,y,S){if(b.type==="raw"&&S&&typeof y=="number")return d?S.children.splice(y,1):S.children[y]={type:"text",value:b.value},y;if(b.type==="element"){let A;for(A in Ff)if(Object.hasOwn(Ff,A)&&Object.hasOwn(b.properties,A)){const w=b.properties[A],I=Ff[A];(I===null||I.includes(b.tagName))&&(b.properties[A]=f(String(w||""),A,b))}}if(b.type==="element"){let A=n?!n.includes(b.tagName):a?a.includes(b.tagName):!1;if(!A&&t&&typeof y=="number"&&(A=!t(b,y,S)),A&&S&&typeof y=="number")return u&&b.children?S.children.splice(y,1,...b.children):S.children.splice(y,1),y}}}function CN(e){const n=e.indexOf(":"),t=e.indexOf("?"),r=e.indexOf("#"),o=e.indexOf("/");return n<0||o>-1&&n>o||t>-1&&n>t||r>-1&&n>r||yN.test(e.slice(0,n))?e:""}function xN(e){return Yw({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"},child:[]}]})(e)}function Mb(e,n){const t=String(e);if(typeof n!="string")throw new TypeError("Expected character");let r=0,o=t.indexOf(n);for(;o!==-1;)r++,o=t.indexOf(n,o+n.length);return r}function SN(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function EN(e,n,t){const o=Sd((t||{}).ignore||[]),i=AN(n);let a=-1;for(;++a<i.length;)N6(e,"text",l);function l(c,d){let u=-1,f;for(;++u<d.length;){const m=d[u],h=f?f.children:void 0;if(o(m,h?h.indexOf(m):void 0,f))return;f=m}if(f)return s(c,d)}function s(c,d){const u=d[d.length-1],f=i[a][0],m=i[a][1];let h=0;const k=u.children.indexOf(c);let g=!1,b=[];f.lastIndex=0;let y=f.exec(c.value);for(;y;){const S=y.index,A={index:y.index,input:y.input,stack:[...d,c]};let w=m(...y,A);if(typeof w=="string"&&(w=w.length>0?{type:"text",value:w}:void 0),w===!1?f.lastIndex=S+1:(h!==S&&b.push({type:"text",value:c.value.slice(h,S)}),Array.isArray(w)?b.push(...w):w&&b.push(w),h=S+y[0].length,g=!0),!f.global)break;y=f.exec(c.value)}return g?(h<c.value.length&&b.push({type:"text",value:c.value.slice(h)}),u.children.splice(k,1,...b)):b=[c],k+b.length}}function AN(e){const n=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const t=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<t.length;){const o=t[r];n.push([TN(o[0]),IN(o[1])])}return n}function TN(e){return typeof e=="string"?new RegExp(SN(e),"g"):e}function IN(e){return typeof e=="function"?e:function(){return e}}const Hf="phrasing",Uf=["autolink","link","image","label"];function _N(){return{transforms:[LN],enter:{literalAutolink:ON,literalAutolinkEmail:Zf,literalAutolinkHttp:Zf,literalAutolinkWww:Zf},exit:{literalAutolink:MN,literalAutolinkEmail:NN,literalAutolinkHttp:FN,literalAutolinkWww:RN}}}function PN(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Hf,notInConstruct:Uf},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Hf,notInConstruct:Uf},{character:":",before:"[ps]",after:"\\/",inConstruct:Hf,notInConstruct:Uf}]}}function ON(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Zf(e){this.config.enter.autolinkProtocol.call(this,e)}function FN(e){this.config.exit.autolinkProtocol.call(this,e)}function RN(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function NN(e){this.config.exit.autolinkEmail.call(this,e)}function MN(e){this.exit(e)}function LN(e){EN(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,jN],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,DN]],{ignore:["link","linkReference"]})}function jN(e,n,t,r,o){let i="";if(!j6(o)||(/^w/i.test(n)&&(t=n+t,n="",i="http://"),!BN(t)))return!1;const a=$N(t+r);if(!a[0])return!1;const l={type:"link",title:null,url:i+n+a[0],children:[{type:"text",value:n+a[0]}]};return a[1]?[l,{type:"text",value:a[1]}]:l}function DN(e,n,t,r){return!j6(r,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+t,children:[{type:"text",value:n+"@"+t}]}}function BN(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function $N(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let t=n[0],r=t.indexOf(")");const o=Mb(e,"(");let i=Mb(e,")");for(;r!==-1&&o>i;)e+=t.slice(0,r+1),t=t.slice(r+1),r=t.indexOf(")"),i++;return[e,t]}function j6(e,n){const t=e.input.charCodeAt(e.index-1);return(e.index===0||xi(t)||kd(t))&&(!n||t!==47)}D6.peek=QN;function zN(){return{enter:{gfmFootnoteDefinition:UN,gfmFootnoteDefinitionLabelString:ZN,gfmFootnoteCall:XN,gfmFootnoteCallString:GN},exit:{gfmFootnoteDefinition:VN,gfmFootnoteDefinitionLabelString:WN,gfmFootnoteCall:KN,gfmFootnoteCallString:qN}}}function HN(){return{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition:YN,footnoteReference:D6}}}function UN(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function ZN(){this.buffer()}function WN(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.label=n,t.identifier=Or(this.sliceSerialize(e)).toLowerCase()}function VN(e){this.exit(e)}function XN(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function GN(){this.buffer()}function qN(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.label=n,t.identifier=Or(this.sliceSerialize(e)).toLowerCase()}function KN(e){this.exit(e)}function D6(e,n,t,r){const o=t.createTracker(r);let i=o.move("[^");const a=t.enter("footnoteReference"),l=t.enter("reference");return i+=o.move(t.safe(t.associationId(e),{...o.current(),before:i,after:"]"})),l(),a(),i+=o.move("]"),i}function QN(){return"["}function YN(e,n,t,r){const o=t.createTracker(r);let i=o.move("[^");const a=t.enter("footnoteDefinition"),l=t.enter("label");return i+=o.move(t.safe(t.associationId(e),{...o.current(),before:i,after:"]"})),l(),i+=o.move("]:"+(e.children&&e.children.length>0?" ":"")),o.shift(4),i+=o.move(t.indentLines(t.containerFlow(e,o.current()),JN)),a(),i}function JN(e,n,t){return n===0?e:(t?"":"    ")+e}const eM=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];B6.peek=iM;function nM(){return{canContainEols:["delete"],enter:{strikethrough:rM},exit:{strikethrough:oM}}}function tM(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:eM}],handlers:{delete:B6}}}function rM(e){this.enter({type:"delete",children:[]},e)}function oM(e){this.exit(e)}function B6(e,n,t,r){const o=t.createTracker(r),i=t.enter("strikethrough");let a=o.move("~~");return a+=t.containerPhrasing(e,{...o.current(),before:a,after:"~"}),a+=o.move("~~"),i(),a}function iM(){return"~"}function aM(e,n={}){const t=(n.align||[]).concat(),r=n.stringLength||sM,o=[],i=[],a=[],l=[];let s=0,c=-1;for(;++c<e.length;){const h=[],v=[];let k=-1;for(e[c].length>s&&(s=e[c].length);++k<e[c].length;){const g=lM(e[c][k]);if(n.alignDelimiters!==!1){const b=r(g);v[k]=b,(l[k]===void 0||b>l[k])&&(l[k]=b)}h.push(g)}i[c]=h,a[c]=v}let d=-1;if(typeof t=="object"&&"length"in t)for(;++d<s;)o[d]=Lb(t[d]);else{const h=Lb(t);for(;++d<s;)o[d]=h}d=-1;const u=[],f=[];for(;++d<s;){const h=o[d];let v="",k="";h===99?(v=":",k=":"):h===108?v=":":h===114&&(k=":");let g=n.alignDelimiters===!1?1:Math.max(1,l[d]-v.length-k.length);const b=v+"-".repeat(g)+k;n.alignDelimiters!==!1&&(g=v.length+g+k.length,g>l[d]&&(l[d]=g),f[d]=g),u[d]=b}i.splice(1,0,u),a.splice(1,0,f),c=-1;const m=[];for(;++c<i.length;){const h=i[c],v=a[c];d=-1;const k=[];for(;++d<s;){const g=h[d]||"";let b="",y="";if(n.alignDelimiters!==!1){const S=l[d]-(v[d]||0),A=o[d];A===114?b=" ".repeat(S):A===99?S%2?(b=" ".repeat(S/2+.5),y=" ".repeat(S/2-.5)):(b=" ".repeat(S/2),y=b):y=" ".repeat(S)}n.delimiterStart!==!1&&!d&&k.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&g==="")&&(n.delimiterStart!==!1||d)&&k.push(" "),n.alignDelimiters!==!1&&k.push(b),k.push(g),n.alignDelimiters!==!1&&k.push(y),n.padding!==!1&&k.push(" "),(n.delimiterEnd!==!1||d!==s-1)&&k.push("|")}m.push(n.delimiterEnd===!1?k.join("").replace(/ +$/,""):k.join(""))}return m.join(`
`)}function lM(e){return e==null?"":String(e)}function sM(e){return e.length}function Lb(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}function cM(e,n,t,r){const o=t.enter("blockquote"),i=t.createTracker(r);i.move("> "),i.shift(2);const a=t.indentLines(t.containerFlow(e,i.current()),uM);return o(),a}function uM(e,n,t){return">"+(t?"":" ")+e}function dM(e,n){return jb(e,n.inConstruct,!0)&&!jb(e,n.notInConstruct,!1)}function jb(e,n,t){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return t;let r=-1;for(;++r<n.length;)if(e.includes(n[r]))return!0;return!1}function Db(e,n,t,r){let o=-1;for(;++o<t.unsafe.length;)if(t.unsafe[o].character===`
`&&dM(t.stack,t.unsafe[o]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function fM(e,n){const t=String(e);let r=t.indexOf(n),o=r,i=0,a=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===o?++i>a&&(a=i):i=1,o=r+n.length,r=t.indexOf(n,o);return a}function mM(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function hM(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function pM(e,n,t,r){const o=hM(t),i=e.value||"",a=o==="`"?"GraveAccent":"Tilde";if(mM(e,t)){const u=t.enter("codeIndented"),f=t.indentLines(i,gM);return u(),f}const l=t.createTracker(r),s=o.repeat(Math.max(fM(i,o)+1,3)),c=t.enter("codeFenced");let d=l.move(s);if(e.lang){const u=t.enter(`codeFencedLang${a}`);d+=l.move(t.safe(e.lang,{before:d,after:" ",encode:["`"],...l.current()})),u()}if(e.lang&&e.meta){const u=t.enter(`codeFencedMeta${a}`);d+=l.move(" "),d+=l.move(t.safe(e.meta,{before:d,after:`
`,encode:["`"],...l.current()})),u()}return d+=l.move(`
`),i&&(d+=l.move(i+`
`)),d+=l.move(s),c(),d}function gM(e,n,t){return(t?"":"    ")+e}function x2(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function bM(e,n,t,r){const o=x2(t),i=o==='"'?"Quote":"Apostrophe",a=t.enter("definition");let l=t.enter("label");const s=t.createTracker(r);let c=s.move("[");return c+=s.move(t.safe(t.associationId(e),{before:c,after:"]",...s.current()})),c+=s.move("]: "),l(),!e.url||/[\0- \u007F]/.test(e.url)?(l=t.enter("destinationLiteral"),c+=s.move("<"),c+=s.move(t.safe(e.url,{before:c,after:">",...s.current()})),c+=s.move(">")):(l=t.enter("destinationRaw"),c+=s.move(t.safe(e.url,{before:c,after:e.title?" ":`
`,...s.current()}))),l(),e.title&&(l=t.enter(`title${i}`),c+=s.move(" "+o),c+=s.move(t.safe(e.title,{before:c,after:o,...s.current()})),c+=s.move(o),l()),a(),c}function vM(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}$6.peek=yM;function $6(e,n,t,r){const o=vM(t),i=t.enter("emphasis"),a=t.createTracker(r);let l=a.move(o);return l+=a.move(t.containerPhrasing(e,{before:l,after:o,...a.current()})),l+=a.move(o),i(),l}function yM(e,n,t){return t.options.emphasis||"*"}function wM(e,n){let t=!1;return k2(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return t=!0,Ph}),!!((!e.depth||e.depth<3)&&h2(e)&&(n.options.setext||t))}function kM(e,n,t,r){const o=Math.max(Math.min(6,e.depth||1),1),i=t.createTracker(r);if(wM(e,t)){const d=t.enter("headingSetext"),u=t.enter("phrasing"),f=t.containerPhrasing(e,{...i.current(),before:`
`,after:`
`});return u(),d(),f+`
`+(o===1?"=":"-").repeat(f.length-(Math.max(f.lastIndexOf("\r"),f.lastIndexOf(`
`))+1))}const a="#".repeat(o),l=t.enter("headingAtx"),s=t.enter("phrasing");i.move(a+" ");let c=t.containerPhrasing(e,{before:"# ",after:`
`,...i.current()});return/^[\t ]/.test(c)&&(c="&#x"+c.charCodeAt(0).toString(16).toUpperCase()+";"+c.slice(1)),c=c?a+" "+c:a,t.options.closeAtx&&(c+=" "+a),s(),l(),c}z6.peek=CM;function z6(e){return e.value||""}function CM(){return"<"}H6.peek=xM;function H6(e,n,t,r){const o=x2(t),i=o==='"'?"Quote":"Apostrophe",a=t.enter("image");let l=t.enter("label");const s=t.createTracker(r);let c=s.move("![");return c+=s.move(t.safe(e.alt,{before:c,after:"]",...s.current()})),c+=s.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=t.enter("destinationLiteral"),c+=s.move("<"),c+=s.move(t.safe(e.url,{before:c,after:">",...s.current()})),c+=s.move(">")):(l=t.enter("destinationRaw"),c+=s.move(t.safe(e.url,{before:c,after:e.title?" ":")",...s.current()}))),l(),e.title&&(l=t.enter(`title${i}`),c+=s.move(" "+o),c+=s.move(t.safe(e.title,{before:c,after:o,...s.current()})),c+=s.move(o),l()),c+=s.move(")"),a(),c}function xM(){return"!"}U6.peek=SM;function U6(e,n,t,r){const o=e.referenceType,i=t.enter("imageReference");let a=t.enter("label");const l=t.createTracker(r);let s=l.move("![");const c=t.safe(e.alt,{before:s,after:"]",...l.current()});s+=l.move(c+"]["),a();const d=t.stack;t.stack=[],a=t.enter("reference");const u=t.safe(t.associationId(e),{before:s,after:"]",...l.current()});return a(),t.stack=d,i(),o==="full"||!c||c!==u?s+=l.move(u+"]"):o==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function SM(){return"!"}Z6.peek=EM;function Z6(e,n,t){let r=e.value||"",o="`",i=-1;for(;new RegExp("(^|[^`])"+o+"([^`]|$)").test(r);)o+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++i<t.unsafe.length;){const a=t.unsafe[i],l=t.compilePattern(a);let s;if(a.atBreak)for(;s=l.exec(r);){let c=s.index;r.charCodeAt(c)===10&&r.charCodeAt(c-1)===13&&c--,r=r.slice(0,c)+" "+r.slice(s.index+1)}}return o+r+o}function EM(){return"`"}function W6(e,n){const t=h2(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(t===e.url||"mailto:"+t===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}V6.peek=AM;function V6(e,n,t,r){const o=x2(t),i=o==='"'?"Quote":"Apostrophe",a=t.createTracker(r);let l,s;if(W6(e,t)){const d=t.stack;t.stack=[],l=t.enter("autolink");let u=a.move("<");return u+=a.move(t.containerPhrasing(e,{before:u,after:">",...a.current()})),u+=a.move(">"),l(),t.stack=d,u}l=t.enter("link"),s=t.enter("label");let c=a.move("[");return c+=a.move(t.containerPhrasing(e,{before:c,after:"](",...a.current()})),c+=a.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=t.enter("destinationLiteral"),c+=a.move("<"),c+=a.move(t.safe(e.url,{before:c,after:">",...a.current()})),c+=a.move(">")):(s=t.enter("destinationRaw"),c+=a.move(t.safe(e.url,{before:c,after:e.title?" ":")",...a.current()}))),s(),e.title&&(s=t.enter(`title${i}`),c+=a.move(" "+o),c+=a.move(t.safe(e.title,{before:c,after:o,...a.current()})),c+=a.move(o),s()),c+=a.move(")"),l(),c}function AM(e,n,t){return W6(e,t)?"<":"["}X6.peek=TM;function X6(e,n,t,r){const o=e.referenceType,i=t.enter("linkReference");let a=t.enter("label");const l=t.createTracker(r);let s=l.move("[");const c=t.containerPhrasing(e,{before:s,after:"]",...l.current()});s+=l.move(c+"]["),a();const d=t.stack;t.stack=[],a=t.enter("reference");const u=t.safe(t.associationId(e),{before:s,after:"]",...l.current()});return a(),t.stack=d,i(),o==="full"||!c||c!==u?s+=l.move(u+"]"):o==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function TM(){return"["}function S2(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function IM(e){const n=S2(e),t=e.options.bulletOther;if(!t)return n==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+t+"`) to be different");return t}function _M(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function G6(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function PM(e,n,t,r){const o=t.enter("list"),i=t.bulletCurrent;let a=e.ordered?_M(t):S2(t);const l=e.ordered?a==="."?")":".":IM(t);let s=n&&t.bulletLastUsed?a===t.bulletLastUsed:!1;if(!e.ordered){const d=e.children?e.children[0]:void 0;if((a==="*"||a==="-")&&d&&(!d.children||!d.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(s=!0),G6(t)===a&&d){let u=-1;for(;++u<e.children.length;){const f=e.children[u];if(f&&f.type==="listItem"&&f.children&&f.children[0]&&f.children[0].type==="thematicBreak"){s=!0;break}}}}s&&(a=l),t.bulletCurrent=a;const c=t.containerFlow(e,r);return t.bulletLastUsed=a,t.bulletCurrent=i,o(),c}function OM(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function FM(e,n,t,r){const o=OM(t);let i=t.bulletCurrent||S2(t);n&&n.type==="list"&&n.ordered&&(i=(typeof n.start=="number"&&n.start>-1?n.start:1)+(t.options.incrementListMarker===!1?0:n.children.indexOf(e))+i);let a=i.length+1;(o==="tab"||o==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(a=Math.ceil(a/4)*4);const l=t.createTracker(r);l.move(i+" ".repeat(a-i.length)),l.shift(a);const s=t.enter("listItem"),c=t.indentLines(t.containerFlow(e,l.current()),d);return s(),c;function d(u,f,m){return f?(m?"":" ".repeat(a))+u:(m?i:i+" ".repeat(a-i.length))+u}}function RM(e,n,t,r){const o=t.enter("paragraph"),i=t.enter("phrasing"),a=t.containerPhrasing(e,r);return i(),o(),a}const NM=Sd(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function MM(e,n,t,r){return(e.children.some(function(a){return NM(a)})?t.containerPhrasing:t.containerFlow).call(t,e,r)}function LM(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}q6.peek=jM;function q6(e,n,t,r){const o=LM(t),i=t.enter("strong"),a=t.createTracker(r);let l=a.move(o+o);return l+=a.move(t.containerPhrasing(e,{before:l,after:o,...a.current()})),l+=a.move(o+o),i(),l}function jM(e,n,t){return t.options.strong||"*"}function DM(e,n,t,r){return t.safe(e.value,r)}function BM(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function $M(e,n,t){const r=(G6(t)+(t.options.ruleSpaces?" ":"")).repeat(BM(t));return t.options.ruleSpaces?r.slice(0,-1):r}const K6={blockquote:cM,break:Db,code:pM,definition:bM,emphasis:$6,hardBreak:Db,heading:kM,html:z6,image:H6,imageReference:U6,inlineCode:Z6,link:V6,linkReference:X6,list:PM,listItem:FM,paragraph:RM,root:MM,strong:q6,text:DM,thematicBreak:$M};function zM(){return{enter:{table:HM,tableData:Bb,tableHeader:Bb,tableRow:ZM},exit:{codeText:WM,table:UM,tableData:Wf,tableHeader:Wf,tableRow:Wf}}}function HM(e){const n=e._align;this.enter({type:"table",align:n.map(function(t){return t==="none"?null:t}),children:[]},e),this.data.inTable=!0}function UM(e){this.exit(e),this.data.inTable=void 0}function ZM(e){this.enter({type:"tableRow",children:[]},e)}function Wf(e){this.exit(e)}function Bb(e){this.enter({type:"tableCell",children:[]},e)}function WM(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,VM));const t=this.stack[this.stack.length-1];t.type,t.value=n,this.exit(e)}function VM(e,n){return n==="|"?n:e}function XM(e){const n=e||{},t=n.tableCellPadding,r=n.tablePipeAlign,o=n.stringLength,i=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:f,table:a,tableCell:s,tableRow:l}};function a(m,h,v,k){return c(d(m,v,k),m.align)}function l(m,h,v,k){const g=u(m,v,k),b=c([g]);return b.slice(0,b.indexOf(`
`))}function s(m,h,v,k){const g=v.enter("tableCell"),b=v.enter("phrasing"),y=v.containerPhrasing(m,{...k,before:i,after:i});return b(),g(),y}function c(m,h){return aM(m,{align:h,alignDelimiters:r,padding:t,stringLength:o})}function d(m,h,v){const k=m.children;let g=-1;const b=[],y=h.enter("table");for(;++g<k.length;)b[g]=u(k[g],h,v);return y(),b}function u(m,h,v){const k=m.children;let g=-1;const b=[],y=h.enter("tableRow");for(;++g<k.length;)b[g]=s(k[g],m,h,v);return y(),b}function f(m,h,v){let k=K6.inlineCode(m,h,v);return v.stack.includes("tableCell")&&(k=k.replace(/\|/g,"\\$&")),k}}function GM(){return{exit:{taskListCheckValueChecked:$b,taskListCheckValueUnchecked:$b,paragraph:KM}}}function qM(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:QM}}}function $b(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function KM(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const r=t.children[0];if(r&&r.type==="text"){const o=n.children;let i=-1,a;for(;++i<o.length;){const l=o[i];if(l.type==="paragraph"){a=l;break}}a===t&&(r.value=r.value.slice(1),r.value.length===0?t.children.shift():t.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,t.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function QM(e,n,t,r){const o=e.children[0],i=typeof e.checked=="boolean"&&o&&o.type==="paragraph",a="["+(e.checked?"x":" ")+"] ",l=t.createTracker(r);i&&l.move(a);let s=K6.listItem(e,n,t,{...r,...l.current()});return i&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,c)),s;function c(d){return d+a}}function YM(){return[_N(),zN(),nM(),zM(),GM()]}function JM(e){return{extensions:[PN(),HN(),tM(),XM(e),qM()]}}const eL={tokenize:aL,partial:!0},Q6={tokenize:lL,partial:!0},Y6={tokenize:sL,partial:!0},J6={tokenize:cL,partial:!0},nL={tokenize:uL,partial:!0},e5={tokenize:oL,previous:t5},n5={tokenize:iL,previous:r5},co={tokenize:rL,previous:o5},Hr={};function tL(){return{text:Hr}}let Ko=48;for(;Ko<123;)Hr[Ko]=co,Ko++,Ko===58?Ko=65:Ko===91&&(Ko=97);Hr[43]=co;Hr[45]=co;Hr[46]=co;Hr[95]=co;Hr[72]=[co,n5];Hr[104]=[co,n5];Hr[87]=[co,e5];Hr[119]=[co,e5];function rL(e,n,t){const r=this;let o,i;return a;function a(u){return!Nh(u)||!o5.call(r,r.previous)||E2(r.events)?t(u):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),l(u))}function l(u){return Nh(u)?(e.consume(u),l):u===64?(e.consume(u),s):t(u)}function s(u){return u===46?e.check(nL,d,c)(u):u===45||u===95||Ct(u)?(i=!0,e.consume(u),s):d(u)}function c(u){return e.consume(u),o=!0,s}function d(u){return i&&o&&Tt(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(u)):t(u)}}function oL(e,n,t){const r=this;return o;function o(a){return a!==87&&a!==119||!t5.call(r,r.previous)||E2(r.events)?t(a):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(eL,e.attempt(Q6,e.attempt(Y6,i),t),t)(a))}function i(a){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(a)}}function iL(e,n,t){const r=this;let o="",i=!1;return a;function a(u){return(u===72||u===104)&&r5.call(r,r.previous)&&!E2(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),o+=String.fromCodePoint(u),e.consume(u),l):t(u)}function l(u){if(Tt(u)&&o.length<5)return o+=String.fromCodePoint(u),e.consume(u),l;if(u===58){const f=o.toLowerCase();if(f==="http"||f==="https")return e.consume(u),s}return t(u)}function s(u){return u===47?(e.consume(u),i?c:(i=!0,s)):t(u)}function c(u){return u===null||Su(u)||An(u)||xi(u)||kd(u)?t(u):e.attempt(Q6,e.attempt(Y6,d),t)(u)}function d(u){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(u)}}function aL(e,n,t){let r=0;return o;function o(a){return(a===87||a===119)&&r<3?(r++,e.consume(a),o):a===46&&r===3?(e.consume(a),i):t(a)}function i(a){return a===null?t(a):n(a)}}function lL(e,n,t){let r,o,i;return a;function a(c){return c===46||c===95?e.check(J6,s,l)(c):c===null||An(c)||xi(c)||c!==45&&kd(c)?s(c):(i=!0,e.consume(c),a)}function l(c){return c===95?r=!0:(o=r,r=void 0),e.consume(c),a}function s(c){return o||r||!i?t(c):n(c)}}function sL(e,n){let t=0,r=0;return o;function o(a){return a===40?(t++,e.consume(a),o):a===41&&r<t?i(a):a===33||a===34||a===38||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===60||a===63||a===93||a===95||a===126?e.check(J6,n,i)(a):a===null||An(a)||xi(a)?n(a):(e.consume(a),o)}function i(a){return a===41&&r++,e.consume(a),o}}function cL(e,n,t){return r;function r(l){return l===33||l===34||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===63||l===95||l===126?(e.consume(l),r):l===38?(e.consume(l),i):l===93?(e.consume(l),o):l===60||l===null||An(l)||xi(l)?n(l):t(l)}function o(l){return l===null||l===40||l===91||An(l)||xi(l)?n(l):r(l)}function i(l){return Tt(l)?a(l):t(l)}function a(l){return l===59?(e.consume(l),r):Tt(l)?(e.consume(l),a):t(l)}}function uL(e,n,t){return r;function r(i){return e.consume(i),o}function o(i){return Ct(i)?t(i):n(i)}}function t5(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||An(e)}function r5(e){return!Tt(e)}function o5(e){return!(e===47||Nh(e))}function Nh(e){return e===43||e===45||e===46||e===95||Ct(e)}function E2(e){let n=e.length,t=!1;for(;n--;){const r=e[n][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){t=!0;break}if(r._gfmAutolinkLiteralWalkedInto){t=!1;break}}return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}const dL={tokenize:yL,partial:!0};function fL(){return{document:{91:{tokenize:gL,continuation:{tokenize:bL},exit:vL}},text:{91:{tokenize:pL},93:{add:"after",tokenize:mL,resolveTo:hL}}}}function mL(e,n,t){const r=this;let o=r.events.length;const i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a;for(;o--;){const s=r.events[o][1];if(s.type==="labelImage"){a=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return l;function l(s){if(!a||!a._balanced)return t(s);const c=Or(r.sliceSerialize({start:a.end,end:r.now()}));return c.codePointAt(0)!==94||!i.includes(c.slice(1))?t(s):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),n(s))}}function hL(e,n){let t=e.length;for(;t--;)if(e[t][1].type==="labelImage"&&e[t][0]==="enter"){e[t][1];break}e[t+1][1].type="data",e[t+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[t+3][1].start),end:Object.assign({},e[e.length-1][1].end)},o={type:"gfmFootnoteCallMarker",start:Object.assign({},e[t+3][1].end),end:Object.assign({},e[t+3][1].end)};o.end.column++,o.end.offset++,o.end._bufferIndex++;const i={type:"gfmFootnoteCallString",start:Object.assign({},o.end),end:Object.assign({},e[e.length-1][1].start)},a={type:"chunkString",contentType:"string",start:Object.assign({},i.start),end:Object.assign({},i.end)},l=[e[t+1],e[t+2],["enter",r,n],e[t+3],e[t+4],["enter",o,n],["exit",o,n],["enter",i,n],["enter",a,n],["exit",a,n],["exit",i,n],e[e.length-2],e[e.length-1],["exit",r,n]];return e.splice(t,e.length-t+1,...l),e}function pL(e,n,t){const r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let i=0,a;return l;function l(u){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),s}function s(u){return u!==94?t(u):(e.enter("gfmFootnoteCallMarker"),e.consume(u),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",c)}function c(u){if(i>999||u===93&&!a||u===null||u===91||An(u))return t(u);if(u===93){e.exit("chunkString");const f=e.exit("gfmFootnoteCallString");return o.includes(Or(r.sliceSerialize(f)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):t(u)}return An(u)||(a=!0),i++,e.consume(u),u===92?d:c}function d(u){return u===91||u===92||u===93?(e.consume(u),i++,c):c(u)}}function gL(e,n,t){const r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let i,a=0,l;return s;function s(h){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(h),e.exit("gfmFootnoteDefinitionLabelMarker"),c}function c(h){return h===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(h),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",d):t(h)}function d(h){if(a>999||h===93&&!l||h===null||h===91||An(h))return t(h);if(h===93){e.exit("chunkString");const v=e.exit("gfmFootnoteDefinitionLabelString");return i=Or(r.sliceSerialize(v)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(h),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),f}return An(h)||(l=!0),a++,e.consume(h),h===92?u:d}function u(h){return h===91||h===92||h===93?(e.consume(h),a++,d):d(h)}function f(h){return h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),o.includes(i)||o.push(i),vn(e,m,"gfmFootnoteDefinitionWhitespace")):t(h)}function m(h){return n(h)}}function bL(e,n,t){return e.check(Cs,n,e.attempt(dL,n,t))}function vL(e){e.exit("gfmFootnoteDefinition")}function yL(e,n,t){const r=this;return vn(e,o,"gfmFootnoteDefinitionIndent",5);function o(i){const a=r.events[r.events.length-1];return a&&a[1].type==="gfmFootnoteDefinitionIndent"&&a[2].sliceSerialize(a[1],!0).length===4?n(i):t(i)}}function wL(e){let t=(e||{}).singleTilde;const r={tokenize:i,resolveAll:o};return t==null&&(t=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function o(a,l){let s=-1;for(;++s<a.length;)if(a[s][0]==="enter"&&a[s][1].type==="strikethroughSequenceTemporary"&&a[s][1]._close){let c=s;for(;c--;)if(a[c][0]==="exit"&&a[c][1].type==="strikethroughSequenceTemporary"&&a[c][1]._open&&a[s][1].end.offset-a[s][1].start.offset===a[c][1].end.offset-a[c][1].start.offset){a[s][1].type="strikethroughSequence",a[c][1].type="strikethroughSequence";const d={type:"strikethrough",start:Object.assign({},a[c][1].start),end:Object.assign({},a[s][1].end)},u={type:"strikethroughText",start:Object.assign({},a[c][1].end),end:Object.assign({},a[s][1].start)},f=[["enter",d,l],["enter",a[c][1],l],["exit",a[c][1],l],["enter",u,l]],m=l.parser.constructs.insideSpan.null;m&&cr(f,f.length,0,Cd(m,a.slice(c+1,s),l)),cr(f,f.length,0,[["exit",u,l],["enter",a[s][1],l],["exit",a[s][1],l],["exit",d,l]]),cr(a,c-1,s-c+3,f),s=c+f.length-2;break}}for(s=-1;++s<a.length;)a[s][1].type==="strikethroughSequenceTemporary"&&(a[s][1].type="data");return a}function i(a,l,s){const c=this.previous,d=this.events;let u=0;return f;function f(h){return c===126&&d[d.length-1][1].type!=="characterEscape"?s(h):(a.enter("strikethroughSequenceTemporary"),m(h))}function m(h){const v=Eu(c);if(h===126)return u>1?s(h):(a.consume(h),u++,m);if(u<2&&!t)return s(h);const k=a.exit("strikethroughSequenceTemporary"),g=Eu(h);return k._open=!g||g===2&&!!v,k._close=!v||v===2&&!!g,l(h)}}}class kL{constructor(){this.map=[]}add(n,t,r){CL(this,n,t,r)}consume(n){if(this.map.sort(function(i,a){return i[0]-a[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];r.push([...n]),n.length=0;let o=r.pop();for(;o;)n.push(...o),o=r.pop();this.map.length=0}}function CL(e,n,t,r){let o=0;if(!(t===0&&r.length===0)){for(;o<e.map.length;){if(e.map[o][0]===n){e.map[o][1]+=t,e.map[o][2].push(...r);return}o+=1}e.map.push([n,t,r])}}function xL(e,n){let t=!1;const r=[];for(;n<e.length;){const o=e[n];if(t){if(o[0]==="enter")o[1].type==="tableContent"&&r.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(o[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const i=r.length-1;r[i]=r[i]==="left"?"center":"right"}}else if(o[1].type==="tableDelimiterRow")break}else o[0]==="enter"&&o[1].type==="tableDelimiterRow"&&(t=!0);n+=1}return r}function SL(){return{flow:{null:{tokenize:EL,resolveAll:AL}}}}function EL(e,n,t){const r=this;let o=0,i=0,a;return l;function l(_){let D=r.events.length-1;for(;D>-1;){const B=r.events[D][1].type;if(B==="lineEnding"||B==="linePrefix")D--;else break}const H=D>-1?r.events[D][1].type:null,j=H==="tableHead"||H==="tableRow"?w:s;return j===w&&r.parser.lazy[r.now().line]?t(_):j(_)}function s(_){return e.enter("tableHead"),e.enter("tableRow"),c(_)}function c(_){return _===124||(a=!0,i+=1),d(_)}function d(_){return _===null?t(_):Ke(_)?i>1?(i=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),m):t(_):mn(_)?vn(e,d,"whitespace")(_):(i+=1,a&&(a=!1,o+=1),_===124?(e.enter("tableCellDivider"),e.consume(_),e.exit("tableCellDivider"),a=!0,d):(e.enter("data"),u(_)))}function u(_){return _===null||_===124||An(_)?(e.exit("data"),d(_)):(e.consume(_),_===92?f:u)}function f(_){return _===92||_===124?(e.consume(_),u):u(_)}function m(_){return r.interrupt=!1,r.parser.lazy[r.now().line]?t(_):(e.enter("tableDelimiterRow"),a=!1,mn(_)?vn(e,h,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(_):h(_))}function h(_){return _===45||_===58?k(_):_===124?(a=!0,e.enter("tableCellDivider"),e.consume(_),e.exit("tableCellDivider"),v):A(_)}function v(_){return mn(_)?vn(e,k,"whitespace")(_):k(_)}function k(_){return _===58?(i+=1,a=!0,e.enter("tableDelimiterMarker"),e.consume(_),e.exit("tableDelimiterMarker"),g):_===45?(i+=1,g(_)):_===null||Ke(_)?S(_):A(_)}function g(_){return _===45?(e.enter("tableDelimiterFiller"),b(_)):A(_)}function b(_){return _===45?(e.consume(_),b):_===58?(a=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(_),e.exit("tableDelimiterMarker"),y):(e.exit("tableDelimiterFiller"),y(_))}function y(_){return mn(_)?vn(e,S,"whitespace")(_):S(_)}function S(_){return _===124?h(_):_===null||Ke(_)?!a||o!==i?A(_):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(_)):A(_)}function A(_){return t(_)}function w(_){return e.enter("tableRow"),I(_)}function I(_){return _===124?(e.enter("tableCellDivider"),e.consume(_),e.exit("tableCellDivider"),I):_===null||Ke(_)?(e.exit("tableRow"),n(_)):mn(_)?vn(e,I,"whitespace")(_):(e.enter("data"),R(_))}function R(_){return _===null||_===124||An(_)?(e.exit("data"),I(_)):(e.consume(_),_===92?M:R)}function M(_){return _===92||_===124?(e.consume(_),R):R(_)}}function AL(e,n){let t=-1,r=!0,o=0,i=[0,0,0,0],a=[0,0,0,0],l=!1,s=0,c,d,u;const f=new kL;for(;++t<e.length;){const m=e[t],h=m[1];m[0]==="enter"?h.type==="tableHead"?(l=!1,s!==0&&(zb(f,n,s,c,d),d=void 0,s=0),c={type:"table",start:Object.assign({},h.start),end:Object.assign({},h.end)},f.add(t,0,[["enter",c,n]])):h.type==="tableRow"||h.type==="tableDelimiterRow"?(r=!0,u=void 0,i=[0,0,0,0],a=[0,t+1,0,0],l&&(l=!1,d={type:"tableBody",start:Object.assign({},h.start),end:Object.assign({},h.end)},f.add(t,0,[["enter",d,n]])),o=h.type==="tableDelimiterRow"?2:d?3:1):o&&(h.type==="data"||h.type==="tableDelimiterMarker"||h.type==="tableDelimiterFiller")?(r=!1,a[2]===0&&(i[1]!==0&&(a[0]=a[1],u=ac(f,n,i,o,void 0,u),i=[0,0,0,0]),a[2]=t)):h.type==="tableCellDivider"&&(r?r=!1:(i[1]!==0&&(a[0]=a[1],u=ac(f,n,i,o,void 0,u)),i=a,a=[i[1],t,0,0])):h.type==="tableHead"?(l=!0,s=t):h.type==="tableRow"||h.type==="tableDelimiterRow"?(s=t,i[1]!==0?(a[0]=a[1],u=ac(f,n,i,o,t,u)):a[1]!==0&&(u=ac(f,n,a,o,t,u)),o=0):o&&(h.type==="data"||h.type==="tableDelimiterMarker"||h.type==="tableDelimiterFiller")&&(a[3]=t)}for(s!==0&&zb(f,n,s,c,d),f.consume(n.events),t=-1;++t<n.events.length;){const m=n.events[t];m[0]==="enter"&&m[1].type==="table"&&(m[1]._align=xL(n.events,t))}return e}function ac(e,n,t,r,o,i){const a=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",l="tableContent";t[0]!==0&&(i.end=Object.assign({},Ui(n.events,t[0])),e.add(t[0],0,[["exit",i,n]]));const s=Ui(n.events,t[1]);if(i={type:a,start:Object.assign({},s),end:Object.assign({},s)},e.add(t[1],0,[["enter",i,n]]),t[2]!==0){const c=Ui(n.events,t[2]),d=Ui(n.events,t[3]),u={type:l,start:Object.assign({},c),end:Object.assign({},d)};if(e.add(t[2],0,[["enter",u,n]]),r!==2){const f=n.events[t[2]],m=n.events[t[3]];if(f[1].end=Object.assign({},m[1].end),f[1].type="chunkText",f[1].contentType="text",t[3]>t[2]+1){const h=t[2]+1,v=t[3]-t[2]-1;e.add(h,v,[])}}e.add(t[3]+1,0,[["exit",u,n]])}return o!==void 0&&(i.end=Object.assign({},Ui(n.events,o)),e.add(o,0,[["exit",i,n]]),i=void 0),i}function zb(e,n,t,r,o){const i=[],a=Ui(n.events,t);o&&(o.end=Object.assign({},a),i.push(["exit",o,n])),r.end=Object.assign({},a),i.push(["exit",r,n]),e.add(t+1,0,i)}function Ui(e,n){const t=e[n],r=t[0]==="enter"?"start":"end";return t[1][r]}const TL={tokenize:_L};function IL(){return{text:{91:TL}}}function _L(e,n,t){const r=this;return o;function o(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?t(s):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),i)}function i(s){return An(s)?(e.enter("taskListCheckValueUnchecked"),e.consume(s),e.exit("taskListCheckValueUnchecked"),a):s===88||s===120?(e.enter("taskListCheckValueChecked"),e.consume(s),e.exit("taskListCheckValueChecked"),a):t(s)}function a(s){return s===93?(e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),l):t(s)}function l(s){return Ke(s)?n(s):mn(s)?e.check({tokenize:PL},n,t)(s):t(s)}}function PL(e,n,t){return vn(e,r,"whitespace");function r(o){return o===null?t(o):n(o)}}function OL(e){return p6([tL(),fL(),wL(e),SL(),IL()])}const FL={};function RL(e){const n=this,t=e||FL,r=n.data(),o=r.micromarkExtensions||(r.micromarkExtensions=[]),i=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),a=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);o.push(OL(t)),i.push(YM()),a.push(JM(t))}function Nc({issue:e}){const n=t=>{window.open(t,"_blank","noopener,noreferrer")};return J.jsx("div",{className:"cursor-pointer p-2",onClick:()=>n(e.url),children:J.jsx("div",{className:"rounded-8 border hover:border-slate-700 hover:shadow bg-white",children:J.jsxs("div",{className:"p-2",children:[J.jsxs("div",{className:"pl-2 pb-2 pr-2 border-b flex justify-stretch",children:[J.jsxs("div",{className:"flex-1",children:[J.jsx("div",{className:"text-std-18B-6",children:e.title}),J.jsx("div",{className:"text-dns-14N-2 flex flex-row space-x-2",children:J.jsx("div",{className:"rounded-32",children:qw(e.createdAt)})})]}),J.jsxs("div",{className:"flex justify-center items-center p-2 space-x-2 text-mono-14B-5",children:[J.jsxs("div",{className:"rounded-32",children:["👍️ ",e.reactions.totalCount]}),J.jsxs("div",{className:"rounded-32 flex items-center",children:[J.jsx("span",{className:"pr-2",children:J.jsx(xN,{})}),e.comments.totalCount]})]})]}),J.jsx("div",{className:"p-2",children:J.jsx("div",{className:"scroll-auto overflow-y-auto max-h-32",children:J.jsx(kN,{remarkPlugins:[RL],children:e.body})})})]})})})}function NL(){const e=Oc.sort((r,o)=>new Date(o.createdAt).getTime()-new Date(r.createdAt).getTime()).slice(0,5),n=Oc.sort((r,o)=>o.reactions.totalCount-r.reactions.totalCount).slice(0,5),t=Oc.sort((r,o)=>o.comments.totalCount-r.comments.totalCount).slice(0,5);return J.jsxs("div",{className:"flex flex-col md:flex-row max-w-max",children:[J.jsx("div",{className:"hidden md:inline-block mr-10",children:J.jsx(q3,{items:[{key:"about",href:"#about",title:"このサイトについて"},{key:"latest",href:"#latestIssues",title:"最新のIssue"},{key:"mostReaction",href:"#mostReactionIssues",title:"👍️の多いIssue"},{key:"mostComments",href:"#mostCommentsIssues",title:"コメントの多いIssue"}]})}),J.jsxs("div",{className:"space-y-6",children:[J.jsxs("div",{className:"bg-white rounded-8  space-y-8 p-6  flex flex-col items-center",children:[J.jsx("div",{className:"text-std-32B-5",children:"安野たかひろのマニフェストGitHubを眺めるサイト"}),J.jsxs("div",{children:[J.jsxs("div",{className:"text-std-16N-7",children:["東京都知事選挙の立候補者である安野たかひろ氏は、GitHub上でマニフェストを",J.jsx("a",{href:"https://github.com/takahiroanno2024/election2024",target:"_blank",rel:"noopener noreferrer",className:"text-primary underline",children:"公開"}),"し、 一般からの意見や提案を募るという取り組みを行っています。"]}),J.jsx("div",{className:"text-std-16N-7",children:"このサイトでは、安野氏のGitHubからマニフェストに関わるIssueと実際に取り込まれたコミットをAPIで取得し表示します。"}),J.jsx("div",{className:"text-std-16N-7",children:"情報は30分ごとに更新されます。"})]}),J.jsx("div",{children:J.jsxs("div",{className:"flex flex-col space-y-4 justify-center items-center text-std-16N-7",children:[J.jsx("div",{className:"flex flex-row space-x-2",children:J.jsx(hi,{url:"https://github.com/takahiroanno2024/election2024",text:"安野たかひろGitHubリポジトリ"})}),J.jsx(hi,{url:"https://manifest.takahiroanno.com/",text:"安野たかひろ：都知事選2024マニフェスト"})]})})]}),J.jsxs("div",{className:"rounded-8 bg-white",children:[J.jsx("div",{className:"text-std-20B-5 p-4",id:"latestIssues",children:J.jsx("a",{href:"https://github.com/takahiroanno2024/election2024/issues?q=is%3Aopen+label%3A%E7%B5%8C%E6%B8%88%2C%E5%8C%BB%E7%99%82%E3%83%BB%E9%98%B2%E7%81%BD%2C%E6%95%99%E8%82%B2%E3%83%BB%E5%AD%90%E8%82%B2%E3%81%A6%2C%E8%A1%8C%E6%94%BF%2C%E6%B0%91%E4%B8%BB%E4%B8%BB%E7%BE%A9%2C%E3%81%9D%E3%81%AE%E4%BB%96",target:"_blank",rel:"noopener noreferrer",className:"text-primary underline",children:"最新のIssue"})}),J.jsx("div",{className:"space-y-2",children:e.map((r,o)=>J.jsx(J.Fragment,{children:J.jsx(Nc,{issue:r},o)},o))})]}),J.jsxs("div",{className:"rounded-8 bg-white",children:[J.jsx("div",{className:"text-std-20B-5 p-4",id:"mostReactionIssues",children:J.jsx("a",{href:"https://github.com/takahiroanno2024/election2024/issues?q=is%3Aissue+label%3A%E7%B5%8C%E6%B8%88%2C%E5%8C%BB%E7%99%82%E3%83%BB%E9%98%B2%E7%81%BD%2C%E6%95%99%E8%82%B2%E3%83%BB%E5%AD%90%E8%82%B2%E3%81%A6%2C%E8%A1%8C%E6%94%BF%2C%E6%B0%91%E4%B8%BB%E4%B8%BB%E7%BE%A9%2C%E3%81%9D%E3%81%AE%E4%BB%96+sort%3Areactions-%2B1-desc+",target:"_blank",rel:"noopener noreferrer",className:"text-primary underline",children:"👍️の多いIssue"})}),J.jsx("div",{className:"space-y-2",children:n.map((r,o)=>J.jsx(J.Fragment,{children:J.jsx(Nc,{issue:r},o)},o))})]}),J.jsxs("div",{className:"rounded-8 bg-white",children:[J.jsx("div",{className:"text-std-20B-5 p-4",id:"mostCommentsIssues",children:J.jsx("a",{href:"https://github.com/takahiroanno2024/election2024/issues?q=is%3Aissue+label%3A%E7%B5%8C%E6%B8%88%2C%E5%8C%BB%E7%99%82%E3%83%BB%E9%98%B2%E7%81%BD%2C%E6%95%99%E8%82%B2%E3%83%BB%E5%AD%90%E8%82%B2%E3%81%A6%2C%E8%A1%8C%E6%94%BF%2C%E6%B0%91%E4%B8%BB%E4%B8%BB%E7%BE%A9%2C%E3%81%9D%E3%81%AE%E4%BB%96+sort%3Acomments-desc",target:"_blank",rel:"noopener noreferrer",className:"text-primary underline",children:"コメントの多いIssue"})}),J.jsx("div",{className:"space-y-2",children:t.map((r,o)=>J.jsx(J.Fragment,{children:J.jsx(Nc,{issue:r},o)},o))})]})]})]})}function ML(){const e=wy();return console.error(e),J.jsxs("div",{id:"error-page",children:[J.jsx("h1",{children:"Oops!"}),J.jsx("p",{children:"Sorry, an unexpected error has occurred."}),J.jsx("p",{children:J.jsx("i",{children:e.statusText||e.message})})]})}const{Header:LL,Footer:jL,Content:DL}=_i;function BL(){const e=R0(),n=A8(),t=[{key:"/",label:"このサイトについて"},{key:"/issues",label:"課題提起一覧(Issues)"},{key:"/commits",label:"反映履歴一覧(Commits)"}],r=o=>{n(o.key)};return J.jsx(J.Fragment,{children:J.jsxs(_i,{children:[J.jsx(LL,{className:"flex items-center bg-white border-b",children:J.jsx(ws,{onClick:r,theme:"light",mode:"horizontal",defaultSelectedKeys:[e.pathname],items:t,style:{flex:1,minWidth:0}})}),J.jsx(DL,{className:"p-2 md:px-12 md:py-8",children:J.jsx(z8,{})}),J.jsxs(jL,{style:{textAlign:"center"},children:["watch-takahiroanno-manifest2024 ©",new Date().getFullYear()," Created by opvelll"]})]})})}function $L(){const e=Oc.sort((n,t)=>new Date(t.createdAt).getTime()-new Date(n.createdAt).getTime());return J.jsxs(J.Fragment,{children:[J.jsxs("div",{className:"bg-white rounded-8 mb-4 flex flex-row justify-center items-center space-x-4 py-2",children:[J.jsx(hi,{url:"https://github.com/takahiroanno2024/election2024/issues",text:"GitHubのIssueページはこちら "}),J.jsx(hi,{url:"https://github.com/takahiroanno2024/election2024/blob/main/docs/contribution.md",text:"貢献したいあなたへ"}),J.jsx(hi,{url:"https://github.com/takahiroanno2024/election2024/blob/main/docs/manual_issue.md#new_issue",text:"新しいIssueの立て方はこちら"})]}),J.jsxs("div",{className:"p-4 bg-white rounded-8",children:[J.jsx("div",{className:"text-std-20B-5 p-4",children:"課題提起(Issue)の一覧"}),J.jsx("div",{className:"",children:e.map((n,t)=>J.jsx(J.Fragment,{children:J.jsx(Nc,{issue:n})},t))})]})]})}function zL(){return J.jsxs(J.Fragment,{children:[J.jsx("div",{className:"bg-white rounded-8 mb-4 flex flex-row justify-center items-center space-x-4 py-2",children:J.jsx(pd,{type:"primary",shape:"round",href:"https://github.com/takahiroanno2024/election2024/blob/main/docs/manual_pull_request.md",children:"変更提案の仕方はこちら"})}),J.jsx("div",{children:"工事中"})]})}function HL(){const e=W8([{path:"/",element:J.jsx(BL,{}),errorElement:J.jsx(ML,{}),children:[{path:"/",element:J.jsx(NL,{})},{path:"/issues",element:J.jsx($L,{})},{path:"/pullRequests",element:J.jsx(zL,{})},{path:"/commits",element:J.jsx(J_,{})}]}],{basename:"/watch-takahiroanno-manifest2024"});return J.jsx(eC,{router:e})}Vf.createRoot(document.getElementById("root")).render(J.jsx(Pe.StrictMode,{children:J.jsx(Ra,{theme:{token:{colorPrimary:"#1cc95f"}},children:J.jsx(HL,{})})}));

function nv(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();var Wt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Jl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function tv(e){if(e.__esModule)return e;var n=e.default;if(typeof n=="function"){var t=function r(){return this instanceof r?Reflect.construct(n,arguments,this.constructor):n.apply(this,arguments)};t.prototype=n.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),t}var rv={exports:{}},bu={},ov={exports:{}},mn={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var es=Symbol.for("react.element"),X3=Symbol.for("react.portal"),G3=Symbol.for("react.fragment"),Z3=Symbol.for("react.strict_mode"),K3=Symbol.for("react.profiler"),q3=Symbol.for("react.provider"),Q3=Symbol.for("react.context"),Y3=Symbol.for("react.forward_ref"),J3=Symbol.for("react.suspense"),e6=Symbol.for("react.memo"),n6=Symbol.for("react.lazy"),t0=Symbol.iterator;function t6(e){return e===null||typeof e!="object"?null:(e=t0&&e[t0]||e["@@iterator"],typeof e=="function"?e:null)}var iv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},av=Object.assign,lv={};function ba(e,n,t){this.props=e,this.context=n,this.refs=lv,this.updater=t||iv}ba.prototype.isReactComponent={};ba.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ba.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sv(){}sv.prototype=ba.prototype;function hh(e,n,t){this.props=e,this.context=n,this.refs=lv,this.updater=t||iv}var ph=hh.prototype=new sv;ph.constructor=hh;av(ph,ba.prototype);ph.isPureReactComponent=!0;var r0=Array.isArray,cv=Object.prototype.hasOwnProperty,gh={current:null},uv={key:!0,ref:!0,__self:!0,__source:!0};function dv(e,n,t){var r,o={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)cv.call(n,r)&&!uv.hasOwnProperty(r)&&(o[r]=n[r]);var l=arguments.length-2;if(l===1)o.children=t;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:es,type:e,key:i,ref:a,props:o,_owner:gh.current}}function r6(e,n){return{$$typeof:es,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function vh(e){return typeof e=="object"&&e!==null&&e.$$typeof===es}function o6(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var o0=/\/+/g;function vd(e,n){return typeof e=="object"&&e!==null&&e.key!=null?o6(""+e.key):n.toString(36)}function Ys(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case es:case X3:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+vd(a,0):r,r0(o)?(t="",e!=null&&(t=e.replace(o0,"$&/")+"/"),Ys(o,n,t,"",function(c){return c})):o!=null&&(vh(o)&&(o=r6(o,t+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(o0,"$&/")+"/")+e)),n.push(o)),1;if(a=0,r=r===""?".":r+":",r0(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+vd(i,l);a+=Ys(i,n,t,s,o)}else if(s=t6(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+vd(i,l++),a+=Ys(i,n,t,s,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Cs(e,n,t){if(e==null)return e;var r=[],o=0;return Ys(e,r,"","",function(i){return n.call(t,i,o++)}),r}function i6(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var It={current:null},Js={transition:null},a6={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:Js,ReactCurrentOwner:gh};function fv(){throw Error("act(...) is not supported in production builds of React.")}mn.Children={map:Cs,forEach:function(e,n,t){Cs(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Cs(e,function(){n++}),n},toArray:function(e){return Cs(e,function(n){return n})||[]},only:function(e){if(!vh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};mn.Component=ba;mn.Fragment=G3;mn.Profiler=K3;mn.PureComponent=hh;mn.StrictMode=Z3;mn.Suspense=J3;mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a6;mn.act=fv;mn.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=av({},e.props),o=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=gh.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)cv.call(n,s)&&!uv.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:es,type:e.type,key:o,ref:i,props:r,_owner:a}};mn.createContext=function(e){return e={$$typeof:Q3,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:q3,_context:e},e.Consumer=e};mn.createElement=dv;mn.createFactory=function(e){var n=dv.bind(null,e);return n.type=e,n};mn.createRef=function(){return{current:null}};mn.forwardRef=function(e){return{$$typeof:Y3,render:e}};mn.isValidElement=vh;mn.lazy=function(e){return{$$typeof:n6,_payload:{_status:-1,_result:e},_init:i6}};mn.memo=function(e,n){return{$$typeof:e6,type:e,compare:n===void 0?null:n}};mn.startTransition=function(e){var n=Js.transition;Js.transition={};try{e()}finally{Js.transition=n}};mn.unstable_act=fv;mn.useCallback=function(e,n){return It.current.useCallback(e,n)};mn.useContext=function(e){return It.current.useContext(e)};mn.useDebugValue=function(){};mn.useDeferredValue=function(e){return It.current.useDeferredValue(e)};mn.useEffect=function(e,n){return It.current.useEffect(e,n)};mn.useId=function(){return It.current.useId()};mn.useImperativeHandle=function(e,n,t){return It.current.useImperativeHandle(e,n,t)};mn.useInsertionEffect=function(e,n){return It.current.useInsertionEffect(e,n)};mn.useLayoutEffect=function(e,n){return It.current.useLayoutEffect(e,n)};mn.useMemo=function(e,n){return It.current.useMemo(e,n)};mn.useReducer=function(e,n,t){return It.current.useReducer(e,n,t)};mn.useRef=function(e){return It.current.useRef(e)};mn.useState=function(e){return It.current.useState(e)};mn.useSyncExternalStore=function(e,n,t){return It.current.useSyncExternalStore(e,n,t)};mn.useTransition=function(){return It.current.useTransition()};mn.version="18.3.1";ov.exports=mn;var p=ov.exports;const Ye=Jl(p),ns=nv({__proto__:null,default:Ye},[p]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l6=p,s6=Symbol.for("react.element"),c6=Symbol.for("react.fragment"),u6=Object.prototype.hasOwnProperty,d6=l6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f6={key:!0,ref:!0,__self:!0,__source:!0};function mv(e,n,t){var r,o={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)u6.call(n,r)&&!f6.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:s6,type:e,key:i,ref:a,props:o,_owner:d6.current}}bu.Fragment=c6;bu.jsx=mv;bu.jsxs=mv;rv.exports=bu;var re=rv.exports,_f={},hv={exports:{}},Yt={},pv={exports:{}},gv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(O,W){var S=O.length;O.push(W);e:for(;0<S;){var G=S-1>>>1,U=O[G];if(0<o(U,W))O[G]=W,O[S]=U,S=G;else break e}}function t(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var W=O[0],S=O.pop();if(S!==W){O[0]=S;e:for(var G=0,U=O.length,I=U>>>1;G<I;){var Q=2*(G+1)-1,oe=O[Q],L=Q+1,he=O[L];if(0>o(oe,S))L<U&&0>o(he,oe)?(O[G]=he,O[L]=S,G=L):(O[G]=oe,O[Q]=S,G=Q);else if(L<U&&0>o(he,S))O[G]=he,O[L]=S,G=L;else break e}}return W}function o(O,W){var S=O.sortIndex-W.sortIndex;return S!==0?S:O.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],u=1,d=null,f=3,m=!1,h=!1,b=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var W=t(c);W!==null;){if(W.callback===null)r(c);else if(W.startTime<=O)r(c),W.sortIndex=W.expirationTime,n(s,W);else break;W=t(c)}}function E(O){if(b=!1,y(O),!h)if(t(s)!==null)h=!0,B(_);else{var W=t(c);W!==null&&F(E,W.startTime-O)}}function _(O,W){h=!1,b&&(b=!1,g(N),N=-1),m=!0;var S=f;try{for(y(W),d=t(s);d!==null&&(!(d.expirationTime>W)||O&&!$());){var G=d.callback;if(typeof G=="function"){d.callback=null,f=d.priorityLevel;var U=G(d.expirationTime<=W);W=e.unstable_now(),typeof U=="function"?d.callback=U:d===t(s)&&r(s),y(W)}else r(s);d=t(s)}if(d!==null)var I=!0;else{var Q=t(c);Q!==null&&F(E,Q.startTime-W),I=!1}return I}finally{d=null,f=S,m=!1}}var w=!1,A=null,N=-1,R=5,V=-1;function $(){return!(e.unstable_now()-V<R)}function z(){if(A!==null){var O=e.unstable_now();V=O;var W=!0;try{W=A(!0,O)}finally{W?j():(w=!1,A=null)}}else w=!1}var j;if(typeof v=="function")j=function(){v(z)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,Z=H.port2;H.port1.onmessage=z,j=function(){Z.postMessage(null)}}else j=function(){k(z,0)};function B(O){A=O,w||(w=!0,j())}function F(O,W){N=k(function(){O(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){h||m||(h=!0,B(_))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(O){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var S=f;f=W;try{return O()}finally{f=S}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,W){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var S=f;f=O;try{return W()}finally{f=S}},e.unstable_scheduleCallback=function(O,W,S){var G=e.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?G+S:G):S=G,O){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=S+U,O={id:u++,callback:W,priorityLevel:O,startTime:S,expirationTime:U,sortIndex:-1},S>G?(O.sortIndex=S,n(c,O),t(s)===null&&O===t(c)&&(b?(g(N),N=-1):b=!0,F(E,S-G))):(O.sortIndex=U,n(s,O),h||m||(h=!0,B(_))),O},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(O){var W=f;return function(){var S=f;f=W;try{return O.apply(this,arguments)}finally{f=S}}}})(gv);pv.exports=gv;var m6=pv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h6=p,qt=m6;function le(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vv=new Set,kl={};function bi(e,n){ia(e,n),ia(e+"Capture",n)}function ia(e,n){for(kl[e]=n,e=0;e<n.length;e++)vv.add(n[e])}var Jr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Af=Object.prototype.hasOwnProperty,p6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,i0={},a0={};function g6(e){return Af.call(a0,e)?!0:Af.call(i0,e)?!1:p6.test(e)?a0[e]=!0:(i0[e]=!0,!1)}function v6(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function b6(e,n,t,r){if(n===null||typeof n>"u"||v6(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function _t(e,n,t,r,o,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ft[e]=new _t(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ft[n]=new _t(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ft[e]=new _t(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ft[e]=new _t(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ft[e]=new _t(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ft[e]=new _t(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ft[e]=new _t(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ft[e]=new _t(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ft[e]=new _t(e,5,!1,e.toLowerCase(),null,!1,!1)});var bh=/[\-:]([a-z])/g;function yh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(bh,yh);ft[n]=new _t(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(bh,yh);ft[n]=new _t(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(bh,yh);ft[n]=new _t(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ft[e]=new _t(e,1,!1,e.toLowerCase(),null,!1,!1)});ft.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ft[e]=new _t(e,1,!1,e.toLowerCase(),null,!0,!0)});function wh(e,n,t,r){var o=ft.hasOwnProperty(n)?ft[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(b6(n,t,o,r)&&(t=null),r||o===null?g6(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var io=h6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ss=Symbol.for("react.element"),Li=Symbol.for("react.portal"),ji=Symbol.for("react.fragment"),Ch=Symbol.for("react.strict_mode"),Tf=Symbol.for("react.profiler"),bv=Symbol.for("react.provider"),yv=Symbol.for("react.context"),Sh=Symbol.for("react.forward_ref"),Of=Symbol.for("react.suspense"),Pf=Symbol.for("react.suspense_list"),kh=Symbol.for("react.memo"),ho=Symbol.for("react.lazy"),wv=Symbol.for("react.offscreen"),l0=Symbol.iterator;function La(e){return e===null||typeof e!="object"?null:(e=l0&&e[l0]||e["@@iterator"],typeof e=="function"?e:null)}var Bn=Object.assign,bd;function el(e){if(bd===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);bd=n&&n[1]||""}return`
`+bd+e}var yd=!1;function wd(e,n){if(!e||yd)return"";yd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{yd=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?el(e):""}function y6(e){switch(e.tag){case 5:return el(e.type);case 16:return el("Lazy");case 13:return el("Suspense");case 19:return el("SuspenseList");case 0:case 2:case 15:return e=wd(e.type,!1),e;case 11:return e=wd(e.type.render,!1),e;case 1:return e=wd(e.type,!0),e;default:return""}}function Nf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ji:return"Fragment";case Li:return"Portal";case Tf:return"Profiler";case Ch:return"StrictMode";case Of:return"Suspense";case Pf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yv:return(e.displayName||"Context")+".Consumer";case bv:return(e._context.displayName||"Context")+".Provider";case Sh:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case kh:return n=e.displayName||null,n!==null?n:Nf(e.type)||"Memo";case ho:n=e._payload,e=e._init;try{return Nf(e(n))}catch{}}return null}function w6(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nf(n);case 8:return n===Ch?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Ro(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cv(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function C6(e){var n=Cv(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ks(e){e._valueTracker||(e._valueTracker=C6(e))}function Sv(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Cv(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ic(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rf(e,n){var t=n.checked;return Bn({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function s0(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Ro(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function kv(e,n){n=n.checked,n!=null&&wh(e,"checked",n,!1)}function Ff(e,n){kv(e,n);var t=Ro(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Mf(e,n.type,t):n.hasOwnProperty("defaultValue")&&Mf(e,n.type,Ro(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function c0(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Mf(e,n,t){(n!=="number"||Ic(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var nl=Array.isArray;function Qi(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Ro(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Lf(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(le(91));return Bn({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function u0(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(le(92));if(nl(t)){if(1<t.length)throw Error(le(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Ro(t)}}function Ev(e,n){var t=Ro(n.value),r=Ro(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function d0(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function xv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jf(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?xv(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Es,Iv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Es=Es||document.createElement("div"),Es.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Es.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function El(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var al={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},S6=["Webkit","ms","Moz","O"];Object.keys(al).forEach(function(e){S6.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),al[n]=al[e]})});function _v(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||al.hasOwnProperty(e)&&al[e]?(""+n).trim():n+"px"}function Av(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=_v(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var k6=Bn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Df(e,n){if(n){if(k6[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(le(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(le(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(le(61))}if(n.style!=null&&typeof n.style!="object")throw Error(le(62))}}function $f(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bf=null;function Eh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zf=null,Yi=null,Ji=null;function f0(e){if(e=os(e)){if(typeof zf!="function")throw Error(le(280));var n=e.stateNode;n&&(n=ku(n),zf(e.stateNode,e.type,n))}}function Tv(e){Yi?Ji?Ji.push(e):Ji=[e]:Yi=e}function Ov(){if(Yi){var e=Yi,n=Ji;if(Ji=Yi=null,f0(e),n)for(e=0;e<n.length;e++)f0(n[e])}}function Pv(e,n){return e(n)}function Nv(){}var Cd=!1;function Rv(e,n,t){if(Cd)return e(n,t);Cd=!0;try{return Pv(e,n,t)}finally{Cd=!1,(Yi!==null||Ji!==null)&&(Nv(),Ov())}}function xl(e,n){var t=e.stateNode;if(t===null)return null;var r=ku(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(le(231,n,typeof t));return t}var Hf=!1;if(Jr)try{var ja={};Object.defineProperty(ja,"passive",{get:function(){Hf=!0}}),window.addEventListener("test",ja,ja),window.removeEventListener("test",ja,ja)}catch{Hf=!1}function E6(e,n,t,r,o,i,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(u){this.onError(u)}}var ll=!1,_c=null,Ac=!1,Uf=null,x6={onError:function(e){ll=!0,_c=e}};function I6(e,n,t,r,o,i,a,l,s){ll=!1,_c=null,E6.apply(x6,arguments)}function _6(e,n,t,r,o,i,a,l,s){if(I6.apply(this,arguments),ll){if(ll){var c=_c;ll=!1,_c=null}else throw Error(le(198));Ac||(Ac=!0,Uf=c)}}function yi(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Fv(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m0(e){if(yi(e)!==e)throw Error(le(188))}function A6(e){var n=e.alternate;if(!n){if(n=yi(e),n===null)throw Error(le(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return m0(o),e;if(i===r)return m0(o),n;i=i.sibling}throw Error(le(188))}if(t.return!==r.return)t=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a)throw Error(le(189))}}if(t.alternate!==r)throw Error(le(190))}if(t.tag!==3)throw Error(le(188));return t.stateNode.current===t?e:n}function Mv(e){return e=A6(e),e!==null?Lv(e):null}function Lv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Lv(e);if(n!==null)return n;e=e.sibling}return null}var jv=qt.unstable_scheduleCallback,h0=qt.unstable_cancelCallback,T6=qt.unstable_shouldYield,O6=qt.unstable_requestPaint,Gn=qt.unstable_now,P6=qt.unstable_getCurrentPriorityLevel,xh=qt.unstable_ImmediatePriority,Dv=qt.unstable_UserBlockingPriority,Tc=qt.unstable_NormalPriority,N6=qt.unstable_LowPriority,$v=qt.unstable_IdlePriority,yu=null,Lr=null;function R6(e){if(Lr&&typeof Lr.onCommitFiberRoot=="function")try{Lr.onCommitFiberRoot(yu,e,void 0,(e.current.flags&128)===128)}catch{}}var Er=Math.clz32?Math.clz32:L6,F6=Math.log,M6=Math.LN2;function L6(e){return e>>>=0,e===0?32:31-(F6(e)/M6|0)|0}var xs=64,Is=4194304;function tl(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oc(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~o;l!==0?r=tl(l):(i&=a,i!==0&&(r=tl(i)))}else a=t&~o,a!==0?r=tl(a):i!==0&&(r=tl(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Er(n),o=1<<t,r|=e[t],n&=~o;return r}function j6(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D6(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Er(i),l=1<<a,s=o[a];s===-1?(!(l&t)||l&r)&&(o[a]=j6(l,n)):s<=n&&(e.expiredLanes|=l),i&=~l}}function Vf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bv(){var e=xs;return xs<<=1,!(xs&4194240)&&(xs=64),e}function Sd(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ts(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Er(n),e[n]=t}function $6(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Er(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function Ih(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Er(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var Cn=0;function zv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hv,_h,Uv,Vv,Wv,Wf=!1,_s=[],Eo=null,xo=null,Io=null,Il=new Map,_l=new Map,go=[],B6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function p0(e,n){switch(e){case"focusin":case"focusout":Eo=null;break;case"dragenter":case"dragleave":xo=null;break;case"mouseover":case"mouseout":Io=null;break;case"pointerover":case"pointerout":Il.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(n.pointerId)}}function Da(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=os(n),n!==null&&_h(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function z6(e,n,t,r,o){switch(n){case"focusin":return Eo=Da(Eo,e,n,t,r,o),!0;case"dragenter":return xo=Da(xo,e,n,t,r,o),!0;case"mouseover":return Io=Da(Io,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return Il.set(i,Da(Il.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,_l.set(i,Da(_l.get(i)||null,e,n,t,r,o)),!0}return!1}function Xv(e){var n=Jo(e.target);if(n!==null){var t=yi(n);if(t!==null){if(n=t.tag,n===13){if(n=Fv(t),n!==null){e.blockedOn=n,Wv(e.priority,function(){Uv(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ec(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Xf(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Bf=r,t.target.dispatchEvent(r),Bf=null}else return n=os(t),n!==null&&_h(n),e.blockedOn=t,!1;n.shift()}return!0}function g0(e,n,t){ec(e)&&t.delete(n)}function H6(){Wf=!1,Eo!==null&&ec(Eo)&&(Eo=null),xo!==null&&ec(xo)&&(xo=null),Io!==null&&ec(Io)&&(Io=null),Il.forEach(g0),_l.forEach(g0)}function $a(e,n){e.blockedOn===n&&(e.blockedOn=null,Wf||(Wf=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,H6)))}function Al(e){function n(o){return $a(o,e)}if(0<_s.length){$a(_s[0],e);for(var t=1;t<_s.length;t++){var r=_s[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Eo!==null&&$a(Eo,e),xo!==null&&$a(xo,e),Io!==null&&$a(Io,e),Il.forEach(n),_l.forEach(n),t=0;t<go.length;t++)r=go[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<go.length&&(t=go[0],t.blockedOn===null);)Xv(t),t.blockedOn===null&&go.shift()}var ea=io.ReactCurrentBatchConfig,Pc=!0;function U6(e,n,t,r){var o=Cn,i=ea.transition;ea.transition=null;try{Cn=1,Ah(e,n,t,r)}finally{Cn=o,ea.transition=i}}function V6(e,n,t,r){var o=Cn,i=ea.transition;ea.transition=null;try{Cn=4,Ah(e,n,t,r)}finally{Cn=o,ea.transition=i}}function Ah(e,n,t,r){if(Pc){var o=Xf(e,n,t,r);if(o===null)Nd(e,n,r,Nc,t),p0(e,r);else if(z6(o,e,n,t,r))r.stopPropagation();else if(p0(e,r),n&4&&-1<B6.indexOf(e)){for(;o!==null;){var i=os(o);if(i!==null&&Hv(i),i=Xf(e,n,t,r),i===null&&Nd(e,n,r,Nc,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else Nd(e,n,r,null,t)}}var Nc=null;function Xf(e,n,t,r){if(Nc=null,e=Eh(r),e=Jo(e),e!==null)if(n=yi(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Fv(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Nc=e,null}function Gv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P6()){case xh:return 1;case Dv:return 4;case Tc:case N6:return 16;case $v:return 536870912;default:return 16}default:return 16}}var bo=null,Th=null,nc=null;function Zv(){if(nc)return nc;var e,n=Th,t=n.length,r,o="value"in bo?bo.value:bo.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===o[i-r];r++);return nc=o.slice(e,1<r?1-r:void 0)}function tc(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function As(){return!0}function v0(){return!1}function Jt(e){function n(t,r,o,i,a){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?As:v0,this.isPropagationStopped=v0,this}return Bn(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=As)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=As)},persist:function(){},isPersistent:As}),n}var ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oh=Jt(ya),rs=Bn({},ya,{view:0,detail:0}),W6=Jt(rs),kd,Ed,Ba,wu=Bn({},rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ph,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ba&&(Ba&&e.type==="mousemove"?(kd=e.screenX-Ba.screenX,Ed=e.screenY-Ba.screenY):Ed=kd=0,Ba=e),kd)},movementY:function(e){return"movementY"in e?e.movementY:Ed}}),b0=Jt(wu),X6=Bn({},wu,{dataTransfer:0}),G6=Jt(X6),Z6=Bn({},rs,{relatedTarget:0}),xd=Jt(Z6),K6=Bn({},ya,{animationName:0,elapsedTime:0,pseudoElement:0}),q6=Jt(K6),Q6=Bn({},ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Y6=Jt(Q6),J6=Bn({},ya,{data:0}),y0=Jt(J6),eC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rC(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=tC[e])?!!n[e]:!1}function Ph(){return rC}var oC=Bn({},rs,{key:function(e){if(e.key){var n=eC[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=tc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ph,charCode:function(e){return e.type==="keypress"?tc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),iC=Jt(oC),aC=Bn({},wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w0=Jt(aC),lC=Bn({},rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ph}),sC=Jt(lC),cC=Bn({},ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),uC=Jt(cC),dC=Bn({},wu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fC=Jt(dC),mC=[9,13,27,32],Nh=Jr&&"CompositionEvent"in window,sl=null;Jr&&"documentMode"in document&&(sl=document.documentMode);var hC=Jr&&"TextEvent"in window&&!sl,Kv=Jr&&(!Nh||sl&&8<sl&&11>=sl),C0=" ",S0=!1;function qv(e,n){switch(e){case"keyup":return mC.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Di=!1;function pC(e,n){switch(e){case"compositionend":return Qv(n);case"keypress":return n.which!==32?null:(S0=!0,C0);case"textInput":return e=n.data,e===C0&&S0?null:e;default:return null}}function gC(e,n){if(Di)return e==="compositionend"||!Nh&&qv(e,n)?(e=Zv(),nc=Th=bo=null,Di=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Kv&&n.locale!=="ko"?null:n.data;default:return null}}var vC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function k0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!vC[e.type]:n==="textarea"}function Yv(e,n,t,r){Tv(r),n=Rc(n,"onChange"),0<n.length&&(t=new Oh("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var cl=null,Tl=null;function bC(e){cb(e,0)}function Cu(e){var n=zi(e);if(Sv(n))return e}function yC(e,n){if(e==="change")return n}var Jv=!1;if(Jr){var Id;if(Jr){var _d="oninput"in document;if(!_d){var E0=document.createElement("div");E0.setAttribute("oninput","return;"),_d=typeof E0.oninput=="function"}Id=_d}else Id=!1;Jv=Id&&(!document.documentMode||9<document.documentMode)}function x0(){cl&&(cl.detachEvent("onpropertychange",eb),Tl=cl=null)}function eb(e){if(e.propertyName==="value"&&Cu(Tl)){var n=[];Yv(n,Tl,e,Eh(e)),Rv(bC,n)}}function wC(e,n,t){e==="focusin"?(x0(),cl=n,Tl=t,cl.attachEvent("onpropertychange",eb)):e==="focusout"&&x0()}function CC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cu(Tl)}function SC(e,n){if(e==="click")return Cu(n)}function kC(e,n){if(e==="input"||e==="change")return Cu(n)}function EC(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ar=typeof Object.is=="function"?Object.is:EC;function Ol(e,n){if(Ar(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Af.call(n,o)||!Ar(e[o],n[o]))return!1}return!0}function I0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _0(e,n){var t=I0(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=I0(t)}}function nb(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?nb(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function tb(){for(var e=window,n=Ic();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ic(e.document)}return n}function Rh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function xC(e){var n=tb(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&nb(t.ownerDocument.documentElement,t)){if(r!==null&&Rh(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=_0(t,i);var a=_0(t,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var IC=Jr&&"documentMode"in document&&11>=document.documentMode,$i=null,Gf=null,ul=null,Zf=!1;function A0(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Zf||$i==null||$i!==Ic(r)||(r=$i,"selectionStart"in r&&Rh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ul&&Ol(ul,r)||(ul=r,r=Rc(Gf,"onSelect"),0<r.length&&(n=new Oh("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=$i)))}function Ts(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Bi={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionend:Ts("Transition","TransitionEnd")},Ad={},rb={};Jr&&(rb=document.createElement("div").style,"AnimationEvent"in window||(delete Bi.animationend.animation,delete Bi.animationiteration.animation,delete Bi.animationstart.animation),"TransitionEvent"in window||delete Bi.transitionend.transition);function Su(e){if(Ad[e])return Ad[e];if(!Bi[e])return e;var n=Bi[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in rb)return Ad[e]=n[t];return e}var ob=Su("animationend"),ib=Su("animationiteration"),ab=Su("animationstart"),lb=Su("transitionend"),sb=new Map,T0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mo(e,n){sb.set(e,n),bi(n,[e])}for(var Td=0;Td<T0.length;Td++){var Od=T0[Td],_C=Od.toLowerCase(),AC=Od[0].toUpperCase()+Od.slice(1);Mo(_C,"on"+AC)}Mo(ob,"onAnimationEnd");Mo(ib,"onAnimationIteration");Mo(ab,"onAnimationStart");Mo("dblclick","onDoubleClick");Mo("focusin","onFocus");Mo("focusout","onBlur");Mo(lb,"onTransitionEnd");ia("onMouseEnter",["mouseout","mouseover"]);ia("onMouseLeave",["mouseout","mouseover"]);ia("onPointerEnter",["pointerout","pointerover"]);ia("onPointerLeave",["pointerout","pointerover"]);bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bi("onBeforeInput",["compositionend","keypress","textInput","paste"]);bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TC=new Set("cancel close invalid load scroll toggle".split(" ").concat(rl));function O0(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,_6(r,n,void 0,e),e.currentTarget=null}function cb(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;O0(o,l,c),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;O0(o,l,c),i=s}}}if(Ac)throw e=Uf,Ac=!1,Uf=null,e}function Nn(e,n){var t=n[Jf];t===void 0&&(t=n[Jf]=new Set);var r=e+"__bubble";t.has(r)||(ub(n,e,2,!1),t.add(r))}function Pd(e,n,t){var r=0;n&&(r|=4),ub(t,e,r,n)}var Os="_reactListening"+Math.random().toString(36).slice(2);function Pl(e){if(!e[Os]){e[Os]=!0,vv.forEach(function(t){t!=="selectionchange"&&(TC.has(t)||Pd(t,!1,e),Pd(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Os]||(n[Os]=!0,Pd("selectionchange",!1,n))}}function ub(e,n,t,r){switch(Gv(n)){case 1:var o=U6;break;case 4:o=V6;break;default:o=Ah}t=o.bind(null,n,t,e),o=void 0,!Hf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Nd(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=Jo(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Rv(function(){var c=i,u=Eh(t),d=[];e:{var f=sb.get(e);if(f!==void 0){var m=Oh,h=e;switch(e){case"keypress":if(tc(t)===0)break e;case"keydown":case"keyup":m=iC;break;case"focusin":h="focus",m=xd;break;case"focusout":h="blur",m=xd;break;case"beforeblur":case"afterblur":m=xd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=b0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=G6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=sC;break;case ob:case ib:case ab:m=q6;break;case lb:m=uC;break;case"scroll":m=W6;break;case"wheel":m=fC;break;case"copy":case"cut":case"paste":m=Y6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=w0}var b=(n&4)!==0,k=!b&&e==="scroll",g=b?f!==null?f+"Capture":null:f;b=[];for(var v=c,y;v!==null;){y=v;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,g!==null&&(E=xl(v,g),E!=null&&b.push(Nl(v,E,y)))),k)break;v=v.return}0<b.length&&(f=new m(f,h,null,t,u),d.push({event:f,listeners:b}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&t!==Bf&&(h=t.relatedTarget||t.fromElement)&&(Jo(h)||h[eo]))break e;if((m||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,m?(h=t.relatedTarget||t.toElement,m=c,h=h?Jo(h):null,h!==null&&(k=yi(h),h!==k||h.tag!==5&&h.tag!==6)&&(h=null)):(m=null,h=c),m!==h)){if(b=b0,E="onMouseLeave",g="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(b=w0,E="onPointerLeave",g="onPointerEnter",v="pointer"),k=m==null?f:zi(m),y=h==null?f:zi(h),f=new b(E,v+"leave",m,t,u),f.target=k,f.relatedTarget=y,E=null,Jo(u)===c&&(b=new b(g,v+"enter",h,t,u),b.target=y,b.relatedTarget=k,E=b),k=E,m&&h)n:{for(b=m,g=h,v=0,y=b;y;y=_i(y))v++;for(y=0,E=g;E;E=_i(E))y++;for(;0<v-y;)b=_i(b),v--;for(;0<y-v;)g=_i(g),y--;for(;v--;){if(b===g||g!==null&&b===g.alternate)break n;b=_i(b),g=_i(g)}b=null}else b=null;m!==null&&P0(d,f,m,b,!1),h!==null&&k!==null&&P0(d,k,h,b,!0)}}e:{if(f=c?zi(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var _=yC;else if(k0(f))if(Jv)_=kC;else{_=CC;var w=wC}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(_=SC);if(_&&(_=_(e,c))){Yv(d,_,t,u);break e}w&&w(e,f,c),e==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Mf(f,"number",f.value)}switch(w=c?zi(c):window,e){case"focusin":(k0(w)||w.contentEditable==="true")&&($i=w,Gf=c,ul=null);break;case"focusout":ul=Gf=$i=null;break;case"mousedown":Zf=!0;break;case"contextmenu":case"mouseup":case"dragend":Zf=!1,A0(d,t,u);break;case"selectionchange":if(IC)break;case"keydown":case"keyup":A0(d,t,u)}var A;if(Nh)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Di?qv(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(Kv&&t.locale!=="ko"&&(Di||N!=="onCompositionStart"?N==="onCompositionEnd"&&Di&&(A=Zv()):(bo=u,Th="value"in bo?bo.value:bo.textContent,Di=!0)),w=Rc(c,N),0<w.length&&(N=new y0(N,e,null,t,u),d.push({event:N,listeners:w}),A?N.data=A:(A=Qv(t),A!==null&&(N.data=A)))),(A=hC?pC(e,t):gC(e,t))&&(c=Rc(c,"onBeforeInput"),0<c.length&&(u=new y0("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=A))}cb(d,n)})}function Nl(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Rc(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=xl(e,t),i!=null&&r.unshift(Nl(e,i,o)),i=xl(e,n),i!=null&&r.push(Nl(e,i,o))),e=e.return}return r}function _i(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function P0(e,n,t,r,o){for(var i=n._reactName,a=[];t!==null&&t!==r;){var l=t,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,o?(s=xl(t,i),s!=null&&a.unshift(Nl(t,s,l))):o||(s=xl(t,i),s!=null&&a.push(Nl(t,s,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var OC=/\r\n?/g,PC=/\u0000|\uFFFD/g;function N0(e){return(typeof e=="string"?e:""+e).replace(OC,`
`).replace(PC,"")}function Ps(e,n,t){if(n=N0(n),N0(e)!==n&&t)throw Error(le(425))}function Fc(){}var Kf=null,qf=null;function Qf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yf=typeof setTimeout=="function"?setTimeout:void 0,NC=typeof clearTimeout=="function"?clearTimeout:void 0,R0=typeof Promise=="function"?Promise:void 0,RC=typeof queueMicrotask=="function"?queueMicrotask:typeof R0<"u"?function(e){return R0.resolve(null).then(e).catch(FC)}:Yf;function FC(e){setTimeout(function(){throw e})}function Rd(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Al(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Al(n)}function _o(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function F0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var wa=Math.random().toString(36).slice(2),Fr="__reactFiber$"+wa,Rl="__reactProps$"+wa,eo="__reactContainer$"+wa,Jf="__reactEvents$"+wa,MC="__reactListeners$"+wa,LC="__reactHandles$"+wa;function Jo(e){var n=e[Fr];if(n)return n;for(var t=e.parentNode;t;){if(n=t[eo]||t[Fr]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=F0(e);e!==null;){if(t=e[Fr])return t;e=F0(e)}return n}e=t,t=e.parentNode}return null}function os(e){return e=e[Fr]||e[eo],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(le(33))}function ku(e){return e[Rl]||null}var em=[],Hi=-1;function Lo(e){return{current:e}}function Rn(e){0>Hi||(e.current=em[Hi],em[Hi]=null,Hi--)}function On(e,n){Hi++,em[Hi]=e.current,e.current=n}var Fo={},yt=Lo(Fo),Rt=Lo(!1),di=Fo;function aa(e,n){var t=e.type.contextTypes;if(!t)return Fo;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ft(e){return e=e.childContextTypes,e!=null}function Mc(){Rn(Rt),Rn(yt)}function M0(e,n,t){if(yt.current!==Fo)throw Error(le(168));On(yt,n),On(Rt,t)}function db(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(le(108,w6(e)||"Unknown",o));return Bn({},t,r)}function Lc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fo,di=yt.current,On(yt,e),On(Rt,Rt.current),!0}function L0(e,n,t){var r=e.stateNode;if(!r)throw Error(le(169));t?(e=db(e,n,di),r.__reactInternalMemoizedMergedChildContext=e,Rn(Rt),Rn(yt),On(yt,e)):Rn(Rt),On(Rt,t)}var Xr=null,Eu=!1,Fd=!1;function fb(e){Xr===null?Xr=[e]:Xr.push(e)}function jC(e){Eu=!0,fb(e)}function jo(){if(!Fd&&Xr!==null){Fd=!0;var e=0,n=Cn;try{var t=Xr;for(Cn=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Xr=null,Eu=!1}catch(o){throw Xr!==null&&(Xr=Xr.slice(e+1)),jv(xh,jo),o}finally{Cn=n,Fd=!1}}return null}var Ui=[],Vi=0,jc=null,Dc=0,rr=[],or=0,fi=null,Zr=1,Kr="";function Go(e,n){Ui[Vi++]=Dc,Ui[Vi++]=jc,jc=e,Dc=n}function mb(e,n,t){rr[or++]=Zr,rr[or++]=Kr,rr[or++]=fi,fi=e;var r=Zr;e=Kr;var o=32-Er(r)-1;r&=~(1<<o),t+=1;var i=32-Er(n)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Zr=1<<32-Er(n)+o|t<<o|r,Kr=i+e}else Zr=1<<i|t<<o|r,Kr=e}function Fh(e){e.return!==null&&(Go(e,1),mb(e,1,0))}function Mh(e){for(;e===jc;)jc=Ui[--Vi],Ui[Vi]=null,Dc=Ui[--Vi],Ui[Vi]=null;for(;e===fi;)fi=rr[--or],rr[or]=null,Kr=rr[--or],rr[or]=null,Zr=rr[--or],rr[or]=null}var Zt=null,Xt=null,Fn=!1,kr=null;function hb(e,n){var t=ar(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function j0(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Zt=e,Xt=_o(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Zt=e,Xt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=fi!==null?{id:Zr,overflow:Kr}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ar(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Zt=e,Xt=null,!0):!1;default:return!1}}function nm(e){return(e.mode&1)!==0&&(e.flags&128)===0}function tm(e){if(Fn){var n=Xt;if(n){var t=n;if(!j0(e,n)){if(nm(e))throw Error(le(418));n=_o(t.nextSibling);var r=Zt;n&&j0(e,n)?hb(r,t):(e.flags=e.flags&-4097|2,Fn=!1,Zt=e)}}else{if(nm(e))throw Error(le(418));e.flags=e.flags&-4097|2,Fn=!1,Zt=e}}}function D0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Zt=e}function Ns(e){if(e!==Zt)return!1;if(!Fn)return D0(e),Fn=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Qf(e.type,e.memoizedProps)),n&&(n=Xt)){if(nm(e))throw pb(),Error(le(418));for(;n;)hb(e,n),n=_o(n.nextSibling)}if(D0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(le(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Xt=_o(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Xt=null}}else Xt=Zt?_o(e.stateNode.nextSibling):null;return!0}function pb(){for(var e=Xt;e;)e=_o(e.nextSibling)}function la(){Xt=Zt=null,Fn=!1}function Lh(e){kr===null?kr=[e]:kr.push(e)}var DC=io.ReactCurrentBatchConfig;function za(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(le(309));var r=t.stateNode}if(!r)throw Error(le(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(le(284));if(!t._owner)throw Error(le(290,e))}return e}function Rs(e,n){throw e=Object.prototype.toString.call(n),Error(le(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function $0(e){var n=e._init;return n(e._payload)}function gb(e){function n(g,v){if(e){var y=g.deletions;y===null?(g.deletions=[v],g.flags|=16):y.push(v)}}function t(g,v){if(!e)return null;for(;v!==null;)n(g,v),v=v.sibling;return null}function r(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function o(g,v){return g=Po(g,v),g.index=0,g.sibling=null,g}function i(g,v,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<v?(g.flags|=2,v):y):(g.flags|=2,v)):(g.flags|=1048576,v)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,v,y,E){return v===null||v.tag!==6?(v=zd(y,g.mode,E),v.return=g,v):(v=o(v,y),v.return=g,v)}function s(g,v,y,E){var _=y.type;return _===ji?u(g,v,y.props.children,E,y.key):v!==null&&(v.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===ho&&$0(_)===v.type)?(E=o(v,y.props),E.ref=za(g,v,y),E.return=g,E):(E=cc(y.type,y.key,y.props,null,g.mode,E),E.ref=za(g,v,y),E.return=g,E)}function c(g,v,y,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Hd(y,g.mode,E),v.return=g,v):(v=o(v,y.children||[]),v.return=g,v)}function u(g,v,y,E,_){return v===null||v.tag!==7?(v=ai(y,g.mode,E,_),v.return=g,v):(v=o(v,y),v.return=g,v)}function d(g,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=zd(""+v,g.mode,y),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ss:return y=cc(v.type,v.key,v.props,null,g.mode,y),y.ref=za(g,null,v),y.return=g,y;case Li:return v=Hd(v,g.mode,y),v.return=g,v;case ho:var E=v._init;return d(g,E(v._payload),y)}if(nl(v)||La(v))return v=ai(v,g.mode,y,null),v.return=g,v;Rs(g,v)}return null}function f(g,v,y,E){var _=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return _!==null?null:l(g,v,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ss:return y.key===_?s(g,v,y,E):null;case Li:return y.key===_?c(g,v,y,E):null;case ho:return _=y._init,f(g,v,_(y._payload),E)}if(nl(y)||La(y))return _!==null?null:u(g,v,y,E,null);Rs(g,y)}return null}function m(g,v,y,E,_){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(y)||null,l(v,g,""+E,_);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ss:return g=g.get(E.key===null?y:E.key)||null,s(v,g,E,_);case Li:return g=g.get(E.key===null?y:E.key)||null,c(v,g,E,_);case ho:var w=E._init;return m(g,v,y,w(E._payload),_)}if(nl(E)||La(E))return g=g.get(y)||null,u(v,g,E,_,null);Rs(v,E)}return null}function h(g,v,y,E){for(var _=null,w=null,A=v,N=v=0,R=null;A!==null&&N<y.length;N++){A.index>N?(R=A,A=null):R=A.sibling;var V=f(g,A,y[N],E);if(V===null){A===null&&(A=R);break}e&&A&&V.alternate===null&&n(g,A),v=i(V,v,N),w===null?_=V:w.sibling=V,w=V,A=R}if(N===y.length)return t(g,A),Fn&&Go(g,N),_;if(A===null){for(;N<y.length;N++)A=d(g,y[N],E),A!==null&&(v=i(A,v,N),w===null?_=A:w.sibling=A,w=A);return Fn&&Go(g,N),_}for(A=r(g,A);N<y.length;N++)R=m(A,g,N,y[N],E),R!==null&&(e&&R.alternate!==null&&A.delete(R.key===null?N:R.key),v=i(R,v,N),w===null?_=R:w.sibling=R,w=R);return e&&A.forEach(function($){return n(g,$)}),Fn&&Go(g,N),_}function b(g,v,y,E){var _=La(y);if(typeof _!="function")throw Error(le(150));if(y=_.call(y),y==null)throw Error(le(151));for(var w=_=null,A=v,N=v=0,R=null,V=y.next();A!==null&&!V.done;N++,V=y.next()){A.index>N?(R=A,A=null):R=A.sibling;var $=f(g,A,V.value,E);if($===null){A===null&&(A=R);break}e&&A&&$.alternate===null&&n(g,A),v=i($,v,N),w===null?_=$:w.sibling=$,w=$,A=R}if(V.done)return t(g,A),Fn&&Go(g,N),_;if(A===null){for(;!V.done;N++,V=y.next())V=d(g,V.value,E),V!==null&&(v=i(V,v,N),w===null?_=V:w.sibling=V,w=V);return Fn&&Go(g,N),_}for(A=r(g,A);!V.done;N++,V=y.next())V=m(A,g,N,V.value,E),V!==null&&(e&&V.alternate!==null&&A.delete(V.key===null?N:V.key),v=i(V,v,N),w===null?_=V:w.sibling=V,w=V);return e&&A.forEach(function(z){return n(g,z)}),Fn&&Go(g,N),_}function k(g,v,y,E){if(typeof y=="object"&&y!==null&&y.type===ji&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ss:e:{for(var _=y.key,w=v;w!==null;){if(w.key===_){if(_=y.type,_===ji){if(w.tag===7){t(g,w.sibling),v=o(w,y.props.children),v.return=g,g=v;break e}}else if(w.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===ho&&$0(_)===w.type){t(g,w.sibling),v=o(w,y.props),v.ref=za(g,w,y),v.return=g,g=v;break e}t(g,w);break}else n(g,w);w=w.sibling}y.type===ji?(v=ai(y.props.children,g.mode,E,y.key),v.return=g,g=v):(E=cc(y.type,y.key,y.props,null,g.mode,E),E.ref=za(g,v,y),E.return=g,g=E)}return a(g);case Li:e:{for(w=y.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){t(g,v.sibling),v=o(v,y.children||[]),v.return=g,g=v;break e}else{t(g,v);break}else n(g,v);v=v.sibling}v=Hd(y,g.mode,E),v.return=g,g=v}return a(g);case ho:return w=y._init,k(g,v,w(y._payload),E)}if(nl(y))return h(g,v,y,E);if(La(y))return b(g,v,y,E);Rs(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(t(g,v.sibling),v=o(v,y),v.return=g,g=v):(t(g,v),v=zd(y,g.mode,E),v.return=g,g=v),a(g)):t(g,v)}return k}var sa=gb(!0),vb=gb(!1),$c=Lo(null),Bc=null,Wi=null,jh=null;function Dh(){jh=Wi=Bc=null}function $h(e){var n=$c.current;Rn($c),e._currentValue=n}function rm(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function na(e,n){Bc=e,jh=Wi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Nt=!0),e.firstContext=null)}function sr(e){var n=e._currentValue;if(jh!==e)if(e={context:e,memoizedValue:n,next:null},Wi===null){if(Bc===null)throw Error(le(308));Wi=e,Bc.dependencies={lanes:0,firstContext:e}}else Wi=Wi.next=e;return n}var ei=null;function Bh(e){ei===null?ei=[e]:ei.push(e)}function bb(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Bh(n)):(t.next=o.next,o.next=t),n.interleaved=t,no(e,r)}function no(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var po=!1;function zh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yb(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qr(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Ao(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,bn&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,no(e,t)}return o=r.interleaved,o===null?(n.next=n,Bh(r)):(n.next=o.next,o.next=n),r.interleaved=n,no(e,t)}function rc(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ih(e,t)}}function B0(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function zc(e,n,t,r){var o=e.updateQueue;po=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?i=c:a.next=c,a=s;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==a&&(l===null?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(i!==null){var d=o.baseState;a=0,u=c=s=null,l=i;do{var f=l.lane,m=l.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,b=l;switch(f=n,m=t,b.tag){case 1:if(h=b.payload,typeof h=="function"){d=h.call(m,d,f);break e}d=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=b.payload,f=typeof h=="function"?h.call(m,d,f):h,f==null)break e;d=Bn({},d,f);break e;case 2:po=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(c=u=m,s=d):u=u.next=m,a|=f;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;f=l,l=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(u===null&&(s=d),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=u,n=o.shared.interleaved,n!==null){o=n;do a|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);hi|=a,e.lanes=a,e.memoizedState=d}}function z0(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(le(191,o));o.call(r)}}}var is={},jr=Lo(is),Fl=Lo(is),Ml=Lo(is);function ni(e){if(e===is)throw Error(le(174));return e}function Hh(e,n){switch(On(Ml,n),On(Fl,e),On(jr,is),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:jf(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=jf(n,e)}Rn(jr),On(jr,n)}function ca(){Rn(jr),Rn(Fl),Rn(Ml)}function wb(e){ni(Ml.current);var n=ni(jr.current),t=jf(n,e.type);n!==t&&(On(Fl,e),On(jr,t))}function Uh(e){Fl.current===e&&(Rn(jr),Rn(Fl))}var jn=Lo(0);function Hc(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Md=[];function Vh(){for(var e=0;e<Md.length;e++)Md[e]._workInProgressVersionPrimary=null;Md.length=0}var oc=io.ReactCurrentDispatcher,Ld=io.ReactCurrentBatchConfig,mi=0,Dn=null,nt=null,rt=null,Uc=!1,dl=!1,Ll=0,$C=0;function ht(){throw Error(le(321))}function Wh(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ar(e[t],n[t]))return!1;return!0}function Xh(e,n,t,r,o,i){if(mi=i,Dn=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,oc.current=e===null||e.memoizedState===null?UC:VC,e=t(r,o),dl){i=0;do{if(dl=!1,Ll=0,25<=i)throw Error(le(301));i+=1,rt=nt=null,n.updateQueue=null,oc.current=WC,e=t(r,o)}while(dl)}if(oc.current=Vc,n=nt!==null&&nt.next!==null,mi=0,rt=nt=Dn=null,Uc=!1,n)throw Error(le(300));return e}function Gh(){var e=Ll!==0;return Ll=0,e}function Nr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Dn.memoizedState=rt=e:rt=rt.next=e,rt}function cr(){if(nt===null){var e=Dn.alternate;e=e!==null?e.memoizedState:null}else e=nt.next;var n=rt===null?Dn.memoizedState:rt.next;if(n!==null)rt=n,nt=e;else{if(e===null)throw Error(le(310));nt=e,e={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},rt===null?Dn.memoizedState=rt=e:rt=rt.next=e}return rt}function jl(e,n){return typeof n=="function"?n(e):n}function jd(e){var n=cr(),t=n.queue;if(t===null)throw Error(le(311));t.lastRenderedReducer=e;var r=nt,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,c=i;do{var u=c.lane;if((mi&u)===u)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,Dn.lanes|=u,hi|=u}c=c.next}while(c!==null&&c!==i);s===null?a=r:s.next=l,Ar(r,n.memoizedState)||(Nt=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,Dn.lanes|=i,hi|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Dd(e){var n=cr(),t=n.queue;if(t===null)throw Error(le(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Ar(i,n.memoizedState)||(Nt=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Cb(){}function Sb(e,n){var t=Dn,r=cr(),o=n(),i=!Ar(r.memoizedState,o);if(i&&(r.memoizedState=o,Nt=!0),r=r.queue,Zh(xb.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||rt!==null&&rt.memoizedState.tag&1){if(t.flags|=2048,Dl(9,Eb.bind(null,t,r,o,n),void 0,null),ot===null)throw Error(le(349));mi&30||kb(t,n,o)}return o}function kb(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Dn.updateQueue,n===null?(n={lastEffect:null,stores:null},Dn.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Eb(e,n,t,r){n.value=t,n.getSnapshot=r,Ib(n)&&_b(e)}function xb(e,n,t){return t(function(){Ib(n)&&_b(e)})}function Ib(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ar(e,t)}catch{return!0}}function _b(e){var n=no(e,1);n!==null&&xr(n,e,1,-1)}function H0(e){var n=Nr();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jl,lastRenderedState:e},n.queue=e,e=e.dispatch=HC.bind(null,Dn,e),[n.memoizedState,e]}function Dl(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Dn.updateQueue,n===null?(n={lastEffect:null,stores:null},Dn.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Ab(){return cr().memoizedState}function ic(e,n,t,r){var o=Nr();Dn.flags|=e,o.memoizedState=Dl(1|n,t,void 0,r===void 0?null:r)}function xu(e,n,t,r){var o=cr();r=r===void 0?null:r;var i=void 0;if(nt!==null){var a=nt.memoizedState;if(i=a.destroy,r!==null&&Wh(r,a.deps)){o.memoizedState=Dl(n,t,i,r);return}}Dn.flags|=e,o.memoizedState=Dl(1|n,t,i,r)}function U0(e,n){return ic(8390656,8,e,n)}function Zh(e,n){return xu(2048,8,e,n)}function Tb(e,n){return xu(4,2,e,n)}function Ob(e,n){return xu(4,4,e,n)}function Pb(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Nb(e,n,t){return t=t!=null?t.concat([e]):null,xu(4,4,Pb.bind(null,n,e),t)}function Kh(){}function Rb(e,n){var t=cr();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Wh(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Fb(e,n){var t=cr();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Wh(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Mb(e,n,t){return mi&21?(Ar(t,n)||(t=Bv(),Dn.lanes|=t,hi|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Nt=!0),e.memoizedState=t)}function BC(e,n){var t=Cn;Cn=t!==0&&4>t?t:4,e(!0);var r=Ld.transition;Ld.transition={};try{e(!1),n()}finally{Cn=t,Ld.transition=r}}function Lb(){return cr().memoizedState}function zC(e,n,t){var r=Oo(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},jb(e))Db(n,t);else if(t=bb(e,n,t,r),t!==null){var o=xt();xr(t,e,r,o),$b(t,n,r)}}function HC(e,n,t){var r=Oo(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(jb(e))Db(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,l=i(a,t);if(o.hasEagerState=!0,o.eagerState=l,Ar(l,a)){var s=n.interleaved;s===null?(o.next=o,Bh(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}t=bb(e,n,o,r),t!==null&&(o=xt(),xr(t,e,r,o),$b(t,n,r))}}function jb(e){var n=e.alternate;return e===Dn||n!==null&&n===Dn}function Db(e,n){dl=Uc=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function $b(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ih(e,t)}}var Vc={readContext:sr,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},UC={readContext:sr,useCallback:function(e,n){return Nr().memoizedState=[e,n===void 0?null:n],e},useContext:sr,useEffect:U0,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ic(4194308,4,Pb.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ic(4194308,4,e,n)},useInsertionEffect:function(e,n){return ic(4,2,e,n)},useMemo:function(e,n){var t=Nr();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Nr();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=zC.bind(null,Dn,e),[r.memoizedState,e]},useRef:function(e){var n=Nr();return e={current:e},n.memoizedState=e},useState:H0,useDebugValue:Kh,useDeferredValue:function(e){return Nr().memoizedState=e},useTransition:function(){var e=H0(!1),n=e[0];return e=BC.bind(null,e[1]),Nr().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Dn,o=Nr();if(Fn){if(t===void 0)throw Error(le(407));t=t()}else{if(t=n(),ot===null)throw Error(le(349));mi&30||kb(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,U0(xb.bind(null,r,i,e),[e]),r.flags|=2048,Dl(9,Eb.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Nr(),n=ot.identifierPrefix;if(Fn){var t=Kr,r=Zr;t=(r&~(1<<32-Er(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ll++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=$C++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},VC={readContext:sr,useCallback:Rb,useContext:sr,useEffect:Zh,useImperativeHandle:Nb,useInsertionEffect:Tb,useLayoutEffect:Ob,useMemo:Fb,useReducer:jd,useRef:Ab,useState:function(){return jd(jl)},useDebugValue:Kh,useDeferredValue:function(e){var n=cr();return Mb(n,nt.memoizedState,e)},useTransition:function(){var e=jd(jl)[0],n=cr().memoizedState;return[e,n]},useMutableSource:Cb,useSyncExternalStore:Sb,useId:Lb,unstable_isNewReconciler:!1},WC={readContext:sr,useCallback:Rb,useContext:sr,useEffect:Zh,useImperativeHandle:Nb,useInsertionEffect:Tb,useLayoutEffect:Ob,useMemo:Fb,useReducer:Dd,useRef:Ab,useState:function(){return Dd(jl)},useDebugValue:Kh,useDeferredValue:function(e){var n=cr();return nt===null?n.memoizedState=e:Mb(n,nt.memoizedState,e)},useTransition:function(){var e=Dd(jl)[0],n=cr().memoizedState;return[e,n]},useMutableSource:Cb,useSyncExternalStore:Sb,useId:Lb,unstable_isNewReconciler:!1};function yr(e,n){if(e&&e.defaultProps){n=Bn({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function om(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Bn({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Iu={isMounted:function(e){return(e=e._reactInternals)?yi(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=xt(),o=Oo(e),i=qr(r,o);i.payload=n,t!=null&&(i.callback=t),n=Ao(e,i,o),n!==null&&(xr(n,e,o,r),rc(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=xt(),o=Oo(e),i=qr(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Ao(e,i,o),n!==null&&(xr(n,e,o,r),rc(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=xt(),r=Oo(e),o=qr(t,r);o.tag=2,n!=null&&(o.callback=n),n=Ao(e,o,r),n!==null&&(xr(n,e,r,t),rc(n,e,r))}};function V0(e,n,t,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!Ol(t,r)||!Ol(o,i):!0}function Bb(e,n,t){var r=!1,o=Fo,i=n.contextType;return typeof i=="object"&&i!==null?i=sr(i):(o=Ft(n)?di:yt.current,r=n.contextTypes,i=(r=r!=null)?aa(e,o):Fo),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Iu,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function W0(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Iu.enqueueReplaceState(n,n.state,null)}function im(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},zh(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=sr(i):(i=Ft(n)?di:yt.current,o.context=aa(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(om(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Iu.enqueueReplaceState(o,o.state,null),zc(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ua(e,n){try{var t="",r=n;do t+=y6(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function $d(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function am(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var XC=typeof WeakMap=="function"?WeakMap:Map;function zb(e,n,t){t=qr(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Xc||(Xc=!0,gm=r),am(e,n)},t}function Hb(e,n,t){t=qr(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){am(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){am(e,n),typeof r!="function"&&(To===null?To=new Set([this]):To.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function X0(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new XC;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=aS.bind(null,e,n,t),n.then(e,e))}function G0(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Z0(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=qr(-1,1),n.tag=2,Ao(t,n,1))),t.lanes|=1),e)}var GC=io.ReactCurrentOwner,Nt=!1;function St(e,n,t,r){n.child=e===null?vb(n,null,t,r):sa(n,e.child,t,r)}function K0(e,n,t,r,o){t=t.render;var i=n.ref;return na(n,o),r=Xh(e,n,t,r,i,o),t=Gh(),e!==null&&!Nt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,to(e,n,o)):(Fn&&t&&Fh(n),n.flags|=1,St(e,n,r,o),n.child)}function q0(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!rp(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Ub(e,n,i,r,o)):(e=cc(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:Ol,t(a,r)&&e.ref===n.ref)return to(e,n,o)}return n.flags|=1,e=Po(i,r),e.ref=n.ref,e.return=n,n.child=e}function Ub(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(Ol(i,r)&&e.ref===n.ref)if(Nt=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Nt=!0);else return n.lanes=e.lanes,to(e,n,o)}return lm(e,n,t,r,o)}function Vb(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},On(Gi,Ut),Ut|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,On(Gi,Ut),Ut|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,On(Gi,Ut),Ut|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,On(Gi,Ut),Ut|=r;return St(e,n,o,t),n.child}function Wb(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function lm(e,n,t,r,o){var i=Ft(t)?di:yt.current;return i=aa(n,i),na(n,o),t=Xh(e,n,t,r,i,o),r=Gh(),e!==null&&!Nt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,to(e,n,o)):(Fn&&r&&Fh(n),n.flags|=1,St(e,n,t,o),n.child)}function Q0(e,n,t,r,o){if(Ft(t)){var i=!0;Lc(n)}else i=!1;if(na(n,o),n.stateNode===null)ac(e,n),Bb(n,t,r),im(n,t,r,o),r=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var s=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=sr(c):(c=Ft(t)?di:yt.current,c=aa(n,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&W0(n,a,r,c),po=!1;var f=n.memoizedState;a.state=f,zc(n,r,a,o),s=n.memoizedState,l!==r||f!==s||Rt.current||po?(typeof u=="function"&&(om(n,t,u,r),s=n.memoizedState),(l=po||V0(n,t,l,r,f,s,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,yb(e,n),l=n.memoizedProps,c=n.type===n.elementType?l:yr(n.type,l),a.props=c,d=n.pendingProps,f=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=sr(s):(s=Ft(t)?di:yt.current,s=aa(n,s));var m=t.getDerivedStateFromProps;(u=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||f!==s)&&W0(n,a,r,s),po=!1,f=n.memoizedState,a.state=f,zc(n,r,a,o);var h=n.memoizedState;l!==d||f!==h||Rt.current||po?(typeof m=="function"&&(om(n,t,m,r),h=n.memoizedState),(c=po||V0(n,t,c,r,f,h,s)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=h),a.props=r,a.state=h,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return sm(e,n,t,r,i,o)}function sm(e,n,t,r,o,i){Wb(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return o&&L0(n,t,!1),to(e,n,i);r=n.stateNode,GC.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=sa(n,e.child,null,i),n.child=sa(n,null,l,i)):St(e,n,l,i),n.memoizedState=r.state,o&&L0(n,t,!0),n.child}function Xb(e){var n=e.stateNode;n.pendingContext?M0(e,n.pendingContext,n.pendingContext!==n.context):n.context&&M0(e,n.context,!1),Hh(e,n.containerInfo)}function Y0(e,n,t,r,o){return la(),Lh(o),n.flags|=256,St(e,n,t,r),n.child}var cm={dehydrated:null,treeContext:null,retryLane:0};function um(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gb(e,n,t){var r=n.pendingProps,o=jn.current,i=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),On(jn,o&1),e===null)return tm(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Tu(a,r,0,null),e=ai(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=um(t),n.memoizedState=cm,e):qh(n,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return ZC(e,n,a,r,l,o,t);if(i){i=r.fallback,a=n.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Po(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Po(l,i):(i=ai(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?um(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=cm,r}return i=e.child,e=i.sibling,r=Po(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function qh(e,n){return n=Tu({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Fs(e,n,t,r){return r!==null&&Lh(r),sa(n,e.child,null,t),e=qh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ZC(e,n,t,r,o,i,a){if(t)return n.flags&256?(n.flags&=-257,r=$d(Error(le(422))),Fs(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=Tu({mode:"visible",children:r.children},o,0,null),i=ai(i,o,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&sa(n,e.child,null,a),n.child.memoizedState=um(a),n.memoizedState=cm,i);if(!(n.mode&1))return Fs(e,n,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(le(419)),r=$d(i,r,void 0),Fs(e,n,a,r)}if(l=(a&e.childLanes)!==0,Nt||l){if(r=ot,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,no(e,o),xr(r,e,o,-1))}return tp(),r=$d(Error(le(421))),Fs(e,n,a,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=lS.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,Xt=_o(o.nextSibling),Zt=n,Fn=!0,kr=null,e!==null&&(rr[or++]=Zr,rr[or++]=Kr,rr[or++]=fi,Zr=e.id,Kr=e.overflow,fi=n),n=qh(n,r.children),n.flags|=4096,n)}function J0(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),rm(e.return,n,t)}function Bd(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function Zb(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(St(e,n,r.children,t),r=jn.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&J0(e,t,n);else if(e.tag===19)J0(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(On(jn,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&Hc(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),Bd(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Hc(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Bd(n,!0,t,null,i);break;case"together":Bd(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ac(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function to(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),hi|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(le(153));if(n.child!==null){for(e=n.child,t=Po(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Po(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function KC(e,n,t){switch(n.tag){case 3:Xb(n),la();break;case 5:wb(n);break;case 1:Ft(n.type)&&Lc(n);break;case 4:Hh(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;On($c,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(On(jn,jn.current&1),n.flags|=128,null):t&n.child.childLanes?Gb(e,n,t):(On(jn,jn.current&1),e=to(e,n,t),e!==null?e.sibling:null);On(jn,jn.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Zb(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),On(jn,jn.current),r)break;return null;case 22:case 23:return n.lanes=0,Vb(e,n,t)}return to(e,n,t)}var Kb,dm,qb,Qb;Kb=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};dm=function(){};qb=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,ni(jr.current);var i=null;switch(t){case"input":o=Rf(e,o),r=Rf(e,r),i=[];break;case"select":o=Bn({},o,{value:void 0}),r=Bn({},r,{value:void 0}),i=[];break;case"textarea":o=Lf(e,o),r=Lf(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fc)}Df(t,r);var a;t=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(kl.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(i||(i=[]),i.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(kl.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&Nn("scroll",e),i||l===s||(i=[])):(i=i||[]).push(c,s))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Qb=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ha(e,n){if(!Fn)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pt(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function qC(e,n,t){var r=n.pendingProps;switch(Mh(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(n),null;case 1:return Ft(n.type)&&Mc(),pt(n),null;case 3:return r=n.stateNode,ca(),Rn(Rt),Rn(yt),Vh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ns(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,kr!==null&&(ym(kr),kr=null))),dm(e,n),pt(n),null;case 5:Uh(n);var o=ni(Ml.current);if(t=n.type,e!==null&&n.stateNode!=null)qb(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(le(166));return pt(n),null}if(e=ni(jr.current),Ns(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Fr]=n,r[Rl]=i,e=(n.mode&1)!==0,t){case"dialog":Nn("cancel",r),Nn("close",r);break;case"iframe":case"object":case"embed":Nn("load",r);break;case"video":case"audio":for(o=0;o<rl.length;o++)Nn(rl[o],r);break;case"source":Nn("error",r);break;case"img":case"image":case"link":Nn("error",r),Nn("load",r);break;case"details":Nn("toggle",r);break;case"input":s0(r,i),Nn("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Nn("invalid",r);break;case"textarea":u0(r,i),Nn("invalid",r)}Df(t,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ps(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ps(r.textContent,l,e),o=["children",""+l]):kl.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Nn("scroll",r)}switch(t){case"input":ks(r),c0(r,i,!0);break;case"textarea":ks(r),d0(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Fc)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xv(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[Fr]=n,e[Rl]=r,Kb(e,n,!1,!1),n.stateNode=e;e:{switch(a=$f(t,r),t){case"dialog":Nn("cancel",e),Nn("close",e),o=r;break;case"iframe":case"object":case"embed":Nn("load",e),o=r;break;case"video":case"audio":for(o=0;o<rl.length;o++)Nn(rl[o],e);o=r;break;case"source":Nn("error",e),o=r;break;case"img":case"image":case"link":Nn("error",e),Nn("load",e),o=r;break;case"details":Nn("toggle",e),o=r;break;case"input":s0(e,r),o=Rf(e,r),Nn("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Bn({},r,{value:void 0}),Nn("invalid",e);break;case"textarea":u0(e,r),o=Lf(e,r),Nn("invalid",e);break;default:o=r}Df(t,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Av(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Iv(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&El(e,s):typeof s=="number"&&El(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(kl.hasOwnProperty(i)?s!=null&&i==="onScroll"&&Nn("scroll",e):s!=null&&wh(e,i,s,a))}switch(t){case"input":ks(e),c0(e,r,!1);break;case"textarea":ks(e),d0(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ro(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qi(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Fc)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return pt(n),null;case 6:if(e&&n.stateNode!=null)Qb(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(le(166));if(t=ni(Ml.current),ni(jr.current),Ns(n)){if(r=n.stateNode,t=n.memoizedProps,r[Fr]=n,(i=r.nodeValue!==t)&&(e=Zt,e!==null))switch(e.tag){case 3:Ps(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ps(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Fr]=n,n.stateNode=r}return pt(n),null;case 13:if(Rn(jn),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Fn&&Xt!==null&&n.mode&1&&!(n.flags&128))pb(),la(),n.flags|=98560,i=!1;else if(i=Ns(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(le(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(le(317));i[Fr]=n}else la(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;pt(n),i=!1}else kr!==null&&(ym(kr),kr=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||jn.current&1?tt===0&&(tt=3):tp())),n.updateQueue!==null&&(n.flags|=4),pt(n),null);case 4:return ca(),dm(e,n),e===null&&Pl(n.stateNode.containerInfo),pt(n),null;case 10:return $h(n.type._context),pt(n),null;case 17:return Ft(n.type)&&Mc(),pt(n),null;case 19:if(Rn(jn),i=n.memoizedState,i===null)return pt(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)Ha(i,!1);else{if(tt!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Hc(e),a!==null){for(n.flags|=128,Ha(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return On(jn,jn.current&1|2),n.child}e=e.sibling}i.tail!==null&&Gn()>da&&(n.flags|=128,r=!0,Ha(i,!1),n.lanes=4194304)}else{if(!r)if(e=Hc(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ha(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Fn)return pt(n),null}else 2*Gn()-i.renderingStartTime>da&&t!==1073741824&&(n.flags|=128,r=!0,Ha(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Gn(),n.sibling=null,t=jn.current,On(jn,r?t&1|2:t&1),n):(pt(n),null);case 22:case 23:return np(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ut&1073741824&&(pt(n),n.subtreeFlags&6&&(n.flags|=8192)):pt(n),null;case 24:return null;case 25:return null}throw Error(le(156,n.tag))}function QC(e,n){switch(Mh(n),n.tag){case 1:return Ft(n.type)&&Mc(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ca(),Rn(Rt),Rn(yt),Vh(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Uh(n),null;case 13:if(Rn(jn),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(le(340));la()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Rn(jn),null;case 4:return ca(),null;case 10:return $h(n.type._context),null;case 22:case 23:return np(),null;case 24:return null;default:return null}}var Ms=!1,vt=!1,YC=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Xi(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Vn(e,n,r)}else t.current=null}function fm(e,n,t){try{t()}catch(r){Vn(e,n,r)}}var e2=!1;function JC(e,n){if(Kf=Pc,e=tb(),Rh(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,l=-1,s=-1,c=0,u=0,d=e,f=null;n:for(;;){for(var m;d!==t||o!==0&&d.nodeType!==3||(l=a+o),d!==i||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===e)break n;if(f===t&&++c===o&&(l=a),f===i&&++u===r&&(s=a),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(qf={focusedElem:e,selectionRange:t},Pc=!1,_e=n;_e!==null;)if(n=_e,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_e=e;else for(;_e!==null;){n=_e;try{var h=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var b=h.memoizedProps,k=h.memoizedState,g=n.stateNode,v=g.getSnapshotBeforeUpdate(n.elementType===n.type?b:yr(n.type,b),k);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(E){Vn(n,n.return,E)}if(e=n.sibling,e!==null){e.return=n.return,_e=e;break}_e=n.return}return h=e2,e2=!1,h}function fl(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&fm(n,t,i)}o=o.next}while(o!==r)}}function _u(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function mm(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Yb(e){var n=e.alternate;n!==null&&(e.alternate=null,Yb(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Fr],delete n[Rl],delete n[Jf],delete n[MC],delete n[LC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jb(e){return e.tag===5||e.tag===3||e.tag===4}function n2(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hm(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Fc));else if(r!==4&&(e=e.child,e!==null))for(hm(e,n,t),e=e.sibling;e!==null;)hm(e,n,t),e=e.sibling}function pm(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(pm(e,n,t),e=e.sibling;e!==null;)pm(e,n,t),e=e.sibling}var ct=null,wr=!1;function so(e,n,t){for(t=t.child;t!==null;)ey(e,n,t),t=t.sibling}function ey(e,n,t){if(Lr&&typeof Lr.onCommitFiberUnmount=="function")try{Lr.onCommitFiberUnmount(yu,t)}catch{}switch(t.tag){case 5:vt||Xi(t,n);case 6:var r=ct,o=wr;ct=null,so(e,n,t),ct=r,wr=o,ct!==null&&(wr?(e=ct,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ct.removeChild(t.stateNode));break;case 18:ct!==null&&(wr?(e=ct,t=t.stateNode,e.nodeType===8?Rd(e.parentNode,t):e.nodeType===1&&Rd(e,t),Al(e)):Rd(ct,t.stateNode));break;case 4:r=ct,o=wr,ct=t.stateNode.containerInfo,wr=!0,so(e,n,t),ct=r,wr=o;break;case 0:case 11:case 14:case 15:if(!vt&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&fm(t,n,a),o=o.next}while(o!==r)}so(e,n,t);break;case 1:if(!vt&&(Xi(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){Vn(t,n,l)}so(e,n,t);break;case 21:so(e,n,t);break;case 22:t.mode&1?(vt=(r=vt)||t.memoizedState!==null,so(e,n,t),vt=r):so(e,n,t);break;default:so(e,n,t)}}function t2(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new YC),n.forEach(function(r){var o=sS.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function vr(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:ct=l.stateNode,wr=!1;break e;case 3:ct=l.stateNode.containerInfo,wr=!0;break e;case 4:ct=l.stateNode.containerInfo,wr=!0;break e}l=l.return}if(ct===null)throw Error(le(160));ey(i,a,o),ct=null,wr=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){Vn(o,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ny(n,e),n=n.sibling}function ny(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vr(n,e),Pr(e),r&4){try{fl(3,e,e.return),_u(3,e)}catch(b){Vn(e,e.return,b)}try{fl(5,e,e.return)}catch(b){Vn(e,e.return,b)}}break;case 1:vr(n,e),Pr(e),r&512&&t!==null&&Xi(t,t.return);break;case 5:if(vr(n,e),Pr(e),r&512&&t!==null&&Xi(t,t.return),e.flags&32){var o=e.stateNode;try{El(o,"")}catch(b){Vn(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&kv(o,i),$f(l,a);var c=$f(l,i);for(a=0;a<s.length;a+=2){var u=s[a],d=s[a+1];u==="style"?Av(o,d):u==="dangerouslySetInnerHTML"?Iv(o,d):u==="children"?El(o,d):wh(o,u,d,c)}switch(l){case"input":Ff(o,i);break;case"textarea":Ev(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Qi(o,!!i.multiple,m,!1):f!==!!i.multiple&&(i.defaultValue!=null?Qi(o,!!i.multiple,i.defaultValue,!0):Qi(o,!!i.multiple,i.multiple?[]:"",!1))}o[Rl]=i}catch(b){Vn(e,e.return,b)}}break;case 6:if(vr(n,e),Pr(e),r&4){if(e.stateNode===null)throw Error(le(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){Vn(e,e.return,b)}}break;case 3:if(vr(n,e),Pr(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Al(n.containerInfo)}catch(b){Vn(e,e.return,b)}break;case 4:vr(n,e),Pr(e);break;case 13:vr(n,e),Pr(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Jh=Gn())),r&4&&t2(e);break;case 22:if(u=t!==null&&t.memoizedState!==null,e.mode&1?(vt=(c=vt)||u,vr(n,e),vt=c):vr(n,e),Pr(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(_e=e,u=e.child;u!==null;){for(d=_e=u;_e!==null;){switch(f=_e,m=f.child,f.tag){case 0:case 11:case 14:case 15:fl(4,f,f.return);break;case 1:Xi(f,f.return);var h=f.stateNode;if(typeof h.componentWillUnmount=="function"){r=f,t=f.return;try{n=r,h.props=n.memoizedProps,h.state=n.memoizedState,h.componentWillUnmount()}catch(b){Vn(r,t,b)}}break;case 5:Xi(f,f.return);break;case 22:if(f.memoizedState!==null){o2(d);continue}}m!==null?(m.return=f,_e=m):o2(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{o=d.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=_v("display",a))}catch(b){Vn(e,e.return,b)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(b){Vn(e,e.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:vr(n,e),Pr(e),r&4&&t2(e);break;case 21:break;default:vr(n,e),Pr(e)}}function Pr(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Jb(t)){var r=t;break e}t=t.return}throw Error(le(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(El(o,""),r.flags&=-33);var i=n2(e);pm(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=n2(e);hm(e,l,a);break;default:throw Error(le(161))}}catch(s){Vn(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function eS(e,n,t){_e=e,ty(e)}function ty(e,n,t){for(var r=(e.mode&1)!==0;_e!==null;){var o=_e,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Ms;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||vt;l=Ms;var c=vt;if(Ms=a,(vt=s)&&!c)for(_e=o;_e!==null;)a=_e,s=a.child,a.tag===22&&a.memoizedState!==null?i2(o):s!==null?(s.return=a,_e=s):i2(o);for(;i!==null;)_e=i,ty(i),i=i.sibling;_e=o,Ms=l,vt=c}r2(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,_e=i):r2(e)}}function r2(e){for(;_e!==null;){var n=_e;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:vt||_u(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!vt)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:yr(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&z0(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}z0(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Al(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}vt||n.flags&512&&mm(n)}catch(f){Vn(n,n.return,f)}}if(n===e){_e=null;break}if(t=n.sibling,t!==null){t.return=n.return,_e=t;break}_e=n.return}}function o2(e){for(;_e!==null;){var n=_e;if(n===e){_e=null;break}var t=n.sibling;if(t!==null){t.return=n.return,_e=t;break}_e=n.return}}function i2(e){for(;_e!==null;){var n=_e;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{_u(4,n)}catch(s){Vn(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(s){Vn(n,o,s)}}var i=n.return;try{mm(n)}catch(s){Vn(n,i,s)}break;case 5:var a=n.return;try{mm(n)}catch(s){Vn(n,a,s)}}}catch(s){Vn(n,n.return,s)}if(n===e){_e=null;break}var l=n.sibling;if(l!==null){l.return=n.return,_e=l;break}_e=n.return}}var nS=Math.ceil,Wc=io.ReactCurrentDispatcher,Qh=io.ReactCurrentOwner,lr=io.ReactCurrentBatchConfig,bn=0,ot=null,Yn=null,ut=0,Ut=0,Gi=Lo(0),tt=0,$l=null,hi=0,Au=0,Yh=0,ml=null,Pt=null,Jh=0,da=1/0,Wr=null,Xc=!1,gm=null,To=null,Ls=!1,yo=null,Gc=0,hl=0,vm=null,lc=-1,sc=0;function xt(){return bn&6?Gn():lc!==-1?lc:lc=Gn()}function Oo(e){return e.mode&1?bn&2&&ut!==0?ut&-ut:DC.transition!==null?(sc===0&&(sc=Bv()),sc):(e=Cn,e!==0||(e=window.event,e=e===void 0?16:Gv(e.type)),e):1}function xr(e,n,t,r){if(50<hl)throw hl=0,vm=null,Error(le(185));ts(e,t,r),(!(bn&2)||e!==ot)&&(e===ot&&(!(bn&2)&&(Au|=t),tt===4&&vo(e,ut)),Mt(e,r),t===1&&bn===0&&!(n.mode&1)&&(da=Gn()+500,Eu&&jo()))}function Mt(e,n){var t=e.callbackNode;D6(e,n);var r=Oc(e,e===ot?ut:0);if(r===0)t!==null&&h0(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&h0(t),n===1)e.tag===0?jC(a2.bind(null,e)):fb(a2.bind(null,e)),RC(function(){!(bn&6)&&jo()}),t=null;else{switch(zv(r)){case 1:t=xh;break;case 4:t=Dv;break;case 16:t=Tc;break;case 536870912:t=$v;break;default:t=Tc}t=uy(t,ry.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function ry(e,n){if(lc=-1,sc=0,bn&6)throw Error(le(327));var t=e.callbackNode;if(ta()&&e.callbackNode!==t)return null;var r=Oc(e,e===ot?ut:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Zc(e,r);else{n=r;var o=bn;bn|=2;var i=iy();(ot!==e||ut!==n)&&(Wr=null,da=Gn()+500,ii(e,n));do try{oS();break}catch(l){oy(e,l)}while(!0);Dh(),Wc.current=i,bn=o,Yn!==null?n=0:(ot=null,ut=0,n=tt)}if(n!==0){if(n===2&&(o=Vf(e),o!==0&&(r=o,n=bm(e,o))),n===1)throw t=$l,ii(e,0),vo(e,r),Mt(e,Gn()),t;if(n===6)vo(e,r);else{if(o=e.current.alternate,!(r&30)&&!tS(o)&&(n=Zc(e,r),n===2&&(i=Vf(e),i!==0&&(r=i,n=bm(e,i))),n===1))throw t=$l,ii(e,0),vo(e,r),Mt(e,Gn()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(le(345));case 2:Zo(e,Pt,Wr);break;case 3:if(vo(e,r),(r&130023424)===r&&(n=Jh+500-Gn(),10<n)){if(Oc(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){xt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Yf(Zo.bind(null,e,Pt,Wr),n);break}Zo(e,Pt,Wr);break;case 4:if(vo(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var a=31-Er(r);i=1<<a,a=n[a],a>o&&(o=a),r&=~i}if(r=o,r=Gn()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nS(r/1960))-r,10<r){e.timeoutHandle=Yf(Zo.bind(null,e,Pt,Wr),r);break}Zo(e,Pt,Wr);break;case 5:Zo(e,Pt,Wr);break;default:throw Error(le(329))}}}return Mt(e,Gn()),e.callbackNode===t?ry.bind(null,e):null}function bm(e,n){var t=ml;return e.current.memoizedState.isDehydrated&&(ii(e,n).flags|=256),e=Zc(e,n),e!==2&&(n=Pt,Pt=t,n!==null&&ym(n)),e}function ym(e){Pt===null?Pt=e:Pt.push.apply(Pt,e)}function tS(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!Ar(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function vo(e,n){for(n&=~Yh,n&=~Au,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Er(n),r=1<<t;e[t]=-1,n&=~r}}function a2(e){if(bn&6)throw Error(le(327));ta();var n=Oc(e,0);if(!(n&1))return Mt(e,Gn()),null;var t=Zc(e,n);if(e.tag!==0&&t===2){var r=Vf(e);r!==0&&(n=r,t=bm(e,r))}if(t===1)throw t=$l,ii(e,0),vo(e,n),Mt(e,Gn()),t;if(t===6)throw Error(le(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Zo(e,Pt,Wr),Mt(e,Gn()),null}function ep(e,n){var t=bn;bn|=1;try{return e(n)}finally{bn=t,bn===0&&(da=Gn()+500,Eu&&jo())}}function pi(e){yo!==null&&yo.tag===0&&!(bn&6)&&ta();var n=bn;bn|=1;var t=lr.transition,r=Cn;try{if(lr.transition=null,Cn=1,e)return e()}finally{Cn=r,lr.transition=t,bn=n,!(bn&6)&&jo()}}function np(){Ut=Gi.current,Rn(Gi)}function ii(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,NC(t)),Yn!==null)for(t=Yn.return;t!==null;){var r=t;switch(Mh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Mc();break;case 3:ca(),Rn(Rt),Rn(yt),Vh();break;case 5:Uh(r);break;case 4:ca();break;case 13:Rn(jn);break;case 19:Rn(jn);break;case 10:$h(r.type._context);break;case 22:case 23:np()}t=t.return}if(ot=e,Yn=e=Po(e.current,null),ut=Ut=n,tt=0,$l=null,Yh=Au=hi=0,Pt=ml=null,ei!==null){for(n=0;n<ei.length;n++)if(t=ei[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}t.pending=r}ei=null}return e}function oy(e,n){do{var t=Yn;try{if(Dh(),oc.current=Vc,Uc){for(var r=Dn.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Uc=!1}if(mi=0,rt=nt=Dn=null,dl=!1,Ll=0,Qh.current=null,t===null||t.return===null){tt=1,$l=n,Yn=null;break}e:{var i=e,a=t.return,l=t,s=n;if(n=ut,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,u=l,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=G0(a);if(m!==null){m.flags&=-257,Z0(m,a,l,i,n),m.mode&1&&X0(i,c,n),n=m,s=c;var h=n.updateQueue;if(h===null){var b=new Set;b.add(s),n.updateQueue=b}else h.add(s);break e}else{if(!(n&1)){X0(i,c,n),tp();break e}s=Error(le(426))}}else if(Fn&&l.mode&1){var k=G0(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Z0(k,a,l,i,n),Lh(ua(s,l));break e}}i=s=ua(s,l),tt!==4&&(tt=2),ml===null?ml=[i]:ml.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var g=zb(i,s,n);B0(i,g);break e;case 1:l=s;var v=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(To===null||!To.has(y)))){i.flags|=65536,n&=-n,i.lanes|=n;var E=Hb(i,l,n);B0(i,E);break e}}i=i.return}while(i!==null)}ly(t)}catch(_){n=_,Yn===t&&t!==null&&(Yn=t=t.return);continue}break}while(!0)}function iy(){var e=Wc.current;return Wc.current=Vc,e===null?Vc:e}function tp(){(tt===0||tt===3||tt===2)&&(tt=4),ot===null||!(hi&268435455)&&!(Au&268435455)||vo(ot,ut)}function Zc(e,n){var t=bn;bn|=2;var r=iy();(ot!==e||ut!==n)&&(Wr=null,ii(e,n));do try{rS();break}catch(o){oy(e,o)}while(!0);if(Dh(),bn=t,Wc.current=r,Yn!==null)throw Error(le(261));return ot=null,ut=0,tt}function rS(){for(;Yn!==null;)ay(Yn)}function oS(){for(;Yn!==null&&!T6();)ay(Yn)}function ay(e){var n=cy(e.alternate,e,Ut);e.memoizedProps=e.pendingProps,n===null?ly(e):Yn=n,Qh.current=null}function ly(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=QC(t,n),t!==null){t.flags&=32767,Yn=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{tt=6,Yn=null;return}}else if(t=qC(t,n,Ut),t!==null){Yn=t;return}if(n=n.sibling,n!==null){Yn=n;return}Yn=n=e}while(n!==null);tt===0&&(tt=5)}function Zo(e,n,t){var r=Cn,o=lr.transition;try{lr.transition=null,Cn=1,iS(e,n,t,r)}finally{lr.transition=o,Cn=r}return null}function iS(e,n,t,r){do ta();while(yo!==null);if(bn&6)throw Error(le(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(le(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if($6(e,i),e===ot&&(Yn=ot=null,ut=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ls||(Ls=!0,uy(Tc,function(){return ta(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=lr.transition,lr.transition=null;var a=Cn;Cn=1;var l=bn;bn|=4,Qh.current=null,JC(e,t),ny(t,e),xC(qf),Pc=!!Kf,qf=Kf=null,e.current=t,eS(t),O6(),bn=l,Cn=a,lr.transition=i}else e.current=t;if(Ls&&(Ls=!1,yo=e,Gc=o),i=e.pendingLanes,i===0&&(To=null),R6(t.stateNode),Mt(e,Gn()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(Xc)throw Xc=!1,e=gm,gm=null,e;return Gc&1&&e.tag!==0&&ta(),i=e.pendingLanes,i&1?e===vm?hl++:(hl=0,vm=e):hl=0,jo(),null}function ta(){if(yo!==null){var e=zv(Gc),n=lr.transition,t=Cn;try{if(lr.transition=null,Cn=16>e?16:e,yo===null)var r=!1;else{if(e=yo,yo=null,Gc=0,bn&6)throw Error(le(331));var o=bn;for(bn|=4,_e=e.current;_e!==null;){var i=_e,a=i.child;if(_e.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(_e=c;_e!==null;){var u=_e;switch(u.tag){case 0:case 11:case 15:fl(8,u,i)}var d=u.child;if(d!==null)d.return=u,_e=d;else for(;_e!==null;){u=_e;var f=u.sibling,m=u.return;if(Yb(u),u===c){_e=null;break}if(f!==null){f.return=m,_e=f;break}_e=m}}}var h=i.alternate;if(h!==null){var b=h.child;if(b!==null){h.child=null;do{var k=b.sibling;b.sibling=null,b=k}while(b!==null)}}_e=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,_e=a;else e:for(;_e!==null;){if(i=_e,i.flags&2048)switch(i.tag){case 0:case 11:case 15:fl(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,_e=g;break e}_e=i.return}}var v=e.current;for(_e=v;_e!==null;){a=_e;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,_e=y;else e:for(a=v;_e!==null;){if(l=_e,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:_u(9,l)}}catch(_){Vn(l,l.return,_)}if(l===a){_e=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,_e=E;break e}_e=l.return}}if(bn=o,jo(),Lr&&typeof Lr.onPostCommitFiberRoot=="function")try{Lr.onPostCommitFiberRoot(yu,e)}catch{}r=!0}return r}finally{Cn=t,lr.transition=n}}return!1}function l2(e,n,t){n=ua(t,n),n=zb(e,n,1),e=Ao(e,n,1),n=xt(),e!==null&&(ts(e,1,n),Mt(e,n))}function Vn(e,n,t){if(e.tag===3)l2(e,e,t);else for(;n!==null;){if(n.tag===3){l2(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(To===null||!To.has(r))){e=ua(t,e),e=Hb(n,e,1),n=Ao(n,e,1),e=xt(),n!==null&&(ts(n,1,e),Mt(n,e));break}}n=n.return}}function aS(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=xt(),e.pingedLanes|=e.suspendedLanes&t,ot===e&&(ut&t)===t&&(tt===4||tt===3&&(ut&130023424)===ut&&500>Gn()-Jh?ii(e,0):Yh|=t),Mt(e,n)}function sy(e,n){n===0&&(e.mode&1?(n=Is,Is<<=1,!(Is&130023424)&&(Is=4194304)):n=1);var t=xt();e=no(e,n),e!==null&&(ts(e,n,t),Mt(e,t))}function lS(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),sy(e,t)}function sS(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(le(314))}r!==null&&r.delete(n),sy(e,t)}var cy;cy=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Rt.current)Nt=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Nt=!1,KC(e,n,t);Nt=!!(e.flags&131072)}else Nt=!1,Fn&&n.flags&1048576&&mb(n,Dc,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ac(e,n),e=n.pendingProps;var o=aa(n,yt.current);na(n,t),o=Xh(null,n,r,e,o,t);var i=Gh();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ft(r)?(i=!0,Lc(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,zh(n),o.updater=Iu,n.stateNode=o,o._reactInternals=n,im(n,r,e,t),n=sm(null,n,r,!0,i,t)):(n.tag=0,Fn&&i&&Fh(n),St(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ac(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=uS(r),e=yr(r,e),o){case 0:n=lm(null,n,r,e,t);break e;case 1:n=Q0(null,n,r,e,t);break e;case 11:n=K0(null,n,r,e,t);break e;case 14:n=q0(null,n,r,yr(r.type,e),t);break e}throw Error(le(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:yr(r,o),lm(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:yr(r,o),Q0(e,n,r,o,t);case 3:e:{if(Xb(n),e===null)throw Error(le(387));r=n.pendingProps,i=n.memoizedState,o=i.element,yb(e,n),zc(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=ua(Error(le(423)),n),n=Y0(e,n,r,t,o);break e}else if(r!==o){o=ua(Error(le(424)),n),n=Y0(e,n,r,t,o);break e}else for(Xt=_o(n.stateNode.containerInfo.firstChild),Zt=n,Fn=!0,kr=null,t=vb(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(la(),r===o){n=to(e,n,t);break e}St(e,n,r,t)}n=n.child}return n;case 5:return wb(n),e===null&&tm(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Qf(r,o)?a=null:i!==null&&Qf(r,i)&&(n.flags|=32),Wb(e,n),St(e,n,a,t),n.child;case 6:return e===null&&tm(n),null;case 13:return Gb(e,n,t);case 4:return Hh(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=sa(n,null,r,t):St(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:yr(r,o),K0(e,n,r,o,t);case 7:return St(e,n,n.pendingProps,t),n.child;case 8:return St(e,n,n.pendingProps.children,t),n.child;case 12:return St(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,a=o.value,On($c,r._currentValue),r._currentValue=a,i!==null)if(Ar(i.value,a)){if(i.children===o.children&&!Rt.current){n=to(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=qr(-1,t&-t),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?s.next=s:(s.next=u.next,u.next=s),c.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),rm(i.return,t,n),l.lanes|=t;break}s=s.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(le(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),rm(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}St(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,na(n,t),o=sr(o),r=r(o),n.flags|=1,St(e,n,r,t),n.child;case 14:return r=n.type,o=yr(r,n.pendingProps),o=yr(r.type,o),q0(e,n,r,o,t);case 15:return Ub(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:yr(r,o),ac(e,n),n.tag=1,Ft(r)?(e=!0,Lc(n)):e=!1,na(n,t),Bb(n,r,o),im(n,r,o,t),sm(null,n,r,!0,e,t);case 19:return Zb(e,n,t);case 22:return Vb(e,n,t)}throw Error(le(156,n.tag))};function uy(e,n){return jv(e,n)}function cS(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ar(e,n,t,r){return new cS(e,n,t,r)}function rp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function uS(e){if(typeof e=="function")return rp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Sh)return 11;if(e===kh)return 14}return 2}function Po(e,n){var t=e.alternate;return t===null?(t=ar(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function cc(e,n,t,r,o,i){var a=2;if(r=e,typeof e=="function")rp(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ji:return ai(t.children,o,i,n);case Ch:a=8,o|=8;break;case Tf:return e=ar(12,t,n,o|2),e.elementType=Tf,e.lanes=i,e;case Of:return e=ar(13,t,n,o),e.elementType=Of,e.lanes=i,e;case Pf:return e=ar(19,t,n,o),e.elementType=Pf,e.lanes=i,e;case wv:return Tu(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bv:a=10;break e;case yv:a=9;break e;case Sh:a=11;break e;case kh:a=14;break e;case ho:a=16,r=null;break e}throw Error(le(130,e==null?e:typeof e,""))}return n=ar(a,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function ai(e,n,t,r){return e=ar(7,e,r,n),e.lanes=t,e}function Tu(e,n,t,r){return e=ar(22,e,r,n),e.elementType=wv,e.lanes=t,e.stateNode={isHidden:!1},e}function zd(e,n,t){return e=ar(6,e,null,n),e.lanes=t,e}function Hd(e,n,t){return n=ar(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function dS(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sd(0),this.expirationTimes=Sd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sd(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function op(e,n,t,r,o,i,a,l,s){return e=new dS(e,n,t,l,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=ar(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},zh(i),e}function fS(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Li,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function dy(e){if(!e)return Fo;e=e._reactInternals;e:{if(yi(e)!==e||e.tag!==1)throw Error(le(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ft(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(le(171))}if(e.tag===1){var t=e.type;if(Ft(t))return db(e,t,n)}return n}function fy(e,n,t,r,o,i,a,l,s){return e=op(t,r,!0,e,o,i,a,l,s),e.context=dy(null),t=e.current,r=xt(),o=Oo(t),i=qr(r,o),i.callback=n??null,Ao(t,i,o),e.current.lanes=o,ts(e,o,r),Mt(e,r),e}function Ou(e,n,t,r){var o=n.current,i=xt(),a=Oo(o);return t=dy(t),n.context===null?n.context=t:n.pendingContext=t,n=qr(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Ao(o,n,a),e!==null&&(xr(e,o,a,i),rc(e,o,a)),a}function Kc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function s2(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ip(e,n){s2(e,n),(e=e.alternate)&&s2(e,n)}function mS(){return null}var my=typeof reportError=="function"?reportError:function(e){console.error(e)};function ap(e){this._internalRoot=e}Pu.prototype.render=ap.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(le(409));Ou(e,n,null,null)};Pu.prototype.unmount=ap.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;pi(function(){Ou(null,e,null,null)}),n[eo]=null}};function Pu(e){this._internalRoot=e}Pu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vv();e={blockedOn:null,target:e,priority:n};for(var t=0;t<go.length&&n!==0&&n<go[t].priority;t++);go.splice(t,0,e),t===0&&Xv(e)}};function lp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Nu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function c2(){}function hS(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Kc(a);i.call(c)}}var a=fy(n,r,e,0,null,!1,!1,"",c2);return e._reactRootContainer=a,e[eo]=a.current,Pl(e.nodeType===8?e.parentNode:e),pi(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=Kc(s);l.call(c)}}var s=op(e,0,!1,null,null,!1,!1,"",c2);return e._reactRootContainer=s,e[eo]=s.current,Pl(e.nodeType===8?e.parentNode:e),pi(function(){Ou(n,s,t,r)}),s}function Ru(e,n,t,r,o){var i=t._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=Kc(a);l.call(s)}}Ou(n,a,e,o)}else a=hS(t,n,e,o,r);return Kc(a)}Hv=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=tl(n.pendingLanes);t!==0&&(Ih(n,t|1),Mt(n,Gn()),!(bn&6)&&(da=Gn()+500,jo()))}break;case 13:pi(function(){var r=no(e,1);if(r!==null){var o=xt();xr(r,e,1,o)}}),ip(e,1)}};_h=function(e){if(e.tag===13){var n=no(e,134217728);if(n!==null){var t=xt();xr(n,e,134217728,t)}ip(e,134217728)}};Uv=function(e){if(e.tag===13){var n=Oo(e),t=no(e,n);if(t!==null){var r=xt();xr(t,e,n,r)}ip(e,n)}};Vv=function(){return Cn};Wv=function(e,n){var t=Cn;try{return Cn=e,n()}finally{Cn=t}};zf=function(e,n,t){switch(n){case"input":if(Ff(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=ku(r);if(!o)throw Error(le(90));Sv(r),Ff(r,o)}}}break;case"textarea":Ev(e,t);break;case"select":n=t.value,n!=null&&Qi(e,!!t.multiple,n,!1)}};Pv=ep;Nv=pi;var pS={usingClientEntryPoint:!1,Events:[os,zi,ku,Tv,Ov,ep]},Ua={findFiberByHostInstance:Jo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gS={bundleType:Ua.bundleType,version:Ua.version,rendererPackageName:Ua.rendererPackageName,rendererConfig:Ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:io.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mv(e),e===null?null:e.stateNode},findFiberByHostInstance:Ua.findFiberByHostInstance||mS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var js=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!js.isDisabled&&js.supportsFiber)try{yu=js.inject(gS),Lr=js}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pS;Yt.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lp(n))throw Error(le(200));return fS(e,n,null,t)};Yt.createRoot=function(e,n){if(!lp(e))throw Error(le(299));var t=!1,r="",o=my;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=op(e,1,!1,null,null,t,!1,r,o),e[eo]=n.current,Pl(e.nodeType===8?e.parentNode:e),new ap(n)};Yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(le(188)):(e=Object.keys(e).join(","),Error(le(268,e)));return e=Mv(n),e=e===null?null:e.stateNode,e};Yt.flushSync=function(e){return pi(e)};Yt.hydrate=function(e,n,t){if(!Nu(n))throw Error(le(200));return Ru(null,e,n,!0,t)};Yt.hydrateRoot=function(e,n,t){if(!lp(e))throw Error(le(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",a=my;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=fy(n,null,e,1,t??null,o,!1,i,a),e[eo]=n.current,Pl(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Pu(n)};Yt.render=function(e,n,t){if(!Nu(n))throw Error(le(200));return Ru(null,e,n,!1,t)};Yt.unmountComponentAtNode=function(e){if(!Nu(e))throw Error(le(40));return e._reactRootContainer?(pi(function(){Ru(null,null,e,!1,function(){e._reactRootContainer=null,e[eo]=null})}),!0):!1};Yt.unstable_batchedUpdates=ep;Yt.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Nu(t))throw Error(le(200));if(e==null||e._reactInternals===void 0)throw Error(le(38));return Ru(e,n,t,!1,r)};Yt.version="18.3.1-next-f1338f8080-20240426";function hy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hy)}catch(e){console.error(e)}}hy(),hv.exports=Yt;var Ca=hv.exports;const wm=Jl(Ca),py=nv({__proto__:null,default:wm},[Ca]);var u2=Ca;_f.createRoot=u2.createRoot,_f.hydrateRoot=u2.hydrateRoot;/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ln(){return Ln=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ln.apply(this,arguments)}var qn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(qn||(qn={}));const d2="popstate";function vS(e){e===void 0&&(e={});function n(r,o){let{pathname:i,search:a,hash:l}=r.location;return Bl("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:as(o)}return yS(n,t,null,e)}function fn(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function fa(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function bS(){return Math.random().toString(36).substr(2,8)}function f2(e,n){return{usr:e.state,key:e.key,idx:n}}function Bl(e,n,t,r){return t===void 0&&(t=null),Ln({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Do(n):n,{state:t,key:n&&n.key||r||bS()})}function as(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Do(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function yS(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=qn.Pop,s=null,c=u();c==null&&(c=0,a.replaceState(Ln({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function d(){l=qn.Pop;let k=u(),g=k==null?null:k-c;c=k,s&&s({action:l,location:b.location,delta:g})}function f(k,g){l=qn.Push;let v=Bl(b.location,k,g);c=u()+1;let y=f2(v,c),E=b.createHref(v);try{a.pushState(y,"",E)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;o.location.assign(E)}i&&s&&s({action:l,location:b.location,delta:1})}function m(k,g){l=qn.Replace;let v=Bl(b.location,k,g);c=u();let y=f2(v,c),E=b.createHref(v);a.replaceState(y,"",E),i&&s&&s({action:l,location:b.location,delta:0})}function h(k){let g=o.location.origin!=="null"?o.location.origin:o.location.href,v=typeof k=="string"?k:as(k);return v=v.replace(/ $/,"%20"),fn(g,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,g)}let b={get action(){return l},get location(){return e(o,a)},listen(k){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(d2,d),s=k,()=>{o.removeEventListener(d2,d),s=null}},createHref(k){return n(o,k)},createURL:h,encodeLocation(k){let g=h(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:m,go(k){return a.go(k)}};return b}var Tn;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Tn||(Tn={}));const wS=new Set(["lazy","caseSensitive","path","id","index","children"]);function CS(e){return e.index===!0}function zl(e,n,t,r){return t===void 0&&(t=[]),r===void 0&&(r={}),e.map((o,i)=>{let a=[...t,String(i)],l=typeof o.id=="string"?o.id:a.join("-");if(fn(o.index!==!0||!o.children,"Cannot specify children on an index route"),fn(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),CS(o)){let s=Ln({},o,n(o),{id:l});return r[l]=s,s}else{let s=Ln({},o,n(o),{id:l,children:void 0});return r[l]=s,o.children&&(s.children=zl(o.children,n,a,r)),s}})}function qo(e,n,t){return t===void 0&&(t="/"),uc(e,n,t,!1)}function uc(e,n,t,r){let o=typeof n=="string"?Do(n):n,i=ls(o.pathname||"/",t);if(i==null)return null;let a=gy(e);kS(a);let l=null;for(let s=0;l==null&&s<a.length;++s){let c=FS(i);l=NS(a[s],c,r)}return l}function SS(e,n){let{route:t,pathname:r,params:o}=e;return{id:t.id,pathname:r,params:o,data:n[t.id],handle:t.handle}}function gy(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(fn(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=No([r,s.relativePath]),u=t.concat(s);i.children&&i.children.length>0&&(fn(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),gy(i.children,n,u,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:OS(c,i.index),routesMeta:u})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of vy(i.path))o(i,a,s)}),n}function vy(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=vy(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function kS(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:PS(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const ES=/^:[\w-]+$/,xS=3,IS=2,_S=1,AS=10,TS=-2,m2=e=>e==="*";function OS(e,n){let t=e.split("/"),r=t.length;return t.some(m2)&&(r+=TS),n&&(r+=IS),t.filter(o=>!m2(o)).reduce((o,i)=>o+(ES.test(i)?xS:i===""?_S:AS),r)}function PS(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function NS(e,n,t){t===void 0&&(t=!1);let{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let s=r[l],c=l===r.length-1,u=i==="/"?n:n.slice(i.length)||"/",d=h2({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},u),f=s.route;if(!d&&c&&t&&!r[r.length-1].route.index&&(d=h2({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},u)),!d)return null;Object.assign(o,d.params),a.push({params:o,pathname:No([i,d.pathname]),pathnameBase:jS(No([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=No([i,d.pathnameBase]))}return a}function h2(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=RS(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((c,u,d)=>{let{paramName:f,isOptional:m}=u;if(f==="*"){let b=l[d]||"";a=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const h=l[d];return m&&!h?c[f]=void 0:c[f]=(h||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:a,pattern:e}}function RS(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),fa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function FS(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return fa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function ls(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function MS(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?Do(e):e;return{pathname:t?t.startsWith("/")?t:LS(t,n):n,search:DS(r),hash:$S(o)}}function LS(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Ud(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function by(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function yy(e,n){let t=by(e);return n?t.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function wy(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Do(e):(o=Ln({},e),fn(!o.pathname||!o.pathname.includes("?"),Ud("?","pathname","search",o)),fn(!o.pathname||!o.pathname.includes("#"),Ud("#","pathname","hash",o)),fn(!o.search||!o.search.includes("#"),Ud("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=t;else{let d=n.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;o.pathname=f.join("/")}l=d>=0?n[d]:"/"}let s=MS(o,l),c=a&&a!=="/"&&a.endsWith("/"),u=(i||a===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(c||u)&&(s.pathname+="/"),s}const No=e=>e.join("/").replace(/\/\/+/g,"/"),jS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),DS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$S=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class sp{constructor(n,t,r,o){o===void 0&&(o=!1),this.status=n,this.statusText=t||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Fu(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Cy=["post","put","patch","delete"],BS=new Set(Cy),zS=["get",...Cy],HS=new Set(zS),US=new Set([301,302,303,307,308]),VS=new Set([307,308]),Vd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},WS={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Va={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},cp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,XS=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Sy="remix-router-transitions";function GS(e){const n=e.window?e.window:typeof window<"u"?window:void 0,t=typeof n<"u"&&typeof n.document<"u"&&typeof n.document.createElement<"u",r=!t;fn(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let P=e.detectErrorBoundary;o=D=>({hasErrorBoundary:P(D)})}else o=XS;let i={},a=zl(e.routes,o,void 0,i),l,s=e.basename||"/",c=e.unstable_dataStrategy||YS,u=e.unstable_patchRoutesOnMiss,d=Ln({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},e.future),f=null,m=new Set,h=null,b=null,k=null,g=e.hydrationData!=null,v=qo(a,e.history.location,s),y=null;if(v==null&&!u){let P=Ct(404,{pathname:e.history.location.pathname}),{matches:D,route:X}=E2(a);v=D,y={[X.id]:P}}let E;if(!v)E=!1,v=[];else if(v.some(P=>P.route.lazy))E=!1;else if(!v.some(P=>P.route.loader))E=!0;else if(d.v7_partialHydration){let P=e.hydrationData?e.hydrationData.loaderData:null,D=e.hydrationData?e.hydrationData.errors:null,X=J=>J.route.loader?typeof J.route.loader=="function"&&J.route.loader.hydrate===!0?!1:P&&P[J.route.id]!==void 0||D&&D[J.route.id]!==void 0:!0;if(D){let J=v.findIndex(fe=>D[fe.route.id]!==void 0);E=v.slice(0,J+1).every(X)}else E=v.every(X)}else E=e.hydrationData!=null;let _,w={historyAction:e.history.action,location:e.history.location,matches:v,initialized:E,navigation:Vd,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||y,fetchers:new Map,blockers:new Map},A=qn.Pop,N=!1,R,V=!1,$=new Map,z=null,j=!1,H=!1,Z=[],B=[],F=new Map,O=0,W=-1,S=new Map,G=new Set,U=new Map,I=new Map,Q=new Set,oe=new Map,L=new Map,he=new Map,Y=!1;function Oe(){if(f=e.history.listen(P=>{let{action:D,location:X,delta:J}=P;if(Y){Y=!1;return}fa(L.size===0||J!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let fe=tn({currentLocation:w.location,nextLocation:X,historyAction:D});if(fe&&J!=null){Y=!0,e.history.go(J*-1),Xe(fe,{state:"blocked",location:X,proceed(){Xe(fe,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),e.history.go(J)},reset(){let ve=new Map(w.blockers);ve.set(fe,Va),me({blockers:ve})}});return}return Se(D,X)}),t){d5(n,$);let P=()=>f5(n,$);n.addEventListener("pagehide",P),z=()=>n.removeEventListener("pagehide",P)}return w.initialized||Se(qn.Pop,w.location,{initialHydration:!0}),_}function be(){f&&f(),z&&z(),m.clear(),R&&R.abort(),w.fetchers.forEach((P,D)=>q(D)),w.blockers.forEach((P,D)=>we(D))}function Ce(P){return m.add(P),()=>m.delete(P)}function me(P,D){D===void 0&&(D={}),w=Ln({},w,P);let X=[],J=[];d.v7_fetcherPersist&&w.fetchers.forEach((fe,ve)=>{fe.state==="idle"&&(Q.has(ve)?J.push(ve):X.push(ve))}),[...m].forEach(fe=>fe(w,{deletedFetchers:J,unstable_viewTransitionOpts:D.viewTransitionOpts,unstable_flushSync:D.flushSync===!0})),d.v7_fetcherPersist&&(X.forEach(fe=>w.fetchers.delete(fe)),J.forEach(fe=>q(fe)))}function en(P,D,X){var J,fe;let{flushSync:ve}=X===void 0?{}:X,Ie=w.actionData!=null&&w.navigation.formMethod!=null&&Cr(w.navigation.formMethod)&&w.navigation.state==="loading"&&((J=P.state)==null?void 0:J._isRedirect)!==!0,ie;D.actionData?Object.keys(D.actionData).length>0?ie=D.actionData:ie=null:Ie?ie=w.actionData:ie=null;let Be=D.loaderData?S2(w.loaderData,D.loaderData,D.matches||[],D.errors):w.loaderData,se=w.blockers;se.size>0&&(se=new Map(se),se.forEach((ln,un)=>se.set(un,Va)));let je=N===!0||w.navigation.formMethod!=null&&Cr(w.navigation.formMethod)&&((fe=P.state)==null?void 0:fe._isRedirect)!==!0;l&&(a=l,l=void 0),j||A===qn.Pop||(A===qn.Push?e.history.push(P,P.state):A===qn.Replace&&e.history.replace(P,P.state));let cn;if(A===qn.Pop){let ln=$.get(w.location.pathname);ln&&ln.has(P.pathname)?cn={currentLocation:w.location,nextLocation:P}:$.has(P.pathname)&&(cn={currentLocation:P,nextLocation:w.location})}else if(V){let ln=$.get(w.location.pathname);ln?ln.add(P.pathname):(ln=new Set([P.pathname]),$.set(w.location.pathname,ln)),cn={currentLocation:w.location,nextLocation:P}}me(Ln({},D,{actionData:ie,loaderData:Be,historyAction:A,location:P,initialized:!0,navigation:Vd,revalidation:"idle",restoreScrollPosition:Re(P,D.matches||w.matches),preventScrollReset:je,blockers:se}),{viewTransitionOpts:cn,flushSync:ve===!0}),A=qn.Pop,N=!1,V=!1,j=!1,H=!1,Z=[],B=[]}async function Ze(P,D){if(typeof P=="number"){e.history.go(P);return}let X=Cm(w.location,w.matches,s,d.v7_prependBasename,P,d.v7_relativeSplatPath,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:J,submission:fe,error:ve}=p2(d.v7_normalizeFormMethod,!1,X,D),Ie=w.location,ie=Bl(w.location,J,D&&D.state);ie=Ln({},ie,e.history.encodeLocation(ie));let Be=D&&D.replace!=null?D.replace:void 0,se=qn.Push;Be===!0?se=qn.Replace:Be===!1||fe!=null&&Cr(fe.formMethod)&&fe.formAction===w.location.pathname+w.location.search&&(se=qn.Replace);let je=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,cn=(D&&D.unstable_flushSync)===!0,ln=tn({currentLocation:Ie,nextLocation:ie,historyAction:se});if(ln){Xe(ln,{state:"blocked",location:ie,proceed(){Xe(ln,{state:"proceeding",proceed:void 0,reset:void 0,location:ie}),Ze(P,D)},reset(){let un=new Map(w.blockers);un.set(ln,Va),me({blockers:un})}});return}return await Se(se,ie,{submission:fe,pendingError:ve,preventScrollReset:je,replace:D&&D.replace,enableViewTransition:D&&D.unstable_viewTransition,flushSync:cn})}function Ee(){if(x(),me({revalidation:"loading"}),w.navigation.state!=="submitting"){if(w.navigation.state==="idle"){Se(w.historyAction,w.location,{startUninterruptedRevalidation:!0});return}Se(A||w.historyAction,w.navigation.location,{overrideNavigation:w.navigation})}}async function Se(P,D,X){R&&R.abort(),R=null,A=P,j=(X&&X.startUninterruptedRevalidation)===!0,We(w.location,w.matches),N=(X&&X.preventScrollReset)===!0,V=(X&&X.enableViewTransition)===!0;let J=l||a,fe=X&&X.overrideNavigation,ve=qo(J,D,s),Ie=(X&&X.flushSync)===!0,ie=ye(ve,J,D.pathname);if(ie.active&&ie.matches&&(ve=ie.matches),!ve){let{error:dn,notFoundMatches:In,route:yn}=He(D.pathname);en(D,{matches:In,loaderData:{},errors:{[yn.id]:dn}},{flushSync:Ie});return}if(w.initialized&&!H&&o5(w.location,D)&&!(X&&X.submission&&Cr(X.submission.formMethod))){en(D,{matches:ve},{flushSync:Ie});return}R=new AbortController;let Be=Ai(e.history,D,R.signal,X&&X.submission),se;if(X&&X.pendingError)se=[pl(ve).route.id,{type:Tn.error,error:X.pendingError}];else if(X&&X.submission&&Cr(X.submission.formMethod)){let dn=await xe(Be,D,X.submission,ve,ie.active,{replace:X.replace,flushSync:Ie});if(dn.shortCircuited)return;if(dn.pendingActionResult){let[In,yn]=dn.pendingActionResult;if(Vt(yn)&&Fu(yn.error)&&yn.error.status===404){R=null,en(D,{matches:dn.matches,loaderData:{},errors:{[In]:yn.error}});return}}ve=dn.matches||ve,se=dn.pendingActionResult,fe=Wd(D,X.submission),Ie=!1,ie.active=!1,Be=Ai(e.history,Be.url,Be.signal)}let{shortCircuited:je,matches:cn,loaderData:ln,errors:un}=await Pe(Be,D,ve,ie.active,fe,X&&X.submission,X&&X.fetcherSubmission,X&&X.replace,X&&X.initialHydration===!0,Ie,se);je||(R=null,en(D,Ln({matches:cn||ve},k2(se),{loaderData:ln,errors:un})))}async function xe(P,D,X,J,fe,ve){ve===void 0&&(ve={}),x();let Ie=c5(D,X);if(me({navigation:Ie},{flushSync:ve.flushSync===!0}),fe){let se=await Ae(J,D.pathname,P.signal);if(se.type==="aborted")return{shortCircuited:!0};if(se.type==="error"){let{error:je,notFoundMatches:cn,route:ln}=sn(D.pathname,se);return{matches:cn,pendingActionResult:[ln.id,{type:Tn.error,error:je}]}}else if(se.matches)J=se.matches;else{let{notFoundMatches:je,error:cn,route:ln}=He(D.pathname);return{matches:je,pendingActionResult:[ln.id,{type:Tn.error,error:cn}]}}}let ie,Be=ol(J,D);if(!Be.route.action&&!Be.route.lazy)ie={type:Tn.error,error:Ct(405,{method:P.method,pathname:D.pathname,routeId:Be.route.id})};else if(ie=(await Ne("action",P,[Be],J))[0],P.signal.aborted)return{shortCircuited:!0};if(ri(ie)){let se;return ve&&ve.replace!=null?se=ve.replace:se=y2(ie.response.headers.get("Location"),new URL(P.url),s)===w.location.pathname+w.location.search,await te(P,ie,{submission:X,replace:se}),{shortCircuited:!0}}if(ti(ie))throw Ct(400,{type:"defer-action"});if(Vt(ie)){let se=pl(J,Be.route.id);return(ve&&ve.replace)!==!0&&(A=qn.Push),{matches:J,pendingActionResult:[se.route.id,ie]}}return{matches:J,pendingActionResult:[Be.route.id,ie]}}async function Pe(P,D,X,J,fe,ve,Ie,ie,Be,se,je){let cn=fe||Wd(D,ve),ln=ve||Ie||_2(cn),un=!j&&(!d.v7_partialHydration||!Be);if(J){if(un){let hn=$e(je);me(Ln({navigation:cn},hn!==void 0?{actionData:hn}:{}),{flushSync:se})}let nn=await Ae(X,D.pathname,P.signal);if(nn.type==="aborted")return{shortCircuited:!0};if(nn.type==="error"){let{error:hn,notFoundMatches:kn,route:gn}=sn(D.pathname,nn);return{matches:kn,loaderData:{},errors:{[gn.id]:hn}}}else if(nn.matches)X=nn.matches;else{let{error:hn,notFoundMatches:kn,route:gn}=He(D.pathname);return{matches:kn,loaderData:{},errors:{[gn.id]:hn}}}}let dn=l||a,[In,yn]=g2(e.history,w,X,ln,D,d.v7_partialHydration&&Be===!0,d.unstable_skipActionErrorRevalidation,H,Z,B,Q,U,G,dn,s,je);if(an(nn=>!(X&&X.some(hn=>hn.route.id===nn))||In&&In.some(hn=>hn.route.id===nn)),W=++O,In.length===0&&yn.length===0){let nn=ae();return en(D,Ln({matches:X,loaderData:{},errors:je&&Vt(je[1])?{[je[0]]:je[1].error}:null},k2(je),nn?{fetchers:new Map(w.fetchers)}:{}),{flushSync:se}),{shortCircuited:!0}}if(un){let nn={};if(!J){nn.navigation=cn;let hn=$e(je);hn!==void 0&&(nn.actionData=hn)}yn.length>0&&(nn.fetchers=Fe(yn)),me(nn,{flushSync:se})}yn.forEach(nn=>{F.has(nn.key)&&ne(nn.key),nn.controller&&F.set(nn.key,nn.controller)});let zn=()=>yn.forEach(nn=>ne(nn.key));R&&R.signal.addEventListener("abort",zn);let{loaderResults:At,fetcherResults:jt}=await C(w.matches,X,In,yn,P);if(P.signal.aborted)return{shortCircuited:!0};R&&R.signal.removeEventListener("abort",zn),yn.forEach(nn=>F.delete(nn.key));let Dt=x2([...At,...jt]);if(Dt){if(Dt.idx>=In.length){let nn=yn[Dt.idx-In.length].key;G.add(nn)}return await te(P,Dt.result,{replace:ie}),{shortCircuited:!0}}let{loaderData:at,errors:Xn}=C2(w,X,In,At,je,yn,jt,oe);oe.forEach((nn,hn)=>{nn.subscribe(kn=>{(kn||nn.done)&&oe.delete(hn)})}),d.v7_partialHydration&&Be&&w.errors&&Object.entries(w.errors).filter(nn=>{let[hn]=nn;return!In.some(kn=>kn.route.id===hn)}).forEach(nn=>{let[hn,kn]=nn;Xn=Object.assign(Xn||{},{[hn]:kn})});let er=ae(),Tt=ge(W),pr=er||Tt||yn.length>0;return Ln({matches:X,loaderData:at,errors:Xn},pr?{fetchers:new Map(w.fetchers)}:{})}function $e(P){if(P&&!Vt(P[1]))return{[P[0]]:P[1].data};if(w.actionData)return Object.keys(w.actionData).length===0?null:w.actionData}function Fe(P){return P.forEach(D=>{let X=w.fetchers.get(D.key),J=Wa(void 0,X?X.data:void 0);w.fetchers.set(D.key,J)}),new Map(w.fetchers)}function Ue(P,D,X,J){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");F.has(P)&&ne(P);let fe=(J&&J.unstable_flushSync)===!0,ve=l||a,Ie=Cm(w.location,w.matches,s,d.v7_prependBasename,X,d.v7_relativeSplatPath,D,J==null?void 0:J.relative),ie=qo(ve,Ie,s),Be=ye(ie,ve,Ie);if(Be.active&&Be.matches&&(ie=Be.matches),!ie){M(P,D,Ct(404,{pathname:Ie}),{flushSync:fe});return}let{path:se,submission:je,error:cn}=p2(d.v7_normalizeFormMethod,!0,Ie,J);if(cn){M(P,D,cn,{flushSync:fe});return}let ln=ol(ie,se);if(N=(J&&J.preventScrollReset)===!0,je&&Cr(je.formMethod)){rn(P,D,se,ln,ie,Be.active,fe,je);return}U.set(P,{routeId:D,path:se}),Me(P,D,se,ln,ie,Be.active,fe,je)}async function rn(P,D,X,J,fe,ve,Ie,ie){x(),U.delete(P);function Be(gn){if(!gn.route.action&&!gn.route.lazy){let mt=Ct(405,{method:ie.formMethod,pathname:X,routeId:D});return M(P,D,mt,{flushSync:Ie}),!0}return!1}if(!ve&&Be(J))return;let se=w.fetchers.get(P);T(P,u5(ie,se),{flushSync:Ie});let je=new AbortController,cn=Ai(e.history,X,je.signal,ie);if(ve){let gn=await Ae(fe,X,cn.signal);if(gn.type==="aborted")return;if(gn.type==="error"){let{error:mt}=sn(X,gn);M(P,D,mt,{flushSync:Ie});return}else if(gn.matches){if(fe=gn.matches,J=ol(fe,X),Be(J))return}else{M(P,D,Ct(404,{pathname:X}),{flushSync:Ie});return}}F.set(P,je);let ln=O,dn=(await Ne("action",cn,[J],fe))[0];if(cn.signal.aborted){F.get(P)===je&&F.delete(P);return}if(d.v7_fetcherPersist&&Q.has(P)){if(ri(dn)||Vt(dn)){T(P,fo(void 0));return}}else{if(ri(dn))if(F.delete(P),W>ln){T(P,fo(void 0));return}else return G.add(P),T(P,Wa(ie)),te(cn,dn,{fetcherSubmission:ie});if(Vt(dn)){M(P,D,dn.error);return}}if(ti(dn))throw Ct(400,{type:"defer-action"});let In=w.navigation.location||w.location,yn=Ai(e.history,In,je.signal),zn=l||a,At=w.navigation.state!=="idle"?qo(zn,w.navigation.location,s):w.matches;fn(At,"Didn't find any matches after fetcher action");let jt=++O;S.set(P,jt);let Dt=Wa(ie,dn.data);w.fetchers.set(P,Dt);let[at,Xn]=g2(e.history,w,At,ie,In,!1,d.unstable_skipActionErrorRevalidation,H,Z,B,Q,U,G,zn,s,[J.route.id,dn]);Xn.filter(gn=>gn.key!==P).forEach(gn=>{let mt=gn.key,$t=w.fetchers.get(mt),nr=Wa(void 0,$t?$t.data:void 0);w.fetchers.set(mt,nr),F.has(mt)&&ne(mt),gn.controller&&F.set(mt,gn.controller)}),me({fetchers:new Map(w.fetchers)});let er=()=>Xn.forEach(gn=>ne(gn.key));je.signal.addEventListener("abort",er);let{loaderResults:Tt,fetcherResults:pr}=await C(w.matches,At,at,Xn,yn);if(je.signal.aborted)return;je.signal.removeEventListener("abort",er),S.delete(P),F.delete(P),Xn.forEach(gn=>F.delete(gn.key));let nn=x2([...Tt,...pr]);if(nn){if(nn.idx>=at.length){let gn=Xn[nn.idx-at.length].key;G.add(gn)}return te(yn,nn.result)}let{loaderData:hn,errors:kn}=C2(w,w.matches,at,Tt,void 0,Xn,pr,oe);if(w.fetchers.has(P)){let gn=fo(dn.data);w.fetchers.set(P,gn)}ge(jt),w.navigation.state==="loading"&&jt>W?(fn(A,"Expected pending action"),R&&R.abort(),en(w.navigation.location,{matches:At,loaderData:hn,errors:kn,fetchers:new Map(w.fetchers)})):(me({errors:kn,loaderData:S2(w.loaderData,hn,At,kn),fetchers:new Map(w.fetchers)}),H=!1)}async function Me(P,D,X,J,fe,ve,Ie,ie){let Be=w.fetchers.get(P);T(P,Wa(ie,Be?Be.data:void 0),{flushSync:Ie});let se=new AbortController,je=Ai(e.history,X,se.signal);if(ve){let dn=await Ae(fe,X,je.signal);if(dn.type==="aborted")return;if(dn.type==="error"){let{error:In}=sn(X,dn);M(P,D,In,{flushSync:Ie});return}else if(dn.matches)fe=dn.matches,J=ol(fe,X);else{M(P,D,Ct(404,{pathname:X}),{flushSync:Ie});return}}F.set(P,se);let cn=O,un=(await Ne("loader",je,[J],fe))[0];if(ti(un)&&(un=await _y(un,je.signal,!0)||un),F.get(P)===se&&F.delete(P),!je.signal.aborted){if(Q.has(P)){T(P,fo(void 0));return}if(ri(un))if(W>cn){T(P,fo(void 0));return}else{G.add(P),await te(je,un);return}if(Vt(un)){M(P,D,un.error);return}fn(!ti(un),"Unhandled fetcher deferred data"),T(P,fo(un.data))}}async function te(P,D,X){let{submission:J,fetcherSubmission:fe,replace:ve}=X===void 0?{}:X;D.response.headers.has("X-Remix-Revalidate")&&(H=!0);let Ie=D.response.headers.get("Location");fn(Ie,"Expected a Location header on the redirect Response"),Ie=y2(Ie,new URL(P.url),s);let ie=Bl(w.location,Ie,{_isRedirect:!0});if(t){let un=!1;if(D.response.headers.has("X-Remix-Reload-Document"))un=!0;else if(cp.test(Ie)){const dn=e.history.createURL(Ie);un=dn.origin!==n.location.origin||ls(dn.pathname,s)==null}if(un){ve?n.location.replace(Ie):n.location.assign(Ie);return}}R=null;let Be=ve===!0?qn.Replace:qn.Push,{formMethod:se,formAction:je,formEncType:cn}=w.navigation;!J&&!fe&&se&&je&&cn&&(J=_2(w.navigation));let ln=J||fe;if(VS.has(D.response.status)&&ln&&Cr(ln.formMethod))await Se(Be,ie,{submission:Ln({},ln,{formAction:Ie}),preventScrollReset:N});else{let un=Wd(ie,J);await Se(Be,ie,{overrideNavigation:un,fetcherSubmission:fe,preventScrollReset:N})}}async function Ne(P,D,X,J){try{let fe=await JS(c,P,D,X,J,i,o);return await Promise.all(fe.map((ve,Ie)=>{if(a5(ve)){let ie=ve.result;return{type:Tn.redirect,response:t5(ie,D,X[Ie].route.id,J,s,d.v7_relativeSplatPath)}}return n5(ve)}))}catch(fe){return X.map(()=>({type:Tn.error,error:fe}))}}async function C(P,D,X,J,fe){let[ve,...Ie]=await Promise.all([X.length?Ne("loader",fe,X,D):[],...J.map(ie=>{if(ie.matches&&ie.match&&ie.controller){let Be=Ai(e.history,ie.path,ie.controller.signal);return Ne("loader",Be,[ie.match],ie.matches).then(se=>se[0])}else return Promise.resolve({type:Tn.error,error:Ct(404,{pathname:ie.path})})})]);return await Promise.all([I2(P,X,ve,ve.map(()=>fe.signal),!1,w.loaderData),I2(P,J.map(ie=>ie.match),Ie,J.map(ie=>ie.controller?ie.controller.signal:null),!0)]),{loaderResults:ve,fetcherResults:Ie}}function x(){H=!0,Z.push(...an()),U.forEach((P,D)=>{F.has(D)&&(B.push(D),ne(D))})}function T(P,D,X){X===void 0&&(X={}),w.fetchers.set(P,D),me({fetchers:new Map(w.fetchers)},{flushSync:(X&&X.flushSync)===!0})}function M(P,D,X,J){J===void 0&&(J={});let fe=pl(w.matches,D);q(P),me({errors:{[fe.route.id]:X},fetchers:new Map(w.fetchers)},{flushSync:(J&&J.flushSync)===!0})}function K(P){return d.v7_fetcherPersist&&(I.set(P,(I.get(P)||0)+1),Q.has(P)&&Q.delete(P)),w.fetchers.get(P)||WS}function q(P){let D=w.fetchers.get(P);F.has(P)&&!(D&&D.state==="loading"&&S.has(P))&&ne(P),U.delete(P),S.delete(P),G.delete(P),Q.delete(P),w.fetchers.delete(P)}function ee(P){if(d.v7_fetcherPersist){let D=(I.get(P)||0)-1;D<=0?(I.delete(P),Q.add(P)):I.set(P,D)}else q(P);me({fetchers:new Map(w.fetchers)})}function ne(P){let D=F.get(P);fn(D,"Expected fetch controller: "+P),D.abort(),F.delete(P)}function ue(P){for(let D of P){let X=K(D),J=fo(X.data);w.fetchers.set(D,J)}}function ae(){let P=[],D=!1;for(let X of G){let J=w.fetchers.get(X);fn(J,"Expected fetcher: "+X),J.state==="loading"&&(G.delete(X),P.push(X),D=!0)}return ue(P),D}function ge(P){let D=[];for(let[X,J]of S)if(J<P){let fe=w.fetchers.get(X);fn(fe,"Expected fetcher: "+X),fe.state==="loading"&&(ne(X),S.delete(X),D.push(X))}return ue(D),D.length>0}function De(P,D){let X=w.blockers.get(P)||Va;return L.get(P)!==D&&L.set(P,D),X}function we(P){w.blockers.delete(P),L.delete(P)}function Xe(P,D){let X=w.blockers.get(P)||Va;fn(X.state==="unblocked"&&D.state==="blocked"||X.state==="blocked"&&D.state==="blocked"||X.state==="blocked"&&D.state==="proceeding"||X.state==="blocked"&&D.state==="unblocked"||X.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+X.state+" -> "+D.state);let J=new Map(w.blockers);J.set(P,D),me({blockers:J})}function tn(P){let{currentLocation:D,nextLocation:X,historyAction:J}=P;if(L.size===0)return;L.size>1&&fa(!1,"A router only supports one blocker at a time");let fe=Array.from(L.entries()),[ve,Ie]=fe[fe.length-1],ie=w.blockers.get(ve);if(!(ie&&ie.state==="proceeding")&&Ie({currentLocation:D,nextLocation:X,historyAction:J}))return ve}function He(P){let D=Ct(404,{pathname:P}),X=l||a,{matches:J,route:fe}=E2(X);return an(),{notFoundMatches:J,route:fe,error:D}}function sn(P,D){let X=D.partialMatches,J=X[X.length-1].route,fe=Ct(400,{type:"route-discovery",routeId:J.id,pathname:P,message:D.error!=null&&"message"in D.error?D.error:String(D.error)});return{notFoundMatches:X,route:J,error:fe}}function an(P){let D=[];return oe.forEach((X,J)=>{(!P||P(J))&&(X.cancel(),D.push(J),oe.delete(J))}),D}function Ke(P,D,X){if(h=P,k=D,b=X||null,!g&&w.navigation===Vd){g=!0;let J=Re(w.location,w.matches);J!=null&&me({restoreScrollPosition:J})}return()=>{h=null,k=null,b=null}}function ke(P,D){return b&&b(P,D.map(J=>SS(J,w.loaderData)))||P.key}function We(P,D){if(h&&k){let X=ke(P,D);h[X]=k()}}function Re(P,D){if(h){let X=ke(P,D),J=h[X];if(typeof J=="number")return J}return null}function ye(P,D,X){if(u)if(P){if(P[P.length-1].route.path==="*")return{active:!0,matches:uc(D,X,s,!0)}}else return{active:!0,matches:uc(D,X,s,!0)||[]};return{active:!1,matches:null}}async function Ae(P,D,X){let J=P,fe=J.length>0?J[J.length-1].route:null;for(;;){try{await QS(u,D,J,a||l,i,o,he,X)}catch(se){return{type:"error",error:se,partialMatches:J}}if(X.aborted)return{type:"aborted"};let ve=l||a,Ie=qo(ve,D,s),ie=!1;if(Ie){let se=Ie[Ie.length-1].route;if(se.index)return{type:"success",matches:Ie};if(se.path&&se.path.length>0)if(se.path==="*")ie=!0;else return{type:"success",matches:Ie}}let Be=uc(ve,D,s,!0);if(!Be||J.map(se=>se.route.id).join("-")===Be.map(se=>se.route.id).join("-"))return{type:"success",matches:ie?Ie:null};if(J=Be,fe=J[J.length-1].route,fe.path==="*")return{type:"success",matches:J}}}function qe(P){i={},l=zl(P,o,void 0,i)}return _={get basename(){return s},get future(){return d},get state(){return w},get routes(){return a},get window(){return n},initialize:Oe,subscribe:Ce,enableScrollRestoration:Ke,navigate:Ze,fetch:Ue,revalidate:Ee,createHref:P=>e.history.createHref(P),encodeLocation:P=>e.history.encodeLocation(P),getFetcher:K,deleteFetcher:ee,dispose:be,getBlocker:De,deleteBlocker:we,patchRoutes(P,D){return Ey(P,D,a||l,i,o)},_internalFetchControllers:F,_internalActiveDeferreds:oe,_internalSetRoutes:qe},_}function ZS(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Cm(e,n,t,r,o,i,a,l){let s,c;if(a){s=[];for(let d of n)if(s.push(d),d.route.id===a){c=d;break}}else s=n,c=n[n.length-1];let u=wy(o||".",yy(s,i),ls(e.pathname,t)||e.pathname,l==="path");return o==null&&(u.search=e.search,u.hash=e.hash),(o==null||o===""||o===".")&&c&&c.route.index&&!up(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&t!=="/"&&(u.pathname=u.pathname==="/"?t:No([t,u.pathname])),as(u)}function p2(e,n,t,r){if(!r||!ZS(r))return{path:t};if(r.formMethod&&!s5(r.formMethod))return{path:t,error:Ct(405,{method:r.formMethod})};let o=()=>({path:t,error:Ct(400,{type:"invalid-body"})}),i=r.formMethod||"get",a=e?i.toUpperCase():i.toLowerCase(),l=xy(t);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Cr(a))return o();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((m,h)=>{let[b,k]=h;return""+m+b+"="+k+`
`},""):String(r.body);return{path:t,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!Cr(a))return o();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:t,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return o()}}}fn(typeof FormData=="function","FormData is not available in this environment");let s,c;if(r.formData)s=Sm(r.formData),c=r.formData;else if(r.body instanceof FormData)s=Sm(r.body),c=r.body;else if(r.body instanceof URLSearchParams)s=r.body,c=w2(s);else if(r.body==null)s=new URLSearchParams,c=new FormData;else try{s=new URLSearchParams(r.body),c=w2(s)}catch{return o()}let u={formMethod:a,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Cr(u.formMethod))return{path:t,submission:u};let d=Do(t);return n&&d.search&&up(d.search)&&s.append("index",""),d.search="?"+s,{path:as(d),submission:u}}function KS(e,n){let t=e;if(n){let r=e.findIndex(o=>o.route.id===n);r>=0&&(t=e.slice(0,r))}return t}function g2(e,n,t,r,o,i,a,l,s,c,u,d,f,m,h,b){let k=b?Vt(b[1])?b[1].error:b[1].data:void 0,g=e.createURL(n.location),v=e.createURL(o),y=b&&Vt(b[1])?b[0]:void 0,E=y?KS(t,y):t,_=b?b[1].statusCode:void 0,w=a&&_&&_>=400,A=E.filter((R,V)=>{let{route:$}=R;if($.lazy)return!0;if($.loader==null)return!1;if(i)return typeof $.loader!="function"||$.loader.hydrate?!0:n.loaderData[$.id]===void 0&&(!n.errors||n.errors[$.id]===void 0);if(qS(n.loaderData,n.matches[V],R)||s.some(H=>H===R.route.id))return!0;let z=n.matches[V],j=R;return v2(R,Ln({currentUrl:g,currentParams:z.params,nextUrl:v,nextParams:j.params},r,{actionResult:k,unstable_actionStatus:_,defaultShouldRevalidate:w?!1:l||g.pathname+g.search===v.pathname+v.search||g.search!==v.search||ky(z,j)}))}),N=[];return d.forEach((R,V)=>{if(i||!t.some(Z=>Z.route.id===R.routeId)||u.has(V))return;let $=qo(m,R.path,h);if(!$){N.push({key:V,routeId:R.routeId,path:R.path,matches:null,match:null,controller:null});return}let z=n.fetchers.get(V),j=ol($,R.path),H=!1;f.has(V)?H=!1:c.includes(V)?H=!0:z&&z.state!=="idle"&&z.data===void 0?H=l:H=v2(j,Ln({currentUrl:g,currentParams:n.matches[n.matches.length-1].params,nextUrl:v,nextParams:t[t.length-1].params},r,{actionResult:k,unstable_actionStatus:_,defaultShouldRevalidate:w?!1:l})),H&&N.push({key:V,routeId:R.routeId,path:R.path,matches:$,match:j,controller:new AbortController})}),[A,N]}function qS(e,n,t){let r=!n||t.route.id!==n.route.id,o=e[t.route.id]===void 0;return r||o}function ky(e,n){let t=e.route.path;return e.pathname!==n.pathname||t!=null&&t.endsWith("*")&&e.params["*"]!==n.params["*"]}function v2(e,n){if(e.route.shouldRevalidate){let t=e.route.shouldRevalidate(n);if(typeof t=="boolean")return t}return n.defaultShouldRevalidate}async function QS(e,n,t,r,o,i,a,l){let s=[n,...t.map(c=>c.route.id)].join("-");try{let c=a.get(s);c||(c=e({path:n,matches:t,patch:(u,d)=>{l.aborted||Ey(u,d,r,o,i)}}),a.set(s,c)),c&&i5(c)&&await c}finally{a.delete(s)}}function Ey(e,n,t,r,o){if(e){var i;let a=r[e];fn(a,"No route found to patch children into: routeId = "+e);let l=zl(n,o,[e,"patch",String(((i=a.children)==null?void 0:i.length)||"0")],r);a.children?a.children.push(...l):a.children=l}else{let a=zl(n,o,["patch",String(t.length||"0")],r);t.push(...a)}}async function b2(e,n,t){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=t[e.id];fn(o,"No route found in manifest");let i={};for(let a in r){let s=o[a]!==void 0&&a!=="hasErrorBoundary";fa(!s,'Route "'+o.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!wS.has(a)&&(i[a]=r[a])}Object.assign(o,i),Object.assign(o,Ln({},n(o),{lazy:void 0}))}function YS(e){return Promise.all(e.matches.map(n=>n.resolve()))}async function JS(e,n,t,r,o,i,a,l){let s=r.reduce((d,f)=>d.add(f.route.id),new Set),c=new Set,u=await e({matches:o.map(d=>{let f=s.has(d.route.id);return Ln({},d,{shouldLoad:f,resolve:h=>(c.add(d.route.id),f?e5(n,t,d,i,a,h,l):Promise.resolve({type:Tn.data,result:void 0}))})}),request:t,params:o[0].params,context:l});return o.forEach(d=>fn(c.has(d.route.id),'`match.resolve()` was not called for route id "'+d.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),u.filter((d,f)=>s.has(o[f].route.id))}async function e5(e,n,t,r,o,i,a){let l,s,c=u=>{let d,f=new Promise((b,k)=>d=k);s=()=>d(),n.signal.addEventListener("abort",s);let m=b=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+t.route.id+"]"))):u({request:n,params:t.params,context:a},...b!==void 0?[b]:[]),h;return i?h=i(b=>m(b)):h=(async()=>{try{return{type:"data",result:await m()}}catch(b){return{type:"error",result:b}}})(),Promise.race([h,f])};try{let u=t.route[e];if(t.route.lazy)if(u){let d,[f]=await Promise.all([c(u).catch(m=>{d=m}),b2(t.route,o,r)]);if(d!==void 0)throw d;l=f}else if(await b2(t.route,o,r),u=t.route[e],u)l=await c(u);else if(e==="action"){let d=new URL(n.url),f=d.pathname+d.search;throw Ct(405,{method:n.method,pathname:f,routeId:t.route.id})}else return{type:Tn.data,result:void 0};else if(u)l=await c(u);else{let d=new URL(n.url),f=d.pathname+d.search;throw Ct(404,{pathname:f})}fn(l.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+t.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:Tn.error,result:u}}finally{s&&n.signal.removeEventListener("abort",s)}return l}async function n5(e){let{result:n,type:t,status:r}=e;if(Iy(n)){let a;try{let l=n.headers.get("Content-Type");l&&/\bapplication\/json\b/.test(l)?n.body==null?a=null:a=await n.json():a=await n.text()}catch(l){return{type:Tn.error,error:l}}return t===Tn.error?{type:Tn.error,error:new sp(n.status,n.statusText,a),statusCode:n.status,headers:n.headers}:{type:Tn.data,data:a,statusCode:n.status,headers:n.headers}}if(t===Tn.error)return{type:Tn.error,error:n,statusCode:Fu(n)?n.status:r};if(l5(n)){var o,i;return{type:Tn.deferred,deferredData:n,statusCode:(o=n.init)==null?void 0:o.status,headers:((i=n.init)==null?void 0:i.headers)&&new Headers(n.init.headers)}}return{type:Tn.data,data:n,statusCode:r}}function t5(e,n,t,r,o,i){let a=e.headers.get("Location");if(fn(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!cp.test(a)){let l=r.slice(0,r.findIndex(s=>s.route.id===t)+1);a=Cm(new URL(n.url),l,o,!0,a,i),e.headers.set("Location",a)}return e}function y2(e,n,t){if(cp.test(e)){let r=e,o=r.startsWith("//")?new URL(n.protocol+r):new URL(r),i=ls(o.pathname,t)!=null;if(o.origin===n.origin&&i)return o.pathname+o.search+o.hash}return e}function Ai(e,n,t,r){let o=e.createURL(xy(n)).toString(),i={signal:t};if(r&&Cr(r.formMethod)){let{formMethod:a,formEncType:l}=r;i.method=a.toUpperCase(),l==="application/json"?(i.headers=new Headers({"Content-Type":l}),i.body=JSON.stringify(r.json)):l==="text/plain"?i.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?i.body=Sm(r.formData):i.body=r.formData}return new Request(o,i)}function Sm(e){let n=new URLSearchParams;for(let[t,r]of e.entries())n.append(t,typeof r=="string"?r:r.name);return n}function w2(e){let n=new FormData;for(let[t,r]of e.entries())n.append(t,r);return n}function r5(e,n,t,r,o,i){let a={},l=null,s,c=!1,u={},d=r&&Vt(r[1])?r[1].error:void 0;return t.forEach((f,m)=>{let h=n[m].route.id;if(fn(!ri(f),"Cannot handle redirect results in processLoaderData"),Vt(f)){let b=f.error;d!==void 0&&(b=d,d=void 0),l=l||{};{let k=pl(e,h);l[k.route.id]==null&&(l[k.route.id]=b)}a[h]=void 0,c||(c=!0,s=Fu(f.error)?f.error.status:500),f.headers&&(u[h]=f.headers)}else ti(f)?(o.set(h,f.deferredData),a[h]=f.deferredData.data,f.statusCode!=null&&f.statusCode!==200&&!c&&(s=f.statusCode),f.headers&&(u[h]=f.headers)):(a[h]=f.data,f.statusCode&&f.statusCode!==200&&!c&&(s=f.statusCode),f.headers&&(u[h]=f.headers))}),d!==void 0&&r&&(l={[r[0]]:d},a[r[0]]=void 0),{loaderData:a,errors:l,statusCode:s||200,loaderHeaders:u}}function C2(e,n,t,r,o,i,a,l){let{loaderData:s,errors:c}=r5(n,t,r,o,l);for(let u=0;u<i.length;u++){let{key:d,match:f,controller:m}=i[u];fn(a!==void 0&&a[u]!==void 0,"Did not find corresponding fetcher result");let h=a[u];if(!(m&&m.signal.aborted))if(Vt(h)){let b=pl(e.matches,f==null?void 0:f.route.id);c&&c[b.route.id]||(c=Ln({},c,{[b.route.id]:h.error})),e.fetchers.delete(d)}else if(ri(h))fn(!1,"Unhandled fetcher revalidation redirect");else if(ti(h))fn(!1,"Unhandled fetcher deferred data");else{let b=fo(h.data);e.fetchers.set(d,b)}}return{loaderData:s,errors:c}}function S2(e,n,t,r){let o=Ln({},n);for(let i of t){let a=i.route.id;if(n.hasOwnProperty(a)?n[a]!==void 0&&(o[a]=n[a]):e[a]!==void 0&&i.route.loader&&(o[a]=e[a]),r&&r.hasOwnProperty(a))break}return o}function k2(e){return e?Vt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function pl(e,n){return(n?e.slice(0,e.findIndex(r=>r.route.id===n)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function E2(e){let n=e.length===1?e[0]:e.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:n}],route:n}}function Ct(e,n){let{pathname:t,routeId:r,method:o,type:i,message:a}=n===void 0?{}:n,l="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(l="Bad Request",i==="route-discovery"?s='Unable to match URL "'+t+'" - the `children()` function for '+("route `"+r+"` threw the following error:\n"+a):o&&t&&r?s="You made a "+o+' request to "'+t+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?s="defer() is not supported in actions":i==="invalid-body"&&(s="Unable to encode submission body")):e===403?(l="Forbidden",s='Route "'+r+'" does not match URL "'+t+'"'):e===404?(l="Not Found",s='No route matches URL "'+t+'"'):e===405&&(l="Method Not Allowed",o&&t&&r?s="You made a "+o.toUpperCase()+' request to "'+t+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(s='Invalid request method "'+o.toUpperCase()+'"')),new sp(e||500,l,new Error(s),!0)}function x2(e){for(let n=e.length-1;n>=0;n--){let t=e[n];if(ri(t))return{result:t,idx:n}}}function xy(e){let n=typeof e=="string"?Do(e):e;return as(Ln({},n,{hash:""}))}function o5(e,n){return e.pathname!==n.pathname||e.search!==n.search?!1:e.hash===""?n.hash!=="":e.hash===n.hash?!0:n.hash!==""}function i5(e){return typeof e=="object"&&e!=null&&"then"in e}function a5(e){return Iy(e.result)&&US.has(e.result.status)}function ti(e){return e.type===Tn.deferred}function Vt(e){return e.type===Tn.error}function ri(e){return(e&&e.type)===Tn.redirect}function l5(e){let n=e;return n&&typeof n=="object"&&typeof n.data=="object"&&typeof n.subscribe=="function"&&typeof n.cancel=="function"&&typeof n.resolveData=="function"}function Iy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function s5(e){return HS.has(e.toLowerCase())}function Cr(e){return BS.has(e.toLowerCase())}async function I2(e,n,t,r,o,i){for(let a=0;a<t.length;a++){let l=t[a],s=n[a];if(!s)continue;let c=e.find(d=>d.route.id===s.route.id),u=c!=null&&!ky(c,s)&&(i&&i[s.route.id])!==void 0;if(ti(l)&&(o||u)){let d=r[a];fn(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await _y(l,d,o).then(f=>{f&&(t[a]=f||t[a])})}}}async function _y(e,n,t){if(t===void 0&&(t=!1),!await e.deferredData.resolveData(n)){if(t)try{return{type:Tn.data,data:e.deferredData.unwrappedData}}catch(o){return{type:Tn.error,error:o}}return{type:Tn.data,data:e.deferredData.data}}}function up(e){return new URLSearchParams(e).getAll("index").some(n=>n==="")}function ol(e,n){let t=typeof n=="string"?Do(n).search:n.search;if(e[e.length-1].route.index&&up(t||""))return e[e.length-1];let r=by(e);return r[r.length-1]}function _2(e){let{formMethod:n,formAction:t,formEncType:r,text:o,formData:i,json:a}=e;if(!(!n||!t||!r)){if(o!=null)return{formMethod:n,formAction:t,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:n,formAction:t,formEncType:r,formData:i,json:void 0,text:void 0};if(a!==void 0)return{formMethod:n,formAction:t,formEncType:r,formData:void 0,json:a,text:void 0}}}function Wd(e,n){return n?{state:"loading",location:e,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function c5(e,n){return{state:"submitting",location:e,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}}function Wa(e,n){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:n}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n}}function u5(e,n){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:n?n.data:void 0}}function fo(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function d5(e,n){try{let t=e.sessionStorage.getItem(Sy);if(t){let r=JSON.parse(t);for(let[o,i]of Object.entries(r||{}))i&&Array.isArray(i)&&n.set(o,new Set(i||[]))}}catch{}}function f5(e,n){if(n.size>0){let t={};for(let[r,o]of n)t[r]=[...o];try{e.sessionStorage.setItem(Sy,JSON.stringify(t))}catch(r){fa(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qc(){return qc=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},qc.apply(this,arguments)}const Mu=p.createContext(null),Ay=p.createContext(null),Lu=p.createContext(null),dp=p.createContext(null),wi=p.createContext({outlet:null,matches:[],isDataRoute:!1}),Ty=p.createContext(null);function ju(){return p.useContext(dp)!=null}function fp(){return ju()||fn(!1),p.useContext(dp).location}function Oy(e){p.useContext(Lu).static||p.useLayoutEffect(e)}function m5(){let{isDataRoute:e}=p.useContext(wi);return e?I5():h5()}function h5(){ju()||fn(!1);let e=p.useContext(Mu),{basename:n,future:t,navigator:r}=p.useContext(Lu),{matches:o}=p.useContext(wi),{pathname:i}=fp(),a=JSON.stringify(yy(o,t.v7_relativeSplatPath)),l=p.useRef(!1);return Oy(()=>{l.current=!0}),p.useCallback(function(c,u){if(u===void 0&&(u={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let d=wy(c,JSON.parse(a),i,u.relative==="path");e==null&&n!=="/"&&(d.pathname=d.pathname==="/"?n:No([n,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[n,r,a,i,e])}const p5=p.createContext(null);function g5(e){let n=p.useContext(wi).outlet;return n&&p.createElement(p5.Provider,{value:e},n)}function v5(e,n,t,r){ju()||fn(!1);let{navigator:o}=p.useContext(Lu),{matches:i}=p.useContext(wi),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let c=fp(),u;u=c;let d=u.pathname||"/",f=d;if(s!=="/"){let b=s.replace(/^\//,"").split("/");f="/"+d.replace(/^\//,"").split("/").slice(b.length).join("/")}let m=qo(e,{pathname:f});return S5(m&&m.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:No([s,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?s:No([s,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,t,r)}function b5(){let e=Ry(),n=Fu(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return p.createElement(p.Fragment,null,p.createElement("h2",null,"Unexpected Application Error!"),p.createElement("h3",{style:{fontStyle:"italic"}},n),t?p.createElement("pre",{style:o},t):null,null)}const y5=p.createElement(b5,null);class w5 extends p.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?p.createElement(wi.Provider,{value:this.props.routeContext},p.createElement(Ty.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function C5(e){let{routeContext:n,match:t,children:r}=e,o=p.useContext(Mu);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),p.createElement(wi.Provider,{value:n},r)}function S5(e,n,t,r){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if((i=t)!=null&&i.errors)e=t.matches;else return null}let a=e,l=(o=t)==null?void 0:o.errors;if(l!=null){let u=a.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);u>=0||fn(!1),a=a.slice(0,Math.min(a.length,u+1))}let s=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let u=0;u<a.length;u++){let d=a[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:f,errors:m}=t,h=d.route.loader&&f[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||h){s=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((u,d,f)=>{let m,h=!1,b=null,k=null;t&&(m=l&&d.route.id?l[d.route.id]:void 0,b=d.route.errorElement||y5,s&&(c<0&&f===0?(_5("route-fallback"),h=!0,k=null):c===f&&(h=!0,k=d.route.hydrateFallbackElement||null)));let g=n.concat(a.slice(0,f+1)),v=()=>{let y;return m?y=b:h?y=k:d.route.Component?y=p.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=u,p.createElement(C5,{match:d,routeContext:{outlet:u,matches:g,isDataRoute:t!=null},children:y})};return t&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?p.createElement(w5,{location:t.location,revalidation:t.revalidation,component:b,error:m,children:v(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):v()},null)}var Py=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Py||{}),Qc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qc||{});function k5(e){let n=p.useContext(Mu);return n||fn(!1),n}function E5(e){let n=p.useContext(Ay);return n||fn(!1),n}function x5(e){let n=p.useContext(wi);return n||fn(!1),n}function Ny(e){let n=x5(),t=n.matches[n.matches.length-1];return t.route.id||fn(!1),t.route.id}function Ry(){var e;let n=p.useContext(Ty),t=E5(Qc.UseRouteError),r=Ny(Qc.UseRouteError);return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function I5(){let{router:e}=k5(Py.UseNavigateStable),n=Ny(Qc.UseNavigateStable),t=p.useRef(!1);return Oy(()=>{t.current=!0}),p.useCallback(function(o,i){i===void 0&&(i={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,qc({fromRouteId:n},i)))},[e,n])}const A2={};function _5(e,n,t){A2[e]||(A2[e]=!0)}function A5(e){return g5(e.context)}function T5(e){let{basename:n="/",children:t=null,location:r,navigationType:o=qn.Pop,navigator:i,static:a=!1,future:l}=e;ju()&&fn(!1);let s=n.replace(/^\/*/,"/"),c=p.useMemo(()=>({basename:s,navigator:i,static:a,future:qc({v7_relativeSplatPath:!1},l)}),[s,l,i,a]);typeof r=="string"&&(r=Do(r));let{pathname:u="/",search:d="",hash:f="",state:m=null,key:h="default"}=r,b=p.useMemo(()=>{let k=ls(u,s);return k==null?null:{location:{pathname:k,search:d,hash:f,state:m,key:h},navigationType:o}},[s,u,d,f,m,h,o]);return b==null?null:p.createElement(Lu.Provider,{value:c},p.createElement(dp.Provider,{children:t,value:b}))}new Promise(()=>{});function O5(e){let n={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(n,{element:p.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(n,{hydrateFallbackElement:p.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(n,{errorElement:p.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),n}/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yc(){return Yc=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Yc.apply(this,arguments)}const P5="6";try{window.__reactRouterVersion=P5}catch{}function N5(e,n){return GS({basename:n==null?void 0:n.basename,future:Yc({},n==null?void 0:n.future,{v7_prependBasename:!0}),history:vS({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||R5(),routes:e,mapRouteProperties:O5,unstable_dataStrategy:n==null?void 0:n.unstable_dataStrategy,unstable_patchRoutesOnMiss:n==null?void 0:n.unstable_patchRoutesOnMiss,window:n==null?void 0:n.window}).initialize()}function R5(){var e;let n=(e=window)==null?void 0:e.__staticRouterHydrationData;return n&&n.errors&&(n=Yc({},n,{errors:F5(n.errors)})),n}function F5(e){if(!e)return null;let n=Object.entries(e),t={};for(let[r,o]of n)if(o&&o.__type==="RouteErrorResponse")t[r]=new sp(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let i=window[o.__subType];if(typeof i=="function")try{let a=new i(o.message);a.stack="",t[r]=a}catch{}}if(t[r]==null){let i=new Error(o.message);i.stack="",t[r]=i}}else t[r]=o;return t}const M5=p.createContext({isTransitioning:!1}),L5=p.createContext(new Map),j5="startTransition",T2=ns[j5],D5="flushSync",O2=py[D5];function $5(e){T2?T2(e):e()}function Xa(e){O2?O2(e):e()}class B5{constructor(){this.status="pending",this.promise=new Promise((n,t)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",n(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",t(r))}})}}function z5(e){let{fallbackElement:n,router:t,future:r}=e,[o,i]=p.useState(t.state),[a,l]=p.useState(),[s,c]=p.useState({isTransitioning:!1}),[u,d]=p.useState(),[f,m]=p.useState(),[h,b]=p.useState(),k=p.useRef(new Map),{v7_startTransition:g}=r||{},v=p.useCallback(A=>{g?$5(A):A()},[g]),y=p.useCallback((A,N)=>{let{deletedFetchers:R,unstable_flushSync:V,unstable_viewTransitionOpts:$}=N;R.forEach(j=>k.current.delete(j)),A.fetchers.forEach((j,H)=>{j.data!==void 0&&k.current.set(H,j.data)});let z=t.window==null||t.window.document==null||typeof t.window.document.startViewTransition!="function";if(!$||z){V?Xa(()=>i(A)):v(()=>i(A));return}if(V){Xa(()=>{f&&(u&&u.resolve(),f.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:$.currentLocation,nextLocation:$.nextLocation})});let j=t.window.document.startViewTransition(()=>{Xa(()=>i(A))});j.finished.finally(()=>{Xa(()=>{d(void 0),m(void 0),l(void 0),c({isTransitioning:!1})})}),Xa(()=>m(j));return}f?(u&&u.resolve(),f.skipTransition(),b({state:A,currentLocation:$.currentLocation,nextLocation:$.nextLocation})):(l(A),c({isTransitioning:!0,flushSync:!1,currentLocation:$.currentLocation,nextLocation:$.nextLocation}))},[t.window,f,u,k,v]);p.useLayoutEffect(()=>t.subscribe(y),[t,y]),p.useEffect(()=>{s.isTransitioning&&!s.flushSync&&d(new B5)},[s]),p.useEffect(()=>{if(u&&a&&t.window){let A=a,N=u.promise,R=t.window.document.startViewTransition(async()=>{v(()=>i(A)),await N});R.finished.finally(()=>{d(void 0),m(void 0),l(void 0),c({isTransitioning:!1})}),m(R)}},[v,a,u,t.window]),p.useEffect(()=>{u&&a&&o.location.key===a.location.key&&u.resolve()},[u,f,o.location,a]),p.useEffect(()=>{!s.isTransitioning&&h&&(l(h.state),c({isTransitioning:!0,flushSync:!1,currentLocation:h.currentLocation,nextLocation:h.nextLocation}),b(void 0))},[s.isTransitioning,h]),p.useEffect(()=>{},[]);let E=p.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:A=>t.navigate(A),push:(A,N,R)=>t.navigate(A,{state:N,preventScrollReset:R==null?void 0:R.preventScrollReset}),replace:(A,N,R)=>t.navigate(A,{replace:!0,state:N,preventScrollReset:R==null?void 0:R.preventScrollReset})}),[t]),_=t.basename||"/",w=p.useMemo(()=>({router:t,navigator:E,static:!1,basename:_}),[t,E,_]);return p.createElement(p.Fragment,null,p.createElement(Mu.Provider,{value:w},p.createElement(Ay.Provider,{value:o},p.createElement(L5.Provider,{value:k.current},p.createElement(M5.Provider,{value:s},p.createElement(T5,{basename:_,location:o.location,navigationType:o.historyAction,navigator:E,future:{v7_relativeSplatPath:t.future.v7_relativeSplatPath}},o.initialized||t.future.v7_partialHydration?p.createElement(H5,{routes:t.routes,future:t.future,state:o}):n))))),null)}function H5(e){let{routes:n,future:t,state:r}=e;return v5(n,void 0,r,t)}var P2;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(P2||(P2={}));var N2;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(N2||(N2={}));const U5=[{oid:"04b4b7a0244f61721f6fe712393e2fb04be64472",message:`Merge pull request #256 from takahiroanno2024/tokshibata-patch-2

Create Others & Energy`,committedDate:"2024-07-03T02:58:40Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/04b4b7a0244f61721f6fe712393e2fb04be64472",files:[{sha:"b5ea08ae98e44108dfdef1632c83d33bfb58b2f8",filename:"docs/manifest/others.md",status:"added",additions:34,deletions:0,changes:34,blob_url:"https://github.com/takahiroanno2024/election2024/blob/04b4b7a0244f61721f6fe712393e2fb04be64472/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/04b4b7a0244f61721f6fe712393e2fb04be64472/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=04b4b7a0244f61721f6fe712393e2fb04be64472",patch:`@@ -0,0 +1,34 @@
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
+    - 安全を確保したうえでの原子力発電再稼働に向けた検討の推進・都としての働きかけ`}]},{oid:"583860f77fb45f5927aae8d8f426652b4cc093c7",message:"Update docs/manifest/others.md",committedDate:"2024-07-03T02:58:01Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/583860f77fb45f5927aae8d8f426652b4cc093c7",files:[{sha:"b5ea08ae98e44108dfdef1632c83d33bfb58b2f8",filename:"docs/manifest/others.md",status:"modified",additions:0,deletions:1,changes:1,blob_url:"https://github.com/takahiroanno2024/election2024/blob/583860f77fb45f5927aae8d8f426652b4cc093c7/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/583860f77fb45f5927aae8d8f426652b4cc093c7/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=583860f77fb45f5927aae8d8f426652b4cc093c7",patch:`@@ -22,7 +22,6 @@
         - 導入費用は高いが、発電規模は大きいため電力価格は安く抑えられる
         - 導入に際して様々な技術や人材を必要とするため、周辺での事業・雇用創出に繋がる。今後アジアでニーズが高まることも予想され、先行すれば技術を輸出することも可能
             - （環境省「離島への浮体式洋上風力発電導入の手引き」2024年6月）
-    - 住宅の断熱義務化（ZEH、ZEB推進）
     - テクノロジーにおける電力消費・販売の最適化
         - ディマンドリスポンス（消費者が賢く電力使用量を制御することで、電力需要パターンを変化させ、電力の需要と供給のバランスをとる取り組み）の仕組みを拡充。より広い都民にとってメリットを生み、環境インパクトを向上する方法を模索
             - 電力消費ピーク時に節電に協力することでポイント還元がされるなど、協力することで都民にもプラスが生まれる仕組み`}]},{oid:"8c9817bcbf3ffaab30f990f02a89caa6a9f59e26",message:`Merge pull request #270 from takahiroanno2024/yuuuuuuten-patch-2

組織強化の明確化`,committedDate:"2024-07-03T02:45:43Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/8c9817bcbf3ffaab30f990f02a89caa6a9f59e26",files:[{sha:"2bf5e480237e7be4d017eb1c6e3d30b16218f226",filename:"docs/manifest/administration.md",status:"modified",additions:41,deletions:17,changes:58,blob_url:"https://github.com/takahiroanno2024/election2024/blob/8c9817bcbf3ffaab30f990f02a89caa6a9f59e26/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/8c9817bcbf3ffaab30f990f02a89caa6a9f59e26/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=8c9817bcbf3ffaab30f990f02a89caa6a9f59e26",patch:`@@ -18,8 +18,9 @@
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
+    - デジタル化の徹底による内部手続の効率化推進`}]},{oid:"a58aa37630bc7713943ad3213ad394392612724a",message:"Merge branch 'main' into HiroakiSato1106-patch-1",committedDate:"2024-07-03T02:44:30Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/a58aa37630bc7713943ad3213ad394392612724a",files:[{sha:"f50accf177f8b1fb36c1cb66f641b7ccf962dbf4",filename:"docs/manifest/administration.md",status:"modified",additions:28,deletions:0,changes:28,blob_url:"https://github.com/takahiroanno2024/election2024/blob/a58aa37630bc7713943ad3213ad394392612724a/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/a58aa37630bc7713943ad3213ad394392612724a/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=a58aa37630bc7713943ad3213ad394392612724a",patch:`@@ -61,6 +61,33 @@
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

Update care.md: ブロードリスニング反映(2)`,committedDate:"2024-07-03T02:42:20Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/b1dd366d9b4cb335596977594de163686ce50ec5",files:[{sha:"7366bbf7ff558a63cde31fee73e8d5bc47c6577e",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:0,changes:1,blob_url:"https://github.com/takahiroanno2024/election2024/blob/b1dd366d9b4cb335596977594de163686ce50ec5/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/b1dd366d9b4cb335596977594de163686ce50ec5/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=b1dd366d9b4cb335596977594de163686ce50ec5",patch:`@@ -97,6 +97,7 @@
         - 特定のニーズを抱えた住民の所在 等
 - 避難・復旧時には、避難所運営･きめ細かい支援提供を技術でスムーズ化
     - 避難所での住民登録（チェックイン）や､医薬品の配送にマイナンバーカードや処方情報を活用
+    - 避難行動要支援者（＝緊急時に支援を必要とする避難者）について､プライバシーに配慮しつつ行政が事前に把握(非公開のDB化)
 
 ## デジタル技術を活用した､次世代の避難所運営(イメージ)
 `}]},{oid:"9ef797353080a1d1ee3b55a01f188f2f6e64bd2c",message:"fix lint",committedDate:"2024-07-03T02:41:44Z",author:{name:"Imaizumi Takatsugu",email:"takatsugu.imaizumi@mntsq.com"},url:"https://github.com/takahiroanno2024/election2024/commit/9ef797353080a1d1ee3b55a01f188f2f6e64bd2c",files:[{sha:"54a6e30c1707c3c872ac568c96901304643bff5d",filename:"docs/manifest/administration.md",status:"modified",additions:18,deletions:19,changes:37,blob_url:"https://github.com/takahiroanno2024/election2024/blob/9ef797353080a1d1ee3b55a01f188f2f6e64bd2c/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/9ef797353080a1d1ee3b55a01f188f2f6e64bd2c/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=9ef797353080a1d1ee3b55a01f188f2f6e64bd2c",patch:`@@ -132,29 +132,28 @@
 
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

東京都の役割`,committedDate:"2024-07-03T02:37:01Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/e904b2d856ce2b4871aa50befdc819bf7a268438",files:[{sha:"f50accf177f8b1fb36c1cb66f641b7ccf962dbf4",filename:"docs/manifest/administration.md",status:"modified",additions:27,deletions:0,changes:27,blob_url:"https://github.com/takahiroanno2024/election2024/blob/e904b2d856ce2b4871aa50befdc819bf7a268438/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/e904b2d856ce2b4871aa50befdc819bf7a268438/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=e904b2d856ce2b4871aa50befdc819bf7a268438",patch:`@@ -61,6 +61,33 @@
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

プッシュ型のサービス提案によりこれまで行政サービスの利用に抵抗感のあった方がより使いやすくなるという説明を追加しています。`,committedDate:"2024-07-02T17:08:30Z",author:{name:"yuuuuuuten",email:"yuuuuuuten@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/66f28e7641a988fa43a1760183ef8d787b861864",files:[{sha:"55a6471305917a0393887cb6e5ff49c9f0d4eac1",filename:"docs/manifest/administration.md",status:"modified",additions:1,deletions:0,changes:1,blob_url:"https://github.com/takahiroanno2024/election2024/blob/66f28e7641a988fa43a1760183ef8d787b861864/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/66f28e7641a988fa43a1760183ef8d787b861864/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=66f28e7641a988fa43a1760183ef8d787b861864",patch:`@@ -86,6 +86,7 @@
 - これまでの行政サービスは、大量の情報から自分に合ったサービスを探す必要があり、面倒さや、使えるサービスに気づかないという漏れが生まれていた
 - 今後は、プッシュ型で必要な政策情報を取得できるようにする
     - 本人情報や事前に入力した興味・関心から関連する政策をプッシュ型で提案（アプリやメールでの通知を想定）
+    - 前向きなメッセージとともに提案を行うことで、行政サービスの利用への抵抗感を軽減
 
 ## 見やすい・わかりやすい情報公開により東京都の透明化
 `}]},{oid:"acdcba4be1af60533061e6fd594d0c5344af710f",message:`組織強化の明確化

従前、リーダー・組織強化を一つでくくっていた部分を二つにわけています。\r
リーダーについては、リーダーだからこそできることというメッセージを詳細化しています。\r
組織強化については、種々のインタビューを受け、行政の実行力強化のため、組織を強くするというメッセージを厚く書いています。`,committedDate:"2024-07-02T17:04:28Z",author:{name:"yuuuuuuten",email:"yuuuuuuten@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/acdcba4be1af60533061e6fd594d0c5344af710f",files:[{sha:"064cb0dda0f3cc68e339dfde2f6cf2229dccc692",filename:"docs/manifest/administration.md",status:"modified",additions:42,deletions:17,changes:59,blob_url:"https://github.com/takahiroanno2024/election2024/blob/acdcba4be1af60533061e6fd594d0c5344af710f/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/acdcba4be1af60533061e6fd594d0c5344af710f/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=acdcba4be1af60533061e6fd594d0c5344af710f",patch:`@@ -18,8 +18,9 @@
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

様々な場所でみられる「それは東京でできるのか」という疑問に答えるため、現状理解として東京都ができることを追加`,committedDate:"2024-07-02T14:49:44Z",author:{name:"yuuuuuuten",email:"yuuuuuuten@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/072339c81754fd1bd68e7d2e5604fa679921dc64",files:[{sha:"116567a077549874aa4766e737a81ad44ef07238",filename:"docs/manifest/administration.md",status:"modified",additions:27,deletions:0,changes:27,blob_url:"https://github.com/takahiroanno2024/election2024/blob/072339c81754fd1bd68e7d2e5604fa679921dc64/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/072339c81754fd1bd68e7d2e5604fa679921dc64/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=072339c81754fd1bd68e7d2e5604fa679921dc64",patch:`@@ -61,6 +61,33 @@
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
 `}]},{oid:"dbdf4f55485e8c32fc159a4d83be0e3aea6fe4e7",message:"Update others.md　ディマンドリスポンス追記",committedDate:"2024-07-02T11:53:21Z",author:{name:"tokshibata",email:"48014497+tokshibata@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/dbdf4f55485e8c32fc159a4d83be0e3aea6fe4e7",files:[{sha:"f260c6e253c40457b47249ae9369c32e6d231c26",filename:"docs/manifest/others.md",status:"modified",additions:2,deletions:1,changes:3,blob_url:"https://github.com/takahiroanno2024/election2024/blob/dbdf4f55485e8c32fc159a4d83be0e3aea6fe4e7/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/dbdf4f55485e8c32fc159a4d83be0e3aea6fe4e7/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=dbdf4f55485e8c32fc159a4d83be0e3aea6fe4e7",patch:`@@ -24,7 +24,8 @@
             - （環境省「離島への浮体式洋上風力発電導入の手引き」2024年6月）
     - 住宅の断熱義務化（ZEH、ZEB推進）
     - テクノロジーにおける電力消費・販売の最適化
-        - ディマンドリスポンスの仕組みを拡充。より広い都民にとってメリットを生み、環境インパクトを向上する方法を模索
+        - ディマンドリスポンス（消費者が賢く電力使用量を制御することで、電力需要パターンを変化させ、電力の需要と供給のバランスをとる取り組み）の仕組みを拡充。より広い都民にとってメリットを生み、環境インパクトを向上する方法を模索
+            - 電力消費ピーク時に節電に協力することでポイント還元がされるなど、協力することで都民にもプラスが生まれる仕組み
             - 参考）<https://www.enecho.meti.go.jp/category/electricity_and_gas/electricity_measures/dr/dr.html>
             - 参考）<https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2024/03/28/66.html>
         - 電力市場をAIテクノロジーを用いて最適化する技術企業への支援`}]},{oid:"d1465775263b9f48e9a1478b7c97401ba0a5299d",message:"Update others.md　浮体式洋上風力の言及追記",committedDate:"2024-07-02T11:40:25Z",author:{name:"tokshibata",email:"48014497+tokshibata@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/d1465775263b9f48e9a1478b7c97401ba0a5299d",files:[{sha:"69f50772d2d7a28ad4f9be394a6ea72f17066210",filename:"docs/manifest/others.md",status:"modified",additions:5,deletions:0,changes:5,blob_url:"https://github.com/takahiroanno2024/election2024/blob/d1465775263b9f48e9a1478b7c97401ba0a5299d/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/d1465775263b9f48e9a1478b7c97401ba0a5299d/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=d1465775263b9f48e9a1478b7c97401ba0a5299d",patch:`@@ -17,6 +17,11 @@
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
         - ディマンドリスポンスの仕組みを拡充。より広い都民にとってメリットを生み、環境インパクトを向上する方法を模索`}]},{oid:"1b6515dfb7c49d98be12ac9f9032d21f816aebf2",message:"Update others.md　電力消費量増加の根拠追加",committedDate:"2024-07-02T11:22:33Z",author:{name:"tokshibata",email:"48014497+tokshibata@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/1b6515dfb7c49d98be12ac9f9032d21f816aebf2",files:[{sha:"dddeb5fca59cf42f33a10779c12b7ed0be84e24c",filename:"docs/manifest/others.md",status:"modified",additions:2,deletions:0,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/1b6515dfb7c49d98be12ac9f9032d21f816aebf2/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/1b6515dfb7c49d98be12ac9f9032d21f816aebf2/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=1b6515dfb7c49d98be12ac9f9032d21f816aebf2",patch:`@@ -12,6 +12,8 @@
     - 太陽光・風力などの再エネは発電量が天候などにより不安定であり、大規模停電を防ぐための電気の貯蔵技術の発展が急務
 - さらに、今回安野たかひろが提案しているテクノロジーを活用した各種政策は、電力を多く消費するものも多く、実現に向けてはより一層のエネルギー政策強化が必要
     - 特に自動運転を大々的に活用していく場合には、現状の消費電力とはけた違いの電力が必要になる可能性もある
+        -  自動車に関する高度情報処理について、その機能をクラウド・データセンター側に依存（データ量にして4TB/日）させると、ネットワーク・クラウド側の車両1台あたり電力負荷は2.0kWとなる。CO2排出量に換算すると、約2,550万t-CO2（国内2050年）。
+            - (経済産業省「「電動車等省エネ化のための車載コンピューティング・シミュレーション技術の開発」「スマートモビリティ社会の構築」プロジェクトに関する研究開発・社会実装の方向性」2022年2月）
 - 現在の都の政策に加え、以下を政策として実行する
     - 集合住宅（賃貸含む）への太陽光パネル設置補助
     - 島しょ部における浮体式洋上風力推進のための企業の技術開発支援と実装のための特区化`}]},{oid:"49f18c80cc712a5651f7df473a0c286182c88f46",message:`Update care.md: ブロードリスニング反映(2)

避難所運営･居宅避難者支援の文脈で､要支援者に関する事前把握に関する施策を追加(備蓄と異なり､オープンにするのではなく､プライバシーに配慮したものを想定)`,committedDate:"2024-07-01T14:56:23Z",author:{name:"HiroakiSato1106",email:"hsato1106@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/49f18c80cc712a5651f7df473a0c286182c88f46",files:[{sha:"7366bbf7ff558a63cde31fee73e8d5bc47c6577e",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:0,changes:1,blob_url:"https://github.com/takahiroanno2024/election2024/blob/49f18c80cc712a5651f7df473a0c286182c88f46/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/49f18c80cc712a5651f7df473a0c286182c88f46/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=49f18c80cc712a5651f7df473a0c286182c88f46",patch:`@@ -97,6 +97,7 @@
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
(3)避難所運営→避難所運営･在宅避難者把握/支援 に変更 (政策の実態に即したもの)`,committedDate:"2024-07-01T14:47:11Z",author:{name:"HiroakiSato1106",email:"hsato1106@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/67a8443026d0a1d61fa88201a9a9457a18fcb126",files:[{sha:"7408fc1e68eee65065c2b1754fe33967e9dcaa80",filename:"docs/manifest/care.md",status:"modified",additions:25,deletions:8,changes:33,blob_url:"https://github.com/takahiroanno2024/election2024/blob/67a8443026d0a1d61fa88201a9a9457a18fcb126/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/67a8443026d0a1d61fa88201a9a9457a18fcb126/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=67a8443026d0a1d61fa88201a9a9457a18fcb126",patch:`@@ -65,15 +65,13 @@
 
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

Update economy.md`,committedDate:"2024-07-01T14:36:16Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/1a87de704e299f0aa621ec5dba79b92b794c1ea6",files:[{sha:"23aab87c9c114f699a2f2083a98ffd7601c1ca0a",filename:"docs/manifest/economy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/1a87de704e299f0aa621ec5dba79b92b794c1ea6/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/1a87de704e299f0aa621ec5dba79b92b794c1ea6/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=1a87de704e299f0aa621ec5dba79b92b794c1ea6",patch:`@@ -65,7 +65,7 @@
     - 「AIを使った製品とサービスには欠点よりも恩恵がある」の質問に対して、日本は42%が「そう思う」と回答<br/>イギリス38%、ドイツが37%、アメリカ35%、カナダ32%、フランス31%
 - 地政学観点
     - アジア太平洋地域において、東京が近年より重視されつつある
-        - 中国は地政学的リスクが高い
+        - 日本は東アジア地域の中で比較的地政学的リスクが低い
         - 日本の円安
 - OpenAI、Microsoft Research、Sakana AIなど、強い技術企業の拠点が東京に置かれ始めている
 `}]},{oid:"87d5d6242822ac8a7ef7fca849188eab9368acea",message:"Update docs/manifest/economy.md",committedDate:"2024-07-01T14:35:42Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/87d5d6242822ac8a7ef7fca849188eab9368acea",files:[{sha:"cf56dbc3975aa0269b43c8c5fbbbf40bb3579946",filename:"docs/manifest/economy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/87d5d6242822ac8a7ef7fca849188eab9368acea/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/87d5d6242822ac8a7ef7fca849188eab9368acea/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=87d5d6242822ac8a7ef7fca849188eab9368acea",patch:`@@ -65,7 +65,7 @@
     - 「AIを使った製品とサービスには欠点よりも恩恵がある」の質問に対して、日本は42%が「そう思う」と回答。イギリス38%、ドイツが37%、アメリカ35%、カナダ32%、フランス31%。
 - 地政学観点
     - アジア太平洋地域において、東京が近年より重視されつつある
-        - 特に東アジア地域は地政学的な課題を抱えている
+        - 日本は東アジア地域の中で比較的地政学的リスクが低い
         - 日本の円安
 - OpenAI、Microsoft Research、SakanaAIなど、強い技術企業の拠点が東京に置かれ始めている
 `}]},{oid:"e86fb4415d8a959372b0a50217b38d662557152b",message:`Merge pull request #154 from filialbrilliant/patch-1

東京都の少子化要因の多くが有配偶率低下であることの説明追加。`,committedDate:"2024-07-01T14:26:11Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/e86fb4415d8a959372b0a50217b38d662557152b",files:[{sha:"610848a7525bd5e4ba055ab85bc73805e65ff83c",filename:"docs/manifest/education.md",status:"modified",additions:10,deletions:8,changes:18,blob_url:"https://github.com/takahiroanno2024/election2024/blob/e86fb4415d8a959372b0a50217b38d662557152b/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/e86fb4415d8a959372b0a50217b38d662557152b/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=e86fb4415d8a959372b0a50217b38d662557152b",patch:`@@ -22,14 +22,16 @@
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
 `}]},{oid:"6c0ed6bdde474237648297278f25bc1fc1aeb279",message:"Merge branch 'main' into 「テクノロジーの力で」もう少し信頼できる包括的なデータを取る・取り続ける、発信",committedDate:"2024-07-01T14:10:56Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/6c0ed6bdde474237648297278f25bc1fc1aeb279",files:[{sha:"e015a085627fae7f28d87131c6539ba44d865ade",filename:"docs/manifest/administration.md",status:"modified",additions:5,deletions:5,changes:10,blob_url:"https://github.com/takahiroanno2024/election2024/blob/6c0ed6bdde474237648297278f25bc1fc1aeb279/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/6c0ed6bdde474237648297278f25bc1fc1aeb279/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=6c0ed6bdde474237648297278f25bc1fc1aeb279",patch:`@@ -10,7 +10,7 @@
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

End of sentence fix`,committedDate:"2024-07-01T14:07:03Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/190d7c56aad0a71c7f1d2d6b2bf48b0448194231",files:[{sha:"e015a085627fae7f28d87131c6539ba44d865ade",filename:"docs/manifest/administration.md",status:"modified",additions:5,deletions:5,changes:10,blob_url:"https://github.com/takahiroanno2024/election2024/blob/190d7c56aad0a71c7f1d2d6b2bf48b0448194231/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/190d7c56aad0a71c7f1d2d6b2bf48b0448194231/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=190d7c56aad0a71c7f1d2d6b2bf48b0448194231",patch:`@@ -10,7 +10,7 @@
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
     - 合わせて都内公立中高のインターナショナルスクール化支援を実施し、東京近郊の中高生に最高峰のグローバル教育環境を提供`}]},{oid:"7ab39ffd47411266e827636390b0bed3e6418882",message:"Update others.md",committedDate:"2024-07-01T13:42:34Z",author:{name:"tokshibata",email:"48014497+tokshibata@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/7ab39ffd47411266e827636390b0bed3e6418882",files:[{sha:"d5289f1cfac2c0f5a804d3f1a83460c17d23d159",filename:"docs/manifest/others.md",status:"modified",additions:3,deletions:2,changes:5,blob_url:"https://github.com/takahiroanno2024/election2024/blob/7ab39ffd47411266e827636390b0bed3e6418882/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/7ab39ffd47411266e827636390b0bed3e6418882/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=7ab39ffd47411266e827636390b0bed3e6418882",patch:`@@ -20,7 +20,8 @@
         - ディマンドリスポンスの仕組みを拡充。より広い都民にとってメリットを生み、環境インパクトを向上する方法を模索
             - 参考）<https://www.enecho.meti.go.jp/category/electricity_and_gas/electricity_measures/dr/dr.html>
             - 参考）<https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2024/03/28/66.html>
-        - 電力市場をAIテクノロジーを用いて最適化
-            - 参考）<https://www.global.toshiba/jp/technology/corporate/rdc/rd/topics/21/2112-02.html>
+        - 電力市場をAIテクノロジーを用いて最適化する技術企業への支援
+            - 参考）<https://exawizards.com/archives/24799/>
+            - 参考）<https://www.nikkei.com/article/DGXZQOUC261300W4A420C2000000/>
     - その他クリーンテック技術の革新に向けた技術企業への支援
     - 安全を確保したうえでの原子力発電再稼働に向けた検討の推進・都としての働きかけ`}]},{oid:"97b77102463431c2a110af6fbab29b38efa5a3ba",message:"Update others.md",committedDate:"2024-07-01T13:24:47Z",author:{name:"tokshibata",email:"48014497+tokshibata@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/97b77102463431c2a110af6fbab29b38efa5a3ba",files:[{sha:"fce1fef68f735380e87e4075737493ac0978839c",filename:"docs/manifest/others.md",status:"modified",additions:2,deletions:1,changes:3,blob_url:"https://github.com/takahiroanno2024/election2024/blob/97b77102463431c2a110af6fbab29b38efa5a3ba/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/97b77102463431c2a110af6fbab29b38efa5a3ba/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=97b77102463431c2a110af6fbab29b38efa5a3ba",patch:`@@ -17,8 +17,9 @@
     - 島しょ部における浮体式洋上風力推進のための企業の技術開発支援と実装のための特区化
     - 住宅の断熱義務化（ZEH、ZEB推進）
     - テクノロジーにおける電力消費・販売の最適化
-        - ディマンドリスポンスの仕組みを構築。供給量に応じて電力消費を最適化した都民に東京都ポイントの付与で還元
+        - ディマンドリスポンスの仕組みを拡充。より広い都民にとってメリットを生み、環境インパクトを向上する方法を模索
             - 参考）<https://www.enecho.meti.go.jp/category/electricity_and_gas/electricity_measures/dr/dr.html>
+            - 参考）<https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2024/03/28/66.html>
         - 電力市場をAIテクノロジーを用いて最適化
             - 参考）<https://www.global.toshiba/jp/technology/corporate/rdc/rd/topics/21/2112-02.html>
     - その他クリーンテック技術の革新に向けた技術企業への支援`}]},{oid:"1b9e1007c0cf700e23a2ed618efae8cc407f64d3",message:"ファイル位置修正&Lint",committedDate:"2024-07-01T13:08:59Z",author:{name:"Imaizumi Takatsugu",email:"takatsugu.imaizumi@mntsq.com"},url:"https://github.com/takahiroanno2024/election2024/commit/1b9e1007c0cf700e23a2ed618efae8cc407f64d3",files:[{sha:"3ea7a8dde72ac0e61b111c356b0e5f942537019f",filename:"docs/manifest/others.md",status:"added",additions:25,deletions:0,changes:25,blob_url:"https://github.com/takahiroanno2024/election2024/blob/1b9e1007c0cf700e23a2ed618efae8cc407f64d3/docs%2Fmanifest%2Fothers.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/1b9e1007c0cf700e23a2ed618efae8cc407f64d3/docs%2Fmanifest%2Fothers.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fothers.md?ref=1b9e1007c0cf700e23a2ed618efae8cc407f64d3",patch:`@@ -0,0 +1,25 @@
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
+    - 安全を確保したうえでの原子力発電再稼働に向けた検討の推進・都としての働きかけ`}]},{oid:"c68e4cc5ff539073a22eab3c1ddd400897ad7561",message:"Update democracy.md",committedDate:"2024-07-01T12:05:15Z",author:{name:"tokshibata",email:"48014497+tokshibata@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/c68e4cc5ff539073a22eab3c1ddd400897ad7561",files:[{sha:"d342feb1f1db0805f86cf7d9d0dbdc20e0e37154",filename:"docs/manifest/democracy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/c68e4cc5ff539073a22eab3c1ddd400897ad7561/docs%2Fmanifest%2Fdemocracy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/c68e4cc5ff539073a22eab3c1ddd400897ad7561/docs%2Fmanifest%2Fdemocracy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fdemocracy.md?ref=c68e4cc5ff539073a22eab3c1ddd400897ad7561",patch:`@@ -131,4 +131,4 @@
     - デジタル民主主義では、意見を多数決で採用したりせず、出てきた意見を基にエビデンスを踏まえて政策立案を行う
     - そのため意見表明の段階では、身分確認などでハードルを上げるのではなく、広く参加しやすいプラットフォームを提供する
 - 一方で、投票などで数を意思決定の基準とする場合は、マイナンバーカードなどのテクノロジーを活用し、東京都民を正しく絞り込む
-- 荒らしに該当するような攻撃的・差別的コメントについては、今回のgithubの仕組みでも活用しているAIによるフィルタリングを用いて、コメント別に管理をしていく
+- 著しく不適切なコメント（攻撃的・差別的コメントなど）については、今回のgithubの仕組みでも活用しているAIによるフィルタリングを用いて、コメント別に管理をしていく`}]},{oid:"a2ad731f14aa707fe6c0d79d5e94f3d5e6d94301",message:"Update democracy.md　荒らし対策",committedDate:"2024-07-01T11:26:08Z",author:{name:"tokshibata",email:"48014497+tokshibata@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/a2ad731f14aa707fe6c0d79d5e94f3d5e6d94301",files:[{sha:"8d4800ccaab6e87989272fbb8eaeaa7fb073a288",filename:"docs/manifest/democracy.md",status:"modified",additions:7,deletions:0,changes:7,blob_url:"https://github.com/takahiroanno2024/election2024/blob/a2ad731f14aa707fe6c0d79d5e94f3d5e6d94301/docs%2Fmanifest%2Fdemocracy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/a2ad731f14aa707fe6c0d79d5e94f3d5e6d94301/docs%2Fmanifest%2Fdemocracy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fdemocracy.md?ref=a2ad731f14aa707fe6c0d79d5e94f3d5e6d94301",patch:`@@ -125,3 +125,10 @@
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
 - 文末の句点を削除`,committedDate:"2024-06-29T14:55:48Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/ea09f75acad77004576396091de46f7add7136c9",files:[{sha:"a85fd8639a59697218003acd3e6a0a4d5d5cd26a",filename:"docs/manifest/democracy.md",status:"modified",additions:5,deletions:5,changes:10,blob_url:"https://github.com/takahiroanno2024/election2024/blob/ea09f75acad77004576396091de46f7add7136c9/docs%2Fmanifest%2Fdemocracy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/ea09f75acad77004576396091de46f7add7136c9/docs%2Fmanifest%2Fdemocracy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fdemocracy.md?ref=ea09f75acad77004576396091de46f7add7136c9",patch:`@@ -30,7 +30,7 @@
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
 
 ## 政治参加の課題である「参加率の低迷」を打破する`}]},{oid:"3abb7373e0a89cca397be773d1dac2304aa6ed56",message:"Update economy.md : 文末表現の統一",committedDate:"2024-06-29T14:54:25Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/3abb7373e0a89cca397be773d1dac2304aa6ed56",files:[{sha:"b8a4c616e96d413561afff7b45c52bad4b4fb08d",filename:"docs/manifest/economy.md",status:"modified",additions:3,deletions:3,changes:6,blob_url:"https://github.com/takahiroanno2024/election2024/blob/3abb7373e0a89cca397be773d1dac2304aa6ed56/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/3abb7373e0a89cca397be773d1dac2304aa6ed56/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=3abb7373e0a89cca397be773d1dac2304aa6ed56",patch:`@@ -38,9 +38,9 @@
 ## 強い技術企業の育成・誘致できると、経済が活性化し所得水準が向上
 
 - 強い技術企業の育成・誘致が所得向上に繋がった事例
-    - 自動車産業...世界有数の大企業であるトヨタの本社周辺には「企業城下町」と呼ばれる都市が形成されている。
-    - ソフトウェア産業...米西海岸のベイエリアやインドのバンガロールには大学・研究機関が集積していたため、強い技術企業が拠点を置いたことで新しい街が生まれた。
-    - 半導体産業...熊本県では半導体工場誘致に伴い、人口流入が顕著。TSMC直雇用は2000人程度だが、暮らしを支える産業が登場することでそのほかにもたくさんの雇用が生まれ経済効果も出ている。
+    - 自動車産業...世界有数の大企業であるトヨタの本社周辺には「企業城下町」と呼ばれる都市が形成されている
+    - ソフトウェア産業...米西海岸のベイエリアやインドのバンガロールには大学・研究機関が集積していたため、強い技術企業が拠点を置いたことで新しい街が生まれた
+    - 半導体産業...熊本県では半導体工場誘致に伴い、人口流入が顕著。TSMC直雇用は2000人程度だが、暮らしを支える産業が登場することでそのほかにもたくさんの雇用が生まれ経済効果も出ている
 
 ## 技術企業が集まると、既存産業のさらなる発展にも繋がる
 `}]},{oid:"f2302aad10b1777b0c861bc2ee4b5bae21dbd771",message:"Merge branch 'main' into patch-1",committedDate:"2024-06-29T14:53:54Z",author:{name:"filialbrilliant",email:"37357820+filialbrilliant@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/f2302aad10b1777b0c861bc2ee4b5bae21dbd771",files:[{sha:"ad449d0d4fa3cc12cf5e5250372c1e63752a6e86",filename:"docs/manifest/care.md",status:"modified",additions:4,deletions:3,changes:7,blob_url:"https://github.com/takahiroanno2024/election2024/blob/f2302aad10b1777b0c861bc2ee4b5bae21dbd771/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/f2302aad10b1777b0c861bc2ee4b5bae21dbd771/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=f2302aad10b1777b0c861bc2ee4b5bae21dbd771",patch:`@@ -44,14 +44,15 @@
 
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
 - 文末の句点を削除`,committedDate:"2024-06-29T14:53:26Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/2ba3e5341a57ba8b0195940b8a0bd6d5738098bb",files:[{sha:"e015a085627fae7f28d87131c6539ba44d865ade",filename:"docs/manifest/administration.md",status:"modified",additions:5,deletions:5,changes:10,blob_url:"https://github.com/takahiroanno2024/election2024/blob/2ba3e5341a57ba8b0195940b8a0bd6d5738098bb/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/2ba3e5341a57ba8b0195940b8a0bd6d5738098bb/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=2ba3e5341a57ba8b0195940b8a0bd6d5738098bb",patch:`@@ -10,7 +10,7 @@
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
 - 文末の句点を削除`,committedDate:"2024-06-29T14:51:56Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/d34b7d1da4d639d4cff1be4902a3ff00ace32d2d",files:[{sha:"c16166db49611f5abd2a5c01622d011d4a241a73",filename:"docs/manifest/care.md",status:"modified",additions:28,deletions:28,changes:56,blob_url:"https://github.com/takahiroanno2024/election2024/blob/d34b7d1da4d639d4cff1be4902a3ff00ace32d2d/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/d34b7d1da4d639d4cff1be4902a3ff00ace32d2d/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=d34b7d1da4d639d4cff1be4902a3ff00ace32d2d",patch:`@@ -30,64 +30,64 @@
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
 - 文末の句点を削除`,committedDate:"2024-06-29T14:47:36Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/6642e1058f9384c6bde17185417ba08a055dd281",files:[{sha:"528764e8be5646048ffbe16566d7e6e7b91ba53b",filename:"docs/manifest/economy.md",status:"modified",additions:17,deletions:16,changes:33,blob_url:"https://github.com/takahiroanno2024/election2024/blob/6642e1058f9384c6bde17185417ba08a055dd281/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/6642e1058f9384c6bde17185417ba08a055dd281/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=6642e1058f9384c6bde17185417ba08a055dd281",patch:`@@ -62,7 +62,7 @@
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
     - 合わせて都内公立中高のインターナショナルスクール化支援を実施し、東京近郊の中高生に最高峰のグローバル教育環境を提供`}]},{oid:"c3ee2215b22f5183f9447ac26eeaac6fd329267b",message:"Add HPVワクチンの男性任意接種助成",committedDate:"2024-06-29T04:14:43Z",author:{name:"Minami Ueda",email:"minami.ueda@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/c3ee2215b22f5183f9447ac26eeaac6fd329267b",files:[{sha:"ad449d0d4fa3cc12cf5e5250372c1e63752a6e86",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:0,changes:1,blob_url:"https://github.com/takahiroanno2024/election2024/blob/c3ee2215b22f5183f9447ac26eeaac6fd329267b/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/c3ee2215b22f5183f9447ac26eeaac6fd329267b/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=c3ee2215b22f5183f9447ac26eeaac6fd329267b",patch:`@@ -47,6 +47,7 @@
     - \`#7119\`(救急安心事業センター) / \`#8000\`(子ども医療電話相談事業) からオンライン診療窓口を含む医療機関紹介
     - オンライン診療とバックアップ医療機関の情報連携の動線整備
     - 24時間調剤薬局の充実、コンビニでの処方薬受け取りが可能な特区の設立に向けた手上げ
+    - 男性のHPVワクチン任意接種費用の全額助成
 - 高齢者とその家族向けには、自分らしい一生を家族と共有しながら安心して暮らせる東京を作る。
     - ”自分らしい生き方”をアプリで定期的に振り返り周囲の人と共有
     - 認知症になった場合も含めて、自分の思いの通りに健康・財産の管理ができる安全な仕組みを技術で作りあげる。`}]},{oid:"91af15c7b0a91356a79156bebbc03e9df01ac688",message:`Merge pull request #71 from masatosasano2/patch-7

Update education.md：デュアル・デグリー → デュアル・ディグリー制度（複数学位取得制度）`,committedDate:"2024-06-28T10:22:21Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/91af15c7b0a91356a79156bebbc03e9df01ac688",files:[{sha:"90f79af0e273f0eb19cfdb60f632deefe58001f9",filename:"docs/manifest/education.md",status:"modified",additions:2,deletions:2,changes:4,blob_url:"https://github.com/takahiroanno2024/election2024/blob/91af15c7b0a91356a79156bebbc03e9df01ac688/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/91af15c7b0a91356a79156bebbc03e9df01ac688/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=91af15c7b0a91356a79156bebbc03e9df01ac688",patch:`@@ -20,7 +20,7 @@
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
         - 海外大学の学生が東京都立大学の学位取得のため東京に訪れる機会を創出し、人材交流を図れる`}]},{oid:"81daad64f027f37e801b95106ad6ceb670c9ee9b",message:"Merge branch 'main' into patch-2",committedDate:"2024-06-28T10:21:30Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/81daad64f027f37e801b95106ad6ceb670c9ee9b",files:[{sha:"65beb6be716ad46f72533274e96a463682749177",filename:"docs/manifest/administration.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/81daad64f027f37e801b95106ad6ceb670c9ee9b/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/81daad64f027f37e801b95106ad6ceb670c9ee9b/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=81daad64f027f37e801b95106ad6ceb670c9ee9b",patch:`@@ -43,7 +43,7 @@
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

issue #212 を踏まえて、政策マニフェストへの変更提案をいたします。`,committedDate:"2024-06-28T09:31:58Z",author:{name:"micthell712",email:"llehctim.k@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/fbe607e64b59278765ee5dff4fd14115ba1e16a7",files:[{sha:"a23f1f581d874187f8bd786f68a3a5ba421dc3b3",filename:"docs/manifest/education.md",status:"modified",additions:8,deletions:2,changes:10,blob_url:"https://github.com/takahiroanno2024/election2024/blob/fbe607e64b59278765ee5dff4fd14115ba1e16a7/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/fbe607e64b59278765ee5dff4fd14115ba1e16a7/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=fbe607e64b59278765ee5dff4fd14115ba1e16a7",patch:`@@ -55,7 +55,7 @@
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
 `}]},{oid:"938b3f3d503cc36908d2238ee9eee438964ea9e2",message:"Merge pull request #9 from masatosasano2/patch-1",committedDate:"2024-06-28T07:53:22Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/938b3f3d503cc36908d2238ee9eee438964ea9e2",files:[{sha:"3185bc6cd07888e37c8d3f2c7e1815f3ae11b5fb",filename:"docs/manifest/democracy.md",status:"modified",additions:1,deletions:0,changes:1,blob_url:"https://github.com/takahiroanno2024/election2024/blob/938b3f3d503cc36908d2238ee9eee438964ea9e2/docs%2Fmanifest%2Fdemocracy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/938b3f3d503cc36908d2238ee9eee438964ea9e2/docs%2Fmanifest%2Fdemocracy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fdemocracy.md?ref=938b3f3d503cc36908d2238ee9eee438964ea9e2",patch:`@@ -106,6 +106,7 @@
     - 都民からの賛同を一定得たものは、都議会での議題に挙げる
 - 都民による政策議論
     - 都議会の論点に対して、都民からも広く意見を募集。
+    - 公的な情報発信を担うWEBサイトやアプリに意見投稿の導線を追加し、気になったことをその場でフィードバックできるようにする。
     - どういった意見があるのかを可視化し、閉じた議会の中だけでは得られない視点を取り込んでよりよい政策決定へ
 
 ## 政治参加の課題である「参加率の低迷」を打破する`}]},{oid:"daecd286f2ae6cfb7abd79190f9b741637fea87a",message:`医療パートのブロードリスニング取込み

医療パートのブロードリスニングの結果を取り込むもの。\r
様々意見はあるが、都として実施する内容としてはisses＃6のデータの取得と可視化が基礎であるという点を反映するもの。\r
他の認知症初期症状の発症に関する深掘りやコロナ後遺症の実態もまずは可視化することが重要。`,committedDate:"2024-06-28T06:36:40Z",author:{name:"mengoku",email:"alterethicstokyo@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/daecd286f2ae6cfb7abd79190f9b741637fea87a",files:[{sha:"51fd77e7df995cccc2d0fc9b9bd832ab2d8b16da",filename:"docs/manifest/care.md",status:"modified",additions:5,deletions:0,changes:5,blob_url:"https://github.com/takahiroanno2024/election2024/blob/daecd286f2ae6cfb7abd79190f9b741637fea87a/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/daecd286f2ae6cfb7abd79190f9b741637fea87a/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=daecd286f2ae6cfb7abd79190f9b741637fea87a",patch:`@@ -11,6 +11,7 @@
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
education.mdしか確認していませんが、資料全体を通して同様に表現・表記を統一した方がいいので、もし指針がなければ先に整備した方が良いかと思います。`,committedDate:"2024-06-27T08:48:03Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/23980ce3e483579a3cb2892b86f0c36af33b1f37",files:[{sha:"9f755fa26cc660eb9f3094c9c5c903dac383bc24",filename:"docs/manifest/education.md",status:"modified",additions:26,deletions:25,changes:51,blob_url:"https://github.com/takahiroanno2024/election2024/blob/23980ce3e483579a3cb2892b86f0c36af33b1f37/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/23980ce3e483579a3cb2892b86f0c36af33b1f37/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=23980ce3e483579a3cb2892b86f0c36af33b1f37",patch:`@@ -24,12 +24,12 @@
 
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

パーセントエンコーディングされたscrapboxのURLを可読化した`,committedDate:"2024-06-27T07:17:00Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/336e5601bbf806d7eac86357d318b0c2fda6e523",files:[{sha:"9309ebc6940004d3aac6cd6d97b58f4c4fb38379",filename:"docs/manifest/democracy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/336e5601bbf806d7eac86357d318b0c2fda6e523/docs%2Fmanifest%2Fdemocracy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/336e5601bbf806d7eac86357d318b0c2fda6e523/docs%2Fmanifest%2Fdemocracy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fdemocracy.md?ref=336e5601bbf806d7eac86357d318b0c2fda6e523",patch:`@@ -38,7 +38,7 @@
 
 - 一人の声を多数へ発信するブロードキャストだけではなく、多くの声を上手に収集するブロードリスニングが必要
     - 既存の意見募集は、多数の意見をそのまま聴くため、受け取り側がパンクする
-    - <https://scrapbox.io/nishio/%E3%83%96%E3%83%AD%E3%83%BC%E3%83%89%E3%83%AA%E3%82%B9%E3%83%8B%E3%83%B3%E3%82%B0>
+    - [https://scrapbox.io/nishio/ブロードリスニング](https://scrapbox.io/nishio/%E3%83%96%E3%83%AD%E3%83%BC%E3%83%89%E3%83%AA%E3%82%B9%E3%83%8B%E3%83%B3%E3%82%B0)
 - テクノロジーを使って、「発信」だけでなく「受信」をアップデート
 
 ## 意見表明のハードルを下げる新手段を提案`}]},{oid:"b127bd936638a28e468daa35f50a0109a141120f",message:`Merge pull request #156 from ruechang2/patch-2

Update care.md`,committedDate:"2024-06-27T07:14:45Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/b127bd936638a28e468daa35f50a0109a141120f",files:[{sha:"c9aa806aee6df127e483ced5e2ed589892eb703f",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/b127bd936638a28e468daa35f50a0109a141120f/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/b127bd936638a28e468daa35f50a0109a141120f/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=b127bd936638a28e468daa35f50a0109a141120f",patch:"@@ -44,7 +44,7 @@\n \n - 現役世代向けには、子供の発熱にも夜間休日の間に対応できて安心して暮らせる東京を作る。\n     - 夜間・休日オンライン診療と処方受け取りの充実\n-    - `#7119` / `#8000` からオンライン診療窓口を含む医療機関紹介\n+    - `#7119`(救急安心事業センター) / `#8000`(子ども医療電話相談事業) からオンライン診療窓口を含む医療機関紹介\n     - オンライン診療とバックアップ医療機関の情報連携の動線整備\n     - 24時間調剤薬局の充実、コンビニでの処方薬受け取りが可能な特区の設立に向けた手上げ\n - 高齢者とその家族向けには、自分らしい一生を家族と共有しながら安心して暮らせる東京を作る。"}]},{oid:"5234bd421cefdf7f48dd31d64fb653dd284b5318",message:"Update education.md：単位互換制度 → デュアル・ディグリー制度（複数学位取得制度）",committedDate:"2024-06-26T18:34:55Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/5234bd421cefdf7f48dd31d64fb653dd284b5318",files:[{sha:"d0217b7f8b2983fcf12b1717d33481779aad6240",filename:"docs/manifest/education.md",status:"modified",additions:2,deletions:2,changes:4,blob_url:"https://github.com/takahiroanno2024/election2024/blob/5234bd421cefdf7f48dd31d64fb653dd284b5318/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/5234bd421cefdf7f48dd31d64fb653dd284b5318/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=5234bd421cefdf7f48dd31d64fb653dd284b5318",patch:`@@ -20,7 +20,7 @@
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

障がいを持つ→障がいのあるに修正`,committedDate:"2024-06-26T03:11:40Z",author:{name:"mengoku",email:"alterethicstokyo@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/cde4b5f6933a5a6ba6677bd67f96cc8b3f965878",files:[{sha:"fc842afd0e2af6ee7023ef3d80909b477631ed3c",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/cde4b5f6933a5a6ba6677bd67f96cc8b3f965878/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/cde4b5f6933a5a6ba6677bd67f96cc8b3f965878/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=cde4b5f6933a5a6ba6677bd67f96cc8b3f965878",patch:`@@ -61,7 +61,7 @@
 - 東京は防災の面から見ると以下のような特徴があります。
     - 人口密度が6400人/㎢
         - 迅速な避難や､きめ細かい支援の提供の難易度が高い。
-    - 障がいを持った方の人口が73万人、高齢者人口が311万人
+    - 障がいのある方の人口が73万人、高齢者人口が311万人
         - 多様なニーズを踏まえた､適切なケアを届ける必要がある。
     - 外国人人口が63万人
         - 災害時でもインクルーシブな東京になることは､移住の後押しに`}]},{oid:"225eb681bcaa8b30d5fa533630c1ff4af717b74f",message:":pencil2: fix typo in care.md",committedDate:"2024-06-25T03:10:12Z",author:{name:"WADA Yusuke",email:"catcher_in_the_dance_hall@yahoo.co.jp"},url:"https://github.com/takahiroanno2024/election2024/commit/225eb681bcaa8b30d5fa533630c1ff4af717b74f",files:[{sha:"18d479c1428a9c729bb9d460336a9fdae65559d1",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/225eb681bcaa8b30d5fa533630c1ff4af717b74f/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/225eb681bcaa8b30d5fa533630c1ff4af717b74f/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=225eb681bcaa8b30d5fa533630c1ff4af717b74f",patch:`@@ -51,7 +51,7 @@
     - ”自分らしい生き方”をアプリで定期的に振り返り周囲の人と共有
     - 認知症になった場合も含めて、自分の思いの通りに健康・財産の管理ができる安全な仕組みを技術で作りあげる。
     - 自身の治療方針をアプリに登録・定期的な更新を行うことで、意図しない治療・延命が行われることを防ぐ。
-- 医療従事者向けには、医師本来の仕事に集中し、安心して働ける東京を作りる。
+- 医療従事者向けには、医師本来の仕事に集中し、安心して働ける東京を作る。
     - 病院や介護施設の利用状況をデータベースとして最新化し、患者属性と掛け合わせ転院調整の自動マッチングし、”下り搬送”に関する医師の手間を圧縮
     - 生成AIを用いた入退院サマリの作成補助。
         - 七尾市の恵寿総合病院における実証実験では1/3の業務を自動化した実証実験結果あり。`}]},{oid:"0d7c1a196b2cdce53ac09d470029833a9b137767",message:"やや文言を修正。",committedDate:"2024-06-24T11:43:19Z",author:{name:"filialbrilliant",email:"37357820+filialbrilliant@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/0d7c1a196b2cdce53ac09d470029833a9b137767",files:[{sha:"136971aec699411d9226306c509ae47b6fc23327",filename:"docs/manifest/education.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/0d7c1a196b2cdce53ac09d470029833a9b137767/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/0d7c1a196b2cdce53ac09d470029833a9b137767/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=0d7c1a196b2cdce53ac09d470029833a9b137767",patch:`@@ -29,7 +29,7 @@
         - 2023年度の合計特殊出生率は0.99。
         - 2023年の出生者数86347人、前年比4750人減少。
 - 東京都は全国に比べて有配偶率が非常に低い。
-    - 有配偶率と有配偶出生率に要因分解すると、東京都は前者の要因が圧倒的に大きい。
+    - 有配偶率と有配偶出生率に要因分解すると、東京都は前者による押し下げ要因が圧倒的に大きい。
 - 夫婦の理想子供数と現存子供数には大きな差があり､理想実現に向けたサポート余地が存在。
     - 夫婦の理想子ども数の平均は2.25だが、実際の出生子ども数は1.73と乖離。
 `}]},{oid:"edae25014e2bd560b22544193ee638e980e7ff31",message:`少子化の原因の多くが有配偶率であることを要因分解で説明。

根拠は内閣府の令和5年度「年次経済財政報告」の「第2-2-18図」`,committedDate:"2024-06-24T11:42:36Z",author:{name:"filialbrilliant",email:"37357820+filialbrilliant@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/edae25014e2bd560b22544193ee638e980e7ff31",files:[{sha:"3ee7589ff934e5392897bbe07948b5840fb18d34",filename:"docs/manifest/education.md",status:"modified",additions:3,deletions:4,changes:7,blob_url:"https://github.com/takahiroanno2024/election2024/blob/edae25014e2bd560b22544193ee638e980e7ff31/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/edae25014e2bd560b22544193ee638e980e7ff31/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=edae25014e2bd560b22544193ee638e980e7ff31",patch:`@@ -22,15 +22,14 @@
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

#7119と#8000に追記（番号だけだと何のことを指しているか分かりづらいため）`,committedDate:"2024-06-24T10:42:45Z",author:{name:"ruechang2",email:"47976579+ruechang2@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/ab0426bded38df4c277b852e5b3bb22772de823b",files:[{sha:"33dae73be6d0b9e36266b900837ef40aa55430b2",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/ab0426bded38df4c277b852e5b3bb22772de823b/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/ab0426bded38df4c277b852e5b3bb22772de823b/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=ab0426bded38df4c277b852e5b3bb22772de823b",patch:"@@ -44,7 +44,7 @@\n \n - 現役世代向けには、子供の発熱にも夜間休日の間に対応できて安心して暮らせる東京を作る。\n     - 夜間・休日オンライン診療と処方受け取りの充実\n-    - `#7119` / `#8000` からオンライン診療窓口を含む医療機関紹介\n+    - `#7119`(救急安心事業センター) / `#8000`(子ども医療電話相談事業) からオンライン診療窓口を含む医療機関紹介\n     - オンライン診療とバックアップ医療機関の情報連携の動線整備\n     - 24時間調剤薬局の充実、コンビニでの処方薬受け取りが可能な特区の設立に向けた手上げ\n - 高齢者とその家族向けには、自分らしい一生を家族と共有しながら安心して暮らせる東京を作る。"}]},{oid:"ce0010ea1c0887159d9662e874dae7c92d06e929",message:"有配偶率の計算ミスを訂正。",committedDate:"2024-06-24T09:03:46Z",author:{name:"filialbrilliant",email:"37357820+filialbrilliant@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/ce0010ea1c0887159d9662e874dae7c92d06e929",files:[{sha:"1f3675e363e70c46e3b2f4ec7f3c5a3e173bedf7",filename:"docs/manifest/education.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/ce0010ea1c0887159d9662e874dae7c92d06e929/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/ce0010ea1c0887159d9662e874dae7c92d06e929/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=ce0010ea1c0887159d9662e874dae7c92d06e929",patch:`@@ -30,7 +30,7 @@
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
有配偶出生率=出生数（母が15～49歳）/人口（15～49歳、女子、日本人、有配偶）`,committedDate:"2024-06-24T07:48:42Z",author:{name:"filialbrilliant",email:"37357820+filialbrilliant@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/7d195a52cc60df3fafea3dcb2d3e16e37784845e",files:[{sha:"702b76ba230989b2297c92849b6202be50dd9b7e",filename:"docs/manifest/education.md",status:"modified",additions:4,deletions:1,changes:5,blob_url:"https://github.com/takahiroanno2024/election2024/blob/7d195a52cc60df3fafea3dcb2d3e16e37784845e/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/7d195a52cc60df3fafea3dcb2d3e16e37784845e/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=7d195a52cc60df3fafea3dcb2d3e16e37784845e",patch:`@@ -22,12 +22,15 @@
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
 `}]},{oid:"6a0d841d7f406052163136c4849281794b1d74f3",message:"パーセントエンコーディングされたscrapboxのURLを可読化した",committedDate:"2024-06-24T01:04:29Z",author:{name:"takker",email:"37929109+takker99@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/6a0d841d7f406052163136c4849281794b1d74f3",files:[{sha:"9309ebc6940004d3aac6cd6d97b58f4c4fb38379",filename:"docs/manifest/democracy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/6a0d841d7f406052163136c4849281794b1d74f3/docs%2Fmanifest%2Fdemocracy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/6a0d841d7f406052163136c4849281794b1d74f3/docs%2Fmanifest%2Fdemocracy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fdemocracy.md?ref=6a0d841d7f406052163136c4849281794b1d74f3",patch:`@@ -38,7 +38,7 @@
 
 - 一人の声を多数へ発信するブロードキャストだけではなく、多くの声を上手に収集するブロードリスニングが必要
     - 既存の意見募集は、多数の意見をそのまま聴くため、受け取り側がパンクする
-    - <https://scrapbox.io/nishio/%E3%83%96%E3%83%AD%E3%83%BC%E3%83%89%E3%83%AA%E3%82%B9%E3%83%8B%E3%83%B3%E3%82%B0>
+    - [https://scrapbox.io/nishio/ブロードリスニング](https://scrapbox.io/nishio/%E3%83%96%E3%83%AD%E3%83%BC%E3%83%89%E3%83%AA%E3%82%B9%E3%83%8B%E3%83%B3%E3%82%B0)
 - テクノロジーを使って、「発信」だけでなく「受信」をアップデート
 
 ## 意見表明のハードルを下げる新手段を提案`}]},{oid:"17da24dbbf0e1ff18824c3427b0bbdddb26b4a7e",message:`Merge pull request #37 from EG-easy/tidyup/fix-wrong-wording

Change title from 爆増 to 倍増`,committedDate:"2024-06-22T13:31:14Z",author:{name:"Imaizumi Takatsugu",email:"49748966+TakatsuguImaizumi@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/17da24dbbf0e1ff18824c3427b0bbdddb26b4a7e",files:[{sha:"994f95c73e1cfdc7dc264672c92abe06a0a38656",filename:"docs/manifest/economy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/17da24dbbf0e1ff18824c3427b0bbdddb26b4a7e/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/17da24dbbf0e1ff18824c3427b0bbdddb26b4a7e/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=17da24dbbf0e1ff18824c3427b0bbdddb26b4a7e",patch:`@@ -1,4 +1,4 @@
-# 【現役世代】新産業で所得爆増
+# 【現役世代】新産業で所得倍増
 
 ![economy_png](./../images/manifest_slides/economy_v1.0.png)
 `}]},{oid:"19197984a6b837e54e3307db0a885f6055a3969a",message:"Merge pull request #52 from babayoshihiko/babayoshihiko-care-2",committedDate:"2024-06-22T06:50:50Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/19197984a6b837e54e3307db0a885f6055a3969a",files:[{sha:"c3f50ee058a9c4d310e57da9a83b03e5ae60677b",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/19197984a6b837e54e3307db0a885f6055a3969a/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/19197984a6b837e54e3307db0a885f6055a3969a/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=19197984a6b837e54e3307db0a885f6055a3969a",patch:`@@ -49,7 +49,7 @@
     - 24時間調剤薬局の充実、コンビニでの処方薬受け取りが可能な特区の設立に向けた手上げ
 - 高齢者とその家族向けには、自分らしい一生を家族と共有しながら安心して暮らせる東京を作る。
     - ”自分らしい生き方”をアプリで定期的に振り返り周囲の人と共有
-    - 認知症になった場合でも、自分の思いの通りに健康・財産の管理ができる仕組みを周囲の人たちと技術で作りあげる。
+    - 認知症になった場合も含めて、自分の思いの通りに健康・財産の管理ができる安全な仕組みを技術で作りあげる。
     - 自身の治療方針をアプリに登録・定期的な更新を行うことで、意図しない治療・延命が行われることを防ぐ。
 - 医療従事者向けには、医師本来の仕事に集中し、安心して働ける東京を作りる。
     - 病院や介護施設の利用状況をデータベースとして最新化し、患者属性と掛け合わせ転院調整の自動マッチングし、”下り搬送”に関する医師の手間を圧縮`}]},{oid:"a5dbe626ac55e873bc6a11f13f4138ab9e0938f4",message:"Merge pull request #59 from masatosasano2/patch-4",committedDate:"2024-06-22T06:50:03Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/a5dbe626ac55e873bc6a11f13f4138ab9e0938f4",files:[{sha:"65beb6be716ad46f72533274e96a463682749177",filename:"docs/manifest/administration.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/a5dbe626ac55e873bc6a11f13f4138ab9e0938f4/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/a5dbe626ac55e873bc6a11f13f4138ab9e0938f4/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=a5dbe626ac55e873bc6a11f13f4138ab9e0938f4",patch:`@@ -43,7 +43,7 @@
     - 都庁の仕事を支えるシステム基盤の連携と効率化
     - 区市町村での人材・ノウハウの充実
 - 取り組むべきこと
-    - デジタルサービスのＵＩ改善の徹底
+    - デジタルサービスの使い勝手の改善の徹底
         - デジタルネイティブ以外の世代にも使いやすく便利なサービスを
     - デジタルの恩恵をより広く
         - 行政手続のみならず、各種政策や情報公開についてもデジタル化でアップデート`}]},{oid:"1ae0639d22da25a88659ed9ac99c62906431ea77",message:`Update economy.md: SakanaAI → Sakana AI

Sakana AI 株式会社 https://sakana.ai/ の公式名称に合わせるための変更です`,committedDate:"2024-06-22T06:40:32Z",author:{name:"laiso",email:"github@lai.so"},url:"https://github.com/takahiroanno2024/election2024/commit/1ae0639d22da25a88659ed9ac99c62906431ea77",files:[{sha:"bf4c5756947d7a92c4b2a6a1ad9e7c4dc43280b1",filename:"docs/manifest/economy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/1ae0639d22da25a88659ed9ac99c62906431ea77/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/1ae0639d22da25a88659ed9ac99c62906431ea77/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=1ae0639d22da25a88659ed9ac99c62906431ea77",patch:`@@ -67,7 +67,7 @@
     - アジア太平洋地域において、東京が近年より重視されつつある
         - 中国は地政学的リスクが高い
         - 日本の円安
-- OpenAI、Microsoft Research、SakanaAIなど、強い技術企業の拠点が東京に置かれ始めている
+- OpenAI、Microsoft Research、Sakana AIなど、強い技術企業の拠点が東京に置かれ始めている
 
 ## 「集め、育てる」機能をさらに伸ばす必要
 `}]},{oid:"9b0c7509c57304aa1e28d634a1b93c8509169662",message:`Update education.md：デュアル・デグリー → 単位互換制度

 - Xで用語がわかりにくいと指摘があったため\r
 - 用語の意味が国によって異なるため`,committedDate:"2024-06-22T06:00:36Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/9b0c7509c57304aa1e28d634a1b93c8509169662",files:[{sha:"9a9e4d1d76528212b08bdd30d867aba87b4a3cb8",filename:"docs/manifest/education.md",status:"modified",additions:2,deletions:2,changes:4,blob_url:"https://github.com/takahiroanno2024/election2024/blob/9b0c7509c57304aa1e28d634a1b93c8509169662/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/9b0c7509c57304aa1e28d634a1b93c8509169662/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=9b0c7509c57304aa1e28d634a1b93c8509169662",patch:`@@ -20,7 +20,7 @@
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
         - 海外大学の学生が東京都立大学の学位取得のため東京に訪れる機会を創出し、人材交流を図れる`}]},{oid:"f40118b4bee4065595bd1ebddbf573857e66d898",message:"Update administration.md: ＵＩ → 使い勝手",committedDate:"2024-06-22T01:47:11Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/f40118b4bee4065595bd1ebddbf573857e66d898",files:[{sha:"65beb6be716ad46f72533274e96a463682749177",filename:"docs/manifest/administration.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/f40118b4bee4065595bd1ebddbf573857e66d898/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/f40118b4bee4065595bd1ebddbf573857e66d898/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=f40118b4bee4065595bd1ebddbf573857e66d898",patch:`@@ -43,7 +43,7 @@
     - 都庁の仕事を支えるシステム基盤の連携と効率化
     - 区市町村での人材・ノウハウの充実
 - 取り組むべきこと
-    - デジタルサービスのＵＩ改善の徹底
+    - デジタルサービスの使い勝手の改善の徹底
         - デジタルネイティブ以外の世代にも使いやすく便利なサービスを
     - デジタルの恩恵をより広く
         - 行政手続のみならず、各種政策や情報公開についてもデジタル化でアップデート`}]},{oid:"aa9357dd0d11eb76f08f642c4aa587822f72b874",message:"Update education.md: STEAMの補足を追記",committedDate:"2024-06-22T01:42:54Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/aa9357dd0d11eb76f08f642c4aa587822f72b874",files:[{sha:"bc0ab51dae5c52dc2ec4755d7dc6441f1b4ad160",filename:"docs/manifest/education.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/aa9357dd0d11eb76f08f642c4aa587822f72b874/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/aa9357dd0d11eb76f08f642c4aa587822f72b874/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=aa9357dd0d11eb76f08f642c4aa587822f72b874",patch:`@@ -89,7 +89,7 @@
 
 ## 幼児教育・小学校の放課後を効率よく、豊かに
 
-- STEAM活動に触れられる新世代児童館の設置
+- STEAM活動（Science、Technology、Engineering、Art、Mathematics）に触れられる新世代児童館の設置
     - 児童館等、子どもの放課後施設でSTEAM活動に触れられるようなハード（3Dプリンターなど）・ソフト（コンテンツ・スタッフ）を整備し児童生徒がテクノロジーに触れられる環境を作る。
     - 基礎自治体が新世代児童館に拡充する際に助成し、転換を促進する
 - 学童・保育業務のDX推進`}]},{oid:"3aa66fb22740f5f8b6bb4752bb76d74d9989f141",message:`Update care.md

More "safe" description`,committedDate:"2024-06-21T23:39:13Z",author:{name:"BABA Yoshihiko",email:"baba.yoshihiko@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/3aa66fb22740f5f8b6bb4752bb76d74d9989f141",files:[{sha:"c3f50ee058a9c4d310e57da9a83b03e5ae60677b",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/3aa66fb22740f5f8b6bb4752bb76d74d9989f141/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/3aa66fb22740f5f8b6bb4752bb76d74d9989f141/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=3aa66fb22740f5f8b6bb4752bb76d74d9989f141",patch:`@@ -49,7 +49,7 @@
     - 24時間調剤薬局の充実、コンビニでの処方薬受け取りが可能な特区の設立に向けた手上げ
 - 高齢者とその家族向けには、自分らしい一生を家族と共有しながら安心して暮らせる東京を作る。
     - ”自分らしい生き方”をアプリで定期的に振り返り周囲の人と共有
-    - 認知症になった場合でも、自分の思いの通りに健康・財産の管理ができる仕組みを周囲の人たちと技術で作りあげる。
+    - 認知症になった場合も含めて、自分の思いの通りに健康・財産の管理ができる安全な仕組みを技術で作りあげる。
     - 自身の治療方針をアプリに登録・定期的な更新を行うことで、意図しない治療・延命が行われることを防ぐ。
 - 医療従事者向けには、医師本来の仕事に集中し、安心して働ける東京を作りる。
     - 病院や介護施設の利用状況をデータベースとして最新化し、患者属性と掛け合わせ転院調整の自動マッチングし、”下り搬送”に関する医師の手間を圧縮`}]},{oid:"a945c25637738e996b5989a99fcaf43b8f3f36a9",message:`Update economy.md

”中国”など、特定の国の名指しは避けた方が良いと思います。実際には周辺国や都市と緊密な関係を築かなければなりません。`,committedDate:"2024-06-21T17:15:35Z",author:{name:"tomoto3",email:"149496794+tomoto3@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/a945c25637738e996b5989a99fcaf43b8f3f36a9",files:[{sha:"e27ece42207341b543eb884e28537f73c5d591de",filename:"docs/manifest/economy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/a945c25637738e996b5989a99fcaf43b8f3f36a9/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/a945c25637738e996b5989a99fcaf43b8f3f36a9/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=a945c25637738e996b5989a99fcaf43b8f3f36a9",patch:`@@ -65,7 +65,7 @@
     - 「AIを使った製品とサービスには欠点よりも恩恵がある」の質問に対して、日本は42%が「そう思う」と回答。イギリス38%、ドイツが37%、アメリカ35%、カナダ32%、フランス31%。
 - 地政学観点
     - アジア太平洋地域において、東京が近年より重視されつつある
-        - 中国は地政学的リスクが高い
+        - 特に東アジア地域は地政学的な課題を抱えている
         - 日本の円安
 - OpenAI、Microsoft Research、SakanaAIなど、強い技術企業の拠点が東京に置かれ始めている
 `}]},{oid:"60241a78cca3bca31c95cadd10ed59693f9bc744",message:"Change title from 爆増 to 倍増",committedDate:"2024-06-21T13:50:55Z",author:{name:"EG-easy",email:"1018eguchi@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/60241a78cca3bca31c95cadd10ed59693f9bc744",files:[{sha:"5cc6ba370468556870c98e921c6a577bd7f44391",filename:"docs/manifest/economy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/60241a78cca3bca31c95cadd10ed59693f9bc744/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/60241a78cca3bca31c95cadd10ed59693f9bc744/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=60241a78cca3bca31c95cadd10ed59693f9bc744",patch:`@@ -1,4 +1,4 @@
-# 【現役世代】新産業で所得爆増
+# 【現役世代】新産業で所得倍増
 
 ![economy_png](./../images/manifest_slides/economy_v1.0.png)
 `}]},{oid:"f49253664f8854b72cb06942baf85b772a2281f7",message:`Merge pull request #12 from tomoto3/patch-1

Update economy.md`,committedDate:"2024-06-21T11:46:53Z",author:{name:"takahiroanno",email:"annyotaka@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/f49253664f8854b72cb06942baf85b772a2281f7",files:[{sha:"89ede41bd775667f69b5a0522a9d9fa5003b0b52",filename:"docs/manifest/economy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/f49253664f8854b72cb06942baf85b772a2281f7/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/f49253664f8854b72cb06942baf85b772a2281f7/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=f49253664f8854b72cb06942baf85b772a2281f7",patch:`@@ -88,7 +88,7 @@
     - 研究開発機関/スタートアップ拠点を集積
         - 東京都内の既存の大学や研究機関と連携
         - スタートアップグローバルキャンパス構想＠恵比寿との連携
-    - グローバルにおける存在感の向上
+    - 東京を国際的な技術革新の中心地とする
         - スタートアップや成長産業の関係者が、世界中から東京に集まるイベントの開催
     - 上記の結果として、都内の企業の全体的なレベルアップ＆海外投資家の誘致（ミドル/レイターステージでの資金注入）を実現
 - 東京西部エリアを「実装＆課題解決の場」とします`}]},{oid:"d1475262bef40ff904ebbe02cab52fe2aaedcdb0",message:`Merge pull request #21 from masatosasano2/patch-3

fix typo 202年25月号 → 2022年5月号`,committedDate:"2024-06-21T11:17:16Z",author:{name:"Imaizumi Takatsugu",email:"49748966+TakatsuguImaizumi@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/d1475262bef40ff904ebbe02cab52fe2aaedcdb0",files:[{sha:"39ddb9b77fd4c665d1d35c682ea7c9f6df06eb59",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/d1475262bef40ff904ebbe02cab52fe2aaedcdb0/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/d1475262bef40ff904ebbe02cab52fe2aaedcdb0/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=d1475262bef40ff904ebbe02cab52fe2aaedcdb0",patch:`@@ -23,7 +23,7 @@
         - しかし、夜間休日に医療にアクセスすることは難しく、育児や仕事の負担になっている。
     - 高齢者にとっての認知症リスク
         - 認知症大国となる日本。認知症の高齢者が保有する資産は東京だけで19.2兆円
-            - 三井住友信託銀行調査月報202年25月号　「経済の動き～膨らむ認知症高齢者の保有資産」からのデータ
+            - 三井住友信託銀行調査月報2022年5月号　「経済の動き～膨らむ認知症高齢者の保有資産」からのデータ
         - 自分の意図した通りの財産の管理や治療の方法を周囲に正しく伝える機会がない。
     - 医療従事者にとって形式ばかりの働き方改革
         - 労働時間の上限が設定された中、患者の数は増加予測`}]},{oid:"29b330c7900660df89bc72ce9356b78722eaf4d1",message:"fix typo 202年25月号 → 2022年5月号",committedDate:"2024-06-21T10:51:47Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/29b330c7900660df89bc72ce9356b78722eaf4d1",files:[{sha:"39ddb9b77fd4c665d1d35c682ea7c9f6df06eb59",filename:"docs/manifest/care.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/29b330c7900660df89bc72ce9356b78722eaf4d1/docs%2Fmanifest%2Fcare.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/29b330c7900660df89bc72ce9356b78722eaf4d1/docs%2Fmanifest%2Fcare.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fcare.md?ref=29b330c7900660df89bc72ce9356b78722eaf4d1",patch:`@@ -23,7 +23,7 @@
         - しかし、夜間休日に医療にアクセスすることは難しく、育児や仕事の負担になっている。
     - 高齢者にとっての認知症リスク
         - 認知症大国となる日本。認知症の高齢者が保有する資産は東京だけで19.2兆円
-            - 三井住友信託銀行調査月報202年25月号　「経済の動き～膨らむ認知症高齢者の保有資産」からのデータ
+            - 三井住友信託銀行調査月報2022年5月号　「経済の動き～膨らむ認知症高齢者の保有資産」からのデータ
         - 自分の意図した通りの財産の管理や治療の方法を周囲に正しく伝える機会がない。
     - 医療従事者にとって形式ばかりの働き方改革
         - 労働時間の上限が設定された中、患者の数は増加予測`}]},{oid:"8569232db8cb33cb6240c6feece1296af1247b98",message:"fix: typo",committedDate:"2024-06-21T10:28:59Z",author:{name:"Tomoya Ishizaki",email:"zaq1tomo@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/8569232db8cb33cb6240c6feece1296af1247b98",files:[{sha:"2c7d6e17494a493eb5a2d533a72b78f531859dfc",filename:"docs/manifest/education.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/8569232db8cb33cb6240c6feece1296af1247b98/docs%2Fmanifest%2Feducation.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/8569232db8cb33cb6240c6feece1296af1247b98/docs%2Fmanifest%2Feducation.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feducation.md?ref=8569232db8cb33cb6240c6feece1296af1247b98",patch:`@@ -145,7 +145,7 @@
 
 - 構造・仕組みへのアプローチ
     - ジェンダーに関わらず学びたいことを学べるようになるための支援を促進。特に、文理決定前に注力する
-    - 小学生・中学生向け職業体験（日本版Girs day）実施
+    - 小学生・中学生向け職業体験（日本版Girls'Day）実施
     - 校外での学びプログラムを、関心や認知特性に合わせてマッチングするプラットフォームを設立
     - 体験格差を助長しないためのバウチャー制度を検討
 - 学びの内容・コンテンツへのアプローチ`}]},{oid:"d4082cd5f81b35240af91da9c65501c15f10a659",message:"Update economy.md",committedDate:"2024-06-21T10:06:29Z",author:{name:"tomoto3",email:"149496794+tomoto3@users.noreply.github.com"},url:"https://github.com/takahiroanno2024/election2024/commit/d4082cd5f81b35240af91da9c65501c15f10a659",files:[{sha:"89ede41bd775667f69b5a0522a9d9fa5003b0b52",filename:"docs/manifest/economy.md",status:"modified",additions:1,deletions:1,changes:2,blob_url:"https://github.com/takahiroanno2024/election2024/blob/d4082cd5f81b35240af91da9c65501c15f10a659/docs%2Fmanifest%2Feconomy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/d4082cd5f81b35240af91da9c65501c15f10a659/docs%2Fmanifest%2Feconomy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Feconomy.md?ref=d4082cd5f81b35240af91da9c65501c15f10a659",patch:`@@ -88,7 +88,7 @@
     - 研究開発機関/スタートアップ拠点を集積
         - 東京都内の既存の大学や研究機関と連携
         - スタートアップグローバルキャンパス構想＠恵比寿との連携
-    - グローバルにおける存在感の向上
+    - 東京を国際的な技術革新の中心地とする
         - スタートアップや成長産業の関係者が、世界中から東京に集まるイベントの開催
     - 上記の結果として、都内の企業の全体的なレベルアップ＆海外投資家の誘致（ミドル/レイターステージでの資金注入）を実現
 - 東京西部エリアを「実装＆課題解決の場」とします`}]},{oid:"ef524bafe95484daf31dd2332fce0a0473aba03c",message:"refs #8 公的な情報発信用のWEBサイトやアプリに都政に対する意見表明への導線を追加してほしい",committedDate:"2024-06-21T09:37:34Z",author:{name:"sasano",email:"masatosasano2@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/ef524bafe95484daf31dd2332fce0a0473aba03c",files:[{sha:"a53ee6cd4e4ba88d062524eaa404640f9eba86d3",filename:"docs/manifest/democracy.md",status:"modified",additions:1,deletions:0,changes:1,blob_url:"https://github.com/takahiroanno2024/election2024/blob/ef524bafe95484daf31dd2332fce0a0473aba03c/docs%2Fmanifest%2Fdemocracy.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/ef524bafe95484daf31dd2332fce0a0473aba03c/docs%2Fmanifest%2Fdemocracy.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fdemocracy.md?ref=ef524bafe95484daf31dd2332fce0a0473aba03c",patch:`@@ -106,6 +106,7 @@
     - 都民からの賛同を一定得たものは、都議会での議題に挙げる
 - 都民による政策議論
     - 都議会の論点に対して、都民からも広く意見を募集。
+    - 公的な情報発信を担うWEBサイトやアプリに意見投稿の導線を追加し、気になったことをその場でフィードバックできるようにする。
     - どういった意見があるのかを可視化し、閉じた議会の中だけでは得られない視点を取り込んでよりよい政策決定へ
 
 ## 政治参加の課題である「参加率の低迷」を打破する`}]},{oid:"457c6054a2db5cf7cecadd0177769445c3b5b754",message:"initial commit",committedDate:"2024-06-21T06:18:50Z",author:{name:"Muneyoshi Inahara",email:"kainekominto299@gmail.com"},url:"https://github.com/takahiroanno2024/election2024/commit/457c6054a2db5cf7cecadd0177769445c3b5b754",files:[{sha:"7c8ffe613103adb6751e9fe75043da8125e43f16",filename:"docs/manifest/administration.md",status:"added",additions:145,deletions:0,changes:145,blob_url:"https://github.com/takahiroanno2024/election2024/blob/457c6054a2db5cf7cecadd0177769445c3b5b754/docs%2Fmanifest%2Fadministration.md",raw_url:"https://github.com/takahiroanno2024/election2024/raw/457c6054a2db5cf7cecadd0177769445c3b5b754/docs%2Fmanifest%2Fadministration.md",contents_url:"https://api.github.com/repos/takahiroanno2024/election2024/contents/docs%2Fmanifest%2Fadministration.md?ref=457c6054a2db5cf7cecadd0177769445c3b5b754",patch:`@@ -0,0 +1,145 @@
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
+    - 大学間のネットワークの拠点となる`}]}];var Fy={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function t(){for(var i="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(i=o(i,r(l)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return t.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var a="";for(var l in i)n.call(i,l)&&i[l]&&(a=o(a,l));return a}function o(i,a){return a?i?i+" "+a:i+a:i}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(Fy);var My=Fy.exports;const Ge=Jl(My);function pn(){return pn=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},pn.apply(null,arguments)}var Ly={exports:{}},Sn={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp=Symbol.for("react.element"),hp=Symbol.for("react.portal"),Du=Symbol.for("react.fragment"),$u=Symbol.for("react.strict_mode"),Bu=Symbol.for("react.profiler"),zu=Symbol.for("react.provider"),Hu=Symbol.for("react.context"),V5=Symbol.for("react.server_context"),Uu=Symbol.for("react.forward_ref"),Vu=Symbol.for("react.suspense"),Wu=Symbol.for("react.suspense_list"),Xu=Symbol.for("react.memo"),Gu=Symbol.for("react.lazy"),W5=Symbol.for("react.offscreen"),jy;jy=Symbol.for("react.module.reference");function dr(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case mp:switch(e=e.type,e){case Du:case Bu:case $u:case Vu:case Wu:return e;default:switch(e=e&&e.$$typeof,e){case V5:case Hu:case Uu:case Gu:case Xu:case zu:return e;default:return n}}case hp:return n}}}Sn.ContextConsumer=Hu;Sn.ContextProvider=zu;Sn.Element=mp;Sn.ForwardRef=Uu;Sn.Fragment=Du;Sn.Lazy=Gu;Sn.Memo=Xu;Sn.Portal=hp;Sn.Profiler=Bu;Sn.StrictMode=$u;Sn.Suspense=Vu;Sn.SuspenseList=Wu;Sn.isAsyncMode=function(){return!1};Sn.isConcurrentMode=function(){return!1};Sn.isContextConsumer=function(e){return dr(e)===Hu};Sn.isContextProvider=function(e){return dr(e)===zu};Sn.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===mp};Sn.isForwardRef=function(e){return dr(e)===Uu};Sn.isFragment=function(e){return dr(e)===Du};Sn.isLazy=function(e){return dr(e)===Gu};Sn.isMemo=function(e){return dr(e)===Xu};Sn.isPortal=function(e){return dr(e)===hp};Sn.isProfiler=function(e){return dr(e)===Bu};Sn.isStrictMode=function(e){return dr(e)===$u};Sn.isSuspense=function(e){return dr(e)===Vu};Sn.isSuspenseList=function(e){return dr(e)===Wu};Sn.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Du||e===Bu||e===$u||e===Vu||e===Wu||e===W5||typeof e=="object"&&e!==null&&(e.$$typeof===Gu||e.$$typeof===Xu||e.$$typeof===zu||e.$$typeof===Hu||e.$$typeof===Uu||e.$$typeof===jy||e.getModuleId!==void 0)};Sn.typeOf=dr;Ly.exports=Sn;var gl=Ly.exports;function gi(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=[];return Ye.Children.forEach(e,function(r){r==null&&!n.keepEmpty||(Array.isArray(r)?t=t.concat(gi(r)):gl.isFragment(r)&&r.props?t=t.concat(gi(r.props.children,n)):t.push(r))}),t}var km={},X5=function(n){};function G5(e,n){}function Z5(e,n){}function K5(){km={}}function Dy(e,n,t){!n&&!km[t]&&(e(!1,t),km[t]=!0)}function Ci(e,n){Dy(G5,e,n)}function q5(e,n){Dy(Z5,e,n)}Ci.preMessage=X5;Ci.resetWarned=K5;Ci.noteOnce=q5;function xn(e){"@babel/helpers - typeof";return xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},xn(e)}function Q5(e,n){if(xn(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(xn(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function $y(e){var n=Q5(e,"string");return xn(n)=="symbol"?n:n+""}function Le(e,n,t){return(n=$y(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function R2(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function de(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?R2(Object(t),!0).forEach(function(r){Le(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R2(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Hl(e){return e instanceof HTMLElement||e instanceof SVGElement}function Y5(e){return e&&xn(e)==="object"&&Hl(e.nativeElement)?e.nativeElement:Hl(e)?e:null}function dc(e){var n=Y5(e);if(n)return n;if(e instanceof Ye.Component){var t;return(t=wm.findDOMNode)===null||t===void 0?void 0:t.call(wm,e)}return null}function Zu(e,n,t){var r=p.useRef({});return(!("value"in r.current)||t(r.current.condition,n))&&(r.current.value=e(),r.current.condition=n),r.current.value}var pp=function(n,t){typeof n=="function"?n(t):xn(n)==="object"&&n&&"current"in n&&(n.current=t)},ss=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];var o=t.filter(Boolean);return o.length<=1?o[0]:function(i){t.forEach(function(a){pp(a,i)})}},Ku=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return Zu(function(){return ss.apply(void 0,t)},t,function(o,i){return o.length!==i.length||o.every(function(a,l){return a!==i[l]})})},cs=function(n){var t,r,o=gl.isMemo(n)?n.type.type:n.type;return!(typeof o=="function"&&!((t=o.prototype)!==null&&t!==void 0&&t.render)&&o.$$typeof!==gl.ForwardRef||typeof n=="function"&&!((r=n.prototype)!==null&&r!==void 0&&r.render)&&n.$$typeof!==gl.ForwardRef)};function F2(e){return p.isValidElement(e)&&!gl.isFragment(e)}Number(p.version.split(".")[0])>=19;var Em=p.createContext(null);function J5(e){var n=e.children,t=e.onBatchResize,r=p.useRef(0),o=p.useRef([]),i=p.useContext(Em),a=p.useCallback(function(l,s,c){r.current+=1;var u=r.current;o.current.push({size:l,element:s,data:c}),Promise.resolve().then(function(){u===r.current&&(t==null||t(o.current),o.current=[])}),i==null||i(l,s,c)},[t,i]);return p.createElement(Em.Provider,{value:a},n)}var By=function(){if(typeof Map<"u")return Map;function e(n,t){var r=-1;return n.some(function(o,i){return o[0]===t?(r=i,!0):!1}),r}return function(){function n(){this.__entries__=[]}return Object.defineProperty(n.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),n.prototype.get=function(t){var r=e(this.__entries__,t),o=this.__entries__[r];return o&&o[1]},n.prototype.set=function(t,r){var o=e(this.__entries__,t);~o?this.__entries__[o][1]=r:this.__entries__.push([t,r])},n.prototype.delete=function(t){var r=this.__entries__,o=e(r,t);~o&&r.splice(o,1)},n.prototype.has=function(t){return!!~e(this.__entries__,t)},n.prototype.clear=function(){this.__entries__.splice(0)},n.prototype.forEach=function(t,r){r===void 0&&(r=null);for(var o=0,i=this.__entries__;o<i.length;o++){var a=i[o];t.call(r,a[1],a[0])}},n}()}(),xm=typeof window<"u"&&typeof document<"u"&&window.document===document,Jc=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),ek=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Jc):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),nk=2;function tk(e,n){var t=!1,r=!1,o=0;function i(){t&&(t=!1,e()),r&&l()}function a(){ek(i)}function l(){var s=Date.now();if(t){if(s-o<nk)return;r=!0}else t=!0,r=!1,setTimeout(a,n);o=s}return l}var rk=20,ok=["top","right","bottom","left","width","height","size","weight"],ik=typeof MutationObserver<"u",ak=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=tk(this.refresh.bind(this),rk)}return e.prototype.addObserver=function(n){~this.observers_.indexOf(n)||this.observers_.push(n),this.connected_||this.connect_()},e.prototype.removeObserver=function(n){var t=this.observers_,r=t.indexOf(n);~r&&t.splice(r,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var n=this.updateObservers_();n&&this.refresh()},e.prototype.updateObservers_=function(){var n=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return n.forEach(function(t){return t.broadcastActive()}),n.length>0},e.prototype.connect_=function(){!xm||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),ik?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!xm||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(n){var t=n.propertyName,r=t===void 0?"":t,o=ok.some(function(i){return!!~r.indexOf(i)});o&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),zy=function(e,n){for(var t=0,r=Object.keys(n);t<r.length;t++){var o=r[t];Object.defineProperty(e,o,{value:n[o],enumerable:!1,writable:!1,configurable:!0})}return e},ma=function(e){var n=e&&e.ownerDocument&&e.ownerDocument.defaultView;return n||Jc},Hy=qu(0,0,0,0);function eu(e){return parseFloat(e)||0}function M2(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return n.reduce(function(r,o){var i=e["border-"+o+"-width"];return r+eu(i)},0)}function lk(e){for(var n=["top","right","bottom","left"],t={},r=0,o=n;r<o.length;r++){var i=o[r],a=e["padding-"+i];t[i]=eu(a)}return t}function sk(e){var n=e.getBBox();return qu(0,0,n.width,n.height)}function ck(e){var n=e.clientWidth,t=e.clientHeight;if(!n&&!t)return Hy;var r=ma(e).getComputedStyle(e),o=lk(r),i=o.left+o.right,a=o.top+o.bottom,l=eu(r.width),s=eu(r.height);if(r.boxSizing==="border-box"&&(Math.round(l+i)!==n&&(l-=M2(r,"left","right")+i),Math.round(s+a)!==t&&(s-=M2(r,"top","bottom")+a)),!dk(e)){var c=Math.round(l+i)-n,u=Math.round(s+a)-t;Math.abs(c)!==1&&(l-=c),Math.abs(u)!==1&&(s-=u)}return qu(o.left,o.top,l,s)}var uk=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof ma(e).SVGGraphicsElement}:function(e){return e instanceof ma(e).SVGElement&&typeof e.getBBox=="function"}}();function dk(e){return e===ma(e).document.documentElement}function fk(e){return xm?uk(e)?sk(e):ck(e):Hy}function mk(e){var n=e.x,t=e.y,r=e.width,o=e.height,i=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(i.prototype);return zy(a,{x:n,y:t,width:r,height:o,top:t,right:n+r,bottom:o+t,left:n}),a}function qu(e,n,t,r){return{x:e,y:n,width:t,height:r}}var hk=function(){function e(n){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=qu(0,0,0,0),this.target=n}return e.prototype.isActive=function(){var n=fk(this.target);return this.contentRect_=n,n.width!==this.broadcastWidth||n.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var n=this.contentRect_;return this.broadcastWidth=n.width,this.broadcastHeight=n.height,n},e}(),pk=function(){function e(n,t){var r=mk(t);zy(this,{target:n,contentRect:r})}return e}(),gk=function(){function e(n,t,r){if(this.activeObservations_=[],this.observations_=new By,typeof n!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=n,this.controller_=t,this.callbackCtx_=r}return e.prototype.observe=function(n){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(n instanceof ma(n).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(n)||(t.set(n,new hk(n)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(n){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(n instanceof ma(n).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(n)&&(t.delete(n),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var n=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&n.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var n=this.callbackCtx_,t=this.activeObservations_.map(function(r){return new pk(r.target,r.broadcastRect())});this.callback_.call(n,t,n),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Uy=typeof WeakMap<"u"?new WeakMap:new By,Vy=function(){function e(n){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=ak.getInstance(),r=new gk(n,t,this);Uy.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Vy.prototype[e]=function(){var n;return(n=Uy.get(this))[e].apply(n,arguments)}});var vk=function(){return typeof Jc.ResizeObserver<"u"?Jc.ResizeObserver:Vy}(),wo=new Map;function bk(e){e.forEach(function(n){var t,r=n.target;(t=wo.get(r))===null||t===void 0||t.forEach(function(o){return o(r)})})}var Wy=new vk(bk);function yk(e,n){wo.has(e)||(wo.set(e,new Set),Wy.observe(e)),wo.get(e).add(n)}function wk(e,n){wo.has(e)&&(wo.get(e).delete(n),wo.get(e).size||(Wy.unobserve(e),wo.delete(e)))}function fr(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function L2(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,$y(r.key),r)}}function mr(e,n,t){return n&&L2(e.prototype,n),t&&L2(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Im(e,n){return Im=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},Im(e,n)}function Sa(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Im(e,n)}function nu(e){return nu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},nu(e)}function Xy(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Xy=function(){return!!e})()}function li(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ck(e,n){if(n&&(xn(n)=="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return li(e)}function ka(e){var n=Xy();return function(){var t,r=nu(e);if(n){var o=nu(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return Ck(this,t)}}var Sk=function(e){Sa(t,e);var n=ka(t);function t(){return fr(this,t),n.apply(this,arguments)}return mr(t,[{key:"render",value:function(){return this.props.children}}]),t}(p.Component);function kk(e,n){var t=e.children,r=e.disabled,o=p.useRef(null),i=p.useRef(null),a=p.useContext(Em),l=typeof t=="function",s=l?t(o):t,c=p.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),u=!l&&p.isValidElement(s)&&cs(s),d=u?s.ref:null,f=Ku(d,o),m=function(){var g;return dc(o.current)||(o.current&&xn(o.current)==="object"?dc((g=o.current)===null||g===void 0?void 0:g.nativeElement):null)||dc(i.current)};p.useImperativeHandle(n,function(){return m()});var h=p.useRef(e);h.current=e;var b=p.useCallback(function(k){var g=h.current,v=g.onResize,y=g.data,E=k.getBoundingClientRect(),_=E.width,w=E.height,A=k.offsetWidth,N=k.offsetHeight,R=Math.floor(_),V=Math.floor(w);if(c.current.width!==R||c.current.height!==V||c.current.offsetWidth!==A||c.current.offsetHeight!==N){var $={width:R,height:V,offsetWidth:A,offsetHeight:N};c.current=$;var z=A===Math.round(_)?_:A,j=N===Math.round(w)?w:N,H=de(de({},$),{},{offsetWidth:z,offsetHeight:j});a==null||a(H,k,y),v&&Promise.resolve().then(function(){v(H,k)})}},[]);return p.useEffect(function(){var k=m();return k&&!r&&yk(k,b),function(){return wk(k,b)}},[o.current,r]),p.createElement(Sk,{ref:i},u?p.cloneElement(s,{ref:f}):s)}var Ek=p.forwardRef(kk),xk="rc-observer-key";function Ik(e,n){var t=e.children,r=typeof t=="function"?[t]:gi(t);return r.map(function(o,i){var a=(o==null?void 0:o.key)||"".concat(xk,"-").concat(i);return p.createElement(Ek,pn({},e,{key:a,ref:i===0?n:void 0}),o)})}var us=p.forwardRef(Ik);us.Collection=J5;function $o(e,n){var t=Object.assign({},e);return Array.isArray(n)&&n.forEach(function(r){delete t[r]}),t}function _m(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function _k(e){if(Array.isArray(e))return _m(e)}function Gy(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gp(e,n){if(e){if(typeof e=="string")return _m(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_m(e,n):void 0}}function Ak(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wn(e){return _k(e)||Gy(e)||gp(e)||Ak()}var Zy=function(n){return+setTimeout(n,16)},Ky=function(n){return clearTimeout(n)};typeof window<"u"&&"requestAnimationFrame"in window&&(Zy=function(n){return window.requestAnimationFrame(n)},Ky=function(n){return window.cancelAnimationFrame(n)});var j2=0,vp=new Map;function qy(e){vp.delete(e)}var Kt=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;j2+=1;var r=j2;function o(i){if(i===0)qy(r),n();else{var a=Zy(function(){o(i-1)});vp.set(r,a)}}return o(t),r};Kt.cancel=function(e){var n=vp.get(e);return qy(e),Ky(n)};function Qy(e){if(Array.isArray(e))return e}function Tk(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,o,i,a,l=[],s=!0,c=!1;try{if(i=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=i.call(t)).done)&&(l.push(r.value),l.length!==n);s=!0);}catch(u){c=!0,o=u}finally{try{if(!s&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}function Yy(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(e,n){return Qy(e)||Tk(e,n)||gp(e,n)||Yy()}function ha(e){for(var n=0,t,r=0,o=e.length;o>=4;++r,o-=4)t=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,n=(t&65535)*1540483477+((t>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(o){case 3:n^=(e.charCodeAt(r+2)&255)<<16;case 2:n^=(e.charCodeAt(r+1)&255)<<8;case 1:n^=e.charCodeAt(r)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}function Qt(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ok(e,n){if(!e)return!1;if(e.contains)return e.contains(n);for(var t=n;t;){if(t===e)return!0;t=t.parentNode}return!1}var D2="data-rc-order",$2="data-rc-priority",Pk="rc-util-key",Am=new Map;function Jy(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.mark;return n?n.startsWith("data-")?n:"data-".concat(n):Pk}function Qu(e){if(e.attachTo)return e.attachTo;var n=document.querySelector("head");return n||document.body}function Nk(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function bp(e){return Array.from((Am.get(e)||e).children).filter(function(n){return n.tagName==="STYLE"})}function e4(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!Qt())return null;var t=n.csp,r=n.prepend,o=n.priority,i=o===void 0?0:o,a=Nk(r),l=a==="prependQueue",s=document.createElement("style");s.setAttribute(D2,a),l&&i&&s.setAttribute($2,"".concat(i)),t!=null&&t.nonce&&(s.nonce=t==null?void 0:t.nonce),s.innerHTML=e;var c=Qu(n),u=c.firstChild;if(r){if(l){var d=(n.styles||bp(c)).filter(function(f){if(!["prepend","prependQueue"].includes(f.getAttribute(D2)))return!1;var m=Number(f.getAttribute($2)||0);return i>=m});if(d.length)return c.insertBefore(s,d[d.length-1].nextSibling),s}c.insertBefore(s,u)}else c.appendChild(s);return s}function n4(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=Qu(n);return(n.styles||bp(t)).find(function(r){return r.getAttribute(Jy(n))===e})}function Ul(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n4(e,n);if(t){var r=Qu(n);r.removeChild(t)}}function Rk(e,n){var t=Am.get(e);if(!t||!Ok(document,t)){var r=e4("",n),o=r.parentNode;Am.set(e,o),e.removeChild(r)}}function Qr(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=Qu(t),o=bp(r),i=de(de({},t),{},{styles:o});Rk(r,i);var a=n4(n,i);if(a){var l,s;if((l=i.csp)!==null&&l!==void 0&&l.nonce&&a.nonce!==((s=i.csp)===null||s===void 0?void 0:s.nonce)){var c;a.nonce=(c=i.csp)===null||c===void 0?void 0:c.nonce}return a.innerHTML!==e&&(a.innerHTML=e),a}var u=e4(e,i);return u.setAttribute(Jy(i),n),u}function Fk(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function $n(e,n){if(e==null)return{};var t,r,o=Fk(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||{}.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function yp(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=new Set;function o(i,a){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,s=r.has(i);if(Ci(!s,"Warning: There may be circular references"),s)return!1;if(i===a)return!0;if(t&&l>1)return!1;r.add(i);var c=l+1;if(Array.isArray(i)){if(!Array.isArray(a)||i.length!==a.length)return!1;for(var u=0;u<i.length;u++)if(!o(i[u],a[u],c))return!1;return!0}if(i&&a&&xn(i)==="object"&&xn(a)==="object"){var d=Object.keys(i);return d.length!==Object.keys(a).length?!1:d.every(function(f){return o(i[f],a[f],c)})}return!1}return o(e,n)}var Mk="%";function Tm(e){return e.join(Mk)}var Lk=function(){function e(n){fr(this,e),Le(this,"instanceId",void 0),Le(this,"cache",new Map),this.instanceId=n}return mr(e,[{key:"get",value:function(t){return this.opGet(Tm(t))}},{key:"opGet",value:function(t){return this.cache.get(t)||null}},{key:"update",value:function(t,r){return this.opUpdate(Tm(t),r)}},{key:"opUpdate",value:function(t,r){var o=this.cache.get(t),i=r(o);i===null?this.cache.delete(t):this.cache.set(t,i)}}]),e}(),pa="data-token-hash",Ir="data-css-hash",Co="__cssinjs_instance__";function jk(){var e=Math.random().toString(12).slice(2);if(typeof document<"u"&&document.head&&document.body){var n=document.body.querySelectorAll("style[".concat(Ir,"]"))||[],t=document.head.firstChild;Array.from(n).forEach(function(o){o[Co]=o[Co]||e,o[Co]===e&&document.head.insertBefore(o,t)});var r={};Array.from(document.querySelectorAll("style[".concat(Ir,"]"))).forEach(function(o){var i=o.getAttribute(Ir);if(r[i]){if(o[Co]===e){var a;(a=o.parentNode)===null||a===void 0||a.removeChild(o)}}else r[i]=!0})}return new Lk(e)}var Yu=p.createContext({hashPriority:"low",cache:jk(),defaultCache:!0}),t4=mr(function e(){fr(this,e)}),r4="CALC_UNIT",Dk=new RegExp(r4,"g");function Xd(e){return typeof e=="number"?"".concat(e).concat(r4):e}var $k=function(e){Sa(t,e);var n=ka(t);function t(r,o){var i;fr(this,t),i=n.call(this),Le(li(i),"result",""),Le(li(i),"unitlessCssVar",void 0),Le(li(i),"lowPriority",void 0);var a=xn(r);return i.unitlessCssVar=o,r instanceof t?i.result="(".concat(r.result,")"):a==="number"?i.result=Xd(r):a==="string"&&(i.result=r),i}return mr(t,[{key:"add",value:function(o){return o instanceof t?this.result="".concat(this.result," + ").concat(o.getResult()):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," + ").concat(Xd(o))),this.lowPriority=!0,this}},{key:"sub",value:function(o){return o instanceof t?this.result="".concat(this.result," - ").concat(o.getResult()):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," - ").concat(Xd(o))),this.lowPriority=!0,this}},{key:"mul",value:function(o){return this.lowPriority&&(this.result="(".concat(this.result,")")),o instanceof t?this.result="".concat(this.result," * ").concat(o.getResult(!0)):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," * ").concat(o)),this.lowPriority=!1,this}},{key:"div",value:function(o){return this.lowPriority&&(this.result="(".concat(this.result,")")),o instanceof t?this.result="".concat(this.result," / ").concat(o.getResult(!0)):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," / ").concat(o)),this.lowPriority=!1,this}},{key:"getResult",value:function(o){return this.lowPriority||o?"(".concat(this.result,")"):this.result}},{key:"equal",value:function(o){var i=this,a=o||{},l=a.unit,s=!0;return typeof l=="boolean"?s=l:Array.from(this.unitlessCssVar).some(function(c){return i.result.includes(c)})&&(s=!1),this.result=this.result.replace(Dk,s?"px":""),typeof this.lowPriority<"u"?"calc(".concat(this.result,")"):this.result}}]),t}(t4),Bk=function(e){Sa(t,e);var n=ka(t);function t(r){var o;return fr(this,t),o=n.call(this),Le(li(o),"result",0),r instanceof t?o.result=r.result:typeof r=="number"&&(o.result=r),o}return mr(t,[{key:"add",value:function(o){return o instanceof t?this.result+=o.result:typeof o=="number"&&(this.result+=o),this}},{key:"sub",value:function(o){return o instanceof t?this.result-=o.result:typeof o=="number"&&(this.result-=o),this}},{key:"mul",value:function(o){return o instanceof t?this.result*=o.result:typeof o=="number"&&(this.result*=o),this}},{key:"div",value:function(o){return o instanceof t?this.result/=o.result:typeof o=="number"&&(this.result/=o),this}},{key:"equal",value:function(){return this.result}}]),t}(t4),zk=function(n,t){var r=n==="css"?$k:Bk;return function(o){return new r(o,t)}};function Hk(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}var wp=function(){function e(){fr(this,e),Le(this,"cache",void 0),Le(this,"keys",void 0),Le(this,"cacheCallTimes",void 0),this.cache=new Map,this.keys=[],this.cacheCallTimes=0}return mr(e,[{key:"size",value:function(){return this.keys.length}},{key:"internalGet",value:function(t){var r,o,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a={map:this.cache};return t.forEach(function(l){if(!a)a=void 0;else{var s;a=(s=a)===null||s===void 0||(s=s.map)===null||s===void 0?void 0:s.get(l)}}),(r=a)!==null&&r!==void 0&&r.value&&i&&(a.value[1]=this.cacheCallTimes++),(o=a)===null||o===void 0?void 0:o.value}},{key:"get",value:function(t){var r;return(r=this.internalGet(t,!0))===null||r===void 0?void 0:r[0]}},{key:"has",value:function(t){return!!this.internalGet(t)}},{key:"set",value:function(t,r){var o=this;if(!this.has(t)){if(this.size()+1>e.MAX_CACHE_SIZE+e.MAX_CACHE_OFFSET){var i=this.keys.reduce(function(c,u){var d=pe(c,2),f=d[1];return o.internalGet(u)[1]<f?[u,o.internalGet(u)[1]]:c},[this.keys[0],this.cacheCallTimes]),a=pe(i,1),l=a[0];this.delete(l)}this.keys.push(t)}var s=this.cache;t.forEach(function(c,u){if(u===t.length-1)s.set(c,{value:[r,o.cacheCallTimes++]});else{var d=s.get(c);d?d.map||(d.map=new Map):s.set(c,{map:new Map}),s=s.get(c).map}})}},{key:"deleteByPath",value:function(t,r){var o=t.get(r[0]);if(r.length===1){var i;return o.map?t.set(r[0],{map:o.map}):t.delete(r[0]),(i=o.value)===null||i===void 0?void 0:i[0]}var a=this.deleteByPath(o.map,r.slice(1));return(!o.map||o.map.size===0)&&!o.value&&t.delete(r[0]),a}},{key:"delete",value:function(t){if(this.has(t))return this.keys=this.keys.filter(function(r){return!Hk(r,t)}),this.deleteByPath(this.cache,t)}}]),e}();Le(wp,"MAX_CACHE_SIZE",20);Le(wp,"MAX_CACHE_OFFSET",5);var B2=0,o4=function(){function e(n){fr(this,e),Le(this,"derivatives",void 0),Le(this,"id",void 0),this.derivatives=Array.isArray(n)?n:[n],this.id=B2,n.length===0&&(n.length>0,void 0),B2+=1}return mr(e,[{key:"getDerivativeToken",value:function(t){return this.derivatives.reduce(function(r,o){return o(t,r)},void 0)}}]),e}(),Gd=new wp;function Om(e){var n=Array.isArray(e)?e:[e];return Gd.has(n)||Gd.set(n,new o4(n)),Gd.get(n)}var Uk=new WeakMap,Zd={};function Vk(e,n){for(var t=Uk,r=0;r<n.length;r+=1){var o=n[r];t.has(o)||t.set(o,new WeakMap),t=t.get(o)}return t.has(Zd)||t.set(Zd,e()),t.get(Zd)}var z2=new WeakMap;function vl(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=z2.get(e)||"";return t||(Object.keys(e).forEach(function(r){var o=e[r];t+=r,o instanceof o4?t+=o.id:o&&xn(o)==="object"?t+=vl(o,n):t+=o}),n&&(t=ha(t)),z2.set(e,t)),t}function H2(e,n){return ha("".concat(n,"_").concat(vl(e,!0)))}var Pm=Qt();function Ve(e){return typeof e=="number"?"".concat(e,"px"):e}function tu(e,n,t){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(o)return e;var i=de(de({},r),{},Le(Le({},pa,n),Ir,t)),a=Object.keys(i).map(function(l){var s=i[l];return s?"".concat(l,'="').concat(s,'"'):null}).filter(function(l){return l}).join(" ");return"<style ".concat(a,">").concat(e,"</style>")}var fc=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return"--".concat(t?"".concat(t,"-"):"").concat(n).replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g,"$1-$2").replace(/([a-z])([A-Z0-9])/g,"$1-$2").toLowerCase()},Wk=function(n,t,r){return Object.keys(n).length?".".concat(t).concat(r!=null&&r.scope?".".concat(r.scope):"","{").concat(Object.entries(n).map(function(o){var i=pe(o,2),a=i[0],l=i[1];return"".concat(a,":").concat(l,";")}).join(""),"}"):""},i4=function(n,t,r){var o={},i={};return Object.entries(n).forEach(function(a){var l,s,c=pe(a,2),u=c[0],d=c[1];if(r!=null&&(l=r.preserve)!==null&&l!==void 0&&l[u])i[u]=d;else if((typeof d=="string"||typeof d=="number")&&!(r!=null&&(s=r.ignore)!==null&&s!==void 0&&s[u])){var f,m=fc(u,r==null?void 0:r.prefix);o[m]=typeof d=="number"&&!(r!=null&&(f=r.unitless)!==null&&f!==void 0&&f[u])?"".concat(d,"px"):String(d),i[u]="var(".concat(m,")")}}),[i,Wk(o,t,{scope:r==null?void 0:r.scope})]},U2=Qt()?p.useLayoutEffect:p.useEffect,bt=function(n,t){var r=p.useRef(!0);U2(function(){return n(r.current)},t),U2(function(){return r.current=!1,function(){r.current=!0}},[])},V2=function(n,t){bt(function(r){if(!r)return n()},t)},Xk=de({},ns),W2=Xk.useInsertionEffect,Gk=function(n,t,r){p.useMemo(n,r),bt(function(){return t(!0)},r)},Zk=W2?function(e,n,t){return W2(function(){return e(),n()},t)}:Gk,Kk=de({},ns),qk=Kk.useInsertionEffect,Qk=function(n){var t=[],r=!1;function o(i){r||t.push(i)}return p.useEffect(function(){return r=!1,function(){r=!0,t.length&&t.forEach(function(i){return i()})}},n),o},Yk=function(){return function(n){n()}},Jk=typeof qk<"u"?Qk:Yk;function Cp(e,n,t,r,o){var i=p.useContext(Yu),a=i.cache,l=[e].concat(Wn(n)),s=Tm(l),c=Jk([s]),u=function(h){a.opUpdate(s,function(b){var k=b||[void 0,void 0],g=pe(k,2),v=g[0],y=v===void 0?0:v,E=g[1],_=E,w=_||t(),A=[y,w];return h?h(A):A})};p.useMemo(function(){u()},[s]);var d=a.opGet(s),f=d[1];return Zk(function(){o==null||o(f)},function(m){return u(function(h){var b=pe(h,2),k=b[0],g=b[1];return m&&k===0&&(o==null||o(f)),[k+1,g]}),function(){a.opUpdate(s,function(h){var b=h||[],k=pe(b,2),g=k[0],v=g===void 0?0:g,y=k[1],E=v-1;return E===0?(c(function(){(m||!a.opGet(s))&&(r==null||r(y,!1))}),null):[v-1,y]})}},[s]),f}var eE={},nE="css",Qo=new Map;function tE(e){Qo.set(e,(Qo.get(e)||0)+1)}function rE(e,n){if(typeof document<"u"){var t=document.querySelectorAll("style[".concat(pa,'="').concat(e,'"]'));t.forEach(function(r){if(r[Co]===n){var o;(o=r.parentNode)===null||o===void 0||o.removeChild(r)}})}}var oE=0;function iE(e,n){Qo.set(e,(Qo.get(e)||0)-1);var t=Array.from(Qo.keys()),r=t.filter(function(o){var i=Qo.get(o)||0;return i<=0});t.length-r.length>oE&&r.forEach(function(o){rE(o,n),Qo.delete(o)})}var aE=function(n,t,r,o){var i=r.getDerivativeToken(n),a=de(de({},i),t);return o&&(a=o(a)),a},a4="token";function lE(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=p.useContext(Yu),o=r.cache.instanceId,i=r.container,a=t.salt,l=a===void 0?"":a,s=t.override,c=s===void 0?eE:s,u=t.formatToken,d=t.getComputedToken,f=t.cssVar,m=Vk(function(){return Object.assign.apply(Object,[{}].concat(Wn(n)))},n),h=vl(m),b=vl(c),k=f?vl(f):"",g=Cp(a4,[l,e.id,h,b,k],function(){var v,y=d?d(m,c,e):aE(m,c,e,u),E=de({},y),_="";if(f){var w=i4(y,f.key,{prefix:f.prefix,ignore:f.ignore,unitless:f.unitless,preserve:f.preserve}),A=pe(w,2);y=A[0],_=A[1]}var N=H2(y,l);y._tokenKey=N,E._tokenKey=H2(E,l);var R=(v=f==null?void 0:f.key)!==null&&v!==void 0?v:N;y._themeKey=R,tE(R);var V="".concat(nE,"-").concat(ha(N));return y._hashId=V,[y,V,E,_,(f==null?void 0:f.key)||""]},function(v){iE(v[0]._themeKey,o)},function(v){var y=pe(v,4),E=y[0],_=y[3];if(f&&_){var w=Qr(_,ha("css-variables-".concat(E._themeKey)),{mark:Ir,prepend:"queue",attachTo:i,priority:-999});w[Co]=o,w.setAttribute(pa,E._themeKey)}});return g}var sE=function(n,t,r){var o=pe(n,5),i=o[2],a=o[3],l=o[4],s=r||{},c=s.plain;if(!a)return null;var u=i._tokenKey,d=-999,f={"data-rc-order":"prependQueue","data-rc-priority":"".concat(d)},m=tu(a,l,u,f,c);return[d,u,m]},l4={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},s4="comm",c4="rule",u4="decl",cE="@import",uE="@keyframes",dE="@layer",d4=Math.abs,Sp=String.fromCharCode;function f4(e){return e.trim()}function mc(e,n,t){return e.replace(n,t)}function fE(e,n,t){return e.indexOf(n,t)}function Vl(e,n){return e.charCodeAt(n)|0}function Wl(e,n,t){return e.slice(n,t)}function Gr(e){return e.length}function mE(e){return e.length}function Ds(e,n){return n.push(e),e}var Ju=1,ga=1,m4=0,ur=0,Qn=0,Ea="";function kp(e,n,t,r,o,i,a,l){return{value:e,root:n,parent:t,type:r,props:o,children:i,line:Ju,column:ga,length:a,return:"",siblings:l}}function hE(){return Qn}function pE(){return Qn=ur>0?Vl(Ea,--ur):0,ga--,Qn===10&&(ga=1,Ju--),Qn}function _r(){return Qn=ur<m4?Vl(Ea,ur++):0,ga++,Qn===10&&(ga=1,Ju++),Qn}function si(){return Vl(Ea,ur)}function hc(){return ur}function ed(e,n){return Wl(Ea,e,n)}function Nm(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gE(e){return Ju=ga=1,m4=Gr(Ea=e),ur=0,[]}function vE(e){return Ea="",e}function Kd(e){return f4(ed(ur-1,Rm(e===91?e+2:e===40?e+1:e)))}function bE(e){for(;(Qn=si())&&Qn<33;)_r();return Nm(e)>2||Nm(Qn)>3?"":" "}function yE(e,n){for(;--n&&_r()&&!(Qn<48||Qn>102||Qn>57&&Qn<65||Qn>70&&Qn<97););return ed(e,hc()+(n<6&&si()==32&&_r()==32))}function Rm(e){for(;_r();)switch(Qn){case e:return ur;case 34:case 39:e!==34&&e!==39&&Rm(Qn);break;case 40:e===41&&Rm(e);break;case 92:_r();break}return ur}function wE(e,n){for(;_r()&&e+Qn!==57;)if(e+Qn===84&&si()===47)break;return"/*"+ed(n,ur-1)+"*"+Sp(e===47?e:_r())}function CE(e){for(;!Nm(si());)_r();return ed(e,ur)}function SE(e){return vE(pc("",null,null,null,[""],e=gE(e),0,[0],e))}function pc(e,n,t,r,o,i,a,l,s){for(var c=0,u=0,d=a,f=0,m=0,h=0,b=1,k=1,g=1,v=0,y="",E=o,_=i,w=r,A=y;k;)switch(h=v,v=_r()){case 40:if(h!=108&&Vl(A,d-1)==58){fE(A+=mc(Kd(v),"&","&\f"),"&\f",d4(c?l[c-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:A+=Kd(v);break;case 9:case 10:case 13:case 32:A+=bE(h);break;case 92:A+=yE(hc()-1,7);continue;case 47:switch(si()){case 42:case 47:Ds(kE(wE(_r(),hc()),n,t,s),s);break;default:A+="/"}break;case 123*b:l[c++]=Gr(A)*g;case 125*b:case 59:case 0:switch(v){case 0:case 125:k=0;case 59+u:g==-1&&(A=mc(A,/\f/g,"")),m>0&&Gr(A)-d&&Ds(m>32?G2(A+";",r,t,d-1,s):G2(mc(A," ","")+";",r,t,d-2,s),s);break;case 59:A+=";";default:if(Ds(w=X2(A,n,t,c,u,o,l,y,E=[],_=[],d,i),i),v===123)if(u===0)pc(A,n,w,w,E,i,d,l,_);else switch(f===99&&Vl(A,3)===110?100:f){case 100:case 108:case 109:case 115:pc(e,w,w,r&&Ds(X2(e,w,w,0,0,o,l,y,o,E=[],d,_),_),o,_,d,l,r?E:_);break;default:pc(A,w,w,w,[""],_,0,l,_)}}c=u=m=0,b=g=1,y=A="",d=a;break;case 58:d=1+Gr(A),m=h;default:if(b<1){if(v==123)--b;else if(v==125&&b++==0&&pE()==125)continue}switch(A+=Sp(v),v*b){case 38:g=u>0?1:(A+="\f",-1);break;case 44:l[c++]=(Gr(A)-1)*g,g=1;break;case 64:si()===45&&(A+=Kd(_r())),f=si(),u=d=Gr(y=A+=CE(hc())),v++;break;case 45:h===45&&Gr(A)==2&&(b=0)}}return i}function X2(e,n,t,r,o,i,a,l,s,c,u,d){for(var f=o-1,m=o===0?i:[""],h=mE(m),b=0,k=0,g=0;b<r;++b)for(var v=0,y=Wl(e,f+1,f=d4(k=a[b])),E=e;v<h;++v)(E=f4(k>0?m[v]+" "+y:mc(y,/&\f/g,m[v])))&&(s[g++]=E);return kp(e,n,t,o===0?c4:l,s,c,u,d)}function kE(e,n,t,r){return kp(e,n,t,s4,Sp(hE()),Wl(e,2,-2),0,r)}function G2(e,n,t,r,o){return kp(e,n,t,u4,Wl(e,0,r),Wl(e,r+1,-1),r,o)}function Fm(e,n){for(var t="",r=0;r<e.length;r++)t+=n(e[r],r,e,n)||"";return t}function EE(e,n,t,r){switch(e.type){case dE:if(e.children.length)break;case cE:case u4:return e.return=e.return||e.value;case s4:return"";case uE:return e.return=e.value+"{"+Fm(e.children,r)+"}";case c4:if(!Gr(e.value=e.props.join(",")))return""}return Gr(t=Fm(e.children,r))?e.return=e.value+"{"+t+"}":""}var Z2="data-ant-cssinjs-cache-path",h4="_FILE_STYLE__",ci,p4=!0;function xE(){if(!ci&&(ci={},Qt())){var e=document.createElement("div");e.className=Z2,e.style.position="fixed",e.style.visibility="hidden",e.style.top="-9999px",document.body.appendChild(e);var n=getComputedStyle(e).content||"";n=n.replace(/^"/,"").replace(/"$/,""),n.split(";").forEach(function(o){var i=o.split(":"),a=pe(i,2),l=a[0],s=a[1];ci[l]=s});var t=document.querySelector("style[".concat(Z2,"]"));if(t){var r;p4=!1,(r=t.parentNode)===null||r===void 0||r.removeChild(t)}document.body.removeChild(e)}}function IE(e){return xE(),!!ci[e]}function _E(e){var n=ci[e],t=null;if(n&&Qt())if(p4)t=h4;else{var r=document.querySelector("style[".concat(Ir,'="').concat(ci[e],'"]'));r?t=r.innerHTML:delete ci[e]}return[t,n]}var AE="_skip_check_",g4="_multi_value_";function gc(e){var n=Fm(SE(e),EE);return n.replace(/\{%%%\:[^;];}/g,";")}function TE(e){return xn(e)==="object"&&e&&(AE in e||g4 in e)}function OE(e,n,t){if(!n)return e;var r=".".concat(n),o=t==="low"?":where(".concat(r,")"):r,i=e.split(",").map(function(a){var l,s=a.trim().split(/\s+/),c=s[0]||"",u=((l=c.match(/^\w+/))===null||l===void 0?void 0:l[0])||"";return c="".concat(u).concat(o).concat(c.slice(u.length)),[c].concat(Wn(s.slice(1))).join(" ")});return i.join(",")}var PE=function e(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{root:!0,parentSelectors:[]},o=r.root,i=r.injectHash,a=r.parentSelectors,l=t.hashId,s=t.layer;t.path;var c=t.hashPriority,u=t.transformers,d=u===void 0?[]:u;t.linters;var f="",m={};function h(g){var v=g.getName(l);if(!m[v]){var y=e(g.style,t,{root:!1,parentSelectors:a}),E=pe(y,1),_=E[0];m[v]="@keyframes ".concat(g.getName(l)).concat(_)}}function b(g){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return g.forEach(function(y){Array.isArray(y)?b(y,v):y&&v.push(y)}),v}var k=b(Array.isArray(n)?n:[n]);return k.forEach(function(g){var v=typeof g=="string"&&!o?{}:g;if(typeof v=="string")f+="".concat(v,`
`);else if(v._keyframe)h(v);else{var y=d.reduce(function(E,_){var w;return(_==null||(w=_.visit)===null||w===void 0?void 0:w.call(_,E))||E},v);Object.keys(y).forEach(function(E){var _=y[E];if(xn(_)==="object"&&_&&(E!=="animationName"||!_._keyframe)&&!TE(_)){var w=!1,A=E.trim(),N=!1;(o||i)&&l?A.startsWith("@")?w=!0:A=OE(E,l,c):o&&!l&&(A==="&"||A==="")&&(A="",N=!0);var R=e(_,t,{root:N,injectHash:w,parentSelectors:[].concat(Wn(a),[A])}),V=pe(R,2),$=V[0],z=V[1];m=de(de({},m),z),f+="".concat(A).concat($)}else{let Z=function(B,F){var O=B.replace(/[A-Z]/g,function(S){return"-".concat(S.toLowerCase())}),W=F;!l4[B]&&typeof W=="number"&&W!==0&&(W="".concat(W,"px")),B==="animationName"&&F!==null&&F!==void 0&&F._keyframe&&(h(F),W=F.getName(l)),f+="".concat(O,":").concat(W,";")};var j,H=(j=_==null?void 0:_.value)!==null&&j!==void 0?j:_;xn(_)==="object"&&_!==null&&_!==void 0&&_[g4]&&Array.isArray(H)?H.forEach(function(B){Z(E,B)}):Z(E,H)}})}}),o?s&&(f="@layer ".concat(s.name," {").concat(f,"}"),s.dependencies&&(m["@layer ".concat(s.name)]=s.dependencies.map(function(g){return"@layer ".concat(g,", ").concat(s.name,";")}).join(`
`))):f="{".concat(f,"}"),[f,m]};function v4(e,n){return ha("".concat(e.join("%")).concat(n))}function NE(){return null}var b4="style";function Mm(e,n){var t=e.token,r=e.path,o=e.hashId,i=e.layer,a=e.nonce,l=e.clientOnly,s=e.order,c=s===void 0?0:s,u=p.useContext(Yu),d=u.autoClear;u.mock;var f=u.defaultCache,m=u.hashPriority,h=u.container,b=u.ssrInline,k=u.transformers,g=u.linters,v=u.cache,y=u.layer,E=t._tokenKey,_=[E];y&&_.push("layer"),_.push.apply(_,Wn(r));var w=Pm,A=Cp(b4,_,function(){var z=_.join("|");if(IE(z)){var j=_E(z),H=pe(j,2),Z=H[0],B=H[1];if(Z)return[Z,E,B,{},l,c]}var F=n(),O=PE(F,{hashId:o,hashPriority:m,layer:y?i:void 0,path:r.join("-"),transformers:k,linters:g}),W=pe(O,2),S=W[0],G=W[1],U=gc(S),I=v4(_,U);return[U,E,I,G,l,c]},function(z,j){var H=pe(z,3),Z=H[2];(j||d)&&Pm&&Ul(Z,{mark:Ir})},function(z){var j=pe(z,4),H=j[0];j[1];var Z=j[2],B=j[3];if(w&&H!==h4){var F={mark:Ir,prepend:y?!1:"queue",attachTo:h,priority:c},O=typeof a=="function"?a():a;O&&(F.csp={nonce:O});var W=[],S=[];Object.keys(B).forEach(function(U){U.startsWith("@layer")?W.push(U):S.push(U)}),W.forEach(function(U){Qr(gc(B[U]),"_layer-".concat(U),de(de({},F),{},{prepend:!0}))});var G=Qr(H,Z,F);G[Co]=v.instanceId,G.setAttribute(pa,E),S.forEach(function(U){Qr(gc(B[U]),"_effect-".concat(U),F)})}}),N=pe(A,3),R=N[0],V=N[1],$=N[2];return function(z){var j;return!b||w||!f?j=p.createElement(NE,null):j=p.createElement("style",pn({},Le(Le({},pa,V),Ir,$),{dangerouslySetInnerHTML:{__html:R}})),p.createElement(p.Fragment,null,j,z)}}var RE=function(n,t,r){var o=pe(n,6),i=o[0],a=o[1],l=o[2],s=o[3],c=o[4],u=o[5],d=r||{},f=d.plain;if(c)return null;var m=i,h={"data-rc-order":"prependQueue","data-rc-priority":"".concat(u)};return m=tu(i,a,l,h,f),s&&Object.keys(s).forEach(function(b){if(!t[b]){t[b]=!0;var k=gc(s[b]),g=tu(k,a,"_effect-".concat(b),h,f);b.startsWith("@layer")?m=g+m:m+=g}}),[u,l,m]},y4="cssVar",FE=function(n,t){var r=n.key,o=n.prefix,i=n.unitless,a=n.ignore,l=n.token,s=n.scope,c=s===void 0?"":s,u=p.useContext(Yu),d=u.cache.instanceId,f=u.container,m=l._tokenKey,h=[].concat(Wn(n.path),[r,c,m]),b=Cp(y4,h,function(){var k=t(),g=i4(k,r,{prefix:o,unitless:i,ignore:a,scope:c}),v=pe(g,2),y=v[0],E=v[1],_=v4(h,E);return[y,E,_,r]},function(k){var g=pe(k,3),v=g[2];Pm&&Ul(v,{mark:Ir})},function(k){var g=pe(k,3),v=g[1],y=g[2];if(v){var E=Qr(v,y,{mark:Ir,prepend:"queue",attachTo:f,priority:-999});E[Co]=d,E.setAttribute(pa,r)}});return b},ME=function(n,t,r){var o=pe(n,4),i=o[1],a=o[2],l=o[3],s=r||{},c=s.plain;if(!i)return null;var u=-999,d={"data-rc-order":"prependQueue","data-rc-priority":"".concat(u)},f=tu(i,l,a,d,c);return[u,a,f]};Le(Le(Le({},b4,RE),a4,sE),y4,ME);var Jn=function(){function e(n,t){fr(this,e),Le(this,"name",void 0),Le(this,"style",void 0),Le(this,"_keyframe",!0),this.name=n,this.style=t}return mr(e,[{key:"getName",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return t?"".concat(t,"-").concat(this.name):this.name}}]),e}();function Ti(e){return e.notSplit=!0,e}Ti(["borderTop","borderBottom"]),Ti(["borderTop"]),Ti(["borderBottom"]),Ti(["borderLeft","borderRight"]),Ti(["borderLeft"]),Ti(["borderRight"]);var Ep=p.createContext({});function LE(e){return Qy(e)||Gy(e)||gp(e)||Yy()}function Lm(e,n){for(var t=e,r=0;r<n.length;r+=1){if(t==null)return;t=t[n[r]]}return t}function w4(e,n,t,r){if(!n.length)return t;var o=LE(n),i=o[0],a=o.slice(1),l;return!e&&typeof i=="number"?l=[]:Array.isArray(e)?l=Wn(e):l=de({},e),r&&t===void 0&&a.length===1?delete l[i][a[0]]:l[i]=w4(l[i],a,t,r),l}function qd(e,n,t){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return n.length&&r&&t===void 0&&!Lm(e,n.slice(0,-1))?e:w4(e,n,t,r)}function jE(e){return xn(e)==="object"&&e!==null&&Object.getPrototypeOf(e)===Object.prototype}function K2(e){return Array.isArray(e)?[]:{}}var DE=typeof Reflect>"u"?Object.keys:Reflect.ownKeys;function $E(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=K2(n[0]);return n.forEach(function(o){function i(a,l){var s=new Set(l),c=Lm(o,a),u=Array.isArray(c);if(u||jE(c)){if(!s.has(c)){s.add(c);var d=Lm(r,a);u?r=qd(r,a,[]):(!d||xn(d)!=="object")&&(r=qd(r,a,K2(c))),DE(c).forEach(function(f){i([].concat(Wn(a),[f]),s)})}}else r=qd(r,a,c)}i([])}),r}function BE(){}const zE=p.createContext({}),C4=()=>{const e=()=>{};return e.deprecated=BE,e},HE=p.createContext(void 0);var UE={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"},VE={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"};const S4={placeholder:"Select time",rangePlaceholder:["Start time","End time"]},q2={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},VE),timePickerLocale:Object.assign({},S4)},Bt="${label} is not a valid ${type}",nd={locale:"en",Pagination:UE,DatePicker:q2,TimePicker:S4,Calendar:q2,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",deselectAll:"Deselect all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand",collapse:"Collapse"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:Bt,method:Bt,array:Bt,object:Bt,number:Bt,date:Bt,boolean:Bt,integer:Bt,float:Bt,regexp:Bt,email:Bt,url:Bt,hex:Bt},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh",scanned:"Scanned"},ColorPicker:{presetEmpty:"Empty"}};Object.assign({},nd.Modal);let vc=[];const Q2=()=>vc.reduce((e,n)=>Object.assign(Object.assign({},e),n),nd.Modal);function WE(e){if(e){const n=Object.assign({},e);return vc.push(n),Q2(),()=>{vc=vc.filter(t=>t!==n),Q2()}}Object.assign({},nd.Modal)}const k4=p.createContext(void 0),XE="internalMark",GE=e=>{const{locale:n={},children:t,_ANT_MARK__:r}=e;p.useEffect(()=>WE(n&&n.Modal),[n]);const o=p.useMemo(()=>Object.assign(Object.assign({},n),{exist:!0}),[n]);return p.createElement(k4.Provider,{value:o},t)};function dt(e,n){ZE(e)&&(e="100%");var t=KE(e);return e=n===360?e:Math.min(n,Math.max(0,parseFloat(e))),t&&(e=parseInt(String(e*n),10)/100),Math.abs(e-n)<1e-6?1:(n===360?e=(e<0?e%n+n:e%n)/parseFloat(String(n)):e=e%n/parseFloat(String(n)),e)}function $s(e){return Math.min(1,Math.max(0,e))}function ZE(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function KE(e){return typeof e=="string"&&e.indexOf("%")!==-1}function E4(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Bs(e){return e<=1?"".concat(Number(e)*100,"%"):e}function oi(e){return e.length===1?"0"+e:String(e)}function qE(e,n,t){return{r:dt(e,255)*255,g:dt(n,255)*255,b:dt(t,255)*255}}function Y2(e,n,t){e=dt(e,255),n=dt(n,255),t=dt(t,255);var r=Math.max(e,n,t),o=Math.min(e,n,t),i=0,a=0,l=(r+o)/2;if(r===o)a=0,i=0;else{var s=r-o;switch(a=l>.5?s/(2-r-o):s/(r+o),r){case e:i=(n-t)/s+(n<t?6:0);break;case n:i=(t-e)/s+2;break;case t:i=(e-n)/s+4;break}i/=6}return{h:i,s:a,l}}function Qd(e,n,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*(6*t):t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e}function QE(e,n,t){var r,o,i;if(e=dt(e,360),n=dt(n,100),t=dt(t,100),n===0)o=t,i=t,r=t;else{var a=t<.5?t*(1+n):t+n-t*n,l=2*t-a;r=Qd(l,a,e+1/3),o=Qd(l,a,e),i=Qd(l,a,e-1/3)}return{r:r*255,g:o*255,b:i*255}}function jm(e,n,t){e=dt(e,255),n=dt(n,255),t=dt(t,255);var r=Math.max(e,n,t),o=Math.min(e,n,t),i=0,a=r,l=r-o,s=r===0?0:l/r;if(r===o)i=0;else{switch(r){case e:i=(n-t)/l+(n<t?6:0);break;case n:i=(t-e)/l+2;break;case t:i=(e-n)/l+4;break}i/=6}return{h:i,s,v:a}}function YE(e,n,t){e=dt(e,360)*6,n=dt(n,100),t=dt(t,100);var r=Math.floor(e),o=e-r,i=t*(1-n),a=t*(1-o*n),l=t*(1-(1-o)*n),s=r%6,c=[t,a,i,i,l,t][s],u=[l,t,t,a,i,i][s],d=[i,i,l,t,t,a][s];return{r:c*255,g:u*255,b:d*255}}function Dm(e,n,t,r){var o=[oi(Math.round(e).toString(16)),oi(Math.round(n).toString(16)),oi(Math.round(t).toString(16))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function JE(e,n,t,r,o){var i=[oi(Math.round(e).toString(16)),oi(Math.round(n).toString(16)),oi(Math.round(t).toString(16)),oi(ex(r))];return o&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function ex(e){return Math.round(parseFloat(e)*255).toString(16)}function J2(e){return zt(e)/255}function zt(e){return parseInt(e,16)}function nx(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var $m={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Mi(e){var n={r:0,g:0,b:0},t=1,r=null,o=null,i=null,a=!1,l=!1;return typeof e=="string"&&(e=ox(e)),typeof e=="object"&&(Ur(e.r)&&Ur(e.g)&&Ur(e.b)?(n=qE(e.r,e.g,e.b),a=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Ur(e.h)&&Ur(e.s)&&Ur(e.v)?(r=Bs(e.s),o=Bs(e.v),n=YE(e.h,r,o),a=!0,l="hsv"):Ur(e.h)&&Ur(e.s)&&Ur(e.l)&&(r=Bs(e.s),i=Bs(e.l),n=QE(e.h,r,i),a=!0,l="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(t=e.a)),t=E4(t),{ok:a,format:e.format||l,r:Math.min(255,Math.max(n.r,0)),g:Math.min(255,Math.max(n.g,0)),b:Math.min(255,Math.max(n.b,0)),a:t}}var tx="[-\\+]?\\d+%?",rx="[-\\+]?\\d*\\.\\d+%?",So="(?:".concat(rx,")|(?:").concat(tx,")"),Yd="[\\s|\\(]+(".concat(So,")[,|\\s]+(").concat(So,")[,|\\s]+(").concat(So,")\\s*\\)?"),Jd="[\\s|\\(]+(".concat(So,")[,|\\s]+(").concat(So,")[,|\\s]+(").concat(So,")[,|\\s]+(").concat(So,")\\s*\\)?"),br={CSS_UNIT:new RegExp(So),rgb:new RegExp("rgb"+Yd),rgba:new RegExp("rgba"+Jd),hsl:new RegExp("hsl"+Yd),hsla:new RegExp("hsla"+Jd),hsv:new RegExp("hsv"+Yd),hsva:new RegExp("hsva"+Jd),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function ox(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var n=!1;if($m[e])e=$m[e],n=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t=br.rgb.exec(e);return t?{r:t[1],g:t[2],b:t[3]}:(t=br.rgba.exec(e),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=br.hsl.exec(e),t?{h:t[1],s:t[2],l:t[3]}:(t=br.hsla.exec(e),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=br.hsv.exec(e),t?{h:t[1],s:t[2],v:t[3]}:(t=br.hsva.exec(e),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=br.hex8.exec(e),t?{r:zt(t[1]),g:zt(t[2]),b:zt(t[3]),a:J2(t[4]),format:n?"name":"hex8"}:(t=br.hex6.exec(e),t?{r:zt(t[1]),g:zt(t[2]),b:zt(t[3]),format:n?"name":"hex"}:(t=br.hex4.exec(e),t?{r:zt(t[1]+t[1]),g:zt(t[2]+t[2]),b:zt(t[3]+t[3]),a:J2(t[4]+t[4]),format:n?"name":"hex8"}:(t=br.hex3.exec(e),t?{r:zt(t[1]+t[1]),g:zt(t[2]+t[2]),b:zt(t[3]+t[3]),format:n?"name":"hex"}:!1)))))))))}function Ur(e){return!!br.CSS_UNIT.exec(String(e))}var Et=function(){function e(n,t){n===void 0&&(n=""),t===void 0&&(t={});var r;if(n instanceof e)return n;typeof n=="number"&&(n=nx(n)),this.originalInput=n;var o=Mi(n);this.originalInput=n,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=t.format)!==null&&r!==void 0?r:o.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var n=this.toRgb();return(n.r*299+n.g*587+n.b*114)/1e3},e.prototype.getLuminance=function(){var n=this.toRgb(),t,r,o,i=n.r/255,a=n.g/255,l=n.b/255;return i<=.03928?t=i/12.92:t=Math.pow((i+.055)/1.055,2.4),a<=.03928?r=a/12.92:r=Math.pow((a+.055)/1.055,2.4),l<=.03928?o=l/12.92:o=Math.pow((l+.055)/1.055,2.4),.2126*t+.7152*r+.0722*o},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(n){return this.a=E4(n),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){var n=this.toHsl().s;return n===0},e.prototype.toHsv=function(){var n=jm(this.r,this.g,this.b);return{h:n.h*360,s:n.s,v:n.v,a:this.a}},e.prototype.toHsvString=function(){var n=jm(this.r,this.g,this.b),t=Math.round(n.h*360),r=Math.round(n.s*100),o=Math.round(n.v*100);return this.a===1?"hsv(".concat(t,", ").concat(r,"%, ").concat(o,"%)"):"hsva(".concat(t,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var n=Y2(this.r,this.g,this.b);return{h:n.h*360,s:n.s,l:n.l,a:this.a}},e.prototype.toHslString=function(){var n=Y2(this.r,this.g,this.b),t=Math.round(n.h*360),r=Math.round(n.s*100),o=Math.round(n.l*100);return this.a===1?"hsl(".concat(t,", ").concat(r,"%, ").concat(o,"%)"):"hsla(".concat(t,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(n){return n===void 0&&(n=!1),Dm(this.r,this.g,this.b,n)},e.prototype.toHexString=function(n){return n===void 0&&(n=!1),"#"+this.toHex(n)},e.prototype.toHex8=function(n){return n===void 0&&(n=!1),JE(this.r,this.g,this.b,this.a,n)},e.prototype.toHex8String=function(n){return n===void 0&&(n=!1),"#"+this.toHex8(n)},e.prototype.toHexShortString=function(n){return n===void 0&&(n=!1),this.a===1?this.toHexString(n):this.toHex8String(n)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var n=Math.round(this.r),t=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(n,", ").concat(t,", ").concat(r,")"):"rgba(".concat(n,", ").concat(t,", ").concat(r,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var n=function(t){return"".concat(Math.round(dt(t,255)*100),"%")};return{r:n(this.r),g:n(this.g),b:n(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var n=function(t){return Math.round(dt(t,255)*100)};return this.a===1?"rgb(".concat(n(this.r),"%, ").concat(n(this.g),"%, ").concat(n(this.b),"%)"):"rgba(".concat(n(this.r),"%, ").concat(n(this.g),"%, ").concat(n(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var n="#"+Dm(this.r,this.g,this.b,!1),t=0,r=Object.entries($m);t<r.length;t++){var o=r[t],i=o[0],a=o[1];if(n===a)return i}return!1},e.prototype.toString=function(n){var t=!!n;n=n??this.format;var r=!1,o=this.a<1&&this.a>=0,i=!t&&o&&(n.startsWith("hex")||n==="name");return i?n==="name"&&this.a===0?this.toName():this.toRgbString():(n==="rgb"&&(r=this.toRgbString()),n==="prgb"&&(r=this.toPercentageRgbString()),(n==="hex"||n==="hex6")&&(r=this.toHexString()),n==="hex3"&&(r=this.toHexString(!0)),n==="hex4"&&(r=this.toHex8String(!0)),n==="hex8"&&(r=this.toHex8String()),n==="name"&&(r=this.toName()),n==="hsl"&&(r=this.toHslString()),n==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(n){n===void 0&&(n=10);var t=this.toHsl();return t.l+=n/100,t.l=$s(t.l),new e(t)},e.prototype.brighten=function(n){n===void 0&&(n=10);var t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(n/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(n/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(n/100)))),new e(t)},e.prototype.darken=function(n){n===void 0&&(n=10);var t=this.toHsl();return t.l-=n/100,t.l=$s(t.l),new e(t)},e.prototype.tint=function(n){return n===void 0&&(n=10),this.mix("white",n)},e.prototype.shade=function(n){return n===void 0&&(n=10),this.mix("black",n)},e.prototype.desaturate=function(n){n===void 0&&(n=10);var t=this.toHsl();return t.s-=n/100,t.s=$s(t.s),new e(t)},e.prototype.saturate=function(n){n===void 0&&(n=10);var t=this.toHsl();return t.s+=n/100,t.s=$s(t.s),new e(t)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(n){var t=this.toHsl(),r=(t.h+n)%360;return t.h=r<0?360+r:r,new e(t)},e.prototype.mix=function(n,t){t===void 0&&(t=50);var r=this.toRgb(),o=new e(n).toRgb(),i=t/100,a={r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a};return new e(a)},e.prototype.analogous=function(n,t){n===void 0&&(n=6),t===void 0&&(t=30);var r=this.toHsl(),o=360/t,i=[this];for(r.h=(r.h-(o*n>>1)+720)%360;--n;)r.h=(r.h+o)%360,i.push(new e(r));return i},e.prototype.complement=function(){var n=this.toHsl();return n.h=(n.h+180)%360,new e(n)},e.prototype.monochromatic=function(n){n===void 0&&(n=6);for(var t=this.toHsv(),r=t.h,o=t.s,i=t.v,a=[],l=1/n;n--;)a.push(new e({h:r,s:o,v:i})),i=(i+l)%1;return a},e.prototype.splitcomplement=function(){var n=this.toHsl(),t=n.h;return[this,new e({h:(t+72)%360,s:n.s,l:n.l}),new e({h:(t+216)%360,s:n.s,l:n.l})]},e.prototype.onBackground=function(n){var t=this.toRgb(),r=new e(n).toRgb(),o=t.a+r.a*(1-t.a);return new e({r:(t.r*t.a+r.r*r.a*(1-t.a))/o,g:(t.g*t.a+r.g*r.a*(1-t.a))/o,b:(t.b*t.a+r.b*r.a*(1-t.a))/o,a:o})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(n){for(var t=this.toHsl(),r=t.h,o=[this],i=360/n,a=1;a<n;a++)o.push(new e({h:(r+a*i)%360,s:t.s,l:t.l}));return o},e.prototype.equals=function(n){return this.toRgbString()===new e(n).toRgbString()},e}(),zs=2,eg=.16,ix=.05,ax=.05,lx=.15,x4=5,I4=4,sx=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function ng(e){var n=e.r,t=e.g,r=e.b,o=jm(n,t,r);return{h:o.h*360,s:o.s,v:o.v}}function Hs(e){var n=e.r,t=e.g,r=e.b;return"#".concat(Dm(n,t,r,!1))}function cx(e,n,t){var r=t/100,o={r:(n.r-e.r)*r+e.r,g:(n.g-e.g)*r+e.g,b:(n.b-e.b)*r+e.b};return o}function tg(e,n,t){var r;return Math.round(e.h)>=60&&Math.round(e.h)<=240?r=t?Math.round(e.h)-zs*n:Math.round(e.h)+zs*n:r=t?Math.round(e.h)+zs*n:Math.round(e.h)-zs*n,r<0?r+=360:r>=360&&(r-=360),r}function rg(e,n,t){if(e.h===0&&e.s===0)return e.s;var r;return t?r=e.s-eg*n:n===I4?r=e.s+eg:r=e.s+ix*n,r>1&&(r=1),t&&n===x4&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2))}function og(e,n,t){var r;return t?r=e.v+ax*n:r=e.v-lx*n,r>1&&(r=1),Number(r.toFixed(2))}function vi(e){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=[],r=Mi(e),o=x4;o>0;o-=1){var i=ng(r),a=Hs(Mi({h:tg(i,o,!0),s:rg(i,o,!0),v:og(i,o,!0)}));t.push(a)}t.push(Hs(r));for(var l=1;l<=I4;l+=1){var s=ng(r),c=Hs(Mi({h:tg(s,l),s:rg(s,l),v:og(s,l)}));t.push(c)}return n.theme==="dark"?sx.map(function(u){var d=u.index,f=u.opacity,m=Hs(cx(Mi(n.backgroundColor||"#141414"),Mi(t[d]),f*100));return m}):t}var ef={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},bc={},nf={};Object.keys(ef).forEach(function(e){bc[e]=vi(ef[e]),bc[e].primary=bc[e][5],nf[e]=vi(ef[e],{theme:"dark",backgroundColor:"#141414"}),nf[e].primary=nf[e][5]});var ux=bc.blue;const _4={blue:"#1677ff",purple:"#722ED1",cyan:"#13C2C2",green:"#52C41A",magenta:"#EB2F96",pink:"#eb2f96",red:"#F5222D",orange:"#FA8C16",yellow:"#FADB14",volcano:"#FA541C",geekblue:"#2F54EB",gold:"#FAAD14",lime:"#A0D911"},Xl=Object.assign(Object.assign({},_4),{colorPrimary:"#1677ff",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#1677ff",colorLink:"",colorTextBase:"",colorBgBase:"",fontFamily:`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,fontFamilyCode:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",fontSize:14,lineWidth:1,lineType:"solid",motionUnit:.1,motionBase:0,motionEaseOutCirc:"cubic-bezier(0.08, 0.82, 0.17, 1)",motionEaseInOutCirc:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",motionEaseOut:"cubic-bezier(0.215, 0.61, 0.355, 1)",motionEaseInOut:"cubic-bezier(0.645, 0.045, 0.355, 1)",motionEaseOutBack:"cubic-bezier(0.12, 0.4, 0.29, 1.46)",motionEaseInBack:"cubic-bezier(0.71, -0.46, 0.88, 0.6)",motionEaseInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",motionEaseOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",borderRadius:6,sizeUnit:4,sizeStep:4,sizePopupArrow:16,controlHeight:32,zIndexBase:0,zIndexPopupBase:1e3,opacityImage:1,wireframe:!1,motion:!0});function dx(e,n){let{generateColorPalettes:t,generateNeutralColorPalettes:r}=n;const{colorSuccess:o,colorWarning:i,colorError:a,colorInfo:l,colorPrimary:s,colorBgBase:c,colorTextBase:u}=e,d=t(s),f=t(o),m=t(i),h=t(a),b=t(l),k=r(c,u),g=e.colorLink||e.colorInfo,v=t(g);return Object.assign(Object.assign({},k),{colorPrimaryBg:d[1],colorPrimaryBgHover:d[2],colorPrimaryBorder:d[3],colorPrimaryBorderHover:d[4],colorPrimaryHover:d[5],colorPrimary:d[6],colorPrimaryActive:d[7],colorPrimaryTextHover:d[8],colorPrimaryText:d[9],colorPrimaryTextActive:d[10],colorSuccessBg:f[1],colorSuccessBgHover:f[2],colorSuccessBorder:f[3],colorSuccessBorderHover:f[4],colorSuccessHover:f[4],colorSuccess:f[6],colorSuccessActive:f[7],colorSuccessTextHover:f[8],colorSuccessText:f[9],colorSuccessTextActive:f[10],colorErrorBg:h[1],colorErrorBgHover:h[2],colorErrorBgActive:h[3],colorErrorBorder:h[3],colorErrorBorderHover:h[4],colorErrorHover:h[5],colorError:h[6],colorErrorActive:h[7],colorErrorTextHover:h[8],colorErrorText:h[9],colorErrorTextActive:h[10],colorWarningBg:m[1],colorWarningBgHover:m[2],colorWarningBorder:m[3],colorWarningBorderHover:m[4],colorWarningHover:m[4],colorWarning:m[6],colorWarningActive:m[7],colorWarningTextHover:m[8],colorWarningText:m[9],colorWarningTextActive:m[10],colorInfoBg:b[1],colorInfoBgHover:b[2],colorInfoBorder:b[3],colorInfoBorderHover:b[4],colorInfoHover:b[4],colorInfo:b[6],colorInfoActive:b[7],colorInfoTextHover:b[8],colorInfoText:b[9],colorInfoTextActive:b[10],colorLinkHover:v[4],colorLink:v[6],colorLinkActive:v[7],colorBgMask:new Et("#000").setAlpha(.45).toRgbString(),colorWhite:"#fff"})}const fx=e=>{let n=e,t=e,r=e,o=e;return e<6&&e>=5?n=e+1:e<16&&e>=6?n=e+2:e>=16&&(n=16),e<7&&e>=5?t=4:e<8&&e>=7?t=5:e<14&&e>=8?t=6:e<16&&e>=14?t=7:e>=16&&(t=8),e<6&&e>=2?r=1:e>=6&&(r=2),e>4&&e<8?o=4:e>=8&&(o=6),{borderRadius:e,borderRadiusXS:r,borderRadiusSM:t,borderRadiusLG:n,borderRadiusOuter:o}};function mx(e){const{motionUnit:n,motionBase:t,borderRadius:r,lineWidth:o}=e;return Object.assign({motionDurationFast:`${(t+n).toFixed(1)}s`,motionDurationMid:`${(t+n*2).toFixed(1)}s`,motionDurationSlow:`${(t+n*3).toFixed(1)}s`,lineWidthBold:o+1},fx(r))}const hx=e=>{const{controlHeight:n}=e;return{controlHeightSM:n*.75,controlHeightXS:n*.5,controlHeightLG:n*1.25}};function yc(e){return(e+8)/e}function px(e){const n=new Array(10).fill(null).map((t,r)=>{const o=r-1,i=e*Math.pow(2.71828,o/5),a=r>1?Math.floor(i):Math.ceil(i);return Math.floor(a/2)*2});return n[1]=e,n.map(t=>({size:t,lineHeight:yc(t)}))}const gx=e=>{const n=px(e),t=n.map(u=>u.size),r=n.map(u=>u.lineHeight),o=t[1],i=t[0],a=t[2],l=r[1],s=r[0],c=r[2];return{fontSizeSM:i,fontSize:o,fontSizeLG:a,fontSizeXL:t[3],fontSizeHeading1:t[6],fontSizeHeading2:t[5],fontSizeHeading3:t[4],fontSizeHeading4:t[3],fontSizeHeading5:t[2],lineHeight:l,lineHeightLG:c,lineHeightSM:s,fontHeight:Math.round(l*o),fontHeightLG:Math.round(c*a),fontHeightSM:Math.round(s*i),lineHeightHeading1:r[6],lineHeightHeading2:r[5],lineHeightHeading3:r[4],lineHeightHeading4:r[3],lineHeightHeading5:r[2]}};function vx(e){const{sizeUnit:n,sizeStep:t}=e;return{sizeXXL:n*(t+8),sizeXL:n*(t+4),sizeLG:n*(t+2),sizeMD:n*(t+1),sizeMS:n*t,size:n*t,sizeSM:n*(t-1),sizeXS:n*(t-2),sizeXXS:n*(t-3)}}const Vr=(e,n)=>new Et(e).setAlpha(n).toRgbString(),Ga=(e,n)=>new Et(e).darken(n).toHexString(),bx=e=>{const n=vi(e);return{1:n[0],2:n[1],3:n[2],4:n[3],5:n[4],6:n[5],7:n[6],8:n[4],9:n[5],10:n[6]}},yx=(e,n)=>{const t=e||"#fff",r=n||"#000";return{colorBgBase:t,colorTextBase:r,colorText:Vr(r,.88),colorTextSecondary:Vr(r,.65),colorTextTertiary:Vr(r,.45),colorTextQuaternary:Vr(r,.25),colorFill:Vr(r,.15),colorFillSecondary:Vr(r,.06),colorFillTertiary:Vr(r,.04),colorFillQuaternary:Vr(r,.02),colorBgLayout:Ga(t,4),colorBgContainer:Ga(t,0),colorBgElevated:Ga(t,0),colorBgSpotlight:Vr(r,.85),colorBgBlur:"transparent",colorBorder:Ga(t,15),colorBorderSecondary:Ga(t,6)}};function wx(e){const n=Object.keys(_4).map(t=>{const r=vi(e[t]);return new Array(10).fill(1).reduce((o,i,a)=>(o[`${t}-${a+1}`]=r[a],o[`${t}${a+1}`]=r[a],o),{})}).reduce((t,r)=>(t=Object.assign(Object.assign({},t),r),t),{});return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},e),n),dx(e,{generateColorPalettes:bx,generateNeutralColorPalettes:yx})),gx(e.fontSize)),vx(e)),hx(e)),mx(e))}const A4=Om(wx),Bm={token:Xl,override:{override:Xl},hashed:!0},T4=Ye.createContext(Bm),O4="anticon",Cx=(e,n)=>n||(e?`ant-${e}`:"ant"),it=p.createContext({getPrefixCls:Cx,iconPrefixCls:O4}),Sx=`-ant-${Date.now()}-${Math.random()}`;function kx(e,n){const t={},r=(a,l)=>{let s=a.clone();return s=(l==null?void 0:l(s))||s,s.toRgbString()},o=(a,l)=>{const s=new Et(a),c=vi(s.toRgbString());t[`${l}-color`]=r(s),t[`${l}-color-disabled`]=c[1],t[`${l}-color-hover`]=c[4],t[`${l}-color-active`]=c[6],t[`${l}-color-outline`]=s.clone().setAlpha(.2).toRgbString(),t[`${l}-color-deprecated-bg`]=c[0],t[`${l}-color-deprecated-border`]=c[2]};if(n.primaryColor){o(n.primaryColor,"primary");const a=new Et(n.primaryColor),l=vi(a.toRgbString());l.forEach((c,u)=>{t[`primary-${u+1}`]=c}),t["primary-color-deprecated-l-35"]=r(a,c=>c.lighten(35)),t["primary-color-deprecated-l-20"]=r(a,c=>c.lighten(20)),t["primary-color-deprecated-t-20"]=r(a,c=>c.tint(20)),t["primary-color-deprecated-t-50"]=r(a,c=>c.tint(50)),t["primary-color-deprecated-f-12"]=r(a,c=>c.setAlpha(c.getAlpha()*.12));const s=new Et(l[0]);t["primary-color-active-deprecated-f-30"]=r(s,c=>c.setAlpha(c.getAlpha()*.3)),t["primary-color-active-deprecated-d-02"]=r(s,c=>c.darken(2))}return n.successColor&&o(n.successColor,"success"),n.warningColor&&o(n.warningColor,"warning"),n.errorColor&&o(n.errorColor,"error"),n.infoColor&&o(n.infoColor,"info"),`
  :root {
    ${Object.keys(t).map(a=>`--${e}-${a}: ${t[a]};`).join(`
`)}
  }
  `.trim()}function Ex(e,n){const t=kx(e,n);Qt()&&Qr(t,`${Sx}-dynamic-theme`)}const ru=p.createContext(!1),xx=e=>{let{children:n,disabled:t}=e;const r=p.useContext(ru);return p.createElement(ru.Provider,{value:t??r},n)},va=p.createContext(void 0),Ix=e=>{let{children:n,size:t}=e;const r=p.useContext(va);return p.createElement(va.Provider,{value:t||r},n)};function _x(){const e=p.useContext(ru),n=p.useContext(va);return{componentDisabled:e,componentSize:n}}const ou=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"],Ax="5.18.3";function tf(e){return e>=0&&e<=255}function Us(e,n){const{r:t,g:r,b:o,a:i}=new Et(e).toRgb();if(i<1)return e;const{r:a,g:l,b:s}=new Et(n).toRgb();for(let c=.01;c<=1;c+=.01){const u=Math.round((t-a*(1-c))/c),d=Math.round((r-l*(1-c))/c),f=Math.round((o-s*(1-c))/c);if(tf(u)&&tf(d)&&tf(f))return new Et({r:u,g:d,b:f,a:Math.round(c*100)/100}).toRgbString()}return new Et({r:t,g:r,b:o,a:1}).toRgbString()}var Tx=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};function P4(e){const{override:n}=e,t=Tx(e,["override"]),r=Object.assign({},n);Object.keys(Xl).forEach(f=>{delete r[f]});const o=Object.assign(Object.assign({},t),r),i=480,a=576,l=768,s=992,c=1200,u=1600;if(o.motion===!1){const f="0s";o.motionDurationFast=f,o.motionDurationMid=f,o.motionDurationSlow=f}return Object.assign(Object.assign(Object.assign({},o),{colorFillContent:o.colorFillSecondary,colorFillContentHover:o.colorFill,colorFillAlter:o.colorFillQuaternary,colorBgContainerDisabled:o.colorFillTertiary,colorBorderBg:o.colorBgContainer,colorSplit:Us(o.colorBorderSecondary,o.colorBgContainer),colorTextPlaceholder:o.colorTextQuaternary,colorTextDisabled:o.colorTextQuaternary,colorTextHeading:o.colorText,colorTextLabel:o.colorTextSecondary,colorTextDescription:o.colorTextTertiary,colorTextLightSolid:o.colorWhite,colorHighlight:o.colorError,colorBgTextHover:o.colorFillSecondary,colorBgTextActive:o.colorFill,colorIcon:o.colorTextTertiary,colorIconHover:o.colorText,colorErrorOutline:Us(o.colorErrorBg,o.colorBgContainer),colorWarningOutline:Us(o.colorWarningBg,o.colorBgContainer),fontSizeIcon:o.fontSizeSM,lineWidthFocus:o.lineWidth*4,lineWidth:o.lineWidth,controlOutlineWidth:o.lineWidth*2,controlInteractiveSize:o.controlHeight/2,controlItemBgHover:o.colorFillTertiary,controlItemBgActive:o.colorPrimaryBg,controlItemBgActiveHover:o.colorPrimaryBgHover,controlItemBgActiveDisabled:o.colorFill,controlTmpOutline:o.colorFillQuaternary,controlOutline:Us(o.colorPrimaryBg,o.colorBgContainer),lineType:o.lineType,borderRadius:o.borderRadius,borderRadiusXS:o.borderRadiusXS,borderRadiusSM:o.borderRadiusSM,borderRadiusLG:o.borderRadiusLG,fontWeightStrong:600,opacityLoading:.65,linkDecoration:"none",linkHoverDecoration:"none",linkFocusDecoration:"none",controlPaddingHorizontal:12,controlPaddingHorizontalSM:8,paddingXXS:o.sizeXXS,paddingXS:o.sizeXS,paddingSM:o.sizeSM,padding:o.size,paddingMD:o.sizeMD,paddingLG:o.sizeLG,paddingXL:o.sizeXL,paddingContentHorizontalLG:o.sizeLG,paddingContentVerticalLG:o.sizeMS,paddingContentHorizontal:o.sizeMS,paddingContentVertical:o.sizeSM,paddingContentHorizontalSM:o.size,paddingContentVerticalSM:o.sizeXS,marginXXS:o.sizeXXS,marginXS:o.sizeXS,marginSM:o.sizeSM,margin:o.size,marginMD:o.sizeMD,marginLG:o.sizeLG,marginXL:o.sizeXL,marginXXL:o.sizeXXL,boxShadow:`
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
    `,screenXS:i,screenXSMin:i,screenXSMax:a-1,screenSM:a,screenSMMin:a,screenSMMax:l-1,screenMD:l,screenMDMin:l,screenMDMax:s-1,screenLG:s,screenLGMin:s,screenLGMax:c-1,screenXL:c,screenXLMin:c,screenXLMax:u-1,screenXXL:u,screenXXLMin:u,boxShadowPopoverArrow:"2px 2px 5px rgba(0, 0, 0, 0.05)",boxShadowCard:`
      0 1px 2px -2px ${new Et("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Et("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Et("rgba(0, 0, 0, 0.09)").toRgbString()}
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
    `,boxShadowTabsOverflowLeft:"inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowRight:"inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowTop:"inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowBottom:"inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"}),r)}var ig=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const N4={lineHeight:!0,lineHeightSM:!0,lineHeightLG:!0,lineHeightHeading1:!0,lineHeightHeading2:!0,lineHeightHeading3:!0,lineHeightHeading4:!0,lineHeightHeading5:!0,opacityLoading:!0,fontWeightStrong:!0,zIndexPopupBase:!0,zIndexBase:!0},R4={size:!0,sizeSM:!0,sizeLG:!0,sizeMD:!0,sizeXS:!0,sizeXXS:!0,sizeMS:!0,sizeXL:!0,sizeXXL:!0,sizeUnit:!0,sizeStep:!0,motionBase:!0,motionUnit:!0},Ox={screenXS:!0,screenXSMin:!0,screenXSMax:!0,screenSM:!0,screenSMMin:!0,screenSMMax:!0,screenMD:!0,screenMDMin:!0,screenMDMax:!0,screenLG:!0,screenLGMin:!0,screenLGMax:!0,screenXL:!0,screenXLMin:!0,screenXLMax:!0,screenXXL:!0,screenXXLMin:!0},F4=(e,n,t)=>{const r=t.getDerivativeToken(e),{override:o}=n,i=ig(n,["override"]);let a=Object.assign(Object.assign({},r),{override:o});return a=P4(a),i&&Object.entries(i).forEach(l=>{let[s,c]=l;const{theme:u}=c,d=ig(c,["theme"]);let f=d;u&&(f=F4(Object.assign(Object.assign({},a),d),{override:d},u)),a[s]=f}),a};function Dr(){const{token:e,hashed:n,theme:t,override:r,cssVar:o}=Ye.useContext(T4),i=`${Ax}-${n||""}`,a=t||A4,[l,s,c]=lE(a,[Xl,e],{salt:i,override:r,getComputedToken:F4,formatToken:P4,cssVar:o&&{prefix:o.prefix,key:o.key,unitless:N4,ignore:R4,preserve:Ox}});return[a,c,n?s:"",l,o]}const Px=1e3*60*10;let Nx=function(){function e(){fr(this,e),this.map=new Map,this.objectIDMap=new WeakMap,this.nextID=0,this.lastAccessBeat=new Map,this.accessBeat=0}return mr(e,[{key:"set",value:function(t,r){this.clear();const o=this.getCompositeKey(t);this.map.set(o,r),this.lastAccessBeat.set(o,Date.now())}},{key:"get",value:function(t){const r=this.getCompositeKey(t),o=this.map.get(r);return this.lastAccessBeat.set(r,Date.now()),this.accessBeat+=1,o}},{key:"getCompositeKey",value:function(t){return t.map(o=>o&&typeof o=="object"?`obj_${this.getObjectID(o)}`:`${typeof o}_${o}`).join("|")}},{key:"getObjectID",value:function(t){if(this.objectIDMap.has(t))return this.objectIDMap.get(t);const r=this.nextID;return this.objectIDMap.set(t,r),this.nextID+=1,r}},{key:"clear",value:function(){if(this.accessBeat>1e4){const t=Date.now();this.lastAccessBeat.forEach((r,o)=>{t-r>Px&&(this.map.delete(o),this.lastAccessBeat.delete(o))}),this.accessBeat=0}}}])}();const ag=new Nx;function Rx(e,n){return Ye.useMemo(()=>{const t=ag.get(n);if(t)return t;const r=e();return ag.set(n,r),r},n)}function kt(e){var n=p.useRef();n.current=e;var t=p.useCallback(function(){for(var r,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(r=n.current)===null||r===void 0?void 0:r.call.apply(r,[n].concat(i))},[]);return t}function Gl(e){var n=p.useRef(!1),t=p.useState(e),r=pe(t,2),o=r[0],i=r[1];p.useEffect(function(){return n.current=!1,function(){n.current=!0}},[]);function a(l,s){s&&n.current||i(l)}return[o,a]}function rf(e){return e!==void 0}function bl(e,n){var t=n||{},r=t.defaultValue,o=t.value,i=t.onChange,a=t.postState,l=Gl(function(){return rf(o)?o:rf(r)?typeof r=="function"?r():r:typeof e=="function"?e():e}),s=pe(l,2),c=s[0],u=s[1],d=o!==void 0?o:c,f=a?a(d):d,m=kt(i),h=Gl([d]),b=pe(h,2),k=b[0],g=b[1];V2(function(){var y=k[0];c!==y&&m(c,y)},[k]),V2(function(){rf(o)||u(o)},[o]);var v=kt(function(y,E){u(y,E),g([d],E)});return[f,v]}const Fx={overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},xp=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return{boxSizing:"border-box",margin:0,padding:0,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,listStyle:"none",fontFamily:n?"inherit":e.fontFamily}},M4=()=>({display:"inline-flex",alignItems:"center",color:"inherit",fontStyle:"normal",lineHeight:0,textAlign:"center",textTransform:"none",verticalAlign:"-0.125em",textRendering:"optimizeLegibility","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale","> *":{lineHeight:1},svg:{display:"inline-block"}}),lg=()=>({"&::before":{display:"table",content:'""'},"&::after":{display:"table",clear:"both",content:'""'}}),Mx=e=>({a:{color:e.colorLink,textDecoration:e.linkDecoration,backgroundColor:"transparent",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"-webkit-text-decoration-skip":"objects","&:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive},"&:active,\n  &:hover":{textDecoration:e.linkHoverDecoration,outline:0},"&:focus":{textDecoration:e.linkFocusDecoration,outline:0},"&[disabled]":{color:e.colorTextDisabled,cursor:"not-allowed"}}}),Lx=(e,n,t,r)=>{const o=`[class^="${n}"], [class*=" ${n}"]`,i=t?`.${t}`:o,a={boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"}};let l={};return r!==!1&&(l={fontFamily:e.fontFamily,fontSize:e.fontSize}),{[i]:Object.assign(Object.assign(Object.assign({},l),a),{[o]:a})}},L4=e=>({outline:`${Ve(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,outlineOffset:1,transition:"outline-offset 0s, outline 0s"}),jx=e=>({"&:focus-visible":Object.assign({},L4(e))});function Dx(e){return e==="js"?{max:Math.max,min:Math.min}:{max:function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return`max(${t.map(o=>Ve(o)).join(",")})`},min:function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return`min(${t.map(o=>Ve(o)).join(",")})`}}}const j4=typeof CSSINJS_STATISTIC<"u";let zm=!0;function Tr(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];if(!j4)return Object.assign.apply(Object,[{}].concat(n));zm=!1;const r={};return n.forEach(o=>{Object.keys(o).forEach(a=>{Object.defineProperty(r,a,{configurable:!0,enumerable:!0,get:()=>o[a]})})}),zm=!0,r}const sg={};function $x(){}const Bx=e=>{let n,t=e,r=$x;return j4&&typeof Proxy<"u"&&(n=new Set,t=new Proxy(e,{get(o,i){return zm&&n.add(i),o[i]}}),r=(o,i)=>{var a;sg[o]={global:Array.from(n),component:Object.assign(Object.assign({},(a=sg[o])===null||a===void 0?void 0:a.component),i)}}),{token:t,keys:n,flush:r}},D4=(e,n)=>{const[t,r]=Dr();return Mm({theme:t,token:r,hashId:"",path:["ant-design-icons",e],nonce:()=>n==null?void 0:n.nonce,layer:{name:"antd"}},()=>[{[`.${e}`]:Object.assign(Object.assign({},M4()),{[`.${e} .${e}-icon`]:{display:"block"}})}])},$4=(e,n,t)=>{var r;return typeof t=="function"?t(Tr(n,(r=n[e])!==null&&r!==void 0?r:{})):t??{}},B4=(e,n,t,r)=>{const o=Object.assign({},n[e]);if(r!=null&&r.deprecatedTokens){const{deprecatedTokens:a}=r;a.forEach(l=>{let[s,c]=l;var u;(o!=null&&o[s]||o!=null&&o[c])&&((u=o[c])!==null&&u!==void 0||(o[c]=o==null?void 0:o[s]))})}const i=Object.assign(Object.assign({},t),o);return Object.keys(i).forEach(a=>{i[a]===n[a]&&delete i[a]}),i},cg=(e,n)=>`${[n,e.replace(/([A-Z]+)([A-Z][a-z]+)/g,"$1-$2").replace(/([a-z])([A-Z])/g,"$1-$2")].filter(Boolean).join("-")}`;function Ip(e,n,t){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=Array.isArray(e)?e:[e,e],[i]=o,a=o.join("-");return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:l;const[c,u,d,f,m]=Dr(),{getPrefixCls:h,iconPrefixCls:b,csp:k}=p.useContext(it),g=h(),v=m?"css":"js",y=Rx(()=>{const N=new Set;return m&&Object.keys(r.unitless||{}).forEach(R=>{N.add(fc(R,m.prefix)),N.add(fc(R,cg(i,m.prefix)))}),zk(v,N)},[v,i,m&&m.prefix]),{max:E,min:_}=Dx(v),w={theme:c,token:f,hashId:d,nonce:()=>k==null?void 0:k.nonce,clientOnly:r.clientOnly,layer:{name:"antd"},order:r.order||-999};return Mm(Object.assign(Object.assign({},w),{clientOnly:!1,path:["Shared",g]}),()=>[{"&":Mx(f)}]),D4(b,k),[Mm(Object.assign(Object.assign({},w),{path:[a,l,b]}),()=>{if(r.injectStyle===!1)return[];const{token:N,flush:R}=Bx(f),V=$4(i,u,t),$=`.${l}`,z=B4(i,u,V,{deprecatedTokens:r.deprecatedTokens});m&&Object.keys(V).forEach(Z=>{V[Z]=`var(${fc(Z,cg(i,m.prefix))})`});const j=Tr(N,{componentCls:$,prefixCls:l,iconCls:`.${b}`,antCls:`.${g}`,calc:y,max:E,min:_},m?V:z),H=n(j,{hashId:d,prefixCls:l,rootPrefixCls:g,iconPrefixCls:b});return R(i,z),[r.resetStyle===!1?null:Lx(j,l,s,r.resetFont),H]}),d]}}const zx=(e,n,t,r)=>{const o=Ip(e,n,t,Object.assign({resetStyle:!1,order:-998},r));return a=>{let{prefixCls:l,rootCls:s=l}=a;return o(l,s),null}},Hx=(e,n,t)=>{const{unitless:r,injectStyle:o=!0,prefixToken:i}=t,a=s=>{let{rootCls:c,cssVar:u}=s;const[,d]=Dr();return FE({path:[e],prefix:u.prefix,key:u==null?void 0:u.key,unitless:r,ignore:R4,token:d,scope:c},()=>{const f=$4(e,d,n),m=B4(e,d,f,{deprecatedTokens:t==null?void 0:t.deprecatedTokens});return Object.keys(f).forEach(h=>{m[i(h)]=m[h],delete m[h]}),m}),null};return s=>{const[,,,,c]=Dr();return[u=>o&&c?Ye.createElement(Ye.Fragment,null,Ye.createElement(a,{rootCls:s,cssVar:c,component:e}),u):u,c==null?void 0:c.key]}},ds=(e,n,t,r)=>{const o=Array.isArray(e)?e[0]:e;function i(d){return`${o}${d.slice(0,1).toUpperCase()}${d.slice(1)}`}const a=r&&r.unitless||{},l=Object.assign(Object.assign({},N4),{[i("zIndexPopup")]:!0});Object.keys(a).forEach(d=>{l[i(d)]=a[d]});const s=Object.assign(Object.assign({},r),{unitless:l,prefixToken:i}),c=Ip(e,n,t,s),u=Hx(o,t,s);return function(d){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:d;const[,m]=c(d,f),[h,b]=u(f);return[h,m,b]}};function Ux(e,n){return ou.reduce((t,r)=>{const o=e[`${r}1`],i=e[`${r}3`],a=e[`${r}6`],l=e[`${r}7`];return Object.assign(Object.assign({},t),n(r,{lightColor:o,lightBorderColor:i,darkColor:a,textColor:l}))},{})}const Vx=Object.assign({},ns),{useId:ug}=Vx,Wx=()=>"",Xx=typeof ug>"u"?Wx:ug;function Gx(e,n,t){var r;C4();const o=e||{},i=o.inherit===!1||!n?Object.assign(Object.assign({},Bm),{hashed:(r=n==null?void 0:n.hashed)!==null&&r!==void 0?r:Bm.hashed,cssVar:n==null?void 0:n.cssVar}):n,a=Xx();return Zu(()=>{var l,s;if(!e)return n;const c=Object.assign({},i.components);Object.keys(e.components||{}).forEach(f=>{c[f]=Object.assign(Object.assign({},c[f]),e.components[f])});const u=`css-var-${a.replace(/:/g,"")}`,d=((l=o.cssVar)!==null&&l!==void 0?l:i.cssVar)&&Object.assign(Object.assign(Object.assign({prefix:t==null?void 0:t.prefixCls},typeof i.cssVar=="object"?i.cssVar:{}),typeof o.cssVar=="object"?o.cssVar:{}),{key:typeof o.cssVar=="object"&&((s=o.cssVar)===null||s===void 0?void 0:s.key)||u});return Object.assign(Object.assign(Object.assign({},i),o),{token:Object.assign(Object.assign({},i.token),o.token),components:c,cssVar:d})},[o,i],(l,s)=>l.some((c,u)=>{const d=s[u];return!yp(c,d,!0)}))}var Zx=["children"],z4=p.createContext({});function Kx(e){var n=e.children,t=$n(e,Zx);return p.createElement(z4.Provider,{value:t},n)}var qx=function(e){Sa(t,e);var n=ka(t);function t(){return fr(this,t),n.apply(this,arguments)}return mr(t,[{key:"render",value:function(){return this.props.children}}]),t}(p.Component);function Qx(e){var n=p.useReducer(function(l){return l+1},0),t=pe(n,2),r=t[1],o=p.useRef(e),i=kt(function(){return o.current}),a=kt(function(l){o.current=typeof l=="function"?l(o.current):l,r()});return[i,a]}var mo="none",Vs="appear",Ws="enter",Xs="leave",dg="none",Sr="prepare",Zi="start",Ki="active",_p="end",H4="prepared";function fg(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit".concat(e)]="webkit".concat(n),t["Moz".concat(e)]="moz".concat(n),t["ms".concat(e)]="MS".concat(n),t["O".concat(e)]="o".concat(n.toLowerCase()),t}function Yx(e,n){var t={animationend:fg("Animation","AnimationEnd"),transitionend:fg("Transition","TransitionEnd")};return e&&("AnimationEvent"in n||delete t.animationend.animation,"TransitionEvent"in n||delete t.transitionend.transition),t}var Jx=Yx(Qt(),typeof window<"u"?window:{}),U4={};if(Qt()){var e8=document.createElement("div");U4=e8.style}var Gs={};function V4(e){if(Gs[e])return Gs[e];var n=Jx[e];if(n)for(var t=Object.keys(n),r=t.length,o=0;o<r;o+=1){var i=t[o];if(Object.prototype.hasOwnProperty.call(n,i)&&i in U4)return Gs[e]=n[i],Gs[e]}return""}var W4=V4("animationend"),X4=V4("transitionend"),G4=!!(W4&&X4),mg=W4||"animationend",hg=X4||"transitionend";function pg(e,n){if(!e)return null;if(xn(e)==="object"){var t=n.replace(/-\w/g,function(r){return r[1].toUpperCase()});return e[t]}return"".concat(e,"-").concat(n)}const n8=function(e){var n=p.useRef();function t(o){o&&(o.removeEventListener(hg,e),o.removeEventListener(mg,e))}function r(o){n.current&&n.current!==o&&t(n.current),o&&o!==n.current&&(o.addEventListener(hg,e),o.addEventListener(mg,e),n.current=o)}return p.useEffect(function(){return function(){t(n.current)}},[]),[r,t]};var Z4=Qt()?p.useLayoutEffect:p.useEffect;const t8=function(){var e=p.useRef(null);function n(){Kt.cancel(e.current)}function t(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;n();var i=Kt(function(){o<=1?r({isCanceled:function(){return i!==e.current}}):t(r,o-1)});e.current=i}return p.useEffect(function(){return function(){n()}},[]),[t,n]};var r8=[Sr,Zi,Ki,_p],o8=[Sr,H4],K4=!1,i8=!0;function q4(e){return e===Ki||e===_p}const a8=function(e,n,t){var r=Gl(dg),o=pe(r,2),i=o[0],a=o[1],l=t8(),s=pe(l,2),c=s[0],u=s[1];function d(){a(Sr,!0)}var f=n?o8:r8;return Z4(function(){if(i!==dg&&i!==_p){var m=f.indexOf(i),h=f[m+1],b=t(i);b===K4?a(h,!0):h&&c(function(k){function g(){k.isCanceled()||a(h,!0)}b===!0?g():Promise.resolve(b).then(g)})}},[e,i]),p.useEffect(function(){return function(){u()}},[]),[d,i]};function l8(e,n,t,r){var o=r.motionEnter,i=o===void 0?!0:o,a=r.motionAppear,l=a===void 0?!0:a,s=r.motionLeave,c=s===void 0?!0:s,u=r.motionDeadline,d=r.motionLeaveImmediately,f=r.onAppearPrepare,m=r.onEnterPrepare,h=r.onLeavePrepare,b=r.onAppearStart,k=r.onEnterStart,g=r.onLeaveStart,v=r.onAppearActive,y=r.onEnterActive,E=r.onLeaveActive,_=r.onAppearEnd,w=r.onEnterEnd,A=r.onLeaveEnd,N=r.onVisibleChanged,R=Gl(),V=pe(R,2),$=V[0],z=V[1],j=Qx(mo),H=pe(j,2),Z=H[0],B=H[1],F=Gl(null),O=pe(F,2),W=O[0],S=O[1],G=Z(),U=p.useRef(!1),I=p.useRef(null);function Q(){return t()}var oe=p.useRef(!1);function L(){B(mo),S(null,!0)}var he=kt(function(Fe){var Ue=Z();if(Ue!==mo){var rn=Q();if(!(Fe&&!Fe.deadline&&Fe.target!==rn)){var Me=oe.current,te;Ue===Vs&&Me?te=_==null?void 0:_(rn,Fe):Ue===Ws&&Me?te=w==null?void 0:w(rn,Fe):Ue===Xs&&Me&&(te=A==null?void 0:A(rn,Fe)),Me&&te!==!1&&L()}}}),Y=n8(he),Oe=pe(Y,1),be=Oe[0],Ce=function(Ue){switch(Ue){case Vs:return Le(Le(Le({},Sr,f),Zi,b),Ki,v);case Ws:return Le(Le(Le({},Sr,m),Zi,k),Ki,y);case Xs:return Le(Le(Le({},Sr,h),Zi,g),Ki,E);default:return{}}},me=p.useMemo(function(){return Ce(G)},[G]),en=a8(G,!e,function(Fe){if(Fe===Sr){var Ue=me[Sr];return Ue?Ue(Q()):K4}if(Se in me){var rn;S(((rn=me[Se])===null||rn===void 0?void 0:rn.call(me,Q(),null))||null)}return Se===Ki&&G!==mo&&(be(Q()),u>0&&(clearTimeout(I.current),I.current=setTimeout(function(){he({deadline:!0})},u))),Se===H4&&L(),i8}),Ze=pe(en,2),Ee=Ze[0],Se=Ze[1],xe=q4(Se);oe.current=xe,Z4(function(){z(n);var Fe=U.current;U.current=!0;var Ue;!Fe&&n&&l&&(Ue=Vs),Fe&&n&&i&&(Ue=Ws),(Fe&&!n&&c||!Fe&&d&&!n&&c)&&(Ue=Xs);var rn=Ce(Ue);Ue&&(e||rn[Sr])?(B(Ue),Ee()):B(mo)},[n]),p.useEffect(function(){(G===Vs&&!l||G===Ws&&!i||G===Xs&&!c)&&B(mo)},[l,i,c]),p.useEffect(function(){return function(){U.current=!1,clearTimeout(I.current)}},[]);var Pe=p.useRef(!1);p.useEffect(function(){$&&(Pe.current=!0),$!==void 0&&G===mo&&((Pe.current||$)&&(N==null||N($)),Pe.current=!0)},[$,G]);var $e=W;return me[Sr]&&Se===Zi&&($e=de({transition:"none"},$e)),[G,Se,$e,$??n]}function s8(e){var n=e;xn(e)==="object"&&(n=e.transitionSupport);function t(o,i){return!!(o.motionName&&n&&i!==!1)}var r=p.forwardRef(function(o,i){var a=o.visible,l=a===void 0?!0:a,s=o.removeOnLeave,c=s===void 0?!0:s,u=o.forceRender,d=o.children,f=o.motionName,m=o.leavedClassName,h=o.eventProps,b=p.useContext(z4),k=b.motion,g=t(o,k),v=p.useRef(),y=p.useRef();function E(){try{return v.current instanceof HTMLElement?v.current:dc(y.current)}catch{return null}}var _=l8(g,l,E,o),w=pe(_,4),A=w[0],N=w[1],R=w[2],V=w[3],$=p.useRef(V);V&&($.current=!0);var z=p.useCallback(function(W){v.current=W,pp(i,W)},[i]),j,H=de(de({},h),{},{visible:l});if(!d)j=null;else if(A===mo)V?j=d(de({},H),z):!c&&$.current&&m?j=d(de(de({},H),{},{className:m}),z):u||!c&&!m?j=d(de(de({},H),{},{style:{display:"none"}}),z):j=null;else{var Z;N===Sr?Z="prepare":q4(N)?Z="active":N===Zi&&(Z="start");var B=pg(f,"".concat(A,"-").concat(Z));j=d(de(de({},H),{},{className:Ge(pg(f,A),Le(Le({},B,B&&Z),f,typeof f=="string")),style:R}),z)}if(p.isValidElement(j)&&cs(j)){var F=j,O=F.ref;O||(j=p.cloneElement(j,{ref:z}))}return p.createElement(qx,{ref:y},j)});return r.displayName="CSSMotion",r}const xa=s8(G4);var Hm="add",Um="keep",Vm="remove",of="removed";function c8(e){var n;return e&&xn(e)==="object"&&"key"in e?n=e:n={key:e},de(de({},n),{},{key:String(n.key)})}function Wm(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return e.map(c8)}function u8(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=[],r=0,o=n.length,i=Wm(e),a=Wm(n);i.forEach(function(c){for(var u=!1,d=r;d<o;d+=1){var f=a[d];if(f.key===c.key){r<d&&(t=t.concat(a.slice(r,d).map(function(m){return de(de({},m),{},{status:Hm})})),r=d),t.push(de(de({},f),{},{status:Um})),r+=1,u=!0;break}}u||t.push(de(de({},c),{},{status:Vm}))}),r<o&&(t=t.concat(a.slice(r).map(function(c){return de(de({},c),{},{status:Hm})})));var l={};t.forEach(function(c){var u=c.key;l[u]=(l[u]||0)+1});var s=Object.keys(l).filter(function(c){return l[c]>1});return s.forEach(function(c){t=t.filter(function(u){var d=u.key,f=u.status;return d!==c||f!==Vm}),t.forEach(function(u){u.key===c&&(u.status=Um)})}),t}var d8=["component","children","onVisibleChanged","onAllRemoved"],f8=["status"],m8=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearPrepare","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function h8(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xa,t=function(r){Sa(i,r);var o=ka(i);function i(){var a;fr(this,i);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return a=o.call.apply(o,[this].concat(s)),Le(li(a),"state",{keyEntities:[]}),Le(li(a),"removeKey",function(u){var d=a.state.keyEntities,f=d.map(function(m){return m.key!==u?m:de(de({},m),{},{status:of})});return a.setState({keyEntities:f}),f.filter(function(m){var h=m.status;return h!==of}).length}),a}return mr(i,[{key:"render",value:function(){var l=this,s=this.state.keyEntities,c=this.props,u=c.component,d=c.children,f=c.onVisibleChanged,m=c.onAllRemoved,h=$n(c,d8),b=u||p.Fragment,k={};return m8.forEach(function(g){k[g]=h[g],delete h[g]}),delete h.keys,p.createElement(b,h,s.map(function(g,v){var y=g.status,E=$n(g,f8),_=y===Hm||y===Um;return p.createElement(n,pn({},k,{key:E.key,visible:_,eventProps:E,onVisibleChanged:function(A){if(f==null||f(A,{key:E.key}),!A){var N=l.removeKey(E.key);N===0&&m&&m()}}}),function(w,A){return d(de(de({},w),{},{index:v}),A)})}))}}],[{key:"getDerivedStateFromProps",value:function(l,s){var c=l.keys,u=s.keyEntities,d=Wm(c),f=u8(u,d);return{keyEntities:f.filter(function(m){var h=u.find(function(b){var k=b.key;return m.key===k});return!(h&&h.status===of&&m.status===Vm)})}}}]),i}(p.Component);return Le(t,"defaultProps",{component:"div"}),t}h8(G4);function p8(e){const{children:n}=e,[,t]=Dr(),{motion:r}=t,o=p.useRef(!1);return o.current=o.current||r===!1,o.current?p.createElement(Kx,{motion:r},n):n}const g8=()=>null;var v8=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const b8=["getTargetContainer","getPopupContainer","renderEmpty","input","pagination","form","select","button"],Q4="ant";let Y4;function y8(){return Y4||Q4}function w8(e){return Object.keys(e).some(n=>n.endsWith("Color"))}const C8=e=>{const{prefixCls:n,iconPrefixCls:t,theme:r,holderRender:o}=e;n!==void 0&&(Y4=n),r&&w8(r)&&Ex(y8(),r)},S8=e=>{const{children:n,csp:t,autoInsertSpaceInButton:r,alert:o,anchor:i,form:a,locale:l,componentSize:s,direction:c,space:u,virtual:d,dropdownMatchSelectWidth:f,popupMatchSelectWidth:m,popupOverflow:h,legacyLocale:b,parentContext:k,iconPrefixCls:g,theme:v,componentDisabled:y,segmented:E,statistic:_,spin:w,calendar:A,carousel:N,cascader:R,collapse:V,typography:$,checkbox:z,descriptions:j,divider:H,drawer:Z,skeleton:B,steps:F,image:O,layout:W,list:S,mentions:G,modal:U,progress:I,result:Q,slider:oe,breadcrumb:L,menu:he,pagination:Y,input:Oe,textArea:be,empty:Ce,badge:me,radio:en,rate:Ze,switch:Ee,transfer:Se,avatar:xe,message:Pe,tag:$e,table:Fe,card:Ue,tabs:rn,timeline:Me,timePicker:te,upload:Ne,notification:C,tree:x,colorPicker:T,datePicker:M,rangePicker:K,flex:q,wave:ee,dropdown:ne,warning:ue,tour:ae,floatButtonGroup:ge}=e,De=p.useCallback((ye,Ae)=>{const{prefixCls:qe}=e;if(Ae)return Ae;const P=qe||k.getPrefixCls("");return ye?`${P}-${ye}`:P},[k.getPrefixCls,e.prefixCls]),we=g||k.iconPrefixCls||O4,Xe=t||k.csp;D4(we,Xe);const tn=Gx(v,k.theme,{prefixCls:De("")}),He={csp:Xe,autoInsertSpaceInButton:r,alert:o,anchor:i,locale:l||b,direction:c,space:u,virtual:d,popupMatchSelectWidth:m??f,popupOverflow:h,getPrefixCls:De,iconPrefixCls:we,theme:tn,segmented:E,statistic:_,spin:w,calendar:A,carousel:N,cascader:R,collapse:V,typography:$,checkbox:z,descriptions:j,divider:H,drawer:Z,skeleton:B,steps:F,image:O,input:Oe,textArea:be,layout:W,list:S,mentions:G,modal:U,progress:I,result:Q,slider:oe,breadcrumb:L,menu:he,pagination:Y,empty:Ce,badge:me,radio:en,rate:Ze,switch:Ee,transfer:Se,avatar:xe,message:Pe,tag:$e,table:Fe,card:Ue,tabs:rn,timeline:Me,timePicker:te,upload:Ne,notification:C,tree:x,colorPicker:T,datePicker:M,rangePicker:K,flex:q,wave:ee,dropdown:ne,warning:ue,tour:ae,floatButtonGroup:ge},sn=Object.assign({},k);Object.keys(He).forEach(ye=>{He[ye]!==void 0&&(sn[ye]=He[ye])}),b8.forEach(ye=>{const Ae=e[ye];Ae&&(sn[ye]=Ae)}),typeof r<"u"&&(sn.button=Object.assign({autoInsertSpace:r},sn.button));const an=Zu(()=>sn,sn,(ye,Ae)=>{const qe=Object.keys(ye),P=Object.keys(Ae);return qe.length!==P.length||qe.some(D=>ye[D]!==Ae[D])}),Ke=p.useMemo(()=>({prefixCls:we,csp:Xe}),[we,Xe]);let ke=p.createElement(p.Fragment,null,p.createElement(g8,{dropdownMatchSelectWidth:f}),n);const We=p.useMemo(()=>{var ye,Ae,qe,P;return $E(((ye=nd.Form)===null||ye===void 0?void 0:ye.defaultValidateMessages)||{},((qe=(Ae=an.locale)===null||Ae===void 0?void 0:Ae.Form)===null||qe===void 0?void 0:qe.defaultValidateMessages)||{},((P=an.form)===null||P===void 0?void 0:P.validateMessages)||{},(a==null?void 0:a.validateMessages)||{})},[an,a==null?void 0:a.validateMessages]);Object.keys(We).length>0&&(ke=p.createElement(HE.Provider,{value:We},ke)),l&&(ke=p.createElement(GE,{locale:l,_ANT_MARK__:XE},ke)),(we||Xe)&&(ke=p.createElement(Ep.Provider,{value:Ke},ke)),s&&(ke=p.createElement(Ix,{size:s},ke)),ke=p.createElement(p8,null,ke);const Re=p.useMemo(()=>{const ye=tn||{},{algorithm:Ae,token:qe,components:P,cssVar:D}=ye,X=v8(ye,["algorithm","token","components","cssVar"]),J=Ae&&(!Array.isArray(Ae)||Ae.length>0)?Om(Ae):A4,fe={};Object.entries(P||{}).forEach(Ie=>{let[ie,Be]=Ie;const se=Object.assign({},Be);"algorithm"in se&&(se.algorithm===!0?se.theme=J:(Array.isArray(se.algorithm)||typeof se.algorithm=="function")&&(se.theme=Om(se.algorithm)),delete se.algorithm),fe[ie]=se});const ve=Object.assign(Object.assign({},Xl),qe);return Object.assign(Object.assign({},X),{theme:J,token:ve,components:fe,override:Object.assign({override:ve},fe),cssVar:D})},[tn]);return v&&(ke=p.createElement(T4.Provider,{value:Re},ke)),an.warning&&(ke=p.createElement(zE.Provider,{value:an.warning},ke)),y!==void 0&&(ke=p.createElement(xx,{disabled:y},ke)),p.createElement(it.Provider,{value:an},ke)},Ia=e=>{const n=p.useContext(it),t=p.useContext(k4);return p.createElement(S8,Object.assign({parentContext:n,legacyLocale:t},e))};Ia.ConfigContext=it;Ia.SizeContext=va;Ia.config=C8;Ia.useConfig=_x;Object.defineProperty(Ia,"SizeContext",{get:()=>va});function J4(e){var n;return e==null||(n=e.getRootNode)===null||n===void 0?void 0:n.call(e)}function k8(e){return J4(e)instanceof ShadowRoot}function iu(e){return k8(e)?J4(e):null}function E8(e){return e.replace(/-(.)/g,function(n,t){return t.toUpperCase()})}function x8(e,n){Ci(e,"[@ant-design/icons] ".concat(n))}function gg(e){return xn(e)==="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&(xn(e.icon)==="object"||typeof e.icon=="function")}function vg(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(e).reduce(function(n,t){var r=e[t];switch(t){case"class":n.className=r,delete n.class;break;default:delete n[t],n[E8(t)]=r}return n},{})}function Xm(e,n,t){return t?Ye.createElement(e.tag,de(de({key:n},vg(e.attrs)),t),(e.children||[]).map(function(r,o){return Xm(r,"".concat(n,"-").concat(e.tag,"-").concat(o))})):Ye.createElement(e.tag,de({key:n},vg(e.attrs)),(e.children||[]).map(function(r,o){return Xm(r,"".concat(n,"-").concat(e.tag,"-").concat(o))}))}function ew(e){return vi(e)[0]}function nw(e){return e?Array.isArray(e)?e:[e]:[]}var I8=`
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
`,_8=function(n){var t=p.useContext(Ep),r=t.csp,o=t.prefixCls,i=I8;o&&(i=i.replace(/anticon/g,o)),p.useEffect(function(){var a=n.current,l=iu(a);Qr(i,"@ant-design-icons",{prepend:!0,csp:r,attachTo:l})},[])},A8=["icon","className","onClick","style","primaryColor","secondaryColor"],yl={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function T8(e){var n=e.primaryColor,t=e.secondaryColor;yl.primaryColor=n,yl.secondaryColor=t||ew(n),yl.calculated=!!t}function O8(){return de({},yl)}var _a=function(n){var t=n.icon,r=n.className,o=n.onClick,i=n.style,a=n.primaryColor,l=n.secondaryColor,s=$n(n,A8),c=p.useRef(),u=yl;if(a&&(u={primaryColor:a,secondaryColor:l||ew(a)}),_8(c),x8(gg(t),"icon should be icon definiton, but got ".concat(t)),!gg(t))return null;var d=t;return d&&typeof d.icon=="function"&&(d=de(de({},d),{},{icon:d.icon(u.primaryColor,u.secondaryColor)})),Xm(d.icon,"svg-".concat(d.name),de(de({className:r,onClick:o,style:i,"data-icon":d.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},s),{},{ref:c}))};_a.displayName="IconReact";_a.getTwoToneColors=O8;_a.setTwoToneColors=T8;function tw(e){var n=nw(e),t=pe(n,2),r=t[0],o=t[1];return _a.setTwoToneColors({primaryColor:r,secondaryColor:o})}function P8(){var e=_a.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var N8=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];tw(ux.primary);var Bo=p.forwardRef(function(e,n){var t=e.className,r=e.icon,o=e.spin,i=e.rotate,a=e.tabIndex,l=e.onClick,s=e.twoToneColor,c=$n(e,N8),u=p.useContext(Ep),d=u.prefixCls,f=d===void 0?"anticon":d,m=u.rootClassName,h=Ge(m,f,Le(Le({},"".concat(f,"-").concat(r.name),!!r.name),"".concat(f,"-spin"),!!o||r.name==="loading"),t),b=a;b===void 0&&l&&(b=-1);var k=i?{msTransform:"rotate(".concat(i,"deg)"),transform:"rotate(".concat(i,"deg)")}:void 0,g=nw(s),v=pe(g,2),y=v[0],E=v[1];return p.createElement("span",pn({role:"img","aria-label":r.name},c,{ref:n,tabIndex:b,onClick:l,className:h}),p.createElement(_a,{icon:r,primaryColor:y,secondaryColor:E,style:k}))});Bo.displayName="AntdIcon";Bo.getTwoToneColor=P8;Bo.setTwoToneColor=tw;function rw(e){return e&&Ye.isValidElement(e)&&e.type===Ye.Fragment}const R8=(e,n,t)=>Ye.isValidElement(e)?Ye.cloneElement(e,typeof t=="function"?t(e.props||{}):t):n;function Aa(e,n){return R8(e,e,n)}const ow=e=>{const[,,,,n]=Dr();return n?`${e}-css-var`:""};var ze={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(n){var t=n.keyCode;if(n.altKey&&!n.ctrlKey||n.metaKey||t>=ze.F1&&t<=ze.F12)return!1;switch(t){case ze.ALT:case ze.CAPS_LOCK:case ze.CONTEXT_MENU:case ze.CTRL:case ze.DOWN:case ze.END:case ze.ESC:case ze.HOME:case ze.INSERT:case ze.LEFT:case ze.MAC_FF_META:case ze.META:case ze.NUMLOCK:case ze.NUM_CENTER:case ze.PAGE_DOWN:case ze.PAGE_UP:case ze.PAUSE:case ze.PRINT_SCREEN:case ze.RIGHT:case ze.SHIFT:case ze.UP:case ze.WIN_KEY:case ze.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(n){if(n>=ze.ZERO&&n<=ze.NINE||n>=ze.NUM_ZERO&&n<=ze.NUM_MULTIPLY||n>=ze.A&&n<=ze.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&n===0)return!0;switch(n){case ze.SPACE:case ze.QUESTION_MARK:case ze.NUM_PLUS:case ze.NUM_MINUS:case ze.NUM_PERIOD:case ze.NUM_DIVISION:case ze.SEMICOLON:case ze.DASH:case ze.EQUALS:case ze.COMMA:case ze.PERIOD:case ze.SLASH:case ze.APOSTROPHE:case ze.SINGLE_QUOTE:case ze.OPEN_SQUARE_BRACKET:case ze.BACKSLASH:case ze.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},F8={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},M8=function(n,t){return p.createElement(Bo,pn({},n,{ref:t,icon:F8}))},iw=p.forwardRef(M8);const aw=Ye.createContext(void 0),Ko=100,L8=10,j8=Ko*L8,lw={Modal:Ko,Drawer:Ko,Popover:Ko,Popconfirm:Ko,Tooltip:Ko,Tour:Ko},D8={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};function $8(e){return e in lw}function sw(e,n){const[,t]=Dr(),r=Ye.useContext(aw),o=$8(e);if(n!==void 0)return[n,n];let i=r??0;return o?(i+=(r?0:t.zIndexPopupBase)+lw[e],i=Math.min(i,t.zIndexPopupBase+j8)):i+=D8[e],[r===void 0?n:i,i]}function Zl(){Zl=function(){return n};var e,n={},t=Object.prototype,r=t.hasOwnProperty,o=Object.defineProperty||function(B,F,O){B[F]=O.value},i=typeof Symbol=="function"?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(B,F,O){return Object.defineProperty(B,F,{value:O,enumerable:!0,configurable:!0,writable:!0}),B[F]}try{c({},"")}catch{c=function(O,W,S){return O[W]=S}}function u(B,F,O,W){var S=F&&F.prototype instanceof g?F:g,G=Object.create(S.prototype),U=new H(W||[]);return o(G,"_invoke",{value:V(B,O,U)}),G}function d(B,F,O){try{return{type:"normal",arg:B.call(F,O)}}catch(W){return{type:"throw",arg:W}}}n.wrap=u;var f="suspendedStart",m="suspendedYield",h="executing",b="completed",k={};function g(){}function v(){}function y(){}var E={};c(E,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(Z([])));w&&w!==t&&r.call(w,a)&&(E=w);var A=y.prototype=g.prototype=Object.create(E);function N(B){["next","throw","return"].forEach(function(F){c(B,F,function(O){return this._invoke(F,O)})})}function R(B,F){function O(S,G,U,I){var Q=d(B[S],B,G);if(Q.type!=="throw"){var oe=Q.arg,L=oe.value;return L&&xn(L)=="object"&&r.call(L,"__await")?F.resolve(L.__await).then(function(he){O("next",he,U,I)},function(he){O("throw",he,U,I)}):F.resolve(L).then(function(he){oe.value=he,U(oe)},function(he){return O("throw",he,U,I)})}I(Q.arg)}var W;o(this,"_invoke",{value:function(G,U){function I(){return new F(function(Q,oe){O(G,U,Q,oe)})}return W=W?W.then(I,I):I()}})}function V(B,F,O){var W=f;return function(S,G){if(W===h)throw Error("Generator is already running");if(W===b){if(S==="throw")throw G;return{value:e,done:!0}}for(O.method=S,O.arg=G;;){var U=O.delegate;if(U){var I=$(U,O);if(I){if(I===k)continue;return I}}if(O.method==="next")O.sent=O._sent=O.arg;else if(O.method==="throw"){if(W===f)throw W=b,O.arg;O.dispatchException(O.arg)}else O.method==="return"&&O.abrupt("return",O.arg);W=h;var Q=d(B,F,O);if(Q.type==="normal"){if(W=O.done?b:m,Q.arg===k)continue;return{value:Q.arg,done:O.done}}Q.type==="throw"&&(W=b,O.method="throw",O.arg=Q.arg)}}}function $(B,F){var O=F.method,W=B.iterator[O];if(W===e)return F.delegate=null,O==="throw"&&B.iterator.return&&(F.method="return",F.arg=e,$(B,F),F.method==="throw")||O!=="return"&&(F.method="throw",F.arg=new TypeError("The iterator does not provide a '"+O+"' method")),k;var S=d(W,B.iterator,F.arg);if(S.type==="throw")return F.method="throw",F.arg=S.arg,F.delegate=null,k;var G=S.arg;return G?G.done?(F[B.resultName]=G.value,F.next=B.nextLoc,F.method!=="return"&&(F.method="next",F.arg=e),F.delegate=null,k):G:(F.method="throw",F.arg=new TypeError("iterator result is not an object"),F.delegate=null,k)}function z(B){var F={tryLoc:B[0]};1 in B&&(F.catchLoc=B[1]),2 in B&&(F.finallyLoc=B[2],F.afterLoc=B[3]),this.tryEntries.push(F)}function j(B){var F=B.completion||{};F.type="normal",delete F.arg,B.completion=F}function H(B){this.tryEntries=[{tryLoc:"root"}],B.forEach(z,this),this.reset(!0)}function Z(B){if(B||B===""){var F=B[a];if(F)return F.call(B);if(typeof B.next=="function")return B;if(!isNaN(B.length)){var O=-1,W=function S(){for(;++O<B.length;)if(r.call(B,O))return S.value=B[O],S.done=!1,S;return S.value=e,S.done=!0,S};return W.next=W}}throw new TypeError(xn(B)+" is not iterable")}return v.prototype=y,o(A,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:v,configurable:!0}),v.displayName=c(y,s,"GeneratorFunction"),n.isGeneratorFunction=function(B){var F=typeof B=="function"&&B.constructor;return!!F&&(F===v||(F.displayName||F.name)==="GeneratorFunction")},n.mark=function(B){return Object.setPrototypeOf?Object.setPrototypeOf(B,y):(B.__proto__=y,c(B,s,"GeneratorFunction")),B.prototype=Object.create(A),B},n.awrap=function(B){return{__await:B}},N(R.prototype),c(R.prototype,l,function(){return this}),n.AsyncIterator=R,n.async=function(B,F,O,W,S){S===void 0&&(S=Promise);var G=new R(u(B,F,O,W),S);return n.isGeneratorFunction(F)?G:G.next().then(function(U){return U.done?U.value:G.next()})},N(A),c(A,s,"Generator"),c(A,a,function(){return this}),c(A,"toString",function(){return"[object Generator]"}),n.keys=function(B){var F=Object(B),O=[];for(var W in F)O.push(W);return O.reverse(),function S(){for(;O.length;){var G=O.pop();if(G in F)return S.value=G,S.done=!1,S}return S.done=!0,S}},n.values=Z,H.prototype={constructor:H,reset:function(F){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!F)for(var O in this)O.charAt(0)==="t"&&r.call(this,O)&&!isNaN(+O.slice(1))&&(this[O]=e)},stop:function(){this.done=!0;var F=this.tryEntries[0].completion;if(F.type==="throw")throw F.arg;return this.rval},dispatchException:function(F){if(this.done)throw F;var O=this;function W(oe,L){return U.type="throw",U.arg=F,O.next=oe,L&&(O.method="next",O.arg=e),!!L}for(var S=this.tryEntries.length-1;S>=0;--S){var G=this.tryEntries[S],U=G.completion;if(G.tryLoc==="root")return W("end");if(G.tryLoc<=this.prev){var I=r.call(G,"catchLoc"),Q=r.call(G,"finallyLoc");if(I&&Q){if(this.prev<G.catchLoc)return W(G.catchLoc,!0);if(this.prev<G.finallyLoc)return W(G.finallyLoc)}else if(I){if(this.prev<G.catchLoc)return W(G.catchLoc,!0)}else{if(!Q)throw Error("try statement without catch or finally");if(this.prev<G.finallyLoc)return W(G.finallyLoc)}}}},abrupt:function(F,O){for(var W=this.tryEntries.length-1;W>=0;--W){var S=this.tryEntries[W];if(S.tryLoc<=this.prev&&r.call(S,"finallyLoc")&&this.prev<S.finallyLoc){var G=S;break}}G&&(F==="break"||F==="continue")&&G.tryLoc<=O&&O<=G.finallyLoc&&(G=null);var U=G?G.completion:{};return U.type=F,U.arg=O,G?(this.method="next",this.next=G.finallyLoc,k):this.complete(U)},complete:function(F,O){if(F.type==="throw")throw F.arg;return F.type==="break"||F.type==="continue"?this.next=F.arg:F.type==="return"?(this.rval=this.arg=F.arg,this.method="return",this.next="end"):F.type==="normal"&&O&&(this.next=O),k},finish:function(F){for(var O=this.tryEntries.length-1;O>=0;--O){var W=this.tryEntries[O];if(W.finallyLoc===F)return this.complete(W.completion,W.afterLoc),j(W),k}},catch:function(F){for(var O=this.tryEntries.length-1;O>=0;--O){var W=this.tryEntries[O];if(W.tryLoc===F){var S=W.completion;if(S.type==="throw"){var G=S.arg;j(W)}return G}}throw Error("illegal catch attempt")},delegateYield:function(F,O,W){return this.delegate={iterator:Z(F),resultName:O,nextLoc:W},this.method==="next"&&(this.arg=e),k}},n}function bg(e,n,t,r,o,i,a){try{var l=e[i](a),s=l.value}catch(c){return void t(c)}l.done?n(s):Promise.resolve(s).then(r,o)}function cw(e){return function(){var n=this,t=arguments;return new Promise(function(r,o){var i=e.apply(n,t);function a(s){bg(i,r,o,a,l,"next",s)}function l(s){bg(i,r,o,a,l,"throw",s)}a(void 0)})}}var fs=de({},py),B8=fs.version,z8=fs.render,H8=fs.unmountComponentAtNode,td;try{var U8=Number((B8||"").split(".")[0]);U8>=18&&(td=fs.createRoot)}catch{}function yg(e){var n=fs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;n&&xn(n)==="object"&&(n.usingClientEntryPoint=e)}var au="__rc_react_root__";function V8(e,n){yg(!0);var t=n[au]||td(n);yg(!1),t.render(e),n[au]=t}function W8(e,n){z8(e,n)}function X8(e,n){if(td){V8(e,n);return}W8(e,n)}function G8(e){return Gm.apply(this,arguments)}function Gm(){return Gm=cw(Zl().mark(function e(n){return Zl().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Promise.resolve().then(function(){var o;(o=n[au])===null||o===void 0||o.unmount(),delete n[au]}));case 1:case"end":return r.stop()}},e)})),Gm.apply(this,arguments)}function Z8(e){H8(e)}function K8(e){return Zm.apply(this,arguments)}function Zm(){return Zm=cw(Zl().mark(function e(n){return Zl().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(td===void 0){r.next=2;break}return r.abrupt("return",G8(n));case 2:Z8(n);case 3:case"end":return r.stop()}},e)})),Zm.apply(this,arguments)}const af=()=>({height:0,opacity:0}),wg=e=>{const{scrollHeight:n}=e;return{height:n,opacity:1}},q8=e=>({height:e?e.offsetHeight:0}),lf=(e,n)=>(n==null?void 0:n.deadline)===!0||n.propertyName==="height",Q8=function(){return{motionName:`${arguments.length>0&&arguments[0]!==void 0?arguments[0]:"ant"}-motion-collapse`,onAppearStart:af,onEnterStart:af,onAppearActive:wg,onEnterActive:wg,onLeaveStart:q8,onLeaveActive:af,onAppearEnd:lf,onEnterEnd:lf,onLeaveEnd:lf,motionDeadline:500}},Y8=(e,n,t)=>t!==void 0?t:`${e}-${n}`,Ap=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var n=e.getBBox(),t=n.width,r=n.height;if(t||r)return!0}if(e.getBoundingClientRect){var o=e.getBoundingClientRect(),i=o.width,a=o.height;if(i||a)return!0}}return!1},J8=e=>{const{componentCls:n,colorPrimary:t}=e;return{[n]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${t})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${e.motionEaseOutCirc}`,`opacity 2s ${e.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0},"&.wave-quick":{transition:[`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`,`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")}}}}},e7=Ip("Wave",e=>[J8(e)]),uw=`${Q4}-wave-target`;function n7(e){const n=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return n&&n[1]&&n[2]&&n[3]?!(n[1]===n[2]&&n[2]===n[3]):!0}function sf(e){return e&&e!=="#fff"&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&e!=="rgba(255, 255, 255, 1)"&&n7(e)&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&e!=="transparent"}function t7(e){const{borderTopColor:n,borderColor:t,backgroundColor:r}=getComputedStyle(e);return sf(n)?n:sf(t)?t:sf(r)?r:null}function cf(e){return Number.isNaN(e)?0:e}const r7=e=>{const{className:n,target:t,component:r}=e,o=p.useRef(null),[i,a]=p.useState(null),[l,s]=p.useState([]),[c,u]=p.useState(0),[d,f]=p.useState(0),[m,h]=p.useState(0),[b,k]=p.useState(0),[g,v]=p.useState(!1),y={left:c,top:d,width:m,height:b,borderRadius:l.map(w=>`${w}px`).join(" ")};i&&(y["--wave-color"]=i);function E(){const w=getComputedStyle(t);a(t7(t));const A=w.position==="static",{borderLeftWidth:N,borderTopWidth:R}=w;u(A?t.offsetLeft:cf(-parseFloat(N))),f(A?t.offsetTop:cf(-parseFloat(R))),h(t.offsetWidth),k(t.offsetHeight);const{borderTopLeftRadius:V,borderTopRightRadius:$,borderBottomLeftRadius:z,borderBottomRightRadius:j}=w;s([V,$,j,z].map(H=>cf(parseFloat(H))))}if(p.useEffect(()=>{if(t){const w=Kt(()=>{E(),v(!0)});let A;return typeof ResizeObserver<"u"&&(A=new ResizeObserver(E),A.observe(t)),()=>{Kt.cancel(w),A==null||A.disconnect()}}},[]),!g)return null;const _=(r==="Checkbox"||r==="Radio")&&(t==null?void 0:t.classList.contains(uw));return p.createElement(xa,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(w,A)=>{var N;if(A.deadline||A.propertyName==="opacity"){const R=(N=o.current)===null||N===void 0?void 0:N.parentElement;K8(R).then(()=>{R==null||R.remove()})}return!1}},(w,A)=>{let{className:N}=w;return p.createElement("div",{ref:ss(o,A),className:Ge(n,N,{"wave-quick":_}),style:y})})},o7=(e,n)=>{var t;const{component:r}=n;if(r==="Checkbox"&&!(!((t=e.querySelector("input"))===null||t===void 0)&&t.checked))return;const o=document.createElement("div");o.style.position="absolute",o.style.left="0px",o.style.top="0px",e==null||e.insertBefore(o,e==null?void 0:e.firstChild),X8(p.createElement(r7,Object.assign({},n,{target:e})),o)},i7=(e,n,t)=>{const{wave:r}=p.useContext(it),[,o,i]=Dr(),a=kt(c=>{const u=e.current;if(r!=null&&r.disabled||!u)return;const d=u.querySelector(`.${uw}`)||u,{showEffect:f}=r||{};(f||o7)(d,{className:n,token:o,component:t,event:c,hashId:i})}),l=p.useRef();return c=>{Kt.cancel(l.current),l.current=Kt(()=>{a(c)})}},a7=e=>{const{children:n,disabled:t,component:r}=e,{getPrefixCls:o}=p.useContext(it),i=p.useRef(null),a=o("wave"),[,l]=e7(a),s=i7(i,Ge(a,l),r);if(Ye.useEffect(()=>{const u=i.current;if(!u||u.nodeType!==1||t)return;const d=f=>{!Ap(f.target)||!u.getAttribute||u.getAttribute("disabled")||u.disabled||u.className.includes("disabled")||u.className.includes("-leave")||s(f)};return u.addEventListener("click",d,!0),()=>{u.removeEventListener("click",d,!0)}},[t]),!Ye.isValidElement(n))return n??null;const c=cs(n)?ss(n.ref,i):i;return Aa(n,{ref:c})},l7=e=>{const n=Ye.useContext(va);return Ye.useMemo(()=>e?typeof e=="string"?e??n:e instanceof Function?e(n):n:n,[e,n])},dw=p.createContext(null),s7=(e,n)=>{const t=p.useContext(dw),r=p.useMemo(()=>{if(!t)return"";const{compactDirection:o,isFirstItem:i,isLastItem:a}=t,l=o==="vertical"?"-vertical-":"-";return Ge(`${e}-compact${l}item`,{[`${e}-compact${l}first-item`]:i,[`${e}-compact${l}last-item`]:a,[`${e}-compact${l}item-rtl`]:n==="rtl"})},[e,n,t]);return{compactSize:t==null?void 0:t.compactSize,compactDirection:t==null?void 0:t.compactDirection,compactItemClassnames:r}},c7=e=>{let{children:n}=e;return p.createElement(dw.Provider,{value:null},n)};var u7=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const fw=p.createContext(void 0),d7=e=>{const{getPrefixCls:n,direction:t}=p.useContext(it),{prefixCls:r,size:o,className:i}=e,a=u7(e,["prefixCls","size","className"]),l=n("btn-group",r),[,,s]=Dr();let c="";switch(o){case"large":c="lg";break;case"small":c="sm";break}const u=Ge(l,{[`${l}-${c}`]:c,[`${l}-rtl`]:t==="rtl"},i,s);return p.createElement(fw.Provider,{value:o},p.createElement("div",Object.assign({},a,{className:u})))},Cg=/^[\u4e00-\u9fa5]{2}$/,Km=Cg.test.bind(Cg);function Sg(e){return typeof e=="string"}function uf(e){return e==="text"||e==="link"}function f7(e,n){if(e==null)return;const t=n?" ":"";return typeof e!="string"&&typeof e!="number"&&Sg(e.type)&&Km(e.props.children)?Aa(e,{children:e.props.children.split("").join(t)}):Sg(e)?Km(e)?Ye.createElement("span",null,e.split("").join(t)):Ye.createElement("span",null,e):rw(e)?Ye.createElement("span",null,e):e}function m7(e,n){let t=!1;const r=[];return Ye.Children.forEach(e,o=>{const i=typeof o,a=i==="string"||i==="number";if(t&&a){const l=r.length-1,s=r[l];r[l]=`${s}${o}`}else r.push(o);t=a}),Ye.Children.map(r,o=>f7(o,n))}const mw=p.forwardRef((e,n)=>{const{className:t,style:r,children:o,prefixCls:i}=e,a=Ge(`${i}-icon`,t);return Ye.createElement("span",{ref:n,className:a,style:r},o)}),kg=p.forwardRef((e,n)=>{const{prefixCls:t,className:r,style:o,iconClassName:i}=e,a=Ge(`${t}-loading-icon`,r);return Ye.createElement(mw,{prefixCls:t,className:a,style:o,ref:n},Ye.createElement(iw,{className:i}))}),df=()=>({width:0,opacity:0,transform:"scale(0)"}),ff=e=>({width:e.scrollWidth,opacity:1,transform:"scale(1)"}),h7=e=>{const{prefixCls:n,loading:t,existIcon:r,className:o,style:i}=e,a=!!t;return r?Ye.createElement(kg,{prefixCls:n,className:o,style:i}):Ye.createElement(xa,{visible:a,motionName:`${n}-loading-icon-motion`,motionLeave:a,removeOnLeave:!0,onAppearStart:df,onAppearActive:ff,onEnterStart:df,onEnterActive:ff,onLeaveStart:ff,onLeaveActive:df},(l,s)=>{let{className:c,style:u}=l;return Ye.createElement(kg,{prefixCls:n,className:o,style:Object.assign(Object.assign({},i),u),ref:s,iconClassName:c})})},Eg=(e,n)=>({[`> span, > ${e}`]:{"&:not(:last-child)":{[`&, & > ${e}`]:{"&:not(:disabled)":{borderInlineEndColor:n}}},"&:not(:first-child)":{[`&, & > ${e}`]:{"&:not(:disabled)":{borderInlineStartColor:n}}}}}),p7=e=>{const{componentCls:n,fontSize:t,lineWidth:r,groupBorderColor:o,colorErrorHover:i}=e;return{[`${n}-group`]:[{position:"relative",display:"inline-flex",[`> span, > ${n}`]:{"&:not(:last-child)":{[`&, & > ${n}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},"&:not(:first-child)":{marginInlineStart:e.calc(r).mul(-1).equal(),[`&, & > ${n}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}},[n]:{position:"relative",zIndex:1,"&:hover,\n          &:focus,\n          &:active":{zIndex:2},"&[disabled]":{zIndex:0}},[`${n}-icon-only`]:{fontSize:t}},Eg(`${n}-primary`,o),Eg(`${n}-danger`,i)]}},hw=e=>{const{paddingInline:n,onlyIconSize:t,paddingBlock:r}=e;return Tr(e,{buttonPaddingHorizontal:n,buttonPaddingVertical:r,buttonIconOnlyFontSize:t})},pw=e=>{var n,t,r,o,i,a;const l=(n=e.contentFontSize)!==null&&n!==void 0?n:e.fontSize,s=(t=e.contentFontSizeSM)!==null&&t!==void 0?t:e.fontSize,c=(r=e.contentFontSizeLG)!==null&&r!==void 0?r:e.fontSizeLG,u=(o=e.contentLineHeight)!==null&&o!==void 0?o:yc(l),d=(i=e.contentLineHeightSM)!==null&&i!==void 0?i:yc(s),f=(a=e.contentLineHeightLG)!==null&&a!==void 0?a:yc(c);return{fontWeight:400,defaultShadow:`0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,primaryShadow:`0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,dangerShadow:`0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,primaryColor:e.colorTextLightSolid,dangerColor:e.colorTextLightSolid,borderColorDisabled:e.colorBorder,defaultGhostColor:e.colorBgContainer,ghostBg:"transparent",defaultGhostBorderColor:e.colorBgContainer,paddingInline:e.paddingContentHorizontal-e.lineWidth,paddingInlineLG:e.paddingContentHorizontal-e.lineWidth,paddingInlineSM:8-e.lineWidth,onlyIconSize:e.fontSizeLG,onlyIconSizeSM:e.fontSizeLG-2,onlyIconSizeLG:e.fontSizeLG+2,groupBorderColor:e.colorPrimaryHover,linkHoverBg:"transparent",textHoverBg:e.colorBgTextHover,defaultColor:e.colorText,defaultBg:e.colorBgContainer,defaultBorderColor:e.colorBorder,defaultBorderColorDisabled:e.colorBorder,defaultHoverBg:e.colorBgContainer,defaultHoverColor:e.colorPrimaryHover,defaultHoverBorderColor:e.colorPrimaryHover,defaultActiveBg:e.colorBgContainer,defaultActiveColor:e.colorPrimaryActive,defaultActiveBorderColor:e.colorPrimaryActive,contentFontSize:l,contentFontSizeSM:s,contentFontSizeLG:c,contentLineHeight:u,contentLineHeightSM:d,contentLineHeightLG:f,paddingBlock:Math.max((e.controlHeight-l*u)/2-e.lineWidth,0),paddingBlockSM:Math.max((e.controlHeightSM-s*d)/2-e.lineWidth,0),paddingBlockLG:Math.max((e.controlHeightLG-c*f)/2-e.lineWidth,0)}},g7=e=>{const{componentCls:n,iconCls:t,fontWeight:r}=e;return{[n]:{outline:"none",position:"relative",display:"inline-flex",gap:e.marginXS,alignItems:"center",justifyContent:"center",fontWeight:r,whiteSpace:"nowrap",textAlign:"center",backgroundImage:"none",background:"transparent",border:`${Ve(e.lineWidth)} ${e.lineType} transparent`,cursor:"pointer",transition:`all ${e.motionDurationMid} ${e.motionEaseInOut}`,userSelect:"none",touchAction:"manipulation",color:e.colorText,"&:disabled > *":{pointerEvents:"none"},"> span":{display:"inline-block"},[`${n}-icon`]:{lineHeight:1},"> a":{color:"currentColor"},"&:not(:disabled)":Object.assign({},jx(e)),[`&${n}-two-chinese-chars::first-letter`]:{letterSpacing:"0.34em"},[`&${n}-two-chinese-chars > *:not(${t})`]:{marginInlineEnd:"-0.34em",letterSpacing:"0.34em"},"&-icon-end":{flexDirection:"row-reverse"}}}},ro=(e,n,t)=>({[`&:not(:disabled):not(${e}-disabled)`]:{"&:hover":n,"&:active":t}}),v7=e=>({minWidth:e.controlHeight,paddingInlineStart:0,paddingInlineEnd:0,borderRadius:"50%"}),b7=e=>({borderRadius:e.controlHeight,paddingInlineStart:e.calc(e.controlHeight).div(2).equal(),paddingInlineEnd:e.calc(e.controlHeight).div(2).equal()}),y7=e=>({cursor:"not-allowed",borderColor:e.borderColorDisabled,color:e.colorTextDisabled,background:e.colorBgContainerDisabled,boxShadow:"none"}),Kl=(e,n,t,r,o,i,a,l)=>({[`&${e}-background-ghost`]:Object.assign(Object.assign({color:t||void 0,background:n,borderColor:r||void 0,boxShadow:"none"},ro(e,Object.assign({background:n},a),Object.assign({background:n},l))),{"&:disabled":{cursor:"not-allowed",color:o||void 0,borderColor:i||void 0}})}),Tp=e=>({[`&:disabled, &${e.componentCls}-disabled`]:Object.assign({},y7(e))}),gw=e=>Object.assign({},Tp(e)),lu=e=>({[`&:disabled, &${e.componentCls}-disabled`]:{cursor:"not-allowed",color:e.colorTextDisabled}}),vw=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},gw(e)),{background:e.defaultBg,borderColor:e.defaultBorderColor,color:e.defaultColor,boxShadow:e.defaultShadow}),ro(e.componentCls,{color:e.defaultHoverColor,borderColor:e.defaultHoverBorderColor,background:e.defaultHoverBg},{color:e.defaultActiveColor,borderColor:e.defaultActiveBorderColor,background:e.defaultActiveBg})),Kl(e.componentCls,e.ghostBg,e.defaultGhostColor,e.defaultGhostBorderColor,e.colorTextDisabled,e.colorBorder)),{[`&${e.componentCls}-dangerous`]:Object.assign(Object.assign(Object.assign({color:e.colorError,borderColor:e.colorError},ro(e.componentCls,{color:e.colorErrorHover,borderColor:e.colorErrorBorderHover},{color:e.colorErrorActive,borderColor:e.colorErrorActive})),Kl(e.componentCls,e.ghostBg,e.colorError,e.colorError,e.colorTextDisabled,e.colorBorder)),Tp(e))}),w7=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},gw(e)),{color:e.primaryColor,background:e.colorPrimary,boxShadow:e.primaryShadow}),ro(e.componentCls,{color:e.colorTextLightSolid,background:e.colorPrimaryHover},{color:e.colorTextLightSolid,background:e.colorPrimaryActive})),Kl(e.componentCls,e.ghostBg,e.colorPrimary,e.colorPrimary,e.colorTextDisabled,e.colorBorder,{color:e.colorPrimaryHover,borderColor:e.colorPrimaryHover},{color:e.colorPrimaryActive,borderColor:e.colorPrimaryActive})),{[`&${e.componentCls}-dangerous`]:Object.assign(Object.assign(Object.assign({background:e.colorError,boxShadow:e.dangerShadow,color:e.dangerColor},ro(e.componentCls,{background:e.colorErrorHover},{background:e.colorErrorActive})),Kl(e.componentCls,e.ghostBg,e.colorError,e.colorError,e.colorTextDisabled,e.colorBorder,{color:e.colorErrorHover,borderColor:e.colorErrorHover},{color:e.colorErrorActive,borderColor:e.colorErrorActive})),Tp(e))}),C7=e=>Object.assign(Object.assign({},vw(e)),{borderStyle:"dashed"}),S7=e=>Object.assign(Object.assign(Object.assign({color:e.colorLink},ro(e.componentCls,{color:e.colorLinkHover,background:e.linkHoverBg},{color:e.colorLinkActive})),lu(e)),{[`&${e.componentCls}-dangerous`]:Object.assign(Object.assign({color:e.colorError},ro(e.componentCls,{color:e.colorErrorHover},{color:e.colorErrorActive})),lu(e))}),k7=e=>Object.assign(Object.assign(Object.assign({},ro(e.componentCls,{color:e.colorText,background:e.textHoverBg},{color:e.colorText,background:e.colorBgTextActive})),lu(e)),{[`&${e.componentCls}-dangerous`]:Object.assign(Object.assign({color:e.colorError},lu(e)),ro(e.componentCls,{color:e.colorErrorHover,background:e.colorErrorBg},{color:e.colorErrorHover,background:e.colorErrorBgActive}))}),E7=e=>{const{componentCls:n}=e;return{[`${n}-default`]:vw(e),[`${n}-primary`]:w7(e),[`${n}-dashed`]:C7(e),[`${n}-link`]:S7(e),[`${n}-text`]:k7(e),[`${n}-ghost`]:Kl(e.componentCls,e.ghostBg,e.colorBgContainer,e.colorBgContainer,e.colorTextDisabled,e.colorBorder)}},Op=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const{componentCls:t,controlHeight:r,fontSize:o,lineHeight:i,borderRadius:a,buttonPaddingHorizontal:l,iconCls:s,buttonPaddingVertical:c}=e,u=`${t}-icon-only`;return[{[`${n}`]:{fontSize:o,lineHeight:i,height:r,padding:`${Ve(c)} ${Ve(l)}`,borderRadius:a,[`&${u}`]:{width:r,paddingInline:0,[`&${t}-compact-item`]:{flex:"none"},[`&${t}-round`]:{width:"auto"},[s]:{fontSize:e.buttonIconOnlyFontSize}},[`&${t}-loading`]:{opacity:e.opacityLoading,cursor:"default"},[`${t}-loading-icon`]:{transition:`width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`}}},{[`${t}${t}-circle${n}`]:v7(e)},{[`${t}${t}-round${n}`]:b7(e)}]},x7=e=>{const n=Tr(e,{fontSize:e.contentFontSize,lineHeight:e.contentLineHeight});return Op(n,e.componentCls)},I7=e=>{const n=Tr(e,{controlHeight:e.controlHeightSM,fontSize:e.contentFontSizeSM,lineHeight:e.contentLineHeightSM,padding:e.paddingXS,buttonPaddingHorizontal:e.paddingInlineSM,buttonPaddingVertical:e.paddingBlockSM,borderRadius:e.borderRadiusSM,buttonIconOnlyFontSize:e.onlyIconSizeSM});return Op(n,`${e.componentCls}-sm`)},_7=e=>{const n=Tr(e,{controlHeight:e.controlHeightLG,fontSize:e.contentFontSizeLG,lineHeight:e.contentLineHeightLG,buttonPaddingHorizontal:e.paddingInlineLG,buttonPaddingVertical:e.paddingBlockLG,borderRadius:e.borderRadiusLG,buttonIconOnlyFontSize:e.onlyIconSizeLG});return Op(n,`${e.componentCls}-lg`)},A7=e=>{const{componentCls:n}=e;return{[n]:{[`&${n}-block`]:{width:"100%"}}}},T7=ds("Button",e=>{const n=hw(e);return[g7(n),x7(n),I7(n),_7(n),A7(n),E7(n),p7(n)]},pw,{unitless:{fontWeight:!0,contentLineHeight:!0,contentLineHeightSM:!0,contentLineHeightLG:!0}});function O7(e,n,t){const{focusElCls:r,focus:o,borderElCls:i}=t,a=i?"> *":"",l=["hover",o?"focus":null,"active"].filter(Boolean).map(s=>`&:${s} ${a}`).join(",");return{[`&-item:not(${n}-last-item)`]:{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal()},"&-item":Object.assign(Object.assign({[l]:{zIndex:2}},r?{[`&${r}`]:{zIndex:2}}:{}),{[`&[disabled] ${a}`]:{zIndex:0}})}}function P7(e,n,t){const{borderElCls:r}=t,o=r?`> ${r}`:"";return{[`&-item:not(${n}-first-item):not(${n}-last-item) ${o}`]:{borderRadius:0},[`&-item:not(${n}-last-item)${n}-first-item`]:{[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${n}-first-item)${n}-last-item`]:{[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function N7(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{focus:!0};const{componentCls:t}=e,r=`${t}-compact`;return{[r]:Object.assign(Object.assign({},O7(e,r,n)),P7(t,r,n))}}function R7(e,n){return{[`&-item:not(${n}-last-item)`]:{marginBottom:e.calc(e.lineWidth).mul(-1).equal()},"&-item":{"&:hover,&:focus,&:active":{zIndex:2},"&[disabled]":{zIndex:0}}}}function F7(e,n){return{[`&-item:not(${n}-first-item):not(${n}-last-item)`]:{borderRadius:0},[`&-item${n}-first-item:not(${n}-last-item)`]:{[`&, &${e}-sm, &${e}-lg`]:{borderEndEndRadius:0,borderEndStartRadius:0}},[`&-item${n}-last-item:not(${n}-first-item)`]:{[`&, &${e}-sm, &${e}-lg`]:{borderStartStartRadius:0,borderStartEndRadius:0}}}}function M7(e){const n=`${e.componentCls}-compact-vertical`;return{[n]:Object.assign(Object.assign({},R7(e,n)),F7(e.componentCls,n))}}const L7=e=>{const{componentCls:n,calc:t}=e;return{[n]:{[`&-compact-item${n}-primary`]:{[`&:not([disabled]) + ${n}-compact-item${n}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:t(e.lineWidth).mul(-1).equal(),insetInlineStart:t(e.lineWidth).mul(-1).equal(),display:"inline-block",width:e.lineWidth,height:`calc(100% + ${Ve(e.lineWidth)} * 2)`,backgroundColor:e.colorPrimaryHover,content:'""'}}},"&-compact-vertical-item":{[`&${n}-primary`]:{[`&:not([disabled]) + ${n}-compact-vertical-item${n}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:t(e.lineWidth).mul(-1).equal(),insetInlineStart:t(e.lineWidth).mul(-1).equal(),display:"inline-block",width:`calc(100% + ${Ve(e.lineWidth)} * 2)`,height:e.lineWidth,backgroundColor:e.colorPrimaryHover,content:'""'}}}}}}},j7=zx(["Button","compact"],e=>{const n=hw(e);return[N7(n),M7(n),L7(n)]},pw);var D7=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};function $7(e){if(typeof e=="object"&&e){let n=e==null?void 0:e.delay;return n=!Number.isNaN(n)&&typeof n=="number"?n:0,{loading:n<=0,delay:n}}return{loading:!!e,delay:0}}const B7=Ye.forwardRef((e,n)=>{var t,r,o;const{loading:i=!1,prefixCls:a,type:l,danger:s=!1,shape:c="default",size:u,styles:d,disabled:f,className:m,rootClassName:h,children:b,icon:k,iconPosition:g="start",ghost:v=!1,block:y=!1,htmlType:E="button",classNames:_,style:w={},autoInsertSpace:A}=e,N=D7(e,["loading","prefixCls","type","danger","shape","size","styles","disabled","className","rootClassName","children","icon","iconPosition","ghost","block","htmlType","classNames","style","autoInsertSpace"]),R=l||"default",{getPrefixCls:V,direction:$,button:z}=p.useContext(it),j=(t=A??(z==null?void 0:z.autoInsertSpace))!==null&&t!==void 0?t:!0,H=V("btn",a),[Z,B,F]=T7(H),O=p.useContext(ru),W=f??O,S=p.useContext(fw),G=p.useMemo(()=>$7(i),[i]),[U,I]=p.useState(G.loading),[Q,oe]=p.useState(!1),he=ss(n,p.createRef()),Y=p.Children.count(b)===1&&!k&&!uf(R);p.useEffect(()=>{let te=null;G.delay>0?te=setTimeout(()=>{te=null,I(!0)},G.delay):I(G.loading);function Ne(){te&&(clearTimeout(te),te=null)}return Ne},[G]),p.useEffect(()=>{if(!he||!he.current||!j)return;const te=he.current.textContent;Y&&Km(te)?Q||oe(!0):Q&&oe(!1)},[he]);const Oe=te=>{const{onClick:Ne}=e;if(U||W){te.preventDefault();return}Ne==null||Ne(te)},{compactSize:be,compactItemClassnames:Ce}=s7(H,$),me={large:"lg",small:"sm",middle:void 0},en=l7(te=>{var Ne,C;return(C=(Ne=u??be)!==null&&Ne!==void 0?Ne:S)!==null&&C!==void 0?C:te}),Ze=en&&me[en]||"",Ee=U?"loading":k,Se=$o(N,["navigate"]),xe=Ge(H,B,F,{[`${H}-${c}`]:c!=="default"&&c,[`${H}-${R}`]:R,[`${H}-${Ze}`]:Ze,[`${H}-icon-only`]:!b&&b!==0&&!!Ee,[`${H}-background-ghost`]:v&&!uf(R),[`${H}-loading`]:U,[`${H}-two-chinese-chars`]:Q&&j&&!U,[`${H}-block`]:y,[`${H}-dangerous`]:s,[`${H}-rtl`]:$==="rtl",[`${H}-icon-end`]:g==="end"},Ce,m,h,z==null?void 0:z.className),Pe=Object.assign(Object.assign({},z==null?void 0:z.style),w),$e=Ge(_==null?void 0:_.icon,(r=z==null?void 0:z.classNames)===null||r===void 0?void 0:r.icon),Fe=Object.assign(Object.assign({},(d==null?void 0:d.icon)||{}),((o=z==null?void 0:z.styles)===null||o===void 0?void 0:o.icon)||{}),Ue=k&&!U?Ye.createElement(mw,{prefixCls:H,className:$e,style:Fe},k):Ye.createElement(h7,{existIcon:!!k,prefixCls:H,loading:U}),rn=b||b===0?m7(b,Y&&j):null;if(Se.href!==void 0)return Z(Ye.createElement("a",Object.assign({},Se,{className:Ge(xe,{[`${H}-disabled`]:W}),href:W?void 0:Se.href,style:Pe,onClick:Oe,ref:he,tabIndex:W?-1:0}),Ue,rn));let Me=Ye.createElement("button",Object.assign({},N,{type:E,className:xe,style:Pe,onClick:Oe,disabled:W,ref:he}),Ue,rn,!!Ce&&Ye.createElement(j7,{key:"compact",prefixCls:H}));return uf(R)||(Me=Ye.createElement(a7,{component:"Button",disabled:U},Me)),Z(Me)}),rd=B7;rd.Group=d7;rd.__ANT_BUTTON=!0;var bw=p.createContext(null),xg=[];function z7(e,n){var t=p.useState(function(){if(!Qt())return null;var h=document.createElement("div");return h}),r=pe(t,1),o=r[0],i=p.useRef(!1),a=p.useContext(bw),l=p.useState(xg),s=pe(l,2),c=s[0],u=s[1],d=a||(i.current?void 0:function(h){u(function(b){var k=[h].concat(Wn(b));return k})});function f(){o.parentElement||document.body.appendChild(o),i.current=!0}function m(){var h;(h=o.parentElement)===null||h===void 0||h.removeChild(o),i.current=!1}return bt(function(){return e?a?a(f):f():m(),m},[e]),bt(function(){c.length&&(c.forEach(function(h){return h()}),u(xg))},[c]),[o,d]}function H7(e){var n="rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)),t=document.createElement("div");t.id=n;var r=t.style;r.position="absolute",r.left="0",r.top="0",r.width="100px",r.height="100px",r.overflow="scroll";var o,i;if(e){var a=getComputedStyle(e);r.scrollbarColor=a.scrollbarColor,r.scrollbarWidth=a.scrollbarWidth;var l=getComputedStyle(e,"::-webkit-scrollbar"),s=parseInt(l.width,10),c=parseInt(l.height,10);try{var u=s?"width: ".concat(l.width,";"):"",d=c?"height: ".concat(l.height,";"):"";Qr(`
#`.concat(n,`::-webkit-scrollbar {
`).concat(u,`
`).concat(d,`
}`),n)}catch(h){console.error(h),o=s,i=c}}document.body.appendChild(t);var f=e&&o&&!isNaN(o)?o:t.offsetWidth-t.clientWidth,m=e&&i&&!isNaN(i)?i:t.offsetHeight-t.clientHeight;return document.body.removeChild(t),Ul(n),{width:f,height:m}}function U7(e){return typeof document>"u"||!e||!(e instanceof Element)?{width:0,height:0}:H7(e)}function V7(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var W7="rc-util-locker-".concat(Date.now()),Ig=0;function X7(e){var n=!!e,t=p.useState(function(){return Ig+=1,"".concat(W7,"_").concat(Ig)}),r=pe(t,1),o=r[0];bt(function(){if(n){var i=U7(document.body).width,a=V7();Qr(`
html body {
  overflow-y: hidden;
  `.concat(a?"width: calc(100% - ".concat(i,"px);"):"",`
}`),o)}else Ul(o);return function(){Ul(o)}},[n,o])}var G7=!1;function Z7(e){return G7}var _g=function(n){return n===!1?!1:!Qt()||!n?null:typeof n=="string"?document.querySelector(n):typeof n=="function"?n():n},yw=p.forwardRef(function(e,n){var t=e.open,r=e.autoLock,o=e.getContainer;e.debug;var i=e.autoDestroy,a=i===void 0?!0:i,l=e.children,s=p.useState(t),c=pe(s,2),u=c[0],d=c[1],f=u||t;p.useEffect(function(){(a||t)&&d(t)},[t,a]);var m=p.useState(function(){return _g(o)}),h=pe(m,2),b=h[0],k=h[1];p.useEffect(function(){var $=_g(o);k($??null)});var g=z7(f&&!b),v=pe(g,2),y=v[0],E=v[1],_=b??y;X7(r&&t&&Qt()&&(_===y||_===document.body));var w=null;if(l&&cs(l)&&n){var A=l;w=A.ref}var N=Ku(w,n);if(!f||!Qt()||b===void 0)return null;var R=_===!1||Z7(),V=l;return n&&(V=p.cloneElement(l,{ref:N})),p.createElement(bw.Provider,{value:E},R?V:Ca.createPortal(V,_))});function K7(){var e=de({},ns);return e.useId}var Ag=0,Tg=K7();const q7=Tg?function(n){var t=Tg();return n||t}:function(n){var t=p.useState("ssr-id"),r=pe(t,2),o=r[0],i=r[1];return p.useEffect(function(){var a=Ag;Ag+=1,i("rc_unique_".concat(a))},[]),n||o},Q7=e=>({[e.componentCls]:{[`${e.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}},[`${e.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}}}),Y7=e=>({animationDuration:e,animationFillMode:"both"}),J7=e=>({animationDuration:e,animationFillMode:"both"}),ww=function(e,n,t,r){const i=(arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1)?"&":"";return{[`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]:Object.assign(Object.assign({},Y7(r)),{animationPlayState:"paused"}),[`${i}${e}-leave`]:Object.assign(Object.assign({},J7(r)),{animationPlayState:"paused"}),[`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]:{animationName:n,animationPlayState:"running"},[`${i}${e}-leave${e}-leave-active`]:{animationName:t,animationPlayState:"running",pointerEvents:"none"}}},e9=new Jn("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),n9=new Jn("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),t9=new Jn("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),r9=new Jn("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),o9=new Jn("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),i9=new Jn("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),a9=new Jn("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),l9=new Jn("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),s9={"slide-up":{inKeyframes:e9,outKeyframes:n9},"slide-down":{inKeyframes:t9,outKeyframes:r9},"slide-left":{inKeyframes:o9,outKeyframes:i9},"slide-right":{inKeyframes:a9,outKeyframes:l9}},Og=(e,n)=>{const{antCls:t}=e,r=`${t}-${n}`,{inKeyframes:o,outKeyframes:i}=s9[n];return[ww(r,o,i,e.motionDurationMid),{[`
      ${r}-enter,
      ${r}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${r}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]},c9=new Jn("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),u9=new Jn("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),Pg=new Jn("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),Ng=new Jn("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),d9=new Jn("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),f9=new Jn("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),m9=new Jn("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),h9=new Jn("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}}),p9=new Jn("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),g9=new Jn("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}}),v9=new Jn("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),b9=new Jn("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}}),y9={zoom:{inKeyframes:c9,outKeyframes:u9},"zoom-big":{inKeyframes:Pg,outKeyframes:Ng},"zoom-big-fast":{inKeyframes:Pg,outKeyframes:Ng},"zoom-left":{inKeyframes:m9,outKeyframes:h9},"zoom-right":{inKeyframes:p9,outKeyframes:g9},"zoom-up":{inKeyframes:d9,outKeyframes:f9},"zoom-down":{inKeyframes:v9,outKeyframes:b9}},Cw=(e,n)=>{const{antCls:t}=e,r=`${t}-${n}`,{inKeyframes:o,outKeyframes:i}=y9[n];return[ww(r,o,i,n==="zoom-big-fast"?e.motionDurationFast:e.motionDurationMid),{[`
        ${r}-enter,
        ${r}-appear
      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:e.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${r}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]},w9=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e==null?void 0:e.substr(0,4))};var C9=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],Oi=void 0;function S9(e,n){var t=e.prefixCls,r=e.invalidate,o=e.item,i=e.renderItem,a=e.responsive,l=e.responsiveDisabled,s=e.registerSize,c=e.itemKey,u=e.className,d=e.style,f=e.children,m=e.display,h=e.order,b=e.component,k=b===void 0?"div":b,g=$n(e,C9),v=a&&!m;function y(N){s(c,N)}p.useEffect(function(){return function(){y(null)}},[]);var E=i&&o!==Oi?i(o):f,_;r||(_={opacity:v?0:1,height:v?0:Oi,overflowY:v?"hidden":Oi,order:a?h:Oi,pointerEvents:v?"none":Oi,position:v?"absolute":Oi});var w={};v&&(w["aria-hidden"]=!0);var A=p.createElement(k,pn({className:Ge(!r&&t,u),style:de(de({},_),d)},w,g,{ref:n}),E);return a&&(A=p.createElement(us,{onResize:function(R){var V=R.offsetWidth;y(V)},disabled:l},A)),A}var wl=p.forwardRef(S9);wl.displayName="Item";function k9(e){if(typeof MessageChannel>"u")Kt(e);else{var n=new MessageChannel;n.port1.onmessage=function(){return e()},n.port2.postMessage(void 0)}}function E9(){var e=p.useRef(null),n=function(r){e.current||(e.current=[],k9(function(){Ca.unstable_batchedUpdates(function(){e.current.forEach(function(o){o()}),e.current=null})})),e.current.push(r)};return n}function Za(e,n){var t=p.useState(n),r=pe(t,2),o=r[0],i=r[1],a=kt(function(l){e(function(){i(l)})});return[o,a]}var su=Ye.createContext(null),x9=["component"],I9=["className"],_9=["className"],A9=function(n,t){var r=p.useContext(su);if(!r){var o=n.component,i=o===void 0?"div":o,a=$n(n,x9);return p.createElement(i,pn({},a,{ref:t}))}var l=r.className,s=$n(r,I9),c=n.className,u=$n(n,_9);return p.createElement(su.Provider,{value:null},p.createElement(wl,pn({ref:t,className:Ge(l,c)},s,u)))},Sw=p.forwardRef(A9);Sw.displayName="RawItem";var T9=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],kw="responsive",Ew="invalidate";function O9(e){return"+ ".concat(e.length," ...")}function P9(e,n){var t=e.prefixCls,r=t===void 0?"rc-overflow":t,o=e.data,i=o===void 0?[]:o,a=e.renderItem,l=e.renderRawItem,s=e.itemKey,c=e.itemWidth,u=c===void 0?10:c,d=e.ssr,f=e.style,m=e.className,h=e.maxCount,b=e.renderRest,k=e.renderRawRest,g=e.suffix,v=e.component,y=v===void 0?"div":v,E=e.itemComponent,_=e.onVisibleChange,w=$n(e,T9),A=d==="full",N=E9(),R=Za(N,null),V=pe(R,2),$=V[0],z=V[1],j=$||0,H=Za(N,new Map),Z=pe(H,2),B=Z[0],F=Z[1],O=Za(N,0),W=pe(O,2),S=W[0],G=W[1],U=Za(N,0),I=pe(U,2),Q=I[0],oe=I[1],L=Za(N,0),he=pe(L,2),Y=he[0],Oe=he[1],be=p.useState(null),Ce=pe(be,2),me=Ce[0],en=Ce[1],Ze=p.useState(null),Ee=pe(Ze,2),Se=Ee[0],xe=Ee[1],Pe=p.useMemo(function(){return Se===null&&A?Number.MAX_SAFE_INTEGER:Se||0},[Se,$]),$e=p.useState(!1),Fe=pe($e,2),Ue=Fe[0],rn=Fe[1],Me="".concat(r,"-item"),te=Math.max(S,Q),Ne=h===kw,C=i.length&&Ne,x=h===Ew,T=C||typeof h=="number"&&i.length>h,M=p.useMemo(function(){var Re=i;return C?$===null&&A?Re=i:Re=i.slice(0,Math.min(i.length,j/u)):typeof h=="number"&&(Re=i.slice(0,h)),Re},[i,u,$,h,C]),K=p.useMemo(function(){return C?i.slice(Pe+1):i.slice(M.length)},[i,M,C,Pe]),q=p.useCallback(function(Re,ye){var Ae;return typeof s=="function"?s(Re):(Ae=s&&(Re==null?void 0:Re[s]))!==null&&Ae!==void 0?Ae:ye},[s]),ee=p.useCallback(a||function(Re){return Re},[a]);function ne(Re,ye,Ae){Se===Re&&(ye===void 0||ye===me)||(xe(Re),Ae||(rn(Re<i.length-1),_==null||_(Re)),ye!==void 0&&en(ye))}function ue(Re,ye){z(ye.clientWidth)}function ae(Re,ye){F(function(Ae){var qe=new Map(Ae);return ye===null?qe.delete(Re):qe.set(Re,ye),qe})}function ge(Re,ye){oe(ye),G(Q)}function De(Re,ye){Oe(ye)}function we(Re){return B.get(q(M[Re],Re))}bt(function(){if(j&&typeof te=="number"&&M){var Re=Y,ye=M.length,Ae=ye-1;if(!ye){ne(0,null);return}for(var qe=0;qe<ye;qe+=1){var P=we(qe);if(A&&(P=P||0),P===void 0){ne(qe-1,void 0,!0);break}if(Re+=P,Ae===0&&Re<=j||qe===Ae-1&&Re+we(Ae)<=j){ne(Ae,null);break}else if(Re+te>j){ne(qe-1,Re-P-Y+Q);break}}g&&we(0)+Y>j&&en(null)}},[j,B,Q,Y,q,M]);var Xe=Ue&&!!K.length,tn={};me!==null&&C&&(tn={position:"absolute",left:me,top:0});var He={prefixCls:Me,responsive:C,component:E,invalidate:x},sn=l?function(Re,ye){var Ae=q(Re,ye);return p.createElement(su.Provider,{key:Ae,value:de(de({},He),{},{order:ye,item:Re,itemKey:Ae,registerSize:ae,display:ye<=Pe})},l(Re,ye))}:function(Re,ye){var Ae=q(Re,ye);return p.createElement(wl,pn({},He,{order:ye,key:Ae,item:Re,renderItem:ee,itemKey:Ae,registerSize:ae,display:ye<=Pe}))},an,Ke={order:Xe?Pe:Number.MAX_SAFE_INTEGER,className:"".concat(Me,"-rest"),registerSize:ge,display:Xe};if(k)k&&(an=p.createElement(su.Provider,{value:de(de({},He),Ke)},k(K)));else{var ke=b||O9;an=p.createElement(wl,pn({},He,Ke),typeof ke=="function"?ke(K):ke)}var We=p.createElement(y,pn({className:Ge(!x&&r,m),style:f,ref:n},w),M.map(sn),T?an:null,g&&p.createElement(wl,pn({},He,{responsive:Ne,responsiveDisabled:!C,order:Pe,className:"".concat(Me,"-suffix"),registerSize:De,display:!0,style:tn}),g));return Ne&&(We=p.createElement(us,{onResize:ue,disabled:!C},We)),We}var Yr=p.forwardRef(P9);Yr.displayName="Overflow";Yr.Item=Sw;Yr.RESPONSIVE=kw;Yr.INVALIDATE=Ew;function N9(e){var n=e.prefixCls,t=e.align,r=e.arrow,o=e.arrowPos,i=r||{},a=i.className,l=i.content,s=o.x,c=s===void 0?0:s,u=o.y,d=u===void 0?0:u,f=p.useRef();if(!t||!t.points)return null;var m={position:"absolute"};if(t.autoArrow!==!1){var h=t.points[0],b=t.points[1],k=h[0],g=h[1],v=b[0],y=b[1];k===v||!["t","b"].includes(k)?m.top=d:k==="t"?m.top=0:m.bottom=0,g===y||!["l","r"].includes(g)?m.left=c:g==="l"?m.left=0:m.right=0}return p.createElement("div",{ref:f,className:Ge("".concat(n,"-arrow"),a),style:m},l)}function R9(e){var n=e.prefixCls,t=e.open,r=e.zIndex,o=e.mask,i=e.motion;return o?p.createElement(xa,pn({},i,{motionAppear:!0,visible:t,removeOnLeave:!0}),function(a){var l=a.className;return p.createElement("div",{style:{zIndex:r},className:Ge("".concat(n,"-mask"),l)})}):null}var F9=p.memo(function(e){var n=e.children;return n},function(e,n){return n.cache}),M9=p.forwardRef(function(e,n){var t=e.popup,r=e.className,o=e.prefixCls,i=e.style,a=e.target,l=e.onVisibleChanged,s=e.open,c=e.keepDom,u=e.fresh,d=e.onClick,f=e.mask,m=e.arrow,h=e.arrowPos,b=e.align,k=e.motion,g=e.maskMotion,v=e.forceRender,y=e.getPopupContainer,E=e.autoDestroy,_=e.portal,w=e.zIndex,A=e.onMouseEnter,N=e.onMouseLeave,R=e.onPointerEnter,V=e.ready,$=e.offsetX,z=e.offsetY,j=e.offsetR,H=e.offsetB,Z=e.onAlign,B=e.onPrepare,F=e.stretch,O=e.targetWidth,W=e.targetHeight,S=typeof t=="function"?t():t,G=s||c,U=(y==null?void 0:y.length)>0,I=p.useState(!y||!U),Q=pe(I,2),oe=Q[0],L=Q[1];if(bt(function(){!oe&&U&&a&&L(!0)},[oe,U,a]),!oe)return null;var he="auto",Y={left:"-1000vw",top:"-1000vh",right:he,bottom:he};if(V||!s){var Oe,be=b.points,Ce=b.dynamicInset||((Oe=b._experimental)===null||Oe===void 0?void 0:Oe.dynamicInset),me=Ce&&be[0][1]==="r",en=Ce&&be[0][0]==="b";me?(Y.right=j,Y.left=he):(Y.left=$,Y.right=he),en?(Y.bottom=H,Y.top=he):(Y.top=z,Y.bottom=he)}var Ze={};return F&&(F.includes("height")&&W?Ze.height=W:F.includes("minHeight")&&W&&(Ze.minHeight=W),F.includes("width")&&O?Ze.width=O:F.includes("minWidth")&&O&&(Ze.minWidth=O)),s||(Ze.pointerEvents="none"),p.createElement(_,{open:v||G,getContainer:y&&function(){return y(a)},autoDestroy:E},p.createElement(R9,{prefixCls:o,open:s,zIndex:w,mask:f,motion:g}),p.createElement(us,{onResize:Z,disabled:!s},function(Ee){return p.createElement(xa,pn({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:v,leavedClassName:"".concat(o,"-hidden")},k,{onAppearPrepare:B,onEnterPrepare:B,visible:s,onVisibleChanged:function(xe){var Pe;k==null||(Pe=k.onVisibleChanged)===null||Pe===void 0||Pe.call(k,xe),l(xe)}}),function(Se,xe){var Pe=Se.className,$e=Se.style,Fe=Ge(o,Pe,r);return p.createElement("div",{ref:ss(Ee,n,xe),className:Fe,style:de(de(de(de({"--arrow-x":"".concat(h.x||0,"px"),"--arrow-y":"".concat(h.y||0,"px")},Y),Ze),$e),{},{boxSizing:"border-box",zIndex:w},i),onMouseEnter:A,onMouseLeave:N,onPointerEnter:R,onClick:d},m&&p.createElement(N9,{prefixCls:o,arrow:m,arrowPos:h,align:b}),p.createElement(F9,{cache:!s&&!u},S))})}))}),L9=p.forwardRef(function(e,n){var t=e.children,r=e.getTriggerDOMNode,o=cs(t),i=p.useCallback(function(l){pp(n,r?r(l):l)},[r]),a=Ku(i,t.ref);return o?p.cloneElement(t,{ref:a}):t}),Rg=p.createContext(null);function Fg(e){return e?Array.isArray(e)?e:[e]:[]}function j9(e,n,t,r){return p.useMemo(function(){var o=Fg(t??n),i=Fg(r??n),a=new Set(o),l=new Set(i);return e&&(a.has("hover")&&(a.delete("hover"),a.add("click")),l.has("hover")&&(l.delete("hover"),l.add("click"))),[a,l]},[e,n,t,r])}function D9(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0;return t?e[0]===n[0]:e[0]===n[0]&&e[1]===n[1]}function $9(e,n,t,r){for(var o=t.points,i=Object.keys(e),a=0;a<i.length;a+=1){var l,s=i[a];if(D9((l=e[s])===null||l===void 0?void 0:l.points,o,r))return"".concat(n,"-placement-").concat(s)}return""}function Mg(e,n,t,r){return n||(t?{motionName:"".concat(e,"-").concat(t)}:r?{motionName:r}:null)}function ms(e){return e.ownerDocument.defaultView}function qm(e){for(var n=[],t=e==null?void 0:e.parentElement,r=["hidden","scroll","clip","auto"];t;){var o=ms(t).getComputedStyle(t),i=o.overflowX,a=o.overflowY,l=o.overflow;[i,a,l].some(function(s){return r.includes(s)})&&n.push(t),t=t.parentElement}return n}function ql(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Number.isNaN(e)?n:e}function Ka(e){return ql(parseFloat(e),0)}function Lg(e,n){var t=de({},e);return(n||[]).forEach(function(r){if(!(r instanceof HTMLBodyElement||r instanceof HTMLHtmlElement)){var o=ms(r).getComputedStyle(r),i=o.overflow,a=o.overflowClipMargin,l=o.borderTopWidth,s=o.borderBottomWidth,c=o.borderLeftWidth,u=o.borderRightWidth,d=r.getBoundingClientRect(),f=r.offsetHeight,m=r.clientHeight,h=r.offsetWidth,b=r.clientWidth,k=Ka(l),g=Ka(s),v=Ka(c),y=Ka(u),E=ql(Math.round(d.width/h*1e3)/1e3),_=ql(Math.round(d.height/f*1e3)/1e3),w=(h-b-v-y)*E,A=(f-m-k-g)*_,N=k*_,R=g*_,V=v*E,$=y*E,z=0,j=0;if(i==="clip"){var H=Ka(a);z=H*E,j=H*_}var Z=d.x+V-z,B=d.y+N-j,F=Z+d.width+2*z-V-$-w,O=B+d.height+2*j-N-R-A;t.left=Math.max(t.left,Z),t.top=Math.max(t.top,B),t.right=Math.min(t.right,F),t.bottom=Math.min(t.bottom,O)}}),t}function jg(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t="".concat(n),r=t.match(/^(.*)\%$/);return r?e*(parseFloat(r[1])/100):parseFloat(t)}function Dg(e,n){var t=n||[],r=pe(t,2),o=r[0],i=r[1];return[jg(e.width,o),jg(e.height,i)]}function $g(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return[e[0],e[1]]}function Pi(e,n){var t=n[0],r=n[1],o,i;return t==="t"?i=e.y:t==="b"?i=e.y+e.height:i=e.y+e.height/2,r==="l"?o=e.x:r==="r"?o=e.x+e.width:o=e.x+e.width/2,{x:o,y:i}}function co(e,n){var t={t:"b",b:"t",l:"r",r:"l"};return e.map(function(r,o){return o===n?t[r]||"c":r}).join("")}function B9(e,n,t,r,o,i,a){var l=p.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:o[r]||{}}),s=pe(l,2),c=s[0],u=s[1],d=p.useRef(0),f=p.useMemo(function(){return n?qm(n):[]},[n]),m=p.useRef({}),h=function(){m.current={}};e||h();var b=kt(function(){if(n&&t&&e){let Zn=function(bs,Hr){var Wo=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Fe,Ii=S.x+bs,Ma=S.y+Hr,fd=Ii+Oe,md=Ma+Y,hd=Math.max(Ii,Wo.left),pd=Math.max(Ma,Wo.top),Te=Math.min(fd,Wo.right),Qe=Math.min(md,Wo.bottom);return Math.max(0,(Te-hd)*(Qe-pd))},Fa=function(){ie=S.y+ke,Be=ie+Y,se=S.x+Ke,je=se+Oe};var lo=Zn,xi=Fa,v,y,E=n,_=E.ownerDocument,w=ms(E),A=w.getComputedStyle(E),N=A.width,R=A.height,V=A.position,$=E.style.left,z=E.style.top,j=E.style.right,H=E.style.bottom,Z=E.style.overflow,B=de(de({},o[r]),i),F=_.createElement("div");(v=E.parentElement)===null||v===void 0||v.appendChild(F),F.style.left="".concat(E.offsetLeft,"px"),F.style.top="".concat(E.offsetTop,"px"),F.style.position=V,F.style.height="".concat(E.offsetHeight,"px"),F.style.width="".concat(E.offsetWidth,"px"),E.style.left="0",E.style.top="0",E.style.right="auto",E.style.bottom="auto",E.style.overflow="hidden";var O;if(Array.isArray(t))O={x:t[0],y:t[1],width:0,height:0};else{var W=t.getBoundingClientRect();O={x:W.x,y:W.y,width:W.width,height:W.height}}var S=E.getBoundingClientRect(),G=_.documentElement,U=G.clientWidth,I=G.clientHeight,Q=G.scrollWidth,oe=G.scrollHeight,L=G.scrollTop,he=G.scrollLeft,Y=S.height,Oe=S.width,be=O.height,Ce=O.width,me={left:0,top:0,right:U,bottom:I},en={left:-he,top:-L,right:Q-he,bottom:oe-L},Ze=B.htmlRegion,Ee="visible",Se="visibleFirst";Ze!=="scroll"&&Ze!==Se&&(Ze=Ee);var xe=Ze===Se,Pe=Lg(en,f),$e=Lg(me,f),Fe=Ze===Ee?$e:Pe,Ue=xe?$e:Fe;E.style.left="auto",E.style.top="auto",E.style.right="0",E.style.bottom="0";var rn=E.getBoundingClientRect();E.style.left=$,E.style.top=z,E.style.right=j,E.style.bottom=H,E.style.overflow=Z,(y=E.parentElement)===null||y===void 0||y.removeChild(F);var Me=ql(Math.round(Oe/parseFloat(N)*1e3)/1e3),te=ql(Math.round(Y/parseFloat(R)*1e3)/1e3);if(Me===0||te===0||Hl(t)&&!Ap(t))return;var Ne=B.offset,C=B.targetOffset,x=Dg(S,Ne),T=pe(x,2),M=T[0],K=T[1],q=Dg(O,C),ee=pe(q,2),ne=ee[0],ue=ee[1];O.x-=ne,O.y-=ue;var ae=B.points||[],ge=pe(ae,2),De=ge[0],we=ge[1],Xe=$g(we),tn=$g(De),He=Pi(O,Xe),sn=Pi(S,tn),an=de({},B),Ke=He.x-sn.x+M,ke=He.y-sn.y+K,We=Zn(Ke,ke),Re=Zn(Ke,ke,$e),ye=Pi(O,["t","l"]),Ae=Pi(S,["t","l"]),qe=Pi(O,["b","r"]),P=Pi(S,["b","r"]),D=B.overflow||{},X=D.adjustX,J=D.adjustY,fe=D.shiftX,ve=D.shiftY,Ie=function(Hr){return typeof Hr=="boolean"?Hr:Hr>=0},ie,Be,se,je;Fa();var cn=Ie(J),ln=tn[0]===Xe[0];if(cn&&tn[0]==="t"&&(Be>Ue.bottom||m.current.bt)){var un=ke;ln?un-=Y-be:un=ye.y-P.y-K;var dn=Zn(Ke,un),In=Zn(Ke,un,$e);dn>We||dn===We&&(!xe||In>=Re)?(m.current.bt=!0,ke=un,K=-K,an.points=[co(tn,0),co(Xe,0)]):m.current.bt=!1}if(cn&&tn[0]==="b"&&(ie<Ue.top||m.current.tb)){var yn=ke;ln?yn+=Y-be:yn=qe.y-Ae.y-K;var zn=Zn(Ke,yn),At=Zn(Ke,yn,$e);zn>We||zn===We&&(!xe||At>=Re)?(m.current.tb=!0,ke=yn,K=-K,an.points=[co(tn,0),co(Xe,0)]):m.current.tb=!1}var jt=Ie(X),Dt=tn[1]===Xe[1];if(jt&&tn[1]==="l"&&(je>Ue.right||m.current.rl)){var at=Ke;Dt?at-=Oe-Ce:at=ye.x-P.x-M;var Xn=Zn(at,ke),er=Zn(at,ke,$e);Xn>We||Xn===We&&(!xe||er>=Re)?(m.current.rl=!0,Ke=at,M=-M,an.points=[co(tn,1),co(Xe,1)]):m.current.rl=!1}if(jt&&tn[1]==="r"&&(se<Ue.left||m.current.lr)){var Tt=Ke;Dt?Tt+=Oe-Ce:Tt=qe.x-Ae.x-M;var pr=Zn(Tt,ke),nn=Zn(Tt,ke,$e);pr>We||pr===We&&(!xe||nn>=Re)?(m.current.lr=!0,Ke=Tt,M=-M,an.points=[co(tn,1),co(Xe,1)]):m.current.lr=!1}Fa();var hn=fe===!0?0:fe;typeof hn=="number"&&(se<$e.left&&(Ke-=se-$e.left-M,O.x+Ce<$e.left+hn&&(Ke+=O.x-$e.left+Ce-hn)),je>$e.right&&(Ke-=je-$e.right-M,O.x>$e.right-hn&&(Ke+=O.x-$e.right+hn)));var kn=ve===!0?0:ve;typeof kn=="number"&&(ie<$e.top&&(ke-=ie-$e.top-K,O.y+be<$e.top+kn&&(ke+=O.y-$e.top+be-kn)),Be>$e.bottom&&(ke-=Be-$e.bottom-K,O.y>$e.bottom-kn&&(ke+=O.y-$e.bottom+kn)));var gn=S.x+Ke,mt=gn+Oe,$t=S.y+ke,nr=$t+Y,Ho=O.x,ao=Ho+Ce,gr=O.y,Na=gr+be,Ra=Math.max(gn,Ho),_n=Math.min(mt,ao),vn=(Ra+_n)/2,En=vn-gn,lt=Math.max($t,gr),st=Math.min(nr,Na),Br=(lt+st)/2,Uo=Br-$t;a==null||a(n,an);var Vo=rn.right-S.x-(Ke+S.width),zr=rn.bottom-S.y-(ke+S.height);Me===1&&(Ke=Math.round(Ke),Vo=Math.round(Vo)),te===1&&(ke=Math.round(ke),zr=Math.round(zr));var Ei={ready:!0,offsetX:Ke/Me,offsetY:ke/te,offsetR:Vo/Me,offsetB:zr/te,arrowX:En/Me,arrowY:Uo/te,scaleX:Me,scaleY:te,align:an};u(Ei)}}),k=function(){d.current+=1;var y=d.current;Promise.resolve().then(function(){d.current===y&&b()})},g=function(){u(function(y){return de(de({},y),{},{ready:!1})})};return bt(g,[r]),bt(function(){e||g()},[e]),[c.ready,c.offsetX,c.offsetY,c.offsetR,c.offsetB,c.arrowX,c.arrowY,c.scaleX,c.scaleY,c.align,k]}function z9(e,n,t,r,o){bt(function(){if(e&&n&&t){let f=function(){r(),o()};var d=f,i=n,a=t,l=qm(i),s=qm(a),c=ms(a),u=new Set([c].concat(Wn(l),Wn(s)));return u.forEach(function(m){m.addEventListener("scroll",f,{passive:!0})}),c.addEventListener("resize",f,{passive:!0}),r(),function(){u.forEach(function(m){m.removeEventListener("scroll",f),c.removeEventListener("resize",f)})}}},[e,n,t])}function H9(e,n,t,r,o,i,a,l){var s=p.useRef(e);s.current=e,p.useEffect(function(){if(n&&r&&(!o||i)){var c=function(m){var h=m.target;s.current&&!a(h)&&l(!1)},u=ms(r);u.addEventListener("mousedown",c,!0),u.addEventListener("contextmenu",c,!0);var d=iu(t);return d&&(d.addEventListener("mousedown",c,!0),d.addEventListener("contextmenu",c,!0)),function(){u.removeEventListener("mousedown",c,!0),u.removeEventListener("contextmenu",c,!0),d&&(d.removeEventListener("mousedown",c,!0),d.removeEventListener("contextmenu",c,!0))}}},[n,t,r,o,i])}var U9=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];function V9(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:yw,n=p.forwardRef(function(t,r){var o=t.prefixCls,i=o===void 0?"rc-trigger-popup":o,a=t.children,l=t.action,s=l===void 0?"hover":l,c=t.showAction,u=t.hideAction,d=t.popupVisible,f=t.defaultPopupVisible,m=t.onPopupVisibleChange,h=t.afterPopupVisibleChange,b=t.mouseEnterDelay,k=t.mouseLeaveDelay,g=k===void 0?.1:k,v=t.focusDelay,y=t.blurDelay,E=t.mask,_=t.maskClosable,w=_===void 0?!0:_,A=t.getPopupContainer,N=t.forceRender,R=t.autoDestroy,V=t.destroyPopupOnHide,$=t.popup,z=t.popupClassName,j=t.popupStyle,H=t.popupPlacement,Z=t.builtinPlacements,B=Z===void 0?{}:Z,F=t.popupAlign,O=t.zIndex,W=t.stretch,S=t.getPopupClassNameFromAlign,G=t.fresh,U=t.alignPoint,I=t.onPopupClick,Q=t.onPopupAlign,oe=t.arrow,L=t.popupMotion,he=t.maskMotion,Y=t.popupTransitionName,Oe=t.popupAnimation,be=t.maskTransitionName,Ce=t.maskAnimation,me=t.className,en=t.getTriggerDOMNode,Ze=$n(t,U9),Ee=R||V||!1,Se=p.useState(!1),xe=pe(Se,2),Pe=xe[0],$e=xe[1];bt(function(){$e(w9())},[]);var Fe=p.useRef({}),Ue=p.useContext(Rg),rn=p.useMemo(function(){return{registerSubPopup:function(Qe,Hn){Fe.current[Qe]=Hn,Ue==null||Ue.registerSubPopup(Qe,Hn)}}},[Ue]),Me=q7(),te=p.useState(null),Ne=pe(te,2),C=Ne[0],x=Ne[1],T=p.useRef(null),M=kt(function(Te){T.current=Te,Hl(Te)&&C!==Te&&x(Te),Ue==null||Ue.registerSubPopup(Me,Te)}),K=p.useState(null),q=pe(K,2),ee=q[0],ne=q[1],ue=p.useRef(null),ae=kt(function(Te){Hl(Te)&&ee!==Te&&(ne(Te),ue.current=Te)}),ge=p.Children.only(a),De=(ge==null?void 0:ge.props)||{},we={},Xe=kt(function(Te){var Qe,Hn,et=ee;return(et==null?void 0:et.contains(Te))||((Qe=iu(et))===null||Qe===void 0?void 0:Qe.host)===Te||Te===et||(C==null?void 0:C.contains(Te))||((Hn=iu(C))===null||Hn===void 0?void 0:Hn.host)===Te||Te===C||Object.values(Fe.current).some(function(Un){return(Un==null?void 0:Un.contains(Te))||Te===Un})}),tn=Mg(i,L,Oe,Y),He=Mg(i,he,Ce,be),sn=p.useState(f||!1),an=pe(sn,2),Ke=an[0],ke=an[1],We=d??Ke,Re=kt(function(Te){d===void 0&&ke(Te)});bt(function(){ke(d||!1)},[d]);var ye=p.useRef(We);ye.current=We;var Ae=p.useRef([]);Ae.current=[];var qe=kt(function(Te){var Qe;Re(Te),((Qe=Ae.current[Ae.current.length-1])!==null&&Qe!==void 0?Qe:We)!==Te&&(Ae.current.push(Te),m==null||m(Te))}),P=p.useRef(),D=function(){clearTimeout(P.current)},X=function(Qe){var Hn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;D(),Hn===0?qe(Qe):P.current=setTimeout(function(){qe(Qe)},Hn*1e3)};p.useEffect(function(){return D},[]);var J=p.useState(!1),fe=pe(J,2),ve=fe[0],Ie=fe[1];bt(function(Te){(!Te||We)&&Ie(!0)},[We]);var ie=p.useState(null),Be=pe(ie,2),se=Be[0],je=Be[1],cn=p.useState([0,0]),ln=pe(cn,2),un=ln[0],dn=ln[1],In=function(Qe){dn([Qe.clientX,Qe.clientY])},yn=B9(We,C,U?un:ee,H,B,F,Q),zn=pe(yn,11),At=zn[0],jt=zn[1],Dt=zn[2],at=zn[3],Xn=zn[4],er=zn[5],Tt=zn[6],pr=zn[7],nn=zn[8],hn=zn[9],kn=zn[10],gn=j9(Pe,s,c,u),mt=pe(gn,2),$t=mt[0],nr=mt[1],Ho=$t.has("click"),ao=nr.has("click")||nr.has("contextMenu"),gr=kt(function(){ve||kn()}),Na=function(){ye.current&&U&&ao&&X(!1)};z9(We,ee,C,gr,Na),bt(function(){gr()},[un,H]),bt(function(){We&&!(B!=null&&B[H])&&gr()},[JSON.stringify(F)]);var Ra=p.useMemo(function(){var Te=$9(B,i,hn,U);return Ge(Te,S==null?void 0:S(hn))},[hn,S,B,i,U]);p.useImperativeHandle(r,function(){return{nativeElement:ue.current,popupElement:T.current,forceAlign:gr}});var _n=p.useState(0),vn=pe(_n,2),En=vn[0],lt=vn[1],st=p.useState(0),Br=pe(st,2),Uo=Br[0],Vo=Br[1],zr=function(){if(W&&ee){var Qe=ee.getBoundingClientRect();lt(Qe.width),Vo(Qe.height)}},Ei=function(){zr(),gr()},lo=function(Qe){Ie(!1),kn(),h==null||h(Qe)},xi=function(){return new Promise(function(Qe){zr(),je(function(){return Qe})})};bt(function(){se&&(kn(),se(),je(null))},[se]);function Zn(Te,Qe,Hn,et){we[Te]=function(Un){var ys;et==null||et(Un),X(Qe,Hn);for(var gd=arguments.length,n0=new Array(gd>1?gd-1:0),ws=1;ws<gd;ws++)n0[ws-1]=arguments[ws];(ys=De[Te])===null||ys===void 0||ys.call.apply(ys,[De,Un].concat(n0))}}(Ho||ao)&&(we.onClick=function(Te){var Qe;ye.current&&ao?X(!1):!ye.current&&Ho&&(In(Te),X(!0));for(var Hn=arguments.length,et=new Array(Hn>1?Hn-1:0),Un=1;Un<Hn;Un++)et[Un-1]=arguments[Un];(Qe=De.onClick)===null||Qe===void 0||Qe.call.apply(Qe,[De,Te].concat(et))}),H9(We,ao,ee,C,E,w,Xe,X);var Fa=$t.has("hover"),bs=nr.has("hover"),Hr,Wo;Fa&&(Zn("onMouseEnter",!0,b,function(Te){In(Te)}),Zn("onPointerEnter",!0,b,function(Te){In(Te)}),Hr=function(Qe){(We||ve)&&C!==null&&C!==void 0&&C.contains(Qe.target)&&X(!0,b)},U&&(we.onMouseMove=function(Te){var Qe;(Qe=De.onMouseMove)===null||Qe===void 0||Qe.call(De,Te)})),bs&&(Zn("onMouseLeave",!1,g),Zn("onPointerLeave",!1,g),Wo=function(){X(!1,g)}),$t.has("focus")&&Zn("onFocus",!0,v),nr.has("focus")&&Zn("onBlur",!1,y),$t.has("contextMenu")&&(we.onContextMenu=function(Te){var Qe;ye.current&&nr.has("contextMenu")?X(!1):(In(Te),X(!0)),Te.preventDefault();for(var Hn=arguments.length,et=new Array(Hn>1?Hn-1:0),Un=1;Un<Hn;Un++)et[Un-1]=arguments[Un];(Qe=De.onContextMenu)===null||Qe===void 0||Qe.call.apply(Qe,[De,Te].concat(et))}),me&&(we.className=Ge(De.className,me));var Ii=de(de({},De),we),Ma={},fd=["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"];fd.forEach(function(Te){Ze[Te]&&(Ma[Te]=function(){for(var Qe,Hn=arguments.length,et=new Array(Hn),Un=0;Un<Hn;Un++)et[Un]=arguments[Un];(Qe=Ii[Te])===null||Qe===void 0||Qe.call.apply(Qe,[Ii].concat(et)),Ze[Te].apply(Ze,et)})});var md=p.cloneElement(ge,de(de({},Ii),Ma)),hd={x:er,y:Tt},pd=oe?de({},oe!==!0?oe:{}):null;return p.createElement(p.Fragment,null,p.createElement(us,{disabled:!We,ref:ae,onResize:Ei},p.createElement(L9,{getTriggerDOMNode:en},md)),p.createElement(Rg.Provider,{value:rn},p.createElement(M9,{portal:e,ref:M,prefixCls:i,popup:$,className:Ge(z,Ra),style:j,target:ee,onMouseEnter:Hr,onMouseLeave:Wo,onPointerEnter:Hr,zIndex:O,open:We,keepDom:ve,fresh:G,onClick:I,mask:E,motion:tn,maskMotion:He,onVisibleChanged:lo,onPrepare:xi,forceRender:N,autoDestroy:Ee,getPopupContainer:A,align:hn,arrow:pd,arrowPos:hd,ready:At,offsetX:jt,offsetY:Dt,offsetR:at,offsetB:Xn,onAlign:gr,stretch:W,targetWidth:En/pr,targetHeight:Uo/nn})))});return n}const xw=V9(yw);function Iw(e){var n=e.children,t=e.prefixCls,r=e.id,o=e.overlayInnerStyle,i=e.className,a=e.style;return p.createElement("div",{className:Ge("".concat(t,"-content"),i),style:a},p.createElement("div",{className:"".concat(t,"-inner"),id:r,role:"tooltip",style:o},typeof n=="function"?n():n))}var Ni={shiftX:64,adjustY:1},Ri={adjustX:1,shiftY:!0},tr=[0,0],W9={left:{points:["cr","cl"],overflow:Ri,offset:[-4,0],targetOffset:tr},right:{points:["cl","cr"],overflow:Ri,offset:[4,0],targetOffset:tr},top:{points:["bc","tc"],overflow:Ni,offset:[0,-4],targetOffset:tr},bottom:{points:["tc","bc"],overflow:Ni,offset:[0,4],targetOffset:tr},topLeft:{points:["bl","tl"],overflow:Ni,offset:[0,-4],targetOffset:tr},leftTop:{points:["tr","tl"],overflow:Ri,offset:[-4,0],targetOffset:tr},topRight:{points:["br","tr"],overflow:Ni,offset:[0,-4],targetOffset:tr},rightTop:{points:["tl","tr"],overflow:Ri,offset:[4,0],targetOffset:tr},bottomRight:{points:["tr","br"],overflow:Ni,offset:[0,4],targetOffset:tr},rightBottom:{points:["bl","br"],overflow:Ri,offset:[4,0],targetOffset:tr},bottomLeft:{points:["tl","bl"],overflow:Ni,offset:[0,4],targetOffset:tr},leftBottom:{points:["br","bl"],overflow:Ri,offset:[-4,0],targetOffset:tr}},X9=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],G9=function(n,t){var r=n.overlayClassName,o=n.trigger,i=o===void 0?["hover"]:o,a=n.mouseEnterDelay,l=a===void 0?0:a,s=n.mouseLeaveDelay,c=s===void 0?.1:s,u=n.overlayStyle,d=n.prefixCls,f=d===void 0?"rc-tooltip":d,m=n.children,h=n.onVisibleChange,b=n.afterVisibleChange,k=n.transitionName,g=n.animation,v=n.motion,y=n.placement,E=y===void 0?"right":y,_=n.align,w=_===void 0?{}:_,A=n.destroyTooltipOnHide,N=A===void 0?!1:A,R=n.defaultVisible,V=n.getTooltipContainer,$=n.overlayInnerStyle;n.arrowContent;var z=n.overlay,j=n.id,H=n.showArrow,Z=H===void 0?!0:H,B=$n(n,X9),F=p.useRef(null);p.useImperativeHandle(t,function(){return F.current});var O=de({},B);"visible"in n&&(O.popupVisible=n.visible);var W=function(){return p.createElement(Iw,{key:"content",prefixCls:f,id:j,overlayInnerStyle:$},z)};return p.createElement(xw,pn({popupClassName:r,prefixCls:f,popup:W,action:i,builtinPlacements:W9,popupPlacement:E,ref:F,popupAlign:w,getPopupContainer:V,onPopupVisibleChange:h,afterPopupVisibleChange:b,popupTransitionName:k,popupAnimation:g,popupMotion:v,defaultPopupVisible:R,autoDestroy:N,mouseLeaveDelay:c,popupStyle:u,mouseEnterDelay:l,arrow:Z},O),m)};const Z9=p.forwardRef(G9);function K9(e){const{sizePopupArrow:n,borderRadiusXS:t,borderRadiusOuter:r}=e,o=n/2,i=0,a=o,l=r*1/Math.sqrt(2),s=o-r*(1-1/Math.sqrt(2)),c=o-t*(1/Math.sqrt(2)),u=r*(Math.sqrt(2)-1)+t*(1/Math.sqrt(2)),d=2*o-c,f=u,m=2*o-l,h=s,b=2*o-i,k=a,g=o*Math.sqrt(2)+r*(Math.sqrt(2)-2),v=r*(Math.sqrt(2)-1),y=`polygon(${v}px 100%, 50% ${v}px, ${2*o-v}px 100%, ${v}px 100%)`,E=`path('M ${i} ${a} A ${r} ${r} 0 0 0 ${l} ${s} L ${c} ${u} A ${t} ${t} 0 0 1 ${d} ${f} L ${m} ${h} A ${r} ${r} 0 0 0 ${b} ${k} Z')`;return{arrowShadowWidth:g,arrowPath:E,arrowPolygon:y}}const q9=(e,n,t)=>{const{sizePopupArrow:r,arrowPolygon:o,arrowPath:i,arrowShadowWidth:a,borderRadiusXS:l,calc:s}=e;return{pointerEvents:"none",width:r,height:r,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:r,height:s(r).div(2).equal(),background:n,clipPath:{_multi_value_:!0,value:[o,i]},content:'""'},"&::after":{content:'""',position:"absolute",width:a,height:a,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${Ve(l)} 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:t,zIndex:0,background:"transparent"}}},_w=8;function Aw(e){const{contentRadius:n,limitVerticalRadius:t}=e,r=n>12?n+2:12;return{arrowOffsetHorizontal:r,arrowOffsetVertical:t?_w:r}}function Zs(e,n){return e?n:{}}function Q9(e,n,t){const{componentCls:r,boxShadowPopoverArrow:o,arrowOffsetVertical:i,arrowOffsetHorizontal:a}=e,{arrowDistance:l=0,arrowPlacement:s={left:!0,right:!0,top:!0,bottom:!0}}={};return{[r]:Object.assign(Object.assign(Object.assign(Object.assign({[`${r}-arrow`]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},q9(e,n,o)),{"&:before":{background:n}})]},Zs(!!s.top,{[[`&-placement-top > ${r}-arrow`,`&-placement-topLeft > ${r}-arrow`,`&-placement-topRight > ${r}-arrow`].join(",")]:{bottom:l,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top > ${r}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},[`&-placement-topLeft > ${r}-arrow`]:{left:{_skip_check_:!0,value:a}},[`&-placement-topRight > ${r}-arrow`]:{right:{_skip_check_:!0,value:a}}})),Zs(!!s.bottom,{[[`&-placement-bottom > ${r}-arrow`,`&-placement-bottomLeft > ${r}-arrow`,`&-placement-bottomRight > ${r}-arrow`].join(",")]:{top:l,transform:"translateY(-100%)"},[`&-placement-bottom > ${r}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},[`&-placement-bottomLeft > ${r}-arrow`]:{left:{_skip_check_:!0,value:a}},[`&-placement-bottomRight > ${r}-arrow`]:{right:{_skip_check_:!0,value:a}}})),Zs(!!s.left,{[[`&-placement-left > ${r}-arrow`,`&-placement-leftTop > ${r}-arrow`,`&-placement-leftBottom > ${r}-arrow`].join(",")]:{right:{_skip_check_:!0,value:l},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left > ${r}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop > ${r}-arrow`]:{top:i},[`&-placement-leftBottom > ${r}-arrow`]:{bottom:i}})),Zs(!!s.right,{[[`&-placement-right > ${r}-arrow`,`&-placement-rightTop > ${r}-arrow`,`&-placement-rightBottom > ${r}-arrow`].join(",")]:{left:{_skip_check_:!0,value:l},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right > ${r}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop > ${r}-arrow`]:{top:i},[`&-placement-rightBottom > ${r}-arrow`]:{bottom:i}}))}}function Y9(e,n,t,r){if(r===!1)return{adjustX:!1,adjustY:!1};const o=r&&typeof r=="object"?r:{},i={};switch(e){case"top":case"bottom":i.shiftX=n.arrowOffsetHorizontal*2+t,i.shiftY=!0,i.adjustY=!0;break;case"left":case"right":i.shiftY=n.arrowOffsetVertical*2+t,i.shiftX=!0,i.adjustX=!0;break}const a=Object.assign(Object.assign({},i),o);return a.shiftX||(a.adjustX=!0),a.shiftY||(a.adjustY=!0),a}const Bg={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},J9={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},eI=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function nI(e){const{arrowWidth:n,autoAdjustOverflow:t,arrowPointAtCenter:r,offset:o,borderRadius:i,visibleFirst:a}=e,l=n/2,s={};return Object.keys(Bg).forEach(c=>{const u=r&&J9[c]||Bg[c],d=Object.assign(Object.assign({},u),{offset:[0,0],dynamicInset:!0});switch(s[c]=d,eI.has(c)&&(d.autoArrow=!1),c){case"top":case"topLeft":case"topRight":d.offset[1]=-l-o;break;case"bottom":case"bottomLeft":case"bottomRight":d.offset[1]=l+o;break;case"left":case"leftTop":case"leftBottom":d.offset[0]=-l-o;break;case"right":case"rightTop":case"rightBottom":d.offset[0]=l+o;break}const f=Aw({contentRadius:i,limitVerticalRadius:!0});if(r)switch(c){case"topLeft":case"bottomLeft":d.offset[0]=-f.arrowOffsetHorizontal-l;break;case"topRight":case"bottomRight":d.offset[0]=f.arrowOffsetHorizontal+l;break;case"leftTop":case"rightTop":d.offset[1]=-f.arrowOffsetHorizontal-l;break;case"leftBottom":case"rightBottom":d.offset[1]=f.arrowOffsetHorizontal+l;break}d.overflow=Y9(c,f,n,t),a&&(d.htmlRegion="visibleFirst")}),s}const tI=e=>{const{componentCls:n,tooltipMaxWidth:t,tooltipColor:r,tooltipBg:o,tooltipBorderRadius:i,zIndexPopup:a,controlHeight:l,boxShadowSecondary:s,paddingSM:c,paddingXS:u}=e;return[{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},xp(e)),{position:"absolute",zIndex:a,display:"block",width:"max-content",maxWidth:t,visibility:"visible",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","&-hidden":{display:"none"},"--antd-arrow-background-color":o,[`${n}-inner`]:{minWidth:"1em",minHeight:l,padding:`${Ve(e.calc(c).div(2).equal())} ${Ve(u)}`,color:r,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:o,borderRadius:i,boxShadow:s,boxSizing:"border-box"},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${n}-inner`]:{borderRadius:e.min(i,_w)}},[`${n}-content`]:{position:"relative"}}),Ux(e,(d,f)=>{let{darkColor:m}=f;return{[`&${n}-${d}`]:{[`${n}-inner`]:{backgroundColor:m},[`${n}-arrow`]:{"--antd-arrow-background-color":m}}}})),{"&-rtl":{direction:"rtl"}})},Q9(e,"var(--antd-arrow-background-color)"),{[`${n}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow}}]},rI=e=>Object.assign(Object.assign({zIndexPopup:e.zIndexPopupBase+70},Aw({contentRadius:e.borderRadius,limitVerticalRadius:!0})),K9(Tr(e,{borderRadiusOuter:Math.min(e.borderRadiusOuter,4)}))),Tw=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return ds("Tooltip",r=>{const{borderRadius:o,colorTextLightSolid:i,colorBgSpotlight:a}=r,l=Tr(r,{tooltipMaxWidth:250,tooltipColor:i,tooltipBorderRadius:o,tooltipBg:a});return[tI(l),Cw(r,"zoom-big-fast")]},rI,{resetStyle:!1,injectStyle:n})(e)},oI=ou.map(e=>`${e}-inverse`);function iI(e){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[].concat(Wn(oI),Wn(ou)).includes(e):ou.includes(e)}function Ow(e,n){const t=iI(n),r=Ge({[`${e}-${n}`]:n&&t}),o={},i={};return n&&!t&&(o.background=n,i["--antd-arrow-background-color"]=n),{className:r,overlayStyle:o,arrowStyle:i}}const aI=e=>{const{prefixCls:n,className:t,placement:r="top",title:o,color:i,overlayInnerStyle:a}=e,{getPrefixCls:l}=p.useContext(it),s=l("tooltip",n),[c,u,d]=Tw(s),f=Ow(s,i),m=f.arrowStyle,h=Object.assign(Object.assign({},a),f.overlayStyle),b=Ge(u,d,s,`${s}-pure`,`${s}-placement-${r}`,t,f.className);return c(p.createElement("div",{className:b,style:m},p.createElement("div",{className:`${s}-arrow`}),p.createElement(Iw,Object.assign({},e,{className:u,prefixCls:s,overlayInnerStyle:h}),o)))};var lI=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const sI=p.forwardRef((e,n)=>{var t,r;const{prefixCls:o,openClassName:i,getTooltipContainer:a,overlayClassName:l,color:s,overlayInnerStyle:c,children:u,afterOpenChange:d,afterVisibleChange:f,destroyTooltipOnHide:m,arrow:h=!0,title:b,overlay:k,builtinPlacements:g,arrowPointAtCenter:v=!1,autoAdjustOverflow:y=!0}=e,E=!!h,[,_]=Dr(),{getPopupContainer:w,getPrefixCls:A,direction:N}=p.useContext(it),R=C4(),V=p.useRef(null),$=()=>{var Me;(Me=V.current)===null||Me===void 0||Me.forceAlign()};p.useImperativeHandle(n,()=>{var Me;return{forceAlign:$,forcePopupAlign:()=>{R.deprecated(!1,"forcePopupAlign","forceAlign"),$()},nativeElement:(Me=V.current)===null||Me===void 0?void 0:Me.nativeElement}});const[z,j]=bl(!1,{value:(t=e.open)!==null&&t!==void 0?t:e.visible,defaultValue:(r=e.defaultOpen)!==null&&r!==void 0?r:e.defaultVisible}),H=!b&&!k&&b!==0,Z=Me=>{var te,Ne;j(H?!1:Me),H||((te=e.onOpenChange)===null||te===void 0||te.call(e,Me),(Ne=e.onVisibleChange)===null||Ne===void 0||Ne.call(e,Me))},B=p.useMemo(()=>{var Me,te;let Ne=v;return typeof h=="object"&&(Ne=(te=(Me=h.pointAtCenter)!==null&&Me!==void 0?Me:h.arrowPointAtCenter)!==null&&te!==void 0?te:v),g||nI({arrowPointAtCenter:Ne,autoAdjustOverflow:y,arrowWidth:E?_.sizePopupArrow:0,borderRadius:_.borderRadius,offset:_.marginXXS,visibleFirst:!0})},[v,h,g,_]),F=p.useMemo(()=>b===0?b:k||b||"",[k,b]),O=p.createElement(c7,null,typeof F=="function"?F():F),{getPopupContainer:W,placement:S="top",mouseEnterDelay:G=.1,mouseLeaveDelay:U=.1,overlayStyle:I,rootClassName:Q}=e,oe=lI(e,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName"]),L=A("tooltip",o),he=A(),Y=e["data-popover-inject"];let Oe=z;!("open"in e)&&!("visible"in e)&&H&&(Oe=!1);const be=p.isValidElement(u)&&!rw(u)?u:p.createElement("span",null,u),Ce=be.props,me=!Ce.className||typeof Ce.className=="string"?Ge(Ce.className,i||`${L}-open`):Ce.className,[en,Ze,Ee]=Tw(L,!Y),Se=Ow(L,s),xe=Se.arrowStyle,Pe=Object.assign(Object.assign({},c),Se.overlayStyle),$e=Ge(l,{[`${L}-rtl`]:N==="rtl"},Se.className,Q,Ze,Ee),[Fe,Ue]=sw("Tooltip",oe.zIndex),rn=p.createElement(Z9,Object.assign({},oe,{zIndex:Fe,showArrow:E,placement:S,mouseEnterDelay:G,mouseLeaveDelay:U,prefixCls:L,overlayClassName:$e,overlayStyle:Object.assign(Object.assign({},xe),I),getTooltipContainer:W||a||w,ref:V,builtinPlacements:B,overlay:O,visible:Oe,onVisibleChange:Z,afterVisibleChange:d??f,overlayInnerStyle:Pe,arrowContent:p.createElement("span",{className:`${L}-arrow-content`}),motion:{motionName:Y8(he,"zoom-big-fast",e.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!m}),Oe?Aa(be,{className:me}):be);return en(p.createElement(aw.Provider,{value:Ue},rn))}),Pw=sI;Pw._InternalPanelDoNotUseOrYouWillBeFired=aI;var cI={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},uI=function(n,t){return p.createElement(Bo,pn({},n,{ref:t,icon:cI}))},zg=p.forwardRef(uI),Nw=p.createContext(null);function Rw(e,n){return e===void 0?null:"".concat(e,"-").concat(n)}function Fw(e){var n=p.useContext(Nw);return Rw(n,e)}var dI=["children","locked"],Or=p.createContext(null);function fI(e,n){var t=de({},e);return Object.keys(n).forEach(function(r){var o=n[r];o!==void 0&&(t[r]=o)}),t}function Ql(e){var n=e.children,t=e.locked,r=$n(e,dI),o=p.useContext(Or),i=Zu(function(){return fI(o,r)},[o,r],function(a,l){return!t&&(a[0]!==l[0]||!yp(a[1],l[1],!0))});return p.createElement(Or.Provider,{value:i},n)}var mI=[],Mw=p.createContext(null);function od(){return p.useContext(Mw)}var Lw=p.createContext(mI);function Ta(e){var n=p.useContext(Lw);return p.useMemo(function(){return e!==void 0?[].concat(Wn(n),[e]):n},[n,e])}var jw=p.createContext(null),Pp=p.createContext({});function Hg(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Ap(e)){var t=e.nodeName.toLowerCase(),r=["input","select","textarea","button"].includes(t)||e.isContentEditable||t==="a"&&!!e.getAttribute("href"),o=e.getAttribute("tabindex"),i=Number(o),a=null;return o&&!Number.isNaN(i)?a=i:r&&a===null&&(a=0),r&&e.disabled&&(a=null),a!==null&&(a>=0||n&&a<0)}return!1}function hI(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=Wn(e.querySelectorAll("*")).filter(function(r){return Hg(r,n)});return Hg(e,n)&&t.unshift(e),t}var Qm=ze.LEFT,Ym=ze.RIGHT,Jm=ze.UP,wc=ze.DOWN,Cc=ze.ENTER,Dw=ze.ESC,qa=ze.HOME,Qa=ze.END,Ug=[Jm,wc,Qm,Ym];function pI(e,n,t,r){var o,i,a,l,s="prev",c="next",u="children",d="parent";if(e==="inline"&&r===Cc)return{inlineTrigger:!0};var f=(o={},Le(o,Jm,s),Le(o,wc,c),o),m=(i={},Le(i,Qm,t?c:s),Le(i,Ym,t?s:c),Le(i,wc,u),Le(i,Cc,u),i),h=(a={},Le(a,Jm,s),Le(a,wc,c),Le(a,Cc,u),Le(a,Dw,d),Le(a,Qm,t?u:d),Le(a,Ym,t?d:u),a),b={inline:f,horizontal:m,vertical:h,inlineSub:f,horizontalSub:h,verticalSub:h},k=(l=b["".concat(e).concat(n?"":"Sub")])===null||l===void 0?void 0:l[r];switch(k){case s:return{offset:-1,sibling:!0};case c:return{offset:1,sibling:!0};case d:return{offset:-1,sibling:!1};case u:return{offset:1,sibling:!1};default:return null}}function gI(e){for(var n=e;n;){if(n.getAttribute("data-menu-list"))return n;n=n.parentElement}return null}function vI(e,n){for(var t=e||document.activeElement;t;){if(n.has(t))return t;t=t.parentElement}return null}function Np(e,n){var t=hI(e,!0);return t.filter(function(r){return n.has(r)})}function Vg(e,n,t){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!e)return null;var o=Np(e,n),i=o.length,a=o.findIndex(function(l){return t===l});return r<0?a===-1?a=i-1:a-=1:r>0&&(a+=1),a=(a+i)%i,o[a]}var eh=function(n,t){var r=new Set,o=new Map,i=new Map;return n.forEach(function(a){var l=document.querySelector("[data-menu-id='".concat(Rw(t,a),"']"));l&&(r.add(l),i.set(l,a),o.set(a,l))}),{elements:r,key2element:o,element2key:i}};function bI(e,n,t,r,o,i,a,l,s,c){var u=p.useRef(),d=p.useRef();d.current=n;var f=function(){Kt.cancel(u.current)};return p.useEffect(function(){return function(){f()}},[]),function(m){var h=m.which;if([].concat(Ug,[Cc,Dw,qa,Qa]).includes(h)){var b=i(),k=eh(b,r),g=k,v=g.elements,y=g.key2element,E=g.element2key,_=y.get(n),w=vI(_,v),A=E.get(w),N=pI(e,a(A,!0).length===1,t,h);if(!N&&h!==qa&&h!==Qa)return;(Ug.includes(h)||[qa,Qa].includes(h))&&m.preventDefault();var R=function(F){if(F){var O=F,W=F.querySelector("a");W!=null&&W.getAttribute("href")&&(O=W);var S=E.get(F);l(S),f(),u.current=Kt(function(){d.current===S&&O.focus()})}};if([qa,Qa].includes(h)||N.sibling||!w){var V;!w||e==="inline"?V=o.current:V=gI(w);var $,z=Np(V,v);h===qa?$=z[0]:h===Qa?$=z[z.length-1]:$=Vg(V,v,w,N.offset),R($)}else if(N.inlineTrigger)s(A);else if(N.offset>0)s(A,!0),f(),u.current=Kt(function(){k=eh(b,r);var B=w.getAttribute("aria-controls"),F=document.getElementById(B),O=Vg(F,k.elements);R(O)},5);else if(N.offset<0){var j=a(A,!0),H=j[j.length-2],Z=y.get(H);s(H,!1),R(Z)}}c==null||c(m)}}function yI(e){Promise.resolve().then(e)}var Rp="__RC_UTIL_PATH_SPLIT__",Wg=function(n){return n.join(Rp)},wI=function(n){return n.split(Rp)},nh="rc-menu-more";function CI(){var e=p.useState({}),n=pe(e,2),t=n[1],r=p.useRef(new Map),o=p.useRef(new Map),i=p.useState([]),a=pe(i,2),l=a[0],s=a[1],c=p.useRef(0),u=p.useRef(!1),d=function(){u.current||t({})},f=p.useCallback(function(y,E){var _=Wg(E);o.current.set(_,y),r.current.set(y,_),c.current+=1;var w=c.current;yI(function(){w===c.current&&d()})},[]),m=p.useCallback(function(y,E){var _=Wg(E);o.current.delete(_),r.current.delete(y)},[]),h=p.useCallback(function(y){s(y)},[]),b=p.useCallback(function(y,E){var _=r.current.get(y)||"",w=wI(_);return E&&l.includes(w[0])&&w.unshift(nh),w},[l]),k=p.useCallback(function(y,E){return y.filter(function(_){return _!==void 0}).some(function(_){var w=b(_,!0);return w.includes(E)})},[b]),g=function(){var E=Wn(r.current.keys());return l.length&&E.push(nh),E},v=p.useCallback(function(y){var E="".concat(r.current.get(y)).concat(Rp),_=new Set;return Wn(o.current.keys()).forEach(function(w){w.startsWith(E)&&_.add(o.current.get(w))}),_},[]);return p.useEffect(function(){return function(){u.current=!0}},[]),{registerPath:f,unregisterPath:m,refreshOverflowKeys:h,isSubPathKey:k,getKeyPath:b,getKeys:g,getSubPathKeys:v}}function il(e){var n=p.useRef(e);n.current=e;var t=p.useCallback(function(){for(var r,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(r=n.current)===null||r===void 0?void 0:r.call.apply(r,[n].concat(i))},[]);return e?t:void 0}var SI=Math.random().toFixed(5).toString().slice(2),Xg=0;function kI(e){var n=bl(e,{value:e}),t=pe(n,2),r=t[0],o=t[1];return p.useEffect(function(){Xg+=1;var i="".concat(SI,"-").concat(Xg);o("rc-menu-uuid-".concat(i))},[]),r}function $w(e,n,t,r){var o=p.useContext(Or),i=o.activeKey,a=o.onActive,l=o.onInactive,s={active:i===e};return n||(s.onMouseEnter=function(c){t==null||t({key:e,domEvent:c}),a(e)},s.onMouseLeave=function(c){r==null||r({key:e,domEvent:c}),l(e)}),s}function Bw(e){var n=p.useContext(Or),t=n.mode,r=n.rtl,o=n.inlineIndent;if(t!=="inline")return null;var i=e;return r?{paddingRight:i*o}:{paddingLeft:i*o}}function zw(e){var n=e.icon,t=e.props,r=e.children,o;return n===null||n===!1?null:(typeof n=="function"?o=p.createElement(n,de({},t)):typeof n!="boolean"&&(o=n),o||r||null)}var EI=["item"];function cu(e){var n=e.item,t=$n(e,EI);return Object.defineProperty(t,"item",{get:function(){return Ci(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),t}var xI=["title","attribute","elementRef"],II=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],_I=["active"],AI=function(e){Sa(t,e);var n=ka(t);function t(){return fr(this,t),n.apply(this,arguments)}return mr(t,[{key:"render",value:function(){var o=this.props,i=o.title,a=o.attribute,l=o.elementRef,s=$n(o,xI),c=$o(s,["eventKey","popupClassName","popupOffset","onTitleClick"]);return Ci(!a,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),p.createElement(Yr.Item,pn({},a,{title:typeof i=="string"?i:void 0},c,{ref:l}))}}]),t}(p.Component),TI=p.forwardRef(function(e,n){var t,r=e.style,o=e.className,i=e.eventKey;e.warnKey;var a=e.disabled,l=e.itemIcon,s=e.children,c=e.role,u=e.onMouseEnter,d=e.onMouseLeave,f=e.onClick,m=e.onKeyDown,h=e.onFocus,b=$n(e,II),k=Fw(i),g=p.useContext(Or),v=g.prefixCls,y=g.onItemClick,E=g.disabled,_=g.overflowDisabled,w=g.itemIcon,A=g.selectedKeys,N=g.onActive,R=p.useContext(Pp),V=R._internalRenderMenuItem,$="".concat(v,"-item"),z=p.useRef(),j=p.useRef(),H=E||a,Z=Ku(n,j),B=Ta(i),F=function(be){return{key:i,keyPath:Wn(B).reverse(),item:z.current,domEvent:be}},O=l||w,W=$w(i,H,u,d),S=W.active,G=$n(W,_I),U=A.includes(i),I=Bw(B.length),Q=function(be){if(!H){var Ce=F(be);f==null||f(cu(Ce)),y(Ce)}},oe=function(be){if(m==null||m(be),be.which===ze.ENTER){var Ce=F(be);f==null||f(cu(Ce)),y(Ce)}},L=function(be){N(i),h==null||h(be)},he={};e.role==="option"&&(he["aria-selected"]=U);var Y=p.createElement(AI,pn({ref:z,elementRef:Z,role:c===null?"none":c||"menuitem",tabIndex:a?null:-1,"data-menu-id":_&&k?null:k},b,G,he,{component:"li","aria-disabled":a,style:de(de({},I),r),className:Ge($,(t={},Le(t,"".concat($,"-active"),S),Le(t,"".concat($,"-selected"),U),Le(t,"".concat($,"-disabled"),H),t),o),onClick:Q,onKeyDown:oe,onFocus:L}),s,p.createElement(zw,{props:de(de({},e),{},{isSelected:U}),icon:O}));return V&&(Y=V(Y,e,{selected:U})),Y});function OI(e,n){var t=e.eventKey,r=od(),o=Ta(t);return p.useEffect(function(){if(r)return r.registerPath(t,o),function(){r.unregisterPath(t,o)}},[o]),r?null:p.createElement(TI,pn({},e,{ref:n}))}const id=p.forwardRef(OI);var PI=["className","children"],NI=function(n,t){var r=n.className,o=n.children,i=$n(n,PI),a=p.useContext(Or),l=a.prefixCls,s=a.mode,c=a.rtl;return p.createElement("ul",pn({className:Ge(l,c&&"".concat(l,"-rtl"),"".concat(l,"-sub"),"".concat(l,"-").concat(s==="inline"?"inline":"vertical"),r),role:"menu"},i,{"data-menu-list":!0,ref:t}),o)},Fp=p.forwardRef(NI);Fp.displayName="SubMenuList";function Mp(e,n){return gi(e).map(function(t,r){if(p.isValidElement(t)){var o,i,a=t.key,l=(o=(i=t.props)===null||i===void 0?void 0:i.eventKey)!==null&&o!==void 0?o:a,s=l==null;s&&(l="tmp_key-".concat([].concat(Wn(n),[r]).join("-")));var c={key:l,eventKey:l};return p.cloneElement(t,c)}return t})}var gt={adjustX:1,adjustY:1},RI={topLeft:{points:["bl","tl"],overflow:gt},topRight:{points:["br","tr"],overflow:gt},bottomLeft:{points:["tl","bl"],overflow:gt},bottomRight:{points:["tr","br"],overflow:gt},leftTop:{points:["tr","tl"],overflow:gt},leftBottom:{points:["br","bl"],overflow:gt},rightTop:{points:["tl","tr"],overflow:gt},rightBottom:{points:["bl","br"],overflow:gt}},FI={topLeft:{points:["bl","tl"],overflow:gt},topRight:{points:["br","tr"],overflow:gt},bottomLeft:{points:["tl","bl"],overflow:gt},bottomRight:{points:["tr","br"],overflow:gt},rightTop:{points:["tr","tl"],overflow:gt},rightBottom:{points:["br","bl"],overflow:gt},leftTop:{points:["tl","tr"],overflow:gt},leftBottom:{points:["bl","br"],overflow:gt}};function Hw(e,n,t){if(n)return n;if(t)return t[e]||t.other}var MI={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function LI(e){var n=e.prefixCls,t=e.visible,r=e.children,o=e.popup,i=e.popupStyle,a=e.popupClassName,l=e.popupOffset,s=e.disabled,c=e.mode,u=e.onVisibleChange,d=p.useContext(Or),f=d.getPopupContainer,m=d.rtl,h=d.subMenuOpenDelay,b=d.subMenuCloseDelay,k=d.builtinPlacements,g=d.triggerSubMenuAction,v=d.forceSubMenuRender,y=d.rootClassName,E=d.motion,_=d.defaultMotions,w=p.useState(!1),A=pe(w,2),N=A[0],R=A[1],V=de(m?de({},FI):de({},RI),k),$=MI[c],z=Hw(c,E,_),j=p.useRef(z);c!=="inline"&&(j.current=z);var H=de(de({},j.current),{},{leavedClassName:"".concat(n,"-hidden"),removeOnLeave:!1,motionAppear:!0}),Z=p.useRef();return p.useEffect(function(){return Z.current=Kt(function(){R(t)}),function(){Kt.cancel(Z.current)}},[t]),p.createElement(xw,{prefixCls:n,popupClassName:Ge("".concat(n,"-popup"),Le({},"".concat(n,"-rtl"),m),a,y),stretch:c==="horizontal"?"minWidth":null,getPopupContainer:f,builtinPlacements:V,popupPlacement:$,popupVisible:N,popup:o,popupStyle:i,popupAlign:l&&{offset:l},action:s?[]:[g],mouseEnterDelay:h,mouseLeaveDelay:b,onPopupVisibleChange:u,forceRender:v,popupMotion:H,fresh:!0},r)}function jI(e){var n=e.id,t=e.open,r=e.keyPath,o=e.children,i="inline",a=p.useContext(Or),l=a.prefixCls,s=a.forceSubMenuRender,c=a.motion,u=a.defaultMotions,d=a.mode,f=p.useRef(!1);f.current=d===i;var m=p.useState(!f.current),h=pe(m,2),b=h[0],k=h[1],g=f.current?t:!1;p.useEffect(function(){f.current&&k(!1)},[d]);var v=de({},Hw(i,c,u));r.length>1&&(v.motionAppear=!1);var y=v.onVisibleChanged;return v.onVisibleChanged=function(E){return!f.current&&!E&&k(!0),y==null?void 0:y(E)},b?null:p.createElement(Ql,{mode:i,locked:!f.current},p.createElement(xa,pn({visible:g},v,{forceRender:s,removeOnLeave:!1,leavedClassName:"".concat(l,"-hidden")}),function(E){var _=E.className,w=E.style;return p.createElement(Fp,{id:n,className:_,style:w},o)}))}var DI=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],$I=["active"],BI=p.forwardRef(function(e,n){var t,r=e.style,o=e.className,i=e.title,a=e.eventKey;e.warnKey;var l=e.disabled,s=e.internalPopupClose,c=e.children,u=e.itemIcon,d=e.expandIcon,f=e.popupClassName,m=e.popupOffset,h=e.popupStyle,b=e.onClick,k=e.onMouseEnter,g=e.onMouseLeave,v=e.onTitleClick,y=e.onTitleMouseEnter,E=e.onTitleMouseLeave,_=$n(e,DI),w=Fw(a),A=p.useContext(Or),N=A.prefixCls,R=A.mode,V=A.openKeys,$=A.disabled,z=A.overflowDisabled,j=A.activeKey,H=A.selectedKeys,Z=A.itemIcon,B=A.expandIcon,F=A.onItemClick,O=A.onOpenChange,W=A.onActive,S=p.useContext(Pp),G=S._internalRenderSubMenuItem,U=p.useContext(jw),I=U.isSubPathKey,Q=Ta(),oe="".concat(N,"-submenu"),L=$||l,he=p.useRef(),Y=p.useRef(),Oe=u??Z,be=d??B,Ce=V.includes(a),me=!z&&Ce,en=I(H,a),Ze=$w(a,L,y,E),Ee=Ze.active,Se=$n(Ze,$I),xe=p.useState(!1),Pe=pe(xe,2),$e=Pe[0],Fe=Pe[1],Ue=function(ge){L||Fe(ge)},rn=function(ge){Ue(!0),k==null||k({key:a,domEvent:ge})},Me=function(ge){Ue(!1),g==null||g({key:a,domEvent:ge})},te=p.useMemo(function(){return Ee||(R!=="inline"?$e||I([j],a):!1)},[R,Ee,j,$e,a,I]),Ne=Bw(Q.length),C=function(ge){L||(v==null||v({key:a,domEvent:ge}),R==="inline"&&O(a,!Ce))},x=il(function(ae){b==null||b(cu(ae)),F(ae)}),T=function(ge){R!=="inline"&&O(a,ge)},M=function(){W(a)},K=w&&"".concat(w,"-popup"),q=p.createElement("div",pn({role:"menuitem",style:Ne,className:"".concat(oe,"-title"),tabIndex:L?null:-1,ref:he,title:typeof i=="string"?i:null,"data-menu-id":z&&w?null:w,"aria-expanded":me,"aria-haspopup":!0,"aria-controls":K,"aria-disabled":L,onClick:C,onFocus:M},Se),i,p.createElement(zw,{icon:R!=="horizontal"?be:void 0,props:de(de({},e),{},{isOpen:me,isSubMenu:!0})},p.createElement("i",{className:"".concat(oe,"-arrow")}))),ee=p.useRef(R);if(R!=="inline"&&Q.length>1?ee.current="vertical":ee.current=R,!z){var ne=ee.current;q=p.createElement(LI,{mode:ne,prefixCls:oe,visible:!s&&me&&R!=="inline",popupClassName:f,popupOffset:m,popupStyle:h,popup:p.createElement(Ql,{mode:ne==="horizontal"?"vertical":ne},p.createElement(Fp,{id:K,ref:Y},c)),disabled:L,onVisibleChange:T},q)}var ue=p.createElement(Yr.Item,pn({ref:n,role:"none"},_,{component:"li",style:r,className:Ge(oe,"".concat(oe,"-").concat(R),o,(t={},Le(t,"".concat(oe,"-open"),me),Le(t,"".concat(oe,"-active"),te),Le(t,"".concat(oe,"-selected"),en),Le(t,"".concat(oe,"-disabled"),L),t)),onMouseEnter:rn,onMouseLeave:Me}),q,!z&&p.createElement(jI,{id:K,open:me,keyPath:Q},c));return G&&(ue=G(ue,e,{selected:en,active:te,open:me,disabled:L})),p.createElement(Ql,{onItemClick:x,mode:R==="horizontal"?"vertical":R,itemIcon:Oe,expandIcon:be},ue)}),ad=p.forwardRef(function(e,n){var t=e.eventKey,r=e.children,o=Ta(t),i=Mp(r,o),a=od();p.useEffect(function(){if(a)return a.registerPath(t,o),function(){a.unregisterPath(t,o)}},[o]);var l;return a?l=i:l=p.createElement(BI,pn({ref:n},e),i),p.createElement(Lw.Provider,{value:o},l)});function Lp(e){var n=e.className,t=e.style,r=p.useContext(Or),o=r.prefixCls,i=od();return i?null:p.createElement("li",{role:"separator",className:Ge("".concat(o,"-item-divider"),n),style:t})}var zI=["className","title","eventKey","children"],HI=p.forwardRef(function(e,n){var t=e.className,r=e.title;e.eventKey;var o=e.children,i=$n(e,zI),a=p.useContext(Or),l=a.prefixCls,s="".concat(l,"-item-group");return p.createElement("li",pn({ref:n,role:"presentation"},i,{onClick:function(u){return u.stopPropagation()},className:Ge(s,t)}),p.createElement("div",{role:"presentation",className:"".concat(s,"-title"),title:typeof r=="string"?r:void 0},r),p.createElement("ul",{role:"group",className:"".concat(s,"-list")},o))}),jp=p.forwardRef(function(e,n){var t=e.eventKey,r=e.children,o=Ta(t),i=Mp(r,o),a=od();return a?i:p.createElement(HI,pn({ref:n},$o(e,["warnKey"])),i)}),UI=["label","children","key","type"];function th(e,n){var t=n.item,r=n.group,o=n.submenu,i=n.divider;return(e||[]).map(function(a,l){if(a&&xn(a)==="object"){var s=a,c=s.label,u=s.children,d=s.key,f=s.type,m=$n(s,UI),h=d??"tmp-".concat(l);return u||f==="group"?f==="group"?p.createElement(r,pn({key:h},m,{title:c}),th(u,n)):p.createElement(o,pn({key:h},m,{title:c}),th(u,n)):f==="divider"?p.createElement(i,pn({key:h},m)):p.createElement(t,pn({key:h},m),c)}return null}).filter(function(a){return a})}function Gg(e,n,t,r){var o=e,i=de({divider:Lp,item:id,group:jp,submenu:ad},r);return n&&(o=th(n,i)),Mp(o,t)}var VI=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem","_internalComponents"],Xo=[],WI=p.forwardRef(function(e,n){var t,r,o=e,i=o.prefixCls,a=i===void 0?"rc-menu":i,l=o.rootClassName,s=o.style,c=o.className,u=o.tabIndex,d=u===void 0?0:u,f=o.items,m=o.children,h=o.direction,b=o.id,k=o.mode,g=k===void 0?"vertical":k,v=o.inlineCollapsed,y=o.disabled,E=o.disabledOverflow,_=o.subMenuOpenDelay,w=_===void 0?.1:_,A=o.subMenuCloseDelay,N=A===void 0?.1:A,R=o.forceSubMenuRender,V=o.defaultOpenKeys,$=o.openKeys,z=o.activeKey,j=o.defaultActiveFirst,H=o.selectable,Z=H===void 0?!0:H,B=o.multiple,F=B===void 0?!1:B,O=o.defaultSelectedKeys,W=o.selectedKeys,S=o.onSelect,G=o.onDeselect,U=o.inlineIndent,I=U===void 0?24:U,Q=o.motion,oe=o.defaultMotions,L=o.triggerSubMenuAction,he=L===void 0?"hover":L,Y=o.builtinPlacements,Oe=o.itemIcon,be=o.expandIcon,Ce=o.overflowedIndicator,me=Ce===void 0?"...":Ce,en=o.overflowedIndicatorPopupClassName,Ze=o.getPopupContainer,Ee=o.onClick,Se=o.onOpenChange,xe=o.onKeyDown;o.openAnimation,o.openTransitionName;var Pe=o._internalRenderMenuItem,$e=o._internalRenderSubMenuItem,Fe=o._internalComponents,Ue=$n(o,VI),rn=p.useMemo(function(){return[Gg(m,f,Xo,Fe),Gg(m,f,Xo,{})]},[m,f,Fe]),Me=pe(rn,2),te=Me[0],Ne=Me[1],C=p.useState(!1),x=pe(C,2),T=x[0],M=x[1],K=p.useRef(),q=kI(b),ee=h==="rtl",ne=bl(V,{value:$,postState:function(vn){return vn||Xo}}),ue=pe(ne,2),ae=ue[0],ge=ue[1],De=function(vn){var En=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function lt(){ge(vn),Se==null||Se(vn)}En?Ca.flushSync(lt):lt()},we=p.useState(ae),Xe=pe(we,2),tn=Xe[0],He=Xe[1],sn=p.useRef(!1),an=p.useMemo(function(){return(g==="inline"||g==="vertical")&&v?["vertical",v]:[g,!1]},[g,v]),Ke=pe(an,2),ke=Ke[0],We=Ke[1],Re=ke==="inline",ye=p.useState(ke),Ae=pe(ye,2),qe=Ae[0],P=Ae[1],D=p.useState(We),X=pe(D,2),J=X[0],fe=X[1];p.useEffect(function(){P(ke),fe(We),sn.current&&(Re?ge(tn):De(Xo))},[ke,We]);var ve=p.useState(0),Ie=pe(ve,2),ie=Ie[0],Be=Ie[1],se=ie>=te.length-1||qe!=="horizontal"||E;p.useEffect(function(){Re&&He(ae)},[ae]),p.useEffect(function(){return sn.current=!0,function(){sn.current=!1}},[]);var je=CI(),cn=je.registerPath,ln=je.unregisterPath,un=je.refreshOverflowKeys,dn=je.isSubPathKey,In=je.getKeyPath,yn=je.getKeys,zn=je.getSubPathKeys,At=p.useMemo(function(){return{registerPath:cn,unregisterPath:ln}},[cn,ln]),jt=p.useMemo(function(){return{isSubPathKey:dn}},[dn]);p.useEffect(function(){un(se?Xo:te.slice(ie+1).map(function(_n){return _n.key}))},[ie,se]);var Dt=bl(z||j&&((t=te[0])===null||t===void 0?void 0:t.key),{value:z}),at=pe(Dt,2),Xn=at[0],er=at[1],Tt=il(function(_n){er(_n)}),pr=il(function(){er(void 0)});p.useImperativeHandle(n,function(){return{list:K.current,focus:function(vn){var En,lt=yn(),st=eh(lt,q),Br=st.elements,Uo=st.key2element,Vo=st.element2key,zr=Np(K.current,Br),Ei=Xn??(zr[0]?Vo.get(zr[0]):(En=te.find(function(Zn){return!Zn.props.disabled}))===null||En===void 0?void 0:En.key),lo=Uo.get(Ei);if(Ei&&lo){var xi;lo==null||(xi=lo.focus)===null||xi===void 0||xi.call(lo,vn)}}}});var nn=bl(O||[],{value:W,postState:function(vn){return Array.isArray(vn)?vn:vn==null?Xo:[vn]}}),hn=pe(nn,2),kn=hn[0],gn=hn[1],mt=function(vn){if(Z){var En=vn.key,lt=kn.includes(En),st;F?lt?st=kn.filter(function(Uo){return Uo!==En}):st=[].concat(Wn(kn),[En]):st=[En],gn(st);var Br=de(de({},vn),{},{selectedKeys:st});lt?G==null||G(Br):S==null||S(Br)}!F&&ae.length&&qe!=="inline"&&De(Xo)},$t=il(function(_n){Ee==null||Ee(cu(_n)),mt(_n)}),nr=il(function(_n,vn){var En=ae.filter(function(st){return st!==_n});if(vn)En.push(_n);else if(qe!=="inline"){var lt=zn(_n);En=En.filter(function(st){return!lt.has(st)})}yp(ae,En,!0)||De(En,!0)}),Ho=function(vn,En){var lt=En??!ae.includes(vn);nr(vn,lt)},ao=bI(qe,Xn,ee,q,K,yn,In,er,Ho,xe);p.useEffect(function(){M(!0)},[]);var gr=p.useMemo(function(){return{_internalRenderMenuItem:Pe,_internalRenderSubMenuItem:$e}},[Pe,$e]),Na=qe!=="horizontal"||E?te:te.map(function(_n,vn){return p.createElement(Ql,{key:_n.key,overflowDisabled:vn>ie},_n)}),Ra=p.createElement(Yr,pn({id:b,ref:K,prefixCls:"".concat(a,"-overflow"),component:"ul",itemComponent:id,className:Ge(a,"".concat(a,"-root"),"".concat(a,"-").concat(qe),c,(r={},Le(r,"".concat(a,"-inline-collapsed"),J),Le(r,"".concat(a,"-rtl"),ee),r),l),dir:h,style:s,role:"menu",tabIndex:d,data:Na,renderRawItem:function(vn){return vn},renderRawRest:function(vn){var En=vn.length,lt=En?te.slice(-En):null;return p.createElement(ad,{eventKey:nh,title:me,disabled:se,internalPopupClose:En===0,popupClassName:en},lt)},maxCount:qe!=="horizontal"||E?Yr.INVALIDATE:Yr.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(vn){Be(vn)},onKeyDown:ao},Ue));return p.createElement(Pp.Provider,{value:gr},p.createElement(Nw.Provider,{value:q},p.createElement(Ql,{prefixCls:a,rootClassName:l,mode:qe,openKeys:ae,rtl:ee,disabled:y,motion:T?Q:null,defaultMotions:T?oe:null,activeKey:Xn,onActive:Tt,onInactive:pr,selectedKeys:kn,inlineIndent:I,subMenuOpenDelay:w,subMenuCloseDelay:N,forceSubMenuRender:R,builtinPlacements:Y,triggerSubMenuAction:he,getPopupContainer:Ze,itemIcon:Oe,expandIcon:be,onItemClick:$t,onOpenChange:nr},p.createElement(jw.Provider,{value:jt},Ra),p.createElement("div",{style:{display:"none"},"aria-hidden":!0},p.createElement(Mw.Provider,{value:At},Ne)))))}),hs=WI;hs.Item=id;hs.SubMenu=ad;hs.ItemGroup=jp;hs.Divider=Lp;var XI={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},GI=function(n,t){return p.createElement(Bo,pn({},n,{ref:t,icon:XI}))},ZI=p.forwardRef(GI),KI={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},qI=function(n,t){return p.createElement(Bo,pn({},n,{ref:t,icon:KI}))},Zg=p.forwardRef(qI);const QI=e=>!isNaN(parseFloat(e))&&isFinite(e),Uw=p.createContext({siderHook:{addSider:()=>null,removeSider:()=>null}});var YI=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const Kg={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},ld=p.createContext({}),JI=(()=>{let e=0;return function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e+=1,`${n}${e}`}})(),e_=p.forwardRef((e,n)=>{const{prefixCls:t,className:r,trigger:o,children:i,defaultCollapsed:a=!1,theme:l="dark",style:s={},collapsible:c=!1,reverseArrow:u=!1,width:d=200,collapsedWidth:f=80,zeroWidthTriggerStyle:m,breakpoint:h,onCollapse:b,onBreakpoint:k}=e,g=YI(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),{siderHook:v}=p.useContext(Uw),[y,E]=p.useState("collapsed"in e?e.collapsed:a),[_,w]=p.useState(!1);p.useEffect(()=>{"collapsed"in e&&E(e.collapsed)},[e.collapsed]);const A=(j,H)=>{"collapsed"in e||E(j),b==null||b(j,H)},N=p.useRef();N.current=j=>{w(j.matches),k==null||k(j.matches),y!==j.matches&&A(j.matches,"responsive")},p.useEffect(()=>{function j(Z){return N.current(Z)}let H;if(typeof window<"u"){const{matchMedia:Z}=window;if(Z&&h&&h in Kg){H=Z(`screen and (max-width: ${Kg[h]})`);try{H.addEventListener("change",j)}catch{H.addListener(j)}j(H)}}return()=>{try{H==null||H.removeEventListener("change",j)}catch{H==null||H.removeListener(j)}}},[h]),p.useEffect(()=>{const j=JI("ant-sider-");return v.addSider(j),()=>v.removeSider(j)},[]);const R=()=>{A(!y,"clickTrigger")},{getPrefixCls:V}=p.useContext(it),$=()=>{const j=V("layout-sider",t),H=$o(g,["collapsed"]),Z=y?f:d,B=QI(Z)?`${Z}px`:String(Z),F=parseFloat(String(f||0))===0?p.createElement("span",{onClick:R,className:Ge(`${j}-zero-width-trigger`,`${j}-zero-width-trigger-${u?"right":"left"}`),style:m},o||p.createElement(ZI,null)):null,S={expanded:u?p.createElement(zg,null):p.createElement(Zg,null),collapsed:u?p.createElement(Zg,null):p.createElement(zg,null)}[y?"collapsed":"expanded"],G=o!==null?F||p.createElement("div",{className:`${j}-trigger`,onClick:R,style:{width:B}},o||S):null,U=Object.assign(Object.assign({},s),{flex:`0 0 ${B}`,maxWidth:B,minWidth:B,width:B}),I=Ge(j,`${j}-${l}`,{[`${j}-collapsed`]:!!y,[`${j}-has-trigger`]:c&&o!==null&&!F,[`${j}-below`]:!!_,[`${j}-zero-width`]:parseFloat(B)===0},r);return p.createElement("aside",Object.assign({className:I},H,{style:U,ref:n}),p.createElement("div",{className:`${j}-children`},i),c||_&&F?G:null)},z=p.useMemo(()=>({siderCollapsed:y}),[y]);return p.createElement(ld.Provider,{value:z},$())}),Vw=e_;var n_={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},t_=function(n,t){return p.createElement(Bo,pn({},n,{ref:t,icon:n_}))},r_=p.forwardRef(t_),o_=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const Ww=e=>{const{prefixCls:n,className:t,dashed:r}=e,o=o_(e,["prefixCls","className","dashed"]),{getPrefixCls:i}=p.useContext(it),a=i("menu",n),l=Ge({[`${a}-item-divider-dashed`]:!!r},t);return p.createElement(Lp,Object.assign({className:l},o))},uu=p.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),Xw=e=>{var n;const{className:t,children:r,icon:o,title:i,danger:a}=e,{prefixCls:l,firstLevel:s,direction:c,disableMenuItemTitleTooltip:u,inlineCollapsed:d}=p.useContext(uu),f=v=>{const y=p.createElement("span",{className:`${l}-title-content`},r);return(!o||p.isValidElement(r)&&r.type==="span")&&r&&v&&s&&typeof r=="string"?p.createElement("div",{className:`${l}-inline-collapsed-noicon`},r.charAt(0)):y},{siderCollapsed:m}=p.useContext(ld);let h=i;typeof i>"u"?h=s?r:"":i===!1&&(h="");const b={title:h};!m&&!d&&(b.title=null,b.open=!1);const k=gi(r).length;let g=p.createElement(id,Object.assign({},$o(e,["title","icon","danger"]),{className:Ge({[`${l}-item-danger`]:a,[`${l}-item-only-child`]:(o?k+1:k)===1},t),title:typeof i=="string"?i:void 0}),Aa(o,{className:Ge(p.isValidElement(o)?(n=o.props)===null||n===void 0?void 0:n.className:"",`${l}-item-icon`)}),f(d));return u||(g=p.createElement(Pw,Object.assign({},b,{placement:c==="rtl"?"left":"right",overlayClassName:`${l}-inline-collapsed-tooltip`}),g)),g},qg=p.createContext(null),i_=e=>{const{componentCls:n,motionDurationSlow:t,horizontalLineHeight:r,colorSplit:o,lineWidth:i,lineType:a,itemPaddingInline:l}=e;return{[`${n}-horizontal`]:{lineHeight:r,border:0,borderBottom:`${Ve(i)} ${a} ${o}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${n}-item, ${n}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:l},[`> ${n}-item:hover,
        > ${n}-item-active,
        > ${n}-submenu ${n}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${n}-item, ${n}-submenu-title`]:{transition:[`border-color ${t}`,`background ${t}`].join(",")},[`${n}-submenu-arrow`]:{display:"none"}}}},a_=e=>{let{componentCls:n,menuArrowOffset:t,calc:r}=e;return{[`${n}-rtl`]:{direction:"rtl"},[`${n}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${n}-rtl${n}-vertical,
    ${n}-submenu-rtl ${n}-vertical`]:{[`${n}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(${Ve(r(t).mul(-1).equal())})`},"&::after":{transform:`rotate(45deg) translateY(${Ve(t)})`}}}}},Qg=e=>Object.assign({},L4(e)),Yg=(e,n)=>{const{componentCls:t,itemColor:r,itemSelectedColor:o,groupTitleColor:i,itemBg:a,subMenuItemBg:l,itemSelectedBg:s,activeBarHeight:c,activeBarWidth:u,activeBarBorderWidth:d,motionDurationSlow:f,motionEaseInOut:m,motionEaseOut:h,itemPaddingInline:b,motionDurationMid:k,itemHoverColor:g,lineType:v,colorSplit:y,itemDisabledColor:E,dangerItemColor:_,dangerItemHoverColor:w,dangerItemSelectedColor:A,dangerItemActiveBg:N,dangerItemSelectedBg:R,popupBg:V,itemHoverBg:$,itemActiveBg:z,menuSubMenuBg:j,horizontalItemSelectedColor:H,horizontalItemSelectedBg:Z,horizontalItemBorderRadius:B,horizontalItemHoverBg:F}=e;return{[`${t}-${n}, ${t}-${n} > ${t}`]:{color:r,background:a,[`&${t}-root:focus-visible`]:Object.assign({},Qg(e)),[`${t}-item-group-title`]:{color:i},[`${t}-submenu-selected`]:{[`> ${t}-submenu-title`]:{color:o}},[`${t}-item, ${t}-submenu-title`]:{color:r,[`&:not(${t}-item-disabled):focus-visible`]:Object.assign({},Qg(e))},[`${t}-item-disabled, ${t}-submenu-disabled`]:{color:`${E} !important`},[`${t}-item:not(${t}-item-selected):not(${t}-submenu-selected)`]:{[`&:hover, > ${t}-submenu-title:hover`]:{color:g}},[`&:not(${t}-horizontal)`]:{[`${t}-item:not(${t}-item-selected)`]:{"&:hover":{backgroundColor:$},"&:active":{backgroundColor:z}},[`${t}-submenu-title`]:{"&:hover":{backgroundColor:$},"&:active":{backgroundColor:z}}},[`${t}-item-danger`]:{color:_,[`&${t}-item:hover`]:{[`&:not(${t}-item-selected):not(${t}-submenu-selected)`]:{color:w}},[`&${t}-item:active`]:{background:N}},[`${t}-item a`]:{"&, &:hover":{color:"inherit"}},[`${t}-item-selected`]:{color:o,[`&${t}-item-danger`]:{color:A},"a, a:hover":{color:"inherit"}},[`& ${t}-item-selected`]:{backgroundColor:s,[`&${t}-item-danger`]:{backgroundColor:R}},[`&${t}-submenu > ${t}`]:{backgroundColor:j},[`&${t}-popup > ${t}`]:{backgroundColor:V},[`&${t}-submenu-popup > ${t}`]:{backgroundColor:V},[`&${t}-horizontal`]:Object.assign(Object.assign({},n==="dark"?{borderBottom:0}:{}),{[`> ${t}-item, > ${t}-submenu`]:{top:d,marginTop:e.calc(d).mul(-1).equal(),marginBottom:0,borderRadius:B,"&::after":{position:"absolute",insetInline:b,bottom:0,borderBottom:`${Ve(c)} solid transparent`,transition:`border-color ${f} ${m}`,content:'""'},"&:hover, &-active, &-open":{background:F,"&::after":{borderBottomWidth:c,borderBottomColor:H}},"&-selected":{color:H,backgroundColor:Z,"&:hover":{backgroundColor:Z},"&::after":{borderBottomWidth:c,borderBottomColor:H}}}}),[`&${t}-root`]:{[`&${t}-inline, &${t}-vertical`]:{borderInlineEnd:`${Ve(d)} ${v} ${y}`}},[`&${t}-inline`]:{[`${t}-sub${t}-inline`]:{background:l},[`${t}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${Ve(u)} solid ${o}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${k} ${h}`,`opacity ${k} ${h}`].join(","),content:'""'},[`&${t}-item-danger`]:{"&::after":{borderInlineEndColor:A}}},[`${t}-selected, ${t}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${k} ${m}`,`opacity ${k} ${m}`].join(",")}}}}}},Jg=e=>{const{componentCls:n,itemHeight:t,itemMarginInline:r,padding:o,menuArrowSize:i,marginXS:a,itemMarginBlock:l,itemWidth:s}=e,c=e.calc(i).add(o).add(a).equal();return{[`${n}-item`]:{position:"relative",overflow:"hidden"},[`${n}-item, ${n}-submenu-title`]:{height:t,lineHeight:Ve(t),paddingInline:o,overflow:"hidden",textOverflow:"ellipsis",marginInline:r,marginBlock:l,width:s},[`> ${n}-item,
            > ${n}-submenu > ${n}-submenu-title`]:{height:t,lineHeight:Ve(t)},[`${n}-item-group-list ${n}-submenu-title,
            ${n}-submenu-title`]:{paddingInlineEnd:c}}},l_=e=>{const{componentCls:n,iconCls:t,itemHeight:r,colorTextLightSolid:o,dropdownWidth:i,controlHeightLG:a,motionDurationMid:l,motionEaseOut:s,paddingXL:c,itemMarginInline:u,fontSizeLG:d,motionDurationSlow:f,paddingXS:m,boxShadowSecondary:h,collapsedWidth:b,collapsedIconSize:k}=e,g={height:r,lineHeight:Ve(r),listStylePosition:"inside",listStyleType:"disc"};return[{[n]:{"&-inline, &-vertical":Object.assign({[`&${n}-root`]:{boxShadow:"none"}},Jg(e))},[`${n}-submenu-popup`]:{[`${n}-vertical`]:Object.assign(Object.assign({},Jg(e)),{boxShadow:h})}},{[`${n}-submenu-popup ${n}-vertical${n}-sub`]:{minWidth:i,maxHeight:`calc(100vh - ${Ve(e.calc(a).mul(2.5).equal())})`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${n}-inline`]:{width:"100%",[`&${n}-root`]:{[`${n}-item, ${n}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${f}`,`background ${f}`,`padding ${l} ${s}`,`padding-inline calc(50% - ${Ve(e.calc(d).div(2).equal())} - ${Ve(u)})`].join(","),[`> ${n}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${n}-sub${n}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${n}-submenu > ${n}-submenu-title`]:g,[`& ${n}-item-group-title`]:{paddingInlineStart:c}},[`${n}-item`]:g}},{[`${n}-inline-collapsed`]:{width:b,[`&${n}-root`]:{[`${n}-item, ${n}-submenu ${n}-submenu-title`]:{[`> ${n}-inline-collapsed-noicon`]:{fontSize:d,textAlign:"center"}}},[`> ${n}-item,
          > ${n}-item-group > ${n}-item-group-list > ${n}-item,
          > ${n}-item-group > ${n}-item-group-list > ${n}-submenu > ${n}-submenu-title,
          > ${n}-submenu > ${n}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${Ve(e.calc(d).div(2).equal())} - ${Ve(u)})`,textOverflow:"clip",[`
            ${n}-submenu-arrow,
            ${n}-submenu-expand-icon
          `]:{opacity:0},[`${n}-item-icon, ${t}`]:{margin:0,fontSize:k,lineHeight:Ve(r),"+ span":{display:"inline-block",opacity:0}}},[`${n}-item-icon, ${t}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${n}-item-icon, ${t}`]:{display:"none"},"a, a:hover":{color:o}},[`${n}-item-group-title`]:Object.assign(Object.assign({},Fx),{paddingInline:m})}}]},e1=e=>{const{componentCls:n,motionDurationSlow:t,motionDurationMid:r,motionEaseInOut:o,motionEaseOut:i,iconCls:a,iconSize:l,iconMarginInlineEnd:s}=e;return{[`${n}-item, ${n}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${t}`,`background ${t}`,`padding ${t} ${o}`].join(","),[`${n}-item-icon, ${a}`]:{minWidth:l,fontSize:l,transition:[`font-size ${r} ${i}`,`margin ${t} ${o}`,`color ${t}`].join(","),"+ span":{marginInlineStart:s,opacity:1,transition:[`opacity ${t} ${o}`,`margin ${t}`,`color ${t}`].join(",")}},[`${n}-item-icon`]:Object.assign({},M4()),[`&${n}-item-only-child`]:{[`> ${a}, > ${n}-item-icon`]:{marginInlineEnd:0}}},[`${n}-item-disabled, ${n}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${n}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},n1=e=>{const{componentCls:n,motionDurationSlow:t,motionEaseInOut:r,borderRadius:o,menuArrowSize:i,menuArrowOffset:a}=e;return{[`${n}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:e.margin,width:i,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${t} ${r}, opacity ${t}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:e.calc(i).mul(.6).equal(),height:e.calc(i).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:o,transition:[`background ${t} ${r}`,`transform ${t} ${r}`,`top ${t} ${r}`,`color ${t} ${r}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(${Ve(e.calc(a).mul(-1).equal())})`},"&::after":{transform:`rotate(-45deg) translateY(${Ve(a)})`}}}}},s_=e=>{const{antCls:n,componentCls:t,fontSize:r,motionDurationSlow:o,motionDurationMid:i,motionEaseInOut:a,paddingXS:l,padding:s,colorSplit:c,lineWidth:u,zIndexPopup:d,borderRadiusLG:f,subMenuItemBorderRadius:m,menuArrowSize:h,menuArrowOffset:b,lineType:k,groupTitleLineHeight:g,groupTitleFontSize:v}=e;return[{"":{[`${t}`]:Object.assign(Object.assign({},lg()),{"&-hidden":{display:"none"}})},[`${t}-submenu-hidden`]:{display:"none"}},{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},xp(e)),lg()),{marginBottom:0,paddingInlineStart:0,fontSize:r,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${o} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${t}-item`]:{flex:"none"}},[`${t}-item, ${t}-submenu, ${t}-submenu-title`]:{borderRadius:e.itemBorderRadius},[`${t}-item-group-title`]:{padding:`${Ve(l)} ${Ve(s)}`,fontSize:v,lineHeight:g,transition:`all ${o}`},[`&-horizontal ${t}-submenu`]:{transition:[`border-color ${o} ${a}`,`background ${o} ${a}`].join(",")},[`${t}-submenu, ${t}-submenu-inline`]:{transition:[`border-color ${o} ${a}`,`background ${o} ${a}`,`padding ${i} ${a}`].join(",")},[`${t}-submenu ${t}-sub`]:{cursor:"initial",transition:[`background ${o} ${a}`,`padding ${o} ${a}`].join(",")},[`${t}-title-content`]:{transition:`color ${o}`,[`> ${n}-typography-ellipsis-single-line`]:{display:"inline",verticalAlign:"unset"}},[`${t}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${t}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:c,borderStyle:k,borderWidth:0,borderTopWidth:u,marginBlock:u,padding:0,"&-dashed":{borderStyle:"dashed"}}}),e1(e)),{[`${t}-item-group`]:{[`${t}-item-group-list`]:{margin:0,padding:0,[`${t}-item, ${t}-submenu-title`]:{paddingInline:`${Ve(e.calc(r).mul(2).equal())} ${Ve(s)}`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:d,borderRadius:f,boxShadow:"none",transformOrigin:"0 0",[`&${t}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},[`> ${t}`]:Object.assign(Object.assign(Object.assign({borderRadius:f},e1(e)),n1(e)),{[`${t}-item, ${t}-submenu > ${t}-submenu-title`]:{borderRadius:m},[`${t}-submenu-title::after`]:{transition:`transform ${o} ${a}`}})},"\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ":{transformOrigin:"100% 0"},"\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ":{transformOrigin:"100% 100%"},"\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ":{transformOrigin:"0 100%"},"\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ":{transformOrigin:"0 0"},"\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ":{paddingInlineEnd:e.paddingXS},"\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ":{paddingInlineStart:e.paddingXS},"\n          &-placement-topRight,\n          &-placement-topLeft\n          ":{paddingBottom:e.paddingXS},"\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ":{paddingTop:e.paddingXS}}}),n1(e)),{[`&-inline-collapsed ${t}-submenu-arrow,
        &-inline ${t}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${Ve(b)})`},"&::after":{transform:`rotate(45deg) translateX(${Ve(e.calc(b).mul(-1).equal())})`}},[`${t}-submenu-open${t}-submenu-inline > ${t}-submenu-title > ${t}-submenu-arrow`]:{transform:`translateY(${Ve(e.calc(h).mul(.2).mul(-1).equal())})`,"&::after":{transform:`rotate(-45deg) translateX(${Ve(e.calc(b).mul(-1).equal())})`},"&::before":{transform:`rotate(45deg) translateX(${Ve(b)})`}}})},{[`${n}-layout-header`]:{[t]:{lineHeight:"inherit"}}}]},c_=e=>{var n,t,r;const{colorPrimary:o,colorError:i,colorTextDisabled:a,colorErrorBg:l,colorText:s,colorTextDescription:c,colorBgContainer:u,colorFillAlter:d,colorFillContent:f,lineWidth:m,lineWidthBold:h,controlItemBgActive:b,colorBgTextHover:k,controlHeightLG:g,lineHeight:v,colorBgElevated:y,marginXXS:E,padding:_,fontSize:w,controlHeightSM:A,fontSizeLG:N,colorTextLightSolid:R,colorErrorHover:V}=e,$=(n=e.activeBarWidth)!==null&&n!==void 0?n:0,z=(t=e.activeBarBorderWidth)!==null&&t!==void 0?t:m,j=(r=e.itemMarginInline)!==null&&r!==void 0?r:e.marginXXS,H=new Et(R).setAlpha(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:e.zIndexPopupBase+50,radiusItem:e.borderRadiusLG,itemBorderRadius:e.borderRadiusLG,radiusSubMenuItem:e.borderRadiusSM,subMenuItemBorderRadius:e.borderRadiusSM,colorItemText:s,itemColor:s,colorItemTextHover:s,itemHoverColor:s,colorItemTextHoverHorizontal:o,horizontalItemHoverColor:o,colorGroupTitle:c,groupTitleColor:c,colorItemTextSelected:o,itemSelectedColor:o,colorItemTextSelectedHorizontal:o,horizontalItemSelectedColor:o,colorItemBg:u,itemBg:u,colorItemBgHover:k,itemHoverBg:k,colorItemBgActive:f,itemActiveBg:b,colorSubItemBg:d,subMenuItemBg:d,colorItemBgSelected:b,itemSelectedBg:b,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:$,colorActiveBarHeight:h,activeBarHeight:h,colorActiveBarBorderSize:m,activeBarBorderWidth:z,colorItemTextDisabled:a,itemDisabledColor:a,colorDangerItemText:i,dangerItemColor:i,colorDangerItemTextHover:i,dangerItemHoverColor:i,colorDangerItemTextSelected:i,dangerItemSelectedColor:i,colorDangerItemBgActive:l,dangerItemActiveBg:l,colorDangerItemBgSelected:l,dangerItemSelectedBg:l,itemMarginInline:j,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:g,groupTitleLineHeight:v,collapsedWidth:g*2,popupBg:y,itemMarginBlock:E,itemPaddingInline:_,horizontalLineHeight:`${g*1.15}px`,iconSize:w,iconMarginInlineEnd:A-w,collapsedIconSize:N,groupTitleFontSize:w,darkItemDisabledColor:new Et(R).setAlpha(.25).toRgbString(),darkItemColor:H,darkDangerItemColor:i,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:R,darkItemSelectedBg:o,darkDangerItemSelectedBg:i,darkItemHoverBg:"transparent",darkGroupTitleColor:H,darkItemHoverColor:R,darkDangerItemHoverColor:V,darkDangerItemSelectedColor:R,darkDangerItemActiveBg:i,itemWidth:$?`calc(100% + ${z}px)`:`calc(100% - ${j*2}px)`}},u_=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return ds("Menu",o=>{const{colorBgElevated:i,controlHeightLG:a,fontSize:l,darkItemColor:s,darkDangerItemColor:c,darkItemBg:u,darkSubMenuItemBg:d,darkItemSelectedColor:f,darkItemSelectedBg:m,darkDangerItemSelectedBg:h,darkItemHoverBg:b,darkGroupTitleColor:k,darkItemHoverColor:g,darkItemDisabledColor:v,darkDangerItemHoverColor:y,darkDangerItemSelectedColor:E,darkDangerItemActiveBg:_,popupBg:w,darkPopupBg:A}=o,N=o.calc(l).div(7).mul(5).equal(),R=Tr(o,{menuArrowSize:N,menuHorizontalHeight:o.calc(a).mul(1.15).equal(),menuArrowOffset:o.calc(N).mul(.25).equal(),menuSubMenuBg:i,calc:o.calc,popupBg:w}),V=Tr(R,{itemColor:s,itemHoverColor:g,groupTitleColor:k,itemSelectedColor:f,itemBg:u,popupBg:A,subMenuItemBg:d,itemActiveBg:"transparent",itemSelectedBg:m,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:b,itemDisabledColor:v,dangerItemColor:c,dangerItemHoverColor:y,dangerItemSelectedColor:E,dangerItemActiveBg:_,dangerItemSelectedBg:h,menuSubMenuBg:d,horizontalItemSelectedColor:f,horizontalItemSelectedBg:m});return[s_(R),i_(R),l_(R),Yg(R,"light"),Yg(V,"dark"),a_(R),Q7(R),Og(R,"slide-up"),Og(R,"slide-down"),Cw(R,"zoom-big")]},c_,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:t,unitless:{groupTitleLineHeight:!0}})(e,n)},Gw=e=>{var n;const{popupClassName:t,icon:r,title:o,theme:i}=e,a=p.useContext(uu),{prefixCls:l,inlineCollapsed:s,theme:c}=a,u=Ta();let d;if(!r)d=s&&!u.length&&o&&typeof o=="string"?p.createElement("div",{className:`${l}-inline-collapsed-noicon`},o.charAt(0)):p.createElement("span",{className:`${l}-title-content`},o);else{const h=p.isValidElement(o)&&o.type==="span";d=p.createElement(p.Fragment,null,Aa(r,{className:Ge(p.isValidElement(r)?(n=r.props)===null||n===void 0?void 0:n.className:"",`${l}-item-icon`)}),h?o:p.createElement("span",{className:`${l}-title-content`},o))}const f=p.useMemo(()=>Object.assign(Object.assign({},a),{firstLevel:!1}),[a]),[m]=sw("Menu");return p.createElement(uu.Provider,{value:f},p.createElement(ad,Object.assign({},$o(e,["icon"]),{title:d,popupClassName:Ge(l,t,`${l}-${i||c}`),popupStyle:{zIndex:m}})))};var d_=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};function mf(e){return e===null||e===!1}const f_={item:Xw,submenu:Gw,divider:Ww},m_=p.forwardRef((e,n)=>{var t;const r=p.useContext(qg),o=r||{},{getPrefixCls:i,getPopupContainer:a,direction:l,menu:s}=p.useContext(it),c=i(),{prefixCls:u,className:d,style:f,theme:m="light",expandIcon:h,_internalDisableMenuItemTitleTooltip:b,inlineCollapsed:k,siderCollapsed:g,rootClassName:v,mode:y,selectable:E,onClick:_,overflowedIndicatorPopupClassName:w}=e,A=d_(e,["prefixCls","className","style","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),N=$o(A,["collapsedWidth"]);(t=o.validator)===null||t===void 0||t.call(o,{mode:y});const R=kt(function(){var U;_==null||_.apply(void 0,arguments),(U=o.onClick)===null||U===void 0||U.call(o)}),V=o.mode||y,$=E??o.selectable,z=p.useMemo(()=>g!==void 0?g:k,[k,g]),j={horizontal:{motionName:`${c}-slide-up`},inline:Q8(c),other:{motionName:`${c}-zoom-big`}},H=i("menu",u||o.prefixCls),Z=ow(H),[B,F,O]=u_(H,Z,!r),W=Ge(`${H}-${m}`,s==null?void 0:s.className,d),S=p.useMemo(()=>{var U,I;if(typeof h=="function"||mf(h))return h||null;if(typeof o.expandIcon=="function"||mf(o.expandIcon))return o.expandIcon||null;if(typeof(s==null?void 0:s.expandIcon)=="function"||mf(s==null?void 0:s.expandIcon))return(s==null?void 0:s.expandIcon)||null;const Q=(U=h??(o==null?void 0:o.expandIcon))!==null&&U!==void 0?U:s==null?void 0:s.expandIcon;return Aa(Q,{className:Ge(`${H}-submenu-expand-icon`,p.isValidElement(Q)?(I=Q.props)===null||I===void 0?void 0:I.className:void 0)})},[h,o==null?void 0:o.expandIcon,s==null?void 0:s.expandIcon,H]),G=p.useMemo(()=>({prefixCls:H,inlineCollapsed:z||!1,direction:l,firstLevel:!0,theme:m,mode:V,disableMenuItemTitleTooltip:b}),[H,z,l,b,m]);return B(p.createElement(qg.Provider,{value:null},p.createElement(uu.Provider,{value:G},p.createElement(hs,Object.assign({getPopupContainer:a,overflowedIndicator:p.createElement(r_,null),overflowedIndicatorPopupClassName:Ge(H,`${H}-${m}`,w),mode:V,selectable:$,onClick:R},N,{inlineCollapsed:z,style:Object.assign(Object.assign({},s==null?void 0:s.style),f),className:W,prefixCls:H,direction:l,defaultMotions:j,expandIcon:S,ref:n,rootClassName:Ge(v,F,o.rootClassName,O,Z),_internalComponents:f_})))))}),ps=p.forwardRef((e,n)=>{const t=p.useRef(null),r=p.useContext(ld);return p.useImperativeHandle(n,()=>({menu:t.current,focus:o=>{var i;(i=t.current)===null||i===void 0||i.focus(o)}})),p.createElement(m_,Object.assign({ref:t},e,r))});ps.Item=Xw;ps.SubMenu=Gw;ps.Divider=Ww;ps.ItemGroup=jp;function h_(e,n,t){return typeof t=="boolean"?t:e.length?!0:gi(n).some(o=>o.type===Vw)}const p_=e=>{const{componentCls:n,bodyBg:t,lightSiderBg:r,lightTriggerBg:o,lightTriggerColor:i}=e;return{[`${n}-sider-light`]:{background:r,[`${n}-sider-trigger`]:{color:i,background:o},[`${n}-sider-zero-width-trigger`]:{color:i,background:o,border:`1px solid ${t}`,borderInlineStart:0}}}},g_=e=>{const{antCls:n,componentCls:t,colorText:r,triggerColor:o,footerBg:i,triggerBg:a,headerHeight:l,headerPadding:s,headerColor:c,footerPadding:u,triggerHeight:d,zeroTriggerHeight:f,zeroTriggerWidth:m,motionDurationMid:h,motionDurationSlow:b,fontSize:k,borderRadius:g,bodyBg:v,headerBg:y,siderBg:E}=e;return{[t]:Object.assign(Object.assign({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:v,"&, *":{boxSizing:"border-box"},[`&${t}-has-sider`]:{flexDirection:"row",[`> ${t}, > ${t}-content`]:{width:0}},[`${t}-header, &${t}-footer`]:{flex:"0 0 auto"},[`${t}-sider`]:{position:"relative",minWidth:0,background:E,transition:`all ${h}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${n}-menu${n}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:d},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:d,color:o,lineHeight:Ve(d),textAlign:"center",background:a,cursor:"pointer",transition:`all ${h}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:l,insetInlineEnd:e.calc(m).mul(-1).equal(),zIndex:1,width:m,height:f,color:o,fontSize:e.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:E,borderStartStartRadius:0,borderStartEndRadius:g,borderEndEndRadius:g,borderEndStartRadius:0,cursor:"pointer",transition:`background ${b} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${b}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:e.calc(m).mul(-1).equal(),borderStartStartRadius:g,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:g}}}}},p_(e)),{"&-rtl":{direction:"rtl"}}),[`${t}-header`]:{height:l,padding:s,color:c,lineHeight:Ve(l),background:y,[`${n}-menu`]:{lineHeight:"inherit"}},[`${t}-footer`]:{padding:u,color:r,fontSize:k,background:i},[`${t}-content`]:{flex:"auto",color:r,minHeight:0}}},v_=e=>{const{colorBgLayout:n,controlHeight:t,controlHeightLG:r,colorText:o,controlHeightSM:i,marginXXS:a,colorTextLightSolid:l,colorBgContainer:s}=e,c=r*1.25;return{colorBgHeader:"#001529",colorBgBody:n,colorBgTrigger:"#002140",bodyBg:n,headerBg:"#001529",headerHeight:t*2,headerPadding:`0 ${c}px`,headerColor:o,footerPadding:`${i}px ${c}px`,footerBg:n,siderBg:"#001529",triggerHeight:r+a*2,triggerBg:"#002140",triggerColor:l,zeroTriggerWidth:r,zeroTriggerHeight:r,lightSiderBg:s,lightTriggerBg:s,lightTriggerColor:o}},Zw=ds("Layout",e=>[g_(e)],v_,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]});var Kw=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};function sd(e){let{suffixCls:n,tagName:t,displayName:r}=e;return o=>p.forwardRef((a,l)=>p.createElement(o,Object.assign({ref:l,suffixCls:n,tagName:t},a)))}const Dp=p.forwardRef((e,n)=>{const{prefixCls:t,suffixCls:r,className:o,tagName:i}=e,a=Kw(e,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:l}=p.useContext(it),s=l("layout",t),[c,u,d]=Zw(s),f=r?`${s}-${r}`:s;return c(p.createElement(i,Object.assign({className:Ge(t||f,o,u,d),ref:n},a)))}),b_=p.forwardRef((e,n)=>{const{direction:t}=p.useContext(it),[r,o]=p.useState([]),{prefixCls:i,className:a,rootClassName:l,children:s,hasSider:c,tagName:u,style:d}=e,f=Kw(e,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),m=$o(f,["suffixCls"]),{getPrefixCls:h,layout:b}=p.useContext(it),k=h("layout",i),g=h_(r,s,c),[v,y,E]=Zw(k),_=Ge(k,{[`${k}-has-sider`]:g,[`${k}-rtl`]:t==="rtl"},b==null?void 0:b.className,a,l,y,E),w=p.useMemo(()=>({siderHook:{addSider:A=>{o(N=>[].concat(Wn(N),[A]))},removeSider:A=>{o(N=>N.filter(R=>R!==A))}}}),[]);return v(p.createElement(Uw.Provider,{value:w},p.createElement(u,Object.assign({ref:n,className:_,style:Object.assign(Object.assign({},b==null?void 0:b.style),d)},m),s)))}),y_=sd({tagName:"div",displayName:"Layout"})(b_),w_=sd({suffixCls:"header",tagName:"header",displayName:"Header"})(Dp),C_=sd({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(Dp),S_=sd({suffixCls:"content",tagName:"main",displayName:"Content"})(Dp),Si=y_;Si.Header=w_;Si.Footer=C_;Si.Content=S_;Si.Sider=Vw;Si._InternalSiderContext=ld;const k_=e=>{const{componentCls:n,calc:t}=e;return{[n]:Object.assign(Object.assign({},xp(e)),{margin:0,padding:0,listStyle:"none",[`${n}-item`]:{position:"relative",margin:0,paddingBottom:e.itemPaddingBottom,fontSize:e.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:e.itemHeadSize,insetInlineStart:t(t(e.itemHeadSize).sub(e.tailWidth)).div(2).equal(),height:`calc(100% - ${Ve(e.itemHeadSize)})`,borderInlineStart:`${Ve(e.tailWidth)} ${e.lineType} ${e.tailColor}`},"&-pending":{[`${n}-item-head`]:{fontSize:e.fontSizeSM,backgroundColor:"transparent"},[`${n}-item-tail`]:{display:"none"}},"&-head":{position:"absolute",width:e.itemHeadSize,height:e.itemHeadSize,backgroundColor:e.dotBg,border:`${Ve(e.dotBorderWidth)} ${e.lineType} transparent`,borderRadius:"50%","&-blue":{color:e.colorPrimary,borderColor:e.colorPrimary},"&-red":{color:e.colorError,borderColor:e.colorError},"&-green":{color:e.colorSuccess,borderColor:e.colorSuccess},"&-gray":{color:e.colorTextDisabled,borderColor:e.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:t(e.itemHeadSize).div(2).equal(),insetInlineStart:t(e.itemHeadSize).div(2).equal(),width:"auto",height:"auto",marginBlockStart:0,paddingBlock:e.customHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:t(t(e.fontSize).mul(e.lineHeight).sub(e.fontSize)).mul(-1).add(e.lineWidth).equal(),marginInlineStart:t(e.margin).add(e.itemHeadSize).equal(),marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":{[`> ${n}-item-tail`]:{display:"none"},[`> ${n}-item-content`]:{minHeight:t(e.controlHeightLG).mul(1.2).equal()}}},[`&${n}-alternate,
        &${n}-right,
        &${n}-label`]:{[`${n}-item`]:{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:t(e.marginXXS).mul(-1).equal(),"&-custom":{marginInlineStart:t(e.tailWidth).div(2).equal()}},"&-left":{[`${n}-item-content`]:{insetInlineStart:`calc(50% - ${Ve(e.marginXXS)})`,width:`calc(50% - ${Ve(e.marginSM)})`,textAlign:"start"}},"&-right":{[`${n}-item-content`]:{width:`calc(50% - ${Ve(e.marginSM)})`,margin:0,textAlign:"end"}}}},[`&${n}-right`]:{[`${n}-item-right`]:{[`${n}-item-tail,
            ${n}-item-head,
            ${n}-item-head-custom`]:{insetInlineStart:`calc(100% - ${Ve(t(t(e.itemHeadSize).add(e.tailWidth)).div(2).equal())})`},[`${n}-item-content`]:{width:`calc(100% - ${Ve(t(e.itemHeadSize).add(e.marginXS).equal())})`}}},[`&${n}-pending
        ${n}-item-last
        ${n}-item-tail`]:{display:"block",height:`calc(100% - ${Ve(e.margin)})`,borderInlineStart:`${Ve(e.tailWidth)} dotted ${e.tailColor}`},[`&${n}-reverse
        ${n}-item-last
        ${n}-item-tail`]:{display:"none"},[`&${n}-reverse ${n}-item-pending`]:{[`${n}-item-tail`]:{insetBlockStart:e.margin,display:"block",height:`calc(100% - ${Ve(e.margin)})`,borderInlineStart:`${Ve(e.tailWidth)} dotted ${e.tailColor}`},[`${n}-item-content`]:{minHeight:t(e.controlHeightLG).mul(1.2).equal()}},[`&${n}-label`]:{[`${n}-item-label`]:{position:"absolute",insetBlockStart:t(t(e.fontSize).mul(e.lineHeight).sub(e.fontSize)).mul(-1).add(e.tailWidth).equal(),width:`calc(50% - ${Ve(e.marginSM)})`,textAlign:"end"},[`${n}-item-right`]:{[`${n}-item-label`]:{insetInlineStart:`calc(50% + ${Ve(e.marginSM)})`,width:`calc(50% - ${Ve(e.marginSM)})`,textAlign:"start"}}},"&-rtl":{direction:"rtl",[`${n}-item-head-custom`]:{transform:"translate(50%, -50%)"}}})}},E_=e=>({tailColor:e.colorSplit,tailWidth:e.lineWidthBold,dotBorderWidth:e.wireframe?e.lineWidthBold:e.lineWidth*3,dotBg:e.colorBgContainer,itemPaddingBottom:e.padding*1.25}),x_=ds("Timeline",e=>{const n=Tr(e,{itemHeadSize:10,customHeadPaddingVertical:e.paddingXXS,paddingInlineEnd:2});return[k_(n)]},E_);var I_=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const qw=e=>{var{prefixCls:n,className:t,color:r="blue",dot:o,pending:i=!1,position:a,label:l,children:s}=e,c=I_(e,["prefixCls","className","color","dot","pending","position","label","children"]);const{getPrefixCls:u}=p.useContext(it),d=u("timeline",n),f=Ge(`${d}-item`,{[`${d}-item-pending`]:i},t),m=/blue|red|green|gray/.test(r||"")?void 0:r,h=Ge(`${d}-item-head`,{[`${d}-item-head-custom`]:!!o,[`${d}-item-head-${r}`]:!m});return p.createElement("li",Object.assign({},c,{className:f}),l&&p.createElement("div",{className:`${d}-item-label`},l),p.createElement("div",{className:`${d}-item-tail`}),p.createElement("div",{className:h,style:{borderColor:m,color:m}},o),p.createElement("div",{className:`${d}-item-content`},s))};var t1=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const __=e=>{var{prefixCls:n,className:t,pending:r=!1,children:o,items:i,rootClassName:a,reverse:l=!1,direction:s,hashId:c,pendingDot:u,mode:d=""}=e,f=t1(e,["prefixCls","className","pending","children","items","rootClassName","reverse","direction","hashId","pendingDot","mode"]);const m=(_,w)=>d==="alternate"?_==="right"?`${n}-item-right`:_==="left"?`${n}-item-left`:w%2===0?`${n}-item-left`:`${n}-item-right`:d==="left"?`${n}-item-left`:d==="right"?`${n}-item-right`:_==="right"?`${n}-item-right`:"",h=Wn(i||[]),b=typeof r=="boolean"?null:r;r&&h.push({pending:!!r,dot:u||p.createElement(iw,null),children:b}),l&&h.reverse();const k=h.length,g=`${n}-item-last`,v=h.filter(_=>!!_).map((_,w)=>{var A;const N=w===k-2?g:"",R=w===k-1?g:"",{className:V}=_,$=t1(_,["className"]);return p.createElement(qw,Object.assign({},$,{className:Ge([V,!l&&r?N:R,m((A=_==null?void 0:_.position)!==null&&A!==void 0?A:"",w)]),key:(_==null?void 0:_.key)||w}))}),y=h.some(_=>!!(_!=null&&_.label)),E=Ge(n,{[`${n}-pending`]:!!r,[`${n}-reverse`]:!!l,[`${n}-${d}`]:!!d&&!y,[`${n}-label`]:y,[`${n}-rtl`]:s==="rtl"},t,a,c);return p.createElement("ul",Object.assign({},f,{className:E}),v)};function A_(e,n){return e&&Array.isArray(e)?e:gi(n).map(t=>{var r,o;return Object.assign({children:(o=(r=t==null?void 0:t.props)===null||r===void 0?void 0:r.children)!==null&&o!==void 0?o:""},t.props)})}var T_=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const Qw=e=>{const{getPrefixCls:n,direction:t,timeline:r}=p.useContext(it),{prefixCls:o,children:i,items:a,className:l,style:s}=e,c=T_(e,["prefixCls","children","items","className","style"]),u=n("timeline",o),d=ow(u),[f,m,h]=x_(u,d),b=A_(a,i);return f(p.createElement(__,Object.assign({},c,{className:Ge(r==null?void 0:r.className,l,h,d),style:Object.assign(Object.assign({},r==null?void 0:r.style),s),prefixCls:u,direction:t,items:b,hashId:m})))};Qw.Item=qw;var $p={},Yw={exports:{}},O_="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",P_=O_,N_=P_;function Jw(){}function e3(){}e3.resetWarningCache=Jw;var R_=function(){function e(r,o,i,a,l,s){if(s!==N_){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:e3,resetWarningCache:Jw};return t.PropTypes=t,t};Yw.exports=R_();var F_=Yw.exports,n3={},rh={exports:{}};/*!

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
*/(function(e,n){(function(t,r){r(n)})(Wt,function(t){function r(){}r.prototype={diff:function(x,T){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},K=M.callback;typeof M=="function"&&(K=M,M={}),this.options=M;var q=this;function ee(He){return K?(setTimeout(function(){K(void 0,He)},0),!0):He}x=this.castInput(x),T=this.castInput(T),x=this.removeEmpty(this.tokenize(x)),T=this.removeEmpty(this.tokenize(T));var ne=T.length,ue=x.length,ae=1,ge=ne+ue,De=[{newPos:-1,components:[]}],we=this.extractCommon(De[0],T,x,0);if(De[0].newPos+1>=ne&&we+1>=ue)return ee([{value:this.join(T),count:T.length}]);function Xe(){for(var He=-1*ae;He<=ae;He+=2){var sn=void 0,an=De[He-1],Ke=De[He+1],ke=(Ke?Ke.newPos:0)-He;an&&(De[He-1]=void 0);var We=an&&an.newPos+1<ne,Re=Ke&&0<=ke&&ke<ue;if(!We&&!Re){De[He]=void 0;continue}if(!We||Re&&an.newPos<Ke.newPos?(sn=i(Ke),q.pushComponent(sn.components,void 0,!0)):(sn=an,sn.newPos++,q.pushComponent(sn.components,!0,void 0)),ke=q.extractCommon(sn,T,x,He),sn.newPos+1>=ne&&ke+1>=ue)return ee(o(q,sn.components,T,x,q.useLongestToken));De[He]=sn}ae++}if(K)(function He(){setTimeout(function(){if(ae>ge)return K();Xe()||He()},0)})();else for(;ae<=ge;){var tn=Xe();if(tn)return tn}},pushComponent:function(x,T,M){var K=x[x.length-1];K&&K.added===T&&K.removed===M?x[x.length-1]={count:K.count+1,added:T,removed:M}:x.push({count:1,added:T,removed:M})},extractCommon:function(x,T,M,K){for(var q=T.length,ee=M.length,ne=x.newPos,ue=ne-K,ae=0;ne+1<q&&ue+1<ee&&this.equals(T[ne+1],M[ue+1]);)ne++,ue++,ae++;return ae&&x.components.push({count:ae}),x.newPos=ne,ue},equals:function(x,T){return this.options.comparator?this.options.comparator(x,T):x===T||this.options.ignoreCase&&x.toLowerCase()===T.toLowerCase()},removeEmpty:function(x){for(var T=[],M=0;M<x.length;M++)x[M]&&T.push(x[M]);return T},castInput:function(x){return x},tokenize:function(x){return x.split("")},join:function(x){return x.join("")}};function o(C,x,T,M,K){for(var q=0,ee=x.length,ne=0,ue=0;q<ee;q++){var ae=x[q];if(ae.removed){if(ae.value=C.join(M.slice(ue,ue+ae.count)),ue+=ae.count,q&&x[q-1].added){var De=x[q-1];x[q-1]=x[q],x[q]=De}}else{if(!ae.added&&K){var ge=T.slice(ne,ne+ae.count);ge=ge.map(function(Xe,tn){var He=M[ue+tn];return He.length>Xe.length?He:Xe}),ae.value=C.join(ge)}else ae.value=C.join(T.slice(ne,ne+ae.count));ne+=ae.count,ae.added||(ue+=ae.count)}}var we=x[ee-1];return ee>1&&typeof we.value=="string"&&(we.added||we.removed)&&C.equals("",we.value)&&(x[ee-2].value+=we.value,x.pop()),x}function i(C){return{newPos:C.newPos,components:C.components.slice(0)}}var a=new r;function l(C,x,T){return a.diff(C,x,T)}function s(C,x){if(typeof C=="function")x.callback=C;else if(C)for(var T in C)C.hasOwnProperty(T)&&(x[T]=C[T]);return x}var c=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,u=/\S/,d=new r;d.equals=function(C,x){return this.options.ignoreCase&&(C=C.toLowerCase(),x=x.toLowerCase()),C===x||this.options.ignoreWhitespace&&!u.test(C)&&!u.test(x)},d.tokenize=function(C){for(var x=C.split(/(\s+|[()[\]{}'"]|\b)/),T=0;T<x.length-1;T++)!x[T+1]&&x[T+2]&&c.test(x[T])&&c.test(x[T+2])&&(x[T]+=x[T+2],x.splice(T+1,2),T--);return x};function f(C,x,T){return T=s(T,{ignoreWhitespace:!0}),d.diff(C,x,T)}function m(C,x,T){return d.diff(C,x,T)}var h=new r;h.tokenize=function(C){var x=[],T=C.split(/(\n|\r\n)/);T[T.length-1]||T.pop();for(var M=0;M<T.length;M++){var K=T[M];M%2&&!this.options.newlineIsToken?x[x.length-1]+=K:(this.options.ignoreWhitespace&&(K=K.trim()),x.push(K))}return x};function b(C,x,T){return h.diff(C,x,T)}function k(C,x,T){var M=s(T,{ignoreWhitespace:!0});return h.diff(C,x,M)}var g=new r;g.tokenize=function(C){return C.split(/(\S.+?[.!?])(?=\s+|$)/)};function v(C,x,T){return g.diff(C,x,T)}var y=new r;y.tokenize=function(C){return C.split(/([{}:;,]|\s+)/)};function E(C,x,T){return y.diff(C,x,T)}function _(C){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_=function(x){return typeof x}:_=function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},_(C)}function w(C){return A(C)||N(C)||R()}function A(C){if(Array.isArray(C)){for(var x=0,T=new Array(C.length);x<C.length;x++)T[x]=C[x];return T}}function N(C){if(Symbol.iterator in Object(C)||Object.prototype.toString.call(C)==="[object Arguments]")return Array.from(C)}function R(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var V=Object.prototype.toString,$=new r;$.useLongestToken=!0,$.tokenize=h.tokenize,$.castInput=function(C){var x=this.options,T=x.undefinedReplacement,M=x.stringifyReplacer,K=M===void 0?function(q,ee){return typeof ee>"u"?T:ee}:M;return typeof C=="string"?C:JSON.stringify(j(C,null,null,K),K,"  ")},$.equals=function(C,x){return r.prototype.equals.call($,C.replace(/,([\r\n])/g,"$1"),x.replace(/,([\r\n])/g,"$1"))};function z(C,x,T){return $.diff(C,x,T)}function j(C,x,T,M,K){x=x||[],T=T||[],M&&(C=M(K,C));var q;for(q=0;q<x.length;q+=1)if(x[q]===C)return T[q];var ee;if(V.call(C)==="[object Array]"){for(x.push(C),ee=new Array(C.length),T.push(ee),q=0;q<C.length;q+=1)ee[q]=j(C[q],x,T,M,K);return x.pop(),T.pop(),ee}if(C&&C.toJSON&&(C=C.toJSON()),_(C)==="object"&&C!==null){x.push(C),ee={},T.push(ee);var ne=[],ue;for(ue in C)C.hasOwnProperty(ue)&&ne.push(ue);for(ne.sort(),q=0;q<ne.length;q+=1)ue=ne[q],ee[ue]=j(C[ue],x,T,M,ue);x.pop(),T.pop()}else ee=C;return ee}var H=new r;H.tokenize=function(C){return C.slice()},H.join=H.removeEmpty=function(C){return C};function Z(C,x,T){return H.diff(C,x,T)}function B(C){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},T=C.split(/\r\n|[\n\v\f\r\x85]/),M=C.match(/\r\n|[\n\v\f\r\x85]/g)||[],K=[],q=0;function ee(){var ae={};for(K.push(ae);q<T.length;){var ge=T[q];if(/^(\-\-\-|\+\+\+|@@)\s/.test(ge))break;var De=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(ge);De&&(ae.index=De[1]),q++}for(ne(ae),ne(ae),ae.hunks=[];q<T.length;){var we=T[q];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(we))break;if(/^@@/.test(we))ae.hunks.push(ue());else{if(we&&x.strict)throw new Error("Unknown line "+(q+1)+" "+JSON.stringify(we));q++}}}function ne(ae){var ge=/^(---|\+\+\+)\s+(.*)$/.exec(T[q]);if(ge){var De=ge[1]==="---"?"old":"new",we=ge[2].split("	",2),Xe=we[0].replace(/\\\\/g,"\\");/^".*"$/.test(Xe)&&(Xe=Xe.substr(1,Xe.length-2)),ae[De+"FileName"]=Xe,ae[De+"Header"]=(we[1]||"").trim(),q++}}function ue(){for(var ae=q,ge=T[q++],De=ge.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),we={oldStart:+De[1],oldLines:+De[2]||1,newStart:+De[3],newLines:+De[4]||1,lines:[],linedelimiters:[]},Xe=0,tn=0;q<T.length&&!(T[q].indexOf("--- ")===0&&q+2<T.length&&T[q+1].indexOf("+++ ")===0&&T[q+2].indexOf("@@")===0);q++){var He=T[q].length==0&&q!=T.length-1?" ":T[q][0];if(He==="+"||He==="-"||He===" "||He==="\\")we.lines.push(T[q]),we.linedelimiters.push(M[q]||`
`),He==="+"?Xe++:He==="-"?tn++:He===" "&&(Xe++,tn++);else break}if(!Xe&&we.newLines===1&&(we.newLines=0),!tn&&we.oldLines===1&&(we.oldLines=0),x.strict){if(Xe!==we.newLines)throw new Error("Added line count did not match for hunk at line "+(ae+1));if(tn!==we.oldLines)throw new Error("Removed line count did not match for hunk at line "+(ae+1))}return we}for(;q<T.length;)ee();return K}function F(C,x,T){var M=!0,K=!1,q=!1,ee=1;return function ne(){if(M&&!q){if(K?ee++:M=!1,C+ee<=T)return ee;q=!0}if(!K)return q||(M=!0),x<=C-ee?-ee++:(K=!0,ne())}}function O(C,x){var T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof x=="string"&&(x=B(x)),Array.isArray(x)){if(x.length>1)throw new Error("applyPatch only works with a single input.");x=x[0]}var M=C.split(/\r\n|[\n\v\f\r\x85]/),K=C.match(/\r\n|[\n\v\f\r\x85]/g)||[],q=x.hunks,ee=T.compareLine||function(Ie,ie,Be,se){return ie===se},ne=0,ue=T.fuzzFactor||0,ae=0,ge=0,De,we;function Xe(Ie,ie){for(var Be=0;Be<Ie.lines.length;Be++){var se=Ie.lines[Be],je=se.length>0?se[0]:" ",cn=se.length>0?se.substr(1):se;if(je===" "||je==="-"){if(!ee(ie+1,M[ie],je,cn)&&(ne++,ne>ue))return!1;ie++}}return!0}for(var tn=0;tn<q.length;tn++){for(var He=q[tn],sn=M.length-He.oldLines,an=0,Ke=ge+He.oldStart-1,ke=F(Ke,ae,sn);an!==void 0;an=ke())if(Xe(He,Ke+an)){He.offset=ge+=an;break}if(an===void 0)return!1;ae=He.offset+He.oldStart+He.oldLines}for(var We=0,Re=0;Re<q.length;Re++){var ye=q[Re],Ae=ye.oldStart+ye.offset+We-1;We+=ye.newLines-ye.oldLines,Ae<0&&(Ae=0);for(var qe=0;qe<ye.lines.length;qe++){var P=ye.lines[qe],D=P.length>0?P[0]:" ",X=P.length>0?P.substr(1):P,J=ye.linedelimiters[qe];if(D===" ")Ae++;else if(D==="-")M.splice(Ae,1),K.splice(Ae,1);else if(D==="+")M.splice(Ae,0,X),K.splice(Ae,0,J),Ae++;else if(D==="\\"){var fe=ye.lines[qe-1]?ye.lines[qe-1][0]:null;fe==="+"?De=!0:fe==="-"&&(we=!0)}}}if(De)for(;!M[M.length-1];)M.pop(),K.pop();else we&&(M.push(""),K.push(`
`));for(var ve=0;ve<M.length-1;ve++)M[ve]=M[ve]+K[ve];return M.join("")}function W(C,x){typeof C=="string"&&(C=B(C));var T=0;function M(){var K=C[T++];if(!K)return x.complete();x.loadFile(K,function(q,ee){if(q)return x.complete(q);var ne=O(ee,K,x);x.patched(K,ne,function(ue){if(ue)return x.complete(ue);M()})})}M()}function S(C,x,T,M,K,q,ee){ee||(ee={}),typeof ee.context>"u"&&(ee.context=4);var ne=b(T,M,ee);ne.push({value:"",lines:[]});function ue(an){return an.map(function(Ke){return" "+Ke})}for(var ae=[],ge=0,De=0,we=[],Xe=1,tn=1,He=function(Ke){var ke=ne[Ke],We=ke.lines||ke.value.replace(/\n$/,"").split(`
`);if(ke.lines=We,ke.added||ke.removed){var Re;if(!ge){var ye=ne[Ke-1];ge=Xe,De=tn,ye&&(we=ee.context>0?ue(ye.lines.slice(-ee.context)):[],ge-=we.length,De-=we.length)}(Re=we).push.apply(Re,w(We.map(function(ve){return(ke.added?"+":"-")+ve}))),ke.added?tn+=We.length:Xe+=We.length}else{if(ge)if(We.length<=ee.context*2&&Ke<ne.length-2){var Ae;(Ae=we).push.apply(Ae,w(ue(We)))}else{var qe,P=Math.min(We.length,ee.context);(qe=we).push.apply(qe,w(ue(We.slice(0,P))));var D={oldStart:ge,oldLines:Xe-ge+P,newStart:De,newLines:tn-De+P,lines:we};if(Ke>=ne.length-2&&We.length<=ee.context){var X=/\n$/.test(T),J=/\n$/.test(M),fe=We.length==0&&we.length>D.oldLines;!X&&fe&&we.splice(D.oldLines,0,"\\ No newline at end of file"),(!X&&!fe||!J)&&we.push("\\ No newline at end of file")}ae.push(D),ge=0,De=0,we=[]}Xe+=We.length,tn+=We.length}},sn=0;sn<ne.length;sn++)He(sn);return{oldFileName:C,newFileName:x,oldHeader:K,newHeader:q,hunks:ae}}function G(C,x,T,M,K,q,ee){var ne=S(C,x,T,M,K,q,ee),ue=[];C==x&&ue.push("Index: "+C),ue.push("==================================================================="),ue.push("--- "+ne.oldFileName+(typeof ne.oldHeader>"u"?"":"	"+ne.oldHeader)),ue.push("+++ "+ne.newFileName+(typeof ne.newHeader>"u"?"":"	"+ne.newHeader));for(var ae=0;ae<ne.hunks.length;ae++){var ge=ne.hunks[ae];ue.push("@@ -"+ge.oldStart+","+ge.oldLines+" +"+ge.newStart+","+ge.newLines+" @@"),ue.push.apply(ue,ge.lines)}return ue.join(`
`)+`
`}function U(C,x,T,M,K,q){return G(C,C,x,T,M,K,q)}function I(C,x){return C.length!==x.length?!1:Q(C,x)}function Q(C,x){if(x.length>C.length)return!1;for(var T=0;T<x.length;T++)if(x[T]!==C[T])return!1;return!0}function oe(C){var x=rn(C.lines),T=x.oldLines,M=x.newLines;T!==void 0?C.oldLines=T:delete C.oldLines,M!==void 0?C.newLines=M:delete C.newLines}function L(C,x,T){C=he(C,T),x=he(x,T);var M={};(C.index||x.index)&&(M.index=C.index||x.index),(C.newFileName||x.newFileName)&&(Y(C)?Y(x)?(M.oldFileName=Oe(M,C.oldFileName,x.oldFileName),M.newFileName=Oe(M,C.newFileName,x.newFileName),M.oldHeader=Oe(M,C.oldHeader,x.oldHeader),M.newHeader=Oe(M,C.newHeader,x.newHeader)):(M.oldFileName=C.oldFileName,M.newFileName=C.newFileName,M.oldHeader=C.oldHeader,M.newHeader=C.newHeader):(M.oldFileName=x.oldFileName||C.oldFileName,M.newFileName=x.newFileName||C.newFileName,M.oldHeader=x.oldHeader||C.oldHeader,M.newHeader=x.newHeader||C.newHeader)),M.hunks=[];for(var K=0,q=0,ee=0,ne=0;K<C.hunks.length||q<x.hunks.length;){var ue=C.hunks[K]||{oldStart:1/0},ae=x.hunks[q]||{oldStart:1/0};if(be(ue,ae))M.hunks.push(Ce(ue,ee)),K++,ne+=ue.newLines-ue.oldLines;else if(be(ae,ue))M.hunks.push(Ce(ae,ne)),q++,ee+=ae.newLines-ae.oldLines;else{var ge={oldStart:Math.min(ue.oldStart,ae.oldStart),oldLines:0,newStart:Math.min(ue.newStart+ee,ae.oldStart+ne),newLines:0,lines:[]};me(ge,ue.oldStart,ue.lines,ae.oldStart,ae.lines),q++,K++,M.hunks.push(ge)}}return M}function he(C,x){if(typeof C=="string"){if(/^@@/m.test(C)||/^Index:/m.test(C))return B(C)[0];if(!x)throw new Error("Must provide a base reference or pass in a patch");return S(void 0,void 0,x,C)}return C}function Y(C){return C.newFileName&&C.newFileName!==C.oldFileName}function Oe(C,x,T){return x===T?x:(C.conflict=!0,{mine:x,theirs:T})}function be(C,x){return C.oldStart<x.oldStart&&C.oldStart+C.oldLines<x.oldStart}function Ce(C,x){return{oldStart:C.oldStart,oldLines:C.oldLines,newStart:C.newStart+x,newLines:C.newLines,lines:C.lines}}function me(C,x,T,M,K){var q={offset:x,lines:T,index:0},ee={offset:M,lines:K,index:0};for(Se(C,q,ee),Se(C,ee,q);q.index<q.lines.length&&ee.index<ee.lines.length;){var ne=q.lines[q.index],ue=ee.lines[ee.index];if((ne[0]==="-"||ne[0]==="+")&&(ue[0]==="-"||ue[0]==="+"))en(C,q,ee);else if(ne[0]==="+"&&ue[0]===" "){var ae;(ae=C.lines).push.apply(ae,w(Pe(q)))}else if(ue[0]==="+"&&ne[0]===" "){var ge;(ge=C.lines).push.apply(ge,w(Pe(ee)))}else ne[0]==="-"&&ue[0]===" "?Ze(C,q,ee):ue[0]==="-"&&ne[0]===" "?Ze(C,ee,q,!0):ne===ue?(C.lines.push(ne),q.index++,ee.index++):Ee(C,Pe(q),Pe(ee))}xe(C,q),xe(C,ee),oe(C)}function en(C,x,T){var M=Pe(x),K=Pe(T);if(Fe(M)&&Fe(K)){if(Q(M,K)&&Ue(T,M,M.length-K.length)){var q;(q=C.lines).push.apply(q,w(M));return}else if(Q(K,M)&&Ue(x,K,K.length-M.length)){var ee;(ee=C.lines).push.apply(ee,w(K));return}}else if(I(M,K)){var ne;(ne=C.lines).push.apply(ne,w(M));return}Ee(C,M,K)}function Ze(C,x,T,M){var K=Pe(x),q=$e(T,K);if(q.merged){var ee;(ee=C.lines).push.apply(ee,w(q.merged))}else Ee(C,M?q:K,M?K:q)}function Ee(C,x,T){C.conflict=!0,C.lines.push({conflict:!0,mine:x,theirs:T})}function Se(C,x,T){for(;x.offset<T.offset&&x.index<x.lines.length;){var M=x.lines[x.index++];C.lines.push(M),x.offset++}}function xe(C,x){for(;x.index<x.lines.length;){var T=x.lines[x.index++];C.lines.push(T)}}function Pe(C){for(var x=[],T=C.lines[C.index][0];C.index<C.lines.length;){var M=C.lines[C.index];if(T==="-"&&M[0]==="+"&&(T="+"),T===M[0])x.push(M),C.index++;else break}return x}function $e(C,x){for(var T=[],M=[],K=0,q=!1,ee=!1;K<x.length&&C.index<C.lines.length;){var ne=C.lines[C.index],ue=x[K];if(ue[0]==="+")break;if(q=q||ne[0]!==" ",M.push(ue),K++,ne[0]==="+")for(ee=!0;ne[0]==="+";)T.push(ne),ne=C.lines[++C.index];ue.substr(1)===ne.substr(1)?(T.push(ne),C.index++):ee=!0}if((x[K]||"")[0]==="+"&&q&&(ee=!0),ee)return T;for(;K<x.length;)M.push(x[K++]);return{merged:M,changes:T}}function Fe(C){return C.reduce(function(x,T){return x&&T[0]==="-"},!0)}function Ue(C,x,T){for(var M=0;M<T;M++){var K=x[x.length-T+M].substr(1);if(C.lines[C.index+M]!==" "+K)return!1}return C.index+=T,!0}function rn(C){var x=0,T=0;return C.forEach(function(M){if(typeof M!="string"){var K=rn(M.mine),q=rn(M.theirs);x!==void 0&&(K.oldLines===q.oldLines?x+=K.oldLines:x=void 0),T!==void 0&&(K.newLines===q.newLines?T+=K.newLines:T=void 0)}else T!==void 0&&(M[0]==="+"||M[0]===" ")&&T++,x!==void 0&&(M[0]==="-"||M[0]===" ")&&x++}),{oldLines:x,newLines:T}}function Me(C){for(var x=[],T,M,K=0;K<C.length;K++)T=C[K],T.added?M=1:T.removed?M=-1:M=0,x.push([M,T.value]);return x}function te(C){for(var x=[],T=0;T<C.length;T++){var M=C[T];M.added?x.push("<ins>"):M.removed&&x.push("<del>"),x.push(Ne(M.value)),M.added?x.push("</ins>"):M.removed&&x.push("</del>")}return x.join("")}function Ne(C){var x=C;return x=x.replace(/&/g,"&amp;"),x=x.replace(/</g,"&lt;"),x=x.replace(/>/g,"&gt;"),x=x.replace(/"/g,"&quot;"),x}t.Diff=r,t.diffChars=l,t.diffWords=f,t.diffWordsWithSpace=m,t.diffLines=b,t.diffTrimmedLines=k,t.diffSentences=v,t.diffCss=E,t.diffJson=z,t.diffArrays=Z,t.structuredPatch=S,t.createTwoFilesPatch=G,t.createPatch=U,t.applyPatch=O,t.applyPatches=W,t.parsePatch=B,t.merge=L,t.convertChangesToDMP=Me,t.convertChangesToXML=te,t.canonicalize=j,Object.defineProperty(t,"__esModule",{value:!0})})})(rh,rh.exports);var M_=rh.exports;(function(e){var n=Wt&&Wt.__read||function(u,d){var f=typeof Symbol=="function"&&u[Symbol.iterator];if(!f)return u;var m=f.call(u),h,b=[],k;try{for(;(d===void 0||d-- >0)&&!(h=m.next()).done;)b.push(h.value)}catch(g){k={error:g}}finally{try{h&&!h.done&&(f=m.return)&&f.call(m)}finally{if(k)throw k.error}}return b},t=Wt&&Wt.__spread||function(){for(var u=[],d=0;d<arguments.length;d++)u=u.concat(n(arguments[d]));return u};Object.defineProperty(e,"__esModule",{value:!0});var r=M_,o=r,i;(function(u){u[u.DEFAULT=0]="DEFAULT",u[u.ADDED=1]="ADDED",u[u.REMOVED=2]="REMOVED"})(i=e.DiffType||(e.DiffType={}));var a;(function(u){u.CHARS="diffChars",u.WORDS="diffWords",u.WORDS_WITH_SPACE="diffWordsWithSpace",u.LINES="diffLines",u.TRIMMED_LINES="diffTrimmedLines",u.SENTENCES="diffSentences",u.CSS="diffCss"})(a=e.DiffMethod||(e.DiffMethod={}));var l=function(u){var d=u.split(`
`),f=d.every(function(b){return!b});if(f)return d.length===2?[]:(d.pop(),d);var m=d[d.length-1],h=d[0];return m||d.pop(),h||d.shift(),d},s=function(u,d,f){f===void 0&&(f=a.CHARS);var m=o[f](u,d),h={left:[],right:[]};return m.forEach(function(b){var k=b.added,g=b.removed,v=b.value,y={};return k&&(y.type=i.ADDED,y.value=v,h.right.push(y)),g&&(y.type=i.REMOVED,y.value=v,h.left.push(y)),!g&&!k&&(y.type=i.DEFAULT,y.value=v,h.right.push(y),h.left.push(y)),y}),h},c=function(u,d,f,m,h){f===void 0&&(f=!1),m===void 0&&(m=a.CHARS),h===void 0&&(h=0);var b=r.diffLines(u.trimRight(),d.trimRight(),{newlineIsToken:!0,ignoreWhitespace:!1,ignoreCase:!1}),k=h,g=h,v=[],y=0,E=[],_=[],w=function(A,N,R,V,$){var z=l(A);return z.map(function(j,H){var Z={},B={};if(!(_.includes(N+"-"+H)||$&&H!==0)){if(R||V)if(E.includes(y)||E.push(y),V){g+=1,Z.lineNumber=g,Z.type=i.REMOVED,Z.value=j||" ";var F=b[N+1];if(F&&F.added){var O=l(F.value)[H];if(O){var W=w(F.value,N,!0,!1,!0)[0].right,S=W.value,G=W.lineNumber,U=W.type;if(_.push(N+1+"-"+H),B.lineNumber=G,B.type=U,f)B.value=S;else{var I=s(j,S,m);B.value=I.right,Z.value=I.left}}}}else k+=1,B.lineNumber=k,B.type=i.ADDED,B.value=j;else g+=1,k+=1,Z.lineNumber=g,Z.type=i.DEFAULT,Z.value=j,B.lineNumber=k,B.type=i.DEFAULT,B.value=j;return y+=1,{right:B,left:Z}}}).filter(Boolean)};return b.forEach(function(A,N){var R=A.added,V=A.removed,$=A.value;v=t(v,w($,N,R,V))}),{lineInformation:v,diffLines:E}};e.computeLineInformation=c})(n3);var Bp={};function L_(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}function j_(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),e.nonce!==void 0&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n}var D_=function(){function e(t){this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.before=null}var n=e.prototype;return n.insert=function(r){if(this.ctr%(this.isSpeedy?65e3:1)===0){var o=j_(this),i;this.tags.length===0?i=this.before:i=this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(o,i),this.tags.push(o)}var a=this.tags[this.tags.length-1];if(this.isSpeedy){var l=L_(a);try{var s=r.charCodeAt(1)===105&&r.charCodeAt(0)===64;l.insertRule(r,s?0:l.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},n.flush=function(){this.tags.forEach(function(r){return r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}();function $_(e){function n(U,I,Q,oe,L){for(var he=0,Y=0,Oe=0,be=0,Ce,me,en=0,Ze=0,Ee,Se=Ee=Ce=0,xe=0,Pe=0,$e=0,Fe=0,Ue=Q.length,rn=Ue-1,Me,te="",Ne="",C="",x="",T;xe<Ue;){if(me=Q.charCodeAt(xe),xe===rn&&Y+be+Oe+he!==0&&(Y!==0&&(me=Y===47?10:47),be=Oe=he=0,Ue++,rn++),Y+be+Oe+he===0){if(xe===rn&&(0<Pe&&(te=te.replace(f,"")),0<te.trim().length)){switch(me){case 32:case 9:case 59:case 13:case 10:break;default:te+=Q.charAt(xe)}me=59}switch(me){case 123:for(te=te.trim(),Ce=te.charCodeAt(0),Ee=1,Fe=++xe;xe<Ue;){switch(me=Q.charCodeAt(xe)){case 123:Ee++;break;case 125:Ee--;break;case 47:switch(me=Q.charCodeAt(xe+1)){case 42:case 47:e:{for(Se=xe+1;Se<rn;++Se)switch(Q.charCodeAt(Se)){case 47:if(me===42&&Q.charCodeAt(Se-1)===42&&xe+2!==Se){xe=Se+1;break e}break;case 10:if(me===47){xe=Se+1;break e}}xe=Se}}break;case 91:me++;case 40:me++;case 34:case 39:for(;xe++<rn&&Q.charCodeAt(xe)!==me;);}if(Ee===0)break;xe++}switch(Ee=Q.substring(Fe,xe),Ce===0&&(Ce=(te=te.replace(d,"").trim()).charCodeAt(0)),Ce){case 64:switch(0<Pe&&(te=te.replace(f,"")),me=te.charCodeAt(1),me){case 100:case 109:case 115:case 45:Pe=I;break;default:Pe=B}if(Ee=n(I,Pe,Ee,me,L+1),Fe=Ee.length,0<O&&(Pe=t(B,te,$e),T=l(3,Ee,Pe,I,j,z,Fe,me,L,oe),te=Pe.join(""),T!==void 0&&(Fe=(Ee=T.trim()).length)===0&&(me=0,Ee="")),0<Fe)switch(me){case 115:te=te.replace(w,a);case 100:case 109:case 45:Ee=te+"{"+Ee+"}";break;case 107:te=te.replace(v,"$1 $2"),Ee=te+"{"+Ee+"}",Ee=Z===1||Z===2&&i("@"+Ee,3)?"@-webkit-"+Ee+"@"+Ee:"@"+Ee;break;default:Ee=te+Ee,oe===112&&(Ee=(Ne+=Ee,""))}else Ee="";break;default:Ee=n(I,t(I,te,$e),Ee,oe,L+1)}C+=Ee,Ee=$e=Pe=Se=Ce=0,te="",me=Q.charCodeAt(++xe);break;case 125:case 59:if(te=(0<Pe?te.replace(f,""):te).trim(),1<(Fe=te.length))switch(Se===0&&(Ce=te.charCodeAt(0),Ce===45||96<Ce&&123>Ce)&&(Fe=(te=te.replace(" ",":")).length),0<O&&(T=l(1,te,I,U,j,z,Ne.length,oe,L,oe))!==void 0&&(Fe=(te=T.trim()).length)===0&&(te="\0\0"),Ce=te.charCodeAt(0),me=te.charCodeAt(1),Ce){case 0:break;case 64:if(me===105||me===99){x+=te+Q.charAt(xe);break}default:te.charCodeAt(Fe-1)!==58&&(Ne+=o(te,Ce,me,te.charCodeAt(2)))}$e=Pe=Se=Ce=0,te="",me=Q.charCodeAt(++xe)}}switch(me){case 13:case 10:Y===47?Y=0:1+Ce===0&&oe!==107&&0<te.length&&(Pe=1,te+="\0"),0<O*S&&l(0,te,I,U,j,z,Ne.length,oe,L,oe),z=1,j++;break;case 59:case 125:if(Y+be+Oe+he===0){z++;break}default:switch(z++,Me=Q.charAt(xe),me){case 9:case 32:if(be+he+Y===0)switch(en){case 44:case 58:case 9:case 32:Me="";break;default:me!==32&&(Me=" ")}break;case 0:Me="\\0";break;case 12:Me="\\f";break;case 11:Me="\\v";break;case 38:be+Y+he===0&&(Pe=$e=1,Me="\f"+Me);break;case 108:if(be+Y+he+H===0&&0<Se)switch(xe-Se){case 2:en===112&&Q.charCodeAt(xe-3)===58&&(H=en);case 8:Ze===111&&(H=Ze)}break;case 58:be+Y+he===0&&(Se=xe);break;case 44:Y+Oe+be+he===0&&(Pe=1,Me+="\r");break;case 34:case 39:Y===0&&(be=be===me?0:be===0?me:be);break;case 91:be+Y+Oe===0&&he++;break;case 93:be+Y+Oe===0&&he--;break;case 41:be+Y+he===0&&Oe--;break;case 40:if(be+Y+he===0){if(Ce===0)switch(2*en+3*Ze){case 533:break;default:Ce=1}Oe++}break;case 64:Y+Oe+be+he+Se+Ee===0&&(Ee=1);break;case 42:case 47:if(!(0<be+he+Oe))switch(Y){case 0:switch(2*me+3*Q.charCodeAt(xe+1)){case 235:Y=47;break;case 220:Fe=xe,Y=42}break;case 42:me===47&&en===42&&Fe+2!==xe&&(Q.charCodeAt(Fe+2)===33&&(Ne+=Q.substring(Fe,xe+1)),Me="",Y=0)}}Y===0&&(te+=Me)}Ze=en,en=me,xe++}if(Fe=Ne.length,0<Fe){if(Pe=I,0<O&&(T=l(2,Ne,Pe,U,j,z,Fe,oe,L,oe),T!==void 0&&(Ne=T).length===0))return x+Ne+C;if(Ne=Pe.join(",")+"{"+Ne+"}",Z*H!==0){switch(Z!==2||i(Ne,2)||(H=0),H){case 111:Ne=Ne.replace(E,":-moz-$1")+Ne;break;case 112:Ne=Ne.replace(y,"::-webkit-input-$1")+Ne.replace(y,"::-moz-$1")+Ne.replace(y,":-ms-input-$1")+Ne}H=0}}return x+Ne+C}function t(U,I,Q){var oe=I.trim().split(k);I=oe;var L=oe.length,he=U.length;switch(he){case 0:case 1:var Y=0;for(U=he===0?"":U[0]+" ";Y<L;++Y)I[Y]=r(U,I[Y],Q).trim();break;default:var Oe=Y=0;for(I=[];Y<L;++Y)for(var be=0;be<he;++be)I[Oe++]=r(U[be]+" ",oe[Y],Q).trim()}return I}function r(U,I,Q){var oe=I.charCodeAt(0);switch(33>oe&&(oe=(I=I.trim()).charCodeAt(0)),oe){case 38:return I.replace(g,"$1"+U.trim());case 58:return U.trim()+I.replace(g,"$1"+U.trim());default:if(0<1*Q&&0<I.indexOf("\f"))return I.replace(g,(U.charCodeAt(0)===58?"":"$1")+U.trim())}return U+I}function o(U,I,Q,oe){var L=U+";",he=2*I+3*Q+4*oe;if(he===944){U=L.indexOf(":",9)+1;var Y=L.substring(U,L.length-1).trim();return Y=L.substring(0,U).trim()+Y+";",Z===1||Z===2&&i(Y,1)?"-webkit-"+Y+Y:Y}if(Z===0||Z===2&&!i(L,1))return L;switch(he){case 1015:return L.charCodeAt(10)===97?"-webkit-"+L+L:L;case 951:return L.charCodeAt(3)===116?"-webkit-"+L+L:L;case 963:return L.charCodeAt(5)===110?"-webkit-"+L+L:L;case 1009:if(L.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+L+L;case 978:return"-webkit-"+L+"-moz-"+L+L;case 1019:case 983:return"-webkit-"+L+"-moz-"+L+"-ms-"+L+L;case 883:if(L.charCodeAt(8)===45)return"-webkit-"+L+L;if(0<L.indexOf("image-set(",11))return L.replace($,"$1-webkit-$2")+L;break;case 932:if(L.charCodeAt(4)===45)switch(L.charCodeAt(5)){case 103:return"-webkit-box-"+L.replace("-grow","")+"-webkit-"+L+"-ms-"+L.replace("grow","positive")+L;case 115:return"-webkit-"+L+"-ms-"+L.replace("shrink","negative")+L;case 98:return"-webkit-"+L+"-ms-"+L.replace("basis","preferred-size")+L}return"-webkit-"+L+"-ms-"+L+L;case 964:return"-webkit-"+L+"-ms-flex-"+L+L;case 1023:if(L.charCodeAt(8)!==99)break;return Y=L.substring(L.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+Y+"-webkit-"+L+"-ms-flex-pack"+Y+L;case 1005:return h.test(L)?L.replace(m,":-webkit-")+L.replace(m,":-moz-")+L:L;case 1e3:switch(Y=L.substring(13).trim(),I=Y.indexOf("-")+1,Y.charCodeAt(0)+Y.charCodeAt(I)){case 226:Y=L.replace(_,"tb");break;case 232:Y=L.replace(_,"tb-rl");break;case 220:Y=L.replace(_,"lr");break;default:return L}return"-webkit-"+L+"-ms-"+Y+L;case 1017:if(L.indexOf("sticky",9)===-1)break;case 975:switch(I=(L=U).length-10,Y=(L.charCodeAt(I)===33?L.substring(0,I):L).substring(U.indexOf(":",7)+1).trim(),he=Y.charCodeAt(0)+(Y.charCodeAt(7)|0)){case 203:if(111>Y.charCodeAt(8))break;case 115:L=L.replace(Y,"-webkit-"+Y)+";"+L;break;case 207:case 102:L=L.replace(Y,"-webkit-"+(102<he?"inline-":"")+"box")+";"+L.replace(Y,"-webkit-"+Y)+";"+L.replace(Y,"-ms-"+Y+"box")+";"+L}return L+";";case 938:if(L.charCodeAt(5)===45)switch(L.charCodeAt(6)){case 105:return Y=L.replace("-items",""),"-webkit-"+L+"-webkit-box-"+Y+"-ms-flex-"+Y+L;case 115:return"-webkit-"+L+"-ms-flex-item-"+L.replace(N,"")+L;default:return"-webkit-"+L+"-ms-flex-line-pack"+L.replace("align-content","").replace(N,"")+L}break;case 973:case 989:if(L.charCodeAt(3)!==45||L.charCodeAt(4)===122)break;case 931:case 953:if(V.test(U)===!0)return(Y=U.substring(U.indexOf(":")+1)).charCodeAt(0)===115?o(U.replace("stretch","fill-available"),I,Q,oe).replace(":fill-available",":stretch"):L.replace(Y,"-webkit-"+Y)+L.replace(Y,"-moz-"+Y.replace("fill-",""))+L;break;case 962:if(L="-webkit-"+L+(L.charCodeAt(5)===102?"-ms-"+L:"")+L,Q+oe===211&&L.charCodeAt(13)===105&&0<L.indexOf("transform",10))return L.substring(0,L.indexOf(";",27)+1).replace(b,"$1-webkit-$2")+L}return L}function i(U,I){var Q=U.indexOf(I===1?":":"{"),oe=U.substring(0,I!==3?Q:10);return Q=U.substring(Q+1,U.length-1),W(I!==2?oe:oe.replace(R,"$1"),Q,I)}function a(U,I){var Q=o(I,I.charCodeAt(0),I.charCodeAt(1),I.charCodeAt(2));return Q!==I+";"?Q.replace(A," or ($1)").substring(4):"("+I+")"}function l(U,I,Q,oe,L,he,Y,Oe,be,Ce){for(var me=0,en=I,Ze;me<O;++me)switch(Ze=F[me].call(u,U,en,Q,oe,L,he,Y,Oe,be,Ce)){case void 0:case!1:case!0:case null:break;default:en=Ze}if(en!==I)return en}function s(U){switch(U){case void 0:case null:O=F.length=0;break;default:if(typeof U=="function")F[O++]=U;else if(typeof U=="object")for(var I=0,Q=U.length;I<Q;++I)s(U[I]);else S=!!U|0}return s}function c(U){return U=U.prefix,U!==void 0&&(W=null,U?typeof U!="function"?Z=1:(Z=2,W=U):Z=0),c}function u(U,I){var Q=U;if(33>Q.charCodeAt(0)&&(Q=Q.trim()),G=Q,Q=[G],0<O){var oe=l(-1,I,Q,Q,j,z,0,0,0,0);oe!==void 0&&typeof oe=="string"&&(I=oe)}var L=n(B,Q,I,0,0);return 0<O&&(oe=l(-2,L,Q,Q,j,z,L.length,0,0,0),oe!==void 0&&(L=oe)),G="",H=0,z=j=1,L}var d=/^\0+/g,f=/[\0\r\f]/g,m=/: */g,h=/zoo|gra/,b=/([,: ])(transform)/g,k=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,E=/:(read-only)/g,_=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,A=/([\s\S]*?);/g,N=/-self|flex-/g,R=/[^]*?(:[rp][el]a[\w-]+)[^]*/,V=/stretch|:\s*\w+\-(?:conte|avail)/,$=/([^-])(image-set\()/,z=1,j=1,H=0,Z=1,B=[],F=[],O=0,W=null,S=0,G="";return u.use=s,u.set=c,e!==void 0&&c(e),u}var oh="/*|*/",B_=oh+"}";function z_(e){e&&du.current.insert(e+"}")}var du={current:null},H_=function(n,t,r,o,i,a,l,s,c,u){switch(n){case 1:{switch(t.charCodeAt(0)){case 64:return du.current.insert(t+";"),"";case 108:if(t.charCodeAt(2)===98)return""}break}case 2:{if(s===0)return t+oh;break}case 3:switch(s){case 102:case 112:return du.current.insert(r[0]+t),"";default:return t+(u===0?oh:"")}case-2:t.split(B_).forEach(z_)}},U_=function(n){n===void 0&&(n={});var t=n.key||"css",r;n.prefix!==void 0&&(r={prefix:n.prefix});var o=new $_(r),i={},a;{a=n.container||document.head;var l=document.querySelectorAll("style[data-emotion-"+t+"]");Array.prototype.forEach.call(l,function(u){var d=u.getAttribute("data-emotion-"+t);d.split(" ").forEach(function(f){i[f]=!0}),u.parentNode!==a&&a.appendChild(u)})}var s;o.use(n.stylisPlugins)(H_),s=function(d,f,m,h){var b=f.name;du.current=m,o(d,f.styles),h&&(c.inserted[b]=!0)};var c={key:t,sheet:new D_({key:t,container:a,nonce:n.nonce,speedy:n.speedy}),nonce:n.nonce,inserted:i,registered:{},insert:s};return c};function V_(e){var n={};return function(t){return n[t]===void 0&&(n[t]=e(t)),n[t]}}var W_=/[A-Z]|^ms/g,X_=/_EMO_([^_]+?)_([^]*?)_EMO_/g,t3=function(n){return n.charCodeAt(1)===45},r1=function(n){return n!=null&&typeof n!="boolean"},hf=V_(function(e){return t3(e)?e:e.replace(W_,"-$&").toLowerCase()}),o1=function(n,t){switch(n){case"animation":case"animationName":if(typeof t=="string")return t.replace(X_,function(r,o,i){return ko={name:o,styles:i,next:ko},o})}return l4[n]!==1&&!t3(n)&&typeof t=="number"&&t!==0?t+"px":t};function fu(e,n,t,r){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return ko={name:t.name,styles:t.styles,next:ko},t.name;if(t.styles!==void 0){var o=t.next;if(o!==void 0)for(;o!==void 0;)ko={name:o.name,styles:o.styles,next:ko},o=o.next;var i=t.styles+";";return i}return G_(e,n,t)}}if(n==null)return t;var a=n[t];return a!==void 0&&!r?a:t}function G_(e,n,t){var r="";if(Array.isArray(t))for(var o=0;o<t.length;o++)r+=fu(e,n,t[o],!1);else for(var i in t){var a=t[i];if(typeof a!="object")n!=null&&n[a]!==void 0?r+=i+"{"+n[a]+"}":r1(a)&&(r+=hf(i)+":"+o1(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(n==null||n[a[0]]===void 0))for(var l=0;l<a.length;l++)r1(a[l])&&(r+=hf(i)+":"+o1(i,a[l])+";");else{var s=fu(e,n,a,!1);switch(i){case"animation":case"animationName":{r+=hf(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var i1=/label:\s*([^\s;\n{]+)\s*;/g,ko,pf=function(n,t,r){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var o=!0,i="";ko=void 0;var a=n[0];a==null||a.raw===void 0?(o=!1,i+=fu(r,t,a,!1)):i+=a[0];for(var l=1;l<n.length;l++)i+=fu(r,t,n[l],i.charCodeAt(i.length-1)===46),o&&(i+=a[l]);i1.lastIndex=0;for(var s="",c;(c=i1.exec(i))!==null;)s+="-"+c[1];var u=ha(i)+s;return{name:u,styles:i,next:ko}};function r3(e,n,t){var r="";return t.split(" ").forEach(function(o){e[o]!==void 0?n.push(e[o]):r+=o+" "}),r}var Z_=function(n,t,r){var o=n.key+"-"+t.name;if(n.registered[o]===void 0&&(n.registered[o]=t.styles),n.inserted[t.name]===void 0){var i=t;do n.insert("."+o,i,n.sheet,!0),i=i.next;while(i!==void 0)}};function a1(e,n){if(e.inserted[n.name]===void 0)return e.insert("",n,e.sheet,!0)}function l1(e,n,t){var r=[],o=r3(e,r,t);return r.length<2?t:o+n(r)}var K_=function(n){var t=U_(n);t.sheet.speedy=function(l){this.isSpeedy=l},t.compat=!0;var r=function(){for(var s=arguments.length,c=new Array(s),u=0;u<s;u++)c[u]=arguments[u];var d=pf(c,t.registered,void 0);return Z_(t,d),t.key+"-"+d.name},o=function(){for(var s=arguments.length,c=new Array(s),u=0;u<s;u++)c[u]=arguments[u];var d=pf(c,t.registered),f="animation-"+d.name;return a1(t,{name:d.name,styles:"@keyframes "+f+"{"+d.styles+"}"}),f},i=function(){for(var s=arguments.length,c=new Array(s),u=0;u<s;u++)c[u]=arguments[u];var d=pf(c,t.registered);a1(t,d)},a=function(){for(var s=arguments.length,c=new Array(s),u=0;u<s;u++)c[u]=arguments[u];return l1(t.registered,r,q_(c))};return{css:r,cx:a,injectGlobal:i,keyframes:o,hydrate:function(s){s.forEach(function(c){t.inserted[c]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:r3.bind(null,t.registered),merge:l1.bind(null,t.registered,r)}},q_=function e(n){for(var t="",r=0;r<n.length;r++){var o=n[r];if(o!=null){var i=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))i=e(o);else{i="";for(var a in o)o[a]&&a&&(i&&(i+=" "),i+=a)}break}default:i=o}i&&(t&&(t+=" "),t+=i)}}return t},$r=K_(),Q_=$r.flush,Y_=$r.hydrate,J_=$r.cx,eA=$r.merge,nA=$r.getRegisteredStyles,tA=$r.injectGlobal,rA=$r.keyframes,oA=$r.css,iA=$r.sheet,aA=$r.cache;const lA=Object.freeze(Object.defineProperty({__proto__:null,cache:aA,css:oA,cx:J_,flush:Q_,getRegisteredStyles:nA,hydrate:Y_,injectGlobal:tA,keyframes:rA,merge:eA,sheet:iA},Symbol.toStringTag,{value:"Module"})),sA=tv(lA);var qi=Wt&&Wt.__assign||function(){return qi=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},qi.apply(this,arguments)},cA=Wt&&Wt.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};Object.defineProperty(Bp,"__esModule",{value:!0});var Mn=sA;Bp.default=function(e,n){var t,r,o,i,a,l,s;n===void 0&&(n=!1);var c=e.variables,u=c===void 0?{}:c,d=cA(e,["variables"]),f={light:qi({diffViewerBackground:"#fff",diffViewerColor:"212529",addedBackground:"#e6ffed",addedColor:"#24292e",removedBackground:"#ffeef0",removedColor:"#24292e",wordAddedBackground:"#acf2bd",wordRemovedBackground:"#fdb8c0",addedGutterBackground:"#cdffd8",removedGutterBackground:"#ffdce0",gutterBackground:"#f7f7f7",gutterBackgroundDark:"#f3f1f1",highlightBackground:"#fffbdd",highlightGutterBackground:"#fff5b1",codeFoldGutterBackground:"#dbedff",codeFoldBackground:"#f1f8ff",emptyLineBackground:"#fafbfc",gutterColor:"#212529",addedGutterColor:"#212529",removedGutterColor:"#212529",codeFoldContentColor:"#212529",diffViewerTitleBackground:"#fafbfc",diffViewerTitleColor:"#212529",diffViewerTitleBorderColor:"#eee"},u.light||{}),dark:qi({diffViewerBackground:"#2e303c",diffViewerColor:"#FFF",addedBackground:"#044B53",addedColor:"white",removedBackground:"#632F34",removedColor:"white",wordAddedBackground:"#055d67",wordRemovedBackground:"#7d383f",addedGutterBackground:"#034148",removedGutterBackground:"#632b30",gutterBackground:"#2c2f3a",gutterBackgroundDark:"#262933",highlightBackground:"#2a3967",highlightGutterBackground:"#2d4077",codeFoldGutterBackground:"#21232b",codeFoldBackground:"#262831",emptyLineBackground:"#363946",gutterColor:"#464c67",addedGutterColor:"#8c8c8c",removedGutterColor:"#8c8c8c",codeFoldContentColor:"#555a7b",diffViewerTitleBackground:"#2f323e",diffViewerTitleColor:"#555a7b",diffViewerTitleBorderColor:"#353846"},u.dark||{})},m=n?f.dark:f.light,h=Mn.css({width:"100%",label:"content"}),b=Mn.css((t={},t["."+h]={width:"50%"},t.label="split-view",t)),k=Mn.css({width:"100%",background:m.diffViewerBackground,pre:{margin:0,whiteSpace:"pre-wrap",lineHeight:"25px"},label:"diff-container",borderCollapse:"collapse"}),g=Mn.css({color:m.codeFoldContentColor,label:"code-fold-content"}),v=Mn.css({color:m.diffViewerColor,label:"content-text"}),y=Mn.css((r={background:m.diffViewerTitleBackground,padding:10,borderBottom:"1px solid "+m.diffViewerTitleBorderColor,label:"title-block",":last-child":{borderLeft:"1px solid "+m.diffViewerTitleBorderColor}},r["."+v]={color:m.diffViewerTitleColor},r)),E=Mn.css({color:m.gutterColor,label:"line-number"}),_=Mn.css((o={background:m.removedBackground,color:m.removedColor,pre:{color:m.removedColor}},o["."+E]={color:m.removedGutterColor},o.label="diff-removed",o)),w=Mn.css((i={background:m.addedBackground,color:m.addedColor,pre:{color:m.addedColor}},i["."+E]={color:m.addedGutterColor},i.label="diff-added",i)),A=Mn.css({padding:2,display:"inline-flex",borderRadius:1,label:"word-diff"}),N=Mn.css({background:m.wordAddedBackground,label:"word-added"}),R=Mn.css({background:m.wordRemovedBackground,label:"word-removed"}),V=Mn.css({backgroundColor:m.codeFoldGutterBackground,label:"code-fold-gutter"}),$=Mn.css({backgroundColor:m.codeFoldBackground,height:40,fontSize:14,fontWeight:700,label:"code-fold",a:{textDecoration:"underline !important",cursor:"pointer",pre:{display:"inline"}}}),z=Mn.css({backgroundColor:m.emptyLineBackground,label:"empty-line"}),j=Mn.css((a={width:25,paddingLeft:10,paddingRight:10,userSelect:"none",label:"marker"},a["&."+w]={pre:{color:m.addedColor}},a["&."+_]={pre:{color:m.removedColor}},a)),H=Mn.css((l={background:m.highlightBackground,label:"highlighted-line"},l["."+N+", ."+R]={backgroundColor:"initial"},l)),Z=Mn.css({label:"highlighted-gutter"}),B=Mn.css((s={userSelect:"none",minWidth:50,padding:"0 10px",label:"gutter",textAlign:"right",background:m.gutterBackground,"&:hover":{cursor:"pointer",background:m.gutterBackgroundDark,pre:{opacity:1}},pre:{opacity:.5}},s["&."+w]={background:m.addedGutterBackground},s["&."+_]={background:m.removedGutterBackground},s["&."+Z]={background:m.highlightGutterBackground,"&:hover":{background:m.highlightGutterBackground}},s)),F=Mn.css({"&:hover":{background:m.gutterBackground,cursor:"initial"},label:"empty-gutter"}),O=Mn.css({verticalAlign:"baseline",label:"line"}),W={diffContainer:k,diffRemoved:_,diffAdded:w,splitView:b,marker:j,highlightedGutter:Z,highlightedLine:H,gutter:B,line:O,wordDiff:A,wordAdded:N,wordRemoved:R,codeFoldGutter:V,codeFold:$,emptyGutter:F,emptyLine:z,lineNumber:E,contentText:v,content:h,codeFoldContent:g,titleBlock:y},S=Object.keys(d).reduce(function(G,U){var I;return qi({},G,(I={},I[U]=Mn.css(d[U]),I))},{});return Object.keys(W).reduce(function(G,U){var I;return qi({},G,(I={},I[U]=S[U]?Mn.cx(W[U],S[U]):W[U],I))},{})};var s1=Number.isNaN||function(n){return typeof n=="number"&&n!==n};function uA(e,n){return!!(e===n||s1(e)&&s1(n))}function dA(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(!uA(e[t],n[t]))return!1;return!0}function fA(e,n){n===void 0&&(n=dA);var t,r=[],o,i=!1;function a(){for(var l=[],s=0;s<arguments.length;s++)l[s]=arguments[s];return i&&t===this&&n(l,r)||(o=e.apply(this,l),i=!0,t=this,r=l),o}return a}const mA=Object.freeze(Object.defineProperty({__proto__:null,default:fA},Symbol.toStringTag,{value:"Module"})),hA=tv(mA);(function(e){var n=Wt&&Wt.__extends||function(){var d=function(f,m){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,b){h.__proto__=b}||function(h,b){for(var k in b)b.hasOwnProperty(k)&&(h[k]=b[k])},d(f,m)};return function(f,m){d(f,m);function h(){this.constructor=f}f.prototype=m===null?Object.create(m):(h.prototype=m.prototype,new h)}}();Object.defineProperty(e,"__esModule",{value:!0});var t=p,r=F_,o=My,i=n3;e.DiffMethod=i.DiffMethod;var a=Bp,l=hA,s=l.default||l,c;(function(d){d.LEFT="L",d.RIGHT="R"})(c=e.LineNumberPrefix||(e.LineNumberPrefix={}));var u=function(d){n(f,d);function f(m){var h=d.call(this,m)||this;return h.resetCodeBlocks=function(){return h.state.expandedBlocks.length>0?(h.setState({expandedBlocks:[]}),!0):!1},h.onBlockExpand=function(b){var k=h.state.expandedBlocks.slice();k.push(b),h.setState({expandedBlocks:k})},h.computeStyles=s(a.default),h.onLineNumberClickProxy=function(b){return h.props.onLineNumberClick?function(k){return h.props.onLineNumberClick(b,k)}:function(){}},h.renderWordDiff=function(b,k){return b.map(function(g,v){var y;return t.createElement("span",{key:v,className:o.default(h.styles.wordDiff,(y={},y[h.styles.wordAdded]=g.type===i.DiffType.ADDED,y[h.styles.wordRemoved]=g.type===i.DiffType.REMOVED,y))},k?k(g.value):g.value)})},h.renderLine=function(b,k,g,v,y,E){var _,w,A,N,R=g+"-"+b,V=E+"-"+y,$=h.props.highlightLines.includes(R)||h.props.highlightLines.includes(V),z=k===i.DiffType.ADDED,j=k===i.DiffType.REMOVED,H;return Array.isArray(v)?H=h.renderWordDiff(v,h.props.renderContent):h.props.renderContent?H=h.props.renderContent(v):H=v,t.createElement(t.Fragment,null,!h.props.hideLineNumbers&&t.createElement("td",{onClick:b&&h.onLineNumberClickProxy(R),className:o.default(h.styles.gutter,(_={},_[h.styles.emptyGutter]=!b,_[h.styles.diffAdded]=z,_[h.styles.diffRemoved]=j,_[h.styles.highlightedGutter]=$,_))},t.createElement("pre",{className:h.styles.lineNumber},b)),!h.props.splitView&&!h.props.hideLineNumbers&&t.createElement("td",{onClick:y&&h.onLineNumberClickProxy(V),className:o.default(h.styles.gutter,(w={},w[h.styles.emptyGutter]=!y,w[h.styles.diffAdded]=z,w[h.styles.diffRemoved]=j,w[h.styles.highlightedGutter]=$,w))},t.createElement("pre",{className:h.styles.lineNumber},y)),t.createElement("td",{className:o.default(h.styles.marker,(A={},A[h.styles.emptyLine]=!H,A[h.styles.diffAdded]=z,A[h.styles.diffRemoved]=j,A[h.styles.highlightedLine]=$,A))},t.createElement("pre",null,z&&"+",j&&"-")),t.createElement("td",{className:o.default(h.styles.content,(N={},N[h.styles.emptyLine]=!H,N[h.styles.diffAdded]=z,N[h.styles.diffRemoved]=j,N[h.styles.highlightedLine]=$,N))},t.createElement("pre",{className:h.styles.contentText},H)))},h.renderSplitView=function(b,k){var g=b.left,v=b.right;return t.createElement("tr",{key:k,className:h.styles.line},h.renderLine(g.lineNumber,g.type,c.LEFT,g.value),h.renderLine(v.lineNumber,v.type,c.RIGHT,v.value))},h.renderInlineView=function(b,k){var g=b.left,v=b.right,y;return g.type===i.DiffType.REMOVED&&v.type===i.DiffType.ADDED?t.createElement(t.Fragment,{key:k},t.createElement("tr",{className:h.styles.line},h.renderLine(g.lineNumber,g.type,c.LEFT,g.value,null)),t.createElement("tr",{className:h.styles.line},h.renderLine(null,v.type,c.RIGHT,v.value,v.lineNumber))):(g.type===i.DiffType.REMOVED&&(y=h.renderLine(g.lineNumber,g.type,c.LEFT,g.value,null)),g.type===i.DiffType.DEFAULT&&(y=h.renderLine(g.lineNumber,g.type,c.LEFT,g.value,v.lineNumber,c.RIGHT)),v.type===i.DiffType.ADDED&&(y=h.renderLine(null,v.type,c.RIGHT,v.value,v.lineNumber)),t.createElement("tr",{key:k,className:h.styles.line},y))},h.onBlockClickProxy=function(b){return function(){return h.onBlockExpand(b)}},h.renderSkippedLineIndicator=function(b,k,g,v){var y,E=h.props,_=E.hideLineNumbers,w=E.splitView,A=h.props.codeFoldMessageRenderer?h.props.codeFoldMessageRenderer(b,g,v):t.createElement("pre",{className:h.styles.codeFoldContent},"Expand ",b," lines ..."),N=t.createElement("td",null,t.createElement("a",{onClick:h.onBlockClickProxy(k),tabIndex:0},A)),R=!w&&!_;return t.createElement("tr",{key:g+"-"+v,className:h.styles.codeFold},!_&&t.createElement("td",{className:h.styles.codeFoldGutter}),t.createElement("td",{className:o.default((y={},y[h.styles.codeFoldGutter]=R,y))}),R?t.createElement(t.Fragment,null,t.createElement("td",null),N):t.createElement(t.Fragment,null,N,t.createElement("td",null)),t.createElement("td",null),t.createElement("td",null))},h.renderDiff=function(){var b=h.props,k=b.oldValue,g=b.newValue,v=b.splitView,y=b.disableWordDiff,E=b.compareMethod,_=b.linesOffset,w=i.computeLineInformation(k,g,y,E,_),A=w.lineInformation,N=w.diffLines,R=h.props.extraLinesSurroundingDiff<0?0:h.props.extraLinesSurroundingDiff,V=[];return A.map(function($,z){var j=N[0],H=j-z;if(h.props.showDiffOnly&&(H===-R&&(V=[],N.shift()),$.left.type===i.DiffType.DEFAULT&&(H>R||typeof j>"u")&&!h.state.expandedBlocks.includes(j)))return V.push(z+1),z===A.length-1&&V.length>1?h.renderSkippedLineIndicator(V.length,j,$.left.lineNumber,$.right.lineNumber):null;var Z=v?h.renderSplitView($,z):h.renderInlineView($,z);if(H===R&&V.length>0){var B=V.length;return V=[],t.createElement(t.Fragment,{key:z},h.renderSkippedLineIndicator(B,j,$.left.lineNumber,$.right.lineNumber),Z)}return Z})},h.render=function(){var b,k=h.props,g=k.oldValue,v=k.newValue,y=k.useDarkTheme,E=k.leftTitle,_=k.rightTitle,w=k.splitView,A=k.hideLineNumbers;if(typeof g!="string"||typeof v!="string")throw Error('"oldValue" and "newValue" should be strings');h.styles=h.computeStyles(h.props.styles,y);var N=h.renderDiff(),R=A?2:3,V=A?2:4,$=(E||_)&&t.createElement("tr",null,t.createElement("td",{colSpan:w?R:V,className:h.styles.titleBlock},t.createElement("pre",{className:h.styles.contentText},E)),w&&t.createElement("td",{colSpan:R,className:h.styles.titleBlock},t.createElement("pre",{className:h.styles.contentText},_)));return t.createElement("table",{className:o.default(h.styles.diffContainer,(b={},b[h.styles.splitView]=w,b))},t.createElement("tbody",null,$,N))},h.state={expandedBlocks:[]},h}return f.defaultProps={oldValue:"",newValue:"",splitView:!0,highlightLines:[],disableWordDiff:!1,compareMethod:i.DiffMethod.CHARS,styles:{},hideLineNumbers:!1,extraLinesSurroundingDiff:3,showDiffOnly:!0,useDarkTheme:!1,linesOffset:0},f.propTypes={oldValue:r.string.isRequired,newValue:r.string.isRequired,splitView:r.bool,disableWordDiff:r.bool,compareMethod:r.oneOf(Object.values(i.DiffMethod)),renderContent:r.func,onLineNumberClick:r.func,extraLinesSurroundingDiff:r.number,styles:r.object,hideLineNumbers:r.bool,showDiffOnly:r.bool,highlightLines:r.arrayOf(r.string),leftTitle:r.oneOfType([r.string,r.element]),rightTitle:r.oneOfType([r.string,r.element]),linesOffset:r.number},f}(t.Component);e.default=u})($p);const pA=Jl($p),o3=e=>{const n=new Date(e);return new Intl.DateTimeFormat("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(n)};function gA({commit:e}){const n=t=>{window.open(t,"_blank","noopener,noreferrer")};return re.jsxs("div",{className:"cursor-pointer border border-white  hover:shadow hover:border-slate-300 rounded-8 px-2 pb-2",onClick:()=>n(e.url),children:[re.jsxs("div",{children:[re.jsx("div",{className:"text-mono-14N-5 text-slate-600",children:o3(e.committedDate)}),re.jsx("div",{className:"text-std-16M-7",children:e.message})]}),re.jsx("div",{className:"space-y-2 pt-2",children:e.files.map(t=>re.jsxs("div",{className:"border rounded-8",children:[re.jsx("div",{className:"text-mono-14N-5 text-slate-600 px-2 py-1",children:t.filename}),re.jsx("div",{children:re.jsx(pA,{oldValue:t.patch.split(`
`).filter(r=>r.startsWith("-")).join(`
`),newValue:t.patch.split(`
`).filter(r=>r.startsWith("+")).join(`
`),splitView:!0,hideLineNumbers:!0,compareMethod:$p.DiffMethod.WORDS,styles:{variables:{light:{diffViewerBackground:"#f7f7f7"}}}})})]},t.sha))})]})}var i3={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c1=Ye.createContext&&Ye.createContext(i3),vA=["attr","size","title"];function bA(e,n){if(e==null)return{};var t=yA(e,n),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function yA(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function mu(){return mu=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},mu.apply(this,arguments)}function u1(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function hu(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?u1(Object(t),!0).forEach(function(r){wA(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u1(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function wA(e,n,t){return n=CA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function CA(e){var n=SA(e,"string");return typeof n=="symbol"?n:n+""}function SA(e,n){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function a3(e){return e&&e.map((n,t)=>Ye.createElement(n.tag,hu({key:t},n.attr),a3(n.child)))}function l3(e){return n=>Ye.createElement(kA,mu({attr:hu({},e.attr)},n),a3(e.child))}function kA(e){var n=t=>{var{attr:r,size:o,title:i}=e,a=bA(e,vA),l=o||t.size||"1em",s;return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),Ye.createElement("svg",mu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,a,{className:s,style:hu(hu({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&Ye.createElement("title",null,i),e.children)};return c1!==void 0?Ye.createElement(c1.Consumer,null,t=>n(t)):n(i3)}function EA(e){return l3({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(e)}const ui=({url:e,text:n})=>{const t=()=>{const r=window.open(e,"_blank","noopener,noreferrer");r&&(r.opener=null)};return re.jsx(rd,{type:"primary",shape:"round",onClick:t,icon:re.jsx(EA,{}),children:n})};function xA(){const n=U5.sort((t,r)=>new Date(r.committedDate).getTime()-new Date(t.committedDate).getTime()).map(t=>({children:re.jsx(gA,{commit:t})}));return re.jsxs(re.Fragment,{children:[re.jsxs("div",{className:"bg-white rounded-8 mb-4 flex flex-row justify-center items-center space-x-4 py-2",children:[re.jsx(ui,{url:"https://manifest.takahiroanno.com/",text:"安野たかひろ：都知事選2024マニフェスト"}),re.jsx(ui,{url:"https://github.com/takahiroanno2024/election2024/blob/main/docs/manual_pull_request.md",text:"変更提案(Pull Request)の仕方はこちら"})]}),re.jsxs("div",{className:"p-4 bg-white rounded-8",children:[re.jsx("div",{className:"text-std-20B-5 pb-8",children:"マニュフェストの変更履歴"}),re.jsx(Qw,{items:n})]})]})}const Sc=[{title:"学園都市的な観点を政策に盛り込んでみるといいかなと思いました。",createdAt:"2024-06-21T08:52:19Z",url:"https://github.com/takahiroanno2024/election2024/issues/5",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:1},reactions:{totalCount:18},labels:{nodes:[{name:"経済"}]}},{title:"これからの感染症対応",createdAt:"2024-06-21T09:01:51Z",url:"https://github.com/takahiroanno2024/election2024/issues/6",state:"CLOSED",body:`## 政策ビジョン\r
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
`,comments:{totalCount:24},reactions:{totalCount:27},labels:{nodes:[{name:"医療・防災"}]}},{title:"生活保護者に対しての産業雇用について",createdAt:"2024-06-21T09:25:05Z",url:"https://github.com/takahiroanno2024/election2024/issues/7",state:"OPEN",body:`## 政策ビジョン\r
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
特にありません。`,comments:{totalCount:2},reactions:{totalCount:6},labels:{nodes:[{name:"経済"}]}},{title:"公的な情報発信用のWEBサイトやモバイルアプリに都政に対する意見表明への導線を追加してほしい",createdAt:"2024-06-21T09:30:17Z",url:"https://github.com/takahiroanno2024/election2024/issues/8",state:"CLOSED",body:`## 政策ビジョン\r
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
参加型予算編成の情報を含め、都政の改善のためのフィードバック先の情報がない、または簡単に見つけられない。`,comments:{totalCount:2},reactions:{totalCount:6},labels:{nodes:[{name:"民主主義"}]}},{title:" ギガスクールで配布しているPCをもっと現実的なスペックやメーカのものに入れ替えてほしい",createdAt:"2024-06-21T09:54:12Z",url:"https://github.com/takahiroanno2024/election2024/issues/10",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:10},reactions:{totalCount:14},labels:{nodes:[{name:"教育・子育て"}]}},{title:"教育委員会改革",createdAt:"2024-06-21T10:00:46Z",url:"https://github.com/takahiroanno2024/election2024/issues/11",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:1},reactions:{totalCount:9},labels:{nodes:[{name:"教育・子育て"}]}},{title:"公共事業における住民意見の集約について",createdAt:"2024-06-21T10:08:19Z",url:"https://github.com/takahiroanno2024/election2024/issues/13",state:"OPEN",body:`## 政策ビジョン\r
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
公共事業の進め方等を見てきたこと。`,comments:{totalCount:1},reactions:{totalCount:1},labels:{nodes:[{name:"行政"}]}},{title:"生成AIの開発・利活用を通じて精神的・文化的・創作活動を振興するための経済政策",createdAt:"2024-06-21T10:47:48Z",url:"https://github.com/takahiroanno2024/election2024/issues/20",state:"OPEN",body:`## 政策ビジョン\r
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
また、クリエイティブ側面での生成AIの利活用を促進し、文化的・精神的に優れた創作活動を推進すべきです。`,comments:{totalCount:0},reactions:{totalCount:2},labels:{nodes:[{name:"経済"}]}},{title:"都立小中高からのブラック校則・異常な生活指導の撲滅",createdAt:"2024-06-21T11:06:43Z",url:"https://github.com/takahiroanno2024/election2024/issues/25",state:"OPEN",body:`## 政策ビジョン\r
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
- [都立高等学校等における校則等に関する取組状況について](https://www.kyoiku.metro.tokyo.lg.jp/press/press_release/2022/release20220310_03.html)`,comments:{totalCount:6},reactions:{totalCount:19},labels:{nodes:[{name:"教育・子育て"}]}},{title:"少子化対策として、有配偶人口を増やす",createdAt:"2024-06-21T11:25:54Z",url:"https://github.com/takahiroanno2024/election2024/issues/26",state:"OPEN",body:`## 政策ビジョン\r
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
- [4] https://www5.cao.go.jp/j-j/wp/wp-je23/h06_hz020218.html`,comments:{totalCount:35},reactions:{totalCount:4},labels:{nodes:[{name:"教育・子育て"}]}},{title:"シルバーデモクラシーの克服",createdAt:"2024-06-21T11:57:37Z",url:"https://github.com/takahiroanno2024/election2024/issues/27",state:"OPEN",body:`## 政策ビジョン

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
八代 尚宏`,comments:{totalCount:10},reactions:{totalCount:10},labels:{nodes:[{name:"民主主義"}]}},{title:"都知事選における死票問題の克服",createdAt:"2024-06-21T12:35:19Z",url:"https://github.com/takahiroanno2024/election2024/issues/29",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:8},reactions:{totalCount:12},labels:{nodes:[{name:"民主主義"}]}},{title:"「子育てにかかる経済的負担への支援をより手厚く」の対象範囲の拡大",createdAt:"2024-06-21T12:45:06Z",url:"https://github.com/takahiroanno2024/election2024/issues/32",state:"CLOSED",body:`## 政策ビジョン\r
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
`,comments:{totalCount:3},reactions:{totalCount:2},labels:{nodes:[{name:"教育・子育て"}]}},{title:"不妊治療の補助をもっと手厚くしてほしい",createdAt:"2024-06-21T13:03:12Z",url:"https://github.com/takahiroanno2024/election2024/issues/33",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:4},reactions:{totalCount:6},labels:{nodes:[{name:"教育・子育て"}]}},{title:"🧹  経済 - 誤字の修正",createdAt:"2024-06-21T13:45:11Z",url:"https://github.com/takahiroanno2024/election2024/issues/36",state:"CLOSED",body:`## Overview\r
\r
* 爆増 -> 倍増に修正\r
![image](https://github.com/takahiroanno2024/election2024/assets/35296935/cd4715f9-92de-4644-ab5d-b2fa49142369)\r
\r
\r
## Tasks\r
- スライド内および他の箇所で"倍増"と使われていたので、"爆増"から"倍増"に変更して統一しました`,comments:{totalCount:3},reactions:{totalCount:5},labels:{nodes:[{name:"経済"}]}},{title:"都内に住みたい現役世代が都内に住めるようにする",createdAt:"2024-06-21T15:05:22Z",url:"https://github.com/takahiroanno2024/election2024/issues/38",state:"OPEN",body:`## 政策ビジョン\r
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
https://www.nikkei.com/article/DGXZQOCC235HE0T20C24A5000000/`,comments:{totalCount:5},reactions:{totalCount:25},labels:{nodes:[{name:"経済"}]}},{title:"先端技術と伝統文化の調和",createdAt:"2024-06-21T15:36:32Z",url:"https://github.com/takahiroanno2024/election2024/issues/39",state:"OPEN",body:`## 政策ビジョン\r
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
伝統芸能、アニメ、漫画など東京都が誇るソフトパワーとしての文化資産`,comments:{totalCount:1},reactions:{totalCount:6},labels:{nodes:[{name:"経済"}]}},{title:"非新規技術企業およびそこに従事する労働者に関するマニフェストについて",createdAt:"2024-06-21T17:06:38Z",url:"https://github.com/takahiroanno2024/election2024/issues/41",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:3},reactions:{totalCount:4},labels:{nodes:[{name:"経済"}]}},{title:"塾等教育費の削減",createdAt:"2024-06-21T17:21:19Z",url:"https://github.com/takahiroanno2024/election2024/issues/43",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:13},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]}},{title:"条例の改正履歴を閲覧可能にする",createdAt:"2024-06-21T18:03:48Z",url:"https://github.com/takahiroanno2024/election2024/issues/44",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:2},reactions:{totalCount:16},labels:{nodes:[{name:"民主主義"}]}},{title:"小さな政府へ",createdAt:"2024-06-21T18:05:29Z",url:"https://github.com/takahiroanno2024/election2024/issues/45",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:5},reactions:{totalCount:5},labels:{nodes:[{name:"行政"}]}},{title:"同性カップルの住民票上の取り扱いについて",createdAt:"2024-06-21T18:22:34Z",url:"https://github.com/takahiroanno2024/election2024/issues/46",state:"OPEN",body:`## 政策ビジョン

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

https://www3.nhk.or.jp/news/html/20240314/k10014390391000.html`,comments:{totalCount:1},reactions:{totalCount:9},labels:{nodes:[{name:"行政"}]}},{title:"心身ともに健康で元気な東京都にする",createdAt:"2024-06-21T18:55:19Z",url:"https://github.com/takahiroanno2024/election2024/issues/47",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:3},reactions:{totalCount:1},labels:{nodes:[{name:"教育・子育て"},{name:"医療・防災"}]}},{title:" 地域密着型介護保険サービス拡充への支援",createdAt:"2024-06-21T21:16:32Z",url:"https://github.com/takahiroanno2024/election2024/issues/49",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:0},reactions:{totalCount:1},labels:{nodes:[{name:"医療・防災"}]}},{title:"東京都といえども予算は無限ではない。まずムダを省く作業から。",createdAt:"2024-06-21T21:42:27Z",url:"https://github.com/takahiroanno2024/election2024/issues/50",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:2},reactions:{totalCount:2},labels:{nodes:[{name:"duplicated"},{name:"行政"}]}},{title:"「誰も取り残さない行政」の基準を明確にする",createdAt:"2024-06-22T00:40:38Z",url:"https://github.com/takahiroanno2024/election2024/issues/55",state:"OPEN",body:`## 政策ビジョン\r
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
[知的障害児（者）基礎調査：調査の結果｜厚生労働省](https://www.mhlw.go.jp/toukei/list/101-1c.html)`,comments:{totalCount:12},reactions:{totalCount:8},labels:{nodes:[{name:"行政"}]}},{title:"ミレニアル世代～氷河期世代～団塊ジュニア世代向けの対策",createdAt:"2024-06-22T01:00:46Z",url:"https://github.com/takahiroanno2024/election2024/issues/57",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:1},reactions:{totalCount:3},labels:{nodes:[{name:"経済"}]}},{title:"フローではなくアセットへの課税",createdAt:"2024-06-22T01:48:46Z",url:"https://github.com/takahiroanno2024/election2024/issues/60",state:"OPEN",body:`## 政策ビジョン

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
など`,comments:{totalCount:1},reactions:{totalCount:4},labels:{nodes:[{name:"経済"}]}},{title:"高校受験戦争対策",createdAt:"2024-06-22T02:24:12Z",url:"https://github.com/takahiroanno2024/election2024/issues/61",state:"OPEN",body:`## 政策ビジョン\r
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
https://www.sangiin.go.jp/japanese/annai/chousa/keizai_prism/backnumber/r03pdf/202120202.pdf`,comments:{totalCount:5},reactions:{totalCount:4},labels:{nodes:[{name:"教育・子育て"}]}},{title:"初期認知症の診断・リハビリの場を都として用意する。",createdAt:"2024-06-22T03:17:52Z",url:"https://github.com/takahiroanno2024/election2024/issues/63",state:"OPEN",body:`## 政策ビジョン\r
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
  - https://utsu-rework.org/list/`,comments:{totalCount:5},reactions:{totalCount:4},labels:{nodes:[{name:"医療・防災"}]}},{title:"環七・環八・首都高の平日渋滞の緩和〜深夜配達 | 東京外かく道路早期開通 | 環七・八高架化 | 首都高6車線化〜",createdAt:"2024-06-22T03:27:23Z",url:"https://github.com/takahiroanno2024/election2024/issues/64",state:"OPEN",body:`## 政策ビジョン\r
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
https://www.ktr.mlit.go.jp/gaikan/pi_kouhou/40th/s5_1_2.pdf`,comments:{totalCount:0},reactions:{totalCount:1},labels:{nodes:[{name:"医療・防災"},{name:"経済"},{name:"行政"}]}},{title:"東京都教育支援機構の民営化",createdAt:"2024-06-22T03:40:35Z",url:"https://github.com/takahiroanno2024/election2024/issues/65",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:3},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"教育・子育て"}]}},{title:"災害に強く、安全に暮らせる東京の実現",createdAt:"2024-06-22T03:42:53Z",url:"https://github.com/takahiroanno2024/election2024/issues/66",state:"OPEN",body:`## 政策ビジョン\r
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
* https://www.nhk.or.jp/senkyo/opinion-polls/02/`,comments:{totalCount:29},reactions:{totalCount:1},labels:{nodes:[{name:"医療・防災"}]}},{title:"安野氏のアピアランス改善",createdAt:"2024-06-22T05:57:51Z",url:"https://github.com/takahiroanno2024/election2024/issues/70",state:"CLOSED",body:`## 政策ビジョン\r
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
`,comments:{totalCount:7},reactions:{totalCount:3},labels:{nodes:[{name:"民主主義"}]}},{title:"【要議論】児相は本当に虐待被害者のセーフティネットとして機能しているのか？",createdAt:"2024-06-22T06:15:11Z",url:"https://github.com/takahiroanno2024/election2024/issues/73",state:"OPEN",body:`## 政策ビジョン\r
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
**問題提起として** 議論したくissueを立てました`,comments:{totalCount:1},reactions:{totalCount:5},labels:{nodes:[{name:"教育・子育て"}]}},{title:"コロナ後遺症への対策、また同様の新規疾患が発生した場合の対策",createdAt:"2024-06-22T06:22:31Z",url:"https://github.com/takahiroanno2024/election2024/issues/74",state:"OPEN",body:`## 政策ビジョン\r
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
https://www.longcovid.jp/index.html`,comments:{totalCount:2},reactions:{totalCount:4},labels:{nodes:[{name:"医療・防災"}]}},{title:"介護、医療分野でのAIとロボット、身体拡張技術を使う実証実験",createdAt:"2024-06-22T13:23:41Z",url:"https://github.com/takahiroanno2024/election2024/issues/80",state:"OPEN",body:`## 政策ビジョン\r
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
介護テクノロジーの事例`,comments:{totalCount:1},reactions:{totalCount:3},labels:{nodes:[{name:"経済"}]}},{title:"行政で使うクラウドベンダは国内のものを選ぶ",createdAt:"2024-06-22T13:26:40Z",url:"https://github.com/takahiroanno2024/election2024/issues/82",state:"OPEN",body:`## 政策ビジョン\r
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
海外クラウドのAWSと、国内クラウドのさくらのクラウドで、HelloWorldを試した。`,comments:{totalCount:7},reactions:{totalCount:0},labels:{nodes:[{name:"行政"}]}},{title:"Issue label CI test 2",createdAt:"2024-06-22T13:33:45Z",url:"https://github.com/takahiroanno2024/election2024/issues/84",state:"CLOSED",body:`## 政策ビジョン\r
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
`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"教育・子育て"},{name:"経済"}]}},{title:"児童養護施設にいる子供さんと家庭的養護の推進について",createdAt:"2024-06-22T14:03:32Z",url:"https://github.com/takahiroanno2024/election2024/issues/86",state:"OPEN",body:`## 政策ビジョン\r
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
    - 家庭的養護の割合は3割にとどまる`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]}},{title:"日本のリーダーとして、日本全体も見据えた教育格差緩和策の検討",createdAt:"2024-06-22T14:15:00Z",url:"https://github.com/takahiroanno2024/election2024/issues/87",state:"OPEN",body:`## 政策ビジョン\r
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
ただ、例えば大学について見ても、(これは国の問題ではありますが)地方の(国公立)大学への給付がますます減ってきていて、地方と首都圏の大学格差・教育格差が大きくなってきているという事実があります。`,comments:{totalCount:3},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]}},{title:"産婦人科における無痛分娩の推進",createdAt:"2024-06-22T15:19:49Z",url:"https://github.com/takahiroanno2024/election2024/issues/92",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:7},reactions:{totalCount:6},labels:{nodes:[{name:"教育・子育て"}]}},{title:"介護保険非対象の障害者、難病患者にたいする補装具などの福祉用具レンタル制度",createdAt:"2024-06-22T15:36:11Z",url:"https://github.com/takahiroanno2024/election2024/issues/93",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:1},reactions:{totalCount:2},labels:{nodes:[{name:"医療・防災"}]}},{title:"知事候補者の予備選挙制度",createdAt:"2024-06-22T15:43:32Z",url:"https://github.com/takahiroanno2024/election2024/issues/94",state:"OPEN",body:`## 政策ビジョン\r
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
https://www.jetro.go.jp/biznews/2022/05/59bb6ff9935f661e.html`,comments:{totalCount:2},reactions:{totalCount:2},labels:{nodes:[{name:"民主主義"}]}},{title:"株式投資型奨学金ファンドの設立",createdAt:"2024-06-22T18:08:27Z",url:"https://github.com/takahiroanno2024/election2024/issues/96",state:"OPEN",body:`## 政策ビジョン\r
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
- [高等教育による収入の増加](https://www.nenshuu.net/sonota/contents/gakureki.php)`,comments:{totalCount:15},reactions:{totalCount:6},labels:{nodes:[{name:"教育・子育て"},{name:"経済"}]}},{title:"特別会計の追及",createdAt:"2024-06-22T21:41:58Z",url:"https://github.com/takahiroanno2024/election2024/issues/97",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]}},{title:"特別会計の追及",createdAt:"2024-06-22T21:42:35Z",url:"https://github.com/takahiroanno2024/election2024/issues/98",state:"CLOSED",body:`## 政策ビジョン\r
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
`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"民主主義"}]}},{title:"特別会計の追及",createdAt:"2024-06-22T21:43:17Z",url:"https://github.com/takahiroanno2024/election2024/issues/99",state:"CLOSED",body:`## 政策ビジョン\r
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
`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"民主主義"}]}},{title:"全般的に対策が具体的でない（所得倍増の見直し希望）",createdAt:"2024-06-22T22:00:39Z",url:"https://github.com/takahiroanno2024/election2024/issues/100",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:0},reactions:{totalCount:9},labels:{nodes:[{name:"経済"}]}},{title:"東京の道路交通状況を改善する現実的施策",createdAt:"2024-06-22T22:52:51Z",url:"https://github.com/takahiroanno2024/election2024/issues/101",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"経済"},{name:"行政"}]}},{title:"自由主義社会の政治の基本理念の確認",createdAt:"2024-06-22T23:03:47Z",url:"https://github.com/takahiroanno2024/election2024/issues/102",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"民主主義"}]}},{title:"都内ならいつでもどこでも誰でもインターネットに接続できる環境を実現",createdAt:"2024-06-22T23:25:05Z",url:"https://github.com/takahiroanno2024/election2024/issues/103",state:"OPEN",body:`## 政策ビジョン\r
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
- [家計支出の4％を占める携帯電話料金、「全国一律」は納得解か悪平等か](https://xtech.nikkei.com/atcl/nxt/column/18/02794/032900005/)`,comments:{totalCount:4},reactions:{totalCount:6},labels:{nodes:[{name:"教育・子育て"},{name:"経済"}]}},{title:"ブロックチェーンによる、政治のカネの流れの透明化",createdAt:"2024-06-23T00:29:52Z",url:"https://github.com/takahiroanno2024/election2024/issues/104",state:"OPEN",body:`## 政策ビジョン\r
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
4. 政治資金収支報告書検索システム, https://search.openpolitics.or.jp/home`,comments:{totalCount:6},reactions:{totalCount:7},labels:{nodes:[{name:"民主主義"},{name:"経済"},{name:"行政"}]}},{title:"オンライン投票の実現、ポイント型票数選挙権制度",createdAt:"2024-06-23T01:08:23Z",url:"https://github.com/takahiroanno2024/election2024/issues/105",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:10},reactions:{totalCount:3},labels:{nodes:[{name:"民主主義"},{name:"行政"}]}},{title:"共同親権推進",createdAt:"2024-06-23T01:37:54Z",url:"https://github.com/takahiroanno2024/election2024/issues/106",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:9},reactions:{totalCount:2},labels:{nodes:[{name:"教育・子育て"}]}},{title:"必要な「非効率」の明確化への努力",createdAt:"2024-06-23T01:53:49Z",url:"https://github.com/takahiroanno2024/election2024/issues/107",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"民主主義"},{name:"経済"},{name:"行政"}]}},{title:"教育の効率化",createdAt:"2024-06-23T01:56:57Z",url:"https://github.com/takahiroanno2024/election2024/issues/109",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:4},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]}},{title:"医療行為の費用対効果をモニタリングし、社会保険料の用途を最適化する",createdAt:"2024-06-23T02:28:25Z",url:"https://github.com/takahiroanno2024/election2024/issues/110",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:5},reactions:{totalCount:0},labels:{nodes:[{name:"医療・防災"}]}},{title:"犯罪や搾取ビジネスの排除",createdAt:"2024-06-23T02:57:11Z",url:"https://github.com/takahiroanno2024/election2024/issues/111",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:3},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]}},{title:"都市の整備、警察・消防、生活環境整備に対する政策",createdAt:"2024-06-23T02:58:33Z",url:"https://github.com/takahiroanno2024/election2024/issues/112",state:"OPEN",body:`## 政策ビジョン\r
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
https://www.tama-100.or.jp/cmsfiles/contents/0000000/470/7.pdf`,comments:{totalCount:1},reactions:{totalCount:2},labels:{nodes:[{name:"医療・防災"},{name:"経済"},{name:"行政"}]}},{title:"医療・福祉従事者の待遇改善",createdAt:"2024-06-23T03:54:56Z",url:"https://github.com/takahiroanno2024/election2024/issues/114",state:"OPEN",body:`## 政策ビジョン\r
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
https://pc.saiteichingin.info/check/`,comments:{totalCount:1},reactions:{totalCount:8},labels:{nodes:[{name:"教育・子育て"},{name:"医療・防災"}]}},{title:"電車/東京の縦移動新路線をつくる",createdAt:"2024-06-23T04:25:00Z",url:"https://github.com/takahiroanno2024/election2024/issues/115",state:"OPEN",body:`## 政策ビジョン\r
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
無し`,comments:{totalCount:6},reactions:{totalCount:2},labels:{nodes:[{name:"行政"}]}},{title:"選挙税（デポジット方式）を導入する",createdAt:"2024-06-23T05:00:41Z",url:"https://github.com/takahiroanno2024/election2024/issues/116",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:9},reactions:{totalCount:4},labels:{nodes:[{name:"民主主義"},{name:"経済"},{name:"行政"}]}},{title:"AI特区作れませんかね",createdAt:"2024-06-23T05:25:48Z",url:"https://github.com/takahiroanno2024/election2024/issues/118",state:"OPEN",body:`## 政策ビジョン\r
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
特に無し`,comments:{totalCount:1},reactions:{totalCount:3},labels:{nodes:[{name:"duplicated"},{name:"経済"}]}},{title:"自動運転特区政策への拡張提案（環境政策とのパッケージ化）",createdAt:"2024-06-23T06:34:42Z",url:"https://github.com/takahiroanno2024/election2024/issues/119",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:0},reactions:{totalCount:1},labels:{nodes:[{name:"経済"}]}},{title:"ソーシャルワーカーの最低賃金・労働環境の見直し",createdAt:"2024-06-23T06:57:40Z",url:"https://github.com/takahiroanno2024/election2024/issues/120",state:"OPEN",body:`## 政策ビジョン\r
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
https://doda.jp/guide/heikin/age/`,comments:{totalCount:0},reactions:{totalCount:2},labels:{nodes:[{name:"医療・防災"}]}},{title:"都内に設置されているモスキート音発生装置に対する規制",createdAt:"2024-06-23T07:06:56Z",url:"https://github.com/takahiroanno2024/election2024/issues/121",state:"OPEN",body:`## 政策ビジョン\r
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
https://www.google.com/maps/d/viewer?hl=ja&mid=1ZWgNIhzjppDUQpTdwkqTRz1zZ6k&ll=35.688102343196654%2C139.73621262194823&z=12`,comments:{totalCount:0},reactions:{totalCount:6},labels:{nodes:[{name:"行政"}]}},{title:"西部における南北方向の移動を容易に",createdAt:"2024-06-23T07:09:16Z",url:"https://github.com/takahiroanno2024/election2024/issues/122",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:2},reactions:{totalCount:2},labels:{nodes:[{name:"duplicated"},{name:"行政"}]}},{title:"AIによる行政統計データ収集・資料化の効率化とその利活用",createdAt:"2024-06-23T07:14:32Z",url:"https://github.com/takahiroanno2024/election2024/issues/123",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:1},reactions:{totalCount:1},labels:{nodes:[{name:"行政"}]}},{title:"都営交通機関の24時間運行",createdAt:"2024-06-23T08:04:09Z",url:"https://github.com/takahiroanno2024/election2024/issues/124",state:"OPEN",body:`## 政策ビジョン\r
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
- https://www.zenrin-datacom.net/solution/congestion/media/k002`,comments:{totalCount:3},reactions:{totalCount:6},labels:{nodes:[{name:"経済"}]}},{title:"赤線地帯の復活・パパ活等個人売春の規制",createdAt:"2024-06-23T08:47:55Z",url:"https://github.com/takahiroanno2024/election2024/issues/125",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:4},reactions:{totalCount:2},labels:{nodes:[{name:"医療・防災"},{name:"経済"}]}},{title:"民泊の規制",createdAt:"2024-06-23T08:52:35Z",url:"https://github.com/takahiroanno2024/election2024/issues/126",state:"OPEN",body:`## 政策ビジョン\r
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
https://www.paris.fr/pages/declaration-prealable-a-la-location-d-un-meuble-touristique-5007/`,comments:{totalCount:3},reactions:{totalCount:4},labels:{nodes:[{name:"duplicated"},{name:"経済"}]}},{title:"中古不動産市場の透明化と活性化",createdAt:"2024-06-23T09:39:03Z",url:"https://github.com/takahiroanno2024/election2024/issues/127",state:"OPEN",body:`## 政策ビジョン\r
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
注: 米国では不動産取引全体の約80%が中古物件です`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]}},{title:"生成AIの部分的規制 ",createdAt:"2024-06-23T10:32:49Z",url:"https://github.com/takahiroanno2024/election2024/issues/128",state:"OPEN",body:`## 政策ビジョン\r
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
など、AI否定派の意見は強く残っている`,comments:{totalCount:5},reactions:{totalCount:1},labels:{nodes:[{name:"その他"}]}},{title:"エッセンシャルワーカーの待遇・環境改善",createdAt:"2024-06-23T10:55:19Z",url:"https://github.com/takahiroanno2024/election2024/issues/130",state:"OPEN",body:`## 政策ビジョン\r
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
https://www.sankei.com/article/20240313-RERF3SDMLZOP7PNDTVOVNXXX24/`,comments:{totalCount:4},reactions:{totalCount:9},labels:{nodes:[{name:"duplicated"},{name:"教育・子育て"},{name:"医療・防災"}]}},{title:"家賃補助を導入する",createdAt:"2024-06-23T11:04:51Z",url:"https://github.com/takahiroanno2024/election2024/issues/131",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]}},{title:"諸外国からの投資と高度技能人材の誘致",createdAt:"2024-06-23T11:05:51Z",url:"https://github.com/takahiroanno2024/election2024/issues/132",state:"OPEN",body:`## 政策ビジョン\r
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
[都市整備局](https://www.toshiseibi.metro.tokyo.lg.jp)`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"経済"},{name:"行政"}]}},{title:"東京都選挙制度の改善",createdAt:"2024-06-23T11:07:22Z",url:"https://github.com/takahiroanno2024/election2024/issues/133",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:3},reactions:{totalCount:0},labels:{nodes:[{name:"民主主義"}]}},{title:"ブロードリスニングの不明点",createdAt:"2024-06-23T11:21:38Z",url:"https://github.com/takahiroanno2024/election2024/issues/134",state:"OPEN",body:`## 政策ビジョン\r
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
なし`,comments:{totalCount:9},reactions:{totalCount:5},labels:{nodes:[{name:"民主主義"}]}},{title:"AIによるリアルタイムデータ解析を利用した救急搬送システムの最適化",createdAt:"2024-06-23T11:55:17Z",url:"https://github.com/takahiroanno2024/election2024/issues/135",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:0},reactions:{totalCount:2},labels:{nodes:[{name:"医療・防災"}]}},{title:"都政にパブリック・コメント制度を導入する",createdAt:"2024-06-23T12:30:37Z",url:"https://github.com/takahiroanno2024/election2024/issues/136",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:3},reactions:{totalCount:5},labels:{nodes:[{name:"行政"}]}},{title:"新技術を積極的に活用する環境政策の実施",createdAt:"2024-06-23T13:49:59Z",url:"https://github.com/takahiroanno2024/election2024/issues/137",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:3},reactions:{totalCount:1},labels:{nodes:[{name:"行政"}]}},{title:"海外人材・資本依存時代の戦略",createdAt:"2024-06-23T17:54:59Z",url:"https://github.com/takahiroanno2024/election2024/issues/140",state:"CLOSED",body:`## 政策ビジョン\r
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
この Issue を通じて、海外人材・資本の活用に関する具体的な戦略と、それに伴う課題への対策について建設的な議論を行い、より実効性のあるマニフェストの改訂につなげられればと思います。`,comments:{totalCount:2},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"経済"}]}},{title:"フランスの出産制度導入",createdAt:"2024-06-23T18:15:33Z",url:"https://github.com/takahiroanno2024/election2024/issues/141",state:"OPEN",body:`## 政策ビジョン

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

https://t.co/514TiWo5E1`,comments:{totalCount:0},reactions:{totalCount:5},labels:{nodes:[{name:"教育・子育て"}]}},{title:"ゴミ箱を増やしてほしい",createdAt:"2024-06-23T23:54:27Z",url:"https://github.com/takahiroanno2024/election2024/issues/142",state:"OPEN",body:`### 政策ビジョン

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

何千億円使って箱物を増やすよりは直接都民の利益につながるように思える`,comments:{totalCount:14},reactions:{totalCount:28},labels:{nodes:[{name:"医療・防災"},{name:"経済"}]}},{title:"東京と地方が連携し、日本全体の発展につなげる",createdAt:"2024-06-24T00:23:10Z",url:"https://github.com/takahiroanno2024/election2024/issues/143",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"行政"}]}},{title:"いたずらや対立潰し、都民であることの確認はどうするのか（荒らし対策について）",createdAt:"2024-06-24T00:52:40Z",url:"https://github.com/takahiroanno2024/election2024/issues/144",state:"CLOSED",body:`### 政策ビジョン

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

いまはまだ、GitHubに積極的にアクセスできる水準の人や安野たかひろさんへの技術的な好奇心のある人しかここにいないだろうからまともに見えるけど、都民の中には意外とアホで自分勝手で文句ばっかり言いながらも自分では何もしたがらないろくでもない人もけっこういると思うので、そして行政というのはそういうダメダメな人こそ掬い上げる必要のある役割があるので、多角的な視点と不寛容な他者への忍耐が科学技術でどう解決できるかが見物です。`,comments:{totalCount:5},reactions:{totalCount:6},labels:{nodes:[{name:"民主主義"}]}},{title:"複数の異性と同時交際を指向する性指向マイノリティに対する差別解消に向けた取り組み",createdAt:"2024-06-24T01:18:24Z",url:"https://github.com/takahiroanno2024/election2024/issues/146",state:"OPEN",body:`## 政策ビジョン\r
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
見て見ぬふりをしてきた経験がある当事者のひとりのはずです。`,comments:{totalCount:9},reactions:{totalCount:4},labels:{nodes:[{name:"教育・子育て"},{name:"民主主義"},{name:"行政"}]}},{title:"オーバーツーリズム及び外国人の入国者に起因する治安悪化への対策",createdAt:"2024-06-24T02:02:22Z",url:"https://github.com/takahiroanno2024/election2024/issues/147",state:"OPEN",body:`### 政策ビジョン\r
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
_No response_`,comments:{totalCount:9},reactions:{totalCount:4},labels:{nodes:[{name:"経済"}]}},{title:"歩道を走る自転車がほぼなくなるように道路・歩道を整備してほしい",createdAt:"2024-06-24T03:29:08Z",url:"https://github.com/takahiroanno2024/election2024/issues/149",state:"OPEN",body:`### 政策ビジョン

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

関連 issue? : #101, #119`,comments:{totalCount:6},reactions:{totalCount:10},labels:{nodes:[{name:"行政"}]}},{title:"コンビニなど、喫煙所以外で屯する人をなくしてほしい",createdAt:"2024-06-24T04:17:06Z",url:"https://github.com/takahiroanno2024/election2024/issues/150",state:"OPEN",body:`### 政策ビジョン\r
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
もし見つかった場合、順次追加していきます。`,comments:{totalCount:0},reactions:{totalCount:2},labels:{nodes:[{name:"経済"}]}},{title:"政策の吸い上げを行うこのプラットフォームオリジナルの戦略アルゴリズムの検討",createdAt:"2024-06-24T07:46:46Z",url:"https://github.com/takahiroanno2024/election2024/issues/153",state:"OPEN",body:`### 政策ビジョン

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

誰も取り残さない政策であることを証明してください`,comments:{totalCount:4},reactions:{totalCount:5},labels:{nodes:[{name:"経済"}]}},{title:"機能的識字率の計測および改善のためのアクション",createdAt:"2024-06-24T08:40:05Z",url:"https://github.com/takahiroanno2024/election2024/issues/155",state:"OPEN",body:`### 政策ビジョン\r
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
_No response_`,comments:{totalCount:8},reactions:{totalCount:3},labels:{nodes:[{name:"教育・子育て"}]}},{title:"例えば都の企業発OSSへの補助金制度などによるデジタル化の促進",createdAt:"2024-06-24T10:59:38Z",url:"https://github.com/takahiroanno2024/election2024/issues/157",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:3},reactions:{totalCount:3},labels:{nodes:[{name:"経済"}]}},{title:"経済向上のための企業誘致や経済政策",createdAt:"2024-06-24T11:15:12Z",url:"https://github.com/takahiroanno2024/election2024/issues/158",state:"OPEN",body:`### 政策ビジョン

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
世界に対するプレゼンスを上げたいという文脈ならわかりますが、その点への記載は見られませんでした。`,comments:{totalCount:4},reactions:{totalCount:1},labels:{nodes:[{name:"経済"}]}},{title:"企業が新しい産業に資金投入できるための仕組みの構築",createdAt:"2024-06-24T11:19:11Z",url:"https://github.com/takahiroanno2024/election2024/issues/159",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]}},{title:"マンション型メンズエステ店の規制",createdAt:"2024-06-24T12:17:35Z",url:"https://github.com/takahiroanno2024/election2024/issues/160",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:0},reactions:{totalCount:1},labels:{nodes:[{name:"行政"}]}},{title:"大学の単位交換制度",createdAt:"2024-06-24T16:47:37Z",url:"https://github.com/takahiroanno2024/election2024/issues/161",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]}},{title:"図書館に会話（軽食）OKの作業スペースを設ける",createdAt:"2024-06-25T03:34:10Z",url:"https://github.com/takahiroanno2024/election2024/issues/164",state:"OPEN",body:`### 政策ビジョン\r
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
_No response_`,comments:{totalCount:7},reactions:{totalCount:4},labels:{nodes:[{name:"行政"}]}},{title:"社会的弱者でも明るく前向きに生きていける",createdAt:"2024-06-25T06:27:33Z",url:"https://github.com/takahiroanno2024/election2024/issues/168",state:"OPEN",body:`### 政策ビジョン\r
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
_No response_`,comments:{totalCount:7},reactions:{totalCount:3},labels:{nodes:[{name:"行政"}]}},{title:"モビリティ決済システムの統合",createdAt:"2024-06-25T07:39:24Z",url:"https://github.com/takahiroanno2024/election2024/issues/169",state:"OPEN",body:`### 政策ビジョン

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
東南アジア諸外国でも都市化を進めており、スマートシティなどの事業展開につながっていくといいなと思いました。`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]}},{title:"孤独死問題解決に向けた巡回システムの構築",createdAt:"2024-06-25T07:42:45Z",url:"https://github.com/takahiroanno2024/election2024/issues/170",state:"OPEN",body:`### 政策ビジョン

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
独身率も上昇していることですし、どの世代にも関係してくる課題なのではないでしょうか`,comments:{totalCount:13},reactions:{totalCount:4},labels:{nodes:[{name:"医療・防災"}]}},{title:"データファブリック/データメッシュ技術を活用した情報公開システムの構築",createdAt:"2024-06-25T08:00:39Z",url:"https://github.com/takahiroanno2024/election2024/issues/171",state:"OPEN",body:`### 政策ビジョン

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
AIを活用するためにはデータが重要です。世界に誇る情報インフラ産業を東京都からつくっていきたいです。`,comments:{totalCount:2},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]}},{title:"財源の確保",createdAt:"2024-06-25T08:14:10Z",url:"https://github.com/takahiroanno2024/election2024/issues/172",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:2},reactions:{totalCount:7},labels:{nodes:[{name:"duplicated"},{name:"経済"}]}},{title:"災害対策における民間企業との協力",createdAt:"2024-06-25T08:35:51Z",url:"https://github.com/takahiroanno2024/election2024/issues/173",state:"OPEN",body:`### 政策ビジョン\r
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
_No response_`,comments:{totalCount:3},reactions:{totalCount:1},labels:{nodes:[{name:"医療・防災"}]}},{title:"週刊誌のストーカー同然の取材行為の規制",createdAt:"2024-06-25T14:04:13Z",url:"https://github.com/takahiroanno2024/election2024/issues/175",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:3},reactions:{totalCount:2},labels:{nodes:[{name:"行政"}]}},{title:"都内中小企業・製造業を対象とした具体的なマニフェスト",createdAt:"2024-06-25T14:36:51Z",url:"https://github.com/takahiroanno2024/election2024/issues/176",state:"OPEN",body:`## 政策ビジョン\r
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
`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"経済"}]}},{title:"自動運転特区を作り、自動運転車にとって優しい街を作る",createdAt:"2024-06-25T15:45:57Z",url:"https://github.com/takahiroanno2024/election2024/issues/177",state:"OPEN",body:`### 政策ビジョン\r
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
_No response_`,comments:{totalCount:3},reactions:{totalCount:1},labels:{nodes:[{name:"経済"}]}},{title:"マニフェストの全体的な変更案",createdAt:"2024-06-25T16:22:31Z",url:"https://github.com/takahiroanno2024/election2024/issues/178",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"民主主義"}]}},{title:"取組内容に対する予算とその実行計画及び体制を提示してほしい",createdAt:"2024-06-25T16:41:08Z",url:"https://github.com/takahiroanno2024/election2024/issues/180",state:"OPEN",body:`### 政策ビジョン\r
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
_No response_`,comments:{totalCount:2},reactions:{totalCount:1},labels:{nodes:[{name:"行政"}]}},{title:"良い政策に対してのポジティブフィードバックや賛成票を可視化するシステム",createdAt:"2024-06-26T06:18:15Z",url:"https://github.com/takahiroanno2024/election2024/issues/184",state:"OPEN",body:`### 政策ビジョン

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
成功者への許容度もそういった機会選択の多さから変わっていけば、いろいろな人を応援していける社会へと変わっていけるのではないでしょうか。`,comments:{totalCount:7},reactions:{totalCount:4},labels:{nodes:[{name:"教育・子育て"},{name:"民主主義"}]}},{title:"都政に関する X（Twitter）画像投稿に代替テキスト（ALT）を付加する",createdAt:"2024-06-26T08:31:41Z",url:"https://github.com/takahiroanno2024/election2024/issues/185",state:"OPEN",body:`### 政策ビジョン

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
      - 画像内のテキスト`,comments:{totalCount:0},reactions:{totalCount:12},labels:{nodes:[{name:"行政"}]}},{title:"「都議会AI」のチェックについて",createdAt:"2024-06-26T12:41:33Z",url:"https://github.com/takahiroanno2024/election2024/issues/195",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:2},reactions:{totalCount:0},labels:{nodes:[{name:"民主主義"}]}},{title:"不動産仲介販売制度の見直し（専任媒介または専属専任媒介の優遇措置）",createdAt:"2024-06-26T12:52:34Z",url:"https://github.com/takahiroanno2024/election2024/issues/196",state:"OPEN",body:`### 政策ビジョン\r
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
不動産業者専用データベース「レインズ」というDBがあるようで、それを不動産検索サイトに転記したり、それをみて営業しいるようだが、それを一般に公開すれば、検索サイトの管理や登録さえもいらないのではないかと思いました。`,comments:{totalCount:2},reactions:{totalCount:1},labels:{nodes:[{name:"経済"}]}},{title:"公共交通の更なる利便性向上策",createdAt:"2024-06-26T12:57:11Z",url:"https://github.com/takahiroanno2024/election2024/issues/197",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"行政"}]}},{title:"正直者に特赦を：不正行為の根本解決を目指して",createdAt:"2024-06-27T03:30:16Z",url:"https://github.com/takahiroanno2024/election2024/issues/200",state:"OPEN",body:`### 政策ビジョン

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

罪が許されても、政治家には選挙による審判があり、必ずしも効果的に機能しないかもしれません。しかし、少なくとも都の職員など、追い詰める必要がない立場の人々には、この恩赦制度が効果的に機能する可能性があります。これにより、真実の追及と再発防止に向けた前進が期待できます。`,comments:{totalCount:0},reactions:{totalCount:1},labels:{nodes:[{name:"行政"}]}},{title:"教育の費用「貸与」から「付与」の所得制限について",createdAt:"2024-06-27T10:17:58Z",url:"https://github.com/takahiroanno2024/election2024/issues/202",state:"CLOSED",body:`### 政策ビジョン\r
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
_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]}},{title:"東京を日本のハブに",createdAt:"2024-06-27T12:11:29Z",url:"https://github.com/takahiroanno2024/election2024/issues/206",state:"OPEN",body:`### 政策ビジョン

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

鉄道好きです`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"経済"}]}},{title:"路面電車復活",createdAt:"2024-06-27T12:40:10Z",url:"https://github.com/takahiroanno2024/election2024/issues/207",state:"OPEN",body:`### 政策ビジョン\r
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
のんびり街を見て歩きたいです。`,comments:{totalCount:5},reactions:{totalCount:2},labels:{nodes:[{name:"経済"}]}},{title:"大規模災害時の通信インフラ維持",createdAt:"2024-06-27T13:08:09Z",url:"https://github.com/takahiroanno2024/election2024/issues/208",state:"OPEN",body:`### 政策ビジョン

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

情報は大事`,comments:{totalCount:1},reactions:{totalCount:1},labels:{nodes:[{name:"医療・防災"}]}},{title:"ICT等に苦手意識のある方々への配慮(いわゆるデジタルディバイドの問題)",createdAt:"2024-06-27T13:21:20Z",url:"https://github.com/takahiroanno2024/election2024/issues/209",state:"OPEN",body:`### 政策ビジョン

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

Issueを投稿するのが初めてのため、不慣れな部分がございます。ご容赦ください。`,comments:{totalCount:0},reactions:{totalCount:2},labels:{nodes:[{name:"行政"}]}},{title:"島嶼部への離島留学の仕組みを作る",createdAt:"2024-06-27T13:40:21Z",url:"https://github.com/takahiroanno2024/election2024/issues/210",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:2},reactions:{totalCount:4},labels:{nodes:[{name:"教育・子育て"}]}},{title:"女性がさらに活躍できる社会へ",createdAt:"2024-06-27T14:12:32Z",url:"https://github.com/takahiroanno2024/election2024/issues/211",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:1},reactions:{totalCount:3},labels:{nodes:[{name:"経済"}]}},{title:"子育てにかかる経済的負担への支援の見直し（所得制限の見直し）",createdAt:"2024-06-27T14:31:47Z",url:"https://github.com/takahiroanno2024/election2024/issues/212",state:"OPEN",body:`### 政策ビジョン\r
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
_No response_`,comments:{totalCount:1},reactions:{totalCount:4},labels:{nodes:[{name:"duplicated"},{name:"教育・子育て"}]}},{title:"働き方改革2.0",createdAt:"2024-06-27T14:33:18Z",url:"https://github.com/takahiroanno2024/election2024/issues/213",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:4},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]}},{title:"延床面積に応じた住宅支援制度の創設",createdAt:"2024-06-28T00:48:40Z",url:"https://github.com/takahiroanno2024/election2024/issues/214",state:"OPEN",body:`### 政策ビジョン\r
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
_No response_`,comments:{totalCount:8},reactions:{totalCount:3},labels:{nodes:[{name:"教育・子育て"}]}},{title:"保育園（または幼稚園）のバウチャー制の導入",createdAt:"2024-06-28T03:09:19Z",url:"https://github.com/takahiroanno2024/election2024/issues/215",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:3},reactions:{totalCount:1},labels:{nodes:[{name:"教育・子育て"}]}},{title:"左派か右派の表明",createdAt:"2024-06-28T05:51:44Z",url:"https://github.com/takahiroanno2024/election2024/issues/217",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:3},reactions:{totalCount:0},labels:{nodes:[{name:"民主主義"}]}},{title:"弾道ミサイルへの対策",createdAt:"2024-06-28T05:55:10Z",url:"https://github.com/takahiroanno2024/election2024/issues/218",state:"OPEN",body:`### 政策ビジョン

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

外交問題でもあるので公開できるものとそうでないものがあるともいますが、最低限のポージングはしても良いかと感じます`,comments:{totalCount:0},reactions:{totalCount:2},labels:{nodes:[{name:"医療・防災"}]}},{title:"東京都都知事選の予備選挙",createdAt:"2024-06-28T05:58:22Z",url:"https://github.com/takahiroanno2024/election2024/issues/219",state:"CLOSED",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:2},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"民主主義"}]}},{title:"炭素という都市資源の有効活用",createdAt:"2024-06-28T12:06:37Z",url:"https://github.com/takahiroanno2024/election2024/issues/222",state:"OPEN",body:`### 政策ビジョン

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

政策のところはclaudeさんに形ととのえてもらいました`,comments:{totalCount:0},reactions:{totalCount:1},labels:{nodes:[{name:"医療・防災"},{name:"経済"}]}},{title:"Code for Japan との連携強化",createdAt:"2024-06-28T12:09:20Z",url:"https://github.com/takahiroanno2024/election2024/issues/223",state:"OPEN",body:`### 政策ビジョン\r
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
_No response_`,comments:{totalCount:1},reactions:{totalCount:2},labels:{nodes:[{name:"行政"}]}},{title:"聴覚障害者の学習環境",createdAt:"2024-06-28T13:43:48Z",url:"https://github.com/takahiroanno2024/election2024/issues/224",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:0},reactions:{totalCount:3},labels:{nodes:[{name:"教育・子育て"}]}},{title:"企業内ハラスメント発生した際の、ブラック企業の経営者への罰則の強化",createdAt:"2024-06-28T14:07:29Z",url:"https://github.com/takahiroanno2024/election2024/issues/225",state:"OPEN",body:`### 政策ビジョン

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

特になし。`,comments:{totalCount:2},reactions:{totalCount:2},labels:{nodes:[{name:"経済"}]}},{title:"常設実施必至型住民投票条例について",createdAt:"2024-06-28T14:33:09Z",url:"https://github.com/takahiroanno2024/election2024/issues/227",state:"OPEN",body:`### 政策ビジョン\r
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
_No response_`,comments:{totalCount:4},reactions:{totalCount:4},labels:{nodes:[{name:"民主主義"}]}},{title:"男性に対する子宮頸がんワクチン接種の無償化に関して",createdAt:"2024-06-28T18:49:08Z",url:"https://github.com/takahiroanno2024/election2024/issues/228",state:"CLOSED",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:3},reactions:{totalCount:9},labels:{nodes:[{name:"医療・防災"}]}},{title:"未来の都の健康に投資する。エビデンスに基づいたきちんと伝わる食農教育プログラムと産業創出",createdAt:"2024-06-29T07:49:22Z",url:"https://github.com/takahiroanno2024/election2024/issues/230",state:"OPEN",body:`### 政策ビジョン\r
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
`,comments:{totalCount:2},reactions:{totalCount:0},labels:{nodes:[{name:"医療・防災"},{name:"経済"},{name:"その他"}]}},{title:"学校プールの注水自動化",createdAt:"2024-06-29T08:35:11Z",url:"https://github.com/takahiroanno2024/election2024/issues/231",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:3},reactions:{totalCount:1},labels:{nodes:[{name:"教育・子育て"}]}},{title:"高校教育の改革",createdAt:"2024-06-29T09:11:17Z",url:"https://github.com/takahiroanno2024/election2024/issues/232",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]}},{title:"太陽光パネル設置義務化条例の撤回",createdAt:"2024-06-29T09:14:00Z",url:"https://github.com/takahiroanno2024/election2024/issues/233",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:4},reactions:{totalCount:3},labels:{nodes:[{name:"行政"}]}},{title:"障害者福祉のデジタル化",createdAt:"2024-06-29T10:51:01Z",url:"https://github.com/takahiroanno2024/election2024/issues/234",state:"OPEN",body:`### 政策ビジョン\r
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
_No response_`,comments:{totalCount:4},reactions:{totalCount:7},labels:{nodes:[{name:"医療・防災"}]}},{title:"(女性)子宮頸がんワクチンのキャッチアップ接種における年齢制限の拡充と9価タイプの追加に関する要望",createdAt:"2024-06-29T12:10:17Z",url:"https://github.com/takahiroanno2024/election2024/issues/235",state:"OPEN",body:`### 政策ビジョン\r
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
29歳女性`,comments:{totalCount:0},reactions:{totalCount:10},labels:{nodes:[{name:"医療・防災"}]}},{title:"海外留学制度の拡充",createdAt:"2024-06-29T12:47:44Z",url:"https://github.com/takahiroanno2024/election2024/issues/236",state:"OPEN",body:`### 政策ビジョン

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

甘えではありますが、私も大学の時に留学したかったなと思っています。`,comments:{totalCount:0},reactions:{totalCount:2},labels:{nodes:[{name:"教育・子育て"}]}},{title:"都立公園の原則禁煙化と密閉型喫煙所の設置",createdAt:"2024-06-29T13:21:29Z",url:"https://github.com/takahiroanno2024/election2024/issues/237",state:"OPEN",body:`### 政策ビジョン\r
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
https://x.com/sakaeinfo/status/1803309521315451291 （解説編）\r
\r
### 自由記述欄\r
\r
_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"行政"}]}},{title:"東京都独自での教員確保・処遇改善による、公教育の抜本的改善",createdAt:"2024-06-29T15:53:43Z",url:"https://github.com/takahiroanno2024/election2024/issues/239",state:"OPEN",body:`### 政策ビジョン

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

東京都中央区にて区議会議員をやっている者です。新たな選挙戦の取組について、非常に興味深く拝見していただいております。暑い中本当に大変かと思いますが、残りの選挙戦頑張ってください。`,comments:{totalCount:4},reactions:{totalCount:2},labels:{nodes:[{name:"教育・子育て"}]}},{title:"海洋資源活用の促進",createdAt:"2024-06-29T23:45:34Z",url:"https://github.com/takahiroanno2024/election2024/issues/240",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]}},{title:"子育て支援に関する若者への適切な権限の移譲について",createdAt:"2024-06-29T23:58:50Z",url:"https://github.com/takahiroanno2024/election2024/issues/241",state:"OPEN",body:`### 政策ビジョン

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

例えば、東京都では待機児童はかなり減った。一方、入園時期が固定されているとか、未だ利用者の利便性を考えた柔軟なものとなっていると聞いてもいるので、まだまだ改善点は多いのではないかと思うが、改善点を一つ一つ論じるより、適切な権限移譲がまず重要なのではないかと考えています。ただ十分な調査に基づいた提案ではなく、ジャストアイデアでもあるので、多くの議論により、より良い提言になる切欠となると良いと思いました。`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]}},{title:"AIブロードリスニングに対応したシンクタンク機能の拡充",createdAt:"2024-06-30T00:06:13Z",url:"https://github.com/takahiroanno2024/election2024/issues/242",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:2},reactions:{totalCount:2},labels:{nodes:[{name:"行政"}]}},{title:"ガバメントクラウドファンディングの導入",createdAt:"2024-06-30T00:13:54Z",url:"https://github.com/takahiroanno2024/election2024/issues/243",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:0},reactions:{totalCount:3},labels:{nodes:[{name:"民主主義"},{name:"行政"}]}},{title:"東西均衡のとれた防災都市としての発展、投資について",createdAt:"2024-06-30T00:21:33Z",url:"https://github.com/takahiroanno2024/election2024/issues/244",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:0},reactions:{totalCount:2},labels:{nodes:[{name:"医療・防災"}]}},{title:"海外企業勤務者へのフルリモート勤務環境の整備",createdAt:"2024-06-30T00:35:18Z",url:"https://github.com/takahiroanno2024/election2024/issues/245",state:"OPEN",body:`### 政策ビジョン

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

富裕層インバウンドとして、資産家ではない、現役世代を増やすには、今の東京の魅力をどう増やし、どのような障害を減らしたら良いのか。例えばシンガポールなどと比較しながら論じることができれば、良いのではないかと思う。`,comments:{totalCount:0},reactions:{totalCount:2},labels:{nodes:[{name:"経済"}]}},{title:"マニフェスト等の分かりやすい見せ方の提案",createdAt:"2024-06-30T03:33:10Z",url:"https://github.com/takahiroanno2024/election2024/issues/246",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:0},reactions:{totalCount:1},labels:{nodes:[{name:"民主主義"}]}},{title:"近隣県との連携による南関東圏子育て構想",createdAt:"2024-06-30T04:02:21Z",url:"https://github.com/takahiroanno2024/election2024/issues/247",state:"OPEN",body:`### 政策ビジョン\r
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
_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"教育・子育て"}]}},{title:"自治会や町内会の会費徴収の慣習を廃し自治体からの活動支援金に一本化。時代に合った在り方を考える",createdAt:"2024-06-30T12:12:56Z",url:"https://github.com/takahiroanno2024/election2024/issues/249",state:"OPEN",body:`### 政策ビジョン\r
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
_No response_`,comments:{totalCount:1},reactions:{totalCount:2},labels:{nodes:[{name:"行政"}]}},{title:"公共のベンチ・デスクを設置・排除ベンチの撤廃",createdAt:"2024-06-30T17:04:24Z",url:"https://github.com/takahiroanno2024/election2024/issues/251",state:"OPEN",body:`### 政策ビジョン\r
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
https://x.com/yanpoyan/status/1807282292764835963?s=46&t=lMNf_ULI7YQKyuYMSSXqRg`,comments:{totalCount:4},reactions:{totalCount:6},labels:{nodes:[{name:"行政"}]}},{title:"LGBTQ＋カップルにおける妊娠時の助成について",createdAt:"2024-06-30T17:04:44Z",url:"https://github.com/takahiroanno2024/election2024/issues/252",state:"OPEN",body:`### 政策ビジョン\r
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
今回の都知事選の公約を見ましたが、紙面上で見る限りは多様性に対して公約がなかなか見当らず......一人では答えを導き出せないため、こうして皆さんと考えられる場があることを活用させていただければとイシューを立てさせていただきました。他力本願にはなってしまいますが、できれば、多くの人に考えてほしいです。お願いします。`,comments:{totalCount:0},reactions:{totalCount:6},labels:{nodes:[{name:"教育・子育て"}]}},{title:"現役世代の投票率向上施策について",createdAt:"2024-07-01T08:03:53Z",url:"https://github.com/takahiroanno2024/election2024/issues/253",state:"OPEN",body:`### 政策ビジョン\r
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
政策に限らず、若年層が政治や都政に関心が持てない要因の分析など、いろいろなご意見をいただけると嬉しいです。`,comments:{totalCount:5},reactions:{totalCount:2},labels:{nodes:[{name:"行政"}]}},{title:"GitHubを活用した東京都と地方自治体の連携施策",createdAt:"2024-07-01T10:22:49Z",url:"https://github.com/takahiroanno2024/election2024/issues/254",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:1},reactions:{totalCount:7},labels:{nodes:[{name:"民主主義"},{name:"行政"}]}},{title:"教科書バリアフリー法に基づく特定図書等（デイジー教科書など）がある教科書を優先して採択する",createdAt:"2024-07-01T13:12:35Z",url:"https://github.com/takahiroanno2024/election2024/issues/257",state:"OPEN",body:`### 政策ビジョン\r
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
_No response_`,comments:{totalCount:5},reactions:{totalCount:4},labels:{nodes:[{name:"教育・子育て"}]}},{title:"福祉避難所の現状把握と周知",createdAt:"2024-07-01T14:06:53Z",url:"https://github.com/takahiroanno2024/election2024/issues/258",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:0},reactions:{totalCount:2},labels:{nodes:[{name:"医療・防災"}]}},{title:"エッセンシャルワーカーの待遇改善・業務効率化に向けた施策について",createdAt:"2024-07-02T08:49:19Z",url:"https://github.com/takahiroanno2024/election2024/issues/261",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:1},reactions:{totalCount:4},labels:{nodes:[{name:"教育・子育て"}]}},{title:"少子化対策にむけた女性のキャリア支援の充実",createdAt:"2024-07-02T08:57:52Z",url:"https://github.com/takahiroanno2024/election2024/issues/262",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:0},reactions:{totalCount:1},labels:{nodes:[{name:"教育・子育て"}]}},{title:"フリーランス・起業家の方に向けた、育休相当の支援",createdAt:"2024-07-02T09:26:25Z",url:"https://github.com/takahiroanno2024/election2024/issues/263",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:0},reactions:{totalCount:8},labels:{nodes:[{name:"教育・子育て"}]}},{title:"心療にまつわる雇用や相談できる相談窓口の人員増加、リスキリングの対象にすること",createdAt:"2024-07-02T12:55:46Z",url:"https://github.com/takahiroanno2024/election2024/issues/266",state:"OPEN",body:`### 政策ビジョン

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
至らない点があったら申し訳ありません`,comments:{totalCount:3},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"医療・防災"},{name:"その他"}]}},{title:"特別な支援が必要な児童・生徒への支援のあり方",createdAt:"2024-07-02T16:14:25Z",url:"https://github.com/takahiroanno2024/election2024/issues/269",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:0},reactions:{totalCount:1},labels:{nodes:[{name:"教育・子育て"}]}},{title:"都政参加プラットフォームにて、「本人確認された都民である属性」の表示",createdAt:"2024-07-02T17:34:52Z",url:"https://github.com/takahiroanno2024/election2024/issues/272",state:"OPEN",body:`### 政策ビジョン\r
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
なお自身は神奈川県民です。`,comments:{totalCount:3},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"民主主義"}]}},{title:"ジェンダーバイアスによる選択の制限をなくしていくための提案",createdAt:"2024-07-03T00:47:13Z",url:"https://github.com/takahiroanno2024/election2024/issues/274",state:"OPEN",body:`### 政策ビジョン\r
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
_No response_`,comments:{totalCount:0},reactions:{totalCount:4},labels:{nodes:[{name:"教育・子育て"}]}},{title:"住宅断熱の課題を精査",createdAt:"2024-07-03T02:59:20Z",url:"https://github.com/takahiroanno2024/election2024/issues/275",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"その他"}]}},{title:"3Dアバター技術等を用いた手話翻訳技術の発展支援",createdAt:"2024-07-03T03:56:09Z",url:"https://github.com/takahiroanno2024/election2024/issues/277",state:"OPEN",body:`### 政策ビジョン

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

・過去にもいくつか類似例がありますが、改めて安野さんから政策として「こういった取り組みもテクノロジーで強化できる」と伝えて頂きたく思います。`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"医療・防災"}]}},{title:"東京都内の賃貸住宅の更新料負担ゼロ",createdAt:"2024-07-03T06:58:17Z",url:"https://github.com/takahiroanno2024/election2024/issues/278",state:"OPEN",body:`### 政策ビジョン

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

_No response_`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]}},{title:"安野さんの服装について",createdAt:"2024-07-03T07:07:47Z",url:"https://github.com/takahiroanno2024/election2024/issues/279",state:"OPEN",body:`### 政策ビジョン

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
残り数日ですが、健闘を祈っております。`,comments:{totalCount:1},reactions:{totalCount:0},labels:{nodes:[{name:"duplicated"},{name:"その他"}]}},{title:"横田基地の軍民共用化について",createdAt:"2024-07-03T09:02:00Z",url:"https://github.com/takahiroanno2024/election2024/issues/280",state:"OPEN",body:`### 政策ビジョン

経済

### 政策

横田基地の軍民共用化を早期に実現する。これにより、羽田空港や成田空港を補完し、多摩エリアや埼玉県、神奈川県、山梨県からの航空利便性を向上させる。同時に、周辺地域の経済発展と活性化を促進する。

### 必要だと思ったきっかけ

地域住民として、現状の航空アクセスの不便さを日々感じていた。また、地域経済の停滞を目の当たりにし、新たな発展の機会が必要だと考えていた。横田基地の軍民共用化が、これらの課題を解決する可能性のある政策だと知り、その必要性を強く感じるようになった。

### なぜ必要か

1. 航空利便性の向上：首都圏西部地域からの空港アクセス時間が大幅に短縮される。\r
2. 経済波及効果：年間利用者数約560万人、経済効果約1,680億円と試算されており、地域経済に大きな影響を与える。\r
3. 雇用創出：空港関連施設の運営やサービス業など、新たな雇用機会が生まれる。\r
4. 地域産業の活性化：多摩地域の中小企業の活動が活性化し、観光業や物流業などの発展も期待できる。\r
5. インフラ整備の促進：空港周辺のインフラ整備が進み、地域全体の利便性が向上する。\r
6. 地域開発の促進：武蔵村山市の市議会では、軍民共用化実現により地域の活性化や多摩都市モノレールの延伸が促進されるとの期待がある。\r
7. 地域住民の支持：武蔵村山市の市民意識調査では、約60.6%が軍民共用化に賛成しており、地域のニーズに合致している。

### この Issue で議論したいこと

1. 騒音問題への具体的な対策：騒音の少ない機種の導入や運行時間帯の調整など、実効性のある解決策\r
2. 日米協議の進め方：軍民共用化実現に向けた日米間の協議をどのように進めるべきか\r
3. 地域住民との合意形成：共用化によるメリットとデメリットのバランスをどのように取るか\r
4. 周辺地域の開発計画：空港を核とした地域開発をどのように進めるべきか\r
5. 環境影響評価：軍民共用化が地域環境に与える影響とその対策\r
6. 交通アクセスの改善計画：公共交通機関の整備や道路網の拡充をどのように進めるか

### 調べたこと（裏付けとなる事実・ファクト）

https://www.city.musashimurayama.lg.jp/_res/projects/default_project/_page_/001/002/743/gunmin091117-2.pdf\r
https://www.city.tachikawa.lg.jp/_res/projects/default_project/_page_/001/005/393/0000000009_0000006643.pdf\r
https://trafficnews.jp/post/127628\r
https://www.toshiseibi.metro.tokyo.lg.jp/bunyabetsu/kichitaisaku/gunmin_kyoyo/igi.html\r
https://www.toshiseibi.metro.tokyo.lg.jp/pamphlet/pdf/udt2024japanese_8.pdf\r
https://www.town.mizuho.tokyo.jp/tyosei/021/005/p006735_d/fil/3-2.pdf

### 自由記述欄

これらの議論を通じて、横田基地の軍民共用化を早期に、かつ地域にとって最適な形で実現することを目指して頂きたいと考えています。`,comments:{totalCount:0},reactions:{totalCount:0},labels:{nodes:[{name:"経済"}]}}];function IA(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const _A=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,AA=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,TA={};function d1(e,n){return(TA.jsx?AA:_A).test(e)}const OA=/[ \t\n\f\r]/g;function PA(e){return typeof e=="object"?e.type==="text"?f1(e.value):!1:f1(e)}function f1(e){return e.replace(OA,"")===""}class gs{constructor(n,t,r){this.property=n,this.normal=t,r&&(this.space=r)}}gs.prototype.property={};gs.prototype.normal={};gs.prototype.space=null;function s3(e,n){const t={},r={};let o=-1;for(;++o<e.length;)Object.assign(t,e[o].property),Object.assign(r,e[o].normal);return new gs(t,r,n)}function ih(e){return e.toLowerCase()}class hr{constructor(n,t){this.property=n,this.attribute=t}}hr.prototype.space=null;hr.prototype.boolean=!1;hr.prototype.booleanish=!1;hr.prototype.overloadedBoolean=!1;hr.prototype.number=!1;hr.prototype.commaSeparated=!1;hr.prototype.spaceSeparated=!1;hr.prototype.commaOrSpaceSeparated=!1;hr.prototype.mustUseProperty=!1;hr.prototype.defined=!1;let NA=0;const on=ki(),Kn=ki(),c3=ki(),ce=ki(),An=ki(),ra=ki(),Ht=ki();function ki(){return 2**++NA}const ah=Object.freeze(Object.defineProperty({__proto__:null,boolean:on,booleanish:Kn,commaOrSpaceSeparated:Ht,commaSeparated:ra,number:ce,overloadedBoolean:c3,spaceSeparated:An},Symbol.toStringTag,{value:"Module"})),gf=Object.keys(ah);class zp extends hr{constructor(n,t,r,o){let i=-1;if(super(n,t),m1(this,"space",o),typeof r=="number")for(;++i<gf.length;){const a=gf[i];m1(this,gf[i],(r&ah[a])===ah[a])}}}zp.prototype.defined=!0;function m1(e,n,t){t&&(e[n]=t)}const RA={}.hasOwnProperty;function Oa(e){const n={},t={};let r;for(r in e.properties)if(RA.call(e.properties,r)){const o=e.properties[r],i=new zp(r,e.transform(e.attributes||{},r),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),n[r]=i,t[ih(r)]=r,t[ih(i.attribute)]=r}return new gs(n,t,e.space)}const u3=Oa({space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),d3=Oa({space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function f3(e,n){return n in e?e[n]:n}function m3(e,n){return f3(e,n.toLowerCase())}const h3=Oa({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:m3,properties:{xmlns:null,xmlnsXLink:null}}),p3=Oa({transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:Kn,ariaAutoComplete:null,ariaBusy:Kn,ariaChecked:Kn,ariaColCount:ce,ariaColIndex:ce,ariaColSpan:ce,ariaControls:An,ariaCurrent:null,ariaDescribedBy:An,ariaDetails:null,ariaDisabled:Kn,ariaDropEffect:An,ariaErrorMessage:null,ariaExpanded:Kn,ariaFlowTo:An,ariaGrabbed:Kn,ariaHasPopup:null,ariaHidden:Kn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:An,ariaLevel:ce,ariaLive:null,ariaModal:Kn,ariaMultiLine:Kn,ariaMultiSelectable:Kn,ariaOrientation:null,ariaOwns:An,ariaPlaceholder:null,ariaPosInSet:ce,ariaPressed:Kn,ariaReadOnly:Kn,ariaRelevant:null,ariaRequired:Kn,ariaRoleDescription:An,ariaRowCount:ce,ariaRowIndex:ce,ariaRowSpan:ce,ariaSelected:Kn,ariaSetSize:ce,ariaSort:null,ariaValueMax:ce,ariaValueMin:ce,ariaValueNow:ce,ariaValueText:null,role:null}}),FA=Oa({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:m3,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ra,acceptCharset:An,accessKey:An,action:null,allow:null,allowFullScreen:on,allowPaymentRequest:on,allowUserMedia:on,alt:null,as:null,async:on,autoCapitalize:null,autoComplete:An,autoFocus:on,autoPlay:on,blocking:An,capture:null,charSet:null,checked:on,cite:null,className:An,cols:ce,colSpan:null,content:null,contentEditable:Kn,controls:on,controlsList:An,coords:ce|ra,crossOrigin:null,data:null,dateTime:null,decoding:null,default:on,defer:on,dir:null,dirName:null,disabled:on,download:c3,draggable:Kn,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:on,formTarget:null,headers:An,height:ce,hidden:on,high:ce,href:null,hrefLang:null,htmlFor:An,httpEquiv:An,id:null,imageSizes:null,imageSrcSet:null,inert:on,inputMode:null,integrity:null,is:null,isMap:on,itemId:null,itemProp:An,itemRef:An,itemScope:on,itemType:An,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:on,low:ce,manifest:null,max:null,maxLength:ce,media:null,method:null,min:null,minLength:ce,multiple:on,muted:on,name:null,nonce:null,noModule:on,noValidate:on,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:on,optimum:ce,pattern:null,ping:An,placeholder:null,playsInline:on,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:on,referrerPolicy:null,rel:An,required:on,reversed:on,rows:ce,rowSpan:ce,sandbox:An,scope:null,scoped:on,seamless:on,selected:on,shadowRootClonable:on,shadowRootDelegatesFocus:on,shadowRootMode:null,shape:null,size:ce,sizes:null,slot:null,span:ce,spellCheck:Kn,src:null,srcDoc:null,srcLang:null,srcSet:null,start:ce,step:null,style:null,tabIndex:ce,target:null,title:null,translate:null,type:null,typeMustMatch:on,useMap:null,value:Kn,width:ce,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:An,axis:null,background:null,bgColor:null,border:ce,borderColor:null,bottomMargin:ce,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:on,declare:on,event:null,face:null,frame:null,frameBorder:null,hSpace:ce,leftMargin:ce,link:null,longDesc:null,lowSrc:null,marginHeight:ce,marginWidth:ce,noResize:on,noHref:on,noShade:on,noWrap:on,object:null,profile:null,prompt:null,rev:null,rightMargin:ce,rules:null,scheme:null,scrolling:Kn,standby:null,summary:null,text:null,topMargin:ce,valueType:null,version:null,vAlign:null,vLink:null,vSpace:ce,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:on,disableRemotePlayback:on,prefix:null,property:null,results:ce,security:null,unselectable:null}}),MA=Oa({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:f3,properties:{about:Ht,accentHeight:ce,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:ce,amplitude:ce,arabicForm:null,ascent:ce,attributeName:null,attributeType:null,azimuth:ce,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:ce,by:null,calcMode:null,capHeight:ce,className:An,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:ce,diffuseConstant:ce,direction:null,display:null,dur:null,divisor:ce,dominantBaseline:null,download:on,dx:null,dy:null,edgeMode:null,editable:null,elevation:ce,enableBackground:null,end:null,event:null,exponent:ce,externalResourcesRequired:null,fill:null,fillOpacity:ce,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ra,g2:ra,glyphName:ra,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:ce,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:ce,horizOriginX:ce,horizOriginY:ce,id:null,ideographic:ce,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:ce,k:ce,k1:ce,k2:ce,k3:ce,k4:ce,kernelMatrix:Ht,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:ce,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:ce,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:ce,overlineThickness:ce,paintOrder:null,panose1:null,path:null,pathLength:ce,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:An,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:ce,pointsAtY:ce,pointsAtZ:ce,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ht,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ht,rev:Ht,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ht,requiredFeatures:Ht,requiredFonts:Ht,requiredFormats:Ht,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:ce,specularExponent:ce,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:ce,strikethroughThickness:ce,string:null,stroke:null,strokeDashArray:Ht,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:ce,strokeOpacity:ce,strokeWidth:null,style:null,surfaceScale:ce,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ht,tabIndex:ce,tableValues:null,target:null,targetX:ce,targetY:ce,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ht,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:ce,underlineThickness:ce,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:ce,values:null,vAlphabetic:ce,vMathematical:ce,vectorEffect:null,vHanging:ce,vIdeographic:ce,version:null,vertAdvY:ce,vertOriginX:ce,vertOriginY:ce,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:ce,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),LA=/^data[-\w.:]+$/i,h1=/-[a-z]/g,jA=/[A-Z]/g;function DA(e,n){const t=ih(n);let r=n,o=hr;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&LA.test(n)){if(n.charAt(4)==="-"){const i=n.slice(5).replace(h1,BA);r="data"+i.charAt(0).toUpperCase()+i.slice(1)}else{const i=n.slice(4);if(!h1.test(i)){let a=i.replace(jA,$A);a.charAt(0)!=="-"&&(a="-"+a),n="data"+a}}o=zp}return new o(r,n)}function $A(e){return"-"+e.toLowerCase()}function BA(e){return e.charAt(1).toUpperCase()}const zA={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},HA=s3([d3,u3,h3,p3,FA],"html"),Hp=s3([d3,u3,h3,p3,MA],"svg");function UA(e){return e.join(" ").trim()}var g3={},p1=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,VA=/\n/g,WA=/^\s*/,XA=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,GA=/^:\s*/,ZA=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,KA=/^[;\s]*/,qA=/^\s+|\s+$/g,QA=`
`,g1="/",v1="*",Yo="",YA="comment",JA="declaration",eT=function(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,r=1;function o(h){var b=h.match(VA);b&&(t+=b.length);var k=h.lastIndexOf(QA);r=~k?h.length-k:r+h.length}function i(){var h={line:t,column:r};return function(b){return b.position=new a(h),c(),b}}function a(h){this.start=h,this.end={line:t,column:r},this.source=n.source}a.prototype.content=e;function l(h){var b=new Error(n.source+":"+t+":"+r+": "+h);if(b.reason=h,b.filename=n.source,b.line=t,b.column=r,b.source=e,!n.silent)throw b}function s(h){var b=h.exec(e);if(b){var k=b[0];return o(k),e=e.slice(k.length),b}}function c(){s(WA)}function u(h){var b;for(h=h||[];b=d();)b!==!1&&h.push(b);return h}function d(){var h=i();if(!(g1!=e.charAt(0)||v1!=e.charAt(1))){for(var b=2;Yo!=e.charAt(b)&&(v1!=e.charAt(b)||g1!=e.charAt(b+1));)++b;if(b+=2,Yo===e.charAt(b-1))return l("End of comment missing");var k=e.slice(2,b-2);return r+=2,o(k),e=e.slice(b),r+=2,h({type:YA,comment:k})}}function f(){var h=i(),b=s(XA);if(b){if(d(),!s(GA))return l("property missing ':'");var k=s(ZA),g=h({type:JA,property:b1(b[0].replace(p1,Yo)),value:k?b1(k[0].replace(p1,Yo)):Yo});return s(KA),g}}function m(){var h=[];u(h);for(var b;b=f();)b!==!1&&(h.push(b),u(h));return h}return c(),m()};function b1(e){return e?e.replace(qA,Yo):Yo}var nT=Wt&&Wt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(g3,"__esModule",{value:!0});var tT=nT(eT);function rT(e,n){var t=null;if(!e||typeof e!="string")return t;var r=(0,tT.default)(e),o=typeof n=="function";return r.forEach(function(i){if(i.type==="declaration"){var a=i.property,l=i.value;o?n(a,l,i):l&&(t=t||{},t[a]=l)}}),t}var y1=g3.default=rT;const oT=y1.default||y1,v3=b3("end"),Up=b3("start");function b3(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function iT(e){const n=Up(e),t=v3(e);if(n&&t)return{start:n,end:t}}function Cl(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?w1(e.position):"start"in e||"end"in e?w1(e):"line"in e||"column"in e?lh(e):""}function lh(e){return C1(e&&e.line)+":"+C1(e&&e.column)}function w1(e){return lh(e&&e.start)+"-"+lh(e&&e.end)}function C1(e){return e&&typeof e=="number"?e:1}class wt extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let o="",i={},a=!1;if(t&&("line"in t&&"column"in t?i={place:t}:"start"in t&&"end"in t?i={place:t}:"type"in t?i={ancestors:[t],place:t.position}:i={...t}),typeof n=="string"?o=n:!i.cause&&n&&(a=!0,o=n.message,i.cause=n),!i.ruleId&&!i.source&&typeof r=="string"){const s=r.indexOf(":");s===-1?i.ruleId=r:(i.source=r.slice(0,s),i.ruleId=r.slice(s+1))}if(!i.place&&i.ancestors&&i.ancestors){const s=i.ancestors[i.ancestors.length-1];s&&(i.place=s.position)}const l=i.place&&"start"in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file,this.message=o,this.line=l?l.line:void 0,this.name=Cl(i.place)||"1:1",this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&typeof i.cause.stack=="string"?i.cause.stack:"",this.actual,this.expected,this.note,this.url}}wt.prototype.file="";wt.prototype.name="";wt.prototype.reason="";wt.prototype.message="";wt.prototype.stack="";wt.prototype.column=void 0;wt.prototype.line=void 0;wt.prototype.ancestors=void 0;wt.prototype.cause=void 0;wt.prototype.fatal=void 0;wt.prototype.place=void 0;wt.prototype.ruleId=void 0;wt.prototype.source=void 0;const Vp={}.hasOwnProperty,aT=new Map,lT=/[A-Z]/g,sT=/-([a-z])/g,cT=new Set(["table","tbody","thead","tfoot","tr"]),uT=new Set(["td","th"]),y3="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function dT(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let r;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=yT(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=bT(t,n.jsx,n.jsxs)}const o={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:r,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Hp:HA,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},i=w3(o,e,void 0);return i&&typeof i!="string"?i:o.create(e,o.Fragment,{children:i||void 0},void 0)}function w3(e,n,t){if(n.type==="element")return fT(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return mT(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return pT(e,n,t);if(n.type==="mdxjsEsm")return hT(e,n);if(n.type==="root")return gT(e,n,t);if(n.type==="text")return vT(e,n)}function fT(e,n,t){const r=e.schema;let o=r;n.tagName.toLowerCase()==="svg"&&r.space==="html"&&(o=Hp,e.schema=o),e.ancestors.push(n);const i=S3(e,n.tagName,!1),a=wT(e,n);let l=Xp(e,n);return cT.has(n.tagName)&&(l=l.filter(function(s){return typeof s=="string"?!PA(s):!0})),C3(e,a,i,n),Wp(a,l),e.ancestors.pop(),e.schema=r,e.create(n,i,a,t)}function mT(e,n){if(n.data&&n.data.estree&&e.evaluater){const r=n.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Yl(e,n.position)}function hT(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);Yl(e,n.position)}function pT(e,n,t){const r=e.schema;let o=r;n.name==="svg"&&r.space==="html"&&(o=Hp,e.schema=o),e.ancestors.push(n);const i=n.name===null?e.Fragment:S3(e,n.name,!0),a=CT(e,n),l=Xp(e,n);return C3(e,a,i,n),Wp(a,l),e.ancestors.pop(),e.schema=r,e.create(n,i,a,t)}function gT(e,n,t){const r={};return Wp(r,Xp(e,n)),e.create(n,e.Fragment,r,t)}function vT(e,n){return n.value}function C3(e,n,t,r){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=r)}function Wp(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function bT(e,n,t){return r;function r(o,i,a,l){const c=Array.isArray(a.children)?t:n;return l?c(i,a,l):c(i,a)}}function yT(e,n){return t;function t(r,o,i,a){const l=Array.isArray(i.children),s=Up(r);return n(o,i,a,l,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function wT(e,n){const t={};let r,o;for(o in n.properties)if(o!=="children"&&Vp.call(n.properties,o)){const i=ST(e,o,n.properties[o]);if(i){const[a,l]=i;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&uT.has(n.tagName)?r=l:t[a]=l}}if(r){const i=t.style||(t.style={});i[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function CT(e,n){const t={};for(const r of n.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const i=r.data.estree.body[0];i.type;const a=i.expression;a.type;const l=a.properties[0];l.type,Object.assign(t,e.evaluater.evaluateExpression(l.argument))}else Yl(e,n.position);else{const o=r.name;let i;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,i=e.evaluater.evaluateExpression(l.expression)}else Yl(e,n.position);else i=r.value===null?!0:r.value;t[o]=i}return t}function Xp(e,n){const t=[];let r=-1;const o=e.passKeys?new Map:aT;for(;++r<n.children.length;){const i=n.children[r];let a;if(e.passKeys){const s=i.type==="element"?i.tagName:i.type==="mdxJsxFlowElement"||i.type==="mdxJsxTextElement"?i.name:void 0;if(s){const c=o.get(s)||0;a=s+"-"+c,o.set(s,c+1)}}const l=w3(e,i,a);l!==void 0&&t.push(l)}return t}function ST(e,n,t){const r=DA(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?IA(t):UA(t)),r.property==="style"){let o=typeof t=="object"?t:kT(e,String(t));return e.stylePropertyNameCase==="css"&&(o=ET(o)),["style",o]}return[e.elementAttributeNameCase==="react"&&r.space?zA[r.property]||r.property:r.attribute,t]}}function kT(e,n){const t={};try{oT(n,r)}catch(o){if(!e.ignoreInvalidStyle){const i=o,a=new wt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw a.file=e.filePath||void 0,a.url=y3+"#cannot-parse-style-attribute",a}}return t;function r(o,i){let a=o;a.slice(0,2)!=="--"&&(a.slice(0,4)==="-ms-"&&(a="ms-"+a.slice(4)),a=a.replace(sT,IT)),t[a]=i}}function S3(e,n,t){let r;if(!t)r={type:"Literal",value:n};else if(n.includes(".")){const o=n.split(".");let i=-1,a;for(;++i<o.length;){const l=d1(o[i])?{type:"Identifier",name:o[i]}:{type:"Literal",value:o[i]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(i&&l.type==="Literal"),optional:!1}:l}r=a}else r=d1(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(r.type==="Literal"){const o=r.value;return Vp.call(e.components,o)?e.components[o]:o}if(e.evaluater)return e.evaluater.evaluateExpression(r);Yl(e)}function Yl(e,n){const t=new wt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=y3+"#cannot-handle-mdx-estrees-without-createevaluater",t}function ET(e){const n={};let t;for(t in e)Vp.call(e,t)&&(n[xT(t)]=e[t]);return n}function xT(e){let n=e.replace(lT,_T);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function IT(e,n){return n.toUpperCase()}function _T(e){return"-"+e.toLowerCase()}const vf={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},AT={};function TT(e,n){const t=AT,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,o=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return k3(e,r,o)}function k3(e,n,t){if(OT(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return S1(e.children,n,t)}return Array.isArray(e)?S1(e,n,t):""}function S1(e,n,t){const r=[];let o=-1;for(;++o<e.length;)r[o]=k3(e[o],n,t);return r.join("")}function OT(e){return!!(e&&typeof e=="object")}const k1=document.createElement("i");function Gp(e){const n="&"+e+";";k1.innerHTML=n;const t=k1.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function oo(e,n,t,r){const o=e.length;let i=0,a;if(n<0?n=-n>o?0:o+n:n=n>o?o:n,t=t>0?t:0,r.length<1e4)a=Array.from(r),a.unshift(n,t),e.splice(...a);else for(t&&e.splice(n,t);i<r.length;)a=r.slice(i,i+1e4),a.unshift(n,0),e.splice(...a),i+=1e4,n+=1e4}function ir(e,n){return e.length>0?(oo(e,e.length,0,n),e):n}const E1={}.hasOwnProperty;function PT(e){const n={};let t=-1;for(;++t<e.length;)NT(n,e[t]);return n}function NT(e,n){let t;for(t in n){const o=(E1.call(e,t)?e[t]:void 0)||(e[t]={}),i=n[t];let a;if(i)for(a in i){E1.call(o,a)||(o[a]=[]);const l=i[a];RT(o[a],Array.isArray(l)?l:l?[l]:[])}}}function RT(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);oo(e,0,0,r)}function E3(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function oa(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Mr=zo(/[A-Za-z]/),Gt=zo(/[\dA-Za-z]/),FT=zo(/[#-'*+\--9=?A-Z^-~]/);function sh(e){return e!==null&&(e<32||e===127)}const ch=zo(/\d/),MT=zo(/[\dA-Fa-f]/),LT=zo(/[!-/:-@[-`{-~]/);function Je(e){return e!==null&&e<-2}function Lt(e){return e!==null&&(e<0||e===32)}function wn(e){return e===-2||e===-1||e===32}const jT=zo(new RegExp("\\p{P}|\\p{S}","u")),DT=zo(/\s/);function zo(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function Pa(e){const n=[];let t=-1,r=0,o=0;for(;++t<e.length;){const i=e.charCodeAt(t);let a="";if(i===37&&Gt(e.charCodeAt(t+1))&&Gt(e.charCodeAt(t+2)))o=2;else if(i<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i))||(a=String.fromCharCode(i));else if(i>55295&&i<57344){const l=e.charCodeAt(t+1);i<56320&&l>56319&&l<57344?(a=String.fromCharCode(i,l),o=1):a="�"}else a=String.fromCharCode(i);a&&(n.push(e.slice(r,t),encodeURIComponent(a)),r=t+o+1,a=""),o&&(t+=o,o=0)}return n.join("")+e.slice(r)}function Pn(e,n,t,r){const o=r?r-1:Number.POSITIVE_INFINITY;let i=0;return a;function a(s){return wn(s)?(e.enter(t),l(s)):n(s)}function l(s){return wn(s)&&i++<o?(e.consume(s),l):(e.exit(t),n(s))}}const $T={tokenize:BT};function BT(e){const n=e.attempt(this.parser.constructs.contentInitial,r,o);let t;return n;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Pn(e,n,"linePrefix")}function o(l){return e.enter("paragraph"),i(l)}function i(l){const s=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=s),t=s,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return Je(l)?(e.consume(l),e.exit("chunkText"),i):(e.consume(l),a)}}const zT={tokenize:HT},x1={tokenize:UT};function HT(e){const n=this,t=[];let r=0,o,i,a;return l;function l(y){if(r<t.length){const E=t[r];return n.containerState=E[1],e.attempt(E[0].continuation,s,c)(y)}return c(y)}function s(y){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,o&&v();const E=n.events.length;let _=E,w;for(;_--;)if(n.events[_][0]==="exit"&&n.events[_][1].type==="chunkFlow"){w=n.events[_][1].end;break}g(r);let A=E;for(;A<n.events.length;)n.events[A][1].end=Object.assign({},w),A++;return oo(n.events,_+1,0,n.events.slice(E)),n.events.length=A,c(y)}return l(y)}function c(y){if(r===t.length){if(!o)return f(y);if(o.currentConstruct&&o.currentConstruct.concrete)return h(y);n.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(x1,u,d)(y)}function u(y){return o&&v(),g(r),f(y)}function d(y){return n.parser.lazy[n.now().line]=r!==t.length,a=n.now().offset,h(y)}function f(y){return n.containerState={},e.attempt(x1,m,h)(y)}function m(y){return r++,t.push([n.currentConstruct,n.containerState]),f(y)}function h(y){if(y===null){o&&v(),g(0),e.consume(y);return}return o=o||n.parser.flow(n.now()),e.enter("chunkFlow",{contentType:"flow",previous:i,_tokenizer:o}),b(y)}function b(y){if(y===null){k(e.exit("chunkFlow"),!0),g(0),e.consume(y);return}return Je(y)?(e.consume(y),k(e.exit("chunkFlow")),r=0,n.interrupt=void 0,l):(e.consume(y),b)}function k(y,E){const _=n.sliceStream(y);if(E&&_.push(null),y.previous=i,i&&(i.next=y),i=y,o.defineSkip(y.start),o.write(_),n.parser.lazy[y.start.line]){let w=o.events.length;for(;w--;)if(o.events[w][1].start.offset<a&&(!o.events[w][1].end||o.events[w][1].end.offset>a))return;const A=n.events.length;let N=A,R,V;for(;N--;)if(n.events[N][0]==="exit"&&n.events[N][1].type==="chunkFlow"){if(R){V=n.events[N][1].end;break}R=!0}for(g(r),w=A;w<n.events.length;)n.events[w][1].end=Object.assign({},V),w++;oo(n.events,N+1,0,n.events.slice(A)),n.events.length=w}}function g(y){let E=t.length;for(;E-- >y;){const _=t[E];n.containerState=_[1],_[0].exit.call(n,e)}t.length=y}function v(){o.write([null]),i=void 0,o=void 0,n.containerState._closeFlow=void 0}}function UT(e,n,t){return Pn(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function I1(e){if(e===null||Lt(e)||DT(e))return 1;if(jT(e))return 2}function Zp(e,n,t){const r=[];let o=-1;for(;++o<e.length;){const i=e[o].resolveAll;i&&!r.includes(i)&&(n=i(n,t),r.push(i))}return n}const uh={name:"attention",tokenize:WT,resolveAll:VT};function VT(e,n){let t=-1,r,o,i,a,l,s,c,u;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(r=t;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const d=Object.assign({},e[r][1].end),f=Object.assign({},e[t][1].start);_1(d,-s),_1(f,s),a={type:s>1?"strongSequence":"emphasisSequence",start:d,end:Object.assign({},e[r][1].end)},l={type:s>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[t][1].start),end:f},i={type:s>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[t][1].start)},o={type:s>1?"strong":"emphasis",start:Object.assign({},a.start),end:Object.assign({},l.end)},e[r][1].end=Object.assign({},a.start),e[t][1].start=Object.assign({},l.end),c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=ir(c,[["enter",e[r][1],n],["exit",e[r][1],n]])),c=ir(c,[["enter",o,n],["enter",a,n],["exit",a,n],["enter",i,n]]),c=ir(c,Zp(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),c=ir(c,[["exit",i,n],["enter",l,n],["exit",l,n],["exit",o,n]]),e[t][1].end.offset-e[t][1].start.offset?(u=2,c=ir(c,[["enter",e[t][1],n],["exit",e[t][1],n]])):u=0,oo(e,r-1,t-r+3,c),t=r+c.length-u-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function WT(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,o=I1(r);let i;return a;function a(s){return i=s,e.enter("attentionSequence"),l(s)}function l(s){if(s===i)return e.consume(s),l;const c=e.exit("attentionSequence"),u=I1(s),d=!u||u===2&&o||t.includes(s),f=!o||o===2&&u||t.includes(r);return c._open=!!(i===42?d:d&&(o||!f)),c._close=!!(i===42?f:f&&(u||!d)),n(s)}}function _1(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const XT={name:"autolink",tokenize:GT};function GT(e,n,t){let r=0;return o;function o(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),i}function i(m){return Mr(m)?(e.consume(m),a):m===64?t(m):c(m)}function a(m){return m===43||m===45||m===46||Gt(m)?(r=1,l(m)):c(m)}function l(m){return m===58?(e.consume(m),r=0,s):(m===43||m===45||m===46||Gt(m))&&r++<32?(e.consume(m),l):(r=0,c(m))}function s(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),n):m===null||m===32||m===60||sh(m)?t(m):(e.consume(m),s)}function c(m){return m===64?(e.consume(m),u):FT(m)?(e.consume(m),c):t(m)}function u(m){return Gt(m)?d(m):t(m)}function d(m){return m===46?(e.consume(m),r=0,u):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),n):f(m)}function f(m){if((m===45||Gt(m))&&r++<63){const h=m===45?f:d;return e.consume(m),h}return t(m)}}const cd={tokenize:ZT,partial:!0};function ZT(e,n,t){return r;function r(i){return wn(i)?Pn(e,o,"linePrefix")(i):o(i)}function o(i){return i===null||Je(i)?n(i):t(i)}}const x3={name:"blockQuote",tokenize:KT,continuation:{tokenize:qT},exit:QT};function KT(e,n,t){const r=this;return o;function o(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),i}return t(a)}function i(a){return wn(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(a))}}function qT(e,n,t){const r=this;return o;function o(a){return wn(a)?Pn(e,i,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):i(a)}function i(a){return e.attempt(x3,n,t)(a)}}function QT(e){e.exit("blockQuote")}const I3={name:"characterEscape",tokenize:YT};function YT(e,n,t){return r;function r(i){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(i),e.exit("escapeMarker"),o}function o(i){return LT(i)?(e.enter("characterEscapeValue"),e.consume(i),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(i)}}const _3={name:"characterReference",tokenize:JT};function JT(e,n,t){const r=this;let o=0,i,a;return l;function l(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),s}function s(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),i=31,a=Gt,u(d))}function c(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),i=6,a=MT,u):(e.enter("characterReferenceValue"),i=7,a=ch,u(d))}function u(d){if(d===59&&o){const f=e.exit("characterReferenceValue");return a===Gt&&!Gp(r.sliceSerialize(f))?t(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return a(d)&&o++<i?(e.consume(d),u):t(d)}}const A1={tokenize:nO,partial:!0},T1={name:"codeFenced",tokenize:eO,concrete:!0};function eO(e,n,t){const r=this,o={tokenize:_,partial:!0};let i=0,a=0,l;return s;function s(w){return c(w)}function c(w){const A=r.events[r.events.length-1];return i=A&&A[1].type==="linePrefix"?A[2].sliceSerialize(A[1],!0).length:0,l=w,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),u(w)}function u(w){return w===l?(a++,e.consume(w),u):a<3?t(w):(e.exit("codeFencedFenceSequence"),wn(w)?Pn(e,d,"whitespace")(w):d(w))}function d(w){return w===null||Je(w)?(e.exit("codeFencedFence"),r.interrupt?n(w):e.check(A1,b,E)(w)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(w))}function f(w){return w===null||Je(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(w)):wn(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Pn(e,m,"whitespace")(w)):w===96&&w===l?t(w):(e.consume(w),f)}function m(w){return w===null||Je(w)?d(w):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),h(w))}function h(w){return w===null||Je(w)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(w)):w===96&&w===l?t(w):(e.consume(w),h)}function b(w){return e.attempt(o,E,k)(w)}function k(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),g}function g(w){return i>0&&wn(w)?Pn(e,v,"linePrefix",i+1)(w):v(w)}function v(w){return w===null||Je(w)?e.check(A1,b,E)(w):(e.enter("codeFlowValue"),y(w))}function y(w){return w===null||Je(w)?(e.exit("codeFlowValue"),v(w)):(e.consume(w),y)}function E(w){return e.exit("codeFenced"),n(w)}function _(w,A,N){let R=0;return V;function V(Z){return w.enter("lineEnding"),w.consume(Z),w.exit("lineEnding"),$}function $(Z){return w.enter("codeFencedFence"),wn(Z)?Pn(w,z,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Z):z(Z)}function z(Z){return Z===l?(w.enter("codeFencedFenceSequence"),j(Z)):N(Z)}function j(Z){return Z===l?(R++,w.consume(Z),j):R>=a?(w.exit("codeFencedFenceSequence"),wn(Z)?Pn(w,H,"whitespace")(Z):H(Z)):N(Z)}function H(Z){return Z===null||Je(Z)?(w.exit("codeFencedFence"),A(Z)):N(Z)}}}function nO(e,n,t){const r=this;return o;function o(a){return a===null?t(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i)}function i(a){return r.parser.lazy[r.now().line]?t(a):n(a)}}const bf={name:"codeIndented",tokenize:rO},tO={tokenize:oO,partial:!0};function rO(e,n,t){const r=this;return o;function o(c){return e.enter("codeIndented"),Pn(e,i,"linePrefix",5)(c)}function i(c){const u=r.events[r.events.length-1];return u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?a(c):t(c)}function a(c){return c===null?s(c):Je(c)?e.attempt(tO,a,s)(c):(e.enter("codeFlowValue"),l(c))}function l(c){return c===null||Je(c)?(e.exit("codeFlowValue"),a(c)):(e.consume(c),l)}function s(c){return e.exit("codeIndented"),n(c)}}function oO(e,n,t){const r=this;return o;function o(a){return r.parser.lazy[r.now().line]?t(a):Je(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):Pn(e,i,"linePrefix",5)(a)}function i(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(a):Je(a)?o(a):t(a)}}const iO={name:"codeText",tokenize:sO,resolve:aO,previous:lO};function aO(e){let n=e.length-4,t=3,r,o;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)o===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(o=r):(r===n||e[r][1].type==="lineEnding")&&(e[o][1].type="codeTextData",r!==o+2&&(e[o][1].end=e[r-1][1].end,e.splice(o+2,r-o-2),n-=r-o-2,r=o+2),o=void 0);return e}function lO(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function sO(e,n,t){let r=0,o,i;return a;function a(d){return e.enter("codeText"),e.enter("codeTextSequence"),l(d)}function l(d){return d===96?(e.consume(d),r++,l):(e.exit("codeTextSequence"),s(d))}function s(d){return d===null?t(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),s):d===96?(i=e.enter("codeTextSequence"),o=0,u(d)):Je(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),s):(e.enter("codeTextData"),c(d))}function c(d){return d===null||d===32||d===96||Je(d)?(e.exit("codeTextData"),s(d)):(e.consume(d),c)}function u(d){return d===96?(e.consume(d),o++,u):o===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(d)):(i.type="codeTextData",c(d))}}class cO{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const o=t||0;this.setCursor(Math.trunc(n));const i=this.right.splice(this.right.length-o,Number.POSITIVE_INFINITY);return r&&Ya(this.left,r),i.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),Ya(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),Ya(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);Ya(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);Ya(this.left,t.reverse())}}}function Ya(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function A3(e){const n={};let t=-1,r,o,i,a,l,s,c;const u=new cO(e);for(;++t<u.length;){for(;t in n;)t=n[t];if(r=u.get(t),t&&r[1].type==="chunkFlow"&&u.get(t-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,i=0,i<s.length&&s[i][1].type==="lineEndingBlank"&&(i+=2),i<s.length&&s[i][1].type==="content"))for(;++i<s.length&&s[i][1].type!=="content";)s[i][1].type==="chunkText"&&(s[i][1]._isInFirstContentOfListItem=!0,i++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,uO(u,t)),t=n[t],c=!0);else if(r[1]._container){for(i=t,o=void 0;i--&&(a=u.get(i),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank");)a[0]==="enter"&&(o&&(u.get(o)[1].type="lineEndingBlank"),a[1].type="lineEnding",o=i);o&&(r[1].end=Object.assign({},u.get(o)[1].start),l=u.slice(o,t),l.unshift(r),u.splice(o,t-o+1,l))}}return oo(e,0,Number.POSITIVE_INFINITY,u.slice(0)),!c}function uO(e,n){const t=e.get(n)[1],r=e.get(n)[2];let o=n-1;const i=[],a=t._tokenizer||r.parser[t.contentType](t.start),l=a.events,s=[],c={};let u,d,f=-1,m=t,h=0,b=0;const k=[b];for(;m;){for(;e.get(++o)[1]!==m;);i.push(o),m._tokenizer||(u=r.sliceStream(m),m.next||u.push(null),d&&a.defineSkip(m.start),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(u),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),d=m,m=m.next}for(m=t;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(b=f+1,k.push(b),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(a.events=[],m?(m._tokenizer=void 0,m.previous=void 0):k.pop(),f=k.length;f--;){const g=l.slice(k[f],k[f+1]),v=i.pop();s.push([v,v+g.length-1]),e.splice(v,2,g)}for(s.reverse(),f=-1;++f<s.length;)c[h+s[f][0]]=h+s[f][1],h+=s[f][1]-s[f][0]-1;return c}const dO={tokenize:hO,resolve:mO},fO={tokenize:pO,partial:!0};function mO(e){return A3(e),e}function hO(e,n){let t;return r;function r(l){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),o(l)}function o(l){return l===null?i(l):Je(l)?e.check(fO,a,i)(l):(e.consume(l),o)}function i(l){return e.exit("chunkContent"),e.exit("content"),n(l)}function a(l){return e.consume(l),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,o}}function pO(e,n,t){const r=this;return o;function o(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Pn(e,i,"linePrefix")}function i(a){if(a===null||Je(a))return t(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(a):e.interrupt(r.parser.constructs.flow,t,n)(a)}}function T3(e,n,t,r,o,i,a,l,s){const c=s||Number.POSITIVE_INFINITY;let u=0;return d;function d(g){return g===60?(e.enter(r),e.enter(o),e.enter(i),e.consume(g),e.exit(i),f):g===null||g===32||g===41||sh(g)?t(g):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),b(g))}function f(g){return g===62?(e.enter(i),e.consume(g),e.exit(i),e.exit(o),e.exit(r),n):(e.enter(l),e.enter("chunkString",{contentType:"string"}),m(g))}function m(g){return g===62?(e.exit("chunkString"),e.exit(l),f(g)):g===null||g===60||Je(g)?t(g):(e.consume(g),g===92?h:m)}function h(g){return g===60||g===62||g===92?(e.consume(g),m):m(g)}function b(g){return!u&&(g===null||g===41||Lt(g))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),n(g)):u<c&&g===40?(e.consume(g),u++,b):g===41?(e.consume(g),u--,b):g===null||g===32||g===40||sh(g)?t(g):(e.consume(g),g===92?k:b)}function k(g){return g===40||g===41||g===92?(e.consume(g),b):b(g)}}function O3(e,n,t,r,o,i){const a=this;let l=0,s;return c;function c(m){return e.enter(r),e.enter(o),e.consume(m),e.exit(o),e.enter(i),u}function u(m){return l>999||m===null||m===91||m===93&&!s||m===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?t(m):m===93?(e.exit(i),e.enter(o),e.consume(m),e.exit(o),e.exit(r),n):Je(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),u):(e.enter("chunkString",{contentType:"string"}),d(m))}function d(m){return m===null||m===91||m===93||Je(m)||l++>999?(e.exit("chunkString"),u(m)):(e.consume(m),s||(s=!wn(m)),m===92?f:d)}function f(m){return m===91||m===92||m===93?(e.consume(m),l++,d):d(m)}}function P3(e,n,t,r,o,i){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(o),e.consume(f),e.exit(o),a=f===40?41:f,s):t(f)}function s(f){return f===a?(e.enter(o),e.consume(f),e.exit(o),e.exit(r),n):(e.enter(i),c(f))}function c(f){return f===a?(e.exit(i),s(a)):f===null?t(f):Je(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Pn(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),u(f))}function u(f){return f===a||f===null||Je(f)?(e.exit("chunkString"),c(f)):(e.consume(f),f===92?d:u)}function d(f){return f===a||f===92?(e.consume(f),u):u(f)}}function Sl(e,n){let t;return r;function r(o){return Je(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t=!0,r):wn(o)?Pn(e,r,t?"linePrefix":"lineSuffix")(o):n(o)}}const gO={name:"definition",tokenize:bO},vO={tokenize:yO,partial:!0};function bO(e,n,t){const r=this;let o;return i;function i(m){return e.enter("definition"),a(m)}function a(m){return O3.call(r,e,l,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function l(m){return o=oa(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),s):t(m)}function s(m){return Lt(m)?Sl(e,c)(m):c(m)}function c(m){return T3(e,u,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function u(m){return e.attempt(vO,d,d)(m)}function d(m){return wn(m)?Pn(e,f,"whitespace")(m):f(m)}function f(m){return m===null||Je(m)?(e.exit("definition"),r.parser.defined.push(o),n(m)):t(m)}}function yO(e,n,t){return r;function r(l){return Lt(l)?Sl(e,o)(l):t(l)}function o(l){return P3(e,i,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function i(l){return wn(l)?Pn(e,a,"whitespace")(l):a(l)}function a(l){return l===null||Je(l)?n(l):t(l)}}const wO={name:"hardBreakEscape",tokenize:CO};function CO(e,n,t){return r;function r(i){return e.enter("hardBreakEscape"),e.consume(i),o}function o(i){return Je(i)?(e.exit("hardBreakEscape"),n(i)):t(i)}}const SO={name:"headingAtx",tokenize:EO,resolve:kO};function kO(e,n){let t=e.length-2,r=3,o,i;return e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(o={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},i={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"},oo(e,r,t-r+1,[["enter",o,n],["enter",i,n],["exit",i,n],["exit",o,n]])),e}function EO(e,n,t){let r=0;return o;function o(u){return e.enter("atxHeading"),i(u)}function i(u){return e.enter("atxHeadingSequence"),a(u)}function a(u){return u===35&&r++<6?(e.consume(u),a):u===null||Lt(u)?(e.exit("atxHeadingSequence"),l(u)):t(u)}function l(u){return u===35?(e.enter("atxHeadingSequence"),s(u)):u===null||Je(u)?(e.exit("atxHeading"),n(u)):wn(u)?Pn(e,l,"whitespace")(u):(e.enter("atxHeadingText"),c(u))}function s(u){return u===35?(e.consume(u),s):(e.exit("atxHeadingSequence"),l(u))}function c(u){return u===null||u===35||Lt(u)?(e.exit("atxHeadingText"),l(u)):(e.consume(u),c)}}const xO=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],O1=["pre","script","style","textarea"],IO={name:"htmlFlow",tokenize:OO,resolveTo:TO,concrete:!0},_O={tokenize:NO,partial:!0},AO={tokenize:PO,partial:!0};function TO(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function OO(e,n,t){const r=this;let o,i,a,l,s;return c;function c(I){return u(I)}function u(I){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(I),d}function d(I){return I===33?(e.consume(I),f):I===47?(e.consume(I),i=!0,b):I===63?(e.consume(I),o=3,r.interrupt?n:S):Mr(I)?(e.consume(I),a=String.fromCharCode(I),k):t(I)}function f(I){return I===45?(e.consume(I),o=2,m):I===91?(e.consume(I),o=5,l=0,h):Mr(I)?(e.consume(I),o=4,r.interrupt?n:S):t(I)}function m(I){return I===45?(e.consume(I),r.interrupt?n:S):t(I)}function h(I){const Q="CDATA[";return I===Q.charCodeAt(l++)?(e.consume(I),l===Q.length?r.interrupt?n:z:h):t(I)}function b(I){return Mr(I)?(e.consume(I),a=String.fromCharCode(I),k):t(I)}function k(I){if(I===null||I===47||I===62||Lt(I)){const Q=I===47,oe=a.toLowerCase();return!Q&&!i&&O1.includes(oe)?(o=1,r.interrupt?n(I):z(I)):xO.includes(a.toLowerCase())?(o=6,Q?(e.consume(I),g):r.interrupt?n(I):z(I)):(o=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(I):i?v(I):y(I))}return I===45||Gt(I)?(e.consume(I),a+=String.fromCharCode(I),k):t(I)}function g(I){return I===62?(e.consume(I),r.interrupt?n:z):t(I)}function v(I){return wn(I)?(e.consume(I),v):V(I)}function y(I){return I===47?(e.consume(I),V):I===58||I===95||Mr(I)?(e.consume(I),E):wn(I)?(e.consume(I),y):V(I)}function E(I){return I===45||I===46||I===58||I===95||Gt(I)?(e.consume(I),E):_(I)}function _(I){return I===61?(e.consume(I),w):wn(I)?(e.consume(I),_):y(I)}function w(I){return I===null||I===60||I===61||I===62||I===96?t(I):I===34||I===39?(e.consume(I),s=I,A):wn(I)?(e.consume(I),w):N(I)}function A(I){return I===s?(e.consume(I),s=null,R):I===null||Je(I)?t(I):(e.consume(I),A)}function N(I){return I===null||I===34||I===39||I===47||I===60||I===61||I===62||I===96||Lt(I)?_(I):(e.consume(I),N)}function R(I){return I===47||I===62||wn(I)?y(I):t(I)}function V(I){return I===62?(e.consume(I),$):t(I)}function $(I){return I===null||Je(I)?z(I):wn(I)?(e.consume(I),$):t(I)}function z(I){return I===45&&o===2?(e.consume(I),B):I===60&&o===1?(e.consume(I),F):I===62&&o===4?(e.consume(I),G):I===63&&o===3?(e.consume(I),S):I===93&&o===5?(e.consume(I),W):Je(I)&&(o===6||o===7)?(e.exit("htmlFlowData"),e.check(_O,U,j)(I)):I===null||Je(I)?(e.exit("htmlFlowData"),j(I)):(e.consume(I),z)}function j(I){return e.check(AO,H,U)(I)}function H(I){return e.enter("lineEnding"),e.consume(I),e.exit("lineEnding"),Z}function Z(I){return I===null||Je(I)?j(I):(e.enter("htmlFlowData"),z(I))}function B(I){return I===45?(e.consume(I),S):z(I)}function F(I){return I===47?(e.consume(I),a="",O):z(I)}function O(I){if(I===62){const Q=a.toLowerCase();return O1.includes(Q)?(e.consume(I),G):z(I)}return Mr(I)&&a.length<8?(e.consume(I),a+=String.fromCharCode(I),O):z(I)}function W(I){return I===93?(e.consume(I),S):z(I)}function S(I){return I===62?(e.consume(I),G):I===45&&o===2?(e.consume(I),S):z(I)}function G(I){return I===null||Je(I)?(e.exit("htmlFlowData"),U(I)):(e.consume(I),G)}function U(I){return e.exit("htmlFlow"),n(I)}}function PO(e,n,t){const r=this;return o;function o(a){return Je(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):t(a)}function i(a){return r.parser.lazy[r.now().line]?t(a):n(a)}}function NO(e,n,t){return r;function r(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),e.attempt(cd,n,t)}}const RO={name:"htmlText",tokenize:FO};function FO(e,n,t){const r=this;let o,i,a;return l;function l(S){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(S),s}function s(S){return S===33?(e.consume(S),c):S===47?(e.consume(S),_):S===63?(e.consume(S),y):Mr(S)?(e.consume(S),N):t(S)}function c(S){return S===45?(e.consume(S),u):S===91?(e.consume(S),i=0,h):Mr(S)?(e.consume(S),v):t(S)}function u(S){return S===45?(e.consume(S),m):t(S)}function d(S){return S===null?t(S):S===45?(e.consume(S),f):Je(S)?(a=d,F(S)):(e.consume(S),d)}function f(S){return S===45?(e.consume(S),m):d(S)}function m(S){return S===62?B(S):S===45?f(S):d(S)}function h(S){const G="CDATA[";return S===G.charCodeAt(i++)?(e.consume(S),i===G.length?b:h):t(S)}function b(S){return S===null?t(S):S===93?(e.consume(S),k):Je(S)?(a=b,F(S)):(e.consume(S),b)}function k(S){return S===93?(e.consume(S),g):b(S)}function g(S){return S===62?B(S):S===93?(e.consume(S),g):b(S)}function v(S){return S===null||S===62?B(S):Je(S)?(a=v,F(S)):(e.consume(S),v)}function y(S){return S===null?t(S):S===63?(e.consume(S),E):Je(S)?(a=y,F(S)):(e.consume(S),y)}function E(S){return S===62?B(S):y(S)}function _(S){return Mr(S)?(e.consume(S),w):t(S)}function w(S){return S===45||Gt(S)?(e.consume(S),w):A(S)}function A(S){return Je(S)?(a=A,F(S)):wn(S)?(e.consume(S),A):B(S)}function N(S){return S===45||Gt(S)?(e.consume(S),N):S===47||S===62||Lt(S)?R(S):t(S)}function R(S){return S===47?(e.consume(S),B):S===58||S===95||Mr(S)?(e.consume(S),V):Je(S)?(a=R,F(S)):wn(S)?(e.consume(S),R):B(S)}function V(S){return S===45||S===46||S===58||S===95||Gt(S)?(e.consume(S),V):$(S)}function $(S){return S===61?(e.consume(S),z):Je(S)?(a=$,F(S)):wn(S)?(e.consume(S),$):R(S)}function z(S){return S===null||S===60||S===61||S===62||S===96?t(S):S===34||S===39?(e.consume(S),o=S,j):Je(S)?(a=z,F(S)):wn(S)?(e.consume(S),z):(e.consume(S),H)}function j(S){return S===o?(e.consume(S),o=void 0,Z):S===null?t(S):Je(S)?(a=j,F(S)):(e.consume(S),j)}function H(S){return S===null||S===34||S===39||S===60||S===61||S===96?t(S):S===47||S===62||Lt(S)?R(S):(e.consume(S),H)}function Z(S){return S===47||S===62||Lt(S)?R(S):t(S)}function B(S){return S===62?(e.consume(S),e.exit("htmlTextData"),e.exit("htmlText"),n):t(S)}function F(S){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),O}function O(S){return wn(S)?Pn(e,W,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):W(S)}function W(S){return e.enter("htmlTextData"),a(S)}}const Kp={name:"labelEnd",tokenize:BO,resolveTo:$O,resolveAll:DO},MO={tokenize:zO},LO={tokenize:HO},jO={tokenize:UO};function DO(e){let n=-1;for(;++n<e.length;){const t=e[n][1];(t.type==="labelImage"||t.type==="labelLink"||t.type==="labelEnd")&&(e.splice(n+1,t.type==="labelImage"?4:2),t.type="data",n++)}return e}function $O(e,n){let t=e.length,r=0,o,i,a,l;for(;t--;)if(o=e[t][1],i){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;e[t][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(a){if(e[t][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(i=t,o.type!=="labelLink")){r=2;break}}else o.type==="labelEnd"&&(a=t);const s={type:e[i][1].type==="labelLink"?"link":"image",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)},c={type:"label",start:Object.assign({},e[i][1].start),end:Object.assign({},e[a][1].end)},u={type:"labelText",start:Object.assign({},e[i+r+2][1].end),end:Object.assign({},e[a-2][1].start)};return l=[["enter",s,n],["enter",c,n]],l=ir(l,e.slice(i+1,i+r+3)),l=ir(l,[["enter",u,n]]),l=ir(l,Zp(n.parser.constructs.insideSpan.null,e.slice(i+r+4,a-3),n)),l=ir(l,[["exit",u,n],e[a-2],e[a-1],["exit",c,n]]),l=ir(l,e.slice(a+1)),l=ir(l,[["exit",s,n]]),oo(e,i,e.length,l),e}function BO(e,n,t){const r=this;let o=r.events.length,i,a;for(;o--;)if((r.events[o][1].type==="labelImage"||r.events[o][1].type==="labelLink")&&!r.events[o][1]._balanced){i=r.events[o][1];break}return l;function l(f){return i?i._inactive?d(f):(a=r.parser.defined.includes(oa(r.sliceSerialize({start:i.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),s):t(f)}function s(f){return f===40?e.attempt(MO,u,a?u:d)(f):f===91?e.attempt(LO,u,a?c:d)(f):a?u(f):d(f)}function c(f){return e.attempt(jO,u,d)(f)}function u(f){return n(f)}function d(f){return i._balanced=!0,t(f)}}function zO(e,n,t){return r;function r(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),o}function o(d){return Lt(d)?Sl(e,i)(d):i(d)}function i(d){return d===41?u(d):T3(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function a(d){return Lt(d)?Sl(e,s)(d):u(d)}function l(d){return t(d)}function s(d){return d===34||d===39||d===40?P3(e,c,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):u(d)}function c(d){return Lt(d)?Sl(e,u)(d):u(d)}function u(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),n):t(d)}}function HO(e,n,t){const r=this;return o;function o(l){return O3.call(r,e,i,a,"reference","referenceMarker","referenceString")(l)}function i(l){return r.parser.defined.includes(oa(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(l):t(l)}function a(l){return t(l)}}function UO(e,n,t){return r;function r(i){return e.enter("reference"),e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),o}function o(i){return i===93?(e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),e.exit("reference"),n):t(i)}}const VO={name:"labelStartImage",tokenize:WO,resolveAll:Kp.resolveAll};function WO(e,n,t){const r=this;return o;function o(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),i}function i(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):t(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(l):n(l)}}const XO={name:"labelStartLink",tokenize:GO,resolveAll:Kp.resolveAll};function GO(e,n,t){const r=this;return o;function o(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),i}function i(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(a):n(a)}}const yf={name:"lineEnding",tokenize:ZO};function ZO(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Pn(e,n,"linePrefix")}}const kc={name:"thematicBreak",tokenize:KO};function KO(e,n,t){let r=0,o;return i;function i(c){return e.enter("thematicBreak"),a(c)}function a(c){return o=c,l(c)}function l(c){return c===o?(e.enter("thematicBreakSequence"),s(c)):r>=3&&(c===null||Je(c))?(e.exit("thematicBreak"),n(c)):t(c)}function s(c){return c===o?(e.consume(c),r++,s):(e.exit("thematicBreakSequence"),wn(c)?Pn(e,l,"whitespace")(c):l(c))}}const Ot={name:"list",tokenize:YO,continuation:{tokenize:JO},exit:nP},qO={tokenize:tP,partial:!0},QO={tokenize:eP,partial:!0};function YO(e,n,t){const r=this,o=r.events[r.events.length-1];let i=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,a=0;return l;function l(m){const h=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(h==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:ch(m)){if(r.containerState.type||(r.containerState.type=h,e.enter(h,{_container:!0})),h==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(kc,t,c)(m):c(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(m)}return t(m)}function s(m){return ch(m)&&++a<10?(e.consume(m),s):(!r.interrupt||a<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),c(m)):t(m)}function c(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(cd,r.interrupt?t:u,e.attempt(qO,f,d))}function u(m){return r.containerState.initialBlankLine=!0,i++,f(m)}function d(m){return wn(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),f):t(m)}function f(m){return r.containerState.size=i+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(m)}}function JO(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(cd,o,i);function o(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Pn(e,n,"listItemIndent",r.containerState.size+1)(l)}function i(l){return r.containerState.furtherBlankLines||!wn(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(QO,n,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,Pn(e,e.attempt(Ot,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function eP(e,n,t){const r=this;return Pn(e,o,"listItemIndent",r.containerState.size+1);function o(i){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?n(i):t(i)}}function nP(e){e.exit(this.containerState.type)}function tP(e,n,t){const r=this;return Pn(e,o,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function o(i){const a=r.events[r.events.length-1];return!wn(i)&&a&&a[1].type==="listItemPrefixWhitespace"?n(i):t(i)}}const P1={name:"setextUnderline",tokenize:oP,resolveTo:rP};function rP(e,n){let t=e.length,r,o,i;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){r=t;break}e[t][1].type==="paragraph"&&(o=t)}else e[t][1].type==="content"&&e.splice(t,1),!i&&e[t][1].type==="definition"&&(i=t);const a={type:"setextHeading",start:Object.assign({},e[o][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[o][1].type="setextHeadingText",i?(e.splice(o,0,["enter",a,n]),e.splice(i+1,0,["exit",e[r][1],n]),e[r][1].end=Object.assign({},e[i][1].end)):e[r][1]=a,e.push(["exit",a,n]),e}function oP(e,n,t){const r=this;let o;return i;function i(c){let u=r.events.length,d;for(;u--;)if(r.events[u][1].type!=="lineEnding"&&r.events[u][1].type!=="linePrefix"&&r.events[u][1].type!=="content"){d=r.events[u][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||d)?(e.enter("setextHeadingLine"),o=c,a(c)):t(c)}function a(c){return e.enter("setextHeadingLineSequence"),l(c)}function l(c){return c===o?(e.consume(c),l):(e.exit("setextHeadingLineSequence"),wn(c)?Pn(e,s,"lineSuffix")(c):s(c))}function s(c){return c===null||Je(c)?(e.exit("setextHeadingLine"),n(c)):t(c)}}const iP={tokenize:aP};function aP(e){const n=this,t=e.attempt(cd,r,e.attempt(this.parser.constructs.flowInitial,o,Pn(e,e.attempt(this.parser.constructs.flow,o,e.attempt(dO,o)),"linePrefix")));return t;function r(i){if(i===null){e.consume(i);return}return e.enter("lineEndingBlank"),e.consume(i),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function o(i){if(i===null){e.consume(i);return}return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const lP={resolveAll:R3()},sP=N3("string"),cP=N3("text");function N3(e){return{tokenize:n,resolveAll:R3(e==="text"?uP:void 0)};function n(t){const r=this,o=this.parser.constructs[e],i=t.attempt(o,a,l);return a;function a(u){return c(u)?i(u):l(u)}function l(u){if(u===null){t.consume(u);return}return t.enter("data"),t.consume(u),s}function s(u){return c(u)?(t.exit("data"),i(u)):(t.consume(u),s)}function c(u){if(u===null)return!0;const d=o[u];let f=-1;if(d)for(;++f<d.length;){const m=d[f];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function R3(e){return n;function n(t,r){let o=-1,i;for(;++o<=t.length;)i===void 0?t[o]&&t[o][1].type==="data"&&(i=o,o++):(!t[o]||t[o][1].type!=="data")&&(o!==i+2&&(t[i][1].end=t[o-1][1].end,t.splice(i+2,o-i-2),o=i+2),i=void 0);return e?e(t,r):t}}function uP(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const r=e[t-1][1],o=n.sliceStream(r);let i=o.length,a=-1,l=0,s;for(;i--;){const c=o[i];if(typeof c=="string"){for(a=c.length;c.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(c===-2)s=!0,l++;else if(c!==-1){i++;break}}if(l){const c={type:t===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-l,offset:r.end.offset-l,_index:r.start._index+i,_bufferIndex:i?a:r.start._bufferIndex+a},end:Object.assign({},r.end)};r.end=Object.assign({},c.start),r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(t,0,["enter",c,n],["exit",c,n]),t+=2)}t++}return e}function dP(e,n,t){let r=Object.assign(t?Object.assign({},t):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const o={},i=[];let a=[],l=[];const s={consume:v,enter:y,exit:E,attempt:A(_),check:A(w),interrupt:A(w,{interrupt:!0})},c={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:m,sliceSerialize:f,now:h,defineSkip:b,write:d};let u=n.tokenize.call(c,s);return n.resolveAll&&i.push(n),c;function d($){return a=ir(a,$),k(),a[a.length-1]!==null?[]:(N(n,0),c.events=Zp(i,c.events,c),c.events)}function f($,z){return mP(m($),z)}function m($){return fP(a,$)}function h(){const{line:$,column:z,offset:j,_index:H,_bufferIndex:Z}=r;return{line:$,column:z,offset:j,_index:H,_bufferIndex:Z}}function b($){o[$.line]=$.column,V()}function k(){let $;for(;r._index<a.length;){const z=a[r._index];if(typeof z=="string")for($=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===$&&r._bufferIndex<z.length;)g(z.charCodeAt(r._bufferIndex));else g(z)}}function g($){u=u($)}function v($){Je($)?(r.line++,r.column=1,r.offset+=$===-3?2:1,V()):$!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=$}function y($,z){const j=z||{};return j.type=$,j.start=h(),c.events.push(["enter",j,c]),l.push(j),j}function E($){const z=l.pop();return z.end=h(),c.events.push(["exit",z,c]),z}function _($,z){N($,z.from)}function w($,z){z.restore()}function A($,z){return j;function j(H,Z,B){let F,O,W,S;return Array.isArray(H)?U(H):"tokenize"in H?U([H]):G(H);function G(L){return he;function he(Y){const Oe=Y!==null&&L[Y],be=Y!==null&&L.null,Ce=[...Array.isArray(Oe)?Oe:Oe?[Oe]:[],...Array.isArray(be)?be:be?[be]:[]];return U(Ce)(Y)}}function U(L){return F=L,O=0,L.length===0?B:I(L[O])}function I(L){return he;function he(Y){return S=R(),W=L,L.partial||(c.currentConstruct=L),L.name&&c.parser.constructs.disable.null.includes(L.name)?oe():L.tokenize.call(z?Object.assign(Object.create(c),z):c,s,Q,oe)(Y)}}function Q(L){return $(W,S),Z}function oe(L){return S.restore(),++O<F.length?I(F[O]):B}}}function N($,z){$.resolveAll&&!i.includes($)&&i.push($),$.resolve&&oo(c.events,z,c.events.length-z,$.resolve(c.events.slice(z),c)),$.resolveTo&&(c.events=$.resolveTo(c.events,c))}function R(){const $=h(),z=c.previous,j=c.currentConstruct,H=c.events.length,Z=Array.from(l);return{restore:B,from:H};function B(){r=$,c.previous=z,c.currentConstruct=j,c.events.length=H,l=Z,V()}}function V(){r.line in o&&r.column<2&&(r.column=o[r.line],r.offset+=o[r.line]-1)}}function fP(e,n){const t=n.start._index,r=n.start._bufferIndex,o=n.end._index,i=n.end._bufferIndex;let a;if(t===o)a=[e[t].slice(r,i)];else{if(a=e.slice(t,o),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}i>0&&a.push(e[o].slice(0,i))}return a}function mP(e,n){let t=-1;const r=[];let o;for(;++t<e.length;){const i=e[t];let a;if(typeof i=="string")a=i;else switch(i){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=n?" ":"	";break}case-1:{if(!n&&o)continue;a=" ";break}default:a=String.fromCharCode(i)}o=i===-2,r.push(a)}return r.join("")}const hP={42:Ot,43:Ot,45:Ot,48:Ot,49:Ot,50:Ot,51:Ot,52:Ot,53:Ot,54:Ot,55:Ot,56:Ot,57:Ot,62:x3},pP={91:gO},gP={[-2]:bf,[-1]:bf,32:bf},vP={35:SO,42:kc,45:[P1,kc],60:IO,61:P1,95:kc,96:T1,126:T1},bP={38:_3,92:I3},yP={[-5]:yf,[-4]:yf,[-3]:yf,33:VO,38:_3,42:uh,60:[XT,RO],91:XO,92:[wO,I3],93:Kp,95:uh,96:iO},wP={null:[uh,lP]},CP={null:[42,95]},SP={null:[]},kP=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:CP,contentInitial:pP,disable:SP,document:hP,flow:vP,flowInitial:gP,insideSpan:wP,string:bP,text:yP},Symbol.toStringTag,{value:"Module"}));function EP(e){const t=PT([kP,...(e||{}).extensions||[]]),r={defined:[],lazy:{},constructs:t,content:o($T),document:o(zT),flow:o(iP),string:o(sP),text:o(cP)};return r;function o(i){return a;function a(l){return dP(r,i,l)}}}function xP(e){for(;!A3(e););return e}const N1=/[\0\t\n\r]/g;function IP(){let e=1,n="",t=!0,r;return o;function o(i,a,l){const s=[];let c,u,d,f,m;for(i=n+(typeof i=="string"?i.toString():new TextDecoder(a||void 0).decode(i)),d=0,n="",t&&(i.charCodeAt(0)===65279&&d++,t=void 0);d<i.length;){if(N1.lastIndex=d,c=N1.exec(i),f=c&&c.index!==void 0?c.index:i.length,m=i.charCodeAt(f),!c){n=i.slice(d);break}if(m===10&&d===f&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),d<f&&(s.push(i.slice(d,f)),e+=f-d),m){case 0:{s.push(65533),e++;break}case 9:{for(u=Math.ceil(e/4)*4,s.push(-2);e++<u;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=!0,e=1}d=f+1}return l&&(r&&s.push(-5),n&&s.push(n),s.push(null)),s}}const _P=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function AP(e){return e.replace(_P,TP)}function TP(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const o=t.charCodeAt(1),i=o===120||o===88;return E3(t.slice(i?2:1),i?16:10)}return Gp(t)||e}const F3={}.hasOwnProperty;function OP(e,n,t){return typeof n!="string"&&(t=n,n=void 0),PP(t)(xP(EP(t).document().write(IP()(e,n,!0))))}function PP(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:i($e),autolinkProtocol:R,autolinkEmail:R,atxHeading:i(Ee),blockQuote:i(be),characterEscape:R,characterReference:R,codeFenced:i(Ce),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:i(Ce,a),codeText:i(me,a),codeTextData:R,data:R,codeFlowValue:R,definition:i(en),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:i(Ze),hardBreakEscape:i(Se),hardBreakTrailing:i(Se),htmlFlow:i(xe,a),htmlFlowData:R,htmlText:i(xe,a),htmlTextData:R,image:i(Pe),label:a,link:i($e),listItem:i(Ue),listItemValue:f,listOrdered:i(Fe,d),listUnordered:i(Fe),paragraph:i(rn),reference:I,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:i(Ee),strong:i(Me),thematicBreak:i(Ne)},exit:{atxHeading:s(),atxHeadingSequence:_,autolink:s(),autolinkEmail:Oe,autolinkProtocol:Y,blockQuote:s(),characterEscapeValue:V,characterReferenceMarkerHexadecimal:oe,characterReferenceMarkerNumeric:oe,characterReferenceValue:L,characterReference:he,codeFenced:s(k),codeFencedFence:b,codeFencedFenceInfo:m,codeFencedFenceMeta:h,codeFlowValue:V,codeIndented:s(g),codeText:s(Z),codeTextData:V,data:V,definition:s(),definitionDestinationString:E,definitionLabelString:v,definitionTitleString:y,emphasis:s(),hardBreakEscape:s(z),hardBreakTrailing:s(z),htmlFlow:s(j),htmlFlowData:V,htmlText:s(H),htmlTextData:V,image:s(F),label:W,labelText:O,lineEnding:$,link:s(B),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:Q,resourceDestinationString:S,resourceTitleString:G,resource:U,setextHeading:s(N),setextHeadingLineSequence:A,setextHeadingText:w,strong:s(),thematicBreak:s()}};M3(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(C){let x={type:"root",children:[]};const T={stack:[x],tokenStack:[],config:n,enter:l,exit:c,buffer:a,resume:u,data:t},M=[];let K=-1;for(;++K<C.length;)if(C[K][1].type==="listOrdered"||C[K][1].type==="listUnordered")if(C[K][0]==="enter")M.push(K);else{const q=M.pop();K=o(C,q,K)}for(K=-1;++K<C.length;){const q=n[C[K][0]];F3.call(q,C[K][1].type)&&q[C[K][1].type].call(Object.assign({sliceSerialize:C[K][2].sliceSerialize},T),C[K][1])}if(T.tokenStack.length>0){const q=T.tokenStack[T.tokenStack.length-1];(q[1]||R1).call(T,void 0,q[0])}for(x.position={start:uo(C.length>0?C[0][1].start:{line:1,column:1,offset:0}),end:uo(C.length>0?C[C.length-2][1].end:{line:1,column:1,offset:0})},K=-1;++K<n.transforms.length;)x=n.transforms[K](x)||x;return x}function o(C,x,T){let M=x-1,K=-1,q=!1,ee,ne,ue,ae;for(;++M<=T;){const ge=C[M];switch(ge[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ge[0]==="enter"?K++:K--,ae=void 0;break}case"lineEndingBlank":{ge[0]==="enter"&&(ee&&!ae&&!K&&!ue&&(ue=M),ae=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:ae=void 0}if(!K&&ge[0]==="enter"&&ge[1].type==="listItemPrefix"||K===-1&&ge[0]==="exit"&&(ge[1].type==="listUnordered"||ge[1].type==="listOrdered")){if(ee){let De=M;for(ne=void 0;De--;){const we=C[De];if(we[1].type==="lineEnding"||we[1].type==="lineEndingBlank"){if(we[0]==="exit")continue;ne&&(C[ne][1].type="lineEndingBlank",q=!0),we[1].type="lineEnding",ne=De}else if(!(we[1].type==="linePrefix"||we[1].type==="blockQuotePrefix"||we[1].type==="blockQuotePrefixWhitespace"||we[1].type==="blockQuoteMarker"||we[1].type==="listItemIndent"))break}ue&&(!ne||ue<ne)&&(ee._spread=!0),ee.end=Object.assign({},ne?C[ne][1].start:ge[1].end),C.splice(ne||M,0,["exit",ee,ge[2]]),M++,T++}if(ge[1].type==="listItemPrefix"){const De={type:"listItem",_spread:!1,start:Object.assign({},ge[1].start),end:void 0};ee=De,C.splice(M,0,["enter",De,ge[2]]),M++,T++,ue=void 0,ae=!0}}}return C[x][1]._spread=q,T}function i(C,x){return T;function T(M){l.call(this,C(M),M),x&&x.call(this,M)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(C,x,T){this.stack[this.stack.length-1].children.push(C),this.stack.push(C),this.tokenStack.push([x,T]),C.position={start:uo(x.start),end:void 0}}function s(C){return x;function x(T){C&&C.call(this,T),c.call(this,T)}}function c(C,x){const T=this.stack.pop(),M=this.tokenStack.pop();if(M)M[0].type!==C.type&&(x?x.call(this,C,M[0]):(M[1]||R1).call(this,C,M[0]));else throw new Error("Cannot close `"+C.type+"` ("+Cl({start:C.start,end:C.end})+"): it’s not open");T.position.end=uo(C.end)}function u(){return TT(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function f(C){if(this.data.expectingFirstListItemValue){const x=this.stack[this.stack.length-2];x.start=Number.parseInt(this.sliceSerialize(C),10),this.data.expectingFirstListItemValue=void 0}}function m(){const C=this.resume(),x=this.stack[this.stack.length-1];x.lang=C}function h(){const C=this.resume(),x=this.stack[this.stack.length-1];x.meta=C}function b(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function k(){const C=this.resume(),x=this.stack[this.stack.length-1];x.value=C.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const C=this.resume(),x=this.stack[this.stack.length-1];x.value=C.replace(/(\r?\n|\r)$/g,"")}function v(C){const x=this.resume(),T=this.stack[this.stack.length-1];T.label=x,T.identifier=oa(this.sliceSerialize(C)).toLowerCase()}function y(){const C=this.resume(),x=this.stack[this.stack.length-1];x.title=C}function E(){const C=this.resume(),x=this.stack[this.stack.length-1];x.url=C}function _(C){const x=this.stack[this.stack.length-1];if(!x.depth){const T=this.sliceSerialize(C).length;x.depth=T}}function w(){this.data.setextHeadingSlurpLineEnding=!0}function A(C){const x=this.stack[this.stack.length-1];x.depth=this.sliceSerialize(C).codePointAt(0)===61?1:2}function N(){this.data.setextHeadingSlurpLineEnding=void 0}function R(C){const T=this.stack[this.stack.length-1].children;let M=T[T.length-1];(!M||M.type!=="text")&&(M=te(),M.position={start:uo(C.start),end:void 0},T.push(M)),this.stack.push(M)}function V(C){const x=this.stack.pop();x.value+=this.sliceSerialize(C),x.position.end=uo(C.end)}function $(C){const x=this.stack[this.stack.length-1];if(this.data.atHardBreak){const T=x.children[x.children.length-1];T.position.end=uo(C.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(x.type)&&(R.call(this,C),V.call(this,C))}function z(){this.data.atHardBreak=!0}function j(){const C=this.resume(),x=this.stack[this.stack.length-1];x.value=C}function H(){const C=this.resume(),x=this.stack[this.stack.length-1];x.value=C}function Z(){const C=this.resume(),x=this.stack[this.stack.length-1];x.value=C}function B(){const C=this.stack[this.stack.length-1];if(this.data.inReference){const x=this.data.referenceType||"shortcut";C.type+="Reference",C.referenceType=x,delete C.url,delete C.title}else delete C.identifier,delete C.label;this.data.referenceType=void 0}function F(){const C=this.stack[this.stack.length-1];if(this.data.inReference){const x=this.data.referenceType||"shortcut";C.type+="Reference",C.referenceType=x,delete C.url,delete C.title}else delete C.identifier,delete C.label;this.data.referenceType=void 0}function O(C){const x=this.sliceSerialize(C),T=this.stack[this.stack.length-2];T.label=AP(x),T.identifier=oa(x).toLowerCase()}function W(){const C=this.stack[this.stack.length-1],x=this.resume(),T=this.stack[this.stack.length-1];if(this.data.inReference=!0,T.type==="link"){const M=C.children;T.children=M}else T.alt=x}function S(){const C=this.resume(),x=this.stack[this.stack.length-1];x.url=C}function G(){const C=this.resume(),x=this.stack[this.stack.length-1];x.title=C}function U(){this.data.inReference=void 0}function I(){this.data.referenceType="collapsed"}function Q(C){const x=this.resume(),T=this.stack[this.stack.length-1];T.label=x,T.identifier=oa(this.sliceSerialize(C)).toLowerCase(),this.data.referenceType="full"}function oe(C){this.data.characterReferenceType=C.type}function L(C){const x=this.sliceSerialize(C),T=this.data.characterReferenceType;let M;T?(M=E3(x,T==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):M=Gp(x);const K=this.stack[this.stack.length-1];K.value+=M}function he(C){const x=this.stack.pop();x.position.end=uo(C.end)}function Y(C){V.call(this,C);const x=this.stack[this.stack.length-1];x.url=this.sliceSerialize(C)}function Oe(C){V.call(this,C);const x=this.stack[this.stack.length-1];x.url="mailto:"+this.sliceSerialize(C)}function be(){return{type:"blockquote",children:[]}}function Ce(){return{type:"code",lang:null,meta:null,value:""}}function me(){return{type:"inlineCode",value:""}}function en(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Ze(){return{type:"emphasis",children:[]}}function Ee(){return{type:"heading",depth:0,children:[]}}function Se(){return{type:"break"}}function xe(){return{type:"html",value:""}}function Pe(){return{type:"image",title:null,url:"",alt:null}}function $e(){return{type:"link",title:null,url:"",children:[]}}function Fe(C){return{type:"list",ordered:C.type==="listOrdered",start:null,spread:C._spread,children:[]}}function Ue(C){return{type:"listItem",spread:C._spread,checked:null,children:[]}}function rn(){return{type:"paragraph",children:[]}}function Me(){return{type:"strong",children:[]}}function te(){return{type:"text",value:""}}function Ne(){return{type:"thematicBreak"}}}function uo(e){return{line:e.line,column:e.column,offset:e.offset}}function M3(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?M3(e,r):NP(e,r)}}function NP(e,n){let t;for(t in n)if(F3.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function R1(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+Cl({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Cl({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Cl({start:n.start,end:n.end})+") is still open")}function RP(e){const n=this;n.parser=t;function t(r){return OP(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function FP(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function MP(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function LP(e,n){const t=n.value?n.value+`
`:"",r={};n.lang&&(r.className=["language-"+n.lang]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return n.meta&&(o.data={meta:n.meta}),e.patch(n,o),o=e.applyData(n,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(n,o),o}function jP(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function DP(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function $P(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),o=Pa(r.toLowerCase()),i=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=i+1,l+=1,e.footnoteCounts.set(r,l);const s={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+o,id:t+"fnref-"+o+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(n,s);const c={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(n,c),e.applyData(n,c)}function BP(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function zP(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function L3(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];const o=e.all(n),i=o[0];i&&i.type==="text"?i.value="["+i.value:o.unshift({type:"text",value:"["});const a=o[o.length-1];return a&&a.type==="text"?a.value+=r:o.push({type:"text",value:r}),o}function HP(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return L3(e,n);const o={src:Pa(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(o.title=r.title);const i={type:"element",tagName:"img",properties:o,children:[]};return e.patch(n,i),e.applyData(n,i)}function UP(e,n){const t={src:Pa(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,r),e.applyData(n,r)}function VP(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,r),e.applyData(n,r)}function WP(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return L3(e,n);const o={href:Pa(r.url||"")};r.title!==null&&r.title!==void 0&&(o.title=r.title);const i={type:"element",tagName:"a",properties:o,children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function XP(e,n){const t={href:Pa(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function GP(e,n,t){const r=e.all(n),o=t?ZP(t):j3(n),i={},a=[];if(typeof n.checked=="boolean"){const u=r[0];let d;u&&u.type==="element"&&u.tagName==="p"?d=u:(d={type:"element",tagName:"p",properties:{},children:[]},r.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),i.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const u=r[l];(o||l!==0||u.type!=="element"||u.tagName!=="p")&&a.push({type:"text",value:`
`}),u.type==="element"&&u.tagName==="p"&&!o?a.push(...u.children):a.push(u)}const s=r[r.length-1];s&&(o||s.type!=="element"||s.tagName!=="p")&&a.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:i,children:a};return e.patch(n,c),e.applyData(n,c)}function ZP(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=j3(t[r])}return n}function j3(e){const n=e.spread;return n??e.children.length>1}function KP(e,n){const t={},r=e.all(n);let o=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++o<r.length;){const a=r[o];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const i={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(r,!0)};return e.patch(n,i),e.applyData(n,i)}function qP(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function QP(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function YP(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function JP(e,n){const t=e.all(n),r=t.shift(),o=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(n.children[0],a),o.push(a)}if(t.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},l=Up(n.children[1]),s=v3(n.children[n.children.length-1]);l&&s&&(a.position={start:l,end:s}),o.push(a)}const i={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(n,i),e.applyData(n,i)}function eN(e,n,t){const r=t?t.children:void 0,i=(r?r.indexOf(n):1)===0?"th":"td",a=t&&t.type==="table"?t.align:void 0,l=a?a.length:n.children.length;let s=-1;const c=[];for(;++s<l;){const d=n.children[s],f={},m=a?a[s]:void 0;m&&(f.align=m);let h={type:"element",tagName:i,properties:f,children:[]};d&&(h.children=e.all(d),e.patch(d,h),h=e.applyData(d,h)),c.push(h)}const u={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(n,u),e.applyData(n,u)}function nN(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const F1=9,M1=32;function tN(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),o=0;const i=[];for(;r;)i.push(L1(n.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=t.exec(n);return i.push(L1(n.slice(o),o>0,!1)),i.join("")}function L1(e,n,t){let r=0,o=e.length;if(n){let i=e.codePointAt(r);for(;i===F1||i===M1;)r++,i=e.codePointAt(r)}if(t){let i=e.codePointAt(o-1);for(;i===F1||i===M1;)o--,i=e.codePointAt(o-1)}return o>r?e.slice(r,o):""}function rN(e,n){const t={type:"text",value:tN(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function oN(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const iN={blockquote:FP,break:MP,code:LP,delete:jP,emphasis:DP,footnoteReference:$P,heading:BP,html:zP,imageReference:HP,image:UP,inlineCode:VP,linkReference:WP,link:XP,listItem:GP,list:KP,paragraph:qP,root:QP,strong:YP,table:JP,tableCell:nN,tableRow:eN,text:rN,thematicBreak:oN,toml:Ks,yaml:Ks,definition:Ks,footnoteDefinition:Ks};function Ks(){}const D3=-1,ud=0,pu=1,gu=2,qp=3,Qp=4,Yp=5,Jp=6,$3=7,B3=8,j1=typeof self=="object"?self:globalThis,aN=(e,n)=>{const t=(o,i)=>(e.set(i,o),o),r=o=>{if(e.has(o))return e.get(o);const[i,a]=n[o];switch(i){case ud:case D3:return t(a,o);case pu:{const l=t([],o);for(const s of a)l.push(r(s));return l}case gu:{const l=t({},o);for(const[s,c]of a)l[r(s)]=r(c);return l}case qp:return t(new Date(a),o);case Qp:{const{source:l,flags:s}=a;return t(new RegExp(l,s),o)}case Yp:{const l=t(new Map,o);for(const[s,c]of a)l.set(r(s),r(c));return l}case Jp:{const l=t(new Set,o);for(const s of a)l.add(r(s));return l}case $3:{const{name:l,message:s}=a;return t(new j1[l](s),o)}case B3:return t(BigInt(a),o);case"BigInt":return t(Object(BigInt(a)),o)}return t(new j1[i](a),o)};return r},D1=e=>aN(new Map,e)(0),Fi="",{toString:lN}={},{keys:sN}=Object,Ja=e=>{const n=typeof e;if(n!=="object"||!e)return[ud,n];const t=lN.call(e).slice(8,-1);switch(t){case"Array":return[pu,Fi];case"Object":return[gu,Fi];case"Date":return[qp,Fi];case"RegExp":return[Qp,Fi];case"Map":return[Yp,Fi];case"Set":return[Jp,Fi]}return t.includes("Array")?[pu,t]:t.includes("Error")?[$3,t]:[gu,t]},qs=([e,n])=>e===ud&&(n==="function"||n==="symbol"),cN=(e,n,t,r)=>{const o=(a,l)=>{const s=r.push(a)-1;return t.set(l,s),s},i=a=>{if(t.has(a))return t.get(a);let[l,s]=Ja(a);switch(l){case ud:{let u=a;switch(s){case"bigint":l=B3,u=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);u=null;break;case"undefined":return o([D3],a)}return o([l,u],a)}case pu:{if(s)return o([s,[...a]],a);const u=[],d=o([l,u],a);for(const f of a)u.push(i(f));return d}case gu:{if(s)switch(s){case"BigInt":return o([s,a.toString()],a);case"Boolean":case"Number":case"String":return o([s,a.valueOf()],a)}if(n&&"toJSON"in a)return i(a.toJSON());const u=[],d=o([l,u],a);for(const f of sN(a))(e||!qs(Ja(a[f])))&&u.push([i(f),i(a[f])]);return d}case qp:return o([l,a.toISOString()],a);case Qp:{const{source:u,flags:d}=a;return o([l,{source:u,flags:d}],a)}case Yp:{const u=[],d=o([l,u],a);for(const[f,m]of a)(e||!(qs(Ja(f))||qs(Ja(m))))&&u.push([i(f),i(m)]);return d}case Jp:{const u=[],d=o([l,u],a);for(const f of a)(e||!qs(Ja(f)))&&u.push(i(f));return d}}const{message:c}=a;return o([l,{name:s,message:c}],a)};return i},$1=(e,{json:n,lossy:t}={})=>{const r=[];return cN(!(n||t),!!n,new Map,r)(e),r},vu=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?D1($1(e,n)):structuredClone(e):(e,n)=>D1($1(e,n));function uN(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function dN(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function fN(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||uN,r=e.options.footnoteBackLabel||dN,o=e.options.footnoteLabel||"Footnotes",i=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let s=-1;for(;++s<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[s]);if(!c)continue;const u=e.all(c),d=String(c.identifier).toUpperCase(),f=Pa(d.toLowerCase());let m=0;const h=[],b=e.footnoteCounts.get(d);for(;b!==void 0&&++m<=b;){h.length>0&&h.push({type:"text",value:" "});let v=typeof t=="string"?t:t(s,m);typeof v=="string"&&(v={type:"text",value:v}),h.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+f+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,m),className:["data-footnote-backref"]},children:Array.isArray(v)?v:[v]})}const k=u[u.length-1];if(k&&k.type==="element"&&k.tagName==="p"){const v=k.children[k.children.length-1];v&&v.type==="text"?v.value+=" ":k.children.push({type:"text",value:" "}),k.children.push(...h)}else u.push(...h);const g={type:"element",tagName:"li",properties:{id:n+"fn-"+f},children:e.wrap(u,!0)};e.patch(c,g),l.push(g)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:i,properties:{...vu(a),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const z3=function(e){if(e==null)return gN;if(typeof e=="function")return dd(e);if(typeof e=="object")return Array.isArray(e)?mN(e):hN(e);if(typeof e=="string")return pN(e);throw new Error("Expected function, string, or object as test")};function mN(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=z3(e[t]);return dd(r);function r(...o){let i=-1;for(;++i<n.length;)if(n[i].apply(this,o))return!0;return!1}}function hN(e){const n=e;return dd(t);function t(r){const o=r;let i;for(i in e)if(o[i]!==n[i])return!1;return!0}}function pN(e){return dd(n);function n(t){return t&&t.type===e}}function dd(e){return n;function n(t,r,o){return!!(vN(t)&&e.call(this,t,typeof r=="number"?r:void 0,o||void 0))}}function gN(){return!0}function vN(e){return e!==null&&typeof e=="object"&&"type"in e}const H3=[],bN=!0,B1=!1,yN="skip";function wN(e,n,t,r){let o;typeof n=="function"&&typeof t!="function"?(r=t,t=n):o=n;const i=z3(o),a=r?-1:1;l(e,void 0,[])();function l(s,c,u){const d=s&&typeof s=="object"?s:{};if(typeof d.type=="string"){const m=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(s.type+(m?"<"+m+">":""))+")"})}return f;function f(){let m=H3,h,b,k;if((!n||i(s,c,u[u.length-1]||void 0))&&(m=CN(t(s,u)),m[0]===B1))return m;if("children"in s&&s.children){const g=s;if(g.children&&m[0]!==yN)for(b=(r?g.children.length:-1)+a,k=u.concat(g);b>-1&&b<g.children.length;){const v=g.children[b];if(h=l(v,b,k)(),h[0]===B1)return h;b=typeof h[1]=="number"?h[1]:b+a}}return m}}}function CN(e){return Array.isArray(e)?e:typeof e=="number"?[bN,e]:e==null?H3:[e]}function U3(e,n,t,r){let o,i,a;typeof n=="function"&&typeof t!="function"?(i=void 0,a=n,o=t):(i=n,a=t,o=r),wN(e,i,l,o);function l(s,c){const u=c[c.length-1],d=u?u.children.indexOf(s):void 0;return a(s,d,u)}}const dh={}.hasOwnProperty,SN={};function kN(e,n){const t=n||SN,r=new Map,o=new Map,i=new Map,a={...iN,...t.handlers},l={all:c,applyData:xN,definitionById:r,footnoteById:o,footnoteCounts:i,footnoteOrder:[],handlers:a,one:s,options:t,patch:EN,wrap:_N};return U3(e,function(u){if(u.type==="definition"||u.type==="footnoteDefinition"){const d=u.type==="definition"?r:o,f=String(u.identifier).toUpperCase();d.has(f)||d.set(f,u)}}),l;function s(u,d){const f=u.type,m=l.handlers[f];if(dh.call(l.handlers,f)&&m)return m(l,u,d);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in u){const{children:b,...k}=u,g=vu(k);return g.children=l.all(u),g}return vu(u)}return(l.options.unknownHandler||IN)(l,u,d)}function c(u){const d=[];if("children"in u){const f=u.children;let m=-1;for(;++m<f.length;){const h=l.one(f[m],u);if(h){if(m&&f[m-1].type==="break"&&(!Array.isArray(h)&&h.type==="text"&&(h.value=z1(h.value)),!Array.isArray(h)&&h.type==="element")){const b=h.children[0];b&&b.type==="text"&&(b.value=z1(b.value))}Array.isArray(h)?d.push(...h):d.push(h)}}}return d}}function EN(e,n){e.position&&(n.position=iT(e))}function xN(e,n){let t=n;if(e&&e.data){const r=e.data.hName,o=e.data.hChildren,i=e.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const a="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:a}}t.type==="element"&&i&&Object.assign(t.properties,vu(i)),"children"in t&&t.children&&o!==null&&o!==void 0&&(t.children=o)}return t}function IN(e,n){const t=n.data||{},r="value"in n&&!(dh.call(t,"hProperties")||dh.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function _N(e,n){const t=[];let r=-1;for(n&&t.push({type:"text",value:`
`});++r<e.length;)r&&t.push({type:"text",value:`
`}),t.push(e[r]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function z1(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function H1(e,n){const t=kN(e,n),r=t.one(e,void 0),o=fN(t),i=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return o&&i.children.push({type:"text",value:`
`},o),i}function AN(e,n){return e&&"run"in e?async function(t,r){const o=H1(t,{file:r,...n});await e.run(o,r)}:function(t,r){return H1(t,{file:r,...n||e})}}function U1(e){if(e)throw e}var Ec=Object.prototype.hasOwnProperty,V3=Object.prototype.toString,V1=Object.defineProperty,W1=Object.getOwnPropertyDescriptor,X1=function(n){return typeof Array.isArray=="function"?Array.isArray(n):V3.call(n)==="[object Array]"},G1=function(n){if(!n||V3.call(n)!=="[object Object]")return!1;var t=Ec.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&Ec.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!r)return!1;var o;for(o in n);return typeof o>"u"||Ec.call(n,o)},Z1=function(n,t){V1&&t.name==="__proto__"?V1(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},K1=function(n,t){if(t==="__proto__")if(Ec.call(n,t)){if(W1)return W1(n,t).value}else return;return n[t]},TN=function e(){var n,t,r,o,i,a,l=arguments[0],s=1,c=arguments.length,u=!1;for(typeof l=="boolean"&&(u=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<c;++s)if(n=arguments[s],n!=null)for(t in n)r=K1(l,t),o=K1(n,t),l!==o&&(u&&o&&(G1(o)||(i=X1(o)))?(i?(i=!1,a=r&&X1(r)?r:[]):a=r&&G1(r)?r:{},Z1(l,{name:t,newValue:e(u,a,o)})):typeof o<"u"&&Z1(l,{name:t,newValue:o}));return l};const wf=Jl(TN);function fh(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ON(){const e=[],n={run:t,use:r};return n;function t(...o){let i=-1;const a=o.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...o);function l(s,...c){const u=e[++i];let d=-1;if(s){a(s);return}for(;++d<o.length;)(c[d]===null||c[d]===void 0)&&(c[d]=o[d]);o=c,u?PN(u,l)(...c):a(null,...c)}}function r(o){if(typeof o!="function")throw new TypeError("Expected `middelware` to be a function, not "+o);return e.push(o),n}}function PN(e,n){let t;return r;function r(...a){const l=e.length>a.length;let s;l&&a.push(o);try{s=e.apply(this,a)}catch(c){const u=c;if(l&&t)throw u;return o(u)}l||(s&&s.then&&typeof s.then=="function"?s.then(i,o):s instanceof Error?o(s):i(s))}function o(a,...l){t||(t=!0,n(a,...l))}function i(a){o(null,a)}}const Rr={basename:NN,dirname:RN,extname:FN,join:MN,sep:"/"};function NN(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');vs(e);let t=0,r=-1,o=e.length,i;if(n===void 0||n.length===0||n.length>e.length){for(;o--;)if(e.codePointAt(o)===47){if(i){t=o+1;break}}else r<0&&(i=!0,r=o+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let a=-1,l=n.length-1;for(;o--;)if(e.codePointAt(o)===47){if(i){t=o+1;break}}else a<0&&(i=!0,a=o+1),l>-1&&(e.codePointAt(o)===n.codePointAt(l--)?l<0&&(r=o):(l=-1,r=a));return t===r?r=a:r<0&&(r=e.length),e.slice(t,r)}function RN(e){if(vs(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function FN(e){vs(e);let n=e.length,t=-1,r=0,o=-1,i=0,a;for(;n--;){const l=e.codePointAt(n);if(l===47){if(a){r=n+1;break}continue}t<0&&(a=!0,t=n+1),l===46?o<0?o=n:i!==1&&(i=1):o>-1&&(i=-1)}return o<0||t<0||i===0||i===1&&o===t-1&&o===r+1?"":e.slice(o,t)}function MN(...e){let n=-1,t;for(;++n<e.length;)vs(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":LN(t)}function LN(e){vs(e);const n=e.codePointAt(0)===47;let t=jN(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function jN(e,n){let t="",r=0,o=-1,i=0,a=-1,l,s;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(o===a-1||i===1))if(o!==a-1&&i===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(s=t.lastIndexOf("/"),s!==t.length-1){s<0?(t="",r=0):(t=t.slice(0,s),r=t.length-1-t.lastIndexOf("/")),o=a,i=0;continue}}else if(t.length>0){t="",r=0,o=a,i=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(o+1,a):t=e.slice(o+1,a),r=a-o-1;o=a,i=0}else l===46&&i>-1?i++:i=-1}return t}function vs(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const DN={cwd:$N};function $N(){return"/"}function mh(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function BN(e){if(typeof e=="string")e=new URL(e);else if(!mh(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return zN(e)}function zN(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const o=new TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(n)}const Cf=["history","path","basename","stem","extname","dirname"];class W3{constructor(n){let t;n?mh(n)?t={path:n}:typeof n=="string"||HN(n)?t={value:n}:t=n:t={},this.cwd=DN.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Cf.length;){const i=Cf[r];i in t&&t[i]!==void 0&&t[i]!==null&&(this[i]=i==="history"?[...t[i]]:t[i])}let o;for(o in t)Cf.includes(o)||(this[o]=t[o])}get basename(){return typeof this.path=="string"?Rr.basename(this.path):void 0}set basename(n){kf(n,"basename"),Sf(n,"basename"),this.path=Rr.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?Rr.dirname(this.path):void 0}set dirname(n){q1(this.basename,"dirname"),this.path=Rr.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?Rr.extname(this.path):void 0}set extname(n){if(Sf(n,"extname"),q1(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Rr.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){mh(n)&&(n=BN(n)),kf(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?Rr.basename(this.path,this.extname):void 0}set stem(n){kf(n,"stem"),Sf(n,"stem"),this.path=Rr.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const o=this.message(n,t,r);throw o.fatal=!0,o}info(n,t,r){const o=this.message(n,t,r);return o.fatal=void 0,o}message(n,t,r){const o=new wt(n,t,r);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function Sf(e,n){if(e&&e.includes(Rr.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+Rr.sep+"`")}function kf(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function q1(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function HN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const UN=function(e){const r=this.constructor.prototype,o=r[e],i=function(){return o.apply(i,arguments)};return Object.setPrototypeOf(i,r),i},VN={}.hasOwnProperty;class e0 extends UN{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=ON()}copy(){const n=new e0;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(wf(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(If("data",this.frozen),this.namespace[n]=t,this):VN.call(this.namespace,n)&&this.namespace[n]||void 0:n?(If("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const o=t.call(n,...r);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=Qs(n),r=this.parser||this.Parser;return Ef("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),Ef("process",this.parser||this.Parser),xf("process",this.compiler||this.Compiler),t?o(void 0,t):new Promise(o);function o(i,a){const l=Qs(n),s=r.parse(l);r.run(s,l,function(u,d,f){if(u||!d||!f)return c(u);const m=d,h=r.stringify(m,f);GN(h)?f.value=h:f.result=h,c(u,f)});function c(u,d){u||!d?a(u):i?i(d):t(void 0,d)}}}processSync(n){let t=!1,r;return this.freeze(),Ef("processSync",this.parser||this.Parser),xf("processSync",this.compiler||this.Compiler),this.process(n,o),Y1("processSync","process",t),r;function o(i,a){t=!0,U1(i),r=a}}run(n,t,r){Q1(n),this.freeze();const o=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?i(void 0,r):new Promise(i);function i(a,l){const s=Qs(t);o.run(n,s,c);function c(u,d,f){const m=d||n;u?l(u):a?a(m):r(void 0,m,f)}}}runSync(n,t){let r=!1,o;return this.run(n,t,i),Y1("runSync","run",r),o;function i(a,l){U1(a),o=l,r=!0}}stringify(n,t){this.freeze();const r=Qs(t),o=this.compiler||this.Compiler;return xf("stringify",o),Q1(n),o(n,r)}use(n,...t){const r=this.attachers,o=this.namespace;if(If("use",this.frozen),n!=null)if(typeof n=="function")s(n,t);else if(typeof n=="object")Array.isArray(n)?l(n):a(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function i(c){if(typeof c=="function")s(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[u,...d]=c;s(u,d)}else a(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function a(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(c.plugins),c.settings&&(o.settings=wf(!0,o.settings,c.settings))}function l(c){let u=-1;if(c!=null)if(Array.isArray(c))for(;++u<c.length;){const d=c[u];i(d)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function s(c,u){let d=-1,f=-1;for(;++d<r.length;)if(r[d][0]===c){f=d;break}if(f===-1)r.push([c,...u]);else if(u.length>0){let[m,...h]=u;const b=r[f][1];fh(b)&&fh(m)&&(m=wf(!0,b,m)),r[f]=[c,m,...h]}}}}const WN=new e0().freeze();function Ef(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function xf(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function If(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Q1(e){if(!fh(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Y1(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Qs(e){return XN(e)?e:new W3(e)}function XN(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function GN(e){return typeof e=="string"||ZN(e)}function ZN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const KN="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",J1=[],ev={allowDangerousHtml:!0},qN=/^(https?|ircs?|mailto|xmpp)$/i,QN=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function YN(e){const n=e.allowedElements,t=e.allowElement,r=e.children||"",o=e.className,i=e.components,a=e.disallowedElements,l=e.rehypePlugins||J1,s=e.remarkPlugins||J1,c=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...ev}:ev,u=e.skipHtml,d=e.unwrapDisallowed,f=e.urlTransform||JN,m=WN().use(RP).use(s).use(AN,c).use(l),h=new W3;typeof r=="string"&&(h.value=r);for(const v of QN)Object.hasOwn(e,v.from)&&(""+v.from+(v.to?"use `"+v.to+"` instead":"remove it")+KN+v.id,void 0);const b=m.parse(h);let k=m.runSync(b,h);return o&&(k={type:"element",tagName:"div",properties:{className:o},children:k.type==="root"?k.children:[k]}),U3(k,g),dT(k,{Fragment:re.Fragment,components:i,ignoreInvalidStyle:!0,jsx:re.jsx,jsxs:re.jsxs,passKeys:!0,passNode:!0});function g(v,y,E){if(v.type==="raw"&&E&&typeof y=="number")return u?E.children.splice(y,1):E.children[y]={type:"text",value:v.value},y;if(v.type==="element"){let _;for(_ in vf)if(Object.hasOwn(vf,_)&&Object.hasOwn(v.properties,_)){const w=v.properties[_],A=vf[_];(A===null||A.includes(v.tagName))&&(v.properties[_]=f(String(w||""),_,v))}}if(v.type==="element"){let _=n?!n.includes(v.tagName):a?a.includes(v.tagName):!1;if(!_&&t&&typeof y=="number"&&(_=!t(v,y,E)),_&&E&&typeof y=="number")return d&&v.children?E.children.splice(y,1,...v.children):E.children.splice(y,1),y}}}function JN(e){const n=e.indexOf(":"),t=e.indexOf("?"),r=e.indexOf("#"),o=e.indexOf("/");return n<0||o>-1&&n>o||t>-1&&n>t||r>-1&&n>r||qN.test(e.slice(0,n))?e:""}function eR(e){return l3({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"},child:[]}]})(e)}function xc({issue:e}){const n=t=>{window.open(t,"_blank","noopener,noreferrer")};return re.jsx("div",{className:"cursor-pointer hover:text-slate-500 p-2",onClick:()=>n(e.url),children:re.jsx("div",{className:"rounded-8 border hover:border-slate-700 shadow bg-white",children:re.jsxs("div",{className:"p-2",children:[re.jsxs("div",{className:"p-2 border-b flex justify-stretch",children:[re.jsxs("div",{className:"flex-1",children:[re.jsx("div",{className:"text-std-18B-6",children:e.title}),re.jsx("div",{className:"text-dns-14N-2 flex flex-row space-x-2",children:re.jsx("div",{className:"rounded-32",children:o3(e.createdAt)})})]}),re.jsxs("div",{className:"flex justify-center items-center p-2 space-x-2 text-mono-14B-5",children:[re.jsxs("div",{className:"rounded-32",children:["👍️ ",e.reactions.totalCount]}),re.jsxs("div",{className:"rounded-32 flex items-center",children:[re.jsx("span",{className:"pr-2",children:re.jsx(eR,{})}),e.comments.totalCount]})]})]}),re.jsx("div",{className:"p-2",children:re.jsx("div",{className:"scroll-auto overflow-y-auto max-h-32",children:re.jsx(YN,{children:e.body})})})]})})})}function nR(){const e=Sc.sort((r,o)=>new Date(o.createdAt).getTime()-new Date(r.createdAt).getTime()).slice(0,5),n=Sc.sort((r,o)=>o.reactions.totalCount-r.reactions.totalCount).slice(0,5),t=Sc.sort((r,o)=>o.comments.totalCount-r.comments.totalCount).slice(0,5);return re.jsxs("div",{className:"space-y-6",children:[re.jsxs("div",{className:"bg-white rounded-8  space-y-8 p-6",children:[re.jsx("div",{className:"text-std-32B-5",children:"安野たかひろのマニフェストGitHubを眺めるサイト"}),re.jsxs("div",{children:[re.jsxs("div",{className:"text-std-16N-7",children:["東京都知事選挙の立候補者である安野たかひろ氏は、GitHub上でマニフェストを",re.jsx("a",{href:"https://github.com/takahiroanno2024/election2024",target:"_blank",rel:"noopener noreferrer",children:"公開"}),"し、 一般からの意見や提案を募るという取り組みを行っています。"]}),re.jsx("div",{className:"text-std-16N-7",children:"このサイトでは、安野氏のGitHubからマニフェストに関わるIssueと実際に取り込まれたコミットをAPIで取得し表示します。"}),re.jsx("div",{className:"text-std-16N-7",children:"情報は30分ごとに更新されます。"})]}),re.jsx("div",{children:re.jsxs("div",{className:"flex flex-col space-y-4 justify-center items-center text-std-16N-7",children:[re.jsx("div",{className:"flex flex-row space-x-2",children:re.jsx(ui,{url:"https://github.com/takahiroanno2024/election2024",text:"安野たかひろGitHubリポジトリ"})}),re.jsx(ui,{url:"https://manifest.takahiroanno.com/",text:"安野たかひろ：都知事選2024マニフェスト"})]})})]}),re.jsxs("div",{className:"rounded-8 bg-white",children:[re.jsx("div",{className:"text-std-20B-5 p-4",children:"最新のIssue"}),re.jsx("div",{className:"space-y-2",children:e.map(r=>re.jsx(xc,{issue:r}))})]}),re.jsxs("div",{className:"rounded-8 bg-white",children:[re.jsx("div",{className:"text-std-20B-5 p-4",children:"👍️の多いIssue"}),re.jsx("div",{className:"space-y-2",children:n.map(r=>re.jsx(xc,{issue:r}))})]}),re.jsxs("div",{className:"rounded-8 bg-white",children:[re.jsx("div",{className:"text-std-20B-5 p-4",children:"コメントの多いIssue"}),re.jsx("div",{className:"space-y-2",children:t.map(r=>re.jsx(xc,{issue:r}))})]})]})}function tR(){const e=Ry();return console.error(e),re.jsxs("div",{id:"error-page",children:[re.jsx("h1",{children:"Oops!"}),re.jsx("p",{children:"Sorry, an unexpected error has occurred."}),re.jsx("p",{children:re.jsx("i",{children:e.statusText||e.message})})]})}const{Header:rR,Footer:oR,Content:iR}=Si;function aR(){const e=fp(),n=m5(),t=[{key:"/",label:"このサイトについて"},{key:"/issues",label:"課題提起一覧(Issues)"},{key:"/commits",label:"反映履歴一覧(Commits)"}],r=o=>{n(o.key)};return re.jsx(re.Fragment,{children:re.jsxs(Si,{children:[re.jsx(rR,{className:"flex items-center bg-white border-b",children:re.jsx(ps,{onClick:r,theme:"light",mode:"horizontal",defaultSelectedKeys:[e.pathname],items:t,style:{flex:1,minWidth:0}})}),re.jsx(iR,{className:"p-2 md:px-12 md:py-8",children:re.jsx(A5,{})}),re.jsxs(oR,{style:{textAlign:"center"},children:["watch-takahiroanno-manifest2024 ©",new Date().getFullYear()," Created by opvelll"]})]})})}function lR(){const e=Sc.sort((n,t)=>new Date(t.createdAt).getTime()-new Date(n.createdAt).getTime());return re.jsxs(re.Fragment,{children:[re.jsxs("div",{className:"bg-white rounded-8 mb-4 flex flex-row justify-center items-center space-x-4 py-2",children:[re.jsx(ui,{url:"https://github.com/takahiroanno2024/election2024/issues",text:"GitHubのIssueページはこちら "}),re.jsx(ui,{url:"https://github.com/takahiroanno2024/election2024/blob/main/docs/contribution.md",text:"貢献したいあなたへ"}),re.jsx(ui,{url:"https://github.com/takahiroanno2024/election2024/blob/main/docs/manual_issue.md#new_issue",text:"新しいIssueの立て方はこちら"})]}),re.jsxs("div",{className:"p-4 bg-white rounded-8",children:[re.jsx("div",{className:"text-std-20B-5 p-4",children:"課題提起(Issue)の一覧"}),re.jsx("div",{className:"",children:e.map(n=>re.jsx(xc,{issue:n}))})]})]})}function sR(){return re.jsxs(re.Fragment,{children:[re.jsx("div",{className:"bg-white rounded-8 mb-4 flex flex-row justify-center items-center space-x-4 py-2",children:re.jsx(rd,{type:"primary",shape:"round",href:"https://github.com/takahiroanno2024/election2024/blob/main/docs/manual_pull_request.md",children:"変更提案の仕方はこちら"})}),re.jsx("div",{children:"工事中"})]})}function cR(){const e=N5([{path:"/",element:re.jsx(aR,{}),errorElement:re.jsx(tR,{}),children:[{path:"/",element:re.jsx(nR,{})},{path:"/issues",element:re.jsx(lR,{})},{path:"/pullRequests",element:re.jsx(sR,{})},{path:"/commits",element:re.jsx(xA,{})}]}],{basename:"/watch-takahiroanno-manifest2024"});return re.jsx(z5,{router:e})}_f.createRoot(document.getElementById("root")).render(re.jsx(Ye.StrictMode,{children:re.jsx(Ia,{theme:{token:{colorPrimary:"#1cc95f"}},children:re.jsx(cR,{})})}));

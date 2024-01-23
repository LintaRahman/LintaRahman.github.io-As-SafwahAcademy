(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();function M1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(r,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function Lp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ip={exports:{}},Ui={},Mp={exports:{}},$={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Ka=Symbol.for("react.element"),$1=Symbol.for("react.portal"),F1=Symbol.for("react.fragment"),D1=Symbol.for("react.strict_mode"),U1=Symbol.for("react.profiler"),V1=Symbol.for("react.provider"),W1=Symbol.for("react.context"),B1=Symbol.for("react.forward_ref"),Y1=Symbol.for("react.suspense"),H1=Symbol.for("react.memo"),q1=Symbol.for("react.lazy"),Sf=Symbol.iterator;function Q1(e){return e===null||typeof e!="object"?null:(e=Sf&&e[Sf]||e["@@iterator"],typeof e=="function"?e:null)}var $p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fp=Object.assign,Dp={};function Dr(e,t,n){this.props=e,this.context=t,this.refs=Dp,this.updater=n||$p}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Up(){}Up.prototype=Dr.prototype;function qu(e,t,n){this.props=e,this.context=t,this.refs=Dp,this.updater=n||$p}var Qu=qu.prototype=new Up;Qu.constructor=qu;Fp(Qu,Dr.prototype);Qu.isPureReactComponent=!0;var jf=Array.isArray,Vp=Object.prototype.hasOwnProperty,Xu={current:null},Wp={key:!0,ref:!0,__self:!0,__source:!0};function Bp(e,t,n){var r,a={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Vp.call(t,r)&&!Wp.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:Ka,type:e,key:o,ref:i,props:a,_owner:Xu.current}}function X1(e,t){return{$$typeof:Ka,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ku(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ka}function K1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Cf=/\/+/g;function Fl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?K1(""+e.key):t.toString(36)}function Fo(e,t,n,r,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Ka:case $1:i=!0}}if(i)return i=e,a=a(i),e=r===""?"."+Fl(i,0):r,jf(a)?(n="",e!=null&&(n=e.replace(Cf,"$&/")+"/"),Fo(a,t,n,"",function(c){return c})):a!=null&&(Ku(a)&&(a=X1(a,n+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Cf,"$&/")+"/")+e)),t.push(a)),1;if(i=0,r=r===""?".":r+":",jf(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Fl(o,l);i+=Fo(o,t,n,s,a)}else if(s=Q1(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Fl(o,l++),i+=Fo(o,t,n,s,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function uo(e,t,n){if(e==null)return e;var r=[],a=0;return Fo(e,r,"","",function(o){return t.call(n,o,a++)}),r}function G1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},Do={transition:null},Z1={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:Do,ReactCurrentOwner:Xu};$.Children={map:uo,forEach:function(e,t,n){uo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return uo(e,function(){t++}),t},toArray:function(e){return uo(e,function(t){return t})||[]},only:function(e){if(!Ku(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=Dr;$.Fragment=F1;$.Profiler=U1;$.PureComponent=qu;$.StrictMode=D1;$.Suspense=Y1;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z1;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Fp({},e.props),a=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Xu.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Vp.call(t,s)&&!Wp.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ka,type:e.type,key:a,ref:o,props:r,_owner:i}};$.createContext=function(e){return e={$$typeof:W1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:V1,_context:e},e.Consumer=e};$.createElement=Bp;$.createFactory=function(e){var t=Bp.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:B1,render:e}};$.isValidElement=Ku;$.lazy=function(e){return{$$typeof:q1,_payload:{_status:-1,_result:e},_init:G1}};$.memo=function(e,t){return{$$typeof:H1,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Do.transition;Do.transition={};try{e()}finally{Do.transition=t}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(e,t){return Ae.current.useCallback(e,t)};$.useContext=function(e){return Ae.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};$.useEffect=function(e,t){return Ae.current.useEffect(e,t)};$.useId=function(){return Ae.current.useId()};$.useImperativeHandle=function(e,t,n){return Ae.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Ae.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Ae.current.useReducer(e,t,n)};$.useRef=function(e){return Ae.current.useRef(e)};$.useState=function(e){return Ae.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Ae.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Ae.current.useTransition()};$.version="18.2.0";Mp.exports=$;var j=Mp.exports;const At=Lp(j),Ns=M1({__proto__:null,default:At},[j]);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var J1=j,eg=Symbol.for("react.element"),tg=Symbol.for("react.fragment"),ng=Object.prototype.hasOwnProperty,rg=J1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ag={key:!0,ref:!0,__self:!0,__source:!0};function Yp(e,t,n){var r,a={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)ng.call(t,r)&&!ag.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:eg,type:e,key:o,ref:i,props:a,_owner:rg.current}}Ui.Fragment=tg;Ui.jsx=Yp;Ui.jsxs=Yp;Ip.exports=Ui;var u=Ip.exports,Ps={},Hp={exports:{}},Ke={},qp={exports:{}},Qp={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(e){function t(E,z){var R=E.length;E.push(z);e:for(;0<R;){var J=R-1>>>1,ae=E[J];if(0<a(ae,z))E[J]=z,E[R]=ae,R=J;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var z=E[0],R=E.pop();if(R!==z){E[0]=R;e:for(var J=0,ae=E.length,Rt=ae>>>1;J<Rt;){var Ve=2*(J+1)-1,Kt=E[Ve],We=Ve+1,tt=E[We];if(0>a(Kt,R))We<ae&&0>a(tt,Kt)?(E[J]=tt,E[We]=R,J=We):(E[J]=Kt,E[Ve]=R,J=Ve);else if(We<ae&&0>a(tt,R))E[J]=tt,E[We]=R,J=We;else break e}}return z}function a(E,z){var R=E.sortIndex-z.sortIndex;return R!==0?R:E.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var s=[],c=[],d=1,p=null,m=3,b=!1,y=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(E){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=E)r(c),z.sortIndex=z.expirationTime,t(s,z);else break;z=n(c)}}function x(E){if(v=!1,g(E),!y)if(n(s)!==null)y=!0,Zn(w);else{var z=n(c);z!==null&&et(x,z.startTime-E)}}function w(E,z){y=!1,v&&(v=!1,h(T),T=-1),b=!0;var R=m;try{for(g(z),p=n(s);p!==null&&(!(p.expirationTime>z)||E&&!Ue());){var J=p.callback;if(typeof J=="function"){p.callback=null,m=p.priorityLevel;var ae=J(p.expirationTime<=z);z=e.unstable_now(),typeof ae=="function"?p.callback=ae:p===n(s)&&r(s),g(z)}else r(s);p=n(s)}if(p!==null)var Rt=!0;else{var Ve=n(c);Ve!==null&&et(x,Ve.startTime-z),Rt=!1}return Rt}finally{p=null,m=R,b=!1}}var C=!1,k=null,T=-1,D=5,I=-1;function Ue(){return!(e.unstable_now()-I<D)}function _n(){if(k!==null){var E=e.unstable_now();I=E;var z=!0;try{z=k(!0,E)}finally{z?On():(C=!1,k=null)}}else C=!1}var On;if(typeof f=="function")On=function(){f(_n)};else if(typeof MessageChannel<"u"){var lo=new MessageChannel,Ml=lo.port2;lo.port1.onmessage=_n,On=function(){Ml.postMessage(null)}}else On=function(){S(_n,0)};function Zn(E){k=E,C||(C=!0,On())}function et(E,z){T=S(function(){E(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||b||(y=!0,Zn(w))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(E){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var R=m;m=z;try{return E()}finally{m=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,z){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=m;m=E;try{return z()}finally{m=R}},e.unstable_scheduleCallback=function(E,z,R){var J=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?J+R:J):R=J,E){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=R+ae,E={id:d++,callback:z,priorityLevel:E,startTime:R,expirationTime:ae,sortIndex:-1},R>J?(E.sortIndex=R,t(c,E),n(s)===null&&E===n(c)&&(v?(h(T),T=-1):v=!0,et(x,R-J))):(E.sortIndex=ae,t(s,E),y||b||(y=!0,Zn(w))),E},e.unstable_shouldYield=Ue,e.unstable_wrapCallback=function(E){var z=m;return function(){var R=m;m=z;try{return E.apply(this,arguments)}finally{m=R}}}})(Qp);qp.exports=Qp;var og=qp.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Xp=j,Xe=og;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kp=new Set,ka={};function Kn(e,t){Nr(e,t),Nr(e+"Capture",t)}function Nr(e,t){for(ka[e]=t,e=0;e<t.length;e++)Kp.add(t[e])}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Es=Object.prototype.hasOwnProperty,ig=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nf={},Pf={};function lg(e){return Es.call(Pf,e)?!0:Es.call(Nf,e)?!1:ig.test(e)?Pf[e]=!0:(Nf[e]=!0,!1)}function sg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ug(e,t,n,r){if(t===null||typeof t>"u"||sg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gu=/[\-:]([a-z])/g;function Zu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gu,Zu);je[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gu,Zu);je[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gu,Zu);je[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ju(e,t,n,r){var a=je.hasOwnProperty(t)?je[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ug(t,n,a,r)&&(n=null),r||a===null?lg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Qt=Xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,co=Symbol.for("react.element"),nr=Symbol.for("react.portal"),rr=Symbol.for("react.fragment"),ec=Symbol.for("react.strict_mode"),_s=Symbol.for("react.profiler"),Gp=Symbol.for("react.provider"),Zp=Symbol.for("react.context"),tc=Symbol.for("react.forward_ref"),Os=Symbol.for("react.suspense"),Ts=Symbol.for("react.suspense_list"),nc=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),Jp=Symbol.for("react.offscreen"),Ef=Symbol.iterator;function Xr(e){return e===null||typeof e!="object"?null:(e=Ef&&e[Ef]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Dl;function aa(e){if(Dl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Dl=t&&t[1]||""}return`
`+Dl+e}var Ul=!1;function Vl(e,t){if(!e||Ul)return"";Ul=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),o=r.stack.split(`
`),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==o[l]){var s=`
`+a[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=l);break}}}finally{Ul=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?aa(e):""}function cg(e){switch(e.tag){case 5:return aa(e.type);case 16:return aa("Lazy");case 13:return aa("Suspense");case 19:return aa("SuspenseList");case 0:case 2:case 15:return e=Vl(e.type,!1),e;case 11:return e=Vl(e.type.render,!1),e;case 1:return e=Vl(e.type,!0),e;default:return""}}function As(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rr:return"Fragment";case nr:return"Portal";case _s:return"Profiler";case ec:return"StrictMode";case Os:return"Suspense";case Ts:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zp:return(e.displayName||"Context")+".Consumer";case Gp:return(e._context.displayName||"Context")+".Provider";case tc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nc:return t=e.displayName||null,t!==null?t:As(e.type)||"Memo";case tn:t=e._payload,e=e._init;try{return As(e(t))}catch{}}return null}function fg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return As(t);case 8:return t===ec?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function em(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dg(e){var t=em(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fo(e){e._valueTracker||(e._valueTracker=dg(e))}function tm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=em(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zs(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _f(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function nm(e,t){t=t.checked,t!=null&&Ju(e,"checked",t,!1)}function Rs(e,t){nm(e,t);var n=bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ls(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ls(e,t.type,bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Of(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ls(e,t,n){(t!=="number"||ii(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var oa=Array.isArray;function vr(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Is(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Tf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(oa(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bn(n)}}function rm(e,t){var n=bn(t.value),r=bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Af(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function am(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ms(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?am(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var po,om=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Sa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pg=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(e){pg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ca[t]=ca[e]})});function im(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ca.hasOwnProperty(e)&&ca[e]?(""+t).trim():t+"px"}function lm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=im(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var mg=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $s(e,t){if(t){if(mg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Fs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ds=null;function rc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Us=null,br=null,xr=null;function zf(e){if(e=Ja(e)){if(typeof Us!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Hi(t),Us(e.stateNode,e.type,t))}}function sm(e){br?xr?xr.push(e):xr=[e]:br=e}function um(){if(br){var e=br,t=xr;if(xr=br=null,zf(e),t)for(e=0;e<t.length;e++)zf(t[e])}}function cm(e,t){return e(t)}function fm(){}var Wl=!1;function dm(e,t,n){if(Wl)return e(t,n);Wl=!0;try{return cm(e,t,n)}finally{Wl=!1,(br!==null||xr!==null)&&(fm(),um())}}function ja(e,t){var n=e.stateNode;if(n===null)return null;var r=Hi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Vs=!1;if(Ut)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){Vs=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{Vs=!1}function hg(e,t,n,r,a,o,i,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var fa=!1,li=null,si=!1,Ws=null,gg={onError:function(e){fa=!0,li=e}};function yg(e,t,n,r,a,o,i,l,s){fa=!1,li=null,hg.apply(gg,arguments)}function vg(e,t,n,r,a,o,i,l,s){if(yg.apply(this,arguments),fa){if(fa){var c=li;fa=!1,li=null}else throw Error(N(198));si||(si=!0,Ws=c)}}function Gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rf(e){if(Gn(e)!==e)throw Error(N(188))}function bg(e){var t=e.alternate;if(!t){if(t=Gn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return Rf(a),e;if(o===r)return Rf(a),t;o=o.sibling}throw Error(N(188))}if(n.return!==r.return)n=a,r=o;else{for(var i=!1,l=a.child;l;){if(l===n){i=!0,n=a,r=o;break}if(l===r){i=!0,r=a,n=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===n){i=!0,n=o,r=a;break}if(l===r){i=!0,r=o,n=a;break}l=l.sibling}if(!i)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function mm(e){return e=bg(e),e!==null?hm(e):null}function hm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hm(e);if(t!==null)return t;e=e.sibling}return null}var gm=Xe.unstable_scheduleCallback,Lf=Xe.unstable_cancelCallback,xg=Xe.unstable_shouldYield,wg=Xe.unstable_requestPaint,le=Xe.unstable_now,kg=Xe.unstable_getCurrentPriorityLevel,ac=Xe.unstable_ImmediatePriority,ym=Xe.unstable_UserBlockingPriority,ui=Xe.unstable_NormalPriority,Sg=Xe.unstable_LowPriority,vm=Xe.unstable_IdlePriority,Vi=null,_t=null;function jg(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Vi,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:Pg,Cg=Math.log,Ng=Math.LN2;function Pg(e){return e>>>=0,e===0?32:31-(Cg(e)/Ng|0)|0}var mo=64,ho=4194304;function ia(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ci(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~a;l!==0?r=ia(l):(o&=i,o!==0&&(r=ia(o)))}else i=n&~a,i!==0?r=ia(i):o!==0&&(r=ia(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),a=1<<n,r|=e[n],t&=~a;return r}function Eg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _g(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-gt(o),l=1<<i,s=a[i];s===-1?(!(l&n)||l&r)&&(a[i]=Eg(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Bs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bm(){var e=mo;return mo<<=1,!(mo&4194240)&&(mo=64),e}function Bl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ga(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function Og(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-gt(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}function oc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var B=0;function xm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wm,ic,km,Sm,jm,Ys=!1,go=[],cn=null,fn=null,dn=null,Ca=new Map,Na=new Map,rn=[],Tg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function If(e,t){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Ca.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Na.delete(t.pointerId)}}function Gr(e,t,n,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Ja(t),t!==null&&ic(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Ag(e,t,n,r,a){switch(t){case"focusin":return cn=Gr(cn,e,t,n,r,a),!0;case"dragenter":return fn=Gr(fn,e,t,n,r,a),!0;case"mouseover":return dn=Gr(dn,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Ca.set(o,Gr(Ca.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Na.set(o,Gr(Na.get(o)||null,e,t,n,r,a)),!0}return!1}function Cm(e){var t=zn(e.target);if(t!==null){var n=Gn(t);if(n!==null){if(t=n.tag,t===13){if(t=pm(n),t!==null){e.blockedOn=t,jm(e.priority,function(){km(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ds=r,n.target.dispatchEvent(r),Ds=null}else return t=Ja(n),t!==null&&ic(t),e.blockedOn=n,!1;t.shift()}return!0}function Mf(e,t,n){Uo(e)&&n.delete(t)}function zg(){Ys=!1,cn!==null&&Uo(cn)&&(cn=null),fn!==null&&Uo(fn)&&(fn=null),dn!==null&&Uo(dn)&&(dn=null),Ca.forEach(Mf),Na.forEach(Mf)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ys||(Ys=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,zg)))}function Pa(e){function t(a){return Zr(a,e)}if(0<go.length){Zr(go[0],e);for(var n=1;n<go.length;n++){var r=go[n];r.blockedOn===e&&(r.blockedOn=null)}}for(cn!==null&&Zr(cn,e),fn!==null&&Zr(fn,e),dn!==null&&Zr(dn,e),Ca.forEach(t),Na.forEach(t),n=0;n<rn.length;n++)r=rn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)Cm(n),n.blockedOn===null&&rn.shift()}var wr=Qt.ReactCurrentBatchConfig,fi=!0;function Rg(e,t,n,r){var a=B,o=wr.transition;wr.transition=null;try{B=1,lc(e,t,n,r)}finally{B=a,wr.transition=o}}function Lg(e,t,n,r){var a=B,o=wr.transition;wr.transition=null;try{B=4,lc(e,t,n,r)}finally{B=a,wr.transition=o}}function lc(e,t,n,r){if(fi){var a=Hs(e,t,n,r);if(a===null)es(e,t,r,di,n),If(e,r);else if(Ag(a,e,t,n,r))r.stopPropagation();else if(If(e,r),t&4&&-1<Tg.indexOf(e)){for(;a!==null;){var o=Ja(a);if(o!==null&&wm(o),o=Hs(e,t,n,r),o===null&&es(e,t,r,di,n),o===a)break;a=o}a!==null&&r.stopPropagation()}else es(e,t,r,null,n)}}var di=null;function Hs(e,t,n,r){if(di=null,e=rc(r),e=zn(e),e!==null)if(t=Gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=pm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return di=e,null}function Nm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kg()){case ac:return 1;case ym:return 4;case ui:case Sg:return 16;case vm:return 536870912;default:return 16}default:return 16}}var on=null,sc=null,Vo=null;function Pm(){if(Vo)return Vo;var e,t=sc,n=t.length,r,a="value"in on?on.value:on.textContent,o=a.length;for(e=0;e<n&&t[e]===a[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===a[o-r];r++);return Vo=a.slice(e,1<r?1-r:void 0)}function Wo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yo(){return!0}function $f(){return!1}function Ge(e){function t(n,r,a,o,i){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?yo:$f,this.isPropagationStopped=$f,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),t}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=Ge(Ur),Za=re({},Ur,{view:0,detail:0}),Ig=Ge(Za),Yl,Hl,Jr,Wi=re({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Yl=e.screenX-Jr.screenX,Hl=e.screenY-Jr.screenY):Hl=Yl=0,Jr=e),Yl)},movementY:function(e){return"movementY"in e?e.movementY:Hl}}),Ff=Ge(Wi),Mg=re({},Wi,{dataTransfer:0}),$g=Ge(Mg),Fg=re({},Za,{relatedTarget:0}),ql=Ge(Fg),Dg=re({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),Ug=Ge(Dg),Vg=re({},Ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wg=Ge(Vg),Bg=re({},Ur,{data:0}),Df=Ge(Bg),Yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qg[e])?!!t[e]:!1}function cc(){return Qg}var Xg=re({},Za,{key:function(e){if(e.key){var t=Yg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cc,charCode:function(e){return e.type==="keypress"?Wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kg=Ge(Xg),Gg=re({},Wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uf=Ge(Gg),Zg=re({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cc}),Jg=Ge(Zg),ey=re({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),ty=Ge(ey),ny=re({},Wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ry=Ge(ny),ay=[9,13,27,32],fc=Ut&&"CompositionEvent"in window,da=null;Ut&&"documentMode"in document&&(da=document.documentMode);var oy=Ut&&"TextEvent"in window&&!da,Em=Ut&&(!fc||da&&8<da&&11>=da),Vf=String.fromCharCode(32),Wf=!1;function _m(e,t){switch(e){case"keyup":return ay.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Om(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ar=!1;function iy(e,t){switch(e){case"compositionend":return Om(t);case"keypress":return t.which!==32?null:(Wf=!0,Vf);case"textInput":return e=t.data,e===Vf&&Wf?null:e;default:return null}}function ly(e,t){if(ar)return e==="compositionend"||!fc&&_m(e,t)?(e=Pm(),Vo=sc=on=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Em&&t.locale!=="ko"?null:t.data;default:return null}}var sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sy[e.type]:t==="textarea"}function Tm(e,t,n,r){sm(r),t=pi(t,"onChange"),0<t.length&&(n=new uc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pa=null,Ea=null;function uy(e){Vm(e,0)}function Bi(e){var t=lr(e);if(tm(t))return e}function cy(e,t){if(e==="change")return t}var Am=!1;if(Ut){var Ql;if(Ut){var Xl="oninput"in document;if(!Xl){var Yf=document.createElement("div");Yf.setAttribute("oninput","return;"),Xl=typeof Yf.oninput=="function"}Ql=Xl}else Ql=!1;Am=Ql&&(!document.documentMode||9<document.documentMode)}function Hf(){pa&&(pa.detachEvent("onpropertychange",zm),Ea=pa=null)}function zm(e){if(e.propertyName==="value"&&Bi(Ea)){var t=[];Tm(t,Ea,e,rc(e)),dm(uy,t)}}function fy(e,t,n){e==="focusin"?(Hf(),pa=t,Ea=n,pa.attachEvent("onpropertychange",zm)):e==="focusout"&&Hf()}function dy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bi(Ea)}function py(e,t){if(e==="click")return Bi(t)}function my(e,t){if(e==="input"||e==="change")return Bi(t)}function hy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:hy;function _a(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Es.call(t,a)||!bt(e[a],t[a]))return!1}return!0}function qf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qf(e,t){var n=qf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qf(n)}}function Rm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lm(){for(var e=window,t=ii();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ii(e.document)}return t}function dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gy(e){var t=Lm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rm(n.ownerDocument.documentElement,n)){if(r!==null&&dc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=r.end===void 0?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=Qf(n,o);var i=Qf(n,r);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yy=Ut&&"documentMode"in document&&11>=document.documentMode,or=null,qs=null,ma=null,Qs=!1;function Xf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qs||or==null||or!==ii(r)||(r=or,"selectionStart"in r&&dc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ma&&_a(ma,r)||(ma=r,r=pi(qs,"onSelect"),0<r.length&&(t=new uc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=or)))}function vo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ir={animationend:vo("Animation","AnimationEnd"),animationiteration:vo("Animation","AnimationIteration"),animationstart:vo("Animation","AnimationStart"),transitionend:vo("Transition","TransitionEnd")},Kl={},Im={};Ut&&(Im=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function Yi(e){if(Kl[e])return Kl[e];if(!ir[e])return e;var t=ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Im)return Kl[e]=t[n];return e}var Mm=Yi("animationend"),$m=Yi("animationiteration"),Fm=Yi("animationstart"),Dm=Yi("transitionend"),Um=new Map,Kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(e,t){Um.set(e,t),Kn(t,[e])}for(var Gl=0;Gl<Kf.length;Gl++){var Zl=Kf[Gl],vy=Zl.toLowerCase(),by=Zl[0].toUpperCase()+Zl.slice(1);jn(vy,"on"+by)}jn(Mm,"onAnimationEnd");jn($m,"onAnimationIteration");jn(Fm,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(Dm,"onTransitionEnd");Nr("onMouseEnter",["mouseout","mouseover"]);Nr("onMouseLeave",["mouseout","mouseover"]);Nr("onPointerEnter",["pointerout","pointerover"]);Nr("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xy=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function Gf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,vg(r,t,void 0,e),e.currentTarget=null}function Vm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;Gf(a,l,c),o=s}else for(i=0;i<r.length;i++){if(l=r[i],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;Gf(a,l,c),o=s}}}if(si)throw e=Ws,si=!1,Ws=null,e}function Q(e,t){var n=t[Js];n===void 0&&(n=t[Js]=new Set);var r=e+"__bubble";n.has(r)||(Wm(t,e,2,!1),n.add(r))}function Jl(e,t,n){var r=0;t&&(r|=4),Wm(n,e,r,t)}var bo="_reactListening"+Math.random().toString(36).slice(2);function Oa(e){if(!e[bo]){e[bo]=!0,Kp.forEach(function(n){n!=="selectionchange"&&(xy.has(n)||Jl(n,!1,e),Jl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bo]||(t[bo]=!0,Jl("selectionchange",!1,t))}}function Wm(e,t,n,r){switch(Nm(t)){case 1:var a=Rg;break;case 4:a=Lg;break;default:a=lc}n=a.bind(null,t,n,e),a=void 0,!Vs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function es(e,t,n,r,a){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;i=i.return}for(;l!==null;){if(i=zn(l),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}l=l.parentNode}}r=r.return}dm(function(){var c=o,d=rc(n),p=[];e:{var m=Um.get(e);if(m!==void 0){var b=uc,y=e;switch(e){case"keypress":if(Wo(n)===0)break e;case"keydown":case"keyup":b=Kg;break;case"focusin":y="focus",b=ql;break;case"focusout":y="blur",b=ql;break;case"beforeblur":case"afterblur":b=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Ff;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=$g;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Jg;break;case Mm:case $m:case Fm:b=Ug;break;case Dm:b=ty;break;case"scroll":b=Ig;break;case"wheel":b=ry;break;case"copy":case"cut":case"paste":b=Wg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Uf}var v=(t&4)!==0,S=!v&&e==="scroll",h=v?m!==null?m+"Capture":null:m;v=[];for(var f=c,g;f!==null;){g=f;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,h!==null&&(x=ja(f,h),x!=null&&v.push(Ta(f,x,g)))),S)break;f=f.return}0<v.length&&(m=new b(m,y,null,n,d),p.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",m&&n!==Ds&&(y=n.relatedTarget||n.fromElement)&&(zn(y)||y[Vt]))break e;if((b||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,b?(y=n.relatedTarget||n.toElement,b=c,y=y?zn(y):null,y!==null&&(S=Gn(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(b=null,y=c),b!==y)){if(v=Ff,x="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=Uf,x="onPointerLeave",h="onPointerEnter",f="pointer"),S=b==null?m:lr(b),g=y==null?m:lr(y),m=new v(x,f+"leave",b,n,d),m.target=S,m.relatedTarget=g,x=null,zn(d)===c&&(v=new v(h,f+"enter",y,n,d),v.target=g,v.relatedTarget=S,x=v),S=x,b&&y)t:{for(v=b,h=y,f=0,g=v;g;g=Jn(g))f++;for(g=0,x=h;x;x=Jn(x))g++;for(;0<f-g;)v=Jn(v),f--;for(;0<g-f;)h=Jn(h),g--;for(;f--;){if(v===h||h!==null&&v===h.alternate)break t;v=Jn(v),h=Jn(h)}v=null}else v=null;b!==null&&Zf(p,m,b,v,!1),y!==null&&S!==null&&Zf(p,S,y,v,!0)}}e:{if(m=c?lr(c):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var w=cy;else if(Bf(m))if(Am)w=my;else{w=dy;var C=fy}else(b=m.nodeName)&&b.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(w=py);if(w&&(w=w(e,c))){Tm(p,w,n,d);break e}C&&C(e,m,c),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Ls(m,"number",m.value)}switch(C=c?lr(c):window,e){case"focusin":(Bf(C)||C.contentEditable==="true")&&(or=C,qs=c,ma=null);break;case"focusout":ma=qs=or=null;break;case"mousedown":Qs=!0;break;case"contextmenu":case"mouseup":case"dragend":Qs=!1,Xf(p,n,d);break;case"selectionchange":if(yy)break;case"keydown":case"keyup":Xf(p,n,d)}var k;if(fc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else ar?_m(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Em&&n.locale!=="ko"&&(ar||T!=="onCompositionStart"?T==="onCompositionEnd"&&ar&&(k=Pm()):(on=d,sc="value"in on?on.value:on.textContent,ar=!0)),C=pi(c,T),0<C.length&&(T=new Df(T,e,null,n,d),p.push({event:T,listeners:C}),k?T.data=k:(k=Om(n),k!==null&&(T.data=k)))),(k=oy?iy(e,n):ly(e,n))&&(c=pi(c,"onBeforeInput"),0<c.length&&(d=new Df("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=k))}Vm(p,t)})}function Ta(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pi(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=ja(e,n),o!=null&&r.unshift(Ta(e,o,a)),o=ja(e,t),o!=null&&r.push(Ta(e,o,a))),e=e.return}return r}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zf(e,t,n,r,a){for(var o=t._reactName,i=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,a?(s=ja(n,o),s!=null&&i.unshift(Ta(n,s,l))):a||(s=ja(n,o),s!=null&&i.push(Ta(n,s,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var wy=/\r\n?/g,ky=/\u0000|\uFFFD/g;function Jf(e){return(typeof e=="string"?e:""+e).replace(wy,`
`).replace(ky,"")}function xo(e,t,n){if(t=Jf(t),Jf(e)!==t&&n)throw Error(N(425))}function mi(){}var Xs=null,Ks=null;function Gs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zs=typeof setTimeout=="function"?setTimeout:void 0,Sy=typeof clearTimeout=="function"?clearTimeout:void 0,ed=typeof Promise=="function"?Promise:void 0,jy=typeof queueMicrotask=="function"?queueMicrotask:typeof ed<"u"?function(e){return ed.resolve(null).then(e).catch(Cy)}:Zs;function Cy(e){setTimeout(function(){throw e})}function ts(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Pa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Pa(t)}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function td(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),Pt="__reactFiber$"+Vr,Aa="__reactProps$"+Vr,Vt="__reactContainer$"+Vr,Js="__reactEvents$"+Vr,Ny="__reactListeners$"+Vr,Py="__reactHandles$"+Vr;function zn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vt]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=td(e);e!==null;){if(n=e[Pt])return n;e=td(e)}return t}e=n,n=e.parentNode}return null}function Ja(e){return e=e[Pt]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Hi(e){return e[Aa]||null}var eu=[],sr=-1;function Cn(e){return{current:e}}function G(e){0>sr||(e.current=eu[sr],eu[sr]=null,sr--)}function q(e,t){sr++,eu[sr]=e.current,e.current=t}var xn={},_e=Cn(xn),Me=Cn(!1),Wn=xn;function Pr(e,t){var n=e.type.contextTypes;if(!n)return xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function $e(e){return e=e.childContextTypes,e!=null}function hi(){G(Me),G(_e)}function nd(e,t,n){if(_e.current!==xn)throw Error(N(168));q(_e,t),q(Me,n)}function Bm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(N(108,fg(e)||"Unknown",a));return re({},n,r)}function gi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xn,Wn=_e.current,q(_e,e),q(Me,Me.current),!0}function rd(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Bm(e,t,Wn),r.__reactInternalMemoizedMergedChildContext=e,G(Me),G(_e),q(_e,e)):G(Me),q(Me,n)}var Mt=null,qi=!1,ns=!1;function Ym(e){Mt===null?Mt=[e]:Mt.push(e)}function Ey(e){qi=!0,Ym(e)}function Nn(){if(!ns&&Mt!==null){ns=!0;var e=0,t=B;try{var n=Mt;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mt=null,qi=!1}catch(a){throw Mt!==null&&(Mt=Mt.slice(e+1)),gm(ac,Nn),a}finally{B=t,ns=!1}}return null}var ur=[],cr=0,yi=null,vi=0,nt=[],rt=0,Bn=null,$t=1,Ft="";function Tn(e,t){ur[cr++]=vi,ur[cr++]=yi,yi=e,vi=t}function Hm(e,t,n){nt[rt++]=$t,nt[rt++]=Ft,nt[rt++]=Bn,Bn=e;var r=$t;e=Ft;var a=32-gt(r)-1;r&=~(1<<a),n+=1;var o=32-gt(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,$t=1<<32-gt(t)+a|n<<a|r,Ft=o+e}else $t=1<<o|n<<a|r,Ft=e}function pc(e){e.return!==null&&(Tn(e,1),Hm(e,1,0))}function mc(e){for(;e===yi;)yi=ur[--cr],ur[cr]=null,vi=ur[--cr],ur[cr]=null;for(;e===Bn;)Bn=nt[--rt],nt[rt]=null,Ft=nt[--rt],nt[rt]=null,$t=nt[--rt],nt[rt]=null}var qe=null,He=null,ee=!1,pt=null;function qm(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ad(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,He=pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bn!==null?{id:$t,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,He=null,!0):!1;default:return!1}}function tu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nu(e){if(ee){var t=He;if(t){var n=t;if(!ad(e,t)){if(tu(e))throw Error(N(418));t=pn(n.nextSibling);var r=qe;t&&ad(e,t)?qm(r,n):(e.flags=e.flags&-4097|2,ee=!1,qe=e)}}else{if(tu(e))throw Error(N(418));e.flags=e.flags&-4097|2,ee=!1,qe=e}}}function od(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function wo(e){if(e!==qe)return!1;if(!ee)return od(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gs(e.type,e.memoizedProps)),t&&(t=He)){if(tu(e))throw Qm(),Error(N(418));for(;t;)qm(e,t),t=pn(t.nextSibling)}if(od(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=qe?pn(e.stateNode.nextSibling):null;return!0}function Qm(){for(var e=He;e;)e=pn(e.nextSibling)}function Er(){He=qe=null,ee=!1}function hc(e){pt===null?pt=[e]:pt.push(e)}var _y=Qt.ReactCurrentBatchConfig;function ft(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var bi=Cn(null),xi=null,fr=null,gc=null;function yc(){gc=fr=xi=null}function vc(e){var t=bi.current;G(bi),e._currentValue=t}function ru(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function kr(e,t){xi=e,gc=fr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Le=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(gc!==e)if(e={context:e,memoizedValue:t,next:null},fr===null){if(xi===null)throw Error(N(308));fr=e,xi.dependencies={lanes:0,firstContext:e}}else fr=fr.next=e;return t}var Rn=null;function bc(e){Rn===null?Rn=[e]:Rn.push(e)}function Xm(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,bc(t)):(n.next=a.next,a.next=n),t.interleaved=n,Wt(e,r)}function Wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nn=!1;function xc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Km(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Wt(e,n)}return a=r.interleaved,a===null?(t.next=t,bc(r)):(t.next=a.next,a.next=t),r.interleaved=t,Wt(e,n)}function Bo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,oc(e,n)}}function id(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?a=o=t:o=o.next=t}else a=o=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wi(e,t,n,r){var a=e.updateQueue;nn=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var s=l,c=s.next;s.next=null,i===null?o=c:i.next=c,i=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==i&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=s))}if(o!==null){var p=a.baseState;i=0,d=c=s=null,l=o;do{var m=l.lane,b=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,v=l;switch(m=t,b=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){p=y.call(b,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,m=typeof y=="function"?y.call(b,p,m):y,m==null)break e;p=re({},p,m);break e;case 2:nn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[l]:m.push(l))}else b={eventTime:b,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=b,s=p):d=d.next=b,i|=m;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;m=l,l=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(1);if(d===null&&(s=p),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=d,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);Hn|=i,e.lanes=i,e.memoizedState=p}}function ld(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(N(191,a));a.call(r)}}}var Gm=new Xp.Component().refs;function au(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Qi={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),a=gn(e),o=Dt(r,a);o.payload=t,n!=null&&(o.callback=n),t=mn(e,o,a),t!==null&&(yt(t,e,a,r),Bo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),a=gn(e),o=Dt(r,a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=mn(e,o,a),t!==null&&(yt(t,e,a,r),Bo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=gn(e),a=Dt(n,r);a.tag=2,t!=null&&(a.callback=t),t=mn(e,a,r),t!==null&&(yt(t,e,r,n),Bo(t,e,r))}};function sd(e,t,n,r,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!_a(n,r)||!_a(a,o):!0}function Zm(e,t,n){var r=!1,a=xn,o=t.contextType;return typeof o=="object"&&o!==null?o=it(o):(a=$e(t)?Wn:_e.current,r=t.contextTypes,o=(r=r!=null)?Pr(e,a):xn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function ud(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Qi.enqueueReplaceState(t,t.state,null)}function ou(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=Gm,xc(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=it(o):(o=$e(t)?Wn:_e.current,a.context=Pr(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(au(e,t,o,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Qi.enqueueReplaceState(a,a.state,null),wi(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ea(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var a=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var l=a.refs;l===Gm&&(l=a.refs={}),i===null?delete l[o]:l[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function ko(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cd(e){var t=e._init;return t(e._payload)}function Jm(e){function t(h,f){if(e){var g=h.deletions;g===null?(h.deletions=[f],h.flags|=16):g.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function a(h,f){return h=yn(h,f),h.index=0,h.sibling=null,h}function o(h,f,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<f?(h.flags|=2,f):g):(h.flags|=2,f)):(h.flags|=1048576,f)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,f,g,x){return f===null||f.tag!==6?(f=us(g,h.mode,x),f.return=h,f):(f=a(f,g),f.return=h,f)}function s(h,f,g,x){var w=g.type;return w===rr?d(h,f,g.props.children,x,g.key):f!==null&&(f.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===tn&&cd(w)===f.type)?(x=a(f,g.props),x.ref=ea(h,f,g),x.return=h,x):(x=Ko(g.type,g.key,g.props,null,h.mode,x),x.ref=ea(h,f,g),x.return=h,x)}function c(h,f,g,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=cs(g,h.mode,x),f.return=h,f):(f=a(f,g.children||[]),f.return=h,f)}function d(h,f,g,x,w){return f===null||f.tag!==7?(f=Dn(g,h.mode,x,w),f.return=h,f):(f=a(f,g),f.return=h,f)}function p(h,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=us(""+f,h.mode,g),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case co:return g=Ko(f.type,f.key,f.props,null,h.mode,g),g.ref=ea(h,null,f),g.return=h,g;case nr:return f=cs(f,h.mode,g),f.return=h,f;case tn:var x=f._init;return p(h,x(f._payload),g)}if(oa(f)||Xr(f))return f=Dn(f,h.mode,g,null),f.return=h,f;ko(h,f)}return null}function m(h,f,g,x){var w=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return w!==null?null:l(h,f,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case co:return g.key===w?s(h,f,g,x):null;case nr:return g.key===w?c(h,f,g,x):null;case tn:return w=g._init,m(h,f,w(g._payload),x)}if(oa(g)||Xr(g))return w!==null?null:d(h,f,g,x,null);ko(h,g)}return null}function b(h,f,g,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(g)||null,l(f,h,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case co:return h=h.get(x.key===null?g:x.key)||null,s(f,h,x,w);case nr:return h=h.get(x.key===null?g:x.key)||null,c(f,h,x,w);case tn:var C=x._init;return b(h,f,g,C(x._payload),w)}if(oa(x)||Xr(x))return h=h.get(g)||null,d(f,h,x,w,null);ko(f,x)}return null}function y(h,f,g,x){for(var w=null,C=null,k=f,T=f=0,D=null;k!==null&&T<g.length;T++){k.index>T?(D=k,k=null):D=k.sibling;var I=m(h,k,g[T],x);if(I===null){k===null&&(k=D);break}e&&k&&I.alternate===null&&t(h,k),f=o(I,f,T),C===null?w=I:C.sibling=I,C=I,k=D}if(T===g.length)return n(h,k),ee&&Tn(h,T),w;if(k===null){for(;T<g.length;T++)k=p(h,g[T],x),k!==null&&(f=o(k,f,T),C===null?w=k:C.sibling=k,C=k);return ee&&Tn(h,T),w}for(k=r(h,k);T<g.length;T++)D=b(k,h,T,g[T],x),D!==null&&(e&&D.alternate!==null&&k.delete(D.key===null?T:D.key),f=o(D,f,T),C===null?w=D:C.sibling=D,C=D);return e&&k.forEach(function(Ue){return t(h,Ue)}),ee&&Tn(h,T),w}function v(h,f,g,x){var w=Xr(g);if(typeof w!="function")throw Error(N(150));if(g=w.call(g),g==null)throw Error(N(151));for(var C=w=null,k=f,T=f=0,D=null,I=g.next();k!==null&&!I.done;T++,I=g.next()){k.index>T?(D=k,k=null):D=k.sibling;var Ue=m(h,k,I.value,x);if(Ue===null){k===null&&(k=D);break}e&&k&&Ue.alternate===null&&t(h,k),f=o(Ue,f,T),C===null?w=Ue:C.sibling=Ue,C=Ue,k=D}if(I.done)return n(h,k),ee&&Tn(h,T),w;if(k===null){for(;!I.done;T++,I=g.next())I=p(h,I.value,x),I!==null&&(f=o(I,f,T),C===null?w=I:C.sibling=I,C=I);return ee&&Tn(h,T),w}for(k=r(h,k);!I.done;T++,I=g.next())I=b(k,h,T,I.value,x),I!==null&&(e&&I.alternate!==null&&k.delete(I.key===null?T:I.key),f=o(I,f,T),C===null?w=I:C.sibling=I,C=I);return e&&k.forEach(function(_n){return t(h,_n)}),ee&&Tn(h,T),w}function S(h,f,g,x){if(typeof g=="object"&&g!==null&&g.type===rr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case co:e:{for(var w=g.key,C=f;C!==null;){if(C.key===w){if(w=g.type,w===rr){if(C.tag===7){n(h,C.sibling),f=a(C,g.props.children),f.return=h,h=f;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===tn&&cd(w)===C.type){n(h,C.sibling),f=a(C,g.props),f.ref=ea(h,C,g),f.return=h,h=f;break e}n(h,C);break}else t(h,C);C=C.sibling}g.type===rr?(f=Dn(g.props.children,h.mode,x,g.key),f.return=h,h=f):(x=Ko(g.type,g.key,g.props,null,h.mode,x),x.ref=ea(h,f,g),x.return=h,h=x)}return i(h);case nr:e:{for(C=g.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(h,f.sibling),f=a(f,g.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=cs(g,h.mode,x),f.return=h,h=f}return i(h);case tn:return C=g._init,S(h,f,C(g._payload),x)}if(oa(g))return y(h,f,g,x);if(Xr(g))return v(h,f,g,x);ko(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(h,f.sibling),f=a(f,g),f.return=h,h=f):(n(h,f),f=us(g,h.mode,x),f.return=h,h=f),i(h)):n(h,f)}return S}var _r=Jm(!0),e0=Jm(!1),eo={},Ot=Cn(eo),za=Cn(eo),Ra=Cn(eo);function Ln(e){if(e===eo)throw Error(N(174));return e}function wc(e,t){switch(q(Ra,t),q(za,e),q(Ot,eo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ms(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ms(t,e)}G(Ot),q(Ot,t)}function Or(){G(Ot),G(za),G(Ra)}function t0(e){Ln(Ra.current);var t=Ln(Ot.current),n=Ms(t,e.type);t!==n&&(q(za,e),q(Ot,n))}function kc(e){za.current===e&&(G(Ot),G(za))}var te=Cn(0);function ki(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rs=[];function Sc(){for(var e=0;e<rs.length;e++)rs[e]._workInProgressVersionPrimary=null;rs.length=0}var Yo=Qt.ReactCurrentDispatcher,as=Qt.ReactCurrentBatchConfig,Yn=0,ne=null,pe=null,ye=null,Si=!1,ha=!1,La=0,Oy=0;function Ce(){throw Error(N(321))}function jc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!bt(e[n],t[n]))return!1;return!0}function Cc(e,t,n,r,a,o){if(Yn=o,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yo.current=e===null||e.memoizedState===null?Ry:Ly,e=n(r,a),ha){o=0;do{if(ha=!1,La=0,25<=o)throw Error(N(301));o+=1,ye=pe=null,t.updateQueue=null,Yo.current=Iy,e=n(r,a)}while(ha)}if(Yo.current=ji,t=pe!==null&&pe.next!==null,Yn=0,ye=pe=ne=null,Si=!1,t)throw Error(N(300));return e}function Nc(){var e=La!==0;return La=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ne.memoizedState=ye=e:ye=ye.next=e,ye}function lt(){if(pe===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=ye===null?ne.memoizedState:ye.next;if(t!==null)ye=t,pe=e;else{if(e===null)throw Error(N(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ye===null?ne.memoizedState=ye=e:ye=ye.next=e}return ye}function Ia(e,t){return typeof t=="function"?t(e):t}function os(e){var t=lt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=pe,a=r.baseQueue,o=n.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}r.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,r=r.baseState;var l=i=null,s=null,c=o;do{var d=c.lane;if((Yn&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=p,i=r):s=s.next=p,ne.lanes|=d,Hn|=d}c=c.next}while(c!==null&&c!==o);s===null?i=r:s.next=l,bt(r,t.memoizedState)||(Le=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do o=a.lane,ne.lanes|=o,Hn|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function is(e){var t=lt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);bt(o,t.memoizedState)||(Le=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function n0(){}function r0(e,t){var n=ne,r=lt(),a=t(),o=!bt(r.memoizedState,a);if(o&&(r.memoizedState=a,Le=!0),r=r.queue,Pc(i0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,Ma(9,o0.bind(null,n,r,a,t),void 0,null),be===null)throw Error(N(349));Yn&30||a0(n,t,a)}return a}function a0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function o0(e,t,n,r){t.value=n,t.getSnapshot=r,l0(t)&&s0(e)}function i0(e,t,n){return n(function(){l0(t)&&s0(e)})}function l0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!bt(e,n)}catch{return!0}}function s0(e){var t=Wt(e,1);t!==null&&yt(t,e,1,-1)}function fd(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:e},t.queue=e,e=e.dispatch=zy.bind(null,ne,e),[t.memoizedState,e]}function Ma(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function u0(){return lt().memoizedState}function Ho(e,t,n,r){var a=St();ne.flags|=e,a.memoizedState=Ma(1|t,n,void 0,r===void 0?null:r)}function Xi(e,t,n,r){var a=lt();r=r===void 0?null:r;var o=void 0;if(pe!==null){var i=pe.memoizedState;if(o=i.destroy,r!==null&&jc(r,i.deps)){a.memoizedState=Ma(t,n,o,r);return}}ne.flags|=e,a.memoizedState=Ma(1|t,n,o,r)}function dd(e,t){return Ho(8390656,8,e,t)}function Pc(e,t){return Xi(2048,8,e,t)}function c0(e,t){return Xi(4,2,e,t)}function f0(e,t){return Xi(4,4,e,t)}function d0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function p0(e,t,n){return n=n!=null?n.concat([e]):null,Xi(4,4,d0.bind(null,t,e),n)}function Ec(){}function m0(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function h0(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function g0(e,t,n){return Yn&21?(bt(n,t)||(n=bm(),ne.lanes|=n,Hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=n)}function Ty(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=as.transition;as.transition={};try{e(!1),t()}finally{B=n,as.transition=r}}function y0(){return lt().memoizedState}function Ay(e,t,n){var r=gn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},v0(e))b0(t,n);else if(n=Xm(e,t,n,r),n!==null){var a=Te();yt(n,e,r,a),x0(n,t,r)}}function zy(e,t,n){var r=gn(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(v0(e))b0(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,bt(l,i)){var s=t.interleaved;s===null?(a.next=a,bc(t)):(a.next=s.next,s.next=a),t.interleaved=a;return}}catch{}finally{}n=Xm(e,t,a,r),n!==null&&(a=Te(),yt(n,e,r,a),x0(n,t,r))}}function v0(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function b0(e,t){ha=Si=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function x0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,oc(e,n)}}var ji={readContext:it,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},Ry={readContext:it,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:dd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ho(4194308,4,d0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ho(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ay.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:fd,useDebugValue:Ec,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=fd(!1),t=e[0];return e=Ty.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,a=St();if(ee){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),be===null)throw Error(N(349));Yn&30||a0(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,dd(i0.bind(null,r,o,e),[e]),r.flags|=2048,Ma(9,o0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=St(),t=be.identifierPrefix;if(ee){var n=Ft,r=$t;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=La++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Oy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ly={readContext:it,useCallback:m0,useContext:it,useEffect:Pc,useImperativeHandle:p0,useInsertionEffect:c0,useLayoutEffect:f0,useMemo:h0,useReducer:os,useRef:u0,useState:function(){return os(Ia)},useDebugValue:Ec,useDeferredValue:function(e){var t=lt();return g0(t,pe.memoizedState,e)},useTransition:function(){var e=os(Ia)[0],t=lt().memoizedState;return[e,t]},useMutableSource:n0,useSyncExternalStore:r0,useId:y0,unstable_isNewReconciler:!1},Iy={readContext:it,useCallback:m0,useContext:it,useEffect:Pc,useImperativeHandle:p0,useInsertionEffect:c0,useLayoutEffect:f0,useMemo:h0,useReducer:is,useRef:u0,useState:function(){return is(Ia)},useDebugValue:Ec,useDeferredValue:function(e){var t=lt();return pe===null?t.memoizedState=e:g0(t,pe.memoizedState,e)},useTransition:function(){var e=is(Ia)[0],t=lt().memoizedState;return[e,t]},useMutableSource:n0,useSyncExternalStore:r0,useId:y0,unstable_isNewReconciler:!1};function Tr(e,t){try{var n="",r=t;do n+=cg(r),r=r.return;while(r);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function ls(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function iu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var My=typeof WeakMap=="function"?WeakMap:Map;function w0(e,t,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ni||(Ni=!0,hu=r),iu(e,t)},n}function k0(e,t,n){n=Dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){iu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){iu(e,t),typeof r!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function pd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new My;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Gy.bind(null,e,t,n),t.then(e,e))}function md(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hd(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dt(-1,1),t.tag=2,mn(n,t,1))),n.lanes|=1),e)}var $y=Qt.ReactCurrentOwner,Le=!1;function Oe(e,t,n,r){t.child=e===null?e0(t,null,n,r):_r(t,e.child,n,r)}function gd(e,t,n,r,a){n=n.render;var o=t.ref;return kr(t,a),r=Cc(e,t,n,r,o,a),n=Nc(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Bt(e,t,a)):(ee&&n&&pc(t),t.flags|=1,Oe(e,t,r,a),t.child)}function yd(e,t,n,r,a){if(e===null){var o=n.type;return typeof o=="function"&&!Ic(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,S0(e,t,o,r,a)):(e=Ko(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:_a,n(i,r)&&e.ref===t.ref)return Bt(e,t,a)}return t.flags|=1,e=yn(o,r),e.ref=t.ref,e.return=t,t.child=e}function S0(e,t,n,r,a){if(e!==null){var o=e.memoizedProps;if(_a(o,r)&&e.ref===t.ref)if(Le=!1,t.pendingProps=r=o,(e.lanes&a)!==0)e.flags&131072&&(Le=!0);else return t.lanes=e.lanes,Bt(e,t,a)}return lu(e,t,n,r,a)}function j0(e,t,n){var r=t.pendingProps,a=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(pr,Ye),Ye|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(pr,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,q(pr,Ye),Ye|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,q(pr,Ye),Ye|=r;return Oe(e,t,a,n),t.child}function C0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function lu(e,t,n,r,a){var o=$e(n)?Wn:_e.current;return o=Pr(t,o),kr(t,a),n=Cc(e,t,n,r,o,a),r=Nc(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Bt(e,t,a)):(ee&&r&&pc(t),t.flags|=1,Oe(e,t,n,a),t.child)}function vd(e,t,n,r,a){if($e(n)){var o=!0;gi(t)}else o=!1;if(kr(t,a),t.stateNode===null)qo(e,t),Zm(t,n,r),ou(t,n,r,a),r=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=it(c):(c=$e(n)?Wn:_e.current,c=Pr(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||s!==c)&&ud(t,i,r,c),nn=!1;var m=t.memoizedState;i.state=m,wi(t,r,i,a),s=t.memoizedState,l!==r||m!==s||Me.current||nn?(typeof d=="function"&&(au(t,n,d,r),s=t.memoizedState),(l=nn||sd(t,n,l,r,m,s,c))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Km(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:ft(t.type,l),i.props=c,p=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=it(s):(s=$e(n)?Wn:_e.current,s=Pr(t,s));var b=n.getDerivedStateFromProps;(d=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==p||m!==s)&&ud(t,i,r,s),nn=!1,m=t.memoizedState,i.state=m,wi(t,r,i,a);var y=t.memoizedState;l!==p||m!==y||Me.current||nn?(typeof b=="function"&&(au(t,n,b,r),y=t.memoizedState),(c=nn||sd(t,n,c,r,m,y,s)||!1)?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,y,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,y,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),i.props=r,i.state=y,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return su(e,t,n,r,o,a)}function su(e,t,n,r,a,o){C0(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return a&&rd(t,n,!1),Bt(e,t,o);r=t.stateNode,$y.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=_r(t,e.child,null,o),t.child=_r(t,null,l,o)):Oe(e,t,l,o),t.memoizedState=r.state,a&&rd(t,n,!0),t.child}function N0(e){var t=e.stateNode;t.pendingContext?nd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nd(e,t.context,!1),wc(e,t.containerInfo)}function bd(e,t,n,r,a){return Er(),hc(a),t.flags|=256,Oe(e,t,n,r),t.child}var uu={dehydrated:null,treeContext:null,retryLane:0};function cu(e){return{baseLanes:e,cachePool:null,transitions:null}}function P0(e,t,n){var r=t.pendingProps,a=te.current,o=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),q(te,a&1),e===null)return nu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Zi(i,r,0,null),e=Dn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=cu(n),t.memoizedState=uu,e):_c(t,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Fy(e,t,i,r,l,a,n);if(o){o=r.fallback,i=t.mode,a=e.child,l=a.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=yn(a,s),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?o=yn(l,o):(o=Dn(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?cu(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=uu,r}return o=e.child,e=o.sibling,r=yn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _c(e,t){return t=Zi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function So(e,t,n,r){return r!==null&&hc(r),_r(t,e.child,null,n),e=_c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fy(e,t,n,r,a,o,i){if(n)return t.flags&256?(t.flags&=-257,r=ls(Error(N(422))),So(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=Zi({mode:"visible",children:r.children},a,0,null),o=Dn(o,a,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&_r(t,e.child,null,i),t.child.memoizedState=cu(i),t.memoizedState=uu,o);if(!(t.mode&1))return So(e,t,i,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(N(419)),r=ls(o,r,void 0),So(e,t,i,r)}if(l=(i&e.childLanes)!==0,Le||l){if(r=be,r!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Wt(e,a),yt(r,e,a,-1))}return Lc(),r=ls(Error(N(421))),So(e,t,i,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Zy.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,He=pn(a.nextSibling),qe=t,ee=!0,pt=null,e!==null&&(nt[rt++]=$t,nt[rt++]=Ft,nt[rt++]=Bn,$t=e.id,Ft=e.overflow,Bn=t),t=_c(t,r.children),t.flags|=4096,t)}function xd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ru(e.return,t,n)}function ss(e,t,n,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function E0(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(Oe(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xd(e,n,t);else if(e.tag===19)xd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(te,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ki(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ss(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ki(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ss(t,!0,n,null,o);break;case"together":ss(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dy(e,t,n){switch(t.tag){case 3:N0(t),Er();break;case 5:t0(t);break;case 1:$e(t.type)&&gi(t);break;case 4:wc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;q(bi,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?P0(e,t,n):(q(te,te.current&1),e=Bt(e,t,n),e!==null?e.sibling:null);q(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return E0(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),q(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,j0(e,t,n)}return Bt(e,t,n)}var _0,fu,O0,T0;_0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fu=function(){};O0=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Ln(Ot.current);var o=null;switch(n){case"input":a=zs(e,a),r=zs(e,r),o=[];break;case"select":a=re({},a,{value:void 0}),r=re({},r,{value:void 0}),o=[];break;case"textarea":a=Is(e,a),r=Is(e,r),o=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=mi)}$s(n,r);var i;n=null;for(c in a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var l=a[c];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ka.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(l=a!=null?a[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ka.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&Q("scroll",e),o||l===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};T0=function(e,t,n,r){n!==r&&(t.flags|=4)};function ta(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Uy(e,t,n){var r=t.pendingProps;switch(mc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return $e(t.type)&&hi(),Ne(t),null;case 3:return r=t.stateNode,Or(),G(Me),G(_e),Sc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pt!==null&&(vu(pt),pt=null))),fu(e,t),Ne(t),null;case 5:kc(t);var a=Ln(Ra.current);if(n=t.type,e!==null&&t.stateNode!=null)O0(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Ne(t),null}if(e=Ln(Ot.current),wo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Pt]=t,r[Aa]=o,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(a=0;a<la.length;a++)Q(la[a],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":_f(r,o),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Q("invalid",r);break;case"textarea":Tf(r,o),Q("invalid",r)}$s(n,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&xo(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&xo(r.textContent,l,e),a=["children",""+l]):ka.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&Q("scroll",r)}switch(n){case"input":fo(r),Of(r,o,!0);break;case"textarea":fo(r),Af(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=mi)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=am(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Pt]=t,e[Aa]=r,_0(e,t,!1,!1),t.stateNode=e;e:{switch(i=Fs(n,r),n){case"dialog":Q("cancel",e),Q("close",e),a=r;break;case"iframe":case"object":case"embed":Q("load",e),a=r;break;case"video":case"audio":for(a=0;a<la.length;a++)Q(la[a],e);a=r;break;case"source":Q("error",e),a=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),a=r;break;case"details":Q("toggle",e),a=r;break;case"input":_f(e,r),a=zs(e,r),Q("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=re({},r,{value:void 0}),Q("invalid",e);break;case"textarea":Tf(e,r),a=Is(e,r),Q("invalid",e);break;default:a=r}$s(n,a),l=a;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?lm(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&om(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Sa(e,s):typeof s=="number"&&Sa(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ka.hasOwnProperty(o)?s!=null&&o==="onScroll"&&Q("scroll",e):s!=null&&Ju(e,o,s,i))}switch(n){case"input":fo(e),Of(e,r,!1);break;case"textarea":fo(e),Af(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?vr(e,!!r.multiple,o,!1):r.defaultValue!=null&&vr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=mi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)T0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Ln(Ra.current),Ln(Ot.current),wo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(o=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:xo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return Ne(t),null;case 13:if(G(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&He!==null&&t.mode&1&&!(t.flags&128))Qm(),Er(),t.flags|=98560,o=!1;else if(o=wo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[Pt]=t}else Er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),o=!1}else pt!==null&&(vu(pt),pt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?me===0&&(me=3):Lc())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return Or(),fu(e,t),e===null&&Oa(t.stateNode.containerInfo),Ne(t),null;case 10:return vc(t.type._context),Ne(t),null;case 17:return $e(t.type)&&hi(),Ne(t),null;case 19:if(G(te),o=t.memoizedState,o===null)return Ne(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)ta(o,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=ki(e),i!==null){for(t.flags|=128,ta(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(te,te.current&1|2),t.child}e=e.sibling}o.tail!==null&&le()>Ar&&(t.flags|=128,r=!0,ta(o,!1),t.lanes=4194304)}else{if(!r)if(e=ki(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ta(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!ee)return Ne(t),null}else 2*le()-o.renderingStartTime>Ar&&n!==1073741824&&(t.flags|=128,r=!0,ta(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=le(),t.sibling=null,n=te.current,q(te,r?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return Rc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ye&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Vy(e,t){switch(mc(t),t.tag){case 1:return $e(t.type)&&hi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Or(),G(Me),G(_e),Sc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return kc(t),null;case 13:if(G(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(te),null;case 4:return Or(),null;case 10:return vc(t.type._context),null;case 22:case 23:return Rc(),null;case 24:return null;default:return null}}var jo=!1,Ee=!1,Wy=typeof WeakSet=="function"?WeakSet:Set,O=null;function dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function A0(e,t,n){try{n()}catch(r){oe(e,t,r)}}var wd=!1;function By(e,t){if(Xs=fi,e=Lm(),dc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,l=-1,s=-1,c=0,d=0,p=e,m=null;t:for(;;){for(var b;p!==n||a!==0&&p.nodeType!==3||(l=i+a),p!==o||r!==0&&p.nodeType!==3||(s=i+r),p.nodeType===3&&(i+=p.nodeValue.length),(b=p.firstChild)!==null;)m=p,p=b;for(;;){if(p===e)break t;if(m===n&&++c===a&&(l=i),m===o&&++d===r&&(s=i),(b=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=b}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ks={focusedElem:e,selectionRange:n},fi=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,S=y.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:ft(t.type,v),S);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(x){oe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return y=wd,wd=!1,y}function ga(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&A0(t,n,o)}a=a.next}while(a!==r)}}function Ki(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function du(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function z0(e){var t=e.alternate;t!==null&&(e.alternate=null,z0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[Aa],delete t[Js],delete t[Ny],delete t[Py])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function R0(e){return e.tag===5||e.tag===3||e.tag===4}function kd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||R0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mi));else if(r!==4&&(e=e.child,e!==null))for(pu(e,t,n),e=e.sibling;e!==null;)pu(e,t,n),e=e.sibling}function mu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(mu(e,t,n),e=e.sibling;e!==null;)mu(e,t,n),e=e.sibling}var we=null,dt=!1;function Zt(e,t,n){for(n=n.child;n!==null;)L0(e,t,n),n=n.sibling}function L0(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Vi,n)}catch{}switch(n.tag){case 5:Ee||dr(n,t);case 6:var r=we,a=dt;we=null,Zt(e,t,n),we=r,dt=a,we!==null&&(dt?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(dt?(e=we,n=n.stateNode,e.nodeType===8?ts(e.parentNode,n):e.nodeType===1&&ts(e,n),Pa(e)):ts(we,n.stateNode));break;case 4:r=we,a=dt,we=n.stateNode.containerInfo,dt=!0,Zt(e,t,n),we=r,dt=a;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&A0(n,t,i),a=a.next}while(a!==r)}Zt(e,t,n);break;case 1:if(!Ee&&(dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){oe(n,t,l)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Zt(e,t,n),Ee=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function Sd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Wy),t.forEach(function(r){var a=Jy.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:we=l.stateNode,dt=!1;break e;case 3:we=l.stateNode.containerInfo,dt=!0;break e;case 4:we=l.stateNode.containerInfo,dt=!0;break e}l=l.return}if(we===null)throw Error(N(160));L0(o,i,a),we=null,dt=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(c){oe(a,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)I0(t,e),t=t.sibling}function I0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),kt(e),r&4){try{ga(3,e,e.return),Ki(3,e)}catch(v){oe(e,e.return,v)}try{ga(5,e,e.return)}catch(v){oe(e,e.return,v)}}break;case 1:ct(t,e),kt(e),r&512&&n!==null&&dr(n,n.return);break;case 5:if(ct(t,e),kt(e),r&512&&n!==null&&dr(n,n.return),e.flags&32){var a=e.stateNode;try{Sa(a,"")}catch(v){oe(e,e.return,v)}}if(r&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&nm(a,o),Fs(l,i);var c=Fs(l,o);for(i=0;i<s.length;i+=2){var d=s[i],p=s[i+1];d==="style"?lm(a,p):d==="dangerouslySetInnerHTML"?om(a,p):d==="children"?Sa(a,p):Ju(a,d,p,c)}switch(l){case"input":Rs(a,o);break;case"textarea":rm(a,o);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var b=o.value;b!=null?vr(a,!!o.multiple,b,!1):m!==!!o.multiple&&(o.defaultValue!=null?vr(a,!!o.multiple,o.defaultValue,!0):vr(a,!!o.multiple,o.multiple?[]:"",!1))}a[Aa]=o}catch(v){oe(e,e.return,v)}}break;case 6:if(ct(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(N(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(v){oe(e,e.return,v)}}break;case 3:if(ct(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pa(t.containerInfo)}catch(v){oe(e,e.return,v)}break;case 4:ct(t,e),kt(e);break;case 13:ct(t,e),kt(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Ac=le())),r&4&&Sd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(c=Ee)||d,ct(t,e),Ee=c):ct(t,e),kt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(O=e,d=e.child;d!==null;){for(p=O=d;O!==null;){switch(m=O,b=m.child,m.tag){case 0:case 11:case 14:case 15:ga(4,m,m.return);break;case 1:dr(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){oe(r,n,v)}}break;case 5:dr(m,m.return);break;case 22:if(m.memoizedState!==null){Cd(p);continue}}b!==null?(b.return=m,O=b):Cd(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{a=p.stateNode,c?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,s=p.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=im("display",i))}catch(v){oe(e,e.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(v){oe(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ct(t,e),kt(e),r&4&&Sd(e);break;case 21:break;default:ct(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(R0(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Sa(a,""),r.flags&=-33);var o=kd(e);mu(e,o,a);break;case 3:case 4:var i=r.stateNode.containerInfo,l=kd(e);pu(e,l,i);break;default:throw Error(N(161))}}catch(s){oe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Yy(e,t,n){O=e,M0(e)}function M0(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var a=O,o=a.child;if(a.tag===22&&r){var i=a.memoizedState!==null||jo;if(!i){var l=a.alternate,s=l!==null&&l.memoizedState!==null||Ee;l=jo;var c=Ee;if(jo=i,(Ee=s)&&!c)for(O=a;O!==null;)i=O,s=i.child,i.tag===22&&i.memoizedState!==null?Nd(a):s!==null?(s.return=i,O=s):Nd(a);for(;o!==null;)O=o,M0(o),o=o.sibling;O=a,jo=l,Ee=c}jd(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,O=o):jd(e)}}function jd(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||Ki(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ld(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ld(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Pa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Ee||t.flags&512&&du(t)}catch(m){oe(t,t.return,m)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Cd(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Nd(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ki(4,t)}catch(s){oe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(s){oe(t,a,s)}}var o=t.return;try{du(t)}catch(s){oe(t,o,s)}break;case 5:var i=t.return;try{du(t)}catch(s){oe(t,i,s)}}}catch(s){oe(t,t.return,s)}if(t===e){O=null;break}var l=t.sibling;if(l!==null){l.return=t.return,O=l;break}O=t.return}}var Hy=Math.ceil,Ci=Qt.ReactCurrentDispatcher,Oc=Qt.ReactCurrentOwner,ot=Qt.ReactCurrentBatchConfig,F=0,be=null,ce=null,Se=0,Ye=0,pr=Cn(0),me=0,$a=null,Hn=0,Gi=0,Tc=0,ya=null,Re=null,Ac=0,Ar=1/0,Lt=null,Ni=!1,hu=null,hn=null,Co=!1,ln=null,Pi=0,va=0,gu=null,Qo=-1,Xo=0;function Te(){return F&6?le():Qo!==-1?Qo:Qo=le()}function gn(e){return e.mode&1?F&2&&Se!==0?Se&-Se:_y.transition!==null?(Xo===0&&(Xo=bm()),Xo):(e=B,e!==0||(e=window.event,e=e===void 0?16:Nm(e.type)),e):1}function yt(e,t,n,r){if(50<va)throw va=0,gu=null,Error(N(185));Ga(e,n,r),(!(F&2)||e!==be)&&(e===be&&(!(F&2)&&(Gi|=n),me===4&&an(e,Se)),Fe(e,r),n===1&&F===0&&!(t.mode&1)&&(Ar=le()+500,qi&&Nn()))}function Fe(e,t){var n=e.callbackNode;_g(e,t);var r=ci(e,e===be?Se:0);if(r===0)n!==null&&Lf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Lf(n),t===1)e.tag===0?Ey(Pd.bind(null,e)):Ym(Pd.bind(null,e)),jy(function(){!(F&6)&&Nn()}),n=null;else{switch(xm(r)){case 1:n=ac;break;case 4:n=ym;break;case 16:n=ui;break;case 536870912:n=vm;break;default:n=ui}n=Y0(n,$0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $0(e,t){if(Qo=-1,Xo=0,F&6)throw Error(N(327));var n=e.callbackNode;if(Sr()&&e.callbackNode!==n)return null;var r=ci(e,e===be?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ei(e,r);else{t=r;var a=F;F|=2;var o=D0();(be!==e||Se!==t)&&(Lt=null,Ar=le()+500,Fn(e,t));do try{Xy();break}catch(l){F0(e,l)}while(1);yc(),Ci.current=o,F=a,ce!==null?t=0:(be=null,Se=0,t=me)}if(t!==0){if(t===2&&(a=Bs(e),a!==0&&(r=a,t=yu(e,a))),t===1)throw n=$a,Fn(e,0),an(e,r),Fe(e,le()),n;if(t===6)an(e,r);else{if(a=e.current.alternate,!(r&30)&&!qy(a)&&(t=Ei(e,r),t===2&&(o=Bs(e),o!==0&&(r=o,t=yu(e,o))),t===1))throw n=$a,Fn(e,0),an(e,r),Fe(e,le()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:An(e,Re,Lt);break;case 3:if(an(e,r),(r&130023424)===r&&(t=Ac+500-le(),10<t)){if(ci(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Zs(An.bind(null,e,Re,Lt),t);break}An(e,Re,Lt);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var i=31-gt(r);o=1<<i,i=t[i],i>a&&(a=i),r&=~o}if(r=a,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hy(r/1960))-r,10<r){e.timeoutHandle=Zs(An.bind(null,e,Re,Lt),r);break}An(e,Re,Lt);break;case 5:An(e,Re,Lt);break;default:throw Error(N(329))}}}return Fe(e,le()),e.callbackNode===n?$0.bind(null,e):null}function yu(e,t){var n=ya;return e.current.memoizedState.isDehydrated&&(Fn(e,t).flags|=256),e=Ei(e,t),e!==2&&(t=Re,Re=n,t!==null&&vu(t)),e}function vu(e){Re===null?Re=e:Re.push.apply(Re,e)}function qy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!bt(o(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~Tc,t&=~Gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function Pd(e){if(F&6)throw Error(N(327));Sr();var t=ci(e,0);if(!(t&1))return Fe(e,le()),null;var n=Ei(e,t);if(e.tag!==0&&n===2){var r=Bs(e);r!==0&&(t=r,n=yu(e,r))}if(n===1)throw n=$a,Fn(e,0),an(e,t),Fe(e,le()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,An(e,Re,Lt),Fe(e,le()),null}function zc(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Ar=le()+500,qi&&Nn())}}function qn(e){ln!==null&&ln.tag===0&&!(F&6)&&Sr();var t=F;F|=1;var n=ot.transition,r=B;try{if(ot.transition=null,B=1,e)return e()}finally{B=r,ot.transition=n,F=t,!(F&6)&&Nn()}}function Rc(){Ye=pr.current,G(pr)}function Fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Sy(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(mc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hi();break;case 3:Or(),G(Me),G(_e),Sc();break;case 5:kc(r);break;case 4:Or();break;case 13:G(te);break;case 19:G(te);break;case 10:vc(r.type._context);break;case 22:case 23:Rc()}n=n.return}if(be=e,ce=e=yn(e.current,null),Se=Ye=t,me=0,$a=null,Tc=Gi=Hn=0,Re=ya=null,Rn!==null){for(t=0;t<Rn.length;t++)if(n=Rn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=a,r.next=i}n.pending=r}Rn=null}return e}function F0(e,t){do{var n=ce;try{if(yc(),Yo.current=ji,Si){for(var r=ne.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Si=!1}if(Yn=0,ye=pe=ne=null,ha=!1,La=0,Oc.current=null,n===null||n.return===null){me=1,$a=t,ce=null;break}e:{var o=e,i=n.return,l=n,s=t;if(t=Se,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var b=md(i);if(b!==null){b.flags&=-257,hd(b,i,l,o,t),b.mode&1&&pd(o,c,t),t=b,s=c;var y=t.updateQueue;if(y===null){var v=new Set;v.add(s),t.updateQueue=v}else y.add(s);break e}else{if(!(t&1)){pd(o,c,t),Lc();break e}s=Error(N(426))}}else if(ee&&l.mode&1){var S=md(i);if(S!==null){!(S.flags&65536)&&(S.flags|=256),hd(S,i,l,o,t),hc(Tr(s,l));break e}}o=s=Tr(s,l),me!==4&&(me=2),ya===null?ya=[o]:ya.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=w0(o,s,t);id(o,h);break e;case 1:l=s;var f=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(hn===null||!hn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=k0(o,l,t);id(o,x);break e}}o=o.return}while(o!==null)}V0(n)}catch(w){t=w,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(1)}function D0(){var e=Ci.current;return Ci.current=ji,e===null?ji:e}function Lc(){(me===0||me===3||me===2)&&(me=4),be===null||!(Hn&268435455)&&!(Gi&268435455)||an(be,Se)}function Ei(e,t){var n=F;F|=2;var r=D0();(be!==e||Se!==t)&&(Lt=null,Fn(e,t));do try{Qy();break}catch(a){F0(e,a)}while(1);if(yc(),F=n,Ci.current=r,ce!==null)throw Error(N(261));return be=null,Se=0,me}function Qy(){for(;ce!==null;)U0(ce)}function Xy(){for(;ce!==null&&!xg();)U0(ce)}function U0(e){var t=B0(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?V0(e):ce=t,Oc.current=null}function V0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Vy(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,ce=null;return}}else if(n=Uy(n,t,Ye),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);me===0&&(me=5)}function An(e,t,n){var r=B,a=ot.transition;try{ot.transition=null,B=1,Ky(e,t,n,r)}finally{ot.transition=a,B=r}return null}function Ky(e,t,n,r){do Sr();while(ln!==null);if(F&6)throw Error(N(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Og(e,o),e===be&&(ce=be=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Co||(Co=!0,Y0(ui,function(){return Sr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ot.transition,ot.transition=null;var i=B;B=1;var l=F;F|=4,Oc.current=null,By(e,n),I0(n,e),gy(Ks),fi=!!Xs,Ks=Xs=null,e.current=n,Yy(n),wg(),F=l,B=i,ot.transition=o}else e.current=n;if(Co&&(Co=!1,ln=e,Pi=a),o=e.pendingLanes,o===0&&(hn=null),jg(n.stateNode),Fe(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Ni)throw Ni=!1,e=hu,hu=null,e;return Pi&1&&e.tag!==0&&Sr(),o=e.pendingLanes,o&1?e===gu?va++:(va=0,gu=e):va=0,Nn(),null}function Sr(){if(ln!==null){var e=xm(Pi),t=ot.transition,n=B;try{if(ot.transition=null,B=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,Pi=0,F&6)throw Error(N(331));var a=F;for(F|=4,O=e.current;O!==null;){var o=O,i=o.child;if(O.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(O=c;O!==null;){var d=O;switch(d.tag){case 0:case 11:case 15:ga(8,d,o)}var p=d.child;if(p!==null)p.return=d,O=p;else for(;O!==null;){d=O;var m=d.sibling,b=d.return;if(z0(d),d===c){O=null;break}if(m!==null){m.return=b,O=m;break}O=b}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}O=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,O=i;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ga(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,O=h;break e}O=o.return}}var f=e.current;for(O=f;O!==null;){i=O;var g=i.child;if(i.subtreeFlags&2064&&g!==null)g.return=i,O=g;else e:for(i=f;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ki(9,l)}}catch(w){oe(l,l.return,w)}if(l===i){O=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,O=x;break e}O=l.return}}if(F=a,Nn(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Vi,e)}catch{}r=!0}return r}finally{B=n,ot.transition=t}}return!1}function Ed(e,t,n){t=Tr(n,t),t=w0(e,t,1),e=mn(e,t,1),t=Te(),e!==null&&(Ga(e,1,t),Fe(e,t))}function oe(e,t,n){if(e.tag===3)Ed(e,e,n);else for(;t!==null;){if(t.tag===3){Ed(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))){e=Tr(n,e),e=k0(t,e,1),t=mn(t,e,1),e=Te(),t!==null&&(Ga(t,1,e),Fe(t,e));break}}t=t.return}}function Gy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(Se&n)===n&&(me===4||me===3&&(Se&130023424)===Se&&500>le()-Ac?Fn(e,0):Tc|=n),Fe(e,t)}function W0(e,t){t===0&&(e.mode&1?(t=ho,ho<<=1,!(ho&130023424)&&(ho=4194304)):t=1);var n=Te();e=Wt(e,t),e!==null&&(Ga(e,t,n),Fe(e,n))}function Zy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),W0(e,n)}function Jy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),W0(e,n)}var B0;B0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)Le=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Le=!1,Dy(e,t,n);Le=!!(e.flags&131072)}else Le=!1,ee&&t.flags&1048576&&Hm(t,vi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qo(e,t),e=t.pendingProps;var a=Pr(t,_e.current);kr(t,n),a=Cc(null,t,r,e,a,n);var o=Nc();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(o=!0,gi(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,xc(t),a.updater=Qi,t.stateNode=a,a._reactInternals=t,ou(t,r,e,n),t=su(null,t,r,!0,o,n)):(t.tag=0,ee&&o&&pc(t),Oe(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qo(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=tv(r),e=ft(r,e),a){case 0:t=lu(null,t,r,e,n);break e;case 1:t=vd(null,t,r,e,n);break e;case 11:t=gd(null,t,r,e,n);break e;case 14:t=yd(null,t,r,ft(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ft(r,a),lu(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ft(r,a),vd(e,t,r,a,n);case 3:e:{if(N0(t),e===null)throw Error(N(387));r=t.pendingProps,o=t.memoizedState,a=o.element,Km(e,t),wi(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Tr(Error(N(423)),t),t=bd(e,t,r,n,a);break e}else if(r!==a){a=Tr(Error(N(424)),t),t=bd(e,t,r,n,a);break e}else for(He=pn(t.stateNode.containerInfo.firstChild),qe=t,ee=!0,pt=null,n=e0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Er(),r===a){t=Bt(e,t,n);break e}Oe(e,t,r,n)}t=t.child}return t;case 5:return t0(t),e===null&&nu(t),r=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,Gs(r,a)?i=null:o!==null&&Gs(r,o)&&(t.flags|=32),C0(e,t),Oe(e,t,i,n),t.child;case 6:return e===null&&nu(t),null;case 13:return P0(e,t,n);case 4:return wc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_r(t,null,r,n):Oe(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ft(r,a),gd(e,t,r,a,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,q(bi,r._currentValue),r._currentValue=i,o!==null)if(bt(o.value,i)){if(o.children===a.children&&!Me.current){t=Bt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){i=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Dt(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ru(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(N(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),ru(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Oe(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,kr(t,n),a=it(a),r=r(a),t.flags|=1,Oe(e,t,r,n),t.child;case 14:return r=t.type,a=ft(r,t.pendingProps),a=ft(r.type,a),yd(e,t,r,a,n);case 15:return S0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ft(r,a),qo(e,t),t.tag=1,$e(r)?(e=!0,gi(t)):e=!1,kr(t,n),Zm(t,r,a),ou(t,r,a,n),su(null,t,r,!0,e,n);case 19:return E0(e,t,n);case 22:return j0(e,t,n)}throw Error(N(156,t.tag))};function Y0(e,t){return gm(e,t)}function ev(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new ev(e,t,n,r)}function Ic(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tv(e){if(typeof e=="function")return Ic(e)?1:0;if(e!=null){if(e=e.$$typeof,e===tc)return 11;if(e===nc)return 14}return 2}function yn(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ko(e,t,n,r,a,o){var i=2;if(r=e,typeof e=="function")Ic(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case rr:return Dn(n.children,a,o,t);case ec:i=8,a|=8;break;case _s:return e=at(12,n,t,a|2),e.elementType=_s,e.lanes=o,e;case Os:return e=at(13,n,t,a),e.elementType=Os,e.lanes=o,e;case Ts:return e=at(19,n,t,a),e.elementType=Ts,e.lanes=o,e;case Jp:return Zi(n,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gp:i=10;break e;case Zp:i=9;break e;case tc:i=11;break e;case nc:i=14;break e;case tn:i=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=at(i,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Dn(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function Zi(e,t,n,r){return e=at(22,e,r,t),e.elementType=Jp,e.lanes=n,e.stateNode={isHidden:!1},e}function us(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function cs(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nv(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Mc(e,t,n,r,a,o,i,l,s){return e=new nv(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=at(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xc(o),e}function rv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function H0(e){if(!e)return xn;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if($e(n))return Bm(e,n,t)}return t}function q0(e,t,n,r,a,o,i,l,s){return e=Mc(n,r,!0,e,a,o,i,l,s),e.context=H0(null),n=e.current,r=Te(),a=gn(n),o=Dt(r,a),o.callback=t??null,mn(n,o,a),e.current.lanes=a,Ga(e,a,r),Fe(e,r),e}function Ji(e,t,n,r){var a=t.current,o=Te(),i=gn(a);return n=H0(n),t.context===null?t.context=n:t.pendingContext=n,t=Dt(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mn(a,t,i),e!==null&&(yt(e,a,i,o),Bo(e,a,i)),i}function _i(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _d(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $c(e,t){_d(e,t),(e=e.alternate)&&_d(e,t)}function av(){return null}var Q0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fc(e){this._internalRoot=e}el.prototype.render=Fc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Ji(e,t,null,null)};el.prototype.unmount=Fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qn(function(){Ji(null,e,null,null)}),t[Vt]=null}};function el(e){this._internalRoot=e}el.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rn.length&&t!==0&&t<rn[n].priority;n++);rn.splice(n,0,e),n===0&&Cm(e)}};function Dc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Od(){}function ov(e,t,n,r,a){if(a){if(typeof r=="function"){var o=r;r=function(){var c=_i(i);o.call(c)}}var i=q0(t,r,e,0,null,!1,!1,"",Od);return e._reactRootContainer=i,e[Vt]=i.current,Oa(e.nodeType===8?e.parentNode:e),qn(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var c=_i(s);l.call(c)}}var s=Mc(e,0,!1,null,null,!1,!1,"",Od);return e._reactRootContainer=s,e[Vt]=s.current,Oa(e.nodeType===8?e.parentNode:e),qn(function(){Ji(t,s,n,r)}),s}function nl(e,t,n,r,a){var o=n._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var l=a;a=function(){var s=_i(i);l.call(s)}}Ji(t,i,e,a)}else i=ov(n,t,e,a,r);return _i(i)}wm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ia(t.pendingLanes);n!==0&&(oc(t,n|1),Fe(t,le()),!(F&6)&&(Ar=le()+500,Nn()))}break;case 13:qn(function(){var r=Wt(e,1);if(r!==null){var a=Te();yt(r,e,1,a)}}),$c(e,1)}};ic=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var n=Te();yt(t,e,134217728,n)}$c(e,134217728)}};km=function(e){if(e.tag===13){var t=gn(e),n=Wt(e,t);if(n!==null){var r=Te();yt(n,e,t,r)}$c(e,t)}};Sm=function(){return B};jm=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};Us=function(e,t,n){switch(t){case"input":if(Rs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Hi(r);if(!a)throw Error(N(90));tm(r),Rs(r,a)}}}break;case"textarea":rm(e,n);break;case"select":t=n.value,t!=null&&vr(e,!!n.multiple,t,!1)}};cm=zc;fm=qn;var iv={usingClientEntryPoint:!1,Events:[Ja,lr,Hi,sm,um,zc]},na={findFiberByHostInstance:zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},lv={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mm(e),e===null?null:e.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||av,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{Vi=No.inject(lv),_t=No}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iv;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dc(t))throw Error(N(200));return rv(e,t,null,n)};Ke.createRoot=function(e,t){if(!Dc(e))throw Error(N(299));var n=!1,r="",a=Q0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Mc(e,1,!1,null,null,n,!1,r,a),e[Vt]=t.current,Oa(e.nodeType===8?e.parentNode:e),new Fc(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=mm(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return qn(e)};Ke.hydrate=function(e,t,n){if(!tl(t))throw Error(N(200));return nl(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!Dc(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,a=!1,o="",i=Q0;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=q0(t,null,e,1,n??null,a,!1,o,i),e[Vt]=t.current,Oa(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new el(t)};Ke.render=function(e,t,n){if(!tl(t))throw Error(N(200));return nl(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!tl(e))throw Error(N(40));return e._reactRootContainer?(qn(function(){nl(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1};Ke.unstable_batchedUpdates=zc;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!tl(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return nl(e,t,n,!1,r)};Ke.version="18.2.0-next-9e3b772b8-20220608";function X0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X0)}catch(e){console.error(e)}}X0(),Hp.exports=Ke;var sv=Hp.exports,Td=sv;Ps.createRoot=Td.createRoot,Ps.hydrateRoot=Td.hydrateRoot;/**
* @remix-run/router v1.10.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function Fa(){return Fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fa.apply(this,arguments)}var sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sn||(sn={}));const Ad="popstate";function uv(e){e===void 0&&(e={});function t(r,a){let{pathname:o,search:i,hash:l}=r.location;return bu("",{pathname:o,search:i,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:Oi(a)}return fv(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Uc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function cv(){return Math.random().toString(36).substr(2,8)}function zd(e,t){return{usr:e.state,key:e.key,idx:t}}function bu(e,t,n,r){return n===void 0&&(n=null),Fa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Wr(t):t,{state:n,key:t&&t.key||r||cv()})}function Oi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Wr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function fv(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:o=!1}=r,i=a.history,l=sn.Pop,s=null,c=d();c==null&&(c=0,i.replaceState(Fa({},i.state,{idx:c}),""));function d(){return(i.state||{idx:null}).idx}function p(){l=sn.Pop;let S=d(),h=S==null?null:S-c;c=S,s&&s({action:l,location:v.location,delta:h})}function m(S,h){l=sn.Push;let f=bu(v.location,S,h);n&&n(f,S),c=d()+1;let g=zd(f,c),x=v.createHref(f);try{i.pushState(g,"",x)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;a.location.assign(x)}o&&s&&s({action:l,location:v.location,delta:1})}function b(S,h){l=sn.Replace;let f=bu(v.location,S,h);n&&n(f,S),c=d();let g=zd(f,c),x=v.createHref(f);i.replaceState(g,"",x),o&&s&&s({action:l,location:v.location,delta:0})}function y(S){let h=a.location.origin!=="null"?a.location.origin:a.location.href,f=typeof S=="string"?S:Oi(S);return fe(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let v={get action(){return l},get location(){return e(a,i)},listen(S){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(Ad,p),s=S,()=>{a.removeEventListener(Ad,p),s=null}},createHref(S){return t(a,S)},createURL:y,encodeLocation(S){let h=y(S);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:b,go(S){return i.go(S)}};return v}var Rd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Rd||(Rd={}));function dv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Wr(t):t,a=Vc(r.pathname||"/",n);if(a==null)return null;let o=K0(e);pv(o);let i=null;for(let l=0;i==null&&l<o.length;++l)i=kv(o[l],Cv(a));return i}function K0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(o,i,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};s.relativePath.startsWith("/")&&(fe(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=vn([r,s.relativePath]),d=n.concat(s);o.children&&o.children.length>0&&(fe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),K0(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:xv(c,o.index),routesMeta:d})};return e.forEach((o,i)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))a(o,i);else for(let s of G0(o.path))a(o,i,s)}),t}function G0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let i=G0(r.join("/")),l=[];return l.push(...i.map(s=>s===""?o:[o,s].join("/"))),a&&l.push(...i),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function pv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:wv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mv=/^:\w+$/,hv=3,gv=2,yv=1,vv=10,bv=-2,Ld=e=>e==="*";function xv(e,t){let n=e.split("/"),r=n.length;return n.some(Ld)&&(r+=bv),t&&(r+=gv),n.filter(a=>!Ld(a)).reduce((a,o)=>a+(mv.test(o)?hv:o===""?yv:vv),r)}function wv(e,t){return e.length===t.length&&e.slice(0,-1).every((n,r)=>n===t[r])?e[e.length-1]-t[t.length-1]:0}function kv(e,t){let{routesMeta:n}=e,r={},a="/",o=[];for(let i=0;i<n.length;++i){let l=n[i],s=i===n.length-1,c=a==="/"?t:t.slice(a.length)||"/",d=Sv({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!d)return null;Object.assign(r,d.params);let p=l.route;o.push({params:r,pathname:vn([a,d.pathname]),pathnameBase:_v(vn([a,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(a=vn([a,d.pathnameBase]))}return o}function Sv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=jv(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((s,c,d)=>{if(c==="*"){let p=l[d]||"";i=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}return s[c]=Nv(l[d]||"",c),s},{}),pathname:o,pathnameBase:i,pattern:e}}function jv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Uc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,i)=>(r.push(i),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Cv(e){try{return decodeURI(e)}catch(t){return Uc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Nv(e,t){try{return decodeURIComponent(e)}catch(n){return Uc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Vc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Pv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?Wr(e):e;return{pathname:n?n.startsWith("/")?n:Ev(n,t):t,search:Ov(r),hash:Tv(a)}}function Ev(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function fs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Z0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function J0(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=Wr(e):(a=Fa({},e),fe(!a.pathname||!a.pathname.includes("?"),fs("?","pathname","search",a)),fe(!a.pathname||!a.pathname.includes("#"),fs("#","pathname","hash",a)),fe(!a.search||!a.search.includes("#"),fs("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,l;if(r||i==null)l=n;else{let p=t.length-1;if(i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),p-=1;a.pathname=m.join("/")}l=p>=0?t[p]:"/"}let s=Pv(a,l),c=i&&i!=="/"&&i.endsWith("/"),d=(o||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const vn=e=>e.join("/").replace(/\/\/+/g,"/"),_v=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ov=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Tv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Av(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const eh=["post","put","patch","delete"];new Set(eh);const zv=["get",...eh];new Set(zv);/**
* React Router v6.17.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function Ti(){return Ti=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ti.apply(this,arguments)}const Wc=j.createContext(null),Rv=j.createContext(null),Br=j.createContext(null),rl=j.createContext(null),Pn=j.createContext({outlet:null,matches:[],isDataRoute:!1}),th=j.createContext(null);function Lv(e,t){let{relative:n}=t===void 0?{}:t;to()||fe(!1);let{basename:r,navigator:a}=j.useContext(Br),{hash:o,pathname:i,search:l}=rh(e,{relative:n}),s=i;return r!=="/"&&(s=i==="/"?r:vn([r,i])),a.createHref({pathname:s,search:l,hash:o})}function to(){return j.useContext(rl)!=null}function al(){return to()||fe(!1),j.useContext(rl).location}function nh(e){j.useContext(Br).static||j.useLayoutEffect(e)}function Iv(){let{isDataRoute:e}=j.useContext(Pn);return e?Xv():Mv()}function Mv(){to()||fe(!1);let e=j.useContext(Wc),{basename:t,navigator:n}=j.useContext(Br),{matches:r}=j.useContext(Pn),{pathname:a}=al(),o=JSON.stringify(Z0(r).map(l=>l.pathnameBase)),i=j.useRef(!1);return nh(()=>{i.current=!0}),j.useCallback(function(l,s){if(s===void 0&&(s={}),!i.current)return;if(typeof l=="number"){n.go(l);return}let c=J0(l,JSON.parse(o),a,s.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:vn([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,o,a,e])}function Bc(){let{matches:e}=j.useContext(Pn),t=e[e.length-1];return t?t.params:{}}function rh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=j.useContext(Pn),{pathname:a}=al(),o=JSON.stringify(Z0(r).map(i=>i.pathnameBase));return j.useMemo(()=>J0(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function $v(e,t){return Fv(e,t)}function Fv(e,t,n){to()||fe(!1);let{navigator:r}=j.useContext(Br),{matches:a}=j.useContext(Pn),o=a[a.length-1],i=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=al(),c;if(t){var d;let v=typeof t=="string"?Wr(t):t;l==="/"||(d=v.pathname)!=null&&d.startsWith(l)||fe(!1),c=v}else c=s;let p=c.pathname||"/",m=l==="/"?p:p.slice(l.length)||"/",b=dv(e,{pathname:m}),y=Bv(b&&b.map(v=>Object.assign({},v,{params:Object.assign({},i,v.params),pathname:vn([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:vn([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),a,n);return t&&y?j.createElement(rl.Provider,{value:{location:Ti({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:sn.Pop}},y):y}function Dv(){let e=Qv(),t=Av(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:r},n):null,a)}const Uv=j.createElement(Dv,null);class Vv extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?j.createElement(Pn.Provider,{value:this.props.routeContext},j.createElement(th.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Wv(e){let{routeContext:t,match:n,children:r}=e,a=j.useContext(Wc);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Pn.Provider,{value:t},r)}function Bv(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let o=e,i=(r=n)==null?void 0:r.errors;if(i!=null){let l=o.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));l>=0||fe(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,c)=>{let d=s.route.id?i==null?void 0:i[s.route.id]:null,p=null;n&&(p=s.route.errorElement||Uv);let m=t.concat(o.slice(0,c+1)),b=()=>{let y;return d?y=p:s.route.Component?y=j.createElement(s.route.Component,null):s.route.element?y=s.route.element:y=l,j.createElement(Wv,{match:s,routeContext:{outlet:l,matches:m,isDataRoute:n!=null},children:y})};return n&&(s.route.ErrorBoundary||s.route.errorElement||c===0)?j.createElement(Vv,{location:n.location,revalidation:n.revalidation,component:p,error:d,children:b(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):b()},null)}var ah=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ah||{}),Ai=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ai||{});function Yv(e){let t=j.useContext(Wc);return t||fe(!1),t}function Hv(e){let t=j.useContext(Rv);return t||fe(!1),t}function qv(e){let t=j.useContext(Pn);return t||fe(!1),t}function oh(e){let t=qv(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function Qv(){var e;let t=j.useContext(th),n=Hv(Ai.UseRouteError),r=oh(Ai.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Xv(){let{router:e}=Yv(ah.UseNavigateStable),t=oh(Ai.UseNavigateStable),n=j.useRef(!1);return nh(()=>{n.current=!0}),j.useCallback(function(r,a){a===void 0&&(a={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Ti({fromRouteId:t},a)))},[e,t])}function Be(e){fe(!1)}function Kv(e){let{basename:t="/",children:n=null,location:r,navigationType:a=sn.Pop,navigator:o,static:i=!1}=e;to()&&fe(!1);let l=t.replace(/^\/*/,"/"),s=j.useMemo(()=>({basename:l,navigator:o,static:i}),[l,o,i]);typeof r=="string"&&(r=Wr(r));let{pathname:c="/",search:d="",hash:p="",state:m=null,key:b="default"}=r,y=j.useMemo(()=>{let v=Vc(c,l);return v==null?null:{location:{pathname:v,search:d,hash:p,state:m,key:b},navigationType:a}},[l,c,d,p,m,b,a]);return y==null?null:j.createElement(Br.Provider,{value:s},j.createElement(rl.Provider,{children:n,value:y}))}function Gv(e){let{children:t,location:n}=e;return $v(xu(t),n)}new Promise(()=>{});function xu(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,a)=>{if(!j.isValidElement(r))return;let o=[...t,a];if(r.type===j.Fragment){n.push.apply(n,xu(r.props.children,o));return}r.type!==Be&&fe(!1),!r.props.index||!r.props.children||fe(!1);let i={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=xu(r.props.children,o)),n.push(i)}),n}/**
* React Router DOM v6.17.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function wu(){return wu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wu.apply(this,arguments)}function Zv(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Jv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function eb(e,t){return e.button===0&&(!t||t==="_self")&&!Jv(e)}const tb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],nb="startTransition",Id=Ns[nb];function rb(e){let{basename:t,children:n,future:r,window:a}=e,o=j.useRef();o.current==null&&(o.current=uv({window:a,v5Compat:!0}));let i=o.current,[l,s]=j.useState({action:i.action,location:i.location}),{v7_startTransition:c}=r||{},d=j.useCallback(p=>{c&&Id?Id(()=>s(p)):s(p)},[s,c]);return j.useLayoutEffect(()=>i.listen(d),[i,d]),j.createElement(Kv,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i})}const ab=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ob=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ih=j.forwardRef(function(e,t){let{onClick:n,relative:r,reloadDocument:a,replace:o,state:i,target:l,to:s,preventScrollReset:c,unstable_viewTransition:d}=e,p=Zv(e,tb),{basename:m}=j.useContext(Br),b,y=!1;if(typeof s=="string"&&ob.test(s)&&(b=s,ab))try{let f=new URL(window.location.href),g=s.startsWith("//")?new URL(f.protocol+s):new URL(s),x=Vc(g.pathname,m);g.origin===f.origin&&x!=null?s=x+g.search+g.hash:y=!0}catch{}let v=Lv(s,{relative:r}),S=ib(s,{replace:o,state:i,target:l,preventScrollReset:c,relative:r,unstable_viewTransition:d});function h(f){n&&n(f),f.defaultPrevented||S(f)}return j.createElement("a",wu({},p,{href:b||v,onClick:y||a?n:h,ref:t,target:l}))});var Md;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Md||(Md={}));var $d;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($d||($d={}));function ib(e,t){let{target:n,replace:r,state:a,preventScrollReset:o,relative:i,unstable_viewTransition:l}=t===void 0?{}:t,s=Iv(),c=al(),d=rh(e,{relative:i});return j.useCallback(p=>{if(eb(p,n)){p.preventDefault();let m=r!==void 0?r:Oi(c)===Oi(d);s(e,{replace:m,state:a,preventScrollReset:o,relative:i,unstable_viewTransition:l})}},[c,s,d,r,a,n,e,o,i,l])}const lb="/LintaRahman.github.io-As-SafwahAcademy/assets/HeaderVideo-c4261902.mp4";function sb(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function ub(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var cb=function(){function e(n){var r=this;this._insertTag=function(a){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,o),r.tags.push(a)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ub(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var a=sb(r);try{a.insertRule(n,a.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),Pe="-ms-",zi="-moz-",U="-webkit-",lh="comm",Yc="rule",Hc="decl",fb="@import",sh="@keyframes",db="@layer",pb=Math.abs,ol=String.fromCharCode,mb=Object.assign;function hb(e,t){return ke(e,0)^45?(((t<<2^ke(e,0))<<2^ke(e,1))<<2^ke(e,2))<<2^ke(e,3):0}function uh(e){return e.trim()}function gb(e,t){return(e=t.exec(e))?e[0]:e}function V(e,t,n){return e.replace(t,n)}function ku(e,t){return e.indexOf(t)}function ke(e,t){return e.charCodeAt(t)|0}function Da(e,t,n){return e.slice(t,n)}function jt(e){return e.length}function qc(e){return e.length}function Po(e,t){return t.push(e),e}function yb(e,t){return e.map(t).join("")}var il=1,zr=1,ch=0,De=0,se=0,Yr="";function ll(e,t,n,r,a,o,i){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:il,column:zr,length:i,return:""}}function ra(e,t){return mb(ll("",null,null,"",null,null,0),e,{length:-e.length},t)}function vb(){return se}function bb(){return se=De>0?ke(Yr,--De):0,zr--,se===10&&(zr=1,il--),se}function Qe(){return se=De<ch?ke(Yr,De++):0,zr++,se===10&&(zr=1,il++),se}function Tt(){return ke(Yr,De)}function Go(){return De}function no(e,t){return Da(Yr,e,t)}function Ua(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fh(e){return il=zr=1,ch=jt(Yr=e),De=0,[]}function dh(e){return Yr="",e}function Zo(e){return uh(no(De-1,Su(e===91?e+2:e===40?e+1:e)))}function xb(e){for(;(se=Tt())&&se<33;)Qe();return Ua(e)>2||Ua(se)>3?"":" "}function wb(e,t){for(;--t&&Qe()&&!(se<48||se>102||se>57&&se<65||se>70&&se<97););return no(e,Go()+(t<6&&Tt()==32&&Qe()==32))}function Su(e){for(;Qe();)switch(se){case e:return De;case 34:case 39:e!==34&&e!==39&&Su(se);break;case 40:e===41&&Su(e);break;case 92:Qe();break}return De}function kb(e,t){for(;Qe()&&e+se!==47+10&&!(e+se===42+42&&Tt()===47););return"/*"+no(t,De-1)+"*"+ol(e===47?e:Qe())}function Sb(e){for(;!Ua(Tt());)Qe();return no(e,De)}function jb(e){return dh(Jo("",null,null,null,[""],e=fh(e),0,[0],e))}function Jo(e,t,n,r,a,o,i,l,s){for(var c=0,d=0,p=i,m=0,b=0,y=0,v=1,S=1,h=1,f=0,g="",x=a,w=o,C=r,k=g;S;)switch(y=f,f=Qe()){case 40:if(y!=108&&ke(k,p-1)==58){ku(k+=V(Zo(f),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:k+=Zo(f);break;case 9:case 10:case 13:case 32:k+=xb(y);break;case 92:k+=wb(Go()-1,7);continue;case 47:switch(Tt()){case 42:case 47:Po(Cb(kb(Qe(),Go()),t,n),s);break;default:k+="/"}break;case 123*v:l[c++]=jt(k)*h;case 125*v:case 59:case 0:switch(f){case 0:case 125:S=0;case 59+d:h==-1&&(k=V(k,/\f/g,"")),b>0&&jt(k)-p&&Po(b>32?Dd(k+";",r,n,p-1):Dd(V(k," ","")+";",r,n,p-2),s);break;case 59:k+=";";default:if(Po(C=Fd(k,t,n,c,d,a,l,g,x=[],w=[],p),o),f===123)if(d===0)Jo(k,t,C,C,x,o,p,l,w);else switch(m===99&&ke(k,3)===110?100:m){case 100:case 108:case 109:case 115:Jo(e,C,C,r&&Po(Fd(e,C,C,0,0,a,l,g,a,x=[],p),w),a,w,p,l,r?x:w);break;default:Jo(k,C,C,C,[""],w,0,l,w)}}c=d=b=0,v=h=1,g=k="",p=i;break;case 58:p=1+jt(k),b=y;default:if(v<1){if(f==123)--v;else if(f==125&&v++==0&&bb()==125)continue}switch(k+=ol(f),f*v){case 38:h=d>0?1:(k+="\f",-1);break;case 44:l[c++]=(jt(k)-1)*h,h=1;break;case 64:Tt()===45&&(k+=Zo(Qe())),m=Tt(),d=p=jt(g=k+=Sb(Go())),f++;break;case 45:y===45&&jt(k)==2&&(v=0)}}return o}function Fd(e,t,n,r,a,o,i,l,s,c,d){for(var p=a-1,m=a===0?o:[""],b=qc(m),y=0,v=0,S=0;y<r;++y)for(var h=0,f=Da(e,p+1,p=pb(v=i[y])),g=e;h<b;++h)(g=uh(v>0?m[h]+" "+f:V(f,/&\f/g,m[h])))&&(s[S++]=g);return ll(e,t,n,a===0?Yc:l,s,c,d)}function Cb(e,t,n){return ll(e,t,n,lh,ol(vb()),Da(e,2,-2),0)}function Dd(e,t,n,r){return ll(e,t,n,Hc,Da(e,0,r),Da(e,r+1,-1),r)}function jr(e,t){for(var n="",r=qc(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function Nb(e,t,n,r){switch(e.type){case db:if(e.children.length)break;case fb:case Hc:return e.return=e.return||e.value;case lh:return"";case sh:return e.return=e.value+"{"+jr(e.children,r)+"}";case Yc:e.value=e.props.join(",")}return jt(n=jr(e.children,r))?e.return=e.value+"{"+n+"}":""}function Pb(e){var t=qc(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}function Eb(e){return function(t){t.root||(t=t.return)&&e(t)}}function _b(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ob=function(e,t,n){for(var r=0,a=0;r=a,a=Tt(),r===38&&a===12&&(t[n]=1),!Ua(a);)Qe();return no(e,De)},Tb=function(e,t){var n=-1,r=44;do switch(Ua(r)){case 0:r===38&&Tt()===12&&(t[n]=1),e[n]+=Ob(De-1,t,n);break;case 2:e[n]+=Zo(r);break;case 4:if(r===44){e[++n]=Tt()===58?"&\f":"",t[n]=e[n].length;break}default:e[n]+=ol(r)}while(r=Qe());return e},Ab=function(e,t){return dh(Tb(fh(e),t))},Ud=new WeakMap,zb=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!Ud.get(n))&&!r){Ud.set(e,!0);for(var a=[],o=Ab(t,a),i=n.props,l=0,s=0;l<o.length;l++)for(var c=0;c<i.length;c++,s++)e.props[s]=a[l]?o[l].replace(/&\f/g,i[c]):i[c]+" "+o[l]}}},Rb=function(e){if(e.type==="decl"){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return="",e.value="")}};function ph(e,t){switch(hb(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+zi+e+Pe+e+e;case 6828:case 4268:return U+e+Pe+e+e;case 6165:return U+e+Pe+"flex-"+e+e;case 5187:return U+e+V(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+Pe+"flex-$1$2")+e;case 5443:return U+e+Pe+"flex-item-"+V(e,/flex-|-self/,"")+e;case 4675:return U+e+Pe+"flex-line-pack"+V(e,/align-content|flex-|-self/,"")+e;case 5548:return U+e+Pe+V(e,"shrink","negative")+e;case 5292:return U+e+Pe+V(e,"basis","preferred-size")+e;case 6060:return U+"box-"+V(e,"-grow","")+U+e+Pe+V(e,"grow","positive")+e;case 4554:return U+V(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return V(V(V(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return V(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return V(V(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+Pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4095:case 3583:case 4068:case 2532:return V(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jt(e)-1-t>6)switch(ke(e,t+1)){case 109:if(ke(e,t+4)!==45)break;case 102:return V(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+zi+(ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ku(e,"stretch")?ph(V(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ke(e,t+1)!==115)break;case 6444:switch(ke(e,jt(e)-3-(~ku(e,"!important")&&10))){case 107:return V(e,":",":"+U)+e;case 101:return V(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+U+(ke(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+Pe+"$2box$3")+e}break;case 5936:switch(ke(e,t+11)){case 114:return U+e+Pe+V(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+Pe+V(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+Pe+V(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return U+e+Pe+e+e}return e}var Lb=function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Hc:e.return=ph(e.value,e.length);break;case sh:return jr([ra(e,{value:V(e.value,"@","@"+U)})],r);case Yc:if(e.length)return yb(e.props,function(a){switch(gb(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return jr([ra(e,{props:[V(a,/:(read-\w+)/,":"+zi+"$1")]})],r);case"::placeholder":return jr([ra(e,{props:[V(a,/:(plac\w+)/,":"+U+"input-$1")]}),ra(e,{props:[V(a,/:(plac\w+)/,":"+zi+"$1")]}),ra(e,{props:[V(a,/:(plac\w+)/,Pe+"input-$1")]})],r)}return""})}},Ib=[Lb],Mb=function(e){var t=e.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(y){var v=y.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var r=e.stylisPlugins||Ib,a={},o,i=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(y){for(var v=y.getAttribute("data-emotion").split(" "),S=1;S<v.length;S++)a[v[S]]=!0;i.push(y)});var l,s=[zb,Rb];{var c,d=[Nb,Eb(function(y){c.insert(y)})],p=Pb(s.concat(r,d)),m=function(y){return jr(jb(y),p)};l=function(y,v,S,h){c=S,m(y?y+"{"+v.styles+"}":v.styles),h&&(b.inserted[v.name]=!0)}}var b={key:t,sheet:new cb({key:t,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:a,registered:{},insert:l};return b.sheet.hydrate(i),b},mh={exports:{}},Y={};/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var xe=typeof Symbol=="function"&&Symbol.for,Qc=xe?Symbol.for("react.element"):60103,Xc=xe?Symbol.for("react.portal"):60106,sl=xe?Symbol.for("react.fragment"):60107,ul=xe?Symbol.for("react.strict_mode"):60108,cl=xe?Symbol.for("react.profiler"):60114,fl=xe?Symbol.for("react.provider"):60109,dl=xe?Symbol.for("react.context"):60110,Kc=xe?Symbol.for("react.async_mode"):60111,pl=xe?Symbol.for("react.concurrent_mode"):60111,ml=xe?Symbol.for("react.forward_ref"):60112,hl=xe?Symbol.for("react.suspense"):60113,$b=xe?Symbol.for("react.suspense_list"):60120,gl=xe?Symbol.for("react.memo"):60115,yl=xe?Symbol.for("react.lazy"):60116,Fb=xe?Symbol.for("react.block"):60121,Db=xe?Symbol.for("react.fundamental"):60117,Ub=xe?Symbol.for("react.responder"):60118,Vb=xe?Symbol.for("react.scope"):60119;function Ze(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Qc:switch(e=e.type,e){case Kc:case pl:case sl:case cl:case ul:case hl:return e;default:switch(e=e&&e.$$typeof,e){case dl:case ml:case yl:case gl:case fl:return e;default:return t}}case Xc:return t}}}function hh(e){return Ze(e)===pl}Y.AsyncMode=Kc;Y.ConcurrentMode=pl;Y.ContextConsumer=dl;Y.ContextProvider=fl;Y.Element=Qc;Y.ForwardRef=ml;Y.Fragment=sl;Y.Lazy=yl;Y.Memo=gl;Y.Portal=Xc;Y.Profiler=cl;Y.StrictMode=ul;Y.Suspense=hl;Y.isAsyncMode=function(e){return hh(e)||Ze(e)===Kc};Y.isConcurrentMode=hh;Y.isContextConsumer=function(e){return Ze(e)===dl};Y.isContextProvider=function(e){return Ze(e)===fl};Y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qc};Y.isForwardRef=function(e){return Ze(e)===ml};Y.isFragment=function(e){return Ze(e)===sl};Y.isLazy=function(e){return Ze(e)===yl};Y.isMemo=function(e){return Ze(e)===gl};Y.isPortal=function(e){return Ze(e)===Xc};Y.isProfiler=function(e){return Ze(e)===cl};Y.isStrictMode=function(e){return Ze(e)===ul};Y.isSuspense=function(e){return Ze(e)===hl};Y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===sl||e===pl||e===cl||e===ul||e===hl||e===$b||typeof e=="object"&&e!==null&&(e.$$typeof===yl||e.$$typeof===gl||e.$$typeof===fl||e.$$typeof===dl||e.$$typeof===ml||e.$$typeof===Db||e.$$typeof===Ub||e.$$typeof===Vb||e.$$typeof===Fb)};Y.typeOf=Ze;mh.exports=Y;var Wb=mh.exports,gh=Wb,Bb={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yh={};yh[gh.ForwardRef]=Bb;yh[gh.Memo]=Yb;var Hb=!0;function vh(e,t,n){var r="";return n.split(" ").forEach(function(a){e[a]!==void 0?t.push(e[a]+";"):r+=a+" "}),r}var Gc=function(e,t,n){var r=e.key+"-"+t.name;(n===!1||Hb===!1)&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},bh=function(e,t,n){Gc(e,t,n);var r=e.key+"-"+t.name;if(e.inserted[t.name]===void 0){var a=t;do e.insert(t===a?"."+r:"",a,e.sheet,!0),a=a.next;while(a!==void 0)}};function qb(e){for(var t=0,n,r=0,a=e.length;a>=4;++r,a-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(a){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var xh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qb=/[A-Z]|^ms/g,Xb=/_EMO_([^_]+?)_([^]*?)_EMO_/g,wh=function(e){return e.charCodeAt(1)===45},Vd=function(e){return e!=null&&typeof e!="boolean"},ds=_b(function(e){return wh(e)?e:e.replace(Qb,"-$&").toLowerCase()}),Wd=function(e,t){switch(e){case"animation":case"animationName":if(typeof t=="string")return t.replace(Xb,function(n,r,a){return Ct={name:r,styles:a,next:Ct},r})}return xh[e]!==1&&!wh(e)&&typeof t=="number"&&t!==0?t+"px":t};function Va(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Ct={name:n.name,styles:n.styles,next:Ct},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Ct={name:r.name,styles:r.styles,next:Ct},r=r.next;var a=n.styles+";";return a}return Kb(e,t,n)}case"function":{if(e!==void 0){var o=Ct,i=n(e);return Ct=o,Va(e,t,i)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function Kb(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=Va(e,t,n[a])+";";else for(var o in n){var i=n[o];if(typeof i!="object")t!=null&&t[i]!==void 0?r+=o+"{"+t[i]+"}":Vd(i)&&(r+=ds(o)+":"+Wd(o,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var l=0;l<i.length;l++)Vd(i[l])&&(r+=ds(o)+":"+Wd(o,i[l])+";");else{var s=Va(e,t,i);switch(o){case"animation":case"animationName":{r+=ds(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var Bd=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Ct,Zc=function(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,a="";Ct=void 0;var o=e[0];o==null||o.raw===void 0?(r=!1,a+=Va(n,t,o)):a+=o[0];for(var i=1;i<e.length;i++)a+=Va(n,t,e[i]),r&&(a+=o[i]);Bd.lastIndex=0;for(var l="",s;(s=Bd.exec(a))!==null;)l+="-"+s[1];var c=qb(a)+l;return{name:c,styles:a,next:Ct}},Gb=function(e){return e()},Zb=Ns.useInsertionEffect?Ns.useInsertionEffect:!1,kh=Zb||Gb,Jc={}.hasOwnProperty,Sh=j.createContext(typeof HTMLElement<"u"?Mb({key:"css"}):null);Sh.Provider;var jh=function(e){return j.forwardRef(function(t,n){var r=j.useContext(Sh);return e(t,r,n)})},Ch=j.createContext({}),ju="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Jb=function(e,t){var n={};for(var r in t)Jc.call(t,r)&&(n[r]=t[r]);return n[ju]=e,n},e2=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Gc(t,n,r),kh(function(){return bh(t,n,r)}),null},t2=jh(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var a=e[ju],o=[r],i="";typeof e.className=="string"?i=vh(t.registered,o,e.className):e.className!=null&&(i=e.className+" ");var l=Zc(o,void 0,j.useContext(Ch));i+=t.key+"-"+l.name;var s={};for(var c in e)Jc.call(e,c)&&c!=="css"&&c!==ju&&(s[c]=e[c]);return s.ref=n,s.className=i,j.createElement(j.Fragment,null,j.createElement(e2,{cache:t,serialized:l,isStringTag:typeof a=="string"}),j.createElement(a,s))}),n2=t2,r2=u.Fragment;function ge(e,t,n){return Jc.call(t,"css")?u.jsx(n2,Jb(e,t),n):u.jsx(e,t,n)}function Nh(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Zc(t)}var P=function(){var e=Nh.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},a2=function e(t){for(var n=t.length,r=0,a="";r<n;r++){var o=t[r];if(o!=null){var i=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))i=e(o);else{i="";for(var l in o)o[l]&&l&&(i&&(i+=" "),i+=l)}break}default:i=o}i&&(a&&(a+=" "),a+=i)}}return a};function o2(e,t,n){var r=[],a=vh(e,r,n);return r.length<2?n:a+t(r)}var i2=function(e){var t=e.cache,n=e.serializedArr;return kh(function(){for(var r=0;r<n.length;r++)bh(t,n[r],!1)}),null},ps=jh(function(e,t){var n=[],r=function(){for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];var d=Zc(s,t.registered);return n.push(d),Gc(t,d,!1),t.key+"-"+d.name},a=function(){for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return o2(t.registered,r,a2(s))},o={css:r,cx:a,theme:j.useContext(Ch)},i=e.children(o);return j.createElement(j.Fragment,null,j.createElement(i2,{cache:t,serializedArr:n}),i)}),l2=Object.defineProperty,s2=(e,t,n)=>t in e?l2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Eo=(e,t,n)=>(s2(e,typeof t!="symbol"?t+"":t,n),n),Cu=new Map,ms=new WeakMap,Yd=0,u2=void 0;function c2(e){return e?(ms.has(e)||(Yd+=1,ms.set(e,Yd.toString())),ms.get(e)):"0"}function f2(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?c2(e.root):e[t]}`).toString()}function d2(e){let t=f2(e),n=Cu.get(t);if(!n){const r=new Map;let a;const o=new IntersectionObserver(i=>{i.forEach(l=>{var s;const c=l.isIntersecting&&a.some(d=>l.intersectionRatio>=d);e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=c),(s=r.get(l.target))==null||s.forEach(d=>{d(c,l)})})},e);a=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Cu.set(t,n)}return n}function Ph(e,t,n={},r=u2){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:a,observer:o,elements:i}=d2(n);let l=i.get(e)||[];return i.has(e)||i.set(e,l),l.push(t),o.observe(e),function(){l.splice(l.indexOf(t),1),l.length===0&&(i.delete(e),o.unobserve(e)),i.size===0&&(o.disconnect(),Cu.delete(a))}}function p2(e){return typeof e.children!="function"}var Hd=class extends j.Component{constructor(e){super(e),Eo(this,"node",null),Eo(this,"_unobserveCb",null),Eo(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Eo(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),p2(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a,fallbackInView:o}=this.props;this._unobserveCb=Ph(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:b,entry:y}=this.state;return e({inView:b,entry:y,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:a,rootMargin:o,onChange:i,skip:l,trackVisibility:s,delay:c,initialInView:d,fallbackInView:p,...m}=this.props;return j.createElement(t||"div",{ref:this.handleNode,...m},e)}};function Eh({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:a,triggerOnce:o,skip:i,initialInView:l,fallbackInView:s,onChange:c}={}){var d;const[p,m]=j.useState(null),b=j.useRef(),[y,v]=j.useState({inView:!!l,entry:void 0});b.current=c,j.useEffect(()=>{if(i||!p)return;let g;return g=Ph(p,(x,w)=>{v({inView:x,entry:w}),b.current&&b.current(x,w),w.isIntersecting&&o&&g&&(g(),g=void 0)},{root:a,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{g&&g()}},[Array.isArray(e)?e.toString():e,p,a,r,o,i,n,s,t]);const S=(d=y.entry)==null?void 0:d.target,h=j.useRef();!p&&S&&!o&&!i&&h.current!==S&&(h.current=S,v({inView:!!l,entry:void 0}));const f=[m,y.inView,y.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}var _h={exports:{}},H={};/**
* @license React
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var ef=Symbol.for("react.element"),tf=Symbol.for("react.portal"),vl=Symbol.for("react.fragment"),bl=Symbol.for("react.strict_mode"),xl=Symbol.for("react.profiler"),wl=Symbol.for("react.provider"),kl=Symbol.for("react.context"),m2=Symbol.for("react.server_context"),Sl=Symbol.for("react.forward_ref"),jl=Symbol.for("react.suspense"),Cl=Symbol.for("react.suspense_list"),Nl=Symbol.for("react.memo"),Pl=Symbol.for("react.lazy"),h2=Symbol.for("react.offscreen"),Oh;Oh=Symbol.for("react.module.reference");function ut(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ef:switch(e=e.type,e){case vl:case xl:case bl:case jl:case Cl:return e;default:switch(e=e&&e.$$typeof,e){case m2:case kl:case Sl:case Pl:case Nl:case wl:return e;default:return t}}case tf:return t}}}H.ContextConsumer=kl;H.ContextProvider=wl;H.Element=ef;H.ForwardRef=Sl;H.Fragment=vl;H.Lazy=Pl;H.Memo=Nl;H.Portal=tf;H.Profiler=xl;H.StrictMode=bl;H.Suspense=jl;H.SuspenseList=Cl;H.isAsyncMode=function(){return!1};H.isConcurrentMode=function(){return!1};H.isContextConsumer=function(e){return ut(e)===kl};H.isContextProvider=function(e){return ut(e)===wl};H.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ef};H.isForwardRef=function(e){return ut(e)===Sl};H.isFragment=function(e){return ut(e)===vl};H.isLazy=function(e){return ut(e)===Pl};H.isMemo=function(e){return ut(e)===Nl};H.isPortal=function(e){return ut(e)===tf};H.isProfiler=function(e){return ut(e)===xl};H.isStrictMode=function(e){return ut(e)===bl};H.isSuspense=function(e){return ut(e)===jl};H.isSuspenseList=function(e){return ut(e)===Cl};H.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===vl||e===xl||e===bl||e===jl||e===Cl||e===h2||typeof e=="object"&&e!==null&&(e.$$typeof===Pl||e.$$typeof===Nl||e.$$typeof===wl||e.$$typeof===kl||e.$$typeof===Sl||e.$$typeof===Oh||e.getModuleId!==void 0)};H.typeOf=ut;_h.exports=H;var g2=_h.exports;P`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;P`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;P`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;P`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;P`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;P`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;P`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;P`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;P`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;P`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;P`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;P`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const y2=P`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,v2=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,b2=P`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,x2=P`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,w2=P`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,nf=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,k2=P`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,S2=P`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,j2=P`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,C2=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,N2=P`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,P2=P`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,E2=P`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function _2({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=nf,iterationCount:a=1}){return Nh`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function O2(e){return e==null}function T2(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Th(e,t){return n=>n?e():t()}function Wa(e){return Th(e,()=>null)}function Nu(e){return Wa(()=>({opacity:0}))(e)}const Ah=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:a=1e3,fraction:o=0,keyframes:i=nf,triggerOnce:l=!1,className:s,style:c,childClassName:d,childStyle:p,children:m,onVisibilityChange:b}=e,y=j.useMemo(()=>_2({keyframes:i,duration:a}),[a,i]);return O2(m)?null:T2(m)?ge(z2,{...e,animationStyles:y,children:String(m)}):g2.isFragment(m)?ge(zh,{...e,animationStyles:y}):ge(r2,{children:j.Children.map(m,(v,S)=>{if(!j.isValidElement(v))return null;const h=r+(t?S*a*n:0);switch(v.type){case"ol":case"ul":return ge(ps,{children:({cx:f})=>ge(v.type,{...v.props,className:f(s,v.props.className),style:Object.assign({},c,v.props.style),children:ge(Ah,{...e,children:v.props.children})})});case"li":return ge(Hd,{threshold:o,triggerOnce:l,onChange:b,children:({inView:f,ref:g})=>ge(ps,{children:({cx:x})=>ge(v.type,{...v.props,ref:g,className:x(d,v.props.className),css:Wa(()=>y)(f),style:Object.assign({},p,v.props.style,Nu(!f),{animationDelay:h+"ms"})})})});default:return ge(Hd,{threshold:o,triggerOnce:l,onChange:b,children:({inView:f,ref:g})=>ge("div",{ref:g,className:s,css:Wa(()=>y)(f),style:Object.assign({},c,Nu(!f),{animationDelay:h+"ms"}),children:ge(ps,{children:({cx:x})=>ge(v.type,{...v.props,className:x(d,v.props.className),style:Object.assign({},p,v.props.style)})})})})}})})},A2={display:"inline-block",whiteSpace:"pre"},z2=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:a=0,duration:o=1e3,fraction:i=0,triggerOnce:l=!1,className:s,style:c,children:d,onVisibilityChange:p}=e,{ref:m,inView:b}=Eh({triggerOnce:l,threshold:i,onChange:p});return Th(()=>ge("div",{ref:m,className:s,style:Object.assign({},c,A2),children:d.split("").map((y,v)=>ge("span",{css:Wa(()=>t)(b),style:{animationDelay:a+v*o*r+"ms"},children:y},v))}),()=>ge(zh,{...e,children:d}))(n)},zh=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:a,style:o,children:i,onVisibilityChange:l}=e,{ref:s,inView:c}=Eh({triggerOnce:r,threshold:n,onChange:l});return ge("div",{ref:s,className:a,css:Wa(()=>t)(c),style:Object.assign({},o,Nu(!c)),children:i})};P`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;P`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;P`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;P`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;P`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;P`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const R2=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,L2=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,I2=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,M2=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,$2=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,F2=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,D2=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,U2=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,V2=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,W2=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,B2=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Y2=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,H2=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function q2(e,t,n){switch(n){case"bottom-left":return t?L2:v2;case"bottom-right":return t?I2:b2;case"down":return e?t?$2:w2:t?M2:x2;case"left":return e?t?D2:k2:t?F2:nf;case"right":return e?t?V2:j2:t?U2:S2;case"top-left":return t?W2:C2;case"top-right":return t?B2:N2;case"up":return e?t?H2:E2:t?Y2:P2;default:return t?R2:y2}}const tr=e=>{const{big:t=!1,direction:n,reverse:r=!1,...a}=e,o=j.useMemo(()=>q2(t,r,n),[t,n,r]);return ge(Ah,{keyframes:o,...a})};P`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;P`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;P`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;P`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;P`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;P`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;P`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;P`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;P`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;P`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;P`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;P`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;P`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;P`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const zt=({text:e,page:t,img:n})=>u.jsx(u.Fragment,{children:t=="home"?u.jsxs("section",{className:"box",children:[u.jsx("video",{src:lb,autoPlay:!0,loop:!0,muted:!0}),u.jsxs(tr,{direction:"up",cascade:!0,children:[u.jsxs("h1",{children:["Enrol your child at",u.jsx("br",{})," As-Safwah Academy"]}),u.jsx("a",{href:"\\register",target:"_blank",children:u.jsx("button",{className:"whitebutton",children:"Apply Now!"})})]})]}):t=="policy"?u.jsxs("section",{className:"smallheader",children:[u.jsx("img",{src:n,alt:"image of ${text} header"}),u.jsx("h1",{children:e})]}):u.jsxs("section",{className:"mediumheader",children:[u.jsx("img",{src:n,alt:"image of ${text} header"}),u.jsx("h1",{children:e})]})});var Ie=function(){return Ie=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ie.apply(this,arguments)};function Ri(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,o;r<a;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var X="-ms-",ba="-moz-",W="-webkit-",Rh="comm",El="rule",rf="decl",Q2="@import",Lh="@keyframes",X2="@layer",K2=Math.abs,af=String.fromCharCode,Pu=Object.assign;function G2(e,t){return ve(e,0)^45?(((t<<2^ve(e,0))<<2^ve(e,1))<<2^ve(e,2))<<2^ve(e,3):0}function Ih(e){return e.trim()}function It(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function ei(e,t){return e.indexOf(t)}function ve(e,t){return e.charCodeAt(t)|0}function Rr(e,t,n){return e.slice(t,n)}function Nt(e){return e.length}function Mh(e){return e.length}function sa(e,t){return t.push(e),e}function Z2(e,t){return e.map(t).join("")}function qd(e,t){return e.filter(function(n){return!It(n,t)})}var _l=1,Lr=1,$h=0,st=0,ue=0,Hr="";function Ol(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:_l,column:Lr,length:i,return:"",siblings:l}}function en(e,t){return Pu(Ol("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function er(e){for(;e.root;)e=en(e.root,{children:[e]});sa(e,e.siblings)}function J2(){return ue}function ex(){return ue=st>0?ve(Hr,--st):0,Lr--,ue===10&&(Lr=1,_l--),ue}function vt(){return ue=st<$h?ve(Hr,st++):0,Lr++,ue===10&&(Lr=1,_l++),ue}function Un(){return ve(Hr,st)}function ti(){return st}function Tl(e,t){return Rr(Hr,e,t)}function Eu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tx(e){return _l=Lr=1,$h=Nt(Hr=e),st=0,[]}function nx(e){return Hr="",e}function hs(e){return Ih(Tl(st-1,_u(e===91?e+2:e===40?e+1:e)))}function rx(e){for(;(ue=Un())&&ue<33;)vt();return Eu(e)>2||Eu(ue)>3?"":" "}function ax(e,t){for(;--t&&vt()&&!(ue<48||ue>102||ue>57&&ue<65||ue>70&&ue<97););return Tl(e,ti()+(t<6&&Un()==32&&vt()==32))}function _u(e){for(;vt();)switch(ue){case e:return st;case 34:case 39:e!==34&&e!==39&&_u(ue);break;case 40:e===41&&_u(e);break;case 92:vt();break}return st}function ox(e,t){for(;vt()&&e+ue!==47+10&&!(e+ue===42+42&&Un()===47););return"/*"+Tl(t,st-1)+"*"+af(e===47?e:vt())}function ix(e){for(;!Eu(Un());)vt();return Tl(e,st)}function lx(e){return nx(ni("",null,null,null,[""],e=tx(e),0,[0],e))}function ni(e,t,n,r,a,o,i,l,s){for(var c=0,d=0,p=i,m=0,b=0,y=0,v=1,S=1,h=1,f=0,g="",x=a,w=o,C=r,k=g;S;)switch(y=f,f=vt()){case 40:if(y!=108&&ve(k,p-1)==58){ei(k+=L(hs(f),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:k+=hs(f);break;case 9:case 10:case 13:case 32:k+=rx(y);break;case 92:k+=ax(ti()-1,7);continue;case 47:switch(Un()){case 42:case 47:sa(sx(ox(vt(),ti()),t,n,s),s);break;default:k+="/"}break;case 123*v:l[c++]=Nt(k)*h;case 125*v:case 59:case 0:switch(f){case 0:case 125:S=0;case 59+d:h==-1&&(k=L(k,/\f/g,"")),b>0&&Nt(k)-p&&sa(b>32?Xd(k+";",r,n,p-1,s):Xd(L(k," ","")+";",r,n,p-2,s),s);break;case 59:k+=";";default:if(sa(C=Qd(k,t,n,c,d,a,l,g,x=[],w=[],p,o),o),f===123)if(d===0)ni(k,t,C,C,x,o,p,l,w);else switch(m===99&&ve(k,3)===110?100:m){case 100:case 108:case 109:case 115:ni(e,C,C,r&&sa(Qd(e,C,C,0,0,a,l,g,a,x=[],p,w),w),a,w,p,l,r?x:w);break;default:ni(k,C,C,C,[""],w,0,l,w)}}c=d=b=0,v=h=1,g=k="",p=i;break;case 58:p=1+Nt(k),b=y;default:if(v<1){if(f==123)--v;else if(f==125&&v++==0&&ex()==125)continue}switch(k+=af(f),f*v){case 38:h=d>0?1:(k+="\f",-1);break;case 44:l[c++]=(Nt(k)-1)*h,h=1;break;case 64:Un()===45&&(k+=hs(vt())),m=Un(),d=p=Nt(g=k+=ix(ti())),f++;break;case 45:y===45&&Nt(k)==2&&(v=0)}}return o}function Qd(e,t,n,r,a,o,i,l,s,c,d,p){for(var m=a-1,b=a===0?o:[""],y=Mh(b),v=0,S=0,h=0;v<r;++v)for(var f=0,g=Rr(e,m+1,m=K2(S=i[v])),x=e;f<y;++f)(x=Ih(S>0?b[f]+" "+g:L(g,/&\f/g,b[f])))&&(s[h++]=x);return Ol(e,t,n,a===0?El:l,s,c,d,p)}function sx(e,t,n,r){return Ol(e,t,n,Rh,af(J2()),Rr(e,2,-2),0,r)}function Xd(e,t,n,r,a){return Ol(e,t,n,rf,Rr(e,0,r),Rr(e,r+1,-1),r,a)}function Fh(e,t,n){switch(G2(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 4789:return ba+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+ba+e+X+e+e;case 5936:switch(ve(e,t+11)){case 114:return W+e+X+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+X+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+X+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return W+e+X+e+e;case 6165:return W+e+X+"flex-"+e+e;case 5187:return W+e+L(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+X+"flex-$1$2")+e;case 5443:return W+e+X+"flex-item-"+L(e,/flex-|-self/g,"")+(It(e,/flex-|baseline/)?"":X+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return W+e+X+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return W+e+X+L(e,"shrink","negative")+e;case 5292:return W+e+X+L(e,"basis","preferred-size")+e;case 6060:return W+"box-"+L(e,"-grow","")+W+e+X+L(e,"grow","positive")+e;case 4554:return W+L(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+X+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4200:if(!It(e,/flex-|baseline/))return X+"grid-column-align"+Rr(e,t)+e;break;case 2592:case 3360:return X+L(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,a){return t=a,It(r.props,/grid-\w+-end/)})?~ei(e+(n=n[t].value),"span")?e:X+L(e,"-start","")+e+X+"grid-row-span:"+(~ei(n,"span")?It(n,/\d+/):+It(n,/\d+/)-+It(e,/\d+/))+";":X+L(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return It(r.props,/grid-\w+-start/)})?e:X+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Nt(e)-1-t>6)switch(ve(e,t+1)){case 109:if(ve(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+ba+(ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ei(e,"stretch")?Fh(L(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,o,i,l,s,c){return X+a+":"+o+c+(i?X+a+"-span:"+(l?s:+s-+o)+c:"")+e});case 4949:if(ve(e,t+6)===121)return L(e,":",":"+W)+e;break;case 6444:switch(ve(e,ve(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+W+(ve(e,14)===45?"inline-":"")+"box$3$1"+W+"$2$3$1"+X+"$2box$3")+e;case 100:return L(e,":",":"+X)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function Li(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ux(e,t,n,r){switch(e.type){case X2:if(e.children.length)break;case Q2:case rf:return e.return=e.return||e.value;case Rh:return"";case Lh:return e.return=e.value+"{"+Li(e.children,r)+"}";case El:if(!Nt(e.value=e.props.join(",")))return""}return Nt(n=Li(e.children,r))?e.return=e.value+"{"+n+"}":""}function cx(e){var t=Mh(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}function fx(e){return function(t){t.root||(t=t.return)&&e(t)}}function dx(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case rf:e.return=Fh(e.value,e.length,n);return;case Lh:return Li([en(e,{value:L(e.value,"@","@"+W)})],r);case El:if(e.length)return Z2(n=e.props,function(a){switch(It(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":er(en(e,{props:[L(a,/:(read-\w+)/,":"+ba+"$1")]})),er(en(e,{props:[a]})),Pu(e,{props:qd(n,r)});break;case"::placeholder":er(en(e,{props:[L(a,/:(plac\w+)/,":"+W+"input-$1")]})),er(en(e,{props:[L(a,/:(plac\w+)/,":"+ba+"$1")]})),er(en(e,{props:[L(a,/:(plac\w+)/,X+"input-$1")]})),er(en(e,{props:[a]})),Pu(e,{props:qd(n,r)});break}return""})}}var Ir=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",of=typeof window<"u"&&"HTMLElement"in window,px=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Al=Object.freeze([]),Mr=Object.freeze({});function mx(e,t,n){return n===void 0&&(n=Mr),e.theme!==n.theme&&e.theme||t||n.theme}var Dh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gx=/(^-|-$)/g;function Kd(e){return e.replace(hx,"-").replace(gx,"")}var yx=/(a)(d)/gi,Gd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ou(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Gd(t%52)+n;return(Gd(t%52)+n).replace(yx,"$1-$2")}var gs,mr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Uh=function(e){return mr(5381,e)};function vx(e){return Ou(Uh(e)>>>0)}function bx(e){return e.displayName||e.name||"Component"}function ys(e){return typeof e=="string"&&!0}var Vh=typeof Symbol=="function"&&Symbol.for,Wh=Vh?Symbol.for("react.memo"):60115,xx=Vh?Symbol.for("react.forward_ref"):60112,wx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Bh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Sx=((gs={})[xx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gs[Wh]=Bh,gs);function Zd(e){return("type"in(t=e)&&t.type.$$typeof)===Wh?Bh:"$$typeof"in e?Sx[e.$$typeof]:wx;var t}var jx=Object.defineProperty,Cx=Object.getOwnPropertyNames,Jd=Object.getOwnPropertySymbols,Nx=Object.getOwnPropertyDescriptor,Px=Object.getPrototypeOf,ep=Object.prototype;function Yh(e,t,n){if(typeof t!="string"){if(ep){var r=Px(t);r&&r!==ep&&Yh(e,r,n)}var a=Cx(t);Jd&&(a=a.concat(Jd(t)));for(var o=Zd(e),i=Zd(t),l=0;l<a.length;++l){var s=a[l];if(!(s in kx||n&&n[s]||i&&s in i||o&&s in o)){var c=Nx(t,s);try{jx(e,s,c)}catch{}}}}return e}function $r(e){return typeof e=="function"}function lf(e){return typeof e=="object"&&"styledComponentId"in e}function In(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function tp(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ba(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Tu(e,t,n){if(n===void 0&&(n=!1),!n&&!Ba(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Tu(e[r],t[r]);else if(Ba(t))for(var r in t)e[r]=Tu(e[r],t[r]);return e}function sf(e,t){Object.defineProperty(e,"toString",{value:t})}function ro(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ex=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,o=a;t>=o;)if((o<<=1)<0)throw ro(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var i=a;i<o;i++)this.groupSizes[i]=0}for(var l=this.indexOfGroup(t+1),s=(i=0,n.length);i<s;i++)this.tag.insertRule(l,n[i])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),a=r+n;this.groupSizes[t]=0;for(var o=r;o<a;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],a=this.indexOfGroup(t),o=a+r,i=a;i<o;i++)n+="".concat(this.tag.getRule(i)).concat(`/*!sc*/
`);return n},e}(),ri=new Map,Ii=new Map,vs=1,_o=function(e){if(ri.has(e))return ri.get(e);for(;Ii.has(vs);)vs++;var t=vs++;return ri.set(e,t),Ii.set(t,e),t},_x=function(e,t){ri.set(e,t),Ii.set(t,e)},Ox="style[".concat(Ir,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),Tx=new RegExp("^".concat(Ir,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ax=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},zx=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(Tx);if(s){var c=0|parseInt(s[1],10),d=s[2];c!==0&&(_x(d,c),Ax(e,d,s[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(l)}}};function Rx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Hh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Ir,"]")));return s[s.length-1]}(n),o=a!==void 0?a.nextSibling:null;r.setAttribute(Ir,"active"),r.setAttribute("data-styled-version","6.1.0");var i=Rx();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},Lx=function(){function e(t){this.element=Hh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,a=0,o=r.length;a<o;a++){var i=r[a];if(i.ownerNode===n)return i}throw ro(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Ix=function(){function e(t){this.element=Hh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Mx=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),np=of,$x={isServer:!of,useCSSOMInjection:!px},qh=function(){function e(t,n,r){t===void 0&&(t=Mr),n===void 0&&(n={});var a=this;this.options=Ie(Ie({},$x),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&of&&np&&(np=!1,function(o){for(var i=document.querySelectorAll(Ox),l=0,s=i.length;l<s;l++){var c=i[l];c&&c.getAttribute(Ir)!=="active"&&(zx(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),sf(this,function(){return function(o){for(var i=o.getTag(),l=i.length,s="",c=function(p){var m=function(h){return Ii.get(h)}(p);if(m===void 0)return"continue";var b=o.names.get(m),y=i.getGroup(p);if(b===void 0||y.length===0)return"continue";var v="".concat(Ir,".g").concat(p,'[id="').concat(m,'"]'),S="";b!==void 0&&b.forEach(function(h){h.length>0&&(S+="".concat(h,","))}),s+="".concat(y).concat(v,'{content:"').concat(S,'"}').concat(`/*!sc*/
`)},d=0;d<l;d++)c(d);return s}(a)})}return e.registerId=function(t){return _o(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ie(Ie({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,a=n.target;return n.isServer?new Mx(a):r?new Lx(a):new Ix(a)}(this.options),new Ex(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(_o(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(_o(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(_o(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Fx=/&/g,Dx=/^\s*\/\/.*$/gm;function Qh(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Qh(n.children,t)),n})}function Ux(e){var t,n,r,a=e===void 0?Mr:e,o=a.options,i=o===void 0?Mr:o,l=a.plugins,s=l===void 0?Al:l,c=function(m,b,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):m},d=s.slice();d.push(function(m){m.type===El&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Fx,n).replace(r,c))}),i.prefix&&d.push(dx),d.push(ux);var p=function(m,b,y,v){b===void 0&&(b=""),y===void 0&&(y=""),v===void 0&&(v="&"),t=v,n=b,r=new RegExp("\\".concat(n,"\\b"),"g");var S=m.replace(Dx,""),h=lx(y||b?"".concat(y," ").concat(b," { ").concat(S," }"):S);i.namespace&&(h=Qh(h,i.namespace));var f=[];return Li(h,cx(d.concat(fx(function(g){return f.push(g)})))),f};return p.hash=s.length?s.reduce(function(m,b){return b.name||ro(15),mr(m,b.name)},5381).toString():"",p}var Vx=new qh,Au=Ux(),Xh=At.createContext({shouldForwardProp:void 0,styleSheet:Vx,stylis:Au});Xh.Consumer;At.createContext(void 0);function rp(){return j.useContext(Xh)}var Wx=function(){function e(t,n){var r=this;this.inject=function(a,o){o===void 0&&(o=Au);var i=r.name+o.hash;a.hasNameForId(r.id,i)||a.insertRules(r.id,i,o(r.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,sf(this,function(){throw ro(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Au),this.name+t.hash},e}(),Bx=function(e){return e>="A"&&e<="Z"};function ap(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Bx(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Kh=function(e){return e==null||e===!1||e===""},Gh=function(e){var t,n,r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!Kh(o)&&(Array.isArray(o)&&o.isCss||$r(o)?r.push("".concat(ap(a),":"),o,";"):Ba(o)?r.push.apply(r,Ri(Ri(["".concat(a," {")],Gh(o),!1),["}"],!1)):r.push("".concat(ap(a),": ").concat((t=a,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in xh||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Vn(e,t,n,r){if(Kh(e))return[];if(lf(e))return[".".concat(e.styledComponentId)];if($r(e)){if(!$r(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var a=e(t);return Vn(a,t,n,r)}var o;return e instanceof Wx?n?(e.inject(n,r),[e.getName(r)]):[e]:Ba(e)?Gh(e):Array.isArray(e)?Array.prototype.concat.apply(Al,e.map(function(i){return Vn(i,t,n,r)})):[e.toString()]}function Yx(e){for(var t=0;t<e.length;t+=1){var n=e[t];if($r(n)&&!lf(n))return!1}return!0}var Hx=Uh("6.1.0"),qx=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Yx(t),this.componentId=n,this.baseHash=mr(Hx,n),this.baseStyle=r,qh.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=In(a,this.staticRulesId);else{var o=tp(Vn(this.rules,t,n,r)),i=Ou(mr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,i)){var l=r(o,".".concat(i),void 0,this.componentId);n.insertRules(this.componentId,i,l)}a=In(a,i),this.staticRulesId=i}else{for(var s=mr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")c+=p;else if(p){var m=tp(Vn(p,t,n,r));s=mr(s,m+d),c+=m}}if(c){var b=Ou(s>>>0);n.hasNameForId(this.componentId,b)||n.insertRules(this.componentId,b,r(c,".".concat(b),void 0,this.componentId)),a=In(a,b)}}return a},e}(),Zh=At.createContext(void 0);Zh.Consumer;var bs={};function Qx(e,t,n){var r=lf(e),a=e,o=!ys(e),i=t.attrs,l=i===void 0?Al:i,s=t.componentId,c=s===void 0?function(g,x){var w=typeof g!="string"?"sc":Kd(g);bs[w]=(bs[w]||0)+1;var C="".concat(w,"-").concat(vx("6.1.0"+w+bs[w]));return x?"".concat(x,"-").concat(C):C}(t.displayName,t.parentComponentId):s,d=t.displayName;d===void 0&&function(g){return ys(g)?"styled.".concat(g):"Styled(".concat(bx(g),")")}(e);var p=t.displayName&&t.componentId?"".concat(Kd(t.displayName),"-").concat(t.componentId):t.componentId||c,m=r&&a.attrs?a.attrs.concat(l).filter(Boolean):l,b=t.shouldForwardProp;if(r&&a.shouldForwardProp){var y=a.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;b=function(g,x){return y(g,x)&&v(g,x)}}else b=y}var S=new qx(n,p,r?a.componentStyle:void 0);function h(g,x){return function(w,C,k){var T=w.attrs,D=w.componentStyle,I=w.defaultProps,Ue=w.foldedComponentIds,_n=w.styledComponentId,On=w.target,lo=At.useContext(Zh),Ml=rp(),Zn=w.shouldForwardProp||Ml.shouldForwardProp,et=function(Rt,Ve,Kt){for(var We,tt=Ie(Ie({},Ve),{className:void 0,theme:Kt}),$l=0;$l<Rt.length;$l+=1){var so=$r(We=Rt[$l])?We(tt):We;for(var Gt in so)tt[Gt]=Gt==="className"?In(tt[Gt],so[Gt]):Gt==="style"?Ie(Ie({},tt[Gt]),so[Gt]):so[Gt]}return Ve.className&&(tt.className=In(tt.className,Ve.className)),tt}(T,C,mx(C,lo,I)||Mr),E=et.as||On,z={};for(var R in et)et[R]===void 0||R[0]==="$"||R==="as"||R==="theme"||(R==="forwardedAs"?z.as=et.forwardedAs:Zn&&!Zn(R,E)||(z[R]=et[R]));var J=function(Rt,Ve){var Kt=rp(),We=Rt.generateAndInjectStyles(Ve,Kt.styleSheet,Kt.stylis);return We}(D,et),ae=In(Ue,_n);return J&&(ae+=" "+J),et.className&&(ae+=" "+et.className),z[ys(E)&&!Dh.has(E)?"class":"className"]=ae,z.ref=k,j.createElement(E,z)}(f,g,x)}var f=At.forwardRef(h);return f.attrs=m,f.componentStyle=S,f.shouldForwardProp=b,f.foldedComponentIds=r?In(a.foldedComponentIds,a.styledComponentId):"",f.styledComponentId=p,f.target=r?a.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(x){for(var w=[],C=1;C<arguments.length;C++)w[C-1]=arguments[C];for(var k=0,T=w;k<T.length;k++)Tu(x,T[k],!0);return x}({},a.defaultProps,g):g}}),sf(f,function(){return".".concat(f.styledComponentId)}),o&&Yh(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function op(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var ip=function(e){return Object.assign(e,{isCss:!0})};function Xx(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if($r(e)||Ba(e)){var r=e;return ip(Vn(op(Al,Ri([r],t,!0))))}var a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?Vn(a):ip(Vn(op(a,t)))}function zu(e,t,n){if(n===void 0&&(n=Mr),!t)throw ro(1,t);var r=function(a){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,Xx.apply(void 0,Ri([a],o,!1)))};return r.attrs=function(a){return zu(e,t,Ie(Ie({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return zu(e,t,Ie(Ie({},n),a))},r}var Jh=function(e){return zu(Qx,e)},qr=Jh;Dh.forEach(function(e){qr[e]=Jh(e)});const Kx=qr.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 3;

  li {
    padding: 18px 18px;
    font-weight: 400px;
  }

  a.button {
    padding: 10px 20px;
    background: white;
    color: #0D2538;
    border-radius: 30px;
    
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({open:e})=>e?"translateX(0)":"translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
      padding-left: 30px;
    }
  }
`,Gx=({open:e})=>u.jsxs(Kx,{open:e,children:[u.jsx("li",{children:u.jsx("a",{href:"/",children:"Home"})}),u.jsx("li",{children:u.jsx("a",{href:"/about",children:"About"})}),u.jsx("li",{children:u.jsx("a",{href:"/courses",children:"Course"})}),u.jsx("li",{children:u.jsx("a",{href:"/contact",children:"Contact"})}),u.jsx("li",{children:u.jsx("a",{href:"/register",className:"button",children:"Register"})})]}),Zx=qr.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({open:e})=>"white"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({open:e})=>e?"rotate(45deg)":"rotate(0)"};
    }

    &:nth-child(2) {
      transform: ${({open:e})=>e?"translateX(100%)":"translateX(0)"};
      opacity: ${({open:e})=>e?0:1};
    }

    &:nth-child(3) {
      transform: ${({open:e})=>e?"rotate(-45deg)":"rotate(0)"};
    }
  }
`,Jx=()=>{const[e,t]=j.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsxs(Zx,{open:e,onClick:()=>t(!e),children:[u.jsx("div",{}),u.jsx("div",{}),u.jsx("div",{})]}),u.jsx(Gx,{open:e})]})},e3="/LintaRahman.github.io-As-SafwahAcademy/assets/Navbar_logo-32374cb8.png",t3=qr.nav`
  width: 100%;
  height: 65px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background: ${({navbar:e})=>e?"#1c4943":"transparent"};
  color: white;
  z-index: 3;
  transition: all 0.3s ease;

  .logo {
    padding: 18px 18px;
    font-weight: 800;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`,xt=({scrollVal:e=25})=>{const[t,n]=j.useState(!1);return j.useEffect(()=>{const r=()=>{window.scrollY>=e?n(!0):n(!1)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]),u.jsxs(t3,{navbar:t,children:[u.jsx("img",{src:e3,alt:""}),u.jsx(Jx,{})]})};function lp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lp(Object(n),!0).forEach(function(r){he(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Mi(e){"@babel/helpers - typeof";return Mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mi(e)}function n3(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r3(e,t,n){return t&&sp(e.prototype,t),n&&sp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function uf(e,t){return o3(e)||l3(e,t)||e1(e,t)||u3()}function ao(e){return a3(e)||i3(e)||e1(e)||s3()}function a3(e){if(Array.isArray(e))return Ru(e)}function o3(e){if(Array.isArray(e))return e}function i3(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function l3(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,o=!1,i,l;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(r.push(i.value),!(t&&r.length===t));a=!0);}catch(s){o=!0,l=s}finally{try{!a&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function e1(e,t){if(e){if(typeof e=="string")return Ru(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ru(e,t)}}function Ru(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var up=function(){},cf={},t1={},n1=null,r1={mark:up,measure:up};try{typeof window<"u"&&(cf=window),typeof document<"u"&&(t1=document),typeof MutationObserver<"u"&&(n1=MutationObserver),typeof performance<"u"&&(r1=performance)}catch{}var c3=cf.navigator||{},cp=c3.userAgent,fp=cp===void 0?"":cp,wn=cf,Z=t1,dp=n1,Oo=r1;wn.document;var Xt=!!Z.documentElement&&!!Z.head&&typeof Z.addEventListener=="function"&&typeof Z.createElement=="function",a1=~fp.indexOf("MSIE")||~fp.indexOf("Trident/"),To,Ao,zo,Ro,Lo,Yt="___FONT_AWESOME___",Lu=16,o1="fa",i1="svg-inline--fa",Qn="data-fa-i2svg",Iu="data-fa-pseudo-element",f3="data-fa-pseudo-element-pending",ff="data-prefix",df="data-icon",pp="fontawesome-i2svg",d3="async",p3=["HTML","HEAD","STYLE","SCRIPT"],l1=function(){try{return!0}catch{return!1}}(),K="classic",ie="sharp",pf=[K,ie];function oo(e){return new Proxy(e,{get:function(t,n){return n in t?t[n]:t[K]}})}var Ya=oo((To={},he(To,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),he(To,ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),To)),Ha=oo((Ao={},he(Ao,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),he(Ao,ie,{solid:"fass",regular:"fasr",light:"fasl"}),Ao)),qa=oo((zo={},he(zo,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),he(zo,ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),zo)),m3=oo((Ro={},he(Ro,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),he(Ro,ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ro)),h3=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,s1="fa-layers-text",g3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,y3=oo((Lo={},he(Lo,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),he(Lo,ie,{900:"fass",400:"fasr",300:"fasl"}),Lo)),u1=[1,2,3,4,5,6,7,8,9,10],v3=u1.concat([11,12,13,14,15,16,17,18,19,20]),b3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Mn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qa=new Set;Object.keys(Ha[K]).map(Qa.add.bind(Qa));Object.keys(Ha[ie]).map(Qa.add.bind(Qa));var x3=[].concat(pf,ao(Qa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Mn.GROUP,Mn.SWAP_OPACITY,Mn.PRIMARY,Mn.SECONDARY]).concat(u1.map(function(e){return"".concat(e,"x")})).concat(v3.map(function(e){return"w-".concat(e)})),xa=wn.FontAwesomeConfig||{};function w3(e){var t=Z.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function k3(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Z&&typeof Z.querySelector=="function"){var S3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];S3.forEach(function(e){var t=uf(e,2),n=t[0],r=t[1],a=k3(w3(n));a!=null&&(xa[r]=a)})}var c1={styleDefault:"solid",familyDefault:"classic",cssPrefix:o1,replacementClass:i1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};xa.familyPrefix&&(xa.cssPrefix=xa.familyPrefix);var Fr=_(_({},c1),xa);Fr.autoReplaceSvg||(Fr.observeMutations=!1);var A={};Object.keys(c1).forEach(function(e){Object.defineProperty(A,e,{enumerable:!0,set:function(t){Fr[e]=t,wa.forEach(function(n){return n(A)})},get:function(){return Fr[e]}})});Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(e){Fr.cssPrefix=e,wa.forEach(function(t){return t(A)})},get:function(){return Fr.cssPrefix}});wn.FontAwesomeConfig=A;var wa=[];function j3(e){return wa.push(e),function(){wa.splice(wa.indexOf(e),1)}}var Jt=Lu,Et={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function C3(e){if(!(!e||!Xt)){var t=Z.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Z.head.childNodes,r=null,a=n.length-1;a>-1;a--){var o=n[a],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return Z.head.insertBefore(t,r),e}}var N3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xa(){for(var e=12,t="";e-- >0;)t+=N3[Math.random()*62|0];return t}function Qr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function mf(e){return e.classList?Qr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function f1(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function P3(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(f1(e[n]),'" ')},"").trim()}function zl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function hf(e){return e.size!==Et.size||e.x!==Et.x||e.y!==Et.y||e.rotate!==Et.rotate||e.flipX||e.flipY}function E3(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(o," ").concat(i," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:s,path:c}}function _3(e){var t=e.transform,n=e.width,r=n===void 0?Lu:n,a=e.height,o=a===void 0?Lu:a,i=e.startCentered,l=i===void 0?!1:i,s="";return l&&a1?s+="translate(".concat(t.x/Jt-r/2,"em, ").concat(t.y/Jt-o/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/Jt,"em), calc(-50% + ").concat(t.y/Jt,"em)) "):s+="translate(".concat(t.x/Jt,"em, ").concat(t.y/Jt,"em) "),s+="scale(".concat(t.size/Jt*(t.flipX?-1:1),", ").concat(t.size/Jt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var O3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function d1(){var e=o1,t=i1,n=A.cssPrefix,r=A.replacementClass,a=O3;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(l,".".concat(r))}return a}var mp=!1;function xs(){A.autoAddCss&&!mp&&(C3(d1()),mp=!0)}var T3={mixout:function(){return{dom:{css:d1,insertCss:xs}}},hooks:function(){return{beforeDOMElementCreation:function(){xs()},beforeI2svg:function(){xs()}}}},Ht=wn||{};Ht[Yt]||(Ht[Yt]={});Ht[Yt].styles||(Ht[Yt].styles={});Ht[Yt].hooks||(Ht[Yt].hooks={});Ht[Yt].shims||(Ht[Yt].shims=[]);var mt=Ht[Yt],p1=[],A3=function e(){Z.removeEventListener("DOMContentLoaded",e),$i=1,p1.map(function(t){return t()})},$i=!1;Xt&&($i=(Z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Z.readyState),$i||Z.addEventListener("DOMContentLoaded",A3));function z3(e){Xt&&($i?setTimeout(e,0):p1.push(e))}function io(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,o=a===void 0?[]:a;return typeof e=="string"?f1(e):"<".concat(t," ").concat(P3(r),">").concat(o.map(io).join(""),"</").concat(t,">")}function hp(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var R3=function(e,t){return function(n,r,a,o){return e.call(t,n,r,a,o)}},ws=function(e,t,n,r){var a=Object.keys(e),o=a.length,i=r!==void 0?R3(t,r):t,l,s,c;for(n===void 0?(l=1,c=e[a[0]]):(l=0,c=n);l<o;l++)s=a[l],c=i(c,e[s],s,e);return c};function L3(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((a&1023)<<10)+(o&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function m1(e){var t=L3(e);return t.length===1?t[0].toString(16):null}function I3(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function gp(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Mu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,o=gp(t);typeof mt.hooks.addPack=="function"&&!a?mt.hooks.addPack(e,gp(t)):mt.styles[e]=_(_({},mt.styles[e]||{}),o),e==="fas"&&Mu("fa",t)}var Io,Mo,$o,hr=mt.styles,M3=mt.shims,$3=(Io={},he(Io,K,Object.values(qa[K])),he(Io,ie,Object.values(qa[ie])),Io),gf=null,h1={},g1={},y1={},v1={},b1={},F3=(Mo={},he(Mo,K,Object.keys(Ya[K])),he(Mo,ie,Object.keys(Ya[ie])),Mo);function D3(e){return~x3.indexOf(e)}function U3(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!D3(a)?a:null}var x1=function(){var e=function(r){return ws(hr,function(a,o,i){return a[i]=ws(o,r,{}),a},{})};h1=e(function(r,a,o){if(a[3]&&(r[a[3]]=o),a[2]){var i=a[2].filter(function(l){return typeof l=="number"});i.forEach(function(l){r[l.toString(16)]=o})}return r}),g1=e(function(r,a,o){if(r[o]=o,a[2]){var i=a[2].filter(function(l){return typeof l=="string"});i.forEach(function(l){r[l]=o})}return r}),b1=e(function(r,a,o){var i=a[2];return r[o]=o,i.forEach(function(l){r[l]=o}),r});var t="far"in hr||A.autoFetchSvg,n=ws(M3,function(r,a){var o=a[0],i=a[1],l=a[2];return i==="far"&&!t&&(i="fas"),typeof o=="string"&&(r.names[o]={prefix:i,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:i,iconName:l}),r},{names:{},unicodes:{}});y1=n.names,v1=n.unicodes,gf=Rl(A.styleDefault,{family:A.familyDefault})};j3(function(e){gf=Rl(e.styleDefault,{family:A.familyDefault})});x1();function yf(e,t){return(h1[e]||{})[t]}function V3(e,t){return(g1[e]||{})[t]}function $n(e,t){return(b1[e]||{})[t]}function w1(e){return y1[e]||{prefix:null,iconName:null}}function W3(e){var t=v1[e],n=yf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function kn(){return gf}var vf=function(){return{prefix:null,iconName:null,rest:[]}};function Rl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,a=Ya[r][e],o=Ha[r][e]||Ha[r][a],i=e in mt.styles?e:null;return o||i||null}var yp=($o={},he($o,K,Object.keys(qa[K])),he($o,ie,Object.keys(qa[ie])),$o);function Ll(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,o=(t={},he(t,K,"".concat(A.cssPrefix,"-").concat(K)),he(t,ie,"".concat(A.cssPrefix,"-").concat(ie)),t),i=null,l=K;(e.includes(o[K])||e.some(function(c){return yp[K].includes(c)}))&&(l=K),(e.includes(o[ie])||e.some(function(c){return yp[ie].includes(c)}))&&(l=ie);var s=e.reduce(function(c,d){var p=U3(A.cssPrefix,d);if(hr[d]?(d=$3[l].includes(d)?m3[l][d]:d,i=d,c.prefix=d):F3[l].indexOf(d)>-1?(i=d,c.prefix=Rl(d,{family:l})):p?c.iconName=p:d!==A.replacementClass&&d!==o[K]&&d!==o[ie]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var m=i==="fa"?w1(c.iconName):{},b=$n(c.prefix,c.iconName);m.prefix&&(i=null),c.iconName=m.iconName||b||c.iconName,c.prefix=m.prefix||c.prefix,c.prefix==="far"&&!hr.far&&hr.fas&&!A.autoFetchSvg&&(c.prefix="fas")}return c},vf());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===ie&&(hr.fass||A.autoFetchSvg)&&(s.prefix="fass",s.iconName=$n(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||i==="fa")&&(s.prefix=kn()||"fas"),s}var B3=function(){function e(){n3(this,e),this.definitions={}}return r3(e,[{key:"add",value:function(){for(var t=this,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(i){t.definitions[i]=_(_({},t.definitions[i]||{}),o[i]),Mu(i,o[i]);var l=qa[K][i];l&&Mu(l,o[i]),x1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(a){var o=r[a],i=o.prefix,l=o.iconName,s=o.icon,c=s[2];t[i]||(t[i]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(t[i][d]=s)}),t[i][l]=s}),t}}]),e}(),vp=[],gr={},Cr={},Y3=Object.keys(Cr);function H3(e,t){var n=t.mixoutsTo;return vp=e,gr={},Object.keys(Cr).forEach(function(r){Y3.indexOf(r)===-1&&delete Cr[r]}),vp.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(i){typeof a[i]=="function"&&(n[i]=a[i]),Mi(a[i])==="object"&&Object.keys(a[i]).forEach(function(l){n[i]||(n[i]={}),n[i][l]=a[i][l]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(i){gr[i]||(gr[i]=[]),gr[i].push(o[i])})}r.provides&&r.provides(Cr)}),n}function $u(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var o=gr[e]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(r))}),t}function Xn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=gr[e]||[];a.forEach(function(o){o.apply(null,n)})}function qt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Cr[e]?Cr[e].apply(null,t):void 0}function Fu(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||kn();if(t)return t=$n(n,t)||t,hp(k1.definitions,n,t)||hp(mt.styles,n,t)}var k1=new B3,q3=function(){A.autoReplaceSvg=!1,A.observeMutations=!1,Xn("noAuto")},Q3={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xt?(Xn("beforeI2svg",e),qt("pseudoElements2svg",e),qt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,z3(function(){K3({autoReplaceSvgRoot:t}),Xn("watch",e)})}},X3={icon:function(e){if(e===null)return null;if(Mi(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:$n(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Rl(e[0]);return{prefix:n,iconName:$n(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(A.cssPrefix,"-"))>-1||e.match(h3))){var r=Ll(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||kn(),iconName:$n(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var a=kn();return{prefix:a,iconName:$n(a,e)||e}}}},Je={noAuto:q3,config:A,dom:Q3,parse:X3,library:k1,findIconDefinition:Fu,toHtml:io},K3=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,n=t===void 0?Z:t;(Object.keys(mt.styles).length>0||A.autoFetchSvg)&&Xt&&A.autoReplaceSvg&&Je.dom.i2svg({node:n})};function Il(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return io(n)})}}),Object.defineProperty(e,"node",{get:function(){if(Xt){var n=Z.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function G3(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,o=e.styles,i=e.transform;if(hf(i)&&n.found&&!r.found){var l=n.width,s=n.height,c={x:l/s/2,y:.5};a.style=zl(_(_({},o),{},{"transform-origin":"".concat(c.x+i.x/16,"em ").concat(c.y+i.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Z3(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,o=e.symbol,i=o===!0?"".concat(t,"-").concat(A.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:_(_({},a),{},{id:i}),children:r}]}]}function bf(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,o=e.iconName,i=e.transform,l=e.symbol,s=e.title,c=e.maskId,d=e.titleId,p=e.extra,m=e.watchable,b=m===void 0?!1:m,y=r.found?r:n,v=y.width,S=y.height,h=a==="fak",f=[A.replacementClass,o?"".concat(A.cssPrefix,"-").concat(o):""].filter(function(D){return p.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(p.classes).join(" "),g={children:[],attributes:_(_({},p.attributes),{},{"data-prefix":a,"data-icon":o,class:f,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(S)})},x=h&&!~p.classes.indexOf("fa-fw")?{width:"".concat(v/S*16*.0625,"em")}:{};b&&(g.attributes[Qn]=""),s&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(d||Xa())},children:[s]}),delete g.attributes.title);var w=_(_({},g),{},{prefix:a,iconName:o,main:n,mask:r,maskId:c,transform:i,symbol:l,styles:_(_({},x),p.styles)}),C=r.found&&n.found?qt("generateAbstractMask",w)||{children:[],attributes:{}}:qt("generateAbstractIcon",w)||{children:[],attributes:{}},k=C.children,T=C.attributes;return w.children=k,w.attributes=T,l?Z3(w):G3(w)}function bp(e){var t=e.content,n=e.width,r=e.height,a=e.transform,o=e.title,i=e.extra,l=e.watchable,s=l===void 0?!1:l,c=_(_(_({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});s&&(c[Qn]="");var d=_({},i.styles);hf(a)&&(d.transform=_3({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var p=zl(d);p.length>0&&(c.style=p);var m=[];return m.push({tag:"span",attributes:c,children:[t]}),o&&m.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),m}function J3(e){var t=e.content,n=e.title,r=e.extra,a=_(_(_({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=zl(r.styles);o.length>0&&(a.style=o);var i=[];return i.push({tag:"span",attributes:a,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var ks=mt.styles;function Du(e){var t=e[0],n=e[1],r=e.slice(4),a=uf(r,1),o=a[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat(Mn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(Mn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(Mn.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:i}}var ew={found:!1,width:512,height:512};function tw(e,t){!l1&&!A.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Uu(e,t){var n=t;return t==="fa"&&A.styleDefault!==null&&(t=kn()),new Promise(function(r,a){if(qt("missingIconAbstract"),n==="fa"){var o=w1(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&ks[t]&&ks[t][e]){var i=ks[t][e];return r(Du(i))}tw(e,t),r(_(_({},ew),{},{icon:A.showMissingIcons&&e?qt("missingIconAbstract")||{}:{}}))})}var xp=function(){},Vu=A.measurePerformance&&Oo&&Oo.mark&&Oo.measure?Oo:{mark:xp,measure:xp},ua='FA "6.4.2"',nw=function(e){return Vu.mark("".concat(ua," ").concat(e," begins")),function(){return S1(e)}},S1=function(e){Vu.mark("".concat(ua," ").concat(e," ends")),Vu.measure("".concat(ua," ").concat(e),"".concat(ua," ").concat(e," begins"),"".concat(ua," ").concat(e," ends"))},xf={begin:nw,end:S1},ai=function(){};function wp(e){var t=e.getAttribute?e.getAttribute(Qn):null;return typeof t=="string"}function rw(e){var t=e.getAttribute?e.getAttribute(ff):null,n=e.getAttribute?e.getAttribute(df):null;return t&&n}function aw(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(A.replacementClass)}function ow(){if(A.autoReplaceSvg===!0)return oi.replace;var e=oi[A.autoReplaceSvg];return e||oi.replace}function iw(e){return Z.createElementNS("http://www.w3.org/2000/svg",e)}function lw(e){return Z.createElement(e)}function j1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?iw:lw:n;if(typeof e=="string")return Z.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(i){a.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){a.appendChild(j1(i,{ceFn:r}))}),a}function sw(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var oi={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(r){t.parentNode.insertBefore(j1(r),t)}),t.getAttribute(Qn)===null&&A.keepOriginalSource){var n=Z.createComment(sw(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~mf(t).indexOf(A.replacementClass))return oi.replace(e);var r=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var a=n[0].attributes.class.split(" ").reduce(function(i,l){return l===A.replacementClass||l.match(r)?i.toSvg.push(l):i.toNode.push(l),i},{toNode:[],toSvg:[]});n[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",a.toNode.join(" "))}var o=n.map(function(i){return io(i)}).join(`
`);t.setAttribute(Qn,""),t.innerHTML=o}};function kp(e){e()}function C1(e,t){var n=typeof t=="function"?t:ai;if(e.length===0)n();else{var r=kp;A.mutateApproach===d3&&(r=wn.requestAnimationFrame||kp),r(function(){var a=ow(),o=xf.begin("mutate");e.map(a),o(),n()})}}var wf=!1;function N1(){wf=!0}function Wu(){wf=!1}var Fi=null;function Sp(e){if(dp&&A.observeMutations){var t=e.treeCallback,n=t===void 0?ai:t,r=e.nodeCallback,a=r===void 0?ai:r,o=e.pseudoElementsCallback,i=o===void 0?ai:o,l=e.observeMutationsRoot,s=l===void 0?Z:l;Fi=new dp(function(c){if(!wf){var d=kn();Qr(c).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!wp(p.addedNodes[0])&&(A.searchPseudoElements&&i(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&A.searchPseudoElements&&i(p.target.parentNode),p.type==="attributes"&&wp(p.target)&&~b3.indexOf(p.attributeName))if(p.attributeName==="class"&&rw(p.target)){var m=Ll(mf(p.target)),b=m.prefix,y=m.iconName;p.target.setAttribute(ff,b||d),y&&p.target.setAttribute(df,y)}else aw(p.target)&&a(p.target)})}}),Xt&&Fi.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function uw(){Fi&&Fi.disconnect()}function cw(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var o=a.split(":"),i=o[0],l=o.slice(1);return i&&l.length>0&&(r[i]=l.join(":").trim()),r},{})),n}function fw(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Ll(mf(e));return a.prefix||(a.prefix=kn()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=V3(a.prefix,e.innerText)||yf(a.prefix,m1(e.innerText))),!a.iconName&&A.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function dw(e){var t=Qr(e.attributes).reduce(function(a,o){return a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return A.autoA11y&&(n?t["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(r||Xa()):(t["aria-hidden"]="true",t.focusable="false")),t}function pw(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Et,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=fw(e),r=n.iconName,a=n.prefix,o=n.rest,i=dw(e),l=$u("parseNodeAttributes",{},e),s=t.styleParser?cw(e):[];return _({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Et,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:s,attributes:i}},l)}var mw=mt.styles;function P1(e){var t=A.autoReplaceSvg==="nest"?jp(e,{styleParser:!1}):jp(e);return~t.extra.classes.indexOf(s1)?qt("generateLayersText",e,t):qt("generateSvgReplacementMutation",e,t)}var Sn=new Set;pf.map(function(e){Sn.add("fa-".concat(e))});Object.keys(Ya[K]).map(Sn.add.bind(Sn));Object.keys(Ya[ie]).map(Sn.add.bind(Sn));Sn=ao(Sn);function Cp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xt)return Promise.resolve();var n=Z.documentElement.classList,r=function(d){return n.add("".concat(pp,"-").concat(d))},a=function(d){return n.remove("".concat(pp,"-").concat(d))},o=A.autoFetchSvg?Sn:pf.map(function(d){return"fa-".concat(d)}).concat(Object.keys(mw));o.includes("fa")||o.push("fa");var i=[".".concat(s1,":not([").concat(Qn,"])")].concat(o.map(function(d){return".".concat(d,":not([").concat(Qn,"])")})).join(", ");if(i.length===0)return Promise.resolve();var l=[];try{l=Qr(e.querySelectorAll(i))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();var s=xf.begin("onTree"),c=l.reduce(function(d,p){try{var m=P1(p);m&&d.push(m)}catch(b){l1||b.name==="MissingIcon"&&console.error(b)}return d},[]);return new Promise(function(d,p){Promise.all(c).then(function(m){C1(m,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),s(),d()})}).catch(function(m){s(),p(m)})})}function hw(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;P1(e).then(function(n){n&&C1([n],t)})}function gw(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Fu(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Fu(a||{})),e(r,_(_({},n),{},{mask:a}))}}var yw=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?Et:n,a=t.symbol,o=a===void 0?!1:a,i=t.mask,l=i===void 0?null:i,s=t.maskId,c=s===void 0?null:s,d=t.title,p=d===void 0?null:d,m=t.titleId,b=m===void 0?null:m,y=t.classes,v=y===void 0?[]:y,S=t.attributes,h=S===void 0?{}:S,f=t.styles,g=f===void 0?{}:f;if(e){var x=e.prefix,w=e.iconName,C=e.icon;return Il(_({type:"icon"},e),function(){return Xn("beforeDOMElementCreation",{iconDefinition:e,params:t}),A.autoA11y&&(p?h["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(b||Xa()):(h["aria-hidden"]="true",h.focusable="false")),bf({icons:{main:Du(C),mask:l?Du(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:w,transform:_(_({},Et),r),symbol:o,title:p,maskId:c,titleId:b,extra:{attributes:h,styles:g,classes:v}})})}},vw={mixout:function(){return{icon:gw(yw)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Cp,e.nodeCallback=hw,e}}},provides:function(e){e.i2svg=function(t){var n=t.node,r=n===void 0?Z:n,a=t.callback,o=a===void 0?function(){}:a;return Cp(r,o)},e.generateSvgReplacementMutation=function(t,n){var r=n.iconName,a=n.title,o=n.titleId,i=n.prefix,l=n.transform,s=n.symbol,c=n.mask,d=n.maskId,p=n.extra;return new Promise(function(m,b){Promise.all([Uu(r,i),c.iconName?Uu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var v=uf(y,2),S=v[0],h=v[1];m([t,bf({icons:{main:S,mask:h},prefix:i,iconName:r,transform:l,symbol:s,maskId:d,title:a,titleId:o,extra:p,watchable:!0})])}).catch(b)})},e.generateAbstractIcon=function(t){var n=t.children,r=t.attributes,a=t.main,o=t.transform,i=t.styles,l=zl(i);l.length>0&&(r.style=l);var s;return hf(o)&&(s=qt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(s||a.icon),{children:n,attributes:r}}}},bw={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return Il({type:"layer"},function(){Xn("beforeDOMElementCreation",{assembler:e,params:t});var a=[];return e(function(o){Array.isArray(o)?o.map(function(i){a=a.concat(i.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers")].concat(ao(r)).join(" ")},children:a}]})}}}},xw={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,a=t.classes,o=a===void 0?[]:a,i=t.attributes,l=i===void 0?{}:i,s=t.styles,c=s===void 0?{}:s;return Il({type:"counter",content:e},function(){return Xn("beforeDOMElementCreation",{content:e,params:t}),J3({content:e.toString(),title:r,extra:{attributes:l,styles:c,classes:["".concat(A.cssPrefix,"-layers-counter")].concat(ao(o))}})})}}}},ww={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?Et:n,a=t.title,o=a===void 0?null:a,i=t.classes,l=i===void 0?[]:i,s=t.attributes,c=s===void 0?{}:s,d=t.styles,p=d===void 0?{}:d;return Il({type:"text",content:e},function(){return Xn("beforeDOMElementCreation",{content:e,params:t}),bp({content:e,transform:_(_({},Et),r),title:o,extra:{attributes:c,styles:p,classes:["".concat(A.cssPrefix,"-layers-text")].concat(ao(l))}})})}}},provides:function(e){e.generateLayersText=function(t,n){var r=n.title,a=n.transform,o=n.extra,i=null,l=null;if(a1){var s=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();i=c.width/s,l=c.height/s}return A.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,bp({content:t.innerHTML,width:i,height:l,transform:a,title:r,extra:o,watchable:!0})])}}},kw=new RegExp('"',"ug"),Np=[1105920,1112319];function Sw(e){var t=e.replace(kw,""),n=I3(t,0),r=n>=Np[0]&&n<=Np[1],a=t.length===2?t[0]===t[1]:!1;return{value:m1(a?t[0]:t),isSecondary:r||a}}function Pp(e,t){var n="".concat(f3).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var o=Qr(e.children),i=o.filter(function(k){return k.getAttribute(Iu)===t})[0],l=wn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(g3),c=l.getPropertyValue("font-weight"),d=l.getPropertyValue("content");if(i&&!s)return e.removeChild(i),r();if(s&&d!=="none"&&d!==""){var p=l.getPropertyValue("content"),m=~["Sharp"].indexOf(s[2])?ie:K,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Ha[m][s[2].toLowerCase()]:y3[m][c],y=Sw(p),v=y.value,S=y.isSecondary,h=s[0].startsWith("FontAwesome"),f=yf(b,v),g=f;if(h){var x=W3(v);x.iconName&&x.prefix&&(f=x.iconName,b=x.prefix)}if(f&&!S&&(!i||i.getAttribute(ff)!==b||i.getAttribute(df)!==g)){e.setAttribute(n,g),i&&e.removeChild(i);var w=pw(),C=w.extra;C.attributes[Iu]=t,Uu(f,b).then(function(k){var T=bf(_(_({},w),{},{icons:{main:k,mask:vf()},prefix:b,iconName:g,extra:C,watchable:!0})),D=Z.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(D,e.firstChild):e.appendChild(D),D.outerHTML=T.map(function(I){return io(I)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function jw(e){return Promise.all([Pp(e,"::before"),Pp(e,"::after")])}function Cw(e){return e.parentNode!==document.head&&!~p3.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Iu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ep(e){if(Xt)return new Promise(function(t,n){var r=Qr(e.querySelectorAll("*")).filter(Cw).map(jw),a=xf.begin("searchPseudoElements");N1(),Promise.all(r).then(function(){a(),Wu(),t()}).catch(function(){a(),Wu(),n()})})}var Nw={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Ep,e}}},provides:function(e){e.pseudoElements2svg=function(t){var n=t.node,r=n===void 0?Z:n;A.searchPseudoElements&&Ep(r)}}},_p=!1,Pw={mixout:function(){return{dom:{unwatch:function(){N1(),_p=!0}}}},hooks:function(){return{bootstrap:function(){Sp($u("mutationObserverCallbacks",{}))},noAuto:function(){uw()},watch:function(e){var t=e.observeMutationsRoot;_p?Wu():Sp($u("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},Op=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(n,r){var a=r.toLowerCase().split("-"),o=a[0],i=a.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},t)},Ew={mixout:function(){return{parse:{transform:function(e){return Op(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-transform");return n&&(e.transform=Op(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var n=t.main,r=t.transform,a=t.containerWidth,o=t.iconWidth,i={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),s="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(s," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},m={outer:i,inner:d,path:p};return{tag:"g",attributes:_({},m.outer),children:[{tag:"g",attributes:_({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:_(_({},n.icon.attributes),m.path)}]}]}}}},Ss={x:0,y:0,width:"100%",height:"100%"};function Tp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function _w(e){return e.tag==="g"?e.children:[e]}var Ow={hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-mask"),r=n?Ll(n.split(" ").map(function(a){return a.trim()})):vf();return r.prefix||(r.prefix=kn()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides:function(e){e.generateAbstractMask=function(t){var n=t.children,r=t.attributes,a=t.main,o=t.mask,i=t.maskId,l=t.transform,s=a.width,c=a.icon,d=o.width,p=o.icon,m=E3({transform:l,containerWidth:d,iconWidth:s}),b={tag:"rect",attributes:_(_({},Ss),{},{fill:"white"})},y=c.children?{children:c.children.map(Tp)}:{},v={tag:"g",attributes:_({},m.inner),children:[Tp(_({tag:c.tag,attributes:_(_({},c.attributes),m.path)},y))]},S={tag:"g",attributes:_({},m.outer),children:[v]},h="mask-".concat(i||Xa()),f="clip-".concat(i||Xa()),g={tag:"mask",attributes:_(_({},Ss),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,S]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:f},children:_w(p)},g]};return n.push(x,{tag:"rect",attributes:_({fill:"currentColor","clip-path":"url(#".concat(f,")"),mask:"url(#".concat(h,")")},Ss)}),{children:n,attributes:r}}}},Tw={provides:function(e){var t=!1;wn.matchMedia&&(t=wn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:_(_({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=_(_({},a),{},{attributeName:"opacity"}),i={tag:"circle",attributes:_(_({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:_(_({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:_(_({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:_(_({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:_(_({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:_(_({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:_(_({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Aw={hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},zw=[T3,vw,bw,xw,ww,Nw,Pw,Ew,Ow,Tw,Aw];H3(zw,{mixoutsTo:Je});Je.noAuto;Je.config;Je.library;Je.dom;var Bu=Je.parse;Je.findIconDefinition;Je.toHtml;var Rw=Je.icon;Je.layer;Je.text;Je.counter;var E1={exports:{}},Lw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Iw=Lw,Mw=Iw;function _1(){}function O1(){}O1.resetWarningCache=_1;var $w=function(){function e(r,a,o,i,l,s){if(s!==Mw){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:O1,resetWarningCache:_1};return n.PropTypes=n,n};E1.exports=$w();var Fw=E1.exports;const M=Lp(Fw);function Ap(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function un(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ap(Object(n),!0).forEach(function(r){yr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ap(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Di(e){"@babel/helpers - typeof";return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Di(e)}function yr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dw(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Uw(e,t){if(e==null)return{};var n=Dw(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Yu(e){return Vw(e)||Ww(e)||Bw(e)||Yw()}function Vw(e){if(Array.isArray(e))return Hu(e)}function Ww(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Bw(e,t){if(e){if(typeof e=="string")return Hu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hu(e,t)}}function Hu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Yw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hw(e){var t,n=e.beat,r=e.fade,a=e.beatFade,o=e.bounce,i=e.shake,l=e.flash,s=e.spin,c=e.spinPulse,d=e.spinReverse,p=e.pulse,m=e.fixedWidth,b=e.inverse,y=e.border,v=e.listItem,S=e.flip,h=e.size,f=e.rotation,g=e.pull,x=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":m,"fa-inverse":b,"fa-border":y,"fa-li":v,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},yr(t,"fa-".concat(h),typeof h<"u"&&h!==null),yr(t,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),yr(t,"fa-pull-".concat(g),typeof g<"u"&&g!==null),yr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(x).map(function(w){return x[w]?w:null}).filter(function(w){return w})}function qw(e){return e=e-0,e===e}function T1(e){return qw(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Qw=["style"];function Xw(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Kw(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=T1(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?t[Xw(a)]=o:t[a]=o,t},{})}function A1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return A1(e,s)}),a=Object.keys(t.attributes||{}).reduce(function(s,c){var d=t.attributes[c];switch(c){case"class":s.attrs.className=d,delete t.attributes.class;break;case"style":s.attrs.style=Kw(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?s.attrs[c.toLowerCase()]=d:s.attrs[T1(c)]=d}return s},{attrs:{}}),o=n.style,i=o===void 0?{}:o,l=Uw(n,Qw);return a.attrs.style=un(un({},a.attrs.style),i),e.apply(void 0,[t.tag,un(un({},a.attrs),l)].concat(Yu(r)))}var z1=!1;try{z1=!0}catch{}function Gw(){if(!z1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function zp(e){if(e&&Di(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Bu.icon)return Bu.icon(e);if(e===null)return null;if(e&&Di(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function js(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?yr({},e,t):{}}var ht=At.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,o=e.className,i=e.title,l=e.titleId,s=e.maskId,c=zp(n),d=js("classes",[].concat(Yu(Hw(e)),Yu(o.split(" ")))),p=js("transform",typeof e.transform=="string"?Bu.transform(e.transform):e.transform),m=js("mask",zp(r)),b=Rw(c,un(un(un(un({},d),p),m),{},{symbol:a,title:i,titleId:l,maskId:s}));if(!b)return Gw("Could not find icon",c),null;var y=b.abstract,v={ref:t};return Object.keys(e).forEach(function(S){ht.defaultProps.hasOwnProperty(S)||(v[S]=e[S])}),Zw(y[0],v)});ht.displayName="FontAwesomeIcon";ht.propTypes={beat:M.bool,border:M.bool,beatFade:M.bool,bounce:M.bool,className:M.string,fade:M.bool,flash:M.bool,mask:M.oneOfType([M.object,M.array,M.string]),maskId:M.string,fixedWidth:M.bool,inverse:M.bool,flip:M.oneOf([!0,!1,"horizontal","vertical","both"]),icon:M.oneOfType([M.object,M.array,M.string]),listItem:M.bool,pull:M.oneOf(["right","left"]),pulse:M.bool,rotation:M.oneOf([0,90,180,270]),shake:M.bool,size:M.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M.bool,spinPulse:M.bool,spinReverse:M.bool,symbol:M.oneOfType([M.bool,M.string]),title:M.string,titleId:M.string,transform:M.oneOfType([M.string,M.object]),swapOpacity:M.bool};ht.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Zw=A1.bind(null,At.createElement),Jw={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},e4={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},t4={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},n4={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]},r4={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};const a4="/LintaRahman.github.io-As-SafwahAcademy/assets/white-logo-feb8e269.png",wt=()=>u.jsx(u.Fragment,{children:u.jsxs("footer",{className:"footer",children:[u.jsx("div",{className:"container",children:u.jsxs("div",{className:"row",children:[u.jsx("div",{className:"footer-col",children:u.jsx("img",{src:a4,alt:""})}),u.jsxs("div",{className:"footer-col",children:[u.jsx("h4",{children:"Get in Touch"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx("a",{href:"Tel:07401353144",children:"Phone"})}),u.jsx("li",{children:u.jsx("a",{href:"mailto:info@safwaacademy.co.uk",children:"Email"})}),u.jsx("li",{children:u.jsx("a",{href:"https://api.whatsapp.com/send?phone=+447401353144",target:"_blank",children:"WhatsApp"})})]})]}),u.jsxs("div",{className:"footer-col",children:[u.jsx("h4",{children:"Institute"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx("a",{href:"/about",children:"About Us"})}),u.jsx("li",{children:u.jsx("a",{href:"/courses",children:"Our Courses"})}),u.jsx("li",{children:u.jsx("a",{href:"/termdates",target:"_blank",children:"Term Dates"})}),u.jsx("li",{children:u.jsx("a",{href:"/blog",children:"News"})})]})]}),u.jsxs("div",{className:"footer-col",children:[u.jsx("h4",{children:u.jsx("a",{href:"/policies",children:"Policies"})}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx("a",{href:"/policies/enrolment",children:"Enrolment Policy"})}),u.jsx("li",{children:u.jsx("a",{href:"/policies/uniform",children:"Uniform Policy"})}),u.jsx("li",{children:u.jsx("a",{href:"/policies/behaviour",children:"Behaviour Policy"})}),u.jsx("li",{children:u.jsx("a",{href:"/policies/privacy",children:"Privacy Policy"})}),u.jsx("li",{children:u.jsx("a",{href:"/policies/tncs",children:"Terms & Conditions"})})]})]}),u.jsxs("div",{className:"footer-col",children:[u.jsx("h4",{children:"Follow Us"}),u.jsxs("ul",{className:"social-links",children:[u.jsx("li",{children:u.jsx("a",{href:"#",children:u.jsx(ht,{icon:t4})})}),u.jsx("li",{children:u.jsx("a",{href:"#",children:u.jsx(ht,{icon:e4})})}),u.jsx("li",{children:u.jsx("a",{href:"#",children:u.jsx(ht,{icon:r4})})}),u.jsx("li",{children:u.jsx("a",{href:"#",children:u.jsx(ht,{icon:Jw})})})]})]})]})}),u.jsx("div",{className:"container",children:u.jsx("div",{className:"copyright",children:"Copyright ©2024 As-Safwah Academy | All Rights Reserved"})})]})}),o4="_name_ymalr_91",i4="_para_ymalr_105",l4="_subText_ymalr_119",s4="_myDot_ymalr_135",de={"section-three-main-div":"_section-three-main-div_ymalr_1","quotes-img-right":"_quotes-img-right_ymalr_21","quotes-img-left":"_quotes-img-left_ymalr_33","section-three-sub-div-one":"_section-three-sub-div-one_ymalr_43","main-quotes-div":"_main-quotes-div_ymalr_59","quotes-img":"_quotes-img_ymalr_21",name:o4,para:i4,subText:l4,myDot:s4,"myDot--active":"_myDot--active_ymalr_157","not-visible":"_not-visible_ymalr_165"},u4=5e3,c4=e=>{const{testimonialData:t}=e,n=j.useRef(null),r=j.useRef(null),a=j.useRef(null),[o,i]=j.useState(100),[l,s]=j.useState(0);j.useEffect(()=>i(u4),[]),j.useEffect(()=>(a.current=setTimeout(()=>s(p=>p===e.testimonialData.length-1?0:p+1),o),()=>clearTimeout(a.current)),[e.testimonialData.length,l,o]);const c=p=>{if(r.current!==null&&l===p){const m=[...n.current.children];return m.forEach((b,y)=>{document.querySelector(`.feedbackText--${y}`)&&document.querySelector(`.feedbackText--${y}`).classList.add(de["not-visible"])}),m[l+1].classList.remove(de["not-visible"]),de["myDot--active"]}},d=(p,m)=>{s(m),p.forEach((b,y)=>{document.querySelector(`.feedbackText--${y}`).classList.add(de["not-visible"]),document.querySelector(`.buttonDot${y}`).classList.remove(de["myDot--active"])}),document.querySelector(`.feedbackText--${m}`).classList.remove(de["not-visible"]),document.querySelector(`.buttonDot${m}`).classList.add(de["myDot--active"])};return u.jsxs("div",{className:`${de["section-three-main-div"]} testimonial`,children:[u.jsxs("div",{ref:n,className:de["section-three-sub-div-one"],children:[u.jsx("div",{className:`${de["quotes-img"]} ${de["quotes-img-right"]}`}),t.map((p,m)=>u.jsxs("div",{className:`feedbackText--${m} ${de["main-quotes-div"]} ${de["not-visible"]}`,children:[u.jsx("div",{className:de.name,children:p.name}),u.jsx("div",{className:de.para,children:p.type}),u.jsx("div",{className:de.subText,children:p.review})]},m)),u.jsx("div",{className:`${de["quotes-img"]} ${de["quotes-img-left"]}`})]}),u.jsx("div",{ref:r,children:t.map((p,m,b)=>u.jsx("div",{name:"change testimonial",className:`buttonDot${m} ${de.myDot} ${l===m?c(m):""}`,onClick:()=>d(b,m)},m))})]})},f4=At.memo(c4),Rp="/LintaRahman.github.io-As-SafwahAcademy/assets/Quran-c2b90ec4.png",R1="/LintaRahman.github.io-As-SafwahAcademy/assets/Arabic-3744b8e0.png",d4="/LintaRahman.github.io-As-SafwahAcademy/assets/Charity-7262dc06.png",p4="/LintaRahman.github.io-As-SafwahAcademy/assets/Ramadan-70992503.png",m4="/LintaRahman.github.io-As-SafwahAcademy/assets/Dates-83af5195.png",L1=[{id:"1",title:"Exploring the Beauty of Islamic Calligraphy",image:R1,time:"1 min read",date:"Nov 2023",summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus repellendus, voluptates ab, nesciunt minus eveniet, quaerat facere quidem tempore quos dolor tenetur. Iusto id maiores tempore cum. Earum, nulla tempore?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero vitae lectus tristique convallis. Proin quis facilisis tortor. Nullam ultricies erat sed nibh consectetur, at aliquet lectus accumsan."},{id:"2",title:"The Importance of Charity in Islam",image:d4,time:"1 min read",date:"Nov 2023",summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus repellendus, voluptates ab, nesciunt minus eveniet, quaerat facere quidem tempore quos dolor tenetur. Iusto id maiores tempore cum. Earum, nulla tempore?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero vitae lectus tristique convallis. Proin quis facilisis tortor. Nullam ultricies erat sed nibh consectetur, at aliquet lectus accumsan. Integer eu turpis ac urna viverra consequat. Nunc ac odio nec velit fermentum malesuada."},{id:"3",title:"Ramadan: A Month of Spiritual Reflection and Fasting",image:p4,time:"1 min read",date:"Nov 2023",summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus repellendus, voluptates ab, nesciunt minus eveniet, quaerat facere quidem tempore quos dolor tenetur. Iusto id maiores tempore cum. Earum, nulla tempore?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero vitae lectus tristique convallis. Proin quis facilisis tortor. Nullam ultricies erat sed nibh consectetur, at aliquet lectus accumsan. Integer eu turpis ac urna viverra consequat. Nunc ac odio nec velit fermentum malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus vestibulum ipsum non justo aliquam, vel venenatis justo efficitur."},{id:"4",title:"Significance of Prophetic Foods to health",image:m4,time:"1 min read",date:"Nov 2023",summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus repellendus, voluptates ab, nesciunt minus eveniet, quaerat facere quidem tempore quos dolor tenetur. Iusto id maiores tempore cum. Earum, nulla tempore?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero vitae lectus tristique convallis. Proin quis facilisis tortor. Nullam ultricies erat sed nibh consectetur, at aliquet lectus accumsan. Integer eu turpis ac urna viverra consequat. Nunc ac odio nec velit fermentum malesuada."}],h4=[{id:"1",name:"Ahmed Khan",type:"Parent",review:"I am very pleased with the quality of education my children receive at the Madrasah. The teachers are knowledgeable and dedicated, and the atmosphere promotes a love for learning and Islamic values."},{id:"2",name:"Fatima Ali",type:"Parent",review:"Enrolling my child in the Madrasah was one of the best decisions I've made. The curriculum is well-structured, and the staff ensures a nurturing environment. I appreciate the focus on both academic and moral development."},{id:"3",name:"Muhammad Patel",type:"Student",review:"The Madrasah has played a crucial role in shaping my character and instilling strong Islamic values. The variety of programs and extracurricular activities contribute to a holistic educational experience."}],g4="/LintaRahman.github.io-As-SafwahAcademy/assets/Quran2-b02374db.png",y4=()=>u.jsxs(u.Fragment,{children:[u.jsx(xt,{}),u.jsx(zt,{page:"home"}),u.jsxs("section",{className:"columns2",children:[u.jsx("div",{children:u.jsx(tr,{direction:"left",casecade:!0,children:u.jsx("img",{src:Rp})})}),u.jsx("div",{className:"col1",children:u.jsxs(tr,{direction:"up",casecade:!0,children:[u.jsx("h1",{children:"Welcome to As-Safwa Academy!"}),u.jsxs("p",{children:["As-Safwa Academy, established in November 2021, is a dedicated Madrasah committed to nurturing the intellectual and spiritual growth of students aged 4-16. Beyond its focus on foundational education, the academy extends its services to the broader community by offering courses for adults. Rooted in Islamic principles, As-Safwa Academy endeavors to impart comprehensive knowledge of the religion, fostering a strong connection to spirituality and creating a sense of community within the local Islamic population.",u.jsx("br",{}),u.jsx("a",{href:"\\about",children:u.jsx("button",{className:"bluebutton",children:"Learn More"})})]})]})})]}),u.jsxs("section",{className:"pgcontainer",style:{background:"#1c4943"},children:[u.jsx(tr,{direction:"up",casecade:!0}),u.jsx(tr,{direction:"right",casecade:!0,children:u.jsx(f4,{testimonialData:h4})})]}),u.jsx(ih,{to:"/courses",children:u.jsxs("section",{className:"pgcontainer",children:[u.jsx(tr,{direction:"up",casecade:!0,children:u.jsx("h1",{children:"What do we offer"})}),u.jsxs("div",{className:" content-section",children:[u.jsxs("div",{className:"overlayCard",children:[u.jsx("img",{src:g4,alt:""}),u.jsx("h2",{children:"Qur'an"}),u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"text",children:"Qur'an"})})]}),u.jsxs("div",{className:"overlayCard",children:[u.jsx("img",{src:Rp,alt:""}),u.jsx("h2",{children:"Islamic Studies"}),u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"text",children:"Islamic Studies"})})]}),u.jsxs("div",{className:"overlayCard",children:[u.jsx("img",{src:R1,alt:""}),u.jsx("h2",{children:"Arabic Language"}),u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"text",children:"Arabic Language"})})]})]})]})}),u.jsx(wt,{})]}),En="/LintaRahman.github.io-As-SafwahAcademy/assets/HeaderBg-51eb7f61.jpg",kf=({Data:e})=>{const t=Object.keys(e[0]);return u.jsxs("table",{children:[u.jsx("thead",{children:u.jsx("tr",{children:t.map(n=>u.jsx("th",{children:n},n))})}),u.jsx("tbody",{children:e.map((n,r)=>u.jsx("tr",{children:t.map(a=>u.jsx("td",{children:n[a]},a))},r))})]})},v4=[{Lesson:"Qur'an/Qaaidah",Content:[{Term:"Term 1",Content:`Makhraj Refinement
(theory & application)`},{Term:"Term 2",Content:`Rules of Madd
(theory & application)`},{Term:"Term 3",Content:`Rules of Ghunnah
(theory & application)`}],Summary:"Lorem Ipsum for Qur'an/Qaaidah Summary"},{Lesson:"Islamic Studies",Content:[{Term:"Term 1",Content:u.jsxs("ul",{children:[u.jsx("li",{children:"Tarbiyah: Character Building"}),u.jsx("li",{children:"Fiqh of Taharah and Salah"})]})},{Term:"Term 2",Content:u.jsxs("ul",{children:[u.jsx("li",{children:" Fiqh of Salah + Related Duas "}),u.jsx("li",{children:" Fiqh of Fasting"}),u.jsx("li",{children:" Who is Allah? (99 names)"})]})},{Term:"Term 3",Content:u.jsxs("ul",{children:[u.jsx("li",{children:" Aqidah: Articles of Faith"}),u.jsx("li",{children:" Who is Allah? (99 names) continued"}),u.jsx("li",{children:"Tarikh: Stories of the Prophets"}),u.jsx("li",{children:"End of Year activities"})]})}],Summary:"Lorem Ipsum for Islamic Studies Summary"},{Lesson:"Arabic Lesson",Content:[{}],Summary:"Students use the Safar Academy Arabic Handwriting books to develop their writing skills. "}],b4=[{Time:"9:00 AM - 10:35 AM",Type:"Period 1",Lesson:"Qaaidah/Qur'an Class"},{Time:"10:35 AM - 10:45 AM",Type:"Break",Lesson:"Indoors"},{Time:"10:45 AM - 11:45 AM",Type:"Period 2",Lesson:"Islamic Studies Class"},{Time:"11:45 AM - 12:10 AM",Type:"Break",Lesson:"Outdoors"},{Time:"12:15 AM - 01:00 PM",Type:"Period 3",Lesson:"Arabic Lesson"}],x4="/LintaRahman.github.io-As-SafwahAcademy/assets/As-Safwah_Logo-aca8343a.png",w4=()=>u.jsxs(u.Fragment,{children:[u.jsx(xt,{}),u.jsx(zt,{text:"About Us",img:En}),u.jsxs("section",{className:"pgcontainer columns2",children:[u.jsx("div",{children:u.jsx("img",{src:x4,alt:""})}),u.jsxs("div",{className:"col1",children:[u.jsx("h1",{children:"Our Institute"}),u.jsx("p",{children:"Safwa Academy was established in November 2021."}),u.jsxs("p",{children:[u.jsx("strong",{children:"Location:"})," Pimlico Academy, Lupus St, Pimlico, London SW1V 3AT"]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Phone:"})," 07_______"]}),u.jsxs("p",{children:[u.jsx("strong",{children:"E-mail:"}),"info@assafwahacademy.co.uk"]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Time:"})," 09:00AM - 01:00PM"]})]})]}),u.jsxs("section",{className:"pgcontainer",children:[u.jsx("h1",{children:"Class Timetable"}),u.jsx("p",{children:"Classes take place every Sunday at Pimlico Academy, 36 Lupus St, Pimlico, London SW1V 3AT."}),u.jsx("br",{}),u.jsx(kf,{Data:b4}),u.jsx("br",{}),u.jsxs("p",{children:["See ",u.jsx("a",{href:"/termdates",style:{color:"#1c4943",fontWeight:"600"},children:" Term Dates "})," for more information about term times."]})]}),u.jsxs("section",{className:"pgcontainer",children:[u.jsx("h1",{children:"Fees"}),u.jsx("p",{children:"The fees for the courses are as follows:"})]}),u.jsx(wt,{})]}),k4=()=>{};var S4={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},j4={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};const Cs={fontSize:"4rem",margin:"0 auto",color:"#021122"},C4=()=>u.jsxs(u.Fragment,{children:[u.jsx(xt,{}),u.jsx(zt,{text:"Get in Touch",img:En,page:"policy"}),u.jsxs("section",{className:"grid3col",children:[u.jsx("div",{className:"card",children:u.jsxs("a",{href:"tel:07401353144",children:[u.jsx(ht,{icon:S4,style:Cs}),u.jsx("h2",{children:"Phone"}),u.jsx("p",{children:"Call us on 07401353144"})]})}),u.jsx("div",{className:"card",children:u.jsxs("a",{href:"mailto:info@safwaacademy.co.uk",children:[u.jsx(ht,{icon:j4,style:Cs}),u.jsx("h2",{children:"Email"}),u.jsx("p",{children:"info@assafwaacademy.co.uk"})]})}),u.jsx("div",{className:"card",children:u.jsxs("a",{href:"#",children:[u.jsx(ht,{icon:n4,style:Cs}),u.jsx("h2",{children:"Whatsapp"}),u.jsx("p",{children:"Message us on Whatsapp."})]})})]}),u.jsx(wt,{})]}),N4=()=>u.jsxs(u.Fragment,{children:[u.jsx(xt,{}),u.jsx(wt,{})]}),I1=[{id:"uniform",title:"Uniform Policy",content:u.jsxs("section",{children:[u.jsxs("p",{children:[u.jsx("strong",{children:"Welcome to Safwa Academy!"})," Our uniform policy aims to create a sense of unity, modesty, and discipline among our students. All students, both children and adults, are required to adhere to the specified uniform guidelines outlined below."]}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Uniform Guidelines:"})}),u.jsx("p",{children:"The uniform for boys consists of:"}),u.jsxs("ul",{children:[u.jsx("li",{children:"White thobe"}),u.jsx("li",{children:"Navy blue or black jumper"})]}),u.jsx("p",{children:"The uniform for girls consists of:"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Black abayah"}),u.jsx("li",{children:"Black headscarf"}),u.jsx("li",{children:"Navy blue or black jumper"})]}),u.jsx("br",{}),u.jsx("p",{children:"All students are required to wear the complete uniform during class hours and any institute-related activities."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Modesty and Respect:"})}),u.jsx("p",{children:"We emphasize the values of modesty and respect for Islamic traditions. The uniform is a reflection of these principles, and students are expected to wear it with dignity and adherence to the guidelines."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Exceptions and Special Circumstances:"})}),u.jsx("p",{children:"Exceptions to the uniform policy must be approved by the administration in advance. If there are special circumstances preventing a student from wearing the prescribed uniform, please contact [your contact information] to discuss alternative arrangements."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Enforcement:"})}),u.jsx("p",{children:"Enforcement of the uniform policy is essential for maintaining a focused and respectful learning environment. Students not adhering to the uniform guidelines may face appropriate consequences, as determined by the institute's administration."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Contact Us:"})}),u.jsx("p",{children:"If you have any questions or concerns regarding the uniform policy, please contact us at [your contact information]."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"This Uniform Policy was last updated on [date]."})})]})},{id:"enrolment",title:"Enrolment Policy",content:"Enrolment at our Madrasah Islamic Institute is open to students of all backgrounds who are interested in gaining knowledge about Islam. To enroll, parents or guardians must complete the registration form and provide the necessary documentation. We welcome students of varying levels of Islamic knowledge and strive to create a supportive and inclusive learning environment. Enrolled students are expected to attend classes regularly and actively participate in the educational activities of the Madrasah."},{id:"behaviour",title:"Behaviour Policy",content:"The Madrasah emphasizes the importance of exemplary behavior in line with Islamic teachings. Students are expected to demonstrate respect for their teachers, fellow students, and all staff members. Any form of disruptive behavior, bullying, or disrespect will not be tolerated. The Madrasah aims to cultivate an environment of mutual respect, cooperation, and learning. Parents and guardians are encouraged to be actively involved in supporting positive behavior and reinforcing Islamic values at home."},{id:"tncs",title:"Terms & Conditions",content:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:u.jsx("strong",{children:"Terms and Conditions for As-Safwah Academy for Kids"})}),u.jsxs("p",{children:[u.jsx("strong",{children:"Last Updated:"})," [Date]"]}),u.jsx("p",{children:"Welcome to As-Safwah Academy for Kids. By using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully:"}),u.jsx("p",{children:u.jsx("strong",{children:"1. Registration and Eligibility:"})}),u.jsx("p",{children:"Parents or legal guardians may register children for As-Safwah Academy for Kids. By registering a child, you confirm that you have the legal authority to do so."}),u.jsx("p",{children:u.jsx("strong",{children:"2. Course Enrollment:"})}),u.jsx("p",{children:"Enrollment in specific courses is subject to availability. As-Safwah Academy for Kids reserves the right to modify or cancel courses at its discretion."}),u.jsx("p",{children:u.jsx("strong",{children:"3. Payment and Fees:"})}),u.jsx("p",{children:"Fees for courses are outlined during the registration process. Payments are non-refundable, except in cases where a course is canceled by As-Safwah Academy for Kids."}),u.jsx("p",{children:u.jsx("strong",{children:"4. Code of Conduct:"})}),u.jsx("p",{children:"Children are expected to behave respectfully and adhere to the code of conduct outlined by As-Safwah Academy for Kids. Any disruptive behavior may result in the child's removal from the course."}),u.jsx("p",{children:u.jsx("strong",{children:"5. Privacy Policy:"})}),u.jsxs("p",{children:["The ",u.jsx("strong",{children:"Privacy Policy"})," of As-Safwah Academy for Kids, as outlined separately, governs the collection and use of personal information."]}),u.jsx("p",{children:u.jsx("strong",{children:"6. Intellectual Property:"})}),u.jsx("p",{children:"All materials, including but not limited to course content, videos, and images, are the intellectual property of As-Safwah Academy for Kids and may not be reproduced or distributed without explicit permission."}),u.jsx("p",{children:u.jsx("strong",{children:"7. Termination:"})}),u.jsx("p",{children:"As-Safwah Academy for Kids reserves the right to terminate a child's enrollment in a course for violation of these terms and conditions or any disruptive behavior."}),u.jsx("p",{children:u.jsx("strong",{children:"8. Parental Involvement:"})}),u.jsx("p",{children:"Parents are encouraged to actively participate in their child's learning experience. Regular communication between parents and As-Safwah Academy for Kids is vital for the child's progress."}),u.jsx("p",{children:u.jsx("strong",{children:"9. Limitation of Liability:"})}),u.jsx("p",{children:"As-Safwah Academy for Kids is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services."}),u.jsx("p",{children:u.jsx("strong",{children:"10. Changes to Terms and Conditions:"})}),u.jsx("p",{children:"As-Safwah Academy for Kids reserves the right to update or modify these terms and conditions at any time. Any changes will be effective immediately upon posting on our website."}),u.jsx("p",{children:u.jsx("strong",{children:"11. Contact Us:"})}),u.jsx("p",{children:"If you have any questions or concerns about these Terms and Conditions, please contact us at [contact email/phone]."}),u.jsx("p",{children:"Thank you for choosing As-Safwah Academy for Kids."})]})},{id:"privacy",title:"Privacy Policy",content:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:u.jsx("strong",{children:"Introduction"})}),u.jsx("p",{children:"Welcome to Safwa Academy! This Privacy Notice explains how we collect, use, disclose, and safeguard your personal information. We are committed to protecting your privacy and ensuring the security of your data."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Information We Collect"})}),u.jsx("p",{children:"We may collect personal information from students and adults participating in our courses. This may include, but is not limited to, names, contact information, and any additional information required for course enrollment and administration."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"How We Use Your Information"})}),u.jsx("p",{children:"We use the collected information to:"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Facilitate course enrollment and administration."}),u.jsx("li",{children:"Communicate important updates and announcements."}),u.jsx("li",{children:"Ensure the safety and well-being of our students and participants."}),u.jsx("li",{children:"Improve our educational programs and services."})]}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Disclosure of Information"})}),u.jsx("p",{children:"We may share personal information with authorized staff members and instructors for the purpose of course management. We will not disclose your information to third parties without your consent, except as required by law."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Data Security"})}),u.jsx("p",{children:"We implement reasonable security measures to protect your personal information from unauthorized access and use. However, please be aware that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Your Choices"})}),u.jsx("p",{children:"You have the right to review, update, or delete your personal information. If you have any concerns about your privacy or wish to exercise your rights, please contact us at [your contact information]."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Changes to This Privacy Notice"})}),u.jsx("p",{children:"We reserve the right to update and modify this Privacy Notice. Any changes will be posted on our website, and the date of the last update will be indicated at the top of the notice."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Contact Us"})}),u.jsx("p",{children:"If you have any questions or concerns about this Privacy Notice, please contact us at [your contact information]."}),u.jsx("br",{}),u.jsx("p",{children:"This Privacy Notice was last updated on [date]."})]})}],P4=()=>u.jsxs(u.Fragment,{children:[u.jsx(xt,{}),u.jsx(zt,{text:"Our Policies",img:En}),u.jsx("section",{className:"pgcontainer policygrid",children:I1.map((e,t)=>u.jsx(ih,{to:`/policies/${e.id}`,children:u.jsxs("div",{className:"policybox col1",children:[u.jsx("h1",{children:e.title}),u.jsx("p",{style:{textAlign:"left"},children:e.content})]})}))}),u.jsx(wt,{})]}),E4=({policy:e})=>u.jsxs(u.Fragment,{children:[u.jsx(xt,{}),u.jsx(zt,{text:e.title,img:En,page:"policy"}),u.jsx("section",{className:"policyContainer",children:e.content}),u.jsx(wt,{})]}),_4=()=>{const{policyId:e}=Bc(),t=I1.find(n=>n.id===e);return t?u.jsx(E4,{policy:t}):u.jsx("div",{children:"Policy not found"})},O4=[{id:"class1",title:"Class 1",summary:"For boys and girls aged 4 to 9",content:u.jsx("p",{children:"The syllabus for class 1 ..."})},{id:"class2",title:"Class 2",summary:"For girls aged 10 to 12",content:u.jsx("p",{children:"The syllabus for class 1 ..."})},{id:"class3",title:"Class 3",summary:"For students aged 9 to 10",content:u.jsx("p",{children:"The syllabus for class 1 ..."})},{id:"class4",title:"Class 4",summary:"For boys aged 12 to 16",content:u.jsx("p",{children:"The syllabus for class 1 ..."})},{id:"class5",title:"Class 5",summary:"For girls aged 12 to 16",content:u.jsx("p",{children:"The syllabus for class 1 ..."})}],T4=qr.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.9;
  background: #1c4943;
  color: white;
  border-bottom: 2px solid white;
  outline: 0;
  ${({active:e})=>e&&`
    border: 0;
    opacity: 1;
  `}
  @media only screen and (max-width: 600px) {
    border-bottom: 0;
    ${({active:e})=>e&&`
    border: 2px solid #1c4943;
    opacity: 1;
  `}
  }
`,A4=qr.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`,z4=({types:e})=>{const[t,n]=j.useState(e[0].Lesson);return u.jsx(u.Fragment,{children:u.jsxs("div",{className:"tabcontainer",children:[u.jsx(A4,{children:e.map(r=>u.jsx(T4,{active:t===r.Lesson,onClick:()=>n(r.Lesson),children:r.Lesson},r.Lesson))}),u.jsx("p",{}),e.map(r=>t===r.Lesson&&u.jsxs("div",{className:"tabcontent",children:[u.jsx("p",{children:r.Summary}),u.jsx(kf,{Data:r.Content})]},r.Lesson+"-content"))]})})},R4=()=>u.jsxs(u.Fragment,{children:[u.jsx(xt,{}),u.jsx(zt,{text:"Course",img:En}),u.jsx("section",{className:"pgcontainer content-container",children:"Our institute holds classes for students aged 4-16 years old. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sapiente praesentium voluptas vel doloremque rerum quae velit, quas sed aut autem itaque quam voluptatibus laboriosam dolores repudiandae, alias nisi? Molestias."}),u.jsxs("section",{className:"pgcontainer",children:[u.jsx("h1",{children:"Curriculum"}),u.jsx(z4,{types:v4})]}),u.jsx(wt,{})]}),L4=({course:e})=>u.jsxs(u.Fragment,{children:[u.jsx(xt,{}),u.jsx(zt,{text:e.title,img:En}),u.jsxs("section",{className:"pgcontainer",children:[u.jsx("h1",{children:e.title}),e.content]}),u.jsx(wt,{})]}),I4=()=>{const{courseId:e}=Bc(),t=O4.find(n=>n.id===e);return t?u.jsx("div",{children:u.jsx(L4,{course:t})}):u.jsx("div",{children:"Policy not found"})},M4=()=>u.jsxs(u.Fragment,{children:[u.jsx(xt,{}),u.jsx(zt,{text:"Blog",img:En}),u.jsx("div",{className:"pgcontainer content-section",children:L1.map((e,t)=>u.jsx("div",{className:"card",children:u.jsxs("a",{href:`/blog/${e.id}`,children:[u.jsx("img",{src:e.image,alt:""}),u.jsx("h2",{children:e.title}),u.jsxs("p",{className:"subp",children:[e.time,u.jsx("span",{style:{float:"right",textAlign:"right"},children:e.date})]}),u.jsx("p",{children:e.summary})]})}))}),u.jsx(wt,{})]}),$4=({blog:e})=>u.jsxs(u.Fragment,{children:[u.jsx(xt,{scrollVal:0}),u.jsx("section",{className:"pgcontainer"}),u.jsx("section",{className:"pgcontainer",children:u.jsx("h1",{children:e.title})}),u.jsx(zt,{img:e.image}),u.jsx("div",{className:"pgcontainer",children:u.jsx("div",{children:e.content})}),u.jsx(wt,{})]}),F4=()=>{const{blogId:e}=Bc();console.log(e);const t=L1.find(n=>n.id===e);return t?u.jsx($4,{blog:t}):u.jsx("div",{children:"Blog not found"})},D4=[{name:"Term 1",start:"Sunday, 10th September 2023",end:"Sunday, 22nd October 2023",type:"Term time",duration:"(7 weeks)"},{name:"Half Term",start:"Sunday, 29th October 2023",end:"Sunday, 5th November 2023",type:"Autumn half-term break",duration:"(2 weeks)"},{name:"Term 2",start:"Sunday, 12th November 2023",end:"Sunday, 17th December 2023",type:"Term time",duration:"(6 weeks)"},{name:"Winter Break",start:"Sunday, 24th December 2023",end:"Sunday, 31st December 2023",type:"Winter break",duration:"(3 weeks)"},{name:"Term 3",start:"Sunday, 7th January 2024",end:"Sunday, 11th February 2024",type:"Term time",duration:"(6 weeks)"},{name:"Half Term",start:"Sunday, 18th February 2024",type:"Spring half-term break",duration:"(1 week)"},{name:"Term 4",start:"Sunday, 25th February 2024",end:"Sunday, 24th March 2024",type:"Term time",duration:"(5 weeks)"},{name:"Spring Break",start:"Sunday, 31st March 2024",end:"Sunday 14th April 2024",type:"Ramadan & Eid Holiday",duration:"(3 weeks)"},{name:"Term 5",start:"Sunday, 21st April 2024",end:"Sunday, 26th May 2024",type:"Term time",duration:"(6 weeks)"},{name:"Half Term",start:"Sunday, 2nd June 2024",type:"Summer half-term break",duration:"(1 week)"},{name:"Term 6",start:"Sunday, 9th June 2024",end:"Sunday, 14th July 2024",type:"Term time",duration:"(5 weeks)"}],U4=()=>u.jsxs(u.Fragment,{children:[u.jsx(xt,{}),u.jsx(zt,{text:"Term Dates",img:En,page:"policy"}),u.jsx("section",{className:"pgcontainer",children:u.jsx(kf,{Data:D4})}),u.jsx(wt,{})]}),V4=()=>u.jsx(rb,{children:u.jsxs(Gv,{children:[u.jsx(Be,{path:"/",element:u.jsx(y4,{})}),u.jsx(Be,{path:"/about",element:u.jsx(w4,{})}),u.jsx(Be,{path:"/register",element:u.jsx(k4,{})}),u.jsx(Be,{path:"/policies",element:u.jsx(P4,{})}),u.jsx(Be,{path:"/policies/:policyId",element:u.jsx(_4,{})}),u.jsx(Be,{path:"/courses",element:u.jsx(R4,{})}),u.jsx(Be,{path:"/courses/:courseId",element:u.jsx(I4,{})}),u.jsx(Be,{path:"/blog",element:u.jsx(M4,{})}),u.jsx(Be,{path:"/blog/:blogId",element:u.jsx(F4,{})}),u.jsx(Be,{path:"/contact",element:u.jsx(C4,{})}),u.jsx(Be,{path:"/sign-in",element:u.jsx(N4,{})}),u.jsx(Be,{path:"/termdates",element:u.jsx(U4,{})})]})});Ps.createRoot(document.getElementById("root")).render(u.jsx(At.StrictMode,{children:u.jsx(V4,{})}));

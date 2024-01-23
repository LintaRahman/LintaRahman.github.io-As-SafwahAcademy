function z1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function zp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Mp={exports:{}},Bo={},Fp={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=Symbol.for("react.element"),M1=Symbol.for("react.portal"),F1=Symbol.for("react.fragment"),D1=Symbol.for("react.strict_mode"),U1=Symbol.for("react.profiler"),B1=Symbol.for("react.provider"),W1=Symbol.for("react.context"),V1=Symbol.for("react.forward_ref"),Y1=Symbol.for("react.suspense"),H1=Symbol.for("react.memo"),Q1=Symbol.for("react.lazy"),Ef=Symbol.iterator;function X1(e){return e===null||typeof e!="object"?null:(e=Ef&&e[Ef]||e["@@iterator"],typeof e=="function"?e:null)}var Dp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Up=Object.assign,Bp={};function Dr(e,t,n){this.props=e,this.context=t,this.refs=Bp,this.updater=n||Dp}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wp(){}Wp.prototype=Dr.prototype;function Ku(e,t,n){this.props=e,this.context=t,this.refs=Bp,this.updater=n||Dp}var Gu=Ku.prototype=new Wp;Gu.constructor=Ku;Up(Gu,Dr.prototype);Gu.isPureReactComponent=!0;var jf=Array.isArray,Vp=Object.prototype.hasOwnProperty,qu={current:null},Yp={key:!0,ref:!0,__self:!0,__source:!0};function Hp(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Vp.call(t,r)&&!Yp.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Gi,type:e,key:a,ref:o,props:i,_owner:qu.current}}function K1(e,t){return{$$typeof:Gi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gi}function G1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pf=/\/+/g;function Ds(e,t){return typeof e=="object"&&e!==null&&e.key!=null?G1(""+e.key):t.toString(36)}function Fa(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Gi:case M1:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ds(o,0):r,jf(i)?(n="",e!=null&&(n=e.replace(Pf,"$&/")+"/"),Fa(i,t,n,"",function(c){return c})):i!=null&&(Zu(i)&&(i=K1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pf,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",jf(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+Ds(a,s);o+=Fa(a,t,n,l,i)}else if(l=X1(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+Ds(a,s++),o+=Fa(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ua(e,t,n){if(e==null)return e;var r=[],i=0;return Fa(e,r,"","",function(a){return t.call(n,a,i++)}),r}function q1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},Da={transition:null},Z1={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:Da,ReactCurrentOwner:qu};M.Children={map:ua,forEach:function(e,t,n){ua(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ua(e,function(){t++}),t},toArray:function(e){return ua(e,function(t){return t})||[]},only:function(e){if(!Zu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Dr;M.Fragment=F1;M.Profiler=U1;M.PureComponent=Ku;M.StrictMode=D1;M.Suspense=Y1;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z1;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Up({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=qu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Vp.call(t,l)&&!Yp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Gi,type:e.type,key:i,ref:a,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:W1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:B1,_context:e},e.Consumer=e};M.createElement=Hp;M.createFactory=function(e){var t=Hp.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:V1,render:e}};M.isValidElement=Zu;M.lazy=function(e){return{$$typeof:Q1,_payload:{_status:-1,_result:e},_init:q1}};M.memo=function(e,t){return{$$typeof:H1,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Da.transition;Da.transition={};try{e()}finally{Da.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return $e.current.useCallback(e,t)};M.useContext=function(e){return $e.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};M.useEffect=function(e,t){return $e.current.useEffect(e,t)};M.useId=function(){return $e.current.useId()};M.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return $e.current.useMemo(e,t)};M.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};M.useRef=function(e){return $e.current.useRef(e)};M.useState=function(e){return $e.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return $e.current.useTransition()};M.version="18.2.0";Fp.exports=M;var C=Fp.exports;const $t=zp(C),jl=z1({__proto__:null,default:$t},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J1=C,ev=Symbol.for("react.element"),tv=Symbol.for("react.fragment"),nv=Object.prototype.hasOwnProperty,rv=J1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iv={key:!0,ref:!0,__self:!0,__source:!0};function Qp(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)nv.call(t,r)&&!iv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ev,type:e,key:a,ref:o,props:i,_owner:rv.current}}Bo.Fragment=tv;Bo.jsx=Qp;Bo.jsxs=Qp;Mp.exports=Bo;var u=Mp.exports,Pl={},Xp={exports:{}},Ge={},Kp={exports:{}},Gp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,O){var I=_.length;_.push(O);e:for(;0<I;){var J=I-1>>>1,ie=_[J];if(0<i(ie,O))_[J]=O,_[I]=ie,I=J;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var O=_[0],I=_.pop();if(I!==O){_[0]=I;e:for(var J=0,ie=_.length,It=ie>>>1;J<It;){var Be=2*(J+1)-1,Gt=_[Be],We=Be+1,tt=_[We];if(0>i(Gt,I))We<ie&&0>i(tt,Gt)?(_[J]=tt,_[We]=I,J=We):(_[J]=Gt,_[Be]=I,J=Be);else if(We<ie&&0>i(tt,I))_[J]=tt,_[We]=I,J=We;else break e}}return O}function i(_,O){var I=_.sortIndex-O.sortIndex;return I!==0?I:_.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],c=[],f=1,p=null,m=3,g=!1,x=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(_){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=_)r(c),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(c)}}function w(_){if(y=!1,v(_),!x)if(n(l)!==null)x=!0,An(k);else{var O=n(c);O!==null&&et(w,O.startTime-_)}}function k(_,O){x=!1,y&&(y=!1,h(A),A=-1),g=!0;var I=m;try{for(v(O),p=n(l);p!==null&&(!(p.expirationTime>O)||_&&!Ue());){var J=p.callback;if(typeof J=="function"){p.callback=null,m=p.priorityLevel;var ie=J(p.expirationTime<=O);O=e.unstable_now(),typeof ie=="function"?p.callback=ie:p===n(l)&&r(l),v(O)}else r(l);p=n(l)}if(p!==null)var It=!0;else{var Be=n(c);Be!==null&&et(w,Be.startTime-O),It=!1}return It}finally{p=null,m=I,g=!1}}var E=!1,S=null,A=-1,D=5,L=-1;function Ue(){return!(e.unstable_now()-L<D)}function Nn(){if(S!==null){var _=e.unstable_now();L=_;var O=!0;try{O=S(!0,_)}finally{O?Tn():(E=!1,S=null)}}else E=!1}var Tn;if(typeof d=="function")Tn=function(){d(Nn)};else if(typeof MessageChannel<"u"){var sa=new MessageChannel,Ms=sa.port2;sa.port1.onmessage=Nn,Tn=function(){Ms.postMessage(null)}}else Tn=function(){b(Nn,0)};function An(_){S=_,E||(E=!0,Tn())}function et(_,O){A=b(function(){_(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,An(k))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var I=m;m=O;try{return _()}finally{m=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,O){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var I=m;m=_;try{return O()}finally{m=I}},e.unstable_scheduleCallback=function(_,O,I){var J=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?J+I:J):I=J,_){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=I+ie,_={id:f++,callback:O,priorityLevel:_,startTime:I,expirationTime:ie,sortIndex:-1},I>J?(_.sortIndex=I,t(c,_),n(l)===null&&_===n(c)&&(y?(h(A),A=-1):y=!0,et(w,I-J))):(_.sortIndex=ie,t(l,_),x||g||(x=!0,An(k))),_},e.unstable_shouldYield=Ue,e.unstable_wrapCallback=function(_){var O=m;return function(){var I=m;m=O;try{return _.apply(this,arguments)}finally{m=I}}}})(Gp);Kp.exports=Gp;var av=Kp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp=C,Ke=av;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zp=new Set,Si={};function qn(e,t){jr(e,t),jr(e+"Capture",t)}function jr(e,t){for(Si[e]=t,e=0;e<t.length;e++)Zp.add(t[e])}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_l=Object.prototype.hasOwnProperty,ov=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_f={},Nf={};function sv(e){return _l.call(Nf,e)?!0:_l.call(_f,e)?!1:ov.test(e)?Nf[e]=!0:(_f[e]=!0,!1)}function lv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function uv(e,t,n,r){if(t===null||typeof t>"u"||lv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ju=/[\-:]([a-z])/g;function ec(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ju,ec);Ce[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ju,ec);Ce[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ju,ec);Ce[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function tc(e,t,n,r){var i=Ce.hasOwnProperty(t)?Ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(uv(t,n,i,r)&&(n=null),r||i===null?sv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xt=qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ca=Symbol.for("react.element"),nr=Symbol.for("react.portal"),rr=Symbol.for("react.fragment"),nc=Symbol.for("react.strict_mode"),Nl=Symbol.for("react.profiler"),Jp=Symbol.for("react.provider"),em=Symbol.for("react.context"),rc=Symbol.for("react.forward_ref"),Tl=Symbol.for("react.suspense"),Al=Symbol.for("react.suspense_list"),ic=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),tm=Symbol.for("react.offscreen"),Tf=Symbol.iterator;function Kr(e){return e===null||typeof e!="object"?null:(e=Tf&&e[Tf]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Us;function ii(e){if(Us===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Us=t&&t[1]||""}return`
`+Us+e}var Bs=!1;function Ws(e,t){if(!e||Bs)return"";Bs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{Bs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ii(e):""}function cv(e){switch(e.tag){case 5:return ii(e.type);case 16:return ii("Lazy");case 13:return ii("Suspense");case 19:return ii("SuspenseList");case 0:case 2:case 15:return e=Ws(e.type,!1),e;case 11:return e=Ws(e.type.render,!1),e;case 1:return e=Ws(e.type,!0),e;default:return""}}function $l(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rr:return"Fragment";case nr:return"Portal";case Nl:return"Profiler";case nc:return"StrictMode";case Tl:return"Suspense";case Al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case em:return(e.displayName||"Context")+".Consumer";case Jp:return(e._context.displayName||"Context")+".Provider";case rc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ic:return t=e.displayName||null,t!==null?t:$l(e.type)||"Memo";case tn:t=e._payload,e=e._init;try{return $l(e(t))}catch{}}return null}function fv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $l(t);case 8:return t===nc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dv(e){var t=nm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fa(e){e._valueTracker||(e._valueTracker=dv(e))}function rm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=nm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ol(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Af(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function im(e,t){t=t.checked,t!=null&&tc(e,"checked",t,!1)}function Il(e,t){im(e,t);var n=xn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Rl(e,t.type,xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $f(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Rl(e,t,n){(t!=="number"||oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ai=Array.isArray;function yr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ll(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Of(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(ai(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xn(n)}}function am(e,t){var n=xn(t.value),r=xn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function If(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function om(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?om(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var da,sm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=da.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pv=["Webkit","ms","Moz","O"];Object.keys(ci).forEach(function(e){pv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ci[t]=ci[e]})});function lm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ci.hasOwnProperty(e)&&ci[e]?(""+t).trim():t+"px"}function um(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=lm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var mv=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ml(e,t){if(t){if(mv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Fl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dl=null;function ac(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ul=null,xr=null,wr=null;function Rf(e){if(e=Ji(e)){if(typeof Ul!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Qo(t),Ul(e.stateNode,e.type,t))}}function cm(e){xr?wr?wr.push(e):wr=[e]:xr=e}function fm(){if(xr){var e=xr,t=wr;if(wr=xr=null,Rf(e),t)for(e=0;e<t.length;e++)Rf(t[e])}}function dm(e,t){return e(t)}function pm(){}var Vs=!1;function mm(e,t,n){if(Vs)return e(t,n);Vs=!0;try{return dm(e,t,n)}finally{Vs=!1,(xr!==null||wr!==null)&&(pm(),fm())}}function Ci(e,t){var n=e.stateNode;if(n===null)return null;var r=Qo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Bl=!1;if(Ut)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){Bl=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Bl=!1}function hv(e,t,n,r,i,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var fi=!1,so=null,lo=!1,Wl=null,vv={onError:function(e){fi=!0,so=e}};function gv(e,t,n,r,i,a,o,s,l){fi=!1,so=null,hv.apply(vv,arguments)}function yv(e,t,n,r,i,a,o,s,l){if(gv.apply(this,arguments),fi){if(fi){var c=so;fi=!1,so=null}else throw Error(j(198));lo||(lo=!0,Wl=c)}}function Zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Lf(e){if(Zn(e)!==e)throw Error(j(188))}function xv(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Lf(i),e;if(a===r)return Lf(i),t;a=a.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function vm(e){return e=xv(e),e!==null?gm(e):null}function gm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gm(e);if(t!==null)return t;e=e.sibling}return null}var ym=Ke.unstable_scheduleCallback,zf=Ke.unstable_cancelCallback,wv=Ke.unstable_shouldYield,kv=Ke.unstable_requestPaint,se=Ke.unstable_now,Sv=Ke.unstable_getCurrentPriorityLevel,oc=Ke.unstable_ImmediatePriority,xm=Ke.unstable_UserBlockingPriority,uo=Ke.unstable_NormalPriority,bv=Ke.unstable_LowPriority,wm=Ke.unstable_IdlePriority,Wo=null,Nt=null;function Cv(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Wo,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:Pv,Ev=Math.log,jv=Math.LN2;function Pv(e){return e>>>=0,e===0?32:31-(Ev(e)/jv|0)|0}var pa=64,ma=4194304;function oi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function co(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=oi(s):(a&=o,a!==0&&(r=oi(a)))}else o=n&~i,o!==0?r=oi(o):a!==0&&(r=oi(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-vt(t),i=1<<n,r|=e[n],t&=~i;return r}function _v(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-vt(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=_v(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function Vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function km(){var e=pa;return pa<<=1,!(pa&4194240)&&(pa=64),e}function Ys(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=n}function Tv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-vt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function sc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-vt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var V=0;function Sm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bm,lc,Cm,Em,jm,Yl=!1,ha=[],cn=null,fn=null,dn=null,Ei=new Map,ji=new Map,rn=[],Av="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mf(e,t){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Ei.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(t.pointerId)}}function qr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ji(t),t!==null&&lc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $v(e,t,n,r,i){switch(t){case"focusin":return cn=qr(cn,e,t,n,r,i),!0;case"dragenter":return fn=qr(fn,e,t,n,r,i),!0;case"mouseover":return dn=qr(dn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Ei.set(a,qr(Ei.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,ji.set(a,qr(ji.get(a)||null,e,t,n,r,i)),!0}return!1}function Pm(e){var t=In(e.target);if(t!==null){var n=Zn(t);if(n!==null){if(t=n.tag,t===13){if(t=hm(n),t!==null){e.blockedOn=t,jm(e.priority,function(){Cm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ua(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Dl=r,n.target.dispatchEvent(r),Dl=null}else return t=Ji(n),t!==null&&lc(t),e.blockedOn=n,!1;t.shift()}return!0}function Ff(e,t,n){Ua(e)&&n.delete(t)}function Ov(){Yl=!1,cn!==null&&Ua(cn)&&(cn=null),fn!==null&&Ua(fn)&&(fn=null),dn!==null&&Ua(dn)&&(dn=null),Ei.forEach(Ff),ji.forEach(Ff)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,Yl||(Yl=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Ov)))}function Pi(e){function t(i){return Zr(i,e)}if(0<ha.length){Zr(ha[0],e);for(var n=1;n<ha.length;n++){var r=ha[n];r.blockedOn===e&&(r.blockedOn=null)}}for(cn!==null&&Zr(cn,e),fn!==null&&Zr(fn,e),dn!==null&&Zr(dn,e),Ei.forEach(t),ji.forEach(t),n=0;n<rn.length;n++)r=rn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)Pm(n),n.blockedOn===null&&rn.shift()}var kr=Xt.ReactCurrentBatchConfig,fo=!0;function Iv(e,t,n,r){var i=V,a=kr.transition;kr.transition=null;try{V=1,uc(e,t,n,r)}finally{V=i,kr.transition=a}}function Rv(e,t,n,r){var i=V,a=kr.transition;kr.transition=null;try{V=4,uc(e,t,n,r)}finally{V=i,kr.transition=a}}function uc(e,t,n,r){if(fo){var i=Hl(e,t,n,r);if(i===null)tl(e,t,r,po,n),Mf(e,r);else if($v(i,e,t,n,r))r.stopPropagation();else if(Mf(e,r),t&4&&-1<Av.indexOf(e)){for(;i!==null;){var a=Ji(i);if(a!==null&&bm(a),a=Hl(e,t,n,r),a===null&&tl(e,t,r,po,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else tl(e,t,r,null,n)}}var po=null;function Hl(e,t,n,r){if(po=null,e=ac(r),e=In(e),e!==null)if(t=Zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return po=e,null}function _m(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sv()){case oc:return 1;case xm:return 4;case uo:case bv:return 16;case wm:return 536870912;default:return 16}default:return 16}}var on=null,cc=null,Ba=null;function Nm(){if(Ba)return Ba;var e,t=cc,n=t.length,r,i="value"in on?on.value:on.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Ba=i.slice(e,1<r?1-r:void 0)}function Wa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function va(){return!0}function Df(){return!1}function qe(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?va:Df,this.isPropagationStopped=Df,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),t}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=qe(Ur),Zi=re({},Ur,{view:0,detail:0}),Lv=qe(Zi),Hs,Qs,Jr,Vo=re({},Zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Hs=e.screenX-Jr.screenX,Qs=e.screenY-Jr.screenY):Qs=Hs=0,Jr=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:Qs}}),Uf=qe(Vo),zv=re({},Vo,{dataTransfer:0}),Mv=qe(zv),Fv=re({},Zi,{relatedTarget:0}),Xs=qe(Fv),Dv=re({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),Uv=qe(Dv),Bv=re({},Ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wv=qe(Bv),Vv=re({},Ur,{data:0}),Bf=qe(Vv),Yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qv[e])?!!t[e]:!1}function dc(){return Xv}var Kv=re({},Zi,{key:function(e){if(e.key){var t=Yv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(e){return e.type==="keypress"?Wa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gv=qe(Kv),qv=re({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wf=qe(qv),Zv=re({},Zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),Jv=qe(Zv),eg=re({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),tg=qe(eg),ng=re({},Vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rg=qe(ng),ig=[9,13,27,32],pc=Ut&&"CompositionEvent"in window,di=null;Ut&&"documentMode"in document&&(di=document.documentMode);var ag=Ut&&"TextEvent"in window&&!di,Tm=Ut&&(!pc||di&&8<di&&11>=di),Vf=String.fromCharCode(32),Yf=!1;function Am(e,t){switch(e){case"keyup":return ig.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $m(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ir=!1;function og(e,t){switch(e){case"compositionend":return $m(t);case"keypress":return t.which!==32?null:(Yf=!0,Vf);case"textInput":return e=t.data,e===Vf&&Yf?null:e;default:return null}}function sg(e,t){if(ir)return e==="compositionend"||!pc&&Am(e,t)?(e=Nm(),Ba=cc=on=null,ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tm&&t.locale!=="ko"?null:t.data;default:return null}}var lg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lg[e.type]:t==="textarea"}function Om(e,t,n,r){cm(r),t=mo(t,"onChange"),0<t.length&&(n=new fc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pi=null,_i=null;function ug(e){Vm(e,0)}function Yo(e){var t=sr(e);if(rm(t))return e}function cg(e,t){if(e==="change")return t}var Im=!1;if(Ut){var Ks;if(Ut){var Gs="oninput"in document;if(!Gs){var Qf=document.createElement("div");Qf.setAttribute("oninput","return;"),Gs=typeof Qf.oninput=="function"}Ks=Gs}else Ks=!1;Im=Ks&&(!document.documentMode||9<document.documentMode)}function Xf(){pi&&(pi.detachEvent("onpropertychange",Rm),_i=pi=null)}function Rm(e){if(e.propertyName==="value"&&Yo(_i)){var t=[];Om(t,_i,e,ac(e)),mm(ug,t)}}function fg(e,t,n){e==="focusin"?(Xf(),pi=t,_i=n,pi.attachEvent("onpropertychange",Rm)):e==="focusout"&&Xf()}function dg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(_i)}function pg(e,t){if(e==="click")return Yo(t)}function mg(e,t){if(e==="input"||e==="change")return Yo(t)}function hg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:hg;function Ni(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_l.call(t,i)||!xt(e[i],t[i]))return!1}return!0}function Kf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gf(e,t){var n=Kf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kf(n)}}function Lm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zm(){for(var e=window,t=oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oo(e.document)}return t}function mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vg(e){var t=zm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lm(n.ownerDocument.documentElement,n)){if(r!==null&&mc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Gf(n,a);var o=Gf(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gg=Ut&&"documentMode"in document&&11>=document.documentMode,ar=null,Ql=null,mi=null,Xl=!1;function qf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xl||ar==null||ar!==oo(r)||(r=ar,"selectionStart"in r&&mc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mi&&Ni(mi,r)||(mi=r,r=mo(Ql,"onSelect"),0<r.length&&(t=new fc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ar)))}function ga(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var or={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},qs={},Mm={};Ut&&(Mm=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function Ho(e){if(qs[e])return qs[e];if(!or[e])return e;var t=or[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mm)return qs[e]=t[n];return e}var Fm=Ho("animationend"),Dm=Ho("animationiteration"),Um=Ho("animationstart"),Bm=Ho("transitionend"),Wm=new Map,Zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(e,t){Wm.set(e,t),qn(t,[e])}for(var Zs=0;Zs<Zf.length;Zs++){var Js=Zf[Zs],yg=Js.toLowerCase(),xg=Js[0].toUpperCase()+Js.slice(1);Cn(yg,"on"+xg)}Cn(Fm,"onAnimationEnd");Cn(Dm,"onAnimationIteration");Cn(Um,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(Bm,"onTransitionEnd");jr("onMouseEnter",["mouseout","mouseover"]);jr("onMouseLeave",["mouseout","mouseover"]);jr("onPointerEnter",["pointerout","pointerover"]);jr("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wg=new Set("cancel close invalid load scroll toggle".split(" ").concat(si));function Jf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,yv(r,t,void 0,e),e.currentTarget=null}function Vm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Jf(i,s,c),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,c=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Jf(i,s,c),a=l}}}if(lo)throw e=Wl,lo=!1,Wl=null,e}function X(e,t){var n=t[Jl];n===void 0&&(n=t[Jl]=new Set);var r=e+"__bubble";n.has(r)||(Ym(t,e,2,!1),n.add(r))}function el(e,t,n){var r=0;t&&(r|=4),Ym(n,e,r,t)}var ya="_reactListening"+Math.random().toString(36).slice(2);function Ti(e){if(!e[ya]){e[ya]=!0,Zp.forEach(function(n){n!=="selectionchange"&&(wg.has(n)||el(n,!1,e),el(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ya]||(t[ya]=!0,el("selectionchange",!1,t))}}function Ym(e,t,n,r){switch(_m(t)){case 1:var i=Iv;break;case 4:i=Rv;break;default:i=uc}n=i.bind(null,t,n,e),i=void 0,!Bl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function tl(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=In(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}mm(function(){var c=a,f=ac(n),p=[];e:{var m=Wm.get(e);if(m!==void 0){var g=fc,x=e;switch(e){case"keypress":if(Wa(n)===0)break e;case"keydown":case"keyup":g=Gv;break;case"focusin":x="focus",g=Xs;break;case"focusout":x="blur",g=Xs;break;case"beforeblur":case"afterblur":g=Xs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Jv;break;case Fm:case Dm:case Um:g=Uv;break;case Bm:g=tg;break;case"scroll":g=Lv;break;case"wheel":g=rg;break;case"copy":case"cut":case"paste":g=Wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Wf}var y=(t&4)!==0,b=!y&&e==="scroll",h=y?m!==null?m+"Capture":null:m;y=[];for(var d=c,v;d!==null;){v=d;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,h!==null&&(w=Ci(d,h),w!=null&&y.push(Ai(d,w,v)))),b)break;d=d.return}0<y.length&&(m=new g(m,x,null,n,f),p.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Dl&&(x=n.relatedTarget||n.fromElement)&&(In(x)||x[Bt]))break e;if((g||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=c,x=x?In(x):null,x!==null&&(b=Zn(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=c),g!==x)){if(y=Uf,w="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Wf,w="onPointerLeave",h="onPointerEnter",d="pointer"),b=g==null?m:sr(g),v=x==null?m:sr(x),m=new y(w,d+"leave",g,n,f),m.target=b,m.relatedTarget=v,w=null,In(f)===c&&(y=new y(h,d+"enter",x,n,f),y.target=v,y.relatedTarget=b,w=y),b=w,g&&x)t:{for(y=g,h=x,d=0,v=y;v;v=Jn(v))d++;for(v=0,w=h;w;w=Jn(w))v++;for(;0<d-v;)y=Jn(y),d--;for(;0<v-d;)h=Jn(h),v--;for(;d--;){if(y===h||h!==null&&y===h.alternate)break t;y=Jn(y),h=Jn(h)}y=null}else y=null;g!==null&&ed(p,m,g,y,!1),x!==null&&b!==null&&ed(p,b,x,y,!0)}}e:{if(m=c?sr(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var k=cg;else if(Hf(m))if(Im)k=mg;else{k=dg;var E=fg}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=pg);if(k&&(k=k(e,c))){Om(p,k,n,f);break e}E&&E(e,m,c),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&Rl(m,"number",m.value)}switch(E=c?sr(c):window,e){case"focusin":(Hf(E)||E.contentEditable==="true")&&(ar=E,Ql=c,mi=null);break;case"focusout":mi=Ql=ar=null;break;case"mousedown":Xl=!0;break;case"contextmenu":case"mouseup":case"dragend":Xl=!1,qf(p,n,f);break;case"selectionchange":if(gg)break;case"keydown":case"keyup":qf(p,n,f)}var S;if(pc)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else ir?Am(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Tm&&n.locale!=="ko"&&(ir||A!=="onCompositionStart"?A==="onCompositionEnd"&&ir&&(S=Nm()):(on=f,cc="value"in on?on.value:on.textContent,ir=!0)),E=mo(c,A),0<E.length&&(A=new Bf(A,e,null,n,f),p.push({event:A,listeners:E}),S?A.data=S:(S=$m(n),S!==null&&(A.data=S)))),(S=ag?og(e,n):sg(e,n))&&(c=mo(c,"onBeforeInput"),0<c.length&&(f=new Bf("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=S))}Vm(p,t)})}function Ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ci(e,n),a!=null&&r.unshift(Ai(e,a,i)),a=Ci(e,t),a!=null&&r.push(Ai(e,a,i))),e=e.return}return r}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ed(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,i?(l=Ci(n,a),l!=null&&o.unshift(Ai(n,l,s))):i||(l=Ci(n,a),l!=null&&o.push(Ai(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kg=/\r\n?/g,Sg=/\u0000|\uFFFD/g;function td(e){return(typeof e=="string"?e:""+e).replace(kg,`
`).replace(Sg,"")}function xa(e,t,n){if(t=td(t),td(e)!==t&&n)throw Error(j(425))}function ho(){}var Kl=null,Gl=null;function ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zl=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,nd=typeof Promise=="function"?Promise:void 0,Cg=typeof queueMicrotask=="function"?queueMicrotask:typeof nd<"u"?function(e){return nd.resolve(null).then(e).catch(Eg)}:Zl;function Eg(e){setTimeout(function(){throw e})}function nl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Pi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pi(t)}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Br=Math.random().toString(36).slice(2),Pt="__reactFiber$"+Br,$i="__reactProps$"+Br,Bt="__reactContainer$"+Br,Jl="__reactEvents$"+Br,jg="__reactListeners$"+Br,Pg="__reactHandles$"+Br;function In(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rd(e);e!==null;){if(n=e[Pt])return n;e=rd(e)}return t}e=n,n=e.parentNode}return null}function Ji(e){return e=e[Pt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Qo(e){return e[$i]||null}var eu=[],lr=-1;function En(e){return{current:e}}function q(e){0>lr||(e.current=eu[lr],eu[lr]=null,lr--)}function Q(e,t){lr++,eu[lr]=e.current,e.current=t}var wn={},Ne=En(wn),ze=En(!1),Vn=wn;function Pr(e,t){var n=e.type.contextTypes;if(!n)return wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Me(e){return e=e.childContextTypes,e!=null}function vo(){q(ze),q(Ne)}function id(e,t,n){if(Ne.current!==wn)throw Error(j(168));Q(Ne,t),Q(ze,n)}function Hm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,fv(e)||"Unknown",i));return re({},n,r)}function go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wn,Vn=Ne.current,Q(Ne,e),Q(ze,ze.current),!0}function ad(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Hm(e,t,Vn),r.__reactInternalMemoizedMergedChildContext=e,q(ze),q(Ne),Q(Ne,e)):q(ze),Q(ze,n)}var zt=null,Xo=!1,rl=!1;function Qm(e){zt===null?zt=[e]:zt.push(e)}function _g(e){Xo=!0,Qm(e)}function jn(){if(!rl&&zt!==null){rl=!0;var e=0,t=V;try{var n=zt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zt=null,Xo=!1}catch(i){throw zt!==null&&(zt=zt.slice(e+1)),ym(oc,jn),i}finally{V=t,rl=!1}}return null}var ur=[],cr=0,yo=null,xo=0,nt=[],rt=0,Yn=null,Mt=1,Ft="";function $n(e,t){ur[cr++]=xo,ur[cr++]=yo,yo=e,xo=t}function Xm(e,t,n){nt[rt++]=Mt,nt[rt++]=Ft,nt[rt++]=Yn,Yn=e;var r=Mt;e=Ft;var i=32-vt(r)-1;r&=~(1<<i),n+=1;var a=32-vt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mt=1<<32-vt(t)+i|n<<i|r,Ft=a+e}else Mt=1<<a|n<<i|r,Ft=e}function hc(e){e.return!==null&&($n(e,1),Xm(e,1,0))}function vc(e){for(;e===yo;)yo=ur[--cr],ur[cr]=null,xo=ur[--cr],ur[cr]=null;for(;e===Yn;)Yn=nt[--rt],nt[rt]=null,Ft=nt[--rt],nt[rt]=null,Mt=nt[--rt],nt[rt]=null}var Qe=null,He=null,ee=!1,pt=null;function Km(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function od(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,He=pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yn!==null?{id:Mt,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,He=null,!0):!1;default:return!1}}function tu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nu(e){if(ee){var t=He;if(t){var n=t;if(!od(e,t)){if(tu(e))throw Error(j(418));t=pn(n.nextSibling);var r=Qe;t&&od(e,t)?Km(r,n):(e.flags=e.flags&-4097|2,ee=!1,Qe=e)}}else{if(tu(e))throw Error(j(418));e.flags=e.flags&-4097|2,ee=!1,Qe=e}}}function sd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function wa(e){if(e!==Qe)return!1;if(!ee)return sd(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ql(e.type,e.memoizedProps)),t&&(t=He)){if(tu(e))throw Gm(),Error(j(418));for(;t;)Km(e,t),t=pn(t.nextSibling)}if(sd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=Qe?pn(e.stateNode.nextSibling):null;return!0}function Gm(){for(var e=He;e;)e=pn(e.nextSibling)}function _r(){He=Qe=null,ee=!1}function gc(e){pt===null?pt=[e]:pt.push(e)}var Ng=Xt.ReactCurrentBatchConfig;function ft(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var wo=En(null),ko=null,fr=null,yc=null;function xc(){yc=fr=ko=null}function wc(e){var t=wo.current;q(wo),e._currentValue=t}function ru(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sr(e,t){ko=e,yc=fr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(yc!==e)if(e={context:e,memoizedValue:t,next:null},fr===null){if(ko===null)throw Error(j(308));fr=e,ko.dependencies={lanes:0,firstContext:e}}else fr=fr.next=e;return t}var Rn=null;function kc(e){Rn===null?Rn=[e]:Rn.push(e)}function qm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,kc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Wt(e,r)}function Wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nn=!1;function Sc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Wt(e,n)}return i=r.interleaved,i===null?(t.next=t,kc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Wt(e,n)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sc(e,n)}}function ld(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function So(e,t,n,r){var i=e.updateQueue;nn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,c=l.next;l.next=null,o===null?a=c:o.next=c,o=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==o&&(s===null?f.firstBaseUpdate=c:s.next=c,f.lastBaseUpdate=l))}if(a!==null){var p=i.baseState;o=0,f=c=l=null,s=a;do{var m=s.lane,g=s.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,y=s;switch(m=t,g=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){p=x.call(g,p,m);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,m=typeof x=="function"?x.call(g,p,m):x,m==null)break e;p=re({},p,m);break e;case 2:nn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[s]:m.push(s))}else g={eventTime:g,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(c=f=g,l=p):f=f.next=g,o|=m;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(f===null&&(l=p),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Qn|=o,e.lanes=o,e.memoizedState=p}}function ud(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Jm=new qp.Component().refs;function iu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ko={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),i=vn(e),a=Dt(r,i);a.payload=t,n!=null&&(a.callback=n),t=mn(e,a,i),t!==null&&(gt(t,e,i,r),Va(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),i=vn(e),a=Dt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=mn(e,a,i),t!==null&&(gt(t,e,i,r),Va(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=vn(e),i=Dt(n,r);i.tag=2,t!=null&&(i.callback=t),t=mn(e,i,r),t!==null&&(gt(t,e,r,n),Va(t,e,r))}};function cd(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ni(n,r)||!Ni(i,a):!0}function eh(e,t,n){var r=!1,i=wn,a=t.contextType;return typeof a=="object"&&a!==null?a=ot(a):(i=Me(t)?Vn:Ne.current,r=t.contextTypes,a=(r=r!=null)?Pr(e,i):wn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ko,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function fd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ko.enqueueReplaceState(t,t.state,null)}function au(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Jm,Sc(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=ot(a):(a=Me(t)?Vn:Ne.current,i.context=Pr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(iu(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ko.enqueueReplaceState(i,i.state,null),So(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ei(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;s===Jm&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function ka(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function dd(e){var t=e._init;return t(e._payload)}function th(e){function t(h,d){if(e){var v=h.deletions;v===null?(h.deletions=[d],h.flags|=16):v.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=gn(h,d),h.index=0,h.sibling=null,h}function a(h,d,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<d?(h.flags|=2,d):v):(h.flags|=2,d)):(h.flags|=1048576,d)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,d,v,w){return d===null||d.tag!==6?(d=cl(v,h.mode,w),d.return=h,d):(d=i(d,v),d.return=h,d)}function l(h,d,v,w){var k=v.type;return k===rr?f(h,d,v.props.children,w,v.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===tn&&dd(k)===d.type)?(w=i(d,v.props),w.ref=ei(h,d,v),w.return=h,w):(w=Ga(v.type,v.key,v.props,null,h.mode,w),w.ref=ei(h,d,v),w.return=h,w)}function c(h,d,v,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==v.containerInfo||d.stateNode.implementation!==v.implementation?(d=fl(v,h.mode,w),d.return=h,d):(d=i(d,v.children||[]),d.return=h,d)}function f(h,d,v,w,k){return d===null||d.tag!==7?(d=Un(v,h.mode,w,k),d.return=h,d):(d=i(d,v),d.return=h,d)}function p(h,d,v){if(typeof d=="string"&&d!==""||typeof d=="number")return d=cl(""+d,h.mode,v),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ca:return v=Ga(d.type,d.key,d.props,null,h.mode,v),v.ref=ei(h,null,d),v.return=h,v;case nr:return d=fl(d,h.mode,v),d.return=h,d;case tn:var w=d._init;return p(h,w(d._payload),v)}if(ai(d)||Kr(d))return d=Un(d,h.mode,v,null),d.return=h,d;ka(h,d)}return null}function m(h,d,v,w){var k=d!==null?d.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:s(h,d,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ca:return v.key===k?l(h,d,v,w):null;case nr:return v.key===k?c(h,d,v,w):null;case tn:return k=v._init,m(h,d,k(v._payload),w)}if(ai(v)||Kr(v))return k!==null?null:f(h,d,v,w,null);ka(h,v)}return null}function g(h,d,v,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(v)||null,s(d,h,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ca:return h=h.get(w.key===null?v:w.key)||null,l(d,h,w,k);case nr:return h=h.get(w.key===null?v:w.key)||null,c(d,h,w,k);case tn:var E=w._init;return g(h,d,v,E(w._payload),k)}if(ai(w)||Kr(w))return h=h.get(v)||null,f(d,h,w,k,null);ka(d,w)}return null}function x(h,d,v,w){for(var k=null,E=null,S=d,A=d=0,D=null;S!==null&&A<v.length;A++){S.index>A?(D=S,S=null):D=S.sibling;var L=m(h,S,v[A],w);if(L===null){S===null&&(S=D);break}e&&S&&L.alternate===null&&t(h,S),d=a(L,d,A),E===null?k=L:E.sibling=L,E=L,S=D}if(A===v.length)return n(h,S),ee&&$n(h,A),k;if(S===null){for(;A<v.length;A++)S=p(h,v[A],w),S!==null&&(d=a(S,d,A),E===null?k=S:E.sibling=S,E=S);return ee&&$n(h,A),k}for(S=r(h,S);A<v.length;A++)D=g(S,h,A,v[A],w),D!==null&&(e&&D.alternate!==null&&S.delete(D.key===null?A:D.key),d=a(D,d,A),E===null?k=D:E.sibling=D,E=D);return e&&S.forEach(function(Ue){return t(h,Ue)}),ee&&$n(h,A),k}function y(h,d,v,w){var k=Kr(v);if(typeof k!="function")throw Error(j(150));if(v=k.call(v),v==null)throw Error(j(151));for(var E=k=null,S=d,A=d=0,D=null,L=v.next();S!==null&&!L.done;A++,L=v.next()){S.index>A?(D=S,S=null):D=S.sibling;var Ue=m(h,S,L.value,w);if(Ue===null){S===null&&(S=D);break}e&&S&&Ue.alternate===null&&t(h,S),d=a(Ue,d,A),E===null?k=Ue:E.sibling=Ue,E=Ue,S=D}if(L.done)return n(h,S),ee&&$n(h,A),k;if(S===null){for(;!L.done;A++,L=v.next())L=p(h,L.value,w),L!==null&&(d=a(L,d,A),E===null?k=L:E.sibling=L,E=L);return ee&&$n(h,A),k}for(S=r(h,S);!L.done;A++,L=v.next())L=g(S,h,A,L.value,w),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?A:L.key),d=a(L,d,A),E===null?k=L:E.sibling=L,E=L);return e&&S.forEach(function(Nn){return t(h,Nn)}),ee&&$n(h,A),k}function b(h,d,v,w){if(typeof v=="object"&&v!==null&&v.type===rr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ca:e:{for(var k=v.key,E=d;E!==null;){if(E.key===k){if(k=v.type,k===rr){if(E.tag===7){n(h,E.sibling),d=i(E,v.props.children),d.return=h,h=d;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===tn&&dd(k)===E.type){n(h,E.sibling),d=i(E,v.props),d.ref=ei(h,E,v),d.return=h,h=d;break e}n(h,E);break}else t(h,E);E=E.sibling}v.type===rr?(d=Un(v.props.children,h.mode,w,v.key),d.return=h,h=d):(w=Ga(v.type,v.key,v.props,null,h.mode,w),w.ref=ei(h,d,v),w.return=h,h=w)}return o(h);case nr:e:{for(E=v.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===v.containerInfo&&d.stateNode.implementation===v.implementation){n(h,d.sibling),d=i(d,v.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=fl(v,h.mode,w),d.return=h,h=d}return o(h);case tn:return E=v._init,b(h,d,E(v._payload),w)}if(ai(v))return x(h,d,v,w);if(Kr(v))return y(h,d,v,w);ka(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,v),d.return=h,h=d):(n(h,d),d=cl(v,h.mode,w),d.return=h,h=d),o(h)):n(h,d)}return b}var Nr=th(!0),nh=th(!1),ea={},Tt=En(ea),Oi=En(ea),Ii=En(ea);function Ln(e){if(e===ea)throw Error(j(174));return e}function bc(e,t){switch(Q(Ii,t),Q(Oi,e),Q(Tt,ea),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zl(t,e)}q(Tt),Q(Tt,t)}function Tr(){q(Tt),q(Oi),q(Ii)}function rh(e){Ln(Ii.current);var t=Ln(Tt.current),n=zl(t,e.type);t!==n&&(Q(Oi,e),Q(Tt,n))}function Cc(e){Oi.current===e&&(q(Tt),q(Oi))}var te=En(0);function bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var il=[];function Ec(){for(var e=0;e<il.length;e++)il[e]._workInProgressVersionPrimary=null;il.length=0}var Ya=Xt.ReactCurrentDispatcher,al=Xt.ReactCurrentBatchConfig,Hn=0,ne=null,pe=null,ge=null,Co=!1,hi=!1,Ri=0,Tg=0;function Ee(){throw Error(j(321))}function jc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function Pc(e,t,n,r,i,a){if(Hn=a,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ya.current=e===null||e.memoizedState===null?Ig:Rg,e=n(r,i),hi){a=0;do{if(hi=!1,Ri=0,25<=a)throw Error(j(301));a+=1,ge=pe=null,t.updateQueue=null,Ya.current=Lg,e=n(r,i)}while(hi)}if(Ya.current=Eo,t=pe!==null&&pe.next!==null,Hn=0,ge=pe=ne=null,Co=!1,t)throw Error(j(300));return e}function _c(){var e=Ri!==0;return Ri=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ne.memoizedState=ge=e:ge=ge.next=e,ge}function st(){if(pe===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=ge===null?ne.memoizedState:ge.next;if(t!==null)ge=t,pe=e;else{if(e===null)throw Error(j(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ge===null?ne.memoizedState=ge=e:ge=ge.next=e}return ge}function Li(e,t){return typeof t=="function"?t(e):t}function ol(e){var t=st(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=pe,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,c=a;do{var f=c.lane;if((Hn&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=p,o=r):l=l.next=p,ne.lanes|=f,Qn|=f}c=c.next}while(c!==null&&c!==a);l===null?o=r:l.next=s,xt(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,ne.lanes|=a,Qn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function sl(e){var t=st(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);xt(a,t.memoizedState)||(Re=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ih(){}function ah(e,t){var n=ne,r=st(),i=t(),a=!xt(r.memoizedState,i);if(a&&(r.memoizedState=i,Re=!0),r=r.queue,Nc(lh.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,zi(9,sh.bind(null,n,r,i,t),void 0,null),xe===null)throw Error(j(349));Hn&30||oh(n,t,i)}return i}function oh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sh(e,t,n,r){t.value=n,t.getSnapshot=r,uh(t)&&ch(e)}function lh(e,t,n){return n(function(){uh(t)&&ch(e)})}function uh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function ch(e){var t=Wt(e,1);t!==null&&gt(t,e,1,-1)}function pd(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:e},t.queue=e,e=e.dispatch=Og.bind(null,ne,e),[t.memoizedState,e]}function zi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fh(){return st().memoizedState}function Ha(e,t,n,r){var i=bt();ne.flags|=e,i.memoizedState=zi(1|t,n,void 0,r===void 0?null:r)}function Go(e,t,n,r){var i=st();r=r===void 0?null:r;var a=void 0;if(pe!==null){var o=pe.memoizedState;if(a=o.destroy,r!==null&&jc(r,o.deps)){i.memoizedState=zi(t,n,a,r);return}}ne.flags|=e,i.memoizedState=zi(1|t,n,a,r)}function md(e,t){return Ha(8390656,8,e,t)}function Nc(e,t){return Go(2048,8,e,t)}function dh(e,t){return Go(4,2,e,t)}function ph(e,t){return Go(4,4,e,t)}function mh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hh(e,t,n){return n=n!=null?n.concat([e]):null,Go(4,4,mh.bind(null,t,e),n)}function Tc(){}function vh(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gh(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function yh(e,t,n){return Hn&21?(xt(n,t)||(n=km(),ne.lanes|=n,Qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function Ag(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=al.transition;al.transition={};try{e(!1),t()}finally{V=n,al.transition=r}}function xh(){return st().memoizedState}function $g(e,t,n){var r=vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wh(e))kh(t,n);else if(n=qm(e,t,n,r),n!==null){var i=Ae();gt(n,e,r,i),Sh(n,t,r)}}function Og(e,t,n){var r=vn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wh(e))kh(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,xt(s,o)){var l=t.interleaved;l===null?(i.next=i,kc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=qm(e,t,i,r),n!==null&&(i=Ae(),gt(n,e,r,i),Sh(n,t,r))}}function wh(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function kh(e,t){hi=Co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sc(e,n)}}var Eo={readContext:ot,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},Ig={readContext:ot,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:md,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ha(4194308,4,mh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ha(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ha(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$g.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:pd,useDebugValue:Tc,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=pd(!1),t=e[0];return e=Ag.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,i=bt();if(ee){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),xe===null)throw Error(j(349));Hn&30||oh(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,md(lh.bind(null,r,a,e),[e]),r.flags|=2048,zi(9,sh.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=bt(),t=xe.identifierPrefix;if(ee){var n=Ft,r=Mt;n=(r&~(1<<32-vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ri++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Tg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Rg={readContext:ot,useCallback:vh,useContext:ot,useEffect:Nc,useImperativeHandle:hh,useInsertionEffect:dh,useLayoutEffect:ph,useMemo:gh,useReducer:ol,useRef:fh,useState:function(){return ol(Li)},useDebugValue:Tc,useDeferredValue:function(e){var t=st();return yh(t,pe.memoizedState,e)},useTransition:function(){var e=ol(Li)[0],t=st().memoizedState;return[e,t]},useMutableSource:ih,useSyncExternalStore:ah,useId:xh,unstable_isNewReconciler:!1},Lg={readContext:ot,useCallback:vh,useContext:ot,useEffect:Nc,useImperativeHandle:hh,useInsertionEffect:dh,useLayoutEffect:ph,useMemo:gh,useReducer:sl,useRef:fh,useState:function(){return sl(Li)},useDebugValue:Tc,useDeferredValue:function(e){var t=st();return pe===null?t.memoizedState=e:yh(t,pe.memoizedState,e)},useTransition:function(){var e=sl(Li)[0],t=st().memoizedState;return[e,t]},useMutableSource:ih,useSyncExternalStore:ah,useId:xh,unstable_isNewReconciler:!1};function Ar(e,t){try{var n="",r=t;do n+=cv(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function ll(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ou(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zg=typeof WeakMap=="function"?WeakMap:Map;function bh(e,t,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Po||(Po=!0,vu=r),ou(e,t)},n}function Ch(e,t,n){n=Dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ou(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ou(e,t),typeof r!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function hd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=qg.bind(null,e,t,n),t.then(e,e))}function vd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dt(-1,1),t.tag=2,mn(n,t,1))),n.lanes|=1),e)}var Mg=Xt.ReactCurrentOwner,Re=!1;function Te(e,t,n,r){t.child=e===null?nh(t,null,n,r):Nr(t,e.child,n,r)}function yd(e,t,n,r,i){n=n.render;var a=t.ref;return Sr(t,i),r=Pc(e,t,n,r,a,i),n=_c(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vt(e,t,i)):(ee&&n&&hc(t),t.flags|=1,Te(e,t,r,i),t.child)}function xd(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Mc(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Eh(e,t,a,r,i)):(e=Ga(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ni,n(o,r)&&e.ref===t.ref)return Vt(e,t,i)}return t.flags|=1,e=gn(a,r),e.ref=t.ref,e.return=t,t.child=e}function Eh(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ni(a,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,Vt(e,t,i)}return su(e,t,n,r,i)}function jh(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(pr,Ye),Ye|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(pr,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Q(pr,Ye),Ye|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Q(pr,Ye),Ye|=r;return Te(e,t,i,n),t.child}function Ph(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function su(e,t,n,r,i){var a=Me(n)?Vn:Ne.current;return a=Pr(t,a),Sr(t,i),n=Pc(e,t,n,r,a,i),r=_c(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vt(e,t,i)):(ee&&r&&hc(t),t.flags|=1,Te(e,t,n,i),t.child)}function wd(e,t,n,r,i){if(Me(n)){var a=!0;go(t)}else a=!1;if(Sr(t,i),t.stateNode===null)Qa(e,t),eh(t,n,r),au(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ot(c):(c=Me(n)?Vn:Ne.current,c=Pr(t,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==c)&&fd(t,o,r,c),nn=!1;var m=t.memoizedState;o.state=m,So(t,r,o,i),l=t.memoizedState,s!==r||m!==l||ze.current||nn?(typeof f=="function"&&(iu(t,n,f,r),l=t.memoizedState),(s=nn||cd(t,n,s,r,m,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Zm(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ft(t.type,s),o.props=c,p=t.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ot(l):(l=Me(n)?Vn:Ne.current,l=Pr(t,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==p||m!==l)&&fd(t,o,r,l),nn=!1,m=t.memoizedState,o.state=m,So(t,r,o,i);var x=t.memoizedState;s!==p||m!==x||ze.current||nn?(typeof g=="function"&&(iu(t,n,g,r),x=t.memoizedState),(c=nn||cd(t,n,c,r,m,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return lu(e,t,n,r,a,i)}function lu(e,t,n,r,i,a){Ph(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&ad(t,n,!1),Vt(e,t,a);r=t.stateNode,Mg.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Nr(t,e.child,null,a),t.child=Nr(t,null,s,a)):Te(e,t,s,a),t.memoizedState=r.state,i&&ad(t,n,!0),t.child}function _h(e){var t=e.stateNode;t.pendingContext?id(e,t.pendingContext,t.pendingContext!==t.context):t.context&&id(e,t.context,!1),bc(e,t.containerInfo)}function kd(e,t,n,r,i){return _r(),gc(i),t.flags|=256,Te(e,t,n,r),t.child}var uu={dehydrated:null,treeContext:null,retryLane:0};function cu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nh(e,t,n){var r=t.pendingProps,i=te.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Q(te,i&1),e===null)return nu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Jo(o,r,0,null),e=Un(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=cu(n),t.memoizedState=uu,e):Ac(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Fg(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=gn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=gn(s,a):(a=Un(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?cu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=uu,r}return a=e.child,e=a.sibling,r=gn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ac(e,t){return t=Jo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Sa(e,t,n,r){return r!==null&&gc(r),Nr(t,e.child,null,n),e=Ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fg(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=ll(Error(j(422))),Sa(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Jo({mode:"visible",children:r.children},i,0,null),a=Un(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Nr(t,e.child,null,o),t.child.memoizedState=cu(o),t.memoizedState=uu,a);if(!(t.mode&1))return Sa(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(j(419)),r=ll(a,r,void 0),Sa(e,t,o,r)}if(s=(o&e.childLanes)!==0,Re||s){if(r=xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Wt(e,i),gt(r,e,i,-1))}return zc(),r=ll(Error(j(421))),Sa(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Zg.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,He=pn(i.nextSibling),Qe=t,ee=!0,pt=null,e!==null&&(nt[rt++]=Mt,nt[rt++]=Ft,nt[rt++]=Yn,Mt=e.id,Ft=e.overflow,Yn=t),t=Ac(t,r.children),t.flags|=4096,t)}function Sd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ru(e.return,t,n)}function ul(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Th(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Te(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sd(e,n,t);else if(e.tag===19)Sd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&bo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ul(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ul(t,!0,n,null,a);break;case"together":ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dg(e,t,n){switch(t.tag){case 3:_h(t),_r();break;case 5:rh(t);break;case 1:Me(t.type)&&go(t);break;case 4:bc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Q(wo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?Nh(e,t,n):(Q(te,te.current&1),e=Vt(e,t,n),e!==null?e.sibling:null);Q(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Th(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,jh(e,t,n)}return Vt(e,t,n)}var Ah,fu,$h,Oh;Ah=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fu=function(){};$h=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ln(Tt.current);var a=null;switch(n){case"input":i=Ol(e,i),r=Ol(e,r),a=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),a=[];break;case"textarea":i=Ll(e,i),r=Ll(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ho)}Ml(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Si.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var l=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Si.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&X("scroll",e),a||s===l||(a=[])):(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};Oh=function(e,t,n,r){n!==r&&(t.flags|=4)};function ti(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ug(e,t,n){var r=t.pendingProps;switch(vc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return Me(t.type)&&vo(),je(t),null;case 3:return r=t.stateNode,Tr(),q(ze),q(Ne),Ec(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pt!==null&&(xu(pt),pt=null))),fu(e,t),je(t),null;case 5:Cc(t);var i=Ln(Ii.current);if(n=t.type,e!==null&&t.stateNode!=null)$h(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return je(t),null}if(e=Ln(Tt.current),wa(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Pt]=t,r[$i]=a,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<si.length;i++)X(si[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Af(r,a),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},X("invalid",r);break;case"textarea":Of(r,a),X("invalid",r)}Ml(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&xa(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&xa(r.textContent,s,e),i=["children",""+s]):Si.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&X("scroll",r)}switch(n){case"input":fa(r),$f(r,a,!0);break;case"textarea":fa(r),If(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ho)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=om(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Pt]=t,e[$i]=r,Ah(e,t,!1,!1),t.stateNode=e;e:{switch(o=Fl(n,r),n){case"dialog":X("cancel",e),X("close",e),i=r;break;case"iframe":case"object":case"embed":X("load",e),i=r;break;case"video":case"audio":for(i=0;i<si.length;i++)X(si[i],e);i=r;break;case"source":X("error",e),i=r;break;case"img":case"image":case"link":X("error",e),X("load",e),i=r;break;case"details":X("toggle",e),i=r;break;case"input":Af(e,r),i=Ol(e,r),X("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),X("invalid",e);break;case"textarea":Of(e,r),i=Ll(e,r),X("invalid",e);break;default:i=r}Ml(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?um(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&sm(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&bi(e,l):typeof l=="number"&&bi(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Si.hasOwnProperty(a)?l!=null&&a==="onScroll"&&X("scroll",e):l!=null&&tc(e,a,l,o))}switch(n){case"input":fa(e),$f(e,r,!1);break;case"textarea":fa(e),If(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?yr(e,!!r.multiple,a,!1):r.defaultValue!=null&&yr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ho)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)Oh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Ln(Ii.current),Ln(Tt.current),wa(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(a=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:xa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xa(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return je(t),null;case 13:if(q(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&He!==null&&t.mode&1&&!(t.flags&128))Gm(),_r(),t.flags|=98560,a=!1;else if(a=wa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(j(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(j(317));a[Pt]=t}else _r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;je(t),a=!1}else pt!==null&&(xu(pt),pt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?me===0&&(me=3):zc())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return Tr(),fu(e,t),e===null&&Ti(t.stateNode.containerInfo),je(t),null;case 10:return wc(t.type._context),je(t),null;case 17:return Me(t.type)&&vo(),je(t),null;case 19:if(q(te),a=t.memoizedState,a===null)return je(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)ti(a,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=bo(e),o!==null){for(t.flags|=128,ti(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(te,te.current&1|2),t.child}e=e.sibling}a.tail!==null&&se()>$r&&(t.flags|=128,r=!0,ti(a,!1),t.lanes=4194304)}else{if(!r)if(e=bo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ti(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ee)return je(t),null}else 2*se()-a.renderingStartTime>$r&&n!==1073741824&&(t.flags|=128,r=!0,ti(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=se(),t.sibling=null,n=te.current,Q(te,r?n&1|2:n&1),t):(je(t),null);case 22:case 23:return Lc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ye&1073741824&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Bg(e,t){switch(vc(t),t.tag){case 1:return Me(t.type)&&vo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tr(),q(ze),q(Ne),Ec(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cc(t),null;case 13:if(q(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(te),null;case 4:return Tr(),null;case 10:return wc(t.type._context),null;case 22:case 23:return Lc(),null;case 24:return null;default:return null}}var ba=!1,_e=!1,Wg=typeof WeakSet=="function"?WeakSet:Set,T=null;function dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function du(e,t,n){try{n()}catch(r){ae(e,t,r)}}var bd=!1;function Vg(e,t){if(Kl=fo,e=zm(),mc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,c=0,f=0,p=e,m=null;t:for(;;){for(var g;p!==n||i!==0&&p.nodeType!==3||(s=o+i),p!==a||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)m=p,p=g;for(;;){if(p===e)break t;if(m===n&&++c===i&&(s=o),m===a&&++f===r&&(l=o),(g=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gl={focusedElem:e,selectionRange:n},fo=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,b=x.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:ft(t.type,y),b);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return x=bd,bd=!1,x}function vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&du(t,n,a)}i=i.next}while(i!==r)}}function qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ih(e){var t=e.alternate;t!==null&&(e.alternate=null,Ih(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[$i],delete t[Jl],delete t[jg],delete t[Pg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rh(e){return e.tag===5||e.tag===3||e.tag===4}function Cd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ho));else if(r!==4&&(e=e.child,e!==null))for(mu(e,t,n),e=e.sibling;e!==null;)mu(e,t,n),e=e.sibling}function hu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hu(e,t,n),e=e.sibling;e!==null;)hu(e,t,n),e=e.sibling}var ke=null,dt=!1;function Zt(e,t,n){for(n=n.child;n!==null;)Lh(e,t,n),n=n.sibling}function Lh(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Wo,n)}catch{}switch(n.tag){case 5:_e||dr(n,t);case 6:var r=ke,i=dt;ke=null,Zt(e,t,n),ke=r,dt=i,ke!==null&&(dt?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(dt?(e=ke,n=n.stateNode,e.nodeType===8?nl(e.parentNode,n):e.nodeType===1&&nl(e,n),Pi(e)):nl(ke,n.stateNode));break;case 4:r=ke,i=dt,ke=n.stateNode.containerInfo,dt=!0,Zt(e,t,n),ke=r,dt=i;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&du(n,t,o),i=i.next}while(i!==r)}Zt(e,t,n);break;case 1:if(!_e&&(dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ae(n,t,s)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Zt(e,t,n),_e=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function Ed(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Wg),t.forEach(function(r){var i=Jg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ke=s.stateNode,dt=!1;break e;case 3:ke=s.stateNode.containerInfo,dt=!0;break e;case 4:ke=s.stateNode.containerInfo,dt=!0;break e}s=s.return}if(ke===null)throw Error(j(160));Lh(a,o,i),ke=null,dt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ae(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zh(t,e),t=t.sibling}function zh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),St(e),r&4){try{vi(3,e,e.return),qo(3,e)}catch(y){ae(e,e.return,y)}try{vi(5,e,e.return)}catch(y){ae(e,e.return,y)}}break;case 1:ct(t,e),St(e),r&512&&n!==null&&dr(n,n.return);break;case 5:if(ct(t,e),St(e),r&512&&n!==null&&dr(n,n.return),e.flags&32){var i=e.stateNode;try{bi(i,"")}catch(y){ae(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&im(i,a),Fl(s,o);var c=Fl(s,a);for(o=0;o<l.length;o+=2){var f=l[o],p=l[o+1];f==="style"?um(i,p):f==="dangerouslySetInnerHTML"?sm(i,p):f==="children"?bi(i,p):tc(i,f,p,c)}switch(s){case"input":Il(i,a);break;case"textarea":am(i,a);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?yr(i,!!a.multiple,g,!1):m!==!!a.multiple&&(a.defaultValue!=null?yr(i,!!a.multiple,a.defaultValue,!0):yr(i,!!a.multiple,a.multiple?[]:"",!1))}i[$i]=a}catch(y){ae(e,e.return,y)}}break;case 6:if(ct(t,e),St(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(y){ae(e,e.return,y)}}break;case 3:if(ct(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pi(t.containerInfo)}catch(y){ae(e,e.return,y)}break;case 4:ct(t,e),St(e);break;case 13:ct(t,e),St(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Ic=se())),r&4&&Ed(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(c=_e)||f,ct(t,e),_e=c):ct(t,e),St(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(T=e,f=e.child;f!==null;){for(p=T=f;T!==null;){switch(m=T,g=m.child,m.tag){case 0:case 11:case 14:case 15:vi(4,m,m.return);break;case 1:dr(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){ae(r,n,y)}}break;case 5:dr(m,m.return);break;case 22:if(m.memoizedState!==null){Pd(p);continue}}g!==null?(g.return=m,T=g):Pd(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=lm("display",o))}catch(y){ae(e,e.return,y)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){ae(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ct(t,e),St(e),r&4&&Ed(e);break;case 21:break;default:ct(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Rh(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bi(i,""),r.flags&=-33);var a=Cd(e);hu(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Cd(e);mu(e,s,o);break;default:throw Error(j(161))}}catch(l){ae(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Yg(e,t,n){T=e,Mh(e)}function Mh(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ba;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||_e;s=ba;var c=_e;if(ba=o,(_e=l)&&!c)for(T=i;T!==null;)o=T,l=o.child,o.tag===22&&o.memoizedState!==null?_d(i):l!==null?(l.return=o,T=l):_d(i);for(;a!==null;)T=a,Mh(a),a=a.sibling;T=i,ba=s,_e=c}jd(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,T=a):jd(e)}}function jd(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||qo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&ud(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ud(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Pi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}_e||t.flags&512&&pu(t)}catch(m){ae(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Pd(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function _d(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qo(4,t)}catch(l){ae(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ae(t,i,l)}}var a=t.return;try{pu(t)}catch(l){ae(t,a,l)}break;case 5:var o=t.return;try{pu(t)}catch(l){ae(t,o,l)}}}catch(l){ae(t,t.return,l)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Hg=Math.ceil,jo=Xt.ReactCurrentDispatcher,$c=Xt.ReactCurrentOwner,at=Xt.ReactCurrentBatchConfig,F=0,xe=null,ce=null,be=0,Ye=0,pr=En(0),me=0,Mi=null,Qn=0,Zo=0,Oc=0,gi=null,Ie=null,Ic=0,$r=1/0,Rt=null,Po=!1,vu=null,hn=null,Ca=!1,sn=null,_o=0,yi=0,gu=null,Xa=-1,Ka=0;function Ae(){return F&6?se():Xa!==-1?Xa:Xa=se()}function vn(e){return e.mode&1?F&2&&be!==0?be&-be:Ng.transition!==null?(Ka===0&&(Ka=km()),Ka):(e=V,e!==0||(e=window.event,e=e===void 0?16:_m(e.type)),e):1}function gt(e,t,n,r){if(50<yi)throw yi=0,gu=null,Error(j(185));qi(e,n,r),(!(F&2)||e!==xe)&&(e===xe&&(!(F&2)&&(Zo|=n),me===4&&an(e,be)),Fe(e,r),n===1&&F===0&&!(t.mode&1)&&($r=se()+500,Xo&&jn()))}function Fe(e,t){var n=e.callbackNode;Nv(e,t);var r=co(e,e===xe?be:0);if(r===0)n!==null&&zf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&zf(n),t===1)e.tag===0?_g(Nd.bind(null,e)):Qm(Nd.bind(null,e)),Cg(function(){!(F&6)&&jn()}),n=null;else{switch(Sm(r)){case 1:n=oc;break;case 4:n=xm;break;case 16:n=uo;break;case 536870912:n=wm;break;default:n=uo}n=Hh(n,Fh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Fh(e,t){if(Xa=-1,Ka=0,F&6)throw Error(j(327));var n=e.callbackNode;if(br()&&e.callbackNode!==n)return null;var r=co(e,e===xe?be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=No(e,r);else{t=r;var i=F;F|=2;var a=Uh();(xe!==e||be!==t)&&(Rt=null,$r=se()+500,Dn(e,t));do try{Kg();break}catch(s){Dh(e,s)}while(1);xc(),jo.current=a,F=i,ce!==null?t=0:(xe=null,be=0,t=me)}if(t!==0){if(t===2&&(i=Vl(e),i!==0&&(r=i,t=yu(e,i))),t===1)throw n=Mi,Dn(e,0),an(e,r),Fe(e,se()),n;if(t===6)an(e,r);else{if(i=e.current.alternate,!(r&30)&&!Qg(i)&&(t=No(e,r),t===2&&(a=Vl(e),a!==0&&(r=a,t=yu(e,a))),t===1))throw n=Mi,Dn(e,0),an(e,r),Fe(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:On(e,Ie,Rt);break;case 3:if(an(e,r),(r&130023424)===r&&(t=Ic+500-se(),10<t)){if(co(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Zl(On.bind(null,e,Ie,Rt),t);break}On(e,Ie,Rt);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-vt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hg(r/1960))-r,10<r){e.timeoutHandle=Zl(On.bind(null,e,Ie,Rt),r);break}On(e,Ie,Rt);break;case 5:On(e,Ie,Rt);break;default:throw Error(j(329))}}}return Fe(e,se()),e.callbackNode===n?Fh.bind(null,e):null}function yu(e,t){var n=gi;return e.current.memoizedState.isDehydrated&&(Dn(e,t).flags|=256),e=No(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&xu(t)),e}function xu(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function Qg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!xt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~Oc,t&=~Zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function Nd(e){if(F&6)throw Error(j(327));br();var t=co(e,0);if(!(t&1))return Fe(e,se()),null;var n=No(e,t);if(e.tag!==0&&n===2){var r=Vl(e);r!==0&&(t=r,n=yu(e,r))}if(n===1)throw n=Mi,Dn(e,0),an(e,t),Fe(e,se()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,On(e,Ie,Rt),Fe(e,se()),null}function Rc(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&($r=se()+500,Xo&&jn())}}function Xn(e){sn!==null&&sn.tag===0&&!(F&6)&&br();var t=F;F|=1;var n=at.transition,r=V;try{if(at.transition=null,V=1,e)return e()}finally{V=r,at.transition=n,F=t,!(F&6)&&jn()}}function Lc(){Ye=pr.current,q(pr)}function Dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bg(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(vc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vo();break;case 3:Tr(),q(ze),q(Ne),Ec();break;case 5:Cc(r);break;case 4:Tr();break;case 13:q(te);break;case 19:q(te);break;case 10:wc(r.type._context);break;case 22:case 23:Lc()}n=n.return}if(xe=e,ce=e=gn(e.current,null),be=Ye=t,me=0,Mi=null,Oc=Zo=Qn=0,Ie=gi=null,Rn!==null){for(t=0;t<Rn.length;t++)if(n=Rn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Rn=null}return e}function Dh(e,t){do{var n=ce;try{if(xc(),Ya.current=Eo,Co){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Co=!1}if(Hn=0,ge=pe=ne=null,hi=!1,Ri=0,$c.current=null,n===null||n.return===null){me=1,Mi=t,ce=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=be,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=s,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=vd(o);if(g!==null){g.flags&=-257,gd(g,o,s,a,t),g.mode&1&&hd(a,c,t),t=g,l=c;var x=t.updateQueue;if(x===null){var y=new Set;y.add(l),t.updateQueue=y}else x.add(l);break e}else{if(!(t&1)){hd(a,c,t),zc();break e}l=Error(j(426))}}else if(ee&&s.mode&1){var b=vd(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),gd(b,o,s,a,t),gc(Ar(l,s));break e}}a=l=Ar(l,s),me!==4&&(me=2),gi===null?gi=[a]:gi.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=bh(a,l,t);ld(a,h);break e;case 1:s=l;var d=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(hn===null||!hn.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=Ch(a,s,t);ld(a,w);break e}}a=a.return}while(a!==null)}Wh(n)}catch(k){t=k,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(1)}function Uh(){var e=jo.current;return jo.current=Eo,e===null?Eo:e}function zc(){(me===0||me===3||me===2)&&(me=4),xe===null||!(Qn&268435455)&&!(Zo&268435455)||an(xe,be)}function No(e,t){var n=F;F|=2;var r=Uh();(xe!==e||be!==t)&&(Rt=null,Dn(e,t));do try{Xg();break}catch(i){Dh(e,i)}while(1);if(xc(),F=n,jo.current=r,ce!==null)throw Error(j(261));return xe=null,be=0,me}function Xg(){for(;ce!==null;)Bh(ce)}function Kg(){for(;ce!==null&&!wv();)Bh(ce)}function Bh(e){var t=Yh(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?Wh(e):ce=t,$c.current=null}function Wh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Bg(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,ce=null;return}}else if(n=Ug(n,t,Ye),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);me===0&&(me=5)}function On(e,t,n){var r=V,i=at.transition;try{at.transition=null,V=1,Gg(e,t,n,r)}finally{at.transition=i,V=r}return null}function Gg(e,t,n,r){do br();while(sn!==null);if(F&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Tv(e,a),e===xe&&(ce=xe=null,be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ca||(Ca=!0,Hh(uo,function(){return br(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=at.transition,at.transition=null;var o=V;V=1;var s=F;F|=4,$c.current=null,Vg(e,n),zh(n,e),vg(Gl),fo=!!Kl,Gl=Kl=null,e.current=n,Yg(n),kv(),F=s,V=o,at.transition=a}else e.current=n;if(Ca&&(Ca=!1,sn=e,_o=i),a=e.pendingLanes,a===0&&(hn=null),Cv(n.stateNode),Fe(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Po)throw Po=!1,e=vu,vu=null,e;return _o&1&&e.tag!==0&&br(),a=e.pendingLanes,a&1?e===gu?yi++:(yi=0,gu=e):yi=0,jn(),null}function br(){if(sn!==null){var e=Sm(_o),t=at.transition,n=V;try{if(at.transition=null,V=16>e?16:e,sn===null)var r=!1;else{if(e=sn,sn=null,_o=0,F&6)throw Error(j(331));var i=F;for(F|=4,T=e.current;T!==null;){var a=T,o=a.child;if(T.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(T=c;T!==null;){var f=T;switch(f.tag){case 0:case 11:case 15:vi(8,f,a)}var p=f.child;if(p!==null)p.return=f,T=p;else for(;T!==null;){f=T;var m=f.sibling,g=f.return;if(Ih(f),f===c){T=null;break}if(m!==null){m.return=g,T=m;break}T=g}}}var x=a.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}T=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,T=o;else e:for(;T!==null;){if(a=T,a.flags&2048)switch(a.tag){case 0:case 11:case 15:vi(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,T=h;break e}T=a.return}}var d=e.current;for(T=d;T!==null;){o=T;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,T=v;else e:for(o=d;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:qo(9,s)}}catch(k){ae(s,s.return,k)}if(s===o){T=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,T=w;break e}T=s.return}}if(F=i,jn(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Wo,e)}catch{}r=!0}return r}finally{V=n,at.transition=t}}return!1}function Td(e,t,n){t=Ar(n,t),t=bh(e,t,1),e=mn(e,t,1),t=Ae(),e!==null&&(qi(e,1,t),Fe(e,t))}function ae(e,t,n){if(e.tag===3)Td(e,e,n);else for(;t!==null;){if(t.tag===3){Td(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))){e=Ar(n,e),e=Ch(t,e,1),t=mn(t,e,1),e=Ae(),t!==null&&(qi(t,1,e),Fe(t,e));break}}t=t.return}}function qg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(be&n)===n&&(me===4||me===3&&(be&130023424)===be&&500>se()-Ic?Dn(e,0):Oc|=n),Fe(e,t)}function Vh(e,t){t===0&&(e.mode&1?(t=ma,ma<<=1,!(ma&130023424)&&(ma=4194304)):t=1);var n=Ae();e=Wt(e,t),e!==null&&(qi(e,t,n),Fe(e,n))}function Zg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vh(e,n)}function Jg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Vh(e,n)}var Yh;Yh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ze.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,Dg(e,t,n);Re=!!(e.flags&131072)}else Re=!1,ee&&t.flags&1048576&&Xm(t,xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qa(e,t),e=t.pendingProps;var i=Pr(t,Ne.current);Sr(t,n),i=Pc(null,t,r,e,i,n);var a=_c();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(a=!0,go(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sc(t),i.updater=Ko,t.stateNode=i,i._reactInternals=t,au(t,r,e,n),t=lu(null,t,r,!0,a,n)):(t.tag=0,ee&&a&&hc(t),Te(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ty(r),e=ft(r,e),i){case 0:t=su(null,t,r,e,n);break e;case 1:t=wd(null,t,r,e,n);break e;case 11:t=yd(null,t,r,e,n);break e;case 14:t=xd(null,t,r,ft(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),su(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),wd(e,t,r,i,n);case 3:e:{if(_h(t),e===null)throw Error(j(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Zm(e,t),So(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Ar(Error(j(423)),t),t=kd(e,t,r,n,i);break e}else if(r!==i){i=Ar(Error(j(424)),t),t=kd(e,t,r,n,i);break e}else for(He=pn(t.stateNode.containerInfo.firstChild),Qe=t,ee=!0,pt=null,n=nh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_r(),r===i){t=Vt(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return rh(t),e===null&&nu(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,ql(r,i)?o=null:a!==null&&ql(r,a)&&(t.flags|=32),Ph(e,t),Te(e,t,o,n),t.child;case 6:return e===null&&nu(t),null;case 13:return Nh(e,t,n);case 4:return bc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nr(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),yd(e,t,r,i,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,Q(wo,r._currentValue),r._currentValue=o,a!==null)if(xt(a.value,o)){if(a.children===i.children&&!ze.current){t=Vt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Dt(-1,n&-n),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ru(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(j(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ru(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Te(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Sr(t,n),i=ot(i),r=r(i),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,i=ft(r,t.pendingProps),i=ft(r.type,i),xd(e,t,r,i,n);case 15:return Eh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),Qa(e,t),t.tag=1,Me(r)?(e=!0,go(t)):e=!1,Sr(t,n),eh(t,r,i),au(t,r,i,n),lu(null,t,r,!0,e,n);case 19:return Th(e,t,n);case 22:return jh(e,t,n)}throw Error(j(156,t.tag))};function Hh(e,t){return ym(e,t)}function ey(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new ey(e,t,n,r)}function Mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ty(e){if(typeof e=="function")return Mc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rc)return 11;if(e===ic)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ga(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Mc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case rr:return Un(n.children,i,a,t);case nc:o=8,i|=8;break;case Nl:return e=it(12,n,t,i|2),e.elementType=Nl,e.lanes=a,e;case Tl:return e=it(13,n,t,i),e.elementType=Tl,e.lanes=a,e;case Al:return e=it(19,n,t,i),e.elementType=Al,e.lanes=a,e;case tm:return Jo(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jp:o=10;break e;case em:o=9;break e;case rc:o=11;break e;case ic:o=14;break e;case tn:o=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=it(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Un(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function Jo(e,t,n,r){return e=it(22,e,r,t),e.elementType=tm,e.lanes=n,e.stateNode={isHidden:!1},e}function cl(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function fl(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ny(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ys(0),this.expirationTimes=Ys(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ys(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fc(e,t,n,r,i,a,o,s,l){return e=new ny(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=it(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sc(a),e}function ry(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qh(e){if(!e)return wn;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Me(n))return Hm(e,n,t)}return t}function Xh(e,t,n,r,i,a,o,s,l){return e=Fc(n,r,!0,e,i,a,o,s,l),e.context=Qh(null),n=e.current,r=Ae(),i=vn(n),a=Dt(r,i),a.callback=t??null,mn(n,a,i),e.current.lanes=i,qi(e,i,r),Fe(e,r),e}function es(e,t,n,r){var i=t.current,a=Ae(),o=vn(i);return n=Qh(n),t.context===null?t.context=n:t.pendingContext=n,t=Dt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mn(i,t,o),e!==null&&(gt(e,i,o,a),Va(e,i,o)),o}function To(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ad(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Dc(e,t){Ad(e,t),(e=e.alternate)&&Ad(e,t)}function iy(){return null}var Kh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Uc(e){this._internalRoot=e}ts.prototype.render=Uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));es(e,t,null,null)};ts.prototype.unmount=Uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xn(function(){es(null,e,null,null)}),t[Bt]=null}};function ts(e){this._internalRoot=e}ts.prototype.unstable_scheduleHydration=function(e){if(e){var t=Em();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rn.length&&t!==0&&t<rn[n].priority;n++);rn.splice(n,0,e),n===0&&Pm(e)}};function Bc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $d(){}function ay(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var c=To(o);a.call(c)}}var o=Xh(t,r,e,0,null,!1,!1,"",$d);return e._reactRootContainer=o,e[Bt]=o.current,Ti(e.nodeType===8?e.parentNode:e),Xn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=To(l);s.call(c)}}var l=Fc(e,0,!1,null,null,!1,!1,"",$d);return e._reactRootContainer=l,e[Bt]=l.current,Ti(e.nodeType===8?e.parentNode:e),Xn(function(){es(t,l,n,r)}),l}function rs(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=To(o);s.call(l)}}es(t,o,e,i)}else o=ay(n,t,e,i,r);return To(o)}bm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=oi(t.pendingLanes);n!==0&&(sc(t,n|1),Fe(t,se()),!(F&6)&&($r=se()+500,jn()))}break;case 13:Xn(function(){var r=Wt(e,1);if(r!==null){var i=Ae();gt(r,e,1,i)}}),Dc(e,1)}};lc=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var n=Ae();gt(t,e,134217728,n)}Dc(e,134217728)}};Cm=function(e){if(e.tag===13){var t=vn(e),n=Wt(e,t);if(n!==null){var r=Ae();gt(n,e,t,r)}Dc(e,t)}};Em=function(){return V};jm=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Ul=function(e,t,n){switch(t){case"input":if(Il(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Qo(r);if(!i)throw Error(j(90));rm(r),Il(r,i)}}}break;case"textarea":am(e,n);break;case"select":t=n.value,t!=null&&yr(e,!!n.multiple,t,!1)}};dm=Rc;pm=Xn;var oy={usingClientEntryPoint:!1,Events:[Ji,sr,Qo,cm,fm,Rc]},ni={findFiberByHostInstance:In,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sy={bundleType:ni.bundleType,version:ni.version,rendererPackageName:ni.rendererPackageName,rendererConfig:ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vm(e),e===null?null:e.stateNode},findFiberByHostInstance:ni.findFiberByHostInstance||iy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{Wo=Ea.inject(sy),Nt=Ea}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oy;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bc(t))throw Error(j(200));return ry(e,t,null,n)};Ge.createRoot=function(e,t){if(!Bc(e))throw Error(j(299));var n=!1,r="",i=Kh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Fc(e,1,!1,null,null,n,!1,r,i),e[Bt]=t.current,Ti(e.nodeType===8?e.parentNode:e),new Uc(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=vm(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return Xn(e)};Ge.hydrate=function(e,t,n){if(!ns(t))throw Error(j(200));return rs(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!Bc(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Kh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Xh(t,null,e,1,n??null,i,!1,a,o),e[Bt]=t.current,Ti(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ts(t)};Ge.render=function(e,t,n){if(!ns(t))throw Error(j(200));return rs(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!ns(e))throw Error(j(40));return e._reactRootContainer?(Xn(function(){rs(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};Ge.unstable_batchedUpdates=Rc;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ns(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return rs(e,t,n,!1,r)};Ge.version="18.2.0-next-9e3b772b8-20220608";function Gh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gh)}catch(e){console.error(e)}}Gh(),Xp.exports=Ge;var ly=Xp.exports,Od=ly;Pl.createRoot=Od.createRoot,Pl.hydrateRoot=Od.hydrateRoot;/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fi(){return Fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fi.apply(this,arguments)}var ln;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ln||(ln={}));const Id="popstate";function uy(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return wu("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ao(i)}return fy(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Wc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function cy(){return Math.random().toString(36).substr(2,8)}function Rd(e,t){return{usr:e.state,key:e.key,idx:t}}function wu(e,t,n,r){return n===void 0&&(n=null),Fi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Wr(t):t,{state:n,key:t&&t.key||r||cy()})}function Ao(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Wr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function fy(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=ln.Pop,l=null,c=f();c==null&&(c=0,o.replaceState(Fi({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function p(){s=ln.Pop;let b=f(),h=b==null?null:b-c;c=b,l&&l({action:s,location:y.location,delta:h})}function m(b,h){s=ln.Push;let d=wu(y.location,b,h);n&&n(d,b),c=f()+1;let v=Rd(d,c),w=y.createHref(d);try{o.pushState(v,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}a&&l&&l({action:s,location:y.location,delta:1})}function g(b,h){s=ln.Replace;let d=wu(y.location,b,h);n&&n(d,b),c=f();let v=Rd(d,c),w=y.createHref(d);o.replaceState(v,"",w),a&&l&&l({action:s,location:y.location,delta:0})}function x(b){let h=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof b=="string"?b:Ao(b);return fe(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let y={get action(){return s},get location(){return e(i,o)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Id,p),l=b,()=>{i.removeEventListener(Id,p),l=null}},createHref(b){return t(i,b)},createURL:x,encodeLocation(b){let h=x(b);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:g,go(b){return o.go(b)}};return y}var Ld;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ld||(Ld={}));function dy(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Wr(t):t,i=Vc(r.pathname||"/",n);if(i==null)return null;let a=qh(e);py(a);let o=null;for(let s=0;o==null&&s<a.length;++s)o=Sy(a[s],Ey(i));return o}function qh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(fe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=yn([r,l.relativePath]),f=n.concat(l);a.children&&a.children.length>0&&(fe(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),qh(a.children,t,f,c)),!(a.path==null&&!a.index)&&t.push({path:c,score:wy(c,a.index),routesMeta:f})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of Zh(a.path))i(a,o,l)}),t}function Zh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=Zh(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function py(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ky(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const my=/^:\w+$/,hy=3,vy=2,gy=1,yy=10,xy=-2,zd=e=>e==="*";function wy(e,t){let n=e.split("/"),r=n.length;return n.some(zd)&&(r+=xy),t&&(r+=vy),n.filter(i=>!zd(i)).reduce((i,a)=>i+(my.test(a)?hy:a===""?gy:yy),r)}function ky(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Sy(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",f=by({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},c);if(!f)return null;Object.assign(r,f.params);let p=s.route;a.push({params:r,pathname:yn([i,f.pathname]),pathnameBase:Ny(yn([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=yn([i,f.pathnameBase]))}return a}function by(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Cy(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,f,p)=>{if(f==="*"){let m=s[p]||"";o=a.slice(0,a.length-m.length).replace(/(.)\/+$/,"$1")}return c[f]=jy(s[p]||"",f),c},{}),pathname:a,pathnameBase:o,pattern:e}}function Cy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Wc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Ey(e){try{return decodeURI(e)}catch(t){return Wc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function jy(e,t){try{return decodeURIComponent(e)}catch(n){return Wc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Vc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Py(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Wr(e):e;return{pathname:n?n.startsWith("/")?n:_y(n,t):t,search:Ty(r),hash:Ay(i)}}function _y(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function dl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function e0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Wr(e):(i=Fi({},e),fe(!i.pathname||!i.pathname.includes("?"),dl("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),dl("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),dl("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(r||o==null)s=n;else{let p=t.length-1;if(o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}s=p>=0?t[p]:"/"}let l=Py(i,s),c=o&&o!=="/"&&o.endsWith("/"),f=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const yn=e=>e.join("/").replace(/\/\/+/g,"/"),Ny=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ty=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ay=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function $y(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const t0=["post","put","patch","delete"];new Set(t0);const Oy=["get",...t0];new Set(Oy);/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$o.apply(this,arguments)}const Yc=C.createContext(null),Iy=C.createContext(null),Vr=C.createContext(null),is=C.createContext(null),Pn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),n0=C.createContext(null);function Ry(e,t){let{relative:n}=t===void 0?{}:t;ta()||fe(!1);let{basename:r,navigator:i}=C.useContext(Vr),{hash:a,pathname:o,search:s}=i0(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:yn([r,o])),i.createHref({pathname:l,search:s,hash:a})}function ta(){return C.useContext(is)!=null}function as(){return ta()||fe(!1),C.useContext(is).location}function r0(e){C.useContext(Vr).static||C.useLayoutEffect(e)}function Ly(){let{isDataRoute:e}=C.useContext(Pn);return e?Ky():zy()}function zy(){ta()||fe(!1);let e=C.useContext(Yc),{basename:t,navigator:n}=C.useContext(Vr),{matches:r}=C.useContext(Pn),{pathname:i}=as(),a=JSON.stringify(Jh(r).map(l=>l.pathnameBase)),o=C.useRef(!1);return r0(()=>{o.current=!0}),C.useCallback(function(l,c){if(c===void 0&&(c={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let f=e0(l,JSON.parse(a),i,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:yn([t,f.pathname])),(c.replace?n.replace:n.push)(f,c.state,c)},[t,n,a,i,e])}function Hc(){let{matches:e}=C.useContext(Pn),t=e[e.length-1];return t?t.params:{}}function i0(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.useContext(Pn),{pathname:i}=as(),a=JSON.stringify(Jh(r).map(o=>o.pathnameBase));return C.useMemo(()=>e0(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function My(e,t){return Fy(e,t)}function Fy(e,t,n){ta()||fe(!1);let{navigator:r}=C.useContext(Vr),{matches:i}=C.useContext(Pn),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let l=as(),c;if(t){var f;let y=typeof t=="string"?Wr(t):t;s==="/"||(f=y.pathname)!=null&&f.startsWith(s)||fe(!1),c=y}else c=l;let p=c.pathname||"/",m=s==="/"?p:p.slice(s.length)||"/",g=dy(e,{pathname:m}),x=Vy(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:yn([s,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?s:yn([s,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return t&&x?C.createElement(is.Provider,{value:{location:$o({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:ln.Pop}},x):x}function Dy(){let e=Xy(),t=$y(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,a)}const Uy=C.createElement(Dy,null);class By extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(Pn.Provider,{value:this.props.routeContext},C.createElement(n0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Wy(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(Yc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Pn.Provider,{value:t},r)}function Vy(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let s=a.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));s>=0||fe(!1),a=a.slice(0,Math.min(a.length,s+1))}return a.reduceRight((s,l,c)=>{let f=l.route.id?o==null?void 0:o[l.route.id]:null,p=null;n&&(p=l.route.errorElement||Uy);let m=t.concat(a.slice(0,c+1)),g=()=>{let x;return f?x=p:l.route.Component?x=C.createElement(l.route.Component,null):l.route.element?x=l.route.element:x=s,C.createElement(Wy,{match:l,routeContext:{outlet:s,matches:m,isDataRoute:n!=null},children:x})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?C.createElement(By,{location:n.location,revalidation:n.revalidation,component:p,error:f,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var a0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(a0||{}),Oo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Oo||{});function Yy(e){let t=C.useContext(Yc);return t||fe(!1),t}function Hy(e){let t=C.useContext(Iy);return t||fe(!1),t}function Qy(e){let t=C.useContext(Pn);return t||fe(!1),t}function o0(e){let t=Qy(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function Xy(){var e;let t=C.useContext(n0),n=Hy(Oo.UseRouteError),r=o0(Oo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Ky(){let{router:e}=Yy(a0.UseNavigateStable),t=o0(Oo.UseNavigateStable),n=C.useRef(!1);return r0(()=>{n.current=!0}),C.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,$o({fromRouteId:t},a)))},[e,t])}function Ve(e){fe(!1)}function Gy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ln.Pop,navigator:a,static:o=!1}=e;ta()&&fe(!1);let s=t.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:s,navigator:a,static:o}),[s,a,o]);typeof r=="string"&&(r=Wr(r));let{pathname:c="/",search:f="",hash:p="",state:m=null,key:g="default"}=r,x=C.useMemo(()=>{let y=Vc(c,s);return y==null?null:{location:{pathname:y,search:f,hash:p,state:m,key:g},navigationType:i}},[s,c,f,p,m,g,i]);return x==null?null:C.createElement(Vr.Provider,{value:l},C.createElement(is.Provider,{children:n,value:x}))}function qy(e){let{children:t,location:n}=e;return My(ku(t),n)}new Promise(()=>{});function ku(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let a=[...t,i];if(r.type===C.Fragment){n.push.apply(n,ku(r.props.children,a));return}r.type!==Ve&&fe(!1),!r.props.index||!r.props.children||fe(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ku(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Su(){return Su=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Su.apply(this,arguments)}function Zy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function e2(e,t){return e.button===0&&(!t||t==="_self")&&!Jy(e)}const t2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],n2="startTransition",Md=jl[n2];function r2(e){let{basename:t,children:n,future:r,window:i}=e,a=C.useRef();a.current==null&&(a.current=uy({window:i,v5Compat:!0}));let o=a.current,[s,l]=C.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=C.useCallback(p=>{c&&Md?Md(()=>l(p)):l(p)},[l,c]);return C.useLayoutEffect(()=>o.listen(f),[o,f]),C.createElement(Gy,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}const i2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",a2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,s0=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:c,preventScrollReset:f,unstable_viewTransition:p}=t,m=Zy(t,t2),{basename:g}=C.useContext(Vr),x,y=!1;if(typeof c=="string"&&a2.test(c)&&(x=c,i2))try{let v=new URL(window.location.href),w=c.startsWith("//")?new URL(v.protocol+c):new URL(c),k=Vc(w.pathname,g);w.origin===v.origin&&k!=null?c=k+w.search+w.hash:y=!0}catch{}let b=Ry(c,{relative:i}),h=o2(c,{replace:o,state:s,target:l,preventScrollReset:f,relative:i,unstable_viewTransition:p});function d(v){r&&r(v),v.defaultPrevented||h(v)}return C.createElement("a",Su({},m,{href:x||b,onClick:y||a?r:d,ref:n,target:l}))});var Fd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Fd||(Fd={}));var Dd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Dd||(Dd={}));function o2(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s}=t===void 0?{}:t,l=Ly(),c=as(),f=i0(e,{relative:o});return C.useCallback(p=>{if(e2(p,n)){p.preventDefault();let m=r!==void 0?r:Ao(c)===Ao(f);l(e,{replace:m,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s})}},[c,l,f,r,i,n,e,a,o,s])}const s2="/assets/HeaderVideo-c4261902.mp4";function l2(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function u2(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var c2=function(){function e(n){var r=this;this._insertTag=function(i){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,a),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(u2(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var a=l2(i);try{a.insertRule(r,a.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Pe="-ms-",Io="-moz-",U="-webkit-",l0="comm",Qc="rule",Xc="decl",f2="@import",u0="@keyframes",d2="@layer",p2=Math.abs,os=String.fromCharCode,m2=Object.assign;function h2(e,t){return Se(e,0)^45?(((t<<2^Se(e,0))<<2^Se(e,1))<<2^Se(e,2))<<2^Se(e,3):0}function c0(e){return e.trim()}function v2(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,n){return e.replace(t,n)}function bu(e,t){return e.indexOf(t)}function Se(e,t){return e.charCodeAt(t)|0}function Di(e,t,n){return e.slice(t,n)}function Ct(e){return e.length}function Kc(e){return e.length}function ja(e,t){return t.push(e),e}function g2(e,t){return e.map(t).join("")}var ss=1,Or=1,f0=0,De=0,le=0,Yr="";function ls(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ss,column:Or,length:o,return:""}}function ri(e,t){return m2(ls("",null,null,"",null,null,0),e,{length:-e.length},t)}function y2(){return le}function x2(){return le=De>0?Se(Yr,--De):0,Or--,le===10&&(Or=1,ss--),le}function Xe(){return le=De<f0?Se(Yr,De++):0,Or++,le===10&&(Or=1,ss++),le}function At(){return Se(Yr,De)}function qa(){return De}function na(e,t){return Di(Yr,e,t)}function Ui(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function d0(e){return ss=Or=1,f0=Ct(Yr=e),De=0,[]}function p0(e){return Yr="",e}function Za(e){return c0(na(De-1,Cu(e===91?e+2:e===40?e+1:e)))}function w2(e){for(;(le=At())&&le<33;)Xe();return Ui(e)>2||Ui(le)>3?"":" "}function k2(e,t){for(;--t&&Xe()&&!(le<48||le>102||le>57&&le<65||le>70&&le<97););return na(e,qa()+(t<6&&At()==32&&Xe()==32))}function Cu(e){for(;Xe();)switch(le){case e:return De;case 34:case 39:e!==34&&e!==39&&Cu(le);break;case 40:e===41&&Cu(e);break;case 92:Xe();break}return De}function S2(e,t){for(;Xe()&&e+le!==47+10;)if(e+le===42+42&&At()===47)break;return"/*"+na(t,De-1)+"*"+os(e===47?e:Xe())}function b2(e){for(;!Ui(At());)Xe();return na(e,De)}function C2(e){return p0(Ja("",null,null,null,[""],e=d0(e),0,[0],e))}function Ja(e,t,n,r,i,a,o,s,l){for(var c=0,f=0,p=o,m=0,g=0,x=0,y=1,b=1,h=1,d=0,v="",w=i,k=a,E=r,S=v;b;)switch(x=d,d=Xe()){case 40:if(x!=108&&Se(S,p-1)==58){bu(S+=B(Za(d),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:S+=Za(d);break;case 9:case 10:case 13:case 32:S+=w2(x);break;case 92:S+=k2(qa()-1,7);continue;case 47:switch(At()){case 42:case 47:ja(E2(S2(Xe(),qa()),t,n),l);break;default:S+="/"}break;case 123*y:s[c++]=Ct(S)*h;case 125*y:case 59:case 0:switch(d){case 0:case 125:b=0;case 59+f:h==-1&&(S=B(S,/\f/g,"")),g>0&&Ct(S)-p&&ja(g>32?Bd(S+";",r,n,p-1):Bd(B(S," ","")+";",r,n,p-2),l);break;case 59:S+=";";default:if(ja(E=Ud(S,t,n,c,f,i,s,v,w=[],k=[],p),a),d===123)if(f===0)Ja(S,t,E,E,w,a,p,s,k);else switch(m===99&&Se(S,3)===110?100:m){case 100:case 108:case 109:case 115:Ja(e,E,E,r&&ja(Ud(e,E,E,0,0,i,s,v,i,w=[],p),k),i,k,p,s,r?w:k);break;default:Ja(S,E,E,E,[""],k,0,s,k)}}c=f=g=0,y=h=1,v=S="",p=o;break;case 58:p=1+Ct(S),g=x;default:if(y<1){if(d==123)--y;else if(d==125&&y++==0&&x2()==125)continue}switch(S+=os(d),d*y){case 38:h=f>0?1:(S+="\f",-1);break;case 44:s[c++]=(Ct(S)-1)*h,h=1;break;case 64:At()===45&&(S+=Za(Xe())),m=At(),f=p=Ct(v=S+=b2(qa())),d++;break;case 45:x===45&&Ct(S)==2&&(y=0)}}return a}function Ud(e,t,n,r,i,a,o,s,l,c,f){for(var p=i-1,m=i===0?a:[""],g=Kc(m),x=0,y=0,b=0;x<r;++x)for(var h=0,d=Di(e,p+1,p=p2(y=o[x])),v=e;h<g;++h)(v=c0(y>0?m[h]+" "+d:B(d,/&\f/g,m[h])))&&(l[b++]=v);return ls(e,t,n,i===0?Qc:s,l,c,f)}function E2(e,t,n){return ls(e,t,n,l0,os(y2()),Di(e,2,-2),0)}function Bd(e,t,n,r){return ls(e,t,n,Xc,Di(e,0,r),Di(e,r+1,-1),r)}function Cr(e,t){for(var n="",r=Kc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function j2(e,t,n,r){switch(e.type){case d2:if(e.children.length)break;case f2:case Xc:return e.return=e.return||e.value;case l0:return"";case u0:return e.return=e.value+"{"+Cr(e.children,r)+"}";case Qc:e.value=e.props.join(",")}return Ct(n=Cr(e.children,r))?e.return=e.value+"{"+n+"}":""}function P2(e){var t=Kc(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}function _2(e){return function(t){t.root||(t=t.return)&&e(t)}}function N2(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var T2=function(t,n,r){for(var i=0,a=0;i=a,a=At(),i===38&&a===12&&(n[r]=1),!Ui(a);)Xe();return na(t,De)},A2=function(t,n){var r=-1,i=44;do switch(Ui(i)){case 0:i===38&&At()===12&&(n[r]=1),t[r]+=T2(De-1,n,r);break;case 2:t[r]+=Za(i);break;case 4:if(i===44){t[++r]=At()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=os(i)}while(i=Xe());return t},$2=function(t,n){return p0(A2(d0(t),n))},Wd=new WeakMap,O2=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Wd.get(r))&&!i){Wd.set(t,!0);for(var a=[],o=$2(n,a),s=r.props,l=0,c=0;l<o.length;l++)for(var f=0;f<s.length;f++,c++)t.props[c]=a[l]?o[l].replace(/&\f/g,s[f]):s[f]+" "+o[l]}}},I2=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function m0(e,t){switch(h2(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+Io+e+Pe+e+e;case 6828:case 4268:return U+e+Pe+e+e;case 6165:return U+e+Pe+"flex-"+e+e;case 5187:return U+e+B(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+Pe+"flex-$1$2")+e;case 5443:return U+e+Pe+"flex-item-"+B(e,/flex-|-self/,"")+e;case 4675:return U+e+Pe+"flex-line-pack"+B(e,/align-content|flex-|-self/,"")+e;case 5548:return U+e+Pe+B(e,"shrink","negative")+e;case 5292:return U+e+Pe+B(e,"basis","preferred-size")+e;case 6060:return U+"box-"+B(e,"-grow","")+U+e+Pe+B(e,"grow","positive")+e;case 4554:return U+B(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+Pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ct(e)-1-t>6)switch(Se(e,t+1)){case 109:if(Se(e,t+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+Io+(Se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~bu(e,"stretch")?m0(B(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Se(e,t+1)!==115)break;case 6444:switch(Se(e,Ct(e)-3-(~bu(e,"!important")&&10))){case 107:return B(e,":",":"+U)+e;case 101:return B(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+U+(Se(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+Pe+"$2box$3")+e}break;case 5936:switch(Se(e,t+11)){case 114:return U+e+Pe+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+Pe+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+Pe+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return U+e+Pe+e+e}return e}var R2=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Xc:t.return=m0(t.value,t.length);break;case u0:return Cr([ri(t,{value:B(t.value,"@","@"+U)})],i);case Qc:if(t.length)return g2(t.props,function(a){switch(v2(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Cr([ri(t,{props:[B(a,/:(read-\w+)/,":"+Io+"$1")]})],i);case"::placeholder":return Cr([ri(t,{props:[B(a,/:(plac\w+)/,":"+U+"input-$1")]}),ri(t,{props:[B(a,/:(plac\w+)/,":"+Io+"$1")]}),ri(t,{props:[B(a,/:(plac\w+)/,Pe+"input-$1")]})],i)}return""})}},L2=[R2],z2=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var b=y.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||L2,a={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var b=y.getAttribute("data-emotion").split(" "),h=1;h<b.length;h++)a[b[h]]=!0;s.push(y)});var l,c=[O2,I2];{var f,p=[j2,_2(function(y){f.insert(y)})],m=P2(c.concat(i,p)),g=function(b){return Cr(C2(b),m)};l=function(b,h,d,v){f=d,g(b?b+"{"+h.styles+"}":h.styles),v&&(x.inserted[h.name]=!0)}}var x={key:n,sheet:new c2({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:l};return x.sheet.hydrate(s),x},h0={exports:{}},Y={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var we=typeof Symbol=="function"&&Symbol.for,Gc=we?Symbol.for("react.element"):60103,qc=we?Symbol.for("react.portal"):60106,us=we?Symbol.for("react.fragment"):60107,cs=we?Symbol.for("react.strict_mode"):60108,fs=we?Symbol.for("react.profiler"):60114,ds=we?Symbol.for("react.provider"):60109,ps=we?Symbol.for("react.context"):60110,Zc=we?Symbol.for("react.async_mode"):60111,ms=we?Symbol.for("react.concurrent_mode"):60111,hs=we?Symbol.for("react.forward_ref"):60112,vs=we?Symbol.for("react.suspense"):60113,M2=we?Symbol.for("react.suspense_list"):60120,gs=we?Symbol.for("react.memo"):60115,ys=we?Symbol.for("react.lazy"):60116,F2=we?Symbol.for("react.block"):60121,D2=we?Symbol.for("react.fundamental"):60117,U2=we?Symbol.for("react.responder"):60118,B2=we?Symbol.for("react.scope"):60119;function Ze(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Gc:switch(e=e.type,e){case Zc:case ms:case us:case fs:case cs:case vs:return e;default:switch(e=e&&e.$$typeof,e){case ps:case hs:case ys:case gs:case ds:return e;default:return t}}case qc:return t}}}function v0(e){return Ze(e)===ms}Y.AsyncMode=Zc;Y.ConcurrentMode=ms;Y.ContextConsumer=ps;Y.ContextProvider=ds;Y.Element=Gc;Y.ForwardRef=hs;Y.Fragment=us;Y.Lazy=ys;Y.Memo=gs;Y.Portal=qc;Y.Profiler=fs;Y.StrictMode=cs;Y.Suspense=vs;Y.isAsyncMode=function(e){return v0(e)||Ze(e)===Zc};Y.isConcurrentMode=v0;Y.isContextConsumer=function(e){return Ze(e)===ps};Y.isContextProvider=function(e){return Ze(e)===ds};Y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gc};Y.isForwardRef=function(e){return Ze(e)===hs};Y.isFragment=function(e){return Ze(e)===us};Y.isLazy=function(e){return Ze(e)===ys};Y.isMemo=function(e){return Ze(e)===gs};Y.isPortal=function(e){return Ze(e)===qc};Y.isProfiler=function(e){return Ze(e)===fs};Y.isStrictMode=function(e){return Ze(e)===cs};Y.isSuspense=function(e){return Ze(e)===vs};Y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===us||e===ms||e===fs||e===cs||e===vs||e===M2||typeof e=="object"&&e!==null&&(e.$$typeof===ys||e.$$typeof===gs||e.$$typeof===ds||e.$$typeof===ps||e.$$typeof===hs||e.$$typeof===D2||e.$$typeof===U2||e.$$typeof===B2||e.$$typeof===F2)};Y.typeOf=Ze;h0.exports=Y;var W2=h0.exports,g0=W2,V2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Y2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},y0={};y0[g0.ForwardRef]=V2;y0[g0.Memo]=Y2;var H2=!0;function x0(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Jc=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||H2===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},w0=function(t,n,r){Jc(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+i:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function Q2(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var k0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},X2=/[A-Z]|^ms/g,K2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,S0=function(t){return t.charCodeAt(1)===45},Vd=function(t){return t!=null&&typeof t!="boolean"},pl=N2(function(e){return S0(e)?e:e.replace(X2,"-$&").toLowerCase()}),Yd=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(K2,function(r,i,a){return Et={name:i,styles:a,next:Et},i})}return k0[t]!==1&&!S0(t)&&typeof n=="number"&&n!==0?n+"px":n};function Bi(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Et={name:n.name,styles:n.styles,next:Et},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Et={name:r.name,styles:r.styles,next:Et},r=r.next;var i=n.styles+";";return i}return G2(e,t,n)}case"function":{if(e!==void 0){var a=Et,o=n(e);return Et=a,Bi(e,t,o)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function G2(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Bi(e,t,n[i])+";";else for(var a in n){var o=n[a];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=a+"{"+t[o]+"}":Vd(o)&&(r+=pl(a)+":"+Yd(a,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var s=0;s<o.length;s++)Vd(o[s])&&(r+=pl(a)+":"+Yd(a,o[s])+";");else{var l=Bi(e,t,o);switch(a){case"animation":case"animationName":{r+=pl(a)+":"+l+";";break}default:r+=a+"{"+l+"}"}}}return r}var Hd=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Et,ef=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,a="";Et=void 0;var o=t[0];o==null||o.raw===void 0?(i=!1,a+=Bi(r,n,o)):a+=o[0];for(var s=1;s<t.length;s++)a+=Bi(r,n,t[s]),i&&(a+=o[s]);Hd.lastIndex=0;for(var l="",c;(c=Hd.exec(a))!==null;)l+="-"+c[1];var f=Q2(a)+l;return{name:f,styles:a,next:Et}},q2=function(t){return t()},Z2=jl["useInsertionEffect"]?jl["useInsertionEffect"]:!1,b0=Z2||q2,tf={}.hasOwnProperty,C0=C.createContext(typeof HTMLElement<"u"?z2({key:"css"}):null);C0.Provider;var E0=function(t){return C.forwardRef(function(n,r){var i=C.useContext(C0);return t(n,i,r)})},j0=C.createContext({}),Eu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",J2=function(t,n){var r={};for(var i in n)tf.call(n,i)&&(r[i]=n[i]);return r[Eu]=t,r},ex=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Jc(n,r,i),b0(function(){return w0(n,r,i)}),null},tx=E0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Eu],a=[r],o="";typeof e.className=="string"?o=x0(t.registered,a,e.className):e.className!=null&&(o=e.className+" ");var s=ef(a,void 0,C.useContext(j0));o+=t.key+"-"+s.name;var l={};for(var c in e)tf.call(e,c)&&c!=="css"&&c!==Eu&&(l[c]=e[c]);return l.ref=n,l.className=o,C.createElement(C.Fragment,null,C.createElement(ex,{cache:t,serialized:s,isStringTag:typeof i=="string"}),C.createElement(i,l))}),nx=tx,rx=u.Fragment;function ve(e,t,n){return tf.call(t,"css")?u.jsx(nx,J2(e,t),n):u.jsx(e,t,n)}function P0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ef(t)}var P=function(){var t=P0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},ix=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var a=t[r];if(a!=null){var o=void 0;switch(typeof a){case"boolean":break;case"object":{if(Array.isArray(a))o=e(a);else{o="";for(var s in a)a[s]&&s&&(o&&(o+=" "),o+=s)}break}default:o=a}o&&(i&&(i+=" "),i+=o)}}return i};function ax(e,t,n){var r=[],i=x0(e,r,n);return r.length<2?n:i+t(r)}var ox=function(t){var n=t.cache,r=t.serializedArr;return b0(function(){for(var i=0;i<r.length;i++)w0(n,r[i],!1)}),null},ml=E0(function(e,t){var n=!1,r=[],i=function(){for(var c=arguments.length,f=new Array(c),p=0;p<c;p++)f[p]=arguments[p];var m=ef(f,t.registered);return r.push(m),Jc(t,m,!1),t.key+"-"+m.name},a=function(){for(var c=arguments.length,f=new Array(c),p=0;p<c;p++)f[p]=arguments[p];return ax(t.registered,i,ix(f))},o={css:i,cx:a,theme:C.useContext(j0)},s=e.children(o);return n=!0,C.createElement(C.Fragment,null,C.createElement(ox,{cache:t,serializedArr:r}),s)}),sx=Object.defineProperty,lx=(e,t,n)=>t in e?sx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Pa=(e,t,n)=>(lx(e,typeof t!="symbol"?t+"":t,n),n),ju=new Map,_a=new WeakMap,Qd=0,ux=void 0;function cx(e){return e?(_a.has(e)||(Qd+=1,_a.set(e,Qd.toString())),_a.get(e)):"0"}function fx(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?cx(e.root):e[t]}`).toString()}function dx(e){let t=fx(e),n=ju.get(t);if(!n){const r=new Map;let i;const a=new IntersectionObserver(o=>{o.forEach(s=>{var l;const c=s.isIntersecting&&i.some(f=>s.intersectionRatio>=f);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(l=r.get(s.target))==null||l.forEach(f=>{f(c,s)})})},e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:r},ju.set(t,n)}return n}function _0(e,t,n={},r=ux){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const l=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:i,observer:a,elements:o}=dx(n);let s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(o.delete(e),a.unobserve(e)),o.size===0&&(a.disconnect(),ju.delete(i))}}function px(e){return typeof e.children!="function"}var Xd=class extends C.Component{constructor(e){super(e),Pa(this,"node",null),Pa(this,"_unobserveCb",null),Pa(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Pa(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),px(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:a}=this.props;this._unobserveCb=_0(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},a)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:g,entry:x}=this.state;return e({inView:g,entry:x,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:i,rootMargin:a,onChange:o,skip:s,trackVisibility:l,delay:c,initialInView:f,fallbackInView:p,...m}=this.props;return C.createElement(t||"div",{ref:this.handleNode,...m},e)}};function N0({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:a,skip:o,initialInView:s,fallbackInView:l,onChange:c}={}){var f;const[p,m]=C.useState(null),g=C.useRef(),[x,y]=C.useState({inView:!!s,entry:void 0});g.current=c,C.useEffect(()=>{if(o||!p)return;let v;return v=_0(p,(w,k)=>{y({inView:w,entry:k}),g.current&&g.current(w,k),k.isIntersecting&&a&&v&&(v(),v=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},l),()=>{v&&v()}},[Array.isArray(e)?e.toString():e,p,i,r,a,o,n,l,t]);const b=(f=x.entry)==null?void 0:f.target,h=C.useRef();!p&&b&&!a&&!o&&h.current!==b&&(h.current=b,y({inView:!!s,entry:void 0}));const d=[m,x.inView,x.entry];return d.ref=d[0],d.inView=d[1],d.entry=d[2],d}var T0={exports:{}},H={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf=Symbol.for("react.element"),rf=Symbol.for("react.portal"),xs=Symbol.for("react.fragment"),ws=Symbol.for("react.strict_mode"),ks=Symbol.for("react.profiler"),Ss=Symbol.for("react.provider"),bs=Symbol.for("react.context"),mx=Symbol.for("react.server_context"),Cs=Symbol.for("react.forward_ref"),Es=Symbol.for("react.suspense"),js=Symbol.for("react.suspense_list"),Ps=Symbol.for("react.memo"),_s=Symbol.for("react.lazy"),hx=Symbol.for("react.offscreen"),A0;A0=Symbol.for("react.module.reference");function ut(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case nf:switch(e=e.type,e){case xs:case ks:case ws:case Es:case js:return e;default:switch(e=e&&e.$$typeof,e){case mx:case bs:case Cs:case _s:case Ps:case Ss:return e;default:return t}}case rf:return t}}}H.ContextConsumer=bs;H.ContextProvider=Ss;H.Element=nf;H.ForwardRef=Cs;H.Fragment=xs;H.Lazy=_s;H.Memo=Ps;H.Portal=rf;H.Profiler=ks;H.StrictMode=ws;H.Suspense=Es;H.SuspenseList=js;H.isAsyncMode=function(){return!1};H.isConcurrentMode=function(){return!1};H.isContextConsumer=function(e){return ut(e)===bs};H.isContextProvider=function(e){return ut(e)===Ss};H.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===nf};H.isForwardRef=function(e){return ut(e)===Cs};H.isFragment=function(e){return ut(e)===xs};H.isLazy=function(e){return ut(e)===_s};H.isMemo=function(e){return ut(e)===Ps};H.isPortal=function(e){return ut(e)===rf};H.isProfiler=function(e){return ut(e)===ks};H.isStrictMode=function(e){return ut(e)===ws};H.isSuspense=function(e){return ut(e)===Es};H.isSuspenseList=function(e){return ut(e)===js};H.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xs||e===ks||e===ws||e===Es||e===js||e===hx||typeof e=="object"&&e!==null&&(e.$$typeof===_s||e.$$typeof===Ps||e.$$typeof===Ss||e.$$typeof===bs||e.$$typeof===Cs||e.$$typeof===A0||e.getModuleId!==void 0)};H.typeOf=ut;T0.exports=H;var vx=T0.exports;P`
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
`;const gx=P`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,yx=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xx=P`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wx=P`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,kx=P`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,af=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Sx=P`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,bx=P`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Cx=P`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ex=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,jx=P`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Px=P`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_x=P`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Nx({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=af,iterationCount:i=1}){return P0`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Tx(e){return e==null}function Ax(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function $0(e,t){return n=>n?e():t()}function Wi(e){return $0(e,()=>null)}function Pu(e){return Wi(()=>({opacity:0}))(e)}const O0=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:a=0,keyframes:o=af,triggerOnce:s=!1,className:l,style:c,childClassName:f,childStyle:p,children:m,onVisibilityChange:g}=e,x=C.useMemo(()=>Nx({keyframes:o,duration:i}),[i,o]);return Tx(m)?null:Ax(m)?ve(Ox,{...e,animationStyles:x,children:String(m)}):vx.isFragment(m)?ve(I0,{...e,animationStyles:x}):ve(rx,{children:C.Children.map(m,(y,b)=>{if(!C.isValidElement(y))return null;const h=r+(t?b*i*n:0);switch(y.type){case"ol":case"ul":return ve(ml,{children:({cx:d})=>ve(y.type,{...y.props,className:d(l,y.props.className),style:Object.assign({},c,y.props.style),children:ve(O0,{...e,children:y.props.children})})});case"li":return ve(Xd,{threshold:a,triggerOnce:s,onChange:g,children:({inView:d,ref:v})=>ve(ml,{children:({cx:w})=>ve(y.type,{...y.props,ref:v,className:w(f,y.props.className),css:Wi(()=>x)(d),style:Object.assign({},p,y.props.style,Pu(!d),{animationDelay:h+"ms"})})})});default:return ve(Xd,{threshold:a,triggerOnce:s,onChange:g,children:({inView:d,ref:v})=>ve("div",{ref:v,className:l,css:Wi(()=>x)(d),style:Object.assign({},c,Pu(!d),{animationDelay:h+"ms"}),children:ve(ml,{children:({cx:w})=>ve(y.type,{...y.props,className:w(f,y.props.className),style:Object.assign({},p,y.props.style)})})})})}})})},$x={display:"inline-block",whiteSpace:"pre"},Ox=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:a=1e3,fraction:o=0,triggerOnce:s=!1,className:l,style:c,children:f,onVisibilityChange:p}=e,{ref:m,inView:g}=N0({triggerOnce:s,threshold:o,onChange:p});return $0(()=>ve("div",{ref:m,className:l,style:Object.assign({},c,$x),children:f.split("").map((x,y)=>ve("span",{css:Wi(()=>t)(g),style:{animationDelay:i+y*a*r+"ms"},children:x},y))}),()=>ve(I0,{...e,children:f}))(n)},I0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:a,children:o,onVisibilityChange:s}=e,{ref:l,inView:c}=N0({triggerOnce:r,threshold:n,onChange:s});return ve("div",{ref:l,className:i,css:Wi(()=>t)(c),style:Object.assign({},a,Pu(!c)),children:o})};P`
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
`;const Ix=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Rx=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Lx=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,zx=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Mx=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Fx=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Dx=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Ux=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Bx=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Wx=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Vx=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Yx=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Hx=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Qx(e,t,n){switch(n){case"bottom-left":return t?Rx:yx;case"bottom-right":return t?Lx:xx;case"down":return e?t?Mx:kx:t?zx:wx;case"left":return e?t?Dx:Sx:t?Fx:af;case"right":return e?t?Bx:Cx:t?Ux:bx;case"top-left":return t?Wx:Ex;case"top-right":return t?Vx:jx;case"up":return e?t?Hx:_x:t?Yx:Px;default:return t?Ix:gx}}const tr=e=>{const{big:t=!1,direction:n,reverse:r=!1,...i}=e,a=C.useMemo(()=>Qx(t,r,n),[t,n,r]);return ve(O0,{keyframes:a,...i})};P`
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
`;const Ot=({text:e,page:t,img:n})=>u.jsx(u.Fragment,{children:t=="home"?u.jsxs("section",{className:"box",children:[u.jsx("video",{src:s2,autoPlay:!0,loop:!0,muted:!0}),u.jsxs(tr,{direction:"up",cascade:!0,children:[u.jsxs("h1",{children:["Enrol your child at",u.jsx("br",{})," As-Safwah Academy"]}),u.jsx("a",{href:"\\register",target:"_blank",children:u.jsx("button",{className:"whitebutton",children:"Apply Now!"})})]})]}):t=="policy"?u.jsxs("section",{className:"smallheader",children:[u.jsx("img",{src:n,alt:"image of ${text} header"}),u.jsx("h1",{children:e})]}):u.jsxs("section",{className:"mediumheader",children:[u.jsx("img",{src:n,alt:"image of ${text} header"}),u.jsx("h1",{children:e})]})});var Le=function(){return Le=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Le.apply(this,arguments)};function Ro(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var K="-ms-",xi="-moz-",W="-webkit-",R0="comm",Ns="rule",of="decl",Xx="@import",L0="@keyframes",Kx="@layer",Gx=Math.abs,sf=String.fromCharCode,_u=Object.assign;function qx(e,t){return ye(e,0)^45?(((t<<2^ye(e,0))<<2^ye(e,1))<<2^ye(e,2))<<2^ye(e,3):0}function z0(e){return e.trim()}function Lt(e,t){return(e=t.exec(e))?e[0]:e}function R(e,t,n){return e.replace(t,n)}function eo(e,t){return e.indexOf(t)}function ye(e,t){return e.charCodeAt(t)|0}function Ir(e,t,n){return e.slice(t,n)}function jt(e){return e.length}function M0(e){return e.length}function li(e,t){return t.push(e),e}function Zx(e,t){return e.map(t).join("")}function Kd(e,t){return e.filter(function(n){return!Lt(n,t)})}var Ts=1,Rr=1,F0=0,lt=0,ue=0,Hr="";function As(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Ts,column:Rr,length:o,return:"",siblings:s}}function en(e,t){return _u(As("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function er(e){for(;e.root;)e=en(e.root,{children:[e]});li(e,e.siblings)}function Jx(){return ue}function ew(){return ue=lt>0?ye(Hr,--lt):0,Rr--,ue===10&&(Rr=1,Ts--),ue}function yt(){return ue=lt<F0?ye(Hr,lt++):0,Rr++,ue===10&&(Rr=1,Ts++),ue}function Bn(){return ye(Hr,lt)}function to(){return lt}function $s(e,t){return Ir(Hr,e,t)}function Nu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tw(e){return Ts=Rr=1,F0=jt(Hr=e),lt=0,[]}function nw(e){return Hr="",e}function hl(e){return z0($s(lt-1,Tu(e===91?e+2:e===40?e+1:e)))}function rw(e){for(;(ue=Bn())&&ue<33;)yt();return Nu(e)>2||Nu(ue)>3?"":" "}function iw(e,t){for(;--t&&yt()&&!(ue<48||ue>102||ue>57&&ue<65||ue>70&&ue<97););return $s(e,to()+(t<6&&Bn()==32&&yt()==32))}function Tu(e){for(;yt();)switch(ue){case e:return lt;case 34:case 39:e!==34&&e!==39&&Tu(ue);break;case 40:e===41&&Tu(e);break;case 92:yt();break}return lt}function aw(e,t){for(;yt()&&e+ue!==47+10;)if(e+ue===42+42&&Bn()===47)break;return"/*"+$s(t,lt-1)+"*"+sf(e===47?e:yt())}function ow(e){for(;!Nu(Bn());)yt();return $s(e,lt)}function sw(e){return nw(no("",null,null,null,[""],e=tw(e),0,[0],e))}function no(e,t,n,r,i,a,o,s,l){for(var c=0,f=0,p=o,m=0,g=0,x=0,y=1,b=1,h=1,d=0,v="",w=i,k=a,E=r,S=v;b;)switch(x=d,d=yt()){case 40:if(x!=108&&ye(S,p-1)==58){eo(S+=R(hl(d),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:S+=hl(d);break;case 9:case 10:case 13:case 32:S+=rw(x);break;case 92:S+=iw(to()-1,7);continue;case 47:switch(Bn()){case 42:case 47:li(lw(aw(yt(),to()),t,n,l),l);break;default:S+="/"}break;case 123*y:s[c++]=jt(S)*h;case 125*y:case 59:case 0:switch(d){case 0:case 125:b=0;case 59+f:h==-1&&(S=R(S,/\f/g,"")),g>0&&jt(S)-p&&li(g>32?qd(S+";",r,n,p-1,l):qd(R(S," ","")+";",r,n,p-2,l),l);break;case 59:S+=";";default:if(li(E=Gd(S,t,n,c,f,i,s,v,w=[],k=[],p,a),a),d===123)if(f===0)no(S,t,E,E,w,a,p,s,k);else switch(m===99&&ye(S,3)===110?100:m){case 100:case 108:case 109:case 115:no(e,E,E,r&&li(Gd(e,E,E,0,0,i,s,v,i,w=[],p,k),k),i,k,p,s,r?w:k);break;default:no(S,E,E,E,[""],k,0,s,k)}}c=f=g=0,y=h=1,v=S="",p=o;break;case 58:p=1+jt(S),g=x;default:if(y<1){if(d==123)--y;else if(d==125&&y++==0&&ew()==125)continue}switch(S+=sf(d),d*y){case 38:h=f>0?1:(S+="\f",-1);break;case 44:s[c++]=(jt(S)-1)*h,h=1;break;case 64:Bn()===45&&(S+=hl(yt())),m=Bn(),f=p=jt(v=S+=ow(to())),d++;break;case 45:x===45&&jt(S)==2&&(y=0)}}return a}function Gd(e,t,n,r,i,a,o,s,l,c,f,p){for(var m=i-1,g=i===0?a:[""],x=M0(g),y=0,b=0,h=0;y<r;++y)for(var d=0,v=Ir(e,m+1,m=Gx(b=o[y])),w=e;d<x;++d)(w=z0(b>0?g[d]+" "+v:R(v,/&\f/g,g[d])))&&(l[h++]=w);return As(e,t,n,i===0?Ns:s,l,c,f,p)}function lw(e,t,n,r){return As(e,t,n,R0,sf(Jx()),Ir(e,2,-2),0,r)}function qd(e,t,n,r,i){return As(e,t,n,of,Ir(e,0,r),Ir(e,r+1,-1),r,i)}function D0(e,t,n){switch(qx(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 4789:return xi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+xi+e+K+e+e;case 5936:switch(ye(e,t+11)){case 114:return W+e+K+R(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+K+R(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+K+R(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return W+e+K+e+e;case 6165:return W+e+K+"flex-"+e+e;case 5187:return W+e+R(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+K+"flex-$1$2")+e;case 5443:return W+e+K+"flex-item-"+R(e,/flex-|-self/g,"")+(Lt(e,/flex-|baseline/)?"":K+"grid-row-"+R(e,/flex-|-self/g,""))+e;case 4675:return W+e+K+"flex-line-pack"+R(e,/align-content|flex-|-self/g,"")+e;case 5548:return W+e+K+R(e,"shrink","negative")+e;case 5292:return W+e+K+R(e,"basis","preferred-size")+e;case 6060:return W+"box-"+R(e,"-grow","")+W+e+K+R(e,"grow","positive")+e;case 4554:return W+R(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return R(R(R(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return R(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return R(R(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+K+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4200:if(!Lt(e,/flex-|baseline/))return K+"grid-column-align"+Ir(e,t)+e;break;case 2592:case 3360:return K+R(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Lt(r.props,/grid-\w+-end/)})?~eo(e+(n=n[t].value),"span")?e:K+R(e,"-start","")+e+K+"grid-row-span:"+(~eo(n,"span")?Lt(n,/\d+/):+Lt(n,/\d+/)-+Lt(e,/\d+/))+";":K+R(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Lt(r.props,/grid-\w+-start/)})?e:K+R(R(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return R(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jt(e)-1-t>6)switch(ye(e,t+1)){case 109:if(ye(e,t+4)!==45)break;case 102:return R(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+xi+(ye(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~eo(e,"stretch")?D0(R(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return R(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,o,s,l,c){return K+i+":"+a+c+(o?K+i+"-span:"+(s?l:+l-+a)+c:"")+e});case 4949:if(ye(e,t+6)===121)return R(e,":",":"+W)+e;break;case 6444:switch(ye(e,ye(e,14)===45?18:11)){case 120:return R(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+W+(ye(e,14)===45?"inline-":"")+"box$3$1"+W+"$2$3$1"+K+"$2box$3")+e;case 100:return R(e,":",":"+K)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return R(e,"scroll-","scroll-snap-")+e}return e}function Lo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function uw(e,t,n,r){switch(e.type){case Kx:if(e.children.length)break;case Xx:case of:return e.return=e.return||e.value;case R0:return"";case L0:return e.return=e.value+"{"+Lo(e.children,r)+"}";case Ns:if(!jt(e.value=e.props.join(",")))return""}return jt(n=Lo(e.children,r))?e.return=e.value+"{"+n+"}":""}function cw(e){var t=M0(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}function fw(e){return function(t){t.root||(t=t.return)&&e(t)}}function dw(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case of:e.return=D0(e.value,e.length,n);return;case L0:return Lo([en(e,{value:R(e.value,"@","@"+W)})],r);case Ns:if(e.length)return Zx(n=e.props,function(i){switch(Lt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":er(en(e,{props:[R(i,/:(read-\w+)/,":"+xi+"$1")]})),er(en(e,{props:[i]})),_u(e,{props:Kd(n,r)});break;case"::placeholder":er(en(e,{props:[R(i,/:(plac\w+)/,":"+W+"input-$1")]})),er(en(e,{props:[R(i,/:(plac\w+)/,":"+xi+"$1")]})),er(en(e,{props:[R(i,/:(plac\w+)/,K+"input-$1")]})),er(en(e,{props:[i]})),_u(e,{props:Kd(n,r)});break}return""})}}var Lr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",lf=typeof window<"u"&&"HTMLElement"in window,pw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Os=Object.freeze([]),zr=Object.freeze({});function mw(e,t,n){return n===void 0&&(n=zr),e.theme!==n.theme&&e.theme||t||n.theme}var U0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,vw=/(^-|-$)/g;function Zd(e){return e.replace(hw,"-").replace(vw,"")}var gw=/(a)(d)/gi,Jd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Au(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Jd(t%52)+n;return(Jd(t%52)+n).replace(gw,"$1-$2")}var vl,mr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},B0=function(e){return mr(5381,e)};function yw(e){return Au(B0(e)>>>0)}function xw(e){return e.displayName||e.name||"Component"}function gl(e){return typeof e=="string"&&!0}var W0=typeof Symbol=="function"&&Symbol.for,V0=W0?Symbol.for("react.memo"):60115,ww=W0?Symbol.for("react.forward_ref"):60112,kw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Sw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Y0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},bw=((vl={})[ww]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vl[V0]=Y0,vl);function ep(e){return("type"in(t=e)&&t.type.$$typeof)===V0?Y0:"$$typeof"in e?bw[e.$$typeof]:kw;var t}var Cw=Object.defineProperty,Ew=Object.getOwnPropertyNames,tp=Object.getOwnPropertySymbols,jw=Object.getOwnPropertyDescriptor,Pw=Object.getPrototypeOf,np=Object.prototype;function H0(e,t,n){if(typeof t!="string"){if(np){var r=Pw(t);r&&r!==np&&H0(e,r,n)}var i=Ew(t);tp&&(i=i.concat(tp(t)));for(var a=ep(e),o=ep(t),s=0;s<i.length;++s){var l=i[s];if(!(l in Sw||n&&n[l]||o&&l in o||a&&l in a)){var c=jw(t,l);try{Cw(e,l,c)}catch{}}}}return e}function Mr(e){return typeof e=="function"}function uf(e){return typeof e=="object"&&"styledComponentId"in e}function zn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function rp(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Vi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function $u(e,t,n){if(n===void 0&&(n=!1),!n&&!Vi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=$u(e[r],t[r]);else if(Vi(t))for(var r in t)e[r]=$u(e[r],t[r]);return e}function cf(e,t){Object.defineProperty(e,"toString",{value:t})}function ra(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var _w=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw ra(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=i;o<a;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,o=i;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),ro=new Map,zo=new Map,yl=1,Na=function(e){if(ro.has(e))return ro.get(e);for(;zo.has(yl);)yl++;var t=yl++;return ro.set(e,t),zo.set(t,e),t},Nw=function(e,t){ro.set(e,t),zo.set(t,e)},Tw="style[".concat(Lr,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),Aw=new RegExp("^".concat(Lr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$w=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},Ow=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(Aw);if(l){var c=0|parseInt(l[1],10),f=l[2];c!==0&&(Nw(f,c),$w(e,f,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}};function Iw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Q0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(Lr,"]")));return l[l.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(Lr,"active"),r.setAttribute("data-styled-version","6.1.0");var o=Iw();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},Rw=function(){function e(t){this.element=Q0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var o=r[i];if(o.ownerNode===n)return o}throw ra(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Lw=function(){function e(t){this.element=Q0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),zw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ip=lf,Mw={isServer:!lf,useCSSOMInjection:!pw},X0=function(){function e(t,n,r){t===void 0&&(t=zr),n===void 0&&(n={});var i=this;this.options=Le(Le({},Mw),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&lf&&ip&&(ip=!1,function(a){for(var o=document.querySelectorAll(Tw),s=0,l=o.length;s<l;s++){var c=o[s];c&&c.getAttribute(Lr)!=="active"&&(Ow(a,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),cf(this,function(){return function(a){for(var o=a.getTag(),s=o.length,l="",c=function(p){var m=function(h){return zo.get(h)}(p);if(m===void 0)return"continue";var g=a.names.get(m),x=o.getGroup(p);if(g===void 0||x.length===0)return"continue";var y="".concat(Lr,".g").concat(p,'[id="').concat(m,'"]'),b="";g!==void 0&&g.forEach(function(h){h.length>0&&(b+="".concat(h,","))}),l+="".concat(x).concat(y,'{content:"').concat(b,'"}').concat(`/*!sc*/
`)},f=0;f<s;f++)c(f);return l}(i)})}return e.registerId=function(t){return Na(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Le(Le({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new zw(i):r?new Rw(i):new Lw(i)}(this.options),new _w(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Na(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Na(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Na(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Fw=/&/g,Dw=/^\s*\/\/.*$/gm;function K0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=K0(n.children,t)),n})}function Uw(e){var t,n,r,i=e===void 0?zr:e,a=i.options,o=a===void 0?zr:a,s=i.plugins,l=s===void 0?Os:s,c=function(m,g,x){return x===n||x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):m},f=l.slice();f.push(function(m){m.type===Ns&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Fw,n).replace(r,c))}),o.prefix&&f.push(dw),f.push(uw);var p=function(m,g,x,y){g===void 0&&(g=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var b=m.replace(Dw,""),h=sw(x||g?"".concat(x," ").concat(g," { ").concat(b," }"):b);o.namespace&&(h=K0(h,o.namespace));var d=[];return Lo(h,cw(f.concat(fw(function(v){return d.push(v)})))),d};return p.hash=l.length?l.reduce(function(m,g){return g.name||ra(15),mr(m,g.name)},5381).toString():"",p}var Bw=new X0,Ou=Uw(),G0=$t.createContext({shouldForwardProp:void 0,styleSheet:Bw,stylis:Ou});G0.Consumer;$t.createContext(void 0);function ap(){return C.useContext(G0)}var Ww=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=Ou);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,cf(this,function(){throw ra(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ou),this.name+t.hash},e}(),Vw=function(e){return e>="A"&&e<="Z"};function op(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Vw(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var q0=function(e){return e==null||e===!1||e===""},Z0=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!q0(a)&&(Array.isArray(a)&&a.isCss||Mr(a)?r.push("".concat(op(i),":"),a,";"):Vi(a)?r.push.apply(r,Ro(Ro(["".concat(i," {")],Z0(a),!1),["}"],!1)):r.push("".concat(op(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in k0||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Wn(e,t,n,r){if(q0(e))return[];if(uf(e))return[".".concat(e.styledComponentId)];if(Mr(e)){if(!Mr(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return Wn(i,t,n,r)}var a;return e instanceof Ww?n?(e.inject(n,r),[e.getName(r)]):[e]:Vi(e)?Z0(e):Array.isArray(e)?Array.prototype.concat.apply(Os,e.map(function(o){return Wn(o,t,n,r)})):[e.toString()]}function Yw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Mr(n)&&!uf(n))return!1}return!0}var Hw=B0("6.1.0"),Qw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Yw(t),this.componentId=n,this.baseHash=mr(Hw,n),this.baseStyle=r,X0.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=zn(i,this.staticRulesId);else{var a=rp(Wn(this.rules,t,n,r)),o=Au(mr(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=r(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}i=zn(i,o),this.staticRulesId=o}else{for(var l=mr(this.baseHash,r.hash),c="",f=0;f<this.rules.length;f++){var p=this.rules[f];if(typeof p=="string")c+=p;else if(p){var m=rp(Wn(p,t,n,r));l=mr(l,m+f),c+=m}}if(c){var g=Au(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),i=zn(i,g)}}return i},e}(),J0=$t.createContext(void 0);J0.Consumer;var xl={};function Xw(e,t,n){var r=uf(e),i=e,a=!gl(e),o=t.attrs,s=o===void 0?Os:o,l=t.componentId,c=l===void 0?function(v,w){var k=typeof v!="string"?"sc":Zd(v);xl[k]=(xl[k]||0)+1;var E="".concat(k,"-").concat(yw("6.1.0"+k+xl[k]));return w?"".concat(w,"-").concat(E):E}(t.displayName,t.parentComponentId):l,f=t.displayName;f===void 0&&function(v){return gl(v)?"styled.".concat(v):"Styled(".concat(xw(v),")")}(e);var p=t.displayName&&t.componentId?"".concat(Zd(t.displayName),"-").concat(t.componentId):t.componentId||c,m=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;g=function(v,w){return x(v,w)&&y(v,w)}}else g=x}var b=new Qw(n,p,r?i.componentStyle:void 0);function h(v,w){return function(k,E,S){var A=k.attrs,D=k.componentStyle,L=k.defaultProps,Ue=k.foldedComponentIds,Nn=k.styledComponentId,Tn=k.target,sa=$t.useContext(J0),Ms=ap(),An=k.shouldForwardProp||Ms.shouldForwardProp,et=function(It,Be,Gt){for(var We,tt=Le(Le({},Be),{className:void 0,theme:Gt}),Fs=0;Fs<It.length;Fs+=1){var la=Mr(We=It[Fs])?We(tt):We;for(var qt in la)tt[qt]=qt==="className"?zn(tt[qt],la[qt]):qt==="style"?Le(Le({},tt[qt]),la[qt]):la[qt]}return Be.className&&(tt.className=zn(tt.className,Be.className)),tt}(A,E,mw(E,sa,L)||zr),_=et.as||Tn,O={};for(var I in et)et[I]===void 0||I[0]==="$"||I==="as"||I==="theme"||(I==="forwardedAs"?O.as=et.forwardedAs:An&&!An(I,_)||(O[I]=et[I]));var J=function(It,Be){var Gt=ap(),We=It.generateAndInjectStyles(Be,Gt.styleSheet,Gt.stylis);return We}(D,et),ie=zn(Ue,Nn);return J&&(ie+=" "+J),et.className&&(ie+=" "+et.className),O[gl(_)&&!U0.has(_)?"class":"className"]=ie,O.ref=S,C.createElement(_,O)}(d,v,w)}var d=$t.forwardRef(h);return d.attrs=m,d.componentStyle=b,d.shouldForwardProp=g,d.foldedComponentIds=r?zn(i.foldedComponentIds,i.styledComponentId):"",d.styledComponentId=p,d.target=r?i.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(w){for(var k=[],E=1;E<arguments.length;E++)k[E-1]=arguments[E];for(var S=0,A=k;S<A.length;S++)$u(w,A[S],!0);return w}({},i.defaultProps,v):v}}),cf(d,function(){return".".concat(d.styledComponentId)}),a&&H0(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function sp(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var lp=function(e){return Object.assign(e,{isCss:!0})};function Kw(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Mr(e)||Vi(e)){var r=e;return lp(Wn(sp(Os,Ro([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Wn(i):lp(Wn(sp(i,t)))}function Iu(e,t,n){if(n===void 0&&(n=zr),!t)throw ra(1,t);var r=function(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,Kw.apply(void 0,Ro([i],a,!1)))};return r.attrs=function(i){return Iu(e,t,Le(Le({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Iu(e,t,Le(Le({},n),i))},r}var e1=function(e){return Iu(Xw,e)},Qr=e1;U0.forEach(function(e){Qr[e]=e1(e)});const Gw=Qr.ul`
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
`,qw=({open:e})=>u.jsxs(Gw,{open:e,children:[u.jsx("li",{children:u.jsx("a",{href:"/",children:"Home"})}),u.jsx("li",{children:u.jsx("a",{href:"/about",children:"About"})}),u.jsx("li",{children:u.jsx("a",{href:"/courses",children:"Course"})}),u.jsx("li",{children:u.jsx("a",{href:"/contact",children:"Contact"})}),u.jsx("li",{children:u.jsx("a",{href:"/register",className:"button",children:"Register"})})]}),Zw=Qr.div`
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
`,Jw=()=>{const[e,t]=C.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsxs(Zw,{open:e,onClick:()=>t(!e),children:[u.jsx("div",{}),u.jsx("div",{}),u.jsx("div",{})]}),u.jsx(qw,{open:e})]})},e3="/assets/Navbar_logo-32374cb8.png",t3=Qr.nav`
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
`,wt=({scrollVal:e=25})=>{const[t,n]=C.useState(!1);return C.useEffect(()=>{const r=()=>{window.scrollY>=e?n(!0):n(!1)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]),u.jsxs(t3,{navbar:t,children:[u.jsx("img",{src:e3,alt:""}),u.jsx(Jw,{})]})};function up(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?up(Object(n),!0).forEach(function(r){he(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):up(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Mo(e){"@babel/helpers - typeof";return Mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mo(e)}function n3(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function cp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r3(e,t,n){return t&&cp(e.prototype,t),n&&cp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ff(e,t){return a3(e)||s3(e,t)||t1(e,t)||u3()}function ia(e){return i3(e)||o3(e)||t1(e)||l3()}function i3(e){if(Array.isArray(e))return Ru(e)}function a3(e){if(Array.isArray(e))return e}function o3(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function s3(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function t1(e,t){if(e){if(typeof e=="string")return Ru(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ru(e,t)}}function Ru(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var fp=function(){},df={},n1={},r1=null,i1={mark:fp,measure:fp};try{typeof window<"u"&&(df=window),typeof document<"u"&&(n1=document),typeof MutationObserver<"u"&&(r1=MutationObserver),typeof performance<"u"&&(i1=performance)}catch{}var c3=df.navigator||{},dp=c3.userAgent,pp=dp===void 0?"":dp,kn=df,Z=n1,mp=r1,Ta=i1;kn.document;var Kt=!!Z.documentElement&&!!Z.head&&typeof Z.addEventListener=="function"&&typeof Z.createElement=="function",a1=~pp.indexOf("MSIE")||~pp.indexOf("Trident/"),Aa,$a,Oa,Ia,Ra,Yt="___FONT_AWESOME___",Lu=16,o1="fa",s1="svg-inline--fa",Kn="data-fa-i2svg",zu="data-fa-pseudo-element",f3="data-fa-pseudo-element-pending",pf="data-prefix",mf="data-icon",hp="fontawesome-i2svg",d3="async",p3=["HTML","HEAD","STYLE","SCRIPT"],l1=function(){try{return!0}catch{return!1}}(),G="classic",oe="sharp",hf=[G,oe];function aa(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[G]}})}var Yi=aa((Aa={},he(Aa,G,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),he(Aa,oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Aa)),Hi=aa(($a={},he($a,G,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),he($a,oe,{solid:"fass",regular:"fasr",light:"fasl"}),$a)),Qi=aa((Oa={},he(Oa,G,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),he(Oa,oe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Oa)),m3=aa((Ia={},he(Ia,G,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),he(Ia,oe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ia)),h3=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,u1="fa-layers-text",v3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,g3=aa((Ra={},he(Ra,G,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),he(Ra,oe,{900:"fass",400:"fasr",300:"fasl"}),Ra)),c1=[1,2,3,4,5,6,7,8,9,10],y3=c1.concat([11,12,13,14,15,16,17,18,19,20]),x3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Mn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xi=new Set;Object.keys(Hi[G]).map(Xi.add.bind(Xi));Object.keys(Hi[oe]).map(Xi.add.bind(Xi));var w3=[].concat(hf,ia(Xi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Mn.GROUP,Mn.SWAP_OPACITY,Mn.PRIMARY,Mn.SECONDARY]).concat(c1.map(function(e){return"".concat(e,"x")})).concat(y3.map(function(e){return"w-".concat(e)})),wi=kn.FontAwesomeConfig||{};function k3(e){var t=Z.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function S3(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Z&&typeof Z.querySelector=="function"){var b3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];b3.forEach(function(e){var t=ff(e,2),n=t[0],r=t[1],i=S3(k3(n));i!=null&&(wi[r]=i)})}var f1={styleDefault:"solid",familyDefault:"classic",cssPrefix:o1,replacementClass:s1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};wi.familyPrefix&&(wi.cssPrefix=wi.familyPrefix);var Fr=N(N({},f1),wi);Fr.autoReplaceSvg||(Fr.observeMutations=!1);var $={};Object.keys(f1).forEach(function(e){Object.defineProperty($,e,{enumerable:!0,set:function(n){Fr[e]=n,ki.forEach(function(r){return r($)})},get:function(){return Fr[e]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(t){Fr.cssPrefix=t,ki.forEach(function(n){return n($)})},get:function(){return Fr.cssPrefix}});kn.FontAwesomeConfig=$;var ki=[];function C3(e){return ki.push(e),function(){ki.splice(ki.indexOf(e),1)}}var Jt=Lu,_t={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function E3(e){if(!(!e||!Kt)){var t=Z.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Z.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return Z.head.insertBefore(t,r),e}}var j3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ki(){for(var e=12,t="";e-- >0;)t+=j3[Math.random()*62|0];return t}function Xr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function vf(e){return e.classList?Xr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function d1(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function P3(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(d1(e[n]),'" ')},"").trim()}function Is(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function gf(e){return e.size!==_t.size||e.x!==_t.x||e.y!==_t.y||e.rotate!==_t.rotate||e.flipX||e.flipY}function _3(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function N3(e){var t=e.transform,n=e.width,r=n===void 0?Lu:n,i=e.height,a=i===void 0?Lu:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&a1?l+="translate(".concat(t.x/Jt-r/2,"em, ").concat(t.y/Jt-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Jt,"em), calc(-50% + ").concat(t.y/Jt,"em)) "):l+="translate(".concat(t.x/Jt,"em, ").concat(t.y/Jt,"em) "),l+="scale(".concat(t.size/Jt*(t.flipX?-1:1),", ").concat(t.size/Jt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var T3=`:root, :host {
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
}`;function p1(){var e=o1,t=s1,n=$.cssPrefix,r=$.replacementClass,i=T3;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var vp=!1;function wl(){$.autoAddCss&&!vp&&(E3(p1()),vp=!0)}var A3={mixout:function(){return{dom:{css:p1,insertCss:wl}}},hooks:function(){return{beforeDOMElementCreation:function(){wl()},beforeI2svg:function(){wl()}}}},Ht=kn||{};Ht[Yt]||(Ht[Yt]={});Ht[Yt].styles||(Ht[Yt].styles={});Ht[Yt].hooks||(Ht[Yt].hooks={});Ht[Yt].shims||(Ht[Yt].shims=[]);var mt=Ht[Yt],m1=[],$3=function e(){Z.removeEventListener("DOMContentLoaded",e),Fo=1,m1.map(function(t){return t()})},Fo=!1;Kt&&(Fo=(Z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Z.readyState),Fo||Z.addEventListener("DOMContentLoaded",$3));function O3(e){Kt&&(Fo?setTimeout(e,0):m1.push(e))}function oa(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?d1(e):"<".concat(t," ").concat(P3(r),">").concat(a.map(oa).join(""),"</").concat(t,">")}function gp(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var I3=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},kl=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?I3(n,i):n,l,c,f;for(r===void 0?(l=1,f=t[a[0]]):(l=0,f=r);l<o;l++)c=a[l],f=s(f,t[c],c,t);return f};function R3(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Mu(e){var t=R3(e);return t.length===1?t[0].toString(16):null}function L3(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function yp(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Fu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=yp(t);typeof mt.hooks.addPack=="function"&&!i?mt.hooks.addPack(e,yp(t)):mt.styles[e]=N(N({},mt.styles[e]||{}),a),e==="fas"&&Fu("fa",t)}var La,za,Ma,hr=mt.styles,z3=mt.shims,M3=(La={},he(La,G,Object.values(Qi[G])),he(La,oe,Object.values(Qi[oe])),La),yf=null,h1={},v1={},g1={},y1={},x1={},F3=(za={},he(za,G,Object.keys(Yi[G])),he(za,oe,Object.keys(Yi[oe])),za);function D3(e){return~w3.indexOf(e)}function U3(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!D3(i)?i:null}var w1=function(){var t=function(a){return kl(hr,function(o,s,l){return o[l]=kl(s,a,{}),o},{})};h1=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),v1=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),x1=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in hr||$.autoFetchSvg,r=kl(z3,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});g1=r.names,y1=r.unicodes,yf=Rs($.styleDefault,{family:$.familyDefault})};C3(function(e){yf=Rs(e.styleDefault,{family:$.familyDefault})});w1();function xf(e,t){return(h1[e]||{})[t]}function B3(e,t){return(v1[e]||{})[t]}function Fn(e,t){return(x1[e]||{})[t]}function k1(e){return g1[e]||{prefix:null,iconName:null}}function W3(e){var t=y1[e],n=xf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Sn(){return yf}var wf=function(){return{prefix:null,iconName:null,rest:[]}};function Rs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?G:n,i=Yi[r][e],a=Hi[r][e]||Hi[r][i],o=e in mt.styles?e:null;return a||o||null}var xp=(Ma={},he(Ma,G,Object.keys(Qi[G])),he(Ma,oe,Object.keys(Qi[oe])),Ma);function Ls(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},he(t,G,"".concat($.cssPrefix,"-").concat(G)),he(t,oe,"".concat($.cssPrefix,"-").concat(oe)),t),o=null,s=G;(e.includes(a[G])||e.some(function(c){return xp[G].includes(c)}))&&(s=G),(e.includes(a[oe])||e.some(function(c){return xp[oe].includes(c)}))&&(s=oe);var l=e.reduce(function(c,f){var p=U3($.cssPrefix,f);if(hr[f]?(f=M3[s].includes(f)?m3[s][f]:f,o=f,c.prefix=f):F3[s].indexOf(f)>-1?(o=f,c.prefix=Rs(f,{family:s})):p?c.iconName=p:f!==$.replacementClass&&f!==a[G]&&f!==a[oe]&&c.rest.push(f),!i&&c.prefix&&c.iconName){var m=o==="fa"?k1(c.iconName):{},g=Fn(c.prefix,c.iconName);m.prefix&&(o=null),c.iconName=m.iconName||g||c.iconName,c.prefix=m.prefix||c.prefix,c.prefix==="far"&&!hr.far&&hr.fas&&!$.autoFetchSvg&&(c.prefix="fas")}return c},wf());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===oe&&(hr.fass||$.autoFetchSvg)&&(l.prefix="fass",l.iconName=Fn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Sn()||"fas"),l}var V3=function(){function e(){n3(this,e),this.definitions={}}return r3(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=N(N({},n.definitions[s]||{}),o[s]),Fu(s,o[s]);var l=Qi[G][s];l&&Fu(l,o[s]),w1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(p){typeof p=="string"&&(n[s][p]=c)}),n[s][l]=c}),n}}]),e}(),wp=[],vr={},Er={},Y3=Object.keys(Er);function H3(e,t){var n=t.mixoutsTo;return wp=e,vr={},Object.keys(Er).forEach(function(r){Y3.indexOf(r)===-1&&delete Er[r]}),wp.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Mo(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){vr[o]||(vr[o]=[]),vr[o].push(a[o])})}r.provides&&r.provides(Er)}),n}function Du(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=vr[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Gn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=vr[e]||[];i.forEach(function(a){a.apply(null,n)})}function Qt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Er[e]?Er[e].apply(null,t):void 0}function Uu(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Sn();if(t)return t=Fn(n,t)||t,gp(S1.definitions,n,t)||gp(mt.styles,n,t)}var S1=new V3,Q3=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,Gn("noAuto")},X3={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Kt?(Gn("beforeI2svg",t),Qt("pseudoElements2svg",t),Qt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,O3(function(){G3({autoReplaceSvgRoot:n}),Gn("watch",t)})}},K3={icon:function(t){if(t===null)return null;if(Mo(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Fn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Rs(t[0]);return{prefix:r,iconName:Fn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat($.cssPrefix,"-"))>-1||t.match(h3))){var i=Ls(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Sn(),iconName:Fn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=Sn();return{prefix:a,iconName:Fn(a,t)||t}}}},Je={noAuto:Q3,config:$,dom:X3,parse:K3,library:S1,findIconDefinition:Uu,toHtml:oa},G3=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Z:n;(Object.keys(mt.styles).length>0||$.autoFetchSvg)&&Kt&&$.autoReplaceSvg&&Je.dom.i2svg({node:r})};function zs(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return oa(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Kt){var r=Z.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function q3(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(gf(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};i.style=Is(N(N({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Z3(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat($.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},i),{},{id:o}),children:r}]}]}function kf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,p=e.extra,m=e.watchable,g=m===void 0?!1:m,x=r.found?r:n,y=x.width,b=x.height,h=i==="fak",d=[$.replacementClass,a?"".concat($.cssPrefix,"-").concat(a):""].filter(function(D){return p.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(p.classes).join(" "),v={children:[],attributes:N(N({},p.attributes),{},{"data-prefix":i,"data-icon":a,class:d,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(b)})},w=h&&!~p.classes.indexOf("fa-fw")?{width:"".concat(y/b*16*.0625,"em")}:{};g&&(v.attributes[Kn]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(f||Ki())},children:[l]}),delete v.attributes.title);var k=N(N({},v),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:N(N({},w),p.styles)}),E=r.found&&n.found?Qt("generateAbstractMask",k)||{children:[],attributes:{}}:Qt("generateAbstractIcon",k)||{children:[],attributes:{}},S=E.children,A=E.attributes;return k.children=S,k.attributes=A,s?Z3(k):q3(k)}function kp(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=N(N(N({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(c[Kn]="");var f=N({},o.styles);gf(i)&&(f.transform=N3({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var p=Is(f);p.length>0&&(c.style=p);var m=[];return m.push({tag:"span",attributes:c,children:[t]}),a&&m.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),m}function J3(e){var t=e.content,n=e.title,r=e.extra,i=N(N(N({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Is(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Sl=mt.styles;function Bu(e){var t=e[0],n=e[1],r=e.slice(4),i=ff(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat(Mn.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(Mn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(Mn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var e4={found:!1,width:512,height:512};function t4(e,t){!l1&&!$.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Wu(e,t){var n=t;return t==="fa"&&$.styleDefault!==null&&(t=Sn()),new Promise(function(r,i){if(Qt("missingIconAbstract"),n==="fa"){var a=k1(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Sl[t]&&Sl[t][e]){var o=Sl[t][e];return r(Bu(o))}t4(e,t),r(N(N({},e4),{},{icon:$.showMissingIcons&&e?Qt("missingIconAbstract")||{}:{}}))})}var Sp=function(){},Vu=$.measurePerformance&&Ta&&Ta.mark&&Ta.measure?Ta:{mark:Sp,measure:Sp},ui='FA "6.4.2"',n4=function(t){return Vu.mark("".concat(ui," ").concat(t," begins")),function(){return b1(t)}},b1=function(t){Vu.mark("".concat(ui," ").concat(t," ends")),Vu.measure("".concat(ui," ").concat(t),"".concat(ui," ").concat(t," begins"),"".concat(ui," ").concat(t," ends"))},Sf={begin:n4,end:b1},io=function(){};function bp(e){var t=e.getAttribute?e.getAttribute(Kn):null;return typeof t=="string"}function r4(e){var t=e.getAttribute?e.getAttribute(pf):null,n=e.getAttribute?e.getAttribute(mf):null;return t&&n}function i4(e){return e&&e.classList&&e.classList.contains&&e.classList.contains($.replacementClass)}function a4(){if($.autoReplaceSvg===!0)return ao.replace;var e=ao[$.autoReplaceSvg];return e||ao.replace}function o4(e){return Z.createElementNS("http://www.w3.org/2000/svg",e)}function s4(e){return Z.createElement(e)}function C1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?o4:s4:n;if(typeof e=="string")return Z.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(C1(o,{ceFn:r}))}),i}function l4(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ao={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(C1(i),n)}),n.getAttribute(Kn)===null&&$.keepOriginalSource){var r=Z.createComment(l4(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~vf(n).indexOf($.replacementClass))return ao.replace(t);var i=new RegExp("".concat($.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===$.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return oa(s)}).join(`
`);n.setAttribute(Kn,""),n.innerHTML=o}};function Cp(e){e()}function E1(e,t){var n=typeof t=="function"?t:io;if(e.length===0)n();else{var r=Cp;$.mutateApproach===d3&&(r=kn.requestAnimationFrame||Cp),r(function(){var i=a4(),a=Sf.begin("mutate");e.map(i),a(),n()})}}var bf=!1;function j1(){bf=!0}function Yu(){bf=!1}var Do=null;function Ep(e){if(mp&&$.observeMutations){var t=e.treeCallback,n=t===void 0?io:t,r=e.nodeCallback,i=r===void 0?io:r,a=e.pseudoElementsCallback,o=a===void 0?io:a,s=e.observeMutationsRoot,l=s===void 0?Z:s;Do=new mp(function(c){if(!bf){var f=Sn();Xr(c).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!bp(p.addedNodes[0])&&($.searchPseudoElements&&o(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&$.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&bp(p.target)&&~x3.indexOf(p.attributeName))if(p.attributeName==="class"&&r4(p.target)){var m=Ls(vf(p.target)),g=m.prefix,x=m.iconName;p.target.setAttribute(pf,g||f),x&&p.target.setAttribute(mf,x)}else i4(p.target)&&i(p.target)})}}),Kt&&Do.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function u4(){Do&&Do.disconnect()}function c4(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function f4(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Ls(vf(e));return i.prefix||(i.prefix=Sn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=B3(i.prefix,e.innerText)||xf(i.prefix,Mu(e.innerText))),!i.iconName&&$.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function d4(e){var t=Xr(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return $.autoA11y&&(n?t["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(r||Ki()):(t["aria-hidden"]="true",t.focusable="false")),t}function p4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_t,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=f4(e),r=n.iconName,i=n.prefix,a=n.rest,o=d4(e),s=Du("parseNodeAttributes",{},e),l=t.styleParser?c4(e):[];return N({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:_t,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var m4=mt.styles;function P1(e){var t=$.autoReplaceSvg==="nest"?jp(e,{styleParser:!1}):jp(e);return~t.extra.classes.indexOf(u1)?Qt("generateLayersText",e,t):Qt("generateSvgReplacementMutation",e,t)}var bn=new Set;hf.map(function(e){bn.add("fa-".concat(e))});Object.keys(Yi[G]).map(bn.add.bind(bn));Object.keys(Yi[oe]).map(bn.add.bind(bn));bn=ia(bn);function Pp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Kt)return Promise.resolve();var n=Z.documentElement.classList,r=function(p){return n.add("".concat(hp,"-").concat(p))},i=function(p){return n.remove("".concat(hp,"-").concat(p))},a=$.autoFetchSvg?bn:hf.map(function(f){return"fa-".concat(f)}).concat(Object.keys(m4));a.includes("fa")||a.push("fa");var o=[".".concat(u1,":not([").concat(Kn,"])")].concat(a.map(function(f){return".".concat(f,":not([").concat(Kn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Xr(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Sf.begin("onTree"),c=s.reduce(function(f,p){try{var m=P1(p);m&&f.push(m)}catch(g){l1||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,p){Promise.all(c).then(function(m){E1(m,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(m){l(),p(m)})})}function h4(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;P1(e).then(function(n){n&&E1([n],t)})}function v4(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Uu(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Uu(i||{})),e(r,N(N({},n),{},{mask:i}))}}var g4=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?_t:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,p=n.title,m=p===void 0?null:p,g=n.titleId,x=g===void 0?null:g,y=n.classes,b=y===void 0?[]:y,h=n.attributes,d=h===void 0?{}:h,v=n.styles,w=v===void 0?{}:v;if(t){var k=t.prefix,E=t.iconName,S=t.icon;return zs(N({type:"icon"},t),function(){return Gn("beforeDOMElementCreation",{iconDefinition:t,params:n}),$.autoA11y&&(m?d["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(x||Ki()):(d["aria-hidden"]="true",d.focusable="false")),kf({icons:{main:Bu(S),mask:l?Bu(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:E,transform:N(N({},_t),i),symbol:o,title:m,maskId:f,titleId:x,extra:{attributes:d,styles:w,classes:b}})})}},y4={mixout:function(){return{icon:v4(g4)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Pp,n.nodeCallback=h4,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Z:r,a=n.callback,o=a===void 0?function(){}:a;return Pp(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,p=r.maskId,m=r.extra;return new Promise(function(g,x){Promise.all([Wu(i,s),f.iconName?Wu(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var b=ff(y,2),h=b[0],d=b[1];g([n,kf({icons:{main:h,mask:d},prefix:s,iconName:i,transform:l,symbol:c,maskId:p,title:a,titleId:o,extra:m,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Is(s);l.length>0&&(i.style=l);var c;return gf(o)&&(c=Qt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(c||a.icon),{children:r,attributes:i}}}},x4={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return zs({type:"layer"},function(){Gn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers")].concat(ia(a)).join(" ")},children:o}]})}}}},w4={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,p=f===void 0?{}:f;return zs({type:"counter",content:n},function(){return Gn("beforeDOMElementCreation",{content:n,params:r}),J3({content:n.toString(),title:a,extra:{attributes:c,styles:p,classes:["".concat($.cssPrefix,"-layers-counter")].concat(ia(s))}})})}}}},k4={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?_t:i,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,p=f===void 0?{}:f,m=r.styles,g=m===void 0?{}:m;return zs({type:"text",content:n},function(){return Gn("beforeDOMElementCreation",{content:n,params:r}),kp({content:n,transform:N(N({},_t),a),title:s,extra:{attributes:p,styles:g,classes:["".concat($.cssPrefix,"-layers-text")].concat(ia(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(a1){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return $.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,kp({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},S4=new RegExp('"',"ug"),_p=[1105920,1112319];function b4(e){var t=e.replace(S4,""),n=L3(t,0),r=n>=_p[0]&&n<=_p[1],i=t.length===2?t[0]===t[1]:!1;return{value:Mu(i?t[0]:t),isSecondary:r||i}}function Np(e,t){var n="".concat(f3).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Xr(e.children),o=a.filter(function(S){return S.getAttribute(zu)===t})[0],s=kn.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(v3),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var p=s.getPropertyValue("content"),m=~["Sharp"].indexOf(l[2])?oe:G,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Hi[m][l[2].toLowerCase()]:g3[m][c],x=b4(p),y=x.value,b=x.isSecondary,h=l[0].startsWith("FontAwesome"),d=xf(g,y),v=d;if(h){var w=W3(y);w.iconName&&w.prefix&&(d=w.iconName,g=w.prefix)}if(d&&!b&&(!o||o.getAttribute(pf)!==g||o.getAttribute(mf)!==v)){e.setAttribute(n,v),o&&e.removeChild(o);var k=p4(),E=k.extra;E.attributes[zu]=t,Wu(d,g).then(function(S){var A=kf(N(N({},k),{},{icons:{main:S,mask:wf()},prefix:g,iconName:v,extra:E,watchable:!0})),D=Z.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(D,e.firstChild):e.appendChild(D),D.outerHTML=A.map(function(L){return oa(L)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function C4(e){return Promise.all([Np(e,"::before"),Np(e,"::after")])}function E4(e){return e.parentNode!==document.head&&!~p3.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(zu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Tp(e){if(Kt)return new Promise(function(t,n){var r=Xr(e.querySelectorAll("*")).filter(E4).map(C4),i=Sf.begin("searchPseudoElements");j1(),Promise.all(r).then(function(){i(),Yu(),t()}).catch(function(){i(),Yu(),n()})})}var j4={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Tp,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Z:r;$.searchPseudoElements&&Tp(i)}}},Ap=!1,P4={mixout:function(){return{dom:{unwatch:function(){j1(),Ap=!0}}}},hooks:function(){return{bootstrap:function(){Ep(Du("mutationObserverCallbacks",{}))},noAuto:function(){u4()},watch:function(n){var r=n.observeMutationsRoot;Ap?Yu():Ep(Du("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},$p=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},_4={mixout:function(){return{parse:{transform:function(n){return $p(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=$p(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),p={transform:"".concat(l," ").concat(c," ").concat(f)},m={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:p,path:m};return{tag:"g",attributes:N({},g.outer),children:[{tag:"g",attributes:N({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:N(N({},r.icon.attributes),g.path)}]}]}}}},bl={x:0,y:0,width:"100%",height:"100%"};function Op(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function N4(e){return e.tag==="g"?e.children:[e]}var T4={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Ls(i.split(" ").map(function(o){return o.trim()})):wf();return a.prefix||(a.prefix=Sn()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,c=a.width,f=a.icon,p=o.width,m=o.icon,g=_3({transform:l,containerWidth:p,iconWidth:c}),x={tag:"rect",attributes:N(N({},bl),{},{fill:"white"})},y=f.children?{children:f.children.map(Op)}:{},b={tag:"g",attributes:N({},g.inner),children:[Op(N({tag:f.tag,attributes:N(N({},f.attributes),g.path)},y))]},h={tag:"g",attributes:N({},g.outer),children:[b]},d="mask-".concat(s||Ki()),v="clip-".concat(s||Ki()),w={tag:"mask",attributes:N(N({},bl),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,h]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:N4(m)},w]};return r.push(k,{tag:"rect",attributes:N({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(d,")")},bl)}),{children:r,attributes:i}}}},A4={provides:function(t){var n=!1;kn.matchMedia&&(n=kn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:N(N({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=N(N({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:N(N({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:N(N({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:N(N({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:N(N({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:N(N({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:N(N({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:N(N({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},$4={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},O4=[A3,y4,x4,w4,k4,j4,P4,_4,T4,A4,$4];H3(O4,{mixoutsTo:Je});Je.noAuto;Je.config;Je.library;Je.dom;var Hu=Je.parse;Je.findIconDefinition;Je.toHtml;var I4=Je.icon;Je.layer;Je.text;Je.counter;var _1={exports:{}},R4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",L4=R4,z4=L4;function N1(){}function T1(){}T1.resetWarningCache=N1;var M4=function(){function e(r,i,a,o,s,l){if(l!==z4){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:T1,resetWarningCache:N1};return n.PropTypes=n,n};_1.exports=M4();var F4=_1.exports;const z=zp(F4);function Ip(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function un(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ip(Object(n),!0).forEach(function(r){gr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ip(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Uo(e){"@babel/helpers - typeof";return Uo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Uo(e)}function gr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D4(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function U4(e,t){if(e==null)return{};var n=D4(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Qu(e){return B4(e)||W4(e)||V4(e)||Y4()}function B4(e){if(Array.isArray(e))return Xu(e)}function W4(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function V4(e,t){if(e){if(typeof e=="string")return Xu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xu(e,t)}}function Xu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Y4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H4(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,f=e.spinReverse,p=e.pulse,m=e.fixedWidth,g=e.inverse,x=e.border,y=e.listItem,b=e.flip,h=e.size,d=e.rotation,v=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":m,"fa-inverse":g,"fa-border":x,"fa-li":y,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},gr(t,"fa-".concat(h),typeof h<"u"&&h!==null),gr(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),gr(t,"fa-pull-".concat(v),typeof v<"u"&&v!==null),gr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(k){return w[k]?k:null}).filter(function(k){return k})}function Q4(e){return e=e-0,e===e}function A1(e){return Q4(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var X4=["style"];function K4(e){return e.charAt(0).toUpperCase()+e.slice(1)}function G4(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=A1(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[K4(i)]=a:t[i]=a,t},{})}function $1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return $1(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var f=t.attributes[c];switch(c){case"class":l.attrs.className=f,delete t.attributes.class;break;case"style":l.attrs.style=G4(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=f:l.attrs[A1(c)]=f}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=U4(n,X4);return i.attrs.style=un(un({},i.attrs.style),o),e.apply(void 0,[t.tag,un(un({},i.attrs),s)].concat(Qu(r)))}var O1=!1;try{O1=!0}catch{}function q4(){if(!O1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Rp(e){if(e&&Uo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Hu.icon)return Hu.icon(e);if(e===null)return null;if(e&&Uo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Cl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?gr({},e,t):{}}var ht=$t.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,s=e.titleId,l=e.maskId,c=Rp(n),f=Cl("classes",[].concat(Qu(H4(e)),Qu(a.split(" ")))),p=Cl("transform",typeof e.transform=="string"?Hu.transform(e.transform):e.transform),m=Cl("mask",Rp(r)),g=I4(c,un(un(un(un({},f),p),m),{},{symbol:i,title:o,titleId:s,maskId:l}));if(!g)return q4("Could not find icon",c),null;var x=g.abstract,y={ref:t};return Object.keys(e).forEach(function(b){ht.defaultProps.hasOwnProperty(b)||(y[b]=e[b])}),Z4(x[0],y)});ht.displayName="FontAwesomeIcon";ht.propTypes={beat:z.bool,border:z.bool,beatFade:z.bool,bounce:z.bool,className:z.string,fade:z.bool,flash:z.bool,mask:z.oneOfType([z.object,z.array,z.string]),maskId:z.string,fixedWidth:z.bool,inverse:z.bool,flip:z.oneOf([!0,!1,"horizontal","vertical","both"]),icon:z.oneOfType([z.object,z.array,z.string]),listItem:z.bool,pull:z.oneOf(["right","left"]),pulse:z.bool,rotation:z.oneOf([0,90,180,270]),shake:z.bool,size:z.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:z.bool,spinPulse:z.bool,spinReverse:z.bool,symbol:z.oneOfType([z.bool,z.string]),title:z.string,titleId:z.string,transform:z.oneOfType([z.string,z.object]),swapOpacity:z.bool};ht.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Z4=$1.bind(null,$t.createElement),J4={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},e5={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},t5={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},n5={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]},r5={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};const i5="/assets/white-logo-feb8e269.png",kt=()=>u.jsx(u.Fragment,{children:u.jsxs("footer",{className:"footer",children:[u.jsx("div",{className:"container",children:u.jsxs("div",{className:"row",children:[u.jsx("div",{className:"footer-col",children:u.jsx("img",{src:i5,alt:""})}),u.jsxs("div",{className:"footer-col",children:[u.jsx("h4",{children:"Get in Touch"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx("a",{href:"Tel:07401353144",children:"Phone"})}),u.jsx("li",{children:u.jsx("a",{href:"mailto:info@safwaacademy.co.uk",children:"Email"})}),u.jsx("li",{children:u.jsx("a",{href:"https://api.whatsapp.com/send?phone=+447401353144",target:"_blank",children:"WhatsApp"})})]})]}),u.jsxs("div",{className:"footer-col",children:[u.jsx("h4",{children:"Institute"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx("a",{href:"/about",children:"About Us"})}),u.jsx("li",{children:u.jsx("a",{href:"/courses",children:"Our Courses"})}),u.jsx("li",{children:u.jsx("a",{href:"/termdates",target:"_blank",children:"Term Dates"})}),u.jsx("li",{children:u.jsx("a",{href:"/blog",children:"News"})})]})]}),u.jsxs("div",{className:"footer-col",children:[u.jsx("h4",{children:u.jsx("a",{href:"/policies",children:"Policies"})}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx("a",{href:"/policies/enrolment",children:"Enrolment Policy"})}),u.jsx("li",{children:u.jsx("a",{href:"/policies/uniform",children:"Uniform Policy"})}),u.jsx("li",{children:u.jsx("a",{href:"/policies/behaviour",children:"Behaviour Policy"})}),u.jsx("li",{children:u.jsx("a",{href:"/policies/privacy",children:"Privacy Policy"})}),u.jsx("li",{children:u.jsx("a",{href:"/policies/tncs",children:"Terms & Conditions"})})]})]}),u.jsxs("div",{className:"footer-col",children:[u.jsx("h4",{children:"Follow Us"}),u.jsxs("ul",{className:"social-links",children:[u.jsx("li",{children:u.jsx("a",{href:"#",children:u.jsx(ht,{icon:t5})})}),u.jsx("li",{children:u.jsx("a",{href:"#",children:u.jsx(ht,{icon:e5})})}),u.jsx("li",{children:u.jsx("a",{href:"#",children:u.jsx(ht,{icon:r5})})}),u.jsx("li",{children:u.jsx("a",{href:"#",children:u.jsx(ht,{icon:J4})})})]})]})]})}),u.jsx("div",{className:"container",children:u.jsx("div",{className:"copyright",children:"Copyright ©2024 As-Safwah Academy | All Rights Reserved"})})]})}),a5="_name_ymalr_91",o5="_para_ymalr_105",s5="_subText_ymalr_119",l5="_myDot_ymalr_135",de={"section-three-main-div":"_section-three-main-div_ymalr_1","quotes-img-right":"_quotes-img-right_ymalr_21","quotes-img-left":"_quotes-img-left_ymalr_33","section-three-sub-div-one":"_section-three-sub-div-one_ymalr_43","main-quotes-div":"_main-quotes-div_ymalr_59","quotes-img":"_quotes-img_ymalr_21",name:a5,para:o5,subText:s5,myDot:l5,"myDot--active":"_myDot--active_ymalr_157","not-visible":"_not-visible_ymalr_165"},u5=5e3,c5=e=>{const{testimonialData:t}=e,n=C.useRef(null),r=C.useRef(null),i=C.useRef(null),[a,o]=C.useState(100),[s,l]=C.useState(0);C.useEffect(()=>o(u5),[]),C.useEffect(()=>(i.current=setTimeout(()=>l(p=>p===e.testimonialData.length-1?0:p+1),a),()=>clearTimeout(i.current)),[e.testimonialData.length,s,a]);const c=p=>{if(r.current!==null&&s===p){const m=[...n.current.children];return m.forEach((g,x)=>{document.querySelector(`.feedbackText--${x}`)&&document.querySelector(`.feedbackText--${x}`).classList.add(de["not-visible"])}),m[s+1].classList.remove(de["not-visible"]),de["myDot--active"]}},f=(p,m)=>{l(m),p.forEach((g,x)=>{document.querySelector(`.feedbackText--${x}`).classList.add(de["not-visible"]),document.querySelector(`.buttonDot${x}`).classList.remove(de["myDot--active"])}),document.querySelector(`.feedbackText--${m}`).classList.remove(de["not-visible"]),document.querySelector(`.buttonDot${m}`).classList.add(de["myDot--active"])};return u.jsxs("div",{className:`${de["section-three-main-div"]} testimonial`,children:[u.jsxs("div",{ref:n,className:de["section-three-sub-div-one"],children:[u.jsx("div",{className:`${de["quotes-img"]} ${de["quotes-img-right"]}`}),t.map((p,m)=>u.jsxs("div",{className:`feedbackText--${m} ${de["main-quotes-div"]} ${de["not-visible"]}`,children:[u.jsx("div",{className:de.name,children:p.name}),u.jsx("div",{className:de.para,children:p.type}),u.jsx("div",{className:de.subText,children:p.review})]},m)),u.jsx("div",{className:`${de["quotes-img"]} ${de["quotes-img-left"]}`})]}),u.jsx("div",{ref:r,children:t.map((p,m,g)=>u.jsx("div",{name:"change testimonial",className:`buttonDot${m} ${de.myDot} ${s===m?c(m):""}`,onClick:()=>f(g,m)},m))})]})},f5=$t.memo(c5),Lp="/assets/Quran-c2b90ec4.png",I1="/assets/Arabic-3744b8e0.png",d5="/assets/Charity-7262dc06.png",p5="/assets/Ramadan-70992503.png",m5="/assets/Dates-83af5195.png",R1=[{id:"1",title:"Exploring the Beauty of Islamic Calligraphy",image:I1,time:"1 min read",date:"Nov 2023",summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus repellendus, voluptates ab, nesciunt minus eveniet, quaerat facere quidem tempore quos dolor tenetur. Iusto id maiores tempore cum. Earum, nulla tempore?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero vitae lectus tristique convallis. Proin quis facilisis tortor. Nullam ultricies erat sed nibh consectetur, at aliquet lectus accumsan."},{id:"2",title:"The Importance of Charity in Islam",image:d5,time:"1 min read",date:"Nov 2023",summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus repellendus, voluptates ab, nesciunt minus eveniet, quaerat facere quidem tempore quos dolor tenetur. Iusto id maiores tempore cum. Earum, nulla tempore?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero vitae lectus tristique convallis. Proin quis facilisis tortor. Nullam ultricies erat sed nibh consectetur, at aliquet lectus accumsan. Integer eu turpis ac urna viverra consequat. Nunc ac odio nec velit fermentum malesuada."},{id:"3",title:"Ramadan: A Month of Spiritual Reflection and Fasting",image:p5,time:"1 min read",date:"Nov 2023",summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus repellendus, voluptates ab, nesciunt minus eveniet, quaerat facere quidem tempore quos dolor tenetur. Iusto id maiores tempore cum. Earum, nulla tempore?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero vitae lectus tristique convallis. Proin quis facilisis tortor. Nullam ultricies erat sed nibh consectetur, at aliquet lectus accumsan. Integer eu turpis ac urna viverra consequat. Nunc ac odio nec velit fermentum malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus vestibulum ipsum non justo aliquam, vel venenatis justo efficitur."},{id:"4",title:"Significance of Prophetic Foods to health",image:m5,time:"1 min read",date:"Nov 2023",summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus repellendus, voluptates ab, nesciunt minus eveniet, quaerat facere quidem tempore quos dolor tenetur. Iusto id maiores tempore cum. Earum, nulla tempore?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero vitae lectus tristique convallis. Proin quis facilisis tortor. Nullam ultricies erat sed nibh consectetur, at aliquet lectus accumsan. Integer eu turpis ac urna viverra consequat. Nunc ac odio nec velit fermentum malesuada."}],h5=[{id:"1",name:"Ahmed Khan",type:"Parent",review:"I am very pleased with the quality of education my children receive at the Madrasah. The teachers are knowledgeable and dedicated, and the atmosphere promotes a love for learning and Islamic values."},{id:"2",name:"Fatima Ali",type:"Parent",review:"Enrolling my child in the Madrasah was one of the best decisions I've made. The curriculum is well-structured, and the staff ensures a nurturing environment. I appreciate the focus on both academic and moral development."},{id:"3",name:"Muhammad Patel",type:"Student",review:"The Madrasah has played a crucial role in shaping my character and instilling strong Islamic values. The variety of programs and extracurricular activities contribute to a holistic educational experience."}],v5="/assets/Quran2-b02374db.png";const g5=()=>u.jsxs(u.Fragment,{children:[u.jsx(wt,{}),u.jsx(Ot,{page:"home"}),u.jsxs("section",{className:"columns2",children:[u.jsx("div",{children:u.jsx(tr,{direction:"left",casecade:!0,children:u.jsx("img",{src:Lp})})}),u.jsx("div",{className:"col1",children:u.jsxs(tr,{direction:"up",casecade:!0,children:[u.jsx("h1",{children:"Welcome to As-Safwa Academy!"}),u.jsxs("p",{children:["As-Safwa Academy, established in November 2021, is a dedicated Madrasah committed to nurturing the intellectual and spiritual growth of students aged 4-16. Beyond its focus on foundational education, the academy extends its services to the broader community by offering courses for adults. Rooted in Islamic principles, As-Safwa Academy endeavors to impart comprehensive knowledge of the religion, fostering a strong connection to spirituality and creating a sense of community within the local Islamic population.",u.jsx("br",{}),u.jsx("a",{href:"\\about",children:u.jsx("button",{className:"bluebutton",children:"Learn More"})})]})]})})]}),u.jsxs("section",{className:"pgcontainer",style:{background:"#1c4943"},children:[u.jsx(tr,{direction:"up",casecade:!0}),u.jsx(tr,{direction:"right",casecade:!0,children:u.jsx(f5,{testimonialData:h5})})]}),u.jsx(s0,{to:"/courses",children:u.jsxs("section",{className:"pgcontainer",children:[u.jsx(tr,{direction:"up",casecade:!0,children:u.jsx("h1",{children:"What do we offer"})}),u.jsxs("div",{className:" content-section",children:[u.jsxs("div",{className:"overlayCard",children:[u.jsx("img",{src:v5,alt:""}),u.jsx("h2",{children:"Qur'an"}),u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"text",children:"Qur'an"})})]}),u.jsxs("div",{className:"overlayCard",children:[u.jsx("img",{src:Lp,alt:""}),u.jsx("h2",{children:"Islamic Studies"}),u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"text",children:"Islamic Studies"})})]}),u.jsxs("div",{className:"overlayCard",children:[u.jsx("img",{src:I1,alt:""}),u.jsx("h2",{children:"Arabic Language"}),u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"text",children:"Arabic Language"})})]})]})]})}),u.jsx(kt,{})]}),_n="/assets/HeaderBg-51eb7f61.jpg";const Cf=({Data:e})=>{const t=Object.keys(e[0]);return u.jsxs("table",{children:[u.jsx("thead",{children:u.jsx("tr",{children:t.map(n=>u.jsx("th",{children:n},n))})}),u.jsx("tbody",{children:e.map((n,r)=>u.jsx("tr",{children:t.map(i=>u.jsx("td",{children:n[i]},i))},r))})]})},y5=[{Lesson:"Qur'an/Qaaidah",Content:[{Term:"Term 1",Content:`Makhraj Refinement
(theory & application)`},{Term:"Term 2",Content:`Rules of Madd
(theory & application)`},{Term:"Term 3",Content:`Rules of Ghunnah
(theory & application)`}],Summary:"Lorem Ipsum for Qur'an/Qaaidah Summary"},{Lesson:"Islamic Studies",Content:[{Term:"Term 1",Content:u.jsxs("ul",{children:[u.jsx("li",{children:"Tarbiyah: Character Building"}),u.jsx("li",{children:"Fiqh of Taharah and Salah"})]})},{Term:"Term 2",Content:u.jsxs("ul",{children:[u.jsx("li",{children:" Fiqh of Salah + Related Duas "}),u.jsx("li",{children:" Fiqh of Fasting"}),u.jsx("li",{children:" Who is Allah? (99 names)"})]})},{Term:"Term 3",Content:u.jsxs("ul",{children:[u.jsx("li",{children:" Aqidah: Articles of Faith"}),u.jsx("li",{children:" Who is Allah? (99 names) continued"}),u.jsx("li",{children:"Tarikh: Stories of the Prophets"}),u.jsx("li",{children:"End of Year activities"})]})}],Summary:"Lorem Ipsum for Islamic Studies Summary"},{Lesson:"Arabic Lesson",Content:[{}],Summary:"Students use the Safar Academy Arabic Handwriting books to develop their writing skills. "}],x5=[{Time:"9:00 AM - 10:35 AM",Type:"Period 1",Lesson:"Qaaidah/Qur'an Class"},{Time:"10:35 AM - 10:45 AM",Type:"Break",Lesson:"Indoors"},{Time:"10:45 AM - 11:45 AM",Type:"Period 2",Lesson:"Islamic Studies Class"},{Time:"11:45 AM - 12:10 AM",Type:"Break",Lesson:"Outdoors"},{Time:"12:15 AM - 01:00 PM",Type:"Period 3",Lesson:"Arabic Lesson"}],w5="/assets/As-Safwah_Logo-aca8343a.png",k5=()=>u.jsxs(u.Fragment,{children:[u.jsx(wt,{}),u.jsx(Ot,{text:"About Us",img:_n}),u.jsxs("section",{className:"pgcontainer columns2",children:[u.jsx("div",{children:u.jsx("img",{src:w5,alt:""})}),u.jsxs("div",{className:"col1",children:[u.jsx("h1",{children:"Our Institute"}),u.jsx("p",{children:"Safwa Academy was established in November 2021."}),u.jsxs("p",{children:[u.jsx("strong",{children:"Location:"})," Pimlico Academy, Lupus St, Pimlico, London SW1V 3AT"]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Phone:"})," 07_______"]}),u.jsxs("p",{children:[u.jsx("strong",{children:"E-mail:"}),"info@assafwahacademy.co.uk"]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Time:"})," 09:00AM - 01:00PM"]})]})]}),u.jsxs("section",{className:"pgcontainer",children:[u.jsx("h1",{children:"Class Timetable"}),u.jsx("p",{children:"Classes take place every Sunday at Pimlico Academy, 36 Lupus St, Pimlico, London SW1V 3AT."}),u.jsx("br",{}),u.jsx(Cf,{Data:x5}),u.jsx("br",{}),u.jsxs("p",{children:["See ",u.jsx("a",{href:"/termdates",style:{color:"#1c4943",fontWeight:"600"},children:" Term Dates "})," for more information about term times."]})]}),u.jsxs("section",{className:"pgcontainer",children:[u.jsx("h1",{children:"Fees"}),u.jsx("p",{children:"The fees for the courses are as follows:"})]}),u.jsx(kt,{})]});const S5=()=>{};var b5={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},C5={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};const El={fontSize:"4rem",margin:"0 auto",color:"#021122"},E5=()=>u.jsxs(u.Fragment,{children:[u.jsx(wt,{}),u.jsx(Ot,{text:"Get in Touch",img:_n,page:"policy"}),u.jsxs("section",{className:"grid3col",children:[u.jsx("div",{className:"card",children:u.jsxs("a",{href:"tel:07401353144",children:[u.jsx(ht,{icon:b5,style:El}),u.jsx("h2",{children:"Phone"}),u.jsx("p",{children:"Call us on 07401353144"})]})}),u.jsx("div",{className:"card",children:u.jsxs("a",{href:"mailto:info@safwaacademy.co.uk",children:[u.jsx(ht,{icon:C5,style:El}),u.jsx("h2",{children:"Email"}),u.jsx("p",{children:"info@assafwaacademy.co.uk"})]})}),u.jsx("div",{className:"card",children:u.jsxs("a",{href:"#",children:[u.jsx(ht,{icon:n5,style:El}),u.jsx("h2",{children:"Whatsapp"}),u.jsx("p",{children:"Message us on Whatsapp."})]})})]}),u.jsx(kt,{})]}),j5=()=>u.jsxs(u.Fragment,{children:[u.jsx(wt,{}),u.jsx(kt,{})]});const L1=[{id:"uniform",title:"Uniform Policy",content:u.jsxs("section",{children:[u.jsxs("p",{children:[u.jsx("strong",{children:"Welcome to Safwa Academy!"})," Our uniform policy aims to create a sense of unity, modesty, and discipline among our students. All students, both children and adults, are required to adhere to the specified uniform guidelines outlined below."]}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Uniform Guidelines:"})}),u.jsx("p",{children:"The uniform for boys consists of:"}),u.jsxs("ul",{children:[u.jsx("li",{children:"White thobe"}),u.jsx("li",{children:"Navy blue or black jumper"})]}),u.jsx("p",{children:"The uniform for girls consists of:"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Black abayah"}),u.jsx("li",{children:"Black headscarf"}),u.jsx("li",{children:"Navy blue or black jumper"})]}),u.jsx("br",{}),u.jsx("p",{children:"All students are required to wear the complete uniform during class hours and any institute-related activities."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Modesty and Respect:"})}),u.jsx("p",{children:"We emphasize the values of modesty and respect for Islamic traditions. The uniform is a reflection of these principles, and students are expected to wear it with dignity and adherence to the guidelines."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Exceptions and Special Circumstances:"})}),u.jsx("p",{children:"Exceptions to the uniform policy must be approved by the administration in advance. If there are special circumstances preventing a student from wearing the prescribed uniform, please contact [your contact information] to discuss alternative arrangements."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Enforcement:"})}),u.jsx("p",{children:"Enforcement of the uniform policy is essential for maintaining a focused and respectful learning environment. Students not adhering to the uniform guidelines may face appropriate consequences, as determined by the institute's administration."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Contact Us:"})}),u.jsx("p",{children:"If you have any questions or concerns regarding the uniform policy, please contact us at [your contact information]."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"This Uniform Policy was last updated on [date]."})})]})},{id:"enrolment",title:"Enrolment Policy",content:"Enrolment at our Madrasah Islamic Institute is open to students of all backgrounds who are interested in gaining knowledge about Islam. To enroll, parents or guardians must complete the registration form and provide the necessary documentation. We welcome students of varying levels of Islamic knowledge and strive to create a supportive and inclusive learning environment. Enrolled students are expected to attend classes regularly and actively participate in the educational activities of the Madrasah."},{id:"behaviour",title:"Behaviour Policy",content:"The Madrasah emphasizes the importance of exemplary behavior in line with Islamic teachings. Students are expected to demonstrate respect for their teachers, fellow students, and all staff members. Any form of disruptive behavior, bullying, or disrespect will not be tolerated. The Madrasah aims to cultivate an environment of mutual respect, cooperation, and learning. Parents and guardians are encouraged to be actively involved in supporting positive behavior and reinforcing Islamic values at home."},{id:"tncs",title:"Terms & Conditions",content:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:u.jsx("strong",{children:"Terms and Conditions for As-Safwah Academy for Kids"})}),u.jsxs("p",{children:[u.jsx("strong",{children:"Last Updated:"})," [Date]"]}),u.jsx("p",{children:"Welcome to As-Safwah Academy for Kids. By using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully:"}),u.jsx("p",{children:u.jsx("strong",{children:"1. Registration and Eligibility:"})}),u.jsx("p",{children:"Parents or legal guardians may register children for As-Safwah Academy for Kids. By registering a child, you confirm that you have the legal authority to do so."}),u.jsx("p",{children:u.jsx("strong",{children:"2. Course Enrollment:"})}),u.jsx("p",{children:"Enrollment in specific courses is subject to availability. As-Safwah Academy for Kids reserves the right to modify or cancel courses at its discretion."}),u.jsx("p",{children:u.jsx("strong",{children:"3. Payment and Fees:"})}),u.jsx("p",{children:"Fees for courses are outlined during the registration process. Payments are non-refundable, except in cases where a course is canceled by As-Safwah Academy for Kids."}),u.jsx("p",{children:u.jsx("strong",{children:"4. Code of Conduct:"})}),u.jsx("p",{children:"Children are expected to behave respectfully and adhere to the code of conduct outlined by As-Safwah Academy for Kids. Any disruptive behavior may result in the child's removal from the course."}),u.jsx("p",{children:u.jsx("strong",{children:"5. Privacy Policy:"})}),u.jsxs("p",{children:["The ",u.jsx("strong",{children:"Privacy Policy"})," of As-Safwah Academy for Kids, as outlined separately, governs the collection and use of personal information."]}),u.jsx("p",{children:u.jsx("strong",{children:"6. Intellectual Property:"})}),u.jsx("p",{children:"All materials, including but not limited to course content, videos, and images, are the intellectual property of As-Safwah Academy for Kids and may not be reproduced or distributed without explicit permission."}),u.jsx("p",{children:u.jsx("strong",{children:"7. Termination:"})}),u.jsx("p",{children:"As-Safwah Academy for Kids reserves the right to terminate a child's enrollment in a course for violation of these terms and conditions or any disruptive behavior."}),u.jsx("p",{children:u.jsx("strong",{children:"8. Parental Involvement:"})}),u.jsx("p",{children:"Parents are encouraged to actively participate in their child's learning experience. Regular communication between parents and As-Safwah Academy for Kids is vital for the child's progress."}),u.jsx("p",{children:u.jsx("strong",{children:"9. Limitation of Liability:"})}),u.jsx("p",{children:"As-Safwah Academy for Kids is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services."}),u.jsx("p",{children:u.jsx("strong",{children:"10. Changes to Terms and Conditions:"})}),u.jsx("p",{children:"As-Safwah Academy for Kids reserves the right to update or modify these terms and conditions at any time. Any changes will be effective immediately upon posting on our website."}),u.jsx("p",{children:u.jsx("strong",{children:"11. Contact Us:"})}),u.jsx("p",{children:"If you have any questions or concerns about these Terms and Conditions, please contact us at [contact email/phone]."}),u.jsx("p",{children:"Thank you for choosing As-Safwah Academy for Kids."})]})},{id:"privacy",title:"Privacy Policy",content:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:u.jsx("strong",{children:"Introduction"})}),u.jsx("p",{children:"Welcome to Safwa Academy! This Privacy Notice explains how we collect, use, disclose, and safeguard your personal information. We are committed to protecting your privacy and ensuring the security of your data."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Information We Collect"})}),u.jsx("p",{children:"We may collect personal information from students and adults participating in our courses. This may include, but is not limited to, names, contact information, and any additional information required for course enrollment and administration."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"How We Use Your Information"})}),u.jsx("p",{children:"We use the collected information to:"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Facilitate course enrollment and administration."}),u.jsx("li",{children:"Communicate important updates and announcements."}),u.jsx("li",{children:"Ensure the safety and well-being of our students and participants."}),u.jsx("li",{children:"Improve our educational programs and services."})]}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Disclosure of Information"})}),u.jsx("p",{children:"We may share personal information with authorized staff members and instructors for the purpose of course management. We will not disclose your information to third parties without your consent, except as required by law."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Data Security"})}),u.jsx("p",{children:"We implement reasonable security measures to protect your personal information from unauthorized access and use. However, please be aware that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Your Choices"})}),u.jsx("p",{children:"You have the right to review, update, or delete your personal information. If you have any concerns about your privacy or wish to exercise your rights, please contact us at [your contact information]."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Changes to This Privacy Notice"})}),u.jsx("p",{children:"We reserve the right to update and modify this Privacy Notice. Any changes will be posted on our website, and the date of the last update will be indicated at the top of the notice."}),u.jsx("br",{}),u.jsx("p",{children:u.jsx("strong",{children:"Contact Us"})}),u.jsx("p",{children:"If you have any questions or concerns about this Privacy Notice, please contact us at [your contact information]."}),u.jsx("br",{}),u.jsx("p",{children:"This Privacy Notice was last updated on [date]."})]})}],P5=()=>u.jsxs(u.Fragment,{children:[u.jsx(wt,{}),u.jsx(Ot,{text:"Our Policies",img:_n}),u.jsx("section",{className:"pgcontainer policygrid",children:L1.map((e,t)=>u.jsx(s0,{to:`/policies/${e.id}`,children:u.jsxs("div",{className:"policybox col1",children:[u.jsx("h1",{children:e.title}),u.jsx("p",{style:{textAlign:"left"},children:e.content})]})}))}),u.jsx(kt,{})]}),_5=({policy:e})=>u.jsxs(u.Fragment,{children:[u.jsx(wt,{}),u.jsx(Ot,{text:e.title,img:_n,page:"policy"}),u.jsx("section",{className:"policyContainer",children:e.content}),u.jsx(kt,{})]}),N5=()=>{const{policyId:e}=Hc(),t=L1.find(n=>n.id===e);return t?u.jsx(_5,{policy:t}):u.jsx("div",{children:"Policy not found"})},T5=[{id:"class1",title:"Class 1",summary:"For boys and girls aged 4 to 9",content:u.jsx("p",{children:"The syllabus for class 1 ..."})},{id:"class2",title:"Class 2",summary:"For girls aged 10 to 12",content:u.jsx("p",{children:"The syllabus for class 1 ..."})},{id:"class3",title:"Class 3",summary:"For students aged 9 to 10",content:u.jsx("p",{children:"The syllabus for class 1 ..."})},{id:"class4",title:"Class 4",summary:"For boys aged 12 to 16",content:u.jsx("p",{children:"The syllabus for class 1 ..."})},{id:"class5",title:"Class 5",summary:"For girls aged 12 to 16",content:u.jsx("p",{children:"The syllabus for class 1 ..."})}];const A5=Qr.button`
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
`,$5=Qr.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`,O5=({types:e})=>{const[t,n]=C.useState(e[0].Lesson);return u.jsx(u.Fragment,{children:u.jsxs("div",{className:"tabcontainer",children:[u.jsx($5,{children:e.map(r=>u.jsx(A5,{active:t===r.Lesson,onClick:()=>n(r.Lesson),children:r.Lesson},r.Lesson))}),u.jsx("p",{}),e.map(r=>t===r.Lesson&&u.jsxs("div",{className:"tabcontent",children:[u.jsx("p",{children:r.Summary}),u.jsx(Cf,{Data:r.Content})]},r.Lesson+"-content"))]})})},I5=()=>u.jsxs(u.Fragment,{children:[u.jsx(wt,{}),u.jsx(Ot,{text:"Course",img:_n}),u.jsx("section",{className:"pgcontainer content-container",children:"Our institute holds classes for students aged 4-16 years old. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sapiente praesentium voluptas vel doloremque rerum quae velit, quas sed aut autem itaque quam voluptatibus laboriosam dolores repudiandae, alias nisi? Molestias."}),u.jsxs("section",{className:"pgcontainer",children:[u.jsx("h1",{children:"Curriculum"}),u.jsx(O5,{types:y5})]}),u.jsx(kt,{})]}),R5=({course:e})=>u.jsxs(u.Fragment,{children:[u.jsx(wt,{}),u.jsx(Ot,{text:e.title,img:_n}),u.jsxs("section",{className:"pgcontainer",children:[u.jsx("h1",{children:e.title}),e.content]}),u.jsx(kt,{})]}),L5=()=>{const{courseId:e}=Hc(),t=T5.find(n=>n.id===e);return t?u.jsx("div",{children:u.jsx(R5,{course:t})}):u.jsx("div",{children:"Policy not found"})},z5=()=>u.jsxs(u.Fragment,{children:[u.jsx(wt,{}),u.jsx(Ot,{text:"Blog",img:_n}),u.jsx("div",{className:"pgcontainer content-section",children:R1.map((e,t)=>u.jsx("div",{className:"card",children:u.jsxs("a",{href:`/blog/${e.id}`,children:[u.jsx("img",{src:e.image,alt:""}),u.jsx("h2",{children:e.title}),u.jsxs("p",{className:"subp",children:[e.time,u.jsx("span",{style:{float:"right",textAlign:"right"},children:e.date})]}),u.jsx("p",{children:e.summary})]})}))}),u.jsx(kt,{})]}),M5=({blog:e})=>u.jsxs(u.Fragment,{children:[u.jsx(wt,{scrollVal:0}),u.jsx("section",{className:"pgcontainer"}),u.jsx("section",{className:"pgcontainer",children:u.jsx("h1",{children:e.title})}),u.jsx(Ot,{img:e.image}),u.jsx("div",{className:"pgcontainer",children:u.jsx("div",{children:e.content})}),u.jsx(kt,{})]}),F5=()=>{const{blogId:e}=Hc();console.log(e);const t=R1.find(n=>n.id===e);return t?u.jsx(M5,{blog:t}):u.jsx("div",{children:"Blog not found"})},D5=[{name:"Term 1",start:"Sunday, 10th September 2023",end:"Sunday, 22nd October 2023",type:"Term time",duration:"(7 weeks)"},{name:"Half Term",start:"Sunday, 29th October 2023",end:"Sunday, 5th November 2023",type:"Autumn half-term break",duration:"(2 weeks)"},{name:"Term 2",start:"Sunday, 12th November 2023",end:"Sunday, 17th December 2023",type:"Term time",duration:"(6 weeks)"},{name:"Winter Break",start:"Sunday, 24th December 2023",end:"Sunday, 31st December 2023",type:"Winter break",duration:"(3 weeks)"},{name:"Term 3",start:"Sunday, 7th January 2024",end:"Sunday, 11th February 2024",type:"Term time",duration:"(6 weeks)"},{name:"Half Term",start:"Sunday, 18th February 2024",type:"Spring half-term break",duration:"(1 week)"},{name:"Term 4",start:"Sunday, 25th February 2024",end:"Sunday, 24th March 2024",type:"Term time",duration:"(5 weeks)"},{name:"Spring Break",start:"Sunday, 31st March 2024",end:"Sunday 14th April 2024",type:"Ramadan & Eid Holiday",duration:"(3 weeks)"},{name:"Term 5",start:"Sunday, 21st April 2024",end:"Sunday, 26th May 2024",type:"Term time",duration:"(6 weeks)"},{name:"Half Term",start:"Sunday, 2nd June 2024",type:"Summer half-term break",duration:"(1 week)"},{name:"Term 6",start:"Sunday, 9th June 2024",end:"Sunday, 14th July 2024",type:"Term time",duration:"(5 weeks)"}];const U5=()=>u.jsxs(u.Fragment,{children:[u.jsx(wt,{}),u.jsx(Ot,{text:"Term Dates",img:_n,page:"policy"}),u.jsx("section",{className:"pgcontainer",children:u.jsx(Cf,{Data:D5})}),u.jsx(kt,{})]}),B5=()=>u.jsx(r2,{children:u.jsxs(qy,{children:[u.jsx(Ve,{path:"/",element:u.jsx(g5,{})}),u.jsx(Ve,{path:"/about",element:u.jsx(k5,{})}),u.jsx(Ve,{path:"/register",element:u.jsx(S5,{})}),u.jsx(Ve,{path:"/policies",element:u.jsx(P5,{})}),u.jsx(Ve,{path:"/policies/:policyId",element:u.jsx(N5,{})}),u.jsx(Ve,{path:"/courses",element:u.jsx(I5,{})}),u.jsx(Ve,{path:"/courses/:courseId",element:u.jsx(L5,{})}),u.jsx(Ve,{path:"/blog",element:u.jsx(z5,{})}),u.jsx(Ve,{path:"/blog/:blogId",element:u.jsx(F5,{})}),u.jsx(Ve,{path:"/contact",element:u.jsx(E5,{})}),u.jsx(Ve,{path:"/sign-in",element:u.jsx(j5,{})}),u.jsx(Ve,{path:"/termdates",element:u.jsx(U5,{})})]})});Pl.createRoot(document.getElementById("root")).render(u.jsx($t.StrictMode,{children:u.jsx(B5,{})}));

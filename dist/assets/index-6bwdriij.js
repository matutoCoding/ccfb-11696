(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Ig(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ng={exports:{}},dc={},Ug={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=Symbol.for("react.element"),jv=Symbol.for("react.portal"),Xv=Symbol.for("react.fragment"),Yv=Symbol.for("react.strict_mode"),qv=Symbol.for("react.profiler"),$v=Symbol.for("react.provider"),Kv=Symbol.for("react.context"),Zv=Symbol.for("react.forward_ref"),Qv=Symbol.for("react.suspense"),Jv=Symbol.for("react.memo"),ex=Symbol.for("react.lazy"),rp=Symbol.iterator;function tx(t){return t===null||typeof t!="object"?null:(t=rp&&t[rp]||t["@@iterator"],typeof t=="function"?t:null)}var Fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Og=Object.assign,kg={};function Qs(t,e,n){this.props=t,this.context=e,this.refs=kg,this.updater=n||Fg}Qs.prototype.isReactComponent={};Qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zg(){}zg.prototype=Qs.prototype;function Fh(t,e,n){this.props=t,this.context=e,this.refs=kg,this.updater=n||Fg}var Oh=Fh.prototype=new zg;Oh.constructor=Fh;Og(Oh,Qs.prototype);Oh.isPureReactComponent=!0;var sp=Array.isArray,Bg=Object.prototype.hasOwnProperty,kh={current:null},Hg={key:!0,ref:!0,__self:!0,__source:!0};function Vg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Bg.call(e,i)&&!Hg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:la,type:t,key:s,ref:o,props:r,_owner:kh.current}}function nx(t,e){return{$$typeof:la,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===la}function ix(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var op=/\/+/g;function Vc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ix(""+t.key):e.toString(36)}function ul(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case la:case jv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Vc(o,0):i,sp(r)?(n="",t!=null&&(n=t.replace(op,"$&/")+"/"),ul(r,e,n,"",function(c){return c})):r!=null&&(zh(r)&&(r=nx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(op,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",sp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Vc(s,a);o+=ul(s,e,n,l,r)}else if(l=tx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Vc(s,a++),o+=ul(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ya(t,e,n){if(t==null)return t;var i=[],r=0;return ul(t,i,"","",function(s){return e.call(n,s,r++)}),i}function rx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},dl={transition:null},sx={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:dl,ReactCurrentOwner:kh};function Gg(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:ya,forEach:function(t,e,n){ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ya(t,function(){e++}),e},toArray:function(t){return ya(t,function(e){return e})||[]},only:function(t){if(!zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=Qs;ke.Fragment=Xv;ke.Profiler=qv;ke.PureComponent=Fh;ke.StrictMode=Yv;ke.Suspense=Qv;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sx;ke.act=Gg;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Og({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Bg.call(e,l)&&!Hg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:la,type:t.type,key:r,ref:s,props:i,_owner:o}};ke.createContext=function(t){return t={$$typeof:Kv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$v,_context:t},t.Consumer=t};ke.createElement=Vg;ke.createFactory=function(t){var e=Vg.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:Zv,render:t}};ke.isValidElement=zh;ke.lazy=function(t){return{$$typeof:ex,_payload:{_status:-1,_result:t},_init:rx}};ke.memo=function(t,e){return{$$typeof:Jv,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=dl.transition;dl.transition={};try{t()}finally{dl.transition=e}};ke.unstable_act=Gg;ke.useCallback=function(t,e){return nn.current.useCallback(t,e)};ke.useContext=function(t){return nn.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};ke.useEffect=function(t,e){return nn.current.useEffect(t,e)};ke.useId=function(){return nn.current.useId()};ke.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return nn.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};ke.useRef=function(t){return nn.current.useRef(t)};ke.useState=function(t){return nn.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return nn.current.useTransition()};ke.version="18.3.1";Ug.exports=ke;var $e=Ug.exports;const Wg=Ig($e);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ox=$e,ax=Symbol.for("react.element"),lx=Symbol.for("react.fragment"),cx=Object.prototype.hasOwnProperty,ux=ox.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dx={key:!0,ref:!0,__self:!0,__source:!0};function jg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)cx.call(e,i)&&!dx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ax,type:t,key:s,ref:o,props:r,_owner:ux.current}}dc.Fragment=lx;dc.jsx=jg;dc.jsxs=jg;Ng.exports=dc;var T=Ng.exports,ed={},Xg={exports:{}},Rn={},Yg={exports:{}},qg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,Y){var Q=D.length;D.push(Y);e:for(;0<Q;){var ie=Q-1>>>1,Ee=D[ie];if(0<r(Ee,Y))D[ie]=Y,D[Q]=Ee,Q=ie;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var Y=D[0],Q=D.pop();if(Q!==Y){D[0]=Q;e:for(var ie=0,Ee=D.length,ze=Ee>>>1;ie<ze;){var X=2*(ie+1)-1,ne=D[X],he=X+1,ce=D[he];if(0>r(ne,Q))he<Ee&&0>r(ce,ne)?(D[ie]=ce,D[he]=Q,ie=he):(D[ie]=ne,D[X]=Q,ie=X);else if(he<Ee&&0>r(ce,Q))D[ie]=ce,D[he]=Q,ie=he;else break e}}return Y}function r(D,Y){var Q=D.sortIndex-Y.sortIndex;return Q!==0?Q:D.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,p=3,h=!1,x=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=D)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function S(D){if(g=!1,v(D),!x)if(n(l)!==null)x=!0,G(P);else{var Y=n(c);Y!==null&&$(S,Y.startTime-D)}}function P(D,Y){x=!1,g&&(g=!1,u(b),b=-1),h=!0;var Q=p;try{for(v(Y),f=n(l);f!==null&&(!(f.expirationTime>Y)||D&&!E());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,p=f.priorityLevel;var Ee=ie(f.expirationTime<=Y);Y=t.unstable_now(),typeof Ee=="function"?f.callback=Ee:f===n(l)&&i(l),v(Y)}else i(l);f=n(l)}if(f!==null)var ze=!0;else{var X=n(c);X!==null&&$(S,X.startTime-Y),ze=!1}return ze}finally{f=null,p=Q,h=!1}}var C=!1,A=null,b=-1,V=5,y=-1;function E(){return!(t.unstable_now()-y<V)}function O(){if(A!==null){var D=t.unstable_now();y=D;var Y=!0;try{Y=A(!0,D)}finally{Y?B():(C=!1,A=null)}}else C=!1}var B;if(typeof _=="function")B=function(){_(O)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,q=W.port2;W.port1.onmessage=O,B=function(){q.postMessage(null)}}else B=function(){m(O,0)};function G(D){A=D,C||(C=!0,B())}function $(D,Y){b=m(function(){D(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){x||h||(x=!0,G(P))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(p){case 1:case 2:case 3:var Y=3;break;default:Y=p}var Q=p;p=Y;try{return D()}finally{p=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,Y){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=p;p=D;try{return Y()}finally{p=Q}},t.unstable_scheduleCallback=function(D,Y,Q){var ie=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ie+Q:ie):Q=ie,D){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=Q+Ee,D={id:d++,callback:Y,priorityLevel:D,startTime:Q,expirationTime:Ee,sortIndex:-1},Q>ie?(D.sortIndex=Q,e(c,D),n(l)===null&&D===n(c)&&(g?(u(b),b=-1):g=!0,$(S,Q-ie))):(D.sortIndex=Ee,e(l,D),x||h||(x=!0,G(P))),D},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(D){var Y=p;return function(){var Q=p;p=Y;try{return D.apply(this,arguments)}finally{p=Q}}}})(qg);Yg.exports=qg;var hx=Yg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fx=$e,Cn=hx;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $g=new Set,Vo={};function Yr(t,e){ks(t,e),ks(t+"Capture",e)}function ks(t,e){for(Vo[t]=e,t=0;t<e.length;t++)$g.add(e[t])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),td=Object.prototype.hasOwnProperty,px=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ap={},lp={};function mx(t){return td.call(lp,t)?!0:td.call(ap,t)?!1:px.test(t)?lp[t]=!0:(ap[t]=!0,!1)}function gx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _x(t,e,n,i){if(e===null||typeof e>"u"||gx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bh=/[\-:]([a-z])/g;function Hh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bh,Hh);Vt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bh,Hh);Vt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bh,Hh);Vt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vh(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_x(e,n,r,i)&&(n=null),i||r===null?mx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ii=fx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),hs=Symbol.for("react.portal"),fs=Symbol.for("react.fragment"),Gh=Symbol.for("react.strict_mode"),nd=Symbol.for("react.profiler"),Kg=Symbol.for("react.provider"),Zg=Symbol.for("react.context"),Wh=Symbol.for("react.forward_ref"),id=Symbol.for("react.suspense"),rd=Symbol.for("react.suspense_list"),jh=Symbol.for("react.memo"),Gi=Symbol.for("react.lazy"),Qg=Symbol.for("react.offscreen"),cp=Symbol.iterator;function so(t){return t===null||typeof t!="object"?null:(t=cp&&t[cp]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,Gc;function wo(t){if(Gc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gc=e&&e[1]||""}return`
`+Gc+t}var Wc=!1;function jc(t,e){if(!t||Wc)return"";Wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wo(t):""}function vx(t){switch(t.tag){case 5:return wo(t.type);case 16:return wo("Lazy");case 13:return wo("Suspense");case 19:return wo("SuspenseList");case 0:case 2:case 15:return t=jc(t.type,!1),t;case 11:return t=jc(t.type.render,!1),t;case 1:return t=jc(t.type,!0),t;default:return""}}function sd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fs:return"Fragment";case hs:return"Portal";case nd:return"Profiler";case Gh:return"StrictMode";case id:return"Suspense";case rd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Zg:return(t.displayName||"Context")+".Consumer";case Kg:return(t._context.displayName||"Context")+".Provider";case Wh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jh:return e=t.displayName||null,e!==null?e:sd(t.type)||"Memo";case Gi:e=t._payload,t=t._init;try{return sd(t(e))}catch{}}return null}function xx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sd(e);case 8:return e===Gh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yx(t){var e=Jg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ma(t){t._valueTracker||(t._valueTracker=yx(t))}function e0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Jg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function od(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function up(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function t0(t,e){e=e.checked,e!=null&&Vh(t,"checked",e,!1)}function ad(t,e){t0(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ld(t,e.type,n):e.hasOwnProperty("defaultValue")&&ld(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ld(t,e,n){(e!=="number"||Ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var To=Array.isArray;function Cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function cd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(To(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function n0(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function fp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function i0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ud(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?i0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ea,r0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ea=Ea||document.createElement("div"),Ea.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ea.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Go(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Do={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sx=["Webkit","ms","Moz","O"];Object.keys(Do).forEach(function(t){Sx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Do[e]=Do[t]})});function s0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Do.hasOwnProperty(t)&&Do[t]?(""+e).trim():e+"px"}function o0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=s0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Mx=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dd(t,e){if(e){if(Mx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function hd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fd=null;function Xh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pd=null,Rs=null,Ps=null;function pp(t){if(t=da(t)){if(typeof pd!="function")throw Error(te(280));var e=t.stateNode;e&&(e=gc(e),pd(t.stateNode,t.type,e))}}function a0(t){Rs?Ps?Ps.push(t):Ps=[t]:Rs=t}function l0(){if(Rs){var t=Rs,e=Ps;if(Ps=Rs=null,pp(t),e)for(t=0;t<e.length;t++)pp(e[t])}}function c0(t,e){return t(e)}function u0(){}var Xc=!1;function d0(t,e,n){if(Xc)return t(e,n);Xc=!0;try{return c0(t,e,n)}finally{Xc=!1,(Rs!==null||Ps!==null)&&(u0(),l0())}}function Wo(t,e){var n=t.stateNode;if(n===null)return null;var i=gc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var md=!1;if(Ri)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){md=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{md=!1}function Ex(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Io=!1,Dl=null,Il=!1,gd=null,wx={onError:function(t){Io=!0,Dl=t}};function Tx(t,e,n,i,r,s,o,a,l){Io=!1,Dl=null,Ex.apply(wx,arguments)}function Ax(t,e,n,i,r,s,o,a,l){if(Tx.apply(this,arguments),Io){if(Io){var c=Dl;Io=!1,Dl=null}else throw Error(te(198));Il||(Il=!0,gd=c)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function h0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mp(t){if(qr(t)!==t)throw Error(te(188))}function Cx(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return mp(r),t;if(s===i)return mp(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function f0(t){return t=Cx(t),t!==null?p0(t):null}function p0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=p0(t);if(e!==null)return e;t=t.sibling}return null}var m0=Cn.unstable_scheduleCallback,gp=Cn.unstable_cancelCallback,Rx=Cn.unstable_shouldYield,Px=Cn.unstable_requestPaint,Tt=Cn.unstable_now,bx=Cn.unstable_getCurrentPriorityLevel,Yh=Cn.unstable_ImmediatePriority,g0=Cn.unstable_UserBlockingPriority,Nl=Cn.unstable_NormalPriority,Lx=Cn.unstable_LowPriority,_0=Cn.unstable_IdlePriority,hc=null,ui=null;function Dx(t){if(ui&&typeof ui.onCommitFiberRoot=="function")try{ui.onCommitFiberRoot(hc,t,void 0,(t.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:Ux,Ix=Math.log,Nx=Math.LN2;function Ux(t){return t>>>=0,t===0?32:31-(Ix(t)/Nx|0)|0}var wa=64,Ta=4194304;function Ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ul(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ao(a):(s&=o,s!==0&&(i=Ao(s)))}else o=n&~r,o!==0?i=Ao(o):s!==0&&(i=Ao(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ei(e),r=1<<n,i|=t[n],e&=~r;return i}function Fx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ox(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ei(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Fx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _d(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function v0(){var t=wa;return wa<<=1,!(wa&4194240)&&(wa=64),t}function Yc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ei(e),t[e]=n}function kx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function qh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function x0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var y0,$h,S0,M0,E0,vd=!1,Aa=[],Zi=null,Qi=null,Ji=null,jo=new Map,Xo=new Map,Xi=[],zx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _p(t,e){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(e.pointerId)}}function ao(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=da(e),e!==null&&$h(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Bx(t,e,n,i,r){switch(e){case"focusin":return Zi=ao(Zi,t,e,n,i,r),!0;case"dragenter":return Qi=ao(Qi,t,e,n,i,r),!0;case"mouseover":return Ji=ao(Ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return jo.set(s,ao(jo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Xo.set(s,ao(Xo.get(s)||null,t,e,n,i,r)),!0}return!1}function w0(t){var e=Dr(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=h0(n),e!==null){t.blockedOn=e,E0(t.priority,function(){S0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);fd=i,n.target.dispatchEvent(i),fd=null}else return e=da(n),e!==null&&$h(e),t.blockedOn=n,!1;e.shift()}return!0}function vp(t,e,n){hl(t)&&n.delete(e)}function Hx(){vd=!1,Zi!==null&&hl(Zi)&&(Zi=null),Qi!==null&&hl(Qi)&&(Qi=null),Ji!==null&&hl(Ji)&&(Ji=null),jo.forEach(vp),Xo.forEach(vp)}function lo(t,e){t.blockedOn===e&&(t.blockedOn=null,vd||(vd=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,Hx)))}function Yo(t){function e(r){return lo(r,t)}if(0<Aa.length){lo(Aa[0],t);for(var n=1;n<Aa.length;n++){var i=Aa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zi!==null&&lo(Zi,t),Qi!==null&&lo(Qi,t),Ji!==null&&lo(Ji,t),jo.forEach(e),Xo.forEach(e),n=0;n<Xi.length;n++)i=Xi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Xi.length&&(n=Xi[0],n.blockedOn===null);)w0(n),n.blockedOn===null&&Xi.shift()}var bs=Ii.ReactCurrentBatchConfig,Fl=!0;function Vx(t,e,n,i){var r=et,s=bs.transition;bs.transition=null;try{et=1,Kh(t,e,n,i)}finally{et=r,bs.transition=s}}function Gx(t,e,n,i){var r=et,s=bs.transition;bs.transition=null;try{et=4,Kh(t,e,n,i)}finally{et=r,bs.transition=s}}function Kh(t,e,n,i){if(Fl){var r=xd(t,e,n,i);if(r===null)iu(t,e,i,Ol,n),_p(t,i);else if(Bx(r,t,e,n,i))i.stopPropagation();else if(_p(t,i),e&4&&-1<zx.indexOf(t)){for(;r!==null;){var s=da(r);if(s!==null&&y0(s),s=xd(t,e,n,i),s===null&&iu(t,e,i,Ol,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else iu(t,e,i,null,n)}}var Ol=null;function xd(t,e,n,i){if(Ol=null,t=Xh(i),t=Dr(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=h0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ol=t,null}function T0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bx()){case Yh:return 1;case g0:return 4;case Nl:case Lx:return 16;case _0:return 536870912;default:return 16}default:return 16}}var $i=null,Zh=null,fl=null;function A0(){if(fl)return fl;var t,e=Zh,n=e.length,i,r="value"in $i?$i.value:$i.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return fl=r.slice(t,1<i?1-i:void 0)}function pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ca(){return!0}function xp(){return!1}function Pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ca:xp,this.isPropagationStopped=xp,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),e}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qh=Pn(Js),ua=St({},Js,{view:0,detail:0}),Wx=Pn(ua),qc,$c,co,fc=St({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(qc=t.screenX-co.screenX,$c=t.screenY-co.screenY):$c=qc=0,co=t),qc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),yp=Pn(fc),jx=St({},fc,{dataTransfer:0}),Xx=Pn(jx),Yx=St({},ua,{relatedTarget:0}),Kc=Pn(Yx),qx=St({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),$x=Pn(qx),Kx=St({},Js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zx=Pn(Kx),Qx=St({},Js,{data:0}),Sp=Pn(Qx),Jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ny(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ty[t])?!!e[t]:!1}function Jh(){return ny}var iy=St({},ua,{key:function(t){if(t.key){var e=Jx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ey[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jh,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ry=Pn(iy),sy=St({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=Pn(sy),oy=St({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jh}),ay=Pn(oy),ly=St({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),cy=Pn(ly),uy=St({},fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dy=Pn(uy),hy=[9,13,27,32],ef=Ri&&"CompositionEvent"in window,No=null;Ri&&"documentMode"in document&&(No=document.documentMode);var fy=Ri&&"TextEvent"in window&&!No,C0=Ri&&(!ef||No&&8<No&&11>=No),Ep=" ",wp=!1;function R0(t,e){switch(t){case"keyup":return hy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function P0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function py(t,e){switch(t){case"compositionend":return P0(e);case"keypress":return e.which!==32?null:(wp=!0,Ep);case"textInput":return t=e.data,t===Ep&&wp?null:t;default:return null}}function my(t,e){if(ps)return t==="compositionend"||!ef&&R0(t,e)?(t=A0(),fl=Zh=$i=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return C0&&e.locale!=="ko"?null:e.data;default:return null}}var gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gy[t.type]:e==="textarea"}function b0(t,e,n,i){a0(i),e=kl(e,"onChange"),0<e.length&&(n=new Qh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Uo=null,qo=null;function _y(t){H0(t,0)}function pc(t){var e=_s(t);if(e0(e))return t}function vy(t,e){if(t==="change")return e}var L0=!1;if(Ri){var Zc;if(Ri){var Qc="oninput"in document;if(!Qc){var Ap=document.createElement("div");Ap.setAttribute("oninput","return;"),Qc=typeof Ap.oninput=="function"}Zc=Qc}else Zc=!1;L0=Zc&&(!document.documentMode||9<document.documentMode)}function Cp(){Uo&&(Uo.detachEvent("onpropertychange",D0),qo=Uo=null)}function D0(t){if(t.propertyName==="value"&&pc(qo)){var e=[];b0(e,qo,t,Xh(t)),d0(_y,e)}}function xy(t,e,n){t==="focusin"?(Cp(),Uo=e,qo=n,Uo.attachEvent("onpropertychange",D0)):t==="focusout"&&Cp()}function yy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pc(qo)}function Sy(t,e){if(t==="click")return pc(e)}function My(t,e){if(t==="input"||t==="change")return pc(e)}function Ey(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ni=typeof Object.is=="function"?Object.is:Ey;function $o(t,e){if(ni(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!td.call(e,r)||!ni(t[r],e[r]))return!1}return!0}function Rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pp(t,e){var n=Rp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rp(n)}}function I0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?I0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function N0(){for(var t=window,e=Ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ll(t.document)}return e}function tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wy(t){var e=N0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&I0(n.ownerDocument.documentElement,n)){if(i!==null&&tf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Pp(n,s);var o=Pp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ty=Ri&&"documentMode"in document&&11>=document.documentMode,ms=null,yd=null,Fo=null,Sd=!1;function bp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sd||ms==null||ms!==Ll(i)||(i=ms,"selectionStart"in i&&tf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fo&&$o(Fo,i)||(Fo=i,i=kl(yd,"onSelect"),0<i.length&&(e=new Qh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ms)))}function Ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gs={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},Jc={},U0={};Ri&&(U0=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function mc(t){if(Jc[t])return Jc[t];if(!gs[t])return t;var e=gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in U0)return Jc[t]=e[n];return t}var F0=mc("animationend"),O0=mc("animationiteration"),k0=mc("animationstart"),z0=mc("transitionend"),B0=new Map,Lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){B0.set(t,e),Yr(e,[t])}for(var eu=0;eu<Lp.length;eu++){var tu=Lp[eu],Ay=tu.toLowerCase(),Cy=tu[0].toUpperCase()+tu.slice(1);hr(Ay,"on"+Cy)}hr(F0,"onAnimationEnd");hr(O0,"onAnimationIteration");hr(k0,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(z0,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);Yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ry=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function Dp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ax(i,e,void 0,t),t.currentTarget=null}function H0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Dp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Dp(r,a,c),s=l}}}if(Il)throw t=gd,Il=!1,gd=null,t}function dt(t,e){var n=e[Ad];n===void 0&&(n=e[Ad]=new Set);var i=t+"__bubble";n.has(i)||(V0(e,t,2,!1),n.add(i))}function nu(t,e,n){var i=0;e&&(i|=4),V0(n,t,i,e)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function Ko(t){if(!t[Pa]){t[Pa]=!0,$g.forEach(function(n){n!=="selectionchange"&&(Ry.has(n)||nu(n,!1,t),nu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pa]||(e[Pa]=!0,nu("selectionchange",!1,e))}}function V0(t,e,n,i){switch(T0(e)){case 1:var r=Vx;break;case 4:r=Gx;break;default:r=Kh}n=r.bind(null,e,n,t),r=void 0,!md||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function iu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Dr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}d0(function(){var c=s,d=Xh(n),f=[];e:{var p=B0.get(t);if(p!==void 0){var h=Qh,x=t;switch(t){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":h=ry;break;case"focusin":x="focus",h=Kc;break;case"focusout":x="blur",h=Kc;break;case"beforeblur":case"afterblur":h=Kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=ay;break;case F0:case O0:case k0:h=$x;break;case z0:h=cy;break;case"scroll":h=Wx;break;case"wheel":h=dy;break;case"copy":case"cut":case"paste":h=Zx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Mp}var g=(e&4)!==0,m=!g&&t==="scroll",u=g?p!==null?p+"Capture":null:p;g=[];for(var _=c,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,u!==null&&(S=Wo(_,u),S!=null&&g.push(Zo(_,S,v)))),m)break;_=_.return}0<g.length&&(p=new h(p,x,null,n,d),f.push({event:p,listeners:g}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",p&&n!==fd&&(x=n.relatedTarget||n.fromElement)&&(Dr(x)||x[Pi]))break e;if((h||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,h?(x=n.relatedTarget||n.toElement,h=c,x=x?Dr(x):null,x!==null&&(m=qr(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(h=null,x=c),h!==x)){if(g=yp,S="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(g=Mp,S="onPointerLeave",u="onPointerEnter",_="pointer"),m=h==null?p:_s(h),v=x==null?p:_s(x),p=new g(S,_+"leave",h,n,d),p.target=m,p.relatedTarget=v,S=null,Dr(d)===c&&(g=new g(u,_+"enter",x,n,d),g.target=v,g.relatedTarget=m,S=g),m=S,h&&x)t:{for(g=h,u=x,_=0,v=g;v;v=Zr(v))_++;for(v=0,S=u;S;S=Zr(S))v++;for(;0<_-v;)g=Zr(g),_--;for(;0<v-_;)u=Zr(u),v--;for(;_--;){if(g===u||u!==null&&g===u.alternate)break t;g=Zr(g),u=Zr(u)}g=null}else g=null;h!==null&&Ip(f,p,h,g,!1),x!==null&&m!==null&&Ip(f,m,x,g,!0)}}e:{if(p=c?_s(c):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var P=vy;else if(Tp(p))if(L0)P=My;else{P=yy;var C=xy}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=Sy);if(P&&(P=P(t,c))){b0(f,P,n,d);break e}C&&C(t,p,c),t==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&ld(p,"number",p.value)}switch(C=c?_s(c):window,t){case"focusin":(Tp(C)||C.contentEditable==="true")&&(ms=C,yd=c,Fo=null);break;case"focusout":Fo=yd=ms=null;break;case"mousedown":Sd=!0;break;case"contextmenu":case"mouseup":case"dragend":Sd=!1,bp(f,n,d);break;case"selectionchange":if(Ty)break;case"keydown":case"keyup":bp(f,n,d)}var A;if(ef)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else ps?R0(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(C0&&n.locale!=="ko"&&(ps||b!=="onCompositionStart"?b==="onCompositionEnd"&&ps&&(A=A0()):($i=d,Zh="value"in $i?$i.value:$i.textContent,ps=!0)),C=kl(c,b),0<C.length&&(b=new Sp(b,t,null,n,d),f.push({event:b,listeners:C}),A?b.data=A:(A=P0(n),A!==null&&(b.data=A)))),(A=fy?py(t,n):my(t,n))&&(c=kl(c,"onBeforeInput"),0<c.length&&(d=new Sp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=A))}H0(f,e)})}function Zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function kl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Wo(t,n),s!=null&&i.unshift(Zo(t,s,r)),s=Wo(t,e),s!=null&&i.push(Zo(t,s,r))),t=t.return}return i}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ip(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Wo(n,s),l!=null&&o.unshift(Zo(n,l,a))):r||(l=Wo(n,s),l!=null&&o.push(Zo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Py=/\r\n?/g,by=/\u0000|\uFFFD/g;function Np(t){return(typeof t=="string"?t:""+t).replace(Py,`
`).replace(by,"")}function ba(t,e,n){if(e=Np(e),Np(t)!==e&&n)throw Error(te(425))}function zl(){}var Md=null,Ed=null;function wd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Td=typeof setTimeout=="function"?setTimeout:void 0,Ly=typeof clearTimeout=="function"?clearTimeout:void 0,Up=typeof Promise=="function"?Promise:void 0,Dy=typeof queueMicrotask=="function"?queueMicrotask:typeof Up<"u"?function(t){return Up.resolve(null).then(t).catch(Iy)}:Td;function Iy(t){setTimeout(function(){throw t})}function ru(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Yo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Yo(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var eo=Math.random().toString(36).slice(2),ci="__reactFiber$"+eo,Qo="__reactProps$"+eo,Pi="__reactContainer$"+eo,Ad="__reactEvents$"+eo,Ny="__reactListeners$"+eo,Uy="__reactHandles$"+eo;function Dr(t){var e=t[ci];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pi]||n[ci]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fp(t);t!==null;){if(n=t[ci])return n;t=Fp(t)}return e}t=n,n=t.parentNode}return null}function da(t){return t=t[ci]||t[Pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function gc(t){return t[Qo]||null}var Cd=[],vs=-1;function fr(t){return{current:t}}function ft(t){0>vs||(t.current=Cd[vs],Cd[vs]=null,vs--)}function lt(t,e){vs++,Cd[vs]=t.current,t.current=e}var cr={},$t=fr(cr),hn=fr(!1),Br=cr;function zs(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function Bl(){ft(hn),ft($t)}function Op(t,e,n){if($t.current!==cr)throw Error(te(168));lt($t,e),lt(hn,n)}function G0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,xx(t)||"Unknown",r));return St({},n,i)}function Hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Br=$t.current,lt($t,t),lt(hn,hn.current),!0}function kp(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=G0(t,e,Br),i.__reactInternalMemoizedMergedChildContext=t,ft(hn),ft($t),lt($t,t)):ft(hn),lt(hn,n)}var Mi=null,_c=!1,su=!1;function W0(t){Mi===null?Mi=[t]:Mi.push(t)}function Fy(t){_c=!0,W0(t)}function pr(){if(!su&&Mi!==null){su=!0;var t=0,e=et;try{var n=Mi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,_c=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),m0(Yh,pr),r}finally{et=e,su=!1}}return null}var xs=[],ys=0,Vl=null,Gl=0,Nn=[],Un=0,Hr=null,Ei=1,wi="";function wr(t,e){xs[ys++]=Gl,xs[ys++]=Vl,Vl=t,Gl=e}function j0(t,e,n){Nn[Un++]=Ei,Nn[Un++]=wi,Nn[Un++]=Hr,Hr=t;var i=Ei;t=wi;var r=32-ei(i)-1;i&=~(1<<r),n+=1;var s=32-ei(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ei=1<<32-ei(e)+r|n<<r|i,wi=s+t}else Ei=1<<s|n<<r|i,wi=t}function nf(t){t.return!==null&&(wr(t,1),j0(t,1,0))}function rf(t){for(;t===Vl;)Vl=xs[--ys],xs[ys]=null,Gl=xs[--ys],xs[ys]=null;for(;t===Hr;)Hr=Nn[--Un],Nn[Un]=null,wi=Nn[--Un],Nn[Un]=null,Ei=Nn[--Un],Nn[Un]=null}var An=null,wn=null,gt=!1,$n=null;function X0(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,An=t,wn=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,An=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:Ei,overflow:wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,An=t,wn=null,!0):!1;default:return!1}}function Rd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pd(t){if(gt){var e=wn;if(e){var n=e;if(!zp(t,e)){if(Rd(t))throw Error(te(418));e=er(n.nextSibling);var i=An;e&&zp(t,e)?X0(i,n):(t.flags=t.flags&-4097|2,gt=!1,An=t)}}else{if(Rd(t))throw Error(te(418));t.flags=t.flags&-4097|2,gt=!1,An=t}}}function Bp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;An=t}function La(t){if(t!==An)return!1;if(!gt)return Bp(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wd(t.type,t.memoizedProps)),e&&(e=wn)){if(Rd(t))throw Y0(),Error(te(418));for(;e;)X0(t,e),e=er(e.nextSibling)}if(Bp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=An?er(t.stateNode.nextSibling):null;return!0}function Y0(){for(var t=wn;t;)t=er(t.nextSibling)}function Bs(){wn=An=null,gt=!1}function sf(t){$n===null?$n=[t]:$n.push(t)}var Oy=Ii.ReactCurrentBatchConfig;function uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function Da(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hp(t){var e=t._init;return e(t._payload)}function q0(t){function e(u,_){if(t){var v=u.deletions;v===null?(u.deletions=[_],u.flags|=16):v.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=rr(u,_),u.index=0,u.sibling=null,u}function s(u,_,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<_?(u.flags|=2,_):v):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,v,S){return _===null||_.tag!==6?(_=hu(v,u.mode,S),_.return=u,_):(_=r(_,v),_.return=u,_)}function l(u,_,v,S){var P=v.type;return P===fs?d(u,_,v.props.children,S,v.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Gi&&Hp(P)===_.type)?(S=r(_,v.props),S.ref=uo(u,_,v),S.return=u,S):(S=Sl(v.type,v.key,v.props,null,u.mode,S),S.ref=uo(u,_,v),S.return=u,S)}function c(u,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=fu(v,u.mode,S),_.return=u,_):(_=r(_,v.children||[]),_.return=u,_)}function d(u,_,v,S,P){return _===null||_.tag!==7?(_=kr(v,u.mode,S,P),_.return=u,_):(_=r(_,v),_.return=u,_)}function f(u,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=hu(""+_,u.mode,v),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Sa:return v=Sl(_.type,_.key,_.props,null,u.mode,v),v.ref=uo(u,null,_),v.return=u,v;case hs:return _=fu(_,u.mode,v),_.return=u,_;case Gi:var S=_._init;return f(u,S(_._payload),v)}if(To(_)||so(_))return _=kr(_,u.mode,v,null),_.return=u,_;Da(u,_)}return null}function p(u,_,v,S){var P=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(u,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Sa:return v.key===P?l(u,_,v,S):null;case hs:return v.key===P?c(u,_,v,S):null;case Gi:return P=v._init,p(u,_,P(v._payload),S)}if(To(v)||so(v))return P!==null?null:d(u,_,v,S,null);Da(u,v)}return null}function h(u,_,v,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(v)||null,a(_,u,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Sa:return u=u.get(S.key===null?v:S.key)||null,l(_,u,S,P);case hs:return u=u.get(S.key===null?v:S.key)||null,c(_,u,S,P);case Gi:var C=S._init;return h(u,_,v,C(S._payload),P)}if(To(S)||so(S))return u=u.get(v)||null,d(_,u,S,P,null);Da(_,S)}return null}function x(u,_,v,S){for(var P=null,C=null,A=_,b=_=0,V=null;A!==null&&b<v.length;b++){A.index>b?(V=A,A=null):V=A.sibling;var y=p(u,A,v[b],S);if(y===null){A===null&&(A=V);break}t&&A&&y.alternate===null&&e(u,A),_=s(y,_,b),C===null?P=y:C.sibling=y,C=y,A=V}if(b===v.length)return n(u,A),gt&&wr(u,b),P;if(A===null){for(;b<v.length;b++)A=f(u,v[b],S),A!==null&&(_=s(A,_,b),C===null?P=A:C.sibling=A,C=A);return gt&&wr(u,b),P}for(A=i(u,A);b<v.length;b++)V=h(A,u,b,v[b],S),V!==null&&(t&&V.alternate!==null&&A.delete(V.key===null?b:V.key),_=s(V,_,b),C===null?P=V:C.sibling=V,C=V);return t&&A.forEach(function(E){return e(u,E)}),gt&&wr(u,b),P}function g(u,_,v,S){var P=so(v);if(typeof P!="function")throw Error(te(150));if(v=P.call(v),v==null)throw Error(te(151));for(var C=P=null,A=_,b=_=0,V=null,y=v.next();A!==null&&!y.done;b++,y=v.next()){A.index>b?(V=A,A=null):V=A.sibling;var E=p(u,A,y.value,S);if(E===null){A===null&&(A=V);break}t&&A&&E.alternate===null&&e(u,A),_=s(E,_,b),C===null?P=E:C.sibling=E,C=E,A=V}if(y.done)return n(u,A),gt&&wr(u,b),P;if(A===null){for(;!y.done;b++,y=v.next())y=f(u,y.value,S),y!==null&&(_=s(y,_,b),C===null?P=y:C.sibling=y,C=y);return gt&&wr(u,b),P}for(A=i(u,A);!y.done;b++,y=v.next())y=h(A,u,b,y.value,S),y!==null&&(t&&y.alternate!==null&&A.delete(y.key===null?b:y.key),_=s(y,_,b),C===null?P=y:C.sibling=y,C=y);return t&&A.forEach(function(O){return e(u,O)}),gt&&wr(u,b),P}function m(u,_,v,S){if(typeof v=="object"&&v!==null&&v.type===fs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Sa:e:{for(var P=v.key,C=_;C!==null;){if(C.key===P){if(P=v.type,P===fs){if(C.tag===7){n(u,C.sibling),_=r(C,v.props.children),_.return=u,u=_;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Gi&&Hp(P)===C.type){n(u,C.sibling),_=r(C,v.props),_.ref=uo(u,C,v),_.return=u,u=_;break e}n(u,C);break}else e(u,C);C=C.sibling}v.type===fs?(_=kr(v.props.children,u.mode,S,v.key),_.return=u,u=_):(S=Sl(v.type,v.key,v.props,null,u.mode,S),S.ref=uo(u,_,v),S.return=u,u=S)}return o(u);case hs:e:{for(C=v.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(u,_.sibling),_=r(_,v.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=fu(v,u.mode,S),_.return=u,u=_}return o(u);case Gi:return C=v._init,m(u,_,C(v._payload),S)}if(To(v))return x(u,_,v,S);if(so(v))return g(u,_,v,S);Da(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,v),_.return=u,u=_):(n(u,_),_=hu(v,u.mode,S),_.return=u,u=_),o(u)):n(u,_)}return m}var Hs=q0(!0),$0=q0(!1),Wl=fr(null),jl=null,Ss=null,of=null;function af(){of=Ss=jl=null}function lf(t){var e=Wl.current;ft(Wl),t._currentValue=e}function bd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){jl=t,of=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(of!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(jl===null)throw Error(te(308));Ss=t,jl.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Ir=null;function cf(t){Ir===null?Ir=[t]:Ir.push(t)}function K0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,cf(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wi=!1;function uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Z0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,cf(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qh(t,n)}}function Vp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xl(t,e,n,i){var r=t.updateQueue;Wi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var p=a.lane,h=a.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,g=a;switch(p=e,h=n,g.tag){case 1:if(x=g.payload,typeof x=="function"){f=x.call(h,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,p=typeof x=="function"?x.call(h,f,p):x,p==null)break e;f=St({},f,p);break e;case 2:Wi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else h={eventTime:h,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=h,l=f):d=d.next=h,o|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Gr|=o,t.lanes=o,t.memoizedState=f}}function Gp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var ha={},di=fr(ha),Jo=fr(ha),ea=fr(ha);function Nr(t){if(t===ha)throw Error(te(174));return t}function df(t,e){switch(lt(ea,e),lt(Jo,t),lt(di,ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ud(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ud(e,t)}ft(di),lt(di,e)}function Vs(){ft(di),ft(Jo),ft(ea)}function Q0(t){Nr(ea.current);var e=Nr(di.current),n=ud(e,t.type);e!==n&&(lt(Jo,t),lt(di,n))}function hf(t){Jo.current===t&&(ft(di),ft(Jo))}var xt=fr(0);function Yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ou=[];function ff(){for(var t=0;t<ou.length;t++)ou[t]._workInProgressVersionPrimary=null;ou.length=0}var gl=Ii.ReactCurrentDispatcher,au=Ii.ReactCurrentBatchConfig,Vr=0,yt=null,bt=null,Ft=null,ql=!1,Oo=!1,ta=0,ky=0;function Gt(){throw Error(te(321))}function pf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ni(t[n],e[n]))return!1;return!0}function mf(t,e,n,i,r,s){if(Vr=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gl.current=t===null||t.memoizedState===null?Vy:Gy,t=n(i,r),Oo){s=0;do{if(Oo=!1,ta=0,25<=s)throw Error(te(301));s+=1,Ft=bt=null,e.updateQueue=null,gl.current=Wy,t=n(i,r)}while(Oo)}if(gl.current=$l,e=bt!==null&&bt.next!==null,Vr=0,Ft=bt=yt=null,ql=!1,e)throw Error(te(300));return t}function gf(){var t=ta!==0;return ta=0,t}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?yt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Bn(){if(bt===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ft===null?yt.memoizedState:Ft.next;if(e!==null)Ft=e,bt=t;else{if(t===null)throw Error(te(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ft===null?yt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function na(t,e){return typeof e=="function"?e(t):e}function lu(t){var e=Bn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Vr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,yt.lanes|=d,Gr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ni(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,Gr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function cu(t){var e=Bn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ni(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function J0(){}function e_(t,e){var n=yt,i=Bn(),r=e(),s=!ni(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,_f(i_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,ia(9,n_.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(te(349));Vr&30||t_(n,e,r)}return r}function t_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function n_(t,e,n,i){e.value=n,e.getSnapshot=i,r_(e)&&s_(t)}function i_(t,e,n){return n(function(){r_(e)&&s_(t)})}function r_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ni(t,n)}catch{return!0}}function s_(t){var e=bi(t,1);e!==null&&ti(e,t,1,-1)}function Wp(t){var e=ai();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},e.queue=t,t=t.dispatch=Hy.bind(null,yt,t),[e.memoizedState,t]}function ia(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function o_(){return Bn().memoizedState}function _l(t,e,n,i){var r=ai();yt.flags|=t,r.memoizedState=ia(1|e,n,void 0,i===void 0?null:i)}function vc(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var o=bt.memoizedState;if(s=o.destroy,i!==null&&pf(i,o.deps)){r.memoizedState=ia(e,n,s,i);return}}yt.flags|=t,r.memoizedState=ia(1|e,n,s,i)}function jp(t,e){return _l(8390656,8,t,e)}function _f(t,e){return vc(2048,8,t,e)}function a_(t,e){return vc(4,2,t,e)}function l_(t,e){return vc(4,4,t,e)}function c_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function u_(t,e,n){return n=n!=null?n.concat([t]):null,vc(4,4,c_.bind(null,e,t),n)}function vf(){}function d_(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function h_(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function f_(t,e,n){return Vr&21?(ni(n,e)||(n=v0(),yt.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function zy(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=au.transition;au.transition={};try{t(!1),e()}finally{et=n,au.transition=i}}function p_(){return Bn().memoizedState}function By(t,e,n){var i=ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},m_(t))g_(e,n);else if(n=K0(t,e,n,i),n!==null){var r=Jt();ti(n,t,i,r),__(n,e,i)}}function Hy(t,e,n){var i=ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(m_(t))g_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ni(a,o)){var l=e.interleaved;l===null?(r.next=r,cf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=K0(t,e,r,i),n!==null&&(r=Jt(),ti(n,t,i,r),__(n,e,i))}}function m_(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function g_(t,e){Oo=ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function __(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qh(t,n)}}var $l={readContext:zn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},Vy={readContext:zn,useCallback:function(t,e){return ai().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:jp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_l(4194308,4,c_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _l(4194308,4,t,e)},useInsertionEffect:function(t,e){return _l(4,2,t,e)},useMemo:function(t,e){var n=ai();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ai();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=By.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=ai();return t={current:t},e.memoizedState=t},useState:Wp,useDebugValue:vf,useDeferredValue:function(t){return ai().memoizedState=t},useTransition:function(){var t=Wp(!1),e=t[0];return t=zy.bind(null,t[1]),ai().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=ai();if(gt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),kt===null)throw Error(te(349));Vr&30||t_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,jp(i_.bind(null,i,s,t),[t]),i.flags|=2048,ia(9,n_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ai(),e=kt.identifierPrefix;if(gt){var n=wi,i=Ei;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ky++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Gy={readContext:zn,useCallback:d_,useContext:zn,useEffect:_f,useImperativeHandle:u_,useInsertionEffect:a_,useLayoutEffect:l_,useMemo:h_,useReducer:lu,useRef:o_,useState:function(){return lu(na)},useDebugValue:vf,useDeferredValue:function(t){var e=Bn();return f_(e,bt.memoizedState,t)},useTransition:function(){var t=lu(na)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:J0,useSyncExternalStore:e_,useId:p_,unstable_isNewReconciler:!1},Wy={readContext:zn,useCallback:d_,useContext:zn,useEffect:_f,useImperativeHandle:u_,useInsertionEffect:a_,useLayoutEffect:l_,useMemo:h_,useReducer:cu,useRef:o_,useState:function(){return cu(na)},useDebugValue:vf,useDeferredValue:function(t){var e=Bn();return bt===null?e.memoizedState=t:f_(e,bt.memoizedState,t)},useTransition:function(){var t=cu(na)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:J0,useSyncExternalStore:e_,useId:p_,unstable_isNewReconciler:!1};function Xn(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ld(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xc={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=ir(t),s=Ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&(ti(e,t,r,i),ml(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=ir(t),s=Ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&(ti(e,t,r,i),ml(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),i=ir(t),r=Ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=tr(t,r,i),e!==null&&(ti(e,t,i,n),ml(e,t,i))}};function Xp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!$o(n,i)||!$o(r,s):!0}function v_(t,e,n){var i=!1,r=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=fn(e)?Br:$t.current,i=e.contextTypes,s=(i=i!=null)?zs(t,r):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&xc.enqueueReplaceState(e,e.state,null)}function Dd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},uf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=fn(e)?Br:$t.current,r.context=zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ld(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&xc.enqueueReplaceState(r,r.state,null),Xl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e){try{var n="",i=e;do n+=vx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function uu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Id(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jy=typeof WeakMap=="function"?WeakMap:Map;function x_(t,e,n){n=Ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Zl||(Zl=!0,Gd=i),Id(t,e)},n}function y_(t,e,n){n=Ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Id(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Id(t,e),typeof i!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new jy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=sS.bind(null,t,e,n),e.then(t,t))}function $p(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ci(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var Xy=Ii.ReactCurrentOwner,dn=!1;function Zt(t,e,n,i){e.child=t===null?$0(e,null,n,i):Hs(e,t.child,n,i)}function Zp(t,e,n,i,r){n=n.render;var s=e.ref;return Ls(e,r),i=mf(t,e,n,i,s,r),n=gf(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(gt&&n&&nf(e),e.flags|=1,Zt(t,e,i,r),e.child)}function Qp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Af(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,S_(t,e,s,i,r)):(t=Sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(o,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=rr(s,i),t.ref=e.ref,t.return=e,e.child=t}function S_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if($o(s,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,Li(t,e,r)}return Nd(t,e,n,i,r)}function M_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(Es,Mn),Mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(Es,Mn),Mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(Es,Mn),Mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(Es,Mn),Mn|=i;return Zt(t,e,r,n),e.child}function E_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nd(t,e,n,i,r){var s=fn(n)?Br:$t.current;return s=zs(e,s),Ls(e,r),n=mf(t,e,n,i,s,r),i=gf(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(gt&&i&&nf(e),e.flags|=1,Zt(t,e,n,r),e.child)}function Jp(t,e,n,i,r){if(fn(n)){var s=!0;Hl(e)}else s=!1;if(Ls(e,r),e.stateNode===null)vl(t,e),v_(e,n,i),Dd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=zn(c):(c=fn(n)?Br:$t.current,c=zs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Yp(e,o,i,c),Wi=!1;var p=e.memoizedState;o.state=p,Xl(e,i,o,r),l=e.memoizedState,a!==i||p!==l||hn.current||Wi?(typeof d=="function"&&(Ld(e,n,d,i),l=e.memoizedState),(a=Wi||Xp(e,n,a,i,p,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Z0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Xn(e.type,a),o.props=c,f=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=fn(n)?Br:$t.current,l=zs(e,l));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&Yp(e,o,i,l),Wi=!1,p=e.memoizedState,o.state=p,Xl(e,i,o,r);var x=e.memoizedState;a!==f||p!==x||hn.current||Wi?(typeof h=="function"&&(Ld(e,n,h,i),x=e.memoizedState),(c=Wi||Xp(e,n,c,i,p,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Ud(t,e,n,i,s,r)}function Ud(t,e,n,i,r,s){E_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&kp(e,n,!1),Li(t,e,s);i=e.stateNode,Xy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Hs(e,t.child,null,s),e.child=Hs(e,null,a,s)):Zt(t,e,a,s),e.memoizedState=i.state,r&&kp(e,n,!0),e.child}function w_(t){var e=t.stateNode;e.pendingContext?Op(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Op(t,e.context,!1),df(t,e.containerInfo)}function em(t,e,n,i,r){return Bs(),sf(r),e.flags|=256,Zt(t,e,n,i),e.child}var Fd={dehydrated:null,treeContext:null,retryLane:0};function Od(t){return{baseLanes:t,cachePool:null,transitions:null}}function T_(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(xt,r&1),t===null)return Pd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mc(o,i,0,null),t=kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Od(n),e.memoizedState=Fd,t):xf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Yy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=rr(a,s):(s=kr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Od(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Fd,i}return s=t.child,t=s.sibling,i=rr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function xf(t,e){return e=Mc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ia(t,e,n,i){return i!==null&&sf(i),Hs(e,t.child,null,n),t=xf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Yy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=uu(Error(te(422))),Ia(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Mc({mode:"visible",children:i.children},r,0,null),s=kr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Hs(e,t.child,null,o),e.child.memoizedState=Od(o),e.memoizedState=Fd,s);if(!(e.mode&1))return Ia(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=uu(s,i,void 0),Ia(t,e,o,i)}if(a=(o&t.childLanes)!==0,dn||a){if(i=kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,bi(t,r),ti(i,t,r,-1))}return Tf(),i=uu(Error(te(421))),Ia(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=oS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,wn=er(r.nextSibling),An=e,gt=!0,$n=null,t!==null&&(Nn[Un++]=Ei,Nn[Un++]=wi,Nn[Un++]=Hr,Ei=t.id,wi=t.overflow,Hr=e),e=xf(e,i.children),e.flags|=4096,e)}function tm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),bd(t.return,e,n)}function du(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function A_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zt(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tm(t,n,e);else if(t.tag===19)tm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Yl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),du(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Yl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}du(e,!0,n,null,s);break;case"together":du(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qy(t,e,n){switch(e.tag){case 3:w_(e),Bs();break;case 5:Q0(e);break;case 1:fn(e.type)&&Hl(e);break;case 4:df(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(Wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?T_(t,e,n):(lt(xt,xt.current&1),t=Li(t,e,n),t!==null?t.sibling:null);lt(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return A_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,M_(t,e,n)}return Li(t,e,n)}var C_,kd,R_,P_;C_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kd=function(){};R_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Nr(di.current);var s=null;switch(n){case"input":r=od(t,r),i=od(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=cd(t,r),i=cd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=zl)}dd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};P_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ho(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function $y(t,e,n){var i=e.pendingProps;switch(rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return fn(e.type)&&Bl(),Wt(e),null;case 3:return i=e.stateNode,Vs(),ft(hn),ft($t),ff(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(La(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(Xd($n),$n=null))),kd(t,e),Wt(e),null;case 5:hf(e);var r=Nr(ea.current);if(n=e.type,t!==null&&e.stateNode!=null)R_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Wt(e),null}if(t=Nr(di.current),La(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ci]=e,i[Qo]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<Co.length;r++)dt(Co[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":up(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":hp(i,s),dt("invalid",i)}dd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ba(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ba(i.textContent,a,t),r=["children",""+a]):Vo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&dt("scroll",i)}switch(n){case"input":Ma(i),dp(i,s,!0);break;case"textarea":Ma(i),fp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=zl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=i0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ci]=e,t[Qo]=i,C_(t,e,!1,!1),e.stateNode=t;e:{switch(o=hd(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Co.length;r++)dt(Co[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":up(t,i),r=od(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),dt("invalid",t);break;case"textarea":hp(t,i),r=cd(t,i),dt("invalid",t);break;default:r=i}dd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?o0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&r0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Go(t,l):typeof l=="number"&&Go(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",t):l!=null&&Vh(t,s,l,o))}switch(n){case"input":Ma(t),dp(t,i,!1);break;case"textarea":Ma(t),fp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Cs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=zl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)P_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Nr(ea.current),Nr(di.current),La(e)){if(i=e.stateNode,n=e.memoizedProps,i[ci]=e,(s=i.nodeValue!==n)&&(t=An,t!==null))switch(t.tag){case 3:ba(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ba(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ci]=e,e.stateNode=i}return Wt(e),null;case 13:if(ft(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&wn!==null&&e.mode&1&&!(e.flags&128))Y0(),Bs(),e.flags|=98560,s=!1;else if(s=La(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ci]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else $n!==null&&(Xd($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Lt===0&&(Lt=3):Tf())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return Vs(),kd(t,e),t===null&&Ko(e.stateNode.containerInfo),Wt(e),null;case 10:return lf(e.type._context),Wt(e),null;case 17:return fn(e.type)&&Bl(),Wt(e),null;case 19:if(ft(xt),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ho(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yl(t),o!==null){for(e.flags|=128,ho(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>Ws&&(e.flags|=128,i=!0,ho(s,!1),e.lanes=4194304)}else{if(!i)if(t=Yl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!gt)return Wt(e),null}else 2*Tt()-s.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,i=!0,ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=xt.current,lt(xt,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return wf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function Ky(t,e){switch(rf(e),e.tag){case 1:return fn(e.type)&&Bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),ft(hn),ft($t),ff(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hf(e),null;case 13:if(ft(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(xt),null;case 4:return Vs(),null;case 10:return lf(e.type._context),null;case 22:case 23:return wf(),null;case 24:return null;default:return null}}var Na=!1,qt=!1,Zy=typeof WeakSet=="function"?WeakSet:Set,me=null;function Ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function zd(t,e,n){try{n()}catch(i){Et(t,e,i)}}var nm=!1;function Qy(t,e){if(Md=Fl,t=N0(),tf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,p=null;t:for(;;){for(var h;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===t)break t;if(p===n&&++c===r&&(a=o),p===s&&++d===i&&(l=o),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ed={focusedElem:t,selectionRange:n},Fl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,m=x.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?g:Xn(e.type,g),m);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(S){Et(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return x=nm,nm=!1,x}function ko(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&zd(e,n,s)}r=r.next}while(r!==i)}}function yc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Bd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function b_(t){var e=t.alternate;e!==null&&(t.alternate=null,b_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ci],delete e[Qo],delete e[Ad],delete e[Ny],delete e[Uy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function L_(t){return t.tag===5||t.tag===3||t.tag===4}function im(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||L_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zl));else if(i!==4&&(t=t.child,t!==null))for(Hd(t,e,n),t=t.sibling;t!==null;)Hd(t,e,n),t=t.sibling}function Vd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Vd(t,e,n),t=t.sibling;t!==null;)Vd(t,e,n),t=t.sibling}var Bt=null,qn=!1;function Ui(t,e,n){for(n=n.child;n!==null;)D_(t,e,n),n=n.sibling}function D_(t,e,n){if(ui&&typeof ui.onCommitFiberUnmount=="function")try{ui.onCommitFiberUnmount(hc,n)}catch{}switch(n.tag){case 5:qt||Ms(n,e);case 6:var i=Bt,r=qn;Bt=null,Ui(t,e,n),Bt=i,qn=r,Bt!==null&&(qn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(qn?(t=Bt,n=n.stateNode,t.nodeType===8?ru(t.parentNode,n):t.nodeType===1&&ru(t,n),Yo(t)):ru(Bt,n.stateNode));break;case 4:i=Bt,r=qn,Bt=n.stateNode.containerInfo,qn=!0,Ui(t,e,n),Bt=i,qn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zd(n,e,o),r=r.next}while(r!==i)}Ui(t,e,n);break;case 1:if(!qt&&(Ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Et(n,e,a)}Ui(t,e,n);break;case 21:Ui(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,Ui(t,e,n),qt=i):Ui(t,e,n);break;default:Ui(t,e,n)}}function rm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Zy),e.forEach(function(i){var r=aS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,qn=!1;break e;case 3:Bt=a.stateNode.containerInfo,qn=!0;break e;case 4:Bt=a.stateNode.containerInfo,qn=!0;break e}a=a.return}if(Bt===null)throw Error(te(160));D_(s,o,r),Bt=null,qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)I_(e,t),e=e.sibling}function I_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),ri(t),i&4){try{ko(3,t,t.return),yc(3,t)}catch(g){Et(t,t.return,g)}try{ko(5,t,t.return)}catch(g){Et(t,t.return,g)}}break;case 1:Vn(e,t),ri(t),i&512&&n!==null&&Ms(n,n.return);break;case 5:if(Vn(e,t),ri(t),i&512&&n!==null&&Ms(n,n.return),t.flags&32){var r=t.stateNode;try{Go(r,"")}catch(g){Et(t,t.return,g)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&t0(r,s),hd(a,o);var c=hd(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?o0(r,f):d==="dangerouslySetInnerHTML"?r0(r,f):d==="children"?Go(r,f):Vh(r,d,f,c)}switch(a){case"input":ad(r,s);break;case"textarea":n0(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Cs(r,!!s.multiple,h,!1):p!==!!s.multiple&&(s.defaultValue!=null?Cs(r,!!s.multiple,s.defaultValue,!0):Cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Qo]=s}catch(g){Et(t,t.return,g)}}break;case 6:if(Vn(e,t),ri(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(g){Et(t,t.return,g)}}break;case 3:if(Vn(e,t),ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Yo(e.containerInfo)}catch(g){Et(t,t.return,g)}break;case 4:Vn(e,t),ri(t);break;case 13:Vn(e,t),ri(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Mf=Tt())),i&4&&rm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(c=qt)||d,Vn(e,t),qt=c):Vn(e,t),ri(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(me=t,d=t.child;d!==null;){for(f=me=d;me!==null;){switch(p=me,h=p.child,p.tag){case 0:case 11:case 14:case 15:ko(4,p,p.return);break;case 1:Ms(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(g){Et(i,n,g)}}break;case 5:Ms(p,p.return);break;case 22:if(p.memoizedState!==null){om(f);continue}}h!==null?(h.return=p,me=h):om(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=s0("display",o))}catch(g){Et(t,t.return,g)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Et(t,t.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Vn(e,t),ri(t),i&4&&rm(t);break;case 21:break;default:Vn(e,t),ri(t)}}function ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(L_(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Go(r,""),i.flags&=-33);var s=im(t);Vd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=im(t);Hd(t,a,o);break;default:throw Error(te(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jy(t,e,n){me=t,N_(t)}function N_(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Na;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=Na;var c=qt;if(Na=o,(qt=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?am(r):l!==null?(l.return=o,me=l):am(r);for(;s!==null;)me=s,N_(s),s=s.sibling;me=r,Na=a,qt=c}sm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):sm(t)}}function sm(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||yc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Xn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Yo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}qt||e.flags&512&&Bd(e)}catch(p){Et(e,e.return,p)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function om(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function am(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yc(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{Bd(e)}catch(l){Et(e,s,l)}break;case 5:var o=e.return;try{Bd(e)}catch(l){Et(e,o,l)}}}catch(l){Et(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var eS=Math.ceil,Kl=Ii.ReactCurrentDispatcher,yf=Ii.ReactCurrentOwner,kn=Ii.ReactCurrentBatchConfig,je=0,kt=null,Rt=null,Ht=0,Mn=0,Es=fr(0),Lt=0,ra=null,Gr=0,Sc=0,Sf=0,zo=null,cn=null,Mf=0,Ws=1/0,Si=null,Zl=!1,Gd=null,nr=null,Ua=!1,Ki=null,Ql=0,Bo=0,Wd=null,xl=-1,yl=0;function Jt(){return je&6?Tt():xl!==-1?xl:xl=Tt()}function ir(t){return t.mode&1?je&2&&Ht!==0?Ht&-Ht:Oy.transition!==null?(yl===0&&(yl=v0()),yl):(t=et,t!==0||(t=window.event,t=t===void 0?16:T0(t.type)),t):1}function ti(t,e,n,i){if(50<Bo)throw Bo=0,Wd=null,Error(te(185));ca(t,n,i),(!(je&2)||t!==kt)&&(t===kt&&(!(je&2)&&(Sc|=n),Lt===4&&Yi(t,Ht)),pn(t,i),n===1&&je===0&&!(e.mode&1)&&(Ws=Tt()+500,_c&&pr()))}function pn(t,e){var n=t.callbackNode;Ox(t,e);var i=Ul(t,t===kt?Ht:0);if(i===0)n!==null&&gp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&gp(n),e===1)t.tag===0?Fy(lm.bind(null,t)):W0(lm.bind(null,t)),Dy(function(){!(je&6)&&pr()}),n=null;else{switch(x0(i)){case 1:n=Yh;break;case 4:n=g0;break;case 16:n=Nl;break;case 536870912:n=_0;break;default:n=Nl}n=V_(n,U_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function U_(t,e){if(xl=-1,yl=0,je&6)throw Error(te(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var i=Ul(t,t===kt?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Jl(t,i);else{e=i;var r=je;je|=2;var s=O_();(kt!==t||Ht!==e)&&(Si=null,Ws=Tt()+500,Or(t,e));do try{iS();break}catch(a){F_(t,a)}while(!0);af(),Kl.current=s,je=r,Rt!==null?e=0:(kt=null,Ht=0,e=Lt)}if(e!==0){if(e===2&&(r=_d(t),r!==0&&(i=r,e=jd(t,r))),e===1)throw n=ra,Or(t,0),Yi(t,i),pn(t,Tt()),n;if(e===6)Yi(t,i);else{if(r=t.current.alternate,!(i&30)&&!tS(r)&&(e=Jl(t,i),e===2&&(s=_d(t),s!==0&&(i=s,e=jd(t,s))),e===1))throw n=ra,Or(t,0),Yi(t,i),pn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Tr(t,cn,Si);break;case 3:if(Yi(t,i),(i&130023424)===i&&(e=Mf+500-Tt(),10<e)){if(Ul(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Td(Tr.bind(null,t,cn,Si),e);break}Tr(t,cn,Si);break;case 4:if(Yi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ei(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*eS(i/1960))-i,10<i){t.timeoutHandle=Td(Tr.bind(null,t,cn,Si),i);break}Tr(t,cn,Si);break;case 5:Tr(t,cn,Si);break;default:throw Error(te(329))}}}return pn(t,Tt()),t.callbackNode===n?U_.bind(null,t):null}function jd(t,e){var n=zo;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=Jl(t,e),t!==2&&(e=cn,cn=n,e!==null&&Xd(e)),t}function Xd(t){cn===null?cn=t:cn.push.apply(cn,t)}function tS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ni(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yi(t,e){for(e&=~Sf,e&=~Sc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ei(e),i=1<<n;t[n]=-1,e&=~i}}function lm(t){if(je&6)throw Error(te(327));Ds();var e=Ul(t,0);if(!(e&1))return pn(t,Tt()),null;var n=Jl(t,e);if(t.tag!==0&&n===2){var i=_d(t);i!==0&&(e=i,n=jd(t,i))}if(n===1)throw n=ra,Or(t,0),Yi(t,e),pn(t,Tt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,cn,Si),pn(t,Tt()),null}function Ef(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(Ws=Tt()+500,_c&&pr())}}function Wr(t){Ki!==null&&Ki.tag===0&&!(je&6)&&Ds();var e=je;je|=1;var n=kn.transition,i=et;try{if(kn.transition=null,et=1,t)return t()}finally{et=i,kn.transition=n,je=e,!(je&6)&&pr()}}function wf(){Mn=Es.current,ft(Es)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ly(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch(rf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Bl();break;case 3:Vs(),ft(hn),ft($t),ff();break;case 5:hf(i);break;case 4:Vs();break;case 13:ft(xt);break;case 19:ft(xt);break;case 10:lf(i.type._context);break;case 22:case 23:wf()}n=n.return}if(kt=t,Rt=t=rr(t.current,null),Ht=Mn=e,Lt=0,ra=null,Sf=Sc=Gr=0,cn=zo=null,Ir!==null){for(e=0;e<Ir.length;e++)if(n=Ir[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ir=null}return t}function F_(t,e){do{var n=Rt;try{if(af(),gl.current=$l,ql){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ql=!1}if(Vr=0,Ft=bt=yt=null,Oo=!1,ta=0,yf.current=null,n===null||n.return===null){Lt=1,ra=e,Rt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=$p(o);if(h!==null){h.flags&=-257,Kp(h,o,a,s,e),h.mode&1&&qp(s,c,e),e=h,l=c;var x=e.updateQueue;if(x===null){var g=new Set;g.add(l),e.updateQueue=g}else x.add(l);break e}else{if(!(e&1)){qp(s,c,e),Tf();break e}l=Error(te(426))}}else if(gt&&a.mode&1){var m=$p(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Kp(m,o,a,s,e),sf(Gs(l,a));break e}}s=l=Gs(l,a),Lt!==4&&(Lt=2),zo===null?zo=[s]:zo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=x_(s,l,e);Vp(s,u);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(nr===null||!nr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=y_(s,a,e);Vp(s,S);break e}}s=s.return}while(s!==null)}z_(n)}catch(P){e=P,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function O_(){var t=Kl.current;return Kl.current=$l,t===null?$l:t}function Tf(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),kt===null||!(Gr&268435455)&&!(Sc&268435455)||Yi(kt,Ht)}function Jl(t,e){var n=je;je|=2;var i=O_();(kt!==t||Ht!==e)&&(Si=null,Or(t,e));do try{nS();break}catch(r){F_(t,r)}while(!0);if(af(),je=n,Kl.current=i,Rt!==null)throw Error(te(261));return kt=null,Ht=0,Lt}function nS(){for(;Rt!==null;)k_(Rt)}function iS(){for(;Rt!==null&&!Rx();)k_(Rt)}function k_(t){var e=H_(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?z_(t):Rt=e,yf.current=null}function z_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ky(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Rt=null;return}}else if(n=$y(n,e,Mn),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Lt===0&&(Lt=5)}function Tr(t,e,n){var i=et,r=kn.transition;try{kn.transition=null,et=1,rS(t,e,n,i)}finally{kn.transition=r,et=i}return null}function rS(t,e,n,i){do Ds();while(Ki!==null);if(je&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kx(t,s),t===kt&&(Rt=kt=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ua||(Ua=!0,V_(Nl,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var o=et;et=1;var a=je;je|=4,yf.current=null,Qy(t,n),I_(n,t),wy(Ed),Fl=!!Md,Ed=Md=null,t.current=n,Jy(n),Px(),je=a,et=o,kn.transition=s}else t.current=n;if(Ua&&(Ua=!1,Ki=t,Ql=r),s=t.pendingLanes,s===0&&(nr=null),Dx(n.stateNode),pn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Zl)throw Zl=!1,t=Gd,Gd=null,t;return Ql&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===Wd?Bo++:(Bo=0,Wd=t):Bo=0,pr(),null}function Ds(){if(Ki!==null){var t=x0(Ql),e=kn.transition,n=et;try{if(kn.transition=null,et=16>t?16:t,Ki===null)var i=!1;else{if(t=Ki,Ki=null,Ql=0,je&6)throw Error(te(331));var r=je;for(je|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var d=me;switch(d.tag){case 0:case 11:case 15:ko(8,d,s)}var f=d.child;if(f!==null)f.return=d,me=f;else for(;me!==null;){d=me;var p=d.sibling,h=d.return;if(b_(d),d===c){me=null;break}if(p!==null){p.return=h,me=p;break}me=h}}}var x=s.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ko(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,me=u;break e}me=s.return}}var _=t.current;for(me=_;me!==null;){o=me;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,me=v;else e:for(o=_;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yc(9,a)}}catch(P){Et(a,a.return,P)}if(a===o){me=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,me=S;break e}me=a.return}}if(je=r,pr(),ui&&typeof ui.onPostCommitFiberRoot=="function")try{ui.onPostCommitFiberRoot(hc,t)}catch{}i=!0}return i}finally{et=n,kn.transition=e}}return!1}function cm(t,e,n){e=Gs(n,e),e=x_(t,e,1),t=tr(t,e,1),e=Jt(),t!==null&&(ca(t,1,e),pn(t,e))}function Et(t,e,n){if(t.tag===3)cm(t,t,n);else for(;e!==null;){if(e.tag===3){cm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(nr===null||!nr.has(i))){t=Gs(n,t),t=y_(e,t,1),e=tr(e,t,1),t=Jt(),e!==null&&(ca(e,1,t),pn(e,t));break}}e=e.return}}function sS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Ht&n)===n&&(Lt===4||Lt===3&&(Ht&130023424)===Ht&&500>Tt()-Mf?Or(t,0):Sf|=n),pn(t,e)}function B_(t,e){e===0&&(t.mode&1?(e=Ta,Ta<<=1,!(Ta&130023424)&&(Ta=4194304)):e=1);var n=Jt();t=bi(t,e),t!==null&&(ca(t,e,n),pn(t,n))}function oS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),B_(t,n)}function aS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),B_(t,n)}var H_;H_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,qy(t,e,n);dn=!!(t.flags&131072)}else dn=!1,gt&&e.flags&1048576&&j0(e,Gl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;vl(t,e),t=e.pendingProps;var r=zs(e,$t.current);Ls(e,n),r=mf(null,e,i,t,r,n);var s=gf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,Hl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,uf(e),r.updater=xc,e.stateNode=r,r._reactInternals=e,Dd(e,i,t,n),e=Ud(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&nf(e),Zt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(vl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=cS(i),t=Xn(i,t),r){case 0:e=Nd(null,e,i,t,n);break e;case 1:e=Jp(null,e,i,t,n);break e;case 11:e=Zp(null,e,i,t,n);break e;case 14:e=Qp(null,e,i,Xn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Nd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Jp(t,e,i,r,n);case 3:e:{if(w_(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Z0(t,e),Xl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Gs(Error(te(423)),e),e=em(t,e,i,n,r);break e}else if(i!==r){r=Gs(Error(te(424)),e),e=em(t,e,i,n,r);break e}else for(wn=er(e.stateNode.containerInfo.firstChild),An=e,gt=!0,$n=null,n=$0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),i===r){e=Li(t,e,n);break e}Zt(t,e,i,n)}e=e.child}return e;case 5:return Q0(e),t===null&&Pd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,wd(i,r)?o=null:s!==null&&wd(i,s)&&(e.flags|=32),E_(t,e),Zt(t,e,o,n),e.child;case 6:return t===null&&Pd(e),null;case 13:return T_(t,e,n);case 4:return df(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Hs(e,null,i,n):Zt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Zp(t,e,i,r,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(Wl,i._currentValue),i._currentValue=o,s!==null)if(ni(s.value,o)){if(s.children===r.children&&!hn.current){e=Li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ci(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),bd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Zt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ls(e,n),r=zn(r),i=i(r),e.flags|=1,Zt(t,e,i,n),e.child;case 14:return i=e.type,r=Xn(i,e.pendingProps),r=Xn(i.type,r),Qp(t,e,i,r,n);case 15:return S_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),vl(t,e),e.tag=1,fn(i)?(t=!0,Hl(e)):t=!1,Ls(e,n),v_(e,i,r),Dd(e,i,r,n),Ud(null,e,i,!0,t,n);case 19:return A_(t,e,n);case 22:return M_(t,e,n)}throw Error(te(156,e.tag))};function V_(t,e){return m0(t,e)}function lS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new lS(t,e,n,i)}function Af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cS(t){if(typeof t=="function")return Af(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wh)return 11;if(t===jh)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Af(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fs:return kr(n.children,r,s,e);case Gh:o=8,r|=8;break;case nd:return t=On(12,n,e,r|2),t.elementType=nd,t.lanes=s,t;case id:return t=On(13,n,e,r),t.elementType=id,t.lanes=s,t;case rd:return t=On(19,n,e,r),t.elementType=rd,t.lanes=s,t;case Qg:return Mc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Kg:o=10;break e;case Zg:o=9;break e;case Wh:o=11;break e;case jh:o=14;break e;case Gi:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=On(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function kr(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function Mc(t,e,n,i){return t=On(22,t,i,e),t.elementType=Qg,t.lanes=n,t.stateNode={isHidden:!1},t}function hu(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function fu(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yc(0),this.expirationTimes=Yc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Cf(t,e,n,i,r,s,o,a,l){return t=new uS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uf(s),t}function dS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function G_(t){if(!t)return cr;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(fn(n))return G0(t,n,e)}return e}function W_(t,e,n,i,r,s,o,a,l){return t=Cf(n,i,!0,t,r,s,o,a,l),t.context=G_(null),n=t.current,i=Jt(),r=ir(n),s=Ci(i,r),s.callback=e??null,tr(n,s,r),t.current.lanes=r,ca(t,r,i),pn(t,i),t}function Ec(t,e,n,i){var r=e.current,s=Jt(),o=ir(r);return n=G_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ci(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=tr(r,e,o),t!==null&&(ti(t,r,o,s),ml(t,r,o)),o}function ec(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function um(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rf(t,e){um(t,e),(t=t.alternate)&&um(t,e)}function hS(){return null}var j_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pf(t){this._internalRoot=t}wc.prototype.render=Pf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Ec(t,e,null,null)};wc.prototype.unmount=Pf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){Ec(null,t,null,null)}),e[Pi]=null}};function wc(t){this._internalRoot=t}wc.prototype.unstable_scheduleHydration=function(t){if(t){var e=M0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xi.length&&e!==0&&e<Xi[n].priority;n++);Xi.splice(n,0,t),n===0&&w0(t)}};function bf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dm(){}function fS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ec(o);s.call(c)}}var o=W_(e,i,t,0,null,!1,!1,"",dm);return t._reactRootContainer=o,t[Pi]=o.current,Ko(t.nodeType===8?t.parentNode:t),Wr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ec(l);a.call(c)}}var l=Cf(t,0,!1,null,null,!1,!1,"",dm);return t._reactRootContainer=l,t[Pi]=l.current,Ko(t.nodeType===8?t.parentNode:t),Wr(function(){Ec(e,l,n,i)}),l}function Ac(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ec(o);a.call(l)}}Ec(e,o,t,r)}else o=fS(n,e,t,r,i);return ec(o)}y0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ao(e.pendingLanes);n!==0&&(qh(e,n|1),pn(e,Tt()),!(je&6)&&(Ws=Tt()+500,pr()))}break;case 13:Wr(function(){var i=bi(t,1);if(i!==null){var r=Jt();ti(i,t,1,r)}}),Rf(t,1)}};$h=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=Jt();ti(e,t,134217728,n)}Rf(t,134217728)}};S0=function(t){if(t.tag===13){var e=ir(t),n=bi(t,e);if(n!==null){var i=Jt();ti(n,t,e,i)}Rf(t,e)}};M0=function(){return et};E0=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};pd=function(t,e,n){switch(e){case"input":if(ad(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=gc(i);if(!r)throw Error(te(90));e0(i),ad(i,r)}}}break;case"textarea":n0(t,n);break;case"select":e=n.value,e!=null&&Cs(t,!!n.multiple,e,!1)}};c0=Ef;u0=Wr;var pS={usingClientEntryPoint:!1,Events:[da,_s,gc,a0,l0,Ef]},fo={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mS={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=f0(t),t===null?null:t.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||hS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{hc=Fa.inject(mS),ui=Fa}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pS;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bf(e))throw Error(te(200));return dS(t,e,null,n)};Rn.createRoot=function(t,e){if(!bf(t))throw Error(te(299));var n=!1,i="",r=j_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Cf(t,1,!1,null,null,n,!1,i,r),t[Pi]=e.current,Ko(t.nodeType===8?t.parentNode:t),new Pf(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=f0(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return Wr(t)};Rn.hydrate=function(t,e,n){if(!Tc(e))throw Error(te(200));return Ac(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!bf(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=j_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=W_(e,null,t,1,n??null,r,!1,s,o),t[Pi]=e.current,Ko(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new wc(e)};Rn.render=function(t,e,n){if(!Tc(e))throw Error(te(200));return Ac(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!Tc(t))throw Error(te(40));return t._reactRootContainer?(Wr(function(){Ac(null,null,t,!1,function(){t._reactRootContainer=null,t[Pi]=null})}),!0):!1};Rn.unstable_batchedUpdates=Ef;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Tc(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Ac(t,e,n,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function X_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X_)}catch(t){console.error(t)}}X_(),Xg.exports=Rn;var gS=Xg.exports,hm=gS;ed.createRoot=hm.createRoot,ed.hydrateRoot=hm.hydrateRoot;const _S={},fm=t=>{let e;const n=new Set,i=(d,f)=>{const p=typeof d=="function"?d(e):d;if(!Object.is(p,e)){const h=e;e=f??(typeof p!="object"||p===null)?p:Object.assign({},e,p),n.forEach(x=>x(e,h))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(_S?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,l);return l},vS=t=>t?fm(t):fm;var Y_={exports:{}},q_={},$_={exports:{}},K_={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var js=$e;function xS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yS=typeof Object.is=="function"?Object.is:xS,SS=js.useState,MS=js.useEffect,ES=js.useLayoutEffect,wS=js.useDebugValue;function TS(t,e){var n=e(),i=SS({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return ES(function(){r.value=n,r.getSnapshot=e,pu(r)&&s({inst:r})},[t,n,e]),MS(function(){return pu(r)&&s({inst:r}),t(function(){pu(r)&&s({inst:r})})},[t]),wS(n),n}function pu(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yS(t,n)}catch{return!0}}function AS(t,e){return e()}var CS=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?AS:TS;K_.useSyncExternalStore=js.useSyncExternalStore!==void 0?js.useSyncExternalStore:CS;$_.exports=K_;var RS=$_.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=$e,PS=RS;function bS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var LS=typeof Object.is=="function"?Object.is:bS,DS=PS.useSyncExternalStore,IS=Cc.useRef,NS=Cc.useEffect,US=Cc.useMemo,FS=Cc.useDebugValue;q_.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=IS(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=US(function(){function l(h){if(!c){if(c=!0,d=h,h=i(h),r!==void 0&&o.hasValue){var x=o.value;if(r(x,h))return f=x}return f=h}if(x=f,LS(d,h))return x;var g=i(h);return r!==void 0&&r(x,g)?(d=h,x):(d=h,f=g)}var c=!1,d,f,p=n===void 0?null:n;return[function(){return l(e())},p===null?void 0:function(){return l(p())}]},[e,n,i,r]);var a=DS(t,s[0],s[1]);return NS(function(){o.hasValue=!0,o.value=a},[a]),FS(a),a};Y_.exports=q_;var OS=Y_.exports;const kS=Ig(OS),Z_={},{useDebugValue:zS}=Wg,{useSyncExternalStoreWithSelector:BS}=kS;let pm=!1;const HS=t=>t;function VS(t,e=HS,n){(Z_?"production":void 0)!=="production"&&n&&!pm&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),pm=!0);const i=BS(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return zS(i),i}const GS=t=>{(Z_?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?vS(t):t,n=(i,r)=>VS(e,i,r);return Object.assign(n,e),n},WS=t=>GS,jS={};function XS(t,e){let n;try{n=t()}catch{return}return{getItem:r=>{var s;const o=l=>l===null?null:JSON.parse(l,void 0),a=(s=n.getItem(r))!=null?s:null;return a instanceof Promise?a.then(o):o(a)},setItem:(r,s)=>n.setItem(r,JSON.stringify(s,void 0)),removeItem:r=>n.removeItem(r)}}const sa=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(i){return sa(i)(n)},catch(i){return this}}}catch(n){return{then(i){return this},catch(i){return sa(i)(n)}}}},YS=(t,e)=>(n,i,r)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:m=>m,version:0,merge:(m,u)=>({...u,...m}),...e},o=!1;const a=new Set,l=new Set;let c;try{c=s.getStorage()}catch{}if(!c)return t((...m)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...m)},i,r);const d=sa(s.serialize),f=()=>{const m=s.partialize({...i()});let u;const _=d({state:m,version:s.version}).then(v=>c.setItem(s.name,v)).catch(v=>{u=v});if(u)throw u;return _},p=r.setState;r.setState=(m,u)=>{p(m,u),f()};const h=t((...m)=>{n(...m),f()},i,r);let x;const g=()=>{var m;if(!c)return;o=!1,a.forEach(_=>_(i()));const u=((m=s.onRehydrateStorage)==null?void 0:m.call(s,i()))||void 0;return sa(c.getItem.bind(c))(s.name).then(_=>{if(_)return s.deserialize(_)}).then(_=>{if(_)if(typeof _.version=="number"&&_.version!==s.version){if(s.migrate)return s.migrate(_.state,_.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return _.state}).then(_=>{var v;return x=s.merge(_,(v=i())!=null?v:h),n(x,!0),f()}).then(()=>{u==null||u(x,void 0),o=!0,l.forEach(_=>_(x))}).catch(_=>{u==null||u(void 0,_)})};return r.persist={setOptions:m=>{s={...s,...m},m.getStorage&&(c=m.getStorage())},clearStorage:()=>{c==null||c.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>g(),hasHydrated:()=>o,onHydrate:m=>(a.add(m),()=>{a.delete(m)}),onFinishHydration:m=>(l.add(m),()=>{l.delete(m)})},g(),x||h},qS=(t,e)=>(n,i,r)=>{let s={storage:XS(()=>localStorage),partialize:g=>g,version:0,merge:(g,m)=>({...m,...g}),...e},o=!1;const a=new Set,l=new Set;let c=s.storage;if(!c)return t((...g)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...g)},i,r);const d=()=>{const g=s.partialize({...i()});return c.setItem(s.name,{state:g,version:s.version})},f=r.setState;r.setState=(g,m)=>{f(g,m),d()};const p=t((...g)=>{n(...g),d()},i,r);r.getInitialState=()=>p;let h;const x=()=>{var g,m;if(!c)return;o=!1,a.forEach(_=>{var v;return _((v=i())!=null?v:p)});const u=((m=s.onRehydrateStorage)==null?void 0:m.call(s,(g=i())!=null?g:p))||void 0;return sa(c.getItem.bind(c))(s.name).then(_=>{if(_)if(typeof _.version=="number"&&_.version!==s.version){if(s.migrate)return[!0,s.migrate(_.state,_.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,_.state];return[!1,void 0]}).then(_=>{var v;const[S,P]=_;if(h=s.merge(P,(v=i())!=null?v:p),n(h,!0),S)return d()}).then(()=>{u==null||u(h,void 0),h=i(),o=!0,l.forEach(_=>_(h))}).catch(_=>{u==null||u(void 0,_)})};return r.persist={setOptions:g=>{s={...s,...g},g.storage&&(c=g.storage)},clearStorage:()=>{c==null||c.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>x(),hasHydrated:()=>o,onHydrate:g=>(a.add(g),()=>{a.delete(g)}),onFinishHydration:g=>(l.add(g),()=>{l.delete(g)})},s.skipHydration||x(),h||p},$S=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((jS?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),YS(t,e)):qS(t,e),KS=$S,Yd={flood:"投光灯",wash:"洗墙灯",point:"点光源"},ZS={luminousEfficacy:100,maintenanceFactor:.8,glassReflectance:.12,lpdLimit:25,gridSpacing:.5,ambientLux:2};function QS(){return{floors:6,floorHeight:3.6,bays:5,bayWidth:4.2,windowRatio:.35,thickness:.3,lines:[],bayWindows:[]}}let mm=0;function En(t="id"){return mm+=1,`${t}_${Date.now().toString(36)}_${mm.toString(36)}`}function JS(t){const e=Date.now();return{id:En("prj"),name:t,createdAt:e,updatedAt:e,facade:QS(),lamps:[],groups:[{id:En("grp"),name:"楼顶组",color:"#ffb040"},{id:En("grp"),name:"立面组",color:"#40c8ff"}],scenes:[{id:En("scn"),name:"平日模式",groupStates:{},lampOverrides:{}},{id:En("scn"),name:"节能模式",groupStates:{},lampOverrides:{}},{id:En("scn"),name:"节日模式",groupStates:{},lampOverrides:{}}],settings:{...ZS},activeSceneId:null}}function mu(t){return{...t,updatedAt:Date.now()}}const nt=WS()(KS((t,e)=>{const n=i=>{const{currentId:r,projects:s}=e();r&&t({projects:s.map(o=>o.id===r?mu(i(o)):o)})};return{projects:[],currentId:null,page:"projects",setPage:i=>t({page:i}),selectProject:i=>t({currentId:i,page:"facade"}),createProject:i=>{const r=JS(i);return t(s=>({projects:[...s.projects,r]})),r.id},deleteProject:i=>t(r=>({projects:r.projects.filter(s=>s.id!==i),currentId:r.currentId===i?null:r.currentId})),duplicateProject:i=>{const r=e().projects.find(o=>o.id===i);if(!r)return"";const s=structuredClone(r);return s.id=En("prj"),s.name=`${r.name} 副本`,s.createdAt=Date.now(),s.updatedAt=s.createdAt,t(o=>({projects:[...o.projects,s]})),s.id},renameProject:(i,r)=>t(s=>({projects:s.projects.map(o=>o.id===i?mu({...o,name:r}):o)})),updateProject:(i,r)=>t(s=>({projects:s.projects.map(o=>o.id===i?mu(r(o)):o)})),exportProject:i=>{const r=e().projects.find(s=>s.id===i);return JSON.stringify({format:"facade-lighting-studio",version:1,project:r},null,2)},importProject:i=>{const r=JSON.parse(i),s=r.project??r;if(!s||!Array.isArray(s.lamps)||!s.facade)throw new Error("文件格式不正确：缺少 project/facade/lamps 字段");const o=structuredClone(s);return o.id=En("prj"),o.name=`${s.name??"导入项目"}`,o.updatedAt=Date.now(),t(a=>({projects:[...a.projects,o]})),o.id},addLamp:i=>n(r=>({...r,lamps:[...r.lamps,{...i,id:En("lamp")}]})),updateLamp:(i,r)=>n(s=>({...s,lamps:s.lamps.map(o=>o.id===i?{...o,...r}:o)})),removeLamp:i=>n(r=>({...r,lamps:r.lamps.filter(s=>s.id!==i)})),addGroup:i=>n(r=>({...r,groups:[...r.groups,{...i,id:En("grp")}]})),updateGroup:(i,r)=>n(s=>({...s,groups:s.groups.map(o=>o.id===i?{...o,...r}:o)})),removeGroup:i=>n(r=>({...r,groups:r.groups.filter(s=>s.id!==i),lamps:r.lamps.map(s=>({...s,groupIds:s.groupIds.filter(o=>o!==i)}))})),addScene:i=>n(r=>({...r,scenes:[...r.scenes,{id:En("scn"),name:i,groupStates:{},lampOverrides:{}}]})),updateScene:(i,r)=>n(s=>({...s,scenes:s.scenes.map(o=>o.id===i?{...o,...r}:o)})),removeScene:i=>n(r=>({...r,scenes:r.scenes.filter(s=>s.id!==i),activeSceneId:r.activeSceneId===i?null:r.activeSceneId})),setActiveScene:i=>n(r=>({...r,activeSceneId:i})),updateFacade:i=>n(r=>({...r,facade:{...r.facade,...i}})),updateSettings:i=>n(r=>({...r,settings:{...r.settings,...i}}))}},{name:"facade-lighting-studio-v1"}));function fa(){return nt(t=>t.projects.find(e=>e.id===t.currentId)??null)}function eM(t){const e=String(t);return/[",\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}function Yn(t){return t.map(eM).join(",")}function gm(t,e=!1){const n=[];n.push(Yn(["灯具清单",t.name])),n.push(Yn(["编号","名称","类型","功率(W)","光束角(°)","灯段长(m)","色温(K)","位置X(m)","位置Y(m)","位置Z(m)","偏航(°)","俯仰(°)","分组","状态"]));const i=new Map(t.groups.map(r=>[r.id,r.name]));for(const r of t.lamps)e&&!r.enabled||n.push(Yn([r.id,r.name,Yd[r.kind],r.powerW,r.beamAngle,r.kind==="wash"?r.length:"",r.colorTemp,r.position[0].toFixed(2),r.position[1].toFixed(2),r.position[2].toFixed(2),r.yaw,r.pitch,r.groupIds.map(s=>i.get(s)??s).join("|"),r.enabled?"开":"关"]));return"\uFEFF"+n.join(`\r
`)}function tM(t,e){const n=[];n.push(Yn(["照度报表",e])),n.push(Yn(["墙面平均照度(lx)",t.wallAvg.toFixed(2)])),n.push(Yn(["墙面最大照度(lx)",t.wallMax.toFixed(2)])),n.push(Yn(["墙面最小照度(lx)",t.wallMin.toFixed(2)])),n.push(Yn(["玻璃平均反射照度(lx,不计照度指标)",t.glassReflectedAvg.toFixed(2)])),n.push(Yn(["采样点总数",t.sampleCount])),n.push(""),n.push(Yn(["面片编号","材质","宽(m)","高(m)","平均(lx)","最大(lx)","最小(lx)"]));const i={wall:"墙体",glass:"玻璃",trim:"装饰线条"};for(const r of t.patchResults)n.push(Yn([r.patch.id,i[r.patch.material],r.patch.width.toFixed(2),r.patch.height.toFixed(2),r.avg.toFixed(2),r.max.toFixed(2),r.min.toFixed(2)]));return"\uFEFF"+n.join(`\r
`)}function Ho(t,e){const n=new Blob([e],{type:"text/csv;charset=utf-8"}),i=URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=t,r.click(),URL.revokeObjectURL(i)}function nM(){const t=nt(g=>g.projects),e=nt(g=>g.createProject),n=nt(g=>g.deleteProject),i=nt(g=>g.duplicateProject),r=nt(g=>g.selectProject),s=nt(g=>g.renameProject),o=nt(g=>g.exportProject),a=nt(g=>g.importProject),[l,c]=$e.useState(""),[d,f]=$e.useState(""),p=$e.useRef(null),h=()=>{const g=l.trim()||`写字楼项目 ${t.length+1}`,m=e(g);c(""),r(m)},x=async g=>{f("");try{const m=await g.text();a(m)}catch(m){f(m instanceof Error?m.message:"导入失败")}};return T.jsxs("div",{style:{flex:1,padding:24,overflowY:"auto",maxWidth:980,margin:"0 auto",width:"100%"},children:[T.jsxs("div",{className:"card",children:[T.jsx("h3",{children:"新建项目"}),T.jsxs("div",{className:"row",children:[T.jsx("input",{placeholder:"输入项目名称，如：XX大厦夜景亮化",value:l,onChange:g=>c(g.target.value)}),T.jsx("button",{className:"primary",style:{flex:"none"},onClick:h,children:"创建项目"}),T.jsx("button",{style:{flex:"none"},onClick:()=>{var g;return(g=p.current)==null?void 0:g.click()},children:"导入 JSON"}),T.jsx("input",{ref:p,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:g=>{var u;const m=(u=g.target.files)==null?void 0:u[0];m&&x(m),g.target.value=""}})]}),d&&T.jsx("div",{className:"warn-box",children:d})]}),T.jsxs("div",{className:"card",children:[T.jsxs("h3",{children:["项目列表（",t.length,"）— 数据保存在本机浏览器 localStorage"]}),t.length===0&&T.jsxs("div",{className:"empty",children:[T.jsx("div",{className:"big",children:"🏙"}),"还没有项目，先创建一个"]}),t.map(g=>T.jsxs("div",{className:"list-item",onClick:()=>r(g.id),children:[T.jsxs("div",{style:{flex:1},children:[T.jsx("div",{style:{fontWeight:600},children:g.name}),T.jsxs("div",{style:{fontSize:12,color:"var(--muted)"},children:[g.facade.floors,"层 × ",g.facade.bays,"开间 · 灯具 ",g.lamps.length," 套 · 更新于 ",new Date(g.updatedAt).toLocaleString()]})]}),T.jsx("button",{className:"small",onClick:m=>{m.stopPropagation();const u=prompt("新名称",g.name);u&&s(g.id,u)},children:"重命名"}),T.jsx("button",{className:"small",onClick:m=>{m.stopPropagation(),r(g.id)},children:"打开"}),T.jsx("button",{className:"small",onClick:m=>{m.stopPropagation(),i(g.id)},children:"复制"}),T.jsx("button",{className:"small",onClick:m=>{m.stopPropagation(),Ho(`${g.name}.json`,o(g.id))},children:"导出"}),T.jsx("button",{className:"small danger",onClick:m=>{m.stopPropagation(),confirm(`确定删除项目「${g.name}」？此操作不可恢复。`)&&n(g.id)},children:"删除"})]},g.id))]})]})}const qd=[0,0,1];function Ln(t,e,n,i,r,s,o,a=qd){return{id:t,material:e,center:[n,i,r],width:s,height:o,normal:a}}function oa(t){const e=t.bays*t.bayWidth,n=t.floors*t.floorHeight,i=[];let r=0;const s=a=>`${a}_${r++}`,o=new Set;for(const a of t.bayWindows)for(let l=a.bayStart;l<a.bayStart+a.bayCount;l++)o.add(l);for(let a=0;a<t.bays;a++){const c=a*t.bayWidth+t.bayWidth/2,d=o.has(a);for(let f=0;f<t.floors;f++){const p=f*t.floorHeight,h=p+t.floorHeight/2;if(d){i.push(Ln(s("wall"),"wall",c,h,0,t.bayWidth,t.floorHeight));continue}const x=t.floorHeight*t.windowRatio,g=t.floorHeight-x,m=g*.55,u=p+m+x/2,_=m,v=g-m;_>1e-6&&i.push(Ln(s("wall"),"wall",c,p+_/2,0,t.bayWidth,_)),i.push(Ln(s("glass"),"glass",c,u,-.01,t.bayWidth*.94,x*.9)),v>1e-6&&i.push(Ln(s("wall"),"wall",c,p+_+x+v/2,0,t.bayWidth,v))}}for(const a of t.bayWindows){const l=a.bayStart*t.bayWidth,c=a.bayCount*t.bayWidth,d=-a.protrude,f=n*a.windowRatio*.9,p=n*.55;i.push(Ln(s("bw_glass"),"glass",l+c/2,p,d-.01,c*.96,f));const h=n-(p+f/2);h>1e-6&&i.push(Ln(s("bw_wall"),"wall",l+c/2,p+f/2+h/2,d,c,h));const x=p-f/2;x>1e-6&&i.push(Ln(s("bw_wall"),"wall",l+c/2,x/2,d,c,x)),i.push(Ln(s("bw_side"),"wall",l,n/2,d/2,a.protrude,n,[-1,0,0])),i.push(Ln(s("bw_side"),"wall",l+c,n/2,d/2,a.protrude,n,[1,0,0]))}for(const a of t.lines)a.orientation==="horizontal"?(i.push(Ln(s("line_h"),"trim",e/2,a.offset,-a.protrude/2,e,a.width,qd)),i.push(Ln(s("line_h_cap"),"trim",e/2,a.offset+a.width/2,-a.protrude/2,e,a.protrude,[0,1,0]))):i.push(Ln(s("line_v"),"trim",a.offset,n/2,-a.protrude/2,a.width,n,qd));return{totalWidth:e,totalHeight:n,wallZ:0,patches:i}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lf="169",Is={ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iM=0,_m=1,rM=2,Q_=1,sM=2,xi=3,ur=0,mn=1,Kn=2,sr=0,Ns=1,vm=2,xm=3,ym=4,oM=5,Pr=100,aM=101,lM=102,cM=103,uM=104,dM=200,hM=201,fM=202,pM=203,$d=204,Kd=205,mM=206,gM=207,_M=208,vM=209,xM=210,yM=211,SM=212,MM=213,EM=214,Zd=0,Qd=1,Jd=2,Xs=3,eh=4,th=5,nh=6,ih=7,J_=0,wM=1,TM=2,or=0,AM=1,CM=2,RM=3,ev=4,PM=5,bM=6,LM=7,tv=300,Ys=301,qs=302,rh=303,sh=304,Rc=306,oh=1e3,Ur=1001,ah=1002,Tn=1003,DM=1004,Oa=1005,Fn=1006,gu=1007,Fr=1008,Di=1009,nv=1010,iv=1011,aa=1012,Df=1013,jr=1014,Ti=1015,pa=1016,If=1017,Nf=1018,$s=1020,rv=35902,sv=1021,ov=1022,Qn=1023,av=1024,lv=1025,Us=1026,Ks=1027,cv=1028,Uf=1029,uv=1030,Ff=1031,Of=1033,Ml=33776,El=33777,wl=33778,Tl=33779,lh=35840,ch=35841,uh=35842,dh=35843,hh=36196,fh=37492,ph=37496,mh=37808,gh=37809,_h=37810,vh=37811,xh=37812,yh=37813,Sh=37814,Mh=37815,Eh=37816,wh=37817,Th=37818,Ah=37819,Ch=37820,Rh=37821,Al=36492,Ph=36494,bh=36495,dv=36283,Lh=36284,Dh=36285,Ih=36286,IM=3200,NM=3201,hv=0,UM=1,qi="",In="srgb",mr="srgb-linear",kf="display-p3",Pc="display-p3-linear",tc="linear",ht="srgb",nc="rec709",ic="p3",Qr=7680,Sm=519,FM=512,OM=513,kM=514,fv=515,zM=516,BM=517,HM=518,VM=519,Mm=35044,Em="300 es",Ai=2e3,rc=2001;class $r{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cl=Math.PI/180,sc=180/Math.PI;function ma(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function GM(t,e){return(t%e+e)%e}function _u(t,e,n){return(1-n)*t+n*e}function po(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function an(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const WM={DEG2RAD:Cl};class Ae{constructor(e=0,n=0){Ae.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],p=i[2],h=i[5],x=i[8],g=r[0],m=r[3],u=r[6],_=r[1],v=r[4],S=r[7],P=r[2],C=r[5],A=r[8];return s[0]=o*g+a*_+l*P,s[3]=o*m+a*v+l*C,s[6]=o*u+a*S+l*A,s[1]=c*g+d*_+f*P,s[4]=c*m+d*v+f*C,s[7]=c*u+d*S+f*A,s[2]=p*g+h*_+x*P,s[5]=p*m+h*v+x*C,s[8]=p*u+h*S+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,p=a*l-d*s,h=c*s-o*l,x=n*f+i*p+r*h;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=f*g,e[1]=(r*c-d*i)*g,e[2]=(a*i-r*o)*g,e[3]=p*g,e[4]=(d*n-r*l)*g,e[5]=(r*s-a*n)*g,e[6]=h*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(vu.makeScale(e,n)),this}rotate(e){return this.premultiply(vu.makeRotation(-e)),this}translate(e,n){return this.premultiply(vu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vu=new Fe;function pv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function oc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function jM(){const t=oc("canvas");return t.style.display="block",t}const wm={};function Rl(t){t in wm||(wm[t]=!0,console.warn(t))}function XM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function YM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Tm=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Am=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mo={[mr]:{transfer:tc,primaries:nc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[In]:{transfer:ht,primaries:nc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Pc]:{transfer:tc,primaries:ic,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Am),fromReference:t=>t.applyMatrix3(Tm)},[kf]:{transfer:ht,primaries:ic,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Am),fromReference:t=>t.applyMatrix3(Tm).convertLinearToSRGB()}},$M=new Set([mr,Pc]),Qe={enabled:!0,_workingColorSpace:mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!$M.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=mo[e].toReference,r=mo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return mo[t].primaries},getTransfer:function(t){return t===qi?tc:mo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(mo[e].luminanceCoefficients)}};function Fs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function xu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Jr;class KM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jr===void 0&&(Jr=oc("canvas")),Jr.width=e.width,Jr.height=e.height;const i=Jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Jr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=oc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Fs(n[i]/255)*255):n[i]=Fs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZM=0;class mv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=ma(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yu(r[o].image)):s.push(yu(r[o]))}else s=yu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function yu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?KM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let QM=0;class en extends $r{constructor(e=en.DEFAULT_IMAGE,n=en.DEFAULT_MAPPING,i=Ur,r=Ur,s=Fn,o=Fr,a=Qn,l=Di,c=en.DEFAULT_ANISOTROPY,d=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=ma(),this.name="",this.source=new mv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oh:e.x=e.x-Math.floor(e.x);break;case Ur:e.x=e.x<0?0:1;break;case ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oh:e.y=e.y-Math.floor(e.y);break;case Ur:e.y=e.y<0?0:1;break;case ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=tv;en.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,n=0,i=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],p=l[1],h=l[5],x=l[9],g=l[2],m=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+h+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(h+1)/2,P=(u+1)/2,C=(d+p)/4,A=(f+g)/4,b=(x+m)/4;return v>S&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=A/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=b/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=A/s,r=b/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-x)*(m-x)+(f-g)*(f-g)+(p-d)*(p-d));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(f-g)/_,this.z=(p-d)/_,this.w=Math.acos((c+h+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JM extends $r{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new rt(0,0,e,n),this.scissorTest=!1,this.viewport=new rt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new en(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new mv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends JM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class gv extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eE extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ot{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const p=s[o+0],h=s[o+1],x=s[o+2],g=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=p,e[n+1]=h,e[n+2]=x,e[n+3]=g;return}if(f!==g||l!==p||c!==h||d!==x){let m=1-a;const u=l*p+c*h+d*x+f*g,_=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const P=Math.sqrt(v),C=Math.atan2(P,u*_);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}const S=a*_;if(l=l*m+p*S,c=c*m+h*S,d=d*m+x*S,f=f*m+g*S,m===1-a){const P=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=P,c*=P,d*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],p=s[o+1],h=s[o+2],x=s[o+3];return e[n]=a*x+d*f+l*h-c*p,e[n+1]=l*x+d*p+c*f-a*h,e[n+2]=c*x+d*h+a*p-l*f,e[n+3]=d*x-a*f-l*p-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),p=l(i/2),h=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=p*d*f+c*h*x,this._y=c*h*f-p*d*x,this._z=c*d*x+p*h*f,this._w=c*d*f-p*h*x;break;case"YXZ":this._x=p*d*f+c*h*x,this._y=c*h*f-p*d*x,this._z=c*d*x-p*h*f,this._w=c*d*f+p*h*x;break;case"ZXY":this._x=p*d*f-c*h*x,this._y=c*h*f+p*d*x,this._z=c*d*x+p*h*f,this._w=c*d*f-p*h*x;break;case"ZYX":this._x=p*d*f-c*h*x,this._y=c*h*f+p*d*x,this._z=c*d*x-p*h*f,this._w=c*d*f+p*h*x;break;case"YZX":this._x=p*d*f+c*h*x,this._y=c*h*f+p*d*x,this._z=c*d*x-p*h*f,this._w=c*d*f-p*h*x;break;case"XZY":this._x=p*d*f-c*h*x,this._y=c*h*f-p*d*x,this._z=c*d*x+p*h*f,this._w=c*d*f+p*h*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],p=i+a+f;if(p>0){const h=.5/Math.sqrt(p+1);this._w=.25/h,this._x=(d-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(d-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,p=Math.sin(n*d)/c;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,n=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Cm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Cm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Su.copy(this).projectOnVector(e),this.sub(Su)}reflect(e){return this.sub(Su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Su=new L,Cm=new Ot;class ga{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(s,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ka.copy(i.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),za.subVectors(this.max,go),es.subVectors(e.a,go),ts.subVectors(e.b,go),ns.subVectors(e.c,go),Fi.subVectors(ts,es),Oi.subVectors(ns,ts),_r.subVectors(es,ns);let n=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-_r.z,_r.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,_r.z,0,-_r.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-_r.y,_r.x,0];return!Mu(n,es,ts,ns,za)||(n=[1,0,0,0,1,0,0,0,1],!Mu(n,es,ts,ns,za))?!1:(Ba.crossVectors(Fi,Oi),n=[Ba.x,Ba.y,Ba.z],Mu(n,es,ts,ns,za))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new L,new L,new L,new L,new L,new L,new L,new L],Gn=new L,ka=new ga,es=new L,ts=new L,ns=new L,Fi=new L,Oi=new L,_r=new L,go=new L,za=new L,Ba=new L,vr=new L;function Mu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){vr.fromArray(t,s);const a=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),c=n.dot(vr),d=i.dot(vr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const tE=new ga,_o=new L,Eu=new L;class bc{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):tE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_o.subVectors(e,this.center);const n=_o.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(_o,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_o.copy(e.center).add(Eu)),this.expandByPoint(_o.copy(e.center).sub(Eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new L,wu=new L,Ha=new L,ki=new L,Tu=new L,Va=new L,Au=new L;class Lc{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){wu.copy(e).add(n).multiplyScalar(.5),Ha.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(wu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ha),a=ki.dot(this.direction),l=-ki.dot(Ha),c=ki.lengthSq(),d=Math.abs(1-o*o);let f,p,h,x;if(d>0)if(f=o*l-a,p=o*a-l,x=s*d,f>=0)if(p>=-x)if(p<=x){const g=1/d;f*=g,p*=g,h=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=s,f=Math.max(0,-(o*p+a)),h=-f*f+p*(p+2*l)+c;else p=-s,f=Math.max(0,-(o*p+a)),h=-f*f+p*(p+2*l)+c;else p<=-x?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+p*(p+2*l)+c):p<=x?(f=0,p=Math.min(Math.max(-s,-l),s),h=p*(p+2*l)+c):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+p*(p+2*l)+c);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),h=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(wu).addScaledVector(Ha,p),h}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),d>=0?(s=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,s){Tu.subVectors(n,e),Va.subVectors(i,e),Au.crossVectors(Tu,Va);let o=this.direction.dot(Au),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(Va.crossVectors(ki,Va));if(l<0)return null;const c=a*this.direction.dot(Tu.cross(ki));if(c<0||l+c>o)return null;const d=-a*ki.dot(Au);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,n,i,r,s,o,a,l,c,d,f,p,h,x,g,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,p,h,x,g,m)}set(e,n,i,r,s,o,a,l,c,d,f,p,h,x,g,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=p,u[3]=h,u[7]=x,u[11]=g,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/is.setFromMatrixColumn(e,0).length(),s=1/is.setFromMatrixColumn(e,1).length(),o=1/is.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=o*d,h=o*f,x=a*d,g=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=h+x*c,n[5]=p-g*c,n[9]=-a*l,n[2]=g-p*c,n[6]=x+h*c,n[10]=o*l}else if(e.order==="YXZ"){const p=l*d,h=l*f,x=c*d,g=c*f;n[0]=p+g*a,n[4]=x*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=h*a-x,n[6]=g+p*a,n[10]=o*l}else if(e.order==="ZXY"){const p=l*d,h=l*f,x=c*d,g=c*f;n[0]=p-g*a,n[4]=-o*f,n[8]=x+h*a,n[1]=h+x*a,n[5]=o*d,n[9]=g-p*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const p=o*d,h=o*f,x=a*d,g=a*f;n[0]=l*d,n[4]=x*c-h,n[8]=p*c+g,n[1]=l*f,n[5]=g*c+p,n[9]=h*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const p=o*l,h=o*c,x=a*l,g=a*c;n[0]=l*d,n[4]=g-p*f,n[8]=x*f+h,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=h*f+x,n[10]=p-g*f}else if(e.order==="XZY"){const p=o*l,h=o*c,x=a*l,g=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=p*f+g,n[5]=o*d,n[9]=h*f-x,n[2]=x*f-h,n[6]=a*d,n[10]=g*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nE,e,iE)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),zi.crossVectors(i,xn),zi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),zi.crossVectors(i,xn)),zi.normalize(),Ga.crossVectors(xn,zi),r[0]=zi.x,r[4]=Ga.x,r[8]=xn.x,r[1]=zi.y,r[5]=Ga.y,r[9]=xn.y,r[2]=zi.z,r[6]=Ga.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],p=i[9],h=i[13],x=i[2],g=i[6],m=i[10],u=i[14],_=i[3],v=i[7],S=i[11],P=i[15],C=r[0],A=r[4],b=r[8],V=r[12],y=r[1],E=r[5],O=r[9],B=r[13],W=r[2],q=r[6],G=r[10],$=r[14],D=r[3],Y=r[7],Q=r[11],ie=r[15];return s[0]=o*C+a*y+l*W+c*D,s[4]=o*A+a*E+l*q+c*Y,s[8]=o*b+a*O+l*G+c*Q,s[12]=o*V+a*B+l*$+c*ie,s[1]=d*C+f*y+p*W+h*D,s[5]=d*A+f*E+p*q+h*Y,s[9]=d*b+f*O+p*G+h*Q,s[13]=d*V+f*B+p*$+h*ie,s[2]=x*C+g*y+m*W+u*D,s[6]=x*A+g*E+m*q+u*Y,s[10]=x*b+g*O+m*G+u*Q,s[14]=x*V+g*B+m*$+u*ie,s[3]=_*C+v*y+S*W+P*D,s[7]=_*A+v*E+S*q+P*Y,s[11]=_*b+v*O+S*G+P*Q,s[15]=_*V+v*B+S*$+P*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],p=e[10],h=e[14],x=e[3],g=e[7],m=e[11],u=e[15];return x*(+s*l*f-r*c*f-s*a*p+i*c*p+r*a*h-i*l*h)+g*(+n*l*h-n*c*p+s*o*p-r*o*h+r*c*d-s*l*d)+m*(+n*c*f-n*a*h-s*o*f+i*o*h+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*p+r*o*f-i*o*p+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],p=e[10],h=e[11],x=e[12],g=e[13],m=e[14],u=e[15],_=f*m*c-g*p*c+g*l*h-a*m*h-f*l*u+a*p*u,v=x*p*c-d*m*c-x*l*h+o*m*h+d*l*u-o*p*u,S=d*g*c-x*f*c+x*a*h-o*g*h-d*a*u+o*f*u,P=x*f*l-d*g*l-x*a*p+o*g*p+d*a*m-o*f*m,C=n*_+i*v+r*S+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=_*A,e[1]=(g*p*s-f*m*s-g*r*h+i*m*h+f*r*u-i*p*u)*A,e[2]=(a*m*s-g*l*s+g*r*c-i*m*c-a*r*u+i*l*u)*A,e[3]=(f*l*s-a*p*s-f*r*c+i*p*c+a*r*h-i*l*h)*A,e[4]=v*A,e[5]=(d*m*s-x*p*s+x*r*h-n*m*h-d*r*u+n*p*u)*A,e[6]=(x*l*s-o*m*s-x*r*c+n*m*c+o*r*u-n*l*u)*A,e[7]=(o*p*s-d*l*s+d*r*c-n*p*c-o*r*h+n*l*h)*A,e[8]=S*A,e[9]=(x*f*s-d*g*s-x*i*h+n*g*h+d*i*u-n*f*u)*A,e[10]=(o*g*s-x*a*s+x*i*c-n*g*c-o*i*u+n*a*u)*A,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*h-n*a*h)*A,e[12]=P*A,e[13]=(d*g*r-x*f*r+x*i*p-n*g*p-d*i*m+n*f*m)*A,e[14]=(x*a*r-o*g*r-x*i*l+n*g*l+o*i*m-n*a*m)*A,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*p+n*a*p)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,p=s*c,h=s*d,x=s*f,g=o*d,m=o*f,u=a*f,_=l*c,v=l*d,S=l*f,P=i.x,C=i.y,A=i.z;return r[0]=(1-(g+u))*P,r[1]=(h+S)*P,r[2]=(x-v)*P,r[3]=0,r[4]=(h-S)*C,r[5]=(1-(p+u))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(x+v)*A,r[9]=(m-_)*A,r[10]=(1-(p+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=is.set(r[0],r[1],r[2]).length();const o=is.set(r[4],r[5],r[6]).length(),a=is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const c=1/s,d=1/o,f=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=d,Wn.elements[5]*=d,Wn.elements[6]*=d,Wn.elements[8]*=f,Wn.elements[9]*=f,Wn.elements[10]*=f,n.setFromRotationMatrix(Wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ai){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let h,x;if(a===Ai)h=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===rc)h=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ai){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),p=(n+e)*c,h=(i+r)*d;let x,g;if(a===Ai)x=(o+s)*f,g=-2*f;else if(a===rc)x=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const is=new L,Wn=new ot,nE=new L(0,0,0),iE=new L(1,1,1),zi=new L,Ga=new L,xn=new L,Rm=new ot,Pm=new Ot;class ii{constructor(e=0,n=0,i=0,r=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],p=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Pm.setFromEuler(this),this.setFromQuaternion(Pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rE=0;const bm=new L,rs=new Ot,gi=new ot,Wa=new L,vo=new L,sE=new L,oE=new Ot,Lm=new L(1,0,0),Dm=new L(0,1,0),Im=new L(0,0,1),Nm={type:"added"},aE={type:"removed"},ss={type:"childadded",child:null},Cu={type:"childremoved",child:null};class _t extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new L,n=new ii,i=new Ot,r=new L(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Fe}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return rs.setFromAxisAngle(e,n),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,n){return rs.setFromAxisAngle(e,n),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(Lm,e)}rotateY(e){return this.rotateOnAxis(Dm,e)}rotateZ(e){return this.rotateOnAxis(Im,e)}translateOnAxis(e,n){return bm.copy(e).applyQuaternion(this.quaternion),this.position.add(bm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Lm,e)}translateY(e){return this.translateOnAxis(Dm,e)}translateZ(e){return this.translateOnAxis(Im,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Wa.copy(e):Wa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(vo,Wa,this.up):gi.lookAt(Wa,vo,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),rs.setFromRotationMatrix(gi),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nm),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(aE),Cu.child=e,this.dispatchEvent(Cu),Cu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nm),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,e,sE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,oE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),p=o(e.skeletons),h=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),h.length>0&&(i.animations=h),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_t.DEFAULT_UP=new L(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new L,_i=new L,Ru=new L,vi=new L,os=new L,as=new L,Um=new L,Pu=new L,bu=new L,Lu=new L,Du=new rt,Iu=new rt,Nu=new rt;class Zn{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),_i.subVectors(i,n),Ru.subVectors(e,n);const o=jn.dot(jn),a=jn.dot(_i),l=jn.dot(Ru),c=_i.dot(_i),d=_i.dot(Ru),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const p=1/f,h=(c*l-a*d)*p,x=(o*d-a*l)*p;return s.set(1-h-x,x,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Du.setScalar(0),Iu.setScalar(0),Nu.setScalar(0),Du.fromBufferAttribute(e,n),Iu.fromBufferAttribute(e,i),Nu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Du,s.x),o.addScaledVector(Iu,s.y),o.addScaledVector(Nu,s.z),o}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),_i.subVectors(e,n),jn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),jn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;os.subVectors(r,i),as.subVectors(s,i),Pu.subVectors(e,i);const l=os.dot(Pu),c=as.dot(Pu);if(l<=0&&c<=0)return n.copy(i);bu.subVectors(e,r);const d=os.dot(bu),f=as.dot(bu);if(d>=0&&f<=d)return n.copy(r);const p=l*f-d*c;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(os,o);Lu.subVectors(e,s);const h=os.dot(Lu),x=as.dot(Lu);if(x>=0&&h<=x)return n.copy(s);const g=h*c-l*x;if(g<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(as,a);const m=d*x-h*f;if(m<=0&&f-d>=0&&h-x>=0)return Um.subVectors(s,r),a=(f-d)/(f-d+(h-x)),n.copy(r).addScaledVector(Um,a);const u=1/(m+g+p);return o=g*u,a=p*u,n.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},ja={h:0,s:0,l:0};function Uu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Oe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=GM(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Uu(o,s,e+1/3),this.g=Uu(o,s,e),this.b=Uu(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=In){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=In){const i=_v[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}copyLinearToSRGB(e){return this.r=xu(e.r),this.g=xu(e.g),this.b=xu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return Qe.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Qt(Xt.r*255,0,255))*65536+Math.round(Qt(Xt.g*255,0,255))*256+Math.round(Qt(Xt.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=In){Qe.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==In?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL(ja);const i=_u(Bi.h,ja.h,n),r=_u(Bi.s,ja.s,n),s=_u(Bi.l,ja.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Oe;Oe.NAMES=_v;let lE=0;class to extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=ma(),this.name="",this.type="Material",this.blending=Ns,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$d,this.blendDst=Kd,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$d&&(i.blendSrc=this.blendSrc),this.blendDst!==Kd&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class no extends to{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=J_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new L,Xa=new Ae;class hi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Mm,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xa.fromBufferAttribute(this,n),Xa.applyMatrix3(e),this.setXY(n,Xa.x,Xa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=po(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=po(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=po(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=po(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=po(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mm&&(e.usage=this.usage),e}}class vv extends hi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class xv extends hi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class pt extends hi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let cE=0;const Dn=new ot,Fu=new _t,ls=new L,yn=new ga,xo=new ga,Nt=new L;class tn extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=ma(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pv(e)?xv:vv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(yn.min,xo.min),yn.expandByPoint(Nt),Nt.addVectors(yn.max,xo.max),yn.expandByPoint(Nt)):(yn.expandByPoint(xo.min),yn.expandByPoint(xo.max))}yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Nt.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(e,c),Nt.add(ls)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new L,l[b]=new L;const c=new L,d=new L,f=new L,p=new Ae,h=new Ae,x=new Ae,g=new L,m=new L;function u(b,V,y){c.fromBufferAttribute(i,b),d.fromBufferAttribute(i,V),f.fromBufferAttribute(i,y),p.fromBufferAttribute(s,b),h.fromBufferAttribute(s,V),x.fromBufferAttribute(s,y),d.sub(c),f.sub(c),h.sub(p),x.sub(p);const E=1/(h.x*x.y-x.x*h.y);isFinite(E)&&(g.copy(d).multiplyScalar(x.y).addScaledVector(f,-h.y).multiplyScalar(E),m.copy(f).multiplyScalar(h.x).addScaledVector(d,-x.x).multiplyScalar(E),a[b].add(g),a[V].add(g),a[y].add(g),l[b].add(m),l[V].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let b=0,V=_.length;b<V;++b){const y=_[b],E=y.start,O=y.count;for(let B=E,W=E+O;B<W;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new L,S=new L,P=new L,C=new L;function A(b){P.fromBufferAttribute(r,b),C.copy(P);const V=a[b];v.copy(V),v.sub(P.multiplyScalar(P.dot(V))).normalize(),S.crossVectors(C,V);const E=S.dot(l[b])<0?-1:1;o.setXYZW(b,v.x,v.y,v.z,E)}for(let b=0,V=_.length;b<V;++b){const y=_[b],E=y.start,O=y.count;for(let B=E,W=E+O;B<W;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,h=i.count;p<h;p++)i.setXYZ(p,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,d=new L,f=new L;if(e)for(let p=0,h=e.count;p<h;p+=3){const x=e.getX(p+0),g=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,h=n.count;p<h;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),o.fromBufferAttribute(n,p+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,p=new c.constructor(l.length*d);let h=0,x=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?h=l[g]*a.data.stride+a.offset:h=l[g]*d;for(let u=0;u<d;u++)p[x++]=c[h++]}return new hi(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new tn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const p=c[d],h=e(p,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,p=c.length;f<p;f++){const h=c[f];d.push(h.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let p=0,h=f.length;p<h;p++)d.push(f[p].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fm=new ot,xr=new Lc,Ya=new bc,Om=new L,qa=new L,$a=new L,Ka=new L,Ou=new L,Za=new L,km=new L,Qa=new L;class ae extends _t{constructor(e=new tn,n=new no){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Za.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(Ou.fromBufferAttribute(f,e),o?Za.addScaledVector(Ou,d):Za.addScaledVector(Ou.sub(n),d))}n.add(Za)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(Ya.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Ya,Om)===null||xr.origin.distanceToSquared(Om)>(e.far-e.near)**2))&&(Fm.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Fm),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,p=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=p.length;x<g;x++){const m=p[x],u=o[m.materialIndex],_=Math.max(m.start,h.start),v=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=_,P=v;S<P;S+=3){const C=a.getX(S),A=a.getX(S+1),b=a.getX(S+2);r=Ja(this,u,e,i,c,d,f,C,A,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let m=x,u=g;m<u;m+=3){const _=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=Ja(this,o,e,i,c,d,f,_,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=p.length;x<g;x++){const m=p[x],u=o[m.materialIndex],_=Math.max(m.start,h.start),v=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=_,P=v;S<P;S+=3){const C=S,A=S+1,b=S+2;r=Ja(this,u,e,i,c,d,f,C,A,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let m=x,u=g;m<u;m+=3){const _=m,v=m+1,S=m+2;r=Ja(this,o,e,i,c,d,f,_,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function uE(t,e,n,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ur,a),l===null)return null;Qa.copy(a),Qa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Qa);return c<n.near||c>n.far?null:{distance:c,point:Qa.clone(),object:t}}function Ja(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,qa),t.getVertexPosition(l,$a),t.getVertexPosition(c,Ka);const d=uE(t,e,n,i,qa,$a,Ka,km);if(d){const f=new L;Zn.getBarycoord(km,qa,$a,Ka,f),r&&(d.uv=Zn.getInterpolatedAttribute(r,a,l,c,f,new Ae)),s&&(d.uv1=Zn.getInterpolatedAttribute(s,a,l,c,f,new Ae)),o&&(d.normal=Zn.getInterpolatedAttribute(o,a,l,c,f,new L),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new L,materialIndex:0};Zn.getNormal(qa,$a,Ka,p.normal),d.face=p,d.barycoord=f}return d}class vt extends tn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let p=0,h=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(f,2));function x(g,m,u,_,v,S,P,C,A,b,V){const y=S/A,E=P/b,O=S/2,B=P/2,W=C/2,q=A+1,G=b+1;let $=0,D=0;const Y=new L;for(let Q=0;Q<G;Q++){const ie=Q*E-B;for(let Ee=0;Ee<q;Ee++){const ze=Ee*y-O;Y[g]=ze*_,Y[m]=ie*v,Y[u]=W,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[u]=C>0?1:-1,d.push(Y.x,Y.y,Y.z),f.push(Ee/A),f.push(1-Q/b),$+=1}}for(let Q=0;Q<b;Q++)for(let ie=0;ie<A;ie++){const Ee=p+ie+q*Q,ze=p+ie+q*(Q+1),X=p+(ie+1)+q*(Q+1),ne=p+(ie+1)+q*Q;l.push(Ee,ze,ne),l.push(ze,X,ne),D+=6}a.addGroup(h,D,V),h+=D,p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Kt(t){const e={};for(let n=0;n<t.length;n++){const i=Zs(t[n]);for(const r in i)e[r]=i[r]}return e}function dE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function yv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const hE={clone:Zs,merge:Kt};var fE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends to{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fE,this.fragmentShader=pE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=dE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Sv extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new L,zm=new Ae,Bm=new Ae;class un extends Sv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sc*2*Math.atan(Math.tan(Cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,n){return this.getViewBounds(e,zm,Bm),n.subVectors(Bm,zm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Cl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const cs=-90,us=1;class mE extends _t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(cs,us,e,n);r.layers=this.layers,this.add(r);const s=new un(cs,us,e,n);s.layers=this.layers,this.add(s);const o=new un(cs,us,e,n);o.layers=this.layers,this.add(o);const a=new un(cs,us,e,n);a.layers=this.layers,this.add(a);const l=new un(cs,us,e,n);l.layers=this.layers,this.add(l);const c=new un(cs,us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,p,h),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Mv extends en{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Ys,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gE extends Xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Mv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Fn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new vt(5,5,5),s=new dr({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:sr});s.uniforms.tEquirect.value=n;const o=new ae(r,s),a=n.minFilter;return n.minFilter===Fr&&(n.minFilter=Fn),new mE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ku=new L,_E=new L,vE=new Fe;class ji{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ku.subVectors(i,n).cross(_E.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ku),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||vE.getNormalMatrix(e),r=this.coplanarPoint(ku).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new bc,el=new L;class Bf{constructor(e=new ji,n=new ji,i=new ji,r=new ji,s=new ji,o=new ji){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],p=r[7],h=r[8],x=r[9],g=r[10],m=r[11],u=r[12],_=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,p-c,m-h,S-u).normalize(),i[1].setComponents(l+s,p+c,m+h,S+u).normalize(),i[2].setComponents(l+o,p+d,m+x,S+_).normalize(),i[3].setComponents(l-o,p-d,m-x,S-_).normalize(),i[4].setComponents(l-a,p-f,m-g,S-v).normalize(),n===Ai)i[5].setComponents(l+a,p+f,m+g,S+v).normalize();else if(n===rc)i[5].setComponents(a,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(el.x=r.normal.x>0?e.max.x:e.min.x,el.y=r.normal.y>0?e.max.y:e.min.y,el.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ev(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function xE(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,c,d),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((h,x)=>h.start-x.start);let p=0;for(let h=1;h<f.length;h++){const x=f[p],g=f[h];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++p,f[p]=g)}f.length=p+1;for(let h=0,x=f.length;h<x;h++){const g=f[h];t.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class io extends tn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,p=n/l,h=[],x=[],g=[],m=[];for(let u=0;u<d;u++){const _=u*p-o;for(let v=0;v<c;v++){const S=v*f-s;x.push(S,-_,0),g.push(0,0,1),m.push(v/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const v=_+c*u,S=_+c*(u+1),P=_+1+c*(u+1),C=_+1+c*u;h.push(v,S,C),h.push(S,P,C)}this.setIndex(h),this.setAttribute("position",new pt(x,3)),this.setAttribute("normal",new pt(g,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.widthSegments,e.heightSegments)}}var yE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ME=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,CE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,PE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,NE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,VE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,GE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,XE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$E=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KE="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,JE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ew=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ow=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_w=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ew=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ww=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Aw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Iw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ow=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ww=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$w=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,n1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,i1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,r1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,s1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,a1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,c1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,f1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,p1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,v1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,A1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,C1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,R1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,N1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,k1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,B1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,H1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,W1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Z1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:yE,alphahash_pars_fragment:SE,alphamap_fragment:ME,alphamap_pars_fragment:EE,alphatest_fragment:wE,alphatest_pars_fragment:TE,aomap_fragment:AE,aomap_pars_fragment:CE,batching_pars_vertex:RE,batching_vertex:PE,begin_vertex:bE,beginnormal_vertex:LE,bsdfs:DE,iridescence_fragment:IE,bumpmap_pars_fragment:NE,clipping_planes_fragment:UE,clipping_planes_pars_fragment:FE,clipping_planes_pars_vertex:OE,clipping_planes_vertex:kE,color_fragment:zE,color_pars_fragment:BE,color_pars_vertex:HE,color_vertex:VE,common:GE,cube_uv_reflection_fragment:WE,defaultnormal_vertex:jE,displacementmap_pars_vertex:XE,displacementmap_vertex:YE,emissivemap_fragment:qE,emissivemap_pars_fragment:$E,colorspace_fragment:KE,colorspace_pars_fragment:ZE,envmap_fragment:QE,envmap_common_pars_fragment:JE,envmap_pars_fragment:ew,envmap_pars_vertex:tw,envmap_physical_pars_fragment:hw,envmap_vertex:nw,fog_vertex:iw,fog_pars_vertex:rw,fog_fragment:sw,fog_pars_fragment:ow,gradientmap_pars_fragment:aw,lightmap_pars_fragment:lw,lights_lambert_fragment:cw,lights_lambert_pars_fragment:uw,lights_pars_begin:dw,lights_toon_fragment:fw,lights_toon_pars_fragment:pw,lights_phong_fragment:mw,lights_phong_pars_fragment:gw,lights_physical_fragment:_w,lights_physical_pars_fragment:vw,lights_fragment_begin:xw,lights_fragment_maps:yw,lights_fragment_end:Sw,logdepthbuf_fragment:Mw,logdepthbuf_pars_fragment:Ew,logdepthbuf_pars_vertex:ww,logdepthbuf_vertex:Tw,map_fragment:Aw,map_pars_fragment:Cw,map_particle_fragment:Rw,map_particle_pars_fragment:Pw,metalnessmap_fragment:bw,metalnessmap_pars_fragment:Lw,morphinstance_vertex:Dw,morphcolor_vertex:Iw,morphnormal_vertex:Nw,morphtarget_pars_vertex:Uw,morphtarget_vertex:Fw,normal_fragment_begin:Ow,normal_fragment_maps:kw,normal_pars_fragment:zw,normal_pars_vertex:Bw,normal_vertex:Hw,normalmap_pars_fragment:Vw,clearcoat_normal_fragment_begin:Gw,clearcoat_normal_fragment_maps:Ww,clearcoat_pars_fragment:jw,iridescence_pars_fragment:Xw,opaque_fragment:Yw,packing:qw,premultiplied_alpha_fragment:$w,project_vertex:Kw,dithering_fragment:Zw,dithering_pars_fragment:Qw,roughnessmap_fragment:Jw,roughnessmap_pars_fragment:e1,shadowmap_pars_fragment:t1,shadowmap_pars_vertex:n1,shadowmap_vertex:i1,shadowmask_pars_fragment:r1,skinbase_vertex:s1,skinning_pars_vertex:o1,skinning_vertex:a1,skinnormal_vertex:l1,specularmap_fragment:c1,specularmap_pars_fragment:u1,tonemapping_fragment:d1,tonemapping_pars_fragment:h1,transmission_fragment:f1,transmission_pars_fragment:p1,uv_pars_fragment:m1,uv_pars_vertex:g1,uv_vertex:_1,worldpos_vertex:v1,background_vert:x1,background_frag:y1,backgroundCube_vert:S1,backgroundCube_frag:M1,cube_vert:E1,cube_frag:w1,depth_vert:T1,depth_frag:A1,distanceRGBA_vert:C1,distanceRGBA_frag:R1,equirect_vert:P1,equirect_frag:b1,linedashed_vert:L1,linedashed_frag:D1,meshbasic_vert:I1,meshbasic_frag:N1,meshlambert_vert:U1,meshlambert_frag:F1,meshmatcap_vert:O1,meshmatcap_frag:k1,meshnormal_vert:z1,meshnormal_frag:B1,meshphong_vert:H1,meshphong_frag:V1,meshphysical_vert:G1,meshphysical_frag:W1,meshtoon_vert:j1,meshtoon_frag:X1,points_vert:Y1,points_frag:q1,shadow_vert:$1,shadow_frag:K1,sprite_vert:Z1,sprite_frag:Q1},oe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},li={basic:{uniforms:Kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Kt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Kt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Kt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Kt([oe.points,oe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Kt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Kt([oe.common,oe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Kt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Kt([oe.sprite,oe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Kt([oe.common,oe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Kt([oe.lights,oe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};li.physical={uniforms:Kt([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const tl={r:0,b:0,g:0},Sr=new ii,J1=new ot;function eT(t,e,n,i,r,s,o){const a=new Oe(0);let l=s===!0?0:1,c,d,f=null,p=0,h=null;function x(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function g(_){let v=!1;const S=x(_);S===null?u(a,l):S&&S.isColor&&(u(S,1),v=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,v){const S=x(v);S&&(S.isCubeTexture||S.mapping===Rc)?(d===void 0&&(d=new ae(new vt(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:Zs(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Sr.copy(v.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(J1.makeRotationFromEuler(Sr)),d.material.toneMapped=Qe.getTransfer(S.colorSpace)!==ht,(f!==S||p!==S.version||h!==t.toneMapping)&&(d.material.needsUpdate=!0,f=S,p=S.version,h=t.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ae(new io(2,2),new dr({name:"BackgroundMaterial",uniforms:Zs(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(S.colorSpace)!==ht,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||p!==S.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,p=S.version,h=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,v){_.getRGB(tl,yv(t)),i.buffers.color.setClear(tl.r,tl.g,tl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(a,l)},render:g,addToRenderList:m}}function tT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(y,E,O,B,W){let q=!1;const G=f(B,O,E);s!==G&&(s=G,c(s.object)),q=h(y,B,O,W),q&&x(y,B,O,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(y,E,O,B),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function d(y){return t.deleteVertexArray(y)}function f(y,E,O){const B=O.wireframe===!0;let W=i[y.id];W===void 0&&(W={},i[y.id]=W);let q=W[E.id];q===void 0&&(q={},W[E.id]=q);let G=q[B];return G===void 0&&(G=p(l()),q[B]=G),G}function p(y){const E=[],O=[],B=[];for(let W=0;W<n;W++)E[W]=0,O[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:O,attributeDivisors:B,object:y,attributes:{},index:null}}function h(y,E,O,B){const W=s.attributes,q=E.attributes;let G=0;const $=O.getAttributes();for(const D in $)if($[D].location>=0){const Q=W[D];let ie=q[D];if(ie===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),Q===void 0||Q.attribute!==ie||ie&&Q.data!==ie.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function x(y,E,O,B){const W={},q=E.attributes;let G=0;const $=O.getAttributes();for(const D in $)if($[D].location>=0){let Q=q[D];Q===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor));const ie={};ie.attribute=Q,Q&&Q.data&&(ie.data=Q.data),W[D]=ie,G++}s.attributes=W,s.attributesNum=G,s.index=B}function g(){const y=s.newAttributes;for(let E=0,O=y.length;E<O;E++)y[E]=0}function m(y){u(y,0)}function u(y,E){const O=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;O[y]=1,B[y]===0&&(t.enableVertexAttribArray(y),B[y]=1),W[y]!==E&&(t.vertexAttribDivisor(y,E),W[y]=E)}function _(){const y=s.newAttributes,E=s.enabledAttributes;for(let O=0,B=E.length;O<B;O++)E[O]!==y[O]&&(t.disableVertexAttribArray(O),E[O]=0)}function v(y,E,O,B,W,q,G){G===!0?t.vertexAttribIPointer(y,E,O,W,q):t.vertexAttribPointer(y,E,O,B,W,q)}function S(y,E,O,B){g();const W=B.attributes,q=O.getAttributes(),G=E.defaultAttributeValues;for(const $ in q){const D=q[$];if(D.location>=0){let Y=W[$];if(Y===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),Y!==void 0){const Q=Y.normalized,ie=Y.itemSize,Ee=e.get(Y);if(Ee===void 0)continue;const ze=Ee.buffer,X=Ee.type,ne=Ee.bytesPerElement,he=X===t.INT||X===t.UNSIGNED_INT||Y.gpuType===Df;if(Y.isInterleavedBufferAttribute){const ce=Y.data,Ie=ce.stride,Ce=Y.offset;if(ce.isInstancedInterleavedBuffer){for(let Ve=0;Ve<D.locationSize;Ve++)u(D.location+Ve,ce.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ve=0;Ve<D.locationSize;Ve++)m(D.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Ve=0;Ve<D.locationSize;Ve++)v(D.location+Ve,ie/D.locationSize,X,Q,Ie*ne,(Ce+ie/D.locationSize*Ve)*ne,he)}else{if(Y.isInstancedBufferAttribute){for(let ce=0;ce<D.locationSize;ce++)u(D.location+ce,Y.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ce=0;ce<D.locationSize;ce++)m(D.location+ce);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let ce=0;ce<D.locationSize;ce++)v(D.location+ce,ie/D.locationSize,X,Q,ie*ne,ie/D.locationSize*ce*ne,he)}}else if(G!==void 0){const Q=G[$];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(D.location,Q);break;case 3:t.vertexAttrib3fv(D.location,Q);break;case 4:t.vertexAttrib4fv(D.location,Q);break;default:t.vertexAttrib1fv(D.location,Q)}}}}_()}function P(){b();for(const y in i){const E=i[y];for(const O in E){const B=E[O];for(const W in B)d(B[W].object),delete B[W];delete E[O]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const O in E){const B=E[O];for(const W in B)d(B[W].object),delete B[W];delete E[O]}delete i[y.id]}function A(y){for(const E in i){const O=i[E];if(O[y.id]===void 0)continue;const B=O[y.id];for(const W in B)d(B[W].object),delete B[W];delete O[y.id]}}function b(){V(),o=!0,s!==r&&(s=r,c(s.object))}function V(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:V,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function nT(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let h=0;for(let x=0;x<f;x++)h+=d[x];n.update(h,i,1)}function l(c,d,f,p){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let x=0;x<c.length;x++)o(c[x],d[x],p[x]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,d,0,p,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];for(let g=0;g<p.length;g++)n.update(x,i,p[g])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function iT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Qn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const b=A===pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Di&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ti&&!b)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,p=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=x>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:h,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:P,maxSamples:C}}function rT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ji,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const h=f.length!==0||p||i!==0||r;return r=p,i=f.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){n=d(f,p,0)},this.setState=function(f,p,h){const x=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||x===null||x.length===0||s&&!m)s?d(null):c();else{const _=s?0:i,v=_*4;let S=u.clippingState||null;l.value=S,S=d(x,p,v,h);for(let P=0;P!==v;++P)S[P]=n[P];u.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,h,x){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const u=h+g*4,_=p.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,S=h;v!==g;++v,S+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function sT(t){let e=new WeakMap;function n(o,a){return a===rh?o.mapping=Ys:a===sh&&(o.mapping=qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===rh||a===sh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new gE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class wv extends Sv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ts=4,Hm=[.125,.215,.35,.446,.526,.582],br=20,zu=new wv,Vm=new Oe;let Bu=null,Hu=0,Vu=0,Gu=!1;const Ar=(1+Math.sqrt(5))/2,ds=1/Ar,Gm=[new L(-Ar,ds,0),new L(Ar,ds,0),new L(-ds,0,Ar),new L(ds,0,Ar),new L(0,Ar,-ds),new L(0,Ar,ds),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Bu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bu,Hu,Vu),this._renderer.xr.enabled=Gu,e.scissorTest=!1,nl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ys||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:pa,format:Qn,colorSpace:mr,depthBuffer:!1},r=jm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oT(s)),this._blurMaterial=aT(s,e,n)}return r}_compileMaterial(e){const n=new ae(this._lodPlanes[0],e);this._renderer.compile(n,zu)}_sceneToCubeUV(e,n,i,r){const a=new un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Vm),d.toneMapping=or,d.autoClear=!1;const h=new no({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),x=new ae(new vt,h);let g=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,g=!0):(h.color.copy(Vm),g=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;nl(r,_*v,u>2?v:0,v,v),d.setRenderTarget(r),g&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ys||e.mapping===qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ae(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;nl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,zu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Gm[(r-s-1)%Gm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new ae(this._lodPlanes[r],c),p=c.uniforms,h=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*br-1),g=s/x,m=isFinite(s)?1+Math.floor(d*g):br;m>br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const u=[];let _=0;for(let A=0;A<br;++A){const b=A/g,V=Math.exp(-b*b/2);u.push(V),A===0?_+=V:A<m&&(_+=2*V)}for(let A=0;A<u.length;A++)u[A]=u[A]/_;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:v}=this;p.dTheta.value=x,p.mipInt.value=v-i;const S=this._sizeLods[r],P=3*S*(r>v-Ts?r-v+Ts:0),C=4*(this._cubeSize-S);nl(n,P,C,3*S,2*S),l.setRenderTarget(n),l.render(f,zu)}}function oT(t){const e=[],n=[],i=[];let r=t;const s=t-Ts+1+Hm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ts?l=Hm[o-t+Ts-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,p=[d,d,f,d,f,f,d,d,f,f,d,f],h=6,x=6,g=3,m=2,u=1,_=new Float32Array(g*x*h),v=new Float32Array(m*x*h),S=new Float32Array(u*x*h);for(let C=0;C<h;C++){const A=C%3*2/3-1,b=C>2?0:-1,V=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];_.set(V,g*x*C),v.set(p,m*x*C);const y=[C,C,C,C,C,C];S.set(y,u*x*C)}const P=new tn;P.setAttribute("position",new hi(_,g)),P.setAttribute("uv",new hi(v,m)),P.setAttribute("faceIndex",new hi(S,u)),e.push(P),r>Ts&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function jm(t,e,n){const i=new Xr(t,e,n);return i.texture.mapping=Rc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function aT(t,e,n){const i=new Float32Array(br),r=new L(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Xm(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Ym(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Hf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===rh||l===sh,d=l===Ys||l===qs;if(c||d){let f=e.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return n===null&&(n=new Wm(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||d&&h&&r(h)?(n===null&&(n=new Wm(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function cT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Rl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function uT(t,e,n,i){const r={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);for(const x in p.morphAttributes){const g=p.morphAttributes[x];for(let m=0,u=g.length;m<u;m++)e.remove(g[m])}p.removeEventListener("dispose",o),delete r[p.id];const h=s.get(p);h&&(e.remove(h),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,n.memory.geometries++),p}function l(f){const p=f.attributes;for(const x in p)e.update(p[x],t.ARRAY_BUFFER);const h=f.morphAttributes;for(const x in h){const g=h[x];for(let m=0,u=g.length;m<u;m++)e.update(g[m],t.ARRAY_BUFFER)}}function c(f){const p=[],h=f.index,x=f.attributes.position;let g=0;if(h!==null){const _=h.array;g=h.version;for(let v=0,S=_.length;v<S;v+=3){const P=_[v+0],C=_[v+1],A=_[v+2];p.push(P,C,C,A,A,P)}}else if(x!==void 0){const _=x.array;g=x.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const P=v+0,C=v+1,A=v+2;p.push(P,C,C,A,A,P)}}else return;const m=new(pv(p)?xv:vv)(p,1);m.version=g;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function d(f){const p=s.get(f);if(p){const h=f.index;h!==null&&p.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function dT(t,e,n){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,h){t.drawElements(i,h,s,p*o),n.update(h,i,1)}function c(p,h,x){x!==0&&(t.drawElementsInstanced(i,h,s,p*o,x),n.update(h,i,x))}function d(p,h,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,p,0,x);let m=0;for(let u=0;u<x;u++)m+=h[u];n.update(m,i,1)}function f(p,h,x,g){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)c(p[u]/o,h[u],g[u]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,p,0,g,0,x);let u=0;for(let _=0;_<x;_++)u+=h[_];for(let _=0;_<g.length;_++)n.update(u,i,g[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function hT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function fT(t,e,n){const i=new WeakMap,r=new rt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let p=i.get(a);if(p===void 0||p.count!==f){let y=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var h=y;p!==void 0&&p.texture.dispose();const x=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;x===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let P=a.attributes.position.count*S,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*C*4*f),b=new gv(A,P,C,f);b.type=Ti,b.needsUpdate=!0;const V=S*4;for(let E=0;E<f;E++){const O=u[E],B=_[E],W=v[E],q=P*C*4*E;for(let G=0;G<O.count;G++){const $=G*V;x===!0&&(r.fromBufferAttribute(O,G),A[q+$+0]=r.x,A[q+$+1]=r.y,A[q+$+2]=r.z,A[q+$+3]=0),g===!0&&(r.fromBufferAttribute(B,G),A[q+$+4]=r.x,A[q+$+5]=r.y,A[q+$+6]=r.z,A[q+$+7]=0),m===!0&&(r.fromBufferAttribute(W,G),A[q+$+8]=r.x,A[q+$+9]=r.y,A[q+$+10]=r.z,A[q+$+11]=W.itemSize===4?r.w:1)}}p={count:f,texture:b,size:new Ae(P,C)},i.set(a,p),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const g=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function pT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Tv extends en{constructor(e,n,i,r,s,o,a,l,c,d=Us){if(d!==Us&&d!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Us&&(i=jr),i===void 0&&d===Ks&&(i=$s),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Av=new en,qm=new Tv(1,1),Cv=new gv,Rv=new eE,Pv=new Mv,$m=[],Km=[],Zm=new Float32Array(16),Qm=new Float32Array(9),Jm=new Float32Array(4);function ro(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=$m[r];if(s===void 0&&(s=new Float32Array(r),$m[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Dc(t,e){let n=Km[e];n===void 0&&(n=new Int32Array(e),Km[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function mT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function xT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;Jm.set(i),t.uniformMatrix2fv(this.addr,!1,Jm),It(n,i)}}function yT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;Qm.set(i),t.uniformMatrix3fv(this.addr,!1,Qm),It(n,i)}}function ST(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;Zm.set(i),t.uniformMatrix4fv(this.addr,!1,Zm),It(n,i)}}function MT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function TT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function AT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function bT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(qm.compareFunction=fv,s=qm):s=Av,n.setTexture2D(e||s,r)}function LT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Rv,r)}function DT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Pv,r)}function IT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Cv,r)}function NT(t){switch(t){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return vT;case 35674:return xT;case 35675:return yT;case 35676:return ST;case 5124:case 35670:return MT;case 35667:case 35671:return ET;case 35668:case 35672:return wT;case 35669:case 35673:return TT;case 5125:return AT;case 36294:return CT;case 36295:return RT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return bT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return IT}}function UT(t,e){t.uniform1fv(this.addr,e)}function FT(t,e){const n=ro(e,this.size,2);t.uniform2fv(this.addr,n)}function OT(t,e){const n=ro(e,this.size,3);t.uniform3fv(this.addr,n)}function kT(t,e){const n=ro(e,this.size,4);t.uniform4fv(this.addr,n)}function zT(t,e){const n=ro(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function BT(t,e){const n=ro(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function HT(t,e){const n=ro(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function VT(t,e){t.uniform1iv(this.addr,e)}function GT(t,e){t.uniform2iv(this.addr,e)}function WT(t,e){t.uniform3iv(this.addr,e)}function jT(t,e){t.uniform4iv(this.addr,e)}function XT(t,e){t.uniform1uiv(this.addr,e)}function YT(t,e){t.uniform2uiv(this.addr,e)}function qT(t,e){t.uniform3uiv(this.addr,e)}function $T(t,e){t.uniform4uiv(this.addr,e)}function KT(t,e,n){const i=this.cache,r=e.length,s=Dc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Av,s[o])}function ZT(t,e,n){const i=this.cache,r=e.length,s=Dc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Rv,s[o])}function QT(t,e,n){const i=this.cache,r=e.length,s=Dc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Pv,s[o])}function JT(t,e,n){const i=this.cache,r=e.length,s=Dc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Cv,s[o])}function eA(t){switch(t){case 5126:return UT;case 35664:return FT;case 35665:return OT;case 35666:return kT;case 35674:return zT;case 35675:return BT;case 35676:return HT;case 5124:case 35670:return VT;case 35667:case 35671:return GT;case 35668:case 35672:return WT;case 35669:case 35673:return jT;case 5125:return XT;case 36294:return YT;case 36295:return qT;case 36296:return $T;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return JT}}class tA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=NT(n.type)}}class nA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=eA(n.type)}}class iA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Wu=/(\w+)(\])?(\[|\.)?/g;function eg(t,e){t.seq.push(e),t.map[e.id]=e}function rA(t,e,n){const i=t.name,r=i.length;for(Wu.lastIndex=0;;){const s=Wu.exec(i),o=Wu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){eg(n,c===void 0?new tA(a,t,e):new nA(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new iA(a),eg(n,f)),n=f}}}class Pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);rA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function tg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const sA=37297;let oA=0;function aA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function lA(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===ic&&n===nc?i="LinearDisplayP3ToLinearSRGB":e===nc&&n===ic&&(i="LinearSRGBToLinearDisplayP3"),t){case mr:case Pc:return[i,"LinearTransferOETF"];case In:case kf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function ng(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+aA(t.getShaderSource(e),o)}else return r}function cA(t,e){const n=lA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function uA(t,e){let n;switch(e){case AM:n="Linear";break;case CM:n="Reinhard";break;case RM:n="Cineon";break;case ev:n="ACESFilmic";break;case bM:n="AgX";break;case LM:n="Neutral";break;case PM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const il=new L;function dA(){Qe.getLuminanceCoefficients(il);const t=il.x.toFixed(4),e=il.y.toFixed(4),n=il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function fA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function pA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ro(t){return t!==""}function ig(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(t){return t.replace(mA,_A)}const gA=new Map;function _A(t,e){let n=Ue[e];if(n===void 0){const i=gA.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nh(n)}const vA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sg(t){return t.replace(vA,xA)}function xA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function og(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Q_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===sM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function SA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ys:case qs:e="ENVMAP_TYPE_CUBE";break;case Rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function EA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case J_:e="ENVMAP_BLENDING_MULTIPLY";break;case wM:e="ENVMAP_BLENDING_MIX";break;case TM:e="ENVMAP_BLENDING_ADD";break}return e}function wA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function TA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=yA(n),c=SA(n),d=MA(n),f=EA(n),p=wA(n),h=hA(n),x=fA(s),g=r.createProgram();let m,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ro).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ro).join(`
`),u.length>0&&(u+=`
`)):(m=[og(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),u=[og(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==or?"#define TONE_MAPPING":"",n.toneMapping!==or?Ue.tonemapping_pars_fragment:"",n.toneMapping!==or?uA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,cA("linearToOutputTexel",n.outputColorSpace),dA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ro).join(`
`)),o=Nh(o),o=ig(o,n),o=rg(o,n),a=Nh(a),a=ig(a,n),a=rg(a,n),o=sg(o),a=sg(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=_+m+o,S=_+u+a,P=tg(r,r.VERTEX_SHADER,v),C=tg(r,r.FRAGMENT_SHADER,S);r.attachShader(g,P),r.attachShader(g,C),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(E){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(g).trim(),B=r.getShaderInfoLog(P).trim(),W=r.getShaderInfoLog(C).trim();let q=!0,G=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,P,C);else{const $=ng(r,P,"vertex"),D=ng(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+O+`
`+$+`
`+D)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||W==="")&&(G=!1);G&&(E.diagnostics={runnable:q,programLog:O,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:u}})}r.deleteShader(P),r.deleteShader(C),b=new Pl(r,g),V=pA(r,g)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let V;this.getAttributes=function(){return V===void 0&&A(this),V};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(g,sA)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oA++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=C,this}let AA=0;class CA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new RA(e),n.set(e,i)),i}}class RA{constructor(e){this.id=AA++,this.code=e,this.usedTimes=0}}function PA(t,e,n,i,r,s,o){const a=new zf,l=new CA,c=new Set,d=[],f=r.logarithmicDepthBuffer,p=r.reverseDepthBuffer,h=r.vertexTextures;let x=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,E,O,B,W){const q=B.fog,G=W.geometry,$=y.isMeshStandardMaterial?B.environment:null,D=(y.isMeshStandardMaterial?n:e).get(y.envMap||$),Y=D&&D.mapping===Rc?D.image.height:null,Q=g[y.type];y.precision!==null&&(x=r.getMaxPrecision(y.precision),x!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",x,"instead."));const ie=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ee=ie!==void 0?ie.length:0;let ze=0;G.morphAttributes.position!==void 0&&(ze=1),G.morphAttributes.normal!==void 0&&(ze=2),G.morphAttributes.color!==void 0&&(ze=3);let X,ne,he,ce;if(Q){const on=li[Q];X=on.vertexShader,ne=on.fragmentShader}else X=y.vertexShader,ne=y.fragmentShader,l.update(y),he=l.getVertexShaderID(y),ce=l.getFragmentShaderID(y);const Ie=t.getRenderTarget(),Ce=W.isInstancedMesh===!0,Ve=W.isBatchedMesh===!0,tt=!!y.map,Ge=!!y.matcap,I=!!D,gn=!!y.aoMap,Be=!!y.lightMap,Xe=!!y.bumpMap,Pe=!!y.normalMap,ct=!!y.displacementMap,De=!!y.emissiveMap,R=!!y.metalnessMap,M=!!y.roughnessMap,k=y.anisotropy>0,Z=y.clearcoat>0,ee=y.dispersion>0,K=y.iridescence>0,Se=y.sheen>0,le=y.transmission>0,ge=k&&!!y.anisotropyMap,Ye=Z&&!!y.clearcoatMap,re=Z&&!!y.clearcoatNormalMap,_e=Z&&!!y.clearcoatRoughnessMap,be=K&&!!y.iridescenceMap,Le=K&&!!y.iridescenceThicknessMap,ve=Se&&!!y.sheenColorMap,He=Se&&!!y.sheenRoughnessMap,Ne=!!y.specularMap,at=!!y.specularColorMap,N=!!y.specularIntensityMap,fe=le&&!!y.transmissionMap,j=le&&!!y.thicknessMap,J=!!y.gradientMap,ue=!!y.alphaMap,pe=y.alphaTest>0,We=!!y.alphaHash,At=!!y.extensions;let sn=or;y.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(sn=t.toneMapping);const qe={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:ne,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:ce,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:x,batching:Ve,batchingColor:Ve&&W._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&W.instanceColor!==null,instancingMorph:Ce&&W.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Ie===null?t.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:mr,alphaToCoverage:!!y.alphaToCoverage,map:tt,matcap:Ge,envMap:I,envMapMode:I&&D.mapping,envMapCubeUVHeight:Y,aoMap:gn,lightMap:Be,bumpMap:Xe,normalMap:Pe,displacementMap:h&&ct,emissiveMap:De,normalMapObjectSpace:Pe&&y.normalMapType===UM,normalMapTangentSpace:Pe&&y.normalMapType===hv,metalnessMap:R,roughnessMap:M,anisotropy:k,anisotropyMap:ge,clearcoat:Z,clearcoatMap:Ye,clearcoatNormalMap:re,clearcoatRoughnessMap:_e,dispersion:ee,iridescence:K,iridescenceMap:be,iridescenceThicknessMap:Le,sheen:Se,sheenColorMap:ve,sheenRoughnessMap:He,specularMap:Ne,specularColorMap:at,specularIntensityMap:N,transmission:le,transmissionMap:fe,thicknessMap:j,gradientMap:J,opaque:y.transparent===!1&&y.blending===Ns&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:pe,alphaHash:We,combine:y.combine,mapUv:tt&&m(y.map.channel),aoMapUv:gn&&m(y.aoMap.channel),lightMapUv:Be&&m(y.lightMap.channel),bumpMapUv:Xe&&m(y.bumpMap.channel),normalMapUv:Pe&&m(y.normalMap.channel),displacementMapUv:ct&&m(y.displacementMap.channel),emissiveMapUv:De&&m(y.emissiveMap.channel),metalnessMapUv:R&&m(y.metalnessMap.channel),roughnessMapUv:M&&m(y.roughnessMap.channel),anisotropyMapUv:ge&&m(y.anisotropyMap.channel),clearcoatMapUv:Ye&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:He&&m(y.sheenRoughnessMap.channel),specularMapUv:Ne&&m(y.specularMap.channel),specularColorMapUv:at&&m(y.specularColorMap.channel),specularIntensityMapUv:N&&m(y.specularIntensityMap.channel),transmissionMapUv:fe&&m(y.transmissionMap.channel),thicknessMapUv:j&&m(y.thicknessMap.channel),alphaMapUv:ue&&m(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Pe||k),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!G.attributes.uv&&(tt||ue),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:p,skinning:W.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ze,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:sn,decodeVideoTexture:tt&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kn,flipSided:y.side===mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:At&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&y.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function _(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const O in y.defines)E.push(O),E.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(v(E,y),S(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function v(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function P(y){const E=g[y.type];let O;if(E){const B=li[E];O=hE.clone(B.uniforms)}else O=y.uniforms;return O}function C(y,E){let O;for(let B=0,W=d.length;B<W;B++){const q=d[B];if(q.cacheKey===E){O=q,++O.usedTimes;break}}return O===void 0&&(O=new TA(t,E,y,s),d.push(O)),O}function A(y){if(--y.usedTimes===0){const E=d.indexOf(y);d[E]=d[d.length-1],d.pop(),y.destroy()}}function b(y){l.remove(y)}function V(){l.dispose()}return{getParameters:u,getProgramCacheKey:_,getUniforms:P,acquireProgram:C,releaseProgram:A,releaseShaderCache:b,programs:d,dispose:V}}function bA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function LA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ag(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function lg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,p,h,x,g,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:h,groupOrder:x,renderOrder:f.renderOrder,z:g,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=h,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=g,u.group=m),e++,u}function a(f,p,h,x,g,m){const u=o(f,p,h,x,g,m);h.transmission>0?i.push(u):h.transparent===!0?r.push(u):n.push(u)}function l(f,p,h,x,g,m){const u=o(f,p,h,x,g,m);h.transmission>0?i.unshift(u):h.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,p){n.length>1&&n.sort(f||LA),i.length>1&&i.sort(p||ag),r.length>1&&r.sort(p||ag)}function d(){for(let f=e,p=t.length;f<p;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function DA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new lg,t.set(i,[o])):r>=s.length?(o=new lg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function IA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new Oe};break;case"SpotLight":n={position:new L,direction:new L,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":n={color:new Oe,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function NA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let UA=0;function FA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function OA(t){const e=new IA,n=NA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const r=new L,s=new ot,o=new ot;function a(c){let d=0,f=0,p=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let h=0,x=0,g=0,m=0,u=0,_=0,v=0,S=0,P=0,C=0,A=0;c.sort(FA);for(let V=0,y=c.length;V<y;V++){const E=c[V],O=E.color,B=E.intensity,W=E.distance,q=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)d+=O.r*B,f+=O.g*B,p+=O.b*B;else if(E.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(E.sh.coefficients[G],B);A++}else if(E.isDirectionalLight){const G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const $=E.shadow,D=n.get(E);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.directionalShadow[h]=D,i.directionalShadowMap[h]=q,i.directionalShadowMatrix[h]=E.shadow.matrix,_++}i.directional[h]=G,h++}else if(E.isSpotLight){const G=e.get(E);G.position.setFromMatrixPosition(E.matrixWorld),G.color.copy(O).multiplyScalar(B),G.distance=W,G.coneCos=Math.cos(E.angle),G.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),G.decay=E.decay,i.spot[g]=G;const $=E.shadow;if(E.map&&(i.spotLightMap[P]=E.map,P++,$.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[g]=$.matrix,E.castShadow){const D=n.get(E);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.spotShadow[g]=D,i.spotShadowMap[g]=q,S++}g++}else if(E.isRectAreaLight){const G=e.get(E);G.color.copy(O).multiplyScalar(B),G.halfWidth.set(E.width*.5,0,0),G.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=G,m++}else if(E.isPointLight){const G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),G.distance=E.distance,G.decay=E.decay,E.castShadow){const $=E.shadow,D=n.get(E);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,D.shadowCameraNear=$.camera.near,D.shadowCameraFar=$.camera.far,i.pointShadow[x]=D,i.pointShadowMap[x]=q,i.pointShadowMatrix[x]=E.shadow.matrix,v++}i.point[x]=G,x++}else if(E.isHemisphereLight){const G=e.get(E);G.skyColor.copy(E.color).multiplyScalar(B),G.groundColor.copy(E.groundColor).multiplyScalar(B),i.hemi[u]=G,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const b=i.hash;(b.directionalLength!==h||b.pointLength!==x||b.spotLength!==g||b.rectAreaLength!==m||b.hemiLength!==u||b.numDirectionalShadows!==_||b.numPointShadows!==v||b.numSpotShadows!==S||b.numSpotMaps!==P||b.numLightProbes!==A)&&(i.directional.length=h,i.spot.length=g,i.rectArea.length=m,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,b.directionalLength=h,b.pointLength=x,b.spotLength=g,b.rectAreaLength=m,b.hemiLength=u,b.numDirectionalShadows=_,b.numPointShadows=v,b.numSpotShadows=S,b.numSpotMaps=P,b.numLightProbes=A,i.version=UA++)}function l(c,d){let f=0,p=0,h=0,x=0,g=0;const m=d.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const v=c[u];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(v.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(v.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),p++}else if(v.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function cg(t){const e=new OA(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function kA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new cg(t),e.set(r,[a])):s>=o.length?(a=new cg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class zA extends to{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BA extends to{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const HA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GA(t,e,n){let i=new Bf;const r=new Ae,s=new Ae,o=new rt,a=new zA({depthPacking:NM}),l=new BA,c={},d=n.maxTextureSize,f={[ur]:mn,[mn]:ur,[Kn]:Kn},p=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:HA,fragmentShader:VA}),h=p.clone();h.defines.HORIZONTAL_PASS=1;const x=new tn;x.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ae(x,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Q_;let u=this.type;this.render=function(C,A,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const V=t.getRenderTarget(),y=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),O=t.state;O.setBlending(sr),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=u!==xi&&this.type===xi,W=u===xi&&this.type!==xi;for(let q=0,G=C.length;q<G;q++){const $=C[q],D=$.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Y=D.getFrameExtents();if(r.multiply(Y),s.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Y.x),r.x=s.x*Y.x,D.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Y.y),r.y=s.y*Y.y,D.mapSize.y=s.y)),D.map===null||B===!0||W===!0){const ie=this.type!==xi?{minFilter:Tn,magFilter:Tn}:{};D.map!==null&&D.map.dispose(),D.map=new Xr(r.x,r.y,ie),D.map.texture.name=$.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Q=D.getViewportCount();for(let ie=0;ie<Q;ie++){const Ee=D.getViewport(ie);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),O.viewport(o),D.updateMatrices($,ie),i=D.getFrustum(),S(A,b,D.camera,$,this.type)}D.isPointLightShadow!==!0&&this.type===xi&&_(D,b),D.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(V,y,E)};function _(C,A){const b=e.update(g);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Xr(r.x,r.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,b,p,g,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,b,h,g,null)}function v(C,A,b,V){let y=null;const E=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)y=E;else if(y=b.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=y.uuid,B=A.uuid;let W=c[O];W===void 0&&(W={},c[O]=W);let q=W[B];q===void 0&&(q=y.clone(),W[B]=q,A.addEventListener("dispose",P)),y=q}if(y.visible=A.visible,y.wireframe=A.wireframe,V===xi?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:f[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=t.properties.get(y);O.light=b}return y}function S(C,A,b,V,y){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===xi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);const B=e.update(C),W=C.material;if(Array.isArray(W)){const q=B.groups;for(let G=0,$=q.length;G<$;G++){const D=q[G],Y=W[D.materialIndex];if(Y&&Y.visible){const Q=v(C,Y,V,y);C.onBeforeShadow(t,C,A,b,B,Q,D),t.renderBufferDirect(b,null,B,Q,C,D),C.onAfterShadow(t,C,A,b,B,Q,D)}}}else if(W.visible){const q=v(C,W,V,y);C.onBeforeShadow(t,C,A,b,B,q,null),t.renderBufferDirect(b,null,B,q,C,null),C.onAfterShadow(t,C,A,b,B,q,null)}}const O=C.children;for(let B=0,W=O.length;B<W;B++)S(O[B],A,b,V,y)}function P(C){C.target.removeEventListener("dispose",P);for(const b in c){const V=c[b],y=C.target.uuid;y in V&&(V[y].dispose(),delete V[y])}}}const WA={[Zd]:Qd,[Jd]:nh,[eh]:ih,[Xs]:th,[Qd]:Zd,[nh]:Jd,[ih]:eh,[th]:Xs};function jA(t){function e(){let N=!1;const fe=new rt;let j=null;const J=new rt(0,0,0,0);return{setMask:function(ue){j!==ue&&!N&&(t.colorMask(ue,ue,ue,ue),j=ue)},setLocked:function(ue){N=ue},setClear:function(ue,pe,We,At,sn){sn===!0&&(ue*=At,pe*=At,We*=At),fe.set(ue,pe,We,At),J.equals(fe)===!1&&(t.clearColor(ue,pe,We,At),J.copy(fe))},reset:function(){N=!1,j=null,J.set(-1,0,0,0)}}}function n(){let N=!1,fe=!1,j=null,J=null,ue=null;return{setReversed:function(pe){fe=pe},setTest:function(pe){pe?he(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(pe){j!==pe&&!N&&(t.depthMask(pe),j=pe)},setFunc:function(pe){if(fe&&(pe=WA[pe]),J!==pe){switch(pe){case Zd:t.depthFunc(t.NEVER);break;case Qd:t.depthFunc(t.ALWAYS);break;case Jd:t.depthFunc(t.LESS);break;case Xs:t.depthFunc(t.LEQUAL);break;case eh:t.depthFunc(t.EQUAL);break;case th:t.depthFunc(t.GEQUAL);break;case nh:t.depthFunc(t.GREATER);break;case ih:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=pe}},setLocked:function(pe){N=pe},setClear:function(pe){ue!==pe&&(t.clearDepth(pe),ue=pe)},reset:function(){N=!1,j=null,J=null,ue=null}}}function i(){let N=!1,fe=null,j=null,J=null,ue=null,pe=null,We=null,At=null,sn=null;return{setTest:function(qe){N||(qe?he(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(qe){fe!==qe&&!N&&(t.stencilMask(qe),fe=qe)},setFunc:function(qe,on,fi){(j!==qe||J!==on||ue!==fi)&&(t.stencilFunc(qe,on,fi),j=qe,J=on,ue=fi)},setOp:function(qe,on,fi){(pe!==qe||We!==on||At!==fi)&&(t.stencilOp(qe,on,fi),pe=qe,We=on,At=fi)},setLocked:function(qe){N=qe},setClear:function(qe){sn!==qe&&(t.clearStencil(qe),sn=qe)},reset:function(){N=!1,fe=null,j=null,J=null,ue=null,pe=null,We=null,At=null,sn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,p=[],h=null,x=!1,g=null,m=null,u=null,_=null,v=null,S=null,P=null,C=new Oe(0,0,0),A=0,b=!1,V=null,y=null,E=null,O=null,B=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,G=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec($)[1]),q=G>=1):$.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=G>=2);let D=null,Y={};const Q=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),Ee=new rt().fromArray(Q),ze=new rt().fromArray(ie);function X(N,fe,j,J){const ue=new Uint8Array(4),pe=t.createTexture();t.bindTexture(N,pe),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let We=0;We<j;We++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(fe+We,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return pe}const ne={};ne[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(t.DEPTH_TEST),s.setFunc(Xs),Be(!1),Xe(_m),he(t.CULL_FACE),I(sr);function he(N){c[N]!==!0&&(t.enable(N),c[N]=!0)}function ce(N){c[N]!==!1&&(t.disable(N),c[N]=!1)}function Ie(N,fe){return d[N]!==fe?(t.bindFramebuffer(N,fe),d[N]=fe,N===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=fe),N===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ce(N,fe){let j=p,J=!1;if(N){j=f.get(fe),j===void 0&&(j=[],f.set(fe,j));const ue=N.textures;if(j.length!==ue.length||j[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,We=ue.length;pe<We;pe++)j[pe]=t.COLOR_ATTACHMENT0+pe;j.length=ue.length,J=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,J=!0);J&&t.drawBuffers(j)}function Ve(N){return h!==N?(t.useProgram(N),h=N,!0):!1}const tt={[Pr]:t.FUNC_ADD,[aM]:t.FUNC_SUBTRACT,[lM]:t.FUNC_REVERSE_SUBTRACT};tt[cM]=t.MIN,tt[uM]=t.MAX;const Ge={[dM]:t.ZERO,[hM]:t.ONE,[fM]:t.SRC_COLOR,[$d]:t.SRC_ALPHA,[xM]:t.SRC_ALPHA_SATURATE,[_M]:t.DST_COLOR,[mM]:t.DST_ALPHA,[pM]:t.ONE_MINUS_SRC_COLOR,[Kd]:t.ONE_MINUS_SRC_ALPHA,[vM]:t.ONE_MINUS_DST_COLOR,[gM]:t.ONE_MINUS_DST_ALPHA,[yM]:t.CONSTANT_COLOR,[SM]:t.ONE_MINUS_CONSTANT_COLOR,[MM]:t.CONSTANT_ALPHA,[EM]:t.ONE_MINUS_CONSTANT_ALPHA};function I(N,fe,j,J,ue,pe,We,At,sn,qe){if(N===sr){x===!0&&(ce(t.BLEND),x=!1);return}if(x===!1&&(he(t.BLEND),x=!0),N!==oM){if(N!==g||qe!==b){if((m!==Pr||v!==Pr)&&(t.blendEquation(t.FUNC_ADD),m=Pr,v=Pr),qe)switch(N){case Ns:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vm:t.blendFunc(t.ONE,t.ONE);break;case xm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ym:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ns:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case xm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ym:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}u=null,_=null,S=null,P=null,C.set(0,0,0),A=0,g=N,b=qe}return}ue=ue||fe,pe=pe||j,We=We||J,(fe!==m||ue!==v)&&(t.blendEquationSeparate(tt[fe],tt[ue]),m=fe,v=ue),(j!==u||J!==_||pe!==S||We!==P)&&(t.blendFuncSeparate(Ge[j],Ge[J],Ge[pe],Ge[We]),u=j,_=J,S=pe,P=We),(At.equals(C)===!1||sn!==A)&&(t.blendColor(At.r,At.g,At.b,sn),C.copy(At),A=sn),g=N,b=!1}function gn(N,fe){N.side===Kn?ce(t.CULL_FACE):he(t.CULL_FACE);let j=N.side===mn;fe&&(j=!j),Be(j),N.blending===Ns&&N.transparent===!1?I(sr):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const J=N.stencilWrite;o.setTest(J),J&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ct(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(N){V!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),V=N)}function Xe(N){N!==iM?(he(t.CULL_FACE),N!==y&&(N===_m?t.cullFace(t.BACK):N===rM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),y=N}function Pe(N){N!==E&&(q&&t.lineWidth(N),E=N)}function ct(N,fe,j){N?(he(t.POLYGON_OFFSET_FILL),(O!==fe||B!==j)&&(t.polygonOffset(fe,j),O=fe,B=j)):ce(t.POLYGON_OFFSET_FILL)}function De(N){N?he(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function R(N){N===void 0&&(N=t.TEXTURE0+W-1),D!==N&&(t.activeTexture(N),D=N)}function M(N,fe,j){j===void 0&&(D===null?j=t.TEXTURE0+W-1:j=D);let J=Y[j];J===void 0&&(J={type:void 0,texture:void 0},Y[j]=J),(J.type!==N||J.texture!==fe)&&(D!==j&&(t.activeTexture(j),D=j),t.bindTexture(N,fe||ne[N]),J.type=N,J.texture=fe)}function k(){const N=Y[D];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ye(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(N){Ee.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Ee.copy(N))}function ve(N){ze.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),ze.copy(N))}function He(N,fe){let j=l.get(fe);j===void 0&&(j=new WeakMap,l.set(fe,j));let J=j.get(N);J===void 0&&(J=t.getUniformBlockIndex(fe,N.name),j.set(N,J))}function Ne(N,fe){const J=l.get(fe).get(N);a.get(fe)!==J&&(t.uniformBlockBinding(fe,J,N.__bindingPointIndex),a.set(fe,J))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,Y={},d={},f=new WeakMap,p=[],h=null,x=!1,g=null,m=null,u=null,_=null,v=null,S=null,P=null,C=new Oe(0,0,0),A=0,b=!1,V=null,y=null,E=null,O=null,B=null,Ee.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:ce,bindFramebuffer:Ie,drawBuffers:Ce,useProgram:Ve,setBlending:I,setMaterial:gn,setFlipSided:Be,setCullFace:Xe,setLineWidth:Pe,setPolygonOffset:ct,setScissorTest:De,activeTexture:R,bindTexture:M,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:_e,texImage3D:be,updateUBOMapping:He,uniformBlockBinding:Ne,texStorage2D:Ye,texStorage3D:re,texSubImage2D:K,texSubImage3D:Se,compressedTexSubImage2D:le,compressedTexSubImage3D:ge,scissor:Le,viewport:ve,reset:at}}function ug(t,e,n,i){const r=XA(i);switch(n){case sv:return t*e;case av:return t*e;case lv:return t*e*2;case cv:return t*e/r.components*r.byteLength;case Uf:return t*e/r.components*r.byteLength;case uv:return t*e*2/r.components*r.byteLength;case Ff:return t*e*2/r.components*r.byteLength;case ov:return t*e*3/r.components*r.byteLength;case Qn:return t*e*4/r.components*r.byteLength;case Of:return t*e*4/r.components*r.byteLength;case Ml:case El:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wl:case Tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ch:case dh:return Math.max(t,16)*Math.max(e,8)/4;case lh:case uh:return Math.max(t,8)*Math.max(e,8)/2;case hh:case fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ph:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case _h:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case vh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case xh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case yh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case wh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Th:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Rh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Al:case Ph:case bh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case dv:case Lh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Dh:case Ih:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function XA(t){switch(t){case Di:case nv:return{byteLength:1,components:1};case aa:case iv:case pa:return{byteLength:2,components:1};case If:case Nf:return{byteLength:2,components:4};case jr:case Df:case Ti:return{byteLength:4,components:1};case rv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function YA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,d=new WeakMap;let f;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,M){return h?new OffscreenCanvas(R,M):oc("canvas")}function g(R,M,k){let Z=1;const ee=De(R);if((ee.width>k||ee.height>k)&&(Z=k/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Z*ee.width),Se=Math.floor(Z*ee.height);f===void 0&&(f=x(K,Se));const le=M?x(K,Se):f;return le.width=K,le.height=Se,le.getContext("2d").drawImage(R,0,0,K,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+Se+")."),le}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Tn&&R.minFilter!==Fn}function u(R){t.generateMipmap(R)}function _(R,M,k,Z,ee=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=M;if(M===t.RED&&(k===t.FLOAT&&(K=t.R32F),k===t.HALF_FLOAT&&(K=t.R16F),k===t.UNSIGNED_BYTE&&(K=t.R8)),M===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.R8UI),k===t.UNSIGNED_SHORT&&(K=t.R16UI),k===t.UNSIGNED_INT&&(K=t.R32UI),k===t.BYTE&&(K=t.R8I),k===t.SHORT&&(K=t.R16I),k===t.INT&&(K=t.R32I)),M===t.RG&&(k===t.FLOAT&&(K=t.RG32F),k===t.HALF_FLOAT&&(K=t.RG16F),k===t.UNSIGNED_BYTE&&(K=t.RG8)),M===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RG8UI),k===t.UNSIGNED_SHORT&&(K=t.RG16UI),k===t.UNSIGNED_INT&&(K=t.RG32UI),k===t.BYTE&&(K=t.RG8I),k===t.SHORT&&(K=t.RG16I),k===t.INT&&(K=t.RG32I)),M===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RGB8UI),k===t.UNSIGNED_SHORT&&(K=t.RGB16UI),k===t.UNSIGNED_INT&&(K=t.RGB32UI),k===t.BYTE&&(K=t.RGB8I),k===t.SHORT&&(K=t.RGB16I),k===t.INT&&(K=t.RGB32I)),M===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),k===t.UNSIGNED_INT&&(K=t.RGBA32UI),k===t.BYTE&&(K=t.RGBA8I),k===t.SHORT&&(K=t.RGBA16I),k===t.INT&&(K=t.RGBA32I)),M===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),M===t.RGBA){const Se=ee?tc:Qe.getTransfer(Z);k===t.FLOAT&&(K=t.RGBA32F),k===t.HALF_FLOAT&&(K=t.RGBA16F),k===t.UNSIGNED_BYTE&&(K=Se===ht?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(R,M){let k;return R?M===null||M===jr||M===$s?k=t.DEPTH24_STENCIL8:M===Ti?k=t.DEPTH32F_STENCIL8:M===aa&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===jr||M===$s?k=t.DEPTH_COMPONENT24:M===Ti?k=t.DEPTH_COMPONENT32F:M===aa&&(k=t.DEPTH_COMPONENT16),k}function S(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Tn&&R.minFilter!==Fn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function P(R){const M=R.target;M.removeEventListener("dispose",P),A(M),M.isVideoTexture&&d.delete(M)}function C(R){const M=R.target;M.removeEventListener("dispose",C),V(M)}function A(R){const M=i.get(R);if(M.__webglInit===void 0)return;const k=R.source,Z=p.get(k);if(Z){const ee=Z[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(R),Object.keys(Z).length===0&&p.delete(k)}i.remove(R)}function b(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const k=R.source,Z=p.get(k);delete Z[M.__cacheKey],o.memory.textures--}function V(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let ee=0;ee<M.__webglFramebuffer[Z].length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[Z][ee]);else t.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[Z]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=R.textures;for(let Z=0,ee=k.length;Z<ee;Z++){const K=i.get(k[Z]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(k[Z])}i.remove(R)}let y=0;function E(){y=0}function O(){const R=y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),y+=1,R}function B(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function W(R,M){const k=i.get(R);if(R.isVideoTexture&&Pe(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(k,R,M);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+M)}function q(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){ze(k,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+M)}function G(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){ze(k,R,M);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+M)}function $(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){X(k,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+M)}const D={[oh]:t.REPEAT,[Ur]:t.CLAMP_TO_EDGE,[ah]:t.MIRRORED_REPEAT},Y={[Tn]:t.NEAREST,[DM]:t.NEAREST_MIPMAP_NEAREST,[Oa]:t.NEAREST_MIPMAP_LINEAR,[Fn]:t.LINEAR,[gu]:t.LINEAR_MIPMAP_NEAREST,[Fr]:t.LINEAR_MIPMAP_LINEAR},Q={[FM]:t.NEVER,[VM]:t.ALWAYS,[OM]:t.LESS,[fv]:t.LEQUAL,[kM]:t.EQUAL,[HM]:t.GEQUAL,[zM]:t.GREATER,[BM]:t.NOTEQUAL};function ie(R,M){if(M.type===Ti&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Fn||M.magFilter===gu||M.magFilter===Oa||M.magFilter===Fr||M.minFilter===Fn||M.minFilter===gu||M.minFilter===Oa||M.minFilter===Fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,D[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,D[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,D[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Y[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Y[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Tn||M.minFilter!==Oa&&M.minFilter!==Fr||M.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ee(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",P));const Z=M.source;let ee=p.get(Z);ee===void 0&&(ee={},p.set(Z,ee));const K=B(M);if(K!==R.__cacheKey){ee[K]===void 0&&(ee[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[K].usedTimes++;const Se=ee[R.__cacheKey];Se!==void 0&&(ee[R.__cacheKey].usedTimes--,Se.usedTimes===0&&b(M)),R.__cacheKey=K,R.__webglTexture=ee[K].texture}return k}function ze(R,M,k){let Z=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=t.TEXTURE_3D);const ee=Ee(R,M),K=M.source;n.bindTexture(Z,R.__webglTexture,t.TEXTURE0+k);const Se=i.get(K);if(K.version!==Se.__version||ee===!0){n.activeTexture(t.TEXTURE0+k);const le=Qe.getPrimaries(Qe.workingColorSpace),ge=M.colorSpace===qi?null:Qe.getPrimaries(M.colorSpace),Ye=M.colorSpace===qi||le===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let re=g(M.image,!1,r.maxTextureSize);re=ct(M,re);const _e=s.convert(M.format,M.colorSpace),be=s.convert(M.type);let Le=_(M.internalFormat,_e,be,M.colorSpace,M.isVideoTexture);ie(Z,M);let ve;const He=M.mipmaps,Ne=M.isVideoTexture!==!0,at=Se.__version===void 0||ee===!0,N=K.dataReady,fe=S(M,re);if(M.isDepthTexture)Le=v(M.format===Ks,M.type),at&&(Ne?n.texStorage2D(t.TEXTURE_2D,1,Le,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Le,re.width,re.height,0,_e,be,null));else if(M.isDataTexture)if(He.length>0){Ne&&at&&n.texStorage2D(t.TEXTURE_2D,fe,Le,He[0].width,He[0].height);for(let j=0,J=He.length;j<J;j++)ve=He[j],Ne?N&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ve.width,ve.height,_e,be,ve.data):n.texImage2D(t.TEXTURE_2D,j,Le,ve.width,ve.height,0,_e,be,ve.data);M.generateMipmaps=!1}else Ne?(at&&n.texStorage2D(t.TEXTURE_2D,fe,Le,re.width,re.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,_e,be,re.data)):n.texImage2D(t.TEXTURE_2D,0,Le,re.width,re.height,0,_e,be,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ne&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Le,He[0].width,He[0].height,re.depth);for(let j=0,J=He.length;j<J;j++)if(ve=He[j],M.format!==Qn)if(_e!==null)if(Ne){if(N)if(M.layerUpdates.size>0){const ue=ug(ve.width,ve.height,M.format,M.type);for(const pe of M.layerUpdates){const We=ve.data.subarray(pe*ue/ve.data.BYTES_PER_ELEMENT,(pe+1)*ue/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,pe,ve.width,ve.height,1,_e,We,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,ve.width,ve.height,re.depth,_e,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,Le,ve.width,ve.height,re.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,ve.width,ve.height,re.depth,_e,be,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,Le,ve.width,ve.height,re.depth,0,_e,be,ve.data)}else{Ne&&at&&n.texStorage2D(t.TEXTURE_2D,fe,Le,He[0].width,He[0].height);for(let j=0,J=He.length;j<J;j++)ve=He[j],M.format!==Qn?_e!==null?Ne?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,ve.width,ve.height,_e,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,j,Le,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?N&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ve.width,ve.height,_e,be,ve.data):n.texImage2D(t.TEXTURE_2D,j,Le,ve.width,ve.height,0,_e,be,ve.data)}else if(M.isDataArrayTexture)if(Ne){if(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Le,re.width,re.height,re.depth),N)if(M.layerUpdates.size>0){const j=ug(re.width,re.height,M.format,M.type);for(const J of M.layerUpdates){const ue=re.data.subarray(J*j/re.data.BYTES_PER_ELEMENT,(J+1)*j/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,_e,be,ue)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,_e,be,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,re.width,re.height,re.depth,0,_e,be,re.data);else if(M.isData3DTexture)Ne?(at&&n.texStorage3D(t.TEXTURE_3D,fe,Le,re.width,re.height,re.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,_e,be,re.data)):n.texImage3D(t.TEXTURE_3D,0,Le,re.width,re.height,re.depth,0,_e,be,re.data);else if(M.isFramebufferTexture){if(at)if(Ne)n.texStorage2D(t.TEXTURE_2D,fe,Le,re.width,re.height);else{let j=re.width,J=re.height;for(let ue=0;ue<fe;ue++)n.texImage2D(t.TEXTURE_2D,ue,Le,j,J,0,_e,be,null),j>>=1,J>>=1}}else if(He.length>0){if(Ne&&at){const j=De(He[0]);n.texStorage2D(t.TEXTURE_2D,fe,Le,j.width,j.height)}for(let j=0,J=He.length;j<J;j++)ve=He[j],Ne?N&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,_e,be,ve):n.texImage2D(t.TEXTURE_2D,j,Le,_e,be,ve);M.generateMipmaps=!1}else if(Ne){if(at){const j=De(re);n.texStorage2D(t.TEXTURE_2D,fe,Le,j.width,j.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,be,re)}else n.texImage2D(t.TEXTURE_2D,0,Le,_e,be,re);m(M)&&u(Z),Se.__version=K.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function X(R,M,k){if(M.image.length!==6)return;const Z=Ee(R,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+k);const K=i.get(ee);if(ee.version!==K.__version||Z===!0){n.activeTexture(t.TEXTURE0+k);const Se=Qe.getPrimaries(Qe.workingColorSpace),le=M.colorSpace===qi?null:Qe.getPrimaries(M.colorSpace),ge=M.colorSpace===qi||Se===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ye=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,_e=[];for(let J=0;J<6;J++)!Ye&&!re?_e[J]=g(M.image[J],!0,r.maxCubemapSize):_e[J]=re?M.image[J].image:M.image[J],_e[J]=ct(M,_e[J]);const be=_e[0],Le=s.convert(M.format,M.colorSpace),ve=s.convert(M.type),He=_(M.internalFormat,Le,ve,M.colorSpace),Ne=M.isVideoTexture!==!0,at=K.__version===void 0||Z===!0,N=ee.dataReady;let fe=S(M,be);ie(t.TEXTURE_CUBE_MAP,M);let j;if(Ye){Ne&&at&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,He,be.width,be.height);for(let J=0;J<6;J++){j=_e[J].mipmaps;for(let ue=0;ue<j.length;ue++){const pe=j[ue];M.format!==Qn?Le!==null?Ne?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,pe.width,pe.height,Le,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,He,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,pe.width,pe.height,Le,ve,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,He,pe.width,pe.height,0,Le,ve,pe.data)}}}else{if(j=M.mipmaps,Ne&&at){j.length>0&&fe++;const J=De(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,He,J.width,J.height)}for(let J=0;J<6;J++)if(re){Ne?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e[J].width,_e[J].height,Le,ve,_e[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,_e[J].width,_e[J].height,0,Le,ve,_e[J].data);for(let ue=0;ue<j.length;ue++){const We=j[ue].image[J].image;Ne?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,We.width,We.height,Le,ve,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,He,We.width,We.height,0,Le,ve,We.data)}}else{Ne?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,ve,_e[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,Le,ve,_e[J]);for(let ue=0;ue<j.length;ue++){const pe=j[ue];Ne?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,Le,ve,pe.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,He,Le,ve,pe.image[J])}}}m(M)&&u(t.TEXTURE_CUBE_MAP),K.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ne(R,M,k,Z,ee,K){const Se=s.convert(k.format,k.colorSpace),le=s.convert(k.type),ge=_(k.internalFormat,Se,le,k.colorSpace);if(!i.get(M).__hasExternalTextures){const re=Math.max(1,M.width>>K),_e=Math.max(1,M.height>>K);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,K,ge,re,_e,M.depth,0,Se,le,null):n.texImage2D(ee,K,ge,re,_e,0,Se,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ee,i.get(k).__webglTexture,0,Be(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ee,i.get(k).__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(R,M,k){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const Z=M.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,K=v(M.stencilBuffer,ee),Se=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=Be(M);Xe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,K,M.width,M.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,K,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,K,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,R)}else{const Z=M.textures;for(let ee=0;ee<Z.length;ee++){const K=Z[ee],Se=s.convert(K.format,K.colorSpace),le=s.convert(K.type),ge=_(K.internalFormat,Se,le,K.colorSpace),Ye=Be(M);k&&Xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,ge,M.width,M.height):Xe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ye,ge,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ge,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const Z=i.get(M.depthTexture).__webglTexture,ee=Be(M);if(M.depthTexture.format===Us)Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(M.depthTexture.format===Ks)Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ie(R){const M=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=Z}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ce(M.__webglFramebuffer,R)}else if(k){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=t.createRenderbuffer(),he(M.__webglDepthbuffer[Z],R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,K)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),he(M.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(R,M,k){const Z=i.get(R);M!==void 0&&ne(Z.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Ie(R)}function Ve(R){const M=R.texture,k=i.get(R),Z=i.get(M);R.addEventListener("dispose",C);const ee=R.textures,K=R.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=M.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[le]=[];for(let ge=0;ge<M.mipmaps.length;ge++)k.__webglFramebuffer[le][ge]=t.createFramebuffer()}else k.__webglFramebuffer[le]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)k.__webglFramebuffer[le]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(Se)for(let le=0,ge=ee.length;le<ge;le++){const Ye=i.get(ee[le]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Xe(R)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const ge=ee[le];k.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[le]);const Ye=s.convert(ge.format,ge.colorSpace),re=s.convert(ge.type),_e=_(ge.internalFormat,Ye,re,ge.colorSpace,R.isXRRenderTarget===!0),be=Be(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,_e,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,k.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),he(k.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),ie(t.TEXTURE_CUBE_MAP,M);for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)ne(k.__webglFramebuffer[le][ge],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge);else ne(k.__webglFramebuffer[le],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let le=0,ge=ee.length;le<ge;le++){const Ye=ee[le],re=i.get(Ye);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ie(t.TEXTURE_2D,Ye),ne(k.__webglFramebuffer,R,Ye,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),m(Ye)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,Z.__webglTexture),ie(le,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)ne(k.__webglFramebuffer[ge],R,M,t.COLOR_ATTACHMENT0,le,ge);else ne(k.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,le,0);m(M)&&u(le),n.unbindTexture()}R.depthBuffer&&Ie(R)}function tt(R){const M=R.textures;for(let k=0,Z=M.length;k<Z;k++){const ee=M[k];if(m(ee)){const K=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get(ee).__webglTexture;n.bindTexture(K,Se),u(K),n.unbindTexture()}}}const Ge=[],I=[];function gn(R){if(R.samples>0){if(Xe(R)===!1){const M=R.textures,k=R.width,Z=R.height;let ee=t.COLOR_BUFFER_BIT;const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(R),le=M.length>1;if(le)for(let ge=0;ge<M.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const Ye=i.get(M[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ye,0)}t.blitFramebuffer(0,0,k,Z,0,0,k,Z,ee,t.NEAREST),l===!0&&(Ge.length=0,I.length=0,Ge.push(t.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ge.push(K),I.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,I)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ge))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let ge=0;ge<M.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const Ye=i.get(M[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Be(R){return Math.min(r.maxSamples,R.samples)}function Xe(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Pe(R){const M=o.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function ct(R,M){const k=R.colorSpace,Z=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==mr&&k!==qi&&(Qe.getTransfer(k)===ht?(Z!==Qn||ee!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function De(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=E,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=G,this.setTextureCube=$,this.rebindTextures=Ce,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Xe}function qA(t,e){function n(i,r=qi){let s;const o=Qe.getTransfer(r);if(i===Di)return t.UNSIGNED_BYTE;if(i===If)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Nf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===rv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===nv)return t.BYTE;if(i===iv)return t.SHORT;if(i===aa)return t.UNSIGNED_SHORT;if(i===Df)return t.INT;if(i===jr)return t.UNSIGNED_INT;if(i===Ti)return t.FLOAT;if(i===pa)return t.HALF_FLOAT;if(i===sv)return t.ALPHA;if(i===ov)return t.RGB;if(i===Qn)return t.RGBA;if(i===av)return t.LUMINANCE;if(i===lv)return t.LUMINANCE_ALPHA;if(i===Us)return t.DEPTH_COMPONENT;if(i===Ks)return t.DEPTH_STENCIL;if(i===cv)return t.RED;if(i===Uf)return t.RED_INTEGER;if(i===uv)return t.RG;if(i===Ff)return t.RG_INTEGER;if(i===Of)return t.RGBA_INTEGER;if(i===Ml||i===El||i===wl||i===Tl)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lh||i===ch||i===uh||i===dh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===lh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ch)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===uh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hh||i===fh||i===ph)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===hh||i===fh)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ph)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===mh||i===gh||i===_h||i===vh||i===xh||i===yh||i===Sh||i===Mh||i===Eh||i===wh||i===Th||i===Ah||i===Ch||i===Rh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===mh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_h)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Eh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Th)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ah)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ch)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Al||i===Ph||i===bh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Al)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ph)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dv||i===Lh||i===Dh||i===Ih)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Al)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Lh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ih)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$s?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class $A extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jn extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KA={type:"move"};class ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),u=this._getHandJoint(c,g);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=d.position.distanceTo(f.position),h=.02,x=.005;c.inputState.pinching&&p>h+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=h-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Jn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ZA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new en,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new dr({vertexShader:ZA,fragmentShader:QA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ae(new io(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eC extends $r{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,p=null,h=null,x=null;const g=new JA,m=n.getContextAttributes();let u=null,_=null;const v=[],S=[],P=new Ae;let C=null;const A=new un;A.layers.enable(1),A.viewport=new rt;const b=new un;b.layers.enable(2),b.viewport=new rt;const V=[A,b],y=new $A;y.layers.enable(1),y.layers.enable(2);let E=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=v[X];return ne===void 0&&(ne=new ju,v[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=v[X];return ne===void 0&&(ne=new ju,v[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=v[X];return ne===void 0&&(ne=new ju,v[X]=ne),ne.getHandSpace()};function B(X){const ne=S.indexOf(X.inputSource);if(ne===-1)return;const he=v[ne];he!==void 0&&(he.update(X.inputSource,X.frame,c||o),he.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",q);for(let X=0;X<v.length;X++){const ne=S[X];ne!==null&&(S[X]=null,v[X].disconnect(ne))}E=null,O=null,g.reset(),e.setRenderTarget(u),h=null,p=null,f=null,r=null,_=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",W),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),_=new Xr(h.framebufferWidth,h.framebufferHeight,{format:Qn,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,he=null,ce=null;m.depth&&(ce=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?Ks:Us,he=m.stencil?$s:jr);const Ie={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};f=new XRWebGLBinding(r,n),p=f.createProjectionLayer(Ie),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),_=new Xr(p.textureWidth,p.textureHeight,{format:Qn,type:Di,depthTexture:new Tv(p.textureWidth,p.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(X){for(let ne=0;ne<X.removed.length;ne++){const he=X.removed[ne],ce=S.indexOf(he);ce>=0&&(S[ce]=null,v[ce].disconnect(he))}for(let ne=0;ne<X.added.length;ne++){const he=X.added[ne];let ce=S.indexOf(he);if(ce===-1){for(let Ce=0;Ce<v.length;Ce++)if(Ce>=S.length){S.push(he),ce=Ce;break}else if(S[Ce]===null){S[Ce]=he,ce=Ce;break}if(ce===-1)break}const Ie=v[ce];Ie&&Ie.connect(he)}}const G=new L,$=new L;function D(X,ne,he){G.setFromMatrixPosition(ne.matrixWorld),$.setFromMatrixPosition(he.matrixWorld);const ce=G.distanceTo($),Ie=ne.projectionMatrix.elements,Ce=he.projectionMatrix.elements,Ve=Ie[14]/(Ie[10]-1),tt=Ie[14]/(Ie[10]+1),Ge=(Ie[9]+1)/Ie[5],I=(Ie[9]-1)/Ie[5],gn=(Ie[8]-1)/Ie[0],Be=(Ce[8]+1)/Ce[0],Xe=Ve*gn,Pe=Ve*Be,ct=ce/(-gn+Be),De=ct*-gn;if(ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(De),X.translateZ(ct),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ie[10]===-1)X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const R=Ve+ct,M=tt+ct,k=Xe-De,Z=Pe+(ce-De),ee=Ge*tt/M*R,K=I*tt/M*R;X.projectionMatrix.makePerspective(k,Z,ee,K,R,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Y(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ne=X.near,he=X.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(he=g.depthFar)),y.near=b.near=A.near=ne,y.far=b.far=A.far=he,(E!==y.near||O!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,O=y.far);const ce=X.parent,Ie=y.cameras;Y(y,ce);for(let Ce=0;Ce<Ie.length;Ce++)Y(Ie[Ce],ce);Ie.length===2?D(y,A,b):y.projectionMatrix.copy(A.projectionMatrix),Q(X,y,ce)};function Q(X,ne,he){he===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(he.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=sc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&h===null))return l},this.setFoveation=function(X){l=X,p!==null&&(p.fixedFoveation=X),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let ie=null;function Ee(X,ne){if(d=ne.getViewerPose(c||o),x=ne,d!==null){const he=d.views;h!==null&&(e.setRenderTargetFramebuffer(_,h.framebuffer),e.setRenderTarget(_));let ce=!1;he.length!==y.cameras.length&&(y.cameras.length=0,ce=!0);for(let Ce=0;Ce<he.length;Ce++){const Ve=he[Ce];let tt=null;if(h!==null)tt=h.getViewport(Ve);else{const I=f.getViewSubImage(p,Ve);tt=I.viewport,Ce===0&&(e.setRenderTargetTextures(_,I.colorTexture,p.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(_))}let Ge=V[Ce];Ge===void 0&&(Ge=new un,Ge.layers.enable(Ce),Ge.viewport=new rt,V[Ce]=Ge),Ge.matrix.fromArray(Ve.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ve.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(tt.x,tt.y,tt.width,tt.height),Ce===0&&(y.matrix.copy(Ge.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ce===!0&&y.cameras.push(Ge)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Ce=f.getDepthInformation(he[0]);Ce&&Ce.isValid&&Ce.texture&&g.init(e,Ce,r.renderState)}}for(let he=0;he<v.length;he++){const ce=S[he],Ie=v[he];ce!==null&&Ie!==void 0&&Ie.update(ce,ne,c||o)}ie&&ie(X,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),x=null}const ze=new Ev;ze.setAnimationLoop(Ee),this.setAnimationLoop=function(X){ie=X},this.dispose=function(){}}}const Mr=new ii,tC=new ot;function nC(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,yv(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,v,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),p(m,u),u.isMeshPhysicalMaterial&&h(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),x(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),g(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,_,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===mn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===mn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=e.get(u),v=_.envMap,S=_.envMapRotation;v&&(m.envMap.value=v,Mr.copy(S),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),m.envMapRotation.value.setFromMatrix4(tC.makeRotationFromEuler(Mr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function h(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===mn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function g(m,u){const _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function c(_,v){let S=r[_.id];S===void 0&&(x(_),S=d(_),r[_.id]=S,_.addEventListener("dispose",m));const P=v.program;i.updateUBOMapping(_,P);const C=e.render.frame;s[_.id]!==C&&(p(_),s[_.id]=C)}function d(_){const v=f();_.__bindingPointIndex=v;const S=t.createBuffer(),P=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){const v=r[_.id],S=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,A=S.length;C<A;C++){const b=Array.isArray(S[C])?S[C]:[S[C]];for(let V=0,y=b.length;V<y;V++){const E=b[V];if(h(E,C,V,P)===!0){const O=E.__offset,B=Array.isArray(E.value)?E.value:[E.value];let W=0;for(let q=0;q<B.length;q++){const G=B[q],$=g(G);typeof G=="number"||typeof G=="boolean"?(E.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,O+W,E.__data)):G.isMatrix3?(E.__data[0]=G.elements[0],E.__data[1]=G.elements[1],E.__data[2]=G.elements[2],E.__data[3]=0,E.__data[4]=G.elements[3],E.__data[5]=G.elements[4],E.__data[6]=G.elements[5],E.__data[7]=0,E.__data[8]=G.elements[6],E.__data[9]=G.elements[7],E.__data[10]=G.elements[8],E.__data[11]=0):(G.toArray(E.__data,W),W+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(_,v,S,P){const C=_.value,A=v+"_"+S;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const b=P[A];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return P[A]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function x(_){const v=_.uniforms;let S=0;const P=16;for(let A=0,b=v.length;A<b;A++){const V=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,E=V.length;y<E;y++){const O=V[y],B=Array.isArray(O.value)?O.value:[O.value];for(let W=0,q=B.length;W<q;W++){const G=B[W],$=g(G),D=S%P,Y=D%$.boundary,Q=D+Y;S+=Y,Q!==0&&P-Q<$.storage&&(S+=P-Q),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=$.storage}}}const C=S%P;return C>0&&(S+=P-C),_.__size=S,_.__cache={},this}function g(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class rC{constructor(e={}){const{canvas:n=jM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const h=new Uint32Array(4),x=new Int32Array(4);let g=null,m=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=In,this.toneMapping=or,this.toneMappingExposure=1;const v=this;let S=!1,P=0,C=0,A=null,b=-1,V=null;const y=new rt,E=new rt;let O=null;const B=new Oe(0);let W=0,q=n.width,G=n.height,$=1,D=null,Y=null;const Q=new rt(0,0,q,G),ie=new rt(0,0,q,G);let Ee=!1;const ze=new Bf;let X=!1,ne=!1;const he=new ot,ce=new ot,Ie=new L,Ce=new rt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Ge(){return A===null?$:1}let I=i;function gn(w,U){return n.getContext(w,U)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lf}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",pe,!1),I===null){const U="webgl2";if(I=gn(U,w),I===null)throw gn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Be,Xe,Pe,ct,De,R,M,k,Z,ee,K,Se,le,ge,Ye,re,_e,be,Le,ve,He,Ne,at,N;function fe(){Be=new cT(I),Be.init(),Ne=new qA(I,Be),Xe=new iT(I,Be,e,Ne),Pe=new jA(I),Xe.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),ct=new hT(I),De=new bA,R=new YA(I,Be,Pe,De,Xe,Ne,ct),M=new sT(v),k=new lT(v),Z=new xE(I),at=new tT(I,Z),ee=new uT(I,Z,ct,at),K=new pT(I,ee,Z,ct),Le=new fT(I,Xe,R),re=new rT(De),Se=new PA(v,M,k,Be,Xe,at,re),le=new nC(v,De),ge=new DA,Ye=new kA(Be),be=new eT(v,M,k,Pe,K,p,l),_e=new GA(v,K,Xe),N=new iC(I,ct,Xe,Pe),ve=new nT(I,Be,ct),He=new dT(I,Be,ct),ct.programs=Se.programs,v.capabilities=Xe,v.extensions=Be,v.properties=De,v.renderLists=ge,v.shadowMap=_e,v.state=Pe,v.info=ct}fe();const j=new eC(v,I);this.xr=j,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(q,G,!1))},this.getSize=function(w){return w.set(q,G)},this.setSize=function(w,U,z=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,G=U,n.width=Math.floor(w*$),n.height=Math.floor(U*$),z===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(q*$,G*$).floor()},this.setDrawingBufferSize=function(w,U,z){q=w,G=U,$=z,n.width=Math.floor(w*z),n.height=Math.floor(U*z),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(Q)},this.setViewport=function(w,U,z,H){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,U,z,H),Pe.viewport(y.copy(Q).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(ie)},this.setScissor=function(w,U,z,H){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,U,z,H),Pe.scissor(E.copy(ie).multiplyScalar($).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(w){Pe.setScissorTest(Ee=w)},this.setOpaqueSort=function(w){D=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(w=!0,U=!0,z=!0){let H=0;if(w){let F=!1;if(A!==null){const se=A.texture.format;F=se===Of||se===Ff||se===Uf}if(F){const se=A.texture.type,de=se===Di||se===jr||se===aa||se===$s||se===If||se===Nf,xe=be.getClearColor(),ye=be.getClearAlpha(),Te=xe.r,Re=xe.g,Me=xe.b;de?(h[0]=Te,h[1]=Re,h[2]=Me,h[3]=ye,I.clearBufferuiv(I.COLOR,0,h)):(x[0]=Te,x[1]=Re,x[2]=Me,x[3]=ye,I.clearBufferiv(I.COLOR,0,x))}else H|=I.COLOR_BUFFER_BIT}U&&(H|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),ge.dispose(),Ye.dispose(),De.dispose(),M.dispose(),k.dispose(),K.dispose(),at.dispose(),N.dispose(),Se.dispose(),j.dispose(),j.removeEventListener("sessionstart",Kf),j.removeEventListener("sessionend",Zf),gr.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=ct.autoReset,U=_e.enabled,z=_e.autoUpdate,H=_e.needsUpdate,F=_e.type;fe(),ct.autoReset=w,_e.enabled=U,_e.autoUpdate=z,_e.needsUpdate=H,_e.type=F}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function We(w){const U=w.target;U.removeEventListener("dispose",We),At(U)}function At(w){sn(w),De.remove(w)}function sn(w){const U=De.get(w).programs;U!==void 0&&(U.forEach(function(z){Se.releaseProgram(z)}),w.isShaderMaterial&&Se.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,z,H,F,se){U===null&&(U=Ve);const de=F.isMesh&&F.matrixWorld.determinant()<0,xe=Hv(w,U,z,H,F);Pe.setMaterial(H,de);let ye=z.index,Te=1;if(H.wireframe===!0){if(ye=ee.getWireframeAttribute(z),ye===void 0)return;Te=2}const Re=z.drawRange,Me=z.attributes.position;let Je=Re.start*Te,ut=(Re.start+Re.count)*Te;se!==null&&(Je=Math.max(Je,se.start*Te),ut=Math.min(ut,(se.start+se.count)*Te)),ye!==null?(Je=Math.max(Je,0),ut=Math.min(ut,ye.count)):Me!=null&&(Je=Math.max(Je,0),ut=Math.min(ut,Me.count));const Mt=ut-Je;if(Mt<0||Mt===1/0)return;at.setup(F,H,xe,z,ye);let _n,Ke=ve;if(ye!==null&&(_n=Z.get(ye),Ke=He,Ke.setIndex(_n)),F.isMesh)H.wireframe===!0?(Pe.setLineWidth(H.wireframeLinewidth*Ge()),Ke.setMode(I.LINES)):Ke.setMode(I.TRIANGLES);else if(F.isLine){let we=H.linewidth;we===void 0&&(we=1),Pe.setLineWidth(we*Ge()),F.isLineSegments?Ke.setMode(I.LINES):F.isLineLoop?Ke.setMode(I.LINE_LOOP):Ke.setMode(I.LINE_STRIP)}else F.isPoints?Ke.setMode(I.POINTS):F.isSprite&&Ke.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ke.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))Ke.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const we=F._multiDrawStarts,zt=F._multiDrawCounts,Ze=F._multiDrawCount,Hn=ye?Z.get(ye).bytesPerElement:1,Kr=De.get(H).currentProgram.getUniforms();for(let vn=0;vn<Ze;vn++)Kr.setValue(I,"_gl_DrawID",vn),Ke.render(we[vn]/Hn,zt[vn])}else if(F.isInstancedMesh)Ke.renderInstances(Je,Mt,F.count);else if(z.isInstancedBufferGeometry){const we=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,zt=Math.min(z.instanceCount,we);Ke.renderInstances(Je,Mt,zt)}else Ke.render(Je,Mt)};function qe(w,U,z){w.transparent===!0&&w.side===Kn&&w.forceSinglePass===!1?(w.side=mn,w.needsUpdate=!0,xa(w,U,z),w.side=ur,w.needsUpdate=!0,xa(w,U,z),w.side=Kn):xa(w,U,z)}this.compile=function(w,U,z=null){z===null&&(z=w),m=Ye.get(z),m.init(U),_.push(m),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),w!==z&&w.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const H=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const se=F.material;if(se)if(Array.isArray(se))for(let de=0;de<se.length;de++){const xe=se[de];qe(xe,z,F),H.add(xe)}else qe(se,z,F),H.add(se)}),_.pop(),m=null,H},this.compileAsync=function(w,U,z=null){const H=this.compile(w,U,z);return new Promise(F=>{function se(){if(H.forEach(function(de){De.get(de).currentProgram.isReady()&&H.delete(de)}),H.size===0){F(w);return}setTimeout(se,10)}Be.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let on=null;function fi(w){on&&on(w)}function Kf(){gr.stop()}function Zf(){gr.start()}const gr=new Ev;gr.setAnimationLoop(fi),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(w){on=w,j.setAnimationLoop(w),w===null?gr.stop():gr.start()},j.addEventListener("sessionstart",Kf),j.addEventListener("sessionend",Zf),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(U),U=j.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,A),m=Ye.get(w,_.length),m.init(U),_.push(m),ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ze.setFromProjectionMatrix(ce),ne=this.localClippingEnabled,X=re.init(this.clippingPlanes,ne),g=ge.get(w,u.length),g.init(),u.push(g),j.enabled===!0&&j.isPresenting===!0){const se=v.xr.getDepthSensingMesh();se!==null&&kc(se,U,-1/0,v.sortObjects)}kc(w,U,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(D,Y),tt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,tt&&be.addToRenderList(g,w),this.info.render.frame++,X===!0&&re.beginShadows();const z=m.state.shadowsArray;_e.render(z,w,U),X===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,F=g.transmissive;if(m.setupLights(),U.isArrayCamera){const se=U.cameras;if(F.length>0)for(let de=0,xe=se.length;de<xe;de++){const ye=se[de];Jf(H,F,w,ye)}tt&&be.render(w);for(let de=0,xe=se.length;de<xe;de++){const ye=se[de];Qf(g,w,ye,ye.viewport)}}else F.length>0&&Jf(H,F,w,U),tt&&be.render(w),Qf(g,w,U);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,U),at.resetDefaultState(),b=-1,V=null,_.pop(),_.length>0?(m=_[_.length-1],X===!0&&re.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function kc(w,U,z,H){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ze.intersectsSprite(w)){H&&Ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ce);const de=K.update(w),xe=w.material;xe.visible&&g.push(w,de,xe,z,Ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ze.intersectsObject(w))){const de=K.update(w),xe=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ce.copy(w.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ce.copy(de.boundingSphere.center)),Ce.applyMatrix4(w.matrixWorld).applyMatrix4(ce)),Array.isArray(xe)){const ye=de.groups;for(let Te=0,Re=ye.length;Te<Re;Te++){const Me=ye[Te],Je=xe[Me.materialIndex];Je&&Je.visible&&g.push(w,de,Je,z,Ce.z,Me)}}else xe.visible&&g.push(w,de,xe,z,Ce.z,null)}}const se=w.children;for(let de=0,xe=se.length;de<xe;de++)kc(se[de],U,z,H)}function Qf(w,U,z,H){const F=w.opaque,se=w.transmissive,de=w.transparent;m.setupLightsView(z),X===!0&&re.setGlobalState(v.clippingPlanes,z),H&&Pe.viewport(y.copy(H)),F.length>0&&va(F,U,z),se.length>0&&va(se,U,z),de.length>0&&va(de,U,z),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Jf(w,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Xr(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?pa:Di,minFilter:Fr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const se=m.state.transmissionRenderTarget[H.id],de=H.viewport||y;se.setSize(de.z,de.w);const xe=v.getRenderTarget();v.setRenderTarget(se),v.getClearColor(B),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),tt&&be.render(z);const ye=v.toneMapping;v.toneMapping=or;const Te=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),X===!0&&re.setGlobalState(v.clippingPlanes,H),va(w,z,H),R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Me=0,Je=U.length;Me<Je;Me++){const ut=U[Me],Mt=ut.object,_n=ut.geometry,Ke=ut.material,we=ut.group;if(Ke.side===Kn&&Mt.layers.test(H.layers)){const zt=Ke.side;Ke.side=mn,Ke.needsUpdate=!0,ep(Mt,z,H,_n,Ke,we),Ke.side=zt,Ke.needsUpdate=!0,Re=!0}}Re===!0&&(R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se))}v.setRenderTarget(xe),v.setClearColor(B,W),Te!==void 0&&(H.viewport=Te),v.toneMapping=ye}function va(w,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let F=0,se=w.length;F<se;F++){const de=w[F],xe=de.object,ye=de.geometry,Te=H===null?de.material:H,Re=de.group;xe.layers.test(z.layers)&&ep(xe,U,z,ye,Te,Re)}}function ep(w,U,z,H,F,se){w.onBeforeRender(v,U,z,H,F,se),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(v,U,z,H,w,se),F.transparent===!0&&F.side===Kn&&F.forceSinglePass===!1?(F.side=mn,F.needsUpdate=!0,v.renderBufferDirect(z,U,H,F,w,se),F.side=ur,F.needsUpdate=!0,v.renderBufferDirect(z,U,H,F,w,se),F.side=Kn):v.renderBufferDirect(z,U,H,F,w,se),w.onAfterRender(v,U,z,H,F,se)}function xa(w,U,z){U.isScene!==!0&&(U=Ve);const H=De.get(w),F=m.state.lights,se=m.state.shadowsArray,de=F.state.version,xe=Se.getParameters(w,F.state,se,U,z),ye=Se.getProgramCacheKey(xe);let Te=H.programs;H.environment=w.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(w.isMeshStandardMaterial?k:M).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Te===void 0&&(w.addEventListener("dispose",We),Te=new Map,H.programs=Te);let Re=Te.get(ye);if(Re!==void 0){if(H.currentProgram===Re&&H.lightsStateVersion===de)return np(w,xe),Re}else xe.uniforms=Se.getUniforms(w),w.onBeforeCompile(xe,v),Re=Se.acquireProgram(xe,ye),Te.set(ye,Re),H.uniforms=xe.uniforms;const Me=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Me.clippingPlanes=re.uniform),np(w,xe),H.needsLights=Gv(w),H.lightsStateVersion=de,H.needsLights&&(Me.ambientLightColor.value=F.state.ambient,Me.lightProbe.value=F.state.probe,Me.directionalLights.value=F.state.directional,Me.directionalLightShadows.value=F.state.directionalShadow,Me.spotLights.value=F.state.spot,Me.spotLightShadows.value=F.state.spotShadow,Me.rectAreaLights.value=F.state.rectArea,Me.ltc_1.value=F.state.rectAreaLTC1,Me.ltc_2.value=F.state.rectAreaLTC2,Me.pointLights.value=F.state.point,Me.pointLightShadows.value=F.state.pointShadow,Me.hemisphereLights.value=F.state.hemi,Me.directionalShadowMap.value=F.state.directionalShadowMap,Me.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Me.spotShadowMap.value=F.state.spotShadowMap,Me.spotLightMatrix.value=F.state.spotLightMatrix,Me.spotLightMap.value=F.state.spotLightMap,Me.pointShadowMap.value=F.state.pointShadowMap,Me.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Re,H.uniformsList=null,Re}function tp(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Pl.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function np(w,U){const z=De.get(w);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Hv(w,U,z,H,F){U.isScene!==!0&&(U=Ve),R.resetTextureUnits();const se=U.fog,de=H.isMeshStandardMaterial?U.environment:null,xe=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:mr,ye=(H.isMeshStandardMaterial?k:M).get(H.envMap||de),Te=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Re=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Me=!!z.morphAttributes.position,Je=!!z.morphAttributes.normal,ut=!!z.morphAttributes.color;let Mt=or;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Mt=v.toneMapping);const _n=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ke=_n!==void 0?_n.length:0,we=De.get(H),zt=m.state.lights;if(X===!0&&(ne===!0||w!==V)){const bn=w===V&&H.id===b;re.setState(H,w,bn)}let Ze=!1;H.version===we.__version?(we.needsLights&&we.lightsStateVersion!==zt.state.version||we.outputColorSpace!==xe||F.isBatchedMesh&&we.batching===!1||!F.isBatchedMesh&&we.batching===!0||F.isBatchedMesh&&we.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&we.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&we.instancing===!1||!F.isInstancedMesh&&we.instancing===!0||F.isSkinnedMesh&&we.skinning===!1||!F.isSkinnedMesh&&we.skinning===!0||F.isInstancedMesh&&we.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&we.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&we.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&we.instancingMorph===!1&&F.morphTexture!==null||we.envMap!==ye||H.fog===!0&&we.fog!==se||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==re.numPlanes||we.numIntersection!==re.numIntersection)||we.vertexAlphas!==Te||we.vertexTangents!==Re||we.morphTargets!==Me||we.morphNormals!==Je||we.morphColors!==ut||we.toneMapping!==Mt||we.morphTargetsCount!==Ke)&&(Ze=!0):(Ze=!0,we.__version=H.version);let Hn=we.currentProgram;Ze===!0&&(Hn=xa(H,U,F));let Kr=!1,vn=!1,zc=!1;const wt=Hn.getUniforms(),Ni=we.uniforms;if(Pe.useProgram(Hn.program)&&(Kr=!0,vn=!0,zc=!0),H.id!==b&&(b=H.id,vn=!0),Kr||V!==w){Xe.reverseDepthBuffer?(he.copy(w.projectionMatrix),YM(he),qM(he),wt.setValue(I,"projectionMatrix",he)):wt.setValue(I,"projectionMatrix",w.projectionMatrix),wt.setValue(I,"viewMatrix",w.matrixWorldInverse);const bn=wt.map.cameraPosition;bn!==void 0&&bn.setValue(I,Ie.setFromMatrixPosition(w.matrixWorld)),Xe.logarithmicDepthBuffer&&wt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&wt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),V!==w&&(V=w,vn=!0,zc=!0)}if(F.isSkinnedMesh){wt.setOptional(I,F,"bindMatrix"),wt.setOptional(I,F,"bindMatrixInverse");const bn=F.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),wt.setValue(I,"boneTexture",bn.boneTexture,R))}F.isBatchedMesh&&(wt.setOptional(I,F,"batchingTexture"),wt.setValue(I,"batchingTexture",F._matricesTexture,R),wt.setOptional(I,F,"batchingIdTexture"),wt.setValue(I,"batchingIdTexture",F._indirectTexture,R),wt.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&wt.setValue(I,"batchingColorTexture",F._colorsTexture,R));const Bc=z.morphAttributes;if((Bc.position!==void 0||Bc.normal!==void 0||Bc.color!==void 0)&&Le.update(F,z,Hn),(vn||we.receiveShadow!==F.receiveShadow)&&(we.receiveShadow=F.receiveShadow,wt.setValue(I,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ni.envMap.value=ye,Ni.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Ni.envMapIntensity.value=U.environmentIntensity),vn&&(wt.setValue(I,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&Vv(Ni,zc),se&&H.fog===!0&&le.refreshFogUniforms(Ni,se),le.refreshMaterialUniforms(Ni,H,$,G,m.state.transmissionRenderTarget[w.id]),Pl.upload(I,tp(we),Ni,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Pl.upload(I,tp(we),Ni,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&wt.setValue(I,"center",F.center),wt.setValue(I,"modelViewMatrix",F.modelViewMatrix),wt.setValue(I,"normalMatrix",F.normalMatrix),wt.setValue(I,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const bn=H.uniformsGroups;for(let Hc=0,Wv=bn.length;Hc<Wv;Hc++){const ip=bn[Hc];N.update(ip,Hn),N.bind(ip,Hn)}}return Hn}function Vv(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Gv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,U,z){De.get(w.texture).__webglTexture=U,De.get(w.depthTexture).__webglTexture=z;const H=De.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const z=De.get(w);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,z=0){A=w,P=U,C=z;let H=!0,F=null,se=!1,de=!1;if(w){const ye=De.get(w);if(ye.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(I.FRAMEBUFFER,null),H=!1;else if(ye.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(ye.__hasExternalTextures)R.rebindTextures(w,De.get(w.texture).__webglTexture,De.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Me=w.depthTexture;if(ye.__boundDepthTexture!==Me){if(Me!==null&&De.has(Me)&&(w.width!==Me.image.width||w.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Te=w.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(de=!0);const Re=De.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?F=Re[U][z]:F=Re[U],se=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?F=De.get(w).__webglMultisampledFramebuffer:Array.isArray(Re)?F=Re[z]:F=Re,y.copy(w.viewport),E.copy(w.scissor),O=w.scissorTest}else y.copy(Q).multiplyScalar($).floor(),E.copy(ie).multiplyScalar($).floor(),O=Ee;if(Pe.bindFramebuffer(I.FRAMEBUFFER,F)&&H&&Pe.drawBuffers(w,F),Pe.viewport(y),Pe.scissor(E),Pe.setScissorTest(O),se){const ye=De.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,z)}else if(de){const ye=De.get(w.texture),Te=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.__webglTexture,z||0,Te)}b=-1},this.readRenderTargetPixels=function(w,U,z,H,F,se,de){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(xe=xe[de]),xe){Pe.bindFramebuffer(I.FRAMEBUFFER,xe);try{const ye=w.texture,Te=ye.format,Re=ye.type;if(!Xe.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-H&&z>=0&&z<=w.height-F&&I.readPixels(U,z,H,F,Ne.convert(Te),Ne.convert(Re),se)}finally{const ye=A!==null?De.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(I.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(w,U,z,H,F,se,de){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(xe=xe[de]),xe){const ye=w.texture,Te=ye.format,Re=ye.type;if(!Xe.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-H&&z>=0&&z<=w.height-F){Pe.bindFramebuffer(I.FRAMEBUFFER,xe);const Me=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Me),I.bufferData(I.PIXEL_PACK_BUFFER,se.byteLength,I.STREAM_READ),I.readPixels(U,z,H,F,Ne.convert(Te),Ne.convert(Re),0);const Je=A!==null?De.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(I.FRAMEBUFFER,Je);const ut=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await XM(I,ut,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Me),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,se),I.deleteBuffer(Me),I.deleteSync(ut),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,z=0){w.isTexture!==!0&&(Rl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-z),F=Math.floor(w.image.width*H),se=Math.floor(w.image.height*H),de=U!==null?U.x:0,xe=U!==null?U.y:0;R.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,de,xe,F,se),Pe.unbindTexture()},this.copyTextureToTexture=function(w,U,z=null,H=null,F=0){w.isTexture!==!0&&(Rl("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],U=arguments[2],F=arguments[3]||0,z=null);let se,de,xe,ye,Te,Re;z!==null?(se=z.max.x-z.min.x,de=z.max.y-z.min.y,xe=z.min.x,ye=z.min.y):(se=w.image.width,de=w.image.height,xe=0,ye=0),H!==null?(Te=H.x,Re=H.y):(Te=0,Re=0);const Me=Ne.convert(U.format),Je=Ne.convert(U.type);R.setTexture2D(U,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const ut=I.getParameter(I.UNPACK_ROW_LENGTH),Mt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),_n=I.getParameter(I.UNPACK_SKIP_PIXELS),Ke=I.getParameter(I.UNPACK_SKIP_ROWS),we=I.getParameter(I.UNPACK_SKIP_IMAGES),zt=w.isCompressedTexture?w.mipmaps[F]:w.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,zt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,zt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,xe),I.pixelStorei(I.UNPACK_SKIP_ROWS,ye),w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,Te,Re,se,de,Me,Je,zt.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,Te,Re,zt.width,zt.height,Me,zt.data):I.texSubImage2D(I.TEXTURE_2D,F,Te,Re,se,de,Me,Je,zt),I.pixelStorei(I.UNPACK_ROW_LENGTH,ut),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_n),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ke),I.pixelStorei(I.UNPACK_SKIP_IMAGES,we),F===0&&U.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(w,U,z=null,H=null,F=0){w.isTexture!==!0&&(Rl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,w=arguments[2],U=arguments[3],F=arguments[4]||0);let se,de,xe,ye,Te,Re,Me,Je,ut;const Mt=w.isCompressedTexture?w.mipmaps[F]:w.image;z!==null?(se=z.max.x-z.min.x,de=z.max.y-z.min.y,xe=z.max.z-z.min.z,ye=z.min.x,Te=z.min.y,Re=z.min.z):(se=Mt.width,de=Mt.height,xe=Mt.depth,ye=0,Te=0,Re=0),H!==null?(Me=H.x,Je=H.y,ut=H.z):(Me=0,Je=0,ut=0);const _n=Ne.convert(U.format),Ke=Ne.convert(U.type);let we;if(U.isData3DTexture)R.setTexture3D(U,0),we=I.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),we=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const zt=I.getParameter(I.UNPACK_ROW_LENGTH),Ze=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Hn=I.getParameter(I.UNPACK_SKIP_PIXELS),Kr=I.getParameter(I.UNPACK_SKIP_ROWS),vn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Mt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ye),I.pixelStorei(I.UNPACK_SKIP_ROWS,Te),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Re),w.isDataTexture||w.isData3DTexture?I.texSubImage3D(we,F,Me,Je,ut,se,de,xe,_n,Ke,Mt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(we,F,Me,Je,ut,se,de,xe,_n,Mt.data):I.texSubImage3D(we,F,Me,Je,ut,se,de,xe,_n,Ke,Mt),I.pixelStorei(I.UNPACK_ROW_LENGTH,zt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ze),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Hn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Kr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,vn),F===0&&U.generateMipmaps&&I.generateMipmap(we),Pe.unbindTexture()},this.initRenderTarget=function(w){De.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Pe.unbindTexture()},this.resetState=function(){P=0,C=0,A=null,Pe.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===kf?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Pc?"display-p3":"srgb"}}class sC extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Vf extends to{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ac=new L,lc=new L,dg=new ot,yo=new Lc,rl=new bc,Xu=new L,hg=new L;class yi extends _t{constructor(e=new tn,n=new Vf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ac.fromBufferAttribute(n,r-1),lc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ac.distanceTo(lc);e.setAttribute("lineDistance",new pt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(r),rl.radius+=s,e.ray.intersectsSphere(rl)===!1)return;dg.copy(r).invert(),yo.copy(e.ray).applyMatrix4(dg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,p=i.attributes.position;if(d!==null){const h=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let g=h,m=x-1;g<m;g+=c){const u=d.getX(g),_=d.getX(g+1),v=sl(this,e,yo,l,u,_);v&&n.push(v)}if(this.isLineLoop){const g=d.getX(x-1),m=d.getX(h),u=sl(this,e,yo,l,g,m);u&&n.push(u)}}else{const h=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let g=h,m=x-1;g<m;g+=c){const u=sl(this,e,yo,l,g,g+1);u&&n.push(u)}if(this.isLineLoop){const g=sl(this,e,yo,l,x-1,h);g&&n.push(g)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function sl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(ac.fromBufferAttribute(o,r),lc.fromBufferAttribute(o,s),n.distanceSqToSegment(ac,lc,Xu,hg)>i)return;Xu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Xu);if(!(l<e.near||l>e.far))return{distance:l,point:hg.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const fg=new L,pg=new L;class oC extends yi{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)fg.fromBufferAttribute(n,r),pg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+fg.distanceTo(pg);e.setAttribute("lineDistance",new pt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class aC extends en{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ut extends tn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],p=[],h=[];let x=0;const g=[],m=i/2;let u=0;_(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(p,3)),this.setAttribute("uv",new pt(h,2));function _(){const S=new L,P=new L;let C=0;const A=(n-e)/i;for(let b=0;b<=s;b++){const V=[],y=b/s,E=y*(n-e)+e;for(let O=0;O<=r;O++){const B=O/r,W=B*l+a,q=Math.sin(W),G=Math.cos(W);P.x=E*q,P.y=-y*i+m,P.z=E*G,f.push(P.x,P.y,P.z),S.set(q,A,G).normalize(),p.push(S.x,S.y,S.z),h.push(B,1-y),V.push(x++)}g.push(V)}for(let b=0;b<r;b++)for(let V=0;V<s;V++){const y=g[V][b],E=g[V+1][b],O=g[V+1][b+1],B=g[V][b+1];e>0&&(d.push(y,E,B),C+=3),n>0&&(d.push(E,O,B),C+=3)}c.addGroup(u,C,0),u+=C}function v(S){const P=x,C=new Ae,A=new L;let b=0;const V=S===!0?e:n,y=S===!0?1:-1;for(let O=1;O<=r;O++)f.push(0,m*y,0),p.push(0,y,0),h.push(.5,.5),x++;const E=x;for(let O=0;O<=r;O++){const W=O/r*l+a,q=Math.cos(W),G=Math.sin(W);A.x=V*G,A.y=m*y,A.z=V*q,f.push(A.x,A.y,A.z),p.push(0,y,0),C.x=q*.5+.5,C.y=G*.5*y+.5,h.push(C.x,C.y),x++}for(let O=0;O<r;O++){const B=P+O,W=E+O;S===!0?d.push(W,W+1,B):d.push(W+1,W,B),b+=3}c.addGroup(u,b,S===!0?1:2),u+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ut(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cc extends Ut{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new cc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gf extends tn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new pt(s,3)),this.setAttribute("normal",new pt(s.slice(),3)),this.setAttribute("uv",new pt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const v=new L,S=new L,P=new L;for(let C=0;C<n.length;C+=3)h(n[C+0],v),h(n[C+1],S),h(n[C+2],P),l(v,S,P,_)}function l(_,v,S,P){const C=P+1,A=[];for(let b=0;b<=C;b++){A[b]=[];const V=_.clone().lerp(S,b/C),y=v.clone().lerp(S,b/C),E=C-b;for(let O=0;O<=E;O++)O===0&&b===C?A[b][O]=V:A[b][O]=V.clone().lerp(y,O/E)}for(let b=0;b<C;b++)for(let V=0;V<2*(C-b)-1;V++){const y=Math.floor(V/2);V%2===0?(p(A[b][y+1]),p(A[b+1][y]),p(A[b][y])):(p(A[b][y+1]),p(A[b+1][y+1]),p(A[b+1][y]))}}function c(_){const v=new L;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(_),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function d(){const _=new L;for(let v=0;v<s.length;v+=3){_.x=s[v+0],_.y=s[v+1],_.z=s[v+2];const S=m(_)/2/Math.PI+.5,P=u(_)/Math.PI+.5;o.push(S,1-P)}x(),f()}function f(){for(let _=0;_<o.length;_+=6){const v=o[_+0],S=o[_+2],P=o[_+4],C=Math.max(v,S,P),A=Math.min(v,S,P);C>.9&&A<.1&&(v<.2&&(o[_+0]+=1),S<.2&&(o[_+2]+=1),P<.2&&(o[_+4]+=1))}}function p(_){s.push(_.x,_.y,_.z)}function h(_,v){const S=_*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function x(){const _=new L,v=new L,S=new L,P=new L,C=new Ae,A=new Ae,b=new Ae;for(let V=0,y=0;V<s.length;V+=9,y+=6){_.set(s[V+0],s[V+1],s[V+2]),v.set(s[V+3],s[V+4],s[V+5]),S.set(s[V+6],s[V+7],s[V+8]),C.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),b.set(o[y+4],o[y+5]),P.copy(_).add(v).add(S).divideScalar(3);const E=m(P);g(C,y+0,_,E),g(A,y+2,v,E),g(b,y+4,S,E)}}function g(_,v,S,P){P<0&&_.x===1&&(o[v]=_.x-1),S.x===0&&S.z===0&&(o[v]=P/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function u(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gf(e.vertices,e.indices,e.radius,e.details)}}class As extends Gf{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new As(e.radius,e.detail)}}class Wf extends tn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new L,p=new L,h=[],x=[],g=[],m=[];for(let u=0;u<=i;u++){const _=[],v=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const C=P/n;f.x=-e*Math.cos(r+C*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+v*a),x.push(f.x,f.y,f.z),p.copy(f).normalize(),g.push(p.x,p.y,p.z),m.push(C+S,1-v),_.push(c++)}d.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){const v=d[u][_+1],S=d[u][_],P=d[u+1][_],C=d[u+1][_+1];(u!==0||o>0)&&h.push(v,S,C),(u!==i-1||l<Math.PI)&&h.push(S,P,C)}this.setIndex(h),this.setAttribute("position",new pt(x,3)),this.setAttribute("normal",new pt(g,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lr extends tn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new L,f=new L,p=new L;for(let h=0;h<=i;h++)for(let x=0;x<=r;x++){const g=x/r*s,m=h/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(g),f.y=(e+n*Math.cos(m))*Math.sin(g),f.z=n*Math.sin(m),a.push(f.x,f.y,f.z),d.x=e*Math.cos(g),d.y=e*Math.sin(g),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),c.push(x/r),c.push(h/i)}for(let h=1;h<=i;h++)for(let x=1;x<=r;x++){const g=(r+1)*h+x-1,m=(r+1)*(h-1)+x-1,u=(r+1)*(h-1)+x,_=(r+1)*h+x;o.push(g,m,_),o.push(m,u,_)}this.setIndex(o),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ar extends to{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hv,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ic extends _t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class bv extends Ic{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Yu=new ot,mg=new L,gg=new L;class jf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bf,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;mg.setFromMatrixPosition(e.matrixWorld),n.position.copy(mg),gg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(gg),n.updateMatrixWorld(),Yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lC extends jf{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=sc*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class cC extends Ic{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new lC}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const _g=new ot,So=new L,qu=new L;class uC extends jf{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),So.setFromMatrixPosition(e.matrixWorld),i.position.copy(So),qu.copy(i.position),qu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(qu),i.updateMatrixWorld(),r.makeTranslation(-So.x,-So.y,-So.z),_g.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_g)}}class dC extends Ic{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new uC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hC extends jf{constructor(){super(new wv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lv extends Ic{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new hC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=vg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function vg(){return performance.now()}const xg=new ot;class Dv{constructor(e,n,i=0,r=1/0){this.ray=new Lc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new zf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return xg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xg),this}intersectObject(e,n=!0,i=[]){return Uh(e,this,i,n),i.sort(yg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Uh(e[r],this,i,n);return i.sort(yg),i}}function yg(t,e){return t.distance-e.distance}function Uh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Uh(s[o],e,n,!0)}}class Sg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Qt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class pC extends oC{constructor(e=10,n=10,i=4473924,r=8947848){i=new Oe(i),r=new Oe(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let p=0,h=0,x=-a;p<=n;p++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const g=p===s?i:r;g.toArray(c,h),h+=3,g.toArray(c,h),h+=3,g.toArray(c,h),h+=3,g.toArray(c,h),h+=3}const d=new tn;d.setAttribute("position",new pt(l,3)),d.setAttribute("color",new pt(c,3));const f=new Vf({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Iv extends $r{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lf);const mC=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],gC=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],$u=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],Po=(t,e,n)=>Math.min(n,Math.max(e,t)),uc=t=>t*Math.PI/180,Ku=(t,e,n)=>t+(e-t)*n;function _C(t){const e=Po(t,1e3,12e3)/100;let n,i,r;return e<=66?(n=255,i=99.4708025861*Math.log(e)-161.1195681661,r=e<=19?0:138.5177312231*Math.log(e-10)-305.0447927307):(n=329.698727446*Math.pow(e-60,-.1332047592),i=288.1221695283*Math.pow(e-60,-.0755148492),r=255),[Po(n,0,255)/255,Po(i,0,255)/255,Po(r,0,255)/255]}const Cr=[[0,[12,24,96]],[5,[24,88,188]],[20,[28,178,200]],[50,[48,196,96]],[100,[188,214,52]],[200,[244,176,32]],[400,[232,84,24]],[800,[200,20,20]]];function Nv(t){const e=Math.log10(Math.max(t,.5)+1),n=Cr.map(([r])=>Math.log10(r+1));for(let r=0;r<Cr.length-1;r++)if(e<=n[r+1]){const s=Po((e-n[r])/(n[r+1]-n[r]),0,1),o=Cr[r][1],a=Cr[r+1][1];return[Math.round(Ku(o[0],a[0],s)),Math.round(Ku(o[1],a[1],s)),Math.round(Ku(o[2],a[2],s))]}const i=Cr[Cr.length-1][1];return[i[0],i[1],i[2]]}const vC=Cr.map(([t])=>t),Os={wall:10134445,glass:1452092,trim:13159634,ground:790292};function xC(t,e,n){return new vt(t,e,n)}function Uv(t,e,n){const i=xC(t.width,t.height,e),r=new ae(i,n);return r.position.set(t.center[0],t.center[1],t.center[2]+e/2),t.normal[0]!==0&&(r.rotation.y=t.normal[0]>0?-Math.PI/2:Math.PI/2,r.position.set(t.center[0],t.center[1],t.center[2])),r.userData.patchId=t.id,r}function Xf(t){const e=new Jn,n=new ar({color:Os.wall,roughness:.85,metalness:.05}),i=new ar({color:Os.glass,roughness:.15,metalness:.4,transparent:!0,opacity:.92}),r=new ar({color:Os.trim,roughness:.5,metalness:.3}),s={wall:n,glass:i,trim:r};for(const o of t.patches){const a=o.material==="glass"?.04:.12;e.add(Uv(o,a,s[o.material]))}return e}function yC(t,e){const{cols:n,rows:i}=t,r=document.createElement("canvas");r.width=n,r.height=i;const s=r.getContext("2d"),o=s.createImageData(n,i);for(let l=0;l<i;l++)for(let c=0;c<n;c++){const d=l*n+c,f=e&&t.patch.material==="glass"?t.reflected[d]:t.lux[d],[p,h,x]=Nv(f),g=((i-1-l)*n+c)*4;o.data[g]=p,o.data[g+1]=h,o.data[g+2]=x,o.data[g+3]=255}s.putImageData(o,0,0);const a=new aC(r);return a.magFilter=Tn,a.minFilter=Fn,a.colorSpace=In,a}function SC(t,e,n){const i=new Jn;for(const r of t.patches){const s=e.get(r.id);let o;if(r.material==="glass"&&!n)o=new ar({color:Os.glass,roughness:.2,metalness:.4,transparent:!0,opacity:.85});else if(s){const a=yC(s,n);o=new no({map:a})}else o=new ar({color:Os.wall});i.add(Uv(r,.1,o))}return i}const Mg={type:"change"},Yf={type:"start"},Fv={type:"end"},ol=new Lc,Eg=new ji,MC=Math.cos(70*WM.DEG2RAD),Pt=new L,ln=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zu=1e-6;class EC extends Iv{constructor(e,n=null){super(e,n),this.state=it.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Is.ROTATE,MIDDLE:Is.DOLLY,RIGHT:Is.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Ot,this._lastTargetPosition=new L,this._quat=new Ot().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sg,this._sphericalDelta=new Sg,this._scale=1,this._panOffset=new L,this._rotateStart=new Ae,this._rotateEnd=new Ae,this._rotateDelta=new Ae,this._panStart=new Ae,this._panEnd=new Ae,this._panDelta=new Ae,this._dollyStart=new Ae,this._dollyEnd=new Ae,this._dollyDelta=new Ae,this._dollyDirection=new L,this._mouse=new Ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=TC.bind(this),this._onPointerDown=wC.bind(this),this._onPointerUp=AC.bind(this),this._onContextMenu=IC.bind(this),this._onMouseWheel=PC.bind(this),this._onKeyDown=bC.bind(this),this._onTouchStart=LC.bind(this),this._onTouchMove=DC.bind(this),this._onMouseDown=CC.bind(this),this._onMouseMove=RC.bind(this),this._interceptControlDown=NC.bind(this),this._interceptControlUp=UC.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mg),this.update(),this.state=it.NONE}update(e=null){const n=this.object.position;Pt.copy(n).sub(this.target),Pt.applyQuaternion(this._quat),this._spherical.setFromVector3(Pt),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),r<-Math.PI?r+=ln:r>Math.PI&&(r-=ln),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Pt.setFromSpherical(this._spherical),Pt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Pt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ol.origin.copy(this.object.position),ol.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ol.direction))<MC?this.object.lookAt(this.target):(Eg.setFromNormalAndCoplanarPoint(this.object.up,this.target),ol.intersectPlane(Eg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Zu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zu||this._lastTargetPosition.distanceToSquared(this.target)>Zu?(this.dispatchEvent(Mg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Pt.setFromMatrixColumn(n,0),Pt.multiplyScalar(-e),this._panOffset.add(Pt)}_panUp(e,n){this.screenSpacePanning===!0?Pt.setFromMatrixColumn(n,1):(Pt.setFromMatrixColumn(n,0),Pt.crossVectors(this.object.up,Pt)),Pt.multiplyScalar(e),this._panOffset.add(Pt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Pt.copy(r).sub(this.target);let s=Pt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/n.clientHeight),this._rotateUp(ln*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/n.clientHeight),this._rotateUp(ln*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ae,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function wC(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function TC(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function AC(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fv),this.state=it.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function CC(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=it.DOLLY;break;case Is.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=it.ROTATE}break;case Is.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Yf)}function RC(t){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function PC(t){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(t.preventDefault(),this.dispatchEvent(Yf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Fv))}function bC(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function LC(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=it.TOUCH_ROTATE;break;case ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=it.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Yf)}function DC(t){switch(this._trackPointer(t),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=it.NONE}}function IC(t){this.enabled!==!1&&t.preventDefault()}function NC(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function UC(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Nc(t){const e=$e.useRef(null),n=$e.useRef(null),i=$e.useRef(t.onFrame);i.current=t.onFrame;const r=$e.useRef(t.onRebuild);r.current=t.onRebuild;const s=$e.useRef(t.onInit);return s.current=t.onInit,$e.useEffect(()=>{var u,_;const o=e.current;if(!o||o.querySelector("canvas"))return;const a=new rC({antialias:!0,powerPreference:"high-performance"});a.setPixelRatio(1.5),a.outputColorSpace=In,a.toneMapping=ev,a.toneMappingExposure=1,o.appendChild(a.domElement);const l=new un(45,1,.1,500);l.position.set(14,10,-22);const c=new sC;c.background=new Oe(t.background??922136);const d=new EC(l,a.domElement);d.enableDamping=!0,d.dampingFactor=.12,d.target.set(10,8,0);const f={scene:c,camera:l,renderer:a,controls:d};n.current=f,(u=s.current)==null||u.call(s,f),(_=r.current)==null||_.call(r,f);const p=()=>{const v=o.clientWidth,S=o.clientHeight;v===0||S===0||(a.setSize(v,S,!1),l.aspect=v/S,l.updateProjectionMatrix())};p();const h=new ResizeObserver(p);h.observe(o);const x=new fC;let g=0;const m=()=>{var S;g=requestAnimationFrame(m);const v=x.getDelta();(S=i.current)==null||S.call(i,f,v),d.update(),a.render(c,l)};return m(),()=>{cancelAnimationFrame(g),h.disconnect(),d.dispose(),f.scene.traverse(v=>{var C;const S=v;(C=S.geometry)==null||C.dispose();const P=S.material;Array.isArray(P)?P.forEach(A=>A.dispose()):P==null||P.dispose()}),a.dispose(),a.domElement.parentElement===o&&o.removeChild(a.domElement),n.current=null}},[]),$e.useEffect(()=>{var a;const o=n.current;o&&((a=r.current)==null||a.call(r,o))},t.deps??[]),e}function Uc(t){var n;const e=[];t.scene.traverse(i=>{i.userData.dynamic&&e.push(i)});for(const i of e)(n=i.parent)==null||n.remove(i),FC(i)}function zr(t){return t.userData.dynamic=!0,t}function FC(t){t.traverse(e=>{var r;const n=e;(r=n.geometry)==null||r.dispose();const i=n.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i==null||i.dispose()})}function Fc(t,e){const n=new pC(Math.max(e*2,40),24,2765890,1844272);n.position.set(e/2,-.02,8),t.scene.add(n);const i=new ae(new io(120,80),new ar({color:790292,roughness:.95}));i.rotation.x=-Math.PI/2,i.position.set(e/2,-.05,6),t.scene.add(i)}function Ov(t){const e=uc(t/2),n=Math.cos(e);return n<=0||n>=1?t<1?2e3:0:Math.log(.5)/Math.log(n)}function qf(t,e){return t.powerW*e.luminousEfficacy*e.maintenanceFactor}function Oc(t){const e=uc(t.yaw),n=uc(t.pitch),i=Math.cos(n);return[Math.sin(e)*i,Math.sin(n),Math.cos(e)*i]}function OC(t){const e=uc(t.yaw);return[Math.cos(e),0,Math.sin(e)]}function kv(t,e){const n=qf(t,e),i=Oc(t);if(t.kind==="point")return[{position:t.position,axis:i,i0:n/(4*Math.PI),exponent:null}];if(t.kind==="flood"){const c=Ov(t.beamAngle),d=(c+1)*n/(2*Math.PI);return[{position:t.position,axis:i,i0:d,exponent:c}]}const r=Math.max(1,Math.round(t.segments)),s=OC(t),o=t.length/r,a=n/(Math.PI*r),l=[];for(let c=0;c<r;c++){const d=-t.length/2+o*(c+.5);l.push({position:[t.position[0]+s[0]*d,t.position[1]+s[1]*d,t.position[2]+s[2]*d],axis:i,i0:a,exponent:1})}return l}function kC(t,e,n){const i=mC(e,t.position),r=$u(i,i);if(r<1e-12)return 0;const s=Math.sqrt(r),o=gC(i,1/s),a=$u(o,n);if(a<=0)return 0;let l;if(t.exponent===null)l=t.i0;else{const c=$u(o,t.axis);if(c<=0)return 0;l=t.i0*Math.pow(c,t.exponent)}return l*a/r}function zv(t,e,n,i){let r=0;for(const s of kv(t,i))r+=kC(s,e,n);return r}function zC(t,e,n,i){let r=0;for(const s of t)s.enabled&&(r+=zv(s,e,n,i));return r}function BC(t,e){if(!t.enabled)return!1;if(!e)return!0;if(t.id in e.lampOverrides)return e.lampOverrides[t.id];for(const n of t.groupIds)if(e.groupStates[n]===!1)return!1;return!0}function Bv(t){const e=t.activeSceneId?t.scenes.find(n=>n.id===t.activeSceneId)??null:null;return t.lamps.filter(n=>BC(n,e))}function $f(t,e=.18){const n=new bv(3820134,658706,e);t.scene.add(n);const i=new Lv(9085120,.12);i.position.set(10,20,-10),t.scene.add(i)}function HC(t,e,n,i){let r=2166136261;for(let a=0;a<e.length;a++)r^=e.charCodeAt(a),r=Math.imul(r,16777619);const s=()=>{r|=0,r=r+1831565813|0;let a=Math.imul(r^r>>>15,1|r);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296},o=new ar({color:1054239,roughness:.9});for(let a=0;a<7;a++){const l=4+s()*5,c=i*(.35+s()*.7),d=a%2===0?-1:1,f=n/2+d*(8+s()*22),p=4-s()*26,h=new ae(new vt(l,c,l),o);h.position.set(f,c/2-.05,p),t.scene.add(h)}}function _a(){const t=nt(e=>e.setPage);return T.jsxs("div",{className:"empty",style:{flex:1},children:[T.jsx("div",{className:"big",children:"📂"}),T.jsx("div",{children:"请先在项目列表中打开或创建一个项目"}),T.jsx("button",{className:"primary",style:{marginTop:16},onClick:()=>t("projects"),children:"去项目列表"})]})}function Sn({label:t,value:e,step:n,min:i,max:r,onChange:s}){return T.jsxs("div",{className:"field",children:[T.jsx("label",{children:t}),T.jsx("input",{type:"number",step:n??.1,min:i,max:r,value:e,onChange:o=>s(Number(o.target.value))})]})}function VC(){const t=fa(),e=nt(c=>c.updateFacade),n=$e.useMemo(()=>t?oa(t.facade):null,[t==null?void 0:t.facade]),i=[t==null?void 0:t.facade],r=Nc({background:1054238,deps:i,onInit:c=>{$f(c),Fc(c,t?oa(t.facade).totalWidth:30)},onRebuild:c=>{if(!n)return;Uc(c);const d=zr(Xf(n));c.scene.add(d)}});if(!t||!n)return T.jsx(_a,{});const s=t.facade,o=c=>{const d={id:En("line"),orientation:c,offset:c==="horizontal"?n.totalHeight/2:n.totalWidth/2,protrude:.25,width:.2};e({lines:[...s.lines,d]})},a=(c,d)=>e({lines:s.lines.map(f=>f.id===c?{...f,...d}:f)}),l=()=>{const c={id:En("bw"),bayStart:0,bayCount:1,protrude:.6,windowRatio:.5};e({bayWindows:[...s.bayWindows,c]})};return T.jsxs(T.Fragment,{children:[T.jsxs("aside",{className:"sidebar",children:[T.jsxs("div",{className:"card",children:[T.jsx("h3",{children:"立面参数"}),T.jsxs("div",{className:"grid2",children:[T.jsx(Sn,{label:"层数",value:s.floors,step:1,min:1,max:60,onChange:c=>e({floors:Math.round(c)})}),T.jsx(Sn,{label:"层高 (m)",value:s.floorHeight,min:2.5,max:8,onChange:c=>e({floorHeight:c})}),T.jsx(Sn,{label:"开间数",value:s.bays,step:1,min:1,max:30,onChange:c=>e({bays:Math.round(c)})}),T.jsx(Sn,{label:"开间宽 (m)",value:s.bayWidth,min:2,max:10,onChange:c=>e({bayWidth:c})}),T.jsx(Sn,{label:"窗墙比",value:s.windowRatio,step:.05,min:.05,max:.9,onChange:c=>e({windowRatio:c})}),T.jsx(Sn,{label:"墙体厚 (m)",value:s.thickness,step:.05,min:.1,max:1,onChange:c=>e({thickness:c})})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"总宽 × 总高"}),T.jsxs("span",{className:"v",children:[n.totalWidth.toFixed(2)," × ",n.totalHeight.toFixed(2)," m"]})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"立面面积"}),T.jsxs("span",{className:"v",children:[(n.totalWidth*n.totalHeight).toFixed(1)," m²"]})]})]}),T.jsxs("div",{className:"card",children:[T.jsxs("h3",{children:["装饰线条（",s.lines.length,"）"]}),T.jsxs("div",{className:"row",style:{marginBottom:8},children:[T.jsx("button",{className:"small",onClick:()=>o("horizontal"),children:"+ 横向腰线"}),T.jsx("button",{className:"small",onClick:()=>o("vertical"),children:"+ 竖向线条"})]}),s.lines.map(c=>T.jsxs("div",{className:"card",style:{background:"var(--bg)"},children:[T.jsxs("div",{className:"row",children:[T.jsx("span",{className:"tag",children:c.orientation==="horizontal"?"横向":"竖向"}),T.jsx("button",{className:"small danger",onClick:()=>e({lines:s.lines.filter(d=>d.id!==c.id)}),children:"删除"})]}),T.jsxs("div",{className:"grid2",style:{marginTop:6},children:[T.jsx(Sn,{label:c.orientation==="horizontal"?"高度位置 (m)":"水平位置 (m)",value:c.offset,min:0,max:c.orientation==="horizontal"?n.totalHeight:n.totalWidth,onChange:d=>a(c.id,{offset:d})}),T.jsx(Sn,{label:"凸出 (m)",value:c.protrude,step:.05,min:.05,max:1,onChange:d=>a(c.id,{protrude:d})}),T.jsx(Sn,{label:"截面宽 (m)",value:c.width,step:.05,min:.05,max:1,onChange:d=>a(c.id,{width:d})})]})]},c.id))]}),T.jsxs("div",{className:"card",children:[T.jsxs("h3",{children:["凸窗 / 飘窗（",s.bayWindows.length,"）"]}),T.jsx("button",{className:"small",style:{marginBottom:8},onClick:l,children:"+ 新增凸窗"}),s.bayWindows.map(c=>T.jsxs("div",{className:"card",style:{background:"var(--bg)"},children:[T.jsxs("div",{className:"row",children:[T.jsxs("span",{className:"tag",children:["开间 ",c.bayStart+1,"~",c.bayStart+c.bayCount]}),T.jsx("button",{className:"small danger",onClick:()=>e({bayWindows:s.bayWindows.filter(d=>d.id!==c.id)}),children:"删除"})]}),T.jsxs("div",{className:"grid2",style:{marginTop:6},children:[T.jsx(Sn,{label:"起始开间",value:c.bayStart+1,step:1,min:1,max:s.bays,onChange:d=>e({bayWindows:s.bayWindows.map(f=>f.id===c.id?{...f,bayStart:Math.round(d)-1}:f)})}),T.jsx(Sn,{label:"占用开间数",value:c.bayCount,step:1,min:1,max:s.bays,onChange:d=>e({bayWindows:s.bayWindows.map(f=>f.id===c.id?{...f,bayCount:Math.round(d)}:f)})}),T.jsx(Sn,{label:"凸出 (m)",value:c.protrude,step:.1,min:.2,max:1.5,onChange:d=>e({bayWindows:s.bayWindows.map(f=>f.id===c.id?{...f,protrude:d}:f)})}),T.jsx(Sn,{label:"凸窗窗墙比",value:c.windowRatio,step:.05,min:.1,max:.95,onChange:d=>e({bayWindows:s.bayWindows.map(f=>f.id===c.id?{...f,windowRatio:d}:f)})})]})]},c.id))]}),T.jsxs("div",{className:"card",children:[T.jsx("h3",{children:"材质图例"}),[["wall","墙体（计入照度）"],["glass","玻璃（仅算反射）"],["trim","装饰线条"]].map(([c,d])=>T.jsxs("div",{className:"checkline",children:[T.jsx("span",{className:"dot",style:{background:"#"+Os[c].toString(16).padStart(6,"0")}}),d]},c))]})]}),T.jsx("div",{className:"stage",ref:r})]})}const Er=new Dv,Yt=new L,Vi=new L,mt=new Ot,wg={X:new L(1,0,0),Y:new L(0,1,0),Z:new L(0,0,1)},Qu={type:"change"},Tg={type:"mouseDown",mode:null},Ag={type:"mouseUp",mode:null},Cg={type:"objectChange"};class GC extends Iv{constructor(e,n=null){super(void 0,n);const i=new $C(this);this._root=i;const r=new KC;this._gizmo=r,i.add(r);const s=new ZC;this._plane=s,i.add(s);const o=this;function a(v,S){let P=S;Object.defineProperty(o,v,{get:function(){return P!==void 0?P:S},set:function(C){P!==C&&(P=C,s[v]=C,r[v]=C,o.dispatchEvent({type:v+"-changed",value:C}),o.dispatchEvent(Qu))}}),o[v]=S,s[v]=S,r[v]=S}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0);const l=new L,c=new L,d=new Ot,f=new Ot,p=new L,h=new Ot,x=new L,g=new L,m=new L,u=0,_=new L;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",d),a("worldQuaternionStart",f),a("cameraPosition",p),a("cameraQuaternion",h),a("pointStart",x),a("pointEnd",g),a("rotationAxis",m),a("rotationAngle",u),a("eye",_),this._offset=new L,this._startNorm=new L,this._endNorm=new L,this._cameraScale=new L,this._parentPosition=new L,this._parentQuaternion=new Ot,this._parentQuaternionInv=new Ot,this._parentScale=new L,this._worldScaleStart=new L,this._worldQuaternionInv=new Ot,this._worldScale=new L,this._positionStart=new L,this._quaternionStart=new Ot,this._scaleStart=new L,this._getPointer=WC.bind(this),this._onPointerDown=XC.bind(this),this._onPointerHover=jC.bind(this),this._onPointerMove=YC.bind(this),this._onPointerUp=qC.bind(this),n!==null&&this.connect()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&Er.setFromCamera(e,this.camera);const n=Ju(this._gizmo.picker[this.mode],Er);n?this.axis=n.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&Er.setFromCamera(e,this.camera);const n=Ju(this._plane,Er,!0);n&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(n.point).sub(this.worldPositionStart)),this.dragging=!0,Tg.mode=this.mode,this.dispatchEvent(Tg)}}pointerMove(e){const n=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(n==="E"||n==="XYZE"||n==="XYZ")&&(s="world"),r===void 0||n===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&Er.setFromCamera(e,this.camera);const o=Ju(this._plane,Er,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&n!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),n.indexOf("X")===-1&&(this._offset.x=0),n.indexOf("Y")===-1&&(this._offset.y=0),n.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&n!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(mt.copy(this._quaternionStart).invert()),n.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(Yt.setFromMatrixPosition(r.parent.matrixWorld)),n.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(Yt.setFromMatrixPosition(r.parent.matrixWorld))));else if(i==="scale"){if(n.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Vi.set(a,a,a)}else Yt.copy(this.pointStart),Vi.copy(this.pointEnd),Yt.applyQuaternion(this._worldQuaternionInv),Vi.applyQuaternion(this._worldQuaternionInv),Vi.divide(Yt),n.search("X")===-1&&(Vi.x=1),n.search("Y")===-1&&(Vi.y=1),n.search("Z")===-1&&(Vi.z=1);r.scale.copy(this._scaleStart).multiply(Vi),this.scaleSnap&&(n.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Yt.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;n==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Yt.copy(this.rotationAxis).cross(this.eye))*a):(n==="X"||n==="Y"||n==="Z")&&(this.rotationAxis.copy(wg[n]),Yt.copy(wg[n]),s==="local"&&Yt.applyQuaternion(this.worldQuaternion),Yt.cross(this.eye),Yt.length()===0?l=!0:this.rotationAngle=this._offset.dot(Yt.normalize())*a),(n==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&n!=="E"&&n!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(mt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(mt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Qu),this.dispatchEvent(Cg)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Ag.mode=this.mode,this.dispatchEvent(Ag)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Qu),this.dispatchEvent(Cg),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Er}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function WC(t){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:t.button};{const e=this.domElement.getBoundingClientRect();return{x:(t.clientX-e.left)/e.width*2-1,y:-(t.clientY-e.top)/e.height*2+1,button:t.button}}}function jC(t){if(this.enabled)switch(t.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(t));break}}function XC(t){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(t)),this.pointerDown(this._getPointer(t)))}function YC(t){this.enabled&&this.pointerMove(this._getPointer(t))}function qC(t){this.enabled&&(this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(t)))}function Ju(t,e,n){const i=e.intersectObject(t,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||n)return i[r];return!1}const al=new ii,st=new L(0,1,0),Rg=new L(0,0,0),Pg=new ot,ll=new Ot,bl=new Ot,si=new L,bg=new ot,bo=new L(1,0,0),Rr=new L(0,1,0),Lo=new L(0,0,1),cl=new L,Mo=new L,Eo=new L;class $C extends _t{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const n=this.controls;n.object!==void 0&&(n.object.updateMatrixWorld(),n.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):n.object.parent.matrixWorld.decompose(n._parentPosition,n._parentQuaternion,n._parentScale),n.object.matrixWorld.decompose(n.worldPosition,n.worldQuaternion,n._worldScale),n._parentQuaternionInv.copy(n._parentQuaternion).invert(),n._worldQuaternionInv.copy(n.worldQuaternion).invert()),n.camera.updateMatrixWorld(),n.camera.matrixWorld.decompose(n.cameraPosition,n.cameraQuaternion,n._cameraScale),n.camera.isOrthographicCamera?n.camera.getWorldDirection(n.eye).negate():n.eye.copy(n.cameraPosition).sub(n.worldPosition).normalize(),super.updateMatrixWorld(e)}}class KC extends _t{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new no({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=new Vf({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=n.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const d=e.clone();d.color.setHex(255),d.opacity=.5;const f=e.clone();f.opacity=.25;const p=e.clone();p.color.setHex(16776960),p.opacity=.25,e.clone().color.setHex(16776960);const x=e.clone();x.color.setHex(7895160);const g=new Ut(0,.04,.1,12);g.translate(0,.05,0);const m=new vt(.08,.08,.08);m.translate(0,.04,0);const u=new tn;u.setAttribute("position",new pt([0,0,0,1,0,0],3));const _=new Ut(.0075,.0075,.5,3);_.translate(0,.25,0);function v(q,G){const $=new Lr(q,.0075,3,64,G*Math.PI*2);return $.rotateY(Math.PI/2),$.rotateX(Math.PI/2),$}function S(){const q=new tn;return q.setAttribute("position",new pt([0,0,0,1,1,1],3)),q}const P={X:[[new ae(g,s),[.5,0,0],[0,0,-Math.PI/2]],[new ae(g,s),[-.5,0,0],[0,0,Math.PI/2]],[new ae(_,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ae(g,o),[0,.5,0]],[new ae(g,o),[0,-.5,0],[Math.PI,0,0]],[new ae(_,o)]],Z:[[new ae(g,a),[0,0,.5],[Math.PI/2,0,0]],[new ae(g,a),[0,0,-.5],[-Math.PI/2,0,0]],[new ae(_,a),null,[Math.PI/2,0,0]]],XYZ:[[new ae(new As(.1,0),f.clone()),[0,0,0]]],XY:[[new ae(new vt(.15,.15,.01),d.clone()),[.15,.15,0]]],YZ:[[new ae(new vt(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ae(new vt(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},C={X:[[new ae(new Ut(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new ae(new Ut(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ae(new Ut(.2,0,.6,4),i),[0,.3,0]],[new ae(new Ut(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ae(new Ut(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new ae(new Ut(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ae(new As(.2,0),i)]],XY:[[new ae(new vt(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new ae(new vt(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ae(new vt(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},A={START:[[new ae(new As(.01,2),r),null,null,null,"helper"]],END:[[new ae(new As(.01,2),r),null,null,null,"helper"]],DELTA:[[new yi(S(),r),null,null,null,"helper"]],X:[[new yi(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new yi(u,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new yi(u,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},b={XYZE:[[new ae(v(.5,1),x),null,[0,Math.PI/2,0]]],X:[[new ae(v(.5,.5),s)]],Y:[[new ae(v(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new ae(v(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new ae(v(.75,1),p),null,[0,Math.PI/2,0]]]},V={AXIS:[[new yi(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},y={XYZE:[[new ae(new Wf(.25,10,8),i)]],X:[[new ae(new Lr(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ae(new Lr(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ae(new Lr(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ae(new Lr(.75,.1,2,24),i)]]},E={X:[[new ae(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new ae(_,s),[0,0,0],[0,0,-Math.PI/2]],[new ae(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ae(m,o),[0,.5,0]],[new ae(_,o)],[new ae(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ae(m,a),[0,0,.5],[Math.PI/2,0,0]],[new ae(_,a),[0,0,0],[Math.PI/2,0,0]],[new ae(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ae(new vt(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new ae(new vt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ae(new vt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ae(new vt(.1,.1,.1),f.clone())]]},O={X:[[new ae(new Ut(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new ae(new Ut(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ae(new Ut(.2,0,.6,4),i),[0,.3,0]],[new ae(new Ut(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ae(new Ut(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new ae(new Ut(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ae(new vt(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new ae(new vt(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ae(new vt(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ae(new vt(.2,.2,.2),i),[0,0,0]]]},B={X:[[new yi(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new yi(u,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new yi(u,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function W(q){const G=new _t;for(const $ in q)for(let D=q[$].length;D--;){const Y=q[$][D][0].clone(),Q=q[$][D][1],ie=q[$][D][2],Ee=q[$][D][3],ze=q[$][D][4];Y.name=$,Y.tag=ze,Q&&Y.position.set(Q[0],Q[1],Q[2]),ie&&Y.rotation.set(ie[0],ie[1],ie[2]),Ee&&Y.scale.set(Ee[0],Ee[1],Ee[2]),Y.updateMatrix();const X=Y.geometry.clone();X.applyMatrix4(Y.matrix),Y.geometry=X,Y.renderOrder=1/0,Y.position.set(0,0,0),Y.rotation.set(0,0,0),Y.scale.set(1,1,1),G.add(Y)}return G}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=W(P)),this.add(this.gizmo.rotate=W(b)),this.add(this.gizmo.scale=W(E)),this.add(this.picker.translate=W(C)),this.add(this.picker.rotate=W(y)),this.add(this.picker.scale=W(O)),this.add(this.helper.translate=W(A)),this.add(this.helper.rotate=W(V)),this.add(this.helper.scale=W(B)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:bl;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(mt.setFromEuler(al.set(0,0,0)),o.quaternion.copy(i).multiply(mt),Math.abs(st.copy(bo).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(mt.setFromEuler(al.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(mt),Math.abs(st.copy(Rr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(mt.setFromEuler(al.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(mt),Math.abs(st.copy(Lo).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(mt.setFromEuler(al.set(0,Math.PI/2,0)),st.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Pg.lookAt(Rg,st,Rr)),o.quaternion.multiply(mt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Yt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Yt.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Yt),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(st.copy(bo).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(st.copy(Rr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(st.copy(Lo).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(st.copy(Lo).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(st.copy(bo).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(st.copy(Rr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(ll.copy(i),st.copy(this.eye).applyQuaternion(mt.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Pg.lookAt(this.eye,Rg,Rr)),o.name==="X"&&(mt.setFromAxisAngle(bo,Math.atan2(-st.y,st.z)),mt.multiplyQuaternions(ll,mt),o.quaternion.copy(mt)),o.name==="Y"&&(mt.setFromAxisAngle(Rr,Math.atan2(st.x,st.z)),mt.multiplyQuaternions(ll,mt),o.quaternion.copy(mt)),o.name==="Z"&&(mt.setFromAxisAngle(Lo,Math.atan2(st.y,st.x)),mt.multiplyQuaternions(ll,mt),o.quaternion.copy(mt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class ZC extends ae{constructor(){super(new io(1e5,1e5,2,2),new no({visible:!1,wireframe:!0,side:Kn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let n=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(n="local"),cl.copy(bo).applyQuaternion(n==="local"?this.worldQuaternion:bl),Mo.copy(Rr).applyQuaternion(n==="local"?this.worldQuaternion:bl),Eo.copy(Lo).applyQuaternion(n==="local"?this.worldQuaternion:bl),st.copy(Mo),this.mode){case"translate":case"scale":switch(this.axis){case"X":st.copy(this.eye).cross(cl),si.copy(cl).cross(st);break;case"Y":st.copy(this.eye).cross(Mo),si.copy(Mo).cross(st);break;case"Z":st.copy(this.eye).cross(Eo),si.copy(Eo).cross(st);break;case"XY":si.copy(Eo);break;case"YZ":si.copy(cl);break;case"XZ":st.copy(Eo),si.copy(Mo);break;case"XYZ":case"E":si.set(0,0,0);break}break;case"rotate":default:si.set(0,0,0)}si.length()===0?this.quaternion.copy(this.cameraQuaternion):(bg.lookAt(Yt.set(0,0,0),si,st),this.quaternion.setFromRotationMatrix(bg)),super.updateMatrixWorld(e)}}function Lg(t){const e=Oc(t),n=new L(e[0],e[1],e[2]);return new Ot().setFromUnitVectors(new L(0,0,1),n)}const QC={flood:16760909,wash:5100287,point:16735626};function JC(t,e){const n=new Jn,i=e?65436:QC[t.kind],r=new ar({color:i,emissive:i,emissiveIntensity:.6,roughness:.4});if(t.kind==="wash")n.add(new ae(new vt(t.length,.08,.12),r));else{const s=new ae(new cc(t.kind==="point"?.09:.14,t.kind==="point"?.16:.26,16),r);s.quaternion.copy(Lg(t)),s.translateZ(.13),n.add(s),n.add(new ae(new Ut(.08,.1,.1,12),r))}if(t.kind==="flood"){const o=Math.tan(Math.max(.1,t.beamAngle)*Math.PI/360)*2,a=new ae(new cc(o,2,24,1,!0),new no({color:i,transparent:!0,opacity:e?.14:.07,side:Kn,depthWrite:!1}));a.quaternion.copy(Lg(t)),a.translateZ(2/2),n.add(a)}return n.position.set(t.position[0],t.position[1],t.position[2]),n.userData.lampId=t.id,n}function eR(t,e){const n=_C(t.colorTemp),i=new Oe(n[0],n[1],n[2]),r=kv(t,e),s=r.reduce((c,d)=>c+d.i0,0),o=Oc(t);if(t.kind==="point"){const c=new dC(i,s,60,2);return c.position.set(...t.position),c}const a=new Jn,l=(c,d)=>{const f=new _t;f.position.copy(c).add(new L(o[0],o[1],o[2]).multiplyScalar(10));const p=new cC(i,d,80,t.beamAngle*Math.PI/360,.45,2);p.position.copy(c),p.target=f,a.add(p,f)};if(t.kind==="wash")for(const c of r)l(new L(...c.position),c.i0);else l(new L(...t.position),s);return a}const tR={flood:{powerW:150,beamAngle:30,length:1,segments:8,colorTemp:4e3,pitch:25},wash:{powerW:60,beamAngle:30,length:2,segments:8,colorTemp:5e3,pitch:0},point:{powerW:20,beamAngle:30,length:1,segments:8,colorTemp:3e3,pitch:0}};function nR(){const t=fa(),e=nt(g=>g.addLamp),n=nt(g=>g.updateLamp),i=nt(g=>g.removeLamp),[r,s]=$e.useState(null),[o,a]=$e.useState("translate"),l=$e.useRef(null),c=$e.useRef(!1),d=$e.useMemo(()=>t?oa(t.facade):null,[t==null?void 0:t.facade]),f=[t==null?void 0:t.facade,t==null?void 0:t.lamps,r],p=Nc({background:1054238,deps:f,onInit:g=>{$f(g),Fc(g,(d==null?void 0:d.totalWidth)??30);const m=new GC(g.camera,g.renderer.domElement);m.addEventListener("dragging-changed",_=>{g.controls.enabled=!_.value}),m.addEventListener("objectChange",()=>{if(c.current||!m.object)return;const _=t==null?void 0:t.lamps.find(S=>S.id===m.object.userData.lampId);if(!_)return;const v=m.object;n(_.id,{position:[+v.position.x.toFixed(3),+v.position.y.toFixed(3),+v.position.z.toFixed(3)],yaw:_.yaw,pitch:_.pitch})});const u=m.getHelper?m.getHelper():m;g.scene.add(u),l.current=m,iR(g,_=>s(_))},onRebuild:g=>{if(!t||!d)return;const m=l.current;c.current=!0,m==null||m.detach(),Uc(g),g.scene.add(zr(Xf(d)));const u=zr(new Jn);for(const _ of t.lamps){const v=JC(_,_.id===r);u.add(v)}if(g.scene.add(u),r){const _=u.children.find(v=>v.userData.lampId===r);_&&(m==null||m.attach(_),m&&m.setMode(o))}c.current=!1}});if(!t||!d)return T.jsx(_a,{});const h=t.lamps.find(g=>g.id===r)??null,x=g=>{const m={name:`${Yd[g]}-${t.lamps.length+1}`,kind:g,position:[d.totalWidth/2,g==="wash"?d.totalHeight-.5:.5,-2],yaw:0,...tR[g],groupIds:[],enabled:!0};e(m),setTimeout(()=>{var v;const u=(v=nt.getState().projects.find(S=>S.id===t.id))==null?void 0:v.lamps,_=u==null?void 0:u[u.length-1];_&&s(_.id)},0)};return T.jsxs(T.Fragment,{children:[T.jsxs("aside",{className:"sidebar",children:[T.jsxs("div",{className:"card",children:[T.jsx("h3",{children:"添加灯具"}),T.jsxs("div",{className:"row",children:[T.jsx("button",{onClick:()=>x("flood"),children:"投光灯"}),T.jsx("button",{onClick:()=>x("wash"),children:"洗墙灯"}),T.jsx("button",{onClick:()=>x("point"),children:"点光源"})]}),T.jsxs("div",{className:"row",style:{marginTop:8},children:[T.jsx("button",{className:o==="translate"?"primary":"",onClick:()=>{var g;a("translate"),(g=l.current)==null||g.setMode("translate")},children:"移动"}),T.jsx("button",{className:o==="rotate"?"primary":"",onClick:()=>{var g;a("rotate"),(g=l.current)==null||g.setMode("rotate")},children:"旋转"})]}),T.jsx("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8},children:"点击灯具选中，拖彩色轴移动/旋转；位置与角度会同步到下方数值框。"})]}),h&&T.jsxs("div",{className:"card",children:[T.jsxs("h3",{children:["灯具参数 — ",h.name]}),T.jsxs("div",{className:"field",children:[T.jsx("label",{children:"名称"}),T.jsx("input",{value:h.name,onChange:g=>n(h.id,{name:g.target.value})})]}),T.jsxs("div",{className:"grid2",children:[T.jsx(oi,{label:"位置 X (m)",value:h.position[0],onChange:g=>n(h.id,{position:[g,h.position[1],h.position[2]]})}),T.jsx(oi,{label:"位置 Y (m)",value:h.position[1],onChange:g=>n(h.id,{position:[h.position[0],g,h.position[2]]})}),T.jsx(oi,{label:"位置 Z (m)",value:h.position[2],onChange:g=>n(h.id,{position:[h.position[0],h.position[1],g]})}),T.jsx(oi,{label:"偏航角 (°)",value:h.yaw,step:1,onChange:g=>n(h.id,{yaw:g})}),T.jsx(oi,{label:"俯仰角 (°)",value:h.pitch,step:1,onChange:g=>n(h.id,{pitch:g})}),T.jsx(oi,{label:"功率 (W)",value:h.powerW,step:5,min:1,onChange:g=>n(h.id,{powerW:g})}),h.kind!=="point"&&T.jsx(oi,{label:"光束角 (°)",value:h.beamAngle,step:1,min:3,max:170,onChange:g=>n(h.id,{beamAngle:g})}),T.jsx(oi,{label:"色温 (K)",value:h.colorTemp,step:100,min:1800,max:1e4,onChange:g=>n(h.id,{colorTemp:g})}),h.kind==="wash"&&T.jsxs(T.Fragment,{children:[T.jsx(oi,{label:"灯段长 (m)",value:h.length,step:.1,min:.2,onChange:g=>n(h.id,{length:g})}),T.jsx(oi,{label:"离散点数",value:h.segments,step:1,min:1,max:40,onChange:g=>n(h.id,{segments:Math.round(g)})})]})]}),T.jsxs("div",{className:"field",style:{marginTop:6},children:[T.jsx("label",{children:"分组（多选）"}),t.groups.map(g=>T.jsxs("label",{className:"checkline",children:[T.jsx("input",{type:"checkbox",checked:h.groupIds.includes(g.id),onChange:m=>{const u=new Set(h.groupIds);m.target.checked?u.add(g.id):u.delete(g.id),n(h.id,{groupIds:[...u]})}}),T.jsx("span",{className:"dot",style:{background:g.color}})," ",g.name]},g.id))]}),T.jsxs("div",{className:"row",children:[T.jsx("button",{onClick:()=>n(h.id,{enabled:!h.enabled}),children:h.enabled?"关灯":"开灯"}),T.jsx("button",{className:"danger",onClick:()=>{i(h.id),s(null)},children:"删除灯具"})]})]}),T.jsxs("div",{className:"card",children:[T.jsxs("h3",{children:["灯具列表（",t.lamps.length,"）"]}),t.lamps.map(g=>T.jsx("div",{className:`list-item ${g.id===r?"selected":""}`,onClick:()=>s(g.id),children:T.jsxs("div",{style:{flex:1},children:[T.jsxs("div",{children:[g.name," ",!g.enabled&&T.jsx("span",{className:"tag",children:"关"})]}),T.jsxs("div",{style:{fontSize:12,color:"var(--muted)"},children:[Yd[g.kind]," · ",g.powerW,"W · (",g.position.map(m=>m.toFixed(1)).join(", "),")"]})]})},g.id))]})]}),T.jsx("div",{className:"stage",ref:p})]})}function oi({label:t,value:e,onChange:n,step:i=.1,min:r,max:s}){return T.jsxs("div",{className:"field",children:[T.jsx("label",{children:t}),T.jsx("input",{type:"number",step:i,min:r,max:s,value:e,onChange:o=>n(Number(o.target.value))})]})}function iR(t,e){const n=new Dv,i=new Ae;let r=0;const s=t.renderer.domElement;s.addEventListener("pointerdown",()=>{r=performance.now()}),s.addEventListener("pointerup",o=>{if(performance.now()-r>200)return;const a=s.getBoundingClientRect();i.x=(o.clientX-a.left)/a.width*2-1,i.y=-((o.clientY-a.top)/a.height)*2+1,n.setFromCamera(i,t.camera);const c=n.intersectObjects(t.scene.children,!0).find(d=>{let f=d.object;for(;f;){if(f.userData.lampId)return!0;f=f.parent}return!1});if(c){let d=c.object;for(;d&&!d.userData.lampId;)d=d.parent;e((d==null?void 0:d.userData.lampId)??null)}else e(null)})}function Dg(t,e){return Math.max(2,Math.round(t/e))}function rR(t,e,n){return t.normal[0]!==0?[t.center[0],t.center[1]+n,t.center[2]+e]:[t.center[0]+e,t.center[1]+n,t.center[2]]}function sR(t,e,n){const i=Dg(t.width,n.gridSpacing),r=Dg(t.height,n.gridSpacing),s=t.width/i,o=t.height/r,a=new Float64Array(i*r),l=new Float64Array(i*r);let c=0,d=0,f=1/0,p=!1;for(let h=0;h<r;h++){const x=-t.height/2+o*(h+.5);for(let g=0;g<i;g++){const m=-t.width/2+s*(g+.5),u=rR(t,m,x),_=zC(e,u,t.normal,n),v=h*i+g;a[v]=_,t.material==="glass"&&(l[v]=_*n.glassReflectance),c+=_,p=!0,_>d&&(d=_),_<f&&(f=_)}}return{patch:t,cols:i,rows:r,cellW:s,cellH:o,lux:a,reflected:l,avg:c/(i*r),max:d,min:p?f:0}}function oR(t,e,n){const i=t.patches.map(f=>sR(f,e,n));let r=0,s=0,o=0,a=1/0,l=0,c=0,d=0;for(const f of i){const p=f.patch.width*f.patch.height;if(d+=f.cols*f.rows,f.patch.material==="glass"){l+=f.avg*p,c+=p;continue}r+=f.avg*p,s+=p,f.max>o&&(o=f.max),f.min<a&&(a=f.min)}return{patchResults:i,wallAvg:s>0?r/s:0,wallMax:o,wallMin:a===1/0?0:a,glassReflectedAvg:c>0?l/c:0,sampleCount:d}}function aR(t,e,n){const i=t.reduce((s,o)=>s+o.powerW,0),r=e>0?i/e:0;return{totalW:i,areaM2:e,lpd:r,limit:n.lpdLimit,overLimit:r>n.lpdLimit,activeCount:t.length}}function lR(t,e,n,i,r,s,o){const a=t*e*n,l=Math.log(.5)/Math.log(Math.cos(i*Math.PI/360));return(l+1)*a/(2*Math.PI)*Math.pow(s,l)*o/(r*r)}function cR(){const t=fa(),[e,n]=$e.useState(!1),[i,r]=$e.useState(!1),s=$e.useMemo(()=>t?oa(t.facade):null,[t==null?void 0:t.facade]),o=$e.useMemo(()=>t?Bv(t):[],[t]),a=$e.useMemo(()=>t&&s?oR(s,o,t.settings):null,[s,o,t==null?void 0:t.settings]),l=$e.useMemo(()=>t&&s?aR(o,s.totalWidth*s.totalHeight,t.settings):null,[s,o,t==null?void 0:t.settings]),c=$e.useMemo(()=>{const h=new Map;return a==null||a.patchResults.forEach(x=>h.set(x.patch.id,x)),h},[a]),d=[t==null?void 0:t.facade,a,e],f=Nc({background:1054238,deps:d,onInit:h=>{$f(h),Fc(h,(s==null?void 0:s.totalWidth)??30)},onRebuild:h=>{!s||!a||(Uc(h),h.scene.add(zr(SC(s,c,e))))}}),p=$e.useMemo(()=>{if(!t||!s)return null;const h=o.find(E=>E.kind==="flood");if(!h)return null;const x=[s.totalWidth/2,s.totalHeight/2,0],g=[0,0,1],m=Oc(h),u=x[0]-h.position[0],_=x[1]-h.position[1],v=x[2]-h.position[2],S=Math.hypot(u,_,v),P=[u/S,_/S,v/S],C=P[0]*m[0]+P[1]*m[1]+P[2]*m[2],A=P[0]*g[0]+P[1]*g[1]+P[2]*g[2],b=lR(h.powerW,t.settings.luminousEfficacy,t.settings.maintenanceFactor,h.beamAngle,S,Math.max(C,0),Math.max(A,0)),V=zv(h,[x[0],x[1],x[2]],[g[0],g[1],g[2]],t.settings),y=b>1e-9?Math.abs(V-b)/b*100:0;return{name:h.name,r:S,cosTheta:C,cosAlpha:A,hand:b,engine:V,errPct:y,n:Ov(h.beamAngle),flux:qf(h,t.settings)}},[t,s,o]);return!t||!s||!a||!l?T.jsx(_a,{}):T.jsxs(T.Fragment,{children:[T.jsxs("aside",{className:"sidebar",children:[T.jsxs("div",{className:"card",children:[T.jsx("h3",{children:"显示模式"}),T.jsxs("div",{className:"row",children:[T.jsx("button",{className:e?"":"primary",onClick:()=>n(!1),children:"照度伪彩"}),T.jsx("button",{className:e?"primary":"",onClick:()=>n(!0),children:"玻璃反射"})]}),T.jsx("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.7},children:e?"玻璃面片显示 E·ρ 反射照度；墙体仍显示直射照度。玻璃反射不计入照度指标。":"玻璃面片保持深色不参与伪彩，只统计墙体与装饰面照度。"})]}),T.jsxs("div",{className:"card",children:[T.jsxs("h3",{children:["照度统计（当前场景 ",o.length," 盏亮灯）"]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"墙面平均照度"}),T.jsxs("span",{className:"v",children:[a.wallAvg.toFixed(1)," lx"]})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"墙面最大照度"}),T.jsxs("span",{className:"v",children:[a.wallMax.toFixed(1)," lx"]})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"墙面最小照度"}),T.jsxs("span",{className:"v",children:[a.wallMin.toFixed(1)," lx"]})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"照度均匀度(min/avg)"}),T.jsx("span",{className:"v",children:a.wallAvg>0?(a.wallMin/a.wallAvg).toFixed(2):"—"})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"玻璃平均反射照度"}),T.jsxs("span",{className:"v",children:[a.glassReflectedAvg.toFixed(1)," lx"]})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"采样网格点"}),T.jsx("span",{className:"v",children:a.sampleCount})]}),a.wallMax>1e3&&T.jsxs("div",{className:"warn-box",children:["⚠ 最大照度 ",a.wallMax.toFixed(0)," lx 为近场尖峰：该采样点距灯具过近，平方反比定律下数值急剧增大。 工程评价请以平均照度/均匀度为准，或把灯具适当移离墙面、加密网格间距复核。"]})]}),T.jsxs("div",{className:"card",children:[T.jsx("h3",{children:"功率与功率密度"}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"总功率"}),T.jsxs("span",{className:"v",children:[l.totalW.toFixed(0)," W"]})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"立面面积"}),T.jsxs("span",{className:"v",children:[l.areaM2.toFixed(1)," m²"]})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"单位面积功率密度 LPD"}),T.jsxs("span",{className:l.overLimit?"num-bad":"num-good",children:[l.lpd.toFixed(2)," W/m²"]})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"限值"}),T.jsxs("span",{className:"v",children:[l.limit," W/m²"]})]}),l.overLimit?T.jsxs("div",{className:"warn-box",children:["⚠ 功率密度 ",l.lpd.toFixed(2)," W/m² 超过限值 ",l.limit,"，请减少灯具或降低功率。"]}):T.jsx("div",{className:"ok-box",children:"✓ 功率密度满足限值要求"})]}),T.jsxs("div",{className:"card",children:[T.jsx("h3",{children:"手算对照（误差 <1% 承诺）"}),!p&&T.jsx("div",{style:{color:"var(--muted)"},children:"当前场景没有投光灯，添加一台后自动对照。"}),p&&T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"灯具"}),T.jsx("span",{className:"v",children:p.name})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"计算距离 r"}),T.jsxs("span",{className:"v",children:[p.r.toFixed(3)," m"]})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"cosθ（配光角）"}),T.jsx("span",{className:"v",children:p.cosTheta.toFixed(4)})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"cosα（入射角）"}),T.jsx("span",{className:"v",children:p.cosAlpha.toFixed(4)})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"配光指数 n"}),T.jsx("span",{className:"v",children:p.n.toFixed(3)})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"有效通量 Φ"}),T.jsxs("span",{className:"v",children:[p.flux.toFixed(0)," lm"]})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"手算 E"}),T.jsxs("span",{className:"v",children:[p.hand.toFixed(3)," lx"]})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"引擎 E"}),T.jsxs("span",{className:"v",children:[p.engine.toFixed(3)," lx"]})]}),T.jsxs("div",{className:p.errPct<1?"ok-box":"warn-box",children:["相对误差 ",p.errPct.toExponential(2),"%（要求 < 1%）"]})]})]}),T.jsxs("div",{className:"card",children:[T.jsx("h3",{children:"导出报表"}),T.jsx("div",{className:"row",children:T.jsx("button",{onClick:()=>r(h=>!h),children:"导出 CSV ▾"})}),i&&T.jsxs("div",{style:{marginTop:8,display:"grid",gap:6},children:[T.jsx("button",{className:"small",onClick:()=>Ho(`${t.name}_灯具清单.csv`,gm(t)),children:"灯具清单（全部）"}),T.jsx("button",{className:"small",onClick:()=>Ho(`${t.name}_灯具清单_当前场景.csv`,gm(t,!0)),children:"灯具清单（当前场景）"}),T.jsx("button",{className:"small",onClick:()=>Ho(`${t.name}_照度报表.csv`,tM(a,t.name)),children:"照度报表"})]})]})]}),T.jsx("div",{className:"stage",ref:f,children:T.jsxs("div",{className:"hud",children:[T.jsx("b",{children:"伪彩图例 (lx)"}),T.jsx("div",{style:{display:"flex",alignItems:"center",gap:6,marginTop:4},children:vC.map(h=>T.jsxs("div",{className:"legend",style:{flexDirection:"column",gap:2},children:[T.jsx("span",{style:{width:26,height:12,background:`rgb(${Nv(h).join(",")})`,borderRadius:2}}),h]},h))})]})})]})}function uR(){const t=fa(),e=nt(h=>h.setActiveScene),n=nt(h=>h.updateScene),i=nt(h=>h.addScene),r=nt(h=>h.removeScene),s=$e.useMemo(()=>t?oa(t.facade):null,[t==null?void 0:t.facade]),o=$e.useMemo(()=>t?Bv(t):[],[t]),a=(t==null?void 0:t.scenes.find(h=>h.id===t.activeSceneId))??null,l=[t==null?void 0:t.facade,t==null?void 0:t.lamps,t==null?void 0:t.activeSceneId,t==null?void 0:t.scenes,t==null?void 0:t.settings],c=Nc({background:329741,deps:l,onInit:h=>{h.scene.add(new bv(1713208,329482,.12));const x=new Lv(7243448,.15);x.position.set(-15,25,-20),h.scene.add(x),Fc(h,(s==null?void 0:s.totalWidth)??30)},onRebuild:h=>{if(!t||!s)return;Uc(h);const x=Xf(s);x.traverse(u=>{const _=u.material;_&&"color"in _&&_.color.multiplyScalar(.45)}),h.scene.add(zr(x));const g=zr(new Jn);HC({scene:g},t.id+t.name,s.totalWidth,s.totalHeight),h.scene.add(g);const m=zr(new Jn);for(const u of o)m.add(eR(u,t.settings));h.scene.add(m)}});if(!t||!s)return T.jsx(_a,{});const d=o.reduce((h,x)=>h+qf(x,t.settings),0),f=h=>{if(!a)return;const x=a.groupStates[h]??!0;n(a.id,{groupStates:{...a.groupStates,[h]:!x}})},p=h=>{if(!a)return;const x=a.lampOverrides[h]??!0;n(a.id,{lampOverrides:{...a.lampOverrides,[h]:!x}})};return T.jsxs(T.Fragment,{children:[T.jsxs("aside",{className:"sidebar",children:[T.jsxs("div",{className:"card",children:[T.jsx("h3",{children:"场景模式"}),T.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:8},children:[T.jsx("span",{className:`scene-chip ${t.activeSceneId===null?"active":""}`,onClick:()=>e(null),children:"全部开启"}),t.scenes.map(h=>T.jsx("span",{className:`scene-chip ${h.id===t.activeSceneId?"active":""}`,onClick:()=>e(h.id),children:h.name},h.id))]}),T.jsxs("div",{className:"row",children:[T.jsx("button",{className:"small",onClick:()=>i(`新模式 ${t.scenes.length+1}`),children:"+ 新建模式"}),a&&T.jsx("button",{className:"small danger",onClick:()=>r(a.id),children:"删除当前模式"})]}),!a&&T.jsx("div",{style:{color:"var(--muted)",marginTop:8,fontSize:12},children:"「全部开启」状态不可编辑，选择或新建一个模式后可分组开关灯。"})]}),a&&T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"card",children:[T.jsx("h3",{children:"分组开关"}),t.groups.map(h=>{const x=a.groupStates[h.id]??!0;return T.jsxs("label",{className:"checkline",style:{cursor:"pointer"},children:[T.jsx("input",{type:"checkbox",checked:x,onChange:()=>f(h.id)}),T.jsx("span",{className:"dot",style:{background:h.color}})," ",h.name]},h.id)})]}),T.jsxs("div",{className:"card",children:[T.jsx("h3",{children:"单灯覆盖（优先于分组）"}),t.lamps.map(h=>{const x=a.lampOverrides[h.id]??h.enabled;return T.jsxs("label",{className:"checkline",style:{cursor:"pointer"},children:[T.jsx("input",{type:"checkbox",checked:x,onChange:()=>p(h.id)}),h.name]},h.id)})]})]}),T.jsxs("div",{className:"card",children:[T.jsx("h3",{children:"当前场景"}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"点亮灯具"}),T.jsxs("span",{className:"v",children:[o.length," / ",t.lamps.length]})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"总有效光通量"}),T.jsxs("span",{className:"v",children:[d.toFixed(0)," lm"]})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"环境暗场照度"}),T.jsxs("span",{className:"v",children:[t.settings.ambientLux," lx"]})]})]})]}),T.jsx("div",{className:"stage",ref:c,children:T.jsxs("div",{className:"hud",children:["夜景预览 · ",T.jsx("b",{children:a?a.name:"全部开启"}),T.jsx("br",{}),"光斑边缘按光束角 50% 光强定义 + penumbra 柔化，衰减遵循平方反比"]})})]})}function dR(){const t=fa(),e=nt(c=>c.updateSettings),n=nt(c=>c.addGroup),i=nt(c=>c.updateGroup),r=nt(c=>c.removeGroup),s=nt(c=>c.exportProject),o=nt(c=>c.importProject);if(!t)return T.jsx(_a,{});const a=t.settings,l=(c,d,f,p,h,x)=>T.jsxs("div",{className:"field",children:[T.jsxs("label",{children:[c,x&&`（${x}）`]}),T.jsx("input",{type:"number",step:f,min:p,max:h,value:a[d],onChange:g=>e({[d]:Number(g.target.value)})})]});return T.jsx("div",{style:{flex:1,padding:20,overflowY:"auto",maxWidth:1080,margin:"0 auto",width:"100%"},children:T.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[T.jsxs("div",{className:"card",children:[T.jsx("h3",{children:"照度计算参数"}),l("光源发光效率","luminousEfficacy",5,30,250,"lm/W，LED 常规 80~130"),l("维护系数 MF","maintenanceFactor",.05,.3,1,"污染/光衰综合折减"),l("玻璃可见光反射率","glassReflectance",.01,.02,.5,"仅用于反射伪彩"),l("采样网格间距","gridSpacing",.1,.1,2,"m，越小越精细"),T.jsx("div",{style:{fontSize:12,color:"var(--muted)"},children:"照度 E = I(θ)·cosα/r²；有效通量 Φ = 功率 × 发光效率 × 维护系数。"})]}),T.jsxs("div",{className:"card",children:[T.jsx("h3",{children:"功率与夜景"}),l("LPD 限值","lpdLimit",1,1,200,"W/m²，超限红色告警"),l("环境暗场照度","ambientLux",.5,0,20,"lx，夜景环境光")]}),T.jsxs("div",{className:"card",children:[T.jsxs("h3",{children:["灯具分组（",t.groups.length,"）"]}),t.groups.map(c=>T.jsxs("div",{className:"row",style:{marginBottom:8},children:[T.jsx("input",{type:"color",value:c.color,style:{width:42,padding:2,flex:"none"},onChange:d=>i(c.id,{color:d.target.value})}),T.jsx("input",{value:c.name,onChange:d=>i(c.id,{name:d.target.value})}),T.jsx("button",{className:"small danger",style:{flex:"none"},onClick:()=>r(c.id),children:"删除"})]},c.id)),T.jsx("button",{className:"small",onClick:()=>n({name:`新分组 ${t.groups.length+1}`,color:"#88cc66"}),children:"+ 新增分组"})]}),T.jsxs("div",{className:"card",children:[T.jsx("h3",{children:"项目数据"}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"项目 ID"}),T.jsx("span",{className:"v",style:{fontSize:11},children:t.id})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"创建时间"}),T.jsx("span",{className:"v",children:new Date(t.createdAt).toLocaleString()})]}),T.jsxs("div",{className:"stat",children:[T.jsx("span",{className:"k",children:"最近更新"}),T.jsx("span",{className:"v",children:new Date(t.updatedAt).toLocaleString()})]}),T.jsxs("div",{className:"row",style:{marginTop:10},children:[T.jsx("button",{onClick:()=>Ho(`${t.name}.json`,s(t.id)),children:"导出项目 JSON"}),T.jsxs("label",{className:"small",style:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 12px",cursor:"pointer",textAlign:"center"},children:["导入项目 JSON",T.jsx("input",{type:"file",accept:".json,application/json",style:{display:"none"},onChange:async c=>{var f;const d=(f=c.target.files)==null?void 0:f[0];if(d)try{o(await d.text()),alert("导入成功，请到项目列表查看")}catch(p){alert(p instanceof Error?p.message:"导入失败")}c.target.value=""}})]})]}),T.jsx("div",{style:{fontSize:12,color:"var(--muted)",marginTop:10},children:"所有数据保存在浏览器 localStorage（键 facade-lighting-studio-v1），清理浏览器数据会丢失，请及时导出备份。"})]})]})})}const hR=[{key:"projects",label:"项目列表"},{key:"facade",label:"立面建模"},{key:"lamps",label:"灯具布置"},{key:"illuminance",label:"照度计算"},{key:"night",label:"夜景预览"},{key:"settings",label:"设置"}];function fR(){const t=nt(i=>i.page),e=nt(i=>i.setPage),n=nt(i=>i.projects.find(r=>r.id===i.currentId)??null);return T.jsxs("div",{className:"app",children:[T.jsxs("header",{className:"topbar",children:[T.jsx("div",{className:"brand",children:"立面投光设计台"}),T.jsx("nav",{className:"nav",children:hR.map(i=>T.jsx("button",{className:t===i.key?"active":"",onClick:()=>e(i.key),children:i.label},i.key))}),n&&T.jsx("div",{className:"proj-name",children:n.name})]}),T.jsxs("div",{className:"main",children:[t==="projects"&&T.jsx(nM,{}),t==="facade"&&T.jsx(VC,{}),t==="lamps"&&T.jsx(nR,{}),t==="illuminance"&&T.jsx(cR,{}),t==="night"&&T.jsx(uR,{}),t==="settings"&&T.jsx(dR,{})]})]})}ed.createRoot(document.getElementById("root")).render(T.jsx(Wg.StrictMode,{children:T.jsx(fR,{})}));

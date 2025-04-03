(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ru(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Le={},Ss=[],En=()=>{},aE=()=>!1,al=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Pu=t=>t.startsWith("onUpdate:"),It=Object.assign,ku=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lE=Object.prototype.hasOwnProperty,De=(t,e)=>lE.call(t,e),le=Array.isArray,Rs=t=>go(t)==="[object Map]",ll=t=>go(t)==="[object Set]",ef=t=>go(t)==="[object Date]",me=t=>typeof t=="function",tt=t=>typeof t=="string",Cn=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",Mm=t=>(Ue(t)||me(t))&&me(t.then)&&me(t.catch),Fm=Object.prototype.toString,go=t=>Fm.call(t),cE=t=>go(t).slice(8,-1),Um=t=>go(t)==="[object Object]",xu=t=>tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ni=Ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},uE=/-(\w)/g,sn=cl(t=>t.replace(uE,(e,n)=>n?n.toUpperCase():"")),hE=/\B([A-Z])/g,as=cl(t=>t.replace(hE,"-$1").toLowerCase()),ul=cl(t=>t.charAt(0).toUpperCase()+t.slice(1)),hc=cl(t=>t?`on${ul(t)}`:""),yr=(t,e)=>!Object.is(t,e),ua=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Bm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Fc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let tf;const hl=()=>tf||(tf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ou(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=tt(r)?mE(r):Ou(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(tt(t)||Ue(t))return t}const dE=/;(?![^(]*\))/g,fE=/:([^]+)/,pE=/\/\*[^]*?\*\//g;function mE(t){const e={};return t.replace(pE,"").split(dE).forEach(n=>{if(n){const r=n.split(fE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function cn(t){let e="";if(tt(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=cn(t[n]);r&&(e+=r+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_E=Ru(gE);function $m(t){return!!t||t===""}function yE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=dl(t[r],e[r]);return n}function dl(t,e){if(t===e)return!0;let n=ef(t),r=ef(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Cn(t),r=Cn(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?yE(t,e):!1;if(n=Ue(t),r=Ue(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!dl(t[o],e[o]))return!1}}return String(t)===String(e)}function jm(t,e){return t.findIndex(n=>dl(n,e))}const Hm=t=>!!(t&&t.__v_isRef===!0),ze=t=>tt(t)?t:t==null?"":le(t)||Ue(t)&&(t.toString===Fm||!me(t.toString))?Hm(t)?ze(t.value):JSON.stringify(t,qm,2):String(t),qm=(t,e)=>Hm(e)?qm(t,e.value):Rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[dc(r,i)+" =>"]=s,n),{})}:ll(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>dc(n))}:Cn(e)?dc(e):Ue(e)&&!le(e)&&!Um(e)?String(e):e,dc=(t,e="")=>{var n;return Cn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pt;class zm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Wm(t){return new zm(t)}function Km(){return Pt}function wE(t,e=!1){Pt&&Pt.cleanups.push(t)}let Fe;const fc=new WeakSet;class Gm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pt&&Pt.active&&Pt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fc.has(this)&&(fc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ym(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nf(this),Jm(this);const e=Fe,n=un;Fe=this,un=!0;try{return this.fn()}finally{Xm(this),Fe=e,un=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Nu(e);this.deps=this.depsTail=void 0,nf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Uc(this)&&this.run()}get dirty(){return Uc(this)}}let Qm=0,Li,Mi;function Ym(t,e=!1){if(t.flags|=8,e){t.next=Mi,Mi=t;return}t.next=Li,Li=t}function Du(){Qm++}function Vu(){if(--Qm>0)return;if(Mi){let e=Mi;for(Mi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Li;){let e=Li;for(Li=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Jm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Xm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Nu(r),vE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Uc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Zm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Zm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Qi))return;t.globalVersion=Qi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Uc(t)){t.flags&=-3;return}const n=Fe,r=un;Fe=t,un=!0;try{Jm(t);const s=t.fn(t._value);(e.version===0||yr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Fe=n,un=r,Xm(t),t.flags&=-3}}function Nu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Nu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function vE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let un=!0;const eg=[];function Or(){eg.push(un),un=!1}function Dr(){const t=eg.pop();un=t===void 0?!0:t}function nf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Fe;Fe=void 0;try{e()}finally{Fe=n}}}let Qi=0;class EE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Lu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Fe||!un||Fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Fe)n=this.activeLink=new EE(Fe,this),Fe.deps?(n.prevDep=Fe.depsTail,Fe.depsTail.nextDep=n,Fe.depsTail=n):Fe.deps=Fe.depsTail=n,tg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Fe.depsTail,n.nextDep=void 0,Fe.depsTail.nextDep=n,Fe.depsTail=n,Fe.deps===n&&(Fe.deps=r)}return n}trigger(e){this.version++,Qi++,this.notify(e)}notify(e){Du();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Vu()}}}function tg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)tg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ia=new WeakMap,Qr=Symbol(""),Bc=Symbol(""),Yi=Symbol("");function Et(t,e,n){if(un&&Fe){let r=Ia.get(t);r||Ia.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Lu),s.map=r,s.key=n),s.track()}}function Mn(t,e,n,r,s,i){const o=Ia.get(t);if(!o){Qi++;return}const l=c=>{c&&c.trigger()};if(Du(),e==="clear")o.forEach(l);else{const c=le(t),h=c&&xu(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===Yi||!Cn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(Yi)),e){case"add":c?h&&l(o.get("length")):(l(o.get(Qr)),Rs(t)&&l(o.get(Bc)));break;case"delete":c||(l(o.get(Qr)),Rs(t)&&l(o.get(Bc)));break;case"set":Rs(t)&&l(o.get(Qr));break}}Vu()}function bE(t,e){const n=Ia.get(t);return n&&n.get(e)}function ys(t){const e=Pe(t);return e===t?e:(Et(e,"iterate",Yi),tn(t)?e:e.map(bt))}function fl(t){return Et(t=Pe(t),"iterate",Yi),t}const TE={__proto__:null,[Symbol.iterator](){return pc(this,Symbol.iterator,bt)},concat(...t){return ys(this).concat(...t.map(e=>le(e)?ys(e):e))},entries(){return pc(this,"entries",t=>(t[1]=bt(t[1]),t))},every(t,e){return Vn(this,"every",t,e,void 0,arguments)},filter(t,e){return Vn(this,"filter",t,e,n=>n.map(bt),arguments)},find(t,e){return Vn(this,"find",t,e,bt,arguments)},findIndex(t,e){return Vn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Vn(this,"findLast",t,e,bt,arguments)},findLastIndex(t,e){return Vn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Vn(this,"forEach",t,e,void 0,arguments)},includes(...t){return mc(this,"includes",t)},indexOf(...t){return mc(this,"indexOf",t)},join(t){return ys(this).join(t)},lastIndexOf(...t){return mc(this,"lastIndexOf",t)},map(t,e){return Vn(this,"map",t,e,void 0,arguments)},pop(){return Ai(this,"pop")},push(...t){return Ai(this,"push",t)},reduce(t,...e){return rf(this,"reduce",t,e)},reduceRight(t,...e){return rf(this,"reduceRight",t,e)},shift(){return Ai(this,"shift")},some(t,e){return Vn(this,"some",t,e,void 0,arguments)},splice(...t){return Ai(this,"splice",t)},toReversed(){return ys(this).toReversed()},toSorted(t){return ys(this).toSorted(t)},toSpliced(...t){return ys(this).toSpliced(...t)},unshift(...t){return Ai(this,"unshift",t)},values(){return pc(this,"values",bt)}};function pc(t,e,n){const r=fl(t),s=r[e]();return r!==t&&!tn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const IE=Array.prototype;function Vn(t,e,n,r,s,i){const o=fl(t),l=o!==t&&!tn(t),c=o[e];if(c!==IE[e]){const p=c.apply(t,i);return l?bt(p):p}let h=n;o!==t&&(l?h=function(p,m){return n.call(this,bt(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,h,r);return l&&s?s(d):d}function rf(t,e,n,r){const s=fl(t);let i=n;return s!==t&&(tn(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,bt(l),c,t)}),s[e](i,...r)}function mc(t,e,n){const r=Pe(t);Et(r,"iterate",Yi);const s=r[e](...n);return(s===-1||s===!1)&&Uu(n[0])?(n[0]=Pe(n[0]),r[e](...n)):s}function Ai(t,e,n=[]){Or(),Du();const r=Pe(t)[e].apply(t,n);return Vu(),Dr(),r}const AE=Ru("__proto__,__v_isRef,__isVue"),ng=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Cn));function CE(t){Cn(t)||(t=String(t));const e=Pe(this);return Et(e,"has",t),e.hasOwnProperty(t)}class rg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?LE:ag:i?og:ig).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let c;if(o&&(c=TE[n]))return c;if(n==="hasOwnProperty")return CE}const l=Reflect.get(e,n,Je(e)?e:r);return(Cn(n)?ng.has(n):AE(n))||(s||Et(e,"get",n),i)?l:Je(l)?o&&xu(n)?l:l.value:Ue(l)?s?cg(l):_o(l):l}}class sg extends rg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Xr(i);if(!tn(r)&&!Xr(r)&&(i=Pe(i),r=Pe(r)),!le(e)&&Je(i)&&!Je(r))return c?!1:(i.value=r,!0)}const o=le(e)&&xu(n)?Number(n)<e.length:De(e,n),l=Reflect.set(e,n,r,Je(e)?e:s);return e===Pe(s)&&(o?yr(r,i)&&Mn(e,"set",n,r):Mn(e,"add",n,r)),l}deleteProperty(e,n){const r=De(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Mn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Cn(n)||!ng.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",le(e)?"length":Qr),Reflect.ownKeys(e)}}class SE extends rg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const RE=new sg,PE=new SE,kE=new sg(!0);const $c=t=>t,ea=t=>Reflect.getPrototypeOf(t);function xE(t,e,n){return function(...r){const s=this.__v_raw,i=Pe(s),o=Rs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),d=n?$c:e?jc:bt;return!e&&Et(i,"iterate",c?Bc:Qr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function ta(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function OE(t,e){const n={get(s){const i=this.__v_raw,o=Pe(i),l=Pe(s);t||(yr(s,l)&&Et(o,"get",s),Et(o,"get",l));const{has:c}=ea(o),h=e?$c:t?jc:bt;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Et(Pe(s),"iterate",Qr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Pe(i),l=Pe(s);return t||(yr(s,l)&&Et(o,"has",s),Et(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Pe(l),h=e?$c:t?jc:bt;return!t&&Et(c,"iterate",Qr),l.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return It(n,t?{add:ta("add"),set:ta("set"),delete:ta("delete"),clear:ta("clear")}:{add(s){!e&&!tn(s)&&!Xr(s)&&(s=Pe(s));const i=Pe(this);return ea(i).has.call(i,s)||(i.add(s),Mn(i,"add",s,s)),this},set(s,i){!e&&!tn(i)&&!Xr(i)&&(i=Pe(i));const o=Pe(this),{has:l,get:c}=ea(o);let h=l.call(o,s);h||(s=Pe(s),h=l.call(o,s));const d=c.call(o,s);return o.set(s,i),h?yr(i,d)&&Mn(o,"set",s,i):Mn(o,"add",s,i),this},delete(s){const i=Pe(this),{has:o,get:l}=ea(i);let c=o.call(i,s);c||(s=Pe(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&Mn(i,"delete",s,void 0),h},clear(){const s=Pe(this),i=s.size!==0,o=s.clear();return i&&Mn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=xE(s,t,e)}),n}function Mu(t,e){const n=OE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(De(n,s)&&s in r?n:r,s,i)}const DE={get:Mu(!1,!1)},VE={get:Mu(!1,!0)},NE={get:Mu(!0,!1)};const ig=new WeakMap,og=new WeakMap,ag=new WeakMap,LE=new WeakMap;function ME(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function FE(t){return t.__v_skip||!Object.isExtensible(t)?0:ME(cE(t))}function _o(t){return Xr(t)?t:Fu(t,!1,RE,DE,ig)}function lg(t){return Fu(t,!1,kE,VE,og)}function cg(t){return Fu(t,!0,PE,NE,ag)}function Fu(t,e,n,r,s){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=FE(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function wr(t){return Xr(t)?wr(t.__v_raw):!!(t&&t.__v_isReactive)}function Xr(t){return!!(t&&t.__v_isReadonly)}function tn(t){return!!(t&&t.__v_isShallow)}function Uu(t){return t?!!t.__v_raw:!1}function Pe(t){const e=t&&t.__v_raw;return e?Pe(e):t}function Bu(t){return!De(t,"__v_skip")&&Object.isExtensible(t)&&Bm(t,"__v_skip",!0),t}const bt=t=>Ue(t)?_o(t):t,jc=t=>Ue(t)?cg(t):t;function Je(t){return t?t.__v_isRef===!0:!1}function ke(t){return ug(t,!1)}function UE(t){return ug(t,!0)}function ug(t,e){return Je(t)?t:new BE(t,e)}class BE{constructor(e,n){this.dep=new Lu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Pe(e),this._value=n?e:bt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||tn(e)||Xr(e);e=r?e:Pe(e),yr(e,n)&&(this._rawValue=e,this._value=r?e:bt(e),this.dep.trigger())}}function Ps(t){return Je(t)?t.value:t}const $E={get:(t,e,n)=>e==="__v_raw"?t:Ps(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Je(s)&&!Je(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function hg(t){return wr(t)?t:new Proxy(t,$E)}function jE(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=qE(t,n);return e}class HE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return bE(Pe(this._object),this._key)}}function qE(t,e,n){const r=t[e];return Je(r)?r:new HE(t,e,n)}class zE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Lu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Fe!==this)return Ym(this,!0),!0}get value(){const e=this.dep.track();return Zm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function WE(t,e,n=!1){let r,s;return me(t)?r=t:(r=t.get,s=t.set),new zE(r,s,n)}const na={},Aa=new WeakMap;let zr;function KE(t,e=!1,n=zr){if(n){let r=Aa.get(n);r||Aa.set(n,r=[]),r.push(t)}}function GE(t,e,n=Le){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=z=>s?z:tn(z)||s===!1||s===0?Fn(z,1):Fn(z);let d,p,m,_,P=!1,O=!1;if(Je(t)?(p=()=>t.value,P=tn(t)):wr(t)?(p=()=>h(t),P=!0):le(t)?(O=!0,P=t.some(z=>wr(z)||tn(z)),p=()=>t.map(z=>{if(Je(z))return z.value;if(wr(z))return h(z);if(me(z))return c?c(z,2):z()})):me(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Or();try{m()}finally{Dr()}}const z=zr;zr=d;try{return c?c(t,3,[_]):t(_)}finally{zr=z}}:p=En,e&&s){const z=p,ie=s===!0?1/0:s;p=()=>Fn(z(),ie)}const D=Km(),H=()=>{d.stop(),D&&D.active&&ku(D.effects,d)};if(i&&e){const z=e;e=(...ie)=>{z(...ie),H()}}let $=O?new Array(t.length).fill(na):na;const j=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const ie=d.run();if(s||P||(O?ie.some((_e,I)=>yr(_e,$[I])):yr(ie,$))){m&&m();const _e=zr;zr=d;try{const I=[ie,$===na?void 0:O&&$[0]===na?[]:$,_];c?c(e,3,I):e(...I),$=ie}finally{zr=_e}}}else d.run()};return l&&l(j),d=new Gm(p),d.scheduler=o?()=>o(j,!1):j,_=z=>KE(z,!1,d),m=d.onStop=()=>{const z=Aa.get(d);if(z){if(c)c(z,4);else for(const ie of z)ie();Aa.delete(d)}},e?r?j(!0):$=d.run():o?o(j.bind(null,!0),!0):d.run(),H.pause=d.pause.bind(d),H.resume=d.resume.bind(d),H.stop=H,H}function Fn(t,e=1/0,n){if(e<=0||!Ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Je(t))Fn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)Fn(t[r],e,n);else if(ll(t)||Rs(t))t.forEach(r=>{Fn(r,e,n)});else if(Um(t)){for(const r in t)Fn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Fn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yo(t,e,n,r){try{return r?t(...r):t()}catch(s){pl(s,e,n)}}function Sn(t,e,n,r){if(me(t)){const s=yo(t,e,n,r);return s&&Mm(s)&&s.catch(i=>{pl(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Sn(t[i],e,n,r));return s}}function pl(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Le;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){Or(),yo(i,null,10,[t,c,h]),Dr();return}}QE(t,n,s,r,o)}function QE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const kt=[];let _n=-1;const ks=[];let lr=null,vs=0;const dg=Promise.resolve();let Ca=null;function $u(t){const e=Ca||dg;return t?e.then(this?t.bind(this):t):e}function YE(t){let e=_n+1,n=kt.length;for(;e<n;){const r=e+n>>>1,s=kt[r],i=Ji(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ju(t){if(!(t.flags&1)){const e=Ji(t),n=kt[kt.length-1];!n||!(t.flags&2)&&e>=Ji(n)?kt.push(t):kt.splice(YE(e),0,t),t.flags|=1,fg()}}function fg(){Ca||(Ca=dg.then(mg))}function JE(t){le(t)?ks.push(...t):lr&&t.id===-1?lr.splice(vs+1,0,t):t.flags&1||(ks.push(t),t.flags|=1),fg()}function sf(t,e,n=_n+1){for(;n<kt.length;n++){const r=kt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;kt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function pg(t){if(ks.length){const e=[...new Set(ks)].sort((n,r)=>Ji(n)-Ji(r));if(ks.length=0,lr){lr.push(...e);return}for(lr=e,vs=0;vs<lr.length;vs++){const n=lr[vs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}lr=null,vs=0}}const Ji=t=>t.id==null?t.flags&2?-1:1/0:t.id;function mg(t){try{for(_n=0;_n<kt.length;_n++){const e=kt[_n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),yo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;_n<kt.length;_n++){const e=kt[_n];e&&(e.flags&=-2)}_n=-1,kt.length=0,pg(),Ca=null,(kt.length||ks.length)&&mg()}}let Bt=null,gg=null;function Sa(t){const e=Bt;return Bt=t,gg=t&&t.type.__scopeId||null,e}function Xi(t,e=Bt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&mf(-1);const i=Sa(e);let o;try{o=t(...s)}finally{Sa(i),r._d&&mf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function jn(t,e){if(Bt===null)return t;const n=yl(Bt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Le]=e[s];i&&(me(i)&&(i={mounted:i,updated:i}),i.deep&&Fn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function jr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Or(),Sn(c,n,8,[t.el,l,t,e]),Dr())}}const XE=Symbol("_vte"),ZE=t=>t.__isTeleport;function Hu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Hu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function _g(t,e){return me(t)?It({name:t.name},e,{setup:t}):t}function yg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ra(t,e,n,r,s=!1){if(le(t)){t.forEach((P,O)=>Ra(P,e&&(le(e)?e[O]:e),n,r,s));return}if(Fi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ra(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?yl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Le?l.refs={}:l.refs,p=l.setupState,m=Pe(p),_=p===Le?()=>!1:P=>De(m,P);if(h!=null&&h!==c&&(tt(h)?(d[h]=null,_(h)&&(p[h]=null)):Je(h)&&(h.value=null)),me(c))yo(c,l,12,[o,d]);else{const P=tt(c),O=Je(c);if(P||O){const D=()=>{if(t.f){const H=P?_(c)?p[c]:d[c]:c.value;s?le(H)&&ku(H,i):le(H)?H.includes(i)||H.push(i):P?(d[c]=[i],_(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else P?(d[c]=o,_(c)&&(p[c]=o)):O&&(c.value=o,t.k&&(d[t.k]=o))};o?(D.id=-1,qt(D,n)):D()}}}hl().requestIdleCallback;hl().cancelIdleCallback;const Fi=t=>!!t.type.__asyncLoader,wg=t=>t.type.__isKeepAlive;function eb(t,e){vg(t,"a",e)}function tb(t,e){vg(t,"da",e)}function vg(t,e,n=dt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ml(e,r,n),n){let s=n.parent;for(;s&&s.parent;)wg(s.parent.vnode)&&nb(r,e,n,s),s=s.parent}}function nb(t,e,n,r){const s=ml(e,t,r,!0);Eg(()=>{ku(r[e],s)},n)}function ml(t,e,n=dt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Or();const l=wo(n),c=Sn(e,n,t,o);return l(),Dr(),c});return r?s.unshift(i):s.push(i),i}}const Xn=t=>(e,n=dt)=>{(!eo||t==="sp")&&ml(t,(...r)=>e(...r),n)},rb=Xn("bm"),ls=Xn("m"),sb=Xn("bu"),ib=Xn("u"),ob=Xn("bum"),Eg=Xn("um"),ab=Xn("sp"),lb=Xn("rtg"),cb=Xn("rtc");function ub(t,e=dt){ml("ec",t,e)}const hb="components";function qu(t,e){return fb(hb,t,!0,e)||t}const db=Symbol.for("v-ndc");function fb(t,e,n=!0,r=!1){const s=Bt||dt;if(s){const i=s.type;{const l=tT(i,!1);if(l&&(l===e||l===sn(e)||l===ul(sn(e))))return i}const o=of(s[t]||i[t],e)||of(s.appContext[t],e);return!o&&r?i:o}}function of(t,e){return t&&(t[e]||t[sn(e)]||t[ul(sn(e))])}function zu(t,e,n,r){let s;const i=n,o=le(t);if(o||tt(t)){const l=o&&wr(t);let c=!1;l&&(c=!tn(t),t=fl(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(c?bt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ue(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const Hc=t=>t?$g(t)?yl(t):Hc(t.parent):null,Ui=It(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Hc(t.parent),$root:t=>Hc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Tg(t),$forceUpdate:t=>t.f||(t.f=()=>{ju(t.update)}),$nextTick:t=>t.n||(t.n=$u.bind(t.proxy)),$watch:t=>Lb.bind(t)}),gc=(t,e)=>t!==Le&&!t.__isScriptSetup&&De(t,e),pb={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(gc(r,e))return o[e]=1,r[e];if(s!==Le&&De(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&De(h,e))return o[e]=3,i[e];if(n!==Le&&De(n,e))return o[e]=4,n[e];qc&&(o[e]=0)}}const d=Ui[e];let p,m;if(d)return e==="$attrs"&&Et(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Le&&De(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,De(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return gc(s,e)?(s[e]=n,!0):r!==Le&&De(r,e)?(r[e]=n,!0):De(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Le&&De(t,o)||gc(e,o)||(l=i[0])&&De(l,o)||De(r,o)||De(Ui,o)||De(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:De(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function af(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let qc=!0;function mb(t){const e=Tg(t),n=t.proxy,r=t.ctx;qc=!1,e.beforeCreate&&lf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:P,activated:O,deactivated:D,beforeDestroy:H,beforeUnmount:$,destroyed:j,unmounted:z,render:ie,renderTracked:_e,renderTriggered:I,errorCaptured:y,serverPrefetch:w,expose:T,inheritAttrs:A,components:C,directives:E,filters:at}=e;if(h&&gb(h,r,null),o)for(const de in o){const we=o[de];me(we)&&(r[de]=we.bind(n))}if(s){const de=s.call(n,n);Ue(de)&&(t.data=_o(de))}if(qc=!0,i)for(const de in i){const we=i[de],jt=me(we)?we.bind(n,n):me(we.get)?we.get.bind(n,n):En,an=!me(we)&&me(we.set)?we.set.bind(n):En,Jt=xt({get:jt,set:an});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>Jt.value,set:He=>Jt.value=He})}if(l)for(const de in l)bg(l[de],r,n,de);if(c){const de=me(c)?c.call(n):c;Reflect.ownKeys(de).forEach(we=>{ha(we,de[we])})}d&&lf(d,t,"c");function Me(de,we){le(we)?we.forEach(jt=>de(jt.bind(n))):we&&de(we.bind(n))}if(Me(rb,p),Me(ls,m),Me(sb,_),Me(ib,P),Me(eb,O),Me(tb,D),Me(ub,y),Me(cb,_e),Me(lb,I),Me(ob,$),Me(Eg,z),Me(ab,w),le(T))if(T.length){const de=t.exposed||(t.exposed={});T.forEach(we=>{Object.defineProperty(de,we,{get:()=>n[we],set:jt=>n[we]=jt})})}else t.exposed||(t.exposed={});ie&&t.render===En&&(t.render=ie),A!=null&&(t.inheritAttrs=A),C&&(t.components=C),E&&(t.directives=E),w&&yg(t)}function gb(t,e,n=En){le(t)&&(t=zc(t));for(const r in t){const s=t[r];let i;Ue(s)?"default"in s?i=nn(s.from||r,s.default,!0):i=nn(s.from||r):i=nn(s),Je(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function lf(t,e,n){Sn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function bg(t,e,n,r){let s=r.includes(".")?Lg(n,r):()=>n[r];if(tt(t)){const i=e[t];me(i)&&xs(s,i)}else if(me(t))xs(s,t.bind(n));else if(Ue(t))if(le(t))t.forEach(i=>bg(i,e,n,r));else{const i=me(t.handler)?t.handler.bind(n):e[t.handler];me(i)&&xs(s,i,t)}}function Tg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Pa(c,h,o,!0)),Pa(c,e,o)),Ue(e)&&i.set(e,c),c}function Pa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Pa(t,i,n,!0),s&&s.forEach(o=>Pa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=_b[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const _b={data:cf,props:uf,emits:uf,methods:Ri,computed:Ri,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Ri,directives:Ri,watch:wb,provide:cf,inject:yb};function cf(t,e){return e?t?function(){return It(me(t)?t.call(this,this):t,me(e)?e.call(this,this):e)}:e:t}function yb(t,e){return Ri(zc(t),zc(e))}function zc(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ri(t,e){return t?It(Object.create(null),t,e):e}function uf(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:It(Object.create(null),af(t),af(e??{})):e}function wb(t,e){if(!t)return e;if(!e)return t;const n=It(Object.create(null),t);for(const r in e)n[r]=Rt(t[r],e[r]);return n}function Ig(){return{app:null,config:{isNativeTag:aE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vb=0;function Eb(t,e){return function(r,s=null){me(r)||(r=It({},r)),s!=null&&!Ue(s)&&(s=null);const i=Ig(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:vb++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:rT,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&me(d.install)?(o.add(d),d.install(h,...p)):me(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!c){const _=h._ceVNode||We(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,d,m),c=!0,h._container=d,d.__vue_app__=h,yl(_.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Sn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Yr;Yr=h;try{return d()}finally{Yr=p}}};return h}}let Yr=null;function ha(t,e){if(dt){let n=dt.provides;const r=dt.parent&&dt.parent.provides;r===n&&(n=dt.provides=Object.create(r)),n[t]=e}}function nn(t,e,n=!1){const r=dt||Bt;if(r||Yr){const s=Yr?Yr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&me(e)?e.call(r&&r.proxy):e}}function bb(){return!!(dt||Bt||Yr)}const Ag={},Cg=()=>Object.create(Ag),Sg=t=>Object.getPrototypeOf(t)===Ag;function Tb(t,e,n,r=!1){const s={},i=Cg();t.propsDefaults=Object.create(null),Rg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:lg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ib(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Pe(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(gl(t.emitsOptions,m))continue;const _=e[m];if(c)if(De(i,m))_!==i[m]&&(i[m]=_,h=!0);else{const P=sn(m);s[P]=Wc(c,l,P,_,t,!1)}else _!==i[m]&&(i[m]=_,h=!0)}}}else{Rg(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!De(e,p)&&((d=as(p))===p||!De(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Wc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!De(e,p))&&(delete i[p],h=!0)}h&&Mn(t.attrs,"set","")}function Rg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ni(c))continue;const h=e[c];let d;s&&De(s,d=sn(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:gl(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=Pe(n),h=l||Le;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Wc(s,c,p,h[p],t,!De(h,p))}}return o}function Wc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=De(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&me(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=wo(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===as(n))&&(r=!0))}return r}const Ab=new WeakMap;function Pg(t,e,n=!1){const r=n?Ab:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!me(t)){const d=p=>{c=!0;const[m,_]=Pg(p,e,!0);It(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Ue(t)&&r.set(t,Ss),Ss;if(le(i))for(let d=0;d<i.length;d++){const p=sn(i[d]);hf(p)&&(o[p]=Le)}else if(i)for(const d in i){const p=sn(d);if(hf(p)){const m=i[d],_=o[p]=le(m)||me(m)?{type:m}:It({},m),P=_.type;let O=!1,D=!0;if(le(P))for(let H=0;H<P.length;++H){const $=P[H],j=me($)&&$.name;if(j==="Boolean"){O=!0;break}else j==="String"&&(D=!1)}else O=me(P)&&P.name==="Boolean";_[0]=O,_[1]=D,(O||De(_,"default"))&&l.push(p)}}const h=[o,l];return Ue(t)&&r.set(t,h),h}function hf(t){return t[0]!=="$"&&!Ni(t)}const kg=t=>t[0]==="_"||t==="$stable",Wu=t=>le(t)?t.map(vn):[vn(t)],Cb=(t,e,n)=>{if(e._n)return e;const r=Xi((...s)=>Wu(e(...s)),n);return r._c=!1,r},xg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(kg(s))continue;const i=t[s];if(me(i))e[s]=Cb(s,i,r);else if(i!=null){const o=Wu(i);e[s]=()=>o}}},Og=(t,e)=>{const n=Wu(e);t.slots.default=()=>n},Dg=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Sb=(t,e,n)=>{const r=t.slots=Cg();if(t.vnode.shapeFlag&32){const s=e._;s?(Dg(r,e,n),n&&Bm(r,"_",s,!0)):xg(e,r)}else e&&Og(t,e)},Rb=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Le;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Dg(s,e,n):(i=!e.$stable,xg(e,s)),o=e}else e&&(Og(t,e),o={default:1});if(i)for(const l in s)!kg(l)&&o[l]==null&&delete s[l]},qt=Hb;function Pb(t){return kb(t)}function kb(t,e){const n=hl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=En,insertStaticContent:P}=t,O=(v,b,S,N=null,U=null,L=null,G=void 0,W=null,q=!!b.dynamicChildren)=>{if(v===b)return;v&&!Ci(v,b)&&(N=V(v),He(v,U,L,!0),v=null),b.patchFlag===-2&&(q=!1,b.dynamicChildren=null);const{type:B,ref:oe,shapeFlag:Y}=b;switch(B){case _l:D(v,b,S,N);break;case Zr:H(v,b,S,N);break;case yc:v==null&&$(b,S,N,G);break;case Ft:C(v,b,S,N,U,L,G,W,q);break;default:Y&1?ie(v,b,S,N,U,L,G,W,q):Y&6?E(v,b,S,N,U,L,G,W,q):(Y&64||Y&128)&&B.process(v,b,S,N,U,L,G,W,q,ee)}oe!=null&&U&&Ra(oe,v&&v.ref,L,b||v,!b)},D=(v,b,S,N)=>{if(v==null)r(b.el=l(b.children),S,N);else{const U=b.el=v.el;b.children!==v.children&&h(U,b.children)}},H=(v,b,S,N)=>{v==null?r(b.el=c(b.children||""),S,N):b.el=v.el},$=(v,b,S,N)=>{[v.el,v.anchor]=P(v.children,b,S,N,v.el,v.anchor)},j=({el:v,anchor:b},S,N)=>{let U;for(;v&&v!==b;)U=m(v),r(v,S,N),v=U;r(b,S,N)},z=({el:v,anchor:b})=>{let S;for(;v&&v!==b;)S=m(v),s(v),v=S;s(b)},ie=(v,b,S,N,U,L,G,W,q)=>{b.type==="svg"?G="svg":b.type==="math"&&(G="mathml"),v==null?_e(b,S,N,U,L,G,W,q):w(v,b,U,L,G,W,q)},_e=(v,b,S,N,U,L,G,W)=>{let q,B;const{props:oe,shapeFlag:Y,transition:ne,dirs:ue}=v;if(q=v.el=o(v.type,L,oe&&oe.is,oe),Y&8?d(q,v.children):Y&16&&y(v.children,q,null,N,U,_c(v,L),G,W),ue&&jr(v,null,N,"created"),I(q,v,v.scopeId,G,N),oe){for(const ge in oe)ge!=="value"&&!Ni(ge)&&i(q,ge,null,oe[ge],L,N);"value"in oe&&i(q,"value",null,oe.value,L),(B=oe.onVnodeBeforeMount)&&gn(B,N,v)}ue&&jr(v,null,N,"beforeMount");const ae=xb(U,ne);ae&&ne.beforeEnter(q),r(q,b,S),((B=oe&&oe.onVnodeMounted)||ae||ue)&&qt(()=>{B&&gn(B,N,v),ae&&ne.enter(q),ue&&jr(v,null,N,"mounted")},U)},I=(v,b,S,N,U)=>{if(S&&_(v,S),N)for(let L=0;L<N.length;L++)_(v,N[L]);if(U){let L=U.subTree;if(b===L||Fg(L.type)&&(L.ssContent===b||L.ssFallback===b)){const G=U.vnode;I(v,G,G.scopeId,G.slotScopeIds,U.parent)}}},y=(v,b,S,N,U,L,G,W,q=0)=>{for(let B=q;B<v.length;B++){const oe=v[B]=W?cr(v[B]):vn(v[B]);O(null,oe,b,S,N,U,L,G,W)}},w=(v,b,S,N,U,L,G)=>{const W=b.el=v.el;let{patchFlag:q,dynamicChildren:B,dirs:oe}=b;q|=v.patchFlag&16;const Y=v.props||Le,ne=b.props||Le;let ue;if(S&&Hr(S,!1),(ue=ne.onVnodeBeforeUpdate)&&gn(ue,S,b,v),oe&&jr(b,v,S,"beforeUpdate"),S&&Hr(S,!0),(Y.innerHTML&&ne.innerHTML==null||Y.textContent&&ne.textContent==null)&&d(W,""),B?T(v.dynamicChildren,B,W,S,N,_c(b,U),L):G||we(v,b,W,null,S,N,_c(b,U),L,!1),q>0){if(q&16)A(W,Y,ne,S,U);else if(q&2&&Y.class!==ne.class&&i(W,"class",null,ne.class,U),q&4&&i(W,"style",Y.style,ne.style,U),q&8){const ae=b.dynamicProps;for(let ge=0;ge<ae.length;ge++){const Te=ae[ge],mt=Y[Te],lt=ne[Te];(lt!==mt||Te==="value")&&i(W,Te,mt,lt,U,S)}}q&1&&v.children!==b.children&&d(W,b.children)}else!G&&B==null&&A(W,Y,ne,S,U);((ue=ne.onVnodeUpdated)||oe)&&qt(()=>{ue&&gn(ue,S,b,v),oe&&jr(b,v,S,"updated")},N)},T=(v,b,S,N,U,L,G)=>{for(let W=0;W<b.length;W++){const q=v[W],B=b[W],oe=q.el&&(q.type===Ft||!Ci(q,B)||q.shapeFlag&70)?p(q.el):S;O(q,B,oe,null,N,U,L,G,!0)}},A=(v,b,S,N,U)=>{if(b!==S){if(b!==Le)for(const L in b)!Ni(L)&&!(L in S)&&i(v,L,b[L],null,U,N);for(const L in S){if(Ni(L))continue;const G=S[L],W=b[L];G!==W&&L!=="value"&&i(v,L,W,G,U,N)}"value"in S&&i(v,"value",b.value,S.value,U)}},C=(v,b,S,N,U,L,G,W,q)=>{const B=b.el=v?v.el:l(""),oe=b.anchor=v?v.anchor:l("");let{patchFlag:Y,dynamicChildren:ne,slotScopeIds:ue}=b;ue&&(W=W?W.concat(ue):ue),v==null?(r(B,S,N),r(oe,S,N),y(b.children||[],S,oe,U,L,G,W,q)):Y>0&&Y&64&&ne&&v.dynamicChildren?(T(v.dynamicChildren,ne,S,U,L,G,W),(b.key!=null||U&&b===U.subTree)&&Vg(v,b,!0)):we(v,b,S,oe,U,L,G,W,q)},E=(v,b,S,N,U,L,G,W,q)=>{b.slotScopeIds=W,v==null?b.shapeFlag&512?U.ctx.activate(b,S,N,G,q):at(b,S,N,U,L,G,q):Nt(v,b,q)},at=(v,b,S,N,U,L,G)=>{const W=v.component=Yb(v,N,U);if(wg(v)&&(W.ctx.renderer=ee),Jb(W,!1,G),W.asyncDep){if(U&&U.registerDep(W,Me,G),!v.el){const q=W.subTree=We(Zr);H(null,q,b,S)}}else Me(W,v,b,S,U,L,G)},Nt=(v,b,S)=>{const N=b.component=v.component;if($b(v,b,S))if(N.asyncDep&&!N.asyncResolved){de(N,b,S);return}else N.next=b,N.update();else b.el=v.el,N.vnode=b},Me=(v,b,S,N,U,L,G)=>{const W=()=>{if(v.isMounted){let{next:Y,bu:ne,u:ue,parent:ae,vnode:ge}=v;{const gt=Ng(v);if(gt){Y&&(Y.el=ge.el,de(v,Y,G)),gt.asyncDep.then(()=>{v.isUnmounted||W()});return}}let Te=Y,mt;Hr(v,!1),Y?(Y.el=ge.el,de(v,Y,G)):Y=ge,ne&&ua(ne),(mt=Y.props&&Y.props.onVnodeBeforeUpdate)&&gn(mt,ae,Y,ge),Hr(v,!0);const lt=ff(v),Xt=v.subTree;v.subTree=lt,O(Xt,lt,p(Xt.el),V(Xt),v,U,L),Y.el=lt.el,Te===null&&jb(v,lt.el),ue&&qt(ue,U),(mt=Y.props&&Y.props.onVnodeUpdated)&&qt(()=>gn(mt,ae,Y,ge),U)}else{let Y;const{el:ne,props:ue}=b,{bm:ae,m:ge,parent:Te,root:mt,type:lt}=v,Xt=Fi(b);Hr(v,!1),ae&&ua(ae),!Xt&&(Y=ue&&ue.onVnodeBeforeMount)&&gn(Y,Te,b),Hr(v,!0);{mt.ce&&mt.ce._injectChildStyle(lt);const gt=v.subTree=ff(v);O(null,gt,S,N,v,U,L),b.el=gt.el}if(ge&&qt(ge,U),!Xt&&(Y=ue&&ue.onVnodeMounted)){const gt=b;qt(()=>gn(Y,Te,gt),U)}(b.shapeFlag&256||Te&&Fi(Te.vnode)&&Te.vnode.shapeFlag&256)&&v.a&&qt(v.a,U),v.isMounted=!0,b=S=N=null}};v.scope.on();const q=v.effect=new Gm(W);v.scope.off();const B=v.update=q.run.bind(q),oe=v.job=q.runIfDirty.bind(q);oe.i=v,oe.id=v.uid,q.scheduler=()=>ju(oe),Hr(v,!0),B()},de=(v,b,S)=>{b.component=v;const N=v.vnode.props;v.vnode=b,v.next=null,Ib(v,b.props,N,S),Rb(v,b.children,S),Or(),sf(v),Dr()},we=(v,b,S,N,U,L,G,W,q=!1)=>{const B=v&&v.children,oe=v?v.shapeFlag:0,Y=b.children,{patchFlag:ne,shapeFlag:ue}=b;if(ne>0){if(ne&128){an(B,Y,S,N,U,L,G,W,q);return}else if(ne&256){jt(B,Y,S,N,U,L,G,W,q);return}}ue&8?(oe&16&&Lt(B,U,L),Y!==B&&d(S,Y)):oe&16?ue&16?an(B,Y,S,N,U,L,G,W,q):Lt(B,U,L,!0):(oe&8&&d(S,""),ue&16&&y(Y,S,N,U,L,G,W,q))},jt=(v,b,S,N,U,L,G,W,q)=>{v=v||Ss,b=b||Ss;const B=v.length,oe=b.length,Y=Math.min(B,oe);let ne;for(ne=0;ne<Y;ne++){const ue=b[ne]=q?cr(b[ne]):vn(b[ne]);O(v[ne],ue,S,null,U,L,G,W,q)}B>oe?Lt(v,U,L,!0,!1,Y):y(b,S,N,U,L,G,W,q,Y)},an=(v,b,S,N,U,L,G,W,q)=>{let B=0;const oe=b.length;let Y=v.length-1,ne=oe-1;for(;B<=Y&&B<=ne;){const ue=v[B],ae=b[B]=q?cr(b[B]):vn(b[B]);if(Ci(ue,ae))O(ue,ae,S,null,U,L,G,W,q);else break;B++}for(;B<=Y&&B<=ne;){const ue=v[Y],ae=b[ne]=q?cr(b[ne]):vn(b[ne]);if(Ci(ue,ae))O(ue,ae,S,null,U,L,G,W,q);else break;Y--,ne--}if(B>Y){if(B<=ne){const ue=ne+1,ae=ue<oe?b[ue].el:N;for(;B<=ne;)O(null,b[B]=q?cr(b[B]):vn(b[B]),S,ae,U,L,G,W,q),B++}}else if(B>ne)for(;B<=Y;)He(v[B],U,L,!0),B++;else{const ue=B,ae=B,ge=new Map;for(B=ae;B<=ne;B++){const ct=b[B]=q?cr(b[B]):vn(b[B]);ct.key!=null&&ge.set(ct.key,B)}let Te,mt=0;const lt=ne-ae+1;let Xt=!1,gt=0;const tr=new Array(lt);for(B=0;B<lt;B++)tr[B]=0;for(B=ue;B<=Y;B++){const ct=v[B];if(mt>=lt){He(ct,U,L,!0);continue}let Zt;if(ct.key!=null)Zt=ge.get(ct.key);else for(Te=ae;Te<=ne;Te++)if(tr[Te-ae]===0&&Ci(ct,b[Te])){Zt=Te;break}Zt===void 0?He(ct,U,L,!0):(tr[Zt-ae]=B+1,Zt>=gt?gt=Zt:Xt=!0,O(ct,b[Zt],S,null,U,L,G,W,q),mt++)}const di=Xt?Ob(tr):Ss;for(Te=di.length-1,B=lt-1;B>=0;B--){const ct=ae+B,Zt=b[ct],Fo=ct+1<oe?b[ct+1].el:N;tr[B]===0?O(null,Zt,S,Fo,U,L,G,W,q):Xt&&(Te<0||B!==di[Te]?Jt(Zt,S,Fo,2):Te--)}}},Jt=(v,b,S,N,U=null)=>{const{el:L,type:G,transition:W,children:q,shapeFlag:B}=v;if(B&6){Jt(v.component.subTree,b,S,N);return}if(B&128){v.suspense.move(b,S,N);return}if(B&64){G.move(v,b,S,ee);return}if(G===Ft){r(L,b,S);for(let Y=0;Y<q.length;Y++)Jt(q[Y],b,S,N);r(v.anchor,b,S);return}if(G===yc){j(v,b,S);return}if(N!==2&&B&1&&W)if(N===0)W.beforeEnter(L),r(L,b,S),qt(()=>W.enter(L),U);else{const{leave:Y,delayLeave:ne,afterLeave:ue}=W,ae=()=>r(L,b,S),ge=()=>{Y(L,()=>{ae(),ue&&ue()})};ne?ne(L,ae,ge):ge()}else r(L,b,S)},He=(v,b,S,N=!1,U=!1)=>{const{type:L,props:G,ref:W,children:q,dynamicChildren:B,shapeFlag:oe,patchFlag:Y,dirs:ne,cacheIndex:ue}=v;if(Y===-2&&(U=!1),W!=null&&Ra(W,null,S,v,!0),ue!=null&&(b.renderCache[ue]=void 0),oe&256){b.ctx.deactivate(v);return}const ae=oe&1&&ne,ge=!Fi(v);let Te;if(ge&&(Te=G&&G.onVnodeBeforeUnmount)&&gn(Te,b,v),oe&6)mn(v.component,S,N);else{if(oe&128){v.suspense.unmount(S,N);return}ae&&jr(v,null,b,"beforeUnmount"),oe&64?v.type.remove(v,b,S,ee,N):B&&!B.hasOnce&&(L!==Ft||Y>0&&Y&64)?Lt(B,b,S,!1,!0):(L===Ft&&Y&384||!U&&oe&16)&&Lt(q,b,S),N&&qe(v)}(ge&&(Te=G&&G.onVnodeUnmounted)||ae)&&qt(()=>{Te&&gn(Te,b,v),ae&&jr(v,null,b,"unmounted")},S)},qe=v=>{const{type:b,el:S,anchor:N,transition:U}=v;if(b===Ft){er(S,N);return}if(b===yc){z(v);return}const L=()=>{s(S),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(v.shapeFlag&1&&U&&!U.persisted){const{leave:G,delayLeave:W}=U,q=()=>G(S,L);W?W(v.el,L,q):q()}else L()},er=(v,b)=>{let S;for(;v!==b;)S=m(v),s(v),v=S;s(b)},mn=(v,b,S)=>{const{bum:N,scope:U,job:L,subTree:G,um:W,m:q,a:B}=v;df(q),df(B),N&&ua(N),U.stop(),L&&(L.flags|=8,He(G,v,b,S)),W&&qt(W,b),qt(()=>{v.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},Lt=(v,b,S,N=!1,U=!1,L=0)=>{for(let G=L;G<v.length;G++)He(v[G],b,S,N,U)},V=v=>{if(v.shapeFlag&6)return V(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const b=m(v.anchor||v.el),S=b&&b[XE];return S?m(S):b};let J=!1;const Q=(v,b,S)=>{v==null?b._vnode&&He(b._vnode,null,null,!0):O(b._vnode||null,v,b,null,null,null,S),b._vnode=v,J||(J=!0,sf(),pg(),J=!1)},ee={p:O,um:He,m:Jt,r:qe,mt:at,mc:y,pc:we,pbc:T,n:V,o:t};return{render:Q,hydrate:void 0,createApp:Eb(Q)}}function _c({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Hr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function xb(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Vg(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=cr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Vg(o,l)),l.type===_l&&(l.el=o.el)}}function Ob(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ng(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ng(e)}function df(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Db=Symbol.for("v-scx"),Vb=()=>nn(Db);function Nb(t,e){return Ku(t,null,e)}function xs(t,e,n){return Ku(t,e,n)}function Ku(t,e,n=Le){const{immediate:r,deep:s,flush:i,once:o}=n,l=It({},n),c=e&&r||!e&&i!=="post";let h;if(eo){if(i==="sync"){const _=Vb();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=En,_.resume=En,_.pause=En,_}}const d=dt;l.call=(_,P,O)=>Sn(_,d,P,O);let p=!1;i==="post"?l.scheduler=_=>{qt(_,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,P)=>{P?_():ju(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=GE(t,e,l);return eo&&(h?h.push(m):c&&m()),m}function Lb(t,e,n){const r=this.proxy,s=tt(t)?t.includes(".")?Lg(r,t):()=>r[t]:t.bind(r,r);let i;me(e)?i=e:(i=e.handler,n=e);const o=wo(this),l=Ku(s,i.bind(r),n);return o(),l}function Lg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Mb=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${sn(e)}Modifiers`]||t[`${as(e)}Modifiers`];function Fb(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Le;let s=n;const i=e.startsWith("update:"),o=i&&Mb(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>tt(d)?d.trim():d)),o.number&&(s=n.map(Fc)));let l,c=r[l=hc(e)]||r[l=hc(sn(e))];!c&&i&&(c=r[l=hc(as(e))]),c&&Sn(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Sn(h,t,6,s)}}function Mg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!me(t)){const c=h=>{const d=Mg(h,e,!0);d&&(l=!0,It(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ue(t)&&r.set(t,null),null):(le(i)?i.forEach(c=>o[c]=null):It(o,i),Ue(t)&&r.set(t,o),o)}function gl(t,e){return!t||!al(e)?!1:(e=e.slice(2).replace(/Once$/,""),De(t,e[0].toLowerCase()+e.slice(1))||De(t,as(e))||De(t,e))}function ff(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:d,props:p,data:m,setupState:_,ctx:P,inheritAttrs:O}=t,D=Sa(t);let H,$;try{if(n.shapeFlag&4){const z=s||r,ie=z;H=vn(h.call(ie,z,d,p,_,m,P)),$=l}else{const z=e;H=vn(z.length>1?z(p,{attrs:l,slots:o,emit:c}):z(p,null)),$=e.props?l:Ub(l)}}catch(z){Bi.length=0,pl(z,t,1),H=We(Zr)}let j=H;if($&&O!==!1){const z=Object.keys($),{shapeFlag:ie}=j;z.length&&ie&7&&(i&&z.some(Pu)&&($=Bb($,i)),j=Bs(j,$,!1,!0))}return n.dirs&&(j=Bs(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&Hu(j,n.transition),H=j,Sa(D),H}const Ub=t=>{let e;for(const n in t)(n==="class"||n==="style"||al(n))&&((e||(e={}))[n]=t[n]);return e},Bb=(t,e)=>{const n={};for(const r in t)(!Pu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function $b(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?pf(r,o,h):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!gl(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?pf(r,o,h):!0:!!o;return!1}function pf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!gl(n,i))return!0}return!1}function jb({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Fg=t=>t.__isSuspense;function Hb(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):JE(t)}const Ft=Symbol.for("v-fgt"),_l=Symbol.for("v-txt"),Zr=Symbol.for("v-cmt"),yc=Symbol.for("v-stc"),Bi=[];let zt=null;function ye(t=!1){Bi.push(zt=t?null:[])}function qb(){Bi.pop(),zt=Bi[Bi.length-1]||null}let Zi=1;function mf(t,e=!1){Zi+=t,t<0&&zt&&e&&(zt.hasOnce=!0)}function Ug(t){return t.dynamicChildren=Zi>0?zt||Ss:null,qb(),Zi>0&&zt&&zt.push(t),t}function Ae(t,e,n,r,s,i){return Ug(te(t,e,n,r,s,i,!0))}function ka(t,e,n,r,s){return Ug(We(t,e,n,r,s,!0))}function xa(t){return t?t.__v_isVNode===!0:!1}function Ci(t,e){return t.type===e.type&&t.key===e.key}const Bg=({key:t})=>t??null,da=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?tt(t)||Je(t)||me(t)?{i:Bt,r:t,k:e,f:!!n}:t:null);function te(t,e=null,n=null,r=0,s=null,i=t===Ft?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bg(e),ref:e&&da(e),scopeId:gg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Bt};return l?(Gu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=tt(n)?8:16),Zi>0&&!o&&zt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&zt.push(c),c}const We=zb;function zb(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===db)&&(t=Zr),xa(t)){const l=Bs(t,e,!0);return n&&Gu(l,n),Zi>0&&!i&&zt&&(l.shapeFlag&6?zt[zt.indexOf(t)]=l:zt.push(l)),l.patchFlag=-2,l}if(nT(t)&&(t=t.__vccOpts),e){e=Wb(e);let{class:l,style:c}=e;l&&!tt(l)&&(e.class=cn(l)),Ue(c)&&(Uu(c)&&!le(c)&&(c=It({},c)),e.style=Ou(c))}const o=tt(t)?1:Fg(t)?128:ZE(t)?64:Ue(t)?4:me(t)?2:0;return te(t,e,n,r,s,o,i,!0)}function Wb(t){return t?Uu(t)||Sg(t)?It({},t):t:null}function Bs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?Kb(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Bg(h),ref:e&&e.ref?n&&i?le(i)?i.concat(da(e)):[i,da(e)]:da(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ft?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bs(t.ssContent),ssFallback:t.ssFallback&&Bs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Hu(d,c.clone(d)),d}function $s(t=" ",e=0){return We(_l,null,t,e)}function Wn(t="",e=!1){return e?(ye(),ka(Zr,null,t)):We(Zr,null,t)}function vn(t){return t==null||typeof t=="boolean"?We(Zr):le(t)?We(Ft,null,t.slice()):xa(t)?cr(t):We(_l,null,String(t))}function cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bs(t)}function Gu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Gu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Sg(e)?e._ctx=Bt:s===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:Bt},n=32):(e=String(e),r&64?(n=16,e=[$s(e)]):n=8);t.children=e,t.shapeFlag|=n}function Kb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=cn([e.class,r.class]));else if(s==="style")e.style=Ou([e.style,r.style]);else if(al(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function gn(t,e,n,r=null){Sn(t,e,7,[n,r])}const Gb=Ig();let Qb=0;function Yb(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Gb,i={uid:Qb++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pg(r,s),emitsOptions:Mg(r,s),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:r.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Fb.bind(null,i),t.ce&&t.ce(i),i}let dt=null,Oa,Kc;{const t=hl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Oa=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),Kc=e("__VUE_SSR_SETTERS__",n=>eo=n)}const wo=t=>{const e=dt;return Oa(t),t.scope.on(),()=>{t.scope.off(),Oa(e)}},gf=()=>{dt&&dt.scope.off(),Oa(null)};function $g(t){return t.vnode.shapeFlag&4}let eo=!1;function Jb(t,e=!1,n=!1){e&&Kc(e);const{props:r,children:s}=t.vnode,i=$g(t);Tb(t,r,i,e),Sb(t,s,n);const o=i?Xb(t,e):void 0;return e&&Kc(!1),o}function Xb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,pb);const{setup:r}=n;if(r){Or();const s=t.setupContext=r.length>1?eT(t):null,i=wo(t),o=yo(r,t,0,[t.props,s]),l=Mm(o);if(Dr(),i(),(l||t.sp)&&!Fi(t)&&yg(t),l){if(o.then(gf,gf),e)return o.then(c=>{_f(t,c)}).catch(c=>{pl(c,t,0)});t.asyncDep=o}else _f(t,o)}else jg(t)}function _f(t,e,n){me(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=hg(e)),jg(t)}function jg(t,e,n){const r=t.type;t.render||(t.render=r.render||En);{const s=wo(t);Or();try{mb(t)}finally{Dr(),s()}}}const Zb={get(t,e){return Et(t,"get",""),t[e]}};function eT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Zb),slots:t.slots,emit:t.emit,expose:e}}function yl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(hg(Bu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ui)return Ui[n](t)},has(e,n){return n in e||n in Ui}})):t.proxy}function tT(t,e=!0){return me(t)?t.displayName||t.name:t.name||e&&t.__name}function nT(t){return me(t)&&"__vccOpts"in t}const xt=(t,e)=>WE(t,e,eo);function Hg(t,e,n){const r=arguments.length;return r===2?Ue(e)&&!le(e)?xa(e)?We(t,null,[e]):We(t,e):We(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xa(n)&&(n=[n]),We(t,e,n))}const rT="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gc;const yf=typeof window<"u"&&window.trustedTypes;if(yf)try{Gc=yf.createPolicy("vue",{createHTML:t=>t})}catch{}const qg=Gc?t=>Gc.createHTML(t):t=>t,sT="http://www.w3.org/2000/svg",iT="http://www.w3.org/1998/Math/MathML",Ln=typeof document<"u"?document:null,wf=Ln&&Ln.createElement("template"),oT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Ln.createElementNS(sT,t):e==="mathml"?Ln.createElementNS(iT,t):n?Ln.createElement(t,{is:n}):Ln.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ln.createTextNode(t),createComment:t=>Ln.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ln.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{wf.innerHTML=qg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=wf.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},aT=Symbol("_vtc");function lT(t,e,n){const r=t[aT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const vf=Symbol("_vod"),cT=Symbol("_vsh"),uT=Symbol(""),hT=/(^|;)\s*display\s*:/;function dT(t,e,n){const r=t.style,s=tt(n);let i=!1;if(n&&!s){if(e)if(tt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&fa(r,l,"")}else for(const o in e)n[o]==null&&fa(r,o,"");for(const o in n)o==="display"&&(i=!0),fa(r,o,n[o])}else if(s){if(e!==n){const o=r[uT];o&&(n+=";"+o),r.cssText=n,i=hT.test(n)}}else e&&t.removeAttribute("style");vf in t&&(t[vf]=i?r.display:"",t[cT]&&(r.display="none"))}const Ef=/\s*!important$/;function fa(t,e,n){if(le(n))n.forEach(r=>fa(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=fT(t,e);Ef.test(n)?t.setProperty(as(r),n.replace(Ef,""),"important"):t[r]=n}}const bf=["Webkit","Moz","ms"],wc={};function fT(t,e){const n=wc[e];if(n)return n;let r=sn(e);if(r!=="filter"&&r in t)return wc[e]=r;r=ul(r);for(let s=0;s<bf.length;s++){const i=bf[s]+r;if(i in t)return wc[e]=i}return e}const Tf="http://www.w3.org/1999/xlink";function If(t,e,n,r,s,i=_E(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Tf,e.slice(6,e.length)):t.setAttributeNS(Tf,e,n):n==null||i&&!$m(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Cn(n)?String(n):n)}function Af(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?qg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=$m(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Kr(t,e,n,r){t.addEventListener(e,n,r)}function pT(t,e,n,r){t.removeEventListener(e,n,r)}const Cf=Symbol("_vei");function mT(t,e,n,r,s=null){const i=t[Cf]||(t[Cf]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=gT(e);if(r){const h=i[e]=wT(r,s);Kr(t,l,h,c)}else o&&(pT(t,l,o,c),i[e]=void 0)}}const Sf=/(?:Once|Passive|Capture)$/;function gT(t){let e;if(Sf.test(t)){e={};let r;for(;r=t.match(Sf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):as(t.slice(2)),e]}let vc=0;const _T=Promise.resolve(),yT=()=>vc||(_T.then(()=>vc=0),vc=Date.now());function wT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Sn(vT(r,n.value),e,5,[r])};return n.value=t,n.attached=yT(),n}function vT(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Rf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ET=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?lT(t,r,o):e==="style"?dT(t,n,r):al(e)?Pu(e)||mT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bT(t,e,r,o))?(Af(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&If(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!tt(r))?Af(t,sn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),If(t,e,r,o))};function bT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Rf(e)&&me(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Rf(e)&&tt(n)?!1:e in t}const Da=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>ua(e,n):e};function TT(t){t.target.composing=!0}function Pf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Os=Symbol("_assign"),vr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Os]=Da(s);const i=r||s.props&&s.props.type==="number";Kr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Fc(l)),t[Os](l)}),n&&Kr(t,"change",()=>{t.value=t.value.trim()}),e||(Kr(t,"compositionstart",TT),Kr(t,"compositionend",Pf),Kr(t,"change",Pf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Os]=Da(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Fc(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},IT={deep:!0,created(t,e,n){t[Os]=Da(n),Kr(t,"change",()=>{const r=t._modelValue,s=AT(t),i=t.checked,o=t[Os];if(le(r)){const l=jm(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const h=[...r];h.splice(l,1),o(h)}}else if(ll(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(zg(t,i))})},mounted:kf,beforeUpdate(t,e,n){t[Os]=Da(n),kf(t,e,n)}};function kf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(le(e))s=jm(e,r.props.value)>-1;else if(ll(e))s=e.has(r.props.value);else{if(e===n)return;s=dl(e,zg(t,!0))}t.checked!==s&&(t.checked=s)}function AT(t){return"_value"in t?t._value:t.value}function zg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const CT=["ctrl","shift","alt","meta"],ST={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>CT.some(n=>t[`${n}Key`]&&!e.includes(n))},Wg=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=ST[e[o]];if(l&&l(s,e))return}return t(s,...i)})},RT=It({patchProp:ET},oT);let xf;function PT(){return xf||(xf=Pb(RT))}const kT=(...t)=>{const e=PT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=OT(r);if(!s)return;const i=e._component;!me(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,xT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function xT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function OT(t){return tt(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Kg;const wl=t=>Kg=t,Gg=Symbol();function Qc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var $i;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})($i||($i={}));function DT(){const t=Wm(!0),e=t.run(()=>ke({}));let n=[],r=[];const s=Bu({install(i){wl(s),s._a=i,i.provide(Gg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Qg=()=>{};function Of(t,e,n,r=Qg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Km()&&wE(s),s}function ws(t,...e){t.slice().forEach(n=>{n(...e)})}const VT=t=>t(),Df=Symbol(),Ec=Symbol();function Yc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Qc(s)&&Qc(r)&&t.hasOwnProperty(n)&&!Je(r)&&!wr(r)?t[n]=Yc(s,r):t[n]=r}return t}const NT=Symbol();function LT(t){return!Qc(t)||!t.hasOwnProperty(NT)}const{assign:ar}=Object;function MT(t){return!!(Je(t)&&t.effect)}function FT(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function h(){l||(n.state.value[t]=s?s():{});const d=jE(n.state.value[t]);return ar(d,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=Bu(xt(()=>{wl(n);const _=n._s.get(t);return o[m].call(_,_)})),p),{}))}return c=Yg(t,h,e,n,r,!0),c}function Yg(t,e,n={},r,s,i){let o;const l=ar({actions:{}},n),c={deep:!0};let h,d,p=[],m=[],_;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),ke({});let O;function D(y){let w;h=d=!1,typeof y=="function"?(y(r.state.value[t]),w={type:$i.patchFunction,storeId:t,events:_}):(Yc(r.state.value[t],y),w={type:$i.patchObject,payload:y,storeId:t,events:_});const T=O=Symbol();$u().then(()=>{O===T&&(h=!0)}),d=!0,ws(p,w,r.state.value[t])}const H=i?function(){const{state:w}=n,T=w?w():{};this.$patch(A=>{ar(A,T)})}:Qg;function $(){o.stop(),p=[],m=[],r._s.delete(t)}const j=(y,w="")=>{if(Df in y)return y[Ec]=w,y;const T=function(){wl(r);const A=Array.from(arguments),C=[],E=[];function at(de){C.push(de)}function Nt(de){E.push(de)}ws(m,{args:A,name:T[Ec],store:ie,after:at,onError:Nt});let Me;try{Me=y.apply(this&&this.$id===t?this:ie,A)}catch(de){throw ws(E,de),de}return Me instanceof Promise?Me.then(de=>(ws(C,de),de)).catch(de=>(ws(E,de),Promise.reject(de))):(ws(C,Me),Me)};return T[Df]=!0,T[Ec]=w,T},z={_p:r,$id:t,$onAction:Of.bind(null,m),$patch:D,$reset:H,$subscribe(y,w={}){const T=Of(p,y,w.detached,()=>A()),A=o.run(()=>xs(()=>r.state.value[t],C=>{(w.flush==="sync"?d:h)&&y({storeId:t,type:$i.direct,events:_},C)},ar({},c,w)));return T},$dispose:$},ie=_o(z);r._s.set(t,ie);const I=(r._a&&r._a.runWithContext||VT)(()=>r._e.run(()=>(o=Wm()).run(()=>e({action:j}))));for(const y in I){const w=I[y];if(Je(w)&&!MT(w)||wr(w))i||(P&&LT(w)&&(Je(w)?w.value=P[y]:Yc(w,P[y])),r.state.value[t][y]=w);else if(typeof w=="function"){const T=j(w,y);I[y]=T,l.actions[y]=w}}return ar(ie,I),ar(Pe(ie),I),Object.defineProperty(ie,"$state",{get:()=>r.state.value[t],set:y=>{D(w=>{ar(w,y)})}}),r._p.forEach(y=>{ar(ie,o.run(()=>y({store:ie,app:r._a,pinia:r,options:l})))}),P&&i&&n.hydrate&&n.hydrate(ie.$state,P),h=!0,d=!0,ie}/*! #__NO_SIDE_EFFECTS__ */function Jg(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=bb();return o=o||(c?nn(Gg,null):null),o&&wl(o),o=Kg,o._s.has(t)||(s?Yg(t,e,r,o):FT(t,r,o)),o._s.get(t)}return i.$id=t,i}const UT=()=>{};var Vf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},BT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Zg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,_=h&63;c||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new $T;const m=i<<2|l>>4;if(r.push(m),h!==64){const _=l<<4&240|h>>2;if(r.push(_),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $T extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jT=function(t){const e=Xg(t);return Zg.encodeByteArray(e,!0)},Va=function(t){return jT(t).replace(/\./g,"")},e_=function(t){try{return Zg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=()=>HT().__FIREBASE_DEFAULTS__,zT=()=>{if(typeof process>"u"||typeof Vf>"u")return;const t=Vf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},WT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&e_(t[1]);return e&&JSON.parse(e)},vl=()=>{try{return UT()||qT()||zT()||WT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},t_=t=>{var e,n;return(n=(e=vl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},KT=t=>{const e=t_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},n_=()=>{var t;return(t=vl())===null||t===void 0?void 0:t.config},r_=t=>{var e;return(e=vl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Va(JSON.stringify(n)),Va(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function YT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function JT(){var t;const e=(t=vl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function XT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ZT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function e0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function t0(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function n0(){return!JT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function r0(){try{return typeof indexedDB=="object"}catch{return!1}}function s0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="FirebaseError";class Zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=i0,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vo.prototype.create)}}class vo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?o0(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Zn(s,l,r)}}function o0(t,e){return t.replace(a0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const a0=/\{\$([^}]+)}/g;function l0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function es(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Nf(i)&&Nf(o)){if(!es(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Nf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Pi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ki(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function c0(t,e){const n=new u0(t,e);return n.subscribe.bind(n)}class u0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");h0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=bc),s.error===void 0&&(s.error=bc),s.complete===void 0&&(s.complete=bc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function h0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){return t&&t._delegate?t._delegate:t}class ts{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new GT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(p0(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:f0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function f0(t){return t===Wr?void 0:t}function p0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new d0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const g0={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},_0=ve.INFO,y0={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},w0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=y0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qu{constructor(e){this.name=e,this._logLevel=_0,this._logHandler=w0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?g0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const v0=(t,e)=>e.some(n=>t instanceof n);let Lf,Mf;function E0(){return Lf||(Lf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function b0(){return Mf||(Mf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const s_=new WeakMap,Jc=new WeakMap,i_=new WeakMap,Tc=new WeakMap,Yu=new WeakMap;function T0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Er(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&s_.set(n,t)}).catch(()=>{}),Yu.set(e,t),e}function I0(t){if(Jc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Jc.set(t,e)}let Xc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||i_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function A0(t){Xc=t(Xc)}function C0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ic(this),e,...n);return i_.set(r,e.sort?e.sort():[e]),Er(r)}:b0().includes(t)?function(...e){return t.apply(Ic(this),e),Er(s_.get(this))}:function(...e){return Er(t.apply(Ic(this),e))}}function S0(t){return typeof t=="function"?C0(t):(t instanceof IDBTransaction&&I0(t),v0(t,E0())?new Proxy(t,Xc):t)}function Er(t){if(t instanceof IDBRequest)return T0(t);if(Tc.has(t))return Tc.get(t);const e=S0(t);return e!==t&&(Tc.set(t,e),Yu.set(e,t)),e}const Ic=t=>Yu.get(t);function R0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Er(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Er(o.result),c.oldVersion,c.newVersion,Er(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const P0=["get","getKey","getAll","getAllKeys","count"],k0=["put","add","delete","clear"],Ac=new Map;function Ff(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ac.get(e))return Ac.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=k0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||P0.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Ac.set(e,i),i}A0(t=>({...t,get:(e,n,r)=>Ff(e,n)||t.get(e,n,r),has:(e,n)=>!!Ff(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(O0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function O0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zc="@firebase/app",Uf="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new Qu("@firebase/app"),D0="@firebase/app-compat",V0="@firebase/analytics-compat",N0="@firebase/analytics",L0="@firebase/app-check-compat",M0="@firebase/app-check",F0="@firebase/auth",U0="@firebase/auth-compat",B0="@firebase/database",$0="@firebase/data-connect",j0="@firebase/database-compat",H0="@firebase/functions",q0="@firebase/functions-compat",z0="@firebase/installations",W0="@firebase/installations-compat",K0="@firebase/messaging",G0="@firebase/messaging-compat",Q0="@firebase/performance",Y0="@firebase/performance-compat",J0="@firebase/remote-config",X0="@firebase/remote-config-compat",Z0="@firebase/storage",eI="@firebase/storage-compat",tI="@firebase/firestore",nI="@firebase/vertexai",rI="@firebase/firestore-compat",sI="firebase",iI="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="[DEFAULT]",oI={[Zc]:"fire-core",[D0]:"fire-core-compat",[N0]:"fire-analytics",[V0]:"fire-analytics-compat",[M0]:"fire-app-check",[L0]:"fire-app-check-compat",[F0]:"fire-auth",[U0]:"fire-auth-compat",[B0]:"fire-rtdb",[$0]:"fire-data-connect",[j0]:"fire-rtdb-compat",[H0]:"fire-fn",[q0]:"fire-fn-compat",[z0]:"fire-iid",[W0]:"fire-iid-compat",[K0]:"fire-fcm",[G0]:"fire-fcm-compat",[Q0]:"fire-perf",[Y0]:"fire-perf-compat",[J0]:"fire-rc",[X0]:"fire-rc-compat",[Z0]:"fire-gcs",[eI]:"fire-gcs-compat",[tI]:"fire-fst",[rI]:"fire-fst-compat",[nI]:"fire-vertex","fire-js":"fire-js",[sI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=new Map,aI=new Map,tu=new Map;function Bf(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function js(t){const e=t.name;if(tu.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;tu.set(e,t);for(const n of Na.values())Bf(n,t);for(const n of aI.values())Bf(n,t);return!0}function Ju(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function en(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},br=new vo("app","Firebase",lI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=iI;function o_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:eu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw br.create("bad-app-name",{appName:String(s)});if(n||(n=n_()),!n)throw br.create("no-options");const i=Na.get(s);if(i){if(es(n,i.options)&&es(r,i.config))return i;throw br.create("duplicate-app",{appName:s})}const o=new m0(s);for(const c of tu.values())o.addComponent(c);const l=new cI(n,r,o);return Na.set(s,l),l}function a_(t=eu){const e=Na.get(t);if(!e&&t===eu&&n_())return o_();if(!e)throw br.create("no-app",{appName:t});return e}function Tr(t,e,n){var r;let s=(r=oI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(l.join(" "));return}js(new ts(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="firebase-heartbeat-database",hI=1,to="firebase-heartbeat-store";let Cc=null;function l_(){return Cc||(Cc=R0(uI,hI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(to)}catch(n){console.warn(n)}}}}).catch(t=>{throw br.create("idb-open",{originalErrorMessage:t.message})})),Cc}async function dI(t){try{const n=(await l_()).transaction(to),r=await n.objectStore(to).get(c_(t));return await n.done,r}catch(e){if(e instanceof Zn)Kn.warn(e.message);else{const n=br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function $f(t,e){try{const r=(await l_()).transaction(to,"readwrite");await r.objectStore(to).put(e,c_(t)),await r.done}catch(n){if(n instanceof Zn)Kn.warn(n.message);else{const r=br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(r.message)}}}function c_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=1024,pI=30;class mI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _I(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=jf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>pI){const o=yI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jf(),{heartbeatsToSend:r,unsentEntries:s}=gI(this._heartbeatsCache.heartbeats),i=Va(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Kn.warn(n),""}}}function jf(){return new Date().toISOString().substring(0,10)}function gI(t,e=fI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Hf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Hf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _I{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return r0()?s0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $f(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $f(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Hf(t){return Va(JSON.stringify({version:2,heartbeats:t})).length}function yI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(t){js(new ts("platform-logger",e=>new x0(e),"PRIVATE")),js(new ts("heartbeat",e=>new mI(e),"PRIVATE")),Tr(Zc,Uf,t),Tr(Zc,Uf,"esm2017"),Tr("fire-js","")}wI("");var vI="firebase",EI="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tr(vI,EI,"app");function Xu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function u_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bI=u_,h_=new vo("auth","Firebase",u_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=new Qu("@firebase/auth");function TI(t,...e){La.logLevel<=ve.WARN&&La.warn(`Auth (${ei}): ${t}`,...e)}function pa(t,...e){La.logLevel<=ve.ERROR&&La.error(`Auth (${ei}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,...e){throw Zu(t,...e)}function bn(t,...e){return Zu(t,...e)}function d_(t,e,n){const r=Object.assign(Object.assign({},bI()),{[e]:n});return new vo("auth","Firebase",r).create(e,{appName:t.name})}function Hn(t){return d_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return h_.create(t,...e)}function ce(t,e,...n){if(!t)throw Zu(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pa(e),new Error(e)}function Gn(t,e){t||Un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function II(){return qf()==="http:"||qf()==="https:"}function qf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(II()||ZT()||"connection"in navigator)?navigator.onLine:!0}function CI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gn(n>e,"Short delay should be less than long delay!"),this.isMobile=YT()||e0()}get(){return AI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t,e){Gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=new bo(3e4,6e4);function Vr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nr(t,e,n,r,s={}){return p_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Eo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return XT()||(h.referrerPolicy="no-referrer"),f_.fetch()(m_(t,t.config.apiHost,n,l),h)})}async function p_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},SI),e);try{const s=new kI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ra(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ra(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ra(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ra(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw d_(t,d,h);dn(t,d)}}catch(s){if(s instanceof Zn)throw s;dn(t,"network-request-failed",{message:String(s)})}}async function To(t,e,n,r,s={}){const i=await Nr(t,e,n,r,s);return"mfaPendingCredential"in i&&dn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function m_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?eh(t.config,s):`${t.config.apiScheme}://${s}`}function PI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),RI.get())})}}function ra(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=bn(t,e,r);return s.customData._tokenResponse=n,s}function zf(t){return t!==void 0&&t.enterprise!==void 0}class xI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return PI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function OI(t,e){return Nr(t,"GET","/v2/recaptchaConfig",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(t,e){return Nr(t,"POST","/v1/accounts:delete",e)}async function g_(t,e){return Nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VI(t,e=!1){const n=it(t),r=await n.getIdToken(e),s=th(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ji(Sc(s.auth_time)),issuedAtTime:ji(Sc(s.iat)),expirationTime:ji(Sc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Sc(t){return Number(t)*1e3}function th(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pa("JWT malformed, contained fewer than 3 sections"),null;try{const s=e_(n);return s?JSON.parse(s):(pa("Failed to decode base64 JWT payload"),null)}catch(s){return pa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Wf(t){const e=th(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zn&&NI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function NI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ji(this.lastLoginAt),this.creationTime=ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ma(t){var e;const n=t.auth,r=await t.getIdToken(),s=await no(t,g_(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?__(i.providerUserInfo):[],l=FI(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new ru(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function MI(t){const e=it(t);await Ma(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function __(t){return t.map(e=>{var{providerId:n}=e,r=Xu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UI(t,e){const n=await p_(t,{},async()=>{const r=Eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=m_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",f_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function BI(t,e){return Nr(t,"POST","/v2/accounts:revokeToken",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Wf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await UI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ds;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ds,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Xu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ru(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await no(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VI(this,e)}reload(){return MI(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ma(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(en(this.auth.app))return Promise.reject(Hn(this.auth));const e=await this.getIdToken();return await no(this,DI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,H=(h=n.createdAt)!==null&&h!==void 0?h:void 0,$=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:j,emailVerified:z,isAnonymous:ie,providerData:_e,stsTokenManager:I}=n;ce(j&&I,e,"internal-error");const y=Ds.fromJSON(this.name,I);ce(typeof j=="string",e,"internal-error"),ir(p,e.name),ir(m,e.name),ce(typeof z=="boolean",e,"internal-error"),ce(typeof ie=="boolean",e,"internal-error"),ir(_,e.name),ir(P,e.name),ir(O,e.name),ir(D,e.name),ir(H,e.name),ir($,e.name);const w=new Bn({uid:j,auth:e,email:m,emailVerified:z,displayName:p,isAnonymous:ie,photoURL:P,phoneNumber:_,tenantId:O,stsTokenManager:y,createdAt:H,lastLoginAt:$});return _e&&Array.isArray(_e)&&(w.providerData=_e.map(T=>Object.assign({},T))),D&&(w._redirectEventId=D),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ds;s.updateFromServerResponse(n);const i=new Bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ma(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?__(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ds;l.updateFromIdToken(r);const c=new Bn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ru(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=new Map;function $n(t){Gn(t instanceof Function,"Expected a class definition");let e=Kf.get(t);return e?(Gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}y_.type="NONE";const Gf=y_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t,e,n){return`firebase:${t}:${e}:${n}`}class Vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ma(this.userKey,s.apiKey,i),this.fullPersistenceKey=ma("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vs($n(Gf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||$n(Gf);const o=ma(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){const p=Bn._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Vs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Vs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(b_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(w_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(I_(e))return"Blackberry";if(A_(e))return"Webos";if(v_(e))return"Safari";if((e.includes("chrome/")||E_(e))&&!e.includes("edge/"))return"Chrome";if(T_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function w_(t=At()){return/firefox\//i.test(t)}function v_(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function E_(t=At()){return/crios\//i.test(t)}function b_(t=At()){return/iemobile/i.test(t)}function T_(t=At()){return/android/i.test(t)}function I_(t=At()){return/blackberry/i.test(t)}function A_(t=At()){return/webos/i.test(t)}function nh(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $I(t=At()){var e;return nh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jI(){return t0()&&document.documentMode===10}function C_(t=At()){return nh(t)||T_(t)||A_(t)||I_(t)||/windows phone/i.test(t)||b_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(t,e=[]){let n;switch(t){case"Browser":n=Qf(At());break;case"Worker":n=`${Qf(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ei}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qI(t,e={}){return Nr(t,"GET","/v2/passwordPolicy",Vr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=6;class WI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yf(this),this.idTokenSubscription=new Yf(this),this.beforeStateQueue=new HI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$n(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Vs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await g_(this,{idToken:e}),r=await Bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(en(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ma(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(en(this.app))return Promise.reject(Hn(this));const n=e?it(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return en(this.app)?Promise.reject(Hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return en(this.app)?Promise.reject(Hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qI(this),n=new WI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await BI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$n(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await Vs.create(this,[$n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=S_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(en(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&TI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cs(t){return it(t)}class Yf{constructor(e){this.auth=e,this.observer=null,this.addObserver=c0(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function GI(t){El=t}function R_(t){return El.loadJS(t)}function QI(){return El.recaptchaEnterpriseScript}function YI(){return El.gapiScript}function JI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class XI{constructor(){this.enterprise=new ZI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ZI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const eA="recaptcha-enterprise",P_="NO_RECAPTCHA";class tA{constructor(e){this.type=eA,this.auth=cs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{OI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new xI(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;zf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(P_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new XI().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&zf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=QI();c.length!==0&&(c+=l),R_(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Jf(t,e,n,r=!1,s=!1){const i=new tA(t);let o;if(s)o=P_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function su(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Jf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Jf(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(t,e){const n=Ju(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(es(i,e??{}))return s;dn(s,"already-initialized")}return n.initialize({options:e})}function rA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sA(t,e,n){const r=cs(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=k_(e),{host:o,port:l}=iA(e),c=l===null?"":`:${l}`,h={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(es(h,r.config.emulator)&&es(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,oA()}function k_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iA(t){const e=k_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Xf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Xf(o)}}}function Xf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}async function aA(t,e){return Nr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(t,e){return To(t,"POST","/v1/accounts:signInWithPassword",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cA(t,e){return To(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}async function uA(t,e){return To(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends rh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ro(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ro(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return su(e,n,"signInWithPassword",lA);case"emailLink":return cA(e,{email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return su(e,r,"signUpPassword",aA);case"emailLink":return uA(e,{idToken:n,email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t,e){return To(t,"POST","/v1/accounts:signInWithIdp",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA="http://localhost";class ns extends rh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Xu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ns(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ns(e,n)}buildRequest(){const e={requestUri:hA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Eo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fA(t){const e=Pi(ki(t)).link,n=e?Pi(ki(e)).deep_link_id:null,r=Pi(ki(t)).deep_link_id;return(r?Pi(ki(r)).link:null)||r||n||e||t}class sh{constructor(e){var n,r,s,i,o,l;const c=Pi(ki(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=dA((s=c.mode)!==null&&s!==void 0?s:null);ce(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=fA(e);try{return new sh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.providerId=ti.PROVIDER_ID}static credential(e,n){return ro._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=sh.parseLink(n);return ce(r,"argument-error"),ro._fromEmailAndCode(e,r.code,r.tenantId)}}ti.PROVIDER_ID="password";ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends x_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Io{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Io{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ns._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.GOOGLE_SIGN_IN_METHOD="google.com";dr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Io{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Io{constructor(){super("twitter.com")}static credential(e,n){return ns._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pA(t,e){return To(t,"POST","/v1/accounts:signUp",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Bn._fromIdTokenResponse(e,r,s),o=Zf(r);return new rs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Zf(r);return new rs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Zf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa extends Zn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fa(e,n,r,s)}}function O_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fa._fromErrorAndOperation(t,i,e,r):i})}async function mA(t,e,n=!1){const r=await no(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gA(t,e,n=!1){const{auth:r}=t;if(en(r.app))return Promise.reject(Hn(r));const s="reauthenticate";try{const i=await no(t,O_(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=th(i.idToken);ce(o,r,"internal-error");const{sub:l}=o;return ce(t.uid===l,r,"user-mismatch"),rs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&dn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(t,e,n=!1){if(en(t.app))return Promise.reject(Hn(t));const r="signIn",s=await O_(t,r,e),i=await rs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function _A(t,e){return D_(cs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V_(t){const e=cs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yA(t,e,n){if(en(t.app))return Promise.reject(Hn(t));const r=cs(t),o=await su(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",pA).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&V_(t),c}),l=await rs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function wA(t,e,n){return en(t.app)?Promise.reject(Hn(t)):_A(it(t),ti.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&V_(t),r})}function vA(t,e,n,r){return it(t).onIdTokenChanged(e,n,r)}function EA(t,e,n){return it(t).beforeAuthStateChanged(e,n)}function bl(t,e,n,r){return it(t).onAuthStateChanged(e,n,r)}function bA(t){return it(t).signOut()}const Ua="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ua,"1"),this.storage.removeItem(Ua),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA=1e3,IA=10;class L_ extends N_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=C_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);jI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,IA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},TA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}L_.type="LOCAL";const AA=L_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_ extends N_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}M_.type="SESSION";const F_=M_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Tl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await CA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=ih("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return window}function RA(t){Tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function PA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xA(){return U_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="firebaseLocalStorageDb",OA=1,Ba="firebaseLocalStorage",$_="fbase_key";class Ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Il(t,e){return t.transaction([Ba],e?"readwrite":"readonly").objectStore(Ba)}function DA(){const t=indexedDB.deleteDatabase(B_);return new Ao(t).toPromise()}function iu(){const t=indexedDB.open(B_,OA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ba,{keyPath:$_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ba)?e(r):(r.close(),await DA(),e(await iu()))})})}async function ep(t,e,n){const r=Il(t,!0).put({[$_]:e,value:n});return new Ao(r).toPromise()}async function VA(t,e){const n=Il(t,!1).get(e),r=await new Ao(n).toPromise();return r===void 0?null:r.value}function tp(t,e){const n=Il(t,!0).delete(e);return new Ao(n).toPromise()}const NA=800,LA=3;class j_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await iu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>LA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return U_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tl._getInstance(xA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PA(),!this.activeServiceWorker)return;this.sender=new SA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await iu();return await ep(e,Ua,"1"),await tp(e,Ua),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ep(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>VA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Il(s,!1).getAll();return new Ao(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}j_.type="LOCAL";const MA=j_;new bo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t,e){return e?$n(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh extends rh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UA(t){return D_(t.auth,new oh(t),t.bypassAuthState)}function BA(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),gA(n,new oh(t),t.bypassAuthState)}async function $A(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),mA(n,new oh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UA;case"linkViaPopup":case"linkViaRedirect":return $A;case"reauthViaPopup":case"reauthViaRedirect":return BA;default:dn(this.auth,"internal-error")}}resolve(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=new bo(2e3,1e4);class Cs extends H_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Cs.currentPopupAction&&Cs.currentPopupAction.cancel(),Cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Gn(this.filter.length===1,"Popup operations only handle one event");const e=ih();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jA.get())};e()}}Cs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA="pendingRedirect",ga=new Map;class qA extends H_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ga.get(this.auth._key());if(!e){try{const r=await zA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ga.set(this.auth._key(),e)}return this.bypassAuthState||ga.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zA(t,e){const n=GA(e),r=KA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function WA(t,e){ga.set(t._key(),e)}function KA(t){return $n(t._redirectPersistence)}function GA(t){return ma(HA,t.config.apiKey,t.name)}async function QA(t,e,n=!1){if(en(t.app))return Promise.reject(Hn(t));const r=cs(t),s=FA(r,e),o=await new qA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=10*60*1e3;class JA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!q_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YA&&this.cachedEventUids.clear(),this.cachedEventUids.has(np(e))}saveEventToCache(e){this.cachedEventUids.add(np(e)),this.lastProcessedEventTime=Date.now()}}function np(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function q_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return q_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZA(t,e={}){return Nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tC=/^https?/;async function nC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZA(t);for(const n of e)try{if(rC(n))return}catch{}dn(t,"unauthorized-domain")}function rC(t){const e=nu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tC.test(n))return!1;if(eC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=new bo(3e4,6e4);function rp(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iC(t){return new Promise((e,n)=>{var r,s,i;function o(){rp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rp(),n(bn(t,"network-request-failed"))},timeout:sC.get()})}if(!((s=(r=Tn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Tn().gapi)===null||i===void 0)&&i.load)o();else{const l=JI("iframefcb");return Tn()[l]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},R_(`${YI()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw _a=null,e})}let _a=null;function oC(t){return _a=_a||iC(t),_a}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=new bo(5e3,15e3),lC="__/auth/iframe",cC="emulator/auth/iframe",uC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dC(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?eh(e,cC):`https://${t.config.authDomain}/${lC}`,r={apiKey:e.apiKey,appName:t.name,v:ei},s=hC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Eo(r).slice(1)}`}async function fC(t){const e=await oC(t),n=Tn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:dC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),l=Tn().setTimeout(()=>{i(o)},aC.get());function c(){Tn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mC=500,gC=600,_C="_blank",yC="http://localhost";class sp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wC(t,e,n,r=mC,s=gC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},pC),{width:r.toString(),height:s.toString(),top:i,left:o}),h=At().toLowerCase();n&&(l=E_(h)?_C:n),w_(h)&&(e=e||yC,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[_,P])=>`${m}${_}=${P},`,"");if($I(h)&&l!=="_self")return vC(e||"",l),new sp(null);const p=window.open(e||"",l,d);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new sp(p)}function vC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC="__/auth/handler",bC="emulator/auth/handler",TC=encodeURIComponent("fac");async function ip(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ei,eventId:s};if(e instanceof x_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",l0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Io){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${TC}=${encodeURIComponent(c)}`:"";return`${IC(t)}?${Eo(l).slice(1)}${h}`}function IC({config:t}){return t.emulator?eh(t,bC):`https://${t.authDomain}/${EC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="webStorageSupport";class AC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=F_,this._completeRedirectFn=QA,this._overrideRedirectResult=WA}async _openPopup(e,n,r,s){var i;Gn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ip(e,n,r,nu(),s);return wC(e,o,ih())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ip(e,n,r,nu(),s);return RA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Gn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fC(e),r=new JA(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rc,{type:Rc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Rc];o!==void 0&&n(!!o),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return C_()||v_()||nh()}}const CC=AC;var op="@firebase/auth",ap="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PC(t){js(new ts("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:S_(t)},h=new KI(r,s,i,c);return rA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),js(new ts("auth-internal",e=>{const n=cs(e.getProvider("auth").getImmediate());return(r=>new SC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tr(op,ap,RC(t)),Tr(op,ap,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=5*60,xC=r_("authIdTokenMaxAge")||kC;let lp=null;const OC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xC)return;const s=n==null?void 0:n.token;lp!==s&&(lp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function DC(t=a_()){const e=Ju(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nA(t,{popupRedirectResolver:CC,persistence:[MA,AA,F_]}),r=r_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=OC(i.toString());EA(n,o,()=>o(n.currentUser)),vA(n,l=>o(l))}}const s=t_("auth");return s&&sA(n,`http://${s}`),n}function VC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}GI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=bn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",VC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PC("Browser");var cp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ir,z_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function w(){}w.prototype=y.prototype,I.D=y.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(T,A,C){for(var E=Array(arguments.length-2),at=2;at<arguments.length;at++)E[at-2]=arguments[at];return y.prototype[A].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,w){w||(w=0);var T=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)T[A]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(A=0;16>A;++A)T[A]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=I.g[0],w=I.g[1],A=I.g[2];var C=I.g[3],E=y+(C^w&(A^C))+T[0]+3614090360&4294967295;y=w+(E<<7&4294967295|E>>>25),E=C+(A^y&(w^A))+T[1]+3905402710&4294967295,C=y+(E<<12&4294967295|E>>>20),E=A+(w^C&(y^w))+T[2]+606105819&4294967295,A=C+(E<<17&4294967295|E>>>15),E=w+(y^A&(C^y))+T[3]+3250441966&4294967295,w=A+(E<<22&4294967295|E>>>10),E=y+(C^w&(A^C))+T[4]+4118548399&4294967295,y=w+(E<<7&4294967295|E>>>25),E=C+(A^y&(w^A))+T[5]+1200080426&4294967295,C=y+(E<<12&4294967295|E>>>20),E=A+(w^C&(y^w))+T[6]+2821735955&4294967295,A=C+(E<<17&4294967295|E>>>15),E=w+(y^A&(C^y))+T[7]+4249261313&4294967295,w=A+(E<<22&4294967295|E>>>10),E=y+(C^w&(A^C))+T[8]+1770035416&4294967295,y=w+(E<<7&4294967295|E>>>25),E=C+(A^y&(w^A))+T[9]+2336552879&4294967295,C=y+(E<<12&4294967295|E>>>20),E=A+(w^C&(y^w))+T[10]+4294925233&4294967295,A=C+(E<<17&4294967295|E>>>15),E=w+(y^A&(C^y))+T[11]+2304563134&4294967295,w=A+(E<<22&4294967295|E>>>10),E=y+(C^w&(A^C))+T[12]+1804603682&4294967295,y=w+(E<<7&4294967295|E>>>25),E=C+(A^y&(w^A))+T[13]+4254626195&4294967295,C=y+(E<<12&4294967295|E>>>20),E=A+(w^C&(y^w))+T[14]+2792965006&4294967295,A=C+(E<<17&4294967295|E>>>15),E=w+(y^A&(C^y))+T[15]+1236535329&4294967295,w=A+(E<<22&4294967295|E>>>10),E=y+(A^C&(w^A))+T[1]+4129170786&4294967295,y=w+(E<<5&4294967295|E>>>27),E=C+(w^A&(y^w))+T[6]+3225465664&4294967295,C=y+(E<<9&4294967295|E>>>23),E=A+(y^w&(C^y))+T[11]+643717713&4294967295,A=C+(E<<14&4294967295|E>>>18),E=w+(C^y&(A^C))+T[0]+3921069994&4294967295,w=A+(E<<20&4294967295|E>>>12),E=y+(A^C&(w^A))+T[5]+3593408605&4294967295,y=w+(E<<5&4294967295|E>>>27),E=C+(w^A&(y^w))+T[10]+38016083&4294967295,C=y+(E<<9&4294967295|E>>>23),E=A+(y^w&(C^y))+T[15]+3634488961&4294967295,A=C+(E<<14&4294967295|E>>>18),E=w+(C^y&(A^C))+T[4]+3889429448&4294967295,w=A+(E<<20&4294967295|E>>>12),E=y+(A^C&(w^A))+T[9]+568446438&4294967295,y=w+(E<<5&4294967295|E>>>27),E=C+(w^A&(y^w))+T[14]+3275163606&4294967295,C=y+(E<<9&4294967295|E>>>23),E=A+(y^w&(C^y))+T[3]+4107603335&4294967295,A=C+(E<<14&4294967295|E>>>18),E=w+(C^y&(A^C))+T[8]+1163531501&4294967295,w=A+(E<<20&4294967295|E>>>12),E=y+(A^C&(w^A))+T[13]+2850285829&4294967295,y=w+(E<<5&4294967295|E>>>27),E=C+(w^A&(y^w))+T[2]+4243563512&4294967295,C=y+(E<<9&4294967295|E>>>23),E=A+(y^w&(C^y))+T[7]+1735328473&4294967295,A=C+(E<<14&4294967295|E>>>18),E=w+(C^y&(A^C))+T[12]+2368359562&4294967295,w=A+(E<<20&4294967295|E>>>12),E=y+(w^A^C)+T[5]+4294588738&4294967295,y=w+(E<<4&4294967295|E>>>28),E=C+(y^w^A)+T[8]+2272392833&4294967295,C=y+(E<<11&4294967295|E>>>21),E=A+(C^y^w)+T[11]+1839030562&4294967295,A=C+(E<<16&4294967295|E>>>16),E=w+(A^C^y)+T[14]+4259657740&4294967295,w=A+(E<<23&4294967295|E>>>9),E=y+(w^A^C)+T[1]+2763975236&4294967295,y=w+(E<<4&4294967295|E>>>28),E=C+(y^w^A)+T[4]+1272893353&4294967295,C=y+(E<<11&4294967295|E>>>21),E=A+(C^y^w)+T[7]+4139469664&4294967295,A=C+(E<<16&4294967295|E>>>16),E=w+(A^C^y)+T[10]+3200236656&4294967295,w=A+(E<<23&4294967295|E>>>9),E=y+(w^A^C)+T[13]+681279174&4294967295,y=w+(E<<4&4294967295|E>>>28),E=C+(y^w^A)+T[0]+3936430074&4294967295,C=y+(E<<11&4294967295|E>>>21),E=A+(C^y^w)+T[3]+3572445317&4294967295,A=C+(E<<16&4294967295|E>>>16),E=w+(A^C^y)+T[6]+76029189&4294967295,w=A+(E<<23&4294967295|E>>>9),E=y+(w^A^C)+T[9]+3654602809&4294967295,y=w+(E<<4&4294967295|E>>>28),E=C+(y^w^A)+T[12]+3873151461&4294967295,C=y+(E<<11&4294967295|E>>>21),E=A+(C^y^w)+T[15]+530742520&4294967295,A=C+(E<<16&4294967295|E>>>16),E=w+(A^C^y)+T[2]+3299628645&4294967295,w=A+(E<<23&4294967295|E>>>9),E=y+(A^(w|~C))+T[0]+4096336452&4294967295,y=w+(E<<6&4294967295|E>>>26),E=C+(w^(y|~A))+T[7]+1126891415&4294967295,C=y+(E<<10&4294967295|E>>>22),E=A+(y^(C|~w))+T[14]+2878612391&4294967295,A=C+(E<<15&4294967295|E>>>17),E=w+(C^(A|~y))+T[5]+4237533241&4294967295,w=A+(E<<21&4294967295|E>>>11),E=y+(A^(w|~C))+T[12]+1700485571&4294967295,y=w+(E<<6&4294967295|E>>>26),E=C+(w^(y|~A))+T[3]+2399980690&4294967295,C=y+(E<<10&4294967295|E>>>22),E=A+(y^(C|~w))+T[10]+4293915773&4294967295,A=C+(E<<15&4294967295|E>>>17),E=w+(C^(A|~y))+T[1]+2240044497&4294967295,w=A+(E<<21&4294967295|E>>>11),E=y+(A^(w|~C))+T[8]+1873313359&4294967295,y=w+(E<<6&4294967295|E>>>26),E=C+(w^(y|~A))+T[15]+4264355552&4294967295,C=y+(E<<10&4294967295|E>>>22),E=A+(y^(C|~w))+T[6]+2734768916&4294967295,A=C+(E<<15&4294967295|E>>>17),E=w+(C^(A|~y))+T[13]+1309151649&4294967295,w=A+(E<<21&4294967295|E>>>11),E=y+(A^(w|~C))+T[4]+4149444226&4294967295,y=w+(E<<6&4294967295|E>>>26),E=C+(w^(y|~A))+T[11]+3174756917&4294967295,C=y+(E<<10&4294967295|E>>>22),E=A+(y^(C|~w))+T[2]+718787259&4294967295,A=C+(E<<15&4294967295|E>>>17),E=w+(C^(A|~y))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+C&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var w=y-this.blockSize,T=this.B,A=this.h,C=0;C<y;){if(A==0)for(;C<=w;)s(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<y;)if(T[A++]=I.charCodeAt(C++),A==this.blockSize){s(this,T),A=0;break}}else for(;C<y;)if(T[A++]=I[C++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var w=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=w&255,w/=256;for(this.u(I),I=Array(16),y=w=0;4>y;++y)for(var T=0;32>T;T+=8)I[w++]=this.g[y]>>>T&255;return I};function i(I,y){var w=l;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=y(I)}function o(I,y){this.h=y;for(var w=[],T=!0,A=I.length-1;0<=A;A--){var C=I[A]|0;T&&C==y||(w[A]=C,T=!1)}this.g=w}var l={};function c(I){return-128<=I&&128>I?i(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return D(h(-I));for(var y=[],w=1,T=0;I>=w;T++)y[T]=I/w|0,w*=4294967296;return new o(y,0)}function d(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return D(d(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(y,8)),T=p,A=0;A<I.length;A+=8){var C=Math.min(8,I.length-A),E=parseInt(I.substring(A,A+C),y);8>C?(C=h(Math.pow(y,C)),T=T.j(C).add(h(E))):(T=T.j(w),T=T.add(h(E)))}return T}var p=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-D(this).m();for(var I=0,y=1,w=0;w<this.g.length;w++){var T=this.i(w);I+=(0<=T?T:4294967296+T)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(O(this))return"-"+D(this).toString(I);for(var y=h(Math.pow(I,6)),w=this,T="";;){var A=z(w,y).g;w=H(w,A.j(y));var C=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=A,P(w))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function O(I){return I.h==-1}t.l=function(I){return I=H(this,I),O(I)?-1:P(I)?0:1};function D(I){for(var y=I.g.length,w=[],T=0;T<y;T++)w[T]=~I.g[T];return new o(w,~I.h).add(m)}t.abs=function(){return O(this)?D(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],T=0,A=0;A<=y;A++){var C=T+(this.i(A)&65535)+(I.i(A)&65535),E=(C>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);T=E>>>16,C&=65535,E&=65535,w[A]=E<<16|C}return new o(w,w[w.length-1]&-2147483648?-1:0)};function H(I,y){return I.add(D(y))}t.j=function(I){if(P(this)||P(I))return p;if(O(this))return O(I)?D(this).j(D(I)):D(D(this).j(I));if(O(I))return D(this.j(D(I)));if(0>this.l(_)&&0>I.l(_))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,w=[],T=0;T<2*y;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<I.g.length;A++){var C=this.i(T)>>>16,E=this.i(T)&65535,at=I.i(A)>>>16,Nt=I.i(A)&65535;w[2*T+2*A]+=E*Nt,$(w,2*T+2*A),w[2*T+2*A+1]+=C*Nt,$(w,2*T+2*A+1),w[2*T+2*A+1]+=E*at,$(w,2*T+2*A+1),w[2*T+2*A+2]+=C*at,$(w,2*T+2*A+2)}for(T=0;T<y;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=y;T<2*y;T++)w[T]=0;return new o(w,0)};function $(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function j(I,y){this.g=I,this.h=y}function z(I,y){if(P(y))throw Error("division by zero");if(P(I))return new j(p,p);if(O(I))return y=z(D(I),y),new j(D(y.g),D(y.h));if(O(y))return y=z(I,D(y)),new j(D(y.g),y.h);if(30<I.g.length){if(O(I)||O(y))throw Error("slowDivide_ only works with positive integers.");for(var w=m,T=y;0>=T.l(I);)w=ie(w),T=ie(T);var A=_e(w,1),C=_e(T,1);for(T=_e(T,2),w=_e(w,2);!P(T);){var E=C.add(T);0>=E.l(I)&&(A=A.add(w),C=E),T=_e(T,1),w=_e(w,1)}return y=H(I,A.j(y)),new j(A,y)}for(A=p;0<=I.l(y);){for(w=Math.max(1,Math.floor(I.m()/y.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=h(w),E=C.j(y);O(E)||0<E.l(I);)w-=T,C=h(w),E=C.j(y);P(C)&&(C=m),A=A.add(C),I=H(I,E)}return new j(A,I)}t.A=function(I){return z(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)&I.i(T);return new o(w,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)|I.i(T);return new o(w,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)^I.i(T);return new o(w,this.h^I.h)};function ie(I){for(var y=I.g.length+1,w=[],T=0;T<y;T++)w[T]=I.i(T)<<1|I.i(T-1)>>>31;return new o(w,I.h)}function _e(I,y){var w=y>>5;y%=32;for(var T=I.g.length-w,A=[],C=0;C<T;C++)A[C]=0<y?I.i(C+w)>>>y|I.i(C+w+1)<<32-y:I.i(C+w);return new o(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,z_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Ir=o}).apply(typeof cp<"u"?cp:typeof self<"u"?self:typeof window<"u"?window:{});var sa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var W_,xi,K_,ya,ou,G_,Q_,Y_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof sa=="object"&&sa];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var R=a[g];if(!(R in f))break e;f=f[R]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,g=!1,R={next:function(){if(!g&&f<a.length){var k=f++;return{value:u(k,a[k]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),a.apply(u,R)}}return function(){return a.apply(u,arguments)}}function m(a,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function P(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,R,k){for(var K=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)K[Ne-2]=arguments[Ne];return u.prototype[R].apply(g,K)}}function O(a){const u=a.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function D(a,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const R=a.length||0,k=g.length||0;a.length=R+k;for(let K=0;K<k;K++)a[R+K]=g[K]}else a.push(g)}}class H{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function z(a){return z[" "](a),a}z[" "]=function(){};var ie=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function _e(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function I(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function y(a){const u={};for(const f in a)u[f]=a[f];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,u){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)a[f]=g[f];for(let k=0;k<w.length;k++)f=w[k],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function A(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function C(a){l.setTimeout(()=>{throw a},0)}function E(){var a=jt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class at{constructor(){this.h=this.g=null}add(u,f){const g=Nt.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Nt=new H(()=>new Me,a=>a.reset());class Me{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let de,we=!1,jt=new at,an=()=>{const a=l.Promise.resolve(void 0);de=()=>{a.then(Jt)}};var Jt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(f){C(f)}var u=Nt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}we=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function qe(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var er=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function mn(a,u){if(qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ie){e:{try{z(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Lt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&mn.aa.h.call(this)}}P(mn,qe);var Lt={2:"touch",3:"pen",4:"mouse"};mn.prototype.h=function(){mn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),J=0;function Q(a,u,f,g,R){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=R,this.key=++J,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Se(a){this.src=a,this.g={},this.h=0}Se.prototype.add=function(a,u,f,g,R){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var K=b(a,u,g,R);return-1<K?(u=a[K],f||(u.fa=!1)):(u=new Q(u,this.src,k,!!g,R),u.fa=f,a.push(u)),u};function v(a,u){var f=u.type;if(f in a.g){var g=a.g[f],R=Array.prototype.indexOf.call(g,u,void 0),k;(k=0<=R)&&Array.prototype.splice.call(g,R,1),k&&(ee(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function b(a,u,f,g){for(var R=0;R<a.length;++R){var k=a[R];if(!k.da&&k.listener==u&&k.capture==!!f&&k.ha==g)return R}return-1}var S="closure_lm_"+(1e6*Math.random()|0),N={};function U(a,u,f,g,R){if(Array.isArray(u)){for(var k=0;k<u.length;k++)U(a,u[k],f,g,R);return null}return f=ue(f),a&&a[V]?a.K(u,f,h(g)?!!g.capture:!1,R):L(a,u,f,!1,g,R)}function L(a,u,f,g,R,k){if(!u)throw Error("Invalid event type");var K=h(R)?!!R.capture:!!R,Ne=Y(a);if(Ne||(a[S]=Ne=new Se(a)),f=Ne.add(u,f,g,K,k),f.proxy)return f;if(g=G(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)er||(R=K),R===void 0&&(R=!1),a.addEventListener(u.toString(),g,R);else if(a.attachEvent)a.attachEvent(B(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function G(){function a(f){return u.call(a.src,a.listener,f)}const u=oe;return a}function W(a,u,f,g,R){if(Array.isArray(u))for(var k=0;k<u.length;k++)W(a,u[k],f,g,R);else g=h(g)?!!g.capture:!!g,f=ue(f),a&&a[V]?(a=a.i,u=String(u).toString(),u in a.g&&(k=a.g[u],f=b(k,f,g,R),-1<f&&(ee(k[f]),Array.prototype.splice.call(k,f,1),k.length==0&&(delete a.g[u],a.h--)))):a&&(a=Y(a))&&(u=a.g[u.toString()],a=-1,u&&(a=b(u,f,g,R)),(f=-1<a?u[a]:null)&&q(f))}function q(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[V])v(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent(B(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=Y(u))?(v(f,a),f.h==0&&(f.src=null,u[S]=null)):ee(a)}}}function B(a){return a in N?N[a]:N[a]="on"+a}function oe(a,u){if(a.da)a=!0;else{u=new mn(u,this);var f=a.listener,g=a.ha||a.src;a.fa&&q(a),a=f.call(g,u)}return a}function Y(a){return a=a[S],a instanceof Se?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(u){return a.handleEvent(u)}),a[ne])}function ae(){He.call(this),this.i=new Se(this),this.M=this,this.F=null}P(ae,He),ae.prototype[V]=!0,ae.prototype.removeEventListener=function(a,u,f,g){W(this,a,u,f,g)};function ge(a,u){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new qe(u,a);else if(u instanceof qe)u.target=u.target||a;else{var R=u;u=new qe(g,a),T(u,R)}if(R=!0,f)for(var k=f.length-1;0<=k;k--){var K=u.g=f[k];R=Te(K,g,!0,u)&&R}if(K=u.g=a,R=Te(K,g,!0,u)&&R,R=Te(K,g,!1,u)&&R,f)for(k=0;k<f.length;k++)K=u.g=f[k],R=Te(K,g,!1,u)&&R}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],g=0;g<f.length;g++)ee(f[g]);delete a.g[u],a.h--}}this.F=null},ae.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},ae.prototype.L=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function Te(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,k=0;k<u.length;++k){var K=u[k];if(K&&!K.da&&K.capture==f){var Ne=K.listener,ut=K.ha||K.src;K.fa&&v(a.i,K),R=Ne.call(ut,g)!==!1&&R}}return R&&!g.defaultPrevented}function mt(a,u,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function lt(a){a.g=mt(()=>{a.g=null,a.i&&(a.i=!1,lt(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Xt extends He{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:lt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gt(a){He.call(this),this.h=a,this.g={}}P(gt,He);var tr=[];function di(a){_e(a.g,function(u,f){this.g.hasOwnProperty(f)&&q(u)},a),a.g={}}gt.prototype.N=function(){gt.aa.N.call(this),di(this)},gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ct=l.JSON.stringify,Zt=l.JSON.parse,Fo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Yl(){}Yl.prototype.h=null;function cd(a){return a.h||(a.h=a.i())}function ud(){}var fi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Jl(){qe.call(this,"d")}P(Jl,qe);function Xl(){qe.call(this,"c")}P(Xl,qe);var Fr={},hd=null;function Uo(){return hd=hd||new ae}Fr.La="serverreachability";function dd(a){qe.call(this,Fr.La,a)}P(dd,qe);function pi(a){const u=Uo();ge(u,new dd(u))}Fr.STAT_EVENT="statevent";function fd(a,u){qe.call(this,Fr.STAT_EVENT,a),this.stat=u}P(fd,qe);function St(a){const u=Uo();ge(u,new fd(u,a))}Fr.Ma="timingevent";function pd(a,u){qe.call(this,Fr.Ma,a),this.size=u}P(pd,qe);function mi(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function gi(){this.g=!0}gi.prototype.xa=function(){this.g=!1};function Fv(a,u,f,g,R,k){a.info(function(){if(a.g)if(k)for(var K="",Ne=k.split("&"),ut=0;ut<Ne.length;ut++){var Re=Ne[ut].split("=");if(1<Re.length){var _t=Re[0];Re=Re[1];var yt=_t.split("_");K=2<=yt.length&&yt[1]=="type"?K+(_t+"="+Re+"&"):K+(_t+"=redacted&")}}else K=null;else K=k;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+f+`
`+K})}function Uv(a,u,f,g,R,k,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+f+`
`+k+" "+K})}function ps(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+$v(a,f)+(g?" "+g:"")})}function Bv(a,u){a.info(function(){return"TIMEOUT: "+u})}gi.prototype.info=function(){};function $v(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var k=R[0];if(k!="noop"&&k!="stop"&&k!="close")for(var K=1;K<R.length;K++)R[K]=""}}}}return ct(f)}catch{return u}}var Bo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},md={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zl;function $o(){}P($o,Yl),$o.prototype.g=function(){return new XMLHttpRequest},$o.prototype.i=function(){return{}},Zl=new $o;function nr(a,u,f,g){this.j=a,this.i=u,this.l=f,this.R=g||1,this.U=new gt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gd}function gd(){this.i=null,this.g="",this.h=!1}var _d={},ec={};function tc(a,u,f){a.L=1,a.v=zo(On(u)),a.m=f,a.P=!0,yd(a,null)}function yd(a,u){a.F=Date.now(),jo(a),a.A=On(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Od(f.i,"t",g),a.C=0,f=a.j.J,a.h=new gd,a.g=Yd(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Xt(m(a.Y,a,a.g),a.O)),u=a.U,f=a.g,g=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(tr[0]=R.toString()),R=tr);for(var k=0;k<R.length;k++){var K=U(f,R[k],g||u.handleEvent,!1,u.h||u);if(!K)break;u.g[K.key]=K}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),pi(),Fv(a.i,a.u,a.A,a.l,a.R,a.m)}nr.prototype.ca=function(a){a=a.target;const u=this.M;u&&Dn(a)==3?u.j():this.Y(a)},nr.prototype.Y=function(a){try{if(a==this.g)e:{const yt=Dn(this.g);var u=this.g.Ba();const _s=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||Ud(this.g)))){this.J||yt!=4||u==7||(u==8||0>=_s?pi(3):pi(2)),nc(this);var f=this.g.Z();this.X=f;t:if(wd(this)){var g=Ud(this.g);a="";var R=g.length,k=Dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ur(this),_i(this);var K="";break t}this.h.i=new l.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(k&&u==R-1)});g.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=f==200,Uv(this.i,this.u,this.A,this.l,this.R,yt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,ut=this.g;if((Ne=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Ne)){var Re=Ne;break t}}Re=null}if(f=Re)ps(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rc(this,f);else{this.o=!1,this.s=3,St(12),Ur(this),_i(this);break e}}if(this.P){f=!0;let ln;for(;!this.J&&this.C<K.length;)if(ln=jv(this,K),ln==ec){yt==4&&(this.s=4,St(14),f=!1),ps(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==_d){this.s=4,St(15),ps(this.i,this.l,K,"[Invalid Chunk]"),f=!1;break}else ps(this.i,this.l,ln,null),rc(this,ln);if(wd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||K.length!=0||this.h.h||(this.s=1,St(16),f=!1),this.o=this.o&&f,!f)ps(this.i,this.l,K,"[Invalid Chunked Response]"),Ur(this),_i(this);else if(0<K.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),cc(_t),_t.M=!0,St(11))}}else ps(this.i,this.l,K,null),rc(this,K);yt==4&&Ur(this),this.o&&!this.J&&(yt==4?Wd(this.j,this):(this.o=!1,jo(this)))}else iE(this.g),f==400&&0<K.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Ur(this),_i(this)}}}catch{}finally{}};function wd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function jv(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?ec:(f=Number(u.substring(f,g)),isNaN(f)?_d:(g+=1,g+f>u.length?ec:(u=u.slice(g,g+f),a.C=g+f,u)))}nr.prototype.cancel=function(){this.J=!0,Ur(this)};function jo(a){a.S=Date.now()+a.I,vd(a,a.I)}function vd(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=mi(m(a.ba,a),u)}function nc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}nr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Bv(this.i,this.A),this.L!=2&&(pi(),St(17)),Ur(this),this.s=2,_i(this)):vd(this,this.S-a)};function _i(a){a.j.G==0||a.J||Wd(a.j,a)}function Ur(a){nc(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,di(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function rc(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||sc(f.h,a))){if(!a.K&&sc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Jo(f),Qo(f);else break e;lc(f),St(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=mi(m(f.Za,f),6e3));if(1>=Td(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else $r(f,11)}else if((a.K||f.g==a)&&Jo(f),!$(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let Re=R[u];if(f.T=Re[0],Re=Re[1],f.G==2)if(Re[0]=="c"){f.K=Re[1],f.ia=Re[2];const _t=Re[3];_t!=null&&(f.la=_t,f.j.info("VER="+f.la));const yt=Re[4];yt!=null&&(f.Aa=yt,f.j.info("SVER="+f.Aa));const _s=Re[5];_s!=null&&typeof _s=="number"&&0<_s&&(g=1.5*_s,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const ln=a.g;if(ln){const Zo=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zo){var k=g.h;k.g||Zo.indexOf("spdy")==-1&&Zo.indexOf("quic")==-1&&Zo.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(ic(k,k.h),k.h=null))}if(g.D){const uc=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;uc&&(g.ya=uc,$e(g.I,g.D,uc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var K=a;if(g.qa=Qd(g,g.J?g.ia:null,g.W),K.K){Id(g.h,K);var Ne=K,ut=g.L;ut&&(Ne.I=ut),Ne.B&&(nc(Ne),jo(Ne)),g.g=K}else qd(g);0<f.i.length&&Yo(f)}else Re[0]!="stop"&&Re[0]!="close"||$r(f,7);else f.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?$r(f,7):ac(f):Re[0]!="noop"&&f.l&&f.l.ta(Re),f.v=0)}}pi(4)}catch{}}var Hv=class{constructor(a,u){this.g=a,this.map=u}};function Ed(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Td(a){return a.h?1:a.g?a.g.size:0}function sc(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function ic(a,u){a.g?a.g.add(u):a.h=u}function Id(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Ed.prototype.cancel=function(){if(this.i=Ad(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ad(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return O(a.i)}function qv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],f=a.length,g=0;g<f;g++)u.push(a[g]);return u}u=[],f=0;for(g in a)u[f++]=a[g];return u}function zv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const g in a)u[f++]=g;return u}}}function Cd(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=zv(a),g=qv(a),R=g.length,k=0;k<R;k++)u.call(void 0,g[k],f&&f[k],a)}var Sd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wv(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),R=null;if(0<=g){var k=a[f].substring(0,g);R=a[f].substring(g+1)}else k=a[f];u(k,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Br(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Br){this.h=a.h,Ho(this,a.j),this.o=a.o,this.g=a.g,qo(this,a.s),this.l=a.l;var u=a.i,f=new vi;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Rd(this,f),this.m=a.m}else a&&(u=String(a).match(Sd))?(this.h=!1,Ho(this,u[1]||"",!0),this.o=yi(u[2]||""),this.g=yi(u[3]||"",!0),qo(this,u[4]),this.l=yi(u[5]||"",!0),Rd(this,u[6]||"",!0),this.m=yi(u[7]||"")):(this.h=!1,this.i=new vi(null,this.h))}Br.prototype.toString=function(){var a=[],u=this.j;u&&a.push(wi(u,Pd,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(wi(u,Pd,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(wi(f,f.charAt(0)=="/"?Qv:Gv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",wi(f,Jv)),a.join("")};function On(a){return new Br(a)}function Ho(a,u,f){a.j=f?yi(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function qo(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Rd(a,u,f){u instanceof vi?(a.i=u,Xv(a.i,a.h)):(f||(u=wi(u,Yv)),a.i=new vi(u,a.h))}function $e(a,u,f){a.i.set(u,f)}function zo(a){return $e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function yi(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function wi(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,Kv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Kv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Pd=/[#\/\?@]/g,Gv=/[#\?:]/g,Qv=/[#\?]/g,Yv=/[#\?@]/g,Jv=/#/g;function vi(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function rr(a){a.g||(a.g=new Map,a.h=0,a.i&&Wv(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=vi.prototype,t.add=function(a,u){rr(this),this.i=null,a=ms(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function kd(a,u){rr(a),u=ms(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function xd(a,u){return rr(a),u=ms(a,u),a.g.has(u)}t.forEach=function(a,u){rr(this),this.g.forEach(function(f,g){f.forEach(function(R){a.call(u,R,g,this)},this)},this)},t.na=function(){rr(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const R=a[g];for(let k=0;k<R.length;k++)f.push(u[g])}return f},t.V=function(a){rr(this);let u=[];if(typeof a=="string")xd(this,a)&&(u=u.concat(this.g.get(ms(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return rr(this),this.i=null,a=ms(this,a),xd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Od(a,u,f){kd(a,u),0<f.length&&(a.i=null,a.g.set(ms(a,u),O(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const k=encodeURIComponent(String(g)),K=this.V(g);for(g=0;g<K.length;g++){var R=k;K[g]!==""&&(R+="="+encodeURIComponent(String(K[g]))),a.push(R)}}return this.i=a.join("&")};function ms(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Xv(a,u){u&&!a.j&&(rr(a),a.i=null,a.g.forEach(function(f,g){var R=g.toLowerCase();g!=R&&(kd(this,g),Od(this,R,f))},a)),a.j=u}function Zv(a,u){const f=new gi;if(l.Image){const g=new Image;g.onload=_(sr,f,"TestLoadImage: loaded",!0,u,g),g.onerror=_(sr,f,"TestLoadImage: error",!1,u,g),g.onabort=_(sr,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=_(sr,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function eE(a,u){const f=new gi,g=new AbortController,R=setTimeout(()=>{g.abort(),sr(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(R),k.ok?sr(f,"TestPingServer: ok",!0,u):sr(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),sr(f,"TestPingServer: error",!1,u)})}function sr(a,u,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function tE(){this.g=new Fo}function nE(a,u,f){const g=f||"";try{Cd(a,function(R,k){let K=R;h(R)&&(K=ct(R)),u.push(g+k+"="+encodeURIComponent(K))})}catch(R){throw u.push(g+"type="+encodeURIComponent("_badmap")),R}}function Wo(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Wo,Yl),Wo.prototype.g=function(){return new Ko(this.l,this.j)},Wo.prototype.i=function(a){return function(){return a}}({});function Ko(a,u){ae.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ko,ae),t=Ko.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,bi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ei(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ei(this):bi(this),this.readyState==3&&Dd(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ei(this))},t.Qa=function(a){this.g&&(this.response=a,Ei(this))},t.ga=function(){this.g&&Ei(this)};function Ei(a){a.readyState=4,a.l=null,a.j=null,a.v=null,bi(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function bi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ko.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Vd(a){let u="";return _e(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function oc(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Vd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):$e(a,u,f))}function Ge(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ge,ae);var rE=/^https?$/i,sE=["POST","PUT"];t=Ge.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zl.g(),this.v=this.o?cd(this.o):cd(Zl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){Nd(this,k);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())f.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(k=>k.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(sE,u,void 0))||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,K]of f)this.g.setRequestHeader(k,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fd(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){Nd(this,k)}};function Nd(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Ld(a),Go(a)}function Ld(a){a.A||(a.A=!0,ge(a,"complete"),ge(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ge(this,"complete"),ge(this,"abort"),Go(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Go(this,!0)),Ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Md(this):this.bb())},t.bb=function(){Md(this)};function Md(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Dn(a)!=4||a.Z()!=2)){if(a.u&&Dn(a)==4)mt(a.Ea,0,a);else if(ge(a,"readystatechange"),Dn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=K===0){var R=String(a.D).match(Sd)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),g=!rE.test(R?R.toLowerCase():"")}f=g}if(f)ge(a,"complete"),ge(a,"success");else{a.m=6;try{var k=2<Dn(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",Ld(a)}}finally{Go(a)}}}}function Go(a,u){if(a.g){Fd(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ge(a,"ready");try{f.onreadystatechange=g}catch{}}}function Fd(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Dn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Dn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Zt(u)}};function Ud(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function iE(a){const u={};a=(a.g&&2<=Dn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if($(a[g]))continue;var f=A(a[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const k=u[R]||[];u[R]=k,k.push(f)}I(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ti(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function Bd(a){this.Aa=0,this.i=[],this.j=new gi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ti("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ti("baseRetryDelayMs",5e3,a),this.cb=Ti("retryDelaySeedMs",1e4,a),this.Wa=Ti("forwardChannelMaxRetries",2,a),this.wa=Ti("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ed(a&&a.concurrentRequestLimit),this.Da=new tE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Bd.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,g){St(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Qd(this,null,this.W),Yo(this)};function ac(a){if($d(a),a.G==3){var u=a.U++,f=On(a.I);if($e(f,"SID",a.K),$e(f,"RID",u),$e(f,"TYPE","terminate"),Ii(a,f),u=new nr(a,a.j,u),u.L=2,u.v=zo(On(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Yd(u.j,null),u.g.ea(u.v)),u.F=Date.now(),jo(u)}Gd(a)}function Qo(a){a.g&&(cc(a),a.g.cancel(),a.g=null)}function $d(a){Qo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Jo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Yo(a){if(!bd(a.h)&&!a.s){a.s=!0;var u=a.Ga;de||an(),we||(de(),we=!0),jt.add(u,a),a.B=0}}function oE(a,u){return Td(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=mi(m(a.Ga,a,u),Kd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new nr(this,this.j,a);let k=this.o;if(this.S&&(k?(k=y(k),T(k,this.S)):k=this.S),this.m!==null||this.O||(R.H=k,k=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Hd(this,R,u),f=On(this.I),$e(f,"RID",a),$e(f,"CVER",22),this.D&&$e(f,"X-HTTP-Session-Id",this.D),Ii(this,f),k&&(this.O?u="headers="+encodeURIComponent(String(Vd(k)))+"&"+u:this.m&&oc(f,this.m,k)),ic(this.h,R),this.Ua&&$e(f,"TYPE","init"),this.P?($e(f,"$req",u),$e(f,"SID","null"),R.T=!0,tc(R,f,null)):tc(R,f,u),this.G=2}}else this.G==3&&(a?jd(this,a):this.i.length==0||bd(this.h)||jd(this))};function jd(a,u){var f;u?f=u.l:f=a.U++;const g=On(a.I);$e(g,"SID",a.K),$e(g,"RID",f),$e(g,"AID",a.T),Ii(a,g),a.m&&a.o&&oc(g,a.m,a.o),f=new nr(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Hd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ic(a.h,f),tc(f,g,u)}function Ii(a,u){a.H&&_e(a.H,function(f,g){$e(u,g,f)}),a.l&&Cd({},function(f,g){$e(u,g,f)})}function Hd(a,u,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var R=a.i;let k=-1;for(;;){const K=["count="+f];k==-1?0<f?(k=R[0].g,K.push("ofs="+k)):k=0:K.push("ofs="+k);let Ne=!0;for(let ut=0;ut<f;ut++){let Re=R[ut].g;const _t=R[ut].map;if(Re-=k,0>Re)k=Math.max(0,R[ut].g-100),Ne=!1;else try{nE(_t,K,"req"+Re+"_")}catch{g&&g(_t)}}if(Ne){g=K.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,g}function qd(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;de||an(),we||(de(),we=!0),jt.add(u,a),a.v=0}}function lc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=mi(m(a.Fa,a),Kd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,zd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=mi(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),Qo(this),zd(this))};function cc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function zd(a){a.g=new nr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=On(a.qa);$e(u,"RID","rpc"),$e(u,"SID",a.K),$e(u,"AID",a.T),$e(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&$e(u,"TO",a.ja),$e(u,"TYPE","xmlhttp"),Ii(a,u),a.m&&a.o&&oc(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=zo(On(u)),f.m=null,f.P=!0,yd(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Qo(this),lc(this),St(19))};function Jo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Wd(a,u){var f=null;if(a.g==u){Jo(a),cc(a),a.g=null;var g=2}else if(sc(a.h,u))f=u.D,Id(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=a.B;g=Uo(),ge(g,new pd(g,f)),Yo(a)}else qd(a);else if(R=u.s,R==3||R==0&&0<u.X||!(g==1&&oE(a,u)||g==2&&lc(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),R){case 1:$r(a,5);break;case 4:$r(a,10);break;case 3:$r(a,6);break;default:$r(a,2)}}}function Kd(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function $r(a,u){if(a.j.info("Error code "+u),u==2){var f=m(a.fb,a),g=a.Xa;const R=!g;g=new Br(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ho(g,"https"),zo(g),R?Zv(g.toString(),f):eE(g.toString(),f)}else St(2);a.G=0,a.l&&a.l.sa(u),Gd(a),$d(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Gd(a){if(a.G=0,a.ka=[],a.l){const u=Ad(a.h);(u.length!=0||a.i.length!=0)&&(D(a.ka,u),D(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function Qd(a,u,f){var g=f instanceof Br?On(f):new Br(f);if(g.g!="")u&&(g.g=u+"."+g.g),qo(g,g.s);else{var R=l.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var k=new Br(null);g&&Ho(k,g),u&&(k.g=u),R&&qo(k,R),f&&(k.l=f),g=k}return f=a.D,u=a.ya,f&&u&&$e(g,f,u),$e(g,"VER",a.la),Ii(a,g),g}function Yd(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Ge(new Wo({eb:f})):new Ge(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jd(){}t=Jd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Xo(){}Xo.prototype.g=function(a,u){return new Ht(a,u)};function Ht(a,u){ae.call(this),this.g=new Bd(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!$(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new gs(this)}P(Ht,ae),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){ac(this.g)},Ht.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ct(a),a=f);u.i.push(new Hv(u.Ya++,a)),u.G==3&&Yo(u)},Ht.prototype.N=function(){this.g.l=null,delete this.j,ac(this.g),delete this.g,Ht.aa.N.call(this)};function Xd(a){Jl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}P(Xd,Jl);function Zd(){Xl.call(this),this.status=1}P(Zd,Xl);function gs(a){this.g=a}P(gs,Jd),gs.prototype.ua=function(){ge(this.g,"a")},gs.prototype.ta=function(a){ge(this.g,new Xd(a))},gs.prototype.sa=function(a){ge(this.g,new Zd)},gs.prototype.ra=function(){ge(this.g,"b")},Xo.prototype.createWebChannel=Xo.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,Y_=function(){return new Xo},Q_=function(){return Uo()},G_=Fr,ou={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bo.NO_ERROR=0,Bo.TIMEOUT=8,Bo.HTTP_ERROR=6,ya=Bo,md.COMPLETE="complete",K_=md,ud.EventType=fi,fi.OPEN="a",fi.CLOSE="b",fi.ERROR="c",fi.MESSAGE="d",ae.prototype.listen=ae.prototype.K,xi=ud,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,W_=Ge}).apply(typeof sa<"u"?sa:typeof self<"u"?self:typeof window<"u"?window:{});const up="@firebase/firestore",hp="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new Qu("@firebase/firestore");function Es(){return ss.logLevel}function X(t,...e){if(ss.logLevel<=ve.DEBUG){const n=e.map(ah);ss.debug(`Firestore (${ni}): ${t}`,...n)}}function Qn(t,...e){if(ss.logLevel<=ve.ERROR){const n=e.map(ah);ss.error(`Firestore (${ni}): ${t}`,...n)}}function Hs(t,...e){if(ss.logLevel<=ve.WARN){const n=e.map(ah);ss.warn(`Firestore (${ni}): ${t}`,...n)}}function ah(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t="Unexpected state"){const e=`FIRESTORE (${ni}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function Ve(t,e){t||he()}function pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends Zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class LC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class MC{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ve(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string"),new J_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new vt(e)}}class FC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class UC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new FC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BC{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,en(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ve(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new dp(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new dp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=$C(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function qs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=-62135596800,pp=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*pp);return new nt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<fp)throw new Z(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/pp}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-fp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{static fromTimestamp(e){return new fe(e)}static min(){return new fe(new nt(0,0))}static max(){return new fe(new nt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="__name__";class yn{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=yn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=yn.isNumericId(e),s=yn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?yn.extractNumericId(e).compare(yn.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ir.fromString(e.substring(4,e.length-2))}}class je extends yn{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new je(n)}static emptyPath(){return new je([])}}const jC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends yn{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return jC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===mp}static keyField(){return new ft([mp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Z(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Z(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(je.fromString(e))}static fromName(e){return new re(je.fromString(e).popFirst(5))}static empty(){return new re(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new je(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=-1;function HC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=fe.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new Cr(s,re.empty(),e)}function qC(t){return new Cr(t.readTime,t.key,so)}class Cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Cr(fe.min(),re.empty(),so)}static max(){return new Cr(fe.max(),re.empty(),so)}}function zC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==WC)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{o[h]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function GC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function si(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Al.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh=-1;function Cl(t){return t==null}function $a(t){return t===0&&1/t==-1/0}function QC(t){return typeof t=="number"&&Number.isInteger(t)&&!$a(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="";function YC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=gp(e)),e=JC(t.get(n),e);return gp(e)}function JC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Z_:n+="";break;default:n+=i}}return n}function gp(t){return t+Z_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ey(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ia(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ia(this.root,e,this.comparator,!1)}getReverseIterator(){return new ia(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ia(this.root,e,this.comparator,!0)}}class ia{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ht.RED,this.left=s??ht.EMPTY,this.right=i??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ht(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yp(this.data.getIterator())}getIteratorFrom(e){return new yp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class yp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new rt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ty("Invalid base64 string: "+i):i}}(e);return new pt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const XC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=XC.exec(t);if(Ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rr(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="server_timestamp",ry="__type__",sy="__previous_value__",iy="__local_write_time__";function ch(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[ry])===null||n===void 0?void 0:n.stringValue)===ny}function Sl(t){const e=t.mapValue.fields[sy];return ch(e)?Sl(e):e}function io(t){const e=Sr(t.mapValue.fields[iy].timestampValue);return new nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}const ja="(default)";class oo{constructor(e,n){this.projectId=e,this.database=n||ja}static empty(){return new oo("","")}get isDefaultDatabase(){return this.database===ja}isEqual(e){return e instanceof oo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="__type__",eS="__max__",oa={mapValue:{}},ay="__vector__",Ha="value";function Pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ch(t)?4:nS(t)?9007199254740991:tS(t)?10:11:he()}function Rn(t,e){if(t===e)return!0;const n=Pr(t);if(n!==Pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return io(t).isEqual(io(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Sr(s.timestampValue),l=Sr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Rr(s.bytesValue).isEqual(Rr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ye(s.doubleValue),l=Ye(i.doubleValue);return o===l?$a(o)===$a(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return qs(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(_p(o)!==_p(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Rn(o[c],l[c])))return!1;return!0}(t,e);default:return he()}}function ao(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function zs(t,e){if(t===e)return 0;const n=Pr(t),r=Pr(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ye(i.integerValue||i.doubleValue),c=Ye(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return wp(t.timestampValue,e.timestampValue);case 4:return wp(io(t),io(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Rr(i),c=Rr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=be(l[h],c[h]);if(d!==0)return d}return be(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=be(Ye(i.latitude),Ye(o.latitude));return l!==0?l:be(Ye(i.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return vp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,d;const p=i.fields||{},m=o.fields||{},_=(l=p[Ha])===null||l===void 0?void 0:l.arrayValue,P=(c=m[Ha])===null||c===void 0?void 0:c.arrayValue,O=be(((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return O!==0?O:vp(_,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===oa.mapValue&&o===oa.mapValue)return 0;if(i===oa.mapValue)return 1;if(o===oa.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=be(c[p],d[p]);if(m!==0)return m;const _=zs(l[c[p]],h[d[p]]);if(_!==0)return _}return be(c.length,d.length)}(t.mapValue,e.mapValue);default:throw he()}}function wp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=Sr(t),r=Sr(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function vp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=zs(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function Ws(t){return au(t)}function au(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Rr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=au(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${au(n.fields[o])}`;return s+"}"}(t.mapValue):he()}function wa(t){switch(Pr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Sl(t);return e?16+wa(e):16;case 5:return 2*t.stringValue.length;case 6:return Rr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+wa(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Lr(r.fields,(i,o)=>{s+=i.length+wa(o)}),s}(t.mapValue);default:throw he()}}function Ep(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function lu(t){return!!t&&"integerValue"in t}function uh(t){return!!t&&"arrayValue"in t}function bp(t){return!!t&&"nullValue"in t}function Tp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function va(t){return!!t&&"mapValue"in t}function tS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[oy])===null||n===void 0?void 0:n.stringValue)===ay}function Hi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Lr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Hi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===eS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!va(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hi(n)}setAll(e){let n=ft.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Hi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());va(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];va(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Lr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ut(Hi(this.value))}}function ly(t){const e=[];return Lr(t.fields,(n,r)=>{const s=new ft([n]);if(va(r)){const i=ly(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Tt(e,0,fe.min(),fe.min(),fe.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,s){return new Tt(e,1,n,fe.min(),r,s,0)}static newNoDocument(e,n){return new Tt(e,2,n,fe.min(),fe.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new Tt(e,3,n,fe.min(),fe.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n){this.position=e,this.inclusive=n}}function Ip(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=zs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ap(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n="asc"){this.field=e,this.dir=n}}function rS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{}class et extends cy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new iS(e,n,r):n==="array-contains"?new lS(e,r):n==="in"?new cS(e,r):n==="not-in"?new uS(e,r):n==="array-contains-any"?new hS(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new oS(e,r):new aS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(zs(n,this.value)):n!==null&&Pr(this.value)===Pr(n)&&this.matchesComparison(zs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends cy{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new fn(e,n)}matches(e){return uy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function uy(t){return t.op==="and"}function hy(t){return sS(t)&&uy(t)}function sS(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function cu(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Ws(t.value);if(hy(t))return t.filters.map(e=>cu(e)).join(",");{const e=t.filters.map(n=>cu(n)).join(",");return`${t.op}(${e})`}}function dy(t,e){return t instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&Rn(r.value,s.value)}(t,e):t instanceof fn?function(r,s){return s instanceof fn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&dy(o,s.filters[l]),!0):!1}(t,e):void he()}function fy(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${Ws(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(fy).join(" ,")+"}"}(t):"Filter"}class iS extends et{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class oS extends et{constructor(e,n){super(e,"in",n),this.keys=py("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aS extends et{constructor(e,n){super(e,"not-in",n),this.keys=py("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function py(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class lS extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return uh(n)&&ao(n.arrayValue,this.value)}}class cS extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ao(this.value.arrayValue,n)}}class uS extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(ao(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ao(this.value.arrayValue,n)}}class hS extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!uh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ao(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.le=null}}function Cp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new dS(t,e,n,r,s,i,o)}function hh(t){const e=pe(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>cu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Cl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ws(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ws(r)).join(",")),e.le=n}return e.le}function dh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!dy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ap(t.startAt,e.startAt)&&Ap(t.endAt,e.endAt)}function uu(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function fS(t,e,n,r,s,i,o,l){return new Co(t,e,n,r,s,i,o,l)}function fh(t){return new Co(t)}function Sp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function my(t){return t.collectionGroup!==null}function qi(t){const e=pe(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new rt(ft.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new za(i,r))}),n.has(ft.keyField().canonicalString())||e.he.push(new za(ft.keyField(),r))}return e.he}function In(t){const e=pe(t);return e.Pe||(e.Pe=pS(e,qi(t))),e.Pe}function pS(t,e){if(t.limitType==="F")return Cp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new za(s.field,i)});const n=t.endAt?new qa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new qa(t.startAt.position,t.startAt.inclusive):null;return Cp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function hu(t,e){const n=t.filters.concat([e]);return new Co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function du(t,e,n){return new Co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rl(t,e){return dh(In(t),In(e))&&t.limitType===e.limitType}function gy(t){return`${hh(In(t))}|lt:${t.limitType}`}function bs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>fy(s)).join(", ")}]`),Cl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ws(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ws(s)).join(",")),`Target(${r})`}(In(t))}; limitType=${t.limitType})`}function Pl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of qi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=Ip(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,qi(r),s)||r.endAt&&!function(o,l,c){const h=Ip(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,qi(r),s))}(t,e)}function mS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _y(t){return(e,n)=>{let r=!1;for(const s of qi(t)){const i=gS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function gS(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?zs(c,h):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Lr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ey(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=new Ke(re.comparator);function Yn(){return _S}const yy=new Ke(re.comparator);function Oi(...t){let e=yy;for(const n of t)e=e.insert(n.key,n);return e}function wy(t){let e=yy;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Gr(){return zi()}function vy(){return zi()}function zi(){return new us(t=>t.toString(),(t,e)=>t.isEqual(e))}const yS=new Ke(re.comparator),wS=new rt(re.comparator);function Ee(...t){let e=wS;for(const n of t)e=e.add(n);return e}const vS=new rt(be);function ES(){return vS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$a(e)?"-0":e}}function Ey(t){return{integerValue:""+t}}function bS(t,e){return QC(e)?Ey(e):ph(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this._=void 0}}function TS(t,e,n){return t instanceof lo?function(s,i){const o={fields:{[ry]:{stringValue:ny},[iy]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ch(i)&&(i=Sl(i)),i&&(o.fields[sy]=i),{mapValue:o}}(n,e):t instanceof co?Ty(t,e):t instanceof uo?Iy(t,e):function(s,i){const o=by(s,i),l=Rp(o)+Rp(s.Ie);return lu(o)&&lu(s.Ie)?Ey(l):ph(s.serializer,l)}(t,e)}function IS(t,e,n){return t instanceof co?Ty(t,e):t instanceof uo?Iy(t,e):n}function by(t,e){return t instanceof Wa?function(r){return lu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class lo extends kl{}class co extends kl{constructor(e){super(),this.elements=e}}function Ty(t,e){const n=Ay(e);for(const r of t.elements)n.some(s=>Rn(s,r))||n.push(r);return{arrayValue:{values:n}}}class uo extends kl{constructor(e){super(),this.elements=e}}function Iy(t,e){let n=Ay(e);for(const r of t.elements)n=n.filter(s=>!Rn(s,r));return{arrayValue:{values:n}}}class Wa extends kl{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Rp(t){return Ye(t.integerValue||t.doubleValue)}function Ay(t){return uh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,n){this.field=e,this.transform=n}}function CS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof co&&s instanceof co||r instanceof uo&&s instanceof uo?qs(r.elements,s.elements,Rn):r instanceof Wa&&s instanceof Wa?Rn(r.Ie,s.Ie):r instanceof lo&&s instanceof lo}(t.transform,e.transform)}class SS{constructor(e,n){this.version=e,this.transformResults=n}}class hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ea(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xl{}function Cy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ry(t.key,hn.none()):new So(t.key,t.data,hn.none());{const n=t.data,r=Ut.empty();let s=new rt(ft.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Mr(t.key,r,new Wt(s.toArray()),hn.none())}}function RS(t,e,n){t instanceof So?function(s,i,o){const l=s.value.clone(),c=kp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Mr?function(s,i,o){if(!Ea(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=kp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Sy(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Wi(t,e,n,r){return t instanceof So?function(i,o,l,c){if(!Ea(i.precondition,o))return l;const h=i.value.clone(),d=xp(i.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mr?function(i,o,l,c){if(!Ea(i.precondition,o))return l;const h=xp(i.fieldTransforms,c,o),d=o.data;return d.setAll(Sy(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Ea(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function PS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=by(r.transform,s||null);i!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,i))}return n||null}function Pp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qs(r,s,(i,o)=>CS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class So extends xl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mr extends xl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kp(t,e,n){const r=new Map;Ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,IS(o,l,n[s]))}return r}function xp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,TS(i,o,e))}return r}class Ry extends xl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kS extends xl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&RS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Wi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Wi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=vy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Cy(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&qs(this.mutations,e.mutations,(n,r)=>Pp(n,r))&&qs(this.baseMutations,e.baseMutations,(n,r)=>Pp(n,r))}}class mh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length);let s=function(){return yS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new mh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,Ie;function VS(t){switch(t){case F.OK:return he();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return he()}}function Py(t){if(t===void 0)return Qn("GRPC error has no .code"),F.UNKNOWN;switch(t){case Ze.OK:return F.OK;case Ze.CANCELLED:return F.CANCELLED;case Ze.UNKNOWN:return F.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return F.INTERNAL;case Ze.UNAVAILABLE:return F.UNAVAILABLE;case Ze.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Ze.NOT_FOUND:return F.NOT_FOUND;case Ze.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Ze.ABORTED:return F.ABORTED;case Ze.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Ze.DATA_LOSS:return F.DATA_LOSS;default:return he()}}(Ie=Ze||(Ze={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=new Ir([4294967295,4294967295],0);function Op(t){const e=NS().encode(t),n=new z_;return n.update(e),new Uint8Array(n.digest())}function Dp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ir([n,r],0),new Ir([s,i],0)]}class gh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Di(`Invalid padding: ${n}`);if(r<0)throw new Di(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Di(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Di(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Ir.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(Ir.fromNumber(r)));return s.compare(LS)===1&&(s=new Ir([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=Op(e),[r,s]=Dp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new gh(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ee===0)return;const n=Op(e),[r,s]=Dp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Di extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ro.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ol(fe.min(),s,new Ke(be),Yn(),Ee())}}class Ro{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ro(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class ky{constructor(e,n){this.targetId=e,this.ge=n}}class xy{constructor(e,n,r=pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Vp{constructor(){this.pe=0,this.ye=Np(),this.we=pt.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=Ee(),n=Ee(),r=Ee();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new Ro(this.we,this.be,e,n,r)}Me(){this.Se=!1,this.ye=Np()}xe(e,n){this.Se=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ve(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class MS{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Yn(),this.$e=aa(),this.Ke=aa(),this.Ue=new Ke(be)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(uu(i))if(r===0){const o=new re(i.path);this.ze(n,o,Tt.newNoDocument(o,fe.min()))}else Ve(r===1);else{const o=this.et(n);if(o!==r){const l=this.tt(e),c=l?this.nt(l,e,o):1;if(c!==0){this.Ye(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,h)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Rr(r).toUint8Array()}catch(c){if(c instanceof ty)return Hs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new gh(o,s,i)}catch(c){return Hs(c instanceof Di?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.it(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,o)=>{const l=this.Xe(o);if(l){if(i.current&&uu(l.target)){const c=new re(l.target.path);this._t(c).has(o)||this.ut(o,c)||this.ze(o,c,Tt.newNoDocument(c,e))}i.ve&&(n.set(o,i.Fe()),i.Me())}});let r=Ee();this.Ke.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Xe(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new Ol(e,n,this.Ue,this.Qe,r);return this.Qe=Yn(),this.$e=aa(),this.Ke=aa(),this.Ue=new Ke(be),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new Vp,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new rt(be),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new rt(be),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Vp),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function aa(){return new Ke(re.comparator)}function Np(){return new Ke(re.comparator)}const FS={asc:"ASCENDING",desc:"DESCENDING"},US={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},BS={and:"AND",or:"OR"};class $S{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function fu(t,e){return t.useProto3Json||Cl(e)?e:{value:e}}function Ka(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Oy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jS(t,e){return Ka(t,e.toTimestamp())}function An(t){return Ve(!!t),fe.fromTimestamp(function(n){const r=Sr(n);return new nt(r.seconds,r.nanos)}(t))}function _h(t,e){return pu(t,e).canonicalString()}function pu(t,e){const n=function(s){return new je(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Dy(t){const e=je.fromString(t);return Ve(Fy(e)),e}function mu(t,e){return _h(t.databaseId,e.path)}function Pc(t,e){const n=Dy(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(Ny(n))}function Vy(t,e){return _h(t.databaseId,e)}function HS(t){const e=Dy(t);return e.length===4?je.emptyPath():Ny(e)}function gu(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ny(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Lp(t,e,n){return{name:mu(t,e),fields:n.value.mapValue.fields}}function qS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ve(d===void 0||typeof d=="string"),pt.fromBase64String(d||"")):(Ve(d===void 0||d instanceof Buffer||d instanceof Uint8Array),pt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?F.UNKNOWN:Py(h.code);return new Z(d,h.message||"")}(o);n=new xy(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Pc(t,r.document.name),i=An(r.document.updateTime),o=r.document.createTime?An(r.document.createTime):fe.min(),l=new Ut({mapValue:{fields:r.document.fields}}),c=Tt.newFoundDocument(s,i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new ba(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Pc(t,r.document),i=r.readTime?An(r.readTime):fe.min(),o=Tt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ba([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Pc(t,r.document),i=r.removedTargetIds||[];n=new ba([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new DS(s,i),l=r.targetId;n=new ky(l,o)}}return n}function zS(t,e){let n;if(e instanceof So)n={update:Lp(t,e.key,e.value)};else if(e instanceof Ry)n={delete:mu(t,e.key)};else if(e instanceof Mr)n={update:Lp(t,e.key,e.data),updateMask:eR(e.fieldMask)};else{if(!(e instanceof kS))return he();n={verify:mu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof lo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof co)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof uo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Wa)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:jS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function WS(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?An(s.updateTime):An(i);return o.isEqual(fe.min())&&(o=An(i)),new SS(o,s.transformResults||[])}(n,e))):[]}function KS(t,e){return{documents:[Vy(t,e.path)]}}function GS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Vy(t,s);const i=function(h){if(h.length!==0)return My(fn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:Ts(m.field),direction:JS(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=fu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:n,parent:s}}function QS(t){let e=HS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=Ly(p);return m instanceof fn&&hy(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new za(Is(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Cl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,_=p.values||[];return new qa(_,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,_=p.values||[];return new qa(_,m)}(n.endAt)),fS(e,s,o,i,l,"F",c,h)}function YS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ly(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Is(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Is(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Is(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Is(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return et.create(Is(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>Ly(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function JS(t){return FS[t]}function XS(t){return US[t]}function ZS(t){return BS[t]}function Ts(t){return{fieldPath:t.canonicalString()}}function Is(t){return ft.fromServerFormat(t.fieldPath)}function My(t){return t instanceof et?function(n){if(n.op==="=="){if(Tp(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NAN"}};if(bp(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Tp(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NOT_NAN"}};if(bp(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ts(n.field),op:XS(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(s=>My(s));return r.length===1?r[0]:{compositeFilter:{op:ZS(n.op),filters:r}}}(t):he()}function eR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Fy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,r,s,i=fe.min(),o=fe.min(),l=pt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e){this.Tt=e}}function nR(t){const e=QS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?du(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.Tn=new sR}addToCollectionParentIndex(e,n){return this.Tn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Cr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Cr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class sR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new rt(je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new rt(je.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Uy=41943040;class Mt{static withCacheSize(e){return new Mt(e,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.DEFAULT_COLLECTION_PERCENTILE=10,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mt.DEFAULT=new Mt(Uy,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mt.DISABLED=new Mt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Ks(0)}static Un(){return new Ks(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="LruGarbageCollector",iR=1048576;function Up([t,e],[n,r]){const s=be(t,n);return s===0?be(e,r):s}class oR{constructor(e){this.Hn=e,this.buffer=new rt(Up),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Up(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class aR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){X(Fp,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){si(n)?X(Fp,"Ignoring IndexedDB error during garbage collection: ",n):await ri(n)}await this.er(3e5)})}}class lR{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Al.ae);const r=new oR(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Mp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Mp):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,o,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Es()<=ve.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function cR(t,e){return new lR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(){this.changes=new us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Wi(r.mutation,s,Wt.empty(),nt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=Gr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Oi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Gr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Yn();const o=zi(),l=function(){return zi()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Mr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),Wi(d.mutation,h,d.mutation.getFieldMask(),nt.now())):o.set(h.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new hR(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=zi();let s=new Ke((o,l)=>o-l),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Wt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||Ee()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=vy();d.forEach(m=>{if(!i.has(m)){const _=Cy(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):my(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Gr());let l=so,c=i;return o.next(h=>M.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,Ee())).next(d=>({batchId:l,changes:wy(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=Oi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Oi();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,c=>{const h=function(p,m){return new Co(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,Tt.newInvalidDocument(d)))});let l=Oi();return o.forEach((c,h)=>{const d=i.get(c);d!==void 0&&Wi(d.mutation,h,Wt.empty(),nt.now()),Pl(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return M.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:An(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:nR(s.bundledQuery),readTime:An(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(){this.overlays=new Ke(re.comparator),this.Rr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Gr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Gr(),i=n.length+1,o=new re(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ke((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Gr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Gr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return M.resolve(l)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new OS(n,r));let i=this.Rr.get(n);i===void 0&&(i=Ee(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this.Vr=new rt(st.mr),this.gr=new rt(st.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new st(e,n))}br(e,n){e.forEach(r=>this.removeReference(r,n))}Sr(e){const n=new re(new je([])),r=new st(n,e),s=new st(n,e+1),i=[];return this.gr.forEachInRange([r,s],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new re(new je([])),r=new st(n,e),s=new st(n,e+1);let i=Ee();return this.gr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new st(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return re.comparator(e.key,n.key)||be(e.Cr,n.Cr)}static pr(e,n){return be(e.Cr,n.Cr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new rt(st.mr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xS(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Mr=this.Mr.add(new st(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?lh:this.Fr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),s=new st(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],o=>{const l=this.Or(o.Cr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(be);return n.forEach(s=>{const i=new st(s,0),o=new st(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],l=>{r=r.add(l.Cr)})}),M.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new st(new re(i),0);let l=new rt(be);return this.Mr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Cr)),!0)},o),M.resolve(this.Br(l))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ve(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return M.forEach(n.mutations,s=>{const i=new st(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new st(n,0),s=this.Mr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.kr=e,this.docs=function(){return new Ke(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let r=Yn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Tt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Yn();const o=n.path,l=new re(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||zC(qC(d),r)<=0||(s.has(d.key)||Pl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}qr(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new yR(this)}getSize(e){return M.resolve(this.size)}}class yR extends uR{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.persistence=e,this.Qr=new us(n=>hh(n),dh),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.$r=0,this.Kr=new yh,this.targetCount=0,this.Ur=Ks.Kn()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),M.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new Ks(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.zn(n),M.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Kr.yr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Kr.br(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Kr.vr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Kr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Al(0),this.zr=!1,this.zr=!0,this.jr=new mR,this.referenceDelegate=e(this),this.Hr=new wR(this),this.indexManager=new rR,this.remoteDocumentCache=function(s){return new _R(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new tR(n),this.Yr=new fR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new gR(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new vR(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return M.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class vR extends KC{constructor(e){super(),this.currentSequenceNumber=e}}class wh{constructor(e){this.persistence=e,this.ti=new yh,this.ni=null}static ri(e){return new wh(e)}get ii(){if(this.ni)return this.ni;throw he()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),M.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.ii,r=>{const s=re.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,fe.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return M.or([()=>M.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class Ga{constructor(e,n){this.persistence=e,this.oi=new us(r=>YC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=cR(this,n)}static ri(e,n){return new Ga(e,n)}Zr(){}Xr(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return M.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,n).next(l=>{l||(r++,i.removeEntry(o,fe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),M.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=wa(e.data.value)),n}ar(e,n,r){return M.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new vh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return n0()?8:GC(At())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ER;return this._s(e,n,o).next(l=>{if(i.result=l,this.Xi)return this.us(e,n,o,l.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(Es()<=ve.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",bs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),M.resolve()):(Es()<=ve.DEBUG&&X("QueryEngine","Query:",bs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Es()<=ve.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",bs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,In(n))):M.resolve())}rs(e,n){if(Sp(n))return M.resolve(null);let r=In(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=du(n,null,"F"),r=In(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.ns.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.cs(n,l);return this.ls(n,h,o,c.readTime)?this.rs(e,du(n,null,"F")):this.hs(e,h,n,c)}))})))}ss(e,n,r,s){return Sp(n)||s.isEqual(fe.min())?M.resolve(null):this.ns.getDocuments(e,r).next(i=>{const o=this.cs(n,i);return this.ls(n,o,r,s)?M.resolve(null):(Es()<=ve.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),bs(n)),this.hs(e,o,n,HC(s,so)).next(l=>l))})}cs(e,n){let r=new rt(_y(e));return n.forEach((s,i)=>{Pl(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return Es()<=ve.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",bs(n)),this.ns.getDocumentsMatchingQuery(e,n,Cr.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="LocalStore",TR=3e8;class IR{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new Ke(be),this.Is=new us(i=>hh(i),dh),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dR(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function AR(t,e,n,r){return new IR(t,e,n,r)}async function $y(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ee();for(const h of s){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Rs:h,removedBatchIds:o,addedBatchIds:l}))})})}function CR(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,m=p.keys();let _=M.resolve();return m.forEach(P=>{_=_.next(()=>d.getEntry(c,P)).next(O=>{const D=h.docVersions.get(P);Ve(D!==null),O.version.compareTo(D)<0&&(p.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),d.addEntry(O)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ee();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function jy(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function SR(t,e){const n=pe(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Hr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Hr.addMatchingKeys(i,d.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(pt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(O,D,H){return O.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=TR?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(m,_,d)&&l.push(n.Hr.updateTargetData(i,_))});let c=Yn(),h=Ee();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(RR(i,o,e.documentUpdates).next(d=>{c=d.Vs,h=d.fs})),!r.isEqual(fe.min())){const d=n.Hr.getLastRemoteSnapshotVersion(i).next(p=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.Ts=s,i))}function RR(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Yn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):X(Eh,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Vs:o,fs:s}})}function PR(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=lh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function kR(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Hr.allocateTargetId(r).next(o=>(s=new mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function _u(t,e,n){const r=pe(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!si(o))throw o;X(Eh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function Bp(t,e,n){const r=pe(t);let s=fe.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const p=pe(c),m=p.Is.get(d);return m!==void 0?M.resolve(p.Ts.get(m)):p.Hr.getTargetData(h,d)}(r,o,In(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?s:fe.min(),n?i:Ee())).next(l=>(xR(r,mS(e),l),{documents:l,gs:i})))}function xR(t,e,n){let r=t.Es.get(e)||fe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class $p{constructor(){this.activeTargetIds=ES()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OR{constructor(){this.ho=new $p,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new $p,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp="ConnectivityMonitor";class Hp{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){X(jp,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){X(jp,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let la=null;function yu(){return la===null?la=function(){return 268435456+Math.round(2147483648*Math.random())}():la++,"0x"+la.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="RestConnection",VR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class NR{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===ja?`project_id=${r}`:`project_id=${r}&database_id=${s}`}bo(e,n,r,s,i){const o=yu(),l=this.So(e,n.toUriEncodedString());X(kc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,l,c,r).then(h=>(X(kc,`Received RPC '${e}' ${o}: `,h),h),h=>{throw Hs(kc,`RPC '${e}' ${o} failed with error: `,h,"url: ",l,"request:",r),h})}Co(e,n,r,s,i,o){return this.bo(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ni}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}So(e,n){const r=VR[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class MR extends NR{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=yu();return new Promise((o,l)=>{const c=new W_;c.setWithCredentials(!0),c.listenOnce(K_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ya.NO_ERROR:const d=c.getResponseJson();X(wt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case ya.TIMEOUT:X(wt,`RPC '${e}' ${i} timed out`),l(new Z(F.DEADLINE_EXCEEDED,"Request time out"));break;case ya.HTTP_ERROR:const p=c.getStatus();if(X(wt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const P=function(D){const H=D.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(H)>=0?H:F.UNKNOWN}(_.status);l(new Z(P,_.message))}else l(new Z(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Z(F.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{X(wt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(wt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Wo(e,n,r){const s=yu(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Y_(),l=Q_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");X(wt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,_=!1;const P=new LR({Fo:D=>{_?X(wt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(X(wt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),X(wt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Mo:()=>p.close()}),O=(D,H,$)=>{D.listen(H,j=>{try{$(j)}catch(z){setTimeout(()=>{throw z},0)}})};return O(p,xi.EventType.OPEN,()=>{_||(X(wt,`RPC '${e}' stream ${s} transport opened.`),P.Qo())}),O(p,xi.EventType.CLOSE,()=>{_||(_=!0,X(wt,`RPC '${e}' stream ${s} transport closed`),P.Ko())}),O(p,xi.EventType.ERROR,D=>{_||(_=!0,Hs(wt,`RPC '${e}' stream ${s} transport errored:`,D),P.Ko(new Z(F.UNAVAILABLE,"The operation could not be completed")))}),O(p,xi.EventType.MESSAGE,D=>{var H;if(!_){const $=D.data[0];Ve(!!$);const j=$,z=(j==null?void 0:j.error)||((H=j[0])===null||H===void 0?void 0:H.error);if(z){X(wt,`RPC '${e}' stream ${s} received error:`,z);const ie=z.status;let _e=function(w){const T=Ze[w];if(T!==void 0)return Py(T)}(ie),I=z.message;_e===void 0&&(_e=F.INTERNAL,I="Unknown error status: "+ie+" with message "+z.message),_=!0,P.Ko(new Z(_e,I)),p.close()}else X(wt,`RPC '${e}' stream ${s} received:`,$),P.Uo($)}}),O(l,G_.STAT_EVENT,D=>{D.stat===ou.PROXY?X(wt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===ou.NOPROXY&&X(wt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.$o()},0),P}}function xc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t){return new $S(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="PersistentStream";class qy{constructor(e,n,r,s,i,o,l,c){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Hy(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new Z(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return X(qp,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(X(qp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FR extends qy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=qS(this.serializer,e),r=function(i){if(!("targetChange"in i))return fe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?An(o.readTime):fe.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=gu(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=uu(c)?{documents:KS(i,c)}:{query:GS(i,c).ht},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Oy(i,o.resumeToken);const h=fu(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(fe.min())>0){l.readTime=Ka(i,o.snapshotVersion.toTimestamp());const h=fu(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=YS(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=gu(this.serializer),n.removeTarget=e,this.I_(n)}}class UR extends qy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=WS(e.writeResults,e.commitTime),r=An(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=gu(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zS(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{}class $R extends BR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new Z(F.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.bo(e,pu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(F.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(e,pu(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(F.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class jR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Qn(n),this.N_=!1):X("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="RemoteStore";class HR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{r.enqueueAndForget(async()=>{hs(this)&&(X(is,"Restarting streams for network reachability change."),await async function(c){const h=pe(c);h.W_.add(4),await Po(h),h.j_.set("Unknown"),h.W_.delete(4),await Vl(h)}(this))})}),this.j_=new jR(r,s)}}async function Vl(t){if(hs(t))for(const e of t.G_)await e(!0)}async function Po(t){for(const e of t.G_)await e(!1)}function zy(t,e){const n=pe(t);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),Ah(n)?Ih(n):ii(n).c_()&&Th(n,e))}function bh(t,e){const n=pe(t),r=ii(n);n.U_.delete(e),r.c_()&&Wy(n,e),n.U_.size===0&&(r.c_()?r.P_():hs(n)&&n.j_.set("Unknown"))}function Th(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ii(t).y_(e)}function Wy(t,e){t.H_.Ne(e),ii(t).w_(e)}function Ih(t){t.H_=new MS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.U_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),ii(t).start(),t.j_.B_()}function Ah(t){return hs(t)&&!ii(t).u_()&&t.U_.size>0}function hs(t){return pe(t).W_.size===0}function Ky(t){t.H_=void 0}async function qR(t){t.j_.set("Online")}async function zR(t){t.U_.forEach((e,n)=>{Th(t,e)})}async function WR(t,e){Ky(t),Ah(t)?(t.j_.q_(e),Ih(t)):t.j_.set("Unknown")}async function KR(t,e,n){if(t.j_.set("Online"),e instanceof xy&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.U_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.U_.delete(l),s.H_.removeTarget(l))}(t,e)}catch(r){X(is,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Qa(t,r)}else if(e instanceof ba?t.H_.We(e):e instanceof ky?t.H_.Ze(e):t.H_.je(e),!n.isEqual(fe.min()))try{const r=await jy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.H_.ot(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.U_.get(h);d&&i.U_.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=i.U_.get(c);if(!d)return;i.U_.set(c,d.withResumeToken(pt.EMPTY_BYTE_STRING,d.snapshotVersion)),Wy(i,c);const p=new mr(d.target,c,h,d.sequenceNumber);Th(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X(is,"Failed to raise snapshot:",r),await Qa(t,r)}}async function Qa(t,e,n){if(!si(e))throw e;t.W_.add(1),await Po(t),t.j_.set("Offline"),n||(n=()=>jy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(is,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await Vl(t)})}function Gy(t,e){return e().catch(n=>Qa(t,n,e))}async function Nl(t){const e=pe(t),n=kr(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:lh;for(;GR(e);)try{const s=await PR(e.localStore,r);if(s===null){e.K_.length===0&&n.P_();break}r=s.batchId,QR(e,s)}catch(s){await Qa(e,s)}Qy(e)&&Yy(e)}function GR(t){return hs(t)&&t.K_.length<10}function QR(t,e){t.K_.push(e);const n=kr(t);n.c_()&&n.b_&&n.S_(e.mutations)}function Qy(t){return hs(t)&&!kr(t).u_()&&t.K_.length>0}function Yy(t){kr(t).start()}async function YR(t){kr(t).C_()}async function JR(t){const e=kr(t);for(const n of t.K_)e.S_(n.mutations)}async function XR(t,e,n){const r=t.K_.shift(),s=mh.from(r,e,n);await Gy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Nl(t)}async function ZR(t,e){e&&kr(t).b_&&await async function(r,s){if(function(o){return VS(o)&&o!==F.ABORTED}(s.code)){const i=r.K_.shift();kr(r).h_(),await Gy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Nl(r)}}(t,e),Qy(t)&&Yy(t)}async function zp(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),X(is,"RemoteStore received new credentials");const r=hs(n);n.W_.add(3),await Po(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Vl(n)}async function eP(t,e){const n=pe(t);e?(n.W_.delete(2),await Vl(n)):e||(n.W_.add(2),await Po(n),n.j_.set("Unknown"))}function ii(t){return t.J_||(t.J_=function(n,r,s){const i=pe(n);return i.M_(),new FR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:qR.bind(null,t),No:zR.bind(null,t),Lo:WR.bind(null,t),p_:KR.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),Ah(t)?Ih(t):t.j_.set("Unknown")):(await t.J_.stop(),Ky(t))})),t.J_}function kr(t){return t.Y_||(t.Y_=function(n,r,s){const i=pe(n);return i.M_(),new UR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:YR.bind(null,t),Lo:ZR.bind(null,t),D_:JR.bind(null,t),v_:XR.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await Nl(t)):(await t.Y_.stop(),t.K_.length>0&&(X(is,`Stopping write stream with ${t.K_.length} pending writes`),t.K_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Ch(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sh(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),si(t))return new Z(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{static emptySet(e){return new Ls(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Oi(),this.sortedSet=new Ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(){this.Z_=new Ke(re.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):he():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Gs{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Gs(e,n,Ls.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class nP{constructor(){this.queries=Kp(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=pe(n),i=s.queries;s.queries=Kp(),i.forEach((o,l)=>{for(const c of l.ta)c.onError(r)})})(this,new Z(F.ABORTED,"Firestore shutting down"))}}function Kp(){return new us(t=>gy(t),Rl)}async function Jy(t,e){const n=pe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new tP,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Sh(o,`Initialization of query '${bs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&Rh(n)}async function Xy(t,e){const n=pe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function rP(t,e){const n=pe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ta)l.oa(s)&&(r=!0);o.ea=s}}r&&Rh(n)}function sP(t,e,n){const r=pe(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function Rh(t){t.ia.forEach(e=>{e.next()})}var wu,Gp;(Gp=wu||(wu={}))._a="default",Gp.Cache="cache";class Zy{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Gs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=Gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==wu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.key=e}}class tw{constructor(e){this.key=e}}class iP{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Ee(),this.mutatedKeys=Ee(),this.ya=_y(e),this.wa=new Ls(this.ya)}get ba(){return this.fa}Sa(e,n){const r=n?n.Da:new Wp,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),_=Pl(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),O=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let D=!1;m&&_?m.data.isEqual(_.data)?P!==O&&(r.track({type:3,doc:_}),D=!0):this.va(m,_)||(r.track({type:2,doc:_}),D=!0,(c&&this.ya(_,c)>0||h&&this.ya(_,h)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),D=!0):m&&!_&&(r.track({type:1,doc:m}),D=!0,(c||h)&&(l=!0)),D&&(_?(o=o.add(_),i=O?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:o,Da:r,ls:l,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((d,p)=>function(_,P){const O=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return O(_)-O(P)}(d.type,p.type)||this.ya(d.doc,p.doc)),this.Ca(r),s=s!=null&&s;const l=n&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,h=c!==this.ga;return this.ga=c,o.length!==0||h?{snapshot:new Gs(this.query,e.wa,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Wp,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Ee(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new tw(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new ew(r))}),n}Oa(e){this.fa=e.gs,this.pa=Ee();const n=this.Sa(e.documents);return this.applyChanges(n,!0)}Na(){return Gs.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Ph="SyncEngine";class oP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class aP{constructor(e){this.key=e,this.Ba=!1}}class lP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new us(l=>gy(l),Rl),this.qa=new Map,this.Qa=new Set,this.$a=new Ke(re.comparator),this.Ka=new Map,this.Ua=new yh,this.Wa={},this.Ga=new Map,this.za=Ks.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function cP(t,e,n=!0){const r=aw(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await nw(r,e,n,!0),s}async function uP(t,e){const n=aw(t);await nw(n,e,!0,!1)}async function nw(t,e,n,r){const s=await kR(t.localStore,In(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await hP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&zy(t.remoteStore,s),l}async function hP(t,e,n,r,s){t.Ha=(p,m,_)=>async function(O,D,H,$){let j=D.view.Sa(H);j.ls&&(j=await Bp(O.localStore,D.query,!1).then(({documents:I})=>D.view.Sa(I,j)));const z=$&&$.targetChanges.get(D.targetId),ie=$&&$.targetMismatches.get(D.targetId)!=null,_e=D.view.applyChanges(j,O.isPrimaryClient,z,ie);return Yp(O,D.targetId,_e.Ma),_e.snapshot}(t,p,m,_);const i=await Bp(t.localStore,e,!0),o=new iP(e,i.gs),l=o.Sa(i.documents),c=Ro.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);Yp(t,n,h.Ma);const d=new oP(e,n,o);return t.ka.set(e,d),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),h.snapshot}async function dP(t,e,n){const r=pe(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(o=>!Rl(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await _u(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&bh(r.remoteStore,s.targetId),vu(r,s.targetId)}).catch(ri)):(vu(r,s.targetId),await _u(r.localStore,s.targetId,!0))}async function fP(t,e){const n=pe(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),bh(n.remoteStore,r.targetId))}async function pP(t,e,n){const r=EP(t);try{const s=await function(o,l){const c=pe(o),h=nt.now(),d=l.reduce((_,P)=>_.add(P.key),Ee());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let P=Yn(),O=Ee();return c.ds.getEntries(_,d).next(D=>{P=D,P.forEach((H,$)=>{$.isValidDocument()||(O=O.add(H))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,P)).next(D=>{p=D;const H=[];for(const $ of l){const j=PS($,p.get($.key).overlayedDocument);j!=null&&H.push(new Mr($.key,j,ly(j.value.mapValue),hn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,h,H,l)}).next(D=>{m=D;const H=D.applyToLocalDocumentSet(p,O);return c.documentOverlayCache.saveOverlays(_,D.batchId,H)})}).then(()=>({batchId:m.batchId,changes:wy(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Wa[o.currentUser.toKey()];h||(h=new Ke(be)),h=h.insert(l,c),o.Wa[o.currentUser.toKey()]=h}(r,s.batchId,n),await ko(r,s.changes),await Nl(r.remoteStore)}catch(s){const i=Sh(s,"Failed to persist write");n.reject(i)}}async function rw(t,e){const n=pe(t);try{const r=await SR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ka.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ba=!0:s.modifiedDocuments.size>0?Ve(o.Ba):s.removedDocuments.size>0&&(Ve(o.Ba),o.Ba=!1))}),await ko(n,r,e)}catch(r){await ri(r)}}function Qp(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,o)=>{const l=o.view.sa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=pe(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const m of p.ta)m.sa(l)&&(h=!0)}),h&&Rh(c)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mP(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ka.get(e),i=s&&s.key;if(i){let o=new Ke(re.comparator);o=o.insert(i,Tt.newNoDocument(i,fe.min()));const l=Ee().add(i),c=new Ol(fe.min(),new Map,new Ke(be),o,l);await rw(r,c),r.$a=r.$a.remove(i),r.Ka.delete(e),kh(r)}else await _u(r.localStore,e,!1).then(()=>vu(r,e,n)).catch(ri)}async function gP(t,e){const n=pe(t),r=e.batch.batchId;try{const s=await CR(n.localStore,e);iw(n,r,null),sw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ko(n,s)}catch(s){await ri(s)}}async function _P(t,e,n){const r=pe(t);try{const s=await function(o,l){const c=pe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Ve(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);iw(r,e,n),sw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ko(r,s)}catch(s){await ri(s)}}function sw(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function iw(t,e,n){const r=pe(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function vu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ua.Sr(e).forEach(r=>{t.Ua.containsKey(r)||ow(t,r)})}function ow(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(bh(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ka.delete(n),kh(t))}function Yp(t,e,n){for(const r of n)r instanceof ew?(t.Ua.addReference(r.key,e),yP(t,r)):r instanceof tw?(X(Ph,"Document no longer in limbo: "+r.key),t.Ua.removeReference(r.key,e),t.Ua.containsKey(r.key)||ow(t,r.key)):he()}function yP(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(X(Ph,"New document in limbo: "+n),t.Qa.add(r),kh(t))}function kh(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new re(je.fromString(e)),r=t.za.next();t.Ka.set(r,new aP(n)),t.$a=t.$a.insert(n,r),zy(t.remoteStore,new mr(In(fh(n.path)),r,"TargetPurposeLimboResolution",Al.ae))}}async function ko(t,e,n){const r=pe(t),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{o.push(r.Ha(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=vh.Yi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.La.p_(s),await async function(c,h){const d=pe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,m=>M.forEach(m.Hi,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>M.forEach(m.Ji,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!si(p))throw p;X(Eh,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const _=d.Ts.get(m),P=_.snapshotVersion,O=_.withLastLimboFreeSnapshotVersion(P);d.Ts=d.Ts.insert(m,O)}}}(r.localStore,i))}async function wP(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){X(Ph,"User change. New user:",e.toKey());const r=await $y(n.localStore,e);n.currentUser=e,function(i,o){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new Z(F.CANCELLED,o))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ko(n,r.Rs)}}function vP(t,e){const n=pe(t),r=n.Ka.get(e);if(r&&r.Ba)return Ee().add(r.key);{let s=Ee();const i=n.qa.get(e);if(!i)return s;for(const o of i){const l=n.ka.get(o);s=s.unionWith(l.view.ba)}return s}}function aw(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mP.bind(null,e),e.La.p_=rP.bind(null,e.eventManager),e.La.Ja=sP.bind(null,e.eventManager),e}function EP(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_P.bind(null,e),e}class Ya{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Dl(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return AR(this.persistence,new bR,e.initialUser,this.serializer)}Xa(e){return new By(wh.ri,this.serializer)}Za(e){return new OR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ya.provider={build:()=>new Ya};class bP extends Ya{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Ve(this.persistence.referenceDelegate instanceof Ga);const r=this.persistence.referenceDelegate.garbageCollector;return new aR(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?Mt.withCacheSize(this.cacheSizeBytes):Mt.DEFAULT;return new By(r=>Ga.ri(r,n),this.serializer)}}class Eu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wP.bind(null,this.syncEngine),await eP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nP}()}createDatastore(e){const n=Dl(e.databaseInfo.databaseId),r=function(i){return new MR(i)}(e.databaseInfo);return function(i,o,l,c){return new $R(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new HR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Qp(this.syncEngine,n,0),function(){return Hp.D()?new Hp:new DR}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,d){const p=new lP(s,i,o,l,c,h);return d&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=pe(s);X(is,"RemoteStore shutting down."),i.W_.add(5),await Po(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Eu.provider={build:()=>new Eu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="FirestoreClient";class TP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=X_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X(xr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(xr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Sh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Oc(t,e){t.asyncQueue.verifyOperationInProgress(),X(xr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await $y(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Jp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await IP(t);X(xr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>zp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>zp(e.remoteStore,s)),t._onlineComponents=e}async function IP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(xr,"Using user provided OfflineComponentProvider");try{await Oc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Hs("Error using user provided cache. Falling back to memory cache: "+n),await Oc(t,new Ya)}}else X(xr,"Using default OfflineComponentProvider"),await Oc(t,new bP(void 0));return t._offlineComponents}async function cw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(xr,"Using user provided OnlineComponentProvider"),await Jp(t,t._uninitializedComponentsProvider._online)):(X(xr,"Using default OnlineComponentProvider"),await Jp(t,new Eu))),t._onlineComponents}function AP(t){return cw(t).then(e=>e.syncEngine)}async function uw(t){const e=await cw(t),n=e.eventManager;return n.onListen=cP.bind(null,e.syncEngine),n.onUnlisten=dP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=uP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=fP.bind(null,e.syncEngine),n}function CP(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new lw({next:m=>{d.su(),o.enqueueAndForget(()=>Xy(i,p));const _=m.docs.has(l);!_&&m.fromCache?h.reject(new Z(F.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?h.reject(new Z(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Zy(fh(l.path),d,{includeMetadataChanges:!0,Ta:!0});return Jy(i,p)}(await uw(t),t.asyncQueue,e,n,r)),r.promise}function SP(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new lw({next:m=>{d.su(),o.enqueueAndForget(()=>Xy(i,p)),m.fromCache&&c.source==="server"?h.reject(new Z(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Zy(l,d,{includeMetadataChanges:!0,Ta:!0});return Jy(i,p)}(await uw(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(t,e,n){if(!n)throw new Z(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function RP(t,e,n,r){if(e===!0&&r===!0)throw new Z(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Zp(t){if(!re.isDocumentKey(t))throw new Z(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function em(t){if(re.isDocumentKey(t))throw new Z(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ll(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Pn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ll(t);throw new Z(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="firestore.googleapis.com",tm=!0;class nm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fw,this.ssl=tm}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:tm;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Uy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<iR)throw new Z(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ml{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new NC;switch(r.type){case"firstParty":return new UC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Xp.get(n);r&&(X("ComponentProvider","Removing Datastore"),Xp.delete(n),r.terminate())}(this),Promise.resolve()}}function PP(t,e,n,r={}){var s;const i=(t=Pn(t,Ml))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i.host!==fw&&i.host!==l&&Hs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!es(c,o)&&(t._setSettings(c),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=vt.MOCK_USER;else{h=QT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new Z(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new vt(p)}t._authCredentials=new LC(new J_(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new oi(this.firestore,e,this._query)}}class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class Ar extends oi{constructor(e,n,r){super(e,n,fh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new re(e))}withConverter(e){return new Ar(this.firestore,e,this._path)}}function ho(t,e,...n){if(t=it(t),dw("collection","path",e),t instanceof Ml){const r=je.fromString(e,...n);return em(r),new Ar(t,null,r)}{if(!(t instanceof Ot||t instanceof Ar))throw new Z(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return em(r),new Ar(t.firestore,null,r)}}function Jn(t,e,...n){if(t=it(t),arguments.length===1&&(e=X_.newId()),dw("doc","path",e),t instanceof Ml){const r=je.fromString(e,...n);return Zp(r),new Ot(t,null,new re(r))}{if(!(t instanceof Ot||t instanceof Ar))throw new Z(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return Zp(r),new Ot(t.firestore,t instanceof Ar?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="AsyncQueue";class sm{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Hy(this,"async_queue_retry"),this.bu=()=>{const r=xc();r&&X(rm,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const n=xc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=xc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new qn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!si(e))throw e;X(rm,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Qn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.Su=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=Ch.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&he()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class ai extends Ml{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new sm,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sm(e),this._firestoreClient=void 0,await e}}}function kP(t,e){const n=typeof t=="object"?t:a_(),r=typeof t=="string"?t:ja,s=Ju(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=KT("firestore");i&&PP(s,...i)}return s}function xh(t){if(t._terminated)throw new Z(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||xP(t),t._firestoreClient}function xP(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new ZC(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,hw(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new TP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qs(pt.fromBase64String(e))}catch(n){throw new Z(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qs(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=/^__.*__$/;class DP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new So(e,this.data,n,this.fieldTransforms)}}class pw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function mw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class Vh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Vh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Ku(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ja(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(mw(this.Lu)&&OP.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class VP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Dl(e)}ju(e,n,r,s=!1){return new Vh({Lu:e,methodName:n,zu:r,path:ft.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bl(t){const e=t._freezeSettings(),n=Dl(t._databaseId);return new VP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gw(t,e,n,r,s,i={}){const o=t.ju(i.merge||i.mergeFields?2:0,e,n,s);Lh("Data must be an object, but it was:",o,r);const l=_w(r,o);let c,h;if(i.merge)c=new Wt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=bu(e,p,n);if(!o.contains(m))throw new Z(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);ww(d,m)||d.push(m)}c=new Wt(d),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new DP(new Ut(l),c,h)}class $l extends Ul{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $l}}class Nh extends Ul{_toFieldTransform(e){return new AS(e.path,new lo)}isEqual(e){return e instanceof Nh}}function NP(t,e,n,r){const s=t.ju(1,e,n);Lh("Data must be an object, but it was:",s,r);const i=[],o=Ut.empty();Lr(r,(c,h)=>{const d=Mh(e,c,n);h=it(h);const p=s.Ku(d);if(h instanceof $l)i.push(d);else{const m=xo(h,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new Wt(i);return new pw(o,l,s.fieldTransforms)}function LP(t,e,n,r,s,i){const o=t.ju(1,e,n),l=[bu(e,r,n)],c=[s];if(i.length%2!=0)throw new Z(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(bu(e,i[m])),c.push(i[m+1]);const h=[],d=Ut.empty();for(let m=l.length-1;m>=0;--m)if(!ww(h,l[m])){const _=l[m];let P=c[m];P=it(P);const O=o.Ku(_);if(P instanceof $l)h.push(_);else{const D=xo(P,O);D!=null&&(h.push(_),d.set(_,D))}}const p=new Wt(h);return new pw(d,p,o.fieldTransforms)}function MP(t,e,n,r=!1){return xo(n,t.ju(r?4:3,e))}function xo(t,e){if(yw(t=it(t)))return Lh("Unsupported field value:",e,t),_w(t,e);if(t instanceof Ul)return function(r,s){if(!mw(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=xo(l,s.Uu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=it(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=nt.fromDate(r);return{timestampValue:Ka(s.serializer,i)}}if(r instanceof nt){const i=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ka(s.serializer,i)}}if(r instanceof Oh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qs)return{bytesValue:Oy(s.serializer,r._byteString)};if(r instanceof Ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_h(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Dh)return function(o,l){return{mapValue:{fields:{[oy]:{stringValue:ay},[Ha]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Wu("VectorValues must only contain numeric values.");return ph(l.serializer,h)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Ll(r)}`)}(t,e)}function _w(t,e){const n={};return ey(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lr(t,(r,s)=>{const i=xo(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function yw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof Oh||t instanceof Qs||t instanceof Ot||t instanceof Ul||t instanceof Dh)}function Lh(t,e,n){if(!yw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ll(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function bu(t,e,n){if((e=it(e))instanceof Fl)return e._internalPath;if(typeof e=="string")return Mh(t,e);throw Ja("Field path arguments must be of type string or ",t,!1,void 0,n)}const FP=new RegExp("[~\\*/\\[\\]]");function Mh(t,e,n){if(e.search(FP)>=0)throw Ja(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fl(...e.split("."))._internalPath}catch{throw Ja(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ja(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Z(F.INVALID_ARGUMENT,l+t+c)}function ww(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UP extends vw{data(){return super.data()}}function Fh(t,e){return typeof e=="string"?Mh(t,e):e instanceof Fl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uh{}class $P extends Uh{}function Bh(t,e,...n){let r=[];e instanceof Uh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof jh).length,l=i.filter(c=>c instanceof jl).length;if(o>1||o>0&&l>0)throw new Z(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class jl extends $P{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new jl(e,n,r)}_apply(e){const n=this._parse(e);return Ew(e._query,n),new oi(e.firestore,e.converter,hu(e._query,n))}_parse(e){const n=Bl(e.firestore);return function(i,o,l,c,h,d,p){let m;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Z(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){om(p,d);const P=[];for(const O of p)P.push(im(c,i,O));m={arrayValue:{values:P}}}else m=im(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||om(p,d),m=MP(l,o,p,d==="in"||d==="not-in");return et.create(h,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function $h(t,e,n){const r=e,s=Fh("where",t);return jl._create(s,r,n)}class jh extends Uh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new jh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:fn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Ew(o,c),o=hu(o,c)}(e._query,n),new oi(e.firestore,e.converter,hu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function im(t,e,n){if(typeof(n=it(n))=="string"){if(n==="")throw new Z(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!my(e)&&n.indexOf("/")!==-1)throw new Z(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(je.fromString(n));if(!re.isDocumentKey(r))throw new Z(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ep(t,new re(r))}if(n instanceof Ot)return Ep(t,n._key);throw new Z(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ll(n)}.`)}function om(t,e){if(!Array.isArray(t)||t.length===0)throw new Z(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ew(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Z(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class jP{convertValue(e,n="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Lr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Ha].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ye(o.doubleValue));return new Dh(i)}convertGeoPoint(e){return new Oh(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Sl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(io(e));default:return null}}convertTimestamp(e){const n=Sr(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=je.fromString(e);Ve(Fy(r));const s=new oo(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Qn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tw extends vw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ta(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ta extends Tw{data(e={}){return super.data(e)}}class HP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Vi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ta(this._firestore,this._userDataWriter,r.key,r,new Vi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Ta(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Vi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ta(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Vi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:qP(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t){t=Pn(t,Ot);const e=Pn(t.firestore,ai);return CP(xh(e),t._key).then(n=>WP(e,t,n))}class Iw extends jP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function Hh(t){t=Pn(t,oi);const e=Pn(t.firestore,ai),n=xh(e),r=new Iw(e);return BP(t._query),SP(n,t._query).then(s=>new HP(e,r,t,s))}function Aw(t,e,n){t=Pn(t,Ot);const r=Pn(t.firestore,ai),s=bw(t.converter,e,n);return qh(r,[gw(Bl(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,hn.none())])}function zP(t,e,n,...r){t=Pn(t,Ot);const s=Pn(t.firestore,ai),i=Bl(s);let o;return o=typeof(e=it(e))=="string"||e instanceof Fl?LP(i,"updateDoc",t._key,e,n,r):NP(i,"updateDoc",t._key,e),qh(s,[o.toMutation(t._key,hn.exists(!0))])}function Cw(t,e){const n=Pn(t.firestore,ai),r=Jn(t),s=bw(t.converter,e);return qh(n,[gw(Bl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,hn.exists(!1))]).then(()=>r)}function qh(t,e){return function(r,s){const i=new qn;return r.asyncQueue.enqueueAndForget(async()=>pP(await AP(r),s,i)),i.promise}(xh(t),e)}function WP(t,e,n){const r=n.docs.get(e._key),s=new Iw(t);return new Tw(t,s,e._key,r,new Vi(n.hasPendingWrites,n.fromCache),e.converter)}function KP(){return new Nh("serverTimestamp")}(function(e,n=!0){(function(s){ni=s})(ei),js(new ts("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ai(new MC(r.getProvider("auth-internal")),new BC(o,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Z(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oo(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Tr(up,hp,e),Tr(up,hp,"esm2017")})();const GP={apiKey:"AIzaSyC8WspggAJ7NYeCils7NGKk-BDfKw3lzUU",authDomain:"brobank-d0269.firebaseapp.com",projectId:"brobank-d0269",storageBucket:"brobank-d0269.appspot.com",messagingSenderId:"332534888385",appId:"1:332534888385:web:9f0f879472df456d36a140"},Sw=o_(GP),rn=DC(Sw),Kt=kP(Sw);bl(rn,t=>{t?console.log("User angemeldet:",t.uid):console.log("Kein Nutzer angemeldet.")});const Rw=Jg("auth",()=>{const t=ke(null);ls(()=>{bl(rn,n=>{t.value=n})});async function e(){await bA(rn),t.value=null}return{user:t,logout:e}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const As=typeof document<"u";function Pw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function QP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Pw(t.default)}const Oe=Object.assign;function Dc(t,e){const n={};for(const r in e){const s=e[r];n[r]=pn(s)?s.map(t):t(s)}return n}const Ki=()=>{},pn=Array.isArray,kw=/#/g,YP=/&/g,JP=/\//g,XP=/=/g,ZP=/\?/g,xw=/\+/g,e2=/%5B/g,t2=/%5D/g,Ow=/%5E/g,n2=/%60/g,Dw=/%7B/g,r2=/%7C/g,Vw=/%7D/g,s2=/%20/g;function zh(t){return encodeURI(""+t).replace(r2,"|").replace(e2,"[").replace(t2,"]")}function i2(t){return zh(t).replace(Dw,"{").replace(Vw,"}").replace(Ow,"^")}function Tu(t){return zh(t).replace(xw,"%2B").replace(s2,"+").replace(kw,"%23").replace(YP,"%26").replace(n2,"`").replace(Dw,"{").replace(Vw,"}").replace(Ow,"^")}function o2(t){return Tu(t).replace(XP,"%3D")}function a2(t){return zh(t).replace(kw,"%23").replace(ZP,"%3F")}function l2(t){return t==null?"":a2(t).replace(JP,"%2F")}function po(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const c2=/\/$/,u2=t=>t.replace(c2,"");function Vc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=p2(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:po(o)}}function h2(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function am(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function d2(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ys(e.matched[r],n.matched[s])&&Nw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ys(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Nw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!f2(t[n],e[n]))return!1;return!0}function f2(t,e){return pn(t)?lm(t,e):pn(e)?lm(e,t):t===e}function lm(t,e){return pn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function p2(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const or={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var mo;(function(t){t.pop="pop",t.push="push"})(mo||(mo={}));var Gi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gi||(Gi={}));function m2(t){if(!t)if(As){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),u2(t)}const g2=/^[^#]+#/;function _2(t,e){return t.replace(g2,"#")+e}function y2(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Hl=()=>({left:window.scrollX,top:window.scrollY});function w2(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=y2(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function cm(t,e){return(history.state?history.state.position-e:-1)+t}const Iu=new Map;function v2(t,e){Iu.set(t,e)}function E2(t){const e=Iu.get(t);return Iu.delete(t),e}let b2=()=>location.protocol+"//"+location.host;function Lw(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),am(c,"")}return am(n,t)+r+s}function T2(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const _=Lw(t,location),P=n.value,O=e.value;let D=0;if(m){if(n.value=_,e.value=m,o&&o===P){o=null;return}D=O?m.position-O.position:0}else r(_);s.forEach(H=>{H(n.value,P,{delta:D,type:mo.pop,direction:D?D>0?Gi.forward:Gi.back:Gi.unknown})})};function c(){o=n.value}function h(m){s.push(m);const _=()=>{const P=s.indexOf(m);P>-1&&s.splice(P,1)};return i.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(Oe({},m.state,{scroll:Hl()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function um(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Hl():null}}function I2(t){const{history:e,location:n}=window,r={value:Lw(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:b2()+t+c;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(c,h){const d=Oe({},e.state,um(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=Oe({},s.value,e.state,{forward:c,scroll:Hl()});i(d.current,d,!0);const p=Oe({},um(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function A2(t){t=m2(t);const e=I2(t),n=T2(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:_2.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function C2(t){return typeof t=="string"||t&&typeof t=="object"}function Mw(t){return typeof t=="string"||typeof t=="symbol"}const Fw=Symbol("");var hm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(hm||(hm={}));function Js(t,e){return Oe(new Error,{type:t,[Fw]:!0},e)}function Nn(t,e){return t instanceof Error&&Fw in t&&(e==null||!!(t.type&e))}const dm="[^/]+?",S2={sensitive:!1,strict:!1,start:!0,end:!0},R2=/[.+*?^${}()[\]/\\]/g;function P2(t,e){const n=Oe({},S2,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(R2,"\\$&"),_+=40;else if(m.type===1){const{value:P,repeatable:O,optional:D,regexp:H}=m;i.push({name:P,repeatable:O,optional:D});const $=H||dm;if($!==dm){_+=10;try{new RegExp(`(${$})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${P}" (${$}): `+z.message)}}let j=O?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;p||(j=D&&h.length<2?`(?:/${j})`:"/"+j),D&&(j+="?"),s+=j,_+=20,D&&(_+=-8),O&&(_+=-20),$===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",P=i[m-1];p[P.name]=_&&P.repeatable?_.split("/"):_}return p}function c(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:P,repeatable:O,optional:D}=_,H=P in h?h[P]:"";if(pn(H)&&!O)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const $=pn(H)?H.join("/"):H;if(!$)if(D)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);d+=$}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function k2(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Uw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=k2(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(fm(r))return 1;if(fm(s))return-1}return s.length-r.length}function fm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const x2={type:0,value:""},O2=/[a-zA-Z0-9_]/;function D2(t){if(!t)return[[]];if(t==="/")return[[x2]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:O2.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function V2(t,e,n){const r=P2(D2(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function N2(t,e){const n=[],r=new Map;e=_m({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const P=!_,O=mm(p);O.aliasOf=_&&_.record;const D=_m(e,p),H=[O];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const ie of z)H.push(mm(Oe({},O,{components:_?_.record.components:O.components,path:ie,aliasOf:_?_.record:O})))}let $,j;for(const z of H){const{path:ie}=z;if(m&&ie[0]!=="/"){const _e=m.record.path,I=_e[_e.length-1]==="/"?"":"/";z.path=m.record.path+(ie&&I+ie)}if($=V2(z,m,D),_?_.alias.push($):(j=j||$,j!==$&&j.alias.push($),P&&p.name&&!gm($)&&o(p.name)),Bw($)&&c($),O.children){const _e=O.children;for(let I=0;I<_e.length;I++)i(_e[I],$,_&&_.children[I])}_=_||$}return j?()=>{o(j)}:Ki}function o(p){if(Mw(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=F2(p,n);n.splice(m,0,p),p.record.name&&!gm(p)&&r.set(p.record.name,p)}function h(p,m){let _,P={},O,D;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Js(1,{location:p});D=_.record.name,P=Oe(pm(m.params,_.keys.filter(j=>!j.optional).concat(_.parent?_.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&pm(p.params,_.keys.map(j=>j.name))),O=_.stringify(P)}else if(p.path!=null)O=p.path,_=n.find(j=>j.re.test(O)),_&&(P=_.parse(O),D=_.record.name);else{if(_=m.name?r.get(m.name):n.find(j=>j.re.test(m.path)),!_)throw Js(1,{location:p,currentLocation:m});D=_.record.name,P=Oe({},m.params,p.params),O=_.stringify(P)}const H=[];let $=_;for(;$;)H.unshift($.record),$=$.parent;return{name:D,path:O,params:P,matched:H,meta:M2(H)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function pm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function mm(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:L2(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function L2(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function gm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function M2(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function _m(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function F2(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Uw(t,e[i])<0?r=i:n=i+1}const s=U2(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function U2(t){let e=t;for(;e=e.parent;)if(Bw(e)&&Uw(t,e)===0)return e}function Bw({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function B2(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(xw," "),o=i.indexOf("="),l=po(o<0?i:i.slice(0,o)),c=o<0?null:po(i.slice(o+1));if(l in e){let h=e[l];pn(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function ym(t){let e="";for(let n in t){const r=t[n];if(n=o2(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(pn(r)?r.map(i=>i&&Tu(i)):[r&&Tu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function $2(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=pn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const j2=Symbol(""),wm=Symbol(""),ql=Symbol(""),Wh=Symbol(""),Au=Symbol("");function Si(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ur(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(Js(4,{from:n,to:e})):m instanceof Error?c(m):C2(m)?c(Js(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function Nc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Pw(c)){const d=(c.__vccOpts||c)[e];d&&i.push(ur(d,n,r,o,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=QP(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&ur(_,n,r,o,l,s)()}))}}return i}function vm(t){const e=nn(ql),n=nn(Wh),r=xt(()=>{const c=Ps(t.to);return e.resolve(c)}),s=xt(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Ys.bind(null,d));if(m>-1)return m;const _=Em(c[h-2]);return h>1&&Em(d)===_&&p[p.length-1].path!==_?p.findIndex(Ys.bind(null,c[h-2])):m}),i=xt(()=>s.value>-1&&K2(n.params,r.value.params)),o=xt(()=>s.value>-1&&s.value===n.matched.length-1&&Nw(n.params,r.value.params));function l(c={}){if(W2(c)){const h=e[Ps(t.replace)?"replace":"push"](Ps(t.to)).catch(Ki);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:xt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function H2(t){return t.length===1?t[0]:t}const q2=_g({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vm,setup(t,{slots:e}){const n=_o(vm(t)),{options:r}=nn(ql),s=xt(()=>({[bm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[bm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&H2(e.default(n));return t.custom?i:Hg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),z2=q2;function W2(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function K2(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!pn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Em(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const bm=(t,e,n)=>t??e??n,G2=_g({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=nn(Au),s=xt(()=>t.route||r.value),i=nn(wm,0),o=xt(()=>{let h=Ps(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=xt(()=>s.value.matched[o.value]);ha(wm,xt(()=>o.value+1)),ha(j2,l),ha(Au,s);const c=ke();return xs(()=>[c.value,l.value,t.name],([h,d,p],[m,_,P])=>{d&&(d.instances[p]=h,_&&_!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),h&&d&&(!_||!Ys(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(O=>O(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return Tm(n.default,{Component:m,route:h});const _=p.props[d],P=_?_===!0?h.params:typeof _=="function"?_(h):_:null,D=Hg(m,Oe({},P,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Tm(n.default,{Component:D,route:h})||D}}});function Tm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Q2=G2;function Y2(t){const e=N2(t.routes,t),n=t.parseQuery||B2,r=t.stringifyQuery||ym,s=t.history,i=Si(),o=Si(),l=Si(),c=UE(or);let h=or;As&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Dc.bind(null,V=>""+V),p=Dc.bind(null,l2),m=Dc.bind(null,po);function _(V,J){let Q,ee;return Mw(V)?(Q=e.getRecordMatcher(V),ee=J):ee=V,e.addRoute(ee,Q)}function P(V){const J=e.getRecordMatcher(V);J&&e.removeRoute(J)}function O(){return e.getRoutes().map(V=>V.record)}function D(V){return!!e.getRecordMatcher(V)}function H(V,J){if(J=Oe({},J||c.value),typeof V=="string"){const S=Vc(n,V,J.path),N=e.resolve({path:S.path},J),U=s.createHref(S.fullPath);return Oe(S,N,{params:m(N.params),hash:po(S.hash),redirectedFrom:void 0,href:U})}let Q;if(V.path!=null)Q=Oe({},V,{path:Vc(n,V.path,J.path).path});else{const S=Oe({},V.params);for(const N in S)S[N]==null&&delete S[N];Q=Oe({},V,{params:p(S)}),J.params=p(J.params)}const ee=e.resolve(Q,J),Se=V.hash||"";ee.params=d(m(ee.params));const v=h2(r,Oe({},V,{hash:i2(Se),path:ee.path})),b=s.createHref(v);return Oe({fullPath:v,hash:Se,query:r===ym?$2(V.query):V.query||{}},ee,{redirectedFrom:void 0,href:b})}function $(V){return typeof V=="string"?Vc(n,V,c.value.path):Oe({},V)}function j(V,J){if(h!==V)return Js(8,{from:J,to:V})}function z(V){return I(V)}function ie(V){return z(Oe($(V),{replace:!0}))}function _e(V){const J=V.matched[V.matched.length-1];if(J&&J.redirect){const{redirect:Q}=J;let ee=typeof Q=="function"?Q(V):Q;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=$(ee):{path:ee},ee.params={}),Oe({query:V.query,hash:V.hash,params:ee.path!=null?{}:V.params},ee)}}function I(V,J){const Q=h=H(V),ee=c.value,Se=V.state,v=V.force,b=V.replace===!0,S=_e(Q);if(S)return I(Oe($(S),{state:typeof S=="object"?Oe({},Se,S.state):Se,force:v,replace:b}),J||Q);const N=Q;N.redirectedFrom=J;let U;return!v&&d2(r,ee,Q)&&(U=Js(16,{to:N,from:ee}),Jt(ee,ee,!0,!1)),(U?Promise.resolve(U):T(N,ee)).catch(L=>Nn(L)?Nn(L,2)?L:an(L):we(L,N,ee)).then(L=>{if(L){if(Nn(L,2))return I(Oe({replace:b},$(L.to),{state:typeof L.to=="object"?Oe({},Se,L.to.state):Se,force:v}),J||N)}else L=C(N,ee,!0,b,Se);return A(N,ee,L),L})}function y(V,J){const Q=j(V,J);return Q?Promise.reject(Q):Promise.resolve()}function w(V){const J=er.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(V):V()}function T(V,J){let Q;const[ee,Se,v]=J2(V,J);Q=Nc(ee.reverse(),"beforeRouteLeave",V,J);for(const S of ee)S.leaveGuards.forEach(N=>{Q.push(ur(N,V,J))});const b=y.bind(null,V,J);return Q.push(b),Lt(Q).then(()=>{Q=[];for(const S of i.list())Q.push(ur(S,V,J));return Q.push(b),Lt(Q)}).then(()=>{Q=Nc(Se,"beforeRouteUpdate",V,J);for(const S of Se)S.updateGuards.forEach(N=>{Q.push(ur(N,V,J))});return Q.push(b),Lt(Q)}).then(()=>{Q=[];for(const S of v)if(S.beforeEnter)if(pn(S.beforeEnter))for(const N of S.beforeEnter)Q.push(ur(N,V,J));else Q.push(ur(S.beforeEnter,V,J));return Q.push(b),Lt(Q)}).then(()=>(V.matched.forEach(S=>S.enterCallbacks={}),Q=Nc(v,"beforeRouteEnter",V,J,w),Q.push(b),Lt(Q))).then(()=>{Q=[];for(const S of o.list())Q.push(ur(S,V,J));return Q.push(b),Lt(Q)}).catch(S=>Nn(S,8)?S:Promise.reject(S))}function A(V,J,Q){l.list().forEach(ee=>w(()=>ee(V,J,Q)))}function C(V,J,Q,ee,Se){const v=j(V,J);if(v)return v;const b=J===or,S=As?history.state:{};Q&&(ee||b?s.replace(V.fullPath,Oe({scroll:b&&S&&S.scroll},Se)):s.push(V.fullPath,Se)),c.value=V,Jt(V,J,Q,b),an()}let E;function at(){E||(E=s.listen((V,J,Q)=>{if(!mn.listening)return;const ee=H(V),Se=_e(ee);if(Se){I(Oe(Se,{replace:!0,force:!0}),ee).catch(Ki);return}h=ee;const v=c.value;As&&v2(cm(v.fullPath,Q.delta),Hl()),T(ee,v).catch(b=>Nn(b,12)?b:Nn(b,2)?(I(Oe($(b.to),{force:!0}),ee).then(S=>{Nn(S,20)&&!Q.delta&&Q.type===mo.pop&&s.go(-1,!1)}).catch(Ki),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),we(b,ee,v))).then(b=>{b=b||C(ee,v,!1),b&&(Q.delta&&!Nn(b,8)?s.go(-Q.delta,!1):Q.type===mo.pop&&Nn(b,20)&&s.go(-1,!1)),A(ee,v,b)}).catch(Ki)}))}let Nt=Si(),Me=Si(),de;function we(V,J,Q){an(V);const ee=Me.list();return ee.length?ee.forEach(Se=>Se(V,J,Q)):console.error(V),Promise.reject(V)}function jt(){return de&&c.value!==or?Promise.resolve():new Promise((V,J)=>{Nt.add([V,J])})}function an(V){return de||(de=!V,at(),Nt.list().forEach(([J,Q])=>V?Q(V):J()),Nt.reset()),V}function Jt(V,J,Q,ee){const{scrollBehavior:Se}=t;if(!As||!Se)return Promise.resolve();const v=!Q&&E2(cm(V.fullPath,0))||(ee||!Q)&&history.state&&history.state.scroll||null;return $u().then(()=>Se(V,J,v)).then(b=>b&&w2(b)).catch(b=>we(b,V,J))}const He=V=>s.go(V);let qe;const er=new Set,mn={currentRoute:c,listening:!0,addRoute:_,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:O,resolve:H,options:t,push:z,replace:ie,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Me.add,isReady:jt,install(V){const J=this;V.component("RouterLink",z2),V.component("RouterView",Q2),V.config.globalProperties.$router=J,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Ps(c)}),As&&!qe&&c.value===or&&(qe=!0,z(s.location).catch(Se=>{}));const Q={};for(const Se in or)Object.defineProperty(Q,Se,{get:()=>c.value[Se],enumerable:!0});V.provide(ql,J),V.provide(Wh,lg(Q)),V.provide(Au,c);const ee=V.unmount;er.add(V),V.unmount=function(){er.delete(V),er.size<1&&(h=or,E&&E(),E=null,c.value=or,qe=!1,de=!1),ee()}}};function Lt(V){return V.reduce((J,Q)=>J.then(()=>w(Q)),Promise.resolve())}return mn}function J2(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>Ys(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>Ys(h,c))||s.push(c))}return[n,r,s]}function $w(){return nn(ql)}function Kh(t){return nn(Wh)}/*!
* sweetalert2 v11.17.2
* Released under the MIT License.
*/function jw(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function X2(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Im(t,e){return t.get(jw(t,e))}function Z2(t,e,n){X2(t,e),e.set(t,n)}function ek(t,e,n){return t.set(jw(t,e),n),n}const tk=100,se={},nk=()=>{se.previousActiveElement instanceof HTMLElement?(se.previousActiveElement.focus(),se.previousActiveElement=null):document.body&&document.body.focus()},rk=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,r=window.scrollY;se.restoreFocusTimeout=setTimeout(()=>{nk(),e()},tk),window.scrollTo(n,r)}),Hw="swal2-",sk=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],x=sk.reduce((t,e)=>(t[e]=Hw+e,t),{}),ik=["success","warning","info","question","error"],Xa=ik.reduce((t,e)=>(t[e]=Hw+e,t),{}),qw="SweetAlert2:",Gh=t=>t.charAt(0).toUpperCase()+t.slice(1),Dt=t=>{console.warn(`${qw} ${typeof t=="object"?t.join(" "):t}`)},ds=t=>{console.error(`${qw} ${t}`)},Am=[],ok=t=>{Am.includes(t)||(Am.push(t),Dt(t))},zw=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ok(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},zl=t=>typeof t=="function"?t():t,Qh=t=>t&&typeof t.toPromise=="function",Oo=t=>Qh(t)?t.toPromise():Promise.resolve(t),Yh=t=>t&&Promise.resolve(t)===t,Vt=()=>document.body.querySelector(`.${x.container}`),Do=t=>{const e=Vt();return e?e.querySelector(t):null},Qt=t=>Do(`.${t}`),xe=()=>Qt(x.popup),li=()=>Qt(x.icon),ak=()=>Qt(x["icon-content"]),Ww=()=>Qt(x.title),Jh=()=>Qt(x["html-container"]),Kw=()=>Qt(x.image),Xh=()=>Qt(x["progress-steps"]),Wl=()=>Qt(x["validation-message"]),kn=()=>Do(`.${x.actions} .${x.confirm}`),ci=()=>Do(`.${x.actions} .${x.cancel}`),fs=()=>Do(`.${x.actions} .${x.deny}`),lk=()=>Qt(x["input-label"]),ui=()=>Do(`.${x.loader}`),Vo=()=>Qt(x.actions),Gw=()=>Qt(x.footer),Kl=()=>Qt(x["timer-progress-bar"]),Zh=()=>Qt(x.close),ck=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,ed=()=>{const t=xe();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((i,o)=>{const l=parseInt(i.getAttribute("tabindex")||"0"),c=parseInt(o.getAttribute("tabindex")||"0");return l>c?1:l<c?-1:0}),r=t.querySelectorAll(ck),s=Array.from(r).filter(i=>i.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(s))].filter(i=>$t(i))},td=()=>zn(document.body,x.shown)&&!zn(document.body,x["toast-shown"])&&!zn(document.body,x["no-backdrop"]),Gl=()=>{const t=xe();return t?zn(t,x.toast):!1},uk=()=>{const t=xe();return t?t.hasAttribute("data-loading"):!1},Yt=(t,e)=>{if(t.textContent="",e){const r=new DOMParser().parseFromString(e,"text/html"),s=r.querySelector("head");s&&Array.from(s.childNodes).forEach(o=>{t.appendChild(o)});const i=r.querySelector("body");i&&Array.from(i.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},zn=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let r=0;r<n.length;r++)if(!t.classList.contains(n[r]))return!1;return!0},hk=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(x).includes(n)&&!Object.values(Xa).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},Gt=(t,e,n)=>{if(hk(t,e),!e.customClass)return;const r=e.customClass[n];if(r){if(typeof r!="string"&&!r.forEach){Dt(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof r}"`);return}Ce(t,r)}},Ql=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${x.popup} > .${x[e]}`);case"checkbox":return t.querySelector(`.${x.popup} > .${x.checkbox} input`);case"radio":return t.querySelector(`.${x.popup} > .${x.radio} input:checked`)||t.querySelector(`.${x.popup} > .${x.radio} input:first-child`);case"range":return t.querySelector(`.${x.popup} > .${x.range} input`);default:return t.querySelector(`.${x.popup} > .${x.input}`)}},Qw=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},Yw=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(r=>{Array.isArray(t)?t.forEach(s=>{n?s.classList.add(r):s.classList.remove(r)}):n?t.classList.add(r):t.classList.remove(r)}))},Ce=(t,e)=>{Yw(t,e,!0)},on=(t,e)=>{Yw(t,e,!1)},gr=(t,e)=>{const n=Array.from(t.children);for(let r=0;r<n.length;r++){const s=n[r];if(s instanceof HTMLElement&&zn(s,e))return s}},Jr=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},ot=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";t&&(t.style.display=e)},Ct=t=>{t&&(t.style.display="none")},nd=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";t&&new MutationObserver(()=>{No(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},Cm=(t,e,n,r)=>{const s=t.querySelector(e);s&&s.style.setProperty(n,r)},No=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";e?ot(t,n):Ct(t)},$t=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),dk=()=>!$t(kn())&&!$t(fs())&&!$t(ci()),Sm=t=>t.scrollHeight>t.clientHeight,Jw=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),r=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||r>0},rd=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const n=Kl();n&&$t(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},fk=()=>{const t=Kl();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),r=e/n*100;t.style.width=`${r}%`},pk=()=>typeof window>"u"||typeof document>"u",mk=`
 <div aria-labelledby="${x.title}" aria-describedby="${x["html-container"]}" class="${x.popup}" tabindex="-1">
   <button type="button" class="${x.close}"></button>
   <ul class="${x["progress-steps"]}"></ul>
   <div class="${x.icon}"></div>
   <img class="${x.image}" />
   <h2 class="${x.title}" id="${x.title}"></h2>
   <div class="${x["html-container"]}" id="${x["html-container"]}"></div>
   <input class="${x.input}" id="${x.input}" />
   <input type="file" class="${x.file}" />
   <div class="${x.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${x.select}" id="${x.select}"></select>
   <div class="${x.radio}"></div>
   <label class="${x.checkbox}">
     <input type="checkbox" id="${x.checkbox}" />
     <span class="${x.label}"></span>
   </label>
   <textarea class="${x.textarea}" id="${x.textarea}"></textarea>
   <div class="${x["validation-message"]}" id="${x["validation-message"]}"></div>
   <div class="${x.actions}">
     <div class="${x.loader}"></div>
     <button type="button" class="${x.confirm}"></button>
     <button type="button" class="${x.deny}"></button>
     <button type="button" class="${x.cancel}"></button>
   </div>
   <div class="${x.footer}"></div>
   <div class="${x["timer-progress-bar-container"]}">
     <div class="${x["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),gk=()=>{const t=Vt();return t?(t.remove(),on([document.documentElement,document.body],[x["no-backdrop"],x["toast-shown"],x["has-column"]]),!0):!1},qr=()=>{se.currentInstance.resetValidationMessage()},_k=()=>{const t=xe(),e=gr(t,x.input),n=gr(t,x.file),r=t.querySelector(`.${x.range} input`),s=t.querySelector(`.${x.range} output`),i=gr(t,x.select),o=t.querySelector(`.${x.checkbox} input`),l=gr(t,x.textarea);e.oninput=qr,n.onchange=qr,i.onchange=qr,o.onchange=qr,l.oninput=qr,r.oninput=()=>{qr(),s.value=r.value},r.onchange=()=>{qr(),s.value=r.value}},yk=t=>typeof t=="string"?document.querySelector(t):t,wk=t=>{const e=xe();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},vk=t=>{window.getComputedStyle(t).direction==="rtl"&&Ce(Vt(),x.rtl)},Ek=t=>{const e=gk();if(pk()){ds("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=x.container,e&&Ce(n,x["no-transition"]),Yt(n,mk),n.dataset.swal2Theme=t.theme;const r=yk(t.target);r.appendChild(n),wk(t),vk(r),_k()},sd=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?bk(t,e):t&&Yt(e,t)},bk=(t,e)=>{t.jquery?Tk(e,t):Yt(e,t.toString())},Tk=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Ik=(t,e)=>{const n=Vo(),r=ui();!n||!r||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?Ct(n):ot(n),Gt(n,e,"actions"),Ak(n,r,e),Yt(r,e.loaderHtml||""),Gt(r,e,"loader"))};function Ak(t,e,n){const r=kn(),s=fs(),i=ci();!r||!s||!i||(Lc(r,"confirm",n),Lc(s,"deny",n),Lc(i,"cancel",n),Ck(r,s,i,n),n.reverseButtons&&(n.toast?(t.insertBefore(i,r),t.insertBefore(s,r)):(t.insertBefore(i,e),t.insertBefore(s,e),t.insertBefore(r,e))))}function Ck(t,e,n,r){if(!r.buttonsStyling){on([t,e,n],x.styled);return}Ce([t,e,n],x.styled),r.confirmButtonColor&&(t.style.backgroundColor=r.confirmButtonColor,Ce(t,x["default-outline"])),r.denyButtonColor&&(e.style.backgroundColor=r.denyButtonColor,Ce(e,x["default-outline"])),r.cancelButtonColor&&(n.style.backgroundColor=r.cancelButtonColor,Ce(n,x["default-outline"]))}function Lc(t,e,n){const r=Gh(e);No(t,n[`show${r}Button`],"inline-block"),Yt(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=x[e],Gt(t,n,`${e}Button`)}const Sk=(t,e)=>{const n=Zh();n&&(Yt(n,e.closeButtonHtml||""),Gt(n,e,"closeButton"),No(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},Rk=(t,e)=>{const n=Vt();n&&(Pk(n,e.backdrop),kk(n,e.position),xk(n,e.grow),Gt(n,e,"container"))};function Pk(t,e){typeof e=="string"?t.style.background=e:e||Ce([document.documentElement,document.body],x["no-backdrop"])}function kk(t,e){e&&(e in x?Ce(t,x[e]):(Dt('The "position" parameter is not valid, defaulting to "center"'),Ce(t,x.center)))}function xk(t,e){e&&Ce(t,x[`grow-${e}`])}var Be={innerParams:new WeakMap,domCache:new WeakMap};const Ok=["input","file","range","select","radio","checkbox","textarea"],Dk=(t,e)=>{const n=xe();if(!n)return;const r=Be.innerParams.get(t),s=!r||e.input!==r.input;Ok.forEach(i=>{const o=gr(n,x[i]);o&&(Lk(i,e.inputAttributes),o.className=x[i],s&&Ct(o))}),e.input&&(s&&Vk(e),Mk(e))},Vk=t=>{if(!t.input)return;if(!Qe[t.input]){ds(`Unexpected type of input! Expected ${Object.keys(Qe).join(" | ")}, got "${t.input}"`);return}const e=Xw(t.input);if(!e)return;const n=Qe[t.input](e,t);ot(e),t.inputAutoFocus&&setTimeout(()=>{Qw(n)})},Nk=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},Lk=(t,e)=>{const n=xe();if(!n)return;const r=Ql(n,t);if(r){Nk(r);for(const s in e)r.setAttribute(s,e[s])}},Mk=t=>{if(!t.input)return;const e=Xw(t.input);e&&Gt(e,t,"input")},id=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},Lo=(t,e,n)=>{if(n.inputLabel){const r=document.createElement("label"),s=x["input-label"];r.setAttribute("for",t.id),r.className=s,typeof n.customClass=="object"&&Ce(r,n.customClass.inputLabel),r.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",r)}},Xw=t=>{const e=xe();if(e)return gr(e,x[t]||x.input)},Za=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:Yh(e)||Dt(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},Qe={};Qe.text=Qe.email=Qe.password=Qe.number=Qe.tel=Qe.url=Qe.search=Qe.date=Qe["datetime-local"]=Qe.time=Qe.week=Qe.month=(t,e)=>(Za(t,e.inputValue),Lo(t,t,e),id(t,e),t.type=e.input,t);Qe.file=(t,e)=>(Lo(t,t,e),id(t,e),t);Qe.range=(t,e)=>{const n=t.querySelector("input"),r=t.querySelector("output");return Za(n,e.inputValue),n.type=e.input,Za(r,e.inputValue),Lo(n,t,e),t};Qe.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Yt(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Lo(t,t,e),t};Qe.radio=t=>(t.textContent="",t);Qe.checkbox=(t,e)=>{const n=Ql(xe(),"checkbox");n.value="1",n.checked=!!e.inputValue;const r=t.querySelector("span");return Yt(r,e.inputPlaceholder||e.inputLabel),n};Qe.textarea=(t,e)=>{Za(t,e.inputValue),id(t,e),Lo(t,t,e);const n=r=>parseInt(window.getComputedStyle(r).marginLeft)+parseInt(window.getComputedStyle(r).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const r=parseInt(window.getComputedStyle(xe()).width),s=()=>{if(!document.body.contains(t))return;const i=t.offsetWidth+n(t);i>r?xe().style.width=`${i}px`:Jr(xe(),"width",e.width)};new MutationObserver(s).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const Fk=(t,e)=>{const n=Jh();n&&(nd(n),Gt(n,e,"htmlContainer"),e.html?(sd(e.html,n),ot(n,"block")):e.text?(n.textContent=e.text,ot(n,"block")):Ct(n),Dk(t,e))},Uk=(t,e)=>{const n=Gw();n&&(nd(n),No(n,e.footer,"block"),e.footer&&sd(e.footer,n),Gt(n,e,"footer"))},Bk=(t,e)=>{const n=Be.innerParams.get(t),r=li();if(!r)return;if(n&&e.icon===n.icon){Pm(r,e),Rm(r,e);return}if(!e.icon&&!e.iconHtml){Ct(r);return}if(e.icon&&Object.keys(Xa).indexOf(e.icon)===-1){ds(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),Ct(r);return}ot(r),Pm(r,e),Rm(r,e),Ce(r,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",Zw)},Rm=(t,e)=>{for(const[n,r]of Object.entries(Xa))e.icon!==n&&on(t,r);Ce(t,e.icon&&Xa[e.icon]),Hk(t,e),Zw(),Gt(t,e,"icon")},Zw=()=>{const t=xe();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let r=0;r<n.length;r++)n[r].style.backgroundColor=e},$k=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,jk=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Pm=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,r="";e.iconHtml?r=km(e.iconHtml):e.icon==="success"?(r=$k,n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?r=jk:e.icon&&(r=km({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==r.trim()&&Yt(t,r)},Hk=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Cm(t,n,"background-color",e.iconColor);Cm(t,".swal2-success-ring","border-color",e.iconColor)}},km=t=>`<div class="${x["icon-content"]}">${t}</div>`,qk=(t,e)=>{const n=Kw();if(n){if(!e.imageUrl){Ct(n);return}ot(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),Jr(n,"width",e.imageWidth),Jr(n,"height",e.imageHeight),n.className=x.image,Gt(n,e,"image")}};let od=!1,ev=0,tv=0,nv=0,rv=0;const zk=t=>{t.addEventListener("mousedown",el),document.body.addEventListener("mousemove",tl),t.addEventListener("mouseup",nl),t.addEventListener("touchstart",el),document.body.addEventListener("touchmove",tl),t.addEventListener("touchend",nl)},Wk=t=>{t.removeEventListener("mousedown",el),document.body.removeEventListener("mousemove",tl),t.removeEventListener("mouseup",nl),t.removeEventListener("touchstart",el),document.body.removeEventListener("touchmove",tl),t.removeEventListener("touchend",nl)},el=t=>{const e=xe();if(t.target===e||li().contains(t.target)){od=!0;const n=sv(t);ev=n.clientX,tv=n.clientY,nv=parseInt(e.style.insetInlineStart)||0,rv=parseInt(e.style.insetBlockStart)||0,Ce(e,"swal2-dragging")}},tl=t=>{const e=xe();if(od){let{clientX:n,clientY:r}=sv(t);e.style.insetInlineStart=`${nv+(n-ev)}px`,e.style.insetBlockStart=`${rv+(r-tv)}px`}},nl=()=>{const t=xe();od=!1,on(t,"swal2-dragging")},sv=t=>{let e=0,n=0;return t.type.startsWith("mouse")?(e=t.clientX,n=t.clientY):t.type.startsWith("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),{clientX:e,clientY:n}},Kk=(t,e)=>{const n=Vt(),r=xe();if(!(!n||!r)){if(e.toast){Jr(n,"width",e.width),r.style.width="100%";const s=ui();s&&r.insertBefore(s,li())}else Jr(r,"width",e.width);Jr(r,"padding",e.padding),e.color&&(r.style.color=e.color),e.background&&(r.style.background=e.background),Ct(Wl()),Gk(r,e),e.draggable&&!e.toast?(Ce(r,x.draggable),zk(r)):(on(r,x.draggable),Wk(r))}},Gk=(t,e)=>{const n=e.showClass||{};t.className=`${x.popup} ${$t(t)?n.popup:""}`,e.toast?(Ce([document.documentElement,document.body],x["toast-shown"]),Ce(t,x.toast)):Ce(t,x.modal),Gt(t,e,"popup"),typeof e.customClass=="string"&&Ce(t,e.customClass),e.icon&&Ce(t,x[`icon-${e.icon}`])},Qk=(t,e)=>{const n=Xh();if(!n)return;const{progressSteps:r,currentProgressStep:s}=e;if(!r||r.length===0||s===void 0){Ct(n);return}ot(n),n.textContent="",s>=r.length&&Dt("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),r.forEach((i,o)=>{const l=Yk(i);if(n.appendChild(l),o===s&&Ce(l,x["active-progress-step"]),o!==r.length-1){const c=Jk(e);n.appendChild(c)}})},Yk=t=>{const e=document.createElement("li");return Ce(e,x["progress-step"]),Yt(e,t),e},Jk=t=>{const e=document.createElement("li");return Ce(e,x["progress-step-line"]),t.progressStepsDistance&&Jr(e,"width",t.progressStepsDistance),e},Xk=(t,e)=>{const n=Ww();n&&(nd(n),No(n,e.title||e.titleText,"block"),e.title&&sd(e.title,n),e.titleText&&(n.innerText=e.titleText),Gt(n,e,"title"))},iv=(t,e)=>{Kk(t,e),Rk(t,e),Qk(t,e),Bk(t,e),qk(t,e),Xk(t,e),Sk(t,e),Fk(t,e),Ik(t,e),Uk(t,e);const n=xe();typeof e.didRender=="function"&&n&&e.didRender(n),se.eventEmitter.emit("didRender",n)},Zk=()=>$t(xe()),ov=()=>{var t;return(t=kn())===null||t===void 0?void 0:t.click()},e1=()=>{var t;return(t=fs())===null||t===void 0?void 0:t.click()},t1=()=>{var t;return(t=ci())===null||t===void 0?void 0:t.click()},hi=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),av=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},n1=(t,e,n)=>{av(t),e.toast||(t.keydownHandler=r=>s1(e,r,n),t.keydownTarget=e.keydownListenerCapture?window:xe(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},Cu=(t,e)=>{var n;const r=ed();if(r.length){t=t+e,t===r.length?t=0:t===-1&&(t=r.length-1),r[t].focus();return}(n=xe())===null||n===void 0||n.focus()},lv=["ArrowRight","ArrowDown"],r1=["ArrowLeft","ArrowUp"],s1=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?i1(e,t):e.key==="Tab"?o1(e):[...lv,...r1].includes(e.key)?a1(e.key):e.key==="Escape"&&l1(e,t,n)))},i1=(t,e)=>{if(!zl(e.allowEnterKey))return;const n=Ql(xe(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;ov(),t.preventDefault()}},o1=t=>{const e=t.target,n=ed();let r=-1;for(let s=0;s<n.length;s++)if(e===n[s]){r=s;break}t.shiftKey?Cu(r,-1):Cu(r,1),t.stopPropagation(),t.preventDefault()},a1=t=>{const e=Vo(),n=kn(),r=fs(),s=ci();if(!e||!n||!r||!s)return;const i=[n,r,s];if(document.activeElement instanceof HTMLElement&&!i.includes(document.activeElement))return;const o=lv.includes(t)?"nextElementSibling":"previousElementSibling";let l=document.activeElement;if(l){for(let c=0;c<e.children.length;c++){if(l=l[o],!l)return;if(l instanceof HTMLButtonElement&&$t(l))break}l instanceof HTMLButtonElement&&l.focus()}},l1=(t,e,n)=>{zl(e.allowEscapeKey)&&(t.preventDefault(),n(hi.esc))};var Xs={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const c1=()=>{const t=Vt();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},cv=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},uv=typeof window<"u"&&!!window.GestureEvent,u1=()=>{if(uv&&!zn(document.body,x.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,Ce(document.body,x.iosfix),h1()}},h1=()=>{const t=Vt();if(!t)return;let e;t.ontouchstart=n=>{e=d1(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},d1=t=>{const e=t.target,n=Vt(),r=Jh();return!n||!r||f1(t)||p1(t)?!1:e===n||!Sm(n)&&e instanceof HTMLElement&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(Sm(r)&&r.contains(e))},f1=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",p1=t=>t.touches&&t.touches.length>1,m1=()=>{if(zn(document.body,x.iosfix)){const t=parseInt(document.body.style.top,10);on(document.body,x.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},g1=()=>{const t=document.createElement("div");t.className=x["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let Ms=null;const _1=t=>{Ms===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(Ms=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Ms+g1()}px`)},y1=()=>{Ms!==null&&(document.body.style.paddingRight=`${Ms}px`,Ms=null)};function hv(t,e,n,r){Gl()?xm(t,r):(rk(n).then(()=>xm(t,r)),av(se)),uv?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),td()&&(y1(),m1(),cv()),w1()}function w1(){on([document.documentElement,document.body],[x.shown,x["height-auto"],x["no-backdrop"],x["toast-shown"]])}function _r(t){t=E1(t);const e=Xs.swalPromiseResolve.get(this),n=v1(this);this.isAwaitingPromise?t.isDismissed||(Mo(this),e(t)):n&&e(t)}const v1=t=>{const e=xe();if(!e)return!1;const n=Be.innerParams.get(t);if(!n||zn(e,n.hideClass.popup))return!1;on(e,n.showClass.popup),Ce(e,n.hideClass.popup);const r=Vt();return on(r,n.showClass.backdrop),Ce(r,n.hideClass.backdrop),b1(t,e,n),!0};function dv(t){const e=Xs.swalPromiseReject.get(this);Mo(this),e&&e(t)}const Mo=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,Be.innerParams.get(t)||t._destroy())},E1=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),b1=(t,e,n)=>{var r;const s=Vt(),i=Jw(e);typeof n.willClose=="function"&&n.willClose(e),(r=se.eventEmitter)===null||r===void 0||r.emit("willClose",e),i?T1(t,e,s,n.returnFocus,n.didClose):hv(t,s,n.returnFocus,n.didClose)},T1=(t,e,n,r,s)=>{se.swalCloseEventFinishedCallback=hv.bind(null,t,n,r,s);const i=function(o){if(o.target===e){var l;(l=se.swalCloseEventFinishedCallback)===null||l===void 0||l.call(se),delete se.swalCloseEventFinishedCallback,e.removeEventListener("animationend",i),e.removeEventListener("transitionend",i)}};e.addEventListener("animationend",i),e.addEventListener("transitionend",i)},xm=(t,e)=>{setTimeout(()=>{var n;typeof e=="function"&&e.bind(t.params)(),(n=se.eventEmitter)===null||n===void 0||n.emit("didClose"),t._destroy&&t._destroy()})},Zs=t=>{let e=xe();if(e||new Us,e=xe(),!e)return;const n=ui();Gl()?Ct(li()):I1(e,t),ot(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},I1=(t,e)=>{const n=Vo(),r=ui();!n||!r||(!e&&$t(kn())&&(e=kn()),ot(n),e&&(Ct(e),r.setAttribute("data-button-to-replace",e.className),n.insertBefore(r,e)),Ce([t,n],x.loading))},A1=(t,e)=>{e.input==="select"||e.input==="radio"?k1(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(Qh(e.inputValue)||Yh(e.inputValue))&&(Zs(kn()),x1(t,e))},C1=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return S1(n);case"radio":return R1(n);case"file":return P1(n);default:return e.inputAutoTrim?n.value.trim():n.value}},S1=t=>t.checked?1:0,R1=t=>t.checked?t.value:null,P1=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,k1=(t,e)=>{const n=xe();if(!n)return;const r=s=>{e.input==="select"?O1(n,rl(s),e):e.input==="radio"&&D1(n,rl(s),e)};Qh(e.inputOptions)||Yh(e.inputOptions)?(Zs(kn()),Oo(e.inputOptions).then(s=>{t.hideLoading(),r(s)})):typeof e.inputOptions=="object"?r(e.inputOptions):ds(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},x1=(t,e)=>{const n=t.getInput();n&&(Ct(n),Oo(e.inputValue).then(r=>{n.value=e.input==="number"?`${parseFloat(r)||0}`:`${r}`,ot(n),n.focus(),t.hideLoading()}).catch(r=>{ds(`Error in inputValue promise: ${r}`),n.value="",ot(n),n.focus(),t.hideLoading()}))};function O1(t,e,n){const r=gr(t,x.select);if(!r)return;const s=(i,o,l)=>{const c=document.createElement("option");c.value=l,Yt(c,o),c.selected=fv(l,n.inputValue),i.appendChild(c)};e.forEach(i=>{const o=i[0],l=i[1];if(Array.isArray(l)){const c=document.createElement("optgroup");c.label=o,c.disabled=!1,r.appendChild(c),l.forEach(h=>s(c,h[1],h[0]))}else s(r,l,o)}),r.focus()}function D1(t,e,n){const r=gr(t,x.radio);if(!r)return;e.forEach(i=>{const o=i[0],l=i[1],c=document.createElement("input"),h=document.createElement("label");c.type="radio",c.name=x.radio,c.value=o,fv(o,n.inputValue)&&(c.checked=!0);const d=document.createElement("span");Yt(d,l),d.className=x.label,h.appendChild(c),h.appendChild(d),r.appendChild(h)});const s=r.querySelectorAll("input");s.length&&s[0].focus()}const rl=t=>{const e=[];return t instanceof Map?t.forEach((n,r)=>{let s=n;typeof s=="object"&&(s=rl(s)),e.push([r,s])}):Object.keys(t).forEach(n=>{let r=t[n];typeof r=="object"&&(r=rl(r)),e.push([n,r])}),e},fv=(t,e)=>!!e&&e.toString()===t.toString(),V1=t=>{const e=Be.innerParams.get(t);t.disableButtons(),e.input?pv(t,"confirm"):ld(t,!0)},N1=t=>{const e=Be.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?pv(t,"deny"):ad(t,!1)},L1=(t,e)=>{t.disableButtons(),e(hi.cancel)},pv=(t,e)=>{const n=Be.innerParams.get(t);if(!n.input){ds(`The "input" parameter is needed to be set when using returnInputValueOn${Gh(e)}`);return}const r=t.getInput(),s=C1(t,n);n.inputValidator?M1(t,s,e):r&&!r.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||r.validationMessage)):e==="deny"?ad(t,s):ld(t,s)},M1=(t,e,n)=>{const r=Be.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Oo(r.inputValidator(e,r.validationMessage))).then(i=>{t.enableButtons(),t.enableInput(),i?t.showValidationMessage(i):n==="deny"?ad(t,e):ld(t,e)})},ad=(t,e)=>{const n=Be.innerParams.get(t||void 0);n.showLoaderOnDeny&&Zs(fs()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>Oo(n.preDeny(e,n.validationMessage))).then(s=>{s===!1?(t.hideLoading(),Mo(t)):t.close({isDenied:!0,value:typeof s>"u"?e:s})}).catch(s=>mv(t||void 0,s))):t.close({isDenied:!0,value:e})},Om=(t,e)=>{t.close({isConfirmed:!0,value:e})},mv=(t,e)=>{t.rejectPromise(e)},ld=(t,e)=>{const n=Be.innerParams.get(t||void 0);n.showLoaderOnConfirm&&Zs(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>Oo(n.preConfirm(e,n.validationMessage))).then(s=>{$t(Wl())||s===!1?(t.hideLoading(),Mo(t)):Om(t,typeof s>"u"?e:s)}).catch(s=>mv(t||void 0,s))):Om(t,e)};function sl(){const t=Be.innerParams.get(this);if(!t)return;const e=Be.domCache.get(this);Ct(e.loader),Gl()?t.icon&&ot(li()):F1(e),on([e.popup,e.actions],x.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const F1=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?ot(e[0],"inline-block"):dk()&&Ct(t.actions)};function gv(){const t=Be.innerParams.get(this),e=Be.domCache.get(this);return e?Ql(e.popup,t.input):null}function _v(t,e,n){const r=Be.domCache.get(t);e.forEach(s=>{r[s].disabled=n})}function yv(t,e){const n=xe();if(!(!n||!t))if(t.type==="radio"){const r=n.querySelectorAll(`[name="${x.radio}"]`);for(let s=0;s<r.length;s++)r[s].disabled=e}else t.disabled=e}function wv(){_v(this,["confirmButton","denyButton","cancelButton"],!1)}function vv(){_v(this,["confirmButton","denyButton","cancelButton"],!0)}function Ev(){yv(this.getInput(),!1)}function bv(){yv(this.getInput(),!0)}function Tv(t){const e=Be.domCache.get(this),n=Be.innerParams.get(this);Yt(e.validationMessage,t),e.validationMessage.className=x["validation-message"],n.customClass&&n.customClass.validationMessage&&Ce(e.validationMessage,n.customClass.validationMessage),ot(e.validationMessage);const r=this.getInput();r&&(r.setAttribute("aria-invalid","true"),r.setAttribute("aria-describedby",x["validation-message"]),Qw(r),Ce(r,x.inputerror))}function Iv(){const t=Be.domCache.get(this);t.validationMessage&&Ct(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),on(e,x.inputerror))}const Fs={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},U1=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],B1={allowEnterKey:void 0},$1=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Av=t=>Object.prototype.hasOwnProperty.call(Fs,t),Cv=t=>U1.indexOf(t)!==-1,Sv=t=>B1[t],j1=t=>{Av(t)||Dt(`Unknown parameter "${t}"`)},H1=t=>{$1.includes(t)&&Dt(`The parameter "${t}" is incompatible with toasts`)},q1=t=>{const e=Sv(t);e&&zw(t,e)},Rv=t=>{t.backdrop===!1&&t.allowOutsideClick&&Dt('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","borderless"].includes(t.theme)&&Dt(`Invalid theme "${t.theme}". Expected "light", "dark", "auto", or "borderless"`);for(const e in t)j1(e),t.toast&&H1(e),q1(e)};function Pv(t){const e=Vt(),n=xe(),r=Be.innerParams.get(this);if(!n||zn(n,r.hideClass.popup)){Dt("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const s=z1(t),i=Object.assign({},r,s);Rv(i),e.dataset.swal2Theme=i.theme,iv(this,i),Be.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const z1=t=>{const e={};return Object.keys(t).forEach(n=>{Cv(n)?e[n]=t[n]:Dt(`Invalid parameter to update: ${n}`)}),e};function kv(){const t=Be.domCache.get(this),e=Be.innerParams.get(this);if(!e){xv(this);return}t.popup&&se.swalCloseEventFinishedCallback&&(se.swalCloseEventFinishedCallback(),delete se.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),se.eventEmitter.emit("didDestroy"),W1(this)}const W1=t=>{xv(t),delete t.params,delete se.keydownHandler,delete se.keydownTarget,delete se.currentInstance},xv=t=>{t.isAwaitingPromise?(Mc(Be,t),t.isAwaitingPromise=!0):(Mc(Xs,t),Mc(Be,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},Mc=(t,e)=>{for(const n in t)t[n].delete(e)};var K1=Object.freeze({__proto__:null,_destroy:kv,close:_r,closeModal:_r,closePopup:_r,closeToast:_r,disableButtons:vv,disableInput:bv,disableLoading:sl,enableButtons:wv,enableInput:Ev,getInput:gv,handleAwaitingPromise:Mo,hideLoading:sl,rejectPromise:dv,resetValidationMessage:Iv,showValidationMessage:Tv,update:Pv});const G1=(t,e,n)=>{t.toast?Q1(t,e,n):(J1(e),X1(e),Z1(t,e,n))},Q1=(t,e,n)=>{e.popup.onclick=()=>{t&&(Y1(t)||t.timer||t.input)||n(hi.close)}},Y1=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let il=!1;const J1=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(il=!0)}}},X1=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(il=!0)}}},Z1=(t,e,n)=>{e.container.onclick=r=>{if(il){il=!1;return}r.target===e.container&&zl(t.allowOutsideClick)&&n(hi.backdrop)}},ex=t=>typeof t=="object"&&t.jquery,Dm=t=>t instanceof Element||ex(t),tx=t=>{const e={};return typeof t[0]=="object"&&!Dm(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,r)=>{const s=t[r];typeof s=="string"||Dm(s)?e[n]=s:s!==void 0&&ds(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),e};function nx(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return new this(...e)}function rx(t){class e extends this{_main(r,s){return super._main(r,Object.assign({},t,s))}}return e}const sx=()=>se.timeout&&se.timeout.getTimerLeft(),Ov=()=>{if(se.timeout)return fk(),se.timeout.stop()},Dv=()=>{if(se.timeout){const t=se.timeout.start();return rd(t),t}},ix=()=>{const t=se.timeout;return t&&(t.running?Ov():Dv())},ox=t=>{if(se.timeout){const e=se.timeout.increase(t);return rd(e,!0),e}},ax=()=>!!(se.timeout&&se.timeout.isRunning());let Vm=!1;const Su={};function lx(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Su[t]=this,Vm||(document.body.addEventListener("click",cx),Vm=!0)}const cx=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in Su){const r=e.getAttribute(n);if(r){Su[n].fire({template:r});return}}};class ux{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const r=this._getHandlersByEventName(e);r.includes(n)||r.push(n)}once(e,n){var r=this;const s=function(){r.removeListener(e,s);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];n.apply(r,o)};this.on(e,s)}emit(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];this._getHandlersByEventName(e).forEach(i=>{try{i.apply(this,r)}catch(o){console.error(o)}})}removeListener(e,n){const r=this._getHandlersByEventName(e),s=r.indexOf(n);s>-1&&r.splice(s,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}se.eventEmitter=new ux;const hx=(t,e)=>{se.eventEmitter.on(t,e)},dx=(t,e)=>{se.eventEmitter.once(t,e)},fx=(t,e)=>{if(!t){se.eventEmitter.reset();return}e?se.eventEmitter.removeListener(t,e):se.eventEmitter.removeAllListeners(t)};var px=Object.freeze({__proto__:null,argsToParams:tx,bindClickHandler:lx,clickCancel:t1,clickConfirm:ov,clickDeny:e1,enableLoading:Zs,fire:nx,getActions:Vo,getCancelButton:ci,getCloseButton:Zh,getConfirmButton:kn,getContainer:Vt,getDenyButton:fs,getFocusableElements:ed,getFooter:Gw,getHtmlContainer:Jh,getIcon:li,getIconContent:ak,getImage:Kw,getInputLabel:lk,getLoader:ui,getPopup:xe,getProgressSteps:Xh,getTimerLeft:sx,getTimerProgressBar:Kl,getTitle:Ww,getValidationMessage:Wl,increaseTimer:ox,isDeprecatedParameter:Sv,isLoading:uk,isTimerRunning:ax,isUpdatableParameter:Cv,isValidParameter:Av,isVisible:Zk,mixin:rx,off:fx,on:hx,once:dx,resumeTimer:Dv,showLoading:Zs,stopTimer:Ov,toggleTimer:ix});class mx{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Vv=["swal-title","swal-html","swal-footer"],gx=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return Ix(n),Object.assign(_x(n),yx(n),wx(n),vx(n),Ex(n),bx(n),Tx(n,Vv))},_x=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(r=>{os(r,["name","value"]);const s=r.getAttribute("name"),i=r.getAttribute("value");!s||!i||(typeof Fs[s]=="boolean"?e[s]=i!=="false":typeof Fs[s]=="object"?e[s]=JSON.parse(i):e[s]=i)}),e},yx=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(r=>{const s=r.getAttribute("name"),i=r.getAttribute("value");!s||!i||(e[s]=new Function(`return ${i}`)())}),e},wx=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(r=>{os(r,["type","color","aria-label"]);const s=r.getAttribute("type");!s||!["confirm","cancel","deny"].includes(s)||(e[`${s}ButtonText`]=r.innerHTML,e[`show${Gh(s)}Button`]=!0,r.hasAttribute("color")&&(e[`${s}ButtonColor`]=r.getAttribute("color")),r.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=r.getAttribute("aria-label")))}),e},vx=t=>{const e={},n=t.querySelector("swal-image");return n&&(os(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},Ex=t=>{const e={},n=t.querySelector("swal-icon");return n&&(os(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},bx=t=>{const e={},n=t.querySelector("swal-input");n&&(os(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const r=Array.from(t.querySelectorAll("swal-input-option"));return r.length&&(e.inputOptions={},r.forEach(s=>{os(s,["value"]);const i=s.getAttribute("value");if(!i)return;const o=s.innerHTML;e.inputOptions[i]=o})),e},Tx=(t,e)=>{const n={};for(const r in e){const s=e[r],i=t.querySelector(s);i&&(os(i,[]),n[s.replace(/^swal-/,"")]=i.innerHTML.trim())}return n},Ix=t=>{const e=Vv.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const r=n.tagName.toLowerCase();e.includes(r)||Dt(`Unrecognized element <${r}>`)})},os=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Dt([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Nv=10,Ax=t=>{const e=Vt(),n=xe();typeof t.willOpen=="function"&&t.willOpen(n),se.eventEmitter.emit("willOpen",n);const s=window.getComputedStyle(document.body).overflowY;Rx(e,n,t),setTimeout(()=>{Cx(e,n)},Nv),td()&&(Sx(e,t.scrollbarPadding,s),c1()),!Gl()&&!se.previousActiveElement&&(se.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),se.eventEmitter.emit("didOpen",n),on(e,x["no-transition"])},ol=t=>{const e=xe();if(t.target!==e)return;const n=Vt();e.removeEventListener("animationend",ol),e.removeEventListener("transitionend",ol),n.style.overflowY="auto"},Cx=(t,e)=>{Jw(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",ol),e.addEventListener("transitionend",ol)):t.style.overflowY="auto"},Sx=(t,e,n)=>{u1(),e&&n!=="hidden"&&_1(n),setTimeout(()=>{t.scrollTop=0})},Rx=(t,e,n)=>{Ce(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),ot(e,"grid"),setTimeout(()=>{Ce(e,n.showClass.popup),e.style.removeProperty("opacity")},Nv)):ot(e,"grid"),Ce([document.documentElement,document.body],x.shown),n.heightAuto&&n.backdrop&&!n.toast&&Ce([document.documentElement,document.body],x["height-auto"])};var Nm={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Px(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=Nm.email),t.input==="url"&&(t.inputValidator=Nm.url))}function kx(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Dt('Target parameter is not valid, defaulting to "body"'),t.target="body")}function xx(t){Px(t),t.showLoaderOnConfirm&&!t.preConfirm&&Dt(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),kx(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),Ek(t)}let wn;var ca=new WeakMap;class Xe{constructor(){if(Z2(this,ca,void 0),typeof window>"u")return;wn=this;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=Object.freeze(this.constructor.argsToParams(n));this.params=s,this.isAwaitingPromise=!1,ek(ca,this,this._main(wn.params))}_main(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Rv(Object.assign({},n,e)),se.currentInstance){const i=Xs.swalPromiseResolve.get(se.currentInstance),{isAwaitingPromise:o}=se.currentInstance;se.currentInstance._destroy(),o||i({isDismissed:!0}),td()&&cv()}se.currentInstance=wn;const r=Dx(e,n);xx(r),Object.freeze(r),se.timeout&&(se.timeout.stop(),delete se.timeout),clearTimeout(se.restoreFocusTimeout);const s=Vx(wn);return iv(wn,r),Be.innerParams.set(wn,r),Ox(wn,s,r)}then(e){return Im(ca,this).then(e)}finally(e){return Im(ca,this).finally(e)}}const Ox=(t,e,n)=>new Promise((r,s)=>{const i=o=>{t.close({isDismissed:!0,dismiss:o})};Xs.swalPromiseResolve.set(t,r),Xs.swalPromiseReject.set(t,s),e.confirmButton.onclick=()=>{V1(t)},e.denyButton.onclick=()=>{N1(t)},e.cancelButton.onclick=()=>{L1(t,i)},e.closeButton.onclick=()=>{i(hi.close)},G1(n,e,i),n1(se,n,i),A1(t,n),Ax(n),Nx(se,n,i),Lx(e,n),setTimeout(()=>{e.container.scrollTop=0})}),Dx=(t,e)=>{const n=gx(t),r=Object.assign({},Fs,e,n,t);return r.showClass=Object.assign({},Fs.showClass,r.showClass),r.hideClass=Object.assign({},Fs.hideClass,r.hideClass),r.animation===!1&&(r.showClass={backdrop:"swal2-noanimation"},r.hideClass={}),r},Vx=t=>{const e={popup:xe(),container:Vt(),actions:Vo(),confirmButton:kn(),denyButton:fs(),cancelButton:ci(),loader:ui(),closeButton:Zh(),validationMessage:Wl(),progressSteps:Xh()};return Be.domCache.set(t,e),e},Nx=(t,e,n)=>{const r=Kl();Ct(r),e.timer&&(t.timeout=new mx(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(ot(r),Gt(r,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&rd(e.timer)})))},Lx=(t,e)=>{if(!e.toast){if(!zl(e.allowEnterKey)){zw("allowEnterKey"),Ux();return}Mx(t)||Fx(t,e)||Cu(-1,1)}},Mx=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const n of e)if(n instanceof HTMLElement&&$t(n))return n.focus(),!0;return!1},Fx=(t,e)=>e.focusDeny&&$t(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&$t(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&$t(t.confirmButton)?(t.confirmButton.focus(),!0):!1,Ux=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const t=new Date,e=localStorage.getItem("swal-initiation");e?(t.getTime()-Date.parse(e))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const n=document.createElement("audio");n.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",n.loop=!0,document.body.appendChild(n),setTimeout(()=>{n.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${t}`)}Xe.prototype.disableButtons=vv;Xe.prototype.enableButtons=wv;Xe.prototype.getInput=gv;Xe.prototype.disableInput=bv;Xe.prototype.enableInput=Ev;Xe.prototype.hideLoading=sl;Xe.prototype.disableLoading=sl;Xe.prototype.showValidationMessage=Tv;Xe.prototype.resetValidationMessage=Iv;Xe.prototype.close=_r;Xe.prototype.closePopup=_r;Xe.prototype.closeModal=_r;Xe.prototype.closeToast=_r;Xe.prototype.rejectPromise=dv;Xe.prototype.update=Pv;Xe.prototype._destroy=kv;Object.assign(Xe,px);Object.keys(K1).forEach(t=>{Xe[t]=function(){return wn&&wn[t]?wn[t](...arguments):null}});Xe.DismissReason=hi;Xe.version="11.17.2";const Us=Xe;Us.default=Us;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,':root{--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-footer-border-color: #eee;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-input-background: transparent;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:var(--swal2-border-radius);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:var(--swal2-input-background);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:var(--swal2-background);box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const xn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Bx={class:"sidebar"},$x={class:"user"},jx={class:"nav-links"},Hx={__name:"NavBar",setup(t){const e=$w(),n=Rw(),r=xt(()=>n.user),s=async()=>{await n.logout(),e.push("/")};return(i,o)=>{const l=qu("router-link");return ye(),Ae("nav",Bx,[o[2]||(o[2]=te("h1",{class:"headline"},"Bro-Bank",-1)),te("p",$x,"Eingeloggt: "+ze(r.value.email),1),te("ul",jx,[te("li",null,[We(l,{to:"/home"},{default:Xi(()=>o[0]||(o[0]=[$s("🏠 Home")])),_:1})]),te("li",null,[We(l,{to:"/newgroups"},{default:Xi(()=>o[1]||(o[1]=[$s("💬 Finde Bros")])),_:1})])]),te("button",{class:"logout-btn",onClick:s},"🚪 Abmelden")])}}},qx=xn(Hx,[["__scopeId","data-v-63a0c81f"]]),zx={class:"container"},Wx={class:"input-group"},Kx={class:"input-group"},Gx={class:"input-group"},Qx=["required"],Yx={type:"submit"},Jx={__name:"LoginBar",setup(t){const e=$w(),n=ke(""),r=ke(""),s=ke(""),i=ke(!1),o=Us.mixin({toast:!0,position:"bottom-left",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:p=>{p.onmouseenter=Us.stopTimer,p.onmouseleave=Us.resumeTimer}});async function l(){i.value?await c():await h()}async function c(){if(r.value!==s.value){o.fire({icon:"error",title:"Fehler",text:"Passwörter stimmen nicht überein!",timer:!1});return}try{const p=await yA(rn,n.value,r.value),m=p.user;await Aw(Jn(Kt,"users",m.uid),{username:n.value}),console.log("Erfolgreich registriert:",p.user),o.fire({icon:"success",title:"Registrierung erfolgreich!",showConfirmButton:!1,timer:1500}),e.push("/home")}catch(p){o.fire({icon:"error",title:"Registrierungsfehler",text:p.message})}}async function h(){try{await wA(rn,n.value,r.value),o.fire({icon:"success",title:"Signed in successfully"}),e.push("/home")}catch(p){o.fire({icon:"error",title:"Anmeldefehler",text:p.message,timer:!1})}}function d(){i.value=!i.value}return(p,m)=>(ye(),Ae("div",zx,[m[3]||(m[3]=te("h1",{class:"headline"},"Bro-Bank",-1)),te("form",{onSubmit:Wg(l,["prevent"])},[te("div",Wx,[jn(te("input",{"onUpdate:modelValue":m[0]||(m[0]=_=>n.value=_),id:"email",type:"email",required:""},null,512),[[vr,n.value]]),te("label",{class:cn({active:n.value}),for:"email"},"E-Mail",2)]),te("div",Kx,[jn(te("input",{"onUpdate:modelValue":m[1]||(m[1]=_=>r.value=_),id:"password",type:"password",required:""},null,512),[[vr,r.value]]),te("label",{class:cn({active:r.value}),for:"password"},"Passwort",2)]),te("div",{class:cn(["register-fields",{expanded:i.value}])},[te("div",Gx,[jn(te("input",{"onUpdate:modelValue":m[2]||(m[2]=_=>s.value=_),id:"confirmPassword",type:"password",required:i.value},null,8,Qx),[[vr,s.value]]),te("label",{class:cn({active:s.value}),for:"confirmPassword"},"Passwort bestätigen",2)])],2),te("div",{class:cn(["button-container",{shifted:i.value}])},[te("button",Yx,ze(i.value?"Registrieren":"Login"),1),te("button",{type:"button",class:"toggle-btn",onClick:d},ze(i.value?"Zurück zum Login":"Registrieren"),1)],2)],32)]))}},Xx=xn(Jx,[["__scopeId","data-v-e9a37f23"]]),Zx={class:"app-container"},eO={__name:"App",setup(t){const e=Rw(),n=xt(()=>e.user),r=ke(!1),s=()=>{r.value=!r.value};return(i,o)=>{const l=qu("router-view");return ye(),Ae("div",Zx,[te("aside",{class:cn(["sidebar",{collapsed:r.value}])},[n.value?(ye(),Ae("button",{key:0,class:cn(["toggle-btn",{collapsed:r.value}]),onClick:s},ze(r.value?"⮚⮚⮚":"⮘⮘⮘"),3)):Wn("",!0),n.value?(ye(),ka(qx,{key:1})):(ye(),ka(Xx,{key:2}))],2),te("main",{class:cn(["content",{expanded:r.value}])},[We(l)],2)])}}},tO=xn(eO,[["__scopeId","data-v-c32f97b0"]]),nO={class:"username-container"},rO={key:0,class:"username-setup"},sO={class:"buttons"},iO={key:0,class:"error"},oO={key:1,class:"username-display"},aO={class:"username-display2"},lO={__name:"Userdata",setup(t){const e=ke(""),n=ke(""),r=ke(!1),s=ke("");ls(()=>{bl(rn,async c=>{if(c)try{console.log("Angemeldeter Nutzer:",c.uid);const h=await fo(Jn(Kt,"users",c.uid));h.exists()&&(e.value=h.data().username)}catch(h){console.error("Fehler beim Abrufen der Daten:",h),s.value="Fehler beim Laden."}else s.value="Bitte melde dich an!"})});async function i(){if(!n.value.trim()){s.value="Bitte gib einen gültigen Namen ein.";return}try{await Aw(Jn(Kt,"users",rn.currentUser.uid),{username:n.value},{merge:!0}),e.value=n.value,n.value="",r.value=!1}catch(c){console.error("Fehler beim Speichern des Namens:",c),s.value="Fehler beim Speichern."}}function o(){n.value=e.value,r.value=!0}function l(){r.value=!1,n.value=""}return(c,h)=>(ye(),Ae("div",nO,[!e.value||r.value?(ye(),Ae("div",rO,[h[1]||(h[1]=te("p",null,"Wähle einen Namen:",-1)),jn(te("input",{"onUpdate:modelValue":h[0]||(h[0]=d=>n.value=d),id:"username",placeholder:"Username"},null,512),[[vr,n.value]]),te("div",sO,[te("button",{onClick:i},"Speichern"),e.value?(ye(),Ae("button",{key:0,onClick:l,class:"cancel-btn"}," Abbrechen ")):Wn("",!0)]),s.value?(ye(),Ae("p",iO,ze(s.value),1)):Wn("",!0)])):(ye(),Ae("div",oO,[te("div",aO,[te("p",null,"Willkommen, "+ze(e.value)+"!",1),te("button",{onClick:o,class:"edit-btn"},"✏️")])]))]))}},cO=xn(lO,[["__scopeId","data-v-53b0214b"]]);async function uO(t,e){if(rn.currentUser)try{const n=await Cw(ho(Kt,"groups"),{name:t,ownerId:rn.currentUser.uid,members:[rn.currentUser.uid],codeword:e,createdAt:KP()});console.log("Gruppe erstellt mit ID:",n.id)}catch(n){console.error("Fehler beim Erstellen der Gruppe:",n)}}async function hO(t){const e=Bh(ho(Kt,"groups"),$h("members","array-contains",t));return(await Hh(e)).docs.map(r=>({id:r.id,...r.data()}))}async function dO(t){try{const e=ho(Kt,"groups"),n=Bh(e,$h("codeword","==",t)),r=await Hh(n);if(r.empty)return!1;const s=r.docs[0],i=s.id,o=rn.currentUser;if(!o)throw new Error("Kein angemeldeter Nutzer.");const l=Jn(Kt,"groups",i);return await zP(l,{members:[...s.data().members||[],o.uid]}),!0}catch(e){throw console.error("Fehler beim Gruppenbeitritt:",e),e}}async function fO(t){if(!t)return console.error("Fehler: Keine groupId erhalten."),null;try{const e=Jn(Kt,"groups",t),n=await fo(e);return n.exists()?{id:n.id,...n.data()}:(console.warn("Gruppe nicht gefunden:",t),null)}catch(e){return console.error("Fehler beim Laden der Gruppe:",e),null}}async function pO(t){const e=Jn(Kt,"groups",t);try{const n=await fo(e);if(!n.exists())return console.error("Gruppe existiert nicht!"),[];const i=(n.data().members||[]).map(async l=>{const c=Jn(Kt,"users",l),h=await fo(c);return h.exists()?{id:l,username:h.data().username}:null});return(await Promise.all(i)).filter(Boolean)}catch(n){return console.error("Fehler beim Abrufen der Gruppenmitglieder:",n),[]}}const mO={class:"groups-container"},gO={key:0,class:"groups-list"},_O={key:1,class:"no-groups"},yO={__name:"GroupOverview",setup(t){const e=ke([]);return ls(()=>{bl(rn,async n=>{n&&(e.value=await hO(n.uid))})}),(n,r)=>{const s=qu("router-link");return ye(),Ae("div",mO,[r[2]||(r[2]=te("h1",null,"Deine Gruppen",-1)),e.value.length>0?(ye(),Ae("div",gO,[(ye(!0),Ae(Ft,null,zu(e.value,i=>(ye(),ka(s,{key:i.id,to:`/group/${i.id}`,class:"group-card"},{default:Xi(()=>[te("h2",null,ze(i.name),1),te("p",null,ze(i.description),1)]),_:2},1032,["to"]))),128))])):(ye(),Ae("div",_O,[r[1]||(r[1]=te("p",null,"Du bist in keiner Gruppe.",-1)),We(s,{to:"/newgroups"},{default:Xi(()=>r[0]||(r[0]=[$s("Gruppe beitreten")])),_:1})]))])}}},wO=xn(yO,[["__scopeId","data-v-7f8ff4e9"]]),vO={__name:"HomeView",setup(t){return(e,n)=>(ye(),Ae(Ft,null,[We(cO,{class:"Userdata"}),We(wO,{class:"GroupOverview"})],64))}},EO=xn(vO,[["__scopeId","data-v-6fc3fbdc"]]),Lv=Jg("transactions",()=>{const t=ke([]);async function e(r,s){try{const i=await Cw(ho(Kt,"transactions"),{groupId:r,...s,createdAt:new Date});t.value.push({id:i.id,...s}),console.log("Transaktion gespeichert!")}catch(i){console.error("Fehler beim Speichern der Transaktion:",i)}}async function n(r){try{const s=Bh(ho(Kt,"transactions"),$h("groupId","==",r)),i=await Hh(s);t.value=i.docs.map(o=>({id:o.id,...o.data()}))}catch(s){console.error("Fehler beim Abrufen der Transaktionen:",s)}}return{transactions:t,addTransaction:e,fetchTransactions:n}});async function Mv(t){try{const e=await fo(Jn(Kt,"users",t));return e.exists()?e.data():(console.error("User not found!"),null)}catch(e){return console.error("Error getting user:",e),null}}const bO=["id","value"],TO=["for"],IO={__name:"TransactionForm2",props:{members:Array},setup(t){const e=t,n=Lv(),r=Kh(),s=ke(r.params.groupId),i=ke([]),o=ke(""),l=ke(""),c=ke("send"),h=ke([]);ls(async()=>{const m=e.members;for(let _ of m){const P=await Mv(_.id);_.username=P.username}h.value=m});const d=()=>{c.value=c.value==="send"?"receive":"send"},p=async()=>{if(i.value.length===0){alert("Bitte Empfänger auswählen!");return}const m={members:i.value,amount:o.value,comment:l.value,type:c.value};await n.addTransaction(s.value,m),alert("Transaktion gespeichert!")};return(m,_)=>(ye(),Ae("form",{onSubmit:Wg(p,["prevent"])},[_[3]||(_[3]=te("h2",null,"Neue Transaktion",-1)),_[4]||(_[4]=te("label",null,"Empfänger auswählen:",-1)),(ye(!0),Ae(Ft,null,zu(t.members,P=>(ye(),Ae("div",{key:P.id,class:"custom-checkbox"},[jn(te("input",{type:"checkbox",id:"member-"+P.id,"onUpdate:modelValue":_[0]||(_[0]=O=>i.value=O),value:P.id},null,8,bO),[[IT,i.value]]),$s(" "+ze(P.name)+" ",1),te("label",{for:"member-"+P.id},ze(P.username),9,TO)]))),128)),_[5]||(_[5]=te("label",null,"Betrag:",-1)),jn(te("input",{type:"number","onUpdate:modelValue":_[1]||(_[1]=P=>o.value=P),placeholder:"€ Betrag",required:""},null,512),[[vr,o.value]]),_[6]||(_[6]=te("label",null,"Kommentar:",-1)),jn(te("input",{type:"text","onUpdate:modelValue":_[2]||(_[2]=P=>l.value=P),placeholder:"Optional"},null,512),[[vr,l.value]]),te("button",{type:"button",onClick:d},ze(c.value==="send"?"🔄 Geld erhalten":"➡️ Geld senden"),1),_[7]||(_[7]=te("button",{type:"submit"},"Transaktion speichern",-1))],32))}},AO=xn(IO,[["__scopeId","data-v-c06a51cb"]]),CO={key:0},SO={key:1},RO={__name:"TransactionList",setup(t){const e=Lv(),r=Kh().params.groupId,s=xt(()=>e.transactions),i=ke({}),o=async l=>{console.log("🔄 Lade Mitgliedsnamen...");const c={};for(const h of l){const d=await Promise.all(h.members.map(async p=>{const m=await Mv(p);return m?m.username:"Unbekannt"}));c[h.id]=d}i.value=c,console.log("✅ Mitgliedsnamen geladen:",i.value)};return xs(s,l=>{l.length>0&&o(l)},{deep:!0,immediate:!0}),ls(async()=>{await e.fetchTransactions(r)}),(l,c)=>(ye(),Ae("div",null,[c[0]||(c[0]=te("h2",null,"Transaktionen",-1)),te("ul",null,[(ye(!0),Ae(Ft,null,zu(s.value,h=>(ye(),Ae("li",{key:h.id},[te("strong",null,ze(h.type==="send"?"➡️":"🔄"),1),$s(" "+ze(h.amount)+"€ an ",1),i.value[h.id]?(ye(),Ae("span",CO,ze(i.value[h.id].join(", ")),1)):Wn("",!0),h.comment?(ye(),Ae("em",SO,"("+ze(h.comment)+")",1)):Wn("",!0)]))),128))])]))}},PO={key:0,class:"group-view"},kO={key:1,class:"loading"},xO={key:0},OO={key:1},Lm={__name:"GroupView",setup(t){const e=Kh(),n=ke(null),r=ke(""),s=ke([]),i=ke(e.params.groupId);return ls(async()=>{s.value=await pO(i.value)}),Nb(async()=>{const o=e.params.groupId;if(!o){r.value="Fehler: Keine Gruppen-ID angegeben!";return}n.value=await fO(o),n.value||(r.value="Gruppe nicht gefunden!")}),(o,l)=>n.value?(ye(),Ae("div",PO,[te("h1",null,ze(n.value.name),1),te("p",null,ze(n.value.description),1),We(AO,{members:s.value},null,8,["members"]),We(RO)])):(ye(),Ae("div",kO,[r.value?(ye(),Ae("p",xO,ze(r.value),1)):(ye(),Ae("p",OO,"Lädt..."))]))}},DO="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2064%2064'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--emojione-monotone'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cpath%20d='M61.971%2042.634c-.632-6.334-2.045-11.643-2.358-25.352c-.223-9.706-12.006-10.453-15.069-7.164c-3.471-4.255-12.762-4.354-16.229.94c-2.693-1.48-9.901-1.799-12.879%201.873c0%200-8.835-1.411-12.836%2013.321c-1.437%205.289.12%2012.302.41%2013.756c2.023%2010.147%2010.502%208.19%2012.209%207.2c2.892%207.44%2010.375%206.101%2013.385%203.913c.174%204.414%203.771%206.535%206.065%205.699c6.722-2.451%2012.33-2.783%2016.764-2.607c2.127.083%203.797-.938%204.741-2.779c3.325-1.733%206.148-5.279%205.797-8.8m-15.525.998c1.008-5.798-1.179-14.392-.4-20.936c-3.16%204.926-.82%2018.871-2.146%2024.525c-1.085%204.62-9.646%203.175-12.294-2.375c-.918-8.487.424-13.407-1.889-22.15c.218%2010.57-1.415%2012.539-.325%2022.813c-2.524%202.592-11.239.768-11.679-3.621c-.587-5.858.628-10.459-1.099-16.139c0%205.369-1.062%208.233-.541%2016.18c.003.049-1.556%201.24-3.869%201.24c-9.471%200-8.646-14.027-7.087-18.926c2.256-7.098%208.207-11.233%2011.281-9.611c1.527-3.561%2010.239-3.875%2011.74-.539c1.296-6.143%2013.705-5.645%2017.005-.166c2.214-4.44%2012.358-3.112%2012.464%203.388c.235%2014.059%202.284%2020.641%202.203%2026.796c-3.471%204.281-9.605%203.902-13.364-.479'%20fill='%23000000'%3e%3c/path%3e%3c/svg%3e",VO={class:"logo-container"},NO={__name:"LoginView",setup(t){return(e,n)=>(ye(),Ae("div",VO,n[0]||(n[0]=[te("img",{class:"logo",src:DO,alt:"logo"},null,-1)])))}},LO=xn(NO,[["__scopeId","data-v-6335875f"]]),MO={class:"container"},FO={key:0,class:"success"},UO={key:1,class:"error"},BO={__name:"CreateGroup",setup(t){const e=ke(""),n=ke(""),r=ke(""),s=async()=>{if(!e.value.trim()){r.value="Bitte einen Gruppennamen eingeben.";return}try{await uO(e.value,e.value),n.value="Gruppe erfolgreich erstellt!",e.value="",r.value=""}catch(i){r.value="Fehler beim Erstellen der Gruppe.",console.error(i)}};return(i,o)=>(ye(),Ae("div",MO,[o[1]||(o[1]=te("h2",null,"Neue Gruppe erstellen",-1)),jn(te("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),name:"groupName",type:"text",placeholder:"Gruppenname"},null,512),[[vr,e.value]]),te("button",{onClick:s},"Erstellen"),n.value?(ye(),Ae("p",FO,ze(n.value),1)):Wn("",!0),r.value?(ye(),Ae("p",UO,ze(r.value),1)):Wn("",!0)]))}},$O=xn(BO,[["__scopeId","data-v-df4181b4"]]),jO={class:"container"},HO={key:0,class:"success"},qO={key:1,class:"error"},zO={__name:"JoinGroup",setup(t){const e=ke(""),n=ke(""),r=ke(""),s=async()=>{if(!e.value.trim()){r.value="Bitte ein Codewort eingeben.";return}try{await dO(e.value)?(n.value="Du bist der Gruppe erfolgreich beigetreten!",r.value=""):(r.value="Ungültiges Codewort.",n.value="")}catch(i){console.error("Fehler beim Beitreten:",i),r.value="Fehler beim Beitritt.",n.value=""}};return(i,o)=>(ye(),Ae("div",jO,[o[1]||(o[1]=te("h2",null,"Gruppe beitreten",-1)),jn(te("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),name:"codeword",placeholder:"Codewort eingeben"},null,512),[[vr,e.value]]),te("button",{onClick:s},"Beitreten"),n.value?(ye(),Ae("p",HO,ze(n.value),1)):Wn("",!0),r.value?(ye(),Ae("p",qO,ze(r.value),1)):Wn("",!0)]))}},WO=xn(zO,[["__scopeId","data-v-d565c1b9"]]),KO={__name:"NewGroupsView",setup(t){return(e,n)=>(ye(),Ae(Ft,null,[We($O),We(WO)],64))}},GO=[{path:"/",name:"login",component:LO},{path:"/home",name:"home",component:EO},{path:"/group",name:"groupview",component:Lm},{path:"/group/:groupId",name:"GroupView",component:Lm,props:!0},{path:"/newgroups",name:"newgroups",component:KO}],QO=Y2({history:A2("/Website/"),routes:GO});kT(tO).use(QO).use(DT()).mount("#app");

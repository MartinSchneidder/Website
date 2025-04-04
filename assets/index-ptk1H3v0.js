(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ku(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Le={},Rs=[],In=()=>{},cE=()=>!1,ll=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),xu=t=>t.startsWith("onUpdate:"),It=Object.assign,Du=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},uE=Object.prototype.hasOwnProperty,Oe=(t,e)=>uE.call(t,e),le=Array.isArray,Ps=t=>yo(t)==="[object Map]",cl=t=>yo(t)==="[object Set]",tf=t=>yo(t)==="[object Date]",me=t=>typeof t=="function",tt=t=>typeof t=="string",Pn=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",Fm=t=>(Ue(t)||me(t))&&me(t.then)&&me(t.catch),Um=Object.prototype.toString,yo=t=>Um.call(t),hE=t=>yo(t).slice(8,-1),Bm=t=>yo(t)==="[object Object]",Ou=t=>tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Li=ku(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ul=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dE=/-(\w)/g,on=ul(t=>t.replace(dE,(e,n)=>n?n.toUpperCase():"")),fE=/\B([A-Z])/g,as=ul(t=>t.replace(fE,"-$1").toLowerCase()),hl=ul(t=>t.charAt(0).toUpperCase()+t.slice(1)),fc=ul(t=>t?`on${hl(t)}`:""),yr=(t,e)=>!Object.is(t,e),ha=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$m=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Bc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nf;const dl=()=>nf||(nf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vu(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=tt(r)?_E(r):Vu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(tt(t)||Ue(t))return t}const pE=/;(?![^(]*\))/g,mE=/:([^]+)/,gE=/\/\*[^]*?\*\//g;function _E(t){const e={};return t.replace(gE,"").split(pE).forEach(n=>{if(n){const r=n.split(mE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function en(t){let e="";if(tt(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=en(t[n]);r&&(e+=r+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const yE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wE=ku(yE);function jm(t){return!!t||t===""}function vE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=fl(t[r],e[r]);return n}function fl(t,e){if(t===e)return!0;let n=tf(t),r=tf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Pn(t),r=Pn(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?vE(t,e):!1;if(n=Ue(t),r=Ue(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!fl(t[o],e[o]))return!1}}return String(t)===String(e)}function Hm(t,e){return t.findIndex(n=>fl(n,e))}const qm=t=>!!(t&&t.__v_isRef===!0),He=t=>tt(t)?t:t==null?"":le(t)||Ue(t)&&(t.toString===Um||!me(t.toString))?qm(t)?He(t.value):JSON.stringify(t,zm,2):String(t),zm=(t,e)=>qm(e)?zm(t,e.value):Ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[pc(r,i)+" =>"]=s,n),{})}:cl(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>pc(n))}:Pn(e)?pc(e):Ue(e)&&!le(e)&&!Bm(e)?String(e):e,pc=(t,e="")=>{var n;return Pn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pt;class Wm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Km(t){return new Wm(t)}function Gm(){return Pt}function EE(t,e=!1){Pt&&Pt.cleanups.push(t)}let Fe;const mc=new WeakSet;class Qm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pt&&Pt.active&&Pt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,mc.has(this)&&(mc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rf(this),Xm(this);const e=Fe,n=hn;Fe=this,hn=!0;try{return this.fn()}finally{Zm(this),Fe=e,hn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Mu(e);this.deps=this.depsTail=void 0,rf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?mc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$c(this)&&this.run()}get dirty(){return $c(this)}}let Ym=0,Mi,Fi;function Jm(t,e=!1){if(t.flags|=8,e){t.next=Fi,Fi=t;return}t.next=Mi,Mi=t}function Nu(){Ym++}function Lu(){if(--Ym>0)return;if(Fi){let e=Fi;for(Fi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Mi;){let e=Mi;for(Mi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Xm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Mu(r),bE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function $c(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(eg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function eg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Yi))return;t.globalVersion=Yi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!$c(t)){t.flags&=-3;return}const n=Fe,r=hn;Fe=t,hn=!0;try{Xm(t);const s=t.fn(t._value);(e.version===0||yr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Fe=n,hn=r,Zm(t),t.flags&=-3}}function Mu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Mu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function bE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let hn=!0;const tg=[];function Dr(){tg.push(hn),hn=!1}function Or(){const t=tg.pop();hn=t===void 0?!0:t}function rf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Fe;Fe=void 0;try{e()}finally{Fe=n}}}let Yi=0;class TE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Fe||!hn||Fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Fe)n=this.activeLink=new TE(Fe,this),Fe.deps?(n.prevDep=Fe.depsTail,Fe.depsTail.nextDep=n,Fe.depsTail=n):Fe.deps=Fe.depsTail=n,ng(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Fe.depsTail,n.nextDep=void 0,Fe.depsTail.nextDep=n,Fe.depsTail=n,Fe.deps===n&&(Fe.deps=r)}return n}trigger(e){this.version++,Yi++,this.notify(e)}notify(e){Nu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Lu()}}}function ng(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ng(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Aa=new WeakMap,Qr=Symbol(""),jc=Symbol(""),Ji=Symbol("");function Et(t,e,n){if(hn&&Fe){let r=Aa.get(t);r||Aa.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Fu),s.map=r,s.key=n),s.track()}}function Un(t,e,n,r,s,i){const o=Aa.get(t);if(!o){Yi++;return}const l=c=>{c&&c.trigger()};if(Nu(),e==="clear")o.forEach(l);else{const c=le(t),h=c&&Ou(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===Ji||!Pn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(Ji)),e){case"add":c?h&&l(o.get("length")):(l(o.get(Qr)),Ps(t)&&l(o.get(jc)));break;case"delete":c||(l(o.get(Qr)),Ps(t)&&l(o.get(jc)));break;case"set":Ps(t)&&l(o.get(Qr));break}}Lu()}function IE(t,e){const n=Aa.get(t);return n&&n.get(e)}function ws(t){const e=Pe(t);return e===t?e:(Et(e,"iterate",Ji),nn(t)?e:e.map(bt))}function pl(t){return Et(t=Pe(t),"iterate",Ji),t}const AE={__proto__:null,[Symbol.iterator](){return gc(this,Symbol.iterator,bt)},concat(...t){return ws(this).concat(...t.map(e=>le(e)?ws(e):e))},entries(){return gc(this,"entries",t=>(t[1]=bt(t[1]),t))},every(t,e){return Ln(this,"every",t,e,void 0,arguments)},filter(t,e){return Ln(this,"filter",t,e,n=>n.map(bt),arguments)},find(t,e){return Ln(this,"find",t,e,bt,arguments)},findIndex(t,e){return Ln(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ln(this,"findLast",t,e,bt,arguments)},findLastIndex(t,e){return Ln(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ln(this,"forEach",t,e,void 0,arguments)},includes(...t){return _c(this,"includes",t)},indexOf(...t){return _c(this,"indexOf",t)},join(t){return ws(this).join(t)},lastIndexOf(...t){return _c(this,"lastIndexOf",t)},map(t,e){return Ln(this,"map",t,e,void 0,arguments)},pop(){return Ci(this,"pop")},push(...t){return Ci(this,"push",t)},reduce(t,...e){return sf(this,"reduce",t,e)},reduceRight(t,...e){return sf(this,"reduceRight",t,e)},shift(){return Ci(this,"shift")},some(t,e){return Ln(this,"some",t,e,void 0,arguments)},splice(...t){return Ci(this,"splice",t)},toReversed(){return ws(this).toReversed()},toSorted(t){return ws(this).toSorted(t)},toSpliced(...t){return ws(this).toSpliced(...t)},unshift(...t){return Ci(this,"unshift",t)},values(){return gc(this,"values",bt)}};function gc(t,e,n){const r=pl(t),s=r[e]();return r!==t&&!nn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const CE=Array.prototype;function Ln(t,e,n,r,s,i){const o=pl(t),l=o!==t&&!nn(t),c=o[e];if(c!==CE[e]){const p=c.apply(t,i);return l?bt(p):p}let h=n;o!==t&&(l?h=function(p,m){return n.call(this,bt(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,h,r);return l&&s?s(d):d}function sf(t,e,n,r){const s=pl(t);let i=n;return s!==t&&(nn(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,bt(l),c,t)}),s[e](i,...r)}function _c(t,e,n){const r=Pe(t);Et(r,"iterate",Ji);const s=r[e](...n);return(s===-1||s===!1)&&$u(n[0])?(n[0]=Pe(n[0]),r[e](...n)):s}function Ci(t,e,n=[]){Dr(),Nu();const r=Pe(t)[e].apply(t,n);return Lu(),Or(),r}const SE=ku("__proto__,__v_isRef,__isVue"),rg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pn));function RE(t){Pn(t)||(t=String(t));const e=Pe(this);return Et(e,"has",t),e.hasOwnProperty(t)}class sg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?FE:lg:i?ag:og).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let c;if(o&&(c=AE[n]))return c;if(n==="hasOwnProperty")return RE}const l=Reflect.get(e,n,Je(e)?e:r);return(Pn(n)?rg.has(n):SE(n))||(s||Et(e,"get",n),i)?l:Je(l)?o&&Ou(n)?l:l.value:Ue(l)?s?ug(l):wo(l):l}}class ig extends sg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Xr(i);if(!nn(r)&&!Xr(r)&&(i=Pe(i),r=Pe(r)),!le(e)&&Je(i)&&!Je(r))return c?!1:(i.value=r,!0)}const o=le(e)&&Ou(n)?Number(n)<e.length:Oe(e,n),l=Reflect.set(e,n,r,Je(e)?e:s);return e===Pe(s)&&(o?yr(r,i)&&Un(e,"set",n,r):Un(e,"add",n,r)),l}deleteProperty(e,n){const r=Oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Un(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Pn(n)||!rg.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",le(e)?"length":Qr),Reflect.ownKeys(e)}}class PE extends sg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const kE=new ig,xE=new PE,DE=new ig(!0);const Hc=t=>t,ta=t=>Reflect.getPrototypeOf(t);function OE(t,e,n){return function(...r){const s=this.__v_raw,i=Pe(s),o=Ps(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),d=n?Hc:e?qc:bt;return!e&&Et(i,"iterate",c?jc:Qr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function na(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function VE(t,e){const n={get(s){const i=this.__v_raw,o=Pe(i),l=Pe(s);t||(yr(s,l)&&Et(o,"get",s),Et(o,"get",l));const{has:c}=ta(o),h=e?Hc:t?qc:bt;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Et(Pe(s),"iterate",Qr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Pe(i),l=Pe(s);return t||(yr(s,l)&&Et(o,"has",s),Et(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Pe(l),h=e?Hc:t?qc:bt;return!t&&Et(c,"iterate",Qr),l.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return It(n,t?{add:na("add"),set:na("set"),delete:na("delete"),clear:na("clear")}:{add(s){!e&&!nn(s)&&!Xr(s)&&(s=Pe(s));const i=Pe(this);return ta(i).has.call(i,s)||(i.add(s),Un(i,"add",s,s)),this},set(s,i){!e&&!nn(i)&&!Xr(i)&&(i=Pe(i));const o=Pe(this),{has:l,get:c}=ta(o);let h=l.call(o,s);h||(s=Pe(s),h=l.call(o,s));const d=c.call(o,s);return o.set(s,i),h?yr(i,d)&&Un(o,"set",s,i):Un(o,"add",s,i),this},delete(s){const i=Pe(this),{has:o,get:l}=ta(i);let c=o.call(i,s);c||(s=Pe(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&Un(i,"delete",s,void 0),h},clear(){const s=Pe(this),i=s.size!==0,o=s.clear();return i&&Un(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=OE(s,t,e)}),n}function Uu(t,e){const n=VE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Oe(n,s)&&s in r?n:r,s,i)}const NE={get:Uu(!1,!1)},LE={get:Uu(!1,!0)},ME={get:Uu(!0,!1)};const og=new WeakMap,ag=new WeakMap,lg=new WeakMap,FE=new WeakMap;function UE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function BE(t){return t.__v_skip||!Object.isExtensible(t)?0:UE(hE(t))}function wo(t){return Xr(t)?t:Bu(t,!1,kE,NE,og)}function cg(t){return Bu(t,!1,DE,LE,ag)}function ug(t){return Bu(t,!0,xE,ME,lg)}function Bu(t,e,n,r,s){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=BE(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function wr(t){return Xr(t)?wr(t.__v_raw):!!(t&&t.__v_isReactive)}function Xr(t){return!!(t&&t.__v_isReadonly)}function nn(t){return!!(t&&t.__v_isShallow)}function $u(t){return t?!!t.__v_raw:!1}function Pe(t){const e=t&&t.__v_raw;return e?Pe(e):t}function ju(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&$m(t,"__v_skip",!0),t}const bt=t=>Ue(t)?wo(t):t,qc=t=>Ue(t)?ug(t):t;function Je(t){return t?t.__v_isRef===!0:!1}function ke(t){return hg(t,!1)}function $E(t){return hg(t,!0)}function hg(t,e){return Je(t)?t:new jE(t,e)}class jE{constructor(e,n){this.dep=new Fu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Pe(e),this._value=n?e:bt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||nn(e)||Xr(e);e=r?e:Pe(e),yr(e,n)&&(this._rawValue=e,this._value=r?e:bt(e),this.dep.trigger())}}function ks(t){return Je(t)?t.value:t}const HE={get:(t,e,n)=>e==="__v_raw"?t:ks(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Je(s)&&!Je(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function dg(t){return wr(t)?t:new Proxy(t,HE)}function qE(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=WE(t,n);return e}class zE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return IE(Pe(this._object),this._key)}}function WE(t,e,n){const r=t[e];return Je(r)?r:new zE(t,e,n)}class KE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Fu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Fe!==this)return Jm(this,!0),!0}get value(){const e=this.dep.track();return eg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function GE(t,e,n=!1){let r,s;return me(t)?r=t:(r=t.get,s=t.set),new KE(r,s,n)}const ra={},Ca=new WeakMap;let zr;function QE(t,e=!1,n=zr){if(n){let r=Ca.get(n);r||Ca.set(n,r=[]),r.push(t)}}function YE(t,e,n=Le){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=z=>s?z:nn(z)||s===!1||s===0?Bn(z,1):Bn(z);let d,p,m,y,P=!1,k=!1;if(Je(t)?(p=()=>t.value,P=nn(t)):wr(t)?(p=()=>h(t),P=!0):le(t)?(k=!0,P=t.some(z=>wr(z)||nn(z)),p=()=>t.map(z=>{if(Je(z))return z.value;if(wr(z))return h(z);if(me(z))return c?c(z,2):z()})):me(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Dr();try{m()}finally{Or()}}const z=zr;zr=d;try{return c?c(t,3,[y]):t(y)}finally{zr=z}}:p=In,e&&s){const z=p,ie=s===!0?1/0:s;p=()=>Bn(z(),ie)}const O=Gm(),j=()=>{d.stop(),O&&O.active&&Du(O.effects,d)};if(i&&e){const z=e;e=(...ie)=>{z(...ie),j()}}let $=k?new Array(t.length).fill(ra):ra;const H=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const ie=d.run();if(s||P||(k?ie.some((ye,I)=>yr(ye,$[I])):yr(ie,$))){m&&m();const ye=zr;zr=d;try{const I=[ie,$===ra?void 0:k&&$[0]===ra?[]:$,y];c?c(e,3,I):e(...I),$=ie}finally{zr=ye}}}else d.run()};return l&&l(H),d=new Qm(p),d.scheduler=o?()=>o(H,!1):H,y=z=>QE(z,!1,d),m=d.onStop=()=>{const z=Ca.get(d);if(z){if(c)c(z,4);else for(const ie of z)ie();Ca.delete(d)}},e?r?H(!0):$=d.run():o?o(H.bind(null,!0),!0):d.run(),j.pause=d.pause.bind(d),j.resume=d.resume.bind(d),j.stop=j,j}function Bn(t,e=1/0,n){if(e<=0||!Ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Je(t))Bn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)Bn(t[r],e,n);else if(cl(t)||Ps(t))t.forEach(r=>{Bn(r,e,n)});else if(Bm(t)){for(const r in t)Bn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Bn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vo(t,e,n,r){try{return r?t(...r):t()}catch(s){ml(s,e,n)}}function kn(t,e,n,r){if(me(t)){const s=vo(t,e,n,r);return s&&Fm(s)&&s.catch(i=>{ml(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(kn(t[i],e,n,r));return s}}function ml(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Le;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){Dr(),vo(i,null,10,[t,c,h]),Or();return}}JE(t,n,s,r,o)}function JE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const kt=[];let vn=-1;const xs=[];let lr=null,Es=0;const fg=Promise.resolve();let Sa=null;function Hu(t){const e=Sa||fg;return t?e.then(this?t.bind(this):t):e}function XE(t){let e=vn+1,n=kt.length;for(;e<n;){const r=e+n>>>1,s=kt[r],i=Xi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function qu(t){if(!(t.flags&1)){const e=Xi(t),n=kt[kt.length-1];!n||!(t.flags&2)&&e>=Xi(n)?kt.push(t):kt.splice(XE(e),0,t),t.flags|=1,pg()}}function pg(){Sa||(Sa=fg.then(gg))}function ZE(t){le(t)?xs.push(...t):lr&&t.id===-1?lr.splice(Es+1,0,t):t.flags&1||(xs.push(t),t.flags|=1),pg()}function of(t,e,n=vn+1){for(;n<kt.length;n++){const r=kt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;kt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function mg(t){if(xs.length){const e=[...new Set(xs)].sort((n,r)=>Xi(n)-Xi(r));if(xs.length=0,lr){lr.push(...e);return}for(lr=e,Es=0;Es<lr.length;Es++){const n=lr[Es];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}lr=null,Es=0}}const Xi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function gg(t){try{for(vn=0;vn<kt.length;vn++){const e=kt[vn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;vn<kt.length;vn++){const e=kt[vn];e&&(e.flags&=-2)}vn=-1,kt.length=0,mg(),Sa=null,(kt.length||xs.length)&&gg()}}let Bt=null,_g=null;function Ra(t){const e=Bt;return Bt=t,_g=t&&t.type.__scopeId||null,e}function Zi(t,e=Bt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&gf(-1);const i=Ra(e);let o;try{o=t(...s)}finally{Ra(i),r._d&&gf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function qn(t,e){if(Bt===null)return t;const n=wl(Bt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Le]=e[s];i&&(me(i)&&(i={mounted:i,updated:i}),i.deep&&Bn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function jr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Dr(),kn(c,n,8,[t.el,l,t,e]),Or())}}const eb=Symbol("_vte"),tb=t=>t.__isTeleport;function zu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,zu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function yg(t,e){return me(t)?It({name:t.name},e,{setup:t}):t}function wg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Pa(t,e,n,r,s=!1){if(le(t)){t.forEach((P,k)=>Pa(P,e&&(le(e)?e[k]:e),n,r,s));return}if(Ui(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Pa(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?wl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Le?l.refs={}:l.refs,p=l.setupState,m=Pe(p),y=p===Le?()=>!1:P=>Oe(m,P);if(h!=null&&h!==c&&(tt(h)?(d[h]=null,y(h)&&(p[h]=null)):Je(h)&&(h.value=null)),me(c))vo(c,l,12,[o,d]);else{const P=tt(c),k=Je(c);if(P||k){const O=()=>{if(t.f){const j=P?y(c)?p[c]:d[c]:c.value;s?le(j)&&Du(j,i):le(j)?j.includes(i)||j.push(i):P?(d[c]=[i],y(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else P?(d[c]=o,y(c)&&(p[c]=o)):k&&(c.value=o,t.k&&(d[t.k]=o))};o?(O.id=-1,qt(O,n)):O()}}}dl().requestIdleCallback;dl().cancelIdleCallback;const Ui=t=>!!t.type.__asyncLoader,vg=t=>t.type.__isKeepAlive;function nb(t,e){Eg(t,"a",e)}function rb(t,e){Eg(t,"da",e)}function Eg(t,e,n=dt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(gl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)vg(s.parent.vnode)&&sb(r,e,n,s),s=s.parent}}function sb(t,e,n,r){const s=gl(e,t,r,!0);bg(()=>{Du(r[e],s)},n)}function gl(t,e,n=dt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Dr();const l=Eo(n),c=kn(e,n,t,o);return l(),Or(),c});return r?s.unshift(i):s.push(i),i}}const Xn=t=>(e,n=dt)=>{(!to||t==="sp")&&gl(t,(...r)=>e(...r),n)},ib=Xn("bm"),ls=Xn("m"),ob=Xn("bu"),ab=Xn("u"),lb=Xn("bum"),bg=Xn("um"),cb=Xn("sp"),ub=Xn("rtg"),hb=Xn("rtc");function db(t,e=dt){gl("ec",t,e)}const fb="components";function Wu(t,e){return mb(fb,t,!0,e)||t}const pb=Symbol.for("v-ndc");function mb(t,e,n=!0,r=!1){const s=Bt||dt;if(s){const i=s.type;{const l=rT(i,!1);if(l&&(l===e||l===on(e)||l===hl(on(e))))return i}const o=af(s[t]||i[t],e)||af(s.appContext[t],e);return!o&&r?i:o}}function af(t,e){return t&&(t[e]||t[on(e)]||t[hl(on(e))])}function ka(t,e,n,r){let s;const i=n,o=le(t);if(o||tt(t)){const l=o&&wr(t);let c=!1;l&&(c=!nn(t),t=pl(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(c?bt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ue(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const zc=t=>t?jg(t)?wl(t):zc(t.parent):null,Bi=It(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zc(t.parent),$root:t=>zc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ig(t),$forceUpdate:t=>t.f||(t.f=()=>{qu(t.update)}),$nextTick:t=>t.n||(t.n=Hu.bind(t.proxy)),$watch:t=>Fb.bind(t)}),yc=(t,e)=>t!==Le&&!t.__isScriptSetup&&Oe(t,e),gb={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(yc(r,e))return o[e]=1,r[e];if(s!==Le&&Oe(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Oe(h,e))return o[e]=3,i[e];if(n!==Le&&Oe(n,e))return o[e]=4,n[e];Wc&&(o[e]=0)}}const d=Bi[e];let p,m;if(d)return e==="$attrs"&&Et(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Le&&Oe(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Oe(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return yc(s,e)?(s[e]=n,!0):r!==Le&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Le&&Oe(t,o)||yc(e,o)||(l=i[0])&&Oe(l,o)||Oe(r,o)||Oe(Bi,o)||Oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function lf(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Wc=!0;function _b(t){const e=Ig(t),n=t.proxy,r=t.ctx;Wc=!1,e.beforeCreate&&cf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:y,updated:P,activated:k,deactivated:O,beforeDestroy:j,beforeUnmount:$,destroyed:H,unmounted:z,render:ie,renderTracked:ye,renderTriggered:I,errorCaptured:_,serverPrefetch:w,expose:T,inheritAttrs:A,components:C,directives:E,filters:at}=e;if(h&&yb(h,r,null),o)for(const de in o){const ve=o[de];me(ve)&&(r[de]=ve.bind(n))}if(s){const de=s.call(n,n);Ue(de)&&(t.data=wo(de))}if(Wc=!0,i)for(const de in i){const ve=i[de],jt=me(ve)?ve.bind(n,n):me(ve.get)?ve.get.bind(n,n):In,ln=!me(ve)&&me(ve.set)?ve.set.bind(n):In,Jt=Dt({get:jt,set:ln});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>Jt.value,set:qe=>Jt.value=qe})}if(l)for(const de in l)Tg(l[de],r,n,de);if(c){const de=me(c)?c.call(n):c;Reflect.ownKeys(de).forEach(ve=>{da(ve,de[ve])})}d&&cf(d,t,"c");function Me(de,ve){le(ve)?ve.forEach(jt=>de(jt.bind(n))):ve&&de(ve.bind(n))}if(Me(ib,p),Me(ls,m),Me(ob,y),Me(ab,P),Me(nb,k),Me(rb,O),Me(db,_),Me(hb,ye),Me(ub,I),Me(lb,$),Me(bg,z),Me(cb,w),le(T))if(T.length){const de=t.exposed||(t.exposed={});T.forEach(ve=>{Object.defineProperty(de,ve,{get:()=>n[ve],set:jt=>n[ve]=jt})})}else t.exposed||(t.exposed={});ie&&t.render===In&&(t.render=ie),A!=null&&(t.inheritAttrs=A),C&&(t.components=C),E&&(t.directives=E),w&&wg(t)}function yb(t,e,n=In){le(t)&&(t=Kc(t));for(const r in t){const s=t[r];let i;Ue(s)?"default"in s?i=rn(s.from||r,s.default,!0):i=rn(s.from||r):i=rn(s),Je(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function cf(t,e,n){kn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Tg(t,e,n,r){let s=r.includes(".")?Mg(n,r):()=>n[r];if(tt(t)){const i=e[t];me(i)&&Ds(s,i)}else if(me(t))Ds(s,t.bind(n));else if(Ue(t))if(le(t))t.forEach(i=>Tg(i,e,n,r));else{const i=me(t.handler)?t.handler.bind(n):e[t.handler];me(i)&&Ds(s,i,t)}}function Ig(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>xa(c,h,o,!0)),xa(c,e,o)),Ue(e)&&i.set(e,c),c}function xa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&xa(t,i,n,!0),s&&s.forEach(o=>xa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=wb[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const wb={data:uf,props:hf,emits:hf,methods:Pi,computed:Pi,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Pi,directives:Pi,watch:Eb,provide:uf,inject:vb};function uf(t,e){return e?t?function(){return It(me(t)?t.call(this,this):t,me(e)?e.call(this,this):e)}:e:t}function vb(t,e){return Pi(Kc(t),Kc(e))}function Kc(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function Pi(t,e){return t?It(Object.create(null),t,e):e}function hf(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:It(Object.create(null),lf(t),lf(e??{})):e}function Eb(t,e){if(!t)return e;if(!e)return t;const n=It(Object.create(null),t);for(const r in e)n[r]=Rt(t[r],e[r]);return n}function Ag(){return{app:null,config:{isNativeTag:cE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bb=0;function Tb(t,e){return function(r,s=null){me(r)||(r=It({},r)),s!=null&&!Ue(s)&&(s=null);const i=Ag(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:bb++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:iT,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&me(d.install)?(o.add(d),d.install(h,...p)):me(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!c){const y=h._ceVNode||We(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(y,d,m),c=!0,h._container=d,d.__vue_app__=h,wl(y.component)}},onUnmount(d){l.push(d)},unmount(){c&&(kn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Yr;Yr=h;try{return d()}finally{Yr=p}}};return h}}let Yr=null;function da(t,e){if(dt){let n=dt.provides;const r=dt.parent&&dt.parent.provides;r===n&&(n=dt.provides=Object.create(r)),n[t]=e}}function rn(t,e,n=!1){const r=dt||Bt;if(r||Yr){const s=Yr?Yr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&me(e)?e.call(r&&r.proxy):e}}function Ib(){return!!(dt||Bt||Yr)}const Cg={},Sg=()=>Object.create(Cg),Rg=t=>Object.getPrototypeOf(t)===Cg;function Ab(t,e,n,r=!1){const s={},i=Sg();t.propsDefaults=Object.create(null),Pg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:cg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Cb(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Pe(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(_l(t.emitsOptions,m))continue;const y=e[m];if(c)if(Oe(i,m))y!==i[m]&&(i[m]=y,h=!0);else{const P=on(m);s[P]=Gc(c,l,P,y,t,!1)}else y!==i[m]&&(i[m]=y,h=!0)}}}else{Pg(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Oe(e,p)&&((d=as(p))===p||!Oe(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Gc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Oe(e,p))&&(delete i[p],h=!0)}h&&Un(t.attrs,"set","")}function Pg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Li(c))continue;const h=e[c];let d;s&&Oe(s,d=on(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:_l(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=Pe(n),h=l||Le;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Gc(s,c,p,h[p],t,!Oe(h,p))}}return o}function Gc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Oe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&me(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Eo(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===as(n))&&(r=!0))}return r}const Sb=new WeakMap;function kg(t,e,n=!1){const r=n?Sb:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!me(t)){const d=p=>{c=!0;const[m,y]=kg(p,e,!0);It(o,m),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Ue(t)&&r.set(t,Rs),Rs;if(le(i))for(let d=0;d<i.length;d++){const p=on(i[d]);df(p)&&(o[p]=Le)}else if(i)for(const d in i){const p=on(d);if(df(p)){const m=i[d],y=o[p]=le(m)||me(m)?{type:m}:It({},m),P=y.type;let k=!1,O=!0;if(le(P))for(let j=0;j<P.length;++j){const $=P[j],H=me($)&&$.name;if(H==="Boolean"){k=!0;break}else H==="String"&&(O=!1)}else k=me(P)&&P.name==="Boolean";y[0]=k,y[1]=O,(k||Oe(y,"default"))&&l.push(p)}}const h=[o,l];return Ue(t)&&r.set(t,h),h}function df(t){return t[0]!=="$"&&!Li(t)}const xg=t=>t[0]==="_"||t==="$stable",Ku=t=>le(t)?t.map(Tn):[Tn(t)],Rb=(t,e,n)=>{if(e._n)return e;const r=Zi((...s)=>Ku(e(...s)),n);return r._c=!1,r},Dg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(xg(s))continue;const i=t[s];if(me(i))e[s]=Rb(s,i,r);else if(i!=null){const o=Ku(i);e[s]=()=>o}}},Og=(t,e)=>{const n=Ku(e);t.slots.default=()=>n},Vg=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Pb=(t,e,n)=>{const r=t.slots=Sg();if(t.vnode.shapeFlag&32){const s=e._;s?(Vg(r,e,n),n&&$m(r,"_",s,!0)):Dg(e,r)}else e&&Og(t,e)},kb=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Le;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Vg(s,e,n):(i=!e.$stable,Dg(e,s)),o=e}else e&&(Og(t,e),o={default:1});if(i)for(const l in s)!xg(l)&&o[l]==null&&delete s[l]},qt=zb;function xb(t){return Db(t)}function Db(t,e){const n=dl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:y=In,insertStaticContent:P}=t,k=(v,b,S,N=null,U=null,M=null,G=void 0,W=null,q=!!b.dynamicChildren)=>{if(v===b)return;v&&!Si(v,b)&&(N=V(v),qe(v,U,M,!0),v=null),b.patchFlag===-2&&(q=!1,b.dynamicChildren=null);const{type:B,ref:oe,shapeFlag:Y}=b;switch(B){case yl:O(v,b,S,N);break;case Zr:j(v,b,S,N);break;case vc:v==null&&$(b,S,N,G);break;case xt:C(v,b,S,N,U,M,G,W,q);break;default:Y&1?ie(v,b,S,N,U,M,G,W,q):Y&6?E(v,b,S,N,U,M,G,W,q):(Y&64||Y&128)&&B.process(v,b,S,N,U,M,G,W,q,te)}oe!=null&&U&&Pa(oe,v&&v.ref,M,b||v,!b)},O=(v,b,S,N)=>{if(v==null)r(b.el=l(b.children),S,N);else{const U=b.el=v.el;b.children!==v.children&&h(U,b.children)}},j=(v,b,S,N)=>{v==null?r(b.el=c(b.children||""),S,N):b.el=v.el},$=(v,b,S,N)=>{[v.el,v.anchor]=P(v.children,b,S,N,v.el,v.anchor)},H=({el:v,anchor:b},S,N)=>{let U;for(;v&&v!==b;)U=m(v),r(v,S,N),v=U;r(b,S,N)},z=({el:v,anchor:b})=>{let S;for(;v&&v!==b;)S=m(v),s(v),v=S;s(b)},ie=(v,b,S,N,U,M,G,W,q)=>{b.type==="svg"?G="svg":b.type==="math"&&(G="mathml"),v==null?ye(b,S,N,U,M,G,W,q):w(v,b,U,M,G,W,q)},ye=(v,b,S,N,U,M,G,W)=>{let q,B;const{props:oe,shapeFlag:Y,transition:ne,dirs:ue}=v;if(q=v.el=o(v.type,M,oe&&oe.is,oe),Y&8?d(q,v.children):Y&16&&_(v.children,q,null,N,U,wc(v,M),G,W),ue&&jr(v,null,N,"created"),I(q,v,v.scopeId,G,N),oe){for(const ge in oe)ge!=="value"&&!Li(ge)&&i(q,ge,null,oe[ge],M,N);"value"in oe&&i(q,"value",null,oe.value,M),(B=oe.onVnodeBeforeMount)&&wn(B,N,v)}ue&&jr(v,null,N,"beforeMount");const ae=Ob(U,ne);ae&&ne.beforeEnter(q),r(q,b,S),((B=oe&&oe.onVnodeMounted)||ae||ue)&&qt(()=>{B&&wn(B,N,v),ae&&ne.enter(q),ue&&jr(v,null,N,"mounted")},U)},I=(v,b,S,N,U)=>{if(S&&y(v,S),N)for(let M=0;M<N.length;M++)y(v,N[M]);if(U){let M=U.subTree;if(b===M||Ug(M.type)&&(M.ssContent===b||M.ssFallback===b)){const G=U.vnode;I(v,G,G.scopeId,G.slotScopeIds,U.parent)}}},_=(v,b,S,N,U,M,G,W,q=0)=>{for(let B=q;B<v.length;B++){const oe=v[B]=W?cr(v[B]):Tn(v[B]);k(null,oe,b,S,N,U,M,G,W)}},w=(v,b,S,N,U,M,G)=>{const W=b.el=v.el;let{patchFlag:q,dynamicChildren:B,dirs:oe}=b;q|=v.patchFlag&16;const Y=v.props||Le,ne=b.props||Le;let ue;if(S&&Hr(S,!1),(ue=ne.onVnodeBeforeUpdate)&&wn(ue,S,b,v),oe&&jr(b,v,S,"beforeUpdate"),S&&Hr(S,!0),(Y.innerHTML&&ne.innerHTML==null||Y.textContent&&ne.textContent==null)&&d(W,""),B?T(v.dynamicChildren,B,W,S,N,wc(b,U),M):G||ve(v,b,W,null,S,N,wc(b,U),M,!1),q>0){if(q&16)A(W,Y,ne,S,U);else if(q&2&&Y.class!==ne.class&&i(W,"class",null,ne.class,U),q&4&&i(W,"style",Y.style,ne.style,U),q&8){const ae=b.dynamicProps;for(let ge=0;ge<ae.length;ge++){const Ie=ae[ge],mt=Y[Ie],lt=ne[Ie];(lt!==mt||Ie==="value")&&i(W,Ie,mt,lt,U,S)}}q&1&&v.children!==b.children&&d(W,b.children)}else!G&&B==null&&A(W,Y,ne,S,U);((ue=ne.onVnodeUpdated)||oe)&&qt(()=>{ue&&wn(ue,S,b,v),oe&&jr(b,v,S,"updated")},N)},T=(v,b,S,N,U,M,G)=>{for(let W=0;W<b.length;W++){const q=v[W],B=b[W],oe=q.el&&(q.type===xt||!Si(q,B)||q.shapeFlag&70)?p(q.el):S;k(q,B,oe,null,N,U,M,G,!0)}},A=(v,b,S,N,U)=>{if(b!==S){if(b!==Le)for(const M in b)!Li(M)&&!(M in S)&&i(v,M,b[M],null,U,N);for(const M in S){if(Li(M))continue;const G=S[M],W=b[M];G!==W&&M!=="value"&&i(v,M,W,G,U,N)}"value"in S&&i(v,"value",b.value,S.value,U)}},C=(v,b,S,N,U,M,G,W,q)=>{const B=b.el=v?v.el:l(""),oe=b.anchor=v?v.anchor:l("");let{patchFlag:Y,dynamicChildren:ne,slotScopeIds:ue}=b;ue&&(W=W?W.concat(ue):ue),v==null?(r(B,S,N),r(oe,S,N),_(b.children||[],S,oe,U,M,G,W,q)):Y>0&&Y&64&&ne&&v.dynamicChildren?(T(v.dynamicChildren,ne,S,U,M,G,W),(b.key!=null||U&&b===U.subTree)&&Ng(v,b,!0)):ve(v,b,S,oe,U,M,G,W,q)},E=(v,b,S,N,U,M,G,W,q)=>{b.slotScopeIds=W,v==null?b.shapeFlag&512?U.ctx.activate(b,S,N,G,q):at(b,S,N,U,M,G,q):Lt(v,b,q)},at=(v,b,S,N,U,M,G)=>{const W=v.component=Xb(v,N,U);if(vg(v)&&(W.ctx.renderer=te),Zb(W,!1,G),W.asyncDep){if(U&&U.registerDep(W,Me,G),!v.el){const q=W.subTree=We(Zr);j(null,q,b,S)}}else Me(W,v,b,S,U,M,G)},Lt=(v,b,S)=>{const N=b.component=v.component;if(Hb(v,b,S))if(N.asyncDep&&!N.asyncResolved){de(N,b,S);return}else N.next=b,N.update();else b.el=v.el,N.vnode=b},Me=(v,b,S,N,U,M,G)=>{const W=()=>{if(v.isMounted){let{next:Y,bu:ne,u:ue,parent:ae,vnode:ge}=v;{const gt=Lg(v);if(gt){Y&&(Y.el=ge.el,de(v,Y,G)),gt.asyncDep.then(()=>{v.isUnmounted||W()});return}}let Ie=Y,mt;Hr(v,!1),Y?(Y.el=ge.el,de(v,Y,G)):Y=ge,ne&&ha(ne),(mt=Y.props&&Y.props.onVnodeBeforeUpdate)&&wn(mt,ae,Y,ge),Hr(v,!0);const lt=pf(v),Xt=v.subTree;v.subTree=lt,k(Xt,lt,p(Xt.el),V(Xt),v,U,M),Y.el=lt.el,Ie===null&&qb(v,lt.el),ue&&qt(ue,U),(mt=Y.props&&Y.props.onVnodeUpdated)&&qt(()=>wn(mt,ae,Y,ge),U)}else{let Y;const{el:ne,props:ue}=b,{bm:ae,m:ge,parent:Ie,root:mt,type:lt}=v,Xt=Ui(b);Hr(v,!1),ae&&ha(ae),!Xt&&(Y=ue&&ue.onVnodeBeforeMount)&&wn(Y,Ie,b),Hr(v,!0);{mt.ce&&mt.ce._injectChildStyle(lt);const gt=v.subTree=pf(v);k(null,gt,S,N,v,U,M),b.el=gt.el}if(ge&&qt(ge,U),!Xt&&(Y=ue&&ue.onVnodeMounted)){const gt=b;qt(()=>wn(Y,Ie,gt),U)}(b.shapeFlag&256||Ie&&Ui(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&v.a&&qt(v.a,U),v.isMounted=!0,b=S=N=null}};v.scope.on();const q=v.effect=new Qm(W);v.scope.off();const B=v.update=q.run.bind(q),oe=v.job=q.runIfDirty.bind(q);oe.i=v,oe.id=v.uid,q.scheduler=()=>qu(oe),Hr(v,!0),B()},de=(v,b,S)=>{b.component=v;const N=v.vnode.props;v.vnode=b,v.next=null,Cb(v,b.props,N,S),kb(v,b.children,S),Dr(),of(v),Or()},ve=(v,b,S,N,U,M,G,W,q=!1)=>{const B=v&&v.children,oe=v?v.shapeFlag:0,Y=b.children,{patchFlag:ne,shapeFlag:ue}=b;if(ne>0){if(ne&128){ln(B,Y,S,N,U,M,G,W,q);return}else if(ne&256){jt(B,Y,S,N,U,M,G,W,q);return}}ue&8?(oe&16&&Mt(B,U,M),Y!==B&&d(S,Y)):oe&16?ue&16?ln(B,Y,S,N,U,M,G,W,q):Mt(B,U,M,!0):(oe&8&&d(S,""),ue&16&&_(Y,S,N,U,M,G,W,q))},jt=(v,b,S,N,U,M,G,W,q)=>{v=v||Rs,b=b||Rs;const B=v.length,oe=b.length,Y=Math.min(B,oe);let ne;for(ne=0;ne<Y;ne++){const ue=b[ne]=q?cr(b[ne]):Tn(b[ne]);k(v[ne],ue,S,null,U,M,G,W,q)}B>oe?Mt(v,U,M,!0,!1,Y):_(b,S,N,U,M,G,W,q,Y)},ln=(v,b,S,N,U,M,G,W,q)=>{let B=0;const oe=b.length;let Y=v.length-1,ne=oe-1;for(;B<=Y&&B<=ne;){const ue=v[B],ae=b[B]=q?cr(b[B]):Tn(b[B]);if(Si(ue,ae))k(ue,ae,S,null,U,M,G,W,q);else break;B++}for(;B<=Y&&B<=ne;){const ue=v[Y],ae=b[ne]=q?cr(b[ne]):Tn(b[ne]);if(Si(ue,ae))k(ue,ae,S,null,U,M,G,W,q);else break;Y--,ne--}if(B>Y){if(B<=ne){const ue=ne+1,ae=ue<oe?b[ue].el:N;for(;B<=ne;)k(null,b[B]=q?cr(b[B]):Tn(b[B]),S,ae,U,M,G,W,q),B++}}else if(B>ne)for(;B<=Y;)qe(v[B],U,M,!0),B++;else{const ue=B,ae=B,ge=new Map;for(B=ae;B<=ne;B++){const ct=b[B]=q?cr(b[B]):Tn(b[B]);ct.key!=null&&ge.set(ct.key,B)}let Ie,mt=0;const lt=ne-ae+1;let Xt=!1,gt=0;const tr=new Array(lt);for(B=0;B<lt;B++)tr[B]=0;for(B=ue;B<=Y;B++){const ct=v[B];if(mt>=lt){qe(ct,U,M,!0);continue}let Zt;if(ct.key!=null)Zt=ge.get(ct.key);else for(Ie=ae;Ie<=ne;Ie++)if(tr[Ie-ae]===0&&Si(ct,b[Ie])){Zt=Ie;break}Zt===void 0?qe(ct,U,M,!0):(tr[Zt-ae]=B+1,Zt>=gt?gt=Zt:Xt=!0,k(ct,b[Zt],S,null,U,M,G,W,q),mt++)}const fi=Xt?Vb(tr):Rs;for(Ie=fi.length-1,B=lt-1;B>=0;B--){const ct=ae+B,Zt=b[ct],Uo=ct+1<oe?b[ct+1].el:N;tr[B]===0?k(null,Zt,S,Uo,U,M,G,W,q):Xt&&(Ie<0||B!==fi[Ie]?Jt(Zt,S,Uo,2):Ie--)}}},Jt=(v,b,S,N,U=null)=>{const{el:M,type:G,transition:W,children:q,shapeFlag:B}=v;if(B&6){Jt(v.component.subTree,b,S,N);return}if(B&128){v.suspense.move(b,S,N);return}if(B&64){G.move(v,b,S,te);return}if(G===xt){r(M,b,S);for(let Y=0;Y<q.length;Y++)Jt(q[Y],b,S,N);r(v.anchor,b,S);return}if(G===vc){H(v,b,S);return}if(N!==2&&B&1&&W)if(N===0)W.beforeEnter(M),r(M,b,S),qt(()=>W.enter(M),U);else{const{leave:Y,delayLeave:ne,afterLeave:ue}=W,ae=()=>r(M,b,S),ge=()=>{Y(M,()=>{ae(),ue&&ue()})};ne?ne(M,ae,ge):ge()}else r(M,b,S)},qe=(v,b,S,N=!1,U=!1)=>{const{type:M,props:G,ref:W,children:q,dynamicChildren:B,shapeFlag:oe,patchFlag:Y,dirs:ne,cacheIndex:ue}=v;if(Y===-2&&(U=!1),W!=null&&Pa(W,null,S,v,!0),ue!=null&&(b.renderCache[ue]=void 0),oe&256){b.ctx.deactivate(v);return}const ae=oe&1&&ne,ge=!Ui(v);let Ie;if(ge&&(Ie=G&&G.onVnodeBeforeUnmount)&&wn(Ie,b,v),oe&6)yn(v.component,S,N);else{if(oe&128){v.suspense.unmount(S,N);return}ae&&jr(v,null,b,"beforeUnmount"),oe&64?v.type.remove(v,b,S,te,N):B&&!B.hasOnce&&(M!==xt||Y>0&&Y&64)?Mt(B,b,S,!1,!0):(M===xt&&Y&384||!U&&oe&16)&&Mt(q,b,S),N&&ze(v)}(ge&&(Ie=G&&G.onVnodeUnmounted)||ae)&&qt(()=>{Ie&&wn(Ie,b,v),ae&&jr(v,null,b,"unmounted")},S)},ze=v=>{const{type:b,el:S,anchor:N,transition:U}=v;if(b===xt){er(S,N);return}if(b===vc){z(v);return}const M=()=>{s(S),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(v.shapeFlag&1&&U&&!U.persisted){const{leave:G,delayLeave:W}=U,q=()=>G(S,M);W?W(v.el,M,q):q()}else M()},er=(v,b)=>{let S;for(;v!==b;)S=m(v),s(v),v=S;s(b)},yn=(v,b,S)=>{const{bum:N,scope:U,job:M,subTree:G,um:W,m:q,a:B}=v;ff(q),ff(B),N&&ha(N),U.stop(),M&&(M.flags|=8,qe(G,v,b,S)),W&&qt(W,b),qt(()=>{v.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},Mt=(v,b,S,N=!1,U=!1,M=0)=>{for(let G=M;G<v.length;G++)qe(v[G],b,S,N,U)},V=v=>{if(v.shapeFlag&6)return V(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const b=m(v.anchor||v.el),S=b&&b[eb];return S?m(S):b};let J=!1;const Q=(v,b,S)=>{v==null?b._vnode&&qe(b._vnode,null,null,!0):k(b._vnode||null,v,b,null,null,null,S),b._vnode=v,J||(J=!0,of(),mg(),J=!1)},te={p:k,um:qe,m:Jt,r:ze,mt:at,mc:_,pc:ve,pbc:T,n:V,o:t};return{render:Q,hydrate:void 0,createApp:Tb(Q)}}function wc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Hr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ob(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ng(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=cr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Ng(o,l)),l.type===yl&&(l.el=o.el)}}function Vb(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Lg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Lg(e)}function ff(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Nb=Symbol.for("v-scx"),Lb=()=>rn(Nb);function Mb(t,e){return Gu(t,null,e)}function Ds(t,e,n){return Gu(t,e,n)}function Gu(t,e,n=Le){const{immediate:r,deep:s,flush:i,once:o}=n,l=It({},n),c=e&&r||!e&&i!=="post";let h;if(to){if(i==="sync"){const y=Lb();h=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=In,y.resume=In,y.pause=In,y}}const d=dt;l.call=(y,P,k)=>kn(y,d,P,k);let p=!1;i==="post"?l.scheduler=y=>{qt(y,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(y,P)=>{P?y():qu(y)}),l.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,d&&(y.id=d.uid,y.i=d))};const m=YE(t,e,l);return to&&(h?h.push(m):c&&m()),m}function Fb(t,e,n){const r=this.proxy,s=tt(t)?t.includes(".")?Mg(r,t):()=>r[t]:t.bind(r,r);let i;me(e)?i=e:(i=e.handler,n=e);const o=Eo(this),l=Gu(s,i.bind(r),n);return o(),l}function Mg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ub=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${on(e)}Modifiers`]||t[`${as(e)}Modifiers`];function Bb(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Le;let s=n;const i=e.startsWith("update:"),o=i&&Ub(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>tt(d)?d.trim():d)),o.number&&(s=n.map(Bc)));let l,c=r[l=fc(e)]||r[l=fc(on(e))];!c&&i&&(c=r[l=fc(as(e))]),c&&kn(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,kn(h,t,6,s)}}function Fg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!me(t)){const c=h=>{const d=Fg(h,e,!0);d&&(l=!0,It(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ue(t)&&r.set(t,null),null):(le(i)?i.forEach(c=>o[c]=null):It(o,i),Ue(t)&&r.set(t,o),o)}function _l(t,e){return!t||!ll(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,as(e))||Oe(t,e))}function pf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:d,props:p,data:m,setupState:y,ctx:P,inheritAttrs:k}=t,O=Ra(t);let j,$;try{if(n.shapeFlag&4){const z=s||r,ie=z;j=Tn(h.call(ie,z,d,p,y,m,P)),$=l}else{const z=e;j=Tn(z.length>1?z(p,{attrs:l,slots:o,emit:c}):z(p,null)),$=e.props?l:$b(l)}}catch(z){$i.length=0,ml(z,t,1),j=We(Zr)}let H=j;if($&&k!==!1){const z=Object.keys($),{shapeFlag:ie}=H;z.length&&ie&7&&(i&&z.some(xu)&&($=jb($,i)),H=$s(H,$,!1,!0))}return n.dirs&&(H=$s(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&zu(H,n.transition),j=H,Ra(O),j}const $b=t=>{let e;for(const n in t)(n==="class"||n==="style"||ll(n))&&((e||(e={}))[n]=t[n]);return e},jb=(t,e)=>{const n={};for(const r in t)(!xu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Hb(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?mf(r,o,h):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!_l(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?mf(r,o,h):!0:!!o;return!1}function mf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!_l(n,i))return!0}return!1}function qb({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ug=t=>t.__isSuspense;function zb(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):ZE(t)}const xt=Symbol.for("v-fgt"),yl=Symbol.for("v-txt"),Zr=Symbol.for("v-cmt"),vc=Symbol.for("v-stc"),$i=[];let zt=null;function _e(t=!1){$i.push(zt=t?null:[])}function Wb(){$i.pop(),zt=$i[$i.length-1]||null}let eo=1;function gf(t,e=!1){eo+=t,t<0&&zt&&e&&(zt.hasOnce=!0)}function Bg(t){return t.dynamicChildren=eo>0?zt||Rs:null,Wb(),eo>0&&zt&&zt.push(t),t}function we(t,e,n,r,s,i){return Bg(ee(t,e,n,r,s,i,!0))}function Da(t,e,n,r,s){return Bg(We(t,e,n,r,s,!0))}function Oa(t){return t?t.__v_isVNode===!0:!1}function Si(t,e){return t.type===e.type&&t.key===e.key}const $g=({key:t})=>t??null,fa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?tt(t)||Je(t)||me(t)?{i:Bt,r:t,k:e,f:!!n}:t:null);function ee(t,e=null,n=null,r=0,s=null,i=t===xt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$g(e),ref:e&&fa(e),scopeId:_g,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Bt};return l?(Qu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=tt(n)?8:16),eo>0&&!o&&zt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&zt.push(c),c}const We=Kb;function Kb(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===pb)&&(t=Zr),Oa(t)){const l=$s(t,e,!0);return n&&Qu(l,n),eo>0&&!i&&zt&&(l.shapeFlag&6?zt[zt.indexOf(t)]=l:zt.push(l)),l.patchFlag=-2,l}if(sT(t)&&(t=t.__vccOpts),e){e=Gb(e);let{class:l,style:c}=e;l&&!tt(l)&&(e.class=en(l)),Ue(c)&&($u(c)&&!le(c)&&(c=It({},c)),e.style=Vu(c))}const o=tt(t)?1:Ug(t)?128:tb(t)?64:Ue(t)?4:me(t)?2:0;return ee(t,e,n,r,s,o,i,!0)}function Gb(t){return t?$u(t)||Rg(t)?It({},t):t:null}function $s(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?Qb(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&$g(h),ref:e&&e.ref?n&&i?le(i)?i.concat(fa(e)):[i,fa(e)]:fa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$s(t.ssContent),ssFallback:t.ssFallback&&$s(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&zu(d,c.clone(d)),d}function js(t=" ",e=0){return We(yl,null,t,e)}function un(t="",e=!1){return e?(_e(),Da(Zr,null,t)):We(Zr,null,t)}function Tn(t){return t==null||typeof t=="boolean"?We(Zr):le(t)?We(xt,null,t.slice()):Oa(t)?cr(t):We(yl,null,String(t))}function cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:$s(t)}function Qu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Qu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Rg(e)?e._ctx=Bt:s===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:Bt},n=32):(e=String(e),r&64?(n=16,e=[js(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=en([e.class,r.class]));else if(s==="style")e.style=Vu([e.style,r.style]);else if(ll(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function wn(t,e,n,r=null){kn(t,e,7,[n,r])}const Yb=Ag();let Jb=0;function Xb(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Yb,i={uid:Jb++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kg(r,s),emitsOptions:Fg(r,s),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:r.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Bb.bind(null,i),t.ce&&t.ce(i),i}let dt=null,Va,Qc;{const t=dl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Va=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),Qc=e("__VUE_SSR_SETTERS__",n=>to=n)}const Eo=t=>{const e=dt;return Va(t),t.scope.on(),()=>{t.scope.off(),Va(e)}},_f=()=>{dt&&dt.scope.off(),Va(null)};function jg(t){return t.vnode.shapeFlag&4}let to=!1;function Zb(t,e=!1,n=!1){e&&Qc(e);const{props:r,children:s}=t.vnode,i=jg(t);Ab(t,r,i,e),Pb(t,s,n);const o=i?eT(t,e):void 0;return e&&Qc(!1),o}function eT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,gb);const{setup:r}=n;if(r){Dr();const s=t.setupContext=r.length>1?nT(t):null,i=Eo(t),o=vo(r,t,0,[t.props,s]),l=Fm(o);if(Or(),i(),(l||t.sp)&&!Ui(t)&&wg(t),l){if(o.then(_f,_f),e)return o.then(c=>{yf(t,c)}).catch(c=>{ml(c,t,0)});t.asyncDep=o}else yf(t,o)}else Hg(t)}function yf(t,e,n){me(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=dg(e)),Hg(t)}function Hg(t,e,n){const r=t.type;t.render||(t.render=r.render||In);{const s=Eo(t);Dr();try{_b(t)}finally{Or(),s()}}}const tT={get(t,e){return Et(t,"get",""),t[e]}};function nT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,tT),slots:t.slots,emit:t.emit,expose:e}}function wl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(dg(ju(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bi)return Bi[n](t)},has(e,n){return n in e||n in Bi}})):t.proxy}function rT(t,e=!0){return me(t)?t.displayName||t.name:t.name||e&&t.__name}function sT(t){return me(t)&&"__vccOpts"in t}const Dt=(t,e)=>GE(t,e,to);function qg(t,e,n){const r=arguments.length;return r===2?Ue(e)&&!le(e)?Oa(e)?We(t,null,[e]):We(t,e):We(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Oa(n)&&(n=[n]),We(t,e,n))}const iT="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yc;const wf=typeof window<"u"&&window.trustedTypes;if(wf)try{Yc=wf.createPolicy("vue",{createHTML:t=>t})}catch{}const zg=Yc?t=>Yc.createHTML(t):t=>t,oT="http://www.w3.org/2000/svg",aT="http://www.w3.org/1998/Math/MathML",Fn=typeof document<"u"?document:null,vf=Fn&&Fn.createElement("template"),lT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Fn.createElementNS(oT,t):e==="mathml"?Fn.createElementNS(aT,t):n?Fn.createElement(t,{is:n}):Fn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{vf.innerHTML=zg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=vf.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},cT=Symbol("_vtc");function uT(t,e,n){const r=t[cT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ef=Symbol("_vod"),hT=Symbol("_vsh"),dT=Symbol(""),fT=/(^|;)\s*display\s*:/;function pT(t,e,n){const r=t.style,s=tt(n);let i=!1;if(n&&!s){if(e)if(tt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&pa(r,l,"")}else for(const o in e)n[o]==null&&pa(r,o,"");for(const o in n)o==="display"&&(i=!0),pa(r,o,n[o])}else if(s){if(e!==n){const o=r[dT];o&&(n+=";"+o),r.cssText=n,i=fT.test(n)}}else e&&t.removeAttribute("style");Ef in t&&(t[Ef]=i?r.display:"",t[hT]&&(r.display="none"))}const bf=/\s*!important$/;function pa(t,e,n){if(le(n))n.forEach(r=>pa(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=mT(t,e);bf.test(n)?t.setProperty(as(r),n.replace(bf,""),"important"):t[r]=n}}const Tf=["Webkit","Moz","ms"],Ec={};function mT(t,e){const n=Ec[e];if(n)return n;let r=on(e);if(r!=="filter"&&r in t)return Ec[e]=r;r=hl(r);for(let s=0;s<Tf.length;s++){const i=Tf[s]+r;if(i in t)return Ec[e]=i}return e}const If="http://www.w3.org/1999/xlink";function Af(t,e,n,r,s,i=wE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(If,e.slice(6,e.length)):t.setAttributeNS(If,e,n):n==null||i&&!jm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Pn(n)?String(n):n)}function Cf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?zg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=jm(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Kr(t,e,n,r){t.addEventListener(e,n,r)}function gT(t,e,n,r){t.removeEventListener(e,n,r)}const Sf=Symbol("_vei");function _T(t,e,n,r,s=null){const i=t[Sf]||(t[Sf]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=yT(e);if(r){const h=i[e]=ET(r,s);Kr(t,l,h,c)}else o&&(gT(t,l,o,c),i[e]=void 0)}}const Rf=/(?:Once|Passive|Capture)$/;function yT(t){let e;if(Rf.test(t)){e={};let r;for(;r=t.match(Rf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):as(t.slice(2)),e]}let bc=0;const wT=Promise.resolve(),vT=()=>bc||(wT.then(()=>bc=0),bc=Date.now());function ET(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;kn(bT(r,n.value),e,5,[r])};return n.value=t,n.attached=vT(),n}function bT(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Pf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,TT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?uT(t,r,o):e==="style"?pT(t,n,r):ll(e)?xu(e)||_T(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):IT(t,e,r,o))?(Cf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Af(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!tt(r))?Cf(t,on(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Af(t,e,r,o))};function IT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Pf(e)&&me(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Pf(e)&&tt(n)?!1:e in t}const Na=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>ha(e,n):e};function AT(t){t.target.composing=!0}function kf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Os=Symbol("_assign"),vr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Os]=Na(s);const i=r||s.props&&s.props.type==="number";Kr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Bc(l)),t[Os](l)}),n&&Kr(t,"change",()=>{t.value=t.value.trim()}),e||(Kr(t,"compositionstart",AT),Kr(t,"compositionend",kf),Kr(t,"change",kf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Os]=Na(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Bc(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},CT={deep:!0,created(t,e,n){t[Os]=Na(n),Kr(t,"change",()=>{const r=t._modelValue,s=ST(t),i=t.checked,o=t[Os];if(le(r)){const l=Hm(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const h=[...r];h.splice(l,1),o(h)}}else if(cl(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Wg(t,i))})},mounted:xf,beforeUpdate(t,e,n){t[Os]=Na(n),xf(t,e,n)}};function xf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(le(e))s=Hm(e,r.props.value)>-1;else if(cl(e))s=e.has(r.props.value);else{if(e===n)return;s=fl(e,Wg(t,!0))}t.checked!==s&&(t.checked=s)}function ST(t){return"_value"in t?t._value:t.value}function Wg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const RT=["ctrl","shift","alt","meta"],PT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>RT.some(n=>t[`${n}Key`]&&!e.includes(n))},Kg=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=PT[e[o]];if(l&&l(s,e))return}return t(s,...i)})},kT=It({patchProp:TT},lT);let Df;function xT(){return Df||(Df=xb(kT))}const DT=(...t)=>{const e=xT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=VT(r);if(!s)return;const i=e._component;!me(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,OT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function OT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function VT(t){return tt(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Gg;const vl=t=>Gg=t,Qg=Symbol();function Jc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ji;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ji||(ji={}));function NT(){const t=Km(!0),e=t.run(()=>ke({}));let n=[],r=[];const s=ju({install(i){vl(s),s._a=i,i.provide(Qg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Yg=()=>{};function Of(t,e,n,r=Yg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Gm()&&EE(s),s}function vs(t,...e){t.slice().forEach(n=>{n(...e)})}const LT=t=>t(),Vf=Symbol(),Tc=Symbol();function Xc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Jc(s)&&Jc(r)&&t.hasOwnProperty(n)&&!Je(r)&&!wr(r)?t[n]=Xc(s,r):t[n]=r}return t}const MT=Symbol();function FT(t){return!Jc(t)||!t.hasOwnProperty(MT)}const{assign:ar}=Object;function UT(t){return!!(Je(t)&&t.effect)}function BT(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function h(){l||(n.state.value[t]=s?s():{});const d=qE(n.state.value[t]);return ar(d,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=ju(Dt(()=>{vl(n);const y=n._s.get(t);return o[m].call(y,y)})),p),{}))}return c=Jg(t,h,e,n,r,!0),c}function Jg(t,e,n={},r,s,i){let o;const l=ar({actions:{}},n),c={deep:!0};let h,d,p=[],m=[],y;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),ke({});let k;function O(_){let w;h=d=!1,typeof _=="function"?(_(r.state.value[t]),w={type:ji.patchFunction,storeId:t,events:y}):(Xc(r.state.value[t],_),w={type:ji.patchObject,payload:_,storeId:t,events:y});const T=k=Symbol();Hu().then(()=>{k===T&&(h=!0)}),d=!0,vs(p,w,r.state.value[t])}const j=i?function(){const{state:w}=n,T=w?w():{};this.$patch(A=>{ar(A,T)})}:Yg;function $(){o.stop(),p=[],m=[],r._s.delete(t)}const H=(_,w="")=>{if(Vf in _)return _[Tc]=w,_;const T=function(){vl(r);const A=Array.from(arguments),C=[],E=[];function at(de){C.push(de)}function Lt(de){E.push(de)}vs(m,{args:A,name:T[Tc],store:ie,after:at,onError:Lt});let Me;try{Me=_.apply(this&&this.$id===t?this:ie,A)}catch(de){throw vs(E,de),de}return Me instanceof Promise?Me.then(de=>(vs(C,de),de)).catch(de=>(vs(E,de),Promise.reject(de))):(vs(C,Me),Me)};return T[Vf]=!0,T[Tc]=w,T},z={_p:r,$id:t,$onAction:Of.bind(null,m),$patch:O,$reset:j,$subscribe(_,w={}){const T=Of(p,_,w.detached,()=>A()),A=o.run(()=>Ds(()=>r.state.value[t],C=>{(w.flush==="sync"?d:h)&&_({storeId:t,type:ji.direct,events:y},C)},ar({},c,w)));return T},$dispose:$},ie=wo(z);r._s.set(t,ie);const I=(r._a&&r._a.runWithContext||LT)(()=>r._e.run(()=>(o=Km()).run(()=>e({action:H}))));for(const _ in I){const w=I[_];if(Je(w)&&!UT(w)||wr(w))i||(P&&FT(w)&&(Je(w)?w.value=P[_]:Xc(w,P[_])),r.state.value[t][_]=w);else if(typeof w=="function"){const T=H(w,_);I[_]=T,l.actions[_]=w}}return ar(ie,I),ar(Pe(ie),I),Object.defineProperty(ie,"$state",{get:()=>r.state.value[t],set:_=>{O(w=>{ar(w,_)})}}),r._p.forEach(_=>{ar(ie,o.run(()=>_({store:ie,app:r._a,pinia:r,options:l})))}),P&&i&&n.hydrate&&n.hydrate(ie.$state,P),h=!0,d=!0,ie}/*! #__NO_SIDE_EFFECTS__ */function Xg(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=Ib();return o=o||(c?rn(Qg,null):null),o&&vl(o),o=Gg,o._s.has(t)||(s?Jg(t,e,r,o):BT(t,r,o)),o._s.get(t)}return i.$id=t,i}const $T=()=>{};var Nf={};/**
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
 */const Zg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},jT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},e_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,y=h&63;c||(y=64,o||(m=64)),r.push(n[d],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new HT;const m=i<<2|l>>4;if(r.push(m),h!==64){const y=l<<4&240|h>>2;if(r.push(y),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qT=function(t){const e=Zg(t);return e_.encodeByteArray(e,!0)},La=function(t){return qT(t).replace(/\./g,"")},t_=function(t){try{return e_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const WT=()=>zT().__FIREBASE_DEFAULTS__,KT=()=>{if(typeof process>"u"||typeof Nf>"u")return;const t=Nf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},GT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&t_(t[1]);return e&&JSON.parse(e)},El=()=>{try{return $T()||WT()||KT()||GT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},n_=t=>{var e,n;return(n=(e=El())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},QT=t=>{const e=n_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},r_=()=>{var t;return(t=El())===null||t===void 0?void 0:t.config},s_=t=>{var e;return(e=El())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class YT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function JT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[La(JSON.stringify(n)),La(JSON.stringify(o)),""].join(".")}/**
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
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function ZT(){var t;const e=(t=El())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function e0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function t0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function n0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function r0(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function s0(){return!ZT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function i0(){try{return typeof indexedDB=="object"}catch{return!1}}function o0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const a0="FirebaseError";class Zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=a0,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bo.prototype.create)}}class bo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?l0(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Zn(s,l,r)}}function l0(t,e){return t.replace(c0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const c0=/\{\$([^}]+)}/g;function u0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function es(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Lf(i)&&Lf(o)){if(!es(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Lf(t){return t!==null&&typeof t=="object"}/**
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
 */function To(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ki(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function xi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function h0(t,e){const n=new d0(t,e);return n.subscribe.bind(n)}class d0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");f0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ic),s.error===void 0&&(s.error=Ic),s.complete===void 0&&(s.complete=Ic);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function f0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ic(){}/**
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
 */class p0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new YT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(g0(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:m0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function m0(t){return t===Wr?void 0:t}function g0(t){return t.instantiationMode==="EAGER"}/**
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
 */class _0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new p0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const y0={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},w0=Ee.INFO,v0={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},E0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=v0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yu{constructor(e){this.name=e,this._logLevel=w0,this._logHandler=E0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?y0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const b0=(t,e)=>e.some(n=>t instanceof n);let Mf,Ff;function T0(){return Mf||(Mf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function I0(){return Ff||(Ff=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const i_=new WeakMap,Zc=new WeakMap,o_=new WeakMap,Ac=new WeakMap,Ju=new WeakMap;function A0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Er(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&i_.set(n,t)}).catch(()=>{}),Ju.set(e,t),e}function C0(t){if(Zc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Zc.set(t,e)}let eu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||o_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function S0(t){eu=t(eu)}function R0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cc(this),e,...n);return o_.set(r,e.sort?e.sort():[e]),Er(r)}:I0().includes(t)?function(...e){return t.apply(Cc(this),e),Er(i_.get(this))}:function(...e){return Er(t.apply(Cc(this),e))}}function P0(t){return typeof t=="function"?R0(t):(t instanceof IDBTransaction&&C0(t),b0(t,T0())?new Proxy(t,eu):t)}function Er(t){if(t instanceof IDBRequest)return A0(t);if(Ac.has(t))return Ac.get(t);const e=P0(t);return e!==t&&(Ac.set(t,e),Ju.set(e,t)),e}const Cc=t=>Ju.get(t);function k0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Er(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Er(o.result),c.oldVersion,c.newVersion,Er(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const x0=["get","getKey","getAll","getAllKeys","count"],D0=["put","add","delete","clear"],Sc=new Map;function Uf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sc.get(e))return Sc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=D0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||x0.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Sc.set(e,i),i}S0(t=>({...t,get:(e,n,r)=>Uf(e,n)||t.get(e,n,r),has:(e,n)=>!!Uf(e,n)||t.has(e,n)}));/**
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
 */class O0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(V0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function V0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tu="@firebase/app",Bf="0.11.2";/**
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
 */const Gn=new Yu("@firebase/app"),N0="@firebase/app-compat",L0="@firebase/analytics-compat",M0="@firebase/analytics",F0="@firebase/app-check-compat",U0="@firebase/app-check",B0="@firebase/auth",$0="@firebase/auth-compat",j0="@firebase/database",H0="@firebase/data-connect",q0="@firebase/database-compat",z0="@firebase/functions",W0="@firebase/functions-compat",K0="@firebase/installations",G0="@firebase/installations-compat",Q0="@firebase/messaging",Y0="@firebase/messaging-compat",J0="@firebase/performance",X0="@firebase/performance-compat",Z0="@firebase/remote-config",eI="@firebase/remote-config-compat",tI="@firebase/storage",nI="@firebase/storage-compat",rI="@firebase/firestore",sI="@firebase/vertexai",iI="@firebase/firestore-compat",oI="firebase",aI="11.4.0";/**
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
 */const nu="[DEFAULT]",lI={[tu]:"fire-core",[N0]:"fire-core-compat",[M0]:"fire-analytics",[L0]:"fire-analytics-compat",[U0]:"fire-app-check",[F0]:"fire-app-check-compat",[B0]:"fire-auth",[$0]:"fire-auth-compat",[j0]:"fire-rtdb",[H0]:"fire-data-connect",[q0]:"fire-rtdb-compat",[z0]:"fire-fn",[W0]:"fire-fn-compat",[K0]:"fire-iid",[G0]:"fire-iid-compat",[Q0]:"fire-fcm",[Y0]:"fire-fcm-compat",[J0]:"fire-perf",[X0]:"fire-perf-compat",[Z0]:"fire-rc",[eI]:"fire-rc-compat",[tI]:"fire-gcs",[nI]:"fire-gcs-compat",[rI]:"fire-fst",[iI]:"fire-fst-compat",[sI]:"fire-vertex","fire-js":"fire-js",[oI]:"fire-js-all"};/**
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
 */const Ma=new Map,cI=new Map,ru=new Map;function $f(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hs(t){const e=t.name;if(ru.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;ru.set(e,t);for(const n of Ma.values())$f(n,t);for(const n of cI.values())$f(n,t);return!0}function Xu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const uI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},br=new bo("app","Firebase",uI);/**
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
 */class hI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}}/**
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
 */const ti=aI;function a_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:nu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw br.create("bad-app-name",{appName:String(s)});if(n||(n=r_()),!n)throw br.create("no-options");const i=Ma.get(s);if(i){if(es(n,i.options)&&es(r,i.config))return i;throw br.create("duplicate-app",{appName:s})}const o=new _0(s);for(const c of ru.values())o.addComponent(c);const l=new hI(n,r,o);return Ma.set(s,l),l}function l_(t=nu){const e=Ma.get(t);if(!e&&t===nu&&r_())return a_();if(!e)throw br.create("no-app",{appName:t});return e}function Tr(t,e,n){var r;let s=(r=lI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(l.join(" "));return}Hs(new ts(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const dI="firebase-heartbeat-database",fI=1,no="firebase-heartbeat-store";let Rc=null;function c_(){return Rc||(Rc=k0(dI,fI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(no)}catch(n){console.warn(n)}}}}).catch(t=>{throw br.create("idb-open",{originalErrorMessage:t.message})})),Rc}async function pI(t){try{const n=(await c_()).transaction(no),r=await n.objectStore(no).get(u_(t));return await n.done,r}catch(e){if(e instanceof Zn)Gn.warn(e.message);else{const n=br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function jf(t,e){try{const r=(await c_()).transaction(no,"readwrite");await r.objectStore(no).put(e,u_(t)),await r.done}catch(n){if(n instanceof Zn)Gn.warn(n.message);else{const r=br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function u_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mI=1024,gI=30;class _I{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>gI){const o=vI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hf(),{heartbeatsToSend:r,unsentEntries:s}=yI(this._heartbeatsCache.heartbeats),i=La(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Gn.warn(n),""}}}function Hf(){return new Date().toISOString().substring(0,10)}function yI(t,e=mI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),qf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return i0()?o0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return jf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return jf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qf(t){return La(JSON.stringify({version:2,heartbeats:t})).length}function vI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function EI(t){Hs(new ts("platform-logger",e=>new O0(e),"PRIVATE")),Hs(new ts("heartbeat",e=>new _I(e),"PRIVATE")),Tr(tu,Bf,t),Tr(tu,Bf,"esm2017"),Tr("fire-js","")}EI("");var bI="firebase",TI="11.4.0";/**
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
 */Tr(bI,TI,"app");function Zu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function h_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const II=h_,d_=new bo("auth","Firebase",h_());/**
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
 */const Fa=new Yu("@firebase/auth");function AI(t,...e){Fa.logLevel<=Ee.WARN&&Fa.warn(`Auth (${ti}): ${t}`,...e)}function ma(t,...e){Fa.logLevel<=Ee.ERROR&&Fa.error(`Auth (${ti}): ${t}`,...e)}/**
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
 */function fn(t,...e){throw eh(t,...e)}function An(t,...e){return eh(t,...e)}function f_(t,e,n){const r=Object.assign(Object.assign({},II()),{[e]:n});return new bo("auth","Firebase",r).create(e,{appName:t.name})}function zn(t){return f_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function eh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return d_.create(t,...e)}function ce(t,e,...n){if(!t)throw eh(e,...n)}function $n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ma(e),new Error(e)}function Qn(t,e){t||$n(e)}/**
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
 */function su(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function CI(){return zf()==="http:"||zf()==="https:"}function zf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function SI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CI()||t0()||"connection"in navigator)?navigator.onLine:!0}function RI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Io{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qn(n>e,"Short delay should be less than long delay!"),this.isMobile=XT()||n0()}get(){return SI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function th(t,e){Qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class p_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const PI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kI=new Io(3e4,6e4);function Vr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nr(t,e,n,r,s={}){return m_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=To(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return e0()||(h.referrerPolicy="no-referrer"),p_.fetch()(g_(t,t.config.apiHost,n,l),h)})}async function m_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},PI),e);try{const s=new DI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw sa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw sa(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw sa(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw sa(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw f_(t,d,h);fn(t,d)}}catch(s){if(s instanceof Zn)throw s;fn(t,"network-request-failed",{message:String(s)})}}async function Ao(t,e,n,r,s={}){const i=await Nr(t,e,n,r,s);return"mfaPendingCredential"in i&&fn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function g_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?th(t.config,s):`${t.config.apiScheme}://${s}`}function xI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class DI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(An(this.auth,"network-request-failed")),kI.get())})}}function sa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=An(t,e,r);return s.customData._tokenResponse=n,s}function Wf(t){return t!==void 0&&t.enterprise!==void 0}class OI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function VI(t,e){return Nr(t,"GET","/v2/recaptchaConfig",Vr(t,e))}/**
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
 */async function NI(t,e){return Nr(t,"POST","/v1/accounts:delete",e)}async function __(t,e){return Nr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LI(t,e=!1){const n=it(t),r=await n.getIdToken(e),s=nh(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Hi(Pc(s.auth_time)),issuedAtTime:Hi(Pc(s.iat)),expirationTime:Hi(Pc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Pc(t){return Number(t)*1e3}function nh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ma("JWT malformed, contained fewer than 3 sections"),null;try{const s=t_(n);return s?JSON.parse(s):(ma("Failed to decode base64 JWT payload"),null)}catch(s){return ma("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Kf(t){const e=nh(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zn&&MI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function MI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class FI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class iu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hi(this.lastLoginAt),this.creationTime=Hi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ua(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ro(t,__(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?y_(i.providerUserInfo):[],l=BI(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new iu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function UI(t){const e=it(t);await Ua(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function y_(t){return t.map(e=>{var{providerId:n}=e,r=Zu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function $I(t,e){const n=await m_(t,{},async()=>{const r=To({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=g_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",p_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jI(t,e){return Nr(t,"POST","/v2/accounts:revokeToken",Vr(t,e))}/**
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
 */class Vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Kf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await $I(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Vs;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vs,this.toJSON())}_performRefresh(){return $n("not implemented")}}/**
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
 */function ir(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Zu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new iu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ro(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LI(this,e)}reload(){return UI(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ua(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(zn(this.auth));const e=await this.getIdToken();return await ro(this,NI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,j=(h=n.createdAt)!==null&&h!==void 0?h:void 0,$=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:H,emailVerified:z,isAnonymous:ie,providerData:ye,stsTokenManager:I}=n;ce(H&&I,e,"internal-error");const _=Vs.fromJSON(this.name,I);ce(typeof H=="string",e,"internal-error"),ir(p,e.name),ir(m,e.name),ce(typeof z=="boolean",e,"internal-error"),ce(typeof ie=="boolean",e,"internal-error"),ir(y,e.name),ir(P,e.name),ir(k,e.name),ir(O,e.name),ir(j,e.name),ir($,e.name);const w=new jn({uid:H,auth:e,email:m,emailVerified:z,displayName:p,isAnonymous:ie,photoURL:P,phoneNumber:y,tenantId:k,stsTokenManager:_,createdAt:j,lastLoginAt:$});return ye&&Array.isArray(ye)&&(w.providerData=ye.map(T=>Object.assign({},T))),O&&(w._redirectEventId=O),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new Vs;s.updateFromServerResponse(n);const i=new jn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ua(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?y_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Vs;l.updateFromIdToken(r);const c=new jn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new iu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const Gf=new Map;function Hn(t){Qn(t instanceof Function,"Expected a class definition");let e=Gf.get(t);return e?(Qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gf.set(t,e),e)}/**
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
 */class w_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}w_.type="NONE";const Qf=w_;/**
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
 */function ga(t,e,n){return`firebase:${t}:${e}:${n}`}class Ns{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ga(this.userKey,s.apiKey,i),this.fullPersistenceKey=ga("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ns(Hn(Qf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Hn(Qf);const o=ga(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){const p=jn._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ns(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Ns(i,e,r))}}/**
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
 */function Yf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(T_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(v_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(A_(e))return"Blackberry";if(C_(e))return"Webos";if(E_(e))return"Safari";if((e.includes("chrome/")||b_(e))&&!e.includes("edge/"))return"Chrome";if(I_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function v_(t=At()){return/firefox\//i.test(t)}function E_(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function b_(t=At()){return/crios\//i.test(t)}function T_(t=At()){return/iemobile/i.test(t)}function I_(t=At()){return/android/i.test(t)}function A_(t=At()){return/blackberry/i.test(t)}function C_(t=At()){return/webos/i.test(t)}function rh(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HI(t=At()){var e;return rh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qI(){return r0()&&document.documentMode===10}function S_(t=At()){return rh(t)||I_(t)||C_(t)||A_(t)||/windows phone/i.test(t)||T_(t)}/**
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
 */function R_(t,e=[]){let n;switch(t){case"Browser":n=Yf(At());break;case"Worker":n=`${Yf(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ti}/${r}`}/**
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
 */class zI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function WI(t,e={}){return Nr(t,"GET","/v2/passwordPolicy",Vr(t,e))}/**
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
 */const KI=6;class GI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:KI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class QI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jf(this),this.idTokenSubscription=new Jf(this),this.beforeStateQueue=new zI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ns.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await __(this,{idToken:e}),r=await jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ua(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(zn(this));const n=e?it(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WI(this),n=new GI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await jI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await Ns.create(this,[Hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=R_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&AI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cs(t){return it(t)}class Jf{constructor(e){this.auth=e,this.observer=null,this.addObserver=h0(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let bl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YI(t){bl=t}function P_(t){return bl.loadJS(t)}function JI(){return bl.recaptchaEnterpriseScript}function XI(){return bl.gapiScript}function ZI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class eA{constructor(){this.enterprise=new tA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class tA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const nA="recaptcha-enterprise",k_="NO_RECAPTCHA";class rA{constructor(e){this.type=nA,this.auth=cs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{VI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new OI(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Wf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(k_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new eA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Wf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=JI();c.length!==0&&(c+=l),P_(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Xf(t,e,n,r=!1,s=!1){const i=new rA(t);let o;if(s)o=k_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ou(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Xf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Xf(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function sA(t,e){const n=Xu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(es(i,e??{}))return s;fn(s,"already-initialized")}return n.initialize({options:e})}function iA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oA(t,e,n){const r=cs(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=x_(e),{host:o,port:l}=aA(e),c=l===null?"":`:${l}`,h={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(es(h,r.config.emulator)&&es(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,lA()}function x_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aA(t){const e=x_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Zf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Zf(o)}}}function Zf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class sh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $n("not implemented")}_getIdTokenResponse(e){return $n("not implemented")}_linkToIdToken(e,n){return $n("not implemented")}_getReauthenticationResolver(e){return $n("not implemented")}}async function cA(t,e){return Nr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function uA(t,e){return Ao(t,"POST","/v1/accounts:signInWithPassword",Vr(t,e))}/**
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
 */async function hA(t,e){return Ao(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}async function dA(t,e){return Ao(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}/**
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
 */class so extends sh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new so(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new so(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ou(e,n,"signInWithPassword",uA);case"emailLink":return hA(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ou(e,r,"signUpPassword",cA);case"emailLink":return dA(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ls(t,e){return Ao(t,"POST","/v1/accounts:signInWithIdp",Vr(t,e))}/**
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
 */const fA="http://localhost";class ns extends sh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Zu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ns(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ls(e,n)}buildRequest(){const e={requestUri:fA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=To(n)}return e}}/**
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
 */function pA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mA(t){const e=ki(xi(t)).link,n=e?ki(xi(e)).deep_link_id:null,r=ki(xi(t)).deep_link_id;return(r?ki(xi(r)).link:null)||r||n||e||t}class ih{constructor(e){var n,r,s,i,o,l;const c=ki(xi(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=pA((s=c.mode)!==null&&s!==void 0?s:null);ce(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=mA(e);try{return new ih(n)}catch{return null}}}/**
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
 */class ni{constructor(){this.providerId=ni.PROVIDER_ID}static credential(e,n){return so._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ih.parseLink(n);return ce(r,"argument-error"),so._fromEmailAndCode(e,r.code,r.tenantId)}}ni.PROVIDER_ID="password";ni.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ni.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class D_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Co extends D_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hr extends Co{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
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
 */class dr extends Co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ns._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.GOOGLE_SIGN_IN_METHOD="google.com";dr.PROVIDER_ID="google.com";/**
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
 */class fr extends Co{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
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
 */class pr extends Co{constructor(){super("twitter.com")}static credential(e,n){return ns._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
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
 */async function gA(t,e){return Ao(t,"POST","/v1/accounts:signUp",Vr(t,e))}/**
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
 */class rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await jn._fromIdTokenResponse(e,r,s),o=ep(r);return new rs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ep(r);return new rs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ep(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ba extends Zn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ba.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ba(e,n,r,s)}}function O_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ba._fromErrorAndOperation(t,i,e,r):i})}async function _A(t,e,n=!1){const r=await ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rs._forOperation(t,"link",r)}/**
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
 */async function yA(t,e,n=!1){const{auth:r}=t;if(tn(r.app))return Promise.reject(zn(r));const s="reauthenticate";try{const i=await ro(t,O_(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=nh(i.idToken);ce(o,r,"internal-error");const{sub:l}=o;return ce(t.uid===l,r,"user-mismatch"),rs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),i}}/**
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
 */async function V_(t,e,n=!1){if(tn(t.app))return Promise.reject(zn(t));const r="signIn",s=await O_(t,r,e),i=await rs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function wA(t,e){return V_(cs(t),e)}/**
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
 */async function N_(t){const e=cs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vA(t,e,n){if(tn(t.app))return Promise.reject(zn(t));const r=cs(t),o=await ou(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gA).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&N_(t),c}),l=await rs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function EA(t,e,n){return tn(t.app)?Promise.reject(zn(t)):wA(it(t),ni.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&N_(t),r})}function bA(t,e,n,r){return it(t).onIdTokenChanged(e,n,r)}function TA(t,e,n){return it(t).beforeAuthStateChanged(e,n)}function Tl(t,e,n,r){return it(t).onAuthStateChanged(e,n,r)}function IA(t){return it(t).signOut()}const $a="__sak";/**
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
 */class L_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($a,"1"),this.storage.removeItem($a),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const AA=1e3,CA=10;class M_ extends L_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=S_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);qI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,CA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},AA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}M_.type="LOCAL";const SA=M_;/**
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
 */class F_ extends L_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}F_.type="SESSION";const U_=F_;/**
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
 */function RA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Il{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Il(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await RA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Il.receivers=[];/**
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
 */function oh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class PA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=oh("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Cn(){return window}function kA(t){Cn().location.href=t}/**
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
 */function B_(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function xA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function OA(){return B_()?self:null}/**
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
 */const $_="firebaseLocalStorageDb",VA=1,ja="firebaseLocalStorage",j_="fbase_key";class So{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Al(t,e){return t.transaction([ja],e?"readwrite":"readonly").objectStore(ja)}function NA(){const t=indexedDB.deleteDatabase($_);return new So(t).toPromise()}function au(){const t=indexedDB.open($_,VA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ja,{keyPath:j_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ja)?e(r):(r.close(),await NA(),e(await au()))})})}async function tp(t,e,n){const r=Al(t,!0).put({[j_]:e,value:n});return new So(r).toPromise()}async function LA(t,e){const n=Al(t,!1).get(e),r=await new So(n).toPromise();return r===void 0?null:r.value}function np(t,e){const n=Al(t,!0).delete(e);return new So(n).toPromise()}const MA=800,FA=3;class H_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await au(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>FA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return B_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Il._getInstance(OA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xA(),!this.activeServiceWorker)return;this.sender=new PA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await au();return await tp(e,$a,"1"),await np(e,$a),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>LA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>np(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Al(s,!1).getAll();return new So(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}H_.type="LOCAL";const UA=H_;new Io(3e4,6e4);/**
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
 */function BA(t,e){return e?Hn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ah extends sh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $A(t){return V_(t.auth,new ah(t),t.bypassAuthState)}function jA(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),yA(n,new ah(t),t.bypassAuthState)}async function HA(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),_A(n,new ah(t),t.bypassAuthState)}/**
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
 */class q_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $A;case"linkViaPopup":case"linkViaRedirect":return HA;case"reauthViaPopup":case"reauthViaRedirect":return jA;default:fn(this.auth,"internal-error")}}resolve(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qA=new Io(2e3,1e4);class Ss extends q_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ss.currentPopupAction&&Ss.currentPopupAction.cancel(),Ss.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Qn(this.filter.length===1,"Popup operations only handle one event");const e=oh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ss.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qA.get())};e()}}Ss.currentPopupAction=null;/**
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
 */const zA="pendingRedirect",_a=new Map;class WA extends q_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_a.get(this.auth._key());if(!e){try{const r=await KA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_a.set(this.auth._key(),e)}return this.bypassAuthState||_a.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KA(t,e){const n=YA(e),r=QA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function GA(t,e){_a.set(t._key(),e)}function QA(t){return Hn(t._redirectPersistence)}function YA(t){return ga(zA,t.config.apiKey,t.name)}async function JA(t,e,n=!1){if(tn(t.app))return Promise.reject(zn(t));const r=cs(t),s=BA(r,e),o=await new WA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const XA=10*60*1e3;class ZA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!z_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(An(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XA&&this.cachedEventUids.clear(),this.cachedEventUids.has(rp(e))}saveEventToCache(e){this.cachedEventUids.add(rp(e)),this.lastProcessedEventTime=Date.now()}}function rp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function z_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return z_(t);default:return!1}}/**
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
 */async function tC(t,e={}){return Nr(t,"GET","/v1/projects",e)}/**
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
 */const nC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rC=/^https?/;async function sC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tC(t);for(const n of e)try{if(iC(n))return}catch{}fn(t,"unauthorized-domain")}function iC(t){const e=su(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rC.test(n))return!1;if(nC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const oC=new Io(3e4,6e4);function sp(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aC(t){return new Promise((e,n)=>{var r,s,i;function o(){sp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sp(),n(An(t,"network-request-failed"))},timeout:oC.get()})}if(!((s=(r=Cn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Cn().gapi)===null||i===void 0)&&i.load)o();else{const l=ZI("iframefcb");return Cn()[l]=()=>{gapi.load?o():n(An(t,"network-request-failed"))},P_(`${XI()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ya=null,e})}let ya=null;function lC(t){return ya=ya||aC(t),ya}/**
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
 */const cC=new Io(5e3,15e3),uC="__/auth/iframe",hC="emulator/auth/iframe",dC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pC(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?th(e,hC):`https://${t.config.authDomain}/${uC}`,r={apiKey:e.apiKey,appName:t.name,v:ti},s=fC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${To(r).slice(1)}`}async function mC(t){const e=await lC(t),n=Cn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:pC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=An(t,"network-request-failed"),l=Cn().setTimeout(()=>{i(o)},cC.get());function c(){Cn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const gC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_C=500,yC=600,wC="_blank",vC="http://localhost";class ip{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EC(t,e,n,r=_C,s=yC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},gC),{width:r.toString(),height:s.toString(),top:i,left:o}),h=At().toLowerCase();n&&(l=b_(h)?wC:n),v_(h)&&(e=e||vC,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[y,P])=>`${m}${y}=${P},`,"");if(HI(h)&&l!=="_self")return bC(e||"",l),new ip(null);const p=window.open(e||"",l,d);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new ip(p)}function bC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const TC="__/auth/handler",IC="emulator/auth/handler",AC=encodeURIComponent("fac");async function op(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ti,eventId:s};if(e instanceof D_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",u0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Co){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${AC}=${encodeURIComponent(c)}`:"";return`${CC(t)}?${To(l).slice(1)}${h}`}function CC({config:t}){return t.emulator?th(t,IC):`https://${t.authDomain}/${TC}`}/**
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
 */const kc="webStorageSupport";class SC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=U_,this._completeRedirectFn=JA,this._overrideRedirectResult=GA}async _openPopup(e,n,r,s){var i;Qn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await op(e,n,r,su(),s);return EC(e,o,oh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await op(e,n,r,su(),s);return kA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Qn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mC(e),r=new ZA(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kc,{type:kc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[kc];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return S_()||E_()||rh()}}const RC=SC;var ap="@firebase/auth",lp="1.9.1";/**
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
 */class PC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function kC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xC(t){Hs(new ts("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:R_(t)},h=new QI(r,s,i,c);return iA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hs(new ts("auth-internal",e=>{const n=cs(e.getProvider("auth").getImmediate());return(r=>new PC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tr(ap,lp,kC(t)),Tr(ap,lp,"esm2017")}/**
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
 */const DC=5*60,OC=s_("authIdTokenMaxAge")||DC;let cp=null;const VC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>OC)return;const s=n==null?void 0:n.token;cp!==s&&(cp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function NC(t=l_()){const e=Xu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sA(t,{popupRedirectResolver:RC,persistence:[UA,SA,U_]}),r=s_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=VC(i.toString());TA(n,o,()=>o(n.currentUser)),bA(n,l=>o(l))}}const s=n_("auth");return s&&oA(n,`http://${s}`),n}function LC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}YI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=An("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",LC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xC("Browser");var up=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ir,W_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function w(){}w.prototype=_.prototype,I.D=_.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(T,A,C){for(var E=Array(arguments.length-2),at=2;at<arguments.length;at++)E[at-2]=arguments[at];return _.prototype[A].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,w){w||(w=0);var T=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)T[A]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(A=0;16>A;++A)T[A]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=I.g[0],w=I.g[1],A=I.g[2];var C=I.g[3],E=_+(C^w&(A^C))+T[0]+3614090360&4294967295;_=w+(E<<7&4294967295|E>>>25),E=C+(A^_&(w^A))+T[1]+3905402710&4294967295,C=_+(E<<12&4294967295|E>>>20),E=A+(w^C&(_^w))+T[2]+606105819&4294967295,A=C+(E<<17&4294967295|E>>>15),E=w+(_^A&(C^_))+T[3]+3250441966&4294967295,w=A+(E<<22&4294967295|E>>>10),E=_+(C^w&(A^C))+T[4]+4118548399&4294967295,_=w+(E<<7&4294967295|E>>>25),E=C+(A^_&(w^A))+T[5]+1200080426&4294967295,C=_+(E<<12&4294967295|E>>>20),E=A+(w^C&(_^w))+T[6]+2821735955&4294967295,A=C+(E<<17&4294967295|E>>>15),E=w+(_^A&(C^_))+T[7]+4249261313&4294967295,w=A+(E<<22&4294967295|E>>>10),E=_+(C^w&(A^C))+T[8]+1770035416&4294967295,_=w+(E<<7&4294967295|E>>>25),E=C+(A^_&(w^A))+T[9]+2336552879&4294967295,C=_+(E<<12&4294967295|E>>>20),E=A+(w^C&(_^w))+T[10]+4294925233&4294967295,A=C+(E<<17&4294967295|E>>>15),E=w+(_^A&(C^_))+T[11]+2304563134&4294967295,w=A+(E<<22&4294967295|E>>>10),E=_+(C^w&(A^C))+T[12]+1804603682&4294967295,_=w+(E<<7&4294967295|E>>>25),E=C+(A^_&(w^A))+T[13]+4254626195&4294967295,C=_+(E<<12&4294967295|E>>>20),E=A+(w^C&(_^w))+T[14]+2792965006&4294967295,A=C+(E<<17&4294967295|E>>>15),E=w+(_^A&(C^_))+T[15]+1236535329&4294967295,w=A+(E<<22&4294967295|E>>>10),E=_+(A^C&(w^A))+T[1]+4129170786&4294967295,_=w+(E<<5&4294967295|E>>>27),E=C+(w^A&(_^w))+T[6]+3225465664&4294967295,C=_+(E<<9&4294967295|E>>>23),E=A+(_^w&(C^_))+T[11]+643717713&4294967295,A=C+(E<<14&4294967295|E>>>18),E=w+(C^_&(A^C))+T[0]+3921069994&4294967295,w=A+(E<<20&4294967295|E>>>12),E=_+(A^C&(w^A))+T[5]+3593408605&4294967295,_=w+(E<<5&4294967295|E>>>27),E=C+(w^A&(_^w))+T[10]+38016083&4294967295,C=_+(E<<9&4294967295|E>>>23),E=A+(_^w&(C^_))+T[15]+3634488961&4294967295,A=C+(E<<14&4294967295|E>>>18),E=w+(C^_&(A^C))+T[4]+3889429448&4294967295,w=A+(E<<20&4294967295|E>>>12),E=_+(A^C&(w^A))+T[9]+568446438&4294967295,_=w+(E<<5&4294967295|E>>>27),E=C+(w^A&(_^w))+T[14]+3275163606&4294967295,C=_+(E<<9&4294967295|E>>>23),E=A+(_^w&(C^_))+T[3]+4107603335&4294967295,A=C+(E<<14&4294967295|E>>>18),E=w+(C^_&(A^C))+T[8]+1163531501&4294967295,w=A+(E<<20&4294967295|E>>>12),E=_+(A^C&(w^A))+T[13]+2850285829&4294967295,_=w+(E<<5&4294967295|E>>>27),E=C+(w^A&(_^w))+T[2]+4243563512&4294967295,C=_+(E<<9&4294967295|E>>>23),E=A+(_^w&(C^_))+T[7]+1735328473&4294967295,A=C+(E<<14&4294967295|E>>>18),E=w+(C^_&(A^C))+T[12]+2368359562&4294967295,w=A+(E<<20&4294967295|E>>>12),E=_+(w^A^C)+T[5]+4294588738&4294967295,_=w+(E<<4&4294967295|E>>>28),E=C+(_^w^A)+T[8]+2272392833&4294967295,C=_+(E<<11&4294967295|E>>>21),E=A+(C^_^w)+T[11]+1839030562&4294967295,A=C+(E<<16&4294967295|E>>>16),E=w+(A^C^_)+T[14]+4259657740&4294967295,w=A+(E<<23&4294967295|E>>>9),E=_+(w^A^C)+T[1]+2763975236&4294967295,_=w+(E<<4&4294967295|E>>>28),E=C+(_^w^A)+T[4]+1272893353&4294967295,C=_+(E<<11&4294967295|E>>>21),E=A+(C^_^w)+T[7]+4139469664&4294967295,A=C+(E<<16&4294967295|E>>>16),E=w+(A^C^_)+T[10]+3200236656&4294967295,w=A+(E<<23&4294967295|E>>>9),E=_+(w^A^C)+T[13]+681279174&4294967295,_=w+(E<<4&4294967295|E>>>28),E=C+(_^w^A)+T[0]+3936430074&4294967295,C=_+(E<<11&4294967295|E>>>21),E=A+(C^_^w)+T[3]+3572445317&4294967295,A=C+(E<<16&4294967295|E>>>16),E=w+(A^C^_)+T[6]+76029189&4294967295,w=A+(E<<23&4294967295|E>>>9),E=_+(w^A^C)+T[9]+3654602809&4294967295,_=w+(E<<4&4294967295|E>>>28),E=C+(_^w^A)+T[12]+3873151461&4294967295,C=_+(E<<11&4294967295|E>>>21),E=A+(C^_^w)+T[15]+530742520&4294967295,A=C+(E<<16&4294967295|E>>>16),E=w+(A^C^_)+T[2]+3299628645&4294967295,w=A+(E<<23&4294967295|E>>>9),E=_+(A^(w|~C))+T[0]+4096336452&4294967295,_=w+(E<<6&4294967295|E>>>26),E=C+(w^(_|~A))+T[7]+1126891415&4294967295,C=_+(E<<10&4294967295|E>>>22),E=A+(_^(C|~w))+T[14]+2878612391&4294967295,A=C+(E<<15&4294967295|E>>>17),E=w+(C^(A|~_))+T[5]+4237533241&4294967295,w=A+(E<<21&4294967295|E>>>11),E=_+(A^(w|~C))+T[12]+1700485571&4294967295,_=w+(E<<6&4294967295|E>>>26),E=C+(w^(_|~A))+T[3]+2399980690&4294967295,C=_+(E<<10&4294967295|E>>>22),E=A+(_^(C|~w))+T[10]+4293915773&4294967295,A=C+(E<<15&4294967295|E>>>17),E=w+(C^(A|~_))+T[1]+2240044497&4294967295,w=A+(E<<21&4294967295|E>>>11),E=_+(A^(w|~C))+T[8]+1873313359&4294967295,_=w+(E<<6&4294967295|E>>>26),E=C+(w^(_|~A))+T[15]+4264355552&4294967295,C=_+(E<<10&4294967295|E>>>22),E=A+(_^(C|~w))+T[6]+2734768916&4294967295,A=C+(E<<15&4294967295|E>>>17),E=w+(C^(A|~_))+T[13]+1309151649&4294967295,w=A+(E<<21&4294967295|E>>>11),E=_+(A^(w|~C))+T[4]+4149444226&4294967295,_=w+(E<<6&4294967295|E>>>26),E=C+(w^(_|~A))+T[11]+3174756917&4294967295,C=_+(E<<10&4294967295|E>>>22),E=A+(_^(C|~w))+T[2]+718787259&4294967295,A=C+(E<<15&4294967295|E>>>17),E=w+(C^(A|~_))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+C&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var w=_-this.blockSize,T=this.B,A=this.h,C=0;C<_;){if(A==0)for(;C<=w;)s(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<_;)if(T[A++]=I.charCodeAt(C++),A==this.blockSize){s(this,T),A=0;break}}else for(;C<_;)if(T[A++]=I[C++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var w=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=w&255,w/=256;for(this.u(I),I=Array(16),_=w=0;4>_;++_)for(var T=0;32>T;T+=8)I[w++]=this.g[_]>>>T&255;return I};function i(I,_){var w=l;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=_(I)}function o(I,_){this.h=_;for(var w=[],T=!0,A=I.length-1;0<=A;A--){var C=I[A]|0;T&&C==_||(w[A]=C,T=!1)}this.g=w}var l={};function c(I){return-128<=I&&128>I?i(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return O(h(-I));for(var _=[],w=1,T=0;I>=w;T++)_[T]=I/w|0,w*=4294967296;return new o(_,0)}function d(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return O(d(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(_,8)),T=p,A=0;A<I.length;A+=8){var C=Math.min(8,I.length-A),E=parseInt(I.substring(A,A+C),_);8>C?(C=h(Math.pow(_,C)),T=T.j(C).add(h(E))):(T=T.j(w),T=T.add(h(E)))}return T}var p=c(0),m=c(1),y=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-O(this).m();for(var I=0,_=1,w=0;w<this.g.length;w++){var T=this.i(w);I+=(0<=T?T:4294967296+T)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(k(this))return"-"+O(this).toString(I);for(var _=h(Math.pow(I,6)),w=this,T="";;){var A=z(w,_).g;w=j(w,A.j(_));var C=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=A,P(w))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function k(I){return I.h==-1}t.l=function(I){return I=j(this,I),k(I)?-1:P(I)?0:1};function O(I){for(var _=I.g.length,w=[],T=0;T<_;T++)w[T]=~I.g[T];return new o(w,~I.h).add(m)}t.abs=function(){return k(this)?O(this):this},t.add=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],T=0,A=0;A<=_;A++){var C=T+(this.i(A)&65535)+(I.i(A)&65535),E=(C>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);T=E>>>16,C&=65535,E&=65535,w[A]=E<<16|C}return new o(w,w[w.length-1]&-2147483648?-1:0)};function j(I,_){return I.add(O(_))}t.j=function(I){if(P(this)||P(I))return p;if(k(this))return k(I)?O(this).j(O(I)):O(O(this).j(I));if(k(I))return O(this.j(O(I)));if(0>this.l(y)&&0>I.l(y))return h(this.m()*I.m());for(var _=this.g.length+I.g.length,w=[],T=0;T<2*_;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<I.g.length;A++){var C=this.i(T)>>>16,E=this.i(T)&65535,at=I.i(A)>>>16,Lt=I.i(A)&65535;w[2*T+2*A]+=E*Lt,$(w,2*T+2*A),w[2*T+2*A+1]+=C*Lt,$(w,2*T+2*A+1),w[2*T+2*A+1]+=E*at,$(w,2*T+2*A+1),w[2*T+2*A+2]+=C*at,$(w,2*T+2*A+2)}for(T=0;T<_;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=_;T<2*_;T++)w[T]=0;return new o(w,0)};function $(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function H(I,_){this.g=I,this.h=_}function z(I,_){if(P(_))throw Error("division by zero");if(P(I))return new H(p,p);if(k(I))return _=z(O(I),_),new H(O(_.g),O(_.h));if(k(_))return _=z(I,O(_)),new H(O(_.g),_.h);if(30<I.g.length){if(k(I)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var w=m,T=_;0>=T.l(I);)w=ie(w),T=ie(T);var A=ye(w,1),C=ye(T,1);for(T=ye(T,2),w=ye(w,2);!P(T);){var E=C.add(T);0>=E.l(I)&&(A=A.add(w),C=E),T=ye(T,1),w=ye(w,1)}return _=j(I,A.j(_)),new H(A,_)}for(A=p;0<=I.l(_);){for(w=Math.max(1,Math.floor(I.m()/_.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=h(w),E=C.j(_);k(E)||0<E.l(I);)w-=T,C=h(w),E=C.j(_);P(C)&&(C=m),A=A.add(C),I=j(I,E)}return new H(A,I)}t.A=function(I){return z(this,I).h},t.and=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],T=0;T<_;T++)w[T]=this.i(T)&I.i(T);return new o(w,this.h&I.h)},t.or=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],T=0;T<_;T++)w[T]=this.i(T)|I.i(T);return new o(w,this.h|I.h)},t.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],T=0;T<_;T++)w[T]=this.i(T)^I.i(T);return new o(w,this.h^I.h)};function ie(I){for(var _=I.g.length+1,w=[],T=0;T<_;T++)w[T]=I.i(T)<<1|I.i(T-1)>>>31;return new o(w,I.h)}function ye(I,_){var w=_>>5;_%=32;for(var T=I.g.length-w,A=[],C=0;C<T;C++)A[C]=0<_?I.i(C+w)>>>_|I.i(C+w+1)<<32-_:I.i(C+w);return new o(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,W_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Ir=o}).apply(typeof up<"u"?up:typeof self<"u"?self:typeof window<"u"?window:{});var ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var K_,Di,G_,wa,lu,Q_,Y_,J_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ia=="object"&&ia];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var R=a[g];if(!(R in f))break e;f=f[R]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,g=!1,R={next:function(){if(!g&&f<a.length){var x=f++;return{value:u(x,a[x]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),a.apply(u,R)}}return function(){return a.apply(u,arguments)}}function m(a,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function y(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function P(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,R,x){for(var K=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)K[Ne-2]=arguments[Ne];return u.prototype[R].apply(g,K)}}function k(a){const u=a.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function O(a,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const R=a.length||0,x=g.length||0;a.length=R+x;for(let K=0;K<x;K++)a[R+K]=g[K]}else a.push(g)}}class j{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(a){return/^[\s\xa0]*$/.test(a)}function H(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function z(a){return z[" "](a),a}z[" "]=function(){};var ie=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function ye(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function I(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function _(a){const u={};for(const f in a)u[f]=a[f];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,u){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)a[f]=g[f];for(let x=0;x<w.length;x++)f=w[x],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function A(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function C(a){l.setTimeout(()=>{throw a},0)}function E(){var a=jt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class at{constructor(){this.h=this.g=null}add(u,f){const g=Lt.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Lt=new j(()=>new Me,a=>a.reset());class Me{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let de,ve=!1,jt=new at,ln=()=>{const a=l.Promise.resolve(void 0);de=()=>{a.then(Jt)}};var Jt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(f){C(f)}var u=Lt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ve=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ze(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var er=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function yn(a,u){if(ze.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ie){e:{try{z(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Mt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&yn.aa.h.call(this)}}P(yn,ze);var Mt={2:"touch",3:"pen",4:"mouse"};yn.prototype.h=function(){yn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),J=0;function Q(a,u,f,g,R){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=R,this.key=++J,this.da=this.fa=!1}function te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Se(a){this.src=a,this.g={},this.h=0}Se.prototype.add=function(a,u,f,g,R){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var K=b(a,u,g,R);return-1<K?(u=a[K],f||(u.fa=!1)):(u=new Q(u,this.src,x,!!g,R),u.fa=f,a.push(u)),u};function v(a,u){var f=u.type;if(f in a.g){var g=a.g[f],R=Array.prototype.indexOf.call(g,u,void 0),x;(x=0<=R)&&Array.prototype.splice.call(g,R,1),x&&(te(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function b(a,u,f,g){for(var R=0;R<a.length;++R){var x=a[R];if(!x.da&&x.listener==u&&x.capture==!!f&&x.ha==g)return R}return-1}var S="closure_lm_"+(1e6*Math.random()|0),N={};function U(a,u,f,g,R){if(Array.isArray(u)){for(var x=0;x<u.length;x++)U(a,u[x],f,g,R);return null}return f=ue(f),a&&a[V]?a.K(u,f,h(g)?!!g.capture:!1,R):M(a,u,f,!1,g,R)}function M(a,u,f,g,R,x){if(!u)throw Error("Invalid event type");var K=h(R)?!!R.capture:!!R,Ne=Y(a);if(Ne||(a[S]=Ne=new Se(a)),f=Ne.add(u,f,g,K,x),f.proxy)return f;if(g=G(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)er||(R=K),R===void 0&&(R=!1),a.addEventListener(u.toString(),g,R);else if(a.attachEvent)a.attachEvent(B(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function G(){function a(f){return u.call(a.src,a.listener,f)}const u=oe;return a}function W(a,u,f,g,R){if(Array.isArray(u))for(var x=0;x<u.length;x++)W(a,u[x],f,g,R);else g=h(g)?!!g.capture:!!g,f=ue(f),a&&a[V]?(a=a.i,u=String(u).toString(),u in a.g&&(x=a.g[u],f=b(x,f,g,R),-1<f&&(te(x[f]),Array.prototype.splice.call(x,f,1),x.length==0&&(delete a.g[u],a.h--)))):a&&(a=Y(a))&&(u=a.g[u.toString()],a=-1,u&&(a=b(u,f,g,R)),(f=-1<a?u[a]:null)&&q(f))}function q(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[V])v(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent(B(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=Y(u))?(v(f,a),f.h==0&&(f.src=null,u[S]=null)):te(a)}}}function B(a){return a in N?N[a]:N[a]="on"+a}function oe(a,u){if(a.da)a=!0;else{u=new yn(u,this);var f=a.listener,g=a.ha||a.src;a.fa&&q(a),a=f.call(g,u)}return a}function Y(a){return a=a[S],a instanceof Se?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(u){return a.handleEvent(u)}),a[ne])}function ae(){qe.call(this),this.i=new Se(this),this.M=this,this.F=null}P(ae,qe),ae.prototype[V]=!0,ae.prototype.removeEventListener=function(a,u,f,g){W(this,a,u,f,g)};function ge(a,u){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new ze(u,a);else if(u instanceof ze)u.target=u.target||a;else{var R=u;u=new ze(g,a),T(u,R)}if(R=!0,f)for(var x=f.length-1;0<=x;x--){var K=u.g=f[x];R=Ie(K,g,!0,u)&&R}if(K=u.g=a,R=Ie(K,g,!0,u)&&R,R=Ie(K,g,!1,u)&&R,f)for(x=0;x<f.length;x++)K=u.g=f[x],R=Ie(K,g,!1,u)&&R}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],g=0;g<f.length;g++)te(f[g]);delete a.g[u],a.h--}}this.F=null},ae.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},ae.prototype.L=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function Ie(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,x=0;x<u.length;++x){var K=u[x];if(K&&!K.da&&K.capture==f){var Ne=K.listener,ut=K.ha||K.src;K.fa&&v(a.i,K),R=Ne.call(ut,g)!==!1&&R}}return R&&!g.defaultPrevented}function mt(a,u,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function lt(a){a.g=mt(()=>{a.g=null,a.i&&(a.i=!1,lt(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Xt extends qe{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:lt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gt(a){qe.call(this),this.h=a,this.g={}}P(gt,qe);var tr=[];function fi(a){ye(a.g,function(u,f){this.g.hasOwnProperty(f)&&q(u)},a),a.g={}}gt.prototype.N=function(){gt.aa.N.call(this),fi(this)},gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ct=l.JSON.stringify,Zt=l.JSON.parse,Uo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Xl(){}Xl.prototype.h=null;function ud(a){return a.h||(a.h=a.i())}function hd(){}var pi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zl(){ze.call(this,"d")}P(Zl,ze);function ec(){ze.call(this,"c")}P(ec,ze);var Fr={},dd=null;function Bo(){return dd=dd||new ae}Fr.La="serverreachability";function fd(a){ze.call(this,Fr.La,a)}P(fd,ze);function mi(a){const u=Bo();ge(u,new fd(u))}Fr.STAT_EVENT="statevent";function pd(a,u){ze.call(this,Fr.STAT_EVENT,a),this.stat=u}P(pd,ze);function St(a){const u=Bo();ge(u,new pd(u,a))}Fr.Ma="timingevent";function md(a,u){ze.call(this,Fr.Ma,a),this.size=u}P(md,ze);function gi(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function _i(){this.g=!0}_i.prototype.xa=function(){this.g=!1};function Bv(a,u,f,g,R,x){a.info(function(){if(a.g)if(x)for(var K="",Ne=x.split("&"),ut=0;ut<Ne.length;ut++){var Re=Ne[ut].split("=");if(1<Re.length){var _t=Re[0];Re=Re[1];var yt=_t.split("_");K=2<=yt.length&&yt[1]=="type"?K+(_t+"="+Re+"&"):K+(_t+"=redacted&")}}else K=null;else K=x;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+f+`
`+K})}function $v(a,u,f,g,R,x,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+f+`
`+x+" "+K})}function ms(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Hv(a,f)+(g?" "+g:"")})}function jv(a,u){a.info(function(){return"TIMEOUT: "+u})}_i.prototype.info=function(){};function Hv(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var x=R[0];if(x!="noop"&&x!="stop"&&x!="close")for(var K=1;K<R.length;K++)R[K]=""}}}}return ct(f)}catch{return u}}var $o={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},tc;function jo(){}P(jo,Xl),jo.prototype.g=function(){return new XMLHttpRequest},jo.prototype.i=function(){return{}},tc=new jo;function nr(a,u,f,g){this.j=a,this.i=u,this.l=f,this.R=g||1,this.U=new gt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _d}function _d(){this.i=null,this.g="",this.h=!1}var yd={},nc={};function rc(a,u,f){a.L=1,a.v=Wo(Vn(u)),a.m=f,a.P=!0,wd(a,null)}function wd(a,u){a.F=Date.now(),Ho(a),a.A=Vn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Od(f.i,"t",g),a.C=0,f=a.j.J,a.h=new _d,a.g=Jd(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Xt(m(a.Y,a,a.g),a.O)),u=a.U,f=a.g,g=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(tr[0]=R.toString()),R=tr);for(var x=0;x<R.length;x++){var K=U(f,R[x],g||u.handleEvent,!1,u.h||u);if(!K)break;u.g[K.key]=K}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),mi(),Bv(a.i,a.u,a.A,a.l,a.R,a.m)}nr.prototype.ca=function(a){a=a.target;const u=this.M;u&&Nn(a)==3?u.j():this.Y(a)},nr.prototype.Y=function(a){try{if(a==this.g)e:{const yt=Nn(this.g);var u=this.g.Ba();const ys=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||Bd(this.g)))){this.J||yt!=4||u==7||(u==8||0>=ys?mi(3):mi(2)),sc(this);var f=this.g.Z();this.X=f;t:if(vd(this)){var g=Bd(this.g);a="";var R=g.length,x=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ur(this),yi(this);var K="";break t}this.h.i=new l.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(x&&u==R-1)});g.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=f==200,$v(this.i,this.u,this.A,this.l,this.R,yt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,ut=this.g;if((Ne=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Ne)){var Re=Ne;break t}}Re=null}if(f=Re)ms(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ic(this,f);else{this.o=!1,this.s=3,St(12),Ur(this),yi(this);break e}}if(this.P){f=!0;let cn;for(;!this.J&&this.C<K.length;)if(cn=qv(this,K),cn==nc){yt==4&&(this.s=4,St(14),f=!1),ms(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==yd){this.s=4,St(15),ms(this.i,this.l,K,"[Invalid Chunk]"),f=!1;break}else ms(this.i,this.l,cn,null),ic(this,cn);if(vd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||K.length!=0||this.h.h||(this.s=1,St(16),f=!1),this.o=this.o&&f,!f)ms(this.i,this.l,K,"[Invalid Chunked Response]"),Ur(this),yi(this);else if(0<K.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),hc(_t),_t.M=!0,St(11))}}else ms(this.i,this.l,K,null),ic(this,K);yt==4&&Ur(this),this.o&&!this.J&&(yt==4?Kd(this.j,this):(this.o=!1,Ho(this)))}else aE(this.g),f==400&&0<K.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Ur(this),yi(this)}}}catch{}finally{}};function vd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function qv(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?nc:(f=Number(u.substring(f,g)),isNaN(f)?yd:(g+=1,g+f>u.length?nc:(u=u.slice(g,g+f),a.C=g+f,u)))}nr.prototype.cancel=function(){this.J=!0,Ur(this)};function Ho(a){a.S=Date.now()+a.I,Ed(a,a.I)}function Ed(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=gi(m(a.ba,a),u)}function sc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}nr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(jv(this.i,this.A),this.L!=2&&(mi(),St(17)),Ur(this),this.s=2,yi(this)):Ed(this,this.S-a)};function yi(a){a.j.G==0||a.J||Kd(a.j,a)}function Ur(a){sc(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,fi(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function ic(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||oc(f.h,a))){if(!a.K&&oc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Xo(f),Yo(f);else break e;uc(f),St(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=gi(m(f.Za,f),6e3));if(1>=Id(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else $r(f,11)}else if((a.K||f.g==a)&&Xo(f),!$(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let Re=R[u];if(f.T=Re[0],Re=Re[1],f.G==2)if(Re[0]=="c"){f.K=Re[1],f.ia=Re[2];const _t=Re[3];_t!=null&&(f.la=_t,f.j.info("VER="+f.la));const yt=Re[4];yt!=null&&(f.Aa=yt,f.j.info("SVER="+f.Aa));const ys=Re[5];ys!=null&&typeof ys=="number"&&0<ys&&(g=1.5*ys,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const cn=a.g;if(cn){const ea=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ea){var x=g.h;x.g||ea.indexOf("spdy")==-1&&ea.indexOf("quic")==-1&&ea.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(ac(x,x.h),x.h=null))}if(g.D){const dc=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;dc&&(g.ya=dc,$e(g.I,g.D,dc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var K=a;if(g.qa=Yd(g,g.J?g.ia:null,g.W),K.K){Ad(g.h,K);var Ne=K,ut=g.L;ut&&(Ne.I=ut),Ne.B&&(sc(Ne),Ho(Ne)),g.g=K}else zd(g);0<f.i.length&&Jo(f)}else Re[0]!="stop"&&Re[0]!="close"||$r(f,7);else f.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?$r(f,7):cc(f):Re[0]!="noop"&&f.l&&f.l.ta(Re),f.v=0)}}mi(4)}catch{}}var zv=class{constructor(a,u){this.g=a,this.map=u}};function bd(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Td(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Id(a){return a.h?1:a.g?a.g.size:0}function oc(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function ac(a,u){a.g?a.g.add(u):a.h=u}function Ad(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}bd.prototype.cancel=function(){if(this.i=Cd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Cd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return k(a.i)}function Wv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],f=a.length,g=0;g<f;g++)u.push(a[g]);return u}u=[],f=0;for(g in a)u[f++]=a[g];return u}function Kv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const g in a)u[f++]=g;return u}}}function Sd(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=Kv(a),g=Wv(a),R=g.length,x=0;x<R;x++)u.call(void 0,g[x],f&&f[x],a)}var Rd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gv(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),R=null;if(0<=g){var x=a[f].substring(0,g);R=a[f].substring(g+1)}else x=a[f];u(x,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Br(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Br){this.h=a.h,qo(this,a.j),this.o=a.o,this.g=a.g,zo(this,a.s),this.l=a.l;var u=a.i,f=new Ei;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Pd(this,f),this.m=a.m}else a&&(u=String(a).match(Rd))?(this.h=!1,qo(this,u[1]||"",!0),this.o=wi(u[2]||""),this.g=wi(u[3]||"",!0),zo(this,u[4]),this.l=wi(u[5]||"",!0),Pd(this,u[6]||"",!0),this.m=wi(u[7]||"")):(this.h=!1,this.i=new Ei(null,this.h))}Br.prototype.toString=function(){var a=[],u=this.j;u&&a.push(vi(u,kd,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(vi(u,kd,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(vi(f,f.charAt(0)=="/"?Jv:Yv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",vi(f,Zv)),a.join("")};function Vn(a){return new Br(a)}function qo(a,u,f){a.j=f?wi(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function zo(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Pd(a,u,f){u instanceof Ei?(a.i=u,eE(a.i,a.h)):(f||(u=vi(u,Xv)),a.i=new Ei(u,a.h))}function $e(a,u,f){a.i.set(u,f)}function Wo(a){return $e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function wi(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function vi(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,Qv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Qv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var kd=/[#\/\?@]/g,Yv=/[#\?:]/g,Jv=/[#\?]/g,Xv=/[#\?@]/g,Zv=/#/g;function Ei(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function rr(a){a.g||(a.g=new Map,a.h=0,a.i&&Gv(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ei.prototype,t.add=function(a,u){rr(this),this.i=null,a=gs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function xd(a,u){rr(a),u=gs(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Dd(a,u){return rr(a),u=gs(a,u),a.g.has(u)}t.forEach=function(a,u){rr(this),this.g.forEach(function(f,g){f.forEach(function(R){a.call(u,R,g,this)},this)},this)},t.na=function(){rr(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const R=a[g];for(let x=0;x<R.length;x++)f.push(u[g])}return f},t.V=function(a){rr(this);let u=[];if(typeof a=="string")Dd(this,a)&&(u=u.concat(this.g.get(gs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return rr(this),this.i=null,a=gs(this,a),Dd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Od(a,u,f){xd(a,u),0<f.length&&(a.i=null,a.g.set(gs(a,u),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const x=encodeURIComponent(String(g)),K=this.V(g);for(g=0;g<K.length;g++){var R=x;K[g]!==""&&(R+="="+encodeURIComponent(String(K[g]))),a.push(R)}}return this.i=a.join("&")};function gs(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function eE(a,u){u&&!a.j&&(rr(a),a.i=null,a.g.forEach(function(f,g){var R=g.toLowerCase();g!=R&&(xd(this,g),Od(this,R,f))},a)),a.j=u}function tE(a,u){const f=new _i;if(l.Image){const g=new Image;g.onload=y(sr,f,"TestLoadImage: loaded",!0,u,g),g.onerror=y(sr,f,"TestLoadImage: error",!1,u,g),g.onabort=y(sr,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=y(sr,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function nE(a,u){const f=new _i,g=new AbortController,R=setTimeout(()=>{g.abort(),sr(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(x=>{clearTimeout(R),x.ok?sr(f,"TestPingServer: ok",!0,u):sr(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),sr(f,"TestPingServer: error",!1,u)})}function sr(a,u,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function rE(){this.g=new Uo}function sE(a,u,f){const g=f||"";try{Sd(a,function(R,x){let K=R;h(R)&&(K=ct(R)),u.push(g+x+"="+encodeURIComponent(K))})}catch(R){throw u.push(g+"type="+encodeURIComponent("_badmap")),R}}function Ko(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Ko,Xl),Ko.prototype.g=function(){return new Go(this.l,this.j)},Ko.prototype.i=function(a){return function(){return a}}({});function Go(a,u){ae.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Go,ae),t=Go.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Ti(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ti(this)),this.g&&(this.readyState=3,Ti(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?bi(this):Ti(this),this.readyState==3&&Vd(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,bi(this))},t.Qa=function(a){this.g&&(this.response=a,bi(this))},t.ga=function(){this.g&&bi(this)};function bi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ti(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Ti(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Go.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Nd(a){let u="";return ye(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function lc(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Nd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):$e(a,u,f))}function Ge(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ge,ae);var iE=/^https?$/i,oE=["POST","PUT"];t=Ge.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():tc.g(),this.v=this.o?ud(this.o):ud(tc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(x){Ld(this,x);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())f.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(x=>x.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(oE,u,void 0))||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,K]of f)this.g.setRequestHeader(x,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ud(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){Ld(this,x)}};function Ld(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Md(a),Qo(a)}function Md(a){a.A||(a.A=!0,ge(a,"complete"),ge(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ge(this,"complete"),ge(this,"abort"),Qo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qo(this,!0)),Ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Fd(this):this.bb())},t.bb=function(){Fd(this)};function Fd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Nn(a)!=4||a.Z()!=2)){if(a.u&&Nn(a)==4)mt(a.Ea,0,a);else if(ge(a,"readystatechange"),Nn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=K===0){var R=String(a.D).match(Rd)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),g=!iE.test(R?R.toLowerCase():"")}f=g}if(f)ge(a,"complete"),ge(a,"success");else{a.m=6;try{var x=2<Nn(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",Md(a)}}finally{Qo(a)}}}}function Qo(a,u){if(a.g){Ud(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ge(a,"ready");try{f.onreadystatechange=g}catch{}}}function Ud(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Nn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Zt(u)}};function Bd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function aE(a){const u={};a=(a.g&&2<=Nn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if($(a[g]))continue;var f=A(a[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const x=u[R]||[];u[R]=x,x.push(f)}I(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ii(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function $d(a){this.Aa=0,this.i=[],this.j=new _i,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ii("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ii("baseRetryDelayMs",5e3,a),this.cb=Ii("retryDelaySeedMs",1e4,a),this.Wa=Ii("forwardChannelMaxRetries",2,a),this.wa=Ii("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new bd(a&&a.concurrentRequestLimit),this.Da=new rE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=$d.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,g){St(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Yd(this,null,this.W),Jo(this)};function cc(a){if(jd(a),a.G==3){var u=a.U++,f=Vn(a.I);if($e(f,"SID",a.K),$e(f,"RID",u),$e(f,"TYPE","terminate"),Ai(a,f),u=new nr(a,a.j,u),u.L=2,u.v=Wo(Vn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Jd(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ho(u)}Qd(a)}function Yo(a){a.g&&(hc(a),a.g.cancel(),a.g=null)}function jd(a){Yo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Xo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Jo(a){if(!Td(a.h)&&!a.s){a.s=!0;var u=a.Ga;de||ln(),ve||(de(),ve=!0),jt.add(u,a),a.B=0}}function lE(a,u){return Id(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=gi(m(a.Ga,a,u),Gd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new nr(this,this.j,a);let x=this.o;if(this.S&&(x?(x=_(x),T(x,this.S)):x=this.S),this.m!==null||this.O||(R.H=x,x=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=qd(this,R,u),f=Vn(this.I),$e(f,"RID",a),$e(f,"CVER",22),this.D&&$e(f,"X-HTTP-Session-Id",this.D),Ai(this,f),x&&(this.O?u="headers="+encodeURIComponent(String(Nd(x)))+"&"+u:this.m&&lc(f,this.m,x)),ac(this.h,R),this.Ua&&$e(f,"TYPE","init"),this.P?($e(f,"$req",u),$e(f,"SID","null"),R.T=!0,rc(R,f,null)):rc(R,f,u),this.G=2}}else this.G==3&&(a?Hd(this,a):this.i.length==0||Td(this.h)||Hd(this))};function Hd(a,u){var f;u?f=u.l:f=a.U++;const g=Vn(a.I);$e(g,"SID",a.K),$e(g,"RID",f),$e(g,"AID",a.T),Ai(a,g),a.m&&a.o&&lc(g,a.m,a.o),f=new nr(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=qd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ac(a.h,f),rc(f,g,u)}function Ai(a,u){a.H&&ye(a.H,function(f,g){$e(u,g,f)}),a.l&&Sd({},function(f,g){$e(u,g,f)})}function qd(a,u,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var R=a.i;let x=-1;for(;;){const K=["count="+f];x==-1?0<f?(x=R[0].g,K.push("ofs="+x)):x=0:K.push("ofs="+x);let Ne=!0;for(let ut=0;ut<f;ut++){let Re=R[ut].g;const _t=R[ut].map;if(Re-=x,0>Re)x=Math.max(0,R[ut].g-100),Ne=!1;else try{sE(_t,K,"req"+Re+"_")}catch{g&&g(_t)}}if(Ne){g=K.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,g}function zd(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;de||ln(),ve||(de(),ve=!0),jt.add(u,a),a.v=0}}function uc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=gi(m(a.Fa,a),Gd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Wd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=gi(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),Yo(this),Wd(this))};function hc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Wd(a){a.g=new nr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=Vn(a.qa);$e(u,"RID","rpc"),$e(u,"SID",a.K),$e(u,"AID",a.T),$e(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&$e(u,"TO",a.ja),$e(u,"TYPE","xmlhttp"),Ai(a,u),a.m&&a.o&&lc(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Wo(Vn(u)),f.m=null,f.P=!0,wd(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Yo(this),uc(this),St(19))};function Xo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Kd(a,u){var f=null;if(a.g==u){Xo(a),hc(a),a.g=null;var g=2}else if(oc(a.h,u))f=u.D,Ad(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=a.B;g=Bo(),ge(g,new md(g,f)),Jo(a)}else zd(a);else if(R=u.s,R==3||R==0&&0<u.X||!(g==1&&lE(a,u)||g==2&&uc(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),R){case 1:$r(a,5);break;case 4:$r(a,10);break;case 3:$r(a,6);break;default:$r(a,2)}}}function Gd(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function $r(a,u){if(a.j.info("Error code "+u),u==2){var f=m(a.fb,a),g=a.Xa;const R=!g;g=new Br(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||qo(g,"https"),Wo(g),R?tE(g.toString(),f):nE(g.toString(),f)}else St(2);a.G=0,a.l&&a.l.sa(u),Qd(a),jd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Qd(a){if(a.G=0,a.ka=[],a.l){const u=Cd(a.h);(u.length!=0||a.i.length!=0)&&(O(a.ka,u),O(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Yd(a,u,f){var g=f instanceof Br?Vn(f):new Br(f);if(g.g!="")u&&(g.g=u+"."+g.g),zo(g,g.s);else{var R=l.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var x=new Br(null);g&&qo(x,g),u&&(x.g=u),R&&zo(x,R),f&&(x.l=f),g=x}return f=a.D,u=a.ya,f&&u&&$e(g,f,u),$e(g,"VER",a.la),Ai(a,g),g}function Jd(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Ge(new Ko({eb:f})):new Ge(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xd(){}t=Xd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Zo(){}Zo.prototype.g=function(a,u){return new Ht(a,u)};function Ht(a,u){ae.call(this),this.g=new $d(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!$(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new _s(this)}P(Ht,ae),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){cc(this.g)},Ht.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ct(a),a=f);u.i.push(new zv(u.Ya++,a)),u.G==3&&Jo(u)},Ht.prototype.N=function(){this.g.l=null,delete this.j,cc(this.g),delete this.g,Ht.aa.N.call(this)};function Zd(a){Zl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}P(Zd,Zl);function ef(){ec.call(this),this.status=1}P(ef,ec);function _s(a){this.g=a}P(_s,Xd),_s.prototype.ua=function(){ge(this.g,"a")},_s.prototype.ta=function(a){ge(this.g,new Zd(a))},_s.prototype.sa=function(a){ge(this.g,new ef)},_s.prototype.ra=function(){ge(this.g,"b")},Zo.prototype.createWebChannel=Zo.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,J_=function(){return new Zo},Y_=function(){return Bo()},Q_=Fr,lu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$o.NO_ERROR=0,$o.TIMEOUT=8,$o.HTTP_ERROR=6,wa=$o,gd.COMPLETE="complete",G_=gd,hd.EventType=pi,pi.OPEN="a",pi.CLOSE="b",pi.ERROR="c",pi.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Di=hd,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,K_=Ge}).apply(typeof ia<"u"?ia:typeof self<"u"?self:typeof window<"u"?window:{});const hp="@firebase/firestore",dp="4.7.9";/**
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
 */let ri="11.4.0";/**
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
 */const ss=new Yu("@firebase/firestore");function bs(){return ss.logLevel}function X(t,...e){if(ss.logLevel<=Ee.DEBUG){const n=e.map(lh);ss.debug(`Firestore (${ri}): ${t}`,...n)}}function Yn(t,...e){if(ss.logLevel<=Ee.ERROR){const n=e.map(lh);ss.error(`Firestore (${ri}): ${t}`,...n)}}function qs(t,...e){if(ss.logLevel<=Ee.WARN){const n=e.map(lh);ss.warn(`Firestore (${ri}): ${t}`,...n)}}function lh(t){if(typeof t=="string")return t;try{/**
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
 */function he(t="Unexpected state"){const e=`FIRESTORE (${ri}) INTERNAL ASSERTION FAILED: `+t;throw Yn(e),new Error(e)}function Ve(t,e){t||he()}function pe(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends Zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Wn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class X_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class FC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class UC{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ve(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Wn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string"),new X_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new vt(e)}}class BC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class $C{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new BC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jC{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,tn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ve(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new fp(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new fp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function HC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Z_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=HC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function zs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const pp=-62135596800,mp=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*mp);return new nt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<pp)throw new Z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mp}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-pp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */const gp="__name__";class En{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return En.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof En?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=En.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=En.isNumericId(e),s=En.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?En.extractNumericId(e).compare(En.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ir.fromString(e.substring(4,e.length-2))}}class je extends En{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new je(n)}static emptyPath(){return new je([])}}const qC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends En{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return qC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===gp}static keyField(){return new ft([gp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Z(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Z(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
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
 */const io=-1;function zC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=fe.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new Cr(s,re.empty(),e)}function WC(t){return new Cr(t.readTime,t.key,io)}class Cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Cr(fe.min(),re.empty(),io)}static max(){return new Cr(fe.max(),re.empty(),io)}}function KC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
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
 */const GC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function si(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==GC)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{o[h]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function YC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ii(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Cl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Cl.ae=-1;/**
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
 */const ch=-1;function Sl(t){return t==null}function Ha(t){return t===0&&1/t==-1/0}function JC(t){return typeof t=="number"&&Number.isInteger(t)&&!Ha(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const ey="";function XC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=_p(e)),e=ZC(t.get(n),e);return _p(e)}function ZC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case ey:n+="";break;default:n+=i}}return n}function _p(t){return t+ey+""}/**
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
 */function yp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ty(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oa(this.root,e,this.comparator,!1)}getReverseIterator(){return new oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oa(this.root,e,this.comparator,!0)}}class oa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ht.RED,this.left=s??ht.EMPTY,this.right=i??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ht(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new wp(this.data.getIterator())}getIteratorFrom(e){return new wp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class wp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new rt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ny extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ny("Invalid base64 string: "+i):i}}(e);return new pt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const eS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=eS.exec(t);if(Ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rr(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
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
 */const ry="server_timestamp",sy="__type__",iy="__previous_value__",oy="__local_write_time__";function uh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[sy])===null||n===void 0?void 0:n.stringValue)===ry}function Rl(t){const e=t.mapValue.fields[iy];return uh(e)?Rl(e):e}function oo(t){const e=Sr(t.mapValue.fields[oy].timestampValue);return new nt(e.seconds,e.nanos)}/**
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
 */class tS{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}const qa="(default)";class ao{constructor(e,n){this.projectId=e,this.database=n||qa}static empty(){return new ao("","")}get isDefaultDatabase(){return this.database===qa}isEqual(e){return e instanceof ao&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ay="__type__",nS="__max__",aa={mapValue:{}},ly="__vector__",za="value";function Pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?uh(t)?4:sS(t)?9007199254740991:rS(t)?10:11:he()}function xn(t,e){if(t===e)return!0;const n=Pr(t);if(n!==Pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oo(t).isEqual(oo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Sr(s.timestampValue),l=Sr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Rr(s.bytesValue).isEqual(Rr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ye(s.doubleValue),l=Ye(i.doubleValue);return o===l?Ha(o)===Ha(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return zs(t.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(yp(o)!==yp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!xn(o[c],l[c])))return!1;return!0}(t,e);default:return he()}}function lo(t,e){return(t.values||[]).find(n=>xn(n,e))!==void 0}function Ws(t,e){if(t===e)return 0;const n=Pr(t),r=Pr(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ye(i.integerValue||i.doubleValue),c=Ye(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return vp(t.timestampValue,e.timestampValue);case 4:return vp(oo(t),oo(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Rr(i),c=Rr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=Te(l[h],c[h]);if(d!==0)return d}return Te(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Te(Ye(i.latitude),Ye(o.latitude));return l!==0?l:Te(Ye(i.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ep(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,d;const p=i.fields||{},m=o.fields||{},y=(l=p[za])===null||l===void 0?void 0:l.arrayValue,P=(c=m[za])===null||c===void 0?void 0:c.arrayValue,k=Te(((h=y==null?void 0:y.values)===null||h===void 0?void 0:h.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Ep(y,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===aa.mapValue&&o===aa.mapValue)return 0;if(i===aa.mapValue)return 1;if(o===aa.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Te(c[p],d[p]);if(m!==0)return m;const y=Ws(l[c[p]],h[d[p]]);if(y!==0)return y}return Te(c.length,d.length)}(t.mapValue,e.mapValue);default:throw he()}}function vp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Sr(t),r=Sr(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function Ep(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ws(n[s],r[s]);if(i)return i}return Te(n.length,r.length)}function Ks(t){return cu(t)}function cu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Rr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=cu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${cu(n.fields[o])}`;return s+"}"}(t.mapValue):he()}function va(t){switch(Pr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Rl(t);return e?16+va(e):16;case 5:return 2*t.stringValue.length;case 6:return Rr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+va(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Lr(r.fields,(i,o)=>{s+=i.length+va(o)}),s}(t.mapValue);default:throw he()}}function bp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function uu(t){return!!t&&"integerValue"in t}function hh(t){return!!t&&"arrayValue"in t}function Tp(t){return!!t&&"nullValue"in t}function Ip(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ea(t){return!!t&&"mapValue"in t}function rS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[ay])===null||n===void 0?void 0:n.stringValue)===ly}function qi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Lr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===nS}/**
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
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ea(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qi(n)}setAll(e){let n=ft.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=qi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ea(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ea(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Lr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ut(qi(this.value))}}function cy(t){const e=[];return Lr(t.fields,(n,r)=>{const s=new ft([n]);if(Ea(r)){const i=cy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Wt(e)}/**
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
 */class Wa{constructor(e,n){this.position=e,this.inclusive=n}}function Ap(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=Ws(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class co{constructor(e,n="asc"){this.field=e,this.dir=n}}function iS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class uy{}class et extends uy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new aS(e,n,r):n==="array-contains"?new uS(e,r):n==="in"?new hS(e,r):n==="not-in"?new dS(e,r):n==="array-contains-any"?new fS(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new lS(e,r):new cS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ws(n,this.value)):n!==null&&Pr(this.value)===Pr(n)&&this.matchesComparison(Ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends uy{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new pn(e,n)}matches(e){return hy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function hy(t){return t.op==="and"}function dy(t){return oS(t)&&hy(t)}function oS(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function hu(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Ks(t.value);if(dy(t))return t.filters.map(e=>hu(e)).join(",");{const e=t.filters.map(n=>hu(n)).join(",");return`${t.op}(${e})`}}function fy(t,e){return t instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&xn(r.value,s.value)}(t,e):t instanceof pn?function(r,s){return s instanceof pn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&fy(o,s.filters[l]),!0):!1}(t,e):void he()}function py(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${Ks(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(py).join(" ,")+"}"}(t):"Filter"}class aS extends et{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class lS extends et{constructor(e,n){super(e,"in",n),this.keys=my("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cS extends et{constructor(e,n){super(e,"not-in",n),this.keys=my("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function my(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class uS extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hh(n)&&lo(n.arrayValue,this.value)}}class hS extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&lo(this.value.arrayValue,n)}}class dS extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!lo(this.value.arrayValue,n)}}class fS extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>lo(this.value.arrayValue,r))}}/**
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
 */class pS{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.le=null}}function Sp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new pS(t,e,n,r,s,i,o)}function dh(t){const e=pe(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Sl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ks(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ks(r)).join(",")),e.le=n}return e.le}function fh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Cp(t.startAt,e.startAt)&&Cp(t.endAt,e.endAt)}function du(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class oi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function mS(t,e,n,r,s,i,o,l){return new oi(t,e,n,r,s,i,o,l)}function ph(t){return new oi(t)}function Rp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gy(t){return t.collectionGroup!==null}function zi(t){const e=pe(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new rt(ft.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new co(i,r))}),n.has(ft.keyField().canonicalString())||e.he.push(new co(ft.keyField(),r))}return e.he}function Sn(t){const e=pe(t);return e.Pe||(e.Pe=gS(e,zi(t))),e.Pe}function gS(t,e){if(t.limitType==="F")return Sp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new co(s.field,i)});const n=t.endAt?new Wa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Wa(t.startAt.position,t.startAt.inclusive):null;return Sp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function fu(t,e){const n=t.filters.concat([e]);return new oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function pu(t,e,n){return new oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pl(t,e){return fh(Sn(t),Sn(e))&&t.limitType===e.limitType}function _y(t){return`${dh(Sn(t))}|lt:${t.limitType}`}function Ts(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>py(s)).join(", ")}]`),Sl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ks(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ks(s)).join(",")),`Target(${r})`}(Sn(t))}; limitType=${t.limitType})`}function kl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of zi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=Ap(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,zi(r),s)||r.endAt&&!function(o,l,c){const h=Ap(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,zi(r),s))}(t,e)}function _S(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yy(t){return(e,n)=>{let r=!1;for(const s of zi(t)){const i=yS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yS(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Ws(c,h):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
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
 */class us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Lr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ty(this.inner)}size(){return this.innerSize}}/**
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
 */const wS=new Ke(re.comparator);function Jn(){return wS}const wy=new Ke(re.comparator);function Oi(...t){let e=wy;for(const n of t)e=e.insert(n.key,n);return e}function vy(t){let e=wy;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Gr(){return Wi()}function Ey(){return Wi()}function Wi(){return new us(t=>t.toString(),(t,e)=>t.isEqual(e))}const vS=new Ke(re.comparator),ES=new rt(re.comparator);function be(...t){let e=ES;for(const n of t)e=e.add(n);return e}const bS=new rt(Te);function TS(){return bS}/**
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
 */function mh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ha(e)?"-0":e}}function by(t){return{integerValue:""+t}}function IS(t,e){return JC(e)?by(e):mh(t,e)}/**
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
 */class xl{constructor(){this._=void 0}}function AS(t,e,n){return t instanceof uo?function(s,i){const o={fields:{[sy]:{stringValue:ry},[oy]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&uh(i)&&(i=Rl(i)),i&&(o.fields[iy]=i),{mapValue:o}}(n,e):t instanceof ho?Iy(t,e):t instanceof fo?Ay(t,e):function(s,i){const o=Ty(s,i),l=Pp(o)+Pp(s.Ie);return uu(o)&&uu(s.Ie)?by(l):mh(s.serializer,l)}(t,e)}function CS(t,e,n){return t instanceof ho?Iy(t,e):t instanceof fo?Ay(t,e):n}function Ty(t,e){return t instanceof Ka?function(r){return uu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class uo extends xl{}class ho extends xl{constructor(e){super(),this.elements=e}}function Iy(t,e){const n=Cy(e);for(const r of t.elements)n.some(s=>xn(s,r))||n.push(r);return{arrayValue:{values:n}}}class fo extends xl{constructor(e){super(),this.elements=e}}function Ay(t,e){let n=Cy(e);for(const r of t.elements)n=n.filter(s=>!xn(s,r));return{arrayValue:{values:n}}}class Ka extends xl{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Pp(t){return Ye(t.integerValue||t.doubleValue)}function Cy(t){return hh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class SS{constructor(e,n){this.field=e,this.transform=n}}function RS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ho&&s instanceof ho||r instanceof fo&&s instanceof fo?zs(r.elements,s.elements,xn):r instanceof Ka&&s instanceof Ka?xn(r.Ie,s.Ie):r instanceof uo&&s instanceof uo}(t.transform,e.transform)}class PS{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ba(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Dl{}function Sy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Py(t.key,dn.none()):new Ro(t.key,t.data,dn.none());{const n=t.data,r=Ut.empty();let s=new rt(ft.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Mr(t.key,r,new Wt(s.toArray()),dn.none())}}function kS(t,e,n){t instanceof Ro?function(s,i,o){const l=s.value.clone(),c=xp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Mr?function(s,i,o){if(!ba(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=xp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Ry(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ki(t,e,n,r){return t instanceof Ro?function(i,o,l,c){if(!ba(i.precondition,o))return l;const h=i.value.clone(),d=Dp(i.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mr?function(i,o,l,c){if(!ba(i.precondition,o))return l;const h=Dp(i.fieldTransforms,c,o),d=o.data;return d.setAll(Ry(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return ba(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function xS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ty(r.transform,s||null);i!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,i))}return n||null}function kp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&zs(r,s,(i,o)=>RS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ro extends Dl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mr extends Dl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ry(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function xp(t,e,n){const r=new Map;Ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,CS(o,l,n[s]))}return r}function Dp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,AS(i,o,e))}return r}class Py extends Dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DS extends Dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class OS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&kS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ki(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ki(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ey();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Sy(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),be())}isEqual(e){return this.batchId===e.batchId&&zs(this.mutations,e.mutations,(n,r)=>kp(n,r))&&zs(this.baseMutations,e.baseMutations,(n,r)=>kp(n,r))}}class gh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length);let s=function(){return vS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new gh(e,n,r,s)}}/**
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
 */class VS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class NS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ze,Ae;function LS(t){switch(t){case L.OK:return he();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return he()}}function ky(t){if(t===void 0)return Yn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ze.OK:return L.OK;case Ze.CANCELLED:return L.CANCELLED;case Ze.UNKNOWN:return L.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return L.INTERNAL;case Ze.UNAVAILABLE:return L.UNAVAILABLE;case Ze.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ze.NOT_FOUND:return L.NOT_FOUND;case Ze.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ze.ABORTED:return L.ABORTED;case Ze.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ze.DATA_LOSS:return L.DATA_LOSS;default:return he()}}(Ae=Ze||(Ze={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function MS(){return new TextEncoder}/**
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
 */const FS=new Ir([4294967295,4294967295],0);function Op(t){const e=MS().encode(t),n=new W_;return n.update(e),new Uint8Array(n.digest())}function Vp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ir([n,r],0),new Ir([s,i],0)]}class _h{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Vi(`Invalid padding: ${n}`);if(r<0)throw new Vi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Vi(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Ir.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(Ir.fromNumber(r)));return s.compare(FS)===1&&(s=new Ir([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=Op(e),[r,s]=Vp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new _h(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ee===0)return;const n=Op(e),[r,s]=Vp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Vi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ol{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Po.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ol(fe.min(),s,new Ke(Te),Jn(),be())}}class Po{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Po(r,n,be(),be(),be())}}/**
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
 */class Ta{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class xy{constructor(e,n){this.targetId=e,this.ge=n}}class Dy{constructor(e,n,r=pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Np{constructor(){this.pe=0,this.ye=Lp(),this.we=pt.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=be(),n=be(),r=be();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new Po(this.we,this.be,e,n,r)}Me(){this.Se=!1,this.ye=Lp()}xe(e,n){this.Se=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ve(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class US{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Jn(),this.$e=la(),this.Ke=la(),this.Ue=new Ke(Te)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(du(i))if(r===0){const o=new re(i.path);this.ze(n,o,Tt.newNoDocument(o,fe.min()))}else Ve(r===1);else{const o=this.et(n);if(o!==r){const l=this.tt(e),c=l?this.nt(l,e,o):1;if(c!==0){this.Ye(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,h)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Rr(r).toUint8Array()}catch(c){if(c instanceof ny)return qs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new _h(o,s,i)}catch(c){return qs(c instanceof Vi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.it(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,o)=>{const l=this.Xe(o);if(l){if(i.current&&du(l.target)){const c=new re(l.target.path);this._t(c).has(o)||this.ut(o,c)||this.ze(o,c,Tt.newNoDocument(c,e))}i.ve&&(n.set(o,i.Fe()),i.Me())}});let r=be();this.Ke.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Xe(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new Ol(e,n,this.Ue,this.Qe,r);return this.Qe=Jn(),this.$e=la(),this.Ke=la(),this.Ue=new Ke(Te),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new Np,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new rt(Te),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new rt(Te),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Np),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function la(){return new Ke(re.comparator)}function Lp(){return new Ke(re.comparator)}const BS={asc:"ASCENDING",desc:"DESCENDING"},$S={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jS={and:"AND",or:"OR"};class HS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function mu(t,e){return t.useProto3Json||Sl(e)?e:{value:e}}function Ga(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Oy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qS(t,e){return Ga(t,e.toTimestamp())}function Rn(t){return Ve(!!t),fe.fromTimestamp(function(n){const r=Sr(n);return new nt(r.seconds,r.nanos)}(t))}function yh(t,e){return gu(t,e).canonicalString()}function gu(t,e){const n=function(s){return new je(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Vy(t){const e=je.fromString(t);return Ve(Uy(e)),e}function _u(t,e){return yh(t.databaseId,e.path)}function xc(t,e){const n=Vy(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(Ly(n))}function Ny(t,e){return yh(t.databaseId,e)}function zS(t){const e=Vy(t);return e.length===4?je.emptyPath():Ly(e)}function yu(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ly(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Mp(t,e,n){return{name:_u(t,e),fields:n.value.mapValue.fields}}function WS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ve(d===void 0||typeof d=="string"),pt.fromBase64String(d||"")):(Ve(d===void 0||d instanceof Buffer||d instanceof Uint8Array),pt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?L.UNKNOWN:ky(h.code);return new Z(d,h.message||"")}(o);n=new Dy(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xc(t,r.document.name),i=Rn(r.document.updateTime),o=r.document.createTime?Rn(r.document.createTime):fe.min(),l=new Ut({mapValue:{fields:r.document.fields}}),c=Tt.newFoundDocument(s,i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Ta(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xc(t,r.document),i=r.readTime?Rn(r.readTime):fe.min(),o=Tt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ta([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xc(t,r.document),i=r.removedTargetIds||[];n=new Ta([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new NS(s,i),l=r.targetId;n=new xy(l,o)}}return n}function KS(t,e){let n;if(e instanceof Ro)n={update:Mp(t,e.key,e.value)};else if(e instanceof Py)n={delete:_u(t,e.key)};else if(e instanceof Mr)n={update:Mp(t,e.key,e.data),updateMask:nR(e.fieldMask)};else{if(!(e instanceof DS))return he();n={verify:_u(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof uo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ho)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof fo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ka)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:qS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function GS(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Rn(s.updateTime):Rn(i);return o.isEqual(fe.min())&&(o=Rn(i)),new PS(o,s.transformResults||[])}(n,e))):[]}function QS(t,e){return{documents:[Ny(t,e.path)]}}function YS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ny(t,s);const i=function(h){if(h.length!==0)return Fy(pn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:Is(m.field),direction:ZS(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=mu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:n,parent:s}}function JS(t){let e=zS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=My(p);return m instanceof pn&&dy(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new co(As(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Sl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,y=p.values||[];return new Wa(y,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,y=p.values||[];return new Wa(y,m)}(n.endAt)),mS(e,s,o,i,l,"F",c,h)}function XS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function My(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=As(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=As(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=As(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=As(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return et.create(As(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>My(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function ZS(t){return BS[t]}function eR(t){return $S[t]}function tR(t){return jS[t]}function Is(t){return{fieldPath:t.canonicalString()}}function As(t){return ft.fromServerFormat(t.fieldPath)}function Fy(t){return t instanceof et?function(n){if(n.op==="=="){if(Ip(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NAN"}};if(Tp(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ip(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NAN"}};if(Tp(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Is(n.field),op:eR(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(s=>Fy(s));return r.length===1?r[0]:{compositeFilter:{op:tR(n.op),filters:r}}}(t):he()}function nR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Uy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class rR{constructor(e){this.Tt=e}}function sR(t){const e=JS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pu(e,e.limit,"L"):e}/**
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
 */class iR{constructor(){this.Tn=new oR}addToCollectionParentIndex(e,n){return this.Tn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Cr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Cr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class oR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new rt(je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new rt(je.comparator)).toArray()}}/**
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
 */const Fp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},By=41943040;class Ft{static withCacheSize(e){return new Ft(e,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ft.DEFAULT_COLLECTION_PERCENTILE=10,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ft.DEFAULT=new Ft(By,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ft.DISABLED=new Ft(-1,0,0);/**
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
 */class Gs{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Gs(0)}static Un(){return new Gs(-1)}}/**
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
 */const Up="LruGarbageCollector",aR=1048576;function Bp([t,e],[n,r]){const s=Te(t,n);return s===0?Te(e,r):s}class lR{constructor(e){this.Hn=e,this.buffer=new rt(Bp),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Bp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class cR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){X(Up,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ii(n)?X(Up,"Ignoring IndexedDB error during garbage collection: ",n):await si(n)}await this.er(3e5)})}}class uR{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Cl.ae);const r=new lR(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Fp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fp):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,o,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),bs()<=Ee.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function hR(t,e){return new uR(t,e)}/**
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
 */class dR{constructor(){this.changes=new us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class fR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class pR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ki(r.mutation,s,Wt.empty(),nt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,be()).next(()=>r))}getLocalViewOfDocuments(e,n,r=be()){const s=Gr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Oi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Gr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,be()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Jn();const o=Wi(),l=function(){return Wi()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Mr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),Ki(d.mutation,h,d.mutation.getFieldMask(),nt.now())):o.set(h.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new fR(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Wi();let s=new Ke((o,l)=>o-l),i=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Wt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||be()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Ey();d.forEach(m=>{if(!i.has(m)){const y=Sy(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Gr());let l=io,c=i;return o.next(h=>F.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,be())).next(d=>({batchId:l,changes:vy(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=Oi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Oi();return this.indexManager.getCollectionParents(e,i).next(l=>F.forEach(l,c=>{const h=function(p,m){return new oi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,Tt.newInvalidDocument(d)))});let l=Oi();return o.forEach((c,h)=>{const d=i.get(c);d!==void 0&&Ki(d.mutation,h,Wt.empty(),nt.now()),kl(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class mR{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return F.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Rn(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:sR(s.bundledQuery),readTime:Rn(s.readTime)}}(n)),F.resolve()}}/**
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
 */class gR{constructor(){this.overlays=new Ke(re.comparator),this.Rr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Gr();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Gr(),i=n.length+1,o=new re(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ke((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Gr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Gr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return F.resolve(l)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new VS(n,r));let i=this.Rr.get(n);i===void 0&&(i=be(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
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
 */class _R{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class wh{constructor(){this.Vr=new rt(st.mr),this.gr=new rt(st.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new st(e,n))}br(e,n){e.forEach(r=>this.removeReference(r,n))}Sr(e){const n=new re(new je([])),r=new st(n,e),s=new st(n,e+1),i=[];return this.gr.forEachInRange([r,s],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new re(new je([])),r=new st(n,e),s=new st(n,e+1);let i=be();return this.gr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new st(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return re.comparator(e.key,n.key)||Te(e.Cr,n.Cr)}static pr(e,n){return Te(e.Cr,n.Cr)||re.comparator(e.key,n.key)}}/**
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
 */class yR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new rt(st.mr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new OS(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Mr=this.Mr.add(new st(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?ch:this.Fr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),s=new st(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],o=>{const l=this.Or(o.Cr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(Te);return n.forEach(s=>{const i=new st(s,0),o=new st(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],l=>{r=r.add(l.Cr)})}),F.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new st(new re(i),0);let l=new rt(Te);return this.Mr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Cr)),!0)},o),F.resolve(this.Br(l))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ve(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return F.forEach(n.mutations,s=>{const i=new st(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new st(n,0),s=this.Mr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class wR{constructor(e){this.kr=e,this.docs=function(){return new Ke(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let r=Jn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Tt.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Jn();const o=n.path,l=new re(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||KC(WC(d),r)<=0||(s.has(d.key)||kl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}qr(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new vR(this)}getSize(e){return F.resolve(this.size)}}class vR extends dR{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
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
 */class ER{constructor(e){this.persistence=e,this.Qr=new us(n=>dh(n),fh),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.$r=0,this.Kr=new wh,this.targetCount=0,this.Ur=Gs.Kn()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),F.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new Gs(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.zn(n),F.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Kr.yr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Kr.br(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Kr.vr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Kr.containsKey(n))}}/**
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
 */class $y{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Cl(0),this.zr=!1,this.zr=!0,this.jr=new _R,this.referenceDelegate=e(this),this.Hr=new ER(this),this.indexManager=new iR,this.remoteDocumentCache=function(s){return new wR(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new rR(n),this.Yr=new mR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new yR(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new bR(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return F.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class bR extends QC{constructor(e){super(),this.currentSequenceNumber=e}}class vh{constructor(e){this.persistence=e,this.ti=new wh,this.ni=null}static ri(e){return new vh(e)}get ii(){if(this.ni)return this.ni;throw he()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),F.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.ii,r=>{const s=re.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,fe.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return F.or([()=>F.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class Qa{constructor(e,n){this.persistence=e,this.oi=new us(r=>XC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=hR(this,n)}static ri(e,n){return new Qa(e,n)}Zr(){}Xr(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return F.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?F.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,n).next(l=>{l||(r++,i.removeEntry(o,fe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),F.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=va(e.data.value)),n}ar(e,n,r){return F.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Eh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=be(),s=be();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Eh(e,n.fromCache,r,s)}}/**
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
 */class TR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class IR{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return s0()?8:YC(At())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new TR;return this._s(e,n,o).next(l=>{if(i.result=l,this.Xi)return this.us(e,n,o,l.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(bs()<=Ee.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Ts(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),F.resolve()):(bs()<=Ee.DEBUG&&X("QueryEngine","Query:",Ts(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(bs()<=Ee.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Ts(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Sn(n))):F.resolve())}rs(e,n){if(Rp(n))return F.resolve(null);let r=Sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=pu(n,null,"F"),r=Sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=be(...i);return this.ns.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.cs(n,l);return this.ls(n,h,o,c.readTime)?this.rs(e,pu(n,null,"F")):this.hs(e,h,n,c)}))})))}ss(e,n,r,s){return Rp(n)||s.isEqual(fe.min())?F.resolve(null):this.ns.getDocuments(e,r).next(i=>{const o=this.cs(n,i);return this.ls(n,o,r,s)?F.resolve(null):(bs()<=Ee.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ts(n)),this.hs(e,o,n,zC(s,io)).next(l=>l))})}cs(e,n){let r=new rt(yy(e));return n.forEach((s,i)=>{kl(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return bs()<=Ee.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Ts(n)),this.ns.getDocumentsMatchingQuery(e,n,Cr.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const bh="LocalStore",AR=3e8;class CR{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new Ke(Te),this.Is=new us(i=>dh(i),fh),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pR(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function SR(t,e,n,r){return new CR(t,e,n,r)}async function jy(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=be();for(const h of s){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Rs:h,removedBatchIds:o,addedBatchIds:l}))})})}function RR(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,m=p.keys();let y=F.resolve();return m.forEach(P=>{y=y.next(()=>d.getEntry(c,P)).next(k=>{const O=h.docVersions.get(P);Ve(O!==null),k.version.compareTo(O)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),d.addEntry(k)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=be();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Hy(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function PR(t,e){const n=pe(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Hr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Hr.addMatchingKeys(i,d.addedDocuments,p)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(pt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),s=s.insert(p,y),function(k,O,j){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=AR?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(m,y,d)&&l.push(n.Hr.updateTargetData(i,y))});let c=Jn(),h=be();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(kR(i,o,e.documentUpdates).next(d=>{c=d.Vs,h=d.fs})),!r.isEqual(fe.min())){const d=n.Hr.getLastRemoteSnapshotVersion(i).next(p=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return F.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.Ts=s,i))}function kR(t,e,n){let r=be(),s=be();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Jn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):X(bh,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Vs:o,fs:s}})}function xR(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ch),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function DR(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.Hr.allocateTargetId(r).next(o=>(s=new mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function wu(t,e,n){const r=pe(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ii(o))throw o;X(bh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function $p(t,e,n){const r=pe(t);let s=fe.min(),i=be();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const p=pe(c),m=p.Is.get(d);return m!==void 0?F.resolve(p.Ts.get(m)):p.Hr.getTargetData(h,d)}(r,o,Sn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?s:fe.min(),n?i:be())).next(l=>(OR(r,_S(e),l),{documents:l,gs:i})))}function OR(t,e,n){let r=t.Es.get(e)||fe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class jp{constructor(){this.activeTargetIds=TS()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VR{constructor(){this.ho=new jp,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new jp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class NR{To(e){}shutdown(){}}/**
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
 */const Hp="ConnectivityMonitor";class qp{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){X(Hp,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){X(Hp,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ca=null;function vu(){return ca===null?ca=function(){return 268435456+Math.round(2147483648*Math.random())}():ca++,"0x"+ca.toString(16)}/**
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
 */const Dc="RestConnection",LR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class MR{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===qa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}bo(e,n,r,s,i){const o=vu(),l=this.So(e,n.toUriEncodedString());X(Dc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,l,c,r).then(h=>(X(Dc,`Received RPC '${e}' ${o}: `,h),h),h=>{throw qs(Dc,`RPC '${e}' ${o} failed with error: `,h,"url: ",l,"request:",r),h})}Co(e,n,r,s,i,o){return this.bo(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ri}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}So(e,n){const r=LR[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
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
 */class FR{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */const wt="WebChannelConnection";class UR extends MR{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=vu();return new Promise((o,l)=>{const c=new K_;c.setWithCredentials(!0),c.listenOnce(G_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case wa.NO_ERROR:const d=c.getResponseJson();X(wt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case wa.TIMEOUT:X(wt,`RPC '${e}' ${i} timed out`),l(new Z(L.DEADLINE_EXCEEDED,"Request time out"));break;case wa.HTTP_ERROR:const p=c.getStatus();if(X(wt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const P=function(O){const j=O.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(j)>=0?j:L.UNKNOWN}(y.status);l(new Z(P,y.message))}else l(new Z(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Z(L.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{X(wt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(wt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Wo(e,n,r){const s=vu(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=J_(),l=Y_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");X(wt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,y=!1;const P=new FR({Fo:O=>{y?X(wt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(m||(X(wt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),X(wt,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Mo:()=>p.close()}),k=(O,j,$)=>{O.listen(j,H=>{try{$(H)}catch(z){setTimeout(()=>{throw z},0)}})};return k(p,Di.EventType.OPEN,()=>{y||(X(wt,`RPC '${e}' stream ${s} transport opened.`),P.Qo())}),k(p,Di.EventType.CLOSE,()=>{y||(y=!0,X(wt,`RPC '${e}' stream ${s} transport closed`),P.Ko())}),k(p,Di.EventType.ERROR,O=>{y||(y=!0,qs(wt,`RPC '${e}' stream ${s} transport errored:`,O),P.Ko(new Z(L.UNAVAILABLE,"The operation could not be completed")))}),k(p,Di.EventType.MESSAGE,O=>{var j;if(!y){const $=O.data[0];Ve(!!$);const H=$,z=(H==null?void 0:H.error)||((j=H[0])===null||j===void 0?void 0:j.error);if(z){X(wt,`RPC '${e}' stream ${s} received error:`,z);const ie=z.status;let ye=function(w){const T=Ze[w];if(T!==void 0)return ky(T)}(ie),I=z.message;ye===void 0&&(ye=L.INTERNAL,I="Unknown error status: "+ie+" with message "+z.message),y=!0,P.Ko(new Z(ye,I)),p.close()}else X(wt,`RPC '${e}' stream ${s} received:`,$),P.Uo($)}}),k(l,Q_.STAT_EVENT,O=>{O.stat===lu.PROXY?X(wt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===lu.NOPROXY&&X(wt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.$o()},0),P}}function Oc(){return typeof document<"u"?document:null}/**
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
 */function Vl(t){return new HS(t,!0)}/**
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
 */class qy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const zp="PersistentStream";class zy{constructor(e,n,r,s,i,o,l,c){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new qy(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new Z(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return X(zp,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(X(zp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BR extends zy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=WS(this.serializer,e),r=function(i){if(!("targetChange"in i))return fe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?Rn(o.readTime):fe.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=yu(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=du(c)?{documents:QS(i,c)}:{query:YS(i,c).ht},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Oy(i,o.resumeToken);const h=mu(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(fe.min())>0){l.readTime=Ga(i,o.snapshotVersion.toTimestamp());const h=mu(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=XS(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=yu(this.serializer),n.removeTarget=e,this.I_(n)}}class $R extends zy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=GS(e.writeResults,e.commitTime),r=Rn(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=yu(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>KS(this.serializer,r))};this.I_(n)}}/**
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
 */class jR{}class HR extends jR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new Z(L.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.bo(e,gu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(L.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(e,gu(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(L.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class qR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Yn(n),this.N_=!1):X("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const is="RemoteStore";class zR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{r.enqueueAndForget(async()=>{hs(this)&&(X(is,"Restarting streams for network reachability change."),await async function(c){const h=pe(c);h.W_.add(4),await ko(h),h.j_.set("Unknown"),h.W_.delete(4),await Nl(h)}(this))})}),this.j_=new qR(r,s)}}async function Nl(t){if(hs(t))for(const e of t.G_)await e(!0)}async function ko(t){for(const e of t.G_)await e(!1)}function Wy(t,e){const n=pe(t);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),Ch(n)?Ah(n):ai(n).c_()&&Ih(n,e))}function Th(t,e){const n=pe(t),r=ai(n);n.U_.delete(e),r.c_()&&Ky(n,e),n.U_.size===0&&(r.c_()?r.P_():hs(n)&&n.j_.set("Unknown"))}function Ih(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ai(t).y_(e)}function Ky(t,e){t.H_.Ne(e),ai(t).w_(e)}function Ah(t){t.H_=new US({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.U_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),ai(t).start(),t.j_.B_()}function Ch(t){return hs(t)&&!ai(t).u_()&&t.U_.size>0}function hs(t){return pe(t).W_.size===0}function Gy(t){t.H_=void 0}async function WR(t){t.j_.set("Online")}async function KR(t){t.U_.forEach((e,n)=>{Ih(t,e)})}async function GR(t,e){Gy(t),Ch(t)?(t.j_.q_(e),Ah(t)):t.j_.set("Unknown")}async function QR(t,e,n){if(t.j_.set("Online"),e instanceof Dy&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.U_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.U_.delete(l),s.H_.removeTarget(l))}(t,e)}catch(r){X(is,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ya(t,r)}else if(e instanceof Ta?t.H_.We(e):e instanceof xy?t.H_.Ze(e):t.H_.je(e),!n.isEqual(fe.min()))try{const r=await Hy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.H_.ot(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.U_.get(h);d&&i.U_.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=i.U_.get(c);if(!d)return;i.U_.set(c,d.withResumeToken(pt.EMPTY_BYTE_STRING,d.snapshotVersion)),Ky(i,c);const p=new mr(d.target,c,h,d.sequenceNumber);Ih(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X(is,"Failed to raise snapshot:",r),await Ya(t,r)}}async function Ya(t,e,n){if(!ii(e))throw e;t.W_.add(1),await ko(t),t.j_.set("Offline"),n||(n=()=>Hy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(is,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await Nl(t)})}function Qy(t,e){return e().catch(n=>Ya(t,n,e))}async function Ll(t){const e=pe(t),n=kr(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:ch;for(;YR(e);)try{const s=await xR(e.localStore,r);if(s===null){e.K_.length===0&&n.P_();break}r=s.batchId,JR(e,s)}catch(s){await Ya(e,s)}Yy(e)&&Jy(e)}function YR(t){return hs(t)&&t.K_.length<10}function JR(t,e){t.K_.push(e);const n=kr(t);n.c_()&&n.b_&&n.S_(e.mutations)}function Yy(t){return hs(t)&&!kr(t).u_()&&t.K_.length>0}function Jy(t){kr(t).start()}async function XR(t){kr(t).C_()}async function ZR(t){const e=kr(t);for(const n of t.K_)e.S_(n.mutations)}async function eP(t,e,n){const r=t.K_.shift(),s=gh.from(r,e,n);await Qy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ll(t)}async function tP(t,e){e&&kr(t).b_&&await async function(r,s){if(function(o){return LS(o)&&o!==L.ABORTED}(s.code)){const i=r.K_.shift();kr(r).h_(),await Qy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ll(r)}}(t,e),Yy(t)&&Jy(t)}async function Wp(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),X(is,"RemoteStore received new credentials");const r=hs(n);n.W_.add(3),await ko(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Nl(n)}async function nP(t,e){const n=pe(t);e?(n.W_.delete(2),await Nl(n)):e||(n.W_.add(2),await ko(n),n.j_.set("Unknown"))}function ai(t){return t.J_||(t.J_=function(n,r,s){const i=pe(n);return i.M_(),new BR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:WR.bind(null,t),No:KR.bind(null,t),Lo:GR.bind(null,t),p_:QR.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),Ch(t)?Ah(t):t.j_.set("Unknown")):(await t.J_.stop(),Gy(t))})),t.J_}function kr(t){return t.Y_||(t.Y_=function(n,r,s){const i=pe(n);return i.M_(),new $R(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:XR.bind(null,t),Lo:tP.bind(null,t),D_:ZR.bind(null,t),v_:eP.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await Ll(t)):(await t.Y_.stop(),t.K_.length>0&&(X(is,`Stopping write stream with ${t.K_.length} pending writes`),t.K_=[]))})),t.Y_}/**
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
 */class Sh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Sh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rh(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),ii(t))return new Z(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ms{static emptySet(e){return new Ms(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Oi(),this.sortedSet=new Ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ms;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Kp{constructor(){this.Z_=new Ke(re.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):he():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Qs{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Qs(e,n,Ms.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class rP{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class sP{constructor(){this.queries=Gp(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=pe(n),i=s.queries;s.queries=Gp(),i.forEach((o,l)=>{for(const c of l.ta)c.onError(r)})})(this,new Z(L.ABORTED,"Firestore shutting down"))}}function Gp(){return new us(t=>_y(t),Pl)}async function Xy(t,e){const n=pe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new rP,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Rh(o,`Initialization of query '${Ts(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&Ph(n)}async function Zy(t,e){const n=pe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function iP(t,e){const n=pe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ta)l.oa(s)&&(r=!0);o.ea=s}}r&&Ph(n)}function oP(t,e,n){const r=pe(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function Ph(t){t.ia.forEach(e=>{e.next()})}var Eu,Qp;(Qp=Eu||(Eu={}))._a="default",Qp.Cache="cache";class ew{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Qs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=Qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Eu.Cache}}/**
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
 */class tw{constructor(e){this.key=e}}class nw{constructor(e){this.key=e}}class aP{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=be(),this.mutatedKeys=be(),this.ya=yy(e),this.wa=new Ms(this.ya)}get ba(){return this.fa}Sa(e,n){const r=n?n.Da:new Kp,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),y=kl(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),k=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let O=!1;m&&y?m.data.isEqual(y.data)?P!==k&&(r.track({type:3,doc:y}),O=!0):this.va(m,y)||(r.track({type:2,doc:y}),O=!0,(c&&this.ya(y,c)>0||h&&this.ya(y,h)<0)&&(l=!0)):!m&&y?(r.track({type:0,doc:y}),O=!0):m&&!y&&(r.track({type:1,doc:m}),O=!0,(c||h)&&(l=!0)),O&&(y?(o=o.add(y),i=k?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:o,Da:r,ls:l,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((d,p)=>function(y,P){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return k(y)-k(P)}(d.type,p.type)||this.ya(d.doc,p.doc)),this.Ca(r),s=s!=null&&s;const l=n&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,h=c!==this.ga;return this.ga=c,o.length!==0||h?{snapshot:new Qs(this.query,e.wa,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Kp,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=be(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new nw(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new tw(r))}),n}Oa(e){this.fa=e.gs,this.pa=be();const n=this.Sa(e.documents);return this.applyChanges(n,!0)}Na(){return Qs.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const kh="SyncEngine";class lP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class cP{constructor(e){this.key=e,this.Ba=!1}}class uP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new us(l=>_y(l),Pl),this.qa=new Map,this.Qa=new Set,this.$a=new Ke(re.comparator),this.Ka=new Map,this.Ua=new wh,this.Wa={},this.Ga=new Map,this.za=Gs.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function hP(t,e,n=!0){const r=lw(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await rw(r,e,n,!0),s}async function dP(t,e){const n=lw(t);await rw(n,e,!0,!1)}async function rw(t,e,n,r){const s=await DR(t.localStore,Sn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await fP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Wy(t.remoteStore,s),l}async function fP(t,e,n,r,s){t.Ha=(p,m,y)=>async function(k,O,j,$){let H=O.view.Sa(j);H.ls&&(H=await $p(k.localStore,O.query,!1).then(({documents:I})=>O.view.Sa(I,H)));const z=$&&$.targetChanges.get(O.targetId),ie=$&&$.targetMismatches.get(O.targetId)!=null,ye=O.view.applyChanges(H,k.isPrimaryClient,z,ie);return Jp(k,O.targetId,ye.Ma),ye.snapshot}(t,p,m,y);const i=await $p(t.localStore,e,!0),o=new aP(e,i.gs),l=o.Sa(i.documents),c=Po.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);Jp(t,n,h.Ma);const d=new lP(e,n,o);return t.ka.set(e,d),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),h.snapshot}async function pP(t,e,n){const r=pe(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(o=>!Pl(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await wu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Th(r.remoteStore,s.targetId),bu(r,s.targetId)}).catch(si)):(bu(r,s.targetId),await wu(r.localStore,s.targetId,!0))}async function mP(t,e){const n=pe(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Th(n.remoteStore,r.targetId))}async function gP(t,e,n){const r=TP(t);try{const s=await function(o,l){const c=pe(o),h=nt.now(),d=l.reduce((y,P)=>y.add(P.key),be());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let P=Jn(),k=be();return c.ds.getEntries(y,d).next(O=>{P=O,P.forEach((j,$)=>{$.isValidDocument()||(k=k.add(j))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,P)).next(O=>{p=O;const j=[];for(const $ of l){const H=xS($,p.get($.key).overlayedDocument);H!=null&&j.push(new Mr($.key,H,cy(H.value.mapValue),dn.exists(!0)))}return c.mutationQueue.addMutationBatch(y,h,j,l)}).next(O=>{m=O;const j=O.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(y,O.batchId,j)})}).then(()=>({batchId:m.batchId,changes:vy(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Wa[o.currentUser.toKey()];h||(h=new Ke(Te)),h=h.insert(l,c),o.Wa[o.currentUser.toKey()]=h}(r,s.batchId,n),await xo(r,s.changes),await Ll(r.remoteStore)}catch(s){const i=Rh(s,"Failed to persist write");n.reject(i)}}async function sw(t,e){const n=pe(t);try{const r=await PR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ka.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ba=!0:s.modifiedDocuments.size>0?Ve(o.Ba):s.removedDocuments.size>0&&(Ve(o.Ba),o.Ba=!1))}),await xo(n,r,e)}catch(r){await si(r)}}function Yp(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,o)=>{const l=o.view.sa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=pe(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const m of p.ta)m.sa(l)&&(h=!0)}),h&&Ph(c)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _P(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ka.get(e),i=s&&s.key;if(i){let o=new Ke(re.comparator);o=o.insert(i,Tt.newNoDocument(i,fe.min()));const l=be().add(i),c=new Ol(fe.min(),new Map,new Ke(Te),o,l);await sw(r,c),r.$a=r.$a.remove(i),r.Ka.delete(e),xh(r)}else await wu(r.localStore,e,!1).then(()=>bu(r,e,n)).catch(si)}async function yP(t,e){const n=pe(t),r=e.batch.batchId;try{const s=await RR(n.localStore,e);ow(n,r,null),iw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xo(n,s)}catch(s){await si(s)}}async function wP(t,e,n){const r=pe(t);try{const s=await function(o,l){const c=pe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Ve(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);ow(r,e,n),iw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xo(r,s)}catch(s){await si(s)}}function iw(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function ow(t,e,n){const r=pe(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function bu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ua.Sr(e).forEach(r=>{t.Ua.containsKey(r)||aw(t,r)})}function aw(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(Th(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ka.delete(n),xh(t))}function Jp(t,e,n){for(const r of n)r instanceof tw?(t.Ua.addReference(r.key,e),vP(t,r)):r instanceof nw?(X(kh,"Document no longer in limbo: "+r.key),t.Ua.removeReference(r.key,e),t.Ua.containsKey(r.key)||aw(t,r.key)):he()}function vP(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(X(kh,"New document in limbo: "+n),t.Qa.add(r),xh(t))}function xh(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new re(je.fromString(e)),r=t.za.next();t.Ka.set(r,new cP(n)),t.$a=t.$a.insert(n,r),Wy(t.remoteStore,new mr(Sn(ph(n.path)),r,"TargetPurposeLimboResolution",Cl.ae))}}async function xo(t,e,n){const r=pe(t),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{o.push(r.Ha(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Eh.Yi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.La.p_(s),await async function(c,h){const d=pe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(h,m=>F.forEach(m.Hi,y=>d.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>F.forEach(m.Ji,y=>d.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!ii(p))throw p;X(bh,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const y=d.Ts.get(m),P=y.snapshotVersion,k=y.withLastLimboFreeSnapshotVersion(P);d.Ts=d.Ts.insert(m,k)}}}(r.localStore,i))}async function EP(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){X(kh,"User change. New user:",e.toKey());const r=await jy(n.localStore,e);n.currentUser=e,function(i,o){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new Z(L.CANCELLED,o))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xo(n,r.Rs)}}function bP(t,e){const n=pe(t),r=n.Ka.get(e);if(r&&r.Ba)return be().add(r.key);{let s=be();const i=n.qa.get(e);if(!i)return s;for(const o of i){const l=n.ka.get(o);s=s.unionWith(l.view.ba)}return s}}function lw(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_P.bind(null,e),e.La.p_=iP.bind(null,e.eventManager),e.La.Ja=oP.bind(null,e.eventManager),e}function TP(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wP.bind(null,e),e}class Ja{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vl(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return SR(this.persistence,new IR,e.initialUser,this.serializer)}Xa(e){return new $y(vh.ri,this.serializer)}Za(e){return new VR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ja.provider={build:()=>new Ja};class IP extends Ja{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Ve(this.persistence.referenceDelegate instanceof Qa);const r=this.persistence.referenceDelegate.garbageCollector;return new cR(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?Ft.withCacheSize(this.cacheSizeBytes):Ft.DEFAULT;return new $y(r=>Qa.ri(r,n),this.serializer)}}class Tu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=EP.bind(null,this.syncEngine),await nP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new sP}()}createDatastore(e){const n=Vl(e.databaseInfo.databaseId),r=function(i){return new UR(i)}(e.databaseInfo);return function(i,o,l,c){return new HR(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new zR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Yp(this.syncEngine,n,0),function(){return qp.D()?new qp:new NR}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,d){const p=new uP(s,i,o,l,c,h);return d&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=pe(s);X(is,"RemoteStore shutting down."),i.W_.add(5),await ko(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Tu.provider={build:()=>new Tu};/**
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
 */class cw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Yn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const xr="FirestoreClient";class AP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=Z_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X(xr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(xr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Rh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vc(t,e){t.asyncQueue.verifyOperationInProgress(),X(xr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await jy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Xp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await CP(t);X(xr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Wp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Wp(e.remoteStore,s)),t._onlineComponents=e}async function CP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(xr,"Using user provided OfflineComponentProvider");try{await Vc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;qs("Error using user provided cache. Falling back to memory cache: "+n),await Vc(t,new Ja)}}else X(xr,"Using default OfflineComponentProvider"),await Vc(t,new IP(void 0));return t._offlineComponents}async function uw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(xr,"Using user provided OnlineComponentProvider"),await Xp(t,t._uninitializedComponentsProvider._online)):(X(xr,"Using default OnlineComponentProvider"),await Xp(t,new Tu))),t._onlineComponents}function SP(t){return uw(t).then(e=>e.syncEngine)}async function hw(t){const e=await uw(t),n=e.eventManager;return n.onListen=hP.bind(null,e.syncEngine),n.onUnlisten=pP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=dP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=mP.bind(null,e.syncEngine),n}function RP(t,e,n={}){const r=new Wn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new cw({next:m=>{d.su(),o.enqueueAndForget(()=>Zy(i,p));const y=m.docs.has(l);!y&&m.fromCache?h.reject(new Z(L.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&c&&c.source==="server"?h.reject(new Z(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new ew(ph(l.path),d,{includeMetadataChanges:!0,Ta:!0});return Xy(i,p)}(await hw(t),t.asyncQueue,e,n,r)),r.promise}function PP(t,e,n={}){const r=new Wn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new cw({next:m=>{d.su(),o.enqueueAndForget(()=>Zy(i,p)),m.fromCache&&c.source==="server"?h.reject(new Z(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new ew(l,d,{includeMetadataChanges:!0,Ta:!0});return Xy(i,p)}(await hw(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function dw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Zp=new Map;/**
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
 */function fw(t,e,n){if(!n)throw new Z(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kP(t,e,n,r){if(e===!0&&r===!0)throw new Z(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function em(t){if(!re.isDocumentKey(t))throw new Z(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function tm(t){if(re.isDocumentKey(t))throw new Z(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ml(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Dn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ml(t);throw new Z(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const pw="firestore.googleapis.com",nm=!0;class rm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pw,this.ssl=nm}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:nm;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=By;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<aR)throw new Z(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new MC;switch(r.type){case"firstParty":return new $C(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Zp.get(n);r&&(X("ComponentProvider","Removing Datastore"),Zp.delete(n),r.terminate())}(this),Promise.resolve()}}function xP(t,e,n,r={}){var s;const i=(t=Dn(t,Fl))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i.host!==pw&&i.host!==l&&qs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!es(c,o)&&(t._setSettings(c),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=vt.MOCK_USER;else{h=JT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new Z(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new vt(p)}t._authCredentials=new FC(new X_(h,d))}}/**
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
 */class ds{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ds(this.firestore,e,this._query)}}class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class Ar extends ds{constructor(e,n,r){super(e,n,ph(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new re(e))}withConverter(e){return new Ar(this.firestore,e,this._path)}}function po(t,e,...n){if(t=it(t),fw("collection","path",e),t instanceof Fl){const r=je.fromString(e,...n);return tm(r),new Ar(t,null,r)}{if(!(t instanceof Ot||t instanceof Ar))throw new Z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return tm(r),new Ar(t.firestore,null,r)}}function mn(t,e,...n){if(t=it(t),arguments.length===1&&(e=Z_.newId()),fw("doc","path",e),t instanceof Fl){const r=je.fromString(e,...n);return em(r),new Ot(t,null,new re(r))}{if(!(t instanceof Ot||t instanceof Ar))throw new Z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return em(r),new Ot(t.firestore,t instanceof Ar?t.converter:null,new re(r))}}/**
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
 */const sm="AsyncQueue";class im{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new qy(this,"async_queue_retry"),this.bu=()=>{const r=Oc();r&&X(sm,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const n=Oc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Wn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ii(e))throw e;X(sm,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Yn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.Su=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=Sh.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&he()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class li extends Fl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new im,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new im(e),this._firestoreClient=void 0,await e}}}function DP(t,e){const n=typeof t=="object"?t:l_(),r=typeof t=="string"?t:qa,s=Xu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=QT("firestore");i&&xP(s,...i)}return s}function Dh(t){if(t._terminated)throw new Z(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||OP(t),t._firestoreClient}function OP(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new tS(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,dw(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new AP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Ys{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ys(pt.fromBase64String(e))}catch(n){throw new Z(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ys(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ul{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Bl{constructor(e){this._methodName=e}}/**
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
 */class Oh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
 */class Vh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const VP=/^__.*__$/;class NP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ro(e,this.data,n,this.fieldTransforms)}}class mw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function gw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class Nh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Nh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Ku(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Xa(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(gw(this.Lu)&&VP.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class LP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Vl(e)}ju(e,n,r,s=!1){return new Nh({Lu:e,methodName:n,zu:r,path:ft.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $l(t){const e=t._freezeSettings(),n=Vl(t._databaseId);return new LP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _w(t,e,n,r,s,i={}){const o=t.ju(i.merge||i.mergeFields?2:0,e,n,s);Mh("Data must be an object, but it was:",o,r);const l=yw(r,o);let c,h;if(i.merge)c=new Wt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=Iu(e,p,n);if(!o.contains(m))throw new Z(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);vw(d,m)||d.push(m)}c=new Wt(d),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new NP(new Ut(l),c,h)}class jl extends Bl{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof jl}}class Lh extends Bl{_toFieldTransform(e){return new SS(e.path,new uo)}isEqual(e){return e instanceof Lh}}function MP(t,e,n,r){const s=t.ju(1,e,n);Mh("Data must be an object, but it was:",s,r);const i=[],o=Ut.empty();Lr(r,(c,h)=>{const d=Fh(e,c,n);h=it(h);const p=s.Ku(d);if(h instanceof jl)i.push(d);else{const m=Do(h,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new Wt(i);return new mw(o,l,s.fieldTransforms)}function FP(t,e,n,r,s,i){const o=t.ju(1,e,n),l=[Iu(e,r,n)],c=[s];if(i.length%2!=0)throw new Z(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Iu(e,i[m])),c.push(i[m+1]);const h=[],d=Ut.empty();for(let m=l.length-1;m>=0;--m)if(!vw(h,l[m])){const y=l[m];let P=c[m];P=it(P);const k=o.Ku(y);if(P instanceof jl)h.push(y);else{const O=Do(P,k);O!=null&&(h.push(y),d.set(y,O))}}const p=new Wt(h);return new mw(d,p,o.fieldTransforms)}function UP(t,e,n,r=!1){return Do(n,t.ju(r?4:3,e))}function Do(t,e){if(ww(t=it(t)))return Mh("Unsupported field value:",e,t),yw(t,e);if(t instanceof Bl)return function(r,s){if(!gw(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Do(l,s.Uu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=it(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return IS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=nt.fromDate(r);return{timestampValue:Ga(s.serializer,i)}}if(r instanceof nt){const i=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ga(s.serializer,i)}}if(r instanceof Oh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ys)return{bytesValue:Oy(s.serializer,r._byteString)};if(r instanceof Ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:yh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Vh)return function(o,l){return{mapValue:{fields:{[ay]:{stringValue:ly},[za]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Wu("VectorValues must only contain numeric values.");return mh(l.serializer,h)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Ml(r)}`)}(t,e)}function yw(t,e){const n={};return ty(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lr(t,(r,s)=>{const i=Do(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ww(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof Oh||t instanceof Ys||t instanceof Ot||t instanceof Bl||t instanceof Vh)}function Mh(t,e,n){if(!ww(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ml(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function Iu(t,e,n){if((e=it(e))instanceof Ul)return e._internalPath;if(typeof e=="string")return Fh(t,e);throw Xa("Field path arguments must be of type string or ",t,!1,void 0,n)}const BP=new RegExp("[~\\*/\\[\\]]");function Fh(t,e,n){if(e.search(BP)>=0)throw Xa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ul(...e.split("."))._internalPath}catch{throw Xa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Z(L.INVALID_ARGUMENT,l+t+c)}function vw(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ew{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $P(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $P extends Ew{data(){return super.data()}}function Hl(t,e){return typeof e=="string"?Fh(t,e):e instanceof Ul?e._internalPath:e._delegate._internalPath}/**
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
 */function jP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uh{}class bw extends Uh{}function Bh(t,e,...n){let r=[];e instanceof Uh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof $h).length,l=i.filter(c=>c instanceof ql).length;if(o>1||o>0&&l>0)throw new Z(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ql extends bw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ql(e,n,r)}_apply(e){const n=this._parse(e);return Iw(e._query,n),new ds(e.firestore,e.converter,fu(e._query,n))}_parse(e){const n=$l(e.firestore);return function(i,o,l,c,h,d,p){let m;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Z(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){am(p,d);const P=[];for(const k of p)P.push(om(c,i,k));m={arrayValue:{values:P}}}else m=om(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||am(p,d),m=UP(l,o,p,d==="in"||d==="not-in");return et.create(h,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Tw(t,e,n){const r=e,s=Hl("where",t);return ql._create(s,r,n)}class $h extends Uh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new $h(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Iw(o,c),o=fu(o,c)}(e._query,n),new ds(e.firestore,e.converter,fu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jh extends bw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new jh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Z(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Z(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new co(i,o)}(e._query,this._field,this._direction);return new ds(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new oi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function HP(t,e="asc"){const n=e,r=Hl("orderBy",t);return jh._create(r,n)}function om(t,e,n){if(typeof(n=it(n))=="string"){if(n==="")throw new Z(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gy(e)&&n.indexOf("/")!==-1)throw new Z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(je.fromString(n));if(!re.isDocumentKey(r))throw new Z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bp(t,new re(r))}if(n instanceof Ot)return bp(t,n._key);throw new Z(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ml(n)}.`)}function am(t,e){if(!Array.isArray(t)||t.length===0)throw new Z(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Iw(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Z(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class qP{convertValue(e,n="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Lr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[za].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ye(o.doubleValue));return new Vh(i)}convertGeoPoint(e){return new Oh(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Rl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oo(e));default:return null}}convertTimestamp(e){const n=Sr(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=je.fromString(e);Ve(Uy(r));const s=new ao(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Yn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Aw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ni{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cw extends Ew{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ia(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Hl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ia extends Cw{data(e={}){return super.data(e)}}class zP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ni(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ia(this._firestore,this._userDataWriter,r.key,r,new Ni(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Ia(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ni(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ia(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ni(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:WP(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
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
 */function mo(t){t=Dn(t,Ot);const e=Dn(t.firestore,li);return RP(Dh(e),t._key).then(n=>GP(e,t,n))}class Sw extends qP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ys(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function Hh(t){t=Dn(t,ds);const e=Dn(t.firestore,li),n=Dh(e),r=new Sw(e);return jP(t._query),PP(n,t._query).then(s=>new zP(e,r,t,s))}function Rw(t,e,n){t=Dn(t,Ot);const r=Dn(t.firestore,li),s=Aw(t.converter,e,n);return qh(r,[_w($l(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,dn.none())])}function KP(t,e,n,...r){t=Dn(t,Ot);const s=Dn(t.firestore,li),i=$l(s);let o;return o=typeof(e=it(e))=="string"||e instanceof Ul?FP(i,"updateDoc",t._key,e,n,r):MP(i,"updateDoc",t._key,e),qh(s,[o.toMutation(t._key,dn.exists(!0))])}function Pw(t,e){const n=Dn(t.firestore,li),r=mn(t),s=Aw(t.converter,e);return qh(n,[_w($l(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,dn.exists(!1))]).then(()=>r)}function qh(t,e){return function(r,s){const i=new Wn;return r.asyncQueue.enqueueAndForget(async()=>gP(await SP(r),s,i)),i.promise}(Dh(t),e)}function GP(t,e,n){const r=n.docs.get(e._key),s=new Sw(t);return new Cw(t,s,e._key,r,new Ni(n.hasPendingWrites,n.fromCache),e.converter)}function QP(){return new Lh("serverTimestamp")}(function(e,n=!0){(function(s){ri=s})(ti),Hs(new ts("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new li(new UC(r.getProvider("auth-internal")),new jC(o,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Z(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ao(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Tr(hp,dp,e),Tr(hp,dp,"esm2017")})();const YP={apiKey:"AIzaSyC8WspggAJ7NYeCils7NGKk-BDfKw3lzUU",authDomain:"brobank-d0269.firebaseapp.com",projectId:"brobank-d0269",storageBucket:"brobank-d0269.appspot.com",messagingSenderId:"332534888385",appId:"1:332534888385:web:9f0f879472df456d36a140"},kw=a_(YP),sn=NC(kw),Kt=DP(kw);Tl(sn,t=>{t?console.log("User angemeldet:",t.uid):console.log("Kein Nutzer angemeldet.")});const zh=Xg("auth",()=>{const t=ke(null);ls(()=>{Tl(sn,n=>{t.value=n})});async function e(){await IA(sn),t.value=null}return{user:t,logout:e}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Cs=typeof document<"u";function xw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function JP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&xw(t.default)}const De=Object.assign;function Nc(t,e){const n={};for(const r in e){const s=e[r];n[r]=gn(s)?s.map(t):t(s)}return n}const Gi=()=>{},gn=Array.isArray,Dw=/#/g,XP=/&/g,ZP=/\//g,e2=/=/g,t2=/\?/g,Ow=/\+/g,n2=/%5B/g,r2=/%5D/g,Vw=/%5E/g,s2=/%60/g,Nw=/%7B/g,i2=/%7C/g,Lw=/%7D/g,o2=/%20/g;function Wh(t){return encodeURI(""+t).replace(i2,"|").replace(n2,"[").replace(r2,"]")}function a2(t){return Wh(t).replace(Nw,"{").replace(Lw,"}").replace(Vw,"^")}function Au(t){return Wh(t).replace(Ow,"%2B").replace(o2,"+").replace(Dw,"%23").replace(XP,"%26").replace(s2,"`").replace(Nw,"{").replace(Lw,"}").replace(Vw,"^")}function l2(t){return Au(t).replace(e2,"%3D")}function c2(t){return Wh(t).replace(Dw,"%23").replace(t2,"%3F")}function u2(t){return t==null?"":c2(t).replace(ZP,"%2F")}function go(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const h2=/\/$/,d2=t=>t.replace(h2,"");function Lc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=g2(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:go(o)}}function f2(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function lm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function p2(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Js(e.matched[r],n.matched[s])&&Mw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Js(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Mw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!m2(t[n],e[n]))return!1;return!0}function m2(t,e){return gn(t)?cm(t,e):gn(e)?cm(e,t):t===e}function cm(t,e){return gn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function g2(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const or={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var _o;(function(t){t.pop="pop",t.push="push"})(_o||(_o={}));var Qi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Qi||(Qi={}));function _2(t){if(!t)if(Cs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),d2(t)}const y2=/^[^#]+#/;function w2(t,e){return t.replace(y2,"#")+e}function v2(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const zl=()=>({left:window.scrollX,top:window.scrollY});function E2(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=v2(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function um(t,e){return(history.state?history.state.position-e:-1)+t}const Cu=new Map;function b2(t,e){Cu.set(t,e)}function T2(t){const e=Cu.get(t);return Cu.delete(t),e}let I2=()=>location.protocol+"//"+location.host;function Fw(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),lm(c,"")}return lm(n,t)+r+s}function A2(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const y=Fw(t,location),P=n.value,k=e.value;let O=0;if(m){if(n.value=y,e.value=m,o&&o===P){o=null;return}O=k?m.position-k.position:0}else r(y);s.forEach(j=>{j(n.value,P,{delta:O,type:_o.pop,direction:O?O>0?Qi.forward:Qi.back:Qi.unknown})})};function c(){o=n.value}function h(m){s.push(m);const y=()=>{const P=s.indexOf(m);P>-1&&s.splice(P,1)};return i.push(y),y}function d(){const{history:m}=window;m.state&&m.replaceState(De({},m.state,{scroll:zl()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function hm(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?zl():null}}function C2(t){const{history:e,location:n}=window,r={value:Fw(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:I2()+t+c;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(y){console.error(y),n[d?"replace":"assign"](m)}}function o(c,h){const d=De({},e.state,hm(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=De({},s.value,e.state,{forward:c,scroll:zl()});i(d.current,d,!0);const p=De({},hm(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function S2(t){t=_2(t);const e=C2(t),n=A2(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=De({location:"",base:t,go:r,createHref:w2.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function R2(t){return typeof t=="string"||t&&typeof t=="object"}function Uw(t){return typeof t=="string"||typeof t=="symbol"}const Bw=Symbol("");var dm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(dm||(dm={}));function Xs(t,e){return De(new Error,{type:t,[Bw]:!0},e)}function Mn(t,e){return t instanceof Error&&Bw in t&&(e==null||!!(t.type&e))}const fm="[^/]+?",P2={sensitive:!1,strict:!1,start:!0,end:!0},k2=/[.+*?^${}()[\]/\\]/g;function x2(t,e){const n=De({},P2,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let y=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(k2,"\\$&"),y+=40;else if(m.type===1){const{value:P,repeatable:k,optional:O,regexp:j}=m;i.push({name:P,repeatable:k,optional:O});const $=j||fm;if($!==fm){y+=10;try{new RegExp(`(${$})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${P}" (${$}): `+z.message)}}let H=k?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;p||(H=O&&h.length<2?`(?:/${H})`:"/"+H),O&&(H+="?"),s+=H,y+=20,O&&(y+=-8),k&&(y+=-20),$===".*"&&(y+=-50)}d.push(y)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const y=d[m]||"",P=i[m-1];p[P.name]=y&&P.repeatable?y.split("/"):y}return p}function c(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const y of m)if(y.type===0)d+=y.value;else if(y.type===1){const{value:P,repeatable:k,optional:O}=y,j=P in h?h[P]:"";if(gn(j)&&!k)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const $=gn(j)?j.join("/"):j;if(!$)if(O)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);d+=$}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function D2(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $w(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=D2(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(pm(r))return 1;if(pm(s))return-1}return s.length-r.length}function pm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const O2={type:0,value:""},V2=/[a-zA-Z0-9_]/;function N2(t){if(!t)return[[]];if(t==="/")return[[O2]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${h}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:V2.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function L2(t,e,n){const r=x2(N2(t.path),n),s=De(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function M2(t,e){const n=[],r=new Map;e=ym({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,y){const P=!y,k=gm(p);k.aliasOf=y&&y.record;const O=ym(e,p),j=[k];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const ie of z)j.push(gm(De({},k,{components:y?y.record.components:k.components,path:ie,aliasOf:y?y.record:k})))}let $,H;for(const z of j){const{path:ie}=z;if(m&&ie[0]!=="/"){const ye=m.record.path,I=ye[ye.length-1]==="/"?"":"/";z.path=m.record.path+(ie&&I+ie)}if($=L2(z,m,O),y?y.alias.push($):(H=H||$,H!==$&&H.alias.push($),P&&p.name&&!_m($)&&o(p.name)),jw($)&&c($),k.children){const ye=k.children;for(let I=0;I<ye.length;I++)i(ye[I],$,y&&y.children[I])}y=y||$}return H?()=>{o(H)}:Gi}function o(p){if(Uw(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=B2(p,n);n.splice(m,0,p),p.record.name&&!_m(p)&&r.set(p.record.name,p)}function h(p,m){let y,P={},k,O;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw Xs(1,{location:p});O=y.record.name,P=De(mm(m.params,y.keys.filter(H=>!H.optional).concat(y.parent?y.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&mm(p.params,y.keys.map(H=>H.name))),k=y.stringify(P)}else if(p.path!=null)k=p.path,y=n.find(H=>H.re.test(k)),y&&(P=y.parse(k),O=y.record.name);else{if(y=m.name?r.get(m.name):n.find(H=>H.re.test(m.path)),!y)throw Xs(1,{location:p,currentLocation:m});O=y.record.name,P=De({},m.params,p.params),k=y.stringify(P)}const j=[];let $=y;for(;$;)j.unshift($.record),$=$.parent;return{name:O,path:k,params:P,matched:j,meta:U2(j)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function mm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function gm(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:F2(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function F2(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function _m(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function U2(t){return t.reduce((e,n)=>De(e,n.meta),{})}function ym(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function B2(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;$w(t,e[i])<0?r=i:n=i+1}const s=$2(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function $2(t){let e=t;for(;e=e.parent;)if(jw(e)&&$w(t,e)===0)return e}function jw({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function j2(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ow," "),o=i.indexOf("="),l=go(o<0?i:i.slice(0,o)),c=o<0?null:go(i.slice(o+1));if(l in e){let h=e[l];gn(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function wm(t){let e="";for(let n in t){const r=t[n];if(n=l2(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(gn(r)?r.map(i=>i&&Au(i)):[r&&Au(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function H2(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=gn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const q2=Symbol(""),vm=Symbol(""),Wl=Symbol(""),Kh=Symbol(""),Su=Symbol("");function Ri(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ur(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(Xs(4,{from:n,to:e})):m instanceof Error?c(m):R2(m)?c(Xs(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function Mc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(xw(c)){const d=(c.__vccOpts||c)[e];d&&i.push(ur(d,n,r,o,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=JP(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const y=(p.__vccOpts||p)[e];return y&&ur(y,n,r,o,l,s)()}))}}return i}function Em(t){const e=rn(Wl),n=rn(Kh),r=Dt(()=>{const c=ks(t.to);return e.resolve(c)}),s=Dt(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Js.bind(null,d));if(m>-1)return m;const y=bm(c[h-2]);return h>1&&bm(d)===y&&p[p.length-1].path!==y?p.findIndex(Js.bind(null,c[h-2])):m}),i=Dt(()=>s.value>-1&&Q2(n.params,r.value.params)),o=Dt(()=>s.value>-1&&s.value===n.matched.length-1&&Mw(n.params,r.value.params));function l(c={}){if(G2(c)){const h=e[ks(t.replace)?"replace":"push"](ks(t.to)).catch(Gi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Dt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function z2(t){return t.length===1?t[0]:t}const W2=yg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Em,setup(t,{slots:e}){const n=wo(Em(t)),{options:r}=rn(Wl),s=Dt(()=>({[Tm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Tm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&z2(e.default(n));return t.custom?i:qg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),K2=W2;function G2(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Q2(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!gn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function bm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Tm=(t,e,n)=>t??e??n,Y2=yg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=rn(Su),s=Dt(()=>t.route||r.value),i=rn(vm,0),o=Dt(()=>{let h=ks(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=Dt(()=>s.value.matched[o.value]);da(vm,Dt(()=>o.value+1)),da(q2,l),da(Su,s);const c=ke();return Ds(()=>[c.value,l.value,t.name],([h,d,p],[m,y,P])=>{d&&(d.instances[p]=h,y&&y!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),h&&d&&(!y||!Js(d,y)||!m)&&(d.enterCallbacks[p]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return Im(n.default,{Component:m,route:h});const y=p.props[d],P=y?y===!0?h.params:typeof y=="function"?y(h):y:null,O=qg(m,De({},P,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Im(n.default,{Component:O,route:h})||O}}});function Im(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const J2=Y2;function X2(t){const e=M2(t.routes,t),n=t.parseQuery||j2,r=t.stringifyQuery||wm,s=t.history,i=Ri(),o=Ri(),l=Ri(),c=$E(or);let h=or;Cs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Nc.bind(null,V=>""+V),p=Nc.bind(null,u2),m=Nc.bind(null,go);function y(V,J){let Q,te;return Uw(V)?(Q=e.getRecordMatcher(V),te=J):te=V,e.addRoute(te,Q)}function P(V){const J=e.getRecordMatcher(V);J&&e.removeRoute(J)}function k(){return e.getRoutes().map(V=>V.record)}function O(V){return!!e.getRecordMatcher(V)}function j(V,J){if(J=De({},J||c.value),typeof V=="string"){const S=Lc(n,V,J.path),N=e.resolve({path:S.path},J),U=s.createHref(S.fullPath);return De(S,N,{params:m(N.params),hash:go(S.hash),redirectedFrom:void 0,href:U})}let Q;if(V.path!=null)Q=De({},V,{path:Lc(n,V.path,J.path).path});else{const S=De({},V.params);for(const N in S)S[N]==null&&delete S[N];Q=De({},V,{params:p(S)}),J.params=p(J.params)}const te=e.resolve(Q,J),Se=V.hash||"";te.params=d(m(te.params));const v=f2(r,De({},V,{hash:a2(Se),path:te.path})),b=s.createHref(v);return De({fullPath:v,hash:Se,query:r===wm?H2(V.query):V.query||{}},te,{redirectedFrom:void 0,href:b})}function $(V){return typeof V=="string"?Lc(n,V,c.value.path):De({},V)}function H(V,J){if(h!==V)return Xs(8,{from:J,to:V})}function z(V){return I(V)}function ie(V){return z(De($(V),{replace:!0}))}function ye(V){const J=V.matched[V.matched.length-1];if(J&&J.redirect){const{redirect:Q}=J;let te=typeof Q=="function"?Q(V):Q;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=$(te):{path:te},te.params={}),De({query:V.query,hash:V.hash,params:te.path!=null?{}:V.params},te)}}function I(V,J){const Q=h=j(V),te=c.value,Se=V.state,v=V.force,b=V.replace===!0,S=ye(Q);if(S)return I(De($(S),{state:typeof S=="object"?De({},Se,S.state):Se,force:v,replace:b}),J||Q);const N=Q;N.redirectedFrom=J;let U;return!v&&p2(r,te,Q)&&(U=Xs(16,{to:N,from:te}),Jt(te,te,!0,!1)),(U?Promise.resolve(U):T(N,te)).catch(M=>Mn(M)?Mn(M,2)?M:ln(M):ve(M,N,te)).then(M=>{if(M){if(Mn(M,2))return I(De({replace:b},$(M.to),{state:typeof M.to=="object"?De({},Se,M.to.state):Se,force:v}),J||N)}else M=C(N,te,!0,b,Se);return A(N,te,M),M})}function _(V,J){const Q=H(V,J);return Q?Promise.reject(Q):Promise.resolve()}function w(V){const J=er.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(V):V()}function T(V,J){let Q;const[te,Se,v]=Z2(V,J);Q=Mc(te.reverse(),"beforeRouteLeave",V,J);for(const S of te)S.leaveGuards.forEach(N=>{Q.push(ur(N,V,J))});const b=_.bind(null,V,J);return Q.push(b),Mt(Q).then(()=>{Q=[];for(const S of i.list())Q.push(ur(S,V,J));return Q.push(b),Mt(Q)}).then(()=>{Q=Mc(Se,"beforeRouteUpdate",V,J);for(const S of Se)S.updateGuards.forEach(N=>{Q.push(ur(N,V,J))});return Q.push(b),Mt(Q)}).then(()=>{Q=[];for(const S of v)if(S.beforeEnter)if(gn(S.beforeEnter))for(const N of S.beforeEnter)Q.push(ur(N,V,J));else Q.push(ur(S.beforeEnter,V,J));return Q.push(b),Mt(Q)}).then(()=>(V.matched.forEach(S=>S.enterCallbacks={}),Q=Mc(v,"beforeRouteEnter",V,J,w),Q.push(b),Mt(Q))).then(()=>{Q=[];for(const S of o.list())Q.push(ur(S,V,J));return Q.push(b),Mt(Q)}).catch(S=>Mn(S,8)?S:Promise.reject(S))}function A(V,J,Q){l.list().forEach(te=>w(()=>te(V,J,Q)))}function C(V,J,Q,te,Se){const v=H(V,J);if(v)return v;const b=J===or,S=Cs?history.state:{};Q&&(te||b?s.replace(V.fullPath,De({scroll:b&&S&&S.scroll},Se)):s.push(V.fullPath,Se)),c.value=V,Jt(V,J,Q,b),ln()}let E;function at(){E||(E=s.listen((V,J,Q)=>{if(!yn.listening)return;const te=j(V),Se=ye(te);if(Se){I(De(Se,{replace:!0,force:!0}),te).catch(Gi);return}h=te;const v=c.value;Cs&&b2(um(v.fullPath,Q.delta),zl()),T(te,v).catch(b=>Mn(b,12)?b:Mn(b,2)?(I(De($(b.to),{force:!0}),te).then(S=>{Mn(S,20)&&!Q.delta&&Q.type===_o.pop&&s.go(-1,!1)}).catch(Gi),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ve(b,te,v))).then(b=>{b=b||C(te,v,!1),b&&(Q.delta&&!Mn(b,8)?s.go(-Q.delta,!1):Q.type===_o.pop&&Mn(b,20)&&s.go(-1,!1)),A(te,v,b)}).catch(Gi)}))}let Lt=Ri(),Me=Ri(),de;function ve(V,J,Q){ln(V);const te=Me.list();return te.length?te.forEach(Se=>Se(V,J,Q)):console.error(V),Promise.reject(V)}function jt(){return de&&c.value!==or?Promise.resolve():new Promise((V,J)=>{Lt.add([V,J])})}function ln(V){return de||(de=!V,at(),Lt.list().forEach(([J,Q])=>V?Q(V):J()),Lt.reset()),V}function Jt(V,J,Q,te){const{scrollBehavior:Se}=t;if(!Cs||!Se)return Promise.resolve();const v=!Q&&T2(um(V.fullPath,0))||(te||!Q)&&history.state&&history.state.scroll||null;return Hu().then(()=>Se(V,J,v)).then(b=>b&&E2(b)).catch(b=>ve(b,V,J))}const qe=V=>s.go(V);let ze;const er=new Set,yn={currentRoute:c,listening:!0,addRoute:y,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:k,resolve:j,options:t,push:z,replace:ie,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Me.add,isReady:jt,install(V){const J=this;V.component("RouterLink",K2),V.component("RouterView",J2),V.config.globalProperties.$router=J,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>ks(c)}),Cs&&!ze&&c.value===or&&(ze=!0,z(s.location).catch(Se=>{}));const Q={};for(const Se in or)Object.defineProperty(Q,Se,{get:()=>c.value[Se],enumerable:!0});V.provide(Wl,J),V.provide(Kh,cg(Q)),V.provide(Su,c);const te=V.unmount;er.add(V),V.unmount=function(){er.delete(V),er.size<1&&(h=or,E&&E(),E=null,c.value=or,ze=!1,de=!1),te()}}};function Mt(V){return V.reduce((J,Q)=>J.then(()=>w(Q)),Promise.resolve())}return yn}function Z2(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>Js(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>Js(h,c))||s.push(c))}return[n,r,s]}function Hw(){return rn(Wl)}function Gh(t){return rn(Kh)}/*!
* sweetalert2 v11.17.2
* Released under the MIT License.
*/function qw(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function ek(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Am(t,e){return t.get(qw(t,e))}function tk(t,e,n){ek(t,e),e.set(t,n)}function nk(t,e,n){return t.set(qw(t,e),n),n}const rk=100,se={},sk=()=>{se.previousActiveElement instanceof HTMLElement?(se.previousActiveElement.focus(),se.previousActiveElement=null):document.body&&document.body.focus()},ik=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,r=window.scrollY;se.restoreFocusTimeout=setTimeout(()=>{sk(),e()},rk),window.scrollTo(n,r)}),zw="swal2-",ok=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],D=ok.reduce((t,e)=>(t[e]=zw+e,t),{}),ak=["success","warning","info","question","error"],Za=ak.reduce((t,e)=>(t[e]=zw+e,t),{}),Ww="SweetAlert2:",Qh=t=>t.charAt(0).toUpperCase()+t.slice(1),Vt=t=>{console.warn(`${Ww} ${typeof t=="object"?t.join(" "):t}`)},fs=t=>{console.error(`${Ww} ${t}`)},Cm=[],lk=t=>{Cm.includes(t)||(Cm.push(t),Vt(t))},Kw=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;lk(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},Kl=t=>typeof t=="function"?t():t,Yh=t=>t&&typeof t.toPromise=="function",Oo=t=>Yh(t)?t.toPromise():Promise.resolve(t),Jh=t=>t&&Promise.resolve(t)===t,Nt=()=>document.body.querySelector(`.${D.container}`),Vo=t=>{const e=Nt();return e?e.querySelector(t):null},Qt=t=>Vo(`.${t}`),xe=()=>Qt(D.popup),ci=()=>Qt(D.icon),ck=()=>Qt(D["icon-content"]),Gw=()=>Qt(D.title),Xh=()=>Qt(D["html-container"]),Qw=()=>Qt(D.image),Zh=()=>Qt(D["progress-steps"]),Gl=()=>Qt(D["validation-message"]),On=()=>Vo(`.${D.actions} .${D.confirm}`),ui=()=>Vo(`.${D.actions} .${D.cancel}`),ps=()=>Vo(`.${D.actions} .${D.deny}`),uk=()=>Qt(D["input-label"]),hi=()=>Vo(`.${D.loader}`),No=()=>Qt(D.actions),Yw=()=>Qt(D.footer),Ql=()=>Qt(D["timer-progress-bar"]),ed=()=>Qt(D.close),hk=`
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
`,td=()=>{const t=xe();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((i,o)=>{const l=parseInt(i.getAttribute("tabindex")||"0"),c=parseInt(o.getAttribute("tabindex")||"0");return l>c?1:l<c?-1:0}),r=t.querySelectorAll(hk),s=Array.from(r).filter(i=>i.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(s))].filter(i=>$t(i))},nd=()=>Kn(document.body,D.shown)&&!Kn(document.body,D["toast-shown"])&&!Kn(document.body,D["no-backdrop"]),Yl=()=>{const t=xe();return t?Kn(t,D.toast):!1},dk=()=>{const t=xe();return t?t.hasAttribute("data-loading"):!1},Yt=(t,e)=>{if(t.textContent="",e){const r=new DOMParser().parseFromString(e,"text/html"),s=r.querySelector("head");s&&Array.from(s.childNodes).forEach(o=>{t.appendChild(o)});const i=r.querySelector("body");i&&Array.from(i.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},Kn=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let r=0;r<n.length;r++)if(!t.classList.contains(n[r]))return!1;return!0},fk=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(D).includes(n)&&!Object.values(Za).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},Gt=(t,e,n)=>{if(fk(t,e),!e.customClass)return;const r=e.customClass[n];if(r){if(typeof r!="string"&&!r.forEach){Vt(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof r}"`);return}Ce(t,r)}},Jl=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${D.popup} > .${D[e]}`);case"checkbox":return t.querySelector(`.${D.popup} > .${D.checkbox} input`);case"radio":return t.querySelector(`.${D.popup} > .${D.radio} input:checked`)||t.querySelector(`.${D.popup} > .${D.radio} input:first-child`);case"range":return t.querySelector(`.${D.popup} > .${D.range} input`);default:return t.querySelector(`.${D.popup} > .${D.input}`)}},Jw=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},Xw=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(r=>{Array.isArray(t)?t.forEach(s=>{n?s.classList.add(r):s.classList.remove(r)}):n?t.classList.add(r):t.classList.remove(r)}))},Ce=(t,e)=>{Xw(t,e,!0)},an=(t,e)=>{Xw(t,e,!1)},gr=(t,e)=>{const n=Array.from(t.children);for(let r=0;r<n.length;r++){const s=n[r];if(s instanceof HTMLElement&&Kn(s,e))return s}},Jr=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},ot=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";t&&(t.style.display=e)},Ct=t=>{t&&(t.style.display="none")},rd=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";t&&new MutationObserver(()=>{Lo(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},Sm=(t,e,n,r)=>{const s=t.querySelector(e);s&&s.style.setProperty(n,r)},Lo=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";e?ot(t,n):Ct(t)},$t=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),pk=()=>!$t(On())&&!$t(ps())&&!$t(ui()),Rm=t=>t.scrollHeight>t.clientHeight,Zw=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),r=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||r>0},sd=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const n=Ql();n&&$t(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},mk=()=>{const t=Ql();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),r=e/n*100;t.style.width=`${r}%`},gk=()=>typeof window>"u"||typeof document>"u",_k=`
 <div aria-labelledby="${D.title}" aria-describedby="${D["html-container"]}" class="${D.popup}" tabindex="-1">
   <button type="button" class="${D.close}"></button>
   <ul class="${D["progress-steps"]}"></ul>
   <div class="${D.icon}"></div>
   <img class="${D.image}" />
   <h2 class="${D.title}" id="${D.title}"></h2>
   <div class="${D["html-container"]}" id="${D["html-container"]}"></div>
   <input class="${D.input}" id="${D.input}" />
   <input type="file" class="${D.file}" />
   <div class="${D.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${D.select}" id="${D.select}"></select>
   <div class="${D.radio}"></div>
   <label class="${D.checkbox}">
     <input type="checkbox" id="${D.checkbox}" />
     <span class="${D.label}"></span>
   </label>
   <textarea class="${D.textarea}" id="${D.textarea}"></textarea>
   <div class="${D["validation-message"]}" id="${D["validation-message"]}"></div>
   <div class="${D.actions}">
     <div class="${D.loader}"></div>
     <button type="button" class="${D.confirm}"></button>
     <button type="button" class="${D.deny}"></button>
     <button type="button" class="${D.cancel}"></button>
   </div>
   <div class="${D.footer}"></div>
   <div class="${D["timer-progress-bar-container"]}">
     <div class="${D["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),yk=()=>{const t=Nt();return t?(t.remove(),an([document.documentElement,document.body],[D["no-backdrop"],D["toast-shown"],D["has-column"]]),!0):!1},qr=()=>{se.currentInstance.resetValidationMessage()},wk=()=>{const t=xe(),e=gr(t,D.input),n=gr(t,D.file),r=t.querySelector(`.${D.range} input`),s=t.querySelector(`.${D.range} output`),i=gr(t,D.select),o=t.querySelector(`.${D.checkbox} input`),l=gr(t,D.textarea);e.oninput=qr,n.onchange=qr,i.onchange=qr,o.onchange=qr,l.oninput=qr,r.oninput=()=>{qr(),s.value=r.value},r.onchange=()=>{qr(),s.value=r.value}},vk=t=>typeof t=="string"?document.querySelector(t):t,Ek=t=>{const e=xe();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},bk=t=>{window.getComputedStyle(t).direction==="rtl"&&Ce(Nt(),D.rtl)},Tk=t=>{const e=yk();if(gk()){fs("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=D.container,e&&Ce(n,D["no-transition"]),Yt(n,_k),n.dataset.swal2Theme=t.theme;const r=vk(t.target);r.appendChild(n),Ek(t),bk(r),wk()},id=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Ik(t,e):t&&Yt(e,t)},Ik=(t,e)=>{t.jquery?Ak(e,t):Yt(e,t.toString())},Ak=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Ck=(t,e)=>{const n=No(),r=hi();!n||!r||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?Ct(n):ot(n),Gt(n,e,"actions"),Sk(n,r,e),Yt(r,e.loaderHtml||""),Gt(r,e,"loader"))};function Sk(t,e,n){const r=On(),s=ps(),i=ui();!r||!s||!i||(Fc(r,"confirm",n),Fc(s,"deny",n),Fc(i,"cancel",n),Rk(r,s,i,n),n.reverseButtons&&(n.toast?(t.insertBefore(i,r),t.insertBefore(s,r)):(t.insertBefore(i,e),t.insertBefore(s,e),t.insertBefore(r,e))))}function Rk(t,e,n,r){if(!r.buttonsStyling){an([t,e,n],D.styled);return}Ce([t,e,n],D.styled),r.confirmButtonColor&&(t.style.backgroundColor=r.confirmButtonColor,Ce(t,D["default-outline"])),r.denyButtonColor&&(e.style.backgroundColor=r.denyButtonColor,Ce(e,D["default-outline"])),r.cancelButtonColor&&(n.style.backgroundColor=r.cancelButtonColor,Ce(n,D["default-outline"]))}function Fc(t,e,n){const r=Qh(e);Lo(t,n[`show${r}Button`],"inline-block"),Yt(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=D[e],Gt(t,n,`${e}Button`)}const Pk=(t,e)=>{const n=ed();n&&(Yt(n,e.closeButtonHtml||""),Gt(n,e,"closeButton"),Lo(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},kk=(t,e)=>{const n=Nt();n&&(xk(n,e.backdrop),Dk(n,e.position),Ok(n,e.grow),Gt(n,e,"container"))};function xk(t,e){typeof e=="string"?t.style.background=e:e||Ce([document.documentElement,document.body],D["no-backdrop"])}function Dk(t,e){e&&(e in D?Ce(t,D[e]):(Vt('The "position" parameter is not valid, defaulting to "center"'),Ce(t,D.center)))}function Ok(t,e){e&&Ce(t,D[`grow-${e}`])}var Be={innerParams:new WeakMap,domCache:new WeakMap};const Vk=["input","file","range","select","radio","checkbox","textarea"],Nk=(t,e)=>{const n=xe();if(!n)return;const r=Be.innerParams.get(t),s=!r||e.input!==r.input;Vk.forEach(i=>{const o=gr(n,D[i]);o&&(Fk(i,e.inputAttributes),o.className=D[i],s&&Ct(o))}),e.input&&(s&&Lk(e),Uk(e))},Lk=t=>{if(!t.input)return;if(!Qe[t.input]){fs(`Unexpected type of input! Expected ${Object.keys(Qe).join(" | ")}, got "${t.input}"`);return}const e=ev(t.input);if(!e)return;const n=Qe[t.input](e,t);ot(e),t.inputAutoFocus&&setTimeout(()=>{Jw(n)})},Mk=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},Fk=(t,e)=>{const n=xe();if(!n)return;const r=Jl(n,t);if(r){Mk(r);for(const s in e)r.setAttribute(s,e[s])}},Uk=t=>{if(!t.input)return;const e=ev(t.input);e&&Gt(e,t,"input")},od=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},Mo=(t,e,n)=>{if(n.inputLabel){const r=document.createElement("label"),s=D["input-label"];r.setAttribute("for",t.id),r.className=s,typeof n.customClass=="object"&&Ce(r,n.customClass.inputLabel),r.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",r)}},ev=t=>{const e=xe();if(e)return gr(e,D[t]||D.input)},el=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:Jh(e)||Vt(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},Qe={};Qe.text=Qe.email=Qe.password=Qe.number=Qe.tel=Qe.url=Qe.search=Qe.date=Qe["datetime-local"]=Qe.time=Qe.week=Qe.month=(t,e)=>(el(t,e.inputValue),Mo(t,t,e),od(t,e),t.type=e.input,t);Qe.file=(t,e)=>(Mo(t,t,e),od(t,e),t);Qe.range=(t,e)=>{const n=t.querySelector("input"),r=t.querySelector("output");return el(n,e.inputValue),n.type=e.input,el(r,e.inputValue),Mo(n,t,e),t};Qe.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Yt(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Mo(t,t,e),t};Qe.radio=t=>(t.textContent="",t);Qe.checkbox=(t,e)=>{const n=Jl(xe(),"checkbox");n.value="1",n.checked=!!e.inputValue;const r=t.querySelector("span");return Yt(r,e.inputPlaceholder||e.inputLabel),n};Qe.textarea=(t,e)=>{el(t,e.inputValue),od(t,e),Mo(t,t,e);const n=r=>parseInt(window.getComputedStyle(r).marginLeft)+parseInt(window.getComputedStyle(r).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const r=parseInt(window.getComputedStyle(xe()).width),s=()=>{if(!document.body.contains(t))return;const i=t.offsetWidth+n(t);i>r?xe().style.width=`${i}px`:Jr(xe(),"width",e.width)};new MutationObserver(s).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const Bk=(t,e)=>{const n=Xh();n&&(rd(n),Gt(n,e,"htmlContainer"),e.html?(id(e.html,n),ot(n,"block")):e.text?(n.textContent=e.text,ot(n,"block")):Ct(n),Nk(t,e))},$k=(t,e)=>{const n=Yw();n&&(rd(n),Lo(n,e.footer,"block"),e.footer&&id(e.footer,n),Gt(n,e,"footer"))},jk=(t,e)=>{const n=Be.innerParams.get(t),r=ci();if(!r)return;if(n&&e.icon===n.icon){km(r,e),Pm(r,e);return}if(!e.icon&&!e.iconHtml){Ct(r);return}if(e.icon&&Object.keys(Za).indexOf(e.icon)===-1){fs(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),Ct(r);return}ot(r),km(r,e),Pm(r,e),Ce(r,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",tv)},Pm=(t,e)=>{for(const[n,r]of Object.entries(Za))e.icon!==n&&an(t,r);Ce(t,e.icon&&Za[e.icon]),zk(t,e),tv(),Gt(t,e,"icon")},tv=()=>{const t=xe();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let r=0;r<n.length;r++)n[r].style.backgroundColor=e},Hk=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,qk=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,km=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,r="";e.iconHtml?r=xm(e.iconHtml):e.icon==="success"?(r=Hk,n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?r=qk:e.icon&&(r=xm({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==r.trim()&&Yt(t,r)},zk=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Sm(t,n,"background-color",e.iconColor);Sm(t,".swal2-success-ring","border-color",e.iconColor)}},xm=t=>`<div class="${D["icon-content"]}">${t}</div>`,Wk=(t,e)=>{const n=Qw();if(n){if(!e.imageUrl){Ct(n);return}ot(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),Jr(n,"width",e.imageWidth),Jr(n,"height",e.imageHeight),n.className=D.image,Gt(n,e,"image")}};let ad=!1,nv=0,rv=0,sv=0,iv=0;const Kk=t=>{t.addEventListener("mousedown",tl),document.body.addEventListener("mousemove",nl),t.addEventListener("mouseup",rl),t.addEventListener("touchstart",tl),document.body.addEventListener("touchmove",nl),t.addEventListener("touchend",rl)},Gk=t=>{t.removeEventListener("mousedown",tl),document.body.removeEventListener("mousemove",nl),t.removeEventListener("mouseup",rl),t.removeEventListener("touchstart",tl),document.body.removeEventListener("touchmove",nl),t.removeEventListener("touchend",rl)},tl=t=>{const e=xe();if(t.target===e||ci().contains(t.target)){ad=!0;const n=ov(t);nv=n.clientX,rv=n.clientY,sv=parseInt(e.style.insetInlineStart)||0,iv=parseInt(e.style.insetBlockStart)||0,Ce(e,"swal2-dragging")}},nl=t=>{const e=xe();if(ad){let{clientX:n,clientY:r}=ov(t);e.style.insetInlineStart=`${sv+(n-nv)}px`,e.style.insetBlockStart=`${iv+(r-rv)}px`}},rl=()=>{const t=xe();ad=!1,an(t,"swal2-dragging")},ov=t=>{let e=0,n=0;return t.type.startsWith("mouse")?(e=t.clientX,n=t.clientY):t.type.startsWith("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),{clientX:e,clientY:n}},Qk=(t,e)=>{const n=Nt(),r=xe();if(!(!n||!r)){if(e.toast){Jr(n,"width",e.width),r.style.width="100%";const s=hi();s&&r.insertBefore(s,ci())}else Jr(r,"width",e.width);Jr(r,"padding",e.padding),e.color&&(r.style.color=e.color),e.background&&(r.style.background=e.background),Ct(Gl()),Yk(r,e),e.draggable&&!e.toast?(Ce(r,D.draggable),Kk(r)):(an(r,D.draggable),Gk(r))}},Yk=(t,e)=>{const n=e.showClass||{};t.className=`${D.popup} ${$t(t)?n.popup:""}`,e.toast?(Ce([document.documentElement,document.body],D["toast-shown"]),Ce(t,D.toast)):Ce(t,D.modal),Gt(t,e,"popup"),typeof e.customClass=="string"&&Ce(t,e.customClass),e.icon&&Ce(t,D[`icon-${e.icon}`])},Jk=(t,e)=>{const n=Zh();if(!n)return;const{progressSteps:r,currentProgressStep:s}=e;if(!r||r.length===0||s===void 0){Ct(n);return}ot(n),n.textContent="",s>=r.length&&Vt("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),r.forEach((i,o)=>{const l=Xk(i);if(n.appendChild(l),o===s&&Ce(l,D["active-progress-step"]),o!==r.length-1){const c=Zk(e);n.appendChild(c)}})},Xk=t=>{const e=document.createElement("li");return Ce(e,D["progress-step"]),Yt(e,t),e},Zk=t=>{const e=document.createElement("li");return Ce(e,D["progress-step-line"]),t.progressStepsDistance&&Jr(e,"width",t.progressStepsDistance),e},e1=(t,e)=>{const n=Gw();n&&(rd(n),Lo(n,e.title||e.titleText,"block"),e.title&&id(e.title,n),e.titleText&&(n.innerText=e.titleText),Gt(n,e,"title"))},av=(t,e)=>{Qk(t,e),kk(t,e),Jk(t,e),jk(t,e),Wk(t,e),e1(t,e),Pk(t,e),Bk(t,e),Ck(t,e),$k(t,e);const n=xe();typeof e.didRender=="function"&&n&&e.didRender(n),se.eventEmitter.emit("didRender",n)},t1=()=>$t(xe()),lv=()=>{var t;return(t=On())===null||t===void 0?void 0:t.click()},n1=()=>{var t;return(t=ps())===null||t===void 0?void 0:t.click()},r1=()=>{var t;return(t=ui())===null||t===void 0?void 0:t.click()},di=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),cv=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},s1=(t,e,n)=>{cv(t),e.toast||(t.keydownHandler=r=>o1(e,r,n),t.keydownTarget=e.keydownListenerCapture?window:xe(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},Ru=(t,e)=>{var n;const r=td();if(r.length){t=t+e,t===r.length?t=0:t===-1&&(t=r.length-1),r[t].focus();return}(n=xe())===null||n===void 0||n.focus()},uv=["ArrowRight","ArrowDown"],i1=["ArrowLeft","ArrowUp"],o1=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?a1(e,t):e.key==="Tab"?l1(e):[...uv,...i1].includes(e.key)?c1(e.key):e.key==="Escape"&&u1(e,t,n)))},a1=(t,e)=>{if(!Kl(e.allowEnterKey))return;const n=Jl(xe(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;lv(),t.preventDefault()}},l1=t=>{const e=t.target,n=td();let r=-1;for(let s=0;s<n.length;s++)if(e===n[s]){r=s;break}t.shiftKey?Ru(r,-1):Ru(r,1),t.stopPropagation(),t.preventDefault()},c1=t=>{const e=No(),n=On(),r=ps(),s=ui();if(!e||!n||!r||!s)return;const i=[n,r,s];if(document.activeElement instanceof HTMLElement&&!i.includes(document.activeElement))return;const o=uv.includes(t)?"nextElementSibling":"previousElementSibling";let l=document.activeElement;if(l){for(let c=0;c<e.children.length;c++){if(l=l[o],!l)return;if(l instanceof HTMLButtonElement&&$t(l))break}l instanceof HTMLButtonElement&&l.focus()}},u1=(t,e,n)=>{Kl(e.allowEscapeKey)&&(t.preventDefault(),n(di.esc))};var Zs={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const h1=()=>{const t=Nt();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},hv=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},dv=typeof window<"u"&&!!window.GestureEvent,d1=()=>{if(dv&&!Kn(document.body,D.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,Ce(document.body,D.iosfix),f1()}},f1=()=>{const t=Nt();if(!t)return;let e;t.ontouchstart=n=>{e=p1(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},p1=t=>{const e=t.target,n=Nt(),r=Xh();return!n||!r||m1(t)||g1(t)?!1:e===n||!Rm(n)&&e instanceof HTMLElement&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(Rm(r)&&r.contains(e))},m1=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",g1=t=>t.touches&&t.touches.length>1,_1=()=>{if(Kn(document.body,D.iosfix)){const t=parseInt(document.body.style.top,10);an(document.body,D.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},y1=()=>{const t=document.createElement("div");t.className=D["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let Fs=null;const w1=t=>{Fs===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(Fs=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Fs+y1()}px`)},v1=()=>{Fs!==null&&(document.body.style.paddingRight=`${Fs}px`,Fs=null)};function fv(t,e,n,r){Yl()?Dm(t,r):(ik(n).then(()=>Dm(t,r)),cv(se)),dv?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),nd()&&(v1(),_1(),hv()),E1()}function E1(){an([document.documentElement,document.body],[D.shown,D["height-auto"],D["no-backdrop"],D["toast-shown"]])}function _r(t){t=T1(t);const e=Zs.swalPromiseResolve.get(this),n=b1(this);this.isAwaitingPromise?t.isDismissed||(Fo(this),e(t)):n&&e(t)}const b1=t=>{const e=xe();if(!e)return!1;const n=Be.innerParams.get(t);if(!n||Kn(e,n.hideClass.popup))return!1;an(e,n.showClass.popup),Ce(e,n.hideClass.popup);const r=Nt();return an(r,n.showClass.backdrop),Ce(r,n.hideClass.backdrop),I1(t,e,n),!0};function pv(t){const e=Zs.swalPromiseReject.get(this);Fo(this),e&&e(t)}const Fo=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,Be.innerParams.get(t)||t._destroy())},T1=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),I1=(t,e,n)=>{var r;const s=Nt(),i=Zw(e);typeof n.willClose=="function"&&n.willClose(e),(r=se.eventEmitter)===null||r===void 0||r.emit("willClose",e),i?A1(t,e,s,n.returnFocus,n.didClose):fv(t,s,n.returnFocus,n.didClose)},A1=(t,e,n,r,s)=>{se.swalCloseEventFinishedCallback=fv.bind(null,t,n,r,s);const i=function(o){if(o.target===e){var l;(l=se.swalCloseEventFinishedCallback)===null||l===void 0||l.call(se),delete se.swalCloseEventFinishedCallback,e.removeEventListener("animationend",i),e.removeEventListener("transitionend",i)}};e.addEventListener("animationend",i),e.addEventListener("transitionend",i)},Dm=(t,e)=>{setTimeout(()=>{var n;typeof e=="function"&&e.bind(t.params)(),(n=se.eventEmitter)===null||n===void 0||n.emit("didClose"),t._destroy&&t._destroy()})},ei=t=>{let e=xe();if(e||new Bs,e=xe(),!e)return;const n=hi();Yl()?Ct(ci()):C1(e,t),ot(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},C1=(t,e)=>{const n=No(),r=hi();!n||!r||(!e&&$t(On())&&(e=On()),ot(n),e&&(Ct(e),r.setAttribute("data-button-to-replace",e.className),n.insertBefore(r,e)),Ce([t,n],D.loading))},S1=(t,e)=>{e.input==="select"||e.input==="radio"?D1(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(Yh(e.inputValue)||Jh(e.inputValue))&&(ei(On()),O1(t,e))},R1=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return P1(n);case"radio":return k1(n);case"file":return x1(n);default:return e.inputAutoTrim?n.value.trim():n.value}},P1=t=>t.checked?1:0,k1=t=>t.checked?t.value:null,x1=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,D1=(t,e)=>{const n=xe();if(!n)return;const r=s=>{e.input==="select"?V1(n,sl(s),e):e.input==="radio"&&N1(n,sl(s),e)};Yh(e.inputOptions)||Jh(e.inputOptions)?(ei(On()),Oo(e.inputOptions).then(s=>{t.hideLoading(),r(s)})):typeof e.inputOptions=="object"?r(e.inputOptions):fs(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},O1=(t,e)=>{const n=t.getInput();n&&(Ct(n),Oo(e.inputValue).then(r=>{n.value=e.input==="number"?`${parseFloat(r)||0}`:`${r}`,ot(n),n.focus(),t.hideLoading()}).catch(r=>{fs(`Error in inputValue promise: ${r}`),n.value="",ot(n),n.focus(),t.hideLoading()}))};function V1(t,e,n){const r=gr(t,D.select);if(!r)return;const s=(i,o,l)=>{const c=document.createElement("option");c.value=l,Yt(c,o),c.selected=mv(l,n.inputValue),i.appendChild(c)};e.forEach(i=>{const o=i[0],l=i[1];if(Array.isArray(l)){const c=document.createElement("optgroup");c.label=o,c.disabled=!1,r.appendChild(c),l.forEach(h=>s(c,h[1],h[0]))}else s(r,l,o)}),r.focus()}function N1(t,e,n){const r=gr(t,D.radio);if(!r)return;e.forEach(i=>{const o=i[0],l=i[1],c=document.createElement("input"),h=document.createElement("label");c.type="radio",c.name=D.radio,c.value=o,mv(o,n.inputValue)&&(c.checked=!0);const d=document.createElement("span");Yt(d,l),d.className=D.label,h.appendChild(c),h.appendChild(d),r.appendChild(h)});const s=r.querySelectorAll("input");s.length&&s[0].focus()}const sl=t=>{const e=[];return t instanceof Map?t.forEach((n,r)=>{let s=n;typeof s=="object"&&(s=sl(s)),e.push([r,s])}):Object.keys(t).forEach(n=>{let r=t[n];typeof r=="object"&&(r=sl(r)),e.push([n,r])}),e},mv=(t,e)=>!!e&&e.toString()===t.toString(),L1=t=>{const e=Be.innerParams.get(t);t.disableButtons(),e.input?gv(t,"confirm"):cd(t,!0)},M1=t=>{const e=Be.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?gv(t,"deny"):ld(t,!1)},F1=(t,e)=>{t.disableButtons(),e(di.cancel)},gv=(t,e)=>{const n=Be.innerParams.get(t);if(!n.input){fs(`The "input" parameter is needed to be set when using returnInputValueOn${Qh(e)}`);return}const r=t.getInput(),s=R1(t,n);n.inputValidator?U1(t,s,e):r&&!r.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||r.validationMessage)):e==="deny"?ld(t,s):cd(t,s)},U1=(t,e,n)=>{const r=Be.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Oo(r.inputValidator(e,r.validationMessage))).then(i=>{t.enableButtons(),t.enableInput(),i?t.showValidationMessage(i):n==="deny"?ld(t,e):cd(t,e)})},ld=(t,e)=>{const n=Be.innerParams.get(t||void 0);n.showLoaderOnDeny&&ei(ps()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>Oo(n.preDeny(e,n.validationMessage))).then(s=>{s===!1?(t.hideLoading(),Fo(t)):t.close({isDenied:!0,value:typeof s>"u"?e:s})}).catch(s=>_v(t||void 0,s))):t.close({isDenied:!0,value:e})},Om=(t,e)=>{t.close({isConfirmed:!0,value:e})},_v=(t,e)=>{t.rejectPromise(e)},cd=(t,e)=>{const n=Be.innerParams.get(t||void 0);n.showLoaderOnConfirm&&ei(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>Oo(n.preConfirm(e,n.validationMessage))).then(s=>{$t(Gl())||s===!1?(t.hideLoading(),Fo(t)):Om(t,typeof s>"u"?e:s)}).catch(s=>_v(t||void 0,s))):Om(t,e)};function il(){const t=Be.innerParams.get(this);if(!t)return;const e=Be.domCache.get(this);Ct(e.loader),Yl()?t.icon&&ot(ci()):B1(e),an([e.popup,e.actions],D.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const B1=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?ot(e[0],"inline-block"):pk()&&Ct(t.actions)};function yv(){const t=Be.innerParams.get(this),e=Be.domCache.get(this);return e?Jl(e.popup,t.input):null}function wv(t,e,n){const r=Be.domCache.get(t);e.forEach(s=>{r[s].disabled=n})}function vv(t,e){const n=xe();if(!(!n||!t))if(t.type==="radio"){const r=n.querySelectorAll(`[name="${D.radio}"]`);for(let s=0;s<r.length;s++)r[s].disabled=e}else t.disabled=e}function Ev(){wv(this,["confirmButton","denyButton","cancelButton"],!1)}function bv(){wv(this,["confirmButton","denyButton","cancelButton"],!0)}function Tv(){vv(this.getInput(),!1)}function Iv(){vv(this.getInput(),!0)}function Av(t){const e=Be.domCache.get(this),n=Be.innerParams.get(this);Yt(e.validationMessage,t),e.validationMessage.className=D["validation-message"],n.customClass&&n.customClass.validationMessage&&Ce(e.validationMessage,n.customClass.validationMessage),ot(e.validationMessage);const r=this.getInput();r&&(r.setAttribute("aria-invalid","true"),r.setAttribute("aria-describedby",D["validation-message"]),Jw(r),Ce(r,D.inputerror))}function Cv(){const t=Be.domCache.get(this);t.validationMessage&&Ct(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),an(e,D.inputerror))}const Us={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},$1=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],j1={allowEnterKey:void 0},H1=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Sv=t=>Object.prototype.hasOwnProperty.call(Us,t),Rv=t=>$1.indexOf(t)!==-1,Pv=t=>j1[t],q1=t=>{Sv(t)||Vt(`Unknown parameter "${t}"`)},z1=t=>{H1.includes(t)&&Vt(`The parameter "${t}" is incompatible with toasts`)},W1=t=>{const e=Pv(t);e&&Kw(t,e)},kv=t=>{t.backdrop===!1&&t.allowOutsideClick&&Vt('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","borderless"].includes(t.theme)&&Vt(`Invalid theme "${t.theme}". Expected "light", "dark", "auto", or "borderless"`);for(const e in t)q1(e),t.toast&&z1(e),W1(e)};function xv(t){const e=Nt(),n=xe(),r=Be.innerParams.get(this);if(!n||Kn(n,r.hideClass.popup)){Vt("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const s=K1(t),i=Object.assign({},r,s);kv(i),e.dataset.swal2Theme=i.theme,av(this,i),Be.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const K1=t=>{const e={};return Object.keys(t).forEach(n=>{Rv(n)?e[n]=t[n]:Vt(`Invalid parameter to update: ${n}`)}),e};function Dv(){const t=Be.domCache.get(this),e=Be.innerParams.get(this);if(!e){Ov(this);return}t.popup&&se.swalCloseEventFinishedCallback&&(se.swalCloseEventFinishedCallback(),delete se.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),se.eventEmitter.emit("didDestroy"),G1(this)}const G1=t=>{Ov(t),delete t.params,delete se.keydownHandler,delete se.keydownTarget,delete se.currentInstance},Ov=t=>{t.isAwaitingPromise?(Uc(Be,t),t.isAwaitingPromise=!0):(Uc(Zs,t),Uc(Be,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},Uc=(t,e)=>{for(const n in t)t[n].delete(e)};var Q1=Object.freeze({__proto__:null,_destroy:Dv,close:_r,closeModal:_r,closePopup:_r,closeToast:_r,disableButtons:bv,disableInput:Iv,disableLoading:il,enableButtons:Ev,enableInput:Tv,getInput:yv,handleAwaitingPromise:Fo,hideLoading:il,rejectPromise:pv,resetValidationMessage:Cv,showValidationMessage:Av,update:xv});const Y1=(t,e,n)=>{t.toast?J1(t,e,n):(Z1(e),ex(e),tx(t,e,n))},J1=(t,e,n)=>{e.popup.onclick=()=>{t&&(X1(t)||t.timer||t.input)||n(di.close)}},X1=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let ol=!1;const Z1=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(ol=!0)}}},ex=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(ol=!0)}}},tx=(t,e,n)=>{e.container.onclick=r=>{if(ol){ol=!1;return}r.target===e.container&&Kl(t.allowOutsideClick)&&n(di.backdrop)}},nx=t=>typeof t=="object"&&t.jquery,Vm=t=>t instanceof Element||nx(t),rx=t=>{const e={};return typeof t[0]=="object"&&!Vm(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,r)=>{const s=t[r];typeof s=="string"||Vm(s)?e[n]=s:s!==void 0&&fs(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),e};function sx(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return new this(...e)}function ix(t){class e extends this{_main(r,s){return super._main(r,Object.assign({},t,s))}}return e}const ox=()=>se.timeout&&se.timeout.getTimerLeft(),Vv=()=>{if(se.timeout)return mk(),se.timeout.stop()},Nv=()=>{if(se.timeout){const t=se.timeout.start();return sd(t),t}},ax=()=>{const t=se.timeout;return t&&(t.running?Vv():Nv())},lx=t=>{if(se.timeout){const e=se.timeout.increase(t);return sd(e,!0),e}},cx=()=>!!(se.timeout&&se.timeout.isRunning());let Nm=!1;const Pu={};function ux(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Pu[t]=this,Nm||(document.body.addEventListener("click",hx),Nm=!0)}const hx=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in Pu){const r=e.getAttribute(n);if(r){Pu[n].fire({template:r});return}}};class dx{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const r=this._getHandlersByEventName(e);r.includes(n)||r.push(n)}once(e,n){var r=this;const s=function(){r.removeListener(e,s);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];n.apply(r,o)};this.on(e,s)}emit(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];this._getHandlersByEventName(e).forEach(i=>{try{i.apply(this,r)}catch(o){console.error(o)}})}removeListener(e,n){const r=this._getHandlersByEventName(e),s=r.indexOf(n);s>-1&&r.splice(s,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}se.eventEmitter=new dx;const fx=(t,e)=>{se.eventEmitter.on(t,e)},px=(t,e)=>{se.eventEmitter.once(t,e)},mx=(t,e)=>{if(!t){se.eventEmitter.reset();return}e?se.eventEmitter.removeListener(t,e):se.eventEmitter.removeAllListeners(t)};var gx=Object.freeze({__proto__:null,argsToParams:rx,bindClickHandler:ux,clickCancel:r1,clickConfirm:lv,clickDeny:n1,enableLoading:ei,fire:sx,getActions:No,getCancelButton:ui,getCloseButton:ed,getConfirmButton:On,getContainer:Nt,getDenyButton:ps,getFocusableElements:td,getFooter:Yw,getHtmlContainer:Xh,getIcon:ci,getIconContent:ck,getImage:Qw,getInputLabel:uk,getLoader:hi,getPopup:xe,getProgressSteps:Zh,getTimerLeft:ox,getTimerProgressBar:Ql,getTitle:Gw,getValidationMessage:Gl,increaseTimer:lx,isDeprecatedParameter:Pv,isLoading:dk,isTimerRunning:cx,isUpdatableParameter:Rv,isValidParameter:Sv,isVisible:t1,mixin:ix,off:mx,on:fx,once:px,resumeTimer:Nv,showLoading:ei,stopTimer:Vv,toggleTimer:ax});class _x{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Lv=["swal-title","swal-html","swal-footer"],yx=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return Cx(n),Object.assign(wx(n),vx(n),Ex(n),bx(n),Tx(n),Ix(n),Ax(n,Lv))},wx=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(r=>{os(r,["name","value"]);const s=r.getAttribute("name"),i=r.getAttribute("value");!s||!i||(typeof Us[s]=="boolean"?e[s]=i!=="false":typeof Us[s]=="object"?e[s]=JSON.parse(i):e[s]=i)}),e},vx=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(r=>{const s=r.getAttribute("name"),i=r.getAttribute("value");!s||!i||(e[s]=new Function(`return ${i}`)())}),e},Ex=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(r=>{os(r,["type","color","aria-label"]);const s=r.getAttribute("type");!s||!["confirm","cancel","deny"].includes(s)||(e[`${s}ButtonText`]=r.innerHTML,e[`show${Qh(s)}Button`]=!0,r.hasAttribute("color")&&(e[`${s}ButtonColor`]=r.getAttribute("color")),r.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=r.getAttribute("aria-label")))}),e},bx=t=>{const e={},n=t.querySelector("swal-image");return n&&(os(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},Tx=t=>{const e={},n=t.querySelector("swal-icon");return n&&(os(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},Ix=t=>{const e={},n=t.querySelector("swal-input");n&&(os(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const r=Array.from(t.querySelectorAll("swal-input-option"));return r.length&&(e.inputOptions={},r.forEach(s=>{os(s,["value"]);const i=s.getAttribute("value");if(!i)return;const o=s.innerHTML;e.inputOptions[i]=o})),e},Ax=(t,e)=>{const n={};for(const r in e){const s=e[r],i=t.querySelector(s);i&&(os(i,[]),n[s.replace(/^swal-/,"")]=i.innerHTML.trim())}return n},Cx=t=>{const e=Lv.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const r=n.tagName.toLowerCase();e.includes(r)||Vt(`Unrecognized element <${r}>`)})},os=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Vt([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Mv=10,Sx=t=>{const e=Nt(),n=xe();typeof t.willOpen=="function"&&t.willOpen(n),se.eventEmitter.emit("willOpen",n);const s=window.getComputedStyle(document.body).overflowY;kx(e,n,t),setTimeout(()=>{Rx(e,n)},Mv),nd()&&(Px(e,t.scrollbarPadding,s),h1()),!Yl()&&!se.previousActiveElement&&(se.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),se.eventEmitter.emit("didOpen",n),an(e,D["no-transition"])},al=t=>{const e=xe();if(t.target!==e)return;const n=Nt();e.removeEventListener("animationend",al),e.removeEventListener("transitionend",al),n.style.overflowY="auto"},Rx=(t,e)=>{Zw(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",al),e.addEventListener("transitionend",al)):t.style.overflowY="auto"},Px=(t,e,n)=>{d1(),e&&n!=="hidden"&&w1(n),setTimeout(()=>{t.scrollTop=0})},kx=(t,e,n)=>{Ce(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),ot(e,"grid"),setTimeout(()=>{Ce(e,n.showClass.popup),e.style.removeProperty("opacity")},Mv)):ot(e,"grid"),Ce([document.documentElement,document.body],D.shown),n.heightAuto&&n.backdrop&&!n.toast&&Ce([document.documentElement,document.body],D["height-auto"])};var Lm={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function xx(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=Lm.email),t.input==="url"&&(t.inputValidator=Lm.url))}function Dx(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Vt('Target parameter is not valid, defaulting to "body"'),t.target="body")}function Ox(t){xx(t),t.showLoaderOnConfirm&&!t.preConfirm&&Vt(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Dx(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),Tk(t)}let bn;var ua=new WeakMap;class Xe{constructor(){if(tk(this,ua,void 0),typeof window>"u")return;bn=this;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=Object.freeze(this.constructor.argsToParams(n));this.params=s,this.isAwaitingPromise=!1,nk(ua,this,this._main(bn.params))}_main(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(kv(Object.assign({},n,e)),se.currentInstance){const i=Zs.swalPromiseResolve.get(se.currentInstance),{isAwaitingPromise:o}=se.currentInstance;se.currentInstance._destroy(),o||i({isDismissed:!0}),nd()&&hv()}se.currentInstance=bn;const r=Nx(e,n);Ox(r),Object.freeze(r),se.timeout&&(se.timeout.stop(),delete se.timeout),clearTimeout(se.restoreFocusTimeout);const s=Lx(bn);return av(bn,r),Be.innerParams.set(bn,r),Vx(bn,s,r)}then(e){return Am(ua,this).then(e)}finally(e){return Am(ua,this).finally(e)}}const Vx=(t,e,n)=>new Promise((r,s)=>{const i=o=>{t.close({isDismissed:!0,dismiss:o})};Zs.swalPromiseResolve.set(t,r),Zs.swalPromiseReject.set(t,s),e.confirmButton.onclick=()=>{L1(t)},e.denyButton.onclick=()=>{M1(t)},e.cancelButton.onclick=()=>{F1(t,i)},e.closeButton.onclick=()=>{i(di.close)},Y1(n,e,i),s1(se,n,i),S1(t,n),Sx(n),Mx(se,n,i),Fx(e,n),setTimeout(()=>{e.container.scrollTop=0})}),Nx=(t,e)=>{const n=yx(t),r=Object.assign({},Us,e,n,t);return r.showClass=Object.assign({},Us.showClass,r.showClass),r.hideClass=Object.assign({},Us.hideClass,r.hideClass),r.animation===!1&&(r.showClass={backdrop:"swal2-noanimation"},r.hideClass={}),r},Lx=t=>{const e={popup:xe(),container:Nt(),actions:No(),confirmButton:On(),denyButton:ps(),cancelButton:ui(),loader:hi(),closeButton:ed(),validationMessage:Gl(),progressSteps:Zh()};return Be.domCache.set(t,e),e},Mx=(t,e,n)=>{const r=Ql();Ct(r),e.timer&&(t.timeout=new _x(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(ot(r),Gt(r,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&sd(e.timer)})))},Fx=(t,e)=>{if(!e.toast){if(!Kl(e.allowEnterKey)){Kw("allowEnterKey"),$x();return}Ux(t)||Bx(t,e)||Ru(-1,1)}},Ux=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const n of e)if(n instanceof HTMLElement&&$t(n))return n.focus(),!0;return!1},Bx=(t,e)=>e.focusDeny&&$t(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&$t(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&$t(t.confirmButton)?(t.confirmButton.focus(),!0):!1,$x=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const t=new Date,e=localStorage.getItem("swal-initiation");e?(t.getTime()-Date.parse(e))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const n=document.createElement("audio");n.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",n.loop=!0,document.body.appendChild(n),setTimeout(()=>{n.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${t}`)}Xe.prototype.disableButtons=bv;Xe.prototype.enableButtons=Ev;Xe.prototype.getInput=yv;Xe.prototype.disableInput=Iv;Xe.prototype.enableInput=Tv;Xe.prototype.hideLoading=il;Xe.prototype.disableLoading=il;Xe.prototype.showValidationMessage=Av;Xe.prototype.resetValidationMessage=Cv;Xe.prototype.close=_r;Xe.prototype.closePopup=_r;Xe.prototype.closeModal=_r;Xe.prototype.closeToast=_r;Xe.prototype.rejectPromise=pv;Xe.prototype.update=xv;Xe.prototype._destroy=Dv;Object.assign(Xe,gx);Object.keys(Q1).forEach(t=>{Xe[t]=function(){return bn&&bn[t]?bn[t](...arguments):null}});Xe.DismissReason=di;Xe.version="11.17.2";const Bs=Xe;Bs.default=Bs;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,':root{--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-footer-border-color: #eee;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-input-background: transparent;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:var(--swal2-border-radius);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:var(--swal2-input-background);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:var(--swal2-background);box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const _n=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},jx={class:"sidebar"},Hx={class:"user"},qx={class:"nav-links"},zx={__name:"NavBar",setup(t){const e=Hw(),n=zh(),r=Dt(()=>n.user),s=async()=>{await n.logout(),e.push("/")};return(i,o)=>{const l=Wu("router-link");return _e(),we("nav",jx,[o[2]||(o[2]=ee("h1",{class:"headline"},"Bro-Bank",-1)),ee("p",Hx,"Eingeloggt: "+He(r.value.email),1),ee("ul",qx,[ee("li",null,[We(l,{to:"/home"},{default:Zi(()=>o[0]||(o[0]=[js("🏠 Home")])),_:1})]),ee("li",null,[We(l,{to:"/newgroups"},{default:Zi(()=>o[1]||(o[1]=[js("💬 Finde Bros")])),_:1})])]),ee("button",{class:"logout-btn",onClick:s},"🚪 Abmelden")])}}},Wx=_n(zx,[["__scopeId","data-v-63a0c81f"]]),Kx={class:"container"},Gx={class:"input-group"},Qx={class:"input-group"},Yx={class:"input-group"},Jx=["required"],Xx={type:"submit"},Zx={__name:"LoginBar",setup(t){const e=Hw(),n=ke(""),r=ke(""),s=ke(""),i=ke(!1),o=Bs.mixin({toast:!0,position:"bottom-left",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:p=>{p.onmouseenter=Bs.stopTimer,p.onmouseleave=Bs.resumeTimer}});async function l(){i.value?await c():await h()}async function c(){if(r.value!==s.value){o.fire({icon:"error",title:"Fehler",text:"Passwörter stimmen nicht überein!",timer:!1});return}try{const p=await vA(sn,n.value,r.value),m=p.user;await Rw(mn(Kt,"users",m.uid),{username:n.value}),console.log("Erfolgreich registriert:",p.user),o.fire({icon:"success",title:"Registrierung erfolgreich!",showConfirmButton:!1,timer:1500}),e.push("/home")}catch(p){o.fire({icon:"error",title:"Registrierungsfehler",text:p.message})}}async function h(){try{await EA(sn,n.value,r.value),o.fire({icon:"success",title:"Signed in successfully"}),e.push("/home")}catch(p){o.fire({icon:"error",title:"Anmeldefehler",text:p.message,timer:!1})}}function d(){i.value=!i.value}return(p,m)=>(_e(),we("div",Kx,[m[3]||(m[3]=ee("h1",{class:"headline"},"Bro-Bank",-1)),ee("form",{onSubmit:Kg(l,["prevent"])},[ee("div",Gx,[qn(ee("input",{"onUpdate:modelValue":m[0]||(m[0]=y=>n.value=y),id:"email",type:"email",required:""},null,512),[[vr,n.value]]),ee("label",{class:en({active:n.value}),for:"email"},"E-Mail",2)]),ee("div",Qx,[qn(ee("input",{"onUpdate:modelValue":m[1]||(m[1]=y=>r.value=y),id:"password",type:"password",required:""},null,512),[[vr,r.value]]),ee("label",{class:en({active:r.value}),for:"password"},"Passwort",2)]),ee("div",{class:en(["register-fields",{expanded:i.value}])},[ee("div",Yx,[qn(ee("input",{"onUpdate:modelValue":m[2]||(m[2]=y=>s.value=y),id:"confirmPassword",type:"password",required:i.value},null,8,Jx),[[vr,s.value]]),ee("label",{class:en({active:s.value}),for:"confirmPassword"},"Passwort bestätigen",2)])],2),ee("div",{class:en(["button-container",{shifted:i.value}])},[ee("button",Xx,He(i.value?"Registrieren":"Login"),1),ee("button",{type:"button",class:"toggle-btn",onClick:d},He(i.value?"Zurück zum Login":"Registrieren"),1)],2)],32)]))}},eD=_n(Zx,[["__scopeId","data-v-e9a37f23"]]),tD={class:"app-container"},nD={__name:"App",setup(t){const e=zh(),n=Dt(()=>e.user),r=ke(!1),s=()=>{r.value=!r.value};return(i,o)=>{const l=Wu("router-view");return _e(),we("div",tD,[ee("aside",{class:en(["sidebar",{collapsed:r.value}])},[n.value?(_e(),we("button",{key:0,class:en(["toggle-btn",{collapsed:r.value}]),onClick:s},He(r.value?"⮚⮚⮚":"⮘⮘⮘"),3)):un("",!0),n.value?(_e(),Da(Wx,{key:1})):(_e(),Da(eD,{key:2}))],2),ee("main",{class:en(["content",{expanded:r.value}])},[We(l)],2)])}}},rD=_n(nD,[["__scopeId","data-v-c32f97b0"]]),sD={class:"username-container"},iD={key:0,class:"username-setup"},oD={class:"buttons"},aD={key:0,class:"error"},lD={key:1,class:"username-display"},cD={class:"username-display2"},uD={__name:"Userdata",setup(t){const e=ke(""),n=ke(""),r=ke(!1),s=ke("");ls(()=>{Tl(sn,async c=>{if(c)try{console.log("Angemeldeter Nutzer:",c.uid);const h=await mo(mn(Kt,"users",c.uid));h.exists()&&(e.value=h.data().username)}catch(h){console.error("Fehler beim Abrufen der Daten:",h),s.value="Fehler beim Laden."}else s.value="Bitte melde dich an!"})});async function i(){if(!n.value.trim()){s.value="Bitte gib einen gültigen Namen ein.";return}try{await Rw(mn(Kt,"users",sn.currentUser.uid),{username:n.value},{merge:!0}),e.value=n.value,n.value="",r.value=!1}catch(c){console.error("Fehler beim Speichern des Namens:",c),s.value="Fehler beim Speichern."}}function o(){n.value=e.value,r.value=!0}function l(){r.value=!1,n.value=""}return(c,h)=>(_e(),we("div",sD,[!e.value||r.value?(_e(),we("div",iD,[h[1]||(h[1]=ee("p",null,"Wähle einen Namen:",-1)),qn(ee("input",{"onUpdate:modelValue":h[0]||(h[0]=d=>n.value=d),id:"username",placeholder:"Username"},null,512),[[vr,n.value]]),ee("div",oD,[ee("button",{onClick:i},"Speichern"),e.value?(_e(),we("button",{key:0,onClick:l,class:"cancel-btn"}," Abbrechen ")):un("",!0)]),s.value?(_e(),we("p",aD,He(s.value),1)):un("",!0)])):(_e(),we("div",lD,[ee("div",cD,[ee("p",null,"Willkommen, "+He(e.value)+"!",1),ee("button",{onClick:o,class:"edit-btn"},"✏️")])]))]))}},hD=_n(uD,[["__scopeId","data-v-53b0214b"]]);async function dD(t,e){if(sn.currentUser)try{const n=await Pw(po(Kt,"groups"),{name:t,ownerId:sn.currentUser.uid,members:[sn.currentUser.uid],codeword:e,createdAt:QP()});console.log("Gruppe erstellt mit ID:",n.id)}catch(n){console.error("Fehler beim Erstellen der Gruppe:",n)}}async function fD(t){const e=Bh(po(Kt,"groups"),Tw("members","array-contains",t));return(await Hh(e)).docs.map(r=>({id:r.id,...r.data()}))}async function pD(t){try{const e=po(Kt,"groups"),n=Bh(e,Tw("codeword","==",t)),r=await Hh(n);if(r.empty)return!1;const s=r.docs[0],i=s.id,o=sn.currentUser;if(!o)throw new Error("Kein angemeldeter Nutzer.");const l=mn(Kt,"groups",i);return await KP(l,{members:[...s.data().members||[],o.uid]}),!0}catch(e){throw console.error("Fehler beim Gruppenbeitritt:",e),e}}async function mD(t){if(!t)return console.error("Fehler: Keine groupId erhalten."),null;try{const e=mn(Kt,"groups",t),n=await mo(e);return n.exists()?{id:n.id,...n.data()}:(console.warn("Gruppe nicht gefunden:",t),null)}catch(e){return console.error("Fehler beim Laden der Gruppe:",e),null}}async function Fv(t){const e=mn(Kt,"groups",t);try{const n=await mo(e);if(!n.exists())return console.error("Gruppe existiert nicht!"),[];const i=(n.data().members||[]).map(async l=>{const c=mn(Kt,"users",l),h=await mo(c);return h.exists()?{id:l,username:h.data().username}:null});return(await Promise.all(i)).filter(Boolean)}catch(n){return console.error("Fehler beim Abrufen der Gruppenmitglieder:",n),[]}}const gD={class:"groups-container"},_D={key:0,class:"groups-list"},yD={key:1,class:"no-groups"},wD={__name:"GroupOverview",setup(t){const e=ke([]);return ls(()=>{Tl(sn,async n=>{n&&(e.value=await fD(n.uid))})}),(n,r)=>{const s=Wu("router-link");return _e(),we("div",gD,[r[2]||(r[2]=ee("h1",null,"Deine Gruppen",-1)),e.value.length>0?(_e(),we("div",_D,[(_e(!0),we(xt,null,ka(e.value,i=>(_e(),Da(s,{key:i.id,to:`/group/${i.id}`,class:"group-card"},{default:Zi(()=>[ee("h2",null,He(i.name),1),ee("p",null,He(i.description),1)]),_:2},1032,["to"]))),128))])):(_e(),we("div",yD,[r[1]||(r[1]=ee("p",null,"Du bist in keiner Gruppe.",-1)),We(s,{to:"/newgroups"},{default:Zi(()=>r[0]||(r[0]=[js("Gruppe beitreten")])),_:1})]))])}}},vD=_n(wD,[["__scopeId","data-v-7f8ff4e9"]]),ED={__name:"HomeView",setup(t){return(e,n)=>(_e(),we(xt,null,[We(hD,{class:"Userdata"}),We(vD,{class:"GroupOverview"})],64))}},bD=_n(ED,[["__scopeId","data-v-6fc3fbdc"]]),Uv=Xg("transactions",()=>{const t=ke([]);async function e(r,s){try{const i=mn(Kt,"groups",r),o=po(i,"transactions"),l=await Pw(o,{...s,createdAt:new Date});t.value.push({id:l.id,...s}),console.log("✅ Transaktion gespeichert in Gruppe",r)}catch(i){console.error("❌ Fehler beim Speichern:",i)}}async function n(r){try{const s=mn(Kt,"groups",r),i=po(s,"transactions"),o=Bh(i,HP("createdAt","desc")),l=await Hh(o);t.value=l.docs.map(c=>({id:c.id,...c.data()}))}catch(s){console.error("❌ Fehler beim Abrufen:",s)}}return{transactions:t,addTransaction:e,fetchTransactions:n}});async function TD(t){try{const e=await mo(mn(Kt,"users",t));return e.exists()?e.data():(console.error("User not found!"),null)}catch(e){return console.error("Error getting user:",e),null}}const ID=["id","value"],AD=["for"],CD={__name:"TransactionForm",props:{members:Array},setup(t){const e=t,n=Uv(),r=Gh(),s=ke(r.params.groupId),i=ke([]),o=ke(""),l=ke(""),c=ke("send"),h=ke([]),p=zh().user;ls(async()=>{const P=e.members;for(let k of P){const O=await TD(k.id);k.username=O.username}h.value=P});const m=()=>{c.value=c.value==="send"?"receive":"send"},y=async()=>{if(i.value.length===0){alert("Bitte Empfänger auswählen!");return}const P={members:i.value,amount:o.value,comment:l.value,type:c.value,createdBy:p==null?void 0:p.uid,createdAt:new Date().toISOString()};await n.addTransaction(s.value,P),alert("Transaktion gespeichert!")};return(P,k)=>(_e(),we("form",{onSubmit:Kg(y,["prevent"])},[k[3]||(k[3]=ee("h2",null,"Neue Transaktion",-1)),k[4]||(k[4]=ee("label",null,"Empfänger auswählen:",-1)),(_e(!0),we(xt,null,ka(t.members,O=>(_e(),we("div",{key:O.id,class:"custom-checkbox"},[qn(ee("input",{type:"checkbox",id:"member-"+O.id,"onUpdate:modelValue":k[0]||(k[0]=j=>i.value=j),value:O.id},null,8,ID),[[CT,i.value]]),ee("label",{for:"member-"+O.id},He(O.username),9,AD)]))),128)),k[5]||(k[5]=ee("label",null,"Betrag:",-1)),qn(ee("input",{type:"number","onUpdate:modelValue":k[1]||(k[1]=O=>o.value=O),placeholder:"€ Betrag",required:""},null,512),[[vr,o.value]]),k[6]||(k[6]=ee("label",null,"Kommentar:",-1)),qn(ee("input",{type:"text","onUpdate:modelValue":k[2]||(k[2]=O=>l.value=O),placeholder:"Optional"},null,512),[[vr,l.value]]),ee("button",{type:"button",onClick:m},He(c.value==="send"?"➡️ Geld senden":"🔄 Geld erhalten"),1),k[7]||(k[7]=ee("button",{type:"submit"},"Transaktion speichern",-1))],32))}},SD=_n(CD,[["__scopeId","data-v-a2746e1a"]]),RD={class:"transactions"},PD={class:"transaction-header"},kD={class:"icon"},xD={class:"transaction-body"},DD={class:"sender"},OD={key:0,class:"date"},VD={key:0,class:"receiver"},ND={key:0},LD={key:1,class:"comment"},MD={__name:"TransactionList",setup(t){const e=c=>!c||typeof c.toDate!="function"?"—":c.toDate().toLocaleDateString("de-DE",{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),n=Uv(),s=Gh().params.groupId,i=Dt(()=>n.transactions),o=ke({}),l=async()=>{console.log("🔄 Lade Mitglieder der Gruppe für ID:",s);const c=await Fv(s);console.log("📌 Mitglieder erhalten:",c);const h={};for(const d of c)h[d.id]=d.username;for(const d of i.value){const p=d.createdBy;if(!h[p]&&p){const y=c.find(P=>P.id===p);y&&(h[p]=y.username)}}o.value=h,console.log("✅ Mitgliedsnamen gespeichert:",o.value)};return Ds(i,async c=>{c.length>0&&await l()},{immediate:!0}),ls(async()=>{await n.fetchTransactions(s),await l()}),(c,h)=>(_e(),we("div",RD,[h[1]||(h[1]=ee("h2",null,"📜 Transaktionen",-1)),ee("ul",null,[(_e(!0),we(xt,null,ka(i.value,d=>(_e(),we("li",{key:d.id,class:"transaction-item"},[ee("div",PD,[ee("span",kD,He(d.type==="send"?"📤":d.type==="receive"?"📥":"🔄"),1),ee("span",{class:en({sent:d.type==="send",received:d.type==="receive",transfer:d.type==="transfer"})},He(d.amount)+"€ ",3)]),ee("div",xD,[ee("p",DD,[ee("strong",null,He(o.value[d.createdBy]||"Unbekannt"),1),d.createdAt?(_e(),we("span",OD,"("+He(e(d.createdAt))+")",1)):un("",!0)]),d.members?(_e(),we("p",VD,[h[0]||(h[0]=js(" An: ")),(_e(!0),we(xt,null,ka(d.members,(p,m)=>(_e(),we("span",{key:p},[js(He(o.value[p]||"❓")+" ",1),m<d.members.length-1?(_e(),we("span",ND,", ")):un("",!0)]))),128))])):un("",!0),d.comment?(_e(),we("p",LD," 📝 "+He(d.comment),1)):un("",!0)])]))),128))])]))}},FD=_n(MD,[["__scopeId","data-v-0fea62a7"]]),UD={key:0,class:"group-view"},BD={key:1,class:"loading"},$D={key:0},jD={key:1},Mm={__name:"GroupView",setup(t){const e=Gh(),n=ke(null),r=ke(""),s=ke([]),i=ke(e.params.groupId);return ls(async()=>{s.value=await Fv(i.value)}),Mb(async()=>{const o=e.params.groupId;if(!o){r.value="Fehler: Keine Gruppen-ID angegeben!";return}n.value=await mD(o),n.value||(r.value="Gruppe nicht gefunden!")}),(o,l)=>n.value?(_e(),we("div",UD,[ee("h1",null,He(n.value.name),1),ee("p",null,He(n.value.description),1),We(SD,{members:s.value},null,8,["members"]),We(FD)])):(_e(),we("div",BD,[r.value?(_e(),we("p",$D,He(r.value),1)):(_e(),we("p",jD,"Lädt..."))]))}},HD="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2064%2064'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--emojione-monotone'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cpath%20d='M61.971%2042.634c-.632-6.334-2.045-11.643-2.358-25.352c-.223-9.706-12.006-10.453-15.069-7.164c-3.471-4.255-12.762-4.354-16.229.94c-2.693-1.48-9.901-1.799-12.879%201.873c0%200-8.835-1.411-12.836%2013.321c-1.437%205.289.12%2012.302.41%2013.756c2.023%2010.147%2010.502%208.19%2012.209%207.2c2.892%207.44%2010.375%206.101%2013.385%203.913c.174%204.414%203.771%206.535%206.065%205.699c6.722-2.451%2012.33-2.783%2016.764-2.607c2.127.083%203.797-.938%204.741-2.779c3.325-1.733%206.148-5.279%205.797-8.8m-15.525.998c1.008-5.798-1.179-14.392-.4-20.936c-3.16%204.926-.82%2018.871-2.146%2024.525c-1.085%204.62-9.646%203.175-12.294-2.375c-.918-8.487.424-13.407-1.889-22.15c.218%2010.57-1.415%2012.539-.325%2022.813c-2.524%202.592-11.239.768-11.679-3.621c-.587-5.858.628-10.459-1.099-16.139c0%205.369-1.062%208.233-.541%2016.18c.003.049-1.556%201.24-3.869%201.24c-9.471%200-8.646-14.027-7.087-18.926c2.256-7.098%208.207-11.233%2011.281-9.611c1.527-3.561%2010.239-3.875%2011.74-.539c1.296-6.143%2013.705-5.645%2017.005-.166c2.214-4.44%2012.358-3.112%2012.464%203.388c.235%2014.059%202.284%2020.641%202.203%2026.796c-3.471%204.281-9.605%203.902-13.364-.479'%20fill='%23000000'%3e%3c/path%3e%3c/svg%3e",qD={class:"logo-container"},zD={__name:"LoginView",setup(t){return(e,n)=>(_e(),we("div",qD,n[0]||(n[0]=[ee("img",{class:"logo",src:HD,alt:"logo"},null,-1)])))}},WD=_n(zD,[["__scopeId","data-v-6335875f"]]),KD={class:"container"},GD={key:0,class:"success"},QD={key:1,class:"error"},YD={__name:"CreateGroup",setup(t){const e=ke(""),n=ke(""),r=ke(""),s=async()=>{if(!e.value.trim()){r.value="Bitte einen Gruppennamen eingeben.";return}try{await dD(e.value,e.value),n.value="Gruppe erfolgreich erstellt!",e.value="",r.value=""}catch(i){r.value="Fehler beim Erstellen der Gruppe.",console.error(i)}};return(i,o)=>(_e(),we("div",KD,[o[1]||(o[1]=ee("h2",null,"Neue Gruppe erstellen",-1)),qn(ee("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),name:"groupName",type:"text",placeholder:"Gruppenname"},null,512),[[vr,e.value]]),ee("button",{onClick:s},"Erstellen"),n.value?(_e(),we("p",GD,He(n.value),1)):un("",!0),r.value?(_e(),we("p",QD,He(r.value),1)):un("",!0)]))}},JD=_n(YD,[["__scopeId","data-v-df4181b4"]]),XD={class:"container"},ZD={key:0,class:"success"},eO={key:1,class:"error"},tO={__name:"JoinGroup",setup(t){const e=ke(""),n=ke(""),r=ke(""),s=async()=>{if(!e.value.trim()){r.value="Bitte ein Codewort eingeben.";return}try{await pD(e.value)?(n.value="Du bist der Gruppe erfolgreich beigetreten!",r.value=""):(r.value="Ungültiges Codewort.",n.value="")}catch(i){console.error("Fehler beim Beitreten:",i),r.value="Fehler beim Beitritt.",n.value=""}};return(i,o)=>(_e(),we("div",XD,[o[1]||(o[1]=ee("h2",null,"Gruppe beitreten",-1)),qn(ee("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),name:"codeword",placeholder:"Codewort eingeben"},null,512),[[vr,e.value]]),ee("button",{onClick:s},"Beitreten"),n.value?(_e(),we("p",ZD,He(n.value),1)):un("",!0),r.value?(_e(),we("p",eO,He(r.value),1)):un("",!0)]))}},nO=_n(tO,[["__scopeId","data-v-d565c1b9"]]),rO={__name:"NewGroupsView",setup(t){return(e,n)=>(_e(),we(xt,null,[We(JD),We(nO)],64))}},sO=[{path:"/",name:"login",component:WD},{path:"/home",name:"home",component:bD},{path:"/group",name:"groupview",component:Mm},{path:"/group/:groupId",name:"GroupView",component:Mm,props:!0},{path:"/newgroups",name:"newgroups",component:rO}],iO=X2({history:S2("/Website/"),routes:sO});DT(rD).use(iO).use(NT()).mount("#app");
